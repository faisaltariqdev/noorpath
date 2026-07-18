import type { CountryGuideContent } from "@/data/countryGuideTypes";

/**
 * Additive country guides for France, Netherlands and Sweden.
 * Unique long-form content for [slug] location pages — does not alter UK or other guides.
 */
export const countryGuidesFranceNetherlandsSweden: Record<string, CountryGuideContent> = {
  "online-quran-classes-france": {
    country: "France",
    title: "Online Quran Classes in France: A Guide for Muslim Families",
    description:
      "Practical guidance for families in France choosing live online Quran and Noorani Qaida lessons — CET evening schedules, USD/€ budgeting, safeguarding, and course fit.",
    reviewedDate: "19 July 2026",
    sections: [
      {
        id: "france-fit",
        heading: "Are online Quran classes suitable for Muslim families in France?",
        directAnswer:
          "Yes for households that want live remote Quran tuition from home, can join in English or Arabic as matched, and prefer a recurring evening CET/CEST slot. NoorPath is an online academy — not a French mosque branch — so suitability depends on the learner’s level, language comfort, and confirmed tutor availability.",
        paragraphs: [
          "France has Western Europe’s largest Muslim population, with deep community roots in Paris, Marseille, Lyon, Toulouse and Lille. Many parents already balance French schooling, extracurriculars and Islamic learning. Live one-to-one online classes remove travel time while keeping a fixed weekly appointment that children can treat as seriously as any other lesson.",
          "Legitimacy comes from transparent pricing, a free trial before payment, clear safeguarding expectations, and tutors matched to age and goal — not from claiming a physical French campus. Families should treat a country page as an invitation to enquire, then verify the proposed tutor, schedule and course during the trial.",
        ],
        bullets: [
          "Remote-only service — no claim of a NoorPath campus or in-person tutor in France.",
          "English or Arabic instruction may be requested; matching is confirmed after enquiry.",
          "Children, teenagers and adults should be placed by level, not only by age.",
          "A free trial is the correct place to test audio, rapport and placement before enrolment.",
        ],
      },
      {
        id: "cet-evening-windows",
        heading: "When can families in France take online Quran classes?",
        directAnswer:
          "Classes are commonly requested from about 4 PM to 10 PM CET (or CEST in summer) so lessons sit after the French school day. Weekend mornings or afternoons can also be requested. Exact times depend on tutor matching and are confirmed before a recurring slot starts.",
        paragraphs: [
          "A sustainable evening window matters more than the latest available hour. Younger children often focus better between late afternoon and early evening; older pupils may need later slots around homework. Families sharing one device should check conflicts with work calls or sibling lessons.",
          "France observes daylight-saving changes. Ask for the lesson time as it will appear on your local clock in winter and summer, and confirm what happens at the spring and autumn changes so the CET/CEST slot stays predictable.",
        ],
        table: {
          headers: ["Planning factor", "What to confirm"],
          rows: [
            ["Evening range", "Is a 4 PM–10 PM CET/CEST window realistic for this learner?"],
            ["School calendar", "How will exam weeks or holidays affect attendance?"],
            ["Clock changes", "Will the France local time stay fixed across CET/CEST?"],
            ["Device & space", "Is a quiet, lit space available at the agreed hour?"],
          ],
        },
      },
      {
        id: "courses-france",
        heading: "Which courses fit learners in France?",
        directAnswer:
          "Beginners usually start with Noorani Qaida; children who already read may continue Quran reading, Tajweed refinement or Hifz. Course choice should follow an honest assessment of current skills, not a course label alone.",
        paragraphs: [
          "Parents can explore structured paths such as Noorani Qaida online, kids’ online Quran classes, and published pricing before requesting a tutor. Internal links on this site show what each track covers; enrolment still depends on matching.",
          "Adults and teens in France often want discreet, respectful one-to-one lessons that do not require joining a large weekend group. Live correction of Arabic letters and Tajweed remains more effective than self-paced video alone when pronunciation accuracy matters.",
        ],
        bullets: [
          "Start with foundations if letter recognition or joining is still weak.",
          "Use Tajweed-focused sessions when the learner can already read continuously.",
          "Treat Hifz as new memorisation plus revision — not only more pages.",
          "Review current plans on the pricing page before budgeting.",
        ],
      },
      {
        id: "pricing-usd-eur-france",
        heading: "How should families in France read USD prices in euros (€)?",
        directAnswer:
          "NoorPath publishes and charges lesson plans in U.S. dollars (USD). Families budgeting in euros should convert the live USD amount using their bank or card rate. Any € figure is an orientation only — not a locked euro price list.",
        paragraphs: [
          "Compare like-for-like details: session length, sessions per month, one-to-one format, and family discounts. A lower headline fee can hide shorter lessons. When you see a Starter or Standard plan in USD on the pricing page, note an approximate euro (€) equivalent for your own household budget, then check the final card statement currency and fees.",
          "NoorPath does not publish a permanent EUR price table because exchange rates move. Your provider may add foreign-transaction fees. Confirm currency at checkout and keep written confirmation of the USD plan you selected.",
        ],
        table: {
          headers: ["What you see", "How to interpret it"],
          rows: [
            ["Published plan in USD", "Authoritative fee amount charged by NoorPath"],
            ["Your € estimate", "Personal conversion for budgeting — not a fixed offer"],
            ["Bank / card charge", "May differ slightly after FX and fees"],
            ["Family discounts", "Apply to published sibling rules when confirmed"],
          ],
        },
      },
      {
        id: "safety-legitimacy-france",
        heading: "How do online Quran classes stay safe and legitimate for families in France?",
        directAnswer:
          "Use academies that teach on known platforms (such as Zoom or Google Meet), allow parents to observe, share safeguarding expectations clearly, and confirm tutor identity before ongoing payment. A free trial should precede any long commitment.",
        paragraphs: [
          "Muslim parents in France rightly ask whether online Islamic education is serious and safe. Look for written progress habits, clear make-up policies, female-tutor options where requested, and a Parent Portal or equivalent updates when enrolled. Avoid services that demand large prepaid packages with no trial or refuse to explain who will teach after payment.",
          "NoorPath’s safeguarding page and tutor information explain how families can request preferences and raise concerns. Online delivery does not remove parental responsibility: keep devices in shared spaces for young children and agree household rules for cameras and chat.",
        ],
        bullets: [
          "Observe early lessons and keep a parent nearby for young learners.",
          "Confirm the continuing tutor matches the trial teacher when that matters to you.",
          "Read safeguarding guidance before enrolment.",
          "Use published channels for billing and schedule changes — not private tutor side chats.",
        ],
      },
      {
        id: "france-faq-block",
        heading: "France FAQ — scheduling, legitimacy and family life",
        directAnswer:
          "Short answers to the questions French Muslim families ask most often before starting online Quran classes.",
        paragraphs: [
          "These FAQs complement the site-wide FAQ block on this location page. They focus on France-specific legitimacy, school-week fit, and evening CET planning.",
        ],
        table: {
          headers: ["Question", "Short answer"],
          rows: [
            [
              "Are online Quran classes suitable for Muslim families in France?",
              "Yes when the learner can join live from home, the language match works, and a CET evening slot is confirmed after a trial.",
            ],
            [
              "Is this a recognised French religious institution?",
              "NoorPath is an online academy. Treat it as remote tutoring support; it does not replace local mosque community life or claim French state accreditation.",
            ],
            [
              "What times work after French school?",
              "Many families request roughly 4 PM–10 PM CET/CEST. Exact availability is confirmed during matching.",
            ],
            [
              "How do we budget if we think in euros?",
              "Use the published USD plan, convert to € with your bank for orientation, and confirm the charged currency at payment.",
            ],
          ],
        },
      },
    ],
  },

  "online-quran-classes-netherlands": {
    country: "Netherlands",
    title: "Online Quran Classes in the Netherlands: Family Planning Guide",
    description:
      "How Dutch Muslim families can plan live online Quran lessons around school, CET evenings, USD/€ costs, tutor trust and Noorani Qaida pathways.",
    reviewedDate: "19 July 2026",
    sections: [
      {
        id: "netherlands-fit",
        heading: "Are online Quran classes a good fit for families in the Netherlands?",
        directAnswer:
          "They can be a strong fit for Turkish, Moroccan, Surinamese and other Muslim households in Amsterdam, Rotterdam, The Hague, Utrecht and beyond who want structured one-to-one Quran learning without another weekly commute — provided English (or Arabic) instruction matches the learner and a CET slot is confirmed.",
        paragraphs: [
          "Dutch school days, club activities and travel across cities already fill the week. Online lessons keep Islamic learning consistent while parents supervise from home. The format is especially useful for families outside large mosque programmes or those who want private pacing for a shy or beginner child.",
          "Suitability is individual. A complete beginner needs Qaida foundations; a fluent reader may need Tajweed or Hifz structure. Ask for placement based on what the learner can actually recite, not only community expectations.",
        ],
        bullets: [
          "Online-only — no Dutch physical branch is implied.",
          "Evening CET/CEST requests commonly sit between about 4 PM and 10 PM local time.",
          "Female tutor preferences can be requested; availability is confirmed after matching.",
          "Use a free trial to validate attention span, audio quality and tutor rapport.",
        ],
      },
      {
        id: "dutch-school-week",
        heading: "How do online Quran classes fit the Dutch school week?",
        directAnswer:
          "Plan lessons after school or at weekends in CET/CEST, protect homework time, and keep sessions short enough that the learner stays attentive. Recurring appointments work better than irregular catch-up classes.",
        paragraphs: [
          "Many Dutch families find midweek evenings easier than late nights. Younger children often do well soon after arriving home and having a snack; older students may need a later window after homework. If two siblings enrol, stagger times so each child gets full attention.",
          "Public holidays and travel to family abroad can interrupt routines. Confirm make-up rules before enrolment so a missed week does not quietly erase progress.",
        ],
        table: {
          headers: ["Routine element", "Parent checklist"],
          rows: [
            ["After-school buffer", "Is there 30–45 minutes before the Quran slot for food and settling?"],
            ["Homework load", "Will exam weeks need a temporary shorter lesson?"],
            ["Siblings", "Are lesson times staggered on shared devices?"],
            ["Weekends", "Is a Saturday or Sunday slot more reliable than weeknights?"],
          ],
        },
      },
      {
        id: "courses-netherlands",
        heading: "Course pathways for learners in the Netherlands",
        directAnswer:
          "Most beginners begin with Noorani Qaida; kids’ programmes combine reading foundations with age-appropriate pacing; pricing pages show current USD plans so parents can budget before requesting a tutor.",
        paragraphs: [
          "Link your decision to demonstrated skill: letter recognition, joining, fluency on unfamiliar lines, or memorisation capacity. Internal course pages for Noorani Qaida and kids’ classes explain curricula; they do not guarantee a specific tutor until matching is complete.",
          "Parents who want bilingual home support can encourage practice in Dutch or a heritage language while leaving precise makharij correction to the tutor.",
        ],
        bullets: [
          "Review Noorani Qaida online for beginner structure.",
          "Use kids’ online Quran class pages for age-band expectations.",
          "Check the pricing page for monthly USD plans and sibling discounts.",
          "Ask during trial how home practice minutes should look each week.",
        ],
      },
      {
        id: "pricing-usd-eur-nl",
        heading: "USD pricing with euro (€) budgeting for Dutch families",
        directAnswer:
          "Lesson plans are published and charged in USD. Dutch households that budget in euros should convert the live USD fee for personal planning. NoorPath does not fix a permanent € price list.",
        paragraphs: [
          "When comparing academies, align duration and frequency first. Then convert the published USD amount to € using your bank’s rate for a household estimate. Card FX fees can change the final euro outflow slightly from a mid-market calculator.",
          "Family discounts, when applicable, follow published sibling rules. Confirm the currency shown at checkout and keep a record of the plan name and USD amount you agreed.",
        ],
        table: {
          headers: ["Step", "Action"],
          rows: [
            ["1", "Open the pricing page and note the USD monthly plan"],
            ["2", "Convert to € for your own budget (orientation only)"],
            ["3", "Confirm FX/fees with your bank or card"],
            ["4", "Enrol only after trial, tutor and schedule confirmation"],
          ],
        },
      },
      {
        id: "trust-netherlands",
        heading: "Trust, safeguarding and tutor matching in the Netherlands",
        directAnswer:
          "Choose transparent online providers, observe lessons, and use safeguarding guidance. Request tutor preferences clearly and verify who will teach after the trial before paying for a package.",
        paragraphs: [
          "Diaspora parents often worry about unknown tutors teaching children on camera. Mitigate risk with shared-room devices for young learners, parental observation rights, and academies that document expectations. Read NoorPath’s safeguarding information and ask practical questions during onboarding.",
          "Community recommendations help, but they are not a substitute for your own trial observation. A trustworthy process welcomes questions about attendance, progress notes and cancellation notice.",
        ],
        bullets: [
          "Keep young learners in a family space during class.",
          "Ask how progress is reported to parents.",
          "Confirm female-tutor requests in writing when relevant.",
          "Avoid large prepaid commitments before a successful trial.",
        ],
      },
      {
        id: "netherlands-faq-block",
        heading: "Netherlands FAQ — fit, safety and timing",
        directAnswer:
          "Key questions Dutch Muslim families ask before starting online Quran tuition.",
        paragraphs: [
          "Use these answers with the location FAQ list on this page for a complete picture of scheduling, cost orientation and legitimacy.",
        ],
        table: {
          headers: ["Question", "Short answer"],
          rows: [
            [
              "Are online Quran classes suitable for Muslim families in the Netherlands?",
              "Yes when a CET evening or weekend slot fits school life and the trial confirms tutor and language fit.",
            ],
            [
              "What evening times are typical?",
              "Many requests fall between about 4 PM and 10 PM CET/CEST; confirmation follows matching.",
            ],
            [
              "Is online learning safe for children?",
              "Use known video platforms, parental observation, and clear safeguarding policies — and supervise young learners.",
            ],
            [
              "How do euros relate to listed prices?",
              "Plans are in USD; convert to € for budgeting and expect possible bank FX differences.",
            ],
          ],
        },
      },
    ],
  },

  "online-quran-classes-sweden": {
    country: "Sweden",
    title: "Online Quran Classes in Sweden: CET Evenings & Family Guide",
    description:
      "Guidance for Muslim families in Sweden on live online Quran and Noorani Qaida lessons, CET evening availability, USD pricing with € orientation, and trustworthy tutor matching.",
    reviewedDate: "19 July 2026",
    sections: [
      {
        id: "sweden-fit",
        heading: "Are online Quran classes suitable for Muslim families in Sweden?",
        directAnswer:
          "Yes for families in Stockholm, Gothenburg, Malmö, Uppsala and elsewhere who want consistent live Quran learning at home in CET/CEST, especially when local group options are limited or travel is impractical. Suitability still depends on language match, learner readiness and a confirmed tutor slot.",
        paragraphs: [
          "Swedish school calendars, long winter evenings and geographically spread communities make online one-to-one tuition a practical tool. Parents can supervise from the living room while the child builds Arabic reading skills with a dedicated tutor.",
          "Online classes complement — they do not replace — local Islamic community life. Treat NoorPath as remote academic support for Qaida, reading, Tajweed or Hifz, with transparent online policies rather than a Swedish institutional campus claim.",
        ],
        bullets: [
          "Remote service only — no Swedish branch location is implied.",
          "Evening requests often sit between about 4 PM and 10 PM CET/CEST.",
          "Beginners typically start with Noorani Qaida after assessment.",
          "A free trial should precede ongoing payment.",
        ],
      },
      {
        id: "sweden-cet-schedule",
        heading: "Timezone-friendly evenings for Quran class in Sweden",
        directAnswer:
          "Request lessons from roughly 4 PM to 10 PM CET/CEST to align with Swedish school evenings, or ask for weekend mornings when weeknights are full. Daylight-saving changes should be confirmed so the local clock time stays clear.",
        paragraphs: [
          "Dark winter afternoons can make early evening slots attractive for younger children who tire later. In summer, outdoor activities may push lessons slightly later — still within a predictable weekly window. Consistency beats occasional marathon sessions.",
          "If grandparents or relatives abroad join sometimes to encourage the child, keep the primary teaching relationship with the assigned tutor so correction stays consistent.",
        ],
        table: {
          headers: ["Season / factor", "Scheduling tip"],
          rows: [
            ["School term", "Prioritise a fixed weekday evening in CET/CEST"],
            ["Winter", "Prefer earlier evenings before attention drops"],
            ["Summer / holidays", "Ask about temporary weekend alternatives"],
            ["Clock change", "Confirm whether Sweden local time remains the anchor"],
          ],
        },
      },
      {
        id: "courses-sweden",
        heading: "Choosing Qaida, kids’ classes or next steps in Sweden",
        directAnswer:
          "Match the course to reading ability. Use Noorani Qaida for foundations, kids’ online Quran classes for age-appropriate live lessons, and the pricing page to understand USD monthly plans before you enquire.",
        paragraphs: [
          "Swedish Muslim parents often want clear milestones: letters, joining, short surahs, then optional Hifz. Avoid rushing a child into mushaf pages before letters are stable. Ask the tutor for a short readiness checklist after the trial.",
          "Internal links to Noorani Qaida, kids’ classes and pricing help families prepare questions. Enrolment still requires matching and schedule confirmation.",
        ],
        bullets: [
          "Foundations first when letter sounds are insecure.",
          "Tajweed focus once continuous reading exists.",
          "Hifz only with a realistic revision plan.",
          "Budget using published USD plans; convert for household planning.",
        ],
      },
      {
        id: "pricing-sweden-usd-eur",
        heading: "USD fees with euro (€) orientation for Sweden-based families",
        directAnswer:
          "NoorPath publishes and charges in USD. Families in Sweden may think in kronor (SEK) or compare in euros (€); convert the live USD amount for personal budgeting. NoorPath does not publish fixed SEK or EUR price lists.",
        paragraphs: [
          "For cross-European comparison, some households convert USD plans to an approximate € amount using a current FX source, then separately consider SEK card charges. Treat every converted figure as orientation. The authoritative fee is the published USD plan you accept at enrolment.",
          "Sibling discounts follow published rules when confirmed. Clarify cancellation notice and make-up policy before the first paid month.",
        ],
        table: {
          headers: ["Currency view", "Use it for"],
          rows: [
            ["USD plan on pricing page", "Official NoorPath fee reference"],
            ["€ estimate", "Optional Europe-wide budget comparison"],
            ["SEK on your statement", "What your Swedish card may show after FX"],
            ["Family discount", "Only when confirmed for your enrolment"],
          ],
        },
      },
      {
        id: "sweden-trust",
        heading: "Safety and trust for online Quran learning in Sweden",
        directAnswer:
          "Prefer academies with clear safeguarding information, parental observation, known video tools and honest tutor matching. Online learning is legitimate when processes are transparent — not when marketing overclaims local institutional status.",
        paragraphs: [
          "Parents should know who is teaching, how to pause enrolment, and how to report a concern. Keep devices in shared spaces for children and agree camera rules at home. Review safeguarding guidance and tutor pages before committing.",
          "A trustworthy provider answers questions about progress reporting and schedule changes without pressure tactics. If something feels unclear in the trial, pause and ask in writing.",
        ],
        bullets: [
          "Observe early sessions.",
          "Confirm continuing tutor identity after trial.",
          "Read safeguarding expectations.",
          "Avoid opaque long prepayments.",
        ],
      },
      {
        id: "sweden-faq-block",
        heading: "Sweden FAQ — legitimacy, evenings and cost",
        directAnswer:
          "Frequent questions from Muslim families in Sweden considering online Quran classes.",
        paragraphs: [
          "Pair this block with the standard location FAQs for a full picture of scheduling and enrolment.",
        ],
        table: {
          headers: ["Question", "Short answer"],
          rows: [
            [
              "Are online Quran classes suitable for Muslim families in Sweden?",
              "Yes when CET evening or weekend timing works and a trial confirms tutor fit and safety comfort.",
            ],
            [
              "What times are usually requested?",
              "About 4 PM–10 PM CET/CEST after school, with weekends as an alternative.",
            ],
            [
              "Is the academy based in Sweden?",
              "NoorPath teaches online and does not claim a Swedish campus; evaluate it as remote tutoring with clear policies.",
            ],
            [
              "How should we read prices in € or SEK?",
              "Start from published USD plans; convert to € or SEK only for personal budgeting.",
            ],
          ],
        },
      },
    ],
  },
};
