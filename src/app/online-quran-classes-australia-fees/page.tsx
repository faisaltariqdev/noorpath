import FeesLandingPage, { feesMetadata, type FeesPageConfig } from "@/components/FeesLandingPage";
import { PRICING_PLANS, TRIAL_OFFER } from "@/lib/academyFacts";

export const revalidate = false;

const config: FeesPageConfig = {
  path: "/online-quran-classes-australia-fees",
  countryName: "Australia",
  formCountry: "Australia",
  currency: "AUD",
  currencyName: "Australian dollar",
  locationPath: "/locations/online-quran-classes-australia",
  locationLabel: "online Quran classes in Australia",
  metaTitle: `Online Quran Classes Australia Fees: From $${PRICING_PLANS[0].monthlyPriceUsd}/Month (in AUD) | NoorPath`,
  metaDescription: `What online Quran classes cost for Australian families: 1-to-1 plans from $${PRICING_PLANS[0].monthlyPriceUsd}/month with approximate AUD amounts, sibling discounts and a 7-day refund. ${TRIAL_OFFER}, no card.`,
  h1: "Online Quran Classes Australia: Fees and Plans",
  intro: `Live one-to-one Quran lessons for Australian children and adults, from $${PRICING_PLANS[0].monthlyPriceUsd} a month. See what each plan costs in Australian dollars, what you get, and how to start with free trial sessions first.`,
  quickAnswer: `NoorPath plans for Australian families start at $${PRICING_PLANS[0].monthlyPriceUsd} a month (US dollars; see the plan cards below for the approximate AUD amount) for one live 1-to-1 lesson a week. Standard is $${PRICING_PLANS[1].monthlyPriceUsd} for two lessons a week and Intensive is $${PRICING_PLANS[2].monthlyPriceUsd} for four. Plans are billed in US dollars, siblings are discounted, and you start with ${TRIAL_OFFER} before paying.`,
  paymentNote:
    "NoorPath publishes and bills its plans in US dollars, not Australian dollars. Your bank or card provider converts the charge at its own rate and may add an international transaction fee. The AUD amounts on this page are approximate and are for budgeting only. Check the AUD amount your bank shows at payment, and ask your card issuer about foreign-transaction fees before enrolling.",
  costFactors: [
    {
      title: "Lesson length and lessons per month",
      text: `A lower headline fee can hide shorter or fewer lessons. NoorPath's Starter plan is ${PRICING_PLANS[0].sessionsPerMonth} lessons of ${PRICING_PLANS[0].sessionMinutes} minutes a month; Standard is ${PRICING_PLANS[1].sessionsPerMonth} lessons of ${PRICING_PLANS[1].sessionMinutes} minutes; Intensive is ${PRICING_PLANS[2].sessionsPerMonth} lessons of ${PRICING_PLANS[2].sessionMinutes} minutes. Compare the cost per lesson, not just the monthly figure.`,
    },
    {
      title: "Distance to a local class",
      text: "In many suburbs and regional towns the nearest weekend madrasa can be a long drive or already full. Online lessons happen at home, so there is no fuel or travel time to add to the fee.",
    },
    {
      title: "One-to-one or group",
      text: "Group classes suit some children well. A one-to-one lesson gives your child the tutor's full attention and a pace set by the learner. Make sure you are comparing like with like.",
    },
    {
      title: "Tutor credentials",
      text: "Ask to see the tutor's Ijazah or teaching certificate before you commit. Every NoorPath tutor holds an Ijazah or a Quran teaching certificate, and parents can ask to see it.",
    },
    {
      title: "Your state's time zone",
      text: "Australia spans AEST/AEDT, ACST/ACDT and AWST, and only some states use daylight saving. Tell NoorPath your state when you enquire; lesson times are agreed in your local time and depend on tutor availability.",
    },
  ],
  faqs: [
    {
      q: "How much do online Quran classes cost in Australia?",
      a: `With NoorPath, online Quran classes for Australian families start at $${PRICING_PLANS[0].monthlyPriceUsd} a month (US dollars) for one live one-to-one ${PRICING_PLANS[0].sessionMinutes}-minute lesson a week. Standard is $${PRICING_PLANS[1].monthlyPriceUsd} a month and Intensive is $${PRICING_PLANS[2].monthlyPriceUsd} a month. The AUD amount depends on your bank's rate on the day.`,
    },
    {
      q: "Do you charge in Australian dollars?",
      a: "No. Plans are billed in US dollars. Your bank or card provider converts the charge into Australian dollars at its own rate and may add a fee. The AUD figures on this page are approximate.",
    },
    {
      q: "Are there family discounts for siblings in Australia?",
      a: "Yes: 15% off for 2 siblings, 20% off for 3 siblings and 25% off for 4 or more siblings. Contact NoorPath to confirm the applicable plan.",
    },
    {
      q: "What lesson times work from Sydney, Melbourne, Brisbane or Perth?",
      a: "Families usually ask for after-school weekday slots or weekend mornings. Times are agreed in your state's local time and confirmed after your request, subject to tutor availability.",
    },
    {
      q: "Can I choose a female tutor?",
      a: "Yes. Female tutors are available for sisters, daughters and young children.",
    },
  ],
};

export const metadata = feesMetadata(config);

export default function Page() {
  return <FeesLandingPage config={config} />;
}
