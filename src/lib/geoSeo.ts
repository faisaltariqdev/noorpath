const SITE_URL = "https://www.noorpath.online";

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
      metadataTitle: "Online Quran Classes UK — Kids & Adults | NoorPath",
      metadataDescription:
        "Request live one-to-one online Quran classes in the UK, with GMT/BST scheduling for Qaida, Tajweed, Hifz, children and adults.",
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
      metadataTitle: "Online Quran Classes USA — Kids & Adults | NoorPath",
      metadataDescription:
        "Request live one-on-one online Quran classes in the USA, with ET, CT, MT, or PT scheduling for Qaida, Tajweed, Hifz, kids, and adults.",
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
      metadataTitle: "Online Quran Classes UAE — Live 1-to-1 Lessons | NoorPath",
      metadataDescription:
        "Request live one-to-one online Quran classes in the UAE, with GST scheduling for Qaida, Tajweed, Hifz, children and adults.",
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
      metadataTitle: "Online Quran Classes Canada — Kids & Adults | NoorPath",
      metadataDescription:
        "Request live one-to-one online Quran classes in Canada, with local time-zone scheduling for Qaida, Tajweed, Hifz, children and adults.",
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
    weight: 5,
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
      "online tajweed classes australia",
      "online hifz classes australia",
      "quran tutor online australia",
    ],
    content: {
      metadataTitle: "Online Quran Classes Australia — Kids & Adults | NoorPath",
      metadataDescription:
        "Request live one-to-one online Quran classes in Australia, with state-aware scheduling for Qaida, Tajweed, Hifz, children and adults.",
      heading: "Online Quran Classes in Australia",
      introduction:
        "Families in Australia can request live online Quran tuition planned around their state’s time zone, school hours, and daylight-saving arrangements.",
      localPlanning:
        "Provide your city or state when requesting a tutor because Australian time zones and daylight-saving rules vary. Exact lesson times are confirmed during matching.",
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
      metadataTitle: "Online Quran Classes Germany — English Lessons | NoorPath",
      metadataDescription:
        "Request English-language online Quran classes in Germany, with CET/CEST scheduling for Qaida, Tajweed, Hifz, children and adults.",
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

export function getCountryHubHreflang(): Record<string, string> {
  return Object.fromEntries([
    ...PRIORITY_MARKETS.map((market) => [
      market.locale,
      `${SITE_URL}/locations/${market.slug}`,
    ]),
    ["x-default", `${SITE_URL}/online-quran-classes`],
  ]);
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
