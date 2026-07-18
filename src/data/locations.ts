export interface Location {
  slug: string;
  flag: string;
  country: string;
  cities: string;
  desc: string;
  timezone: string;
  /** 1–2 sentences of genuinely unique local context to avoid duplicate content */
  localContext: string;
  keywords: string[];
}

export const locations: Location[] = [
  {
    slug: "online-quran-classes-usa",
    flag: "🇺🇸",
    country: "United States",
    cities: "New York, Houston, Chicago, Los Angeles, Dallas",
    desc: "Live online Quran classes for Muslim families across the USA, with timezone-based tutor matching.",
    timezone: "ET / CT / MT / PT",
    localContext:
      "Families should include their state or time zone when requesting lessons because the United States spans several local schedules. ET, CT, MT and PT after-school or weekend preferences are subject to tutor matching.",
    keywords: ["online quran classes usa", "quran teacher usa", "online quran usa", "islamic classes usa", "learn quran online usa"],
  },
  {
    slug: "online-quran-classes-uk",
    flag: "🇬🇧",
    country: "United Kingdom",
    cities: "London, Birmingham, Manchester, Bradford, Leeds, Leicester, Luton",
    desc: "Online Quran tutor requests for UK families, with BST/GMT schedule matching and options to request kids or female tutors.",
    timezone: "GMT / BST",
    localContext:
      "UK families can request after-school or weekend lessons in GMT or BST and should note school-finish and daylight-saving constraints. Exact availability is confirmed during tutor matching.",
    keywords: ["online quran classes uk", "quran teacher uk", "online quran uk", "islamic classes uk", "learn quran online uk", "online quran classes for kids uk", "female quran teacher uk", "noorani qaida online uk", "online hifz classes for kids uk", "after school quran classes uk"],
  },
  {
    slug: "online-quran-classes-canada",
    flag: "🇨🇦",
    country: "Canada",
    cities: "Toronto, Vancouver, Calgary, Ottawa, Montreal",
    desc: "Live online Quran classes for Canadian Muslim families across multiple timezones.",
    timezone: "ET / CT / MT / PT / AT / NT",
    localContext:
      "Canada spans several time zones, so families should include their city or province when requesting a tutor. Local after-school, evening and weekend preferences are subject to matching.",
    keywords: ["online quran classes canada", "quran teacher canada", "online quran canada", "learn quran online canada", "islamic classes canada"],
  },
  {
    slug: "online-quran-classes-australia",
    flag: "🇦🇺",
    country: "Australia",
    cities: "Sydney, Melbourne, Brisbane, Perth, Adelaide",
    desc: "Online Quran classes for Australian families — AEST and AWST timezones.",
    timezone: "AEST / AEDT / ACST / ACDT / AWST",
    localContext:
      "Australian time zones and daylight-saving rules vary by state. Families should include their city or state when requesting an early-morning, after-school or weekend lesson.",
    keywords: ["online quran classes australia", "quran teacher australia", "online quran australia", "learn quran australia", "islamic classes australia"],
  },
  {
    slug: "online-quran-classes-uae",
    flag: "🇦🇪",
    country: "United Arab Emirates",
    cities: "Dubai, Abu Dhabi, Sharjah, Ajman, Al Ain",
    desc: "Live online Quran classes for UAE families — GST scheduling by tutor match.",
    timezone: "GST (UTC+4)",
    localContext:
      "Families in the UAE can request English-language teaching in GST around work, school and prayer commitments. Evening and weekend availability is confirmed after tutor matching.",
    keywords: ["online quran classes uae", "quran teacher uae", "online quran dubai", "learn quran uae", "islamic classes uae"],
  },
  {
    slug: "online-quran-classes-saudi-arabia",
    flag: "🇸🇦",
    country: "Saudi Arabia",
    cities: "Riyadh, Jeddah, Makkah, Madinah, Dammam",
    desc: "Online Quran classes for Saudi families and expats — AST timezone.",
    timezone: "AST (UTC+3)",
    localContext:
      "Families can request online Tajweed or Hifz support in AST around school, work and prayer commitments. Evening and weekend lesson preferences remain subject to tutor matching.",
    keywords: ["online quran classes saudi arabia", "quran teacher saudi", "learn quran ksa", "islamic classes riyadh", "online quran jeddah"],
  },
  {
    slug: "online-quran-classes-germany",
    flag: "🇩🇪",
    country: "Germany",
    cities: "Berlin, Hamburg, Munich, Frankfurt, Cologne",
    desc: "Online Quran education for Muslim families in Germany — CET timezone.",
    timezone: "CET / CEST",
    localContext:
      "Families in Germany can request English-language Quran instruction in CET or CEST. Share the learner's language needs and after-school or weekend availability when requesting a tutor.",
    keywords: ["online quran classes germany", "quran teacher germany", "online quran berlin", "learn quran germany", "islamic classes germany"],
  },
  {
    slug: "online-quran-classes-malaysia",
    flag: "🇲🇾",
    country: "Malaysia",
    cities: "Kuala Lumpur, Penang, Johor Bahru, Ipoh, Shah Alam",
    desc: "Online Quran classes for Malaysian families — MYT timezone.",
    timezone: "MYT (UTC+8)",
    localContext:
      "Malaysia's Muslim majority has established Quranic education traditions, and online tutoring can add one-to-one Tajweed or Hifz support alongside school. MYT evening and weekend preferences are subject to tutor matching.",
    keywords: ["online quran classes malaysia", "quran teacher malaysia", "learn quran malaysia", "islamic classes kl", "online quran kl"],
  },
  {
    slug: "online-quran-classes-pakistan",
    flag: "🇵🇰",
    country: "Pakistan",
    cities: "Karachi, Lahore, Islamabad, Rawalpindi, Peshawar",
    desc: "Live online Quran classes for Pakistani families — PKT scheduling by tutor match.",
    timezone: "PKT (UTC+5)",
    localContext:
      "For families in Karachi, Lahore, Islamabad and elsewhere, online Quran classes can reduce travel and support learning from home. PKT morning, after-school and evening preferences are subject to tutor matching.",
    keywords: ["online quran classes pakistan", "quran teacher pakistan", "learn quran pakistan", "online quran karachi", "online quran lahore"],
  },
  {
    slug: "online-quran-classes-bangladesh",
    flag: "🇧🇩",
    country: "Bangladesh",
    cities: "Dhaka, Chittagong, Sylhet, Rajshahi, Khulna",
    desc: "Online Quran classes for Bangladeshi families — BST (+6) timezone.",
    timezone: "BST (UTC+6)",
    localContext:
      "In Dhaka, Chittagong and Sylhet, online sessions can supplement madrasa or school learning with one-to-one Tajweed and Hifz support. Bangla-language and BST scheduling preferences are subject to tutor matching.",
    keywords: ["online quran classes bangladesh", "quran teacher bangladesh", "learn quran dhaka", "islamic classes bangladesh"],
  },
  {
    slug: "online-quran-classes-south-africa",
    flag: "🇿🇦",
    country: "South Africa",
    cities: "Johannesburg, Cape Town, Durban, Pretoria, Port Elizabeth",
    desc: "Online Quran education for South African Muslim families — SAST timezone.",
    timezone: "SAST (UTC+2)",
    localContext:
      "South Africa's established Muslim communities in Cape Town, Durban and Johannesburg have a rich Islamic heritage. Families can request Tajweed or Hifz lessons in SAST evening or weekend windows, subject to tutor matching.",
    keywords: ["online quran classes south africa", "quran teacher south africa", "learn quran cape town", "islamic classes sa"],
  },
  {
    slug: "online-quran-classes-indonesia",
    flag: "🇮🇩",
    country: "Indonesia",
    cities: "Jakarta, Surabaya, Bandung, Medan, Bekasi",
    desc: "Online Quran classes for Indonesian families — WIB and WITA timezones.",
    timezone: "WIB / WITA (UTC+7/8)",
    localContext:
      "As the world's most populous Muslim country, Indonesia has deep Quranic traditions. Jakarta, Surabaya and Bandung families use online tutoring to add personalised Tajweed and Hifz coaching, with WIB and WITA slots that fit local school schedules.",
    keywords: ["online quran classes indonesia", "quran teacher indonesia", "learn quran jakarta", "islamic classes indonesia"],
  },
  {
    slug: "online-quran-classes-india",
    flag: "🇮🇳",
    country: "India",
    cities: "Hyderabad, Mumbai, Delhi, Bengaluru, Lucknow",
    desc: "Online Quran classes for Indian Muslim families — IST timezone.",
    timezone: "IST (UTC+5:30)",
    localContext:
      "India has one of the largest Muslim populations in the world, with communities in Hyderabad, Mumbai, Delhi and Lucknow. Families can request online Qaida, Tajweed or Hifz lessons in IST, subject to tutor matching.",
    keywords: ["online quran classes india", "quran teacher india", "learn quran online india", "online quran hyderabad", "islamic classes india"],
  },
  {
    slug: "online-quran-classes-nigeria",
    flag: "🇳🇬",
    country: "Nigeria",
    cities: "Lagos, Kano, Ibadan, Abuja, Kaduna",
    desc: "Online Quran classes for Nigerian Muslim families — WAT timezone.",
    timezone: "WAT (UTC+1)",
    localContext:
      "Nigeria has Africa's largest Muslim population, concentrated in the north and in Lagos. WAT evening and weekend preferences for online Tajweed or Hifz lessons are subject to tutor matching.",
    keywords: ["online quran classes nigeria", "quran teacher nigeria", "learn quran online nigeria", "online quran lagos", "islamic classes nigeria"],
  },
  {
    slug: "online-quran-classes-france",
    flag: "🇫🇷",
    country: "France",
    cities: "Paris, Marseille, Lyon, Toulouse, Lille",
    desc: "Online Quran classes for Muslim families in France — CET timezone.",
    timezone: "CET / CEST",
    localContext:
      "France is home to Western Europe's largest Muslim community, with strong North African roots in Paris, Marseille and Lyon. Families can request English- or Arabic-language instruction for beginner Quran reading, subject to tutor matching.",
    keywords: ["online quran classes france", "quran teacher france", "learn quran online france", "online quran paris", "cours de coran en ligne"],
  },
  {
    slug: "online-quran-classes-netherlands",
    flag: "🇳🇱",
    country: "Netherlands",
    cities: "Amsterdam, Rotterdam, The Hague, Utrecht, Eindhoven",
    desc: "Online Quran classes for Dutch Muslim families — CET timezone.",
    timezone: "CET / CEST",
    localContext:
      "The Netherlands has established Turkish, Moroccan and Surinamese Muslim communities in Amsterdam, Rotterdam and The Hague. CET or CEST evening lesson preferences can be requested around school hours, subject to tutor matching.",
    keywords: ["online quran classes netherlands", "quran teacher netherlands", "learn quran online netherlands", "online quran amsterdam", "islamic classes holland"],
  },
  {
    slug: "online-quran-classes-sweden",
    flag: "🇸🇪",
    country: "Sweden",
    cities: "Stockholm, Gothenburg, Malmö, Uppsala, Västerås",
    desc: "Online Quran classes for Muslim families in Sweden — CET timezone.",
    timezone: "CET / CEST",
    localContext:
      "Sweden’s Muslim communities are centred in Stockholm, Gothenburg and Malmö. Families can request after-school or evening CET/CEST online Quran lessons (often around 4–10 PM local time), subject to tutor matching, without commuting to a physical madrasah.",
    keywords: [
      "online quran classes sweden",
      "quran teacher sweden",
      "learn quran online sweden",
      "online quran stockholm",
      "islamic classes sweden",
    ],
  },
  {
    slug: "online-quran-classes-qatar",
    flag: "🇶🇦",
    country: "Qatar",
    cities: "Doha, Al Rayyan, Al Wakrah, Lusail",
    desc: "Online Quran classes for Qatar families and expats — AST timezone.",
    timezone: "AST (UTC+3)",
    localContext:
      "Families in Qatar can request English-language instruction in AST around work and international-school hours. Evening and weekend availability is confirmed after tutor matching.",
    keywords: ["online quran classes qatar", "quran teacher qatar", "learn quran online qatar", "online quran doha", "islamic classes qatar"],
  },
  {
    slug: "online-quran-classes-kuwait",
    flag: "🇰🇼",
    country: "Kuwait",
    cities: "Kuwait City, Hawalli, Salmiya, Jahra",
    desc: "Online Quran classes for Kuwaiti families and expats — AST timezone.",
    timezone: "AST (UTC+3)",
    localContext:
      "Families in Kuwait can request one-to-one online Tajweed or Hifz lessons in AST around school, work and prayer commitments. Evening and weekend preferences are subject to tutor matching.",
    keywords: ["online quran classes kuwait", "quran teacher kuwait", "learn quran online kuwait", "online quran kuwait city", "islamic classes kuwait"],
  },
  {
    slug: "online-quran-classes-singapore",
    flag: "🇸🇬",
    country: "Singapore",
    cities: "Singapore (island-wide)",
    desc: "Online Quran classes for Singaporean Muslim families — SGT timezone.",
    timezone: "SGT (UTC+8)",
    localContext:
      "Singapore's Malay-Muslim community balances school schedules with Islamic learning. SGT evening and weekend preferences for one-to-one online lessons are subject to tutor matching.",
    keywords: ["online quran classes singapore", "quran teacher singapore", "learn quran online singapore", "islamic classes singapore", "quran tutor singapore"],
  },
  {
    slug: "online-quran-classes-ireland",
    flag: "🇮🇪",
    country: "Ireland",
    cities: "Dublin, Cork, Limerick, Galway",
    desc: "Online Quran classes for Irish Muslim families — GMT timezone.",
    timezone: "GMT / IST",
    localContext:
      "Ireland's Muslim community is centred in Dublin, Cork and Galway. Online tutoring can reduce travel for families in smaller towns, with GMT or IST lesson preferences subject to tutor matching.",
    keywords: ["online quran classes ireland", "quran teacher ireland", "learn quran online ireland", "online quran dublin", "islamic classes ireland"],
  },
  {
    slug: "online-quran-classes-new-zealand",
    flag: "🇳🇿",
    country: "New Zealand",
    cities: "Auckland, Wellington, Christchurch, Hamilton",
    desc: "Online Quran classes for New Zealand Muslim families — NZST timezone.",
    timezone: "NZST / NZDT",
    localContext:
      "New Zealand's Muslim community is centred in Auckland and Wellington. NZST or NZDT early-morning and evening preferences can be requested, subject to tutor matching.",
    keywords: ["online quran classes new zealand", "quran teacher new zealand", "learn quran online nz", "online quran auckland", "islamic classes new zealand"],
  },
  {
    slug: "online-quran-classes-turkey",
    flag: "🇹🇷",
    country: "Turkey",
    cities: "Istanbul, Ankara, Izmir, Bursa, Antalya",
    desc: "Online Quran classes for Turkish and expat families — TRT timezone.",
    timezone: "TRT (UTC+3)",
    localContext:
      "Turkey's deep Islamic heritage lives on in Istanbul, Ankara and Izmir. Families and expats use online tutoring to add Arabic-language Quran instruction and one-on-one Tajweed refinement, with flexible TRT-timezone scheduling.",
    keywords: ["online quran classes turkey", "quran teacher turkey", "learn quran online turkey", "online quran istanbul", "islamic classes turkey"],
  },
];

export function getLocation(slug: string): Location | undefined {
  return locations.find((l) => l.slug === slug);
}
