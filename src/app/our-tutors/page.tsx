import type { Metadata } from "next";
import Link from "next/link";
import { Award, Star, Globe, CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Our Certified Quran Tutors — Ijazah & Al-Azhar Qualified | NoorPath Academy",
  description: "Meet NoorPath Academy's certified Quran tutors — all holding Ijazah certification or Al-Azhar University qualifications. Male and female tutors available for all ages.",
  alternates: { canonical: "https://www.noorpath.online/our-tutors" },
  openGraph: {
    title: "Certified Quran Tutors — Ijazah & Al-Azhar Qualified | NoorPath Academy",
    description: "250+ certified Quran tutors. All hold Ijazah or Al-Azhar qualifications. Male & female tutors. Free trial with any tutor.",
    url: "https://www.noorpath.online/our-tutors",
    images: [{ url: "/og-image.svg", width: 1200, height: 630, alt: "NoorPath Academy Certified Tutors" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Certified Quran Tutors | NoorPath Academy",
    description: "250+ Ijazah-certified tutors. Male & female available. Free trial class.",
    images: ["/og-image.svg"],
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
      name: "NoorPath Academy Certified Quran Tutors",
      description: "250+ Ijazah and Al-Azhar certified Quran tutors for online Quran classes.",
      url: "https://www.noorpath.online/our-tutors",
      isPartOf: { "@type": "WebSite", url: "https://www.noorpath.online" },
    },
    {
      "@type": "ItemList",
      name: "NoorPath Academy Quran Tutors",
      itemListElement: [
        {
          "@type": "ListItem", position: 1,
          item: { "@type": "Person", name: "Sheikh Ahmad Hassan", jobTitle: "Quran & Tajweed Specialist", worksFor: { "@type": "Organization", name: "NoorPath Academy" } }
        },
        {
          "@type": "ListItem", position: 2,
          item: { "@type": "Person", name: "Ustadha Maryam Al-Farisi", jobTitle: "Female Quran Teacher", worksFor: { "@type": "Organization", name: "NoorPath Academy" } }
        },
        {
          "@type": "ListItem", position: 3,
          item: { "@type": "Person", name: "Hafiz Muhammad Yusuf", jobTitle: "Hifz Program Specialist", worksFor: { "@type": "Organization", name: "NoorPath Academy" } }
        },
      ],
    },
  ],
};

const tutors = [
  {
    initials: "AH",
    name: "Sheikh Ahmad Hassan",
    title: "Quran & Tajweed Specialist",
    country: "🇪🇬 Egypt",
    cert: "Ijazah — Hafs 'an Asim",
    exp: "12 years",
    students: "800+",
    speciality: "Tajweed, Noorani Qaida, Advanced Quran",
    rating: "4.9",
    color: "#0a6e4f",
    bio: "Sheikh Ahmad completed his Hifz at age 12 and received Ijazah from a direct chain to the Prophet ﷺ. He specialises in teaching Tajweed to adults and teenagers, with a patient, structured approach that has helped 800+ students worldwide.",
    gender: "Male",
    badges: ["Ijazah Certified", "10+ Years Exp", "Adults & Teens"],
  },
  {
    initials: "MF",
    name: "Ustadha Maryam Al-Farisi",
    title: "Female Quran Teacher & Child Specialist",
    country: "🇵🇰 Pakistan",
    cert: "Al-Azhar University Graduate",
    exp: "9 years",
    students: "600+",
    speciality: "Kids Quran, Duas, Islamic Studies",
    rating: "5.0",
    color: "#6366f1",
    bio: "Ustadha Maryam holds an honours degree in Quran Sciences from Al-Azhar and specialises in teaching young children aged 4-10. Her fun, structured approach makes children love learning Arabic and Quran from day one.",
    gender: "Female",
    badges: ["Female Tutor", "Kids Specialist", "Al-Azhar Grad"],
  },
  {
    initials: "MY",
    name: "Hafiz Muhammad Yusuf",
    title: "Hifz Program Director",
    country: "🇪🇬 Egypt",
    cert: "Ijazah — Multiple Riwayaat",
    exp: "15 years",
    students: "400+",
    speciality: "Hifz Memorization, Tajweed, Tafseer",
    rating: "4.9",
    color: "#c9922a",
    bio: "Hafiz Muhammad memorised the entire Quran at age 10 and holds Ijazah in multiple Qira'at. He leads our Hifz program and has helped over 400 students achieve partial or full Quran memorisation — including children as young as 6.",
    gender: "Male",
    badges: ["Ijazah Certified", "Hifz Expert", "15+ Years Exp"],
  },
  {
    initials: "SA",
    name: "Ustadha Sara Abdullah",
    title: "Arabic Language & Islamic Studies Teacher",
    country: "🇸🇦 Saudi Arabia",
    cert: "Arabic Language Degree — Medina University",
    exp: "8 years",
    students: "350+",
    speciality: "Arabic Language, Islamic Studies, Adult Learners",
    rating: "4.8",
    color: "#0d9488",
    bio: "Ustadha Sara graduated from Medina University with a degree in Arabic Language and Islamic Studies. She specialises in teaching Arabic to English-speaking adults who want to understand the Quran in its original language.",
    gender: "Female",
    badges: ["Female Tutor", "Arabic Expert", "Adults Welcome"],
  },
  {
    initials: "IK",
    name: "Qari Ibrahim Al-Khalidi",
    title: "Tajweed & Recitation Expert",
    country: "🇯🇴 Jordan",
    cert: "Ijazah — Qaloon 'an Nafi'",
    exp: "11 years",
    students: "550+",
    speciality: "Tajweed Rules, Beautiful Recitation, Makharij",
    rating: "4.9",
    color: "#8b5cf6",
    bio: "Qari Ibrahim studied at Dar al-Quran in Amman and received Ijazah in the Qaloon recitation. His students are known for their beautiful, melodious Quran recitation. He focuses on Makhraj correction and Tajweed application.",
    gender: "Male",
    badges: ["Ijazah Certified", "Recitation Master", "11+ Years Exp"],
  },
  {
    initials: "FA",
    name: "Ustadha Fatima Al-Rashidi",
    title: "Senior Female Quran Teacher",
    country: "🇦🇪 UAE",
    cert: "Ijazah — Hafs 'an Asim",
    exp: "10 years",
    students: "700+",
    speciality: "Women & Sisters, Tajweed, Quran for Beginners",
    rating: "5.0",
    color: "#f43f5e",
    bio: "Ustadha Fatima is one of our most sought-after female tutors, holding an Ijazah in Hafs 'an Asim. She teaches sisters and daughters exclusively, creating a comfortable, private learning environment especially valued by families.",
    gender: "Female",
    badges: ["Female Only", "Ijazah Certified", "10+ Years Exp"],
  },
];

const qualitySteps = [
  { icon: <Award size={22} />, title: "Application Review", desc: "We screen all applicants for Islamic knowledge, teaching credentials, and Quran qualifications." },
  { icon: <CheckCircle size={22} />, title: "Live Teaching Trial", desc: "Applicants teach a sample class observed by our senior academic team — only 15% pass this stage." },
  { icon: <Star size={22} />, title: "Student Feedback", desc: "Every tutor is monitored monthly through student and parent feedback. Below-average tutors are retrained." },
  { icon: <Globe size={22} />, title: "Background Verification", desc: "All tutors undergo full identity and background verification before teaching any student." },
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
            👨‍🏫 250+ Certified Educators
          </span>
          <h1 style={{ marginTop: 14, maxWidth: 760 }}>
            Meet Our Ijazah-Certified <em style={{ color: "var(--gold-lt)" }}>Quran Tutors</em>
          </h1>
          <p style={{ color: "rgba(255,255,255,.8)", maxWidth: 640, lineHeight: 1.75, marginTop: 14 }}>
            Every NoorPath tutor holds an Ijazah certification or university degree from Al-Azhar or Medina University. Male and female tutors available. You choose who teaches your family.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 12, marginTop: 24 }}>
            {[["250+","Certified Tutors"],["4.9★","Average Rating"],["15%","Acceptance Rate"],["40+","Countries Served"]].map(([n, l]) => (
              <div key={l} style={{ background: "rgba(255,255,255,.08)", border: "1px solid rgba(255,255,255,.14)", borderRadius: 12, padding: "10px 20px", textAlign: "center" }}>
                <div style={{ color: "var(--gold-lt)", fontWeight: 800, fontSize: "1.2rem" }}>{n}</div>
                <div style={{ color: "rgba(255,255,255,.55)", fontSize: ".72rem" }}>{l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Tutor profiles */}
      <section style={{ background: "#fff" }}>
        <div className="max-w-[1200px] mx-auto px-4">
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <span className="section-eyebrow">🌟 Meet the Team</span>
            <h2 className="section-title">Featured <em className="accent">Tutors</em></h2>
            <p className="section-desc center">A sample of our certified educators. You can request a specific tutor or let us match you with the perfect teacher for your level and schedule.</p>
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
                  <span style={{ background: t.gender === "Female" ? "rgba(244,63,94,.08)" : "rgba(99,102,241,.08)", color: t.gender === "Female" ? "#f43f5e" : "#6366f1", borderRadius: 50, padding: "3px 10px", fontSize: ".72rem", fontWeight: 600 }}>{t.gender} Tutor</span>
                </div>

                <p style={{ color: "var(--muted)", fontSize: ".85rem", lineHeight: 1.7, marginBottom: 16, flex: 1 }}>{t.bio}</p>

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8, marginBottom: 18 }}>
                  {[["📍", t.country],["🎓", t.cert],["⏱️", `${t.exp} teaching`],["👨‍🎓", `${t.students} students`]].map(([icon, val]) => (
                    <div key={String(val)} style={{ background: "var(--ivory)", borderRadius: 8, padding: "8px 10px", fontSize: ".76rem", color: "var(--slate)" }}>
                      {icon} {val}
                    </div>
                  ))}
                </div>

                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", borderTop: "1px solid var(--border)", paddingTop: 14 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
                    <span style={{ color: "#f59e0b", fontSize: "1rem" }}>★</span>
                    <span style={{ fontWeight: 700, color: "var(--charcoal)", fontSize: ".9rem" }}>{t.rating}</span>
                    <span style={{ color: "var(--muted)", fontSize: ".75rem" }}>/5.0</span>
                  </div>
                  <Link href="/online-quran-classes#cta" style={{ background: "var(--emerald)", color: "#fff", padding: "8px 18px", borderRadius: 10, fontSize: ".82rem", fontWeight: 600, textDecoration: "none" }}>
                    Book Trial →
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: 48, padding: "36px 24px", background: "var(--ivory)", borderRadius: 20, border: "1px solid var(--border)" }}>
            <h3 style={{ fontFamily: "'Playfair Display',serif", fontSize: "1.5rem", color: "var(--charcoal)", marginBottom: 10 }}>
              250+ More Certified Tutors Available
            </h3>
            <p style={{ color: "var(--muted)", maxWidth: 560, margin: "0 auto 24px", lineHeight: 1.7, fontSize: ".93rem" }}>
              When you book a free trial, we match you with the perfect tutor based on your schedule, age, level, and preference for male or female teacher.
            </p>
            <Link href="/online-quran-classes#cta" className="btn-primary-np">
              🎓 Book Your Free Trial & Get Matched →
            </Link>
          </div>
        </div>
      </section>

      {/* Hiring process */}
      <section style={{ background: "var(--ivory)" }}>
        <div className="max-w-[1200px] mx-auto px-4">
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <span className="section-eyebrow">🔍 Our Vetting Process</span>
            <h2 className="section-title">How We Select Our <em className="accent">Tutors</em></h2>
            <p className="section-desc center">Only 15% of tutor applicants pass our rigorous 4-stage vetting process. Here is how we ensure your family gets the best.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {qualitySteps.map((s, i) => (
              <div key={s.title} style={{ background: "#fff", borderRadius: 16, padding: 24, border: "1px solid var(--border)", position: "relative" }}>
                <div style={{ position: "absolute", top: -14, left: 20, width: 28, height: 28, background: "var(--emerald)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontWeight: 800, fontSize: ".8rem" }}>{i + 1}</div>
                <div style={{ color: "var(--emerald)", marginBottom: 12, marginTop: 8 }}>{s.icon}</div>
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
            Find Your Perfect Tutor — <em style={{ color: "var(--gold-lt)" }}>Free Trial</em>
          </h2>
          <p style={{ color: "rgba(255,255,255,.75)", maxWidth: 580, margin: "0 auto 32px", lineHeight: 1.75, fontSize: ".95rem" }}>
            Try any tutor for free. If you are not happy after your first class, we will match you with a different tutor — at no cost.
          </p>
          <div style={{ display: "flex", gap: 16, flexWrap: "wrap", justifyContent: "center" }}>
            <Link href="/online-quran-classes#cta" style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "linear-gradient(135deg,#c9922a,#d4a030)", color: "#1a1a2e", fontWeight: 700, padding: "15px 32px", borderRadius: 50, textDecoration: "none", fontSize: ".95rem" }}>
              🎓 Book Free Trial Now
            </Link>
            <Link href="/female-quran-teacher-online" style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(255,255,255,.08)", color: "#fff", fontWeight: 600, padding: "15px 28px", borderRadius: 50, textDecoration: "none", border: "1.5px solid rgba(255,255,255,.25)", fontSize: ".93rem" }}>
              👩‍🏫 Female Tutors Only
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
