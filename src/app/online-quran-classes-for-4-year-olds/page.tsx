import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle } from "lucide-react";
import CTAForm from "@/components/CTAForm";
import FaqJsonLd from "@/components/FaqJsonLd";
import TrustPolicyStrip from "@/components/TrustPolicyStrip";
import { ORGANIZATION_REF } from "@/lib/organizationSchema";
import { serializeJsonLd } from "@/lib/jsonLd";
import {
  BASE_URL,
  PRICING_PLANS,
  TRIAL,
  TRIAL_OFFER,
  TUTOR_FACTS,
} from "@/lib/academyFacts";

export const revalidate = false;

const PATH = "/online-quran-classes-for-4-year-olds";
const URL = `${BASE_URL}${PATH}`;
const TITLE = "Online Quran Classes for 4 & 5 Year Olds: 1-on-1 | NoorPath";
const DESCRIPTION = `Gentle live 1-on-1 Quran lessons for 4 and 5 year olds: Arabic letters, sounds and short duas, with a patient tutor. From $${PRICING_PLANS[0].monthlyPriceUsd}/month. ${TRIAL_OFFER}, no card.`;

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: URL },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: URL,
    type: "website",
    images: [{ url: "/marketing/kids-online-quran-class.jpg", width: 1200, height: 800, alt: "A young child taking a live one-to-one online Quran lesson at home" }],
  },
  twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION, images: ["/marketing/kids-online-quran-class.jpg"] },
};

const faqs = [
  {
    q: "What age can a child start learning the Quran online?",
    a: "NoorPath's live one-to-one lessons start from age 4. At 4 and 5, lessons focus on gentle Arabic letter recognition, sounds and short oral supplications, using interactive visual aids suited to young attention spans.",
  },
  {
    q: "Is my 3-year-old too young for a live Quran class?",
    a: "NoorPath's live lessons start at age 4. For a 3-year-old, many parents begin with short, playful practice at home, such as the free interactive Noorani Qaida games, and book a live trial once the child is 4.",
  },
  {
    q: "How long is a lesson for a young child?",
    a: `Trial lessons are ${TRIAL.durationMinutes} minutes. The Starter plan is one ${PRICING_PLANS[0].sessionMinutes}-minute live lesson a week, which many families choose for younger children. The tutor adapts the pace to your child on the day.`,
  },
  {
    q: "Will my child need to read already?",
    a: "No. A 4 or 5 year old does not need to read Arabic or English to begin. The first lessons build letter recognition and sounds from the start, with the tutor leading.",
  },
  {
    q: "Does a parent need to sit in the lesson?",
    a: "Many parents sit nearby for the first few lessons so the child feels settled. You can see how the tutor teaches and then step back as your child grows comfortable.",
  },
  {
    q: "Can my child have a female tutor?",
    a: `Yes. ${TUTOR_FACTS.femaleTutors} ${TUTOR_FACTS.credentials}`,
  },
  {
    q: "What if my child will not sit still or loses interest?",
    a: `That is common at this age. Tell NoorPath about it when you book; the tutor keeps activities short and varied. ${TUTOR_FACTS.rematch}`,
  },
  {
    q: "How much do lessons cost?",
    a: `Plans start at $${PRICING_PLANS[0].monthlyPriceUsd} a month for one live lesson a week, with ${TRIAL_OFFER} first and no credit card. Sibling discounts are available.`,
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${URL}#webpage`,
      url: URL,
      name: "Online Quran classes for 4 and 5 year olds",
      description: DESCRIPTION,
      isPartOf: { "@type": "WebSite", "@id": `${BASE_URL}/#website`, url: BASE_URL },
      about: { "@id": `${URL}#service` },
      speakable: { "@type": "SpeakableSpecification", cssSelector: [".page-hero-content h1", ".np-quick-answer"] },
    },
    {
      "@type": "Service",
      "@id": `${URL}#service`,
      name: "Online Quran classes for 4 and 5 year olds",
      provider: ORGANIZATION_REF,
      serviceType: "Online Quran Education",
      areaServed: "Worldwide",
      audience: { "@type": "PeopleAudience", suggestedMinAge: 4, suggestedMaxAge: 5 },
      offers: {
        "@type": "Offer",
        price: String(PRICING_PLANS[0].monthlyPriceUsd),
        priceCurrency: "USD",
        url: URL,
      },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
        { "@type": "ListItem", position: 2, name: "Online Quran classes for kids", item: `${BASE_URL}/online-quran-classes-for-kids` },
        { "@type": "ListItem", position: 3, name: "4 and 5 year olds", item: URL },
      ],
    },
  ],
};

const h2: React.CSSProperties = { fontFamily: "'Playfair Display',serif", fontSize: "1.6rem", color: "var(--charcoal)", marginBottom: 14 };
const body: React.CSSProperties = { color: "var(--slate)", lineHeight: 1.75, fontSize: ".96rem" };
const link: React.CSSProperties = { color: "var(--emerald)", fontWeight: 600 };

const learns = [
  { title: "Arabic letters by sight and sound", text: "Recognising each letter and saying its sound clearly, one small group at a time, as in the first pages of Noorani Qaida." },
  { title: "Short oral duas", text: "Brief, everyday supplications learnt by listening and repeating, so the child hears the words correctly from the start." },
  { title: "Listening and repeating", text: "The tutor says it, your child says it back, and the tutor corrects gently. This is the core of early recitation." },
  { title: "Good habits for learning", text: "Sitting for a short lesson, taking turns, and feeling proud of small wins, so the Quran is associated with calm and encouragement." },
];

const steps = [
  { n: "1", title: "Request the free trial", text: `Tell us your child's age, any experience, and the times that suit you. No card is needed for ${TRIAL_OFFER}.` },
  { n: "2", title: "Meet a matched tutor", text: "NoorPath confirms a tutor and schedule. Female tutors are available. Tutor availability is confirmed after your request." },
  { n: "3", title: "A short, playful first lesson", text: "The tutor builds rapport first and uses visual aids and simple repetition, adjusting to your child's mood on the day." },
  { n: "4", title: "Decide with no pressure", text: "After the trial you choose a plan, or stop. Nothing is charged before you agree." },
];

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeJsonLd(jsonLd) }} />

      <div className="page-hero">
        <div className="max-w-[1200px] mx-auto px-4 page-hero-content">
          <nav aria-label="Breadcrumb" style={{ marginBottom: 16 }}>
            <Link href="/" style={{ color: "var(--gold-lt)", fontSize: ".85rem" }}>Home</Link>
            <span style={{ color: "rgba(255,255,255,.4)", margin: "0 8px" }}>›</span>
            <Link href="/online-quran-classes-for-kids" style={{ color: "var(--gold-lt)", fontSize: ".85rem" }}>Kids</Link>
            <span style={{ color: "rgba(255,255,255,.4)", margin: "0 8px" }}>›</span>
            <span style={{ color: "rgba(255,255,255,.6)", fontSize: ".85rem" }}>4 &amp; 5 year olds</span>
          </nav>
          <h1>Online Quran Classes for 4 and 5 Year Olds</h1>
          <p>Gentle, live one-to-one lessons for your youngest learner: Arabic letters, sounds and short duas, with a patient tutor and no pressure.</p>
          <div style={{ marginTop: 22 }}>
            <a href="#book-trial" style={{ display: "inline-block", background: "var(--gold)", color: "var(--charcoal)", fontWeight: 700, padding: "13px 26px", borderRadius: 12, textDecoration: "none" }}>
              Start {TRIAL.classes} free trial sessions →
            </a>
          </div>
        </div>
      </div>

      <section>
        <div className="max-w-[1200px] mx-auto px-4">
          <div
            className="np-quick-answer max-w-[1000px] mx-auto mb-10 p-5 rounded-2xl"
            style={{ background: "rgba(10,110,79,0.05)", borderLeft: "4px solid var(--emerald)", fontSize: ".95rem", lineHeight: 1.7, color: "var(--charcoal)" }}
          >
            <strong style={{ color: "var(--emerald)" }}>Quick answer: </strong>
            Yes, a 4 or 5 year old can start learning the Quran online. NoorPath&apos;s live one-to-one lessons start from age 4 and begin with Arabic letters, sounds and short duas, taught gently with visual aids. Start with {TRIAL_OFFER}, no credit card; plans then start at ${PRICING_PLANS[0].monthlyPriceUsd} a month.
          </div>

          <div className="max-w-[860px] mx-auto" style={{ marginBottom: 48 }}>
            <h2 style={h2}>What a 4 or 5 year old actually learns</h2>
            <p style={{ ...body, marginBottom: 18 }}>
              The goal at this age is not speed. It is a calm, happy first relationship with the Quran and the right foundation for reading later. Lessons are short and the tutor leads every step.
            </p>
            <div style={{ display: "grid", gap: 14 }}>
              {learns.map((l) => (
                <div key={l.title} style={{ background: "#fff", border: "1px solid var(--border)", borderRadius: 14, padding: "18px 20px", display: "flex", gap: 12 }}>
                  <CheckCircle size={18} style={{ color: "var(--emerald)", flexShrink: 0, marginTop: 3 }} />
                  <div>
                    <h3 style={{ fontWeight: 700, color: "var(--charcoal)", marginBottom: 4, fontSize: "1rem" }}>{l.title}</h3>
                    <p style={{ ...body, margin: 0, fontSize: ".92rem" }}>{l.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="max-w-[860px] mx-auto" style={{ marginBottom: 48 }}>
            <h2 style={h2}>Is my child ready?</h2>
            <p style={{ ...body, marginBottom: 12 }}>There is no test. These signs usually mean your child will enjoy a first lesson:</p>
            <ul style={{ ...body, paddingLeft: 22, display: "grid", gap: 8 }}>
              <li>They can sit with you and look at a book or screen for a few minutes.</li>
              <li>They like repeating words, songs or simple rhymes.</li>
              <li>They can follow a short instruction from an adult they trust.</li>
              <li>They are curious about what you or their grandparents read.</li>
            </ul>
            <p style={{ ...body, marginTop: 14 }}>
              If your child is 3, live lessons are not available yet, but short playful practice at home helps. Try the free <Link href="/noorani-qaida/games" style={link}>Noorani Qaida games</Link> together, then book a trial at 4. For a longer read, see our guide on the <Link href="/blog/best-age-to-start-quran-learning" style={link}>best age to start Quran learning</Link>.
            </p>
          </div>

          <div className="max-w-[1000px] mx-auto" style={{ marginBottom: 48 }}>
            <h2 style={{ ...h2, textAlign: "center" }}>How the first lessons work</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5" style={{ marginTop: 20 }}>
              {steps.map((s) => (
                <div key={s.n} style={{ background: "var(--ivory)", border: "1px solid var(--border)", borderRadius: 16, padding: "20px 22px" }}>
                  <div style={{ color: "var(--emerald)", fontWeight: 800, fontSize: "1.3rem", marginBottom: 4 }}>{s.n}</div>
                  <h3 style={{ fontWeight: 700, color: "var(--charcoal)", marginBottom: 6 }}>{s.title}</h3>
                  <p style={{ ...body, margin: 0, fontSize: ".9rem" }}>{s.text}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="max-w-[860px] mx-auto" style={{ marginBottom: 48 }}>
            <h2 style={h2}>Tips for parents of young learners</h2>
            <ul style={{ ...body, paddingLeft: 22, display: "grid", gap: 8 }}>
              <li>Pick a regular time when your child is fed, rested and not about to nap.</li>
              <li>Sit nearby for the first lessons, then step back as your child settles.</li>
              <li>Praise effort, not perfection. Short, happy sessions beat long tiring ones.</li>
              <li>Practise for a few minutes a day between lessons with the <Link href="/noorani-qaida/games" style={link}>free Qaida games</Link>.</li>
              <li>Tell the tutor about attention, shyness or any needs. See <Link href="/special-needs-quran-classes" style={link}>special needs Quran classes</Link> if relevant.</li>
            </ul>
            <p style={{ ...body, marginTop: 14 }}>
              Wondering what comes next? Read <Link href="/blog/how-long-does-noorani-qaida-take" style={link}>how long Noorani Qaida takes</Link> and <Link href="/blog/when-child-ready-qaida-to-quran" style={link}>when a child is ready to move from Qaida to the Quran</Link>.
            </p>
          </div>

          <TrustPolicyStrip heading="Before you book: four straight answers" />

          <div className="max-w-[860px] mx-auto" style={{ marginBottom: 40 }}>
            <h2 style={h2}>Plans for young learners</h2>
            <p style={body}>
              Many families begin on Starter at ${PRICING_PLANS[0].monthlyPriceUsd} a month: one live {PRICING_PLANS[0].sessionMinutes}-minute lesson a week. You can change plan later. See <Link href="/pricing" style={link}>full pricing</Link>, or the main page for <Link href="/online-quran-classes-for-kids" style={link}>online Quran classes for kids</Link>, <Link href="/noorani-qaida" style={link}>Noorani Qaida</Link> and <Link href="/female-quran-teacher-online" style={link}>female Quran teachers</Link>.
            </p>
          </div>

          <FaqJsonLd faqs={faqs} pageUrl={URL} />
          <h2 style={{ ...h2, textAlign: "center", marginBottom: 24 }}>Frequently asked questions</h2>
          <div className="max-w-[760px] mx-auto" style={{ marginBottom: 48 }}>
            {faqs.map((f) => (
              <details key={f.q} style={{ borderBottom: "1px solid var(--border)", padding: "18px 0" }}>
                <summary style={{ fontWeight: 600, color: "var(--charcoal)", cursor: "pointer", fontSize: ".95rem" }}>{f.q}</summary>
                <p style={{ color: "var(--muted)", marginTop: 10, lineHeight: 1.7, fontSize: ".9rem" }}>{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-section" id="book-trial">
        <div className="max-w-[1200px] mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 style={{ fontFamily: "'Playfair Display',serif", color: "#fff", fontSize: "clamp(1.6rem, 4.5vw, 2.2rem)", marginBottom: 16 }}>
                Let your 4 or 5 year old try a lesson
              </h2>
              <p style={{ color: "rgba(255,255,255,.78)", marginBottom: 20 }}>
                Take {TRIAL_OFFER} with a patient tutor matched to your child and your time zone. No credit card.
              </p>
            </div>
            <div className="cta-form-wrap">
              <h3 style={{ fontFamily: "'Playfair Display',serif", color: "#fff", fontSize: "1.2rem", marginBottom: 20, textAlign: "center" }}>
                Start {TRIAL.classes} free trial sessions
              </h3>
              <CTAForm idPrefix="age4-final-trial" formVariant="standard" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
