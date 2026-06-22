export interface Location {
  slug: string;
  flag: string;
  country: string;
  cities: string;
  desc: string;
  timezone: string;
  population: string;
  keywords: string[];
}

export const locations: Location[] = [
  {
    slug: "online-quran-classes-usa",
    flag: "🇺🇸",
    country: "United States",
    cities: "New York, Texas, California, Florida, Illinois",
    desc: "Live online Quran classes for Muslim families across the USA. All timezones covered.",
    timezone: "EST / CST / MST / PST",
    population: "3.45 million Muslims",
    keywords: ["online quran classes usa", "quran teacher usa", "online quran usa", "islamic classes usa", "learn quran online usa"],
  },
  {
    slug: "online-quran-classes-uk",
    flag: "🇬🇧",
    country: "United Kingdom",
    cities: "London, Birmingham, Manchester, Bradford, Leeds",
    desc: "Online Quran tutors for UK families — BST and GMT timezone specialists.",
    timezone: "GMT / BST",
    population: "3.9 million Muslims",
    keywords: ["online quran classes uk", "quran teacher uk", "online quran uk", "islamic classes uk", "learn quran online uk"],
  },
  {
    slug: "online-quran-classes-canada",
    flag: "🇨🇦",
    country: "Canada",
    cities: "Toronto, Vancouver, Calgary, Ottawa, Montreal",
    desc: "Certified online Quran teachers for Canadian Muslim families — all provinces.",
    timezone: "EST / CST / MST / PST",
    population: "1.77 million Muslims",
    keywords: ["online quran classes canada", "quran teacher canada", "online quran canada", "learn quran online canada", "islamic classes canada"],
  },
  {
    slug: "online-quran-classes-australia",
    flag: "🇦🇺",
    country: "Australia",
    cities: "Sydney, Melbourne, Brisbane, Perth, Adelaide",
    desc: "Online Quran classes for Australian families — AEST and AWST timezones.",
    timezone: "AEST / AWST",
    population: "813,000 Muslims",
    keywords: ["online quran classes australia", "quran teacher australia", "online quran australia", "learn quran australia", "islamic classes australia"],
  },
  {
    slug: "online-quran-classes-uae",
    flag: "🇦🇪",
    country: "United Arab Emirates",
    cities: "Dubai, Abu Dhabi, Sharjah, Ajman",
    desc: "Expert online Quran tutors for UAE families — GST timezone available.",
    timezone: "GST (UTC+4)",
    population: "3.86 million Muslims",
    keywords: ["online quran classes uae", "quran teacher uae", "online quran dubai", "learn quran uae", "islamic classes uae"],
  },
  {
    slug: "online-quran-classes-saudi-arabia",
    flag: "🇸🇦",
    country: "Saudi Arabia",
    cities: "Riyadh, Jeddah, Makkah, Madinah, Dammam",
    desc: "Online Quran classes for Saudi families and expats — AST timezone.",
    timezone: "AST (UTC+3)",
    population: "33 million Muslims",
    keywords: ["online quran classes saudi arabia", "quran teacher saudi", "learn quran ksa", "islamic classes riyadh", "online quran jeddah"],
  },
  {
    slug: "online-quran-classes-germany",
    flag: "🇩🇪",
    country: "Germany",
    cities: "Berlin, Hamburg, Munich, Frankfurt, Cologne",
    desc: "Online Quran education for Muslim families in Germany — CET timezone.",
    timezone: "CET / CEST",
    population: "5.5 million Muslims",
    keywords: ["online quran classes germany", "quran teacher germany", "online quran berlin", "learn quran germany", "islamic classes germany"],
  },
  {
    slug: "online-quran-classes-malaysia",
    flag: "🇲🇾",
    country: "Malaysia",
    cities: "Kuala Lumpur, Penang, Johor Bahru, Ipoh",
    desc: "Online Quran classes for Malaysian families — MYT timezone.",
    timezone: "MYT (UTC+8)",
    population: "20 million Muslims",
    keywords: ["online quran classes malaysia", "quran teacher malaysia", "learn quran malaysia", "islamic classes kl", "online quran kl"],
  },
  {
    slug: "online-quran-classes-pakistan",
    flag: "🇵🇰",
    country: "Pakistan",
    cities: "Karachi, Lahore, Islamabad, Peshawar, Quetta",
    desc: "Expert online Quran tutors for Pakistani families — PKT timezone.",
    timezone: "PKT (UTC+5)",
    population: "220 million Muslims",
    keywords: ["online quran classes pakistan", "quran teacher pakistan", "learn quran pakistan", "online quran karachi", "online quran lahore"],
  },
  {
    slug: "online-quran-classes-bangladesh",
    flag: "🇧🇩",
    country: "Bangladesh",
    cities: "Dhaka, Chittagong, Sylhet, Rajshahi",
    desc: "Online Quran classes for Bangladeshi families — BST (+6) timezone.",
    timezone: "BST (UTC+6)",
    population: "153 million Muslims",
    keywords: ["online quran classes bangladesh", "quran teacher bangladesh", "learn quran dhaka", "islamic classes bangladesh"],
  },
  {
    slug: "online-quran-classes-south-africa",
    flag: "🇿🇦",
    country: "South Africa",
    cities: "Johannesburg, Cape Town, Durban, Pretoria",
    desc: "Online Quran education for South African Muslim families — SAST timezone.",
    timezone: "SAST (UTC+2)",
    population: "1.9 million Muslims",
    keywords: ["online quran classes south africa", "quran teacher south africa", "learn quran cape town", "islamic classes sa"],
  },
  {
    slug: "online-quran-classes-indonesia",
    flag: "🇮🇩",
    country: "Indonesia",
    cities: "Jakarta, Surabaya, Bandung, Medan",
    desc: "Online Quran classes for Indonesian families — WIB and WITA timezones.",
    timezone: "WIB / WITA (UTC+7/8)",
    population: "237 million Muslims",
    keywords: ["online quran classes indonesia", "quran teacher indonesia", "learn quran jakarta", "islamic classes indonesia"],
  },
];

export function getLocation(slug: string): Location | undefined {
  return locations.find((l) => l.slug === slug);
}
