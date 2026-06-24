import type { Metadata } from "next";
import Link from "next/link";
import CTAForm from "@/components/CTAForm";
import { ORGANIZATION_REF } from "@/lib/organizationSchema";
import { CheckCircle, Shield, Award, Users } from "lucide-react";

export const metadata: Metadata = {
  title: "Female Quran Teacher Online — Certified Hafiza Tutors for Sisters & Kids",
  description: "Find a certified female Quran teacher online for sisters, daughters and kids. Hafiza tutors, safe 1-on-1 Zoom classes and free trial.",
  keywords: [
    "female quran teacher online","female quran tutor","online quran teacher for sisters",
    "hafiza tutor online","female quran classes","quran classes for girls","online quran for women",
  ],
  alternates: { canonical: "https://www.noorpath.online/female-quran-teacher-online" },
  openGraph: {
    title: "Female Quran Teacher Online — Certified Hafiza Tutors | NoorPath Academy",
    description: "Certified female Quran teachers for sisters, daughters & female learners worldwide. Safe, comfortable 1-on-1 Quran classes online.",
    url: "https://www.noorpath.online/female-quran-teacher-online",
    images: [{ url: "/og-image.svg", width: 1200, height: 630, alt: "Female Quran Teacher Online — NoorPath Academy" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Female Quran Teacher Online | NoorPath Academy",
    description: "Certified Hafiza tutors for sisters & daughters. Safe 1-on-1 Quran classes online.",
    images: ["/og-image.svg"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Female Quran Teacher Online",
  description: "Certified female Quran tutors (Hafiza) for sisters, daughters, and female learners worldwide. Safe 1-on-1 online Quran classes.",
  provider: ORGANIZATION_REF,
  serviceType: "Online Quran Education",
  audience: { "@type": "Audience", audienceType: "Female Muslim learners of all ages" },
  url: "https://www.noorpath.online/female-quran-teacher-online",
};

const features = [
  { icon: <Shield size={20} />, title: "Safe & Comfortable", desc: "All-female sessions — sisters and daughters can learn Quran in a completely comfortable environment." },
  { icon: <Award size={20} />, title: "Hafiza-Certified Tutors", desc: "All female teachers hold Hifz certification (Hafiza) and many hold Ijazah or Al-Azhar qualifications." },
  { icon: <Users size={20} />, title: "All Ages Welcome", desc: "Female tutors for girls from age 4, teenagers, adult sisters, mothers, and senior women." },
  { icon: <CheckCircle size={20} />, title: "All Courses Available", desc: "Noorani Qaida, Tajweed, Hifz, Arabic, Islamic Studies, and daily duas — all with female teachers." },
];

export default function FemaleQuranTeacherPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="page-hero">
        <div className="max-w-[1200px] mx-auto px-4 page-hero-content">
          <nav aria-label="Breadcrumb" style={{ marginBottom: 16 }}>
            <Link href="/" style={{ color: "var(--gold-lt)", fontSize: ".85rem" }}>Home</Link>
            <span style={{ color: "rgba(255,255,255,.4)", margin: "0 8px" }}>›</span>
            <span style={{ color: "rgba(255,255,255,.6)", fontSize: ".85rem" }}>Female Quran Teacher Online</span>
          </nav>
          <h1>Female Quran Teacher Online</h1>
          <p>Certified Hafiza tutors for sisters, daughters, and female learners worldwide. Safe, comfortable, 1-on-1 Quran classes via Zoom — for all ages and all levels.</p>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 24 }}>
            <Link href="#cta" className="btn-primary-np">Book Free Trial →</Link>
            <Link href="/courses" className="btn-outline-np" style={{ color: "#fff", borderColor: "rgba(255,255,255,.5)" }}>View All Courses</Link>
          </div>
        </div>
      </div>

      <section>
        <div className="max-w-[1200px] mx-auto px-4">
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <span className="section-eyebrow">👩‍🏫 Female Tutors</span>
            <h2 className="section-title">Why Families Choose Our <em className="accent">Female Teachers</em></h2>
            <p className="section-desc center">
              At NoorPath Academy, we understand the importance of modesty and comfort in Islamic learning. Our dedicated team of certified female tutors (Hafiza) ensures sisters and daughters can learn in a safe, encouraging environment.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            {features.map((f) => (
              <div key={f.title} className="content-card" style={{ display: "flex", gap: 16 }}>
                <div style={{ color: "var(--emerald)", flexShrink: 0, marginTop: 2 }}>{f.icon}</div>
                <div>
                  <h3 style={{ fontFamily: "var(--font-playfair), serif", fontSize: "1rem", fontWeight: 700, marginBottom: 6 }}>{f.title}</h3>
                  <p style={{ color: "var(--muted)", fontSize: ".87rem", lineHeight: 1.6, margin: 0 }}>{f.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div style={{ background: "var(--ivory)", border: "1px solid var(--border)", borderRadius: 20, padding: "32px 36px" }}>
            <h2 style={{ fontFamily: "var(--font-playfair), serif", fontSize: "1.5rem", marginBottom: 12 }}>Courses Available with Female Teachers</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {["Noorani Qaida","Quran Recitation","Tajweed Rules","Hifz Program","Arabic Language","Islamic Studies","Daily Duas for Kids","Quran for Adults","Tafseer Basics"].map((c) => (
                <div key={c} style={{ display: "flex", alignItems: "center", gap: 8, fontSize: ".9rem", color: "var(--slate)" }}>
                  <CheckCircle size={14} style={{ color: "var(--emerald)", flexShrink: 0 }} /> {c}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section" id="cta">
        <div className="max-w-[1200px] mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 style={{ fontFamily: "var(--font-playfair), serif", color: "#fff", fontSize: "2rem", marginBottom: 16 }}>
                Book a Free Trial with a<br /><em style={{ color: "var(--gold-lt)" }}>Certified Female Tutor</em>
              </h2>
              <p style={{ color: "rgba(255,255,255,.75)", marginBottom: 20 }}>
                No credit card required. Get a free 30-minute class with a certified Hafiza tutor — and see if it&apos;s the right fit for your daughter or yourself.
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
