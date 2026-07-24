import {
  BASE_URL as ACADEMY_BASE_URL,
  CONTACT,
  GOOGLE_BUSINESS_URL,
  TRUSTPILOT,
} from "@/lib/academyFacts";
import {
  featuredTrustpilotReviews,
  getTrustpilotAggregateFromReviews,
} from "@/data/trustpilotReviews";

export const BASE_URL = ACADEMY_BASE_URL;
export const ORGANIZATION_ID = `${BASE_URL}/#organization`;
export const WEBSITE_ID = `${BASE_URL}/#website`;

/** Reference global org from page-level Service/Course schema */
export const ORGANIZATION_REF = { "@id": ORGANIZATION_ID };

const PRIORITY_COUNTRIES = [
  "United Kingdom",
  "United States",
  "United Arab Emirates",
  "Canada",
  "Australia",
  "Germany",
  "Qatar",
  "Kuwait",
  "Saudi Arabia",
] as const;

export function getOrganizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "EducationalOrganization",
        "@id": ORGANIZATION_ID,
        name: "NoorPath Academy",
        alternateName: "NoorPath Online Quran Academy",
        url: BASE_URL,
        logo: {
          "@type": "ImageObject",
          url: `${BASE_URL}/favicon.svg`,
          width: 512,
          height: 512,
        },
        image: `${BASE_URL}/og-image.png`,
        email: CONTACT.email,
        telephone: CONTACT.phoneE164,
        description:
          "NoorPath Academy offers live one-to-one online Quran classes for children and adults, including Qaida, Tajweed, Hifz, Arabic and Islamic studies.",
        areaServed: PRIORITY_COUNTRIES.map((name) => ({
          "@type": "Country",
          name,
        })),
        contactPoint: {
          "@type": "ContactPoint",
          telephone: CONTACT.phoneE164,
          email: CONTACT.email,
          contactType: "customer service",
        },
        sameAs: [
          TRUSTPILOT.url,
          GOOGLE_BUSINESS_URL,
          "https://www.instagram.com/noorpath.online/",
          "https://www.tiktok.com/@noorpathacademy",
          "https://www.facebook.com/noorpathquranacademy",
          "https://www.youtube.com/@NoorPath.Online",
        ],
        aggregateRating: (() => {
          const agg = getTrustpilotAggregateFromReviews();
          return {
            "@type": "AggregateRating",
            ratingValue: String(agg.ratingValue),
            reviewCount: agg.reviewCount,
            bestRating: agg.bestRating,
            worstRating: agg.worstRating,
          };
        })(),
        review: featuredTrustpilotReviews.map((r) => ({
          "@type": "Review",
          author: {
            "@type": "Person",
            name: r.name,
          },
          reviewRating: {
            "@type": "Rating",
            ratingValue: r.stars,
            bestRating: 5,
            worstRating: 1,
          },
          name: r.title,
          reviewBody: r.text,
          itemReviewed: { "@id": ORGANIZATION_ID },
        })),
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Online Quran & Islamic Courses",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Course",
                name: "Learn Quran Online",
                description: "Live one-to-one online Quran classes for children and adults, with a free trial request.",
                provider: { "@id": ORGANIZATION_ID },
                url: `${BASE_URL}/learn-quran-online`,
                courseMode: "online",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Course",
                name: "Noorani Qaida Online",
                description: "Online Noorani Qaida lessons for beginners.",
                provider: { "@id": ORGANIZATION_ID },
                url: `${BASE_URL}/courses/noorani-qaida-online`,
                courseMode: "online",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Course",
                name: "Tajweed Classes Online",
                description: "Live online Tajweed lessons with recitation feedback.",
                provider: { "@id": ORGANIZATION_ID },
                url: `${BASE_URL}/learn-tajweed-online`,
                courseMode: "online",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Course",
                name: "Hifz Program Online",
                description: "Online Quran memorisation lessons for children and adults.",
                provider: { "@id": ORGANIZATION_ID },
                url: `${BASE_URL}/hifz-quran-online`,
                courseMode: "online",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Course",
                name: "Quran Classes for Kids",
                description: "Live one-to-one online Quran classes for children.",
                provider: { "@id": ORGANIZATION_ID },
                url: `${BASE_URL}/online-quran-classes-for-kids`,
                courseMode: "online",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Course",
                name: "Arabic Language Online",
                description: "Online Arabic language lessons.",
                provider: { "@id": ORGANIZATION_ID },
                url: `${BASE_URL}/courses/arabic-language-online`,
                courseMode: "online",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Course",
                name: "Islamic Studies Online",
                description: "Online Islamic studies lessons.",
                provider: { "@id": ORGANIZATION_ID },
                url: `${BASE_URL}/courses/islamic-studies-online`,
                courseMode: "online",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Course",
                name: "Daily Duas for Kids",
                description: "Online daily duas lessons for children.",
                provider: { "@id": ORGANIZATION_ID },
                url: `${BASE_URL}/courses/daily-duas-for-kids`,
                courseMode: "online",
              },
            },
          ],
        },
      },
      {
        "@type": "WebSite",
        "@id": WEBSITE_ID,
        url: BASE_URL,
        name: "NoorPath Academy",
        publisher: { "@id": ORGANIZATION_ID },
        potentialAction: {
          "@type": "SearchAction",
          target: {
            "@type": "EntryPoint",
            urlTemplate: `${BASE_URL}/blog?q={search_term_string}`,
          },
          "query-input": "required name=search_term_string",
        },
      },
    ],
  };
}
