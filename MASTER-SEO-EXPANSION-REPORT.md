# Master SEO Expansion Report

**Completed:** 28 July 2026  
**Approach:** Honest product claims only; no cannibalisation of `/noorani-qaida` or `/courses/noorani-qaida-online`; new concepts under `/noorani-qaida/guides/{slug}`.

---

## Part A — Task A1 audit (BEFORE changes)

| # | Concept | Status | Action |
|---|---|---|---|
| 1 | Interactive Noorani Qaida | **Exists** — `/noorani-qaida` | Strengthen cross-links only (A4) |
| 2 | Noorani Qaida online | **Exists** — `/courses/noorani-qaida-online` | Link from cluster; no new page |
| 3 | Noorani Qaida with animation | **Create new** | `/noorani-qaida/guides/with-animation` |
| 4 | Noorani Qaida learning games | **Exists** — `/noorani-qaida/games` + `/guides/games` | Hub index + homepage (A4) |
| 5 | Gamified Quran learning for kids | **Create new** | `/noorani-qaida/guides/gamified-learning` |
| 6 | Online Arabic alphabet practice | **Create new** | `/noorani-qaida/guides/arabic-alphabet-practice` |
| 7 | Noorani Qaida with audio | **Create new + PRODUCT GAP** | `/noorani-qaida/guides/with-audio` (honest educational) |
| 8 | Noorani Qaida with pronunciation | **Exists** — `/guides/pronunciation` | Expand to 1,200+ words |
| 9 | Digital Quran Learning Platform | **Create new** | `/noorani-qaida/guides/digital-quran-learning-platform` |
| 10 | Noorani Qaida PDF vs interactive | **Exists** — `/guides/pdf-vs-interactive` | Expand depth/FAQs |

### Product gaps (A1)

| Gap | Evidence | What would need building |
|---|---|---|
| Public Qari-reviewed audio library | No public reviewed letter/vowel audio library in repo; pronunciation guide already discloses pending review | Reviewed audio assets, listen UI, manifest + `academyFacts` / disclosures update |
| Full cartoon “animation course” suite | Hub has preview MP4 + screenshots; not a per-letter cartoon series | Ship public animated lesson modules only if marketing that claim |

### Shipped interactive features (safe to describe)

- Browser games: letter-matching, harakat-quiz, progress-checklist
- Letter pages: LetterFindPractice widget
- Platform preview URL + screenshots/MP4 on marketing site
- Live 1-to-1 classes (commercial owners)

---

## Part A — A2 / A3 status (DONE)

**Data:** `src/data/noorani-qaida/conceptGuides.ts` merged via `guides.ts`  
**Template:** `guides/[guide]/page.tsx` — meta ~160 chars; `with-audio` honesty callout; richer related links (hub, games, commercial CTAs)

| Slug | Action | Notes |
|---|---|---|
| `with-animation` | Created | Honest: preview video + visual UI; not a cartoon suite |
| `gamified-learning` | Created | Links to real free games |
| `arabic-alphabet-practice` | Created | Letters + matching practice |
| `with-audio` | Created | Educational + **product-gap disclosure** |
| `digital-quran-learning-platform` | Created | Platform buyer-education |
| `pronunciation` | Expanded | 1,200+ words + FAQs |
| `pdf-vs-interactive` | Expanded | 1,200+ words + FAQs |

`npx tsc --noEmit` — passed after guide work.

---

## Part A — A4 status (DONE)

- **Hub** (`/noorani-qaida`): “Noorani Qaida cluster index” lists hub, games, course, and every guide (1–2 clicks to all cluster URLs).
- **Homepage** (`InteractiveNooraniQaidaSection`): keyword anchors — Interactive Noorani Qaida, Arabic Learning Games, Digital Qaida practice, plus links to gamified / alphabet / digital-platform / animation guides.

`npx tsc --noEmit` — passed.

---

## Part B — B1 New Zealand (DONE)

- Strengthened `locations.ts` NZ `desc` / `localContext` / kids long-tail keywords (qualitative dispersed-community framing; no invented census stats).
- Added NZ to `PRIORITY_MARKETS` in `geoSeo.ts` for kids-focused title/meta/H2: “Online Quran Classes for Kids in New Zealand”.
- NZ FAQs in `locationContent.ts` (`EXTRA_LOCATION_FAQS`), including: **“Is there a good Quran teacher option if there's no mosque near us in New Zealand?”**

`npx tsc --noEmit` — passed.

---

## Part B — B2 diaspora blogs (DONE)

| New slug | Differentiated from | CTA tone |
|---|---|---|
| `/blog/how-to-teach-quran-when-theres-no-mosque-nearby` | `how-to-teach-quran-to-kids` | Practical + commercial trial/pricing |
| `/blog/raising-muslim-child-in-non-muslim-country` | `raising-quran-literate-child-living-in-west` | Soft CTA (identity-first) |
| `/blog/online-quran-classes-for-muslim-families-abroad` | `quran-classes-for-expat-families` | More commercial |

Implemented in `blog.ts`, `blogContentParentLongTail.ts`, `blogFaqs.ts` (FAQPage schema). Each 1,200+ words. Links to NZ + Ireland locations + free trial / pricing where appropriate.

`npx tsc --noEmit` — passed.

### Tone / factual flags

- Soft CTA on identity post — do not harden into hard-sell without editorial review.
- No invented mosque/census statistics for NZ; keep qualitative.
- Audio / animation claims remain disclosure-aware on Qaida guides.
- Instruction language: “preferences recorded where available” — do not invent coverage lists.

---

## Part B — B3 timezone / English trust (DONE)

- `our-tutors/page.tsx`: preference copy includes timezone + language-of-instruction where available; FAQ on timezones for families abroad + language preference honesty (`TRIAL.availabilityNote` aligned: confirmed after request).
- `online-quran-classes/page.tsx`: timezone feature copy strengthened; FAQs for abroad timezones and English/instruction preference.

`npx tsc --noEmit` — passed.

---

## Sitemap verification

- New guides enter via `QAIDA_INDEXABLE_PATHS` (guide slugs from `QAIDA_GUIDES`).
- New blogs enter via `blogPosts` map in `src/app/sitemap.ts`.

---

## New / updated URLs for GSC

### Guides (new)

- https://www.noorpath.online/noorani-qaida/guides/with-animation
- https://www.noorpath.online/noorani-qaida/guides/gamified-learning
- https://www.noorpath.online/noorani-qaida/guides/arabic-alphabet-practice
- https://www.noorpath.online/noorani-qaida/guides/with-audio
- https://www.noorpath.online/noorani-qaida/guides/digital-quran-learning-platform

### Guides (strengthened)

- https://www.noorpath.online/noorani-qaida/guides/pronunciation
- https://www.noorpath.online/noorani-qaida/guides/pdf-vs-interactive

### Cluster / commercial (link targets, not new owners)

- https://www.noorpath.online/noorani-qaida
- https://www.noorpath.online/noorani-qaida/games
- https://www.noorpath.online/courses/noorani-qaida-online

### Location

- https://www.noorpath.online/locations/online-quran-classes-new-zealand

### Blogs (new)

- https://www.noorpath.online/blog/how-to-teach-quran-when-theres-no-mosque-nearby
- https://www.noorpath.online/blog/raising-muslim-child-in-non-muslim-country
- https://www.noorpath.online/blog/online-quran-classes-for-muslim-families-abroad

### Trust pages (copy/FAQ)

- https://www.noorpath.online/our-tutors
- https://www.noorpath.online/online-quran-classes

---

## Enterprise hardening (post-implementation)

- Raised long-form guide depth contract in `validate.ts` (intro ≥600 chars, ≥6 sections, meta description ≥140 for the 7 SEO guides).
- Removed dead `expandedBySlug` merge stub; guides list is explicit base + expanded + concept with no slug overlap.
- Timezone FAQs on tutors / online-classes pages now interpolate `TRIAL.availabilityNote` from `academyFacts.ts` (single source of truth).
- Abroad-classes blog kept ≥1,200 words; gamified guide title adjusted into 50–60 char band with `| NoorPath`.
- Removed stray empty untracked `x` file from workspace.

---

## Part B — B4 next-phase markets (report only)

Flag for **later** (do not build yet):

- Czech Republic  
- Poland  
- Japan  
- South Korea  

**Process:** Evaluate NZ location + the three diaspora blogs in Google Search Console for **4–8 weeks** before adding more location pages. Prioritise markets only after query evidence and capacity for honest local scheduling copy.

---

## Implementation file touch list

- `src/data/noorani-qaida/conceptGuides.ts`, `guides.ts`, `guides/[guide]/page.tsx`
- `src/app/noorani-qaida/page.tsx`, `src/components/home/InteractiveNooraniQaidaSection.tsx`
- `src/data/locations.ts`, `src/data/locationContent.ts`, `src/lib/geoSeo.ts`
- `src/data/blog.ts`, `blogContentParentLongTail.ts`, `blogFaqs.ts`
- `src/app/our-tutors/page.tsx`, `src/app/online-quran-classes/page.tsx`
- `MASTER-SEO-EXPANSION-REPORT.md` (this file)
