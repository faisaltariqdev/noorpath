import type { Metadata } from "next";
import Link from "next/link";
import CTAForm from "@/components/CTAForm";
import { ORGANIZATION_REF } from "@/lib/organizationSchema";
import { CheckCircle, Clock, BookOpen, Award } from "lucide-react";

export const revalidate = false;

export const metadata: Metadata = {
  title: { absolute: "Online Quran Classes for Adults — Learn Quran at Any Age | Free Trial 2026" },
  description:
    "Online Quran classes for adults: complete beginners to advanced Tajweed & Hifz. Certified 1-on-1 tutors, flexible UK/US/AU schedule, female tutors available, from $29/mo. Free trial.",
  keywords: [
    "online quran classes for adults", "quran for adults online", "learn quran as an adult",
    "adult quran classes", "quran classes beginners adults", "tajweed for adults online",
    "online quran teacher for adults", "learn quran online adult", "quran for adult beginners",
    "online quran classes for adults uk", "online quran classes for adults usa",
    "quran classes for women online", "adult hifz program online", "learn to read quran as adult",
  ],
  alternates: { canonical: "https://www.noorpath.online/online-quran-classes-for-adults" },
  openGraph: {
    title: "Online Quran Classes for Adults | NoorPath Academy",
    description: "Private online Quran classes for adults of all levels — from complete beginners to advanced Tajweed. Certified tutors, flexible scheduling. Free trial.",
    url: "https://www.noorpath.online/online-quran-classes-for-adults",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Online Quran Classes for Adults — NoorPath Academy" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Online Quran Classes for Adults | NoorPath Academy",
    description: "Private Quran classes for adult learners — beginners to Hifz. Free 30-min trial.",
    images: ["/og-image.png"],
  },
};

const faqs = [
  { q: "Can I learn Quran as an adult complete beginner?", a: "Absolutely. Many of our most motivated students are adults who never learned Quran as children. Our Noorani Qaida program is perfect for adult beginners — we teach the Arabic alphabet and pronunciation from scratch. No prior Arabic knowledge required." },
  { q: "How long does it take to learn to read Quran as an adult?", a: "With 2–3 classes per week plus 15 minutes daily practice, most adult beginners read Juz Amma fluently within 4–6 months. Noorani Qaida takes 8–14 weeks. Progress depends on consistency — our tutors give you a personalized timeline in your first class." },
  { q: "Do you have female tutors for adult sisters?", a: "Yes — we have certified female tutors (Hafiza) available for all adult female learners. All sessions are private 1-on-1 via Zoom with no male presence. Request a female teacher when booking your free trial." },
  { q: "Can adults pursue Hifz (Quran memorization)?", a: "Yes! Age is not a barrier for Hifz. We have adult students in their 30s, 40s, and even 60s who are memorizing Quran. Our Hifz tutors use the Sabaq-Sabqi-Manzil revision system and specialize in working with adult learners who balance work and family." },
  { q: "How much do online Quran classes for adults cost?", a: "Plans start from $29/month for 1 session per week. Standard plan (2 classes/week) is $49/month. Your first 30-minute trial class is completely free — no credit card required. Family discounts available if enrolling children too." },
  { q: "What timezone do you teach in?", a: "NoorPath tutors are available for UK (GMT/BST), USA (EST/PST/CST), Canada, Australia (AEST), UAE, and 40+ countries. Evening slots, morning slots, and weekend classes are available for all timezones." },
  { q: "What is the best first step for an adult beginner?", a: "Book a free 30-minute trial. Your tutor will assess your current level and recommend either starting with Noorani Qaida (for zero beginners) or a specific point if you have some prior knowledge. You leave the trial with a clear learning plan." },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": "https://www.noorpath.online/online-quran-classes-for-adults#service",
      name: "Online Quran Classes for Adults",
      description: "Private 1-on-1 online Quran classes for adult learners of all levels — Qaida, Tajweed, Hifz, Arabic, and Islamic studies. Free 30-min trial.",
      provider: ORGANIZATION_REF,
      serviceType: "Online Quran Education",
      audience: { "@type": "Audience", audienceType: "Adult Muslim learners — complete beginners to advanced" },
      url: "https://www.noorpath.online/online-quran-classes-for-adults",
      offers: { "@type": "Offer", price: "29", priceCurrency: "USD", description: "From $29/month. Free 30-min trial." },
      areaServed: { "@type": "Country", name: "Worldwide" },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.9",
        ratingCount: "2400",
        bestRating: "5",
        worstRating: "1",
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
        { "@type": "ListItem", position: 2, name: "Online Quran Classes", item: "https://www.noorpath.online/online-quran-classes" },
        { "@type": "ListItem", position: 3, name: "For Adults", item: "https://www.noorpath.online/online-quran-classes-for-adults" },
      ],
    },
  ],
};

export default function OnlineQuranClassesForAdultsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="page-hero">
        <div className="max-w-[1200px] mx-auto px-4 page-hero-content">
          <nav aria-label="Breadcrumb" style={{ marginBottom: 16 }}>
            <Link href="/" style={{ color: "var(--gold-lt)", fontSize: ".85rem" }}>Home</Link>
            <span style={{ color: "rgba(255,255,255,.4)", margin: "0 8px" }}>›</span>
            <Link href="/online-quran-classes" style={{ color: "var(--gold-lt)", fontSize: ".85rem" }}>Online Quran Classes</Link>
            <span style={{ color: "rgba(255,255,255,.4)", margin: "0 8px" }}>›</span>
            <span style={{ color: "rgba(255,255,255,.6)", fontSize: ".85rem" }}>For Adults</span>
          </nav>
          <h1>Online Quran Classes for Adults</h1>
          <p>It is never too late to learn the Quran. Private 1-on-1 classes with certified tutors — from complete beginner to advanced Tajweed and Hifz. Start with a free trial today.</p>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 24 }}>
            <Link href="#cta" className="btn-primary-np">Book Free Trial →</Link>
            <Link href="/courses" className="btn-outline-np" style={{ color: "#fff", borderColor: "rgba(255,255,255,.5)" }}>View All Courses</Link>
          </div>
        </div>
      </div>

      <section>
        <div className="max-w-[1200px] mx-auto px-4">
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <span className="section-eyebrow">📖 Adult Quran Learning</span>
            <h2 className="section-title">Why Adults Love Learning with <em className="accent">NoorPath</em></h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {[
              [<BookOpen size={22} key="b" />, "Complete Beginner Friendly", "Start with Noorani Qaida — Arabic alphabet, pronunciation, and reading fundamentals."],
              [<Clock size={22} key="c" />, "Your Schedule", "Book morning, evening, or weekend sessions. 24/7 availability across all timezones."],
              [<Award size={22} key="a" />, "Ijazah Tutors", "Learn from certified scholars who specialize in teaching adult learners with patience."],
              [<CheckCircle size={22} key="ch" />, "All Levels", "Beginner Qaida, Tajweed, Hifz, Arabic grammar, Tafseer — we teach every level."],
            ].map(([icon, title, desc]) => (
              <div key={String(title)} className="content-card" style={{ textAlign: "center" }}>
                <div style={{ color: "var(--emerald)", display: "flex", justifyContent: "center", marginBottom: 12 }}>{icon}</div>
                <h3 style={{ fontFamily: "var(--font-playfair), serif", fontSize: ".97rem", fontWeight: 700, marginBottom: 8 }}>{title}</h3>
                <p style={{ color: "var(--muted)", fontSize: ".85rem", lineHeight: 1.6, margin: 0 }}>{String(desc)}</p>
              </div>
            ))}
          </div>

          {/* Quick Answer box */}
          <div style={{ background: "rgba(10,110,79,.06)", borderLeft: "4px solid var(--emerald)", borderRadius: 12, padding: "20px 26px", marginBottom: 40, fontSize: ".95rem", lineHeight: 1.75, color: "#374151" }}>
            <strong style={{ color: "var(--emerald)" }}>Quick answer: </strong>
            Yes — it is never too late to start. Adults at NoorPath begin with <Link href="/courses/noorani-qaida-online" style={{ color: "var(--emerald)", fontWeight: 600 }}>Noorani Qaida</Link>, then move to Quran reading, then <Link href="/learn-tajweed-online" style={{ color: "var(--emerald)", fontWeight: 600 }}>Tajweed</Link>. Most adults read Juz Amma in 4–6 months with 2–3 weekly sessions. First lesson is free.{" "}
            <a href="#cta" style={{ color: "var(--emerald)", fontWeight: 700 }}>Book free trial →</a>
          </div>

          {/* Trust stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-14">
            {[
              { value: "4–6 mo", label: "Avg. time to read Juz Amma" },
              { value: "2–3×", label: "Lessons/week recommended" },
              { value: "$29", label: "Starting monthly plan" },
              { value: "Any age", label: "Adults 18–70+ welcome" },
            ].map((s) => (
              <div key={s.label} style={{ textAlign: "center", background: "var(--ivory)", border: "1px solid var(--border)", borderRadius: 14, padding: "22px 12px" }}>
                <div style={{ fontSize: "1.4rem", fontWeight: 800, color: "var(--emerald)", lineHeight: 1.2 }}>{s.value}</div>
                <div style={{ fontSize: ".78rem", color: "var(--muted)", marginTop: 4 }}>{s.label}</div>
              </div>
            ))}
          </div>

          {/* Related links */}
          <div style={{ background: "var(--ivory)", border: "1px solid var(--border)", borderRadius: 14, padding: "20px 24px", marginBottom: 40 }}>
            <strong style={{ color: "var(--charcoal)", fontSize: ".9rem" }}>Related pages: </strong>
            {[
              ["/learn-quran-online", "Learn Quran Online"],
              ["/female-quran-teacher-online", "Female Quran Teacher"],
              ["/hifz-quran-online", "Hifz Online"],
              ["/learn-tajweed-online", "Tajweed Online"],
              ["/online-quran-classes", "All Classes"],
              ["/blog/learn-quran-online-adult-beginner-guide", "Adult Beginner Guide"],
            ].map(([href, label]) => (
              <Link key={href as string} href={href as string} style={{ color: "var(--emerald)", fontWeight: 600, fontSize: ".88rem", marginLeft: 12, textDecoration: "none" }}>
                → {label}
              </Link>
            ))}
          </div>

          {/* FAQ */}
          <h2 style={{ fontFamily: "var(--font-playfair), serif", fontSize: "1.6rem", textAlign: "center", marginBottom: 28 }}>
            Common Questions from Adult Learners
          </h2>
          <div className="max-w-[760px] mx-auto" style={{ marginBottom: 48 }}>
            {faqs.map((f, i) => (
              <details key={i} style={{ borderBottom: "1px solid var(--border)", padding: "18px 0" }}>
                <summary style={{ fontWeight: 600, color: "var(--charcoal)", cursor: "pointer", fontSize: ".95rem" }}>{f.q}</summary>
                <p style={{ color: "var(--muted)", marginTop: 10, lineHeight: 1.75, fontSize: ".9rem" }}>{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-section" id="cta">
        <div className="max-w-[1200px] mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 style={{ fontFamily: "var(--font-playfair), serif", color: "#fff", fontSize: "2rem", marginBottom: 16 }}>
                It&apos;s Never Too Late — Start<br /><em style={{ color: "var(--gold-lt)" }}>Your Quran Journey Today</em>
              </h2>
              <p style={{ color: "rgba(255,255,255,.75)", marginBottom: 20 }}>
                Free 30-minute trial with a certified tutor. No credit card. No commitment. Just 30 minutes that could change your relationship with the Quran.
              </p>
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
