import type { Metadata } from "next";
import React from "react";
import Link from "next/link";
import { ORGANIZATION_ID } from "@/lib/organizationSchema";
import { Award, Users, Globe, Heart, Landmark, Sprout, TrendingUp, CheckCircle, Shield, BookOpen, Clock, GraduationCap } from "lucide-react";
import { FAMILY_DISCOUNTS, SERVICE_FACTS } from "@/lib/academyFacts";

export const revalidate = false;

export const metadata: Metadata = {
  title: { absolute: "About NoorPath Academy — Online Quran Education for Families" },
  description:
    "NoorPath Academy is a founder-led online Quran academy offering live 1-to-1 Noorani Qaida, Tajweed, Hifz and Arabic classes with a free 30-minute trial.",
  keywords: [
    "about noorpath academy", "noorpath", "noor path", "noorpath academy",
    "noor path academy", "online quran academy", "online quran tutors", "quran tutor matching",
    "noorpath quran", "online islamic education", "quran school online",
    "online quran academy for families", "quran academy for kids and adults",
    "www.noorpath.online",
  ],
  alternates: { canonical: "https://www.noorpath.online/about" },
  openGraph: {
    title: "About NoorPath Academy — Online Quran Education for Families",
    description: "Our mission is to make quality Quran education accessible through live 1-to-1 lessons, tutor matching, and a free 30-minute trial.",
    url: "https://www.noorpath.online/about",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "About NoorPath Academy" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "About NoorPath Academy",
    description: "Live 1-to-1 Quran education for children and adults, with tutor matching and a free 30-minute trial.",
    images: ["/og-image.png"],
  },
};

const faqs = [
  {
    q: "What is the official NoorPath Academy website?",
    a: "The official website is https://www.noorpath.online. NoorPath Academy (also written NoorPath or Noor Path Academy) is an online-only Quran academy. It is not affiliated with noor-path.com, noorpath.net apps, or other similarly named websites.",
  },
  { q: "Who leads NoorPath Academy?", a: "NoorPath Academy is founder-led by Faisal Tariq. His profile and role are published on the founder page." },
  { q: "How are NoorPath tutors qualified?", a: "Qualifications vary by tutor and teaching focus. Before enrolment, NoorPath confirms the proposed tutor's relevant credentials and experience for the requested subject." },
  { q: "What age groups does NoorPath Academy teach?", a: "NoorPath offers tutor matching for children and adults across Quran reading, Tajweed, Hifz, Arabic, and related learning goals." },
  { q: "How is NoorPath different from other online Quran academies?", a: "NoorPath is founder-led and provides live 1-to-1 lessons at www.noorpath.online. Matching considers the learner's level, goals, timezone, and male or female tutor preference; availability is confirmed after each request." },
  { q: "Is NoorPath Academy accredited?", a: "NoorPath Academy does not present a blanket accreditation claim. Tutor qualifications vary, and specific credentials relevant to the proposed tutor are confirmed before enrolment." },
  { q: "Where are classes available?", a: "Classes are online only — there is no campus or walk-in branch. Share your timezone and preferred lesson windows when requesting a trial, and NoorPath will confirm tutor availability." },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "AboutPage",
      name: "About NoorPath Academy",
      url: "https://www.noorpath.online/about",
      mainEntity: { "@id": ORGANIZATION_ID },
      description: "NoorPath Academy is a founder-led online Quran academy offering live 1-to-1 lessons and tutor matching for children and adults.",
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
        { "@type": "ListItem", position: 2, name: "About", item: "https://www.noorpath.online/about" },
      ],
    },
  ],
};

const stats = [
  { icon: <Users size={28} />, num: SERVICE_FACTS[0].value, label: SERVICE_FACTS[0].label },
  { icon: <Clock size={28} />, num: SERVICE_FACTS[1].value, label: SERVICE_FACTS[1].label },
  { icon: <CheckCircle size={28} />, num: SERVICE_FACTS[2].value, label: SERVICE_FACTS[2].label },
  { icon: <Globe size={28} />, num: SERVICE_FACTS[3].value, label: SERVICE_FACTS[3].label },
  { icon: <Heart size={28} />, num: `Up to ${FAMILY_DISCOUNTS[2].discountPercent}%`, label: "Sibling Discount" },
];

export default function AboutPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero */}
      <div className="page-hero">
        <div className="max-w-[1200px] mx-auto px-4 page-hero-content">
          <nav aria-label="Breadcrumb" style={{ marginBottom: 16 }}>
            <Link href="/" style={{ color: "var(--gold-lt)", fontSize: ".85rem" }}>Home</Link>
            <span style={{ color: "rgba(255,255,255,.4)", margin: "0 8px" }}>›</span>
            <span style={{ color: "rgba(255,255,255,.6)", fontSize: ".85rem" }}>About Us</span>
          </nav>
          <h1>About NoorPath Academy</h1>
          <p>
            Founder-led live one-to-one online Quran classes for children and adults.
          </p>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 24 }}>
            <Link href="/free-quran-classes-online" className="btn-primary-np">Book Free Trial →</Link>
            <Link href="/founder" className="btn-outline-np" style={{ color: "#fff", borderColor: "rgba(255,255,255,.5)" }}>Meet the Founder</Link>
          </div>
        </div>
      </div>

      {/* Stats */}
      <section style={{ background: "var(--ivory)", padding: "48px 0", borderBottom: "1px solid var(--border)" }}>
        <div className="max-w-[1200px] mx-auto px-4">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 text-center">
            {stats.map((s) => (
              <div key={s.label}>
                <div style={{ color: "var(--emerald)", marginBottom: 8, display: "flex", justifyContent: "center" }}>{s.icon}</div>
                <div style={{ fontFamily: "var(--font-playfair), serif", fontSize: "1.8rem", fontWeight: 700, color: "var(--charcoal)" }}>{s.num}</div>
                <div style={{ color: "var(--muted)", fontSize: ".82rem", fontWeight: 600 }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="max-w-[900px] mx-auto px-4">

          {/* Mission */}
          <div style={{ textAlign: "center", marginBottom: 40 }}>
            <span className="section-eyebrow" style={{ display: "inline-flex", alignItems: "center", gap: 6 }}><Landmark size={13} /> Our Mission</span>
            <h2 className="section-title">Making Quality Quran Education <em className="accent">Accessible to Every Family</em></h2>
          </div>

          <div className="content-card" style={{ marginBottom: 24 }}>
            <h3 style={{ fontFamily: "var(--font-playfair), serif", fontSize: "1.15rem", color: "var(--charcoal)", marginBottom: 14 }}>Who We Are</h3>
            <p style={{ color: "var(--muted)", lineHeight: 1.8, marginBottom: 16 }}>
              <strong>NoorPath Academy</strong> is a founder-led <Link href="/online-quran-classes" style={{ color: "var(--emerald)", fontWeight: 600 }}>online Quran academy</Link> offering live one-to-one Quran and Islamic education for children and adults in multiple timezones. The official website is{" "}
              <a href="https://www.noorpath.online" style={{ color: "var(--emerald)", fontWeight: 600 }}>www.noorpath.online</a>
              {" "}(also searched as NoorPath or Noor Path Academy). Classes are online only — there is no campus. NoorPath Academy is not affiliated with noor-path.com or noorpath.net app products.
            </p>
            <p style={{ color: "var(--muted)", lineHeight: 1.8, marginBottom: 16 }}>
              Our curriculum spans <Link href="/courses/noorani-qaida-online" style={{ color: "var(--emerald)", fontWeight: 600 }}>Noorani Qaida for beginners</Link> to <Link href="/hifz-quran-online" style={{ color: "var(--emerald)", fontWeight: 600 }}>Hifz programs</Link> for children and adults. Tutor matching considers subject, level, schedule, and tutor preference.
            </p>
            <p style={{ color: "var(--muted)", lineHeight: 1.8 }}>
              NoorPath is founder-led and focused on 1-to-1 teaching. Before enrolment, families can ask about the proposed tutor&apos;s relevant qualifications and experience, then use the free trial to assess lesson fit.
            </p>
          </div>

          {/* Our Values */}
          <div style={{ textAlign: "center", marginBottom: 32, marginTop: 56 }}>
            <span className="section-eyebrow">🌱 Core Values</span>
            <h2 className="section-title">What We Stand For</h2>
          </div>
          <div className="content-card" style={{ marginBottom: 24 }}>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 20 }}>
              {([
                [<Sprout size={20} key="s" />, "Quality Teaching", "We match by teaching focus and confirm the proposed tutor's relevant credentials and experience before enrolment."],
                [<Users size={20} key="u" />, "Family First", `Family plans support multiple siblings with verified discounts from ${FAMILY_DISCOUNTS[0].discountPercent}% to ${FAMILY_DISCOUNTS[2].discountPercent}%. Female tutor requests are welcome.`],
                [<Globe size={20} key="g" />, "Online Accessibility", "Share your timezone and preferred lesson windows, and we will confirm tutor availability after your request."],
                [<TrendingUp size={20} key="t" />, "Individual Learning", "Live 1-to-1 lessons allow the teaching focus and pace to be adapted to the learner's current level and goals."],
                [<Shield size={20} key="sh" />, "Private Lessons", "Classes are 1-to-1. Parents can discuss supervision preferences, and sisters or daughters may request a female tutor."],
              ] as [React.ReactNode, string, string][]).map(([icon, title, desc]) => (
                <li key={String(title)} style={{ display: "flex", gap: 14 }}>
                  <span style={{ color: "var(--emerald)", flexShrink: 0, width: 38, height: 38, background: "rgba(10,110,79,.1)", borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center" }}>{icon}</span>
                  <div>
                    <strong style={{ color: "var(--charcoal)", display: "block", marginBottom: 4 }}>{title}</strong>
                    <span style={{ color: "var(--muted)", fontSize: ".88rem", lineHeight: 1.7 }}>{desc}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* E-E-A-T: Experience & Expertise */}
          <div style={{ textAlign: "center", marginBottom: 32, marginTop: 56 }}>
            <span className="section-eyebrow"><Award size={13} style={{ display: "inline", verticalAlign: "middle", marginRight: 4 }} /> Tutor Standards</span>
            <h2 className="section-title">Our <em className="accent">Tutor Quality</em> Standards</h2>
            <p className="section-desc center">
              Tutor qualifications are not presented as one-size-fits-all. We confirm the details relevant to the proposed match before enrolment.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {[
              { icon: <Award size={22} />, title: "Relevant Credentials", desc: "Ask about Ijazah, Hifz, academic, or other qualifications relevant to your requested subject. Specific credentials are confirmed before enrolment." },
              { icon: <GraduationCap size={22} />, title: "Teaching Experience", desc: "The proposed tutor's experience with the learner's age group and subject is considered during matching." },
              { icon: <CheckCircle size={22} />, title: "Details Before Enrolment", desc: "Families can review the proposed tutor's relevant qualifications and teaching focus before choosing a paid plan." },
              { icon: <Clock size={22} />, title: "Trial Lesson", desc: "The free 30-minute trial provides a practical opportunity to assess communication, pace, and lesson fit." },
              { icon: <BookOpen size={22} />, title: "Subject Matching", desc: "Matching categories include children, adults, Hifz, Tajweed, Quran reading, and female tutor requests." },
              { icon: <Heart size={22} />, title: "Learner Fit", desc: "The learner's current level, goals, timezone, and tutor preference guide the proposed match." },
            ].map((f) => (
              <div key={f.title} className="content-card" style={{ display: "flex", gap: 16 }}>
                <div style={{ color: "var(--emerald)", flexShrink: 0 }}>{f.icon}</div>
                <div>
                  <strong style={{ color: "var(--charcoal)", display: "block", marginBottom: 6 }}>{f.title}</strong>
                  <p style={{ color: "var(--muted)", fontSize: ".87rem", lineHeight: 1.65, margin: 0 }}>{f.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* What we offer */}
          <div style={{ textAlign: "center", marginBottom: 32, marginTop: 56 }}>
            <span className="section-eyebrow">📚 Programs</span>
            <h2 className="section-title">Our <em className="accent">Courses & Programs</em></h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-12">
            {[
              { href: "/courses/noorani-qaida-online", name: "Noorani Qaida Online", desc: "Arabic alphabet to reading — for complete beginners from age 4" },
              { href: "/learn-tajweed-online", name: "Tajweed Classes", desc: "Guided recitation practice and application of Tajweed rules" },
              { href: "/hifz-quran-online", name: "Hifz Program", desc: "Complete Quran memorization — structured Juz-by-Juz with revision system" },
              { href: "/online-quran-classes-for-kids", name: "Kids Quran Classes", desc: "Tutor matching for children from age 4, based on level and learning goals" },
              { href: "/female-quran-teacher-online", name: "Female Quran Teachers", desc: "Request a female tutor for a sister or daughter; availability is confirmed after enquiry" },
              { href: "/courses/arabic-language-online", name: "Arabic Language", desc: "Understand the Quran in its original language — Modern Arabic & Quranic Arabic" },
            ].map((c) => (
              <Link key={c.href} href={c.href} style={{ textDecoration: "none" }}>
                <div className="content-card" style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                  <CheckCircle size={16} style={{ color: "var(--emerald)", marginTop: 2, flexShrink: 0 }} />
                  <div>
                    <strong style={{ color: "var(--charcoal)", fontSize: ".93rem" }}>{c.name}</strong>
                    <p style={{ color: "var(--muted)", fontSize: ".83rem", margin: "4px 0 0", lineHeight: 1.5 }}>{c.desc}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Countries */}
          <div style={{ textAlign: "center", marginBottom: 32, marginTop: 56 }}>
            <span className="section-eyebrow"><Globe size={13} style={{ display: "inline", verticalAlign: "middle", marginRight: 4 }} /> Online Access</span>
            <h2 className="section-title">Online Quran Classes by <em className="accent">Location</em></h2>
            <p className="section-desc center">
              Explore local information, then share your timezone and preferred lesson windows so tutor availability can be confirmed.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {[
              { href: "/locations/online-quran-classes-uk", label: "🇬🇧 United Kingdom" },
              { href: "/locations/online-quran-classes-usa", label: "🇺🇸 United States" },
              { href: "/locations/online-quran-classes-canada", label: "🇨🇦 Canada" },
              { href: "/locations/online-quran-classes-australia", label: "🇦🇺 Australia" },
              { href: "/locations/online-quran-classes-uae", label: "🇦🇪 UAE" },
              { href: "/locations/online-quran-classes-pakistan", label: "🇵🇰 Pakistan" },
              { href: "/locations/online-quran-classes-germany", label: "🇩🇪 Germany" },
              { href: "/locations", label: "🌍 View All Locations" },
            ].map((l) => (
              <Link key={l.href} href={l.href} style={{ textDecoration: "none" }}>
                <div className="content-card" style={{ textAlign: "center", padding: "14px 10px", fontWeight: 600, fontSize: ".88rem", color: "var(--charcoal)" }}>{l.label}</div>
              </Link>
            ))}
          </div>

          {/* FAQ */}
          <div style={{ textAlign: "center", marginBottom: 32, marginTop: 56 }}>
            <span className="section-eyebrow">❓ FAQ</span>
            <h2 className="section-title">About NoorPath — <em className="accent">Common Questions</em></h2>
          </div>
          <div className="mb-12">
            {faqs.map((f, i) => (
              <details key={i} style={{ borderBottom: "1px solid var(--border)", padding: "18px 0" }}>
                <summary style={{ fontWeight: 600, color: "var(--charcoal)", cursor: "pointer", fontSize: ".95rem", listStyle: "none", display: "flex", justifyContent: "space-between" }}>
                  {f.q} <span style={{ color: "var(--emerald)", marginLeft: 8 }}>+</span>
                </summary>
                <p style={{ color: "var(--muted)", marginTop: 12, lineHeight: 1.75, fontSize: ".9rem" }}>{f.a}</p>
              </details>
            ))}
          </div>

          {/* CTA */}
          <div className="np-inner-cta" style={{ background: "linear-gradient(135deg, var(--emerald-dk) 0%, var(--emerald) 100%)", borderRadius: 20, textAlign: "center", marginBottom: 32 }}>
            <h2 style={{ fontFamily: "var(--font-playfair), serif", color: "#fff", fontSize: "1.8rem", marginBottom: 12 }}>
              Ready to Start Your <em style={{ color: "var(--gold-lt)" }}>Quran Journey?</em>
            </h2>
            <p style={{ color: "rgba(255,255,255,.8)", marginBottom: 24, lineHeight: 1.7 }}>
              Start with a free 30-minute trial. No credit card is required, and tutor availability is confirmed after your request.
            </p>
            <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/free-quran-classes-online" className="btn-primary-np" style={{ background: "var(--gold)", color: "var(--charcoal)" }}>Book Free Trial →</Link>
              <Link href="/courses" className="btn-outline-np" style={{ color: "#fff", borderColor: "rgba(255,255,255,.5)" }}>Browse All Courses</Link>
            </div>
          </div>

          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <p style={{ color: "var(--muted)", fontSize: ".85rem" }}>
              Read our <Link href="/editorial-policy" style={{ color: "var(--emerald)", fontWeight: 600 }}>Editorial Policy</Link> to learn about our content standards and accuracy.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
