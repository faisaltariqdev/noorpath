# NoorPath — SEO & AI Authority Implementation Report

**Phase 21 — High-Demand / Low-Competition Keyword Discovery Engine**
**Produced:** 11 August 2026
**Status:** research and planning only. No production file was modified, nothing was deployed, nothing
was committed.

**Companion artefacts**

- `docs/seo/noorpath-keyword-universe.csv` — 2,099 rows, every one backed by GSC evidence
- `docs/seo/noorpath-topic-clusters.md` — cluster map and health scores
- `docs/seo/noorpath-ai-search-map.md` — AI-answer strategy
- `seo-reports/gsc-keyword-universe-raw.json` — the raw GSC pull this is all derived from

---

## 0. Evidence base, and its limits

Read this before any number below is quoted anywhere.

### What was available

| Source | Status | What it gave us |
|---|---|---|
| Google Search Console API (`sc-domain:noorpath.online`) | **working** | 2,101 queries, query × country, query × page, page × country, search appearance |
| Codebase inventory | **working** | 338 built routes, 26 country hubs, 36 city pages, 147 blog posts |
| Live SERP inspection | **working** | competitor sets for two target queries |
| Keyword volume tool (Ahrefs / Semrush / Keyword Planner / DataForSEO) | **not available** | — |
| Keyword difficulty, CPC, competitor rank tracking, backlink data | **not available** | — |

### The constraint that shapes everything

**OBSERVED FACT.** The GSC property holds **68 days** of data — 2 June 2026 to 8 August 2026. Total:
**13,258 impressions and 103 clicks.** Requests for 16 months, 180 days and 90 days all return the
identical 2,101 queries, because nothing exists before 2 June.

Monthly: June 1,554 impressions / 16 clicks · July 7,319 / 55 · August (8 days) 4,385 / 32.

Three consequences, applied consistently throughout:

1. **No search volume exists in this report.** `estimated_demand` in the CSV is literally
   `GSC_IMPRESSIONS_68D:<n>`. Anything the site has never surfaced for is `UNKNOWN`. No figure has been
   estimated, modelled or inferred from a third-party tool, because no such tool was available.
2. **Competition evidence is our own observed position.** That is a real signal — it tells us whether we
   can reach a result set — but it is not a difficulty score and is not presented as one.
3. **Content decay analysis is not possible.** Three months of data on a rising site cannot distinguish
   decay from growth. Section 16 of the brief is answered **INSUFFICIENT DATA**.

Every claim below is tagged **OBSERVED FACT**, **INFERENCE** or **INSUFFICIENT DATA**.

---

## 26. High-Demand / Low-Competition Opportunities

### 26.1 The single most important finding

**OBSERVED FACT.** Click-through rate by position, brand versus non-brand:

| Position band | Brand impr | Brand CTR | Non-brand impr | Non-brand CTR |
|---|---|---|---|---|
| 1–3 | 0 | — | 36 | 2.78% |
| **4–10** | **234** | **10.26%** | **1,748** | **0.29%** |
| 11–20 | 0 | — | 760 | 0.13% |
| 21–50 | 7 | 0.00% | 1,985 | 0.15% |
| 51+ | 5 | 0.00% | 2,988 | 0.07% |

Same position band, **35× difference in CTR**.

**OBSERVED FACT.** `/blog/barakallah-meaning` holds over 1,150 impressions at average position 7.1 and
has produced **zero clicks**. `barakallah meaning` alone: 669 impressions, position 7.1, 0 clicks.

**OBSERVED FACT.** The only enhanced search appearance GSC records for this property is
`REVIEW_SNIPPET`, 8 impressions. No FAQ rich result registered despite 145 FAQPage slugs in the schema
inventory.

**INFERENCE.** The site's ranking content is definitional, and definitional queries are resolved above
the organic results. This is not a title or meta problem — brand queries in the same band convert at
10%. It is a query-type problem.

**What this changes.** "High demand" measured in impressions is actively misleading for this property.
The 3,320 impressions in the `islamic-terms` cluster are worth **zero clicks** and, on this evidence,
always will be. Demand that can convert is demand where the user must reach a provider to get what they
came for.

### 26.2 Where low competition genuinely exists

**OBSERVED FACT.** Commercial query positions across the whole property:

| Band | Queries |
|---|---|
| 1–10 | 3 |
| 11–20 | 9 |
| 21–50 | 11 |
| **51–100** | **121** |
| 100+ | 5 |

126 of 149 commercial queries (85%) sit at position 51 or worse. The head terms are not reachable.

**OBSERVED FACT.** But every commercial query where NoorPath is inside the top 20 shares a pattern:

| Pos | Query | Market | Page |
|---|---|---|---|
| **1.0** | noorani qaida near me | Ireland | `/online-quran-classes/dublin` |
| **1.0** | tajweed kurs | Norway | (Norwegian language) |
| 2.0 | female teacher | India | `/quran-classes-for-sisters` |
| 10.0 | islamic classes near me | Norway | `/locations/online-quran-classes-norway` |
| 10.0 | quran classes near me | Netherlands | `/locations/online-quran-classes-netherlands` |
| 12.0 | arabic and quran classes near me | Netherlands | `/locations/online-quran-classes-netherlands` |
| 12.0 | quran learning center near me | Saudi Arabia | `/locations/online-quran-classes-saudi-arabia` |
| 12.0 | quran learning for kids near me | Saudi Arabia | `/locations/online-quran-classes-saudi-arabia` |
| 12.2 | quran academy near me | Saudi Arabia | `/locations/online-quran-classes-saudi-arabia` |
| 16.0 | quran academy | New Zealand | `/locations/online-quran-classes-new-zealand` |
| 16.5 | online female quran teacher | USA | `/female-quran-teacher-online` |
| 16.6 | female quran teacher online | USA | `/female-quran-teacher-online` |
| 17.0 | online female quran tutor | USA | `/female-quran-teacher-online` |
| 18.0 | quran classes singapore | Indonesia | `/locations/online-quran-classes-singapore` |

And the contrast that makes it meaningful: **`quran teacher near me` in the USA sits at position 87.5.**

**INFERENCE.** Two distinct low-competition pockets exist, and they are the only ones the evidence
supports:

- **Local-access queries in markets with thin local provision** — Ireland, Norway, Netherlands, New
  Zealand, and to a degree Saudi Arabia and Singapore. Existing pages already reach the first two pages
  with no targeted work.
- **Gender-specified teacher queries** — `/female-quran-teacher-online` holds positions 16–17 in the USA,
  the largest market, on three separate query variants. This is the closest genuinely commercial page to
  page one anywhere on the site.

---

## 27. Underserved Learner Opportunities

The brief's central thesis — that people who cannot reach a local Quran teacher are an addressable market
— is **supported by the data**, with one important qualification.

**OBSERVED FACT.** All "near me" family queries recorded, with the page that served them:

| Pos | Query | Market |
|---|---|---|
| 1.0 | noorani qaida near me | Ireland |
| 1.0 | online quran classes near me | Saudi Arabia |
| 10.0 | noor academy near me | India |
| 10.0 | quran classes near me | Netherlands |
| 10.0 | islamic classes near me | Norway |
| 12.0 | quran teaching near me | Kuwait |
| 12.0 | arabic and quran classes near me | Netherlands |
| 12.0 | quran learning center near me | Saudi Arabia |
| 12.0 | quran learning for kids near me | Saudi Arabia |
| 12.2 | quran academy near me | Saudi Arabia |
| 16.0 | quran classes near me | New Zealand |
| 42.5 | quran tutor near me | Singapore |
| 56.0 | quran teacher near me | New Zealand |
| 74.0 | quran classes near me for women's | New Zealand |
| 77.0 | quran teaching near me | New Zealand |
| 82.0 | hifz teacher near me | New Zealand |
| **87.5** | **quran teacher near me** | **USA** |
| 90.0 | online quran classes near me | Pakistan |
| 90.0 | quran classes near me | Singapore |

**INFERENCE.** Position correlates with local provision density, not with page quality — the same query
string ranks at 10 in the Netherlands and 87.5 in the USA, served by comparably built pages.

**The qualification.** Absolute volume here is very small: the entire "near me" family is **24
impressions**. On 68 days of data from a new site this is a **directional signal, not a measured market**.
It is the best directional signal available, and it is consistent across nine countries, which is why it
is being acted on — but it must be re-measured before major investment.

### Access-problem content gaps

**OBSERVED FACT.** The property has **zero impressions** for any long-form access-problem query
("no madrasa nearby", "how can my child learn Quran without a local teacher", and similar). We do not
surface for them at all.

**OBSERVED FACT** (live SERP, 11 August 2026). For "how can my child learn Quran if there is no madrasa
nearby", results are dominated by promotional blog content from competing academies — alhamdofficial.com,
altahoorquraninstitute.com, equranschool.com, naifcenter.org — plus one community publisher.

**INFERENCE.** There is room for genuinely useful, non-promotional content here, because the incumbents
are thin and self-interested. Demand is **UNKNOWN** and must be labelled so.

---

## 28. New Zealand SEO Strategy

### 28.1 A correction to the brief

The brief asks to "add New Zealand as an official NoorPath SEO market" and to create New Zealand
architecture at `/new-zealand/online-quran-classes`.

**OBSERVED FACT.** New Zealand is already a fully built market:

- Country hub `/locations/online-quran-classes-new-zealand` — exists, **26 impressions**, ranks **16–17**
  for `quran classes near me` and `quran academy`
- City pages for Auckland, Wellington and Christchurch — all exist
- A dedicated country guide in `src/data/countryGuidesIrelandNz.ts`
- Hreflang and sitemap coverage in place

**Recommendation: do not migrate the URL.** `/locations/online-quran-classes-new-zealand` is the only
country hub anywhere near page two on a head term. Moving it to `/new-zealand/online-quran-classes` would
discard the site's single best geographic ranking to gain nothing measurable.

### 28.2 What the New Zealand data actually shows

**OBSERVED FACT.** 65 queries, 75 impressions, 0 clicks. **26 of 65 queries (40%) are commercial intent.**

That ratio is the highest of any market on the site:

| Market | Queries | Commercial queries | Commercial share |
|---|---|---|---|
| **New Zealand** | 65 | 26 | **40%** |
| Pakistan | 230 | 39 | 17% |
| Singapore | 71 | 12 | 17% |
| Australia | 195 | 32 | 16% |
| USA | 854 | 77 | 9% |
| Canada | 224 | 19 | 8% |
| UK | 557 | 22 | 4% |

**INFERENCE.** New Zealand traffic is disproportionately people looking for a provider rather than a
definition. Small in absolute terms, but the highest-quality composition on the site.

**OBSERVED FACT.** NZ commercial queries include `quran classes near me` (pos 16), `quran academy`
(pos 16), `online quran classes` (pos 17), `quran teacher near me` (pos 56), `quran teaching near me`
(pos 77), `quran classes near me for women's` (pos 74), `hifz teacher near me` (pos 82).

### 28.3 City pages — the evidence says no

**OBSERVED FACT.** Auckland, Wellington and Christchurch pages all exist and all have **zero
impressions**. Across the whole site, **27 of 36 city pages have zero impressions**.

**OBSERVED FACT.** No New Zealand city name appears in any GSC query for this property. Not Auckland, not
Wellington, not Christchurch, not Hamilton.

**Recommendation: do not add Hamilton or any further New Zealand city page.** Three already exist and
produce nothing. A fourth extends a pattern with no measured return, and adds another near-duplicate
competitor for head terms the site already loses to itself (see §34). This is also consistent with the
existing workspace rule freezing Phase 2/3 city expansion.

### 28.4 Competitive reality

**OBSERVED FACT** (live SERP, 11 August 2026). "Online quran classes new zealand" returns five
specialist providers: nzquran.academy (a dedicated NZ domain), allamalquraan.com, ilmulquran.com,
mishkahacademy.com. All name Auckland, Wellington, Christchurch and Hamilton.

**INFERENCE.** New Zealand is not an empty field. The differentiator among incumbents is specificity —
the strongest competitor page references NCEA, the NZ school year, NZST/NZDT clock changes, and towns
beyond the main four. Generic city-name coverage is table stakes.

### 28.5 Recommended New Zealand actions

| Priority | Action | Rationale |
|---|---|---|
| P0 | Deepen the existing country hub with genuine NZ specificity — school-year rhythm, NZST/NZDT handling, honest online-only framing | Only way to differentiate from four incumbents |
| P0 | Internal links into the NZ hub from relevant existing content | It ranks 16–17; inbound authority is the cheapest lever |
| P1 | Add the "female teacher" angle to NZ — `quran classes near me for women's` recorded at pos 74 | Mirrors the site's best commercial cluster |
| **Do not** | Migrate URL structure | Would discard a working ranking |
| **Do not** | Add Hamilton or further cities | Three existing city pages have zero impressions |

---

## 29. Low-Muslim-Density / Limited-Access Market Opportunities

**Method note.** Demographic reasoning here is at country level only, using the site's own existing
market framing. No inference is made about any individual.

**OBSERVED FACT.** Priority markets named in the brief, with actual GSC evidence:

| Market | Queries | Impr | Commercial queries | Best commercial position |
|---|---|---|---|---|
| New Zealand | 65 | 75 | 26 | 6.0 |
| Australia | 195 | 304 | 32 | 19.0 |
| Canada | 224 | 304 | 19 | 7.0 |
| UK | 557 | 737 | 22 | 3.1 |
| USA | 854 | 1,531 | 77 | 8.0 |
| Germany | 77 | 84 | **0** | — |
| Netherlands | 97 | 161 | 3 | 10.0 |
| Sweden | 47 | 151 | 2 | 9.0 |
| Norway | 42 | 89 | 2 | **1.0** |
| Denmark | 38 | 75 | 1 | 71.0 |
| Finland | 11 | 25 | **0** | — |
| Ireland | 43 | 68 | 1 | **1.0** |
| France | 25 | 32 | 1 | 91.5 |
| Italy | 34 | 35 | **0** | — |
| Spain | 37 | 52 | 1 | 6.0 |
| Portugal | 9 | 11 | **0** | — |
| Switzerland | 11 | 12 | **0** | — |
| Austria | 9 | 9 | **0** | — |
| Belgium | 33 | 44 | **0** | — |
| Singapore | 71 | 93 | 12 | 18.0 |
| Japan | 2 | 2 | **0** | — |
| South Korea | 10 | 12 | 1 | 1.0 |

### Tiering on evidence

**Tier A — act now.** Existing pages already rank top-20 on local-access queries.
**Ireland** (`noorani qaida near me` pos 1), **Norway** (`islamic classes near me` pos 10, `tajweed kurs`
pos 1), **Netherlands** (pos 10–12 on two near-me variants), **New Zealand** (pos 16–17).

Note the asymmetry: Ireland's country hub `/locations/online-quran-classes-ireland` has **zero
impressions**, while its city page `/online-quran-classes/dublin` ranks **position 1**. The hub is being
carried by the city page and has no measured inbound value of its own.

**Tier B — watch.** Singapore (12 commercial queries, best pos 18), Sweden, Denmark, Spain, South Korea.
Real but thin signals.

**Tier C — no evidence, do not build.** Germany, Finland, Italy, Portugal, Switzerland, Austria, Belgium,
Japan — **zero commercial queries each**. Germany, Finland, Denmark and Sweden already have country hubs
with **zero impressions**. Building more here would repeat a pattern that is currently returning nothing.

**Tier D — high volume, wrong shape.** USA and UK carry the most impressions but the lowest commercial
share (9% and 4%) and the worst commercial positions (`quran teacher near me` at 87.5 in the USA). These
are the markets where local provision is densest. They matter commercially, but they are not
low-competition and should not be treated as such.

---

## 30. Long-Tail Keyword Opportunities

**OBSERVED FACT.** 627 queries of five words or more: 1,261 impressions, **2 clicks**.

**OBSERVED FACT.** The long tail splits into three very different groups:

| Group | Character | Example | Commercial value |
|---|---|---|---|
| Transliteration variants | spelling and script variants of one term | `barakalla`, `baraqallah`, `aththahiyath`, `atayat`, `أستغفر الله meaning` | **none** — zero-click |
| Recitation text queries | users seeking exact wording | `quran 2:201 rabbana atina fid dunya hasanah wa fil akhirati…` (13i, pos 8.8) | none |
| Service long-tail | audience/location/problem modifiers | `quran classes for adults singapore` (6i, pos 50), `best quran classes for kids in australia` (6i, pos 91) | **real** |

**INFERENCE.** Only the third group is worth pursuing. The first two are already absorbed by pages
ranking at 7–9 and earning nothing; adding more would cannibalize them.

**Patterns with evidence behind them** (from §26.2 and §27), in priority order:

1. `[service] + [near me] + [low-density market]` — the only pattern where we already rank top-20
2. `[service] + [gender]` — `/female-quran-teacher-online` at 16–17 in the USA
3. `[service] + [audience] + [country]` — `quran classes for adults singapore` at 50, reachable
4. `[service] + [access problem]` — no GSC data; **UNKNOWN**, hypothesis only

Patterns explicitly **not** recommended: `[service] + [city]` (27 of 36 city pages at zero impressions),
and any mass combinatorial generation. The brief warns against blind combination generation and the data
agrees.

---

## 31. AI Search Query Opportunities

**OBSERVED FACT.** 188 question-form queries: 462 impressions, **0 clicks**. Every one is informational
and Islamic-reference in nature. Strongest: `how to recite attahiyat` (53i, pos 7.9, 0 clicks),
`how to do ghusl` (17i, pos 56), `what does inshallah mean` (17i, pos 72.9).

**OBSERVED FACT.** Zero question-form queries about choosing or using an online Quran service.

**INFERENCE.** The site is already visible in conversational Islamic-reference space and captures nothing
from it — consistent with §26.1. The conversational commercial space (how do online classes work, what to
look for in a teacher) is absent entirely: we do not surface there.

The full treatment, including which questions pass the §21.19 quality gate and which fail, is in
`docs/seo/noorpath-ai-search-map.md`. The short version:

- **Reference questions** — protect and keep extractable. Measure by citation and impressions, **never
  by clicks**. Do not rewrite titles to chase CTR; the evidence shows CTR is not the lever.
- **Service questions** — genuine gap, `UNKNOWN` demand, worth a small disciplined test rather than a
  content programme.

---

## 32. Blog Knowledge Graph

**OBSERVED FACT.** 147 blog posts. Measured GSC value is concentrated in a handful:

| Page | Impressions | Best position | Clicks |
|---|---|---|---|
| `/blog/barakallah-meaning` | 1,150+ | 7.1 | **0** |
| `/blog/attahiyat-full-arabic-english-tashahhud` | 500+ | 7.8 | 1 |
| `/blog/sajdah-tilawat-dua-arabic-english` | 44+ | 7.5 | 0 |
| `/blog/labbaik-allahumma-labbaik` | 54+ | 10.5 | 0 |
| `/blog/rabbana-atina-fid-dunya` | 32+ | 8.6 | 0 |
| `/blog/bismillah-meaning-in-english` | 64 | 47.2 | 0 |
| `/blog/subhanallah-meaning` | 32 | 43.4 | 0 |
| `/blog/what-is-wazifa-in-islam` | 10+ | 6.5 | 0 |

**INFERENCE.** Two pages account for the majority of measured blog visibility, and both are zero-click.
The blog is currently an Islamic reference library that happens to sit on an academy's domain. The
knowledge-base structure the brief describes is the right destination, but the honest starting point is
that the existing library **cannot be converted into traffic by restructuring** — the queries it wins do
not produce clicks.

Structural note carried over from the technical audit completed earlier today: the `/blog` index was
client-rendered and contributed **zero** static internal links to 147 posts, orphaning 20 of them
including the highest-impression page. That has been fixed; 158 blog links are now in static HTML and
orphans dropped from 23 to 3.

Full cluster structure: `docs/seo/noorpath-topic-clusters.md`.

---

## 33. Blog → Commercial Conversion Map

| Blog cluster | Natural destination | Justified on evidence? |
|---|---|---|
| Noorani Qaida guides | `/noorani-qaida` | **Yes** — direct course match, cluster ranks top-20 on 12 of 28 queries |
| Access-problem articles (proposed) | `/online-quran-classes`, `/online-quran-classes-for-kids` | **Yes** — reader is seeking a provider |
| Teacher-selection content (proposed) | `/our-tutors`, `/female-quran-teacher-online` | **Yes** — matches the site's best commercial position |
| Hifz / memorisation guides | `/hifz-quran-online` | Yes in principle; hifz cluster is at median position 77 |
| Salah and prayer guides | `/islamic-resources` | Weak — informational readers, no purchase intent |
| **Islamic term definitions** | **none** | **No** — zero purchase intent; a CTA here would be the spam the brief prohibits |

**Recommendation.** Do not attach commercial CTAs to the definition cluster. It is the highest-impression
content on the site and the temptation is obvious, but the intent is not there, the click is not there,
and both the brief and the workspace rules forbid it.

---

## 34. Competitor Content Gaps

### 34.1 The largest competitor is NoorPath

**OBSERVED FACT.** For the head term `online quran classes` (28 impressions), **eight NoorPath URLs
appear simultaneously**:

| URL | Impr | Position |
|---|---|---|
| `/locations/online-quran-classes-usa` | 10 | 94.6 |
| `/locations/online-quran-classes-australia` | 6 | 92.0 |
| `/online-quran-classes` | 5 | **105.8** |
| `/locations/online-quran-classes-canada` | 3 | 98.3 |
| `/locations/online-quran-classes-new-zealand` | 1 | **17.0** |
| `/online-quran-classes/hyderabad` | 1 | 146.0 |
| `/online-quran-classes/sydney` | 1 | 97.0 |
| `/online-quran-classes/toronto` | 1 | 99.0 |

The same pattern repeats on `quran classes` (6 URLs), `online quran course` (5), `quran tutor` (4),
`quran class` (3), `quran lessons online` (3), `quran classes for adults` (3), `quran courses` (4).

**INFERENCE.** The canonical service page ranks **worse than two country hubs** for its own head term.
26 near-substitute country hubs give Google no basis to prefer one, and it rotates them all at position
80–100. This is the largest structural drag on the commercial cluster, and it is entirely self-inflicted.

**Recommended action: differentiate intent, do not redirect.** The country hubs should read as
market-specific (timezone, school rhythm, local context) and the service page as the canonical
description of the service. No redirects — the evidence does not justify them, and the brief explicitly
warns against redirects without strong evidence.

### 34.2 External competitor observations

**OBSERVED FACT** (live SERP, 11 August 2026, two queries only).

- NZ market: five specialists rank, one on a dedicated NZ domain. All cover the four main cities.
  Differentiation among them is depth of local specificity.
- Access-problem queries: dominated by thin promotional blog content from competing academies.

**INSUFFICIENT DATA** for the rest of §21.17. Backlink profiles, competitor keyword footprints, SERP
feature ownership and AI citation presence all require tooling that is not available. No estimates have
been invented for them.

---

## 35. Keyword Opportunity Score

An **internal prioritisation model**. Not a Google metric, not a third-party difficulty score.

| Component | Range | Source |
|---|---|---|
| Search demand | 0–10 | log scale over observed GSC impressions; 669 (our maximum) → 10 |
| Ranking competition | 0–10 | our own observed average position; 10 = already top-3 |
| NoorPath relevance | 0–10 | cluster-to-service mapping |
| Commercial value | 0–10 | search intent classification |
| AI-answer potential | 0–10 | question form and definitional phrasing |
| Geographic opportunity | 0–10 | market provision density (country level only) |
| Existing authority | 0–10 | observed position and impressions on the serving page |

**Total = sum ÷ 70 × 100.**

Two honest weaknesses, stated rather than hidden:

- **Ranking competition uses our own position as a proxy** because no competitor difficulty data exists.
  A query where we rank well because nobody contests it and one where we rank well because our page is
  strong score identically.
- **A single-impression query can score highly.** `noorani qaida near me` scores 78.6 on one impression
  at position 1. That is deliberate — a position-1 commercial ranking is worth knowing about — but it is
  not proven demand. This is why `confidence` is a separate column, and why the Top 50 tables below are
  filtered to confidence ≥ MEDIUM.

Distribution across 2,099 rows: 111 HIGH confidence, 431 MEDIUM, 1,557 LOW.

---

## 36. Top 50 Immediate SEO Opportunities

Filtered to confidence ≥ MEDIUM (≥3 observed impressions). Full 2,099 rows in the CSV.

| # | Query | Impr | Clicks | Pos | Country | Serving page | Action | Score | Conf |
|---|---|---|---|---|---|---|---|---|---|
| 1 | barakallah meaning | 669 | 0 | 7.1 | India | `/blog/barakallah-meaning` | CTR OPTIMIZATION | 65.3 | HIGH |
| 2 | female quran teacher online | 5 | 0 | 16.6 | United States | `/female-quran-teacher-online` | INTERNAL LINKS | 65.3 | MEDIUM |
| 3 | how to recite attahiyat | 53 | 0 | 7.9 | Nigeria | `/blog/attahiyat-full-arabic-english-tashahhud` | CTR OPTIMIZATION | 62.9 | HIGH |
| 4 | quran academy near me | 5 | 0 | 12.2 | Saudi Arabia | `/locations/online-quran-classes-saudi-arabia` | INTERNAL LINKS | 62.4 | MEDIUM |
| 5 | noorpath | 144 | 17 | 7.4 | Pakistan | `/` | PROTECT | 62.1 | HIGH |
| 6 | attahiyat full text | 37 | 1 | 9.7 | Sweden | `/blog/attahiyat-full-arabic-english-tashahhud` | PROTECT | 62.0 | HIGH |
| 7 | barak allah meaning | 92 | 0 | 7.9 | India | `/blog/barakallah-meaning` | CTR OPTIMIZATION | 61.1 | HIGH |
| 8 | barakallah means | 85 | 0 | 7.8 | Pakistan | `/blog/barakallah-meaning` | CTR OPTIMIZATION | 61.0 | HIGH |
| 9 | noor path academy | 63 | 6 | 5.3 | Pakistan | `/` | PROTECT | 60.3 | HIGH |
| 10 | quran classes near me | 3 | 0 | 38.7 | Netherlands | `/locations/online-quran-classes-netherlands` | DIFFERENTIATE INTENT | 60.1 | MEDIUM |
| 11 | quran classes for adults singapore | 6 | 0 | 50.0 | Singapore | `/locations/online-quran-classes-singapore` | CONTENT REFRESH | 59.9 | MEDIUM |
| 12 | barak allah means | 25 | 0 | 8.1 | India | `/blog/barakallah-meaning` | CTR OPTIMIZATION | 58.4 | HIGH |
| 13 | noor path | 22 | 1 | 9.3 | Pakistan | `/` | PROTECT | 58.1 | HIGH |
| 14 | aththahiyath in english | 5 | 0 | 7.8 | Sri Lanka | `/blog/attahiyat-full-arabic-english-tashahhud` | PROTECT | 58.1 | MEDIUM |
| 15 | how to recite tahiya | 4 | 0 | 8.5 | GHA | `/blog/attahiyat-full-arabic-english-tashahhud` | PROTECT | 57.7 | MEDIUM |
| 16 | quran classes online with teacher | 4 | 0 | 64.5 | Denmark | `/quran-teacher-online` | CLUSTER SUPPORT | 57.7 | MEDIUM |
| 17 | noorani qaida games | 30 | 2 | 5.1 | Pakistan | `/noorani-qaida/games` | DIFFERENTIATE INTENT | 57.3 | HIGH |
| 18 | attahiyatu | 7 | 0 | 9.6 | Denmark | `/blog/attahiyat-full-arabic-english-tashahhud` | PROTECT | 57.3 | MEDIUM |
| 19 | quran 2:201 rabbana atina fid-dunya hasanatan translation | 3 | 0 | 8.0 | United States | `/blog/rabbana-atina-fid-dunya` | PROTECT | 57.3 | MEDIUM |
| 20 | attahiyat | 208 | 1 | 11.7 | Sweden | `/blog/attahiyat-full-arabic-english-tashahhud` | PROTECT | 57.1 | HIGH |
| 21 | quran 2:201 rabbana atina fid dunya hasanah wa fil akhirat | 13 | 0 | 8.8 | United States | `/blog/rabbana-atina-fid-dunya` | PROTECT | 57.1 | HIGH |
| 22 | meaning of barakallah | 12 | 0 | 8.4 | India | `/blog/barakallah-meaning` | PROTECT | 56.9 | HIGH |
| 23 | attahiyat lillahi wa salawatu english | 5 | 0 | 13.2 | Denmark | `/blog/attahiyat-full-arabic-english-tashahhud` | PROTECT | 56.7 | MEDIUM |
| 24 | "أستغفر الله" means "i seek forgiveness from allah" | 9 | 0 | 9.6 | United States | `/blog/astaghfirullah-meaning` | PROTECT | 56.3 | MEDIUM |
| 25 | noorpathquranacademy.com | 4 | 0 | 6.0 | United States | `/` | PROTECT | 56.3 | MEDIUM |
| 26 | translation of attahiyat | 3 | 0 | 9.7 | UAE | `/blog/attahiyat-full-arabic-english-tashahhud` | PROTECT | 55.9 | MEDIUM |
| 27 | attahiyat text | 13 | 0 | 9.6 | Germany | `/blog/attahiyat-full-arabic-english-tashahhud` | PROTECT | 55.7 | HIGH |
| 28 | at tahiyyatu lillahi in english | 5 | 0 | 6.6 | India | `/blog/attahiyat-full-arabic-english-tashahhud` | PROTECT | 55.3 | MEDIUM |
| 29 | full attahiyat in english | 5 | 0 | 9.2 | India | `/blog/attahiyat-full-arabic-english-tashahhud` | PROTECT | 55.3 | MEDIUM |
| 30 | surah masura in english | 4 | 0 | 8.5 | UAE | `/blog/dua-e-masura-arabic-english` | PROTECT | 54.9 | MEDIUM |
| 31 | attahiyat in english | 67 | 0 | 13.8 | Pakistan | `/blog/attahiyat-full-arabic-english-tashahhud` | PROTECT | 54.7 | HIGH |
| 32 | dua for sajdah tilawat | 15 | 0 | 8.8 | India | `/blog/sajdah-tilawat-dua-arabic-english` | PROTECT | 54.6 | HIGH |
| 33 | online quran class | 3 | 0 | 82.0 | Singapore | `/locations/online-quran-classes-singapore` | CLUSTER SUPPORT | 54.4 | MEDIUM |
| 34 | how to say attahiyat in salah | 6 | 0 | 12.2 | United States | `/blog/attahiyat-full-arabic-english-tashahhud` | PROTECT | 54.1 | MEDIUM |
| 35 | what is wazifa in english | 6 | 0 | 6.5 | India | `/blog/what-is-wazifa-in-islam` | PROTECT | 54.1 | MEDIUM |
| 36 | online quran classes australia | 11 | 0 | 82.3 | Australia | `/locations/online-quran-classes-australia` | CLUSTER SUPPORT | 53.9 | HIGH |
| 37 | online quran course | 11 | 0 | 90.6 | Australia | `/locations/online-quran-classes-australia` | DIFFERENTIATE INTENT | 53.9 | HIGH |
| 38 | attahiyat lillahi wa salawatu meaning | 4 | 0 | 19.5 | United Kingdom | `/blog/attahiyat-full-arabic-english-tashahhud` | PROTECT | 53.4 | MEDIUM |
| 39 | wazifa in english | 4 | 0 | 9.5 | India | `/blog/what-is-wazifa-in-islam` | PROTECT | 53.4 | MEDIUM |
| 40 | barakallah meaning in english | 8 | 0 | 7.5 | India | `/blog/barakallah-meaning` | PROTECT | 53.3 | MEDIUM |
| 41 | bismillah meaning | 64 | 0 | 47.2 | Ireland | `/blog/bismillah-meaning-in-english` | CONTENT REFRESH | 53.3 | HIGH |
| 42 | quran 2:201 rabbana atina fid dunya hasanatan | 8 | 0 | 8.6 | United States | `/blog/rabbana-atina-fid-dunya` | PROTECT | 53.3 | MEDIUM |
| 43 | attahiyat lillahi | 14 | 0 | 17.1 | Norway | `/blog/attahiyat-full-arabic-english-tashahhud` | PROTECT | 53.0 | HIGH |
| 44 | how to say attahiyat | 3 | 0 | 12.7 | United Kingdom | `/blog/attahiyat-full-arabic-english-tashahhud` | PROTECT | 53.0 | MEDIUM |
| 45 | online quran classes | 28 | 0 | 95.8 | United States | `/locations/online-quran-classes-usa` | DIFFERENTIATE INTENT | 52.9 | HIGH |
| 46 | best quran classes for kids in australia | 6 | 0 | 91.0 | Australia | `/locations/online-quran-classes-australia` | CLUSTER SUPPORT | 52.7 | MEDIUM |
| 47 | quran class | 6 | 0 | 87.8 | Canada | `/locations/online-quran-classes-canada` | DIFFERENTIATE INTENT | 52.7 | MEDIUM |
| 48 | quran online courses | 6 | 0 | 86.3 | Canada | `/locations/online-quran-classes-canada` | CLUSTER SUPPORT | 52.7 | MEDIUM |
| 49 | barakallahu khair meaning | 5 | 0 | 7.0 | India | `/blog/barakallah-meaning` | PROTECT | 52.4 | MEDIUM |
| 50 | quran classes | 22 | 0 | 81.2 | United States | `/locations/online-quran-classes-usa` | DIFFERENTIATE INTENT | 52.4 | HIGH |

---

## 37. Top 50 Blog Opportunities

Blog-served queries only, confidence ≥ MEDIUM.

| # | Query | Impr | Clicks | Pos | Country | Serving page | Action | Score | Conf |
|---|---|---|---|---|---|---|---|---|---|
| 1 | barakallah meaning | 669 | 0 | 7.1 | India | `/blog/barakallah-meaning` | CTR OPTIMIZATION | 65.3 | HIGH |
| 2 | how to recite attahiyat | 53 | 0 | 7.9 | Nigeria | `/blog/attahiyat-full-arabic-english-tashahhud` | CTR OPTIMIZATION | 62.9 | HIGH |
| 3 | attahiyat full text | 37 | 1 | 9.7 | Sweden | `/blog/attahiyat-full-arabic-english-tashahhud` | PROTECT | 62.0 | HIGH |
| 4 | barak allah meaning | 92 | 0 | 7.9 | India | `/blog/barakallah-meaning` | CTR OPTIMIZATION | 61.1 | HIGH |
| 5 | barakallah means | 85 | 0 | 7.8 | Pakistan | `/blog/barakallah-meaning` | CTR OPTIMIZATION | 61.0 | HIGH |
| 6 | barak allah means | 25 | 0 | 8.1 | India | `/blog/barakallah-meaning` | CTR OPTIMIZATION | 58.4 | HIGH |
| 7 | aththahiyath in english | 5 | 0 | 7.8 | Sri Lanka | `/blog/attahiyat-full-arabic-english-tashahhud` | PROTECT | 58.1 | MEDIUM |
| 8 | how to recite tahiya | 4 | 0 | 8.5 | GHA | `/blog/attahiyat-full-arabic-english-tashahhud` | PROTECT | 57.7 | MEDIUM |
| 9 | attahiyatu | 7 | 0 | 9.6 | Denmark | `/blog/attahiyat-full-arabic-english-tashahhud` | PROTECT | 57.3 | MEDIUM |
| 10 | quran 2:201 rabbana atina fid-dunya hasanatan translation | 3 | 0 | 8.0 | United States | `/blog/rabbana-atina-fid-dunya` | PROTECT | 57.3 | MEDIUM |
| 11 | attahiyat | 208 | 1 | 11.7 | Sweden | `/blog/attahiyat-full-arabic-english-tashahhud` | PROTECT | 57.1 | HIGH |
| 12 | quran 2:201 rabbana atina fid dunya hasanah wa fil akhirat | 13 | 0 | 8.8 | United States | `/blog/rabbana-atina-fid-dunya` | PROTECT | 57.1 | HIGH |
| 13 | meaning of barakallah | 12 | 0 | 8.4 | India | `/blog/barakallah-meaning` | PROTECT | 56.9 | HIGH |
| 14 | attahiyat lillahi wa salawatu english | 5 | 0 | 13.2 | Denmark | `/blog/attahiyat-full-arabic-english-tashahhud` | PROTECT | 56.7 | MEDIUM |
| 15 | "أستغفر الله" means "i seek forgiveness from allah" | 9 | 0 | 9.6 | United States | `/blog/astaghfirullah-meaning` | PROTECT | 56.3 | MEDIUM |
| 16 | translation of attahiyat | 3 | 0 | 9.7 | UAE | `/blog/attahiyat-full-arabic-english-tashahhud` | PROTECT | 55.9 | MEDIUM |
| 17 | attahiyat text | 13 | 0 | 9.6 | Germany | `/blog/attahiyat-full-arabic-english-tashahhud` | PROTECT | 55.7 | HIGH |
| 18 | at tahiyyatu lillahi in english | 5 | 0 | 6.6 | India | `/blog/attahiyat-full-arabic-english-tashahhud` | PROTECT | 55.3 | MEDIUM |
| 19 | full attahiyat in english | 5 | 0 | 9.2 | India | `/blog/attahiyat-full-arabic-english-tashahhud` | PROTECT | 55.3 | MEDIUM |
| 20 | surah masura in english | 4 | 0 | 8.5 | UAE | `/blog/dua-e-masura-arabic-english` | PROTECT | 54.9 | MEDIUM |
| 21 | attahiyat in english | 67 | 0 | 13.8 | Pakistan | `/blog/attahiyat-full-arabic-english-tashahhud` | PROTECT | 54.7 | HIGH |
| 22 | dua for sajdah tilawat | 15 | 0 | 8.8 | India | `/blog/sajdah-tilawat-dua-arabic-english` | PROTECT | 54.6 | HIGH |
| 23 | how to say attahiyat in salah | 6 | 0 | 12.2 | United States | `/blog/attahiyat-full-arabic-english-tashahhud` | PROTECT | 54.1 | MEDIUM |
| 24 | what is wazifa in english | 6 | 0 | 6.5 | India | `/blog/what-is-wazifa-in-islam` | PROTECT | 54.1 | MEDIUM |
| 25 | attahiyat lillahi wa salawatu meaning | 4 | 0 | 19.5 | United Kingdom | `/blog/attahiyat-full-arabic-english-tashahhud` | PROTECT | 53.4 | MEDIUM |
| 26 | wazifa in english | 4 | 0 | 9.5 | India | `/blog/what-is-wazifa-in-islam` | PROTECT | 53.4 | MEDIUM |
| 27 | barakallah meaning in english | 8 | 0 | 7.5 | India | `/blog/barakallah-meaning` | PROTECT | 53.3 | MEDIUM |
| 28 | bismillah meaning | 64 | 0 | 47.2 | Ireland | `/blog/bismillah-meaning-in-english` | CONTENT REFRESH | 53.3 | HIGH |
| 29 | quran 2:201 rabbana atina fid dunya hasanatan | 8 | 0 | 8.6 | United States | `/blog/rabbana-atina-fid-dunya` | PROTECT | 53.3 | MEDIUM |
| 30 | attahiyat lillahi | 14 | 0 | 17.1 | Norway | `/blog/attahiyat-full-arabic-english-tashahhud` | PROTECT | 53.0 | HIGH |
| 31 | how to say attahiyat | 3 | 0 | 12.7 | United Kingdom | `/blog/attahiyat-full-arabic-english-tashahhud` | PROTECT | 53.0 | MEDIUM |
| 32 | barakallahu khair meaning | 5 | 0 | 7.0 | India | `/blog/barakallah-meaning` | PROTECT | 52.4 | MEDIUM |
| 33 | how to read attahiyat in salah | 10 | 0 | 10.2 | UAE | `/blog/attahiyat-full-arabic-english-tashahhud` | PROTECT | 52.3 | HIGH |
| 34 | sajdah tilawat dua | 19 | 0 | 7.6 | Sri Lanka | `/blog/sajdah-tilawat-dua-arabic-english` | PROTECT | 52.1 | HIGH |
| 35 | barakallah | 268 | 0 | 8.9 | India | `/blog/barakallah-meaning` | CTR OPTIMIZATION | 52.0 | HIGH |
| 36 | barakallah khair meaning | 4 | 0 | 7.5 | India | `/blog/barakallah-meaning` | PROTECT | 52.0 | MEDIUM |
| 37 | subhanallah meaning | 32 | 0 | 43.4 | Ireland | `/blog/subhanallah-meaning` | CONTENT REFRESH | 51.7 | HIGH |
| 38 | barakallah meaning in arabic | 3 | 0 | 9.7 | India | `/blog/barakallah-meaning` | PROTECT | 51.6 | MEDIUM |
| 39 | dua for sajdah tilawah | 7 | 0 | 7.9 | UAE | `/blog/sajdah-tilawat-dua-arabic-english` | PROTECT | 51.6 | MEDIUM |
| 40 | quran 2:201 rabbana atina fid-dunya hasanah wa fil-akhirat | 3 | 0 | 8.3 | United States | `/blog/rabbana-atina-fid-dunya` | PROTECT | 51.6 | MEDIUM |
| 41 | quran 2:201 rabbana atina fid-dunya hasanatan wa fil akhir | 3 | 0 | 10.0 | United States | `/blog/rabbana-atina-fid-dunya` | PROTECT | 51.6 | MEDIUM |
| 42 | quran 2:201 rabbana atina fid-dunya hasanatan wa fil-akhir | 3 | 0 | 8.7 | United States | `/blog/rabbana-atina-fid-dunya` | PROTECT | 51.6 | MEDIUM |
| 43 | rabbana atina fid dunya hasanah wa fil akhirati hasanah wa | 3 | 0 | 9.3 | United States | `/blog/rabbana-atina-fid-dunya` | PROTECT | 51.6 | MEDIUM |
| 44 | sajda tilawat dua | 5 | 0 | 9.6 | Canada | `/blog/sajdah-tilawat-dua-arabic-english` | PROTECT | 51.0 | MEDIUM |
| 45 | sajadah tilawah dua | 19 | 0 | 7.5 | Sri Lanka | `/blog/sajdah-tilawat-dua-arabic-english` | PROTECT | 50.7 | HIGH |
| 46 | atayatu lilahi in english | 4 | 0 | 10.8 | Saudi Arabia | `/blog/attahiyat-full-arabic-english-tashahhud` | PROTECT | 50.6 | MEDIUM |
| 47 | barakullah | 4 | 0 | 9.8 | Sweden | `/blog/barakallah-meaning` | PROTECT | 50.6 | MEDIUM |
| 48 | attahiyat in arabic text | 7 | 0 | 10.0 | Pakistan | `/blog/attahiyat-full-arabic-english-tashahhud` | PROTECT | 50.1 | MEDIUM |
| 49 | attahiyat with english translation | 7 | 0 | 17.0 | Pakistan | `/blog/attahiyat-full-arabic-english-tashahhud` | PROTECT | 50.1 | MEDIUM |
| 50 | labbaik meaning | 30 | 0 | 13.7 | India | `/blog/labbaik-allahumma-labbaik` | PROTECT | 50.1 | HIGH |

**Read this table with §26.1 in mind.** Almost every row is a variant absorbed by one of two pages, and
almost every row has zero clicks at a top-10 position. The correct action for the overwhelming majority
is **PROTECT** — keep the ranking, keep the answer accurate, and do not build more pages for variants
that an existing page already wins. The two `CONTENT REFRESH` rows (`bismillah meaning` at position 47.2,
`subhanallah meaning` at 43.4) are the exceptions: same query type, but ranking far below the sibling
pages that reach position 7–9, which suggests a page-level rather than query-level problem.

---

## 38. Top Geographic Opportunities

| Rank | Market | Evidence | Recommended action |
|---|---|---|---|
| 1 | **New Zealand** | 40% commercial query share (highest on site); hub at pos 16–17 | Deepen existing hub, add internal links. No new URLs. |
| 2 | **Ireland** | `noorani qaida near me` **pos 1** via Dublin city page; hub at zero impressions | Link Dublin → Ireland hub; the hub is currently carried entirely by the city page |
| 3 | **Norway** | `islamic classes near me` pos 10; `tajweed kurs` **pos 1** | Investigate the Norwegian-language thread; link hub → Tajweed course |
| 4 | **Netherlands** | pos 10 and 12 on two near-me variants | Strengthen hub, link to kids service |
| 5 | **USA (female-teacher niche only)** | pos 16–17 on three variants, largest market | Strengthen `/female-quran-teacher-online`; ignore USA head terms |
| 6 | **Singapore** | 12 commercial queries, `quran classes singapore` pos 18, adults query pos 50 | Watch; low-cost improvements only |
| 7 | Saudi Arabia | four near-me queries at pos 12 | Already served; maintain |
| — | Australia, Canada | 80–98 on all commercial terms | **No action** — competitive markets, no reachable position |
| — | Germany, Finland, Italy, Portugal, Switzerland, Austria, Belgium, Japan | **zero commercial queries each** | **Do not build** |
| — | UK, USA head terms | densest local provision, worst positions | Not a low-competition opportunity |

---

## 39. Top AI-Answer Opportunities

Ranked by observed impressions among queries with HIGH AI-answer potential and position ≤ 30.

| Query | Impr | Pos | Clicks | Page |
|---|---|---|---|---|
| barakallah meaning | 669 | 7.1 | 0 | `/blog/barakallah-meaning` |
| barak allah meaning | 92 | 7.9 | 0 | `/blog/barakallah-meaning` |
| barakallah means | 85 | 7.8 | 0 | `/blog/barakallah-meaning` |
| attahiyat in english | 67 | 13.8 | 0 | `/blog/attahiyat-full-arabic-english-tashahhud` |
| how to recite attahiyat | 53 | 7.9 | 0 | `/blog/attahiyat-full-arabic-english-tashahhud` |
| labbaik meaning | 30 | 13.7 | 0 | `/blog/labbaik-allahumma-labbaik` |
| barak allah means | 25 | 8.1 | 0 | `/blog/barakallah-meaning` |
| rabbana atina in english | 18 | 21.6 | 0 | `/blog/rabbana-atina-fid-dunya` |
| labbaik allahumma labbaik meaning | 13 | 19.6 | 0 | `/blog/labbaik-allahumma-labbaik` |
| attahiyat meaning | 12 | 25.1 | 0 | `/blog/attahiyat-full-arabic-english-tashahhud` |
| how to read attahiyat in salah | 10 | 10.2 | 0 | `/blog/attahiyat-full-arabic-english-tashahhud` |
| "أستغفر الله" means "i seek forgiveness…" | 9 | 9.6 | 0 | `/blog/astaghfirullah-meaning` |
| rizq ki dua in english | 8 | 21.6 | 0 | `/blog/dua-for-rizq-arabic-english` |
| dua masura in english | 8 | 21.9 | 0 | `/blog/dua-e-masura-arabic-english` |
| ইনশাআল্লাহ in english | 7 | 13.1 | 0 | `/blog/inshallah-meaning-in-english` |
| what is wazifa in english | 6 | 6.5 | 0 | `/blog/what-is-wazifa-in-islam` |
| inshallah khair meaning | 6 | 10.8 | 0 | `/blog/inshallah-meaning-in-english` |

**Every row has zero clicks.** These are citation and entity-authority assets, not traffic assets. The
correct goal is to remain the accurate, extractable source — and to measure that by impressions held and
brand recognition, not by sessions. Multi-script coverage (Arabic, Bengali) reaching top-15 is a genuine
strength worth protecting.

---

## 40. 90-Day Content Execution Priority

Ordered by evidence strength, not by ambition. Nothing here has been implemented.

### Next 7 days — structural, no new content

| # | Action | Why | Evidence |
|---|---|---|---|
| 1 | Resolve commercial cannibalization: differentiate the 26 country hubs from `/online-quran-classes` by market specificity | Canonical page ranks 105.8, worse than two hubs | §34.1 — 8 URLs on one query |
| 2 | Link `/online-quran-classes/dublin` (pos 1) → Ireland hub (0 impressions) | Position-1 page is a dead end | §38 |
| 3 | Internal links into `/locations/online-quran-classes-new-zealand` | Best geographic ranking on site (16–17) | §28.2 |
| 4 | Strengthen `/female-quran-teacher-online` | Best commercial position (16–17, USA) on three variants | §26.2 |
| 5 | Diagnose Tajweed and Hifz indexation | Tajweed = 1 impression total; hifz median pos 77 | Cluster table |

### Next 30 days — targeted depth, no expansion

| # | Action | Why |
|---|---|---|
| 6 | Deepen NZ hub with genuine local specificity (school year, NZST/NZDT, honest online-only framing) | Four specialist competitors; generic city lists are table stakes |
| 7 | Same for Norway, Netherlands, Ireland | Tier A markets already at pos 1–12 |
| 8 | Investigate `/blog/bismillah-meaning-in-english` (pos 47.2) and `/blog/subhanallah-meaning` (pos 43.4) | Sibling pages of the same type reach 7–9; the gap is page-level |
| 9 | Resolve `noorani qaida games` three-way overlap | Three URLs, all top-6 |
| 10 | Publish **one** access-problem article as a test | Demand is UNKNOWN; test before committing to a programme |

### Next 90 days — measure, then decide

| # | Action | Why |
|---|---|---|
| 11 | Re-pull GSC after a clean window and re-run this analysis | 68 days is too short for confident decisions |
| 12 | Evaluate the access-problem test on clicks, not impressions | The only honest measure for content whose value is a visit |
| 13 | Decide on the 10 zero-impression country hubs and 27 zero-impression city pages | Consolidate or improve; do not add more |
| 14 | Re-measure the low-density thesis | 24 impressions is directional, not conclusive |

### Explicitly not doing, and why

| Not doing | Reason |
|---|---|
| New Zealand city pages (Hamilton etc.) | Three NZ city pages exist with zero impressions; no NZ city appears in any query |
| URL migration to `/new-zealand/online-quran-classes` | Would discard the site's best geographic ranking |
| New country hubs | 10 of 26 existing hubs have zero impressions |
| Pages for spelling/transliteration variants | One page already absorbs ~30 variants at position 7 |
| Title/meta rewrites on the definition cluster | Brand CTR is 10.26% at the same position; the problem is query type, not titles |
| Commercial CTAs on definition content | No purchase intent; prohibited by brief and workspace rules |
| Building out Islamic demographics content | Median position 10 but no commercial pathway |
| Traffic or ranking forecasts | 68 days and 103 clicks cannot support a projection |

---

## Evidence rule compliance

Per §21.24, every claim in this report is one of:

- **OBSERVED FACT** — measured directly from GSC or the codebase, reproducible from
  `seo-reports/gsc-keyword-universe-raw.json`
- **INFERENCE** — reasoning from those facts, labelled as such
- **INSUFFICIENT DATA** — stated plainly where evidence does not exist

Areas explicitly returned as **INSUFFICIENT DATA**: search volume for any keyword; keyword difficulty;
CPC; competitor backlink profiles; competitor keyword footprints; AI citation presence; content decay
(§21.16 — three months of data on a growing site cannot distinguish decay from growth); demand for any
query the property has never surfaced for.

No search volume, difficulty score, CTR benchmark, traffic forecast or ranking projection appears
anywhere in this report.

---

## LLMS.TXT IMPLEMENTATION

### Previous State

**OBSERVED:** `public/llms.txt` existed (reviewed 2026-07-28), ~130 lines, with solid anti-hallucination notes and no fabricated student counts.

**OBSERVED:** Primary entity name was “NoorPath Academy”; schema already lists alternateName “NoorPath Online Quran Academy”.

### Problems Found

**OBSERVED:**

- Non-canonical course URLs (`/courses/tajweed-classes-online`, `/courses/hifz-program-online`) redirect via `src/proxy.ts`.
- City discovery text pointed at thin templates later marked noindex (Cork, Wellington, Oslo, etc.).
- Flat dump of many country hubs; no curated blog knowledge hierarchy.
- Manual file with no generator → stale-URL risk.

### New Architecture

**DECISION:** Curated catalog → deterministic generator → `public/llms.txt` + validator.

**IMPLEMENTED:**

- `scripts/seo/lib/llms-catalog.mjs`
- `scripts/seo/generate-llms-txt.mjs`
- `scripts/seo/validate-llms-txt.mjs`
- `npm run seo:llms` / `npm run seo:llms:validate`
- Docs: `docs/seo/LLMS-TXT-ARCHITECTURE.md`, `docs/seo/LLMS-TXT-AUDIT.md`

### Brand Entity Structure

**IMPLEMENTED:**

```text
NoorPath
→ NoorPath Online Quran Academy
→ Online Quran Learning / Online Quran Classes
→ Courses (Qaida, Tajweed, Hifz, …)
→ Priority countries / indexable cities
```

Also notes site usage of “NoorPath Academy”. Canonical host: `https://www.noorpath.online` (apex redirects to www).

### Core Services

Tier-1 owners: `/online-quran-classes`, `/learn-quran-online`, kids/adults/beginners, teacher matching, female teacher, sisters, one-on-one, free trial, pricing.

### Course Structure

Canonical owners only: `/noorani-qaida`, `/courses/noorani-qaida-online`, `/learn-tajweed-online`, `/hifz-quran-online`, Arabic, Islamic studies, daily duas, `/courses`.

### Kids Structure

Service page + curated kids blog cluster (parent guide, teaching kids, female teacher, UK/USA kids guides, practice routines).

### Adult Structure

Adults service page + adult beginner / new Muslim / never-too-late guides.

### Country Structure

17 priority country hubs (UK, USA, Canada, Australia, NZ, Ireland, UAE, Qatar, Kuwait, Saudi Arabia, Germany, Netherlands, France, Sweden, Norway, Finland, Denmark). Other hubs remain via `/locations` only.

### City Structure

15 indexable cities only (London, Birmingham, Manchester, Bradford, Leicester, Glasgow, New York, Houston, Chicago, Dallas, Los Angeles, Toronto, Dubai, Dublin, Auckland). Thin noindex templates excluded.

### New Zealand Coverage

**OBSERVED:** Country hub included. Auckland included. Wellington/Christchurch excluded (noindex templates). Hamilton not invented.

### Blog Knowledge Structure

Curated clusters: online learning, kids, beginners/adults, Tajweed & reading, Hifz, Islamic references, source-led research assets (~44 posts). Not a full blog dump.

### URL Selection Rules

Explicit catalog; forbid redirect paths; www-only; indexable cities only; verify against prerender/sitemap.

### AI-Readable Content Strategy

Short factual notes + authoritative links. Accuracy notes prohibit ranking manipulation and unsupported trust claims. Limited-local-access section uses neutral wording.

### Stale Information Removed

Redirect course URLs; thin city examples; Academy-only primary naming without preferred descriptive identity.

### Validation Results

**VALIDATED** (`npm run seo:llms:validate`, local `.next`):

- Total URLs: 115
- NoorPath URLs: 108
- Valid: 108
- Broken: 0
- Redirects: 0
- Non-canonical host: 0
- Forbidden redirect paths: 0
- Missing prerender: 0
- Catalog mismatches: 0

### Files Changed

- `public/llms.txt` (regenerated)
- `scripts/seo/lib/llms-catalog.mjs` (new)
- `scripts/seo/generate-llms-txt.mjs` (new)
- `scripts/seo/validate-llms-txt.mjs` (new)
- `package.json` (scripts)
- `docs/seo/LLMS-TXT-ARCHITECTURE.md` (new)
- `docs/seo/LLMS-TXT-AUDIT.md` (new)
- `NOORPATH-SEO-AI-AUTHORITY-IMPLEMENTATION-REPORT.md` (this section)
- `seo-reports/llms-txt-validation.json` (generated)

### Maintenance Architecture

Edit catalog → `npm run seo:llms` → `npm run seo:llms:validate` after build. Do not hand-maintain `public/llms.txt` long-term.

---

## LLMS.TXT IMPLEMENTATION

### Previous State

**OBSERVED:** `public/llms.txt` existed (reviewed 2026-07-28), ~130 lines, with solid anti-hallucination notes and no fabricated student counts.

**OBSERVED:** Primary entity name was “NoorPath Academy”; schema already lists alternateName “NoorPath Online Quran Academy”.

### Problems Found

**OBSERVED:**

- Non-canonical course URLs (`/courses/tajweed-classes-online`, `/courses/hifz-program-online`) redirect via `src/proxy.ts`.
- City discovery text pointed at thin templates later marked noindex (Cork, Wellington, Oslo, etc.).
- Flat dump of many country hubs; no curated blog knowledge hierarchy.
- Manual file with no generator → stale-URL risk.

### New Architecture

**DECISION:** Curated catalog → deterministic generator → `public/llms.txt` + validator.

**IMPLEMENTED:**

- `scripts/seo/lib/llms-catalog.mjs`
- `scripts/seo/generate-llms-txt.mjs`
- `scripts/seo/validate-llms-txt.mjs`
- `npm run seo:llms` / `npm run seo:llms:validate`
- Docs: `docs/seo/LLMS-TXT-ARCHITECTURE.md`, `docs/seo/LLMS-TXT-AUDIT.md`

### Brand Entity Structure

**IMPLEMENTED:**

```text
NoorPath
→ NoorPath Online Quran Academy
→ Online Quran Learning / Online Quran Classes
→ Courses (Qaida, Tajweed, Hifz, …)
→ Priority countries / indexable cities
```

Also notes site usage of “NoorPath Academy”. Canonical host: `https://www.noorpath.online` (apex redirects to www).

### Core Services

Tier-1 owners: `/online-quran-classes`, `/learn-quran-online`, kids/adults/beginners, teacher matching, female teacher, sisters, one-on-one, free trial, pricing.

### Course Structure

Canonical owners only: `/noorani-qaida`, `/courses/noorani-qaida-online`, `/learn-tajweed-online`, `/hifz-quran-online`, Arabic, Islamic studies, daily duas, `/courses`.

### Kids Structure

Service page + curated kids blog cluster (parent guide, teaching kids, female teacher, UK/USA kids guides, practice routines).

### Adult Structure

Adults service page + adult beginner / new Muslim / never-too-late guides.

### Country Structure

17 priority country hubs (UK, USA, Canada, Australia, NZ, Ireland, UAE, Qatar, Kuwait, Saudi Arabia, Germany, Netherlands, France, Sweden, Norway, Finland, Denmark). Other hubs remain via `/locations` only.

### City Structure

15 indexable cities only (London, Birmingham, Manchester, Bradford, Leicester, Glasgow, New York, Houston, Chicago, Dallas, Los Angeles, Toronto, Dubai, Dublin, Auckland). Thin noindex templates excluded.

### New Zealand Coverage

**OBSERVED:** Country hub included. Auckland included. Wellington/Christchurch excluded (noindex templates). Hamilton not invented.

### Blog Knowledge Structure

Curated clusters: online learning, kids, beginners/adults, Tajweed & reading, Hifz, Islamic references, source-led research assets (~44 posts). Not a full blog dump.

### URL Selection Rules

Explicit catalog; forbid redirect paths; www-only; indexable cities only; verify against prerender/sitemap.

### AI-Readable Content Strategy

Short factual notes + authoritative links. Accuracy notes prohibit ranking manipulation and unsupported trust claims. Limited-local-access section uses neutral wording.

### Stale Information Removed

Redirect course URLs; thin city examples; Academy-only primary naming without preferred descriptive identity.

### Validation Results

**VALIDATED** (`npm run seo:llms:validate`, local `.next`):

- Total URLs: 115
- NoorPath URLs: 108
- Valid: 108
- Broken: 0
- Redirects: 0
- Non-canonical host: 0
- Forbidden redirect paths: 0
- Missing prerender: 0
- Catalog mismatches: 0

### Files Changed

- `public/llms.txt` (regenerated)
- `scripts/seo/lib/llms-catalog.mjs` (new)
- `scripts/seo/generate-llms-txt.mjs` (new)
- `scripts/seo/validate-llms-txt.mjs` (new)
- `package.json` (scripts)
- `docs/seo/LLMS-TXT-ARCHITECTURE.md` (new)
- `docs/seo/LLMS-TXT-AUDIT.md` (new)
- `NOORPATH-SEO-AI-AUTHORITY-IMPLEMENTATION-REPORT.md` (this section)
- `seo-reports/llms-txt-validation.json` (generated)

### Maintenance Architecture

Edit catalog → `npm run seo:llms` → `npm run seo:llms:validate` after build. Do not hand-maintain `public/llms.txt` long-term.

---

## AI VISIBILITY ENTERPRISE PASS (11 Aug 2026)

**OBSERVED:** Need stronger citation readiness for “learn Quran online / online Quran classes” style intents.

**DECISION:** Expand semantic topic→resource maps + discovery + entity schema — not keyword stuffing or ranking instructions.

**IMPLEMENTED:**
- `public/llms.txt` + `public/llms-full.txt` with topic intents
- Layout alternate links + metadata types
- Organization `knowsAbout` + alternate names + Online Quran Classes catalog entry
- robots `host` canonical

**VALIDATED:** `npm run seo:llms:validate` — 0 broken URLs; catalog match; build PASS.

Details: `seo-reports/ai-visibility-enterprise-2026-08-11.md`
