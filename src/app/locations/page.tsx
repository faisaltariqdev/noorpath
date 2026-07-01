import type { Metadata } from "next";
import Link from "next/link";
import { Clock, Globe, CheckCircle, Star } from "lucide-react";
import { locations } from "@/data/locations";
import { ORGANIZATION_REF } from "@/lib/organizationSchema";

export const metadata: Metadata = {
  title: { absolute: "Online Quran Classes by Country — USA, UK, Canada, Australia & 40+ Nations | NoorPath" },
  description:
    "Learn Quran online in USA, UK, Canada, Australia, UAE, Pakistan, Germany & 40+ countries. Certified 1-on-1 tutors, all timezones, female teachers available, free 30-min trial.",
  keywords: [
    "online quran classes usa", "online quran classes uk", "online quran classes canada",
    "online quran classes australia", "learn quran online worldwide", "quran teacher online",
    "online quran academy", "quran classes by country", "islamic education online",
    "online quran uae", "online quran pakistan", "online quran germany", "online quran malaysia",
    "quran classes all countries", "online quran worldwide",
  ],
  alternates: { canonical: "https://www.noorpath.online/locations" },
  openGraph: {
    title: "Online Quran Classes by Location — USA, UK, Canada, Australia & More",
    description: "NoorPath Academy serves 12,000+ students in 40+ countries. Certified tutors, all timezones. Free trial.",
    url: "https://www.noorpath.online/locations",
    images: [{ url: "/og-image.svg", width: 1200, height: 630, alt: "Online Quran Classes Worldwide — NoorPath Academy" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Online Quran Classes by Location | NoorPath Academy",
    description: "USA, UK, Canada, Australia, UAE and 40+ countries. Certified tutors. Free trial.",
    images: ["/og-image.svg"],
  },
};

const faqs = [
  { q: "Do you offer online Quran classes in my country?", a: "Yes — NoorPath Academy serves students in 40+ countries including USA, UK, Canada, Australia, UAE, Saudi Arabia, Pakistan, Germany, Malaysia, Bangladesh, South Africa, France, Netherlands, and many more. If you do not see your country listed, contact us — we almost certainly have a tutor in your timezone." },
  { q: "What timezone do the online Quran classes run in?", a: "We have tutors available across all major timezones. UK students typically book GMT/BST morning and evening slots. US students can book across EST, CST, MST, and PST. Australia (AEST), Canada, UAE and other country-specific availability is shown on each location page." },
  { q: "Are online Quran classes available in the UK?", a: "Yes. NoorPath Academy has a large pool of tutors available for UK families in GMT and BST timezones. Popular slots include after-school (4–7pm) and weekend morning classes. See our UK Quran classes page for details." },
  { q: "Can I learn Quran online if I live in the USA?", a: "Absolutely. NoorPath serves thousands of students across all US states and timezones — EST, CST, MST, and PST. Evening and weekend slots are available in all zones. See our USA online Quran classes page for more." },
  { q: "Are there female Quran teachers available internationally?", a: "Yes. Certified female Quran teachers (Hafiza) are available for students in all 40+ countries. Simply request a female teacher when booking your free trial and we will match you with a certified Hafiza in your timezone." },
  { q: "Is there a free trial for international students?", a: "Yes. All students worldwide get a free 30-minute trial class regardless of their country. No credit card required. The trial includes a level assessment and a personalised learning plan from your tutor." },
];

const timezones = [
  { zone: "GMT/BST", flag: "🇬🇧", label: "United Kingdom", slots: "8am–9pm" },
  { zone: "EST/PST", flag: "🇺🇸", label: "United States", slots: "7am–10pm" },
  { zone: "EST/PST", flag: "🇨🇦", label: "Canada", slots: "8am–10pm" },
  { zone: "AEST/AEDT", flag: "🇦🇺", label: "Australia", slots: "7am–9pm" },
  { zone: "GST", flag: "🇦🇪", label: "UAE", slots: "8am–11pm" },
  { zone: "PKT", flag: "🇵🇰", label: "Pakistan", slots: "7am–10pm" },
];

const locationsJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      name: "Online Quran Classes — Worldwide",
      description: "NoorPath Academy provides online Quran education to families in 40+ countries. All timezones covered.",
      provider: ORGANIZATION_REF,
      areaServed: ["United States", "United Kingdom", "Canada", "Australia", "UAE", "Saudi Arabia", "Pakistan", "Germany", "Malaysia", "Bangladesh", "South Africa", "Indonesia"],
      serviceType: "Online Quran Education",
      url: "https://www.noorpath.online/locations",
    },
    {
      "@type": "ItemList",
      name: "Online Quran Classes by Country — NoorPath Academy",
      numberOfItems: locations.length,
      itemListElement: locations.map((l, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: `Online Quran Classes ${l.country}`,
        url: `https://www.noorpath.online/locations/${l.slug}`,
      })),
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
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.noorpath.online" },
        { "@type": "ListItem", position: 2, name: "Locations", item: "https://www.noorpath.online/locations" },
      ],
    },
  ],
};

export default function LocationsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(locationsJsonLd) }} />

      {/* Hero */}
      <div className="page-hero">
        <div className="max-w-[1200px] mx-auto px-4 page-hero-content">
          <nav aria-label="Breadcrumb" style={{ marginBottom: 16 }}>
            <Link href="/" style={{ color: "var(--gold-lt)", fontSize: ".85rem" }}>Home</Link>
            <span style={{ color: "rgba(255,255,255,.4)", margin: "0 8px" }}>›</span>
            <span style={{ color: "rgba(255,255,255,.6)", fontSize: ".85rem" }}>Locations</span>
          </nav>
          <h1>Online Quran Classes for Families Worldwide</h1>
          <p>
            NoorPath Academy serves <strong style={{ color: "var(--gold-lt)" }}>12,000+ students in 40+ countries</strong> — certified 1-on-1 Quran classes in your timezone, morning through evening, every day of the week. First class is free.
          </p>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 20, alignItems: "center" }}>
            <Link href="/online-quran-classes#cta" className="btn-primary-np">Book Free Trial →</Link>
            <span style={{ color: "rgba(255,255,255,.7)", fontSize: ".85rem", display: "flex", alignItems: "center", gap: 6 }}>
              <Star size={14} fill="var(--gold)" color="var(--gold)" /> Available in your timezone
            </span>
          </div>
        </div>
      </div>

      <section>
        <div className="max-w-[1200px] mx-auto px-4">

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {[
              { value: "40+", label: "Countries served" },
              { value: "12,000+", label: "Families worldwide" },
              { value: "24/7", label: "Timezone coverage" },
              { value: "Free", label: "First trial class" },
            ].map((s) => (
              <div key={s.label} style={{ textAlign: "center", background: "var(--ivory)", border: "1px solid var(--border)", borderRadius: 14, padding: "22px 12px" }}>
                <div style={{ fontSize: "1.5rem", fontWeight: 800, color: "var(--emerald)", lineHeight: 1.2 }}>{s.value}</div>
                <div style={{ fontSize: ".78rem", color: "var(--muted)", marginTop: 4 }}>{s.label}</div>
              </div>
            ))}
          </div>

          {/* Country cards */}
          <div style={{ textAlign: "center", marginBottom: 32 }}>
            <span className="section-eyebrow"><Globe size={13} style={{ display: "inline", verticalAlign: "middle", marginRight: 4 }} /> 40+ Countries</span>
            <h2 className="section-title">Find <em className="accent">Quran Classes</em> in Your Country</h2>
            <p className="section-desc center">
              Each country page has local timezone slots, country-specific tutor availability, and tailored scheduling options for your family.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {locations.map((l) => (
              <div key={l.country} className="content-card">
                <div style={{ fontSize: "2.5rem", marginBottom: 12 }}>{l.flag}</div>
                <h2 style={{ fontFamily: "var(--font-playfair), serif", fontSize: "1.1rem", color: "var(--charcoal)", marginBottom: 6 }}>
                  Online Quran Classes {l.country}
                </h2>
                <p style={{ color: "var(--muted)", fontSize: ".82rem", marginBottom: 8 }}>{l.cities}</p>
                <p style={{ color: "var(--muted)", fontSize: ".87rem", lineHeight: 1.6, marginBottom: 16 }}>{l.desc}</p>
                <div style={{ display: "flex", gap: 8 }}>
                  <Link href={`/locations/${l.slug}`} style={{ flex: 1, textAlign: "center", background: "var(--emerald)", color: "#fff", padding: "9px 18px", borderRadius: 10, fontSize: ".83rem", fontWeight: 600, textDecoration: "none" }}>
                    Learn More →
                  </Link>
                  <Link href="/online-quran-classes#cta" style={{ flex: 1, textAlign: "center", background: "var(--gold)", color: "var(--charcoal)", padding: "9px 18px", borderRadius: 10, fontSize: ".83rem", fontWeight: 600, textDecoration: "none" }}>
                    Free Trial →
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Timezone guide */}
          <div style={{ textAlign: "center", marginBottom: 32 }}>
            <span className="section-eyebrow"><Clock size={13} style={{ display: "inline", verticalAlign: "middle", marginRight: 4 }} /> Scheduling</span>
            <h2 className="section-title">Available in <em className="accent">Your Timezone</em></h2>
            <p className="section-desc center">
              NoorPath tutors are available from early morning to late evening across all major timezones. No matter where you live, we have a slot that fits your family routine.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-5 mb-16">
            {timezones.map((tz) => (
              <div key={tz.label} className="content-card" style={{ textAlign: "center" }}>
                <div style={{ fontSize: "2rem", marginBottom: 8 }}>{tz.flag}</div>
                <div style={{ fontWeight: 700, color: "var(--charcoal)", marginBottom: 4 }}>{tz.label}</div>
                <div style={{ fontSize: ".78rem", color: "var(--emerald)", fontWeight: 600, marginBottom: 4 }}>{tz.zone}</div>
                <div style={{ fontSize: ".82rem", color: "var(--muted)", display: "flex", alignItems: "center", justifyContent: "center", gap: 4 }}>
                  <Clock size={12} /> {tz.slots} local time
                </div>
              </div>
            ))}
          </div>

          {/* What you get in every country */}
          <div style={{ textAlign: "center", marginBottom: 32 }}>
            <span className="section-eyebrow">✅ Every Location</span>
            <h2 className="section-title">Same Quality <em className="accent">Everywhere</em></h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-16">
            {[
              "Certified Ijazah-qualified tutors in your timezone",
              "Female tutors available for sisters and daughters",
              "1-on-1 private sessions via Zoom or Google Meet",
              "Flexible scheduling — morning, evening, or weekend",
              "Weekly progress reports for parents",
              "Family discount plans for 2+ siblings",
              "Free 30-minute trial — no credit card required",
              "All courses: Qaida, Tajweed, Hifz, Arabic, Islamic Studies",
            ].map((item) => (
              <div key={item} style={{ display: "flex", gap: 10, alignItems: "flex-start", background: "var(--ivory)", border: "1px solid var(--border)", borderRadius: 12, padding: "14px 18px" }}>
                <CheckCircle size={16} style={{ color: "var(--emerald)", marginTop: 1, flexShrink: 0 }} />
                <span style={{ fontSize: ".88rem", color: "var(--slate)", lineHeight: 1.5 }}>{item}</span>
              </div>
            ))}
          </div>

          {/* FAQ */}
          <div style={{ textAlign: "center", marginBottom: 32 }}>
            <span className="section-eyebrow">❓ FAQ</span>
            <h2 className="section-title">International Students — <em className="accent">Common Questions</em></h2>
          </div>
          <div className="max-w-[760px] mx-auto mb-16">
            {faqs.map((f, i) => (
              <details key={i} style={{ borderBottom: "1px solid var(--border)", padding: "18px 0" }}>
                <summary style={{ fontWeight: 600, color: "var(--charcoal)", cursor: "pointer", fontSize: ".95rem", listStyle: "none", display: "flex", justifyContent: "space-between" }}>
                  {f.q} <span style={{ color: "var(--emerald)", marginLeft: 8 }}>+</span>
                </summary>
                <p style={{ color: "var(--muted)", marginTop: 12, lineHeight: 1.75, fontSize: ".9rem" }}>{f.a}</p>
              </details>
            ))}
          </div>

          {/* CTA */}
          <div style={{ background: "linear-gradient(135deg, var(--emerald-dk) 0%, var(--emerald) 100%)", borderRadius: 20, padding: "36px 32px", textAlign: "center", marginBottom: 48 }}>
            <h2 style={{ fontFamily: "var(--font-playfair), serif", color: "#fff", fontSize: "1.8rem", marginBottom: 12 }}>
              Start Your Free Trial <em style={{ color: "var(--gold-lt)" }}>Today</em>
            </h2>
            <p style={{ color: "rgba(255,255,255,.8)", marginBottom: 24 }}>
              No credit card. No commitment. Just a free 30-minute class with a certified tutor in your timezone.
            </p>
            <Link href="/online-quran-classes#cta" className="btn-primary-np" style={{ background: "var(--gold)", color: "var(--charcoal)" }}>
              Book Free Trial →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
