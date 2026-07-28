import type { Metadata } from "next";
import Link from "next/link";
import { CONTACT } from "@/lib/academyFacts";
import { BASE_URL, ORGANIZATION_ID, WEBSITE_ID } from "@/lib/organizationSchema";
import { absolutePageTitle } from "@/lib/pageTitle";
import WhatsAppLink from "@/components/WhatsAppLink";

export const revalidate = false;

const pageUrl = `${BASE_URL}/contact`;

export const metadata: Metadata = {
  title: absolutePageTitle("Contact NoorPath Academy"),
  description:
    "Contact NoorPath Academy about online Quran classes, trial requests, tutor matching, scheduling or website corrections.",
  alternates: { canonical: pageUrl },
  robots: { index: true, follow: true },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ContactPage",
      "@id": pageUrl,
      url: pageUrl,
      name: "Contact NoorPath Academy",
      description:
        "Official contact details for NoorPath Academy enquiries and corrections.",
      isPartOf: { "@id": WEBSITE_ID },
      about: { "@id": ORGANIZATION_ID },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
        { "@type": "ListItem", position: 2, name: "Contact", item: pageUrl },
      ],
    },
  ],
};

export default function ContactPage() {
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
              Contact
            </span>
          </nav>
          <h1>Contact NoorPath Academy</h1>
          <p>Use an official channel for class enquiries, support or corrections.</p>
        </div>
      </div>

      <section>
        <div className="max-w-[760px] mx-auto px-4">
          <div className="content-card">
            <h2 style={{ fontFamily: "var(--font-playfair), serif", fontSize: "1.3rem", marginBottom: 12 }}>
              Class and trial enquiries
            </h2>
            <p style={{ color: "var(--muted)", lineHeight: 1.8, marginBottom: 20 }}>
              Tell us the learner&apos;s age group, current level, preferred course,
              timezone, suitable lesson windows and any tutor preference. Tutor
              and schedule availability are confirmed after your request.
            </p>
            <p style={{ color: "var(--muted)", lineHeight: 1.8, marginBottom: 12 }}>
              Email:{" "}
              <Link href={`mailto:${CONTACT.email}`} style={{ color: "var(--emerald)", fontWeight: 600 }}>
                {CONTACT.email}
              </Link>
            </p>
            <p style={{ color: "var(--muted)", lineHeight: 1.8, marginBottom: 28 }}>
              WhatsApp or phone:{" "}
              <WhatsAppLink
                href={CONTACT.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "var(--emerald)", fontWeight: 600 }}
              >
                {CONTACT.phoneDisplay}
              </WhatsAppLink>
            </p>

            <h2 style={{ fontFamily: "var(--font-playfair), serif", fontSize: "1.2rem", marginBottom: 12 }}>
              Corrections and policy questions
            </h2>
            <p style={{ color: "var(--muted)", lineHeight: 1.8, marginBottom: 12 }}>
              Email us if you find an inaccurate service, pricing, tutor, location
              or editorial statement. Include the page URL and the information
              that should be reviewed.
            </p>
            <p style={{ color: "var(--muted)", lineHeight: 1.8, margin: 0 }}>
              For child-safety concerns, follow the{" "}
              <Link href="/safeguarding" style={{ color: "var(--emerald)", fontWeight: 600 }}>
                safeguarding guidance
              </Link>
              . For information-rights requests, read the{" "}
              <Link href="/privacy-policy" style={{ color: "var(--emerald)", fontWeight: 600 }}>
                Privacy Policy
              </Link>
              .
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
