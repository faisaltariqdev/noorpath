import type { CountryGuideContent } from "@/data/countryGuideTypes";

/**
 * Tier-B country hubs: Spain and Hong Kong.
 * Online-only — no campus claims; no invented census / mosque statistics.
 * Answer-first sections for AI Overview / LLM citation and parent problem-solving.
 */
export const countryGuidesSpainHongKong: Record<string, CountryGuideContent> = {
  "online-quran-classes-spain": {
    country: "Spain",
    title: "Online Quran Classes in Spain: Family & Parent Guide",
    description:
      "Practical guidance for Muslim families in Spain choosing live online Quran and Noorani Qaida lessons — CET/CEST schedules, Madrid and Barcelona context, female tutor requests, school-year planning, and a free trial path.",
    reviewedDate: "28 September 2026",
    sections: [
      {
        id: "spain-fit",
        heading: "Are online Quran classes suitable for Muslim families in Spain?",
        directAnswer:
          "Yes for households that want live remote Quran tuition with a recurring slot on the Spanish clock. NoorPath is an online academy — not a Spanish mosque branch, a Madrid campus, or anywhere a child can be dropped off.",
        paragraphs: [
          "Muslim families in Spain are concentrated around Madrid, Barcelona, Valencia, Seville and Málaga, with households also across Catalonia, Andalusia and the Mediterranean coast. Local weekend classes exist in some neighbourhoods; elsewhere the realistic choice is a long drive, an overcrowded group, or nothing structured at all. That gap is what usually sends a parent searching for Quran classes near them and landing on an online academy page.",
          "There is a second, quieter reason online tuition gets used here. Many children attend Spanish-language state or concertado schools where Islamic instruction is not part of the school day. Whatever Quran they learn happens after school and is organised by the family — often around football, extracurriculars and homework. A fixed weekly one-to-one call from home can fit that reality better than another cross-city trip.",
          "Treat this country page as an invitation to enquire. Verify the proposed tutor, schedule and course during a free 30-minute trial before any ongoing payment — no credit card is required to book it.",
        ],
        bullets: [
          "Remote-only service — no claim of a NoorPath campus or meeting place in Spain.",
          "Female tutor preferences can be requested and are confirmed after matching.",
          "Children should be placed by reading level, not only by age or school year.",
          "A free trial is the correct place to test audio, rapport and placement.",
        ],
      },
      {
        id: "spain-parent-problems",
        heading: "What problems do parents in Spain usually need solved first?",
        directAnswer:
          "Most Spanish enquiries start with four practical problems: finding a recurring after-school CET/CEST slot, requesting a female tutor for a daughter or adult sister, placing a child honestly when Spanish school Arabic is weak or absent, and deciding whether online is a complement to a local mosque class or a replacement when none exists.",
        paragraphs: [
          "Parents often arrive frustrated by false starts: a group class that is too large for individual correction, a teacher whose schedule collapses every exam week, or an app that marks answers without hearing makharij. Name the real constraint in your first message — travel time, female-tutor preference, beginner vs returning reader, or a teenager who will only sit for thirty minutes — so matching starts from the actual problem rather than a generic course label.",
          "Students engage better when the plan is narrow and honest. A five-year-old who still confuses letters needs Noorani Qaida, not a Hifz brochure. A teenager who already reads but has weak Tajweed needs correction and a sustainable weekly load, not a memorisation promise that competes with Bachillerato. Placement follows what the learner can decode independently, not what the family wishes the level were.",
        ],
        table: {
          headers: ["Parent / student problem", "What to ask for in the enquiry"],
          rows: [
            ["No nearby children’s class", "Live 1-to-1 online slot + free trial to test focus at home"],
            ["Daughter needs a female tutor", "Female tutor preference stated in the first message"],
            ["Child only speaks Spanish / English at school", "English (or Arabic) instruction preference + trial listen-in"],
            ["Weeknights packed with clubs", "Second option: weekend morning CET/CEST window"],
            ["Returning adult beginner", "Discreet one-to-one Qaida placement, not a mixed group"],
          ],
        },
      },
      {
        id: "spain-schedule",
        heading: "When can families in Spain take online Quran classes?",
        directAnswer:
          "Mainland Spain runs on CET (UTC+1) in winter and CEST (UTC+2) from late March to late October. Ask for the slot to be recorded in Spanish local time so the hour on your clock stays fixed across both changes.",
        paragraphs: [
          "Spanish primary and secondary finish times vary by comunidad and school type, but many families find a late-afternoon or early-evening weekday window realistic once homework and activities are named. Younger children often focus better earlier; older pupils may need a later slot. Share two workable options rather than a single rigid hour.",
          "Write the offset, not only “Spanish time.” Tutors abroad may confuse CET with other European labels, and Canary Islands families should state their own clock explicitly if they are not on mainland time. Confirm in writing what happens on the last Sunday in March and the last Sunday in October so the appointment does not quietly move.",
          "Summer holidays (often July–August) are a planning point, not an automatic pause. Some families keep a lighter weekly session so recitation does not go cold; others pause and restart in September. Decide before the first paid month so expectations are clear on both sides.",
        ],
        table: {
          headers: ["Planning factor", "What to confirm"],
          rows: [
            ["Time zone wording", "Is the slot written as CET/CEST (or your local offset), not a vague “Spain time”?"],
            ["Clock changes", "Will the Spanish local hour stay fixed across March and October?"],
            ["After-school window", "Is a weekday late-afternoon or early-evening slot realistic all year?"],
            ["Weekend alternative", "Can Saturday morning work when weeknights are full?"],
            ["Summer plan", "Pause, lighter frequency, or continue — agreed before July?"],
          ],
        },
      },
      {
        id: "spain-school-year",
        heading: "How does the Spanish school year shape a realistic lesson slot?",
        directAnswer:
          "Plan around a September-to-June year, mid-year exams, and the pressure of ESO and Bachillerato. Reduce frequency in peak exam stretches rather than dropping out entirely, then rebuild.",
        paragraphs: [
          "September is the best month to lock a recurring slot while the term is still calm. Christmas and Easter breaks need a prior decision: keep a shorter session or pause. Spring exam weeks for older students are when ambitious Hifz loads usually fail — one shorter weekly session that actually happens beats a cancelled intensive plan.",
          "Siblings in different stages should not share one timetable for convenience alone. An infantil finish time and a secondary finish time rarely align; two short slots usually work better than one shared hour that frustrates both children.",
        ],
        table: {
          headers: ["Point in the Spanish year", "Realistic lesson plan"],
          rows: [
            ["September to mid-autumn", "Establish the weekly CET/CEST slot early."],
            ["Christmas and Easter breaks", "Decide in advance whether to pause or keep a shorter session."],
            ["ESO / Bachillerato exam blocks", "Reduce frequency; protect short daily revision at home."],
            ["July–August", "Agree lighter continuity or a clear restart date in September."],
          ],
        },
      },
      {
        id: "spain-courses",
        heading: "Which courses fit learners in Spain?",
        directAnswer:
          "Beginners usually start with Noorani Qaida. Children who already read may continue Quran reading, Tajweed, or Hifz. Course choice should follow assessment, not a label alone.",
        paragraphs: [
          "Between live lessons, families may use the Interactive Noorani Qaida hub for free recognition practice — soft support only; live teachers remain the correction path for uncertain sounds.",
          "Adults and teens often prefer discreet one-to-one lessons that do not require joining a large weekend group. Be realistic about Hifz: memorisation is new lines plus daily revision, and NoorPath does not publish a guaranteed completion timeline.",
        ],
        bullets: [
          "Start with foundations if letter recognition is still weak.",
          "Request Tajweed when continuous reading exists.",
          "Treat Hifz as new memorisation plus revision.",
          "Review published USD pricing before budgeting in euros.",
        ],
        relatedLinks: [
          { href: "/noorani-qaida", label: "Noorani Qaida hub" },
          { href: "/learn-tajweed-online", label: "Learn Tajweed online" },
          { href: "/hifz-quran-online", label: "Hifz Quran online" },
          { href: "/online-quran-classes-for-adults", label: "Adults Quran classes" },
          { href: "/courses/quran-classes-for-kids", label: "Quran classes for kids" },
        ],
      },
      {
        id: "spain-near-me",
        heading: "What does “Quran classes near me” mean if the academy is online?",
        directAnswer:
          "It means the class comes to your sitting room over a video call. NoorPath has no premises in Spain and nobody who travels to homes. If you want a teacher in the room, a local mosque or community class is the honest answer.",
        paragraphs: [
          "A search for a Quran teacher or Noorani Qaida class near you in Spain mixes two different things: places you could drive to, and academies that teach remotely. This page is the remote kind.",
          "For a family in a town with no weekend class, the comparison worth making is not online lessons against a good local madrasah — it is online lessons against nothing, or against a parent doing their best with a Qaida book. A weekly one-to-one call with someone who can hear that a letter is coming from the wrong place is a different product from an app.",
          "Where there is a good local class within reach, use it. Many Spanish families sensibly do both: the mosque or community class for belonging, and an online midweek slot for individual correction a large group cannot give.",
        ],
        relatedLinks: [
          { href: "/quran-classes-near-me", label: "“Near me” — honest online answer" },
          { href: "/online-quran-classes-no-masjid-nearby", label: "No masjid nearby guide" },
        ],
      },
      {
        id: "spain-female-tutors",
        heading: "Can I request a female Quran teacher in Spain?",
        directAnswer:
          "Yes. State the preference when you book. Female tutor availability is confirmed at matching rather than promised in advance, so raise it in your first message rather than after a time has been agreed.",
        paragraphs: [
          "This comes up constantly for daughters and for adult women who never learned to read Arabic as children and would rather not begin in front of a mixed group. It is a normal request.",
          "Because it narrows the pool, pair it with a little flexibility on the hour if you can. A family that offers a late-afternoon weekday option and a weekend morning alternative is usually placed faster than one that will accept only a single slot with a single preference attached.",
        ],
        relatedLinks: [
          { href: "/female-quran-teacher-online", label: "Female Quran teacher online" },
          { href: "/quran-classes-for-sisters", label: "Quran classes for sisters" },
        ],
      },
      {
        id: "spain-cities",
        heading: "Madrid, Barcelona, and the rest of Spain",
        directAnswer:
          "Yes — the same trial and matching process applies everywhere, but the reason for choosing online differs. In Madrid and Barcelona it is often traffic and scheduling; in smaller cities and towns it is often that there is nothing within easy reach.",
        paragraphs: [
          "Madrid and Barcelona families tend to weigh an evening cross-city drive against staying home. Valencia, Seville, Málaga and other cities sit somewhere behind that density of options. Out in smaller towns, a household may be one of few Muslim families locally.",
          "Share your city and preferred Spanish-clock windows when you book. This country guide stays Spain-wide; city-specific pages are not required to request the same online service.",
        ],
      },
      {
        id: "spain-pricing",
        heading: "How should families in Spain read USD prices in euros?",
        directAnswer:
          "Plans are published and charged in USD. Convert to euros (€) for budgeting; NoorPath does not publish a fixed EUR price list. Card FX fees may change the final euro amount on your statement.",
        paragraphs: [
          "Compare session length and frequency on the pricing page. Family sibling discounts, where published, apply to ongoing plans — read the current offer terms rather than assuming a discount before enrolment.",
        ],
        relatedLinks: [
          { href: "/pricing", label: "Pricing (USD)" },
        ],
      },
      {
        id: "spain-safety",
        heading: "How do online Quran classes stay safe for families in Spain?",
        directAnswer:
          "Use known meeting platforms, allow parental observation, confirm the tutor before ongoing payment, and keep young learners in a shared space.",
        paragraphs: [
          "Online delivery does not remove parental responsibility. Prefer academies that explain safeguarding and confirm credentials for the proposed match. Review NoorPath’s safeguarding guidance before enrolment.",
          "Ask specifically who will be teaching after the trial, and whether that person stays. A trial with one tutor followed by a term with someone else is a common frustration and an easy question to ask up front.",
        ],
        relatedLinks: [
          { href: "/safeguarding", label: "Safeguarding guidance" },
        ],
      },
      {
        id: "spain-start",
        heading: "How should a family in Spain start this week?",
        directAnswer:
          "Note your city, two workable CET/CEST windows, the learner’s honest reading level, and any female-tutor preference. Then request the free 30-minute trial with no credit card.",
        paragraphs: [
          "Naming Madrid, Barcelona, Valencia or your own town helps matching understand school finish patterns. Add the female-tutor preference in the same message if it matters.",
          "After matching, protect a short daily echo at home — five minutes of repeating what the tutor corrected. Weekly lessons compound only when something happens on the other six days.",
        ],
        relatedLinks: [
          { href: "/free-quran-classes-online", label: "Free trial details" },
          { href: "/pricing", label: "Pricing (USD)" },
          { href: "/female-quran-teacher-online", label: "Female Quran teacher" },
          { href: "/locations/online-quran-classes-france", label: "France hub (CET/CEST peer)" },
          { href: "#trial", label: "Book your Spain trial" },
        ],
      },
    ],
  },

  "online-quran-classes-hong-kong": {
    country: "Hong Kong",
    title: "Online Quran Classes in Hong Kong: Family & Expat Guide",
    description:
      "Practical guidance for Muslim families and expats in Hong Kong choosing live online Quran lessons — HKT schedules around school and activities, female tutor requests, USD/HKD budgeting, and a free trial path.",
    reviewedDate: "28 September 2026",
    sections: [
      {
        id: "hongkong-fit",
        heading: "Are online Quran classes suitable for Muslim families in Hong Kong?",
        directAnswer:
          "Yes when a household can protect one recurring HKT slot and sit the learner in front of a screen with an adult nearby when needed. NoorPath teaches online only — there is no Hong Kong campus, branch classroom or home-visit service.",
        paragraphs: [
          "Hong Kong’s Muslim community includes local families, South and Southeast Asian households, and international expats across Hong Kong Island, Kowloon and the New Territories. Some families already have weekend or community options; online one-to-one tutoring is useful when a child needs individual correction, when another cross-harbour trip is costly after a long school day, or when an adult wants discreet beginner lessons after work.",
          "Online tuition is not a community substitute. It does not replace mosque friendships or a local teacher who knows the family. It does provide weekly live listening and correction when that is the scarce resource. A free 30-minute trial is the honest way to test fit — no credit card is required.",
        ],
        bullets: [
          "Remote-only service — no Hong Kong branch or campus claim.",
          "HKT windows are subject to tutor matching.",
          "Placement follows reading readiness, not birthday or school year alone.",
          "Female tutor preferences can be stated and are confirmed at matching.",
        ],
      },
      {
        id: "hongkong-parent-problems",
        heading: "What problems do parents and students in Hong Kong usually need solved?",
        directAnswer:
          "Typical Hong Kong enquiries are about surviving a dense school-plus-activity calendar, matching an HKT evening when tutors sit in other time zones, requesting a female tutor, placing beginners honestly, and budgeting USD fees in HKD without surprise FX friction.",
        paragraphs: [
          "Students engage when the slot is short, predictable and free of homework collision. A 30-minute lesson that happens twice a week usually beats an hour that keeps getting cancelled after tutorial centres or sports. Tell matching which nights are already blocked this term.",
          "Expat and bilingual households should say which language of instruction they need. A child who studies in English at an international school but hears Urdu or Arabic at home still needs the tutor’s explanations to be clear in the language the child actually understands during the lesson.",
        ],
        table: {
          headers: ["Parent / student problem", "What to ask for in the enquiry"],
          rows: [
            ["Weeknights full of activities", "HKT weekend morning as a second option"],
            ["Daughter needs a female tutor", "Female preference + two time windows"],
            ["Adult beginner after office hours", "Later evening HKT one-to-one Qaida start"],
            ["Unsure of reading level", "Honest placement in the free trial — not a course label"],
            ["USD vs HKD budgeting", "Use published USD plans; convert with your bank’s rate"],
          ],
        },
      },
      {
        id: "hongkong-schedule",
        heading: "Which HKT windows survive school, activities and work?",
        directAnswer:
          "Many families request weekday evenings after school or weekend mornings in HKT. Share conflicts up front; exact availability is confirmed after matching. HKT (UTC+8) does not observe daylight saving — still confirm the written local clock time.",
        paragraphs: [
          "Treat the first proposed slot as a testable plan. A 7.30 pm HKT lesson that collides with tutorial nights will produce absences; a Saturday morning that survives extracurriculars is often more reliable than an ambitious weekday package. During exam stretches, ask for a lighter frequency rather than stopping entirely — short continuity beats a collapsed timetable.",
          "Adults returning after work often prefer later evening HKT windows. State two workable options so matching can succeed across tutor-side time zones. HKT sits in the same UTC+8 band as Singapore and Malaysia, which can widen evening tutor availability compared with far-western markets — still confirm the match; do not assume an open diary.",
        ],
        table: {
          headers: ["Planning factor", "What to confirm"],
          rows: [
            ["Local label", "Is the recurring slot recorded in HKT?"],
            ["School / activities", "Which nights are already blocked this term?"],
            ["Exam blocks", "Should frequency reduce rather than pause?"],
            ["Weekend option", "Is Saturday morning more reliable than a weeknight?"],
            ["Adult evenings", "Is a later HKT window needed after work?"],
          ],
        },
      },
      {
        id: "hongkong-school",
        heading: "How should Quran lessons sit beside Hong Kong school life?",
        directAnswer:
          "School calendars and prior mosque exposure are useful context, not automatic proof of makharij accuracy. Describe what the learner can decode independently so placement does not skip foundations or repeat material unnecessarily.",
        paragraphs: [
          "Written exam grades and memorisation by ear are different skills from decoding unfamiliar lines. Tell the tutor honestly if a child knows short surahs by listening but hesitates on new Arabic text. That honesty prevents a Tajweed label being applied where Qaida consolidation is still needed.",
          "Siblings should not share one plan for convenience alone. Ages and skills differ; separate assessments keep one child from coasting and another from drowning. International-school and local-school households may also need different instruction languages — state that early.",
        ],
      },
      {
        id: "hongkong-courses",
        heading: "Which courses fit learners in Hong Kong?",
        directAnswer:
          "Beginners usually start with Noorani Qaida. Readers may continue Quran reading, Tajweed or Hifz after assessment. A narrower plan completed consistently often beats an overloaded package in exam periods.",
        paragraphs: [
          "Between live lessons, soft recognition practice on the Interactive Noorani Qaida hub can help — live teachers remain the correction path for uncertain sounds. Hifz needs new lines plus daily revision; NoorPath does not publish a guaranteed completion timeline.",
        ],
        bullets: [
          "Foundations first when letter recognition is weak.",
          "Request Tajweed when continuous reading exists.",
          "Treat Hifz as memorisation plus revision, not page count alone.",
          "Revisit placement after several lessons if the material is poorly matched.",
        ],
        relatedLinks: [
          { href: "/noorani-qaida", label: "Noorani Qaida hub" },
          { href: "/learn-tajweed-online", label: "Learn Tajweed online" },
          { href: "/hifz-quran-online", label: "Hifz Quran online" },
          { href: "/online-quran-classes-for-adults", label: "Adults Quran classes" },
        ],
      },
      {
        id: "hongkong-near-me",
        heading: "What does “Quran classes near me” mean in Hong Kong?",
        directAnswer:
          "It means the lesson arrives at your home over a video call. NoorPath has no premises in Hong Kong, nobody who will travel to you, and no in-person option. If in-person is what you need, a local mosque or community class is the right answer and this page is not.",
        paragraphs: [
          "Searches for a Quran teacher near you in Hong Kong return online academies alongside genuinely local ones. They are not the same product. NoorPath is the online one.",
          "What remote teaching gives a family is weekly live correction without another trip across the harbour or New Territories. Where a good local option exists, many households sensibly run both: community class for belonging, online slot for individual attention.",
        ],
        relatedLinks: [
          { href: "/quran-classes-near-me", label: "“Near me” — honest online answer" },
          { href: "/online-quran-classes-no-masjid-nearby", label: "No masjid nearby guide" },
        ],
      },
      {
        id: "hongkong-female",
        heading: "Can we request a female Quran teacher in Hong Kong?",
        directAnswer:
          "Yes — state the preference when booking. A female tutor is confirmed at matching rather than promised in advance, and the preference interacts with HKT evening demand.",
        paragraphs: [
          "Families who can offer a second window (for example a weekend morning) are often placed more quickly. Adult sisters starting from the beginning often prefer one-to-one lessons for privacy and pace.",
        ],
        relatedLinks: [
          { href: "/female-quran-teacher-online", label: "Female Quran teacher online" },
          { href: "/quran-classes-for-sisters", label: "Quran classes for sisters" },
        ],
      },
      {
        id: "hongkong-pricing",
        heading: "How should Hong Kong families read USD prices in HKD?",
        directAnswer:
          "Plans are published and charged in USD. Convert to HKD for budgeting; NoorPath does not publish a fixed HKD list. Card FX fees may change the final HKD amount on your statement.",
        paragraphs: [
          "Compare session length and frequency on the pricing page. Family sibling discounts, where published, apply to ongoing plans — not as a substitute for reading the current offer terms.",
        ],
        relatedLinks: [
          { href: "/pricing", label: "Pricing (USD)" },
        ],
      },
      {
        id: "hongkong-safety",
        heading: "How do families in Hong Kong keep online lessons safe?",
        directAnswer:
          "Supervise young learners, use known platforms, confirm the tutor before continuing payment, and keep early lessons observable in a family space.",
        paragraphs: [
          "Prefer academies that explain safeguarding and confirm credentials for the proposed match. Review NoorPath’s safeguarding guidance before enrolment. Keep communication on official booking channels.",
        ],
        relatedLinks: [
          { href: "/safeguarding", label: "Safeguarding guidance" },
        ],
      },
      {
        id: "hongkong-start",
        heading: "How should a Hong Kong family start this week?",
        directAnswer:
          "Note two preferred HKT windows, an honest course goal and any female-tutor preference, then request a free 30-minute trial with no credit card.",
        paragraphs: [
          "Protect five to ten minutes on non-lesson days for a short home echo of what was corrected. Continuity across exam weeks matters more than an intense plan that collapses mid-term.",
          "For UTC+8 household planning, the Singapore and Malaysia country hubs describe related evening patterns without inventing a Hong Kong campus.",
        ],
        relatedLinks: [
          { href: "/free-quran-classes-online", label: "Free trial details" },
          { href: "/pricing", label: "Pricing (USD)" },
          { href: "/female-quran-teacher-online", label: "Female Quran teacher" },
          { href: "/locations/online-quran-classes-singapore", label: "Singapore hub (UTC+8 peer)" },
          { href: "/locations/online-quran-classes-malaysia", label: "Malaysia hub" },
          { href: "#trial", label: "Book your HKT trial" },
        ],
      },
    ],
  },
};
