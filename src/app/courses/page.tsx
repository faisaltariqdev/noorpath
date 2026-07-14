import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle, Users, Award } from "lucide-react";
import { courses } from "@/data/courses";
import { ORGANIZATION_REF } from "@/lib/organizationSchema";
import { PRICING_PLANS, TRIAL } from "@/lib/academyFacts";

export const revalidate = false;

export const metadata: Metadata = {
  title: { absolute: "Online Quran & Islamic Courses — All Programs | NoorPath Academy 2026" },
  description:
    "Browse 7 online Quran courses: Noorani Qaida, Tajweed, Hifz, Arabic, Islamic studies, kids classes and daily duas. Live 1-to-1 lessons and a free 30-minute trial.",
  keywords: [
    "online quran courses", "quran classes online", "noorani qaida online", "tajweed classes online",
    "hifz program online", "arabic language online", "islamic studies online", "quran for kids online",
    "online quran tutor", "quran learning programs", "online quran course", "quran teacher online",
  ],
  alternates: { canonical: "https://www.noorpath.online/courses" },
  openGraph: {
    title: "Online Quran & Islamic Courses — All Programs | NoorPath Academy",
    description: "7 online courses: Noorani Qaida, Tajweed, Hifz, Arabic, Islamic Studies and more. Live 1-to-1 lessons and a free trial.",
    url: "https://www.noorpath.online/courses",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Online Quran Courses — NoorPath Academy" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Online Quran & Islamic Courses | NoorPath Academy",
    description: "7 courses: Qaida, Tajweed, Hifz, Arabic and Islamic Studies. Free 30-minute trial.",
    images: ["/og-image.png"],
  },
};

const courseTrustCopy: Record<string, { desc: string; features: string[]; audience: string }> = {
  "noorani-qaida-online": {
    desc: "Arabic letters, pronunciation, and reading foundations for Quran beginners.",
    features: ["Arabic alphabet from scratch", "Makharij practice", "Harakat and vowel signs", "Tanwin and Sukoon rules", "Suitable for children and adults"],
    audience: "Children and adults",
  },
  "tajweed-classes-online": {
    desc: "Learn and practise Tajweed rules through guided Quran recitation.",
    features: ["Noon and Meem Sakinah", "Madd and Qalqalah", "Ghunna practice", "Live recitation correction", "Rule application in Quran verses"],
    audience: "Children and adults who can read Arabic",
  },
  "hifz-program-online": {
    desc: "Structured Quran memorisation with new lesson planning and ongoing revision.",
    features: ["Individual memorisation plan", "New passage practice", "Recent revision", "Long-term revision", "Pace adjusted after assessment"],
    audience: "Children and adults pursuing Hifz",
  },
  "quran-classes-for-kids": {
    desc: "Quran reading for children with optional Qaida, duas, and Islamic studies topics.",
    features: ["Noorani Qaida or Quran recitation", "Daily duas", "Short Hadith", "Islamic manners and values", "1-to-1 lesson format"],
    audience: "Children ages 4–12",
  },
  "arabic-language-online": {
    desc: "Quranic and Modern Standard Arabic lessons covering grammar and vocabulary.",
    features: ["Quranic Arabic fundamentals", "Arabic grammar", "Vocabulary building", "Quranic word study", "Conversational Arabic requests"],
    audience: "Children and adults",
  },
  "islamic-studies-online": {
    desc: "Islamic studies lessons covering Fiqh, Aqeedah, Seerah, history, and character.",
    features: ["Pillars and Fiqh basics", "Seerah", "Aqeedah", "Islamic history", "Character and morals"],
    audience: "Children and adults",
  },
  "daily-duas-for-kids": {
    desc: "Daily Islamic supplications for children with Arabic, transliteration, and meaning.",
    features: ["Morning and evening duas", "Mealtime duas", "Sleep and waking duas", "Travel duas", "Meaning and memorisation practice"],
    audience: "Children",
  },
};

const faqs = [
  { q: "Which Quran course should I start with?", a: "If your child or you have no Arabic reading ability, start with Noorani Qaida — it teaches the Arabic alphabet and pronunciation from scratch. If you can already read Arabic but want to improve recitation, start with the Tajweed course. If you want memorization, the Hifz Program is for you. Book a free trial and your tutor will recommend the right starting point." },
  { q: "How long does each course take to complete?", a: "Course length varies by starting level, learning goals, lesson frequency, and practice between classes. After assessing the learner, the tutor can explain the recommended sequence without promising a fixed completion date." },
  { q: "Can my child take multiple courses at once?", a: "You can request a learning plan that combines related subjects, such as Noorani Qaida with daily duas or Quran recitation with Islamic studies. The suitable lesson structure is confirmed after the learner's needs are reviewed." },
  { q: "Are the courses available for adults?", a: "Adult learners can request matching for Noorani Qaida, Quran reading, Tajweed, Hifz, Arabic, or Islamic studies. The suitable course and tutor are confirmed after reviewing the learner's level and goals." },
  { q: "Do courses include female Quran teachers?", a: "You can request a female Quran teacher when booking. Availability depends on the subject and schedule and is confirmed after your request." },
  { q: "How much do the courses cost?", a: `Plans start from $${PRICING_PLANS[0].monthlyPriceUsd}/month for ${PRICING_PLANS[0].sessionsPerWeek} session per week. The first ${TRIAL.durationMinutes}-minute trial is free and requires no credit card.` },
];

const coursesJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ItemList",
      "@id": "https://www.noorpath.online/courses#list",
      name: "Online Quran & Islamic Courses — NoorPath Academy",
      description: "Complete list of online Quran and Islamic studies courses offered by NoorPath Academy.",
      url: "https://www.noorpath.online/courses",
      numberOfItems: courses.length,
      itemListElement: courses.map((c, i) => ({
        "@type": "ListItem",
        position: i + 1,
        item: {
          "@type": "Course",
          name: c.title,
          description: courseTrustCopy[c.slug].desc,
          url: `https://www.noorpath.online/courses/${c.slug}`,
          provider: ORGANIZATION_REF,
          educationalLevel: c.level,
          typicalAgeRange: courseTrustCopy[c.slug].audience,
          courseMode: "online",
          teaches: courseTrustCopy[c.slug].features.join(", "),
        },
      })),
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
        { "@type": "ListItem", position: 2, name: "Courses", item: "https://www.noorpath.online/courses" },
      ],
    },
  ],
};

export default function CoursesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(coursesJsonLd) }} />

      {/* Hero */}
      <div className="page-hero">
        <div className="max-w-[1200px] mx-auto px-4 page-hero-content">
          <nav aria-label="Breadcrumb" style={{ marginBottom: 16 }}>
            <Link href="/" style={{ color: "var(--gold-lt)", fontSize: ".85rem" }}>Home</Link>
            <span style={{ color: "rgba(255,255,255,.4)", margin: "0 8px" }}>›</span>
            <span style={{ color: "rgba(255,255,255,.6)", fontSize: ".85rem" }}>Courses</span>
          </nav>
          <h1>Online Quran &amp; Islamic Courses</h1>
          <p>
            From complete beginners to Hifz students — 7 online courses with live 1-to-1 lessons, family plans, and female tutor requests subject to confirmed availability.{" "}
            <strong style={{ color: "var(--gold-lt)" }}>First class is free.</strong>
          </p>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 20, alignItems: "center" }}>
            <Link href="/online-quran-classes#cta" className="btn-primary-np">Book Free Trial →</Link>
            <span style={{ color: "rgba(255,255,255,.7)", fontSize: ".85rem", display: "flex", alignItems: "center", gap: 6 }}>
              Tutor credentials and availability confirmed before enrolment
            </span>
          </div>
        </div>
      </div>

      <section>
        <div className="max-w-[1200px] mx-auto px-4">

          {/* Trust stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {[
              { value: String(courses.length), label: "Online courses" },
              { value: "1-to-1", label: "Live lessons" },
              { value: `$${PRICING_PLANS[0].monthlyPriceUsd}/mo`, label: "Starting price" },
              { value: `${TRIAL.durationMinutes} min`, label: "Free trial" },
            ].map((s) => (
              <div key={s.label} style={{ textAlign: "center", background: "var(--ivory)", border: "1px solid var(--border)", borderRadius: 14, padding: "22px 12px" }}>
                <div style={{ fontSize: "1.5rem", fontWeight: 800, color: "var(--emerald)", lineHeight: 1.2 }}>{s.value}</div>
                <div style={{ fontSize: ".78rem", color: "var(--muted)", marginTop: 4 }}>{s.label}</div>
              </div>
            ))}
          </div>

          {/* Which course intro */}
          <div style={{ textAlign: "center", marginBottom: 16 }}>
            <span className="section-eyebrow">📚 All Programs</span>
            <h2 className="section-title">Choose the Right <em className="accent">Quran Course</em> for You</h2>
            <p className="section-desc center">
              Not sure where to start? Use this quick guide: <strong>No Arabic reading?</strong> → Start with <Link href="/courses/noorani-qaida-online" style={{ color: "var(--emerald)", fontWeight: 600 }}>Noorani Qaida</Link>.{" "}
              <strong>Can read Arabic?</strong> → <Link href="/courses/tajweed-classes-online" style={{ color: "var(--emerald)", fontWeight: 600 }}>Tajweed Classes</Link>.{" "}
              <strong>Memorization goal?</strong> → <Link href="/hifz-quran-online" style={{ color: "var(--emerald)", fontWeight: 600 }}>Hifz Program</Link>.{" "}
              Or book a free trial and your tutor will advise you.
            </p>
          </div>

          {/* Course cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {courses.map((c) => (
              <div key={c.slug} className="content-card">
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 16 }}>
                  <div style={{ fontSize: "2.5rem" }}>{c.icon}</div>
                  <div style={{ textAlign: "right" }}>
                    <div style={{ fontSize: ".72rem", color: "var(--muted)", fontWeight: 600, textTransform: "uppercase", marginBottom: 2 }}>{c.age}</div>
                    <span style={{ background: "rgba(10,110,79,.1)", color: "var(--emerald)", fontSize: ".72rem", fontWeight: 600, padding: "3px 10px", borderRadius: 50 }}>{c.level}</span>
                  </div>
                </div>
                <h2 style={{ fontFamily: "var(--font-playfair), serif", fontSize: "1.2rem", color: "var(--charcoal)", marginBottom: 10 }}>{c.title}</h2>
                <p style={{ color: "var(--muted)", fontSize: ".88rem", lineHeight: 1.65, marginBottom: 16 }}>{courseTrustCopy[c.slug].desc}</p>
                <ul style={{ listStyle: "none", padding: 0, margin: "0 0 20px 0", display: "flex", flexDirection: "column", gap: 8 }}>
                  {courseTrustCopy[c.slug].features.map((f) => (
                    <li key={f} style={{ display: "flex", alignItems: "center", gap: 8, fontSize: ".85rem", color: "var(--slate)" }}>
                      <CheckCircle size={14} style={{ color: "var(--emerald)", flexShrink: 0 }} /> {f}
                    </li>
                  ))}
                </ul>
                <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 16, fontSize: ".8rem", color: "var(--muted)" }}>
                  <span style={{ display: "flex", alignItems: "center", gap: 4 }}><Users size={13} style={{ color: "var(--emerald)" }} /> 1-to-1 online lessons</span>
                </div>
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

          {/* Who are the tutors */}
          <div style={{ textAlign: "center", marginBottom: 32 }}>
            <span className="section-eyebrow"><Award size={13} style={{ display: "inline", verticalAlign: "middle", marginRight: 4 }} /> Tutor Quality</span>
            <h2 className="section-title">Tutor Matching for <em className="accent">Each Learning Goal</em></h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {[
              { icon: <Award size={22} />, title: "Relevant Credentials", desc: "Specific qualifications and teaching experience are confirmed for the proposed tutor before enrolment." },
              { icon: <Users size={22} />, title: "Female Tutor Requests", desc: "Sisters and families may request a female tutor; subject and schedule availability are confirmed after enquiry." },
              { icon: <CheckCircle size={22} />, title: "Trial Before Enrolment", desc: "Use the free 30-minute trial to assess lesson fit before selecting a monthly plan." },
            ].map((f) => (
              <div key={f.title} className="content-card" style={{ textAlign: "center" }}>
                <div style={{ color: "var(--emerald)", display: "flex", justifyContent: "center", marginBottom: 12 }}>{f.icon}</div>
                <h3 style={{ fontFamily: "var(--font-playfair), serif", fontSize: "1rem", fontWeight: 700, marginBottom: 8 }}>{f.title}</h3>
                <p style={{ color: "var(--muted)", fontSize: ".87rem", lineHeight: 1.6, margin: 0 }}>{f.desc}</p>
              </div>
            ))}
          </div>

          {/* FAQ */}
          <div style={{ textAlign: "center", marginBottom: 32 }}>
            <span className="section-eyebrow">❓ FAQ</span>
            <h2 className="section-title">Course <em className="accent">Questions Answered</em></h2>
          </div>
          <div className="max-w-[760px] mx-auto mb-16">
            {faqs.map((f, i) => (
              <details key={i} style={{ borderBottom: "1px solid var(--border)", padding: "18px 0" }}>
                <summary style={{ fontWeight: 600, color: "var(--charcoal)", cursor: "pointer", fontSize: ".95rem", listStyle: "none", display: "flex", justifyContent: "space-between" }}>
                  {f.q} <span style={{ color: "var(--emerald)", marginLeft: 8 }}>+</span>
                </summary>
                <p style={{ color: "var(--muted)", marginTop: 12, lineHeight: 1.75, fontSize: ".9rem" }}>{f.a}</p>
              </details>
            ))}
          </div>

          {/* Related pages */}
          <div style={{ background: "var(--ivory)", border: "1px solid var(--border)", borderRadius: 16, padding: "24px 28px", marginBottom: 48 }}>
            <h3 style={{ fontFamily: "var(--font-playfair), serif", fontSize: "1.1rem", marginBottom: 14, color: "var(--charcoal)" }}>Explore More</h3>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
              {[
                ["/learn-quran-online", "Learn Quran Online"],
                ["/online-quran-classes-for-kids", "Kids Quran Classes"],
                ["/online-quran-classes-for-adults", "Adults Quran Classes"],
                ["/female-quran-teacher-online", "Female Quran Teachers"],
                ["/hifz-quran-online", "Hifz Program"],
                ["/learn-tajweed-online", "Tajweed Online"],
                ["/pricing", "View Pricing"],
              ].map(([href, label]) => (
                <Link key={href as string} href={href as string} style={{ color: "var(--emerald)", fontWeight: 600, fontSize: ".88rem", textDecoration: "none" }}>→ {label}</Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
