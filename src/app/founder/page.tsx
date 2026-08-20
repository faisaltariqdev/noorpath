import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { BASE_URL, FOUNDER_PERSON_ID, ORGANIZATION_ID } from "@/lib/organizationSchema";
import { absolutePageTitle } from "@/lib/pageTitle";

export const revalidate = false;

export const metadata: Metadata = {
  title: absolutePageTitle("Faisal Tariq — Founder & CEO of NoorPath Academy"),
  description:
    "Faisal Tariq is Founder and CEO of NoorPath Academy (www.noorpath.online) — live one-to-one online Quran classes for children and families.",
  keywords: [
    "faisal tariq noorpath",
    "noorpath academy founder",
    "noorpath.online founder",
  ],
  alternates: { canonical: "https://www.noorpath.online/founder" },
  openGraph: {
    title: "Faisal Tariq — Founder & CEO of NoorPath Academy",
    description:
      "Founder and CEO of NoorPath Academy at www.noorpath.online — online-only Quran academy.",
    url: "https://www.noorpath.online/founder",
    images: [{ url: "/assets/faisal-tariq-founder.png", width: 500, height: 500, alt: "Faisal Tariq — Founder & CEO, NoorPath Academy" }],
  },
  twitter: {
    card: "summary",
    title: "Faisal Tariq — Founder & CEO | NoorPath Academy",
    description: "Founder and CEO of NoorPath Academy (www.noorpath.online).",
    images: ["/assets/faisal-tariq-founder.png"],
  },
};

const profileUrl = `${BASE_URL}/founder`;
const personId = FOUNDER_PERSON_ID;

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfilePage",
      "@id": profileUrl,
      name: "Faisal Tariq — Founder & CEO of NoorPath Academy",
      description:
        "Profile of Faisal Tariq, Founder and CEO of NoorPath Academy (www.noorpath.online).",
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
      description:
        "Faisal Tariq is the Founder and CEO of NoorPath Academy, the online-only Quran academy at www.noorpath.online.",
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
              <Link href="/free-quran-classes-online" className="btn-primary-np" style={{ fontSize: ".85rem" }}>Book Free Trial →</Link>
            </div>

            {/* Bio */}
            <div className="md:col-span-2">
              <div className="content-card">
                <h3 style={{ fontFamily: "'Playfair Display',serif", fontSize: "1.2rem", color: "var(--charcoal)", marginBottom: 16 }}>The Story Behind NoorPath</h3>
                <p style={{ color: "var(--muted)", lineHeight: 1.8, marginBottom: 16 }}>
                  Faisal Tariq is an <strong>Islamic Education Specialist</strong> and the Founder of NoorPath Academy. 
                  With over <strong>8 years of experience</strong> in digital Islamic education, Faisal has dedicated 
                  his career to making high-quality, authentic Quran learning accessible to Muslim families worldwide.
                </p>
                <p style={{ color: "var(--muted)", lineHeight: 1.8, marginBottom: 16 }}>
                  Under his leadership, NoorPath has grown into a trusted platform where students from the UK, USA, 
                  Canada, and beyond connect with certified tutors. His approach focuses on <strong>"People-First Content"</strong> 
                  and pedagogical excellence, ensuring that every learner — from a 4-year-old child starting 
                  Noorani Qaida to an adult returning to the Quran — receives personalized, effective instruction.
                </p>
                <p style={{ color: "var(--muted)", lineHeight: 1.8, marginBottom: 24 }}>
                  NoorPath provides live one-to-one online Quran learning through a model that emphasizes 
                  safety, progress tracking via a dedicated Parent Portal, and a curriculum rooted in authentic 
                  Islamic principles.
                </p>

                <h3 style={{ fontFamily: "'Playfair Display',serif", fontSize: "1.1rem", color: "var(--charcoal)", marginBottom: 12 }}>Expertise & Leadership</h3>
                <ul style={{ color: "var(--muted)", lineHeight: 1.8, marginBottom: 24, paddingLeft: 20 }}>
                  <li>Curriculum Development for Noorani Qaida & Tajweed</li>
                  <li>Islamic Education Pedagogy for Children & Teenagers</li>
                  <li>Digital Transformation of Traditional Islamic Learning</li>
                  <li>Safeguarding & Quality Assurance in Online Tutoring</li>
                </ul>

                <h3 style={{ fontFamily: "'Playfair Display',serif", fontSize: "1.1rem", color: "var(--charcoal)", marginBottom: 12 }}>Learn More</h3>
                <div style={{ background: "rgba(10,110,79,.06)", border: "1px solid rgba(10,110,79,.15)", borderRadius: 12, padding: 20 }}>
                  <p style={{ color: "var(--emerald)", margin: 0, lineHeight: 1.75, fontFamily: "'Playfair Display',serif", fontSize: "1.05rem" }}>
                    Read about NoorPath&apos;s services, tutor matching and approach on the{" "}
                  <Link href="/founder" style={{ color: "var(--emerald)", fontWeight: 700 }}>
                    About page
                  </Link>
                  . Read our new article on the{" "}
                  <Link href="/blog/noorpath-academy-vision-online-quran-education" style={{ color: "var(--emerald)", fontWeight: 700 }}>
                    Vision for Modern Online Quran Education
                  </Link>{" "}
                  to learn about our mission. For content standards and accuracy, please see our{" "}
                  <Link href="/editorial-policy" style={{ color: "var(--emerald)", fontWeight: 700 }}>
                    Editorial Policy
                  </Link>.
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
