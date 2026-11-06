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
 * Parent-first guides (Nov 2026), written from GSC query data:
 * - Australia supersedes the Aug 2026 entry in countryGuidesCanadaAustralia.ts
 *   ("best quran classes for kids in australia", "online tajweed classes australia").
 * - Japan, Russia and China are new hubs. Lessons are taught in English, so these
 *   pages say so plainly rather than implying local-language teaching.
 * Facts come from academyFacts only.
 */

const siblingDiscounts = FAMILY_DISCOUNTS.map((d) => `${d.discountPercent}% for ${d.siblings}`).join(", ");
const fromPrice = `$${PRICING_PLANS[0].monthlyPriceUsd}`;

const START_TABLE = {
  headers: ["If the learner…", "They usually start with"] as [string, string],
  rows: [
    ["Doesn't recognise Arabic letters yet", "Noorani Qaida from the beginning"],
    ["Knows letters but reads slowly", "Qaida revision and joining practice"],
    ["Reads the Mushaf with some mistakes", "Guided Quran reading with Tajweed correction"],
    ["Reads well and wants to memorize", "Hifz with structured revision"],
  ] as Array<[string, string]>,
};

const START_LINKS = [
  { href: "/noorani-qaida", label: "How Noorani Qaida is taught" },
  { href: "/online-quran-classes-for-kids", label: "Online Quran classes for kids" },
];

function tutorSection(id: string): CountryGuideContent["sections"][number] {
  return {
    id,
    heading: "Who will teach, and how are children kept safe?",
    directAnswer: `${TUTOR_FACTS.credentials} You meet the tutor in the trial before paying.`,
    paragraphs: [
      `${TUTOR_FACTS.femaleTutors} Ask for a female tutor when you enquire; one is assigned subject to availability and confirmed before the trial. ${TUTOR_FACTS.rematch}`,
      "For children, a parent should arrange lessons, stay nearby and use NoorPath's official contact channels.",
    ],
    relatedLinks: [{ href: "/safeguarding", label: "Safeguarding guidance for parents" }],
  };
}

function feesSection(id: string, where: string, currencyLine: string): CountryGuideContent["sections"][number] {
  return {
    id,
    heading: `How do fees work from ${where}?`,
    directAnswer: `Plans are priced and billed in US dollars, from ${fromPrice} a month, after ${TRIAL_OFFER} with no card needed.`,
    paragraphs: [
      `${currencyLine} Sibling discounts are ${siblingDiscounts}. A full refund is available if you ask within ${REFUND_WINDOW_DAYS} days of the first paid class, and plans can be cancelled with ${CANCELLATION_NOTICE_DAYS} days' notice before the next billing date.`,
    ],
    relatedLinks: [{ href: "/pricing", label: "Compare all plans" }],
  };
}

export const countryGuidesAustraliaJapanRussiaChina: Record<string, CountryGuideContent> = {
  "online-quran-classes-australia": {
    country: "Australia",
    title: "Online Quran Classes in Australia: A Parent's Guide",
    description:
      "How Australian parents choose a Quran class for their child: what a good class looks like, when weekend madrasa isn't enough, lesson times for every state, Tajweed for teens and adults, and paying from Australia.",
    reviewedDate: "6 November 2026",
    sections: [
      {
        id: "au-guide-why",
        heading: "Why do Australian families choose online Quran classes?",
        directAnswer:
          "Because a local class is often far away, full or at the same time as sport — and one-to-one lessons at home fix all three.",
        paragraphs: [
          "In much of Sydney, Melbourne, Brisbane, Perth and Adelaide, the nearest weekend madrasa can be a long drive, and in regional towns there may be none at all. Saturday classes also clash with junior sport, which most Australian kids play.",
          "A live online lesson brings the teacher home. Because it is one learner with one tutor, every minute is your child reading aloud and being corrected, rather than waiting for a turn in a large group.",
        ],
      },
      {
        id: "au-guide-best-for-kids",
        heading: "What makes the best Quran class for kids in Australia?",
        directAnswer:
          "A qualified teacher, one-to-one attention, short regular lessons at a time your child is fresh, and progress you can see — check all four in the free trial.",
        paragraphs: [
          "There is no single best class for every child; there is the class your child keeps attending and improving in. Use the free trial sessions to judge it with your own child, before you pay anything.",
        ],
        bullets: [
          "Ask to see the tutor's Ijazah or teaching certificate",
          "Check the tutor corrects letters gently and makes your child read, not just listen",
          "Choose a slot after school but before your child is tired — 30 minutes is enough for young learners",
          "Ask how you will see progress: NoorPath families get a Parent Portal with attendance, homework and teacher reports",
          "Make sure you can change tutor if your child doesn't connect with them",
        ],
        relatedLinks: [{ href: "/online-quran-classes-for-kids", label: "Online Quran classes for kids" }],
      },
      {
        id: "au-guide-madrasa",
        heading: "My child goes to weekend madrasa but isn't progressing. What helps?",
        directAnswer:
          "Add one or two short one-to-one lessons a week focused on the letters and rules your child keeps getting wrong.",
        paragraphs: [
          "In a big group, a child who is unsure of a letter can go weeks without being corrected. A one-to-one tutor hears every sound, so the gaps get fixed instead of carried forward. Many families keep madrasa for community and add an online lesson for reading.",
          "Long school holidays are where reading slips most. Online lessons can carry on through the holidays — even from a relative's house or a holiday rental, if there is a connection.",
        ],
      },
      {
        id: "au-guide-times",
        heading: "What lesson times work in each Australian state?",
        directAnswer:
          "Tell us your state; NoorPath confirms a recurring time in your local time and reconfirms it when daylight saving starts or ends.",
        paragraphs: [
          "Daylight saving runs from the first Sunday in October to the first Sunday in April in NSW, Victoria, the ACT, Tasmania and South Australia. Queensland, the Northern Territory and Western Australia keep the same time all year.",
        ],
        table: {
          headers: ["State or territory", "Time zone"],
          rows: [
            ["NSW, Victoria, ACT, Tasmania", "AEST (UTC+10), AEDT (UTC+11) in summer"],
            ["Queensland", "AEST (UTC+10) all year"],
            ["South Australia", "ACST (UTC+9:30), ACDT (UTC+10:30) in summer"],
            ["Northern Territory", "ACST (UTC+9:30) all year"],
            ["Western Australia", "AWST (UTC+8) all year"],
          ],
        },
        bullets: [
          "Younger children: straight after school, before dinner",
          "Older children: early evening after homework, or a weekend morning around sport",
          "Adults: later evenings",
        ],
      },
      {
        id: "au-guide-tajweed",
        heading: "Are there online Tajweed classes in Australia for teens and adults?",
        directAnswer:
          "Yes. Learners who already read the Mushaf can take one-to-one Tajweed lessons, where the tutor corrects the rules on the verses you recite.",
        paragraphs: [
          "Tajweed is learned by reciting and being corrected, so one-to-one works well. Lessons fit around school, uni or shift work in your own time zone. Adults returning to the Quran after years away can also start from the alphabet, privately and at their own pace.",
        ],
        relatedLinks: [
          { href: "/courses/tajweed-classes-online", label: "Tajweed classes online" },
          { href: "/online-quran-classes-for-adults", label: "Quran classes for adults" },
        ],
      },
      {
        id: "au-guide-start",
        heading: "Which course should your child begin with?",
        directAnswer: "The tutor checks your child's reading in the trial and suggests a starting point.",
        paragraphs: [],
        table: START_TABLE,
        relatedLinks: [...START_LINKS, { href: "/hifz-quran-online", label: "Online Hifz classes" }],
      },
      tutorSection("au-guide-tutor"),
      feesSection(
        "au-guide-fees",
        "Australia",
        "Your bank or card provider converts the USD charge to Australian dollars at its own rate and may add fees; the plans section on this page shows approximate AUD amounts.",
      ),
      {
        id: "au-guide-progress",
        heading: "How should you judge progress?",
        directAnswer:
          "By steadier reading and fewer repeated corrections over the weeks — not by a promised finishing date.",
        paragraphs: [
          `Enrolled families get Parent Portal access showing attendance, homework, quizzes, daily progress and teacher reports. If term events clash, a class can be moved with ${RESCHEDULE_NOTICE_HOURS} hours' notice, subject to tutor availability.`,
        ],
      },
    ],
  },

  "online-quran-classes-japan": {
    country: "Japan",
    title: "Online Quran Classes in Japan: A Guide for Muslim Families",
    description:
      "For Muslim families and adults in Japan: why online one-to-one lessons help when the nearest mosque class is far away, JST lesson times around school and juku, keeping children's Quran reading alive, and paying from Japan.",
    reviewedDate: "6 November 2026",
    sections: [
      {
        id: "jp-guide-why",
        heading: "Why do Muslim families in Japan learn the Quran online?",
        directAnswer:
          "Because Quran classes are few and far between in Japan, and a live one-to-one lesson at home removes the journey entirely.",
        paragraphs: [
          "Mosques and weekend classes in Japan are concentrated in a few areas, mostly around Tokyo, Nagoya, Osaka and Fukuoka. Outside those, a family may be hours from the nearest teacher. Even in the big cities, a class taught in English that fits a Japanese school week is hard to find.",
          "Online lessons bring a qualified Quran teacher to your home in Japan Standard Time. Lessons are taught in English, so they suit families where the child or parent is comfortable following English explanations.",
        ],
      },
      {
        id: "jp-guide-school",
        heading: "How do Quran lessons fit around Japanese school, juku and club activities?",
        directAnswer:
          "Pick one or two short, fixed slots in JST — often a weekday evening or a weekend morning — and protect them like juku.",
        paragraphs: [
          "Japan Standard Time is UTC+9 all year with no daylight saving, so once a slot is agreed it stays at the same local time. The Japanese school year starts in April; a new timetable or club schedule is a good moment to review the lesson time.",
          `Exams and school events will clash sometimes. A class can be moved with ${RESCHEDULE_NOTICE_HOURS} hours' notice, subject to tutor availability.`,
        ],
        bullets: [
          "Younger children: a short slot soon after school",
          "Children with bukatsu or juku: a later evening or a Saturday or Sunday morning",
          "Adults: later evenings after work",
        ],
      },
      {
        id: "jp-guide-children",
        heading: "My child speaks Japanese all day. Will they lose their Quran reading?",
        directAnswer:
          "Not if they read aloud to a teacher every week. Regular short lessons keep Arabic letters and sounds fresh.",
        paragraphs: [
          "Children who spend the whole school day in Japanese often find Arabic letters slipping, especially if there is no Quran class nearby. A weekly one-to-one lesson, plus a few minutes of reading at home, keeps the habit going and lets the tutor catch mistakes early.",
          "If your child has never started, they begin with Noorani Qaida — letter shapes, sounds and joining — and move to the Mushaf when ready.",
        ],
        relatedLinks: [{ href: "/noorani-qaida", label: "Free interactive Noorani Qaida" }],
      },
      {
        id: "jp-guide-start",
        heading: "Which course should the learner begin with?",
        directAnswer: "The tutor checks reading in the trial and suggests a starting point.",
        paragraphs: [],
        table: START_TABLE,
        relatedLinks: START_LINKS,
      },
      {
        id: "jp-guide-adults",
        heading: "Can adults and new Muslims in Japan learn too?",
        directAnswer:
          "Yes. Adults can start from the alphabet, return after years away or work on Tajweed, one-to-one and at their own pace.",
        paragraphs: [
          "New Muslims in Japan often have no one locally to learn from. A private lesson means nobody else hears your mistakes. Lessons are in English, so a working level of English helps.",
        ],
        relatedLinks: [
          { href: "/learn-quran-as-a-revert", label: "Learning the Quran as a new Muslim" },
          { href: "/online-quran-classes-for-adults", label: "Quran classes for adults" },
        ],
      },
      tutorSection("jp-guide-tutor"),
      feesSection(
        "jp-guide-fees",
        "Japan",
        "Your bank or card provider converts the USD charge to Japanese yen at its own rate and may add fees; the plans section on this page shows approximate JPY amounts.",
      ),
      {
        id: "jp-guide-home",
        heading: "What do you need at home?",
        directAnswer: "A laptop or tablet with a camera, a stable connection, Zoom, headphones and a Qaida or Mushaf.",
        paragraphs: [
          "Lessons are online, so a typhoon or heavy-rain day that closes schools does not have to stop them, as long as you have power and a connection at home.",
        ],
      },
    ],
  },

  "online-quran-classes-russia": {
    country: "Russia",
    title: "Online Quran Classes in Russia: A Guide for English-Speaking Families",
    description:
      "For English-speaking Muslim families, students and adults in Russia: who online one-to-one Quran lessons suit, lesson times across Russia's time zones, checking payment and connection before you enrol, and choosing a starting point.",
    reviewedDate: "6 November 2026",
    sections: [
      {
        id: "ru-guide-who",
        heading: "Who are NoorPath's online Quran classes in Russia for?",
        directAnswer:
          "Families and adults in Russia who are comfortable learning in English and want a one-to-one Quran teacher at home.",
        paragraphs: [
          "NoorPath tutors teach in English, not Russian. That suits international families, foreign students at Russian universities, expats, and Russian-speaking learners who follow English well. If your child needs explanations in Russian, a local teacher is the better choice.",
          "Russia has long-established Muslim communities in Tatarstan, Bashkortostan, the North Caucasus, Moscow and St Petersburg. Online lessons are an option for families who want one-to-one attention or an English-language class, or who live far from a mosque school.",
        ],
      },
      {
        id: "ru-guide-times",
        heading: "What lesson times work across Russia's time zones?",
        directAnswer:
          "Tell us your city; NoorPath agrees a recurring time in your local time. Russia does not change its clocks, so the slot stays fixed all year.",
        paragraphs: [
          "Russia has eleven time zones and has not used daylight saving since 2014. These are the zones most of our enquiries come from:",
        ],
        table: {
          headers: ["City or region", "Time zone"],
          rows: [
            ["Kaliningrad", "UTC+2"],
            ["Moscow, St Petersburg, Kazan, Grozny, Makhachkala", "Moscow Time (UTC+3)"],
            ["Samara", "UTC+4"],
            ["Ufa, Yekaterinburg, Chelyabinsk", "UTC+5"],
            ["Novosibirsk, Omsk", "UTC+7 / UTC+6"],
          ],
        },
        bullets: [
          "Children: after school, or Saturday and Sunday mornings",
          "University students and adults: evenings",
        ],
      },
      {
        id: "ru-guide-check",
        heading: "What should you check before enrolling from Russia?",
        directAnswer:
          "Two things: that you have a payment method that works for international payments, and that Zoom runs smoothly on your connection.",
        paragraphs: [
          "Cards issued by Russian banks often cannot be used for international payments. Before you commit, ask NoorPath which payment method will work for you; don't assume your usual card will go through.",
          "Use the free trial sessions to test the video connection. If calls drop or the tutor can't hear clearly, tell us during the trial rather than after paying.",
        ],
      },
      {
        id: "ru-guide-start",
        heading: "Which course should the learner begin with?",
        directAnswer: "The tutor checks reading in the trial and suggests a starting point.",
        paragraphs: [],
        table: START_TABLE,
        relatedLinks: START_LINKS,
      },
      {
        id: "ru-guide-adults",
        heading: "Can adults and university students learn too?",
        directAnswer:
          "Yes. Adults can start from the alphabet, return after a gap or work on Tajweed and Hifz, at their own pace.",
        paragraphs: [
          "Students living away from home often find it easier to keep up with a fixed weekly lesson than with irregular classes. One-to-one lessons go at your pace and nobody else hears your mistakes.",
        ],
        relatedLinks: [
          { href: "/online-quran-classes-for-adults", label: "Quran classes for adults" },
          { href: "/courses/tajweed-classes-online", label: "Tajweed classes online" },
        ],
      },
      tutorSection("ru-guide-tutor"),
      feesSection(
        "ru-guide-fees",
        "Russia",
        "Prices are shown and charged in US dollars; NoorPath does not publish a rouble price list.",
      ),
    ],
  },

  "online-quran-classes-china": {
    country: "China",
    title: "Online Quran Classes in China: A Guide for International Families",
    description:
      "For English-speaking Muslim families, students and adults living in mainland China: who online one-to-one Quran lessons suit, China Standard Time scheduling, checking your connection and local rules before you enrol, and paying in USD.",
    reviewedDate: "6 November 2026",
    sections: [
      {
        id: "cn-guide-who",
        heading: "Who are NoorPath's online Quran classes in China for?",
        directAnswer:
          "English-speaking Muslim families, international students and working adults in mainland China who want a one-to-one Quran teacher at home.",
        paragraphs: [
          "NoorPath tutors teach in English, not Mandarin. Most of our enquiries from China come from expat families in Beijing, Shanghai, Guangzhou, Shenzhen and Yiwu, and from international students at Chinese universities.",
          "Rules on religious education in mainland China differ from those in most other countries. Families — especially those with children — should check what applies to them before enrolling.",
        ],
        relatedLinks: [{ href: "/locations/online-quran-classes-hong-kong", label: "Living in Hong Kong? See the Hong Kong page" }],
      },
      {
        id: "cn-guide-times",
        heading: "What lesson times work in China?",
        directAnswer:
          "China uses one time zone, China Standard Time (UTC+8), all year with no daylight saving, so an agreed slot never moves.",
        paragraphs: [
          "The whole country — from Shanghai to Urumqi — runs on Beijing time, so tell us your preferred local times and NoorPath confirms a tutor and recurring slot.",
        ],
        bullets: [
          "Children at international schools: after school or weekend mornings",
          "Students and working adults: evenings",
        ],
      },
      {
        id: "cn-guide-connection",
        heading: "Will online lessons work on my connection in China?",
        directAnswer: "Test it in the free trial sessions before you pay — that is exactly what they are for.",
        paragraphs: [
          "Lessons run live on Zoom. Some international apps and websites, including WhatsApp, may not be reachable from mainland China, so when you enquire, give us a way to reach you that works for you, such as email.",
          "If video drops or the tutor can't hear clearly during the trial, tell us then, rather than after paying.",
        ],
      },
      {
        id: "cn-guide-start",
        heading: "Which course should the learner begin with?",
        directAnswer: "The tutor checks reading in the trial and suggests a starting point.",
        paragraphs: [],
        table: START_TABLE,
        relatedLinks: START_LINKS,
      },
      {
        id: "cn-guide-adults",
        heading: "Can adults and international students learn too?",
        directAnswer:
          "Yes. Adults can start from the alphabet, return after a gap or work on Tajweed, one-to-one and at their own pace.",
        paragraphs: [
          "Students far from home often find a fixed weekly lesson keeps their recitation going through a busy semester.",
        ],
        relatedLinks: [{ href: "/online-quran-classes-for-adults", label: "Quran classes for adults" }],
      },
      tutorSection("cn-guide-tutor"),
      feesSection(
        "cn-guide-fees",
        "China",
        "Your bank or card provider converts the USD charge to yuan at its own rate and may add fees; the plans section on this page shows approximate CNY amounts. Ask NoorPath which payment method will work for you before enrolling.",
      ),
    ],
  },
};
