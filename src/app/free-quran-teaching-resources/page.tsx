import type { Metadata } from "next";
import Link from "next/link";
import { QAIDA_GAMES, QAIDA_WORKSHEETS } from "@/data/noorani-qaida";
import { serializeJsonLd } from "@/lib/jsonLd";
import { BASE_URL, TRIAL_OFFER } from "@/lib/academyFacts";

export const revalidate = false;

const PATH = "/free-quran-teaching-resources";
const PAGE_URL = `${BASE_URL}${PATH}`;
const TITLE = "Free Quran Teaching Resources for Teachers & Mosques | NoorPath";
const DESCRIPTION =
  "Free Noorani Qaida games, printable worksheets, a Hifz planner and Islamic calculators for madrasah teachers, mosque classes and parents. No login.";

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: PAGE_URL,
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Free Quran teaching resources — NoorPath Academy" }],
  },
  twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION, images: ["/og-image.png"] },
};

interface Resource {
  title: string;
  desc: string;
  href: string;
}

/** Worksheet titles carry an SEO suffix ("— Free Printable PDF"); show the plain name here. */
const shortTitle = (title: string) => title.split(" — ")[0];

const sections: { id: string; eyebrow: string; title: string; intro: string; resources: Resource[] }[] = [
  {
    id: "games",
    eyebrow: "Madrasah and weekend classes",
    title: "Noorani Qaida games for the classroom",
    intro:
      "Short browser games that work on a classroom screen, a tablet or a parent's phone. Nothing to install and no accounts for children.",
    resources: QAIDA_GAMES.map((game) => ({ title: game.title, desc: game.summary, href: game.href })),
  },
  {
    id: "worksheets",
    eyebrow: "Homework between lessons",
    title: "Printable Noorani Qaida worksheets",
    intro: "Printable practice sheets for letters and vowel rules, for homework or a quiet table during class.",
    resources: QAIDA_WORKSHEETS.map((sheet) => ({ title: shortTitle(sheet.title), desc: sheet.summary, href: sheet.href })),
  },
  {
    id: "hifz",
    eyebrow: "Hifz students",
    title: "Hifz planning",
    intro: "Help students and parents plan new memorisation and revision. These are planning aids, not guaranteed timelines.",
    resources: [
      { title: "Quran Hifz planner", desc: "Daily sabaq and a Sabaq–Sabqi–Manzil revision layout.", href: "/tools/hifz-calculator" },
      { title: "Hifz revision schedule", desc: "A printable revision schedule infographic with source notes.", href: "/blog/hifz-revision-schedule" },
      { title: "Interactive Noorani Qaida hub", desc: "The full 11-module Qaida path and all 28 letter pages.", href: "/noorani-qaida" },
    ],
  },
  {
    id: "community",
    eyebrow: "Mosque and community use",
    title: "Islamic calculators and tools",
    intro: "Free tools that mosque newsletters and community pages often share with members.",
    resources: [
      { title: "Zakat calculator", desc: "Private calculator with published method notes.", href: "/tools/zakat-calculator" },
      { title: "Hijri date converter", desc: "Convert Gregorian and Hijri dates.", href: "/tools/hijri-date-converter" },
      { title: "Tasbeeh counter", desc: "A simple dhikr counter for phones.", href: "/tools/tasbeeh-counter" },
      { title: "Inheritance (Miras) calculator", desc: "A planning aid based on Surah An-Nisa 4:11–12 — not a legal ruling.", href: "/tools/inheritance-calculator" },
    ],
  },
];

const allResources = sections.flatMap((section) => section.resources);
const linkSnippet = `<a href="${PAGE_URL}">Free Quran teaching resources from NoorPath</a>`;

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
        { "@type": "ListItem", position: 2, name: "Islamic Resources", item: `${BASE_URL}/islamic-resources` },
        { "@type": "ListItem", position: 3, name: "Free Quran Teaching Resources", item: PAGE_URL },
      ],
    },
    {
      "@type": "CollectionPage",
      name: "Free Quran Teaching Resources",
      description: DESCRIPTION,
      url: PAGE_URL,
      publisher: { "@type": "Organization", name: "NoorPath Academy", url: BASE_URL },
    },
    {
      "@type": "ItemList",
      name: "Free Quran teaching resources",
      numberOfItems: allResources.length,
      itemListElement: allResources.map((resource, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: resource.title,
        url: `${BASE_URL}${resource.href}`,
      })),
    },
  ],
};

const tips = [
  "Model the letter or vowel sound yourself first, then use a game for five minutes as review.",
  "Use the progress checklist with parents to agree which letters need more practice at home.",
  "Send one worksheet home after a lesson, not a stack — a few minutes a day works better.",
  "Games and worksheets help recognition; pronunciation (makharij) still needs a teacher listening.",
];

export default function FreeQuranTeachingResourcesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeJsonLd(jsonLd) }} />

      <div className="page-hero">
        <div className="max-w-[1200px] mx-auto px-4 page-hero-content">
          <nav aria-label="Breadcrumb" style={{ marginBottom: 16 }}>
            <Link href="/" style={{ color: "var(--gold-lt)", fontSize: ".85rem" }}>Home</Link>
            <span style={{ color: "rgba(255,255,255,.4)", margin: "0 8px" }}>›</span>
            <Link href="/islamic-resources" style={{ color: "var(--gold-lt)", fontSize: ".85rem" }}>Islamic Resources</Link>
            <span style={{ color: "rgba(255,255,255,.4)", margin: "0 8px" }}>›</span>
            <span style={{ color: "rgba(255,255,255,.6)", fontSize: ".85rem" }}>Teaching Resources</span>
          </nav>
          <span className="section-eyebrow" style={{ background: "rgba(255,255,255,.1)", color: "rgba(255,255,255,.9)", borderColor: "rgba(255,255,255,.2)" }}>
            For teachers, mosques and parents
          </span>
          <h1 style={{ marginTop: 14, maxWidth: 820 }}>
            Free Quran Teaching <em style={{ color: "var(--gold-lt)" }}>Resources</em>
          </h1>
          <p style={{ color: "rgba(255,255,255,.8)", maxWidth: 660, lineHeight: 1.75, marginTop: 14 }}>
            Noorani Qaida games, printable worksheets, a Hifz planner and Islamic calculators for madrasah teachers,
            mosque classes, Islamic schools and parents teaching at home. Free to use and link to, with no login.
          </p>
        </div>
      </div>

      <section style={{ background: "#fff" }}>
        <div className="max-w-[1200px] mx-auto px-4" style={{ display: "flex", flexDirection: "column", gap: 56 }}>
          {sections.map((section) => (
            <div key={section.id} id={section.id}>
              <span className="section-eyebrow">{section.eyebrow}</span>
              <h2 className="section-title" style={{ marginTop: 10 }}>{section.title}</h2>
              <p className="section-desc" style={{ marginBottom: 24 }}>{section.intro}</p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {section.resources.map((resource) => (
                  <Link key={resource.href} href={resource.href} style={{ textDecoration: "none", display: "block" }}>
                    <div className="resource-card" style={{ background: "var(--ivory)", border: "1.5px solid var(--border)", borderRadius: 14, padding: 20, height: "100%" }}>
                      <h3 style={{ fontFamily: "'Playfair Display',serif", fontSize: ".98rem", fontWeight: 700, color: "var(--charcoal)", marginBottom: 6, lineHeight: 1.35 }}>
                        {resource.title}
                      </h3>
                      <p style={{ color: "var(--muted)", fontSize: ".84rem", lineHeight: 1.6, margin: 0 }}>{resource.desc}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section style={{ background: "var(--ivory)" }}>
        <div className="max-w-[900px] mx-auto px-4">
          <h2 className="section-title">How to use these in class</h2>
          <ul style={{ marginTop: 18, paddingLeft: 20, lineHeight: 1.8, color: "var(--charcoal)" }}>
            {tips.map((tip) => (
              <li key={tip} style={{ marginBottom: 8 }}>{tip}</li>
            ))}
          </ul>

          <h2 className="section-title" style={{ marginTop: 44 }}>Link to these resources</h2>
          <p className="section-desc" style={{ marginBottom: 14 }}>
            If your mosque, school or blog keeps a list of learning resources, you&apos;re welcome to link to this page.
            You can copy this link:
          </p>
          <pre
            style={{
              background: "#fff",
              border: "1px solid var(--border)",
              borderRadius: 12,
              padding: "14px 16px",
              fontSize: ".82rem",
              whiteSpace: "pre-wrap",
              wordBreak: "break-all",
              color: "var(--charcoal)",
            }}
          >
            {linkSnippet}
          </pre>

          <p style={{ marginTop: 36, color: "var(--muted)", fontSize: ".9rem", lineHeight: 1.7 }}>
            Looking for one-to-one lessons for a student? NoorPath teaches live online Quran classes for kids and
            adults, starting with {TRIAL_OFFER}.{" "}
            <Link href="/online-quran-classes-for-kids" style={{ color: "var(--emerald)", fontWeight: 700 }}>
              Online Quran classes for kids
            </Link>
            {" · "}
            <Link href="/free-quran-classes-online" style={{ color: "var(--emerald)", fontWeight: 700 }}>
              Free trial sessions
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}
