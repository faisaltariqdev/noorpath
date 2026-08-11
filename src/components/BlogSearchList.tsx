"use client";

import { Suspense, useEffect, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { Clock, Search, X } from "lucide-react";

export interface BlogListItem {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  readTime: string;
  keywords: string[];
}

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

const CATEGORIES = [
  "All", "Quran Learning", "Dhikr & Duas", "Islamic Knowledge",
  "Hifz & Memorization", "Prayer & Worship", "Kids & Parenting",
];

/**
 * Reading `?q=` opts a subtree out of prerendering. It is isolated in its own
 * Suspense boundary so the article grid stays in the statically rendered HTML
 * and every post link remains crawlable without JavaScript.
 */
function QueryParamSync({ onQuery }: { onQuery: (value: string) => void }) {
  const searchParams = useSearchParams();
  const q = searchParams.get("q") ?? "";

  useEffect(() => {
    if (q) onQuery(q);
  }, [q, onQuery]);

  return null;
}

export default function BlogSearchList({ posts }: { posts: BlogListItem[] }) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return posts.filter((p) => {
      if (category !== "All" && p.category !== category) return false;
      if (!q) return true;
      return (
        p.title.toLowerCase().includes(q) ||
        p.excerpt.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q) ||
        p.keywords.some((k) => k.toLowerCase().includes(q))
      );
    });
  }, [posts, query, category]);

  return (
    <>
      <Suspense fallback={null}>
        <QueryParamSync onQuery={setQuery} />
      </Suspense>

      {/* Search + category bar */}
      <div style={{ background: "#fff", borderBottom: "1px solid var(--border)", padding: "16px 0", position: "sticky", top: 0, zIndex: 50 }}>
        <div className="max-w-[1200px] mx-auto px-4">
          <div style={{ display: "flex", flexWrap: "wrap", gap: 12, alignItems: "center" }}>
            {/* Search input */}
            <div style={{ position: "relative", flex: "1 1 260px", maxWidth: 420 }}>
              <Search size={16} style={{ position: "absolute", left: 14, top: "50%", transform: "translateY(-50%)", color: "var(--muted)" }} />
              <input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search articles — e.g. dua, tajweed, hifz…"
                aria-label="Search blog articles"
                style={{
                  width: "100%", padding: "10px 38px 10px 40px", borderRadius: 50,
                  border: "1.5px solid var(--border)", fontSize: ".88rem", outline: "none",
                  background: "var(--ivory)", color: "var(--charcoal)",
                }}
              />
              {query && (
                <button
                  onClick={() => setQuery("")}
                  aria-label="Clear search"
                  style={{ position: "absolute", right: 10, top: "50%", transform: "translateY(-50%)", background: "none", border: "none", cursor: "pointer", color: "var(--muted)", padding: 4, display: "flex" }}
                >
                  <X size={15} />
                </button>
              )}
            </div>
            {/* Category pills */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8, alignItems: "center" }}>
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setCategory(cat)}
                  style={{
                    background: category === cat ? "var(--emerald)" : "rgba(10,110,79,.07)",
                    border: "1px solid rgba(10,110,79,.18)", borderRadius: 50, padding: "5px 14px",
                    fontSize: ".78rem", color: category === cat ? "#fff" : "var(--emerald)",
                    fontWeight: 600, cursor: "pointer",
                  }}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <section>
        <div className="max-w-[1200px] mx-auto px-4">
          {/* Result count when searching */}
          {(query || category !== "All") && (
            <p style={{ color: "var(--muted)", fontSize: ".85rem", margin: "0 0 20px" }}>
              {filtered.length === 0
                ? "No articles found — try a different keyword like “dua”, “qaida” or “hifz”."
                : `${filtered.length} article${filtered.length === 1 ? "" : "s"} found`}
            </p>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} style={{ textDecoration: "none" }}>
                <article className="blog-card">
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
                        <span style={{ width: 18, height: 18, borderRadius: "50%", background: "linear-gradient(135deg,#0a6e4f,#c9922a)", display: "inline-flex", alignItems: "center", justifyContent: "center", color: "#fff", fontSize: ".6rem", fontWeight: 700 }}>FT</span>
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
    </>
  );
}
