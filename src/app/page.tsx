import type { Metadata } from "next";
import React from "react";
import Link from "next/link";
import CTAForm from "@/components/CTAForm";
import InteractiveNooraniQaidaSection from "@/components/home/InteractiveNooraniQaidaSection";
import ParentPortalSection from "@/components/home/ParentPortalSection";
import { trustpilotReviews } from "@/data/trustpilotReviews";
import {
  CANCELLATION_NOTICE_DAYS,
  FAMILY_DISCOUNTS,
  PRICING_PLANS,
  SERVICE_FACTS,
  TRIAL,
  TRUSTPILOT,
} from "@/lib/academyFacts";
import { PRIORITY_MARKETS } from "@/lib/geoSeo";
import {
  Sprout, Baby, Smile, Star, Users, PlayCircle, MapPin,
  Layers, Award, Globe, CheckCircle, Clock, Shield, Video, Lock, ChevronDown,
  GraduationCap, Heart, UserCheck, ClipboardList, Landmark,
  BookOpen, Music, Brain, PenLine
} from "lucide-react";

export const revalidate = false;

export const metadata: Metadata = {
  title: {
    absolute: "Learn Quran Online for Kids & Families — Free 30-Min Trial (2026)",
  },
  description:
    "Live 1-on-1 online Quran classes for kids and adults — Tajweed, Hifz, Noorani Qaida and Arabic. Parent Portal for homework, daily progress and attendance. Free 30-minute trial.",
  // No trailing slash — consistent with trailingSlash:false in next.config.ts
  alternates: { canonical: "https://www.noorpath.online" },
  openGraph: {
    title: "Learn Quran Online | NoorPath Academy — Free Trial for Kids & Families",
    description: "Online Quran classes for kids and adults — Qaida, Tajweed, Hifz and Arabic. Family plans and a free 30-minute trial with no credit card.",
    url: "https://www.noorpath.online",
    type: "website",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "NoorPath Academy — Online Quran Learning" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Learn Quran Online | NoorPath Academy — Free Trial",
    description: "Online Quran classes for kids & adults. Tajweed, Hifz, Qaida, Arabic. Family plans.",
    images: ["/og-image.png"],
  },
};

const courseCards = [
  { icon: <BookOpen size={22} />, title: "Noorani Qaida", desc: "Arabic letters, vowel signs and reading foundations", level: "Beginner", href: "/courses/noorani-qaida-online" },
  { icon: <Music size={22} />, title: "Tajweed Rules", desc: "Guided recitation and practical rule application", level: "Beginner–Advanced", href: "/learn-tajweed-online" },
  { icon: <Brain size={22} />, title: "Hifz Program", desc: "Structured memorization and revision goals", level: "Intermediate–Advanced", href: "/hifz-quran-online" },
  { icon: <Baby size={22} />, title: "Kids All-in-One", desc: "Qaida, selected daily duas and short Hadith topics", level: "Ages 4–12", href: "/online-quran-classes-for-kids" },
  { icon: <PenLine size={22} />, title: "Arabic Language", desc: "Quranic and Modern Standard Arabic study", level: "All levels", href: "/courses/arabic-language-online" },
  { icon: <Landmark size={22} />, title: "Islamic Studies", desc: "Fiqh, Seerah, Aqeedah, morals & Islamic character", level: "All ages", href: "/courses/islamic-studies-online" },
];

const priorityCountries = PRIORITY_MARKETS.map(({ flag, country, slug }) => ({
  flag,
  country,
  href: `/locations/${slug}`,
}));

const whyPoints = [
  { icon: <CheckCircle size={22} />, title: "Live One-to-One Lessons", desc: "Each online lesson is held live with one learner and one tutor." },
  { icon: <Users size={22} />, title: "Family Plans", desc: `${FAMILY_DISCOUNTS[0].discountPercent}% off for ${FAMILY_DISCOUNTS[0].siblings}, with larger listed discounts for additional siblings.` },
  { icon: <Clock size={22} />, title: "Flexible Scheduling", desc: "Tutor matching considers the learner's timezone and current tutor availability." },
  { icon: <Shield size={22} />, title: "Female Tutor Requests", desc: "Families may request a female tutor; matching is confirmed based on needs, schedule, and availability." },
];

const faqs = [
  { q: "How do online Quran classes work?", a: "Classes are held live via Zoom or Google Meet — 1-on-1 with an assigned tutor. A schedule is confirmed based on your timezone and current tutor availability, with no pre-recorded lessons." },
  { q: "What age groups do you accept?", a: "NoorPath accepts trial requests for children from age 4, teenagers and adults. Tutor matching considers the learner's age, current level and lesson goals." },
  { q: "Do you offer a free trial class?", a: `Yes. New learners can request a free ${TRIAL.durationMinutes}-minute trial class with no credit card required. Tutor availability is confirmed after the request.` },
  { q: "Are there family discount plans?", a: `Yes. Published sibling discounts are ${FAMILY_DISCOUNTS.map((item) => `${item.siblings}: ${item.discountPercent}% off`).join("; ")}. Contact us to confirm the applicable plan.` },
  { q: "How are tutors matched?", a: "Tutor matching is based on the learner's needs, schedule, timezone, preferences, and current tutor availability." },
  { q: "Do parents get a portal to track progress?", a: "Yes. Enrolled families receive secure Parent Portal access (admin.noorpath.online) to check homework, daily progress, quizzes, attendance, reports, and announcements for all children — on phone or computer." },
];

const homepagePlans = PRICING_PLANS.map((plan) => ({
  ...plan,
  highlight: plan.name === "Standard",
  features: [
    `${plan.sessionsPerWeek} live one-to-one ${plan.sessionsPerWeek === 1 ? "class" : "classes"} per week`,
    `${plan.sessionMinutes}-minute sessions`,
    "Tutor matched by learner needs and availability",
    "Course materials used during lessons",
    "Schedule confirmed before enrolment",
  ],
}));

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "FAQPage",
      mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
    {
      "@type": "ItemList",
      name: "NoorPath Academy Online Courses",
      itemListElement: [
        { "@type": "ListItem", position: 1, url: "https://www.noorpath.online/courses/noorani-qaida-online", name: "Noorani Qaida Online" },
        { "@type": "ListItem", position: 2, url: "https://www.noorpath.online/learn-tajweed-online", name: "Learn Tajweed Online" },
        { "@type": "ListItem", position: 3, url: "https://www.noorpath.online/hifz-quran-online", name: "Hifz Quran Online" },
        { "@type": "ListItem", position: 4, url: "https://www.noorpath.online/online-quran-classes-for-kids", name: "Online Quran Classes for Kids" },
        { "@type": "ListItem", position: 5, url: "https://www.noorpath.online/courses/arabic-language-online", name: "Arabic Language Online" },
        { "@type": "ListItem", position: 6, url: "https://www.noorpath.online/courses/islamic-studies-online", name: "Islamic Studies Online" },
      ],
    },
  ],
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ══════════════════════════════
          HERO
      ══════════════════════════════ */}
      <section
        className="hero"
        id="home"
        style={{
          minHeight: "100vh",
          background: "linear-gradient(135deg, #041f14 0%, #0a3d28 40%, #0a6e4f 100%)",
          position: "relative",
          display: "flex",
          alignItems: "center",
          paddingTop: 140,   /* 40px promo bar + 62px navbar + some breathing room */
          paddingBottom: 60,
          overflow: "hidden",
        }}
      >
        {/* Background glow orbs */}
        <div style={{ position:"absolute", top:"8%", left:"10%", width:420, height:420, borderRadius:"50%", background:"#0f8f66", opacity:.2, filter:"blur(80px)", pointerEvents:"none" }} />
        <div style={{ position:"absolute", top:"60%", right:"5%", width:300, height:300, borderRadius:"50%", background:"#c9922a", opacity:.15, filter:"blur(70px)", pointerEvents:"none" }} />
        <div style={{ position:"absolute", top:"30%", left:"55%", width:260, height:260, borderRadius:"50%", background:"#14b882", opacity:.12, filter:"blur(70px)", pointerEvents:"none" }} />

        <div className="max-w-[1200px] mx-auto px-4 w-full relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left */}
            <div>
              <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(255,255,255,.08)", border: "1px solid rgba(255,255,255,.15)", borderRadius: 50, padding: "8px 18px", marginBottom: 20 }}>
                <span style={{ width: 8, height: 8, background: "var(--gold)", borderRadius: "50%", display: "inline-block" }} />
                <span style={{ color: "rgba(255,255,255,.85)", fontSize: ".82rem", fontFamily: "'Amiri',serif" }}>
                  اقْرَأْ بِاسْمِ رَبِّكَ — &quot;Read in the name of your Lord&quot;
                </span>
              </div>

              <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginBottom: 28 }}>
                {[
                  [<Sprout size={13} key="s" />, "Beginner to Advanced"],
                  [<Baby size={13} key="b" />, "All Ages Welcome"],
                  [<Smile size={13} key="h" />, "Daily Duas for Kids"],
                  [<Star size={13} key="st" />, "All-in-One Kids"],
                  [<Users size={13} key="u" />, "Family Plans"],
                ].map(([icon, label]) => (
                  <span key={String(label)} style={{ display: "inline-flex", alignItems: "center", gap: 6, background: "rgba(255,255,255,.1)", border: "1px solid rgba(255,255,255,.15)", borderRadius: 50, padding: "6px 14px", color: "#fff", fontSize: ".79rem", fontWeight: 500 }}>
                    {icon} {label}
                  </span>
                ))}
              </div>

              <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: 10, marginBottom: 22 }}>
                <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(255,255,255,.08)", border: "1px solid rgba(255,255,255,.15)", borderRadius: 50, padding: "7px 18px", fontSize: ".79rem", color: "rgba(255,255,255,.85)", fontWeight: 600 }}>
                  <PlayCircle size={14} />
                  {TRIAL.durationMinutes}-minute free trial
                </div>
                <div style={{ display: "inline-flex", alignItems: "center", gap: 6, background: "rgba(74,222,128,.1)", border: "1px solid rgba(74,222,128,.25)", borderRadius: 50, padding: "7px 14px", fontSize: ".79rem", color: "#86efac", fontWeight: 500 }}>
                  ✓ No credit card
                </div>
              </div>

              <h1 style={{ color: "#fff", fontSize: "clamp(2.2rem, 5vw, 3.5rem)", fontWeight: 700, lineHeight: 1.12, marginBottom: 18 }}>
                Learn Quran Online<br />
                From <em style={{ color: "var(--gold-lt)" }}>Noorani Qaida</em> to Hifz<br />
                — For Every Age
              </h1>
              <p style={{ color: "rgba(255,255,255,.82)", fontSize: "1rem", lineHeight: 1.78, marginBottom: 24, maxWidth: 520 }}>
                Live one-to-one online Quran classes for kids, adults &amp; sisters. Start with a <strong style={{ color: "var(--gold-lt)" }}>free {TRIAL.durationMinutes}-minute trial</strong> — no credit card required.
              </p>

              <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginBottom: 24 }}>
                {[["🎥","Live 1-to-1 Lessons"],["👩‍🏫","Female Tutors by Request"],["⏰","Timezone-Based Matching"]].map(([icon, label]) => (
                  <span key={label} style={{ display: "inline-flex", alignItems: "center", gap: 6, background: "rgba(255,255,255,.07)", border: "1px solid rgba(255,255,255,.14)", borderRadius: 50, padding: "5px 13px", color: "rgba(255,255,255,.9)", fontSize: ".78rem" }}
                    dangerouslySetInnerHTML={{ __html: `${icon} ${label}` }}
                  />
                ))}
              </div>

              <div style={{ display: "flex", gap: 14, flexWrap: "wrap", marginBottom: 28 }}>
                <Link href="#cta" style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "linear-gradient(135deg,#c9922a,#d4a030)", color: "#1a1a2e", fontWeight: 700, padding: "16px 34px", borderRadius: 50, textDecoration: "none", fontSize: ".96rem", boxShadow: "0 8px 28px rgba(201,146,42,.45)", letterSpacing: ".2px" }}>
                  <PlayCircle size={18} /> Book Free Trial Now
                </Link>
                <Link href="/courses" style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(255,255,255,.08)", color: "#fff", fontWeight: 600, padding: "16px 28px", borderRadius: 50, textDecoration: "none", border: "1.5px solid rgba(255,255,255,.25)", fontSize: ".93rem", backdropFilter: "blur(8px)" }}>
                  <MapPin size={16} /> View Courses
                </Link>
              </div>

              {/* Stats */}
              <div className="hero-stats-bar" style={{ display: "flex", flexWrap: "wrap", background: "rgba(255,255,255,.05)", border: "1px solid rgba(255,255,255,.1)", borderRadius: 16, padding: "16px 0", marginTop: 8 }}>
                {SERVICE_FACTS.map(({ value, label }, i, arr) => (
                  <div key={label} style={{ display: "flex", alignItems: "center", flex: "1 1 100px" }}>
                    <div style={{ textAlign: "center", padding: "6px 12px", width: "100%" }}>
                      <div style={{ color: "var(--gold-lt)", fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "clamp(1.1rem,3.5vw,1.45rem)", fontWeight: 700, lineHeight: 1 }}>{value}</div>
                      <div style={{ color: "rgba(255,255,255,.55)", fontSize: ".68rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: ".8px", marginTop: 4 }}>{label}</div>
                    </div>
                    {i < arr.length - 1 && <div style={{ width: 1, height: 36, background: "rgba(255,255,255,.12)", flexShrink: 0 }} />}
                  </div>
                ))}
              </div>
            </div>

            {/* Right — hero card */}
            <div style={{ position: "relative" }}>
              <div style={{ background: "rgba(255,255,255,.06)", backdropFilter: "blur(20px)", border: "1px solid rgba(255,255,255,.12)", borderRadius: 24, padding: 28 }}>
                <div style={{ display: "inline-flex", alignItems: "center", gap: 6, background: "rgba(37,211,102,.15)", border: "1px solid rgba(37,211,102,.3)", borderRadius: 50, padding: "5px 14px", fontSize: ".75rem", color: "#4ade80", fontWeight: 600, marginBottom: 16 }}>
                  <span style={{ width: 7, height: 7, background: "#4ade80", borderRadius: "50%", animation: "pulse 2s infinite" }} />
                  LIVE ONLINE LEARNING
                </div>
                <div style={{ background: "rgba(255,255,255,.08)", border: "1px solid rgba(255,255,255,.12)", borderRadius: 12, padding: 16, textAlign: "center", marginBottom: 18 }}>
                  <div className="arabic" style={{ fontSize: "1.6rem", color: "#fff", letterSpacing: ".5px" }}>
                    وَإِذَا سَأَلَكَ عِبَادِي عَنِّي فَإِنِّي قَرِيبٌ
                  </div>
                  <div style={{ color: "rgba(255,255,255,.65)", fontSize: ".73rem", marginTop: 8, fontStyle: "italic" }}>
                    &quot;And when My servants ask about Me — Indeed I am near&quot; · Al-Baqarah 2:186
                  </div>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                  {([
                    [<UserCheck size={20} key="uc" />, "1-to-1", "Live Lessons"],
                    [<Star size={20} key="st" />, `${TRIAL.durationMinutes} min`, "Free Trial"],
                    [<ClipboardList size={20} key="cl" />, "No card", "For the Trial"],
                    [<Award size={20} key="aw" />, "Flexible", "Timezone Matching"],
                  ] as [React.ReactNode, string, string][]).map(([icon, num, label]) => (
                    <div key={label} style={{ background: "rgba(255,255,255,.06)", borderRadius: 12, padding: 14, textAlign: "center" }}>
                      <div style={{ color: "var(--gold-lt)", display: "flex", justifyContent: "center", marginBottom: 6 }}>{icon}</div>
                      <div style={{ color: "#fff", fontWeight: 700, fontSize: ".95rem" }}>{num}</div>
                      <div style={{ color: "rgba(255,255,255,.55)", fontSize: ".72rem" }}>{label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div style={{ position: "absolute", bottom: 28, left: "50%", transform: "translateX(-50%)", color: "rgba(255,255,255,.5)", textAlign: "center", fontSize: ".78rem" }}>
          <div>Scroll to explore</div>
          <ChevronDown size={20} style={{ margin: "4px auto 0" }} />
        </div>
      </section>

      {/* ── TRUST BAR ── */}
      <div className="trust-bar">
        <div className="max-w-[1200px] mx-auto px-4">
          <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: 16 }}>
            <span className="trust-label">Location-specific class information:</span>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
              {priorityCountries.map(({ flag, country, href }) => (
                <Link key={href} href={href} className="trust-logo-item" style={{ textDecoration: "none" }}>
                  {flag} {country}
                </Link>
              ))}
              <Link href="/locations" className="trust-logo-item" style={{ textDecoration: "none", fontWeight: 700 }}>All locations →</Link>
            </div>
          </div>
        </div>
      </div>

      {/* ── FEATURES STRIP ── */}
      <div style={{ background: "var(--ivory)", borderBottom: "1px solid var(--border)", padding: "32px 0" }}>
        <div className="max-w-[1200px] mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              [<Layers size={22} key="l" />, SERVICE_FACTS[0].value, SERVICE_FACTS[0].label],
              [<Users size={22} key="u" />, SERVICE_FACTS[1].value, SERVICE_FACTS[1].label],
              [<Award size={22} key="a" />, SERVICE_FACTS[2].value, SERVICE_FACTS[2].label],
              [<Globe size={22} key="g" />, SERVICE_FACTS[3].value, SERVICE_FACTS[3].label],
            ].map(([icon, title, sub]) => (
              <div key={String(title)} style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", gap: 8 }}>
                <div style={{ color: "var(--emerald)", width: 48, height: 48, background: "rgba(10,110,79,.1)", borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "center" }}>{icon}</div>
                <div style={{ fontWeight: 700, color: "var(--charcoal)", fontSize: ".95rem" }}>{title}</div>
                <div style={{ color: "var(--muted)", fontSize: ".82rem" }}>{sub}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── COURSES ── */}
      <section id="courses" style={{ background: "#fff" }}>
        <div className="max-w-[1200px] mx-auto px-4">
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <span className="section-eyebrow" style={{ display: "inline-flex", alignItems: "center", gap: 6 }}><Layers size={13} /> Learning Paths</span>
            <h2 className="section-title">Complete <em className="accent">Quran & Islamic</em> Curriculum</h2>
            <p className="section-desc center">From the Arabic alphabet to advanced study — live tutoring and structured learning paths.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courseCards.map((c) => (
              <div key={c.title} className="course-card" style={{ gap: 12 }}>
                <div style={{ color: "var(--emerald)", width: 44, height: 44, background: "rgba(10,110,79,.1)", borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "center" }}>{c.icon}</div>
                <div>
                  <h3 style={{ fontFamily: "'Playfair Display',serif", fontSize: "1.15rem", fontWeight: 700, color: "var(--charcoal)", marginBottom: 6 }}>{c.title}</h3>
                  <p style={{ color: "var(--muted)", fontSize: ".88rem", lineHeight: 1.65, margin: 0 }}>{c.desc}</p>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "auto", paddingTop: 12, borderTop: "1px solid var(--border)" }}>
                  <span style={{ fontSize: ".73rem", color: "var(--emerald)", fontWeight: 700, textTransform: "uppercase", letterSpacing: ".6px", background: "rgba(10,110,79,.08)", padding: "3px 10px", borderRadius: 50 }}>{c.level}</span>
                  <Link href={c.href} style={{ background: "var(--emerald)", color: "#fff", padding: "8px 18px", borderRadius: 10, fontSize: ".83rem", fontWeight: 600, textDecoration: "none" }}>
                    Enroll →
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: 36 }}>
            <Link href="/courses" className="btn-outline-np">View All Courses & Pricing →</Link>
          </div>
        </div>
      </section>

      {/* ── INTERACTIVE NOORANI QAIDA (SEO hub section) ── */}
      <InteractiveNooraniQaidaSection />

      {/* ── PARENT PORTAL ── */}
      <ParentPortalSection />

      {/* ── WHY NOORPATH ── */}
      <section id="why" style={{ background: "var(--ivory)" }}>
        <div className="max-w-[1200px] mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="section-eyebrow" style={{ display: "inline-flex", alignItems: "center", gap: 6 }}><CheckCircle size={13} /> Why Choose Us</span>
              <h2 className="section-title">Why Families Choose <em className="accent">NoorPath</em></h2>
              <p className="section-desc">We combine live one-to-one teaching, structured learning paths, flexible tutor matching, and family plan options.</p>
              <Link href="/online-quran-classes#cta" className="btn-primary-np">Start Free Trial →</Link>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              {whyPoints.map((w, i) => (
                <div key={w.title} className="why-card">
                  <div style={{ color: "#fff", width: 46, height: 46, flexShrink: 0, borderRadius: 12, background: i % 2 === 0 ? "var(--emerald)" : "linear-gradient(135deg,var(--emerald-mid),var(--emerald))", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 4px 12px rgba(10,110,79,.25)" }}>{w.icon}</div>
                  <div>
                    <div style={{ fontWeight: 700, color: "var(--charcoal)", marginBottom: 4, fontSize: ".97rem" }}>{w.title}</div>
                    <div style={{ color: "var(--muted)", fontSize: ".86rem", lineHeight: 1.65 }}>{w.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS (real Trustpilot reviews) ── */}
      <section id="testimonials" style={{ background: "#fff" }}>
        <div className="max-w-[1200px] mx-auto px-4">
          <div style={{ textAlign: "center", marginBottom: 40 }}>
            <span className="section-eyebrow" style={{ display: "inline-flex", alignItems: "center", gap: 6 }}><Star size={13} /> Parent Reviews</span>
            <h2 className="section-title">What Families Say About <em className="accent">NoorPath</em></h2>
            {/* Trustpilot score badge */}
            <a
              href={TRUSTPILOT.url}
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: "inline-flex", alignItems: "center", gap: 10, marginTop: 16, background: "#f7f9f8", border: "1px solid var(--border)", borderRadius: 12, padding: "10px 20px", textDecoration: "none" }}
            >
              <span style={{ color: "#00b67a", fontSize: "1.05rem", letterSpacing: 2 }}>★★★★</span>
              <span style={{ color: "var(--charcoal)", fontWeight: 800, fontSize: ".95rem" }}>{TRUSTPILOT.score} TrustScore</span>
              <span style={{ color: "var(--muted)", fontSize: ".82rem" }}>· {TRUSTPILOT.reviewCount} reviews · last checked {TRUSTPILOT.lastChecked}</span>
              <span style={{ color: "#00b67a", fontWeight: 800, fontSize: ".9rem" }}>★ Trustpilot</span>
            </a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {trustpilotReviews.map((t) => (
              <div key={t.name} className="testimonial-card">
                <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 4, background: "#00b67a" }} />
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
                  <span style={{ color: "#00b67a", fontSize: "1.15rem", letterSpacing: 2 }}>{"★".repeat(t.stars)}</span>
                  <span style={{ fontSize: ".76rem", color: "var(--muted)" }}>{t.date}</span>
                </div>
                <div style={{ fontWeight: 700, color: "var(--charcoal)", fontSize: ".95rem", marginBottom: 8 }}>{t.title}</div>
                <p style={{ color: "var(--slate)", fontSize: ".91rem", lineHeight: 1.78, marginBottom: 20, fontStyle: "italic" }}>&quot;{t.text}&quot;</p>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 8, paddingTop: 14, borderTop: "1px solid rgba(10,110,79,.08)" }}>
                  <strong style={{ color: "var(--charcoal)", fontSize: ".92rem" }}>{t.name} <span style={{ fontWeight: 500, color: "var(--muted)", fontSize: ".82rem" }}>· {t.country}</span></strong>
                  <span style={{ fontSize: ".78rem", color: "#00b67a", fontWeight: 700 }}>★ Published on Trustpilot · last checked {TRUSTPILOT.lastChecked}</span>
                </div>
              </div>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: 32 }}>
            <a
              href={TRUSTPILOT.url}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline-np"
              style={{ display: "inline-flex", alignItems: "center", gap: 8 }}
            >
              Read all reviews on Trustpilot →
            </a>
          </div>
        </div>
      </section>

      {/* ── SERVICE FACTS TICKER ── */}
      <div className="social-proof-bar">
        <div className="max-w-[1200px] mx-auto px-4 overflow-hidden">
          <div style={{ display: "flex", gap: 56, alignItems: "center", animation: "ticker 30s linear infinite", whiteSpace: "nowrap" }}>
            {[
              "✓ Live one-to-one online lessons",
              `✓ Free ${TRIAL.durationMinutes}-minute trial`,
              "✓ No credit card required for the trial",
              "✓ Tutor matching by learner timezone",
              `★ Published on Trustpilot · last checked ${TRUSTPILOT.lastChecked}`,
              "✓ Live one-to-one online lessons",
              `✓ Free ${TRIAL.durationMinutes}-minute trial`,
              "✓ No credit card required for the trial",
              "✓ Tutor matching by learner timezone",
              `★ Published on Trustpilot · last checked ${TRUSTPILOT.lastChecked}`,
            ].map((item, i) => (
              <span key={i} style={{ color: "rgba(255,255,255,.85)", fontSize: ".82rem", fontWeight: 500, flexShrink: 0 }}>{item}</span>
            ))}
          </div>
        </div>
      </div>

      {/* ── PRICING PREVIEW ── */}
      <section id="pricing" style={{ background: "var(--cream)" }}>
        <div className="max-w-[1200px] mx-auto px-4">
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <span className="section-eyebrow" style={{ display: "inline-flex", alignItems: "center", gap: 6 }}><Award size={13} /> Pricing</span>
            <h2 className="section-title">Simple, <em className="accent">Transparent</em> Pricing</h2>
            <p className="section-desc center">Published monthly plans, sibling discounts, and cancellation terms.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {homepagePlans.map((p) => (
              <div key={p.name} className={p.highlight ? "pricing-card-highlight" : "pricing-card"}>
                {p.highlight && (
                  <div style={{ display: "inline-block", background: p.highlight ? "var(--gold)" : "rgba(10,110,79,.1)", color: p.highlight ? "var(--charcoal)" : "var(--emerald)", fontSize: ".72rem", fontWeight: 700, padding: "5px 14px", borderRadius: 50, textTransform: "uppercase", letterSpacing: ".5px", marginBottom: 14 }}>
                    Standard Plan
                  </div>
                )}
                <div style={{ fontFamily: "'Playfair Display',serif", fontSize: "1.3rem", fontWeight: 700, color: p.highlight ? "#fff" : "var(--charcoal)", marginBottom: 10 }}>{p.name}</div>
                <div style={{ display: "flex", justifyContent: "center", alignItems: "baseline", gap: 2, marginBottom: 8 }}>
                  <span style={{ fontSize: "2.6rem", fontWeight: 800, color: p.highlight ? "#fff" : "var(--emerald)", lineHeight: 1 }}>${p.monthlyPriceUsd}</span>
                  <span style={{ color: p.highlight ? "rgba(255,255,255,.55)" : "var(--muted)", fontSize: ".85rem" }}>/month</span>
                </div>
                <p style={{ color: p.highlight ? "rgba(255,255,255,.7)" : "var(--muted)", fontSize: ".83rem", marginBottom: 18, lineHeight: 1.5 }}>{p.description}</p>
                <ul style={{ listStyle: "none", padding: 0, margin: "0 0 24px 0", textAlign: "left", display: "flex", flexDirection: "column", gap: 10 }}>
                  {p.features.map((f) => (
                    <li key={f} style={{ display: "flex", alignItems: "center", gap: 10, fontSize: ".85rem", color: p.highlight ? "rgba(255,255,255,.85)" : "var(--slate)" }}>
                      <span style={{ width: 18, height: 18, background: p.highlight ? "rgba(74,222,128,.2)" : "rgba(10,110,79,.12)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, fontSize: ".7rem", color: p.highlight ? "#4ade80" : "var(--emerald)", fontWeight: 700 }}>✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <Link href="/online-quran-classes#cta" style={{ display: "block", background: p.highlight ? "var(--gold)" : "var(--emerald)", color: p.highlight ? "var(--charcoal)" : "#fff", padding: "13px 0", borderRadius: 12, fontWeight: 700, textDecoration: "none", fontSize: ".92rem", textAlign: "center", letterSpacing: ".2px" }}>
                  Start Free Trial →
                </Link>
                <div style={{ color: p.highlight ? "rgba(255,255,255,.4)" : "var(--muted)", fontSize: ".73rem", marginTop: 10 }}>{TRIAL.durationMinutes}-minute free trial · No credit card</div>
              </div>
            ))}
          </div>
          <p style={{ textAlign: "center", color: "var(--muted)", fontSize: ".85rem" }}>
            Trial available before enrolment · Cancel with {CANCELLATION_NOTICE_DAYS} days&apos; notice before the next billing date · <Link href="/pricing" style={{ color: "var(--emerald)", fontWeight: 600 }}>View full pricing details →</Link>
          </p>
        </div>
      </section>

      {/* ── TRIAL + POLICY STRIP ── */}
      <section style={{ background: "var(--charcoal)", padding: "48px 0" }}>
        <div className="max-w-[1200px] mx-auto px-4">
          <div className="guarantee-strip">
            <div style={{ flexShrink: 0, color: "var(--gold-lt)", width: 56, height: 56, background: "rgba(201,146,42,.15)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center" }}><Shield size={28} /></div>
            <div style={{ flex: 1 }}>
              <div style={{ color: "var(--gold-lt)", fontFamily: "'Playfair Display',serif", fontSize: "1.4rem", fontWeight: 700, marginBottom: 6 }}>Try a Class Before Enrolment</div>
              <p style={{ color: "rgba(255,255,255,.8)", fontSize: ".92rem", lineHeight: 1.7, margin: 0 }}>
                Request a free {TRIAL.durationMinutes}-minute trial with no credit card required. Tutor availability is confirmed after your request. Paid plans can be cancelled with <strong style={{ color: "#fff" }}>{CANCELLATION_NOTICE_DAYS} days&apos; notice before the next billing date.</strong>
              </p>
            </div>
            <div style={{ flexShrink: 0 }}>
              <Link href="/online-quran-classes#cta" style={{ display: "inline-block", background: "var(--gold)", color: "var(--charcoal)", fontWeight: 700, padding: "14px 28px", borderRadius: 50, textDecoration: "none", fontSize: ".9rem", whiteSpace: "nowrap" }}>
                <GraduationCap size={16} style={{ display: "inline", verticalAlign: "middle", marginRight: 6 }} />Book Free Trial →
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10">
            {([
              [<Video size={24} key="t" />, "Live 1-to-1", "Online lessons"],
              [<Lock size={24} key="l" />, "No Credit Card", "Required for the trial"],
              [<Clock size={24} key="c" />, "Tutor Matching", "Based on timezone"],
              [<Heart size={24} key="h" />, `${CANCELLATION_NOTICE_DAYS} Days' Notice`, "Before next billing"],
            ] as [React.ReactNode, string, string][]).map(([icon, title, sub]) => (
              <div key={title} style={{ textAlign: "center", padding: "20px 16px", background: "rgba(255,255,255,.04)", border: "1px solid rgba(255,255,255,.08)", borderRadius: 16 }}>
                <div style={{ color: "var(--gold-lt)", display: "flex", justifyContent: "center", marginBottom: 10 }}>{icon}</div>
                <div style={{ color: "#fff", fontWeight: 700, fontSize: ".9rem", marginBottom: 4 }}>{title}</div>
                <div style={{ color: "rgba(255,255,255,.5)", fontSize: ".78rem" }}>{sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section id="faq" style={{ background: "#fff" }}>
        <div className="max-w-[1200px] mx-auto px-4">
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <span className="section-eyebrow" style={{ display: "inline-flex", alignItems: "center", gap: 6 }}><CheckCircle size={13} /> FAQ</span>
            <h2 className="section-title">Frequently Asked <em className="accent">Questions</em></h2>
            <p className="section-desc center">Everything you need to know before booking your first class.</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-[1000px] mx-auto">
            {[
              { q: "How do online Quran classes work?", a: "Classes are held live via Zoom or Google Meet — 1-on-1 with your assigned tutor. The schedule is confirmed based on your timezone and tutor availability, with no pre-recorded lessons." },
              { q: "What age groups do you accept?", a: "We accept learners from age 4 to seniors. We have specialist tutors for toddlers (Duas & basics), school-age children (Noorani Qaida + Quran), teenagers (Tajweed + Hifz), adults, and elderly learners — each with age-appropriate methods." },
              { q: "Do you offer a free trial class?", a: `Yes. New learners can request a free ${TRIAL.durationMinutes}-minute trial class with no credit card required. Tutor availability is confirmed after the request.` },
              { q: "Are there family discount plans?", a: `Yes. Published sibling discounts are ${FAMILY_DISCOUNTS.map((item) => `${item.siblings}: ${item.discountPercent}% off`).join("; ")}. Contact us to confirm the applicable plan.` },
              { q: "How are tutors matched?", a: "Tutor matching considers the learner's needs, schedule, timezone, preferences, and current tutor availability." },
              { q: "Can I request a female Quran teacher?", a: "Yes. Indicate your preference on the booking form. NoorPath confirms a suitable female tutor based on the learner's needs, schedule, and current availability." },
              { q: "What equipment do I need?", a: "Just a smartphone, tablet, or laptop with Zoom or Skype installed. No special equipment needed. The teacher shares the Quran/Qaida on screen during the class. A stable internet connection is all that's required." },
              { q: "How long does it take to complete Noorani Qaida?", a: "Completion time is individual and depends on the learner's starting level, lesson frequency, practice, and pace. The tutor can suggest an illustrative learning path after assessing the learner." },
            ].map((f) => (
              <div key={f.q} className="faq-card">
                <div style={{ display: "flex", alignItems: "flex-start", gap: 14 }}>
                  <div style={{ flexShrink: 0, width: 32, height: 32, background: "rgba(10,110,79,.1)", borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center", color: "var(--emerald)", fontWeight: 800, fontSize: ".85rem" }}>?</div>
                  <div>
                    <h3 style={{ fontFamily: "'Playfair Display',serif", fontSize: ".97rem", fontWeight: 700, color: "var(--charcoal)", marginBottom: 8, lineHeight: 1.35 }}>{f.q}</h3>
                    <p style={{ color: "var(--muted)", lineHeight: 1.75, fontSize: ".88rem", margin: 0 }}>{f.a}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: 36 }}>
            <Link href="/online-quran-classes#cta" className="btn-primary-np">Still have questions? Book a free call →</Link>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="cta-section" id="cta">
        <div className="max-w-[1200px] mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: 12, marginBottom: 20 }}>
                <span className="section-eyebrow" style={{ background: "rgba(255,255,255,.1)", color: "rgba(255,255,255,.9)", borderColor: "rgba(255,255,255,.2)", margin: 0 }}>
                  <GraduationCap size={13} style={{ display: "inline", verticalAlign: "middle", marginRight: 5 }} />Free Trial Class
                </span>
                <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(255,255,255,.08)", border: "1px solid rgba(255,255,255,.15)", borderRadius: 50, padding: "5px 14px", fontSize: ".78rem", color: "rgba(255,255,255,.8)", fontWeight: 600 }}>
                  Tutor availability confirmed after request
                </div>
              </div>
              <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: "clamp(2rem,4vw,2.8rem)", fontWeight: 700, color: "#fff", marginBottom: 20 }}>
                Start Your Quran Journey<br />
                <em style={{ color: "var(--gold-lt)" }}>With a Free Trial</em>
              </h2>
              <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                {[
                  [<CheckCircle size={18} key="1" />,"Free 30-minute trial class — no credit card needed"],
                  [<Video size={18} key="2" />,"Live 1-on-1 online lesson"],
                  [<Lock size={18} key="3" />,`No card for trial · ${CANCELLATION_NOTICE_DAYS} days' cancellation notice for paid plans`],
                  [<Award size={18} key="4" />,"Tutor matching based on learner needs and availability"],
                ].map(([icon, text]) => (
                  <div key={String(text)} style={{ display: "flex", alignItems: "center", gap: 12, color: "rgba(255,255,255,.85)", fontSize: ".92rem" }}>
                    <span style={{ color: "var(--gold-lt)", flexShrink: 0 }}>{icon}</span> {text}
                  </div>
                ))}
              </div>
              <div style={{ marginTop: 24, display: "flex", gap: 16, flexWrap: "wrap" }}>
                <div style={{ textAlign: "center", background: "rgba(255,255,255,.06)", border: "1px solid rgba(255,255,255,.12)", borderRadius: 12, padding: "12px 20px" }}>
                  <div style={{ color: "var(--gold-lt)", fontWeight: 800, fontSize: "1.4rem", lineHeight: 1 }}>{TRUSTPILOT.score}/5</div>
                  <div style={{ color: "rgba(255,255,255,.6)", fontSize: ".72rem", marginTop: 4 }}>Trustpilot · {TRUSTPILOT.reviewCount} reviews</div>
                </div>
                <div style={{ textAlign: "center", background: "rgba(255,255,255,.06)", border: "1px solid rgba(255,255,255,.12)", borderRadius: 12, padding: "12px 20px" }}>
                  <div style={{ color: "var(--gold-lt)", fontWeight: 800, fontSize: "1.4rem", lineHeight: 1 }}>{TRIAL.durationMinutes} min</div>
                  <div style={{ color: "rgba(255,255,255,.6)", fontSize: ".72rem", marginTop: 4 }}>Free Trial Class</div>
                </div>
                <div style={{ textAlign: "center", background: "rgba(255,255,255,.06)", border: "1px solid rgba(255,255,255,.12)", borderRadius: 12, padding: "12px 20px" }}>
                  <div style={{ color: "var(--gold-lt)", fontWeight: 800, fontSize: "1.4rem", lineHeight: 1 }}>No card</div>
                  <div style={{ color: "rgba(255,255,255,.6)", fontSize: ".72rem", marginTop: 4 }}>Required for Trial</div>
                </div>
              </div>
            </div>
            <div className="cta-form-wrap">
              <h3 style={{ fontFamily: "'Playfair Display',serif", color: "#fff", fontSize: "1.25rem", marginBottom: 20, textAlign: "center" }}>
                Book Your Free Trial Class
              </h3>
              <CTAForm />
            </div>
          </div>
        </div>
      </section>

      {/* ── INTERNAL LINKS HUB ── */}
      <section style={{ background: "var(--ivory)", padding: "60px 0", borderTop: "1px solid var(--border)" }}>
        <div className="max-w-[1200px] mx-auto px-4">
          {/* Quick links grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div>
              <h3 style={{ fontFamily: "'Playfair Display',serif", fontSize: "1rem", color: "var(--charcoal)", marginBottom: 14, borderBottom: "2px solid var(--emerald)", paddingBottom: 8 }}>
                📚 Popular Courses
              </h3>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 8 }}>
                {[
                  ["/courses/noorani-qaida-online", "Noorani Qaida Online"],
                  ["/learn-tajweed-online", "Learn Tajweed Online"],
                  ["/hifz-quran-online", "Hifz Quran Online"],
                  ["/online-quran-classes-for-kids", "Online Quran Classes for Kids"],
                  ["/courses/arabic-language-online", "Arabic Language Online"],
                  ["/courses/islamic-studies-online", "Islamic Studies Online"],
                ].map(([href, label]) => (
                  <li key={String(label)}>
                    <Link href={String(href)} style={{ color: "var(--muted)", fontSize: ".85rem", textDecoration: "none", display: "flex", alignItems: "center", gap: 6 }}>
                      <span style={{ color: "var(--emerald)", fontWeight: 700 }}>→</span> {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 style={{ fontFamily: "'Playfair Display',serif", fontSize: "1rem", color: "var(--charcoal)", marginBottom: 14, borderBottom: "2px solid var(--emerald)", paddingBottom: 8 }}>
                <Globe size={14} style={{ display: "inline", verticalAlign: "middle", marginRight: 6 }} />Locations We Serve
              </h3>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 8 }}>
                {priorityCountries.map(({ flag, country, href }) => (
                  <li key={href}>
                    <Link href={href} style={{ color: "var(--muted)", fontSize: ".85rem", textDecoration: "none", display: "flex", alignItems: "center", gap: 6 }}>
                      <span style={{ color: "var(--emerald)", fontWeight: 700 }}>→</span> {flag} Online Quran Classes {country}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link href="/locations" style={{ color: "var(--emerald)", fontSize: ".85rem", textDecoration: "none", fontWeight: 700 }}>→ View all locations</Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 style={{ fontFamily: "'Playfair Display',serif", fontSize: "1rem", color: "var(--charcoal)", marginBottom: 14, borderBottom: "2px solid var(--emerald)", paddingBottom: 8 }}>
                <MapPin size={14} style={{ display: "inline", verticalAlign: "middle", marginRight: 6 }} />Popular Pages
              </h3>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 8 }}>
                {[
                  ["/learn-quran-online", "Learn Quran Online"],
                  ["/online-quran-classes-for-kids", "Online Quran Classes for Kids"],
                  ["/learn-tajweed-online", "Learn Tajweed Online"],
                  ["/hifz-quran-online", "Hifz Quran Online"],
                  ["/quran-teacher-online", "Online Quran Teacher"],
                  ["/free-quran-classes-online", "Free Quran Classes Online"],
                  ["/online-quran-for-beginners", "Online Quran for Beginners"],
                  ["/female-quran-teacher-online", "Female Quran Teacher Online"],
                  ["/online-quran-classes-for-adults", "Quran Classes for Adults"],
                  ["/online-quran-classes", "Online Quran Classes"],
                  ["/pricing", "Pricing & Plans"],
                  ["/blog", "Islamic Blog & Resources"],
                ].map(([href, label]) => (
                  <li key={String(label)}>
                    <Link href={String(href)} style={{ color: "var(--muted)", fontSize: ".85rem", textDecoration: "none", display: "flex", alignItems: "center", gap: 6 }}>
                      <span style={{ color: "var(--emerald)", fontWeight: 700 }}>→</span> {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* SEO paragraph */}
          <div style={{ borderTop: "1px solid var(--border)", paddingTop: 24 }}>
            <p style={{ color: "var(--muted)", fontSize: ".82rem", maxWidth: 960, margin: "0 auto", lineHeight: 1.85, textAlign: "center" }}>
              <strong style={{ color: "var(--charcoal)" }}>NoorPath Academy</strong> is an{" "}
              <Link href="/online-quran-classes" style={{ color: "var(--emerald)", fontWeight: 600 }}>online Quran academy</Link> where you can{" "}
              <Link href="/learn-quran-online" style={{ color: "var(--emerald)", fontWeight: 600 }}>learn Quran online</Link> via 1-on-1 live classes. Course options include{" "}
              <Link href="/courses/noorani-qaida-online" style={{ color: "var(--emerald)", fontWeight: 600 }}>Noorani Qaida for beginners</Link>,{" "}
              <Link href="/online-quran-classes-for-kids" style={{ color: "var(--emerald)", fontWeight: 600 }}>online Quran classes for kids</Link>,{" "}
              <Link href="/learn-tajweed-online" style={{ color: "var(--emerald)", fontWeight: 600 }}>Tajweed online</Link>,{" "}
              <Link href="/hifz-quran-online" style={{ color: "var(--emerald)", fontWeight: 600 }}>Hifz online</Link>,{" "}
              <Link href="/courses/arabic-language-online" style={{ color: "var(--emerald)", fontWeight: 600 }}>Arabic language courses</Link>, and{" "}
              <Link href="/courses/daily-duas-for-kids" style={{ color: "var(--emerald)", fontWeight: 600 }}>daily duas for children</Link>.
              We offer <Link href="/free-quran-classes-online" style={{ color: "var(--emerald)", fontWeight: 600 }}>free trial Quran classes</Link> with no credit card required.
              Find an <Link href="/quran-teacher-online" style={{ color: "var(--emerald)", fontWeight: 600 }}>online Quran teacher</Link> or browse our{" "}
              <Link href="/online-quran-for-beginners" style={{ color: "var(--emerald)", fontWeight: 600 }}>beginner Quran course</Link> to start today.
              Explore country-specific class information in our <Link href="/locations" style={{ color: "var(--emerald)", fontWeight: 600 }}>locations hub</Link>:{" "}
              {priorityCountries.map(({ country, href }, index) => (
                <React.Fragment key={href}>
                  <Link href={href} style={{ color: "var(--emerald)", fontWeight: 600 }}>{country}</Link>
                  {index < priorityCountries.length - 2 ? ", " : index === priorityCountries.length - 2 ? " and " : ". "}
                </React.Fragment>
              ))}
              <Link href="#cta" style={{ color: "var(--emerald)", fontWeight: 700 }}>Book your free Quran class today →</Link>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
