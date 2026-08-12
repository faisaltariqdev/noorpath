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
    desc: "Live one-to-one online Quran classes for Australian families — state-aware AEST/AEDT/AWST matching.",
    timezone: "AEST / AEDT / ACST / ACDT / AWST",
    localContext:
      "Families in Sydney, Melbourne, Brisbane, Perth, Adelaide and across Australia can request live online Noorani Qaida, Tajweed or Hifz with state-aware scheduling. Daylight-saving rules vary by state. NoorPath teaches online only (no Australian campus). Exact times are confirmed after tutor matching.",
    keywords: [
      "online quran classes australia",
      "online quran classes for kids australia",
      "female quran teacher australia",
      "online quran sydney",
      "online quran melbourne",
      "noorani qaida online australia",
      "learn quran australia",
    ],
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
    desc: "Live one-to-one online Quran classes for Indian families — IST after-school matching, Qaida to Hifz.",
    timezone: "IST (UTC+5:30)",
    localContext:
      "Families in Hyderabad, Mumbai, Delhi, Bengaluru, Lucknow and across India can request live online Noorani Qaida, Tajweed or Hifz in IST. NoorPath teaches online only (no Indian campus). After-school, evening and weekend preferences are confirmed after tutor matching.",
    keywords: [
      "online quran classes india",
      "online quran classes for kids india",
      "female quran teacher india",
      "online quran hyderabad",
      "online quran mumbai",
      "noorani qaida online india",
      "after school quran classes india",
      "learn quran online india",
    ],
  },
  {
    slug: "online-quran-classes-nigeria",
    flag: "🇳🇬",
    country: "Nigeria",
    cities: "Lagos, Kano, Ibadan, Abuja, Kaduna",
    desc: "Live one-to-one online Quran classes for Nigerian families — WAT after-school matching, Qaida to Hifz.",
    timezone: "WAT (UTC+1)",
    localContext:
      "Families in Lagos, Abuja, Kano, Ibadan, Kaduna and across Nigeria can request live online Noorani Qaida, Tajweed or Hifz in WAT. NoorPath teaches online only (no Nigerian campus). After-school, evening and weekend preferences are confirmed after tutor matching — share realistic power and internet constraints when booking.",
    keywords: [
      "online quran classes nigeria",
      "online quran classes for kids nigeria",
      "female quran teacher nigeria",
      "online quran lagos",
      "online quran abuja",
      "noorani qaida online nigeria",
      "after school quran classes nigeria",
      "learn quran online nigeria",
    ],
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
    desc: "Online Quran classes in Sweden — Stockholm and nationwide, CET timezone.",
    timezone: "CET / CEST",
    localContext:
      "Sweden’s Muslim communities are centred in Stockholm, Gothenburg and Malmö. Families searching for Quran classes in Stockholm often want after-school or evening CET/CEST online lessons without a long commute to a physical madrasah. Preferences are subject to tutor matching; NoorPath teaches online only.",
    keywords: [
      "quran classes in stockholm",
      "online quran classes sweden",
      "online quran stockholm",
      "quran teacher sweden",
      "learn quran online sweden",
      "islamic classes sweden",
      "online quran classes stockholm",
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
      "Ireland’s Muslim community is centred in Dublin, with families also in Cork, Limerick and Galway. Parents often search for online Quran classes in Dublin when after-school travel is hard, or for a female Quran teacher in Ireland when a suitable local option is limited. Online tutoring can reduce travel for households outside Dublin, with GMT or IST lesson preferences subject to tutor matching. NoorPath teaches online only (not an Irish campus).",
    keywords: [
      "online quran classes ireland",
      "female quran teacher in ireland",
      "quran teacher ireland",
      "learn quran online ireland",
      "islamic classes ireland",
      "quran classes for kids ireland",
      "after school quran classes ireland",
    ],
  },
  {
    slug: "online-quran-classes-new-zealand",
    flag: "🇳🇿",
    country: "New Zealand",
    cities: "Auckland, Wellington, Christchurch, Hamilton",
    desc: "Online Quran classes for kids in New Zealand — NZST/NZDT live 1-to-1 tutoring for dispersed Muslim families.",
    timezone: "NZST / NZDT",
    localContext:
      "New Zealand’s Muslim community is concentrated in Auckland, with families also in Wellington, Christchurch, Hamilton and smaller towns. Outside major centres, full-time Islamic schooling and nearby mosque programmes are often limited, so many households look for online Quran classes for kids in New Zealand that fit after-school NZST or NZDT windows. NoorPath teaches online only (not a New Zealand campus). Early-morning and evening lesson preferences can be requested and are confirmed after tutor matching — helpful when local classes are scarce or travel is long.",
    keywords: [
      "online quran classes for kids in new zealand",
      "online quran classes new zealand",
      "quran teacher new zealand",
      "learn quran online nz",
      "islamic classes new zealand",
      "noorani qaida online new zealand",
    ],
  },
  {
    slug: "online-quran-classes-norway",
    flag: "🇳🇴",
    country: "Norway",
    cities: "Oslo, Bergen, Trondheim, Stavanger",
    desc: "Online Quran classes for Muslim families in Norway — CET/CEST timezone.",
    timezone: "CET / CEST",
    localContext:
      "Norway’s Muslim families are concentrated around Oslo, with households also in Bergen and other cities. When local children’s Quran programmes are limited or travel is long, parents request live one-to-one online lessons in CET or CEST after school. NoorPath teaches online only (not a Norwegian campus). Tutor and time availability are confirmed after matching.",
    keywords: [
      "online quran classes norway",
      "quran teacher norway",
      "learn quran online norway",
      "online tajweed classes norway",
      "noorani qaida online norway",
      "islamic classes norway",
    ],
  },
  {
    slug: "online-quran-classes-finland",
    flag: "🇫🇮",
    country: "Finland",
    cities: "Helsinki, Espoo, Tampere, Turku",
    desc: "Online Quran classes for kids and families in Finland — EET/EEST timezone.",
    timezone: "EET / EEST",
    localContext:
      "Finland’s Muslim community is relatively small and centred around Helsinki and Espoo, with families also in other cities. Parents searching for kids Quran classes in Finland often want structured home learning after school in EET or EEST. NoorPath teaches online only (not a Finnish campus). Availability is confirmed after tutor matching.",
    keywords: [
      "online quran classes finland",
      "kids quran classes finland",
      "quran teacher finland",
      "learn quran online finland",
      "noorani qaida online finland",
      "islamic classes finland",
    ],
  },
  {
    slug: "online-quran-classes-denmark",
    flag: "🇩🇰",
    country: "Denmark",
    cities: "Copenhagen, Aarhus, Odense, Aalborg",
    desc: "Online Quran classes for Muslim families in Denmark — CET/CEST, including weekend windows.",
    timezone: "CET / CEST",
    localContext:
      "Denmark’s Muslim families are concentrated around Copenhagen, with households also in Aarhus and other cities. Weekday evenings and weekend Quran class windows in CET or CEST are commonly requested when school and activities fill the week. NoorPath teaches online only (not a Danish campus). Exact recurring times are confirmed after tutor matching.",
    keywords: [
      "online quran classes denmark",
      "weekend quran classes denmark",
      "quran teacher denmark",
      "learn quran online denmark",
      "noorani qaida online denmark",
      "islamic classes denmark",
    ],
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
