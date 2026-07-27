# Cluster Action Report — 27 July 2026

Source context: GSC pages + countries cluster analysis (199 pages / 142 countries). Tasks executed in order 1 → 4. `npx tsc --noEmit` passed after each task.

## Summary table

| Task | Status | Files changed | Summary |
| --- | --- | --- | --- |
| **1** Expand Cluster F + 3 new parent-concern posts | Done | `blogContentParentLongTail.ts`, `blogContentHighTraffic.ts`, `blog.ts`, `blogFaqs.ts` | Expanded 6 thin posts to 1,500+ words (speech-delay already ≥1,200 kept); added 3 new posts; FAQs + kids/female/cross-cluster links |
| **2** Diagnose commercial hubs + strengthen weakest | Done | `online-quran-classes-for-adults/page.tsx`, multiple `blogContent*.ts` | Full diagnosis below; strengthened **/online-quran-classes-for-adults** (thinnest unique copy + worst GSC position among the 4); added 6 inbound blog links to adults + 5 to beginners |
| **3** Replicate prayer/recitation Cluster B | Done | `blogContentPrayerRecitation.ts` (new), `blogContent.ts`, `blog.ts`, `blogFaqs.ts` | 3 new ritual-text posts (1,200+ words each) with Arabic/translit/English + FAQ schema |
| **4** Verify `.html` 301s | Done (logic OK) | None required | All 13 listed paths resolve to HTTP **301** via `src/proxy.ts` (exact map or generic `.html` strip). Live curl not possible here (Node 18; Next 16 needs ≥20.9). **Manual GSC re-index still required** |

---

## Task 2 — Diagnostic findings (BEFORE fixes)

Comparison baseline: `/noorani-qaida` (~1,150–1,250 hub words, FAQ + FAQPage schema, ~23 inbound links).

| Page | Approx unique body words | Unique vs templated | On-page FAQ | FAQ JSON-LD | Title / meta (summary) | Inbound links (approx) |
| --- | --- | --- | --- | --- | --- | --- |
| `/online-quran-classes` | ~4,800–5,000 (page + guide) | Mostly unique pillar + shared CTA patterns | Yes (~15–16) | Yes (16) | Live 1-to-1 tutors & free trial | ~96 |
| `/free-quran-classes-online` | ~970–1,000 | Templated commercial landing | Yes (5) | Yes (4) | Free trial, no card | ~41 |
| `/online-quran-classes-for-adults` | ~520–590 | Templated; **thinnest body** | Yes (7) | Yes (7) | Adults any age + trial | ~20 |
| `/online-quran-for-beginners` | ~840–850 | Templated beginner journey | Yes (6) | Yes (5) | Learn from zero | ~**5** (orphaned) |
| `/noorani-qaida` (baseline) | ~1,150–1,250 hub | Own microsite system + child routes | Yes (5) | Yes (5) | Interactive Qaida | ~23 |

**Key insight:** `/online-quran-classes` is **not thin** — poor GSC position (~70) is more likely competition/authority than missing copy. Among the four weak commercial URLs, **`/online-quran-classes-for-adults`** was the weakest on unique content (and worst reported position ~84). **`/online-quran-for-beginners`** was the weakest on internal discovery (~5 inbound).

**Fix applied:** Expanded adults page with unique learning-path + first-month + live-1-to-1 sections; added inbound links from 6 blog posts across clusters to `/online-quran-classes-for-adults`; also added 5 inbound links to `/online-quran-for-beginners` to repair the orphan gap.

---

## Task 1 — Cluster F word counts (after)

| Slug | Words | Notes |
| --- | --- | --- |
| `female-quran-teacher-for-kids` | 1,513 | Was ~426; on-page FAQ added (JSON-LD still excluded by prior Fix 11 safety list) |
| `quran-classes-for-autistic-kids` | 1,549 | Expanded |
| `quran-classes-for-adhd-kids` | 1,508 | Expanded |
| `quran-learning-speech-delay-kids` | 1,224 | Already ≥1,200 — links ensured; not force-padded |
| `child-forgets-arabic-letters` | 1,538 | Expanded |
| `parents-dont-speak-arabic-child-learn-quran` | 1,500 | Expanded |
| `online-summer-quran-camp-for-kids` | 1,537 | Expanded |
| `quran-classes-for-shy-or-anxious-kids` | 1,502 | **New** |
| `bilingual-kids-learning-quran-arabic` | 1,500 | **New** |
| `single-parent-flexible-quran-classes-for-kids` | 1,509 | **New** (scheduling claims limited to `academyFacts`: timezone matching, plan frequencies, trial, credentials-per-tutor) |

All 10 link to `/online-quran-classes-for-kids` and `/female-quran-teacher-online` (no separate `/female-quran-teacher-for-kids` app route — blog post only) plus at least one peer Cluster F post.

---

## New blog URLs for GSC indexing

**Task 1**

1. https://www.noorpath.online/blog/quran-classes-for-shy-or-anxious-kids  
2. https://www.noorpath.online/blog/bilingual-kids-learning-quran-arabic  
3. https://www.noorpath.online/blog/single-parent-flexible-quran-classes-for-kids  

**Task 3**

4. https://www.noorpath.online/blog/dua-e-masura-arabic-english  
5. https://www.noorpath.online/blog/salatul-janazah-funeral-prayer-guide  
6. https://www.noorpath.online/blog/sajdah-tilawat-dua-arabic-english  

Also re-submit expanded Cluster F URLs if desired (same slugs, deeper content).

---

## Religious / factual accuracy flags

1. **Dua-e-Masura** — Presented as a commonly taught post-Tashahhud text (esp. South Asian curricula). Article notes other authentic final-sitting duas exist; no exclusive “only correct dua” claim; no fabricated hadith numbers.
2. **Salat al-Janazah** — Four-takbir outline and “no ruku/sujood” described as common practice; madhhab/local variations deferred to the imam/local scholar. Fard kifayah phrased as “widely described,” not a fatwa.
3. **Sajdah tilawah** — Common `Sajada wajhiya…` dua given; variation note included; obligation vs recommendation and listener rulings explicitly deferred to a teacher (no invented verse count list).
4. **Scheduling / trust** — Single-parent and adults pages stick to verified facts: free trial without card, 1-to-1 matching by subject/age/timezone/gender preference, credentials confirmed per tutor, availability confirmed after request. No money-back / completion guarantees.
5. **Female-teacher FAQ JSON-LD** — Remains in `EXCLUDED_COMMERCIAL_FAQ_SCHEMAS` from prior audit; on-page FAQ HTML was added for UX only.

---

## Task 4 — `.html` redirect verification

Simulated `src/proxy.ts` resolution (exact `LEGACY_PATHS` match first, else generic `.html` strip → 301). `NextResponse.redirect(..., 301)` is used in code.

| Path | Result | Target |
| --- | --- | --- |
| `/blog/99-names-of-allah-asmaul-husna.html` | 301 | `/blog/99-names-of-allah-asmaul-husna` |
| `/blog/alhamdulillah-meaning-in-english.html` | 301 | `/blog/alhamdulillah-meaning-in-english` |
| `/blog/islamic-dream-interpretation.html` | 301 | `/blog/islamic-dream-interpretation` |
| `/blog/astaghfirullah-meaning.html` | 301 | `/blog/astaghfirullah-meaning` |
| `/blog/mashallah-meaning.html` | 301 | `/blog/mashallah-meaning` |
| `/blog/ayatul-kursi-arabic-english-benefits.html` | 301 | `/blog/ayatul-kursi-arabic-english-benefits` |
| `/blog/dua-e-qunoot-arabic-english.html` | 301 | `/blog/dua-e-qunoot-arabic-english` |
| `/blog/signs-of-qiyamah.html` | 301 | `/blog/signs-of-qiyamah` |
| `/blog/best-age-to-start-quran-learning.html` | 301 | `/blog/best-age-to-start-quran-learning` |
| `/blog/how-to-memorize-quran-faster.html` | 301 | `/blog/how-to-memorize-quran-faster` |
| `/blog/noorani-qaida-complete-guide.html` | 301 | `/blog/noorani-qaida-complete-guide` |
| `/blog/tajweed-rules-complete-guide.html` | 301 | `/blog/tajweed-rules-complete-guide` |
| `/courses/quran-classes-for-kids.html` | 301 | `/online-quran-classes-for-kids` (via strip + legacy map) |

**No proxy bug found — no code change required.**

### Outstanding manual step (cannot be done in repo)

In Google Search Console → URL Inspection, request indexing / recrawl for each `.html` URL above (especially `99-names-of-allah-asmaul-husna.html`, which still drew ~172 impressions). Code 301s alone do not force Google to drop duplicates until recrawled.

---

## Typecheck

`npx tsc --noEmit` — passed after Task 1, Task 2, Task 3, and final sweep.
