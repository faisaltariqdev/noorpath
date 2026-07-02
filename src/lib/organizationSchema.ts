export const BASE_URL = "https://www.noorpath.online";
export const ORGANIZATION_ID = `${BASE_URL}/#organization`;
export const WEBSITE_ID = `${BASE_URL}/#website`;
export const TRUSTPILOT_URL = "https://www.trustpilot.com/review/noorpath.online";

/** Reference global org from page-level Service/Course schema */
export const ORGANIZATION_REF = { "@id": ORGANIZATION_ID };

export function getOrganizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["EducationalOrganization", "LocalBusiness"],
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
        email: "info@noorpath.online",
        telephone: "+923124877906",
        foundingDate: "2018",
        description:
          "NoorPath Academy offers certified 1-on-1 online Quran classes for kids, adults and families worldwide: Qaida, Tajweed, Hifz, Arabic and Islamic studies.",
        address: {
          "@type": "PostalAddress",
          addressCountry: "PK",
          addressLocality: "Online",
        },
        areaServed: "Worldwide",
        priceRange: "$$",
        numberOfEmployees: { "@type": "QuantitativeValue", value: 50 },
        contactPoint: {
          "@type": "ContactPoint",
          telephone: "+923124877906",
          email: "info@noorpath.online",
          contactType: "customer service",
          availableLanguage: ["English", "Arabic", "Urdu"],
        },
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "4.9",
          reviewCount: "2400",
          bestRating: "5",
          worstRating: "1",
        },
        sameAs: [
          BASE_URL,
          "https://wa.me/923124877906",
          TRUSTPILOT_URL,
          "https://www.instagram.com/noorpath.online/",
          "https://www.tiktok.com/@noorpathacademy",
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
                description: "Live 1-on-1 online Quran classes for kids and adults — Noorani Qaida, Tajweed, Hifz, Arabic. Certified Ijazah tutors. Free 30-min trial.",
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
                description: "Online Tajweed course with Ijazah-certified tutors. Learn all major rules — Makharij, Madd, Ghunna, Qalqalah — with live recitation correction.",
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
                description: "Structured online Quran memorization program with certified Huffaz tutors. Sabaq-Sabqi-Manzil revision system for kids and adults.",
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
                description: "Online Quran classes for children ages 4–12. Child-specialist certified tutors, Noorani Qaida, daily duas, and weekly parent progress reports.",
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
            urlTemplate: `${BASE_URL}/online-quran-classes-for-kids`,
          },
          "query-input": "required name=search_term_string",
        },
      },
    ],
  };
}
