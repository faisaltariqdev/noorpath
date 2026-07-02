import type { Metadata } from "next";
import Link from "next/link";
import { blogPosts } from "@/data/blog";
import { BookOpen, Clock } from "lucide-react";

export const revalidate = false;

export const metadata: Metadata = {
  title: "Islamic Blog — Quran Learning, Duas & Islamic Knowledge",
  description: "Islamic articles and guides covering Quran learning, Tajweed, duas for kids, Islamic parenting, and more. Expert-written content for Muslim families worldwide.",
  alternates: { canonical: "https://www.noorpath.online/blog" },
  openGraph: {
    title: "Islamic Blog — Quran Learning, Duas & Islamic Knowledge | NoorPath Academy",
    description: "Expert-written Islamic articles on Quran learning, Tajweed, duas for kids, and Islamic parenting for families worldwide.",
    url: "https://www.noorpath.online/blog",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "NoorPath Academy Islamic Blog" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Islamic Blog | NoorPath Academy",
    description: "Quran learning guides, duas for kids, Tajweed tips, Islamic parenting and more.",
    images: ["/og-image.png"],
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
          <p>Expert-written guides by <strong style={{ color: "var(--gold-lt)" }}>Faisal Tariq</strong> — on Quran learning, Tajweed, duas, Islamic parenting, and more — helping Muslim families worldwide.</p>
          {/* Stats */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: 12, marginTop: 20 }}>
            {[["24","Articles"],["9","Categories"],["12K+","Monthly Readers"],["Free","Always"]].map(([n,l]) => (
              <div key={l} style={{ background: "rgba(255,255,255,.08)", border: "1px solid rgba(255,255,255,.14)", borderRadius: 12, padding: "8px 18px" }}>
                <span style={{ color: "var(--gold-lt)", fontWeight: 800, fontSize: "1.1rem" }}>{n}</span>
                <span style={{ color: "rgba(255,255,255,.55)", fontSize: ".78rem", marginLeft: 6 }}>{l}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Category pills */}
      <div style={{ background: "#fff", borderBottom: "1px solid var(--border)", padding: "18px 0", position: "sticky", top: 0, zIndex: 50 }}>
        <div className="max-w-[1200px] mx-auto px-4">
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8, alignItems: "center" }}>
            <span style={{ color: "var(--muted)", fontSize: ".8rem", fontWeight: 600, marginRight: 4 }}>Browse by:</span>
            {["All", "Quran Learning", "Tajweed", "Prayers & Duas", "Islamic Knowledge", "Hifz & Memorization", "Kids & Parenting", "Online Learning"].map((cat) => (
              <a key={cat} href={cat === "All" ? "/blog" : `#cat-${cat.toLowerCase().replace(/\s+/g,"-")}`}
                style={{ background: "rgba(10,110,79,.07)", border: "1px solid rgba(10,110,79,.18)", borderRadius: 50, padding: "5px 14px", fontSize: ".78rem", color: "var(--emerald)", fontWeight: 600, textDecoration: "none", cursor: "pointer" }}>
                {cat}
              </a>
            ))}
          </div>
        </div>
      </div>

      <section>
        <div className="max-w-[1200px] mx-auto px-4">
          {/* Author attribution */}
          <div style={{ display: "flex", alignItems: "center", gap: 14, background: "var(--ivory)", border: "1px solid var(--border)", borderRadius: 16, padding: "16px 20px", marginBottom: 36 }}>
            <div style={{ width: 48, height: 48, borderRadius: "50%", background: "linear-gradient(135deg,#0a6e4f,#c9922a)", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontWeight: 800, fontSize: "1rem", flexShrink: 0 }}>FT</div>
            <div>
              <div style={{ fontWeight: 700, color: "var(--charcoal)", fontSize: ".93rem" }}>All articles written by <Link href="/founder" style={{ color: "var(--emerald)", textDecoration: "none" }}>Faisal Tariq</Link></div>
              <div style={{ color: "var(--muted)", fontSize: ".8rem", marginTop: 2 }}>Founder, NoorPath Academy · Islamic Education Specialist · 8+ years experience</div>
            </div>
            <div style={{ marginLeft: "auto", flexShrink: 0, display: "flex", gap: 8 }}>
              <span style={{ background: "rgba(10,110,79,.08)", color: "var(--emerald)", borderRadius: 50, padding: "4px 12px", fontSize: ".74rem", fontWeight: 700 }}>24 Articles</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sorted.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} style={{ textDecoration: "none" }}>
                <article className="blog-card" id={`cat-${post.category.toLowerCase().replace(/\s+/g,"-")}`}>
                  <div className="blog-card-header">
                    <span className="blog-tag" style={{ background: `${categoryColors[post.category] || "#0a6e4f"}20`, color: categoryColors[post.category] || "#0a6e4f" }}>
                      {post.category}
                    </span>
                    <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: "1.05rem", fontWeight: 700, color: "#fff", lineHeight: 1.4, margin: 0, marginTop: 8 }}>
                      {post.title}
                    </h2>
                  </div>
                  <div className="blog-card-body">
                    <p style={{ color: "var(--muted)", fontSize: ".85rem", lineHeight: 1.7, marginBottom: 14 }}>{post.excerpt}</p>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: ".76rem", color: "var(--muted)", paddingTop: 10, borderTop: "1px solid var(--border)" }}>
                      <span style={{ display: "flex", alignItems: "center", gap: 4 }}>
                        <div style={{ width: 18, height: 18, borderRadius: "50%", background: "linear-gradient(135deg,#0a6e4f,#c9922a)", display: "inline-flex", alignItems: "center", justifyContent: "center", color: "#fff", fontSize: ".6rem", fontWeight: 700 }}>FT</div>
                        {post.author}
                      </span>
                      <span style={{ display: "flex", alignItems: "center", gap: 4 }}><Clock size={12} /> {post.readTime}</span>
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
