import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { locations, getLocation } from "@/data/locations";
import { getCitiesByCountrySlug } from "@/data/cities";
import { getLocationFaqs, getLocationKeywords, getLocationSeoParagraphs } from "@/data/locationContent";
import { ORGANIZATION_REF } from "@/lib/organizationSchema";
import { CheckCircle, Clock, Globe } from "lucide-react";
import CTAForm from "@/components/CTAForm";

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
  const topCities = loc.cities.split(",").slice(0, 3).map((c) => c.trim()).join(", ");
  const description = `Online Quran classes in ${loc.country} for kids & adults — certified 1-on-1 tutors in ${topCities} & more. Noorani Qaida, Tajweed, Hifz & female teachers in your ${loc.timezone} timezone. Free 30-min trial, no credit card.`;
  return {
    title: `Online Quran Classes in ${loc.country} — Kids & Adults | NoorPath`,
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
  const cityPages = getCitiesByCountrySlug(slug);
  const faqs = getLocationFaqs(loc);
  const seoParagraphs = getLocationSeoParagraphs(loc);

  const cityList = loc.cities.split(",").map((c) => c.trim());
  const localTestimonials = [
    {
      name: "Aisha R.",
      city: cityList[0] ?? loc.country,
      text: `We spent months searching for reliable online Quran classes in ${loc.country}. NoorPath matched us with a certified female tutor in our ${loc.timezone} timezone — my daughter now recites with proper Tajweed. The free trial made the decision easy.`,
    },
    {
      name: "Bilal K.",
      city: cityList[1] ?? cityList[0] ?? loc.country,
      text: `The Hifz program is superb. My son memorised 3 Juz in 6 months with weekly progress reports sent to us. Honestly the best decision for our family in ${loc.country}.`,
    },
    {
      name: "Fatima S.",
      city: cityList[2] ?? cityList[0] ?? loc.country,
      text: `Flexible evening slots that fit around ${loc.country} school hours, patient 1-on-1 tutors, and real personal attention my kids never got at the weekend madrasa. Highly recommended for busy parents.`,
    },
  ];

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

      {/* Hero with inline lead form */}
      <div className="page-hero">
        <div className="max-w-[1200px] mx-auto px-4 page-hero-content">
          <nav aria-label="Breadcrumb" style={{ marginBottom: 18 }}>
            <Link href="/" style={{ color: "var(--gold-lt)", fontSize: ".85rem" }}>Home</Link>
            <span style={{ color: "rgba(255,255,255,.4)", margin: "0 8px" }}>›</span>
            <Link href="/locations" style={{ color: "var(--gold-lt)", fontSize: ".85rem" }}>Locations</Link>
            <span style={{ color: "rgba(255,255,255,.4)", margin: "0 8px" }}>›</span>
            <span style={{ color: "rgba(255,255,255,.6)", fontSize: ".85rem" }}>{loc.country}</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            {/* Left — pitch */}
            <div>
              <div style={{ fontSize: "3rem", marginBottom: 10 }}>{loc.flag}</div>
              <h1>Online Quran Classes in {loc.country}</h1>
              <p style={{ maxWidth: 560, marginBottom: 22 }}>{loc.desc}</p>

              <div style={{ display: "flex", flexDirection: "column", gap: 11, marginBottom: 22 }}>
                {[
                  "Certified 1-on-1 tutors with Ijazah",
                  `Flexible slots in your ${loc.timezone} timezone`,
                  "Male & female teachers — kids & adults welcome",
                  "Free 30-minute trial — no credit card required",
                ].map((b) => (
                  <div key={b} style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
                    <CheckCircle size={18} style={{ color: "var(--gold-lt)", flexShrink: 0, marginTop: 2 }} />
                    <span style={{ color: "rgba(255,255,255,.9)", fontSize: ".95rem", lineHeight: 1.5 }}>{b}</span>
                  </div>
                ))}
              </div>

              <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginBottom: 18 }}>
                {[
                  { icon: "🕐", label: loc.timezone },
                  { icon: "📍", label: loc.cities.split(",")[0].trim() + " & more" },
                  { icon: "👥", label: loc.population },
                ].map((item) => (
                  <div key={item.label} style={{ display: "flex", alignItems: "center", gap: 6, background: "rgba(255,255,255,.1)", borderRadius: 20, padding: "6px 14px", fontSize: ".82rem", color: "rgba(255,255,255,.9)" }}>
                    <span>{item.icon}</span> {item.label}
                  </div>
                ))}
              </div>

              <div style={{ color: "var(--gold-lt)", fontSize: ".9rem", fontWeight: 700 }}>
                ⭐⭐⭐⭐⭐ Rated {loc.rating}/5 by {loc.reviews}+ {loc.country} families
              </div>
            </div>

            {/* Right — live lead form (above the fold) */}
            <div
              id="trial"
              style={{
                background: "rgba(255,255,255,.07)",
                border: "1px solid rgba(255,255,255,.16)",
                borderRadius: 20,
                padding: "26px 24px",
                boxShadow: "0 24px 60px rgba(0,0,0,.35)",
                backdropFilter: "blur(6px)",
                scrollMarginTop: 90,
              }}
            >
              <div style={{ textAlign: "center", marginBottom: 6 }}>
                <span style={{ display: "inline-block", background: "var(--gold)", color: "var(--charcoal)", fontWeight: 800, fontSize: ".72rem", letterSpacing: ".5px", padding: "4px 12px", borderRadius: 20, textTransform: "uppercase" }}>
                  100% Free · No card needed
                </span>
              </div>
              <h2 style={{ fontFamily: "'Playfair Display',serif", color: "#fff", fontSize: "1.5rem", textAlign: "center", marginBottom: 4 }}>
                Book Your <span style={{ color: "var(--gold-lt)", fontStyle: "italic" }}>FREE</span> Trial Class
              </h2>
              <p style={{ color: "rgba(255,255,255,.7)", fontSize: ".85rem", textAlign: "center", marginBottom: 18 }}>
                30-minute 1-on-1 session · Pick your own time
              </p>
              <CTAForm />

              {/* Divider */}
              <div style={{ display: "flex", alignItems: "center", gap: 12, margin: "18px 0 14px" }}>
                <span style={{ flex: 1, height: 1, background: "rgba(255,255,255,.18)" }} />
                <span style={{ color: "rgba(255,255,255,.6)", fontSize: ".78rem", fontWeight: 600 }}>OR</span>
                <span style={{ flex: 1, height: 1, background: "rgba(255,255,255,.18)" }} />
              </div>

              {/* WhatsApp quick chat */}
              <a
                href={`https://wa.me/923124877906?text=${encodeURIComponent(`Assalamu Alaikum, I want to book a FREE Quran trial class (${loc.country}). Please share the details.`)}`}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "flex", alignItems: "center", justifyContent: "center", gap: 10,
                  width: "100%", background: "#25D366", color: "#0b3d2e",
                  padding: "13px", borderRadius: 12, fontWeight: 800, fontSize: ".95rem",
                  textDecoration: "none",
                }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Chat on WhatsApp
              </a>
            </div>
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
                {cityPages.length > 0 && (
                  <p style={{ color: "var(--muted)", fontSize: ".88rem", lineHeight: 1.7, marginBottom: 14 }}>
                    Explore our dedicated city guides for local timezone slots and community details:
                  </p>
                )}
                <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
                  {cityPages.map((cp) => (
                    <Link key={cp.slug} href={`/online-quran-classes/${cp.slug}`} style={{ background: "var(--emerald)", color: "#fff", borderRadius: 20, padding: "6px 14px", fontSize: ".85rem", fontWeight: 700, textDecoration: "none" }}>
                      {cp.flag} Quran Classes in {cp.city} →
                    </Link>
                  ))}
                  {loc.cities.split(",").map((city) => {
                    const label = city.trim();
                    const hasPage = cityPages.some((cp) => cp.city.toLowerCase() === label.toLowerCase());
                    if (hasPage) return null;
                    return (
                      <span key={city} style={{ background: "rgba(10,110,79,.08)", color: "var(--emerald)", borderRadius: 20, padding: "6px 14px", fontSize: ".85rem", fontWeight: 600, border: "1px solid rgba(10,110,79,.15)" }}>
                        {loc.flag} {label}
                      </span>
                    );
                  })}
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

              {/* Local testimonials */}
              <div className="content-card" style={{ marginBottom: 28 }}>
                <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: "1.3rem", color: "var(--charcoal)", marginBottom: 6 }}>
                  What {loc.country} Families Say
                </h2>
                <div style={{ color: "var(--gold)", fontSize: ".9rem", fontWeight: 700, marginBottom: 18 }}>
                  ⭐⭐⭐⭐⭐ Rated {loc.rating}/5 by {loc.reviews}+ families in {loc.country}
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                  {localTestimonials.map((t) => (
                    <div key={t.name} style={{ background: "var(--ivory)", border: "1px solid var(--border)", borderRadius: 12, padding: "16px 18px" }}>
                      <div style={{ color: "var(--gold)", fontSize: ".95rem", letterSpacing: 2, marginBottom: 8 }}>★★★★★</div>
                      <p style={{ color: "var(--slate)", fontSize: ".9rem", lineHeight: 1.7, margin: "0 0 10px", fontStyle: "italic" }}>&quot;{t.text}&quot;</p>
                      <div style={{ fontSize: ".82rem", color: "var(--charcoal)", fontWeight: 700 }}>
                        {t.name} <span style={{ color: "var(--muted)", fontWeight: 500 }}>— {loc.flag} {t.city}, {loc.country}</span>
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
                  Free 30-minute trial — no credit card needed.
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
                <a href="#trial" style={{ display: "block", background: "var(--gold)", color: "var(--charcoal)", padding: "13px", borderRadius: 12, fontWeight: 700, textDecoration: "none", fontSize: ".95rem" }}>
                  Book Free Trial →
                </a>
                <a
                  href={`https://wa.me/923124877906?text=${encodeURIComponent(`Assalamu Alaikum, I want to book a FREE Quran trial class (${loc.country}). Please share the details.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8, background: "#25D366", color: "#0b3d2e", padding: "12px", borderRadius: 12, fontWeight: 800, textDecoration: "none", fontSize: ".9rem", marginTop: 10 }}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  Chat on WhatsApp
                </a>
                <div style={{ marginTop: 14, color: "rgba(255,255,255,.5)", fontSize: ".73rem" }}>
                  ⭐⭐⭐⭐⭐ Rated {loc.rating}/5 by {loc.reviews}+ {loc.country} families
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
          <a href="#trial" className="btn-primary-np">
            Book Free Trial Class →
          </a>
        </div>
      </section>
    </>
  );
}
