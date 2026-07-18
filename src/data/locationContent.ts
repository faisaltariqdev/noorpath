import type { Location } from "./locations";
import { FAMILY_DISCOUNTS, PRICING_PLANS, TRIAL } from "@/lib/academyFacts";
import { getCurrencyNote, getPriorityContent, getPriorityMarket } from "@/lib/geoSeo";

const starterPlan = PRICING_PLANS[0];
const familyDiscountSummary = FAMILY_DISCOUNTS.map(
  ({ siblings, discountPercent }) => `${siblings}: ${discountPercent}%`
).join(", ");

/** Additive country-specific FAQs prepended for Europe expansion markets only. */
const EUROPE_LOCATION_FAQS: Record<string, Array<{ q: string; a: string }>> = {
  "online-quran-classes-france": [
    {
      q: "Are online Quran classes suitable for Muslim families in France?",
      a: "Yes. Live one-to-one online Quran and Noorani Qaida lessons can suit families in France who want structured home learning after school. NoorPath is an online academy (not a French campus). Suitability is confirmed through a free trial, language match, and a CET/CEST evening slot — commonly requested between about 4 PM and 10 PM local time.",
    },
    {
      q: "Are online Quran classes legitimate and safe for children in France?",
      a: "Online classes are a legitimate tutoring format when the academy uses known video platforms, allows parental observation, explains safeguarding expectations, and confirms the tutor before ongoing payment. Supervise young learners in a shared space and review NoorPath’s safeguarding guidance before enrolment.",
    },
    {
      q: "How do euros (€) relate to NoorPath pricing for families in France?",
      a: `Plans are published and charged in USD (for example the ${starterPlan.name} plan at $${starterPlan.monthlyPriceUsd} USD). Convert the live USD amount to euros (€) for your own budget using your bank’s rate; NoorPath does not publish a fixed EUR price list. ${getCurrencyNote("online-quran-classes-france")}`,
    },
    {
      q: "What class times work after school in France?",
      a: "Many families request lessons from about 4 PM to 10 PM CET or CEST, plus weekend options. Exact recurring times depend on tutor matching and are confirmed after your request.",
    },
  ],
  "online-quran-classes-netherlands": [
    {
      q: "Are online Quran classes suitable for Muslim families in the Netherlands?",
      a: "Yes for households in Amsterdam, Rotterdam, The Hague and other cities that want private live Quran learning without a weekly commute. Confirm English or Arabic instruction, CET evening timing (often ~4–10 PM), and tutor fit via a free trial.",
    },
    {
      q: "How safe is online Quran tutoring for children in the Netherlands?",
      a: "Choose transparent providers, keep devices in family spaces for young children, observe early lessons, and read safeguarding policies. Confirm who teaches after the trial before paying for a continuing package.",
    },
    {
      q: "How should Dutch families budget USD fees in euros (€)?",
      a: `Use published USD plans (such as ${starterPlan.name} at $${starterPlan.monthlyPriceUsd} USD) and convert to € for household planning. Card FX fees may change the final euro amount. ${getCurrencyNote("online-quran-classes-netherlands")}`,
    },
    {
      q: "Can lessons fit around Dutch school and club activities?",
      a: "Yes — request after-school or weekend CET/CEST windows and share conflicts during matching. A sustainable weekly slot usually works better than irregular catch-up lessons.",
    },
  ],
  "online-quran-classes-sweden": [
    {
      q: "Are online Quran classes suitable for Muslim families in Sweden?",
      a: "Yes. Families in Stockholm, Gothenburg, Malmö and elsewhere can use live online Quran and Noorani Qaida lessons when a CET/CEST evening or weekend slot fits Swedish school life and a trial confirms tutor rapport. NoorPath teaches online and does not claim a Swedish campus.",
    },
    {
      q: "How do we evaluate legitimacy and child safety?",
      a: "Look for clear safeguarding information, parental observation, known meeting platforms, and honest tutor matching. Supervise young learners and avoid large prepaid commitments before a successful trial.",
    },
    {
      q: "How do USD prices relate to euros (€) or kronor for Sweden?",
      a: `NoorPath publishes USD plans (for example ${starterPlan.name} at $${starterPlan.monthlyPriceUsd} USD). Convert to € for optional Europe-wide comparison or expect SEK on some card statements after FX. ${getCurrencyNote("online-quran-classes-sweden")}`,
    },
    {
      q: "What times are typically requested in Sweden?",
      a: "Many families ask for roughly 4 PM–10 PM CET/CEST after school, with weekend mornings as an alternative. Availability is confirmed during tutor matching.",
    },
  ],
};

export function getLocationFaqs(loc: Location) {
  const primaryCity = loc.cities.split(",")[0].trim();
  const currencyNote = getCurrencyNote(loc.slug);
  const market = getPriorityMarket(loc.slug);
  const standard = [
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
      a: `The ${starterPlan.name} plan is $${starterPlan.monthlyPriceUsd} USD per month for ${starterPlan.sessionsPerMonth} ${starterPlan.sessionMinutes}-minute sessions. The ${TRIAL.durationMinutes}-minute trial costs $${TRIAL.price} USD with no credit card required. Published family discounts are ${familyDiscountSummary}. ${currencyNote}`,
    },
    {
      q: `What time are the Quran classes held in ${loc.country}?`,
      a: market?.schedulingGuidance ??
        `You can request morning, afternoon, evening, or weekend lessons in ${loc.timezone}. Exact times are subject to tutor matching and are confirmed after your request.`,
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
  const extras = EUROPE_LOCATION_FAQS[loc.slug] ?? [];
  return [...extras, ...standard];
}

export function getLocationSeoParagraphs(loc: Location): string[] {
  const primaryCity = loc.cities.split(",")[0].trim();
  const priorityContent = getPriorityContent(loc.slug);
  const market = getPriorityMarket(loc.slug);
  return [
    priorityContent?.introduction ??
      `NoorPath Academy offers live one-to-one Quran tutoring online for learners in ${primaryCity}, ${loc.cities.split(",").slice(1, 3).map((c) => c.trim()).join(", ")}, and other areas of ${loc.country}. Learners can request support with Qaida, Tajweed, Hifz, or general Quran reading in ${loc.timezone}.`,
    loc.localContext,
    priorityContent?.localPlanning ??
      `Request a suitable morning, after-school, evening, or weekend window in ${loc.timezone}. Exact tutor and recurring-time availability is confirmed after matching.`,
    market?.schedulingGuidance ??
      `Scheduling requests are handled in ${loc.timezone}, with exact availability confirmed after matching.`,
    `NoorPath offers Noorani Qaida, Tajweed, Quran memorisation (Hifz), Arabic language, Islamic studies, and daily duas through online lessons. The ${starterPlan.name} plan is $${starterPlan.monthlyPriceUsd} USD per month, and the ${TRIAL.durationMinutes}-minute trial costs $${TRIAL.price} USD with no credit card required.`,
    getCurrencyNote(loc.slug),
    `Learners in ${loc.country} can request female tutor options, one-to-one lessons, and family pricing. Published sibling discounts are ${familyDiscountSummary}. NoorPath operates online and does not imply a physical branch or established local customer base in ${loc.country}.`,
  ];
}

export function getLocationKeywords(loc: Location): string[] {
  const country = loc.country.toLowerCase();
  const short = country.replace("united ", "").replace(" ", "");
  const priorityKeywords = getPriorityMarket(loc.slug)?.keywordClusters ?? [];
  return [
    ...priorityKeywords,
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
