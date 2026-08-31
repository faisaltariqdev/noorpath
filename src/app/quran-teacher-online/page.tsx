import type { Metadata } from "next";
import Link from "next/link";
import OnlineQuranTeacherGuide from "@/components/OnlineQuranTeacherGuide";
import {
  BASE_URL,
  ORGANIZATION_REF,
  WEBSITE_ID,
} from "@/lib/organizationSchema";
import { PRIORITY_MARKETS } from "@/lib/geoSeo";
import { CheckCircle, Star, Shield, Clock, Users, Award } from "lucide-react";
import { PRICING_PLANS, TRIAL } from "@/lib/academyFacts";
import CTAForm from "@/components/CTAForm";

export const revalidate = false;

const PAGE_URL = `${BASE_URL}/quran-teacher-online`;

export const metadata: Metadata = {
  title: {
    absolute: "Online Quran Teacher — 1-to-1 Tutor Matching | NoorPath Academy",
  },
  description:
    "Request an online Quran teacher for a child or adult. Compare tutor fit for Qaida, Tajweed or Hifz, verify relevant credentials and book a free trial.",
  keywords: [
    "online quran teacher",
    "quran teacher online",
    "online quran tutor",
    "quran tutor online",
    "find quran teacher",
    "quran teacher for kids",
    "quran teacher for adults",
    "female quran teacher online",
    "private quran tutor",
    "1 to 1 quran teacher",
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Online Quran Teacher — 1-to-1 Tutor Matching",
    description:
      "A factual guide to requesting and evaluating an online Quran teacher for reading, Tajweed, Hifz, children or adults.",
    url: PAGE_URL,
    type: "website",
    images: [
      {
        url: "/marketing/family-evening-quran.jpg",
        width: 1024,
        height: 683,
        alt: "Family preparing for a live online Quran lesson at home",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Online Quran Teacher | NoorPath Academy",
    description:
      "Request a one-to-one Quran teacher match by learning goal, level, timezone and tutor preference.",
    images: ["/marketing/family-evening-quran.jpg"],
  },
};

const faqs = [
  {
    q: "How do I find an online Quran teacher?",
    a: "Start by sharing the learner’s age or learning stage, current reading level, course goal, timezone, preferred lesson windows and tutor preference. NoorPath then checks a proposed match and confirms relevant tutor details and availability before enrolment.",
  },
  {
    q: "Is an online Quran teacher the same as an online Quran tutor?",
    a: "Families often use “teacher” and “tutor” for the same live teaching role. On this page, both terms describe one-to-one online support. The important questions are subject fit, relevant credentials, teaching approach, safeguarding and schedule compatibility.",
  },
  {
    q: "How can I check a Quran teacher’s qualifications?",
    a: "Ask which credentials or experience are relevant to the requested subject, who issued any stated qualification and whether the details can be confirmed for the proposed tutor. Credentials vary, so do not assume every tutor has the same certification or Ijazah.",
  },
  {
    q: "Can I request a female Quran teacher?",
    a: "Yes. A female tutor can be requested for a child or adult learner. Matching depends on the requested subject, timezone, schedule and current availability, which NoorPath confirms after the request.",
  },
  {
    q: "What can an online Quran teacher teach?",
    a: "A request may cover Noorani Qaida, Quran reading, Tajweed practice, Hifz and revision, Arabic or Islamic studies. The proposed tutor should be matched to the learner’s current ability and the specific subject rather than assumed to teach every course.",
  },
  {
    q: "Can children learn safely with an online Quran tutor?",
    a: "Parents should arrange communication, understand the safeguarding process, remain appropriately involved and know how to report a concern or request a change. NoorPath publishes separate safeguarding guidance for families to review before enrolment.",
  },
  {
    q: "Can adults request a private Quran teacher online?",
    a: "Yes. Adult beginners, returning readers and learners focusing on Tajweed or Hifz can request one-to-one lessons. The trial helps assess communication, pace, starting level and whether the proposed teaching approach fits the learner.",
  },
  {
    q: "What happens during the free trial?",
    a: `The ${TRIAL.durationMinutes}-minute trial introduces the proposed tutor, reviews the learner’s starting point, includes a short sample lesson and discusses possible next steps. It costs $${TRIAL.price}, requires no credit card and does not guarantee a recurring slot until availability is confirmed.`,
  },
  {
    q: "How much does an online Quran teacher cost?",
    a: `Published plans currently start at $${PRICING_PLANS[0].monthlyPriceUsd} per month for ${PRICING_PLANS[0].sessionsPerMonth} sessions of ${PRICING_PLANS[0].sessionMinutes} minutes. Families should check the pricing page for current plan details and published currency before enrolling.`,
  },
  {
    q: "How quickly will I learn with an online Quran teacher?",
    a: "There is no reliable universal timeline. Progress depends on the starting level, lesson focus, attendance, practice, feedback and individual learning needs. A tutor can propose review points after observing the learner, but should not guarantee a completion date.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": `${PAGE_URL}#service`,
      name: "Online Quran Teacher — 1-on-1 Live Classes",
      description:
        "Online Quran teacher matching for one-to-one lessons for children and adults, including Quran reading, Tajweed, Hifz and female tutor requests.",
      provider: ORGANIZATION_REF,
      serviceType: "Online Quran Teaching",
      areaServed: PRIORITY_MARKETS.map(({ country }) => ({
        "@type": "Country",
        name: country,
      })),
      inLanguage: "en",
      offers: {
        "@type": "Offer",
        price: String(TRIAL.price),
        priceCurrency: TRIAL.priceCurrency,
        description: `${TRIAL.durationMinutes}-minute trial; no credit card required; tutor availability confirmed after request`,
        url: `${BASE_URL}/free-quran-classes-online`,
      },
      termsOfService: `${BASE_URL}/terms-of-service`,
      url: PAGE_URL,
    },
    {
      "@type": "WebPage",
      "@id": `${PAGE_URL}#webpage`,
      name: "Online Quran Teacher and Tutor Matching",
      description:
        "How to request, evaluate and verify an online Quran teacher match for a child or adult learner.",
      url: PAGE_URL,
      isPartOf: { "@id": WEBSITE_ID },
      about: { "@id": `${PAGE_URL}#service` },
      inLanguage: "en",
    },
    {
      "@type": "FAQPage",
      mainEntity: faqs.map((faq) => ({
          "@type": "Question",
        name: faq.q,
        acceptedAnswer: { "@type": "Answer", text: faq.a },
      })),
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
        { "@type": "ListItem", position: 2, name: "Online Quran Classes", item: `${BASE_URL}/online-quran-classes` },
        { "@type": "ListItem", position: 3, name: "Online Quran Teacher", item: PAGE_URL },
      ],
    },
  ],
};

const tutorProfiles = [
  { name: "Quran Reading", spec: "Qaida & Recitation", icon: "📖", detail: "For beginners building accurate reading and pronunciation." },
  { name: "Tajweed", spec: "Rules & Makharij", icon: "🎵", detail: "For guided correction and practical Tajweed application." },
  { name: "Hifz", spec: "Memorisation & Revision", icon: "🧠", detail: "For structured memorisation with an individual revision plan." },
  { name: "Female Tutor Request", spec: "Sisters & Daughters", icon: "👩‍🏫", detail: "Request a female tutor; subject and availability are confirmed first." },
];

export default function QuranTeacherOnlinePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero */}
      <div className="page-hero" style={{ paddingBottom: 100 }}>
        <div className="max-w-[1200px] mx-auto px-4 page-hero-content">
          <nav aria-label="Breadcrumb" style={{ marginBottom: 16 }}>
            <Link href="/" style={{ color: "var(--gold-lt)", fontSize: ".85rem" }}>Home</Link>
            <span style={{ color: "rgba(255,255,255,.4)", margin: "0 8px" }}>›</span>
            <span style={{ color: "rgba(255,255,255,.6)", fontSize: ".85rem" }}>Online Quran Teacher</span>
          </nav>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            <div>
              <span style={{ display: "inline-block", background: "rgba(232,184,75,.15)", border: "1px solid rgba(232,184,75,.3)", color: "var(--gold-lt)", borderRadius: 50, padding: "5px 16px", fontSize: ".8rem", fontWeight: 700, marginBottom: 16, letterSpacing: ".5px" }}>
                Tutor Matching · Availability Confirmed After Request
              </span>
              <h1>Online Quran Teacher<br /><em style={{ color: "var(--gold-lt)" }}>Matched to Your Learning Goal</em></h1>
              <p style={{ maxWidth: 600 }}>
                Connect with an online Quran teacher for 1-on-1 live classes for a child or adult. We match by level, subject, schedule, and tutor preference, then confirm relevant credentials and availability.
              </p>
              <div style={{ display: "flex", gap: 12, marginTop: 28, flexWrap: "wrap" }}>
                <Link href="/courses" style={{ background: "rgba(255,255,255,.1)", border: "1px solid rgba(255,255,255,.3)", color: "#fff", padding: "14px 28px", borderRadius: 12, fontWeight: 600, textDecoration: "none", fontSize: "1rem" }}>
                  View All Courses
                </Link>
              </div>
              {/* Trust bar */}
              <div style={{ display: "flex", gap: 24, marginTop: 32, flexWrap: "wrap" }}>
                {["✅ 1-to-1 Lessons", `✅ ${TRIAL.durationMinutes}-Minute Free Trial`, "✅ Female Tutor Requests", "✅ Kids & Adults", "✅ Timezone Matching"].map((t) => (
                  <span key={t} style={{ color: "rgba(255,255,255,.8)", fontSize: ".83rem" }}>{t}</span>
                ))}
              </div>
            </div>
            <div className="cta-form-wrap">
              <h2 style={{ fontFamily: "'Playfair Display',serif", color: "#fff", fontSize: "1.35rem", marginBottom: 6, textAlign: "center" }}>
                Request Your Free Trial
              </h2>
              <p style={{ color: "rgba(255,255,255,.72)", fontSize: ".82rem", textAlign: "center", marginBottom: 16 }}>
                Share the learner and scheduling preferences; availability is confirmed after matching.
              </p>
              <CTAForm formVariant="quran-teacher-hero" idPrefix="quran-teacher-hero" />
            </div>
          </div>
        </div>
      </div>

      {/* Why Our Teachers */}
      <section style={{ padding: "72px 0", background: "var(--ivory)" }}>
        <div className="max-w-[1200px] mx-auto px-4">
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <span style={{ color: "var(--emerald)", fontWeight: 700, fontSize: ".82rem", letterSpacing: "1px", textTransform: "uppercase" }}>Why Choose Our Teachers</span>
            <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: "clamp(1.8rem,3.5vw,2.4rem)", color: "var(--charcoal)", marginTop: 8 }}>
              What Makes a NoorPath Teacher Different?
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: <Award size={28} />, title: "Credentials Confirmed", desc: "The proposed tutor's relevant qualifications and teaching experience are confirmed before enrolment." },
              { icon: <Shield size={28} />, title: "Clear Tutor Details", desc: "Ask about the proposed tutor's background, subject focus, and teaching approach before choosing a plan." },
              { icon: <Users size={28} />, title: "Female Tutor Requests", desc: "Sisters and families may request a female Quran teacher. Matching is subject to the requested subject and schedule." },
              { icon: <Clock size={28} />, title: "Timezone Matching", desc: "Share your timezone and preferred lesson windows; available options are confirmed after your request." },
              { icon: <Star size={28} />, title: "Subject Matching", desc: "We match for Quran reading, Tajweed, Hifz, children, adults, and other stated learning goals." },
              { icon: <CheckCircle size={28} />, title: "Trial Before Enrolment", desc: `Use the free ${TRIAL.durationMinutes}-minute trial to assess communication, lesson fit, and next steps before choosing a plan.` },
            ].map((item) => (
              <div key={item.title} className="content-card">
                <div style={{ color: "var(--emerald)", marginBottom: 14 }}>{item.icon}</div>
                <h3 style={{ fontFamily: "'Playfair Display',serif", fontSize: "1.1rem", color: "var(--charcoal)", marginBottom: 10 }}>{item.title}</h3>
                <p style={{ color: "var(--muted)", fontSize: ".88rem", lineHeight: 1.7 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Teacher Profiles */}
      <section style={{ padding: "72px 0" }}>
        <div className="max-w-[1200px] mx-auto px-4">
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: "clamp(1.8rem,3.5vw,2.3rem)", color: "var(--charcoal)" }}>
              Choose a Teacher Matching Category
            </h2>
            <p style={{ color: "var(--muted)", marginTop: 10 }}>These are role-based matching options, not individual tutor profiles. Specific credentials are confirmed before enrolment.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {tutorProfiles.map((t) => (
              <div key={t.name} className="content-card" style={{ textAlign: "center" }}>
                <div style={{ width: 72, height: 72, background: "linear-gradient(135deg, var(--emerald), var(--emerald-mid))", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 14px", color: "#fff", fontSize: "1.8rem" }}>
                  {t.icon}
                </div>
                <h3 style={{ fontFamily: "'Playfair Display',serif", fontSize: "1rem", color: "var(--charcoal)", marginBottom: 4 }}>{t.name}</h3>
                <div style={{ color: "var(--emerald)", fontSize: ".8rem", fontWeight: 700, marginBottom: 4 }}>{t.spec}</div>
                <div style={{ color: "var(--muted)", fontSize: ".78rem", lineHeight: 1.6 }}>{t.detail}</div>
              </div>
            ))}
          </div>
          <p style={{ textAlign: "center", color: "var(--muted)", marginTop: 24, fontSize: ".9rem" }}>
            Tutor availability and relevant credentials are confirmed after you submit your preferences.
          </p>
        </div>
      </section>

      {/* What teachers teach */}
      <section style={{ padding: "72px 0", background: "var(--ivory)" }}>
        <div className="max-w-[1200px] mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span style={{ color: "var(--emerald)", fontWeight: 700, fontSize: ".82rem", letterSpacing: "1px", textTransform: "uppercase" }}>What We Teach</span>
              <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: "clamp(1.8rem,3vw,2.2rem)", color: "var(--charcoal)", marginTop: 8, marginBottom: 20 }}>
                Quran Teacher Matching by Subject
              </h2>
              <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                {[
                  { emoji: "📖", title: "Noorani Qaida", desc: "Arabic letters, sounds, joining and reading foundations for complete beginners" },
                  { emoji: "🎵", title: "Tajweed Rules", desc: "Tajweed rule practice, including Noon Sakinah, Madd, and Ghunna" },
                  { emoji: "🧠", title: "Quran Hifz (Memorization)", desc: "Memorization and revision planning adapted to current retention and learning goals" },
                  { emoji: "📝", title: "Arabic Language", desc: "Quranic Arabic, grammar (Nahw & Sarf), vocabulary and understanding" },
                  { emoji: "🕌", title: "Islamic Studies", desc: "Fiqh, Seerah, Aqeedah, Islamic history and Akhlaq (character)" },
                  { emoji: "🤲", title: "Daily Duas for Kids", desc: "Essential supplications with Arabic, transliteration and meaning" },
                ].map((item) => (
                  <div key={item.title} style={{ display: "flex", gap: 14, alignItems: "flex-start", padding: "14px 16px", background: "#fff", borderRadius: 12, border: "1px solid var(--border)" }}>
                    <span style={{ fontSize: "1.5rem", flexShrink: 0 }}>{item.emoji}</span>
                    <div>
                      <div style={{ fontWeight: 700, color: "var(--charcoal)", marginBottom: 2, fontSize: ".95rem" }}>{item.title}</div>
                      <div style={{ color: "var(--muted)", fontSize: ".85rem" }}>{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <div style={{ background: "linear-gradient(135deg, #0a3d28, #0d5436)", borderRadius: 24, padding: 36, textAlign: "center" }}>
                <div style={{ fontSize: "3rem", marginBottom: 16 }}>🕌</div>
                <h3 style={{ fontFamily: "'Playfair Display',serif", color: "#fff", fontSize: "1.4rem", marginBottom: 14 }}>
                  Start with a Free Trial Class
                </h3>
                <p style={{ color: "rgba(255,255,255,.75)", marginBottom: 8, lineHeight: 1.7 }}>
                  We&apos;ll match a Quran teacher based on:
                </p>
                <div style={{ display: "flex", flexDirection: "column", gap: 8, marginBottom: 24, textAlign: "left" }}>
                  {["Your child's age and current level", "Your preferred learning goals", "Your timezone and schedule", "Your preference for male/female teacher"].map((p) => (
                    <div key={p} style={{ display: "flex", gap: 10, alignItems: "center", color: "rgba(255,255,255,.85)", fontSize: ".87rem" }}>
                      <CheckCircle size={15} style={{ color: "var(--gold-lt)", flexShrink: 0 }} /> {p}
                    </div>
                  ))}
                </div>
                <Link href="/free-quran-classes-online" style={{ display: "block", background: "var(--gold)", color: "var(--charcoal)", padding: "14px", borderRadius: 12, fontWeight: 700, textDecoration: "none", fontSize: "1rem", marginBottom: 12 }}>
                  Book Free Trial Class →
                </Link>
                <div style={{ color: "rgba(255,255,255,.45)", fontSize: ".75rem" }}>No credit card required for the trial</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <OnlineQuranTeacherGuide />

      <section style={{ padding: "56px 0", background: "var(--ivory)", borderTop: "1px solid var(--border)" }}>
        <div className="max-w-[800px] mx-auto px-4">
          <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: "clamp(1.5rem,2.5vw,1.9rem)", color: "var(--charcoal)", marginBottom: 12 }}>
            Request a teacher by country schedule
          </h2>
          <p style={{ color: "var(--muted)", fontSize: ".92rem", lineHeight: 1.75, marginBottom: 18 }}>
            Tutor matching considers your timezone and preferred lesson windows. Start from a country hub if you already know where the learner is based:
          </p>
          <ul style={{ margin: 0, paddingLeft: 18, color: "var(--charcoal)", fontSize: ".92rem", lineHeight: 1.9 }}>
            <li>
              <Link href="/locations/online-quran-classes-uk" style={{ color: "var(--emerald)", fontWeight: 700 }}>
                Find an online Quran teacher for the UK
              </Link>
              {" "}— GMT/BST preferences noted in your request
            </li>
            <li>
              <Link href="/locations/online-quran-classes-usa" style={{ color: "var(--emerald)", fontWeight: 700 }}>
                Request a USA-timezone Quran tutor
              </Link>
              {" "}— share ET, CT, MT or PT when you book the trial
            </li>
            <li>
              <Link href="/locations/online-quran-classes-new-zealand" style={{ color: "var(--emerald)", fontWeight: 700 }}>
                Match a Quran teacher to New Zealand time
              </Link>
              {" "}— NZST/NZDT preferences noted in your request
            </li>
          </ul>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ padding: "72px 0" }}>
        <div className="max-w-[800px] mx-auto px-4">
          <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: "clamp(1.8rem,3vw,2.2rem)", color: "var(--charcoal)", textAlign: "center", marginBottom: 40 }}>
            Frequently Asked Questions
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {faqs.map((item) => (
              <div key={item.q} style={{ background: "var(--ivory)", border: "1px solid var(--border)", borderRadius: 12, padding: "20px 24px" }}>
                <h3 style={{ fontFamily: "'Playfair Display',serif", fontSize: "1rem", color: "var(--charcoal)", marginBottom: 10, fontWeight: 700 }}>{item.q}</h3>
                <p style={{ color: "var(--muted)", fontSize: ".9rem", lineHeight: 1.7, margin: 0 }}>{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="max-w-[1200px] mx-auto px-4 text-center">
          <h2 style={{ fontFamily: "'Playfair Display',serif", color: "#fff", fontSize: "clamp(1.8rem,3vw,2.4rem)", marginBottom: 16 }}>
            Request Your Online Quran Teacher
          </h2>
          <p style={{ color: "rgba(255,255,255,.75)", marginBottom: 28, maxWidth: 520, margin: "0 auto 28px" }}>
            One-to-one live classes. Free {TRIAL.durationMinutes}-minute trial
            with no credit card. Tutor availability is confirmed after your
            request.
          </p>
          <Link href="/free-quran-classes-online" className="btn-primary-np">
            Book Free Trial Class →
          </Link>
        </div>
      </section>
    </>
  );
}
