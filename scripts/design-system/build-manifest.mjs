/**
 * Emits the portable design-system manifest JSON and validates it against the
 * source stylesheets.
 *
 * Imports the generated TypeScript manifest directly (Node's type stripping
 * handles the `.ts` extension), then checks that every declared token and class
 * still exists in its declared source file — a failed extraction fails the
 * build rather than publishing a partial contract. The output artifact is
 * deterministic: identical source produces an identical file except for the
 * generatedAt timestamp and source revision.
 *
 * Run with `npm run build:design-manifest`.
 */
import { readFileSync, writeFileSync, existsSync, mkdirSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const projectRoot = resolve(dirname(fileURLToPath(import.meta.url)), "../..");
const outPath = resolve(projectRoot, "public/design-system/manifest.v1.json");

const { designSystemManifest, designSystemRecipes } = await import(
  resolve(projectRoot, "src/design-system/manifest.ts")
);

const manifest = designSystemManifest;
const recipes = designSystemRecipes.map((recipe) => ({ ...recipe }));

/** Every token and class in the manifest must still exist in its declared source. */
function validateProvenance() {
  const fileCache = new Map();
  const readSource = (path) => {
    if (!fileCache.has(path)) {
      const absolute = resolve(projectRoot, path);
      if (!existsSync(absolute)) {
        throw new Error(`Manifest cites a missing source file: ${path}`);
      }
      fileCache.set(path, readFileSync(absolute, "utf8"));
    }
    return fileCache.get(path);
  };

  const failures = [];
  for (const [categoryName, category] of Object.entries(manifest.categories)) {
    if (!category.summary || !category.rules || category.rules.length === 0 || category.sources.length === 0) {
      failures.push(`category "${categoryName}" is missing summary, rules, or sources`);
    }
    for (const source of category.sources) {
      if (!existsSync(resolve(projectRoot, source.path))) {
        failures.push(`category "${categoryName}" cites missing source ${source.path}`);
      }
    }
    for (const token of category.tokens ?? []) {
      const css = readSource(token.sourcePath);
      if (!css.includes(token.name)) {
        failures.push(`token ${token.name} no longer exists in ${token.sourcePath}`);
      }
    }
    for (const entry of category.classes ?? []) {
      const css = readSource(entry.sourcePath);
      if (!css.includes(entry.name)) {
        failures.push(`class ${entry.name} no longer exists in ${entry.sourcePath}`);
      }
    }
  }

  const expectedCategories = ["color", "typography", "layout", "interaction", "input", "element", "button"];
  for (const name of expectedCategories) {
    if (!manifest.categories[name]) {
      failures.push(`manifest is missing required category "${name}"`);
    }
  }

  const seen = new Map();
  for (const [categoryName, category] of Object.entries(manifest.categories)) {
    for (const token of category.tokens ?? []) {
      if (seen.has(token.name)) {
        failures.push(`duplicate token ${token.name} in ${seen.get(token.name)} and ${categoryName}`);
      } else {
        seen.set(token.name, categoryName);
      }
    }
  }

  if (failures.length > 0) {
    throw new Error(`Design manifest validation failed:\n  - ${failures.join("\n  - ")}`);
  }
}

validateProvenance();

manifest.generatedAt = new Date().toISOString();
manifest.sourceRevision = process.env.SOURCE_REVISION ?? manifest.sourceRevision;

const json = `${JSON.stringify({ ...manifest, recipes }, null, 2)}\n`;
mkdirSync(dirname(outPath), { recursive: true });
writeFileSync(outPath, json, "utf8");

console.log(`Design manifest written to public/design-system/manifest.v1.json (${json.length} bytes, ${recipes.length} recipes).`);