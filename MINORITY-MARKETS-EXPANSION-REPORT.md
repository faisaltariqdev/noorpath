# Minority Markets Expansion — Ship Report (Phase 1)

**Shipped:** 28 July 2026  
**Mode:** ADD-only (existing `/locations/{slug}` + `/online-quran-classes/{city}` + blogs)  
**Untouched:** Interactive Qaida product UI/games/engine, Parent/Tutor/Admin portals, Lesson Engine, Ebook, global hub metadata rewrites

---

## Pre-change inventory (A1-style)

| Asset | Before | After Phase 1 |
|-------|-------:|--------------:|
| Country hubs | 23 | **26** |
| City pages | 25 | **37** |
| Priority markets | 14 | **17** (added NO, FI, DK) |
| Nordic country guides | 0 | **3** |

**Phase 1 EXIST before code:** Ireland, New Zealand  
**Phase 1 ADDED countries:** Norway, Finland, Denmark  
**Phase 1 ADDED cities:** Dublin, Cork, Galway, Auckland, Wellington, Christchurch, Oslo, Bergen, Helsinki, Espoo, Copenhagen, Aarhus

---

## Ownership handoff (IE / NZ)

City head terms moved off country keyword arrays onto city entries (metadata titles/H1 for Ireland & NZ unchanged):

- Ireland country keeps country-level terms; Dublin/Cork/Galway owned by city pages
- NZ country keeps country-level terms; Auckland/Wellington/Christchurch owned by city pages

---

## Rejected competing URLs (per plan)

Not created (soft-link to existing hubs instead):

- `/interactive-noorani-qaida-europe`
- `/digital-noorani-qaida-ireland`
- `/female-quran-teacher-oslo` (Oslo city FAQ + female hub)
- `/weekend-quran-classes-denmark` (Denmark FAQ + weekend Nordic blog)

---

## New / updated URLs for GSC

### Countries (new)

- https://www.noorpath.online/locations/online-quran-classes-norway
- https://www.noorpath.online/locations/online-quran-classes-finland
- https://www.noorpath.online/locations/online-quran-classes-denmark

### Cities (new)

- https://www.noorpath.online/online-quran-classes/dublin
- https://www.noorpath.online/online-quran-classes/cork
- https://www.noorpath.online/online-quran-classes/galway
- https://www.noorpath.online/online-quran-classes/auckland
- https://www.noorpath.online/online-quran-classes/wellington
- https://www.noorpath.online/online-quran-classes/christchurch
- https://www.noorpath.online/online-quran-classes/oslo
- https://www.noorpath.online/online-quran-classes/bergen
- https://www.noorpath.online/online-quran-classes/helsinki
- https://www.noorpath.online/online-quran-classes/espoo
- https://www.noorpath.online/online-quran-classes/copenhagen
- https://www.noorpath.online/online-quran-classes/aarhus

### Blogs (new)

- https://www.noorpath.online/blog/quran-lessons-for-busy-parents
- https://www.noorpath.online/blog/online-quran-classes-for-homeschool-families
- https://www.noorpath.online/blog/weekend-quran-classes-for-nordic-families

### AI / org (additive)

- [`public/llms.txt`](public/llms.txt) — Phase 1 country hubs + city examples; last reviewed 28 July 2026
- [`organizationSchema.ts`](src/lib/organizationSchema.ts) — areaServed ADD: Ireland, NZ, Norway, Finland, Denmark, France, Netherlands, Sweden

---

## Files created

- `src/data/countryGuidesNordic.ts`
- `src/data/blogContentMinorityMarkets.ts`
- `MINORITY-MARKETS-EXPANSION-REPORT.md` (this file)

## Files extended (ADD only)

- `src/data/locations.ts`, `src/data/locationContent.ts`, `src/data/cities.ts`
- `src/lib/geoSeo.ts` (hreflang + PRIORITY_MARKETS)
- `src/data/countryGuides.ts`, `src/data/blog.ts`, `src/data/blogContent.ts`, `src/data/blogFaqs.ts`
- `public/llms.txt`, `src/lib/organizationSchema.ts`

## Verification

- `npx tsc --noEmit` — passed
- Sitemap: auto-includes new locations/cities/blogs via existing array maps (no sitemap.ts rewrite required)

---

## Phase 2 / Phase 3 — GATED (do not code yet)

**Gate:** Evaluate Phase 1 in Google Search Console for **4–8 weeks** before more countries/cities.

### Phase 2 (later)

- ADD countries: Belgium, Switzerland, Austria  
- ADD cities: Stockholm, Malmö, Amsterdam, Utrecht, Eindhoven, Brussels, Antwerp, Zurich, Geneva, Vienna  
- Strengthen existing: Sweden, Netherlands city layer  

### Phase 3 (later)

- ADD countries: Spain, Portugal, Italy  
- ADD cities: Berlin, Munich, Hamburg, Paris, Lyon, Madrid, Barcelona, Lisbon, Porto, Milan, Rome  
- Strengthen: Germany, France city layer  

### Rollback (if needed)

Remove new slugs from locations/cities/PRIORITY/hreflang/EXTRA FAQs/guides/blogs; revert llms.txt + areaServed ADD lines; restore IE/NZ city keywords to country arrays; redeploy.

---

## Honesty flags

- Online-only academy — no physical branch claims  
- Tutor availability confirmed after request  
- No invented census / mosque statistics  
- No fake AggregateRating beyond existing Trustpilot-backed org schema  
