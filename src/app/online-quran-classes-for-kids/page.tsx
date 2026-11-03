import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import CTAForm from "@/components/CTAForm";
import TrustPolicyStrip from "@/components/TrustPolicyStrip";
import WhatsAppLink from "@/components/WhatsAppLink";
import FaqJsonLd from "@/components/FaqJsonLd";
import { ORGANIZATION_REF, BASE_URL } from "@/lib/organizationSchema";
import {
  CheckCircle,
  Clock,
  BookOpen,
  Award,
  Shield,
  Users,
  Globe,
  MapPin,
  Laptop,
  HeartHandshake,
  Sparkles,
  ArrowRight,
  GraduationCap,
  CalendarCheck,
  FileText,
  UserCheck,
  MessageCircle,
  Check,
  ChevronRight,
} from "lucide-react";
import {
  FAMILY_DISCOUNTS,
  PRICING_PLANS,
  REFUND_WINDOW_DAYS,
  SERVICE_FACTS,
  TRIAL,
  TRIAL_OFFER,
  TUTOR_FACTS,
  RESCHEDULE_NOTICE_HOURS,
  CANCELLATION_NOTICE_DAYS,
} from "@/lib/academyFacts";
import { serializeJsonLd } from "@/lib/jsonLd";
import { buildCourseWithPricingJsonLd } from "@/lib/courseJsonLd";

export const revalidate = false;

export const metadata: Metadata = {
  title: {
    absolute: "Online Quran Classes for Kids | One-to-One Quran Lessons – NoorPath",
  },
  description:
    "Help your child learn the Quran online with one-to-one lessons, qualified teachers, flexible timings and a free trial class at NoorPath Academy.",
  keywords: [
    "online quran classes for kids",
    "quran classes for children",
    "online quran teacher for kids",
    "quran lessons for beginners",
    "kids quran classes with tajweed",
    "one-to-one quran classes for children",
    "quran classes for kids online",
    "learn quran online for kids",
    "female quran teacher for kids",
    "noorani qaida for kids online",
    "hifz for kids online",
    "safe online quran classes",
    "free quran trial for kids",
    "after school quran classes online",
  ],
  alternates: { canonical: "https://www.noorpath.online/online-quran-classes-for-kids" },
  openGraph: {
    title: "Online Quran Classes for Kids | One-to-One Quran Lessons – NoorPath",
    description:
      "Help your child learn the Quran online with one-to-one lessons, qualified teachers, flexible timings and a free trial class at NoorPath Academy.",
    url: "https://www.noorpath.online/online-quran-classes-for-kids",
    images: [
      {
        url: "/marketing/kids-online-quran-class.jpg",
        width: 1200,
        height: 800,
        alt: "Online Quran Classes for Kids — NoorPath Academy",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Online Quran Classes for Kids | One-to-One Quran Lessons – NoorPath",
    description:
      "Help your child learn the Quran online with one-to-one lessons, qualified teachers, flexible timings and a free trial class at NoorPath Academy.",
    images: ["/marketing/kids-online-quran-class.jpg"],
  },
};

const PAGE_URL = `${BASE_URL}/online-quran-classes-for-kids`;

const faqs = [
  {
    q: "At what age can children start learning the Quran?",
    a: "Children can start learning from age 4. For ages 4 to 6, lessons focus on gentle Arabic letter recognition, phonetics, and short oral supplications using interactive visual aids suited to young attention spans.",
  },
  {
    q: "Can complete beginners join?",
    a: "Yes. Complete beginners start from scratch with Noorani Qaida, learning letter shapes, proper articulation points (Makharij), and vowel sounds at their own individual pace before progressing to full words.",
  },
  {
    q: "Are classes one-to-one?",
    a: "Yes. Every lesson is 100% private and one-to-one with an assigned live teacher via Zoom or Google Meet. We do not conduct group webinars, ensuring your child receives undivided attention and immediate pronunciation correction.",
  },
  {
    q: "Can parents request a female Quran teacher?",
    a: "Yes. Qualified female Quran teachers holding an Ijazah or certified Islamic credentials are available upon request for daughters, sisters, and young children. You can select your preference directly on the trial request form.",
  },
  {
    q: "Are class timings flexible for international families?",
    a: "Yes. We coordinate lesson slots around family routines across the UK (GMT/BST), USA & Canada (EST/CST/PST), Australia (AEST), Gulf (GST/AST), and Europe. Morning, after-school, and weekend windows are confirmed after tutor matching.",
  },
  {
    q: "What will my child learn?",
    a: "Depending on your child's age and starting level, they can study Noorani Qaida, fluent Quran recitation with Tajweed rules, Quran memorization (Hifz), daily Islamic duas, the 6 Kalimas, and foundational Islamic manners (Akhlaq).",
  },
  {
    q: "How can I book a trial class?",
    a: `Fill out the free trial request form on this page with your child's age, level, preferred time window, and teacher preference. Our academic coordinator will match a suitable tutor and confirm your ${TRIAL.classes} free ${TRIAL.durationMinutes}-minute trial classes via WhatsApp or email — no credit card needed.`,
  },
  {
    q: "Can parents monitor their child's progress?",
    a: "Yes. Parents are always welcome to observe lessons at home. In addition, enrolled families receive regular tutor feedback notes and can log into the secure Parent Portal to review attendance, assigned homework, and curriculum milestone reports.",
  },
];

const kidsCourseJsonLd = buildCourseWithPricingJsonLd({
  name: "Online Quran Classes for Kids",
  description:
    "Live one-to-one online Quran classes for children ages 4–12, with tutor matching for Noorani Qaida, Tajweed, Hifz, daily duas and Islamic studies.",
  url: PAGE_URL,
});

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${PAGE_URL}#webpage`,
      url: PAGE_URL,
      name: "Online Quran Classes for Kids | One-to-One Quran Lessons – NoorPath",
      description:
        "Help your child learn the Quran online with one-to-one lessons, qualified teachers, flexible timings and a free trial class at NoorPath Academy.",
      isPartOf: { "@type": "WebSite", "@id": `${BASE_URL}/#website`, url: BASE_URL },
      about: { "@id": `${PAGE_URL}#service` },
      mainEntity: { "@id": `${PAGE_URL}#course` },
      speakable: {
        "@type": "SpeakableSpecification",
        cssSelector: ["#kids-hero-title", ".np-quick-answer"],
      },
    },
    {
      ...kidsCourseJsonLd,
      educationalLevel: "Beginner to Advanced",
      typicalAgeRange: "4-12",
      inLanguage: ["en", "ar", "ur"],
    },
    {
      "@type": "Service",
      "@id": `${PAGE_URL}#service`,
      name: "Online Quran Classes for Kids",
      description:
        "Live 1-on-1 online Quran lessons for children ages 4–12 with personalized tutor matching for Noorani Qaida, Tajweed, Hifz, daily duas, and Islamic studies.",
      provider: ORGANIZATION_REF,
      serviceType: "Online Quran Education for Children",
      audience: { "@type": "Audience", audienceType: "Children ages 4–12 and their parents" },
      url: PAGE_URL,
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
        name: `${TRIAL.classes} Free ${TRIAL.durationMinutes}-Minute Trial Quran Classes`,
        description: `${TRIAL_OFFER} with no credit card required. Tutor availability confirmed after request.`,
        url: `${BASE_URL}/free-quran-classes-online`,
      },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
        { "@type": "ListItem", position: 2, name: "Online Quran Classes", item: `${BASE_URL}/online-quran-classes` },
        { "@type": "ListItem", position: 3, name: "Online Quran Classes for Kids", item: PAGE_URL },
      ],
    },
  ],
};

const trustStats = [
  { value: "1-to-1", label: "Private Live Lessons" },
  { value: `${TRIAL.classes} Free`, label: `${TRIAL.durationMinutes}-Min Trial Classes` },
  { value: "No Card", label: "Required for Trial" },
  { value: "Flexible", label: "Timezone Scheduling" },
  { value: "Available", label: "Female Quran Tutors" },
];

const priorityGeoTimezones = [
  { country: "🇬🇧 United Kingdom", desc: "GMT/BST after-school and weekend lesson slots" },
  { country: "🇺🇸 United States", desc: "EST, CST, and PST scheduling around school days" },
  { country: "🇨🇦 Canada", desc: "EST, CST, and PST slots aligned with Canadian schools" },
  { country: "🇦🇺 Australia", desc: "AEST/AEDT weekend and afternoon family windows" },
  { country: "🇦🇪 Gulf (UAE / KSA)", desc: "GST/AST slots suited for international school routines" },
  { country: "🇪🇺 Europe", desc: "CET/CEST evening windows for Muslim families across Europe" },
];

export default function OnlineQuranClassesForKidsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeJsonLd(jsonLd) }} />

      {/* ══════════════════════════════════════════════════════════════
          SECTION 1 — HERO
          ══════════════════════════════════════════════════════════════ */}
      <header className="page-hero">
        <div className="max-w-[1200px] mx-auto px-4 page-hero-content">
          <nav aria-label="Breadcrumb" style={{ marginBottom: 16 }}>
            <Link href="/" style={{ color: "var(--gold-lt)", fontSize: ".85rem" }}>Home</Link>
            <span style={{ color: "rgba(255,255,255,.4)", margin: "0 8px" }}>›</span>
            <Link href="/online-quran-classes" style={{ color: "var(--gold-lt)", fontSize: ".85rem" }}>Online Quran Classes</Link>
            <span style={{ color: "rgba(255,255,255,.4)", margin: "0 8px" }}>›</span>
            <span style={{ color: "rgba(255,255,255,.75)", fontSize: ".85rem" }}>For Kids</span>
          </nav>

          <h1 id="kids-hero-title">
            Online Quran Classes for Kids – Learn the Quran with Confidence
          </h1>

          <p style={{ maxWidth: 720, fontSize: "1.05rem", lineHeight: 1.8, marginBottom: 20 }}>
            Children can learn the Quran comfortably from home through personalized one-to-one online Quran lessons.
            With undivided individual attention, patient beginner-friendly guidance, flexible after-school and weekend
            timings, and regular parent progress updates, your child develops accurate Arabic pronunciation and genuine love
            for the Book of Allah. Book{" "}
            <strong style={{ color: "var(--gold-lt)" }}>{TRIAL.classes} free {TRIAL.durationMinutes}-minute trial classes</strong> — no credit card required.
          </p>

          <div style={{ display: "flex", gap: 14, flexWrap: "wrap", alignItems: "center", marginTop: 26 }}>
            <a href="#trial-form" className="btn-primary-np" style={{ textDecoration: "none" }}>
              Book a Free Trial →
            </a>
            <WhatsAppLink
              href={`https://wa.me/923124877906?text=${encodeURIComponent(
                "Assalamu Alaikum! I would like to book a free Quran trial class for my child at NoorPath Academy. Please share details."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline-np"
              style={{ color: "#fff", borderColor: "rgba(255,255,255,.55)" }}
            >
              <MessageCircle size={17} aria-hidden="true" style={{ marginRight: 6 }} />
              WhatsApp Us
            </WhatsAppLink>
            <Link href="/pricing" className="btn-outline-np" style={{ color: "#fff", borderColor: "rgba(255,255,255,.55)" }}>
              View Pricing &amp; Plans
            </Link>
            <span style={{ color: "rgba(255,255,255,.75)", fontSize: ".85rem", display: "inline-flex", alignItems: "center", gap: 6 }}>
              ✓ Ages 4–12 · Female tutors available · Timezone matching
            </span>
          </div>
        </div>
      </header>

      {/* TRUST STATS BAR */}
      <section style={{ background: "var(--emerald)", padding: "18px 0" }} aria-label="Key Service Highlights">
        <div className="max-w-[1200px] mx-auto px-4">
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "20px 36px" }}>
            {trustStats.map((s) => (
              <div key={s.label} style={{ textAlign: "center" }}>
                <div style={{ color: "#fff", fontWeight: 800, fontSize: "1.15rem" }}>{s.value}</div>
                <div style={{ color: "rgba(255,255,255,.85)", fontSize: ".76rem", fontWeight: 500 }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AEO QUICK ANSWER BOX */}
      <section className="py-6 bg-[rgba(10,110,79,0.03)] border-b border-[var(--border)]">
        <div className="max-w-[1200px] mx-auto px-4">
          <div
            className="np-quick-answer"
            style={{
              background: "rgba(10,110,79,0.05)",
              borderLeft: "4px solid var(--emerald)",
              borderRadius: 12,
              padding: "18px 22px",
              fontSize: "0.95rem",
              lineHeight: 1.75,
              color: "var(--charcoal)",
            }}
          >
            <strong style={{ color: "var(--emerald)" }}>Quick answer: </strong>
            <span>
              Online Quran classes for kids connect children ages 4–12 with certified teachers via live 1-on-1 video lessons.
              Children learn from home through tailored instruction covering Noorani Qaida, Tajweed, daily duas, and Hifz.
              Parents choose convenient lesson windows in their local timezone with male or female tutors.
              NoorPath Academy offers {TRIAL_OFFER} with no credit card required, plus full parent portal visibility and a {REFUND_WINDOW_DAYS}-day money-back guarantee.
            </span>
          </div>
        </div>
      </section>

      {/* HERO VISUAL & CLASS SNAPSHOT */}
      <section style={{ padding: "44px 0 20px" }}>
        <div className="max-w-[1200px] mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mb-12">
            <div style={{ borderRadius: 18, overflow: "hidden", border: "1px solid var(--border)", position: "relative" }}>
              <Image
                src="/marketing/kids-online-quran-class.jpg"
                alt="Child learning Quran online at home with a live one-to-one tutor on a tablet"
                width={900}
                height={600}
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
                style={{ width: "100%", height: "auto", display: "block" }}
              />
            </div>
            <div>
              <span className="section-eyebrow">Personalized Quran Education</span>
              <h2 style={{ fontFamily: "var(--font-playfair), serif", fontSize: "1.65rem", color: "var(--charcoal)", margin: "8px 0 14px" }}>
                What a One-to-One Kids Lesson Looks Like
              </h2>
              <p style={{ color: "var(--muted)", lineHeight: 1.75, marginBottom: 18 }}>
                Your child logs in from home, opens their Noorani Qaida or Mushaf, and interacts directly with an attentive,
                patient teacher. Unlike crowded weekend madrasas or pre-recorded video apps, the tutor listens to every word,
                gently correcting tongue placement and vowel lengths while encouraging positive Quranic connection.
              </p>
              <div className="grid grid-cols-2 gap-3 mb-6">
                {[
                  { v: "1-on-1", l: "Private live video sessions" },
                  { v: "Interactive", l: "Visual letter games & drills" },
                  { v: "Ages 4+", l: "Beginner-friendly progression" },
                  { v: "No Card", l: "3 free trial classes to start" },
                ].map((x) => (
                  <div key={x.l} style={{ background: "rgba(10,110,79,.05)", borderRadius: 12, padding: "12px 14px" }}>
                    <div style={{ fontWeight: 800, color: "var(--emerald)", fontSize: "1.05rem" }}>{x.v}</div>
                    <div style={{ fontSize: ".76rem", color: "var(--muted)", marginTop: 2 }}>{x.l}</div>
                  </div>
                ))}
              </div>
              <p style={{ fontSize: ".88rem", color: "var(--muted)", margin: 0 }}>
                Explore our wider academic curriculum in the{" "}
                <Link href="/online-quran-classes" style={{ color: "var(--emerald)", fontWeight: 600 }}>
                  main online Quran classes guide
                </Link>{" "}
                or start with our{" "}
                <Link href="/free-quran-classes-online" style={{ color: "var(--emerald)", fontWeight: 600 }}>
                  free trial class details
                </Link>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          SECTION 2 — WHY PARENTS CHOOSE NOORPATH
          ══════════════════════════════════════════════════════════════ */}
      <section style={{ background: "var(--ivory)", padding: "72px 0", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }} aria-labelledby="why-parents-heading">
        <div className="max-w-[1200px] mx-auto px-4">
          <div style={{ textAlign: "center", marginBottom: 44 }}>
            <span className="section-eyebrow">Service Transparency</span>
            <h2 id="why-parents-heading" className="section-title">
              Why Parents Choose NoorPath for Their Children
            </h2>
            <p style={{ color: "var(--muted)", maxWidth: 720, margin: "12px auto 0", lineHeight: 1.75 }}>
              We know parents want a trusted, nurturing environment where their child receives genuine personal care.
              Here are the honest service principles that guide every NoorPath lesson:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: <Users size={24} />,
                title: "One-to-One Dedicated Attention",
                desc: "Every lesson is 100% individual. The tutor focuses solely on your child, adapting teaching pacing, explanations, and encouragement to their unique learning personality.",
              },
              {
                icon: <Sparkles size={24} />,
                title: "Beginner-Friendly & Level-Adapted",
                desc: "Whether your child is starting with their very first Arabic letter in Noorani Qaida or polishing advanced Tajweed recitation, lessons match their exact level without rushing.",
              },
              {
                icon: <Clock size={24} />,
                title: "Flexible Timings for Global Families",
                desc: "Classes are arranged around your household schedule — after school, early evening, or weekends across UK, US, Canadian, Australian, and Gulf timezones.",
              },
              {
                icon: <FileText size={24} />,
                title: "Transparent Parent Progress Updates",
                desc: "You never have to guess how your child is doing. Regular feedback notes, attendance logs, and milestone updates are shared directly with parents.",
              },
              {
                icon: <Laptop size={24} />,
                title: "Safe, Comfortable Learning from Home",
                desc: "No stressful rush-hour madrasa drop-offs or parking headaches. Children learn in a calm, safe home environment where parents can easily listen in.",
              },
              {
                icon: <UserCheck size={24} />,
                title: "Female Quran Teacher Requests",
                desc: (
                  <>
                    Parents may request a qualified{" "}
                    <Link href="/female-quran-teacher-online" style={{ color: "var(--emerald)", fontWeight: 650 }}>
                      female Quran teacher online
                    </Link>{" "}
                    for daughters, sisters, or young boys. Every tutor holds an Ijazah or certified teaching credentials.
                  </>
                ),
              },
            ].map((card) => (
              <div key={card.title} className="content-card" style={{ display: "flex", flexDirection: "column", height: "100%" }}>
                <div style={{ color: "var(--emerald)", marginBottom: 12 }}>{card.icon}</div>
                <h3 style={{ fontFamily: "var(--font-playfair), serif", fontSize: "1.05rem", fontWeight: 700, marginBottom: 8, color: "var(--charcoal)" }}>
                  {card.title}
                </h3>
                <div style={{ color: "var(--muted)", fontSize: ".88rem", lineHeight: 1.7, margin: 0, flexGrow: 1 }}>
                  {card.desc}
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: "center", marginTop: 32 }}>
            <a href="#trial-form" className="btn-primary-np" style={{ textDecoration: "none" }}>
              Request Your Child&apos;s Free Trial Class →
            </a>
            <p style={{ color: "var(--muted)", fontSize: ".88rem", marginTop: 14 }}>
              Are you also looking for adult lessons? Explore our dedicated{" "}
              <Link href="/online-quran-classes-for-adults" style={{ color: "var(--emerald)", fontWeight: 650 }}>
                online Quran classes for adults
              </Link>{" "}
              tailored for mature schedules and independent pacing.
            </p>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          SECTION 3 — WHAT CHILDREN CAN LEARN
          ══════════════════════════════════════════════════════════════ */}
      <section style={{ padding: "72px 0" }} aria-labelledby="curriculum-heading">
        <div className="max-w-[1200px] mx-auto px-4">
          <div style={{ textAlign: "center", marginBottom: 44 }}>
            <span className="section-eyebrow">Structured Curriculum</span>
            <h2 id="curriculum-heading" className="section-title">
              What Children Can Learn at NoorPath Academy
            </h2>
            <p style={{ color: "var(--muted)", maxWidth: 700, margin: "12px auto 0", lineHeight: 1.75 }}>
              Courses are designed specifically for young minds, blending traditional Quranic scholarship with clear,
              child-friendly pedagogical frameworks:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {/* 1. Noorani Qaida */}
            <div className="content-card" style={{ borderTop: "3px solid var(--emerald)", display: "flex", flexDirection: "column" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
                <BookOpen size={22} color="var(--emerald)" />
                <h3 style={{ fontFamily: "var(--font-playfair), serif", fontSize: "1.1rem", margin: 0, color: "var(--charcoal)" }}>
                  1. Noorani Qaida
                </h3>
              </div>
              <p style={{ color: "var(--muted)", fontSize: ".88rem", lineHeight: 1.7, marginBottom: 16, flexGrow: 1 }}>
                The foundational Arabic reading course. Children learn the 28 Arabic letters, articulation points (Makharij),
                vowels (Fatha, Kasra, Damma), Tanween, Sukoon, Shaddah, and compound letter joining.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 6, fontSize: ".85rem" }}>
                <Link href="/noorani-qaida" style={{ color: "var(--emerald)", fontWeight: 650, textDecoration: "none" }}>
                  → Interactive Noorani Qaida Hub
                </Link>
                <Link href="/courses/noorani-qaida-online" style={{ color: "var(--emerald)", fontWeight: 650, textDecoration: "none" }}>
                  → Live Noorani Qaida Online Course
                </Link>
              </div>
            </div>

            {/* 2. Quran Reading with Tajweed */}
            <div className="content-card" style={{ borderTop: "3px solid var(--emerald)", display: "flex", flexDirection: "column" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
                <Award size={22} color="var(--emerald)" />
                <h3 style={{ fontFamily: "var(--font-playfair), serif", fontSize: "1.1rem", margin: 0, color: "var(--charcoal)" }}>
                  2. Quran Reading (Nazra)
                </h3>
              </div>
              <p style={{ color: "var(--muted)", fontSize: ".88rem", lineHeight: 1.7, marginBottom: 16, flexGrow: 1 }}>
                Once letter joining is sound, children graduate to reading directly from the Mushaf. Tutors provide word-by-word
                listening and guide students through correct stopping signs (Waqf) and steady rhythmic recitation.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 6, fontSize: ".85rem" }}>
                <Link href="/learn-tajweed-online" style={{ color: "var(--emerald)", fontWeight: 650, textDecoration: "none" }}>
                  → Learn Tajweed Online Guide
                </Link>
                <Link href="/courses/tajweed-classes-online" style={{ color: "var(--emerald)", fontWeight: 650, textDecoration: "none" }}>
                  → Live Tajweed Classes for Children
                </Link>
              </div>
            </div>

            {/* 3. Basic Tajweed */}
            <div className="content-card" style={{ borderTop: "3px solid var(--emerald)", display: "flex", flexDirection: "column" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
                <Sparkles size={22} color="var(--emerald)" />
                <h3 style={{ fontFamily: "var(--font-playfair), serif", fontSize: "1.1rem", margin: 0, color: "var(--charcoal)" }}>
                  3. Practical Tajweed Rules
                </h3>
              </div>
              <p style={{ color: "var(--muted)", fontSize: ".88rem", lineHeight: 1.7, marginBottom: 16, flexGrow: 1 }}>
                Children understand practical recitation rules: Qalqalah (echoing letters), Ghunnah (nasal sounds), Noon Sakinah
                rules (Izhar, Iqlab, Idgham, Ikhfa), and Madd elongation without complicated theoretical jargon.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 6, fontSize: ".85rem" }}>
                <Link href="/noorani-qaida/tajweed/makharij" style={{ color: "var(--emerald)", fontWeight: 650, textDecoration: "none" }}>
                  → Arabic Makharij Pronunciation Guide
                </Link>
              </div>
            </div>

            {/* 4. Memorization (Hifz) */}
            <div className="content-card" style={{ borderTop: "3px solid var(--emerald)", display: "flex", flexDirection: "column" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
                <GraduationCap size={22} color="var(--emerald)" />
                <h3 style={{ fontFamily: "var(--font-playfair), serif", fontSize: "1.1rem", margin: 0, color: "var(--charcoal)" }}>
                  4. Quran Memorization (Hifz)
                </h3>
              </div>
              <p style={{ color: "var(--muted)", fontSize: ".88rem", lineHeight: 1.7, marginBottom: 16, flexGrow: 1 }}>
                For children who read fluently and wish to memorize short Surahs (Juz Amma) or the full Quran. Uses the proven
                Sabaq (new lesson), Sabqi (recent revision), and Manzil (cumulative retention) system.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 6, fontSize: ".85rem" }}>
                <Link href="/hifz-quran-online" style={{ color: "var(--emerald)", fontWeight: 650, textDecoration: "none" }}>
                  → Hifz Quran Online Program
                </Link>
                <Link href="/tools/hifz-calculator" style={{ color: "var(--emerald)", fontWeight: 650, textDecoration: "none" }}>
                  → Interactive Hifz Completion Calculator
                </Link>
              </div>
            </div>

            {/* 5. Daily Duas and Kalmas */}
            <div className="content-card" style={{ borderTop: "3px solid var(--emerald)", display: "flex", flexDirection: "column" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
                <HeartHandshake size={22} color="var(--emerald)" />
                <h3 style={{ fontFamily: "var(--font-playfair), serif", fontSize: "1.1rem", margin: 0, color: "var(--charcoal)" }}>
                  5. Daily Duas &amp; 6 Kalmas
                </h3>
              </div>
              <p style={{ color: "var(--muted)", fontSize: ".88rem", lineHeight: 1.7, marginBottom: 16, flexGrow: 1 }}>
                Essential Islamic life habits. Children memorize daily Sunnah supplications (before eating, sleeping, waking,
                entering home) along with the 6 Kalimas and their basic English meanings.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 6, fontSize: ".85rem" }}>
                <Link href="/blog/attahiyat-full-arabic-english-tashahhud" style={{ color: "var(--emerald)", fontWeight: 650, textDecoration: "none" }}>
                  → Attahiyat Tashahhud in Salah
                </Link>
              </div>
            </div>

            {/* 6. Basic Islamic Studies */}
            <div className="content-card" style={{ borderTop: "3px solid var(--emerald)", display: "flex", flexDirection: "column" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
                <Shield size={22} color="var(--emerald)" />
                <h3 style={{ fontFamily: "var(--font-playfair), serif", fontSize: "1.1rem", margin: 0, color: "var(--charcoal)" }}>
                  6. Islamic Studies &amp; Manners
                </h3>
              </div>
              <p style={{ color: "var(--muted)", fontSize: ".88rem", lineHeight: 1.7, marginBottom: 16, flexGrow: 1 }}>
                Practical foundation including step-by-step Wudu, Salah prayer practice, the 5 Pillars of Islam, stories
                of the Prophets, and core Islamic character values (Akhlaq) like truthfulness and kindness.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 6, fontSize: ".85rem" }}>
                <Link href="/courses/islamic-studies-online" style={{ color: "var(--emerald)", fontWeight: 650, textDecoration: "none" }}>
                  → Islamic Studies Online Course
                </Link>
              </div>
            </div>
          </div>

          {/* Interactive Qaida practice promo */}
          <div style={{ background: "linear-gradient(135deg, rgba(10,110,79,.06), rgba(201,146,42,.08))", borderRadius: 16, padding: "28px 32px", border: "1px solid rgba(10,110,79,.15)" }}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
              <div className="md:col-span-2">
                <span className="section-eyebrow">Between-Lesson Practice</span>
                <h3 style={{ fontFamily: "var(--font-playfair), serif", fontSize: "1.3rem", color: "var(--charcoal)", margin: "4px 0 10px" }}>
                  Free Interactive Noorani Qaida Games for Kids
                </h3>
                <p style={{ color: "var(--muted)", fontSize: ".9rem", lineHeight: 1.7, margin: 0 }}>
                  Children retain letter sounds faster through playful repetition. We provide free mobile-friendly letter matching,
                  harakat quizzes, and printable worksheets to reinforce learning between live teacher lessons.
                </p>
              </div>
              <div style={{ textAlign: "center" }}>
                <Link href="/noorani-qaida/games" className="btn-primary-np" style={{ textDecoration: "none", display: "inline-block" }}>
                  Play Free Qaida Games →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          SECTION 4 — LEARNING JOURNEY
          ══════════════════════════════════════════════════════════════ */}
      <section style={{ background: "var(--ivory)", padding: "72px 0", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }} aria-labelledby="journey-heading">
        <div className="max-w-[1200px] mx-auto px-4">
          <div style={{ textAlign: "center", marginBottom: 44 }}>
            <span className="section-eyebrow">Step-by-Step Pathway</span>
            <h2 id="journey-heading" className="section-title">
              Your Child&apos;s Learning Journey at NoorPath
            </h2>
            <p style={{ color: "var(--muted)", maxWidth: 720, margin: "12px auto 0", lineHeight: 1.75 }}>
              We follow a simple, structured 5-step progression adapted to your child&apos;s individual readiness.
              We prioritize sound understanding over rushed completion:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-8">
            {[
              {
                step: "1",
                title: "Assess Child's Level",
                desc: "During the free trial class, the tutor listens gently to assess letter recognition, attention span, and current reading ability.",
              },
              {
                step: "2",
                title: "Start Right Lessons",
                desc: "Beginners start with Noorani Qaida alphabet shapes; existing readers begin recitation correction or Tajweed exercises.",
              },
              {
                step: "3",
                title: "Practice & Makharij",
                desc: "In live 1-on-1 sessions, the teacher corrects pronunciation in real-time, modeling authentic mouth and throat articulation.",
              },
              {
                step: "4",
                title: "Compound Regularity",
                desc: "Weekly recurring lessons build consistency, helping your child form a positive daily habit and natural reading rhythm.",
              },
              {
                step: "5",
                title: "Share Parent Updates",
                desc: "Tutors share progress remarks, homework tasks, and completed milestones directly with parents after sessions.",
              },
            ].map((st) => (
              <div key={st.step} className="content-card" style={{ textAlign: "center", padding: "24px 16px" }}>
                <div
                  style={{
                    width: 44,
                    height: 44,
                    borderRadius: "50%",
                    background: "var(--emerald)",
                    color: "#fff",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: 800,
                    fontSize: "1.15rem",
                    margin: "0 auto 14px",
                  }}
                >
                  {st.step}
                </div>
                <h3 style={{ fontSize: ".95rem", fontWeight: 700, marginBottom: 8, color: "var(--charcoal)" }}>{st.title}</h3>
                <p style={{ color: "var(--muted)", fontSize: ".83rem", lineHeight: 1.6, margin: 0 }}>{st.desc}</p>
              </div>
            ))}
          </div>

          <div style={{ background: "#fff", borderRadius: 12, padding: "16px 20px", border: "1px solid var(--border)", textAlign: "center", maxWidth: 800, margin: "0 auto" }}>
            <p style={{ margin: 0, fontSize: ".86rem", color: "var(--slate)", lineHeight: 1.7 }}>
              <strong>Honest learning timelines:</strong> Every child learns at their own pace. Progress depends on age, prior Arabic familiarity,
              and 5 to 10 minutes of daily home practice. NoorPath never promises artificial or guaranteed completion dates.
            </p>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          SECTION 5 — HOW ONLINE CLASSES WORK
          ══════════════════════════════════════════════════════════════ */}
      <section style={{ padding: "72px 0" }} aria-labelledby="how-it-works-heading">
        <div className="max-w-[1200px] mx-auto px-4">
          <div style={{ textAlign: "center", marginBottom: 44 }}>
            <span className="section-eyebrow">Simple &amp; Safe Process</span>
            <h2 id="how-it-works-heading" className="section-title">
              How Online Quran Classes Work
            </h2>
            <p style={{ color: "var(--muted)", maxWidth: 700, margin: "12px auto 0", lineHeight: 1.75 }}>
              Getting started is straightforward, transparent, and completely risk-free for your family:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {[
              {
                num: "01",
                title: "Submit a Free Trial Request",
                desc: `Fill out the quick form below with your child's age, current Quran level, preferred local timezone, and male or female teacher preference. Takes less than 60 seconds.`,
              },
              {
                num: "02",
                title: "Tutor Matching & Confirmation",
                desc: "Our academic team pairs your child with a certified tutor whose schedule and teaching style match your needs. We confirm the lesson day and meeting link via WhatsApp or email.",
              },
              {
                num: "03",
                title: "Attend the Live 1-on-1 Trial",
                desc: `Your child connects to the ${TRIAL.durationMinutes}-minute live lesson on Zoom or Google Meet from a laptop or tablet. Parents are warmly invited to sit beside their child.`,
              },
              {
                num: "04",
                title: "Discuss Suitable Learning Plan",
                desc: "Following the trial, the tutor shares an initial assessment and suggests the right course route (Noorani Qaida, Tajweed, or Hifz) along with recommended weekly lesson frequency.",
              },
              {
                num: "05",
                title: "Begin Ongoing Lessons (No Lock-In)",
                desc: `If you decide to continue, choose a simple monthly plan from $${PRICING_PLANS[0].monthlyPriceUsd}/mo. Enjoy sibling discounts (${FAMILY_DISCOUNTS[0].discountPercent}%–${FAMILY_DISCOUNTS[2].discountPercent}%) and a ${REFUND_WINDOW_DAYS}-day refund guarantee. Cancel anytime.`,
              },
              {
                num: "06",
                title: "Family Discounts for Siblings",
                desc: `Enrolling more than one child? Published sibling discounts apply automatically: ${FAMILY_DISCOUNTS.map((d) => `${d.siblings} (${d.discountPercent}%)`).join(", ")}.`,
              },
            ].map((step) => (
              <div key={step.num} className="content-card" style={{ display: "flex", flexDirection: "column" }}>
                <div style={{ color: "var(--emerald)", fontWeight: 800, fontSize: "1.3rem", marginBottom: 8 }}>{step.num}</div>
                <h3 style={{ fontFamily: "var(--font-playfair), serif", fontSize: "1.05rem", color: "var(--charcoal)", marginBottom: 8 }}>{step.title}</h3>
                <p style={{ color: "var(--muted)", fontSize: ".87rem", lineHeight: 1.7, margin: 0, flexGrow: 1 }}>{step.desc}</p>
              </div>
            ))}
          </div>

          {/* Timezone availability box */}
          <div style={{ background: "var(--ivory)", borderRadius: 16, padding: "28px 32px", border: "1px solid var(--border)" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
              <Globe size={22} color="var(--emerald)" />
              <h3 style={{ fontFamily: "var(--font-playfair), serif", fontSize: "1.2rem", margin: 0, color: "var(--charcoal)" }}>
                Flexible Timezone Matching for Families Worldwide
              </h3>
            </div>
            <p style={{ color: "var(--muted)", fontSize: ".88rem", lineHeight: 1.65, marginBottom: 16 }}>
              Whether you are looking for after-school sessions in London, weekend mornings in New York, or evening classes in Sydney,
              we match schedules to your local clock:
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {priorityGeoTimezones.map((tz) => (
                <div key={tz.country} style={{ background: "#fff", padding: "10px 14px", borderRadius: 8, border: "1px solid var(--border)", fontSize: ".82rem" }}>
                  <strong style={{ color: "var(--charcoal)", display: "block" }}>{tz.country}</strong>
                  <span style={{ color: "var(--muted)" }}>{tz.desc}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          SECTION 6 — PARENT PORTAL AND PROGRESS
          ══════════════════════════════════════════════════════════════ */}
      <section style={{ background: "linear-gradient(180deg, #f7faf8, #fff)", padding: "72px 0", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }} aria-labelledby="portal-heading">
        <div className="max-w-[1200px] mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="section-eyebrow">Full Transparency for Families</span>
              <h2 id="portal-heading" className="section-title">
                Parent Portal &amp; Progress Tracking
              </h2>
              <p style={{ color: "var(--muted)", lineHeight: 1.75, marginBottom: 20 }}>
                We believe parents should never be left wondering how their child is progressing. NoorPath provides enrolled
                families with a dedicated, secure Parent Portal to follow each lesson&apos;s outcome:
              </p>

              <div style={{ display: "flex", flexDirection: "column", gap: 14, marginBottom: 24 }}>
                {[
                  {
                    title: "Live Attendance Tracking",
                    desc: "View confirmed class dates, completed sessions, and upcoming recurring slots at a glance.",
                  },
                  {
                    title: "Homework & Reading Assignments",
                    desc: "See exact Noorani Qaida pages, Surah verses, or daily duas assigned by the teacher for home review.",
                  },
                  {
                    title: "Milestone & Surah Completion",
                    desc: "Celebrate tangible progress as your child finishes Qaida modules, masters Tajweed rules, and memorizes Surahs.",
                  },
                  {
                    title: "Teacher Feedback Notes",
                    desc: "Read direct remarks from your child's tutor highlighting pronunciation accuracy, effort, and areas to reinforce.",
                  },
                  {
                    title: "Straightforward Rescheduling",
                    desc: `Need to adjust a session for a family event or doctor visit? Request a move with ${RESCHEDULE_NOTICE_HOURS} hours' notice directly through student support.`,
                  },
                ].map((item) => (
                  <div key={item.title} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                    <div style={{ width: 22, height: 22, borderRadius: "50%", background: "rgba(10,110,79,.12)", color: "var(--emerald)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: 2 }}>
                      <Check size={14} />
                    </div>
                    <div>
                      <strong style={{ color: "var(--charcoal)", fontSize: ".92rem", display: "block" }}>{item.title}</strong>
                      <span style={{ color: "var(--muted)", fontSize: ".85rem", lineHeight: 1.6 }}>{item.desc}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                <a href="#trial-form" className="btn-primary-np" style={{ textDecoration: "none" }}>
                  Start with 3 Free Trial Classes →
                </a>
                <Link href="/pricing" className="btn-outline-np" style={{ textDecoration: "none" }}>
                  View Family Pricing Plans
                </Link>
              </div>
            </div>

            <div style={{ borderRadius: 18, overflow: "hidden", border: "1px solid var(--border)", boxShadow: "0 12px 36px rgba(10,110,79,.08)" }}>
              <Image
                src="/marketing/parent-portal-promo.jpg"
                alt="NoorPath Academy Parent Portal preview showing student attendance, homework tasks, and progress reports"
                width={800}
                height={550}
                sizes="(max-width: 1024px) 100vw, 550px"
                style={{ width: "100%", height: "auto", display: "block" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* STRUGGLING CHILD DIAGNOSTIC RESOURCES */}
      <section style={{ padding: "64px 0" }} aria-labelledby="kids-support-heading">
        <div className="max-w-[1200px] mx-auto px-4">
          <div style={{ textAlign: "center", marginBottom: 36 }}>
            <span className="section-eyebrow">Parent Support &amp; Problem Solving</span>
            <h2 id="kids-support-heading" className="section-title">
              When Quran Learning Feels Challenging at Home
            </h2>
            <p style={{ color: "var(--muted)", maxWidth: 720, margin: "12px auto 0", lineHeight: 1.75 }}>
              If your child resists sitting down or struggles to remember letters, it is almost always a signal about fatigue,
              session length, or teacher rapport — not lack of ability. Read our evidence-based family guides:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {[
              {
                href: "/blog/child-wont-sit-for-quran-class",
                title: "Child Won't Sit for Class",
                desc: "Why 10 calm minutes beat 40 tearful ones, and how to reset your child's learning routine positively.",
              },
              {
                href: "/blog/quran-homework-kids-wont-practice",
                title: "Refusing Daily Practice",
                desc: "How to turn homework into an easy 5-minute daily echo instead of a stressful family struggle.",
              },
              {
                href: "/blog/child-forgets-arabic-letters",
                title: "Forgetting Arabic Letters",
                desc: "Understanding what letter confusion signals and the spaced-repetition method that cements memory.",
              },
              {
                href: "/blog/quran-classes-for-adhd-kids",
                title: "Quran Learning & ADHD",
                desc: "Short lesson bursts, movement breaks, and how a private 1-on-1 tutor adapts pacing.",
              },
              {
                href: "/blog/quran-classes-for-shy-or-anxious-kids",
                title: "Shy or Anxious Reciters",
                desc: "How private 1-on-1 teaching removes peer pressure and builds gentle recitation confidence.",
              },
              {
                href: "/blog/bilingual-kids-learning-quran-arabic",
                title: "Bilingual Children & Arabic",
                desc: "How English-first and mixed-language homes build correct pronunciation without native Arabic speakers.",
              },
              {
                href: "/blog/single-parent-flexible-quran-classes-for-kids",
                title: "Flexible Family Routines",
                desc: "How busy working parents and single caregivers coordinate dependable weekend or evening slots.",
              },
              {
                href: "/blog/female-quran-teacher-for-kids",
                title: "Female Tutors for Daughters",
                desc: "Finding an experienced, patient female Hafiza tutor for your daughter in a safe home setting.",
              },
            ].map((guide) => (
              <Link key={guide.href} href={guide.href} style={{ textDecoration: "none" }}>
                <div className="content-card" style={{ height: "100%", borderTop: "3px solid var(--emerald)" }}>
                  <h3 style={{ fontSize: ".92rem", fontWeight: 700, color: "var(--charcoal)", marginBottom: 6 }}>
                    {guide.title} →
                  </h3>
                  <p style={{ color: "var(--muted)", fontSize: ".82rem", lineHeight: 1.6, margin: 0 }}>
                    {guide.desc}
                  </p>
                </div>
              </Link>
            ))}
          </div>

          {/* Published parent trust strip */}
          <TrustPolicyStrip />
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          SECTION 7 — FAQS
          ══════════════════════════════════════════════════════════════ */}
      <section style={{ background: "var(--ivory)", padding: "72px 0", borderTop: "1px solid var(--border)" }} aria-labelledby="faqs-heading">
        <div className="max-w-[800px] mx-auto px-4">
          <FaqJsonLd faqs={faqs} pageUrl={PAGE_URL} />
          <div style={{ textAlign: "center", marginBottom: 40 }}>
            <span className="section-eyebrow">Clear Answers</span>
            <h2 id="faqs-heading" className="section-title">
              Frequently Asked Questions About Kids Quran Classes
            </h2>
            <p style={{ color: "var(--muted)", marginTop: 10, lineHeight: 1.7 }}>
              Everything parents want to know about tutor qualifications, age readiness, and class scheduling:
            </p>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 14, marginBottom: 40 }}>
            {faqs.map((f, i) => (
              <details
                key={i}
                className="faq-acc"
                style={{
                  background: "#fff",
                  border: "1px solid var(--border)",
                  borderRadius: 12,
                  padding: "18px 22px",
                }}
              >
                <summary
                  style={{
                    fontWeight: 700,
                    color: "var(--charcoal)",
                    fontSize: ".96rem",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <span>{f.q}</span>
                  <ChevronRight size={18} style={{ color: "var(--emerald)", flexShrink: 0, marginLeft: 10 }} />
                </summary>
                <p style={{ color: "var(--muted)", marginTop: 12, lineHeight: 1.75, fontSize: ".9rem", margin: "12px 0 0" }}>
                  {f.a}
                </p>
              </details>
            ))}
          </div>

          <div style={{ textAlign: "center" }}>
            <p style={{ color: "var(--muted)", fontSize: ".9rem", marginBottom: 14 }}>
              Have another question about matching a tutor for your child?
            </p>
            <WhatsAppLink
              href={`https://wa.me/923124877906?text=${encodeURIComponent(
                "Assalamu Alaikum! I have a question about online Quran classes for my child. Could you help me?"
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline-np"
              style={{ display: "inline-flex", alignItems: "center", gap: 8, textDecoration: "none" }}
            >
              <MessageCircle size={18} color="var(--emerald)" />
              Ask Our Academic Team on WhatsApp
            </WhatsAppLink>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          SECTION 8 — FINAL CTA & TRIAL BOOKING FORM
          ══════════════════════════════════════════════════════════════ */}
      <section className="cta-section" id="trial-form" style={{ scrollMarginTop: 80 }}>
        <div className="max-w-[1200px] mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span
                style={{
                  color: "var(--gold-lt)",
                  fontWeight: 800,
                  fontSize: ".78rem",
                  letterSpacing: "1px",
                  textTransform: "uppercase",
                  display: "block",
                  marginBottom: 10,
                }}
              >
                No Credit Card Required · Free 1-on-1 Trial
              </span>
              <h2
                style={{
                  fontFamily: "var(--font-playfair), serif",
                  color: "#fff",
                  fontSize: "clamp(1.9rem, 4vw, 2.6rem)",
                  lineHeight: 1.25,
                  marginBottom: 18,
                }}
              >
                Give Your Child a Meaningful Quran Learning Journey
              </h2>
              <p style={{ color: "rgba(255,255,255,.8)", lineHeight: 1.75, marginBottom: 20, fontSize: "1rem" }}>
                Book {TRIAL.classes} free {TRIAL.durationMinutes}-minute trial classes today. Experience our live one-to-one teaching,
                see how your child connects with the tutor, and receive a clear personal learning recommendation before choosing any paid plan.
              </p>

              <div style={{ display: "grid", gap: 10, marginBottom: 28 }}>
                {[
                  `3 free 30-minute private lessons ($0 charge, no card)`,
                  "Certified male & female Quran teachers holding an Ijazah",
                  "Scheduled in your local timezone around school hours",
                  `Sibling discounts from ${FAMILY_DISCOUNTS[0].discountPercent}% to ${FAMILY_DISCOUNTS[2].discountPercent}%`,
                  `7-day full refund guarantee after your first paid class`,
                  "Cancel anytime with 7 days' notice before renewal",
                ].map((item) => (
                  <div key={item} style={{ display: "flex", alignItems: "center", gap: 10, color: "rgba(255,255,255,.9)", fontSize: ".9rem" }}>
                    <CheckCircle size={17} style={{ color: "var(--gold-lt)", flexShrink: 0 }} />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div style={{ display: "flex", gap: 12, alignItems: "center", flexWrap: "wrap" }}>
                <WhatsAppLink
                  href={`https://wa.me/923124877906?text=${encodeURIComponent(
                    "Assalamu Alaikum! I would like to book a free Quran trial class for my child. Please share available lesson times."
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline-np"
                  style={{ color: "#fff", borderColor: "rgba(255,255,255,.6)", textDecoration: "none" }}
                >
                  <MessageCircle size={17} aria-hidden="true" style={{ marginRight: 6 }} />
                  Inquire on WhatsApp
                </WhatsAppLink>
                <Link href="/pricing" style={{ color: "var(--gold-lt)", fontSize: ".88rem", textDecoration: "underline" }}>
                  Compare monthly lesson plans →
                </Link>
              </div>
            </div>

            <div className="cta-form-wrap" id="cta">
              <h3
                style={{
                  fontFamily: "var(--font-playfair), serif",
                  color: "#fff",
                  fontSize: "1.3rem",
                  marginBottom: 16,
                  textAlign: "center",
                }}
              >
                Book Your Child&apos;s Free Trial Class
              </h3>
              <p style={{ color: "rgba(255,255,255,.75)", fontSize: ".82rem", textAlign: "center", margin: "-6px 0 16px" }}>
                Takes 30 seconds · No credit card required · Tutor availability confirmed
              </p>
              <CTAForm idPrefix="kids-trial" formVariant="kids-bottom" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
