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
import { OFFICIAL_PEGS } from "@/lib/currency/rates";

/**
 * Rewritten country guides for Pakistan, Oman and Nigeria (Nov 2026).
 * They supersede the shorter/duplicated entries in countryGuidesAsiaAfrica.ts and
 * countryGuidesEuropeOman.ts. Facts come from academyFacts only — no invented
 * statistics, local offices, tutor names or outcome timelines.
 */

const plansTable = {
  headers: ["Plan", "What it includes"] as [string, string],
  rows: PRICING_PLANS.map(
    (plan): [string, string] => [
      `${plan.name} — $${plan.monthlyPriceUsd}/month`,
      `${plan.sessionsPerWeek} one-to-one lesson${plan.sessionsPerWeek > 1 ? "s" : ""} a week, ${plan.sessionMinutes} minutes each (${plan.sessionsPerMonth} a month)`,
    ],
  ),
};

const omrPerUsd = OFFICIAL_PEGS.OMR.perUsd;

const siblingDiscounts = FAMILY_DISCOUNTS.map((d) => `${d.discountPercent}% for ${d.siblings}`).join(", ");

export const countryGuidesOmanPakistanNigeria: Record<string, CountryGuideContent> = {
  "online-quran-classes-pakistan": {
    country: "Pakistan",
    title: "Online Quran Classes in Pakistan: A Parent's Guide to Nazra, Tajweed and Hifz at Home",
    description:
      "How Pakistani families can use live one-to-one online lessons for Nazra with Tajweed, Hifz and adult learning — choosing a starting point, planning around school and power cuts, checking tutors, fees and progress.",
    reviewedDate: "4 November 2026",
    sections: [
      {
        id: "pakistan-guide-fit",
        heading: "Is online Quran learning a good fit for your child in Pakistan?",
        directAnswer:
          "It suits families who want their child to read with correct Tajweed and get one teacher's full attention, without a daily trip to a Quran centre.",
        paragraphs: [
          "In a busy masjid class or Quran centre, a teacher may hear each child recite for only a few minutes. In a one-to-one online lesson the whole session is your child's turn: every letter is heard, every mistake is corrected straight away, and the pace matches your child rather than the group.",
          "Online lessons are not the only right answer. Some children thrive in a local group with friends; others drift when nobody is listening closely. Many parents keep a local routine and add a short online lesson for focused recitation practice. The trial is the honest way to see which your child needs.",
        ],
        bullets: [
          "Children who are shy about reciting in front of a group",
          "Families where school, tuition and traffic leave little time for travel",
          "Learners who need slower, patient correction of specific letters",
          "Adults who want to learn privately at their own pace",
        ],
      },
      {
        id: "pakistan-guide-start",
        heading: "Nazra, Tajweed or Hifz: where should your child start?",
        directAnswer:
          "Most children start with Noorani Qaida, move into Nazra (reading the whole Quran) with Tajweed, and only then consider Hifz. The tutor confirms the starting point in the trial.",
        paragraphs: [
          `Rushing from Qaida into the Mushaf is the most common reason children read quickly but incorrectly. A tutor checks letter sounds, joining and vowel marks before moving on. Read more about how Noorani Qaida is taught and learning Tajweed online.`,
        ],
        table: {
          headers: ["Where your child is now", "Usual starting point"],
          rows: [
            ["Doesn't know the Arabic letters yet", "Noorani Qaida from the beginning"],
            ["Knows letters but joins slowly or guesses", "Qaida revision, then early Nazra"],
            ["Reads the Mushaf but makes pronunciation mistakes", "Nazra with Tajweed correction"],
            ["Reads fluently and wants to memorize", "Hifz, with regular revision"],
          ],
        },
        relatedLinks: [{ href: "/noorani-qaida", label: "How Noorani Qaida is taught" }, { href: "/learn-tajweed-online", label: "Learning Tajweed online" }],
      },
      {
        id: "pakistan-guide-schedule",
        heading: "How do lessons fit around school and tuition in PKT?",
        directAnswer:
          "Choose a short, regular slot your child can keep every week — usually after school and lunch, early evening, or weekend mornings — in Pakistan Standard Time.",
        paragraphs: [
          "Pakistan Standard Time is UTC+5 all year, with no daylight saving. Lesson times are agreed in PKT and confirmed after a tutor is matched; there is no fixed public timetable.",
          `A few shorter lessons a week usually work better for children than one long session. If school exams or a family event clash, a class can be moved with ${RESCHEDULE_NOTICE_HOURS} hours' notice, subject to tutor availability. Our article on balancing school and online Quran in Pakistan has more ideas.`,
        ],
        relatedLinks: [{ href: "/blog/balancing-school-and-online-quran-in-pakistan", label: "Balancing school and online Quran in Pakistan" }],
      },
      {
        id: "pakistan-guide-setup",
        heading: "What setup do you need, and what about power cuts?",
        directAnswer:
          "A phone, tablet or laptop with a camera, a stable connection and headphones are enough. A backup plan for outages keeps lessons on track.",
        paragraphs: [
          "Load-shedding and connection drops are a reality for many households, so plan for them rather than hoping they won't happen.",
        ],
        bullets: [
          "Charge the device before each lesson, and keep a UPS or power bank if you can",
          "Keep mobile data available as a backup if your home internet drops",
          "Use headphones so the tutor hears your child clearly and background noise stays low",
          "Choose a quiet corner where a parent can see and hear the lesson",
          `If you know about a scheduled outage, move the class with ${RESCHEDULE_NOTICE_HOURS} hours' notice`,
        ],
      },
      {
        id: "pakistan-guide-tutor",
        heading: "How do you know you can trust the tutor?",
        directAnswer: `${TUTOR_FACTS.credentials} You meet the tutor in the trial before paying.`,
        paragraphs: [
          `${TUTOR_FACTS.femaleTutors} Mention a female tutor preference when you enquire; it is assigned subject to availability and confirmed before the trial. ${TUTOR_FACTS.rematch}`,
          `Parents should arrange lessons for children, stay nearby during class and use official contact channels. See our safeguarding guidance for parents.`,
        ],
        relatedLinks: [{ href: "/safeguarding", label: "Safeguarding guidance for parents" }],
      },
      {
        id: "pakistan-guide-fees",
        heading: "What do online Quran classes cost?",
        directAnswer: `Plans start at $${PRICING_PLANS[0].monthlyPriceUsd} a month and are billed in US dollars. New students start with ${TRIAL_OFFER}, with no credit card.`,
        paragraphs: [
          `NoorPath bills in USD, and your bank or card provider converts the charge at its own rate. Sibling discounts are ${siblingDiscounts}. A full refund is available if you ask within ${REFUND_WINDOW_DAYS} days of the first paid class, and plans can be cancelled with ${CANCELLATION_NOTICE_DAYS} days' notice before the next billing date.`,
        ],
        table: plansTable,
        relatedLinks: [{ href: "/pricing", label: "Compare all plans and pricing" }],
      },
      {
        id: "pakistan-guide-progress",
        heading: "How will you know your child is progressing?",
        directAnswer:
          "Look for fewer repeated corrections, smoother joining and confident reading of new pages — not a promised finishing date.",
        paragraphs: [
          "Enrolled families get Parent Portal access showing attendance, homework, quizzes, daily progress and teacher reports. Ask the tutor which letters or rules your child is working on this month, and listen to five minutes of practice at home between lessons.",
          "Every child moves at a different pace depending on age, starting level, lesson frequency and home practice, so NoorPath does not promise a fixed date to finish Nazra or Hifz.",
        ],
        relatedLinks: [{ href: "/hifz-quran-online", label: "When your child is ready for Hifz" }],
      },
    ],
  },

  "online-quran-classes-oman": {
    country: "Oman",
    title: "Online Quran Classes in Oman: A Guide for Families in Muscat and Beyond",
    description:
      "Practical guidance for families in Oman choosing live one-to-one online Quran lessons — fitting a Sunday–Thursday school week, Ramadan and summer routines, starting points by age, tutor checks and fees.",
    reviewedDate: "4 November 2026",
    sections: [
      {
        id: "oman-guide-fit",
        heading: "Who are online Quran classes in Oman best suited to?",
        directAnswer:
          "Families who want a patient, English-speaking tutor giving their child one-to-one attention at home — whether they live in Muscat or a smaller town.",
        paragraphs: [
          "Many families in Oman, Omani and expatriate alike, can find a Quran class locally. What is harder to find is a teacher who listens to one child for the whole lesson and explains in English, which matters for children at English-medium and international schools.",
          "Online lessons work alongside, not against, local learning. Some children attend a masjid class for community and add an online lesson for individual recitation practice; others learn entirely online because of distance or timing.",
        ],
      },
      {
        id: "oman-guide-week",
        heading: "How do lessons fit a Sunday–Thursday school week?",
        directAnswer:
          "Choose a regular after-school or early-evening slot on school days, or a Friday or Saturday morning, in Gulf Standard Time.",
        paragraphs: [
          "Oman uses Gulf Standard Time, UTC+4, all year, with a Friday–Saturday weekend. Lesson times are agreed in Oman time and confirmed after a tutor is matched; there is no fixed public timetable.",
          `Younger children usually manage best with a short lesson before dinner rather than late in the evening. If a school event clashes, a class can be moved with ${RESCHEDULE_NOTICE_HOURS} hours' notice, subject to tutor availability.`,
        ],
        relatedLinks: [{ href: "/blog/after-school-quran-classes-for-gulf-families", label: "After-school Quran classes for Gulf families" }],
      },
      {
        id: "oman-guide-ramadan",
        heading: "What about Ramadan and the long summer break?",
        directAnswer:
          "Routines change in Ramadan and over the summer, so agree temporary lesson times with NoorPath early rather than pausing without a plan.",
        paragraphs: [
          "In Ramadan many families prefer lessons after iftar or earlier in the day when children are less tired. Over the summer, some families travel and others have more free time. Either way, tell NoorPath your preferred times in advance so they can be confirmed with the tutor.",
          "Even one short lesson a week during busy periods helps a child keep what they have learned, rather than restarting after a long gap.",
        ],
      },
      {
        id: "oman-guide-start",
        heading: "Where should your child start?",
        directAnswer: "The tutor checks your child's level in the trial and recommends a starting point.",
        paragraphs: [],
        table: {
          headers: ["Learner", "Typical starting point"],
          rows: [
            ["Young child new to Arabic letters", "Noorani Qaida — letter sounds, vowel marks and joining"],
            ["Child who reads slowly or guesses", "Qaida revision, then guided Quran reading"],
            ["Fluent reader", "Tajweed — Makharij and the rules of recitation"],
            ["Older child ready to memorize", "Hifz with structured revision"],
            ["Adult beginner or returner", "Private lessons from their current level"],
          ],
        },
        relatedLinks: [
          { href: "/online-quran-classes-for-kids", label: "Online Quran classes for kids" },
          { href: "/online-quran-classes-for-adults", label: "Quran classes for adults" },
        ],
      },
      {
        id: "oman-guide-tutor",
        heading: "What can parents check about the tutor?",
        directAnswer: `${TUTOR_FACTS.credentials} You meet the tutor in the trial before paying anything.`,
        paragraphs: [
          `${TUTOR_FACTS.femaleTutors} Ask for a female tutor when you enquire; one is assigned subject to availability and confirmed before the trial. ${TUTOR_FACTS.rematch}`,
          `For children, a parent should arrange the lessons and stay nearby. Read our safeguarding guidance for parents.`,
        ],
        relatedLinks: [{ href: "/safeguarding", label: "Safeguarding guidance for parents" }],
      },
      {
        id: "oman-guide-fees",
        heading: "How much do classes cost in Oman?",
        directAnswer: `Plans are billed in US dollars, from $${PRICING_PLANS[0].monthlyPriceUsd} a month. The Omani rial is pegged to the dollar, so the approximate rial cost stays steady.`,
        paragraphs: [
          `The ${OFFICIAL_PEGS.OMR.issuer} pegs the rial at ${omrPerUsd} per US dollar, so $${PRICING_PLANS[0].monthlyPriceUsd} is about OMR ${(PRICING_PLANS[0].monthlyPriceUsd * omrPerUsd).toFixed(2)}. Your bank may still add its own conversion fees. Sibling discounts are ${siblingDiscounts}, and a full refund is available if you ask within ${REFUND_WINDOW_DAYS} days of the first paid class.`,
          `Start with ${TRIAL_OFFER} — no credit card is needed.`,
        ],
        table: plansTable,
        relatedLinks: [{ href: "/pricing", label: "Compare all plans" }],
      },
      {
        id: "oman-guide-space",
        heading: "How do you set up a good learning space at home?",
        directAnswer: "A quiet corner, headphones and a parent within earshot make the biggest difference.",
        paragraphs: [],
        bullets: [
          "Use a laptop or tablet at a table rather than a phone held in the hand",
          "Headphones help the tutor hear exactly how each letter is pronounced",
          "Keep the Qaida or Mushaf open beside the screen",
          "Sit in a shared room so a parent can see and hear the lesson",
          "Five minutes of practice between lessons matters more than one long weekend session",
        ],
      },
    ],
  },

  "online-quran-classes-nigeria": {
    country: "Nigeria",
    title: "Online Quran Classes in Nigeria: A Practical Guide for Parents",
    description:
      "How families in Nigeria can make live one-to-one online Quran lessons work — connection and data, scheduling in WAT around school and traffic, the path from Qaida to Tajweed and Hifz, tutor checks and USD fees.",
    reviewedDate: "4 November 2026",
    sections: [
      {
        id: "nigeria-guide-why",
        heading: "Why do families in Nigeria choose live online Quran lessons?",
        directAnswer:
          "To give their child one teacher's full attention and English explanations at home, without crossing the city after a long school day.",
        paragraphs: [
          "In many cities the school run already takes much of the afternoon, and a separate Islamiyya class adds another journey. A live online lesson brings the teacher into your home for a focused session where your child does all the reciting.",
          "NoorPath's tutors are English-speaking, which helps children at English-medium schools understand why a letter sounds the way it does, not just copy it.",
        ],
      },
      {
        id: "nigeria-guide-connection",
        heading: "How do you make the connection work?",
        directAnswer:
          "A stable connection and a pair of headphones matter more than an expensive device. Plan a data backup for lesson times.",
        paragraphs: [
          "Video lessons need a steady connection for the tutor to hear your child clearly. A few simple steps prevent most problems.",
        ],
        bullets: [
          "Test the connection in the room you will use before the trial",
          "Keep a backup data bundle in case the main connection drops",
          "Charge the device fully, or keep it plugged in during the lesson",
          "Use wired or Bluetooth headphones to cut background noise",
          `If you know the power or internet will be off, move the class with ${RESCHEDULE_NOTICE_HOURS} hours' notice, subject to tutor availability`,
        ],
      },
      {
        id: "nigeria-guide-schedule",
        heading: "When can lessons happen in Nigerian time?",
        directAnswer:
          "Request weekday evenings after school or weekend mornings in West Africa Time; the recurring slot is confirmed after tutor matching.",
        paragraphs: [
          "Nigeria uses West Africa Time, UTC+1, all year with no daylight saving. There is no fixed public timetable: you share the windows that suit your family, and NoorPath confirms a tutor and time.",
          "If traffic means your child gets home late, a later slot or a Saturday morning is often better than squeezing a lesson in straight after school.",
        ],
      },
      {
        id: "nigeria-guide-path",
        heading: "What is the usual path from Qaida to fluent recitation?",
        directAnswer:
          "Children usually move from Noorani Qaida to guided Quran reading, then Tajweed, with Hifz as an option once reading is fluent.",
        paragraphs: [
          `The tutor confirms where your child should start during the trial. See how Noorani Qaida is taught and Tajweed lessons online.`,
        ],
        table: {
          headers: ["Stage", "Focus in lessons"],
          rows: [
            ["Noorani Qaida", "Arabic letters, vowel marks and joining"],
            ["Quran reading", "Reading from the Mushaf with steady correction"],
            ["Tajweed", "Makharij and applying the rules while reading"],
            ["Hifz", "New memorization alongside regular revision"],
          ],
        },
        relatedLinks: [{ href: "/noorani-qaida", label: "How Noorani Qaida is taught" }, { href: "/learn-tajweed-online", label: "Tajweed lessons online" }, { href: "/hifz-quran-online", label: "Online Hifz program" }],
      },
      {
        id: "nigeria-guide-tutor",
        heading: "Can you choose a female tutor, and how are children kept safe?",
        directAnswer: `${TUTOR_FACTS.femaleTutors} A female tutor is assigned subject to availability and confirmed before the trial.`,
        paragraphs: [
          `${TUTOR_FACTS.credentials} ${TUTOR_FACTS.rematch}`,
          `Parents should arrange children's lessons, stay nearby during class and use NoorPath's official contact channels. Read our safeguarding guidance for parents.`,
        ],
        relatedLinks: [{ href: "/safeguarding", label: "Safeguarding guidance for parents" }],
      },
      {
        id: "nigeria-guide-fees",
        heading: "How are fees paid from Nigeria?",
        directAnswer: `Plans are priced and billed in US dollars, from $${PRICING_PLANS[0].monthlyPriceUsd} a month. Start with ${TRIAL_OFFER} — no card needed.`,
        paragraphs: [
          `Because billing is in USD, your bank or card provider converts the charge at its own rate and may add fees, so check your card's foreign-currency terms before enrolling. Sibling discounts are ${siblingDiscounts}. A full refund is available if you ask within ${REFUND_WINDOW_DAYS} days of the first paid class, and plans can be cancelled with ${CANCELLATION_NOTICE_DAYS} days' notice before the next billing date.`,
        ],
        table: plansTable,
        relatedLinks: [{ href: "/pricing", label: "Compare all plans" }],
      },
      {
        id: "nigeria-guide-progress",
        heading: "How can parents follow progress?",
        directAnswer:
          "Use the Parent Portal and listen to a few minutes of practice at home each week.",
        paragraphs: [
          "Enrolled families get Parent Portal access showing attendance, homework, quizzes, daily progress and teacher reports. Progress depends on age, starting level, lesson frequency and home practice, so NoorPath does not promise fixed finishing dates.",
        ],
      },
    ],
  },
};
