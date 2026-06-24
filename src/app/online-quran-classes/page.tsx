import type { Metadata } from "next";
import Link from "next/link";
import CTAForm from "@/components/CTAForm";
import { ORGANIZATION_REF } from "@/lib/organizationSchema";
import { CheckCircle, Clock, Users, Award, Video, Shield, Lock } from "lucide-react";

export const metadata: Metadata = {
  title: "Online Quran Classes — Live 1-on-1 with Certified Tutors | Free Trial",
  description: "Live 1-on-1 online Quran classes for kids and adults: Noorani Qaida, Tajweed, Hifz and Arabic. Certified tutors, family plans, free trial.",
  alternates: { canonical: "https://www.noorpath.online/online-quran-classes" },
  openGraph: {
    title: "Online Quran Classes — Live 1-on-1 with Certified Tutors | Free Trial",
    description: "Join 12,000+ students. Live 1-on-1 Quran classes via Zoom — Qaida, Tajweed, Hifz, Arabic. Family plans. Free 30-min trial.",
    url: "https://www.noorpath.online/online-quran-classes",
    images: [{ url: "/og-image.svg", width: 1200, height: 630, alt: "Online Quran Classes — NoorPath Academy" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Online Quran Classes | Live 1-on-1 | NoorPath Academy",
    description: "Certified tutors, family plans, free 30-min trial. Qaida, Tajweed, Hifz, Arabic.",
    images: ["/og-image.svg"],
  },
};

const features = [
  { icon: <Award size={22} />, title: "Ijazah-Certified Tutors", desc: "Every tutor holds Ijazah or Al-Azhar university qualification — rigorously vetted." },
  { icon: <Users size={22} />, title: "1-on-1 Private Sessions", desc: "No group classes. Your child gets the tutor's full attention every single session." },
  { icon: <Clock size={22} />, title: "Flexible Scheduling", desc: "Book morning, evening, or weekend slots that match your timezone and lifestyle." },
  { icon: <Shield size={22} />, title: "Female Tutors Available", desc: "Certified female tutors (Hafiza) for sisters and daughters — safe and comfortable." },
  { icon: <Video size={22} />, title: "Live via Zoom / Google Meet", desc: "High-quality live video sessions with screen sharing and digital whiteboards." },
  { icon: <CheckCircle size={22} />, title: "Weekly Progress Reports", desc: "Parents receive detailed weekly reports on their child's progress and next goals." },
];

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": "https://www.noorpath.online/online-quran-classes#service",
      name: "Online Quran Classes — Live 1-on-1",
      description: "Live 1-on-1 online Quran classes with certified tutors via Zoom. Noorani Qaida, Tajweed, Hifz, Arabic, Islamic studies. Family plans. Free trial.",
      provider: ORGANIZATION_REF,
      serviceType: "Online Quran Education",
      areaServed: { "@type": "Country", name: "Worldwide" },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Online Quran Courses",
        itemListElement: [
          { "@type": "Offer", itemOffered: { "@type": "Course", name: "Noorani Qaida Online" } },
          { "@type": "Offer", itemOffered: { "@type": "Course", name: "Tajweed Classes Online" } },
          { "@type": "Offer", itemOffered: { "@type": "Course", name: "Hifz Program Online" } },
          { "@type": "Offer", itemOffered: { "@type": "Course", name: "Arabic Language Online" } },
        ],
      },
      url: "https://www.noorpath.online/online-quran-classes",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.noorpath.online" },
        { "@type": "ListItem", position: 2, name: "Online Quran Classes", item: "https://www.noorpath.online/online-quran-classes" },
      ],
    },
  ],
};

export default function OnlineQuranClassesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />

      <div className="page-hero">
        <div className="max-w-[1200px] mx-auto px-4 page-hero-content">
          <nav aria-label="Breadcrumb" style={{ marginBottom: 16 }}>
            <Link href="/" style={{ color: "var(--gold-lt)", fontSize: ".85rem" }}>Home</Link>
            <span style={{ color: "rgba(255,255,255,.4)", margin: "0 8px" }}>›</span>
            <span style={{ color: "rgba(255,255,255,.6)", fontSize: ".85rem" }}>Online Quran Classes</span>
          </nav>
          <h1>Online Quran Classes — Live 1-on-1 with Certified Tutors</h1>
          <p>Join 12,000+ students worldwide. Personalised Quran learning from Noorani Qaida to Hifz — for every age, every level, every family.</p>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 24 }}>
            <Link href="#cta" className="btn-primary-np">Book Free Trial →</Link>
            <Link href="/courses" className="btn-outline-np" style={{ color: "#fff", borderColor: "rgba(255,255,255,.5)" }}>View All Courses</Link>
          </div>
        </div>
      </div>

      {/* Features */}
      <section>
        <div className="max-w-[1200px] mx-auto px-4">
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <h2 className="section-title">Why Families Choose <em className="accent">NoorPath</em></h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f) => (
              <div key={f.title} className="content-card" style={{ display: "flex", gap: 16 }}>
                <div style={{ color: "var(--emerald)", flexShrink: 0 }}>{f.icon}</div>
                <div>
                  <h3 style={{ fontFamily: "'Playfair Display',serif", fontSize: "1rem", fontWeight: 700, marginBottom: 6 }}>{f.title}</h3>
                  <p style={{ color: "var(--muted)", fontSize: ".87rem", lineHeight: 1.6, margin: 0 }}>{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section" id="cta">
        <div className="max-w-[1200px] mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 style={{ fontFamily: "'Playfair Display',serif", color: "#fff", fontSize: "2.2rem", marginBottom: 16 }}>
                Book Your Free 30-Minute<br />
                <em style={{ color: "var(--gold-lt)" }}>Trial Class Today</em>
              </h2>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {[
                  [<CheckCircle size={18} key="1" />, "Free 30-minute trial — no credit card needed"],
                  [<Video size={18} key="2" />, "Live 1-on-1 with a certified tutor via Zoom"],
                  [<Lock size={18} key="3" />, "Your info is 100% private and secure"],
                ].map(([icon, text]) => (
                  <div key={String(text)} style={{ display: "flex", alignItems: "center", gap: 10, color: "rgba(255,255,255,.85)", fontSize: ".92rem" }}>
                    <span style={{ color: "var(--gold-lt)" }}>{icon}</span> {text}
                  </div>
                ))}
              </div>
            </div>
            <div className="cta-form-wrap">
              <h3 style={{ fontFamily: "'Playfair Display',serif", color: "#fff", fontSize: "1.25rem", marginBottom: 20, textAlign: "center" }}>
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
