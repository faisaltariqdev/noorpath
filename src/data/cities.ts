export interface City {
  /** URL slug, e.g. "london" → /online-quran-classes/london */
  slug: string;
  city: string;
  country: string;
  /** Parent country location slug for cluster back-linking */
  countrySlug: string;
  flag: string;
  timezone: string;
  /** Unique, genuinely helpful local context (avoids duplicate content) */
  localContext: string;
  keywords: string[];
}

/**
 * Thin near-duplicate city templates (≈99% overlap after city-name normalisation).
 * Kept live for users/internal links, but excluded from search indexing + sitemap
 * until each page has genuine local differentiation (Google doorway / scaled-content risk).
 */
export const TEMPLATE_CITY_NOINDEX_SLUGS = new Set<string>([
  "aarhus",
  "abu-dhabi",
  "bergen",
  "christchurch",
  "copenhagen",
  "cork",
  "doha",
  "espoo",
  "galway",
  "helsinki",
  "jeddah",
  "karachi",
  "lahore",
  "leeds",
  "luton",
  "oslo",
  "riyadh",
]);

export function isCityIndexable(slug: string): boolean {
  return !TEMPLATE_CITY_NOINDEX_SLUGS.has(slug);
}

export const cities: City[] = [
  // ── United Kingdom ──────────────────────────────────────────────
  {
    slug: "london",
    city: "London",
    country: "United Kingdom",
    countrySlug: "online-quran-classes-uk",
    flag: "🇬🇧",
    timezone: "GMT / BST",
    localContext:
      "London families may need to fit lessons around school travel, work commutes and activities across different boroughs. Request an after-school, evening or Saturday window in GMT or BST; the recurring time is confirmed after tutor matching.",
    keywords: ["online quran classes london", "quran teacher london", "learn quran london", "quran tutor london", "islamic classes london", "online quran classes for kids london", "female quran teacher london", "noorani qaida online london"],
  },
  {
    slug: "birmingham",
    city: "Birmingham",
    country: "United Kingdom",
    countrySlug: "online-quran-classes-uk",
    flag: "🇬🇧",
    timezone: "GMT / BST",
    localContext:
      "Birmingham families can request one-to-one online tuition around school, work and existing mosque or madrasa commitments. Share a preferred GMT or BST evening or weekend window when requesting a tutor.",
    keywords: ["online quran classes birmingham", "quran teacher birmingham", "learn quran birmingham", "quran tutor birmingham", "online quran classes for kids birmingham", "female quran teacher birmingham", "hifz classes online birmingham"],
  },
  {
    slug: "manchester",
    city: "Manchester",
    country: "United Kingdom",
    countrySlug: "online-quran-classes-uk",
    flag: "🇬🇧",
    timezone: "GMT / BST",
    localContext:
      "Greater Manchester families may need to coordinate school, work and travel across the wider city region. Online lessons can reduce an extra journey, with GMT or BST preferences subject to tutor matching.",
    keywords: ["online quran classes manchester", "quran teacher manchester", "learn quran manchester", "quran tutor manchester", "online quran classes for kids manchester", "female quran teacher manchester"],
  },
  {
    slug: "bradford",
    city: "Bradford",
    country: "United Kingdom",
    countrySlug: "online-quran-classes-uk",
    flag: "🇬🇧",
    timezone: "GMT / BST",
    localContext:
      "Bradford families may balance school, work, travel and existing learning commitments. They can request one-to-one after-school or weekend lessons in GMT or BST, subject to tutor matching.",
    keywords: [
      "online quran classes bradford", "quran teacher bradford",
      "learn quran bradford", "online quran classes for kids bradford", "female quran teacher bradford",
      "noorani qaida online bradford",
    ],
  },
  {
    slug: "leeds",
    city: "Leeds",
    country: "United Kingdom",
    countrySlug: "online-quran-classes-uk",
    flag: "🇬🇧",
    timezone: "GMT / BST",
    localContext:
      "Leeds families often balance school clubs and long workdays. Online Quran classes can avoid another journey across the city, with weekday evening or weekend preferences subject to tutor matching.",
    keywords: [
      "online quran classes leeds", "quran teacher leeds",
      "learn quran leeds", "online quran classes for kids leeds", "female quran teacher leeds",
    ],
  },
  {
    slug: "leicester",
    city: "Leicester",
    country: "United Kingdom",
    countrySlug: "online-quran-classes-uk",
    flag: "🇬🇧",
    timezone: "GMT / BST",
    localContext:
      "Leicester families can request remote Noorani Qaida, Tajweed or short-surah lessons around school, work and existing community-class routines. GMT or BST lesson preferences are subject to tutor matching.",
    keywords: [
      "online quran classes leicester", "quran teacher leicester",
      "learn quran leicester", "online quran classes for kids leicester", "female quran teacher leicester",
    ],
  },
  {
    slug: "glasgow",
    city: "Glasgow",
    country: "United Kingdom",
    countrySlug: "online-quran-classes-uk",
    flag: "🇬🇧",
    timezone: "GMT / BST",
    localContext:
      "Glasgow families can request remote lessons around school, work, travel and existing weekend commitments. Share preferred GMT or BST windows and reconfirm the recurring time when UK clocks change.",
    keywords: [
      "online quran classes glasgow", "quran teacher glasgow",
      "learn quran glasgow", "online quran classes for kids glasgow", "female quran teacher glasgow",
      "noorani qaida online glasgow",
    ],
  },
  {
    slug: "luton",
    city: "Luton",
    country: "United Kingdom",
    countrySlug: "online-quran-classes-uk",
    flag: "🇬🇧",
    timezone: "GMT / BST",
    localContext:
      "Luton families can request a female tutor or an after-school lesson that fits UK school timings. Share a preferred GMT or BST weekday or weekend window; availability is confirmed after matching.",
    keywords: [
      "online quran classes luton", "quran teacher luton",
      "learn quran luton", "online quran classes for kids luton", "female quran teacher luton",
    ],
  },
  // ── United States ───────────────────────────────────────────────
  {
    slug: "new-york",
    city: "New York",
    country: "United States",
    countrySlug: "online-quran-classes-usa",
    flag: "🇺🇸",
    timezone: "ET",
    localContext:
      "New York families can avoid adding cross-borough travel to school and activity schedules by requesting lessons from home. Share an ET after-school, evening, or weekend window; availability is confirmed after matching.",
    keywords: ["online quran classes new york", "quran teacher new york", "quran classes nyc", "learn quran new york", "quran tutor nyc"],
  },
  {
    slug: "houston",
    city: "Houston",
    country: "United States",
    countrySlug: "online-quran-classes-usa",
    flag: "🇺🇸",
    timezone: "CT",
    localContext:
      "Houston families may balance school and activities with travel across a wide metro area. Request online Hifz or Tajweed support in a CT evening or weekend window, subject to tutor matching.",
    keywords: ["online quran classes houston", "quran teacher houston", "quran classes houston texas", "learn quran houston", "quran tutor houston"],
  },
  {
    slug: "chicago",
    city: "Chicago",
    country: "United States",
    countrySlug: "online-quran-classes-usa",
    flag: "🇺🇸",
    timezone: "CT",
    localContext:
      "Chicago weather and travel between the city and suburbs can complicate regular journeys. Families can request a consistent online lesson in CT after school or at the weekend, subject to tutor matching.",
    keywords: ["online quran classes chicago", "quran teacher chicago", "quran classes chicago", "learn quran chicago", "quran tutor chicago"],
  },
  {
    slug: "dallas",
    city: "Dallas",
    country: "United States",
    countrySlug: "online-quran-classes-usa",
    flag: "🇺🇸",
    timezone: "CT",
    localContext:
      "Dallas–Fort Worth families may coordinate school, work and activities across a wide metro area. Request a CT after-school, evening or weekend lesson window; tutor availability is confirmed after matching.",
    keywords: ["online quran classes dallas", "quran teacher dallas", "quran classes dallas texas", "learn quran dallas", "quran tutor dallas"],
  },
  {
    slug: "los-angeles",
    city: "Los Angeles",
    country: "United States",
    countrySlug: "online-quran-classes-usa",
    flag: "🇺🇸",
    timezone: "PT",
    localContext:
      "Los Angeles families may need to plan around school, work, activities and travel across the metro area. Request a PT after-school, evening or weekend window; availability is confirmed after tutor matching.",
    keywords: ["online quran classes los angeles", "quran teacher los angeles", "quran classes los angeles", "learn quran los angeles", "quran tutor los angeles"],
  },
  // ── Canada ──────────────────────────────────────────────────────
  {
    slug: "toronto",
    city: "Toronto",
    country: "Canada",
    countrySlug: "online-quran-classes-canada",
    flag: "🇨🇦",
    timezone: "ET",
    localContext:
      "Greater Toronto travel and winter conditions can make learning from home practical. Families can request an ET after-school, evening, or weekend lesson, with daylight-saving changes handled when the recurring slot is confirmed.",
    keywords: ["online quran classes toronto", "quran teacher toronto", "quran classes toronto", "learn quran toronto", "quran tutor mississauga"],
  },
  // ── Australia ───────────────────────────────────────────────────
  {
    slug: "sydney",
    city: "Sydney",
    country: "Australia",
    countrySlug: "online-quran-classes-australia",
    flag: "🇦🇺",
    timezone: "AEST / AEDT",
    localContext:
      "Sydney families — including western suburbs such as Lakemba, Auburn and Bankstown — can request live online Qaida, Tajweed or Hifz around AEST/AEDT school hours. Daylight saving applies in NSW. Exact times are confirmed after tutor matching. NoorPath teaches online only (no Sydney campus).",
    keywords: [
      "online quran classes sydney",
      "quran teacher sydney",
      "quran classes sydney",
      "female quran teacher sydney",
      "noorani qaida online sydney",
      "after school quran classes sydney",
    ],
  },
  {
    slug: "melbourne",
    city: "Melbourne",
    country: "Australia",
    countrySlug: "online-quran-classes-australia",
    flag: "🇦🇺",
    timezone: "AEST / AEDT",
    localContext:
      "Melbourne households in northern and western suburbs such as Broadmeadows, Coburg and Werribee can request online Quran lessons with AEST/AEDT matching. Victoria for Victorian daylight saving when booking. NoorPath is online only — not a Melbourne branch.",
    keywords: [
      "online quran classes melbourne",
      "quran teacher melbourne",
      "quran classes melbourne",
      "female quran teacher melbourne",
      "noorani qaida online melbourne",
      "after school quran classes melbourne",
    ],
  },
  // ── UAE ─────────────────────────────────────────────────────────
  {
    slug: "dubai",
    city: "Dubai",
    country: "United Arab Emirates",
    countrySlug: "online-quran-classes-uae",
    flag: "🇦🇪",
    timezone: "GST (UTC+4)",
    localContext:
      "Dubai's international expat community includes Muslim families from South Asia, the Arab world, Africa and the West. Families can request English-language instruction or GST evening lessons, subject to tutor matching.",
    keywords: ["online quran classes dubai", "quran teacher dubai", "quran classes dubai", "learn quran dubai", "quran tutor dubai"],
  },
  {
    slug: "abu-dhabi",
    city: "Abu Dhabi",
    country: "United Arab Emirates",
    countrySlug: "online-quran-classes-uae",
    flag: "🇦🇪",
    timezone: "GST (UTC+4)",
    localContext:
      "As the UAE capital, Abu Dhabi hosts a large community of Emirati and expat Muslim families. Many combine school Islamic studies with one-on-one online tutoring for personalised Tajweed and Hifz, choosing convenient evening GST slots after work and school.",
    keywords: ["online quran classes abu dhabi", "quran teacher abu dhabi", "quran classes abu dhabi", "learn quran abu dhabi", "quran tutor abu dhabi"],
  },
  // ── Saudi Arabia ────────────────────────────────────────────────
  {
    slug: "jeddah",
    city: "Jeddah",
    country: "Saudi Arabia",
    countrySlug: "online-quran-classes-saudi-arabia",
    flag: "🇸🇦",
    timezone: "AST (UTC+3)",
    localContext:
      "Jeddah families can request online Tajweed or Hifz support in AST around school, work, and prayer commitments. The recurring evening or weekend slot is confirmed after tutor matching.",
    keywords: ["online quran classes jeddah", "quran teacher jeddah", "quran classes jeddah", "learn quran jeddah", "quran tutor jeddah"],
  },
  {
    slug: "riyadh",
    city: "Riyadh",
    country: "Saudi Arabia",
    countrySlug: "online-quran-classes-saudi-arabia",
    flag: "🇸🇦",
    timezone: "AST (UTC+3)",
    localContext:
      "Riyadh, the Saudi capital, combines strong traditional Islamic schooling with a modern expat community. Families can request online one-to-one Tajweed or Hifz support in AST evening or weekend windows, subject to tutor matching.",
    keywords: ["online quran classes riyadh", "quran teacher riyadh", "quran classes riyadh", "learn quran riyadh", "quran tutor riyadh"],
  },
  // ── India ───────────────────────────────────────────────────────
  {
    slug: "hyderabad",
    city: "Hyderabad",
    country: "India",
    countrySlug: "online-quran-classes-india",
    flag: "🇮🇳",
    timezone: "IST (UTC+5:30)",
    localContext:
      "Hyderabad families can request live one-to-one online Qaida, Tajweed or Hifz from home — useful when Old City or IT-corridor school runs leave little time for another commute. Morning, after-school and evening IST preferences are confirmed after tutor matching. NoorPath teaches online only (no Hyderabad campus).",
    keywords: [
      "online quran classes hyderabad",
      "quran teacher hyderabad",
      "quran classes hyderabad",
      "learn quran hyderabad",
      "female quran teacher hyderabad",
      "noorani qaida online hyderabad",
    ],
  },
  {
    slug: "mumbai",
    city: "Mumbai",
    country: "India",
    countrySlug: "online-quran-classes-india",
    flag: "🇮🇳",
    timezone: "IST (UTC+5:30)",
    localContext:
      "Mumbai households across areas such as Mumbra, Kurla and Bhendi Bazaar can request online Quran lessons that fit long school-and-commute days. After-school and weekend IST windows are subject to tutor matching. NoorPath is online only — not a Mumbai branch.",
    keywords: [
      "online quran classes mumbai",
      "quran teacher mumbai",
      "quran classes mumbai",
      "learn quran mumbai",
      "female quran teacher mumbai",
      "after school quran classes mumbai",
    ],
  },
  // ── Nigeria ─────────────────────────────────────────────────────
  {
    slug: "lagos",
    city: "Lagos",
    country: "Nigeria",
    countrySlug: "online-quran-classes-nigeria",
    flag: "🇳🇬",
    timezone: "WAT (UTC+1)",
    localContext:
      "Lagos families can request live one-to-one online Qaida, Tajweed or Hifz from home when school, traffic and shared devices leave little room for another commute. After-school and weekend WAT preferences are confirmed after tutor matching. Share realistic power/internet notes when booking. NoorPath teaches online only (no Lagos campus).",
    keywords: [
      "online quran classes lagos",
      "quran teacher lagos",
      "quran classes lagos",
      "female quran teacher lagos",
      "noorani qaida online lagos",
      "after school quran classes lagos",
    ],
  },
  {
    slug: "abuja",
    city: "Abuja",
    country: "Nigeria",
    countrySlug: "online-quran-classes-nigeria",
    flag: "🇳🇬",
    timezone: "WAT (UTC+1)",
    localContext:
      "Abuja households can request online Quran lessons around school and work in WAT. Online delivery reduces travel across the capital region; recurring times are confirmed after tutor matching. NoorPath is online only — not an Abuja branch.",
    keywords: [
      "online quran classes abuja",
      "quran teacher abuja",
      "quran classes abuja",
      "female quran teacher abuja",
      "learn quran abuja online",
    ],
  },
  // ── Pakistan ────────────────────────────────────────────────────
  {
    slug: "karachi",
    city: "Karachi",
    country: "Pakistan",
    countrySlug: "online-quran-classes-pakistan",
    flag: "🇵🇰",
    timezone: "PKT (UTC+5)",
    localContext:
      "Karachi's size, traffic and heat can make learning from home practical. Families can request online Quran lessons in PKT morning, after-school or evening windows, subject to tutor matching.",
    keywords: ["online quran classes karachi", "quran teacher karachi", "quran classes karachi", "learn quran karachi", "quran tutor karachi"],
  },
  {
    slug: "lahore",
    city: "Lahore",
    country: "Pakistan",
    countrySlug: "online-quran-classes-pakistan",
    flag: "🇵🇰",
    timezone: "PKT (UTC+5)",
    localContext:
      "Lahore, the cultural heart of Pakistan, has a strong tradition of Quranic learning. Families here choose online tutoring for its flexibility and access to specialist Hifz and Tajweed tutors, with morning, after-school and evening PKT slots.",
    keywords: ["online quran classes lahore", "quran teacher lahore", "quran classes lahore", "learn quran lahore", "quran tutor lahore"],
  },
  // ── Qatar ───────────────────────────────────────────────────────
  {
    slug: "doha",
    city: "Doha",
    country: "Qatar",
    countrySlug: "online-quran-classes-qatar",
    flag: "🇶🇦",
    timezone: "AST (UTC+3)",
    localContext:
      "Doha's expat community brings together Muslim families from many backgrounds. Families can request English-language instruction or AST evening lessons after school and work, subject to tutor matching.",
    keywords: ["online quran classes doha", "quran teacher doha", "quran classes doha", "learn quran doha", "quran tutor qatar"],
  },
  // ── Ireland (Phase 1 minority markets) ──────────────────────────
  {
    slug: "dublin",
    city: "Dublin",
    country: "Ireland",
    countrySlug: "online-quran-classes-ireland",
    flag: "🇮🇪",
    timezone: "GMT / IST",
    localContext:
      "Dublin families often balance Irish school hours, traffic across the city, and Islamic learning. Live one-to-one online Quran classes can fit after-school GMT or IST windows without another cross-city journey. Availability is confirmed after tutor matching; NoorPath does not operate a Dublin campus.",
    keywords: [
      "online quran classes in dublin",
      "online quran classes dublin",
      "quran teacher dublin",
      "learn quran dublin",
      "online quran dublin",
      "quran classes for kids dublin",
      "female quran teacher dublin",
    ],
  },
  {
    slug: "cork",
    city: "Cork",
    country: "Ireland",
    countrySlug: "online-quran-classes-ireland",
    flag: "🇮🇪",
    timezone: "GMT / IST",
    localContext:
      "Cork households may have fewer nearby children’s Quran programmes than Dublin. Online one-to-one lessons with GMT/IST preferences can keep a weekly routine without long weekend travel. Tutor availability is confirmed after matching.",
    keywords: [
      "online quran classes cork",
      "quran teacher cork",
      "learn quran cork",
      "quran classes for kids cork",
      "female quran teacher cork",
    ],
  },
  {
    slug: "galway",
    city: "Galway",
    country: "Ireland",
    countrySlug: "online-quran-classes-ireland",
    flag: "🇮🇪",
    timezone: "GMT / IST",
    localContext:
      "Galway families outside the densest Irish Muslim centres often need flexible Islamic learning. Request after-school or weekend GMT/IST online Quran lessons; exact times are confirmed after tutor matching. Online only — no Galway branch claim.",
    keywords: [
      "online quran classes galway",
      "quran teacher galway",
      "learn quran galway",
      "quran classes for kids galway",
    ],
  },
  // ── New Zealand ─────────────────────────────────────────────────
  {
    slug: "auckland",
    city: "Auckland",
    country: "New Zealand",
    countrySlug: "online-quran-classes-new-zealand",
    flag: "🇳🇿",
    timezone: "NZST / NZDT",
    localContext:
      "Auckland holds New Zealand’s largest Muslim community, yet families still seek online tutors when schedules, travel, or female-tutor preferences are hard to meet locally. Request NZST/NZDT after-school windows for kids; availability is confirmed after matching. NoorPath does not operate an Auckland campus.",
    keywords: [
      "quran teacher for kids in auckland",
      "online quran classes auckland",
      "quran teacher auckland",
      "online quran auckland",
      "quran classes auckland kids",
      "female quran teacher auckland",
    ],
  },
  {
    slug: "wellington",
    city: "Wellington",
    country: "New Zealand",
    countrySlug: "online-quran-classes-new-zealand",
    flag: "🇳🇿",
    timezone: "NZST / NZDT",
    localContext:
      "Wellington families can request live online Quran classes for kids around school and work in NZST or NZDT. Online delivery reduces windy-city travel on busy weekdays; recurring times are confirmed after tutor matching. NoorPath teaches online only (no Wellington campus).",
    keywords: [
      "online quran wellington",
      "online quran classes wellington",
      "quran teacher wellington",
      "quran classes for kids wellington",
      "female quran teacher wellington",
    ],
  },
  {
    slug: "christchurch",
    city: "Christchurch",
    country: "New Zealand",
    countrySlug: "online-quran-classes-new-zealand",
    flag: "🇳🇿",
    timezone: "NZST / NZDT",
    localContext:
      "Christchurch households may have fewer full-time Islamic schooling options than Auckland. Live online one-to-one Quran lessons with NZST/NZDT matching help keep children’s reading progressing from home. Availability is confirmed after your request.",
    keywords: [
      "online quran classes christchurch",
      "quran teacher christchurch",
      "learn quran christchurch",
      "quran classes for kids christchurch",
    ],
  },
  // ── Norway ──────────────────────────────────────────────────────
  {
    slug: "oslo",
    city: "Oslo",
    country: "Norway",
    countrySlug: "online-quran-classes-norway",
    flag: "🇳🇴",
    timezone: "CET / CEST",
    localContext:
      "Oslo families can request live one-to-one online Quran classes in CET or CEST after school. Female tutor preferences are welcome subject to matching. NoorPath teaches online only — not an Oslo campus. Availability is confirmed after your request.",
    keywords: [
      "online quran oslo",
      "online quran classes oslo",
      "quran teacher oslo",
      "female quran teacher oslo",
      "quran classes for kids oslo",
    ],
  },
  {
    slug: "bergen",
    city: "Bergen",
    country: "Norway",
    countrySlug: "online-quran-classes-norway",
    flag: "🇳🇴",
    timezone: "CET / CEST",
    localContext:
      "Bergen households outside Oslo’s denser community options can use online Quran tutoring with CET/CEST preferences. Share school finish times when booking; exact slots are confirmed after matching.",
    keywords: [
      "online quran classes bergen",
      "quran teacher bergen",
      "learn quran bergen",
      "quran classes for kids bergen",
    ],
  },
  // ── Finland ─────────────────────────────────────────────────────
  {
    slug: "helsinki",
    city: "Helsinki",
    country: "Finland",
    countrySlug: "online-quran-classes-finland",
    flag: "🇫🇮",
    timezone: "EET / EEST",
    localContext:
      "Helsinki families seeking kids Quran classes online can request live one-to-one lessons in EET or EEST after school. NoorPath is an online academy only. Tutor availability is confirmed after matching.",
    keywords: [
      "online quran helsinki",
      "online quran classes helsinki",
      "quran teacher helsinki",
      "quran classes for kids helsinki",
      "kids quran classes helsinki",
    ],
  },
  {
    slug: "espoo",
    city: "Espoo",
    country: "Finland",
    countrySlug: "online-quran-classes-finland",
    flag: "🇫🇮",
    timezone: "EET / EEST",
    localContext:
      "Espoo families near Helsinki can request the same live online Quran matching in EET/EEST without commuting for every lesson. Share preferred evenings when you book; confirmation follows tutor matching.",
    keywords: [
      "online quran classes espoo",
      "quran teacher espoo",
      "quran classes for kids espoo",
    ],
  },
  // ── Denmark ─────────────────────────────────────────────────────
  {
    slug: "copenhagen",
    city: "Copenhagen",
    country: "Denmark",
    countrySlug: "online-quran-classes-denmark",
    flag: "🇩🇰",
    timezone: "CET / CEST",
    localContext:
      "Copenhagen families can request weekday after-school or weekend online Quran classes in CET/CEST. Live one-to-one lessons suit busy Danish school weeks. Availability is confirmed after matching; NoorPath does not operate a Copenhagen campus.",
    keywords: [
      "online quran copenhagen",
      "online quran classes copenhagen",
      "quran teacher copenhagen",
      "weekend quran classes copenhagen",
      "quran classes for kids copenhagen",
    ],
  },
  {
    slug: "aarhus",
    city: "Aarhus",
    country: "Denmark",
    countrySlug: "online-quran-classes-denmark",
    flag: "🇩🇰",
    timezone: "CET / CEST",
    localContext:
      "Aarhus households can request live online Quran tutoring with CET/CEST weekday or weekend preferences when local children’s options are limited. Exact recurring times are confirmed after tutor matching.",
    keywords: [
      "online quran classes aarhus",
      "quran teacher aarhus",
      "learn quran aarhus",
      "quran classes for kids aarhus",
    ],
  },
];

export function getCity(slug: string): City | undefined {
  return cities.find((c) => c.slug === slug);
}

/** Long-tail commercial keywords layered on every city page (rank + enroll intent). */
export function getCityKeywords(c: City): string[] {
  const city = c.city.toLowerCase();
  return [
    ...c.keywords,
    `online quran classes for kids ${city}`,
    `quran classes for kids ${city}`,
    `female quran teacher ${city}`,
    `noorani qaida online ${city}`,
    `online hifz classes ${city}`,
    `one to one quran tutor ${city}`,
    `after school quran classes ${city}`,
    `learn quran online ${city}`,
  ];
}

export function getCitiesByCountrySlug(countrySlug: string): City[] {
  return cities.filter((c) => c.countrySlug === countrySlug);
}
