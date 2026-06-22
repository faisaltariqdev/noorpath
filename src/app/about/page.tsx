import type { Metadata } from "next";
import Link from "next/link";
import { Award, Users, Globe, Heart } from "lucide-react";

export const metadata: Metadata = {
  title: "About NoorPath Academy — Online Quran Education for Families",
  description: "Learn about NoorPath Academy — our mission, team of certified tutors, and commitment to making quality Quran education accessible to every Muslim family worldwide.",
  alternates: { canonical: "https://www.noorpath.online/about" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  name: "About NoorPath Academy",
  url: "https://www.noorpath.online/about",
  mainEntity: {
    "@type": "EducationalOrganization",
    name: "NoorPath Academy",
    foundingDate: "2018",
    description: "NoorPath Academy is a premier online Quran academy offering 1-on-1 live classes for kids, adults, and families worldwide.",
    numberOfEmployees: { "@type": "QuantitativeValue", value: "250" },
  },
};

const stats = [
  { icon: <Users size={28} />, num: "12,000+", label: "Students Served" },
  { icon: <Award size={28} />, num: "250+", label: "Certified Tutors" },
  { icon: <Globe size={28} />, num: "40+", label: "Countries" },
  { icon: <Heart size={28} />, num: "4.9/5", label: "Parent Rating" },
];

export default function AboutPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="page-hero">
        <div className="max-w-[1200px] mx-auto px-4 page-hero-content">
          <nav aria-label="Breadcrumb" style={{ marginBottom: 16 }}>
            <Link href="/" style={{ color: "var(--gold-lt)", fontSize: ".85rem" }}>Home</Link>
            <span style={{ color: "rgba(255,255,255,.4)", margin: "0 8px" }}>›</span>
            <span style={{ color: "rgba(255,255,255,.6)", fontSize: ".85rem" }}>About Us</span>
          </nav>
          <h1>About NoorPath Academy</h1>
          <p>Illuminating hearts through the teachings of the Holy Quran — since 2018, for families in 40+ countries.</p>
        </div>
      </div>

      {/* Stats */}
      <section style={{ background: "var(--ivory)", padding: "48px 0" }}>
        <div className="max-w-[1200px] mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {stats.map((s) => (
              <div key={s.label}>
                <div style={{ color: "var(--emerald)", marginBottom: 8, display: "flex", justifyContent: "center" }}>{s.icon}</div>
                <div style={{ fontFamily: "'Playfair Display',serif", fontSize: "2rem", fontWeight: 700, color: "var(--charcoal)" }}>{s.num}</div>
                <div style={{ color: "var(--muted)", fontSize: ".85rem", fontWeight: 600 }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission */}
      <section>
        <div className="max-w-[800px] mx-auto px-4">
          <div style={{ textAlign: "center", marginBottom: 40 }}>
            <span className="section-eyebrow">🕌 Our Mission</span>
            <h2 className="section-title">Making Quality Quran Education <em className="accent">Accessible to Every Family</em></h2>
          </div>

          <div className="content-card" style={{ marginBottom: 24 }}>
            <h3 style={{ fontFamily: "'Playfair Display',serif", fontSize: "1.15rem", color: "var(--charcoal)", marginBottom: 14 }}>Who We Are</h3>
            <p style={{ color: "var(--muted)", lineHeight: 1.8, marginBottom: 16 }}>
              NoorPath Academy is a founder-led online Quran academy established in 2018 with one goal: to give every Muslim family access to high-quality, personalised Quran and Islamic education — regardless of their location.
            </p>
            <p style={{ color: "var(--muted)", lineHeight: 1.8 }}>
              We serve families in over 40 countries, with 250+ certified tutors holding Ijazah or Al-Azhar university qualifications. Our curriculum spans Noorani Qaida for 4-year-olds to advanced Hifz and Ijazah programs for adults.
            </p>
          </div>

          <div className="content-card" style={{ marginBottom: 24 }}>
            <h3 style={{ fontFamily: "'Playfair Display',serif", fontSize: "1.15rem", color: "var(--charcoal)", marginBottom: 14 }}>Our Values</h3>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 14 }}>
              {[
                ["🌿", "Quality Teaching", "Every tutor is rigorously vetted — Ijazah-certified with verified backgrounds and regular performance reviews."],
                ["👨‍👩‍👧", "Family First", "We design our scheduling, pricing, and communication to support parents — not just students."],
                ["🌍", "Accessibility", "No family should be denied Quran education because of geography or resources. We offer fair pricing and family plans."],
                ["📈", "Measurable Progress", "Weekly reports, milestone tracking, and open parent communication ensure every child moves forward."],
              ].map(([icon, title, desc]) => (
                <li key={String(title)} style={{ display: "flex", gap: 14 }}>
                  <span style={{ fontSize: "1.4rem", flexShrink: 0 }}>{icon}</span>
                  <div>
                    <strong style={{ color: "var(--charcoal)", display: "block", marginBottom: 4 }}>{title}</strong>
                    <span style={{ color: "var(--muted)", fontSize: ".88rem", lineHeight: 1.6 }}>{desc}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div style={{ textAlign: "center", marginTop: 36 }}>
            <Link href="/online-quran-classes#cta" className="btn-primary-np" style={{ marginRight: 12 }}>Book Free Trial →</Link>
            <Link href="/founder" className="btn-outline-np">Meet the Founder</Link>
          </div>
        </div>
      </section>
    </>
  );
}
