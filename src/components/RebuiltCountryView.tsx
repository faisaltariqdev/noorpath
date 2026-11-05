import React from "react";
import Link from "next/link";
import Image from "next/image";
import { CheckCircle, Clock, Shield, Star, BookOpen, Calendar, HelpCircle, PhoneCall, Sparkles } from "lucide-react";
import type { CountryLandingPageData } from "@/data/countryLandingPages";
import CTAForm from "@/components/CTAForm";
import WhatsAppLink from "@/components/WhatsAppLink";
import FaqJsonLd from "@/components/FaqJsonLd";
import { CONTACT, TRIAL, TRUSTPILOT } from "@/lib/academyFacts";

interface Props {
  data: CountryLandingPageData;
  pageUrl: string;
}

export default function RebuiltCountryView({ data, pageUrl }: Props) {
  const isNorthAmerica = data.slug === "online-quran-classes-usa" || data.slug === "online-quran-classes-canada";
  const waTrialText = encodeURIComponent(
    `Assalamu Alaikum, I would like to book the free Quran trial sessions for ${data.countryName}. Please share tutor availability for ${data.timezone}.`
  );

  return (
    <div style={{ background: "var(--ivory, #fdfbf7)", color: "var(--charcoal, #0f172a)" }}>
      {/* ── 1) H1 & HERO SECTION ── */}
      <section
        style={{
          background: "linear-gradient(180deg, #074733 0%, #0a6e4f 100%)",
          color: "#fff",
          padding: "48px 0 56px",
          position: "relative",
        }}
      >
        <div className="max-w-[1200px] mx-auto px-4">
          <nav aria-label="Breadcrumb" style={{ marginBottom: 20 }}>
            <Link href="/" style={{ color: "var(--gold-lt, #e0a838)", fontSize: ".85rem", textDecoration: "none" }}>Home</Link>
            <span style={{ color: "rgba(255,255,255,.4)", margin: "0 8px" }}>›</span>
            <Link href="/locations" style={{ color: "var(--gold-lt, #e0a838)", fontSize: ".85rem", textDecoration: "none" }}>Locations</Link>
            <span style={{ color: "rgba(255,255,255,.4)", margin: "0 8px" }}>›</span>
            <span style={{ color: "rgba(255,255,255,.75)", fontSize: ".85rem" }}>{data.countryName}</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-7">
              <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(255,255,255,.12)", padding: "6px 14px", borderRadius: 30, fontSize: ".85rem", marginBottom: 16 }}>
                <span>{data.flag}</span>
                <span style={{ color: "var(--gold-lt, #e0a838)", fontWeight: 700 }}>Local {data.timezone} Classes</span>
              </div>

              {/* REQUIRED SECTION 1: Exact H1 */}
              <h1
                id="country-hero-h1"
                style={{
                  fontFamily: "var(--font-playfair), serif",
                  fontSize: "clamp(1.9rem, 4vw, 2.75rem)",
                  fontWeight: 800,
                  lineHeight: 1.25,
                  marginBottom: 20,
                  color: "#ffffff",
                }}
              >
                {data.h1}
              </h1>

              {/* REQUIRED SECTION 2: Answer-box (40-60 words) */}
              <div
                id="country-answer-box"
                style={{
                  background: "rgba(255,255,255,.98)",
                  color: "var(--charcoal, #0f172a)",
                  borderRadius: 16,
                  padding: "20px 22px",
                  borderLeft: "5px solid var(--gold, #c9922a)",
                  boxShadow: "0 10px 30px rgba(0,0,0,.15)",
                  marginBottom: 24,
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
                  <Sparkles size={18} style={{ color: "var(--gold, #c9922a)" }} />
                  <span style={{ fontSize: ".78rem", fontWeight: 800, textTransform: "uppercase", letterSpacing: ".05em", color: "var(--emerald, #0a6e4f)" }}>
                    Quick Answer · 1-on-1 Online Quran Overview
                  </span>
                </div>
                <p style={{ margin: 0, fontSize: "1rem", lineHeight: 1.7, color: "#1e293b", fontWeight: 500 }}>
                  {data.answerBox}
                </p>
              </div>

              <div style={{ display: "flex", flexWrap: "wrap", gap: 12, marginBottom: 24 }}>
                <a
                  href="#book-trial"
                  className="btn-primary-np"
                  style={{
                    background: "linear-gradient(135deg, #c9922a, #d4a030)",
                    color: "#1a1a2e",
                    fontWeight: 800,
                    padding: "13px 26px",
                    borderRadius: 50,
                    textDecoration: "none",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 8,
                  }}
                >
                  Start {TRIAL.classes} Free Trial Sessions →
                </a>
                <WhatsAppLink
                  href={`${CONTACT.whatsappUrl}?text=${waTrialText}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline-np"
                  style={{
                    color: "#fff",
                    borderColor: "rgba(255,255,255,.45)",
                    padding: "13px 22px",
                    borderRadius: 50,
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 8,
                    textDecoration: "none",
                  }}
                >
                  WhatsApp Consultation
                </WhatsAppLink>
              </div>

              {/* Internal Course Quick Links */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: 10, fontSize: ".82rem", color: "rgba(255,255,255,.85)" }}>
                <span>Popular Courses:</span>
                <Link href="/courses/noorani-qaida-online" style={{ color: "var(--gold-lt, #e0a838)", textDecoration: "underline" }}>
                  Noorani Qaida Online
                </Link>
                <span>·</span>
                <Link href="/courses/hifz-program-online" style={{ color: "var(--gold-lt, #e0a838)", textDecoration: "underline" }}>
                  Hifz Program Online
                </Link>
                <span>·</span>
                <Link href="/female-quran-teacher-online" style={{ color: "var(--gold-lt, #e0a838)", textDecoration: "underline" }}>
                  Female Quran Teachers
                </Link>
                <span>·</span>
                <Link href="/pricing" style={{ color: "var(--gold-lt, #e0a838)", textDecoration: "underline" }}>
                  Tuition Pricing
                </Link>
              </div>
            </div>

            {/* Right: Above-the-fold Quick Booking Card */}
            <div className="lg:col-span-5" id="book-trial">
              <div
                style={{
                  background: "rgba(255,255,255,.09)",
                  border: "1px solid rgba(255,255,255,.2)",
                  borderRadius: 20,
                  padding: "24px 22px",
                  backdropFilter: "blur(10px)",
                  boxShadow: "0 20px 50px rgba(0,0,0,.25)",
                }}
              >
                <div style={{ textAlign: "center", marginBottom: 12 }}>
                  <span style={{ background: "var(--gold, #c9922a)", color: "#1a1a2e", padding: "4px 14px", borderRadius: 20, fontSize: ".72rem", fontWeight: 800, textTransform: "uppercase" }}>
                    Free {TRIAL.durationMinutes}-Min Trial · No Card
                  </span>
                  <h2 style={{ fontFamily: "var(--font-playfair), serif", color: "#fff", fontSize: "1.35rem", marginTop: 10, marginBottom: 4 }}>
                    Start Learning in {data.countryName}
                  </h2>
                  <p style={{ color: "rgba(255,255,255,.75)", fontSize: ".82rem", margin: 0 }}>
                    1-on-1 live lesson scheduled in {data.timezone}
                  </p>
                </div>
                <CTAForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── MAIN CONTENT CONTAINER ── */}
      <div className="max-w-[1200px] mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-8">
            {/* ── REQUIRED SECTION 3: Class Timings for [Country] ── */}
            <section id="class-timings" style={{ marginBottom: 44, scrollMarginTop: 80 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
                <Clock size={22} style={{ color: "var(--emerald, #0a6e4f)" }} />
                <h2 style={{ fontFamily: "var(--font-playfair), serif", fontSize: "1.65rem", margin: 0 }}>
                  Class Timings for {data.countryName}
                </h2>
              </div>
              <p style={{ color: "var(--muted, #64748b)", fontSize: ".95rem", lineHeight: 1.7, marginBottom: 20 }}>
                All class times are converted to your local <strong>{data.timezone}</strong> timezone. Lessons are arranged 7 days a week, allowing you to establish a regular morning, after-school, or evening routine that suits your family&apos;s schedule.
              </p>

              <div style={{ overflowX: "auto", background: "#fff", borderRadius: 14, border: "1px solid var(--border, #e2e8f0)", boxShadow: "0 4px 16px rgba(0,0,0,.04)" }}>
                <table style={{ width: "100%", borderCollapse: "collapse", fontSize: ".9rem", textAlign: "left" }}>
                  <thead>
                    <tr style={{ background: "var(--emerald, #0a6e4f)", color: "#fff" }}>
                      <th style={{ padding: "14px 18px", fontWeight: 700 }}>Lesson Window</th>
                      <th style={{ padding: "14px 18px", fontWeight: 700 }}>Local Time ({data.timezone})</th>
                      <th style={{ padding: "14px 18px", fontWeight: 700 }}>Best Suited For</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.timingsSlots.map((slot, idx) => (
                      <tr key={slot.slot} style={{ borderBottom: idx < data.timingsSlots.length - 1 ? "1px solid var(--border, #e2e8f0)" : "none", background: idx % 2 === 0 ? "#fff" : "rgba(10,110,79,.02)" }}>
                        <td style={{ padding: "14px 18px", fontWeight: 700, color: "var(--charcoal, #0f172a)" }}>{slot.slot}</td>
                        <td style={{ padding: "14px 18px", color: "var(--emerald, #0a6e4f)", fontWeight: 700 }}>{slot.time}</td>
                        <td style={{ padding: "14px 18px", color: "var(--slate, #334155)" }}>{slot.description}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* ── REQUIRED SECTION 4: Weekend & Holiday Schedule ── */}
            <section id="weekend-holiday-schedule" style={{ marginBottom: 44, scrollMarginTop: 80 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
                <Calendar size={22} style={{ color: "var(--emerald, #0a6e4f)" }} />
                <h2 style={{ fontFamily: "var(--font-playfair), serif", fontSize: "1.65rem", margin: 0 }}>
                  Weekend &amp; Holiday Schedule
                </h2>
              </div>
              <div style={{ background: "#fff", borderRadius: 14, padding: "24px", border: "1px solid var(--border, #e2e8f0)", boxShadow: "0 4px 16px rgba(0,0,0,.04)" }}>
                <p style={{ color: "var(--slate, #334155)", fontSize: "1rem", lineHeight: 1.8, marginBottom: 14 }}>
                  {data.weekendSchedule}
                </p>
                <div style={{ display: "flex", alignItems: "center", gap: 10, padding: "12px 16px", background: "rgba(201,146,42,.08)", borderRadius: 10, border: "1px solid rgba(201,146,42,.2)" }}>
                  <CheckCircle size={18} style={{ color: "var(--gold, #c9922a)", flexShrink: 0 }} />
                  <span style={{ fontSize: ".88rem", color: "var(--charcoal, #0f172a)", fontWeight: 600 }}>
                    Notice-based rescheduling: missed classes can be moved with 24 hours notice.
                  </span>
                </div>
              </div>
            </section>

            {/* ── REQUIRED SECTION 5: Pricing in [Local Currency] ── */}
            <section id="pricing" style={{ marginBottom: 44, scrollMarginTop: 80 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
                <span style={{ fontSize: "1.4rem" }}>🏷️</span>
                <h2 style={{ fontFamily: "var(--font-playfair), serif", fontSize: "1.65rem", margin: 0 }}>
                  Pricing in {data.currencyCode}
                </h2>
              </div>
              <p style={{ color: "var(--muted, #64748b)", fontSize: ".95rem", lineHeight: 1.7, marginBottom: 20 }}>
                Transparent, affordable monthly tuition plans for students in {data.countryName}. Converted directly from our public lesson rates on our <Link href="/pricing" style={{ color: "var(--emerald, #0a6e4f)", fontWeight: 600, textDecoration: "underline" }}>Pricing Page</Link>.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-5">
                {data.pricingTiers.map((tier, idx) => (
                  <div
                    key={tier.planName}
                    style={{
                      background: "#fff",
                      borderRadius: 14,
                      padding: "22px 18px",
                      border: idx === 1 ? "2px solid var(--emerald, #0a6e4f)" : "1px solid var(--border, #e2e8f0)",
                      boxShadow: idx === 1 ? "0 8px 24px rgba(10,110,79,.12)" : "0 4px 12px rgba(0,0,0,.04)",
                      position: "relative",
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    {idx === 1 && (
                      <span style={{ position: "absolute", top: -11, left: "50%", transform: "translateX(-50%)", background: "var(--emerald, #0a6e4f)", color: "#fff", fontSize: ".72rem", fontWeight: 800, padding: "3px 12px", borderRadius: 20, textTransform: "uppercase" }}>
                        Most Popular
                      </span>
                    )}
                    <h3 style={{ fontSize: "1.1rem", fontWeight: 700, margin: "0 0 8px" }}>{tier.planName}</h3>
                    <div style={{ fontSize: "1.45rem", fontWeight: 800, color: "var(--emerald, #0a6e4f)", marginBottom: 4 }}>
                      {tier.monthlyPrice}
                    </div>
                    <div style={{ fontSize: ".82rem", color: "var(--gold, #c9922a)", fontWeight: 700, marginBottom: 14 }}>
                      {tier.perClassPrice}
                    </div>
                    <div style={{ fontSize: ".85rem", color: "var(--slate, #334155)", lineHeight: 1.6, marginBottom: 16 }}>
                      <div>• {tier.sessions}</div>
                      <div>• {tier.duration}</div>
                      <div>• Live 1-on-1 private lesson</div>
                    </div>
                    <a
                      href="#book-trial"
                      style={{
                        marginTop: "auto",
                        textAlign: "center",
                        background: idx === 1 ? "var(--emerald, #0a6e4f)" : "rgba(10,110,79,.08)",
                        color: idx === 1 ? "#fff" : "var(--emerald, #0a6e4f)",
                        padding: "10px",
                        borderRadius: 8,
                        fontWeight: 700,
                        fontSize: ".85rem",
                        textDecoration: "none",
                      }}
                    >
                      Choose Plan →
                    </a>
                  </div>
                ))}
              </div>
              <p style={{ fontSize: ".83rem", color: "var(--muted, #64748b)", margin: 0, fontStyle: "italic" }}>
                {data.pricingNote}
              </p>
            </section>

            {/* ── REQUIRED SECTION 6: Local Testimonials ── */}
            <section id="local-testimonials" style={{ marginBottom: 44, scrollMarginTop: 80 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
                <Star size={22} style={{ color: "#007f55" }} />
                <h2 style={{ fontFamily: "var(--font-playfair), serif", fontSize: "1.65rem", margin: 0 }}>
                  Local Testimonials
                </h2>
              </div>

              {data.hasRealTestimonials ? (
                <>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-4">
                    {data.testimonials.map((t) => (
                      <div
                        key={t.name}
                        style={{
                          background: "#fff",
                          borderRadius: 14,
                          padding: "20px",
                          border: "1px solid var(--border, #e2e8f0)",
                          boxShadow: "0 4px 14px rgba(0,0,0,.04)",
                        }}
                      >
                        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 10 }}>
                          <span style={{ color: "#007f55", letterSpacing: 2 }}>{"★".repeat(t.stars)}</span>
                          <span style={{ fontSize: ".78rem", color: "var(--muted, #64748b)" }}>{t.date}</span>
                        </div>
                        <p style={{ fontStyle: "italic", fontSize: ".92rem", lineHeight: 1.7, color: "var(--slate, #334155)", marginBottom: 14 }}>
                          &quot;{t.text}&quot;
                        </p>
                        <div style={{ fontSize: ".85rem", fontWeight: 700, color: "var(--charcoal, #0f172a)" }}>
                          {t.name} <span style={{ fontWeight: 400, color: "var(--muted, #64748b)" }}>· {t.location}</span>
                        </div>
                        <div style={{ fontSize: ".74rem", color: "#007f55", fontWeight: 700, marginTop: 4 }}>
                          ★ Verified Trustpilot Review · last checked {TRUSTPILOT.lastChecked}
                        </div>
                      </div>
                    ))}
                  </div>
                  {/* <!-- ADD REAL TESTIMONIAL --> */}
                </>
              ) : (
                <div style={{ background: "#fff", borderRadius: 14, padding: "26px", border: "1px dashed var(--border, #e2e8f0)", textAlign: "center" }}>
                  {/* <!-- ADD REAL TESTIMONIAL --> */}
                  <p style={{ margin: 0, color: "var(--muted, #64748b)", fontSize: ".92rem", lineHeight: 1.7 }}>
                    We collect verified feedback from our students and parents in {data.countryName}. To maintain authentic integrity, we never publish unverified or simulated reviews.
                  </p>
                  <div style={{ marginTop: 12 }}>
                    <a
                      href={TRUSTPILOT.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ fontSize: ".85rem", color: "#007f55", fontWeight: 700, textDecoration: "none" }}
                    >
                      Read our verified international reviews on Trustpilot ({TRUSTPILOT.score}/5 rating) →
                    </a>
                  </div>
                </div>
              )}
            </section>

            {/* ── REQUIRED SECTION 7: Why Parents in [Country] Choose NoorPath ── */}
            <section id="why-choose" style={{ marginBottom: 44, scrollMarginTop: 80 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
                <Shield size={22} style={{ color: "var(--emerald, #0a6e4f)" }} />
                <h2 style={{ fontFamily: "var(--font-playfair), serif", fontSize: "1.65rem", margin: 0 }}>
                  Why Parents in {data.countryName} Choose NoorPath
                </h2>
              </div>
              <p style={{ color: "var(--muted, #64748b)", fontSize: ".95rem", lineHeight: 1.7, marginBottom: 20 }}>
                Families choose NoorPath over generic online directories and crowded local classes for our proven 1-on-1 pedagogical approach and parent-first policies:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {data.whyChooseBullets.map((bullet) => (
                  <div
                    key={bullet.title}
                    style={{
                      background: "#fff",
                      borderRadius: 14,
                      padding: "20px",
                      border: "1px solid var(--border, #e2e8f0)",
                      boxShadow: "0 4px 12px rgba(0,0,0,.03)",
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "flex-start", gap: 10, marginBottom: 8 }}>
                      <CheckCircle size={20} style={{ color: "var(--emerald, #0a6e4f)", flexShrink: 0, marginTop: 2 }} />
                      <h3 style={{ fontSize: "1rem", fontWeight: 700, margin: 0, color: "var(--charcoal, #0f172a)" }}>
                        {bullet.title}
                      </h3>
                    </div>
                    <p style={{ margin: "0 0 0 30px", fontSize: ".88rem", lineHeight: 1.65, color: "var(--slate, #334155)" }}>
                      {bullet.description}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* ── REQUIRED SECTION 8: FAQs for [Country] Parents ── */}
            <section id="faqs" style={{ marginBottom: 44, scrollMarginTop: 80 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
                <HelpCircle size={22} style={{ color: "var(--emerald, #0a6e4f)" }} />
                <h2 style={{ fontFamily: "var(--font-playfair), serif", fontSize: "1.65rem", margin: 0 }}>
                  FAQs for {data.countryName} Parents
                </h2>
              </div>
              <p style={{ color: "var(--muted, #64748b)", fontSize: ".95rem", lineHeight: 1.7, marginBottom: 20 }}>
                Everything parents in {data.countryName} ask about online lessons, tutor credentials, scheduling, and billing:
              </p>

              <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                {data.faqs.map((faq) => (
                  <div
                    key={faq.q}
                    style={{
                      background: "#fff",
                      borderRadius: 12,
                      padding: "20px 22px",
                      border: "1px solid var(--border, #e2e8f0)",
                      boxShadow: "0 2px 8px rgba(0,0,0,.03)",
                    }}
                  >
                    <h3 style={{ fontSize: "1.02rem", fontWeight: 700, color: "var(--charcoal, #0f172a)", marginBottom: 8 }}>
                      {faq.q}
                    </h3>
                    <p style={{ margin: 0, color: "var(--slate, #334155)", fontSize: ".92rem", lineHeight: 1.75 }}>
                      {faq.a}
                    </p>
                  </div>
                ))}
              </div>
              <FaqJsonLd faqs={data.faqs} pageUrl={pageUrl} />
            </section>

            {/* ── CITY LINKS & LOCAL CLUSTERING ── */}
            <section style={{ marginBottom: 44, background: "#fff", borderRadius: 14, padding: "24px", border: "1px solid var(--border, #e2e8f0)" }}>
              <h3 style={{ fontFamily: "var(--font-playfair), serif", fontSize: "1.2rem", marginBottom: 14 }}>
                Explore City Quran Classes in {data.countryName}
              </h3>
              <p style={{ fontSize: ".88rem", color: "var(--muted, #64748b)", marginBottom: 16 }}>
                Looking for localized classes tailored to your specific city or borough? Browse our dedicated metropolitan programs:
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
                {data.cityLinks.map((city) => (
                  <Link
                    key={city.url}
                    href={city.url}
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 6,
                      background: "rgba(10,110,79,.06)",
                      color: "var(--emerald, #0a6e4f)",
                      padding: "8px 16px",
                      borderRadius: 8,
                      fontSize: ".85rem",
                      fontWeight: 600,
                      textDecoration: "none",
                    }}
                  >
                    📍 {city.name} →
                  </Link>
                ))}
                {data.slug === "online-quran-classes-uk" && (
                  <Link
                    href="/blog/timezone-friendly-quran-classes-uk-europe"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 6,
                      background: "rgba(201,146,42,.08)",
                      color: "var(--charcoal, #0f172a)",
                      padding: "8px 16px",
                      borderRadius: 8,
                      fontSize: ".85rem",
                      fontWeight: 600,
                      textDecoration: "none",
                    }}
                  >
                    📖 UK Timezone-Friendly Classes Guide →
                  </Link>
                )}
                {data.slug === "online-quran-classes-pakistan" && (
                  <Link
                    href="/blog/balancing-school-and-online-quran-in-pakistan"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 6,
                      background: "rgba(201,146,42,.08)",
                      color: "var(--charcoal, #0f172a)",
                      padding: "8px 16px",
                      borderRadius: 8,
                      fontSize: ".85rem",
                      fontWeight: 600,
                      textDecoration: "none",
                    }}
                  >
                    📖 Balancing School &amp; Quran in Pakistan →
                  </Link>
                )}
                <Link
                  href="/locations"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 6,
                    background: "#f1f5f9",
                    color: "var(--charcoal, #0f172a)",
                    padding: "8px 16px",
                    borderRadius: 8,
                    fontSize: ".85rem",
                    fontWeight: 600,
                    textDecoration: "none",
                  }}
                >
                  All 33+ Country Locations →
                </Link>
              </div>
            </section>

            {/* ── REQUIRED SECTION 9: CTA — Start Free Trial Sessions in [Country] ── */}
            <section
              id="cta-bottom"
              style={{
                background: "linear-gradient(135deg, #074733 0%, #0a6e4f 100%)",
                borderRadius: 20,
                padding: "36px 30px",
                color: "#fff",
                boxShadow: "0 16px 40px rgba(10,110,79,.2)",
                scrollMarginTop: 80,
              }}
            >
              <div style={{ textAlign: "center", maxWidth: 640, margin: "0 auto 28px" }}>
                <span style={{ background: "var(--gold, #c9922a)", color: "#1a1a2e", padding: "4px 14px", borderRadius: 20, fontSize: ".72rem", fontWeight: 800, textTransform: "uppercase" }}>
                  100% Free · No Obligation
                </span>
                <h2 style={{ fontFamily: "var(--font-playfair), serif", color: "#fff", fontSize: "2rem", marginTop: 12, marginBottom: 10 }}>
                  Start {TRIAL.classes} Free Trial Sessions in {data.countryName}
                </h2>
                <p style={{ color: "rgba(255,255,255,.82)", fontSize: ".95rem", lineHeight: 1.65, margin: 0 }}>
                  Experience our 1-on-1 teaching, test audio/video connectivity, and meet your matched tutor. Takes only 60 seconds to request your free trial.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <div style={{ display: "flex", flexDirection: "column", gap: 14, marginBottom: 24 }}>
                    {[
                      "3 free 30-minute private lessons",
                      "No credit card required upfront",
                      `${data.timezone} flexible scheduling`,
                      "Female tutor available upon request",
                    ].map((item) => (
                      <div key={item} style={{ display: "flex", alignItems: "center", gap: 10 }}>
                        <CheckCircle size={18} style={{ color: "var(--gold-lt, #e0a838)" }} />
                        <span style={{ fontSize: ".92rem", color: "rgba(255,255,255,.9)" }}>{item}</span>
                      </div>
                    ))}
                  </div>

                  <WhatsAppLink
                    href={`${CONTACT.whatsappUrl}?text=${waTrialText}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: 10,
                      width: "100%",
                      background: "#25D366",
                      color: "#0b3d2e",
                      padding: "14px",
                      borderRadius: 12,
                      fontWeight: 800,
                      fontSize: "1rem",
                      textDecoration: "none",
                    }}
                  >
                    💬 Book Free Trial via WhatsApp
                  </WhatsAppLink>
                </div>

                <div style={{ background: "rgba(255,255,255,.09)", padding: "20px", borderRadius: 16, border: "1px solid rgba(255,255,255,.16)" }}>
                  <div style={{ fontSize: ".88rem", fontWeight: 700, color: "var(--gold-lt, #e0a838)", marginBottom: 12 }}>
                    Or submit your details online:
                  </div>
                  <CTAForm />
                </div>
              </div>
            </section>
          </div>

          {/* ── SIDEBAR ── */}
          <div className="lg:col-span-4">
            <div style={{ position: "sticky", top: 90, display: "flex", flexDirection: "column", gap: 20 }}>
              {/* Visual Strip */}
              <div style={{ background: "#fff", borderRadius: 16, overflow: "hidden", border: "1px solid var(--border, #e2e8f0)", boxShadow: "0 4px 14px rgba(0,0,0,.04)" }}>
                <Image
                  src="/marketing/kids-online-quran-class.jpg"
                  alt={`Online Quran classes in ${data.countryName}`}
                  width={600}
                  height={400}
                  style={{ width: "100%", height: 180, objectFit: "cover" }}
                />
                <div style={{ padding: "16px 18px" }}>
                  <div style={{ fontWeight: 700, fontSize: ".95rem", color: "var(--charcoal, #0f172a)", marginBottom: 6 }}>
                    Live 1-on-1 Quran Lessons
                  </div>
                  <p style={{ fontSize: ".82rem", color: "var(--muted, #64748b)", margin: 0, lineHeight: 1.55 }}>
                    Dedicated recitation correction for learners in {data.countryName}. Flexible timings in {data.timezone}.
                  </p>
                </div>
              </div>

              {/* Quick Jump Index */}
              <div style={{ background: "#fff", borderRadius: 16, padding: "20px", border: "1px solid var(--border, #e2e8f0)", boxShadow: "0 4px 14px rgba(0,0,0,.04)" }}>
                <div style={{ fontWeight: 700, fontSize: ".9rem", color: "var(--charcoal, #0f172a)", marginBottom: 12, textTransform: "uppercase", letterSpacing: ".04em" }}>
                  On This Page
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: 8, fontSize: ".85rem" }}>
                  <a href="#class-timings" style={{ color: "var(--emerald, #0a6e4f)", textDecoration: "none" }}>→ 1. Class Timings ({data.timezone})</a>
                  <a href="#weekend-holiday-schedule" style={{ color: "var(--emerald, #0a6e4f)", textDecoration: "none" }}>→ 2. Weekend &amp; Holiday Schedule</a>
                  <a href="#pricing" style={{ color: "var(--emerald, #0a6e4f)", textDecoration: "none" }}>→ 3. Pricing in {data.currencyCode}</a>
                  <a href="#local-testimonials" style={{ color: "var(--emerald, #0a6e4f)", textDecoration: "none" }}>→ 4. Local Testimonials</a>
                  <a href="#why-choose" style={{ color: "var(--emerald, #0a6e4f)", textDecoration: "none" }}>→ 5. Why Parents Choose NoorPath</a>
                  <a href="#faqs" style={{ color: "var(--emerald, #0a6e4f)", textDecoration: "none" }}>→ 6. Frequently Asked Questions</a>
                  <a href="#cta-bottom" style={{ color: "var(--emerald, #0a6e4f)", textDecoration: "none" }}>→ 7. Start Free Trial Sessions</a>
                </div>
              </div>

              {/* Verified Trust Card */}
              <div style={{ background: "rgba(10,110,79,.04)", borderRadius: 16, padding: "18px", border: "1px solid rgba(10,110,79,.15)" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
                  <Shield size={18} style={{ color: "var(--emerald, #0a6e4f)" }} />
                  <span style={{ fontWeight: 700, fontSize: ".88rem", color: "var(--emerald, #0a6e4f)" }}>Our Student Commitment</span>
                </div>
                <p style={{ fontSize: ".82rem", color: "var(--slate, #334155)", margin: 0, lineHeight: 1.6 }}>
                  Every tutor holds verified Ijazah or Quran teaching credentials. If you are not satisfied with your tutor match, we will change tutors immediately or issue a full refund within 7 days.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
