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

export const WHATSAPP_TRIAL_MESSAGE =
  "Assalamu Alaikum. I would like to ask about a free online Quran trial class. Please share tutor availability and the next steps.";
