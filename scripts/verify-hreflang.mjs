/**
 * Verifies the location hreflang cluster is complete and reciprocal.
 * Run: node scripts/verify-hreflang.mjs
 * (Uses the same mapping rules as src/lib/geoSeo.ts — keep in sync.)
 */
import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const locationsSrc = readFileSync(join(root, "src/data/locations.ts"), "utf8");
const geoSrc = readFileSync(join(root, "src/lib/geoSeo.ts"), "utf8");

const slugs = [...locationsSrc.matchAll(/slug: "(online-quran-classes-[^"]+)"/g)].map(
  (m) => m[1],
);

const mapBlock = geoSrc.match(
  /export const LOCATION_HREFLANG_BY_SLUG: Record<string, string> = \{([\s\S]*?)\n\};/,
);
if (!mapBlock) {
  console.error("Could not find LOCATION_HREFLANG_BY_SLUG");
  process.exit(1);
}

const codeBySlug = Object.fromEntries(
  [...mapBlock[1].matchAll(/"([^"]+)": "([^"]+)"/g)].map((m) => [m[1], m[2]]),
);

const SITE = "https://www.noorpath.online";
const errors = [];

for (const slug of slugs) {
  if (!codeBySlug[slug]) errors.push(`Missing hreflang for ${slug}`);
}

const codes = Object.values(codeBySlug);
if (new Set(codes).size !== codes.length) {
  errors.push("Duplicate hreflang codes in map");
}

// Simulate cluster each page would emit (identical reciprocal set)
const cluster = Object.fromEntries(
  slugs.map((slug) => [codeBySlug[slug], `${SITE}/locations/${slug}`]),
);
cluster["x-default"] = `${SITE}/online-quran-classes`;

for (const slug of slugs) {
  const code = codeBySlug[slug];
  if (cluster[code] !== `${SITE}/locations/${slug}`) {
    errors.push(`Self URL mismatch for ${slug}`);
  }
  // Every other location must be present
  for (const other of slugs) {
    const otherCode = codeBySlug[other];
    if (!cluster[otherCode]) errors.push(`${slug} cluster missing ${other}`);
  }
}

if (!cluster["x-default"].endsWith("/online-quran-classes")) {
  errors.push("x-default incorrect");
}

if (Object.keys(cluster).length !== slugs.length + 1) {
  errors.push(`Expected ${slugs.length + 1} entries, got ${Object.keys(cluster).length}`);
}

if (errors.length) {
  console.error("HREFLANG VERIFY FAILED");
  for (const e of errors) console.error(" -", e);
  process.exit(1);
}

console.log("HREFLANG VERIFY OK");
console.log(`Locations: ${slugs.length}`);
console.log(`Cluster keys: ${Object.keys(cluster).join(", ")}`);
console.log("Sample (USA page would emit):");
for (const [k, v] of Object.entries(cluster).slice(0, 5)) {
  console.log(`  ${k} → ${v}`);
}
console.log(`  … + ${Object.keys(cluster).length - 5} more (identical on every location page)`);
