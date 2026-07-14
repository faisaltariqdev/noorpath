export interface City {
  /** URL slug, e.g. "london" → /online-quran-classes/london */
  slug: string;
  city: string;
  country: string;
  /** Parent country location slug for cluster back-linking */
  countrySlug: string;
  flag: string;
  timezone: string;
  population: string;
  /** Unique, genuinely helpful local context (avoids duplicate content) */
  localContext: string;
  keywords: string[];
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
    population: "1.3 million Muslims",
    localContext:
      "London is home to the UK's largest Muslim community, with dense populations in Tower Hamlets, Newham, Redbridge and Ealing. Many London families juggle long commutes and busy school runs, so online Quran classes remove travel time to the local masjid or madrasa. Popular slots are weekday evenings (4–7pm GMT) after school and Saturday mornings.",
    keywords: ["online quran classes london", "quran teacher london", "quran classes near me london", "learn quran london", "quran tutor london", "islamic classes london", "online quran classes for kids london", "female quran teacher london", "noorani qaida online london"],
  },
  {
    slug: "birmingham",
    city: "Birmingham",
    country: "United Kingdom",
    countrySlug: "online-quran-classes-uk",
    flag: "🇬🇧",
    timezone: "GMT / BST",
    population: "340,000 Muslims",
    localContext:
      "Birmingham has one of the highest proportions of Muslims of any UK city, with vibrant communities in Small Heath, Sparkbrook and Alum Rock. Families here value one-on-one online tutoring to give each child focused Tajweed and Hifz attention that busy weekend madrasas cannot always provide.",
    keywords: ["online quran classes birmingham", "quran teacher birmingham", "quran classes near me birmingham", "learn quran birmingham", "quran tutor birmingham", "online quran classes for kids birmingham", "female quran teacher birmingham", "hifz classes online birmingham"],
  },
  {
    slug: "manchester",
    city: "Manchester",
    country: "United Kingdom",
    countrySlug: "online-quran-classes-uk",
    flag: "🇬🇧",
    timezone: "GMT / BST",
    population: "220,000 Muslims",
    localContext:
      "Greater Manchester's Muslim community is concentrated in Cheetham Hill, Longsight and Rusholme. Online classes can reduce travel around work and school, with GMT or BST lesson preferences subject to tutor matching.",
    keywords: ["online quran classes manchester", "quran teacher manchester", "quran classes near me manchester", "learn quran manchester", "quran tutor manchester", "online quran classes for kids manchester", "female quran teacher manchester"],
  },
  {
    slug: "bradford",
    city: "Bradford",
    country: "United Kingdom",
    countrySlug: "online-quran-classes-uk",
    flag: "🇬🇧",
    timezone: "GMT / BST",
    population: "150,000+ Muslims",
    localContext:
      "Bradford has one of the UK's densest Muslim communities, with strong family traditions of Quran learning. Families can request one-to-one after-school lessons in GMT or BST, subject to tutor matching.",
    keywords: [
      "online quran classes bradford", "quran teacher bradford", "quran classes near me bradford",
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
    population: "80,000+ Muslims",
    localContext:
      "Leeds families often balance school clubs and long workdays. Online Quran classes can avoid another journey across the city, with weekday evening or weekend preferences subject to tutor matching.",
    keywords: [
      "online quran classes leeds", "quran teacher leeds", "quran classes near me leeds",
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
    population: "75,000+ Muslims",
    localContext:
      "Leicester's diverse Muslim community values both traditional learning and flexible modern options. Families can request Noorani Qaida, Tajweed, or short-surah lessons in GMT or BST, subject to tutor matching.",
    keywords: [
      "online quran classes leicester", "quran teacher leicester", "quran classes near me leicester",
      "learn quran leicester", "online quran classes for kids leicester", "female quran teacher leicester",
    ],
  },
  {
    slug: "luton",
    city: "Luton",
    country: "United Kingdom",
    countrySlug: "online-quran-classes-uk",
    flag: "🇬🇧",
    timezone: "GMT / BST",
    population: "50,000+ Muslims",
    localContext:
      "Luton has a large Muslim population relative to its size. Families can request a female tutor or an after-school lesson that fits UK school timings, subject to tutor matching.",
    keywords: [
      "online quran classes luton", "quran teacher luton", "quran classes near me luton",
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
    timezone: "EST",
    population: "800,000 Muslims",
    localContext:
      "New York City has one of America's largest and most diverse Muslim populations, spread across Brooklyn, Queens and the Bronx. Online lessons can reduce travel around school and activities; EST after-school and evening preferences are subject to tutor matching.",
    keywords: ["online quran classes new york", "quran teacher new york", "quran classes nyc", "learn quran new york", "quran tutor nyc"],
  },
  {
    slug: "houston",
    city: "Houston",
    country: "United States",
    countrySlug: "online-quran-classes-usa",
    flag: "🇺🇸",
    timezone: "CST",
    population: "500,000 Muslims",
    localContext:
      "Houston has Muslim communities and Islamic schools across the metro area. Families can request online Hifz or Tajweed support in CST evening or weekend windows, subject to tutor matching.",
    keywords: ["online quran classes houston", "quran teacher houston", "quran classes houston texas", "learn quran houston", "quran tutor houston"],
  },
  {
    slug: "chicago",
    city: "Chicago",
    country: "United States",
    countrySlug: "online-quran-classes-usa",
    flag: "🇺🇸",
    timezone: "CST",
    population: "400,000 Muslims",
    localContext:
      "The Chicago metropolitan area, including the western suburbs, has a long-established Muslim community. Harsh winters make travelling to weekend Quran school difficult for months at a time, so families increasingly rely on consistent year-round online classes in the CST timezone.",
    keywords: ["online quran classes chicago", "quran teacher chicago", "quran classes chicago", "learn quran chicago", "quran tutor chicago"],
  },
  // ── Canada ──────────────────────────────────────────────────────
  {
    slug: "toronto",
    city: "Toronto",
    country: "Canada",
    countrySlug: "online-quran-classes-canada",
    flag: "🇨🇦",
    timezone: "EST",
    population: "600,000 Muslims",
    localContext:
      "The Greater Toronto Area is home to Canada's largest Muslim population, with major communities in Mississauga, Scarborough and Brampton. Cold Canadian winters and long distances make online Quran classes especially practical, letting children learn consistently from home in the EST timezone.",
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
    population: "250,000 Muslims",
    localContext:
      "Sydney is home to Australia's largest Muslim community, particularly in western suburbs such as Lakemba, Auburn and Bankstown. AEST or AEDT early-morning and evening lesson preferences are subject to tutor matching.",
    keywords: ["online quran classes sydney", "quran teacher sydney", "quran classes sydney", "learn quran sydney", "quran tutor sydney"],
  },
  {
    slug: "melbourne",
    city: "Melbourne",
    country: "Australia",
    countrySlug: "online-quran-classes-australia",
    flag: "🇦🇺",
    timezone: "AEST / AEDT",
    population: "200,000 Muslims",
    localContext:
      "Melbourne's Muslim community includes northern and western suburbs such as Broadmeadows, Coburg and Werribee. Families can request online Qaida, Tajweed or Hifz lessons in AEST or AEDT, subject to tutor matching.",
    keywords: ["online quran classes melbourne", "quran teacher melbourne", "quran classes melbourne", "learn quran melbourne", "quran tutor melbourne"],
  },
  // ── UAE ─────────────────────────────────────────────────────────
  {
    slug: "dubai",
    city: "Dubai",
    country: "United Arab Emirates",
    countrySlug: "online-quran-classes-uae",
    flag: "🇦🇪",
    timezone: "GST (UTC+4)",
    population: "2.5 million Muslims",
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
    population: "1.5 million Muslims",
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
    population: "4 million Muslims",
    localContext:
      "As the gateway to Makkah, Jeddah has a deeply rooted Islamic culture and a large expat population. Families can request online Tajweed or Hifz support in AST around school and prayer times, subject to tutor matching.",
    keywords: ["online quran classes jeddah", "quran teacher jeddah", "quran classes jeddah", "learn quran jeddah", "quran tutor jeddah"],
  },
  {
    slug: "riyadh",
    city: "Riyadh",
    country: "Saudi Arabia",
    countrySlug: "online-quran-classes-saudi-arabia",
    flag: "🇸🇦",
    timezone: "AST (UTC+3)",
    population: "6 million Muslims",
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
    population: "2.4 million Muslims",
    localContext:
      "Hyderabad has a rich Islamic heritage and a large Muslim population in the Old City and beyond. Families can request online Qaida, Tajweed or Hifz lessons in IST, subject to tutor matching.",
    keywords: ["online quran classes hyderabad", "quran teacher hyderabad", "quran classes hyderabad", "learn quran hyderabad", "quran tutor hyderabad"],
  },
  {
    slug: "mumbai",
    city: "Mumbai",
    country: "India",
    countrySlug: "online-quran-classes-india",
    flag: "🇮🇳",
    timezone: "IST (UTC+5:30)",
    population: "2.3 million Muslims",
    localContext:
      "Mumbai's Muslim community is spread across areas like Mumbra, Kurla and Bhendi Bazaar. In a city famous for long commutes and packed schedules, online Quran classes let children learn from home with a dedicated tutor, saving hours of travel each week.",
    keywords: ["online quran classes mumbai", "quran teacher mumbai", "quran classes mumbai", "learn quran mumbai", "quran tutor mumbai"],
  },
  // ── Pakistan ────────────────────────────────────────────────────
  {
    slug: "karachi",
    city: "Karachi",
    country: "Pakistan",
    countrySlug: "online-quran-classes-pakistan",
    flag: "🇵🇰",
    timezone: "PKT (UTC+5)",
    population: "14 million Muslims",
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
    population: "11 million Muslims",
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
    population: "1.8 million Muslims",
    localContext:
      "Doha's expat community brings together Muslim families from many backgrounds. Families can request English-language instruction or AST evening lessons after school and work, subject to tutor matching.",
    keywords: ["online quran classes doha", "quran teacher doha", "quran classes doha", "learn quran doha", "quran tutor qatar"],
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
