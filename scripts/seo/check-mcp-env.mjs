#!/usr/bin/env node
/**
 * Verifies SEO MCP environment readiness for Cursor.
 */
import { readFileSync, existsSync } from "node:fs";
import { join } from "node:path";
import { spawnSync } from "node:child_process";

const root = process.cwd();
const nodeMajor = Number(process.versions.node.split(".")[0]);
const chromePath = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";

const rows = [];
const row = (name, status, detail) => rows.push({ name, status, detail });

row("OS", "ok", `${process.platform} ${process.arch}`);
row("Node", nodeMajor >= 20 ? "ok" : "blocked", `v${process.versions.node} (Chrome DevTools MCP + Playwright MCP need ≥ 20.19)`);
row("Chrome", existsSync(chromePath) ? "ok" : "missing", chromePath);
row("Project MCP config", existsSync(join(root, ".cursor/mcp.json")) ? "ok" : "missing", ".cursor/mcp.json");
try {
  const mcp = JSON.parse(readFileSync(join(root, ".cursor/mcp.json"), "utf8"));
  const names = Object.keys(mcp.mcpServers || {});
  row("MCP servers configured", names.length ? "ok" : "missing", names.join(", ") || "-");
} catch {
  row("MCP servers configured", "fail", "invalid mcp.json");
}
row("SEO workflows", existsSync(join(root, ".cursor/seo-workflows/WORKFLOWS.md")) ? "ok" : "missing", ".cursor/seo-workflows/");
row("SEO rule", existsSync(join(root, ".cursor/rules/seo-enterprise.mdc")) ? "ok" : "missing", ".cursor/rules/seo-enterprise.mdc");
row("SEO agent", existsSync(join(root, "scripts/seo/seo-agent.mjs")) ? "ok" : "missing", "scripts/seo/seo-agent.mjs");
row("Git pre-commit hook", existsSync(join(root, ".git/hooks/pre-commit")) ? "ok" : "missing", ".git/hooks/pre-commit");
row("Audit script", existsSync(join(root, "scripts/seo/audit-site.mjs")) ? "ok" : "missing", "scripts/seo/audit-site.mjs");

const pkg = JSON.parse(readFileSync(join(root, "package.json"), "utf8"));
row("lighthouse (npm)", pkg.devDependencies?.lighthouse ? "ok" : "missing", pkg.devDependencies?.lighthouse || "-");
row("playwright (npm)", pkg.devDependencies?.playwright ? "ok" : "missing", pkg.devDependencies?.playwright || "-");

const lh = spawnSync("npx", ["lighthouse", "--version"], { encoding: "utf8" });
row("lighthouse CLI", lh.status === 0 ? "ok" : "fail", (lh.stdout || lh.stderr || "").trim());

const credKeys = [
  ["FIRECRAWL_API_KEY", "Firecrawl MCP"],
  ["GOOGLE_APPLICATION_CREDENTIALS", "GSC MCP service account JSON path"],
  ["GA4_PROPERTY_ID", "GA4 MCP property"],
];
for (const [key, label] of credKeys) {
  row(label, process.env[key] ? "ok" : "needs-credential", key);
}

console.log("\nNoorPath SEO MCP environment check\n");
for (const r of rows) {
  const mark = r.status === "ok" ? "✓" : r.status === "needs-credential" ? "·" : "✗";
  console.log(`${mark} ${r.name}: ${r.status} — ${r.detail}`);
}

if (nodeMajor < 20) {
  console.log("\nACTION REQUIRED: Upgrade Node to 20 LTS, then reload Cursor MCP servers.");
  console.log("  brew install node@20 && brew link --force --overwrite node@20");
  console.log("  # or install nvm and: nvm install 20 && nvm use 20");
}
console.log("\nCredential-gated MCP templates: .cursor/mcp.credentials.example.json");
console.log("Env template: .env.seo.example → .env.seo\n");
