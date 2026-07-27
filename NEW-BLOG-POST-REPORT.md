# New Blog Post Report — Surah Al-Fatiha for Kids

## Final metadata

| Field | Value |
| --- | --- |
| **Slug** | `how-to-teach-surah-al-fatiha-to-kids` |
| **Title** | Teach Surah Al-Fatiha to Kids — Step-by-Step Guide (50 chars) |
| **Meta description** | Teach Surah Al-Fatiha to kids with Arabic, transliteration, and meaning — a step-by-step parent guide for clear pronunciation and Salah-ready memorisation. (155 chars) |
| **Word count** | ~2,051 (body HTML text, tags stripped) |
| **Category** | Kids & Parenting |
| **Date** | 2026-07-27 |
| **Read time** | 12 min |

## Files touched

- `src/data/blog.ts` — post metadata
- `src/data/blogContentParentLongTail.ts` — full article HTML (merged via existing `blogContent` spread)
- `src/data/blogFaqs.ts` — FAQPage JSON-LD (5 core FAQs) + Fix 11E commercial bridge FAQ

No new page/template was created. Route remains `src/app/blog/[slug]/page.tsx`.

## Automatic plumbing (confirmed — no manual schema/CTA/sitemap edits)

| Feature | Status |
| --- | --- |
| **Canonical tag** | Automatic via `generateMetadata` → `https://www.noorpath.online/blog/{slug}` |
| **Article / BlogPosting JSON-LD** | Automatic on the dynamic blog template (`@type` Article by default) |
| **FAQPage JSON-LD** | Present when `blogFaqs[slug]` exists — yes for this slug |
| **InlineTrialCTA** | Automatic mid-article (`splitArticleHtml` after 3rd block) + end-article — no per-post config needed |
| **Sitemap** | Automatic — `src/app/sitemap.ts` maps all `blogPosts` entries |

## Internal links

**From this post (4 total):**

1. `/blog/surah-al-fatiha-arabic-english` — companion Arabic/English guide
2. `/blog/hard-arabic-letters-for-kids-makharij` — pronunciation / makharij context
3. `/free-quran-classes-online` — trial CTA in closing
4. `/online-quran-classes-for-kids` — commercial FAQ (strongest kids Tajweed-correction messaging)

**To this post from elsewhere:** none added (kept scope to one new post; avoid link stuffing).

## Accuracy / editorial flags

1. **Salah incomplete without Al-Fatiha** — phrased generally as “authentic reports describe the prayer as incomplete without it” (no Bukhari/Muslim number cited in this new post). The site’s older Al-Fatiha article cites Bukhari 756; this post intentionally avoided a hard citation to reduce verification risk.
2. **Umm al-Kitab** — explained as the traditional description / theme-summary role; no specific hadith number or single scholar attribution.
3. **Verse 4 reading** — Arabic uses **مَٰلِكِ** (*Māliki* / Master). An alternate canonical reading **مَلِكِ** (*Maliki* / King) also exists across qirāʾāt; parents using a different mushaf/recitation may see the alternate form.
4. **Age and memorisation timelines** (e.g. ages 3–6 start windows; 2–8 weeks) — practical parental estimates, not fiqh rulings or guaranteed outcomes.
5. **No inbound links from other posts** — optional follow-up: add one contextual link from `surah-al-fatiha-arabic-english` if desired.

## Typecheck

`npx tsc --noEmit` — **passed** (exit 0).

## Indexing URL

**https://www.noorpath.online/blog/how-to-teach-surah-al-fatiha-to-kids**

Submit this URL in Google Search Console after deploy.
