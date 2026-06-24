import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { courses, getCourse } from "@/data/courses";
import { ORGANIZATION_REF } from "@/lib/organizationSchema";
import { CheckCircle, Clock, Users, Star, BookOpen } from "lucide-react";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return courses.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const course = getCourse(slug);
  if (!course) return {};
  const description = `${course.title} with certified online Quran tutors. ${course.level} program for ${course.age}. Live 1-on-1 classes, flexible schedule and free trial.`;
  return {
    title: `${course.title} — Online | NoorPath Academy`,
    description,
    keywords: course.keywords,
    alternates: { canonical: `https://www.noorpath.online/courses/${slug}` },
    openGraph: {
      title: `${course.title} — Online | NoorPath Academy`,
      description,
      url: `https://www.noorpath.online/courses/${slug}`,
      images: [{ url: "/og-image.svg", width: 1200, height: 630, alt: course.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${course.title} | NoorPath Academy`,
      description: course.desc,
      images: ["/og-image.svg"],
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
          description: "Free 30-minute trial class",
          availability: "https://schema.org/InStock",
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
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

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
                    { emoji: "👩‍🏫", title: "Certified Tutors", desc: "All teachers hold Ijazah in Quran recitation and have 3+ years of teaching experience." },
                    { emoji: "🌍", title: "Students in 40+ Countries", desc: "Join 12,000+ students from the USA, UK, Canada, Australia, UAE and more." },
                    { emoji: "⏰", title: "Flexible Schedules", desc: "Morning, afternoon, or evening slots available 7 days a week — any timezone." },
                    { emoji: "👨‍👩‍👧‍👦", title: "Family Plans Available", desc: "Enrol multiple family members and save up to 30% on monthly fees." },
                    { emoji: "🆓", title: "Free Trial Class", desc: "Try a full 30-minute class for free — no commitment, no credit card needed." },
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
                  Free 30-minute trial class. No credit card required.
                </p>
                <div style={{ display: "flex", flexDirection: "column", gap: 8, margin: "20px 0" }}>
                  {["✅ Certified & verified tutors", "✅ 1-on-1 personalised sessions", "✅ Flexible timing — any timezone", "✅ Free first class, cancel anytime"].map((p) => (
                    <div key={p} style={{ color: "rgba(255,255,255,.85)", fontSize: ".82rem", textAlign: "left" }}>{p}</div>
                  ))}
                </div>
                <Link href="/online-quran-classes#cta" style={{ display: "block", background: "var(--gold)", color: "var(--charcoal)", padding: "13px", borderRadius: 12, fontWeight: 700, textDecoration: "none", fontSize: ".95rem", marginTop: 4 }}>
                  Book Free Trial Class →
                </Link>
                <div style={{ marginTop: 16, color: "rgba(255,255,255,.5)", fontSize: ".75rem" }}>
                  ⭐⭐⭐⭐⭐ 4.9/5 from 2,400+ reviews
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
            Join 12,000+ students learning with certified tutors. Book your free 30-minute trial today.
          </p>
          <Link href="/online-quran-classes#cta" className="btn-primary-np">
            Book Free Trial Class →
          </Link>
        </div>
      </section>
    </>
  );
}
