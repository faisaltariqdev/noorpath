import type { Metadata } from "next";
import Link from "next/link";
import CTAForm from "@/components/CTAForm";
import OnlineQuranClassesGuide from "@/components/OnlineQuranClassesGuide";
import { BASE_URL, ORGANIZATION_REF } from "@/lib/organizationSchema";
import { getCountryHubHreflang, PRIORITY_MARKETS } from "@/lib/geoSeo";
import { CheckCircle, Clock, Users, Award, Video, Shield, Lock } from "lucide-react";
import { TRIAL } from "@/lib/academyFacts";

export const revalidate = false;

export const metadata: Metadata = {
  title: {
    absolute: "NoorPath Academy | Online Quran Classes — Live 1-to-1 & Free Trial",
  },
  description:
    "NoorPath Academy live one-to-one online Quran classes for kids and adults, with timezone-based tutor matching for Quran reading, Tajweed, Hifz and a free trial.",
  keywords: [
    "online quran classes", "learn quran online", "quran classes online", "online quran academy",
    "quran tutor online", "live quran classes", "quran classes for kids", "online quran teacher",
    "best online quran classes", "quran learning online", "1 on 1 quran classes", "free quran trial",
    "tajweed classes online", "noorani qaida online", "hifz program online", "islamic classes online",
    "one-to-one quran classes", "one to one quran classes",
    "online quran classes after school", "after school quran classes online",
    "quran lessons for busy families",
  ],
  alternates: {
    canonical: "https://www.noorpath.online/online-quran-classes",
    languages: getCountryHubHreflang(),
  },
  openGraph: {
    title: "NoorPath Academy | Online Quran Classes — Live One-to-One Lessons",
    description: "Personalised Quran classes for kids and adults: Qaida, reading, Tajweed, Hifz and Islamic studies, with timezone-based matching and a free trial.",
    url: "https://www.noorpath.online/online-quran-classes",
    type: "article",
    publishedTime: "2026-07-14T00:00:00.000Z",
    modifiedTime: "2026-08-11T00:00:00.000Z",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "A child learning Quran online with a live NoorPath tutor" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "NoorPath Academy | Online Quran Classes",
    description: "Live one-to-one Quran learning for children and adults, with tutor matching by goals and timezone and a free trial request.",
    images: ["/og-image.png"],
  },
};

const features = [
  { icon: <Award size={22} />, title: "Tutor Matching", desc: "Request a tutor by learner level, goals, timezone and male or female preference. Available tutor details are confirmed before enrolment." },
  { icon: <Users size={22} />, title: "1-on-1 Private Sessions", desc: "Each live class is arranged as one-to-one Quran classes for one learner and one tutor, rather than a group — clearer correction for busy family schedules." },
  { icon: <Clock size={22} />, title: "Timezone-Based Scheduling", desc: "Request online Quran classes after school, or evening or weekend windows in your timezone — including for families abroad. The recurring time is confirmed after matching; tutor availability is confirmed after your request." },
  { icon: <Shield size={22} />, title: "Female Tutor Requests", desc: "Request a female tutor for sisters or daughters. NoorPath confirms a suitable match based on current availability." },
  { icon: <Video size={22} />, title: "Live Video Lessons", desc: "Sessions use an agreed online meeting platform and lesson materials suited to the learning goal." },
  { icon: <CheckCircle size={22} />, title: "Clear Learning Goals", desc: "Tutors set lesson goals according to the learner's assessed level, pace and selected course. Language of instruction preferences are recorded where available during matching." },
];

const classFaqs = [
  { q: "What are online Quran classes?", a: "Online Quran classes are live 1-on-1 sessions with a tutor via Zoom or Google Meet. Students can learn Noorani Qaida, Tajweed, Hifz, Arabic, or Islamic studies from home at an agreed time." },
  { q: "Are online Quran classes effective?", a: "They can be highly effective when lessons are live, the tutor is suitable, corrections happen in real time and the student practises consistently. Effectiveness is weaker when a course relies only on recordings, has large groups or lacks a clear curriculum." },
  { q: "Can children learn Quran online safely?", a: "Yes, with appropriate safeguards. Parents should arrange all communication, remain nearby for younger children, understand the provider's safeguarding process and know whether sessions are recorded." },
  { q: "What age can a child start online Noorani Qaida?", a: "Many children can begin around age four or five, but readiness matters more than a fixed birthday. A child should be able to attend briefly, imitate sounds and respond to simple instructions." },
  { q: "Can a complete beginner learn Quran online?", a: "Yes. Complete beginners generally start with Arabic letter recognition and pronunciation through Noorani Qaida. No prior Arabic knowledge is required." },
  { q: "Can I get a female Quran teacher online?", a: "You can request a female tutor for sisters or daughters when booking a free trial. NoorPath confirms a suitable match according to learner needs, schedule and current availability." },
  { q: "Are male Quran teachers available?", a: "Yes. Families can request a male tutor for children or adults. Matching also considers course level, teaching language, schedule and current availability." },
  { q: "How many Quran classes should a student take each week?", a: "One to three lessons can suit general reading and Tajweed, while Hifz may require more frequent contact. The best frequency depends on age, goal and available practice time." },
  { q: "How long does it take to learn to read Quran?", a: "There is no honest universal timeframe. Starting level, lesson frequency, age, pronunciation, attendance and home practice all matter. A tutor can provide a useful estimate after assessment." },
  { q: "Can I learn Quran with Tajweed online?", a: "Yes. Live classes allow the tutor to demonstrate Makharij and Tajweed rules, hear the learner apply them and correct errors immediately." },
  { q: "Can Hifz be completed through online classes?", a: "Hifz can be taught online because the essential activity is recitation to a teacher combined with structured revision. Success depends on daily independent work and realistic targets." },
  { q: "What equipment is needed for online Quran classes?", a: "A laptop, tablet or phone with a stable internet connection, working microphone and camera is sufficient. Keep the relevant Qaida or Mushaf and a quiet, well-lit learning space ready." },
  { q: "What happens in a free trial Quran class?", a: "At NoorPath, the trial introduces the tutor, checks the student's current level, includes a short sample lesson and recommends a suitable course. It is free and does not require a credit card." },
  { q: "How much do online Quran classes cost?", a: "Fees vary by lesson length, weekly frequency, teacher level and course. NoorPath publishes current options on its pricing page so families can compare total teaching time and included support." },
  { q: "Can online Quran classes work across countries?", a: "Yes. Virtual classes can serve learners in different countries when the academy can match a tutor to the learner's timezone, language needs and schedule." },
  { q: "Can we book online Quran classes after school?", a: "Yes. Many families request after-school or early-evening windows in their local timezone. Exact recurring times are confirmed after tutor matching." },
  { q: "Are Quran lessons suitable for busy families?", a: "Short, recurring one-to-one lessons with a fixed weekly slot usually fit busy households better than irregular intensives. Choose the lightest published plan you can keep, then adjust after the trial." },
  { q: "What are one-to-one Quran classes?", a: "One-to-one Quran classes mean one learner and one tutor in a live session — not a large group. That format supports real-time correction for reading, Tajweed and Hifz." },
  { q: "Do you have Quran teachers available in different timezones for families abroad?", a: `Yes. Matching considers your timezone and preferred lesson windows. ${TRIAL.availabilityNote} Preferred minutes are not guaranteed in advance.` },
  { q: "Can we request English-language instruction for online Quran classes?", a: "Language of instruction preferences are recorded where available during matching and confirmed for the proposed tutor before enrolment. NoorPath does not publish a fixed worldwide language-coverage list." },
  { q: "How do I choose between an online academy and an independent tutor?", a: "An academy may provide teacher vetting, curriculum, support, progress records and replacement cover. In either case, verify qualifications, safeguarding, communication and the teaching match before committing." },
];

const pageUrl = `${BASE_URL}/online-quran-classes`;

const pageJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": `${pageUrl}#service`,
      name: "Online Quran Classes — Live One-to-One",
      description: "Live one-to-one online Quran classes for children and adults covering Noorani Qaida, Quran reading, Tajweed, Hifz and Islamic studies.",
      provider: ORGANIZATION_REF,
      serviceType: "Online Quran Education",
      audience: [
        { "@type": "PeopleAudience", suggestedMinAge: 4, audienceType: "Children learning Quran online" },
        { "@type": "Audience", audienceType: "Adult Quran learners" },
      ],
      areaServed: [
        ...PRIORITY_MARKETS.map(({ country }) => country),
      ].map((name) => ({ "@type": "Country", name })),
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Online Quran Courses",
        itemListElement: [
          { "@type": "Offer", itemOffered: { "@type": "Course", name: "Noorani Qaida Online" } },
          { "@type": "Offer", itemOffered: { "@type": "Course", name: "Tajweed Classes Online" } },
          { "@type": "Offer", itemOffered: { "@type": "Course", name: "Hifz Program Online" } },
          { "@type": "Offer", itemOffered: { "@type": "Course", name: "Arabic Language Online" } },
          { "@type": "Offer", itemOffered: { "@type": "Course", name: "Islamic Studies Online" } },
        ],
      },
      termsOfService: `${BASE_URL}/terms-of-service`,
      url: pageUrl,
    },
    {
      "@type": "Course",
      "@id": `${pageUrl}#course`,
      name: "Online Quran Classes for Kids and Adults",
      description: "A personalised online Quran learning pathway covering Noorani Qaida, Quran reading, Tajweed, Hifz and Islamic studies through live one-to-one teaching.",
      provider: ORGANIZATION_REF,
      url: pageUrl,
      courseMode: "online",
      inLanguage: "en",
      educationalLevel: "Beginner to advanced",
      coursePrerequisites: "No prior Arabic or Quran reading experience is required for beginners.",
      hasCourseInstance: {
        "@type": "CourseInstance",
        courseMode: "Online",
        instructor: ORGANIZATION_REF,
      },
    },
    {
      "@type": "Article",
      "@id": `${pageUrl}#guide`,
      headline: "Online Quran Classes: Global Guide for Kids and Adults",
      description: "A practical guide to choosing live online Quran classes, tutors, courses, safeguarding, progress measures and a suitable learning pathway.",
      mainEntityOfPage: { "@id": pageUrl },
      author: { "@type": "Person", name: "Faisal Tariq", url: `${BASE_URL}/founder` },
      publisher: ORGANIZATION_REF,
      image: `${BASE_URL}/og-image.png`,
      datePublished: "2026-07-14",
      dateModified: "2026-07-15",
      inLanguage: "en",
    },
    {
      "@type": "FAQPage",
      "@id": `${pageUrl}#faq`,
      mainEntity: classFaqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.noorpath.online" },
        { "@type": "ListItem", position: 2, name: "Online Quran Classes", item: "https://www.noorpath.online/online-quran-classes" },
      ],
    },
  ],
};

export default function OnlineQuranClassesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageJsonLd) }} />

      <div className="page-hero">
        <div className="max-w-[1200px] mx-auto px-4 page-hero-content">
          <nav aria-label="Breadcrumb" style={{ marginBottom: 16 }}>
            <Link href="/" style={{ color: "var(--gold-lt)", fontSize: ".85rem" }}>Home</Link>
            <span style={{ color: "rgba(255,255,255,.4)", margin: "0 8px" }}>›</span>
            <span style={{ color: "rgba(255,255,255,.6)", fontSize: ".85rem" }}>Online Quran Classes</span>
          </nav>
          <h1>Online Quran Classes — Live One-to-One Lessons</h1>
          <p>
            Personalised one-to-one Quran classes for kids and adults — from Noorani Qaida and Quran reading to Tajweed, Hifz and Islamic studies.
            Request online Quran classes after school or at another window that fits busy families, with tutor matching across timezones.
          </p>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 24 }}>
            <Link href="/free-quran-classes-online" className="btn-primary-np">Book Free Trial →</Link>
            <Link href="/one-on-one-quran-classes" className="btn-outline-np" style={{ color: "#fff", borderColor: "rgba(255,255,255,.5)" }}>1-to-1 Classes</Link>
            <Link href="/online-quran-classes-for-kids" className="btn-outline-np" style={{ color: "#fff", borderColor: "rgba(255,255,255,.5)" }}>Kids Classes</Link>
            <Link href="/courses" className="btn-outline-np" style={{ color: "#fff", borderColor: "rgba(255,255,255,.5)" }}>View All Courses</Link>
          </div>
        </div>
      </div>

      {/* Features */}
      <section>
        <div className="max-w-[1200px] mx-auto px-4">
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <h2 className="section-title">Why Families Choose <em className="accent">NoorPath</em></h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f) => (
              <div key={f.title} className="content-card" style={{ display: "flex", gap: 16 }}>
                <div style={{ color: "var(--emerald)", flexShrink: 0 }}>{f.icon}</div>
                <div>
                  <h3 style={{ fontFamily: "'Playfair Display',serif", fontSize: "1rem", fontWeight: 700, marginBottom: 6 }}>{f.title}</h3>
                  <p style={{ color: "var(--muted)", fontSize: ".87rem", lineHeight: 1.6, margin: 0 }}>{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comprehensive pillar guide */}
      <section className="oqc-guide-section">
        <div className="max-w-[980px] mx-auto px-4">
          <header style={{ textAlign: "center", marginBottom: 32 }}>
            <span className="section-eyebrow">Complete 2026 Global Guide</span>
            <h2 className="section-title">
              How to Choose the Right <em className="accent">Online Quran Classes</em>
            </h2>
            <p style={{ color: "var(--muted)", maxWidth: 760, margin: "0 auto", lineHeight: 1.8 }}>
              A practical global guide for Muslim parents and adult learners comparing tutors,
              courses, safeguarding, schedules and progress.
            </p>
            <p style={{ color: "var(--muted)", fontSize: ".8rem", marginTop: 12 }}>
              Written by <Link href="/founder" style={{ color: "var(--emerald)", fontWeight: 700 }}>Faisal Tariq, Founder of NoorPath</Link>
              {" "}· Editorially reviewed under the <Link href="/editorial-policy" style={{ color: "var(--emerald)", fontWeight: 700 }}>NoorPath editorial policy</Link>
              {" "}· Updated 15 July 2026
            </p>
          </header>
          <OnlineQuranClassesGuide />
          <aside className="highlight-box" aria-labelledby="planning-resources-heading">
            <h2 id="planning-resources-heading">Evidence and planning resources</h2>
            <p>
              Families can use our{" "}
              <Link href="/blog/online-quran-class-setup" style={{ color: "var(--emerald)", fontWeight: 700 }}>
                online Quran class setup guide
              </Link>{" "}
              to prepare the learning space, technology and routine, then{" "}
              <Link href="/blog/quran-learning-method-comparisons" style={{ color: "var(--emerald)", fontWeight: 700 }}>
                compare Quran learning methods
              </Link>{" "}
              to weigh the trade-offs between different formats. The most suitable approach depends on the learner&apos;s
              goals, age, schedule, support needs and circumstances; no single format is universally best.
            </p>
          </aside>
          <aside className="highlight-box" aria-labelledby="country-guides-heading">
            <h2 id="country-guides-heading">Country-specific class guides</h2>
            <p>
              Visit <Link href="/locations" style={{ color: "var(--emerald)", fontWeight: 700 }}>all locations</Link> or
              choose a priority country:
            </p>
            <ul>
              {PRIORITY_MARKETS.map(({ country, slug }) => (
                <li key={slug}><Link href={`/locations/${slug}`} style={{ color: "var(--emerald)", fontWeight: 700 }}>{country}</Link></li>
              ))}
            </ul>
          </aside>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section" id="cta">
        <div className="max-w-[1200px] mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 style={{ fontFamily: "'Playfair Display',serif", color: "#fff", fontSize: "2.2rem", marginBottom: 16 }}>
                Book Your Free 30-Minute<br />
                <em style={{ color: "var(--gold-lt)" }}>Trial Class Today</em>
              </h2>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {[
                  [<CheckCircle size={18} key="1" />, "Free 30-minute trial — no credit card needed"],
                  [<Video size={18} key="2" />, "Live 1-on-1 lesson with the proposed tutor match"],
                  [<Lock size={18} key="3" />, "Privacy and trial terms linked before submission"],
                ].map(([icon, text]) => (
                  <div key={String(text)} style={{ display: "flex", alignItems: "center", gap: 10, color: "rgba(255,255,255,.85)", fontSize: ".92rem" }}>
                    <span style={{ color: "var(--gold-lt)" }}>{icon}</span> {text}
                  </div>
                ))}
              </div>
            </div>
            <div className="cta-form-wrap">
              <h3 style={{ fontFamily: "'Playfair Display',serif", color: "#fff", fontSize: "1.25rem", marginBottom: 20, textAlign: "center" }}>
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
