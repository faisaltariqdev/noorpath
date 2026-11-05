/**
 * Per-country market data for country landing pages, keyed by location slug.
 * Prices are always USD (PRICING_PLANS); `currency` is only the local currency
 * shown as an approximate hint where a licence-clear rate exists (see
 * src/lib/currency/rates.ts). USD-only markets set `currency: "USD"`.
 *
 * `content` is set once a country renders through CountryLandingPage. Every
 * claim must come from academyFacts or an official source noted beside it.
 */

import { RESCHEDULE_NOTICE_HOURS, TRIAL_OFFER, TUTOR_FACTS } from "@/lib/academyFacts";

export interface CountryTimeZone {
  zone: string;
  detail: string;
}

export interface CountryFaq {
  q: string;
  a: string;
}

export interface CountryContent {
  /** Name used in running text, e.g. "the UK", "Canada". */
  countryName: string;
  /** Value preselected in the trial form's country list. */
  formCountry: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  hook: string;
  scheduleBullet: string;
  quickAnswer: CountryFaq;
  whyIntro: string;
  timeZonesIntro: string;
  timeZones: CountryTimeZone[];
  clockNote: string;
  schoolWeek: string;
  faqs: CountryFaq[];
  cityLinks: { label: string; href: string }[];
  heroImage: { src: string; width: number; height: number; alt: string };
  /** Show the US & Canada call/SMS line. */
  northAmericaLine?: boolean;
  /** "uk" renders UkQuranClassesGuide; "country" renders the guide from countryGuides. */
  guide: "uk" | "country";
  /** Short country-specific practical notes for parents. */
  localNotes?: { title: string; body: string; link?: { href: string; label: string } }[];
  /** Show verified Trustpilot reviews whose country tag contains this value. */
  reviewCountry?: string;
  /** Omit the "no office in this country" line where that cannot be verified. */
  hideNoOfficeNote?: boolean;
  whatsappText: string;
}

export interface CountryMarket {
  currency: string;
  content?: CountryContent;
}

const PARENT_PORTAL_ANSWER =
  "Enrolled families get secure Parent Portal access for each child, showing attendance, homework, quizzes, daily progress and teacher reports.";

function femaleTeacherAnswer(where: string): string {
  return `Yes. ${TUTOR_FACTS.femaleTutors} Mention the preference when you enquire; a female tutor for your ${where} time window is assigned subject to availability and confirmed before the trial.`;
}

function trialAnswer(localTime: string): string {
  return `Send the short form or a WhatsApp message with the learner's level and the times that suit you in ${localTime}. Once a tutor and time are confirmed, you get ${TRIAL_OFFER} with no credit card required, then decide whether to continue.`;
}

const ONE_TO_ONE_ANSWER =
  "Yes. Every NoorPath lesson is one learner with one tutor, live over video. Siblings each have their own lesson.";

const BEGINNER_ANSWER =
  "Yes. Young beginners usually start with Noorani Qaida — Arabic letters, vowel marks and joining — before moving on to Quran reading.";

const ADULTS_ANSWER =
  "Yes. Adults can start from the alphabet, return to reading after a long gap, or work on Tajweed or memorization, at their own pace.";

const IMAGES = {
  family: {
    src: "/marketing/family-evening-quran.jpg",
    width: 1200,
    height: 800,
    alt: "A mother and two children joining an online Quran lesson on a tablet at home in the evening",
  },
  childLaptop: {
    src: "/marketing/kids-online-quran-class.jpg",
    width: 1200,
    height: 800,
    alt: "A child taking a live one-to-one online Quran lesson on a laptop at home",
  },
  boyReading: {
    src: "/marketing/kids-hifz-memorisation.jpg",
    width: 1200,
    height: 800,
    alt: "A boy reading from the Quran while sitting on a prayer mat at home",
  },
  femaleTutor: {
    src: "/marketing/female-hafiza-tutor.jpg",
    width: 1200,
    height: 800,
    alt: "A female Quran teacher guiding a young girl through a live one-to-one online Quran lesson on a laptop",
  },
};

export const COUNTRY_MARKETS: Record<string, CountryMarket> = {
  "online-quran-classes-usa": {
    currency: "USD",
    content: {
      countryName: "the USA",
      formCountry: "United States",
      h1: "Online Quran Classes in the USA for Kids and Adults",
      metaTitle: "Online Quran Classes in USA for Kids & Adults | NoorPath",
      metaDescription:
        "Learn Quran online with one-to-one classes for kids and adults across the USA. Flexible scheduling, experienced teachers and a free trial at NoorPath Academy.",
      eyebrow: "For families across the United States",
      hook: "Looking for a Quran teacher your child will look forward to, without another weekend drive across town? Live one-to-one lessons from home, in your own US time zone.",
      scheduleBullet: "Scheduling across ET, CT, MT and PT, confirmed after tutor matching",
      quickAnswer: {
        q: "How do online Quran classes work for families in the USA?",
        a: `NoorPath teaches live one-to-one Quran lessons over video for children and adults in any US state. You share your time zone, the learner's level and the windows that suit you; NoorPath confirms a tutor and schedule, and you start with ${TRIAL_OFFER} — no credit card needed.`,
      },
      whyIntro:
        "For many American Muslim families, the nearest weekend Islamic school is a long drive away, or its timetable clashes with school, sport and work. A live tutor at home gives your child individual recitation time without the commute.",
      timeZonesIntro: "The US spans several time zones, so tell us your state or zone when you enquire.",
      timeZones: [
        { zone: "Eastern Time (ET)", detail: "New York, New Jersey, Georgia, Michigan, Florida" },
        { zone: "Central Time (CT)", detail: "Texas, Illinois, Minnesota, Tennessee" },
        { zone: "Mountain Time (MT)", detail: "Colorado, Utah, New Mexico; most of Arizona does not change clocks" },
        { zone: "Pacific Time (PT)", detail: "California, Washington, Oregon, Nevada" },
      ],
      clockNote:
        "Most of the US moves clocks forward on the second Sunday of March and back on the first Sunday of November; Hawaii and most of Arizona do not. Tutors' clocks may change on different dates, so NoorPath reconfirms your recurring lesson time in your local time around each change.",
      schoolWeek:
        "Most US families ask for weekday slots after school and before dinner, or Saturday and Sunday mornings. Exact times depend on tutor availability and are confirmed after your request.",
      faqs: [
        {
          q: "Are Quran classes available throughout the USA?",
          a: "Yes. Classes are fully online, so families in any US state can join from home. NoorPath has no physical US office; every lesson takes place live over video.",
        },
        {
          q: "Can children start as complete beginners?",
          a: "Yes. Young beginners usually start with Noorani Qaida — Arabic letters, vowel marks and joining — before moving on to Quran reading.",
        },
        { q: "Are classes one-to-one?", a: ONE_TO_ONE_ANSWER },
        { q: "Can I request a female Quran teacher?", a: femaleTeacherAnswer("US") },
        {
          q: "Are classes available after school?",
          a: "Yes. Request after-school, evening or weekend windows in ET, CT, MT or PT; the recurring time is confirmed after tutor matching.",
        },
        {
          q: "Can adults join?",
          a: "Yes. Adults can start from the alphabet, return to reading after a long gap, or work on Tajweed or memorization, at their own pace.",
        },
        { q: "How do the free trial sessions work?", a: trialAnswer("your US time zone") },
        { q: "How can parents monitor progress?", a: PARENT_PORTAL_ANSWER },
      ],
      cityLinks: [
        { label: "New York", href: "/online-quran-classes/new-york" },
        { label: "Houston", href: "/online-quran-classes/houston" },
        { label: "Chicago", href: "/online-quran-classes/chicago" },
        { label: "Dallas", href: "/online-quran-classes/dallas" },
        { label: "Los Angeles", href: "/online-quran-classes/los-angeles" },
      ],
      heroImage: {
        src: "/marketing/kids-online-quran-class.jpg",
        width: 1200,
        height: 800,
        alt: "A child taking a live one-to-one online Quran lesson on a laptop at home",
      },
      northAmericaLine: true,
      guide: "country",
      whatsappText:
        "Assalamu Alaikum. I am in the USA and would like to book free online Quran trial sessions. Please share tutor availability for my time zone.",
    },
  },
  "online-quran-classes-uk": {
    currency: "GBP",
    content: {
      countryName: "the UK",
      formCountry: "United Kingdom",
      h1: "Online Quran Classes in the UK for Kids and Adults",
      metaTitle: "Online Quran Classes UK for Kids & Adults | NoorPath Academy",
      metaDescription:
        "One-to-one online Quran classes in the UK for kids and adults: Noorani Qaida for beginners, Quran reading and Tajweed, in UK time, with free trial sessions.",
      eyebrow: "For families across the United Kingdom",
      hook: "Want your child to read the Quran properly, without fitting another evening trip into the school week? Live one-to-one lessons at home, arranged around UK school and work.",
      scheduleBullet: "Flexible UK scheduling in GMT or BST",
      quickAnswer: {
        q: "How do online Quran classes work for UK families?",
        a: `NoorPath teaches live one-to-one Quran lessons over video for children and adults anywhere in the UK. You share the learner's level and the after-school, evening or weekend times that suit you; NoorPath confirms a tutor and schedule, and you start with ${TRIAL_OFFER} — no credit card needed.`,
      },
      whyIntro:
        "Between school runs, clubs and homework, a regular trip to madrasah is hard for many UK families. Online lessons give your child individual recitation time at home — some families use them alongside their local mosque, others instead of it.",
      timeZonesIntro: "The whole UK uses one time zone, which changes twice a year.",
      timeZones: [
        { zone: "GMT (winter)", detail: "Greenwich Mean Time, UTC+0, from the last Sunday of October" },
        { zone: "BST (summer)", detail: "British Summer Time, UTC+1, from the last Sunday of March" },
      ],
      clockNote:
        "UK clocks change on the last Sunday of March and the last Sunday of October. Tutors' clocks may not change on the same dates, so NoorPath reconfirms your recurring lesson time in UK time around each change.",
      schoolWeek:
        "Most UK families ask for weekday slots after school and before bedtime, or Saturday and Sunday mornings when weekdays are full. Exact times depend on tutor availability and are confirmed after your request.",
      faqs: [
        {
          q: "Are online Quran classes available across the UK?",
          a: "Yes — in England, Scotland, Wales and Northern Ireland. Lessons are fully online; NoorPath has no UK branches or offices.",
        },
        {
          q: "Do you teach Noorani Qaida online for children in the UK?",
          a: "Yes. Complete beginners start with Noorani Qaida — Arabic letters, vowel marks and joining — in live one-to-one lessons in UK time, then move on to Quran reading. If your child has already started Qaida at a mosque or madrasah, the tutor continues from the same lesson.",
        },
        { q: "Do you offer one-to-one classes?", a: ONE_TO_ONE_ANSWER },
        { q: "Can I request a female Quran teacher?", a: femaleTeacherAnswer("UK") },
        {
          q: "Are classes available after school?",
          a: "Yes. Request after-school, evening or weekend windows in GMT or BST; the recurring time is confirmed after tutor matching.",
        },
        {
          q: "Can adults join?",
          a: "Yes. Adults can start from the alphabet, return to reading after a long gap, or work on Tajweed or memorization, at their own pace.",
        },
        { q: "How does the free trial work?", a: trialAnswer("UK time") },
        { q: "How can parents monitor progress?", a: PARENT_PORTAL_ANSWER },
      ],
      cityLinks: [
        { label: "London", href: "/online-quran-classes/london" },
        { label: "Birmingham", href: "/online-quran-classes/birmingham" },
        { label: "Manchester", href: "/online-quran-classes/manchester" },
        { label: "Bradford", href: "/online-quran-classes/bradford" },
        { label: "Leeds", href: "/online-quran-classes/leeds" },
        { label: "Leicester", href: "/online-quran-classes/leicester" },
        { label: "Luton", href: "/online-quran-classes/luton" },
        { label: "Glasgow", href: "/online-quran-classes/glasgow" },
      ],
      heroImage: {
        src: "/marketing/family-evening-quran.jpg",
        width: 1200,
        height: 800,
        alt: "A mother and two children joining an online Quran lesson on a tablet at home in the evening",
      },
      localNotes: [
        {
          title: "Noorani Qaida for UK children",
          body: "Many UK children begin Noorani Qaida at a mosque class. If that class has stopped or clashes with school clubs, a one-to-one tutor can carry on from the same page, and parents can try the free online Qaida games between lessons.",
          link: { href: "/noorani-qaida", label: "How Noorani Qaida is taught" },
        },
      ],
      guide: "uk",
      whatsappText:
        "Assalamu Alaikum. I would like to book free online Quran trial sessions in the UK. Please share GMT/BST tutor availability and the next steps.",
    },
  },
  "online-quran-classes-canada": {
    currency: "CAD",
    content: {
      countryName: "Canada",
      formCountry: "Canada",
      h1: "Online Quran Classes in Canada for Kids and Adults",
      metaTitle: "Online Quran Classes in Canada for Kids & Adults | NoorPath",
      metaDescription:
        "One-to-one online Quran classes for kids and adults across Canada, in your province's time zone. Qaida, Tajweed and Hifz, with free trial sessions.",
      eyebrow: "For families across Canada",
      hook: "Looking for a Quran teacher your child will look forward to — without winter drives to weekend school? Live one-to-one lessons at home, at times that work for your province.",
      scheduleBullet: "Flexible scheduling in your province's time zone",
      quickAnswer: {
        q: "How do online Quran classes work for Canadian families?",
        a: `NoorPath teaches live one-to-one Quran lessons over video for children and adults anywhere in Canada. You share your province, the learner's level and the times that suit you; NoorPath confirms a tutor and schedule, and you start with ${TRIAL_OFFER} — no credit card needed.`,
      },
      whyIntro:
        "Canadian winters, long distances and busy school weeks make regular trips to a masjid class hard for many families. Online lessons give your child individual recitation time at home, whatever the weather.",
      // Source for B.C.: www2.gov.bc.ca "Permanent daylight saving time" (checked 4 Nov 2026).
      timeZonesIntro: "Canada has six time zones, and not every province changes its clocks — tell us your province when you enquire.",
      timeZones: [
        { zone: "Pacific Time", detail: "Most of British Columbia: UTC−7 all year since 8 March 2026 — clocks no longer change" },
        { zone: "Mountain Time", detail: "Alberta and NWT (clocks change); Yukon and northeastern B.C. stay on UTC−7 all year" },
        { zone: "Central Time", detail: "Manitoba (clocks change); most of Saskatchewan stays on CST all year" },
        { zone: "Eastern Time", detail: "Most of Ontario and Quebec (clocks change)" },
        { zone: "Atlantic Time", detail: "Nova Scotia, New Brunswick, PEI and most of Labrador (clocks change)" },
        { zone: "Newfoundland Time", detail: "Newfoundland and southeastern Labrador, UTC−3:30 in winter (clocks change)" },
      ],
      clockNote:
        "Where clocks change in Canada, they move on the second Sunday of March and the first Sunday of November. Southeastern B.C. communities such as Cranbrook, Fernie and Golden stay aligned with Alberta. NoorPath agrees lesson times in your local time and reconfirms them around any change.",
      schoolWeek:
        "Most Canadian families ask for weekday slots after school, or weekend mornings. Exact times depend on tutor availability and are confirmed after your request.",
      faqs: [
        {
          q: "Are online Quran classes available across Canada?",
          a: "Yes — in every province and territory. Lessons are fully online; NoorPath has no office in Canada.",
        },
        {
          q: "Can children start as beginners?",
          a: "Yes. Young beginners usually start with Noorani Qaida — Arabic letters, vowel marks and joining — before moving on to Quran reading.",
        },
        { q: "Are classes one-to-one?", a: ONE_TO_ONE_ANSWER },
        { q: "Can I request a female Quran teacher?", a: femaleTeacherAnswer("Canadian") },
        {
          q: "Are classes available after school?",
          a: "Yes. Request after-school, evening or weekend windows in your province's time zone; the recurring time is confirmed after tutor matching.",
        },
        {
          q: "Can adults join?",
          a: "Yes. Adults can start from the alphabet, return to reading after a long gap, or work on Tajweed or memorization, at their own pace.",
        },
        { q: "How do free trial sessions work?", a: trialAnswer("your province's time zone") },
        { q: "Can parents monitor progress?", a: PARENT_PORTAL_ANSWER },
      ],
      cityLinks: [{ label: "Toronto", href: "/online-quran-classes/toronto" }],
      heroImage: {
        src: "/marketing/kids-hifz-memorisation.jpg",
        width: 1200,
        height: 800,
        alt: "A boy reading from the Quran while sitting on a prayer mat at home",
      },
      northAmericaLine: true,
      guide: "country",
      whatsappText:
        "Assalamu Alaikum. I am in Canada and would like to book free online Quran trial sessions. Please share tutor availability for my province's time zone.",
    },
  },
  "online-quran-classes-australia": {
    currency: "AUD",
    content: {
      countryName: "Australia",
      formCountry: "Australia",
      h1: "Online Quran Classes in Australia for Kids and Adults",
      metaTitle: "Online Quran Classes Australia — Kids & Adults | NoorPath",
      metaDescription:
        "One-to-one online Quran classes for kids and adults across Australia: Qaida, Quran reading, Tajweed and Hifz in your state's time, with free trial sessions.",
      eyebrow: "For families across Australia",
      hook: "Want your child to learn the Quran with a teacher who listens to every letter, without adding another drive to the week? Live one-to-one lessons at home, at times that suit your state.",
      scheduleBullet: "Flexible scheduling in your state's time zone",
      quickAnswer: {
        q: "How do online Quran classes work for Australian families?",
        a: `NoorPath teaches live one-to-one Quran lessons over video for children and adults anywhere in Australia. You share your state, the learner's level and the times that suit you; NoorPath confirms a tutor and schedule, and you start with ${TRIAL_OFFER} — no credit card needed.`,
      },
      whyIntro:
        "Across Australia's suburbs and regional towns, a local Quran class can be far away or full. Online lessons give your child individual recitation time at home, fitted around school terms and weekend sport.",
      timeZonesIntro: "Australia has three main time zones, and only some states use daylight saving — tell us your state when you enquire.",
      timeZones: [
        { zone: "AEST / AEDT", detail: "NSW, Victoria, ACT and Tasmania (daylight saving); Queensland stays on AEST all year" },
        { zone: "ACST / ACDT", detail: "South Australia (daylight saving); Northern Territory stays on ACST all year" },
        { zone: "AWST", detail: "Western Australia, UTC+8, no daylight saving" },
      ],
      clockNote:
        "Daylight saving in NSW, Victoria, the ACT, Tasmania and South Australia starts on the first Sunday of October and ends on the first Sunday of April. NoorPath agrees lesson times in your local time and reconfirms them around each change.",
      schoolWeek:
        "Most Australian families ask for weekday slots after school, or weekend mornings around sport. Exact times depend on tutor availability and are confirmed after your request.",
      faqs: [
        {
          q: "Are online Quran classes available across Australia?",
          a: "Yes — in every state and territory, including regional areas. Lessons are fully online; NoorPath has no office in Australia.",
        },
        {
          q: "Can children start as beginners?",
          a: "Yes. Young beginners usually start with Noorani Qaida — Arabic letters, vowel marks and joining — before moving on to Quran reading.",
        },
        { q: "Are classes one-to-one?", a: ONE_TO_ONE_ANSWER },
        { q: "Can I request a female Quran teacher?", a: femaleTeacherAnswer("Australian") },
        {
          q: "Are classes available after school?",
          a: "Yes. Request after-school, evening or weekend windows in your state's time zone; the recurring time is confirmed after tutor matching.",
        },
        {
          q: "Can adults join?",
          a: "Yes. Adults can start from the alphabet, return to reading after a long gap, or work on Tajweed or memorization, at their own pace.",
        },
        { q: "How do free trial sessions work?", a: trialAnswer("your state's time zone") },
        { q: "Can parents monitor progress?", a: PARENT_PORTAL_ANSWER },
      ],
      cityLinks: [
        { label: "Sydney", href: "/online-quran-classes/sydney" },
        { label: "Melbourne", href: "/online-quran-classes/melbourne" },
      ],
      heroImage: {
        src: "/marketing/female-hafiza-tutor.jpg",
        width: 1200,
        height: 800,
        alt: "A female Quran teacher guiding a young girl through a live one-to-one online Quran lesson on a laptop",
      },
      localNotes: [
        {
          title: "Online Tajweed classes in Australia",
          body: "Teenagers and adults who already read the Mushaf often want Tajweed rather than another reading course. A one-to-one tutor works through the rules on the verses you recite, so practice fits around uni, shifts or weekend sport in your state's time.",
          link: { href: "/courses/tajweed-classes-online", label: "Tajweed classes online" },
        },
        {
          title: "Choosing a Quran class for your child",
          body: "Before deciding, ask who will teach, whether lessons are one-to-one, how progress is shared with parents and how classes move around school holidays. The free trial sessions let you see the tutor with your child before you pay.",
          link: { href: "/online-quran-classes-for-kids", label: "Online Quran classes for kids" },
        },
      ],
      guide: "country",
      whatsappText:
        "Assalamu Alaikum. I am in Australia and would like to book free online Quran trial sessions. Please share tutor availability for my state's time zone.",
    },
  },
  "online-quran-classes-new-zealand": {
    currency: "NZD",
    content: {
      countryName: "New Zealand",
      formCountry: "New Zealand",
      h1: "Online Quran Classes in New Zealand for Kids and Adults",
      metaTitle: "Online Quran Classes New Zealand — Kids & Adults | NoorPath",
      metaDescription:
        "One-to-one online Quran classes for kids and adults across New Zealand. Qaida, Quran reading, Tajweed and Hifz in NZ time, with free trial sessions and no card.",
      eyebrow: "For whānau across Aotearoa New Zealand",
      hook: "Living far from a local Quran class shouldn't hold your child back. Live one-to-one lessons at home, in New Zealand time, with a teacher who hears every letter.",
      scheduleBullet: "Lesson times arranged in New Zealand time",
      quickAnswer: {
        q: "How do online Quran classes work for families in New Zealand?",
        a: `NoorPath teaches live one-to-one Quran lessons over video for children and adults anywhere in New Zealand, from Auckland to Invercargill. You share the learner's level and the times that suit you in NZ time; NoorPath confirms a tutor and schedule, and you start with ${TRIAL_OFFER} — no credit card needed.`,
      },
      whyIntro:
        "Outside the main cities, the nearest masjid class can be a long drive, and even in Auckland after-school timetables are packed. Online lessons give your child individual recitation time at home, wherever you live.",
      timeZonesIntro: "New Zealand has one main time zone, with daylight saving in summer.",
      timeZones: [
        { zone: "NZST (winter)", detail: "New Zealand Standard Time, UTC+12" },
        { zone: "NZDT (summer)", detail: "New Zealand Daylight Time, UTC+13, from the last Sunday of September to the first Sunday of April" },
      ],
      clockNote:
        "New Zealand is one of the first countries to start each day, so a convenient evening for you can be very early morning elsewhere. NoorPath agrees lesson times in NZ time and reconfirms them around each clock change.",
      schoolWeek:
        "The weekend is Saturday and Sunday. Families often ask for weekday slots after school or Saturday mornings, around sport. Exact times are confirmed after your request.",
      faqs: [
        { q: "Are online Quran classes available across New Zealand?", a: "Yes — in both islands, in cities and rural areas alike. Lessons are fully online; NoorPath has no office in New Zealand." },
        { q: "Can children start as beginners?", a: BEGINNER_ANSWER },
        { q: "Are classes one-to-one?", a: ONE_TO_ONE_ANSWER },
        { q: "Can I request a female Quran teacher?", a: femaleTeacherAnswer("New Zealand") },
        { q: "Are classes available after school?", a: "Yes. Request after-school, evening or weekend windows in NZ time; the recurring time is confirmed after tutor matching." },
        { q: "Can adults join?", a: ADULTS_ANSWER },
        { q: "How do free trial sessions work?", a: trialAnswer("New Zealand time") },
        { q: "Can parents monitor progress?", a: PARENT_PORTAL_ANSWER },
      ],
      cityLinks: [
        { label: "Auckland", href: "/online-quran-classes/auckland" },
        { label: "Wellington", href: "/online-quran-classes/wellington" },
        { label: "Christchurch", href: "/online-quran-classes/christchurch" },
      ],
      heroImage: IMAGES.boyReading,
      guide: "country",
      whatsappText:
        "Assalamu Alaikum. I am in New Zealand and would like to book free online Quran trial sessions. Please share tutor availability in NZ time.",
    },
  },
  "online-quran-classes-ireland": {
    currency: "EUR",
    content: {
      countryName: "Ireland",
      formCountry: "Ireland",
      h1: "Online Quran Classes in Ireland for Kids and Adults",
      metaTitle: "Online Quran Classes in Ireland for Kids & Adults | NoorPath",
      metaDescription:
        "One-to-one online Quran classes for kids and adults in Dublin, Cork, Galway and across Ireland. Qaida, reading, Tajweed and Hifz, with free trial sessions.",
      eyebrow: "For families in Dublin and across Ireland",
      hook: "Want your child to learn the Quran properly without another drive after school? Live one-to-one lessons at home, in Irish time, for children and adults.",
      scheduleBullet: "Lesson times arranged in Irish time",
      quickAnswer: {
        q: "How do online Quran classes work for families in Ireland?",
        a: `NoorPath teaches live one-to-one Quran lessons over video for children and adults anywhere in Ireland. You share the learner's level and the times that suit you; NoorPath confirms a tutor and schedule, and you start with ${TRIAL_OFFER} — no credit card needed.`,
      },
      whyIntro:
        "Outside Dublin, a regular Quran class can be hard to reach, and inside it, after-school traffic eats into the evening. Online lessons give your child individual recitation time at home, in any county.",
      timeZonesIntro: "Ireland has one time zone, which changes twice a year in step with the UK.",
      timeZones: [
        { zone: "GMT (winter)", detail: "Greenwich Mean Time, UTC+0, from the last Sunday of October" },
        { zone: "IST (summer)", detail: "Irish Standard Time, UTC+1, from the last Sunday of March" },
      ],
      clockNote:
        "Irish clocks change on the last Sunday of March and the last Sunday of October. NoorPath agrees lesson times in Irish time and reconfirms them around each change.",
      schoolWeek:
        "The weekend is Saturday and Sunday. Families often ask for weekday slots after school and homework, or Saturday mornings. Exact times are confirmed after your request.",
      faqs: [
        { q: "Are online Quran classes available across Ireland?", a: "Yes — in every county. Lessons are fully online; NoorPath has no office in Ireland." },
        { q: "Can children start as beginners?", a: BEGINNER_ANSWER },
        { q: "Are classes one-to-one?", a: ONE_TO_ONE_ANSWER },
        { q: "Can I request a female Quran teacher?", a: femaleTeacherAnswer("Irish") },
        { q: "Are classes available after school?", a: "Yes. Request after-school, evening or weekend windows in Irish time; the recurring time is confirmed after tutor matching." },
        { q: "Can adults join?", a: ADULTS_ANSWER },
        { q: "How do free trial sessions work?", a: trialAnswer("Irish time") },
        { q: "Can parents monitor progress?", a: PARENT_PORTAL_ANSWER },
      ],
      cityLinks: [
        { label: "Dublin", href: "/online-quran-classes/dublin" },
        { label: "Cork", href: "/online-quran-classes/cork" },
        { label: "Galway", href: "/online-quran-classes/galway" },
      ],
      heroImage: IMAGES.family,
      localNotes: [
        {
          title: "Early finishes for younger pupils",
          body: "Younger primary pupils in Ireland often finish school in the early afternoon, which leaves room for a short lesson before the evening rush.",
        },
        {
          title: "Towns far from a mosque",
          body: "In smaller towns and rural counties, a regular online lesson can be your child's main Quran routine, with a parent listening to short practice between lessons.",
          link: { href: "/online-quran-classes-no-masjid-nearby", label: "Quran classes with no masjid nearby" },
        },
        {
          title: "Late summer sunsets",
          body: "When Maghrib comes late in June and July, many families move lessons earlier in the day rather than keeping a child up late.",
        },
      ],
      guide: "country",
      whatsappText:
        "Assalamu Alaikum. I am in Ireland and would like to book free online Quran trial sessions. Please share tutor availability in Irish time.",
    },
  },
  "online-quran-classes-germany": {
    currency: "EUR",
    content: {
      countryName: "Germany",
      formCountry: "Germany",
      h1: "Online Quran Classes in Germany for Kids and Adults",
      metaTitle: "Online Quran Classes in Germany for Kids & Adults | NoorPath",
      metaDescription:
        "One-to-one online Quran classes in English for kids and adults in Germany. Qaida, Quran reading, Tajweed and Hifz in CET, with free trial sessions.",
      eyebrow: "For families across Germany",
      hook: "Looking for an English-speaking Quran teacher who works one-to-one with your child at home? Live lessons in German time, around school and family life.",
      scheduleBullet: "Lesson times arranged in CET/CEST",
      quickAnswer: {
        q: "How do online Quran classes work for families in Germany?",
        a: `NoorPath teaches live one-to-one Quran lessons over video, in English, for children and adults anywhere in Germany. You share the learner's level and the times that suit you in CET or CEST; NoorPath confirms a tutor and schedule, and you start with ${TRIAL_OFFER} — no credit card needed.`,
      },
      whyIntro:
        "For international and English-speaking families in Germany, a local Quran class taught in English can be hard to find. Online lessons bring an English-speaking tutor to your home, wherever you live.",
      timeZonesIntro: "Germany uses Central European Time, which changes twice a year.",
      timeZones: [
        { zone: "CET (winter)", detail: "Central European Time, UTC+1" },
        { zone: "CEST (summer)", detail: "Central European Summer Time, UTC+2, from the last Sunday of March to the last Sunday of October" },
      ],
      clockNote:
        "Clocks change on the last Sunday of March and the last Sunday of October. NoorPath agrees lesson times in German time and reconfirms them around each change.",
      schoolWeek:
        "Many German schools finish by early or mid-afternoon, which leaves room for a lesson before dinner. Weekend mornings are another option. Exact times are confirmed after your request.",
      faqs: [
        { q: "Are online Quran classes available across Germany?", a: "Yes — in every federal state. Lessons are fully online; NoorPath has no office in Germany." },
        { q: "Can children start as beginners?", a: BEGINNER_ANSWER },
        { q: "Are classes one-to-one?", a: ONE_TO_ONE_ANSWER },
        { q: "Can I request a female Quran teacher?", a: femaleTeacherAnswer("German") },
        { q: "Are classes available after school?", a: "Yes. Request afternoon, evening or weekend windows in CET/CEST; the recurring time is confirmed after tutor matching." },
        { q: "Can adults join?", a: ADULTS_ANSWER },
        { q: "How do free trial sessions work?", a: trialAnswer("German time") },
        { q: "Can parents monitor progress?", a: PARENT_PORTAL_ANSWER },
      ],
      cityLinks: [],
      heroImage: IMAGES.childLaptop,
      guide: "country",
      whatsappText:
        "Assalamu Alaikum. I am in Germany and would like to book free online Quran trial sessions. Please share tutor availability in German time.",
    },
  },
  "online-quran-classes-france": {
    currency: "EUR",
    content: {
      countryName: "France",
      formCountry: "France",
      h1: "Online Quran Classes in France for Kids and Adults",
      metaTitle: "Online Quran Classes in France for Kids & Adults | NoorPath",
      metaDescription:
        "One-to-one online Quran classes in English for kids and adults in France. Qaida, Quran reading, Tajweed and Hifz in French time, with free trial sessions.",
      eyebrow: "For families across France",
      hook: "Want your child to learn the Quran with one teacher's full attention, explained in English? Live one-to-one lessons at home, in French time.",
      scheduleBullet: "Lesson times arranged in French time",
      quickAnswer: {
        q: "How do online Quran classes work for families in France?",
        a: `NoorPath teaches live one-to-one Quran lessons over video, in English, for children and adults anywhere in France. You share the learner's level and the times that suit you; NoorPath confirms a tutor and schedule, and you start with ${TRIAL_OFFER} — no credit card needed.`,
      },
      whyIntro:
        "Families who want lessons explained in English — expatriates, bilingual households and English-speaking learners — often struggle to find them locally. Online lessons bring an English-speaking tutor home.",
      timeZonesIntro: "Metropolitan France uses Central European Time, which changes twice a year.",
      timeZones: [
        { zone: "CET (winter)", detail: "Central European Time, UTC+1" },
        { zone: "CEST (summer)", detail: "Central European Summer Time, UTC+2, from the last Sunday of March to the last Sunday of October" },
      ],
      clockNote:
        "Clocks change on the last Sunday of March and the last Sunday of October. NoorPath agrees lesson times in French time and reconfirms them around each change.",
      schoolWeek:
        "Many primary schools in France have no lessons on Wednesday afternoon, which makes it a popular time for a Quran lesson, alongside weekday evenings and weekends. Exact times are confirmed after your request.",
      faqs: [
        { q: "Are online Quran classes available across France?", a: "Yes — anywhere in metropolitan France. Lessons are fully online; NoorPath has no office in France." },
        { q: "Can children start as beginners?", a: BEGINNER_ANSWER },
        { q: "Are classes one-to-one?", a: ONE_TO_ONE_ANSWER },
        { q: "Can I request a female Quran teacher?", a: femaleTeacherAnswer("French") },
        { q: "Are classes available after school?", a: "Yes. Request Wednesday-afternoon, evening or weekend windows in French time; the recurring time is confirmed after tutor matching." },
        { q: "Can adults join?", a: ADULTS_ANSWER },
        { q: "How do free trial sessions work?", a: trialAnswer("French time") },
        { q: "Can parents monitor progress?", a: PARENT_PORTAL_ANSWER },
      ],
      cityLinks: [],
      heroImage: IMAGES.femaleTutor,
      guide: "country",
      whatsappText:
        "Assalamu Alaikum. I am in France and would like to book free online Quran trial sessions. Please share tutor availability in French time.",
    },
  },
  "online-quran-classes-netherlands": {
    currency: "EUR",
    content: {
      countryName: "the Netherlands",
      formCountry: "Netherlands",
      h1: "Online Quran Classes in the Netherlands for Kids and Adults",
      metaTitle: "Online Quran Classes Netherlands — Kids & Adults | NoorPath",
      metaDescription:
        "One-to-one online Quran classes in English for kids and adults in the Netherlands. Qaida, reading, Tajweed and Hifz in Dutch time, with free trial sessions.",
      eyebrow: "For families across the Netherlands",
      hook: "Looking for a Quran teacher who explains in English and listens to every letter your child reads? Live one-to-one lessons at home, in Dutch time.",
      scheduleBullet: "Lesson times arranged in Dutch time",
      quickAnswer: {
        q: "How do online Quran classes work for families in the Netherlands?",
        a: `NoorPath teaches live one-to-one Quran lessons over video, in English, for children and adults anywhere in the Netherlands. You share the learner's level and the times that suit you; NoorPath confirms a tutor and schedule, and you start with ${TRIAL_OFFER} — no credit card needed.`,
      },
      whyIntro:
        "Between school, sport and cycling across town, a weekly mosque class doesn't fit every family. Online lessons give your child individual recitation time at home, with explanations in English.",
      timeZonesIntro: "The Netherlands uses Central European Time, which changes twice a year.",
      timeZones: [
        { zone: "CET (winter)", detail: "Central European Time, UTC+1" },
        { zone: "CEST (summer)", detail: "Central European Summer Time, UTC+2, from the last Sunday of March to the last Sunday of October" },
      ],
      clockNote:
        "Clocks change on the last Sunday of March and the last Sunday of October. NoorPath agrees lesson times in Dutch time and reconfirms them around each change.",
      schoolWeek:
        "Many Dutch primary schools finish early on Wednesday, which can be a good lesson slot, alongside weekday evenings and Saturday mornings. Exact times are confirmed after your request.",
      faqs: [
        { q: "Are online Quran classes available across the Netherlands?", a: "Yes — in every province. Lessons are fully online; NoorPath has no office in the Netherlands." },
        { q: "Can children start as beginners?", a: BEGINNER_ANSWER },
        { q: "Are classes one-to-one?", a: ONE_TO_ONE_ANSWER },
        { q: "Can I request a female Quran teacher?", a: femaleTeacherAnswer("Dutch") },
        { q: "Are classes available after school?", a: "Yes. Request Wednesday-afternoon, evening or weekend windows in Dutch time; the recurring time is confirmed after tutor matching." },
        { q: "Can adults join?", a: ADULTS_ANSWER },
        { q: "How do free trial sessions work?", a: trialAnswer("Dutch time") },
        { q: "Can parents monitor progress?", a: PARENT_PORTAL_ANSWER },
      ],
      cityLinks: [],
      heroImage: IMAGES.family,
      guide: "country",
      whatsappText:
        "Assalamu Alaikum. I am in the Netherlands and would like to book free online Quran trial sessions. Please share tutor availability in Dutch time.",
    },
  },
  "online-quran-classes-belgium": {
    currency: "EUR",
    content: {
      countryName: "Belgium",
      formCountry: "Belgium",
      h1: "Online Quran Classes in Belgium for Kids and Adults",
      metaTitle: "Online Quran Classes in Belgium for Kids & Adults | NoorPath",
      metaDescription:
        "One-to-one online Quran classes in English for kids and adults in Belgium. Qaida, reading, Tajweed and Hifz in Belgian time, with free trial sessions.",
      eyebrow: "For families in Brussels, Flanders and Wallonia",
      hook: "Want your child to learn the Quran with one teacher's full attention, whether school is in French, Dutch or English? Live one-to-one lessons at home, in Belgian time.",
      scheduleBullet: "Lesson times arranged in Belgian time",
      quickAnswer: {
        q: "How do online Quran classes work for families in Belgium?",
        a: `NoorPath teaches live one-to-one Quran lessons over video, explained in English, for children and adults anywhere in Belgium. You share the learner's level and the times that suit you; NoorPath confirms a tutor and schedule, and you start with ${TRIAL_OFFER} — no credit card needed.`,
      },
      whyIntro:
        "Belgian children often juggle two or three languages already, and a local class that fits both language and timetable can be hard to find. Online lessons bring a patient, English-speaking tutor home.",
      timeZonesIntro: "Belgium uses Central European Time, which changes twice a year.",
      timeZones: [
        { zone: "CET (winter)", detail: "Central European Time, UTC+1" },
        { zone: "CEST (summer)", detail: "Central European Summer Time, UTC+2, from the last Sunday of March to the last Sunday of October" },
      ],
      clockNote:
        "Clocks change on the last Sunday of March and the last Sunday of October. NoorPath agrees lesson times in Belgian time and reconfirms them around each change.",
      schoolWeek:
        "Many primary schools have Wednesday afternoon free, which suits a calm lesson; weekday evenings and weekend mornings work too. Exact times are confirmed after your request.",
      faqs: [
        { q: "Are online Quran classes available across Belgium?", a: "Yes \u2014 anywhere in Belgium. Lessons are fully online; NoorPath has no office in Belgium." },
        { q: "Can children start as beginners?", a: BEGINNER_ANSWER },
        { q: "Are classes one-to-one?", a: ONE_TO_ONE_ANSWER },
        { q: "Can I request a female Quran teacher?", a: femaleTeacherAnswer("Belgian") },
        { q: "Are classes available after school?", a: "Yes. Request Wednesday-afternoon, evening or weekend windows in Belgian time; the recurring time is confirmed after tutor matching." },
        { q: "Can adults join?", a: ADULTS_ANSWER },
        { q: "How do free trial sessions work?", a: trialAnswer("Belgian time") },
        { q: "Can parents monitor progress?", a: PARENT_PORTAL_ANSWER },
      ],
      cityLinks: [],
      heroImage: IMAGES.family,
      localNotes: [
        {
          title: "Holidays that don't match neighbouring countries",
          body: "French- and Dutch-speaking communities have different school holiday calendars, so tell NoorPath which one your child follows. That way lessons can be planned around the right breaks instead of being cancelled at short notice.",
        },
        {
          title: "Children who are shy about reading aloud",
          body: "Some children hesitate to recite in front of a group, especially in a language they don't speak at school. A one-to-one lesson removes the audience, and the tutor builds confidence with short, achievable pages before moving on.",
        },
        {
          title: "Daily duas for younger children",
          body: "Alongside Qaida, young children can learn everyday duas and short surahs for salah, which they can use straight away at home and at the masjid.",
          link: { href: "/courses/daily-duas-for-kids", label: "Daily duas for kids" },
        },
      ],
      guide: "country",
      whatsappText:
        "Assalamu Alaikum. I am in Belgium and would like to book free online Quran trial sessions. Please share tutor availability in Belgian time.",
    },
  },
  "online-quran-classes-italy": {
    currency: "EUR",
    content: {
      countryName: "Italy",
      formCountry: "Italy",
      h1: "Online Quran Classes in Italy for Kids and Adults",
      metaTitle: "Online Quran Classes in Italy for Kids & Adults | NoorPath",
      metaDescription:
        "One-to-one online Quran classes in English for kids and adults in Italy. Qaida, Quran reading, Tajweed and Hifz in Italian time, with free trial sessions.",
      eyebrow: "For families across Italy",
      hook: "Living far from a mosque class, or struggling to fit one around school? Live one-to-one Quran lessons at home, in Italian time, explained in English.",
      scheduleBullet: "Lesson times arranged in Italian time",
      quickAnswer: {
        q: "How do online Quran classes work for families in Italy?",
        a: `NoorPath teaches live one-to-one Quran lessons over video, explained in English, for children and adults anywhere in Italy. You share the learner's level and the times that suit you; NoorPath confirms a tutor and schedule, and you start with ${TRIAL_OFFER} — no credit card needed.`,
      },
      whyIntro:
        "From Milan to Sicily, many families live far from a Quran class that fits their language and schedule. Online lessons give your child individual recitation time at home.",
      timeZonesIntro: "Italy uses Central European Time, which changes twice a year.",
      timeZones: [
        { zone: "CET (winter)", detail: "Central European Time, UTC+1" },
        { zone: "CEST (summer)", detail: "Central European Summer Time, UTC+2, from the last Sunday of March to the last Sunday of October" },
      ],
      clockNote:
        "Clocks change on the last Sunday of March and the last Sunday of October. NoorPath agrees lesson times in Italian time and reconfirms them around each change.",
      schoolWeek:
        "Some schools still teach on Saturday mornings, so families often choose weekday afternoons or Sundays. Exact times are confirmed after your request.",
      faqs: [
        { q: "Are online Quran classes available across Italy?", a: "Yes \u2014 anywhere in Italy. Lessons are fully online; NoorPath has no office in Italy." },
        { q: "Can children start as beginners?", a: BEGINNER_ANSWER },
        { q: "Are classes one-to-one?", a: ONE_TO_ONE_ANSWER },
        { q: "Can I request a female Quran teacher?", a: femaleTeacherAnswer("Italian") },
        { q: "Are classes available after school?", a: "Yes. Request afternoon, evening or Sunday windows in Italian time; the recurring time is confirmed after tutor matching." },
        { q: "Can adults join?", a: ADULTS_ANSWER },
        { q: "How do free trial sessions work?", a: trialAnswer("Italian time") },
        { q: "Can parents monitor progress?", a: PARENT_PORTAL_ANSWER },
      ],
      cityLinks: [],
      heroImage: IMAGES.boyReading,
      localNotes: [
        {
          title: "Learning across long distances",
          body: "Italy's Muslim families are spread across big cities and small towns. Online lessons give a family in a small town in the south the same tutor, schedule and Parent Portal as one in Milan or Rome.",
        },
        {
          title: "Short lessons for young children",
          body: "Children aged four to six usually manage best with a 30-minute lesson. The Starter plan is one lesson a week; two short lessons a week often work better than one long one.",
          link: { href: "/pricing", label: "Compare lesson plans" },
        },
        {
          title: "Reading for salah first",
          body: "Many families want their child to recite Al-Fatiha and the short surahs correctly for salah before anything else. Tell the tutor, and lessons can prioritise those surahs alongside the Qaida.",
        },
      ],
      guide: "country",
      whatsappText:
        "Assalamu Alaikum. I am in Italy and would like to book free online Quran trial sessions. Please share tutor availability in Italian time.",
    },
  },
  "online-quran-classes-spain": {
    currency: "EUR",
    content: {
      countryName: "Spain",
      formCountry: "Spain",
      h1: "Online Quran Classes in Spain for Kids and Adults",
      metaTitle: "Online Quran Classes in Spain for Kids & Adults | NoorPath",
      metaDescription:
        "One-to-one online Quran classes in English for kids and adults in Spain and the Canary Islands: Qaida, Tajweed and Hifz, with free trial sessions.",
      eyebrow: "For families across Spain",
      hook: "Want your child to learn the Quran with a patient teacher who explains in English, without travelling across the city? Live one-to-one lessons at home, in Spanish time.",
      scheduleBullet: "Lesson times arranged in Spanish time",
      quickAnswer: {
        q: "How do online Quran classes work for families in Spain?",
        a: `NoorPath teaches live one-to-one Quran lessons over video, in English, for children and adults anywhere in Spain, including the Canary Islands. You share the learner's level and the times that suit you; NoorPath confirms a tutor and schedule, and you start with ${TRIAL_OFFER} — no credit card needed.`,
      },
      whyIntro:
        "In Madrid, Barcelona and smaller towns alike, English-speaking families often find few local Quran classes that fit their language and schedule. Online lessons bring that teacher to your home.",
      timeZonesIntro: "Spain has two time zones — tell us if you live in the Canary Islands.",
      timeZones: [
        { zone: "Mainland and Balearics", detail: "CET, UTC+1 in winter; CEST, UTC+2 in summer" },
        { zone: "Canary Islands", detail: "WET, UTC+0 in winter; WEST, UTC+1 in summer — one hour behind the mainland" },
      ],
      clockNote:
        "Both zones change clocks on the last Sunday of March and the last Sunday of October. NoorPath agrees lesson times in your local time and reconfirms them around each change.",
      schoolWeek:
        "Many families in Spain eat dinner later in the evening, so a lesson after homework is often easy to fit, as are weekend mornings. Exact times are confirmed after your request.",
      faqs: [
        { q: "Are online Quran classes available across Spain?", a: "Yes — on the mainland, the Balearics and the Canary Islands. Lessons are fully online; NoorPath has no office in Spain." },
        { q: "Can children start as beginners?", a: BEGINNER_ANSWER },
        { q: "Are classes one-to-one?", a: ONE_TO_ONE_ANSWER },
        { q: "Can I request a female Quran teacher?", a: femaleTeacherAnswer("Spanish") },
        { q: "Are classes available after school?", a: "Yes. Request evening or weekend windows in your local time; the recurring time is confirmed after tutor matching." },
        { q: "Can adults join?", a: ADULTS_ANSWER },
        { q: "How do free trial sessions work?", a: trialAnswer("your local time in Spain") },
        { q: "Can parents monitor progress?", a: PARENT_PORTAL_ANSWER },
      ],
      cityLinks: [],
      heroImage: IMAGES.childLaptop,
      localNotes: [
        {
          title: "Living in the Canary Islands",
          body: "The Canaries are one hour behind the mainland all year. Mention it when you enquire so the tutor and time are confirmed in island time.",
        },
        {
          title: "The long summer break",
          body: "Spanish school holidays run from late June into September. Keeping one short lesson a week over the summer helps children hold on to what they have learned.",
        },
        {
          title: "Several languages at home and school",
          body: "Many children study in Spanish, Catalan or another regional language at school. NoorPath's tutors are English-speaking, which suits families comfortable in English.",
        },
      ],
      guide: "country",
      whatsappText:
        "Assalamu Alaikum. I am in Spain and would like to book free online Quran trial sessions. Please share tutor availability in my local time.",
    },
  },
  "online-quran-classes-finland": {
    currency: "EUR",
    content: {
      countryName: "Finland",
      formCountry: "Finland",
      h1: "Online Quran Classes in Finland for Kids and Adults",
      metaTitle: "Online Quran Classes in Finland for Kids & Adults | NoorPath",
      metaDescription:
        "One-to-one online Quran classes in English for kids and adults in Finland. Qaida, Quran reading, Tajweed and Hifz in Finnish time, with free trial sessions.",
      eyebrow: "For families in Helsinki and across Finland",
      hook: "Few towns in Finland have a Quran teacher nearby, and winter makes every extra journey harder. Live one-to-one lessons at home, in Finnish time, explained in English.",
      scheduleBullet: "Lesson times arranged in Finnish time",
      quickAnswer: {
        q: "How do online Quran classes work for families in Finland?",
        a: `NoorPath teaches live one-to-one Quran lessons over video, in English, for children and adults anywhere in Finland. You share the learner's level and the times that suit you in EET or EEST; NoorPath confirms a tutor and schedule, and you start with ${TRIAL_OFFER} — no credit card needed.`,
      },
      whyIntro:
        "Muslim communities in Finland are small and spread out, so many children have no local Quran class at all. Online lessons give them a dedicated teacher at home, from Helsinki to Oulu.",
      timeZonesIntro: "Finland uses Eastern European Time, which changes twice a year.",
      timeZones: [
        { zone: "EET (winter)", detail: "Eastern European Time, UTC+2" },
        { zone: "EEST (summer)", detail: "Eastern European Summer Time, UTC+3, from the last Sunday of March to the last Sunday of October" },
      ],
      clockNote:
        "Clocks change on the last Sunday of March and the last Sunday of October. NoorPath agrees lesson times in Finnish time and reconfirms them around each change.",
      schoolWeek:
        "Finnish school days are relatively short, so early-afternoon or late-afternoon lessons often work well, as do weekend mornings. Exact times are confirmed after your request.",
      faqs: [
        { q: "Are online Quran classes available across Finland?", a: "Yes — in every region, including small towns far from a mosque. Lessons are fully online; NoorPath has no office in Finland." },
        { q: "Can children start as beginners?", a: BEGINNER_ANSWER },
        { q: "Are classes one-to-one?", a: ONE_TO_ONE_ANSWER },
        { q: "Can I request a female Quran teacher?", a: femaleTeacherAnswer("Finnish") },
        { q: "Are classes available after school?", a: "Yes. Request afternoon, evening or weekend windows in EET/EEST; the recurring time is confirmed after tutor matching." },
        { q: "Can adults join?", a: ADULTS_ANSWER },
        { q: "How do free trial sessions work?", a: trialAnswer("Finnish time") },
        { q: "Can parents monitor progress?", a: PARENT_PORTAL_ANSWER },
      ],
      cityLinks: [{ label: "Helsinki", href: "/online-quran-classes/helsinki" }],
      heroImage: IMAGES.family,
      guide: "country",
      localNotes: [
        {
          title: "Long summer evenings",
          body: "In a Finnish summer, Maghrib and Isha come very late, so evening lessons often work better earlier in the day while children are still alert.",
        },
        {
          title: "Dark winter afternoons",
          body: "In winter, a lesson straight after school — before the evening slump — helps younger children stay focused.",
        },
        {
          title: "No local class nearby",
          body: "If your nearest mosque class is hours away, a regular online lesson can be your child's main Quran routine, with a parent listening to short practice between lessons.",
          link: { href: "/online-quran-classes-no-masjid-nearby", label: "Quran classes with no masjid nearby" },
        },
      ],
      whatsappText:
        "Assalamu Alaikum. I am in Finland and would like to book free online Quran trial sessions. Please share tutor availability in Finnish time.",
    },
  },
  "online-quran-classes-denmark": {
    currency: "DKK",
    content: {
      countryName: "Denmark",
      formCountry: "Denmark",
      h1: "Online Quran Classes in Denmark for Kids and Adults",
      metaTitle: "Online Quran Classes in Denmark for Kids & Adults | NoorPath",
      metaDescription:
        "One-to-one online Quran classes in English for kids and adults in Denmark. Qaida, Quran reading, Tajweed and Hifz in Danish time, with free trial sessions.",
      eyebrow: "For families across Denmark",
      hook: "Want your child to learn the Quran with a teacher who listens to every letter, without adding another trip to a busy week? Live one-to-one lessons at home, in Danish time.",
      scheduleBullet: "Lesson times arranged in Danish time",
      quickAnswer: {
        q: "How do online Quran classes work for families in Denmark?",
        a: `NoorPath teaches live one-to-one Quran lessons over video, in English, for children and adults anywhere in Denmark. You share the learner's level and the times that suit you; NoorPath confirms a tutor and schedule, and you start with ${TRIAL_OFFER} — no credit card needed.`,
      },
      whyIntro:
        "Between school, after-school club and activities, Danish family weeks are full, and a local Quran class isn't always close by. Online lessons give your child individual recitation time at home.",
      timeZonesIntro: "Denmark uses Central European Time, which changes twice a year.",
      timeZones: [
        { zone: "CET (winter)", detail: "Central European Time, UTC+1" },
        { zone: "CEST (summer)", detail: "Central European Summer Time, UTC+2, from the last Sunday of March to the last Sunday of October" },
      ],
      clockNote:
        "Clocks change on the last Sunday of March and the last Sunday of October. NoorPath agrees lesson times in Danish time and reconfirms them around each change.",
      schoolWeek:
        "The weekend is Saturday and Sunday. Families often ask for slots after after-school club, early evening, or weekend mornings. Exact times are confirmed after your request.",
      faqs: [
        { q: "Are online Quran classes available across Denmark?", a: "Yes — on Jutland, Funen, Zealand and the islands. Lessons are fully online; NoorPath has no office in Denmark." },
        { q: "Can children start as beginners?", a: BEGINNER_ANSWER },
        { q: "Are classes one-to-one?", a: ONE_TO_ONE_ANSWER },
        { q: "Can I request a female Quran teacher?", a: femaleTeacherAnswer("Danish") },
        { q: "Are classes available after school?", a: "Yes. Request afternoon, evening or weekend windows in Danish time; the recurring time is confirmed after tutor matching." },
        { q: "Can adults join?", a: ADULTS_ANSWER },
        { q: "How do free trial sessions work?", a: trialAnswer("Danish time") },
        { q: "Can parents monitor progress?", a: PARENT_PORTAL_ANSWER },
      ],
      cityLinks: [{ label: "Aarhus", href: "/online-quran-classes/aarhus" }],
      heroImage: IMAGES.childLaptop,
      guide: "country",
      localNotes: [
        {
          title: "After-school club and lessons",
          body: "Many children are at after-school club until late afternoon, so a short lesson once they are home and fed usually works better than one squeezed in on the way.",
        },
        {
          title: "School holiday weeks",
          body: "Danish schools break for autumn holiday in week 42 and winter holiday in week 7 or 8. Decide early whether lessons continue from home or move, with 24 hours' notice, subject to tutor availability.",
        },
        {
          title: "Saturday-morning lessons",
          body: "Some families keep weekday evenings free and choose a Saturday-morning lesson, when children are rested and there is no homework waiting.",
        },
        {
          title: "Bilingual children",
          body: "Children who speak Danish at school and another language at home often learn Arabic pronunciation best with clear explanations in English from NoorPath's English-speaking tutors.",
        },
      ],
      whatsappText:
        "Assalamu Alaikum. I am in Denmark and would like to book free online Quran trial sessions. Please share tutor availability in Danish time.",
    },
  },
  "online-quran-classes-norway": {
    currency: "NOK",
    content: {
      countryName: "Norway",
      formCountry: "Norway",
      h1: "Online Quran Classes in Norway for Kids and Adults",
      metaTitle: "Online Quran Classes in Norway for Kids & Adults | NoorPath",
      metaDescription:
        "One-to-one online Quran classes in English for kids and adults in Norway. Qaida, Quran reading, Tajweed and Hifz in Norwegian time, with free trial sessions.",
      eyebrow: "For families in Oslo, Bergen and across Norway",
      hook: "From Oslo to the far north, a Quran teacher nearby isn't a given. Live one-to-one lessons at home, in Norwegian time, with a teacher who explains in English.",
      scheduleBullet: "Lesson times arranged in Norwegian time",
      quickAnswer: {
        q: "How do online Quran classes work for families in Norway?",
        a: `NoorPath teaches live one-to-one Quran lessons over video, in English, for children and adults anywhere in Norway. You share the learner's level and the times that suit you; NoorPath confirms a tutor and schedule, and you start with ${TRIAL_OFFER} — no credit card needed.`,
      },
      whyIntro:
        "Long distances, winter weather and small local communities make a weekly mosque class hard for many Norwegian families. Online lessons give your child a dedicated teacher at home.",
      timeZonesIntro: "Norway uses Central European Time, which changes twice a year.",
      timeZones: [
        { zone: "CET (winter)", detail: "Central European Time, UTC+1" },
        { zone: "CEST (summer)", detail: "Central European Summer Time, UTC+2, from the last Sunday of March to the last Sunday of October" },
      ],
      clockNote:
        "Clocks change on the last Sunday of March and the last Sunday of October. NoorPath agrees lesson times in Norwegian time and reconfirms them around each change.",
      schoolWeek:
        "The weekend is Saturday and Sunday. Families often ask for afternoon or early-evening slots after school and activities, or weekend mornings. Exact times are confirmed after your request.",
      faqs: [
        { q: "Are online Quran classes available across Norway?", a: "Yes — from the south coast to Northern Norway. Lessons are fully online; NoorPath has no office in Norway." },
        { q: "Can children start as beginners?", a: BEGINNER_ANSWER },
        { q: "Are classes one-to-one?", a: ONE_TO_ONE_ANSWER },
        { q: "Can I request a female Quran teacher?", a: femaleTeacherAnswer("Norwegian") },
        { q: "Are classes available after school?", a: "Yes. Request afternoon, evening or weekend windows in Norwegian time; the recurring time is confirmed after tutor matching." },
        { q: "Can adults join?", a: ADULTS_ANSWER },
        { q: "How do free trial sessions work?", a: trialAnswer("Norwegian time") },
        { q: "Can parents monitor progress?", a: PARENT_PORTAL_ANSWER },
      ],
      cityLinks: [
        { label: "Oslo", href: "/online-quran-classes/oslo" },
        { label: "Bergen", href: "/online-quran-classes/bergen" },
      ],
      heroImage: IMAGES.boyReading,
      guide: "country",
      localNotes: [
        {
          title: "Midnight sun and polar night",
          body: "In the north, summer days barely end and winter days barely begin, so prayer times shift a lot through the year. Fixing a lesson to the clock rather than to Maghrib keeps the routine steady.",
        },
        {
          title: "Living far from a mosque",
          body: "Where the nearest Quran class is a ferry or a long drive away, a regular online lesson can become your child's main routine.",
          link: { href: "/online-quran-classes-no-masjid-nearby", label: "Quran classes with no masjid nearby" },
        },
        {
          title: "Explanations in English",
          body: "Children who speak Norwegian at school often follow Arabic pronunciation best with explanations in English from NoorPath's English-speaking tutors.",
        },
      ],
      whatsappText:
        "Assalamu Alaikum. I am in Norway and would like to book free online Quran trial sessions. Please share tutor availability in Norwegian time.",
    },
  },
  "online-quran-classes-sweden": {
    currency: "SEK",
    content: {
      countryName: "Sweden",
      formCountry: "Sweden",
      h1: "Online Quran Classes in Sweden for Kids and Adults",
      metaTitle: "Online Quran Classes in Sweden for Kids & Adults | NoorPath",
      metaDescription:
        "One-to-one online Quran classes in English for kids and adults in Stockholm and across Sweden. Qaida, reading, Tajweed and Hifz, with free trial sessions.",
      eyebrow: "For families in Stockholm and across Sweden",
      hook: "Want your child to learn the Quran with one teacher's full attention, in Stockholm, Gothenburg, Malmö or a small town? Live one-to-one lessons at home, in Swedish time.",
      scheduleBullet: "Lesson times arranged in Swedish time",
      quickAnswer: {
        q: "How do online Quran classes work for families in Sweden?",
        a: `NoorPath teaches live one-to-one Quran lessons over video, in English, for children and adults anywhere in Sweden, including Stockholm. You share the learner's level and the times that suit you; NoorPath confirms a tutor and schedule, and you start with ${TRIAL_OFFER} — no credit card needed.`,
      },
      whyIntro:
        "Even in Stockholm, fitting a mosque class around school, fritids and activities is hard, and outside the big cities there may be no class at all. Online lessons give your child individual recitation time at home.",
      timeZonesIntro: "Sweden uses Central European Time, which changes twice a year.",
      timeZones: [
        { zone: "CET (winter)", detail: "Central European Time, UTC+1" },
        { zone: "CEST (summer)", detail: "Central European Summer Time, UTC+2, from the last Sunday of March to the last Sunday of October" },
      ],
      clockNote:
        "Clocks change on the last Sunday of March and the last Sunday of October. NoorPath agrees lesson times in Swedish time and reconfirms them around each change.",
      schoolWeek:
        "The weekend is Saturday and Sunday. Families often ask for slots after fritids, early evening, or weekend mornings. Exact times are confirmed after your request.",
      faqs: [
        { q: "Are online Quran classes available across Sweden?", a: "Yes — in Stockholm, Gothenburg, Malmö and every other part of Sweden. Lessons are fully online; NoorPath has no office in Sweden." },
        { q: "Can children start as beginners?", a: BEGINNER_ANSWER },
        { q: "Are classes one-to-one?", a: ONE_TO_ONE_ANSWER },
        { q: "Can I request a female Quran teacher?", a: femaleTeacherAnswer("Swedish") },
        { q: "Are classes available after school?", a: "Yes. Request afternoon, evening or weekend windows in Swedish time; the recurring time is confirmed after tutor matching." },
        { q: "Can adults join?", a: ADULTS_ANSWER },
        { q: "How do free trial sessions work?", a: trialAnswer("Swedish time") },
        { q: "Can parents monitor progress?", a: PARENT_PORTAL_ANSWER },
      ],
      cityLinks: [],
      heroImage: IMAGES.femaleTutor,
      guide: "country",
      localNotes: [
        {
          title: "After fritids",
          body: "Many younger children are at fritids until late afternoon. A short lesson once they are home, fed and rested tends to go better than one squeezed in straight after pickup.",
        },
        {
          title: "Summer evenings and Ramadan",
          body: "When summer Maghrib and Isha come very late, especially in Ramadan, agree temporary lesson times with NoorPath early so they can be confirmed with the tutor.",
        },
        {
          title: "Swedish at school, Arabic at lessons",
          body: "Children who learn in Swedish at school often follow Arabic pronunciation best with clear explanations in English from NoorPath's English-speaking tutors.",
        },
      ],
      whatsappText:
        "Assalamu Alaikum. I am in Sweden and would like to book free online Quran trial sessions. Please share tutor availability in Swedish time.",
    },
  },
  "online-quran-classes-switzerland": {
    currency: "CHF",
    content: {
      countryName: "Switzerland",
      formCountry: "Switzerland",
      h1: "Online Quran Classes in Switzerland for Kids and Adults",
      metaTitle: "Online Quran Classes Switzerland — Kids & Adults | NoorPath",
      metaDescription:
        "One-to-one online Quran classes in English for kids and adults in Switzerland. Qaida, reading, Tajweed and Hifz in Swiss time, with free trial sessions.",
      eyebrow: "For families across Switzerland",
      hook: "Want a patient Quran teacher who works one-to-one with your child, in any canton and any school language? Live lessons at home, in Swiss time.",
      scheduleBullet: "Lesson times arranged in Swiss time",
      quickAnswer: {
        q: "How do online Quran classes work for families in Switzerland?",
        a: `NoorPath teaches live one-to-one Quran lessons over video, explained in English, for children and adults anywhere in Switzerland. You share the learner's level and the times that suit you; NoorPath confirms a tutor and schedule, and you start with ${TRIAL_OFFER} — no credit card needed.`,
      },
      whyIntro:
        "With school timetables that differ by canton and few Quran classes taught in English, many Swiss families find it simpler to bring the teacher home.",
      timeZonesIntro: "Switzerland uses Central European Time, which changes twice a year.",
      timeZones: [
        { zone: "CET (winter)", detail: "Central European Time, UTC+1" },
        { zone: "CEST (summer)", detail: "Central European Summer Time, UTC+2, from the last Sunday of March to the last Sunday of October" },
      ],
      clockNote:
        "Clocks change on the last Sunday of March and the last Sunday of October. NoorPath agrees lesson times in Swiss time and reconfirms them around each change.",
      schoolWeek:
        "In many cantons younger children have Wednesday afternoon free, and some have a long midday break. Exact times are confirmed after your request.",
      faqs: [
        { q: "Are online Quran classes available across Switzerland?", a: "Yes \u2014 anywhere in Switzerland. Lessons are fully online; NoorPath has no office in Switzerland." },
        { q: "Can children start as beginners?", a: BEGINNER_ANSWER },
        { q: "Are classes one-to-one?", a: ONE_TO_ONE_ANSWER },
        { q: "Can I request a female Quran teacher?", a: femaleTeacherAnswer("Swiss") },
        { q: "Are classes available after school?", a: "Yes. Request Wednesday-afternoon, late-afternoon or weekend windows in Swiss time; the recurring time is confirmed after tutor matching." },
        { q: "Can adults join?", a: ADULTS_ANSWER },
        { q: "How do free trial sessions work?", a: trialAnswer("Swiss time") },
        { q: "Can parents monitor progress?", a: PARENT_PORTAL_ANSWER },
      ],
      cityLinks: [],
      heroImage: IMAGES.femaleTutor,
      localNotes: [
        {
          title: "Multilingual families",
          body: "A child might speak Swiss German at school, French with friends and another language at home. Quran lessons add Arabic sounds none of these use, so tutors focus on listening and repetition rather than long explanations.",
        },
        {
          title: "Arabic alongside the Quran",
          body: "Older children and adults who want to understand what they recite can add Arabic language lessons once their reading is secure.",
          link: { href: "/courses/arabic-language-online", label: "Arabic language course" },
        },
        {
          title: "A quiet corner at home",
          body: "Headphones and a fixed place for lessons make a noticeable difference in a busy household, helping the tutor hear each letter clearly.",
        },
      ],
      guide: "country",
      whatsappText:
        "Assalamu Alaikum. I am in Switzerland and would like to book free online Quran trial sessions. Please share tutor availability in Swiss time.",
    },
  },
  "online-quran-classes-turkey": {
    currency: "TRY",
    content: {
      countryName: "Turkey",
      formCountry: "Turkey",
      h1: "Online Quran Classes in Turkey for Kids and Adults",
      metaTitle: "Online Quran Classes in Turkey for Kids & Adults | NoorPath",
      metaDescription:
        "One-to-one online Quran classes in English for kids and adults in Turkey. Qaida, Quran reading, Tajweed and Hifz in Turkey time, with free trial sessions.",
      eyebrow: "For international and English-speaking families in Turkey",
      hook: "Looking for Quran lessons explained in English for a child at an international school? Live one-to-one classes at home, in Turkey time.",
      scheduleBullet: "Lesson times arranged in Turkey time",
      quickAnswer: {
        q: "How do online Quran classes work for families in Turkey?",
        a: `NoorPath teaches live one-to-one Quran lessons over video, explained in English, for children and adults anywhere in Turkey. You share the learner's level and the times that suit you; NoorPath confirms a tutor and schedule, and you start with ${TRIAL_OFFER} — no credit card needed.`,
      },
      whyIntro:
        "Turkey has excellent local Quran courses, but international and recently arrived families often want explanations in English and individual attention. Online lessons offer that at home.",
      timeZonesIntro: "Turkey uses one time zone and does not change its clocks.",
      timeZones: [
        { zone: "Turkey Time (TRT)", detail: "UTC+3 all year \u2014 no daylight saving" },
      ],
      clockNote:
        "Turkey's clocks do not change, but some tutors' clocks may. NoorPath agrees lesson times in Turkey time and reconfirms them if a tutor's local time shifts.",
      schoolWeek:
        "The weekend is Saturday and Sunday. Families often choose weekday afternoons after school or weekend mornings. Exact times are confirmed after your request.",
      faqs: [
        { q: "Are online Quran classes available across Turkey?", a: "Yes \u2014 anywhere in Turkey. Lessons are fully online; NoorPath has no office in Turkey." },
        { q: "Can children start as beginners?", a: BEGINNER_ANSWER },
        { q: "Are classes one-to-one?", a: ONE_TO_ONE_ANSWER },
        { q: "Can I request a female Quran teacher?", a: femaleTeacherAnswer("Turkey") },
        { q: "Are classes available after school?", a: "Yes. Request afternoon, evening or weekend windows in Turkey time; the recurring time is confirmed after tutor matching." },
        { q: "Can adults join?", a: ADULTS_ANSWER },
        { q: "How do free trial sessions work?", a: trialAnswer("Turkey time") },
        { q: "Can parents monitor progress?", a: PARENT_PORTAL_ANSWER },
      ],
      cityLinks: [],
      heroImage: IMAGES.childLaptop,
      localNotes: [
        {
          title: "Reading Arabic script",
          body: "Children who read Latin-alphabet Turkish at school still need to learn Arabic letters from the beginning. The Qaida introduces them step by step, so reading the Mushaf becomes possible without guessing.",
        },
        {
          title: "Explanations in English",
          body: "NoorPath's tutors are English-speaking, which suits international-school pupils and families who use English at home. If your child is more comfortable in Turkish, say so in the trial and judge the fit before paying.",
        },
        {
          title: "Short surahs for salah",
          body: "Many families start by perfecting Al-Fatiha and the short surahs used in salah, then move on to fluent reading and Tajweed.",
          link: { href: "/learn-tajweed-online", label: "Tajweed lessons online" },
        },
      ],
      guide: "country",
      whatsappText:
        "Assalamu Alaikum. I am in Turkey and would like to book free online Quran trial sessions. Please share tutor availability in Turkey time.",
    },
  },
  "online-quran-classes-india": {
    currency: "INR",
    content: {
      countryName: "India",
      formCountry: "India",
      h1: "Online Quran Classes in India for Kids and Adults",
      metaTitle: "Online Quran Classes in India for Kids & Adults | NoorPath",
      metaDescription:
        "One-to-one online Quran classes for kids and adults in India: Noorani Qaida, Quran reading, Tajweed and Hifz in IST, in English, with free trial sessions.",
      eyebrow: "For families across India",
      hook: "Want your child to learn correct recitation from a teacher who listens to every letter, without adding tuition travel to a packed school week? Live one-to-one lessons at home, in IST.",
      scheduleBullet: "Lesson times arranged in India Standard Time",
      quickAnswer: {
        q: "How do online Quran classes work for families in India?",
        a: `NoorPath teaches live one-to-one Quran lessons over video, in English, for children and adults anywhere in India. You share the learner's level and the times that suit you in IST; NoorPath confirms a tutor and schedule, and you start with ${TRIAL_OFFER} — no credit card needed.`,
      },
      whyIntro:
        "School, tuition classes and exam preparation leave Indian children with little free time. A short one-to-one lesson at home gives your child focused recitation practice without another commute.",
      timeZonesIntro: "India uses one time zone and never changes its clocks.",
      timeZones: [{ zone: "India Standard Time (IST)", detail: "UTC+5:30 all year — no daylight saving" }],
      clockNote:
        "India's clocks never change, but some tutors' clocks may. NoorPath agrees lesson times in IST and reconfirms them if a tutor's local time shifts.",
      schoolWeek:
        "Sunday is the main weekly holiday, and many schools also close or finish early on Saturday. Families often ask for early-evening slots after school and tuition, or weekend mornings. Exact times are confirmed after your request.",
      faqs: [
        { q: "Are online Quran classes available across India?", a: "Yes — in every state. Lessons are fully online; NoorPath has no office in India." },
        { q: "Can children start as beginners?", a: BEGINNER_ANSWER },
        { q: "Are classes one-to-one?", a: ONE_TO_ONE_ANSWER },
        { q: "Can I request a female Quran teacher?", a: femaleTeacherAnswer("IST") },
        { q: "Are classes available after school?", a: "Yes. Request after-school, evening or weekend windows in IST; the recurring time is confirmed after tutor matching." },
        { q: "Can adults join?", a: ADULTS_ANSWER },
        { q: "How do free trial sessions work?", a: trialAnswer("IST") },
        { q: "Can parents monitor progress?", a: PARENT_PORTAL_ANSWER },
      ],
      cityLinks: [{ label: "Mumbai", href: "/online-quran-classes/mumbai" }],
      heroImage: IMAGES.childLaptop,
      guide: "country",
      whatsappText:
        "Assalamu Alaikum. I am in India and would like to book free online Quran trial sessions. Please share tutor availability in IST.",
    },
  },
  "online-quran-classes-indonesia": {
    currency: "IDR",
    content: {
      countryName: "Indonesia",
      formCountry: "Indonesia",
      h1: "Online Quran Classes in Indonesia for Kids and Adults",
      metaTitle: "Online Quran Classes Indonesia — Kids & Adults | NoorPath",
      metaDescription:
        "One-to-one online Quran classes in English for kids and adults in Indonesia: Iqro/Qaida, Tajweed and Hifz in WIB, WITA or WIT, with free trial sessions.",
      eyebrow: "For families across Indonesia",
      hook: "Want one-to-one Quran lessons explained in English, alongside Iqro or TPQ? Live classes at home, in your own Indonesian time zone.",
      scheduleBullet: "Lesson times in WIB, WITA or WIT",
      quickAnswer: {
        q: "How do online Quran classes work for families in Indonesia?",
        a: `NoorPath teaches live one-to-one Quran lessons over video, explained in English, for children and adults anywhere in Indonesia. You share your time zone, the learner's level and the times that suit you; NoorPath confirms a tutor and schedule, and you start with ${TRIAL_OFFER} — no credit card needed.`,
      },
      whyIntro:
        "Families at international schools, or who want individual correction beyond a TPQ class, often look for a tutor who explains in English. Online lessons bring one home, from Jakarta to Makassar.",
      timeZonesIntro: "Indonesia has three time zones and none of them change clocks \u2014 tell us where you live.",
      timeZones: [
        { zone: "WIB (UTC+7)", detail: "Java, Sumatra, western and central Kalimantan" },
        { zone: "WITA (UTC+8)", detail: "Bali, Nusa Tenggara, Sulawesi and the rest of Kalimantan" },
        { zone: "WIT (UTC+9)", detail: "Maluku and Papua" },
      ],
      clockNote:
        "Indonesian clocks never change, but some tutors' clocks may. NoorPath agrees lesson times in your local time and reconfirms them if a tutor's local time shifts.",
      schoolWeek:
        "Families often choose after-school slots before Maghrib, evenings after dinner, or weekend mornings. Exact times are confirmed after your request.",
      faqs: [
        { q: "Are online Quran classes available across Indonesia?", a: "Yes \u2014 anywhere in Indonesia. Lessons are fully online; NoorPath has no office in Indonesia." },
        { q: "Can children start as beginners?", a: BEGINNER_ANSWER },
        { q: "Are classes one-to-one?", a: ONE_TO_ONE_ANSWER },
        { q: "Can I request a female Quran teacher?", a: femaleTeacherAnswer("Indonesian") },
        { q: "Are classes available after school?", a: "Yes. Request after-school, evening or weekend windows in WIB, WITA or WIT; the recurring time is confirmed after tutor matching." },
        { q: "Can adults join?", a: ADULTS_ANSWER },
        { q: "How do free trial sessions work?", a: trialAnswer("your Indonesian time zone") },
        { q: "Can parents monitor progress?", a: PARENT_PORTAL_ANSWER },
      ],
      cityLinks: [],
      heroImage: IMAGES.family,
      localNotes: [
        {
          title: "Large islands, one routine",
          body: "Whether you live in a city or a smaller town on another island, online lessons work the same way. Tell NoorPath your time zone and the routine stays steady through the year.",
        },
        {
          title: "Iqro graduates who read too fast",
          body: "Children who finished Iqro quickly sometimes read fast but carry small pronunciation errors. A one-to-one tutor slows the reading down, corrects specific letters and then builds speed back up with Tajweed.",
          link: { href: "/learn-tajweed-online", label: "Tajweed lessons online" },
        },
        {
          title: "Adults learning privately",
          body: "Adults who never had a chance to learn properly as children can start from the alphabet in private lessons, at times that fit work and family.",
          link: { href: "/online-quran-classes-for-adults", label: "Quran classes for adults" },
        },
      ],
      guide: "country",
      whatsappText:
        "Assalamu Alaikum. I am in Indonesia and would like to book free online Quran trial sessions. Please share tutor availability in my time zone.",
    },
  },
  "online-quran-classes-malaysia": {
    currency: "MYR",
    content: {
      countryName: "Malaysia",
      formCountry: "Malaysia",
      h1: "Online Quran Classes in Malaysia for Kids and Adults",
      metaTitle: "Online Quran Classes Malaysia — Kids & Adults | NoorPath",
      metaDescription:
        "One-to-one online Quran classes in English for kids and adults in Malaysia. Iqra/Qaida, reading, Tajweed and Hifz in MYT, with free trial sessions.",
      eyebrow: "For families across Malaysia",
      hook: "Want private Quran lessons explained in English, alongside KAFA or Iqra? Live one-to-one classes at home, in Malaysian time.",
      scheduleBullet: "Lesson times arranged in Malaysia Time",
      quickAnswer: {
        q: "How do online Quran classes work for families in Malaysia?",
        a: `NoorPath teaches live one-to-one Quran lessons over video, explained in English, for children and adults anywhere in Malaysia. You share the learner's level and the times that suit you; NoorPath confirms a tutor and schedule, and you start with ${TRIAL_OFFER} — no credit card needed.`,
      },
      whyIntro:
        "Many Malaysian children learn through Iqra and KAFA, but families at international schools \u2014 and adults polishing Tajweed \u2014 often want a private tutor who explains in English.",
      timeZonesIntro: "Malaysia uses one time zone and never changes its clocks.",
      timeZones: [
        { zone: "Malaysia Time (MYT)", detail: "UTC+8 all year \u2014 no daylight saving" },
      ],
      clockNote:
        "Malaysian clocks never change, but some tutors' clocks may. NoorPath agrees lesson times in MYT and reconfirms them if a tutor's local time shifts.",
      schoolWeek:
        "Weekends differ by state: most rest on Saturday and Sunday, while a few, such as Kelantan and Terengganu, rest on Friday and Saturday. Tell us your state; exact times are confirmed after your request.",
      faqs: [
        { q: "Are online Quran classes available across Malaysia?", a: "Yes \u2014 anywhere in Malaysia. Lessons are fully online; NoorPath has no office in Malaysia." },
        { q: "Can children start as beginners?", a: BEGINNER_ANSWER },
        { q: "Are classes one-to-one?", a: ONE_TO_ONE_ANSWER },
        { q: "Can I request a female Quran teacher?", a: femaleTeacherAnswer("Malaysian") },
        { q: "Are classes available after school?", a: "Yes. Request after-school, evening or weekend windows in MYT for your state's weekend; the recurring time is confirmed after tutor matching." },
        { q: "Can adults join?", a: ADULTS_ANSWER },
        { q: "How do free trial sessions work?", a: trialAnswer("Malaysian time") },
        { q: "Can parents monitor progress?", a: PARENT_PORTAL_ANSWER },
      ],
      cityLinks: [],
      heroImage: IMAGES.femaleTutor,
      localNotes: [
        {
          title: "Bilingual explanations",
          body: "Malaysian children often switch between Malay, English and other home languages. NoorPath's tutors are English-speaking, which suits families who use English at home or at school.",
        },
        {
          title: "Daily duas and short surahs",
          body: "Younger children can learn everyday duas and the short surahs used in salah alongside their reading lessons.",
          link: { href: "/courses/daily-duas-for-kids", label: "Daily duas for kids" },
        },
        {
          title: "Keeping lessons going over school holidays",
          body: "School holidays are a good time to add a lesson if your child is ready to move faster, or to keep one short lesson going while travelling.",
        },
      ],
      guide: "country",
      whatsappText:
        "Assalamu Alaikum. I am in Malaysia and would like to book free online Quran trial sessions. Please share tutor availability in Malaysian time.",
    },
  },
  "online-quran-classes-singapore": {
    currency: "SGD",
    content: {
      countryName: "Singapore",
      formCountry: "Singapore",
      h1: "Online Quran and Iqra Classes in Singapore for Kids and Adults",
      metaTitle: "Quran & Iqra Classes Singapore — Kids & Adults | NoorPath",
      metaDescription:
        "One-to-one online Quran and Iqra classes for kids and adults in Singapore: Qaida, Tajweed and Hifz in SGT, around school and CCAs, with free trial sessions.",
      eyebrow: "For families in Singapore",
      hook: "Looking for Quran or Iqra lessons that fit around school, CCAs and work? Live one-to-one classes at home, in Singapore time, for children and for adults starting or restarting.",
      scheduleBullet: "Lesson times arranged in Singapore Time",
      quickAnswer: {
        q: "How do online Quran classes work for families in Singapore?",
        a: `NoorPath teaches live one-to-one Quran lessons over video for children and adults in Singapore. You share the learner's level and the times that suit you in SGT; NoorPath confirms a tutor and schedule, and you start with ${TRIAL_OFFER} — no credit card needed.`,
      },
      whyIntro:
        "With school, co-curricular activities and long working days, many Singapore families struggle to fit in a weekly Quran class. Online lessons give children and adults individual recitation time at home — beginners start with Qaida, the foundation also taught through Iqra-style books.",
      timeZonesIntro: "Singapore uses one time zone and never changes its clocks.",
      timeZones: [{ zone: "Singapore Time (SGT)", detail: "UTC+8 all year — no daylight saving" }],
      clockNote:
        "Singapore's clocks never change, but some tutors' clocks may. NoorPath agrees lesson times in SGT and reconfirms them if a tutor's local time shifts.",
      schoolWeek:
        "The weekend is Saturday and Sunday. Families often ask for evening slots after CCAs, or weekend mornings. Exact times are confirmed after your request.",
      faqs: [
        { q: "Are online Quran classes available in Singapore?", a: "Yes — anywhere in Singapore. Lessons are fully online; NoorPath has no office in Singapore." },
        { q: "Can children start as beginners?", a: BEGINNER_ANSWER },
        { q: "Are classes one-to-one?", a: ONE_TO_ONE_ANSWER },
        { q: "Can I request a female Quran teacher?", a: femaleTeacherAnswer("SGT") },
        { q: "Are classes available after school?", a: "Yes. Request evening or weekend windows in SGT that work around school and CCAs; the recurring time is confirmed after tutor matching." },
        { q: "Are there Quran and Iqra classes for adults in Singapore?", a: `${ADULTS_ANSWER} Adults who stopped partway through Iqra can continue from where they left off; the tutor checks the level in the trial.` },
        { q: "How do free trial sessions work?", a: trialAnswer("SGT") },
        { q: "Can parents monitor progress?", a: PARENT_PORTAL_ANSWER },
      ],
      cityLinks: [],
      heroImage: IMAGES.family,
      localNotes: [
        {
          title: "Coming from Iqra books",
          body: "Many children in Singapore start with Iqra books. Noorani Qaida covers the same foundation — letters, vowel marks and joining — so the tutor checks your child's level in the trial and continues from there.",
          link: { href: "/noorani-qaida", label: "How Noorani Qaida is taught" },
        },
        {
          title: "During exam seasons",
          body: `Around PSLE and school exams, lessons can be moved with ${RESCHEDULE_NOTICE_HOURS} hours' notice, subject to tutor availability, so Quran practice doesn't have to stop completely.`,
        },
        {
          title: "Adults learning after work",
          body: "Working adults often choose later evening lessons in SGT, after work and dinner, and learn privately at their own pace.",
          link: { href: "/online-quran-classes-for-adults", label: "Quran classes for adults" },
        },
      ],
      guide: "country",
      whatsappText:
        "Assalamu Alaikum. I am in Singapore and would like to book free online Quran trial sessions. Please share tutor availability in SGT.",
    },
  },
  "online-quran-classes-hong-kong": {
    currency: "HKD",
    content: {
      countryName: "Hong Kong",
      formCountry: "Hong Kong",
      h1: "Online Quran Classes in Hong Kong for Kids and Adults",
      metaTitle: "Online Quran Classes Hong Kong — Kids & Adults | NoorPath",
      metaDescription:
        "One-to-one online Quran classes in English for kids and adults in Hong Kong. Qaida, Quran reading, Tajweed and Hifz in HKT, with free trial sessions.",
      eyebrow: "For families in Hong Kong",
      hook: "Busy school days and long commutes leave little time for a Quran class across the harbour. Live one-to-one lessons at home, in Hong Kong time, explained in English.",
      scheduleBullet: "Lesson times arranged in Hong Kong Time",
      quickAnswer: {
        q: "How do online Quran classes work for families in Hong Kong?",
        a: `NoorPath teaches live one-to-one Quran lessons over video, in English, for children and adults anywhere in Hong Kong. You share the learner's level and the times that suit you in HKT; NoorPath confirms a tutor and schedule, and you start with ${TRIAL_OFFER} — no credit card needed.`,
      },
      whyIntro:
        "With few Quran classes taught in English and full after-school timetables, many Hong Kong families find it easier to bring the teacher home. Online lessons give your child individual recitation time in your own flat.",
      timeZonesIntro: "Hong Kong uses one time zone and never changes its clocks.",
      timeZones: [{ zone: "Hong Kong Time (HKT)", detail: "UTC+8 all year — no daylight saving" }],
      clockNote:
        "Hong Kong's clocks never change, but some tutors' clocks may. NoorPath agrees lesson times in HKT and reconfirms them if a tutor's local time shifts.",
      schoolWeek:
        "The weekend is Saturday and Sunday. Families often ask for evening slots after tutoring and activities, or weekend mornings. Exact times are confirmed after your request.",
      faqs: [
        { q: "Are online Quran classes available in Hong Kong?", a: "Yes — on Hong Kong Island, Kowloon and the New Territories. Lessons are fully online; NoorPath has no office in Hong Kong." },
        { q: "Can children start as beginners?", a: BEGINNER_ANSWER },
        { q: "Are classes one-to-one?", a: ONE_TO_ONE_ANSWER },
        { q: "Can I request a female Quran teacher?", a: femaleTeacherAnswer("HKT") },
        { q: "Are classes available after school?", a: "Yes. Request evening or weekend windows in HKT; the recurring time is confirmed after tutor matching." },
        { q: "Can adults join?", a: ADULTS_ANSWER },
        { q: "How do free trial sessions work?", a: trialAnswer("HKT") },
        { q: "Can parents monitor progress?", a: PARENT_PORTAL_ANSWER },
      ],
      cityLinks: [],
      heroImage: IMAGES.childLaptop,
      localNotes: [
        {
          title: "A quiet corner in a small flat",
          body: "In compact homes, headphones and a set corner for lessons make a big difference to how clearly the tutor hears each letter.",
        },
        {
          title: "Weeks full of tutoring",
          body: "When the week is already packed with tutoring and activities, one or two short, fixed Quran lessons are easier to protect than an irregular long one.",
        },
        {
          title: "Typhoon and rainstorm days",
          body: "Because lessons happen online, local closures for weather do not have to stop them, as long as you have power and a connection at home.",
        },
      ],
      guide: "country",
      whatsappText:
        "Assalamu Alaikum. I am in Hong Kong and would like to book free online Quran trial sessions. Please share tutor availability in HKT.",
    },
  },
  "online-quran-classes-south-africa": {
    currency: "ZAR",
    content: {
      countryName: "South Africa",
      formCountry: "South Africa",
      h1: "Online Quran Classes in South Africa for Kids and Adults",
      metaTitle: "Online Quran Classes South Africa — Kids & Adults | NoorPath",
      metaDescription:
        "One-to-one online Quran classes for kids and adults in South Africa, alongside madrassah. Qaida, reading, Tajweed and Hifz in SAST, with free trial sessions.",
      eyebrow: "For families across South Africa",
      hook: "Want extra one-to-one help for the letters and Tajweed rules your child finds hardest at madrassah? Live lessons at home, in South African time.",
      scheduleBullet: "Lesson times arranged in SAST",
      quickAnswer: {
        q: "How do online Quran classes work for families in South Africa?",
        a: `NoorPath teaches live one-to-one Quran lessons over video for children and adults anywhere in South Africa. You share the learner's level and the times that suit you; NoorPath confirms a tutor and schedule, and you start with ${TRIAL_OFFER} — no credit card needed.`,
      },
      whyIntro:
        "Afternoon madrassah gives children routine and community; a one-to-one lesson adds the individual correction a busy class can't always give. Where there's no madrassah nearby, online lessons can be the main option.",
      timeZonesIntro: "South Africa uses one time zone and never changes its clocks.",
      timeZones: [
        { zone: "South Africa Standard Time (SAST)", detail: "UTC+2 all year \u2014 no daylight saving" },
      ],
      clockNote:
        "South African clocks never change, but some tutors' clocks may. NoorPath agrees lesson times in SAST and reconfirms them if a tutor's local time shifts.",
      schoolWeek:
        "The weekend is Saturday and Sunday. Families often choose a slot after madrassah, an evening, or a weekend morning. Exact times are confirmed after your request.",
      faqs: [
        { q: "Are online Quran classes available across South Africa?", a: "Yes \u2014 anywhere in South Africa. Lessons are fully online; NoorPath has no office in South Africa." },
        { q: "Can children start as beginners?", a: BEGINNER_ANSWER },
        { q: "Are classes one-to-one?", a: ONE_TO_ONE_ANSWER },
        { q: "Can I request a female Quran teacher?", a: femaleTeacherAnswer("South African") },
        { q: "Are classes available after school?", a: "Yes. Request after-madrassah, evening or weekend windows in SAST; the recurring time is confirmed after tutor matching." },
        { q: "Can adults join?", a: ADULTS_ANSWER },
        { q: "How do free trial sessions work?", a: trialAnswer("SAST") },
        { q: "Can parents monitor progress?", a: PARENT_PORTAL_ANSWER },
      ],
      cityLinks: [],
      heroImage: IMAGES.boyReading,
      localNotes: [
        {
          title: "Madrassah homework support",
          body: "If your child struggles with particular pages or Tajweed rules at madrassah, tell the tutor. Lessons can focus on exactly those areas, so your child feels more confident in class.",
        },
        {
          title: "Bilingual households",
          body: "Many South African families speak English, Afrikaans or another home language. NoorPath's tutors are English-speaking, so lessons suit families comfortable in English.",
        },
        {
          title: "Islamic studies for children",
          body: "Alongside reading, children can learn age-appropriate Islamic studies: beliefs, salah, manners and the stories of the Prophets.",
          link: { href: "/courses/islamic-studies-online", label: "Islamic studies online" },
        },
      ],
      guide: "country",
      whatsappText:
        "Assalamu Alaikum. I am in South Africa and would like to book free online Quran trial sessions. Please share tutor availability in SAST.",
    },
  },
  "online-quran-classes-uae": {
    currency: "AED",
    content: {
      countryName: "the UAE",
      formCountry: "United Arab Emirates",
      h1: "Online Quran Classes in the UAE for Kids and Adults",
      metaTitle: "Online Quran Classes in UAE for Kids & Adults | NoorPath",
      metaDescription:
        "One-to-one online Quran classes for kids and adults across the UAE: Qaida, Quran reading, Tajweed and Hifz in GST, around school, with free trial sessions.",
      eyebrow: "For families across the Emirates",
      hook: "Want a dedicated Quran teacher for your child that fits around school runs and Dubai or Abu Dhabi traffic? Live one-to-one lessons at home, in UAE time.",
      scheduleBullet: "Lesson times arranged in Gulf Standard Time",
      quickAnswer: {
        q: "How do online Quran classes work for families in the UAE?",
        a: `NoorPath teaches live one-to-one Quran lessons over video for children and adults in all seven emirates. You share the learner's level and the times that suit you in GST; NoorPath confirms a tutor and schedule, and you start with ${TRIAL_OFFER} — no credit card needed.`,
      },
      whyIntro:
        "Long school days, traffic and busy weekends leave little room for an extra class across town. Online lessons give your child individual recitation time at home, whether you live in Dubai, Abu Dhabi, Sharjah or the northern emirates.",
      timeZonesIntro: "The whole UAE uses one time zone and never changes its clocks.",
      timeZones: [{ zone: "Gulf Standard Time (GST)", detail: "UTC+4 all year — no daylight saving" }],
      clockNote:
        "UAE clocks never change, but some tutors' clocks may. NoorPath agrees lesson times in UAE time and reconfirms them if a tutor's local time shifts.",
      schoolWeek:
        "Since 2022 the UAE weekend has been Saturday and Sunday, and many schools finish early on Friday. Families often ask for weekday afternoons or evenings, Friday afternoons, or weekend mornings. Exact times are confirmed after your request.",
      faqs: [
        { q: "Are online Quran classes available across the UAE?", a: "Yes — in all seven emirates. Lessons are fully online; NoorPath has no office in the UAE." },
        { q: "Can children start as beginners?", a: BEGINNER_ANSWER },
        { q: "Are classes one-to-one?", a: ONE_TO_ONE_ANSWER },
        { q: "Can I request a female Quran teacher?", a: femaleTeacherAnswer("UAE") },
        { q: "Are classes available after school?", a: "Yes. Request after-school, evening, Friday-afternoon or weekend windows in GST; the recurring time is confirmed after tutor matching." },
        { q: "Can adults join?", a: ADULTS_ANSWER },
        { q: "How do free trial sessions work?", a: trialAnswer("UAE time") },
        { q: "Can parents monitor progress?", a: PARENT_PORTAL_ANSWER },
      ],
      cityLinks: [
        { label: "Dubai", href: "/online-quran-classes/dubai" },
        { label: "Abu Dhabi", href: "/online-quran-classes/abu-dhabi" },
      ],
      heroImage: IMAGES.family,
      guide: "country",
      reviewCountry: "UAE",
      whatsappText:
        "Assalamu Alaikum. I am in the UAE and would like to book free online Quran trial sessions. Please share tutor availability in UAE time.",
    },
  },
  "online-quran-classes-saudi-arabia": {
    currency: "SAR",
    content: {
      countryName: "Saudi Arabia",
      formCountry: "Saudi Arabia",
      h1: "Online Quran Classes in Saudi Arabia for Kids and Adults",
      metaTitle: "Online Quran Classes Saudi Arabia — Kids & Adults | NoorPath",
      metaDescription:
        "One-to-one online Quran classes in English for kids and adults in Saudi Arabia: Qaida, Tajweed and Hifz in Saudi time, with free trial sessions.",
      eyebrow: "For families across Saudi Arabia",
      hook: "Looking for an English-speaking Quran teacher who can give your child one-to-one attention at home? Live lessons in Saudi time, around school and family life.",
      scheduleBullet: "Lesson times arranged in Arabia Standard Time",
      quickAnswer: {
        q: "How do online Quran classes work for families in Saudi Arabia?",
        a: `NoorPath teaches live one-to-one Quran lessons over video, in English, for children and adults anywhere in Saudi Arabia. You share the learner's level and the times that suit you; NoorPath confirms a tutor and schedule, and you start with ${TRIAL_OFFER} — no credit card needed.`,
      },
      whyIntro:
        "Many expatriate and English-speaking families want a teacher who explains in English while correcting every letter. Online lessons give your child individual recitation time at home, in Riyadh, Jeddah, the Eastern Province or anywhere else.",
      timeZonesIntro: "Saudi Arabia uses one time zone and never changes its clocks.",
      timeZones: [{ zone: "Arabia Standard Time (AST)", detail: "UTC+3 all year — no daylight saving" }],
      clockNote:
        "Saudi clocks never change, but some tutors' clocks may. NoorPath agrees lesson times in Saudi time and reconfirms them if a tutor's local time shifts.",
      schoolWeek:
        "The weekend in Saudi Arabia is Friday and Saturday. Families often ask for weekday afternoons and evenings, or weekend slots. Exact times are confirmed after your request.",
      faqs: [
        { q: "Are online Quran classes available across Saudi Arabia?", a: "Yes — in every region. Lessons are fully online; NoorPath has no office in Saudi Arabia." },
        { q: "Can children start as beginners?", a: BEGINNER_ANSWER },
        { q: "Are classes one-to-one?", a: ONE_TO_ONE_ANSWER },
        { q: "Can I request a female Quran teacher?", a: femaleTeacherAnswer("Saudi") },
        { q: "Are classes available after school?", a: "Yes. Request after-school, evening or Friday–Saturday windows in Arabia Standard Time; the recurring time is confirmed after tutor matching." },
        { q: "Can adults join?", a: ADULTS_ANSWER },
        { q: "How do free trial sessions work?", a: trialAnswer("Saudi time") },
        { q: "Can parents monitor progress?", a: PARENT_PORTAL_ANSWER },
      ],
      cityLinks: [
        { label: "Riyadh", href: "/online-quran-classes/riyadh" },
        { label: "Jeddah", href: "/online-quran-classes/jeddah" },
      ],
      heroImage: IMAGES.boyReading,
      guide: "country",
      whatsappText:
        "Assalamu Alaikum. I am in Saudi Arabia and would like to book free online Quran trial sessions. Please share tutor availability in Saudi time.",
    },
  },
  "online-quran-classes-qatar": {
    currency: "QAR",
    content: {
      countryName: "Qatar",
      formCountry: "Qatar",
      h1: "Online Quran Classes in Qatar for Kids and Adults",
      metaTitle: "Online Quran Classes in Qatar for Kids & Adults | NoorPath",
      metaDescription:
        "One-to-one online Quran classes for kids and adults in Qatar: Qaida, Quran reading, Tajweed and Hifz in Doha time, around school, with free trial sessions.",
      eyebrow: "For families in Doha and across Qatar",
      hook: "Want your child to learn the Quran one-to-one, without another drive across Doha after school? Live lessons at home, at times that suit your family's week.",
      scheduleBullet: "Lesson times arranged in Qatar time",
      quickAnswer: {
        q: "How do online Quran classes work for families in Qatar?",
        a: `NoorPath teaches live one-to-one Quran lessons over video for children and adults anywhere in Qatar. You share the learner's level and the times that suit you; NoorPath confirms a tutor and schedule, and you start with ${TRIAL_OFFER} — no credit card needed.`,
      },
      whyIntro:
        "Between international-school hours, traffic and family commitments, a separate Quran class can be hard to fit in. Online lessons give your child individual recitation time at home, with a teacher who explains in English.",
      timeZonesIntro: "Qatar uses one time zone and never changes its clocks.",
      timeZones: [{ zone: "Arabia Standard Time (AST)", detail: "UTC+3 all year — no daylight saving" }],
      clockNote:
        "Qatar's clocks never change, but some tutors' clocks may. NoorPath agrees lesson times in Qatar time and reconfirms them if a tutor's local time shifts.",
      schoolWeek:
        "The weekend in Qatar is Friday and Saturday. Families often ask for weekday afternoons and evenings, or weekend slots. Exact times are confirmed after your request.",
      faqs: [
        { q: "Are online Quran classes available across Qatar?", a: "Yes — in Doha and anywhere else in Qatar. Lessons are fully online; NoorPath has no office in Qatar." },
        { q: "Can children start as beginners?", a: BEGINNER_ANSWER },
        { q: "Are classes one-to-one?", a: ONE_TO_ONE_ANSWER },
        { q: "Can I request a female Quran teacher?", a: femaleTeacherAnswer("Qatar") },
        { q: "Are classes available after school?", a: "Yes. Request after-school, evening or Friday–Saturday windows in Qatar time; the recurring time is confirmed after tutor matching." },
        { q: "Can adults join?", a: ADULTS_ANSWER },
        { q: "How do free trial sessions work?", a: trialAnswer("Qatar time") },
        { q: "Can parents monitor progress?", a: PARENT_PORTAL_ANSWER },
      ],
      cityLinks: [{ label: "Doha", href: "/online-quran-classes/doha" }],
      heroImage: IMAGES.childLaptop,
      guide: "country",
      whatsappText:
        "Assalamu Alaikum. I am in Qatar and would like to book free online Quran trial sessions. Please share tutor availability in Qatar time.",
    },
  },
  "online-quran-classes-oman": {
    currency: "OMR",
    content: {
      countryName: "Oman",
      formCountry: "Oman",
      h1: "Online Quran Classes in Oman for Kids and Adults",
      metaTitle: "Online Quran Classes in Oman for Kids & Adults | NoorPath",
      metaDescription:
        "One-to-one online Quran classes for kids and adults in Oman. Qaida, Quran reading, Tajweed and Hifz in Gulf Standard Time, with free trial sessions.",
      eyebrow: "For families in Muscat and across Oman",
      hook: "Looking for a patient Quran teacher who works one-to-one with your child at home? Live lessons in Oman time, around school and family life.",
      scheduleBullet: "Lesson times arranged in Gulf Standard Time",
      quickAnswer: {
        q: "How do online Quran classes work for families in Oman?",
        a: `NoorPath teaches live one-to-one Quran lessons over video for children and adults anywhere in Oman. You share the learner's level and the times that suit you; NoorPath confirms a tutor and schedule, and you start with ${TRIAL_OFFER} — no credit card needed.`,
      },
      whyIntro:
        "Whether you live in Muscat or a smaller town, an English-speaking teacher who gives your child individual attention can be hard to find locally. Online lessons bring that teacher to your home.",
      timeZonesIntro: "Oman uses one time zone and never changes its clocks.",
      timeZones: [{ zone: "Gulf Standard Time (GST)", detail: "UTC+4 all year — no daylight saving" }],
      clockNote:
        "Oman's clocks never change, but some tutors' clocks may. NoorPath agrees lesson times in Oman time and reconfirms them if a tutor's local time shifts.",
      schoolWeek:
        "The weekend in Oman is Friday and Saturday. Families often ask for weekday afternoons and evenings, or weekend slots. Exact times are confirmed after your request.",
      faqs: [
        { q: "Are online Quran classes available across Oman?", a: "Yes — in Muscat and anywhere else in Oman. Lessons are fully online; NoorPath has no office in Oman." },
        { q: "Can children start as beginners?", a: BEGINNER_ANSWER },
        { q: "Are classes one-to-one?", a: ONE_TO_ONE_ANSWER },
        { q: "Can I request a female Quran teacher?", a: femaleTeacherAnswer("Oman") },
        { q: "Are classes available after school?", a: "Yes. Request after-school, evening or Friday–Saturday windows in Oman time; the recurring time is confirmed after tutor matching." },
        { q: "Can adults join?", a: ADULTS_ANSWER },
        { q: "How do free trial sessions work?", a: trialAnswer("Oman time") },
        { q: "Can parents monitor progress?", a: PARENT_PORTAL_ANSWER },
      ],
      cityLinks: [],
      heroImage: IMAGES.femaleTutor,
      localNotes: [
        {
          title: "Fitting lessons around the Omani school week",
          body: "With a Friday–Saturday weekend, you can ask for Sunday–Thursday after-school or early-evening lessons, or Friday and Saturday mornings.",
          link: { href: "/blog/after-school-quran-classes-for-gulf-families", label: "After-school Quran classes for Gulf families" },
        },
        {
          title: "Ramadan timings",
          body: "During Ramadan many families prefer lessons after iftar or earlier in the day. Tell NoorPath your preferred Ramadan times early so they can be confirmed with the tutor.",
        },
        {
          title: "Explanations in English",
          body: "Children at English-medium and international schools often learn best when a tutor explains in English while correcting Arabic pronunciation. NoorPath's tutors are English-speaking.",
        },
      ],
      guide: "country",
      whatsappText:
        "Assalamu Alaikum. I am in Oman and would like to book free online Quran trial sessions. Please share tutor availability in Oman time.",
    },
  },
  "online-quran-classes-kuwait": {
    currency: "USD",
    content: {
      countryName: "Kuwait",
      formCountry: "Kuwait",
      h1: "Online Quran Classes in Kuwait for Kids and Adults",
      metaTitle: "Online Quran Classes in Kuwait for Kids & Adults | NoorPath",
      metaDescription:
        "One-to-one online Quran classes in English for kids and adults in Kuwait. Qaida, Quran reading, Tajweed and Hifz in Kuwait time, with free trial sessions.",
      eyebrow: "For families across Kuwait",
      hook: "Want an English-speaking Quran teacher who gives your child one-to-one attention after school? Live lessons at home, in Kuwait time.",
      scheduleBullet: "Lesson times arranged in Arabia Standard Time",
      quickAnswer: {
        q: "How do online Quran classes work for families in Kuwait?",
        a: `NoorPath teaches live one-to-one Quran lessons over video, in English, for children and adults anywhere in Kuwait. You share the learner's level and the times that suit you; NoorPath confirms a tutor and schedule, and you start with ${TRIAL_OFFER} — no credit card needed.`,
      },
      whyIntro:
        "For expatriate and English-speaking families, a Quran teacher who explains in English while correcting pronunciation can be hard to find locally. Online lessons bring that teacher home, without extra driving in the heat.",
      timeZonesIntro: "Kuwait uses one time zone and never changes its clocks.",
      timeZones: [{ zone: "Arabia Standard Time (AST)", detail: "UTC+3 all year — no daylight saving" }],
      clockNote:
        "Kuwait's clocks never change, but some tutors' clocks may. NoorPath agrees lesson times in Kuwait time and reconfirms them if a tutor's local time shifts.",
      schoolWeek:
        "The weekend in Kuwait is Friday and Saturday. Families often ask for weekday afternoons or evenings, or weekend slots. Exact times are confirmed after your request.",
      faqs: [
        { q: "Are online Quran classes available across Kuwait?", a: "Yes — in every governorate. Lessons are fully online; NoorPath has no office in Kuwait." },
        { q: "Can children start as beginners?", a: BEGINNER_ANSWER },
        { q: "Are classes one-to-one?", a: ONE_TO_ONE_ANSWER },
        { q: "Can I request a female Quran teacher?", a: femaleTeacherAnswer("Kuwait") },
        { q: "Are classes available after school?", a: "Yes. Request after-school, evening or Friday–Saturday windows in Kuwait time; the recurring time is confirmed after tutor matching." },
        { q: "Can adults join?", a: ADULTS_ANSWER },
        { q: "How do free trial sessions work?", a: trialAnswer("Kuwait time") },
        { q: "Can parents monitor progress?", a: PARENT_PORTAL_ANSWER },
      ],
      cityLinks: [],
      heroImage: IMAGES.boyReading,
      guide: "country",
      whatsappText:
        "Assalamu Alaikum. I am in Kuwait and would like to book free online Quran trial sessions. Please share tutor availability in Kuwait time.",
    },
  },
  "online-quran-classes-pakistan": {
    currency: "USD",
    content: {
      countryName: "Pakistan",
      formCountry: "Pakistan",
      h1: "Online Quran Classes in Pakistan for Kids and Adults",
      metaTitle: "Online Quran Classes Pakistan — Kids & Adults | NoorPath",
      metaDescription:
        "One-to-one online Quran classes for kids and adults in Pakistan. Noorani Qaida, Nazra, Tajweed and Hifz in PKT, from home, with free trial sessions.",
      eyebrow: "For families across Pakistan",
      hook: "Want your child to learn Nazra and Tajweed with one teacher's full attention, without the daily trip to a Quran centre? Live one-to-one lessons at home, in Pakistan time.",
      scheduleBullet: "Lesson times arranged in Pakistan Standard Time",
      quickAnswer: {
        q: "How do online Quran classes work for families in Pakistan?",
        a: `NoorPath teaches live one-to-one Quran lessons over video for children and adults anywhere in Pakistan. You share the learner's level and the times that suit you in PKT; NoorPath confirms a tutor and schedule, and you start with ${TRIAL_OFFER} — no credit card needed.`,
      },
      whyIntro:
        "Many parents want their children to finish Nazra with correct Tajweed, but school, tuition and traffic make a daily Quran centre visit hard. Online lessons give your child individual recitation time at home.",
      timeZonesIntro: "Pakistan uses one time zone and does not change its clocks.",
      timeZones: [{ zone: "Pakistan Standard Time (PKT)", detail: "UTC+5 all year — no daylight saving" }],
      clockNote: "Pakistan's clocks do not change. Lesson times are agreed in PKT and confirmed after tutor matching.",
      schoolWeek:
        "Sunday is the main weekly holiday, and many schools and offices also close on Saturday. Families often ask for afternoon slots after school, evenings, or weekend mornings. Exact times are confirmed after your request.",
      faqs: [
        { q: "Are online Quran classes available across Pakistan?", a: "Yes — in every province and city with a stable internet connection. Lessons are live over video." },
        { q: "Can children start as beginners?", a: BEGINNER_ANSWER },
        { q: "Are classes one-to-one?", a: ONE_TO_ONE_ANSWER },
        { q: "Can I request a female Quran teacher?", a: femaleTeacherAnswer("PKT") },
        { q: "Are classes available after school?", a: "Yes. Request afternoon, evening or weekend windows in PKT; the recurring time is confirmed after tutor matching." },
        { q: "Can adults join?", a: ADULTS_ANSWER },
        { q: "How do free trial sessions work?", a: trialAnswer("PKT") },
        { q: "Can parents monitor progress?", a: PARENT_PORTAL_ANSWER },
      ],
      cityLinks: [
        { label: "Karachi", href: "/online-quran-classes/karachi" },
        { label: "Lahore", href: "/online-quran-classes/lahore" },
        { label: "Hyderabad", href: "/online-quran-classes/hyderabad" },
      ],
      heroImage: IMAGES.boyReading,
      localNotes: [
        {
          title: "Nazra with Tajweed, alongside school",
          body: "Many families want their child to finish Nazra — reading the whole Quran — with correct Tajweed rather than speed. Shorter lessons a few times a week usually fit better around school and tuition than one long weekly session.",
          link: { href: "/blog/balancing-school-and-online-quran-in-pakistan", label: "Balancing school and online Quran in Pakistan" },
        },
        {
          title: "Planning around power and internet cuts",
          body: `Keeping the device charged and having mobile data or a UPS as backup helps lessons run smoothly. If you know about a scheduled outage, a class can be moved with ${RESCHEDULE_NOTICE_HOURS} hours' notice, subject to tutor availability.`,
        },
        {
          title: "Moving on to Hifz",
          body: "Once reading is fluent, some children begin memorization. The tutor checks readiness during lessons rather than by age alone.",
          link: { href: "/hifz-quran-online", label: "Online Hifz program" },
        },
      ],
      guide: "country",
      reviewCountry: "Pakistan",
      hideNoOfficeNote: true,
      whatsappText:
        "Assalamu Alaikum. I am in Pakistan and would like to book free online Quran trial sessions. Please share tutor availability in PKT.",
    },
  },
  "online-quran-classes-bangladesh": {
    currency: "USD",
    content: {
      countryName: "Bangladesh",
      formCountry: "Bangladesh",
      h1: "Online Quran Classes in Bangladesh for Kids and Adults",
      metaTitle: "Online Quran Classes Bangladesh — Kids & Adults | NoorPath",
      metaDescription:
        "One-to-one online Quran classes for kids and adults in Bangladesh. Qaida, reading, Tajweed and Hifz in Bangladesh time, with free trial sessions.",
      eyebrow: "For families across Bangladesh",
      hook: "Your child reads the Quran, but keeps making the same pronunciation mistakes? Live one-to-one Tajweed lessons at home, in Bangladesh time.",
      scheduleBullet: "Lesson times arranged in Bangladesh Standard Time",
      quickAnswer: {
        q: "How do online Quran classes work for families in Bangladesh?",
        a: `NoorPath teaches live one-to-one Quran lessons over video for children and adults anywhere in Bangladesh. You share the learner's level and the times that suit you; NoorPath confirms a tutor and schedule, and you start with ${TRIAL_OFFER} — no credit card needed.`,
      },
      whyIntro:
        "School, coaching and traffic leave many children little time for a separate class. A short one-to-one lesson at home gives focused Tajweed correction, with explanations in English for children at English-medium schools.",
      timeZonesIntro: "Bangladesh uses one time zone and does not change its clocks.",
      timeZones: [
        { zone: "Bangladesh Standard Time (BST)", detail: "UTC+6 all year \u2014 no daylight saving" },
      ],
      clockNote:
        "Bangladesh's clocks do not change, but some tutors' clocks may. NoorPath agrees lesson times in Bangladesh time and reconfirms them if a tutor's local time shifts.",
      schoolWeek:
        "Friday is the main weekly holiday, and many schools and offices also close on Saturday. Families often choose afternoons after school and coaching, evenings, or Friday or Saturday mornings.",
      faqs: [
        { q: "Are online Quran classes available across Bangladesh?", a: "Yes \u2014 anywhere in Bangladesh. Lessons are fully online; NoorPath has no office in Bangladesh." },
        { q: "Can children start as beginners?", a: BEGINNER_ANSWER },
        { q: "Are classes one-to-one?", a: ONE_TO_ONE_ANSWER },
        { q: "Can I request a female Quran teacher?", a: femaleTeacherAnswer("Bangladesh") },
        { q: "Are classes available after school?", a: "Yes. Request afternoon, evening or Friday\u2013Saturday windows in Bangladesh time; the recurring time is confirmed after tutor matching." },
        { q: "Can adults join?", a: ADULTS_ANSWER },
        { q: "How do free trial sessions work?", a: trialAnswer("Bangladesh time") },
        { q: "Can parents monitor progress?", a: PARENT_PORTAL_ANSWER },
      ],
      cityLinks: [],
      heroImage: IMAGES.childLaptop,
      localNotes: [
        {
          title: "Correcting Bangla-influenced pronunciation",
          body: "Some Arabic letters have no exact Bangla equivalent, so children may substitute a familiar sound. A one-to-one tutor hears these substitutions and corrects them before they become habits.",
          link: { href: "/learn-tajweed-online", label: "Tajweed lessons online" },
        },
        {
          title: "Daily duas for younger children",
          body: "Alongside Qaida, young children can learn everyday duas and the short surahs used in salah.",
          link: { href: "/courses/daily-duas-for-kids", label: "Daily duas for kids" },
        },
        {
          title: "Learning as an adult",
          body: "Adults who learned to read as children but want to fix their Tajweed can take private lessons in the evening, without a class listening.",
          link: { href: "/online-quran-classes-for-adults", label: "Quran classes for adults" },
        },
      ],
      guide: "country",
      whatsappText:
        "Assalamu Alaikum. I am in Bangladesh and would like to book free online Quran trial sessions. Please share tutor availability in Bangladesh time.",
    },
  },
  "online-quran-classes-nigeria": {
    currency: "USD",
    content: {
      countryName: "Nigeria",
      formCountry: "Nigeria",
      h1: "Online Quran Classes in Nigeria for Kids and Adults",
      metaTitle: "Online Quran Classes in Nigeria for Kids & Adults | NoorPath",
      metaDescription:
        "One-to-one online Quran classes for kids and adults in Nigeria: Noorani Qaida, Quran reading, Tajweed and Hifz in WAT, in English, with free trial sessions.",
      eyebrow: "For families across Nigeria",
      hook: "Want a Quran teacher who explains in English and gives your child one-to-one attention, without crossing the city after school? Live lessons at home, in Nigerian time.",
      scheduleBullet: "Lesson times arranged in West Africa Time",
      quickAnswer: {
        q: "How do online Quran classes work for families in Nigeria?",
        a: `NoorPath teaches live one-to-one Quran lessons over video, in English, for children and adults anywhere in Nigeria. You share the learner's level and the times that suit you in WAT; NoorPath confirms a tutor and schedule, and you start with ${TRIAL_OFFER} — no credit card needed.`,
      },
      whyIntro:
        "Traffic in Lagos and Abuja, long school days and patchy local options make a regular Quran class hard for many families. Online lessons give your child individual recitation time at home; a stable connection and headphones are all you need.",
      timeZonesIntro: "Nigeria uses one time zone and never changes its clocks.",
      timeZones: [{ zone: "West Africa Time (WAT)", detail: "UTC+1 all year — no daylight saving" }],
      clockNote:
        "Nigeria's clocks never change, but some tutors' clocks may. NoorPath agrees lesson times in WAT and reconfirms them if a tutor's local time shifts.",
      schoolWeek:
        "The weekend is Saturday and Sunday. Families often ask for weekday evenings after school or weekend mornings. Exact times are confirmed after your request.",
      faqs: [
        { q: "Are online Quran classes available across Nigeria?", a: "Yes — in every state, wherever there is a stable internet connection. Lessons are fully online; NoorPath has no office in Nigeria." },
        { q: "Can children start as beginners?", a: BEGINNER_ANSWER },
        { q: "Are classes one-to-one?", a: ONE_TO_ONE_ANSWER },
        { q: "Can I request a female Quran teacher?", a: femaleTeacherAnswer("WAT") },
        { q: "Are classes available after school?", a: "Yes. Request evening or weekend windows in WAT; the recurring time is confirmed after tutor matching." },
        { q: "Can adults join?", a: ADULTS_ANSWER },
        { q: "How do free trial sessions work?", a: trialAnswer("WAT") },
        { q: "Can parents monitor progress?", a: PARENT_PORTAL_ANSWER },
      ],
      cityLinks: [
        { label: "Lagos", href: "/online-quran-classes/lagos" },
        { label: "Abuja", href: "/online-quran-classes/abuja" },
        { label: "Kano", href: "/online-quran-classes/kano" },
        { label: "Port Harcourt", href: "/online-quran-classes/port-harcourt" },
      ],
      heroImage: IMAGES.femaleTutor,
      localNotes: [
        {
          title: "Connection and data",
          body: "Lessons run over video, so a stable connection and a pair of headphones matter more than the device. Some families keep a backup data bundle for lesson times.",
        },
        {
          title: "Around long school days and traffic",
          body: "When the school run in Lagos or Abuja stretches into the evening, later weekday slots or weekend mornings avoid rushing a tired child straight into class.",
        },
        {
          title: "Explanations in English",
          body: "NoorPath's tutors are English-speaking, which suits children at English-medium schools who learn Arabic pronunciation best with explanations in English.",
        },
      ],
      guide: "country",
      whatsappText:
        "Assalamu Alaikum. I am in Nigeria and would like to book free online Quran trial sessions. Please share tutor availability in WAT.",
    },
  },
};

export function getCountryMarket(slug: string): CountryMarket | undefined {
  return COUNTRY_MARKETS[slug];
}

export function getCountryContent(slug: string): CountryContent | undefined {
  return COUNTRY_MARKETS[slug]?.content;
}
