/**
 * Pure, DOM-free queries over the design-system manifest.
 *
 * This module backs the four WebMCP tools — overview, category, search, and
 * recipes — with no browser dependency, so the exact same behavior can later
 * serve a Node MCP server or npm package without rewriting the design logic.
 * Every function returns a plain serializable object (safe for
 * `JSON.stringify`) and an explicit `{ error }` result for invalid input,
 * so the adapter never has to translate exceptions into tool errors.
 *
 * Output budgets follow Chrome's WebMCP guidance (~1.5K characters per tool
 * output): categories that would exceed the budget are summarized and callers
 * are pointed at `findDesignContract` to narrow down records.
 */
import type {
  DesignCategory,
  DesignCategoryName,
  DesignSystemManifest,
  DesignToken,
  DesignClass,
  DesignRecipe,
} from "./manifest.types";

/** Sections a `get_design_category` call can include or omit. */
const CATEGORY_SECTIONS = ["tokens", "classes", "rules", "examples", "sources"] as const;
type CategorySection = (typeof CATEGORY_SECTIONS)[number];

/** Canonical display order for the seven categories. */
const CATEGORY_ORDER: DesignCategoryName[] = [
  "color",
  "typography",
  "layout",
  "interaction",
  "input",
  "element",
  "button",
];

const DEFAULT_SECTIONS: CategorySection[] = ["rules", "classes"];

/** Maximum result count accepted by the search tool; keeps output bounded. */
const SEARCH_LIMIT_MAX = 20;

/** Rough per-output character budget from Chrome's WebMCP guidance. */
const OUTPUT_BUDGET_CHARACTERS = 1500;

/** A tool result: either a payload or a named error, never both. */
export type DesignQueryResult<T> = { error: string } | ({ error?: undefined } & T);

/** Argument shapes accepted by each query; the adapter maps tool input onto these. */
export interface GetCategoryInput {
  category: string;
  include?: string[];
}

export interface FindContractInput {
  query: string;
  category?: string;
  limit?: number;
}

/**
 * Bounded view over the full manifest used by all queries. Created once per
 * registration; the recipe list travels with it because recipes are part of
 * the same reviewed contract even though they live outside the seven categories.
 */
export interface DesignSystemQuery {
  manifest: DesignSystemManifest;
  recipes: readonly DesignRecipe[];
}

/**
 * Builds the query view over a manifest and recipe list. Validates that all
 * seven categories exist so a malformed manifest fails at registration time
 * rather than inside an individual tool call.
 */
export function createDesignSystemQuery(
  manifest: DesignSystemManifest,
  recipes: readonly DesignRecipe[],
): DesignSystemQuery {
  const missing = CATEGORY_ORDER.filter((name) => manifest.categories[name] == null);
  if (missing.length > 0) {
    throw new Error(`Design manifest is missing categories: ${missing.join(", ")}`);
  }
  return { manifest, recipes };
}

/**
 * Returns the design name, versions, available categories with one-sentence
 * summaries, the manifest URL, and the source revision. Takes no arguments —
 * it is the discovery entry point a consuming agent calls first.
 */
export function getDesignSystemOverview(catalog: DesignSystemQuery): {
  name: string;
  schemaVersion: string;
  designVersion: string;
  manifestUrl: string;
  sourceRevision: string;
  categories: Array<{ name: DesignCategoryName; summary: string }>;
} {
  const { manifest } = catalog;
  return {
    name: manifest.name,
    schemaVersion: manifest.schemaVersion,
    designVersion: manifest.designVersion,
    manifestUrl: manifest.manifestUrl,
    sourceRevision: manifest.sourceRevision,
    categories: CATEGORY_ORDER.map((name) => ({
      name,
      summary: manifest.categories[name].summary,
    })),
  };
}

/**
 * Returns one category with optional sections. Unknown categories, unknown
 * section names, and non-array `include` values are rejected as errors — the
 * schemas promise `additionalProperties: false` and this keeps the query
 * layer honest even when called without schema validation.
 *
 * When the selected sections would exceed the output budget, tokens are
 * truncated to names only (with provenance) and a `narrowWith` hint tells the
 * caller to use `findDesignContract` for the full records.
 */
export function getDesignCategory(
  catalog: DesignSystemQuery,
  input: GetCategoryInput,
): DesignQueryResult<{ category: DesignCategoryName; summary: string; sections: Record<string, unknown>; truncated: boolean }> {
  const { manifest } = catalog;
  const category = input?.category as DesignCategoryName;
  if (!CATEGORY_ORDER.includes(category)) {
    return {
      error: `invalid_category: expected one of ${CATEGORY_ORDER.join(", ")}, received "${String(input?.category)}"`,
    };
  }

  const include = normalizeSections(input?.include);
  if (Array.isArray(include)) {
    const invalid = include.filter((section) => !CATEGORY_SECTIONS.includes(section as CategorySection));
    if (invalid.length > 0) {
      return { error: `invalid_section: ${invalid.join(", ")}` };
    }
  } else {
    return { error: "invalid_include: include must be an array of section names" };
  }

  const sections = new Set<CategorySection>(include as CategorySection[]);
  const data = manifest.categories[category];
  const result: Record<string, unknown> = {};

  if (sections.has("sources")) result.sources = data.sources;
  if (sections.has("rules")) result.rules = data.rules;
  if (sections.has("classes")) {
    result.classes = data.classes.map((entry) => ({
      name: entry.name,
      purpose: entry.purpose,
      ...(entry.requires ? { requires: entry.requires } : {}),
      sourcePath: entry.sourcePath,
    }));
  }
  if (sections.has("tokens")) result.tokens = data.tokens.map(tokenSummary);
  if (sections.has("examples")) result.examples = data.examples;

  let payload = { category, summary: data.summary, sections: result, truncated: false };
  if (approximateSize(payload) > OUTPUT_BUDGET_CHARACTERS) {
    if (sections.has("tokens")) {
      result.tokens = data.tokens.map((token) => token.name);
      result.tokenHint = `Full token records exceed the output budget; call find_design_contract with query="<token name>" and category="${category}" to retrieve individual values.`;
    }
    if (sections.has("examples")) {
      result.examples = data.examples.map((example) => example.title);
      result.exampleHint = `Examples exceed the output budget; call find_design_contract with query="<example title>" and category="${category}" to retrieve individual compositions.`;
    }
    payload = { category, summary: data.summary, sections: result, truncated: true };
  }
  return payload;
}

/**
 * Searches exact token names, class names, and curated keywords across
 * categories. Matching is deterministic and local: exact names first, then
 * substring matches on names, then rule/purpose text. Rejects empty queries,
 * unknown categories, and limits outside 1–20 so output stays bounded.
 */
export function findDesignContract(
  catalog: DesignSystemQuery,
  input: FindContractInput,
): DesignQueryResult<{ query: string; total: number; matches: DesignContractMatch[] }> {
  const query = typeof input?.query === "string" ? input.query.trim() : "";
  if (query.length === 0) {
    return { error: "invalid_query: query must be a non-empty string" };
  }
  if (input?.category != null && !CATEGORY_ORDER.includes(input.category as DesignCategoryName)) {
    return { error: `invalid_category: expected one of ${CATEGORY_ORDER.join(", ")}, received "${input.category}"` };
  }
  const limit = input?.limit == null ? 10 : input.limit;
  if (!Number.isInteger(limit) || limit < 1 || limit > SEARCH_LIMIT_MAX) {
    return { error: `invalid_limit: limit must be an integer between 1 and ${SEARCH_LIMIT_MAX}` };
  }

  const needle = query.toLowerCase();
  const scope = (input?.category as DesignCategoryName | undefined) ?? undefined;
  const matches: DesignContractMatch[] = [];

  for (const categoryName of CATEGORY_ORDER) {
    if (scope && categoryName !== scope) continue;
    const category = catalog.manifest.categories[categoryName];
    for (const token of category.tokens) {
      const rank = matchRank(token.name.toLowerCase(), token.description.toLowerCase(), needle);
      if (rank != null) {
        matches.push({
          type: "token",
          category: categoryName,
          name: token.name,
          value: token.value,
          description: token.description,
          sourcePath: token.sourcePath,
          rank,
        });
      }
    }
    for (const entry of category.classes) {
      const rank = matchRank(entry.name.toLowerCase(), entry.purpose.toLowerCase(), needle);
      if (rank != null) {
        matches.push({
          type: "class",
          category: categoryName,
          name: `.${entry.name}`,
          description: entry.purpose,
          sourcePath: entry.sourcePath,
          rank,
        });
      }
    }
    for (const rule of category.rules) {
      if (rule.toLowerCase().includes(needle)) {
        matches.push({
          type: "rule",
          category: categoryName,
          name: rule,
          description: rule,
          sourcePath: sourcePathForRule(category),
          rank: 2,
        });
      }
    }
  }

  matches.sort((a, b) => (a.rank ?? 3) - (b.rank ?? 3) || a.name.localeCompare(b.name));
  return { query, total: matches.length, matches: matches.slice(0, limit).map(stripRank) };
}

/**
 * Returns a reviewed composition by its recipe id. Recipes carry semantic
 * HTML, required classes, dependencies, accessibility rules, and source
 * paths so an agent copies an approved whole instead of assembling classes
 * from unrelated search results.
 */
export function getDesignRecipe(
  catalog: DesignSystemQuery,
  input: { recipe?: string; mode?: string },
): DesignQueryResult<{ recipe: DesignRecipe }> {
  const mode = input?.mode ?? "both";
  if (mode !== "light" && mode !== "dark" && mode !== "both") {
    return { error: `invalid_mode: expected light, dark, or both, received "${String(input?.mode)}"` };
  }
  const recipe = catalog.recipes.find((entry) => entry.id === input?.recipe);
  if (!recipe) {
    return {
      error: `not_found: no recipe "${String(input?.recipe)}"; available recipes are ${catalog.recipes.map((entry) => entry.id).join(", ")}`,
    };
  }
  return { recipe };
}

/** One compact search hit with category and provenance, as returned by `findDesignContract`. */
export interface DesignContractMatch {
  type: "token" | "class" | "rule";
  category: DesignCategoryName;
  name: string;
  value?: string;
  description: string;
  sourcePath: string;
  /** Lower is better; 0 exact, 1 prefix/substring, 2 body text. Internal only. */
  rank?: number;
}

function normalizeSections(include: string[] | undefined): string[] | undefined {
  if (include == null) return DEFAULT_SECTIONS as unknown as string[];
  if (!Array.isArray(include)) return undefined;
  return include;
}

function tokenSummary(token: DesignToken) {
  return {
    name: token.name,
    value: token.value,
    description: token.description,
    sourcePath: token.sourcePath,
    ...(token.sourceSelector ? { sourceSelector: token.sourceSelector } : {}),
  };
}

/**
 * Ranks a candidate against the needle: 0 for an exact name match, 1 for a
 * name substring, 2 for a body-text hit, null when nothing matches. Exact
 * names sort first so `--primary-color` beats `--primary-color-hover` when
 * an agent asks for the exact contract.
 */
function matchRank(name: string, body: string, needle: string): number | null {
  if (name === needle) return 0;
  if (name.includes(needle)) return 1;
  if (body.includes(needle)) return 2;
  return null;
}

function sourcePathForRule(category: DesignCategory): string {
  return category.sources[0]?.path ?? "";
}

function stripRank(match: DesignContractMatch): Omit<DesignContractMatch, "rank"> {
  const { rank: _rank, ...rest } = match;
  return rest;
}

function approximateSize(value: unknown): number {
  return JSON.stringify(value).length;
}

/** The closed enum values for the recipe tool's `recipe` input, derived from the recipe list. */
export function recipeIds(catalog: DesignSystemQuery): string[] {
  return catalog.recipes.map((recipe) => recipe.id);
}

/** The closed enum values for `category` and `include` inputs, shared with the adapter's schemas. */
export const categoryNames: readonly DesignCategoryName[] = CATEGORY_ORDER;
export const categorySections: readonly CategorySection[] = CATEGORY_SECTIONS;

/** Re-exported for the adapter so the schema and the query layer share one type source. */
export type { DesignCategory, DesignRecipe };