# SEO / Lead-gen Fixes Implemented

**Date:** 2026-07-24  
**Source audit:** `SEO-AUDIT-REPORT.md` + competitor keyword gap research (Fix 11)  
**Verification:** `npx tsc --noEmit` after each fix batch; `npm run lint` passed for Fixes 1–10.  
**Build note:** Local `npm run build` needs Node.js ≥20.9.0 (environment had 18.17.0).

## Summary table

| Fix # | Status | Files changed | One-line summary |
|------|--------|---------------|------------------|
| 1 | Done | `CTAForm.tsx`, `useTrialFormSubmit.ts` | Reduced trial form to name + contact + class time; optional “Tell us more”; Lead tracking preserved |
| 2 | Done | `blogContent.ts`, `blogFaqs.ts`, `blog.ts` | Expanded Bismillah to ~1,500 words + FAQ; CTR metas for 4 phrase posts |
| 3 | Done | `InlineTrialCTA.tsx`, `splitArticleHtml.ts`, blog/courses pages, `globals.css` | Embedded compact trial CTA mid/end of blog + course pages |
| 4 | Done | `trackWhatsAppClick.ts`, `WhatsAppLink.tsx`, all `wa.me` call sites | GA4 + Meta WhatsAppClick (+ CAPI) without blocking navigation |
| 5 | Done | `blogContent.ts` | Commercial internal links on priority phrase blogs |
| 6 | Done | `trustpilotReviews.ts`, `organizationSchema.ts`, `page.tsx` | AggregateRating + Review JSON-LD from real reviews |
| 7 | Done | `one-on-one-quran-classes/page.tsx`, sitemap, nav/footer | New 1-to-1 commercial landing |
| 8 | Done | `tutors.ts`, `our-tutors`, `TrustpilotSnippet.tsx`, course/location pages | Credentials process + Trustpilot snippets |
| 9 | Done | `proxy.ts`, `legacy-html-do-not-deploy/`, deleted root `robots.txt` | Explicit `.html` 301s; archived HTML; live robots = `app/robots.ts` |
| 10 | Done | `next.config.ts` | Apex→www (+ http proto) redirects; HSTS unchanged |
| 11 | Done | See Fix 11 section below | Competitor keyword gap: landings, blogs, location female section, FAQ bridges — **no fabricated guarantees** |

## Fix 11 — Competitor keyword gap (A–E)

### 11A — Trust / credential keywords (true claims only)
- Added `VERIFIED_TRUST_CLAIMS` in `src/lib/academyFacts.ts`: free trial no card; 7-day cancellation notice (**not** money-back); credentials confirmed **per tutor**; live 1-to-1.
- Surfaced on `/our-tutors`, sisters + professionals landings.
- Free-trial page keywords now include `quran classes free trial no credit card`.

### 11B — New / extended landings
| Route | Purpose |
|-------|---------|
| `/quran-classes-for-sisters` | Sisters/ladies + female tutor request messaging |
| `/quran-classes-for-working-professionals` | Evening/weekend / busy adults |
| `/online-quran-classes-for-adults` | Extended with professionals + sisters links |

Linked from homepage, Navbar “More”, Footer, sitemap.

### 11C — Competitor-gap blogs
| Slug | Status |
|------|--------|
| `what-is-ijazah-in-quran-teaching` | **New** + FAQ schema |
| `is-online-quran-learning-as-effective-as-in-person` | **New** + FAQ schema |
| `difference-between-hifz-and-tajweed-classes` | **New** + FAQ schema |
| `how-to-choose-online-quran-teacher` | **Strengthened** (links to Ijazah/sisters/free trial; softened overclaims) |
| `online-quran-classes-cost-pricing-guide` | **Strengthened** (commercial links; credential wording tightened) |

Content file: `src/data/blogContentCompetitorGaps.ts`.

### 11D — Location female-teacher section
- Every `locations/[slug]` page now has “Female Quran Teacher for {country} Families” with links to sisters hub + female tutor page + trial (no new city microsites).

### 11E — Zero-click blog FAQ commercial bridges
- `blogFaqs.ts` appends one subtle commercial Q&A (trial / classes) to: Bismillah, Inshallah, Alhamdulillah, Astaghfirullah, 99 Names — via `COMMERCIAL_BRIDGE_BY_SLUG`.

---

## Needs business owner confirmation

**Do not publish these as site-wide claims until you confirm in writing:**

| Claim competitors use | NoorPath status in codebase |
|----------------------|-----------------------------|
| Money-back guarantee / 7-day refund | **Not offered.** Only `{CANCELLATION_NOTICE_DAYS}` notice before next billing; partial-month fees not refundable per pricing/terms. |
| Completion / graduation certificate | **Not documented** in `academyFacts` or product copy — do not advertise. |
| “All tutors Al-Azhar certified” | **Not true as a blanket claim.** Credentials confirmed per proposed tutor when claimed. |
| “All tutors Ijazah certified” | **Not a blanket claim.** Ijazah may apply to some tutors — ask per match. |
| Named Hafiza / Al-Azhar graduate bios | **No verified named roster** in repo — do not invent. |

When any of the above become true, add structured facts to `academyFacts.ts` / `tutors.ts` and then market them.

---

## Partial / blocked decisions (Fixes 1–11)

| Item | Decision |
|------|----------|
| Named Al-Azhar / Ijazah tutor profiles | Blocked on data — process-based credentials UI only |
| Money-back / certificate SEO pages | **Not built** — would be false advertising |
| Trustpilot platform score vs on-site average | Derived from featured review array for schema/UI match |
| Local `next build` | Blocked by Node 18; use Node 20+ or Vercel |

## Manual steps outside this codebase

1. **Vercel → Domains:** Primary = `www.noorpath.online`, apex → www.
2. **GSC:** Recrawl clean blog URLs + new landings/blogs after deploy.
3. **Confirm business policies** in the table above before any ads use money-back / certificate / Al-Azhar-all-tutors language.
4. **Trustpilot:** Keep `trustpilotReviews.ts` in sync with real published reviews.
5. **GA4 / Meta:** Verify `whatsapp_click` / `WhatsAppClick` after analytics consent.
6. Optional: Rich Results Test for Organization AggregateRating + new FAQ pages.

## Key new paths (Fix 11)

| Path | Role |
|------|------|
| `src/lib/academyFacts.ts` → `VERIFIED_TRUST_CLAIMS` | Single source of truth for public trust copy |
| `src/app/quran-classes-for-sisters/page.tsx` | Sisters/ladies landing |
| `src/app/quran-classes-for-working-professionals/page.tsx` | Professionals landing |
| `src/data/blogContentCompetitorGaps.ts` | 3 new gap blogs |
| `src/data/blogFaqs.ts` → commercial bridges | Phrase-blog FAQ bridges |
