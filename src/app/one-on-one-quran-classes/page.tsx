import type { Metadata } from "next";
import Link from "next/link";
import CTAForm from "@/components/CTAForm";
import InlineTrialCTA from "@/components/InlineTrialCTA";
import { ORGANIZATION_REF } from "@/lib/organizationSchema";
import { CheckCircle, Users, Clock, BookOpen, Award, Video, UserCheck } from "lucide-react";
import { PRICING_PLANS, SERVICE_FACTS, TRIAL } from "@/lib/academyFacts";
import { serializeJsonLd } from "@/lib/jsonLd";

export const revalidate = false;

const pageUrl = "https://www.noorpath.online/one-on-one-quran-classes";

export const metadata: Metadata = {
  title: {
    absolute: "One-on-One Quran Classes Online — Private Tutor | NoorPath Academy",
  },
  description:
    "Private one-on-one Quran classes online with a live tutor. 1-to-1 Qaida, Tajweed and Hifz lessons for kids and adults — free 30-minute trial, no credit card.",
  keywords: [
    "one-on-one quran classes",
    "1-to-1 quran classes",
    "one on one quran classes online",
    "private quran tutor online",
    "private quran classes online",
    "1 on 1 quran teacher",
    "individual quran lessons online",
    "personal quran tutor online",
  ],
  alternates: { canonical: pageUrl },
  openGraph: {
    title: "One-on-One Quran Classes Online | NoorPath Academy",
    description:
      "Live private 1-to-1 Quran lessons with tutor matching. Free 30-minute trial — no credit card required.",
    url: pageUrl,
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "One-on-One Quran Classes — NoorPath Academy" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "One-on-One Quran Classes | NoorPath Academy",
    description: "Private 1-to-1 online Quran tutoring for kids and adults. Free trial.",
    images: ["/og-image.png"],
  },
};

const faqs = [
  {
    q: "What are one-on-one Quran classes?",
    a: "One-on-one (1-to-1) Quran classes are live private lessons between one learner and one tutor — not a group Zoom room. The tutor adjusts pace, correction, and homework to that learner alone.",
  },
  {
    q: "Are NoorPath classes really 1-to-1, or group classes?",
    a: "Lessons are arranged as live one-to-one sessions. Family plans may enrol siblings on separate schedules; each child's lesson remains individual unless you request otherwise.",
  },
  {
    q: "Who can take private Quran tutor lessons online?",
    a: "Children, teens, and adults can request 1-to-1 matching for Noorani Qaida, Quran reading, Tajweed, Hifz, Arabic, or Islamic studies. Availability is confirmed after your request.",
  },
  {
    q: "Can I request a female private Quran tutor?",
    a: "Yes. You can request a female tutor when booking. Subject and schedule availability are confirmed after enquiry — see also our female Quran teacher page.",
  },
  {
    q: "How much do one-on-one Quran classes cost?",
    a: `Plans start from $${PRICING_PLANS[0].monthlyPriceUsd}/month for ${PRICING_PLANS[0].sessionsPerWeek} session per week. The first ${TRIAL.durationMinutes}-minute trial is free and requires no credit card.`,
  },
  {
    q: "How do I book a private Quran trial?",
    a: "Share your name, WhatsApp or email, and preferred class time. NoorPath confirms a suitable tutor and schedule after reviewing the learner's level and goals.",
  },
];

const benefits = [
  { icon: <UserCheck size={22} />, title: "Undivided tutor attention", desc: "Every correction and tip is for your learner — not split across a group." },
  { icon: <Clock size={22} />, title: "Schedule matching", desc: "Share preferred windows; available tutor options are confirmed after your request." },
  { icon: <BookOpen size={22} />, title: "Personal learning plan", desc: "Qaida, Tajweed, or Hifz focus is set after assessing the learner's starting level." },
  { icon: <Award size={22} />, title: "Credentials confirmed", desc: "Relevant teaching experience and credentials for the proposed tutor are confirmed before enrolment." },
  { icon: <Video size={22} />, title: "Live online lessons", desc: "Interactive video lessons — not pre-recorded courses alone." },
  { icon: <Users size={22} />, title: "Kids and adults", desc: "Matching considers age, confidence, and whether you prefer a male or female tutor." },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": `${pageUrl}#service`,
      name: "One-on-One Quran Classes Online",
      description:
        "Private live 1-to-1 online Quran classes for children and adults, including Qaida, Tajweed and Hifz, with a free trial request.",
      provider: ORGANIZATION_REF,
      serviceType: "Online Quran Education",
      audience: { "@type": "Audience", audienceType: "Children and adults learning Quran privately online" },
      url: pageUrl,
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
        { "@type": "ListItem", position: 2, name: "One-on-One Quran Classes", item: pageUrl },
      ],
    },
  ],
};

export default function OneOnOneQuranClassesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeJsonLd(jsonLd) }} />

      <div className="page-hero">
        <div className="max-w-[1200px] mx-auto px-4 page-hero-content">
          <nav aria-label="Breadcrumb" style={{ marginBottom: 16 }}>
            <Link href="/" style={{ color: "var(--gold-lt)", fontSize: ".85rem" }}>Home</Link>
            <span style={{ color: "rgba(255,255,255,.4)", margin: "0 8px" }}>›</span>
            <span style={{ color: "rgba(255,255,255,.6)", fontSize: ".85rem" }}>One-on-One Quran Classes</span>
          </nav>
          <h1>One-on-One Quran Classes Online</h1>
          <p>
            Private <strong style={{ color: "var(--gold-lt)" }}>1-to-1 Quran lessons</strong> with a live tutor —
            Qaida, Tajweed, or Hifz for kids and adults.{" "}
            <strong style={{ color: "var(--gold-lt)" }}>Free {TRIAL.durationMinutes}-minute trial, no credit card.</strong>
          </p>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 24, alignItems: "center" }}>
            <Link href="/free-quran-classes-online" className="btn-primary-np">Book Free Trial →</Link>
            <Link href="/pricing" className="btn-outline-np" style={{ color: "#fff", borderColor: "rgba(255,255,255,.5)" }}>
              See Pricing
            </Link>
            <Link href="/online-quran-classes" className="btn-outline-np" style={{ color: "#fff", borderColor: "rgba(255,255,255,.5)" }}>
              All Classes
            </Link>
          </div>
        </div>
      </div>

      <section>
        <div className="max-w-[1200px] mx-auto px-4">
          <div style={{ background: "rgba(10,110,79,.06)", borderLeft: "4px solid var(--emerald)", borderRadius: 12, padding: "20px 26px", marginBottom: 28, fontSize: ".95rem", lineHeight: 1.75, color: "#374151" }}>
            <strong style={{ color: "var(--emerald)" }}>Quick answer: </strong>
            NoorPath offers <strong>one-on-one Quran classes</strong> (private 1-to-1 online tutoring). Lessons are live,
            tutor-matched, and start with a free trial so you can assess the fit before choosing a plan.{" "}
            <a href="/free-quran-classes-online" style={{ color: "var(--emerald)", fontWeight: 700 }}>Book free trial →</a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {[
              { value: SERVICE_FACTS[0].value, label: SERVICE_FACTS[0].label },
              { value: SERVICE_FACTS[1].value, label: SERVICE_FACTS[1].label },
              { value: "1-to-1", label: "Private lesson format" },
              { value: `${TRIAL.durationMinutes} min`, label: "Free trial request" },
            ].map((s) => (
              <div key={s.label} style={{ textAlign: "center", background: "var(--ivory)", border: "1px solid var(--border)", borderRadius: 14, padding: "22px 12px" }}>
                <div style={{ fontSize: "1.55rem", fontWeight: 800, color: "var(--emerald)", lineHeight: 1.2 }}>{s.value}</div>
                <div style={{ fontSize: ".78rem", color: "var(--muted)", marginTop: 4 }}>{s.label}</div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: "center", marginBottom: 40 }}>
            <span className="section-eyebrow">Private tutoring</span>
            <h2 className="section-title">Why Choose <em className="accent">1-to-1 Quran Classes</em></h2>
            <p className="section-desc center">
              Group classes move at the average pace. Private online Quran tutoring lets the tutor pause, repeat, and correct until your learner is ready.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {benefits.map((f) => (
              <div key={f.title} className="content-card" style={{ display: "flex", gap: 16 }}>
                <div style={{ color: "var(--emerald)", flexShrink: 0, marginTop: 2 }}>{f.icon}</div>
                <div>
                  <h3 style={{ fontFamily: "var(--font-playfair), serif", fontSize: ".97rem", fontWeight: 700, marginBottom: 6 }}>{f.title}</h3>
                  <p style={{ color: "var(--muted)", fontSize: ".87rem", lineHeight: 1.6, margin: 0 }}>{f.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="max-w-[560px] mx-auto mb-16">
            <InlineTrialCTA
              placement="course-top"
              title="Try a private Quran lesson free"
              subtitle={`Name, WhatsApp or email, and preferred time — free ${TRIAL.durationMinutes}-minute trial.`}
            />
          </div>

          <h2 style={{ fontFamily: "var(--font-playfair), serif", fontSize: "1.5rem", textAlign: "center", marginBottom: 24 }}>
            Subjects Available in Private Lessons
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
            {[
              { name: "Noorani Qaida", href: "/courses/noorani-qaida-online", desc: "Letters and reading foundations" },
              { name: "Tajweed", href: "/learn-tajweed-online", desc: "Rules with live correction" },
              { name: "Hifz", href: "/hifz-quran-online", desc: "Memorisation with revision plans" },
              { name: "Kids Quran", href: "/online-quran-classes-for-kids", desc: "Age-aware 1-to-1 for children" },
              { name: "Adults", href: "/online-quran-classes-for-adults", desc: "Beginner-friendly adult lessons" },
              { name: "Female tutor", href: "/female-quran-teacher-online", desc: "Request a female private tutor" },
              { name: "Arabic", href: "/courses/arabic-language-online", desc: "Quranic Arabic support" },
              { name: "Free trial hub", href: "/free-quran-classes-online", desc: "Start with a free class" },
            ].map((c) => (
              <Link key={c.name} href={c.href} style={{ textDecoration: "none" }}>
                <div className="content-card" style={{ height: "100%" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
                    <CheckCircle size={16} style={{ color: "var(--emerald)", flexShrink: 0 }} />
                    <strong style={{ fontSize: ".92rem", color: "var(--charcoal)" }}>{c.name}</strong>
                  </div>
                  <p style={{ color: "var(--muted)", fontSize: ".82rem", lineHeight: 1.5, margin: 0 }}>{c.desc}</p>
                </div>
              </Link>
            ))}
          </div>

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

          <div style={{ background: "var(--ivory)", border: "1px solid var(--border)", borderRadius: 16, padding: "24px 28px", marginBottom: 32 }}>
            <h3 style={{ fontFamily: "var(--font-playfair), serif", fontSize: "1.1rem", marginBottom: 14, color: "var(--charcoal)" }}>Related Pages</h3>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
              {[
                ["/online-quran-classes", "Online Quran Classes Hub"],
                ["/pricing", "Pricing"],
                ["/our-tutors", "Our Tutors"],
                ["/free-quran-classes-online", "Free Quran Classes"],
                ["/learn-quran-online", "Learn Quran Online"],
              ].map(([href, label]) => (
                <Link key={href} href={href} style={{ color: "var(--emerald)", fontWeight: 600, fontSize: ".88rem", textDecoration: "none" }}>
                  → {label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section" id="cta">
        <div className="max-w-[1200px] mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 style={{ fontFamily: "var(--font-playfair), serif", color: "#fff", fontSize: "2rem", marginBottom: 16 }}>
                Book Your Private<br /><em style={{ color: "var(--gold-lt)" }}>1-to-1 Trial Class</em>
              </h2>
              <p style={{ color: "rgba(255,255,255,.75)", marginBottom: 20 }}>
                No credit card required. Request a free {TRIAL.durationMinutes}-minute one-on-one Quran class and assess tutor fit before choosing a plan.
              </p>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 10 }}>
                {["Private 1-to-1 lesson format", "Timezone & schedule matching", "Male or female tutor requests", "Credentials confirmed before enrolment"].map((b) => (
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
              <CTAForm formVariant="one-on-one-landing" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
