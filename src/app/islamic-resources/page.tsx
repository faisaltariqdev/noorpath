import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Free Islamic Resources — Quran PDFs, Duas, Hadith & Learning Materials | NoorPath",
  description: "Free Islamic educational resources: Quran learning guides, printable duas, Tajweed charts, Islamic studies materials, and learning tools for Muslim families worldwide.",
  alternates: { canonical: "https://www.noorpath.online/islamic-resources" },
  openGraph: {
    title: "Free Islamic Resources — Quran, Duas & Learning Materials | NoorPath Academy",
    description: "Free downloadable Islamic resources: Quran learning guides, duas for kids, Tajweed charts, and more. 100% free for Muslim families worldwide.",
    url: "https://www.noorpath.online/islamic-resources",
    images: [{ url: "/og-image.svg", width: 1200, height: 630, alt: "Free Islamic Resources — NoorPath Academy" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Islamic Resources | NoorPath Academy",
    description: "Free Quran learning guides, duas for kids, Tajweed charts and more — 100% free.",
    images: ["/og-image.svg"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.noorpath.online" },
        { "@type": "ListItem", position: 2, name: "Islamic Resources", item: "https://www.noorpath.online/islamic-resources" },
      ],
    },
    {
      "@type": "CollectionPage",
      name: "Free Islamic Educational Resources",
      description: "Free Islamic resources including Quran learning guides, duas for kids, Tajweed charts, and Islamic studies materials.",
      url: "https://www.noorpath.online/islamic-resources",
      publisher: { "@type": "Organization", name: "NoorPath Academy", url: "https://www.noorpath.online" },
    },
  ],
};

const resourceCategories = [
  {
    icon: "📖",
    title: "Quran Learning Guides",
    color: "#0a6e4f",
    resources: [
      { title: "Noorani Qaida Complete Guide", desc: "Step-by-step guide from Arabic letters to Quran reading", href: "/blog/noorani-qaida-complete-guide", type: "Article" },
      { title: "Tajweed Rules for Beginners", desc: "All major Tajweed rules with Arabic examples", href: "/blog/tajweed-rules-complete-guide", type: "Article" },
      { title: "How to Memorize Quran Faster", desc: "12 proven Hifz techniques used by Huffaz worldwide", href: "/blog/how-to-memorize-quran-faster", type: "Article" },
      { title: "Online Quran for Beginners Guide", desc: "Complete roadmap from zero to Quran reading", href: "/online-quran-for-beginners", type: "Guide" },
    ],
  },
  {
    icon: "🤲",
    title: "Duas & Dhikr",
    color: "#c9922a",
    resources: [
      { title: "20 Essential Duas for Kids", desc: "Daily duas with Arabic, transliteration & English", href: "/blog/duas-for-kids-to-memorize", type: "Article" },
      { title: "Dua e Qunoot — Full Guide", desc: "Arabic text, English meaning, when to recite", href: "/blog/dua-e-qunoot-arabic-english", type: "Article" },
      { title: "Alhamdulillah — Full Meaning", desc: "Complete explanation with benefits and usage", href: "/blog/alhamdulillah-meaning-in-english", type: "Article" },
      { title: "Astaghfirullah — Complete Guide", desc: "When to say it, how many times, benefits", href: "/blog/astaghfirullah-meaning", type: "Article" },
    ],
  },
  {
    icon: "📿",
    title: "Quran Surahs",
    color: "#6366f1",
    resources: [
      { title: "Surah Al-Fatiha — Arabic & English", desc: "Full text, word-by-word translation, tafsir", href: "/blog/surah-al-fatiha-arabic-english", type: "Article" },
      { title: "Surah Al-Kahf — Arabic & English", desc: "Full text + why to read on Fridays", href: "/blog/surah-al-kahf-arabic-english-friday", type: "Article" },
      { title: "Surah Yaseen — Arabic & English", desc: "Full text with translation and benefits", href: "/blog/surah-yaseen-arabic-english", type: "Article" },
      { title: "Ayatul Kursi — Arabic & English", desc: "Full text, translation and spiritual benefits", href: "/blog/ayatul-kursi-arabic-english-benefits", type: "Article" },
    ],
  },
  {
    icon: "🕌",
    title: "Prayer & Worship",
    color: "#0d9488",
    resources: [
      { title: "How to Pray Salah — Full Guide", desc: "Step-by-step with Arabic, transliteration, positions", href: "/blog/how-to-pray-salah-step-by-step", type: "Article" },
      { title: "How to Do Wudu — Step by Step", desc: "Complete guide with duas and common mistakes", href: "/blog/how-to-do-wudu-step-by-step", type: "Article" },
      { title: "Five Pillars of Islam — Full Guide", desc: "Shahada, Salah, Zakat, Sawm, Hajj with Quran evidence", href: "/blog/five-pillars-of-islam-explained", type: "Article" },
      { title: "99 Names of Allah — Full Guide", desc: "Arabic text, meanings and memorization tips", href: "/blog/99-names-of-allah-asmaul-husna", type: "Article" },
    ],
  },
  {
    icon: "👶",
    title: "For Children & Parents",
    color: "#f43f5e",
    resources: [
      { title: "Best Age to Start Quran Learning", desc: "Expert guide on when to begin Quran education", href: "/blog/best-age-to-start-quran-learning", type: "Article" },
      { title: "How to Teach Quran to Kids", desc: "Proven methods, routines and reward systems", href: "/blog/how-to-teach-quran-to-kids", type: "Article" },
      { title: "Islamic Baby Names 2026", desc: "200+ Arabic names with meanings for boys & girls", href: "/blog/islamic-baby-names-2026", type: "Article" },
      { title: "Quran Classes for Kids", desc: "Structured programme for ages 4-14", href: "/courses/quran-classes-for-kids", type: "Course" },
    ],
  },
  {
    icon: "🌍",
    title: "Islamic Knowledge",
    color: "#8b5cf6",
    resources: [
      { title: "Islamic Quotes in English & Arabic", desc: "150+ inspiring quotes from Quran and Hadith", href: "/blog/islamic-quotes-in-english-arabic", type: "Article" },
      { title: "Islamic Dream Interpretation", desc: "Dreams in Islam based on Quran and Ibn Sirin", href: "/blog/islamic-dream-interpretation", type: "Article" },
      { title: "Signs of Qiyamah — Full Guide", desc: "Major and minor signs of the Day of Judgment", href: "/blog/signs-of-qiyamah", type: "Article" },
      { title: "Mashallah — Meaning & Usage", desc: "When to say it and why it protects from evil eye", href: "/blog/mashallah-meaning", type: "Article" },
    ],
  },
];

const typeColor: Record<string, string> = {
  Article: "#0a6e4f",
  Guide: "#c9922a",
  Course: "#6366f1",
};

export default function IslamicResourcesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero */}
      <div className="page-hero">
        <div className="max-w-[1200px] mx-auto px-4 page-hero-content">
          <nav aria-label="Breadcrumb" style={{ marginBottom: 16 }}>
            <Link href="/" style={{ color: "var(--gold-lt)", fontSize: ".85rem" }}>Home</Link>
            <span style={{ color: "rgba(255,255,255,.4)", margin: "0 8px" }}>›</span>
            <span style={{ color: "rgba(255,255,255,.6)", fontSize: ".85rem" }}>Islamic Resources</span>
          </nav>
          <span className="section-eyebrow" style={{ background: "rgba(255,255,255,.1)", color: "rgba(255,255,255,.9)", borderColor: "rgba(255,255,255,.2)" }}>
            📚 100% Free Resources
          </span>
          <h1 style={{ marginTop: 14, maxWidth: 760 }}>
            Free Islamic Educational <em style={{ color: "var(--gold-lt)" }}>Resources</em> for Every Muslim
          </h1>
          <p style={{ color: "rgba(255,255,255,.8)", maxWidth: 620, lineHeight: 1.75, marginTop: 14 }}>
            Quran learning guides, surahs with translations, duas for kids, prayer guides, Tajweed rules, and more — all free, written by certified Islamic educators.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginTop: 24 }}>
            {["📖 Quran Guides","🤲 Duas & Dhikr","🕌 Prayer","👶 For Children","🌍 Islamic Knowledge","📿 Full Surahs"].map((tag) => (
              <span key={tag} style={{ background: "rgba(255,255,255,.1)", border: "1px solid rgba(255,255,255,.15)", borderRadius: 50, padding: "5px 14px", color: "rgba(255,255,255,.9)", fontSize: ".8rem" }}>{tag}</span>
            ))}
          </div>
        </div>
      </div>

      {/* Resources grid */}
      <section style={{ background: "#fff" }}>
        <div className="max-w-[1200px] mx-auto px-4">
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <span className="section-eyebrow">📚 Browse by Category</span>
            <h2 className="section-title">All Free <em className="accent">Islamic Resources</em></h2>
            <p className="section-desc center">Written and reviewed by certified Quran teachers and Islamic educators. Share freely — no copyright restrictions.</p>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 48 }}>
            {resourceCategories.map((cat) => (
              <div key={cat.title}>
                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 24, paddingBottom: 14, borderBottom: `3px solid ${cat.color}` }}>
                  <span style={{ fontSize: "1.6rem" }}>{cat.icon}</span>
                  <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: "1.35rem", color: "var(--charcoal)", margin: 0 }}>{cat.title}</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {cat.resources.map((r) => (
                    <Link key={r.title} href={r.href} style={{ textDecoration: "none", display: "block" }}>
                      <div className="resource-card" style={{ background: "var(--ivory)", border: "1.5px solid var(--border)", borderRadius: 14, padding: 20, height: "100%" }}>
                        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 10 }}>
                          <span style={{ background: `${cat.color}18`, color: cat.color, borderRadius: 50, padding: "3px 10px", fontSize: ".7rem", fontWeight: 700 }}>{r.type}</span>
                          <span style={{ color: cat.color, fontSize: "1rem" }}>→</span>
                        </div>
                        <h3 style={{ fontFamily: "'Playfair Display',serif", fontSize: ".93rem", fontWeight: 700, color: "var(--charcoal)", marginBottom: 6, lineHeight: 1.35 }}>{r.title}</h3>
                        <p style={{ color: "var(--muted)", fontSize: ".8rem", lineHeight: 1.6, margin: 0 }}>{r.desc}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Share CTA */}
      <section style={{ background: "var(--ivory)", borderTop: "1px solid var(--border)" }}>
        <div className="max-w-[1200px] mx-auto px-4">
          <div style={{ background: "linear-gradient(135deg, #0a6e4f, #065038)", borderRadius: 24, padding: "40px 36px", display: "flex", flexWrap: "wrap", alignItems: "center", gap: 24 }}>
            <div style={{ flex: 1, minWidth: 280 }}>
              <h2 style={{ fontFamily: "'Playfair Display',serif", color: "#fff", fontSize: "1.6rem", marginBottom: 10 }}>
                Share These Resources — Sadaqah Jaariyah 🌟
              </h2>
              <p style={{ color: "rgba(255,255,255,.8)", lineHeight: 1.7, margin: 0, fontSize: ".93rem" }}>
                Share this page with fellow Muslims. Every person who benefits from these resources is sadaqah jaariyah (ongoing charity) for you. Share freely.
              </p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              <Link href="/online-quran-classes#cta" style={{ display: "inline-block", background: "var(--gold)", color: "var(--charcoal)", fontWeight: 700, padding: "13px 28px", borderRadius: 50, textDecoration: "none", fontSize: ".9rem", whiteSpace: "nowrap", textAlign: "center" }}>
                🎓 Book a Free Quran Class →
              </Link>
              <Link href="/blog" style={{ display: "inline-block", background: "rgba(255,255,255,.1)", color: "#fff", fontWeight: 600, padding: "13px 28px", borderRadius: 50, textDecoration: "none", fontSize: ".9rem", textAlign: "center", border: "1px solid rgba(255,255,255,.2)" }}>
                Read All 24 Blog Articles →
              </Link>
            </div>
          </div>

          {/* Quick internal links for SEO */}
          <div style={{ marginTop: 48, paddingTop: 32, borderTop: "1px solid var(--border)" }}>
            <h3 style={{ fontFamily: "'Playfair Display',serif", fontSize: "1rem", color: "var(--charcoal)", marginBottom: 16 }}>Explore Our Courses</h3>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
              {[
                ["/courses/noorani-qaida-online", "Noorani Qaida Online"],
                ["/courses/tajweed-classes-online", "Tajweed Classes"],
                ["/courses/hifz-program-online", "Hifz Memorization"],
                ["/courses/quran-classes-for-kids", "Quran for Kids"],
                ["/courses/arabic-language-online", "Arabic Language"],
                ["/courses/islamic-studies-online", "Islamic Studies"],
                ["/female-quran-teacher-online", "Female Quran Teacher"],
                ["/quran-teacher-online", "Find a Quran Teacher"],
                ["/free-quran-classes-online", "Free Trial Class"],
                ["/online-quran-for-beginners", "Quran for Beginners"],
              ].map(([href, label]) => (
                <Link key={label} href={href} style={{ background: "rgba(10,110,79,.07)", border: "1px solid rgba(10,110,79,.15)", borderRadius: 50, padding: "6px 14px", fontSize: ".8rem", color: "var(--emerald)", fontWeight: 600, textDecoration: "none" }}>
                  {label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
