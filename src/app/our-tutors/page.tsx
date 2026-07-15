import type { Metadata } from "next";
import Link from "next/link";
import { Award, BookOpen, Users, CheckCircle } from "lucide-react";
import { SERVICE_FACTS, TRIAL } from "@/lib/academyFacts";

export const revalidate = false;

export const metadata: Metadata = {
  title: "Our Online Quran Tutors — Tutor Matching | NoorPath Academy",
  description: "Find an online Quran tutor matched for Quran reading, Tajweed, Hifz, children, adults, or a female tutor request. Credentials are confirmed before enrolment.",
  alternates: { canonical: "https://www.noorpath.online/our-tutors" },
  openGraph: {
    title: "Online Quran Tutors — Tutor Matching | NoorPath Academy",
    description: "Request an online Quran tutor for reading, Tajweed, Hifz, children or adults. Female tutor requests are welcome; availability is confirmed after your request.",
    url: "https://www.noorpath.online/our-tutors",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "NoorPath Academy Online Quran Tutors" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Online Quran Tutors | NoorPath Academy",
    description: "Role-based tutor matching for live online Quran classes. Free 30-minute trial; no credit card required.",
    images: ["/og-image.png"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.noorpath.online" },
        { "@type": "ListItem", position: 2, name: "Our Tutors", item: "https://www.noorpath.online/our-tutors" },
      ],
    },
    {
      "@type": "WebPage",
      "@id": "https://www.noorpath.online/our-tutors",
      name: "NoorPath Academy Online Quran Tutors",
      description: "Online Quran tutor matching for reading, Tajweed, Hifz, children, adults, and female tutor requests.",
      url: "https://www.noorpath.online/our-tutors",
      isPartOf: { "@type": "WebSite", url: "https://www.noorpath.online" },
    },
  ],
};

const tutors = [
  {
    initials: "QR",
    name: "Quran Reading Tutor",
    title: "Reading Foundations",
    color: "#0a6e4f",
    bio: "For learners building Arabic letter recognition, pronunciation, and confidence reading from Noorani Qaida or the Quran.",
    badges: ["Noorani Qaida", "Pronunciation", "Beginners"],
  },
  {
    initials: "TJ",
    name: "Tajweed Tutor",
    title: "Recitation & Rule Application",
    color: "#6366f1",
    bio: "For learners who can read and want guided correction in Makharij, recitation, and the practical application of Tajweed rules.",
    badges: ["Tajweed", "Makharij", "Recitation"],
  },
  {
    initials: "HF",
    name: "Hifz Tutor",
    title: "Memorisation & Revision",
    color: "#c9922a",
    bio: "For students pursuing memorisation with lesson plans that balance new passages, recent revision, and long-term review.",
    badges: ["Hifz", "Revision", "Personal Pace"],
  },
  {
    initials: "KT",
    name: "Children’s Quran Tutor",
    title: "Age-Appropriate Teaching",
    color: "#0d9488",
    bio: "For children who benefit from shorter activities, repetition, clear encouragement, and parent-aware lesson planning.",
    badges: ["Children", "Beginners", "Parent Updates"],
  },
  {
    initials: "AT",
    name: "Adult Quran Tutor",
    title: "Adult Learning Support",
    color: "#8b5cf6",
    bio: "For adult beginners and returning learners who want private, structured lessons adapted to their current level and goals.",
    badges: ["Adults", "Private Lessons", "Flexible Pace"],
  },
  {
    initials: "FT",
    name: "Female Tutor Request",
    title: "For Sisters & Daughters",
    color: "#f43f5e",
    bio: "Families may request a female tutor for Quran reading, Tajweed, Hifz, children, or adult learning. Matching depends on the requested subject and schedule.",
    badges: ["Female Tutor Request", "Sisters", "Daughters"],
  },
];

const qualitySteps = [
  { icon: <Award size={22} />, title: "Match the Subject", desc: "We identify the teaching focus required, such as reading, Tajweed, Hifz, children, or adult learning." },
  { icon: <CheckCircle size={22} />, title: "Confirm Credentials", desc: "Specific qualifications and relevant teaching experience are confirmed for the proposed tutor before enrolment." },
  { icon: <BookOpen size={22} />, title: "Trial the Lesson", desc: "The free 30-minute trial lets the learner and family assess teaching style, communication, and fit." },
  { icon: <Users size={22} />, title: "Confirm Preferences", desc: "We consider level, learning goals, timezone, and male or female tutor preference when arranging a match." },
];

export default function OurTutorsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero */}
      <div className="page-hero">
        <div className="max-w-[1200px] mx-auto px-4 page-hero-content">
          <nav aria-label="Breadcrumb" style={{ marginBottom: 16 }}>
            <Link href="/" style={{ color: "var(--gold-lt)", fontSize: ".85rem" }}>Home</Link>
            <span style={{ color: "rgba(255,255,255,.4)", margin: "0 8px" }}>›</span>
            <span style={{ color: "rgba(255,255,255,.6)", fontSize: ".85rem" }}>Our Tutors</span>
          </nav>
          <span className="section-eyebrow" style={{ background: "rgba(255,255,255,.1)", color: "rgba(255,255,255,.9)", borderColor: "rgba(255,255,255,.2)" }}>
            👨‍🏫 Role-Based Tutor Matching
          </span>
          <h1 style={{ marginTop: 14, maxWidth: 760 }}>
            Find the Right <em style={{ color: "var(--gold-lt)" }}>Online Quran Tutor</em>
          </h1>
          <p style={{ color: "rgba(255,255,255,.8)", maxWidth: 640, lineHeight: 1.75, marginTop: 14 }}>
            We match learners by subject, level, age, schedule, and tutor preference. Specific qualifications and relevant experience are confirmed for the proposed tutor before enrolment.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 12, marginTop: 24 }}>
            {SERVICE_FACTS.map(({ value, label }) => (
              <div key={label} style={{ background: "rgba(255,255,255,.08)", border: "1px solid rgba(255,255,255,.14)", borderRadius: 12, padding: "10px 20px", textAlign: "center" }}>
                <div style={{ color: "var(--gold-lt)", fontWeight: 800, fontSize: "1.2rem" }}>{value}</div>
                <div style={{ color: "rgba(255,255,255,.55)", fontSize: ".72rem" }}>{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Tutor profiles */}
      <section style={{ background: "#fff" }}>
        <div className="max-w-[1200px] mx-auto px-4">
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <span className="section-eyebrow">🌟 Tutor Matching</span>
            <h2 className="section-title">Teaching <em className="accent">Categories</em></h2>
            <p className="section-desc center">Choose the learning focus that fits your goals. These cards describe matching categories, not individual tutor profiles.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tutors.map((t) => (
              <div key={t.name} className="content-card" style={{ display: "flex", flexDirection: "column", gap: 0 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 16 }}>
                  <div style={{ width: 56, height: 56, borderRadius: "50%", background: `linear-gradient(135deg, ${t.color}, #0a3d28)`, display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontWeight: 800, fontSize: "1.1rem", flexShrink: 0 }}>
                    {t.initials}
                  </div>
                  <div>
                    <div style={{ fontFamily: "'Playfair Display',serif", fontWeight: 700, color: "var(--charcoal)", fontSize: "1rem", lineHeight: 1.25 }}>{t.name}</div>
                    <div style={{ color: "var(--emerald)", fontSize: ".76rem", fontWeight: 600, marginTop: 2 }}>{t.title}</div>
                  </div>
                </div>

                <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 14 }}>
                  {t.badges.map((b) => (
                    <span key={b} style={{ background: "rgba(10,110,79,.08)", color: "var(--emerald)", borderRadius: 50, padding: "3px 10px", fontSize: ".72rem", fontWeight: 600, border: "1px solid rgba(10,110,79,.15)" }}>{b}</span>
                  ))}
                </div>

                <p style={{ color: "var(--muted)", fontSize: ".85rem", lineHeight: 1.7, marginBottom: 16, flex: 1 }}>{t.bio}</p>

                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", borderTop: "1px solid var(--border)", paddingTop: 14 }}>
                  <span style={{ color: "var(--muted)", fontSize: ".78rem" }}>Availability confirmed after request</span>
                  <Link href="/online-quran-classes#cta" style={{ background: "var(--emerald)", color: "#fff", padding: "8px 18px", borderRadius: 10, fontSize: ".82rem", fontWeight: 600, textDecoration: "none" }}>
                    Book Trial →
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: 48, padding: "36px 24px", background: "var(--ivory)", borderRadius: 20, border: "1px solid var(--border)" }}>
            <h3 style={{ fontFamily: "'Playfair Display',serif", fontSize: "1.5rem", color: "var(--charcoal)", marginBottom: 10 }}>
              Request a Tutor Match
            </h3>
            <p style={{ color: "var(--muted)", maxWidth: 560, margin: "0 auto 24px", lineHeight: 1.7, fontSize: ".93rem" }}>
              Tell us your schedule, age or learning stage, goals, and tutor preference. We will confirm a suitable tutor&apos;s availability and credentials before enrolment.
            </p>
            <Link href="/online-quran-classes#cta" className="btn-primary-np">
              🎓 Book Your Free Trial & Get Matched →
            </Link>
          </div>
        </div>
      </section>

      {/* Hiring process */}
      <section style={{ background: "var(--ivory)", overflow: "visible" }}>
        <div className="max-w-[1200px] mx-auto px-4">
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <span className="section-eyebrow">🔍 Our Vetting Process</span>
            <h2 className="section-title">How We Match Our <em className="accent">Tutors</em></h2>
            <p className="section-desc center">Our matching process focuses on subject fit, relevant credentials, lesson compatibility, and the preferences shared in your request.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-6">
            {qualitySteps.map((s, i) => (
              <div key={s.title} style={{ background: "#fff", borderRadius: 16, padding: "28px 24px 24px", border: "1px solid var(--border)", position: "relative" }}>
                <div style={{ position: "absolute", top: -14, left: 20, width: 28, height: 28, background: "var(--emerald)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontWeight: 800, fontSize: ".8rem", zIndex: 1 }}>{i + 1}</div>
                <div style={{ color: "var(--emerald)", marginBottom: 12 }}>{s.icon}</div>
                <h3 style={{ fontFamily: "'Playfair Display',serif", fontSize: "1rem", fontWeight: 700, color: "var(--charcoal)", marginBottom: 8 }}>{s.title}</h3>
                <p style={{ color: "var(--muted)", fontSize: ".85rem", lineHeight: 1.65, margin: 0 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust + CTA */}
      <section style={{ background: "linear-gradient(135deg, #041f14, #0a3d28)" }}>
        <div className="max-w-[1200px] mx-auto px-4" style={{ textAlign: "center" }}>
          <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: "clamp(2rem,4vw,2.8rem)", color: "#fff", marginBottom: 16 }}>
            Request Your Tutor Match — <em style={{ color: "var(--gold-lt)" }}>Free Trial</em>
          </h2>
          <p style={{ color: "rgba(255,255,255,.75)", maxWidth: 580, margin: "0 auto 32px", lineHeight: 1.75, fontSize: ".95rem" }}>
            Start with a free {TRIAL.durationMinutes}-minute trial. No credit card is required, and tutor availability is confirmed after your request.
          </p>
          <div style={{ display: "flex", gap: 16, flexWrap: "wrap", justifyContent: "center" }}>
            <Link href="/online-quran-classes#cta" style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "linear-gradient(135deg,#c9922a,#d4a030)", color: "#1a1a2e", fontWeight: 700, padding: "15px 32px", borderRadius: 50, textDecoration: "none", fontSize: ".95rem" }}>
              🎓 Book Free Trial Now
            </Link>
            <Link href="/female-quran-teacher-online" style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(255,255,255,.08)", color: "#fff", fontWeight: 600, padding: "15px 28px", borderRadius: 50, textDecoration: "none", border: "1.5px solid rgba(255,255,255,.25)", fontSize: ".93rem" }}>
              👩‍🏫 Request a Female Tutor
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
