import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { cities, getCity, getCityKeywords } from "@/data/cities";
import { getLocation } from "@/data/locations";
import { ORGANIZATION_REF } from "@/lib/organizationSchema";
import { CheckCircle, Clock, MapPin, Shield, BookOpen, Users } from "lucide-react";
import CTAForm from "@/components/CTAForm";

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
  const description = `Online Quran classes in ${c.city} for kids & adults — 1-on-1 certified tutors, Noorani Qaida, Tajweed, Hifz & female teachers in ${c.timezone}. After-school slots. Free 30-min trial — no travel, no credit card.`;
  return {
    title: `Online Quran Classes in ${c.city} for Kids & Adults | Free Trial`,
    description,
    keywords: getCityKeywords(c),
    alternates: { canonical: `https://www.noorpath.online/online-quran-classes/${c.slug}` },
    openGraph: {
      title: `Online Quran Classes in ${c.city} | Kids & Adults | NoorPath`,
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
  const waText = encodeURIComponent(
    `Assalamu Alaikum, I want to book a FREE Quran trial class for my family in ${c.city}. Please share available ${c.timezone} slots.`
  );

  const faqs = [
    {
      q: `Are there online Quran classes for kids in ${c.city}?`,
      a: `Yes. NoorPath offers live 1-on-1 online Quran classes for children in ${c.city} (ages 4–12+) covering Noorani Qaida, Tajweed, short surahs, duas and optional Hifz — scheduled in your ${c.timezone} timezone with weekly parent reports.`,
    },
    {
      q: `How much do online Quran classes cost in ${c.city}?`,
      a: `Plans start from $29/month (about ${c.approxPrice}/month, billed in USD), with a free 30-minute trial. Family discounts apply for 2+ siblings. No long-term contract.`,
    },
    {
      q: `Do you have a female Quran teacher for daughters in ${c.city}?`,
      a: `Yes. Certified female tutors (Hafiza) are available for sisters and daughters in ${c.city}. Request a female teacher when booking your free trial.`,
    },
    {
      q: `What is the best time for after-school Quran classes in ${c.city}?`,
      a: `Most ${c.city} families book weekday evenings after school in ${c.timezone}, plus weekend mornings. Your child's slot stays fixed each week.`,
    },
    {
      q: `Can beginners start Noorani Qaida online in ${c.city}?`,
      a: `Absolutely. Complete beginners — kids and adults — start with Noorani Qaida (Arabic letters, sounds, joining) before Quran reading. A live tutor corrects pronunciation in real time.`,
    },
    {
      q: `Is online Quran learning better than a local madrasa in ${c.city}?`,
      a: `For focused progress, 1-on-1 online often beats crowded group classes because your child recites the full session with instant correction. Many families use both — online for skill, masjid for community.`,
    },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        name: `Online Quran Classes in ${c.city}`,
        description: `NoorPath Academy provides certified 1-on-1 online Quran education to families in ${c.city}, ${c.country}. Live classes: Noorani Qaida, Tajweed, Hifz, Arabic, and Islamic studies for kids and adults.`,
        provider: ORGANIZATION_REF,
        areaServed: { "@type": "City", name: c.city, containedInPlace: { "@type": "Country", name: c.country } },
        serviceType: "Online Quran Education",
        url: `https://www.noorpath.online/online-quran-classes/${c.slug}`,
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

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            <div>
              <div style={{ fontSize: "2.8rem", marginBottom: 8 }}>{c.flag}</div>
              <h1 style={{ marginBottom: 12 }}>Online Quran Classes in {c.city}</h1>
              <p style={{ maxWidth: 560, marginBottom: 0 }}>
                Live 1-on-1 Quran tutors for kids &amp; adults in {c.city} — Noorani Qaida, Tajweed, Hifz and female teachers,
                all in your {c.timezone} timezone. After-school slots.{" "}
                <strong style={{ color: "var(--gold-lt)" }}>Free 30-min trial — no credit card.</strong>
              </p>
              <div style={{ display: "flex", gap: 10, marginTop: 18, flexWrap: "wrap" }}>
                {[
                  { icon: "🕐", label: c.timezone },
                  { icon: "👥", label: c.population },
                  { icon: "⭐", label: `${c.rating}/5 · ${c.reviews}+ reviews` },
                ].map((item) => (
                  <div key={item.label} style={{ display: "flex", alignItems: "center", gap: 6, background: "rgba(255,255,255,.1)", borderRadius: 20, padding: "6px 14px", fontSize: ".82rem", color: "rgba(255,255,255,.9)" }}>
                    <span>{item.icon}</span> {item.label}
                  </div>
                ))}
              </div>
              <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 22 }}>
                <a href="#trial" className="btn-primary-np">Book Free Trial →</a>
                <a
                  href={`https://wa.me/923124877906?text=${waText}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline-np"
                  style={{ color: "#fff", borderColor: "rgba(255,255,255,.5)" }}
                >
                  WhatsApp Us
                </a>
              </div>
            </div>

            <div
              id="trial"
              style={{
                background: "rgba(255,255,255,.08)",
                border: "1px solid rgba(255,255,255,.18)",
                borderRadius: 20,
                padding: "22px 22px 18px",
                backdropFilter: "blur(8px)",
              }}
            >
              <div style={{
                display: "inline-block", background: "var(--gold)", color: "var(--charcoal)",
                fontSize: ".72rem", fontWeight: 800, padding: "4px 12px", borderRadius: 20, marginBottom: 10,
              }}>
                100% Free · No card needed
              </div>
              <h2 style={{ fontFamily: "var(--font-playfair), serif", color: "#fff", fontSize: "1.25rem", marginBottom: 6 }}>
                Start in {c.city} — Free Trial
              </h2>
              <p style={{ color: "rgba(255,255,255,.7)", fontSize: ".85rem", marginBottom: 14, lineHeight: 1.55 }}>
                Tell us your child&apos;s age &amp; preferred {c.timezone} time. We match a tutor within 24 hours.
              </p>
              <CTAForm />
            </div>
          </div>
        </div>
      </div>

      <section style={{ padding: "56px 0" }}>
        <div className="max-w-[1200px] mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2">
              <div className="content-card" style={{ marginBottom: 28 }}>
                <h2 style={{ fontFamily: "var(--font-playfair), serif", fontSize: "1.45rem", color: "var(--charcoal)", marginBottom: 14 }}>
                  Learn Quran Online in {c.city}
                </h2>
                <p style={{ color: "var(--muted)", lineHeight: 1.8, fontSize: "1rem", marginBottom: 14 }}>
                  NoorPath Academy connects Muslim families in {c.city} with certified, Ijazah-qualified Quran tutors for live 1-on-1 online lessons.
                  Whether your child is starting Noorani Qaida, perfecting Tajweed, beginning Hifz, or you want to learn as an adult — we adapt to your goals and {c.timezone} schedule.
                </p>
                <p style={{ color: "var(--muted)", lineHeight: 1.8, fontSize: "1rem", margin: 0 }}>{c.localContext}</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-7">
                {[
                  { icon: <Users size={20} />, title: `Kids Quran Classes in ${c.city}`, desc: "Ages 4–12 · short engaging sessions · weekly parent reports" },
                  { icon: <Shield size={20} />, title: `Female Tutors in ${c.city}`, desc: "Hafiza teachers for daughters & sisters · private Zoom" },
                  { icon: <BookOpen size={20} />, title: `Noorani Qaida & Hifz`, desc: "Beginners to memorisation · same tutor every week" },
                ].map((card) => (
                  <div key={card.title} className="content-card" style={{ margin: 0 }}>
                    <div style={{ color: "var(--emerald)", marginBottom: 10 }}>{card.icon}</div>
                    <h3 style={{ fontSize: ".92rem", fontWeight: 700, marginBottom: 6, color: "var(--charcoal)" }}>{card.title}</h3>
                    <p style={{ fontSize: ".82rem", color: "var(--muted)", margin: 0, lineHeight: 1.55 }}>{card.desc}</p>
                  </div>
                ))}
              </div>

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

              <div className="content-card" style={{ marginBottom: 28 }}>
                <h2 style={{ fontFamily: "var(--font-playfair), serif", fontSize: "1.25rem", color: "var(--charcoal)", marginBottom: 16 }}>
                  Popular Quran Courses in {c.city}
                </h2>
                <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                  {[
                    { href: "/online-quran-classes-for-kids", label: `Online Quran Classes for Kids in ${c.city}` },
                    { href: "/courses/noorani-qaida-online", label: "Noorani Qaida Online — Arabic letters from scratch" },
                    { href: "/courses/tajweed-classes-online", label: "Tajweed Classes Online — Beautiful recitation" },
                    { href: "/courses/hifz-program-online", label: "Hifz Program Online — Quran memorization" },
                    { href: "/female-quran-teacher-online", label: `Female Quran Teacher Online — For ${c.city} families` },
                  ].map((x) => (
                    <Link key={x.href} href={x.href} style={{ color: "var(--emerald)", fontWeight: 600, fontSize: ".9rem", textDecoration: "none" }}>
                      → {x.label}
                    </Link>
                  ))}
                </div>
              </div>

              <div className="content-card" style={{ marginBottom: 28 }}>
                <h2 style={{ fontFamily: "var(--font-playfair), serif", fontSize: "1.25rem", color: "var(--charcoal)", marginBottom: 16 }}>
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
                    <div key={item} style={{ display: "flex", gap: 10, alignItems: "flex-start", padding: 12, background: "rgba(10,110,79,.04)", borderRadius: 10 }}>
                      <CheckCircle size={16} style={{ color: "var(--emerald)", marginTop: 1, flexShrink: 0 }} />
                      <span style={{ fontSize: ".85rem", color: "var(--slate)" }}>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="content-card" style={{ marginBottom: 28 }}>
                <h2 style={{ fontFamily: "var(--font-playfair), serif", fontSize: "1.25rem", color: "var(--charcoal)", marginBottom: 16 }}>
                  FAQs — Quran Classes in {c.city}
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

              {siblingCities.length > 0 && (
                <div>
                  <h3 style={{ fontFamily: "var(--font-playfair), serif", fontSize: "1.1rem", color: "var(--charcoal)", marginBottom: 14 }}>
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

            <div>
              <div className="content-card" style={{ marginBottom: 20 }}>
                <h3 style={{ fontFamily: "var(--font-playfair), serif", fontSize: "1rem", color: "var(--charcoal)", marginBottom: 14 }}>
                  <Clock size={16} style={{ display: "inline", marginRight: 6, color: "var(--emerald)" }} />
                  Class Timings ({c.timezone})
                </h3>
                <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                  {["Morning: 6 AM – 10 AM", "After school: 3 PM – 6 PM", "Evening: 6 PM – 10 PM", "Weekend slots available"].map((t) => (
                    <div key={t} style={{ fontSize: ".85rem", color: "var(--slate)", padding: "8px 10px", background: "var(--ivory)", borderRadius: 8 }}>
                      🕐 {t}
                    </div>
                  ))}
                </div>
                <a href="#trial" style={{ display: "block", marginTop: 16, textAlign: "center", background: "var(--emerald)", color: "#fff", padding: "12px", borderRadius: 12, fontWeight: 700, textDecoration: "none", fontSize: ".92rem" }}>
                  Reserve Free Trial →
                </a>
                <div style={{ marginTop: 12, textAlign: "center", color: "var(--muted)", fontSize: ".75rem" }}>
                  ⭐ Rated {c.rating}/5 by {c.reviews}+ {c.city} families
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="max-w-[1200px] mx-auto px-4 text-center">
          <h2 style={{ fontFamily: "var(--font-playfair), serif", color: "#fff", fontSize: "2rem", marginBottom: 16 }}>
            Start Quran Learning in {c.city} Today
          </h2>
          <p style={{ color: "rgba(255,255,255,.75)", marginBottom: 28 }}>
            Join families from {c.city} already learning with NoorPath. Free trial — no commitment.
          </p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <a href="#trial" className="btn-primary-np">Book Free Trial Class →</a>
            <a
              href={`https://wa.me/923124877906?text=${waText}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline-np"
              style={{ color: "#fff", borderColor: "rgba(255,255,255,.5)" }}
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
