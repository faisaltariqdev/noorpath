import type { Location } from "./locations";
import { FAMILY_DISCOUNTS, PRICING_PLANS, TRIAL } from "@/lib/academyFacts";

const starterPlan = PRICING_PLANS[0];
const familyDiscountSummary = FAMILY_DISCOUNTS.map(
  ({ siblings, discountPercent }) => `${siblings}: ${discountPercent}%`
).join(", ");

export function getLocationFaqs(loc: Location) {
  const primaryCity = loc.cities.split(",")[0].trim();
  return [
    {
      q: `How do online Quran classes work in ${loc.country}?`,
      a: `NoorPath Academy offers live 1-on-1 online Quran classes for learners in ${loc.country} via Zoom or Google Meet. Request a weekly schedule in ${loc.timezone}; tutor and time availability are confirmed after matching. The ${TRIAL.durationMinutes}-minute trial costs $${TRIAL.price} and does not require a credit card.`,
    },
    {
      q: `How can I choose an online Quran academy in ${loc.country}?`,
      a: `Compare lesson format, curriculum, tutor fit, pricing, safeguarding practices, and scheduling in ${loc.timezone}. NoorPath offers live 1-on-1 lessons online, with tutor availability confirmed after your request for ${primaryCity} or elsewhere in ${loc.country}.`,
    },
    {
      q: `How much do online Quran classes cost in ${loc.country}?`,
      a: `The ${starterPlan.name} plan is $${starterPlan.monthlyPriceUsd}/month for ${starterPlan.sessionsPerMonth} ${starterPlan.sessionMinutes}-minute sessions. The ${TRIAL.durationMinutes}-minute trial costs $${TRIAL.price} with no credit card required. Published family discounts are ${familyDiscountSummary}.`,
    },
    {
      q: `What time are the Quran classes held in ${loc.country}?`,
      a: `You can request morning, afternoon, evening, or weekend lessons in ${loc.timezone}. Exact times are subject to tutor matching and are confirmed after your request.`,
    },
    {
      q: `Can kids learn Quran online in ${loc.country}?`,
      a: `Yes. NoorPath offers 1-on-1 online classes covering Noorani Qaida, Tajweed, Hifz, daily duas, and Islamic studies for children in ${loc.country}. Tutor fit and ${loc.timezone} availability are confirmed after a request.`,
    },
    {
      q: `Are female Quran teachers available in ${loc.country}?`,
      a: `You can request a female Quran tutor for a learner in ${loc.country}. Female tutor and ${loc.timezone} availability are subject to matching and confirmed after your request.`,
    },
    {
      q: `Do you offer after-school online Quran classes in ${loc.country}?`,
      a: `You can request an after-school, evening, or weekend lesson in ${loc.timezone}. A recurring time is confirmed only after a suitable tutor is matched.`,
    },
    {
      q: `Can my child start Noorani Qaida or Hifz online in ${loc.country}?`,
      a: `Yes. Beginners start with Noorani Qaida; children who already read fluently can join structured online Hifz with the Sabaq–Sabqi–Manzil system. Book a free trial to assess the right track.`,
    },
  ];
}

export function getLocationSeoParagraphs(loc: Location): string[] {
  const primaryCity = loc.cities.split(",")[0].trim();
  return [
    `Looking for online Quran classes in ${loc.country}? NoorPath Academy offers live 1-on-1 Quran tutoring online for learners in ${primaryCity}, ${loc.cities.split(",").slice(1, 3).map((c) => c.trim()).join(", ")}, and other areas. Whether you want to learn from scratch, improve Tajweed, start Hifz, or enrol your children, you can request a tutor and schedule in the ${loc.timezone} timezone.`,
    loc.localContext,
    `NoorPath offers Noorani Qaida, Tajweed, Quran memorization (Hifz), Arabic language, Islamic studies, and daily duas through online lessons. The ${starterPlan.name} plan is $${starterPlan.monthlyPriceUsd}/month, and the ${TRIAL.durationMinutes}-minute trial costs $${TRIAL.price} with no credit card required. Morning, afternoon, evening, and weekend preferences in ${loc.timezone} are subject to tutor matching.`,
    `Learners in ${loc.country} can request female tutor options, one-to-one lessons, and family pricing. Published sibling discounts are ${familyDiscountSummary}. NoorPath operates online and does not imply a physical branch in ${loc.country}.`,
  ];
}

export function getLocationKeywords(loc: Location): string[] {
  const country = loc.country.toLowerCase();
  const short = country.replace("united ", "").replace(" ", "");
  return [
    ...loc.keywords,
    `learn quran online ${short}`,
    `online quran academy ${short}`,
    `quran classes online ${short}`,
    `online quran tutor ${short}`,
    `quran teacher online ${country}`,
    `online quran classes ${country}`,
    `islamic education online ${country}`,
    `noorani qaida online ${country}`,
    `tajweed classes online ${country}`,
    `hifz program online ${country}`,
    `quran classes for kids ${country}`,
    `online quran classes for kids ${country}`,
    `online quran classes for kids ${short}`,
    `female quran teacher ${country}`,
    `female quran teacher for kids ${short}`,
    `online hifz classes for kids ${short}`,
    `after school quran classes ${short}`,
    `one to one quran tutor online ${short}`,
    `online quran learning ${country}`,
  ];
}
