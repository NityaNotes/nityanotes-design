/**
 * Serializable contract for the Nitya Notes design system.
 *
 * These types define the shape consumed by both WebMCP tools and the static
 * `public/design-system/manifest.v1.json` artifact. The manifest is produced
 * from the implemented application stylesheets (`public/assets/css/theme.css`,
 * `public/assets/css/color.css`, `public/assets/css/typography.css`,
 * `public/assets/css/layout.css`, `public/assets/css/interaction.css`,
 * `public/assets/css/input.css`, `public/assets/css/element.css`, and
 * `public/assets/css/button.css`) so an external project can consume the
 * exact grammar this site renders with — without reconstructing it from
 * screenshots or inventing a parallel system.
 *
 * Provenance is part of the contract: every token and class carries the source
 * file (and, where practical, the selector) that establishes it, so a consuming
 * agent can cite where a value comes from and maintainers can diagnose stale
 * output.
 */

/** The seven contract areas exposed to consuming agents. */
export type DesignCategoryName =
  | "color"
  | "typography"
  | "layout"
  | "interaction"
  | "input"
  | "element"
  | "button";

/** The role a source file plays in establishing a category's contract. */
export type DesignSourceRole = "tokens" | "styles" | "content" | "component";

/**
 * A file that owns part of a category's contract. Consumers use `path` to cite
 * provenance; `role` tells them whether the file defines raw values, applies
 * them, or documents them.
 */
export interface DesignSource {
  /** Root-relative path of the stylesheet or content module. */
  path: string;
  /** What the file contributes to the category. */
  role: DesignSourceRole;
}

/**
 * One design value (a CSS custom property). `value` keeps the authored CSS
 * text — including `var()` references and `clamp()`/`color-mix()` expressions —
 * because the relationship between tokens is the contract, not just the end color.
 */
export interface DesignToken {
  /** CSS custom property name including the leading `--`. */
  name: string;
  /** Authored value as written in the source stylesheet. */
  value: string;
  /** Plain-language statement of what the token is for and when to use it. */
  description: string;
  /** File the token is declared in. */
  sourcePath: string;
  /** Selector the token is declared under, when meaningful (`:root`, `html.dark`). */
  sourceSelector?: string;
}

/**
 * A utility class exposed by the grammar. `requires` lists classes or state
 * attributes that must accompany it for the class to have any effect.
 */
export interface DesignClass {
  /** Class name as it appears in markup, without the leading dot. */
  name: string;
  /** What the class does and when a consumer should reach for it. */
  purpose: string;
  /** Companion classes/attributes this class depends on. */
  requires?: string[];
  /** File the class is declared in. */
  sourcePath: string;
}

/**
 * One reviewed usage example. `html` is complete, copy-pasteable markup that
 * uses only grammar classes; `css` is reserved for page-local composition
 * a consumer would need to replicate the example outside this site.
 */
export interface DesignExample {
  /** Human-readable title naming the composition. */
  title: string;
  /** Semantic HTML using grammar classes only. */
  html: string;
  /** Optional page-local CSS the example relies on. */
  css?: string;
}

/**
 * One of the seven contract areas. A category bundles the tokens, utility
 * classes, rules, and examples a consuming agent needs to reproduce that part
 * of the grammar. `rules` are the normative statements (the "application rules"
 * sections of the design routes) — they carry the constraints that markup
 * alone cannot express.
 */
export interface DesignCategory {
  /** One-sentence summary returned by the overview tool. */
  summary: string;
  /** Files that establish this category. */
  sources: DesignSource[];
  /** Custom properties the category owns. */
  tokens: DesignToken[];
  /** Utility classes the category owns. */
  classes: DesignClass[];
  /** Normative usage rules, in reading order. */
  rules: string[];
  /** Reviewed example compositions. */
  examples: DesignExample[];
}

/**
 * The complete, versioned design contract.
 *
 * Produced by `scripts/design-system/build-manifest.mjs`, emitted both as a
 * generated TypeScript module (`src/design-system/manifest.ts`) for the
 * WebMCP query layer and as `public/design-system/manifest.v1.json` for
 * consumers without WebMCP. `schemaVersion` changes only when this shape
 * changes; `designVersion` tracks the design content itself.
 */
export interface DesignSystemManifest {
  /** Shape version of this contract. */
  schemaVersion: "1.0";
  /** Version of the design content, bumped when the grammar changes. */
  designVersion: string;
  /** Product name of the design system. */
  name: "Nitya Notes";
  /** ISO timestamp of manifest generation. */
  generatedAt: string;
  /** Short revision identifier of the source the manifest was built from. */
  sourceRevision: string;
  /** URL of the static JSON artifact, the WebMCP-independent access path. */
  manifestUrl: string;
  /** The seven contract areas, in canonical order. */
  categories: Record<DesignCategoryName, DesignCategory>;
}

/**
 * A reviewed composition of grammar classes for a common UI pattern, returned
 * by the `get_design_recipe` tool. Recipes are the answer to "how do I build a
 * text field?" — a consuming agent copies the markup instead of assembling
 * classes from unrelated search results.
 */
export interface DesignRecipe {
  /** Recipe identifier used as the tool's enum value. */
  id: string;
  /** Human-readable title of the composition. */
  title: string;
  /** Which theme modes the recipe is written for. */
  mode: "light" | "dark" | "both";
  /** Complete semantic HTML for the composition. */
  html: string;
  /** Classes required beyond structural markup, i.e. the grammar surface used. */
  classes: readonly string[];
  /** Dependencies — grammar classes/attributes that must be present. */
  dependencies: readonly string[];
  /** Accessibility requirements the composition enforces. */
  accessibility: readonly string[];
  /** Source paths that establish the classes used. */
  sources: readonly string[];
}
