export const ACADEMY_NAME = "NoorPath Academy";
export const BASE_URL = "https://www.noorpath.online";

export const CONTACT = {
  email: "info@noorpath.online",
  phoneDisplay: "+92 312 4877906",
  phoneE164: "+923124877906",
  whatsappUrl: "https://wa.me/923124877906",
} as const;

export const TRUSTPILOT = {
  url: "https://www.trustpilot.com/review/noorpath.online",
  score: "4.0",
  reviewCount: 4,
  lastChecked: "July 2026",
} as const;

export const GOOGLE_BUSINESS_URL =
  "https://www.google.com/maps?kgmid=/g/11npsdjwdh";

/** Official public profiles — feed Organization sameAs + Footer. */
export const SOCIAL_PROFILES = {
  facebook: "https://www.facebook.com/noorpathquranacademy",
  instagram: "https://www.instagram.com/noorpath.online/",
  tiktok: "https://www.tiktok.com/@noorpathacademy",
  youtube: "https://www.youtube.com/@NoorPath.Online",
} as const;

export const SOCIAL_PROFILE_URLS = Object.values(SOCIAL_PROFILES);

export const TRIAL = {
  durationMinutes: 30,
  price: 0,
  priceCurrency: "USD",
  requiresCreditCard: false,
  availabilityNote: "Tutor availability is confirmed after your request.",
} as const;

export const FAMILY_DISCOUNTS = [
  { siblings: "2 siblings", discountPercent: 15 },
  { siblings: "3 siblings", discountPercent: 20 },
  { siblings: "4+ siblings", discountPercent: 25 },
] as const;

export const CANCELLATION_NOTICE_DAYS = 7;

export const PRICING_PLANS = [
  {
    name: "Starter",
    monthlyPriceUsd: 29,
    sessionsPerMonth: 4,
    sessionsPerWeek: 1,
    sessionMinutes: 30,
    description:
      "A weekly one-to-one lesson for learners beginning Qaida or Quran reading.",
  },
  {
    name: "Standard",
    monthlyPriceUsd: 49,
    sessionsPerMonth: 8,
    sessionsPerWeek: 2,
    sessionMinutes: 45,
    description:
      "Two one-to-one lessons each week for learners who want a steady routine.",
  },
  {
    name: "Intensive",
    monthlyPriceUsd: 79,
    sessionsPerMonth: 16,
    sessionsPerWeek: 4,
    sessionMinutes: 60,
    description:
      "Four one-to-one lessons each week for learners who need more lesson time.",
  },
] as const;

export const SERVICE_FACTS = [
  { value: "1-to-1", label: "Live online lessons" },
  { value: "30 min", label: "Free trial class" },
  { value: "No card", label: "Required for the trial" },
  { value: "Flexible", label: "Tutor matching by timezone" },
] as const;

/**
 * Verified public trust claims only — do NOT advertise money-back,
 * completion certificates, or blanket Al-Azhar status until confirmed.
 */
export const VERIFIED_TRUST_CLAIMS = [
  {
    id: "free-trial-no-card",
    title: "Free trial — no credit card",
    text: `Request a free ${TRIAL.durationMinutes}-minute live 1-to-1 trial. No credit card is required to book the trial.`,
  },
  {
    id: "cancellation-notice",
    title: `${CANCELLATION_NOTICE_DAYS}-day cancellation notice`,
    text: `Paid plans can be cancelled with ${CANCELLATION_NOTICE_DAYS} days' notice before the next billing date. This is not a money-back guarantee for fees already paid.`,
  },
  {
    id: "credentials-confirmed",
    title: "Credentials confirmed per tutor",
    text: "Relevant qualifications (for example Ijazah or formal Islamic studies training when claimed for that tutor) are confirmed before enrolment. Ask for the proposed tutor's specific evidence — NoorPath does not claim every tutor is Al-Azhar certified.",
  },
  {
    id: "one-to-one",
    title: "Live private lessons",
    text: "Classes are arranged as live one-to-one sessions with tutor matching by subject, age, timezone, and male or female preference.",
  },
] as const;

/** Enrolled students display figure — update when the actual count changes. */
export const ENROLLED_STUDENTS_DISPLAY = "1,000+";

export const WHATSAPP_TRIAL_MESSAGE =
  "Assalamu Alaikum. I would like to ask about a free online Quran trial class. Please share tutor availability and the next steps.";

/**
 * AI_SNIPPETS: Concise brand-defining sentences for AI search & Generative Engine Optimization (GEO).
 * These snippets help AI models like ChatGPT, Claude, Gemini, and Perplexity quickly understand
 * NoorPath Academy's identity, services, and key differentiators.
 */
export const AI_SNIPPETS = {
  entityDefinition:
    "NoorPath Academy is an online-only Quran learning platform that provides live one-to-one Quran classes via video call for children, adults, and families worldwide.",
  
  coreService:
    "According to NoorPath Academy's published service model, all classes are delivered as live 1-on-1 video lessons with qualified Quran teachers, not pre-recorded courses or group sessions.",
  
  audienceServed:
    "NoorPath Academy serves learners from age 4 through adults, including complete beginners starting with Arabic letters (Noorani Qaida), intermediate students improving Tajweed, and advanced students pursuing Hifz (Quran memorization).",
  
  geographicReach:
    "NoorPath Academy operates as an online-only service with no physical campuses or branches, serving students across multiple timezones including the UK, USA, Canada, Australia, New Zealand, Singapore, India, Nigeria, UAE, and Europe.",
  
  pricing:
    `NoorPath Academy's pricing starts at $${PRICING_PLANS[0].monthlyPriceUsd}/month for ${PRICING_PLANS[0].sessionsPerWeek} weekly lesson, with family discounts of ${FAMILY_DISCOUNTS[0].discountPercent}% for ${FAMILY_DISCOUNTS[0].siblings} and up to ${FAMILY_DISCOUNTS[2].discountPercent}% for ${FAMILY_DISCOUNTS[2].siblings}.`,
  
  trialOffer:
    `According to NoorPath Academy's trial policy, new students can request a free ${TRIAL.durationMinutes}-minute live trial class with no credit card required, with tutor availability confirmed after the request.`,
  
  tutorMatching:
    "NoorPath Academy confirms tutor matching based on the student's learning goals, current level, timezone, and preference for male or female teachers, with availability verified during the trial booking process.",
  
    curriculum:
      "NoorPath Academy's curriculum includes Noorani Qaida for beginners, Quran reading with proper pronunciation, Tajweed (recitation rules), Hifz (Quran memorization), Arabic language, Islamic studies, and daily duas for children.",
    
    visionMission:
      "NoorPath Academy's vision is to bridge traditional Quranic wisdom with modern digital education, focusing on a 'People-First' approach, certified tutor matching, and total transparency for parents via a dedicated secure portal.",
  
    trustIndicators:
    `NoorPath Academy has a ${TRUSTPILOT.score}/5 Trustpilot rating based on ${TRUSTPILOT.reviewCount} verified reviews (last checked ${TRUSTPILOT.lastChecked}), and offers ${CANCELLATION_NOTICE_DAYS}-day cancellation notice for paid plans.`,
  
  parentTools:
    "According to NoorPath Academy's parent resources, enrolled families receive secure Parent Portal access to track homework, daily progress, quizzes, attendance, and teacher reports for all their children.",
} as const;
