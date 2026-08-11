#!/usr/bin/env node
/**
 * Enables Google Search Console MCP in .cursor/mcp.json when credential files exist.
 * Prefer OAuth desktop client JSON at .credentials/gsc-oauth-client.json
 * Or service account at .credentials/gsc-service-account.json
 */
import { existsSync, readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const ROOT = process.cwd();
const mcpPath = join(ROOT, ".cursor", "mcp.json");
const oauthPath = join(ROOT, ".credentials", "gsc-oauth-client.json");
const saPath = join(ROOT, ".credentials", "gsc-service-account.json");
const site = process.env.GSC_SITE_URL || "sc-domain:noorpath.online";
const npx = "/Users/mac/.nvm/versions/node/v20.20.2/bin/npx";
const pathEnv =
  "/Users/mac/.nvm/versions/node/v20.20.2/bin:/usr/local/bin:/usr/bin:/bin";
const cache = join(ROOT, ".npm-cache");

const baseEnv = {
  PATH: pathEnv,
  npm_config_cache: cache,
  GSC_SITE_URL: site,
};

let gsc;
if (existsSync(oauthPath)) {
  gsc = {
    command: npx,
    args: ["-y", "suganthan-gsc-mcp"],
    env: {
      ...baseEnv,
      GSC_AUTH_MODE: "oauth",
      GSC_OAUTH_SECRETS_FILE: oauthPath,
    },
  };
  console.log("✓ Using OAuth client:", oauthPath);
} else if (existsSync(saPath)) {
  gsc = {
    command: npx,
    args: ["-y", "suganthan-gsc-mcp"],
    env: {
      ...baseEnv,
      GSC_AUTH_MODE: "service_account",
      GSC_KEY_FILE: saPath,
    },
  };
  console.log("✓ Using service account:", saPath);
} else {
  console.error("✗ No credentials found.");
  console.error("  Put OAuth Desktop client JSON at:");
  console.error("    .credentials/gsc-oauth-client.json");
  console.error("  OR service account JSON at:");
  console.error("    .credentials/gsc-service-account.json");
  console.error("\nThen re-run: npm run seo:gsc:enable");
  process.exit(1);
}

mkdirSync(join(ROOT, ".cursor"), { recursive: true });
const mcp = JSON.parse(readFileSync(mcpPath, "utf8"));
mcp.mcpServers = mcp.mcpServers || {};
mcp.mcpServers.gsc = gsc;
writeFileSync(mcpPath, JSON.stringify(mcp, null, 2) + "\n");
console.log("✓ Wrote gsc server into .cursor/mcp.json");
console.log(`✓ GSC_SITE_URL=${site}`);
console.log("→ Reload Cursor: Settings → MCP → refresh/restart gsc");
console.log("→ First tool call may open a browser for Google login (OAuth).");
