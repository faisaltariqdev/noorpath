# SEO-AUDIT-REPORT.md

**Site:** https://www.noorpath.online  
**Codebase:** Next.js **16.2.9** (App Router) + React **19** + TypeScript + Tailwind 4  
**Audit date:** 2026-07-24  
**Scope:** Full `src/`, `public/`, `next.config.ts`, `src/proxy.ts`, `vercel.json`, legacy `blog/*.html`, `robots.txt`  
**Method:** Static codebase review against your GSC / competitor questions (not a live crawl of production HTML)

---

## Summary scoreboard

| # | Section | ✅ | ⚠️ | ❌ |
|---|---------|----|----|----|
| 1 | Duplicate URL / technical cleanup | 2 | 2 | 1 |
| 2 | Sitemap & indexing | 2 | 2 | 0 |
| 3 | Structured data / schema | 4 | 2 | 2 |
| 4 | On-page SEO (zero-click blogs) | 1 | 4 | 1 |
| 5 | Commercial / high-intent landings | 8 | 1 | 2 |
| 6 | Free trial CTA consistency | 1 | 1 | 1 |
| 7 | Lead capture | 1 | 2 | 3 |
| 8 | Teacher choice & trust | 2 | 2 | 1 |
| 9 | Analytics & retargeting | 3 | 1 | 1 |
| 10 | Mobile vs desktop / images | 2 | 2 | 0 |
| 11 | Internal linking | 1 | 2 | 1 |
| 12 | Google Search Essentials compliance | 8 | 4 | 1 |
| | **TOTAL (approx.)** | **35** | **25** | **14** |

---

## 1. Duplicate URL / Technical Cleanup Check

### 1.1 `.html` vs clean blog URLs

| Status | Finding |
|--------|---------|
| ⚠️ Partially implemented | GSC still shows indexed `.html` blog URLs (legacy), but the **live Next app does not generate** dual `.html` routes. Clean App Router routes are `/blog/[slug]`. |

**Legacy static files still in the repo (not under `public/`, so Next does not serve them as static assets):**

| File | Clean App route |
|------|-----------------|
| `blog/99-names-of-allah-asmaul-husna.html` | `/blog/99-names-of-allah-asmaul-husna` |
| `blog/alhamdulillah-meaning-in-english.html` | `/blog/alhamdulillah-meaning-in-english` |
| `blog/astaghfirullah-meaning.html` | `/blog/astaghfirullah-meaning` |
| `blog/ayatul-kursi-arabic-english-benefits.html` | `/blog/ayatul-kursi-arabic-english-benefits` |
| `blog/mashallah-meaning.html` | `/blog/mashallah-meaning` |
| `blog/noorani-qaida-complete-guide.html` | `/blog/noorani-qaida-complete-guide` |
| `blog/surah-yaseen-arabic-english.html` | `/blog/surah-yaseen-arabic-english` |
| `blog/tajweed-rules-complete-guide.html` | `/blog/tajweed-rules-complete-guide` |
| `blog/best-age-to-start-quran-learning.html` | `/blog/best-age-to-start-quran-learning` |
| `blog/how-to-memorize-quran-faster.html` | `/blog/how-to-memorize-quran-faster` |
| `blog/dua-e-qunoot-arabic-english.html` | `/blog/dua-e-qunoot-arabic-english` |
| `blog/benefits-of-online-quran-classes.html` | `/blog/benefits-of-online-quran-classes` |
| `blog/duas-for-kids-to-memorize.html` | `/blog/duas-for-kids-to-memorize` |
| `blog/how-to-teach-quran-to-kids.html` | `/blog/how-to-teach-quran-to-kids` |
| `blog/how-to-pray-salah-step-by-step.html` | `/blog/how-to-pray-salah-step-by-step` |
| `blog/islamic-baby-names-2026.html` | `/blog/islamic-baby-names-2026` |
| `blog/islamic-dream-interpretation.html` | `/blog/islamic-dream-interpretation` |
| `blog/signs-of-qiyamah.html` | `/blog/signs-of-qiyamah` |
| `blog/index.html` | `/blog` |

**Your GSC list — confirmation:**

| GSC URL pattern | In repo as `.html`? | Clean route exists? |
|-----------------|---------------------|---------------------|
| `99-names-of-allah-asmaul-husna` | ✅ yes | ✅ |
| `alhamdulillah-meaning-in-english` | ✅ yes | ✅ |
| `astaghfirullah-meaning` | ✅ yes | ✅ |
| `ayatul-kursi-arabic-english-benefits` | ✅ yes | ✅ |
| `mashallah-meaning` | ✅ yes | ✅ |
| `noorani-qaida-complete-guide` | ✅ yes | ✅ |
| `surah-yaseen-arabic-english` | ✅ yes | ✅ |
| `tajweed-rules-complete-guide` | ✅ yes | ✅ |
| `best-age-to-start-quran-learning` | ✅ yes | ✅ |
| `how-to-memorize-quran-faster` | ✅ yes | ✅ |
| `dua-e-qunoot-arabic-english` | ✅ yes | ✅ |
| `quran-classes-for-kids` | ❌ no file under `blog/` | ✅ redirected → `/online-quran-classes-for-kids` via `src/proxy.ts` |

**Note:** Delete or archive root `blog/*.html` so they cannot be redeployed by mistake; keep relying on proxy 301s for old indexed URLs.

### 1.2 Canonical tags

| Status | Evidence |
|--------|----------|
| ✅ Implemented | Blog posts set `alternates.canonical` to `https://www.noorpath.online/blog/${slug}` in `src/app/blog/[slug]/page.tsx`. Sitewide `metadataBase` is `https://www.noorpath.online` in `src/app/layout.tsx`. Commercial pages set explicit canonicals (kids, adults, pricing, locations, courses, etc.). |

**Fix note:** None for clean routes; ensure GSC “Duplicate without user-selected canonical” clears after `.html` → clean 301s are fully crawled.

### 1.3 301 redirects `.html` → clean

| Status | Evidence |
|--------|----------|
| ✅ Implemented | Next.js 16 **Proxy** (middleware rename): `src/proxy.ts` strips any `*.html` path and 301-redirects to the extension-less path (or a mapped legacy owner). Also maps `/quran-classes-for-kids`, `/courses/quran-classes-for-kids`, `/learn-quran-online.html`, `/about.html`, `/index.html`, etc. |

**Where to strengthen (optional):** Add explicit entries in `next.config.ts` `redirects()` as a belt-and-suspenders layer for the 18 known blog `.html` paths — not required if proxy is confirmed live on Vercel.

### 1.4 `http://` / non-www

| Status | Evidence |
|--------|----------|
| ⚠️ Partially implemented | Code enforces HTTPS via HSTS header in `next.config.ts` (`Strict-Transport-Security`). Canonicals and `metadataBase` use `https://www.noorpath.online`. **No host-level redirect** (`http`→`https`, apex→`www`) appears in `next.config.ts` or `vercel.json` — this usually depends on **Vercel domain settings**. |

**Fix note:** In Vercel → Domains, set `www.noorpath.online` as primary and redirect apex + force HTTPS. Optionally add `redirects` in `next.config.ts` if dual hosts still appear in GSC.

---

## 2. Sitemap & Indexing

### 2.1 Sitemap generation

| Status | Evidence |
|--------|----------|
| ✅ Implemented | Dynamic sitemap: `src/app/sitemap.ts` → `https://www.noorpath.online/sitemap.xml` |
| ✅ Implemented | Sitemap lists **clean** blog URLs only (`/blog/${slug}`) — **no `.html` URLs**. |
| ⚠️ Partially implemented | Includes: static commercial pages, keyword landings, non-redirected courses, **23** locations, **25** cities, **all ~93** `blogPosts`, and all `QAIDA_INDEXABLE_PATHS`. Hardcoded `NOW = 2026-07-14` makes some static `lastModified` dates stale. |

**Approx. URL volume:** ~230+ URLs in one sitemap (fine under Google’s 50k limit).

### 2.2 GSC pages missing from sitemap

| Status | Note |
|--------|------|
| ⚠️ Partially implemented | Any still-indexed **`.html`** URLs are correctly **absent** from the sitemap (good). After 301s, they should drop. If GSC shows other soft-404/legacy paths (e.g. `/free-resources`, old course slugs), they are handled by `src/proxy.ts` redirects and should not be re-added to the sitemap. |

### 2.3 robots.txt

| Status | Evidence |
|--------|----------|
| ✅ Implemented (live) | App Router robots: `src/app/robots.ts` — allows `/`, disallows only `/api/`, declares sitemap. Does **not** block CSS/JS. |
| ⚠️ Partially implemented | Root file `robots.txt` (not in `public/`) contains `Disallow: /*?*` which would be harmful if ever served; confirm production serves **`src/app/robots.ts` output**, not the root file. |

---

## 3. Structured Data / Schema Markup

| Schema | Status | Where |
|--------|--------|-------|
| Organization / EducationalOrganization | ✅ | `src/lib/organizationSchema.ts` → `src/components/OrganizationJsonLd.tsx` via `PublicShell` |
| FAQPage | ✅ | Many marketing pages + `src/data/blogFaqs.ts` injected in `src/app/blog/[slug]/page.tsx` (JSON-LD). Some commercial FAQ schemas are intentionally excluded in `blogFaqs.ts` (`EXCLUDED_COMMERCIAL_FAQ_SCHEMAS`). |
| Article | ✅ | Blog posts use `@type: Article` (and some ScholarlyArticle for backlink assets) |
| BlogPosting | ❌ Missing | Not used — blogs emit `Article` instead |
| Course | ✅ | Org catalog, `courses/[slug]`, kids/beginners, Qaida sections |
| BreadcrumbList | ✅ | Most marketing pages + blog; homepage has none (acceptable) |
| Review / AggregateRating | ❌ Missing | Trustpilot UI on homepage (`src/data/trustpilotReviews.ts`) but **no** `Review` / `AggregateRating` JSON-LD anywhere in `src/` — explains low “Review snippet” impressions in GSC |

**Fix note:** Add AggregateRating/Review schema only with policy-compliant, accurate ratings (prefer linking Trustpilot; do not invent stars).

---

## 4. On-Page SEO — High-Impression, Zero-Click Pages

Template: `src/app/blog/[slug]/page.tsx` — single **H1** = `post.title`; FAQPage JSON-LD when present in `blogFaqs`; related posts sidebar (same category, max 3). On-page HTML FAQ accordion varies by article body.

| Slug | Title (chars) | Meta description (chars) | Est. body words | On-page FAQ in HTML | Status |
|------|---------------|--------------------------|-----------------|---------------------|--------|
| `/blog/inshallah-meaning-in-english` | *Inshallah Meaning in English — In Sha Allah Explained* (53) | 149 | ~1,150 | ⚠️ JSON-LD yes / HTML FAQ weak | ⚠️ |
| `/blog/99-names-of-allah-asmaul-husna` | *99 Names of Allah with Meaning — Arabic & English List* (54) | 133 | ~2,822 | ✅ HTML FAQ + JSON-LD | ✅ |
| `/blog/alhamdulillah-meaning-in-english` | *Alhamdulillah Meaning in English — Arabic & When to Say* (55) | 136 | ~1,554 | ✅ | ⚠️ Expand CTR (intro + unique angle) |
| `/blog/astaghfirullah-meaning` | *Astaghfirullah Meaning — Arabic, English & Benefits* (51) | 136 | ~1,568 | ✅ | ⚠️ |
| `/blog/bismillah-meaning-in-english` | *Bismillah Meaning in English — Full Form & Arabic* (49) | 138 | **~391** | ❌ thin HTML FAQ | ❌ |

**Data source:** `src/data/blog.ts` (title/description) + `src/data/blogContent.ts` (body).

**Fix note:** Priority expand **Bismillah** to 1,500+ words with PAA/FAQ accordion; refresh titles/metas for zero-click URLs toward clearer intent + CTA promise; ensure commercial links in-body (see §11).

---

## 5. Commercial / High-Intent Keyword Landing Pages

| Keyword / need | Status | Path | Title / meta / CTA snapshot |
|----------------|--------|------|-----------------------------|
| Online Quran classes for kids | ✅ | `/online-quran-classes-for-kids` → `src/app/online-quran-classes-for-kids/page.tsx` | Dedicated page + CTAForm |
| Online Quran classes for adults | ✅ | `/online-quran-classes-for-adults` | Dedicated page + form |
| Online Quran classes for beginners | ✅ | `/online-quran-for-beginners` | Dedicated page + form |
| Female Quran teacher | ✅ | `/female-quran-teacher-online` | Dedicated page + form |
| One-on-one / 1-to-1 Quran classes | ❌ Missing | No dedicated `/one-on-one-quran-classes` (or similar) route — only copy mentions across pages | Create dedicated landing |
| Quran memorization / Hifz online | ✅ | `/hifz-quran-online` (+ redirected `/courses/hifz-program-online`) | Keyword landing |
| Tajweed classes online | ✅ | `/learn-tajweed-online` | Keyword landing |
| Free trial landing | ✅ | `/free-quran-classes-online` | Dedicated trial page + CTAForm |
| Pricing / plans | ✅ | `/pricing` → `src/app/pricing/page.tsx` + `src/lib/academyFacts.ts` | Clear **$29 / $49 / $79** plans + CTAForm |
| Location: USA | ✅ | `/locations/online-quran-classes-usa` | |
| Location: UK | ✅ | `/locations/online-quran-classes-uk` (+ dedicated page file) | |
| Location: Canada | ✅ | `/locations/online-quran-classes-canada` | |
| Location: Australia | ✅ | `/locations/online-quran-classes-australia` | |
| Location: New Zealand | ✅ | `/locations/online-quran-classes-new-zealand` | |
| Location: Singapore | ✅ | `/locations/online-quran-classes-singapore` | |
| Location: Saudi Arabia | ✅ | `/locations/online-quran-classes-saudi-arabia` | |
| “Near me” / local pack page | ❌ Missing | No dedicated “quran classes near me” hub | Optional SEO landing that explains online-as-near-me |

---

## 6. Free Trial CTA Consistency

| Status | Finding |
|--------|---------|
| ⚠️ Partially implemented | Strong on homepage / pricing / locations / kids / adults / free-trial / keyword landings via `src/components/CTAForm.tsx`. |

**Uses embedded `CTAForm`:** homepage, pricing, locations, city pages, kids, adults, free-trial, female teacher, online-quran-classes, KeywordLandingPage templates.

**Does NOT embed form (link-only CTAs):**

| Template | Path | Behavior |
|----------|------|----------|
| Blog post | `src/app/blog/[slug]/page.tsx` | Links to `/online-quran-classes#cta` (bottom + sidebar) |
| Blog index | `src/app/blog/page.tsx` | Link CTA |
| Courses hub / course slug | `src/app/courses/page.tsx`, `courses/[slug]/page.tsx` | Link to `#cta` on main classes page |
| Navbar | `src/components/Navbar.tsx` | Points to `/online-quran-classes#cta` |

**Sitewide sticky:** WhatsApp float (`src/components/WhatsAppFloat.tsx`) via `PublicShell` — trial message, not the form.

**Fix note:** Add a reusable compact trial CTA (or slim `CTAForm`) into blog template + course pages for conversion consistency.

---

## 7. Lead Capture Mechanisms

| Mechanism | Status | Path / detail |
|-----------|--------|---------------|
| Trial form | ⚠️ Partially implemented | `src/components/CTAForm.tsx` — **~9 user fields** (name, email, phone, country, learners, family plan, course, timezone, tutor preference) + consent. **Too many fields for CRO** (target 3–4). |
| Contact form | ❌ Missing | `src/app/contact/page.tsx` — email/WhatsApp links only |
| WhatsApp click-to-chat | ✅ Implemented | `WhatsAppFloat.tsx` sitewide + footer + many pages; URL `src/lib/academyFacts.ts` → `wa.me/923124877906` |
| Lead magnet / gated PDF / newsletter | ❌ Missing | No email-gated download or newsletter component |
| Exit-intent popup | ❌ Missing | No matches |
| Sticky CTA bar (non-WhatsApp) | ⚠️ Partially | WhatsApp float only; no sticky “Book trial” bar for desktop |

---

## 8. Male/Female Teacher Choice & Trust Signals

| Item | Status | Path |
|------|--------|------|
| Male/female preference | ✅ | Required select in `CTAForm.tsx`; dedicated `/female-quran-teacher-online` |
| Testimonials UI | ⚠️ | Homepage Trustpilot cards (`src/app/page.tsx` + `src/data/trustpilotReviews.ts`); sparse on course/location pages |
| Review schema | ❌ | No AggregateRating/Review JSON-LD |
| Teacher credentials (Al-Azhar / Ijazah) | ⚠️ | Mentioned in blog copy; **`/our-tutors` lacks named Al-Azhar/Ijazah credential blocks** (`src/app/our-tutors/page.tsx`) |

---

## 9. Analytics & Retargeting Setup

| Tool | Status | Path |
|------|--------|------|
| GA4 | ✅ | `src/components/TrackingConsent.tsx` (`G-CTEG1YPKCT` / env) — consent-gated |
| Google Ads tag | ✅ | Same + thank-you page |
| Meta Pixel + CAPI | ✅ | `FacebookPixel.tsx`, `next-pixels`, `src/app/api/fb-events/route.ts` |
| Form Lead event | ✅ | `CTAForm.tsx` → `track({ eventName: "Lead" })` + thank-you `generate_lead` |
| WhatsApp click conversion | ❌ Missing | `WhatsAppFloat.tsx` has **no** `gtag` / `track` event |

---

## 10. Mobile vs Desktop Experience

| Item | Status | Note |
|------|--------|------|
| Responsive / viewport | ✅ | `src/app/layout.tsx` viewport export; mobile-first CSS variables |
| Free-trial CTA above fold (desktop) | ⚠️ | Homepage hero has “Book Free Trial” → `#cta`; **form itself is lower**. Desktop SERP CTR gap is more likely title/meta/snippet than missing nav CTA (Navbar still has trial link). |
| Intrusive interstitial | ✅ | No full-screen exit-intent; cookie consent banner only |
| `next/image` | ⚠️ | Used on key pages (~10 files); blog HTML strings still use some plain `<img>`; `next.config.ts` enables avif/webp |
| Fonts | ✅ | `next/font` with `display: "swap"` in layout (LCP-friendly) |

**Desktop CTR 0.22% vs mobile 2.2%:** prioritize **SERP title/meta rewrites** on high-impression blogs (§4) over assuming a broken desktop layout.

---

## 11. Internal Linking Audit

### 11.1 Section-4 blogs → commercial pages (in HTML body)

| Blog | `/online-quran-classes` | `/online-quran-classes-for-kids` | `/free-quran-classes-online` | `/pricing` | `/locations` |
|------|-------------------------|---------------------------------|------------------------------|------------|--------------|
| inshallah | ✅ “book a free trial →” | ✅ kids anchor | ❌ | ❌ | ❌ |
| 99-names | ✅ | ✅ | ❌ | ❌ | ❌ |
| alhamdulillah | ✅ | ❌ | ❌ | ❌ | ❌ |
| astaghfirullah | ✅ | ❌ | ❌ | ❌ | ❌ |
| bismillah | ❌ | ✅ kids | ❌ | ❌ | ❌ |

Chrome CTAs on every blog post (outside body): links to `/online-quran-classes#cta` in `blog/[slug]/page.tsx`.

### 11.2 Related posts → commercial

| Status | Note |
|--------|------|
| ⚠️ Partially implemented | Related posts are **same-category blogs** (max 3), not a dedicated “related commercial” module. Some posts have hardcoded “Related canonical resources” map. |

---

## 12. Google Search Essentials Compliance

### Site architecture & URLs

| Check | Status | Evidence |
|-------|--------|----------|
| Clear hierarchy ≤3 clicks | ✅ | `/` → `/blog`, `/locations`, `/courses`, `/noorani-qaida`, commercial landings |
| Clean keyword URLs | ✅ | No session IDs; App Router paths are readable |
| Trailing-slash policy | ✅ | `trailingSlash: false` in `next.config.ts` |
| www + https single host | ⚠️ | Canonicals assume www+https; host redirects not in repo (Vercel) |

### Crawlability & indexing

| Check | Status | Evidence |
|-------|--------|----------|
| robots allows CSS/JS | ✅ | `src/app/robots.ts` |
| Accidental noindex on money pages | ✅ | Only `thank-you` + `not-found` set `index: false` |
| Blog pagination rel next/prev | ⚠️ | Blog index is a single list — no pagination; older posts rely on sitemap (OK if all linked/listed) |
| Sitemap index for 190+ URLs | ⚠️ | Single sitemap OK by size; no sitemap index file |
| Breadcrumbs visual + schema | ✅ | Widespread; homepage omitted |

### Mobile-first & page experience

| Check | Status | Evidence |
|-------|--------|----------|
| Mobile-first / viewport | ✅ | layout viewport |
| Intrusive mobile interstitials | ✅ | None found |
| Lazy/image/font strategy | ⚠️ | Mixed `next/image` vs raw img in blog HTML |
| CLS risk | ⚠️ | Prefer width/height on remaining raw images |

### Content & metadata

| Check | Status | Evidence |
|-------|--------|----------|
| Unique title/meta per page | ✅ | Generated from `blog.ts` / page metadata |
| Single H1 | ✅ | Blog template uses one H1 |
| Image alt | ⚠️ | Varies; blog HTML quality inconsistent |
| Favicon + OG/Twitter | ✅ | `layout.tsx` + per-page OG |

### Security & trust

| Check | Status | Evidence |
|-------|--------|----------|
| HTTPS / HSTS | ✅ | `next.config.ts` headers |
| Privacy / Terms in footer | ✅ | `src/components/Footer.tsx` → `/privacy-policy`, `/terms-of-service` |

---

## Top 10 Priority Fixes

Ranked by expected impact on **rankings + leads**:

| # | Fix | Impact | Exact files to edit |
|---|-----|--------|---------------------|
| 1 | **Confirm & finish `.html` → clean consolidation** — verify live 301s for all GSC `.html` URLs; delete/archive unused `blog/*.html`; request recrawl of clean URLs | High (index bloat / cannibalization) | `src/proxy.ts`; remove or quarantine `blog/*.html`; GSC URL Inspection |
| 2 | **Expand & CTR-rewrite zero-click blogs** — especially Bismillah (~391 words); sharpen titles/metas for Inshallah / Alhamdulillah / Astaghfirullah / 99 Names | High (impressions → clicks) | `src/data/blog.ts`, `src/data/blogContent.ts`, `src/data/blogFaqs.ts` |
| 3 | **Reduce trial form to 3–4 fields** + keep advanced fields optional | High (conversion) | `src/components/CTAForm.tsx` |
| 4 | **Embed trial CTA on blog + course templates** (not only outbound `#cta` links) | High (content → lead) | `src/app/blog/[slug]/page.tsx`, `src/app/courses/[slug]/page.tsx`, `src/app/courses/page.tsx` |
| 5 | **Add WhatsApp click conversion events** (GA4 + Meta) | High (attribution / retargeting) | `src/components/WhatsAppFloat.tsx`, `TrackingConsent.tsx` |
| 6 | **Ship AggregateRating/Review schema** from real Trustpilot data (compliant) | Medium–High (review rich results) | `src/lib/organizationSchema.ts` or homepage `src/app/page.tsx` + `trustpilotReviews.ts` |
| 7 | **Create `/one-on-one-quran-classes` (or `/1-to-1-quran-classes`) landing** | Medium–High (commercial intent) | new `src/app/one-on-one-quran-classes/page.tsx` + sitemap entry |
| 8 | **Internal links from phrase blogs → `/free-quran-classes-online` + `/pricing`** | Medium | `src/data/blogContent.ts` (section-4 posts) |
| 9 | **Strengthen `/our-tutors` credentials** (Al-Azhar/Ijazah where true) + more testimonial placement on commercial pages | Medium (E-E-A-T / trust) | `src/app/our-tutors/page.tsx`, location/course templates |
| 10 | **Verify Vercel primary domain = `www` + HTTPS**; optionally mirror host redirects in `next.config.ts`; remove dangerous root `robots.txt` query blocks if ever published | Medium (canonical host) | Vercel Domains UI; `next.config.ts`; root `robots.txt` |

---

## Appendix — Key file map

| Area | Path |
|------|------|
| Framework config | `package.json`, `next.config.ts` |
| HTML / legacy redirects | `src/proxy.ts` |
| Sitemap | `src/app/sitemap.ts` |
| Robots (live) | `src/app/robots.ts` |
| Root robots (do not serve) | `robots.txt` |
| Blog metadata | `src/data/blog.ts` |
| Blog bodies | `src/data/blogContent*.ts`, `blogContentParentLongTail.ts`, etc. |
| Blog FAQ JSON-LD | `src/data/blogFaqs.ts` |
| Blog page template | `src/app/blog/[slug]/page.tsx` |
| Trial form | `src/components/CTAForm.tsx` |
| WhatsApp | `src/components/WhatsAppFloat.tsx` |
| Org schema | `src/lib/organizationSchema.ts` |
| Tracking | `src/components/TrackingConsent.tsx`, `FacebookPixel.tsx` |
| Locations | `src/data/locations.ts` |
| Pricing facts | `src/lib/academyFacts.ts` |
| Legacy HTML blogs | `blog/*.html` (repo root) |

---

*End of report. Re-run this audit after Top 10 fixes land, then validate in GSC Coverage + URL Inspection for the former `.html` set.*
