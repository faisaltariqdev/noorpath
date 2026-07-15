import type { Metadata } from "next";
import Link from "next/link";
import { CONTACT } from "@/lib/academyFacts";
import { BASE_URL, ORGANIZATION_ID, WEBSITE_ID } from "@/lib/organizationSchema";

export const revalidate = false;

const pageUrl = `${BASE_URL}/editorial-policy`;

export const metadata: Metadata = {
  title: "Editorial Policy",
  description:
    "How NoorPath Academy prepares, reviews, updates and corrects educational and service information.",
  alternates: { canonical: pageUrl },
  robots: { index: true, follow: true },
};

const sections = [
  {
    title: "Purpose and scope",
    text: "This policy applies to NoorPath's educational articles, course explanations, service pages and location pages. Content should help readers understand a topic or evaluate an online learning service without overstating evidence.",
  },
  {
    title: "Sources and attribution",
    text: "Educational claims should use relevant primary or authoritative sources where appropriate. Quotations, statistics and third-party claims should identify their source. NoorPath's own service details are primary-source statements and must not be presented as independent evidence.",
  },
  {
    title: "Service and tutor claims",
    text: "Published service details must match current academy information. Tutor credentials vary by person and teaching focus; content must not imply that every tutor holds the same qualification. Availability, tutor preferences and outcomes must not be guaranteed.",
  },
  {
    title: "Location content",
    text: "Country and city pages describe an online service, scheduling and regional context. They must not imply a physical branch, local office, locally based tutor or in-person service without verified evidence.",
  },
  {
    title: "AI-assisted work",
    text: "AI tools may assist research, drafting or quality checks, but they are not accepted as factual sources. A human must review claims, links, page ownership, duplication and visible disclosures before publication.",
  },
  {
    title: "Updates and corrections",
    text: "Time-sensitive details should be checked against the relevant current source. Material corrections should be made promptly, and pages should show an update or review date when that context helps readers assess currency.",
  },
] as const;

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": pageUrl,
      url: pageUrl,
      name: "NoorPath Academy Editorial Policy",
      description:
        "Standards for preparing, reviewing, updating and correcting NoorPath content.",
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
          name: "Editorial Policy",
          item: pageUrl,
        },
      ],
    },
  ],
};

export default function EditorialPolicyPage() {
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
              Editorial Policy
            </span>
          </nav>
          <h1>Editorial Policy</h1>
          <p>How NoorPath prepares, reviews and corrects published information.</p>
        </div>
      </div>

      <section>
        <div className="max-w-[760px] mx-auto px-4">
          <div className="content-card">
            <p style={{ color: "var(--muted)", lineHeight: 1.8, marginBottom: 24 }}>
              <strong>Current review date:</strong> 15 July 2026
            </p>
            {sections.map((section) => (
              <div key={section.title}>
                <h2
                  style={{
                    fontFamily: "var(--font-playfair), serif",
                    fontSize: "1.2rem",
                    marginTop: 26,
                    marginBottom: 10,
                  }}
                >
                  {section.title}
                </h2>
                <p style={{ color: "var(--muted)", lineHeight: 1.8, marginBottom: 14 }}>
                  {section.text}
                </p>
              </div>
            ))}
            <h2 style={{ fontFamily: "var(--font-playfair), serif", fontSize: "1.2rem", marginTop: 26, marginBottom: 10 }}>
              Request a correction
            </h2>
            <p style={{ color: "var(--muted)", lineHeight: 1.8, margin: 0 }}>
              Send the page URL, the statement to review and any supporting
              source to{" "}
              <Link href={`mailto:${CONTACT.email}`} style={{ color: "var(--emerald)", fontWeight: 600 }}>
                {CONTACT.email}
              </Link>
              . NoorPath will review the request; submitting a request does not
              predetermine the outcome.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
