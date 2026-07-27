# International SEO Report — 27 July 2026

## Task 1 — Hreflang diagnostic (BEFORE any fix)

**Verdict: Partial / incomplete — not a from-scratch blank slate, but broken for most markets.**

| Check | Finding |
| --- | --- |
| `hreflang` / `rel=alternate` string literals in `src/` | **None** |
| `alternates.languages` in App Router metadata | **Yes, but limited** |
| `src/app/layout.tsx` | No hreflang |
| `src/lib/geoSeo.ts` → `getCountryHubHreflang()` | Built a languages map from **`PRIORITY_MARKETS` only** (~12 markets), plus `x-default` → `/online-quran-classes` |
| `src/app/locations/[slug]/page.tsx` | Emitted `alternates.languages` **only when** `getPriorityMarket(slug)` was truthy — non-priority hubs had **canonical only** |
| `src/app/locations/online-quran-classes-uk/page.tsx` | Used priority-only cluster |
| `src/app/online-quran-classes/page.tsx` | Same priority-only map |

**Gaps:** Many `locations.ts` hubs (NZ, Singapore, Ireland, Malaysia, Indonesia, Nigeria, South Africa, Pakistan, Bangladesh, India, Turkey, etc.) were outside the cluster. Some priority tags used `fr-FR` / `nl-NL` / `sv-SE` despite English regional content.

---

## Summary table

| Task | Status | Files changed | Summary |
| --- | --- | --- | --- |
| **1** Audit hreflang | Done | `INTERNATIONAL-SEO-REPORT.md` | Documented partial priority-only implementation |
| **2** Full reciprocal hreflang | Done | `src/lib/geoSeo.ts`, `src/app/locations/[slug]/page.tsx`, `scripts/verify-hreflang.mjs` | All 23 country hubs share one reciprocal `en-{region}` cluster + `x-default`; verified programmatically |
| **3** UK `.html` duplicate | Done (code OK) | None | `99-names…html` → clean URL is already **301** in `proxy.ts`; GSC re-index still manual |
| **4** Content→location links | Done | `blogContentHighTraffic.ts` | USA / UAE / UK bridges from top geo-performing posts |
| **5** Expat content cluster | Done | `blogContentParentLongTail.ts`, `blog.ts`, `blogFaqs.ts` | 2 new 1,200+ word posts with FAQ schema + Gulf location links |

`npx tsc --noEmit` passed after Tasks 2, 3 (no code), 4, and 5.

---

## Task 2 — Hreflang cluster (after)

Every `/locations/{slug}` page (via `[slug]/page.tsx`) and the UK dedicated page / main classes hub (via shared `getCountryHubHreflang()`) emit the **same** reciprocal set:

| Hreflang | Absolute URL |
| --- | --- |
| `en-US` | `https://www.noorpath.online/locations/online-quran-classes-usa` |
| `en-GB` | `https://www.noorpath.online/locations/online-quran-classes-uk` |
| `en-CA` | `https://www.noorpath.online/locations/online-quran-classes-canada` |
| `en-AU` | `https://www.noorpath.online/locations/online-quran-classes-australia` |
| `en-AE` | `https://www.noorpath.online/locations/online-quran-classes-uae` |
| `en-SA` | `https://www.noorpath.online/locations/online-quran-classes-saudi-arabia` |
| `en-DE` | `https://www.noorpath.online/locations/online-quran-classes-germany` |
| `en-MY` | `https://www.noorpath.online/locations/online-quran-classes-malaysia` |
| `en-PK` | `https://www.noorpath.online/locations/online-quran-classes-pakistan` |
| `en-BD` | `https://www.noorpath.online/locations/online-quran-classes-bangladesh` |
| `en-ZA` | `https://www.noorpath.online/locations/online-quran-classes-south-africa` |
| `en-ID` | `https://www.noorpath.online/locations/online-quran-classes-indonesia` |
| `en-IN` | `https://www.noorpath.online/locations/online-quran-classes-india` |
| `en-NG` | `https://www.noorpath.online/locations/online-quran-classes-nigeria` |
| `en-FR` | `https://www.noorpath.online/locations/online-quran-classes-france` |
| `en-NL` | `https://www.noorpath.online/locations/online-quran-classes-netherlands` |
| `en-SE` | `https://www.noorpath.online/locations/online-quran-classes-sweden` |
| `en-QA` | `https://www.noorpath.online/locations/online-quran-classes-qatar` |
| `en-KW` | `https://www.noorpath.online/locations/online-quran-classes-kuwait` |
| `en-SG` | `https://www.noorpath.online/locations/online-quran-classes-singapore` |
| `en-IE` | `https://www.noorpath.online/locations/online-quran-classes-ireland` |
| `en-NZ` | `https://www.noorpath.online/locations/online-quran-classes-new-zealand` |
| `en-TR` | `https://www.noorpath.online/locations/online-quran-classes-turkey` |
| `x-default` | `https://www.noorpath.online/online-quran-classes` |

**Reciprocity:** Confirmed by `node scripts/verify-hreflang.mjs` (HREFLANG VERIFY OK) and `verifyLocationHreflangCluster()` in `geoSeo.ts`. Every page includes **self + all 22 peers + x-default**. Self-reference cannot be missing because the cluster is identical and complete for every hub.

---

## Task 3 — UK `.html` duplicate (`99-names`)

| Check | Result |
| --- | --- |
| `src/proxy.ts` exact map | `/blog/99-names-of-allah-asmaul-husna.html` → `/blog/99-names-of-allah-asmaul-husna` |
| Status code in code | `NextResponse.redirect(..., 301)` |
| Geo behaviour | Redirect is geo-agnostic (UK Googlebot and users get the same 301) |

**Code is correct.** Remaining blocker is Google’s re-crawl/re-index timing — **not** a missing redirect.

### High-priority manual step

In GSC → URL Inspection, request indexing for:

`https://www.noorpath.online/blog/99-names-of-allah-asmaul-husna.html`

(and confirm the clean canonical is the indexed owner). This URL was the largest UK-tagged page by impressions; clearing the duplicate is critical for the UK market.

---

## Task 4 — Content-to-location bridges

| Source post | New link | Anchor intent |
| --- | --- | --- |
| `rabbana-atina-fid-dunya` | `/locations/online-quran-classes-usa` | USA program / structured classes |
| `safar-ki-dua-travel-dua-arabic-english` | `/locations/online-quran-classes-uae` | UAE GST matching for travel-heavy families |
| `attahiyat-full-arabic-english-tashahhud` | `/locations/online-quran-classes-uk` | Single best-supported market (UK) among UK/SA/UAE strengths |

Max 1 new location link per source post.

---

## Task 5 — New URLs for GSC

1. https://www.noorpath.online/blog/dua-for-muslims-living-abroad  
2. https://www.noorpath.online/blog/quran-classes-for-expat-families  

Both ≥1,200 words, FAQPage JSON-LD, links to UAE + Qatar location hubs. Scheduling/trust claims limited to verified `academyFacts` (timezone matching, trial, credentials per tutor, availability after request).

---

## Accuracy flags

1. **Travel / combining prayers** — Expat dua post directs readers to a qualified teacher for travel-prayer fiqh; no invented rulings or hadith numbers beyond what existing travel-dua content already referenced site-wide.
2. **“Dua of the traveller”** — Existing safar post cites Tirmidhi; new posts link to that guide rather than inventing new hadith citations.
3. **No fabricated expat SLA** — Explicitly states evening slots are not guaranteed; matching confirms availability after request.
4. **Hreflang language tags** — Switched France/Netherlands/Sweden hub alternates from `fr-FR`/`nl-NL`/`sv-SE` to `en-FR`/`en-NL`/`en-SE` for English-regional targeting (content remains English). Open Graph locale fields on priority markets were left as previously defined in `PRIORITY_MARKETS`.
