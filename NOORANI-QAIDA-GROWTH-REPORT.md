# Noorani Qaida Growth Report

**Date:** 27 July 2026  
**Site:** noorpath.online  
**Scope:** `/noorani-qaida` hub, Arabic letter pages, games expansion, shareability, homepage integration  
**Constraint:** No fabricated claims beyond `src/lib/academyFacts.ts` and existing educational copy

---

## Task 1 — Diagnostic findings (BEFORE any fix)

### 1.1 Games page structure (`/noorani-qaida/guides/games`)

**Verdict: static content page — not playable.**

| Check | Finding |
| --- | --- |
| Route | Data-driven guide via `src/app/noorani-qaida/guides/[guide]/page.tsx` + `guides.ts` slug `games` |
| Interactive React state / quizzes | **None** on the page |
| Playable matching / client games | **None** |
| What users see | Educational sections describing Bubble Pop, Find the Letter, Sound Match, Memory, Train, Puzzle, Quick Quiz |
| Media | Platform **screenshots only** (`QaidaScreenshot` bubble + games) |
| Explicit copy (pre-fix) | Stated the preview “does not link to a public playable demo” |

**Expansion implication:** Splitting long-tail keywords requires **new client-side interactive routes**, not only more static guide copy. The existing guide remains valuable for “how to use games” intent and already ranks well for “noorani qaida games”.

### 1.2 How the hub linked games (`/noorani-qaida`)

| Location | Anchor / treatment | Prominence |
| --- | --- | --- |
| Hero secondary CTA | “See How Practice Works” → `/noorani-qaida/guides/games` | High (hero), but **generic** — not keyword-led |
| Guides grid | Card title “Noorani Qaida Games and Learning Activities” | Mid-page among all guides |
| Homepage aside | “Practice games” → guides/games | Low prominence, buried in aside links |

No dedicated “free playable games” section existed on the hub before this work.

### 1.3 Arabic letter pages inventory (`/noorani-qaida/arabic-letters/*`)

All **28** letters use the **same page template**. Seed field length is similar across strong and weak URLs. **No letter page had a client interactive practice widget** before Task 2. The only structural privilege: **Alif (`id === 1`) alone** rendered a platform-preview screenshot section.

| Slug | Letter | Known GSC position (provided) | Approx. seed English words | Interactive element (pre-fix) | Notes |
| --- | --- | --- | --- | --- | --- |
| alif | Alif | ~12 (strong) | ~29 | None (screenshot only for Alif) | Only page with platform preview |
| ba | Baa | — | ~31 | None | Linked from hub grid |
| ta | Taa (ت) | ~10 (strong) | ~33 | None | Soft Taa |
| tha | Thaa | — | ~31 | None | |
| jeem | Jeem | — | ~33 | None | |
| haa | Haa (ح) | — | ~32 | None | |
| kha | Khaa | — | ~32 | None | |
| dal | Daal | — | ~34 | None | |
| dhal | Zaal | — | ~32 | None | |
| ra | Raa | — | ~32 | None | |
| zain | Zay | ~42 (weak) | ~33 | None | |
| seen | Seen | ~18.5 (strong) | ~31 | None | |
| sheen | Sheen | — | ~32 | None | |
| saad | Saad | ~48 (weak) | ~35 | None | |
| daad | Daad | ~42 (weak) | ~32 | None | |
| taa | Taa (ط) | — | ~32 | None | Emphatic Taa |
| dhaa | Zaa | — | ~33 | None | |
| ain | Ayn | — | ~36 | None | |
| ghain | Ghayn | — | ~33 | None | |
| fa | Faa | ~9.8 (strong) | ~36 | None | |
| qaf | Qaaf | ~57 (weak) | ~37 | None | Weakest known letter URL |
| kaf | Kaaf | — | ~32 | None | |
| lam | Laam | — | ~35 | None | |
| meem | Meem | — | ~29 | None | |
| noon | Noon | ~42 (weak) | ~40 | None | |
| ha | Haa (ه) | — | ~30 | None | Soft Haa |
| waw | Waaw | — | ~41 | None | |
| ya | Yaa | — | ~44 | None | |

**Related weak non-letter URL (same cluster):** `/noorani-qaida/lessons/madd-and-leen` — known GSC ~67. Same lesson-template family as other lessons; included in Task 2 enrichment.

**Observed structural gaps (diagnosis only, pre-fix):**

1. Content depth from seeds was **not** the differentiator (weak pages were not shorter).
2. Only Alif had a **preview/practice visual block**.
3. Related links were generic (next letter / Fatha / joining / pronunciation) — weak letters lacked contrast-letter links and alphabet-index prominence beyond the shared hub grid.
4. Hub letter grid already linked **all** 28 letters with consistent pattern (`Learn the Arabic letter {name}` aria-label).

---

## Task status table

| Task | Status | Files changed | Summary |
| --- | --- | --- | --- |
| 1 | Complete (diagnostic) | *(read-only)* | Confirmed games page is static; mapped hub links; inventoried 28 letter pages + madd-and-leen |
| 2 | Complete | `types.ts`, `letters.ts`, `topics.ts` (madd-and-leen), `arabic-letters/[letter]/page.tsx`, `LetterFindPractice.tsx`, `globals.css` | Enriched weak letters (qaf, zain, daad, noon, saad); lifted **all** letter pages to Alif structural standard (preview + find-letter practice + richer related links); tightened titles; deepened madd-and-leen |
| 3 | Complete | `games.ts`, `games/page.tsx`, `games/[game]/page.tsx`, game client components, `index.ts` sitemap paths, `guides.ts`, `guides/[guide]/page.tsx`, hub `page.tsx` | Added playable `/noorani-qaida/games` cluster: letter matching, harakat quiz, progress checklist |
| 4 | Complete | `ParentShareButtons.tsx`, `ProgressChecklistGame.tsx`, hub/games/guides pages | WhatsApp `wa.me/?text=` + `navigator.share` with clipboard fallback; progress share card; honest parent CTA — no fake counters |
| 5 | Complete | `InteractiveNooraniQaidaSection.tsx` | Keyword-led homepage CTA + teaser linking hub **and** games URLs |

**Typecheck:** `npx tsc --noEmit` passed after Tasks 2, 3/4, and 5.

---

## New URLs for GSC indexing (Task 3)

Submit / inspect these in Google Search Console:

1. `https://www.noorpath.online/noorani-qaida/games`
2. `https://www.noorpath.online/noorani-qaida/games/letter-matching`
3. `https://www.noorpath.online/noorani-qaida/games/harakat-quiz`
4. `https://www.noorpath.online/noorani-qaida/games/progress-checklist`

Also re-crawl strengthened URLs (not new, but materially updated):

- `https://www.noorpath.online/noorani-qaida`
- `https://www.noorpath.online/noorani-qaida/guides/games`
- Weak letter URLs: `/arabic-letters/qaf`, `zain`, `daad`, `noon`, `saad`
- `https://www.noorpath.online/noorani-qaida/lessons/madd-and-leen`
- Homepage `/` (Noorani Qaida section CTA/teaser)

All new paths are included in `QAIDA_INDEXABLE_PATHS` → `sitemap.ts`.

---

## Task 4 — Shareability confirmation

| Feature | Functional? | Backend? |
| --- | --- | --- |
| WhatsApp share (`https://wa.me/?text=…`) | Yes — opens WhatsApp with prefilled text + URL | No |
| Native Web Share API (`navigator.share`) | Yes — used when available | No |
| Clipboard fallback (“Copy or share link”) | Yes — copies text + URL | No |
| Progress checklist share card | Yes — appears after ≥1 checklist item; text reflects completed count | No — React state only (session/page memory) |
| Fake social proof / urgency | Not implemented | N/A |

Sharing is client-side only and consistent with a static-friendly architecture.

---

## Assumptions to confirm with the business owner

1. **“Shareable” = parent-to-parent utility links** (WhatsApp / parenting groups), not paid virality or app-store install loops. Confirm this matches growth expectations.
2. Progress milestones use **honest checklist language** (“starter checklist”, not certificates). Confirm no desire for branded completion certificates (would need verified product rules).
3. Free browser games are positioned as **recognition helpers**, not as the full learning platform or pronunciation assessors — aligned with existing disclosures.
4. Hero CTA on `/noorani-qaida` now prefers **“Free Interactive Games”** over the older “See How Practice Works” → guides page. Confirm marketing is comfortable prioritising playable URLs while keeping the guide linked mid-page.
5. Unknown-GSC letter pages (not in the provided strong/weak lists) received the **same structural lift** as Alif (practice widget + preview) but **not** the deep enrichment reserved for known-weak letters. Confirm if any additional slugs should get deep guides next.

---

## Impact / risks noted before shipping

- **Letter template change is sitewide** (all 28 pages): adds client JS for the find-letter widget and a screenshot on every letter. Improves parity; slightly increases page weight vs Alif-only preview.
- **New `/games` cluster** complements (does not replace) ranking guide `/guides/games` — both must stay interlinked to avoid cannibalisation confusion.
- **No academyFacts fabrication:** share CTAs and games copy avoid invented usage counts; WhatsApp business number only appears via existing `CONTACT` where used for “Ask NoorPath”.
