import type { CityGuideContent } from "@/data/countryGuideTypes";

/**
 * Phase B — selective city guide depth for high-intent diaspora heads
 * that previously relied on localContext + shared FAQs only.
 * Online-only — no campus / home-visit claims; no invented stats.
 */
export const cityGuidesDiasporaPrimary: Record<string, CityGuideContent> = {
  dublin: {
    city: "Dublin",
    country: "Ireland",
    title: "Online Quran Classes in Dublin: Live 1-to-1 Family Guide",
    description:
      "Practical guidance for Dublin families comparing live online Quran lessons — GMT/IST after-school scheduling, female tutor requests, course fit, safeguarding, and a free trial.",
    reviewedDate: "28 July 2026",
    sections: [
      {
        id: "dublin-how-online-works",
        heading: "How do online Quran classes work for a Dublin household?",
        directAnswer:
          "Lessons take place by video from your home at agreed times. NoorPath operates online only: it has no Dublin branch, classroom, or home-visit service.",
        paragraphs: [
          "That operating model matters when comparing providers. A city page should not be read as evidence of a Dublin office. Ask which platform is used, how materials are shared, and whom to contact if a session does not start.",
          "Remote study can remove cross-city travel after Irish school hours, but it does not remove the need for a quiet household routine and a parent nearby when supervision is appropriate.",
        ],
        bullets: [
          "Remote video lessons and digital materials",
          "No Dublin office, branch classroom, or home visits",
          "Enrollment and support handled online",
          "A home device, internet connection, and suitable study space required",
        ],
      },
      {
        id: "dublin-schedule",
        heading: "Which GMT/IST scheduling checks matter in Dublin?",
        directAnswer:
          "Dublin uses GMT in winter and IST during daylight-saving months. Confirm that every displayed slot is labeled with a time zone and ask how clock changes are handled.",
        paragraphs: [
          "Build the timetable around the real school week. An after-school slot should allow for dismissal, traffic, snacks, prayer, homework, and the learner’s concentration level.",
          "Treat the first proposed schedule as a testable plan. Availability must be confirmed directly and should never be inferred from generic schedule examples.",
        ],
        table: {
          headers: ["Scheduling check", "Question to ask"],
          rows: [
            ["Time zone", "Is this recurring time fixed to Dublin GMT/IST?"],
            ["Clock change", "Will the calendar adjust for GMT and IST?"],
            ["Travel buffer", "Can the lesson start after a realistic trip home?"],
            ["Changes", "What notice and make-up rules apply?"],
          ],
        },
      },
      {
        id: "dublin-course",
        heading: "Which Quran course should a Dublin learner choose?",
        directAnswer:
          "Choose from present skill and practical goal, not age or course name alone. Request an assessment before selecting the paid plan.",
        paragraphs: [
          "A beginner may need Noorani Qaida; a reader may need fluency or Tajweed; a memorizer needs structured revision. Describe what the learner can do without prompting.",
          "For children balancing Irish school demands, a narrower plan completed consistently can be more useful than an overloaded package.",
        ],
        bullets: [
          "Foundational Arabic reading for letter recognition and blending",
          "Quran reading fluency for learners who know the basics",
          "Tajweed instruction for applied correction",
          "Memorization with planned new work and revision",
        ],
      },
      {
        id: "dublin-tutor",
        heading: "How should Dublin families evaluate tutor matching?",
        directAnswer:
          "Ask for verifiable information relevant to the role and confirm female-tutor preference if needed. Do not assume a tutor lives in Dublin.",
        paragraphs: [
          "Matching depends on communication style, pacing and language comfort as well as credentials. Use early sessions to observe punctuality, audio clarity and the learner’s willingness to participate.",
        ],
      },
      {
        id: "dublin-trial",
        heading: "What should happen during a trial for a Dublin family?",
        directAnswer:
          "A useful trial checks placement, audio quality, rapport and a realistic GMT/IST slot before ongoing payment. No credit card is required for NoorPath’s published free trial.",
        paragraphs: [
          "Prepare a quiet space, test the device beforehand, and note questions about safeguarding, rescheduling and continuing tutor details.",
        ],
      },
      {
        id: "dublin-start",
        heading: "How should a Dublin family start this week?",
        directAnswer:
          "Open the Dublin city context, note preferred GMT/IST windows and course goal, then request a free trial.",
        paragraphs: [
          "Add female-tutor preference if needed. After matching, protect a short daily home echo so live lessons compound. Country-level Ireland guidance remains on the Ireland location hub.",
        ],
      },
    ],
  },

  auckland: {
    city: "Auckland",
    country: "New Zealand",
    title: "Online Quran Classes in Auckland: Kids & Family Guide",
    description:
      "Practical guidance for Auckland families choosing live online Quran lessons for kids — NZST/NZDT after-school windows, female tutor requests, course fit, and a free trial.",
    reviewedDate: "12 August 2026",
    sections: [
      {
        id: "auckland-how-online-works",
        heading: "How do online Quran classes work for an Auckland household?",
        directAnswer:
          "Lessons take place by video from your home. NoorPath operates online only: it has no Auckland branch, classroom, or home-visit service.",
        paragraphs: [
          "Auckland holds New Zealand’s largest Muslim community, yet families still seek online tutors when schedules, travel, or female-tutor preferences are hard to meet locally. A city page is not evidence of a local campus.",
          "Decide where the learner will join — a quiet shared space works best for younger children — and confirm platform and support contacts before paying.",
        ],
        bullets: [
          "Remote video lessons only",
          "No Auckland campus or home visits",
          "NZST/NZDT preferences subject to matching",
          "Free trial before ongoing payment",
        ],
      },
      {
        id: "auckland-schedule",
        heading: "Which NZST/NZDT checks matter in Auckland?",
        directAnswer:
          "Confirm that every slot is labeled with New Zealand local time and ask how NZST/NZDT clock changes are handled.",
        paragraphs: [
          "Because New Zealand sits far ahead of many tutor time zones, share preferred after-school windows clearly. Exact availability is confirmed after matching — not inferred from example hours.",
        ],
        table: {
          headers: ["Scheduling check", "Question to ask"],
          rows: [
            ["Local label", "Is the time fixed to Auckland NZST/NZDT?"],
            ["Clock change", "What happens at daylight-saving weekends?"],
            ["Tutor-side hour", "Is the matched tutor’s hour sustainable long-term?"],
            ["School week", "Does the slot survive homework and clubs?"],
          ],
        },
      },
      {
        id: "auckland-course",
        heading: "Which course should an Auckland learner choose?",
        directAnswer:
          "Place by current skill: Qaida for beginners, reading/Tajweed for continuous readers, Hifz only with a revision plan.",
        paragraphs: [
          "Between live lessons, families may use the Interactive Noorani Qaida hub for free recognition practice — soft support only.",
        ],
      },
      {
        id: "auckland-tutor",
        heading: "How should Auckland families request a tutor for kids?",
        directAnswer:
          "State age, level, female-tutor preference if needed, and preferred NZST/NZDT windows. Availability is confirmed after your request.",
        paragraphs: [
          "Do not assume the tutor lives in Auckland. Evaluate early lessons for correction quality, punctuality and the child’s comfort.",
        ],
      },
      {
        id: "auckland-trial",
        heading: "What should a trial cover for Auckland families?",
        directAnswer:
          "Placement, audio quality, rapport and a realistic local slot before ongoing payment.",
        paragraphs: [
          "Prepare the device early and keep a parent nearby for younger learners. No credit card is required for NoorPath’s published free trial.",
        ],
      },
      {
        id: "auckland-start",
        heading: "How should an Auckland family start this week?",
        directAnswer:
          "Note preferred NZST/NZDT windows and course goal, then request a free trial.",
        paragraphs: [
          "Country-level New Zealand guidance remains on the NZ location hub; this page focuses on Auckland household planning.",
        ],
      },
    ],
  },

  toronto: {
    city: "Toronto",
    country: "Canada",
    title: "Online Quran Classes in Toronto: Practical Family Guide",
    description:
      "Guidance for Greater Toronto families comparing live online Quran lessons — Eastern Time scheduling, winter travel context, course fit, safeguarding, and a free trial.",
    reviewedDate: "28 July 2026",
    sections: [
      {
        id: "toronto-how-online-works",
        heading: "How do online Quran classes work for a Toronto household?",
        directAnswer:
          "Lessons take place by video from your home. NoorPath operates online only: it has no Toronto branch, classroom, or home-visit service.",
        paragraphs: [
          "Greater Toronto travel and winter conditions can make learning from home practical. A city page should not be read as evidence of a local office or a tutor who can travel to Mississauga, Scarborough or downtown.",
          "Confirm platform, materials, billing and support contacts before paying. Keep young learners in a visible shared space when supervision is appropriate.",
        ],
        bullets: [
          "Remote video lessons and digital materials",
          "No Toronto office or home visits",
          "ET preferences subject to tutor matching",
          "Home device, internet and suitable study space required",
        ],
      },
      {
        id: "toronto-schedule",
        heading: "Which Eastern Time checks matter in Toronto?",
        directAnswer:
          "Toronto uses Eastern Time (EST/EDT). Confirm labeled time zones and how daylight-saving changes are handled for recurring lessons.",
        paragraphs: [
          "An after-school slot should allow for dismissal, transit delays, snacks, prayer and homework. Adults should account for commute and shift work. Treat the first proposed schedule as testable, not permanent.",
        ],
        table: {
          headers: ["Scheduling check", "Question to ask"],
          rows: [
            ["Time zone", "Is this recurring time fixed to Toronto Eastern Time?"],
            ["Clock change", "Will the calendar adjust for EST and EDT?"],
            ["Commute buffer", "Can the lesson start after a realistic trip home?"],
            ["Winter plans", "What happens during weather disruptions?"],
          ],
        },
      },
      {
        id: "toronto-course",
        heading: "Which Quran course should a Toronto learner choose?",
        directAnswer:
          "Choose from present skill and goal. Request assessment before selecting a paid plan.",
        paragraphs: [
          "Beginners may need Noorani Qaida; readers may need fluency or Tajweed; memorizers need new work plus revision. A narrower plan completed consistently often beats overload during Canadian school terms.",
        ],
      },
      {
        id: "toronto-tutor",
        heading: "How should Toronto families evaluate tutor matching?",
        directAnswer:
          "Ask for role-relevant evidence, language fit and safeguarding process. Do not assume the tutor lives in the GTA.",
        paragraphs: [
          "Use early sessions to observe preparation, punctuality, audio clarity and respectful communication. Ask how tutor changes are requested if the match is not right.",
        ],
      },
      {
        id: "toronto-pricing",
        heading: "What should Toronto families check about USD pricing?",
        directAnswer:
          "Use published USD pricing as the source of truth, then confirm what the quote includes. CAD conversion on a card statement is outside NoorPath’s control.",
        paragraphs: [
          "Check lesson duration, frequency, trial terms, family discounts and cancellation rules in writing. Neither this guide nor an old screenshot should override live published pricing.",
        ],
      },
      {
        id: "toronto-start",
        heading: "How should a Toronto family start this week?",
        directAnswer:
          "Note preferred ET windows and course goal, then request a free trial with no credit card.",
        paragraphs: [
          "Mention Mississauga or other GTA suburbs if that affects after-school timing. Country-level Canada guidance remains on the Canada location hub.",
        ],
      },
    ],
  },

  hyderabad: {
    city: "Hyderabad",
    country: "India",
    title: "Online Quran Classes in Hyderabad: Live 1-to-1 Family Guide",
    description:
      "Practical guidance for Hyderabad families comparing live online Quran lessons — IST after-school scheduling, female tutor requests, Qaida-to-Hifz fit, safeguarding, and a free trial.",
    reviewedDate: "12 August 2026",
    sections: [
      {
        id: "hyderabad-how-online-works",
        heading: "How do online Quran classes work for a Hyderabad household?",
        directAnswer:
          "Lessons take place by video from your home at agreed IST times. NoorPath operates online only: it has no Hyderabad branch, classroom, or home-visit service.",
        paragraphs: [
          "That operating model matters when comparing providers. A city page should not be read as evidence of a Hyderabad office. Ask which platform is used, how materials are shared, and whom to contact if a session does not start.",
          "Remote study can remove Old City or IT-corridor travel after school, but it does not remove the need for a quiet household routine and a parent nearby when supervision is appropriate.",
        ],
        bullets: [
          "Remote video lessons and digital materials",
          "No Hyderabad office, branch classroom, or home visits",
          "Enrollment and support handled online",
          "A home device, internet connection, and suitable study space required",
        ],
      },
      {
        id: "hyderabad-schedule",
        heading: "Which IST scheduling checks matter in Hyderabad?",
        directAnswer:
          "Hyderabad uses IST (UTC+5:30) without daylight-saving changes. Confirm that every displayed slot is labeled with local clock time and ask how exam weeks are handled.",
        paragraphs: [
          "Build the timetable around the real school week. An after-school slot should allow for dismissal, traffic, snacks, prayer, homework, and the learner’s concentration level.",
          "Treat the first proposed schedule as a testable plan. Availability must be confirmed directly and should never be inferred from generic schedule examples.",
        ],
        table: {
          headers: ["Scheduling check", "Question to ask"],
          rows: [
            ["Time zone", "Is this recurring time fixed to Hyderabad IST?"],
            ["After school", "Can the lesson start after a realistic trip home?"],
            ["Exam weeks", "How are board or school exam blocks handled?"],
            ["Changes", "What notice and make-up rules apply?"],
          ],
        },
      },
      {
        id: "hyderabad-course",
        heading: "Which Quran course should a Hyderabad learner choose?",
        directAnswer:
          "Choose from present skill and practical goal, not age or course name alone. Request an assessment before selecting the paid plan.",
        paragraphs: [
          "A beginner may need Noorani Qaida; a reader may need fluency or Tajweed; a memorizer needs structured revision. Describe what the learner can do without prompting.",
          "For children balancing school demands, a narrower plan completed consistently can be more useful than an overloaded package.",
        ],
        bullets: [
          "Foundational Arabic reading for letter recognition and blending",
          "Quran reading fluency for learners who know the basics",
          "Tajweed instruction for applied correction",
          "Memorization with planned new work and revision",
        ],
      },
      {
        id: "hyderabad-tutor",
        heading: "How should Hyderabad families evaluate tutor matching?",
        directAnswer:
          "Ask for verifiable information relevant to the role and confirm female-tutor or language preference if needed. Do not assume a tutor lives in Hyderabad.",
        paragraphs: [
          "Matching depends on communication style, pacing and language comfort as well as credentials. Use early sessions to observe punctuality, audio clarity and the learner’s willingness to participate.",
        ],
      },
      {
        id: "hyderabad-trial",
        heading: "What should happen during a trial for a Hyderabad family?",
        directAnswer:
          "Placement, audio quality, language comfort and a realistic IST slot before ongoing payment.",
        paragraphs: [
          "No credit card is required for NoorPath’s published free trial. Keep written confirmation of the proposed continuing plan and convert USD fees to INR using your bank rate for household budgeting.",
        ],
      },
      {
        id: "hyderabad-start",
        heading: "How should a Hyderabad family start this week?",
        directAnswer:
          "Note preferred IST windows and course goal, then request a free trial with no credit card.",
        paragraphs: [
          "Mention school finish times and any female-tutor preference. Country-level India guidance remains on the India location hub.",
        ],
        relatedLinks: [
          { href: "/locations/online-quran-classes-india", label: "India online Quran classes hub" },
          { href: "/blog/after-school-quran-classes-for-kids-in-india", label: "After-school guide for kids in India" },
        ],
      },
    ],
  },

  mumbai: {
    city: "Mumbai",
    country: "India",
    title: "Online Quran Classes in Mumbai: Live 1-to-1 Family Guide",
    description:
      "Practical guidance for Mumbai families comparing live online Quran lessons — IST after-school and weekend planning, commute-aware routines, female tutor requests, and a free trial.",
    reviewedDate: "12 August 2026",
    sections: [
      {
        id: "mumbai-how-online-works",
        heading: "How do online Quran classes work for a Mumbai household?",
        directAnswer:
          "Lessons take place by video from your home. NoorPath operates online only: it has no Mumbai branch, classroom, or home-visit service.",
        paragraphs: [
          "Mumbai’s long school-and-commute days make travel to a second venue hard to sustain. Online one-to-one tutoring can protect a short weekly appointment without claiming a local campus in Mumbra, Kurla, Bhendi Bazaar or elsewhere.",
          "Confirm platform, materials, billing and support contacts before paying. Prefer a quiet space where younger children can be supervised — even in a shared flat.",
        ],
        bullets: [
          "Remote video lessons only",
          "No Mumbai office or home visits",
          "IST preferences subject to matching",
          "Shared-device households should lock a device for lesson time",
        ],
      },
      {
        id: "mumbai-schedule",
        heading: "Which IST scheduling checks matter in Mumbai?",
        directAnswer:
          "Mumbai uses IST without daylight-saving changes. Confirm the written local clock time and build buffers for traffic and late school finishes.",
        paragraphs: [
          "Many families request weekday evenings after school or weekend mornings when the week is overcrowded. Exact availability is confirmed after tutor matching — not a fixed Mumbai timetable.",
        ],
        table: {
          headers: ["Scheduling check", "Question to ask"],
          rows: [
            ["Local label", "Is the time fixed to Mumbai IST?"],
            ["Commute buffer", "Does the slot survive a late school return?"],
            ["Weekend option", "Is Saturday or Sunday morning more reliable?"],
            ["Sibling share", "Do two learners need separate matched slots?"],
          ],
        },
      },
      {
        id: "mumbai-course",
        heading: "Which course should a Mumbai learner choose?",
        directAnswer:
          "Place by current skill and goal — Qaida, reading, Tajweed or Hifz — not by age alone.",
        paragraphs: [
          "Describe prior madrasa or school Quran exposure honestly so placement is not repeated or too advanced. Revisit placement after several lessons if the match is poor.",
        ],
      },
      {
        id: "mumbai-tutor",
        heading: "How should Mumbai families evaluate tutor matching?",
        directAnswer:
          "State language preference, learner level and female-tutor preference if needed. Do not assume the tutor lives in Mumbai.",
        paragraphs: [
          "Evaluate early lessons for correction quality, punctuality and rapport. Ask how credentials relevant to the role are confirmed before ongoing payment.",
        ],
      },
      {
        id: "mumbai-trial",
        heading: "What should a trial cover for Mumbai families?",
        directAnswer:
          "Placement, audio quality, language comfort and a realistic IST slot before ongoing payment.",
        paragraphs: [
          "No credit card is required for NoorPath’s published free trial. Convert USD plan prices to INR with your bank rate; NoorPath does not publish a fixed INR list.",
        ],
      },
      {
        id: "mumbai-start",
        heading: "How should a Mumbai family start this week?",
        directAnswer:
          "Note preferred IST windows, language preference and course goal, then request a free trial.",
        paragraphs: [
          "Country-level India guidance remains on the India location hub; this page focuses on Mumbai household planning around school and commute reality.",
        ],
        relatedLinks: [
          { href: "/locations/online-quran-classes-india", label: "India online Quran classes hub" },
          { href: "/free-quran-classes-online", label: "Free trial details" },
        ],
      },
    ],
  },

  sydney: {
    city: "Sydney",
    country: "Australia",
    title: "Online Quran Classes in Sydney: Live 1-to-1 Family Guide",
    description:
      "Practical guidance for Sydney families comparing live online Quran lessons — AEST/AEDT after-school scheduling, female tutor requests, course fit, safeguarding, and a free trial.",
    reviewedDate: "13 August 2026",
    sections: [
      {
        id: "sydney-how-online-works",
        heading: "How do online Quran classes work for a Sydney household?",
        directAnswer:
          "Lessons take place by video from your home at agreed AEST/AEDT times. NoorPath operates online only: it has no Sydney branch, classroom, or home-visit service.",
        paragraphs: [
          "Western suburbs such as Lakemba, Auburn and Bankstown often balance school, traffic and weekend community activities. Online one-to-one tuition can protect a short weekly slot without claiming a local campus.",
          "Sydney planning differs from Melbourne’s: New South Wales school-term dates, longer cross-suburban M4/M5 journeys after school, and denser weekend mosque programmes in the west change which after-school buffers families need — still confirm AEST/AEDT wall-clock times in writing.",
        ],
        bullets: [
          "Remote video lessons only",
          "No Sydney office or home visits",
          "AEST/AEDT preferences subject to matching",
          "Female tutor preferences can be stated at booking",
        ],
      },
      {
        id: "sydney-schedule",
        heading: "Which AEST/AEDT scheduling checks matter in Sydney?",
        directAnswer:
          "Sydney observes daylight saving. Confirm that recurring lessons preserve the learner’s local wall-clock time around the seasonal change.",
        paragraphs: [
          "Leave a buffer after school for travel and homework. Exact availability is confirmed after tutor matching — not a fixed Sydney timetable.",
        ],
        table: {
          headers: ["Scheduling check", "Question to ask"],
          rows: [
            ["Local label", "Is the time fixed to Sydney AEST/AEDT?"],
            ["Clock change", "What happens at daylight-saving weekends?"],
            ["After school", "Can the lesson start after a realistic trip home?"],
            ["Weekend option", "Is Saturday morning more reliable?"],
          ],
        },
      },
      {
        id: "sydney-course",
        heading: "Which course should a Sydney learner choose?",
        directAnswer:
          "Place by current skill — Qaida, reading, Tajweed or Hifz — not by age alone.",
        paragraphs: [
          "Describe prior weekend-school or madrasah exposure honestly so placement is not repeated or too advanced.",
        ],
      },
      {
        id: "sydney-tutor",
        heading: "How should Sydney families evaluate tutor matching?",
        directAnswer:
          "State language preference, learner level and female-tutor preference if needed. Do not assume the tutor lives in Sydney.",
        paragraphs: [
          "Evaluate early lessons for correction quality, punctuality and rapport before ongoing payment.",
        ],
      },
      {
        id: "sydney-trial",
        heading: "What should a trial cover for Sydney families?",
        directAnswer:
          "Placement, audio quality, language comfort and a realistic AEST/AEDT slot before ongoing payment.",
        paragraphs: [
          "No credit card is required for NoorPath’s published free trial. Convert USD plan prices to AUD with your bank rate.",
        ],
      },
      {
        id: "sydney-start",
        heading: "How should a Sydney family start this week?",
        directAnswer:
          "Note preferred AEST/AEDT windows and course goal, then request a free trial.",
        paragraphs: [
          "Country-level Australia guidance remains on the Australia location hub.",
        ],
        relatedLinks: [
          { href: "/locations/online-quran-classes-australia", label: "Australia online Quran classes hub" },
          { href: "/free-quran-classes-online", label: "Free trial details" },
          { href: "/female-quran-teacher-online", label: "Female Quran teacher" },
        ],
      },
    ],
  },

  melbourne: {
    city: "Melbourne",
    country: "Australia",
    title: "Online Quran Classes in Melbourne: Live 1-to-1 Family Guide",
    description:
      "Practical guidance for Melbourne families comparing live online Quran lessons — AEST/AEDT after-school planning, female tutor requests, course fit, and a free trial.",
    reviewedDate: "13 August 2026",
    sections: [
      {
        id: "melbourne-how-online-works",
        heading: "How do online Quran classes work for a Melbourne household?",
        directAnswer:
          "Lessons take place by video from your home. NoorPath operates online only: it has no Melbourne branch, classroom, or home-visit service.",
        paragraphs: [
          "Northern and western suburbs such as Broadmeadows, Coburg and Werribee can use online one-to-one tuition to avoid another after-school commute. A city page is not evidence of a local campus.",
          "Melbourne planning differs from Sydney’s: Victorian term calendars, tram-and-freeway mixes in the north-west, and cooler evening starts in winter change when children are ready to recite — still treat this as remote scheduling help, not a local office.",
        ],
        bullets: [
          "Remote video lessons only",
          "No Melbourne office or home visits",
          "Victorian AEST/AEDT daylight saving applies",
          "Free trial before ongoing payment",
        ],
      },
      {
        id: "melbourne-schedule",
        heading: "Which AEST/AEDT scheduling checks matter in Melbourne?",
        directAnswer:
          "Confirm the written local clock time and how Victorian daylight-saving changes are handled for recurring lessons.",
        paragraphs: [
          "Many families request weekday evenings after school or weekend mornings. Exact availability is confirmed after tutor matching.",
        ],
        table: {
          headers: ["Scheduling check", "Question to ask"],
          rows: [
            ["Local label", "Is the time fixed to Melbourne AEST/AEDT?"],
            ["Clock change", "What happens at daylight-saving weekends?"],
            ["School week", "Does the slot survive homework and sport?"],
            ["Sibling share", "Do two learners need separate matched slots?"],
          ],
        },
      },
      {
        id: "melbourne-course",
        heading: "Which course should a Melbourne learner choose?",
        directAnswer:
          "Choose from present skill and practical goal — Qaida, reading, Tajweed or Hifz — after assessment.",
        paragraphs: [
          "A narrower plan completed consistently often works better than an overloaded package during term time.",
        ],
      },
      {
        id: "melbourne-tutor",
        heading: "How should Melbourne families evaluate tutor matching?",
        directAnswer:
          "Ask for verifiable information relevant to the role and confirm female-tutor preference if needed. Do not assume a tutor lives in Melbourne.",
        paragraphs: [
          "Use early sessions to observe punctuality, audio clarity and the learner’s willingness to participate.",
        ],
      },
      {
        id: "melbourne-trial",
        heading: "What should a trial cover for Melbourne families?",
        directAnswer:
          "Placement, audio quality, rapport and a realistic local slot before ongoing payment.",
        paragraphs: [
          "No credit card is required for NoorPath’s published free trial. Keep written confirmation of the proposed continuing plan.",
        ],
      },
      {
        id: "melbourne-start",
        heading: "How should a Melbourne family start this week?",
        directAnswer:
          "Note preferred AEST/AEDT windows and course goal, then request a free trial.",
        paragraphs: [
          "Country-level Australia guidance remains on the Australia location hub.",
        ],
        relatedLinks: [
          { href: "/locations/online-quran-classes-australia", label: "Australia online Quran classes hub" },
          { href: "/free-quran-classes-online", label: "Free trial" },
          { href: "/female-quran-teacher-online", label: "Female Quran teacher" },
        ],
      },
    ],
  },

  wellington: {
    city: "Wellington",
    country: "New Zealand",
    title: "Online Quran Classes in Wellington: Kids & Family Guide",
    description:
      "Practical guidance for Wellington families choosing live online Quran lessons for kids — NZST/NZDT scheduling, travel-aware routines, female tutor requests, and a free trial.",
    reviewedDate: "12 August 2026",
    sections: [
      {
        id: "wellington-how-online-works",
        heading: "How do online Quran classes work for a Wellington household?",
        directAnswer:
          "Lessons take place by video from your home. NoorPath operates online only: it has no Wellington branch, classroom, or home-visit service.",
        paragraphs: [
          "Wellington families may choose online tuition to avoid another after-school trip across the city, or because a preferred tutor window is easier to match remotely. A city page is not evidence of a local campus.",
        ],
        bullets: [
          "Remote video lessons only",
          "No Wellington campus or home visits",
          "NZST/NZDT preferences subject to matching",
          "Free trial before ongoing payment",
        ],
      },
      {
        id: "wellington-schedule",
        heading: "Which NZST/NZDT checks matter in Wellington?",
        directAnswer:
          "Confirm that every slot is labeled with New Zealand local time and ask how NZST/NZDT clock changes are handled.",
        paragraphs: [
          "Because New Zealand sits far ahead of many tutor time zones, share preferred before-school or after-school windows clearly. Exact availability is confirmed after matching.",
        ],
        table: {
          headers: ["Scheduling check", "Question to ask"],
          rows: [
            ["Local label", "Is the time fixed to Wellington NZST/NZDT?"],
            ["Clock change", "What happens at daylight-saving weekends?"],
            ["Before school", "Is a 6–8 am window easier to match?"],
            ["School week", "Does the slot survive homework and clubs?"],
          ],
        },
      },
      {
        id: "wellington-course",
        heading: "Which course should a Wellington learner choose?",
        directAnswer:
          "Place by current skill: Qaida for beginners, reading/Tajweed for continuous readers, Hifz only with a revision plan.",
        paragraphs: [
          "Between live lessons, families may use the Interactive Noorani Qaida hub for free recognition practice — soft support only.",
        ],
      },
      {
        id: "wellington-tutor",
        heading: "How should Wellington families request a tutor for kids?",
        directAnswer:
          "State age, level, female-tutor preference if needed, and preferred NZST/NZDT windows. Availability is confirmed after your request.",
        paragraphs: [
          "Do not assume the tutor lives in Wellington. Evaluate early lessons for correction quality, punctuality and the child’s comfort.",
        ],
      },
      {
        id: "wellington-trial",
        heading: "What should a trial cover for Wellington families?",
        directAnswer:
          "Placement, audio quality, rapport and a realistic local slot before ongoing payment.",
        paragraphs: [
          "Prepare the device early and keep a parent nearby for younger learners. No credit card is required for NoorPath’s published free trial.",
        ],
      },
      {
        id: "wellington-start",
        heading: "How should a Wellington family start this week?",
        directAnswer:
          "Note preferred NZST/NZDT windows and course goal, then request a free trial.",
        paragraphs: [
          "Country-level New Zealand guidance remains on the NZ location hub.",
        ],
        relatedLinks: [
          { href: "/locations/online-quran-classes-new-zealand", label: "New Zealand online Quran classes hub" },
          { href: "/online-quran-classes/auckland", label: "Auckland city guide" },
        ],
      },
    ],
  },

  dubai: {
    city: "Dubai",
    country: "United Arab Emirates",
    title: "Online Quran Classes in Dubai: Expat & Family Guide",
    description:
      "Practical guidance for Dubai families comparing live online Quran lessons — GST evenings, English-language requests, course fit, safeguarding, and a free trial.",
    reviewedDate: "28 July 2026",
    sections: [
      {
        id: "dubai-how-online-works",
        heading: "How do online Quran classes work for a Dubai household?",
        directAnswer:
          "Lessons take place by video from your home. NoorPath operates online only: it has no Dubai branch, classroom, or home-visit service.",
        paragraphs: [
          "Dubai’s international expat community includes Muslim families from South Asia, the Arab world, Africa and the West. Online one-to-one tutoring can add personalised correction around school and work without claiming a local campus.",
          "Confirm platform, materials, billing and support contacts before paying. Prefer a quiet space where younger children can be supervised.",
        ],
        bullets: [
          "Remote video lessons only",
          "No Dubai office or home visits",
          "GST preferences subject to matching",
          "English-language instruction may be requested where available",
        ],
      },
      {
        id: "dubai-schedule",
        heading: "Which GST scheduling checks matter in Dubai?",
        directAnswer:
          "Dubai uses Gulf Standard Time (GST, UTC+4) without daylight-saving changes. Still confirm the written local clock time for recurring lessons.",
        paragraphs: [
          "Many families request weekday evenings after school or work. Share weekend travel and club conflicts. Exact availability is confirmed after tutor matching.",
        ],
        table: {
          headers: ["Scheduling check", "Question to ask"],
          rows: [
            ["Local label", "Is the time fixed to Dubai GST?"],
            ["School week", "Does the slot survive homework and activities?"],
            ["Travel weeks", "How are temporary absences handled?"],
            ["Sibling share", "Do two learners need separate matched slots?"],
          ],
        },
      },
      {
        id: "dubai-course",
        heading: "Which course should a Dubai learner choose?",
        directAnswer:
          "Place by current skill and goal — Qaida, reading, Tajweed or Hifz — not by age alone.",
        paragraphs: [
          "Expat children who studied elsewhere should describe prior curricula honestly so placement is not repeated or too advanced. Revisit placement after several lessons if the match is poor.",
        ],
      },
      {
        id: "dubai-tutor",
        heading: "How should Dubai families evaluate tutor matching?",
        directAnswer:
          "State language preference, learner level and female-tutor preference if needed. Do not assume the tutor lives in Dubai.",
        paragraphs: [
          "Evaluate early lessons for correction quality, punctuality and rapport. Ask how credentials relevant to the role are confirmed before ongoing payment.",
        ],
      },
      {
        id: "dubai-trial",
        heading: "What should a trial cover for Dubai families?",
        directAnswer:
          "Placement, audio quality, language comfort and a realistic GST slot before ongoing payment.",
        paragraphs: [
          "No credit card is required for NoorPath’s published free trial. Keep written confirmation of the proposed continuing plan.",
        ],
      },
      {
        id: "dubai-start",
        heading: "How should a Dubai family start this week?",
        directAnswer:
          "Note preferred GST windows, language preference and course goal, then request a free trial.",
        paragraphs: [
          "Country-level UAE guidance remains on the UAE location hub; this page focuses on Dubai household planning.",
        ],
      },
    ],
  },
};
