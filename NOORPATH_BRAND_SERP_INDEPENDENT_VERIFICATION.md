# NOORPATH_BRAND_SERP_INDEPENDENT_VERIFICATION.md

**Date:** 2026-08-19  
**Mode:** Independent forensic verification (no code changes, no deploy, no commit)  
**Baseline under review:** `NOORPATH_BRAND_SERP_FORENSIC_REPORT.md`  
**Stance:** Verify every material claim; confirm, refine, or correct with primary evidence.

---

## 1. EXECUTIVE VERDICT

**NoorPath Academy did not experience a proven technical deindexing or brand-signal removal.**

Independently verified:

- Production homepage is **200**, **index,follow**, self-canonical, prerendered, robots/sitemap healthy.
- Current live `<title>` **includes** the brand (`NoorPath Academy | …`).
- The recalled title `Learn Quran Online … (2026)` is the **pre-`d84c0d6`** title, not today’s HTML.
- GSC shows branded impressions still attach primarily to `https://www.noorpath.online/`.
- Average position for `noorpath` was **never a stable exclusive #1–#3 in GSC averages**; July 2026 control window averaged **~6.4**.

**Primary diagnosis (refined):**

This is primarily **brand/entity collision + SERP presentation**, not a metadata accident that “deleted” NoorPath.

1. **`noorpath.net`** — live Islamic **apps** product also branded **NoorPath** (confirmed 200).  
2. **`noor-path.com`** — live site whose `<title>` literally says **“NoorPath Academy”** (confirmed 200) — direct academy-name collision.  
3. Recent commits **added** brand-first packaging; they did **not** strip brand from title/H1.  
4. Post-change GSC window is **too small** to call a ranking collapse.  
5. `#cta` fragment URLs steal some brand impressions (secondary hygiene issue).

**GO / NO-GO for emergency metadata rollback:** **NO-GO.**

---

## 2. VERIFIED FACTS

| Fact | Evidence |
|------|----------|
| Next.js 16.2.9 App Router | `package.json` |
| Live homepage HTTP 200 | curl 2026-08-19 |
| Live title brand-first | Production HTML |
| Live robots meta `index, follow` | Production HTML |
| Live canonical `https://www.noorpath.online` | Production HTML |
| No `X-Robots-Tag` | Response headers |
| robots.txt allows `/`, sitemap lists homepage | Live fetches |
| Pre-`d84c0d6` title was commercial-first | `git show d84c0d6^:src/app/page.tsx` |
| Pre-`d84c0d6` H1 was `Learn Quran Online` | same |
| Post-`d84c0d6` H1 is `NoorPath Academy` | git + live |
| `WebSite.name` changed `NoorPath` → `NoorPath Academy` | git `d84c0d6` |
| SearchAction removed in `1245c36`; absent live | git + live HTML |
| `noorpath.net` exists; apps brand “NoorPath” | live 200 |
| `noor-path.com` exists; titles as “NoorPath Academy” | live 200 |
| GSC brand clicks/impressions dominated by homepage `/` | GSC query×page |
| July control `noorpath` avg position **6.41** | GSC API |
| Pakistan dominates branded impressions | GSC country |

---

## 3. UNVERIFIED ASSUMPTIONS

| Assumption | Status |
|------------|--------|
| Exact current Google SERP rank for `noorpath` in a given country/device | **Unverified** — “Live SERP position cannot be independently verified in this environment.” |
| Google is currently rewriting the homepage title in SERP | **Partially evidenced historically** (repo note 2026-08-12); not re-verified live today |
| GBP Lahore campus category still conflicts | **Not re-audited live today**; prior report only |
| `WebSite.name` change *caused* position movement | **Not proven** (possible reprocessing only) |
| User’s memory of consistent #3 equals GSC average position | **Contradicted** by July GSC control (~6.4) |

---

## 4. GIT FORENSIC DIFF

### Commits

| Commit | Date | Role |
|--------|------|------|
| `d84c0d6` | 2026-08-12 | Brand SERP packaging (title/H1/WebSite.name) |
| `1245c36` | 2026-08-18 | Entity disambiguation (aliases, logo, SearchAction removal, FAQ) |

### Signal table

| Signal | `d84c0d6^` | `d84c0d6` | `1245c36` / HEAD | Class | + Effect | − Effect | Timing plausibility |
|--------|------------|-----------|------------------|-------|----------|----------|---------------------|
| Homepage title | `Learn Quran Online … (2026)` | `NoorPath Academy \| Online Quran Classes…` | same | **B** | Brand match | Temporary reprocessing | Yes |
| H1 | `Learn Quran Online` | `NoorPath Academy` | same | **B** | Brand on-page | None material | Yes |
| Description | no leading brand | starts `NoorPath Academy —` | same | **B** | Brand | Minimal | Low |
| Canonical | `https://www.noorpath.online` | unchanged | unchanged | **D** | — | — | No |
| robots | index/follow | unchanged | unchanged | **D** | — | — | No |
| `WebSite.name` | **`NoorPath`** | **`NoorPath Academy`** | same | **B/C** | Disambiguate vs apps | Site-name reprocess; bare-token association shift | **Yes (best on-site candidate)** |
| Org `name` | `NoorPath Academy` | same | same | A/B | Stable | — | No |
| `alternateName` | short list | + domain | + spaced aliases | **B/C** | Match `noor path` | Mild dilution | Possible |
| SearchAction | blog?q= fake search | still present | **removed** | **B low** | Correctness | Unlikely brand loss | Low |
| Logo | favicon.svg | same | icon-512.png | **B low+** | Valid logo | Brief image reprocess | Low |
| twitter.site | `@NoorPathAcademy` | present | **removed** | **A** | — | Twitter only | No |
| Sitemap about/contact/founder priority | lower | — | raised | **A/B low** | Recrawl hint | Noise | Low |

**Baseline correction:** Earlier report’s implication that H1 was already brand-led before packaging is **incorrect**. H1 changed in `d84c0d6` from commercial to brand.

---

## 5. LIVE HTML FORENSIC

Fetched `https://www.noorpath.online/` (2026-08-19):

| Check | Observed |
|-------|----------|
| Status | **200** |
| Prerender | `x-nextjs-prerender: 1` |
| Title | `NoorPath Academy \| Online Quran Classes for Kids & Families — Free Trial` |
| Description | Brand-first NoorPath Academy string |
| Robots meta | `index, follow` |
| X-Robots-Tag | none |
| Canonical | `https://www.noorpath.online` |
| H1 | `NoorPath Academy` + subtitle Learn Quran Online… |
| JSON-LD | EducationalOrganization, WebSite, FAQPage, ItemList, + other page nodes (BreadcrumbList/Course/EducationalApplication present in HTML set) |
| Org name | NoorPath Academy |
| WebSite name | NoorPath Academy |
| SearchAction | **absent** |
| Logo | `/icon-512.png` |
| sameAs | Trustpilot, GBP maps kgmid, FB, IG, TikTok, YouTube (6) |
| Founder | Org references `founder#person` **@id**, but **Person node not embedded on homepage** |
| Malformed JSON-LD | none detected |
| robots.txt | Allow `/`, Disallow `/api/` |
| sitemap | Homepage present, 200 |

---

## 6. GSC BRAND QUERY ANALYSIS

Property: `sc-domain:noorpath.online` (fresh API, 2026-08-19)

### Comparable windows

| Window | Query | Clicks | Imp | CTR | Pos |
|--------|-------|--------|-----|-----|-----|
| **Jul control** 07-01→07-28 | noorpath | 7 | 76 | 9.2% | **6.41** |
| | noor path academy | 3 | 27 | 11.1% | 4.67 |
| | noor path | 0 | 9 | 0% | 8.67 |
| **Before change** 07-15→08-11 | noorpath | 7 | 51 | 13.7% | **4.84** |
| | noor path academy | 3 | 34 | 8.8% | **3.85** |
| | noor path | 0 | 17 | 0% | 8.47 |
| **After (short)** 08-12→08-18 | noorpath | 0 | 10 | 0% | **6.00** |
| | noor path | 0 | 11 | 0% | **3.55** |
| | noor path academy | 0 | 3 | 0% | **3.33** |
| **Cross 2w** 08-05→08-18 | noorpath | 1 | 23 | 4.4% | **4.39** |

### Interpretation rules applied

- Do **not** call 7-day after-window a collapse (n=10 impressions).  
- July already averaged ~6.4 for `noorpath` → “always top 3 in GSC” is **false**.  
- Cross window including change still shows `noorpath` ~**4.4**.  
- Spaced/`academy` variants often **stronger** than bare `noorpath` → ambiguity pattern.  
- `noorpath.online` / `www.noorpath.online` / exact `noorpath academy` (no spaces): **no rows** in tested equals filters for 07-15→08-18 (navigational domain query underreported or unused).

### Device / country (07-15→08-18, query `noorpath`)

- Mobile pos **3.85** (26 imp) vs Desktop **6.03** (34 imp) — composition can feel like “top 3” on phone.  
- Country: **Pakistan** dominates (41/ ~61 imp, all 7 clicks).

### Decision-tree result

Homepage remains indexed + branded impressions exist → **not deindexing**.  
Bare token weaker/more contested than `… academy` → **entity ambiguity likely**.  
Title still contains brand → **brand signal not removed**.

---

## 7. ENTITY COLLISION ANALYSIS

| Entity | Live? | What it is | Brand string | Collision severity |
|--------|-------|------------|--------------|--------------------|
| **noorpath.online** (you) | Yes | Online Quran academy | NoorPath Academy / NoorPath | — |
| **noorpath.net** | Yes (200) | Islamic **apps** (prayer/Quran/Sunnah) | Title ends with **NoorPath** | **HIGH** for bare `noorpath` |
| **noor-path.com** | Yes (200) | Quran/Islamic studies site | Title: **“… with NoorPath Academy”** | **HIGH** for `noorpath academy` |

**Baseline refinement:** Prior report emphasized `noorpath.net`. Independent check shows **`noor-path.com` is an equal or worse academy-name collision** because it uses the exact phrase **NoorPath Academy**.

Live Google ranks: **cannot be independently verified here.**

---

## 8. TITLE / SITE-NAME ANALYSIS

| Item | Assessment |
|------|------------|
| Current title vs bare `noorpath` | Brand present; reasonable. Not keyword-stuffed. |
| Current title vs commercial queries | Still descriptive (Online Quran Classes…) |
| `WebSite.name` NoorPath → NoorPath Academy | Aligns with Google site-name uniqueness vs apps; **can** trigger temporary site-name reprocessing (**POSSIBLE**, not proven causal) |
| Should title contain NoorPath? | **Yes** — and it already does. Do not revert to commercial-only. |
| Should title be only `NoorPath`? | **No** — worsens collision with apps; reduces commercial clarity |

**Do not conclude** WebSite.name change caused ranking loss without a 28-day post-change GSC window (not yet available; today is 2026-08-19, change was 2026-08-12).

---

## 9. SCHEMA GRAPH ANALYSIS

**Strengths**

- Org `@id` ↔ WebSite `publisher`/`about` linked.  
- DisambiguatingDescription names official domain and non-affiliation.  
- alternateName includes short brand + domain.  
- Logo is concrete PNG dimensions.

**Weaknesses / risks**

| Issue | Class | Note |
|-------|-------|------|
| Homepage references `founder#person` without embedding Person node | **B low** | Dangling `@id` until `/founder` crawled/merged |
| alternateName includes spaced forms + long form | **C** | Helps `noor path`; mild dilution |
| `#cta` not schema, but GSC fragment URL competition | **B** | Brand SERP dilution to non-canonical fragment |
| Extra types on page (Breadcrumb/Course/EducationalApplication) | **A/B** | Not proven harmful; graph is busy |

**Schema intent classification:** Mostly **A/D hybrid** — **strengthening + correctly disambiguating**, with **mild C ambiguity** from alias breadth and external collisions that schema cannot erase.

---

## 10. INTERNAL BRAND SIGNAL ANALYSIS

| Surface | Signal |
|---------|--------|
| Nav | Product IA; brand via logo/name patterns |
| Footer | NoorPath Academy |
| Homepage H1/title | NoorPath Academy |
| About | Explicit official domain + non-affiliation FAQ |
| Founder | Ties person to academy + www.noorpath.online |
| Contact | Contact NoorPath Academy |
| academyFacts | `ACADEMY_NAME = "NoorPath Academy"` |

Spaced “Noor Path Academy” appears mainly in disambiguation FAQ/schema — intentional, not stuffing.

---

## 11. OFF-SITE SIGNAL ANALYSIS

| Signal | Observed |
|--------|----------|
| Trustpilot | `trustpilot.com/review/noorpath.online` in sameAs (score 4.0 / 4 reviews in facts) |
| Social | FB/IG/TikTok/YouTube in sameAs |
| GBP | `google.com/maps?kgmid=/g/11npsdjwdh` in sameAs — **category/campus story not re-verified live today** |
| Competing domains | Confirmed live (see §7) |

**Off-site recommendation (no code):** Audit GBP listing text/category against online-only story; monitor citations that point to `noor-path.com` vs `noorpath.online`.

---

## 12. ROOT CAUSE RANKING

| ID | Root Cause | Likelihood | Confidence | Evidence For | Evidence Against | Impact | Action |
|----|------------|------------|------------|--------------|------------------|--------|--------|
| R1 | Entity collision (`noorpath.net` + **`noor-path.com` using “NoorPath Academy”**) | **HIGH** | **HIGH** | Live competitor HTML; GSC bare token weaker than academy variants historically | Can’t verify today’s SERP order | High | Off-site disambiguation; monitor |
| R2 | Perception error (remembering commercial title / mobile top-3 vs GSC avg) | **HIGH** | **HIGH** | Live title≠recalled; July GSC avg 6.4; mobile 3.85 | User may have true local SERP screenshots not available here | Med | Align expectations with data |
| R3 | Google site-name/title rewrite / SERP packaging | **MEDIUM** | **MED** | 2026-08-12 in-repo SERP note | Not re-verified live today | Med | Screenshot protocol |
| R4 | Temporary reprocessing after `WebSite.name`/title packaging | **MEDIUM** | **LOW-MED** | Timing aligns with `d84c0d6` | After-window too small; cross-window still ~4.4 | Low-Med | Wait 28 days |
| R5 | `#cta` fragment cannibalization of brand impressions | **MEDIUM** | **HIGH** | GSC: `noorpath`→`/#cta` 29 imp @ pos 13.9 | Not homepage deindex | Low-Med | Later: prefer clean URLs in CTAs (needs approval) |
| R6 | Metadata removed brand / broke indexability | **LOW** | **HIGH** | Contradicted by git+live | — | — | Do nothing code-wise |
| R7 | SearchAction removal caused brand loss | **LOW** | **MED-HIGH** | Correctness fix; SearchAction wasn’t real search | Hard to disprove tiny effect | Low | Keep removed |
| R8 | Alias expansion diluted entity | **LOW-MED** | **LOW** | More aliases | Helps spaced queries; GSC `noor path` improved in short after window | Low | Freeze aliases |

---

## 13. RISK MATRIX

| Action | Risk if done now | Risk if not done |
|--------|------------------|------------------|
| Revert title to commercial-only | **HIGH** — removes brand lead; fights wrong problem | Low |
| Mass schema alias adds | **HIGH** — more ambiguity | Low |
| Emergency robots/canonical edits | **HIGH** — unbroken systems | Low |
| Monitor 28 days | Low | Miss true regression if one emerges |
| GBP cleanup | Low | Continued KG conflict |
| Fix `#cta` internal links later | Low | Continued fragment dilution |

---

## 14. WHAT NOT TO CHANGE

Unless new evidence proves breakage:

- Homepage URL, blog URLs  
- Canonical host / apex→www / https redirects  
- robots.txt allow `/`  
- Sitemap architecture  
- Existing indexed URLs  
- Brand-first homepage title (do **not** revert)  
- Review/rating honesty constraints  
- No keyword-stuffing “NoorPath NoorPath…”  

---

## 15. SAFE ACTION PLAN

### A. DO NOTHING / MONITOR (code)

- Leave `page.tsx` title/description/H1 as-is for **≥28 days post-`d84c0d6`** (through ~2026-09-09).  
- Leave `WebSite.name = NoorPath Academy`.  
- Freeze further `alternateName` growth.  
- Weekly GSC export: brand queries + query×page.

### B. SAFE OFF-SITE ACTIONS

1. Incognito SERP screenshots (same country): `noorpath`, `noor path`, `noorpath academy`, `noorpath.online`.  
2. GBP audit: online tutoring vs campus/Lahore religious school mismatch.  
3. Mentally separate competitors: apps (`noorpath.net`) vs other academy (`noor-path.com`).  
4. Prefer navigational brand messaging: **www.noorpath.online** / **NoorPath Academy**.

### C. CODE CHANGES ONLY IF JUSTIFIED — **NOT IMPLEMENTED**

See §16.

---

## 16. CODE CHANGE PLAN — NOT IMPLEMENTED

Only if evidence thresholds met later:

### Change C1 — Reduce brand fragment dilution (threshold: `#cta` still >10% of brand impressions after 28 days)

| Field | Value |
|-------|-------|
| File | Components linking to `/#cta` (e.g. homepage CTAs / nav patterns) |
| Current | Links to `https://www.noorpath.online/#cta` appearing in GSC |
| Proposed | Point trial CTAs to `/free-quran-classes-online` or `/#cta` only as in-page UX without promoting fragment in crawlable chrome where avoidable |
| Why | GSC shows brand query impressions on `/#cta` at worse positions |
| Expected impact | Consolidate brand impressions to `/` or stable trial URL |
| Risk | Low UX; measure CTR |
| Rollback | Restore prior hrefs |
| Evidence threshold | 28-day GSC query×page |

### Change C2 — Embed or drop dangling founder `@id` on homepage graph (threshold: Rich Results / entity issues)

| Field | Value |
|-------|-------|
| File | `organizationSchema.ts` and/or homepage JSON-LD |
| Current | `founder: { "@id": ".../founder#person" }` without Person node on `/` |
| Proposed | Either include minimal Person node in graph **or** keep founder only on `/founder` |
| Why | Cleaner entity graph |
| Expected impact | Low; hygiene |
| Risk | Low |
| Rollback | Revert schema hunk |
| Evidence threshold | Validator warnings or KG mislinkage |

### Change C3 — Title rollback — **REJECTED unless new proof**

Reverting to commercial-only title fails evidence threshold (brand was missing from title before packaging).

### Change C4 — Restore `WebSite.name: "NoorPath"` — **NOT recommended now**

Would increase collision with `noorpath.net` apps. Only consider after 28-day data + SERP screenshots show Academy site-name failure.

---

## 17. EXACT VALIDATION COMMANDS

```bash
# Live homepage
curl -sS -D - -o /tmp/np.html -A 'Mozilla/5.0' https://www.noorpath.online/ | head
python3 - <<'PY'
import re, pathlib
h=pathlib.Path('/tmp/np.html').read_text('utf-8','replace')
print(re.search(r'<title[^>]*>(.*?)</title>',h,re.I|re.S).group(1))
print(re.search(r'rel=["\']canonical["\'][^>]*href=["\']([^"\']+)',h,re.I).group(1))
print(re.search(r'name=["\']robots["\'][^>]*content=["\']([^"\']+)',h,re.I).group(1))
PY

curl -sS https://www.noorpath.online/robots.txt | head
curl -sS https://www.noorpath.online/sitemap.xml | head

# Git title history
git show d84c0d6^:src/app/page.tsx | rg 'absolute:'
git show d84c0d6:src/app/page.tsx | rg 'absolute:'

# Competitors
curl -sS -L https://noorpath.net/ | rg -o '<title>[^<]+'
curl -sS -L https://noor-path.com/ | rg -o '<title>[^<]+'
```

GSC UI: Performance → filter queries `noorpath` / `noor path` / `noor path academy` → compare **28 days ending 2026-08-11** vs **28 days ending ~2026-09-09**; add Page dimension.

---

## 18. FINAL GO / NO-GO DECISION

| Decision | Result |
|----------|--------|
| Emergency SEO code rollback | **NO-GO** |
| Treat as deindexing incident | **NO-GO** |
| Treat as entity-collision + presentation issue | **GO** |
| Monitor ≥28 days post-`d84c0d6` | **GO** |
| Off-site GBP + SERP screenshot protocol | **GO** |
| Implement schema/title PR now | **NO-GO** (await evidence thresholds) |

---

## Baseline report scorecard

| Baseline claim | Independent result |
|----------------|--------------------|
| Indexability healthy | **Confirmed** |
| Title became brand-first in `d84c0d6` | **Confirmed** |
| Recalled title is old | **Confirmed** |
| Metadata did not remove brand | **Confirmed** |
| External collision primary | **Confirmed & strengthened** (`noor-path.com` academy title) |
| GSC after-window collapse | **Rejected as conclusive** (sample too small; July already ~6.4) |
| H1 already brand before packaging | **Corrected** — H1 changed in `d84c0d6` |
| SearchAction removal major cause | **Rejected** |

---

**STOP.** No code modified. Awaiting explicit approval before any remediation PR.
