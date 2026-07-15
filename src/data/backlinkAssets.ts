import type { BlogPost } from "@/data/blog";

export type BacklinkAssetType =
  | "Infographic"
  | "Statistics"
  | "Ultimate Guide"
  | "Research"
  | "Comparison";

export interface BacklinkDatasetMetadata {
  name: string;
  description: string;
  temporalCoverage: string;
  spatialCoverage: string[];
  variableMeasured: string[];
}

export interface BacklinkAsset extends BlogPost {
  assetType: BacklinkAssetType;
  commercialParent: {
    href: string;
    label: string;
  };
  relatedSlugs: string[];
  sourceUrls: string[];
  howToSteps?: Array<{
    name: string;
    text: string;
  }>;
  downloadPath?: string;
  datasetPath?: string;
  schemaType: "Article" | "ScholarlyArticle";
  datasetMetadata?: BacklinkDatasetMetadata;
}

const DATE = "2026-07-15";
const CATEGORY = "Quran Learning Resources";
const AUTHOR = "Faisal Tariq";
const AUTHOR_TITLE = "Founder";
const AUTHOR_SLUG = "founder";

const ONS_CENSUS_RELIGION_URL =
  "https://www.ons.gov.uk/peoplepopulationandcommunity/culturalidentity/religion/bulletins/religionenglandandwales/census2021";
const PEW_RELIGIOUS_IDENTITY_URL =
  "https://www.pewresearch.org/religion/2025/02/26/religious-landscape-study-religious-identity/";
const WORLD_BANK_INTERNET_GLOSSARY_URL =
  "https://databank.worldbank.org/metadataglossary/world-development-indicators/series/IT.NET.USER.ZS";
const WORLD_BANK_NINE_MARKETS_API_URL =
  "https://api.worldbank.org/v2/country/GBR;USA;ARE;CAN;AUS;DEU;QAT;KWT;SAU/indicator/IT.NET.USER.ZS?format=json";
const NATURE_SPACING_RETRIEVAL_URL =
  "https://doi.org/10.1038/s44159-022-00089-1";
const ERIC_SPACED_RETRIEVAL_META_ANALYSIS_URL =
  "https://eric.ed.gov/?id=EJ1310148";
const PMC_SLEEP_CONSOLIDATION_URL =
  "https://pmc.ncbi.nlm.nih.gov/articles/PMC6482015/";
const UNESCO_ISEE_REPORT_URL = "https://mgiep.unesco.org/iseeareport";
const QURAN_TARTIL_URL = "https://quran.com/al-muzzammil/4";
const QURANIC_ARABIC_CORPUS_TARTIL_URL =
  "https://corpus.quran.com/wordmorphology.jsp?location=%2873%3A4%3A6%29";
const EEF_FEEDBACK_GUIDANCE_URL =
  "https://educationendowmentfoundation.org.uk/education-evidence/guidance-reports/feedback";
const IIUM_TAJWID_GUIDE_URL =
  "https://irep.iium.edu.my/118510/36/118510_Tart%C4%ABl%20learning%20tajwid%20with.pdf";

export const backlinkAssets: BacklinkAsset[] = [
  {
    slug: "hifz-revision-schedule",
    title: "Hifz Revision Schedule",
    description:
      "Use a clear Hifz revision schedule to organise new memorisation, recent review and long-term review without promising a fixed result.",
    category: CATEGORY,
    date: DATE,
    updatedAt: DATE,
    readTime: "8 min",
    keywords: [
      "hifz revision schedule",
      "quran memorization schedule",
      "sabaq sabqi manzil schedule",
      "hifz revision planner",
    ],
    excerpt:
      "A visual framework for balancing new memorisation with recent and long-term Quran revision, adaptable to each learner and teacher.",
    author: AUTHOR,
    authorTitle: AUTHOR_TITLE,
    authorSlug: AUTHOR_SLUG,
    coverImage: "/resources/hifz-revision-schedule.svg",
    assetType: "Infographic",
    commercialParent: {
      href: "/hifz-quran-online",
      label: "Online Hifz classes",
    },
    relatedSlugs: [
      "quran-memorization-retention-research",
      "quran-practice-and-progress-guide",
    ],
    sourceUrls: [
      NATURE_SPACING_RETRIEVAL_URL,
      ERIC_SPACED_RETRIEVAL_META_ANALYSIS_URL,
    ],
    downloadPath: "/resources/hifz-revision-schedule.svg",
    schemaType: "Article",
  },
  {
    slug: "quran-pronunciation-troubleshooting",
    title: "Quran Pronunciation Troubleshooting",
    description:
      "Follow a practical Quran pronunciation troubleshooting flow for identifying, practising and reviewing common recitation difficulties.",
    category: CATEGORY,
    date: DATE,
    updatedAt: DATE,
    readTime: "9 min",
    keywords: [
      "quran pronunciation troubleshooting",
      "quran pronunciation guide",
      "arabic letter pronunciation",
      "tajweed pronunciation practice",
    ],
    excerpt:
      "A visual decision path for noticing a recitation difficulty, isolating the sound or rule and taking it to a qualified teacher for feedback.",
    author: AUTHOR,
    authorTitle: AUTHOR_TITLE,
    authorSlug: AUTHOR_SLUG,
    coverImage: "/resources/quran-pronunciation-troubleshooting.svg",
    assetType: "Infographic",
    commercialParent: {
      href: "/learn-tajweed-online",
      label: "Learn Tajweed online",
    },
    relatedSlugs: [
      "tajweed-learning-format-comparison",
      "tajweed-rules-complete-guide",
    ],
    sourceUrls: [],
    downloadPath: "/resources/quran-pronunciation-troubleshooting.svg",
    schemaType: "Article",
  },
  {
    slug: "muslim-population-statistics-uk-usa",
    title: "Muslim Population Statistics: England, Wales and USA",
    description:
      "Compare England and Wales Census religion data with US survey-based Muslim identity data, including source and methodology differences.",
    category: CATEGORY,
    date: DATE,
    updatedAt: DATE,
    readTime: "10 min",
    keywords: [
      "muslim population statistics uk usa",
      "uk muslim population census",
      "us muslim population survey",
      "muslim population data",
    ],
    excerpt:
      "A source-led UK and US reference that keeps census and survey estimates separate and explains why the two measures are not directly equivalent.",
    author: AUTHOR,
    authorTitle: AUTHOR_TITLE,
    authorSlug: AUTHOR_SLUG,
    assetType: "Statistics",
    commercialParent: {
      href: "/locations",
      label: "Online Quran class locations",
    },
    relatedSlugs: [
      "internet-access-statistics-nine-markets",
      "online-quran-class-setup",
    ],
    sourceUrls: [ONS_CENSUS_RELIGION_URL, PEW_RELIGIOUS_IDENTITY_URL],
    datasetPath: "/resources/muslim-population-uk-usa.csv",
    schemaType: "Article",
    datasetMetadata: {
      name: "Muslim Population Statistics: England, Wales and USA",
      description:
        "A source table for UK census religion data and US adult religious-identity survey data, with methodology notes.",
      temporalCoverage: "2021/2024",
      spatialCoverage: ["England and Wales", "United States"],
      variableMeasured: [
        "Muslim population count",
        "Muslim share of population",
        "Muslim share of adults",
      ],
    },
  },
  {
    slug: "internet-access-statistics-nine-markets",
    title: "Internet Access Statistics Across Nine Markets",
    description:
      "Explore World Bank internet-use data for nine NoorPath markets with observation years, source notes and a downloadable dataset.",
    category: CATEGORY,
    date: DATE,
    updatedAt: DATE,
    readTime: "9 min",
    keywords: [
      "internet access statistics",
      "internet users by country",
      "world bank internet use data",
      "online learning access statistics",
    ],
    excerpt:
      "A reusable World Bank data reference for internet use across the UK, USA, UAE, Canada, Australia, Germany, Qatar, Kuwait and Saudi Arabia.",
    author: AUTHOR,
    authorTitle: AUTHOR_TITLE,
    authorSlug: AUTHOR_SLUG,
    assetType: "Statistics",
    commercialParent: {
      href: "/online-quran-classes",
      label: "Online Quran classes",
    },
    relatedSlugs: [
      "muslim-population-statistics-uk-usa",
      "online-quran-class-setup",
    ],
    sourceUrls: [
      WORLD_BANK_INTERNET_GLOSSARY_URL,
      WORLD_BANK_NINE_MARKETS_API_URL,
    ],
    datasetPath: "/resources/internet-access-nine-markets.csv",
    schemaType: "Article",
    datasetMetadata: {
      name: "Internet Access Statistics Across Nine Markets",
      description:
        "World Bank indicator IT.NET.USER.ZS observations for nine markets, preserving each observation year and source reference.",
      temporalCoverage: "Latest available observation by market as of 2026-07-15",
      spatialCoverage: [
        "United Kingdom",
        "United States",
        "United Arab Emirates",
        "Canada",
        "Australia",
        "Germany",
        "Qatar",
        "Kuwait",
        "Saudi Arabia",
      ],
      variableMeasured: ["Individuals using the Internet (% of population)"],
    },
  },
  {
    slug: "quran-curriculum-and-lesson-planning",
    title: "Quran Curriculum and Lesson Planning",
    description:
      "Build a Quran curriculum and lesson plan around learner needs, clear objectives, guided practice, review and teacher feedback.",
    category: CATEGORY,
    date: DATE,
    updatedAt: DATE,
    readTime: "14 min",
    keywords: [
      "quran curriculum",
      "quran lesson planning",
      "quran teaching plan",
      "quran learning objectives",
    ],
    excerpt:
      "An adaptable planning framework for sequencing Quran lessons, recording evidence of progress and revising the next lesson responsibly.",
    author: AUTHOR,
    authorTitle: AUTHOR_TITLE,
    authorSlug: AUTHOR_SLUG,
    assetType: "Ultimate Guide",
    commercialParent: {
      href: "/online-quran-classes-for-kids",
      label: "Online Quran classes for kids",
    },
    relatedSlugs: [
      "quran-practice-and-progress-guide",
      "online-quran-class-setup",
    ],
    sourceUrls: [UNESCO_ISEE_REPORT_URL],
    schemaType: "Article",
  },
  {
    slug: "online-quran-class-setup",
    title: "Online Quran Class Setup",
    description:
      "Prepare a reliable online Quran class setup with practical guidance for devices, audio, lighting, materials, privacy and routines.",
    category: CATEGORY,
    date: DATE,
    updatedAt: DATE,
    readTime: "12 min",
    keywords: [
      "online quran class setup",
      "online quran lesson equipment",
      "quran class home setup",
      "prepare for online quran classes",
    ],
    excerpt:
      "A device-neutral setup guide for creating a focused, audible and privacy-aware space before an online Quran lesson begins.",
    author: AUTHOR,
    authorTitle: AUTHOR_TITLE,
    authorSlug: AUTHOR_SLUG,
    assetType: "Ultimate Guide",
    commercialParent: {
      href: "/online-quran-classes",
      label: "Online Quran classes",
    },
    relatedSlugs: [
      "quran-curriculum-and-lesson-planning",
      "quran-learning-method-comparisons",
    ],
    sourceUrls: [],
    schemaType: "Article",
  },
  {
    slug: "quran-practice-and-progress-guide",
    title: "Quran Practice and Progress Guide",
    description:
      "Use a research-informed Quran practice framework to plan review, seek feedback and record progress without fixed outcome promises.",
    category: CATEGORY,
    date: DATE,
    updatedAt: DATE,
    readTime: "15 min",
    keywords: [
      "quran practice guide",
      "quran learning progress",
      "quran revision practice",
      "track quran progress",
    ],
    excerpt:
      "A cautious application of general learning research to Quran practice, with teacher feedback and individual needs kept central.",
    author: AUTHOR,
    authorTitle: AUTHOR_TITLE,
    authorSlug: AUTHOR_SLUG,
    assetType: "Research",
    commercialParent: {
      href: "/learn-quran-online",
      label: "Learn Quran online",
    },
    relatedSlugs: [
      "quran-curriculum-and-lesson-planning",
      "quran-memorization-retention-research",
    ],
    sourceUrls: [
      NATURE_SPACING_RETRIEVAL_URL,
      ERIC_SPACED_RETRIEVAL_META_ANALYSIS_URL,
      UNESCO_ISEE_REPORT_URL,
    ],
    schemaType: "ScholarlyArticle",
  },
  {
    slug: "quran-memorization-retention-research",
    title: "Quran Memorization Retention Research",
    description:
      "Review spacing, retrieval practice and sleep research that may inform Quran memorization while recognising limits in direct evidence.",
    category: CATEGORY,
    date: DATE,
    updatedAt: DATE,
    readTime: "16 min",
    keywords: [
      "quran memorization retention research",
      "hifz retention",
      "spaced quran revision",
      "memory research for hifz",
    ],
    excerpt:
      "A transparent review of general memory evidence and its cautious relevance to Hifz, without presenting indirect findings as Quran-specific proof.",
    author: AUTHOR,
    authorTitle: AUTHOR_TITLE,
    authorSlug: AUTHOR_SLUG,
    assetType: "Research",
    commercialParent: {
      href: "/hifz-quran-online",
      label: "Online Hifz classes",
    },
    relatedSlugs: [
      "hifz-revision-schedule",
      "quran-practice-and-progress-guide",
    ],
    sourceUrls: [
      NATURE_SPACING_RETRIEVAL_URL,
      ERIC_SPACED_RETRIEVAL_META_ANALYSIS_URL,
      PMC_SLEEP_CONSOLIDATION_URL,
    ],
    schemaType: "ScholarlyArticle",
  },
  {
    slug: "quran-learning-method-comparisons",
    title: "Quran Learning Method Comparisons",
    description:
      "Compare common Quran learning methods by feedback, interaction, scheduling, learner needs and practical trade-offs.",
    category: CATEGORY,
    date: DATE,
    updatedAt: DATE,
    readTime: "13 min",
    keywords: [
      "quran learning method comparisons",
      "ways to learn quran",
      "online vs in person quran classes",
      "quran learning formats",
    ],
    excerpt:
      "A neutral comparison framework for evaluating one-to-one, group, self-directed, online and in-person Quran learning formats.",
    author: AUTHOR,
    authorTitle: AUTHOR_TITLE,
    authorSlug: AUTHOR_SLUG,
    assetType: "Comparison",
    commercialParent: {
      href: "/online-quran-classes",
      label: "Online Quran classes",
    },
    relatedSlugs: [
      "online-quran-class-setup",
      "tajweed-learning-format-comparison",
    ],
    sourceUrls: [UNESCO_ISEE_REPORT_URL],
    schemaType: "Article",
  },
  {
    slug: "tajweed-learning-format-comparison",
    title: "Tajweed Learning Format Comparison",
    description:
      "Compare Tajweed learning formats by live correction, practice structure, scheduling, privacy and learner independence.",
    category: CATEGORY,
    date: DATE,
    updatedAt: DATE,
    readTime: "11 min",
    keywords: [
      "tajweed learning format comparison",
      "online tajweed vs in person",
      "one to one tajweed lessons",
      "tajweed class formats",
    ],
    excerpt:
      "A practical comparison of live one-to-one, group, recorded and self-study Tajweed formats without declaring one option best for every learner.",
    author: AUTHOR,
    authorTitle: AUTHOR_TITLE,
    authorSlug: AUTHOR_SLUG,
    assetType: "Comparison",
    commercialParent: {
      href: "/learn-tajweed-online",
      label: "Learn Tajweed online",
    },
    relatedSlugs: [
      "quran-pronunciation-troubleshooting",
      "quran-learning-method-comparisons",
    ],
    sourceUrls: [],
    schemaType: "Article",
  },
  {
    slug: "how-to-improve-quran-recitation",
    title: "How to Improve Quran Recitation: A Practical, Measured Guide",
    description:
      "Improve Quran recitation with a practical system for baseline assessment, focused practice, listening, recording, teacher feedback and honest progress checks.",
    category: CATEGORY,
    date: DATE,
    updatedAt: DATE,
    readTime: "24 min",
    keywords: [
      "how to improve quran recitation",
      "improve quran reading",
      "quran recitation practice",
      "how to recite quran better",
      "quran pronunciation practice",
      "daily quran recitation routine",
      "improve tajweed",
      "quran recitation for beginners",
    ],
    excerpt:
      "A step-by-step framework for diagnosing recitation needs, practising one correction at a time, using recordings responsibly and obtaining useful teacher feedback.",
    author: AUTHOR,
    authorTitle: AUTHOR_TITLE,
    authorSlug: AUTHOR_SLUG,
    inLanguage: "en-GB",
    assetType: "Ultimate Guide",
    commercialParent: {
      href: "/learn-quran-online",
      label: "Learn Quran online",
    },
    relatedSlugs: [
      "quran-pronunciation-troubleshooting",
      "quran-practice-and-progress-guide",
      "tajweed-learning-format-comparison",
    ],
    sourceUrls: [
      QURAN_TARTIL_URL,
      QURANIC_ARABIC_CORPUS_TARTIL_URL,
      EEF_FEEDBACK_GUIDANCE_URL,
      IIUM_TAJWID_GUIDE_URL,
    ],
    howToSteps: [
      {
        name: "Select a small anchor passage",
        text: "Choose a short passage that is challenging enough to reveal one recitation issue without creating a new problem in every word.",
      },
      {
        name: "Listen with a specific purpose",
        text: "Follow the text while listening for one selected letter, rule, pause or phrase boundary.",
      },
      {
        name: "Break the passage into micro-sections",
        text: "Practise the target at word, phrase and ayah level instead of repeating the full passage with the same hidden error.",
      },
      {
        name: "Practise one correction target",
        text: "Use one active target for the practice block and record other issues for later review.",
      },
      {
        name: "Recite aloud at a controlled pace",
        text: "Read clearly enough to hear the target and slow down whenever greater speed reduces accuracy.",
      },
      {
        name: "Record and compare",
        text: "Record one short attempt, compare it with a reliable model and name the specific difference you notice.",
      },
      {
        name: "Obtain feedback and repeat",
        text: "Ask a suitable teacher to prioritise the correction, then reproduce it in the word and phrase.",
      },
      {
        name: "Recheck in a new passage",
        text: "Test the same skill in an unfamiliar passage to see whether the correction transfers beyond the anchor example.",
      },
    ],
    schemaType: "Article",
  },
];

export function getBacklinkAsset(
  slug: string,
): BacklinkAsset | undefined {
  return backlinkAssets.find((asset) => asset.slug === slug);
}
