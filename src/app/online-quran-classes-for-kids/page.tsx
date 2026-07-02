import type { Metadata } from "next";
import Link from "next/link";
import CTAForm from "@/components/CTAForm";
import { ORGANIZATION_ID, ORGANIZATION_REF, BASE_URL } from "@/lib/organizationSchema";
import { CheckCircle, Clock, BookOpen, Award, Shield, Users, Star, Globe, MapPin } from "lucide-react";

export const revalidate = false;

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
    "online quran classes for kids uk",
    "online quran classes for kids usa",
    "online quran classes for kids canada",
    "online quran classes for kids australia",
    "female quran teacher for kids",
    "quran classes for children ages 4 to 12",
  ],
  alternates: { canonical: "https://www.noorpath.online/online-quran-classes-for-kids" },
  openGraph: {
    title: "Online Quran Classes for Kids — 1-on-1 Live | Free Trial",
    description:
      "Certified tutors teach kids ages 4–12 via live 1-on-1 Zoom classes. Noorani Qaida, Tajweed, Hifz. Parent-monitored, flexible scheduling. Book free trial.",
    url: "https://www.noorpath.online/online-quran-classes-for-kids",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Online Quran Classes for Kids — NoorPath Academy" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Online Quran Classes for Kids — Free Trial",
    description: "1-on-1 live Quran classes for kids. Certified tutors, ages 4–12. No credit card.",
    images: ["/og-image.png"],
  },
};

const PAGE_URL = `${BASE_URL}/online-quran-classes-for-kids`;

const faqs = [
  {
    q: "What is the best age to start online Quran classes for kids?",
    a: "Most scholars and child educators recommend ages 4–7. At NoorPath, children from age 4 can start with short 20–25 minute sessions using games and visual Qaida. Ages 7–12 typically progress faster with 30–40 minute lessons. Starting early builds a love for Quran before academic pressure begins.",
  },
  {
    q: "Are online Quran classes safe for children?",
    a: "Yes — when you choose a reputable academy. NoorPath uses Zoom/Google Meet only (no private messaging), encourages parent supervision especially in the first month, and all tutors are background-verified with Ijazah credentials. Parents can join any session unannounced at any time.",
  },
  {
    q: "How much do online Quran classes for kids cost?",
    a: "Plans start from $29/month with family discounts for siblings. Your first class is a completely free 30-minute trial — no credit card required. See our pricing page for full plan details. Sibling discounts of up to 20% are available for 2+ children enrolled.",
  },
  {
    q: "How long should a Quran class be for a child?",
    a: "Ages 4–6: 20–25 minutes. Ages 7–9: 30 minutes. Ages 10–12: 35–45 minutes. Our tutors adjust session length to your child's attention span — never forcing longer classes than they can handle. Short, consistent sessions are more effective than long infrequent ones.",
  },
  {
    q: "Can my child learn with a female Quran teacher?",
    a: "Yes. We have certified female tutors (Hafiza) available for daughters and young girls across all timezones — UK, USA, Canada, Australia, and Gulf. Request a female teacher when booking your free trial and we will match accordingly.",
  },
  {
    q: "What will my child learn in the first month?",
    a: "Month 1 typically covers: Arabic letter recognition, basic harakat (vowels), 3–5 short duas, Islamic manners, and — for many children — the first lines of Surah Al-Fatiha. You receive a weekly parent progress report after every session.",
  },
  {
    q: "Do you offer classes for families in the UK, USA, and Australia?",
    a: "Yes. We serve families in 40+ countries with timezone-friendly slots — UK evenings (5–9pm GMT), US mornings and evenings (EST/PST), Canadian after-school times, and Australian weekend slots. Your child's class time is always fixed and consistent.",
  },
  {
    q: "Is the free trial really free?",
    a: "Yes — 100% free. One live 30-minute 1-on-1 class with a certified tutor. No credit card, no automatic charges, no hidden fees. Book only if you want to continue. Over 85% of families who try a class continue with a monthly plan.",
  },
  {
    q: "What is Noorani Qaida and why do kids start with it?",
    a: "Noorani Qaida is the foundational Arabic reading method used for Quran learning. It teaches letter shapes, sounds (Makharij), vowels (harakat), and letter joining rules in a step-by-step child-friendly progression. Children who master Noorani Qaida can then read the Quran fluently with correct Tajweed.",
  },
  {
    q: "Can siblings share a tutor or class?",
    a: "For the best learning results, each child gets their own 1-on-1 class with the same or different tutor. However, we offer sibling family pricing — up to 20% off when you enroll 2 or more children. Contact us after booking your free trial to set up a family plan.",
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
        "Live 1-on-1 online Quran classes for children ages 4–12. Certified Ijazah and Al-Azhar tutors teach Noorani Qaida, Tajweed, Hifz, daily duas and Islamic studies via Zoom. Free 30-minute trial class included.",
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
        availability: "https://schema.org/InStock",
      },
      hasCourseInstance: {
        "@type": "CourseInstance",
        courseMode: "online",
        courseSchedule: {
          "@type": "Schedule",
          repeatFrequency: "P1W",
          byDay: ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"],
        },
      },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.9",
        ratingCount: "2400",
        bestRating: "5",
        worstRating: "1",
      },
    },
    {
      "@type": "Service",
      "@id": `${PAGE_URL}#service`,
      name: "Online Quran Classes for Kids",
      description:
        "Live 1-on-1 online Quran classes for children ages 4–12. Certified tutors teach Noorani Qaida, Tajweed, Hifz, and Islamic studies via Zoom.",
      provider: ORGANIZATION_REF,
      serviceType: "Online Quran Education for Children",
      audience: { "@type": "Audience", audienceType: "Muslim children ages 4–12 and their parents" },
      url: PAGE_URL,
      areaServed: ["United Kingdom", "United States", "Canada", "Australia", "United Arab Emirates", "Germany"],
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.9",
        ratingCount: "2400",
        bestRating: "5",
        worstRating: "1",
      },
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
  { value: "12,000+", label: "Families Served" },
  { value: "4.9★", label: "Average Rating" },
  { value: "2,400+", label: "Parent Reviews" },
  { value: "40+", label: "Countries" },
  { value: "100%", label: "Free Trial" },
];

const geoLocations = [
  { country: "🇬🇧 United Kingdom", detail: "Evening slots 5–9pm GMT. UK-accent-friendly tutors. Most popular: Mon–Thu evenings." },
  { country: "🇺🇸 United States", detail: "EST/PST/CST times available. Morning and after-school slots. Weekend Hifz sessions." },
  { country: "🇨🇦 Canada", detail: "Eastern and Pacific timezone slots. After-school and Saturday options." },
  { country: "🇦🇺 Australia", detail: "Weekend mornings and afternoon slots. AEST/AEDT friendly scheduling." },
  { country: "🇦🇪 Gulf (UAE/KSA)", detail: "GST/AST evening and weekend slots. Arabic-speaking tutors available." },
  { country: "🇩🇪 Europe", detail: "CET/CEST compatible slots. English and Urdu-speaking tutors." },
];

export default function OnlineQuranClassesForKidsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

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
            Live 1-on-1 Quran classes for children ages 4–12 — certified tutors, engaging lessons, and weekly parent reports.
            Trusted by 12,000+ families in the UK, USA, Canada, Australia and 40+ countries worldwide.{" "}
            <strong style={{ color: "var(--gold-lt)" }}>Free 30-minute trial — no credit card.</strong>
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

      <section>
        <div className="max-w-[1200px] mx-auto px-4">

          {/* WHY NOORPATH */}
          <div style={{ textAlign: "center", marginBottom: 48, marginTop: 56 }}>
            <span className="section-eyebrow">🌙 Why Parents Choose NoorPath</span>
            <h2 className="section-title">The Best Online Quran Classes for <em className="accent">Kids</em> — Built for Real Families</h2>
            <p style={{ color: "var(--muted)", maxWidth: 680, margin: "12px auto 0", lineHeight: 1.7 }}>
              Not group webinars. Not pre-recorded videos. Real live teachers who know how to keep your child engaged,
              correct pronunciation instantly, and send you progress updates every week.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {[
              [<Users size={22} key="u" />, "1-on-1 Private Attention", "Your child is never lost in a group. The tutor focuses 100% on your child's pace, mistakes, and motivation — every single session."],
              [<Award size={22} key="a" />, "Ijazah-Certified Tutors", "Every teacher holds Ijazah or Al-Azhar qualification, with specific experience teaching children from ages 4 to 12."],
              [<Shield size={22} key="s" />, "Safe & Parent-Monitored", "Zoom/Google Meet only. No private chat. Parents welcome to observe any session — especially in the first month."],
              [<Clock size={22} key="c" />, "Flexible Scheduling", "UK evenings, US mornings/evenings, Canadian after-school, Australian weekend slots — always consistent and fixed."],
              [<BookOpen size={22} key="b" />, "Full Kids Curriculum", "Noorani Qaida → Quran reading → Tajweed → duas, Hadith, seerah & Islamic manners — all in one structured program."],
              [<CheckCircle size={22} key="ch" />, "Weekly Progress Reports", "Know exactly what your child learned, what comes next, and how you can support their practice at home."],
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
            Quran Learning by Age — What to Expect
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {[
              ["Ages 4–6", "20–25 min sessions", "Arabic letters through games, colours, and short duas. Building love for Quran before any academic pressure. Focus on fun engagement and letter recognition."],
              ["Ages 7–9", "30 min sessions", "Noorani Qaida completion, Surah Al-Fatiha, basic Tajweed rules, daily duas and Islamic manners. Children begin reading the Quran independently."],
              ["Ages 10–12", "35–45 min sessions", "Fluent Quran reading, full Tajweed rules, optional Hifz start, Arabic vocabulary, Islamic studies and character building before teenage years."],
            ].map(([age, duration, desc]) => (
              <div key={String(age)} className="content-card" style={{ borderTop: "3px solid var(--emerald)" }}>
                <div style={{ fontWeight: 800, color: "var(--emerald)", fontSize: "1.1rem", marginBottom: 4 }}>{age}</div>
                <div style={{ fontSize: ".82rem", color: "var(--gold)", fontWeight: 600, marginBottom: 10 }}>{duration}</div>
                <p style={{ color: "var(--muted)", fontSize: ".88rem", lineHeight: 1.65, margin: 0 }}>{desc}</p>
              </div>
            ))}
          </div>

          {/* CURRICULUM TABLE */}
          <h2 style={{ fontFamily: "var(--font-playfair), serif", fontSize: "1.6rem", textAlign: "center", marginBottom: 28 }}>
            Kids Quran Curriculum — Month by Month
          </h2>
          <div style={{ overflowX: "auto", marginBottom: 48 }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: ".88rem" }}>
              <thead>
                <tr style={{ background: "var(--emerald)", color: "#fff" }}>
                  <th style={{ padding: "12px 16px", textAlign: "left", fontWeight: 700 }}>Month</th>
                  <th style={{ padding: "12px 16px", textAlign: "left", fontWeight: 700 }}>Focus Area</th>
                  <th style={{ padding: "12px 16px", textAlign: "left", fontWeight: 700 }}>What Your Child Learns</th>
                  <th style={{ padding: "12px 16px", textAlign: "left", fontWeight: 700 }}>Outcome</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Month 1", "Arabic Alphabet", "Letter shapes, sounds (Makharij), harakat (vowels), short duas", "Recognises all 29 Arabic letters"],
                  ["Month 2–3", "Noorani Qaida", "Letter joining, tanween, shadda, madd rules with exercises", "Reads simple Arabic words fluently"],
                  ["Month 4–5", "Quran Reading", "Short Surahs (Ikhlas, Nas, Falaq, Al-Fatiha), reading with Tajweed", "Reads from the Quran independently"],
                  ["Month 6–8", "Tajweed Rules", "Qalqalah, Ghunna, Ikhfa, Iqlab, Idgham — applied during recitation", "Recites with proper Tajweed rules"],
                  ["Month 9–12", "Advanced / Specialised", "Hifz (memorisation), Arabic vocabulary, Islamic studies or Seerah", "Personalised advanced learning path"],
                ].map(([month, focus, learns, outcome]) => (
                  <tr key={String(month)} style={{ borderBottom: "1px solid var(--border)" }}>
                    <td style={{ padding: "12px 16px", fontWeight: 700, color: "var(--emerald)", whiteSpace: "nowrap" }}>{month}</td>
                    <td style={{ padding: "12px 16px", fontWeight: 600 }}>{focus}</td>
                    <td style={{ padding: "12px 16px", color: "var(--muted)" }}>{learns}</td>
                    <td style={{ padding: "12px 16px", color: "var(--charcoal)", fontSize: ".82rem" }}>{outcome}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* HOW IT WORKS */}
          <h2 style={{ fontFamily: "var(--font-playfair), serif", fontSize: "1.6rem", textAlign: "center", marginBottom: 28 }}>
            How to Start — 3 Simple Steps
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {[
              ["1", "Book Free Trial", "Fill the form below. We match your child with the best tutor for their age, level, and timezone — within 24 hours."],
              ["2", "Attend First Class", "30-minute live lesson on Zoom. Your child meets their teacher and starts learning immediately. Parents welcome to join."],
              ["3", "Choose Your Plan", "Love the trial? Pick a monthly plan. Family discounts for 2+ siblings. Cancel anytime — no contracts."],
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
                Kids Quran Classes Available in Your Country
              </h2>
            </div>
            <p style={{ color: "var(--muted)", fontSize: ".88rem", marginBottom: 24, lineHeight: 1.6 }}>
              We serve Muslim families in 40+ countries with timezone-compatible scheduling. Your child&apos;s class time is always consistent and never changes without notice.
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
                ["/blog/best-age-to-start-quran-learning", "Best Age to Start Quran"],
                ["/blog/how-to-teach-quran-to-kids", "How to Teach Quran at Home"],
                ["/courses/quran-classes-for-kids", "Kids Quran Course Details"],
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

      {/* CTA */}
      <section className="cta-section" id="cta">
        <div className="max-w-[1200px] mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 style={{ fontFamily: "var(--font-playfair), serif", color: "#fff", fontSize: "2rem", marginBottom: 16 }}>
                Book Your Child&apos;s<br /><em style={{ color: "var(--gold-lt)" }}>Free Quran Trial Class</em>
              </h2>
              <p style={{ color: "rgba(255,255,255,.75)", marginBottom: 16, lineHeight: 1.7 }}>
                30 minutes. 1 certified tutor. 1 happy child learning Quran. No credit card. No commitment.
                Over 85% of parents who try a class continue with a monthly plan.
              </p>
              <ul style={{ color: "rgba(255,255,255,.8)", fontSize: ".9rem", lineHeight: 2, paddingLeft: 20 }}>
                <li>✓ Ages 4–12 welcome</li>
                <li>✓ Male or female tutor available</li>
                <li>✓ UK, US, Canada, Australia timezones</li>
                <li>✓ Sibling family discounts up to 20%</li>
                <li>✓ Weekly parent progress reports</li>
                <li>✓ Cancel anytime — no contracts</li>
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
