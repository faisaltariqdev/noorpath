import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { courses, getCourse } from "@/data/courses";
import { ORGANIZATION_REF } from "@/lib/organizationSchema";
import { CheckCircle, Clock, Users, Star, BookOpen } from "lucide-react";
import { FAMILY_DISCOUNTS, TRIAL } from "@/lib/academyFacts";
import { serializeJsonLd } from "@/lib/jsonLd";

interface Props {
  params: Promise<{ slug: string }>;
}

export const dynamicParams = false;
export const revalidate = false;

export async function generateStaticParams() {
  return courses.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const course = getCourse(slug);
  if (!course) return {};
  const description = `${course.title} for ${course.age}. Live one-to-one online lessons, schedule matching and a free trial request.`;
  return {
    title: `${course.title} — Online | NoorPath Academy`,
    description,
    keywords: course.keywords,
    alternates: { canonical: `https://www.noorpath.online/courses/${slug}` },
    openGraph: {
      title: `${course.title} — Online | NoorPath Academy`,
      description,
      url: `https://www.noorpath.online/courses/${slug}`,
      images: [{ url: "/og-image.png", width: 1200, height: 630, alt: course.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${course.title} | NoorPath Academy`,
      description: course.desc,
      images: ["/og-image.png"],
    },
  };
}

export default async function CourseDetailPage({ params }: Props) {
  const { slug } = await params;
  const course = getCourse(slug);
  if (!course) notFound();

  const related = courses.filter((c) => c.slug !== slug).slice(0, 3);

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Course",
        name: course.title,
        description: course.fullDesc,
        url: `https://www.noorpath.online/courses/${slug}`,
        provider: ORGANIZATION_REF,
        educationalLevel: course.level,
        typicalAgeRange: course.age,
        courseMode: "online",
        teaches: course.features.join(", "),
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "USD",
          description: `Free ${TRIAL.durationMinutes}-minute trial class request`,
        },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://www.noorpath.online" },
          { "@type": "ListItem", position: 2, name: "Courses", item: "https://www.noorpath.online/courses" },
          { "@type": "ListItem", position: 3, name: course.title, item: `https://www.noorpath.online/courses/${slug}` },
        ],
      },
      ...(course.faqs && course.faqs.length > 0
        ? [{
            "@type": "FAQPage",
            mainEntity: course.faqs.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          }]
        : []),
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeJsonLd(jsonLd) }} />

      {/* Hero */}
      <div className="page-hero">
        <div className="max-w-[1200px] mx-auto px-4 page-hero-content">
          <nav aria-label="Breadcrumb" style={{ marginBottom: 16 }}>
            <Link href="/" style={{ color: "var(--gold-lt)", fontSize: ".85rem" }}>Home</Link>
            <span style={{ color: "rgba(255,255,255,.4)", margin: "0 8px" }}>›</span>
            <Link href="/courses" style={{ color: "var(--gold-lt)", fontSize: ".85rem" }}>Courses</Link>
            <span style={{ color: "rgba(255,255,255,.4)", margin: "0 8px" }}>›</span>
            <span style={{ color: "rgba(255,255,255,.6)", fontSize: ".85rem" }}>{course.shortTitle}</span>
          </nav>
          <div style={{ fontSize: "3rem", marginBottom: 12 }}>{course.icon}</div>
          <h1>{course.title}</h1>
          <p style={{ maxWidth: 640 }}>{course.desc}</p>
          <div style={{ display: "flex", gap: 20, marginTop: 20, flexWrap: "wrap" }}>
            {[
              { icon: "🎓", label: course.level },
              { icon: "👶", label: course.age },
              { icon: "📅", label: course.duration },
              { icon: "📆", label: course.sessionsPerWeek },
            ].map((item) => (
              <div key={item.label} style={{ display: "flex", alignItems: "center", gap: 6, background: "rgba(255,255,255,.1)", borderRadius: 20, padding: "6px 14px", fontSize: ".83rem", color: "rgba(255,255,255,.9)" }}>
                <span>{item.icon}</span> {item.label}
              </div>
            ))}
          </div>
        </div>
      </div>

      {course.slug === "noorani-qaida-online" && (
        <section style={{ background: "linear-gradient(180deg,#f1fbf6,#fff)", padding: "56px 0" }} aria-labelledby="course-interactive-qaida-heading">
          <div className="max-w-[1200px] mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <div>
                <span className="section-eyebrow">Course learning platform</span>
                <h2 id="course-interactive-qaida-heading" className="section-title">
                  See the Complete 11-Module Learning Journey
                </h2>
                <p className="section-desc">
                  NoorPath’s interactive Qaida reference supports ages 3–12 with
                  all 28 Arabic letters, Harakaat, Tanween, Sukoon, Shaddah, Madd,
                  joining, word reading, guided Quranic practice, revision, games,
                  rewards, and adult guidance. Live classes on this page are
                  requested separately for ages 4+.
                </p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 12, marginTop: 22 }}>
                  <Link href="/noorani-qaida" className="btn-primary-np">Explore Interactive Noorani Qaida →</Link>
                  <Link href="/noorani-qaida/guides/pronunciation" className="btn-outline-np">Pronunciation Guide</Link>
                </div>
              </div>
              <figure className="qaida-screenshot">
                <Image
                  src="/marketing/noorani-qaida/interactive-noorani-qaida-11-module-curriculum.png"
                  alt="NoorPath interactive Noorani Qaida 11-module curriculum and Arabic alphabet book"
                  width={1024}
                  height={543}
                  sizes="(max-width: 1024px) 100vw, 560px"
                />
                <figcaption>
                  NoorPath learning platform preview: an open curriculum from
                  Arabic letters through guided Quranic practice and final review.
                </figcaption>
              </figure>
            </div>
          </div>
        </section>
      )}

      <section style={{ padding: "60px 0" }}>
        <div className="max-w-[1200px] mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

            {/* Main content */}
            <div className="lg:col-span-2">

              {/* About the course */}
              <div className="content-card" style={{ marginBottom: 28 }}>
                <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: "1.6rem", color: "var(--charcoal)", marginBottom: 16 }}>
                  About This Course
                </h2>
                <p style={{ color: "var(--muted)", lineHeight: 1.8, fontSize: "1.05rem" }}>{course.fullDesc}</p>
              </div>

              {/* What you will learn */}
              <div className="content-card" style={{ marginBottom: 28 }}>
                <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: "1.4rem", color: "var(--charcoal)", marginBottom: 20 }}>
                  What You Will Learn
                </h2>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                  {course.features.map((f) => (
                    <div key={f} style={{ display: "flex", alignItems: "flex-start", gap: 10, padding: "12px 16px", background: "rgba(10,110,79,.05)", borderRadius: 10, border: "1px solid rgba(10,110,79,.12)" }}>
                      <CheckCircle size={18} style={{ color: "var(--emerald)", marginTop: 1, flexShrink: 0 }} />
                      <span style={{ fontSize: ".88rem", color: "var(--slate)", lineHeight: 1.5 }}>{f}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Course details */}
              <div className="content-card" style={{ marginBottom: 28 }}>
                <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: "1.4rem", color: "var(--charcoal)", marginBottom: 20 }}>
                  Course Details
                </h2>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                  {[
                    { icon: <BookOpen size={20} />, label: "Level", value: course.level },
                    { icon: <Users size={20} />, label: "Age Group", value: course.age },
                    { icon: <Clock size={20} />, label: "Duration", value: course.duration },
                    { icon: <Star size={20} />, label: "Schedule", value: course.sessionsPerWeek },
                  ].map((item) => (
                    <div key={item.label} style={{ display: "flex", gap: 14, alignItems: "flex-start", padding: "14px", background: "var(--ivory)", borderRadius: 12, border: "1px solid var(--border)" }}>
                      <div style={{ color: "var(--emerald)", flexShrink: 0 }}>{item.icon}</div>
                      <div>
                        <div style={{ fontSize: ".75rem", color: "var(--muted)", fontWeight: 600, textTransform: "uppercase", letterSpacing: ".05em", marginBottom: 2 }}>{item.label}</div>
                        <div style={{ fontSize: ".95rem", color: "var(--charcoal)", fontWeight: 600 }}>{item.value}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Why NoorPath */}
              <div className="content-card">
                <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: "1.4rem", color: "var(--charcoal)", marginBottom: 20 }}>
                  Why Choose NoorPath Academy?
                </h2>
                <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                  {[
                    { emoji: "👩‍🏫", title: "Tutor Matching", desc: "Request a tutor by learner level, course goal, timezone and male or female preference. Available tutor details are confirmed before enrolment." },
                    { emoji: "💻", title: "Live One-to-One Lessons", desc: "Lessons take place online with the assigned tutor rather than through pre-recorded videos." },
                    { emoji: "⏰", title: "Schedule Matching", desc: "NoorPath checks current tutor availability against the learner's timezone and preferred class time." },
                    { emoji: "👨‍👩‍👧‍👦", title: "Family Plans Available", desc: `Published sibling discounts range from ${FAMILY_DISCOUNTS[0].discountPercent}% to ${FAMILY_DISCOUNTS[FAMILY_DISCOUNTS.length - 1].discountPercent}%, depending on the number enrolled.` },
                    { emoji: "🆓", title: "Free Trial Class", desc: `Request a ${TRIAL.durationMinutes}-minute trial with no credit card. Tutor availability is confirmed after the request.` },
                  ].map((item) => (
                    <div key={item.title} style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
                      <div style={{ fontSize: "1.6rem", flexShrink: 0 }}>{item.emoji}</div>
                      <div>
                        <div style={{ fontWeight: 700, color: "var(--charcoal)", marginBottom: 2 }}>{item.title}</div>
                        <div style={{ fontSize: ".87rem", color: "var(--muted)", lineHeight: 1.6 }}>{item.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* FAQ section */}
              {course.faqs && course.faqs.length > 0 && (
                <div className="content-card" style={{ marginTop: 28 }}>
                  <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: "1.4rem", color: "var(--charcoal)", marginBottom: 20 }}>
                    Frequently Asked Questions
                  </h2>
                  {course.faqs.map((f, i) => (
                    <details key={i} style={{ borderBottom: "1px solid var(--border)", padding: "16px 0" }}>
                      <summary style={{ fontWeight: 600, color: "var(--charcoal)", cursor: "pointer", fontSize: ".92rem", listStyle: "none", display: "flex", justifyContent: "space-between" }}>
                        {f.q} <span style={{ color: "var(--emerald)", marginLeft: 8, flexShrink: 0 }}>+</span>
                      </summary>
                      <p style={{ color: "var(--muted)", marginTop: 10, lineHeight: 1.75, fontSize: ".88rem" }}>{f.a}</p>
                    </details>
                  ))}
                </div>
              )}

              {/* Related courses */}
              {related.length > 0 && (
                <div style={{ marginTop: 28 }}>
                  <h3 style={{ fontFamily: "'Playfair Display',serif", fontSize: "1.2rem", color: "var(--charcoal)", marginBottom: 16 }}>
                    Other Courses
                  </h3>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 12 }}>
                    {related.map((r) => (
                      <Link key={r.slug} href={`/courses/${r.slug}`} style={{ textDecoration: "none", padding: 16, background: "#fff", border: "1px solid var(--border)", borderRadius: 12, display: "block", transition: "box-shadow .2s" }}>
                        <div style={{ fontSize: "1.8rem", marginBottom: 8 }}>{r.icon}</div>
                        <div style={{ fontSize: ".88rem", fontWeight: 700, color: "var(--charcoal)", lineHeight: 1.4 }}>{r.shortTitle}</div>
                        <div style={{ fontSize: ".78rem", color: "var(--muted)", marginTop: 4 }}>{r.age}</div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar CTA */}
            <div>
              <div style={{ background: "linear-gradient(135deg, #0a3d28, #0d5436)", borderRadius: 20, padding: 28, textAlign: "center", position: "sticky", top: 90 }}>
                <div style={{ fontSize: "2.5rem", marginBottom: 12 }}>{course.icon}</div>
                <h3 style={{ fontFamily: "'Playfair Display',serif", color: "#fff", fontSize: "1.2rem", marginBottom: 10 }}>
                  Start {course.shortTitle} Today
                </h3>
                <p style={{ color: "rgba(255,255,255,.75)", fontSize: ".85rem", marginBottom: 6, lineHeight: 1.6 }}>
                  Free {TRIAL.durationMinutes}-minute trial request. No credit card required.
                </p>
                <div style={{ display: "flex", flexDirection: "column", gap: 8, margin: "20px 0" }}>
                  {["✓ Available tutor details confirmed", "✓ Live one-to-one session", "✓ Timezone and schedule matching", "✓ Free trial before paid enrolment"].map((p) => (
                    <div key={p} style={{ color: "rgba(255,255,255,.85)", fontSize: ".82rem", textAlign: "left" }}>{p}</div>
                  ))}
                </div>
                <Link href="/online-quran-classes#cta" style={{ display: "block", background: "var(--gold)", color: "var(--charcoal)", padding: "13px", borderRadius: 12, fontWeight: 700, textDecoration: "none", fontSize: ".95rem", marginTop: 4 }}>
                  Book Free Trial Class →
                </Link>
                <div style={{ marginTop: 16, color: "rgba(255,255,255,.5)", fontSize: ".75rem" }}>
                  ⭐ Reviewed by parents on Trustpilot
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="cta-section">
        <div className="max-w-[1200px] mx-auto px-4 text-center">
          <h2 style={{ fontFamily: "'Playfair Display',serif", color: "#fff", fontSize: "2rem", marginBottom: 16 }}>
            Ready to Start {course.shortTitle}?
          </h2>
          <p style={{ color: "rgba(255,255,255,.75)", marginBottom: 28 }}>
            Request a free {TRIAL.durationMinutes}-minute trial before choosing a paid plan.
          </p>
          <Link href="/online-quran-classes#cta" className="btn-primary-np">
            Book Free Trial Class →
          </Link>
        </div>
      </section>
    </>
  );
}
