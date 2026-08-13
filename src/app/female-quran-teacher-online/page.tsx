import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import CTAForm from "@/components/CTAForm";
import { ORGANIZATION_REF } from "@/lib/organizationSchema";
import { CheckCircle, Shield, Award, Users, BookOpen, Clock, Heart } from "lucide-react";
import { PRICING_PLANS, SERVICE_FACTS, TRIAL, TRUSTPILOT } from "@/lib/academyFacts";

export const revalidate = false;

export const metadata: Metadata = {
  title: { absolute: "Female Quran Teacher Online — Tutor Requests for Sisters & Kids | Free Trial" },
  description:
    "Request a female Quran teacher online for sisters, daughters and girls. Live 1-to-1 classes for Quran reading, Tajweed or Hifz, with a free 30-minute trial.",
  keywords: [
    "female quran teacher online", "female quran tutor", "online quran teacher for sisters",
    "hafiza tutor online", "female quran classes", "quran classes for girls online",
    "online quran for women", "female quran teacher uk", "female quran teacher usa",
    "female quran teacher in ireland", "female quran teacher ireland",
    "quran classes for ladies", "lady quran teacher online", "female islamic teacher online",
    "online quran classes for females", "hafiza online classes", "female hifz teacher online",
    "female quran teacher for kids", "female quran teacher for kids uk",
    "female quran tutor for daughters", "hafiza for kids online", "girl quran teacher online",
  ],
  alternates: { canonical: "https://www.noorpath.online/female-quran-teacher-online" },
  openGraph: {
    title: "Female Quran Teacher Online — Tutor Requests | NoorPath Academy",
    description: "Request a female Quran teacher for a sister or daughter. Live 1-on-1 classes with a free 30-minute trial; availability is confirmed after enquiry.",
    url: "https://www.noorpath.online/female-quran-teacher-online",
    images: [{ url: "/marketing/female-hafiza-tutor.jpg", width: 1200, height: 800, alt: "Female Quran Teacher Online — NoorPath Academy" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Female Quran Teacher Online | NoorPath Academy",
    description: "Comfortable 1-on-1 Quran classes for sisters and daughters. Request a female tutor and a free trial.",
    images: ["/marketing/female-hafiza-tutor.jpg"],
  },
};

const faqs = [
  { q: "Can my daughter learn Quran with a female teacher online?", a: "You can request a female teacher for a daughter or adult sister. Lessons are live and 1-to-1; subject and schedule availability are confirmed after your request." },
  { q: "Are the female tutors at NoorPath qualified?", a: "Qualifications vary by tutor and teaching focus. NoorPath confirms the proposed tutor's relevant credentials and experience before enrolment." },
  { q: "What courses can my daughter study with a female teacher?", a: "Female tutor requests may include Noorani Qaida, Quran recitation, Tajweed, Hifz, Arabic, Islamic studies, or daily duas. Availability is confirmed for the requested subject and schedule." },
  { q: "How do online Quran classes work for sisters?", a: "Classes are live and 1-to-1. Share the learner's level, subject, timezone, and preferred schedule, and NoorPath will confirm a suitable female tutor option." },
  { q: "Can adult women learn Quran online with a female teacher?", a: "Yes. Adult sisters can request a female tutor for beginner reading, Tajweed, or Hifz. Relevant adult teaching experience and availability are confirmed before enrolment." },
  { q: "How much do female Quran classes cost?", a: `Plans start from $${PRICING_PLANS[0].monthlyPriceUsd}/month for ${PRICING_PLANS[0].sessionsPerWeek} class per week. The first ${TRIAL.durationMinutes}-minute lesson is free and requires no credit card.` },
  { q: "Is there a female Quran teacher available in my timezone?", a: "Share your timezone and preferred lesson windows when requesting a trial. Female tutor availability is confirmed after your request." },
  { q: "Can I request a female Quran teacher in Ireland?", a: "Yes. Irish families — including in Dublin — can request a female tutor with GMT or IST preferences. Availability is confirmed after your request. See the Ireland location page for local scheduling context." },
  { q: "Can I request a female Hifz teacher for my daughter?", a: "Yes. You can request a female tutor for Hifz. Relevant Hifz credentials, teaching experience, and schedule availability are confirmed for the proposed tutor before enrolment." },
];

const features = [
  { icon: <Shield size={22} />, title: "Private 1-to-1 Lessons", desc: "Female tutor requests are arranged as live 1-to-1 lessons for sisters and daughters." },
  { icon: <Award size={22} />, title: "Credentials Confirmed", desc: "Relevant Hifz, Ijazah, academic, or teaching credentials are confirmed for the proposed tutor before enrolment." },
  { icon: <Users size={22} />, title: "Children & Adults", desc: "Matching considers whether the learner is a child, teenager, or adult and the teaching approach requested." },
  { icon: <BookOpen size={22} />, title: "Subject-Based Matching", desc: "Request support for Noorani Qaida, Tajweed, Hifz, Arabic, Islamic studies, or daily duas." },
  { icon: <Clock size={22} />, title: "Timezone Matching", desc: "Share preferred lesson windows; available female tutor options are confirmed after the request." },
  { icon: <Heart size={22} />, title: "Assess the Fit", desc: "Use the free trial to assess communication, pace, and whether the teaching style suits the learner." },
];

const courses = [
  { name: "Noorani Qaida", href: "/courses/noorani-qaida-online", desc: "Arabic alphabet and reading foundations for beginners" },
  { name: "Quran Recitation", href: "/online-quran-classes", desc: "Surah-by-surah with live pronunciation correction" },
  { name: "Tajweed Rules", href: "/learn-tajweed-online", desc: "Master the rules of beautiful Quran recitation" },
  { name: "Hifz Program", href: "/hifz-quran-online", desc: "Request a female tutor for structured Quran memorization" },
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
      name: "Female Quran Teacher Online — Tutor Requests",
      description:
        "Female Quran tutor requests for sisters and daughters. Live 1-on-1 classes may cover Qaida, Tajweed, Hifz, or Arabic, subject to confirmed availability.",
      provider: ORGANIZATION_REF,
      serviceType: "Online Quran Education",
      audience: { "@type": "Audience", audienceType: "Female Muslim learners — ages 4 to senior" },
      url: "https://www.noorpath.online/female-quran-teacher-online",
      offers: {
        "@type": "Offer",
        price: String(PRICING_PLANS[0].monthlyPriceUsd),
        priceCurrency: "USD",
        description: `Starting from $${PRICING_PLANS[0].monthlyPriceUsd}/month. Free ${TRIAL.durationMinutes}-minute trial request.`,
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
          <p>Request a female Quran tutor for a sister or daughter. Live <strong style={{ color: "var(--gold-lt)" }}>1-on-1 online Quran classes</strong> can be matched for reading, Tajweed, Hifz, children, or adults. <strong style={{ color: "var(--gold-lt)" }}>Free 30-minute trial, no credit card.</strong></p>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 24, alignItems: "center" }}>
            <Link href="#cta" className="btn-primary-np">Book Free Trial →</Link>
            <Link href="/online-quran-classes" className="btn-outline-np" style={{ color: "#fff", borderColor: "rgba(255,255,255,.5)" }}>All Classes</Link>
            <span style={{ color: "rgba(255,255,255,.7)", fontSize: ".85rem", display: "flex", alignItems: "center", gap: 6 }}>
              Availability confirmed after your request
            </span>
          </div>
        </div>
      </div>

      <section>
        <div className="max-w-[1200px] mx-auto px-4">

          {/* Quick Answer */}
          <div style={{ background: "rgba(10,110,79,.06)", borderLeft: "4px solid var(--emerald)", borderRadius: 12, padding: "20px 26px", marginBottom: 28, fontSize: ".95rem", lineHeight: 1.75, color: "#374151" }}>
            <strong style={{ color: "var(--emerald)" }}>Quick answer: </strong>
            You can <strong>request a female Quran teacher</strong> for a sister or daughter. Classes are live and 1-to-1; relevant credentials and availability are confirmed before enrolment. The first 30-minute lesson is free.{" "}
            <a href="#cta" style={{ color: "var(--emerald)", fontWeight: 700 }}>Book free trial →</a>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-10">
            <div style={{ borderRadius: 18, overflow: "hidden", border: "1px solid var(--border)" }}>
              <Image
                src="/marketing/female-hafiza-tutor.jpg"
                alt="Female Quran tutor teaching a girl online"
                width={900}
                height={600}
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
                style={{ width: "100%", height: "auto", display: "block" }}
              />
            </div>
            <div>
              <h2 style={{ fontFamily: "var(--font-playfair), serif", fontSize: "1.4rem", color: "var(--charcoal)", marginBottom: 12 }}>
                A comfortable 1-to-1 learning option
              </h2>
              <p style={{ color: "var(--muted)", lineHeight: 1.75, marginBottom: 14 }}>
                Request a female tutor for a daughter, teenage girl, or adult sister. We confirm the proposed tutor&apos;s subject fit, relevant credentials, and schedule before enrolment.
              </p>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 8 }}>
                {[
                  "Relevant credentials confirmed before enrolment",
                  "Parents can discuss lesson supervision",
                  "Timezone preferences included in matching",
                  "Reading, Tajweed, or Hifz tutor requests",
                ].map((t) => (
                  <li key={t} style={{ display: "flex", gap: 8, alignItems: "flex-start", fontSize: ".9rem", color: "var(--slate)" }}>
                    <CheckCircle size={16} style={{ color: "var(--emerald)", marginTop: 2, flexShrink: 0 }} /> {t}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="content-card" style={{ marginBottom: 32 }}>
            <h2 style={{ fontFamily: "var(--font-playfair), serif", fontSize: "1.25rem", marginBottom: 8 }}>Female tutor matching by learning stage</h2>
            <p style={{ color: "var(--muted)", fontSize: ".88rem", marginBottom: 14, lineHeight: 1.6 }}>Learning plans are adjusted after the tutor assesses the learner; no fixed outcome timeline is promised.</p>
            <div style={{ overflowX: "auto" }}>
              <table style={{ width: "100%", borderCollapse: "collapse", fontSize: ".85rem" }}>
                <thead>
                  <tr style={{ background: "var(--emerald)", color: "#fff" }}>
                    <th style={{ padding: "10px 12px", textAlign: "left" }}>Learner</th>
                    <th style={{ padding: "10px 12px", textAlign: "left" }}>Starting point</th>
                    <th style={{ padding: "10px 12px", textAlign: "left" }}>Possible focus</th>
                    <th style={{ padding: "10px 12px", textAlign: "left" }}>Matching consideration</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Young learners", "New to Arabic letters", "Qaida, pronunciation, short duas", "Child-focused teaching approach"],
                    ["School-age girls", "Reading at any level", "Reading, Tajweed, or Hifz", "Level and learning goal"],
                    ["Teen girls", "Beginner or returning", "Recitation, Tajweed, or Hifz", "Confidence and subject fit"],
                    ["Adult sisters", "Beginner to experienced", "Personal Quran learning goals", "Schedule and preferred pace"],
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

          <div className="content-card" style={{ marginBottom: 28, borderTop: "3px solid var(--emerald)" }}>
            <h2 style={{ fontFamily: "var(--font-playfair), serif", fontSize: "1.25rem", marginBottom: 10 }}>
              What we confirm before enrolment (proof, not promises)
            </h2>
            <p style={{ color: "var(--muted)", lineHeight: 1.7, marginBottom: 12, fontSize: ".9rem" }}>
              Female tutor matching is a request process: we confirm subject fit, relevant credentials for the proposed
              tutor, and schedule availability before you pay for a regular plan. Free trial: {TRIAL.durationMinutes}{" "}
              minutes, no credit card. Plans start from ${PRICING_PLANS[0].monthlyPriceUsd}/month (
              {PRICING_PLANS[0].sessionsPerWeek} class/week). Trustpilot: {TRUSTPILOT.score}/5 from{" "}
              {TRUSTPILOT.reviewCount} reviews ({TRUSTPILOT.lastChecked}) —{" "}
              <a href={TRUSTPILOT.url} rel="noopener noreferrer" style={{ color: "var(--emerald)", fontWeight: 700 }}>
                read reviews
              </a>
              .
            </p>
            <p style={{ color: "var(--muted)", lineHeight: 1.7, margin: 0, fontSize: ".9rem" }}>
              Book via the{" "}
              <Link href="/free-quran-classes-online" style={{ color: "var(--emerald)", fontWeight: 700 }}>
                free Quran classes online
              </Link>{" "}
              trial form and state “female tutor” in your message.
            </p>
          </div>

          <div className="content-card" style={{ marginBottom: 40, borderTop: "3px solid var(--emerald)" }}>
            <h2 style={{ fontFamily: "var(--font-playfair), serif", fontSize: "1.35rem", marginBottom: 10 }}>
              Female Quran Teacher for Kids (UK &amp; Online)
            </h2>
            <p style={{ color: "var(--muted)", lineHeight: 1.7, marginBottom: 12 }}>
              Looking for a <strong>female Quran teacher for kids</strong>? Daughters ages 4–12 can request tutor matching for Noorani Qaida, Tajweed, or Hifz —
              subject to confirmed tutor credentials and schedule availability. Read our full guide:{" "}
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
              { value: SERVICE_FACTS[0].value, label: SERVICE_FACTS[0].label },
              { value: SERVICE_FACTS[1].value, label: SERVICE_FACTS[1].label },
              { value: SERVICE_FACTS[2].value, label: SERVICE_FACTS[2].label },
              { value: "By request", label: "Female tutor matching" },
            ].map((s) => (
              <div key={s.label} style={{ textAlign: "center", background: "var(--ivory)", border: "1px solid var(--border)", borderRadius: 14, padding: "22px 12px" }}>
                <div style={{ fontSize: "1.55rem", fontWeight: 800, color: "var(--emerald)", lineHeight: 1.2 }}>{s.value}</div>
                <div style={{ fontSize: ".78rem", color: "var(--muted)", marginTop: 4 }}>{s.label}</div>
              </div>
            ))}
          </div>

          {/* Why choose */}
          <div style={{ textAlign: "center", marginBottom: 40 }}>
            <span className="section-eyebrow">👩‍🏫 Female Tutor Requests</span>
            <h2 className="section-title">Why Families Choose Our <em className="accent">Female Teachers</em></h2>
            <p className="section-desc center">
              At NoorPath Academy, we understand that modesty and comfort matter in Islamic learning. Request a female tutor, and we will confirm relevant credentials and availability before enrolment.
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
            Subjects You Can Request with <em className="accent">Female Teachers</em>
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
            Female Quran Classes for Children and Adults
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {[
              { age: "Children", title: "Girls & Young Learners", points: ["Age-aware lesson planning", "Visual Arabic learning options", "Parent supervision preferences", "Relevant experience confirmed"] },
              { age: "Teens", title: "Teenage Girls", points: ["Structured 1-to-1 sessions", "Tajweed tutor requests", "Hifz tutor requests", "Teaching fit assessed in trial"] },
              { age: "Adults", title: "Sisters & Mothers", points: ["Schedule preferences considered", "Complete beginners welcome", "Private 1-to-1 learning", "Adult Hifz requests welcomed"] },
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

          <p style={{ color: "var(--muted)", lineHeight: 1.7, textAlign: "center", marginBottom: 44, maxWidth: 760, marginLeft: "auto", marginRight: "auto" }}>
            If you are an adult learner rather than a parent booking for a child, the{" "}
            <Link href="/quran-classes-for-sisters" style={{ color: "var(--emerald)", fontWeight: 700 }}>
              Quran classes for sisters and ladies
            </Link>{" "}
            page covers the same female tutor request from an adult beginner&rsquo;s starting point.
          </p>

          {/* Location links */}
          <h2 style={{ fontFamily: "var(--font-playfair), serif", fontSize: "1.5rem", textAlign: "center", marginBottom: 20 }}>
            Request Female Quran Teachers by Timezone
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
            {[
              { href: "/locations/online-quran-classes-uk", label: "🇬🇧 United Kingdom", note: "Share your GMT/BST preferences" },
              { href: "/locations/online-quran-classes-ireland", label: "🇮🇪 Ireland", note: "Female tutor requests for Dublin & Ireland" },
              { href: "/locations/online-quran-classes-usa", label: "🇺🇸 United States", note: "Share your US timezone" },
              { href: "/locations/online-quran-classes-canada", label: "🇨🇦 Canada", note: "Share your Canadian timezone" },
              { href: "/locations/online-quran-classes-australia", label: "🇦🇺 Australia", note: "Share your Australian timezone" },
              { href: "/locations/online-quran-classes-singapore", label: "🇸🇬 Singapore", note: "SGT evenings & CCA windows" },
              { href: "/locations/online-quran-classes-new-zealand", label: "🇳🇿 New Zealand", note: "NZST/NZDT kids matching" },
              { href: "/free-quran-classes-online", label: "🎁 Free trial", note: "30-min live class, no card" },
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
                ["/free-quran-classes-online", "Free Quran Trial"],
                ["/online-quran-classes-for-kids", "Kids Quran Classes"],
                ["/online-quran-classes-for-adults", "Adult Quran Classes"],
                ["/hifz-quran-online", "Hifz Program Online"],
                ["/learn-tajweed-online", "Learn Tajweed Online"],
                ["/blog/barakallah-meaning", "Barakallah meaning"],
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
                Book a Free Trial with a<br /><em style={{ color: "var(--gold-lt)" }}>Female Tutor Request</em>
              </h2>
              <p style={{ color: "rgba(255,255,255,.75)", marginBottom: 20 }}>
                No credit card required. Request a free 30-minute class with a female tutor and assess whether the match is right for your daughter or yourself.
              </p>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 10 }}>
                {["Free 30-min trial — no credit card", "Female tutor requested", "Timezone availability confirmed after enquiry", "Credentials confirmed before enrolment"].map((b) => (
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
