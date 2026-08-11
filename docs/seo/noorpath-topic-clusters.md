# NoorPath Topic Cluster Map

**Built:** 11 August 2026
**Evidence base:** Google Search Console, `sc-domain:noorpath.online`, 2 June 2026 → 8 August 2026
**Companion files:** `noorpath-keyword-universe.csv`, `noorpath-ai-search-map.md`

---

## Read this first — the limits of the evidence

The GSC property holds **68 days of data**: 13,258 impressions and 103 clicks in total. Requests for
16 months, 180 days and 90 days all return the same 2,101 queries because nothing exists before
2 June 2026.

That has three consequences for everything below.

1. Every demand figure in this map is **observed GSC impressions over 68 days**. It is not search
   volume, and it must never be quoted as one.
2. A cluster showing no demand may genuinely have none, or may simply not be indexed and ranking yet.
   Those two states are indistinguishable from this data, and both are recorded as **INSUFFICIENT DATA**
   rather than guessed at.
3. Queries with one or two impressions are real but statistically fragile. The CSV carries a
   `confidence` column for exactly this reason: HIGH ≥10 impressions, MEDIUM 3–9, LOW 1–2.

No keyword tool, difficulty score or volume estimate was available. None has been invented.

---

## The shape of the site as search actually sees it

| Cluster | Queries | Impressions | Clicks | Median position | In top 20 | Commercial queries |
|---|---|---|---|---|---|---|
| islamic-terms | 445 | 3,320 | **0** | 47.0 | 67 | 0 |
| salah-prayer | 222 | 1,041 | 4 | 23.0 | 98 | 0 |
| duas-supplications | 287 | 643 | 0 | 40.0 | 57 | 0 |
| 99-names | 225 | 640 | 2 | 52.9 | 4 | 0 |
| quran-learning-service | 141 | 509 | **0** | **82.0** | 9 | 131 |
| quran-surahs | 175 | 426 | 1 | 54.0 | 12 | 0 |
| islamic-general | 273 | 399 | 1 | 66.0 | 23 | 17 |
| brand | 9 | 246 | **24** | 10.0 | 5 | 0 |
| islamic-demographics | 55 | 106 | 0 | 10.0 | 47 | 0 |
| noorani-qaida | 28 | 68 | 3 | 36.0 | 12 | 1 |
| islamic-calendar | 40 | 78 | 0 | 74.5 | 0 | 0 |
| hifz-memorisation | 11 | 27 | 0 | 77.0 | 0 | 0 |
| tajweed | **1** | **1** | 0 | 1.0 | 1 | 0 |
| unclustered | 187 | 256 | 1 | 40.0 | 52 | 0 |

**OBSERVED FACT.** 24 of the site's 103 clicks are brand searches. Of the remaining 79, essentially all
come from Islamic reference content. The commercial cluster — the reason the business exists — produced
**509 impressions and zero clicks at a median position of 82**.

**OBSERVED FACT.** Tajweed, a core advertised course, appears in GSC as a **single query with a single
impression**. Hifz has 11 queries at median position 77.

**INFERENCE.** The site currently reads to Google as an Islamic reference publisher, not as an online
Quran academy. The reference clusters carry the authority; the service clusters carry the business
purpose; the two are barely connected.

---

## Pillar 1 — Islamic reference (the cluster that actually ranks)

**Core pages:** `/islamic-resources`, `/blog`
**Demand:** 5,150+ impressions across `islamic-terms`, `salah-prayer`, `duas-supplications`,
`99-names`, `quran-surahs`
**Clicks:** 7
**Cluster strength:** high visibility, near-zero click capture
**Main weakness:** the queries are answered inside the SERP

### Supporting pages carrying the cluster

| Page | Queries served | Best position | Impressions | Clicks |
|---|---|---|---|---|
| `/blog/barakallah-meaning` | barakallah + ~30 spelling variants | 7.1 | 1,150+ | 0 |
| `/blog/attahiyat-full-arabic-english-tashahhud` | attahiyat + ~40 variants | 7.8 | 500+ | 1 |
| `/blog/sajdah-tilawat-dua-arabic-english` | sajdah tilawat dua | 7.5 | 44+ | 0 |
| `/blog/rabbana-atina-fid-dunya` | quran 2:201 variants | 8.6 | 32+ | 0 |
| `/blog/labbaik-allahumma-labbaik` | labbaik meaning | 10.5 | 54+ | 0 |
| `/blog/what-is-wazifa-in-islam` | wazifa in english | 6.5 | 10+ | 0 |
| `/blog/astaghfirullah-meaning` | Arabic-script astaghfirullah | 9.6 | 15+ | 0 |
| `/blog/inshallah-meaning-in-english` | inshallah + Bengali/Arabic script | 10.8 | 13+ | 0 |

**A structural detail worth naming.** A large share of this cluster arrives as **transliteration and
spelling variants** — `barakalla`, `barakkallah`, `barakullah`, `baraqallah`, `barakallahu khair`,
`aththahiyath`, `atayat`, `attahiyatu`, plus Arabic and Bengali script. One page absorbs dozens of
variants. This is a genuine strength: it means the existing pages are being matched semantically, not
just on exact strings. It also means **new pages per variant would be pure cannibalization** and must
not be created.

**Target intent:** definitional and recitational
**Target audience:** Muslims worldwide seeking a meaning, a translation or the text of a recitation
**Countries:** USA, India, Pakistan, UK dominate; demand is global and not geo-specific
**Commercial destination:** weak and honest at best — someone looking up "barakallah meaning" is not
shopping for lessons. Forcing a class CTA here would be the spam the brief warns against.
**AI-answer opportunity:** very high, and already partly realised — see `noorpath-ai-search-map.md`.

---

## Pillar 2 — Quran learning service (the cluster that must work commercially)

**Core pages:** `/online-quran-classes`, `/quran-teacher-online`, `/online-quran-classes-for-kids`,
`/online-quran-classes-for-adults`, `/female-quran-teacher-online`, `/hifz-quran-online`,
`/online-quran-for-beginners`, `/free-quran-classes-online`, `/courses`
**Demand:** 509 impressions across 141 queries
**Clicks:** 0
**Cluster strength:** very low
**Main weakness:** two separate problems, described below

### Problem A — generic head terms are out of reach, and we compete with ourselves for them

**OBSERVED FACT.** Commercial query positions:

| Position band | Queries |
|---|---|
| 1–10 | 3 |
| 11–20 | 9 |
| 21–50 | 11 |
| 51–100 | **121** |
| 100+ | 5 |

**OBSERVED FACT.** For the head term `online quran classes` (28 impressions), **eight NoorPath URLs
appear**:

| URL | Impressions | Position |
|---|---|---|
| `/locations/online-quran-classes-usa` | 10 | 94.6 |
| `/locations/online-quran-classes-australia` | 6 | 92.0 |
| `/online-quran-classes` | 5 | 105.8 |
| `/locations/online-quran-classes-canada` | 3 | 98.3 |
| `/locations/online-quran-classes-new-zealand` | 1 | **17.0** |
| `/online-quran-classes/hyderabad` | 1 | 146.0 |
| `/online-quran-classes/sydney` | 1 | 97.0 |
| `/online-quran-classes/toronto` | 1 | 99.0 |

The same pattern repeats for `quran classes` (6 URLs), `online quran course` (5 URLs), `quran tutor`
(4 URLs), `quran class` (3 URLs), `quran lessons online` (3 URLs), `quran classes for adults` (3 URLs).

**INFERENCE.** The 26 country hubs are near-substitutes for one another on generic terms. Google has no
basis to prefer one, so it rotates them all at position 80–100. The designated canonical service page,
`/online-quran-classes`, ranks *worse* (105.8) than two of the country hubs. This is textbook internal
competition, and it is the single largest structural drag on the commercial cluster.

### Problem B — we already win where the query carries a local modifier

**OBSERVED FACT.** Every commercial query where NoorPath sits inside the top 20:

| Position | Query | Market | Serving page |
|---|---|---|---|
| **1.0** | noorani qaida near me | Ireland | `/online-quran-classes/dublin` |
| 2.0 | female teacher | India | `/quran-classes-for-sisters` |
| 10.0 | islamic classes near me | Norway | `/locations/online-quran-classes-norway` |
| 12.0 | arabic and quran classes near me | Netherlands | `/locations/online-quran-classes-netherlands` |
| 12.0 | quran learning center near me | Saudi Arabia | `/locations/online-quran-classes-saudi-arabia` |
| 12.0 | quran learning for kids near me | Saudi Arabia | `/locations/online-quran-classes-saudi-arabia` |
| 12.2 | quran academy near me | Saudi Arabia | `/locations/online-quran-classes-saudi-arabia` |
| 16.0 | quran academy | New Zealand | `/locations/online-quran-classes-new-zealand` |
| 16.5 | online female quran teacher | USA | `/female-quran-teacher-online` |
| 16.6 | female quran teacher online | USA | `/female-quran-teacher-online` |
| 17.0 | online female quran tutor | USA | `/female-quran-teacher-online` |
| 18.0 | quran classes singapore | Indonesia | `/locations/online-quran-classes-singapore` |
| 1.0 | tajweed kurs | Norway | (Norwegian-language query) |

Contrast: the same `quran teacher near me` query in the **USA** sits at position **87.5**.

**INFERENCE.** This is the most useful pattern in the whole dataset. "Near me" queries are contested by
physical local businesses. In markets with dense Muslim provision — USA, UK, Pakistan — local mosques,
madrasas and established academies fill those results and NoorPath is buried. In markets with thin local
provision — Ireland, Norway, Netherlands, New Zealand — there is far less to fill the result set, and
NoorPath's existing pages already reach the first two pages **without any targeted work having been done**.

This is stated as inference, not fact, because we cannot see competitor result sets from GSC. It is
consistent with everything observed, and it is falsifiable: if it is right, focused work on those markets
will move positions; if it is wrong, it will not.

**Target intent:** commercial and transactional
**Target audience:** parents and adult learners without convenient local provision
**Priority countries on evidence:** New Zealand, Norway, Ireland, Netherlands, Singapore, Denmark, Sweden
**Commercial destination:** the country hub itself, then `/pricing` and the trial enquiry
**AI-answer opportunity:** medium — see the access-problem questions in the AI map

---

## Pillar 3 — Noorani Qaida (small, healthy, well-differentiated)

**Core page:** `/noorani-qaida`
**Demand:** 68 impressions across 28 queries — small, but **12 of 28 sit inside the top 20**
**Clicks:** 3
**Cluster strength:** the healthiest cluster on the site by ratio
**Main weakness:** one internal duplicate, and almost no volume yet

**Supporting pages:** `/noorani-qaida/games`, `/noorani-qaida/guides/games`,
`/noorani-qaida/games/progress-checklist`, `/noorani-qaida/arabic-letters/[letter]` (haa, waw, noon,
saad and others all showing impressions)

**OBSERVED FACT — cannibalization.** The query `noorani qaida games` (30 impressions, 2 clicks) is
served by three URLs at once: `/noorani-qaida/games` (16i, pos 5.3), `/noorani-qaida/guides/games`
(13i, pos 4.8) and `/noorani-qaida` (8i, pos 6.0). The guide version currently outranks the primary
games page.

**Recommended action:** differentiate intent — the guide should read as instruction, the games page as
the tool — or consolidate. Both rank top 6, so this is a refinement, not an emergency. Do not redirect
without stronger evidence.

**Target intent:** mixed instructional and tool-seeking
**Commercial destination:** `/noorani-qaida` → trial enquiry. The connection here is genuinely natural,
which is more than can be said for Pillar 1.
**AI-answer opportunity:** medium-high — "how long does Noorani Qaida take", "what is Noorani Qaida"

---

## Pillar 4 — Tajweed and Hifz (advertised, effectively invisible)

**Core pages:** `/courses/tajweed-classes-online`, `/hifz-quran-online`

**OBSERVED FACT.** Tajweed: **one query, one impression** across the property's entire history — and it
is `tajweed kurs`, a **Norwegian-language** query, at position 1.
Hifz: 11 queries, 27 impressions, median position 77, zero clicks.

**INSUFFICIENT DATA.** We cannot tell from GSC whether these clusters have no demand reaching us because
the pages are weak, because they are not indexed prominently, or because the site is simply too young.
No recommendation to rewrite them is justified on this evidence alone. The first step is diagnostic:
confirm indexation and inbound internal links, then re-measure.

The Norwegian `tajweed kurs` result at position 1 is a single impression and should not be
over-interpreted, but it is consistent with the Pillar 2 low-density pattern and is worth watching.

---

## Pillar 5 — Islamic demographics (an accident worth understanding)

**OBSERVED FACT.** 55 queries, 106 impressions, **median position 10.0**, 47 of 55 inside the top 20.
Examples: `uk muslim population 2021 census england wales` (10i, pos 15.2),
`ons 2021 census muslim 6.5% england and wales` (6i, pos 9.5).

**INFERENCE.** This is the strongest-ranking cluster on the site by position, and it exists only because
country pages cite census data to justify their market context. It attracts researchers, not learners.

**Recommendation: NO ACTION.** Do not build this out. It has no commercial pathway and no relationship to
the service. It is noted here so that nobody mistakes its strong average position for commercial progress.

---

## Cluster health scores

Scored out of 100 from the components below, each 0–20: core page strength, supporting page count,
ranking coverage, internal-link coverage, commercial connection. This is an internal prioritisation
model, not a Google metric.

| Cluster | Core page | Supporting pages | GSC demand | Score | Main weakness | Priority |
|---|---|---|---|---|---|---|
| Islamic reference | `/islamic-resources` | 8 strong blog pages | 5,150 impr | **72** | zero click capture | P1 |
| Quran learning service | `/online-quran-classes` | 9 service + 26 country + 36 city | 509 impr | **34** | self-cannibalization on head terms | **P0** |
| Noorani Qaida | `/noorani-qaida` | 4 + 28 letter pages | 68 impr | **66** | duplicate games page; low volume | P2 |
| Tajweed | `/courses/tajweed-classes-online` | unknown | 1 impr | **INSUFFICIENT DATA** | invisible | P1 (diagnose) |
| Hifz | `/hifz-quran-online` | few | 27 impr | **22** | median position 77 | P1 (diagnose) |
| Geographic hubs | `/locations` | 26 country + 36 city | ~280 impr | **38** | 10 hubs and 27 cities at zero impressions | **P0** |
| Islamic demographics | none | incidental | 106 impr | n/a | no commercial pathway | NO ACTION |

---

## The geographic layer, measured

**OBSERVED FACT.** Of 26 country hubs, **10 have zero impressions**: Bangladesh, Denmark, Finland,
Germany, India, Indonesia, Ireland, Nigeria, Pakistan, Sweden.

**OBSERVED FACT.** Of 36 city pages, **27 have zero impressions**, including all three New Zealand cities
— Auckland, Wellington and Christchurch. The nine that register anything are Melbourne (5i), Houston (3i),
Abu Dhabi (2i), Doha (2i), Sydney (2i), Dublin (1i, **position 1**), Hyderabad (1i), Luton (1i),
Mumbai (1i), Toronto (1i).

**INFERENCE.** The location layer has been built far ahead of demand. Adding more of it — the brief
proposes Hamilton and further New Zealand cities — would extend a pattern that is currently producing
nothing measurable, while adding more near-duplicate competitors for the generic head terms the site
already loses. The evidence supports **consolidating and differentiating what exists**, not expanding.

Note that the workspace SEO rules already freeze Phase 2/3 city expansion. This evidence supports keeping
that freeze.

---

## Internal linking priorities that follow from the evidence

Only relationships with an evidence basis are listed. No sitewide or footer links. No exact-match anchors.

| From | To | Why, on evidence |
|---|---|---|
| `/blog/barakallah-meaning` (1,150 impr, pos 7.1) | `/islamic-resources`, related term pages | Highest-authority page on the site; currently a dead end for the reference cluster |
| `/blog/attahiyat-full-arabic-english-tashahhud` (500+ impr) | salah cluster siblings | Second-highest authority; natural topical adjacency |
| `/female-quran-teacher-online` (pos 16–17 USA) | `/quran-classes-for-sisters`, `/pricing` | Best-performing genuinely commercial page; closest to page 1 |
| `/locations/online-quran-classes-new-zealand` (pos 16–17) | NZ city pages, `/pricing` | Only country hub near page 2 on a head term |
| `/locations/online-quran-classes-norway` (pos 10) | `/courses/tajweed-classes-online` | Norwegian `tajweed kurs` at position 1 suggests a live thread |
| `/locations/online-quran-classes-netherlands` (pos 10–12) | `/online-quran-classes-for-kids` | Already ranking on "near me" |
| `/online-quran-classes/dublin` (**pos 1**) | `/noorani-qaida`, `/locations/online-quran-classes-ireland` | A position-1 page with no measured onward path, feeding a hub with zero impressions |

---

## What this map says NOT to do

Recorded explicitly because the brief invites several of these.

- **Do not create new pages for spelling variants.** `barakalla`, `barakkallah`, `baraqallah` and
  ~30 siblings are already absorbed by one page ranking at 7.1. New pages would cannibalize it.
- **Do not add New Zealand city pages.** Auckland, Wellington and Christchurch already exist and have
  **zero impressions each**. Hamilton would be a fourth page in a set that has produced nothing.
- **Do not migrate to `/new-zealand/online-quran-classes`.** The existing
  `/locations/online-quran-classes-new-zealand` ranks at 16–17 on head terms. A URL change would discard
  the only country-hub ranking the site has near page 2.
- **Do not build out Islamic demographics content** despite its position-10 median. No commercial path.
- **Do not add more country hubs** while 10 of 26 sit at zero impressions.
- **Do not rewrite Tajweed or Hifz pages yet.** Diagnose indexation and internal links first; the data
  cannot currently distinguish weak content from an unseen page.
