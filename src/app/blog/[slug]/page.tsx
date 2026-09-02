import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { blogPosts, getBlogPost } from "@/data/blog";
import { blogContent } from "@/data/blogContent";
import { backlinkAssetContent } from "@/data/backlinkAssetContent";
import { getBacklinkAsset } from "@/data/backlinkAssets";
import { ORGANIZATION_ID, ORGANIZATION_REF } from "@/lib/organizationSchema";
import { faqPageJsonLdFromHtml } from "@/lib/faqFromHtml";
import { splitArticleHtml } from "@/lib/splitArticleHtml";
import InlineTrialCTA from "@/components/InlineTrialCTA";
import BlogAeoQuickSummary from "@/components/BlogAeoQuickSummary";
import AdUnit from "@/components/AdUnit";
import { Clock, BookOpen, ArrowLeft } from "lucide-react";

function extractHeadings(html: string): { id: string; text: string }[] {
  const headingRegex = /<h2 id="([^"]+)">([^<]+)<\/h2>/gi;
  const headings: { id: string; text: string }[] = [];
  let match;
  while ((match = headingRegex.exec(html)) !== null) {
    headings.push({ id: match[1], text: match[2].replace(/&amp;/g, "&") });
  }
  return headings;
}

interface Props {
  params: Promise<{ slug: string }>;
}

const supportingResourceLinks: Record<string, string[]> = {
  "benefits-of-online-quran-classes": ["quran-learning-method-comparisons"],
  "how-to-choose-online-quran-teacher": [
    "quran-learning-method-comparisons",
    "quran-practice-and-progress-guide",
  ],
  "how-to-memorize-quran-faster": [
    "hifz-revision-schedule",
    "quran-memorization-retention-research",
  ],
  "online-hifz-classes-for-kids": ["hifz-revision-schedule"],
  "tajweed-rules-complete-guide": [
    "quran-pronunciation-troubleshooting",
    "tajweed-learning-format-comparison",
  ],
  "how-to-teach-quran-to-kids": ["quran-curriculum-and-lesson-planning"],
  "how-long-does-noorani-qaida-take": [
    "noorani-qaida-complete-guide",
    "best-age-to-start-quran-learning",
    "quran-practice-routine-at-home-kids",
  ],
  "parents-dont-speak-arabic-child-learn-quran": [
    "how-to-teach-quran-to-kids",
    "how-to-choose-online-quran-teacher",
    "quran-practice-routine-at-home-kids",
  ],
  "child-wont-sit-for-quran-class": [
    "online-quran-classes-for-shy-kids",
    "best-age-to-start-quran-learning",
    "online-quran-classes-for-kids-parent-guide",
  ],
  "quran-practice-routine-at-home-kids": [
    "how-long-does-noorani-qaida-take",
    "parents-dont-speak-arabic-child-learn-quran",
    "online-hifz-classes-for-kids",
  ],
  "hard-arabic-letters-for-kids-makharij": [
    "arabic-alphabet-for-kids",
    "noorani-qaida-complete-guide",
    "tajweed-rules-complete-guide",
  ],
  "online-quran-classes-for-shy-kids": [
    "child-wont-sit-for-quran-class",
    "female-quran-teacher-for-kids",
    "online-quran-classes-for-kids-parent-guide",
  ],
};

export const dynamicParams = false;
export const revalidate = false;

export async function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return {};
  const asset = getBacklinkAsset(slug);
  const ogImage = post.coverImage ?? "/og-image.png";
  const ogImageHeight = post.coverImage
    ? asset?.assetType === "Infographic"
      ? 1500
      : 800
    : 630;
  return {
    title: post.title,
    description: post.description,
    keywords: post.keywords,
    authors: [{ name: post.author, url: `https://www.noorpath.online/${post.authorSlug}` }],
    alternates: { canonical: `https://www.noorpath.online/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.description,
      url: `https://www.noorpath.online/blog/${post.slug}`,
      type: "article",
      publishedTime: post.date,
      modifiedTime: post.updatedAt ?? post.date,
      authors: [post.author],
      siteName: "NoorPath Academy",
      locale: (post.inLanguage ?? "en").replace("-", "_"),
      images: [
        {
          url: ogImage,
          width: 1200,
          height: ogImageHeight,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image" as const,
      title: post.title,
      description: post.description,
      images: [ogImage],
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  const asset = getBacklinkAsset(slug);
  const supportingResources = (supportingResourceLinks[slug] ?? [])
    .map((resourceSlug) => getBacklinkAsset(resourceSlug))
    .filter((resource): resource is NonNullable<typeof resource> =>
      Boolean(resource)
    );
  const related = asset
    ? asset.relatedSlugs
        .map((relatedSlug) => getBlogPost(relatedSlug))
        .filter((relatedPost): relatedPost is NonNullable<typeof relatedPost> =>
          Boolean(relatedPost)
        )
    : blogPosts
        .filter((p) => p.slug !== slug && p.category === post.category)
        .slice(0, 3);

  const richContent = backlinkAssetContent[slug] ?? blogContent[slug];
  const articleImage = post.coverImage
    ? `https://www.noorpath.online${post.coverImage}`
    : "https://www.noorpath.online/og-image.png";
  const articleImageHeight = post.coverImage
    ? asset?.assetType === "Infographic"
      ? 1500
      : 800
    : 630;

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": asset?.schemaType ?? "Article",
        "@id": `https://www.noorpath.online/blog/${post.slug}#article`,
        headline: post.title,
        description: post.description,
        datePublished: post.date,
        dateModified: post.updatedAt ?? post.date,
        image: { "@type": "ImageObject", url: articleImage, width: 1200, height: articleImageHeight },
        author: {
          "@type": "Person",
          name: post.author,
          jobTitle: post.authorTitle,
          url: `https://www.noorpath.online/${post.authorSlug}`,
          worksFor: ORGANIZATION_REF,
        },
        publisher: { "@id": ORGANIZATION_ID },
        url: `https://www.noorpath.online/blog/${post.slug}`,
        mainEntityOfPage: { "@type": "WebPage", "@id": `https://www.noorpath.online/blog/${post.slug}` },
        keywords: post.keywords.join(", "),
        articleSection: post.category,
        inLanguage: post.inLanguage ?? "en",
        isAccessibleForFree: true,
        about: ORGANIZATION_REF,
        speakable: {
          "@type": "SpeakableSpecification",
          cssSelector: [
            "#blog-hero-title",
            ".highlight-box",
            ".quick-answer",
            ".article-takeaway",
            ".faq-acc",
          ],
        },
        ...(asset?.sourceUrls.length
          ? { citation: asset.sourceUrls }
          : {}),
        wordCount: richContent
          ? richContent.content
              .replace(/<[^>]+>/g, " ")
              .trim()
              .split(/\s+/).length
          : undefined,
      },
      ...(asset?.howToSteps
        ? [
            {
              "@type": "HowTo",
              "@id": `https://www.noorpath.online/blog/${post.slug}#howto`,
              name: post.title,
              description: post.description,
              inLanguage: post.inLanguage ?? "en",
              mainEntityOfPage: {
                "@id": `https://www.noorpath.online/blog/${post.slug}`,
              },
              step: asset.howToSteps.map((step, index) => ({
                "@type": "HowToStep",
                position: index + 1,
                name: step.name,
                text: step.text,
                url: `https://www.noorpath.online/blog/${post.slug}#method`,
              })),
            },
          ]
        : []),
      ...(asset?.datasetPath && asset.datasetMetadata
        ? [
            {
              "@type": "Dataset",
              "@id": `https://www.noorpath.online/blog/${post.slug}#dataset`,
              name: asset.datasetMetadata.name,
              description: asset.datasetMetadata.description,
              creator: ORGANIZATION_REF,
              publisher: ORGANIZATION_REF,
              dateModified: post.updatedAt ?? post.date,
              temporalCoverage: asset.datasetMetadata.temporalCoverage,
              spatialCoverage: asset.datasetMetadata.spatialCoverage.map(
                (name) => ({ "@type": "Place", name })
              ),
              variableMeasured: asset.datasetMetadata.variableMeasured,
              isAccessibleForFree: true,
              distribution: {
                "@type": "DataDownload",
                encodingFormat: "text/csv",
                contentUrl: `https://www.noorpath.online${asset.datasetPath}`,
              },
            },
          ]
        : []),
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://www.noorpath.online" },
          { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.noorpath.online/blog" },
          { "@type": "ListItem", position: 3, name: post.title, item: `https://www.noorpath.online/blog/${post.slug}` },
        ],
      },
    ],
  };

  // FAQPage JSON-LD must match visible .faq-acc FAQs (Google structured-data honesty).
  // Do not use separate blogFaqs.ts schemas — they drifted from on-page copy.
  const faqSchema = richContent ? faqPageJsonLdFromHtml(richContent.content) : null;
  const headings = richContent ? extractHeadings(richContent.content) : [];
  const articleParts = richContent
    ? splitArticleHtml(richContent.content, 3)
    : { before: "", after: "" };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      {faqSchema && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      )}

      {/* Inject blog-post-specific CSS */}
      {richContent?.style && (
        <style dangerouslySetInnerHTML={{ __html: richContent.style }} />
      )}

      {/* Hero */}
      <div className="page-hero">
        <div className="max-w-[1200px] mx-auto px-4 page-hero-content">
          <nav aria-label="Breadcrumb" style={{ marginBottom: 16 }}>
            <Link href="/" style={{ color: "var(--gold-lt)", fontSize: ".85rem" }}>Home</Link>
            <span style={{ color: "rgba(255,255,255,.4)", margin: "0 8px" }}>›</span>
            <Link href="/blog" style={{ color: "var(--gold-lt)", fontSize: ".85rem" }}>Blog</Link>
            <span style={{ color: "rgba(255,255,255,.4)", margin: "0 8px" }}>›</span>
            <span style={{ color: "rgba(255,255,255,.6)", fontSize: ".85rem" }}>{post.category}</span>
          </nav>
          <span className="blog-tag" style={{ background: "rgba(255,255,255,.1)", color: "rgba(255,255,255,.9)" }}>
            {post.category}
          </span>
          <h1 id="blog-hero-title" style={{ marginTop: 12, maxWidth: 820 }}>{post.title}</h1>
          {/* Author + date + read time row */}
          <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: 16, marginTop: 18, paddingTop: 18, borderTop: "1px solid rgba(255,255,255,.1)" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <div style={{ width: 36, height: 36, borderRadius: "50%", background: "linear-gradient(135deg,#0a6e4f,#c9922a)", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontWeight: 700, fontSize: ".9rem", flexShrink: 0 }}>
                FT
              </div>
              <div>
                <div style={{ color: "#fff", fontWeight: 600, fontSize: ".87rem" }}>{post.author}</div>
                <div style={{ color: "rgba(255,255,255,.5)", fontSize: ".75rem" }}>{post.authorTitle}</div>
              </div>
            </div>
            <div style={{ display: "flex", gap: 14, color: "rgba(255,255,255,.55)", fontSize: ".82rem", marginLeft: "auto" }}>
              <span style={{ display: "flex", alignItems: "center", gap: 4 }}>
                <BookOpen size={13} />{" "}
                {post.updatedAt && post.updatedAt !== post.date ? "Updated: " : "Published: "}
                {new Date(post.updatedAt ?? post.date).toLocaleDateString(post.inLanguage ?? "en-US", { year: "numeric", month: "long", day: "numeric" })}
              </span>
              <span style={{ display: "flex", alignItems: "center", gap: 4 }}>
                <Clock size={13} /> {post.readTime} read
              </span>
            </div>
          </div>
        </div>
      </div>

      <section style={{ padding: "56px 0" }}>
        <div className="max-w-[1200px] mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

            {/* ── Main content ─────────────────────────────────── */}
            <div className="lg:col-span-2">
              <div className="px-4 py-7 sm:px-8 sm:py-9" style={{ background: "#fff", border: "1px solid var(--border)", borderRadius: 20 }}>

                {post.coverImage && (
                  <Image
                    src={post.coverImage}
                    alt={post.title}
                    width={1200}
                    height={675}
                    priority
                    sizes="(max-width: 900px) 100vw, 760px"
                    style={{
                      width: "100%",
                      height: "auto",
                      borderRadius: 14,
                      marginBottom: 28,
                      objectFit: "cover",
                    }}
                  />
                )}

                {/* AEO Quick Summary & Direct Answer Key Takeaways for Readers & AI Search */}
                {post.excerpt && (
                  <BlogAeoQuickSummary
                    title={post.title}
                    excerpt={post.excerpt}
                    category={post.category}
                    readTime={post.readTime}
                  />
                )}

                {headings.length > 2 && (
                  <nav
                    aria-label="Table of contents"
                    style={{
                      background: "rgba(10,110,79,.05)",
                      border: "1px solid rgba(10,110,79,.1)",
                      borderRadius: 14,
                      marginBottom: 32,
                      padding: "20px 24px",
                    }}
                  >
                    <div style={{ color: "var(--charcoal)", fontWeight: 800, fontSize: ".9rem", marginBottom: 14, textTransform: "uppercase", letterSpacing: ".05em" }}>
                      In this article
                    </div>
                    <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gap: 10 }}>
                      {headings.map((h) => (
                        <li key={h.id}>
                          <a
                            href={`#${h.id}`}
                            style={{
                              color: "var(--emerald)",
                              fontSize: ".95rem",
                              fontWeight: 600,
                              textDecoration: "none",
                              display: "flex",
                              gap: 8,
                            }}
                          >
                            <span style={{ opacity: .4 }}>•</span> {h.text}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </nav>
                )}

                {asset && (
                  <aside
                    aria-label="Resource download and citation"
                    style={{
                      background: "var(--ivory)",
                      border: "1px solid var(--border)",
                      borderRadius: 14,
                      marginBottom: 28,
                      padding: 20,
                    }}
                  >
                    <div
                      style={{
                        color: "var(--emerald)",
                        fontSize: ".75rem",
                        fontWeight: 800,
                        letterSpacing: ".08em",
                        marginBottom: 8,
                        textTransform: "uppercase",
                      }}
                    >
                      {asset.assetType} · Free to cite
                    </div>
                    <p
                      style={{
                        color: "var(--muted)",
                        fontSize: ".86rem",
                        lineHeight: 1.7,
                        marginBottom: 14,
                      }}
                    >
                      Cite the page URL and access date. Downloadable files retain
                      their source notes and methodology.
                    </p>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
                      {asset.downloadPath && (
                        <a
                          href={asset.downloadPath}
                          download
                          style={{
                            background: "var(--emerald)",
                            borderRadius: 9,
                            color: "#fff",
                            fontSize: ".82rem",
                            fontWeight: 700,
                            padding: "9px 13px",
                            textDecoration: "none",
                          }}
                        >
                          Download SVG
                        </a>
                      )}
                      {asset.datasetPath && (
                        <a
                          href={asset.datasetPath}
                          download
                          style={{
                            background: "var(--emerald)",
                            borderRadius: 9,
                            color: "#fff",
                            fontSize: ".82rem",
                            fontWeight: 700,
                            padding: "9px 13px",
                            textDecoration: "none",
                          }}
                        >
                          Download source CSV
                        </a>
                      )}
                      <Link
                        href={asset.commercialParent.href}
                        style={{
                          border: "1px solid var(--border)",
                          borderRadius: 9,
                          color: "var(--emerald)",
                          fontSize: ".82rem",
                          fontWeight: 700,
                          padding: "9px 13px",
                          textDecoration: "none",
                        }}
                      >
                        {asset.commercialParent.label}
                      </Link>
                    </div>
                    <p
                      style={{
                        color: "var(--muted)",
                        fontSize: ".75rem",
                        lineHeight: 1.6,
                        margin: "14px 0 0",
                        overflowWrap: "anywhere",
                      }}
                    >
                      Suggested citation: {post.author}. “{post.title}.”
                      NoorPath Academy, {post.updatedAt ?? post.date}.{" "}
                      https://www.noorpath.online/blog/{post.slug}
                    </p>
                    {asset.downloadPath && (
                      <details style={{ marginTop: 12 }}>
                        <summary
                          style={{
                            color: "var(--emerald)",
                            cursor: "pointer",
                            fontSize: ".8rem",
                            fontWeight: 700,
                          }}
                        >
                          Website embed code
                        </summary>
                        <code
                          style={{
                            background: "#fff",
                            border: "1px solid var(--border)",
                            borderRadius: 8,
                            color: "var(--slate)",
                            display: "block",
                            fontSize: ".72rem",
                            lineHeight: 1.6,
                            marginTop: 9,
                            overflowWrap: "anywhere",
                            padding: 10,
                            whiteSpace: "pre-wrap",
                          }}
                        >
                          {`<a href="https://www.noorpath.online/blog/${post.slug}"><img src="https://www.noorpath.online${asset.downloadPath}" alt="${post.title} by NoorPath Academy"></a>`}
                        </code>
                      </details>
                    )}
                  </aside>
                )}

                {richContent ? (
                  <>
                    <div
                      className="article-body"
                      dangerouslySetInnerHTML={{ __html: articleParts.before }}
                    />
                    {/* In-article ad — blog pages only */}
                    <AdUnit slot={process.env.NEXT_PUBLIC_ADSENSE_SLOT_BLOG_TOP} />
                    {articleParts.after ? (
                      <InlineTrialCTA
                        placement="mid-article"
                        title="Ready to practise with a live tutor?"
                        subtitle="Book a free 30-minute trial — WhatsApp or email is enough to get started."
                      />
                    ) : null}
                    {articleParts.after ? (
                      <div
                        className="article-body"
                        dangerouslySetInnerHTML={{ __html: articleParts.after }}
                      />
                    ) : null}
                  </>
                ) : (
                  /* Fallback for posts without extracted content */
                  <>
                    <p style={{ fontSize: "1.05rem", color: "var(--slate)", lineHeight: 1.8, marginBottom: 24, padding: "20px 24px", background: "rgba(10,110,79,.05)", borderLeft: "4px solid var(--emerald)", borderRadius: "0 12px 12px 0" }}>
                      {post.excerpt}
                    </p>
                    <InlineTrialCTA placement="mid-article" />
                    <p style={{ color: "var(--muted)", lineHeight: 1.8, marginBottom: 20 }}>
                      This comprehensive guide on <strong>{post.title.split("—")[0].trim()}</strong> covers everything you need to know — from the basics to advanced concepts, with practical examples and Islamic references.
                    </p>
                    <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: "1.5rem", color: "var(--charcoal)", marginBottom: 16 }}>
                      Why This Topic Matters for Every Muslim
                    </h2>
                    <p style={{ color: "var(--muted)", lineHeight: 1.8, marginBottom: 20 }}>
                      Understanding {post.title.split("—")[0].trim().split("(")[0].trim()} is a fundamental part of Islamic education.
                    </p>
                  </>
                )}

                {supportingResources.length > 0 && (
                  <aside
                    aria-label="Related canonical resources"
                    style={{
                      background: "rgba(10,110,79,.05)",
                      border: "1px solid rgba(10,110,79,.15)",
                      borderRadius: 14,
                      marginTop: 28,
                      padding: 20,
                    }}
                  >
                    <h2
                      style={{
                        color: "var(--charcoal)",
                        fontSize: "1.05rem",
                        marginBottom: 10,
                      }}
                    >
                      Related canonical resources
                    </h2>
                    <p
                      style={{
                        color: "var(--muted)",
                        fontSize: ".84rem",
                        lineHeight: 1.65,
                        marginBottom: 10,
                      }}
                    >
                      Use these source-led pages for the detailed framework,
                      comparison or evidence review.
                    </p>
                    <div style={{ display: "grid", gap: 8 }}>
                      {supportingResources.map((resource) => (
                        <Link
                          key={resource.slug}
                          href={`/blog/${resource.slug}`}
                          style={{
                            color: "var(--emerald)",
                            fontSize: ".86rem",
                            fontWeight: 700,
                            textDecoration: "none",
                          }}
                        >
                          → {resource.title}
                        </Link>
                      ))}
                    </div>
                  </aside>
                )}

                {/* Author bio box */}
                <div className="np-author-bio" style={{ display: "flex", gap: 14, alignItems: "flex-start", background: "var(--ivory)", border: "1px solid var(--border)", borderRadius: 16, padding: 22, marginTop: 40 }}>
                  <div style={{ width: 50, height: 50, borderRadius: "50%", background: "linear-gradient(135deg,#0a6e4f,#c9922a)", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontWeight: 700, fontSize: "1rem", flexShrink: 0 }}>FT</div>
                  <div>
                    <div style={{ fontWeight: 700, color: "var(--charcoal)", fontSize: ".97rem", marginBottom: 2 }}>{post.author}</div>
                    <div style={{ color: "var(--emerald)", fontSize: ".78rem", fontWeight: 600, marginBottom: 8 }}>{post.authorTitle}</div>
                    <p style={{ color: "var(--muted)", fontSize: ".85rem", lineHeight: 1.7, margin: 0 }}>
                      Faisal Tariq is identified on NoorPath as the academy&apos;s
                      founder. This article is published as part of NoorPath&apos;s
                      Quran and Islamic education resource library.
                    </p>
                  </div>
                </div>

                {/* End-of-article ad — blog pages only */}
                <AdUnit slot={process.env.NEXT_PUBLIC_ADSENSE_SLOT_BLOG_BOTTOM} />

                <InlineTrialCTA
                  placement="end-article"
                  title="Want to discuss a learning plan?"
                  subtitle="Request a free 30-minute trial — we'll match a tutor after your request."
                />
              </div>

              <Link
                href="/blog"
                style={{ display: "inline-flex", alignItems: "center", gap: 8, color: "var(--emerald)", fontWeight: 600, marginTop: 24, textDecoration: "none", fontSize: ".9rem" }}
              >
                <ArrowLeft size={16} /> Back to All Articles
              </Link>
            </div>

            {/* ── Sidebar ───────────────────────────────────────── */}
            <div>
              {/* CTA card */}
              <div style={{ background: "linear-gradient(135deg, #0a3d28, #0d5436)", borderRadius: 20, padding: 24, textAlign: "center", marginBottom: 20 }}>
                <div style={{ fontSize: "2.2rem", marginBottom: 12 }}>🕌</div>
                <h3 style={{ fontFamily: "'Playfair Display',serif", color: "#fff", fontSize: "1.1rem", marginBottom: 10 }}>
                  Start Learning Quran Online
                </h3>
                <p style={{ color: "rgba(255,255,255,.75)", fontSize: ".83rem", marginBottom: 18, lineHeight: 1.6 }}>
                  Free 30-minute trial request. No credit card required. Tutor availability is confirmed after your request.
                </p>
                <Link
                  href="/free-quran-classes-online"
                  style={{ display: "block", background: "var(--gold)", color: "var(--charcoal)", padding: "11px", borderRadius: 10, fontWeight: 700, textDecoration: "none", fontSize: ".88rem" }}
                >
                  Book Free Trial →
                </Link>
              </div>

              {/* Related posts */}
              {related.length > 0 && (
                <div className="content-card" style={{ marginBottom: 20 }}>
                  <h3 style={{ fontFamily: "'Playfair Display',serif", fontSize: "1.1rem", color: "var(--charcoal)", marginBottom: 16 }}>
                    Related Articles
                  </h3>
                  <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
                    {related.map((r) => (
                      <Link
                        key={r.slug}
                        href={`/blog/${r.slug}`}
                        style={{ textDecoration: "none", padding: "12px 0", borderBottom: "1px solid var(--border)", display: "block" }}
                      >
                        <div style={{ fontSize: ".78rem", color: "var(--emerald)", fontWeight: 600, marginBottom: 4 }}>{r.category}</div>
                        <div style={{ fontSize: ".88rem", color: "var(--charcoal)", fontWeight: 600, lineHeight: 1.4 }}>
                          {r.title.split("—")[0].trim()}
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* All posts */}
              <div className="content-card">
                <h3 style={{ fontFamily: "'Playfair Display',serif", fontSize: "1rem", color: "var(--charcoal)", marginBottom: 14 }}>
                  All Articles
                </h3>
                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 8 }}>
                  {blogPosts.slice(0, 10).map((p) => (
                    <li key={p.slug}>
                      <Link
                        href={`/blog/${p.slug}`}
                        style={{
                          color: p.slug === slug ? "var(--charcoal)" : "var(--emerald)",
                          fontSize: ".83rem",
                          textDecoration: "none",
                          fontWeight: p.slug === slug ? 700 : 400,
                        }}
                      >
                        {p.slug === slug ? "▶ " : "→ "}
                        {p.title.split("—")[0].trim().substring(0, 48)}
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
