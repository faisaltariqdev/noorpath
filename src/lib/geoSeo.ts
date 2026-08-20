import { locations } from "@/data/locations";

const SITE_URL = "https://www.noorpath.online";

/**
 * BCP 47 hreflang tags for English-language country hubs.
 * All location pages share one reciprocal cluster (self + every other hub + x-default).
 */
export const LOCATION_HREFLANG_BY_SLUG: Record<string, string> = {
  "online-quran-classes-usa": "en-US",
  "online-quran-classes-uk": "en-GB",
  "online-quran-classes-canada": "en-CA",
  "online-quran-classes-australia": "en-AU",
  "online-quran-classes-uae": "en-AE",
  "online-quran-classes-saudi-arabia": "en-SA",
  "online-quran-classes-germany": "en-DE",
  "online-quran-classes-malaysia": "en-MY",
  "online-quran-classes-pakistan": "en-PK",
  "online-quran-classes-bangladesh": "en-BD",
  "online-quran-classes-south-africa": "en-ZA",
  "online-quran-classes-indonesia": "en-ID",
  "online-quran-classes-india": "en-IN",
  "online-quran-classes-nigeria": "en-NG",
  "online-quran-classes-france": "en-FR",
  "online-quran-classes-netherlands": "en-NL",
  "online-quran-classes-sweden": "en-SE",
  "online-quran-classes-qatar": "en-QA",
  "online-quran-classes-kuwait": "en-KW",
  "online-quran-classes-singapore": "en-SG",
  "online-quran-classes-ireland": "en-IE",
  "online-quran-classes-new-zealand": "en-NZ",
  "online-quran-classes-norway": "en-NO",
  "online-quran-classes-finland": "en-FI",
  "online-quran-classes-denmark": "en-DK",
  "online-quran-classes-turkey": "en-TR",
};

export type EnglishStyle = "British English" | "American English" | "Natural English";

export interface PriorityMarket {
  slug: string;
  country: string;
  flag: string;
  weight: number;
  locale: string;
  openGraphLocale: string;
  languageStyle: EnglishStyle;
  billingCurrency: {
    code: string;
    name: string;
  };
  timezone: string;
  schedulingGuidance: string;
  keywordClusters: string[];
  content: {
    metadataTitle: string;
    metadataDescription: string;
    heading: string;
    introduction: string;
    localPlanning: string;
  };
}

export const PRIORITY_MARKETS: readonly PriorityMarket[] = [
  {
    slug: "online-quran-classes-uk",
    country: "United Kingdom",
    flag: "🇬🇧",
    weight: 40,
    locale: "en-GB",
    openGraphLocale: "en_GB",
    languageStyle: "British English",
    billingCurrency: { code: "GBP", name: "British pounds" },
    timezone: "GMT / BST",
    schedulingGuidance:
      "Request an after-school, evening or weekend time in GMT or BST. Daylight-saving changes and tutor availability are confirmed during matching.",
    keywordClusters: [
      "online quran classes uk",
      "online quran classes for kids uk",
      "female quran teacher uk",
      "online tajweed classes uk",
      "online hifz classes uk",
      "noorani qaida online uk",
    ],
    content: {
      metadataTitle: "Online Quran Classes UK 2026 — Live 1-on-1 | Free Trial",
      metadataDescription:
        "✓ Live 1-on-1 Quran classes for UK families from £22/mo* ✓ GMT/BST slots ✓ Free 30-min trial — no card required. Book now for kids & adults!",
      heading: "Online Quran Classes in the United Kingdom",
      introduction:
        "Families across the UK can request live one-to-one Quran tuition online, with lesson planning around the school week and local GMT or BST time.",
      localPlanning:
        "Share the learner’s school finish time, preferred weekdays and whether weekend tuition would be more practical. A recurring slot is confirmed only after tutor matching.",
    },
  },
  {
    slug: "online-quran-classes-usa",
    country: "United States",
    flag: "🇺🇸",
    weight: 30,
    locale: "en-US",
    openGraphLocale: "en_US",
    languageStyle: "American English",
    billingCurrency: { code: "USD", name: "U.S. dollars" },
    timezone: "ET / CT / MT / PT",
    schedulingGuidance:
      "Request a before-school, after-school, evening, or weekend window in your U.S. time zone. Tutor availability is confirmed during matching.",
    keywordClusters: [
      "online quran classes usa",
      "online quran classes for kids usa",
      "female quran teacher usa",
      "online tajweed classes usa",
      "online hifz classes usa",
      "quran tutor online usa",
    ],
    content: {
      metadataTitle: "Online Quran Classes USA 2026 — Live 1-on-1 | Free Trial",
      metadataDescription:
        "✓ Live 1-on-1 Quran classes for US families from $29/mo ✓ ET, CT, MT, PT slots ✓ Free 30-min trial — no card required. Join 1000+ students!",
      heading: "Online Quran Classes in the United States",
      introduction:
        "Families in the United States can request live one-on-one Quran lessons online without adding another commute to the school week.",
      localPlanning:
        "Include your state or time zone, school-day constraints, and preferred weekend windows in the request. Matching uses the learner’s local time rather than a single nationwide schedule.",
    },
  },
  {
    slug: "online-quran-classes-uae",
    country: "United Arab Emirates",
    flag: "🇦🇪",
    weight: 10,
    locale: "en-AE",
    openGraphLocale: "en_AE",
    languageStyle: "Natural English",
    billingCurrency: { code: "AED", name: "UAE dirhams" },
    timezone: "GST (UTC+4)",
    schedulingGuidance:
      "Request a GST lesson window around school, work, and prayer commitments. Evening and weekend preferences remain subject to tutor matching.",
    keywordClusters: [
      "online quran classes uae",
      "online quran classes dubai",
      "online quran classes abu dhabi",
      "female quran teacher uae",
      "online tajweed classes uae",
      "online hifz classes uae",
    ],
    content: {
      metadataTitle: "Online Quran Classes UAE 2026 — Live 1-on-1 | Free Trial",
      metadataDescription:
        "✓ Live 1-on-1 Quran classes for UAE families in GST ✓ Noorani Qaida, Tajweed & Hifz ✓ Free 30-min trial — no card needed. Book for kids & adults!",
      heading: "Online Quran Classes in the UAE",
      introduction:
        "Families in the UAE can request English-language online Quran support for children or adults, delivered as live one-to-one lessons in Gulf Standard Time.",
      localPlanning:
        "Share school or work finish times and any preferred days when requesting a tutor. Availability for evening and weekend GST slots is confirmed after matching.",
    },
  },
  {
    slug: "online-quran-classes-canada",
    country: "Canada",
    flag: "🇨🇦",
    weight: 8,
    locale: "en-CA",
    openGraphLocale: "en_CA",
    languageStyle: "Natural English",
    billingCurrency: { code: "CAD", name: "Canadian dollars" },
    timezone: "ET / CT / MT / PT / AT / NT",
    schedulingGuidance:
      "Request a lesson in your provincial or territorial time zone. After-school, evening, and weekend preferences are confirmed during tutor matching.",
    keywordClusters: [
      "online quran classes canada",
      "online quran classes for kids canada",
      "female quran teacher canada",
      "online tajweed classes canada",
      "online hifz classes canada",
      "quran tutor online canada",
    ],
    content: {
      metadataTitle: "Online Quran Classes Canada 2026 — Live 1-on-1 | Free Trial",
      metadataDescription:
        "✓ Live 1-on-1 Quran classes for Canadian families from $29/mo ✓ Local timezone slots ✓ Free 30-min trial — no card needed. Start from zero today!",
      heading: "Online Quran Classes in Canada",
      introduction:
        "Canadian families can request online Quran lessons planned around their own provincial or territorial time zone and school-week routine.",
      localPlanning:
        "Include your city and time zone in the request, especially where the local clock differs from Eastern Time. Winter and summer clock changes are handled when a recurring slot is agreed.",
    },
  },
  {
    slug: "online-quran-classes-australia",
    country: "Australia",
    flag: "🇦🇺",
    weight: 6,
    locale: "en-AU",
    openGraphLocale: "en_AU",
    languageStyle: "Natural English",
    billingCurrency: { code: "AUD", name: "Australian dollars" },
    timezone: "AEST / AEDT / ACST / ACDT / AWST",
    schedulingGuidance:
      "Request an Australian local-time window and note daylight-saving rules in your state. Early-morning, after-school, and weekend times are subject to matching.",
    keywordClusters: [
      "online quran classes australia",
      "online quran classes for kids australia",
      "female quran teacher australia",
      "online quran classes sydney",
      "online quran classes melbourne",
      "noorani qaida online australia",
      "online tajweed classes australia",
      "online hifz classes australia",
      "quran tutor online australia",
    ],
    content: {
      metadataTitle: "Online Quran Classes Australia 2026 — Live 1-on-1 | Free Trial",
      metadataDescription:
        "✓ Live 1-on-1 Quran classes for families in Sydney, Melbourne & beyond ✓ AEST/AWST slots ✓ Free 30-min trial — no card needed. Book now!",
      heading: "Online Quran Classes in Australia",
      introduction:
        "Families in Australia can request live online Quran tuition planned around their state’s time zone, school hours, and daylight-saving arrangements — from Noorani Qaida through Tajweed and Hifz.",
      localPlanning:
        "Provide your city or state when requesting a tutor because Australian time zones and daylight-saving rules vary. Exact lesson times are confirmed during matching.",
    },
  },
  {
    slug: "online-quran-classes-india",
    country: "India",
    flag: "🇮🇳",
    weight: 7,
    locale: "en-IN",
    openGraphLocale: "en_IN",
    languageStyle: "Natural English",
    billingCurrency: { code: "INR", name: "Indian rupees" },
    timezone: "IST (UTC+5:30)",
    schedulingGuidance:
      "Request an after-school, evening, or weekend window in IST. Exact recurring times are confirmed during tutor matching — not a fixed India-wide timetable.",
    keywordClusters: [
      "online quran classes india",
      "online quran classes for kids india",
      "female quran teacher india",
      "online quran classes hyderabad",
      "online quran classes mumbai",
      "online quran classes delhi",
      "noorani qaida online india",
      "online tajweed classes india",
      "online hifz classes india",
      "after school quran classes india",
    ],
    content: {
      metadataTitle: "Online Quran Classes India 2026 — Live 1-on-1 | Free Trial",
      metadataDescription:
        "✓ Live 1-on-1 Quran classes for Indian families in IST ✓ Noorani Qaida to Hifz ✓ Free 30-min trial — no card required. Join 1000+ students now!",
      heading: "Online Quran Classes in India",
      introduction:
        "Indian families can request live one-to-one online Quran lessons in IST — from Noorani Qaida through Tajweed and Hifz — planned around school hours and confirmed after tutor matching.",
      localPlanning:
        "Share your city (Hyderabad, Mumbai, Delhi, Bengaluru, Lucknow, or elsewhere), school finish times, language preference, and any female-tutor request. Exact IST slots are confirmed after matching.",
    },
  },
  {
    slug: "online-quran-classes-nigeria",
    country: "Nigeria",
    flag: "🇳🇬",
    weight: 6,
    locale: "en-NG",
    openGraphLocale: "en_NG",
    languageStyle: "Natural English",
    billingCurrency: { code: "NGN", name: "Nigerian naira" },
    timezone: "WAT (UTC+1)",
    schedulingGuidance:
      "Request an after-school, evening, or weekend window in WAT. Exact recurring times are confirmed during tutor matching — not a fixed Nigeria-wide timetable.",
    keywordClusters: [
      "online quran classes nigeria",
      "online quran classes for kids nigeria",
      "female quran teacher nigeria",
      "online quran classes lagos",
      "online quran classes abuja",
      "noorani qaida online nigeria",
      "online tajweed classes nigeria",
      "online hifz classes nigeria",
      "after school quran classes nigeria",
    ],
    content: {
      metadataTitle: "Online Quran Classes Nigeria 2026 — Live 1-on-1 | Free Trial",
      metadataDescription:
        "✓ Live 1-on-1 Quran classes for families in Lagos, Abuja & beyond ✓ WAT slots ✓ Free 30-min trial — no card required. Start learning now!",
      heading: "Online Quran Classes in Nigeria",
      introduction:
        "Nigerian families can request live one-to-one online Quran lessons in WAT — from Noorani Qaida through Tajweed and Hifz — planned around school hours and confirmed after tutor matching.",
      localPlanning:
        "Share your city (Lagos, Abuja, Kano, Ibadan, Kaduna, or elsewhere), school finish times, power/internet constraints, language preference, and any female-tutor request. Exact WAT slots are confirmed after matching.",
    },
  },
  {
    slug: "online-quran-classes-germany",
    country: "Germany",
    flag: "🇩🇪",
    weight: 3,
    locale: "en-DE",
    openGraphLocale: "en_DE",
    languageStyle: "Natural English",
    billingCurrency: { code: "EUR", name: "euros" },
    timezone: "CET / CEST",
    schedulingGuidance:
      "Request a CET or CEST time around school and work. English-language tutor and evening or weekend availability are confirmed during matching.",
    keywordClusters: [
      "online quran classes germany",
      "quran classes online germany",
      "english quran teacher germany",
      "online tajweed classes germany",
      "online hifz classes germany",
      "koranunterricht online englisch",
    ],
    content: {
      metadataTitle: "English Online Quran Classes Germany 2026 — Live 1-on-1",
      metadataDescription:
        "✓ English-language online Quran classes in Germany from €27/mo* ✓ CET/CEST slots ✓ Free 30-min trial — no card needed. Book for kids & adults!",
      heading: "Online Quran Classes in Germany",
      introduction:
        "Families in Germany can request English-language Quran teaching online for children or adults, with live one-to-one lessons planned in CET or CEST.",
      localPlanning:
        "Share the learner’s language needs and preferred times after school or work. NoorPath operates online and confirms English-language tutor availability during matching.",
    },
  },
  {
    slug: "online-quran-classes-qatar",
    country: "Qatar",
    flag: "🇶🇦",
    weight: 2,
    locale: "en-QA",
    openGraphLocale: "en_QA",
    languageStyle: "Natural English",
    billingCurrency: { code: "QAR", name: "Qatari riyals" },
    timezone: "AST (UTC+3)",
    schedulingGuidance:
      "Request an AST window after school or work, or at the weekend. English-language tutor and schedule availability are confirmed during matching.",
    keywordClusters: [
      "online quran classes qatar",
      "online quran classes doha",
      "female quran teacher qatar",
      "english quran tutor qatar",
      "online tajweed classes qatar",
      "online hifz classes qatar",
    ],
    content: {
      metadataTitle: "Online Quran Classes Qatar — Live 1-to-1 Lessons | NoorPath",
      metadataDescription:
        "Request live one-to-one online Quran classes in Qatar, with AST scheduling and English-language options for children and adults.",
      heading: "Online Quran Classes in Qatar",
      introduction:
        "Families in Qatar can request live one-to-one Quran lessons online, including English-language support for learners in international-school routines.",
      localPlanning:
        "Include school or work finish times and your preferred AST windows. Evening, weekend, and English-language tutor availability is confirmed after matching.",
    },
  },
  {
    slug: "online-quran-classes-kuwait",
    country: "Kuwait",
    flag: "🇰🇼",
    weight: 1,
    locale: "en-KW",
    openGraphLocale: "en_KW",
    languageStyle: "Natural English",
    billingCurrency: { code: "KWD", name: "Kuwaiti dinars" },
    timezone: "AST (UTC+3)",
    schedulingGuidance:
      "Request an AST lesson time around school, work, and prayer commitments. Evening and weekend availability is confirmed during tutor matching.",
    keywordClusters: [
      "online quran classes kuwait",
      "quran classes online kuwait",
      "female quran teacher kuwait",
      "english quran tutor kuwait",
      "online tajweed classes kuwait",
      "online hifz classes kuwait",
    ],
    content: {
      metadataTitle: "Online Quran Classes Kuwait — Live 1-to-1 Lessons | NoorPath",
      metadataDescription:
        "Request live one-to-one online Quran classes in Kuwait, with AST scheduling and English-language options for children and adults.",
      heading: "Online Quran Classes in Kuwait",
      introduction:
        "Families in Kuwait can request live online Quran tuition for children or adults, with one-to-one teaching planned in Arabia Standard Time.",
      localPlanning:
        "Share preferred school-day or weekend windows when requesting a tutor. NoorPath is an online service, and the recurring AST slot is confirmed only after matching.",
    },
  },
  {
    slug: "online-quran-classes-saudi-arabia",
    country: "Saudi Arabia",
    flag: "🇸🇦",
    weight: 1,
    locale: "en-SA",
    openGraphLocale: "en_SA",
    languageStyle: "Natural English",
    billingCurrency: { code: "SAR", name: "Saudi riyals" },
    timezone: "AST (UTC+3)",
    schedulingGuidance:
      "Request an AST window around school, work, and prayer commitments. Tutor availability for evening or weekend lessons is confirmed during matching.",
    keywordClusters: [
      "online quran classes saudi arabia",
      "online quran classes ksa",
      "female quran teacher saudi arabia",
      "english quran tutor saudi arabia",
      "online tajweed classes saudi arabia",
      "online hifz classes saudi arabia",
    ],
    content: {
      metadataTitle: "Online Quran Classes Saudi Arabia | NoorPath",
      metadataDescription:
        "Request live one-to-one online Quran classes in Saudi Arabia, with AST scheduling and English-language options for children and adults.",
      heading: "Online Quran Classes in Saudi Arabia",
      introduction:
        "Families in Saudi Arabia can request one-to-one Quran teaching online as focused support for Qaida, recitation, Tajweed, or Hifz.",
      localPlanning:
        "Share school, work, and preferred prayer-aware scheduling constraints in AST. English-language tutor and recurring-slot availability are confirmed after matching.",
    },
  },
  {
    slug: "online-quran-classes-france",
    country: "France",
    flag: "🇫🇷",
    weight: 3,
    // The page is written in English; keep language signals aligned with its content.
    locale: "en-FR",
    openGraphLocale: "en_FR",
    languageStyle: "Natural English",
    billingCurrency: { code: "EUR", name: "euros" },
    timezone: "CET / CEST",
    schedulingGuidance:
      "Classes can be requested from about 4 PM to 10 PM CET/CEST around the French school day, plus weekend windows. Exact tutor availability is confirmed during matching.",
    keywordClusters: [
      "online quran classes france",
      "cours de coran en ligne",
      "online quran classes paris",
      "quran teacher france",
      "noorani qaida online france",
      "female quran teacher france",
    ],
    content: {
      metadataTitle: "Online Quran Classes France | Free Trial",
      metadataDescription:
        "Live 1-to-1 online Quran & Noorani Qaida for families in France. CET evenings 4–10 PM, USD pricing with € context. Free 30-min trial.",
      heading: "Online Quran Classes in France",
      introduction:
        "Muslim families across France — including Paris, Marseille, Lyon, Toulouse and Lille — can request live one-to-one Quran and Noorani Qaida lessons online, with English or Arabic instruction subject to tutor matching and evening CET/CEST slots that fit after school.",
      localPlanning:
        "Share school finish times, preferred weekdays between roughly 4 PM and 10 PM CET, and whether weekend lessons help. NoorPath is online-only (no French campus) and confirms the recurring slot after matching.",
    },
  },
  {
    slug: "online-quran-classes-netherlands",
    country: "Netherlands",
    flag: "🇳🇱",
    weight: 2,
    locale: "en-NL",
    openGraphLocale: "en_NL",
    languageStyle: "Natural English",
    billingCurrency: { code: "EUR", name: "euros" },
    timezone: "CET / CEST",
    schedulingGuidance:
      "Request after-school or evening lessons from about 4 PM to 10 PM CET/CEST for Amsterdam, Rotterdam, The Hague and beyond. Weekend preferences are confirmed during matching.",
    keywordClusters: [
      "online quran classes netherlands",
      "online quran amsterdam",
      "quran teacher netherlands",
      "islamic classes holland",
      "noorani qaida online netherlands",
      "female quran teacher netherlands",
    ],
    content: {
      metadataTitle: "Online Quran Classes Netherlands | Trial",
      metadataDescription:
        "Live online Quran classes for Dutch Muslim families. CET slots ~4–10 PM, Noorani Qaida to Hifz, USD fees with € budgeting notes. Free trial.",
      heading: "Online Quran Classes in the Netherlands",
      introduction:
        "Families in the Netherlands can request live one-to-one Quran tuition online for children and adults, planned around Dutch school hours in CET/CEST — including evening windows that keep evenings predictable for homework and family time.",
      localPlanning:
        "Note your city (Amsterdam, Rotterdam, The Hague, Utrecht or elsewhere), preferred 4–10 PM CET evenings, and any female-tutor preference. Availability is confirmed after matching; NoorPath does not operate a Dutch branch.",
    },
  },
  {
    slug: "online-quran-classes-sweden",
    country: "Sweden",
    flag: "🇸🇪",
    weight: 2,
    locale: "en-SE",
    openGraphLocale: "en_SE",
    languageStyle: "Natural English",
    billingCurrency: { code: "SEK", name: "Swedish kronor" },
    timezone: "CET / CEST",
    schedulingGuidance:
      "Request lessons from about 4 PM to 10 PM CET/CEST to align with Swedish school evenings, or ask for weekend mornings. Tutor and slot availability are confirmed during matching.",
    keywordClusters: [
      "quran classes in stockholm",
      "online quran classes sweden",
      "online quran stockholm",
      "quran teacher sweden",
      "learn quran online sweden",
      "noorani qaida online sweden",
      "islamic classes sweden",
    ],
    content: {
      metadataTitle: "Quran Classes in Stockholm & Sweden Online | NoorPath",
      metadataDescription:
        "Quran classes in Stockholm and across Sweden: live 1-to-1 online Qaida, Tajweed or Hifz with CET evenings. Free trial; availability confirmed after request.",
      heading: "Online Quran Classes in Sweden — Including Stockholm",
      introduction:
        "Muslim families in Sweden — including Stockholm, Gothenburg, Malmö and Uppsala — can request live online Quran and Noorani Qaida classes with tutors matched to the learner’s level, with evening CET/CEST times that respect Nordic school and daylight patterns.",
      localPlanning:
        "Share preferred after-school windows (often 4–10 PM CET), winter daylight constraints, and language preferences. Exact recurring times are confirmed only after tutor matching.",
    },
  },
  {
    slug: "online-quran-classes-ireland",
    country: "Ireland",
    flag: "🇮🇪",
    weight: 2,
    locale: "en-IE",
    openGraphLocale: "en_IE",
    languageStyle: "Natural English",
    billingCurrency: { code: "EUR", name: "euros" },
    timezone: "GMT / IST",
    schedulingGuidance:
      "Request an after-school, evening or weekend window in GMT or IST. Tutor availability is confirmed during matching.",
    keywordClusters: [
      "online quran classes ireland",
      "female quran teacher in ireland",
      "quran teacher ireland",
      "learn quran online ireland",
      "quran classes for kids ireland",
      "after school quran classes ireland",
    ],
    content: {
      metadataTitle: "Online Quran Classes in Dublin & Ireland | NoorPath",
      metadataDescription:
        "Online Quran classes in Dublin and across Ireland: live 1-to-1 Qaida, Tajweed or Hifz with GMT/IST matching. Female tutor requests welcome. Free trial.",
      heading: "Online Quran Classes in Dublin and Ireland",
      introduction:
        "Families in Dublin, Cork, Limerick, Galway and elsewhere in Ireland can request live one-to-one online Quran classes when local after-school options are limited. Request a female Quran teacher in Ireland when preferred. NoorPath teaches online only and does not operate an Irish campus.",
      localPlanning:
        "Share your city (for example Dublin), school finish time, and preferred GMT or IST evenings or weekend mornings. Exact tutor and recurring-time availability is confirmed after matching.",
    },
  },
  {
    slug: "online-quran-classes-new-zealand",
    country: "New Zealand",
    flag: "🇳🇿",
    weight: 4,
    locale: "en-NZ",
    openGraphLocale: "en_NZ",
    languageStyle: "Natural English",
    billingCurrency: { code: "NZD", name: "New Zealand dollars" },
    timezone: "NZST / NZDT",
    schedulingGuidance:
      "Request a before-school, after-school, evening, or weekend window in NZST or NZDT. Daylight-saving changes and tutor availability are confirmed during matching.",
    keywordClusters: [
      "online quran classes for kids in new zealand",
      "online quran classes new zealand",
      "quran teacher new zealand",
      "quran teacher for kids in auckland",
      "female quran teacher new zealand",
      "noorani qaida online new zealand",
      "online tajweed classes new zealand",
      "learn quran online nz",
    ],
    content: {
      metadataTitle: "NoorPath Academy | Online Quran Classes New Zealand — Free Trial",
      metadataDescription:
        "NoorPath Academy live one-to-one online Quran classes for NZ kids and families: NZST/NZDT matching, Noorani Qaida to Hifz, female tutors on request, free trial. Online only.",
      heading: "Online Quran Classes for Kids in New Zealand",
      introduction:
        "Muslim families across New Zealand — especially in Auckland, and also in Wellington, Christchurch, Hamilton and smaller towns — can request live one-to-one online Quran classes for kids when local mosque programmes or full-time Islamic schooling are limited. Lessons are online only; NoorPath does not operate a New Zealand campus.",
      localPlanning:
        "Share your city, school finish time, and preferred NZST or NZDT mornings, evenings or weekend windows. Exact tutor and recurring-time availability is confirmed after matching — helpful for dispersed communities without a nearby mosque class.",
    },
  },
  {
    slug: "online-quran-classes-norway",
    country: "Norway",
    flag: "🇳🇴",
    weight: 2,
    locale: "en-NO",
    openGraphLocale: "en_NO",
    languageStyle: "Natural English",
    billingCurrency: { code: "NOK", name: "Norwegian kroner" },
    timezone: "CET / CEST",
    schedulingGuidance:
      "Request an after-school, evening or weekend window in CET or CEST. Winter daylight and tutor availability are confirmed during matching.",
    keywordClusters: [
      "online quran classes norway",
      "quran teacher norway",
      "online quran oslo",
      "learn quran online norway",
      "noorani qaida online norway",
      "online tajweed classes norway",
    ],
    content: {
      metadataTitle: "Online Quran Classes in Norway | NoorPath",
      metadataDescription:
        "Online Quran classes in Norway: live 1-to-1 Qaida, Tajweed or Hifz with CET/CEST matching for Oslo and beyond. Free trial; availability confirmed after request.",
      heading: "Online Quran Classes in Norway",
      introduction:
        "Muslim families in Norway — including Oslo, Bergen and smaller towns — can request live one-to-one online Quran classes when local children’s programmes are limited. NoorPath teaches online only and does not operate a Norwegian campus.",
      localPlanning:
        "Share your city, school finish time, and preferred CET/CEST evenings. Exact tutor and recurring-time availability is confirmed after matching.",
    },
  },
  {
    slug: "online-quran-classes-finland",
    country: "Finland",
    flag: "🇫🇮",
    weight: 2,
    locale: "en-FI",
    openGraphLocale: "en_FI",
    languageStyle: "Natural English",
    billingCurrency: { code: "EUR", name: "euros" },
    timezone: "EET / EEST",
    schedulingGuidance:
      "Request an after-school, evening or weekend window in EET or EEST. Tutor availability is confirmed during matching.",
    keywordClusters: [
      "online quran classes finland",
      "kids quran classes finland",
      "quran teacher finland",
      "online quran helsinki",
      "learn quran online finland",
      "noorani qaida online finland",
    ],
    content: {
      metadataTitle: "Online Quran Classes in Finland | NoorPath",
      metadataDescription:
        "Kids Quran classes in Finland online: live 1-to-1 Qaida, Tajweed or Hifz with EET/EEST matching for Helsinki and Espoo. Free trial; availability after request.",
      heading: "Online Quran Classes in Finland",
      introduction:
        "Muslim families in Finland — including Helsinki, Espoo and other cities — can request live one-to-one online Quran classes for children and adults when local options are thin. NoorPath teaches online only and does not operate a Finnish campus.",
      localPlanning:
        "Share your city, school finish time, and preferred EET/EEST evenings. Exact tutor and recurring-time availability is confirmed after matching.",
    },
  },
  {
    slug: "online-quran-classes-denmark",
    country: "Denmark",
    flag: "🇩🇰",
    weight: 2,
    locale: "en-DK",
    openGraphLocale: "en_DK",
    languageStyle: "Natural English",
    billingCurrency: { code: "DKK", name: "Danish kroner" },
    timezone: "CET / CEST",
    schedulingGuidance:
      "Request an after-school, evening, weekend, or Saturday morning window in CET or CEST. Tutor availability is confirmed during matching.",
    keywordClusters: [
      "online quran classes denmark",
      "weekend quran classes denmark",
      "quran teacher denmark",
      "online quran copenhagen",
      "learn quran online denmark",
      "noorani qaida online denmark",
    ],
    content: {
      metadataTitle: "Online Quran Classes in Denmark | NoorPath",
      metadataDescription:
        "Online Quran classes in Denmark: live 1-to-1 Qaida, Tajweed or Hifz with CET/CEST matching, including weekend windows. Free trial; availability after request.",
      heading: "Online Quran Classes in Denmark",
      introduction:
        "Muslim families in Denmark — including Copenhagen, Aarhus and other cities — can request live one-to-one online Quran classes, including weekend windows when weekdays are full. NoorPath teaches online only and does not operate a Danish campus.",
      localPlanning:
        "Share your city, preferred weekday evenings or weekend mornings in CET/CEST, and any female-tutor preference. Exact availability is confirmed after matching.",
    },
  },
] as const;

const marketBySlug = new Map(PRIORITY_MARKETS.map((market) => [market.slug, market]));

export function getPriorityMarket(slug: string): PriorityMarket | undefined {
  return marketBySlug.get(slug);
}

export function getLocale(slug: string): string {
  return getPriorityMarket(slug)?.locale ?? "en";
}

export function getOpenGraphLocale(slug: string): string {
  return getPriorityMarket(slug)?.openGraphLocale ?? "en_US";
}

export function orderByMarketPriority<T extends { slug: string }>(items: readonly T[]): T[] {
  return [...items].sort((a, b) => {
    const weightDifference =
      (getPriorityMarket(b.slug)?.weight ?? 0) - (getPriorityMarket(a.slug)?.weight ?? 0);
    return weightDifference || a.slug.localeCompare(b.slug);
  });
}

/**
 * Full reciprocal hreflang cluster for every `/locations/{slug}` country hub.
 * Same map is returned for every page (includes self-reference for each hub).
 * x-default → main commercial hub `/online-quran-classes`.
 */
export function getCountryHubHreflang(): Record<string, string> {
  const entries: [string, string][] = locations.map((loc) => {
    const code = LOCATION_HREFLANG_BY_SLUG[loc.slug];
    if (!code) {
      throw new Error(`Missing LOCATION_HREFLANG_BY_SLUG for ${loc.slug}`);
    }
    return [code, `${SITE_URL}/locations/${loc.slug}`];
  });
  entries.push(["x-default", `${SITE_URL}/online-quran-classes`]);
  return Object.fromEntries(entries);
}

/** Programmatic integrity check — reciprocal cluster, self URLs, x-default. */
export function verifyLocationHreflangCluster(): { ok: boolean; errors: string[] } {
  const errors: string[] = [];
  const cluster = getCountryHubHreflang();
  const expectedCodes = new Set<string>(["x-default"]);

  for (const loc of locations) {
    const code = LOCATION_HREFLANG_BY_SLUG[loc.slug];
    if (!code) {
      errors.push(`No hreflang code mapped for ${loc.slug}`);
      continue;
    }
    expectedCodes.add(code);
    const url = cluster[code];
    const expectedUrl = `${SITE_URL}/locations/${loc.slug}`;
    if (url !== expectedUrl) {
      errors.push(`Wrong URL for ${code}: got ${url}, expected ${expectedUrl}`);
    }
  }

  if (cluster["x-default"] !== `${SITE_URL}/online-quran-classes`) {
    errors.push(`x-default must point to ${SITE_URL}/online-quran-classes`);
  }

  for (const code of Object.keys(cluster)) {
    if (!expectedCodes.has(code)) {
      errors.push(`Unexpected hreflang code in cluster: ${code}`);
    }
  }
  for (const code of expectedCodes) {
    if (!(code in cluster)) {
      errors.push(`Missing hreflang code in cluster: ${code}`);
    }
  }

  // Reciprocity: every location slug's code must appear; cluster size = locations + x-default
  if (Object.keys(cluster).length !== locations.length + 1) {
    errors.push(
      `Cluster size ${Object.keys(cluster).length} !== locations (${locations.length}) + x-default`,
    );
  }

  return { ok: errors.length === 0, errors };
}

export function getCurrencyNote(slug: string): string {
  const market = getPriorityMarket(slug);
  if (!market) {
    return "NoorPath publishes and charges its current lesson prices in USD. Any conversion shown by a bank or payment provider is outside NoorPath’s control.";
  }
  if (market.billingCurrency.code === "USD") {
    return "NoorPath publishes and charges its current lesson prices in U.S. dollars (USD).";
  }
  return `NoorPath publishes and charges its current lesson prices in U.S. dollars (USD), not ${market.billingCurrency.name} (${market.billingCurrency.code}). Your bank or payment provider may convert the charge and apply its own rate or fees; NoorPath does not publish an exchange rate.`;
}

export function getRelatedPriorityCountries(slug: string, limit = 4): PriorityMarket[] {
  return PRIORITY_MARKETS.filter((market) => market.slug !== slug).slice(0, limit);
}

export function getPriorityContent(slug: string): PriorityMarket["content"] | undefined {
  return getPriorityMarket(slug)?.content;
}
