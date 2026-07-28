import type { CountryGuideContent } from "@/data/countryGuideTypes";

/**
 * Phase B — Helpful Content: country guides for Ireland and New Zealand
 * (EXTRA FAQs already exist; these guides deepen uniqueness on existing hubs).
 * Online-only — no campus claims; no invented statistics.
 */
export const countryGuidesIrelandNz: Record<string, CountryGuideContent> = {
  "online-quran-classes-ireland": {
    country: "Ireland",
    title: "Online Quran Classes in Ireland: Dublin & Family Guide",
    description:
      "Practical guidance for Irish Muslim families choosing live online Quran and Noorani Qaida lessons — GMT/IST schedules, Dublin context, female tutor requests, and a free trial path.",
    reviewedDate: "28 July 2026",
    sections: [
      {
        id: "ireland-fit",
        heading: "Are online Quran classes suitable for Muslim families in Ireland?",
        directAnswer:
          "Yes for households that want live remote Quran tuition from home and a recurring GMT or IST slot. NoorPath is an online academy — not an Irish mosque branch or Dublin campus.",
        paragraphs: [
          "Ireland’s Muslim community is centred in Dublin, with families also in Cork, Limerick and Galway. Parents often search for online Quran classes in Dublin when after-school travel is hard, or for a female Quran teacher in Ireland when a suitable local option is limited.",
          "Treat this country page as an invitation to enquire. Verify the proposed tutor, schedule and course during a free trial before ongoing payment.",
        ],
        bullets: [
          "Remote-only service — no claim of a NoorPath campus in Ireland.",
          "Female tutor preferences can be requested and are confirmed after matching.",
          "Children should be placed by level, not only by age.",
          "A free trial is the correct place to test audio, rapport and placement.",
        ],
      },
      {
        id: "ireland-schedule",
        heading: "When can families in Ireland take online Quran classes?",
        directAnswer:
          "Classes are commonly requested after school in GMT or IST, or on weekend mornings. Exact times depend on tutor matching.",
        paragraphs: [
          "Ireland observes daylight-saving changes between GMT and IST. Ask for the lesson time as it will appear on your local clock in winter and summer, and confirm what happens at the spring and autumn changes so the slot stays predictable.",
          "Share school finish times and extracurricular conflicts when you book. Younger children often focus better in late afternoon; older pupils may need later slots around homework.",
        ],
        table: {
          headers: ["Planning factor", "What to confirm"],
          rows: [
            ["After-school window", "Is a weekday GMT/IST evening realistic?"],
            ["Clock changes", "Will Ireland local time stay fixed across GMT/IST?"],
            ["Travel buffer", "Does Dublin traffic make an earlier start hard?"],
            ["Device & space", "Is a quiet, lit family space available?"],
          ],
        },
      },
      {
        id: "ireland-courses",
        heading: "Which courses fit learners in Ireland?",
        directAnswer:
          "Beginners usually start with Noorani Qaida. Children who already read may continue Quran reading, Tajweed, or Hifz. Course choice should follow assessment, not a label alone.",
        paragraphs: [
          "Between live lessons, families may use the Interactive Noorani Qaida hub for free recognition practice — soft support only; live teachers remain the correction path for uncertain sounds.",
          "Adults and teens often prefer discreet one-to-one lessons that do not require joining a large weekend group.",
        ],
        bullets: [
          "Start with foundations if letter recognition is still weak.",
          "Request Tajweed when continuous reading exists.",
          "Treat Hifz as new memorisation plus revision.",
          "Review published USD pricing before budgeting in euros.",
        ],
      },
      {
        id: "ireland-safety",
        heading: "How do online Quran classes stay safe for families in Ireland?",
        directAnswer:
          "Use known meeting platforms, allow parental observation, confirm the tutor before ongoing payment, and keep young learners in a shared space.",
        paragraphs: [
          "Online delivery does not remove parental responsibility. Prefer academies that explain safeguarding and confirm credentials for the proposed match. Review NoorPath’s safeguarding guidance before enrolment.",
        ],
      },
      {
        id: "ireland-cities",
        heading: "Can Dublin and smaller-city families use the same online service?",
        directAnswer:
          "Yes. Lessons are online, so Dublin, Cork, Galway and families further from Islamic centres can request the same trial and matching process.",
        paragraphs: [
          "Share your city and preferred local times when you book. City pages such as Dublin deepen local scheduling tips; this country guide remains the Ireland-wide overview.",
        ],
      },
      {
        id: "ireland-start",
        heading: "How should a family in Ireland start this week?",
        directAnswer:
          "Note your city and preferred GMT/IST window, then request a free trial with no credit card.",
        paragraphs: [
          "State Dublin, Cork or Galway clearly. Add female-tutor preference if needed. After matching, protect a short daily home echo so live lessons compound.",
        ],
      },
    ],
  },

  "online-quran-classes-new-zealand": {
    country: "New Zealand",
    title: "Online Quran Classes for Kids in New Zealand: Family Guide",
    description:
      "Practical guidance for New Zealand families choosing live online Quran and Noorani Qaida lessons — NZST/NZDT schedules, Auckland and smaller-town context, and a free trial path.",
    reviewedDate: "28 July 2026",
    sections: [
      {
        id: "nz-fit",
        heading: "Are online Quran classes suitable for kids in New Zealand?",
        directAnswer:
          "Yes for households that want structured live remote Quran learning after school in NZST or NZDT. NoorPath is an online academy — not a New Zealand campus.",
        paragraphs: [
          "New Zealand’s Muslim community is concentrated in Auckland, with families also in Wellington, Christchurch, Hamilton and smaller towns. Outside major centres, full-time Islamic schooling and nearby mosque programmes are often limited, so many households look for online Quran classes for kids that fit after-school windows.",
          "Suitability depends on the child’s attention span, language comfort, and confirmed tutor availability after a free trial — not on marketing promises of instant fluency.",
        ],
        bullets: [
          "Remote-only service — no NZ branch claim.",
          "Early-morning and evening lesson preferences can be requested.",
          "Female tutor preferences can be stated when booking.",
          "Free trial before ongoing payment.",
        ],
      },
      {
        id: "nz-schedule",
        heading: "What class times work for online Quran classes in New Zealand?",
        directAnswer:
          "Many families request after-school evenings or weekend mornings in NZST or NZDT. Exact recurring times depend on tutor matching.",
        paragraphs: [
          "New Zealand observes daylight saving. Confirm how NZST/NZDT changes are handled so the local clock time stays predictable. Because New Zealand is far ahead of many tutor time zones, share preferred local windows clearly and expect matching to take account of tutor-side hours.",
        ],
        table: {
          headers: ["Planning factor", "What to confirm"],
          rows: [
            ["After-school window", "Is a weekday NZST/NZDT evening realistic?"],
            ["Clock changes", "Will NZ local time stay fixed across NZST/NZDT?"],
            ["Tutor-side hour", "Is the proposed slot sustainable for the matched tutor?"],
            ["Smaller towns", "Is connectivity reliable at the agreed hour?"],
          ],
        },
      },
      {
        id: "nz-courses",
        heading: "Which courses fit learners in New Zealand?",
        directAnswer:
          "Beginners usually start with Noorani Qaida. Children who already read may continue Quran reading, Tajweed, or Hifz after assessment.",
        paragraphs: [
          "When a nearby mosque or weekend madrasah is not available, live online 1-to-1 tutoring still provides regular listening and correction. Between live lessons, families may use the Interactive Noorani Qaida hub for free recognition practice.",
        ],
        bullets: [
          "Start with foundations if letter recognition is still weak.",
          "Request Tajweed when continuous reading exists.",
          "Treat Hifz as new memorisation plus revision.",
          "Review published USD pricing before budgeting in NZD.",
        ],
      },
      {
        id: "nz-geography",
        heading: "Can Auckland and smaller-town NZ families use the same service?",
        directAnswer:
          "Yes. Lessons are online, so Auckland, Wellington, Christchurch, Hamilton and families further from Islamic centres can request the same trial and matching process.",
        paragraphs: [
          "Share your city and preferred local times when you book. Auckland has denser community options, but online tutoring still helps when schedules, travel or female-tutor preferences are hard to meet locally.",
        ],
      },
      {
        id: "nz-safety",
        heading: "How do online Quran classes stay safe for NZ families?",
        directAnswer:
          "Use known meeting platforms, allow parental observation, confirm the tutor before ongoing payment, and keep young learners in a shared space.",
        paragraphs: [
          "Prefer academies that explain safeguarding and confirm credentials for the proposed match. Review NoorPath’s safeguarding guidance before enrolment.",
        ],
      },
      {
        id: "nz-start",
        heading: "How should a New Zealand family start this week?",
        directAnswer:
          "Note your city and preferred NZST/NZDT window, then request a free trial with no credit card.",
        paragraphs: [
          "State Auckland, Wellington or Christchurch clearly. Add female-tutor preference if needed. After matching, protect a short daily home echo so live lessons compound.",
        ],
      },
    ],
  },
};
