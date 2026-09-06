import Link from "next/link";
import { BookOpen } from "lucide-react";
import { surahPath, paraPath } from "@/data/holy-quran";

const links = [
  { href: surahPath(36), label: "Surah Yaseen" },
  { href: surahPath(67), label: "Surah Al-Mulk" },
  { href: surahPath(18), label: "Surah Al-Kahf" },
  { href: surahPath(1), label: "Surah Al-Fatiha" },
  { href: paraPath(30), label: "Para 30 · Juz Amma" },
  { href: "/holy-quran", label: "All 114 Surahs" },
];

export default function HolyQuranPublicSection() {
  return (
    <section id="holy-quran" style={{ background: "var(--ivory)", padding: "72px 0" }}>
      <div className="max-w-[1100px] mx-auto px-4">
        <span className="section-eyebrow">Free public reader</span>
        <h2 className="section-title">
          Read the <em className="accent">Holy Quran</em> online
        </h2>
        <p style={{ maxWidth: 680, color: "var(--muted)", lineHeight: 1.7, marginBottom: 22 }}>
          Open any Surah or Para in verified Uthmani Arabic — including Yaseen — without creating an account.
          Live classes remain a separate path if you want a teacher.
        </p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginBottom: 22 }}>
          {links.map((item) => (
            <Link key={item.href} href={item.href} className="btn-outline-np">
              {item.label}
            </Link>
          ))}
        </div>
        <Link href="/holy-quran/para/1" className="btn-primary-np">
          <BookOpen size={16} aria-hidden="true" /> Open Holy Quran reader
        </Link>
      </div>
    </section>
  );
}
