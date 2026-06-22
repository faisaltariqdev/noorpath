import type { Metadata } from "next";
import Link from "next/link";
import { blogPosts } from "@/data/blog";
import { BookOpen, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Islamic Blog — Quran Learning, Duas & Islamic Knowledge",
  description: "Islamic articles and guides covering Quran learning, Tajweed, duas for kids, Islamic parenting, and more. Expert-written content for Muslim families worldwide.",
  alternates: { canonical: "https://www.noorpath.online/blog" },
  openGraph: {
    title: "Islamic Blog — Quran Learning, Duas & Islamic Knowledge | NoorPath Academy",
    description: "Expert-written Islamic articles on Quran learning, Tajweed, duas for kids, and Islamic parenting for families worldwide.",
    url: "https://www.noorpath.online/blog",
    images: [{ url: "/og-image.svg", width: 1200, height: 630, alt: "NoorPath Academy Islamic Blog" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Islamic Blog | NoorPath Academy",
    description: "Quran learning guides, duas for kids, Tajweed tips, Islamic parenting and more.",
    images: ["/og-image.svg"],
  },
};

const categoryColors: Record<string, string> = {
  "Quran": "#0a6e4f",
  "Tajweed": "#0f8f66",
  "Hifz & Memorization": "#c9922a",
  "Kids & Parenting": "#6366f1",
  "Dhikr & Duas": "#0d9488",
  "Prayers & Duas": "#f43f5e",
  "Islamic Knowledge": "#8b5cf6",
  "Prayer & Worship": "#0a6e4f",
  "Online Learning": "#0f8f66",
  "Parenting & Education": "#c9922a",
  "Quran Learning": "#0a6e4f",
  "Islamic Culture": "#8b5cf6",
};

const blogJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "CollectionPage",
      "@id": "https://www.noorpath.online/blog",
      name: "NoorPath Academy Islamic Blog",
      description: "Expert-written Islamic articles on Quran learning, Tajweed, duas for kids, and Islamic parenting.",
      url: "https://www.noorpath.online/blog",
      publisher: { "@type": "Organization", name: "NoorPath Academy", url: "https://www.noorpath.online" },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.noorpath.online" },
        { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.noorpath.online/blog" },
      ],
    },
  ],
};

export default function BlogPage() {
  const sorted = [...blogPosts].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogJsonLd) }} />

      <div className="page-hero">
        <div className="max-w-[1200px] mx-auto px-4 page-hero-content">
          <nav aria-label="Breadcrumb" style={{ marginBottom: 16 }}>
            <Link href="/" style={{ color: "var(--gold-lt)", fontSize: ".85rem" }}>Home</Link>
            <span style={{ color: "rgba(255,255,255,.4)", margin: "0 8px" }}>›</span>
            <span style={{ color: "rgba(255,255,255,.6)", fontSize: ".85rem" }}>Blog</span>
          </nav>
          <h1>Islamic Blog & Quran Learning Resources</h1>
          <p>Expert-written guides on Quran learning, Tajweed, duas, Islamic parenting, and more — helping Muslim families worldwide.</p>
        </div>
      </div>

      <section>
        <div className="max-w-[1200px] mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sorted.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} style={{ textDecoration: "none" }}>
                <article className="blog-card">
                  <div className="blog-card-header">
                    <span className="blog-tag" style={{ background: `${categoryColors[post.category] || "#0a6e4f"}20`, color: categoryColors[post.category] || "#0a6e4f" }}>
                      {post.category}
                    </span>
                    <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: "1.1rem", fontWeight: 700, color: "#fff", lineHeight: 1.4, margin: 0, marginTop: 8 }}>
                      {post.title}
                    </h2>
                  </div>
                  <div className="blog-card-body">
                    <p style={{ color: "var(--muted)", fontSize: ".87rem", lineHeight: 1.7, marginBottom: 16 }}>{post.excerpt}</p>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: ".78rem", color: "var(--muted)" }}>
                      <span style={{ display: "flex", alignItems: "center", gap: 4 }}><BookOpen size={13} /> {new Date(post.date).toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" })}</span>
                      <span style={{ display: "flex", alignItems: "center", gap: 4 }}><Clock size={13} /> {post.readTime} read</span>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="max-w-[1200px] mx-auto px-4 text-center">
          <h2 style={{ fontFamily: "'Playfair Display',serif", color: "#fff", fontSize: "2rem", marginBottom: 16 }}>
            Ready to Start Learning the Quran?
          </h2>
          <p style={{ color: "rgba(255,255,255,.75)", marginBottom: 28 }}>Join 12,000+ students worldwide with a free 30-minute trial class.</p>
          <Link href="/online-quran-classes#cta" className="btn-primary-np">Book Free Trial Class →</Link>
        </div>
      </section>
    </>
  );
}
