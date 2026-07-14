import type { Metadata } from "next";
import Link from "next/link";
import { ORGANIZATION_REF } from "@/lib/organizationSchema";
import { CheckCircle, Star, Shield, Clock, Users, Award } from "lucide-react";
import { PRICING_PLANS, TRIAL } from "@/lib/academyFacts";

export const revalidate = false;

export const metadata: Metadata = {
  title: "Online Quran Teacher — 1-on-1 Tutor Matching | NoorPath Academy",
  description: "Find an online Quran teacher for kids or adults. Request help with Quran reading, Tajweed or Hifz, including female tutor requests and a free 30-minute trial.",
  keywords: ["online quran teacher", "quran teacher online", "certified quran teacher", "quran tutor online", "online quran tutor", "find quran teacher", "quran teacher for kids", "female quran teacher online", "ijazah certified quran teacher", "1 on 1 quran teacher"],
  alternates: { canonical: "https://www.noorpath.online/quran-teacher-online" },
  openGraph: {
    title: "Online Quran Teacher — 1-on-1 Tutor Matching | NoorPath Academy",
    description: "Online Quran teacher matching for kids and adults. Request reading, Tajweed, Hifz or a female tutor, subject to confirmed availability.",
    url: "https://www.noorpath.online/quran-teacher-online",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Online Quran Teacher — NoorPath Academy" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Online Quran Teacher | NoorPath Academy",
    description: "1-on-1 Quran teacher matching. Free trial; female tutor requests welcome.",
    images: ["/og-image.png"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      name: "Online Quran Teacher — 1-on-1 Live Classes",
      description: "Online Quran teacher matching for 1-on-1 live classes for children and adults, including Quran reading, Tajweed, Hifz, and female tutor requests.",
      provider: ORGANIZATION_REF,
      serviceType: "Online Quran Teaching",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
        description: "Free 30-minute trial class",
      },
      url: "https://www.noorpath.online/quran-teacher-online",
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "How do I find a qualified online Quran teacher?",
          acceptedAnswer: { "@type": "Answer", text: "At NoorPath Academy, we match you with an online Quran teacher based on your level, age, goals, and preferred schedule. Specific credentials and relevant experience are confirmed for the proposed tutor before enrolment." },
        },
        {
          "@type": "Question",
          name: "How can I check a Quran teacher's qualifications?",
          acceptedAnswer: { "@type": "Answer", text: "Qualifications vary by tutor and teaching focus. We confirm the proposed tutor's relevant credentials and experience before enrolment so you can make an informed decision." },
        },
        {
          "@type": "Question",
          name: "Are female Quran teachers available?",
          acceptedAnswer: { "@type": "Answer", text: "You can request a female Quran teacher for a sister or daughter when booking. Matching depends on the subject, schedule, and confirmed tutor availability." },
        },
        {
          "@type": "Question",
          name: "What does an online Quran teacher teach?",
          acceptedAnswer: { "@type": "Answer", text: "Our online Quran teachers teach: Noorani Qaida (beginners), Quran recitation with Tajweed, Quran Hifz (memorization), Arabic language, Islamic studies (Fiqh, Seerah, Aqeedah), and daily duas for children." },
        },
        {
          "@type": "Question",
          name: "How much does an online Quran teacher cost?",
          acceptedAnswer: { "@type": "Answer", text: `The free trial lasts ${TRIAL.durationMinutes} minutes and requires no credit card. Monthly plans start at $${PRICING_PLANS[0].monthlyPriceUsd} for one ${PRICING_PLANS[0].sessionMinutes}-minute session per week, with sibling discounts available.` },
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.noorpath.online" },
        { "@type": "ListItem", position: 2, name: "Online Quran Teacher", item: "https://www.noorpath.online/quran-teacher-online" },
      ],
    },
  ],
};

const tutorProfiles = [
  { name: "Quran Reading", spec: "Qaida & Recitation", icon: "📖", detail: "For beginners building accurate reading and pronunciation." },
  { name: "Tajweed", spec: "Rules & Makharij", icon: "🎵", detail: "For guided correction and practical Tajweed application." },
  { name: "Hifz", spec: "Memorisation & Revision", icon: "🧠", detail: "For structured memorisation with an individual revision plan." },
  { name: "Female Tutor Request", spec: "Sisters & Daughters", icon: "👩‍🏫", detail: "Request a female tutor; subject and availability are confirmed first." },
];

export default function QuranTeacherOnlinePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero */}
      <div className="page-hero" style={{ paddingBottom: 100 }}>
        <div className="max-w-[1200px] mx-auto px-4 page-hero-content">
          <nav aria-label="Breadcrumb" style={{ marginBottom: 16 }}>
            <Link href="/" style={{ color: "var(--gold-lt)", fontSize: ".85rem" }}>Home</Link>
            <span style={{ color: "rgba(255,255,255,.4)", margin: "0 8px" }}>›</span>
            <span style={{ color: "rgba(255,255,255,.6)", fontSize: ".85rem" }}>Online Quran Teacher</span>
          </nav>
          <span style={{ display: "inline-block", background: "rgba(232,184,75,.15)", border: "1px solid rgba(232,184,75,.3)", color: "var(--gold-lt)", borderRadius: 50, padding: "5px 16px", fontSize: ".8rem", fontWeight: 700, marginBottom: 16, letterSpacing: ".5px" }}>
            ⭐ Tutor Matching — Trustpilot Reviewed
          </span>
          <h1>Online Quran Teacher<br /><em style={{ color: "var(--gold-lt)" }}>Matched to Your Learning Goal</em></h1>
          <p style={{ maxWidth: 600 }}>
            Connect with an online Quran teacher for 1-on-1 live classes for a child or adult. We match by level, subject, schedule, and tutor preference, then confirm credentials and availability.
          </p>
          <div style={{ display: "flex", gap: 12, marginTop: 28, flexWrap: "wrap" }}>
            <Link href="/online-quran-classes#cta" style={{ background: "var(--gold)", color: "var(--charcoal)", padding: "14px 28px", borderRadius: 12, fontWeight: 700, textDecoration: "none", fontSize: "1rem" }}>
              Book Free Trial →
            </Link>
            <Link href="/courses" style={{ background: "rgba(255,255,255,.1)", border: "1px solid rgba(255,255,255,.3)", color: "#fff", padding: "14px 28px", borderRadius: 12, fontWeight: 600, textDecoration: "none", fontSize: "1rem" }}>
              View All Courses
            </Link>
          </div>
          {/* Trust bar */}
          <div style={{ display: "flex", gap: 24, marginTop: 32, flexWrap: "wrap" }}>
            {["✅ 1-to-1 Lessons", `✅ ${TRIAL.durationMinutes}-Minute Free Trial`, "✅ Female Tutor Requests", "✅ Kids & Adults", "✅ Timezone Matching"].map((t) => (
              <span key={t} style={{ color: "rgba(255,255,255,.8)", fontSize: ".83rem" }}>{t}</span>
            ))}
          </div>
        </div>
      </div>

      {/* Why Our Teachers */}
      <section style={{ padding: "72px 0", background: "var(--ivory)" }}>
        <div className="max-w-[1200px] mx-auto px-4">
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <span style={{ color: "var(--emerald)", fontWeight: 700, fontSize: ".82rem", letterSpacing: "1px", textTransform: "uppercase" }}>Why Choose Our Teachers</span>
            <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: "clamp(1.8rem,3.5vw,2.4rem)", color: "var(--charcoal)", marginTop: 8 }}>
              What Makes a NoorPath Teacher Different?
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: <Award size={28} />, title: "Credentials Confirmed", desc: "The proposed tutor's relevant qualifications and teaching experience are confirmed before enrolment." },
              { icon: <Shield size={28} />, title: "Clear Tutor Details", desc: "Ask about the proposed tutor's background, subject focus, and teaching approach before choosing a plan." },
              { icon: <Users size={28} />, title: "Female Tutor Requests", desc: "Sisters and families may request a female Quran teacher. Matching is subject to the requested subject and schedule." },
              { icon: <Clock size={28} />, title: "Timezone Matching", desc: "Share your timezone and preferred lesson windows; available options are confirmed after your request." },
              { icon: <Star size={28} />, title: "Subject Matching", desc: "We match for Quran reading, Tajweed, Hifz, children, adults, and other stated learning goals." },
              { icon: <CheckCircle size={28} />, title: "Trial Before Enrolment", desc: "Use the free 30-minute trial to assess communication, lesson fit, and next steps before choosing a plan." },
            ].map((item) => (
              <div key={item.title} className="content-card">
                <div style={{ color: "var(--emerald)", marginBottom: 14 }}>{item.icon}</div>
                <h3 style={{ fontFamily: "'Playfair Display',serif", fontSize: "1.1rem", color: "var(--charcoal)", marginBottom: 10 }}>{item.title}</h3>
                <p style={{ color: "var(--muted)", fontSize: ".88rem", lineHeight: 1.7 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Teacher Profiles */}
      <section style={{ padding: "72px 0" }}>
        <div className="max-w-[1200px] mx-auto px-4">
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: "clamp(1.8rem,3.5vw,2.3rem)", color: "var(--charcoal)" }}>
              Choose a Teacher Matching Category
            </h2>
            <p style={{ color: "var(--muted)", marginTop: 10 }}>These are role-based matching options, not individual tutor profiles. Specific credentials are confirmed before enrolment.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {tutorProfiles.map((t) => (
              <div key={t.name} className="content-card" style={{ textAlign: "center" }}>
                <div style={{ width: 72, height: 72, background: "linear-gradient(135deg, var(--emerald), var(--emerald-mid))", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 14px", color: "#fff", fontSize: "1.8rem" }}>
                  {t.icon}
                </div>
                <h3 style={{ fontFamily: "'Playfair Display',serif", fontSize: "1rem", color: "var(--charcoal)", marginBottom: 4 }}>{t.name}</h3>
                <div style={{ color: "var(--emerald)", fontSize: ".8rem", fontWeight: 700, marginBottom: 4 }}>{t.spec}</div>
                <div style={{ color: "var(--muted)", fontSize: ".78rem", lineHeight: 1.6 }}>{t.detail}</div>
              </div>
            ))}
          </div>
          <p style={{ textAlign: "center", color: "var(--muted)", marginTop: 24, fontSize: ".9rem" }}>
            Tutor availability and relevant credentials are confirmed after you submit your preferences.
          </p>
        </div>
      </section>

      {/* What teachers teach */}
      <section style={{ padding: "72px 0", background: "var(--ivory)" }}>
        <div className="max-w-[1200px] mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span style={{ color: "var(--emerald)", fontWeight: 700, fontSize: ".82rem", letterSpacing: "1px", textTransform: "uppercase" }}>What We Teach</span>
              <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: "clamp(1.8rem,3vw,2.2rem)", color: "var(--charcoal)", marginTop: 8, marginBottom: 20 }}>
                Quran Teacher Matching by Subject
              </h2>
              <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                {[
                  { emoji: "📖", title: "Noorani Qaida", desc: "Arabic letters, Makharij, Harakat — for complete beginners from age 4" },
                  { emoji: "🎵", title: "Tajweed Rules", desc: "Tajweed rule practice, including Noon Sakinah, Madd, and Ghunna" },
                  { emoji: "🧠", title: "Quran Hifz (Memorization)", desc: "Structured memorization Juz by Juz with Sabaq–Sabqi–Manzil system" },
                  { emoji: "📝", title: "Arabic Language", desc: "Quranic Arabic, grammar (Nahw & Sarf), vocabulary and understanding" },
                  { emoji: "🕌", title: "Islamic Studies", desc: "Fiqh, Seerah, Aqeedah, Islamic history and Akhlaq (character)" },
                  { emoji: "🤲", title: "Daily Duas for Kids", desc: "Essential supplications with Arabic, transliteration and meaning" },
                ].map((item) => (
                  <div key={item.title} style={{ display: "flex", gap: 14, alignItems: "flex-start", padding: "14px 16px", background: "#fff", borderRadius: 12, border: "1px solid var(--border)" }}>
                    <span style={{ fontSize: "1.5rem", flexShrink: 0 }}>{item.emoji}</span>
                    <div>
                      <div style={{ fontWeight: 700, color: "var(--charcoal)", marginBottom: 2, fontSize: ".95rem" }}>{item.title}</div>
                      <div style={{ color: "var(--muted)", fontSize: ".85rem" }}>{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <div style={{ background: "linear-gradient(135deg, #0a3d28, #0d5436)", borderRadius: 24, padding: 36, textAlign: "center" }}>
                <div style={{ fontSize: "3rem", marginBottom: 16 }}>🕌</div>
                <h3 style={{ fontFamily: "'Playfair Display',serif", color: "#fff", fontSize: "1.4rem", marginBottom: 14 }}>
                  Start with a Free Trial Class
                </h3>
                <p style={{ color: "rgba(255,255,255,.75)", marginBottom: 8, lineHeight: 1.7 }}>
                  We&apos;ll match a Quran teacher based on:
                </p>
                <div style={{ display: "flex", flexDirection: "column", gap: 8, marginBottom: 24, textAlign: "left" }}>
                  {["Your child's age and current level", "Your preferred learning goals", "Your timezone and schedule", "Your preference for male/female teacher"].map((p) => (
                    <div key={p} style={{ display: "flex", gap: 10, alignItems: "center", color: "rgba(255,255,255,.85)", fontSize: ".87rem" }}>
                      <CheckCircle size={15} style={{ color: "var(--gold-lt)", flexShrink: 0 }} /> {p}
                    </div>
                  ))}
                </div>
                <Link href="/online-quran-classes#cta" style={{ display: "block", background: "var(--gold)", color: "var(--charcoal)", padding: "14px", borderRadius: 12, fontWeight: 700, textDecoration: "none", fontSize: "1rem", marginBottom: 12 }}>
                  Book Free Trial Class →
                </Link>
                <div style={{ color: "rgba(255,255,255,.45)", fontSize: ".75rem" }}>No credit card required for the trial</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ padding: "72px 0" }}>
        <div className="max-w-[800px] mx-auto px-4">
          <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: "clamp(1.8rem,3vw,2.2rem)", color: "var(--charcoal)", textAlign: "center", marginBottom: 40 }}>
            Frequently Asked Questions
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {[
              { q: "How do I find an online Quran teacher?", a: "We match you based on level, age, goals, schedule, and tutor preference. Relevant credentials and experience are confirmed for the proposed tutor before enrolment." },
              { q: "How can I confirm a Quran teacher's qualifications?", a: "Ask us about the proposed tutor's qualifications and teaching experience. We confirm the specific credentials relevant to your requested subject before enrolment." },
              { q: "Can I request a female Quran teacher?", a: "Yes. Request a female teacher when registering; subject and schedule availability will be confirmed after your request." },
              { q: "What age groups do Quran teachers teach?", a: "Matching is available for children and adults. We consider the learner's age, current level, and goals when proposing a tutor." },
              { q: "How much does an online Quran teacher cost?", a: `Your first ${TRIAL.durationMinutes}-minute class is free with no credit card required. Monthly plans start at $${PRICING_PLANS[0].monthlyPriceUsd} for one ${PRICING_PLANS[0].sessionMinutes}-minute session per week, and sibling discounts are available.` },
            ].map((item) => (
              <div key={item.q} style={{ background: "var(--ivory)", border: "1px solid var(--border)", borderRadius: 12, padding: "20px 24px" }}>
                <h3 style={{ fontFamily: "'Playfair Display',serif", fontSize: "1rem", color: "var(--charcoal)", marginBottom: 10, fontWeight: 700 }}>{item.q}</h3>
                <p style={{ color: "var(--muted)", fontSize: ".9rem", lineHeight: 1.7, margin: 0 }}>{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="max-w-[1200px] mx-auto px-4 text-center">
          <h2 style={{ fontFamily: "'Playfair Display',serif", color: "#fff", fontSize: "clamp(1.8rem,3vw,2.4rem)", marginBottom: 16 }}>
            Request Your Online Quran Teacher
          </h2>
          <p style={{ color: "rgba(255,255,255,.75)", marginBottom: 28, maxWidth: 520, margin: "0 auto 28px" }}>
            1-on-1 live classes. Free 30-minute trial with no credit card. Tutor availability is confirmed after your request.
          </p>
          <Link href="/online-quran-classes#cta" className="btn-primary-np">
            Book Free Trial Class →
          </Link>
        </div>
      </section>
    </>
  );
}
