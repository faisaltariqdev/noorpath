import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { locations, getLocation } from "@/data/locations";
import { getLocationFaqs, getLocationKeywords, getLocationSeoParagraphs } from "@/data/locationContent";
import { ORGANIZATION_REF } from "@/lib/organizationSchema";
import { CheckCircle, Clock, Globe } from "lucide-react";

interface Props {
  params: Promise<{ slug: string }>;
}

export const dynamicParams = false;
export const revalidate = false;

export async function generateStaticParams() {
  return locations.map((l) => ({ slug: l.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const loc = getLocation(slug);
  if (!loc) return {};
  const description = `Learn Quran online in ${loc.country} with certified 1-on-1 tutors. Noorani Qaida, Tajweed, Hifz & kids classes. ${loc.timezone} slots. Free trial.`;
  return {
    title: `Online Quran Classes ${loc.country} — Learn Quran Online | NoorPath`,
    description,
    keywords: getLocationKeywords(loc),
    alternates: { canonical: `https://www.noorpath.online/locations/${slug}` },
    openGraph: {
      title: `Online Quran Classes in ${loc.country} | NoorPath Academy`,
      description,
      url: `https://www.noorpath.online/locations/${slug}`,
      images: [{ url: "/og-image.png", width: 1200, height: 630, alt: `Online Quran Classes ${loc.country}` }],
    },
    twitter: {
      card: "summary_large_image",
      title: `Online Quran Classes in ${loc.country} | NoorPath`,
      description: `${loc.desc} Free trial available.`,
      images: ["/og-image.png"],
    },
  };
}

export default async function LocationDetailPage({ params }: Props) {
  const { slug } = await params;
  const loc = getLocation(slug);
  if (!loc) notFound();

  const related = locations.filter((l) => l.slug !== slug).slice(0, 4);
  const faqs = getLocationFaqs(loc);
  const seoParagraphs = getLocationSeoParagraphs(loc);

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        name: `Online Quran Classes in ${loc.country}`,
        description: `NoorPath Academy provides certified online Quran education to families in ${loc.country}. Covering ${loc.cities}. Live 1-on-1 classes: Qaida, Tajweed, Hifz, Arabic, Islamic studies.`,
        provider: ORGANIZATION_REF,
        areaServed: { "@type": "Country", name: loc.country },
        serviceType: "Online Quran Education",
        url: `https://www.noorpath.online/locations/${slug}`,
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "4.9",
          ratingCount: "2400",
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
          { "@type": "ListItem", position: 3, name: loc.country, item: `https://www.noorpath.online/locations/${slug}` },
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
            <span style={{ color: "rgba(255,255,255,.6)", fontSize: ".85rem" }}>{loc.country}</span>
          </nav>
          <div style={{ fontSize: "3.5rem", marginBottom: 12 }}>{loc.flag}</div>
          <h1>Online Quran Classes in {loc.country}</h1>
          <p style={{ maxWidth: 620 }}>{loc.desc}</p>
          <div style={{ display: "flex", gap: 16, marginTop: 20, flexWrap: "wrap" }}>
            {[
              { icon: "🕐", label: loc.timezone },
              { icon: "📍", label: loc.cities.split(",")[0].trim() + " & more" },
              { icon: "👥", label: loc.population },
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
                  Online Quran Classes for {loc.country} Families
                </h2>
                <p style={{ color: "var(--muted)", lineHeight: 1.8, fontSize: "1rem", marginBottom: 16 }}>
                  NoorPath Academy provides certified, professional online Quran education to Muslim families across {loc.country} — covering major cities including {loc.cities}. Our tutors are fully certified with Ijazah in Quran recitation and have years of experience teaching students of all ages and backgrounds.
                </p>
                <p style={{ color: "var(--muted)", lineHeight: 1.8, fontSize: "1rem" }}>
                  Whether you are looking for Noorani Qaida for beginners, Tajweed classes, Quran memorization (Hifz), or Islamic studies, we have a course and a tutor for you — with classes scheduled to fit your {loc.timezone} timezone perfectly.
                </p>
                {seoParagraphs.map((para) => (
                  <p key={para.slice(0, 40)} style={{ color: "var(--muted)", lineHeight: 1.8, fontSize: "1rem", marginTop: 16 }}>
                    {para}
                  </p>
                ))}
              </div>

              {/* Popular courses for this country */}
              <div className="content-card" style={{ marginBottom: 28 }}>
                <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: "1.3rem", color: "var(--charcoal)", marginBottom: 16 }}>
                  Popular Online Quran Courses in {loc.country}
                </h2>
                <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                  {[
                    { href: "/courses/noorani-qaida-online", label: "Noorani Qaida Online — Learn Arabic letters from scratch" },
                    { href: "/courses/tajweed-classes-online", label: "Tajweed Classes Online — Beautiful Quran recitation" },
                    { href: "/courses/quran-classes-for-kids", label: "Quran Classes for Kids — All-in-one kids programme" },
                    { href: "/courses/hifz-program-online", label: "Hifz Program Online — Quran memorization" },
                    { href: "/female-quran-teacher-online", label: "Female Quran Teacher Online — For sisters & daughters" },
                  ].map((c) => (
                    <Link key={c.href} href={c.href} style={{ color: "var(--emerald)", fontWeight: 600, fontSize: ".9rem", textDecoration: "none" }}>
                      → {c.label}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Cities covered */}
              <div className="content-card" style={{ marginBottom: 28 }}>
                <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: "1.3rem", color: "var(--charcoal)", marginBottom: 16 }}>
                  Cities We Serve in {loc.country}
                </h2>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
                  {loc.cities.split(",").map((city) => (
                    <span key={city} style={{ background: "rgba(10,110,79,.08)", color: "var(--emerald)", borderRadius: 20, padding: "6px 14px", fontSize: ".85rem", fontWeight: 600, border: "1px solid rgba(10,110,79,.15)" }}>
                      {loc.flag} {city.trim()}
                    </span>
                  ))}
                  <span style={{ background: "var(--ivory)", color: "var(--muted)", borderRadius: 20, padding: "6px 14px", fontSize: ".85rem", fontWeight: 500, border: "1px solid var(--border)" }}>
                    + All cities online
                  </span>
                </div>
              </div>

              {/* What we offer */}
              <div className="content-card" style={{ marginBottom: 28 }}>
                <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: "1.3rem", color: "var(--charcoal)", marginBottom: 16 }}>
                  What We Offer
                </h2>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                  {[
                    "Noorani Qaida for beginners",
                    "Tajweed rules and recitation",
                    "Quran Hifz (memorization)",
                    "Quran classes for kids",
                    "Arabic language online",
                    "Islamic studies (Fiqh, Seerah)",
                    "Daily duas for children",
                    "Female tutor option available",
                  ].map((item) => (
                    <div key={item} style={{ display: "flex", gap: 10, alignItems: "flex-start", padding: "12px", background: "rgba(10,110,79,.04)", borderRadius: 10 }}>
                      <CheckCircle size={16} style={{ color: "var(--emerald)", marginTop: 1, flexShrink: 0 }} />
                      <span style={{ fontSize: ".85rem", color: "var(--slate)" }}>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Why NoorPath */}
              <div className="content-card" style={{ marginBottom: 28 }}>
                <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: "1.3rem", color: "var(--charcoal)", marginBottom: 16 }}>
                  Why Muslim Families in {loc.country} Choose NoorPath
                </h2>
                <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                  {[
                    { emoji: "⏰", title: `${loc.timezone} Timezone`, desc: `All classes scheduled to fit your ${loc.timezone} timezone — morning, afternoon, or evening.` },
                    { emoji: "👩‍🏫", title: "Certified Tutors with Ijazah", desc: "All our teachers hold Ijazah in Quran recitation — verified credentials, professional teaching." },
                    { emoji: "🌙", title: "1-on-1 Online Classes", desc: "Private, personalised sessions via Zoom or Skype — your child gets the tutor's full attention." },
                    { emoji: "👨‍👩‍👧‍👦", title: "Family Plans", desc: "Enrol multiple children and save up to 30% with our family pricing plans." },
                    { emoji: <Globe size={20} />, title: "40+ Countries Served", desc: `${loc.country} is part of our global community of 12,000+ students in 40+ countries.` },
                  ].map((item) => (
                    <div key={item.title} style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
                      <div style={{ fontSize: "1.5rem", flexShrink: 0 }}>{typeof item.emoji === "string" ? item.emoji : item.emoji}</div>
                      <div>
                        <div style={{ fontWeight: 700, color: "var(--charcoal)", marginBottom: 2, fontSize: ".95rem" }}>{item.title}</div>
                        <div style={{ fontSize: ".85rem", color: "var(--muted)", lineHeight: 1.6 }}>{item.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* FAQ */}
              <div className="content-card" style={{ marginBottom: 28 }}>
                <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: "1.3rem", color: "var(--charcoal)", marginBottom: 16 }}>
                  Frequently Asked Questions — Online Quran Classes {loc.country}
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

              {/* Other locations */}
              <div>
                <h3 style={{ fontFamily: "'Playfair Display',serif", fontSize: "1.1rem", color: "var(--charcoal)", marginBottom: 14 }}>
                  Other Locations
                </h3>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                  {related.map((r) => (
                    <Link key={r.slug} href={`/locations/${r.slug}`} style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: 6, padding: "8px 14px", background: "#fff", border: "1px solid var(--border)", borderRadius: 10, fontSize: ".83rem", color: "var(--charcoal)", fontWeight: 600 }}>
                      {r.flag} {r.country}
                    </Link>
                  ))}
                  <Link href="/locations" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: 6, padding: "8px 14px", background: "rgba(10,110,79,.08)", border: "1px solid rgba(10,110,79,.2)", borderRadius: 10, fontSize: ".83rem", color: "var(--emerald)", fontWeight: 600 }}>
                    View All Locations →
                  </Link>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div>
              <div style={{ background: "linear-gradient(135deg, #0a3d28, #0d5436)", borderRadius: 20, padding: 28, textAlign: "center", position: "sticky", top: 90 }}>
                <div style={{ fontSize: "3rem", marginBottom: 12 }}>{loc.flag}</div>
                <h3 style={{ fontFamily: "'Playfair Display',serif", color: "#fff", fontSize: "1.15rem", marginBottom: 10 }}>
                  Quran Classes for {loc.country}
                </h3>
                <p style={{ color: "rgba(255,255,255,.75)", fontSize: ".83rem", marginBottom: 8, lineHeight: 1.6 }}>
                  Free 30-minute trial. No credit card needed.
                </p>
                <div style={{ display: "flex", flexDirection: "column", gap: 8, margin: "16px 0" }}>
                  {[
                    `✅ ${loc.timezone} timezone covered`,
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
                  ⭐⭐⭐⭐⭐ Rated 4.9/5 by 2,400+ parents
                </div>
              </div>

              <div className="content-card" style={{ marginTop: 20 }}>
                <h3 style={{ fontFamily: "'Playfair Display',serif", fontSize: "1rem", color: "var(--charcoal)", marginBottom: 14 }}>
                  <Clock size={16} style={{ display: "inline", marginRight: 6, color: "var(--emerald)" }} />
                  Class Timings ({loc.timezone})
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
            Start Quran Learning in {loc.country} Today
          </h2>
          <p style={{ color: "rgba(255,255,255,.75)", marginBottom: 28 }}>
            Join hundreds of families from {loc.country} already learning with NoorPath Academy. Free trial — no commitment.
          </p>
          <Link href="/online-quran-classes#cta" className="btn-primary-np">
            Book Free Trial Class →
          </Link>
        </div>
      </section>
    </>
  );
}
