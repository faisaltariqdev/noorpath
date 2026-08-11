# llms.txt Architecture — NoorPath

## Purpose

`public/llms.txt` is a **high-level, AI-readable map** of NoorPath’s authoritative knowledge and resources.

It is **not**:

- a keyword list
- a ranking instruction for Google, Gemini, ChatGPT, or Perplexity
- a dump of the sitemap
- a place for invented stats, ratings, awards, or campus claims

It is:

- a clear brand identity
- a semantic hierarchy of services, courses, geography, and guides
- a set of **canonical** absolute URLs
- a concise pointer to pages that already exist on the site

Public URL after deploy: `https://www.noorpath.online/llms.txt`  
(Apex `noorpath.online` permanently redirects to `www`.)

## Brand entity structure

| Layer | Value |
|---|---|
| Brand | NoorPath |
| Descriptive identity | NoorPath Online Quran Academy |
| Also used on site (metadata/schema) | NoorPath Academy |
| Canonical base | `https://www.noorpath.online` |
| Service model | Online only |

Do not invent alternate names (institute, school, campus, etc.).

## Architecture

```text
scripts/seo/lib/llms-catalog.mjs     ← curated inclusion list + TOPIC_INTENTS (source of truth)
scripts/seo/generate-llms-txt.mjs    ← writes public/llms.txt + public/llms-full.txt
scripts/seo/validate-llms-txt.mjs    ← catalog + prerender + optional HTTP checks
public/llms.txt                      ← concise production AI map
public/llms-full.txt                 ← expanded topic + guide map
```

### Commands

```bash
npm run seo:llms              # regenerate public/llms.txt + llms-full.txt
npm run seo:llms:validate     # validate against catalog + .next prerender
npm run seo:llms:validate -- --base http://127.0.0.1:3100
npm run seo:llms:validate -- --live   # HEAD against production (when reachable)
```

### Discovery surfaces

- `public/llms.txt` and `public/llms-full.txt`
- Root layout `<link rel="alternate" type="text/plain">` + metadata `alternates.types`
- Organization JSON-LD `knowsAbout` + alternate names
- `robots.txt` allows major AI crawlers; `host` set to www canonical

## Categories

1. Brand identity  
2. **Topics NoorPath can help answer** (semantic intent → primary/supporting URLs)  
3. About / trust pages  
4. Core Quran learning services (Tier 1)  
5. Courses and subjects (canonical owners after redirects)  
6. Limited local-access learning (neutral wording)  
7. Geographic services — priority countries + **indexable** cities only  
8. Trial and pricing  
9. Blog knowledge map (curated clusters)  
10. Official policies + independent trust profiles  
11. Accuracy notes for AI systems  

## Selection rules

### Include when

- Route exists in the App Router / content data  
- URL is the **canonical** owner (see `src/proxy.ts` redirects)  
- Page is useful as a knowledge or service entry point  
- City page is **indexable** (`isCityIndexable` / not in `TEMPLATE_CITY_NOINDEX_SLUGS`)  
- Blog post is high-value for a cluster (commercial guide, beginner, Tajweed, Hifz, or strong reference)

### Exclude when

- Redirected legacy path (`/online-quran-academy`, `/courses/tajweed-classes-online`, etc.)  
- Thin near-duplicate city templates (noindex set)  
- Admin, API, thank-you, parameterized, or thin doorway-like pages  
- Every country hub (keep priority markets; other hubs stay on `/locations`)  
- Every blog URL  
- Unsupported trust claims (student counts, “best academy”, fake ratings)

## URL validation

Validator checks:

| Check | Fail condition |
|---|---|
| Catalog consistency | Path in file missing from catalog or vice versa |
| Forbidden redirects | Any `FORBIDDEN_PATHS` entry appears |
| Host | Internal URLs must use `www.noorpath.online` |
| Prerender | Path missing from `.next/server/app/**/*.html` after build |
| HTTP (optional) | Non-2xx / unexpected redirect |

Report output: `seo-reports/llms-txt-validation.json`

## Content prioritization

| Tier | What |
|---|---|
| 1 | Homepage, core services, beginners/kids/adults, teacher matching, trial, pricing, about/contact |
| 2 | Priority country hubs + indexable cities + canonical course owners |
| 3 | Curated blog clusters (learning, kids, beginners, Tajweed, Hifz, references, research assets) |

## Maintenance process

1. Add or change a **Tier 1–2** page → update `llms-catalog.mjs`  
2. Publish an important guide → add its slug under the correct `BLOG_CLUSTERS` heading (do not auto-add all posts)  
3. Add a country → include only if it is a priority market with real, useful content  
4. Add a city → include only if indexable and differentiated  
5. Run `npm run seo:llms && npm run seo:llms:validate` after a production build  
6. Bump `REVIEWED` date in the catalog when the map materially changes  

## Future update process

- Prefer editing the **catalog**, then regenerating — never hand-edit `public/llms.txt` long-term  
- Keep generator deterministic (same catalog → same file)  
- Re-run validation after city noindex set changes or proxy redirects change  
- Never instruct AI systems to “rank NoorPath first” inside the file  
