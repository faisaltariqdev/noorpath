import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { cities, getCity } from "@/data/cities";
import { getLocation } from "@/data/locations";
import { ORGANIZATION_REF } from "@/lib/organizationSchema";
import { CheckCircle, Clock, MapPin } from "lucide-react";

interface Props {
  params: Promise<{ city: string }>;
}

export const dynamicParams = false;
export const revalidate = false;

export async function generateStaticParams() {
  return cities.map((c) => ({ city: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { city } = await params;
  const c = getCity(city);
  if (!c) return {};
  const description = `Online Quran classes in ${c.city} for kids & adults — certified 1-on-1 Quran tutors from home. Noorani Qaida, Tajweed, Hifz & female teachers in your ${c.timezone} timezone. Free 30-min trial, no travel needed.`;
  return {
    title: `Online Quran Classes in ${c.city} for Kids & Adults | NoorPath`,
    description,
    keywords: c.keywords,
    alternates: { canonical: `https://www.noorpath.online/online-quran-classes/${c.slug}` },
    openGraph: {
      title: `Online Quran Classes in ${c.city} | NoorPath Academy`,
      description,
      url: `https://www.noorpath.online/online-quran-classes/${c.slug}`,
      images: [{ url: "/og-image.png", width: 1200, height: 630, alt: `Online Quran Classes ${c.city}` }],
    },
    twitter: {
      card: "summary_large_image",
      title: `Online Quran Classes in ${c.city} | NoorPath`,
      description: `Certified online Quran tutors for families in ${c.city}. Free trial available.`,
      images: ["/og-image.png"],
    },
  };
}

export default async function CityPage({ params }: Props) {
  const { city } = await params;
  const c = getCity(city);
  if (!c) notFound();

  const country = getLocation(c.countrySlug);
  const siblingCities = cities.filter((x) => x.countrySlug === c.countrySlug && x.slug !== c.slug);

  const faqs = [
    {
      q: `Are there online Quran classes for families in ${c.city}?`,
      a: `Yes. NoorPath Academy offers live 1-on-1 online Quran classes for children and adults in ${c.city}. You attend private sessions from home via Zoom or Google Meet with a certified tutor, scheduled in your ${c.timezone} timezone. A free 30-minute trial is available with no credit card required.`,
    },
    {
      q: `How much do online Quran classes cost in ${c.city}?`,
      a: `Plans start from $29/month (about ${c.approxPrice}/month, billed in USD), with a free 30-minute trial class. NoorPath offers Starter, Standard and Intensive plans plus family discounts for 2+ siblings.`,
    },
    {
      q: `What is the best time for Quran classes in ${c.city}?`,
      a: `Classes for ${c.city} run in your local ${c.timezone} timezone — morning, afternoon, and evening, plus weekend slots. ${c.localContext.split(". ").slice(-1)[0]}`,
    },
    {
      q: `Do you have female Quran teachers for students in ${c.city}?`,
      a: `Yes. NoorPath has certified female Quran teachers (Hafiza) available for sisters and daughters in ${c.city}. Simply request a female tutor when you book your free trial.`,
    },
    {
      q: `Is online Quran learning as effective as going to a masjid in ${c.city}?`,
      a: `For most families, one-on-one online classes are more effective than crowded group madrasa lessons — your child gets the tutor's full attention, structured weekly progress reports, and no travel time. It is the ideal complement to community and masjid life in ${c.city}.`,
    },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        name: `Online Quran Classes in ${c.city}`,
        description: `NoorPath Academy provides certified 1-on-1 online Quran education to families in ${c.city}, ${c.country}. Live classes: Noorani Qaida, Tajweed, Hifz, Arabic, and Islamic studies.`,
        provider: ORGANIZATION_REF,
        areaServed: { "@type": "City", name: c.city, containedInPlace: { "@type": "Country", name: c.country } },
        serviceType: "Online Quran Education",
        url: `https://www.noorpath.online/online-quran-classes/${c.slug}`,
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: c.rating,
          ratingCount: c.reviews,
          bestRating: "5",
          worstRating: "1",
        },
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "USD",
          description: "Free 30-minute trial class",
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
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://www.noorpath.online" },
          { "@type": "ListItem", position: 2, name: "Locations", item: "https://www.noorpath.online/locations" },
          { "@type": "ListItem", position: 3, name: c.country, item: `https://www.noorpath.online/locations/${c.countrySlug}` },
          { "@type": "ListItem", position: 4, name: c.city, item: `https://www.noorpath.online/online-quran-classes/${c.slug}` },
        ],
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
            <Link href="/" style={{ color: "var(--gold-lt)", fontSize: ".85rem" }}>Home</Link>
            <span style={{ color: "rgba(255,255,255,.4)", margin: "0 8px" }}>›</span>
            <Link href="/locations" style={{ color: "var(--gold-lt)", fontSize: ".85rem" }}>Locations</Link>
            <span style={{ color: "rgba(255,255,255,.4)", margin: "0 8px" }}>›</span>
            <Link href={`/locations/${c.countrySlug}`} style={{ color: "var(--gold-lt)", fontSize: ".85rem" }}>{c.country}</Link>
            <span style={{ color: "rgba(255,255,255,.4)", margin: "0 8px" }}>›</span>
            <span style={{ color: "rgba(255,255,255,.6)", fontSize: ".85rem" }}>{c.city}</span>
          </nav>
          <div style={{ fontSize: "3.5rem", marginBottom: 12 }}>{c.flag}</div>
          <h1>Online Quran Classes in {c.city}</h1>
          <p style={{ maxWidth: 640 }}>
            Certified 1-on-1 online Quran tutors for Muslim families in {c.city} — Noorani Qaida, Tajweed, Hifz and kids classes, all in your {c.timezone} timezone. No travel, first class free.
          </p>
          <div style={{ display: "flex", gap: 16, marginTop: 20, flexWrap: "wrap" }}>
            {[
              { icon: "🕐", label: c.timezone },
              { icon: "👥", label: c.population },
              { icon: "⭐", label: `${c.rating}/5 · ${c.reviews}+ reviews` },
            ].map((item) => (
              <div key={item.label} style={{ display: "flex", alignItems: "center", gap: 6, background: "rgba(255,255,255,.1)", borderRadius: 20, padding: "6px 14px", fontSize: ".83rem", color: "rgba(255,255,255,.9)" }}>
                <span>{item.icon}</span> {item.label}
              </div>
            ))}
          </div>
        </div>
      </div>

      <section style={{ padding: "60px 0" }}>
        <div className="max-w-[1200px] mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

            {/* Main content */}
            <div className="lg:col-span-2">

              {/* About */}
              <div className="content-card" style={{ marginBottom: 28 }}>
                <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: "1.5rem", color: "var(--charcoal)", marginBottom: 16 }}>
                  Learn Quran Online in {c.city}
                </h2>
                <p style={{ color: "var(--muted)", lineHeight: 1.8, fontSize: "1rem", marginBottom: 16 }}>
                  NoorPath Academy connects Muslim families in {c.city} with certified, Ijazah-qualified Quran tutors for live 1-on-1 online lessons. Whether your child is starting with Noorani Qaida, perfecting Tajweed, beginning Hifz, or you want to learn Quran as an adult, our tutors adapt to your goals and schedule.
                </p>
                <p style={{ color: "var(--muted)", lineHeight: 1.8, fontSize: "1rem" }}>{c.localContext}</p>
              </div>

              {/* Serving country cluster link */}
              {country && (
                <div className="content-card" style={{ marginBottom: 28, display: "flex", alignItems: "center", gap: 14, flexWrap: "wrap" }}>
                  <MapPin size={20} style={{ color: "var(--emerald)", flexShrink: 0 }} />
                  <span style={{ color: "var(--slate)", fontSize: ".92rem" }}>
                    We also serve families across all of {c.country}.
                  </span>
                  <Link href={`/locations/${c.countrySlug}`} style={{ color: "var(--emerald)", fontWeight: 700, fontSize: ".9rem", textDecoration: "none", marginLeft: "auto" }}>
                    Online Quran Classes in {c.country} →
                  </Link>
                </div>
              )}

              {/* Popular courses */}
              <div className="content-card" style={{ marginBottom: 28 }}>
                <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: "1.3rem", color: "var(--charcoal)", marginBottom: 16 }}>
                  Popular Quran Courses in {c.city}
                </h2>
                <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                  {[
                    { href: "/courses/noorani-qaida-online", label: "Noorani Qaida Online — Learn Arabic letters from scratch" },
                    { href: "/courses/tajweed-classes-online", label: "Tajweed Classes Online — Beautiful Quran recitation" },
                    { href: "/courses/quran-classes-for-kids", label: "Quran Classes for Kids — All-in-one kids programme" },
                    { href: "/courses/hifz-program-online", label: "Hifz Program Online — Quran memorization" },
                    { href: "/female-quran-teacher-online", label: "Female Quran Teacher Online — For sisters & daughters" },
                  ].map((x) => (
                    <Link key={x.href} href={x.href} style={{ color: "var(--emerald)", fontWeight: 600, fontSize: ".9rem", textDecoration: "none" }}>
                      → {x.label}
                    </Link>
                  ))}
                </div>
              </div>

              {/* What we offer */}
              <div className="content-card" style={{ marginBottom: 28 }}>
                <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: "1.3rem", color: "var(--charcoal)", marginBottom: 16 }}>
                  What Families in {c.city} Get
                </h2>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                  {[
                    "Certified Ijazah-qualified tutors",
                    `Classes in your ${c.timezone} timezone`,
                    "1-on-1 private lessons via Zoom",
                    "Female tutor option available",
                    "Weekly parent progress reports",
                    "Noorani Qaida, Tajweed, Hifz & Arabic",
                    "Family discounts for siblings",
                    "Free 30-minute trial — no card needed",
                  ].map((item) => (
                    <div key={item} style={{ display: "flex", gap: 10, alignItems: "flex-start", padding: "12px", background: "rgba(10,110,79,.04)", borderRadius: 10 }}>
                      <CheckCircle size={16} style={{ color: "var(--emerald)", marginTop: 1, flexShrink: 0 }} />
                      <span style={{ fontSize: ".85rem", color: "var(--slate)" }}>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* FAQ */}
              <div className="content-card" style={{ marginBottom: 28 }}>
                <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: "1.3rem", color: "var(--charcoal)", marginBottom: 16 }}>
                  Frequently Asked Questions — Quran Classes in {c.city}
                </h2>
                <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                  {faqs.map((f) => (
                    <div key={f.q}>
                      <h3 style={{ fontSize: ".95rem", fontWeight: 700, color: "var(--charcoal)", marginBottom: 6 }}>{f.q}</h3>
                      <p style={{ color: "var(--muted)", lineHeight: 1.75, fontSize: ".88rem", margin: 0 }}>{f.a}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Sibling cities */}
              {siblingCities.length > 0 && (
                <div>
                  <h3 style={{ fontFamily: "'Playfair Display',serif", fontSize: "1.1rem", color: "var(--charcoal)", marginBottom: 14 }}>
                    Other Cities in {c.country}
                  </h3>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                    {siblingCities.map((s) => (
                      <Link key={s.slug} href={`/online-quran-classes/${s.slug}`} style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: 6, padding: "8px 14px", background: "#fff", border: "1px solid var(--border)", borderRadius: 10, fontSize: ".83rem", color: "var(--charcoal)", fontWeight: 600 }}>
                        {s.flag} {s.city}
                      </Link>
                    ))}
                    <Link href="/locations" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: 6, padding: "8px 14px", background: "rgba(10,110,79,.08)", border: "1px solid rgba(10,110,79,.2)", borderRadius: 10, fontSize: ".83rem", color: "var(--emerald)", fontWeight: 600 }}>
                      All Locations →
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div>
              <div style={{ background: "linear-gradient(135deg, #0a3d28, #0d5436)", borderRadius: 20, padding: 28, textAlign: "center", position: "sticky", top: 90 }}>
                <div style={{ fontSize: "3rem", marginBottom: 12 }}>{c.flag}</div>
                <h3 style={{ fontFamily: "'Playfair Display',serif", color: "#fff", fontSize: "1.15rem", marginBottom: 10 }}>
                  Quran Classes in {c.city}
                </h3>
                <p style={{ color: "rgba(255,255,255,.75)", fontSize: ".83rem", marginBottom: 8, lineHeight: 1.6 }}>
                  Plans from $29/mo (~{c.approxPrice}). Free 30-minute trial — no credit card.
                </p>
                <div style={{ display: "flex", flexDirection: "column", gap: 8, margin: "16px 0" }}>
                  {[
                    `✅ ${c.timezone} timezone covered`,
                    "✅ Certified tutors with Ijazah",
                    "✅ 1-on-1 personalised classes",
                    "✅ Female tutor option",
                    "✅ Kids & adults welcome",
                  ].map((p) => (
                    <div key={p} style={{ color: "rgba(255,255,255,.85)", fontSize: ".82rem", textAlign: "left" }}>{p}</div>
                  ))}
                </div>
                <Link href="/online-quran-classes#cta" style={{ display: "block", background: "var(--gold)", color: "var(--charcoal)", padding: "13px", borderRadius: 12, fontWeight: 700, textDecoration: "none", fontSize: ".95rem" }}>
                  Book Free Trial →
                </Link>
                <div style={{ marginTop: 14, color: "rgba(255,255,255,.5)", fontSize: ".73rem" }}>
                  ⭐⭐⭐⭐⭐ Rated {c.rating}/5 by {c.reviews}+ {c.city} families
                </div>
              </div>

              <div className="content-card" style={{ marginTop: 20 }}>
                <h3 style={{ fontFamily: "'Playfair Display',serif", fontSize: "1rem", color: "var(--charcoal)", marginBottom: 14 }}>
                  <Clock size={16} style={{ display: "inline", marginRight: 6, color: "var(--emerald)" }} />
                  Class Timings ({c.timezone})
                </h3>
                <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                  {["Morning: 6 AM – 10 AM", "Afternoon: 12 PM – 3 PM", "Evening: 6 PM – 10 PM", "Weekend slots available"].map((t) => (
                    <div key={t} style={{ fontSize: ".85rem", color: "var(--slate)", padding: "8px 10px", background: "var(--ivory)", borderRadius: 8 }}>
                      🕐 {t}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="cta-section">
        <div className="max-w-[1200px] mx-auto px-4 text-center">
          <h2 style={{ fontFamily: "'Playfair Display',serif", color: "#fff", fontSize: "2rem", marginBottom: 16 }}>
            Start Quran Learning in {c.city} Today
          </h2>
          <p style={{ color: "rgba(255,255,255,.75)", marginBottom: 28 }}>
            Join families from {c.city} already learning with NoorPath Academy. Free trial — no commitment.
          </p>
          <Link href="/online-quran-classes#cta" className="btn-primary-np">
            Book Free Trial Class →
          </Link>
        </div>
      </section>
    </>
  );
}
