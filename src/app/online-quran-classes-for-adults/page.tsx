import type { Metadata } from "next";
import Link from "next/link";
import CTAForm from "@/components/CTAForm";
import { ORGANIZATION_REF } from "@/lib/organizationSchema";
import { CheckCircle, Clock, BookOpen, Award } from "lucide-react";
import { PRICING_PLANS, TRIAL } from "@/lib/academyFacts";

export const revalidate = false;

export const metadata: Metadata = {
  title: { absolute: "Online Quran Classes for Adults — Learn Quran at Any Age | Free Trial 2026" },
  description:
    `Online Quran classes for adults: complete beginners, Tajweed and Hifz. Live 1-on-1 tutor matching, female tutor requests, plans from $${PRICING_PLANS[0].monthlyPriceUsd}/month and a free trial.`,
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
    description: "Private online Quran classes for adults, from complete beginners to Tajweed and Hifz. Tutor matching and a free trial.",
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
  { q: "Can I learn Quran as an adult complete beginner?", a: "Yes. Noorani Qaida introduces the Arabic alphabet, pronunciation, and reading foundations from the beginning. No prior Arabic knowledge is required." },
  { q: "How long does it take to learn to read Quran as an adult?", a: "There is no fixed completion timeline. Progress varies with starting level, lesson frequency, practice, and individual goals. The tutor can recommend a learning sequence after assessing your current level." },
  { q: "Can I request a female tutor for an adult sister?", a: "Yes. Request a female tutor when booking your trial. Subject, schedule availability, and relevant credentials are confirmed before enrolment." },
  { q: "Can adults pursue Hifz (Quran memorization)?", a: "Yes. Adults can request Hifz tutor matching. The learning and revision plan should reflect existing memorisation, available practice time, and personal goals." },
  { q: "How much do online Quran classes for adults cost?", a: `Plans start from $${PRICING_PLANS[0].monthlyPriceUsd}/month for ${PRICING_PLANS[0].sessionsPerWeek} session per week. The first ${TRIAL.durationMinutes}-minute trial is free and requires no credit card.` },
  { q: "What timezone do you teach in?", a: "Share your timezone and preferred lesson windows when booking. Tutor availability is confirmed after your request." },
  { q: "What is the first step for an adult beginner?", a: "Book a free 30-minute trial. The tutor can assess your current level and recommend either starting with Noorani Qaida or another suitable point if you have prior knowledge." },
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
      offers: {
        "@type": "Offer",
        price: String(PRICING_PLANS[0].monthlyPriceUsd),
        priceCurrency: "USD",
        description: `From $${PRICING_PLANS[0].monthlyPriceUsd}/month. Free ${TRIAL.durationMinutes}-minute trial request.`,
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
          <p>It is never too late to learn the Quran. Private 1-on-1 classes can be matched for complete beginners, Tajweed, or Hifz. Relevant tutor credentials are confirmed before enrolment.</p>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 24 }}>
            <Link href="/free-quran-classes-online" className="btn-primary-np">Book Free Trial →</Link>
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
              [<Clock size={22} key="c" />, "Your Schedule", "Share your timezone and preferred lesson windows; tutor availability is confirmed after your request."],
              [<Award size={22} key="a" />, "Credentials Confirmed", "Relevant qualifications and adult teaching experience are confirmed for the proposed tutor before enrolment."],
              [<CheckCircle size={22} key="ch" />, "Learning Goals", "Request matching for beginner Qaida, Quran reading, Tajweed, Hifz, Arabic grammar, or Tafseer."],
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
            Yes — it is never too late to start. Depending on your current level, you may begin with <Link href="/courses/noorani-qaida-online" style={{ color: "var(--emerald)", fontWeight: 600 }}>Noorani Qaida</Link>, Quran reading, or <Link href="/learn-tajweed-online" style={{ color: "var(--emerald)", fontWeight: 600 }}>Tajweed</Link>. Progress varies, and the first lesson is free.{" "}
            <a href="/free-quran-classes-online" style={{ color: "var(--emerald)", fontWeight: 700 }}>Book free trial →</a>
          </div>

          {/* Working professionals angle (Fix 11B) */}
          <div className="content-card" style={{ marginBottom: 40, borderTop: "3px solid var(--emerald)" }}>
            <h2 style={{ fontFamily: "var(--font-playfair), serif", fontSize: "1.35rem", marginBottom: 12 }}>
              Evening &amp; Weekend Options for Working Professionals
            </h2>
            <p style={{ color: "var(--muted)", lineHeight: 1.75, marginBottom: 14, fontSize: ".95rem" }}>
              Full-time work does not have to pause Quran learning. Share evening or weekend windows in your timezone;
              NoorPath confirms tutor availability after matching. Dedicated page:{" "}
              <Link href="/quran-classes-for-working-professionals" style={{ color: "var(--emerald)", fontWeight: 700 }}>
                Quran classes for working professionals →
              </Link>
              {" · "}
              Sisters may also request a female tutor via{" "}
              <Link href="/quran-classes-for-sisters" style={{ color: "var(--emerald)", fontWeight: 700 }}>
                Quran classes for sisters
              </Link>.
            </p>
          </div>

          {/* Trust stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-14">
            {[
              { value: "1-to-1", label: "Live online lessons" },
              { value: `${TRIAL.durationMinutes} min`, label: "Free trial class" },
              { value: `$${PRICING_PLANS[0].monthlyPriceUsd}`, label: "Starting monthly plan" },
              { value: "Flexible", label: "Tutor matching" },
            ].map((s) => (
              <div key={s.label} style={{ textAlign: "center", background: "var(--ivory)", border: "1px solid var(--border)", borderRadius: 14, padding: "22px 12px" }}>
                <div style={{ fontSize: "1.4rem", fontWeight: 800, color: "var(--emerald)", lineHeight: 1.2 }}>{s.value}</div>
                <div style={{ fontSize: ".78rem", color: "var(--muted)", marginTop: 4 }}>{s.label}</div>
              </div>
            ))}
          </div>

          {/* Unique depth: adult learning paths */}
          <div style={{ maxWidth: 860, margin: "0 auto 48px" }}>
            <h2 style={{ fontFamily: "var(--font-playfair), serif", fontSize: "1.55rem", marginBottom: 16, color: "var(--charcoal)" }}>
              Adult learning paths — pick the honest starting point
            </h2>
            <p style={{ color: "var(--muted)", lineHeight: 1.8, marginBottom: 16, fontSize: ".95rem" }}>
              Online Quran classes for adults work best when the first month matches your real level — not a marketing label.
              Most adult learners fall into one of four starting points. Your free trial is for identifying which path fits,
              not for promising a fixed graduation date.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-20">
              {[
                {
                  title: "Complete beginner / new Muslim",
                  body: "Start with letter recognition and short vowels (often via Noorani Qaida), then move into simple Quran words. No prior Arabic is required. Ask for patient pacing and English explanations.",
                },
                {
                  title: "Can read slowly, wants fluency",
                  body: "Focus on joining, rhythm, and stopping/starting rules with live correction. Apps alone rarely catch the letter habits adults accidentally keep for years.",
                },
                {
                  title: "Reads but wants Tajweed precision",
                  body: "Request Tajweed-focused matching. Expect targeted drills on heavy letters, madd, and common salah surah corrections rather than racing new pages.",
                },
                {
                  title: "Memorisation (Hifz) goals",
                  body: "Adults can pursue Hifz with a revision-first plan. Progress depends on available practice time; ask for a realistic weekly load after assessment — not a guaranteed completion calendar.",
                },
              ].map((item) => (
                <div key={item.title} className="content-card" style={{ textAlign: "left" }}>
                  <h3 style={{ fontFamily: "var(--font-playfair), serif", fontSize: "1.05rem", marginBottom: 8 }}>{item.title}</h3>
                  <p style={{ color: "var(--muted)", fontSize: ".88rem", lineHeight: 1.7, margin: 0 }}>{item.body}</p>
                </div>
              ))}
            </div>

            <h2 style={{ fontFamily: "var(--font-playfair), serif", fontSize: "1.55rem", marginBottom: 16, color: "var(--charcoal)" }}>
              What the first month usually looks like
            </h2>
            <ol style={{ color: "var(--muted)", lineHeight: 1.85, marginBottom: 28, paddingLeft: 22, fontSize: ".95rem" }}>
              <li style={{ marginBottom: 10 }}>
                <strong style={{ color: "var(--charcoal)" }}>Week 1:</strong> Trial + level check. Confirm goals (reading, Tajweed, Hifz, or Islamic studies support) and preferred windows in your timezone.
              </li>
              <li style={{ marginBottom: 10 }}>
                <strong style={{ color: "var(--charcoal)" }}>Weeks 2–3:</strong> Stabilise one skill track — letters, joins, or a short surah repair — instead of chasing five goals at once.
              </li>
              <li style={{ marginBottom: 10 }}>
                <strong style={{ color: "var(--charcoal)" }}>Week 4:</strong> Review what stuck. Adjust session length or frequency if work stress is colliding with practice. Sustainable beats heroic.
              </li>
            </ol>

            <h2 style={{ fontFamily: "var(--font-playfair), serif", fontSize: "1.55rem", marginBottom: 16, color: "var(--charcoal)" }}>
              Why live 1-to-1 still matters for adults
            </h2>
            <p style={{ color: "var(--muted)", lineHeight: 1.8, marginBottom: 14, fontSize: ".95rem" }}>
              Adult learners often have strong motivation and weak feedback loops. Recordings and apps help exposure; they do not reliably judge whether ع or أ was correct.
              Live private lessons let you ask questions without embarrassment, request a{" "}
              <Link href="/female-quran-teacher-online" style={{ color: "var(--emerald)", fontWeight: 600 }}>female tutor</Link>{" "}
              when preferred, and keep accountability on busy weeks. If you are starting from zero, also see{" "}
              <Link href="/online-quran-for-beginners" style={{ color: "var(--emerald)", fontWeight: 600 }}>online Quran for beginners</Link>{" "}
              and the{" "}
              <Link href="/blog/learn-quran-online-adult-beginner-guide" style={{ color: "var(--emerald)", fontWeight: 600 }}>adult beginner guide</Link>.
            </p>
            <p style={{ color: "var(--muted)", lineHeight: 1.8, marginBottom: 40, fontSize: ".95rem" }}>
              Verified basics only: free {TRIAL.durationMinutes}-minute trial with no credit card, live one-to-one matching by subject/age/timezone/gender preference,
              and credentials confirmed per proposed tutor before enrolment. Availability is confirmed after your request.
            </p>
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
              ["/online-quran-for-beginners", "Quran for Beginners"],
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
                Free 30-minute trial with no credit card required. Relevant tutor credentials and availability are confirmed before enrolment.
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
