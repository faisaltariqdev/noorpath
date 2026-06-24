import type { Metadata } from "next";
import Link from "next/link";
import CTAForm from "@/components/CTAForm";
import { ORGANIZATION_REF } from "@/lib/organizationSchema";
import { CheckCircle, Clock, BookOpen, Award } from "lucide-react";

export const metadata: Metadata = {
  title: "Online Quran Classes for Adults — Learn Quran at Any Age",
  description: "Private online Quran classes for adults: beginners, Tajweed, Hifz and Quran reading with certified tutors. Flexible schedule, free trial.",
  keywords: [
    "online quran classes for adults","quran for adults online","learn quran as an adult",
    "adult quran classes","quran classes beginners adults","tajweed for adults online",
    "online quran teacher for adults",
  ],
  alternates: { canonical: "https://www.noorpath.online/online-quran-classes-for-adults" },
  openGraph: {
    title: "Online Quran Classes for Adults | NoorPath Academy",
    description: "Private online Quran classes for adults of all levels — from complete beginners to advanced Tajweed. Certified tutors, flexible scheduling. Free trial.",
    url: "https://www.noorpath.online/online-quran-classes-for-adults",
    images: [{ url: "/og-image.svg", width: 1200, height: 630, alt: "Online Quran Classes for Adults — NoorPath Academy" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Online Quran Classes for Adults | NoorPath Academy",
    description: "Private Quran classes for adult learners — beginners to Hifz. Free 30-min trial.",
    images: ["/og-image.svg"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Online Quran Classes for Adults",
  description: "Private 1-on-1 online Quran classes for adult learners of all levels — Qaida, Tajweed, Hifz, Arabic, and Islamic studies.",
  provider: ORGANIZATION_REF,
  serviceType: "Online Quran Education",
  audience: { "@type": "Audience", audienceType: "Adult Muslim learners — complete beginners to advanced" },
  url: "https://www.noorpath.online/online-quran-classes-for-adults",
};

const faqs = [
  { q: "Can I learn Quran as an adult complete beginner?", a: "Absolutely. Many of our most motivated students are adults who never learned Quran as children. Our Noorani Qaida program is perfect for adult beginners — we teach the Arabic alphabet and pronunciation from scratch." },
  { q: "How long does it take to learn to read Quran as an adult?", a: "With 2 classes per week, most adult beginners can read Quran fluently within 6–12 months. Progress varies, but consistent practice makes a significant difference." },
  { q: "Do you have female tutors for adult sisters?", a: "Yes — we have certified female tutors (Hafiza) available for all adult female learners. You can specify your preference when booking." },
  { q: "Can adults pursue Hifz (Quran memorization)?", a: "Yes! Age is not a barrier for Hifz. We have adult students in their 30s, 40s, and even 60s who are memorizing Quran. Our Hifz tutors specialize in working with adult learners." },
];

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

          {/* FAQ */}
          <h2 style={{ fontFamily: "var(--font-playfair), serif", fontSize: "1.6rem", textAlign: "center", marginBottom: 28 }}>
            Common Questions from Adult Learners
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
