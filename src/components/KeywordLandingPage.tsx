import Link from "next/link";
import CTAForm from "@/components/CTAForm";
import { ORGANIZATION_REF } from "@/lib/organizationSchema";
import type { ReactNode } from "react";

export interface LandingFeature {
  icon: ReactNode;
  title: string;
  desc: string;
}

export interface LandingFaq {
  q: string;
  a: string;
}

export interface LandingBreadcrumb {
  label: string;
  href?: string;
}

export interface KeywordLandingPageProps {
  canonicalPath: string;
  serviceName: string;
  serviceDescription: string;
  audience?: string;
  h1: string;
  heroText: string;
  eyebrow?: string;
  sectionTitle: ReactNode;
  sectionSubtitle?: string;
  features: LandingFeature[];
  faqs: LandingFaq[];
  breadcrumbs: LandingBreadcrumb[];
  ctaHeadline: ReactNode;
  ctaSubtext: string;
  ctaBullets?: string[];
  relatedLinks?: { href: string; label: string }[];
  extraContent?: ReactNode;
}

export default function KeywordLandingPage({
  canonicalPath,
  serviceName,
  serviceDescription,
  audience,
  h1,
  heroText,
  eyebrow = "📖 NoorPath Academy",
  sectionTitle,
  sectionSubtitle,
  features,
  faqs,
  breadcrumbs,
  ctaHeadline,
  ctaSubtext,
  ctaBullets = [
    "✓ Free 30-minute trial — no credit card",
    "✓ Certified Ijazah & Al-Azhar tutors",
    "✓ Kids, adults & family plans",
    "✓ UK, US, Canada, Australia timezones",
  ],
  relatedLinks,
  extraContent,
}: KeywordLandingPageProps) {
  const url = `https://www.noorpath.online${canonicalPath}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${url}#service`,
        name: serviceName,
        description: serviceDescription,
        provider: ORGANIZATION_REF,
        serviceType: "Online Quran Education",
        ...(audience ? { audience: { "@type": "Audience", audienceType: audience } } : {}),
        url,
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "USD",
          description: "Free 30-minute trial class",
          url: `${url}#cta`,
        },
      },
      {
        "@type": "FAQPage",
        mainEntity: faqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="page-hero">
        <div className="max-w-[1200px] mx-auto px-4 page-hero-content">
          <nav aria-label="Breadcrumb" style={{ marginBottom: 16 }}>
            {breadcrumbs.map((crumb, i) => (
              <span key={crumb.label}>
                {i > 0 && <span style={{ color: "rgba(255,255,255,.4)", margin: "0 8px" }}>›</span>}
                {crumb.href ? (
                  <Link href={crumb.href} style={{ color: "var(--gold-lt)", fontSize: ".85rem" }}>
                    {crumb.label}
                  </Link>
                ) : (
                  <span style={{ color: "rgba(255,255,255,.6)", fontSize: ".85rem" }}>{crumb.label}</span>
                )}
              </span>
            ))}
          </nav>
          <h1>{h1}</h1>
          <p dangerouslySetInnerHTML={{ __html: heroText }} />
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 24 }}>
            <Link href="#cta" className="btn-primary-np">
              Book Free Trial →
            </Link>
            <Link
              href="/pricing"
              className="btn-outline-np"
              style={{ color: "#fff", borderColor: "rgba(255,255,255,.5)" }}
            >
              View Pricing
            </Link>
          </div>
        </div>
      </div>

      <section>
        <div className="max-w-[1200px] mx-auto px-4">
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <span className="section-eyebrow">{eyebrow}</span>
            <h2 className="section-title">{sectionTitle}</h2>
            {sectionSubtitle && (
              <p style={{ color: "var(--muted)", maxWidth: 680, margin: "12px auto 0", lineHeight: 1.7 }}>
                {sectionSubtitle}
              </p>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {features.map((f) => (
              <div key={f.title} className="content-card">
                <div style={{ color: "var(--emerald)", marginBottom: 12 }}>{f.icon}</div>
                <h3
                  style={{
                    fontFamily: "var(--font-playfair), serif",
                    fontSize: ".97rem",
                    fontWeight: 700,
                    marginBottom: 8,
                  }}
                >
                  {f.title}
                </h3>
                <p style={{ color: "var(--muted)", fontSize: ".85rem", lineHeight: 1.6, margin: 0 }}>{f.desc}</p>
              </div>
            ))}
          </div>

          {extraContent}

          {relatedLinks && relatedLinks.length > 0 && (
            <div
              style={{
                background: "var(--ivory)",
                borderRadius: 16,
                padding: "28px 32px",
                marginBottom: 48,
                border: "1px solid var(--border)",
              }}
            >
              <h3 style={{ fontFamily: "var(--font-playfair), serif", fontSize: "1.1rem", marginBottom: 16 }}>
                Related Programs
              </h3>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
                {relatedLinks.map((l) => (
                  <Link
                    key={l.href}
                    href={l.href}
                    style={{
                      background: "#fff",
                      border: "1px solid var(--border)",
                      borderRadius: 50,
                      padding: "6px 14px",
                      fontSize: ".8rem",
                      color: "var(--emerald)",
                      fontWeight: 600,
                      textDecoration: "none",
                    }}
                  >
                    {l.label}
                  </Link>
                ))}
              </div>
            </div>
          )}

          <h2
            style={{
              fontFamily: "var(--font-playfair), serif",
              fontSize: "1.6rem",
              textAlign: "center",
              marginBottom: 28,
            }}
          >
            Frequently Asked Questions
          </h2>
          <div className="max-w-[700px] mx-auto" style={{ marginBottom: 48 }}>
            {faqs.map((f, i) => (
              <details key={i} style={{ borderBottom: "1px solid var(--border)", padding: "18px 0" }}>
                <summary
                  style={{ fontWeight: 600, color: "var(--charcoal)", cursor: "pointer", fontSize: ".95rem" }}
                >
                  {f.q}
                </summary>
                <p style={{ color: "var(--muted)", marginTop: 10, lineHeight: 1.7, fontSize: ".9rem" }}>{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-section" id="cta">
        <div className="max-w-[1200px] mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 style={{ fontFamily: "var(--font-playfair), serif", color: "#fff", fontSize: "2rem", marginBottom: 16 }}>
                {ctaHeadline}
              </h2>
              <p style={{ color: "rgba(255,255,255,.75)", marginBottom: 16, lineHeight: 1.7 }}>{ctaSubtext}</p>
              <ul style={{ color: "rgba(255,255,255,.8)", fontSize: ".9rem", lineHeight: 2, paddingLeft: 20 }}>
                {ctaBullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </div>
            <div className="cta-form-wrap">
              <h3
                style={{
                  fontFamily: "var(--font-playfair), serif",
                  color: "#fff",
                  fontSize: "1.2rem",
                  marginBottom: 20,
                  textAlign: "center",
                }}
              >
                Start Free Trial — Takes 30 Seconds
              </h3>
              <CTAForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
