# NoorPath — Implementation Report (Fixes 1–11)

**Project:** www.noorpath.online  
**Stack:** Next.js 16 App Router · React 19 · TypeScript · Tailwind 4  
**Date:** 24 July 2026  
**Basis:** `SEO-AUDIT-REPORT.md` + competitor keyword research  
**QA:** `npx tsc --noEmit` ✅ · `npm run lint` ✅ · local `next build` needs Node ≥20.9  

**Related file:** short summary also in `FIXES-IMPLEMENTED.md`

---

## Executive summary

| Metric | Result |
|--------|--------|
| Fixes completed | **11 / 11** (all Done) |
| New commercial landing pages | **4** |
| New blog posts | **3** (+ 2 existing strengthened) |
| Legacy HTML files archived | **19** |
| Harmful root `robots.txt` | **Deleted** |
| Fabricated money-back / Al-Azhar-all-tutors claims | **None** (flagged for owner confirmation) |

---

## Master status table

| Fix | Status | Area | Summary |
|-----|--------|------|---------|
| 1 | Done | Conversion | Trial form → 3 required fields + optional “Tell us more” |
| 2 | Done | SEO content | Bismillah ~1,500 words + FAQ; CTR titles for 4 phrase posts |
| 3 | Done | Lead-gen | Inline trial CTA on blog + course pages |
| 4 | Done | Analytics | WhatsApp click → GA4 + Meta + CAPI (non-blocking) |
| 5 | Done | SEO / lead-gen | Commercial internal links on priority blogs |
| 6 | Done | Rich results | AggregateRating + Review schema from real Trustpilot data |
| 7 | Done | Commercial SEO | `/one-on-one-quran-classes` landing |
| 8 | Done | E-E-A-T | Tutors credentials section + Trustpilot on course/location pages |
| 9 | Done | Technical SEO | `.html` 301s confirmed/expanded; HTML archived; bad robots removed |
| 10 | Done | Technical | Apex → www redirects in `next.config.ts`; HSTS intact |
| 11 | Done | Competitor gaps | Sisters + professionals landings, 3 blogs, location female section, FAQ bridges |

---

## Fix-by-fix detail (before → after)

### Fix 1 — Trial form shortened (Highest priority · Conversion)

| | |
|--|--|
| **Before** | Many required fields (country, learners, course, timezone, tutor preference, etc.) |
| **After** | Required: **Name**, **WhatsApp or email** (one contact field), **Preferred class time** (Morning/Afternoon/Evening/Flexible), consent. Rest in optional collapsible “Tell us more” |
| **Tracking** | `track({ eventName: "Lead" })` preserved via shared hook |

**Files:**
- `src/hooks/useTrialFormSubmit.ts` *(new)*
- `src/components/CTAForm.tsx`

---

### Fix 2 — Thin blog expansion + CTR metas (Highest priority · SEO)

| | |
|--|--|
| **Before** | `bismillah-meaning-in-english` ~391 words; weak titles on high-impression phrase posts |
| **After** | Bismillah ~**1,500 words** (word-by-word, An-Naml, spellings, routine, FAQ). Title/meta refresh for Bismillah, Inshallah, Alhamdulillah, Astaghfirullah |

**Files:**
- `src/data/blogContent.ts`
- `src/data/blogFaqs.ts`
- `src/data/blog.ts`

---

### Fix 3 — Inline trial CTA (High · Lead-gen)

| | |
|--|--|
| **Before** | Blog/course pages mostly linked out to `/online-quran-classes#cta` |
| **After** | Compact form embedded mid-article + end of blog; course detail top + bottom; courses index below grid. Sidebar `#cta` link kept |

**Files:**
- `src/components/InlineTrialCTA.tsx` *(new)*
- `src/lib/splitArticleHtml.ts` *(new)*
- `src/app/blog/[slug]/page.tsx`
- `src/app/courses/[slug]/page.tsx`
- `src/app/courses/page.tsx`
- `src/app/globals.css`

---

### Fix 4 — WhatsApp click tracking (High · Analytics)

| | |
|--|--|
| **Before** | Float / links opened `wa.me` with no conversion event |
| **After** | On click (consent granted): `gtag('event','whatsapp_click')` + `fbq('trackCustom','WhatsAppClick')` + CAPI via `/api/fb-events` — **does not delay** WhatsApp open |

**Files:**
- `src/lib/trackWhatsAppClick.ts` *(new)*
- `src/components/WhatsAppLink.tsx` *(new)*
- `src/components/WhatsAppFloat.tsx`
- Footer, contact, thank-you, locations, city pages, kids page, CTAForm error link, etc.

---

### Fix 5 — Internal links to commercial pages (Medium–High)

| Blog slug | Links added / ensured |
|-----------|------------------------|
| `alhamdulillah-meaning-in-english` | `/free-quran-classes-online`, `/pricing` |
| `astaghfirullah-meaning` | `/free-quran-classes-online` |
| `bismillah-meaning-in-english` | `/free-quran-classes-online`, `/online-quran-classes-for-kids`, `/pricing` |
| `inshallah-meaning-in-english` | `/pricing` (+ kids) |
| `99-names-of-allah-asmaul-husna` | `/free-quran-classes-online` |

**File:** `src/data/blogContent.ts`

---

### Fix 6 — Review / AggregateRating schema (Medium–High)

| | |
|--|--|
| **Before** | Trustpilot cards on homepage; no AggregateRating/Review in Organization JSON-LD |
| **After** | Rating + reviewCount **derived** from `trustpilotReviews.ts`; up to 4 Review objects matching on-page cards |

**Files:**
- `src/data/trustpilotReviews.ts`
- `src/lib/organizationSchema.ts`
- `src/app/page.tsx`

---

### Fix 7 — One-on-one landing (Medium–High · Commercial gap)

| | |
|--|--|
| **Before** | No dedicated page for “one-on-one / 1-to-1 Quran classes” |
| **After** | Full landing with hero, benefits, CTA, FAQ + schema, breadcrumbs |

**New URL:** https://www.noorpath.online/one-on-one-quran-classes  

**Files:**
- `src/app/one-on-one-quran-classes/page.tsx` *(new)*
- `src/app/sitemap.ts`, Navbar, Footer, homepage, `/online-quran-classes`

---

### Fix 8 — Tutors credentials + testimonials (Medium · E-E-A-T)

| | |
|--|--|
| **Before** | Role categories only; Trustpilot mainly on homepage |
| **After** | Maintainable credential standards (`tutors.ts`); Trustpilot snippet on course + location + tutors pages. **No invented Al-Azhar names** |

**Files:**
- `src/data/tutors.ts` *(new)*
- `src/components/TrustpilotSnippet.tsx` *(new)*
- `src/app/our-tutors/page.tsx`
- `src/app/courses/[slug]/page.tsx`
- `src/app/locations/[slug]/page.tsx`

---

### Fix 9 — Legacy `.html` consolidation (Medium · Technical)

| | |
|--|--|
| **Before** | Root `blog/*.html` risked accidental deploy; root `robots.txt` had `Disallow: /*?*` |
| **After** | Explicit 301 map in `proxy.ts` (incl. `/blog/index.html` → `/blog`); HTML moved to `legacy-html-do-not-deploy/`; root `robots.txt` deleted |

**Live robots:** `src/app/robots.ts` only  

**Files:**
- `src/proxy.ts`
- `legacy-html-do-not-deploy/blog/*.html` (19 files)
- `legacy-html-do-not-deploy/README.md`
- Deleted: root `robots.txt`

---

### Fix 10 — Canonical host + security (Medium · Technical)

| | |
|--|--|
| **Before** | Host redirects mainly assumed via Vercel dashboard |
| **After** | Code redirects: `noorpath.online` → `https://www.noorpath.online`; http proto → https. HSTS header unchanged |

**File:** `next.config.ts`  

**Still verify manually:** Vercel → Domains → primary = `www`

---

### Fix 11 — Competitor keyword gaps (A–E)

#### 11A — Trust claims (true only)
- New constant: `VERIFIED_TRUST_CLAIMS` in `src/lib/academyFacts.ts`
- True today: free trial no card · 7-day cancel notice · per-tutor credentials · 1-to-1
- **Not claimed:** money-back, completion certificate, all-tutors Al-Azhar/Ijazah

#### 11B — New / extended landings

| New URL | Intent |
|---------|--------|
| `/quran-classes-for-sisters` | Sisters / ladies + female tutor |
| `/quran-classes-for-working-professionals` | Evening / weekend / busy adults |

Also extended: `/online-quran-classes-for-adults`

#### 11C — Blogs

| Slug | Action |
|------|--------|
| `what-is-ijazah-in-quran-teaching` | New + FAQ JSON-LD |
| `is-online-quran-learning-as-effective-as-in-person` | New + FAQ JSON-LD |
| `difference-between-hifz-and-tajweed-classes` | New + FAQ JSON-LD |
| `how-to-choose-online-quran-teacher` | Strengthened |
| `online-quran-classes-cost-pricing-guide` | Strengthened |

**File:** `src/data/blogContentCompetitorGaps.ts` *(new)*

#### 11D — Locations
- Every country location page: “Female Quran Teacher for {country} Families” section

#### 11E — Phrase-blog FAQ bridges
- Commercial bridge Q&A appended for: Bismillah, Inshallah, Alhamdulillah, Astaghfirullah, 99 Names

---

## New public URLs (checklist)

| URL | Type |
|-----|------|
| `/one-on-one-quran-classes` | Commercial landing |
| `/quran-classes-for-sisters` | Commercial landing |
| `/quran-classes-for-working-professionals` | Commercial landing |
| `/blog/what-is-ijazah-in-quran-teaching` | Blog |
| `/blog/is-online-quran-learning-as-effective-as-in-person` | Blog |
| `/blog/difference-between-hifz-and-tajweed-classes` | Blog |

---

## New / important code files

| Path | Role |
|------|------|
| `src/hooks/useTrialFormSubmit.ts` | Shared trial submit + Lead tracking |
| `src/components/InlineTrialCTA.tsx` | Compact trial form embed |
| `src/components/WhatsAppLink.tsx` | Tracked WhatsApp anchors |
| `src/lib/trackWhatsAppClick.ts` | GA4 + Meta + CAPI helper |
| `src/lib/splitArticleHtml.ts` | Mid-article CTA split |
| `src/data/tutors.ts` | Credential standards |
| `src/components/TrustpilotSnippet.tsx` | Course/location reviews |
| `src/data/blogContentCompetitorGaps.ts` | Competitor-gap blog bodies |
| `src/lib/academyFacts.ts` → `VERIFIED_TRUST_CLAIMS` | Safe trust copy source |

---

## Needs business owner confirmation

**Do not run ads or site-wide claims for these until you confirm:**

| Competitor claim | NoorPath today |
|------------------|----------------|
| Money-back / 7-day refund | ❌ Not offered (only 7-day cancel notice) |
| Completion certificate | ❌ Not in product facts |
| All tutors Al-Azhar certified | ❌ Not a blanket claim |
| All tutors Ijazah certified | ❌ Confirm per tutor only |
| Named Hafiza / Al-Azhar bios | ❌ No verified roster in repo |

---

## Manual steps after deploy

1. Vercel Domains → primary `www.noorpath.online`
2. GSC → request indexing for new landings + blogs; check old `.html` → 301
3. Confirm Trustpilot list still matches live reviews
4. GA4 / Meta → test WhatsApp click + Lead events (with consent)
5. Rich Results Test → Organization AggregateRating
6. Run `npm run build` on **Node 20+** (or rely on Vercel build)

---

## Git working tree (uncommitted at report time)

Changes are on `main` (local), not necessarily pushed. Notable untracked/new: new landing folders, hooks, Fix 11 blogs, `FIXES-IMPLEMENTED.md`, `IMPLEMENTATION-REPORT.md`, archived HTML under `legacy-html-do-not-deploy/`.

---

*End of report — 24 July 2026*
