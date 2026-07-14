import {
  BASE_URL as ACADEMY_BASE_URL,
  CONTACT,
  GOOGLE_BUSINESS_URL,
  TRUSTPILOT,
} from "@/lib/academyFacts";

export const BASE_URL = ACADEMY_BASE_URL;
export const ORGANIZATION_ID = `${BASE_URL}/#organization`;
export const WEBSITE_ID = `${BASE_URL}/#website`;

/** Reference global org from page-level Service/Course schema */
export const ORGANIZATION_REF = { "@id": ORGANIZATION_ID };

export function getOrganizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "EducationalOrganization",
        "@id": ORGANIZATION_ID,
        name: "NoorPath Academy",
        alternateName: ["NoorPath Online Quran Academy", "NoorPath Quran School"],
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
          "NoorPath Academy offers live one-to-one online Quran classes for kids and adults, including Qaida, Tajweed, Hifz, Arabic and Islamic studies.",
        areaServed: "Worldwide",
        priceRange: "$$",
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
        ],
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Online Quran & Islamic Courses",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Course",
                name: "Learn Quran Online",
                description: "Live one-to-one online Quran classes for kids and adults covering Noorani Qaida, Tajweed, Hifz and Arabic, with a free trial request.",
                provider: { "@type": "Organization", name: "NoorPath Academy", "@id": ORGANIZATION_ID },
                url: `${BASE_URL}/learn-quran-online`,
                courseMode: "online",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Course",
                name: "Noorani Qaida Online",
                description: "Online Noorani Qaida course for complete beginners — Arabic alphabet, vowels, pronunciation and letter joining. Ages 4 and up.",
                provider: { "@type": "Organization", name: "NoorPath Academy", "@id": ORGANIZATION_ID },
                url: `${BASE_URL}/courses/noorani-qaida-online`,
                courseMode: "online",
                educationalLevel: "Beginner",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Course",
                name: "Tajweed Classes Online",
                description: "Online Tajweed lessons covering Makharij, Madd, Ghunna and Qalqalah with live recitation correction.",
                provider: { "@type": "Organization", name: "NoorPath Academy", "@id": ORGANIZATION_ID },
                url: `${BASE_URL}/learn-tajweed-online`,
                courseMode: "online",
                educationalLevel: "Beginner to Advanced",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Course",
                name: "Hifz Program Online",
                description: "Online Quran memorization lessons for kids and adults using a structured revision approach.",
                provider: { "@type": "Organization", name: "NoorPath Academy", "@id": ORGANIZATION_ID },
                url: `${BASE_URL}/hifz-quran-online`,
                courseMode: "online",
                educationalLevel: "Intermediate to Advanced",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Course",
                name: "Quran Classes for Kids",
                description: "Online Quran classes for children ages 4–12 covering Noorani Qaida, Quran reading, Tajweed and daily duas.",
                provider: { "@type": "Organization", name: "NoorPath Academy", "@id": ORGANIZATION_ID },
                url: `${BASE_URL}/online-quran-classes-for-kids`,
                courseMode: "online",
                typicalAgeRange: "4-12",
                educationalLevel: "Beginner",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Course",
                name: "Arabic Language Online",
                description: "Learn Quranic Arabic and Modern Standard Arabic online — grammar, vocabulary, and understanding the Quran in its original language.",
                provider: { "@type": "Organization", name: "NoorPath Academy", "@id": ORGANIZATION_ID },
                url: `${BASE_URL}/courses/arabic-language-online`,
                courseMode: "online",
                educationalLevel: "Beginner to Advanced",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Course",
                name: "Islamic Studies Online",
                description: "Comprehensive Islamic studies online — Fiqh, Aqeedah, Seerah, Islamic history and character development for all ages.",
                provider: { "@type": "Organization", name: "NoorPath Academy", "@id": ORGANIZATION_ID },
                url: `${BASE_URL}/courses/islamic-studies-online`,
                courseMode: "online",
                educationalLevel: "All levels",
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
