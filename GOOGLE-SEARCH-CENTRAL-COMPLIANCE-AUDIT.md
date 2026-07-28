# NoorPath — Google Search Central Compliance Audit & Strategy

**Classification:** CTO / Enterprise SEO Architecture  
**Mode:** Read-only audit — **no product code changed**  
**Primary authority:** [Google Search Central](https://developers.google.com/search/docs) (SEO Starter Guide, Search Essentials, Spam Policies, Helpful Content, Canonicalization, Sitemaps, JavaScript SEO, Structured Data, Internationalization)  
**Codebase evidence date:** 28 July 2026  
**Inventory:** 26 location hubs · 37 city pages · 111 blog posts  

**Labeling rule used throughout:**  
- **Google-official** = explicitly supported by Search Central docs linked below  
- **Best Practice (Non-Google)** = industry/engineering practice not stated as a Google ranking requirement  

---

## Executive Summary

NoorPath is **substantially Google-compliant** on technical discovery fundamentals: HTTPS + HSTS, crawlable HTML via static generation, robots allowing the site, XML sitemap, absolute self-canonicals, reciprocal English-regional `hreflang` for country hubs, descriptive URLs, and structured data for Organization / FAQ / Service / Course.

The **highest material risks** vs official Google guidance are:

1. **Structured data accuracy (AggregateRating)** — local review dataset can emit **5.0/4** while academy facts cite Trustpilot **4.0/4** ([structured data must match visible/accurate info](https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data); spam policies prohibit misleading markup).  
2. **Scaled / templated geo surfaces** — 26×37 country/city pages share FAQ/body templates with limited unique guides — raises **doorway / scaled content** risk under [Spam Policies](https://developers.google.com/search/docs/essentials/spam-policies) and fails several [Helpful Content](https://developers.google.com/search/docs/fundamentals/creating-helpful-content) self-checks if expanded without originality.  
3. **Title template stacking** — layout `template: "%s | NoorPath Academy"` can double brand suffixes on geo/course titles (hurts clarity of titles per Starter Guide / helpful-content heading guidance).  

**Overall Google Compliance Score: 78 / 100** (Compliant with warnings; not failing Search Essentials technical eligibility).

**Strategy:** ADD / enhance / deepen uniqueness and accuracy — **do not** redesign UI, rename URLs, or strip ranking pages.

---

## Knowledge Map (Google Search Central)

### Core document graph studied

| Topic | Official doc |
|-------|----------------|
| SEO fundamentals | [SEO Starter Guide](https://developers.google.com/search/docs/fundamentals/seo-starter-guide) |
| Eligibility | [Search Essentials](https://developers.google.com/search/docs/essentials) |
| Spam / manipulative tactics | [Spam Policies](https://developers.google.com/search/docs/essentials/spam-policies) |
| People-first content / E-E-A-T framing | [Creating helpful content](https://developers.google.com/search/docs/fundamentals/creating-helpful-content) |
| Canonicalization | [Consolidate duplicate URLs](https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls) |
| Sitemaps | [Sitemaps overview](https://developers.google.com/search/docs/crawling-indexing/sitemaps/overview) |
| JavaScript SEO | [JS SEO basics](https://developers.google.com/search/docs/crawling-indexing/javascript/javascript-seo-basics) |
| Structured data | [Intro to structured data](https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data) |
| International / hreflang | [Localized versions](https://developers.google.com/search/docs/specialty/international/localized-versions) |

### Google-official takeaways (compressed)

1. **Technical SEO** — Pages must be crawlable/indexable; don’t block CSS/JS needed to understand the page; meaningful HTTP status codes.  
2. **Content** — Compelling, useful, people-first; descriptive titles/headings; words people search in prominent places.  
3. **Site structure** — Logical organization; descriptive URLs; group similar topics in directories on large sites.  
4. **Internal linking** — Crawlable `<a href>` links; consistent links to preferred canonicals.  
5. **Crawlability** — Links + optional sitemap; robots.txt controls crawling not indexing.  
6. **Indexing** — Google decides; use noindex/robots carefully; soft-404 avoidance.  
7. **Rendering** — Google renders JS; SSR/prerender still recommended for speed and non-JS bots.  
8. **Metadata** — Unique titles & meta descriptions; avoid shocking/exaggerated titles.  
9–10. **Rich results / Schema** — Markup must describe on-page content; accurate required properties; validate with Rich Results Test.  
11. **JavaScript SEO** — Crawl → render → index; History API not hash routes; don’t change canonical via JS inconsistently.  
12. **Next.js** — *Best Practice (Non-Google)*: SSG/SSR for marketing HTML aligns with Google’s prerender recommendation.  
13. **Helpful content** — Originality, depth, expertise signals; avoid mass-produced niche pages for search alone.  
14. **AI Search readiness** — *Mostly Best Practice (Non-Google)* for `llms.txt`; Google docs address AI-generated content under spam/helpful-content if used to manipulate rankings.  
15–16. **Mobile / Performance** — Page experience matters as part of overall quality; don’t obsess on one CWV metric alone (Google page-experience framing).  
17–18. **Images / Videos** — Descriptive alt; follow media-specific practices when applicable.  
19–20. **URLs / Canonicals** — Descriptive paths; `rel=canonical` absolute HTTPS; HTTPS preferred; sitemap is weak canonical signal.  
21–22. **Robots / Sitemap** — Allow important resources; sitemap helps large/new sites; priority/changefreq largely unused by Google.  
23. **Search Console** — URL Inspection, performance, rich-result reports (operational, not ranking factors).  
24. **EEAT** — Not a single ranking factor; trust especially important for YMYL; authorship/About help people assess trust.  
25–27. **UX / A11y / Security** — Overlap with page experience & technical hygiene; HSTS helps HTTPS preference signals.  
28. **International SEO** — Reciprocal hreflang; absolute URLs; `x-default`; Google detects language algorithmically.  
29. **Duplicate content** — Not spam by itself; canonicalize; waste crawl budget.  
30. **Spam** — Doorway pages, scraped/scaled low-value content, keyword stuffing, hidden text, manipulative redirects, misleading structured data, fake engagement, etc.

---

## Enterprise Checklist (selected high-impact items)

### C1 — Crawlable links & discovery  
| Field | Detail |
|-------|--------|
| Why Google recommends | Starter Guide: Google finds pages via links; crawlable `href` links |
| Why it matters | Orphan pages may never be discovered |
| Common mistakes | JS-only navigation without real `href`; hash routes |
| Enterprise implementation | Keep App Router marketing pages with real `<Link href>` / `<a>` |
| Priority | P0 |
| Risk if ignored | High (undiscovered URLs) |
| Doc | [SEO Starter Guide](https://developers.google.com/search/docs/fundamentals/seo-starter-guide), [JS SEO](https://developers.google.com/search/docs/crawling-indexing/javascript/javascript-seo-basics) |
| NoorPath | **PASS** |

### C2 — Absolute HTTPS self-canonicals  
| Field | Detail |
|-------|--------|
| Why Google recommends | Strong signal for preferred URL; prefer HTTPS |
| Why it matters | Consolidates ranking signals |
| Common mistakes | Relative canonicals; HTTP; conflicting signals |
| Enterprise implementation | `alternates.canonical` absolute `https://www…`; apex→www 301 |
| Priority | P0 |
| Risk | Medium–High if broken |
| Doc | [Canonicalization](https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls) |
| NoorPath | **PASS** |

### C3 — Accurate structured data  
| Field | Detail |
|-------|--------|
| Why Google recommends | Helps understanding; enables rich results when guidelines met |
| Why it matters | Inaccurate markup can lose rich results / violate spam policies |
| Common mistakes | Markup not visible/accurate; inflated ratings |
| Enterprise implementation | Align AggregateRating with public Trustpilot; validate in Rich Results Test |
| Priority | P0 |
| Risk | High (policy) |
| Doc | [Structured data intro](https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data), [Spam Policies](https://developers.google.com/search/docs/essentials/spam-policies) |
| NoorPath | **FAIL** (AggregateRating accuracy) |

### C4 — People-first unique content (anti-scaled / doorway)  
| Field | Detail |
|-------|--------|
| Why Google recommends | Helpful Content + Spam: avoid search-first mass pages / doorways |
| Why it matters | Geo templates may be consolidated or demoted |
| Common mistakes | City pages with only name swaps |
| Enterprise implementation | Unique `localContext` + guides/FAQs per geo; stop expanding thin cities |
| Priority | P0 |
| Risk | High |
| Doc | [Helpful Content](https://developers.google.com/search/docs/fundamentals/creating-helpful-content), [Spam Policies](https://developers.google.com/search/docs/essentials/spam-policies) |
| NoorPath | **WARNING** |

### C5 — Descriptive unique titles  
| Field | Detail |
|-------|--------|
| Why Google recommends | Titles help users choose results; place search words in titles/H1 |
| Why it matters | Truncation/confusion from doubled brands |
| Common mistakes | Duplicate titles; keyword stuffing |
| Enterprise implementation | Use `title.absolute` or strip brand from child titles before template |
| Priority | P1 |
| Risk | Medium |
| Doc | Starter Guide; Helpful Content heading questions |
| NoorPath | **WARNING** |

### C6 — Sitemap for large sites  
| Field | Detail |
|-------|--------|
| Why Google recommends | Helps discovery on large/new sites; weak canonical signal |
| Why it matters | Ensures new geo/blog URLs are listed |
| Common mistakes | Relying on priority/changefreq; stale lastmod as “freshness hack” |
| Enterprise implementation | Keep auto sitemap; add missing commercial URLs; honest lastmod |
| Priority | P1 |
| Risk | Low–Medium |
| Doc | [Sitemaps](https://developers.google.com/search/docs/crawling-indexing/sitemaps/overview) |
| NoorPath | **PASS** with **WARNING** |

### C7 — Reciprocal hreflang (regional English)  
| Field | Detail |
|-------|--------|
| Why Google recommends | Helps serve correct regional variant |
| Why it matters | Correct country hub in country SERPs |
| Common mistakes | Missing return links; invalid codes |
| Enterprise implementation | Maintain `LOCATION_HREFLANG_BY_SLUG` = all locations; `x-default` |
| Priority | P1 |
| Risk | Medium if broken |
| Doc | [Localized versions](https://developers.google.com/search/docs/specialty/international/localized-versions) |
| NoorPath | **PASS** |

### C8 — SSR / prerender for marketing HTML  
| Field | Detail |
|-------|--------|
| Why Google recommends | JS SEO: SSR/prerender still great; not all bots run JS |
| Why it matters | Faster first content for users & crawlers |
| Common mistakes | Client-only shells for SEO content |
| Enterprise implementation | Keep `dynamic = "error"` + SSG for public pages |
| Priority | P0 |
| Risk | High if reversed |
| Doc | [JS SEO basics](https://developers.google.com/search/docs/crawling-indexing/javascript/javascript-seo-basics) |
| NoorPath | **PASS** |

### C9 — E-E-A-T / trust for educational (YMYL-adjacent) content  
| Field | Detail |
|-------|--------|
| Why Google recommends | Trust weighted more for topics affecting welfare; EEAT not a single factor |
| Why it matters | Quran education can be treated as sensitive/trust-sensitive |
| Common mistakes | Anonymous pages; unverifiable claims |
| Enterprise implementation | Keep About/Founder/Editorial/Safeguarding; honest credentials |
| Priority | P1 |
| Risk | Medium |
| Doc | [Helpful Content / EEAT](https://developers.google.com/search/docs/fundamentals/creating-helpful-content) |
| NoorPath | **PASS** with room to **IMPROVE** |

### C10 — Do not spam (doorways, stuffing, fake reviews, misleading schema)  
| Field | Detail |
|-------|--------|
| Why Google recommends | Spam Policies — ranking demotion / delisting |
| Why it matters | Existential risk |
| Common mistakes | Mass city pages; fake stars; hidden text |
| Enterprise implementation | Quality gate before Phase 2/3 geo; fix ratings schema |
| Priority | P0 |
| Risk | Critical |
| Doc | [Spam Policies](https://developers.google.com/search/docs/essentials/spam-policies) |
| NoorPath | **WARNING** (geo scale + ratings) |

---

## Architecture Review

```text
Public marketing (App Router, SSG)
  ├── Hubs: /online-quran-classes, /noorani-qaida, /female-quran-teacher-online, kids/adults
  ├── Geo: /locations/{country}  (26)  +  /online-quran-classes/{city}  (37)
  ├── Blog: /blog/{slug}  (111)
  ├── Courses: /courses/{slug}
  ├── Discovery: robots.ts → sitemap.xml; llms.txt (AI; Non-Google)
  └── Trust: OrganizationJsonLd sitewide; Trustpilot snippet components
```

**Strengths:** Clear URL semantics; ownership separation (hub vs country vs city) documented in prior SEO work; prerendered HTML; crawlable internal geo links.  

**Weaknesses:** Template-heavy FAQs on many geos; AggregateRating derivation; title template interactions; some sitemap omissions; GSC verification env-dependent.

---

## Google Compliance Review (by category)

| Area | Status | Notes |
|------|--------|-------|
| Technical SEO | **Compliant** | HTTPS, HSTS, SSG, robots, sitemap |
| Content (hubs/blogs) | **Partially Compliant** | Strong hubs; uneven depth |
| Helpful Content | **Partially Compliant** | Geo template risk |
| Internal Linking | **Compliant** | Real href clusters |
| Metadata | **Can Improve** | Title doubling; stale “nine markets” copy |
| Schema | **Missing accuracy** | AggregateRating mismatch = critical fix |
| Performance | **Best Practice (Non-Google) score** | Not measured live in this audit |
| Accessibility | **Compliant (basics)** | lang + skip link |
| Security | **Compliant** + improve CSP (Non-Google) |
| Mobile | **Compliant** | Viewport set |
| International SEO | **Compliant** | Reciprocal en-{region} + x-default |
| AI Search Readiness | **Best Practice** | llms.txt present; not a Google ranking factor |
| Spam Policies | **At risk if geo scales without uniqueness** | |

---

## Technical Audit (file-level verdicts)

| Asset | Verdict | Why |
|-------|---------|-----|
| `src/app/robots.ts` | **PASS** | Allow `/`, disallow `/api/`, sitemap URL |
| `src/app/sitemap.ts` | **WARNING** | Good coverage; hardcoded lastmod; some keyword URLs omitted |
| `src/app/layout.tsx` metadataBase/viewport | **PASS** | Absolute base + device-width |
| `src/app/layout.tsx` title template | **WARNING** | Can double brand with child titles |
| `src/app/layout.tsx` GSC verification | **WARNING** | Env empty → no meta tag |
| Canonicals on hubs/geo/blog | **PASS** | Absolute www self-canonicals |
| `src/lib/geoSeo.ts` hreflang | **PASS** | 26/26 + throw if missing; x-default |
| `src/lib/organizationSchema.ts` AggregateRating | **FAIL** | Local 5★ dataset vs Trustpilot 4.0 fact |
| Location/city JSON-LD Service+FAQ | **PASS** | Present; must stay accurate/visible |
| Blog FAQ JSON-LD | **WARNING** | Some posts without FAQ keys; 1 orphan FAQ key |
| `dynamic = "error"` + `revalidate = false` | **PASS** | Aligns with prerender recommendation |
| `next.config.ts` redirects/headers | **PASS** | Apex→www, HTTPS, HSTS |
| CSP | **NOT APPLICABLE** as Google ranking; **WARNING** hygiene | Not required by Search Essentials |
| `public/llms.txt` | **NOT APPLICABLE** (Google ranking) / **PASS** AI ops | Not Search Central requirement |
| Geo `localContext` | **PASS** uniqueness seed | Insufficient alone for all cities |
| Country/city guides coverage | **WARNING** | Guides only on subset |
| Interactive Qaida / portals | **NOT APPLICABLE** to this crawl audit scope | Product apps correctly out of public SEO surface when not indexed |

---

## Content Audit

| Surface | Verdict | Evidence |
|---------|---------|----------|
| Global commercial hubs | **PASS** | Distinct intents, depth, CTAs |
| Noorani Qaida hub | **PASS** | Product documentation + FAQ schema |
| Long blogs | **PASS / WARNING** | Many strong; volume requires ongoing quality |
| Priority EU/Nordic countries with guides | **PASS** | Unique guide modules |
| Template-only countries | **WARNING** | Interpolation-heavy FAQs |
| Cities without city guides (28/37) | **WARNING** | FAQ string swaps |
| Minority Phase 1 cities | **WARNING** | Unique localContext present; still short vs UK city guides |

**Helpful Content self-check (Google questions applied):**  
- “Mass-produced across many topics for search?” → **Risk yes** for future Phase 2/3 if unchecked.  
- “Substantial value vs other results?” → **Hubs yes**; **thin cities uncertain**.  
- “Who created it?” → Founder/author on blogs **PASS**; geo templates weaker authorship.

---

## Risk Assessment

| Risk | Google policy link | Likelihood | Impact | Mitigation (ADD-only) |
|------|-------------------|------------|--------|------------------------|
| Misleading AggregateRating | Spam / structured data guidelines | Medium | High | Align schema to Trustpilot or remove AggregateRating until synced |
| Doorway / scaled geo | Spam Policies — doorway & scaled content | Medium–High if Phase 2/3 rushed | High | Uniqueness gate; pause city expansion |
| Title confusion | Starter Guide titles | Medium | Medium | absolute titles / template fix |
| Crawl waste on near-duplicates | Duplicate content guidance | Medium | Medium | Canonicals already; deepen content |
| Fake engagement | Spam | Low (if Trustpilot real) | Critical | Never invent reviews |

**Explicit non-recommendations (banned):** keyword stuffing, hidden text, doorway farms, fake reviews, AI spam for rankings, manipulative internal links, misleading schema, URL renaming of winners.

---

## SEO Opportunities (ADD / enhance only)

### QW1 — Fix AggregateRating accuracy  
| Field | Value |
|-------|-------|
| Expected SEO impact | High (policy compliance / rich-result eligibility) |
| Complexity | Low |
| Risk | Low if correcting to truth |
| Time | 0.5–1 day |
| Files | `organizationSchema.ts`, `trustpilotReviews.ts`, `academyFacts.ts` |
| Rollback | Revert schema fields |
| Dependencies | Current Trustpilot profile truth |
| Testing | Rich Results Test; compare to live Trustpilot |
| Google vs Non-Google | **Google-official** (accurate structured data) |

### QW2 — Stop title template doubling  
| Field | Value |
|-------|-------|
| Impact | Medium (CTR/clarity) |
| Complexity | Low |
| Risk | Low |
| Time | 0.5 day |
| Files | `layout.tsx` and/or geo/course `metadata.title` → `absolute` |
| Rollback | Revert titles |
| Testing | View source titles on UK/Ireland/course/blog |
| Label | **Google-official** (clear titles) |

### QW3 — Sitemap completeness + honest lastmod  
| Field | Value |
|-------|-------|
| Impact | Low–Medium discovery |
| Complexity | Low |
| Risk | Low |
| Time | 0.5–1 day |
| Files | `sitemap.ts` |
| Note | priority/changefreq largely ignored by Google — don’t optimize those |
| Label | **Google-official** (sitemaps help discovery) |

### QW4 — Deepen uniqueness for template geos (before Phase 2)  
| Field | Value |
|-------|-------|
| Impact | High (anti-spam / helpful content) |
| Complexity | Medium |
| Risk | Low |
| Time | 1–3 weeks continuous |
| Files | `locationContent`, `countryGuides*`, selective `cityGuides` |
| Label | **Google-official** (helpful content / anti-scaled) |

### QW5 — GSC verification + monitoring ops  
| Field | Value |
|-------|-------|
| Impact | Operational (not ranking) |
| Complexity | Low |
| Time | 0.5 day |
| Files | env `NEXT_PUBLIC_GSC_VERIFICATION` |
| Label | **Google-official** tooling |

### Longer-term (Best Practice Non-Google where noted)

- Core Web Vitals field measurement (PageSpeed/CrUX) — Google page experience framing exists; **live scores not audited here**.  
- CSP header — security hygiene (**Non-Google ranking**).  
- Blog FAQ coverage completeness — **Non-Google** completeness; FAQPage still must stay accurate (**Google**).  
- `llms.txt` maintenance — **Non-Google**.

---

## AI Search Opportunities

| Item | Label | Action |
|------|-------|--------|
| Keep factual `llms.txt` preferred owners | Non-Google | Already present; keep synced with hubs |
| FAQPage Q&A clarity | Google (schema) + Non-Google (LLM retrieval) | Maintain visible FAQ = schema |
| Entity consistency (online-only, no branch claims) | Aligns with spam/misleading content spirit | Already in geo copy |
| Do not mass-generate AI geo pages for rankings | **Google-official** spam if manipulative | Gate Phase 2/3 |

---

## Search Console Recommendations

1. Verify property (DNS or meta) if not already.  
2. Submit `/sitemap.xml`.  
3. URL Inspection on: home, `/online-quran-classes`, a thin city (e.g. Espoo), a guided country (Norway), AggregateRating org URL.  
4. Monitor **Manual actions** and **Spam** reports after geo growth.  
5. Rich result reports for FAQ/Course/Org.  
6. Performance: filter by country/city landing pages for cannibalization.  
7. Wait weeks for impact (Starter Guide timing guidance).

---

## Next.js Recommendations (mapped to Google)

| Practice | Google link | NoorPath |
|----------|-------------|----------|
| Prefer prerendered HTML for SEO pages | JS SEO “SSR/prerender still great” | **Keep** `dynamic=error` / SSG |
| Canonical in HTML source | Canonical + JS SEO | **Keep** Metadata API canonicals |
| Crawlable `<a href>` | JS SEO / Starter | **Keep** Link components |
| Meaningful status / notFound | JS SEO status codes | **Keep** `dynamicParams=false` |
| Don’t client-render primary SEO body | JS SEO | **Keep** pages as Server Components |

---

## Implementation Roadmap (no coding in this task)

### Phase A — Compliance fixes (Week 1)  
1. AggregateRating truth alignment or removal  
2. Title template / absolute titles  
3. GSC verification confirmation  
4. Sitemap gap fill + lastmod honesty  

### Phase B — Helpful Content hardening (Weeks 2–6)  
1. Unique extras FAQs/guides for template-heavy countries  
2. City guide depth for top converting cities only  
3. **Freeze** Phase 2/3 city factories until GSC shows healthy geo performance  

### Phase C — Measurement (Ongoing)  
1. GSC performance by template type  
2. Rich Results validity  
3. CrUX/CWV (**measure**; don’t guess)  

### Phase D — Expansion  
1. Only then Phase 2 minority markets per prior gated plan  

---

## Quick Wins

1. Fix AggregateRating to match Trustpilot (or remove).  
2. Eliminate double `| NoorPath | NoorPath Academy` titles.  
3. Confirm GSC verification live.  
4. Add missing commercial URLs to sitemap.  
5. Update locations index copy “nine markets” → accurate count (**content accuracy**, not keyword play).  

---

## Long-term Strategy

Become the **most trustworthy online Quran academy** in Search by:

1. **Trust first** (accurate claims, credentials, safeguarding, reviews).  
2. **Depth over width** (fewer, better geo pages beat 100 thin cities).  
3. **Hub clarity** (global service owners stay canonical for global intents).  
4. **People-first expansion** (Phase 2/3 only with unique local value).  
5. **Never spam** (no doorways, no fake schema, no scaled AI filler).  

This aligns with Google’s Search Essentials + Helpful Content + Spam Policies more than any keyword-volume strategy.

---

## Google Compliance Scores (explained)

| Dimension | Score | Explanation |
|-----------|------:|-------------|
| Technical SEO | **88** | Strong crawl/index fundamentals; minor sitemap/title issues |
| Content | **74** | Hubs strong; geo uneven |
| Helpful Content | **70** | Template geo is the main drag |
| Internal Linking | **90** | Crawlable clusters country↔city↔hubs |
| Metadata | **72** | Title stacking + stale count copy |
| Schema | **62** | FAQ/Service/Course good; AggregateRating accuracy fails |
| Performance | **N/A\*** | *Not lab/field measured in this audit* → treat as unscored |
| Accessibility | **80** | Basics present; full WCAG not audited |
| Security | **85** | HTTPS/HSTS/headers; no CSP |
| Mobile | **88** | Viewport + responsive intent |
| International SEO | **90** | Reciprocal hreflang + x-default |
| AI Search Readiness | **78** | llms.txt + FAQ clarity; Non-Google extras |
| **Overall Google Compliance** | **78** | Eligible & mostly best-practice; policy-sensitive schema + scaled-geo risk prevent 90+ |

\*Performance excluded from average; if forced: provisional **75** pending CrUX.

---

## Appendix A — Sources (Google-official)

- https://developers.google.com/search/docs/fundamentals/seo-starter-guide  
- https://developers.google.com/search/docs/essentials  
- https://developers.google.com/search/docs/essentials/spam-policies  
- https://developers.google.com/search/docs/fundamentals/creating-helpful-content  
- https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls  
- https://developers.google.com/search/docs/crawling-indexing/sitemaps/overview  
- https://developers.google.com/search/docs/crawling-indexing/javascript/javascript-seo-basics  
- https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data  
- https://developers.google.com/search/docs/specialty/international/localized-versions  

## Appendix B — Codebase evidence agents

Primary read-only inventory at audit time: locations 26, cities 37, blogs 111; robots/sitemap/canonicals/hreflang/schema/SSG as summarized above. Phase A/B implementation notes appended below after the audit.

---

---

## Phase A implementation status (2026-07-28)

| Quick win | Status | Notes |
|-----------|--------|-------|
| QW1 AggregateRating | **Done** | `getTrustpilotAggregateFromReviews` uses `TRUSTPILOT.score` / `reviewCount` (4.0 / 4), not featured-snippet average |
| QW2 Title doubling | **Done** | `absolutePageTitle` helper + geo/course + brand-already-in-title pages |
| QW3 Sitemap | **Done** | Added `/online-quran-academy`, `/quran-lesson-online`, `/studying-quran-online`; `SITE_CONTENT_STAMP` for honest lastmod |
| QW4 Geo uniqueness | **Done (Phase B)** | Asia/Africa EXTRA FAQs + country guides; IE/NZ guides; Dublin/Auckland/Toronto/Dubai city guides |
| QW5 GSC verification | **Ops** | Meta tag only emits when `NEXT_PUBLIC_GSC_VERIFICATION` is set; confirm ownership in GSC |
| Stale “nine markets” | **Done** | Locations meta + teacher guide use `PRIORITY_MARKETS.length` |

Phase 2/3 city expansion remains gated on GSC performance.

---

## Phase B implementation status (2026-07-28)

| Workstream | Status | Notes |
|------------|--------|-------|
| EXTRA FAQs — Asia/Africa template hubs | **Done** | India, Pakistan, Malaysia, Bangladesh, Indonesia, Singapore, Turkey, Nigeria, South Africa |
| Country guides — Asia/Africa | **Done** | `countryGuidesAsiaAfrica.ts` (9 hubs) |
| Country guides — Ireland + NZ | **Done** | `countryGuidesIrelandNz.ts` (EXTRA FAQs already existed) |
| City guide depth (selective) | **Done** | Dublin, Auckland, Toronto, Dubai in `cityGuidesDiasporaPrimary.ts` |
| Phase 2/3 city factories | **Frozen** | No new countries/cities added |
| Remaining Phase B (optional later) | Open | Thicken Nordic guides; UK country guide; Sydney/Oslo/Leeds city guides after GSC signal |

**Constraint kept:** online-only claims, no invented campuses/stats, honest tutor-matching language, ADD-only on existing URLs.
