import type { CountryGuideContent } from "@/data/countryGuideTypes";
import {
  CANCELLATION_NOTICE_DAYS,
  FAMILY_DISCOUNTS,
  PRICING_PLANS,
  REFUND_WINDOW_DAYS,
  RESCHEDULE_NOTICE_HOURS,
  TRIAL_OFFER,
  TUTOR_FACTS,
} from "@/lib/academyFacts";

/**
 * Rewritten Hong Kong guide (Nov 2026). Supersedes the entry in
 * countryGuidesSpainHongKong.ts, which shared its structure with the Singapore
 * guide. Facts come from academyFacts only.
 */

const siblingDiscounts = FAMILY_DISCOUNTS.map((d) => `${d.discountPercent}% for ${d.siblings}`).join(", ");

export const countryGuidesHongKong: Record<string, CountryGuideContent> = {
  "online-quran-classes-hong-kong": {
    country: "Hong Kong",
    title: "Online Quran Classes in Hong Kong: Making Lessons Work in a Busy City",
    description:
      "A practical guide for Hong Kong families and adults: protecting a lesson slot in a tutoring-heavy week, learning well in a compact home, choosing a starting point, tutor checks, paying in USD and following progress.",
    reviewedDate: "4 November 2026",
    sections: [
      {
        id: "hk-guide-why",
        heading: "Why do Hong Kong families learn the Quran online?",
        directAnswer:
          "Because one-to-one lessons at home save commuting time and give children a teacher who explains in English and hears every letter.",
        paragraphs: [
          "Quran classes taught in English are limited in Hong Kong, and getting to one can mean a long MTR ride after an already long school day. A live online lesson removes the journey, so the time goes on recitation rather than travel.",
          "Because the lesson is one-to-one, the tutor adjusts to your child: slower for a beginner who is unsure of letter shapes, more demanding for a confident reader working on Tajweed.",
        ],
      },
      {
        id: "hk-guide-slot",
        heading: "How do you protect a lesson slot in a packed week?",
        directAnswer:
          "Pick one or two short, fixed times in HKT and treat them like any other tutoring session, rather than fitting lessons in when there is space.",
        paragraphs: [
          "Hong Kong Time is UTC+8 all year with no daylight saving, so a slot stays at the same local time through the year. You share the windows that suit you and NoorPath confirms a tutor and recurring time; there is no fixed public timetable.",
          `Exam periods and school events will clash sometimes. A class can be moved with ${RESCHEDULE_NOTICE_HOURS} hours' notice, subject to tutor availability, which is easier on everyone than cancelling lessons for a whole term.`,
        ],
        bullets: [
          "Younger children: a short slot soon after school, before tiredness sets in",
          "Older children: evenings after homework, or a weekend morning",
          "Adults: later evenings after work and dinner",
        ],
      },
      {
        id: "hk-guide-home",
        heading: "How can a small flat work as a classroom?",
        directAnswer:
          "You don't need a separate room — a fixed corner, headphones and a parent within earshot are enough.",
        paragraphs: [
          "Most of what makes an online Quran lesson work is sound: the tutor needs to hear exactly how each letter is pronounced. In a busy household, headphones with a microphone cut background noise more than any other change.",
        ],
        bullets: [
          "Use the same table or corner for every lesson so it becomes routine",
          "Put the device on a stand at eye level and keep the Qaida or Mushaf beside it",
          "Keep younger siblings' lessons at separate times so each child gets full attention",
          "Stay close enough to hear the lesson, especially for young children",
        ],
      },
      {
        id: "hk-guide-start",
        heading: "Which course should your child begin with?",
        directAnswer: "The tutor checks your child's reading in the trial and suggests a starting point.",
        paragraphs: [],
        table: {
          headers: ["If your child…", "They usually start with"],
          rows: [
            ["Doesn't recognise Arabic letters yet", "Noorani Qaida from the beginning"],
            ["Knows letters but reads slowly", "Qaida revision and joining practice"],
            ["Reads the Mushaf with some mistakes", "Guided Quran reading with Tajweed correction"],
            ["Reads well and wants to memorize", "Hifz with structured revision"],
          ],
        },
        relatedLinks: [
          { href: "/noorani-qaida", label: "How Noorani Qaida is taught" },
          { href: "/online-quran-classes-for-kids", label: "Online Quran classes for kids" },
        ],
      },
      {
        id: "hk-guide-tutor",
        heading: "Who will teach, and how are children kept safe?",
        directAnswer: `${TUTOR_FACTS.credentials} You meet the tutor in the trial before paying.`,
        paragraphs: [
          `${TUTOR_FACTS.femaleTutors} Ask for a female tutor when you enquire; one is assigned subject to availability and confirmed before the trial. ${TUTOR_FACTS.rematch}`,
          "For children, a parent should arrange lessons, stay nearby and use NoorPath's official contact channels.",
        ],
        relatedLinks: [{ href: "/safeguarding", label: "Safeguarding guidance for parents" }],
      },
      {
        id: "hk-guide-adults",
        heading: "Can adults in Hong Kong learn too?",
        directAnswer:
          "Yes. Adults can start from the alphabet, return after years away or work on Tajweed, privately and at their own pace.",
        paragraphs: [
          "Many working adults prefer a late-evening lesson once the day is done. One-to-one lessons mean nobody else hears your mistakes, which makes it easier to start again as an adult.",
        ],
        relatedLinks: [{ href: "/online-quran-classes-for-adults", label: "Quran classes for adults" }],
      },
      {
        id: "hk-guide-fees",
        heading: "How do fees work from Hong Kong?",
        directAnswer: `Plans are priced and billed in US dollars, from $${PRICING_PLANS[0].monthlyPriceUsd} a month, after ${TRIAL_OFFER} with no card needed.`,
        paragraphs: [
          `Your bank or card provider converts the USD charge to Hong Kong dollars at its own rate and may add fees; the plans section on this page shows approximate HKD amounts. Sibling discounts are ${siblingDiscounts}. A full refund is available if you ask within ${REFUND_WINDOW_DAYS} days of the first paid class, and plans can be cancelled with ${CANCELLATION_NOTICE_DAYS} days' notice before the next billing date.`,
        ],
        relatedLinks: [{ href: "/pricing", label: "Compare all plans" }],
      },
      {
        id: "hk-guide-progress",
        heading: "How should you judge progress?",
        directAnswer:
          "By steadier reading and fewer repeated corrections over the weeks — not by a promised finishing date.",
        paragraphs: [
          "Enrolled families get Parent Portal access showing attendance, homework, quizzes, daily progress and teacher reports. A few minutes of reading aloud at home between lessons does more than an occasional long session.",
        ],
      },
    ],
  },
};
