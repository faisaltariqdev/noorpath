import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Online Quran & Islamic Courses — All Programs",
  description: "Browse all NoorPath Academy courses — Noorani Qaida, Tajweed, Hifz, Arabic language, Islamic studies, daily duas for kids. Certified tutors, family plans. Free trial.",
  alternates: { canonical: "https://www.noorpath.online/courses" },
};

const courses = [
  {
    slug: "noorani-qaida-online",
    icon: "📖",
    title: "Noorani Qaida Online",
    desc: "The proven first step for Quran beginners — master Arabic letters, pronunciation, and foundations before moving to Quran recitation.",
    features: ["Arabic alphabet from scratch", "Correct Makharij (pronunciation points)", "Harakat and vowel signs", "Tanwin and Sukoon rules", "Suitable for children from age 4"],
    level: "Complete Beginner",
    age: "Ages 4+",
  },
  {
    slug: "tajweed-classes-online",
    icon: "🎵",
    title: "Tajweed Classes Online",
    desc: "Learn the rules of beautiful Quran recitation — Noon Sakinah, Madd, Ghunna, and all major Tajweed principles with practice.",
    features: ["All major Tajweed rules explained", "Audio examples with certified Qari", "Step-by-step rule application", "Practice with actual Quran verses", "Ijazah track available"],
    level: "Beginner to Advanced",
    age: "All ages",
  },
  {
    slug: "hifz-program-online",
    icon: "🧠",
    title: "Hifz Program Online",
    desc: "Complete Quran memorization program with structured daily lessons, revision system, and Sanad preparation — Juz by Juz.",
    features: ["Structured Juz memorization plan", "Daily new + revision sessions", "Sabaq and Sabqi system", "Weekly revision tests", "Sanad and Ijazah certification track"],
    level: "Intermediate to Advanced",
    age: "Ages 7+",
  },
  {
    slug: "quran-classes-for-kids",
    icon: "🌙",
    title: "Quran Classes for Kids",
    desc: "Our All-in-One kids programme — Noorani Qaida, daily duas, Hadith, and Islamic values all in one fun weekly session.",
    features: ["Noorani Qaida or Quran recitation", "20 essential daily duas", "Short Hadith for character building", "Islamic manners and values", "Weekly parent progress report"],
    level: "Beginner",
    age: "Ages 4–12",
  },
  {
    slug: "arabic-language-online",
    icon: "📝",
    title: "Arabic Language Online",
    desc: "Learn Quranic and Modern Standard Arabic — understand the Quran in its original language, build grammar and vocabulary step by step.",
    features: ["Quranic Arabic fundamentals", "Arabic grammar (Nahw & Sarf)", "Vocabulary building", "Quranic word understanding", "Conversational Arabic (optional)"],
    level: "Beginner to Advanced",
    age: "All ages",
  },
  {
    slug: "islamic-studies-online",
    icon: "🕌",
    title: "Islamic Studies Online",
    desc: "Comprehensive Islamic education — Fiqh, Aqeedah, Seerah, Islamic history, and character development for children and adults.",
    features: ["Islamic pillars and Fiqh basics", "Seerah (Prophet's biography)", "Aqeedah (Islamic beliefs)", "Islamic history and civilization", "Character and morals (Akhlaq)"],
    level: "All levels",
    age: "All ages",
  },
  {
    slug: "daily-duas-for-kids",
    icon: "🤲",
    title: "Daily Duas for Kids",
    desc: "Teach your children the most important daily Islamic supplications — with Arabic, transliteration, meaning, and fun memorization methods.",
    features: ["Morning and evening duas", "Mealtime duas", "Sleep and waking duas", "Travel and protection duas", "Fun memorization games"],
    level: "Beginner",
    age: "Ages 3–10",
  },
];

export default function CoursesPage() {
  return (
    <>
      <div className="page-hero">
        <div className="max-w-[1200px] mx-auto px-4 page-hero-content">
          <nav aria-label="Breadcrumb" style={{ marginBottom: 16 }}>
            <Link href="/" style={{ color: "var(--gold-lt)", fontSize: ".85rem" }}>Home</Link>
            <span style={{ color: "rgba(255,255,255,.4)", margin: "0 8px" }}>›</span>
            <span style={{ color: "rgba(255,255,255,.6)", fontSize: ".85rem" }}>Courses</span>
          </nav>
          <h1>Online Quran & Islamic Courses</h1>
          <p>From complete beginners to advanced Hifz students — certified tutors, flexible schedules, family plans. Start with a free 30-minute trial.</p>
        </div>
      </div>

      <section>
        <div className="max-w-[1200px] mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {courses.map((c) => (
              <div key={c.slug} className="content-card">
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 16 }}>
                  <div style={{ fontSize: "2.5rem" }}>{c.icon}</div>
                  <div style={{ textAlign: "right" }}>
                    <div style={{ fontSize: ".72rem", color: "var(--muted)", fontWeight: 600, textTransform: "uppercase", marginBottom: 2 }}>{c.age}</div>
                    <span style={{ background: "rgba(10,110,79,.1)", color: "var(--emerald)", fontSize: ".72rem", fontWeight: 600, padding: "3px 10px", borderRadius: 50 }}>{c.level}</span>
                  </div>
                </div>
                <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: "1.2rem", color: "var(--charcoal)", marginBottom: 10 }}>{c.title}</h2>
                <p style={{ color: "var(--muted)", fontSize: ".88rem", lineHeight: 1.65, marginBottom: 16 }}>{c.desc}</p>
                <ul style={{ listStyle: "none", padding: 0, margin: "0 0 20px 0", display: "flex", flexDirection: "column", gap: 8 }}>
                  {c.features.map((f) => (
                    <li key={f} style={{ display: "flex", alignItems: "center", gap: 8, fontSize: ".85rem", color: "var(--slate)" }}>
                      <CheckCircle size={14} style={{ color: "var(--emerald)", flexShrink: 0 }} /> {f}
                    </li>
                  ))}
                </ul>
                <div style={{ display: "flex", gap: 10 }}>
                  <Link href={`/courses/${c.slug}`} style={{ flex: 1, textAlign: "center", background: "var(--emerald)", color: "#fff", padding: "11px 0", borderRadius: 10, fontWeight: 700, textDecoration: "none", fontSize: ".88rem" }}>
                    Learn More
                  </Link>
                  <Link href="/online-quran-classes#cta" style={{ flex: 1, textAlign: "center", background: "var(--gold)", color: "var(--charcoal)", padding: "11px 0", borderRadius: 10, fontWeight: 700, textDecoration: "none", fontSize: ".88rem" }}>
                    Free Trial →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
