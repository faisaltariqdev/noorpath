# NoorPath Enterprise SEO Environment — Setup Report

Generated: 2026-08-03

## 1) Environment detected

| Item | Value |
|------|--------|
| OS | macOS 13.7.8 (Darwin 22.6.0, x86_64) |
| Cursor app version | **3.10.20** |
| MCP support | **Yes** — manual `mcp.json` (project + global). Marketplace/plugins also available in Cursor for some servers (e.g. Firecrawl). |
| Previous global MCP | `dart` only (`~/.cursor/mcp.json`) — left untouched |
| System Node (pre-setup) | v18.17.0 — **blocked** Chrome DevTools MCP / Playwright MCP / Lighthouse 13 |
| Node after setup | **v20.20.2 via nvm** (`~/.nvm`) |
| Google Chrome | Installed at `/Applications/Google Chrome.app` |

## 2) Installed / configured (FREE)

### Cursor MCP (project: `.cursor/mcp.json`)
| Server | Package | Status |
|--------|---------|--------|
| chrome-devtools | `chrome-devtools-mcp@latest` | Configured (Node 20 path pinned). Includes `lighthouse_audit` tool. |
| playwright | `@playwright/mcp@latest` | Configured with `--browser chrome` (bundled Chromium unsupported on macOS 13). |
| lighthouse | `lighthouse-mcp` | Configured + smoke-tested under Node 20. |

Pinned to nvm Node 20 `npx` so Cursor does not fall back to system Node 18.

### npm project tooling
| Package | Status |
|---------|--------|
| `lighthouse` (devDependency) | Installed — CLI works on Node 20 |
| `playwright` (devDependency) | Installed — use Chrome channel on macOS 13 |

### Local SEO automation (no API keys)
| Asset | Status |
|-------|--------|
| `npm run seo:audit` | **Working** — robots/sitemap/metadata/OG/Twitter/JSON-LD/sample links |
| `npm run seo:lighthouse` | Ready on Node 20 + Chrome |
| `npm run seo:mcp:check` | **Working** |
| `scripts/seo/setup-crawl4ai.sh` | Optional Crawl4AI (Python) installer — not MCP |

### Cursor AI SEO workflows & rules
| Asset | Status |
|-------|--------|
| `.cursor/rules/seo-enterprise.mdc` | Created (`alwaysApply`) |
| `.cursor/seo-workflows/WORKFLOWS.md` | 24 reusable audit workflows |
| `.cursor/settings.json` | Created |
| `.env.seo.example` | Created |
| `.cursor/mcp.credentials.example.json` | Credential-gated MCP templates |

## 3) Not enabled yet (credentials required)

**Do not invent keys. Provide these to finish integration:**

### A) Firecrawl MCP (free tier)
1. Create account: https://www.firecrawl.dev  
2. Copy API key → put in `.env.seo` as `FIRECRAWL_API_KEY=...`  
3. Merge the `firecrawl` block from `.cursor/mcp.credentials.example.json` into `.cursor/mcp.json` (replace `${FIRECRAWL_API_KEY}` with the real value, or use a secrets manager).  
4. Reload MCP in Cursor Settings → MCP.

### B) Google Search Console MCP
1. Google Cloud project → enable **Search Console API**  
2. Create **service account** → download JSON key  
3. In GSC, add service account email as user on `sc-domain:noorpath.online` (or URL-prefix property)  
4. Set:
   - `GOOGLE_APPLICATION_CREDENTIALS=/absolute/path/to/key.json`
   - `GSC_SITE_URL=sc-domain:noorpath.online`
5. Merge `gsc` block from credentials example into `.cursor/mcp.json`.

### C) Google Analytics 4 MCP
1. GA4 property access + service account with Analytics Data API  
2. Provide:
   - `GA4_PROPERTY_ID`
   - `GA4_CLIENT_EMAIL`
   - `GA4_PRIVATE_KEY`
3. Merge `google-analytics` block from credentials example.

### D) Google Sheets
No free first-party Sheets MCP was enabled (avoid unpaid/unstable packs).  
Recommended free path after you share a service account + spreadsheet ID:
- use Google Sheets API via a small local script, **or** approve a specific free Sheets MCP package.

### E) Crawl4AI
Not an MCP server. Optional local crawler:
```bash
bash scripts/seo/setup-crawl4ai.sh
```

## 4) Manual steps for you (required)

1. **Restart Cursor** (or Reload Window) so project MCP servers appear green under **Settings → MCP**.  
2. Ensure new terminals use Node 20:
   ```bash
   # already appended to ~/.zshrc by nvm installer
   nvm use 20
   node -v   # expect v20.20.2
   ```
3. Send credentials listed in section 3 for Firecrawl / GSC / GA4 when ready.  
4. Optional: Marketplace one-click install for Firecrawl if you prefer UI over JSON.

## 5) Known limitations (macOS 13)

- Playwright **bundled Chromium** is unsupported on macOS 13 → MCP configured to use system **Chrome**.  
- Homebrew `node@20` install may still be running in background; **nvm Node 20 is already active and preferred**.  
- Global `dart` MCP untouched.

## 6) Verification summary

| Check | Result |
|-------|--------|
| Node 20 via nvm | ✓ |
| Lighthouse CLI | ✓ 13.4.1 |
| `seo:mcp:check` | ✓ (creds pending) |
| `seo:audit` against production | ✓ ran successfully |
| Chrome DevTools / Playwright / Lighthouse MCP config | ✓ written with Node 20 paths |
| Live MCP green in Cursor UI | ⏳ after Cursor reload |
| Firecrawl / GSC / GA4 | ⏳ awaiting your credentials |

## 7) Recommendations

1. Upgrade macOS when possible for full Playwright browser matrix.  
2. Keep Cursor MCP pinned to nvm Node 20 paths (already done).  
3. Add Firecrawl free tier first (fastest research win), then GSC service account (highest SEO ops value).  
4. Run `npm run seo:audit` in CI on a schedule (GitHub Action) — free, no MCP needed.  
5. Use workflows in `.cursor/seo-workflows/WORKFLOWS.md` instead of ad-hoc prompts.  
6. Do **not** commit `.env.seo` or service-account JSON (gitignored).

## 8) Quick commands

```bash
nvm use 20
npm run seo:mcp:check
npm run seo:audit
npm run seo:lighthouse
```

After Cursor reload, ask Agent:
> Run workflow #1 Technical SEO audit and #14 Lighthouse automation from `.cursor/seo-workflows/WORKFLOWS.md`.
