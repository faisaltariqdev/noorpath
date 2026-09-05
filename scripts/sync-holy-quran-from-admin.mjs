#!/usr/bin/env node
/**
 * One-way copy of Tanzil Uthmani para JSON from noorpath-admin.
 * Never invents or rewrites Arabic. Admin remains the import source of truth.
 */
import { copyFileSync, mkdirSync, readdirSync, readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const admin = join(root, "..", "noorpath-admin", "src", "features", "holy-quran", "data");
const dest = join(root, "src", "data", "holy-quran");
const destParas = join(dest, "paras");

mkdirSync(destParas, { recursive: true });
copyFileSync(join(admin, "SOURCE.md"), join(dest, "SOURCE.md"));
copyFileSync(join(admin, "dataset-manifest.json"), join(dest, "dataset-manifest.json"));

const files = readdirSync(join(admin, "paras")).filter((name) => /^para-\d{2}\.json$/.test(name));
if (files.length !== 30) {
  throw new Error(`Expected 30 para files, found ${files.length}`);
}

let ayahs = 0;
for (const name of files) {
  const src = join(admin, "paras", name);
  const json = JSON.parse(readFileSync(src, "utf8"));
  ayahs += json.ayahs.length;
  copyFileSync(src, join(destParas, name));
}

if (ayahs !== 6236) {
  throw new Error(`Expected 6236 ayahs, found ${ayahs}`);
}

console.log(`Synced ${files.length} para files (${ayahs} ayahs) from noorpath-admin.`);
