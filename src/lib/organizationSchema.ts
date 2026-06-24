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
        image: `${BASE_URL}/og-image.svg`,
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
        sameAs: [BASE_URL, "https://wa.me/923124877906", TRUSTPILOT_URL],
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Online Quran & Islamic Courses",
          itemListElement: [
            { "@type": "Offer", itemOffered: { "@type": "Course", name: "Noorani Qaida Online", url: `${BASE_URL}/courses/noorani-qaida-online` } },
            { "@type": "Offer", itemOffered: { "@type": "Course", name: "Tajweed Classes Online", url: `${BASE_URL}/courses/tajweed-classes-online` } },
            { "@type": "Offer", itemOffered: { "@type": "Course", name: "Hifz Program Online", url: `${BASE_URL}/courses/hifz-program-online` } },
            { "@type": "Offer", itemOffered: { "@type": "Course", name: "Quran Classes for Kids", url: `${BASE_URL}/courses/quran-classes-for-kids` } },
            { "@type": "Offer", itemOffered: { "@type": "Course", name: "Arabic Language Online", url: `${BASE_URL}/courses/arabic-language-online` } },
            { "@type": "Offer", itemOffered: { "@type": "Course", name: "Islamic Studies Online", url: `${BASE_URL}/courses/islamic-studies-online` } },
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
