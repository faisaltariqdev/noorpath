import type { CountryGuideContent } from "@/data/countryGuideTypes";

/**
 * Phase B — Helpful Content: country guides for previously template-only Asia/Africa hubs.
 * Online-only academy — no campus claims; no invented enrolment or census statistics.
 */
export const countryGuidesAsiaAfrica: Record<string, CountryGuideContent> = {
  "online-quran-classes-india": {
    country: "India",
    title: "Online Quran Classes in India: A Guide for Muslim Families",
    description:
      "Practical guidance for families in India choosing live online Quran and Noorani Qaida lessons — IST schedules, Hyderabad and Mumbai context, safeguarding, and a free trial path.",
    reviewedDate: "28 July 2026",
    sections: [
      {
        id: "india-fit",
        heading: "Are online Quran classes suitable for Muslim families in India?",
        directAnswer:
          "Yes for households that want live remote Quran tuition from home, can join with matched language support where available, and prefer a recurring IST slot. NoorPath is an online academy — not an Indian mosque branch.",
        paragraphs: [
          "India has one of the world’s largest Muslim populations, with strong community roots in Hyderabad, Mumbai, Delhi, Bengaluru and Lucknow. Families often balance mainstream schooling with Islamic learning; live one-to-one online classes keep a fixed weekly appointment without another commute across a large city.",
          "Treat this country page as an invitation to enquire. Verify the proposed tutor, schedule and course during a free trial before ongoing payment.",
        ],
        bullets: [
          "Remote-only service — no claim of a NoorPath campus in India.",
          "Language preferences (for example English or Urdu) are recorded where available.",
          "Children should be placed by level, not only by age.",
          "A free trial is the correct place to test audio, rapport and placement.",
        ],
      },
      {
        id: "india-schedule",
        heading: "When can families in India take online Quran classes?",
        directAnswer:
          "Classes are commonly requested after school in IST — late afternoon or early evening — with weekend mornings as an alternative. Exact times depend on tutor matching.",
        paragraphs: [
          "Share school finish times, tuition conflicts and sibling schedules when you book. Younger children often focus better before late-night fatigue; older pupils may need later slots around homework.",
          "IST (UTC+5:30) does not observe daylight-saving changes, which simplifies recurring calendars compared with many diaspora markets — still confirm the local clock time in writing.",
        ],
        table: {
          headers: ["Planning factor", "What to confirm"],
          rows: [
            ["After-school window", "Is a weekday IST evening realistic for this learner?"],
            ["Exam weeks", "How will board or school exams affect attendance?"],
            ["Shared devices", "Is a quiet space and stable connection available?"],
            ["Siblings", "Do two learners need separate matched slots?"],
          ],
        },
      },
      {
        id: "india-courses",
        heading: "Which courses fit learners in India?",
        directAnswer:
          "Beginners usually start with Noorani Qaida. Children who already read may continue Quran reading, Tajweed, or Hifz. Course choice should follow assessment, not a label alone.",
        paragraphs: [
          "Parents searching for online Tajweed classes in India should confirm the child can already recognise letters and short vowels. If not, Qaida first prevents building rules on unstable reading.",
          "Between live lessons, families may use the Interactive Noorani Qaida hub for free recognition practice — soft support only; live teachers remain the correction path for uncertain sounds.",
        ],
        bullets: [
          "Start with foundations if letter recognition is still weak.",
          "Request Tajweed when continuous reading exists.",
          "Treat Hifz as new memorisation plus revision.",
          "Review published USD pricing before budgeting in INR.",
        ],
      },
      {
        id: "india-safety",
        heading: "How do online Quran classes stay safe for families in India?",
        directAnswer:
          "Use known meeting platforms, allow parental observation, confirm the tutor before ongoing payment, and keep young learners in a shared space.",
        paragraphs: [
          "Online delivery does not remove parental responsibility. Agree household rules for cameras and chat. Prefer academies that explain safeguarding and confirm credentials for the proposed match.",
        ],
        bullets: [
          "Observe early lessons for young children.",
          "Confirm continuing tutor details when that matters to you.",
          "Use published channels for billing and schedule changes.",
        ],
      },
      {
        id: "india-pricing",
        heading: "How should Indian families read USD prices in INR?",
        directAnswer:
          "NoorPath publishes and charges plans in USD. Convert to INR for household planning using your bank or card rate — not a fixed INR price list.",
        paragraphs: [
          "Compare session length, sessions per month and family discounts on the pricing page. Card foreign-transaction fees may change the final rupee amount on your statement.",
        ],
      },
      {
        id: "india-start",
        heading: "How should a family in India start this week?",
        directAnswer:
          "Note your city and preferred IST window, then request a free trial with no credit card.",
        paragraphs: [
          "State Hyderabad, Mumbai, Delhi or another city clearly. Add female-tutor preference if needed. After matching, protect a short daily home echo so live lessons compound.",
        ],
      },
    ],
  },

  "online-quran-classes-pakistan": {
    country: "Pakistan",
    title: "Online Quran Classes in Pakistan: Home Learning Guide",
    description:
      "Guidance for Pakistani families choosing live online Quran and Noorani Qaida lessons — PKT schedules, Karachi and Lahore context, female tutor requests, and a free trial path.",
    reviewedDate: "28 July 2026",
    sections: [
      {
        id: "pakistan-fit",
        heading: "Are online Quran classes suitable for families in Pakistan?",
        directAnswer:
          "Yes for households that want structured live remote tuition from home and a recurring PKT slot. NoorPath teaches online only — not a Pakistan campus.",
        paragraphs: [
          "In Karachi, Lahore, Islamabad, Rawalpindi and Peshawar, online classes can reduce travel while keeping regular listening and correction. Suitability still depends on the learner’s attention, language comfort and confirmed tutor availability after a free trial.",
        ],
        bullets: [
          "Remote-only service with no Pakistan branch claim.",
          "Morning, after-school and evening PKT windows can be requested.",
          "Female tutor preferences can be stated when booking.",
          "Free trial before ongoing payment.",
        ],
      },
      {
        id: "pakistan-schedule",
        heading: "What PKT times work for online Quran classes?",
        directAnswer:
          "Request morning, after-school, evening or weekend windows in PKT. Exact recurring times are confirmed after tutor matching.",
        paragraphs: [
          "Share school and work conflicts clearly. A sustainable weekly slot usually works better than irregular catch-up lessons. PKT (UTC+5) does not observe daylight saving — still confirm the written local clock time.",
        ],
        table: {
          headers: ["Planning factor", "What to confirm"],
          rows: [
            ["School day", "When does the learner reliably finish homework?"],
            ["Power / internet", "Is a backup plan available for outages?"],
            ["Siblings", "Separate slots if two children learn at once?"],
            ["Ramadan", "Will evening routines need a temporary change?"],
          ],
        },
      },
      {
        id: "pakistan-courses",
        heading: "Which courses fit learners in Pakistan?",
        directAnswer:
          "Beginners start with Noorani Qaida; readers may continue Nazra, Tajweed or Hifz based on assessment.",
        paragraphs: [
          "Many children already attend local Quran programmes; online one-to-one tutoring can add focused correction rather than replace every community habit overnight. Be honest about current ability so placement is not too easy or too advanced.",
        ],
        bullets: [
          "Qaida for letter and joining foundations.",
          "Tajweed when continuous reading exists.",
          "Hifz as new work plus revision discipline.",
        ],
      },
      {
        id: "pakistan-safety",
        heading: "How do families keep online lessons safe?",
        directAnswer:
          "Supervise young learners, use known platforms, and confirm the tutor before continuing payment.",
        paragraphs: [
          "Keep devices in a family space for younger children. Review safeguarding guidance and avoid large prepaid commitments before a successful trial.",
        ],
      },
      {
        id: "pakistan-start",
        heading: "How should a Pakistani family start?",
        directAnswer:
          "Share city, preferred PKT window and course goal, then request a free trial.",
        paragraphs: [
          "Mention Karachi, Lahore or Islamabad clearly. Add female-tutor preference if needed. Protect short daily practice between live lessons.",
        ],
      },
    ],
  },

  "online-quran-classes-malaysia": {
    country: "Malaysia",
    title: "Online Quran Classes in Malaysia: Family Guide",
    description:
      "Practical guidance for Malaysian families choosing live online Quran lessons — MYT evenings, KL and Penang context, Tajweed support, USD/MYR budgeting, and a free trial.",
    reviewedDate: "28 July 2026",
    sections: [
      {
        id: "malaysia-fit",
        heading: "Are online Quran classes suitable for Malaysian families?",
        directAnswer:
          "Yes when households want personalised live Tajweed or Hifz support alongside school, with a recurring MYT slot. NoorPath is online-only — not a Malaysian campus.",
        paragraphs: [
          "Malaysia’s Muslim majority already has established Quranic education traditions. Online one-to-one tutoring can add focused correction for families in Kuala Lumpur, Penang, Johor Bahru, Ipoh and Shah Alam without another weekly journey.",
        ],
        bullets: [
          "Remote-only service — no KL campus claim.",
          "MYT evening and weekend preferences subject to matching.",
          "Placement by reading level, not age alone.",
          "Free trial before ongoing payment.",
        ],
      },
      {
        id: "malaysia-schedule",
        heading: "When can families in Malaysia take lessons?",
        directAnswer:
          "Many families request MYT evenings after school or weekend mornings. Exact times are confirmed after tutor matching.",
        paragraphs: [
          "Share co-curricular and tuition conflicts. MYT (UTC+8) does not observe daylight saving — confirm the written local clock time for the recurring slot.",
        ],
      },
      {
        id: "malaysia-courses",
        heading: "Which courses fit learners in Malaysia?",
        directAnswer:
          "Beginners start with Noorani Qaida; readers may continue Quran reading, Tajweed or Hifz after assessment.",
        paragraphs: [
          "If school already covers basics, online lessons can focus on accuracy and revision. If foundations are weak, Qaida first prevents fragile Tajweed habits.",
        ],
      },
      {
        id: "malaysia-pricing",
        heading: "How should Malaysian families read USD prices in MYR?",
        directAnswer:
          "Plans are published and charged in USD. Convert to ringgit for budgeting; NoorPath does not publish a fixed MYR list.",
        paragraphs: [
          "Compare session length and monthly frequency on the pricing page. Card FX fees may change the final MYR amount on your statement.",
        ],
      },
      {
        id: "malaysia-start",
        heading: "How should a Malaysian family start this week?",
        directAnswer:
          "Note your city and preferred MYT window, then request a free trial with no credit card.",
        paragraphs: [
          "State Kuala Lumpur, Penang or another city clearly. Add female-tutor preference if needed.",
        ],
      },
    ],
  },

  "online-quran-classes-bangladesh": {
    country: "Bangladesh",
    title: "Online Quran Classes in Bangladesh: Family Guide",
    description:
      "Guidance for Bangladeshi families choosing live online Quran lessons — BST (UTC+6) schedules, Dhaka and Sylhet context, language preferences, and a free trial path.",
    reviewedDate: "28 July 2026",
    sections: [
      {
        id: "bangladesh-fit",
        heading: "Are online Quran classes suitable for families in Bangladesh?",
        directAnswer:
          "Yes for households that want live one-to-one support alongside madrasa or school learning. NoorPath teaches online only — not a Bangladesh campus.",
        paragraphs: [
          "In Dhaka, Chittagong, Sylhet, Rajshahi and Khulna, online tutoring can add personalised Tajweed or Hifz coaching when group settings leave limited correction time. Suitability is confirmed through a free trial and tutor matching.",
        ],
        bullets: [
          "Remote-only service with no Bangladesh branch claim.",
          "Bangla or English preferences can be noted when booking.",
          "BST (UTC+6) windows subject to matching.",
          "Free trial before ongoing payment.",
        ],
      },
      {
        id: "bangladesh-schedule",
        heading: "What times work in Bangladesh?",
        directAnswer:
          "Request after-school or evening BST windows, or weekend mornings. Exact recurring times are confirmed after matching.",
        paragraphs: [
          "Share school and madrasa conflicts so the proposed slot is realistic. Confirm the written local clock time for the recurring lesson.",
        ],
      },
      {
        id: "bangladesh-courses",
        heading: "Which courses fit learners in Bangladesh?",
        directAnswer:
          "Beginners start with Noorani Qaida; readers may continue Nazra, Tajweed or Hifz based on assessment.",
        paragraphs: [
          "Be honest about current ability. Online one-to-one time works best when the goal is clear — foundations, accuracy or memorisation with revision.",
        ],
      },
      {
        id: "bangladesh-safety",
        heading: "How do families keep online lessons safe?",
        directAnswer:
          "Supervise young learners, use known platforms, and confirm the tutor before continuing payment.",
        paragraphs: [
          "Keep devices in a family space for younger children and review safeguarding guidance before enrolment.",
        ],
      },
      {
        id: "bangladesh-start",
        heading: "How should a Bangladeshi family start?",
        directAnswer:
          "Share city, preferred BST window and language preference, then request a free trial.",
        paragraphs: [
          "Mention Dhaka, Chittagong or Sylhet clearly. Protect short daily practice between live lessons.",
        ],
      },
    ],
  },

  "online-quran-classes-indonesia": {
    country: "Indonesia",
    title: "Online Quran Classes in Indonesia: WIB & WITA Guide",
    description:
      "Guidance for Indonesian families choosing live online Quran lessons — Jakarta and Surabaya context, WIB/WITA scheduling clarity, Tajweed readiness, and a free trial.",
    reviewedDate: "28 July 2026",
    sections: [
      {
        id: "indonesia-fit",
        heading: "Are online Quran classes suitable for Indonesian families?",
        directAnswer:
          "Yes for households that want personalised live correction with a clear local-time request. NoorPath teaches online only — not an Indonesian campus.",
        paragraphs: [
          "As the world’s most populous Muslim country, Indonesia has deep Quranic traditions. Families in Jakarta, Surabaya, Bandung, Medan and Bekasi use online tutoring to add one-to-one Tajweed and Hifz coaching around school schedules.",
        ],
        bullets: [
          "Remote-only service — no Jakarta campus claim.",
          "State WIB or WITA clearly when booking.",
          "Placement by level, not age alone.",
          "Free trial before ongoing payment.",
        ],
      },
      {
        id: "indonesia-timezone",
        heading: "How do WIB and WITA affect scheduling?",
        directAnswer:
          "Indonesia spans multiple time zones. Share your city and preferred local clock time so matching is not ambiguous.",
        paragraphs: [
          "WIB is commonly UTC+7; WITA is commonly UTC+8. An unlabeled “5 PM” can confuse tutors elsewhere. Ask for the appointment labeled with your local zone and confirm daylight-saving behaviour on the tutor’s side if they change clocks.",
        ],
        table: {
          headers: ["Check", "Why it matters"],
          rows: [
            ["City", "Maps the correct local zone for matching"],
            ["Local clock", "Avoids UTC-only assumptions"],
            ["Tutor zone", "Prevents seasonal one-hour drift"],
            ["School finish", "Keeps after-school slots realistic"],
          ],
        },
      },
      {
        id: "indonesia-courses",
        heading: "Which courses fit learners in Indonesia?",
        directAnswer:
          "Beginners start with Noorani Qaida; continuous readers may request Tajweed refinement or Hifz with revision.",
        paragraphs: [
          "If community programmes already cover basics, online lessons can focus on accuracy. If foundations are weak, Qaida first remains the safer path.",
        ],
      },
      {
        id: "indonesia-safety",
        heading: "How do families keep online lessons safe?",
        directAnswer:
          "Supervise young learners, use known platforms, and confirm the tutor before continuing payment.",
        paragraphs: [
          "Agree household camera rules and keep young children in a shared space during early lessons.",
        ],
      },
      {
        id: "indonesia-start",
        heading: "How should an Indonesian family start?",
        directAnswer:
          "State city, WIB/WITA preference and course goal, then request a free trial.",
        paragraphs: [
          "Mention Jakarta, Surabaya or Bandung clearly. Add female-tutor preference if needed.",
        ],
      },
    ],
  },

  "online-quran-classes-singapore": {
    country: "Singapore",
    title: "Online Quran Classes in Singapore: Family Guide",
    description:
      "Guidance for Singaporean Muslim families choosing live online Quran lessons — SGT schedules, school-balance tips, USD/SGD budgeting, and a free trial path.",
    reviewedDate: "28 July 2026",
    sections: [
      {
        id: "singapore-fit",
        heading: "Are online Quran classes suitable for Singaporean families?",
        directAnswer:
          "Yes when households want live one-to-one Quran learning around dense school schedules. NoorPath teaches online only — not a Singapore campus.",
        paragraphs: [
          "Singapore’s Malay-Muslim community balances academic demands with Islamic learning. A recurring SGT evening or weekend lesson can fit without another long journey across the island.",
        ],
        bullets: [
          "Remote-only service with no Singapore branch claim.",
          "SGT windows subject to tutor matching.",
          "Placement by readiness, not birthday alone.",
          "Free trial before ongoing payment.",
        ],
      },
      {
        id: "singapore-schedule",
        heading: "What SGT times typically work?",
        directAnswer:
          "Many families request weekday evenings or weekend mornings in SGT. Exact availability is confirmed after matching.",
        paragraphs: [
          "Share CCA and tuition conflicts. SGT (UTC+8) does not observe daylight saving — still confirm the written local clock time.",
        ],
      },
      {
        id: "singapore-courses",
        heading: "Which courses fit learners in Singapore?",
        directAnswer:
          "Beginners start with Noorani Qaida; readers may continue Quran reading, Tajweed or Hifz after assessment.",
        paragraphs: [
          "A narrower plan completed consistently often beats an overloaded package during exam periods. Revisit placement after several lessons if the material is poorly matched.",
        ],
      },
      {
        id: "singapore-pricing",
        heading: "How should Singapore families read USD prices in SGD?",
        directAnswer:
          "Plans are published and charged in USD. Convert to SGD for budgeting; NoorPath does not publish a fixed SGD list.",
        paragraphs: [
          "Compare session length and frequency on the pricing page. Card FX fees may change the final SGD amount on your statement.",
        ],
      },
      {
        id: "singapore-start",
        heading: "How should a Singapore family start?",
        directAnswer:
          "Note preferred SGT window and course goal, then request a free trial with no credit card.",
        paragraphs: [
          "Add female-tutor preference if needed. Protect short daily practice between live lessons.",
        ],
      },
    ],
  },

  "online-quran-classes-turkey": {
    country: "Turkey",
    title: "Online Quran Classes in Turkey: Family & Expat Guide",
    description:
      "Guidance for Turkish and expat families choosing live online Quran lessons — TRT schedules, Istanbul and Ankara context, language preferences, and a free trial.",
    reviewedDate: "28 July 2026",
    sections: [
      {
        id: "turkey-fit",
        heading: "Are online Quran classes suitable for families in Turkey?",
        directAnswer:
          "Yes for households and expats who want live remote Quran tuition with a recurring TRT slot. NoorPath teaches online only — not a Turkish campus.",
        paragraphs: [
          "Istanbul, Ankara, Izmir, Bursa and Antalya households — including international families — may use online tutoring for Arabic-language Quran instruction or one-to-one Tajweed refinement around school and work.",
        ],
        bullets: [
          "Remote-only service — no Istanbul campus claim.",
          "Arabic or English preferences can be requested.",
          "TRT windows subject to matching.",
          "Free trial before ongoing payment.",
        ],
      },
      {
        id: "turkey-schedule",
        heading: "What TRT times are commonly requested?",
        directAnswer:
          "Many families request after-school or evening TRT slots, with weekend options. Exact times are confirmed after matching.",
        paragraphs: [
          "TRT (UTC+3) does not currently observe daylight saving in the same way as many EU markets — still confirm the written local clock time and how tutor-side clock changes are handled.",
        ],
      },
      {
        id: "turkey-courses",
        heading: "Which courses fit learners in Turkey?",
        directAnswer:
          "Beginners start with Noorani Qaida; continuous readers may request Tajweed or Hifz with revision.",
        paragraphs: [
          "Expats who studied elsewhere should describe prior curricula honestly so placement is not repeated or too advanced.",
        ],
      },
      {
        id: "turkey-safety",
        heading: "How do families keep online lessons safe?",
        directAnswer:
          "Supervise young learners, use known platforms, and confirm the tutor before continuing payment.",
        paragraphs: [
          "Keep early lessons observable and use published billing channels only.",
        ],
      },
      {
        id: "turkey-start",
        heading: "How should a family in Turkey start?",
        directAnswer:
          "Share city, preferred TRT window and language preference, then request a free trial.",
        paragraphs: [
          "Mention Istanbul, Ankara or Izmir clearly. Add female-tutor preference if needed.",
        ],
      },
    ],
  },

  "online-quran-classes-nigeria": {
    country: "Nigeria",
    title: "Online Quran Classes in Nigeria: Family Guide",
    description:
      "Guidance for Nigerian Muslim families choosing live online Quran lessons — WAT schedules, Lagos and Abuja context, female tutor requests, and a free trial path.",
    reviewedDate: "28 July 2026",
    sections: [
      {
        id: "nigeria-fit",
        heading: "Are online Quran classes suitable for Nigerian Muslim families?",
        directAnswer:
          "Yes for households that want live one-to-one Quran tuition from home with a recurring WAT slot. NoorPath teaches online only — not a Nigerian campus.",
        paragraphs: [
          "Nigeria has Africa’s largest Muslim population, concentrated in the north and in Lagos. Families in Lagos, Kano, Ibadan, Abuja and Kaduna can request online Tajweed or Hifz support when travel or local timetable fit is difficult.",
        ],
        bullets: [
          "Remote-only service with no Nigeria branch claim.",
          "WAT evening and weekend preferences subject to matching.",
          "Female tutor preferences can be stated.",
          "Free trial before ongoing payment.",
        ],
      },
      {
        id: "nigeria-schedule",
        heading: "What WAT times work after school?",
        directAnswer:
          "Many families request weekday evenings or weekend mornings in WAT. Exact recurring times are confirmed after matching.",
        paragraphs: [
          "Share school finish times and power/internet constraints honestly so the proposed slot is realistic. Confirm the written local clock time.",
        ],
        table: {
          headers: ["Planning factor", "What to confirm"],
          rows: [
            ["Connectivity", "Is a stable connection available at the proposed hour?"],
            ["Backup plan", "What happens if power fails mid-lesson?"],
            ["Sibling share", "One device for two learners — separate slots needed?"],
            ["Weekend option", "Is a Saturday morning more reliable than weekdays?"],
          ],
        },
      },
      {
        id: "nigeria-courses",
        heading: "Which courses fit learners in Nigeria?",
        directAnswer:
          "Beginners start with Noorani Qaida; readers may continue Quran reading, Tajweed or Hifz after assessment.",
        paragraphs: [
          "Between live lessons, families may use the Interactive Noorani Qaida hub for free recognition practice — soft support only.",
        ],
      },
      {
        id: "nigeria-safety",
        heading: "How do families keep online lessons safe?",
        directAnswer:
          "Supervise young learners, use known platforms, and confirm the tutor before continuing payment.",
        paragraphs: [
          "Keep devices in a family space for younger children and avoid informal payment requests outside published channels.",
        ],
      },
      {
        id: "nigeria-start",
        heading: "How should a Nigerian family start?",
        directAnswer:
          "Share city, preferred WAT window and course goal, then request a free trial.",
        paragraphs: [
          "Mention Lagos, Abuja or Kano clearly. Add female-tutor preference if needed.",
        ],
      },
    ],
  },

  "online-quran-classes-south-africa": {
    country: "South Africa",
    title: "Online Quran Classes in South Africa: Family Guide",
    description:
      "Guidance for South African Muslim families choosing live online Quran lessons — SAST schedules, Cape Town and Johannesburg context, USD/ZAR budgeting, and a free trial.",
    reviewedDate: "28 July 2026",
    sections: [
      {
        id: "south-africa-fit",
        heading: "Are online Quran classes suitable for South African Muslim families?",
        directAnswer:
          "Yes for households that want live remote Quran tuition with a recurring SAST slot. NoorPath teaches online only — not a South African campus.",
        paragraphs: [
          "South Africa’s established Muslim communities in Cape Town, Durban and Johannesburg have a rich Islamic heritage. Families can request Tajweed or Hifz lessons online when travel, timetable fit or female-tutor preference is hard to meet locally.",
        ],
        bullets: [
          "Remote-only service — no Cape Town or Johannesburg campus claim.",
          "SAST evening and weekend preferences subject to matching.",
          "Placement by level, not age alone.",
          "Free trial before ongoing payment.",
        ],
      },
      {
        id: "south-africa-schedule",
        heading: "What SAST times are commonly requested?",
        directAnswer:
          "Many families request after-school evenings or weekend mornings in SAST. Exact times are confirmed after matching.",
        paragraphs: [
          "SAST (UTC+2) does not observe daylight saving. Still confirm the written local clock time and how tutor-side clock changes are handled if the tutor’s country changes clocks.",
        ],
      },
      {
        id: "south-africa-courses",
        heading: "Which courses fit learners in South Africa?",
        directAnswer:
          "Beginners start with Noorani Qaida; continuous readers may request Tajweed or Hifz with revision.",
        paragraphs: [
          "Describe prior madrasah or school Islamic studies honestly so online placement complements rather than duplicates poorly.",
        ],
      },
      {
        id: "south-africa-pricing",
        heading: "How should South African families read USD prices in ZAR?",
        directAnswer:
          "Plans are published and charged in USD. Convert to rand for budgeting; NoorPath does not publish a fixed ZAR list.",
        paragraphs: [
          "Compare session length and frequency on the pricing page. Card FX fees may change the final ZAR amount on your statement.",
        ],
      },
      {
        id: "south-africa-start",
        heading: "How should a South African family start?",
        directAnswer:
          "Share city, preferred SAST window and course goal, then request a free trial.",
        paragraphs: [
          "Mention Cape Town, Johannesburg or Durban clearly. Add female-tutor preference if needed.",
        ],
      },
    ],
  },
};
