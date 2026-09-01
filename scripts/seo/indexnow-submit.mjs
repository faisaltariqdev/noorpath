#!/usr/bin/env node
/**
 * Submits all NoorPath URLs to IndexNow (Bing, Microsoft Copilot, Yandex, Seznam, Naver).
 *
 * Usage:
 *   node scripts/seo/indexnow-submit.mjs
 */

import { readFileSync, existsSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { BASE, allCatalogPaths } from "./lib/llms-catalog.mjs";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "../..");

const KEY = "6dcf3b1e7a904120ae7f77878c28b506";
const HOST = "www.noorpath.online";
const KEY_LOCATION = `https://${HOST}/${KEY}.txt`;

// Verify key file exists in public
const keyFilePath = join(ROOT, `public/${KEY}.txt`);
if (!existsSync(keyFilePath)) {
  console.error(`❌ Key file missing at ${keyFilePath}`);
  process.exit(1);
}

const keyFileContent = readFileSync(keyFilePath, "utf8").trim();
if (keyFileContent !== KEY) {
  console.error(`❌ Key file content does not match expected key ${KEY}`);
  process.exit(1);
}

// Gather all valid URLs from catalog
const paths = allCatalogPaths();
const urls = [
  BASE,
  ...paths.map((p) => (p.startsWith("/") ? `${BASE}${p}` : `${BASE}/${p}`)),
];
const uniqueUrls = [...new Set(urls)];

console.log(`📡 Preparing IndexNow submission for ${uniqueUrls.length} URLs...`);
console.log(`🔑 Key: ${KEY}`);
console.log(`🌐 Key Location: ${KEY_LOCATION}`);

const payload = {
  host: HOST,
  key: KEY,
  keyLocation: KEY_LOCATION,
  urlList: uniqueUrls,
};

const ENDPOINTS = [
  "https://api.indexnow.org/indexnow",
  "https://www.bing.com/indexnow",
];

async function submitToIndexNow() {
  let successCount = 0;

  for (const endpoint of ENDPOINTS) {
    try {
      console.log(`\n🚀 Submitting to ${endpoint}...`);
      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json; charset=utf-8",
        },
        body: JSON.stringify(payload),
      });

      if (response.ok || response.status === 200 || response.status === 202) {
        console.log(`✅ ${endpoint} responded with status: ${response.status} (${response.statusText || "Accepted"})`);
        successCount++;
      } else {
        const text = await response.text();
        console.warn(`⚠️ ${endpoint} responded with status: ${response.status} — ${text}`);
      }
    } catch (err) {
      console.error(`❌ Failed to submit to ${endpoint}:`, err.message);
    }
  }

  console.log(`\n🎉 IndexNow submission finished (${successCount}/${ENDPOINTS.length} endpoints succeeded).`);
}

submitToIndexNow();
