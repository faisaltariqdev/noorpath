import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { cities, getCity, getCityKeywords } from "@/data/cities";
import { getCityGuide } from "@/data/cityGuides";
import { getLocation } from "@/data/locations";
import { CONTACT, FAMILY_DISCOUNTS, PRICING_PLANS, TRIAL } from "@/lib/academyFacts";
import { ORGANIZATION_REF } from "@/lib/organizationSchema";
import { getCurrencyNote, getLocale, getOpenGraphLocale } from "@/lib/geoSeo";
import { CheckCircle, Clock, MapPin, Shield, BookOpen, Users } from "lucide-react";
import CTAForm from "@/components/CTAForm";
import WhatsAppLink from "@/components/WhatsAppLink";
import CountryQuranClassesGuide from "@/components/CountryQuranClassesGuide";

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
  const guide = getCityGuide(c.slug);
  const oneToOne = getLocale(c.countrySlug) === "en-US" ? "1-on-1" : "1-to-1";
  const description =
    guide?.description ??
    `Online Quran classes in ${c.city} for kids and adults — live ${oneToOne} Noorani Qaida, Tajweed and Hifz lessons. Request a preferred ${c.timezone} time, subject to tutor matching.`;
  return {
    title: {
      absolute: `Online Quran Classes ${c.city} | Live ${oneToOne} Trial`,
    },
    description,
    keywords: getCityKeywords(c),
    alternates: { canonical: `https://www.noorpath.online/online-quran-classes/${c.slug}` },
    openGraph: {
      title: `Online Quran Classes in ${c.city} | Kids & Adults | NoorPath`,
      description,
      url: `https://www.noorpath.online/online-quran-classes/${c.slug}`,
      locale: getOpenGraphLocale(c.countrySlug),
      images: [{ url: "/marketing/family-evening-quran.jpg", width: 1200, height: 800, alt: `Online Quran Classes ${c.city}` }],
    },
    twitter: {
      card: "summary_large_image",
      title: `Online Quran Classes in ${c.city} | NoorPath`,
      description: `Request live 1-on-1 online Quran lessons in ${c.city}. Tutor availability is confirmed after matching.`,
      images: ["/marketing/family-evening-quran.jpg"],
    },
  };
}

export default async function CityPage({ params }: Props) {
  const { city } = await params;
  const c = getCity(city);
  if (!c) notFound();

  const country = getLocation(c.countrySlug);
  const siblingCities = cities
    .filter((x) => x.countrySlug === c.countrySlug && x.slug !== c.slug)
    .slice(0, 2);
  const locale = getLocale(c.countrySlug);
  const currencyNote = getCurrencyNote(c.countrySlug);
  const cityGuide = getCityGuide(c.slug);
  const memorisation = locale === "en-US" ? "memorization" : "memorisation";
  const waText = encodeURIComponent(
    `Assalamu Alaikum, I want to book a Quran trial class for my family in ${c.city}. Please share tutor availability for ${c.timezone}.`
  );

  const faqs = [
    {
      q: `Are there online Quran classes for kids in ${c.city}?`,
      a: `Yes. NoorPath offers live 1-on-1 online classes covering Noorani Qaida, Tajweed, short surahs, duas and optional Hifz. Request a ${c.timezone} lesson time; tutor availability is confirmed after matching.`,
    },
    {
      q: `How much do online Quran classes cost in ${c.city}?`,
      a: `The ${PRICING_PLANS[0].name} plan is $${PRICING_PLANS[0].monthlyPriceUsd}/month for ${PRICING_PLANS[0].sessionsPerMonth} ${PRICING_PLANS[0].sessionMinutes}-minute sessions. The ${TRIAL.durationMinutes}-minute trial costs $${TRIAL.price} with no credit card required. Published family discounts are ${FAMILY_DISCOUNTS.map(({ siblings, discountPercent }) => `${siblings}: ${discountPercent}%`).join(", ")}.`,
    },
    {
      q: `Do you have a female Quran teacher for daughters in ${c.city}?`,
      a: `You can request a female tutor for a learner in ${c.city}. Female tutor and ${c.timezone} availability are subject to matching.`,
    },
    {
      q: `What times can I request for after-school Quran classes in ${c.city}?`,
      a: `You can request a weekday evening or weekend time in ${c.timezone}. A recurring lesson time is confirmed after a suitable tutor is matched.`,
    },
    {
      q: `Can beginners start Noorani Qaida online in ${c.city}?`,
      a: `Absolutely. Complete beginners — kids and adults — start with Noorani Qaida (Arabic letters, sounds, joining) before Quran reading. A live tutor corrects pronunciation in real time.`,
    },
    {
      q: `How does online Quran learning compare with a local madrasa in ${c.city}?`,
      a: `A 1-on-1 online lesson offers dedicated recitation time and avoids travel, while a local madrasa may offer in-person community learning. Families can choose either format or combine them according to their needs.`,
    },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        name: `Online Quran Classes in ${c.city}`,
        description: `NoorPath Academy offers live 1-on-1 online Quran lessons for learners in ${c.city}, ${c.country}. Tutor and timezone availability are confirmed after matching.`,
        provider: ORGANIZATION_REF,
        areaServed: { "@type": "City", name: c.city, containedInPlace: { "@type": "Country", name: c.country } },
        serviceType: "Online Quran Education",
        inLanguage: locale,
        url: `https://www.noorpath.online/online-quran-classes/${c.slug}`,
        offers: {
          "@type": "Offer",
          price: String(TRIAL.price),
          priceCurrency: TRIAL.priceCurrency,
          description: `${TRIAL.durationMinutes}-minute trial; no credit card required`,
        },
      },
      {
        "@type": "WebPage",
        name: `Online Quran Classes in ${c.city}`,
        url: `https://www.noorpath.online/online-quran-classes/${c.slug}`,
        inLanguage: locale,
      },
      ...(cityGuide
        ? [
            {
              "@type": "Article",
              headline: cityGuide.title,
              description: cityGuide.description,
              mainEntityOfPage: `https://www.noorpath.online/online-quran-classes/${c.slug}`,
              author: ORGANIZATION_REF,
              publisher: ORGANIZATION_REF,
              dateModified: "2026-07-15",
              inLanguage: locale,
              about: {
                "@type": "Service",
                name: `Online Quran Classes in ${c.city}`,
              },
            },
          ]
        : []),
      {
        "@type": "FAQPage",
        inLanguage: locale,
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
                with {c.timezone} scheduling subject to tutor matching.{" "}
                <strong style={{ color: "var(--gold-lt)" }}>{TRIAL.durationMinutes}-minute trial for ${TRIAL.price} — no credit card.</strong>
              </p>
              <div style={{ display: "flex", gap: 10, marginTop: 18, flexWrap: "wrap" }}>
                {[
                  { icon: "🕐", label: c.timezone },
                  { icon: "💻", label: "Remote online lessons" },
                  { icon: "💻", label: "Online only" },
                ].map((item) => (
                  <div key={item.label} style={{ display: "flex", alignItems: "center", gap: 6, background: "rgba(255,255,255,.1)", borderRadius: 20, padding: "6px 14px", fontSize: ".82rem", color: "rgba(255,255,255,.9)" }}>
                    <span>{item.icon}</span> {item.label}
                  </div>
                ))}
              </div>
              <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 22 }}>
                <a href="#trial" className="btn-primary-np">Book Free Trial →</a>
                <WhatsAppLink
                  href={`${CONTACT.whatsappUrl}?text=${waText}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline-np"
                  style={{ color: "#fff", borderColor: "rgba(255,255,255,.5)" }}
                >
                  WhatsApp Us
                </WhatsAppLink>
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
                {`$${TRIAL.price} Trial · No card needed`}
              </div>
              <h2 style={{ fontFamily: "var(--font-playfair), serif", color: "#fff", fontSize: "1.25rem", marginBottom: 6 }}>
                Start in {c.city} — Free Trial
              </h2>
              <p style={{ color: "rgba(255,255,255,.7)", fontSize: ".85rem", marginBottom: 14, lineHeight: 1.55 }}>
                Tell us the learner&apos;s level and preferred {c.timezone} time. Availability is confirmed after tutor matching.
              </p>
              <CTAForm />
            </div>
          </div>
        </div>
      </div>

      {/* Visual strip */}
      <section style={{ padding: "36px 0 0", background: "var(--ivory)" }}>
        <div className="max-w-[1200px] mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { src: "/marketing/kids-online-quran-class.jpg", alt: `Kids online Quran class for families in ${c.city}`, caption: "Kids · live 1-on-1" },
              { src: "/marketing/female-hafiza-tutor.jpg", alt: `Female Quran teacher option for daughters in ${c.city}`, caption: "Female tutor requests" },
              { src: "/marketing/kids-hifz-memorisation.jpg", alt: `Online Hifz memorisation for kids in ${c.city}`, caption: "Hifz & memorisation" },
            ].map((img) => (
              <figure key={img.src} style={{ margin: 0, position: "relative", borderRadius: 16, overflow: "hidden", border: "1px solid var(--border)", background: "#fff" }}>
                <Image src={img.src} alt={img.alt} width={800} height={534} sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" style={{ width: "100%", height: 200, objectFit: "cover", display: "block" }} />
                <figcaption style={{ padding: "10px 14px", fontSize: ".82rem", fontWeight: 700, color: "var(--charcoal)" }}>{img.caption}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section lang={locale} style={{ padding: "40px 0 56px", background: "var(--ivory)" }}>
        <div className="max-w-[1200px] mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2">
              <div className="content-card" style={{ marginBottom: 28 }}>
                <h2 style={{ fontFamily: "var(--font-playfair), serif", fontSize: "1.45rem", color: "var(--charcoal)", marginBottom: 14 }}>
                  Learn Quran Online in {c.city}
                </h2>
                <p style={{ color: "var(--muted)", lineHeight: 1.8, fontSize: "1rem", marginBottom: 14 }}>
                  NoorPath Academy accepts requests for live 1-on-1 online Quran lessons from learners in {c.city}; this does not imply a physical branch or established local customer base.
                  Whether the learner is starting Noorani Qaida, studying Tajweed, beginning Hifz, or learning as an adult, tutor and {c.timezone} availability are confirmed after matching.
                </p>
                <p style={{ color: "var(--muted)", lineHeight: 1.8, fontSize: "1rem", margin: 0 }}>{c.localContext}</p>
              </div>

              {cityGuide && (
                <CountryQuranClassesGuide
                  guide={cityGuide}
                  eyebrow="City learning guide"
                />
              )}

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-7">
                {[
                  { icon: <Users size={20} />, title: `Kids Quran Classes in ${c.city}`, desc: "Live 1-on-1 lessons · tutor matched to stated needs" },
                  { icon: <Shield size={20} />, title: `Female Tutor Requests in ${c.city}`, desc: "Subject to tutor and timezone availability" },
                  { icon: <BookOpen size={20} />, title: `Noorani Qaida & Hifz`, desc: "Beginner and memorisation lesson options" },
                ].map((card) => (
                  <div key={card.title} className="content-card" style={{ margin: 0 }}>
                    <div style={{ color: "var(--emerald)", marginBottom: 10 }}>{card.icon}</div>
                    <h3 style={{ fontSize: ".92rem", fontWeight: 700, marginBottom: 6, color: "var(--charcoal)" }}>{card.title}</h3>
                    <p style={{ fontSize: ".82rem", color: "var(--muted)", margin: 0, lineHeight: 1.55 }}>{card.desc}</p>
                  </div>
                ))}
              </div>

              <div className="content-card" style={{ marginBottom: 28 }}>
                <h2 style={{ fontFamily: "var(--font-playfair), serif", fontSize: "1.25rem", color: "var(--charcoal)", marginBottom: 8 }}>
                  Lesson Planning Details for {c.city}
                </h2>
                <p style={{ color: "var(--muted)", fontSize: ".88rem", marginBottom: 16, lineHeight: 1.6 }}>
                  {currencyNote} Learning pace varies by starting level, attendance, lesson frequency, and practice.
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
                  {[
                    { v: `$${PRICING_PLANS[0].monthlyPriceUsd}`, l: "Starter / month" },
                    { v: String(PRICING_PLANS[0].sessionsPerMonth), l: "Starter sessions" },
                    { v: `${TRIAL.durationMinutes} min`, l: "Trial duration" },
                    { v: `$${TRIAL.price}`, l: "Trial price" },
                  ].map((s) => (
                    <div key={s.l} style={{ textAlign: "center", background: "rgba(10,110,79,.05)", borderRadius: 12, padding: "14px 8px" }}>
                      <div style={{ fontWeight: 800, color: "var(--emerald)", fontSize: "1.15rem" }}>{s.v}</div>
                      <div style={{ fontSize: ".72rem", color: "var(--muted)", marginTop: 2 }}>{s.l}</div>
                    </div>
                  ))}
                </div>
                <div style={{ overflowX: "auto" }}>
                  <table style={{ width: "100%", borderCollapse: "collapse", fontSize: ".85rem" }}>
                    <thead>
                      <tr style={{ background: "var(--emerald)", color: "#fff" }}>
                        <th style={{ padding: "10px 12px", textAlign: "left" }}>Plan</th>
                        <th style={{ padding: "10px 12px", textAlign: "left" }}>Sessions / month</th>
                        <th style={{ padding: "10px 12px", textAlign: "left" }}>Minutes / session</th>
                        <th style={{ padding: "10px 12px", textAlign: "left" }}>USD / month</th>
                      </tr>
                    </thead>
                    <tbody>
                      {PRICING_PLANS.map((plan) => {
                        const row = [plan.name, plan.sessionsPerMonth, plan.sessionMinutes, `$${plan.monthlyPriceUsd}`];
                        return (
                        <tr key={plan.name} style={{ borderBottom: "1px solid var(--border)" }}>
                          {row.map((cell, i) => (
                            <td key={i} style={{ padding: "10px 12px", color: i === 0 ? "var(--charcoal)" : "var(--muted)", fontWeight: i === 0 ? 700 : 400 }}>{cell}</td>
                          ))}
                        </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>

              {country && (
                <div className="content-card" style={{ marginBottom: 28, display: "flex", alignItems: "center", gap: 14, flexWrap: "wrap" }}>
                  <MapPin size={20} style={{ color: "var(--emerald)", flexShrink: 0 }} />
                  <span style={{ color: "var(--slate)", fontSize: ".92rem" }}>
                    Explore online lesson information for other areas in {c.country}.
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
                    { href: "/online-quran-classes", label: "Online Quran Classes — Global lesson guide" },
                    { href: "/online-quran-classes-for-kids", label: `Online Quran Classes for Kids in ${c.city}` },
                    { href: "/courses/noorani-qaida-online", label: "Noorani Qaida Online — Arabic letters from scratch" },
                    { href: "/learn-tajweed-online", label: "Learn Tajweed Online — Recitation support" },
                    { href: "/hifz-quran-online", label: `Hifz Quran Online — Quran ${memorisation}` },
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
                  Verify the Online Lesson Details
                </h2>
                <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                  {[
                    { href: "/our-tutors", label: "Tutor matching information" },
                    { href: "/pricing", label: "Published lesson pricing" },
                    { href: "/safeguarding", label: "Safeguarding information" },
                  ].map((item) => (
                    <Link key={item.href} href={item.href} style={{ color: "var(--emerald)", fontWeight: 600, fontSize: ".9rem", textDecoration: "none" }}>
                      → {item.label}
                    </Link>
                  ))}
                </div>
              </div>

              <div className="content-card" style={{ marginBottom: 28 }}>
                <h2 style={{ fontFamily: "var(--font-playfair), serif", fontSize: "1.25rem", color: "var(--charcoal)", marginBottom: 16 }}>
                  Online Lesson Options for {c.city}
                </h2>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                  {[
                    "Tutor matching based on stated needs",
                    `${c.timezone} scheduling requests`,
                    "1-on-1 private lessons via Zoom",
                    "Female tutor request option",
                    "Tutor availability confirmed after matching",
                    "Noorani Qaida, Tajweed, Hifz & Arabic",
                    `Sibling discounts: ${FAMILY_DISCOUNTS.map(({ siblings, discountPercent }) => `${siblings} ${discountPercent}%`).join(" · ")}`,
                    `${TRIAL.durationMinutes}-minute trial — $${TRIAL.price}, no card`,
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
              <div className="content-card" style={{ marginBottom: 20, padding: 0, overflow: "hidden" }}>
                <Image
                  src="/marketing/family-evening-quran.jpg"
                  alt={`Family evening online Quran class in ${c.city}`}
                  width={800}
                  height={534}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  style={{ width: "100%", height: 180, objectFit: "cover", display: "block" }}
                />
                <div style={{ padding: "16px 18px" }}>
                  <p style={{ fontSize: ".85rem", color: "var(--muted)", margin: 0, lineHeight: 1.55 }}>
                    Request after-school Quran lessons from home in {c.city}. A recurring {c.timezone} time is confirmed after tutor matching.
                  </p>
                </div>
              </div>
              <div className="content-card" style={{ marginBottom: 20 }}>
                <h3 style={{ fontFamily: "var(--font-playfair), serif", fontSize: "1rem", color: "var(--charcoal)", marginBottom: 14 }}>
                  <Clock size={16} style={{ display: "inline", marginRight: 6, color: "var(--emerald)" }} />
                  Class Timings ({c.timezone})
                </h3>
                <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                  {["Morning preference", "After-school preference", "Evening preference", "Weekend preference"].map((t) => (
                    <div key={t} style={{ fontSize: ".85rem", color: "var(--slate)", padding: "8px 10px", background: "var(--ivory)", borderRadius: 8 }}>
                      🕐 {t}
                    </div>
                  ))}
                </div>
                <a href="#trial" style={{ display: "block", marginTop: 16, textAlign: "center", background: "var(--emerald)", color: "#fff", padding: "12px", borderRadius: 12, fontWeight: 700, textDecoration: "none", fontSize: ".92rem" }}>
                  Reserve Free Trial →
                </a>
                <div style={{ marginTop: 12, textAlign: "center", color: "var(--muted)", fontSize: ".75rem" }}>
                  Tutor availability is confirmed after your request.
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
            Request a tutor and preferred {c.timezone} lesson time. Availability is confirmed after matching.
          </p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <a href="#trial" className="btn-primary-np">Book Free Trial Class →</a>
            <WhatsAppLink
              href={`${CONTACT.whatsappUrl}?text=${waText}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline-np"
              style={{ color: "#fff", borderColor: "rgba(255,255,255,.5)" }}
            >
              Chat on WhatsApp
            </WhatsAppLink>
          </div>
        </div>
      </section>
    </>
  );
}
