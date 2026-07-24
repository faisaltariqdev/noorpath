import type { Metadata } from "next";
import Link from "next/link";
import { CONTACT } from "@/lib/academyFacts";
import { BASE_URL, ORGANIZATION_ID, WEBSITE_ID } from "@/lib/organizationSchema";
import WhatsAppLink from "@/components/WhatsAppLink";

export const revalidate = false;

const pageUrl = `${BASE_URL}/accessibility-statement`;

export const metadata: Metadata = {
  title: "Accessibility Statement",
  description:
    "NoorPath Academy's accessibility statement and contact route for website or online-class access barriers.",
  alternates: { canonical: pageUrl },
  robots: { index: true, follow: true },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": pageUrl,
      url: pageUrl,
      name: "NoorPath Academy Accessibility Statement",
      description:
        "Accessibility information and a route to report access barriers.",
      isPartOf: { "@id": WEBSITE_ID },
      about: { "@id": ORGANIZATION_ID },
      dateModified: "2026-07-15",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
        {
          "@type": "ListItem",
          position: 2,
          name: "Accessibility Statement",
          item: pageUrl,
        },
      ],
    },
  ],
};

export default function AccessibilityStatementPage() {
  const headingStyle = {
    fontFamily: "var(--font-playfair), serif",
    fontSize: "1.2rem",
    marginTop: 28,
    marginBottom: 10,
  };
  const paragraphStyle = {
    color: "var(--muted)",
    lineHeight: 1.8,
    marginBottom: 14,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="page-hero">
        <div className="max-w-[1200px] mx-auto px-4 page-hero-content">
          <nav aria-label="Breadcrumb" style={{ marginBottom: 16 }}>
            <Link href="/" style={{ color: "var(--gold-lt)", fontSize: ".85rem" }}>
              Home
            </Link>
            <span style={{ color: "rgba(255,255,255,.4)", margin: "0 8px" }}>›</span>
            <span style={{ color: "rgba(255,255,255,.6)", fontSize: ".85rem" }}>
              Accessibility Statement
            </span>
          </nav>
          <h1>Accessibility Statement</h1>
          <p>Information about accessing NoorPath&apos;s website and online services.</p>
        </div>
      </div>

      <section>
        <div className="max-w-[760px] mx-auto px-4">
          <div className="content-card">
            <p style={paragraphStyle}>
              <strong>Current review date:</strong> 15 July 2026
            </p>
            <p style={paragraphStyle}>
              NoorPath Academy wants people to be able to access its website,
              service information and enquiry routes. Accessibility is an
              ongoing responsibility, and this statement does not claim that
              every page or third-party platform is free from barriers.
            </p>

            <h2 style={headingStyle}>Website access</h2>
            <p style={paragraphStyle}>
              The site is intended to support keyboard navigation, readable
              headings, text alternatives for meaningful images, labelled form
              controls and layouts that adapt to different screen sizes. We
              review reported barriers and prioritise fixes according to their
              effect on completing important tasks.
            </p>

            <h2 style={headingStyle}>Online classes and third-party tools</h2>
            <p style={paragraphStyle}>
              Classes may use third-party meeting or messaging services whose
              accessibility features and limitations are controlled by their
              providers. Tell NoorPath about an access need before a trial or
              class so the team can discuss available arrangements. A requested
              adjustment may depend on the platform, tutor and schedule.
            </p>

            <h2 style={headingStyle}>Report an accessibility barrier</h2>
            <p style={paragraphStyle}>
              Email{" "}
              <Link href={`mailto:${CONTACT.email}`} style={{ color: "var(--emerald)", fontWeight: 600 }}>
                {CONTACT.email}
              </Link>{" "}
              or contact NoorPath on{" "}
              <WhatsAppLink
                href={CONTACT.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "var(--emerald)", fontWeight: 600 }}
              >
                {CONTACT.phoneDisplay}
              </WhatsAppLink>
              . Include the page URL, the task you were trying to complete, the
              barrier encountered and, if you choose, the device or assistive
              technology used.
            </p>

            <h2 style={headingStyle}>Alternative contact route</h2>
            <p style={{ ...paragraphStyle, marginBottom: 0 }}>
              If a website form is difficult to use, contact NoorPath directly
              by email or WhatsApp. Do not send sensitive health information
              unless it is necessary to explain the requested access support.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
