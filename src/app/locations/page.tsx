import type { Metadata } from "next";
import Link from "next/link";
import { locations } from "@/data/locations";

export const metadata: Metadata = {
  title: "Online Quran Classes by Location — USA, UK, Canada, Australia & More",
  description: "NoorPath Academy serves families in 40+ countries. Find online Quran classes for your location — USA, UK, Canada, Australia, UAE, Saudi Arabia, and more.",
  alternates: { canonical: "https://www.noorpath.online/locations" },
  openGraph: {
    title: "Online Quran Classes by Location — USA, UK, Canada, Australia & More",
    description: "NoorPath Academy serves 12,000+ students in 40+ countries. Find Quran classes in your country.",
    url: "https://www.noorpath.online/locations",
    images: [{ url: "/og-image.svg", width: 1200, height: 630, alt: "Online Quran Classes Worldwide — NoorPath Academy" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Online Quran Classes by Location | NoorPath Academy",
    description: "USA, UK, Canada, Australia, UAE and 40+ countries. Free trial.",
    images: ["/og-image.svg"],
  },
};


const locationsJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      name: "Online Quran Classes — Worldwide",
      description: "NoorPath Academy provides online Quran education to families in 40+ countries. All timezones covered.",
      provider: { "@type": "EducationalOrganization", name: "NoorPath Academy", url: "https://www.noorpath.online" },
      areaServed: ["United States","United Kingdom","Canada","Australia","UAE","Saudi Arabia","Pakistan","Germany","Malaysia","Bangladesh","South Africa","Indonesia"],
      serviceType: "Online Quran Education",
      url: "https://www.noorpath.online/locations",
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

      <div className="page-hero">
        <div className="max-w-[1200px] mx-auto px-4 page-hero-content">
          <nav aria-label="Breadcrumb" style={{ marginBottom: 16 }}>
            <Link href="/" style={{ color: "var(--gold-lt)", fontSize: ".85rem" }}>Home</Link>
            <span style={{ color: "rgba(255,255,255,.4)", margin: "0 8px" }}>›</span>
            <span style={{ color: "rgba(255,255,255,.6)", fontSize: ".85rem" }}>Locations</span>
          </nav>
          <h1>Online Quran Classes for Families Worldwide</h1>
          <p>NoorPath Academy serves 12,000+ students in 40+ countries — with flexible timezone scheduling, certified tutors, and family plans.</p>
        </div>
      </div>

      <section>
        <div className="max-w-[1200px] mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {locations.map((l) => (
              <div key={l.country} className="content-card">
                <div style={{ fontSize: "2.5rem", marginBottom: 12 }}>{l.flag}</div>
                <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: "1.1rem", color: "var(--charcoal)", marginBottom: 6 }}>
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
        </div>
      </section>
    </>
  );
}
