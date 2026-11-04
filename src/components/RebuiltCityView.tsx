import React from "react";
import Link from "next/link";
import Image from "next/image";
import { CheckCircle, Clock, Shield, Star, Users, BookOpen, Sparkles, UserCheck, Calendar, ArrowRight } from "lucide-react";
import type { CityLandingPageData } from "@/data/cityLandingPages";
import CTAForm from "@/components/CTAForm";
import WhatsAppLink from "@/components/WhatsAppLink";
import FaqJsonLd from "@/components/FaqJsonLd";
import { CurrencyProvider, LocalPrice, PriceDisclosure } from "@/components/pricing/LocalPrice";
import CurrencySelector from "@/components/pricing/CurrencySelector";
import type { DisplayRates } from "@/lib/currency/rates";
import {
  CONTACT,
  FAMILY_DISCOUNTS,
  PRICING_PLANS,
  REFUND_WINDOW_DAYS,
  RESCHEDULE_NOTICE_HOURS,
  TRIAL,
  TRIAL_OFFER,
  TRUSTPILOT,
  TUTOR_FACTS,
} from "@/lib/academyFacts";

interface Props {
  data: CityLandingPageData;
  pageUrl: string;
  rates: DisplayRates;
  /** Local display currency for the city's country; "USD" where no licence-clear rate exists. */
  currency: string;
}

const siblingDiscounts = FAMILY_DISCOUNTS.map((d) => `${d.discountPercent}% for ${d.siblings}`).join(", ");

/**
 * The four shared city FAQs, answered from academyFacts so city pages never state
 * fixed timetables, unconditional female-tutor availability or stale local prices.
 * Question wording stays city-specific from the data file.
 */
function buildCityFaqs(data: CityLandingPageData, currency: string): { q: string; a: string }[] {
  const starter = PRICING_PLANS[0];
  return data.faqs.map(({ q }) => {
    const question = q.toLowerCase();
    if (question.includes("female")) {
      return {
        q,
        a: `Yes. ${TUTOR_FACTS.femaleTutors} Mention the preference when you enquire; a female tutor for your ${data.city} time window is assigned subject to availability and confirmed before the trial.`,
      };
    }
    if (question.includes("timing")) {
      return {
        q,
        a: `Request the windows that suit your family in ${data.timezone} — after school, evenings or weekends. There is no fixed public timetable: the recurring time is confirmed after tutor matching, and a class can be moved with ${RESCHEDULE_NOTICE_HOURS} hours' notice, subject to tutor availability.`,
      };
    }
    if (question.includes("cost")) {
      const localNote = currency === "USD" ? "" : `; the pricing section shows approximate ${currency} amounts`;
      return {
        q,
        a: `Plans start at $${starter.monthlyPriceUsd} a month for one ${starter.sessionMinutes}-minute lesson a week and are billed in US dollars${localNote}. Sibling discounts are ${siblingDiscounts}, and a full refund is available if you ask within ${REFUND_WINDOW_DAYS} days of the first paid class.`,
      };
    }
    return {
      q,
      a: `Lessons are live and one-to-one over video. You share the learner's level and the times that suit you in ${data.timezone}; NoorPath matches a tutor and confirms a schedule, and the tutor corrects recitation as your child reads. You start with ${TRIAL_OFFER}, with no credit card.`,
    };
  });
}

export default function RebuiltCityView({ data, pageUrl, rates, currency }: Props) {
  const faqs = buildCityFaqs(data, currency);
  const isNorthAmerica = data.countrySlug === "online-quran-classes-usa" || data.countrySlug === "online-quran-classes-canada";
  const waTrialText = encodeURIComponent(
    `Assalamu Alaikum, I would like to book the free Quran trial sessions for ${data.city}. Please share tutor availability for ${data.timezone}.`
  );

  return (
    <div style={{ background: "var(--ivory, #fdfbf7)", color: "var(--charcoal, #0f172a)" }}>
      {/* ── SECTION 1 & 2: HERO WITH EXACT H1 & ANSWER-BOX ── */}
      <section
        style={{
          background: "linear-gradient(180deg, #074733 0%, #0a6e4f 100%)",
          color: "#fff",
          padding: "48px 0 54px",
          position: "relative",
        }}
      >
        <div className="max-w-[1200px] mx-auto px-4">
          <nav aria-label="Breadcrumb" style={{ marginBottom: 18 }}>
            <Link href="/" style={{ color: "var(--gold-lt, #e0a838)", fontSize: ".85rem", textDecoration: "none" }}>Home</Link>
            <span style={{ color: "rgba(255,255,255,.4)", margin: "0 8px" }}>›</span>
            <Link href="/locations" style={{ color: "var(--gold-lt, #e0a838)", fontSize: ".85rem", textDecoration: "none" }}>Locations</Link>
            <span style={{ color: "rgba(255,255,255,.4)", margin: "0 8px" }}>›</span>
            <Link href={data.countryLink.url} style={{ color: "var(--gold-lt, #e0a838)", fontSize: ".85rem", textDecoration: "none" }}>{data.country}</Link>
            <span style={{ color: "rgba(255,255,255,.4)", margin: "0 8px" }}>›</span>
            <span style={{ color: "rgba(255,255,255,.75)", fontSize: ".85rem" }}>{data.city}</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-7">
              <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(255,255,255,.12)", padding: "6px 14px", borderRadius: 30, fontSize: ".85rem", marginBottom: 14 }}>
                <span>{data.flag}</span>
                <span style={{ color: "var(--gold-lt, #e0a838)", fontWeight: 700 }}>{data.city} · {data.timezone}</span>
              </div>

              {/* 1) Exact H1: "[Primary Keyword] — 1-on-1 Online Classes" */}
              <h1
                id="city-hero-h1"
                style={{
                  fontFamily: "var(--font-playfair), serif",
                  fontSize: "clamp(1.85rem, 3.8vw, 2.65rem)",
                  fontWeight: 800,
                  lineHeight: 1.25,
                  marginBottom: 18,
                  color: "#ffffff",
                }}
              >
                {data.h1}
              </h1>

              {/* 2) Answer-box (40–60 words) */}
              <div
                id="city-answer-box"
                style={{
                  background: "rgba(255,255,255,.98)",
                  color: "var(--charcoal, #0f172a)",
                  borderRadius: 16,
                  padding: "18px 20px",
                  borderLeft: "5px solid var(--gold, #c9922a)",
                  boxShadow: "0 10px 30px rgba(0,0,0,.15)",
                  marginBottom: 22,
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
                  <Sparkles size={18} style={{ color: "var(--gold, #c9922a)" }} />
                  <span style={{ fontSize: ".76rem", fontWeight: 800, textTransform: "uppercase", letterSpacing: ".05em", color: "var(--emerald, #0a6e4f)" }}>
                    Quick Answer · {data.city} Quran Tutoring
                  </span>
                </div>
                <p style={{ margin: 0, fontSize: "1rem", lineHeight: 1.68, color: "#1e293b", fontWeight: 500 }}>
                  {data.answerBox}
                </p>
              </div>

              <div style={{ display: "flex", flexWrap: "wrap", gap: 12, marginBottom: 20 }}>
                <a
                  href="#book-city-trial"
                  className="btn-primary-np"
                  style={{
                    background: "linear-gradient(135deg, #c9922a, #d4a030)",
                    color: "#1a1a2e",
                    fontWeight: 800,
                    padding: "12px 24px",
                    borderRadius: 50,
                    textDecoration: "none",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 8,
                  }}
                >
                  Book Free Trial in {data.city} →
                </a>
                <WhatsAppLink
                  href={`${CONTACT.whatsappUrl}?text=${waTrialText}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline-np"
                  style={{
                    color: "#fff",
                    borderColor: "rgba(255,255,255,.45)",
                    padding: "12px 20px",
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
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8, fontSize: ".82rem", color: "rgba(255,255,255,.85)" }}>
                <span>Also explore:</span>
                <Link href="/courses/noorani-qaida-online" style={{ color: "var(--gold-lt, #e0a838)", textDecoration: "underline" }}>
                  Noorani Qaida Online
                </Link>
                <span>·</span>
                <Link href={data.countryLink.url} style={{ color: "var(--gold-lt, #e0a838)", textDecoration: "underline" }}>
                  {data.countryLink.name}
                </Link>
                <span>·</span>
                <Link href="/female-quran-teacher-online" style={{ color: "var(--gold-lt, #e0a838)", textDecoration: "underline" }}>
                  Female Quran Teachers
                </Link>
              </div>
            </div>

            {/* Right: Lead Capture Form */}
            <div className="lg:col-span-5" id="book-city-trial">
              <div
                style={{
                  background: "rgba(255,255,255,.09)",
                  border: "1px solid rgba(255,255,255,.2)",
                  borderRadius: 20,
                  padding: "22px 20px",
                  backdropFilter: "blur(10px)",
                  boxShadow: "0 20px 50px rgba(0,0,0,.25)",
                }}
              >
                <div style={{ textAlign: "center", marginBottom: 12 }}>
                  <span style={{ background: "var(--gold, #c9922a)", color: "#1a1a2e", padding: "4px 12px", borderRadius: 20, fontSize: ".72rem", fontWeight: 800, textTransform: "uppercase" }}>
                    Free {TRIAL.durationMinutes}-Min Trial · No Card Required
                  </span>
                  <h2 style={{ fontFamily: "var(--font-playfair), serif", color: "#fff", fontSize: "1.25rem", marginTop: 8, marginBottom: 4 }}>
                    Start in {data.city} Today
                  </h2>
                  <p style={{ color: "rgba(255,255,255,.75)", fontSize: ".8rem", margin: 0 }}>
                    1-on-1 private lesson scheduled in {data.timezone}
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
            {/* ── 3) WHO WE TEACH IN [CITY] ── */}
            <section id="who-we-teach" style={{ marginBottom: 44, scrollMarginTop: 80 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
                <Users size={22} style={{ color: "var(--emerald, #0a6e4f)" }} />
                <h2 style={{ fontFamily: "var(--font-playfair), serif", fontSize: "1.6rem", margin: 0 }}>
                  Who We Teach in {data.city}
                </h2>
              </div>
              <p style={{ color: "var(--muted, #64748b)", fontSize: ".95rem", lineHeight: 1.7, marginBottom: 20 }}>
                Every student has distinct learning needs and starting points. Our customized 1-on-1 online instruction is tailored across four dedicated learner groups in {data.city}:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div style={{ background: "#fff", borderRadius: 14, padding: "20px", border: "1px solid var(--border, #e2e8f0)", boxShadow: "0 4px 12px rgba(0,0,0,.03)" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 10 }}>
                    <span style={{ fontSize: "1.2rem" }}>🧒</span>
                    <h3 style={{ fontSize: "1.02rem", fontWeight: 700, margin: 0, color: "var(--charcoal, #0f172a)" }}>
                      Kids Aged 4 to 16
                    </h3>
                  </div>
                  <p style={{ margin: 0, fontSize: ".9rem", lineHeight: 1.7, color: "var(--slate, #334155)" }}>
                    {data.whoWeTeach.kids}
                  </p>
                </div>

                <div style={{ background: "#fff", borderRadius: 14, padding: "20px", border: "1px solid var(--border, #e2e8f0)", boxShadow: "0 4px 12px rgba(0,0,0,.03)" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 10 }}>
                    <span style={{ fontSize: "1.2rem" }}>📖</span>
                    <h3 style={{ fontSize: "1.02rem", fontWeight: 700, margin: 0, color: "var(--charcoal, #0f172a)" }}>
                      Adult Learners
                    </h3>
                  </div>
                  <p style={{ margin: 0, fontSize: ".9rem", lineHeight: 1.7, color: "var(--slate, #334155)" }}>
                    {data.whoWeTeach.adults}
                  </p>
                </div>

                <div style={{ background: "#fff", borderRadius: 14, padding: "20px", border: "1px solid var(--border, #e2e8f0)", boxShadow: "0 4px 12px rgba(0,0,0,.03)" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 10 }}>
                    <span style={{ fontSize: "1.2rem" }}>🌱</span>
                    <h3 style={{ fontSize: "1.02rem", fontWeight: 700, margin: 0, color: "var(--charcoal, #0f172a)" }}>
                      Reverts &amp; New Muslims
                    </h3>
                  </div>
                  <p style={{ margin: 0, fontSize: ".9rem", lineHeight: 1.7, color: "var(--slate, #334155)" }}>
                    {data.whoWeTeach.reverts}
                  </p>
                </div>

                <div style={{ background: "#fff", borderRadius: 14, padding: "20px", border: "1px solid var(--border, #e2e8f0)", boxShadow: "0 4px 12px rgba(0,0,0,.03)" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 10 }}>
                    <span style={{ fontSize: "1.2rem" }}>🧕</span>
                    <h3 style={{ fontSize: "1.02rem", fontWeight: 700, margin: 0, color: "var(--charcoal, #0f172a)" }}>
                      Sisters &amp; Daughters
                    </h3>
                  </div>
                  <p style={{ margin: 0, fontSize: ".9rem", lineHeight: 1.7, color: "var(--slate, #334155)" }}>
                    {data.whoWeTeach.sisters}
                  </p>
                </div>
              </div>
            </section>

            {/* ── 4) CLASS TIMES FOR [CITY] ── */}
            <section id="class-times" style={{ marginBottom: 44, scrollMarginTop: 80 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
                <Clock size={22} style={{ color: "var(--emerald, #0a6e4f)" }} />
                <h2 style={{ fontFamily: "var(--font-playfair), serif", fontSize: "1.6rem", margin: 0 }}>
                  Lesson Windows You Can Request in {data.city}
                </h2>
              </div>
              <p style={{ color: "var(--muted, #64748b)", fontSize: ".95rem", lineHeight: 1.7, marginBottom: 20 }}>
                These are common windows {data.city} families ask for in <strong>{data.timezone}</strong>. They are not a fixed
                timetable: the tutor and recurring time are confirmed after matching.
              </p>

              <div style={{ overflowX: "auto", background: "#fff", borderRadius: 14, border: "1px solid var(--border, #e2e8f0)", boxShadow: "0 4px 14px rgba(0,0,0,.04)" }}>
                <table style={{ width: "100%", borderCollapse: "collapse", fontSize: ".9rem", textAlign: "left" }}>
                  <thead>
                    <tr style={{ background: "var(--emerald, #0a6e4f)", color: "#fff" }}>
                      <th style={{ padding: "14px 18px", fontWeight: 700 }}>Window</th>
                      <th style={{ padding: "14px 18px", fontWeight: 700 }}>Local Time ({data.timezone})</th>
                      <th style={{ padding: "14px 18px", fontWeight: 700 }}>Target Routine</th>
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

            {/* ── 5) LOCAL PRICING ── */}
            <section id="local-pricing" style={{ marginBottom: 44, scrollMarginTop: 80 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
                <span style={{ fontSize: "1.3rem" }}>💳</span>
                <h2 style={{ fontFamily: "var(--font-playfair), serif", fontSize: "1.6rem", margin: 0 }}>
                  Plans and Prices for {data.city}
                </h2>
              </div>
              <CurrencyProvider defaultCode={currency} rates={rates}>
              <div style={{ background: "#fff", borderRadius: 14, padding: "24px", border: "1px solid var(--border, #e2e8f0)", boxShadow: "0 4px 14px rgba(0,0,0,.04)" }}>
                <div style={{ display: "flex", alignItems: "baseline", flexWrap: "wrap", gap: 12, marginBottom: 10 }}>
                  <div style={{ fontSize: "1.6rem", fontWeight: 800, color: "var(--emerald, #0a6e4f)" }}>
                    From ${PRICING_PLANS[0].monthlyPriceUsd}/month
                  </div>
                  <div style={{ fontSize: ".95rem", color: "var(--slate, #334155)", fontWeight: 700 }}>
                    <LocalPrice usd={PRICING_PLANS[0].monthlyPriceUsd} />
                  </div>
                </div>
                <p style={{ color: "var(--slate, #334155)", fontSize: ".92rem", lineHeight: 1.7, marginBottom: 12 }}>
                  Plans are billed in US dollars: {PRICING_PLANS.map((plan) => `$${plan.monthlyPriceUsd}`).join(", ")} a month for{" "}
                  {PRICING_PLANS.map((plan) => plan.sessionsPerWeek).join(", ")} lessons a week. Sibling discounts: {siblingDiscounts}.
                  All plans include private one-to-one lessons with certified tutors, regular progress updates through the Parent
                  Portal, and rescheduling with {RESCHEDULE_NOTICE_HOURS} hours&apos; notice, subject to tutor availability.
                </p>
                <div style={{ marginBottom: 12 }}>
                  <CurrencySelector />
                </div>
                <PriceDisclosure style={{ color: "var(--muted, #64748b)", fontSize: ".8rem", lineHeight: 1.6, margin: "0 0 16px" }} />
                <div style={{ display: "flex", flexWrap: "wrap", gap: 14 }}>
                  <Link href="/pricing" style={{ color: "var(--emerald, #0a6e4f)", fontWeight: 700, fontSize: ".9rem", textDecoration: "underline" }}>
                    View Complete Published Tuition Plans →
                  </Link>
                  <span style={{ color: "var(--muted, #64748b)" }}>·</span>
                  <a href="#book-city-trial" style={{ color: "var(--emerald, #0a6e4f)", fontWeight: 700, fontSize: ".9rem", textDecoration: "underline" }}>
                    Start {TRIAL.classes} Free Trial Sessions →
                  </a>
                </div>
              </div>
              </CurrencyProvider>
            </section>

            {/* ── 6) HOW TUTORS ARE MATCHED IN [CITY] ── */}
            <section id="meet-tutors" style={{ marginBottom: 44, scrollMarginTop: 80 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
                <UserCheck size={22} style={{ color: "var(--emerald, #0a6e4f)" }} />
                <h2 style={{ fontFamily: "var(--font-playfair), serif", fontSize: "1.6rem", margin: 0 }}>
                  How Tutors Are Matched in {data.city}
                </h2>
              </div>
              <p style={{ color: "var(--muted, #64748b)", fontSize: ".95rem", lineHeight: 1.7, margin: 0 }}>
                Your child will be matched with a qualified male or female tutor based on their level, schedule and
                teacher preference. {TUTOR_FACTS.credentials} {TUTOR_FACTS.rematch}
              </p>
              {/* ADD REAL TUTOR profiles here once verified on /our-tutors */}
            </section>

            {/* ── 7) HOW ONLINE CLASSES WORK ── */}
            <section id="how-it-works" style={{ marginBottom: 44, scrollMarginTop: 80 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
                <BookOpen size={22} style={{ color: "var(--emerald, #0a6e4f)" }} />
                <h2 style={{ fontFamily: "var(--font-playfair), serif", fontSize: "1.6rem", margin: 0 }}>
                  How Online Classes Work
                </h2>
              </div>
              <p style={{ color: "var(--muted, #64748b)", fontSize: ".95rem", lineHeight: 1.7, marginBottom: 20 }}>
                Getting started is simple, transparent, and structured for steady long-term retention:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {Object.entries(data.howItWorks).map(([key, step], idx) => (
                  <div
                    key={key}
                    style={{
                      background: "#fff",
                      borderRadius: 12,
                      padding: "18px",
                      border: "1px solid var(--border, #e2e8f0)",
                      boxShadow: "0 2px 8px rgba(0,0,0,.03)",
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
                      <span style={{ width: 28, height: 28, borderRadius: "50%", background: "var(--emerald, #0a6e4f)", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontSize: ".85rem", fontWeight: 800 }}>
                        {idx + 1}
                      </span>
                      <h3 style={{ fontSize: ".98rem", fontWeight: 700, margin: 0, color: "var(--charcoal, #0f172a)" }}>
                        {step.title}
                      </h3>
                    </div>
                    <p style={{ margin: "0 0 0 36px", fontSize: ".88rem", lineHeight: 1.65, color: "var(--slate, #334155)" }}>
                      {step.desc}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* ── LOCAL LEARNING GUIDE & DEEP CONTEXT ── */}
            <section style={{ marginBottom: 44, background: "#fff", borderRadius: 14, padding: "26px", border: "1px solid var(--border, #e2e8f0)", boxShadow: "0 4px 14px rgba(0,0,0,.04)" }}>
              <h2 style={{ fontFamily: "var(--font-playfair), serif", fontSize: "1.45rem", marginBottom: 14 }}>
                {data.localGuide.heading}
              </h2>
              {data.localGuide.paragraphs.map((p, i) => (
                <p key={i} style={{ fontSize: ".93rem", lineHeight: 1.8, color: "var(--slate, #334155)", marginBottom: i < data.localGuide.paragraphs.length - 1 ? 16 : 0 }}>
                  {p}
                </p>
              ))}
            </section>

            {/* ── 8) FAQS FOR [CITY] PARENTS ── */}
            <section id="city-faqs" style={{ marginBottom: 44, scrollMarginTop: 80 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
                <Shield size={22} style={{ color: "var(--emerald, #0a6e4f)" }} />
                <h2 style={{ fontFamily: "var(--font-playfair), serif", fontSize: "1.6rem", margin: 0 }}>
                  FAQs for {data.city} Parents
                </h2>
              </div>
              <p style={{ color: "var(--muted, #64748b)", fontSize: ".95rem", lineHeight: 1.7, marginBottom: 20 }}>
                Common questions from families in {data.city} about lesson structure, tutor credentials, and scheduling:
              </p>

              <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                {faqs.map((faq) => (
                  <div
                    key={faq.q}
                    style={{
                      background: "#fff",
                      borderRadius: 12,
                      padding: "18px 20px",
                      border: "1px solid var(--border, #e2e8f0)",
                      boxShadow: "0 2px 8px rgba(0,0,0,.03)",
                    }}
                  >
                    <h3 style={{ fontSize: ".98rem", fontWeight: 700, color: "var(--charcoal, #0f172a)", marginBottom: 6 }}>
                      {faq.q}
                    </h3>
                    <p style={{ margin: 0, color: "var(--slate, #334155)", fontSize: ".9rem", lineHeight: 1.75 }}>
                      {faq.a}
                    </p>
                  </div>
                ))}
              </div>
              <FaqJsonLd faqs={faqs} pageUrl={pageUrl} />
            </section>

            {/* ── INTERNAL SIBLING & COUNTRY LINKS ── */}
            <section style={{ marginBottom: 44, background: "#fff", borderRadius: 14, padding: "22px", border: "1px solid var(--border, #e2e8f0)" }}>
              <h3 style={{ fontFamily: "var(--font-playfair), serif", fontSize: "1.15rem", marginBottom: 12 }}>
                Related Learning Hubs in {data.country}
              </h3>
              <p style={{ fontSize: ".86rem", color: "var(--muted, #64748b)", marginBottom: 14 }}>
                Connect with our wider educational network and neighboring city programs:
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
                <Link
                  href={data.countryLink.url}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 6,
                    background: "rgba(10,110,79,.08)",
                    color: "var(--emerald, #0a6e4f)",
                    padding: "8px 14px",
                    borderRadius: 8,
                    fontSize: ".85rem",
                    fontWeight: 700,
                    textDecoration: "none",
                  }}
                >
                  🌐 {data.countryLink.name} →
                </Link>
                {data.siblingCities.map((sib) => (
                  <Link
                    key={sib.url}
                    href={sib.url}
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 6,
                      background: "#f1f5f9",
                      color: "var(--charcoal, #0f172a)",
                      padding: "8px 14px",
                      borderRadius: 8,
                      fontSize: ".85rem",
                      fontWeight: 600,
                      textDecoration: "none",
                    }}
                  >
                    📍 {sib.city} Quran Classes →
                  </Link>
                ))}
                <Link
                  href={data.courseLink.url}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 6,
                    background: "rgba(201,146,42,.08)",
                    color: "var(--gold, #c9922a)",
                    padding: "8px 14px",
                    borderRadius: 8,
                    fontSize: ".85rem",
                    fontWeight: 700,
                    textDecoration: "none",
                  }}
                >
                  📖 {data.courseLink.name} →
                </Link>
              </div>
            </section>

            {/* ── 9) CTA: BOOK A FREE TRIAL IN [CITY] ── */}
            <section
              id="cta-city-bottom"
              style={{
                background: "linear-gradient(135deg, #074733 0%, #0a6e4f 100%)",
                borderRadius: 20,
                padding: "36px 28px",
                color: "#fff",
                boxShadow: "0 16px 40px rgba(10,110,79,.2)",
                scrollMarginTop: 80,
              }}
            >
              <div style={{ textAlign: "center", maxWidth: 640, margin: "0 auto 26px" }}>
                <span style={{ background: "var(--gold, #c9922a)", color: "#1a1a2e", padding: "4px 14px", borderRadius: 20, fontSize: ".72rem", fontWeight: 800, textTransform: "uppercase" }}>
                  Start Free · No Commitment
                </span>
                <h2 style={{ fontFamily: "var(--font-playfair), serif", color: "#fff", fontSize: "1.95rem", marginTop: 10, marginBottom: 10 }}>
                  Book a Free Trial in {data.city}
                </h2>
                <p style={{ color: "rgba(255,255,255,.82)", fontSize: ".92rem", lineHeight: 1.65, margin: 0 }}>
                  Meet your dedicated tutor, test audio clarity, and experience our structured curriculum firsthand.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 22 }}>
                    {[
                      "3 free 30-minute 1-on-1 trial sessions",
                      "No credit card required upfront",
                      `${data.timezone} flexible schedule matching`,
                      "Female teacher requests welcome",
                    ].map((item) => (
                      <div key={item} style={{ display: "flex", alignItems: "center", gap: 10 }}>
                        <CheckCircle size={18} style={{ color: "var(--gold-lt, #e0a838)" }} />
                        <span style={{ fontSize: ".9rem", color: "rgba(255,255,255,.9)" }}>{item}</span>
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
                      padding: "13px",
                      borderRadius: 12,
                      fontWeight: 800,
                      fontSize: ".95rem",
                      textDecoration: "none",
                    }}
                  >
                    💬 WhatsApp Instant Registration
                  </WhatsAppLink>
                </div>

                <div style={{ background: "rgba(255,255,255,.09)", padding: "20px", borderRadius: 16, border: "1px solid rgba(255,255,255,.16)" }}>
                  <div style={{ fontSize: ".85rem", fontWeight: 700, color: "var(--gold-lt, #e0a838)", marginBottom: 10 }}>
                    Or submit your request below:
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
                  src="/marketing/family-evening-quran.jpg"
                  alt={`Quran lessons in ${data.city}`}
                  width={600}
                  height={400}
                  style={{ width: "100%", height: 180, objectFit: "cover" }}
                />
                <div style={{ padding: "16px 18px" }}>
                  <div style={{ fontWeight: 700, fontSize: ".95rem", color: "var(--charcoal, #0f172a)", marginBottom: 6 }}>
                    1-on-1 Quran Lessons in {data.city}
                  </div>
                  <p style={{ fontSize: ".82rem", color: "var(--muted, #64748b)", margin: 0, lineHeight: 1.55 }}>
                    Individual recitation guidance matching {data.timezone} school and work schedules.
                  </p>
                </div>
              </div>

              {/* Quick Jump Index */}
              <div style={{ background: "#fff", borderRadius: 16, padding: "20px", border: "1px solid var(--border, #e2e8f0)", boxShadow: "0 4px 14px rgba(0,0,0,.04)" }}>
                <div style={{ fontWeight: 700, fontSize: ".85rem", color: "var(--charcoal, #0f172a)", marginBottom: 12, textTransform: "uppercase", letterSpacing: ".04em" }}>
                  Page Navigation
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: 8, fontSize: ".85rem" }}>
                  <a href="#who-we-teach" style={{ color: "var(--emerald, #0a6e4f)", textDecoration: "none" }}>→ 1. Who We Teach in {data.city}</a>
                  <a href="#class-times" style={{ color: "var(--emerald, #0a6e4f)", textDecoration: "none" }}>→ 2. Class Times ({data.timezone})</a>
                  <a href="#local-pricing" style={{ color: "var(--emerald, #0a6e4f)", textDecoration: "none" }}>→ 3. Local Pricing</a>
                  <a href="#meet-tutors" style={{ color: "var(--emerald, #0a6e4f)", textDecoration: "none" }}>→ 4. How Tutors Are Matched</a>
                  <a href="#how-it-works" style={{ color: "var(--emerald, #0a6e4f)", textDecoration: "none" }}>→ 5. How Online Classes Work</a>
                  <a href="#city-faqs" style={{ color: "var(--emerald, #0a6e4f)", textDecoration: "none" }}>→ 6. Frequently Asked Questions</a>
                  <a href="#cta-city-bottom" style={{ color: "var(--emerald, #0a6e4f)", textDecoration: "none" }}>→ 7. Book Free Trial in {data.city}</a>
                </div>
              </div>

              {/* Trust Card */}
              <div style={{ background: "rgba(10,110,79,.04)", borderRadius: 16, padding: "18px", border: "1px solid rgba(10,110,79,.15)" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
                  <Shield size={18} style={{ color: "var(--emerald, #0a6e4f)" }} />
                  <span style={{ fontWeight: 700, fontSize: ".88rem", color: "var(--emerald, #0a6e4f)" }}>Parent Assurance</span>
                </div>
                <p style={{ fontSize: ".82rem", color: "var(--slate, #334155)", margin: 0, lineHeight: 1.6 }}>
                  Free tutor rematch on request. Read our{" "}
                  <Link href="/safeguarding" style={{ color: "var(--emerald, #0a6e4f)", fontWeight: 600 }}>
                    safeguarding guidance for parents
                  </Link>
                  . No credit card required to start your free trial.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
