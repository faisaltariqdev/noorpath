import { PRICING_PLANS } from "@/lib/academyFacts";
import { ORGANIZATION_REF } from "@/lib/organizationSchema";

export interface CourseDefinition {
  name: string;
  description: string;
  url: string;
}

/** Core course categories that map to the published pricing plans. */
export const PRICED_COURSE_CATEGORIES: CourseDefinition[] = [
  {
    name: "Noorani Qaida Online",
    description:
      "Learn the Arabic alphabet, correct pronunciation, and Quranic reading foundations through live one-to-one online lessons.",
    url: "https://www.noorpath.online/courses/noorani-qaida-online",
  },
  {
    name: "Tajweed Online",
    description:
      "Study and practise Tajweed rules with live recitation correction and feedback from a qualified Quran tutor.",
    url: "https://www.noorpath.online/learn-tajweed-online",
  },
  {
    name: "Hifz Online",
    description:
      "Structured Quran memorisation programme with new lesson planning, ongoing revision, and one-to-one tutor support.",
    url: "https://www.noorpath.online/hifz-quran-online",
  },
  {
    name: "Online Quran Classes for Kids",
    description:
      "Live one-to-one Quran classes for children ages 4–12 covering Noorani Qaida, Quran reading, Tajweed, and Hifz.",
    url: "https://www.noorpath.online/online-quran-classes-for-kids",
  },
];

/**
 * Build a schema.org Course node for a single course category, with a
 * CourseInstance and Offer derived from each published pricing plan.
 * This keeps SERP pricing/workload in sync with /pricing.
 */
export function buildCourseWithPricingJsonLd(course: CourseDefinition) {
  return {
    "@type": "Course",
    "@id": `${course.url}#course`,
    name: course.name,
    description: course.description,
    provider: ORGANIZATION_REF,
    url: course.url,
    courseMode: "online",
    category: "Quran Education",
    hasCourseInstance: PRICING_PLANS.map((plan) => ({
      "@type": "CourseInstance",
      name: `${course.name} — ${plan.name}`,
      description: `${plan.sessionsPerWeek}x ${plan.sessionMinutes}-minute live one-to-one sessions per week.`,
      courseMode: "online",
      courseWorkload: `PT${plan.sessionMinutes}M`,
      instructor: ORGANIZATION_REF,
      offers: {
        "@type": "Offer",
        name: `${plan.name} Plan`,
        price: String(plan.monthlyPriceUsd),
        priceCurrency: "USD",
        availability: "https://schema.org/InStock",
        url: "https://www.noorpath.online/pricing",
        category: "Quran Education",
      },
    })),
    offers: PRICING_PLANS.map((plan) => ({
      "@type": "Offer",
      name: `${plan.name} Plan`,
      price: String(plan.monthlyPriceUsd),
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
      url: "https://www.noorpath.online/pricing",
      category: "Quran Education",
    })),
  };
}

/**
 * Build an ItemList of priced courses for a given page URL.
 * Use on /pricing and other hub pages that list multiple courses.
 */
export function buildCourseItemListJsonLd(listUrl: string, courses: CourseDefinition[]) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "@id": `${listUrl}#courselist`,
    name: "NoorPath Academy Online Quran Courses",
    description:
      "Live one-to-one online Quran courses with published monthly pricing plans.",
    url: listUrl,
    numberOfItems: courses.length,
    itemListElement: courses.map((course, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: buildCourseWithPricingJsonLd(course),
    })),
  };
}
