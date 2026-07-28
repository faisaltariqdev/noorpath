import type { Metadata } from "next";
import Link from "next/link";
import { Clock, Globe, CheckCircle, MapPin } from "lucide-react";
import { locations } from "@/data/locations";
import { cities } from "@/data/cities";
import { FAMILY_DISCOUNTS, PRICING_PLANS, TRIAL } from "@/lib/academyFacts";
import { ORGANIZATION_REF } from "@/lib/organizationSchema";
import {
  PRIORITY_MARKETS,
  getPriorityMarket,
  orderByMarketPriority,
} from "@/lib/geoSeo";

export const revalidate = false;

export const metadata: Metadata = {
  title: { absolute: "Online Quran Classes by Country | NoorPath" },
  description: `Explore online Quran class guides for ${PRIORITY_MARKETS.length} priority markets and ${locations.length} country hubs. Request live one-to-one lessons in your local timezone.`,
  keywords: [
    "online quran classes usa", "online quran classes uk", "online quran classes canada",
    "online quran classes australia", "learn quran online worldwide", "quran teacher online",
    "online quran academy", "quran classes by country", "islamic education online",
    "online quran uae", "online quran pakistan", "online quran germany", "online quran malaysia",
    "quran classes by timezone", "online quran worldwide",
  ],
  alternates: { canonical: "https://www.noorpath.online/locations" },
  openGraph: {
    title: "Online Quran Classes by Location — USA, UK, Canada, Australia & More",
    description: "Explore live 1-on-1 online Quran classes by country and request tutor matching for your timezone.",
    url: "https://www.noorpath.online/locations",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Online Quran Classes Worldwide — NoorPath Academy" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Online Quran Classes by Location | NoorPath Academy",
    description: "Online Quran classes for the USA, UK, Canada, Australia, UAE and more, with availability confirmed after matching.",
    images: ["/og-image.png"],
  },
};

const faqs = [
  { q: "Can I request online Quran classes in my country?", a: "NoorPath accepts tutor-matching requests from the countries listed here, including the USA, UK, Canada, Australia, UAE, Saudi Arabia, Pakistan, Germany, Malaysia, Bangladesh, South Africa, France and the Netherlands. If your country is not listed, contact us to check availability in your timezone." },
  { q: "What timezone do the online Quran classes run in?", a: "You can request a lesson time in your local timezone. GMT/BST, EST, CST, MST, PST, AEST, GST and other timezone preferences are subject to tutor matching and confirmed after your request." },
  { q: "Are online Quran classes available in the UK?", a: "You can request GMT or BST lessons for a learner in the UK. After-school and weekend preferences are subject to tutor matching. See our UK Quran classes page for local scheduling context." },
  { q: "Can I learn Quran online if I live in the USA?", a: "You can request EST, CST, MST or PST lessons from anywhere in the USA. Evening and weekend preferences are subject to tutor matching. See our USA online Quran classes page for more." },
  { q: "Can I request a female Quran teacher?", a: "Yes. Request a female tutor when booking your trial; tutor and timezone availability are confirmed after matching." },
  { q: "Is there a free trial for international students?", a: `Yes. The trial is ${TRIAL.durationMinutes} minutes, costs $${TRIAL.price}, and does not require a credit card. ${TRIAL.availabilityNote}` },
];

const priorityLocations = orderByMarketPriority(
  locations.filter((location) => getPriorityMarket(location.slug))
);
const secondaryLocations = locations.filter((location) => !getPriorityMarket(location.slug));
const orderedLocations = [...priorityLocations, ...secondaryLocations];
const timezones = PRIORITY_MARKETS.map((market) => ({
  zone: market.timezone,
  flag: locations.find((location) => location.slug === market.slug)?.flag ?? "🌍",
  label: market.country,
  guidance: market.schedulingGuidance,
}));

const locationsJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      name: "Online Quran Classes — Worldwide",
      description: "NoorPath Academy provides live 1-on-1 online Quran lessons with country and timezone-based tutor matching.",
      provider: ORGANIZATION_REF,
      areaServed: orderedLocations.map((l) => l.country),
      serviceType: "Online Quran Education",
      url: "https://www.noorpath.online/locations",
    },
    {
      "@type": "ItemList",
      name: "Online Quran Classes by Country — NoorPath Academy",
      numberOfItems: orderedLocations.length,
      itemListElement: orderedLocations.map((l, i) => ({
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
            Explore <strong style={{ color: "var(--gold-lt)" }}>live 1-on-1 online Quran classes</strong> by country and request a tutor for your timezone. Scheduling is subject to tutor matching.
          </p>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 20, alignItems: "center" }}>
            <Link href="/online-quran-classes#cta" className="btn-primary-np">Book Free Trial →</Link>
            <span style={{ color: "rgba(255,255,255,.7)", fontSize: ".85rem", display: "flex", alignItems: "center", gap: 6 }}>
              <Clock size={14} color="var(--gold)" /> Availability confirmed after matching
            </span>
          </div>
        </div>
      </div>

      <section>
        <div className="max-w-[1200px] mx-auto px-4">

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {[
              { value: String(locations.length), label: "Country guides" },
              { value: "1-to-1", label: "Live online lessons" },
              { value: `${TRIAL.durationMinutes} min`, label: "Trial duration" },
              { value: `$${TRIAL.price}`, label: "Trial price" },
            ].map((s) => (
              <div key={s.label} style={{ textAlign: "center", background: "var(--ivory)", border: "1px solid var(--border)", borderRadius: 14, padding: "22px 12px" }}>
                <div style={{ fontSize: "1.5rem", fontWeight: 800, color: "var(--emerald)", lineHeight: 1.2 }}>{s.value}</div>
                <div style={{ fontSize: ".78rem", color: "var(--muted)", marginTop: 4 }}>{s.label}</div>
              </div>
            ))}
          </div>

          {/* Priority country cards */}
          <div style={{ textAlign: "center", marginBottom: 32 }}>
            <span className="section-eyebrow"><Globe size={13} style={{ display: "inline", verticalAlign: "middle", marginRight: 4 }} /> Priority Country Guides</span>
            <h2 className="section-title">Local Planning for <em className="accent">Priority Markets</em></h2>
            <p className="section-desc center">
              These guides lead with local timezone, language and billing context. NoorPath teaches online; listing a country or city does not indicate a physical branch or established local customer base.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {priorityLocations.map((l) => (
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

          <div style={{ textAlign: "center", marginBottom: 28 }}>
            <span className="section-eyebrow">Additional Existing Guides</span>
            <h2 className="section-title">Other <em className="accent">Country Guides</em></h2>
            <p className="section-desc center">
              These existing pages remain available in natural English with local-time scheduling guidance. They are supporting guides, not claims of local premises.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {secondaryLocations.map((l) => (
              <div key={l.country} className="content-card">
                <div style={{ fontSize: "2.2rem", marginBottom: 10 }}>{l.flag}</div>
                <h2 style={{ fontFamily: "var(--font-playfair), serif", fontSize: "1.05rem", color: "var(--charcoal)", marginBottom: 6 }}>
                  Online Quran Classes {l.country}
                </h2>
                <p style={{ color: "var(--muted)", fontSize: ".82rem", marginBottom: 8 }}>{l.timezone}</p>
                <p style={{ color: "var(--muted)", fontSize: ".86rem", lineHeight: 1.6, marginBottom: 16 }}>{l.desc}</p>
                <Link href={`/locations/${l.slug}`} style={{ display: "block", textAlign: "center", background: "rgba(10,110,79,.08)", color: "var(--emerald)", padding: "9px 18px", borderRadius: 10, fontSize: ".83rem", fontWeight: 700, textDecoration: "none" }}>
                  View Country Guide →
                </Link>
              </div>
            ))}
          </div>

          {/* Popular cities */}
          <div style={{ textAlign: "center", marginBottom: 32 }}>
            <span className="section-eyebrow"><MapPin size={13} style={{ display: "inline", verticalAlign: "middle", marginRight: 4 }} /> Popular Cities</span>
            <h2 className="section-title">Quran Classes in <em className="accent">Your City</em></h2>
            <p className="section-desc center">
              Dedicated city guides with timezone context, community details, and online tutor matching — no travel needed.
            </p>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 10, justifyContent: "center", marginBottom: 64 }}>
            {cities.map((c) => (
              <Link key={c.slug} href={`/online-quran-classes/${c.slug}`} style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: 6, padding: "9px 16px", background: "#fff", border: "1px solid var(--border)", borderRadius: 12, fontSize: ".85rem", color: "var(--charcoal)", fontWeight: 600 }}>
                {c.flag} Quran Classes in {c.city}
              </Link>
            ))}
          </div>

          {/* Timezone guide */}
          <div style={{ textAlign: "center", marginBottom: 32 }}>
            <span className="section-eyebrow"><Clock size={13} style={{ display: "inline", verticalAlign: "middle", marginRight: 4 }} /> Scheduling</span>
            <h2 className="section-title">Available in <em className="accent">Your Timezone</em></h2>
            <p className="section-desc center">
              These are planning references, not guaranteed operating hours. Request a preferred local-time window; the exact recurring time is confirmed only after a suitable tutor is matched.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-5 mb-16">
            {timezones.map((tz) => (
              <div key={tz.label} className="content-card" style={{ textAlign: "center" }}>
                <div style={{ fontSize: "2rem", marginBottom: 8 }}>{tz.flag}</div>
                <div style={{ fontWeight: 700, color: "var(--charcoal)", marginBottom: 4 }}>{tz.label}</div>
                <div style={{ fontSize: ".78rem", color: "var(--emerald)", fontWeight: 600, marginBottom: 4 }}>{tz.zone}</div>
                <div style={{ fontSize: ".78rem", color: "var(--muted)", lineHeight: 1.55 }}>
                  {tz.guidance}
                </div>
              </div>
            ))}
          </div>

          {/* Online lesson options */}
          <div style={{ textAlign: "center", marginBottom: 32 }}>
            <span className="section-eyebrow">✅ Lesson Options</span>
            <h2 className="section-title">Plan Your <em className="accent">Online Lessons</em></h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-16">
            {[
              "Tutor matching based on level and timezone",
              "Female tutor requests for sisters and daughters",
              "1-on-1 private sessions via Zoom or Google Meet",
              "Morning, evening, or weekend scheduling requests",
              `${PRICING_PLANS[0].name}: $${PRICING_PLANS[0].monthlyPriceUsd}/month`,
              `Sibling discounts: ${FAMILY_DISCOUNTS.map(({ siblings, discountPercent }) => `${siblings} ${discountPercent}%`).join(" · ")}`,
              `${TRIAL.durationMinutes}-minute trial — $${TRIAL.price}, no credit card`,
              "Qaida, Tajweed, Hifz, Arabic, and Islamic Studies options",
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
              {TRIAL.durationMinutes}-minute trial for ${TRIAL.price}; no credit card required. {TRIAL.availabilityNote}
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
