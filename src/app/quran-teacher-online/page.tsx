import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle, Star, Shield, Clock, Users, Award } from "lucide-react";

export const metadata: Metadata = {
  title: "Online Quran Teacher — Certified 1-on-1 Tutors | NoorPath Academy",
  description: "Find a certified online Quran teacher for your child or yourself. All tutors hold Ijazah certification. 1-on-1 live classes, female teachers available. Free 30-min trial.",
  keywords: ["online quran teacher", "quran teacher online", "certified quran teacher", "quran tutor online", "online quran tutor", "find quran teacher", "quran teacher for kids", "female quran teacher online", "ijazah certified quran teacher", "1 on 1 quran teacher"],
  alternates: { canonical: "https://www.noorpath.online/quran-teacher-online" },
  openGraph: {
    title: "Online Quran Teacher — Certified 1-on-1 Tutors | NoorPath Academy",
    description: "Certified online Quran teachers for kids & adults. Ijazah-certified, female tutors available, flexible schedules. Book free trial.",
    url: "https://www.noorpath.online/quran-teacher-online",
    images: [{ url: "/og-image.svg", width: 1200, height: 630, alt: "Online Quran Teacher — NoorPath Academy" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Online Quran Teacher | NoorPath Academy",
    description: "Certified 1-on-1 Quran teachers. Free trial. Female tutors available.",
    images: ["/og-image.svg"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      name: "Online Quran Teacher — 1-on-1 Live Classes",
      description: "Certified online Quran teachers providing 1-on-1 live classes for children, adults, and families worldwide. All tutors hold Ijazah certification.",
      provider: {
        "@type": "EducationalOrganization",
        name: "NoorPath Academy",
        url: "https://www.noorpath.online",
        telephone: "+923124877906",
        email: "info@noorpath.online",
      },
      serviceType: "Online Quran Teaching",
      areaServed: "Worldwide",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
        description: "Free 30-minute trial class",
        availability: "https://schema.org/InStock",
      },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.9",
        reviewCount: "2400",
        bestRating: "5",
      },
      url: "https://www.noorpath.online/quran-teacher-online",
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "How do I find a certified online Quran teacher?",
          acceptedAnswer: { "@type": "Answer", text: "At NoorPath Academy, we match you with a certified Quran teacher based on your level, age, goals, and preferred schedule. All tutors are pre-screened, hold Ijazah certification, and have teaching experience. Simply book a free trial and we'll assign the best teacher for your needs." },
        },
        {
          "@type": "Question",
          name: "Are the Quran teachers qualified and certified?",
          acceptedAnswer: { "@type": "Answer", text: "Yes. Every NoorPath teacher holds Ijazah in Quran recitation (Hafs 'an 'Asim), or holds qualifications from Al-Azhar University. All teachers are background-verified, undergo teaching trials, and receive ongoing performance evaluation." },
        },
        {
          "@type": "Question",
          name: "Are female Quran teachers available?",
          acceptedAnswer: { "@type": "Answer", text: "Absolutely. We have a dedicated pool of certified female Quran teachers available for sisters and daughters. You can specifically request a female teacher when booking your trial class." },
        },
        {
          "@type": "Question",
          name: "What does an online Quran teacher teach?",
          acceptedAnswer: { "@type": "Answer", text: "Our online Quran teachers teach: Noorani Qaida (beginners), Quran recitation with Tajweed, Quran Hifz (memorization), Arabic language, Islamic studies (Fiqh, Seerah, Aqeedah), and daily duas for children." },
        },
        {
          "@type": "Question",
          name: "How much does an online Quran teacher cost?",
          acceptedAnswer: { "@type": "Answer", text: "NoorPath Academy offers competitive monthly plans. Your first class is completely free (no credit card needed). After the trial, monthly plans start from an affordable rate based on your schedule. Family discounts are available for 2+ siblings." },
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
  { name: "Ustadh Ahmad", spec: "Tajweed & Hifz", exp: "8 years", students: "240+", rating: 4.9, gender: "Male", cert: "Ijazah — Hafs" },
  { name: "Ustadha Maryam", spec: "Kids & Beginners", exp: "6 years", students: "180+", rating: 5.0, gender: "Female", cert: "Al-Azhar Certified" },
  { name: "Ustadh Ibrahim", spec: "Arabic & Tafseer", exp: "10 years", students: "310+", rating: 4.9, gender: "Male", cert: "Ijazah — Multiple" },
  { name: "Ustadha Khadijah", spec: "Female Classes", exp: "7 years", students: "200+", rating: 5.0, gender: "Female", cert: "Ijazah — Hafs" },
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
            ⭐ 4.9/5 Rating — 2,400+ Reviews
          </span>
          <h1>Online Quran Teacher<br /><em style={{ color: "var(--gold-lt)" }}>Certified &amp; Ijazah-Verified</em></h1>
          <p style={{ maxWidth: 600 }}>
            Connect with a certified online Quran teacher for 1-on-1 live classes — for your child, yourself, or the whole family. Flexible schedules, all timezones, female teachers available.
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
            {["✅ Ijazah Certified", "✅ Free Trial Class", "✅ Female Teachers", "✅ All Ages", "✅ 40+ Countries"].map((t) => (
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
              { icon: <Award size={28} />, title: "Ijazah Certified", desc: "Every teacher holds a verified Ijazah (chain of transmission) in Quran recitation — the highest standard of Quranic teaching certification." },
              { icon: <Shield size={28} />, title: "Background Verified", desc: "All tutors undergo strict background checks, teaching trials, and are interviewed before being allowed to teach any student." },
              { icon: <Users size={28} />, title: "Female Teachers Available", desc: "Dedicated pool of certified female Quran teachers for sisters, daughters, and families who prefer female instruction." },
              { icon: <Clock size={28} />, title: "Any Timezone", desc: "Classes available 7 days a week across all timezones — USA, UK, Canada, Australia, UAE, Pakistan and 40+ more countries." },
              { icon: <Star size={28} />, title: "Specialist Teachers", desc: "Need a specialist for Tajweed? Hifz? Kids? Arabic? We match you with the teacher who specialises in exactly what you need." },
              { icon: <CheckCircle size={28} />, title: "Monthly Evaluation", desc: "Every teacher is evaluated monthly based on student progress, punctuality, parent feedback, and teaching methodology." },
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
              Meet Some of Our Teachers
            </h2>
            <p style={{ color: "var(--muted)", marginTop: 10 }}>All teachers are certified, background-verified, and rated by real students.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {tutorProfiles.map((t) => (
              <div key={t.name} className="content-card" style={{ textAlign: "center" }}>
                <div style={{ width: 72, height: 72, background: "linear-gradient(135deg, var(--emerald), var(--emerald-mid))", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 14px", color: "#fff", fontSize: "1.8rem" }}>
                  {t.gender === "Female" ? "👩‍🏫" : "👨‍🏫"}
                </div>
                <h3 style={{ fontFamily: "'Playfair Display',serif", fontSize: "1rem", color: "var(--charcoal)", marginBottom: 4 }}>{t.name}</h3>
                <div style={{ color: "var(--emerald)", fontSize: ".8rem", fontWeight: 700, marginBottom: 4 }}>{t.spec}</div>
                <div style={{ color: "var(--muted)", fontSize: ".78rem", marginBottom: 8 }}>{t.cert}</div>
                <div style={{ display: "flex", justifyContent: "center", gap: 12, fontSize: ".78rem", color: "var(--muted)" }}>
                  <span>👥 {t.students}</span>
                  <span>⭐ {t.rating}</span>
                  <span>📅 {t.exp}</span>
                </div>
              </div>
            ))}
          </div>
          <p style={{ textAlign: "center", color: "var(--muted)", marginTop: 24, fontSize: ".9rem" }}>
            + 50 more certified teachers available. We match you with the right teacher for your goals.
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
                Our Quran Teachers Cover Every Subject
              </h2>
              <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                {[
                  { emoji: "📖", title: "Noorani Qaida", desc: "Arabic letters, Makharij, Harakat — for complete beginners from age 4" },
                  { emoji: "🎵", title: "Tajweed Rules", desc: "All major Tajweed rules with practice — Noon Sakinah, Madd, Ghunna" },
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
                  We&apos;ll match you with the perfect Quran teacher based on:
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
                <div style={{ color: "rgba(255,255,255,.45)", fontSize: ".75rem" }}>No credit card · Cancel anytime</div>
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
              { q: "How do I find a certified online Quran teacher?", a: "We match you with a certified teacher at NoorPath Academy based on your level, age, goals, and schedule preferences. All tutors hold Ijazah and are background verified. Book a free trial and we handle the matching." },
              { q: "Are the Quran teachers actually qualified?", a: "Yes. Every NoorPath teacher holds Ijazah in Quran recitation (chain of transmission to the Prophet ﷺ) or Al-Azhar qualifications. They're background-verified, interviewed, and undergo monthly performance evaluations." },
              { q: "Can I have a female Quran teacher?", a: "Absolutely. We have a full pool of certified female Quran teachers for sisters and daughters. Simply request a female teacher when registering." },
              { q: "What age groups do Quran teachers teach?", a: "From age 4 (toddlers) to seniors. We have specialist teachers for young children, school-age kids, teenagers, adults, and elderly learners — each with age-appropriate teaching methods." },
              { q: "How much does an online Quran teacher cost?", a: "Your first 30-minute class is free. After the trial, affordable monthly plans are available. Family discounts apply for 2+ siblings. Contact us for a personalised quote based on your schedule and goals." },
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
            Find Your Certified Quran Teacher Today
          </h2>
          <p style={{ color: "rgba(255,255,255,.75)", marginBottom: 28, maxWidth: 520, margin: "0 auto 28px" }}>
            1-on-1 live classes. Ijazah certified tutors. Free 30-minute trial. No commitment, no credit card.
          </p>
          <Link href="/online-quran-classes#cta" className="btn-primary-np">
            Book Free Trial Class →
          </Link>
        </div>
      </section>
    </>
  );
}
