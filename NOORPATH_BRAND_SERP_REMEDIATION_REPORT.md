# NOORPATH BRAND SERP REMEDIATION REPORT

**Date:** 2026-08-19  
**Mode:** Audit-first remediation decision  
**Code changes:** **NONE**  
**Final recommendation:** **A. KEEP CURRENT IMPLEMENTATION**

---

## 1. Executive Verdict

| Question | Answer |
|----------|--------|
| Does the repository confirm the forensic baseline? | **Yes.** Live production and source match: indexable homepage, brand-first title/H1, Org/WebSite = NoorPath Academy, healthy robots/sitemap/canonical. |
| Were code changes necessary? | **No.** No **B-class** (safe + clearly beneficial now) interventions met the evidence bar. |
| Should the homepage title remain? | **Yes.** Keep `NoorPath Academy \| Online Quran Classes for Kids & Families — Free Trial`. |
| Is the entity graph coherent? | **Yes**, with minor non-blocking hygiene notes (founder `@id` reference without Person node on every page; `#cta` fragment URLs elsewhere). |
| Is external collision still the dominant issue? | **Yes.** `noorpath.net` (apps, brand “NoorPath”) and `noor-path.com` (titles as “NoorPath Academy”) dominate bare-brand SERP competition. That cannot be fixed by metadata churn. |

**Do not confuse “not #1 for `noorpath`” with “site is broken.”** The site’s branded technical packaging is already aligned with Google site-name / entity clarity guidance.

---

## 2. Files Audited

| File | Purpose | Finding | Risk |
|------|---------|---------|------|
| `src/app/page.tsx` | Homepage metadata, H1, FAQ, CTAs | Brand-first title/H1/desc/canonical OK; local `#cta` CTAs remain | Low (`#cta` = C-class later) |
| `src/app/layout.tsx` | Root metadata, icons, robots | Brand-first defaults; index/follow; metadataBase correct | None material |
| `src/lib/organizationSchema.ts` | Org + WebSite JSON-LD | Coherent `@id` graph; no SearchAction; aliases bounded; competitors only in disambiguation text | Low (alias freeze) |
| `src/lib/academyFacts.ts` | Canonical brand facts, sameAs inputs | `ACADEMY_NAME`, `BASE_URL`, socials, Trustpilot, GBP URL | None |
| `src/components/OrganizationJsonLd.tsx` | Sitewide schema inject | Single Org/WebSite graph via PublicShell | None |
| `src/components/PublicShell.tsx` | Layout shell | Injects OrganizationJsonLd once | None |
| `src/app/sitemap.ts` | Sitemap | Homepage priority 1.0; about/contact/founder elevated | None |
| `src/app/robots.ts` | robots.txt | Allow `/`, disallow `/api/` only | None |
| `next.config.ts` | Redirects/headers | Apex→www, http→https; no noindex headers | None |
| `src/app/about/page.tsx` | Entity disambiguation | Official domain FAQ; non-affiliation copy | None |
| `src/app/founder/page.tsx` | Person entity | Person `@id` + worksFor Org | None |
| `src/app/contact/page.tsx` | Contact entity page | Brand-consistent | None |
| `src/components/Navbar.tsx` / `Footer.tsx` | Nav/brand | Trial CTA prefers stable `/free-quran-classes-online` | None |
| `public/icon-512.png` / `og-image.png` | Logo / OG | Present; schema logo points to icon-512 | None |
| Commits `d84c0d6`, `1245c36` | Brand packaging history | Confirmed intentional brand-first + disambiguation | Historical only |

Working tree note: untracked forensic markdown + progress PNGs + `.cursor/`; dirty `tsconfig.tsbuildinfo` only — **no SEO source overwrites performed.**

---

## 3. Evidence Confirmed

1. Live `https://www.noorpath.online/` → **HTTP/2 200**, `x-nextjs-prerender: 1`.  
2. Live `<title>` = **NoorPath Academy | Online Quran Classes for Kids & Families — Free Trial** (single title tag).  
3. Live robots meta = **index, follow**; no X-Robots-Tag; no noindex.  
4. Live canonical = **https://www.noorpath.online** (single canonical).  
5. Live EducationalOrganization + WebSite **name = NoorPath Academy**; `@id`s deterministic (`/#organization`, `/#website`).  
6. Live **SearchAction absent** (correct).  
7. Live **sameAs** = Trustpilot + GBP kgmid + FB/IG/TikTok/YouTube only — **competitors not in sameAs**.  
8. Competitors appear only in **disambiguatingDescription** / visible FAQ (correct pattern).  
9. Git: pre-`d84c0d6` title was commercial-first; post-change is brand-first (H1 also flipped).  
10. Forensic/GSC baseline: 7-day after window too small for causal collapse; July GSC already showed ~avg position mid-single-digits for `noorpath`.  
11. External collision: `noorpath.net` apps brand “NoorPath”; `noor-path.com` titles with “NoorPath Academy” (prior independent verification).

---

## 4. Problems Found

| Severity | Issue | Evidence | Action now |
|----------|-------|----------|------------|
| **HIGH** (external) | Brand/entity collision with `noorpath.net` and `noor-path.com` | Live competitor sites; prior SERP note | Off-site / measurement — **not code** |
| **MEDIUM** (deferred) | Brand query impressions on `/#cta` and `…#cta` URLs | Prior GSC query×page | **C-class** — needs approval + equal-length windows; no mass link rewrite now |
| **LOW** | Org `founder` `@id` without Person node on homepage graph | Live JSON-LD | **C-class** hygiene; embedding Person sitewide risks duplication |
| **LOW** | Meta `keywords` includes brand terms | `layout.tsx` | **A** — Google largely ignores; leave |
| **NONE** | Indexability / canonical / robots / sitemap breakage | Live checks | — |
| **NONE** | Missing brand in title/H1/Org/WebSite | Live + source | — |
| **NONE** | Fake SearchAction / fake AggregateRating on Org | Live + schema comments | — |

No **CRITICAL** on-site technical defects requiring immediate code remediation.

---

## 5. Changes Made

**NO CODE CHANGES REQUIRED**

| Candidate | Class | Why not implemented |
|-----------|-------|---------------------|
| Revert homepage title | **D** | Would remove brand lead; fights wrong problem |
| Revert `WebSite.name` to bare `NoorPath` | **D** | Increases collision with apps |
| Expand alternateName further | **D** | Alias spam risk |
| Mass replace `#cta` links sitewide | **D/C** | Explicitly forbidden mass rewrite; needs measurement threshold |
| Homepage `#cta` → `/free-quran-classes-online` only | **C** | Plausible but UX+SEO mixed; needs human approval |
| Embed Person in sitewide Org graph | **C** | Could duplicate Person on every URL |
| Restore `twitter.site` | **A/C** | Negligible Google impact |
| robots/sitemap/canonical edits | **D** | Healthy |

---

## 6. Changes Deliberately NOT Made

- **No title churn** — current title balances brand ownership + commercial CTR; already deployed since `d84c0d6`.  
- **No schema rollback** — Org/WebSite naming and disambiguation are coherent.  
- **No competitor attack pages / repeated competitor mentions** — disambiguation already localized.  
- **No robots/sitemap/canonical/host changes** — verified healthy.  
- **No blog/commercial title rewrites** — out of scope; protects rankings.  
- **No fabricated E-E-A-T** — policy intact.  
- **No “feel-good” edits** — changes without evidence would create measurement noise during the post-`d84c0d6` observation window.

---

## 7. Validation Results

### npm lint / npm build
**Not run as a post-change gate** — **zero code changes**. Running a full production build was unnecessary for a no-op decision and would not alter the SEO conclusion.

### Generated / production HTML (live 2026-08-19)

| Check | Result |
|-------|--------|
| HTTP | 200 |
| Title | Brand-first NoorPath Academy… |
| Meta description | Brand-first |
| robots | index, follow |
| canonical | https://www.noorpath.online (1×) |
| Duplicate title/canonical | None |
| OG / Twitter | Present; siteName NoorPath Academy |
| JSON-LD Org/WebSite | Present; names aligned |
| SearchAction | Absent |
| noindex | Absent |
| sameAs competitors | Absent (disambig text only) |
| Logo | `/icon-512.png` |
| sitemap homepage | Present |
| robots.txt | Allow `/` |
| Redirects | Apex/http → https www (config + live) |

---

## 8. Brand Entity Graph

```
NoorPath Academy  (EducationalOrganization)
├── @id: https://www.noorpath.online/#organization
├── official domain: https://www.noorpath.online
├── name: NoorPath Academy
├── alternateName: NoorPath, Noor Path, Noor Path Academy,
│                  NoorPath Online Quran Academy, noorpath, noorpath.online
├── logo: /icon-512.png
├── sameAs: Trustpilot, GBP, Facebook, Instagram, TikTok, YouTube
├── founder → @id /founder#person  (Person defined on /founder)
├── disambiguation: online-only; not affiliated with noor-path.com / noorpath.net
└── url: https://www.noorpath.online

WebSite
├── @id: https://www.noorpath.online/#website
├── name: NoorPath Academy
├── publisher → Organization
├── about → Organization
├── hasPart → Classes, Courses, Free Trial, Pricing, Blog, About, Contact
└── (no SearchAction)

Key internal pages reinforcing entity
├── / (H1 + title brand-first)
├── /about (official domain FAQ)
├── /founder (Person ↔ Organization)
├── /contact
└── /free-quran-classes-online (stable trial hub)
```

---

## 9. Remaining External Risks

| Risk | Notes |
|------|-------|
| `noorpath.net` | Apps product using brand **NoorPath** — owns bare-token competition |
| `noor-path.com` | Uses **NoorPath Academy** in title — academy-name collision |
| Google title/site-name rewrite | Can still rewrite snippets; source metadata ≠ SERP display |
| GBP / Knowledge Graph | GBP linked via kgmid; category/campus story must stay aligned off-site |
| SERP personalization / location / device | Mobile brand positions can look stronger than desktop averages |
| GSC sampling | Short windows misread as “penalties” |

---

## 10. Next 14–28 Day Measurement Plan

**Do not change homepage title during this window.**

### Queries
- `noorpath`
- `noor path`
- `noorpath academy`
- `noor path academy`
- `noorpath online`
- `noorpath.online`

### Metrics
clicks, impressions, CTR, average position, landing page, country, device

### Windows (equal length)
1. **Baseline:** 28 days ending **2026-08-11** (pre-`d84c0d6`)  
2. **Treatment:** 28 days ending **~2026-09-09** (post packaging mature)  
3. Optional mid-check at 14 days — interpretive only, not decisive

### Extra cuts
- Query × page (watch `/`, `/#cta`, `/about`)  
- Device (mobile vs desktop)  
- Country (Pakistan historically dominates branded clicks)

### Pass criteria (examples)
- Homepage remains primary landing URL for brand queries  
- No indexability regressions  
- `noor path academy` / navigational queries stable or improving  
- Bare `noorpath` may remain contested by competitors — not alone a fail

---

## 11. Final Recommendation

# **A. KEEP CURRENT IMPLEMENTATION**

Rationale: On-site brand packaging and indexability are already correct. Dominant residual risk is **external entity collision**, which metadata edits cannot erase. Further code changes now would add noise without proven upside.

**Optional later (human approval only — not done):**
- C: Prefer `/free-quran-classes-online` over crawlable `#cta` CTAs where UX allows  
- C: Tighten founder graph embedding strategy without sitewide Person duplication  
- Off-site: GBP category/service-area alignment; SERP screenshot protocol

---

**STOP.** No SEO code modified. No deploy. No commit.
