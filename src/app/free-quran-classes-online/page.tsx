import type { Metadata } from "next";
import Link from "next/link";
import { ORGANIZATION_REF } from "@/lib/organizationSchema";
import { CheckCircle, Gift, Star, Users, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Free Quran Classes Online — Trial for Kids & Adults | NoorPath Academy",
  description: "Book a free online Quran class with a certified teacher. 30-minute live 1-on-1 trial for kids, adults and families. No credit card.",
  keywords: ["free quran classes online", "free quran lessons online", "free online quran class", "free quran trial", "free quran learning", "free quran class for kids", "free quran course", "free islamic classes online", "free quran teacher online", "free quran education"],
  alternates: { canonical: "https://www.noorpath.online/free-quran-classes-online" },
  openGraph: {
    title: "Free Quran Classes Online — Free Trial | NoorPath Academy",
    description: "Book your FREE 30-minute online Quran class today. Certified teachers, no credit card needed. For kids, adults and families.",
    url: "https://www.noorpath.online/free-quran-classes-online",
    images: [{ url: "/og-image.svg", width: 1200, height: 630, alt: "Free Quran Classes Online — NoorPath Academy" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Quran Classes Online | NoorPath Academy",
    description: "Free 30-min trial class with certified Quran teacher. No credit card.",
    images: ["/og-image.svg"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      name: "Free Online Quran Classes — Trial",
      description: "NoorPath Academy offers a free 30-minute online Quran class for new students. Certified tutors, 1-on-1 live sessions, no credit card required.",
      provider: ORGANIZATION_REF,
      serviceType: "Free Online Quran Trial Class",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
        name: "Free 30-Minute Trial Quran Class",
        description: "No credit card required. Book your free trial class today.",
        availability: "https://schema.org/InStock",
      },
      url: "https://www.noorpath.online/free-quran-classes-online",
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Is the free Quran class really free?",
          acceptedAnswer: { "@type": "Answer", text: "Yes — completely free. NoorPath Academy offers a free 30-minute live trial class with a certified Quran teacher. No credit card is required, no automatic charges, and no hidden fees. You only pay if you choose to continue after the trial." },
        },
        {
          "@type": "Question",
          name: "What happens in the free trial Quran class?",
          acceptedAnswer: { "@type": "Answer", text: "Your assigned certified teacher will assess your current level, understand your learning goals, and demonstrate our teaching methodology. You'll get a taste of how our classes work and can ask any questions. At the end, you'll receive a personalised learning plan." },
        },
        {
          "@type": "Question",
          name: "Who can join the free online Quran class?",
          acceptedAnswer: { "@type": "Answer", text: "The free trial is available for anyone — children (age 4+), adults, teenagers, and seniors. We have specialist teachers for every age group and level, from complete beginners (no Arabic knowledge) to advanced students." },
        },
        {
          "@type": "Question",
          name: "How do I book a free online Quran class?",
          acceptedAnswer: { "@type": "Answer", text: "Click 'Book Free Trial Class' on this page, fill in the short form with your name, WhatsApp number, and preferred timing. Our team will confirm your slot and send you the Zoom link within a few hours." },
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.noorpath.online" },
        { "@type": "ListItem", position: 2, name: "Free Quran Classes Online", item: "https://www.noorpath.online/free-quran-classes-online" },
      ],
    },
  ],
};

export default function FreeQuranClassesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero */}
      <div className="page-hero" style={{ paddingBottom: 100 }}>
        <div className="max-w-[1200px] mx-auto px-4 page-hero-content">
          <nav aria-label="Breadcrumb" style={{ marginBottom: 16 }}>
            <Link href="/" style={{ color: "var(--gold-lt)", fontSize: ".85rem" }}>Home</Link>
            <span style={{ color: "rgba(255,255,255,.4)", margin: "0 8px" }}>›</span>
            <span style={{ color: "rgba(255,255,255,.6)", fontSize: ".85rem" }}>Free Quran Classes Online</span>
          </nav>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(232,184,75,.15)", border: "1px solid rgba(232,184,75,.3)", borderRadius: 50, padding: "6px 18px", marginBottom: 16 }}>
            <Gift size={16} style={{ color: "var(--gold-lt)" }} />
            <span style={{ color: "var(--gold-lt)", fontSize: ".82rem", fontWeight: 700 }}>100% FREE — No credit card required</span>
          </div>
          <h1>Free Online Quran Classes<br /><em style={{ color: "var(--gold-lt)" }}>30-Minute Live Trial</em></h1>
          <p style={{ maxWidth: 580 }}>
            Experience a live 1-on-1 Quran class with a certified teacher — completely free. For children, adults, and families. All levels, all ages, all timezones.
          </p>
          <div style={{ display: "flex", gap: 12, marginTop: 28, flexWrap: "wrap" }}>
            <Link href="/online-quran-classes#cta" style={{ background: "var(--gold)", color: "var(--charcoal)", padding: "14px 32px", borderRadius: 12, fontWeight: 700, textDecoration: "none", fontSize: "1rem" }}>
              🎁 Book FREE Trial Class →
            </Link>
          </div>
          <div style={{ display: "flex", gap: 24, marginTop: 28, flexWrap: "wrap" }}>
            {["✅ Zero cost", "✅ No credit card", "✅ Live 1-on-1 class", "✅ Certified teacher", "✅ Any timezone"].map((t) => (
              <span key={t} style={{ color: "rgba(255,255,255,.8)", fontSize: ".83rem" }}>{t}</span>
            ))}
          </div>
        </div>
      </div>

      {/* What's included in free trial */}
      <section style={{ padding: "72px 0", background: "var(--ivory)" }}>
        <div className="max-w-[1200px] mx-auto px-4">
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: "clamp(1.8rem,3.5vw,2.3rem)", color: "var(--charcoal)" }}>
              What&apos;s Included in Your Free Class?
            </h2>
            <p style={{ color: "var(--muted)", marginTop: 10 }}>Your free trial class is a real, live, 1-on-1 session — not a recording.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { emoji: "🎯", title: "Level Assessment", desc: "Your teacher will gently assess your current level (Qaida, recitation, or Tajweed) to understand exactly where to start." },
              { emoji: "👨‍🏫", title: "Live 1-on-1 Teaching", desc: "30 minutes of live instruction tailored to your age, goals, and current ability — not a generic recording." },
              { emoji: "📋", title: "Personalised Learning Plan", desc: "At the end of the class, you'll receive a custom learning roadmap showing how long it will take to reach your goals." },
              { emoji: "📞", title: "Q&A Session", desc: "Ask the teacher any questions — about the curriculum, schedule, family plans, or your child's specific needs." },
              { emoji: "🌙", title: "Arabic Introduction", desc: "If you're a complete beginner, your teacher will introduce the Arabic alphabet and pronunciation in a fun, easy way." },
              { emoji: "📊", title: "Progress Feedback", desc: "You'll get honest feedback about what areas to focus on and a realistic timeline to achieve your Quran learning goals." },
            ].map((item) => (
              <div key={item.title} className="content-card">
                <div style={{ fontSize: "2rem", marginBottom: 12 }}>{item.emoji}</div>
                <h3 style={{ fontFamily: "'Playfair Display',serif", fontSize: "1.05rem", color: "var(--charcoal)", marginBottom: 8 }}>{item.title}</h3>
                <p style={{ color: "var(--muted)", fontSize: ".87rem", lineHeight: 1.7 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who can join */}
      <section style={{ padding: "72px 0" }}>
        <div className="max-w-[1200px] mx-auto px-4">
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: "clamp(1.8rem,3.5vw,2.3rem)", color: "var(--charcoal)" }}>
              Who Can Join the Free Trial?
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { emoji: "👶", label: "Young Children", desc: "Ages 4–8. Fun, engaging lessons with child-specialist teachers. Arabic alphabet + duas + Islamic values." },
              { emoji: "🧒", label: "School-Age Kids", desc: "Ages 8–15. Noorani Qaida, Quran recitation, Tajweed basics, and daily duas." },
              { emoji: "🧑", label: "Teens & Adults", desc: "Any level — from complete beginner to wanting to perfect Tajweed or start Hifz." },
              { emoji: "👴", label: "Seniors", desc: "It's never too late. Patient, specialist teachers who understand adult learning methods." },
            ].map((item) => (
              <div key={item.label} className="content-card" style={{ textAlign: "center" }}>
                <div style={{ fontSize: "2.5rem", marginBottom: 12 }}>{item.emoji}</div>
                <h3 style={{ fontFamily: "'Playfair Display',serif", fontSize: "1.05rem", color: "var(--charcoal)", marginBottom: 8 }}>{item.label}</h3>
                <p style={{ color: "var(--muted)", fontSize: ".85rem", lineHeight: 1.65 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social proof */}
      <section style={{ padding: "72px 0", background: "var(--ivory)" }}>
        <div className="max-w-[1200px] mx-auto px-4">
          <div style={{ textAlign: "center", marginBottom: 40 }}>
            <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: "2rem", color: "var(--charcoal)" }}>
              What Parents Say After Their Free Trial
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { name: "Aisha Rahman", country: "🇬🇧 UK", text: "I was hesitant at first but the free trial was genuinely impressive. The teacher was so patient and my daughter connected with her immediately. We signed up that same day.", stars: 5 },
              { name: "Omar Shaikh", country: "🇺🇸 USA", text: "No pressure, no credit card, no sales pitch. Just a real class with a real teacher. My son went from zero Arabic to reading the Quran in 4 months.", stars: 5 },
              { name: "Nadia Hassan", country: "🇨🇦 Canada", text: "I tried 3 other online academies before NoorPath. The free trial was the most professional experience and the teaching method is clearly superior.", stars: 5 },
            ].map((t) => (
              <div key={t.name} className="content-card">
                <div style={{ color: "var(--gold)", fontSize: "1.1rem", marginBottom: 12 }}>{"★".repeat(t.stars)}</div>
                <p style={{ color: "var(--slate)", lineHeight: 1.7, fontSize: ".9rem", marginBottom: 16, fontStyle: "italic" }}>&quot;{t.text}&quot;</p>
                <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <div style={{ width: 36, height: 36, background: "linear-gradient(135deg, var(--emerald), var(--emerald-mid))", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontWeight: 700, fontSize: ".9rem" }}>
                    {t.name[0]}
                  </div>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: ".88rem", color: "var(--charcoal)" }}>{t.name}</div>
                    <div style={{ fontSize: ".78rem", color: "var(--muted)" }}>{t.country}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: 32 }}>
            <div style={{ fontSize: "1.1rem", color: "var(--charcoal)", fontWeight: 700 }}>⭐⭐⭐⭐⭐ 4.9/5</div>
            <div style={{ color: "var(--muted)", fontSize: ".85rem", marginTop: 4 }}>Average rating from 2,400+ verified parent reviews</div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ padding: "72px 0" }}>
        <div className="max-w-[760px] mx-auto px-4">
          <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: "2rem", color: "var(--charcoal)", textAlign: "center", marginBottom: 36 }}>
            Common Questions About the Free Trial
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            {[
              { q: "Is the free Quran class really free?", a: "Yes — 100% free. No credit card, no automatic subscription, no hidden charges. You only pay if you choose to enrol after the trial." },
              { q: "What happens in the free trial class?", a: "Your certified teacher will assess your level, teach a real 30-minute lesson, and give you a personalised learning plan with realistic goals and timelines." },
              { q: "How do I book the free class?", a: "Click 'Book Free Trial Class,' fill in your name, WhatsApp number, and preferred timing. Our team will confirm your slot (usually within 2–3 hours) and send the Zoom link." },
              { q: "Can my child join the free class?", a: "Yes! The free trial is available for all ages — children from age 4, teenagers, adults, and seniors. We have specialist teachers for every age group." },
              { q: "Do I need any equipment?", a: "Just a smartphone, tablet, or computer with Zoom or Skype installed. No special equipment needed. Your teacher will guide you through everything." },
            ].map((item) => (
              <div key={item.q} style={{ background: "var(--ivory)", border: "1px solid var(--border)", borderRadius: 12, padding: "18px 22px" }}>
                <h3 style={{ fontFamily: "'Playfair Display',serif", fontWeight: 700, fontSize: ".95rem", color: "var(--charcoal)", marginBottom: 8 }}>{item.q}</h3>
                <p style={{ color: "var(--muted)", fontSize: ".88rem", lineHeight: 1.7, margin: 0 }}>{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="max-w-[1200px] mx-auto px-4 text-center">
          <h2 style={{ fontFamily: "'Playfair Display',serif", color: "#fff", fontSize: "clamp(1.8rem,3vw,2.4rem)", marginBottom: 16 }}>
            Book Your FREE Quran Class Right Now
          </h2>
          <p style={{ color: "rgba(255,255,255,.75)", marginBottom: 8, maxWidth: 500, margin: "0 auto 8px" }}>
            30 minutes. Live. 1-on-1. With a certified Quran teacher. Completely free.
          </p>
          <p style={{ color: "rgba(255,255,255,.5)", marginBottom: 28, fontSize: ".85rem" }}>No credit card · No commitment · Cancel anytime</p>
          <Link href="/online-quran-classes#cta" className="btn-primary-np" style={{ fontSize: "1.05rem", padding: "16px 36px" }}>
            🎁 Book FREE Trial Class →
          </Link>
        </div>
      </section>
    </>
  );
}
