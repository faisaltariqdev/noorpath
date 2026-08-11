# llms.txt Audit — NoorPath

**Audit date:** 11 August 2026  
**Next.js:** 16.2.9 (App Router)  
**Scope:** Local only — no deploy / no commit

## Previous state

**File:** `public/llms.txt` (last reviewed 2026-07-28, ~130 lines)

### What was already good

- Online-only framing and anti-hallucination accuracy notes  
- No invented student/teacher counts in the file body  
- Trustpilot linked as an external profile rather than a static score claim  
- Country hubs listed with absolute `www` URLs  
- Trial described as free 30-minute / no credit card (aligned with `TRIAL` in `academyFacts`)

### Problems discovered

| Issue | Evidence | Risk |
|---|---|---|
| Primary name “NoorPath Academy” only | User/entity preference is Brand **NoorPath** + descriptive **NoorPath Online Quran Academy** | Weaker entity clarity |
| Tajweed/Hifz course URLs were redirect targets | Listed `/courses/tajweed-classes-online` and implied course owners; `src/proxy.ts` redirects those to `/learn-tajweed-online` and `/hifz-quran-online` | Non-canonical URLs |
| City examples included noindex thin templates | Text listed Cork, Galway, Wellington, Christchurch, Oslo, Bergen, Helsinki, Espoo, Copenhagen, Aarhus | Points AIs at doorway-risk / noindex pages |
| Flat country dump | All hubs listed without hierarchy or city quality filter | Noise; weaker prioritization |
| No curated blog knowledge map | Only blog index + backlink assets | Missed strongest educational clusters |
| No generator | Manual file only | Stale URLs over time |
| Apex vs www | Spec mentioned `https://noorpath.online`; site canonical is `https://www.noorpath.online` (apex 301 → www) | Must use www in llms.txt |

## OBSERVED — repository facts

- `BASE_URL` / schema / sitemap use `https://www.noorpath.online`  
- Schema `name`: NoorPath Academy; `alternateName`: NoorPath Online Quran Academy  
- 26 country hubs; 37 city routes; **15 indexable** cities after doorway mitigation  
- Course redirects: kids/tajweed/hifz course slugs → commercial owners  
- Interactive Qaida hub: `/noorani-qaida` (in addition to `/courses/noorani-qaida-online`)

## DECISION — selection

- Establish Brand **NoorPath** + descriptive **NoorPath Online Quran Academy**, noting site also uses NoorPath Academy  
- Use **www** canonical base only  
- Replace redirecting course URLs with canonical owners  
- Include only **indexable** cities  
- Curate **17 priority countries** (not all 26)  
- Curate blog clusters (~44 posts), not the full blog inventory  
- Add limited-local-access section with neutral wording + existing guide  
- Automate generate + validate

## IMPLEMENTED

| Artifact | Role |
|---|---|
| `scripts/seo/lib/llms-catalog.mjs` | Curated inclusion list |
| `scripts/seo/generate-llms-txt.mjs` | Writes `public/llms.txt` |
| `scripts/seo/validate-llms-txt.mjs` | Validation |
| `public/llms.txt` | Regenerated production file |
| `npm run seo:llms` / `seo:llms:validate` | Maintenance scripts |
| `docs/seo/LLMS-TXT-ARCHITECTURE.md` | Architecture doc |
| `docs/seo/LLMS-TXT-AUDIT.md` | This audit |

## Pages selected (summary)

- Tier 1: home, core services, kids/adults/beginners, teachers, sisters, trial, pricing, about/contact  
- Tier 2: 17 country hubs; 15 indexable cities; canonical course owners + `/noorani-qaida`  
- Tier 3: curated blogs across online learning, kids, beginners/adults, Tajweed, Hifz, Islamic references, research assets  

## Pages excluded (examples)

- All `TEMPLATE_CITY_NOINDEX_SLUGS` cities (Sydney, Wellington, Oslo, Cork, …)  
- Redirected paths (`/online-quran-academy`, `/courses/tajweed-classes-online`, …)  
- Non-priority country hubs (e.g. Turkey, Nigeria, Bangladesh, India, Pakistan, …) — still discoverable via `/locations`  
- Full blog corpus (~147+)  
- API, thank-you, admin  

## Stale information removed

- Primary framing as only “NoorPath Academy” without preferred descriptive identity  
- Mentions of thin Phase-1 city templates as discovery examples  
- Non-canonical Tajweed/Hifz course paths  
- Implication that every location/city page is equally authoritative for AI discovery  

## New Zealand coverage

**OBSERVED:** `/locations/online-quran-classes-new-zealand` exists and is included.  
**OBSERVED:** Indexable NZ city: Auckland. Wellington and Christchurch exist but are **noindex** thin templates — excluded.  
**OBSERVED:** Hamilton city page not present — not invented.

## Validation results

From `npm run seo:llms:validate` (against local `.next` prerender, 11 Aug 2026):

```text
Total URLs: 115
NoorPath URLs: 108
Valid (checked): 108
Broken: 0
Redirects: 0
Non-canonical host: 0
Forbidden redirect paths: 0
Missing prerender: 0
Missing sitemap (info): 0
Catalog mismatches: 0
VALIDATION PASSED
```

JSON report: `seo-reports/llms-txt-validation.json`

## Unsupported claims

None reintroduced. Trustpilot remains an external link; static score/count not written into llms.txt prose.
