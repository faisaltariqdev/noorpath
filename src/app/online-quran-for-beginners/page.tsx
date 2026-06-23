import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle, BookOpen, Clock, Star } from "lucide-react";

export const metadata: Metadata = {
  title: "Online Quran for Beginners — Learn from Zero | NoorPath Academy",
  description: "Learn Quran online from zero with certified teachers. Start Arabic letters, Noorani Qaida and Quran recitation step by step. Free trial.",
  keywords: ["online quran for beginners", "quran for beginners", "learn quran for beginners", "quran beginners course", "start learning quran online", "quran from scratch", "noorani qaida for beginners", "how to learn quran online", "quran learning for beginners adults", "quran basics online"],
  alternates: { canonical: "https://www.noorpath.online/online-quran-for-beginners" },
  openGraph: {
    title: "Online Quran for Beginners — Learn from Zero | NoorPath Academy",
    description: "Start learning Quran from scratch. Certified teachers, Noorani Qaida, step-by-step for all ages. Free trial class.",
    url: "https://www.noorpath.online/online-quran-for-beginners",
    images: [{ url: "/og-image.svg", width: 1200, height: 630, alt: "Online Quran for Beginners — NoorPath Academy" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Online Quran for Beginners | NoorPath Academy",
    description: "Learn Quran from zero. Noorani Qaida. Certified teachers. Free trial.",
    images: ["/og-image.svg"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Course",
      name: "Online Quran for Beginners — Noorani Qaida Program",
      description: "Beginner Quran program from Arabic letters and Noorani Qaida to Quran recitation with Tajweed for children and adults.",
      provider: {
        "@type": "EducationalOrganization",
        name: "NoorPath Academy",
        url: "https://www.noorpath.online",
      },
      courseMode: "online",
      educationalLevel: "Beginner",
      teaches: "Arabic alphabet, Noorani Qaida, Quran recitation, basic Tajweed",
      typicalAgeRange: "4+",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
        description: "Free 30-minute trial class",
        availability: "https://schema.org/InStock",
      },
      url: "https://www.noorpath.online/online-quran-for-beginners",
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Can I learn Quran online as a complete beginner?",
          acceptedAnswer: { "@type": "Answer", text: "Absolutely. NoorPath Academy specialises in teaching complete beginners. Our Noorani Qaida program starts from the very first Arabic letter and builds up step by step. No prior knowledge of Arabic or Quran is needed." },
        },
        {
          "@type": "Question",
          name: "Where do beginners start when learning Quran online?",
          acceptedAnswer: { "@type": "Answer", text: "Beginners start with Noorani Qaida — a structured book that teaches Arabic letters (Huroof), their pronunciation points (Makharij), vowel signs (Harakat), and basic Tajweed rules. It typically takes 3–6 months to complete, after which students move to Quran recitation." },
        },
        {
          "@type": "Question",
          name: "How long does it take for a beginner to learn to read the Quran?",
          acceptedAnswer: { "@type": "Answer", text: "With regular classes (3–5 times per week), most beginners can read the Quran fluently within 6–12 months. Children typically progress faster than adults. Our certified teachers set personalised goals for each student." },
        },
        {
          "@type": "Question",
          name: "What age is best to start learning Quran online?",
          acceptedAnswer: { "@type": "Answer", text: "The Prophet Muhammad ﷺ said to teach children the Quran. Children as young as 4 can begin learning Arabic letters and duas. However, it's never too late — we have students starting in their 50s, 60s, and beyond. The best age is now!" },
        },
        {
          "@type": "Question",
          name: "Is online Quran learning effective for beginners?",
          acceptedAnswer: { "@type": "Answer", text: "Yes — our 1-on-1 live online classes are highly effective for beginners. The teacher focuses 100% on your child (or you), correcting pronunciation immediately, customising the pace, and providing immediate feedback. Our 12,000+ students worldwide are proof of the results." },
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.noorpath.online" },
        { "@type": "ListItem", position: 2, name: "Online Quran for Beginners", item: "https://www.noorpath.online/online-quran-for-beginners" },
      ],
    },
  ],
};

const steps = [
  { num: "01", title: "Arabic Letters (Huroof)", desc: "Learn all 29 Arabic letters — their shapes, names, and pronunciation points (Makharij). This is the foundation of everything.", duration: "2–4 weeks" },
  { num: "02", title: "Vowel Signs (Harakat)", desc: "Learn Fathah, Kasrah, Dammah and how they change the sound of letters. Start joining letters into syllables.", duration: "2–3 weeks" },
  { num: "03", title: "Noorani Qaida Completion", desc: "Work through the full Noorani Qaida — Tanwin, Sukoon, Shaddah, Madd, and all foundational rules for Quran reading.", duration: "2–4 months" },
  { num: "04", title: "Quran Recitation Begins", desc: "Start reading from Surah Al-Fatiha and short surahs of Juz Amma. Apply pronunciation skills to real Quran verses.", duration: "Ongoing" },
  { num: "05", title: "Basic Tajweed Rules", desc: "Learn the rules of beautiful recitation — Noon Sakinah, Meem Sakinah, Madd rules — to recite the Quran correctly.", duration: "3–6 months" },
  { num: "06", title: "Fluent Quran Reading", desc: "Read the complete Quran fluently from cover to cover, with proper Tajweed, at your own pace.", duration: "6–12 months total" },
];

export default function OnlineQuranBeginnersPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero */}
      <div className="page-hero">
        <div className="max-w-[1200px] mx-auto px-4 page-hero-content">
          <nav aria-label="Breadcrumb" style={{ marginBottom: 16 }}>
            <Link href="/" style={{ color: "var(--gold-lt)", fontSize: ".85rem" }}>Home</Link>
            <span style={{ color: "rgba(255,255,255,.4)", margin: "0 8px" }}>›</span>
            <span style={{ color: "rgba(255,255,255,.6)", fontSize: ".85rem" }}>Online Quran for Beginners</span>
          </nav>
          <span style={{ display: "inline-block", background: "rgba(255,255,255,.08)", border: "1px solid rgba(255,255,255,.2)", color: "rgba(255,255,255,.85)", borderRadius: 50, padding: "5px 16px", fontSize: ".8rem", fontWeight: 600, marginBottom: 16 }}>
            📖 Start from Zero — No Prior Knowledge Needed
          </span>
          <h1>Online Quran for Beginners<br /><em style={{ color: "var(--gold-lt)" }}>From First Letter to Full Recitation</em></h1>
          <p style={{ maxWidth: 600 }}>
            Learn to read the Holy Quran from scratch — Arabic letters, Noorani Qaida, and Tajweed — with a certified teacher in 1-on-1 live classes. For all ages, any timezone.
          </p>
          <div style={{ display: "flex", gap: 12, marginTop: 28, flexWrap: "wrap" }}>
            <Link href="/online-quran-classes#cta" style={{ background: "var(--gold)", color: "var(--charcoal)", padding: "14px 28px", borderRadius: 12, fontWeight: 700, textDecoration: "none", fontSize: "1rem" }}>
              Start Learning Free →
            </Link>
            <Link href="/courses/noorani-qaida-online" style={{ background: "rgba(255,255,255,.1)", border: "1px solid rgba(255,255,255,.3)", color: "#fff", padding: "14px 28px", borderRadius: 12, fontWeight: 600, textDecoration: "none", fontSize: "1rem" }}>
              View Noorani Qaida Course
            </Link>
          </div>
          <div style={{ display: "flex", gap: 20, marginTop: 28, flexWrap: "wrap" }}>
            {[
              { icon: <BookOpen size={14} />, label: "No prior knowledge needed" },
              { icon: <Star size={14} />, label: "Ages 4 to seniors" },
              { icon: <Clock size={14} />, label: "Free 30-min trial" },
            ].map((item) => (
              <span key={String(item.label)} style={{ display: "flex", alignItems: "center", gap: 6, color: "rgba(255,255,255,.8)", fontSize: ".83rem" }}>
                {item.icon} {item.label}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Step-by-step journey */}
      <section style={{ padding: "72px 0" }}>
        <div className="max-w-[1200px] mx-auto px-4">
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <span style={{ color: "var(--emerald)", fontWeight: 700, fontSize: ".82rem", letterSpacing: "1px", textTransform: "uppercase" }}>Beginner Journey</span>
            <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: "clamp(1.8rem,3.5vw,2.4rem)", color: "var(--charcoal)", marginTop: 8 }}>
              Your Step-by-Step Path to Reading the Quran
            </h2>
            <p style={{ color: "var(--muted)", marginTop: 10, maxWidth: 580, margin: "10px auto 0" }}>
              Every beginner follows the same proven path. Our certified teachers guide you through each step at your own pace.
            </p>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 20, maxWidth: 820, margin: "0 auto" }}>
            {steps.map((step, i) => (
              <div key={step.num} style={{ display: "flex", gap: 24, alignItems: "flex-start", padding: "24px 28px", background: i % 2 === 0 ? "#fff" : "var(--ivory)", border: "1px solid var(--border)", borderRadius: 16 }}>
                <div style={{ flexShrink: 0, width: 52, height: 52, background: "linear-gradient(135deg, var(--emerald), var(--emerald-mid))", borderRadius: 14, display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontWeight: 800, fontSize: "1rem" }}>
                  {step.num}
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: 8, marginBottom: 6 }}>
                    <h3 style={{ fontFamily: "'Playfair Display',serif", fontSize: "1.05rem", color: "var(--charcoal)", margin: 0 }}>{step.title}</h3>
                    <span style={{ background: "rgba(10,110,79,.1)", color: "var(--emerald)", borderRadius: 20, padding: "3px 12px", fontSize: ".75rem", fontWeight: 700, flexShrink: 0 }}>{step.duration}</span>
                  </div>
                  <p style={{ color: "var(--muted)", fontSize: ".88rem", lineHeight: 1.65, margin: 0 }}>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: 40 }}>
            <Link href="/online-quran-classes#cta" style={{ display: "inline-block", background: "var(--emerald)", color: "#fff", padding: "14px 32px", borderRadius: 12, fontWeight: 700, textDecoration: "none", fontSize: ".95rem" }}>
              Start Your Journey — Free Trial →
            </Link>
          </div>
        </div>
      </section>

      {/* Why start now */}
      <section style={{ padding: "72px 0", background: "var(--ivory)" }}>
        <div className="max-w-[1200px] mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span style={{ color: "var(--emerald)", fontWeight: 700, fontSize: ".82rem", letterSpacing: "1px", textTransform: "uppercase" }}>Start Today</span>
              <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: "clamp(1.8rem,3vw,2.2rem)", color: "var(--charcoal)", marginTop: 8, marginBottom: 20 }}>
                Why Start Learning Quran Online Now?
              </h2>
              <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                {[
                  { icon: "🕌", title: "Fardh (Obligation)", desc: "Every Muslim is required to read the Quran. The Prophet ﷺ said: 'The best of you are those who learn the Quran and teach it.' — Sahih Bukhari." },
                  { icon: "⏰", title: "Every Day is a Fresh Start", desc: "The best time to start is today. Our beginners progress remarkably fast with our proven 1-on-1 method. Many read fluently within 6 months." },
                  { icon: "🌍", title: "Learn from Anywhere", desc: "Online 1-on-1 classes mean you can learn from the comfort of your home, regardless of where you live in the world." },
                  { icon: "👨‍👩‍👧‍👦", title: "Teach Your Children Too", desc: "Parents who learn alongside their children make 3x more progress. Our family plans allow the whole family to learn together." },
                ].map((item) => (
                  <div key={item.title} style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
                    <span style={{ fontSize: "1.6rem", flexShrink: 0 }}>{item.icon}</span>
                    <div>
                      <div style={{ fontWeight: 700, color: "var(--charcoal)", marginBottom: 2 }}>{item.title}</div>
                      <div style={{ fontSize: ".87rem", color: "var(--muted)", lineHeight: 1.65 }}>{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="content-card" style={{ padding: 32 }}>
              <h3 style={{ fontFamily: "'Playfair Display',serif", fontSize: "1.3rem", color: "var(--charcoal)", marginBottom: 20 }}>
                What Beginners Achieve at NoorPath
              </h3>
              {[
                { label: "Month 1", outcome: "Complete Arabic alphabet with correct pronunciation" },
                { label: "Month 2–3", outcome: "Noorani Qaida completed — ready for Quran" },
                { label: "Month 4–6", outcome: "Reading Quran with basic Tajweed rules" },
                { label: "Month 7–12", outcome: "Reading full Quran fluently cover to cover" },
                { label: "Year 2+", outcome: "Advanced Tajweed or begin Hifz journey" },
              ].map((item) => (
                <div key={item.label} style={{ display: "flex", gap: 14, alignItems: "flex-start", padding: "12px 0", borderBottom: "1px solid var(--border)" }}>
                  <div style={{ flexShrink: 0, background: "rgba(10,110,79,.1)", color: "var(--emerald)", borderRadius: 8, padding: "4px 10px", fontSize: ".78rem", fontWeight: 700, whiteSpace: "nowrap" }}>{item.label}</div>
                  <div style={{ fontSize: ".88rem", color: "var(--slate)", lineHeight: 1.5 }}>
                    <CheckCircle size={13} style={{ display: "inline", color: "var(--emerald)", marginRight: 6 }} />
                    {item.outcome}
                  </div>
                </div>
              ))}
              <Link href="/online-quran-classes#cta" style={{ display: "block", textAlign: "center", background: "var(--emerald)", color: "#fff", padding: "13px", borderRadius: 10, fontWeight: 700, textDecoration: "none", marginTop: 20, fontSize: ".95rem" }}>
                Start Your Journey Free →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ padding: "72px 0" }}>
        <div className="max-w-[760px] mx-auto px-4">
          <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: "2rem", color: "var(--charcoal)", textAlign: "center", marginBottom: 36 }}>
            Beginner Questions Answered
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            {[
              { q: "Can I learn Quran online as a complete beginner?", a: "Absolutely. NoorPath Academy specialises in complete beginners. Our Noorani Qaida program starts from the very first letter with no prior knowledge of Arabic required." },
              { q: "Where do I start when learning Quran from scratch?", a: "Beginners start with Noorani Qaida — learning Arabic letters, pronunciation, vowel signs, and foundational rules. This typically takes 3–6 months before moving to Quran recitation." },
              { q: "How long does it take a beginner to read the Quran?", a: "With regular classes (3–5 times per week), most beginners can read Quran fluently within 6–12 months. Children often progress faster. Our teachers set personalised timelines." },
              { q: "What age is best to start learning Quran?", a: "Age 4+ for children. But the Prophet ﷺ said it's never too late — we have students starting in their 50s and 60s. The best time to start is today." },
              { q: "Is online Quran learning effective for beginners?", a: "Yes — 1-on-1 live classes are highly effective because the teacher focuses solely on your child, corrects pronunciation immediately, and adapts the pace to their learning speed." },
              { q: "Do I need special equipment to learn Quran online?", a: "Just a smartphone, tablet, or laptop with Zoom installed. No special equipment needed. The teacher shares their screen for the Quran/Qaida book. That's all you need." },
            ].map((item) => (
              <div key={item.q} style={{ background: "var(--ivory)", border: "1px solid var(--border)", borderRadius: 12, padding: "18px 22px" }}>
                <h3 style={{ fontFamily: "'Playfair Display',serif", fontWeight: 700, fontSize: ".95rem", color: "var(--charcoal)", marginBottom: 8 }}>{item.q}</h3>
                <p style={{ color: "var(--muted)", fontSize: ".88rem", lineHeight: 1.7, margin: 0 }}>{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="max-w-[1200px] mx-auto px-4 text-center">
          <h2 style={{ fontFamily: "'Playfair Display',serif", color: "#fff", fontSize: "clamp(1.8rem,3vw,2.4rem)", marginBottom: 16 }}>
            Begin Your Quran Journey Today
          </h2>
          <p style={{ color: "rgba(255,255,255,.75)", marginBottom: 28, maxWidth: 520, margin: "0 auto 28px" }}>
            Join 12,000+ students who started as complete beginners and now recite Quran beautifully. Your first class is free.
          </p>
          <Link href="/online-quran-classes#cta" className="btn-primary-np">
            Book Free Trial Class →
          </Link>
        </div>
      </section>
    </>
  );
}
