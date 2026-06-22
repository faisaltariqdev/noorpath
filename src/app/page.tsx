import type { Metadata } from "next";
import Link from "next/link";
import CTAForm from "@/components/CTAForm";
import {
  Sprout, Baby, Smile, Star, Users, PlayCircle, MapPin,
  Layers, Award, Globe, CheckCircle, Clock, Shield, Video,
  ChevronDown, Lock
} from "lucide-react";

export const metadata: Metadata = {
  title: "Learn Quran Online | NoorPath Academy — Free Trial for Kids & Families",
  description:
    "NoorPath Academy — online Quran academy for families worldwide. Noorani Qaida, Tajweed, Hifz, Arabic, Islamic studies & daily duas for kids. Certified tutors. Family plans. Free 30-min trial.",
  alternates: { canonical: "https://www.noorpath.online/" },
};

const courseCards = [
  { icon: "📖", title: "Noorani Qaida", desc: "Start from zero — Arabic letters to full reading", level: "Beginner", href: "/courses/noorani-qaida-online" },
  { icon: "🎵", title: "Tajweed Rules", desc: "Recite Quran beautifully with correct pronunciation", level: "Beginner–Advanced", href: "/courses/tajweed-classes-online" },
  { icon: "🧠", title: "Hifz Program", desc: "Full Quran memorization with Sanad preparation", level: "Intermediate–Advanced", href: "/courses/hifz-program-online" },
  { icon: "🌙", title: "Kids All-in-One", desc: "Qaida + Daily Duas + Hadith — everything in one", level: "Ages 4–12", href: "/courses/quran-classes-for-kids" },
  { icon: "📝", title: "Arabic Language", desc: "Understand the Quran in its original language", level: "All levels", href: "/courses/arabic-language-online" },
  { icon: "🕌", title: "Islamic Studies", desc: "Fiqh, Seerah, Aqeedah, morals & Islamic character", level: "All ages", href: "/courses/islamic-studies-online" },
];

const whyPoints = [
  { icon: <CheckCircle size={22} />, title: "Certified Tutors", desc: "Every tutor holds Ijazah or Al-Azhar certification with verified teaching credentials." },
  { icon: <Users size={22} />, title: "Family Plans", desc: "Enroll 2+ siblings at a discounted family rate — each child on their own level." },
  { icon: <Clock size={22} />, title: "Flexible Scheduling", desc: "24/7 class slots. Morning, evening, or weekend — we match your timezone." },
  { icon: <Shield size={22} />, title: "Female Tutors Available", desc: "Separate certified female teachers for sisters and daughters — safe, comfortable learning." },
];

const testimonials = [
  { name: "Sarah Johnson", country: "🇺🇸 USA", text: "My children transformed their Quran recitation within just 3 months. Incredibly patient and qualified tutors. Best investment for my family!", stars: 5 },
  { name: "Ahmed Al-Rashid", country: "🇸🇦 Saudi Arabia", text: "The Hifz program is exceptionally structured. My son memorized 5 Juz in 8 months. Weekly progress reports keep us fully informed.", stars: 5 },
  { name: "Fatima Malik", country: "🇬🇧 UK", text: "As a single mother, the family plan for my 3 children is a lifesaver. The female tutors are wonderful and my daughters are thriving.", stars: 5 },
];

const faqs = [
  { q: "How do online Quran classes work?", a: "Classes are held live via Zoom or Google Meet — 1-on-1 with your assigned tutor. You get a fixed weekly schedule that fits your timezone, with no pre-recorded lessons." },
  { q: "What age groups do you accept?", a: "We accept learners from age 4 to seniors. We have specialist tutors for toddlers, school-age children, teenagers, adults, and elderly learners." },
  { q: "Do you offer a free trial class?", a: "Yes! We offer a completely free 30-minute trial class with no credit card required. Book your trial above to get started immediately." },
  { q: "Are there family discount plans?", a: "Absolutely. If you enroll 2 or more siblings from the same family, each sibling gets a significant discount. Contact us for exact pricing based on your children's levels." },
  { q: "How are tutors selected and vetted?", a: "All tutors hold Ijazah certification or Al-Azhar university qualifications. They undergo background verification, teaching trials, and ongoing performance evaluations." },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "EducationalOrganization",
      "@id": "https://www.noorpath.online/#organization",
      name: "NoorPath Academy",
      url: "https://www.noorpath.online/",
      logo: { "@type": "ImageObject", url: "https://www.noorpath.online/og-image.svg", width: 1200, height: 630 },
      email: "info@noorpath.online",
      telephone: "+923124877906",
      foundingDate: "2018",
      description: "NoorPath Academy is a premium online Quran academy offering 1-on-1 live classes for kids, adults and families worldwide.",
      address: { "@type": "PostalAddress", addressCountry: "PK" },
      sameAs: ["https://www.noorpath.online"],
    },
    {
      "@type": "WebSite",
      "@id": "https://www.noorpath.online/#website",
      url: "https://www.noorpath.online/",
      name: "NoorPath Academy",
      publisher: { "@id": "https://www.noorpath.online/#organization" },
    },
    {
      "@type": "FAQPage",
      mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
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

      {/* ── PROMO BAR ── */}
      <div className="promo-bar">
        🎁 <strong>FREE trial class</strong> — Beginner to advanced, all ages welcome. No credit card required.
        <Link href="#cta">Claim Now →</Link>
      </div>

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
          paddingTop: 100,
          paddingBottom: 60,
          overflow: "hidden",
        }}
      >
        {/* Orbs */}
        {["top-[8%] left-[12%] w-[420px] h-[420px] bg-emerald-mid", "top-[60%] right-[8%] w-[300px] h-[300px] bg-gold", "top-[35%] left-[55%] w-[250px] h-[250px] bg-emerald-lt"].map((cls, i) => (
          <div key={i} className={`absolute rounded-full opacity-25 blur-[80px] pointer-events-none ${cls}`} />
        ))}

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

              <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 20 }}>
                {[
                  [<Sprout size={13} key="s" />, "Beginner to Advanced"],
                  [<Baby size={13} key="b" />, "All Ages Welcome"],
                  [<Smile size={13} key="h" />, "Daily Duas for Kids"],
                  [<Star size={13} key="st" />, "All-in-One Kids"],
                  [<Users size={13} key="u" />, "Parents & Siblings"],
                ].map(([icon, label]) => (
                  <span key={String(label)} style={{ display: "inline-flex", alignItems: "center", gap: 6, background: "rgba(255,255,255,.1)", border: "1px solid rgba(255,255,255,.15)", borderRadius: 50, padding: "5px 12px", color: "#fff", fontSize: ".78rem", fontWeight: 500 }}>
                    {icon} {label}
                  </span>
                ))}
              </div>

              <h1 style={{ color: "#fff", fontSize: "clamp(2.2rem, 5vw, 3.4rem)", fontWeight: 700, lineHeight: 1.15, marginBottom: 20 }}>
                Learn Quran Online<br />
                From <em style={{ color: "var(--gold-lt)" }}>Noorani Qaida</em> to Hifz<br />
                — For Every Age
              </h1>
              <p style={{ color: "rgba(255,255,255,.82)", fontSize: "1rem", lineHeight: 1.75, marginBottom: 28, maxWidth: 520 }}>
                From Noorani Qaida through Hifz, Tajweed, Tafseer, and Islamic scholarship — for learners age 4 to adults and seniors. Parents can enroll multiple siblings — each child on their own level, with family plans and weekly progress reports.
              </p>

              <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginBottom: 36 }}>
                <Link href="#cta" style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "var(--gold)", color: "var(--charcoal)", fontWeight: 700, padding: "14px 28px", borderRadius: 50, textDecoration: "none", fontSize: ".95rem" }}>
                  <PlayCircle size={18} /> Start Free Trial
                </Link>
                <Link href="/courses" style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "transparent", color: "#fff", fontWeight: 600, padding: "14px 28px", borderRadius: 50, textDecoration: "none", border: "2px solid rgba(255,255,255,.35)", fontSize: ".95rem" }}>
                  <MapPin size={18} /> View Courses
                </Link>
              </div>

              {/* Stats */}
              <div style={{ display: "flex", gap: 0, flexWrap: "wrap" }}>
                {[["12K+","Students Enrolled"],["250+","Certified Tutors"],["40+","Countries"],["4.9★","Avg Rating"]].map(([num, label], i, arr) => (
                  <div key={label} style={{ display: "flex", alignItems: "center" }}>
                    <div style={{ textAlign: "center", padding: "0 20px" }}>
                      <div style={{ color: "#fff", fontFamily: "'Playfair Display',serif", fontSize: "1.5rem", fontWeight: 700 }}>{num}</div>
                      <div style={{ color: "rgba(255,255,255,.6)", fontSize: ".72rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: ".8px" }}>{label}</div>
                    </div>
                    {i < arr.length - 1 && <div style={{ width: 1, height: 40, background: "rgba(255,255,255,.2)" }} />}
                  </div>
                ))}
              </div>
            </div>

            {/* Right — hero card */}
            <div style={{ position: "relative" }}>
              <div style={{ background: "rgba(255,255,255,.06)", backdropFilter: "blur(20px)", border: "1px solid rgba(255,255,255,.12)", borderRadius: 24, padding: 28 }}>
                <div style={{ display: "inline-flex", alignItems: "center", gap: 6, background: "rgba(37,211,102,.15)", border: "1px solid rgba(37,211,102,.3)", borderRadius: 50, padding: "5px 14px", fontSize: ".75rem", color: "#4ade80", fontWeight: 600, marginBottom: 16 }}>
                  <span style={{ width: 7, height: 7, background: "#4ade80", borderRadius: "50%", animation: "pulse 2s infinite" }} />
                  LIVE SESSION IN PROGRESS
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
                  {[["🧑‍🏫","1-on-1","Private Session"],["⭐","4.9/5","Tutor Rating"],["📋","Progress","Weekly Reports"],["🕌","Certified","Ijazah Tutors"]].map(([emoji, num, label]) => (
                    <div key={label} style={{ background: "rgba(255,255,255,.06)", borderRadius: 12, padding: 14, textAlign: "center" }}>
                      <div style={{ fontSize: "1.3rem" }}>{emoji}</div>
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
            <span className="trust-label">Trusted By Families In:</span>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
              {["🇺🇸 United States","🇬🇧 United Kingdom","🇨🇦 Canada","🇦🇺 Australia","🇸🇦 Saudi Arabia","🇵🇰 Pakistan","🇲🇾 Malaysia","🇩🇪 Germany"].map((c) => (
                <span key={c} className="trust-logo-item">{c}</span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── FEATURES STRIP ── */}
      <div style={{ background: "var(--ivory)", borderBottom: "1px solid var(--border)", padding: "32px 0" }}>
        <div className="max-w-[1200px] mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              [<Layers size={22} key="l" />,"8 Learning Stages","Qaida to Scholar"],
              [<Users size={22} key="u" />,"5 Age Groups","Toddlers to Seniors"],
              [<Award size={22} key="a" />,"Ijazah Tutors","Al-Azhar certified"],
              [<Globe size={22} key="g" />,"40+ Countries","24/7 flexible slots"],
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
            <span className="section-eyebrow">📚 Our Programmes</span>
            <h2 className="section-title">Complete <em className="accent">Quran & Islamic</em> Curriculum</h2>
            <p className="section-desc center">From the Arabic alphabet to advanced scholarship — expert tutors, structured paths, measurable progress.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courseCards.map((c) => (
              <div key={c.title} className="content-card" style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                <div style={{ fontSize: "2rem" }}>{c.icon}</div>
                <div>
                  <h3 style={{ fontFamily: "'Playfair Display',serif", fontSize: "1.15rem", fontWeight: 700, color: "var(--charcoal)", marginBottom: 6 }}>{c.title}</h3>
                  <p style={{ color: "var(--muted)", fontSize: ".88rem", lineHeight: 1.65, margin: 0 }}>{c.desc}</p>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "auto", paddingTop: 12, borderTop: "1px solid var(--border)" }}>
                  <span style={{ fontSize: ".75rem", color: "var(--muted)", fontWeight: 600, textTransform: "uppercase", letterSpacing: ".5px" }}>{c.level}</span>
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

      {/* ── WHY NOORPATH ── */}
      <section id="why" style={{ background: "var(--ivory)" }}>
        <div className="max-w-[1200px] mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="section-eyebrow">✅ Why Choose Us</span>
              <h2 className="section-title">Why 12,000+ Families Choose <em className="accent">NoorPath</em></h2>
              <p className="section-desc">We combine certified Islamic scholarship with modern teaching methods, flexible scheduling, and genuine care for every student&apos;s progress.</p>
              <Link href="/online-quran-classes#cta" className="btn-primary-np">Start Free Trial →</Link>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {whyPoints.map((w) => (
                <div key={w.title} style={{ display: "flex", gap: 16, background: "#fff", border: "1px solid var(--border)", borderRadius: 16, padding: 20 }}>
                  <div style={{ color: "var(--emerald)", flexShrink: 0, marginTop: 2 }}>{w.icon}</div>
                  <div>
                    <div style={{ fontWeight: 700, color: "var(--charcoal)", marginBottom: 4 }}>{w.title}</div>
                    <div style={{ color: "var(--muted)", fontSize: ".88rem", lineHeight: 1.6 }}>{w.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section id="testimonials" style={{ background: "#fff" }}>
        <div className="max-w-[1200px] mx-auto px-4">
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <span className="section-eyebrow">⭐ Parent Reviews</span>
            <h2 className="section-title">What Families Say About <em className="accent">NoorPath</em></h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div key={t.name} className="content-card">
                <div style={{ color: "var(--gold)", fontSize: "1.1rem", marginBottom: 12 }}>{"★".repeat(t.stars)}</div>
                <p style={{ color: "var(--slate)", fontSize: ".9rem", lineHeight: 1.7, marginBottom: 16 }}>&quot;{t.text}&quot;</p>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <strong style={{ color: "var(--charcoal)", fontSize: ".9rem" }}>{t.name}</strong>
                  <span style={{ fontSize: ".82rem" }}>{t.country}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRICING PREVIEW ── */}
      <section id="pricing" style={{ background: "var(--cream)" }}>
        <div className="max-w-[1200px] mx-auto px-4">
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <span className="section-eyebrow">💰 Pricing</span>
            <h2 className="section-title">Simple, <em className="accent">Transparent</em> Pricing</h2>
            <p className="section-desc center">No hidden fees. Cancel anytime. Family discount for 2+ siblings.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {[
              { name: "Starter", price: "$29", period: "/month", desc: "1 class per week · Perfect for beginners", highlight: false },
              { name: "Standard", price: "$49", period: "/month", desc: "2 classes per week · Most popular for progress", highlight: true },
              { name: "Intensive", price: "$79", period: "/month", desc: "4 classes per week · Fastest progress & Hifz", highlight: false },
            ].map((p) => (
              <div key={p.name} style={{ background: p.highlight ? "var(--emerald)" : "#fff", border: p.highlight ? "none" : "1px solid var(--border)", borderRadius: 20, padding: 28, textAlign: "center", position: "relative" }}>
                {p.highlight && <div style={{ position: "absolute", top: -12, left: "50%", transform: "translateX(-50%)", background: "var(--gold)", color: "var(--charcoal)", fontSize: ".72rem", fontWeight: 700, padding: "4px 14px", borderRadius: 50, textTransform: "uppercase", whiteSpace: "nowrap" }}>Most Popular</div>}
                <div style={{ fontFamily: "'Playfair Display',serif", fontSize: "1.2rem", fontWeight: 700, color: p.highlight ? "#fff" : "var(--charcoal)", marginBottom: 8 }}>{p.name}</div>
                <div style={{ display: "flex", justifyContent: "center", alignItems: "baseline", gap: 2, marginBottom: 12 }}>
                  <span style={{ fontSize: "2.2rem", fontWeight: 800, color: p.highlight ? "#fff" : "var(--emerald)" }}>{p.price}</span>
                  <span style={{ color: p.highlight ? "rgba(255,255,255,.6)" : "var(--muted)", fontSize: ".85rem" }}>{p.period}</span>
                </div>
                <p style={{ color: p.highlight ? "rgba(255,255,255,.75)" : "var(--muted)", fontSize: ".88rem", marginBottom: 20 }}>{p.desc}</p>
                <Link href="/pricing" style={{ display: "block", background: p.highlight ? "var(--gold)" : "var(--emerald)", color: p.highlight ? "var(--charcoal)" : "#fff", padding: "11px 0", borderRadius: 10, fontWeight: 700, textDecoration: "none", fontSize: ".9rem" }}>
                  Get Started →
                </Link>
              </div>
            ))}
          </div>
          <p style={{ textAlign: "center", color: "var(--muted)", fontSize: ".85rem" }}>
            All plans include free trial · No contracts · <Link href="/pricing" style={{ color: "var(--emerald)", fontWeight: 600 }}>View full pricing details →</Link>
          </p>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section id="faq" style={{ background: "#fff" }}>
        <div className="max-w-[1200px] mx-auto px-4">
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <span className="section-eyebrow">❓ FAQ</span>
            <h2 className="section-title">Frequently Asked <em className="accent">Questions</em></h2>
          </div>
          <div className="max-w-[800px] mx-auto" style={{ display: "flex", flexDirection: "column", gap: 0 }}>
            {faqs.map((f, i) => (
              <details key={i} style={{ borderBottom: "1px solid var(--border)", padding: "20px 0" }}>
                <summary style={{ fontWeight: 600, color: "var(--charcoal)", cursor: "pointer", fontSize: ".97rem", listStyle: "none", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  {f.q}
                  <ChevronDown size={18} style={{ color: "var(--emerald)", flexShrink: 0 }} />
                </summary>
                <p style={{ color: "var(--muted)", marginTop: 12, lineHeight: 1.75, fontSize: ".92rem" }}>{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="cta-section" id="cta">
        <div className="max-w-[1200px] mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="section-eyebrow" style={{ background: "rgba(255,255,255,.1)", color: "rgba(255,255,255,.9)", borderColor: "rgba(255,255,255,.2)" }}>
                🎓 Free Trial Class
              </span>
              <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: "clamp(2rem,4vw,2.8rem)", fontWeight: 700, color: "#fff", marginBottom: 20 }}>
                Start Your Quran Journey<br />
                <em style={{ color: "var(--gold-lt)" }}>Today — Completely Free</em>
              </h2>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {[
                  [<CheckCircle size={18} key="1" />,"Free 30-minute trial class — no credit card needed"],
                  [<Video size={18} key="2" />,"Live 1-on-1 with a certified tutor via Zoom"],
                  [<Lock size={18} key="3" />,"Your info is 100% private and secure"],
                ].map(([icon, text]) => (
                  <div key={String(text)} style={{ display: "flex", alignItems: "center", gap: 10, color: "rgba(255,255,255,.85)", fontSize: ".92rem" }}>
                    <span style={{ color: "var(--gold-lt)" }}>{icon}</span> {text}
                  </div>
                ))}
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

      {/* ── SEO LOCATIONS ── */}
      <section style={{ background: "var(--ivory)", padding: "48px 0", borderTop: "1px solid var(--border)" }}>
        <div className="max-w-[1200px] mx-auto px-4">
          <h2 style={{ textAlign: "center", fontFamily: "'Playfair Display',serif", fontSize: "1.4rem", marginBottom: 20, color: "var(--charcoal)" }}>
            Online Quran Classes for Every Family, Everywhere
          </h2>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 10, justifyContent: "center", marginBottom: 16 }}>
            {[
              ["/locations/online-quran-classes-usa","🇺🇸 USA"],
              ["/locations/online-quran-classes-canada","🇨🇦 Canada"],
              ["/locations/online-quran-classes-uk","🇬🇧 UK"],
              ["/locations/online-quran-classes-australia","🇦🇺 Australia"],
              ["/locations/online-quran-classes-uae","🇦🇪 UAE"],
              ["/locations","🇸🇦 Saudi Arabia"],
              ["/locations","🇩🇪 Germany"],
              ["/locations","🇲🇾 Malaysia"],
            ].map(([href, label]) => (
              <Link key={String(label)} href={String(href)} style={{ background: "#fff", border: "1px solid var(--border)", borderRadius: 50, padding: "7px 16px", fontSize: ".82rem", color: "var(--charcoal)", fontWeight: 600, textDecoration: "none" }}>
                {label}
              </Link>
            ))}
          </div>
          <p style={{ color: "var(--muted)", textAlign: "center", fontSize: ".82rem", maxWidth: 720, margin: "0 auto", lineHeight: 1.7 }}>
            <strong style={{ color: "var(--charcoal)" }}>NoorPath Academy</strong> delivers live 1-on-1 online Quran education via Zoom, Skype and Google Meet. We specialise in <em>online Quran classes for kids</em>, <em>Tajweed courses</em>, <em>online Hifz programs</em>, <em>Noorani Qaida</em>, <em>Quranic Arabic</em>, and <em>daily duas for children</em>. Serving families in Toronto, London, Texas, Sydney, Dubai, Riyadh and beyond.{" "}
            <Link href="#cta" style={{ color: "var(--emerald)", fontWeight: 600 }}>Book your free trial class today.</Link>
          </p>
        </div>
      </section>
    </>
  );
}
