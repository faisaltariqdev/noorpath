import Link from "next/link";
import type { HolyQuranFaq } from "@/data/holy-quran";

export default function HolyQuranFaqs({ faqs }: { faqs: HolyQuranFaq[] }) {
  return (
    <section className="hq-section hq-faq" aria-labelledby="hq-reader-faq">
      <h2 id="hq-reader-faq">Frequently asked questions</h2>
      {faqs.map((faq) => (
        <details key={faq.question}>
          <summary>{faq.question}</summary>
          <p>{faq.answer}</p>
        </details>
      ))}
      <p className="hq-note" style={{ marginTop: 16 }}>
        Also open the <Link href="/holy-quran">Surah and Para index</Link>
        {" · "}
        <Link href="/tools">Islamic tools</Link>
        {" · "}
        <Link href="/learn-quran-online">Learn with a teacher</Link>
      </p>
    </section>
  );
}
