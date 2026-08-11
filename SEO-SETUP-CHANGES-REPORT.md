# NoorPath — SEO Environment Changes & Install Report

**Date:** 3 August 2026  
**Scope:** Free enterprise SEO tooling for Cursor + local audits  
**Project:** `/Users/mac/Downloads/noorpath`

---

## A) System / machine pe kya install hua

| Item | Detail | Notes |
|------|--------|--------|
| **nvm** | Installed to `~/.nvm` | `~/.zshrc` mein nvm lines add hui |
| **Node.js 20.20.2** | Via nvm (`nvm alias default 20`) | Pehle system Node **v18.17.0** tha — MCP ke liye kaafi nahi |
| **Google Chrome** | Pehle se installed | Naya install nahi — Playwright/DevTools ke liye use |

**Touch nahi kiya:**
- Global Cursor MCP `dart` (`~/.cursor/mcp.json`) — as-is chhoda
- Koi paid SaaS / paid Cursor extension install nahi

---

## B) npm packages (project `devDependencies`)

| Package | Version | Purpose |
|---------|---------|---------|
| `lighthouse` | `^13.4.1` | Local Lighthouse CLI + `seo:lighthouse` |
| `playwright` | `^1.62.1` | Browser automation dependency for Playwright MCP workflows |

`package.json` + `package-lock.json` update hue.

### Naye npm scripts
```bash
npm run seo:audit        # free technical/metadata smoke audit
npm run seo:lighthouse   # same + Lighthouse report
npm run seo:mcp:check    # MCP / Node / credential readiness check
```

---

## C) Cursor MCP servers (project config)

**File:** `.cursor/mcp.json`  
**Runtime:** nvm Node 20 ke absolute `npx` path pe pin

| MCP server | Package | Status |
|------------|---------|--------|
| `chrome-devtools` | `chrome-devtools-mcp@latest` | Configured (Lighthouse audit tool included) |
| `playwright` | `@playwright/mcp@latest --browser chrome` | Configured (macOS 13 pe bundled Chromium unsupported) |
| `lighthouse` | `lighthouse-mcp` | Configured |

**Credentials wale templates (abhi enable nahi):**  
`.cursor/mcp.credentials.example.json`
- Firecrawl
- Google Search Console (`suganthan-gsc-mcp`)
- Google Analytics 4

---

## D) Project files — naye / changed

### Naya folder: `.cursor/`
| File | Kaam |
|------|------|
| `.cursor/mcp.json` | Active free MCP servers |
| `.cursor/mcp.credentials.example.json` | Firecrawl / GSC / GA4 templates |
| `.cursor/settings.json` | `seo-reports` exclude etc. |
| `.cursor/rules/seo-enterprise.mdc` | Always-on SEO honesty rules |
| `.cursor/seo-workflows/README.md` | Workflow usage notes |
| `.cursor/seo-workflows/WORKFLOWS.md` | 24 reusable SEO audit prompts |

### Naya folder: `scripts/seo/`
| File | Kaam |
|------|------|
| `audit-site.mjs` | robots, sitemap, titles, OG, Twitter, JSON-LD, sample links |
| `check-mcp-env.mjs` | Node/Chrome/MCP/credential checklist |
| `setup-crawl4ai.sh` | Optional free Crawl4AI (Python) installer |

### Root / config updates
| File | Change |
|------|--------|
| `.env.seo.example` | **New** — credential env template |
| `.gitignore` | Added `.env.seo`, `seo-reports/`, service-account JSON patterns |
| `package.json` | SEO scripts + lighthouse/playwright deps |
| `package-lock.json` | Lockfile updated |
| `SEO-ENVIRONMENT-SETUP-REPORT.md` | Earlier detailed setup report |
| `SEO-SETUP-CHANGES-REPORT.md` | **This file** — changes/install summary |

### Generated at runtime (gitignored)
| Path | Kaam |
|------|------|
| `seo-reports/audit-*.json` | `seo:audit` output |

---

## E) Jo cheezen intentionally pending hain

| Item | Reason |
|------|--------|
| Firecrawl MCP live | `FIRECRAWL_API_KEY` chahiye |
| GSC MCP live | Service account JSON + GSC user access |
| GA4 MCP live | Property ID + service account |
| Google Sheets MCP | Optional — aap approve/keys ke baad |
| Crawl4AI pip install | Optional script ready; auto-run nahi kiya |
| Playwright bundled Chromium | macOS 13 unsupported → system Chrome use |

---

## F) Verification (jo run karke confirm hua)

| Check | Result |
|-------|--------|
| Node 20 via nvm | ✓ `v20.20.2` |
| Lighthouse CLI | ✓ `13.4.1` |
| `npm run seo:mcp:check` | ✓ (creds = pending markers) |
| `npm run seo:audit` on production | ✓ ran (robots/sitemap/pages OK; kuch title/desc length warnings) |
| MCP config files present | ✓ |

**Aapko abhi karna hai:** Cursor reload → Settings → MCP → servers green check.

---

## G) Quick use

```bash
nvm use 20
cd /Users/mac/Downloads/noorpath
npm run seo:mcp:check
npm run seo:audit
```

Workflows: `.cursor/seo-workflows/WORKFLOWS.md`  
Credentials template: `.env.seo.example`

---

## H) Git status snapshot (abhi commit nahi kiya)

Untracked / modified (SEO setup related):
- `?? .cursor/`
- `?? .env.seo.example`
- `?? SEO-ENVIRONMENT-SETUP-REPORT.md`
- `?? SEO-SETUP-CHANGES-REPORT.md`
- `?? scripts/seo/`
- `M package.json`
- `M package-lock.json`
- `M .gitignore`

Commit/push tab hoga jab aap explicitly bolo.
