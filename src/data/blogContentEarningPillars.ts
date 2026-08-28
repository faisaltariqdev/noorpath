// High-traffic, evergreen informational articles (Quran & authentic duas).
// Written in a natural, people-first style; FAQs use .faq-acc so FAQPage
// JSON-LD is auto-derived from the visible markup.

const STYLE = `.article-body { font-size: 1.05rem; line-height: 1.85; color: #374151; }
  .article-body h2 { font-size: 1.55rem; font-weight: 700; color: var(--charcoal); margin: 44px 0 16px; scroll-margin-top: 90px; }
  .article-body h3 { font-size: 1.15rem; font-weight: 700; color: var(--emerald); margin: 26px 0 10px; }
  .article-body p { margin-bottom: 18px; }
  .article-body ul, .article-body ol { margin: 0 0 18px 22px; }
  .article-body li { margin-bottom: 8px; }
  .article-body a { color: var(--emerald); font-weight: 600; }
  .highlight-box { background: rgba(10,110,79,.06); border-left: 4px solid var(--emerald); border-radius: 8px; padding: 20px 24px; margin: 24px 0; }
  .gold-box { background: rgba(232,184,75,.08); border-left: 4px solid var(--gold); border-radius: 8px; padding: 20px 24px; margin: 24px 0; }
  .np-table { width: 100%; border-collapse: collapse; margin: 24px 0; font-size: .93rem; }
  .np-table th, .np-table td { border: 1px solid var(--border); padding: 12px 14px; text-align: left; vertical-align: top; }
  .np-table th { background: var(--ivory); color: var(--charcoal); font-weight: 700; }
  .np-table tr:nth-child(even) td { background: rgba(10,110,79,.03); }
  .verse-card { background: rgba(10,110,79,.05); border: 1px solid var(--border); border-radius: 14px; padding: 22px 24px; margin: 24px 0; }
  .verse-card .vnum { display: inline-block; background: var(--emerald); color: #fff; font-weight: 700; font-size: .78rem; padding: 4px 14px; border-radius: 20px; margin-bottom: 10px; letter-spacing: .3px; }
  .arabic { font-family: var(--font-amiri, 'Amiri', serif); direction: rtl; text-align: right; font-size: 1.9rem; line-height: 2.5; color: var(--charcoal); margin: 10px 0; }
  .translit { font-style: italic; color: var(--emerald); font-weight: 600; margin: 8px 0; }
  .trans-en { color: #374151; margin: 8px 0; }
  .faq-acc { border: 1px solid var(--border); border-radius: 10px; margin-bottom: 12px; overflow: hidden; }
  .faq-acc summary { padding: 16px 20px; font-weight: 700; cursor: pointer; background: var(--ivory); color: var(--charcoal); list-style: none; display: flex; justify-content: space-between; align-items: center; font-size: .95rem; }
  .faq-acc summary::-webkit-details-marker { display: none; }
  .faq-acc summary span { color: var(--emerald); margin-left: 12px; }
  .faq-acc p { padding: 16px 20px; margin: 0; color: #374151; font-size: .92rem; line-height: 1.75; border-top: 1px solid var(--border); }
  @media (max-width: 576px) { .np-table { font-size: .82rem; } .np-table th, .np-table td { padding: 8px 9px; } .arabic { font-size: 1.55rem; line-height: 2.3; } }`;

const ctaButton = `<p style="text-align: center; margin-top: 32px;">
    <a href="/free-quran-classes-online" style="display: inline-block; background: var(--gold); color: var(--charcoal); padding: 14px 32px; border-radius: 50px; font-weight: 700; text-decoration: none;">Book Your Free Trial Class →</a>
  </p>`;

export const earningPillarBlogContent: Record<string, { style: string; content: string }> = {
  "sayyidul-istighfar-arabic-english": {
    style: STYLE,
    content: `<p><strong>Sayyidul Istighfar</strong> (سيّد الاستغفار) means "the master of seeking forgiveness." It is a short, complete supplication in which the Prophet Muhammad ﷺ gathered the most beautiful ways of turning back to Allah — acknowledging Him as our Lord, admitting our own weakness, thanking Him for His favours, and asking sincerely for forgiveness.</p>

    <p>Many Muslims search for a single, authentic dua they can hold onto every morning and evening. This is that dua. It is reported in <em>Sahih al-Bukhari</em>, and the Prophet ﷺ described a remarkable reward for the one who recites it with certainty of faith.</p>

    <p>In this guide you will find the full Arabic text, an easy transliteration, the English meaning, its authentic virtue, and a simple daily routine so you can make it a lasting habit — for yourself and for your children.</p>

    <h2 id="arabic-text">Sayyidul Istighfar — Full Arabic Text</h2>
    <div class="verse-card">
      <span class="vnum">Sahih al-Bukhari</span>
      <p class="arabic">اللَّهُمَّ أَنْتَ رَبِّي لَا إِلَٰهَ إِلَّا أَنْتَ، خَلَقْتَنِي وَأَنَا عَبْدُكَ، وَأَنَا عَلَىٰ عَهْدِكَ وَوَعْدِكَ مَا اسْتَطَعْتُ، أَعُوذُ بِكَ مِنْ شَرِّ مَا صَنَعْتُ، أَبُوءُ لَكَ بِنِعْمَتِكَ عَلَيَّ، وَأَبُوءُ بِذَنْبِي فَاغْفِرْ لِي فَإِنَّهُ لَا يَغْفِرُ الذُّنُوبَ إِلَّا أَنْتَ</p>
      <p class="translit">Allahumma anta Rabbi la ilaha illa anta, khalaqtani wa ana ‘abduka, wa ana ‘ala ‘ahdika wa wa‘dika mastata‘tu, a‘udhu bika min sharri ma sana‘tu, abu’u laka bi ni‘matika ‘alayya, wa abu’u bi dhanbi faghfir li fa innahu la yaghfirudh-dhunuba illa anta.</p>
      <p class="trans-en"><strong>Meaning:</strong> "O Allah, You are my Lord, there is no god but You. You created me and I am Your servant, and I keep Your covenant and my promise to You as much as I can. I seek refuge in You from the evil of what I have done. I acknowledge Your favour upon me, and I acknowledge my sin, so forgive me, for none forgives sins except You."</p>
    </div>

    <h2 id="meaning">Understanding the Words</h2>
    <p>What makes this dua "the master of seeking forgiveness" is not its length but its completeness. In just a few lines it moves through every attitude a believer should carry before Allah:</p>
    <ul>
      <li><strong>Tawhid</strong> — "You are my Lord, there is no god but You."</li>
      <li><strong>Servanthood</strong> — "You created me and I am Your servant."</li>
      <li><strong>Honesty about ourselves</strong> — "as much as I can," admitting our limits.</li>
      <li><strong>Seeking refuge</strong> — from the harm of our own mistakes.</li>
      <li><strong>Gratitude</strong> — recognising Allah's blessings.</li>
      <li><strong>Repentance</strong> — owning our sin and asking only Him for forgiveness.</li>
    </ul>

    <h2 id="virtue">The Authentic Virtue</h2>
    <div class="highlight-box">
      The Prophet ﷺ said that whoever recites Sayyidul Istighfar during the day with firm faith in it, and dies that day before evening, will be among the people of Paradise; and whoever recites it at night with firm faith in it, and dies before morning, will be among the people of Paradise. <em>(Sahih al-Bukhari)</em>
    </div>
    <p>This is a tremendous reward for a short daily habit. The condition mentioned in the hadith is <strong>certainty of faith</strong> — reciting it with a present heart, meaning the words, rather than rushing through them.</p>

    <h2 id="when-to-recite">When and How to Recite It</h2>
    <p>Scholars place Sayyidul Istighfar among the morning and evening adhkar. A simple, sustainable routine looks like this:</p>
    <table class="np-table">
      <thead><tr><th>Time</th><th>Practice</th></tr></thead>
      <tbody>
        <tr><td>After Fajr</td><td>Recite once, slowly, reflecting on the meaning.</td></tr>
        <tr><td>After Asr / before Maghrib</td><td>Recite once as part of evening adhkar.</td></tr>
        <tr><td>Anytime</td><td>Repeat when you feel regret over a mistake.</td></tr>
      </tbody>
    </table>
    <p>If you are still building confidence in Arabic pronunciation, learning it correctly with a tutor makes a real difference. You can explore <a href="/learn-tajweed-online">Tajweed lessons online</a> or read our guide on <a href="/blog/morning-evening-adhkar-dhikr">morning and evening adhkar</a>.</p>

    <h2 id="teaching-kids">Teaching It to Children</h2>
    <p>Because it is short and rhythmic, Sayyidul Istighfar is a wonderful dua for children to memorise. Break it into small phrases, recite it together after Fajr, and explain one meaning each week. Over a month, most children can hold the whole dua with understanding. For a structured approach, see <a href="/online-quran-classes-for-kids">online Quran classes for kids</a>.</p>

    <h2 id="faqs">Frequently Asked Questions</h2>
    <details class="faq-acc"><summary>What does Sayyidul Istighfar mean? <span>+</span></summary><p>Sayyidul Istighfar means "the master (or best) of seeking forgiveness." It is a comprehensive supplication taught by the Prophet Muhammad ﷺ that combines Tawhid, gratitude, and repentance in a few short lines.</p></details>
    <details class="faq-acc"><summary>Is Sayyidul Istighfar authentic? <span>+</span></summary><p>Yes. It is reported in Sahih al-Bukhari, one of the most authentic collections of hadith, on the authority of Shaddad ibn Aws (may Allah be pleased with him).</p></details>
    <details class="faq-acc"><summary>When should I recite Sayyidul Istighfar? <span>+</span></summary><p>It is best recited once in the morning (after Fajr) and once in the evening as part of the daily adhkar. You may also repeat it whenever you feel regret over a mistake.</p></details>
    <details class="faq-acc"><summary>What is the reward for reciting it? <span>+</span></summary><p>The Prophet ﷺ said that whoever recites it with firm faith during the day and dies before evening, or recites it at night and dies before morning, will be among the people of Paradise (Sahih al-Bukhari).</p></details>
    <details class="faq-acc"><summary>Can children memorise Sayyidul Istighfar? <span>+</span></summary><p>Yes. It is short and easy to break into phrases, which makes it ideal for children. Reciting it together daily and explaining one part each week helps them memorise it with understanding.</p></details>

    ${ctaButton}`,
  },

  "manzil-dua-protection-ruqyah": {
    style: STYLE,
    content: `<p>The <strong>Manzil</strong> (منزل) is a well-known collection of verses from the Holy Quran, gathered together as a form of <strong>ruqyah</strong> — spiritual protection and healing sought only through the words of Allah. Many Muslim families recite it daily for protection from harm, the evil eye, and negative influences.</p>

    <p>The Manzil is not a separate "book" or a new dua. Every word of it is Quran. It is simply a curated selection of specific verses that scholars have long recommended for protection, brought together in one convenient sequence so a believer can recite them regularly.</p>

    <p>In this guide we explain what the Manzil is, which verses it contains, how and when to recite it, and the correct belief a Muslim should hold while using the Quran for protection.</p>

    <h2 id="what-is-manzil">What Is the Manzil?</h2>
    <p>The Manzil is a compilation of 33 verses drawn from various chapters of the Quran. This particular arrangement is widely attributed to Shaykh Muhammad Zakariya al-Kandhlawi. Because it collects the strongest protective verses in one place, families often read it once or twice a day.</p>
    <div class="highlight-box">
      <strong>Key point:</strong> The protection comes from Allah alone. The verses are a means (sabab); the results are always in Allah's hands. Reciting with sincerity, understanding, and reliance on Allah is what matters most.
    </div>

    <h2 id="verses-included">Which Verses Are in the Manzil?</h2>
    <p>The Manzil brings together the following passages from the Quran:</p>
    <table class="np-table">
      <thead><tr><th>Surah</th><th>Verses</th></tr></thead>
      <tbody>
        <tr><td>Al-Fatiha (1)</td><td>1–7</td></tr>
        <tr><td>Al-Baqarah (2)</td><td>1–5, 163, 255–257 (incl. Ayatul Kursi), 284–286</td></tr>
        <tr><td>Al-Imran (3)</td><td>18, 26–27</td></tr>
        <tr><td>Al-A‘raf (7)</td><td>54–56</td></tr>
        <tr><td>Al-Isra (17)</td><td>110–111</td></tr>
        <tr><td>Al-Mu’minun (23)</td><td>115–118</td></tr>
        <tr><td>As-Saffat (37)</td><td>1–11</td></tr>
        <tr><td>Ar-Rahman (55)</td><td>33–40</td></tr>
        <tr><td>Al-Hashr (59)</td><td>21–24</td></tr>
        <tr><td>Al-Jinn (72)</td><td>3</td></tr>
        <tr><td>Al-Kafirun (109)</td><td>1–6</td></tr>
        <tr><td>Al-Ikhlas (112)</td><td>1–4</td></tr>
        <tr><td>Al-Falaq (113)</td><td>1–5</td></tr>
        <tr><td>An-Nas (114)</td><td>1–6</td></tr>
      </tbody>
    </table>

    <h2 id="key-verses">Two Cornerstones: Ayatul Kursi & the Three Quls</h2>
    <p>At the heart of the Manzil are some of the most powerful protective verses in the Quran. Ayatul Kursi (2:255) is foremost among them:</p>
    <div class="verse-card">
      <span class="vnum">Al-Baqarah 2:255</span>
      <p class="arabic">اللَّهُ لَا إِلَٰهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ ۚ لَا تَأْخُذُهُ سِنَةٌ وَلَا نَوْمٌ</p>
      <p class="translit">Allahu la ilaha illa huwal-Hayyul-Qayyum, la ta’khudhuhu sinatun wa la nawm.</p>
      <p class="trans-en"><strong>Meaning:</strong> "Allah — there is no god but He, the Ever-Living, the Sustainer of all. Neither drowsiness overtakes Him nor sleep."</p>
    </div>
    <p>The Manzil also ends with the three protective surahs — Al-Ikhlas, Al-Falaq, and An-Nas — the same surahs the Prophet ﷺ would recite for protection each night. You can read more in our guide to the <a href="/blog/4-quls">Four Quls</a> and <a href="/blog/ayatul-kursi-arabic-english-benefits">Ayatul Kursi</a>.</p>

    <h2 id="how-to-recite">How and When to Recite the Manzil</h2>
    <ul>
      <li><strong>Frequency:</strong> Commonly recited once in the morning and once in the evening.</li>
      <li><strong>State:</strong> With wudu where possible, in a calm place, understanding that Allah is the true Protector.</li>
      <li><strong>For the home:</strong> Many families recite it aloud so the household can listen together.</li>
      <li><strong>For illness or distress:</strong> It may be recited and gently blown over oneself or a sick person, as the Prophet ﷺ did with the protective surahs.</li>
    </ul>
    <div class="gold-box">
      <strong>Recite it correctly:</strong> Because the Manzil is entirely Quran, correct pronunciation (Tajweed) preserves the meaning. If you would like help reading these verses accurately, explore <a href="/learn-tajweed-online">online Tajweed classes</a> or <a href="/learn-quran-online">learn Quran online</a> with a live tutor.
    </div>

    <h2 id="belief">Keeping the Right Belief</h2>
    <p>Using the Quran for protection is established in the Sunnah, but it must be paired with sound belief:</p>
    <ul>
      <li>Protection and cure are from <strong>Allah alone</strong>.</li>
      <li>The verses are a lawful means, not a guaranteed formula.</li>
      <li>Avoid amulets or practices that contradict Tawhid.</li>
      <li>Combine recitation with prayer, charity, and staying away from sin.</li>
    </ul>

    <h2 id="faqs">Frequently Asked Questions</h2>
    <details class="faq-acc"><summary>What is the Manzil dua? <span>+</span></summary><p>The Manzil is a compilation of 33 verses from the Quran, gathered together for protection and ruqyah. Every word of it is Quran; it is simply a curated selection of protective verses read as one sequence.</p></details>
    <details class="faq-acc"><summary>Is the Manzil found in the Quran? <span>+</span></summary><p>Yes. All of the Manzil is Quran. It draws verses from surahs such as Al-Fatiha, Al-Baqarah, Ar-Rahman, Al-Hashr, and the last three surahs. The arrangement is widely attributed to Shaykh Muhammad Zakariya al-Kandhlawi.</p></details>
    <details class="faq-acc"><summary>How often should the Manzil be recited? <span>+</span></summary><p>It is commonly recited once in the morning and once in the evening. Some families also recite it during illness or distress, blowing gently over the affected person as the Prophet ﷺ did with the protective surahs.</p></details>
    <details class="faq-acc"><summary>Does the Manzil guarantee protection? <span>+</span></summary><p>Protection comes from Allah alone. The Manzil is a lawful means (sabab) taught through the Sunnah of reciting Quran for protection, but the outcome is always in Allah's hands. It should be paired with sincere faith and righteous actions.</p></details>
    <details class="faq-acc"><summary>Can I recite the Manzil without wudu? <span>+</span></summary><p>Reciting from memory without wudu is generally permitted, but reciting in a state of purity is better and more respectful. If touching the physical mushaf, most scholars require wudu.</p></details>

    ${ctaButton}`,
  },

  "ayat-al-shifa-quranic-verses-of-healing": {
    style: STYLE,
    content: `<p><strong>Ayat al-Shifa</strong> (آيات الشفاء) are the "verses of healing" — six verses of the Quran in which Allah mentions <em>shifa</em> (healing and cure). Muslims have long recited these verses seeking spiritual and physical wellbeing, always trusting that the true Healer is Allah, Ash-Shafi.</p>

    <p>These verses are a beautiful reminder that the Quran itself is described by Allah as "a healing and a mercy for the believers." Reciting them with understanding brings comfort to the heart, and many recite them over the sick as a form of ruqyah.</p>

    <p>Below are all six verses with Arabic, transliteration, and clear English meaning, followed by guidance on how to recite them and the correct belief to hold while doing so.</p>

    <h2 id="the-six-verses">The Six Verses of Healing</h2>

    <div class="verse-card">
      <span class="vnum">At-Tawbah 9:14</span>
      <p class="arabic">وَيَشْفِ صُدُورَ قَوْمٍ مُؤْمِنِينَ</p>
      <p class="translit">Wa yashfi sudura qawmin mu’minin.</p>
      <p class="trans-en"><strong>Meaning:</strong> "…and heal the hearts of a believing people."</p>
    </div>

    <div class="verse-card">
      <span class="vnum">Yunus 10:57</span>
      <p class="arabic">وَشِفَاءٌ لِمَا فِي الصُّدُورِ وَهُدًى وَرَحْمَةٌ لِلْمُؤْمِنِينَ</p>
      <p class="translit">Wa shifa’un lima fis-sudur, wa hudan wa rahmatun lil-mu’minin.</p>
      <p class="trans-en"><strong>Meaning:</strong> "…and a healing for what is in the hearts, and guidance and mercy for the believers."</p>
    </div>

    <div class="verse-card">
      <span class="vnum">An-Nahl 16:69</span>
      <p class="arabic">فِيهِ شِفَاءٌ لِلنَّاسِ</p>
      <p class="translit">Fihi shifa’un lin-nas.</p>
      <p class="trans-en"><strong>Meaning:</strong> "…in it there is healing for people."</p>
    </div>

    <div class="verse-card">
      <span class="vnum">Al-Isra 17:82</span>
      <p class="arabic">وَنُنَزِّلُ مِنَ الْقُرْآنِ مَا هُوَ شِفَاءٌ وَرَحْمَةٌ لِلْمُؤْمِنِينَ</p>
      <p class="translit">Wa nunazzilu minal-Qur’ani ma huwa shifa’un wa rahmatun lil-mu’minin.</p>
      <p class="trans-en"><strong>Meaning:</strong> "And We send down of the Quran that which is a healing and a mercy for the believers."</p>
    </div>

    <div class="verse-card">
      <span class="vnum">Ash-Shu‘ara 26:80</span>
      <p class="arabic">وَإِذَا مَرِضْتُ فَهُوَ يَشْفِينِ</p>
      <p class="translit">Wa idha maridtu fahuwa yashfin.</p>
      <p class="trans-en"><strong>Meaning:</strong> "And when I am ill, it is He who heals me." (the words of Ibrahim, peace be upon him)</p>
    </div>

    <div class="verse-card">
      <span class="vnum">Fussilat 41:44</span>
      <p class="arabic">قُلْ هُوَ لِلَّذِينَ آمَنُوا هُدًى وَشِفَاءٌ</p>
      <p class="translit">Qul huwa lilladhina amanu hudan wa shifa’.</p>
      <p class="trans-en"><strong>Meaning:</strong> "Say, it is, for those who believe, a guidance and a healing."</p>
    </div>

    <h2 id="how-to-use">How to Recite Ayat al-Shifa</h2>
    <ul>
      <li>Begin with sincerity, facing Allah as the only true Healer (Ash-Shafi).</li>
      <li>Recite the verses over yourself or a sick person, then gently blow over them — as the Prophet ﷺ used to do with recitation.</li>
      <li>Some recite the six verses several times, along with Al-Fatiha, which is itself called <em>Ash-Shifa</em> in the Sunnah.</li>
      <li>Combine recitation with lawful medical treatment; the Quran and medicine are not in conflict.</li>
    </ul>
    <div class="highlight-box">
      The Prophet ﷺ taught that Allah has not sent down a disease except that He has also sent down its cure. Seeking treatment and seeking healing through Quran are both part of the Sunnah.
    </div>

    <h2 id="fatiha-healing">Al-Fatiha: The Greatest Ruqyah</h2>
    <p>Alongside these six verses, Surah Al-Fatiha holds a special place in healing. In an authentic narration, the Companions recited Al-Fatiha over a man who had been stung, and he recovered by Allah's permission. Learn more in our guide to <a href="/blog/surah-al-fatiha-arabic-english">Surah Al-Fatiha</a>.</p>

    <h2 id="belief">The Right Belief While Seeking Healing</h2>
    <p>Reciting Ayat al-Shifa is a means, not magic. A believer holds firmly that:</p>
    <ul>
      <li>Cure and recovery come only from <strong>Allah</strong>.</li>
      <li>The verses are a blessed means (sabab), and results rest with Allah.</li>
      <li>It is encouraged to also seek qualified medical care.</li>
      <li>Patience and reliance on Allah (tawakkul) are themselves a source of reward.</li>
    </ul>
    <p>If you would like to recite these verses with correct pronunciation, a live tutor can help — see <a href="/learn-quran-online">learn Quran online</a> or <a href="/learn-tajweed-online">Tajweed classes online</a>.</p>

    <h2 id="faqs">Frequently Asked Questions</h2>
    <details class="faq-acc"><summary>What are Ayat al-Shifa? <span>+</span></summary><p>Ayat al-Shifa are six verses of the Quran that mention healing (shifa). They are found in Surah At-Tawbah (9:14), Yunus (10:57), An-Nahl (16:69), Al-Isra (17:82), Ash-Shu‘ara (26:80), and Fussilat (41:44).</p></details>
    <details class="faq-acc"><summary>How do you recite Ayat al-Shifa for healing? <span>+</span></summary><p>Recite the six verses sincerely over yourself or a sick person and gently blow over them, as the Prophet ﷺ did with recitation. Many also add Surah Al-Fatiha. This should accompany, not replace, lawful medical treatment.</p></details>
    <details class="faq-acc"><summary>Does reciting Ayat al-Shifa guarantee a cure? <span>+</span></summary><p>No. Healing comes only from Allah, Ash-Shafi. The verses are a blessed means (sabab) taught in the Sunnah, but the outcome is always in Allah's hands. It is encouraged to combine recitation with qualified medical care.</p></details>
    <details class="faq-acc"><summary>Can I recite Ayat al-Shifa for someone else? <span>+</span></summary><p>Yes. You may recite the verses over a sick family member or friend and blow gently over them. This form of ruqyah with the Quran is established in the Sunnah of the Prophet ﷺ.</p></details>
    <details class="faq-acc"><summary>Is Surah Al-Fatiha connected to healing? <span>+</span></summary><p>Yes. Al-Fatiha is referred to as Ash-Shifa (the cure) in the Sunnah. In an authentic narration, Companions recited it over a man who had been stung and he recovered by Allah's permission.</p></details>

    ${ctaButton}`,
  },
};
