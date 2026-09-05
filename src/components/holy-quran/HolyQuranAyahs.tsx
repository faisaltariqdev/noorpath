import type { QuranAyah } from "@/data/holy-quran";

export default function HolyQuranAyahs({ ayahs }: { ayahs: QuranAyah[] }) {
  return (
    <div className="hq-ayahs">
      {ayahs.map((ayah) => (
        <article
          key={`${ayah.surah}:${ayah.ayah}`}
          id={`ayah-${ayah.surah}-${ayah.ayah}`}
          className="hq-ayah"
        >
          <span className="hq-ayah-num" aria-label={`Ayah ${ayah.ayah}`}>
            {ayah.ayah}
          </span>
          <p className="hq-ayah-text" lang="ar" dir="rtl">
            {ayah.text}
          </p>
        </article>
      ))}
    </div>
  );
}
