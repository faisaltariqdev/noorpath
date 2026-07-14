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

export const WHATSAPP_TRIAL_MESSAGE =
  "Assalamu Alaikum. I would like to ask about a free online Quran trial class. Please share tutor availability and the next steps.";
