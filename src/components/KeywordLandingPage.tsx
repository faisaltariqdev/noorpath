import Link from "next/link";
import CTAForm from "@/components/CTAForm";
import { ORGANIZATION_REF } from "@/lib/organizationSchema";
import { Star } from "lucide-react";
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

export interface LandingPhase {
  phase: string;
  title: string;
  duration: string;
  desc: string;
}

export interface LandingStep {
  title: string;
  desc: string;
}

export interface CompareRow {
  method: string;
  verdict: string;
  note: string;
}

export interface LandingLocation {
  href: string;
  label: string;
  note: string;
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
  quickAnswer?: string;
  seoIntro?: string;
  features: LandingFeature[];
  phases?: LandingPhase[];
  steps?: LandingStep[];
  compareRows?: CompareRow[];
  locations?: LandingLocation[];
  faqs: LandingFaq[];
  breadcrumbs: LandingBreadcrumb[];
  ctaHeadline: ReactNode;
  ctaSubtext: string;
  ctaBullets?: string[];
  relatedLinks?: { href: string; label: string }[];
  extraContent?: ReactNode;
}

const DEFAULT_STATS = [
  { value: "12,000+", label: "Students worldwide" },
  { value: "4.9/5", label: "Family rating" },
  { value: "250+", label: "Certified tutors" },
  { value: "40+", label: "Countries served" },
];

const DEFAULT_STEPS: LandingStep[] = [
  { title: "Book Free Trial", desc: "Fill the form — we match you with the best tutor for your level, age, and timezone within hours." },
  { title: "Attend Live Class", desc: "30-minute 1-on-1 lesson on Zoom. Real teaching, real correction — not a sales pitch." },
  { title: "Start Your Plan", desc: "Love the trial? Choose a monthly plan. Family discounts available. Cancel anytime." },
];

const DEFAULT_LOCATIONS: LandingLocation[] = [
  { href: "/locations/online-quran-classes-uk", label: "🇬🇧 United Kingdom", note: "GMT/BST — after-school slots" },
  { href: "/locations/online-quran-classes-usa", label: "🇺🇸 United States", note: "EST/PST morning & evening" },
  { href: "/locations/online-quran-classes-canada", label: "🇨🇦 Canada", note: "EST/PST — flexible" },
  { href: "/locations/online-quran-classes-australia", label: "🇦🇺 Australia", note: "AEST — after-school" },
  { href: "/locations/online-quran-classes-uae", label: "🇦🇪 UAE", note: "GST — morning & evening" },
  { href: "/locations/online-quran-classes-germany", label: "🇩🇪 Germany", note: "CET — evening slots" },
  { href: "/locations/online-quran-classes-pakistan", label: "🇵🇰 Pakistan", note: "PKT — all-day available" },
  { href: "/locations", label: "🌍 40+ More Countries", note: "All timezones covered" },
];

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
  quickAnswer,
  seoIntro,
  features,
  phases,
  steps = DEFAULT_STEPS,
  compareRows,
  locations = DEFAULT_LOCATIONS,
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
      {
        "@type": "BreadcrumbList",
        itemListElement: breadcrumbs.map((crumb, i) => ({
          "@type": "ListItem",
          position: i + 1,
          name: crumb.label,
          ...(crumb.href ? { item: `https://www.noorpath.online${crumb.href}` } : { item: url }),
        })),
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero */}
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
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 24, alignItems: "center" }}>
            <Link href="#cta" className="btn-primary-np">
              Book Free Trial →
            </Link>
            <Link href="/pricing" className="btn-outline-np" style={{ color: "#fff", borderColor: "rgba(255,255,255,.5)" }}>
              View Pricing
            </Link>
            <span style={{ color: "rgba(255,255,255,.7)", fontSize: ".85rem", display: "flex", alignItems: "center", gap: 6 }}>
              <Star size={14} fill="var(--gold)" color="var(--gold)" /> 4.9/5 · 2,400+ reviews
            </span>
          </div>
        </div>
      </div>

      <section>
        <div className="max-w-[1200px] mx-auto px-4">
          {/* Quick answer — SEO snippet target */}
          {quickAnswer && (
            <div
              style={{
                background: "rgba(10,110,79,.06)",
                borderLeft: "4px solid var(--emerald)",
                borderRadius: 12,
                padding: "22px 28px",
                marginBottom: 40,
                fontSize: ".95rem",
                lineHeight: 1.75,
                color: "#374151",
              }}
            >
              <strong style={{ color: "var(--emerald)" }}>Quick answer: </strong>
              <span dangerouslySetInnerHTML={{ __html: quickAnswer }} />
            </div>
          )}

          {/* Trust stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {DEFAULT_STATS.map((s) => (
              <div
                key={s.label}
                style={{
                  textAlign: "center",
                  background: "var(--ivory)",
                  border: "1px solid var(--border)",
                  borderRadius: 14,
                  padding: "22px 12px",
                }}
              >
                <div style={{ fontSize: "1.55rem", fontWeight: 800, color: "var(--emerald)", lineHeight: 1.2 }}>
                  {s.value}
                </div>
                <div style={{ fontSize: ".78rem", color: "var(--muted)", marginTop: 4 }}>{s.label}</div>
              </div>
            ))}
          </div>

          {/* SEO intro paragraph */}
          {seoIntro && (
            <p
              style={{ color: "var(--muted)", fontSize: ".95rem", lineHeight: 1.85, maxWidth: 860, margin: "0 auto 48px", textAlign: "center" }}
              dangerouslySetInnerHTML={{ __html: seoIntro }}
            />
          )}

          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <span className="section-eyebrow">{eyebrow}</span>
            <h2 className="section-title">{sectionTitle}</h2>
            {sectionSubtitle && (
              <p style={{ color: "var(--muted)", maxWidth: 680, margin: "12px auto 0", lineHeight: 1.7 }}>
                {sectionSubtitle}
              </p>
            )}
          </div>

          {/* Feature cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {features.map((f) => (
              <div key={f.title} className="content-card">
                <div style={{ color: "var(--emerald)", marginBottom: 12 }}>{f.icon}</div>
                <h3 style={{ fontFamily: "var(--font-playfair), serif", fontSize: ".97rem", fontWeight: 700, marginBottom: 8 }}>
                  {f.title}
                </h3>
                <p style={{ color: "var(--muted)", fontSize: ".85rem", lineHeight: 1.6, margin: 0 }}>{f.desc}</p>
              </div>
            ))}
          </div>

          {/* Learning phases / roadmap */}
          {phases && phases.length > 0 && (
            <>
              <h2 style={{ fontFamily: "var(--font-playfair), serif", fontSize: "1.6rem", textAlign: "center", marginBottom: 28 }}>
                Your Learning Roadmap
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
                {phases.map((p) => (
                  <div key={p.title} className="content-card" style={{ borderTop: "3px solid var(--emerald)", position: "relative" }}>
                    <div style={{ fontSize: ".72rem", fontWeight: 700, letterSpacing: ".08em", textTransform: "uppercase", color: "var(--emerald)", marginBottom: 6 }}>
                      {p.phase}
                    </div>
                    <div style={{ fontWeight: 800, color: "var(--charcoal)", fontSize: "1rem", marginBottom: 4 }}>{p.title}</div>
                    <div style={{ fontSize: ".82rem", color: "var(--gold)", fontWeight: 600, marginBottom: 10 }}>{p.duration}</div>
                    <p style={{ color: "var(--muted)", fontSize: ".88rem", lineHeight: 1.65, margin: 0 }}>{p.desc}</p>
                  </div>
                ))}
              </div>
            </>
          )}

          {/* How it works */}
          <h2 style={{ fontFamily: "var(--font-playfair), serif", fontSize: "1.6rem", textAlign: "center", marginBottom: 28 }}>
            How to Get Started — 3 Simple Steps
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {steps.map((s, i) => (
              <div key={s.title} style={{ textAlign: "center", padding: "24px 16px" }}>
                <div
                  style={{
                    width: 48,
                    height: 48,
                    borderRadius: "50%",
                    background: "var(--emerald)",
                    color: "#fff",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: 800,
                    fontSize: "1.2rem",
                    margin: "0 auto 16px",
                  }}
                >
                  {i + 1}
                </div>
                <h3 style={{ fontWeight: 700, marginBottom: 8, fontSize: ".95rem" }}>{s.title}</h3>
                <p style={{ color: "var(--muted)", fontSize: ".85rem", lineHeight: 1.6, margin: 0 }}>{s.desc}</p>
              </div>
            ))}
          </div>

          {/* Comparison table */}
          {compareRows && compareRows.length > 0 && (
            <>
              <h2 style={{ fontFamily: "var(--font-playfair), serif", fontSize: "1.6rem", textAlign: "center", marginBottom: 28 }}>
                Why Live Online Classes Win
              </h2>
              <div style={{ overflowX: "auto", marginBottom: 48 }}>
                <table style={{ width: "100%", borderCollapse: "collapse", fontSize: ".92rem" }}>
                  <thead>
                    <tr style={{ background: "var(--emerald)", color: "#fff" }}>
                      <th style={{ padding: "12px 16px", textAlign: "left", borderRadius: "8px 0 0 0" }}>Method</th>
                      <th style={{ padding: "12px 16px", textAlign: "left" }}>Verdict</th>
                      <th style={{ padding: "12px 16px", textAlign: "left", borderRadius: "0 8px 0 0" }}>Why</th>
                    </tr>
                  </thead>
                  <tbody>
                    {compareRows.map((row, i) => (
                      <tr key={row.method} style={{ background: i % 2 === 0 ? "rgba(10,110,79,.03)" : "#fff", borderBottom: "1px solid var(--border)" }}>
                        <td style={{ padding: "11px 16px", fontWeight: 600 }}>{row.method}</td>
                        <td style={{ padding: "11px 16px", color: row.verdict.startsWith("✅") ? "var(--emerald)" : row.verdict.startsWith("❌") ? "#ef4444" : "#d97706", fontWeight: 700 }}>
                          {row.verdict}
                        </td>
                        <td style={{ padding: "11px 16px", color: "var(--muted)" }}>{row.note}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </>
          )}

          {extraContent}

          {/* Pricing teaser */}
          <div
            style={{
              background: "linear-gradient(135deg, rgba(10,110,79,.08), rgba(232,184,75,.08))",
              border: "1px solid rgba(10,110,79,.15)",
              borderRadius: 16,
              padding: "32px 36px",
              marginBottom: 48,
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              justifyContent: "space-between",
              gap: 20,
            }}
          >
            <div>
              <h3 style={{ fontFamily: "var(--font-playfair), serif", fontSize: "1.2rem", marginBottom: 8, color: "var(--charcoal)" }}>
                Plans from $29/month · First Class Free
              </h3>
              <p style={{ color: "var(--muted)", fontSize: ".9rem", margin: 0, lineHeight: 1.6 }}>
                No credit card for trial. Family discounts for 2+ siblings. Cancel anytime.
              </p>
            </div>
            <Link href="#cta" className="btn-primary-np" style={{ whiteSpace: "nowrap" }}>
              Book Free Trial →
            </Link>
          </div>

          {/* Locations */}
          {locations.length > 0 && (
            <>
              <h2 style={{ fontFamily: "var(--font-playfair), serif", fontSize: "1.6rem", textAlign: "center", marginBottom: 28 }}>
                Available in Your Country
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-16">
                {locations.map((loc) => (
                  <Link
                    key={loc.href}
                    href={loc.href}
                    style={{
                      background: "var(--ivory)",
                      border: "1px solid var(--border)",
                      borderRadius: 12,
                      padding: "18px 16px",
                      textDecoration: "none",
                      display: "block",
                      transition: "box-shadow .2s",
                    }}
                  >
                    <div style={{ fontWeight: 700, color: "var(--charcoal)", marginBottom: 4 }}>{loc.label}</div>
                    <div style={{ fontSize: ".82rem", color: "var(--muted)" }}>{loc.note}</div>
                  </Link>
                ))}
              </div>
            </>
          )}

          {/* Related links */}
          {relatedLinks && relatedLinks.length > 0 && (
            <div style={{ background: "var(--ivory)", borderRadius: 16, padding: "28px 32px", marginBottom: 48, border: "1px solid var(--border)" }}>
              <h3 style={{ fontFamily: "var(--font-playfair), serif", fontSize: "1.1rem", marginBottom: 16 }}>
                Explore More Programs
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

          <h2 style={{ fontFamily: "var(--font-playfair), serif", fontSize: "1.6rem", textAlign: "center", marginBottom: 28 }}>
            Frequently Asked Questions
          </h2>
          <div className="max-w-[700px] mx-auto" style={{ marginBottom: 48 }}>
            {faqs.map((f, i) => (
              <details key={i} style={{ borderBottom: "1px solid var(--border)", padding: "18px 0" }}>
                <summary style={{ fontWeight: 600, color: "var(--charcoal)", cursor: "pointer", fontSize: ".95rem" }}>
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
              <h3 style={{ fontFamily: "var(--font-playfair), serif", color: "#fff", fontSize: "1.2rem", marginBottom: 20, textAlign: "center" }}>
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
