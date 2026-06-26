import type { Location } from "./locations";

export function getLocationFaqs(loc: Location) {
  return [
    {
      q: `How do online Quran classes work in ${loc.country}?`,
      a: `NoorPath Academy offers live 1-on-1 online Quran classes for families in ${loc.country} via Zoom or Google Meet. You choose a weekly schedule in ${loc.timezone}, get a certified tutor matched to your level, and attend private sessions from home. A free 30-minute trial is available with no credit card required.`,
    },
    {
      q: `What is the best online Quran academy in ${loc.country}?`,
      a: `NoorPath Academy is trusted by Muslim families across ${loc.country} including ${loc.cities.split(",")[0].trim()} and beyond. With Ijazah-certified tutors, flexible ${loc.timezone} scheduling, family plans, and a 4.9/5 rating, NoorPath is a top choice for online Quran learning in ${loc.country}.`,
    },
    {
      q: `Can kids learn Quran online in ${loc.country}?`,
      a: `Yes. NoorPath offers specialised online Quran classes for children aged 4+ in ${loc.country}. Courses include Noorani Qaida, Tajweed, Hifz, daily duas, and Islamic studies — all taught 1-on-1 by patient, certified tutors with weekly parent progress reports.`,
    },
    {
      q: `Are female Quran teachers available in ${loc.country}?`,
      a: `Absolutely. NoorPath Academy has certified female Quran teachers (Hafiza) available for sisters and daughters in ${loc.country}. Request a female tutor when booking your free trial class.`,
    },
    {
      q: `How much do online Quran classes cost in ${loc.country}?`,
      a: `Plans start from $29/month with a free 30-minute trial. NoorPath offers Starter, Standard, and Intensive plans plus family discounts for 2+ siblings. Book a free trial to discuss pricing for your ${loc.timezone} schedule.`,
    },
  ];
}

export function getLocationSeoParagraphs(loc: Location): string[] {
  const primaryCity = loc.cities.split(",")[0].trim();
  return [
    `Looking for the best online Quran classes in ${loc.country}? NoorPath Academy delivers live, certified 1-on-1 Quran tutoring to Muslim families in ${primaryCity}, ${loc.cities.split(",").slice(1, 3).map((c) => c.trim()).join(", ")}, and every city nationwide. Whether you want to learn Quran online from scratch, improve Tajweed, start Hifz, or enrol your children, our tutors adapt to your goals and ${loc.timezone} timezone.`,
    `Our online Quran academy serves ${loc.population} across ${loc.country} with Noorani Qaida for beginners, Tajweed classes, Quran memorization (Hifz), Arabic language, Islamic studies, and daily duas for kids. Every tutor holds Ijazah certification or Al-Azhar qualifications. Classes run morning, afternoon, and evening in ${loc.timezone} — perfect for school-age children, working adults, and busy families.`,
    `Join 12,000+ students worldwide who trust NoorPath for online Quran learning. Families in ${loc.country} choose us for flexible scheduling, female tutor options, family sibling discounts, and a completely free 30-minute trial with no payment required. Start learning Quran online today from the comfort of your home in ${loc.country}.`,
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
    `best online quran classes ${country}`,
    `islamic education online ${country}`,
    `noorani qaida online ${country}`,
    `tajweed classes online ${country}`,
    `hifz program online ${country}`,
    `quran classes for kids ${country}`,
    `female quran teacher ${country}`,
    `online quran learning ${country}`,
  ];
}
