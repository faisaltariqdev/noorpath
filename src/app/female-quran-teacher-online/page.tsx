import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import CTAForm from "@/components/CTAForm";
import { ORGANIZATION_REF } from "@/lib/organizationSchema";
import { CheckCircle, Shield, Award, Users, Star, BookOpen, Clock, Heart } from "lucide-react";

export const revalidate = false;

export const metadata: Metadata = {
  title: { absolute: "Female Quran Teacher Online — Certified Hafiza for Sisters & Kids | Free Trial" },
  description:
    "Find a certified female Quran teacher online — Hafiza-qualified tutors for sisters, daughters & girls. Safe 1-on-1 Zoom classes, weekly reports, free trial. UK, USA, Canada, Australia.",
  keywords: [
    "female quran teacher online", "female quran tutor", "online quran teacher for sisters",
    "hafiza tutor online", "female quran classes", "quran classes for girls online",
    "online quran for women", "female quran teacher uk", "female quran teacher usa",
    "quran classes for ladies", "lady quran teacher online", "female islamic teacher online",
    "online quran classes for females", "hafiza online classes", "female hifz teacher online",
    "female quran teacher for kids", "female quran teacher for kids uk",
    "female quran tutor for daughters", "hafiza for kids online", "girl quran teacher online",
  ],
  alternates: { canonical: "https://www.noorpath.online/female-quran-teacher-online" },
  openGraph: {
    title: "Female Quran Teacher Online — Certified Hafiza Tutors | NoorPath Academy",
    description: "Certified female Quran teachers for sisters, daughters & female learners worldwide. Safe 1-on-1 Quran classes online. Free 30-min trial.",
    url: "https://www.noorpath.online/female-quran-teacher-online",
    images: [{ url: "/marketing/female-hafiza-tutor.jpg", width: 1200, height: 800, alt: "Female Quran Teacher Online — NoorPath Academy" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Female Quran Teacher Online | Certified Hafiza Tutors | NoorPath Academy",
    description: "Safe, comfortable 1-on-1 Quran classes for sisters & daughters. Hafiza-certified. Free trial.",
    images: ["/marketing/female-hafiza-tutor.jpg"],
  },
};

const faqs = [
  { q: "Can my daughter learn Quran with a female teacher online?", a: "Yes. NoorPath Academy offers certified female Quran teachers (Hafiza) for girls of all ages — from age 4 through teenagers and adult sisters. All lessons are live 1-on-1 via Zoom with no male presence." },
  { q: "Are the female tutors at NoorPath qualified?", a: "Yes. All female tutors hold Hifz certification (Hafiza) and many hold Ijazah from recognized scholars or Al-Azhar university qualifications. Every tutor is background-verified and evaluated before teaching." },
  { q: "What courses can my daughter study with a female teacher?", a: "All courses are available with female teachers: Noorani Qaida, Quran recitation, Tajweed rules, Hifz program, Arabic language, Islamic studies, daily duas, and Tafseer basics." },
  { q: "How do online Quran classes work for sisters?", a: "Classes run live on Zoom — 1-on-1 with your certified female tutor. You choose a weekly time that suits UK, US, Canadian, Australian or any other timezone. Sessions are private, recorded only with your permission." },
  { q: "Can adult women learn Quran online with a female teacher?", a: "Absolutely. Many adult sisters at NoorPath are learning from scratch for the first time, returning after years, or studying advanced Tajweed and Hifz. Our female tutors are patient, encouraging, and experienced with adult learners." },
  { q: "How much do female Quran classes cost?", a: "Plans start from $29/month for 1 class per week. The first lesson is always a free 30-minute trial with a certified female tutor — no credit card required." },
  { q: "Is there a female Quran teacher available in my timezone?", a: "Yes. NoorPath has female tutors available for UK (GMT/BST), USA (EST/PST/CST), Canada, Australia (AEST), UAE, and 40+ other countries. Evening and after-school slots are available for all timezones." },
  { q: "Can I get a Hifz teacher who is female for my daughter?", a: "Yes. We have certified Hafiza tutors who specialize in Hifz memorization for girls. They use the proven Sabaq-Sabqi-Manzil system — new memorization plus structured revision — tailored to your daughter's pace." },
];

const features = [
  { icon: <Shield size={22} />, title: "100% Female Environment", desc: "All sessions are 1-on-1 with a certified female teacher — no male presence at any point. Safe and comfortable for sisters of all ages." },
  { icon: <Award size={22} />, title: "Hafiza-Certified Tutors", desc: "All female teachers hold Hifz certification (Hafiza). Many also hold Ijazah from recognized scholars or Al-Azhar qualifications." },
  { icon: <Users size={22} />, title: "All Ages Welcome", desc: "Female tutors for girls from age 4, school-age children, teenagers, adult sisters, new mothers, and senior women learning at their own pace." },
  { icon: <BookOpen size={22} />, title: "All Courses Available", desc: "Noorani Qaida, Tajweed, Hifz, Arabic language, Islamic studies, daily duas — every course is available with certified female teachers." },
  { icon: <Clock size={22} />, title: "Flexible Timing", desc: "After-school slots, evening sessions, and weekend classes — available in UK, USA, Canada, Australia, UAE and 40+ countries." },
  { icon: <Heart size={22} />, title: "Patient & Encouraging", desc: "Our female teachers specialize in building confidence. Sisters and daughters progress faster in a comfortable, judgment-free environment." },
];

const courses = [
  { name: "Noorani Qaida", href: "/courses/noorani-qaida-online", desc: "Arabic alphabet to full reading — perfect start for beginners" },
  { name: "Quran Recitation", href: "/online-quran-classes", desc: "Surah-by-surah with live pronunciation correction" },
  { name: "Tajweed Rules", href: "/learn-tajweed-online", desc: "Master the rules of beautiful Quran recitation" },
  { name: "Hifz Program", href: "/hifz-quran-online", desc: "Structured Quran memorization with Hafiza tutor" },
  { name: "Arabic Language", href: "/courses/arabic-language-online", desc: "Understand the Quran in its original language" },
  { name: "Islamic Studies", href: "/courses/islamic-studies-online", desc: "Fiqh, Seerah, Aqeedah & Islamic character" },
  { name: "Daily Duas for Kids", href: "/courses/daily-duas-for-kids", desc: "Morning, evening and daily duas with meaning" },
  { name: "Quran for Adults", href: "/learn-quran-online", desc: "Adult-specific curriculum from zero to fluency" },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": "https://www.noorpath.online/female-quran-teacher-online#service",
      name: "Female Quran Teacher Online — Certified Hafiza Tutors",
      description:
        "Certified female Quran tutors (Hafiza) for sisters, daughters, and female learners worldwide. Safe 1-on-1 Zoom Quran classes — Qaida, Tajweed, Hifz, Arabic. Free trial.",
      provider: ORGANIZATION_REF,
      serviceType: "Online Quran Education",
      audience: { "@type": "Audience", audienceType: "Female Muslim learners — ages 4 to senior" },
      url: "https://www.noorpath.online/female-quran-teacher-online",
      areaServed: { "@type": "Country", name: "Worldwide" },
      offers: {
        "@type": "Offer",
        price: "29",
        priceCurrency: "USD",
        description: "Starting from $29/month. Free 30-min trial.",
      },
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
        { "@type": "ListItem", position: 2, name: "Female Quran Teacher Online", item: "https://www.noorpath.online/female-quran-teacher-online" },
      ],
    },
  ],
};

export default function FemaleQuranTeacherPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero */}
      <div className="page-hero">
        <div className="max-w-[1200px] mx-auto px-4 page-hero-content">
          <nav aria-label="Breadcrumb" style={{ marginBottom: 16 }}>
            <Link href="/" style={{ color: "var(--gold-lt)", fontSize: ".85rem" }}>Home</Link>
            <span style={{ color: "rgba(255,255,255,.4)", margin: "0 8px" }}>›</span>
            <span style={{ color: "rgba(255,255,255,.6)", fontSize: ".85rem" }}>Female Quran Teacher Online</span>
          </nav>
          <h1>Female Quran Teacher Online</h1>
          <p>Certified Hafiza tutors for sisters, daughters, and female learners worldwide. Safe, comfortable <strong style={{ color: "var(--gold-lt)" }}>1-on-1 Quran classes via Zoom</strong> — no male presence, all ages welcome. <strong style={{ color: "var(--gold-lt)" }}>Free 30-minute trial, no credit card.</strong></p>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 24, alignItems: "center" }}>
            <Link href="#cta" className="btn-primary-np">Book Free Trial →</Link>
            <Link href="/online-quran-classes" className="btn-outline-np" style={{ color: "#fff", borderColor: "rgba(255,255,255,.5)" }}>All Classes</Link>
            <span style={{ color: "rgba(255,255,255,.7)", fontSize: ".85rem", display: "flex", alignItems: "center", gap: 6 }}>
              <Star size={14} fill="var(--gold)" color="var(--gold)" /> Trusted by families in 40+ countries
            </span>
          </div>
        </div>
      </div>

      <section>
        <div className="max-w-[1200px] mx-auto px-4">

          {/* Quick Answer */}
          <div style={{ background: "rgba(10,110,79,.06)", borderLeft: "4px solid var(--emerald)", borderRadius: 12, padding: "20px 26px", marginBottom: 28, fontSize: ".95rem", lineHeight: 1.75, color: "#374151" }}>
            <strong style={{ color: "var(--emerald)" }}>Quick answer: </strong>
            Yes — NoorPath Academy has <strong>certified female Quran teachers (Hafiza)</strong> available for sisters and daughters of all ages worldwide. Classes are live 1-on-1 via Zoom, private, and fully female-only. The first 30-minute lesson is free.{" "}
            <a href="#cta" style={{ color: "var(--emerald)", fontWeight: 700 }}>Book free trial →</a>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-10">
            <div style={{ borderRadius: 18, overflow: "hidden", border: "1px solid var(--border)" }}>
              <Image
                src="/marketing/female-hafiza-tutor.jpg"
                alt="Certified female Hafiza teaching a girl Quran online"
                width={900}
                height={600}
                priority
                style={{ width: "100%", height: "auto", display: "block" }}
              />
            </div>
            <div>
              <h2 style={{ fontFamily: "var(--font-playfair), serif", fontSize: "1.4rem", color: "var(--charcoal)", marginBottom: 12 }}>
                A safe, sister-only classroom
              </h2>
              <p style={{ color: "var(--muted)", lineHeight: 1.75, marginBottom: 14 }}>
                Every lesson is private Zoom with a Hafiza tutor — no male presence, no group chat rooms.
                Ideal for daughters, teenage girls, and adult sisters returning to Quran.
              </p>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 8 }}>
                {[
                  "Background-verified Hafiza / Ijazah tutors",
                  "Parents can observe kids' sessions anytime",
                  "UK after-school + worldwide evening slots",
                  "Qaida → Tajweed → Hifz with the same teacher",
                ].map((t) => (
                  <li key={t} style={{ display: "flex", gap: 8, alignItems: "flex-start", fontSize: ".9rem", color: "var(--slate)" }}>
                    <CheckCircle size={16} style={{ color: "var(--emerald)", marginTop: 2, flexShrink: 0 }} /> {t}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="content-card" style={{ marginBottom: 32 }}>
            <h2 style={{ fontFamily: "var(--font-playfair), serif", fontSize: "1.25rem", marginBottom: 8 }}>Female learning path — data parents ask for</h2>
            <p style={{ color: "var(--muted)", fontSize: ".88rem", marginBottom: 14, lineHeight: 1.6 }}>Typical progress when classes are consistent (3–5× / week).</p>
            <div style={{ overflowX: "auto" }}>
              <table style={{ width: "100%", borderCollapse: "collapse", fontSize: ".85rem" }}>
                <thead>
                  <tr style={{ background: "var(--emerald)", color: "#fff" }}>
                    <th style={{ padding: "10px 12px", textAlign: "left" }}>Learner</th>
                    <th style={{ padding: "10px 12px", textAlign: "left" }}>Session</th>
                    <th style={{ padding: "10px 12px", textAlign: "left" }}>First month</th>
                    <th style={{ padding: "10px 12px", textAlign: "left" }}>By month 6</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Girls 4–6", "20–25 min", "Letters + short duas", "Qaida words + Fatiha start"],
                    ["Girls 7–12", "30–40 min", "Qaida / short surahs", "Independent reading + Tajweed"],
                    ["Teen girls", "35–45 min", "Tajweed diagnosis", "Fluent Salah surahs / Hifz option"],
                    ["Adult sisters", "30–45 min", "Confidence + basics", "Personal Quran goals met"],
                  ].map((row) => (
                    <tr key={row[0]} style={{ borderBottom: "1px solid var(--border)" }}>
                      {row.map((cell, i) => (
                        <td key={i} style={{ padding: "10px 12px", fontWeight: i === 0 ? 700 : 400, color: i === 0 ? "var(--charcoal)" : "var(--muted)" }}>{cell}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="content-card" style={{ marginBottom: 40, borderTop: "3px solid var(--emerald)" }}>
            <h2 style={{ fontFamily: "var(--font-playfair), serif", fontSize: "1.35rem", marginBottom: 10 }}>
              Female Quran Teacher for Kids (UK &amp; Worldwide)
            </h2>
            <p style={{ color: "var(--muted)", lineHeight: 1.7, marginBottom: 12 }}>
              Looking for a <strong>female Quran teacher for kids</strong>? Daughters ages 4–12 can learn Noorani Qaida, Tajweed and Hifz with a certified Hafiza —
              including UK after-school slots (4–7pm GMT). Parents observe freely. Read our full guide:{" "}
              <Link href="/blog/female-quran-teacher-for-kids" style={{ color: "var(--emerald)", fontWeight: 700 }}>Female Quran Teacher for Kids</Link>
              {" · "}
              <Link href="/blog/online-hifz-classes-for-kids" style={{ color: "var(--emerald)", fontWeight: 700 }}>Online Hifz for Kids</Link>.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
              {[
                ["/online-quran-classes/london", "London"],
                ["/online-quran-classes/birmingham", "Birmingham"],
                ["/online-quran-classes/bradford", "Bradford"],
                ["/online-quran-classes/manchester", "Manchester"],
                ["/locations/online-quran-classes-uk", "All UK"],
              ].map(([href, label]) => (
                <Link key={href} href={href} style={{ fontSize: ".8rem", fontWeight: 600, color: "var(--emerald)", textDecoration: "none", border: "1px solid var(--border)", borderRadius: 20, padding: "5px 12px", background: "#fff" }}>
                  {label}
                </Link>
              ))}
            </div>
          </div>

          {/* Trust Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {[
              { value: "12,000+", label: "Families worldwide" },
              { value: "4.9/5", label: "Family rating" },
              { value: "100%", label: "Female-only sessions" },
              { value: "40+", label: "Countries served" },
            ].map((s) => (
              <div key={s.label} style={{ textAlign: "center", background: "var(--ivory)", border: "1px solid var(--border)", borderRadius: 14, padding: "22px 12px" }}>
                <div style={{ fontSize: "1.55rem", fontWeight: 800, color: "var(--emerald)", lineHeight: 1.2 }}>{s.value}</div>
                <div style={{ fontSize: ".78rem", color: "var(--muted)", marginTop: 4 }}>{s.label}</div>
              </div>
            ))}
          </div>

          {/* Why choose */}
          <div style={{ textAlign: "center", marginBottom: 40 }}>
            <span className="section-eyebrow">👩‍🏫 Certified Female Tutors</span>
            <h2 className="section-title">Why Families Choose Our <em className="accent">Female Teachers</em></h2>
            <p className="section-desc center">
              At NoorPath Academy, we understand that modesty and comfort are essential in Islamic learning. Our certified female tutors (Hafiza) create a safe, encouraging environment where sisters and daughters thrive.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {features.map((f) => (
              <div key={f.title} className="content-card" style={{ display: "flex", gap: 16 }}>
                <div style={{ color: "var(--emerald)", flexShrink: 0, marginTop: 2 }}>{f.icon}</div>
                <div>
                  <h3 style={{ fontFamily: "var(--font-playfair), serif", fontSize: ".97rem", fontWeight: 700, marginBottom: 6 }}>{f.title}</h3>
                  <p style={{ color: "var(--muted)", fontSize: ".87rem", lineHeight: 1.6, margin: 0 }}>{f.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Courses with female teachers */}
          <h2 style={{ fontFamily: "var(--font-playfair), serif", fontSize: "1.6rem", textAlign: "center", marginBottom: 28 }}>
            All Courses Available with <em className="accent">Female Teachers</em>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
            {courses.map((c) => (
              <Link key={c.name} href={c.href} style={{ textDecoration: "none" }}>
                <div className="content-card" style={{ height: "100%", transition: "transform .15s" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
                    <CheckCircle size={16} style={{ color: "var(--emerald)", flexShrink: 0 }} />
                    <strong style={{ fontSize: ".92rem", color: "var(--charcoal)" }}>{c.name}</strong>
                  </div>
                  <p style={{ color: "var(--muted)", fontSize: ".82rem", lineHeight: 1.5, margin: 0 }}>{c.desc}</p>
                </div>
              </Link>
            ))}
          </div>

          {/* Who it's for */}
          <h2 style={{ fontFamily: "var(--font-playfair), serif", fontSize: "1.6rem", textAlign: "center", marginBottom: 28 }}>
            Female Quran Classes for All Ages
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {[
              { age: "Ages 4–12", title: "Girls & Young Children", points: ["Short 20–30 min sessions", "Games & visual Arabic learning", "Weekly parent progress reports", "Patient child-specialist Hafiza"] },
              { age: "Teens", title: "Teenage Girls", points: ["30–45 min structured sessions", "Tajweed focus for Salah", "Hifz track available", "Female peer encouragement"] },
              { age: "Adults", title: "Sisters & Mothers", points: ["Flexible morning/evening slots", "Complete beginner welcome", "Private 1-on-1 no judgment", "Adult Hifz track available"] },
            ].map((g) => (
              <div key={g.title} className="content-card" style={{ borderTop: "3px solid var(--emerald)" }}>
                <div style={{ fontSize: ".72rem", fontWeight: 700, color: "var(--emerald)", textTransform: "uppercase", letterSpacing: ".08em", marginBottom: 6 }}>{g.age}</div>
                <div style={{ fontWeight: 700, color: "var(--charcoal)", marginBottom: 14 }}>{g.title}</div>
                {g.points.map((p) => (
                  <div key={p} style={{ display: "flex", gap: 8, alignItems: "flex-start", marginBottom: 8, fontSize: ".87rem", color: "var(--muted)" }}>
                    <CheckCircle size={14} style={{ color: "var(--emerald)", marginTop: 2, flexShrink: 0 }} /> {p}
                  </div>
                ))}
              </div>
            ))}
          </div>

          {/* Location links */}
          <h2 style={{ fontFamily: "var(--font-playfair), serif", fontSize: "1.5rem", textAlign: "center", marginBottom: 20 }}>
            Female Quran Teachers Available Worldwide
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
            {[
              { href: "/locations/online-quran-classes-uk", label: "🇬🇧 United Kingdom", note: "GMT/BST evening slots" },
              { href: "/locations/online-quran-classes-usa", label: "🇺🇸 United States", note: "EST/PST morning & evening" },
              { href: "/locations/online-quran-classes-canada", label: "🇨🇦 Canada", note: "Flexible EST/PST" },
              { href: "/locations/online-quran-classes-australia", label: "🇦🇺 Australia", note: "AEST after-school slots" },
            ].map((l) => (
              <Link key={l.href} href={l.href} style={{ textDecoration: "none" }}>
                <div className="content-card" style={{ textAlign: "center", padding: "18px 12px" }}>
                  <div style={{ fontWeight: 700, fontSize: ".9rem", color: "var(--charcoal)", marginBottom: 4 }}>{l.label}</div>
                  <div style={{ fontSize: ".78rem", color: "var(--muted)" }}>{l.note}</div>
                </div>
              </Link>
            ))}
          </div>

          {/* FAQ */}
          <h2 style={{ fontFamily: "var(--font-playfair), serif", fontSize: "1.6rem", textAlign: "center", marginBottom: 28 }}>
            Frequently Asked Questions
          </h2>
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

          {/* Related links */}
          <div style={{ background: "var(--ivory)", border: "1px solid var(--border)", borderRadius: 16, padding: "24px 28px", marginBottom: 32 }}>
            <h3 style={{ fontFamily: "var(--font-playfair), serif", fontSize: "1.1rem", marginBottom: 14, color: "var(--charcoal)" }}>Related Pages</h3>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
              {[
                ["/online-quran-classes-for-kids", "Kids Quran Classes"],
                ["/online-quran-classes-for-adults", "Adult Quran Classes"],
                ["/hifz-quran-online", "Hifz Program Online"],
                ["/learn-tajweed-online", "Learn Tajweed Online"],
                ["/learn-quran-online", "Learn Quran Online"],
                ["/online-quran-classes", "All Online Classes"],
              ].map(([href, label]) => (
                <Link key={href} href={href} style={{ color: "var(--emerald)", fontWeight: 600, fontSize: ".88rem", textDecoration: "none" }}>→ {label}</Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section" id="cta">
        <div className="max-w-[1200px] mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 style={{ fontFamily: "var(--font-playfair), serif", color: "#fff", fontSize: "2rem", marginBottom: 16 }}>
                Book a Free Trial with a<br /><em style={{ color: "var(--gold-lt)" }}>Certified Female Tutor</em>
              </h2>
              <p style={{ color: "rgba(255,255,255,.75)", marginBottom: 20 }}>
                No credit card required. Get a free 30-minute class with a certified Hafiza tutor — and see if it&apos;s the right fit for your daughter or yourself.
              </p>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 10 }}>
                {["Free 30-min trial — no credit card", "100% female environment", "Available UK, USA, Canada, Australia & 40+ countries", "All courses, all ages"].map((b) => (
                  <li key={b} style={{ display: "flex", alignItems: "center", gap: 8, color: "rgba(255,255,255,.8)", fontSize: ".9rem" }}>
                    <CheckCircle size={15} style={{ color: "var(--gold)", flexShrink: 0 }} /> {b}
                  </li>
                ))}
              </ul>
            </div>
            <div className="cta-form-wrap">
              <h3 style={{ fontFamily: "var(--font-playfair), serif", color: "#fff", fontSize: "1.2rem", marginBottom: 20, textAlign: "center" }}>
                Book Your Free Trial Class
              </h3>
              <CTAForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
