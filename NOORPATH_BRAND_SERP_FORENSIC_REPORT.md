# NOORPATH_BRAND_SERP_FORENSIC_REPORT.md

**Project:** NoorPath Academy  
**Domain:** https://www.noorpath.online/  
**Report date:** 2026-08-19  
**Mode:** Forensic investigation only — **no code changes, no deploy**  
**Investigator role:** Principal SEO Engineer / Technical SEO Auditor / Next.js App Router review  

---

## 1. Executive Summary

**Verdict:** Recent metadata changes did **not** remove the brand from the homepage title, did **not** noindex the site, and did **not** break canonical/robots/sitemap. Live HTML is brand-first and indexable.

The homepage title the user recalled (`Learn Quran Online for Kids & Families — Free 30-Min Trial (2026)`) is the **pre-change** title (before commit `d84c0d6`, 2026-08-12). The **current live** title is:

> `NoorPath Academy | Online Quran Classes for Kids & Families — Free Trial`

GSC brand query evidence does **not** show a collapse from ~position 3 to deep SERP oblivion. For exact query `noorpath`:

| Window | Impressions | Clicks | Avg position |
|--------|-------------|--------|--------------|
| 2026-07-20 → 2026-08-11 (before `d84c0d6`) | 40 | 5 | **4.6** |
| 2026-08-12 → 2026-08-18 (after `d84c0d6`) | 10 | 0 | **6.0** |

The after window is **too small** to prove a durable regression. Position moved slightly worse on a tiny sample; `noor path` / `noor path academy` remain ~positions 3–4 in the same after window.

**Most likely explanation of “we used to be #3 / now look different”:**

1. **Entity collision** with `noorpath.net` (apps) and possibly `noor-path.com` — documented in-repo on 2026-08-12 as owning brand SERP #1 while `noorpath.online` was #2 with Google-rewritten title.  
2. **SERP presentation / Google title rewrite / sitelink entitlement**, not loss of indexation.  
3. **Perception lag:** remembering the old commercial title string while live HTML already changed to brand-first.  

**Did metadata cause brand loss?**  
→ **Unlikely as a “brand-destructive” cause.** Changes were intentionally **brand-first**.  
→ **Possible** as short-term volatility / site-name reassociation while Google reprocesses `WebSite.name` and alternateNames.  
→ **Unrelated** to robots/canonical/indexability failure (those checks pass).

---

## 2. What Changed

### Primary metadata packaging commit

| Field | Value |
|-------|-------|
| Commit | `d84c0d6` |
| Date | 2026-08-12 |
| Message | `feat(seo): brand SERP packaging, FAQ honesty, and country hub CTR` |
| Intent (from commit) | Lead titles with NoorPath Academy; clarify entity vs `noorpath.net` |

### Follow-up brand entity commit

| Field | Value |
|-------|-------|
| Commit | `1245c36` |
| Date | 2026-08-18 |
| Message | `feat(seo): strengthen brand entity signals vs name collisions` |
| Intent | Expand alternateNames, disambiguation, FAQ, logo, raise about/founder/contact sitemap priority, remove broken SearchAction |

---

## 3. Git Diff Evidence

### 3.1 Homepage title / description / OG / Twitter — `src/app/page.tsx`

| Field | BEFORE (`d84c0d6^`) | AFTER (`d84c0d6` → HEAD) |
|-------|---------------------|---------------------------|
| `title.absolute` | `Learn Quran Online for Kids & Families — Free 30-Min Trial (2026)` | `NoorPath Academy \| Online Quran Classes for Kids & Families — Free Trial` |
| `description` | Live 1-on-1… (no leading brand) | Starts with `NoorPath Academy — …` |
| `alternates.canonical` | `https://www.noorpath.online` | **unchanged** |
| OG title | `Learn Quran Online \| NoorPath Academy — Free Trial for Kids & Families` | Brand-first `NoorPath Academy \| …` |
| H1 (on-page) | Led with “Learn Quran Online” | Leads with **NoorPath Academy** |

**Classification:** **B) potentially SEO-impacting** (title/H1/site-name packaging), direction = **toward brand**, not away.

`1245c36` did **not** change homepage title/description (only added official-domain FAQ content).

### 3.2 Root layout — `src/app/layout.tsx`

| Field | BEFORE | AFTER (`d84c0d6`) | AFTER (`1245c36`) |
|-------|--------|-------------------|-------------------|
| `metadataBase` | `https://www.noorpath.online` | unchanged | unchanged |
| `title.default` | `Learn Quran Online \| NoorPath Academy — Free Trial for Kids & Families` | Brand-first default | unchanged |
| `title.template` | `%s \| NoorPath Academy` | unchanged | unchanged |
| `robots` | index/follow | unchanged | unchanged |
| `keywords` | commercial only | commercial | **+** `noorpath`, `noor path`, `noorpath academy`, … |
| `twitter.site` | `@NoorPathAcademy` | present | **removed** in `1245c36` |

**Classification:**  
- Title default change: **B** (aligns with homepage).  
- Keywords addition: **A/cosmetic for Google** (meta keywords largely ignored).  
- Twitter `site` removal: **A/low** (Twitter card only; not a Google ranking lever).

### 3.3 Organization / WebSite JSON-LD — `src/lib/organizationSchema.ts`

| Field | BEFORE `d84c0d6` | AFTER `d84c0d6` | AFTER `1245c36` |
|-------|------------------|-----------------|-----------------|
| Org `name` | `NoorPath Academy` | same | same |
| Org `alternateName` | `NoorPath`, `NoorPath Online Quran Academy` | same-ish | **expanded**: + `Noor Path`, `Noor Path Academy`, `noorpath`, `noorpath.online` |
| `WebSite.name` | **`NoorPath`** | **`NoorPath Academy`** | same |
| `WebSite.alternateName` | Academy-first list | includes `NoorPath`, domain | + spaced variants |
| `disambiguatingDescription` | none / lighter | vs `noorpath.net`, online-only | + `noor-path.com`, official domain |
| Logo URL | `favicon.svg` | same until later | **`/icon-512.png`** |
| `SearchAction` | present (`/blog?q={search_term_string}`) | still present after `d84c0d6` | **removed** in `1245c36` (no real site search) |
| `sameAs` | inline social URLs | same | centralized via `SOCIAL_PROFILE_URLS` |

**Classification:**  
- `WebSite.name` change NoorPath → NoorPath Academy: **B/C borderline** for site-name / brand-query association (intentional disambiguation vs apps).  
- alternateName expansion: **B** (helps spaced queries; slight ambiguity risk).  
- SearchAction removal: **B low** (correctness fix; unlikely to tank brand).  
- Logo swap to PNG: **B low/positive** (valid ImageObject).

### 3.4 Sitemap — `src/app/sitemap.ts` (`1245c36` only)

| URL | Priority before | Priority after | lastModified after |
|-----|-----------------|----------------|--------------------|
| `/` | 1.0 | 1.0 | unchanged stamp |
| `/about` | 0.75 | **0.9** | 2026-08-18 |
| `/contact` | 0.7 | **0.85** | 2026-08-18 |
| `/founder` | 0.7 | **0.85** | 2026-08-18 |

**Classification:** **A/B low** — priority is a weak hint; not a ranking switch.

### 3.5 robots.txt

No material change in the brand packaging commits. Live still allows `/`, disallows `/api/` only.

**Classification vs brand issue:** **D) unrelated**.

---

## 4. Homepage Metadata Analysis

### Live HTML (fetched 2026-08-19, `https://www.noorpath.online/`)

| Signal | Exact observed value |
|--------|----------------------|
| HTTP status | **200** |
| Prerender | `x-nextjs-prerender: 1` (SSG/prerendered) |
| `<title>` | `NoorPath Academy \| Online Quran Classes for Kids & Families — Free Trial` |
| meta description | Starts with `NoorPath Academy — live 1-on-1…` |
| robots meta | `index, follow` |
| canonical | `https://www.noorpath.online` (self-ref, no trailing slash) |
| X-Robots-Tag | **absent** (no noindex header) |
| H1 | Starts with **NoorPath Academy** + subtitle “Learn Quran Online…” |
| EducationalOrganization.name | `NoorPath Academy` |
| WebSite.name | `NoorPath Academy` |
| SearchAction | **not present** |
| Brand in title? | **Yes** |
| Old “Learn Quran…(2026)” title? | **No** (not in live HTML) |

**Important:** User’s recalled title matches **git BEFORE `d84c0d6`**, not current production HTML. If Google SERP still shows a rewritten/old string, that is a **snippet/cache/association** issue, not missing brand in source.

---

## 5. Indexability Analysis

| Check | Result |
|-------|--------|
| Homepage 200 | Yes |
| `robots` meta index | Yes |
| X-Robots-Tag noindex | No |
| Middleware crawler blocks | **No `middleware.ts`** in repo |
| SSR/prerender | Yes (`x-nextjs-prerender: 1`) |
| Root layout `dynamic = "error"` | Forces static; good for crawl consistency |
| Framework | Next.js **16.2.9**, App Router only |

**Indexability blocker for brand SERP?** Not evidenced.

---

## 6. Canonical Analysis

| URL tested | Behavior |
|------------|----------|
| `https://www.noorpath.online/` | 200; canonical `https://www.noorpath.online` |
| `https://noorpath.online/` | **308 →** `https://www.noorpath.online/` |
| `http://www.noorpath.online/` | **308 →** https www |
| `http://noorpath.online/` | **308 →** https apex → **308 →** https www |

Configured in `next.config.ts` redirects + Vercel HSTS. Canonical consistency: **good**.

**Classification vs brand issue:** **D) unrelated**.

---

## 7. Robots Analysis

Live `robots.txt` (200):

- `User-Agent: *` → `Allow: /`, `Disallow: /api/`
- Explicit allows for Googlebot and major AI bots
- `Sitemap: https://www.noorpath.online/sitemap.xml`
- `Host: https://www.noorpath.online`

No homepage disallow. **Not a brand regression cause.**

---

## 8. Sitemap Analysis

| Check | Result |
|-------|--------|
| `/sitemap.xml` status | **200** |
| Homepage listed | Yes: `<loc>https://www.noorpath.online</loc>` |
| Homepage priority in code | `1.0` |
| Sitemap index | Single urlset (not multi-index) |

**Not a brand regression cause.**

---

## 9. Structured Data Analysis

| Schema | Present on homepage | Brand consistency |
|--------|---------------------|-------------------|
| Organization / EducationalOrganization (global via `OrganizationJsonLd`) | Yes | `name: NoorPath Academy` |
| WebSite | Yes | `name: NoorPath Academy`; `alternateName` includes NoorPath / spaced / domain |
| FAQPage (homepage) | Yes | Includes official-domain disambiguation FAQ |
| ItemList (courses) | Yes | Uses NoorPath Academy |
| Breadcrumb on homepage | Not required | N/A |
| Duplicate AggregateRating on Organization | Intentionally removed earlier (`2146368`) | Correct per Google review guidelines |

**Risk note (MEDIUM):** Expanding `alternateName` to include spaced **“Noor Path”** / **“Noor Path Academy”** helps match GSC queries users already type, but can also keep the Knowledge Graph / brand cluster “wide.” This is a tradeoff, not proof of damage.

**Risk note (LOW):** Removing `SearchAction` that pointed at a non-search `/blog?q=` endpoint was correctness-first; unlikely to explain brand visibility loss.

---

## 10. Brand Entity Consistency

Primary brand target: **NoorPath**  
Official site: **https://www.noorpath.online/**  
Canonical org name in facts: `ACADEMY_NAME = "NoorPath Academy"` (`src/lib/academyFacts.ts`)

| CURRENT VALUE | EXPECTED VALUE | RISK | RECOMMENDED ACTION |
|---------------|----------------|------|--------------------|
| Org/WebSite `name`: **NoorPath Academy** | Keep as primary legal/marketing name | LOW | Keep |
| `alternateName`: includes **NoorPath** | Keep as primary brand short form | LOW | Keep |
| `alternateName`: **Noor Path** / **Noor Path Academy** | Optional aliases for spaced queries | MEDIUM | Monitor GSC; do not add more aliases without evidence |
| Description string **NoorPath Online Quran Academy** | Acceptable long-form | LOW | Keep if used consistently |
| Footer/nav: **NoorPath Academy** | Consistent | LOW | Keep |
| H1: **NoorPath Academy** | Good | LOW | Keep |
| GBP category historically “Religious school in Lahore” (from 2026-08-12 note) | Online tutoring / online education | **HIGH (off-site)** | Align GBP manually — outside code |
| Competitor entities: `noorpath.net`, `noor-path.com` | Disambiguate, do not claim affiliation | **HIGH (external)** | Keep disambiguation copy; do not invent attacks |

In-repo frequency (excluding large blog content dumps sample): `NoorPath Academy` dominates; spaced forms are sparse and mostly schema/FAQ.

---

## 11. GSC Evidence

### Fresh API pull (this audit) — `sc-domain:noorpath.online`

**BEFORE metadata packaging (`2026-07-20` → `2026-08-11`):**

| Query | Clicks | Impressions | CTR | Position |
|-------|--------|-------------|-----|----------|
| noorpath | 5 | 40 | 12.5% | **4.6** |
| noor path academy | 3 | 30 | 10% | **4.0** |
| noor path | 0 | 13 | 0% | 7.9 |
| noorpathquranacademy.com | 0 | 4 | 0% | 6.0 |

**AFTER metadata packaging (`2026-08-12` → `2026-08-18`):**

| Query | Clicks | Impressions | CTR | Position |
|-------|--------|-------------|-----|----------|
| noor path | 0 | 11 | 0% | **3.55** |
| noorpath | 0 | 10 | 0% | **6.0** |
| noor path academy | 0 | 3 | 0% | **3.33** |

### Interpretation (honest)

- There is **no verified GSC proof** that average position fell from ~3 to page 8+.  
- Historical exports also show `noorpath` typically ~**4.5–7.5**, not a stable exclusive #1/#3 monopoly.  
- After-window impression volume is **too low** for a confident causal claim about `d84c0d6`.  
- Clicks dropping to 0 in a 7-day after window can be noise + delayed click attribution + weekday mix — **not** proof of deindexing.

### Prior local export corroboration

- `seo-reports/gsc-geo-fresh-2026-08-18.json`: `noorpath` → position **4.6**, 49 impressions, 5 clicks (broader window).  
- `seo-reports/brand-serp-improvements-2026-08-12.md`: already recorded **`noorpath.net` #1**, `noorpath.online` **#2** with Google title rewrite — **before** blaming the brand-first packaging as “loss.”

---

## 12. SERP Evidence

**Verified live Google rank positions were not claimed in this audit** (no authenticated Google SERP API; HTML scrapers are unreliable and often blocked).

**Documented prior SERP observation (in-repo, 2026-08-12):**

- Query `noorpath`: `noorpath.net` #1; `noorpath.online` #2; Google rewrote academy title toward domain; GBP side panel for “NoorPath Academy.”

**What we can say from site + GSC:**

- Homepage is indexed/eligible (impressions exist for brand queries).  
- Another NoorPath-named product brand is a known competitor for the bare token `noorpath`.  
- Trustpilot / social outranking homepage: **not verified** in this pass.  
- Entity ambiguity: **LIKELY** (multiple domains sharing “NoorPath” token).

---

## 13. Root Cause Candidates

| ID | Candidate | Likelihood | Confidence |
|----|-----------|------------|------------|
| R1 | External brand collision (`noorpath.net` / similar names) dominates bare `NoorPath` SERP | **LIKELY** | High |
| R2 | Google snippet/title rewrite / site-name display makes result “look different” without deindexing | **LIKELY** | Medium-High |
| R3 | `WebSite.name` shift `NoorPath` → `NoorPath Academy` caused short-term site-name reprocessing | **POSSIBLE** | Medium |
| R4 | Metadata change *removed* brand from title and caused ranking loss | **UNLIKELY** | High (git + live HTML contradict) |
| R5 | robots/canonical/sitemap/noindex regression | **UNLIKELY** | High (live checks pass) |
| R6 | SearchAction removal caused brand loss | **UNLIKELY** | Medium-High |
| R7 | alternateName expansion created harmful entity dilution | **POSSIBLE** | Low-Medium |
| R8 | GBP Lahore campus category conflicts with online-only entity | **POSSIBLE / HIGH off-site** | Medium (from prior report; not re-verified today) |
| R9 | User comparing against old commercial title memory / non-incognito SERP | **POSSIBLE** | Medium |

---

## 14. Confidence Score Summary

| Claim | Confidence |
|-------|------------|
| Live title is brand-first today | **95%** |
| Old recalled title was pre-`d84c0d6` | **95%** |
| Indexability not broken by these commits | **90%** |
| Brand packaging did not *remove* brand signals | **90%** |
| External entity collision is primary SERP story | **80%** |
| `d84c0d6` caused a durable GSC position collapse | **15%** (data insufficient / contradicts) |
| Need immediate code rollback of titles | **Low justification** |

---

## 15. Recommended Fix (awaiting approval — do not implement yet)

### Preferred: observe + off-site entity hygiene (safe)

1. **Do not churn homepage title again for 14–28 days** (already brand-first).  
2. Re-pull GSC brand queries weekly with comparable windows (≥28 days).  
3. Manually align **Google Business Profile** to online tutoring (no campus implication).  
4. Use GSC URL Inspection on `/`, `/about`, `/founder` after any *approved* change.  
5. Document SERP with screenshots (incognito, same country) for `NoorPath`, `NoorPath Academy`, `noorpath.online`.

### Only if evidence later proves site-name confusion

Consider a **minimal** schema experiment (one variable at a time):

- Keep Org `name` = `NoorPath Academy`  
- Ensure `alternateName` always includes bare **`NoorPath`** (already true)  
- Avoid further alias sprawl  
- Do **not** revert to commercial-only title without brand lead

### Explicitly not recommended now

- Rewriting homepage URL  
- Removing Organization/WebSite JSON-LD  
- Mass hreflang/canonical edits  
- Keyword-stuffing title with repeated “NoorPath”  
- Fake reviews / fake backlinks  

---

## 16. Things That MUST NOT Be Changed (without new evidence)

- Homepage URL `/`  
- Canonical host `https://www.noorpath.online`  
- Blog URLs  
- robots.txt allow rules for `/`  
- Sitemap homepage entry  
- Redirect map apex→www / http→https  
- Fabricated ratings, campuses, review counts  
- Mass content rewrites “for SEO”  

---

## 17. Safe Remediation Plan (phased; approval required)

| Phase | Action | Code? |
|-------|--------|-------|
| 0 | Accept this forensic baseline | No |
| 1 | Capture incognito SERP screenshots + GSC 28-day brand export | No |
| 2 | GBP category/service-area cleanup | Off-site |
| 3 | If still needed: tiny schema-only PR (aliases trim OR founder `@id` graph only) | Yes, minimal |
| 4 | Validate 14 days in GSC before any further title edit | Measure |

---

## 18. Validation Plan

1. GSC → Performance → filter queries `noorpath`, `noor path`, `noorpath academy`, `noorpath.online` (28 days, compare to prior 28).  
2. GSC URL Inspection → homepage → “Page indexing” = Indexed.  
3. Rich Results / Schema validator on homepage (Org + WebSite names).  
4. Live HTML curl check that `<title>` still starts with `NoorPath Academy`.  
5. SERP screenshots: brand query vs `noorpath.online` navigational query.  
6. Do **not** treat a 7-day after-window as conclusive.

---

## Phase 1 inventory (architecture checklist)

| # | Item | Finding |
|---|------|---------|
| 1 | Framework | Next.js **16.2.9**, React 19.2.4 |
| 2 | Router | **App Router only** (`src/app`) |
| 3 | Root layout metadata | Present (`src/app/layout.tsx`) |
| 4 | Homepage metadata | Present (`src/app/page.tsx`) |
| 5 | `generateMetadata` | Used on dynamic routes; homepage uses static `metadata` |
| 6 | `metadataBase` | `https://www.noorpath.online` |
| 7–11 | title/desc/OG/Twitter/robots | Brand-first; index,follow |
| 12–14 | canonical / alternates / hreflang | Homepage self-canonical; geo hreflang via `geoSeo` on location pages (not homepage primary) |
| 15–21 | JSON-LD | Org+WebSite global; homepage FAQ+ItemList; no SearchAction now |
| 22–23 | sitemap / robots | App Router `sitemap.ts` / `robots.ts` — healthy |
| 24–25 | noindex / x-robots | Not on homepage |
| 26 | middleware | **None** |
| 27–31 | redirects / trailing slash / www / https | Configured correctly |
| 32–36 | internal brand links / nav / footer | Consistent NoorPath Academy |
| 37–39 | title duplication / inheritance | Homepage uses `title.absolute` to avoid template double-brand (`absolutePageTitle` pattern exists) |
| 40 | SSR/indexability | Prerendered HTML served |

---

## Regression findings table (Phase 10)

| Severity | Finding | Evidence | File | Impact | Confidence | Recommended fix |
|----------|---------|----------|------|--------|------------|-----------------|
| **HIGH** | External brand collision on bare `noorpath` | Prior SERP note + GSC brand competition context | `seo-reports/brand-serp-improvements-2026-08-12.md` | Academy may remain #2 behind apps | High | Off-site disambiguation + measure; no panic title churn |
| **MEDIUM** | User recalled obsolete title | Git before `d84c0d6` vs live HTML | `src/app/page.tsx` history | Misdiagnosis risk | High | Align expectations to live title |
| **MEDIUM** | `WebSite.name` changed from bare NoorPath → NoorPath Academy | `d84c0d6` schema diff | `organizationSchema.ts` | Possible site-name reprocessing | Medium | Monitor; change only with evidence |
| **MEDIUM** | alternateName alias expansion | `1245c36` | `organizationSchema.ts` | Ambiguity vs match tradeoff | Low-Med | Freeze further aliases |
| **LOW** | Twitter `site` handle removed | `1245c36` layout | `layout.tsx` | Twitter cards only | High | Optional restore if handle exists |
| **LOW** | SearchAction removed | `1245c36` | `organizationSchema.ts` | Correctness; low ranking impact | Med-High | Keep removed unless real search ships |
| **LOW** | After-window GSC sample tiny | API 2026-08-12→18 | GSC | Noise risk | High | Wait for 28-day window |
| **INFORMATIONAL** | Keywords meta brand terms added | `1245c36` | `layout.tsx` | Ignored by Google | High | No action |
| **INFORMATIONAL** | Indexability healthy | Live curl | production | Not the problem | High | No action |

---

## STOP — awaiting approval

No SEO code changes were made in this investigation.

---

### Deliverable snapshot (for chat handoff)

**ROOT CAUSE:**

| Candidate | Rating |
|-----------|--------|
| Metadata *destroyed* brand title/indexability | **UNLIKELY** |
| External entity collision + SERP packaging/rewrite | **LIKELY** |
| Short-term volatility from brand-first schema/title packaging | **POSSIBLE** |

**TOP 5 EVIDENCE ITEMS**

1. Live `<title>` is brand-first; old “Learn Quran…(2026)” title exists only **before** `d84c0d6`.  
2. Canonical/robots/sitemap/homepage 200 all healthy; no noindex.  
3. GSC `noorpath` before ~pos **4.6** (40 imp) vs after ~pos **6.0** (10 imp) — not a proven collapse.  
4. In-repo 2026-08-12 SERP note: `noorpath.net` #1, academy #2 with rewritten title.  
5. `WebSite.name` intentionally changed from `NoorPath` → `NoorPath Academy` to fight app collision.

**SAFE FIX PLAN**

1. Measure 28 days (no title churn).  
2. Fix GBP entity mismatch off-site.  
3. Only then consider minimal schema alias/site-name experiment — with approval.

**FILES THAT WOULD BE MODIFIED** (only after approval, if any)

- Possibly `src/lib/organizationSchema.ts` (minimal)  
- Possibly `src/app/layout.tsx` (twitter.site restore only)  
- Unlikely: `src/app/page.tsx` title (already brand-first)

**FILES THAT MUST REMAIN UNTOUCHED**

- `src/app/robots.ts`  
- Homepage URL / blog URLs  
- Canonical host strategy in `next.config.ts` redirects (unless proven broken — currently not)  
- Sitemap URL list shape (no mass URL changes)  
- Any fabricated E-E-A-T / review markup
