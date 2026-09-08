/**
 * Local type definitions for the evolving WebMCP browser API.
 *
 * WebMCP is a Web Machine Learning Community Group draft (`document.modelContext`),
 * not a stable browser API — no lib.dom.d.ts types exist yet. These declarations
 * track the current draft form (4 September 2026 report):
 * `registerTool(tool, options?)` takes a single `ModelContextTool` dictionary
 * carrying `name`, `description`, `inputSchema`, `execute`, and `annotations`.
 * Keep every platform access behind `webmcp.adapter.ts` so a draft change is a
 * one-file edit; do not import these types anywhere else in application code.
 */

/** A JSON Schema object as accepted for tool input validation. */
export interface WebMcpJsonSchema {
  type: "object";
  properties?: Record<string, unknown>;
  required?: string[];
  additionalProperties?: boolean;
}

/**
 * Hints a tool may declare. `readOnlyHint: true` is required for all
 * design-system tools; none request user interaction or mutate state.
 */
export interface WebMcpToolAnnotations {
  readOnlyHint?: boolean;
  untrustedContentHint?: boolean;
  consequentialHint?: boolean;
}

/** Options passed to the tool's `execute` callback for each invocation. */
export interface WebMcpExecuteOptions {
  /** Aborted when this execution is cancelled by the caller. */
  signal: AbortSignal;
}

/**
 * The complete tool definition accepted by `registerTool` — a single dictionary
 * carrying identity, schema, handler, and annotations.
 */
export interface WebMcpTool {
  /** Unique tool name, 1–128 chars of ASCII letters, digits, `_`, `-`, or `.`. */
  name: string;
  /** Optional human-readable label for user-agent UI. */
  title?: string;
  /** Natural-language description of what the tool does; required, non-empty. */
  description: string;
  /** JSON Schema describing the expected input parameters. */
  inputSchema?: WebMcpJsonSchema;
  /** Invoked with the parsed input object when an agent calls the tool. */
  execute: (inputObject: Record<string, unknown>, options: WebMcpExecuteOptions) => unknown;
  /** Optional metadata about the tool's behavior. */
  annotations?: WebMcpToolAnnotations;
}

/** Registration options; `signal` unregisters the tool when aborted. */
export interface WebMcpRegisterToolOptions {
  /** Aborts the registration and unregisters the tool during teardown. */
  signal?: AbortSignal;
}

/** One registered tool as returned by `getTools()`. */
export interface WebMcpRegisteredTool {
  name: string;
  title?: string;
  description: string;
  inputSchema?: WebMcpJsonSchema;
  origin: string;
  annotations?: WebMcpToolAnnotations;
}

/**
 * The minimal `document.modelContext` surface this app depends on. Declared
 * as an interface so tests can pass a fake registry and production passes the
 * real object without a global polyfill.
 */
export interface ModelContextLike {
  registerTool(tool: WebMcpTool, options?: WebMcpRegisterToolOptions): Promise<void>;
  getTools?(): Promise<WebMcpRegisteredTool[]>;
}