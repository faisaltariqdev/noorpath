# NoorPath Academy — Google Ads Campaign Plan (UK + USA Focus)

**Site:** https://www.noorpath.online  
**Goal:** Free trial form submissions → WhatsApp follow-up → paying enrollment  
**Pricing:** $29 / $49 / $79 per month  
**Last verified:** All landing URLs checked against live Next.js routes  

---

## Quick start checklist

- [ ] Google Ads account + billing set up
- [ ] Conversion action: **Trial form submit** on `#cta` pages
- [ ] GA4 linked (`NEXT_PUBLIC_GA_ID` on Vercel)
- [ ] WhatsApp +923124877906 — reply within 1 hour during ad hours
- [ ] Start with **$15–20/day** total for 14 days, then scale winners

---

## Budget split (recommended)

| Campaign | Daily budget | % of total | Priority |
|----------|-------------|------------|----------|
| UK — Kids Quran Classes | $6 | 30% | #1 start here |
| USA — Kids Quran Classes | $6 | 30% | #1 start here |
| USA — Learn Quran Online (Adults) | $3 | 15% | Week 2 |
| UK — Learn Quran Online (Adults) | $3 | 15% | Week 2 |
| Germany — Kids (test) | $2 | 10% | Week 3 |

**Example:** $20/day ≈ $600/month → expect 8–15 trial forms if landing pages + follow-up are strong.

---

## UTM template (use on every ad Final URL)

```
?utm_source=google&utm_medium=cpc&utm_campaign={campaign}&utm_content={adgroup}&utm_term={keyword}
```

**Example Final URL (UK Kids):**
```
https://www.noorpath.online/online-quran-classes-for-kids?utm_source=google&utm_medium=cpc&utm_campaign=uk_kids_quran&utm_content=uk_kids_core&utm_term=online+quran+classes+for+kids
```

Add `#cta` after UTM if you want scroll-to-form:
```
https://www.noorpath.online/online-quran-classes-for-kids?utm_source=google&utm_medium=cpc&utm_campaign=uk_kids_quran#cta
```

---

## Campaign structure overview

```
Account: NoorPath Academy
├── Campaign 1: UK | Kids Quran Classes        [Search] [Maximize Conversions or Manual CPC]
│   ├── Ad Group: UK Kids — Core Keywords
│   ├── Ad Group: UK Kids — Best / Top
│   └── Ad Group: UK Kids — Location Intent
├── Campaign 2: USA | Kids Quran Classes       [Search]
│   ├── Ad Group: USA Kids — Core Keywords
│   ├── Ad Group: USA Kids — Best / Top
│   └── Ad Group: USA Kids — Location Intent
├── Campaign 3: UK | Adult Learn Quran         [Search]
│   └── Ad Group: UK Adults — Beginners
├── Campaign 4: USA | Adult Learn Quran        [Search]
│   └── Ad Group: USA Adults — Beginners
└── Campaign 5: DE | Kids Quran (Test)         [Search]
    └── Ad Group: Germany Kids — English
```

**Campaign settings (all):**
- Network: **Search only** (uncheck Display, uncheck Search Partners for first 2 weeks)
- Locations: See geo tables below
- Language: **English**
- Bid strategy: Start **Manual CPC** $1.50–2.50, switch to Maximize Conversions after 15+ conversions
- Ad rotation: **Optimize**

---

## Geo targeting

### Campaign 1 — UK Kids
**Target:** United Kingdom  
**Optional bid +20% cities:** London, Birmingham, Manchester, Bradford, Leicester, Leeds  

### Campaign 2 — USA Kids
**Target:** United States  
**Optional bid +20% states/metro:** Texas, California, New York, Illinois, Michigan, New Jersey, Virginia  

### Campaign 3 & 4 — UK / USA Adults
Same geo as kids campaigns for that country.

### Campaign 5 — Germany test
**Target:** Germany  
**Cities +20%:** Berlin, Hamburg, Munich, Frankfurt, Cologne  

### Exclude (all campaigns)
- Pakistan, Bangladesh, India, Indonesia, Egypt, Nigeria (reduces cheap non-converting clicks at $29+ pricing)

---

## Landing page mapping (verified URLs)

| User intent | Landing page | Never send to |
|-------------|--------------|---------------|
| Kids classes (generic) | `/online-quran-classes-for-kids` | Homepage |
| Kids + UK intent | `/locations/online-quran-classes-uk` | `/blog/*` |
| Kids + USA intent | `/locations/online-quran-classes-usa` | `/pricing` alone |
| Adults learn from zero | `/learn-quran-online` | `/courses` |
| Adults (alternate) | `/online-quran-classes-for-adults` | Homepage |
| Female teacher request | `/female-quran-teacher-online` | — |
| Hifz program | `/hifz-quran-online` | — |
| Tajweed | `/learn-tajweed-online` | — |
| Free trial emphasis | `/free-quran-classes-online` | — |
| Academy / trust | `/online-quran-academy` | — |
| Germany kids | `/locations/online-quran-classes-germany` | — |

---

# CAMPAIGN 1: UK — Kids Quran Classes

**Default Final URL:**
`https://www.noorpath.online/online-quran-classes-for-kids?utm_source=google&utm_medium=cpc&utm_campaign=uk_kids_quran#cta`

**Location ad group Final URL:**
`https://www.noorpath.online/locations/online-quran-classes-uk?utm_source=google&utm_medium=cpc&utm_campaign=uk_kids_quran#cta`

### Ad Group: UK Kids — Core Keywords
**Match type:** Phrase + Exact (Broad only after 30 days data)

| Keyword |
|---------|
| online quran classes for kids |
| quran classes for kids online |
| online quran lessons for kids |
| quran tutor for kids online |
| kids quran classes online |
| learn quran online for kids |
| online quran teacher for kids |
| 1 on 1 quran classes for kids |
| quran classes for children online |

### Ad Group: UK Kids — Best / Top
| Keyword |
|---------|
| best online quran classes for kids |
| best quran teacher for kids uk |
| top online quran academy for kids |

### Ad Group: UK Kids — Location Intent
| Keyword |
|---------|
| online quran classes uk |
| quran classes for kids uk |
| online quran classes london |
| quran teacher uk online |
| online quran classes birmingham |

### Sample RSA (Responsive Search Ad)

**Headlines (max 30 chars each — pick 10–15):**
1. Free Quran Trial for Kids
2. 1-on-1 Kids Quran Classes
3. Certified Tutors | Free Trial
4. Online Quran for Kids UK
5. Ages 4+ | Live Zoom Classes
6. No Credit Card Required
7. Book Free 30-Min Class
8. UK Timezone Tutors
9. Female Teachers Available
10. From $29/Month | Free Trial
11. NoorPath Academy — Kids
12. Weekly Progress Reports
13. After-School Slots Available
14. Ijazah-Certified Tutors
15. Start This Week — Free Trial

**Descriptions (max 90 chars each — pick 4):**
1. Live 1-on-1 Quran classes for kids ages 4–12. Free 30-min trial. UK timezone tutors.
2. Certified tutors, Noorani Qaida, Tajweed & duas. Parent reports every week. Book free trial.
3. NoorPath Academy — 12,000+ families worldwide. Flexible UK evening slots. No payment for trial.
4. Private Zoom lessons — not group classes. Female tutors for daughters. Sibling discounts available.

---

# CAMPAIGN 2: USA — Kids Quran Classes

**Default Final URL:**
`https://www.noorpath.online/online-quran-classes-for-kids?utm_source=google&utm_medium=cpc&utm_campaign=usa_kids_quran#cta`

**Location ad group Final URL:**
`https://www.noorpath.online/locations/online-quran-classes-usa?utm_source=google&utm_medium=cpc&utm_campaign=usa_kids_quran#cta`

### Ad Group: USA Kids — Core Keywords
| Keyword |
|---------|
| online quran classes for kids |
| quran classes for kids online |
| online quran lessons for kids |
| quran tutor for kids |
| kids quran classes online |
| learn quran online for kids |
| online quran teacher for kids |
| quran classes for children |

### Ad Group: USA Kids — Best / Top
| Keyword |
|---------|
| best online quran classes for kids |
| best online quran academy for kids |
| top quran teacher online for kids |

### Ad Group: USA Kids — Location Intent
| Keyword |
|---------|
| online quran classes usa |
| quran classes for kids usa |
| online quran classes texas |
| online quran teacher usa |
| learn quran online usa kids |

### Sample RSA headlines (USA-specific swaps)
- Online Quran for Kids USA
- EST/PST Timezone Tutors
- Muslim Families Across USA
- (Use same core headlines from Campaign 1 otherwise)

---

# CAMPAIGN 3: UK — Adult Learn Quran

**Final URL:**
`https://www.noorpath.online/learn-quran-online?utm_source=google&utm_medium=cpc&utm_campaign=uk_adults_quran#cta`

**Alternate URL (A/B test):**
`https://www.noorpath.online/online-quran-classes-for-adults?utm_source=google&utm_medium=cpc&utm_campaign=uk_adults_quran#cta`

### Ad Group: UK Adults — Beginners
| Keyword |
|---------|
| learn quran online |
| learn quran online for adults |
| quran classes for adults online |
| online quran classes for adults |
| learn to read quran online |
| quran for adults beginners |
| learn quran from scratch |
| online quran lessons for adults |
| learn quran online uk |

### Sample RSA headlines
1. Learn Quran Online — Adults
2. Never Too Late to Start
3. Free Trial — No Arabic Needed
4. 1-on-1 Adult Quran Classes
5. Start With Noorani Qaida
6. Private Lessons on Zoom
7. UK Evening Time Slots
8. Certified Tutors | Free Trial
9. From Zero to Reading Quran
10. Book Free 30-Min Lesson

---

# CAMPAIGN 4: USA — Adult Learn Quran

**Final URL:**
`https://www.noorpath.online/learn-quran-online?utm_source=google&utm_medium=cpc&utm_campaign=usa_adults_quran#cta`

### Ad Group: USA Adults — Beginners
| Keyword |
|---------|
| learn quran online |
| learn quran online for adults |
| quran classes for adults online |
| online quran classes for adults |
| learn to read quran online |
| quran for adult beginners |
| learn quran from scratch |
| learn quran online usa |
| online quran lessons for adults |

---

# CAMPAIGN 5: Germany — Kids (Test)

**Final URL:**
`https://www.noorpath.online/locations/online-quran-classes-germany?utm_source=google&utm_medium=cpc&utm_campaign=de_kids_quran#cta`

### Ad Group: Germany Kids — English
| Keyword |
|---------|
| online quran classes for kids |
| quran classes for kids online |
| online quran classes germany |
| quran teacher germany online |
| learn quran online germany |
| online quran classes berlin |

---

# Negative keywords (account-level — add all)

Apply to **all campaigns** to block wasted spend:

```
free pdf
free download
jobs
job
salary
career
hiring
vacancy
course free download
mp3
video only
youtube
app only
translation only
meaning only
wallpaper
games
game
worksheet only
printable only
madrassa near me
mosque near me
near me
school near me
```

**Phrase match negatives (kids campaigns):**
```
for adults only
university
degree
scholarship
```

---

# Ad extensions (set at account or campaign level)

### Sitelinks
| Text | URL |
|------|-----|
| Free Trial Class | `/free-quran-classes-online#cta` |
| Kids Classes | `/online-quran-classes-for-kids#cta` |
| Pricing Plans | `/pricing` |
| Female Tutors | `/female-quran-teacher-online#cta` |

### Callout extensions
- Free 30-Minute Trial
- No Credit Card Required
- Ijazah-Certified Tutors
- 1-on-1 Live Zoom Classes
- UK & US Timezone Slots
- Female Teachers Available
- Weekly Progress Reports
- From $29/Month

### Structured snippets
**Types:** Courses  
**Values:** Noorani Qaida, Tajweed, Hifz, Arabic, Islamic Studies, Daily Duas

### Call extension (optional)
+923124877906 — only if you can answer WhatsApp/calls during ad hours.

---

# Conversion tracking setup

### Primary conversion: Trial form submit
1. Google Ads → Goals → Conversions → New → Website
2. Use Google tag OR import from GA4 event
3. Recommended GA4 event name: `generate_lead` or form submit on `/online-quran-classes` CTA

### Secondary (optional): WhatsApp click
Track clicks on `wa.me/923124877906` as micro-conversion.

### Do NOT optimize for
- Page views
- Time on site
- Bounce rate

---

# 14-day launch schedule

| Day | Action |
|-----|--------|
| 1 | Launch Campaign 1 (UK Kids) + Campaign 2 (USA Kids) only |
| 1–3 | Check search terms daily — add negatives |
| 4 | Pause keywords with 50+ clicks, 0 conversions |
| 7 | Review: CPA per trial; increase budget on winner country |
| 8 | Launch Campaign 3 + 4 (Adults) if kids CPA < $40/trial |
| 14 | Launch Campaign 5 (Germany) with $2/day if UK/USA profitable |
| 14+ | Scale winning campaign by 20% every 3 days max |

---

# KPI targets

| Metric | Good | Fix if worse |
|--------|------|--------------|
| CTR | > 4% | Rewrite ads |
| CPC (UK/USA) | $1.50–3.50 | Lower bids, tighter keywords |
| Click → Trial form | > 5% | Fix landing page / speed |
| Trial → Paying student | > 25% | Faster WhatsApp follow-up |
| Cost per trial | < $35 | Pause bad ad groups |
| Cost per paying student | < $120 | Acceptable at $49/month plan (payback ~2.5 months) |

---

# WhatsApp follow-up script (after form submit)

```
Assalamu alaikum [Name]!

Thank you for booking a free Quran trial with NoorPath Academy 🌙

I'm [Your Name] from NoorPath. We'd love to schedule your child's 30-minute free class.

Quick questions:
1. Child's age?
2. Best time (UK/US timezone)?
3. Boy or girl (for tutor preference)?

We have slots this week — reply anytime!

NoorPath Academy
www.noorpath.online
```

---

# Common mistakes to avoid

1. **Sending all ads to homepage** — always use mapped landing page above
2. **Broad match on day 1** — use Phrase + Exact first
3. **Pakistan/Bangladesh targeting** — low ROI at $29+ pricing
4. **No negative keywords** — budget burns in 48 hours
5. **Slow WhatsApp reply** — trials go cold after 2 hours
6. **Stopping ads after 3 days** — need 7–14 days minimum data

---

# File reference (NoorPath codebase)

| Asset | Path |
|-------|------|
| Kids landing page | `src/app/online-quran-classes-for-kids/page.tsx` |
| Adult landing page | `src/app/learn-quran-online/page.tsx` |
| Location pages | `src/app/locations/[slug]/page.tsx` |
| Location data | `src/data/locations.ts` |
| Pricing | `src/app/pricing/page.tsx` |
| CTA form | `src/components/CTAForm.tsx` |
| Keyword landing data | `src/lib/landingPageData.tsx` |

---

*Plan built for NoorPath Academy. All URLs verified against production routes. Update UTM campaign names to match your Google Ads naming.*
