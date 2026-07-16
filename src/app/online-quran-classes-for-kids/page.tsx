import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import CTAForm from "@/components/CTAForm";
import { ORGANIZATION_ID, ORGANIZATION_REF, BASE_URL } from "@/lib/organizationSchema";
import { CheckCircle, Clock, BookOpen, Award, Shield, Users, Globe, MapPin } from "lucide-react";
import { FAMILY_DISCOUNTS, PRICING_PLANS, SERVICE_FACTS, TRIAL } from "@/lib/academyFacts";
import { serializeJsonLd } from "@/lib/jsonLd";

export const revalidate = false;

export const metadata: Metadata = {
  title: {
    absolute: "Online Quran Classes for Kids — 1-on-1 Live | Free Trial 2026",
  },
  description:
    "Online Quran classes for kids ages 4–12. Live 1-on-1 Noorani Qaida, Tajweed and Hifz lessons with tutor matching and a free 30-minute trial.",
  keywords: [
    "online quran classes for kids",
    "quran classes for kids online",
    "learn quran online for kids",
    "online quran classes for kids",
    "online quran for children",
    "quran teacher for kids online",
    "kids quran classes",
    "1 on 1 quran classes for kids",
    "online quran academy for kids",
    "quran learning for kids online",
    "noorani qaida for kids online",
    "tajweed classes for kids",
    "safe online quran classes",
    "free quran trial for kids",
            "online quran classes for kids uk",
            "online quran classes for kids usa",
            "online quran classes for kids canada",
            "online quran classes for kids australia",
            "female quran teacher for kids",
            "quran classes for children ages 4 to 12",
            "after school quran classes online",
            "one to one quran classes for kids",
            "online noorani qaida for kids",
            "online hifz classes for kids",
          ],
  alternates: { canonical: "https://www.noorpath.online/online-quran-classes-for-kids" },
  openGraph: {
    title: "Online Quran Classes for Kids — 1-on-1 Live | Free Trial",
    description:
      "Live 1-on-1 Quran classes for kids ages 4–12. Request Noorani Qaida, Tajweed, Hifz or a female tutor. Book a free trial.",
    url: "https://www.noorpath.online/online-quran-classes-for-kids",
    images: [{ url: "/marketing/kids-online-quran-class.jpg", width: 1200, height: 800, alt: "Online Quran Classes for Kids — NoorPath Academy" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Online Quran Classes for Kids — Free Trial",
    description: "1-on-1 live Quran classes for kids ages 4–12. Tutor matching and a free trial with no credit card.",
    images: ["/marketing/kids-online-quran-class.jpg"],
  },
};

const PAGE_URL = `${BASE_URL}/online-quran-classes-for-kids`;

const faqs = [
  {
    q: "What age can a child start online Quran classes?",
    a: "Children can start from age 4. The appropriate lesson length and starting material depend on attention span, prior reading experience, and the family's goals.",
  },
  {
    q: "Are online Quran classes safe for children?",
    a: "Classes are live and 1-to-1. Parents can discuss supervision preferences before lessons begin and ask for the proposed tutor's relevant credentials and experience before enrolment.",
  },
  {
    q: "How much do online Quran classes for kids cost?",
    a: `Plans start from $${PRICING_PLANS[0].monthlyPriceUsd}/month. The ${TRIAL.durationMinutes}-minute trial is free and requires no credit card. Published sibling discounts range from ${FAMILY_DISCOUNTS[0].discountPercent}% for two siblings to ${FAMILY_DISCOUNTS[2].discountPercent}% for four or more.`,
  },
  {
    q: "How long should a Quran class be for a child?",
    a: `Lesson length should reflect the child's age, attention span, goals, and selected plan. Published plan lengths are ${PRICING_PLANS.map((plan) => `${plan.sessionMinutes} minutes`).join(", ")}, and the suitable option can be discussed after the trial.`,
  },
  {
    q: "Can my child learn with a female Quran teacher?",
    a: "You can request a female Quran teacher when booking. Subject and schedule availability, along with relevant credentials, are confirmed before enrolment.",
  },
  {
    q: "What will my child learn first?",
    a: "The tutor first considers the child's current level. A beginner may start with Arabic letters and harakat, while a reader may begin with recitation correction, Tajweed, or a suitable Hifz plan.",
  },
  {
    q: "Can I request classes for my timezone?",
    a: "Yes. Share your timezone and preferred lesson windows when booking; tutor availability is confirmed after your request.",
  },
  {
    q: "Is the free trial really free?",
    a: "Yes. The live 30-minute 1-on-1 trial costs $0 and requires no credit card. Tutor availability is confirmed after your request.",
  },
  {
    q: "What is Noorani Qaida and why do kids start with it?",
    a: "Noorani Qaida is the foundational Arabic reading method used for Quran learning. It teaches letter shapes, sounds (Makharij), vowels (harakat), and letter joining rules in a step-by-step child-friendly progression. Children who master Noorani Qaida can then read the Quran fluently with correct Tajweed.",
  },
  {
    q: "Can siblings share a tutor or class?",
    a: `Lessons are offered 1-to-1. Sibling discounts are ${FAMILY_DISCOUNTS[0].discountPercent}% for two siblings, ${FAMILY_DISCOUNTS[1].discountPercent}% for three, and ${FAMILY_DISCOUNTS[2].discountPercent}% for four or more.`,
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Course",
      "@id": `${PAGE_URL}#course`,
      name: "Online Quran Classes for Kids",
      description:
        "Live 1-on-1 online Quran classes for children ages 4–12, with tutor matching for Noorani Qaida, Tajweed, Hifz, daily duas and Islamic studies.",
      provider: { "@type": "Organization", name: "NoorPath Academy", "@id": ORGANIZATION_ID },
      url: PAGE_URL,
      courseMode: "online",
      educationalLevel: "Beginner to Advanced",
      typicalAgeRange: "4-12",
      inLanguage: ["en", "ar", "ur"],
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
        description: "Free 30-minute trial class — no credit card required",
        url: `${PAGE_URL}#cta`,
      },
    },
    {
      "@type": "Service",
      "@id": `${PAGE_URL}#service`,
      name: "Online Quran Classes for Kids",
      description:
        "Live 1-on-1 online Quran classes for children ages 4–12, with tutor matching for Noorani Qaida, Tajweed, Hifz, and Islamic studies.",
      provider: ORGANIZATION_REF,
      serviceType: "Online Quran Education for Children",
      audience: { "@type": "Audience", audienceType: "Muslim children ages 4–12 and their parents" },
      url: PAGE_URL,
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
        description: "Free 30-minute trial class",
        url: `${PAGE_URL}#cta`,
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
        { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
        { "@type": "ListItem", position: 2, name: "Online Quran Classes", item: `${BASE_URL}/online-quran-classes` },
        { "@type": "ListItem", position: 3, name: "For Kids", item: PAGE_URL },
      ],
    },
  ],
};

const trustStats = [
  { value: SERVICE_FACTS[0].value, label: SERVICE_FACTS[0].label },
  { value: SERVICE_FACTS[1].value, label: SERVICE_FACTS[1].label },
  { value: SERVICE_FACTS[2].value, label: SERVICE_FACTS[2].label },
  { value: SERVICE_FACTS[3].value, label: SERVICE_FACTS[3].label },
  { value: "By request", label: "Female Tutor Matching" },
];

const geoLocations = [
  { country: "🇬🇧 United Kingdom", detail: "Share your GMT or BST lesson preferences." },
  { country: "🇺🇸 United States", detail: "Share your US timezone and preferred lesson windows." },
  { country: "🇨🇦 Canada", detail: "Share your Canadian timezone and preferred lesson windows." },
  { country: "🇦🇺 Australia", detail: "Share your AEST or AEDT lesson preferences." },
  { country: "🇦🇪 Gulf (UAE/KSA)", detail: "Share your GST or AST lesson preferences." },
  { country: "🇩🇪 Europe", detail: "Share your European timezone and language preferences." },
];

export default function OnlineQuranClassesForKidsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeJsonLd(jsonLd) }} />

      {/* HERO */}
      <div className="page-hero">
        <div className="max-w-[1200px] mx-auto px-4 page-hero-content">
          <nav aria-label="Breadcrumb" style={{ marginBottom: 16 }}>
            <Link href="/" style={{ color: "var(--gold-lt)", fontSize: ".85rem" }}>Home</Link>
            <span style={{ color: "rgba(255,255,255,.4)", margin: "0 8px" }}>›</span>
            <Link href="/online-quran-classes" style={{ color: "var(--gold-lt)", fontSize: ".85rem" }}>Online Quran Classes</Link>
            <span style={{ color: "rgba(255,255,255,.4)", margin: "0 8px" }}>›</span>
            <span style={{ color: "rgba(255,255,255,.6)", fontSize: ".85rem" }}>For Kids</span>
          </nav>
          <h1>Online Quran Classes for Kids</h1>
          <p>
            Live 1-on-1 Quran classes for children ages 4–12, with matching for Quran reading, Tajweed, Hifz, and female tutor requests.{" "}
            <strong style={{ color: "var(--gold-lt)" }}>Free 30-minute trial — no credit card.</strong>
          </p>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 24, alignItems: "center" }}>
            <Link href="#cta" className="btn-primary-np">Book Free Trial for Your Child →</Link>
            <a
              href={`https://wa.me/923124877906?text=${encodeURIComponent("Assalamu Alaikum, I want to book a FREE Quran trial class for my child. Please share kids class details.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline-np"
              style={{ color: "#fff", borderColor: "rgba(255,255,255,.5)" }}
            >
              WhatsApp Us
            </a>
            <Link href="/pricing" className="btn-outline-np" style={{ color: "#fff", borderColor: "rgba(255,255,255,.5)" }}>View Pricing</Link>
            <span style={{ color: "rgba(255,255,255,.7)", fontSize: ".85rem", display: "flex", alignItems: "center", gap: 6 }}>
              Tutor availability confirmed after your request
            </span>
          </div>
        </div>
      </div>

      {/* TRUST STATS BAR */}
      <div style={{ background: "var(--emerald)", padding: "18px 0" }}>
        <div className="max-w-[1200px] mx-auto px-4">
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "24px 40px" }}>
            {trustStats.map((s) => (
              <div key={s.label} style={{ textAlign: "center" }}>
                <div style={{ color: "#fff", fontWeight: 800, fontSize: "1.15rem" }}>{s.value}</div>
                <div style={{ color: "rgba(255,255,255,.8)", fontSize: ".75rem", fontWeight: 500 }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Hero visual + snapshot */}
      <section style={{ padding: "40px 0 0" }}>
        <div className="max-w-[1200px] mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-10">
            <div style={{ borderRadius: 18, overflow: "hidden", border: "1px solid var(--border)", position: "relative" }}>
              <Image
                src="/marketing/kids-online-quran-class.jpg"
                alt="Child learning Quran online with a live tutor on Zoom"
                width={900}
                height={600}
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
                style={{ width: "100%", height: "auto", display: "block" }}
              />
            </div>
            <div>
              <h2 style={{ fontFamily: "var(--font-playfair), serif", fontSize: "1.55rem", color: "var(--charcoal)", marginBottom: 12 }}>
                What a kids class looks like
              </h2>
              <p style={{ color: "var(--muted)", lineHeight: 1.75, marginBottom: 16 }}>
                Your child sits at home with a Qaida or Quran, joins the live class, and practises directly with a tutor —
                not watching a recording. Parents can discuss how they would like to supervise lessons.
              </p>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { v: "1-to-1", l: "Live online lesson" },
                  { v: "30 min", l: "Free trial class" },
                  { v: "Flexible", l: "Tutor matching" },
                  { v: "No card", l: "Needed for trial" },
                ].map((x) => (
                  <div key={x.l} style={{ background: "rgba(10,110,79,.05)", borderRadius: 12, padding: "14px 12px" }}>
                    <div style={{ fontWeight: 800, color: "var(--emerald)", fontSize: "1.1rem" }}>{x.v}</div>
                    <div style={{ fontSize: ".75rem", color: "var(--muted)" }}>{x.l}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            {[
              { src: "/marketing/female-hafiza-tutor.jpg", alt: "Female tutor teaching a girl Quran online", title: "Female tutor request", desc: "Request a female tutor for a daughter; availability is confirmed after enquiry." },
              { src: "/marketing/kids-hifz-memorisation.jpg", alt: "Child memorising Quran at home for Hifz", title: "Hifz for kids", desc: "Sabaq–Sabqi–Manzil system once reading is fluent." },
              { src: "/marketing/family-evening-quran.jpg", alt: "Family evening online Quran learning at home", title: "Timezone matching", desc: "Share preferred lesson windows when requesting a tutor." },
            ].map((card) => (
              <figure key={card.src} className="content-card" style={{ margin: 0, padding: 0, overflow: "hidden" }}>
                <Image src={card.src} alt={card.alt} width={700} height={467} sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw" style={{ width: "100%", height: 160, objectFit: "cover", display: "block" }} />
                <figcaption style={{ padding: "14px 16px" }}>
                  <div style={{ fontWeight: 700, fontSize: ".92rem", color: "var(--charcoal)", marginBottom: 4 }}>{card.title}</div>
                  <p style={{ fontSize: ".82rem", color: "var(--muted)", margin: 0, lineHeight: 1.5 }}>{card.desc}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: "linear-gradient(180deg,#f1fbf6,#fff)", padding: "64px 0" }} aria-labelledby="kids-interactive-qaida-heading">
        <div className="max-w-[1200px] mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <span className="section-eyebrow">Learning platform support · Ages 3–12</span>
              <h2 id="kids-interactive-qaida-heading" className="section-title">
                Interactive Noorani Qaida Practice Between Guided Lessons
              </h2>
              <p className="section-desc">
                Young learners can revisit a current Arabic letter through tracing,
                listening prompts, visual recognition, memory, sequencing, puzzles,
                and short quizzes. The activity changes while the learning target
                stays clear, helping practice feel more like play without presenting
                a game score as proof of pronunciation mastery.
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 12, marginTop: 22 }}>
                <Link href="/noorani-qaida" className="btn-primary-np">Explore the 11-Module Qaida →</Link>
                <Link href="/noorani-qaida/guides/for-parents" className="btn-outline-np">Read the Parent Guide</Link>
              </div>
              <p style={{ color: "var(--muted)", fontSize: ".78rem", lineHeight: 1.6, marginTop: 14 }}>
                Platform reference: ages 3–12. Live one-to-one class requests remain
                available from age 4 and are matched separately.
              </p>
            </div>
            <figure className="qaida-screenshot">
              <Image
                src="/marketing/noorani-qaida/noorani-qaida-practice-games.png"
                alt="NoorPath Noorani Qaida practice activities and Arabic letter games for children"
                width={1024}
                height={533}
                sizes="(max-width: 1024px) 100vw, 560px"
              />
              <figcaption>
                NoorPath learning platform preview: practice and game choices
                connected to the current Arabic letter.
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section style={{ padding: "72px 0" }}>
        <div className="max-w-[1200px] mx-auto px-4">

          {/* WHY NOORPATH */}
          <div style={{ textAlign: "center", marginBottom: 48, marginTop: 40 }}>
            <span className="section-eyebrow">🌙 Why Parents Choose NoorPath</span>
            <h2 className="section-title">Online Quran Classes for <em className="accent">Kids</em> — Built for Families</h2>
            <p style={{ color: "var(--muted)", maxWidth: 680, margin: "12px auto 0", lineHeight: 1.7 }}>
              Not group webinars. Not pre-recorded videos. Real live teachers who know how to keep your child engaged,
              provide live pronunciation feedback, and adapt the lesson to the child&apos;s level.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {[
              [<Users size={22} key="u" />, "1-on-1 Attention", "The tutor can adapt reading practice, correction, and lesson pace to the individual learner."],
              [<Award size={22} key="a" />, "Credentials Confirmed", "Relevant qualifications and experience teaching children are confirmed for the proposed tutor before enrolment."],
              [<Shield size={22} key="s" />, "Parent-Aware Lessons", "Parents can discuss supervision and communication preferences before lessons begin."],
              [<Clock size={22} key="c" />, "Timezone Matching", "Share your timezone and preferred lesson windows; availability is confirmed after your request."],
              [<BookOpen size={22} key="b" />, "Kids Learning Subjects", "Request Noorani Qaida, Quran reading, Tajweed, Hifz, duas, or Islamic studies."],
              [<CheckCircle size={22} key="ch" />, "Trial Before Enrolment", "Use the free trial to assess communication, lesson pace, and teaching fit before choosing a plan."],
            ].map(([icon, title, desc]) => (
              <div key={String(title)} className="content-card">
                <div style={{ color: "var(--emerald)", marginBottom: 12 }}>{icon}</div>
                <h3 style={{ fontFamily: "var(--font-playfair), serif", fontSize: ".97rem", fontWeight: 700, marginBottom: 8 }}>{title}</h3>
                <p style={{ color: "var(--muted)", fontSize: ".85rem", lineHeight: 1.6, margin: 0 }}>{String(desc)}</p>
              </div>
            ))}
          </div>

          {/* AGE GROUPS */}
          <h2 style={{ fontFamily: "var(--font-playfair), serif", fontSize: "1.6rem", textAlign: "center", marginBottom: 28 }}>
            Quran Learning by Age — Possible Focus
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {[
              ["Ages 4–6", "Foundation focus", "Arabic letters, sounds, short duas, and visual activities can be selected according to attention span and current level."],
              ["Ages 7–9", "Reading focus", "Possible topics include Noorani Qaida, short surahs, introductory Tajweed, daily duas, and Islamic manners."],
              ["Ages 10–12", "Individual goals", "Possible topics include Quran reading, Tajweed, Hifz, Arabic vocabulary, and Islamic studies."],
            ].map(([age, duration, desc]) => (
              <div key={String(age)} className="content-card" style={{ borderTop: "3px solid var(--emerald)" }}>
                <div style={{ fontWeight: 800, color: "var(--emerald)", fontSize: "1.1rem", marginBottom: 4 }}>{age}</div>
                <div style={{ fontSize: ".82rem", color: "var(--gold)", fontWeight: 600, marginBottom: 10 }}>{duration}</div>
                <p style={{ color: "var(--muted)", fontSize: ".88rem", lineHeight: 1.65, margin: 0 }}>{desc}</p>
              </div>
            ))}
          </div>

          <div className="content-card" style={{ marginBottom: 48 }}>
            <h2 style={{ fontFamily: "var(--font-playfair), serif", fontSize: "1.35rem", marginBottom: 8 }}>Parent success checklist</h2>
            <p style={{ color: "var(--muted)", fontSize: ".9rem", marginBottom: 16, lineHeight: 1.6 }}>
              These practical steps can support a consistent learning routine without promising a fixed result or timeline.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                ["Fixed weekly slot", "Same days/times — kids learn by habit"],
                ["Quiet corner", "Tablet + headphones beat a noisy living room"],
                ["Short home practice", "5–10 minutes on off-days beats cramming"],
                ["Female tutor if preferred", "Request on the trial form for daughters"],
                ["Review lesson notes", "Ask the tutor clarifying questions when needed"],
                ["Sibling plan", `Discounts range from ${FAMILY_DISCOUNTS[0].discountPercent}% to ${FAMILY_DISCOUNTS[2].discountPercent}%`],
              ].map(([t, d]) => (
                <div key={t} style={{ display: "flex", gap: 10, padding: "12px 14px", background: "rgba(10,110,79,.04)", borderRadius: 10 }}>
                  <CheckCircle size={16} style={{ color: "var(--emerald)", marginTop: 2, flexShrink: 0 }} />
                  <div>
                    <div style={{ fontWeight: 700, fontSize: ".88rem", color: "var(--charcoal)" }}>{t}</div>
                    <div style={{ fontSize: ".8rem", color: "var(--muted)" }}>{d}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CURRICULUM TABLE */}
          <h2 style={{ fontFamily: "var(--font-playfair), serif", fontSize: "1.6rem", textAlign: "center", marginBottom: 28 }}>
            Kids Quran Curriculum — Learning Stages
          </h2>
          <div style={{ overflowX: "auto", marginBottom: 16 }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: ".88rem" }}>
              <thead>
                <tr style={{ background: "var(--emerald)", color: "#fff" }}>
                  <th style={{ padding: "12px 16px", textAlign: "left", fontWeight: 700 }}>Stage</th>
                  <th style={{ padding: "12px 16px", textAlign: "left", fontWeight: 700 }}>Focus Area</th>
                  <th style={{ padding: "12px 16px", textAlign: "left", fontWeight: 700 }}>What Your Child Learns</th>
                  <th style={{ padding: "12px 16px", textAlign: "left", fontWeight: 700 }}>Tutor Support</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Foundation", "Arabic Alphabet", "Letter shapes, sounds (Makharij), harakat (vowels), short duas", "Introduce and practise at the child's pace"],
                  ["Reading Basics", "Noorani Qaida", "Letter joining, tanween, shadda, and madd exercises", "Correct reading patterns and pronunciation"],
                  ["Quran Reading", "Guided Recitation", "Short surahs and reading practice with introductory Tajweed", "Provide live correction and suitable practice"],
                  ["Tajweed", "Rule Application", "Qalqalah, Ghunna, Ikhfa, Iqlab, and Idgham during recitation", "Select rules appropriate to the learner's level"],
                  ["Individual Goal", "Specialised Study", "Hifz, Arabic vocabulary, Islamic studies, or Seerah", "Agree a personalised learning focus"],
                ].map(([stage, focus, learns, support]) => (
                  <tr key={String(stage)} style={{ borderBottom: "1px solid var(--border)" }}>
                    <td style={{ padding: "12px 16px", fontWeight: 700, color: "var(--emerald)", whiteSpace: "nowrap" }}>{stage}</td>
                    <td style={{ padding: "12px 16px", fontWeight: 600 }}>{focus}</td>
                    <td style={{ padding: "12px 16px", color: "var(--muted)" }}>{learns}</td>
                    <td style={{ padding: "12px 16px", color: "var(--charcoal)", fontSize: ".82rem" }}>{support}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p style={{ color: "var(--muted)", fontSize: ".84rem", lineHeight: 1.65, margin: "0 0 48px" }}>
            Parent resources: see our{" "}
            <Link href="/blog/quran-curriculum-and-lesson-planning" style={{ color: "var(--emerald)", fontWeight: 600 }}>
              Quran curriculum and lesson-planning guide
            </Link>{" "}
            and{" "}
            <Link href="/blog/quran-practice-and-progress-guide" style={{ color: "var(--emerald)", fontWeight: 600 }}>
              research-informed Quran practice and progress guide
            </Link>
            . These frameworks must be adapted to observed ability and do not guarantee learning timelines.
          </p>

          {/* HOW IT WORKS */}
          <h2 style={{ fontFamily: "var(--font-playfair), serif", fontSize: "1.6rem", textAlign: "center", marginBottom: 28 }}>
            How to Start — 3 Simple Steps
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {[
              ["1", "Book Free Trial", "Fill the form below with your child's age, level, goals, timezone, and tutor preference. We will confirm availability."],
              ["2", "Attend First Class", "30-minute live lesson on Zoom. Your child meets their teacher and starts learning immediately. Parents welcome to join."],
              ["3", "Choose Your Plan", `After the trial, choose a monthly plan if it fits. Sibling discounts range from ${FAMILY_DISCOUNTS[0].discountPercent}% to ${FAMILY_DISCOUNTS[2].discountPercent}%.`],
            ].map(([num, title, desc]) => (
              <div key={String(num)} style={{ textAlign: "center", padding: "24px 16px" }}>
                <div style={{
                  width: 48, height: 48, borderRadius: "50%", background: "var(--emerald)", color: "#fff",
                  display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 800,
                  fontSize: "1.2rem", margin: "0 auto 16px",
                }}>{num}</div>
                <h3 style={{ fontWeight: 700, marginBottom: 8, fontSize: ".95rem" }}>{title}</h3>
                <p style={{ color: "var(--muted)", fontSize: ".85rem", lineHeight: 1.6, margin: 0 }}>{desc}</p>
              </div>
            ))}
          </div>

          {/* GEO LOCATIONS */}
          <div style={{ background: "var(--ivory)", borderRadius: 16, padding: "36px 32px", marginBottom: 48, border: "1px solid var(--border)" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
              <Globe size={20} color="var(--emerald)" />
              <h2 style={{ fontFamily: "var(--font-playfair), serif", fontSize: "1.35rem", margin: 0 }}>
                Request Kids Quran Classes by Timezone
              </h2>
            </div>
            <p style={{ color: "var(--muted)", fontSize: ".88rem", marginBottom: 24, lineHeight: 1.6 }}>
              Share your timezone and preferred lesson windows. Tutor availability is confirmed after your request.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {geoLocations.map((loc) => (
                <div key={loc.country} style={{ background: "#fff", borderRadius: 10, padding: "16px 18px", border: "1px solid var(--border)" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 6 }}>
                    <MapPin size={14} color="var(--emerald)" />
                    <span style={{ fontWeight: 700, fontSize: ".9rem" }}>{loc.country}</span>
                  </div>
                  <p style={{ color: "var(--muted)", fontSize: ".8rem", lineHeight: 1.55, margin: 0 }}>{loc.detail}</p>
                </div>
              ))}
            </div>
            <div style={{ marginTop: 20, display: "flex", flexWrap: "wrap", gap: 10 }}>
              {[
                ["/locations/online-quran-classes-uk", "Quran Classes UK"],
                ["/locations/online-quran-classes-usa", "Quran Classes USA"],
                ["/locations/online-quran-classes-canada", "Quran Classes Canada"],
                ["/locations/online-quran-classes-australia", "Quran Classes Australia"],
                ["/online-quran-classes/london", "Kids Classes London"],
                ["/online-quran-classes/birmingham", "Kids Classes Birmingham"],
                ["/online-quran-classes/bradford", "Kids Classes Bradford"],
                ["/online-quran-classes/manchester", "Kids Classes Manchester"],
                ["/female-quran-teacher-online", "Female Teacher for Girls"],
              ].map(([href, label]) => (
                <Link key={href} href={href} style={{
                  background: "#fff", border: "1px solid var(--emerald)", borderRadius: 50,
                  padding: "6px 14px", fontSize: ".8rem", color: "var(--emerald)", fontWeight: 600, textDecoration: "none",
                }}>{label}</Link>
              ))}
            </div>
          </div>

          {/* INTERNAL LINKS */}
          <div style={{ background: "var(--ivory)", borderRadius: 16, padding: "28px 32px", marginBottom: 48, border: "1px solid var(--border)" }}>
            <h3 style={{ fontFamily: "var(--font-playfair), serif", fontSize: "1.1rem", marginBottom: 16 }}>Learn More Before You Book</h3>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
              {[
                ["/blog/online-quran-classes-for-kids-parent-guide", "Complete Parent Guide 2026"],
                ["/blog/best-age-to-start-quran-learning", "When to Start Quran Learning"],
                ["/blog/how-to-teach-quran-to-kids", "How to Teach Quran at Home"],
                ["/online-quran-classes-for-kids", "Kids Quran Course Details"],
                ["/female-quran-teacher-online", "Female Quran Teacher"],
                ["/courses/noorani-qaida-online", "Noorani Qaida Course"],
                ["/learn-quran-online", "Learn Quran Online"],
              ].map(([href, label]) => (
                <Link key={href} href={href} style={{
                  background: "#fff", border: "1px solid var(--border)", borderRadius: 50,
                  padding: "6px 14px", fontSize: ".8rem", color: "var(--emerald)", fontWeight: 600, textDecoration: "none",
                }}>{label}</Link>
              ))}
            </div>
          </div>

          {/* FAQs */}
          <h2 style={{ fontFamily: "var(--font-playfair), serif", fontSize: "1.6rem", textAlign: "center", marginBottom: 28 }}>
            Common Questions from Parents
          </h2>
          <div className="max-w-[700px] mx-auto" style={{ marginBottom: 48 }}>
            {faqs.map((f, i) => (
              <details key={i} style={{ borderBottom: "1px solid var(--border)", padding: "18px 0" }}>
                <summary style={{ fontWeight: 600, color: "var(--charcoal)", cursor: "pointer", fontSize: ".95rem" }}>{f.q}</summary>
                <p style={{ color: "var(--muted)", marginTop: 10, lineHeight: 1.7, fontSize: ".9rem" }}>{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section" id="cta">
        <div className="max-w-[1200px] mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 style={{ fontFamily: "var(--font-playfair), serif", color: "#fff", fontSize: "2rem", marginBottom: 16 }}>
                Book Your Child&apos;s<br /><em style={{ color: "var(--gold-lt)" }}>Free Quran Trial Class</em>
              </h2>
              <p style={{ color: "rgba(255,255,255,.75)", marginBottom: 16, lineHeight: 1.7 }}>
                30 minutes. One live 1-to-1 trial. No credit card required. Tutor availability is confirmed after your request.
              </p>
              <ul style={{ color: "rgba(255,255,255,.8)", fontSize: ".9rem", lineHeight: 2, paddingLeft: 20 }}>
                <li>✓ Ages 4–12 welcome</li>
                <li>✓ Male or female tutor requests</li>
                <li>✓ Timezone preferences considered</li>
                <li>✓ Sibling discounts up to {FAMILY_DISCOUNTS[2].discountPercent}%</li>
                <li>✓ Credentials confirmed before enrolment</li>
                <li>✓ Free trial with no credit card</li>
              </ul>
            </div>
            <div className="cta-form-wrap">
              <h3 style={{ fontFamily: "var(--font-playfair), serif", color: "#fff", fontSize: "1.2rem", marginBottom: 20, textAlign: "center" }}>
                Start Free Trial — Takes 30 Seconds
              </h3>
              <CTAForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
