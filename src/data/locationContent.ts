import type { Location } from "./locations";
import { FAMILY_DISCOUNTS, PRICING_PLANS, TRIAL } from "@/lib/academyFacts";
import { getCurrencyNote, getPriorityContent, getPriorityMarket } from "@/lib/geoSeo";

const starterPlan = PRICING_PLANS[0];
const familyDiscountSummary = FAMILY_DISCOUNTS.map(
  ({ siblings, discountPercent }) => `${siblings}: ${discountPercent}%`
).join(", ");

/** Additive country-specific FAQs prepended for selected expansion markets. */
const EXTRA_LOCATION_FAQS: Record<string, Array<{ q: string; a: string }>> = {
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
  "online-quran-classes-ireland": [
    {
      q: "Are there online Quran classes in Dublin?",
      a: "Yes. Families in Dublin can request live one-to-one online Quran and Noorani Qaida lessons with GMT or IST scheduling. NoorPath is an online academy (not a Dublin campus). Suitability and recurring times are confirmed after a free trial and tutor matching.",
    },
    {
      q: "Can I find a female Quran teacher in Ireland online?",
      a: "You can request a female Quran teacher for a learner in Ireland. Female tutor and GMT/IST availability are subject to matching and confirmed after your request. See also the female tutor request page for how preferences are handled.",
    },
    {
      q: "What times work for after-school Quran classes in Ireland?",
      a: "Many families request after-school evenings or weekend mornings in GMT or IST. Exact recurring times depend on tutor matching and are confirmed after your request.",
    },
  ],
  "online-quran-classes-new-zealand": [
    {
      q: "Are online Quran classes suitable for kids in New Zealand?",
      a: "Yes. Live one-to-one online Quran and Noorani Qaida lessons can suit New Zealand families who want structured home learning after school in NZST or NZDT. NoorPath is an online academy (not a New Zealand campus). Suitability is confirmed through a free trial, language preference where available, and a recurring time confirmed after tutor matching.",
    },
    {
      q: "Is there a good Quran teacher option if there's no mosque near us in New Zealand?",
      a: "When a nearby mosque or weekend madrasah is not available, many New Zealand families use live online 1-to-1 tutoring so a child still receives regular listening and correction. Request a tutor matched to the learner’s level and NZST/NZDT window; availability is confirmed after your request. Keep young learners in a family space and use free Interactive Noorani Qaida practice between lessons.",
    },
    {
      q: "What class times work for online Quran classes in New Zealand?",
      a: "Many families request before-school mornings, after-school evenings or weekend mornings in NZST or NZDT (noting daylight saving). Exact recurring times depend on tutor matching and are confirmed after your request — not a fixed New Zealand timetable published in advance.",
    },
    {
      q: "How do NZST and NZDT clock changes affect a recurring lesson?",
      a: "Ask for the recurring slot to be recorded in New Zealand local time so the hour on your clock stays the same when NZ moves between NZST and NZDT. Confirm what happens on the last Sunday in September and the first Sunday in April, and when the tutor’s own clocks change.",
    },
    {
      q: "Can we request a female Quran teacher in New Zealand?",
      a: "Yes. State a female tutor preference when booking. Female-tutor and NZST/NZDT availability are confirmed after matching. Offering a second time window often speeds placement across the long time difference.",
    },
    {
      q: "How should NCEA exam weeks affect Quran lesson frequency?",
      a: "For Years 11–13, ask for a lighter Term 4 load rather than stopping altogether. One shorter weekly session can keep recitation from going cold while protecting exam focus. Exact make-up and pause rules are confirmed with your matched tutor.",
    },
    {
      q: "Can Auckland and smaller-town NZ families use the same online Quran service?",
      a: "Yes. Lessons are online, so Auckland, Wellington, Christchurch, Hamilton and families further from Islamic centres can request the same trial and matching process. Share your city and preferred local times when you book.",
    },
    {
      q: "Is there a Quran teacher for kids in Auckland through NoorPath?",
      a: "Auckland families can request a live online Quran teacher for kids with NZST/NZDT matching for Qaida, Tajweed or Hifz. Availability is confirmed after your request. Classes are online — NoorPath does not claim an Auckland branch.",
    },
    {
      q: "How should New Zealand families budget USD fees in NZD?",
      a: `Plans are published and charged in USD (for example the ${starterPlan.name} plan at $${starterPlan.monthlyPriceUsd} USD). Convert to NZD for household planning using your bank’s rate; NoorPath does not publish a fixed NZD price list. ${getCurrencyNote("online-quran-classes-new-zealand")}`,
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
    {
      q: "Do you offer Quran classes in Stockholm online?",
      a: "Yes. Stockholm families can request live one-to-one online Quran classes with CET/CEST after-school or evening windows. Share preferred weekdays when booking; tutor availability is confirmed after matching. NoorPath does not operate a Stockholm campus.",
    },
  ],
  "online-quran-classes-norway": [
    {
      q: "Are online Quran classes suitable for Muslim families in Norway?",
      a: "Yes. Families in Oslo, Bergen and elsewhere can request live one-to-one online Quran and Noorani Qaida lessons with CET/CEST after-school windows. NoorPath teaches online only (not a Norwegian campus). Suitability is confirmed through a free trial and tutor matching.",
    },
    {
      q: "Can I request online Tajweed classes in Norway?",
      a: "Yes when the learner can already read Arabic letters. Beginners usually start with Noorani Qaida first. Request Tajweed-focused matching and confirm availability after your request. See also the Tajweed course page for curriculum scope.",
    },
    {
      q: "Can we request a female Quran teacher for a child in Oslo?",
      a: "You can request a female tutor for a learner in Norway, including Oslo. Female tutor and CET/CEST availability are confirmed after matching. Prefer the female tutor request page for how preferences are handled.",
    },
    {
      q: "What times work for after-school Quran classes in Norway?",
      a: "Many families request roughly 4 PM–9 PM CET/CEST after school, noting shorter winter daylight. Exact recurring times are confirmed after tutor matching.",
    },
  ],
  "online-quran-classes-finland": [
    {
      q: "Are kids Quran classes available online in Finland?",
      a: "Yes. Families in Helsinki, Espoo and other Finnish cities can request live one-to-one online Quran classes for children with EET/EEST scheduling. NoorPath is an online academy (not a Finnish campus). Availability is confirmed after matching.",
    },
    {
      q: "What timezone do online Quran classes use for Finland?",
      a: "Request lessons in EET or EEST (Finnish local time). Share school finish times and preferred evenings; the recurring slot is confirmed after tutor matching.",
    },
    {
      q: "Can beginners start Noorani Qaida online from Finland?",
      a: "Yes. Complete beginners typically start with Noorani Qaida. Families can also use the Interactive Noorani Qaida hub for free recognition practice between live lessons.",
    },
  ],
  "online-quran-classes-denmark": [
    {
      q: "Are online Quran classes suitable for families in Denmark?",
      a: "Yes. Copenhagen, Aarhus and other Danish households can request live one-to-one online Quran lessons with CET/CEST matching. NoorPath teaches online only (not a Danish campus).",
    },
    {
      q: "Do you offer weekend Quran classes in Denmark?",
      a: "Weekend mornings or afternoons in CET/CEST can be requested when weekdays are full. Exact availability is confirmed after tutor matching — not a fixed Denmark-wide weekend timetable.",
    },
    {
      q: "Can we request a female Quran teacher in Denmark?",
      a: "Yes. State a female tutor preference when booking. Availability is confirmed after your request. See the female tutor request page for how matching works.",
    },
  ],
  // ── Phase B: template-heavy Asia / Africa hubs (unique EXTRA FAQs only) ──
  "online-quran-classes-india": [
    {
      q: "Are online Quran classes suitable for Muslim families in India?",
      a: "Yes. Families in Hyderabad, Mumbai, Delhi, Bengaluru, Lucknow and elsewhere can request live one-to-one online Quran and Noorani Qaida lessons with IST scheduling. NoorPath teaches online only (not an Indian campus). Suitability is confirmed through a free trial and tutor matching.",
    },
    {
      q: "What times work for after-school Quran classes in India?",
      a: "Many families request late afternoon or evening IST windows after school, plus weekend mornings. Exact recurring times depend on tutor matching and are confirmed after your request — not a fixed India-wide timetable.",
    },
    {
      q: "Can we request a female Quran teacher for a daughter or sister in India?",
      a: "Yes. State a female tutor preference when booking. Female-tutor and IST availability are confirmed after matching. See the female Quran teacher page for how preferences are handled — NoorPath does not claim a local campus in every city.",
    },
    {
      q: "Can siblings in India share one plan or need separate slots?",
      a: "Each learner usually needs their own matched lesson time so pacing and attention stay appropriate. You can request nearby IST windows for siblings; published family discounts apply to eligible sibling enrolments on the pricing page. Exact availability is confirmed after matching.",
    },
    {
      q: "How should we handle board exam weeks and school exams?",
      a: "Tell the academy when exam blocks are coming so temporary lighter loads or pauses can be discussed. A protected habit that survives exam season is more useful than an overloaded timetable that collapses every term. Exact make-up rules are confirmed with your matched tutor.",
    },
    {
      q: "Can adult beginners in India start Noorani Qaida online?",
      a: "Yes. Adult beginners typically start with Noorani Qaida and progress by assessment into reading, Tajweed or further goals. Request an IST window that fits work hours; suitability is confirmed through a free trial.",
    },
    {
      q: "Do weekend IST slots work if weekday evenings are busy?",
      a: "Yes — many households request Saturday or Sunday morning IST windows when weekday evenings are crowded. Exact weekend availability still depends on tutor matching and is confirmed after your request.",
    },
    {
      q: "Can we request Urdu or English instruction for a child in India?",
      a: "You can state a preferred language of instruction when booking. Matching depends on available tutors and is confirmed after your request. Placement should still follow the learner’s reading level, not language preference alone.",
    },
    {
      q: "What if we share one device or a busy home in India?",
      a: "Choose a quiet corner and a device that will not be needed by someone else during the lesson. Headphones help in shared flats. Confirm camera and chat household rules before the first session, and keep young learners where an adult can observe.",
    },
    {
      q: "How should Indian families budget USD fees in INR?",
      a: `Plans are published and charged in USD (for example the ${starterPlan.name} plan at $${starterPlan.monthlyPriceUsd} USD). Convert to INR for household planning using your bank’s rate; NoorPath does not publish a fixed INR price list. ${getCurrencyNote("online-quran-classes-india")}`,
    },
  ],
  "online-quran-classes-pakistan": [
    {
      q: "Are online Quran classes suitable for families in Pakistan?",
      a: "Yes. Households in Karachi, Lahore, Islamabad, Rawalpindi and Peshawar can request live one-to-one online Quran lessons with PKT matching. Online tutoring can reduce travel while keeping regular correction. NoorPath is an online academy (not a Pakistan campus).",
    },
    {
      q: "What PKT windows are commonly requested?",
      a: "Families often request morning, after-school or evening PKT slots, including weekends. Exact availability is confirmed after tutor matching.",
    },
    {
      q: "Can beginners start Noorani Qaida online from Pakistan?",
      a: "Yes. Complete beginners typically start with Noorani Qaida. Between live lessons, families may use the Interactive Noorani Qaida hub for free recognition practice — soft support only; live teachers remain the correction path for uncertain sounds.",
    },
    {
      q: "Can we request a female Quran teacher in Pakistan?",
      a: "Yes. State a female tutor preference when booking. Female tutor and PKT availability are confirmed after matching. See the female tutor request page for how preferences are handled.",
    },
  ],
  "online-quran-classes-malaysia": [
    {
      q: "Are online Quran classes suitable for Malaysian families?",
      a: "Yes. Families in Kuala Lumpur, Penang, Johor Bahru, Ipoh and Shah Alam can request live one-to-one online Quran lessons with MYT scheduling. Online tutoring can add personalised Tajweed or Hifz support alongside school. NoorPath teaches online only (not a Malaysian campus).",
    },
    {
      q: "What times work after school in Malaysia?",
      a: "Many families request MYT evenings or weekend mornings after school and other activities. Exact recurring times are confirmed after tutor matching.",
    },
    {
      q: "How should Malaysian families read USD prices in ringgit (MYR)?",
      a: `Plans are published and charged in USD (for example the ${starterPlan.name} plan at $${starterPlan.monthlyPriceUsd} USD). Convert to MYR for budgeting; NoorPath does not publish a fixed MYR price list. ${getCurrencyNote("online-quran-classes-malaysia")}`,
    },
  ],
  "online-quran-classes-bangladesh": [
    {
      q: "Are online Quran classes suitable for families in Bangladesh?",
      a: "Yes. Families in Dhaka, Chittagong, Sylhet, Rajshahi and Khulna can request live one-to-one online Quran lessons with BST (UTC+6) matching. Online sessions can supplement madrasa or school learning with personalised Tajweed or Hifz support. NoorPath teaches online only.",
    },
    {
      q: "Can Bangla-speaking families request language support?",
      a: "You can note Bangla or English preference when booking. Available language support depends on tutor matching and is confirmed after your request.",
    },
    {
      q: "What times work for online Quran classes in Bangladesh?",
      a: "Request after-school or evening BST windows, or weekend mornings. Exact recurring times are confirmed after tutor matching.",
    },
  ],
  "online-quran-classes-indonesia": [
    {
      q: "Are online Quran classes suitable for Indonesian families?",
      a: "Yes. Families in Jakarta, Surabaya, Bandung, Medan and Bekasi can request live one-to-one online Quran lessons. Share whether you need WIB or WITA local time when booking. NoorPath teaches online only (not an Indonesian campus).",
    },
    {
      q: "How do WIB and WITA affect scheduling?",
      a: "Indonesia spans multiple time zones. State your city and preferred local clock time (WIB UTC+7 or WITA UTC+8) so matching is not ambiguous. Exact recurring times are confirmed after your request.",
    },
    {
      q: "Can we request Tajweed refinement online from Indonesia?",
      a: "Yes when the learner can already read Arabic letters continuously. Beginners usually start with Noorani Qaida first. Request Tajweed-focused matching; availability is confirmed after your request.",
    },
  ],
  "online-quran-classes-singapore": [
    {
      q: "Are online Quran classes suitable for Singaporean Muslim families?",
      a: "Yes. Singapore families can request live one-to-one online Quran lessons with SGT scheduling around school and weekend commitments. NoorPath teaches online only (not a Singapore campus).",
    },
    {
      q: "What SGT times typically work after school?",
      a: "Many families request weekday evenings or weekend mornings in SGT. Exact availability is confirmed after tutor matching — not a fixed Singapore timetable published in advance.",
    },
    {
      q: "How should Singapore families budget USD fees in SGD?",
      a: `Plans are published and charged in USD (for example the ${starterPlan.name} plan at $${starterPlan.monthlyPriceUsd} USD). Convert to SGD for household planning; NoorPath does not publish a fixed SGD price list. ${getCurrencyNote("online-quran-classes-singapore")}`,
    },
  ],
  "online-quran-classes-turkey": [
    {
      q: "Are online Quran classes suitable for families in Turkey?",
      a: "Yes. Households in Istanbul, Ankara, Izmir, Bursa and Antalya — including expats — can request live one-to-one online Quran lessons with TRT matching. NoorPath teaches online only (not a Turkish campus).",
    },
    {
      q: "Can we request Arabic-focused Quran instruction in Turkey?",
      a: "You can request Arabic or English instruction preferences when booking. Matching depends on available tutors and is confirmed after your request.",
    },
    {
      q: "What TRT windows are commonly requested?",
      a: "Many families request after-school or evening TRT slots, with weekend options. Exact recurring times are confirmed after tutor matching.",
    },
  ],
  "online-quran-classes-nigeria": [
    {
      q: "Are online Quran classes suitable for Nigerian Muslim families?",
      a: "Yes. Families in Lagos, Abuja, Port Harcourt, Kano, Ibadan and Kaduna can request live one-to-one online Quran lessons with WAT matching. NoorPath teaches online only (not a Nigerian campus). Suitability is confirmed through a free trial and tutor matching.",
    },
    {
      q: "What WAT times work after school in Nigeria?",
      a: "Many families request weekday evenings or weekend mornings in WAT. Exact recurring times depend on tutor matching and are confirmed after your request — not a fixed Nigeria-wide timetable.",
    },
    {
      q: "Can we request a female Quran teacher in Nigeria?",
      a: "Yes. State a female tutor preference when booking. Female tutor and WAT availability are confirmed after matching. See the female Quran teacher page for how preferences are handled.",
    },
    {
      q: "Can siblings in Nigeria share one plan or need separate slots?",
      a: "Each learner usually needs their own matched lesson time so pacing and attention stay appropriate. You can request nearby WAT windows for siblings; published family discounts apply to eligible sibling enrolments on the pricing page.",
    },
    {
      q: "What if power or internet is unreliable during WAT evenings?",
      a: "Share realistic connectivity constraints when you book so matching can favour a more reliable window (including weekend mornings). Keep a charged device and a simple backup plan. Exact make-up rules are confirmed with your matched tutor.",
    },
    {
      q: "Can adult beginners in Nigeria start Noorani Qaida online?",
      a: "Yes. Adult beginners typically start with Noorani Qaida and progress by assessment into reading, Tajweed or further goals. Request a WAT window that fits work hours; suitability is confirmed through a free trial.",
    },
    {
      q: "Do weekend WAT slots work if weekday evenings are busy?",
      a: "Yes — many households request Saturday or Sunday morning WAT windows when weekday evenings are crowded. Exact weekend availability still depends on tutor matching.",
    },
    {
      q: "What if we share one device or a busy home in Nigeria?",
      a: "Choose a quiet corner and a device that will not be needed by someone else during the lesson. Headphones help in shared homes. Confirm camera and chat household rules before the first session, and keep young learners where an adult can observe.",
    },
    {
      q: "How should Nigerian families budget USD fees in NGN?",
      a: `Plans are published and charged in USD (for example the ${starterPlan.name} plan at $${starterPlan.monthlyPriceUsd} USD). Convert to NGN for household planning using your bank’s rate; NoorPath does not publish a fixed naira price list. ${getCurrencyNote("online-quran-classes-nigeria")}`,
    },
  ],
  "online-quran-classes-australia": [
    {
      q: "Are online Quran classes suitable for Australian families?",
      a: "Yes. Families in Sydney, Melbourne, Brisbane, Perth, Adelaide and elsewhere can request live one-to-one online Quran and Noorani Qaida lessons with state-aware AEST/AEDT/ACST/ACDT/AWST scheduling. NoorPath teaches online only (not an Australian campus). Suitability is confirmed through a free trial and tutor matching.",
    },
    {
      q: "How do Australian time zones and daylight saving affect booking?",
      a: "Book against the learner’s exact state or territory. Eastern, central and western labels are not interchangeable, and daylight saving is observed in some jurisdictions but not others. Confirm that recurring lessons preserve the learner’s local wall-clock time around seasonal changes.",
    },
    {
      q: "What after-school times work for kids in Australia?",
      a: "Many families request after-school evenings or weekend mornings in their state time zone. Leave a buffer after school for travel, snacks and homework. Exact recurring times depend on tutor matching.",
    },
    {
      q: "Can we request a female Quran teacher in Australia?",
      a: "Yes. State a female tutor preference when booking. Female-tutor and local-time availability are confirmed after matching.",
    },
    {
      q: "Can siblings in Australia share nearby lesson times?",
      a: "Each learner usually needs their own matched slot. You can request consecutive or nearby windows for siblings; published family discounts apply to eligible enrolments on the pricing page.",
    },
    {
      q: "Can adult beginners in Australia start Noorani Qaida online?",
      a: "Yes. Adult beginners typically start with Noorani Qaida and progress by assessment. Request a local-time window that fits work hours; suitability is confirmed through a free trial.",
    },
    {
      q: "Do Sydney and Melbourne families use the same online service?",
      a: "Yes. Lessons are online, so Sydney, Melbourne and other cities use the same trial and matching process. Share your city or state so the booking uses the correct time zone and daylight-saving rules.",
    },
    {
      q: "How should Australian families budget USD fees in AUD?",
      a: `Plans are published and charged in USD (for example the ${starterPlan.name} plan at $${starterPlan.monthlyPriceUsd} USD). Convert to AUD for household planning using your bank’s rate; NoorPath does not publish a fixed AUD price list. ${getCurrencyNote("online-quran-classes-australia")}`,
    },
  ],
  "online-quran-classes-south-africa": [
    {
      q: "Are online Quran classes suitable for South African Muslim families?",
      a: "Yes. Families in Johannesburg, Cape Town, Durban, Pretoria and Port Elizabeth can request live one-to-one online Quran lessons with SAST matching. NoorPath teaches online only (not a South African campus).",
    },
    {
      q: "What SAST windows are commonly requested?",
      a: "Many families request after-school evenings or weekend mornings in SAST. Exact recurring times are confirmed after tutor matching.",
    },
    {
      q: "How should South African families budget USD fees in rand (ZAR)?",
      a: `Plans are published and charged in USD (for example the ${starterPlan.name} plan at $${starterPlan.monthlyPriceUsd} USD). Convert to ZAR for budgeting; NoorPath does not publish a fixed ZAR price list. ${getCurrencyNote("online-quran-classes-south-africa")}`,
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
  const extras = EXTRA_LOCATION_FAQS[loc.slug] ?? [];
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
