import type { Metadata } from "next";
import Link from "next/link";
import CTAForm from "@/components/CTAForm";
import { ORGANIZATION_REF } from "@/lib/organizationSchema";
import { CheckCircle, Clock, BookOpen, Award, Shield, Users, Star } from "lucide-react";

export const metadata: Metadata = {
  title: {
    absolute: "Online Quran Classes for Kids — 1-on-1 Live | Free Trial 2026",
  },
  description:
    "Best online Quran classes for kids ages 4–12. Certified 1-on-1 tutors, Noorani Qaida, Tajweed & Hifz. Safe Zoom classes, flexible UK/US/AU times. Free 30-min trial — no credit card.",
  keywords: [
    "online quran classes for kids",
    "quran classes for kids online",
    "learn quran online for kids",
    "best online quran classes for kids",
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
  ],
  alternates: { canonical: "https://www.noorpath.online/online-quran-classes-for-kids" },
  openGraph: {
    title: "Online Quran Classes for Kids — 1-on-1 Live | Free Trial",
    description:
      "Certified tutors teach kids ages 4–12 via live 1-on-1 Zoom classes. Noorani Qaida, Tajweed, Hifz. Parent-monitored, flexible scheduling. Book free trial.",
    url: "https://www.noorpath.online/online-quran-classes-for-kids",
    images: [{ url: "/og-image.svg", width: 1200, height: 630, alt: "Online Quran Classes for Kids — NoorPath Academy" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Online Quran Classes for Kids — Free Trial",
    description: "1-on-1 live Quran classes for kids. Certified tutors, ages 4–12. No credit card.",
    images: ["/og-image.svg"],
  },
};

const faqs = [
  {
    q: "What is the best age to start online Quran classes for kids?",
    a: "Most scholars and child educators recommend ages 4–7. At NoorPath, children from age 4 can start with short 20–25 minute sessions using games and visual Qaida. Ages 7–12 typically progress faster with 30–40 minute lessons.",
  },
  {
    q: "Are online Quran classes safe for children?",
    a: "Yes — when you choose a reputable academy. NoorPath uses Zoom/Google Meet only (no private messaging), encourages parent supervision especially in the first month, and all tutors are background-verified with Ijazah credentials.",
  },
  {
    q: "How much do online Quran classes for kids cost?",
    a: "Plans start from $29/month with family discounts for siblings. Your first class is a completely free 30-minute trial — no credit card required. See our pricing page for full plan details.",
  },
  {
    q: "How long should a Quran class be for a child?",
    a: "Ages 4–6: 20–25 minutes. Ages 7–9: 30 minutes. Ages 10–12: 35–45 minutes. Our tutors adjust session length to your child's attention span — never forcing longer classes than they can handle.",
  },
  {
    q: "Can my child learn with a female Quran teacher?",
    a: "Yes. We have certified female tutors (Hafiza) available for daughters and young girls. Request a female teacher when booking your free trial.",
  },
  {
    q: "What will my child learn in the first month?",
    a: "Month 1 typically covers: Arabic letter recognition, basic harakat (vowels), 3–5 short duas, Islamic manners, and — for many children — the first lines of Surah Al-Fatiha. You receive a weekly parent progress report.",
  },
  {
    q: "Do you offer classes for families in the UK, USA, and Australia?",
    a: "Yes. We serve families in 40+ countries with timezone-friendly slots — UK evenings, US mornings/evenings, and Australian after-school times. See our location pages for country-specific scheduling.",
  },
  {
    q: "Is the free trial really free?",
    a: "Yes — 100% free. One live 30-minute 1-on-1 class with a certified tutor. No credit card, no automatic charges, no hidden fees. Book only if you want to continue.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": "https://www.noorpath.online/online-quran-classes-for-kids#service",
      name: "Online Quran Classes for Kids",
      description:
        "Live 1-on-1 online Quran classes for children ages 4–12. Certified tutors teach Noorani Qaida, Tajweed, Hifz, and Islamic studies via Zoom.",
      provider: ORGANIZATION_REF,
      serviceType: "Online Quran Education for Children",
      audience: { "@type": "Audience", audienceType: "Muslim children ages 4–12 and their parents" },
      url: "https://www.noorpath.online/online-quran-classes-for-kids",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
        description: "Free 30-minute trial class",
        url: "https://www.noorpath.online/online-quran-classes-for-kids#cta",
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
  ],
};

export default function OnlineQuranClassesForKidsPage() {
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
            <span style={{ color: "rgba(255,255,255,.6)", fontSize: ".85rem" }}>For Kids</span>
          </nav>
          <h1>Online Quran Classes for Kids</h1>
          <p>
            Live 1-on-1 Quran classes for children ages 4–12 — certified tutors, engaging lessons, and weekly parent reports.
            Trusted by 12,000+ families worldwide. <strong style={{ color: "var(--gold-lt)" }}>Free 30-minute trial — no credit card.</strong>
          </p>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 24, alignItems: "center" }}>
            <Link href="#cta" className="btn-primary-np">Book Free Trial for Your Child →</Link>
            <Link href="/pricing" className="btn-outline-np" style={{ color: "#fff", borderColor: "rgba(255,255,255,.5)" }}>View Pricing</Link>
            <span style={{ color: "rgba(255,255,255,.7)", fontSize: ".85rem", display: "flex", alignItems: "center", gap: 6 }}>
              <Star size={14} fill="var(--gold)" color="var(--gold)" /> 4.9/5 from 2,400+ families
            </span>
          </div>
        </div>
      </div>

      <section>
        <div className="max-w-[1200px] mx-auto px-4">
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <span className="section-eyebrow">🌙 Why Parents Choose NoorPath</span>
            <h2 className="section-title">The Best Online Quran Classes for <em className="accent">Kids</em> — Built for Real Families</h2>
            <p style={{ color: "var(--muted)", maxWidth: 680, margin: "12px auto 0", lineHeight: 1.7 }}>
              Not group webinars. Not pre-recorded videos. Real live teachers who know how to keep your child engaged,
              correct pronunciation instantly, and send you progress updates every week.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {[
              [<Users size={22} key="u" />, "1-on-1 Private Attention", "Your child is never lost in a group. The tutor focuses 100% on your child's pace, mistakes, and motivation."],
              [<Award size={22} key="a" />, "Ijazah-Certified Tutors", "Every teacher holds Ijazah or Al-Azhar qualification and experience teaching children specifically."],
              [<Shield size={22} key="s" />, "Safe & Parent-Monitored", "Zoom/Google Meet only. No private chat. Parents welcome to observe — especially in the first month."],
              [<Clock size={22} key="c" />, "Flexible Scheduling", "UK, US, Canada, Australia & Gulf timezones. After-school and weekend slots available."],
              [<BookOpen size={22} key="b" />, "Full Kids Curriculum", "Noorani Qaida → Quran reading → Tajweed → duas, Hadith & Islamic manners."],
              [<CheckCircle size={22} key="ch" />, "Weekly Progress Reports", "Know exactly what your child learned, what's next, and how to support practice at home."],
            ].map(([icon, title, desc]) => (
              <div key={String(title)} className="content-card">
                <div style={{ color: "var(--emerald)", marginBottom: 12 }}>{icon}</div>
                <h3 style={{ fontFamily: "var(--font-playfair), serif", fontSize: ".97rem", fontWeight: 700, marginBottom: 8 }}>{title}</h3>
                <p style={{ color: "var(--muted)", fontSize: ".85rem", lineHeight: 1.6, margin: 0 }}>{String(desc)}</p>
              </div>
            ))}
          </div>

          {/* Age groups */}
          <h2 style={{ fontFamily: "var(--font-playfair), serif", fontSize: "1.6rem", textAlign: "center", marginBottom: 28 }}>
            Quran Learning by Age — What to Expect
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {[
              ["Ages 4–6", "20–25 min sessions", "Arabic letters through games, colours, and short duas. Building love for Quran before pressure."],
              ["Ages 7–9", "30 min sessions", "Noorani Qaida completion, Surah Al-Fatiha, basic Tajweed, daily duas and Islamic manners."],
              ["Ages 10–12", "35–45 min sessions", "Fluent Quran reading, Tajweed rules, optional Hifz start, Islamic studies and character building."],
            ].map(([age, duration, desc]) => (
              <div key={String(age)} className="content-card" style={{ borderTop: "3px solid var(--emerald)" }}>
                <div style={{ fontWeight: 800, color: "var(--emerald)", fontSize: "1.1rem", marginBottom: 4 }}>{age}</div>
                <div style={{ fontSize: ".82rem", color: "var(--gold)", fontWeight: 600, marginBottom: 10 }}>{duration}</div>
                <p style={{ color: "var(--muted)", fontSize: ".88rem", lineHeight: 1.65, margin: 0 }}>{desc}</p>
              </div>
            ))}
          </div>

          {/* How it works */}
          <h2 style={{ fontFamily: "var(--font-playfair), serif", fontSize: "1.6rem", textAlign: "center", marginBottom: 28 }}>
            How to Start — 3 Simple Steps
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {[
              ["1", "Book Free Trial", "Fill the form below. We match your child with the best tutor for their age and timezone."],
              ["2", "Attend First Class", "30-minute live lesson on Zoom. Your child meets their teacher and starts learning immediately."],
              ["3", "Choose Your Plan", "Love the trial? Pick a monthly plan. Family discounts for 2+ siblings. Cancel anytime."],
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

          {/* Internal links */}
          <div style={{ background: "var(--ivory)", borderRadius: 16, padding: "28px 32px", marginBottom: 48, border: "1px solid var(--border)" }}>
            <h3 style={{ fontFamily: "var(--font-playfair), serif", fontSize: "1.1rem", marginBottom: 16 }}>Learn More Before You Book</h3>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
              {[
                ["/blog/online-quran-classes-for-kids-parent-guide", "Complete Parent Guide 2026"],
                ["/blog/best-age-to-start-quran-learning", "Best Age to Start Quran"],
                ["/blog/how-to-teach-quran-to-kids", "How to Teach Quran at Home"],
                ["/courses/quran-classes-for-kids", "Kids Quran Course Details"],
                ["/female-quran-teacher-online", "Female Quran Teacher"],
                ["/locations/online-quran-classes-uk", "Quran Classes UK"],
                ["/locations/online-quran-classes-usa", "Quran Classes USA"],
              ].map(([href, label]) => (
                <Link key={href} href={href} style={{
                  background: "#fff", border: "1px solid var(--border)", borderRadius: 50,
                  padding: "6px 14px", fontSize: ".8rem", color: "var(--emerald)", fontWeight: 600, textDecoration: "none",
                }}>{label}</Link>
              ))}
            </div>
          </div>

          <h2 style={{ fontFamily: "var(--font-playfair), serif", fontSize: "1.6rem", textAlign: "center", marginBottom: 28 }}>
            Parents Ask Us This Every Day
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
                Book Your Child&apos;s<br /><em style={{ color: "var(--gold-lt)" }}>Free Quran Trial Class</em>
              </h2>
              <p style={{ color: "rgba(255,255,255,.75)", marginBottom: 16, lineHeight: 1.7 }}>
                30 minutes. 1 certified tutor. 1 happy child learning Quran. No credit card. No commitment.
                Most parents decide within the first lesson.
              </p>
              <ul style={{ color: "rgba(255,255,255,.8)", fontSize: ".9rem", lineHeight: 2, paddingLeft: 20 }}>
                <li>✓ Ages 4–12 welcome</li>
                <li>✓ Male or female tutor available</li>
                <li>✓ UK, US, Canada, Australia timezones</li>
                <li>✓ Sibling family discounts</li>
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
