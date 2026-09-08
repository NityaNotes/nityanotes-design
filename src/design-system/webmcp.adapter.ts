/**
 * WebMCP adapter — the single seam between the design system and the evolving
 * browser API.
 *
 * Feature detection comes first: `document.modelContext` is an experimental
 * draft available only behind Chrome's `#enable-webmcp-testing` flag or the
 * Chrome/Edge origin trials, so its absence is a supported state that must
 * not affect the page. Registration, rejection, and abort failures are logged
 * only in development and never break application startup.
 *
 * All four tools are read-only queries over the pure query layer
 * (`design-system.query.ts`) and share one `AbortSignal` owned by the
 * application lifecycle — reloads and hot-module replacement must not leave
 * duplicate tools registered.
 */
import {
  categoryNames,
  categorySections,
  createDesignSystemQuery,
  findDesignContract,
  getDesignCategory,
  getDesignRecipe,
  getDesignSystemOverview,
  recipeIds,
  type DesignSystemQuery,
} from "./design-system.query";
import type { ModelContextLike, WebMcpJsonSchema } from "./webmcp.types";

/** The four registered tools, in discovery order. */
const DESIGN_TOOLS = [
  "get_design_system_overview",
  "get_design_category",
  "find_design_contract",
  "get_design_recipe",
] as const;
type DesignToolName = (typeof DESIGN_TOOLS)[number];

/** Maximum limit for the search tool; mirrors the query layer's bound. */
const SEARCH_LIMIT_MAX = 20;

/** Schemas shared between the adapter and the query layer's closed enums. */
const categoryEnumSchema = { type: "string", enum: [...categoryNames] };

const getCategorySchema: WebMcpJsonSchema = {
  type: "object",
  properties: {
    category: categoryEnumSchema,
    include: {
      type: "array",
      items: { type: "string", enum: [...categorySections] },
      default: ["rules", "classes"],
      description: "Sections to include: tokens, classes, rules, examples, or sources.",
    },
  },
  required: ["category"],
  additionalProperties: false,
};

const findContractSchema: WebMcpJsonSchema = {
  type: "object",
  properties: {
    query: {
      type: "string",
      description: "Exact token/class name, alias, or keyword to search for.",
    },
    category: categoryEnumSchema,
    limit: {
      type: "integer",
      minimum: 1,
      maximum: SEARCH_LIMIT_MAX,
      default: 10,
      description: "Maximum number of matches to return (1–20).",
    },
  },
  required: ["query"],
  additionalProperties: false,
};

/**
 * Returns whether the browser exposes the draft WebMCP API. This is the
 * single feature-detection point — an unsupported browser is a clean no-op,
 * never an error or a polyfilled fake.
 */
export function isWebMcpAvailable(): boolean {
  return typeof document !== "undefined" && typeof (document as { modelContext?: ModelContextLike }).modelContext?.registerTool === "function";
}

/**
 * Registers the four read-only design-system tools on a WebMCP context.
 *
 * Production passes `document.modelContext` (or `undefined`, which resolves to
 * a clean no-op); tests pass a fake registry implementing `registerTool`.
 * Every tool carries `readOnlyHint: true` and shares the provided abort
 * signal, so teardown or route replacement removes them together.
 *
 * @param context  The WebMCP registry; when absent, resolves immediately having registered nothing.
 * @param catalog  Query view over the manifest, built with `createDesignSystemQuery`.
 * @param options.signal Aborts registration and in-flight invocations during teardown.
 * @returns Cleanup function that aborts the shared signal — call it from application teardown.
 */
export async function registerDesignSystemTools(
  context: ModelContextLike | undefined,
  catalog: DesignSystemQuery,
  options: { signal?: AbortSignal } = {},
): Promise<() => void> {
  if (!context || typeof context.registerTool !== "function") {
    return () => {};
  }

  const controller = new AbortController();
  const externalSignal = options.signal;
  const forwardAbort = () => controller.abort();
  if (externalSignal) {
    if (externalSignal.aborted) return () => {};
    externalSignal.addEventListener("abort", forwardAbort, { once: true });
  }

  const handlers: Record<DesignToolName, (input: Record<string, unknown>) => unknown> = {
    get_design_system_overview: () => getDesignSystemOverview(catalog),
    get_design_category: (input) =>
      getDesignCategory(catalog, {
        category: input.category as string,
        include: input.include as string[] | undefined,
      }),
    find_design_contract: (input) =>
      findDesignContract(catalog, {
        query: input.query as string,
        category: input.category as string | undefined,
        limit: input.limit as number | undefined,
      }),
    get_design_recipe: (input) =>
      getDesignRecipe(catalog, {
        recipe: input.recipe as string | undefined,
        mode: input.mode as string | undefined,
      }),
  };

  const schemas: Record<DesignToolName, WebMcpJsonSchema> = {
    get_design_system_overview: { type: "object", properties: {}, additionalProperties: false },
    get_design_category: getCategorySchema,
    find_design_contract: findContractSchema,
    get_design_recipe: {
      type: "object",
      properties: {
        recipe: {
          type: "string",
          enum: recipeIds(catalog),
          description: "Reviewed composition to retrieve.",
        },
        mode: {
          type: "string",
          enum: ["light", "dark", "both"],
          default: "both",
          description: "Theme mode the recipe markup targets.",
        },
      },
      required: ["recipe"],
      additionalProperties: false,
    },
  };

  const descriptions: Record<DesignToolName, string> = {
    get_design_system_overview: "Nitya Notes design system: name, versions, categories, and manifest URL.",
    get_design_category: "One Nitya Notes design category (color, typography, layout, interaction, input, element, or button) with optional sections.",
    find_design_contract: "Search Nitya Notes tokens, classes, and rules by exact name or keyword.",
    get_design_recipe: "A reviewed Nitya Notes composition: HTML, classes, dependencies, and accessibility rules.",
  };

  const registrations = DESIGN_TOOLS.map((name) =>
    context.registerTool(
      {
        name,
        description: descriptions[name],
        inputSchema: schemas[name],
        annotations: { readOnlyHint: true },
        execute: (input) => {
          if (controller.signal.aborted) {
            return { error: "aborted: registration has been torn down" };
          }
          const payload = (input ?? {}) as Record<string, unknown>;
          return handlers[name](payload);
        },
      },
      { signal: controller.signal },
    ),
  );

  try {
    await Promise.all(registrations);
  } catch (error) {
    controller.abort();
    if (import.meta.env.DEV) {
      console.warn("[webmcp] design-system tool registration failed:", error);
    }
  }

  return () => {
    if (externalSignal) externalSignal.removeEventListener("abort", forwardAbort);
    controller.abort();
  };
}

/**
 * Builds the query view from a manifest and recipes, validating that all
 * seven categories exist before any tool can serve a partial contract.
 * Re-exported from the adapter so `main.ts` wires the bridge through one import.
 */
export { createDesignSystemTools };

/** Convenience wrapper used by application startup: build the catalog and register in one step. */
async function createDesignSystemTools(
  context: ModelContextLike | undefined,
  manifest: Parameters<typeof createDesignSystemQuery>[0],
  recipes: ReadonlyArray<Parameters<typeof createDesignSystemQuery>[1][number]>,
  options: { signal?: AbortSignal } = {},
): Promise<() => void> {
  const catalog = createDesignSystemQuery(manifest, recipes);
  return registerDesignSystemTools(context, catalog, options);
}