import Link from "next/link";
import { Gamepad2, FileDown, ArrowRight, Sparkles } from "lucide-react";

export interface QaidaResourceItem {
  title: string;
  href: string;
  category: "Game" | "Worksheet" | "Guide";
  description: string;
}

export const ALL_QAIDA_RESOURCES: QaidaResourceItem[] = [
  {
    title: "Arabic Letter Sound Quiz",
    href: "/noorani-qaida/games/arabic-letter-sound-quiz",
    category: "Game",
    description: "Match Arabic letter shapes to correct pronunciation and makhraj sound cues.",
  },
  {
    title: "Makharij Articulation Quiz",
    href: "/noorani-qaida/games/makharij-quiz",
    category: "Game",
    description: "Test your knowledge of the 5 primary throat, tongue, and lip articulation points.",
  },
  {
    title: "Arabic Harakat Quiz",
    href: "/noorani-qaida/games/harakat-quiz",
    category: "Game",
    description: "Practise identifying Fatha, Kasra, and Damma on letters with instant feedback.",
  },
  {
    title: "Arabic Letters Tracing Worksheet",
    href: "/noorani-qaida/worksheets/arabic-letters-tracing",
    category: "Worksheet",
    description: "Free printable handwriting practice for all 28 Arabic letters with stroke arrows.",
  },
  {
    title: "Noorani Qaida Harakat Worksheet",
    href: "/noorani-qaida/worksheets/harakat-worksheet",
    category: "Worksheet",
    description: "Printable offline drills for short vowels, matching exercises, and reading practice.",
  },
  {
    title: "Tanween Practice Quiz",
    href: "/noorani-qaida/games/tanween-quiz",
    category: "Game",
    description: "Master double vowel endings (Fathatain, Kasratain, Dammatain) with fun rounds.",
  },
  {
    title: "Madd Letters Worksheet",
    href: "/noorani-qaida/worksheets/madd-worksheet",
    category: "Worksheet",
    description: "Printable 2-count long vowel practice for Alif, Waw, and Yaa elongation rules.",
  },
  {
    title: "Sukoon & Jazm Quiz",
    href: "/noorani-qaida/games/sukoon-quiz",
    category: "Game",
    description: "Learn to stop on consonants cleanly and identify the 5 Qalqalah bouncing letters.",
  },
  {
    title: "Shaddah Doubled Letter Quiz",
    href: "/noorani-qaida/games/shaddah-quiz",
    category: "Game",
    description: "Practice Tashdeed hold-and-release rules and mandatory 2-count Ghunnah.",
  },
  {
    title: "Tanween Practice Worksheet",
    href: "/noorani-qaida/worksheets/tanween-worksheet",
    category: "Worksheet",
    description: "Printable noon-sakinah sound drills and word ending identification grids.",
  },
  {
    title: "Joining Letters Quiz",
    href: "/noorani-qaida/games/joining-letters-quiz",
    category: "Game",
    description: "Test recognition of initial, medial, and final cursive Arabic letter forms.",
  },
  {
    title: "Word Reading Blending Quiz",
    href: "/noorani-qaida/games/word-reading-quiz",
    category: "Game",
    description: "Blend letters, short vowels, and Sukoon into complete Quranic words.",
  },
];

export default function QaidaGamesWorksheetsGrid({
  currentHref = "",
  limit = 6,
}: {
  currentHref?: string;
  limit?: number;
}) {
  // Filter out the current page if matching, then take `limit` items
  const filtered = ALL_QAIDA_RESOURCES.filter(
    (item) => item.href !== currentHref
  ).slice(0, limit);

  return (
    <section className="qaida-section" aria-labelledby="qaida-more-resources-heading">
      <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
        <Sparkles size={18} style={{ color: "var(--emerald)" }} aria-hidden="true" />
        <span className="qaida-eyebrow" style={{ margin: 0 }}>
          Interactive Practice & Free Printables
        </span>
      </div>
      <h2 id="qaida-more-resources-heading" style={{ fontSize: "1.65rem", fontWeight: 750, color: "var(--charcoal)", marginBottom: 10 }}>
        More Noorani Qaida Games &amp; Worksheets
      </h2>
      <p style={{ color: "var(--slate)", fontSize: ".96rem", lineHeight: 1.65, maxWidth: 760, marginBottom: 24 }}>
        Reinforce Arabic reading skills between lessons. Explore our collection of free interactive browser games,
        phonics quizzes, and printable PDF worksheets designed for calm practice at home.
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "1.2rem",
          marginTop: "1.2rem",
        }}
      >
        {filtered.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="qaida-card"
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              padding: "1.4rem",
              borderRadius: "14px",
              border: "1px solid var(--border)",
              background: "#ffffff",
              textDecoration: "none",
              transition: "transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease",
            }}
          >
            <div>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
                <span
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 6,
                    padding: "4px 10px",
                    borderRadius: "20px",
                    fontSize: ".75rem",
                    fontWeight: 700,
                    textTransform: "uppercase",
                    letterSpacing: ".5px",
                    background: item.category === "Game" ? "rgba(10,110,79,.08)" : "rgba(201,146,42,.12)",
                    color: item.category === "Game" ? "var(--emerald)" : "#a36e18",
                  }}
                >
                  {item.category === "Game" ? <Gamepad2 size={13} aria-hidden="true" /> : <FileDown size={13} aria-hidden="true" />}
                  {item.category}
                </span>
                <span style={{ fontSize: ".76rem", color: "var(--slate)", fontWeight: 500 }}>
                  Free · No login
                </span>
              </div>
              <h3 style={{ fontSize: "1.08rem", fontWeight: 700, color: "var(--charcoal)", marginBottom: 8, lineHeight: 1.35 }}>
                {item.title}
              </h3>
              <p style={{ fontSize: ".88rem", color: "var(--slate)", lineHeight: 1.6, margin: 0 }}>
                {item.description}
              </p>
            </div>
            <div style={{ marginTop: "1.2rem", display: "inline-flex", alignItems: "center", gap: 6, fontSize: ".84rem", fontWeight: 700, color: "var(--emerald)" }}>
              <span>{item.category === "Game" ? "Play interactive quiz" : "Download printable PDF"}</span>
              <ArrowRight size={15} aria-hidden="true" />
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
