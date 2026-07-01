import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle, Clock, Users, Award, Star } from "lucide-react";
import { courses } from "@/data/courses";
import { ORGANIZATION_REF } from "@/lib/organizationSchema";

export const metadata: Metadata = {
  title: { absolute: "Online Quran & Islamic Courses — All Programs | NoorPath Academy 2026" },
  description:
    "Browse 7 certified online Quran courses: Noorani Qaida, Tajweed, Hifz, Arabic, Islamic studies, kids classes & daily duas. Ijazah tutors, free 30-min trial. UK, USA, Canada, Australia.",
  keywords: [
    "online quran courses", "quran classes online", "noorani qaida online", "tajweed classes online",
    "hifz program online", "arabic language online", "islamic studies online", "quran for kids online",
    "online quran tutor", "quran learning programs", "best online quran course", "certified quran teacher online",
  ],
  alternates: { canonical: "https://www.noorpath.online/courses" },
  openGraph: {
    title: "Online Quran & Islamic Courses — All Programs | NoorPath Academy",
    description: "7 certified courses: Noorani Qaida, Tajweed, Hifz, Arabic, Islamic Studies & more. Ijazah tutors, family plans. Free trial.",
    url: "https://www.noorpath.online/courses",
    images: [{ url: "/og-image.svg", width: 1200, height: 630, alt: "Online Quran Courses — NoorPath Academy" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Online Quran & Islamic Courses | NoorPath Academy",
    description: "7 courses: Qaida, Tajweed, Hifz, Arabic, Islamic Studies. Certified tutors. Free trial.",
    images: ["/og-image.svg"],
  },
};

const faqs = [
  { q: "Which Quran course should I start with?", a: "If your child or you have no Arabic reading ability, start with Noorani Qaida — it teaches the Arabic alphabet and pronunciation from scratch. If you can already read Arabic but want to improve recitation, start with the Tajweed course. If you want memorization, the Hifz Program is for you. Book a free trial and your tutor will recommend the right starting point." },
  { q: "How long does each course take to complete?", a: "Noorani Qaida: 3–6 months (3 sessions/week). Tajweed: 6–12 months. Hifz (full Quran): 2–5 years depending on age and pace. Arabic Language: 6–18 months. Islamic Studies: ongoing program. Course duration varies by student age, sessions per week, and practice time." },
  { q: "Can my child take multiple courses at once?", a: "Yes. Many families enroll children in Noorani Qaida + Daily Duas, or Quran recitation + Islamic Studies simultaneously. Our tutors can combine related subjects in a single session or schedule separate sessions for each subject." },
  { q: "Are the courses available for adults?", a: "All courses are available for adults. We have adult-specialist tutors who are experienced working with adult learners — patient, non-judgmental, and skilled at teaching busy adults who juggle work and family. Many adults start from zero with Noorani Qaida." },
  { q: "Do courses include female Quran teachers?", a: "Yes. Every course at NoorPath Academy is available with certified female tutors (Hafiza). Simply request a female teacher when booking, and we will assign a certified female tutor for all lessons." },
  { q: "How much do the courses cost?", a: "Plans start from $29/month (1 session/week). Standard plan with 2 sessions/week is $49/month. Family discounts are available for 2+ siblings. Your first 30-minute trial class is always free — no credit card required." },
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
          description: c.desc,
          url: `https://www.noorpath.online/courses/${c.slug}`,
          provider: ORGANIZATION_REF,
          educationalLevel: c.level,
          typicalAgeRange: c.age,
          courseMode: "online",
          teaches: c.features.join(", "),
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
            From complete beginners to advanced Hifz students — 7 certified courses with Ijazah-qualified tutors, flexible schedules, family plans, and female teachers on request.{" "}
            <strong style={{ color: "var(--gold-lt)" }}>First class is free.</strong>
          </p>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 20, alignItems: "center" }}>
            <Link href="/online-quran-classes#cta" className="btn-primary-np">Book Free Trial →</Link>
            <span style={{ color: "rgba(255,255,255,.7)", fontSize: ".85rem", display: "flex", alignItems: "center", gap: 6 }}>
              <Star size={14} fill="var(--gold)" color="var(--gold)" /> 4.9/5 · 12,000+ students
            </span>
          </div>
        </div>
      </div>

      <section>
        <div className="max-w-[1200px] mx-auto px-4">

          {/* Trust stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {[
              { value: "7", label: "Certified courses" },
              { value: "250+", label: "Ijazah-certified tutors" },
              { value: "$29/mo", label: "Starting price" },
              { value: "Free", label: "First trial class" },
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
                <p style={{ color: "var(--muted)", fontSize: ".88rem", lineHeight: 1.65, marginBottom: 16 }}>{c.desc}</p>
                <ul style={{ listStyle: "none", padding: 0, margin: "0 0 20px 0", display: "flex", flexDirection: "column", gap: 8 }}>
                  {c.features.map((f) => (
                    <li key={f} style={{ display: "flex", alignItems: "center", gap: 8, fontSize: ".85rem", color: "var(--slate)" }}>
                      <CheckCircle size={14} style={{ color: "var(--emerald)", flexShrink: 0 }} /> {f}
                    </li>
                  ))}
                </ul>
                <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 16, fontSize: ".8rem", color: "var(--muted)" }}>
                  <span style={{ display: "flex", alignItems: "center", gap: 4 }}><Clock size={13} style={{ color: "var(--emerald)" }} /> {c.duration}</span>
                  <span style={{ display: "flex", alignItems: "center", gap: 4 }}><Users size={13} style={{ color: "var(--emerald)" }} /> {c.sessionsPerWeek}</span>
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
            <h2 className="section-title">All Courses Taught by <em className="accent">Certified Tutors</em></h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {[
              { icon: <Award size={22} />, title: "Ijazah Certified", desc: "Tutors hold unbroken chain of Quran authorization — the highest standard in Quran teaching." },
              { icon: <Users size={22} />, title: "Female Tutors Available", desc: "Certified female teachers (Hafiza) for sisters and daughters — 100% female sessions." },
              { icon: <CheckCircle size={22} />, title: "Rigorously Vetted", desc: "Background checked, teaching-assessed, and monthly parent-feedback reviewed. Only top 15% are accepted." },
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
