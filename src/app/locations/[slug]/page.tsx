import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { locations, getLocation } from "@/data/locations";
import { getCitiesByCountrySlug } from "@/data/cities";
import { getLocationFaqs, getLocationKeywords, getLocationSeoParagraphs } from "@/data/locationContent";
import { getCountryGuide } from "@/data/countryGuides";
import { CONTACT, FAMILY_DISCOUNTS, TRIAL } from "@/lib/academyFacts";
import { ORGANIZATION_REF } from "@/lib/organizationSchema";
import {
  getCountryHubHreflang,
  getCurrencyNote,
  getLocale,
  getOpenGraphLocale,
  getPriorityContent,
  getPriorityMarket,
  getRelatedPriorityCountries,
} from "@/lib/geoSeo";
import { CheckCircle, Clock, Globe } from "lucide-react";
import CTAForm from "@/components/CTAForm";
import CountryQuranClassesGuide from "@/components/CountryQuranClassesGuide";

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
  const market = getPriorityMarket(slug);
  const content = getPriorityContent(slug);
  const description =
    content?.metadataDescription ??
    `Online Quran classes in ${loc.country} for children and adults. Request live one-to-one Qaida, Tajweed or Hifz lessons in ${loc.timezone}, subject to tutor matching.`;
  const canonical = `https://www.noorpath.online/locations/${slug}`;
  return {
    title: content?.metadataTitle ?? `Online Quran Classes in ${loc.country} | NoorPath`,
    description,
    keywords: getLocationKeywords(loc),
    alternates: {
      canonical,
      ...(market ? { languages: getCountryHubHreflang() } : {}),
    },
    openGraph: {
      title: `Online Quran Classes in ${loc.country} | NoorPath Academy`,
      description,
      url: canonical,
      locale: getOpenGraphLocale(slug),
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

  const market = getPriorityMarket(slug);
  const priorityContent = getPriorityContent(slug);
  const relatedPriority = getRelatedPriorityCountries(slug).map((relatedMarket) =>
    getLocation(relatedMarket.slug)
  ).filter((relatedLocation): relatedLocation is NonNullable<typeof relatedLocation> =>
    Boolean(relatedLocation)
  );
  const related = market
    ? relatedPriority
    : locations.filter((l) => l.slug !== slug).slice(0, 4);
  const cityPages = getCitiesByCountrySlug(slug);
  const faqs = getLocationFaqs(loc);
  const seoParagraphs = getLocationSeoParagraphs(loc);
  const locale = getLocale(slug);
  const currencyNote = getCurrencyNote(slug);
  const countryGuide = getCountryGuide(slug);

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        name: `Online Quran Classes in ${loc.country}`,
        description: `NoorPath Academy offers live 1-on-1 online Quran lessons for learners in ${loc.country}, including ${loc.cities}. Tutor and timezone availability are confirmed after matching.`,
        provider: ORGANIZATION_REF,
        areaServed: { "@type": "Country", name: loc.country },
        serviceType: "Online Quran Education",
        inLanguage: locale,
        url: `https://www.noorpath.online/locations/${slug}`,
        offers: {
          "@type": "Offer",
          price: String(TRIAL.price),
          priceCurrency: TRIAL.priceCurrency,
          description: `${TRIAL.durationMinutes}-minute trial; no credit card required`,
        },
      },
      {
        "@type": "WebPage",
        name: priorityContent?.heading ?? `Online Quran Classes in ${loc.country}`,
        url: `https://www.noorpath.online/locations/${slug}`,
        inLanguage: locale,
      },
      ...(countryGuide
        ? [
            {
              "@type": "Article",
              headline: countryGuide.title,
              description: countryGuide.description,
              mainEntityOfPage: `https://www.noorpath.online/locations/${slug}`,
              author: ORGANIZATION_REF,
              publisher: ORGANIZATION_REF,
              dateModified: "2026-07-15",
              inLanguage: locale,
              about: {
                "@type": "Service",
                name: `Online Quran Classes in ${loc.country}`,
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
                  "Live 1-on-1 online lessons",
                  `${loc.timezone} scheduling subject to tutor matching`,
                  "Male or female tutor requests",
                  `${TRIAL.durationMinutes}-minute trial — $${TRIAL.price}, no credit card`,
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
                  { icon: "💻", label: "Remote online lessons" },
                ].map((item) => (
                  <div key={item.label} style={{ display: "flex", alignItems: "center", gap: 6, background: "rgba(255,255,255,.1)", borderRadius: 20, padding: "6px 14px", fontSize: ".82rem", color: "rgba(255,255,255,.9)" }}>
                    <span>{item.icon}</span> {item.label}
                  </div>
                ))}
              </div>

              <div style={{ color: "var(--gold-lt)", fontSize: ".9rem", fontWeight: 700 }}>
                Online lessons · Tutor availability confirmed after matching
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
                  {`$${TRIAL.price} Trial · No card needed`}
                </span>
              </div>
              <h2 style={{ fontFamily: "'Playfair Display',serif", color: "#fff", fontSize: "1.5rem", textAlign: "center", marginBottom: 4 }}>
                Book Your <span style={{ color: "var(--gold-lt)", fontStyle: "italic" }}>Trial</span> Class
              </h2>
              <p style={{ color: "rgba(255,255,255,.7)", fontSize: ".85rem", textAlign: "center", marginBottom: 18 }}>
                {TRIAL.durationMinutes}-minute 1-on-1 session · Request a preferred time
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
                href={`${CONTACT.whatsappUrl}?text=${encodeURIComponent(`Assalamu Alaikum, I want to book a Quran trial class (${loc.country}). Please share tutor availability and the details.`)}`}
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

      <section lang={locale} style={{ padding: "60px 0" }}>
        <div className="max-w-[1200px] mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

            {/* Main content */}
            <div className="lg:col-span-2">

              {/* About */}
              <div className="content-card" style={{ marginBottom: 28 }}>
                <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: "1.5rem", color: "var(--charcoal)", marginBottom: 16 }}>
                  {priorityContent?.heading ?? `Online Quran Classes for ${loc.country} Families`}
                </h2>
                <p style={{ color: "var(--muted)", lineHeight: 1.8, fontSize: "1rem", marginBottom: 16 }}>
                  NoorPath Academy offers live online Quran education for learners in {loc.country}, including {loc.cities}. Lessons are delivered remotely; NoorPath does not claim a physical branch in these cities.
                </p>
                <p style={{ color: "var(--muted)", lineHeight: 1.8, fontSize: "1rem" }}>
                  You can request Noorani Qaida for beginners, Tajweed classes, Quran memorization (Hifz), or Islamic studies in {loc.timezone}. Tutor and schedule availability are confirmed after matching.
                </p>
                {seoParagraphs.map((para) => (
                  <p key={para.slice(0, 40)} style={{ color: "var(--muted)", lineHeight: 1.8, fontSize: "1rem", marginTop: 16 }}>
                    {para}
                  </p>
                ))}
              </div>

              {market && (
                <div className="content-card" style={{ marginBottom: 28 }}>
                  <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: "1.3rem", color: "var(--charcoal)", marginBottom: 12 }}>
                    Local Scheduling and Billing Context
                  </h2>
                  <p style={{ color: "var(--muted)", lineHeight: 1.8, fontSize: ".95rem", marginBottom: 12 }}>
                    {market.schedulingGuidance}
                  </p>
                  <p style={{ color: "var(--muted)", lineHeight: 1.8, fontSize: ".95rem", margin: 0 }}>
                    {currencyNote}
                  </p>
                </div>
              )}

              {countryGuide && <CountryQuranClassesGuide guide={countryGuide} />}

              {/* Popular courses for this country */}
              <div className="content-card" style={{ marginBottom: 28 }}>
                <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: "1.3rem", color: "var(--charcoal)", marginBottom: 16 }}>
                  Popular Online Quran Courses in {loc.country}
                </h2>
                <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                  {[
                    { href: "/online-quran-classes", label: "Online Quran Classes — Global lesson guide" },
                    { href: "/courses/noorani-qaida-online", label: "Noorani Qaida Online — Learn Arabic letters from scratch" },
                    { href: "/learn-tajweed-online", label: "Learn Tajweed Online — Recitation support" },
                    { href: "/online-quran-classes-for-kids", label: "Quran Classes for Kids — Age-appropriate lessons" },
                    { href: "/hifz-quran-online", label: "Hifz Quran Online — Quran memorisation" },
                    { href: "/female-quran-teacher-online", label: "Female Quran Teacher Online — For sisters & daughters" },
                  ].map((c) => (
                    <Link key={c.href} href={c.href} style={{ color: "var(--emerald)", fontWeight: 600, fontSize: ".9rem", textDecoration: "none" }}>
                      → {c.label}
                    </Link>
                  ))}
                </div>
              </div>

              <div className="content-card" style={{ marginBottom: 28 }}>
                <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: "1.3rem", color: "var(--charcoal)", marginBottom: 16 }}>
                  Check Tutor, Pricing and Safeguarding Details
                </h2>
                <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                  {[
                    { href: "/our-tutors", label: "How tutor matching works" },
                    { href: "/pricing", label: "Current USD lesson plans and family discounts" },
                    { href: "/safeguarding", label: "Safeguarding information for online lessons" },
                  ].map((item) => (
                    <Link key={item.href} href={item.href} style={{ color: "var(--emerald)", fontWeight: 600, fontSize: ".9rem", textDecoration: "none" }}>
                      → {item.label}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Online city coverage */}
              <div className="content-card" style={{ marginBottom: 28 }}>
                <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: "1.3rem", color: "var(--charcoal)", marginBottom: 16 }}>
                  Online Quran Classes by City in {loc.country}
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
                    + Other cities online
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
                  Planning Online Quran Lessons in {loc.country}
                </h2>
                <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                  {[
                    { emoji: "⏰", title: `${loc.timezone} Timezone`, desc: "Request morning, afternoon, evening, or weekend lessons; exact availability is confirmed after tutor matching." },
                    { emoji: "👩‍🏫", title: "Tutor Matching", desc: "Share the learner's level, goals, tutor preference, and timezone when requesting a match." },
                    { emoji: "🌙", title: "1-on-1 Online Classes", desc: "Private online sessions via Zoom or Google Meet, without travel to a physical branch." },
                    { emoji: "👨‍👩‍👧‍👦", title: "Published Family Discounts", desc: FAMILY_DISCOUNTS.map(({ siblings, discountPercent }) => `${siblings}: ${discountPercent}%`).join(" · ") },
                    { emoji: <Globe size={20} />, title: "Online Access", desc: `Learners in ${loc.country} can request remote lessons without NoorPath claiming a local branch or customer base.` },
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
                  {TRIAL.durationMinutes}-minute trial for ${TRIAL.price} — no credit card needed.
                </p>
                <div style={{ display: "flex", flexDirection: "column", gap: 8, margin: "16px 0" }}>
                  {[
                    `✅ ${loc.timezone} scheduling request`,
                    "✅ Tutor matched to stated needs",
                    "✅ 1-on-1 personalised classes",
                    "✅ Female tutor request option",
                    "✅ Kids & adults welcome",
                  ].map((p) => (
                    <div key={p} style={{ color: "rgba(255,255,255,.85)", fontSize: ".82rem", textAlign: "left" }}>{p}</div>
                  ))}
                </div>
                <a href="#trial" style={{ display: "block", background: "var(--gold)", color: "var(--charcoal)", padding: "13px", borderRadius: 12, fontWeight: 700, textDecoration: "none", fontSize: ".95rem" }}>
                  Book Free Trial →
                </a>
                <a
                  href={`${CONTACT.whatsappUrl}?text=${encodeURIComponent(`Assalamu Alaikum, I want to book a Quran trial class (${loc.country}). Please share tutor availability and the details.`)}`}
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
                  Tutor availability is confirmed after your request.
                </div>
              </div>

              <div className="content-card" style={{ marginTop: 20 }}>
                <h3 style={{ fontFamily: "'Playfair Display',serif", fontSize: "1rem", color: "var(--charcoal)", marginBottom: 14 }}>
                  <Clock size={16} style={{ display: "inline", marginRight: 6, color: "var(--emerald)" }} />
                  Class Timings ({loc.timezone})
                </h3>
                <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                  {["Morning preference", "Afternoon preference", "Evening preference", "Weekend preference"].map((t) => (
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
            Request an online tutor and preferred {loc.timezone} lesson time. Availability is confirmed after matching.
          </p>
          <a href="#trial" className="btn-primary-np">
            Book Free Trial Class →
          </a>
        </div>
      </section>
    </>
  );
}
