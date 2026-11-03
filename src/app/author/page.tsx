import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { BASE_URL } from "@/lib/academyFacts";
import { absolutePageTitle } from "@/lib/pageTitle";
import { ArrowRight, BookOpen, ShieldCheck } from "lucide-react";

export const revalidate = false;

export const metadata: Metadata = {
  title: absolutePageTitle("Editorial Authors & Quran Instructors | NoorPath Academy"),
  description:
    "Meet our editorial authors, Islamic curriculum specialists, and certified Quran tutors at NoorPath Academy.",
  alternates: { canonical: `${BASE_URL}/author` },
};

export default function AuthorsIndexPage() {
  return (
    <main className="min-h-screen bg-[var(--background)] py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-10">
        <div className="text-center space-y-3">
          <span className="inline-block bg-[var(--emerald)]/10 text-[var(--emerald)] text-xs font-bold px-3.5 py-1 rounded-full uppercase tracking-wider">
            NoorPath Academy Editorial Team
          </span>
          <h1 className="text-3xl sm:text-4xl font-serif font-extrabold text-[var(--charcoal)]">
            Our Authors &amp; Islamic Scholars
          </h1>
          <p className="text-sm sm:text-base text-[var(--slate)] max-w-2xl mx-auto leading-relaxed">
            All educational articles, Tajweed explanations, and prayer guides on NoorPath are written and reviewed by qualified Islamic educators and certified tutors.
          </p>
        </div>

        {/* Featured Author Card */}
        <div className="bg-white border border-[var(--border)] rounded-3xl p-8 shadow-sm flex flex-col sm:flex-row gap-6 items-center">
          <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-2xl overflow-hidden shrink-0 border border-[var(--border)]">
            <Image
              src="/assets/faisal-tariq-founder.png"
              alt="Faisal Tariq"
              fill
              className="object-cover"
            />
          </div>
          <div className="space-y-2 text-center sm:text-left flex-1">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <h2 className="text-xl font-serif font-bold text-[var(--charcoal)]">
                Faisal Tariq
              </h2>
              <span className="text-xs font-semibold text-[var(--emerald)] bg-[var(--emerald)]/10 px-2.5 py-0.5 rounded-full self-center sm:self-auto">
                Founder &amp; Author
              </span>
            </div>
            <p className="text-xs font-medium text-[var(--muted)]">
              Islamic Education Specialist &amp; Quran Learning Expert
            </p>
            <p className="text-xs sm:text-sm text-[var(--slate)] leading-relaxed">
              Curriculum designer overseeing authentic Noorani Qaida, Tajweed, and Hifz education for students across the globe.
            </p>
            <div className="pt-2">
              <Link
                href="/author/faisal-tariq"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[var(--emerald)] hover:underline"
              >
                <span>View Full Author Profile &amp; Articles</span>
                <ArrowRight size={13} />
              </Link>
            </div>
          </div>
        </div>

        <div className="bg-[var(--ivory)] border border-[var(--border)] rounded-2xl p-6 text-center space-y-2">
          <h3 className="font-serif font-bold text-sm text-[var(--charcoal)] flex items-center justify-center gap-2">
            <ShieldCheck size={18} className="text-[var(--emerald)]" />
            <span>Strict Editorial &amp; Verification Standards</span>
          </h3>
          <p className="text-xs text-[var(--slate)] max-w-xl mx-auto">
            Every supplication, hadith citation, and Tajweed rule is cross-referenced with primary authentic sources before publication. Learn more about our commitment in our <Link href="/editorial-policy" className="text-[var(--emerald)] underline font-semibold">Editorial Policy</Link>.
          </p>
        </div>
      </div>
    </main>
  );
}
