import type { Metadata } from "next";
import Link from "next/link";
import CTAForm from "@/components/CTAForm";
import { ORGANIZATION_REF } from "@/lib/organizationSchema";
import { CheckCircle, Clock, Users, Award, Video, Shield, Lock } from "lucide-react";

export const revalidate = false;

export const metadata: Metadata = {
  title: {
    absolute: "Online Quran Classes for Kids & Adults — Free Trial 2026",
  },
  description: "Live one-to-one online Quran classes for kids and adults: Noorani Qaida, Tajweed, Hifz and Arabic, with tutor matching and a free trial request.",
  keywords: [
    "online quran classes", "learn quran online", "quran classes online", "online quran academy",
    "quran tutor online", "live quran classes", "quran classes for kids", "online quran teacher",
    "best online quran classes", "quran learning online", "1 on 1 quran classes", "free quran trial",
    "tajweed classes online", "noorani qaida online", "hifz program online", "islamic classes online",
  ],
  alternates: { canonical: "https://www.noorpath.online/online-quran-classes" },
  openGraph: {
    title: "Online Quran Classes — Live One-to-One Lessons | Free Trial",
    description: "Live one-to-one Quran classes via Zoom or Google Meet — Qaida, Tajweed, Hifz and Arabic, with a free 30-minute trial request.",
    url: "https://www.noorpath.online/online-quran-classes",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Online Quran Classes — NoorPath Academy" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Online Quran Classes | Live 1-on-1 | NoorPath Academy",
    description: "Tutor matching, family plans and a free 30-minute trial request for Qaida, Tajweed, Hifz or Arabic.",
    images: ["/og-image.png"],
  },
};

const features = [
  { icon: <Award size={22} />, title: "Tutor Matching", desc: "Request a tutor by learner level, goals, timezone and male or female preference. Available tutor details are confirmed before enrolment." },
  { icon: <Users size={22} />, title: "1-on-1 Private Sessions", desc: "No group classes. Your child gets the tutor's full attention every single session." },
  { icon: <Clock size={22} />, title: "Schedule Matching", desc: "Share morning, evening or weekend preferences; the recurring time is confirmed according to tutor availability." },
  { icon: <Shield size={22} />, title: "Female Tutor Requests", desc: "Request a female tutor for sisters or daughters. NoorPath confirms a suitable match based on current availability." },
  { icon: <Video size={22} />, title: "Live via Zoom / Google Meet", desc: "High-quality live video sessions with screen sharing and digital whiteboards." },
  { icon: <CheckCircle size={22} />, title: "Learning Goals", desc: "Ask what was covered, what to practise next and how progress will be communicated before enrolment." },
];

const classFaqs = [
  { q: "What are online Quran classes?", a: "Online Quran classes are live 1-on-1 sessions with a tutor via Zoom or Google Meet. Students can learn Noorani Qaida, Tajweed, Hifz, Arabic, or Islamic studies from home at an agreed time." },
  { q: "How much do online Quran classes cost?", a: "NoorPath publishes current lesson frequency, duration and monthly prices on its pricing page. New learners can request a free 30-minute trial with no credit card." },
  { q: "Are online Quran classes effective for kids?", a: "Live one-to-one lessons allow direct recitation feedback, but progress depends on starting level, attendance, tutor fit and practice. Parents should use the trial to assess suitability." },
  { q: "Can I learn Quran online as a beginner?", a: "Yes. Complete beginners may start with Arabic letter recognition and pronunciation through Noorani Qaida. The tutor can recommend a suitable starting point after assessment." },
  { q: "Can I get a female Quran teacher online?", a: "You can request a female tutor for sisters or daughters when booking a free trial. NoorPath confirms a suitable match according to learner needs, schedule and current availability." },
];

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": "https://www.noorpath.online/online-quran-classes#service",
      name: "Online Quran Classes — Live 1-on-1",
      description: "Live one-to-one online Quran classes via Zoom or Google Meet covering Noorani Qaida, Tajweed, Hifz, Arabic and Islamic studies, with a free trial request.",
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
      "@type": "FAQPage",
      mainEntity: classFaqs.map((f) => ({
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
          <h1>Online Quran Classes — Live One-to-One Lessons</h1>
          <p>Personalised online Quran learning for kids and adults, from Noorani Qaida and Quran reading to Tajweed, Hifz and Islamic studies.</p>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 24 }}>
            <Link href="#cta" className="btn-primary-np">Book Free Trial →</Link>
            <Link href="/online-quran-classes-for-kids" className="btn-outline-np" style={{ color: "#fff", borderColor: "rgba(255,255,255,.5)" }}>Kids Classes</Link>
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
                  [<Video size={18} key="2" />, "Live 1-on-1 lesson with an assigned tutor"],
                  [<Lock size={18} key="3" />, "Privacy and trial terms linked before submission"],
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
