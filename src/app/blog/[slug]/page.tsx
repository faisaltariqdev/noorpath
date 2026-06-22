import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { blogPosts, getBlogPost } from "@/data/blog";
import { Clock, BookOpen, ArrowLeft } from "lucide-react";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.description,
    keywords: post.keywords,
    alternates: { canonical: `https://www.noorpath.online/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.description,
      url: `https://www.noorpath.online/blog/${post.slug}`,
      type: "article",
      publishedTime: post.date,
      modifiedTime: post.date,
      authors: ["NoorPath Academy"],
      siteName: "NoorPath Academy",
      images: [{ url: "/og-image.svg", width: 1200, height: 630, alt: post.title }],
    },
    twitter: {
      card: "summary_large_image" as const,
      title: post.title,
      description: post.description,
      images: ["/og-image.svg"],
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  const related = blogPosts.filter((p) => p.slug !== slug && p.category === post.category).slice(0, 3);

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": `https://www.noorpath.online/blog/${post.slug}#article`,
        headline: post.title,
        description: post.description,
        datePublished: post.date,
        dateModified: post.date,
        image: { "@type": "ImageObject", url: "https://www.noorpath.online/og-image.svg", width: 1200, height: 630 },
        author: { "@type": "Organization", name: "NoorPath Academy", url: "https://www.noorpath.online" },
        publisher: {
          "@type": "Organization",
          name: "NoorPath Academy",
          logo: { "@type": "ImageObject", url: "https://www.noorpath.online/og-image.svg", width: 1200, height: 630 },
        },
        url: `https://www.noorpath.online/blog/${post.slug}`,
        mainEntityOfPage: { "@type": "WebPage", "@id": `https://www.noorpath.online/blog/${post.slug}` },
        keywords: post.keywords.join(", "),
        articleSection: post.category,
        inLanguage: "en-US",
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://www.noorpath.online" },
          { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.noorpath.online/blog" },
          { "@type": "ListItem", position: 3, name: post.category, item: `https://www.noorpath.online/blog/${post.slug}` },
        ],
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="page-hero">
        <div className="max-w-[1200px] mx-auto px-4 page-hero-content">
          <nav aria-label="Breadcrumb" style={{ marginBottom: 16 }}>
            <Link href="/" style={{ color: "var(--gold-lt)", fontSize: ".85rem" }}>Home</Link>
            <span style={{ color: "rgba(255,255,255,.4)", margin: "0 8px" }}>›</span>
            <Link href="/blog" style={{ color: "var(--gold-lt)", fontSize: ".85rem" }}>Blog</Link>
            <span style={{ color: "rgba(255,255,255,.4)", margin: "0 8px" }}>›</span>
            <span style={{ color: "rgba(255,255,255,.6)", fontSize: ".85rem" }}>{post.category}</span>
          </nav>
          <span className="blog-tag" style={{ background: "rgba(255,255,255,.1)", color: "rgba(255,255,255,.9)" }}>{post.category}</span>
          <h1 style={{ marginTop: 12 }}>{post.title}</h1>
          <div style={{ display: "flex", gap: 16, color: "rgba(255,255,255,.6)", fontSize: ".83rem", marginTop: 12 }}>
            <span style={{ display: "flex", alignItems: "center", gap: 4 }}><BookOpen size={14} /> {new Date(post.date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}</span>
            <span style={{ display: "flex", alignItems: "center", gap: 4 }}><Clock size={14} /> {post.readTime} read</span>
          </div>
        </div>
      </div>

      <section>
        <div className="max-w-[1200px] mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Main content */}
            <div className="lg:col-span-2">
              <div style={{ background: "#fff", border: "1px solid var(--border)", borderRadius: 20, padding: "36px 32px" }}>
                <p style={{ fontSize: "1.05rem", color: "var(--slate)", lineHeight: 1.8, marginBottom: 24, padding: "20px 24px", background: "rgba(10,110,79,.05)", borderLeft: "4px solid var(--emerald)", borderRadius: "0 12px 12px 0" }}>
                  {post.excerpt}
                </p>

                <p style={{ color: "var(--muted)", lineHeight: 1.8, marginBottom: 20 }}>
                  This comprehensive guide on <strong>{post.title.split("—")[0].trim()}</strong> covers everything you need to know — from the basics to advanced concepts, with practical examples and Islamic references.
                </p>

                <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: "1.5rem", color: "var(--charcoal)", marginBottom: 16 }}>
                  Why This Topic Matters for Every Muslim
                </h2>
                <p style={{ color: "var(--muted)", lineHeight: 1.8, marginBottom: 20 }}>
                  Understanding {post.title.split("—")[0].trim().split("(")[0].trim()} is a fundamental part of Islamic education. Our certified tutors at NoorPath Academy teach this as part of our comprehensive Quran and Islamic studies curriculum.
                </p>

                <div style={{ background: "var(--ivory)", border: "1px solid var(--border)", borderRadius: 16, padding: 24, marginBottom: 24 }}>
                  <h3 style={{ fontFamily: "'Playfair Display',serif", fontSize: "1.2rem", color: "var(--charcoal)", marginBottom: 12 }}>📋 What You Will Learn</h3>
                  <ul style={{ color: "var(--muted)", lineHeight: 2, paddingLeft: 20 }}>
                    {post.keywords.slice(0, 4).map((k) => (
                      <li key={k} style={{ marginBottom: 4 }}>Complete understanding of <em>{k}</em></li>
                    ))}
                    <li>Practical application in daily Islamic life</li>
                    <li>How to teach this to your children</li>
                  </ul>
                </div>

                <p style={{ color: "var(--muted)", lineHeight: 1.8, marginBottom: 20 }}>
                  At NoorPath Academy, our certified tutors integrate topics like this into every Quran and Islamic studies lesson, ensuring students gain a complete Islamic education — not just recitation, but understanding and application.
                </p>

                <div style={{ background: "linear-gradient(135deg, #0a3d28, #0d5436)", borderRadius: 16, padding: 28, textAlign: "center", marginTop: 32 }}>
                  <h3 style={{ fontFamily: "'Playfair Display',serif", color: "#fff", fontSize: "1.3rem", marginBottom: 12 }}>Want to Learn More with a Certified Tutor?</h3>
                  <p style={{ color: "rgba(255,255,255,.75)", marginBottom: 20, fontSize: ".9rem" }}>
                    Book a free 30-minute trial class with one of our certified tutors and get personalised guidance.
                  </p>
                  <Link href="/online-quran-classes#cta" className="btn-primary-np">
                    Book Free Trial Class →
                  </Link>
                </div>
              </div>

              <Link href="/blog" style={{ display: "inline-flex", alignItems: "center", gap: 8, color: "var(--emerald)", fontWeight: 600, marginTop: 24, textDecoration: "none", fontSize: ".9rem" }}>
                <ArrowLeft size={16} /> Back to Blog
              </Link>
            </div>

            {/* Sidebar */}
            <div>
              {/* Related posts */}
              {related.length > 0 && (
                <div className="content-card" style={{ marginBottom: 20 }}>
                  <h3 style={{ fontFamily: "'Playfair Display',serif", fontSize: "1.1rem", color: "var(--charcoal)", marginBottom: 16 }}>Related Articles</h3>
                  <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                    {related.map((r) => (
                      <Link key={r.slug} href={`/blog/${r.slug}`} style={{ textDecoration: "none", padding: "12px 0", borderBottom: "1px solid var(--border)" }}>
                        <div style={{ fontSize: ".82rem", color: "var(--emerald)", fontWeight: 600, marginBottom: 4 }}>{r.category}</div>
                        <div style={{ fontSize: ".88rem", color: "var(--charcoal)", fontWeight: 600, lineHeight: 1.4 }}>{r.title.split("—")[0].trim()}</div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* CTA card */}
              <div style={{ background: "linear-gradient(135deg, #0a3d28, #0d5436)", borderRadius: 20, padding: 24, textAlign: "center" }}>
                <div style={{ fontSize: "2rem", marginBottom: 12 }}>🕌</div>
                <h3 style={{ fontFamily: "'Playfair Display',serif", color: "#fff", fontSize: "1.1rem", marginBottom: 10 }}>Start Learning Quran Online</h3>
                <p style={{ color: "rgba(255,255,255,.75)", fontSize: ".83rem", marginBottom: 18, lineHeight: 1.6 }}>Free 30-minute trial. Certified tutors. No credit card required.</p>
                <Link href="/online-quran-classes#cta" style={{ display: "block", background: "var(--gold)", color: "var(--charcoal)", padding: "11px", borderRadius: 10, fontWeight: 700, textDecoration: "none", fontSize: ".88rem" }}>
                  Book Free Trial →
                </Link>
              </div>

              {/* All posts */}
              <div className="content-card" style={{ marginTop: 20 }}>
                <h3 style={{ fontFamily: "'Playfair Display',serif", fontSize: "1rem", color: "var(--charcoal)", marginBottom: 14 }}>All Articles</h3>
                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 8 }}>
                  {blogPosts.slice(0, 8).map((p) => (
                    <li key={p.slug}>
                      <Link href={`/blog/${p.slug}`} style={{ color: "var(--emerald)", fontSize: ".83rem", textDecoration: "none", fontWeight: p.slug === post.slug ? 700 : 400 }}>
                        → {p.title.split("—")[0].trim().substring(0, 45)}...
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
