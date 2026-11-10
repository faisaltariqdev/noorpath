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
        <div className="max-w-[820px] mx-auto px-4">
          <div className="content-card">
            <h2 style={{ fontFamily: "var(--font-playfair), serif", fontSize: "1.45rem", marginBottom: 12 }}>
              Class and Trial Enquiries
            </h2>
            <p style={{ color: "var(--muted)", lineHeight: 1.8, marginBottom: 24 }}>
              Tell us the learner&apos;s age group, current level, preferred course,
              timezone, suitable lesson windows and any tutor preference. Tutor
              and schedule availability are confirmed after your request.
            </p>

            {/* Region Contact Channels Grid */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 16, marginBottom: 28 }}>
              {/* USA & Canada Dedicated Call / SMS Card */}
              {CONTACT.usaLineActive && (
              <div
                style={{
                  background: "linear-gradient(145deg, rgba(10,110,79,.06), rgba(201,146,42,.08))",
                  border: "1.5px solid rgba(10,110,79,.25)",
                  borderRadius: 14,
                  padding: "20px 18px",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
                  <span style={{ fontSize: "1.4rem" }}>🇺🇸 🇨🇦</span>
                  <div>
                    <h3 style={{ fontSize: "1rem", fontWeight: 700, margin: 0, color: "var(--charcoal)" }}>
                      USA &amp; Canada Line
                    </h3>
                    <span style={{ fontSize: ".72rem", color: "var(--emerald)", fontWeight: 700, textTransform: "uppercase", letterSpacing: ".5px" }}>
                      Direct Call &amp; SMS (No WhatsApp needed)
                    </span>
                  </div>
                </div>
                <p style={{ fontSize: ".82rem", color: "var(--muted)", lineHeight: 1.55, marginBottom: 14 }}>
                  Fastest response for US &amp; Canadian parents. Call or text us directly from your phone.
                </p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 10 }}>
                  <a
                    href={CONTACT.usaCallUrl}
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 6,
                      background: "var(--emerald)",
                      color: "#fff",
                      fontSize: ".82rem",
                      fontWeight: 700,
                      padding: "8px 14px",
                      borderRadius: 8,
                      textDecoration: "none",
                    }}
                  >
                    📞 Call {CONTACT.usaPhoneDisplay}
                  </a>
                  <a
                    href={CONTACT.usaSmsUrl}
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 6,
                      background: "rgba(10,110,79,.12)",
                      border: "1px solid var(--emerald)",
                      color: "var(--emerald)",
                      fontSize: ".82rem",
                      fontWeight: 700,
                      padding: "8px 14px",
                      borderRadius: 8,
                      textDecoration: "none",
                    }}
                  >
                    💬 Text / SMS
                  </a>
                </div>
                <div style={{ fontSize: ".75rem", color: "var(--muted)" }}>
                  🕒 Available {CONTACT.usaAvailableHours}
                </div>
              </div>
              )}

              {/* Global WhatsApp & Phone Card */}
              <div
                style={{
                  background: "rgba(10,110,79,.04)",
                  border: "1px solid rgba(10,110,79,.18)",
                  borderRadius: 14,
                  padding: "20px 18px",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
                  <span style={{ fontSize: "1.4rem" }}>🌍 💬</span>
                  <div>
                    <h3 style={{ fontSize: "1rem", fontWeight: 700, margin: 0, color: "var(--charcoal)" }}>
                      International &amp; WhatsApp
                    </h3>
                    <span style={{ fontSize: ".72rem", color: "var(--muted)", fontWeight: 600 }}>
                      UK, Europe, Gulf &amp; Worldwide
                    </span>
                  </div>
                </div>
                <p style={{ fontSize: ".82rem", color: "var(--muted)", lineHeight: 1.55, marginBottom: 14 }}>
                  Connect instantly via WhatsApp for schedule matching, tutor clips, or queries.
                </p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 10 }}>
                  <WhatsAppLink
                    href={CONTACT.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 6,
                      background: "#25D366",
                      color: "#0b3d2e",
                      fontSize: ".82rem",
                      fontWeight: 700,
                      padding: "8px 14px",
                      borderRadius: 8,
                      textDecoration: "none",
                    }}
                  >
                    Chat on WhatsApp
                  </WhatsAppLink>
                  <a
                    href={`tel:${CONTACT.phoneE164}`}
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 6,
                      background: "rgba(0,0,0,.05)",
                      color: "var(--charcoal)",
                      fontSize: ".82rem",
                      fontWeight: 600,
                      padding: "8px 12px",
                      borderRadius: 8,
                      textDecoration: "none",
                    }}
                  >
                    Call {CONTACT.phoneDisplay}
                  </a>
                </div>
                <div style={{ fontSize: ".75rem", color: "var(--muted)" }}>
                  ⚡ Typically replies within 15–30 minutes
                </div>
              </div>
            </div>

            {/* Email Contact */}
            <div style={{ padding: "14px 18px", background: "var(--ivory)", borderRadius: 10, border: "1px solid var(--border)", marginBottom: 28 }}>
              <span style={{ fontWeight: 600, fontSize: ".9rem", color: "var(--charcoal)" }}>
                ✉️ Official Admissions &amp; Support Email:{" "}
              </span>
              <Link href={`mailto:${CONTACT.email}`} style={{ color: "var(--emerald)", fontWeight: 700, fontSize: ".9rem" }}>
                {CONTACT.email}
              </Link>
            </div>

            <h2 style={{ fontFamily: "var(--font-playfair), serif", fontSize: "1.2rem", marginBottom: 12 }}>
              Corrections and Policy Questions
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
