import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Faisal Tariq — Founder & CEO of NoorPath Academy",
  description: "Learn about Faisal Tariq, Founder & CEO of NoorPath Academy — software engineer and Islamic education entrepreneur building accessible online Quran learning for families worldwide.",
  alternates: { canonical: "https://www.noorpath.online/founder" },
  openGraph: {
    title: "Faisal Tariq — Founder & CEO of NoorPath Academy",
    description: "Software engineer and Islamic education entrepreneur building accessible Quran education for families in 40+ countries.",
    url: "https://www.noorpath.online/founder",
    images: [{ url: "/assets/faisal-tariq-founder.png", width: 500, height: 500, alt: "Faisal Tariq — Founder & CEO, NoorPath Academy" }],
  },
  twitter: {
    card: "summary",
    title: "Faisal Tariq — Founder & CEO | NoorPath Academy",
    description: "Software engineer building accessible Quran education for families worldwide.",
    images: ["/assets/faisal-tariq-founder.png"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  mainEntity: {
    "@type": "Person",
    name: "Faisal Tariq",
    jobTitle: "Founder & CEO",
    worksFor: { "@type": "Organization", name: "NoorPath Academy", url: "https://www.noorpath.online" },
    description: "Software Engineer and Founder of NoorPath Academy — dedicated to making quality Quran education accessible to every Muslim family worldwide.",
    url: "https://www.noorpath.online/founder",
  },
};

export default function FounderPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="page-hero">
        <div className="max-w-[1200px] mx-auto px-4 page-hero-content">
          <nav aria-label="Breadcrumb" style={{ marginBottom: 16 }}>
            <Link href="/" style={{ color: "var(--gold-lt)", fontSize: ".85rem" }}>Home</Link>
            <span style={{ color: "rgba(255,255,255,.4)", margin: "0 8px" }}>›</span>
            <span style={{ color: "rgba(255,255,255,.6)", fontSize: ".85rem" }}>Founder</span>
          </nav>
          <h1>Meet Our Founder & CEO</h1>
          <p>The vision and values behind NoorPath Academy — built with passion for Islamic education and modern technology.</p>
        </div>
      </div>

      <section>
        <div className="max-w-[900px] mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
            {/* Profile */}
            <div style={{ textAlign: "center" }}>
              <div style={{ width: 180, height: 180, borderRadius: "50%", overflow: "hidden", margin: "0 auto 20px", border: "4px solid var(--gold)", background: "var(--ivory)" }}>
                <Image
                  src="/assets/faisal-tariq-founder.png"
                  alt="Faisal Tariq — Founder & CEO of NoorPath Academy"
                  width={180}
                  height={180}
                  style={{ objectFit: "cover", width: "100%", height: "100%" }}
                />
              </div>
              <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: "1.4rem", color: "var(--charcoal)", marginBottom: 4 }}>Faisal Tariq</h2>
              <div style={{ color: "var(--emerald)", fontWeight: 600, marginBottom: 16 }}>Founder & CEO</div>
              <Link href="/online-quran-classes#cta" className="btn-primary-np" style={{ fontSize: ".85rem" }}>Book Free Trial →</Link>
            </div>

            {/* Bio */}
            <div style={{ gridColumn: "span 2" }}>
              <div className="content-card">
                <h3 style={{ fontFamily: "'Playfair Display',serif", fontSize: "1.2rem", color: "var(--charcoal)", marginBottom: 16 }}>The Story Behind NoorPath</h3>
                <p style={{ color: "var(--muted)", lineHeight: 1.8, marginBottom: 16 }}>
                  Faisal Tariq is a software engineer and Islamic education entrepreneur who founded NoorPath Academy with a clear mission: to make high-quality Quran education accessible to every Muslim family in the world, regardless of their location.
                </p>
                <p style={{ color: "var(--muted)", lineHeight: 1.8, marginBottom: 16 }}>
                  With a background in software engineering, Faisal combined his technical expertise with a deep passion for Islamic education to build a platform that serves families in over 40 countries — from the USA and UK to Canada, Australia, and beyond.
                </p>
                <p style={{ color: "var(--muted)", lineHeight: 1.8, marginBottom: 24 }}>
                  NoorPath Academy was founded in 2018 and has since grown to serve 12,000+ students with 250+ certified tutors, offering everything from Noorani Qaida for 4-year-olds to advanced Hifz programs for adults.
                </p>

                <h3 style={{ fontFamily: "'Playfair Display',serif", fontSize: "1.1rem", color: "var(--charcoal)", marginBottom: 12 }}>Core Mission</h3>
                <div style={{ background: "rgba(10,110,79,.06)", border: "1px solid rgba(10,110,79,.15)", borderRadius: 12, padding: 20 }}>
                  <p style={{ color: "var(--emerald)", fontStyle: "italic", margin: 0, lineHeight: 1.75, fontFamily: "'Playfair Display',serif", fontSize: "1.05rem" }}>
                    &ldquo;Every Muslim child deserves access to quality Quran education. Technology gives us the power to deliver that — wherever they are in the world.&rdquo;
                  </p>
                  <div style={{ textAlign: "right", marginTop: 10, color: "var(--muted)", fontSize: ".85rem" }}>— Faisal Tariq</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
