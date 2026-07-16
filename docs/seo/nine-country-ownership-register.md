# Nine-Country SEO Ownership Register

Status: operational source of truth  
Current review date: 15 July 2026

This register assigns one canonical owner to each search intent. It governs briefs, internal links, schema, redirects, AI-answer modules and release approval. Market weighting controls annual effort, not duplicate page counts.

## Market weights

The annual country allocation must total exactly 100 effort points:

- United Kingdom: 40
- United States: 30
- United Arab Emirates: 10
- Canada: 8
- Australia: 5
- Germany: 3
- Qatar: 2
- Kuwait: 1
- Saudi Arabia: 1

Research, page depth, refresh work, conversion testing and market-specific outreach count toward a country. Shared work must be apportioned in the work log to the countries it materially supports; it must not become an unallocated tenth market.

## Global intent owners

- Brand and organization entity: `/`
- Global online Quran classes and academy intent: `/online-quran-classes`
- Location discovery: `/locations`
- Course discovery: `/courses`
- Pricing and plan intent: `/pricing`
- Trial-request intent: `/free-quran-classes-online`
- Organization information: `/about`
- Founder profile: `/founder`
- Tutor information: `/our-tutors`
- Safeguarding: `/safeguarding`
- Contact and corrections: `/contact`
- Editorial standards: `/editorial-policy`
- Accessibility: `/accessibility-statement`

The homepage remains global and must not own a country head term. The global classes page may summarise country availability but must not absorb country-specific scheduling, currency or city intent.

## Global service and audience owners

- Children: `/online-quran-classes-for-kids`
- Adults: `/online-quran-classes-for-adults`
- Complete beginners: `/online-quran-for-beginners`
- Learn/read Quran pathway: `/learn-quran-online`
- Quran teacher or tutor matching: `/quran-teacher-online`
- Female tutor preference: `/female-quran-teacher-online`
- Tajweed: `/learn-tajweed-online`
- Hifz: `/hifz-quran-online`
- Noorani Qaida: `/courses/noorani-qaida-online`
- Arabic language: `/courses/arabic-language-online`
- Islamic studies: `/courses/islamic-studies-online`
- Daily duas for children: `/courses/daily-duas-for-kids`

Only the listed owner may provide the complete commercial answer for its intent. Country and city pages may include a short regional summary and link to the owner. They must not become country-specific service clones.

## Country owners

- United Kingdom (`en-GB`): `/locations/online-quran-classes-uk`
- United States (`en-US`): `/locations/online-quran-classes-usa`
- United Arab Emirates (`en-AE`): `/locations/online-quran-classes-uae`
- Canada (`en-CA`): `/locations/online-quran-classes-canada`
- Australia (`en-AU`): `/locations/online-quran-classes-australia`
- Germany, English content (`en-DE`): `/locations/online-quran-classes-germany`
- Qatar (`en-QA`): `/locations/online-quran-classes-qatar`
- Kuwait (`en-KW`): `/locations/online-quran-classes-kuwait`
- Saudi Arabia (`en-SA`): `/locations/online-quran-classes-saudi-arabia`

Each country head term and its regional scheduling, spelling and billing-currency context belong to that country owner. A currency note is context, not a promise of local billing facilities or a local legal entity.

## City intent owners

City intent belongs only to `/online-quran-classes/{city}`. A city page is an online-service information page, not a branch, office, local tutor roster or in-person service claim.

Approved existing or upgrade-first ownership:

- United Kingdom: London, Birmingham, Manchester, Bradford, Leeds, Leicester and Luton.
- United States: New York, Houston and Chicago.
- United Arab Emirates: Dubai and Abu Dhabi.
- Canada: Toronto.
- Australia: Sydney and Melbourne.
- Qatar: Doha.
- Saudi Arabia: Riyadh and Jeddah.

Evidence-gated candidates are not approved URLs: Glasgow, Edinburgh, Los Angeles, Dallas, Atlanta, Sharjah, Vancouver, Calgary, Brisbane, Berlin, Munich, Kuwait City and Makkah. A candidate remains in research until every release gate below passes.

Each released city owner must link to exactly one country parent, may link to no more than two useful sibling cities, and must route service intent to two or three relevant global service owners.

## Informational and AI-answer ownership

One editorial URL must own each informational question. Before a brief is approved, record its primary question, canonical URL, primary commercial destination and two related editorial pages.

Current Noorani Qaida ownership split:

- Interactive curriculum and product-reference intent: `/noorani-qaida`
- Live Noorani Qaida class and enrolment intent: `/courses/noorani-qaida-online`
- Traditional-method editorial overview: `/blog/noorani-qaida-complete-guide`
- Arabic alphabet editorial overview: `/blog/arabic-alphabet-for-kids`

The interactive hub may link to the course and editorial owners, but it must not duplicate their full commercial or historical answer.

Approved future pillar owners:

- Practice and progress: `/blog/quran-practice-and-progress-guide`
- Recitation improvement: `/blog/how-to-improve-quran-recitation`
- Pronunciation troubleshooting: `/blog/quran-pronunciation-troubleshooting`
- Curriculum and lesson planning: `/blog/quran-curriculum-and-lesson-planning`
- Learning-method comparisons: `/blog/quran-learning-method-comparisons`
- Online class setup: `/blog/online-quran-class-setup`
- Class checklists: `/blog/online-quran-class-checklists`
- Quran learning glossary: `/blog/quran-learning-glossary`
- Arabic alphabet for beginners: `/blog/arabic-alphabet-for-beginners`
- Tajweed terminology: `/blog/tajweed-rules-glossary`
- Hifz revision scheduling: `/blog/hifz-revision-schedule`

AI-answer ownership follows canonical ownership:

- Organization identity and official contacts: homepage, About, Founder and Contact pages according to their assigned scope.
- How online classes work: `/online-quran-classes`.
- Cost and plans: `/pricing`.
- Trial process: `/free-quran-classes-online`.
- Tutor selection: `/quran-teacher-online`.
- Female tutor requests: `/female-quran-teacher-online`.
- Child safety: `/safeguarding`.
- Course definitions and service questions: the relevant global service owner.
- Country scheduling, language style and currency context: the relevant country owner.
- City scheduling and local online-service context: the relevant city owner.

Other pages may provide a concise summary and link to the owner. They must not reproduce a competing complete answer, FAQ set or structured-data answer.

## Required redirects

Implement and retain direct permanent redirects:

- `/online-quran-academy` → `/online-quran-classes`
- `/quran-lesson-online` → `/online-quran-classes`
- `/studying-quran-online` → `/learn-quran-online`
- `/courses/quran-classes-for-kids` → `/online-quran-classes-for-kids`
- `/courses/tajweed-classes-online` → `/learn-tajweed-online`
- `/courses/hifz-program-online` → `/hifz-quran-online`

Redirect sources must not appear in sitemaps, navigation, body links, CTAs, canonicals, hreflang, schema or `llms.txt`. Redirects must go directly to the final owner without chains.

## Forbidden duplicate patterns

Do not publish:

- Country-service clones such as `/learn-tajweed-online-uk`, `/female-quran-teacher-usa`, `/pricing/uae` or equivalent permutations.
- City pages created by swapping place names in a shared paragraph.
- Country versions of a universal article when the information need is unchanged.
- Multiple “best academy”, cost, tutor, kids, beginners, Tajweed or Hifz pages targeting the same primary question.
- LocalBusiness, branch, “near me”, local tutor, local review or in-person claims without verified evidence.
- German-language targeting until genuine German content and service support are available.
- FAQ or schema answers that are not visible and substantively answered on the page.
- Static rating, review-count, credential, outcome or availability claims without a current verifiable source.

Use one shared Gulf-family guide for UAE, Qatar, Kuwait and Saudi Arabia unless search evidence proves a materially distinct country information need.

## Hreflang rules

Only equivalent country hubs and the global class page form a reciprocal cluster:

- `en-GB` → UK hub
- `en-US` → USA hub
- `en-AE` → UAE hub
- `en-CA` → Canada hub
- `en-AU` → Australia hub
- `en-DE` → Germany English hub
- `en-QA` → Qatar hub
- `en-KW` → Kuwait hub
- `en-SA` → Saudi Arabia hub
- `x-default` → `/online-quran-classes`

Every member must return the same complete set and use a self-referencing canonical. City pages are not alternates of one another and must not be cross-hreflanged. Hreflang must never be used to conceal substantially duplicated country pages.

## Internal-link rules

- Homepage links to the global classes owner, `/locations`, major global services and all nine country owners.
- Global classes owner links to all major services, pricing, tutors, safeguarding, `/locations` and all nine countries.
- Locations index links to all nine country owners in priority order before non-priority markets.
- Country owner links to the global parent, its approved cities, three to five relevant global services, one to three supporting guides, pricing and safeguarding.
- City owner links to its country parent, up to two sibling cities, two or three global services and the trial CTA.
- Editorial page links to exactly one primary commercial owner, two closely related editorial pages and relevant trust evidence.
- Use natural, varied regional anchors. Do not repeat one exact-match anchor across the site.
- Never link to a redirect source.

## Release gates

A new country-specific article requires:

1. A distinct information need not adequately served by the country hub or a shared guide.
2. A named canonical owner and forbidden-overlap check.
3. Unique source material and regional utility.
4. Human factual and editorial review.
5. Internal links that comply with this register.

A new city page requires:

1. Search Console or equivalent query evidence for that city.
2. A written unique-content brief with practical local utility.
3. Correct country parent and timezone context.
4. Self-canonical metadata and no cross-city hreflang.
5. No physical-presence, local-tutor or in-person implication.
6. Required parent, service and sibling links.
7. Indexability, schema and redirect checks.
8. Human factual and duplication review.

No page releases merely to satisfy a page-count target.

## Measurement KPIs

Review technical faults weekly and use 28-day comparison windows for SEO decisions. Measure by country and canonical owner:

- Non-brand impressions.
- Non-brand clicks.
- Click-through rate.
- Query-to-page ownership conflicts.
- Valid indexed canonical pages.
- Qualified trial requests.
- Completed trials.
- Relevant referring domains.
- Redirect-source impressions or links that still require cleanup.
- Hreflang and canonical errors.
- New-city gate pass/fail status.

Do not set invented performance guarantees. Baselines and targets must be recorded from verified analytics, Search Console and enrolment data before evaluation.

## Change control

Any proposed URL, redirect, canonical, hreflang or primary-query change must update this register before release. The reviewer must confirm that the change preserves one owner per intent and the exact annual market weighting.
