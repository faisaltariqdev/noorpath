import FeesLandingPage, { feesMetadata, type FeesPageConfig } from "@/components/FeesLandingPage";
import { PRICING_PLANS, TRIAL_OFFER } from "@/lib/academyFacts";

export const revalidate = false;

const config: FeesPageConfig = {
  path: "/online-quran-classes-uk-fees",
  countryName: "the UK",
  formCountry: "United Kingdom",
  currency: "GBP",
  currencyName: "pound",
  locationPath: "/locations/online-quran-classes-uk",
  locationLabel: "online Quran classes in the UK",
  metaTitle: `Online Quran Classes UK Fees: From $${PRICING_PLANS[0].monthlyPriceUsd}/Month (in £) | NoorPath`,
  metaDescription: `What online Quran classes cost for UK families: 1-to-1 plans from $${PRICING_PLANS[0].monthlyPriceUsd}/month with approximate £ amounts, sibling discounts and a 7-day refund. ${TRIAL_OFFER}, no card.`,
  h1: "Online Quran Classes UK: Fees and Plans",
  intro: `Live one-to-one Quran lessons for UK children and adults, from $${PRICING_PLANS[0].monthlyPriceUsd} a month. See what each plan costs in pounds, what you get, and how to start with free trial sessions first.`,
  quickAnswer: `NoorPath plans for UK families start at $${PRICING_PLANS[0].monthlyPriceUsd} a month (US dollars; see the plan cards below for the approximate pound amount) for one live 1-to-1 lesson a week. Standard is $${PRICING_PLANS[1].monthlyPriceUsd} for two lessons a week and Intensive is $${PRICING_PLANS[2].monthlyPriceUsd} for four. Plans are billed in US dollars, siblings are discounted, and you start with ${TRIAL_OFFER} before paying.`,
  paymentNote:
    "NoorPath publishes and bills its plans in US dollars. If your UK card or bank account is in pounds, your bank or card provider converts the charge at its own rate and may add a foreign-transaction fee. The pound amounts on this page are approximate and are for budgeting only. Check the exact amount your bank shows at payment, and ask your card issuer about its foreign-transaction charges before enrolling.",
  costFactors: [
    {
      title: "Lesson length and lessons per month",
      text: `A lower headline fee can hide shorter or fewer lessons. NoorPath's Starter plan is ${PRICING_PLANS[0].sessionsPerMonth} lessons of ${PRICING_PLANS[0].sessionMinutes} minutes a month; Standard is ${PRICING_PLANS[1].sessionsPerMonth} lessons of ${PRICING_PLANS[1].sessionMinutes} minutes; Intensive is ${PRICING_PLANS[2].sessionsPerMonth} lessons of ${PRICING_PLANS[2].sessionMinutes} minutes. Compare the cost per lesson, not just the monthly figure.`,
    },
    {
      title: "One-to-one or group",
      text: "Many mosque and madrasah classes teach groups, which suits some children well. A one-to-one lesson gives your child the tutor's full attention and a pace set by the learner. Make sure you are comparing like with like.",
    },
    {
      title: "Tutor credentials",
      text: "Ask to see the tutor's Ijazah or teaching certificate before you commit. Every NoorPath tutor holds an Ijazah or a Quran teaching certificate, and parents can ask to see it.",
    },
    {
      title: "School-week timing",
      text: "Most UK families need slots after school or at weekends. Because lessons are online, there is no travel time to add to the evening. Times are confirmed in UK time after your request and depend on tutor availability.",
    },
    {
      title: "Travel and time saved",
      text: "A local in-person class often adds a school-run and travel on top of the fee. An online lesson happens at home, so that cost in time and fuel disappears.",
    },
  ],
  faqs: [
    {
      q: "How much do online Quran classes cost in the UK?",
      a: `With NoorPath, online Quran classes for UK families start at $${PRICING_PLANS[0].monthlyPriceUsd} a month for one live one-to-one ${PRICING_PLANS[0].sessionMinutes}-minute lesson a week. Standard is $${PRICING_PLANS[1].monthlyPriceUsd} a month and Intensive is $${PRICING_PLANS[2].monthlyPriceUsd} a month. Plans are billed in US dollars, so the pound amount depends on your bank's rate.`,
    },
    {
      q: "Is it cheaper than a local in-person tutor?",
      a: "Prices vary a lot between tutors and areas, so check what you are quoted for lesson length and number of lessons. With online lessons there is no travel, and NoorPath publishes every plan price so you can compare per lesson.",
    },
    {
      q: "Do you charge in pounds?",
      a: "No. Plans are billed in US dollars. Your bank or card provider converts the charge into pounds at its own rate and may add a fee. The pound figures on this page are approximate.",
    },
    {
      q: "Are there family discounts for UK siblings?",
      a: "Yes: 15% off for 2 siblings, 20% off for 3 siblings and 25% off for 4 or more siblings. Contact NoorPath to confirm the applicable plan.",
    },
    {
      q: "What times can my child have lessons in the UK?",
      a: "Most UK families ask for weekday slots after school or weekend mornings. Times are agreed in UK time (GMT or BST) and confirmed after your request, subject to tutor availability.",
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
