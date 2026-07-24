import type { Metadata } from "next";
import Link from "next/link";
import { CONTACT } from "@/lib/academyFacts";
import WhatsAppLink from "@/components/WhatsAppLink";

export const revalidate = false;

export const metadata: Metadata = {
  title: "Online Class Safeguarding for Parents",
  description:
    "NoorPath Academy's parent guidance for safe one-to-one online Quran classes, communication, supervision, recording and reporting concerns.",
  alternates: { canonical: "https://www.noorpath.online/safeguarding" },
};

const practices = [
  {
    title: "Parent-managed arrangements",
    text: "A parent or guardian should submit a child's trial request, agree the schedule and remain the main contact for class administration.",
  },
  {
    title: "Parent visibility",
    text: "Parents may remain present or nearby during a child's online lesson and should use a suitable shared learning space where practical.",
  },
  {
    title: "Official communication",
    text: "Scheduling and service messages for children should go through the parent or guardian using NoorPath's official email or WhatsApp contact.",
  },
  {
    title: "Recording consent",
    text: "A lesson must not be recorded or distributed without permission from the participants and the child's parent or guardian.",
  },
  {
    title: "Tutor information",
    text: "Before paid enrolment, parents may ask NoorPath to explain the proposed tutor's teaching focus and the credentials NoorPath has confirmed.",
  },
  {
    title: "Tutor changes",
    text: "If a parent or learner is uncomfortable with a match, they should pause the session and contact NoorPath to discuss another available tutor.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://www.noorpath.online",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Safeguarding",
      item: "https://www.noorpath.online/safeguarding",
    },
  ],
};

export default function SafeguardingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="page-hero">
        <div className="max-w-[1200px] mx-auto px-4 page-hero-content">
          <nav aria-label="Breadcrumb" style={{ marginBottom: 16 }}>
            <Link href="/" style={{ color: "var(--gold-lt)", fontSize: ".85rem" }}>
              Home
            </Link>
            <span style={{ color: "rgba(255,255,255,.4)", margin: "0 8px" }}>›</span>
            <span style={{ color: "rgba(255,255,255,.6)", fontSize: ".85rem" }}>
              Safeguarding
            </span>
          </nav>
          <h1>Safe One-to-One Online Learning</h1>
          <p>
            Clear expectations for parents, learners and tutors during online
            Quran classes.
          </p>
        </div>
      </div>

      <section>
        <div className="max-w-[900px] mx-auto px-4">
          <div className="content-card" style={{ marginBottom: 28 }}>
            <h2
              style={{
                fontFamily: "var(--font-playfair), serif",
                fontSize: "1.4rem",
                marginBottom: 12,
              }}
            >
              Parent and learner guidance
            </h2>
            <p style={{ color: "var(--muted)", lineHeight: 1.8, margin: 0 }}>
              Online tutoring works best when parents know how classes are
              arranged, how communication happens and where to raise a concern.
              These practices apply to NoorPath&apos;s one-to-one lessons for
              children.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {practices.map((practice) => (
              <div key={practice.title} className="content-card">
                <h2
                  style={{
                    fontFamily: "var(--font-playfair), serif",
                    fontSize: "1.05rem",
                    marginBottom: 9,
                  }}
                >
                  {practice.title}
                </h2>
                <p style={{ color: "var(--muted)", lineHeight: 1.7, margin: 0 }}>
                  {practice.text}
                </p>
              </div>
            ))}
          </div>

          <div className="content-card" style={{ marginTop: 28 }}>
            <h2
              style={{
                fontFamily: "var(--font-playfair), serif",
                fontSize: "1.25rem",
                marginBottom: 12,
              }}
            >
              Report a concern
            </h2>
            <p style={{ color: "var(--muted)", lineHeight: 1.8, marginBottom: 12 }}>
              Stop the session if you believe a learner is uncomfortable or at
              risk. Contact NoorPath with the learner&apos;s name, lesson date,
              tutor name and a clear description of the concern.
            </p>
            <p style={{ color: "var(--muted)", lineHeight: 1.8, margin: 0 }}>
              Email{" "}
              <Link href={`mailto:${CONTACT.email}`} style={{ color: "var(--emerald)" }}>
                {CONTACT.email}
              </Link>{" "}
              or use{" "}
              <WhatsAppLink
                href={CONTACT.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "var(--emerald)" }}
              >
                NoorPath WhatsApp
              </WhatsAppLink>
              . Contact local emergency or child-protection services when
              immediate help is required.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
