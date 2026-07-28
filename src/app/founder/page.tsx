import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { BASE_URL, ORGANIZATION_ID } from "@/lib/organizationSchema";
import { absolutePageTitle } from "@/lib/pageTitle";

export const revalidate = false;

export const metadata: Metadata = {
  title: absolutePageTitle("Faisal Tariq — Founder & CEO of NoorPath Academy"),
  description: "Profile of Faisal Tariq, Founder and CEO of NoorPath Academy.",
  alternates: { canonical: "https://www.noorpath.online/founder" },
  openGraph: {
    title: "Faisal Tariq — Founder & CEO of NoorPath Academy",
    description: "Profile of Faisal Tariq, Founder and CEO of NoorPath Academy.",
    url: "https://www.noorpath.online/founder",
    images: [{ url: "/assets/faisal-tariq-founder.png", width: 500, height: 500, alt: "Faisal Tariq — Founder & CEO, NoorPath Academy" }],
  },
  twitter: {
    card: "summary",
    title: "Faisal Tariq — Founder & CEO | NoorPath Academy",
    description: "Founder and CEO of NoorPath Academy.",
    images: ["/assets/faisal-tariq-founder.png"],
  },
};

const profileUrl = `${BASE_URL}/founder`;
const personId = `${profileUrl}#person`;

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfilePage",
      "@id": profileUrl,
      name: "Faisal Tariq — Founder & CEO of NoorPath Academy",
      description: "Profile of Faisal Tariq, Founder and CEO of NoorPath Academy.",
      url: profileUrl,
      mainEntity: { "@id": personId },
      isPartOf: { "@id": `${BASE_URL}/#website` },
    },
    {
      "@type": "Person",
      "@id": personId,
      name: "Faisal Tariq",
      jobTitle: "Founder and CEO",
      url: profileUrl,
      image: `${BASE_URL}/assets/faisal-tariq-founder.png`,
      worksFor: { "@id": ORGANIZATION_ID },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
        { "@type": "ListItem", position: 2, name: "Founder", item: profileUrl },
      ],
    },
  ],
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
          <p>Meet Faisal Tariq, the Founder and CEO of NoorPath Academy.</p>
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
            <div className="md:col-span-2">
              <div className="content-card">
                <h3 style={{ fontFamily: "'Playfair Display',serif", fontSize: "1.2rem", color: "var(--charcoal)", marginBottom: 16 }}>The Story Behind NoorPath</h3>
                <p style={{ color: "var(--muted)", lineHeight: 1.8, marginBottom: 16 }}>
                  Faisal Tariq is the Founder and CEO of NoorPath Academy. NoorPath provides online Quran learning for children, adults and families.
                </p>
                <p style={{ color: "var(--muted)", lineHeight: 1.8, marginBottom: 16 }}>
                  NoorPath offers live one-to-one lessons and matches learners with tutors according to their learning goals, schedule and stated preferences.
                </p>
                <p style={{ color: "var(--muted)", lineHeight: 1.8, marginBottom: 24 }}>
                  Available learning routes include Noorani Qaida, Quran reading, Tajweed, Hifz, Arabic and Islamic studies. Tutor details and availability are confirmed during the enquiry and enrolment process.
                </p>

                <h3 style={{ fontFamily: "'Playfair Display',serif", fontSize: "1.1rem", color: "var(--charcoal)", marginBottom: 12 }}>Learn More</h3>
                <div style={{ background: "rgba(10,110,79,.06)", border: "1px solid rgba(10,110,79,.15)", borderRadius: 12, padding: 20 }}>
                  <p style={{ color: "var(--emerald)", margin: 0, lineHeight: 1.75, fontFamily: "'Playfair Display',serif", fontSize: "1.05rem" }}>
                    Read about NoorPath&apos;s services, tutor matching and approach on the{" "}
                    <Link href="/about" style={{ color: "var(--emerald)", fontWeight: 700 }}>
                      About page
                    </Link>
                    .
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
