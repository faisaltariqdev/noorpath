# NoorPath AI Search Map

**Built:** 11 August 2026
**Evidence base:** Google Search Console, `sc-domain:noorpath.online`, 2 June 2026 → 8 August 2026
**Companion files:** `noorpath-keyword-universe.csv`, `noorpath-topic-clusters.md`

---

## The finding this whole map is built on

**OBSERVED FACT.** Click-through rate by position, split by brand versus non-brand:

| Position band | Brand impressions | Brand CTR | Non-brand impressions | Non-brand CTR |
|---|---|---|---|---|
| 1–3 | 0 | — | 36 | 2.78% |
| **4–10** | **234** | **10.26%** | **1,748** | **0.29%** |
| 11–20 | 0 | — | 760 | 0.13% |
| 21–50 | 7 | 0.00% | 1,985 | 0.15% |
| 51+ | 5 | 0.00% | 2,988 | 0.07% |

Identical position band. **A 35× difference in CTR.**

**OBSERVED FACT.** The clearest single case: `barakallah meaning` — **669 impressions, average position
7.1, zero clicks.** Its sibling variants behave the same way: `barak allah meaning` (92i, pos 7.9, 0
clicks), `barakallah means` (85i, pos 7.8, 0 clicks), `barakallah` (268i, pos 8.9, 0 clicks). The page
`/blog/barakallah-meaning` has accumulated over 1,150 impressions at a top-10 position and has produced
**not one click**.

**OBSERVED FACT.** The only search appearance type GSC records for this property across its entire
history is `REVIEW_SNIPPET`, with 8 impressions. No FAQ rich result, no other enhanced appearance.

**INFERENCE.** These queries are being answered above the organic results — by AI Overviews, featured
snippets or knowledge panels. When a user asks what a two-word Arabic phrase means, the answer fits in
the SERP and the visit never happens. When a user searches for NoorPath by name, they intend to arrive
somewhere, and they click at 10%.

This is labelled inference because GSC does not expose AI Overview presence directly. But a 35× CTR gap
at the same position, concentrated entirely on definitional queries, is not explained by weak titles.

### What follows from it

Three things, and they set the whole strategy.

1. **Ranking more definitional content is close to worthless for traffic.** The site is already at
   position 7–9 for the biggest terms it holds and earns nothing. Producing more of the same would
   produce more of the same result.
2. **Do not "fix" this with title and meta rewrites.** The brief rightly warns against jumping to CTR
   optimisation before proving CTR is the problem. Here the evidence proves the opposite: the problem is
   that the query does not require a click. Rewriting the title of `/blog/barakallah-meaning` cannot
   change that.
3. **The value of this content is citation and entity recognition, not sessions.** That is a real,
   defensible goal — but it must be stated as such, and it must not be measured in clicks.

---

## What AI-answer optimisation is actually for here

The brief's own framing is the correct one: the objective is not to make an AI system rank NoorPath, it
is to give search and AI systems clear, verifiable evidence about what NoorPath is and what it teaches.

Given the CTR evidence above, that splits into two distinct jobs with different success measures.

| Job | Content | Success measure | Do NOT measure by |
|---|---|---|---|
| **A. Be the cited source** | Islamic reference cluster | brand mentions, citation presence, impressions held at top-10 | clicks |
| **B. Be the answer to a question that needs a provider** | Access-problem and service content | clicks, enquiries | impressions |

Job B is where new work should go, because it is the only one where a click is structurally necessary.

---

## Job A — Reference content already positioned for citation

These pages hold strong positions on definitional queries. The work here is **defensive and structural**:
keep the answer accurate and extractable, make the entity relationships explicit, and do not expect
traffic from it.

| Likely user question | Direct answer target | Authoritative page | Position | Impressions | Clicks |
|---|---|---|---|---|---|
| What does barakallah mean? | one-sentence meaning + usage + reply | `/blog/barakallah-meaning` | 7.1 | 669 | 0 |
| How do you recite attahiyat? | full text, transliteration, translation | `/blog/attahiyat-full-arabic-english-tashahhud` | 7.9 | 53 | 0 |
| What is attahiyat in English? | line-by-line translation | same | 13.8 | 67 | 0 |
| What is the dua for sajdah tilawat? | Arabic, transliteration, meaning | `/blog/sajdah-tilawat-dua-arabic-english` | 7.5 | 19 | 0 |
| What does labbaik mean? | meaning + Hajj context | `/blog/labbaik-allahumma-labbaik` | 13.7 | 30 | 0 |
| What is Quran 2:201 (rabbana atina)? | Arabic + translation + context | `/blog/rabbana-atina-fid-dunya` | 8.8 | 13 | 0 |
| What is wazifa in Islam? | definition + scope | `/blog/what-is-wazifa-in-islam` | 6.5 | 6 | 0 |
| What does astaghfirullah mean? | meaning + when said | `/blog/astaghfirullah-meaning` | 9.6 | 9 | 0 |
| What does inshallah mean? | meaning + usage | `/blog/inshallah-meaning-in-english` | 10.8 | 6 | 0 |

**A pattern worth protecting.** These pages already absorb very large numbers of transliteration and
spelling variants — `barakalla`, `barakkallah`, `barakullah`, `baraqallah`, `barakallahu khair`,
`aththahiyath`, `atayat`, `attahiyatu` — plus queries in **Arabic and Bengali script**
(`أستغفر الله meaning`, `ইনশাআল্লাহ in english`), all ranking top-15.

That is semantic matching working well. It also means **creating a page per variant would cannibalize a
page that already ranks at 7**. The single most important instruction for this cluster is to leave the
URL structure alone.

### Entities these pages should establish

Used naturally in prose, never listed or stuffed:

- **Reference pages:** the Arabic phrase, its transliteration, its English meaning, where in salah or
  daily life it is used, the related phrases a reader would naturally ask about next.
- **NoorPath as organisation:** online Quran academy, remote-only, one-to-one lessons, Noorani Qaida,
  Tajweed, Hifz, male and female tutors, free trial.

The honest connection between the two is weak, and should stay weak. A reader looking up what
"barakallah" means is not shopping for lessons. The workspace rules and the brief both prohibit forced
commercial CTAs, and the evidence gives no reason to break that.

---

## Job B — Access-problem questions, where a click is necessary

This is the genuine opportunity, and it comes directly from the underserved-learner thesis in the brief.

### The evidence that the thesis holds

**OBSERVED FACT.** Every "near me" style query where NoorPath currently sits inside the top 20:

| Position | Query | Market | Page |
|---|---|---|---|
| **1.0** | noorani qaida near me | Ireland | `/online-quran-classes/dublin` |
| 10.0 | islamic classes near me | Norway | `/locations/online-quran-classes-norway` |
| 10.0 | quran classes near me | Netherlands | `/locations/online-quran-classes-netherlands` |
| 12.0 | arabic and quran classes near me | Netherlands | `/locations/online-quran-classes-netherlands` |
| 12.0 | quran learning center near me | Saudi Arabia | `/locations/online-quran-classes-saudi-arabia` |
| 12.0 | quran learning for kids near me | Saudi Arabia | `/locations/online-quran-classes-saudi-arabia` |
| 12.2 | quran academy near me | Saudi Arabia | `/locations/online-quran-classes-saudi-arabia` |
| 16.0 | quran classes near me | New Zealand | `/locations/online-quran-classes-new-zealand` |

And the contrast: **`quran teacher near me` in the USA sits at position 87.5.**

**INFERENCE.** Where local provision is thin, the result set is thin, and NoorPath's existing pages reach
the first two pages with no targeted work. Where local provision is dense, they do not.

### Question patterns worth answering

These are the conversational forms of the access problem. **A caution on evidence:** the specific
long-form questions below have **no GSC impressions** — this property has never surfaced for them.
They are derived from the observed "near me" pattern and from live SERP inspection, and every one of
them is marked `UNKNOWN` demand in the CSV. They are hypotheses to test, not measured demand.

| Question | Why it is worth answering | Existing NoorPath page | Verdict |
|---|---|---|---|
| How can my child learn Quran if there is no madrasa nearby? | Live SERP is dominated by thin promotional pages from competing academies | none | **genuine gap** |
| How do online Quran classes actually work? | Necessary trust step before enquiry; click required | partially in `/online-quran-classes` | expand existing |
| What should parents look for in an online Quran teacher? | Buyer-education, natural bridge to `/our-tutors` | none | **genuine gap** |
| Can adults learn Quran from scratch? | `/online-quran-classes-for-adults` exists but sits at position 83.6 | `/online-quran-classes-for-adults` | strengthen existing |
| Can I request a female Quran teacher? | Best commercial position on the site (16–17, USA) | `/female-quran-teacher-online` | strengthen existing |
| How do lessons fit around the school week? | Recurs across markets; scheduling is the real objection | scattered across country hubs | consolidate |
| How long does Noorani Qaida take? | Already a published post; healthy cluster | `/blog/how-long-does-noorani-qaida-take` | protect |

**Quality gate applied.** Each of these passes the brief's §21.19 test: real intent, no existing NoorPath
page that satisfies it, no cannibalization risk, a natural commercial destination, and a click is
required to get the answer. Topics that failed the gate — definition variants, per-city New Zealand
pages, additional country hubs — are excluded and the reasons are recorded in `noorpath-topic-clusters.md`.

### Competitor position on these questions

**OBSERVED FACT** (live search, 11 August 2026). For "how can my child learn Quran if there is no madrasa
nearby", the results are almost entirely blog content published by competing online Quran academies —
alhamdofficial.com, altahoorquraninstitute.com, equranschool.com, naifcenter.org — plus one community
publisher, therevival.co.uk.

**OBSERVED FACT.** For "online quran classes new zealand", five specialist providers already rank,
including a dedicated `nzquran.academy` domain, plus allamalquraan.com, ilmulquran.com and
mishkahacademy.com. All of them name Auckland, Wellington, Christchurch and Hamilton.

**INFERENCE.** New Zealand is **not** an empty market — it is served by specialists. What separates them
is depth of specificity: the strongest competitor page references NCEA, the NZ school year, NZST/NZDT
clock changes and towns beyond the main four. Generic "we serve Auckland, Wellington, Christchurch"
copy is table stakes and will not differentiate.

This tempers the brief's framing. The New Zealand opportunity is real but it is a **quality** opportunity,
not an empty-field opportunity.

---

## Answer-block structure

Where a page genuinely benefits from it — Job B content, not the reference cluster — use:

**Quick Answer.** Two to four sentences that answer the question directly and completely.
**Detailed Explanation.** The reasoning and the caveats.
**Practical Steps.** What the reader does next.
**Who This Is For.** Honest scoping, including who it is *not* for.
**Common Questions.** Only questions a reader would actually ask.
**Related NoorPath Resources.** Contextual internal links.

Two constraints from the workspace rules that apply without exception: FAQ JSON-LD must match the visible
answers exactly, and no page may consist mainly of short answer blocks with no substance behind them.

---

## Commercial pathway

Only where intent genuinely supports it.

| Content | Natural destination | Justified? |
|---|---|---|
| Access-problem articles | `/online-quran-classes`, `/online-quran-classes-for-kids` | yes — reader is looking for a provider |
| "Choosing a teacher" content | `/our-tutors`, `/female-quran-teacher-online` | yes |
| Noorani Qaida guides | `/noorani-qaida` | yes — direct course match |
| Country hubs | `/pricing`, trial enquiry | yes |
| **Islamic reference / definitions** | **none** | **no** — no purchase intent; forcing a CTA here would be spam |

---

## How to measure this, honestly

| Job | Measure | Do not measure by |
|---|---|---|
| A — citation authority | brand query volume, impressions held at top-10, mentions in AI answers | clicks (structurally near-zero) |
| B — access-problem content | clicks, position on target queries, enquiries | impressions |
| Geographic | position on "near me" queries in low-density markets | number of pages published |

No traffic forecast is offered anywhere in this map. The property has 68 days of history and 103 clicks;
any projection from that base would be fabrication.
