import type { Metadata } from "next";
import React from "react";
import Link from "next/link";
import { ORGANIZATION_ID } from "@/lib/organizationSchema";
import { Award, Users, Globe, Heart, Landmark, Sprout, TrendingUp, CheckCircle, Shield, Star, BookOpen, Clock, GraduationCap } from "lucide-react";

export const metadata: Metadata = {
  title: { absolute: "About NoorPath Academy — Certified Online Quran Education for Families | Since 2018" },
  description:
    "NoorPath Academy — a founder-led online Quran academy since 2018. 12,000+ students, 250+ Ijazah-certified tutors, 40+ countries. Noorani Qaida, Tajweed, Hifz & Arabic. Free trial.",
  keywords: [
    "about noorpath academy", "online quran academy", "certified quran tutors", "ijazah certified online quran",
    "quran academy since 2018", "noorpath quran", "online islamic education", "quran school online",
    "best online quran academy", "quran academy for kids and adults",
  ],
  alternates: { canonical: "https://www.noorpath.online/about" },
  openGraph: {
    title: "About NoorPath Academy — Online Quran Education for Families",
    description: "Our mission: making quality Quran education accessible to every Muslim family worldwide. 12,000+ students, 250+ certified tutors, 40+ countries.",
    url: "https://www.noorpath.online/about",
    images: [{ url: "/og-image.svg", width: 1200, height: 630, alt: "About NoorPath Academy" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "About NoorPath Academy",
    description: "12,000+ students, 250+ Ijazah tutors, 40+ countries. Quality Quran education for every family.",
    images: ["/og-image.svg"],
  },
};

const faqs = [
  { q: "When was NoorPath Academy founded?", a: "NoorPath Academy was founded in 2018 by Faisal Tariq with the mission of making certified Quran education accessible to every Muslim family worldwide — regardless of their country or timezone." },
  { q: "How are NoorPath tutors qualified?", a: "Every tutor at NoorPath Academy holds either Ijazah certification (a chain of narration back to the Prophet ﷺ) or Al-Azhar university qualifications. All tutors are background-checked, undergo teaching trials, and receive monthly performance reviews. Only the top 15% of applicants are accepted." },
  { q: "What age groups does NoorPath Academy teach?", a: "We teach everyone from age 4 to senior adults. We have specialist tutors for toddlers and young children (Noorani Qaida, daily duas), school-age children (Quran recitation, Tajweed), teenagers (Hifz, Arabic), adult beginners, adult advanced learners, and elderly students returning to the Quran." },
  { q: "How is NoorPath different from other online Quran academies?", a: "NoorPath is founder-led with a strict quality standard. Unlike large marketplaces, we personally vet every tutor and match each student to the right teacher. We offer weekly progress reports, family plans for siblings, and flexible female tutors for sisters and daughters. Our 4.9/5 rating from 2,400+ reviews reflects genuine family satisfaction." },
  { q: "Is NoorPath Academy accredited?", a: "NoorPath's tutors hold internationally recognized Ijazah certifications — the gold standard in Quran teaching. Ijazah is an unbroken chain of authorized transmission of the Quran going back to the Prophet Muhammad ﷺ. Many of our tutors also hold degrees from Al-Azhar University in Cairo." },
  { q: "What countries does NoorPath serve?", a: "We serve students in 40+ countries including USA, UK, Canada, Australia, UAE, Saudi Arabia, Pakistan, Germany, Malaysia, Bangladesh, South Africa, France, Netherlands, and many more. We have tutors available across all major timezones." },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "AboutPage",
      name: "About NoorPath Academy",
      url: "https://www.noorpath.online/about",
      mainEntity: { "@id": ORGANIZATION_ID },
      description: "NoorPath Academy is a certified online Quran academy founded in 2018, serving 12,000+ students in 40+ countries with Ijazah-certified tutors.",
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
        { "@type": "ListItem", position: 2, name: "About", item: "https://www.noorpath.online/about" },
      ],
    },
  ],
};

const stats = [
  { icon: <Users size={28} />, num: "12,000+", label: "Students Served" },
  { icon: <Award size={28} />, num: "250+", label: "Certified Tutors" },
  { icon: <Globe size={28} />, num: "40+", label: "Countries" },
  { icon: <Heart size={28} />, num: "4.9/5", label: "Parent Rating" },
  { icon: <Star size={28} />, num: "2,400+", label: "5-Star Reviews" },
  { icon: <GraduationCap size={28} />, num: "2018", label: "Founded" },
];

export default function AboutPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero */}
      <div className="page-hero">
        <div className="max-w-[1200px] mx-auto px-4 page-hero-content">
          <nav aria-label="Breadcrumb" style={{ marginBottom: 16 }}>
            <Link href="/" style={{ color: "var(--gold-lt)", fontSize: ".85rem" }}>Home</Link>
            <span style={{ color: "rgba(255,255,255,.4)", margin: "0 8px" }}>›</span>
            <span style={{ color: "rgba(255,255,255,.6)", fontSize: ".85rem" }}>About Us</span>
          </nav>
          <h1>About NoorPath Academy</h1>
          <p>
            Illuminating hearts through the teachings of the Holy Quran — since 2018, for families in 40+ countries. Certified, 1-on-1, live online Quran classes with Ijazah-qualified teachers.
          </p>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 24 }}>
            <Link href="/online-quran-classes#cta" className="btn-primary-np">Book Free Trial →</Link>
            <Link href="/founder" className="btn-outline-np" style={{ color: "#fff", borderColor: "rgba(255,255,255,.5)" }}>Meet the Founder</Link>
          </div>
        </div>
      </div>

      {/* Stats */}
      <section style={{ background: "var(--ivory)", padding: "48px 0", borderBottom: "1px solid var(--border)" }}>
        <div className="max-w-[1200px] mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 text-center">
            {stats.map((s) => (
              <div key={s.label}>
                <div style={{ color: "var(--emerald)", marginBottom: 8, display: "flex", justifyContent: "center" }}>{s.icon}</div>
                <div style={{ fontFamily: "var(--font-playfair), serif", fontSize: "1.8rem", fontWeight: 700, color: "var(--charcoal)" }}>{s.num}</div>
                <div style={{ color: "var(--muted)", fontSize: ".82rem", fontWeight: 600 }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="max-w-[900px] mx-auto px-4">

          {/* Mission */}
          <div style={{ textAlign: "center", marginBottom: 40 }}>
            <span className="section-eyebrow" style={{ display: "inline-flex", alignItems: "center", gap: 6 }}><Landmark size={13} /> Our Mission</span>
            <h2 className="section-title">Making Quality Quran Education <em className="accent">Accessible to Every Family</em></h2>
          </div>

          <div className="content-card" style={{ marginBottom: 24 }}>
            <h3 style={{ fontFamily: "var(--font-playfair), serif", fontSize: "1.15rem", color: "var(--charcoal)", marginBottom: 14 }}>Who We Are</h3>
            <p style={{ color: "var(--muted)", lineHeight: 1.8, marginBottom: 16 }}>
              <strong>NoorPath Academy</strong> is a founder-led <Link href="/online-quran-academy" style={{ color: "var(--emerald)", fontWeight: 600 }}>online Quran academy</Link> established in 2018 with one goal: to give every Muslim family access to high-quality, personalised Quran and Islamic education — regardless of their location.
            </p>
            <p style={{ color: "var(--muted)", lineHeight: 1.8, marginBottom: 16 }}>
              We serve families in over 40 countries, with 250+ certified tutors holding Ijazah or Al-Azhar university qualifications. Our curriculum spans <Link href="/courses/noorani-qaida-online" style={{ color: "var(--emerald)", fontWeight: 600 }}>Noorani Qaida for 4-year-olds</Link> to advanced <Link href="/hifz-quran-online" style={{ color: "var(--emerald)", fontWeight: 600 }}>Hifz and Ijazah programs</Link> for adults.
            </p>
            <p style={{ color: "var(--muted)", lineHeight: 1.8 }}>
              Unlike large marketplace platforms, NoorPath is founder-led and quality-controlled. We personally vet every tutor, monitor every teaching relationship, and only retain teachers who consistently earn 5-star parent feedback. That is why 12,000+ families trust us — and why our rating sits at 4.9/5 from 2,400+ verified reviews.
            </p>
          </div>

          {/* Our Values */}
          <div style={{ textAlign: "center", marginBottom: 32, marginTop: 56 }}>
            <span className="section-eyebrow">🌱 Core Values</span>
            <h2 className="section-title">What We Stand For</h2>
          </div>
          <div className="content-card" style={{ marginBottom: 24 }}>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 20 }}>
              {([
                [<Sprout size={20} key="s" />, "Quality Teaching", "Every tutor is rigorously vetted — Ijazah-certified with verified backgrounds and regular performance reviews. Only the top 15% of tutor applicants are accepted onto the NoorPath platform."],
                [<Users size={20} key="u" />, "Family First", "We design our scheduling, pricing, and communication to support parents — not just students. Family plans let multiple siblings learn at discounted rates, and female tutors are always available for daughters and sisters."],
                [<Globe size={20} key="g" />, "Global Accessibility", "No family should be denied Quran education because of geography or time zones. We serve 40+ countries with tutors available across all major timezones — morning, evening, and weekends."],
                [<TrendingUp size={20} key="t" />, "Measurable Progress", "Weekly reports, milestone tracking, and open parent communication ensure every child moves forward. Parents receive a detailed progress update after every 4 sessions."],
                [<Shield size={20} key="sh" />, "Safe Learning", "All classes are private 1-on-1 — no strangers in group sessions. Female tutors available by request. We never record sessions without explicit parent consent."],
              ] as [React.ReactNode, string, string][]).map(([icon, title, desc]) => (
                <li key={String(title)} style={{ display: "flex", gap: 14 }}>
                  <span style={{ color: "var(--emerald)", flexShrink: 0, width: 38, height: 38, background: "rgba(10,110,79,.1)", borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center" }}>{icon}</span>
                  <div>
                    <strong style={{ color: "var(--charcoal)", display: "block", marginBottom: 4 }}>{title}</strong>
                    <span style={{ color: "var(--muted)", fontSize: ".88rem", lineHeight: 1.7 }}>{desc}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* E-E-A-T: Experience & Expertise */}
          <div style={{ textAlign: "center", marginBottom: 32, marginTop: 56 }}>
            <span className="section-eyebrow"><Award size={13} style={{ display: "inline", verticalAlign: "middle", marginRight: 4 }} /> Tutor Standards</span>
            <h2 className="section-title">Our <em className="accent">Tutor Quality</em> Standards</h2>
            <p className="section-desc center">
              At NoorPath, tutor quality is non-negotiable. Every teacher must meet strict criteria before teaching a single student.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {[
              { icon: <Award size={22} />, title: "Ijazah Certification", desc: "Ijazah is the gold standard in Quran teaching — an unbroken chain of authorized transmission going back to the Prophet Muhammad ﷺ. Every NoorPath tutor holds or is working toward Ijazah." },
              { icon: <GraduationCap size={22} />, title: "Formal Education", desc: "Many tutors hold degrees from Al-Azhar University (Cairo) — the world's oldest Islamic university. Others hold from recognised Islamic institutions in Pakistan, Egypt, and Malaysia." },
              { icon: <CheckCircle size={22} />, title: "Background Verified", desc: "All tutors undergo identity verification and background checks before joining. We verify academic credentials, check references, and conduct multiple teaching assessments." },
              { icon: <Clock size={22} />, title: "Ongoing Evaluation", desc: "Monthly parent satisfaction reviews. Tutors scoring below NoorPath's quality threshold are removed immediately. Only consistently 5-star tutors remain on the platform." },
              { icon: <BookOpen size={22} />, title: "Specialist Matching", desc: "Child tutors, female tutors, adult-specialist tutors, Hifz experts, Tajweed specialists — each student is matched to the teacher best suited to their age, level, and goals." },
              { icon: <Heart size={22} />, title: "Passion for Teaching", desc: "Teaching the Quran is an act of ibadah (worship). Our tutors are selected not just for certification, but for their genuine love of sharing the Quran with the next generation." },
            ].map((f) => (
              <div key={f.title} className="content-card" style={{ display: "flex", gap: 16 }}>
                <div style={{ color: "var(--emerald)", flexShrink: 0 }}>{f.icon}</div>
                <div>
                  <strong style={{ color: "var(--charcoal)", display: "block", marginBottom: 6 }}>{f.title}</strong>
                  <p style={{ color: "var(--muted)", fontSize: ".87rem", lineHeight: 1.65, margin: 0 }}>{f.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* What we offer */}
          <div style={{ textAlign: "center", marginBottom: 32, marginTop: 56 }}>
            <span className="section-eyebrow">📚 Programs</span>
            <h2 className="section-title">Our <em className="accent">Courses & Programs</em></h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-12">
            {[
              { href: "/courses/noorani-qaida-online", name: "Noorani Qaida Online", desc: "Arabic alphabet to reading — for complete beginners from age 4" },
              { href: "/learn-tajweed-online", name: "Tajweed Classes", desc: "Recite Quran as the Prophet ﷺ — all major rules with certified Qari" },
              { href: "/hifz-quran-online", name: "Hifz Program", desc: "Complete Quran memorization — structured Juz-by-Juz with revision system" },
              { href: "/online-quran-classes-for-kids", name: "Kids Quran Classes", desc: "Specialist tutors for children from age 4 — patience and play-based learning" },
              { href: "/female-quran-teacher-online", name: "Female Quran Teachers", desc: "Certified Hafiza tutors for sisters and daughters — 100% female environment" },
              { href: "/courses/arabic-language-online", name: "Arabic Language", desc: "Understand the Quran in its original language — Modern Arabic & Quranic Arabic" },
            ].map((c) => (
              <Link key={c.href} href={c.href} style={{ textDecoration: "none" }}>
                <div className="content-card" style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                  <CheckCircle size={16} style={{ color: "var(--emerald)", marginTop: 2, flexShrink: 0 }} />
                  <div>
                    <strong style={{ color: "var(--charcoal)", fontSize: ".93rem" }}>{c.name}</strong>
                    <p style={{ color: "var(--muted)", fontSize: ".83rem", margin: "4px 0 0", lineHeight: 1.5 }}>{c.desc}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Countries */}
          <div style={{ textAlign: "center", marginBottom: 32, marginTop: 56 }}>
            <span className="section-eyebrow"><Globe size={13} style={{ display: "inline", verticalAlign: "middle", marginRight: 4 }} /> Global Reach</span>
            <h2 className="section-title">Serving Families in <em className="accent">40+ Countries</em></h2>
            <p className="section-desc center">
              From the USA and UK to Australia, Pakistan, and beyond — NoorPath Academy is available wherever your family is.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {[
              { href: "/locations/online-quran-classes-uk", label: "🇬🇧 United Kingdom" },
              { href: "/locations/online-quran-classes-usa", label: "🇺🇸 United States" },
              { href: "/locations/online-quran-classes-canada", label: "🇨🇦 Canada" },
              { href: "/locations/online-quran-classes-australia", label: "🇦🇺 Australia" },
              { href: "/locations/online-quran-classes-uae", label: "🇦🇪 UAE" },
              { href: "/locations/online-quran-classes-pakistan", label: "🇵🇰 Pakistan" },
              { href: "/locations/online-quran-classes-germany", label: "🇩🇪 Germany" },
              { href: "/locations", label: "🌍 + 33 More" },
            ].map((l) => (
              <Link key={l.href} href={l.href} style={{ textDecoration: "none" }}>
                <div className="content-card" style={{ textAlign: "center", padding: "14px 10px", fontWeight: 600, fontSize: ".88rem", color: "var(--charcoal)" }}>{l.label}</div>
              </Link>
            ))}
          </div>

          {/* FAQ */}
          <div style={{ textAlign: "center", marginBottom: 32, marginTop: 56 }}>
            <span className="section-eyebrow">❓ FAQ</span>
            <h2 className="section-title">About NoorPath — <em className="accent">Common Questions</em></h2>
          </div>
          <div className="mb-12">
            {faqs.map((f, i) => (
              <details key={i} style={{ borderBottom: "1px solid var(--border)", padding: "18px 0" }}>
                <summary style={{ fontWeight: 600, color: "var(--charcoal)", cursor: "pointer", fontSize: ".95rem", listStyle: "none", display: "flex", justifyContent: "space-between" }}>
                  {f.q} <span style={{ color: "var(--emerald)", marginLeft: 8 }}>+</span>
                </summary>
                <p style={{ color: "var(--muted)", marginTop: 12, lineHeight: 1.75, fontSize: ".9rem" }}>{f.a}</p>
              </details>
            ))}
          </div>

          {/* CTA */}
          <div style={{ background: "linear-gradient(135deg, var(--emerald-dk) 0%, var(--emerald) 100%)", borderRadius: 20, padding: "36px 32px", textAlign: "center", marginBottom: 48 }}>
            <h2 style={{ fontFamily: "var(--font-playfair), serif", color: "#fff", fontSize: "1.8rem", marginBottom: 12 }}>
              Ready to Start Your <em style={{ color: "var(--gold-lt)" }}>Quran Journey?</em>
            </h2>
            <p style={{ color: "rgba(255,255,255,.8)", marginBottom: 24, lineHeight: 1.7 }}>
              Join 12,000+ families who trust NoorPath Academy. First class is always free — no credit card required.
            </p>
            <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/online-quran-classes#cta" className="btn-primary-np" style={{ background: "var(--gold)", color: "var(--charcoal)" }}>Book Free Trial →</Link>
              <Link href="/courses" className="btn-outline-np" style={{ color: "#fff", borderColor: "rgba(255,255,255,.5)" }}>Browse All Courses</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
