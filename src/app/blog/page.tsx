import type { Metadata } from "next";
import Link from "next/link";
import { blogPosts } from "@/data/blog";
import BlogSearchList from "@/components/BlogSearchList";

export const revalidate = false;

export const metadata: Metadata = {
  title: {
    absolute: "Islamic Blog 2026 — Quran Learning, Duas & Parent Guides",
  },
  description:
    "✓ Expert Islamic blog for Muslim families ✓ Quran learning tips, authentic duas for kids, Tajweed guides & Islamic parenting. 100+ articles by Faisal Tariq.",
  alternates: { canonical: "https://www.noorpath.online/blog" },
  openGraph: {
    title: "Islamic Blog 2026 — Quran Learning & Islamic Guides | NoorPath",
    description: "✓ Expert-written Islamic articles on Quran learning, Tajweed, duas for kids, and Islamic parenting for families worldwide.",
    url: "https://www.noorpath.online/blog",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "NoorPath Academy Islamic Blog" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Islamic Blog 2026 — Quran & Islamic Guides",
    description: "Quran learning guides, duas for kids, Tajweed tips, Islamic parenting and more.",
    images: ["/og-image.png"],
  },
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
            {[[String(blogPosts.length),"Articles"],["9","Categories"],["Quran","Learning Guides"],["Free","Article Access"]].map(([n,l]) => (
              <div key={l} style={{ background: "rgba(255,255,255,.08)", border: "1px solid rgba(255,255,255,.14)", borderRadius: 12, padding: "8px 18px" }}>
                <span style={{ color: "var(--gold-lt)", fontWeight: 800, fontSize: "1.1rem" }}>{n}</span>
                <span style={{ color: "rgba(255,255,255,.55)", fontSize: ".78rem", marginLeft: 6 }}>{l}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Author attribution */}
      <section style={{ paddingBottom: 0 }}>
        <div className="max-w-[1200px] mx-auto px-4">
          <div style={{ display: "flex", alignItems: "center", gap: 14, background: "var(--ivory)", border: "1px solid var(--border)", borderRadius: 16, padding: "16px 20px", marginBottom: 8 }}>
            <div style={{ width: 48, height: 48, borderRadius: "50%", background: "linear-gradient(135deg,#0a6e4f,#c9922a)", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontWeight: 800, fontSize: "1rem", flexShrink: 0 }}>FT</div>
            <div>
              <div style={{ fontWeight: 700, color: "var(--charcoal)", fontSize: ".93rem" }}>All articles written by <Link href="/founder" style={{ color: "var(--emerald)", textDecoration: "none" }}>Faisal Tariq</Link></div>
              <div style={{ color: "var(--muted)", fontSize: ".8rem", marginTop: 2 }}>Founder, NoorPath Academy · Islamic Education Specialist · 8+ years experience</div>
            </div>
            <div style={{ marginLeft: "auto", flexShrink: 0, display: "flex", gap: 8 }}>
              <span style={{ background: "rgba(10,110,79,.08)", color: "var(--emerald)", borderRadius: 50, padding: "4px 12px", fontSize: ".74rem", fontWeight: 700 }}>{sorted.length} Articles</span>
            </div>
          </div>
        </div>
      </section>

      {/* Searchable article list — grid is prerendered, search/filter hydrate on top */}
      <BlogSearchList
        posts={sorted.map((p) => ({
          slug: p.slug, title: p.title, excerpt: p.excerpt, category: p.category,
          author: p.author, readTime: p.readTime, keywords: p.keywords,
        }))}
      />

      {/* CTA */}
      <section className="cta-section">
        <div className="max-w-[1200px] mx-auto px-4 text-center">
          <h2 style={{ fontFamily: "'Playfair Display',serif", color: "#fff", fontSize: "2rem", marginBottom: 16 }}>
            Ready to Start Learning the Quran?
          </h2>
          <p style={{ color: "rgba(255,255,255,.75)", marginBottom: 28 }}>Explore live one-to-one Quran classes and request a free 30-minute trial before enrolment.</p>
          <Link href="/free-quran-classes-online" className="btn-primary-np">Book Free Trial Class →</Link>
        </div>
      </section>
    </>
  );
}
