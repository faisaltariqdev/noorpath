/**
 * Curated llms.txt catalog for NoorPath.
 *
 * Rules:
 * - Explicit inclusion only (never dump the full sitemap)
 * - Paths must be current canonical owners (see src/proxy.ts redirects)
 * - City pages must be indexable (see TEMPLATE_CITY_NOINDEX_SLUGS)
 * - No invented stats, ratings, guarantees, or campus claims
 * - Brand: NoorPath · descriptive identity: NoorPath Online Quran Academy
 *   (site also uses "NoorPath Academy" in metadata/schema)
 */

export const BASE = "https://www.noorpath.online";

export const REVIEWED = "2026-08-11";

/**
 * Semantic topic → resource map for AI answerability.
 * These are intents / questions, NOT a keyword stuffing list.
 */
export const TOPIC_INTENTS = [
  {
    topic: "Learn Quran online / online Quran learning",
    summary:
      "How a learner can study Quran online with live one-to-one tuition, including beginners, children and adults.",
    primary: ["/learn-quran-online", "/online-quran-classes"],
    supporting: [
      "/online-quran-for-beginners",
      "/quran-teacher-online",
      "/free-quran-classes-online",
      "/blog/benefits-of-online-quran-classes",
      "/blog/is-online-quran-learning-as-effective-as-in-person",
    ],
  },
  {
    topic: "Online Quran classes",
    summary:
      "Structured live online Quran classes, lesson format, trial and pricing context.",
    primary: ["/online-quran-classes"],
    supporting: [
      "/one-on-one-quran-classes",
      "/pricing",
      "/blog/online-quran-classes-cost-pricing-guide",
      "/blog/online-quran-trial-what-to-expect",
      "/blog/how-many-quran-classes-per-week",
    ],
  },
  {
    topic: "Quran classes for kids / children",
    summary:
      "Online Quran classes for children, parent guidance, practice routines and female tutor requests.",
    primary: ["/online-quran-classes-for-kids"],
    supporting: [
      "/blog/online-quran-classes-for-kids-parent-guide",
      "/blog/how-to-teach-quran-to-kids",
      "/blog/what-should-my-child-learn-first-in-quran",
      "/blog/female-quran-teacher-for-kids",
      "/blog/online-quran-classes-for-shy-kids",
      "/blog/child-wont-sit-for-quran-class",
    ],
  },
  {
    topic: "Quran classes for adults / adult beginners",
    summary:
      "Adult and returning learners starting or restarting Quran reading online.",
    primary: ["/online-quran-classes-for-adults", "/online-quran-for-beginners"],
    supporting: [
      "/blog/learn-quran-online-adult-beginner-guide",
      "/blog/learn-quran-as-an-adult-never-too-late",
      "/blog/adult-embarrassed-to-learn-quran-beginner",
      "/blog/new-muslim-guide-to-reading-quran",
    ],
  },
  {
    topic: "Online Quran teacher / tutor matching",
    summary:
      "How to request a matched online Quran teacher, including female tutor preferences.",
    primary: ["/quran-teacher-online", "/female-quran-teacher-online"],
    supporting: [
      "/blog/how-to-choose-online-quran-teacher",
      "/blog/questions-to-ask-before-booking-a-quran-tutor",
      "/blog/how-to-know-if-online-quran-tutor-is-good",
      "/blog/when-to-change-your-online-quran-tutor",
      "/our-tutors",
    ],
  },
  {
    topic: "Noorani Qaida / Arabic reading foundations",
    summary:
      "Beginner Arabic letter and Qaida pathway before fluent Quran reading.",
    primary: ["/noorani-qaida", "/courses/noorani-qaida-online"],
    supporting: [
      "/blog/noorani-qaida-complete-guide",
      "/blog/how-long-does-noorani-qaida-take",
      "/blog/hard-arabic-letters-for-kids-makharij",
    ],
  },
  {
    topic: "Tajweed / Quran recitation",
    summary:
      "Online Tajweed learning and recitation improvement with live correction.",
    primary: ["/learn-tajweed-online"],
    supporting: [
      "/blog/tajweed-rules-complete-guide",
      "/blog/online-tajweed-classes-for-kids",
      "/blog/how-to-improve-quran-recitation",
      "/blog/tajweed-learning-format-comparison",
    ],
  },
  {
    topic: "Hifz / Quran memorization",
    summary:
      "Online Quran memorization (Hifz) with revision structure for kids and adults.",
    primary: ["/hifz-quran-online"],
    supporting: [
      "/blog/online-hifz-classes-for-kids",
      "/blog/how-long-to-memorize-quran",
      "/blog/hifz-revision-schedule",
      "/blog/how-to-start-hifz-for-kids",
      "/blog/difference-between-hifz-and-tajweed-classes",
    ],
  },
  {
    topic: "Female Quran teacher / sisters",
    summary:
      "Female tutor requests for daughters, sisters and adult women.",
    primary: ["/female-quran-teacher-online", "/quran-classes-for-sisters"],
    supporting: ["/blog/female-quran-teacher-for-kids"],
  },
  {
    topic: "Learning Quran with limited local access",
    summary:
      "Families and students who prefer or need online Quran learning when a suitable local class is hard to reach.",
    primary: [
      "/online-quran-classes",
      "/blog/how-to-teach-quran-when-theres-no-mosque-nearby",
    ],
    supporting: ["/locations", "/quran-teacher-online"],
  },
  {
    topic: "UK / USA / New Zealand / Ireland online Quran classes",
    summary:
      "Country-specific scheduling and school-life context for online Quran classes (online-only service).",
    primary: [
      "/locations/online-quran-classes-uk",
      "/locations/online-quran-classes-usa",
      "/locations/online-quran-classes-new-zealand",
      "/locations/online-quran-classes-ireland",
    ],
    supporting: [
      "/blog/online-quran-classes-uk-kids-guide",
      "/blog/online-quran-classes-usa-kids-guide",
      "/online-quran-classes/london",
      "/online-quran-classes/auckland",
      "/online-quran-classes/dublin",
    ],
  },
];

/** Paths that redirect and must never appear in llms.txt */
export const FORBIDDEN_PATHS = new Set([
  "/online-quran-academy",
  "/quran-lesson-online",
  "/studying-quran-online",
  "/courses/tajweed-classes-online",
  "/courses/hifz-program-online",
  "/courses/quran-classes-for-kids",
  "/online-quran-learning",
  "/quran-classes-for-kids",
  "/online-quran-for-kids",
]);

/**
 * Priority country hubs (useful + exist). Other location slugs remain on the
 * site but are omitted from llms.txt to keep the map concise.
 */
export const PRIORITY_COUNTRIES = [
  { path: "/locations/online-quran-classes-uk", label: "United Kingdom", note: "UK timezone scheduling context for online Quran classes." },
  { path: "/locations/online-quran-classes-usa", label: "United States", note: "USA timezone scheduling context for online Quran classes." },
  { path: "/locations/online-quran-classes-canada", label: "Canada", note: "Canada timezone scheduling context for online Quran classes." },
  { path: "/locations/online-quran-classes-australia", label: "Australia", note: "Australia timezone scheduling context for online Quran classes." },
  { path: "/locations/online-quran-classes-new-zealand", label: "New Zealand", note: "New Zealand timezone and school-year context for online Quran classes." },
  { path: "/locations/online-quran-classes-ireland", label: "Ireland", note: "Ireland / Dublin context for online Quran classes." },
  { path: "/locations/online-quran-classes-uae", label: "United Arab Emirates", note: "UAE timezone scheduling context for online Quran classes." },
  { path: "/locations/online-quran-classes-qatar", label: "Qatar", note: "Qatar timezone scheduling context for online Quran classes." },
  { path: "/locations/online-quran-classes-kuwait", label: "Kuwait", note: "Kuwait timezone scheduling context for online Quran classes." },
  { path: "/locations/online-quran-classes-saudi-arabia", label: "Saudi Arabia", note: "Saudi Arabia timezone scheduling context for online Quran classes." },
  { path: "/locations/online-quran-classes-germany", label: "Germany", note: "Germany context for English-language online Quran lessons." },
  { path: "/locations/online-quran-classes-netherlands", label: "Netherlands", note: "Netherlands CET/CEST scheduling context." },
  { path: "/locations/online-quran-classes-france", label: "France", note: "France CET/CEST scheduling context." },
  { path: "/locations/online-quran-classes-sweden", label: "Sweden", note: "Sweden scheduling context for online Quran classes." },
  { path: "/locations/online-quran-classes-norway", label: "Norway", note: "Norway CET/CEST and winter-daylight scheduling context." },
  { path: "/locations/online-quran-classes-finland", label: "Finland", note: "Finland EET/EEST scheduling context." },
  { path: "/locations/online-quran-classes-denmark", label: "Denmark", note: "Denmark scheduling context for online Quran classes." },
];

/**
 * Indexable city pages only (differentiated content). Thin template cities are
 * intentionally excluded even though routes still exist for users.
 */
export const INDEXABLE_CITIES = [
  { path: "/online-quran-classes/london", label: "London", country: "United Kingdom" },
  { path: "/online-quran-classes/birmingham", label: "Birmingham", country: "United Kingdom" },
  { path: "/online-quran-classes/manchester", label: "Manchester", country: "United Kingdom" },
  { path: "/online-quran-classes/bradford", label: "Bradford", country: "United Kingdom" },
  { path: "/online-quran-classes/leicester", label: "Leicester", country: "United Kingdom" },
  { path: "/online-quran-classes/glasgow", label: "Glasgow", country: "United Kingdom" },
  { path: "/online-quran-classes/new-york", label: "New York", country: "United States" },
  { path: "/online-quran-classes/houston", label: "Houston", country: "United States" },
  { path: "/online-quran-classes/chicago", label: "Chicago", country: "United States" },
  { path: "/online-quran-classes/dallas", label: "Dallas", country: "United States" },
  { path: "/online-quran-classes/los-angeles", label: "Los Angeles", country: "United States" },
  { path: "/online-quran-classes/toronto", label: "Toronto", country: "Canada" },
  { path: "/online-quran-classes/dubai", label: "Dubai", country: "United Arab Emirates" },
  { path: "/online-quran-classes/dublin", label: "Dublin", country: "Ireland" },
  { path: "/online-quran-classes/auckland", label: "Auckland", country: "New Zealand" },
];

/** Tier-1 core service and audience owners */
export const CORE_SERVICES = [
  { path: "/online-quran-classes", label: "Online Quran Classes", note: "Core live one-to-one online Quran classes service." },
  { path: "/learn-quran-online", label: "Learn Quran Online", note: "Overview of online Quran learning with NoorPath." },
  { path: "/online-quran-classes-for-kids", label: "Quran Classes for Kids", note: "Kids-focused online Quran classes." },
  { path: "/online-quran-classes-for-adults", label: "Quran Classes for Adults", note: "Adult online Quran classes." },
  { path: "/online-quran-for-beginners", label: "Quran for Beginners", note: "Beginner pathway from letters and Qaida toward reading." },
  { path: "/quran-teacher-online", label: "Online Quran Teacher", note: "Request a matched online Quran teacher." },
  { path: "/female-quran-teacher-online", label: "Female Quran Teacher Online", note: "Female tutor request path for sisters and daughters." },
  { path: "/quran-classes-for-sisters", label: "Quran Classes for Sisters", note: "Adult sisters and ladies online Quran classes with female tutor requests." },
  { path: "/one-on-one-quran-classes", label: "One-on-One Quran Classes", note: "Private live lesson format explanation." },
  { path: "/quran-classes-for-working-professionals", label: "Quran Classes for Working Professionals", note: "Online Quran learning around busy work schedules." },
  { path: "/free-quran-classes-online", label: "Free Trial Class", note: "Free 30-minute live trial information (no credit card to book)." },
  { path: "/pricing", label: "Pricing", note: "Published USD plans and family discount rules." },
];

/** Course / subject owners (canonical destinations after redirects) */
export const COURSES = [
  { path: "/noorani-qaida", label: "Interactive Noorani Qaida Hub", note: "Free interactive Noorani Qaida reference modules, letters, lessons and games." },
  { path: "/courses/noorani-qaida-online", label: "Noorani Qaida Online Course", note: "Live Noorani Qaida course page for beginners." },
  { path: "/learn-tajweed-online", label: "Learn Tajweed Online", note: "Canonical Tajweed classes owner (not /courses/tajweed-classes-online)." },
  { path: "/hifz-quran-online", label: "Hifz Quran Online", note: "Canonical online Quran memorization program owner." },
  { path: "/courses/arabic-language-online", label: "Arabic Language Online", note: "Arabic language course page." },
  { path: "/courses/islamic-studies-online", label: "Islamic Studies Online", note: "Islamic studies course page." },
  { path: "/courses/daily-duas-for-kids", label: "Daily Duas for Kids", note: "Kids duas course page." },
  { path: "/courses", label: "All Courses", note: "Course index." },
];

export const ABOUT_TRUST = [
  { path: "/about", label: "About NoorPath" },
  { path: "/contact", label: "Contact" },
  { path: "/founder", label: "Founder" },
  { path: "/our-tutors", label: "Our Tutors" },
  { path: "/safeguarding", label: "Safeguarding" },
  { path: "/editorial-policy", label: "Editorial Policy" },
  { path: "/accessibility-statement", label: "Accessibility Statement" },
  { path: "/privacy-policy", label: "Privacy Policy" },
  { path: "/terms-of-service", label: "Terms of Service" },
  { path: "/locations", label: "All Locations" },
  { path: "/blog", label: "Blog" },
  { path: "/islamic-resources", label: "Islamic Resources" },
];

/**
 * Curated blog / knowledge resources by semantic cluster.
 * Paths are /blog/{slug}. Keep this list short and high-value.
 */
export const BLOG_CLUSTERS = [
  {
    heading: "Online Quran Learning Guides",
    items: [
      { slug: "benefits-of-online-quran-classes", label: "Benefits of online Quran classes" },
      { slug: "is-online-quran-learning-as-effective-as-in-person", label: "Online vs in-person Quran learning" },
      { slug: "how-to-choose-online-quran-teacher", label: "How to choose an online Quran teacher" },
      { slug: "questions-to-ask-before-booking-a-quran-tutor", label: "Questions before booking a Quran tutor" },
      { slug: "live-online-quran-tutor-vs-prerecorded-courses", label: "Live tutor vs pre-recorded courses" },
      { slug: "online-quran-classes-cost-pricing-guide", label: "Online Quran classes cost guide" },
      { slug: "how-to-teach-quran-when-theres-no-mosque-nearby", label: "Learning Quran when local access is limited" },
      { slug: "online-quran-trial-what-to-expect", label: "What to expect in an online Quran trial" },
      { slug: "how-many-quran-classes-per-week", label: "How many Quran classes per week" },
      { slug: "how-long-should-online-quran-lessons-be", label: "How long online Quran lessons should be" },
      { slug: "how-to-know-if-online-quran-tutor-is-good", label: "How to know if an online Quran tutor is good" },
      { slug: "when-to-change-your-online-quran-tutor", label: "When to change your online Quran tutor" },
      { slug: "online-quran-class-checklist-for-parents", label: "Online Quran class checklist for parents" },
      { slug: "what-is-ijazah-in-quran-teaching", label: "What is Ijazah in Quran teaching" },
    ],
  },
  {
    heading: "Kids Quran Learning Guides",
    items: [
      { slug: "online-quran-classes-for-kids-parent-guide", label: "Parent guide to kids Quran classes" },
      { slug: "how-to-teach-quran-to-kids", label: "How to teach Quran to kids" },
      { slug: "best-age-to-start-quran-learning", label: "Best age to start Quran learning" },
      { slug: "what-should-my-child-learn-first-in-quran", label: "What a child should learn first in Quran" },
      { slug: "parents-dont-speak-arabic-child-learn-quran", label: "When parents do not speak Arabic" },
      { slug: "quran-practice-routine-at-home-kids", label: "Kids Quran practice routine at home" },
      { slug: "female-quran-teacher-for-kids", label: "Female Quran teacher for kids" },
      { slug: "online-hifz-classes-for-kids", label: "Online Hifz classes for kids" },
      { slug: "online-quran-classes-for-shy-kids", label: "Online Quran classes for shy kids" },
      { slug: "child-wont-sit-for-quran-class", label: "When a child will not sit for Quran class" },
      { slug: "child-forgets-quran-between-classes", label: "When a child forgets Quran between classes" },
      { slug: "quran-homework-kids-wont-practice", label: "When kids will not practice Quran homework" },
      { slug: "sibling-online-quran-classes-scheduling", label: "Sibling online Quran class scheduling" },
      { slug: "online-quran-classes-for-teenagers", label: "Online Quran classes for teenagers" },
      { slug: "keeping-quran-classes-during-exams-and-holidays", label: "Keeping Quran classes during exams and holidays" },
      { slug: "how-long-until-child-reads-quran", label: "How long until a child reads Quran" },
      { slug: "online-quran-classes-uk-kids-guide", label: "UK kids Quran classes guide" },
      { slug: "online-quran-classes-usa-kids-guide", label: "USA kids Quran classes guide" },
    ],
  },
  {
    heading: "Beginner & Adult Learning Guides",
    items: [
      { slug: "learn-quran-online-adult-beginner-guide", label: "Adult beginner guide to learning Quran online" },
      { slug: "learn-quran-as-an-adult-never-too-late", label: "Learning Quran as an adult" },
      { slug: "adult-embarrassed-to-learn-quran-beginner", label: "Adult beginners who feel embarrassed to start" },
      { slug: "new-muslim-guide-to-reading-quran", label: "New Muslim guide to reading Quran" },
      { slug: "how-long-does-noorani-qaida-take", label: "How long Noorani Qaida can take" },
      { slug: "noorani-qaida-complete-guide", label: "Noorani Qaida complete guide" },
    ],
  },
  {
    heading: "Tajweed & Quran Reading Guides",
    items: [
      { slug: "tajweed-rules-complete-guide", label: "Tajweed rules guide" },
      { slug: "online-tajweed-classes-for-kids", label: "Online Tajweed classes for kids" },
      { slug: "tajweed-learning-format-comparison", label: "Tajweed learning format comparison" },
      { slug: "how-to-improve-quran-recitation", label: "How to improve Quran recitation" },
      { slug: "hard-arabic-letters-for-kids-makharij", label: "Hard Arabic letters (makharij) for kids" },
      { slug: "quran-pronunciation-troubleshooting", label: "Quran pronunciation troubleshooting" },
      { slug: "difference-between-hifz-and-tajweed-classes", label: "Difference between Hifz and Tajweed classes" },
    ],
  },
  {
    heading: "Hifz Guides",
    items: [
      { slug: "how-long-to-memorize-quran", label: "How long to memorize Quran" },
      { slug: "hifz-revision-schedule", label: "Hifz revision schedule" },
      { slug: "how-to-start-hifz-for-kids", label: "How to start Hifz for kids" },
      { slug: "quran-memorization-retention-research", label: "Quran memorization retention research review" },
      { slug: "how-to-memorize-juz-amma", label: "How to memorize Juz Amma" },
      { slug: "finish-quran-in-ramadan-30-day-plan", label: "Finishing Quran reading in Ramadan (plan)" },
    ],
  },
  {
    heading: "Frequently Used Islamic References",
    items: [
      { slug: "barakallah-meaning", label: "Barakallah meaning" },
      { slug: "attahiyat-full-arabic-english-tashahhud", label: "Attahiyat / Tashahhud" },
      { slug: "sajdah-tilawat-dua-arabic-english", label: "Sajdah Tilawat dua" },
      { slug: "rabbana-atina-fid-dunya", label: "Rabbana Atina Fid Dunya" },
      { slug: "dua-for-forgiveness-istighfar", label: "Dua for forgiveness (Istighfar)" },
      { slug: "labbaik-allahumma-labbaik", label: "Labbaik Allahumma Labbaik" },
      { slug: "safar-ki-dua-travel-dua-arabic-english", label: "Safar ki dua (travel dua)" },
    ],
  },
  {
    heading: "Source-led Research & Planning Assets",
    items: [
      { slug: "online-quran-class-setup", label: "Online Quran class setup guide" },
      { slug: "quran-curriculum-and-lesson-planning", label: "Quran curriculum and lesson planning" },
      { slug: "quran-practice-and-progress-guide", label: "Quran practice and progress guide" },
      { slug: "quran-learning-method-comparisons", label: "Quran learning method comparisons" },
      { slug: "muslim-population-statistics-uk-usa", label: "UK/USA Muslim population statistics (sourced)" },
      { slug: "internet-access-statistics-nine-markets", label: "Internet-access statistics across nine markets (sourced)" },
    ],
  },
];

export const EXTERNAL = {
  trustpilot: "https://www.trustpilot.com/review/noorpath.online",
  googleBusiness: "https://www.google.com/maps?kgmid=/g/11npsdjwdh",
  facebook: "https://www.facebook.com/noorpathquranacademy",
  instagram: "https://www.instagram.com/noorpath.online/",
  tiktok: "https://www.tiktok.com/@noorpathacademy",
  youtube: "https://www.youtube.com/@NoorPath.Online",
  whatsapp: "https://wa.me/923124877906",
  email: "info@noorpath.online",
};

export function abs(path) {
  if (path.startsWith("http")) return path;
  return `${BASE}${path.startsWith("/") ? path : `/${path}`}`;
}

export function allCatalogPaths() {
  const paths = new Set(["/"]);
  for (const x of CORE_SERVICES) paths.add(x.path);
  for (const x of COURSES) paths.add(x.path);
  for (const x of ABOUT_TRUST) paths.add(x.path);
  for (const x of PRIORITY_COUNTRIES) paths.add(x.path);
  for (const x of INDEXABLE_CITIES) paths.add(x.path);
  for (const cluster of BLOG_CLUSTERS) {
    for (const item of cluster.items) paths.add(`/blog/${item.slug}`);
  }
  for (const intent of TOPIC_INTENTS) {
    for (const p of intent.primary) paths.add(p);
    for (const p of intent.supporting) paths.add(p);
  }
  return [...paths];
}

/** Compact topic paths for the short llms.txt (primary owners only). */
export function topicPrimaryPaths() {
  const paths = new Set();
  for (const intent of TOPIC_INTENTS) {
    for (const p of intent.primary) paths.add(p);
  }
  return [...paths];
}
