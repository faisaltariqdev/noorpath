import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { blogPosts } from "@/data/blog";
import { BASE_URL, ORGANIZATION_ID } from "@/lib/organizationSchema";
import { absolutePageTitle } from "@/lib/pageTitle";
import { Award, BookOpen, GraduationCap, CheckCircle, ArrowRight } from "lucide-react";

interface Props {
  params: Promise<{ slug: string }>;
}

export const dynamicParams = false;
export const revalidate = false;

const AUTHORS_DATA: Record<
  string,
  {
    name: string;
    role: string;
    title: string;
    bio: string;
    image: string;
    expertise: string[];
    credentials: string[];
  }
> = {
  "faisal-tariq": {
    name: "Faisal Tariq",
    role: "Founder & CEO, NoorPath Academy",
    title: "Islamic Education Specialist & Quran Learning Expert",
    bio: "Faisal Tariq is the Founder and CEO of NoorPath Academy (www.noorpath.online). He oversees curriculum standards for Noorani Qaida, Tajweed, and Hifz programs, ensuring authentic Quranic education is accessible to Muslim families worldwide across North America, the UK, Europe, Australia, and the Middle East.",
    image: "/assets/faisal-tariq-founder.png",
    expertise: [
      "Noorani Qaida & Reading Foundations",
      "Tajweed Rules & Arabic Phonetics",
      "Quran Memorisation (Hifz) Structuring",
      "Pedagogy for International & Non-Native Learners",
    ],
    credentials: [
      "Founder & CEO of NoorPath Academy",
      "10+ Years in Islamic Digital Education & Curriculum Development",
      "Supervising Qualified Tutors with Authentic Ijazah Credentials",
      "Author of 150+ In-Depth Guides on Quranic Duas, Tajweed, and Adhkar",
    ],
  },
};

// Also support "founder" slug by aliasing to "faisal-tariq"
AUTHORS_DATA["founder"] = AUTHORS_DATA["faisal-tariq"];

export async function generateStaticParams() {
  return [{ slug: "faisal-tariq" }, { slug: "founder" }];
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const author = AUTHORS_DATA[slug];
  if (!author) return {};

  const pageUrl = `${BASE_URL}/author/${slug}`;

  return {
    title: absolutePageTitle(`${author.name} — ${author.role}`),
    description: `${author.name}, ${author.role}, oversees the Noorani Qaida, Tajweed and Hifz curriculum for families learning the Quran worldwide.`,
    alternates: { canonical: `${BASE_URL}/author/faisal-tariq` },
    openGraph: {
      title: `${author.name} — ${author.role}`,
      description: author.bio,
      url: pageUrl,
      images: [{ url: author.image, width: 500, height: 500, alt: author.name }],
    },
  };
}

export default async function AuthorProfilePage({ params }: Props) {
  const { slug } = await params;
  const author = AUTHORS_DATA[slug];
  if (!author) notFound();

  const authorArticles = blogPosts.filter((post) => !post.guestAuthorUrl).slice(0, 12);
  const profileUrl = `${BASE_URL}/author/faisal-tariq`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfilePage",
        "@id": `${profileUrl}#profile`,
        name: `${author.name} — Author Profile`,
        url: profileUrl,
        mainEntity: {
          "@type": "Person",
          "@id": `${profileUrl}#person`,
          name: author.name,
          jobTitle: author.title,
          url: profileUrl,
          image: `${BASE_URL}${author.image}`,
          description: author.bio,
          worksFor: {
            "@type": "EducationalOrganization",
            "@id": ORGANIZATION_ID,
            name: "NoorPath Academy",
            url: BASE_URL,
          },
          knowsAbout: author.expertise,
        },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
          { "@type": "ListItem", position: 2, name: "Authors", item: `${BASE_URL}/author` },
          { "@type": "ListItem", position: 3, name: author.name, item: profileUrl },
        ],
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="min-h-screen bg-[var(--background)] py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-10">
          <nav aria-label="Breadcrumb" className="text-xs text-[var(--muted)] flex items-center gap-2">
            <Link href="/" className="hover:text-[var(--emerald)]">Home</Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-[var(--emerald)]">Blog</Link>
            <span>/</span>
            <span className="text-[var(--charcoal)] font-semibold">{author.name}</span>
          </nav>

          {/* Author Card */}
          <div className="bg-white border border-[var(--border)] rounded-3xl p-8 sm:p-10 shadow-sm flex flex-col sm:flex-row gap-8 items-center sm:items-start">
            <div className="relative w-36 h-36 sm:w-44 sm:h-44 rounded-2xl overflow-hidden shrink-0 border-2 border-[var(--emerald)]/20 shadow-md">
              <Image
                src={author.image}
                alt={author.name}
                fill
                className="object-cover"
                priority
              />
            </div>

            <div className="space-y-4 text-center sm:text-left">
              <div>
                <span className="inline-block bg-[var(--emerald)]/10 text-[var(--emerald)] text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-2">
                  Verified Islamic Educator &amp; Author
                </span>
                <h1 className="text-3xl font-serif font-extrabold text-[var(--charcoal)]">
                  {author.name}
                </h1>
                <p className="text-sm font-semibold text-[var(--emerald)] mt-1">
                  {author.title}
                </p>
                <p className="text-xs text-[var(--muted)]">
                  {author.role}
                </p>
              </div>

              <p className="text-sm text-[var(--slate)] leading-relaxed">
                {author.bio}
              </p>

              <div className="pt-2 flex flex-wrap gap-2 justify-center sm:justify-start">
                <Link
                  href="/founder"
                  className="text-xs font-bold text-[var(--emerald)] underline hover:text-[var(--emerald-dk)]"
                >
                  View Founder Story &amp; Academy Mission →
                </Link>
              </div>
            </div>
          </div>

          {/* Credentials & Expertise */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white border border-[var(--border)] rounded-2xl p-6 shadow-sm space-y-3">
              <h2 className="text-base font-serif font-bold text-[var(--charcoal)] flex items-center gap-2">
                <GraduationCap size={18} className="text-[var(--emerald)]" />
                <span>Areas of Pedagogical Expertise</span>
              </h2>
              <ul className="space-y-2 text-xs sm:text-sm text-[var(--slate)]">
                {author.expertise.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle size={15} className="text-[var(--emerald)] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white border border-[var(--border)] rounded-2xl p-6 shadow-sm space-y-3">
              <h2 className="text-base font-serif font-bold text-[var(--charcoal)] flex items-center gap-2">
                <Award size={18} className="text-[var(--gold)]" />
                <span>Credentials &amp; Standards</span>
              </h2>
              <ul className="space-y-2 text-xs sm:text-sm text-[var(--slate)]">
                {author.credentials.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle size={15} className="text-[var(--gold)] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Published Articles by Author */}
          <div className="space-y-6 pt-6">
            <h2 className="text-2xl font-serif font-bold text-[var(--charcoal)] flex items-center gap-2.5">
              <BookOpen size={22} className="text-[var(--emerald)]" />
              <span>Articles &amp; Guides Authored by {author.name}</span>
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {authorArticles.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group bg-white border border-[var(--border)] rounded-2xl p-5 hover:border-[var(--emerald)]/50 hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-xs text-[var(--muted)]">
                      <span className="font-semibold text-[var(--emerald)]">{post.category}</span>
                      <span>{post.readTime}</span>
                    </div>
                    <h3 className="font-serif font-bold text-sm sm:text-base text-[var(--charcoal)] group-hover:text-[var(--emerald)] transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-xs text-[var(--slate)] line-clamp-2">
                      {post.description}
                    </p>
                  </div>
                  <div className="pt-3 text-xs font-bold text-[var(--emerald)] flex items-center gap-1">
                    <span>Read Guide</span>
                    <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              ))}
            </div>

            <div className="text-center pt-4">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-[var(--ivory)] hover:bg-[var(--emerald)]/10 text-xs font-bold text-[var(--charcoal)] transition-colors border border-[var(--border)]"
              >
                <span>Browse All Articles &amp; Daily Guides</span>
                <span>→</span>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
