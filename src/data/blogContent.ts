// Auto-extracted from original HTML blog files — styles + content

// Shared style for Islamic reference articles (verses, duas, alphabet)
const ISLAMIC_STYLE = `.article-body { font-size: 1.05rem; line-height: 1.85; color: #374151; }
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
  .letter-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 10px; margin: 24px 0; }
  .letter-cell { border: 1px solid var(--border); border-radius: 12px; padding: 12px 6px; text-align: center; background: rgba(10,110,79,.03); }
  .letter-cell .lg-ar { font-family: var(--font-amiri, 'Amiri', serif); font-size: 2rem; color: var(--emerald); direction: rtl; line-height: 1.3; }
  .letter-cell .lg-name { font-size: .8rem; font-weight: 700; color: var(--charcoal); margin-top: 4px; }
  .faq-acc { border: 1px solid var(--border); border-radius: 10px; margin-bottom: 12px; overflow: hidden; }
  .faq-acc summary { padding: 16px 20px; font-weight: 700; cursor: pointer; background: var(--ivory); color: var(--charcoal); list-style: none; display: flex; justify-content: space-between; align-items: center; font-size: .95rem; }
  .faq-acc summary::-webkit-details-marker { display: none; }
  .faq-acc summary span { color: var(--emerald); margin-left: 12px; }
  .faq-acc p { padding: 16px 20px; margin: 0; color: #374151; font-size: .92rem; line-height: 1.75; border-top: 1px solid var(--border); }
  @media (max-width: 576px) { .np-table { font-size: .82rem; } .np-table th, .np-table td { padding: 8px 9px; } .arabic { font-size: 1.55rem; line-height: 2.3; } .letter-grid { grid-template-columns: repeat(3, 1fr); } }`;

import { highTrafficBlogContent } from "./blogContentHighTraffic";

export const blogContent: Record<string, { style: string; content: string }> = {
  ...highTrafficBlogContent,
  "allahu-akbar-meaning-in-english": {
    style: ISLAMIC_STYLE,
    content: `<p><strong>Allahu Akbar</strong> (الله أكبر) is among the most powerful and frequently spoken phrases in Islam — heard five times a day in the Adhan, repeated throughout every Salah, and proclaimed on Eid. If you have ever wondered what <strong>Allahu Akbar meaning in English</strong> is, the answer is simple yet profound: <em>"Allah is the Greatest."</em></p>

          <div class="highlight-box">
            <strong>Quick answer:</strong> Allahu Akbar (الله أكبر) means <strong>"Allah is the Greatest"</strong> — declaring that nothing and no one is greater than Allah. Muslims say it in the Adhan, Salah, Eid Takbir, and moments of awe, gratitude or need. It is one of the four most beloved words to Allah (Sahih Muslim 2137).
          </div>

          <h2 id="arabic">Allahu Akbar — Arabic, transliteration &amp; English</h2>
          <div class="verse-card">
            <span class="vnum">TAKBIR · DECLARATION OF ALLAH'S GREATNESS</span>
            <div class="arabic">اللهُ أَكْبَرُ</div>
            <p class="translit">Allahu Akbar.</p>
            <p class="trans-en"><strong>English:</strong> Allah is the Greatest. / Allah is Greater.</p>
          </div>

          <h2 id="word-by-word">Word-by-word meaning</h2>
          <table class="np-table">
            <tr><th>Arabic</th><th>Transliteration</th><th>Meaning</th></tr>
            <tr><td>الله</td><td>Allah</td><td>Allah — the one true God, Creator of everything</td></tr>
            <tr><td>أَكْبَر</td><td>Akbar</td><td>Greater / Greatest — from kabir (great), superlative form</td></tr>
          </table>
          <p>Grammatically, <em>akbar</em> is the superlative of <em>kabir</em> (great). So Allahu Akbar means Allah is greater than everything — greater than any fear, any joy, any power, any problem. When a Muslim says it, they affirm that nothing compares to Allah's greatness.</p>

          <h2 id="when">When do Muslims say Allahu Akbar?</h2>
          <table class="np-table">
            <tr><th>Occasion</th><th>How it is used</th></tr>
            <tr><td><strong>Adhan (call to prayer)</strong></td><td>Proclaimed six times — calling the community to Salah</td></tr>
            <tr><td><strong>Salah (prayer)</strong></td><td>Opening takbir (Takbirat al-Ihram), before every movement between positions</td></tr>
            <tr><td><strong>After Salah</strong></td><td>34 times as part of post-prayer dhikr alongside Subhanallah and Alhamdulillah</td></tr>
            <tr><td><strong>Eid &amp; celebrations</strong></td><td>Takbirat: "Allahu Akbar, Allahu Akbar, La ilaha illallah, Allahu Akbar, Allahu Akbar wa lillahil-hamd"</td></tr>
            <tr><td><strong>Seeing something amazing</strong></td><td>Expressing awe at Allah's creation — a sunset, a blessing, a wonder</td></tr>
            <tr><td><strong>Times of difficulty</strong></td><td>Remembering Allah is greater than any trial — strength and comfort in hardship</td></tr>
            <tr><td><strong>Good news</strong></td><td>Gratitude and glorification — Allah is greater than any blessing received</td></tr>
          </table>

          <h2 id="hadith">Authentic hadith — reward of Allahu Akbar</h2>
          <div class="gold-box">
            <p>The Prophet ﷺ said: <em>"The most beloved words to Allah are four: <strong>Subhanallah</strong>, <strong>Alhamdulillah</strong>, <strong>La ilaha illallah</strong>, and <strong>Allahu Akbar</strong>. It does not matter with which of them you begin."</em></p>
            <p style="margin-bottom:0;"><strong>Source:</strong> Sahih Muslim 2137</p>
          </div>
          <p>These four phrases form the core of daily dhikr. After every obligatory prayer, the Sunnah is to recite Subhanallah 33 times, Alhamdulillah 33 times, and Allahu Akbar 34 times — totalling 100 remembrances. The Prophet ﷺ said whoever does this, their sins will be forgiven even if they are like the foam of the sea (Sahih Muslim 597).</p>

          <h2 id="salah">Allahu Akbar in Salah — the Takbir</h2>
          <p>Every prayer begins with <strong>Takbirat al-Ihram</strong> — raising the hands and saying "Allahu Akbar" to enter the state of prayer. This takbir is repeated when moving from standing to bowing (ruku), from bowing to standing, from standing to prostration (sujood), and between the two sujoods. Learn the full prayer with our <a href="/blog/how-to-pray-salah-step-by-step">step-by-step Salah guide</a>.</p>

          <h2 id="related-phrases">Allahu Akbar among the four pillars of dhikr</h2>
          <ul>
            <li><a href="/blog/subhanallah-meaning">Subhanallah</a> — Glory be to Allah (declares perfection)</li>
            <li><a href="/blog/alhamdulillah-meaning-in-english">Alhamdulillah</a> — All praise to Allah (expresses gratitude)</li>
            <li><a href="/blog/la-ilaha-illallah-meaning">La ilaha illallah</a> — There is no god but Allah (affirms Tawheed)</li>
            <li><strong>Allahu Akbar</strong> — Allah is the Greatest (declares supremacy)</li>
          </ul>

          <h2 id="faq">Frequently asked questions</h2>
          <details class="faq-acc"><summary>What does Allahu Akbar mean in English?<span>+</span></summary>
            <p>It means "Allah is the Greatest" or "Allah is Greater" — declaring that Allah is greater than anything in existence: any person, power, fear, or desire.</p>
          </details>
          <details class="faq-acc"><summary>How do you pronounce Allahu Akbar?<span>+</span></summary>
            <p>Allahu Akbar — "Al-la-hu Ak-bar." The "kh" in Akbar is a deep throat sound. Stress falls on "Ak" in Akbar. Practice with a Quran tutor for perfect pronunciation.</p>
          </details>
          <details class="faq-acc"><summary>Is Allahu Akbar only said in prayer?<span>+</span></summary>
            <p>No. While it is central to Salah, Muslims also say it in the Adhan, on Eid, during dhikr after prayer, when seeing something amazing, and in any moment of glorifying Allah.</p>
          </details>

          <div class="highlight-box">
            <strong>Want your child to learn Allahu Akbar, Salah and daily dhikr with correct pronunciation?</strong> NoorPath Academy teaches Islamic phrases, Noorani Qaida and Quran with Tajweed in live 1-on-1 classes. <a href="/online-quran-classes-for-kids">Book a free 30-minute trial</a> — no credit card required.
          </div>`,
  },
  "la-ilaha-illallah-meaning": {
    style: ISLAMIC_STYLE,
    content: `<p><strong>La ilaha illallah</strong> (لا إله إلا الله) is the declaration that defines Islam itself. Every Muslim child learns it as the First Kalima; every convert speaks it to enter the faith; and the Prophet ﷺ called it the best dhikr. Here is the complete <strong>La ilaha illallah meaning in English</strong>, with Arabic, transliteration, and why it is the most important sentence a Muslim ever speaks.</p>

          <div class="highlight-box">
            <strong>Quick answer:</strong> La ilaha illallah means <strong>"There is no god worthy of worship except Allah."</strong> It is the core of Tawheed (monotheism), the first part of the Shahada, and the First Kalima (Kalima Tayyaba). The Prophet ﷺ said the best dhikr is La ilaha illallah (Tirmidhi 3383).
          </div>

          <h2 id="arabic">La ilaha illallah — Arabic, transliteration &amp; English</h2>
          <div class="verse-card">
            <span class="vnum">FIRST KALIMA · KALIMA TAYYABA · THE WORD OF PURITY</span>
            <div class="arabic">لَا إِلَٰهَ إِلَّا اللَّهُ</div>
            <p class="translit">Laa ilaaha illallaah.</p>
            <p class="trans-en"><strong>English:</strong> There is no god worthy of worship except Allah.</p>
          </div>

          <h2 id="word-by-word">Word-by-word meaning</h2>
          <table class="np-table">
            <tr><th>Arabic</th><th>Transliteration</th><th>Meaning</th></tr>
            <tr><td>لَا</td><td>Laa</td><td>No — negation; rejecting all false gods</td></tr>
            <tr><td>إِلَٰهَ</td><td>Ilaaha</td><td>God / deity worthy of worship</td></tr>
            <tr><td>إِلَّا</td><td>Illaa</td><td>Except — the exception is only Allah</td></tr>
            <tr><td>اللَّهُ</td><td>Allaah</td><td>Allah — the one true God</td></tr>
          </table>
          <p>This phrase has two parts: <strong>negation</strong> (laa ilaaha — there is no god) and <strong>affirmation</strong> (illallaah — except Allah). Together they form the purest statement of Tawheed — worship belongs to Allah alone.</p>

          <h2 id="shahada">Connection to the Shahada (First Pillar of Islam)</h2>
          <p>The full Shahada (testimony of faith) is:</p>
          <div class="verse-card">
            <div class="arabic">أَشْهَدُ أَنْ لَا إِلَٰهَ إِلَّا اللَّهُ وَأَشْهَدُ أَنَّ مُحَمَّدًا رَسُولُ اللَّهِ</div>
            <p class="translit">Ash-hadu an laa ilaaha illallaah wa ash-hadu anna Muhammadan rasoolullaah.</p>
            <p class="trans-en"><strong>English:</strong> I bear witness that there is no god but Allah, and I bear witness that Muhammad is the Messenger of Allah.</p>
          </div>
          <p>La ilaha illallah is the first half — without it, nothing else in Islam stands. It is also the First Kalima (Kalima Tayyaba) taught to every Muslim child. See our guide to the <a href="/blog/six-kalimas-of-islam">6 Kalimas of Islam</a>.</p>

          <h2 id="benefits">Benefits and authentic hadith</h2>
          <ul>
            <li><strong>Best dhikr:</strong> The Prophet ﷺ said: "The best dhikr is La ilaha illallah, and the best dua is Alhamdulillah." (Tirmidhi 3383)</li>
            <li><strong>Among the most beloved words:</strong> One of the four phrases most beloved to Allah (Sahih Muslim 2137)</li>
            <li><strong>Key to Paradise:</strong> Whoever's last words are La ilaha illallah will enter Paradise (Abu Dawud 3116 — hasan)</li>
            <li><strong>Erases sins:</strong> Regular recitation with sincerity is a cause of forgiveness</li>
            <li><strong>Foundation of all worship:</strong> Salah, fasting, Hajj — all depend on this belief</li>
          </ul>

          <h2 id="tawheed">What is Tawheed?</h2>
          <p><strong>Tawheed</strong> means affirming the oneness of Allah in three ways: (1) <em>Tawheed ar-Rububiyyah</em> — Allah alone creates and sustains; (2) <em>Tawheed al-Uluhiyyah</em> — worship belongs to Allah alone; (3) <em>Tawheed al-Asma was-Sifat</em> — Allah's names and attributes are unique and perfect. La ilaha illallah captures the heart of Tawheed al-Uluhiyyah — the worship that belongs to Allah alone.</p>

          <h2 id="teach-kids">How to teach La ilaha illallah to children</h2>
          <ol>
            <li>Break into two parts: "Laa ilaaha" (no god) + "illallaah" (except Allah)</li>
            <li>Explain simply: "We only worship Allah — not idols, not people, not anything else"</li>
            <li>Listen and repeat daily — 5 minutes builds fluency fast</li>
            <li>Connect to Salah — it appears in Tashahhud every prayer</li>
            <li>Pair with <a href="/blog/allahu-akbar-meaning-in-english">Allahu Akbar</a> and the four pillars of dhikr</li>
          </ol>

          <h2 id="related">Related guides</h2>
          <ul>
            <li><a href="/blog/six-kalimas-of-islam">6 Kalimas of Islam — Full Arabic &amp; English</a></li>
            <li><a href="/blog/five-pillars-of-islam-explained">Five Pillars of Islam Explained</a></li>
            <li><a href="/blog/islamic-phrases-meaning">30 Islamic Phrases — Meanings &amp; When to Say</a></li>
            <li><a href="/blog/surah-ikhlas-benefits">Surah Ikhlas — Pure Tawheed in 4 Verses</a></li>
          </ul>

          <h2 id="faq">Frequently asked questions</h2>
          <details class="faq-acc"><summary>What is La ilaha illallah in English?<span>+</span></summary>
            <p>"There is no god worthy of worship except Allah." It rejects all false deities and affirms that only Allah deserves worship, obedience and devotion.</p>
          </details>
          <details class="faq-acc"><summary>Is La ilaha illallah the same as the Shahada?<span>+</span></summary>
            <p>It is the first half of the Shahada. The complete Shahada adds "Muhammadan rasoolullah" — bearing witness that Muhammad ﷺ is Allah's Messenger.</p>
          </details>
          <details class="faq-acc"><summary>How often should you say La ilaha illallah?<span>+</span></summary>
            <p>There is no fixed limit — say it throughout the day as dhikr. It is in every Salah (Tashahhud), and many Muslims recite it frequently as remembrance of Allah.</p>
          </details>

          <div class="highlight-box">
            <strong>Help your child learn the Kalimas and Shahada with correct Tajweed.</strong> NoorPath Academy teaches the 6 Kalimas, Islamic Studies and Quran in live 1-on-1 classes for kids worldwide. <a href="/online-quran-classes-for-kids">Book a free 30-minute trial</a>.
          </div>`,
  },
  "dua-before-sleeping-islam": {
    style: ISLAMIC_STYLE,
    content: `<p>Before closing your eyes each night, the Prophet Muhammad ﷺ taught a complete routine of <strong>dua before sleeping</strong> — words that bring protection, forgiveness and peace until Fajr. This guide covers every authentic sleeping dua in Islam: Arabic, transliteration, English meaning, and the exact Sunnah order.</p>

          <div class="highlight-box">
            <strong>Quick answer:</strong> The Sunnah bedtime routine: (1) Wudu, (2) lie on your right side, (3) recite <strong>Bismika Allahumma amutu wa ahya</strong>, (4) <a href="/blog/ayatul-kursi-arabic-english-benefits">Ayatul Kursi</a>, (5) <a href="/blog/last-two-ayahs-surah-baqarah">last 2 ayats of Surah Baqarah</a>, (6) the <a href="/blog/4-quls">3 Quls</a> blown into the hands and wiped over the body. Full text below.
          </div>

          <h2 id="main-dua">Main dua before sleeping — Bismika Allahumma</h2>
          <div class="verse-card">
            <span class="vnum">PROPHETIC DUA BEFORE SLEEP · Sahih al-Bukhari 6314</span>
            <div class="arabic">بِاسْمِكَ اللَّهُمَّ أَمُوتُ وَأَحْيَا</div>
            <p class="translit">Bismika Allaahumma amootu wa ahya.</p>
            <p class="trans-en"><strong>English:</strong> In Your name, O Allah, I die and I live.</p>
          </div>
          <p>Sleep is likened to a small death — and waking is resurrection. This dua places the night in Allah's hands. The Prophet ﷺ said it every night before sleeping (Sahih al-Bukhari 6314).</p>

          <h2 id="complete-routine">Complete Sunnah bedtime routine — step by step</h2>
          <ol>
            <li><strong>Perform wudu</strong> before sleeping if possible (Sunnah)</li>
            <li><strong>Dust the bed</strong> lightly with the edge of your garment</li>
            <li><strong>Lie on your right side</strong> — the Sunnah sleeping position</li>
            <li>Recite <strong>Bismika Allahumma amutu wa ahya</strong></li>
            <li>Recite <strong><a href="/blog/ayatul-kursi-arabic-english-benefits">Ayatul Kursi</a></strong> (Surah Al-Baqarah 2:255) — Allah appoints a guardian; no Shaytan comes near until morning (Bukhari 5009)</li>
            <li>Recite the <strong><a href="/blog/last-two-ayahs-surah-baqarah">last two ayats of Surah Baqarah</a></strong> — they will be kafat (sufficient) for you (Bukhari 5009)</li>
            <li>Recite <strong>Surah Al-Ikhlas, Al-Falaq and An-Nas</strong> — each once, blow into your palms, and wipe over your body (Bukhari 5017). See our <a href="/blog/4-quls">4 Quls guide</a></li>
          </ol>

          <h2 id="more-duas">More duas before sleeping</h2>
          <div class="verse-card">
            <span class="vnum">DUA · Sahih al-Bukhari 6320</span>
            <div class="arabic">اللَّهُمَّ قِنِي عَذَابَكَ يَوْمَ تَبْعَثُ عِبَادَكَ</div>
            <p class="translit">Allaahumma qinee 'adhaabaka yawma tab'athu 'ibaadak.</p>
            <p class="trans-en"><strong>English:</strong> O Allah, protect me from Your punishment on the Day You resurrect Your servants.</p>
          </div>
          <div class="verse-card">
            <span class="vnum">DUA · Sahih Muslim 2714</span>
            <div class="arabic">اللَّهُمَّ أَسْلَمْتُ نَفْسِي إِلَيْكَ، وَفَوَّضْتُ أَمْرِي إِلَيْكَ، وَوَجَّهْتُ وَجْهِي إِلَيْكَ</div>
            <p class="translit">Allaahumma aslamtu nafsee ilayk, wa fawwadtu amree ilayk, wa wajjahtu wajhee ilayk...</p>
            <p class="trans-en"><strong>English:</strong> O Allah, I submit myself to You, entrust my affairs to You, and turn my face to You...</p>
          </div>
          <p>These longer duas express complete trust in Allah (tawakkul) before sleep. Recite whichever you know — consistency matters more than quantity.</p>

          <h2 id="protection">Why bedtime adhkar protect you through the night</h2>
          <p>Al-Bara ibn Azib (رضي الله عنه) reported the Prophet's ﷺ instruction: Ayatul Kursi brings a guardian angel and keeps Shaytan away until morning; the last two ayats of Surah Baqarah are kafat (sufficient). The 3 Quls were recited by the Prophet ﷺ every night before sleep — blown into the hands and wiped over the body. Together they form the strongest nightly shield in Islam.</p>

          <h2 id="kids">Teaching bedtime duas to children</h2>
          <ul>
            <li>Start with <strong>Bismika Allahumma</strong> — only one short sentence</li>
            <li>Add <strong>Surah Al-Ikhlas</strong> once they know it from Salah</li>
            <li>Make it a family routine — parents recite out loud, children follow</li>
            <li>Explain: "We ask Allah to protect us while we sleep"</li>
            <li>See <a href="/blog/duas-for-kids-to-memorize">20 essential duas for kids</a> for more</li>
          </ul>

          <h2 id="related">Related guides</h2>
          <ul>
            <li><a href="/blog/last-two-ayahs-surah-baqarah">Last Two Ayats of Surah Baqarah</a></li>
            <li><a href="/blog/ayatul-kursi-arabic-english-benefits">Ayatul Kursi — Arabic, English &amp; Benefits</a></li>
            <li><a href="/blog/4-quls">The 4 Quls — Ikhlas, Falaq &amp; Naas</a></li>
            <li><a href="/blog/surah-mulk-benefits">Surah Mulk Before Sleep</a></li>
            <li><a href="/blog/morning-evening-adhkar-dhikr">Morning &amp; Evening Adhkar</a></li>
          </ul>

          <h2 id="faq">Frequently asked questions</h2>
          <details class="faq-acc"><summary>What is the best dua before sleeping?<span>+</span></summary>
            <p>Bismika Allahumma amutu wa ahya is the primary prophetic dua. For protection, add Ayatul Kursi, the last two ayats of Surah Baqarah, and the 3 Quls — this is the complete Sunnah routine.</p>
          </details>
          <details class="faq-acc"><summary>Do you need wudu to recite dua before sleep?<span>+</span></summary>
            <p>Wudu before sleeping is Sunnah but not required for reciting duas. The Prophet ﷺ encouraged sleeping in wudu, but you may still recite all bedtime adhkar without it.</p>
          </details>
          <details class="faq-acc"><summary>Can children recite Ayatul Kursi before sleep?<span>+</span></summary>
            <p>Yes — once memorised. Many children learn Ayatul Kursi early. Start with shorter duas and Surah Ikhlas, then build up to the full bedtime routine.</p>
          </details>

          <div class="highlight-box">
            <strong>Want your child to learn bedtime duas with correct pronunciation?</strong> NoorPath Academy teaches sleeping adhkar, daily duas and Quran with Tajweed in live 1-on-1 classes. <a href="/online-quran-classes-for-kids">Book a free 30-minute trial</a>.
          </div>`,
  },
  "evil-eye-dua-nazar-ruqyah": {
    style: ISLAMIC_STYLE,
    content: `<p>The <strong>evil eye (nazar / al-ain)</strong> is real in Islam — confirmed in the Quran and authentic Sunnah. Millions search for the right <strong>evil eye dua</strong> to protect themselves and their children. This guide covers only what is proven: prophetic duas, Quranic Ruqyah, and the correct Islamic method of protection — without amulets, superstition or shirk.</p>

          <div class="highlight-box">
            <strong>Quick answer:</strong> Protect from the evil eye by: (1) saying <strong><a href="/blog/mashallah-meaning">Mashallah</a></strong> when admiring something, (2) reciting <strong><a href="/blog/ayatul-kursi-arabic-english-benefits">Ayatul Kursi</a></strong> daily, (3) reciting <strong>Surah Al-Falaq and An-Nas</strong> morning, evening and before sleep, (4) making dua for protection. Ruqyah is reciting Quran only — no charms or talismans.
          </div>

          <h2 id="proof">Is the evil eye real in Islam?</h2>
          <div class="gold-box">
            <p>The Prophet ﷺ said: <em>"The evil eye is real. If anything were to overtake the divine decree (qadar), it would be the evil eye."</em></p>
            <p style="margin-bottom:0;"><strong>Source:</strong> Sahih Muslim 2188</p>
          </div>
          <p>Allah says in the Quran: <em>"And from the evil of an envier when he envies."</em> (113:5 — Surah Al-Falaq). The evil eye (al-ain) occurs when someone admires a blessing — beauty, health, wealth, a child — without mentioning Allah, and harm may follow by Allah's permission. It is not magic; it is a reality the Prophet ﷺ confirmed.</p>

          <h2 id="prevention">How to prevent the evil eye — the prophetic method</h2>
          <table class="np-table">
            <tr><th>Action</th><th>Evidence &amp; method</th></tr>
            <tr><td><strong>Say Mashallah</strong></td><td>When admiring anything — "Mashallah, tabarakallah" — acknowledging Allah's will (Quran 18:39). See <a href="/blog/mashallah-meaning">Mashallah meaning guide</a></td></tr>
            <tr><td><strong>Recite Ayatul Kursi</strong></td><td>Morning, evening and before sleep — protection from Shaytan and harm (Bukhari 5009)</td></tr>
            <tr><td><strong>Surah Al-Falaq &amp; An-Nas</strong></td><td>3 times morning and evening; before sleep blown into hands and wiped over body (Abu Dawud 5082, Bukhari 5017)</td></tr>
            <tr><td><strong>Hide blessings</strong></td><td>The Prophet ﷺ hid Hasan and Husayn (رضي الله عنهما) when admiring them, saying protective duas (Bukhari 3371)</td></tr>
            <tr><td><strong>Dua for children</strong></td><td>"U'eedhukuma bi kalimatillahit-tammati min kulli shaytanin wa hammah wa min kulli 'aynin lammah" — I seek protection for you in Allah's perfect words from every devil and harmful eye (Bukhari 3371)</td></tr>
          </table>

          <h2 id="ruqyah">Ruqyah Shariah — Quranic healing and protection</h2>
          <p><strong>Ruqyah</strong> is reciting Quran and authentic duas for healing and protection. It is the only Islamically approved form of spiritual remedy. The Prophet ﷺ performed Ruqyah and approved it when done with Quranic words alone.</p>
          <div class="verse-card">
            <span class="vnum">RUQYAH · SURAH AL-FALAQ 113</span>
            <div class="arabic">قُلْ أَعُوذُ بِرَبِّ الْفَلَقِ ۝ مِن شَرِّ مَا خَلَقَ ۝ وَمِن شَرِّ غَاسِقٍ إِذَا وَقَبَ ۝ وَمِن شَرِّ النَّفَّاثَاتِ فِي الْعُقَدِ ۝ وَمِن شَرِّ حَاسِدٍ إِذَا حَسَدَ</div>
            <p class="trans-en"><strong>English:</strong> Say: I seek refuge in the Lord of daybreak, from the evil of what He created, and from the evil of darkness when it settles, and from the evil of those who blow on knots, and from the evil of an envier when he envies.</p>
          </div>
          <p>Surah An-Nas (114) seeks refuge in the Lord of mankind from the whispering of Shaytan. Together with Al-Falaq, they are the ultimate protection surahs — recited in <a href="/blog/morning-evening-adhkar-dhikr">morning and evening adhkar</a> and before sleep.</p>

          <h2 id="dua-children">Evil eye dua for babies and children</h2>
          <div class="verse-card">
            <span class="vnum">PROPHETIC DUA FOR CHILDREN · Sahih al-Bukhari 3371</span>
            <div class="arabic">أُعِيذُكُمَا بِكَلِمَاتِ اللَّهِ التَّامَّةِ مِن كُلِّ شَيْطَانٍ وَهَامَّةٍ وَمِن كُلِّ عَيْنٍ لَامَّةٍ</div>
            <p class="translit">U'eedhukuma bi kalimaatillaahit-taammati min kulli shaytaanin wa haammah wa min kulli 'aynin laammah.</p>
            <p class="trans-en"><strong>English:</strong> I seek protection for you both in the perfect words of Allah from every devil and poisonous creature and from every harmful evil eye.</p>
          </div>
          <p>The Prophet ﷺ said this over Hasan and Husayn (رضي الله عنهما). Parents should recite it over their children — especially when receiving compliments or when leaving the home.</p>

          <h2 id="symptoms">Possible signs of the evil eye — with caution</h2>
          <p>Islamic scholars mention possible signs: sudden unexplained illness, loss of appetite, unusual fatigue, or sudden reversal of fortune after being praised. <strong>Important:</strong> always seek medical help first for any illness. Ruqyah complements — it does not replace — medical treatment. Consult a knowledgeable scholar for Ruqyah if symptoms persist after medical evaluation.</p>

          <h2 id="avoid">What to avoid — not from the Sunnah</h2>
          <ul>
            <li>Blue eye amulets (nazar boncugu) with no Quranic basis</li>
            <li>Taweez containing unknown writing or shirk</li>
            <li>Visiting fortune tellers or magicians — the Prophet ﷺ said this is kufr (Muslim 2230)</li>
            <li>Believing only objects protect — protection is from Allah alone through His words</li>
          </ul>

          <h2 id="related">Related protection guides</h2>
          <ul>
            <li><a href="/blog/mashallah-meaning">Mashallah Meaning &amp; Evil Eye</a></li>
            <li><a href="/blog/4-quls">The 4 Quls — Surah Falaq &amp; Naas</a></li>
            <li><a href="/blog/dua-before-sleeping-islam">Dua Before Sleeping</a></li>
            <li><a href="/blog/ayatul-kursi-arabic-english-benefits">Ayatul Kursi Benefits</a></li>
          </ul>

          <h2 id="faq">Frequently asked questions</h2>
          <details class="faq-acc"><summary>What dua protects from the evil eye?<span>+</span></summary>
            <p>Recite Surah Al-Falaq and An-Nas (the last two surahs of the Quran), Ayatul Kursi, and say Mashallah when admiring blessings. For children, use the prophetic dua: U'eedhukuma bi kalimaatillah...</p>
          </details>
          <details class="faq-acc"><summary>Does saying Mashallah prevent nazar?<span>+</span></summary>
            <p>Scholars recommend saying Mashallah (and ideally "la quwwata illa billah") when admiring something, as the complete Quranic phrase in Surah Al-Kahf 18:39. It attributes the blessing to Allah and seeks protection.</p>
          </details>
          <details class="faq-acc"><summary>What is Ruqyah in Islam?<span>+</span></summary>
            <p>Ruqyah is reciting Quran — especially Ayatul Kursi, Al-Fatiha, Al-Falaq and An-Nas — and authentic duas for healing and protection. It must contain only Allah's words, with sincere belief that Allah alone heals.</p>
          </details>

          <div class="highlight-box">
            <strong>Teach your child Surah Al-Falaq, An-Nas and daily protection duas with a live tutor.</strong> NoorPath Academy offers Islamic Studies and Quran classes for kids worldwide. <a href="/online-quran-classes-for-kids">Book a free 30-minute trial</a>.
          </div>`,
  },
  "morning-evening-adhkar-dhikr": {
    style: ISLAMIC_STYLE,
    content: `<p><strong>Morning and evening adhkar</strong> (adhkar as-sabah wal-masa) are among the most rewarding daily habits in Islam — yet many Muslims are unsure of the complete list. The Prophet ﷺ never missed his morning and evening remembrances. This guide gives you every essential adhkar with Arabic, transliteration and English in one place.</p>

          <div class="highlight-box">
            <strong>Quick answer:</strong> Recite morning adhkar after <strong>Fajr</strong> and evening adhkar after <strong>Asr or Maghrib</strong>. Core adhkar: Ayatul Kursi (1x), the 3 Quls (3x each), Sayyid al-Istighfar, Hasbiyallahu (7x), and La ilaha illallah wahdahu. Takes ~10 minutes. Protects you until the next adhkar time.
          </div>

          <h2 id="when">When to recite morning and evening adhkar</h2>
          <table class="np-table">
            <tr><th>Adhkar</th><th>Best time</th><th>Protection until</th></tr>
            <tr><td><strong>Morning adhkar</strong> (adhkar as-sabah)</td><td>After Fajr until sunrise</td><td>Evening (Maghrib)</td></tr>
            <tr><td><strong>Evening adhkar</strong> (adhkar al-masa)</td><td>After Asr or after Maghrib</td><td>Morning (Fajr next day)</td></tr>
          </table>
          <p>The Prophet ﷺ said: "Whoever recites the last two verses of Surah Al-Baqarah at night, they will be sufficient for him." Combined with morning/evening adhkar, you are under Allah's protection around the clock.</p>

          <h2 id="core-list">Core morning &amp; evening adhkar — full list</h2>

          <h3>1. Ayatul Kursi (once)</h3>
          <div class="verse-card">
            <div class="arabic">ٱللَّهُ لَآ إِلَٰهَ إِلَّا هُوَ ٱلْحَىُّ ٱلْقَيُّومُ...</div>
            <p class="trans-en">Allah — there is no deity except Him, the Ever-Living, the Sustainer of existence... (<a href="/blog/ayatul-kursi-arabic-english-benefits">Full Ayatul Kursi guide</a>)</p>
          </div>
          <p>Recited once morning and once evening. Whoever recites it morning and evening will be protected (Nasai — hasan).</p>

          <h3>2. The Three Quls (3 times each)</h3>
          <p>Recite Surah Al-Ikhlas, Al-Falaq and An-Nas — each three times — morning and evening. The Prophet ﷺ said this is sufficient for everything (Abu Dawud 5082). See <a href="/blog/4-quls">4 Quls complete guide</a>.</p>

          <h3>3. Sayyid al-Istighfar (once)</h3>
          <div class="verse-card">
            <div class="arabic">اللَّهُمَّ أَنتَ رَبِّي لَا إِلَٰهَ إِلَّا أَنتَ، خَلَقْتَنِي وَأَنَا عَبْدُكَ...</div>
            <p class="translit">Allaahumma anta rabbee laa ilaaha illaa ant, khalaqtanee wa ana 'abduk...</p>
            <p class="trans-en"><strong>English:</strong> O Allah, You are my Lord. There is no god but You. You created me and I am Your servant... (<a href="/blog/astaghfirullah-meaning">Full istighfar guide</a>)</p>
          </div>
          <p>Whoever says it with conviction in the morning and dies that day enters Paradise; whoever says it in the evening and dies that night enters Paradise (Bukhari 6306).</p>

          <h3>4. Hasbiyallahu la ilaha illa huwa (7 times)</h3>
          <div class="verse-card">
            <div class="arabic">حَسْبِيَ اللَّهُ لَا إِلَٰهَ إِلَّا هُوَ ۖ عَلَيْهِ تَوَكَّلْتُ ۖ وَهُوَ رَبُّ الْعَرْشِ الْعَظِيمِ</div>
            <p class="translit">Hasbiyallaahu laa ilaaha illaa huwa, 'alayhi tawakkaltu wa huwa rabbul-'arshil-'azeem.</p>
            <p class="trans-en"><strong>English:</strong> Allah is sufficient for me. There is no god but Him. In Him I put my trust. He is the Lord of the Mighty Throne.</p>
          </div>
          <p>Recite 7 times morning and evening. Whoever says this 7 times, Allah will suffice him against all worry (Abu Dawud 5081).</p>

          <h3>5. La ilaha illallah wahdahu la shareeka lah (100x or 10x)</h3>
          <div class="verse-card">
            <div class="arabic">لَا إِلَٰهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَىٰ كُلِّ شَيْءٍ قَدِيرٌ</div>
            <p class="translit">Laa ilaaha illallaahu wahdahu laa shareeka lah, lahul-mulku wa lahul-hamdu wa huwa 'alaa kulli shay'in qadeer.</p>
            <p class="trans-en"><strong>English:</strong> There is no god but Allah alone, with no partner. His is the dominion and His is the praise, and He is over all things competent.</p>
          </div>
          <p>Reciting this 100 times daily erases sins even if they are like foam on the sea (Bukhari 6403). See <a href="/blog/la-ilaha-illallah-meaning">La ilaha illallah meaning</a>.</p>

          <h3>6. Subhanallah, Alhamdulillah, Allahu Akbar (33 each)</h3>
          <p>The four pillars of dhikr — after Fajr and Maghrib, or after every Salah. Subhanallah 33x, Alhamdulillah 33x, Allahu Akbar 34x. See guides: <a href="/blog/subhanallah-meaning">Subhanallah</a>, <a href="/blog/alhamdulillah-meaning-in-english">Alhamdulillah</a>, <a href="/blog/allahu-akbar-meaning-in-english">Allahu Akbar</a>.</p>

          <h2 id="routine">10-minute daily adhkar routine</h2>
          <table class="np-table">
            <tr><th>Step</th><th>Adhkar</th><th>Count</th></tr>
            <tr><td>1</td><td>Ayatul Kursi</td><td>1x</td></tr>
            <tr><td>2</td><td>Surah Al-Ikhlas, Al-Falaq, An-Nas</td><td>3x each</td></tr>
            <tr><td>3</td><td>Sayyid al-Istighfar</td><td>1x</td></tr>
            <tr><td>4</td><td>Hasbiyallahu la ilaha illa huwa</td><td>7x</td></tr>
            <tr><td>5</td><td>Subhanallah, Alhamdulillah, Allahu Akbar</td><td>33, 33, 34</td></tr>
          </table>
          <p>Do this after Fajr (morning) and after Maghrib (evening). Use a dhikr counter app or prayer beads if helpful — but presence of heart matters more than speed.</p>

          <h2 id="related">Related guides</h2>
          <ul>
            <li><a href="/blog/dua-before-sleeping-islam">Dua Before Sleeping — Bedtime Adhkar</a></li>
            <li><a href="/blog/evil-eye-dua-nazar-ruqyah">Evil Eye Protection &amp; Ruqyah</a></li>
            <li><a href="/blog/duas-for-kids-to-memorize">20 Duas for Kids to Memorize</a></li>
            <li><a href="/blog/last-two-ayahs-surah-baqarah">Last Two Ayats of Surah Baqarah</a></li>
          </ul>

          <h2 id="faq">Frequently asked questions</h2>
          <details class="faq-acc"><summary>What are morning and evening adhkar?<span>+</span></summary>
            <p>They are specific Quranic verses and prophetic duas recited after Fajr (morning) and after Asr/Maghrib (evening) for protection, forgiveness and reward until the next adhkar time.</p>
          </details>
          <details class="faq-acc"><summary>How long do morning adhkar take?<span>+</span></summary>
            <p>The core list takes about 10 minutes once memorised. Start with Ayatul Kursi and the 3 Quls — add more gradually. Consistency beats quantity.</p>
          </details>
          <details class="faq-acc"><summary>Can I recite evening adhkar after Isha?<span>+</span></summary>
            <p>The Sunnah time is after Asr or Maghrib. If you miss that window, recite as soon as you remember — do not skip entirely. The goal is daily protection through Allah's words.</p>
          </details>

          <div class="highlight-box">
            <strong>Build a daily adhkar habit for your whole family.</strong> NoorPath Academy teaches morning/evening adhkar, duas and Quran with Tajweed in live 1-on-1 classes for kids and adults. <a href="/online-quran-classes-for-kids">Book a free 30-minute trial</a>.
          </div>`,
  },
  "last-two-ayahs-surah-baqarah": {
    style: ISLAMIC_STYLE,
    content: `<p>The <strong>last two ayats of Surah Al-Baqarah</strong> (verses 285–286) are among the most recited and beloved passages in the Quran. Muslims around the world read them before sleep, after Isha, and during Ramadan — because the Prophet Muhammad ﷺ said that whoever recites them at night, <strong>they will be sufficient (kafat) for him</strong>.</p>

          <div class="highlight-box">
            <strong>Quick answer:</strong> The last 2 ayats of Surah Baqarah affirm complete faith in Allah, His angels, books and all messengers — then ask Allah not to burden us beyond our capacity and to forgive our mistakes. Recite them <strong>before sleep</strong> with <a href="/blog/ayatul-kursi-arabic-english-benefits">Ayatul Kursi</a> for protection through the night. Full Arabic, transliteration and English below.
          </div>

          <h2 id="full-text">Last two ayats — full Arabic, transliteration &amp; English</h2>

          <div class="verse-card">
            <span class="vnum">SURAH AL-BAQARAH · 2:285</span>
            <div class="arabic">آمَنَ ٱلرَّسُولُ بِمَآ أُنزِلَ إِلَيْهِ مِن رَّبِّهِۦ وَٱلْمُؤْمِنُونَ ۚ كُلٌّ ءَامَنَ بِٱللَّهِ وَمَلَـٰٓئِكَتِهِۦ وَكُتُبِهِۦ وَرُسُلِهِۦ لَا نُفَرِّقُ بَيْنَ أَحَدٍ مِّن رُّسُلِهِۦ ۚ وَقَالُوا۟ سَمِعْنَا وَأَطَعْنَا ۖ غُفْرَانَكَ رَبَّنَا وَإِلَيْكَ ٱلْمَصِيرُ</div>
            <p class="translit">Aamanar-rasoolu bimaa unzila ilayhi min rabbihi wal-mu'minoon. Kullun aamana billaahi wa malaa'ikatihi wa kutubihi wa rusulihi laa nufarriqu bayna ahadim-min rusulihi. Wa qaaloo sami'naa wa ata'naa. Ghufraanaka rabbanaa wa ilaykal-maseer.</p>
            <p class="trans-en"><strong>English:</strong> The Messenger has believed in what was revealed to him from his Lord, and [so have] the believers. All of them have believed in Allah and His angels and His books and His messengers, [saying], "We make no distinction between any of His messengers." And they say, "We hear and we obey. [We seek] Your forgiveness, our Lord, and to You is the [final] destination."</p>
          </div>

          <div class="verse-card">
            <span class="vnum">SURAH AL-BAQARAH · 2:286</span>
            <div class="arabic">لَا يُكَلِّفُ ٱللَّهُ نَفْسًا إِلَّا وُسْعَهَا ۚ لَهَا مَا كَسَبَتْ وَعَلَيْهَا مَا ٱكْتَسَبَتْ ۗ رَبَّنَا لَا تُؤَاخِذْنَآ إِن نَّسِينَآ أَوْ أَخْطَأْنَا ۚ رَبَّنَا وَلَا تَحْمِلْ عَلَيْنَآ إِصْرًا كَمَا حَمَلْتَهُۥ عَلَى ٱلَّذِينَ مِن قَبْلِنَا ۚ رَبَّنَا وَلَا تُحَمِّلْنَا مَا لَا طَاقَةَ لَنَا بِهِۦ ۖ وَٱعْفُ عَنَّا وَٱغْفِرْ لَنَا وَٱرْحَمْنَآ ۚ أَنتَ مَوْلَىٰنَا فَٱنصُرْنَا عَلَى ٱلْقَوْمِ ٱلْكَـٰفِرِينَ</div>
            <p class="translit">Laa yukallifullaahu nafsan illaa wus'ahaa. Lahaa maa kasabat wa 'alayhaa maktasabat. Rabbanaa laa tu'aakhidhnaa in naseenaa aw akhta'naa. Rabbanaa wa laa tahmil 'alaynaa isran kamaa hamaltahu 'alal-ladheena min qablinaa. Rabbanaa wa laa tuhammilnaa maa laa taaqata lanaa bih. Wa'fu 'annaa waghfir lanaa warhamnaa. Anta mawlaanaa fansurnaa 'alal-qawmil-kaafireen.</p>
            <p class="trans-en"><strong>English:</strong> Allah does not charge a soul except [with that within] its capacity. It will have [the consequence of] what [good] it has gained, and it will bear [the consequence of] what [evil] it has earned. "Our Lord, do not impose blame upon us if we forget or make mistake. Our Lord, and lay not upon us a burden like that which You laid upon those before us. Our Lord, and burden us not with that which we have no ability to bear. And pardon us; and forgive us; and have mercy upon us. You are our Protector, so give us victory over the disbelieving people."</p>
          </div>

          <h2 id="word-by-word">Key phrases — word-by-word meaning</h2>
          <table class="np-table">
            <tr><th>Arabic phrase</th><th>Transliteration</th><th>Meaning</th></tr>
            <tr><td>آمَنَ الرَّسُولُ</td><td>Aamanar-rasool</td><td>The Messenger believed — affirming the Prophet's ﷺ complete faith</td></tr>
            <tr><td>لَا نُفَرِّقُ بَيْنَ أَحَدٍ مِّن رُّسُلِهِ</td><td>Laa nufarriqu...</td><td>We make no distinction between any of His messengers — faith in all prophets equally</td></tr>
            <tr><td>سَمِعْنَا وَأَطَعْنَا</td><td>Sami'naa wa ata'naa</td><td>We hear and we obey — submission to Allah's commands</td></tr>
            <tr><td>لَا يُكَلِّفُ ٱللَّهُ نَفْسًا إِلَّا وُسْعَهَا</td><td>Laa yukallifu...</td><td>Allah does not burden a soul beyond its capacity — divine mercy in accountability</td></tr>
            <tr><td>لَا تُؤَاخِذْنَا إِن نَّسِينَا أَوْ أَخْطَأْنَا</td><td>Laa tu'aakhidhnaa...</td><td>Do not hold us accountable if we forget or make a mistake — forgiveness for human error</td></tr>
            <tr><td>وَٱعْفُ عَنَّا وَٱغْفِرْ لَنَا وَٱرْحَمْنَا</td><td>Wa'fu 'annaa...</td><td>Pardon us, forgive us and have mercy on us — the heart of the closing dua</td></tr>
          </table>

          <h2 id="hadith">The authentic hadith — why these ayats matter</h2>
          <div class="gold-box">
            <p><strong>Al-Bara ibn Azib</strong> (رضي الله عنه) reported that the Prophet ﷺ said about bedtime recitation:</p>
            <p><em>"When you go to your bed, recite Ayatul Kursi — Allah will appoint a guardian over you and no shaytan (devil) will come near you until morning. And if you recite the last two verses of Surah Al-Baqarah, <strong>they will be sufficient (kafat) for you</strong>."</em></p>
            <p style="margin-bottom:0;"><strong>Source:</strong> Sahih al-Bukhari 5009, Sahih Muslim 807</p>
          </div>
          <p>The word <strong>kafat</strong> (كَفَتْ) means they will be sufficient — covering protection, reward and whatever the reciter needs for that night. This is why millions of Muslims never sleep without these two ayats.</p>
          <p>Ibn Mas'ud (رضي الله عنه) also narrated that the Prophet ﷺ said these two ayats were given to him from a treasure beneath the Throne (<em>'Arsh</em>) — highlighting their extraordinary status among all verses of the Quran.</p>

          <h2 id="benefits">Benefits of reciting the last two ayats of Surah Baqarah</h2>
          <ul>
            <li><strong>Night protection</strong> — paired with Ayatul Kursi in the authentic bedtime hadith (Bukhari 5009)</li>
            <li><strong>Forgiveness for forgetfulness and mistakes</strong> — the dua explicitly asks Allah not to hold us accountable for nisyan (forgetting) and khata (errors)</li>
            <li><strong>Relief from unbearable burdens</strong> — Allah only holds us to what is within our capacity (Quran 2:286)</li>
            <li><strong>Complete affirmation of iman</strong> — faith in Allah, angels, books and all messengers without distinction</li>
            <li><strong>Closing dua of the longest surah</strong> — Surah Al-Baqarah opens with guidance and closes with mercy and supplication</li>
            <li><strong>General Quran reward</strong> — every letter recited earns ten good deeds (Tirmidhi 2910)</li>
          </ul>

          <h2 id="when">When should you recite them?</h2>
          <table class="np-table">
            <tr><th>Time</th><th>Why</th></tr>
            <tr><td><strong>Before sleep</strong></td><td>The primary Sunnah — the hadith specifically mentions "at night" (Bukhari 5009)</td></tr>
            <tr><td>After Isha prayer</td><td>Many Muslims recite them immediately after the night prayer</td></tr>
            <tr><td>During Ramadan / after Taraweeh</td><td>Recited when completing Surah Al-Baqarah in congregation</td></tr>
            <tr><td>When feeling overwhelmed</td><td>Verse 286 reminds us Allah does not burden beyond capacity — recite and make the dua sincerely</td></tr>
            <tr><td>After completing Surah Al-Baqarah</td><td>Traditional practice when finishing a khatm or personal reading of the surah</td></tr>
          </table>

          <h2 id="bedtime-routine">Bedtime adhkar — the complete Sunnah routine</h2>
          <p>The Prophet's ﷺ instruction to Al-Bara ibn Azib gives a clear order for bedtime:</p>
          <ol>
            <li>Perform wudu before sleeping if possible</li>
            <li>Dust the bed lightly with the edge of your garment (Sunnah)</li>
            <li>Lie on your right side</li>
            <li>Recite <strong><a href="/blog/ayatul-kursi-arabic-english-benefits">Ayatul Kursi</a></strong> (Surah Al-Baqarah 2:255) — protection from Shaytan until morning</li>
            <li>Recite the <strong>last two ayats of Surah Al-Baqarah</strong> — they will be kafat (sufficient)</li>
            <li>Many also add the three Quls: <a href="/blog/4-quls">Surah Al-Ikhlas, Al-Falaq and An-Nas</a>, blowing into the hands and wiping over the body as the Prophet ﷺ did</li>
          </ol>

          <h2 id="meaning-dua">Understanding the closing dua (verse 286)</h2>
          <p>Verse 286 is one of the most comprehensive duas in the Quran. It teaches us that:</p>
          <ul>
            <li><strong>Allah is just but merciful</strong> — you are only accountable for what is within your ability</li>
            <li><strong>Forgetfulness is human</strong> — we ask Allah not to punish us for honest mistakes and lapses of memory</li>
            <li><strong>Previous nations carried heavy burdens</strong> — we ask not to be tested like those before us who altered their scriptures and laws</li>
            <li><strong>We admit our limits</strong> — "do not burden us with what we cannot bear" is humility before Allah</li>
            <li><strong>We end with mercy</strong> — pardon, forgiveness and rahmah, then trust in Allah as our Mawla (Protector)</li>
          </ul>
          <p>Recite this dua slowly and mean every word — especially on nights when anxiety, guilt or overwhelm weigh on your heart. Pair it with our guide to <a href="/blog/dua-for-anxiety-stress-depression">duas for anxiety and stress</a> for a complete spiritual toolkit.</p>

          <h2 id="teach-kids">How to teach children the last two ayats</h2>
          <ol>
            <li><strong>Start with the dua part</strong> — verse 286's "Rabbanaa laa tu'aakhidhnaa..." is shorter and more memorable for young children</li>
            <li><strong>Explain simply:</strong> "We tell Allah we tried our best, please forgive us if we forgot or made a mistake"</li>
            <li><strong>Listen and repeat</strong> — 5–10 minutes daily with a clear recitation builds fluency fast</li>
            <li><strong>Make it a bedtime habit</strong> — recite together every night so it becomes automatic like brushing teeth</li>
            <li><strong>Connect to Ayatul Kursi</strong> — teach both as the "night protection pair" from the Sunnah</li>
          </ol>
          <p>Children who learn these ayats early carry a lifelong shield of protection and a deep connection to the Quran. See also our guides on <a href="/blog/duas-for-kids-to-memorize">20 duas for kids</a> and <a href="/blog/surah-mulk-benefits">Surah Mulk before sleep</a>.</p>

          <h2 id="related">Related Quran &amp; dua guides</h2>
          <ul>
            <li><a href="/blog/ayatul-kursi-arabic-english-benefits">Ayatul Kursi — Arabic, English &amp; Benefits</a></li>
            <li><a href="/blog/4-quls">The 4 Quls — Surah Ikhlas, Falaq &amp; Naas</a></li>
            <li><a href="/blog/surah-mulk-benefits">Surah Mulk — Benefits &amp; When to Recite</a></li>
            <li><a href="/blog/dua-for-parents-rabbirhamhuma">Dua for Parents — Rabbirhamhuma</a></li>
            <li><a href="/blog/how-to-pray-salah-step-by-step">How to Pray Salah Step by Step</a></li>
          </ul>

          <h2 id="faq">Frequently asked questions</h2>
          <details class="faq-acc"><summary>What are the last two ayats of Surah Baqarah?<span>+</span></summary>
            <p>They are verses 285 and 286 of Surah Al-Baqarah — the closing verses of the longest surah in the Quran. Verse 285 affirms complete faith; verse 286 contains the famous dua asking Allah for forgiveness, mercy and not to burden us beyond our capacity.</p>
          </details>
          <details class="faq-acc"><summary>What does kafat mean in the hadith?<span>+</span></summary>
            <p>Kafat (كَفَتْ) means "they will be sufficient." Scholars explain this covers protection through the night, immense reward, and whatever the believer needs — so reciting these two ayats before sleep is a complete spiritual provision for the night.</p>
          </details>
          <details class="faq-acc"><summary>Do I recite Ayatul Kursi before or after the last two ayats?<span>+</span></summary>
            <p>The hadith of Al-Bara ibn Azib mentions Ayatul Kursi first, then the last two ayats. This is the order most Muslims follow: Ayatul Kursi for protection, then the last two verses as kafat (sufficient).</p>
          </details>
          <details class="faq-acc"><summary>Can I recite only the dua part (verse 286)?<span>+</span></summary>
            <p>The Sunnah is to recite both verses together as the hadith refers to "the last two verses." However, the dua in verse 286 can also be made separately at any time — it is a standalone supplication taught in the Quran itself.</p>
          </details>

          <div class="highlight-box">
            <strong>Want your child to learn the last two ayats with correct Tajweed and meaning?</strong> NoorPath Academy teaches Quran memorisation, bedtime adhkar, Noorani Qaida and Islamic Studies in live 1-on-1 classes for kids worldwide. <a href="/online-quran-classes-for-kids">Book a free 30-minute trial</a> — no credit card required.
          </div>`,
  },
  "dua-for-parents-rabbirhamhuma": {
    style: ISLAMIC_STYLE,
    content: `<p>Parents are among the greatest blessings Allah gives us. Islam places them right after worship of Allah Himself — and one of the most powerful ways to honour them is through <strong>dua for parents</strong>. The Quran teaches a short, unforgettable supplication that millions of Muslims recite daily: <strong>Rabbirhamhuma kama rabbayani saghira</strong>.</p>

          <div class="highlight-box">
            <strong>Quick answer:</strong> The best dua for parents in the Quran is from Surah Al-Isra (17:24): <em>"My Lord, have mercy upon them as they raised me when I was small."</em> Recite it after every Salah, in sujood, and whenever you think of your parents — whether they are alive or have passed away. Full Arabic, transliteration and meaning below.
          </div>

          <h2 id="main-dua">The main dua for parents (Surah Al-Isra 17:24)</h2>
          <div class="verse-card">
            <span class="vnum">QURANIC DUA FOR PARENTS · Surah Al-Isra 17:24</span>
            <div class="arabic">رَبِّ ارْحَمْهُمَا كَمَا رَبَّيَانِي صَغِيرًا</div>
            <p class="translit">Rabbir-hamhumaa kamaa rabbayaanee sagheera.</p>
            <p class="trans-en"><strong>English:</strong> My Lord, have mercy upon them both as they raised me when I was small.</p>
          </div>

          <h2 id="word-by-word">Word-by-word meaning</h2>
          <table class="np-table">
            <tr><th>Arabic</th><th>Transliteration</th><th>Meaning</th></tr>
            <tr><td>رَبِّ</td><td>Rabbi</td><td>My Lord — the One who nurtures and sustains</td></tr>
            <tr><td>ارْحَمْهُمَا</td><td>Irhamhumaa</td><td>Have mercy on both of them (mother and father)</td></tr>
            <tr><td>كَمَا</td><td>Kamaa</td><td>Just as / in the same way</td></tr>
            <tr><td>رَبَّيَانِي</td><td>Rabbayaanee</td><td>They raised me, nurtured me, cared for me</td></tr>
            <tr><td>صَغِيرًا</td><td>Sagheera</td><td>When I was small, weak and completely dependent</td></tr>
          </table>
          <p>This dua connects two mercies: your parents' mercy toward you in childhood, and your prayer that Allah's mercy may cover them in return. You can never fully repay parents for sleepless nights, sacrifice and love — but this dua asks Allah, whose mercy is unlimited, to reward them.</p>

          <h2 id="context">Why does the Quran command this dua?</h2>
          <p>Allah says in Surah Al-Isra:</p>
          <div class="gold-box">
            <em>"Your Lord has decreed that you worship none but Him, and that you be dutiful to your parents. If one or both of them reach old age with you, do not say 'uff' to them nor repel them, but speak to them a noble word. And lower to them the wing of humility out of mercy and say: <strong>My Lord, have mercy upon them as they raised me when I was small.</strong>"</em> (Quran 17:23–24)
          </p>
          <p>Notice: immediately after commanding worship of Allah alone, Allah commands kindness to parents — then teaches this exact dua. Honouring parents through dua is an act of worship.</p>

          <h2 id="second-dua">Second Quranic dua for parents (Surah Ibrahim 14:41)</h2>
          <div class="verse-card">
            <span class="vnum">SURAH IBRAHIM 14:41</span>
            <div class="arabic">رَبَّنَا اغْفِرْ لِي وَلِوَالِدَيَّ وَلِلْمُؤْمِنِينَ يَوْمَ يَقُومُ الْحِسَابُ</div>
            <p class="translit">Rabbanaghfir lee wa liwaalidayya wa lil-mu'mineena yawma yaqoomul-hisaab.</p>
            <p class="trans-en"><strong>English:</strong> Our Lord, forgive me and my parents and the believers on the Day when the account is established.</p>
          </div>
          <p>Prophet Ibrahim (عليه السلام) made this dua — asking forgiveness for himself and his parents. It is especially meaningful when praying for deceased parents who need Allah's forgiveness and mercy in the Hereafter.</p>

          <h2 id="living">Dua for parents who are alive</h2>
          <p>When your parents are still with you, this is the time to maximise your dua and your kindness. Recite Rabbirhamhuma daily and add personal duas such as:</p>
          <ul>
            <li>O Allah, grant my parents long life in obedience to You</li>
            <li>O Allah, cure them if they are ill and ease their pain</li>
            <li>O Allah, guide them and increase them in faith</li>
            <li>O Allah, expand their provision and bless their home</li>
            <li>O Allah, make me a source of comfort, not difficulty, for them</li>
          </ul>
          <p>The Prophet ﷺ said: <em>"The pleasure of the Lord lies in the pleasure of the parent, and the displeasure of the Lord lies in the displeasure of the parent."</em> (Tirmidhi 1899). Making dua for them is one of the greatest acts of birr (righteousness).</p>

          <h2 id="deceased">Dua for deceased parents</h2>
          <p>When a parent passes away, your dua does not stop — it becomes even more important. The Prophet ﷺ said that when a person dies, their deeds end except for three: ongoing charity (sadaqah jariyah), beneficial knowledge, and <strong>a righteous child who prays for them</strong> (Sahih Muslim 1631).</p>
          <p>For deceased parents, recite:</p>
          <ul>
            <li><strong>Rabbirhamhuma kama rabbayani saghira</strong> — asking Allah's mercy</li>
            <li><strong>Rabbanaghfir lee wa liwaalidayya</strong> — asking forgiveness (Surah Ibrahim 14:41)</li>
            <li>Personal dua: <em>O Allah, forgive my mother/father, have mercy on them, expand their grave, and admit them to the highest level of Paradise without reckoning</em></li>
          </ul>
          <p>Also give sadaqah on their behalf, perform Umrah or Hajj if possible, and stay connected to people they loved. These acts reach them in the grave, by Allah's permission.</p>

          <h2 id="when">When should you recite dua for parents?</h2>
          <table class="np-table">
            <tr><th>Time</th><th>Why it matters</th></tr>
            <tr><td>After every obligatory Salah</td><td>Duas after Salah are among the most likely to be accepted</td></tr>
            <tr><td>In sujood (prostration)</td><td>The Prophet ﷺ said you are closest to Allah in sujood — make dua then</td></tr>
            <tr><td>Last third of the night</td><td>Allah descends and answers those who call upon Him (Bukhari 1145)</td></tr>
            <tr><td>On Jumu'ah (Friday)</td><td>There is an hour on Friday when duas are accepted (Bukhari 935)</td></tr>
            <tr><td>When you think of them</td><td>Any sincere moment — driving, cooking, before sleep</td></tr>
            <tr><td>On their birthday or death anniversary</td><td>Increase dua and sadaqah on these days</td></tr>
          </table>

          <h2 id="benefits">Benefits of making dua for parents</h2>
          <ul>
            <li><strong>Ongoing reward (sadaqah jariyah)</strong> — your dua benefits them in this life and the next</li>
            <li><strong>Forgiveness for you</strong> — birr toward parents is a cause of Allah forgiving the child</li>
            <li><strong>Acceptance of your duas</strong> — the righteous child's dua for parents is powerful</li>
            <li><strong>Peace of heart</strong> — knowing you are fulfilling a Quranic command brings tranquillity</li>
            <li><strong>Teaching the next generation</strong> — when your children see you make dua for your parents, they learn to make dua for you</li>
          </ul>

          <h2 id="teach-kids">How to teach children the dua for parents</h2>
          <ol>
            <li><strong>Explain simply:</strong> "This dua asks Allah to be kind to Mum and Dad because they took care of us when we were little."</li>
            <li><strong>Break it into parts:</strong> Teach "Rabbirhamhuma" first, then add "kama rabbayani saghira."</li>
            <li><strong>Listen and repeat:</strong> Play a clear recitation and let your child repeat after it daily.</li>
            <li><strong>Model it:</strong> Make the dua out loud after Salah so children hear and copy you.</li>
            <li><strong>Connect to action:</strong> Teach that dua goes with kindness — helping parents, speaking gently, not raising your voice.</li>
          </ol>
          <p>Children who learn this dua early develop gratitude and a lifelong habit of honouring parents. Pair it with our guide to <a href="/blog/duas-for-kids-to-memorize">20 essential duas for kids</a> and live Islamic Studies classes where tutors teach duas with meaning and correct pronunciation.</p>

          <h2 id="more-duas">More ways to honour your parents in Islam</h2>
          <ul>
            <li>Speak to them with respect — never say "uff" or harsh words (Quran 17:23)</li>
            <li>Visit them regularly if you live apart; call them often</li>
            <li>Spend on them when they need — even if they are wealthy, gifts show love</li>
            <li>Make dua for them by name in every prayer</li>
            <li>After their death: pray, give sadaqah, and maintain ties with their friends and relatives</li>
          </ul>

          <h2 id="faq">Frequently asked questions</h2>
          <details class="faq-acc"><summary>What is the best dua for parents in the Quran?<span>+</span></summary>
            <p>The dua from Surah Al-Isra (17:24): Rabbirhamhuma kama rabbayani saghira — "My Lord, have mercy upon them as they raised me when I was small." It is the dua Allah Himself teaches in the Quran immediately after commanding kindness to parents.</p>
          </details>
          <details class="faq-acc"><summary>Can I make dua for my parents if they are still alive?<span>+</span></summary>
            <p>Yes — and you should, every day. Ask Allah for their mercy, health, guidance, long life in obedience to Him, and comfort in old age. Living parents benefit directly from your dua and your kindness.</p>
          </details>
          <details class="faq-acc"><summary>Does dua reach parents who have passed away?<span>+</span></summary>
            <p>Yes. The Prophet ﷺ said a righteous child's dua is among the deeds that continue benefiting a parent after death (Sahih Muslim 1631). Sadaqah given on their behalf and beneficial knowledge they taught also reach them.</p>
          </details>
          <details class="faq-acc"><summary>How many times should I recite the parents' dua?<span>+</span></summary>
            <p>There is no fixed number. Recite it daily — especially after Salah — and whenever you think of your parents. Sincerity matters more than counting.</p>
          </details>

          <div class="highlight-box">
            <strong>Want your child to learn Quranic duas with correct pronunciation and meaning?</strong> NoorPath Academy teaches <a href="/blog/duas-for-kids-to-memorize">duas for kids</a>, Noorani Qaida, Quran with Tajweed and Islamic Studies in live 1-on-1 classes. <a href="/online-quran-classes-for-kids">Book a free 30-minute trial</a> — no credit card required.
          </div>`,
  },
  "surah-ikhlas-benefits": {
    style: ISLAMIC_STYLE,
    content: `<p><strong>Surah Al-Ikhlas</strong> (سورة الإخلاص) — "The Sincerity" or "The Purity" — is the 112th chapter of the Quran. It has only four short verses, yet the Prophet Muhammad ﷺ said it equals <strong>one-third of the Quran</strong> in reward. It is one of the Four Quls, among the first surahs children memorise, and a cornerstone of every Muslim's daily dhikr.</p>

          <div class="highlight-box">
            <strong>Quick answer:</strong> Surah Ikhlas affirms pure Tawheed — that Allah is One, Eternal, and has no partner, parent or child. Recite it in Salah, morning and evening adhkar, and before sleep. The Prophet ﷺ said whoever loves it will enter Paradise. Want your child to memorise Surah Ikhlas with correct Tajweed? <a href="/online-quran-classes-for-kids">Book a free 30-minute trial</a>.
          </div>

          <h2 id="full-text">Surah Ikhlas — full Arabic, transliteration &amp; English</h2>
          <div class="verse-card">
            <span class="vnum">SURAH AL-IKHLAS · 112:1–4 · Juz 30</span>
            <div class="arabic">قُلْ هُوَ ٱللَّهُ أَحَدٌ ۝ ٱللَّهُ ٱلصَّمَدُ ۝ لَمْ يَلِدْ وَلَمْ يُولَدْ ۝ وَلَمْ يَكُن لَّهُۥ كُفُوًا أَحَدٌۢ</div>
            <p class="translit">Qul huwa Allaahu ahad. Allaahus-samad. Lam yalid wa lam yoolad. Wa lam yakun lahu kufuwan ahad.</p>
            <p class="trans-en"><strong>English:</strong> Say: He is Allah, the One. Allah, the Eternal Refuge. He neither begets nor is born. And there is none comparable to Him.</p>
          </div>

          <h2 id="verse-by-verse">Verse-by-verse meaning</h2>
          <table class="np-table">
            <tr><th>Verse</th><th>Arabic</th><th>Meaning</th></tr>
            <tr><td>1</td><td>قُلْ هُوَ ٱللَّهُ أَحَدٌ</td><td><strong>Say: He is Allah, the One</strong> — absolute Oneness (Tawheed). Allah is unique; nothing shares His essence or attributes.</td></tr>
            <tr><td>2</td><td>ٱللَّهُ ٱلصَّمَدُ</td><td><strong>Allah, the Eternal Refuge (As-Samad)</strong> — the One all creation depends on, who depends on none.</td></tr>
            <tr><td>3</td><td>لَمْ يَلِدْ وَلَمْ يُولَدْ</td><td><strong>He neither begets nor is born</strong> — He has no children and no parents. This rejects every claim that Allah has a son or partner.</td></tr>
            <tr><td>4</td><td>وَلَمْ يَكُن لَّهُۥ كُفُوًا أَحَدٌۢ</td><td><strong>And there is none comparable to Him</strong> — nothing equals Allah in any way.</td></tr>
          </table>

          <h2 id="why-one-third">Why does Surah Ikhlas equal one-third of the Quran?</h2>
          <p>Abu Sa'id al-Khudri (رضي الله عنه) reported that the Prophet ﷺ said to his companions: "Is any one of you unable to recite one-third of the Quran in a night?" They found it hard. He said: <strong>"Qul huwa Allahu ahad is one-third of the Quran."</strong> (Sahih al-Bukhari 5015)</p>
          <p>Scholars explain that the Quran's message centres on three themes: (1) Tawheed — the Oneness of Allah, (2) rulings and laws, and (3) stories and news. Surah Ikhlas captures the entire theme of Tawheed in four verses — so its reward is like one-third of the Quran.</p>

          <div class="gold-box">
            <strong>Important:</strong> This means the <em>reward</em> of reciting Surah Ikhlas is like one-third of the Quran — it does not replace reading the rest of the Quran. Keep reciting the whole Book, and add Surah Ikhlas abundantly for extra reward.
          </div>

          <h2 id="benefits">Benefits of Surah Ikhlas</h2>
          <ul>
            <li><strong>Equals one-third of the Quran</strong> in reward (Sahih al-Bukhari 5015).</li>
            <li><strong>Love of this surah leads to Paradise</strong> — a man loved to recite it in every prayer; the Prophet ﷺ said: "Your love for it will admit you to Paradise." (Sahih al-Bukhari 774)</li>
            <li><strong>Morning &amp; evening protection</strong> — recite Surah Ikhlas, Al-Falaq and An-Nas three times each morning and evening; they suffice against everything (Tirmidhi, Abu Dawud).</li>
            <li><strong>Before sleep</strong> — the Prophet ﷺ recited the last three Quls, blew into his hands, and wiped over his body (Sahih al-Bukhari 5017).</li>
            <li><strong>In every Salah</strong> — it is a perfect short surah after Al-Fatiha, especially for children and beginners.</li>
            <li><strong>Strengthens Tawheed</strong> — it protects belief from shirk and clarifies who Allah truly is.</li>
          </ul>

          <h2 id="when">When should you recite Surah Ikhlas?</h2>
          <ul>
            <li><strong>In Salah</strong> — after Surah Al-Fatiha in any rakat.</li>
            <li><strong>Morning and evening</strong> — three times with Al-Falaq and An-Nas.</li>
            <li><strong>Before sleeping</strong> — as the Prophet ﷺ did.</li>
            <li><strong>After every obligatory prayer</strong> — many scholars encourage reciting it as part of post-Salah dhikr.</li>
            <li><strong>Anytime you want reward</strong> — because of its immense virtue, recite it often throughout the day.</li>
          </ul>

          <h2 id="kids">How to teach Surah Ikhlas to kids</h2>
          <p>Surah Ikhlas is ideal for children because it is short, rhythmic and full of meaning:</p>
          <ol>
            <li><strong>Listen first</strong> — play a clear Qari (e.g. Mishary or Al-Husary) and let your child hear it daily.</li>
            <li><strong>One verse at a time</strong> — start with "Qul huwa Allahu ahad," then add the next verse when the first is solid.</li>
            <li><strong>Explain simply</strong> — "Allah is One. He has no mum or dad. Nobody is like Him."</li>
            <li><strong>Use it in Salah</strong> — once memorised, let them recite it after Al-Fatiha in prayer.</li>
            <li><strong>Correct Tajweed early</strong> — letters like ح in "Ahad" and ص in "As-Samad" need a live ear. A tutor prevents mistakes that stick for years.</li>
          </ol>
          <p>Most children memorise Surah Ikhlas in a few days to one week with short daily practice. Pair it with the other <a href="/blog/4-quls">4 Quls</a> for a complete protection set.</p>

          <h2 id="facts">Key facts about Surah Ikhlas</h2>
          <table class="np-table">
            <tr><th>Detail</th><th>Info</th></tr>
            <tr><td>Chapter number</td><td>112</td></tr>
            <tr><td>Number of verses</td><td>4</td></tr>
            <tr><td>Juz (Para)</td><td>30 (Juz Amma)</td></tr>
            <tr><td>Revelation</td><td>Makki (revealed in Makkah)</td></tr>
            <tr><td>Also known as</td><td>Surah At-Tawheed, Surah Al-Asas</td></tr>
            <tr><td>Opens with</td><td>قُلْ (Qul — "Say")</td></tr>
          </table>

          <h2 id="faq">Frequently asked questions</h2>
          <details class="faq-acc"><summary>What is Surah Ikhlas about?<span>+</span></summary>
            <p>Surah Ikhlas is entirely about Tawheed — the Oneness of Allah. It teaches that Allah is One, Eternal, without parents or children, and that nothing is comparable to Him. It is the clearest short summary of Islamic belief in the Quran.</p>
          </details>
          <details class="faq-acc"><summary>Does Surah Ikhlas really equal one-third of the Quran?<span>+</span></summary>
            <p>Yes — in reward. The Prophet ﷺ said in Sahih al-Bukhari that "Qul huwa Allahu ahad" is one-third of the Quran. This refers to the reward of recitation, not that you can skip the rest of the Quran.</p>
          </details>
          <details class="faq-acc"><summary>How many times should I recite Surah Ikhlas?<span>+</span></summary>
            <p>There is no fixed daily minimum. Recite it in Salah, three times morning and evening with the other Quls, and before sleep. Reciting it often is highly rewarded because of its virtue.</p>
          </details>
          <details class="faq-acc"><summary>Can my child learn Surah Ikhlas online?<span>+</span></summary>
            <p>Yes. Live 1-on-1 online classes are ideal because a tutor corrects pronunciation in real time. NoorPath Academy teaches Surah Ikhlas, the 4 Quls, Noorani Qaida and Quran with Tajweed — with a free 30-minute trial.</p>
          </details>

          <div class="highlight-box">
            <strong>Ready to help your child memorise Surah Ikhlas with correct Tajweed?</strong> NoorPath Academy's certified male and female tutors teach live 1-on-1 Quran classes for kids and adults worldwide. <a href="/online-quran-classes-for-kids">Book your free trial class</a> — no credit card required.
          </div>`,
  },
  "dua-e-istikhara": {
    style: ISLAMIC_STYLE,
    content: `<p><strong>Dua e Istikhara</strong> is the supplication of seeking guidance from Allah before any important decision — marriage, a job offer, moving abroad, choosing a school, or any matter where the heart hesitates. The Prophet ﷺ taught this dua to his companions "as he would teach them a surah of the Quran" (Sahih al-Bukhari 1162) — showing how central it is to a Muslim's life.</p>

          <div class="highlight-box">
            <strong>Quick answer:</strong> Istikhara means "seeking the best (khayr) from Allah." You pray <strong>2 rakats of voluntary prayer</strong>, then recite the Istikhara dua, mentioning your specific need. The answer comes as ease or difficulty in the matter — <em>not necessarily a dream</em>. The full dua with Arabic, transliteration and English is below. Want to learn duas and Salah with a live tutor? <a href="/online-quran-classes-for-kids">Book a free trial class</a>.
          </div>

          <h2 id="what-is">What is Istikhara?</h2>
          <p>Istikhara (استخارة) comes from the Arabic root <em>khayr</em> (goodness) and literally means "to seek what is best." Salat al-Istikhara is a two-rakat voluntary prayer followed by a specific dua in which you hand your decision over to Allah — asking Him to make the matter easy if it is good for you, and to turn it away if it is bad for you.</p>
          <p>Jabir ibn Abdullah (رضي الله عنه) said: "The Messenger of Allah ﷺ used to teach us Istikhara for every matter, just as he would teach us a surah of the Quran." (Sahih al-Bukhari 1162)</p>

          <h2 id="dua">The complete Dua e Istikhara</h2>
          <div class="verse-card">
            <span class="vnum">DUA E ISTIKHARA · Sahih al-Bukhari 1162</span>
            <div class="arabic">اَللّٰهُمَّ إِنِّي أَسْتَخِيرُكَ بِعِلْمِكَ وَأَسْتَقْدِرُكَ بِقُدْرَتِكَ وَأَسْأَلُكَ مِنْ فَضْلِكَ الْعَظِيمِ، فَإِنَّكَ تَقْدِرُ وَلَا أَقْدِرُ وَتَعْلَمُ وَلَا أَعْلَمُ وَأَنْتَ عَلَّامُ الْغُيُوبِ، اَللّٰهُمَّ إِنْ كُنْتَ تَعْلَمُ أَنَّ هٰذَا الْأَمْرَ خَيْرٌ لِي فِي دِينِي وَمَعَاشِي وَعَاقِبَةِ أَمْرِي فَاقْدُرْهُ لِي وَيَسِّرْهُ لِي ثُمَّ بَارِكْ لِي فِيهِ، وَإِنْ كُنْتَ تَعْلَمُ أَنَّ هٰذَا الْأَمْرَ شَرٌّ لِي فِي دِينِي وَمَعَاشِي وَعَاقِبَةِ أَمْرِي فَاصْرِفْهُ عَنِّي وَاصْرِفْنِي عَنْهُ وَاقْدُرْ لِيَ الْخَيْرَ حَيْثُ كَانَ ثُمَّ أَرْضِنِي بِهِ</div>
            <p class="translit">Allaahumma innee astakheeruka bi 'ilmika, wa astaqdiruka bi qudratika, wa as'aluka min fadlikal-'azeem. Fa innaka taqdiru wa laa aqdiru, wa ta'lamu wa laa a'lamu, wa anta 'allaamul-ghuyoob. Allaahumma in kunta ta'lamu anna haadhal-amra khayrun lee fee deenee wa ma'aashee wa 'aaqibati amree, faqdurhu lee wa yassirhu lee thumma baarik lee feeh. Wa in kunta ta'lamu anna haadhal-amra sharrun lee fee deenee wa ma'aashee wa 'aaqibati amree, fasrifhu 'annee wasrifnee 'anhu, waqdur liyal-khayra haythu kaana thumma ardinee bih.</p>
            <p class="trans-en"><strong>English:</strong> O Allah, I seek Your guidance through Your knowledge, and I seek strength through Your power, and I ask You of Your great bounty. For You are able and I am not, and You know and I do not, and You are the Knower of the unseen. O Allah, if You know that this matter is good for me in my religion, my livelihood and the outcome of my affair, then decree it for me, make it easy for me, and bless me in it. And if You know that this matter is bad for me in my religion, my livelihood and the outcome of my affair, then turn it away from me and turn me away from it, and decree for me what is good wherever it may be, then make me content with it.</p>
          </div>
          <p>When you reach the words <em>"haadhal-amra"</em> (this matter), mention your specific need — or simply think of it clearly in your heart.</p>

          <h2 id="how-to">How to pray Salat al-Istikhara — step by step</h2>
          <ol>
            <li><strong>Make wudu</strong> as you would for any prayer.</li>
            <li><strong>Pray 2 rakats</strong> of voluntary (nafl) prayer with the intention of Istikhara. It is common to recite Surah Al-Kafirun in the first rakat and Surah Al-Ikhlas in the second, though any surahs are valid.</li>
            <li><strong>After the salam,</strong> raise your hands and recite the Istikhara dua above.</li>
            <li><strong>Name your matter</strong> when you reach "haadhal-amra" — for example, "this marriage" or "this job."</li>
            <li><strong>Then proceed</strong> with the decision you are inclined towards, trusting that Allah will open or close the doors.</li>
          </ol>

          <div class="gold-box">
            <strong>Common misconception:</strong> Many people believe Istikhara's answer must come as a dream, or as seeing the colours green or white. This has no basis in authentic hadith. The answer of Istikhara is that <strong>Allah makes the good matter easy and the harmful matter difficult</strong> — through circumstances, your heart settling, or doors opening and closing. A dream may happen, but it is not required and not the standard.
          </div>

          <h2 id="when">When should you pray Istikhara?</h2>
          <ul>
            <li><strong>Marriage proposals</strong> — accepting or declining a rishta.</li>
            <li><strong>Career decisions</strong> — a new job, business venture, or resignation.</li>
            <li><strong>Moving or travel</strong> — relocating your family, hijrah, big journeys.</li>
            <li><strong>Education</strong> — choosing a school, university, or course.</li>
            <li><strong>Any permissible matter</strong> where you genuinely hesitate. Istikhara is not for things already obligatory (like praying Salah) or forbidden.</li>
          </ul>
          <p>You may repeat Istikhara up to seven days if the matter remains unclear — some scholars cite the narration of Anas (رضي الله عنه) encouraging repetition.</p>

          <h2 id="conditions">Etiquettes for the best result</h2>
          <ul>
            <li>Pray with full conviction that Allah will choose what is best.</li>
            <li>Empty your heart of a pre-decided outcome — go in genuinely open.</li>
            <li>Choose a calm time; the last third of the night before <a href="/blog/tahajjud-prayer">Tahajjud</a> is ideal but any time outside the forbidden prayer times is valid.</li>
            <li>Combine it with consultation (<em>istishara</em>) of trustworthy, knowledgeable people.</li>
            <li>Begin and end the dua with praise of Allah and <a href="/blog/darood-sharif">Darood Sharif</a>.</li>
          </ul>

          <h2 id="teach-kids">Teaching Istikhara to your children</h2>
          <p>Teenagers especially benefit from learning Istikhara early — it trains them to include Allah in every decision. Start by teaching the shortened concept ("we ask Allah to choose for us"), then help them memorise the dua in parts, and let them see you praying Istikhara for family decisions.</p>

          <div class="highlight-box">
            <strong>Want your child to learn duas, Salah and Quran with correct pronunciation?</strong> NoorPath Academy's certified tutors teach live 1-on-1 classes covering Salah, essential duas and Quran with Tajweed. <a href="/online-quran-classes-for-kids">Book a free 30-minute trial</a> — no credit card required.
          </div>`,
  },
  "tahajjud-prayer": {
    style: ISLAMIC_STYLE,
    content: `<p><strong>Tahajjud</strong> is the voluntary night prayer performed after waking from sleep — the prayer of the Prophets, the righteous, and every believer seeking closeness to Allah. The Quran promises the one who prays it a <em>Maqam Mahmud</em> — a praised station: "And during the night, wake up and pray, as an extra offering of your own; so that your Lord may raise you to a praised station." (Surah Al-Isra 17:79)</p>

          <div class="highlight-box">
            <strong>Quick answer:</strong> Tahajjud is prayed <strong>after Isha and after sleeping</strong>, ideally in the <strong>last third of the night</strong> (roughly 1–2 hours before Fajr). Pray a minimum of <strong>2 rakats</strong>, in sets of two — the Prophet ﷺ commonly prayed 8 rakats plus 3 Witr. Duas in this time are answered. Full method below. Want to perfect your Salah and recitation? <a href="/online-quran-classes-for-adults">Book a free trial class</a>.
          </div>

          <h2 id="what-is">What is Tahajjud?</h2>
          <p>Tahajjud (تهجد) comes from <em>hajada</em> — to remain awake at night. It is a voluntary (nafl) prayer performed after waking from sleep at night, and it is the most virtuous voluntary prayer. The Prophet ﷺ said: "The best prayer after the obligatory prayers is the night prayer." (Sahih Muslim 1163)</p>
          <p>Tahajjud falls under the broader term <strong>Qiyam ul-Layl</strong> (standing in prayer at night). Strictly, Tahajjud is Qiyam performed <em>after sleeping</em>, which is the Sunnah of the Prophet ﷺ.</p>

          <h2 id="time">When is Tahajjud time?</h2>
          <table class="np-table">
            <tr><th>Portion of night</th><th>Approximate time</th><th>Virtue</th></tr>
            <tr><td>First third</td><td>After Isha</td><td>Valid, lesser reward</td></tr>
            <tr><td>Middle third</td><td>Around midnight</td><td>Better</td></tr>
            <tr><td><strong>Last third</strong></td><td>Roughly 1–3 hours before Fajr</td><td><strong>Best — the hour of descent and answered duas</strong></td></tr>
          </table>
          <p>The Prophet ﷺ said: "Our Lord descends every night to the lowest heaven when the last third of the night remains, and He says: Who is calling upon Me, that I may answer him? Who is asking of Me, that I may give him? Who is seeking My forgiveness, that I may forgive him?" (Sahih al-Bukhari 1145)</p>
          <p><strong>To calculate the last third:</strong> divide the time between Maghrib and Fajr into three parts — the final part is the last third. For example, if Maghrib is 9pm and Fajr is 4:30am, the last third begins around 1:20am.</p>

          <h2 id="rakats">How many rakats is Tahajjud?</h2>
          <ul>
            <li><strong>Minimum:</strong> 2 rakats.</li>
            <li><strong>The Prophet's ﷺ usual practice:</strong> 8 rakats (prayed in sets of 2), followed by 3 rakats of Witr — 11 total. Aisha (رضي الله عنها) said: "He never prayed more than eleven rakats, in Ramadan or outside it." (Sahih al-Bukhari 1147)</li>
            <li><strong>No fixed maximum:</strong> pray what is easy and sustainable. Consistency is beloved to Allah — "The most beloved deeds to Allah are the most consistent, even if small." (Sahih al-Bukhari 6464)</li>
          </ul>

          <h2 id="how-to">How to pray Tahajjud — step by step</h2>
          <ol>
            <li><strong>Sleep after Isha</strong> with the intention of waking for Tahajjud — even the intention carries reward.</li>
            <li><strong>Wake before Fajr</strong> (set an alarm for the last third if possible) and make wudu.</li>
            <li><strong>Begin with 2 light rakats,</strong> as the Prophet ﷺ recommended opening the night prayer.</li>
            <li><strong>Pray in sets of 2 rakats</strong> — recite Al-Fatiha and any surahs; longer recitation is better if you can.</li>
            <li><strong>Make long, unhurried dua</strong> in sujood and after the prayer — this is the time duas are answered.</li>
            <li><strong>Close with Witr</strong> (1 or 3 rakats) if you have not prayed it after Isha, including <a href="/blog/dua-e-qunoot-arabic-english">Dua e Qunoot</a>.</li>
          </ol>

          <h2 id="dua">Dua of the Prophet ﷺ in Tahajjud</h2>
          <div class="verse-card">
            <span class="vnum">OPENING DUA OF TAHAJJUD · Bukhari 1120 (excerpt)</span>
            <div class="arabic">اَللّٰهُمَّ لَكَ الْحَمْدُ أَنْتَ قَيِّمُ السَّمَاوَاتِ وَالْأَرْضِ وَمَنْ فِيهِنَّ وَلَكَ الْحَمْدُ لَكَ مُلْكُ السَّمَاوَاتِ وَالْأَرْضِ وَمَنْ فِيهِنَّ</div>
            <p class="translit">Allaahumma lakal-hamdu anta qayyimus-samaawaati wal-ardi wa man feehinn, wa lakal-hamdu laka mulkus-samaawaati wal-ardi wa man feehinn…</p>
            <p class="trans-en"><strong>English:</strong> O Allah, to You belongs all praise; You are the Sustainer of the heavens and the earth and all within them. To You belongs all praise; Yours is the dominion of the heavens and the earth and all within them…</p>
          </div>

          <h2 id="benefits">Benefits of Tahajjud</h2>
          <ul>
            <li><strong>A praised station:</strong> Allah promises Maqam Mahmud to those who pray it (Quran 17:79).</li>
            <li><strong>Answered duas:</strong> the last third of the night is the hour Allah answers those who call on Him (Bukhari 1145).</li>
            <li><strong>Mark of the righteous:</strong> "They used to sleep but little of the night, and in the hours before dawn they would ask forgiveness." (Quran 51:17–18)</li>
            <li><strong>Forgiveness of sins and closeness to Allah:</strong> "Hold fast to night prayer, for it was the way of the righteous before you, a means of closeness to your Lord, an expiation for bad deeds, and a barrier from sin." (Tirmidhi 3549)</li>
            <li><strong>Peace of heart:</strong> the stillness of the night removes anxiety — see also our <a href="/blog/dua-for-anxiety-stress-depression">duas for anxiety and stress</a>.</li>
          </ul>

          <h2 id="tips">7 practical tips to wake up for Tahajjud</h2>
          <ol>
            <li>Sleep early — protect your night from screens after Isha.</li>
            <li>Make a sincere intention before sleeping; recite <a href="/blog/ayatul-kursi-arabic-english-benefits">Ayatul Kursi</a> and the sleeping adhkar.</li>
            <li>Start small: even 10 minutes before Fajr with 2 rakats counts.</li>
            <li>Set your alarm 20–30 minutes before Fajr rather than aiming for 2am immediately.</li>
            <li>Take a short afternoon nap (qaylulah) — the Sunnah helper of night prayer.</li>
            <li>Avoid heavy late dinners.</li>
            <li>Be consistent — a small regular Tahajjud is better than an occasional long one.</li>
          </ol>

          <div class="highlight-box">
            <strong>Want to perfect your Salah, recitation and duas?</strong> NoorPath Academy's certified tutors teach adults and children in live 1-on-1 classes — Salah, Tajweed and Quran from the basics. <a href="/online-quran-classes-for-adults">Book a free 30-minute trial</a> — no credit card required.
          </div>`,
  },
  "surah-waqiah-benefits": {
    style: ISLAMIC_STYLE,
    content: `<p><strong>Surah Al-Waqiah</strong> (سورة الواقعة — "The Inevitable Event") is the 56th chapter of the Quran with 96 verses, revealed in Makkah. It takes its name from its opening word describing the Day of Judgment — the event that will certainly occur. It is one of the most-recited surahs in Muslim homes, famously associated with <strong>rizq (provision) and protection from poverty</strong>.</p>

          <div class="highlight-box">
            <strong>Quick answer:</strong> Surah Waqiah is chapter 56 of the Quran (para/juz 27). It describes the three groups of people on the Day of Judgment and is widely recited <strong>every night</strong> based on the narration: "Whoever recites Surah Al-Waqiah every night will never be afflicted by poverty." Read its themes, key verses and authentic benefits below. Want to read the Quran fluently? <a href="/courses/noorani-qaida-online">Start with Noorani Qaida</a>.
          </div>

          <h2 id="facts">Surah Waqiah at a glance</h2>
          <table class="np-table">
            <tr><th>Detail</th><th>Answer</th></tr>
            <tr><td>Chapter number</td><td>56</td></tr>
            <tr><td>Verses</td><td>96</td></tr>
            <tr><td>Para / Juz</td><td>27</td></tr>
            <tr><td>Revelation</td><td>Makkah (Makki)</td></tr>
            <tr><td>Named after</td><td>Al-Waqiah — "The Inevitable Event" (the Day of Judgment)</td></tr>
            <tr><td>Famous for</td><td>Rizq (provision), protection from poverty, vivid description of the Hereafter</td></tr>
          </table>

          <h2 id="themes">What is Surah Waqiah about?</h2>
          <p>The surah opens with the moment the Day of Judgment strikes — when the earth is shaken and mountains crumble to scattered dust — and then divides all of humanity into <strong>three groups</strong>:</p>
          <ul>
            <li><strong>As-Sabiqun (The Foremost):</strong> those nearest to Allah, rewarded with the highest gardens.</li>
            <li><strong>Ashab al-Yamin (People of the Right):</strong> the righteous believers, in comfort and honour.</li>
            <li><strong>Ashab ash-Shimal (People of the Left):</strong> the deniers, in scorching wind and shadow of black smoke.</li>
          </ul>
          <p>The middle of the surah presents four powerful proofs of Allah's power that we witness daily — the creation of man, the seed the farmer sows, the water we drink, and the fire we kindle — each followed by the question: could <em>you</em> create this?</p>

          <h2 id="verses">Key verses with Arabic and English</h2>
          <div class="verse-card">
            <span class="vnum">SURAH AL-WAQIAH · 56:1–3</span>
            <div class="arabic">إِذَا وَقَعَتِ الْوَاقِعَةُ ۝ لَيْسَ لِوَقْعَتِهَا كَاذِبَةٌ ۝ خَافِضَةٌ رَّافِعَةٌ</div>
            <p class="translit">Idhaa waqa'atil-waaqi'ah. Laysa li waq'atihaa kaadhibah. Khaafidatur-raafi'ah.</p>
            <p class="trans-en"><strong>English:</strong> When the Inevitable Event occurs — of its occurrence there is no denial — it will bring some low and raise others high.</p>
          </div>
          <div class="verse-card">
            <span class="vnum">SURAH AL-WAQIAH · 56:63–64</span>
            <div class="arabic">أَفَرَأَيْتُم مَّا تَحْرُثُونَ ۝ أَأَنتُمْ تَزْرَعُونَهُ أَمْ نَحْنُ الزَّارِعُونَ</div>
            <p class="translit">Afara'aytum maa tahruthoon. A-antum tazra'oonahu am nahnuz-zaari'oon.</p>
            <p class="trans-en"><strong>English:</strong> Have you seen what you sow? Is it you who make it grow, or are We the Grower?</p>
          </div>

          <h2 id="benefits">Benefits of Surah Waqiah</h2>
          <ul>
            <li><strong>Protection from poverty:</strong> Ibn Mas'ud (رضي الله عنه) narrated that the Prophet ﷺ said: "Whoever recites Surah Al-Waqiah every night will never be afflicted by poverty." (Recorded by al-Bayhaqi in Shu'ab al-Iman; scholars grade its chain as weak, but many — including Ibn Kathir — mention the widespread practice of the righteous acting upon it as encouragement.)</li>
            <li><strong>Certainty about the Hereafter:</strong> its vivid imagery strengthens iman and softens the heart.</li>
            <li><strong>Gratitude and tawakkul:</strong> the four proofs (crops, water, fire, creation) train the heart to see Allah as the true Provider — the deeper meaning behind its association with rizq.</li>
            <li><strong>Part of nightly worship:</strong> pairing it with <a href="/blog/surah-mulk-benefits">Surah Mulk</a> makes a beautiful nightly Quran routine.</li>
          </ul>

          <div class="gold-box">
            <strong>Honest note on the hadith:</strong> The famous "never afflicted by poverty" narration has a weak chain according to hadith scholars. However, reciting Surah Waqiah remains rewarding like all Quran recitation — every letter carries ten rewards (Tirmidhi 2910) — and its message itself builds the mindset of trusting Allah as Ar-Razzaq (The Provider). Recite it for reward and reflection, and trust Allah for provision.
          </div>

          <h2 id="when">When to recite Surah Waqiah</h2>
          <ul>
            <li><strong>Every night</strong> — the practice narrated from the salaf, often after Maghrib or Isha.</li>
            <li>Alongside Surah Mulk before sleeping.</li>
            <li>In times of financial difficulty — combined with Istighfar, which the Quran links to rizq (Surah Nuh 71:10–12), and practical effort.</li>
          </ul>

          <h2 id="learn">Learn to recite Surah Waqiah correctly</h2>
          <p>Surah Waqiah contains many similar-sounding words where Tajweed matters. If you or your child cannot yet read the Quran fluently, start with <a href="/blog/noorani-qaida-complete-guide">Noorani Qaida</a> — the step-by-step primer that takes you from the alphabet to fluent Quran reading.</p>

          <div class="highlight-box">
            <strong>Want to recite Surah Waqiah with proper Tajweed?</strong> NoorPath Academy's certified tutors teach live 1-on-1 Quran classes for kids and adults — from Qaida to fluent recitation. <a href="/online-quran-classes-for-kids">Book a free 30-minute trial</a> — no credit card required.
          </div>`,
  },
  "surah-rahman-benefits": {
    style: ISLAMIC_STYLE,
    content: `<p><strong>Surah Ar-Rahman</strong> (سورة الرحمن — "The Most Merciful") is the 55th chapter of the Quran with 78 verses. It is famously called the <strong>"Bride of the Quran"</strong> (Arus al-Quran) for its stunning beauty — a rhythmic chapter listing Allah's favours in creation, Paradise and beyond, punctuated 31 times by one unforgettable question: <em>"Which of the favours of your Lord will you deny?"</em></p>

          <div class="highlight-box">
            <strong>Quick answer:</strong> Surah Rahman is chapter 55 of the Quran (juz 27), named after Allah's name <strong>Ar-Rahman (The Most Merciful)</strong>. Its refrain "Fabi ayyi aalaa'i Rabbikumaa tukadhdhibaan" repeats 31 times, addressing both humans and jinn. It is recited for gratitude, reflection and comfort of the heart. Key verses and benefits below. Want your child to read it beautifully? <a href="/online-quran-classes-for-kids">Book a free trial</a>.
          </div>

          <h2 id="facts">Surah Rahman at a glance</h2>
          <table class="np-table">
            <tr><th>Detail</th><th>Answer</th></tr>
            <tr><td>Chapter number</td><td>55</td></tr>
            <tr><td>Verses</td><td>78</td></tr>
            <tr><td>Para / Juz</td><td>27</td></tr>
            <tr><td>Famous name</td><td>The Bride of the Quran (Arus al-Quran)</td></tr>
            <tr><td>Repeated verse</td><td>"Which of the favours of your Lord will you deny?" — 31 times</td></tr>
            <tr><td>Audience</td><td>Both mankind and jinn (addressed together)</td></tr>
          </table>

          <h2 id="themes">What is Surah Rahman about?</h2>
          <p>The surah opens not with a command but with a name — <strong>Ar-Rahman</strong> — and His greatest favour: "Ar-Rahman. He taught the Quran. He created man. He taught him speech." (55:1–4). It then sweeps through Allah's signs: the sun and moon in precise orbit, the sky raised high, the earth laid out with fruit and grain, the two seas meeting without transgressing, pearls and coral, ships like mountains on the ocean.</p>
          <p>After every few favours comes the refrain — a direct question to jinn and mankind — before the surah moves to the Day of Judgment and then two breathtaking descriptions of Paradise: two gardens with flowing springs, every fruit in pairs, and companions of pure beauty.</p>

          <h2 id="verses">Key verses with Arabic and English</h2>
          <div class="verse-card">
            <span class="vnum">SURAH AR-RAHMAN · 55:1–4</span>
            <div class="arabic">الرَّحْمَٰنُ ۝ عَلَّمَ الْقُرْآنَ ۝ خَلَقَ الْإِنسَانَ ۝ عَلَّمَهُ الْبَيَانَ</div>
            <p class="translit">Ar-Rahmaan. 'Allamal-Qur'aan. Khalaqal-insaan. 'Allamahul-bayaan.</p>
            <p class="trans-en"><strong>English:</strong> The Most Merciful. He taught the Quran. He created man. He taught him eloquent speech.</p>
          </div>
          <div class="verse-card">
            <span class="vnum">THE REPEATED VERSE · 31 times</span>
            <div class="arabic">فَبِأَيِّ آلَاءِ رَبِّكُمَا تُكَذِّبَانِ</div>
            <p class="translit">Fabi ayyi aalaa'i Rabbikumaa tukadhdhibaan.</p>
            <p class="trans-en"><strong>English:</strong> So which of the favours of your Lord will you both (mankind and jinn) deny?</p>
          </div>
          <div class="verse-card">
            <span class="vnum">SURAH AR-RAHMAN · 55:26–27</span>
            <div class="arabic">كُلُّ مَنْ عَلَيْهَا فَانٍ ۝ وَيَبْقَىٰ وَجْهُ رَبِّكَ ذُو الْجَلَالِ وَالْإِكْرَامِ</div>
            <p class="translit">Kullu man 'alayhaa faan. Wa yabqaa wajhu Rabbika dhul-jalaali wal-ikraam.</p>
            <p class="trans-en"><strong>English:</strong> All that is on earth will perish, and there will remain the Face of your Lord, Owner of Majesty and Honour.</p>
          </div>

          <h2 id="benefits">Benefits of reciting Surah Rahman</h2>
          <ul>
            <li><strong>Gratitude training:</strong> the repeated question rewires the heart to count blessings instead of complaints — a Quranic antidote to ingratitude.</li>
            <li><strong>Comfort and peace:</strong> many find its rhythm deeply calming; it is widely listened to for tranquility of the heart. Allah says: "By the remembrance of Allah do hearts find rest." (13:28)</li>
            <li><strong>Reflection on Paradise:</strong> its two garden passages build longing for the Hereafter and motivation for good deeds.</li>
            <li><strong>General Quran reward:</strong> every letter recited earns ten rewards (Tirmidhi 2910). A surah of 78 verses recited regularly accumulates immense reward.</li>
          </ul>

          <div class="gold-box">
            <strong>Note on "Bride of the Quran":</strong> The narration calling Surah Ar-Rahman the bride of the Quran (recorded by al-Bayhaqi) is graded weak by hadith scholars — but the title has remained across centuries because it captures the surah's unmatched beauty. Recite it for its Quranic reward and its message; the beauty speaks for itself.
          </div>

          <h2 id="when">When to recite Surah Rahman</h2>
          <ul>
            <li><strong>Morning:</strong> starting the day by counting Allah's favours sets a grateful tone.</li>
            <li><strong>In times of sadness or anxiety</strong> — paired with the <a href="/blog/dua-for-anxiety-stress-depression">duas for anxiety</a>.</li>
            <li><strong>Family recitation:</strong> its rhythm makes it one of the easiest long surahs for children to love and memorise — many kids learn the refrain first.</li>
          </ul>

          <h2 id="learn">Help your child fall in love with Surah Rahman</h2>
          <p>Because of its repetition and rhythm, Surah Rahman is often a child's favourite long surah. Start with correct letter sounds through the <a href="/blog/arabic-alphabet-for-kids">Arabic alphabet</a> and <a href="/blog/noorani-qaida-complete-guide">Noorani Qaida</a>, then progress to recitation with a live tutor correcting Tajweed in real time.</p>

          <div class="highlight-box">
            <strong>Want your child to recite the Bride of the Quran beautifully?</strong> NoorPath Academy's certified tutors teach live 1-on-1 Quran classes with Tajweed for ages 4–12 and adults. <a href="/online-quran-classes-for-kids">Book a free 30-minute trial</a> — no credit card required.
          </div>`,
  },
  "darood-sharif": {
    style: ISLAMIC_STYLE,
    content: `<p><strong>Darood Sharif</strong> (also spelled Durood Shareef) is the beautiful blessing that Muslims send upon the Prophet Muhammad ﷺ. The most well-known form — <strong>Darood Ibrahim</strong> — is recited in the final sitting of every Salah, making it one of the most repeated supplications in a Muslim's life.</p>

          <div class="highlight-box">
            <strong>Quick answer:</strong> Darood Sharif means sending blessings (salawat) upon the Prophet ﷺ. The complete form recited in Salah is <strong>Darood Ibrahim</strong>: "Allaahumma salli alaa Muhammadin wa alaa aali Muhammad…". Allah promises ten blessings for every one Darood a person sends. Want your child to recite it perfectly in Salah? <a href="/online-quran-classes-for-kids">Book a free trial class</a>.
          </div>

          <h2 id="what-is">What is Darood Sharif?</h2>
          <p>Darood Sharif (Arabic: <em>salawat</em>) is a dua in which we ask Allah to honour, exalt and send peace upon the Prophet Muhammad ﷺ. Allah Himself commands it in the Quran: "Indeed, Allah confers blessing upon the Prophet, and His angels [ask Him to do so]. O you who have believed, ask [Allah to confer] blessing upon him and ask [Allah to grant him] peace." (Surah Al-Ahzab 33:56).</p>

          <h2 id="darood-ibrahim">Darood Ibrahim (recited in Salah)</h2>
          <div class="verse-card">
            <span class="vnum">DAROOD IBRAHIM · Complete</span>
            <div class="arabic">اَللّٰهُمَّ صَلِّ عَلٰى مُحَمَّدٍ وَّعَلٰى اٰلِ مُحَمَّدٍ كَمَا صَلَّيْتَ عَلٰى اِبْرَاهِيْمَ وَعَلٰى اٰلِ اِبْرَاهِيْمَ اِنَّكَ حَمِيْدٌ مَّجِيْدٌ ۖ اَللّٰهُمَّ بَارِكْ عَلٰى مُحَمَّدٍ وَّعَلٰى اٰلِ مُحَمَّدٍ كَمَا بَارَكْتَ عَلٰى اِبْرَاهِيْمَ وَعَلٰى اٰلِ اِبْرَاهِيْمَ اِنَّكَ حَمِيْدٌ مَّجِيْدٌ</div>
            <p class="translit">Allaahumma salli alaa Muhammadin wa alaa aali Muhammadin kamaa sallayta alaa Ibraaheema wa alaa aali Ibraaheema innaka hameedum majeed. Allaahumma baarik alaa Muhammadin wa alaa aali Muhammadin kamaa baarakta alaa Ibraaheema wa alaa aali Ibraaheema innaka hameedum majeed.</p>
            <p class="trans-en"><strong>English:</strong> O Allah, send prayers upon Muhammad and upon the family of Muhammad, as You sent prayers upon Ibrahim and upon the family of Ibrahim; indeed, You are Praiseworthy and Glorious. O Allah, send blessings upon Muhammad and upon the family of Muhammad, as You sent blessings upon Ibrahim and upon the family of Ibrahim; indeed, You are Praiseworthy and Glorious.</p>
          </div>
          <p>This is the Darood the Prophet ﷺ taught his companions when they asked how to send blessings upon him (Sahih al-Bukhari). It is recited in the last sitting (Qa'dah) of Salah, after the Tashahhud.</p>

          <h2 id="short-darood">Short Darood Sharif</h2>
          <div class="verse-card">
            <span class="vnum">SHORT DAROOD</span>
            <div class="arabic">اَللّٰهُمَّ صَلِّ عَلٰى مُحَمَّدٍ وَّعَلٰى اٰلِهٖ وَاَصْحَابِهٖ وَسَلِّمْ</div>
            <p class="translit">Allaahumma salli alaa Muhammadin wa alaa aalihi wa as-haabihi wa sallim.</p>
            <p class="trans-en"><strong>English:</strong> O Allah, send blessings and peace upon Muhammad, and upon his family and his companions.</p>
          </div>
          <p>Muslims also commonly say the short salawat <em>"Sallallahu alayhi wa sallam"</em> (may Allah's peace and blessings be upon him) whenever the Prophet's ﷺ name is mentioned.</p>

          <h2 id="benefits">Benefits of reciting Darood Sharif</h2>
          <ul>
            <li><strong>Tenfold blessings:</strong> The Prophet ﷺ said, "Whoever sends one blessing upon me, Allah will send ten blessings upon him." (Sahih Muslim).</li>
            <li><strong>Sins forgiven and ranks raised:</strong> With each salawat, Allah forgives sins and elevates the reciter's status.</li>
            <li><strong>Nearest on the Day of Judgment:</strong> "The people nearest to me on the Day of Resurrection will be those who send the most blessings upon me." (Tirmidhi).</li>
            <li><strong>Duas are accepted:</strong> Sending Darood at the beginning and end of dua is a key reason for its acceptance.</li>
            <li><strong>Angels' prayers:</strong> The angels ask forgiveness for the one who sends blessings upon the Prophet ﷺ.</li>
          </ul>

          <h2 id="when">When to recite Darood Sharif</h2>
          <ul>
            <li>In every Salah, in the final sitting after Tashahhud.</li>
            <li>Abundantly on <strong>Friday (Jumu'ah)</strong> — the Prophet ﷺ especially encouraged it.</li>
            <li>Whenever his ﷺ blessed name is mentioned.</li>
            <li>At the start and end of every dua.</li>
            <li>As daily dhikr, morning and evening.</li>
          </ul>

          <div class="gold-box">
            <strong>Teaching Darood to children:</strong> Since Darood Ibrahim is part of Salah, children should learn it early with correct pronunciation. Break it into two halves (the "salli" part and the "barik" part), practise a few minutes daily, and connect it to their prayer. A tutor can correct pronunciation live — see our <a href="/blog/how-to-pray-salah-step-by-step">step-by-step Salah guide</a> and <a href="/blog/duas-for-kids-to-memorize">essential duas for kids</a>.
          </div>

          <div class="highlight-box">
            <strong>Want your child to recite Darood Sharif perfectly in their prayer?</strong> NoorPath Academy's certified tutors teach Salah, Darood, and Quran with correct Tajweed in live 1-on-1 classes. <a href="/online-quran-classes-for-kids">Book a free 30-minute trial</a> — no credit card required.
          </div>`,
  },
  "4-quls": {
    style: ISLAMIC_STYLE,
    content: `<p>The <strong>4 Quls</strong> (Four Quls) are four short surahs of the Quran that each begin with the word <em>"Qul"</em> — meaning "Say". They are among the most recited surahs in Islam, memorised early by children, and known for their powerful protection. The Four Quls are <strong>Surah Al-Kafirun, Surah Al-Ikhlas, Surah Al-Falaq and Surah An-Nas</strong>.</p>

          <div class="highlight-box">
            <strong>Quick answer:</strong> The 4 Quls are Surah Al-Kafirun (109), Al-Ikhlas (112), Al-Falaq (113) and An-Nas (114). The last three are recited for protection every morning and evening and before sleep. Read them all below with Arabic, transliteration and English. Want your child to memorise the 4 Quls correctly? <a href="/online-quran-classes-for-kids">Book a free trial</a>.
          </div>

          <h2 id="what-are">What are the 4 Quls?</h2>
          <p>Four surahs of the Quran open with the command "Qul" (Say). Muslims group them together as the "4 Quls" because they are short, easy to memorise, and carry immense benefit — especially the last three, which the Prophet ﷺ used daily for protection from all harm.</p>

          <h2 id="kafirun">1. Surah Al-Kafirun</h2>
          <div class="verse-card">
            <span class="vnum">SURAH AL-KAFIRUN · 109</span>
            <div class="arabic">قُلْ يَٰٓأَيُّهَا ٱلْكَٰفِرُونَ ۝ لَآ أَعْبُدُ مَا تَعْبُدُونَ ۝ وَلَآ أَنتُمْ عَٰبِدُونَ مَآ أَعْبُدُ ۝ وَلَآ أَنَا۠ عَابِدٌ مَّا عَبَدتُّمْ ۝ وَلَآ أَنتُمْ عَٰبِدُونَ مَآ أَعْبُدُ ۝ لَكُمْ دِينُكُمْ وَلِىَ دِينِ</div>
            <p class="translit">Qul yaa ayyuhal-kaafiroon. Laa a'budu maa ta'budoon. Wa laa antum aabidoona maa a'bud. Wa laa ana aabidum-maa abadtum. Wa laa antum aabidoona maa a'bud. Lakum deenukum wa liya deen.</p>
            <p class="trans-en"><strong>English:</strong> Say: O disbelievers, I do not worship what you worship, nor do you worship what I worship. Nor will I worship what you worship, nor will you worship what I worship. For you is your religion, and for me is my religion.</p>
          </div>

          <h2 id="ikhlas">2. Surah Al-Ikhlas</h2>
          <div class="verse-card">
            <span class="vnum">SURAH AL-IKHLAS · 112</span>
            <div class="arabic">قُلْ هُوَ ٱللَّهُ أَحَدٌ ۝ ٱللَّهُ ٱلصَّمَدُ ۝ لَمْ يَلِدْ وَلَمْ يُولَدْ ۝ وَلَمْ يَكُن لَّهُۥ كُفُوًا أَحَدٌۢ</div>
            <p class="translit">Qul huwallaahu ahad. Allaahus-samad. Lam yalid wa lam yoolad. Wa lam yakun lahu kufuwan ahad.</p>
            <p class="trans-en"><strong>English:</strong> Say: He is Allah, [who is] One. Allah, the Eternal Refuge. He neither begets nor is born, nor is there to Him any equivalent.</p>
          </div>
          <p>The Prophet ﷺ said Surah Al-Ikhlas equals one-third of the Quran (Sahih al-Bukhari), because it purely describes the Oneness of Allah (Tawheed).</p>

          <h2 id="falaq">3. Surah Al-Falaq</h2>
          <div class="verse-card">
            <span class="vnum">SURAH AL-FALAQ · 113</span>
            <div class="arabic">قُلْ أَعُوذُ بِرَبِّ ٱلْفَلَقِ ۝ مِن شَرِّ مَا خَلَقَ ۝ وَمِن شَرِّ غَاسِقٍ إِذَا وَقَبَ ۝ وَمِن شَرِّ ٱلنَّفَّٰثَٰتِ فِى ٱلْعُقَدِ ۝ وَمِن شَرِّ حَاسِدٍ إِذَا حَسَدَ</div>
            <p class="translit">Qul a'oodhu bi rabbil-falaq. Min sharri maa khalaq. Wa min sharri ghaasiqin idhaa waqab. Wa min sharrin-naffaathaati fil-uqad. Wa min sharri haasidin idhaa hasad.</p>
            <p class="trans-en"><strong>English:</strong> Say: I seek refuge in the Lord of daybreak, from the evil of that which He created, and from the evil of darkness when it settles, and from the evil of the blowers in knots, and from the evil of an envier when he envies.</p>
          </div>

          <h2 id="nas">4. Surah An-Nas</h2>
          <div class="verse-card">
            <span class="vnum">SURAH AN-NAS · 114</span>
            <div class="arabic">قُلْ أَعُوذُ بِرَبِّ ٱلنَّاسِ ۝ مَلِكِ ٱلنَّاسِ ۝ إِلَٰهِ ٱلنَّاسِ ۝ مِن شَرِّ ٱلْوَسْوَاسِ ٱلْخَنَّاسِ ۝ ٱلَّذِى يُوَسْوِسُ فِى صُدُورِ ٱلنَّاسِ ۝ مِنَ ٱلْجِنَّةِ وَٱلنَّاسِ</div>
            <p class="translit">Qul a'oodhu bi rabbin-naas. Malikin-naas. Ilaahin-naas. Min sharril-waswaasil-khannaas. Alladhee yuwaswisu fee sudoorin-naas. Minal-jinnati wan-naas.</p>
            <p class="trans-en"><strong>English:</strong> Say: I seek refuge in the Lord of mankind, the Sovereign of mankind, the God of mankind, from the evil of the retreating whisperer, who whispers [evil] into the breasts of mankind, from among the jinn and mankind.</p>
          </div>

          <h2 id="benefits">Benefits of the 4 Quls</h2>
          <ul>
            <li><strong>Al-Falaq and An-Nas (Al-Mu'awwidhatayn)</strong> are the two surahs of protection. The Prophet ﷺ recited them morning and evening and before sleeping, blowing into his hands and wiping over his body (Sahih al-Bukhari).</li>
            <li><strong>Surah Al-Ikhlas</strong> equals one-third of the Quran in reward.</li>
            <li><strong>Surah Al-Kafirun</strong> is a declaration of pure Tawheed and freedom from shirk; reciting it before sleep is a Sunnah.</li>
            <li>Reciting the last three Quls three times each morning and evening suffices a person against everything (Tirmidhi, Abu Dawud).</li>
          </ul>

          <div class="gold-box">
            <strong>Teaching the 4 Quls to kids:</strong> These four surahs are short and perfect for early memorisation. Teach one at a time, listen-and-repeat in small pieces, and revise daily. See our <a href="/blog/duas-for-kids-to-memorize">essential duas for kids</a> and the <a href="/blog/six-kalimas-of-islam">6 Kalimas guide</a> to build a strong foundation.
          </div>

          <div class="highlight-box">
            <strong>Help your child memorise the 4 Quls with perfect Tajweed.</strong> NoorPath Academy offers live 1-on-1 Quran classes with certified male and female tutors and a free 30-minute trial. <a href="/online-quran-classes-for-kids">Book your free trial today</a> — no credit card required.
          </div>`,
  },
  "arabic-alphabet-for-kids": {
    style: ISLAMIC_STYLE,
    content: `<p>The <strong>Arabic alphabet for kids</strong> — known as <strong>Huroof-e-Tahaji</strong> — is the very first step every child takes on the path to reading the Quran. The Arabic alphabet has <strong>28 letters</strong>, and once a child knows their names and sounds, they are ready to begin Noorani Qaida and, soon after, read the Quran itself.</p>

          <div class="highlight-box">
            <strong>Quick answer:</strong> The Arabic alphabet has 28 letters, written and read from right to left. Children start by learning each letter's name and sound (Alif, Baa, Taa…), then how the letters join, then vowels (Zabar, Zer, Pesh). Below is the full alphabet chart. Want a tutor to teach your child the correct sounds? <a href="/online-quran-classes-for-kids">Book a free trial</a>.
          </div>

          <h2 id="how-many">How many letters are in the Arabic alphabet?</h2>
          <p>There are <strong>28 letters</strong> in the Arabic alphabet. Arabic is written from <strong>right to left</strong>, and most letters change their shape slightly depending on whether they appear at the beginning, middle, or end of a word — but the name and sound stay the same. That is why children first learn the letters on their own before learning how they join.</p>

          <h2 id="chart">Arabic alphabet chart (Huroof-e-Tahaji)</h2>
          <p>Here are all 28 Arabic letters with their names. Tap through them slowly with your child and repeat each name aloud:</p>
          <div class="letter-grid">
            <div class="letter-cell"><div class="lg-ar">ا</div><div class="lg-name">Alif</div></div>
            <div class="letter-cell"><div class="lg-ar">ب</div><div class="lg-name">Baa</div></div>
            <div class="letter-cell"><div class="lg-ar">ت</div><div class="lg-name">Taa</div></div>
            <div class="letter-cell"><div class="lg-ar">ث</div><div class="lg-name">Thaa</div></div>
            <div class="letter-cell"><div class="lg-ar">ج</div><div class="lg-name">Jeem</div></div>
            <div class="letter-cell"><div class="lg-ar">ح</div><div class="lg-name">Haa</div></div>
            <div class="letter-cell"><div class="lg-ar">خ</div><div class="lg-name">Khaa</div></div>
            <div class="letter-cell"><div class="lg-ar">د</div><div class="lg-name">Daal</div></div>
            <div class="letter-cell"><div class="lg-ar">ذ</div><div class="lg-name">Dhaal</div></div>
            <div class="letter-cell"><div class="lg-ar">ر</div><div class="lg-name">Raa</div></div>
            <div class="letter-cell"><div class="lg-ar">ز</div><div class="lg-name">Zay</div></div>
            <div class="letter-cell"><div class="lg-ar">س</div><div class="lg-name">Seen</div></div>
            <div class="letter-cell"><div class="lg-ar">ش</div><div class="lg-name">Sheen</div></div>
            <div class="letter-cell"><div class="lg-ar">ص</div><div class="lg-name">Saad</div></div>
            <div class="letter-cell"><div class="lg-ar">ض</div><div class="lg-name">Daad</div></div>
            <div class="letter-cell"><div class="lg-ar">ط</div><div class="lg-name">Taa (Toa)</div></div>
            <div class="letter-cell"><div class="lg-ar">ظ</div><div class="lg-name">Zaa (Dhoa)</div></div>
            <div class="letter-cell"><div class="lg-ar">ع</div><div class="lg-name">Ayn</div></div>
            <div class="letter-cell"><div class="lg-ar">غ</div><div class="lg-name">Ghayn</div></div>
            <div class="letter-cell"><div class="lg-ar">ف</div><div class="lg-name">Faa</div></div>
            <div class="letter-cell"><div class="lg-ar">ق</div><div class="lg-name">Qaaf</div></div>
            <div class="letter-cell"><div class="lg-ar">ك</div><div class="lg-name">Kaaf</div></div>
            <div class="letter-cell"><div class="lg-ar">ل</div><div class="lg-name">Laam</div></div>
            <div class="letter-cell"><div class="lg-ar">م</div><div class="lg-name">Meem</div></div>
            <div class="letter-cell"><div class="lg-ar">ن</div><div class="lg-name">Noon</div></div>
            <div class="letter-cell"><div class="lg-ar">و</div><div class="lg-name">Waaw</div></div>
            <div class="letter-cell"><div class="lg-ar">ه</div><div class="lg-name">Haa</div></div>
            <div class="letter-cell"><div class="lg-ar">ي</div><div class="lg-name">Yaa</div></div>
          </div>

          <h2 id="steps">The right order to teach the Arabic alphabet</h2>
          <ol>
            <li><strong>Letter names</strong> — recognise and name each of the 28 letters (Alif, Baa, Taa…).</li>
            <li><strong>Letter sounds</strong> — the actual sound each letter makes, with correct pronunciation from the throat and mouth (Makharij).</li>
            <li><strong>Letter shapes</strong> — how each letter looks at the beginning, middle and end of a word.</li>
            <li><strong>Joining letters</strong> — connecting letters to form small words.</li>
            <li><strong>Vowels (Harakat)</strong> — Zabar (a), Zer (i), Pesh (u), then Tanween and Sukoon.</li>
          </ol>
          <p>This is exactly the sequence taught in <a href="/courses/noorani-qaida-online">Noorani Qaida</a> — the proven primer used worldwide to prepare children to read the Quran. Learn more in our <a href="/blog/noorani-qaida-complete-guide">complete Noorani Qaida guide</a>.</p>

          <h2 id="tips">Tips to teach the Arabic alphabet to kids</h2>
          <ul>
            <li><strong>Short, daily sessions</strong> (5–10 minutes) work far better than long weekly ones.</li>
            <li><strong>Colour, sound and play</strong> — young children learn letters faster through visuals, songs and games.</li>
            <li><strong>Correct sounds from day one</strong> — some Arabic letters (like ح, ع, ض, ق) have no English equivalent, so hearing them correctly matters.</li>
            <li><strong>Repeat and revise</strong> yesterday's letters before adding new ones.</li>
            <li><strong>Use a live tutor</strong> for pronunciation — this is the one thing apps and charts cannot correct.</li>
          </ul>

          <div class="gold-box">
            <strong>Why pronunciation matters:</strong> Several Arabic letters sound similar to a beginner (like س / ص, or ت / ط). If a child learns them incorrectly, it affects their Quran recitation for years. A certified tutor listens live and corrects gently — the safest way to build a strong foundation.
          </div>

          <div class="highlight-box">
            <strong>Ready to teach your child the Arabic alphabet the right way?</strong> NoorPath Academy's certified tutors teach the Arabic alphabet and Noorani Qaida in fun, live 1-on-1 classes with male and female teachers. <a href="/online-quran-classes-for-kids">Book a free 30-minute trial</a> — no credit card required.
          </div>`,
  },
  "ayat-e-karima": {
    style: ISLAMIC_STYLE,
    content: `<p><strong>Ayat e Karima</strong> (also spelled Ayat Kareema) is one of the most beloved and powerful duas in the Quran — the supplication of Prophet Yunus (عليه السلام) recited from within the belly of the whale. Muslims turn to Ayat e Karima in times of hardship, distress, worry and difficulty, trusting in Allah's promise to relieve those who call upon Him.</p>

          <div class="highlight-box">
            <strong>Quick answer:</strong> Ayat e Karima is "Laa ilaaha illaa anta subhaanaka innee kuntu minaz-zaalimeen" (Quran 21:87) — "There is no deity except You; exalted are You. Indeed, I have been of the wrongdoers." It is the dua of Prophet Yunus, recited for relief from every kind of hardship and distress.
          </div>

          <h2 id="arabic">Ayat e Karima — Arabic, transliteration & translation</h2>
          <div class="verse-card">
            <span class="vnum">AYAT E KARIMA · Quran 21:87</span>
            <div class="arabic">لَّآ إِلٰهَ إِلَّآ أَنْتَ سُبْحَانَكَ إِنِّىْ كُنْتُ مِنَ الظَّالِمِيْنَ</div>
            <p class="translit">Laa ilaaha illaa anta subhaanaka innee kuntu minaz-zaalimeen.</p>
            <p class="trans-en"><strong>English:</strong> There is no deity except You; exalted are You. Indeed, I have been of the wrongdoers.</p>
          </div>

          <h2 id="story">The story behind Ayat e Karima</h2>
          <p>Prophet Yunus (Jonah, عليه السلام) called his people to Allah, but when they did not respond, he left in frustration. He boarded a ship, and by Allah's decree he was thrown into the sea and swallowed by a large fish. In the darkness of the fish's belly, deep in the ocean, he called upon Allah with these words. Allah says: "So We responded to him and saved him from the distress. And thus do We save the believers." (Quran 21:88).</p>
          <p>This verse teaches that no matter how dark or hopeless a situation feels, sincere reliance on Allah brings relief.</p>

          <h2 id="benefits">Benefits of reciting Ayat e Karima</h2>
          <ul>
            <li><strong>Relief from hardship and distress</strong> — Allah promises to save the believer who calls upon Him with it, just as He saved Yunus (عليه السلام).</li>
            <li><strong>A powerful dua of repentance</strong> — it combines Tawheed (Allah's Oneness), glorification (Subhanaka), and humble admission of one's mistakes.</li>
            <li>The Prophet ﷺ said: "The supplication of Dhun-Nun (Yunus)… no Muslim ever supplicates with it for anything except that Allah answers him." (Tirmidhi).</li>
            <li>It brings <strong>calm to an anxious heart</strong> and renews trust (tawakkul) in Allah.</li>
          </ul>

          <h2 id="how">How and when to recite Ayat e Karima</h2>
          <ul>
            <li>In any moment of worry, fear, grief or difficulty — recite it with a present, sincere heart.</li>
            <li>Many recite it repeatedly (some traditionally recite it a set number of times) while making a specific dua for relief. There is no fixed obligatory count — sincerity matters most.</li>
            <li>Combine it with sending <a href="/blog/darood-sharif">Darood Sharif</a> before and after your dua for greater acceptance.</li>
            <li>For ongoing anxiety, pair it with the duas in our <a href="/blog/dua-for-anxiety-stress-depression">duas for anxiety and stress</a> guide.</li>
          </ul>

          <div class="gold-box">
            <strong>Teach it to your children:</strong> Ayat e Karima is short and easy for kids to memorise — a beautiful early dua that teaches them to turn to Allah in every difficulty. Learn correct pronunciation with a tutor so the meaning and sounds are right from the start.
          </div>

          <div class="highlight-box">
            <strong>Learn the Quran and its duas with correct Tajweed.</strong> NoorPath Academy's certified tutors teach Quran, duas and Tajweed in live 1-on-1 classes with a free 30-minute trial. <a href="/online-quran-classes-for-kids">Book your free trial</a> — no credit card required.
          </div>`,
  },
  "six-kalimas-of-islam": {
    style: `.article-body { font-size: 1.05rem; line-height: 1.85; color: #374151; }
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
    .kalima-card { background: rgba(10,110,79,.05); border: 1px solid var(--border); border-radius: 14px; padding: 22px 24px; margin: 24px 0; }
    .kalima-card .knum { display: inline-block; background: var(--emerald); color: #fff; font-weight: 700; font-size: .78rem; padding: 4px 14px; border-radius: 20px; margin-bottom: 10px; letter-spacing: .3px; }
    .arabic { font-family: var(--font-amiri, 'Amiri', serif); direction: rtl; text-align: right; font-size: 1.9rem; line-height: 2.5; color: var(--charcoal); margin: 10px 0; }
    .translit { font-style: italic; color: var(--emerald); font-weight: 600; margin: 8px 0; }
    .trans-en { color: #374151; margin: 8px 0; }
    .faq-acc { border: 1px solid var(--border); border-radius: 10px; margin-bottom: 12px; overflow: hidden; }
    .faq-acc summary { padding: 16px 20px; font-weight: 700; cursor: pointer; background: var(--ivory); color: var(--charcoal); list-style: none; display: flex; justify-content: space-between; align-items: center; font-size: .95rem; }
    .faq-acc summary::-webkit-details-marker { display: none; }
    .faq-acc summary span { color: var(--emerald); margin-left: 12px; }
    .faq-acc p { padding: 16px 20px; margin: 0; color: #374151; font-size: .92rem; line-height: 1.75; border-top: 1px solid var(--border); }
    @media (max-width: 576px) { .np-table { font-size: .82rem; } .np-table th, .np-table td { padding: 8px 9px; } .arabic { font-size: 1.55rem; line-height: 2.3; } }`,
    content: `<p>The <strong>6 Kalimas of Islam</strong> are the very first thing most Muslim children are taught to memorise — six short, powerful statements that summarise the core of Islamic belief. From declaring the Oneness of Allah to seeking His forgiveness and rejecting disbelief, the Six Kalimas are a complete foundation of faith in just a few lines.</p>

          <div class="highlight-box">
            <strong>Quick answer:</strong> The 6 Kalimas are: (1) <strong>Tayyabah</strong> (Purity), (2) <strong>Shahadat</strong> (Testimony), (3) <strong>Tamjeed</strong> (Glorification), (4) <strong>Tawheed</strong> (Oneness), (5) <strong>Istighfar</strong> (Seeking Forgiveness), and (6) <strong>Radd-e-Kufr</strong> (Rejection of Disbelief). Below you will find each one in Arabic, transliteration and clear English — plus how to help your child memorise them. Want a tutor to teach them correctly? <a href="/online-quran-classes-for-kids">Book a free 30-minute trial</a>.
          </div>

          <div class="gold-box">
            <strong>Key takeaways:</strong>
            <ul style="margin-bottom:0;">
              <li>The Six Kalimas are a teaching set of statements drawn from the <strong>Quran and authentic Hadith</strong>, traditionally taught to children to build their belief.</li>
              <li>They move step by step — from <strong>declaring faith</strong> to <strong>glorifying Allah</strong>, <strong>affirming His Oneness</strong>, <strong>asking forgiveness</strong>, and finally <strong>rejecting shirk and disbelief</strong>.</li>
              <li>Most children can memorise all six with correct pronunciation in a few weeks of short daily practice.</li>
              <li>Correct Arabic <strong>pronunciation (Tajweed)</strong> matters — a certified tutor prevents mistakes that are hard to fix later.</li>
            </ul>
          </div>

          <div class="highlight-box">
            <strong>On this page:</strong>
            <ul style="margin-bottom:0;">
              <li><a href="#what-are">What are the 6 Kalimas?</a></li>
              <li><a href="#first">First Kalima — Tayyabah</a></li>
              <li><a href="#second">Second Kalima — Shahadat</a></li>
              <li><a href="#third">Third Kalima — Tamjeed</a></li>
              <li><a href="#fourth">Fourth Kalima — Tawheed</a></li>
              <li><a href="#fifth">Fifth Kalima — Istighfar</a></li>
              <li><a href="#sixth">Sixth Kalima — Radd-e-Kufr</a></li>
              <li><a href="#order">Why the order matters</a></li>
              <li><a href="#memorize">How to help kids memorise the Kalimas</a></li>
              <li><a href="#faq">Frequently asked questions</a></li>
            </ul>
          </div>

          <h2 id="what-are">What are the 6 Kalimas of Islam?</h2>
          <p>The Six Kalimas (Urdu: <em>chhay kalmay</em>, Arabic: <em>al-kalimat as-sitt</em>) are six short declarations of faith that have been taught for centuries — especially across South Asia and among Muslim families worldwide — as a simple, memorisable summary of Islamic belief. Each Kalima has a name that describes its theme, and together they form a spiritual ladder: you begin by declaring faith, then glorify Allah, affirm His absolute Oneness, seek His forgiveness, and finally renounce all forms of disbelief.</p>
          <p><strong>An honest scholarly note:</strong> the individual phrases of the Kalimas come directly from the Quran and authentic Hadith. The specific numbering of them as a fixed set of "six" is a well-established teaching tradition (used in madrasas to help children learn), rather than a single narration listing them one to six. This takes nothing away from their value — reciting them is pure remembrance (dhikr) of Allah and a beautiful foundation for a child's faith.</p>

          <h2 id="first">First Kalima — Tayyabah (The Word of Purity)</h2>
          <div class="kalima-card">
            <span class="knum">1 · KALIMA TAYYABAH</span>
            <div class="arabic">لَا إِلٰهَ إِلَّا اللّٰهُ مُحَمَّدٌ رَّسُوْلُ اللّٰهِ</div>
            <p class="translit">Laa ilaaha illa-llaahu, Muhammadur-rasoolu-llaah.</p>
            <p class="trans-en"><strong>English:</strong> There is none worthy of worship except Allah, and Muhammad ﷺ is the Messenger of Allah.</p>
          </div>
          <p>The First Kalima is the heart of Islam. It contains the two testimonies of faith in their simplest form — the Oneness of Allah (Tawheed) and the prophethood of Muhammad ﷺ. This is the statement a person says to enter Islam, and the one Muslims hope to have on their lips when they leave this world.</p>

          <h2 id="second">Second Kalima — Shahadat (The Word of Testimony)</h2>
          <div class="kalima-card">
            <span class="knum">2 · KALIMA SHAHADAT</span>
            <div class="arabic">أَشْهَدُ أَنْ لَّا إِلٰهَ إِلَّا اللّٰهُ وَحْدَهٗ لَا شَرِيْكَ لَهٗ وَأَشْهَدُ أَنَّ مُحَمَّدًا عَبْدُهٗ وَرَسُوْلُهٗ</div>
            <p class="translit">Ash-hadu an laa ilaaha illa-llaahu wahdahu laa shareeka lah, wa ash-hadu anna Muhammadan abduhu wa rasooluh.</p>
            <p class="trans-en"><strong>English:</strong> I bear witness that there is none worthy of worship except Allah, alone, without any partner, and I bear witness that Muhammad ﷺ is His servant and Messenger.</p>
          </div>
          <p>The Second Kalima is the fuller declaration of faith. Where the First Kalima <em>states</em> the belief, the Shahadat has the believer personally <em>bear witness</em> to it — adding that Allah has no partner and that the Prophet ﷺ is both His servant (abd) and His Messenger (rasool). This is the same testimony recited in every Tashahhud during Salah.</p>

          <h2 id="third">Third Kalima — Tamjeed (The Word of Glorification)</h2>
          <div class="kalima-card">
            <span class="knum">3 · KALIMA TAMJEED</span>
            <div class="arabic">سُبْحَانَ اللّٰهِ وَالْحَمْدُ لِلّٰهِ وَلَا إِلٰهَ إِلَّا اللّٰهُ وَاللّٰهُ أَكْبَرُ وَلَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللّٰهِ الْعَلِيِّ الْعَظِيْمِ</div>
            <p class="translit">Subhaana-llaahi wal-hamdu lillaahi wa laa ilaaha illa-llaahu wa-llaahu akbar, wa laa hawla wa laa quwwata illa billaahil-aliyyil-azeem.</p>
            <p class="trans-en"><strong>English:</strong> Glory be to Allah, and all praise is for Allah, and there is none worthy of worship except Allah, and Allah is the Greatest. There is no might nor power except with Allah, the Most High, the Most Great.</p>
          </div>
          <p>The Third Kalima gathers the greatest words of remembrance in Islam: <a href="/blog/subhanallah-meaning">Subhanallah</a>, Alhamdulillah, La ilaha illallah and Allahu Akbar — the four phrases the Prophet ﷺ described as the most beloved to Allah. It ends with "La hawla wa la quwwata illa billah," a treasure of Paradise that expresses total reliance on Allah.</p>

          <h2 id="fourth">Fourth Kalima — Tawheed (The Word of Oneness)</h2>
          <div class="kalima-card">
            <span class="knum">4 · KALIMA TAWHEED</span>
            <div class="arabic">لَا إِلٰهَ إِلَّا اللّٰهُ وَحْدَهٗ لَا شَرِيْكَ لَهٗ لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ يُحْيِيْ وَيُمِيْتُ وَهُوَ حَيٌّ لَّا يَمُوْتُ أَبَدًا أَبَدًا ذُو الْجَلَالِ وَالْإِكْرَامِ بِيَدِهِ الْخَيْرُ وَهُوَ عَلٰى كُلِّ شَيْءٍ قَدِيْرٌ</div>
            <p class="translit">Laa ilaaha illa-llaahu wahdahu laa shareeka lah, lahul-mulku wa lahul-hamdu yuhyee wa yumeetu wa huwa hayyun laa yamootu abadan abada, dhul-jalaali wal-ikraam, biyadihil-khayr, wa huwa alaa kulli shay-in qadeer.</p>
            <p class="trans-en"><strong>English:</strong> There is none worthy of worship except Allah, alone, without partner. His is the kingdom and His is all praise. He gives life and causes death. He is Ever-Living and will never die. Owner of Majesty and Honour. In His hand is all good, and He has power over all things.</p>
          </div>
          <p>The Fourth Kalima is a beautiful expansion on Tawheed — the absolute Oneness of Allah. It praises Allah as the eternal King who gives life and death, never dies Himself, holds all goodness, and has power over everything. Reciting it deepens a believer's certainty in Allah's greatness and control over all affairs.</p>

          <h2 id="fifth">Fifth Kalima — Istighfar (The Word of Seeking Forgiveness)</h2>
          <div class="kalima-card">
            <span class="knum">5 · KALIMA ISTIGHFAR</span>
            <div class="arabic">أَسْتَغْفِرُ اللّٰهَ رَبِّيْ مِنْ كُلِّ ذَنْبٍ أَذْنَبْتُهٗ عَمَدًا أَوْ خَطَأً سِرًّا أَوْ عَلَانِيَةً وَأَتُوْبُ إِلَيْهِ مِنَ الذَّنْبِ الَّذِيْ أَعْلَمُ وَمِنَ الذَّنْبِ الَّذِيْ لَا أَعْلَمُ إِنَّكَ أَنْتَ عَلَّامُ الْغُيُوْبِ وَسَتَّارُ الْعُيُوْبِ وَغَفَّارُ الذُّنُوْبِ وَلَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللّٰهِ الْعَلِيِّ الْعَظِيْمِ</div>
            <p class="translit">Astaghfiru-llaaha rabbee min kulli dhambin adhnabtuhu amadan aw khata-an sirran aw alaaniyatan wa atoobu ilayhi minadh-dhambil-ladhee a'lamu wa minadh-dhambil-ladhee laa a'lam, innaka anta allaamul-ghuyoobi wa sattaarul-uyoobi wa ghaffaarudh-dhunoobi wa laa hawla wa laa quwwata illa billaahil-aliyyil-azeem.</p>
            <p class="trans-en"><strong>English:</strong> I seek forgiveness from Allah, my Lord, for every sin I committed knowingly or unknowingly, secretly or openly, and I turn to Him in repentance from the sin I know and the sin I do not know. Indeed You are the Knower of the unseen, the Concealer of faults, and the Forgiver of sins. There is no might nor power except with Allah, the Most High, the Most Great.</p>
          </div>
          <p>The Fifth Kalima is a comprehensive <a href="/blog/astaghfirullah-meaning">Istighfar</a> (seeking forgiveness). It covers every kind of sin — intentional or accidental, hidden or open, known or unknown — and beautifully calls upon Allah as the One who conceals faults and forgives sins. It teaches children that a Muslim always returns to Allah in repentance.</p>

          <h2 id="sixth">Sixth Kalima — Radd-e-Kufr (Rejection of Disbelief)</h2>
          <div class="kalima-card">
            <span class="knum">6 · KALIMA RADD-E-KUFR</span>
            <div class="arabic">اَللّٰهُمَّ إِنِّيْ أَعُوْذُ بِكَ مِنْ أَنْ أُشْرِكَ بِكَ شَيْئًا وَّأَنَا أَعْلَمُ بِهٖ وَأَسْتَغْفِرُكَ لِمَا لَا أَعْلَمُ بِهٖ تُبْتُ عَنْهُ وَتَبَرَّأْتُ مِنَ الْكُفْرِ وَالشِّرْكِ وَالْكِذْبِ وَالْغِيْبَةِ وَالْبِدْعَةِ وَالنَّمِيْمَةِ وَالْفَوَاحِشِ وَالْبُهْتَانِ وَالْمَعَاصِيْ كُلِّهَا وَأَسْلَمْتُ وَأَقُوْلُ لَا إِلٰهَ إِلَّا اللّٰهُ مُحَمَّدٌ رَّسُوْلُ اللّٰهِ</div>
            <p class="translit">Allaahumma innee a'oodhu bika min an ushrika bika shay-an wa ana a'lamu bihi wa astaghfiruka limaa laa a'lamu bihi tubtu anhu wa tabarra'tu minal-kufri wash-shirki wal-kidhbi wal-gheebati wal-bid'ati wan-nameemati wal-fawaahishi wal-buhtaani wal-ma'aasee kulliha wa aslamtu wa aqoolu laa ilaaha illa-llaahu Muhammadur-rasoolu-llaah.</p>
            <p class="trans-en"><strong>English:</strong> O Allah, I seek refuge in You from knowingly associating any partner with You, and I seek Your forgiveness for what I do not know of it. I repent from it, and I dissociate from disbelief, polytheism, lying, backbiting, innovation, tale-telling, indecency, slander and all acts of disobedience. I submit to You, and I say: there is none worthy of worship except Allah, and Muhammad ﷺ is the Messenger of Allah.</p>
          </div>
          <p>The Sixth Kalima is the strongest declaration of the set. The believer seeks Allah's protection from shirk (associating partners with Allah) and openly renounces disbelief and major sins — lying, backbiting, slander and more — before re-affirming faith. It seals the Six Kalimas with a firm, conscious return to pure Islam.</p>

          <h2 id="order">Why the order of the Kalimas matters</h2>
          <p>The Six Kalimas are arranged like a journey of faith. Notice the natural progression:</p>
          <table class="np-table">
            <thead><tr><th>Kalima</th><th>Name</th><th>Theme</th></tr></thead>
            <tbody>
              <tr><td>First</td><td>Tayyabah</td><td>Declaring faith (purity of belief)</td></tr>
              <tr><td>Second</td><td>Shahadat</td><td>Bearing witness to that faith</td></tr>
              <tr><td>Third</td><td>Tamjeed</td><td>Glorifying and praising Allah</td></tr>
              <tr><td>Fourth</td><td>Tawheed</td><td>Affirming Allah's absolute Oneness</td></tr>
              <tr><td>Fifth</td><td>Istighfar</td><td>Seeking Allah's forgiveness</td></tr>
              <tr><td>Sixth</td><td>Radd-e-Kufr</td><td>Rejecting disbelief and shirk</td></tr>
            </tbody>
          </table>
          <p>This is why the Kalimas are such a powerful teaching tool for children: in six short pieces, a child internalises the entire arc of belief — from affirming Allah, to praising Him, to seeking His forgiveness and turning away from everything that harms faith.</p>

          <h2 id="memorize">How to help your kids memorise the 6 Kalimas</h2>
          <p>Memorising the Kalimas is easier than parents expect — the key is short, consistent, joyful repetition. Here is a simple method that works:</p>
          <ol>
            <li><strong>One Kalima at a time.</strong> Do not rush all six together. Master the First Kalima fully before moving to the Second.</li>
            <li><strong>Listen first, then repeat.</strong> Correct pronunciation comes from hearing it correctly. Have your child listen to a clear reciter or tutor, then repeat in small chunks.</li>
            <li><strong>Break long Kalimas into pieces.</strong> The Fifth and Sixth Kalimas are long — split them into 3–4 short segments and join them once each segment is solid.</li>
            <li><strong>Daily 5-minute revision.</strong> Five focused minutes every day beats an hour once a week. Recite yesterday's Kalima before learning anything new.</li>
            <li><strong>Attach meaning.</strong> Teach the English meaning alongside the Arabic so it is remembrance with understanding, not just sounds.</li>
            <li><strong>Reward and encourage.</strong> Celebrate each completed Kalima. Positive reinforcement keeps young children motivated.</li>
          </ol>

          <div class="gold-box">
            <strong>Get the pronunciation right from day one.</strong> The most common problem parents face is a child memorising a Kalima with incorrect Arabic sounds that become very hard to fix later. A certified tutor listens live and corrects gently in real time. See our <a href="/blog/how-to-teach-quran-to-kids">guide on teaching Quran to kids</a>, explore <a href="/courses/noorani-qaida-online">Noorani Qaida online</a> to build strong Arabic reading, or <a href="/blog/duas-for-kids-to-memorize">20 essential duas for kids</a> to memorise next.
          </div>

          <div class="highlight-box">
            <strong>Ready to help your child learn the Kalimas correctly?</strong> NoorPath Academy's certified tutors teach the Six Kalimas, Noorani Qaida, and Quran with proper Tajweed in live 1-on-1 classes — with male and female teachers and flexible UK/US timings. <a href="/online-quran-classes-for-kids">Book a free 30-minute trial class</a> — no credit card required.
          </div>`,
  },
  "online-quran-classes-uk-kids-guide": {
    style: `.article-body { font-size: 1.05rem; line-height: 1.85; color: #374151; }
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
    .faq-acc { border: 1px solid var(--border); border-radius: 10px; margin-bottom: 12px; overflow: hidden; }
    .faq-acc summary { padding: 16px 20px; font-weight: 700; cursor: pointer; background: var(--ivory); color: var(--charcoal); list-style: none; display: flex; justify-content: space-between; align-items: center; font-size: .95rem; }
    .faq-acc summary::-webkit-details-marker { display: none; }
    .faq-acc summary span { color: var(--emerald); margin-left: 12px; }
    .faq-acc p { padding: 16px 20px; margin: 0; color: #374151; font-size: .92rem; line-height: 1.75; border-top: 1px solid var(--border); }
    @media (max-width: 576px) { .np-table { font-size: .82rem; } .np-table th, .np-table td { padding: 8px 9px; } }`,
    content: `<p>If you are a Muslim parent in the UK searching for <strong>online Quran classes for your kids</strong>, you are not alone. Across Birmingham, Bradford, London, Luton, Manchester and Leicester, thousands of families now choose live online Quran lessons over the local weekend madrassah — for one simple reason: <strong>it works better, and it fits around busy British family life.</strong></p>

          <div class="highlight-box">
            <strong>Quick answer:</strong> Online Quran classes in the UK connect your child with a certified tutor over a live 1-on-1 video call. Good academies charge from around £20–£40/month, offer <strong>female tutors for daughters</strong>, teach in UK-friendly evening/weekend slots, and give a <strong>free trial before you pay</strong>. Start with <a href="/online-quran-classes-for-kids">a free 30-minute trial class</a> — no credit card required.
          </div>

          <p>This guide covers everything a UK parent needs to decide: how online classes work, what they cost, how to keep your child safe, whether they are as effective as in-person madrassah, and how to choose the right teacher. Let's begin.</p>

          <div class="gold-box">
            <strong>Key takeaways:</strong>
            <ul style="margin-bottom:0;">
              <li>Online Quran classes for UK kids cost roughly <strong>£20–£45/month</strong> and are taught 1-on-1 by certified tutors.</li>
              <li>The ideal starting age is <strong>4–7</strong>, but any age works — everyone begins with Noorani Qaida.</li>
              <li><strong>Female tutors</strong> are available for daughters, and parents can watch every class.</li>
              <li>1-on-1 online lessons are usually <strong>faster than a crowded local madrassah</strong>.</li>
              <li>Always start with a <strong>free trial</strong> before paying — no credit card required.</li>
            </ul>
          </div>

          <div class="highlight-box">
            <strong>On this page:</strong>
            <ul style="margin-bottom:0;">
              <li><a href="#how-it-works">How online Quran classes work</a></li>
              <li><a href="#why-uk-parents">Why UK parents are switching</a></li>
              <li><a href="#cost">How much they cost in the UK</a></li>
              <li><a href="#what-learns">What your child will learn</a></li>
              <li><a href="#madrassah">Online vs local madrassah</a></li>
              <li><a href="#cities">Which UK cities we serve</a></li>
              <li><a href="#safety">Are they safe for children?</a></li>
              <li><a href="#female-tutors">Female Quran teachers</a></li>
              <li><a href="#choose">How to choose the best academy</a></li>
              <li><a href="#getting-started">How to get started</a></li>
              <li><a href="#faq">Frequently asked questions</a></li>
            </ul>
          </div>

          <h2 id="how-it-works">How do online Quran classes for kids actually work?</h2>
          <p>The format is simple and proven. Your child sits at a laptop, tablet or phone at a scheduled time and joins a live video call (usually Zoom or Google Meet) with a qualified Quran teacher. The tutor shares the Qaida or Mushaf on screen, listens to your child recite, and <strong>corrects pronunciation in real time</strong> — exactly like sitting beside a teacher, but from your own home.</p>
          <p>A typical UK child's journey looks like this:</p>
          <ol>
            <li><strong>Noorani Qaida</strong> — the Arabic alphabet, vowels, and letter-joining (the foundation). <a href="/courses/noorani-qaida-online">Learn about Noorani Qaida online →</a></li>
            <li><strong>Quran reading with Tajweed</strong> — reciting the Mushaf with correct rules. <a href="/learn-tajweed-online">Explore Tajweed classes →</a></li>
            <li><strong>Hifz (memorisation)</strong> — for children who want to memorise the Quran. <a href="/hifz-quran-online">See the Hifz programme →</a></li>
          </ol>

          <h2 id="why-uk-parents">Why are UK parents switching to online Quran classes?</h2>
          <p>The traditional route — driving your child to a local mosque or madrassah after school — still exists, but more British Muslim families choose online every year. Here is why:</p>
          <ul>
            <li><strong>No travel, no traffic.</strong> No school-run-style dashes across Birmingham or London in the dark winter evenings.</li>
            <li><strong>1-on-1 attention.</strong> Local madrassahs often have 15–30 children per teacher. Online is one child, one tutor — far faster progress.</li>
            <li><strong>Choose the perfect tutor.</strong> You are not limited to your local mosque. You can pick a certified, experienced teacher — including a <strong>female tutor for your daughter</strong>.</li>
            <li><strong>Flexible UK timings.</strong> Early morning before school, straight after school, or weekends — you choose the slot.</li>
            <li><strong>You can watch.</strong> Parents can sit in on classes, so you always know exactly what your child is learning.</li>
          </ul>

          <div class="gold-box">
            <strong>UK tip:</strong> Because most reputable academies teach globally, they already schedule around <strong>GMT/BST timezones</strong>. Ask for an after-school (4pm–8pm UK) or weekend slot when you book, and confirm the tutor can commit to that time every week.
          </div>

          <h2 id="cost">How much do online Quran classes cost in the UK?</h2>
          <p>Pricing depends on how many lessons per week your child takes. Here is a realistic 2026 guide for UK families:</p>

          <table class="np-table">
            <thead>
              <tr><th>Plan</th><th>Lessons / week</th><th>Typical UK cost</th><th>Best for</th></tr>
            </thead>
            <tbody>
              <tr><td>Starter</td><td>2 lessons</td><td>£20–£30 / month</td><td>Young beginners (Qaida)</td></tr>
              <tr><td>Standard</td><td>3 lessons</td><td>£30–£45 / month</td><td>Most kids — fastest progress</td></tr>
              <tr><td>Intensive / Hifz</td><td>5 lessons</td><td>£45–£70 / month</td><td>Memorisation students</td></tr>
              <tr><td>Family plan</td><td>Multiple siblings</td><td>Discounted per child</td><td>2+ children learning</td></tr>
            </tbody>
          </table>

          <p>Compare that to a private in-person Quran tutor in London or Manchester, who can charge <strong>£15–£30 per hour</strong> — online delivers the same certified quality at a fraction of the cost. <a href="/pricing">See NoorPath's transparent pricing →</a></p>

          <h2 id="what-learns">What will my child actually learn?</h2>
          <p>A good online academy follows a clear, staged curriculum so your child always knows the next step. Here is the typical path from complete beginner to confident reciter:</p>
          <ul>
            <li><strong>Arabic letters &amp; Noorani Qaida</strong> — recognising and pronouncing every letter and vowel correctly. <a href="/blog/noorani-qaida-complete-guide">Read the complete Noorani Qaida guide →</a></li>
            <li><strong>Quran reading (Nazira)</strong> — reading the Mushaf fluently, starting with Juz Amma.</li>
            <li><strong>Tajweed</strong> — the rules of beautiful, correct recitation. <a href="/learn-tajweed-online">Explore Tajweed →</a></li>
            <li><strong>Memorisation (Hifz)</strong> — for children who want to become Hafiz, using the proven Sabaq–Sabqi–Manzil system. <a href="/blog/how-long-to-memorize-quran">How long Hifz takes →</a></li>
            <li><strong>Duas &amp; Islamic basics</strong> — everyday duas, Salah, and character (akhlaq).</li>
          </ul>
          <p>Not sure when to begin? Our guide on the <a href="/blog/best-age-to-start-quran-learning">best age to start Quran learning</a> helps you decide.</p>

          <h2 id="madrassah">Online Quran classes vs the local madrassah — which is better?</h2>
          <p>Both have their place, but here is an honest side-by-side comparison for a busy UK family:</p>

          <table class="np-table">
            <thead>
              <tr><th>Factor</th><th>Online 1-on-1</th><th>Local madrassah</th></tr>
            </thead>
            <tbody>
              <tr><td>Attention per child</td><td>Full session, 1-on-1</td><td>Shared among 15–30 kids</td></tr>
              <tr><td>Travel</td><td>None — learn from home</td><td>Daily commute in traffic</td></tr>
              <tr><td>Choice of tutor</td><td>Pick any certified teacher</td><td>Whoever is local</td></tr>
              <tr><td>Female tutor for daughters</td><td>Easily arranged</td><td>Often unavailable</td></tr>
              <tr><td>Timing flexibility</td><td>You choose the slot</td><td>Fixed class times</td></tr>
              <tr><td>Parent visibility</td><td>Watch live + weekly reports</td><td>Limited</td></tr>
              <tr><td>Progress speed</td><td>Often 2–3× faster</td><td>Slower in large groups</td></tr>
            </tbody>
          </table>

          <h2 id="cities">Which UK cities do online Quran classes cover?</h2>
          <p>Because classes are delivered online, your postcode does not matter — a certified tutor comes to you wherever you are. NoorPath families learn from right across the UK, including <strong>London, Birmingham, Manchester, Bradford, Leeds, Leicester, Luton, Blackburn, Glasgow, Cardiff, Sheffield, Nottingham and Slough</strong>. Whether you are in a big city or a small town with no nearby madrassah, your child gets the same qualified teaching. <a href="/locations/online-quran-classes-uk">See our dedicated UK page →</a></p>

          <h2 id="safety">Are online Quran classes safe for children?</h2>
          <p>Safety is the number-one concern for every parent — and rightly so. Online classes are safe <em>when you choose a reputable academy and follow a few sensible rules:</em></p>
          <ul>
            <li>Use trusted platforms only (<strong>Zoom or Google Meet</strong>), never unknown apps.</li>
            <li><strong>Supervise the first few weeks</strong> — sit nearby, especially for younger children.</li>
            <li>Verify the tutor's <strong>Ijazah / certification</strong> before enrolling.</li>
            <li>Ensure there is <strong>no private messaging</strong> between tutor and child — all communication goes through you, the parent.</li>
            <li>Keep the device in a <strong>shared family space</strong>, not the child's bedroom.</li>
          </ul>
          <p>At NoorPath Academy, all tutors are background-verified and certified, parents are encouraged to observe classes, and you receive <strong>weekly progress reports</strong> so you are never in the dark.</p>

          <h2 id="female-tutors">Can my daughter learn with a female Quran teacher?</h2>
          <p>Yes — and this is one of the biggest advantages of learning online. Many UK families prefer a <strong>female tutor (Ustadha / Hafiza)</strong> for their daughters. Online, you are not limited to whoever happens to teach at your local mosque; you can request a qualified female teacher and she will teach your daughter 1-on-1 with the same curriculum and scheduling. <a href="/female-quran-teacher-online">Learn about female Quran teachers →</a></p>

          <h2 id="concerns">Common concerns UK parents have (answered)</h2>
          <p><strong>"Will my child stay focused on a screen?"</strong> A 20–30 minute 1-on-1 lesson is purposeful, supervised screen time — very different from passive scrolling. Because the tutor is engaging your child directly the entire time, there is nowhere to hide, and most children stay far more attentive than in a large madrassah group.</p>
          <p><strong>"Is online really as effective?"</strong> For most children it is <em>more</em> effective. The reason is simple maths: in a busy madrassah one teacher supervises 20+ children, so each child recites for only a minute or two. Online, your child recites for the whole session with instant correction — which is why progress is often two to three times faster through Qaida and early Quran reading.</p>
          <p><strong>"What equipment do we need?"</strong> Just a laptop, tablet or phone, a stable internet connection, and a quiet corner. Headphones help younger children focus. That is all.</p>

          <h2 id="choose">How to choose the best online Quran academy in the UK (checklist)</h2>
          <p>Before you pay anyone, run through this checklist. A good academy will happily tick every box:</p>
          <ul>
            <li>✅ <strong>Free trial lesson</strong> before any payment (no credit card required)</li>
            <li>✅ <strong>Ijazah-certified</strong> or Al-Azhar–qualified tutors</li>
            <li>✅ <strong>Live 1-on-1</strong> classes (not pre-recorded videos or group calls)</li>
            <li>✅ <strong>Female tutors available</strong> for daughters</li>
            <li>✅ Structured <strong>Qaida → Quran → Tajweed → Hifz</strong> curriculum</li>
            <li>✅ <strong>UK-friendly timings</strong> (after-school & weekends)</li>
            <li>✅ <strong>Weekly progress reports</strong> to parents</li>
            <li>✅ Transparent monthly pricing and easy cancellation</li>
            <li>✅ Experience teaching <strong>British-born children</strong> in English</li>
          </ul>

          <h2 id="getting-started">How to get started (the easy first step)</h2>
          <p>You do not need to commit to anything to find out if online learning suits your child. The smartest first move is a <strong>free trial class</strong>: you meet the tutor, watch how they interact with your child, and see the platform in action — all before paying a penny.</p>
          <p>At NoorPath Academy we offer a <strong>free 30-minute trial</strong> with a certified tutor, we serve families right across the UK, and there is <strong>no credit card required</strong> to book. If it is a good fit, you continue; if not, there is no obligation at all.</p>

          <div class="gold-box">
            <strong>Ready to try?</strong> <a href="/online-quran-classes-for-kids">Book your child's free 30-minute trial class</a> today — choose a UK-friendly time, request a male or female tutor, and see the difference 1-on-1 learning makes.
          </div>

          <h2 id="faq">Frequently asked questions</h2>

          <details class="faq-acc">
            <summary>How much do online Quran classes cost in the UK? <span>+</span></summary>
            <p>Online Quran classes for kids in the UK typically cost between £20 and £45 per month depending on how many lessons per week your child takes. Starter plans (2 lessons/week) begin around £20–£30/month, while standard 3-lesson plans run £30–£45/month. Family plans offer discounts for multiple siblings. NoorPath Academy offers a free 30-minute trial with no credit card required.</p>
          </details>

          <details class="faq-acc">
            <summary>What is the best age for a child to start online Quran classes? <span>+</span></summary>
            <p>The ideal age is 4–7 years, when children have strong memory and can manage 20–30 minute sessions. However, children of any age can start, and older children (8–12) often progress faster through Qaida and early Quran reading. Every child begins with Noorani Qaida before reading the Mushaf.</p>
          </details>

          <details class="faq-acc">
            <summary>Are online Quran classes safe for my child? <span>+</span></summary>
            <p>Yes, when you use a reputable academy. Use trusted platforms (Zoom or Google Meet), supervise the first few weeks, verify the tutor's certification, keep the device in a shared family space, and ensure there is no private messaging between tutor and child. NoorPath tutors are background-verified and parents are encouraged to observe classes.</p>
          </details>

          <details class="faq-acc">
            <summary>Can my daughter learn with a female Quran teacher online? <span>+</span></summary>
            <p>Yes. Online learning lets you request a certified female tutor (Ustadha/Hafiza) for your daughter, regardless of where you live in the UK. She teaches 1-on-1 with the same curriculum, timings and pricing as any other class. Simply request a female teacher when booking your free trial.</p>
          </details>

          <details class="faq-acc">
            <summary>Are online classes as good as the local mosque madrassah? <span>+</span></summary>
            <p>For most children, online is more effective. In a local madrassah one teacher supervises many children, so each child recites only briefly. In a 1-on-1 online lesson your child recites for the whole session with instant correction, which is why online students often progress two to three times faster through Qaida and early Quran reading.</p>
          </details>

          <details class="faq-acc">
            <summary>What times are online Quran classes available for UK families? <span>+</span></summary>
            <p>Reputable academies schedule around GMT/BST timezones and offer after-school (4pm–8pm UK) and weekend slots ideal for British families. When you book, request your preferred weekly time and confirm your tutor can commit to it consistently.</p>
          </details>

          <details class="faq-acc">
            <summary>Which UK cities do you offer online Quran classes in? <span>+</span></summary>
            <p>Because classes are fully online, we serve families anywhere in the UK — including London, Birmingham, Manchester, Bradford, Leeds, Leicester, Luton, Blackburn, Glasgow, Cardiff, Sheffield and Nottingham — as well as smaller towns without a nearby madrassah. Your child gets the same certified teaching regardless of postcode.</p>
          </details>

          <details class="faq-acc">
            <summary>What equipment does my child need for online Quran classes? <span>+</span></summary>
            <p>Just a laptop, tablet or smartphone with a camera, a stable internet connection, and a quiet space. Headphones help younger children focus. Classes run on Zoom or Google Meet, both of which are free to install.</p>
          </details>

          <details class="faq-acc">
            <summary>Do you offer online Quran classes for adults too? <span>+</span></summary>
            <p>Yes. Alongside kids' classes, we teach adult beginners and revert Muslims with the same 1-on-1 format and flexible UK timings. You can <a href="/online-quran-classes-for-adults">learn about adult Quran classes</a> or read our <a href="/blog/learn-quran-online-adult-beginner-guide">adult beginner's guide</a>.</p>
          </details>

          <details class="faq-acc">
            <summary>How do I book a free trial Quran class in the UK? <span>+</span></summary>
            <p>Booking takes two minutes: <a href="/online-quran-classes-for-kids">visit the free trial page</a>, choose a UK-friendly time, tell us your child's age and whether you'd like a male or female tutor, and we'll confirm your free 30-minute session. No credit card and no obligation to continue.</p>
          </details>`,
  },
  "islamic-phrases-meaning": {
    style: `.article-body { font-size: 1.05rem; line-height: 1.85; color: #374151; }
    .article-body h2 { font-size: 1.55rem; font-weight: 700; color: var(--charcoal); margin: 44px 0 16px; scroll-margin-top: 90px; }
    .article-body h3 { font-size: 1.15rem; font-weight: 700; color: var(--emerald); margin: 26px 0 10px; }
    .article-body p { margin-bottom: 18px; }
    .article-body a { color: var(--emerald); font-weight: 600; }
    .highlight-box { background: rgba(10,110,79,.06); border-left: 4px solid var(--emerald); border-radius: 8px; padding: 20px 24px; margin: 24px 0; }
    .gold-box { background: rgba(232,184,75,.08); border-left: 4px solid var(--gold); border-radius: 8px; padding: 20px 24px; margin: 24px 0; }
    .phrase-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; margin: 24px 0; }
    .phrase-card { background: #fff; border: 1px solid var(--border); border-radius: 14px; padding: 18px 20px; transition: box-shadow .2s; }
    .phrase-card:hover { box-shadow: 0 4px 16px rgba(10,110,79,.1); }
    .phrase-arabic { font-family: 'Amiri', serif; font-size: 1.5rem; color: var(--emerald); direction: rtl; text-align: right; margin-bottom: 6px; }
    .phrase-name { font-weight: 700; color: var(--charcoal); font-size: 1rem; margin-bottom: 2px; }
    .phrase-meaning { font-size: .85rem; color: var(--muted); line-height: 1.6; margin-bottom: 8px; }
    .phrase-link { font-size: .8rem; font-weight: 700; color: var(--emerald); }
    .faq-acc { border: 1px solid var(--border); border-radius: 10px; margin-bottom: 12px; overflow: hidden; }
    .faq-acc summary { padding: 16px 20px; font-weight: 700; cursor: pointer; background: var(--ivory); color: var(--charcoal); list-style: none; display: flex; justify-content: space-between; align-items: center; font-size: .95rem; }
    .faq-acc summary::-webkit-details-marker { display: none; }
    .faq-acc summary span { color: var(--emerald); margin-left: 12px; }
    .faq-acc p { padding: 16px 20px; margin: 0; color: #374151; font-size: .92rem; line-height: 1.75; border-top: 1px solid var(--border); }
    @media (max-width: 576px) { .phrase-grid { grid-template-columns: 1fr; } }`,
    content: `<p>Every day, Muslims around the world use beautiful Arabic phrases — to praise Allah, express gratitude, greet one another, and remember Him in moments of joy and difficulty. If you have ever wondered what <strong>Alhamdulillah</strong>, <strong>Subhanallah</strong> or <strong>JazakAllah Khair</strong> actually mean, this is your complete reference.</p>

          <div class="highlight-box">
            <strong>Quick answer:</strong> The most common Islamic phrases are <strong>Bismillah</strong> (in the name of Allah), <strong>Alhamdulillah</strong> (all praise to Allah), <strong>Subhanallah</strong> (glory be to Allah), <strong>Allahu Akbar</strong> (Allah is the Greatest), <strong>Mashallah</strong> (what Allah has willed), <strong>Inshallah</strong> (if Allah wills), and <strong>JazakAllah Khair</strong> (may Allah reward you). Below are 30 phrases with Arabic, meaning and when to say each.</p>
          </div>

          <p>This guide is a hub — each phrase links to a full in-depth article with pronunciation, Quranic references, benefits and common mistakes.</p>

          <h2 id="praise">Phrases of Praise &amp; Remembrance (Dhikr)</h2>
          <div class="phrase-grid">
            <div class="phrase-card">
              <div class="phrase-arabic">الحمد لله</div>
              <div class="phrase-name">Alhamdulillah</div>
              <div class="phrase-meaning">"All praise and thanks are due to Allah." Said to express gratitude for any blessing.</div>
              <a class="phrase-link" href="/blog/alhamdulillah-meaning-in-english">Read full guide →</a>
            </div>
            <div class="phrase-card">
              <div class="phrase-arabic">سبحان الله</div>
              <div class="phrase-name">Subhanallah</div>
              <div class="phrase-meaning">"Glory be to Allah." Said in awe of Allah's perfection and creation.</div>
              <a class="phrase-link" href="/blog/subhanallah-meaning">Read full guide →</a>
            </div>
            <div class="phrase-card">
              <div class="phrase-arabic">الله أكبر</div>
              <div class="phrase-name"><a href="/blog/allahu-akbar-meaning-in-english">Allahu Akbar</a></div>
              <div class="phrase-meaning">"Allah is the Greatest." Said in prayer, adhan, and moments of amazement. <a href="/blog/allahu-akbar-meaning-in-english">Full guide →</a></div>
            </div>
            <div class="phrase-card">
              <div class="phrase-arabic">لا إله إلا الله</div>
              <div class="phrase-name"><a href="/blog/la-ilaha-illallah-meaning">La ilaha illallah</a></div>
              <div class="phrase-meaning">"There is no god but Allah." The declaration of faith (Tawheed). <a href="/blog/la-ilaha-illallah-meaning">Full guide →</a></div>
            </div>
            <div class="phrase-card">
              <div class="phrase-arabic">أستغفر الله</div>
              <div class="phrase-name">Astaghfirullah</div>
              <div class="phrase-meaning">"I seek forgiveness from Allah." Said in repentance and after mistakes.</div>
              <a class="phrase-link" href="/blog/astaghfirullah-meaning">Read full guide →</a>
            </div>
            <div class="phrase-card">
              <div class="phrase-arabic">لا حول ولا قوة إلا بالله</div>
              <div class="phrase-name">La hawla wa la quwwata illa billah</div>
              <div class="phrase-meaning">"There is no might nor power except with Allah." Said in hardship.</div>
            </div>
          </div>

          <h2 id="daily">Everyday &amp; Situational Phrases</h2>
          <div class="phrase-grid">
            <div class="phrase-card">
              <div class="phrase-arabic">بسم الله</div>
              <div class="phrase-name">Bismillah</div>
              <div class="phrase-meaning">"In the name of Allah." Said before eating, starting any task or action.</div>
              <a class="phrase-link" href="/blog/bismillah-meaning-in-english">Read full guide →</a>
            </div>
            <div class="phrase-card">
              <div class="phrase-arabic">ما شاء الله</div>
              <div class="phrase-name">Mashallah</div>
              <div class="phrase-meaning">"What Allah has willed." Said when admiring something to ward off the evil eye.</div>
              <a class="phrase-link" href="/blog/mashallah-meaning">Read full guide →</a>
            </div>
            <div class="phrase-card">
              <div class="phrase-arabic">إن شاء الله</div>
              <div class="phrase-name">Inshallah</div>
              <div class="phrase-meaning">"If Allah wills." Said when speaking about future plans and hopes.</div>
              <a class="phrase-link" href="/blog/inshallah-meaning-in-english">Read full guide →</a>
            </div>
            <div class="phrase-card">
              <div class="phrase-arabic">جزاك الله خيرا</div>
              <div class="phrase-name">JazakAllah Khair</div>
              <div class="phrase-meaning">"May Allah reward you with good." The Islamic way to say thank you.</div>
              <a class="phrase-link" href="/blog/jazakallah-khair-meaning">Read full guide →</a>
            </div>
            <div class="phrase-card">
              <div class="phrase-arabic">إنا لله وإنا إليه راجعون</div>
              <div class="phrase-name">Inna lillahi wa inna ilayhi raji'un</div>
              <div class="phrase-meaning">"To Allah we belong and to Him we return." Said upon hearing of a death or loss.</div>
            </div>
            <div class="phrase-card">
              <div class="phrase-arabic">بارك الله فيك</div>
              <div class="phrase-name">Barakallahu Feek</div>
              <div class="phrase-meaning">"May Allah bless you." A common response to JazakAllah Khair.</div>
            </div>
          </div>

          <h2 id="greetings">Greetings &amp; Responses</h2>
          <div class="phrase-grid">
            <div class="phrase-card">
              <div class="phrase-arabic">السلام عليكم</div>
              <div class="phrase-name">Assalamu Alaikum</div>
              <div class="phrase-meaning">"Peace be upon you." The Islamic greeting between Muslims.</div>
            </div>
            <div class="phrase-card">
              <div class="phrase-arabic">وعليكم السلام</div>
              <div class="phrase-name">Wa Alaikum Assalam</div>
              <div class="phrase-meaning">"And upon you be peace." The reply to Assalamu Alaikum.</div>
            </div>
          </div>

          <div class="gold-box">
            <strong>Why learn these phrases?</strong> These are not just words — each one is a form of dhikr (remembrance of Allah) that carries reward and keeps the heart connected to Allah throughout the day. The Prophet ﷺ said the words most beloved to Allah are four: Subhanallah, Alhamdulillah, La ilaha illallah, and Allahu Akbar. (Sahih Muslim 2137)
          </div>

          <h2>Frequently Asked Questions</h2>
          <details class="faq-acc"><summary>What are the most common Islamic phrases? <span>+</span></summary><p>The most common Islamic phrases are: Bismillah (in the name of Allah), Alhamdulillah (all praise to Allah), Subhanallah (glory be to Allah), Allahu Akbar (Allah is the Greatest), Mashallah (what Allah has willed), Inshallah (if Allah wills), Astaghfirullah (I seek Allah's forgiveness), JazakAllah Khair (may Allah reward you), and Assalamu Alaikum (peace be upon you).</p></details>
          <details class="faq-acc"><summary>What do Muslims say to praise Allah? <span>+</span></summary><p>Muslims praise Allah with four beloved phrases: Subhanallah (glory be to Allah), Alhamdulillah (all praise to Allah), La ilaha illallah (there is no god but Allah), and Allahu Akbar (Allah is the Greatest). The Prophet ﷺ said these are the most beloved words to Allah (Sahih Muslim 2137). Together they are known as the "four pillars of dhikr."</p></details>
          <details class="faq-acc"><summary>What is the reply to JazakAllah Khair? <span>+</span></summary><p>The best reply to JazakAllah Khair is "Wa iyyakum" (and you too) or "Wa antum fa jazakumullahu khairan" (and may Allah reward you with good too). Many also respond with "Barakallahu feek" (may Allah bless you). Read our full <a href="/blog/jazakallah-khair-meaning">JazakAllah Khair guide</a> for details.</p></details>
          <details class="faq-acc"><summary>What is the difference between Mashallah and Inshallah? <span>+</span></summary><p>Mashallah (what Allah has willed) is said about something that already exists or happened — like admiring a child or success. Inshallah (if Allah wills) is said about the future — plans, hopes and intentions. Mashallah appreciates the present; Inshallah looks to the future.</p></details>

          <div style="background:linear-gradient(135deg,#0a3d28,var(--emerald));border-radius:16px;padding:32px;text-align:center;margin:44px 0;">
            <h3 style="font-family:var(--font-playfair),serif;color:#fff;font-size:1.6rem;margin-bottom:12px;">Learn Arabic &amp; Understand the Quran</h3>
            <p style="color:rgba(255,255,255,.82);margin-bottom:24px;line-height:1.7;max-width:560px;margin-left:auto;margin-right:auto;">Understanding these phrases is the first step. Learn to read the Quran in its original language with a certified tutor — free 30-minute trial.</p>
            <a href="/online-quran-classes#cta" style="background:var(--gold);color:var(--charcoal);font-weight:700;padding:13px 28px;border-radius:10px;text-decoration:none;font-size:.95rem;">Book a Free Trial Class →</a>
          </div>

          <div style="margin-top:48px;border-top:1px solid var(--border);padding-top:32px;">
            <h3 style="font-size:1.1rem;font-weight:700;margin-bottom:16px;">Explore Each Phrase in Depth</h3>
            <ul style="list-style:none;padding:0;margin:0;display:flex;flex-direction:column;gap:10px;">
              <li><a href="/blog/subhanallah-meaning" style="color:var(--emerald);font-weight:600;">Subhanallah Meaning — Glory be to Allah</a></li>
              <li><a href="/blog/alhamdulillah-meaning-in-english" style="color:var(--emerald);font-weight:600;">Alhamdulillah Meaning — The Power of Gratitude</a></li>
              <li><a href="/blog/jazakallah-khair-meaning" style="color:var(--emerald);font-weight:600;">JazakAllah Khair Meaning &amp; Response</a></li>
              <li><a href="/blog/mashallah-meaning" style="color:var(--emerald);font-weight:600;">Mashallah Meaning &amp; Evil Eye Protection</a></li>
              <li><a href="/blog/astaghfirullah-meaning" style="color:var(--emerald);font-weight:600;">Astaghfirullah Meaning &amp; Benefits</a></li>
              <li><a href="/blog/inshallah-meaning-in-english" style="color:var(--emerald);font-weight:600;">Inshallah Meaning &amp; Correct Usage</a></li>
              <li><a href="/blog/bismillah-meaning-in-english" style="color:var(--emerald);font-weight:600;">Bismillah Meaning — In the Name of Allah</a></li>
            </ul>
          </div>`,
  },
  "subhanallah-meaning": {
    style: `.article-body { font-size: 1.05rem; line-height: 1.85; color: #374151; }
    .article-body h2 { font-size: 1.5rem; font-weight: 700; color: var(--charcoal); margin: 40px 0 16px; }
    .article-body h3 { font-size: 1.15rem; font-weight: 700; color: var(--emerald); margin: 24px 0 10px; }
    .article-body p { margin-bottom: 18px; }
    .article-body ul { margin-bottom: 18px; padding-left: 24px; }
    .article-body li { margin-bottom: 8px; }
    .article-body a { color: var(--emerald); font-weight: 600; }
    .highlight-box { background: rgba(10,110,79,.06); border-left: 4px solid var(--emerald); border-radius: 8px; padding: 20px 24px; margin: 24px 0; }
    .gold-box { background: rgba(232,184,75,.08); border-left: 4px solid var(--gold); border-radius: 8px; padding: 20px 24px; margin: 24px 0; }
    .word-hero { text-align: center; padding: 48px 24px; background: linear-gradient(135deg, rgba(10,110,79,.04), rgba(10,110,79,.09)); border-radius: 20px; margin: 32px 0; border: 1px solid rgba(10,110,79,.12); }
    .word-arabic-hero { font-family: 'Amiri', serif; font-size: 3.5rem; color: var(--emerald); line-height: 1.3; margin-bottom: 16px; direction: rtl; }
    .word-roman-hero { font-size: 1.5rem; font-style: italic; color: #4b5563; margin-bottom: 12px; }
    .word-meaning-hero { font-size: 1.1rem; font-weight: 600; color: var(--charcoal); }
    .quran-ref { background: rgba(232,184,75,.05); border: 1px solid rgba(232,184,75,.22); border-radius: 12px; padding: 20px 24px; margin: 20px 0; }
    .quran-ref-arabic { font-family: 'Amiri', serif; font-size: 1.5rem; direction: rtl; text-align: right; color: var(--charcoal); margin-bottom: 10px; line-height: 1.9; }
    .quran-ref-english { font-size: .95rem; color: #374151; font-style: italic; margin-bottom: 6px; }
    .quran-ref-source { font-size: .8rem; color: var(--emerald); font-weight: 700; }
    .faq-acc { border: 1px solid var(--border); border-radius: 10px; margin-bottom: 12px; overflow: hidden; }
    .faq-acc summary { padding: 16px 20px; font-weight: 700; cursor: pointer; background: var(--ivory); color: var(--charcoal); list-style: none; display: flex; justify-content: space-between; align-items: center; font-size: .95rem; }
    .faq-acc summary::-webkit-details-marker { display: none; }
    .faq-acc summary span { color: var(--emerald); margin-left: 12px; }
    .faq-acc p { padding: 16px 20px; margin: 0; color: #374151; font-size: .92rem; line-height: 1.75; border-top: 1px solid var(--border); }
    @media (max-width: 576px) { .word-arabic-hero { font-size: 2.5rem; } }`,
    content: `<p><strong>Subhanallah</strong> (سبحان الله) is one of the most beloved phrases to Allah and one of the most frequently said words by Muslims worldwide. It is a declaration of Allah's absolute perfection — a way of glorifying Him and declaring Him free from every fault, partner, and imperfection.</p>

          <div class="highlight-box">
            <strong>Quick answer:</strong> <strong>Subhanallah meaning in English</strong> is "Glory be to Allah" or "Allah is free from all imperfection." In Arabic it is written <strong>سُبْحَانَ اللَّهِ</strong>. Muslims say it in awe of Allah's creation, in wonder, in prayer, and as daily dhikr — declaring that Allah is perfect and above any flaw.
          </div>

          <div class="word-hero">
            <div class="word-arabic-hero">سُبْحَانَ اللَّهِ</div>
            <div class="word-roman-hero">Subhāna-llāh</div>
            <div class="word-meaning-hero">"Glory be to Allah"</div>
          </div>

          <h2>What Does Subhanallah Really Mean?</h2>
          <p>The word <em>Subhan</em> comes from the Arabic root <strong>s-b-h</strong>, which means to declare something free from any defect or deficiency. So Subhanallah is not just "glory to Allah" — it is a powerful statement that <strong>Allah is perfect, flawless, and far above anything unbefitting of His majesty</strong>. When you see something amazing, or something goes wrong that you cannot explain, saying Subhanallah affirms that Allah is perfect in all He does.</p>

          <h2>When to Say Subhanallah</h2>
          <ul>
            <li><strong>In awe and amazement</strong> — when you see something beautiful or astonishing in creation.</li>
            <li><strong>After every prayer</strong> — recited 33 times as part of the Sunnah tasbeeh (Subhanallah 33x, Alhamdulillah 33x, Allahu Akbar 34x).</li>
            <li><strong>In shock or disbelief</strong> — instead of negative expressions, Muslims say Subhanallah.</li>
            <li><strong>As daily dhikr</strong> — to earn continuous reward throughout the day.</li>
            <li><strong>To glorify Allah</strong> when hearing of something inappropriate attributed to Him.</li>
          </ul>

          <h2>The Immense Reward of Subhanallah</h2>
          <div class="quran-ref">
            <div class="quran-ref-english">The Prophet ﷺ said: "Two words are light on the tongue, heavy on the scale, and beloved to the Most Merciful: Subhanallahi wa bihamdih, Subhanallahil-Azeem."</div>
            <div class="quran-ref-source">— Sahih al-Bukhari 6682</div>
          </div>
          <p>He ﷺ also said: "Whoever says 'Subhanallahi wa bihamdih' one hundred times a day will have his sins forgiven even if they are like the foam of the sea." (Sahih al-Bukhari 6405). This makes Subhanallah one of the easiest yet most rewarding acts of worship.</p>

          <div class="gold-box">
            <strong>Subhanallah wa bihamdihi:</strong> Adding "wa bihamdihi" (and by His praise) creates the phrase "Glory be to Allah and praise be to Him." This complete form is the one described in the hadith above as forgiving sins like the foam of the sea.
          </div>

          <h2>Subhanallah vs Alhamdulillah — The Difference</h2>
          <p>These two phrases are often confused. <strong>Subhanallah</strong> (glory be to Allah) declares Allah's <em>perfection</em> — said in awe and to glorify Him. <strong><a href="/blog/alhamdulillah-meaning-in-english">Alhamdulillah</a></strong> (all praise to Allah) expresses <em>gratitude</em> — said to thank Allah for blessings. One glorifies; the other thanks. Both are among the four most beloved words to Allah, along with <em>Allahu Akbar</em> and <em>La ilaha illallah</em>.</p>

          <h2>Frequently Asked Questions</h2>
          <details class="faq-acc"><summary>What does Subhanallah mean in English? <span>+</span></summary><p>Subhanallah (سبحان الله) means "Glory be to Allah" or "Allah is free from all imperfection." It declares that Allah is perfect, flawless, and far above any defect, partner or weakness. Muslims say it in awe, wonder, prayer and as daily remembrance.</p></details>
          <details class="faq-acc"><summary>When should you say Subhanallah? <span>+</span></summary><p>Say Subhanallah: when you see something amazing or beautiful in Allah's creation, in moments of shock or disbelief, 33 times after each of the five daily prayers as Sunnah tasbeeh, and as general daily dhikr to earn reward and glorify Allah.</p></details>
          <details class="faq-acc"><summary>What is the reward for saying Subhanallah? <span>+</span></summary><p>The Prophet ﷺ said whoever says "Subhanallahi wa bihamdih" 100 times a day will have their sins forgiven even if they are like the foam of the sea (Bukhari 6405). He also described it as light on the tongue but heavy on the scale of good deeds (Bukhari 6682).</p></details>
          <details class="faq-acc"><summary>What is the difference between Subhanallah and Alhamdulillah? <span>+</span></summary><p>Subhanallah (glory be to Allah) declares Allah's perfection and is said in awe. Alhamdulillah (all praise to Allah) expresses gratitude and is said to thank Allah for blessings. One glorifies Allah; the other thanks Him. Both are among the four most beloved phrases to Allah.</p></details>
          <details class="faq-acc"><summary>How many times should you say Subhanallah after prayer? <span>+</span></summary><p>The Sunnah is to say Subhanallah 33 times after each obligatory prayer, followed by Alhamdulillah 33 times and Allahu Akbar 34 times — totaling 100. The Prophet ﷺ said whoever does this will have their sins forgiven even if they are like the foam of the sea (Sahih Muslim 597).</p></details>

          <div style="background:linear-gradient(135deg,#0a3d28,var(--emerald));border-radius:16px;padding:32px;text-align:center;margin:44px 0;">
            <h3 style="font-family:var(--font-playfair),serif;color:#fff;font-size:1.6rem;margin-bottom:12px;">Learn to Recite &amp; Understand the Quran</h3>
            <p style="color:rgba(255,255,255,.82);margin-bottom:24px;line-height:1.7;max-width:560px;margin-left:auto;margin-right:auto;">Deepen your connection with Allah — learn Quran and Arabic with a certified tutor. Free 30-minute trial, no credit card.</p>
            <a href="/online-quran-classes#cta" style="background:var(--gold);color:var(--charcoal);font-weight:700;padding:13px 28px;border-radius:10px;text-decoration:none;font-size:.95rem;">Book a Free Trial Class →</a>
          </div>

          <div style="margin-top:48px;border-top:1px solid var(--border);padding-top:32px;">
            <h3 style="font-size:1.1rem;font-weight:700;margin-bottom:16px;">Related Articles</h3>
            <ul style="list-style:none;padding:0;margin:0;display:flex;flex-direction:column;gap:10px;">
              <li><a href="/blog/islamic-phrases-meaning" style="color:var(--emerald);font-weight:600;">30 Common Islamic Phrases &amp; Their Meanings</a></li>
              <li><a href="/blog/alhamdulillah-meaning-in-english" style="color:var(--emerald);font-weight:600;">Alhamdulillah Meaning — The Power of Gratitude</a></li>
              <li><a href="/blog/astaghfirullah-meaning" style="color:var(--emerald);font-weight:600;">Astaghfirullah Meaning &amp; Benefits</a></li>
              <li><a href="/blog/99-names-of-allah-asmaul-husna" style="color:var(--emerald);font-weight:600;">99 Names of Allah — Asmaul Husna</a></li>
            </ul>
          </div>`,
  },
  "jazakallah-khair-meaning": {
    style: `.article-body { font-size: 1.05rem; line-height: 1.85; color: #374151; }
    .article-body h2 { font-size: 1.5rem; font-weight: 700; color: var(--charcoal); margin: 40px 0 16px; }
    .article-body h3 { font-size: 1.15rem; font-weight: 700; color: var(--emerald); margin: 24px 0 10px; }
    .article-body p { margin-bottom: 18px; }
    .article-body ul { margin-bottom: 18px; padding-left: 24px; }
    .article-body li { margin-bottom: 8px; }
    .article-body a { color: var(--emerald); font-weight: 600; }
    .highlight-box { background: rgba(10,110,79,.06); border-left: 4px solid var(--emerald); border-radius: 8px; padding: 20px 24px; margin: 24px 0; }
    .gold-box { background: rgba(232,184,75,.08); border-left: 4px solid var(--gold); border-radius: 8px; padding: 20px 24px; margin: 24px 0; }
    .word-hero { text-align: center; padding: 48px 24px; background: linear-gradient(135deg, rgba(10,110,79,.04), rgba(10,110,79,.09)); border-radius: 20px; margin: 32px 0; border: 1px solid rgba(10,110,79,.12); }
    .word-arabic-hero { font-family: 'Amiri', serif; font-size: 3rem; color: var(--emerald); line-height: 1.4; margin-bottom: 16px; direction: rtl; }
    .word-roman-hero { font-size: 1.4rem; font-style: italic; color: #4b5563; margin-bottom: 12px; }
    .word-meaning-hero { font-size: 1.1rem; font-weight: 600; color: var(--charcoal); }
    .faq-acc { border: 1px solid var(--border); border-radius: 10px; margin-bottom: 12px; overflow: hidden; }
    .faq-acc summary { padding: 16px 20px; font-weight: 700; cursor: pointer; background: var(--ivory); color: var(--charcoal); list-style: none; display: flex; justify-content: space-between; align-items: center; font-size: .95rem; }
    .faq-acc summary::-webkit-details-marker { display: none; }
    .faq-acc summary span { color: var(--emerald); margin-left: 12px; }
    .faq-acc p { padding: 16px 20px; margin: 0; color: #374151; font-size: .92rem; line-height: 1.75; border-top: 1px solid var(--border); }
    @media (max-width: 576px) { .word-arabic-hero { font-size: 2.1rem; } }`,
    content: `<p><strong>JazakAllah Khair</strong> (جزاك الله خيرا) is how Muslims say "thank you" — but it means far more than a simple thanks. Instead of thanking someone yourself, you are asking <strong>Allah to reward them with good</strong>, which is the greatest gift you could ever give in return.</p>

          <div class="highlight-box">
            <strong>Quick answer:</strong> <strong>JazakAllah Khair meaning in English</strong> is "May Allah reward you with good." In Arabic it is written <strong>جَزَاكَ اللَّهُ خَيْرًا</strong>. Muslims say it instead of "thank you" — because rather than thanking a person with words, you ask Allah (who can reward infinitely) to reward them. The proper response is "Wa iyyakum" (and you too).
          </div>

          <div class="word-hero">
            <div class="word-arabic-hero">جَزَاكَ اللَّهُ خَيْرًا</div>
            <div class="word-roman-hero">Jazāka-llāhu khayran</div>
            <div class="word-meaning-hero">"May Allah reward you with good"</div>
          </div>

          <h2>Word-by-Word Meaning</h2>
          <ul>
            <li><strong>Jazak (جزاك)</strong> — "may He reward you"</li>
            <li><strong>Allahu (الله)</strong> — "Allah"</li>
            <li><strong>Khairan (خيرا)</strong> — "with good"</li>
          </ul>
          <p>Note: "Jazak" changes based on who you address — <em>JazakAllah</em> (to a male), <em>JazakiAllah</em> (to a female), and <em>JazakumAllah</em> (to a group). Adding <em>Khair</em> completes the beautiful meaning "may Allah reward you with good."</p>

          <h2>Why Say JazakAllah Khair Instead of Thank You?</h2>
          <p>The Prophet ﷺ said: <em>"Whoever has a good done to him and says to the doer 'JazakAllahu khairan' has done the utmost in praising him."</em> (Sunan at-Tirmidhi 2035). In other words, when you cannot repay someone's kindness, you hand the reward over to Allah — who rewards without limit. It is the most generous form of gratitude in Islam.</p>

          <h2>How to Respond to JazakAllah Khair</h2>
          <p>There are several beautiful replies:</p>
          <ul>
            <li><strong>Wa iyyakum</strong> (وإياكم) — "And you too" (most common)</li>
            <li><strong>Wa antum fa jazakumullahu khairan</strong> — "And may Allah also reward you with good"</li>
            <li><strong>Barakallahu feek</strong> (بارك الله فيك) — "May Allah bless you"</li>
          </ul>

          <div class="gold-box">
            <strong>Common spelling variations:</strong> JazakAllah, Jazak Allah, JazakAllahu Khairan, Jazakumullah Khair — these are all transliterations of the same Arabic phrase. "JazakAllahu Khairan" is the most complete and grammatically correct form.
          </div>

          <h2>Frequently Asked Questions</h2>
          <details class="faq-acc"><summary>What does JazakAllah Khair mean? <span>+</span></summary><p>JazakAllah Khair (جزاك الله خيرا) means "May Allah reward you with good." It is the Islamic way of saying thank you — instead of thanking a person directly, you ask Allah to reward them, which is the greatest form of gratitude since Allah rewards without limit.</p></details>
          <details class="faq-acc"><summary>How do you respond to JazakAllah Khair? <span>+</span></summary><p>The most common response is "Wa iyyakum" (and you too). You can also say "Wa antum fa jazakumullahu khairan" (and may Allah reward you with good too) or "Barakallahu feek" (may Allah bless you). All acknowledge the dua and return the good wish.</p></details>
          <details class="faq-acc"><summary>Is it JazakAllah or JazakAllahu Khairan? <span>+</span></summary><p>"JazakAllahu Khairan" is the complete and grammatically correct form, meaning "may Allah reward you with good." "JazakAllah" alone is a shortened everyday version. Both are widely used and understood. The word changes by gender: JazakAllah (male), JazakiAllah (female), JazakumAllah (group).</p></details>
          <details class="faq-acc"><summary>Why do Muslims say JazakAllah instead of shukran? <span>+</span></summary><p>Shukran simply means "thank you." JazakAllah Khair goes further — it is a dua (supplication) asking Allah to reward the person with good. The Prophet ﷺ said whoever says JazakAllahu khairan to someone who helped them "has done the utmost in praising him" (Tirmidhi 2035), making it the superior expression of gratitude.</p></details>

          <div style="background:linear-gradient(135deg,#0a3d28,var(--emerald));border-radius:16px;padding:32px;text-align:center;margin:44px 0;">
            <h3 style="font-family:var(--font-playfair),serif;color:#fff;font-size:1.6rem;margin-bottom:12px;">Learn the Language of the Quran</h3>
            <p style="color:rgba(255,255,255,.82);margin-bottom:24px;line-height:1.7;max-width:560px;margin-left:auto;margin-right:auto;">Understand the words you say every day. Learn Arabic and Quran with a certified tutor — free 30-minute trial.</p>
            <a href="/online-quran-classes#cta" style="background:var(--gold);color:var(--charcoal);font-weight:700;padding:13px 28px;border-radius:10px;text-decoration:none;font-size:.95rem;">Book a Free Trial Class →</a>
          </div>

          <div style="margin-top:48px;border-top:1px solid var(--border);padding-top:32px;">
            <h3 style="font-size:1.1rem;font-weight:700;margin-bottom:16px;">Related Articles</h3>
            <ul style="list-style:none;padding:0;margin:0;display:flex;flex-direction:column;gap:10px;">
              <li><a href="/blog/islamic-phrases-meaning" style="color:var(--emerald);font-weight:600;">30 Common Islamic Phrases &amp; Their Meanings</a></li>
              <li><a href="/blog/subhanallah-meaning" style="color:var(--emerald);font-weight:600;">Subhanallah Meaning — Glory be to Allah</a></li>
              <li><a href="/blog/mashallah-meaning" style="color:var(--emerald);font-weight:600;">Mashallah Meaning &amp; Evil Eye Protection</a></li>
              <li><a href="/blog/alhamdulillah-meaning-in-english" style="color:var(--emerald);font-weight:600;">Alhamdulillah Meaning — The Power of Gratitude</a></li>
            </ul>
          </div>`,
  },
  "surah-mulk-benefits": {
    style: `.article-body { font-size: 1.05rem; line-height: 1.85; color: #374151; }
    .article-body h2 { font-size: 1.5rem; font-weight: 700; color: var(--charcoal); margin: 40px 0 16px; }
    .article-body h3 { font-size: 1.15rem; font-weight: 700; color: var(--emerald); margin: 24px 0 10px; }
    .article-body p { margin-bottom: 18px; }
    .article-body ul { margin-bottom: 18px; padding-left: 24px; }
    .article-body li { margin-bottom: 8px; }
    .article-body a { color: var(--emerald); font-weight: 600; }
    .highlight-box { background: rgba(10,110,79,.06); border-left: 4px solid var(--emerald); border-radius: 8px; padding: 20px 24px; margin: 24px 0; }
    .gold-box { background: rgba(232,184,75,.08); border-left: 4px solid var(--gold); border-radius: 8px; padding: 20px 24px; margin: 24px 0; }
    .big-name { font-family: 'Amiri', serif; font-size: 3rem; text-align: center; color: var(--emerald); padding: 32px 16px 8px; line-height: 1.3; }
    .quran-ref { background: rgba(232,184,75,.05); border: 1px solid rgba(232,184,75,.22); border-radius: 12px; padding: 20px 24px; margin: 20px 0; }
    .quran-ref-arabic { font-family: 'Amiri', serif; font-size: 1.5rem; direction: rtl; text-align: right; color: var(--charcoal); margin-bottom: 10px; line-height: 1.9; }
    .quran-ref-english { font-size: .95rem; color: #374151; font-style: italic; margin-bottom: 6px; }
    .quran-ref-source { font-size: .8rem; color: var(--emerald); font-weight: 700; }
    .benefit-row { display: flex; gap: 14px; padding: 18px; background: var(--ivory); border: 1px solid var(--border); border-radius: 12px; margin-bottom: 12px; }
    .benefit-icon-box { min-width: 42px; height: 42px; border-radius: 10px; background: rgba(10,110,79,.1); display: flex; align-items: center; justify-content: center; color: var(--emerald); font-size: 1.2rem; }
    .faq-acc { border: 1px solid var(--border); border-radius: 10px; margin-bottom: 12px; overflow: hidden; }
    .faq-acc summary { padding: 16px 20px; font-weight: 700; cursor: pointer; background: var(--ivory); color: var(--charcoal); list-style: none; display: flex; justify-content: space-between; align-items: center; font-size: .95rem; }
    .faq-acc summary::-webkit-details-marker { display: none; }
    .faq-acc summary span { color: var(--emerald); margin-left: 12px; }
    .faq-acc p { padding: 16px 20px; margin: 0; color: #374151; font-size: .92rem; line-height: 1.75; border-top: 1px solid var(--border); }
    @media (max-width: 576px) { .big-name { font-size: 2.2rem; } }`,
    content: `<p><strong>Surah Al-Mulk</strong> (سورة الملك) is the 67th chapter of the Quran and one of the most beloved surahs in a Muslim's daily life. The Prophet Muhammad ﷺ recited it <strong>every single night</strong> before sleeping — and taught that it protects and intercedes for the one who reads it.</p>

          <div class="highlight-box">
            <strong>Quick answer:</strong> <strong>Surah Mulk</strong> (also called Tabarak) is the 67th surah of the Quran, containing 30 verses. Its greatest benefit is that it <strong>intercedes for the reader until they are forgiven, and protects from the punishment of the grave</strong>. The Prophet ﷺ recited it every night. Reading it nightly is a highly recommended Sunnah.
          </div>

          <div class="big-name">تَبَارَكَ الَّذِي بِيَدِهِ الْمُلْكُ</div>
          <p style="text-align:center;font-style:italic;color:var(--muted);margin-bottom:32px;">"Blessed is He in whose hand is the dominion." (Quran 67:1)</p>

          <h2>The Main Benefits of Surah Mulk</h2>
          <div class="benefit-row"><div class="benefit-icon-box">🛡️</div><div><strong>Protection from the punishment of the grave.</strong> Ibn Abbas said the Prophet ﷺ called it "the preventer" (al-Mani'ah) that saves from the torment of the grave.</div></div>
          <div class="benefit-row"><div class="benefit-icon-box">🤲</div><div><strong>It intercedes for the reader.</strong> The Prophet ﷺ said it is "a surah of thirty verses that will intercede for a man until he is forgiven." (Tirmidhi 2891)</div></div>
          <div class="benefit-row"><div class="benefit-icon-box">🌙</div><div><strong>A nightly Sunnah.</strong> The Prophet ﷺ would not sleep until he had recited Surah Al-Mulk and Surah As-Sajdah. (Tirmidhi 2892)</div></div>

          <h2>The Hadith on Surah Mulk</h2>
          <div class="quran-ref">
            <div class="quran-ref-english">The Prophet ﷺ said: "There is a surah in the Quran of thirty verses which will intercede for its reader until he is forgiven: 'Tabarakalladhi biyadihil-mulk' (Surah Al-Mulk)."</div>
            <div class="quran-ref-source">— Sunan at-Tirmidhi 2891 · Abu Dawud 1400</div>
          </div>

          <h2>What Is Surah Mulk About?</h2>
          <p>Surah Al-Mulk reminds us that all dominion and power belong to Allah alone. It reflects on the perfection of Allah's creation — the layered heavens, the stars, the birds in the sky — inviting the reader to look again and again and find no flaw. It warns of the Hereafter and comforts the believer with Allah's mercy and control over all things. Reciting it nightly reconnects the heart to Allah's sovereignty before sleep.</p>

          <div class="gold-box">
            <strong>Why read it at night?</strong> The Prophet ﷺ made it a nightly habit. Scholars recommend reciting Surah Al-Mulk after Isha or before sleeping, so that if a person dies in their sleep, this surah stands as a protector and intercessor for them. Memorizing its 30 verses is a highly rewarding goal.
          </div>

          <h2>Frequently Asked Questions</h2>
          <details class="faq-acc"><summary>What are the benefits of Surah Mulk? <span>+</span></summary><p>The main benefits of Surah Mulk are: it intercedes for the reader until they are forgiven (Tirmidhi 2891), it protects from the punishment of the grave (called "al-Mani'ah" — the preventer), and reciting it nightly is a Sunnah of the Prophet ﷺ who never slept without reading it.</p></details>
          <details class="faq-acc"><summary>When should you read Surah Mulk? <span>+</span></summary><p>The best time to read Surah Mulk is at night, after Isha prayer or before sleeping. The Prophet ﷺ would not sleep until he recited it. Reading it nightly ensures its protection and intercession, especially if one passes away during sleep.</p></details>
          <details class="faq-acc"><summary>How many verses are in Surah Mulk? <span>+</span></summary><p>Surah Al-Mulk has 30 verses (ayat) and is the 67th chapter of the Quran. It is a Makki surah, revealed in Mecca. It is also known as "Tabarak" after its first word, and "Al-Mani'ah" (the preventer) and "Al-Munjiyah" (the saver) for its protective qualities.</p></details>
          <details class="faq-acc"><summary>Does Surah Mulk protect from the grave punishment? <span>+</span></summary><p>Yes. According to authentic narrations, Surah Al-Mulk protects the reader from the punishment of the grave. Ibn Abbas reported that the Prophet ﷺ called it "the preventer" that saves a person from the torment of the grave. This is why reciting it every night is strongly encouraged.</p></details>
          <details class="faq-acc"><summary>How long does it take to memorize Surah Mulk? <span>+</span></summary><p>Most people can memorize Surah Al-Mulk (30 verses) in 2–4 weeks with daily practice of 10–15 minutes. Reciting it every night naturally aids memorization. At NoorPath Academy, our <a href="/hifz-quran-online">Hifz tutors</a> use proven methods to help students memorize it quickly and correctly.</p></details>

          <div style="background:linear-gradient(135deg,#0a3d28,var(--emerald));border-radius:16px;padding:32px;text-align:center;margin:44px 0;">
            <h3 style="font-family:var(--font-playfair),serif;color:#fff;font-size:1.6rem;margin-bottom:12px;">Learn to Recite Surah Mulk Correctly</h3>
            <p style="color:rgba(255,255,255,.82);margin-bottom:24px;line-height:1.7;max-width:560px;margin-left:auto;margin-right:auto;">Recite and memorize Surah Al-Mulk with proper Tajweed under a certified tutor. Free 30-minute trial class.</p>
            <div style="display:flex;gap:12px;justify-content:center;flex-wrap:wrap;">
              <a href="/online-quran-classes#cta" style="background:var(--gold);color:var(--charcoal);font-weight:700;padding:13px 28px;border-radius:10px;text-decoration:none;font-size:.95rem;">Book a Free Trial →</a>
              <a href="/hifz-quran-online" style="background:rgba(255,255,255,.12);color:#fff;font-weight:600;padding:13px 24px;border-radius:10px;text-decoration:none;font-size:.92rem;border:1px solid rgba(255,255,255,.3);">Hifz Program</a>
            </div>
          </div>

          <div style="margin-top:48px;border-top:1px solid var(--border);padding-top:32px;">
            <h3 style="font-size:1.1rem;font-weight:700;margin-bottom:16px;">Related Articles</h3>
            <ul style="list-style:none;padding:0;margin:0;display:flex;flex-direction:column;gap:10px;">
              <li><a href="/blog/surah-yaseen-arabic-english" style="color:var(--emerald);font-weight:600;">Surah Yaseen — Arabic, English &amp; Benefits</a></li>
              <li><a href="/blog/surah-al-kahf-arabic-english-friday" style="color:var(--emerald);font-weight:600;">Surah Al-Kahf — Why Read It on Fridays</a></li>
              <li><a href="/blog/ayatul-kursi-arabic-english-benefits" style="color:var(--emerald);font-weight:600;">Ayatul Kursi — Arabic, English &amp; Benefits</a></li>
              <li><a href="/blog/how-to-memorize-quran-faster" style="color:var(--emerald);font-weight:600;">How to Memorize Quran Faster — 12 Techniques</a></li>
            </ul>
          </div>`,
  },
  "dua-for-anxiety-stress-depression": {
    style: `.article-body { font-size: 1.05rem; line-height: 1.85; color: #374151; }
    .article-body h2 { font-size: 1.55rem; font-weight: 700; color: var(--charcoal); margin: 44px 0 16px; scroll-margin-top: 90px; }
    .article-body h3 { font-size: 1.15rem; font-weight: 700; color: var(--emerald); margin: 26px 0 10px; }
    .article-body p { margin-bottom: 18px; }
    .article-body ul, .article-body ol { margin-bottom: 18px; padding-left: 24px; }
    .article-body li { margin-bottom: 10px; }
    .article-body a { color: var(--emerald); font-weight: 600; }

    .highlight-box { background: rgba(10,110,79,.06); border-left: 4px solid var(--emerald); border-radius: 8px; padding: 20px 24px; margin: 24px 0; }
    .gold-box { background: rgba(232,184,75,.08); border-left: 4px solid var(--gold); border-radius: 8px; padding: 20px 24px; margin: 24px 0; }

    /* Table of contents */
    .toc-box { background: var(--ivory); border: 1px solid var(--border); border-radius: 14px; padding: 22px 26px; margin: 28px 0; }
    .toc-box h3 { margin: 0 0 12px; color: var(--charcoal); font-size: 1rem; }
    .toc-box ol { margin: 0; padding-left: 20px; columns: 2; column-gap: 28px; }
    .toc-box li { margin-bottom: 6px; font-size: .9rem; }

    /* Dua card */
    .dua-card { background: #fff; border: 1px solid var(--border); border-radius: 16px; padding: 26px 26px 22px; margin: 22px 0; box-shadow: 0 2px 10px rgba(10,110,79,.05); }
    .dua-card.featured { border: 2px solid var(--emerald); background: linear-gradient(180deg, rgba(10,110,79,.04), #fff); }
    .dua-num { display: inline-flex; align-items: center; justify-content: center; min-width: 30px; height: 30px; border-radius: 8px; background: var(--emerald); color: #fff; font-size: .82rem; font-weight: 800; margin-right: 10px; }
    .dua-title { font-family: 'Playfair Display', serif; font-size: 1.15rem; font-weight: 700; color: var(--charcoal); display: flex; align-items: center; margin-bottom: 4px; }
    .dua-for { font-size: .82rem; color: var(--emerald); font-weight: 700; text-transform: uppercase; letter-spacing: .04em; margin-bottom: 16px; }
    .dua-arabic { font-family: 'Amiri', serif; font-size: 1.85rem; color: var(--charcoal); direction: rtl; text-align: right; line-height: 2.1; margin: 8px 0 14px; padding: 14px 18px; background: var(--ivory); border-radius: 12px; }
    .dua-roman { font-style: italic; color: #4b5563; font-size: .95rem; line-height: 1.7; margin-bottom: 10px; }
    .dua-english { color: var(--charcoal); font-weight: 600; font-size: .96rem; line-height: 1.7; margin-bottom: 14px; }
    .dua-meta { display: flex; flex-wrap: wrap; gap: 10px; border-top: 1px solid var(--border); padding-top: 14px; }
    .dua-badge { display: inline-flex; align-items: center; gap: 6px; font-size: .78rem; font-weight: 600; border-radius: 20px; padding: 4px 12px; }
    .dua-badge.src { background: rgba(232,184,75,.12); color: #a97613; }
    .dua-badge.when { background: rgba(10,110,79,.1); color: var(--emerald); }

    /* Quran reference */
    .quran-ref { background: rgba(232,184,75,.05); border: 1px solid rgba(232,184,75,.22); border-radius: 12px; padding: 20px 24px; margin: 20px 0; }
    .quran-ref-arabic { font-family: 'Amiri', serif; font-size: 1.5rem; direction: rtl; text-align: right; color: var(--charcoal); margin-bottom: 10px; line-height: 1.9; }
    .quran-ref-english { font-size: .95rem; color: #374151; font-style: italic; margin-bottom: 6px; }
    .quran-ref-source { font-size: .8rem; color: var(--emerald); font-weight: 700; }

    /* Routine steps */
    .routine-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; margin: 22px 0; }
    .routine-card { background: var(--ivory); border: 1px solid var(--border); border-radius: 12px; padding: 18px 20px; }
    .routine-time { font-size: .78rem; font-weight: 800; color: var(--gold); text-transform: uppercase; letter-spacing: .05em; margin-bottom: 6px; }
    .routine-card h4 { margin: 0 0 8px; color: var(--charcoal); font-size: 1rem; }
    .routine-card p { margin: 0; font-size: .86rem; color: var(--muted); line-height: 1.6; }

    /* FAQ accordion */
    .faq-acc { border: 1px solid var(--border); border-radius: 10px; margin-bottom: 12px; overflow: hidden; }
    .faq-acc summary { padding: 16px 20px; font-weight: 700; cursor: pointer; background: var(--ivory); color: var(--charcoal); list-style: none; display: flex; justify-content: space-between; align-items: center; font-size: .95rem; }
    .faq-acc summary::-webkit-details-marker { display: none; }
    .faq-acc summary span { color: var(--emerald); margin-left: 12px; flex-shrink: 0; font-size: 1.2rem; }
    .faq-acc p { padding: 16px 20px; margin: 0; color: #374151; font-size: .92rem; line-height: 1.75; border-top: 1px solid var(--border); }

    /* Care callout */
    .care-box { background: rgba(99,102,241,.06); border: 1px solid rgba(99,102,241,.2); border-radius: 14px; padding: 22px 26px; margin: 28px 0; }
    .care-box strong { color: #4f46e5; }

    @media (max-width: 576px) {
      .dua-arabic { font-size: 1.5rem; line-height: 1.9; }
      .toc-box ol { columns: 1; }
      .routine-grid { grid-template-columns: 1fr; }
    }`,
    content: `<p>Anxiety before sleep. A chest that tightens for no clear reason. Overthinking that will not switch off. Grief that sits heavy on the heart. If you are reading this, you already know the feeling — and you are looking for something more than a breathing exercise. You are looking for <strong>peace that reaches the soul</strong>.</p>

          <p>Islam does not dismiss your anxiety. The Prophet Muhammad ﷺ — the most beloved of all creation — experienced worry, grief and distress, and Allah gave him specific words to say in those moments. These are not vague affirmations. They are <strong>authentic duas for anxiety, stress and depression</strong>, taken directly from the Quran and Sahih Hadith, that millions of Muslims have turned to for over 1,400 years.</p>

          <div class="highlight-box">
            <strong>Quick answer:</strong> The most powerful and comprehensive <strong>dua for anxiety</strong> is the one the Prophet ﷺ taught: <em>"Allahumma inni a'udhu bika minal-hammi wal-hazan"</em> — "O Allah, I seek refuge in You from anxiety and grief." (Sahih al-Bukhari 6369). Below are <strong>15 authentic duas</strong> for worry, sadness, overthinking, fear and a broken heart — each with Arabic, transliteration, English meaning, source, and exactly when to recite it.
          </div>

          <div class="toc-box">
            <h3>What you will find in this guide</h3>
            <ol>
              <li><a href="#comprehensive">The most comprehensive dua</a></li>
              <li><a href="#worry">Duas for worry &amp; anxiety</a></li>
              <li><a href="#grief">Duas for grief &amp; sadness</a></li>
              <li><a href="#distress">Duas for severe distress</a></li>
              <li><a href="#heart">Duas for a broken heart</a></li>
              <li><a href="#sleep">Duas for sleep &amp; night anxiety</a></li>
              <li><a href="#relief">Duas for hardship &amp; relief</a></li>
              <li><a href="#why">Why dhikr calms the heart</a></li>
              <li><a href="#routine">A daily anxiety-relief routine</a></li>
              <li><a href="#help">When to also seek help</a></li>
            </ol>
          </div>

          <!-- =================== THE COMPREHENSIVE DUA =================== -->
          <h2 id="comprehensive">The Most Powerful Dua for Anxiety &amp; Grief</h2>

          <p>When the Prophet ﷺ found a companion (Abu Umamah) sitting in the mosque overwhelmed by worry and debt, he did not just comfort him — he taught him a dua to say <strong>morning and evening</strong>. Abu Umamah later said: <em>"I said it, and Allah removed my worry and paid off my debt."</em> This single dua names eight burdens of the heart in four pairs, and asks Allah for refuge from all of them.</p>

          <div class="dua-card featured">
            <div class="dua-title"><span class="dua-num">1</span> The Comprehensive Dua of Refuge</div>
            <div class="dua-for">For anxiety, grief, laziness, fear &amp; debt</div>
            <div class="dua-arabic">اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْهَمِّ وَالْحَزَنِ، وَالْعَجْزِ وَالْكَسَلِ، وَالْبُخْلِ وَالْجُبْنِ، وَضَلَعِ الدَّيْنِ وَغَلَبَةِ الرِّجَالِ</div>
            <div class="dua-roman">Allahumma inni a'udhu bika minal-hammi wal-hazan, wal-'ajzi wal-kasal, wal-bukhli wal-jubn, wa dala'id-dayni wa ghalabatir-rijal.</div>
            <div class="dua-english">"O Allah, I seek refuge in You from anxiety and grief, from weakness and laziness, from miserliness and cowardice, from being overburdened by debt and overpowered by others."</div>
            <div class="dua-meta">
              <span class="dua-badge src">📖 Sahih al-Bukhari 6369</span>
              <span class="dua-badge when">🕐 Morning &amp; evening</span>
            </div>
          </div>

          <div class="gold-box">
            <strong>Why this dua is so complete:</strong> Scholars note it treats two different diseases of the heart. <em>Hamm</em> (anxiety) is fear of what has <strong>not yet</strong> happened — the future. <em>Hazan</em> (grief) is sorrow over what <strong>already</strong> happened — the past. Most anxiety lives in one of these two places, and this dua covers both at once.
          </div>

          <!-- =================== WORRY & ANXIETY =================== -->
          <h2 id="worry">Duas for Worry &amp; Overthinking</h2>

          <p>When the mind races and you cannot stop thinking about everything that could go wrong, these short, memorable duas re-anchor the heart in tawakkul (reliance on Allah).</p>

          <div class="dua-card">
            <div class="dua-title"><span class="dua-num">2</span> Hasbunallah — Sufficiency</div>
            <div class="dua-for">For overthinking &amp; feeling overwhelmed</div>
            <div class="dua-arabic">حَسْبُنَا اللَّهُ وَنِعْمَ الْوَكِيلُ</div>
            <div class="dua-roman">Hasbunallahu wa ni'mal-wakil.</div>
            <div class="dua-english">"Allah is sufficient for us, and He is the best Disposer of affairs."</div>
            <div class="dua-meta">
              <span class="dua-badge src">📖 Quran 3:173 &amp; al-Bukhari 4563</span>
              <span class="dua-badge when">🕐 When worried about an outcome</span>
            </div>
          </div>

          <p>Ibrahim (peace be upon him) said this when thrown into the fire, and the Prophet ﷺ and the believers said it when warned of a gathering army. In both cases, the fear was real — and Allah turned it to safety. Say it when your worry feels bigger than you.</p>

          <div class="dua-card">
            <div class="dua-title"><span class="dua-num">3</span> Reliance &amp; Trust</div>
            <div class="dua-for">For decisions &amp; fear of the future</div>
            <div class="dua-arabic">حَسْبِيَ اللَّهُ لَا إِلَهَ إِلَّا هُوَ عَلَيْهِ تَوَكَّلْتُ وَهُوَ رَبُّ الْعَرْشِ الْعَظِيمِ</div>
            <div class="dua-roman">Hasbiyallahu la ilaha illa huwa, 'alayhi tawakkaltu wa huwa rabbul-'arshil-'azim.</div>
            <div class="dua-english">"Allah is sufficient for me. There is no god but Him. In Him I put my trust, and He is the Lord of the Mighty Throne."</div>
            <div class="dua-meta">
              <span class="dua-badge src">📖 Quran 9:129 · Abu Dawud 5081</span>
              <span class="dua-badge when">🕐 7 times, morning &amp; evening</span>
            </div>
          </div>

          <!-- =================== GRIEF & SADNESS =================== -->
          <h2 id="grief">Duas for Grief, Sadness &amp; Depression</h2>

          <p>For the heavy, settled sadness that does not lift — the kind that feels like depression — the Prophet ﷺ gave one of the most beautiful and complete supplications ever spoken. He said whoever says it, <em>"Allah will remove their sorrow and replace their grief with joy."</em></p>

          <div class="dua-card featured">
            <div class="dua-title"><span class="dua-num">4</span> The Dua That Removes Sorrow</div>
            <div class="dua-for">For deep sadness &amp; depression</div>
            <div class="dua-arabic">اللَّهُمَّ إِنِّي عَبْدُكَ، ابْنُ عَبْدِكَ، ابْنُ أَمَتِكَ... أَنْ تَجْعَلَ الْقُرْآنَ رَبِيعَ قَلْبِي، وَنُورَ صَدْرِي، وَجِلَاءَ حُزْنِي، وَذَهَابَ هَمِّي</div>
            <div class="dua-roman">Allahumma inni 'abduka... an taj'alal-Qur'ana rabi'a qalbi, wa nura sadri, wa jila'a huzni, wa dhahaba hammi.</div>
            <div class="dua-english">"O Allah... make the Quran the spring of my heart, the light of my chest, the remover of my sadness and the reliever of my anxiety."</div>
            <div class="dua-meta">
              <span class="dua-badge src">📖 Musnad Ahmad 3712 (Sahih)</span>
              <span class="dua-badge when">🕐 In sujood &amp; times of grief</span>
            </div>
          </div>

          <div class="dua-card">
            <div class="dua-title"><span class="dua-num">5</span> The Dua of Prophet Yunus</div>
            <div class="dua-for">For distress, regret &amp; feeling trapped</div>
            <div class="dua-arabic">لَا إِلَهَ إِلَّا أَنْتَ سُبْحَانَكَ إِنِّي كُنْتُ مِنَ الظَّالِمِينَ</div>
            <div class="dua-roman">La ilaha illa anta subhanaka inni kuntu minaz-zalimin.</div>
            <div class="dua-english">"There is no god but You, glory be to You. Indeed, I was among the wrongdoers."</div>
            <div class="dua-meta">
              <span class="dua-badge src">📖 Quran 21:87 · Tirmidhi 3505</span>
              <span class="dua-badge when">🕐 When you feel trapped in darkness</span>
            </div>
          </div>

          <p>Yunus (peace be upon him) said this in the darkness of the whale's belly — trapped, alone, and in despair. The Prophet ﷺ said: <em>"No Muslim ever supplicates with these words for anything but Allah answers him."</em> (Tirmidhi). When your situation feels like a dark place you cannot escape, this is the dua.</p>

          <!-- =================== SEVERE DISTRESS =================== -->
          <h2 id="distress">Duas for Severe Distress &amp; Panic</h2>

          <div class="dua-card">
            <div class="dua-title"><span class="dua-num">6</span> The Dua for Moments of Distress</div>
            <div class="dua-for">For panic &amp; acute anxiety attacks</div>
            <div class="dua-arabic">لَا إِلَهَ إِلَّا اللَّهُ الْعَظِيمُ الْحَلِيمُ، لَا إِلَهَ إِلَّا اللَّهُ رَبُّ الْعَرْشِ الْعَظِيمِ، لَا إِلَهَ إِلَّا اللَّهُ رَبُّ السَّمَاوَاتِ وَرَبُّ الْأَرْضِ وَرَبُّ الْعَرْشِ الْكَرِيمِ</div>
            <div class="dua-roman">La ilaha illallahul-'Azimul-Halim, la ilaha illallahu Rabbul-'Arshil-'Azim, la ilaha illallahu Rabbus-samawati wa Rabbul-ardi wa Rabbul-'Arshil-Karim.</div>
            <div class="dua-english">"There is no god but Allah, the Magnificent, the Forbearing. There is no god but Allah, Lord of the Mighty Throne. There is no god but Allah, Lord of the heavens, Lord of the earth, and Lord of the Noble Throne."</div>
            <div class="dua-meta">
              <span class="dua-badge src">📖 al-Bukhari 6345 · Muslim 2730</span>
              <span class="dua-badge when">🕐 During intense stress or panic</span>
            </div>
          </div>

          <div class="dua-card">
            <div class="dua-title"><span class="dua-num">7</span> Ya Hayyu Ya Qayyum</div>
            <div class="dua-for">For seeking rescue &amp; strength</div>
            <div class="dua-arabic">يَا حَيُّ يَا قَيُّومُ بِرَحْمَتِكَ أَسْتَغِيثُ</div>
            <div class="dua-roman">Ya Hayyu ya Qayyum, bi-rahmatika astaghith.</div>
            <div class="dua-english">"O Ever-Living, O Sustainer, by Your mercy I seek relief."</div>
            <div class="dua-meta">
              <span class="dua-badge src">📖 Tirmidhi 3524</span>
              <span class="dua-badge when">🕐 In any moment of hardship</span>
            </div>
          </div>

          <!-- =================== BROKEN HEART =================== -->
          <h2 id="heart">Duas for a Broken Heart</h2>

          <p>Whether it is heartbreak, loss, or a betrayal you did not deserve, these words ask Allah — the only One who fully understands your heart — to mend what is broken and replace it with something better.</p>

          <div class="dua-card">
            <div class="dua-title"><span class="dua-num">8</span> The Dua for a Loss</div>
            <div class="dua-for">For grief after losing something or someone</div>
            <div class="dua-arabic">إِنَّا لِلَّهِ وَإِنَّا إِلَيْهِ رَاجِعُونَ، اللَّهُمَّ أْجُرْنِي فِي مُصِيبَتِي وَأَخْلِفْ لِي خَيْرًا مِنْهَا</div>
            <div class="dua-roman">Inna lillahi wa inna ilayhi raji'un. Allahumma-jurni fi musibati wa akhlif li khayran minha.</div>
            <div class="dua-english">"Indeed we belong to Allah, and to Him we shall return. O Allah, reward me for my affliction and replace it for me with something better."</div>
            <div class="dua-meta">
              <span class="dua-badge src">📖 Sahih Muslim 918</span>
              <span class="dua-badge when">🕐 When you experience any loss</span>
            </div>
          </div>

          <div class="dua-card">
            <div class="dua-title"><span class="dua-num">9</span> Asking for Your Affairs to Be Set Right</div>
            <div class="dua-for">For when everything feels broken</div>
            <div class="dua-arabic">يَا حَيُّ يَا قَيُّومُ بِرَحْمَتِكَ أَسْتَغِيثُ، أَصْلِحْ لِي شَأْنِي كُلَّهُ وَلَا تَكِلْنِي إِلَى نَفْسِي طَرْفَةَ عَيْنٍ</div>
            <div class="dua-roman">Ya Hayyu ya Qayyum, bi-rahmatika astaghith, aslih li sha'ni kullahu wa la takilni ila nafsi tarfata 'ayn.</div>
            <div class="dua-english">"O Ever-Living, O Sustainer, by Your mercy I seek relief. Set right all of my affairs, and do not leave me to myself even for the blink of an eye."</div>
            <div class="dua-meta">
              <span class="dua-badge src">📖 Sunan an-Nasa'i (al-Kubra) · Hasan</span>
              <span class="dua-badge when">🕐 Morning &amp; evening</span>
            </div>
          </div>

          <!-- =================== SLEEP =================== -->
          <h2 id="sleep">Duas for Sleep &amp; Night-time Anxiety</h2>

          <p>Anxiety often strikes hardest at night, when the world goes quiet and the mind gets loud. The Prophet ﷺ gave us a protective routine before sleep — reciting <a href="/blog/ayatul-kursi-arabic-english-benefits">Ayatul Kursi</a> and the last three Surahs (the Quls) — and this dua to place your heart in Allah's care.</p>

          <div class="dua-card">
            <div class="dua-title"><span class="dua-num">10</span> The Dua Before Sleep</div>
            <div class="dua-for">For a calm, protected sleep</div>
            <div class="dua-arabic">اللَّهُمَّ أَسْلَمْتُ نَفْسِي إِلَيْكَ، وَفَوَّضْتُ أَمْرِي إِلَيْكَ، وَأَلْجَأْتُ ظَهْرِي إِلَيْكَ، رَغْبَةً وَرَهْبَةً إِلَيْكَ</div>
            <div class="dua-roman">Allahumma aslamtu nafsi ilayk, wa fawwadtu amri ilayk, wa alja'tu zahri ilayk, raghbatan wa rahbatan ilayk.</div>
            <div class="dua-english">"O Allah, I submit myself to You, I entrust my affairs to You, and I turn my back to You in hope and fear of You."</div>
            <div class="dua-meta">
              <span class="dua-badge src">📖 al-Bukhari 247 · Muslim 2710</span>
              <span class="dua-badge when">🌙 As the last words before sleep</span>
            </div>
          </div>

          <div class="dua-card">
            <div class="dua-title"><span class="dua-num">11</span> Against Frightening Thoughts at Night</div>
            <div class="dua-for">For racing thoughts &amp; fear in bed</div>
            <div class="dua-arabic">أَعُوذُ بِكَلِمَاتِ اللَّهِ التَّامَّاتِ مِنْ غَضَبِهِ وَعِقَابِهِ، وَشَرِّ عِبَادِهِ، وَمِنْ هَمَزَاتِ الشَّيَاطِينِ وَأَنْ يَحْضُرُونِ</div>
            <div class="dua-roman">A'udhu bi-kalimatillahit-tammati min ghadabihi wa 'iqabih, wa sharri 'ibadih, wa min hamazatish-shayatini wa an yahdurun.</div>
            <div class="dua-english">"I seek refuge in the perfect words of Allah from His anger and punishment, from the evil of His servants, and from the whisperings of the devils and their presence."</div>
            <div class="dua-meta">
              <span class="dua-badge src">📖 Abu Dawud 3893 · Tirmidhi 3528</span>
              <span class="dua-badge when">🌙 When anxious thoughts keep you awake</span>
            </div>
          </div>

          <!-- =================== HARDSHIP & RELIEF =================== -->
          <h2 id="relief">Duas for Hardship &amp; Ease</h2>

          <div class="dua-card">
            <div class="dua-title"><span class="dua-num">12</span> Turning Hardship into Ease</div>
            <div class="dua-for">For a task or situation that feels impossible</div>
            <div class="dua-arabic">اللَّهُمَّ لَا سَهْلَ إِلَّا مَا جَعَلْتَهُ سَهْلًا، وَأَنْتَ تَجْعَلُ الْحَزْنَ إِذَا شِئْتَ سَهْلًا</div>
            <div class="dua-roman">Allahumma la sahla illa ma ja'altahu sahla, wa anta taj'alul-hazna idha shi'ta sahla.</div>
            <div class="dua-english">"O Allah, there is no ease except in what You make easy, and You make hardship easy if You will."</div>
            <div class="dua-meta">
              <span class="dua-badge src">📖 Ibn Hibban 2427 (Sahih)</span>
              <span class="dua-badge when">🕐 Before a difficult task</span>
            </div>
          </div>

          <div class="dua-card">
            <div class="dua-title"><span class="dua-num">13</span> Seeking Well-being (Afiyah)</div>
            <div class="dua-for">For overall peace in body &amp; mind</div>
            <div class="dua-arabic">اللَّهُمَّ إِنِّي أَسْأَلُكَ الْعَفْوَ وَالْعَافِيَةَ فِي الدُّنْيَا وَالْآخِرَةِ</div>
            <div class="dua-roman">Allahumma inni as'alukal-'afwa wal-'afiyata fid-dunya wal-akhirah.</div>
            <div class="dua-english">"O Allah, I ask You for pardon and well-being in this world and the Hereafter."</div>
            <div class="dua-meta">
              <span class="dua-badge src">📖 Ibn Majah 3871 · Hasan</span>
              <span class="dua-badge when">🕐 Morning &amp; evening</span>
            </div>
          </div>

          <div class="dua-card">
            <div class="dua-title"><span class="dua-num">14</span> The Prophet's Dua for Strength of Heart</div>
            <div class="dua-for">For anxiety, sadness &amp; feeling incapable</div>
            <div class="dua-arabic">اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْهَمِّ وَالْحَزَنِ، وَأَعُوذُ بِكَ مِنَ الْعَجْزِ وَالْكَسَلِ</div>
            <div class="dua-roman">Allahumma inni a'udhu bika minal-hammi wal-hazan, wa a'udhu bika minal-'ajzi wal-kasal.</div>
            <div class="dua-english">"O Allah, I seek refuge in You from anxiety and grief, and I seek refuge in You from weakness and laziness."</div>
            <div class="dua-meta">
              <span class="dua-badge src">📖 Sahih al-Bukhari 2893</span>
              <span class="dua-badge when">🕐 Any time you feel stuck</span>
            </div>
          </div>

          <div class="dua-card">
            <div class="dua-title"><span class="dua-num">15</span> The Simplest Dhikr for Peace</div>
            <div class="dua-for">For a restless, tired heart</div>
            <div class="dua-arabic">لَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللَّهِ</div>
            <div class="dua-roman">La hawla wa la quwwata illa billah.</div>
            <div class="dua-english">"There is no might nor power except with Allah."</div>
            <div class="dua-meta">
              <span class="dua-badge src">📖 al-Bukhari 6384 · Muslim 2704</span>
              <span class="dua-badge when">🕐 Repeat gently whenever anxious</span>
            </div>
          </div>

          <p>The Prophet ﷺ called this phrase <em>"a treasure from the treasures of Paradise."</em> It is the easiest to memorise and the most calming to repeat — a single sentence that hands the entire weight of your worry back to the One who can actually carry it.</p>

          <!-- =================== WHY DHIKR WORKS =================== -->
          <h2 id="why">Why Dhikr Genuinely Calms the Heart</h2>

          <p>These are not just words we say out of habit. Allah tells us directly that remembrance is designed to settle the human heart:</p>

          <div class="quran-ref">
            <div class="quran-ref-arabic">أَلَا بِذِكْرِ اللَّهِ تَطْمَئِنُّ الْقُلُوبُ</div>
            <div class="quran-ref-english">"Unquestionably, by the remembrance of Allah do hearts find rest."</div>
            <div class="quran-ref-source">— Quran 13:28 (Surah Ar-Ra'd)</div>
          </div>

          <p>Anxiety often grows from a feeling of being <strong>out of control</strong> — carrying a future you cannot predict and a past you cannot change. Dhikr works because it moves that weight from your shoulders to Allah's decree. When you say "Hasbunallah" (Allah is enough for me), you are not denying the problem — you are correctly naming who is actually in charge of the outcome. That shift, repeated daily, rewires how the heart responds to fear.</p>

          <!-- =================== ROUTINE =================== -->
          <h2 id="routine">A Simple Daily Anxiety-Relief Routine</h2>

          <p>Duas work best as a consistent habit, not just an emergency button. Here is a realistic routine built entirely from the Sunnah — it takes under 10 minutes a day.</p>

          <div class="routine-grid">
            <div class="routine-card">
              <div class="routine-time">☀️ After Fajr (Morning)</div>
              <h4>Morning Adhkar</h4>
              <p>Recite Ayatul Kursi, the comprehensive dua (#1), and "Hasbunallah" (#2) x7. This sets a calm tone before the day's stress begins.</p>
            </div>
            <div class="routine-card">
              <div class="routine-time">🌆 After Asr / Maghrib (Evening)</div>
              <h4>Evening Adhkar</h4>
              <p>Repeat the same morning set. The Prophet ﷺ specifically prescribed these duas for morning and evening protection.</p>
            </div>
            <div class="routine-card">
              <div class="routine-time">😰 In the Moment</div>
              <h4>When Anxiety Hits</h4>
              <p>Quietly repeat "La hawla wa la quwwata illa billah" (#15) or the dua of Yunus (#5) until your breathing slows.</p>
            </div>
            <div class="routine-card">
              <div class="routine-time">🌙 Before Sleep</div>
              <h4>Night Protection</h4>
              <p>Ayatul Kursi + the three Quls, then the sleep dua (#10). This directly targets night-time anxiety and racing thoughts.</p>
            </div>
          </div>

          <div class="gold-box">
            <strong>The secret ingredient — tawakkul with action:</strong> Making dua is not a substitute for taking action; it is what gives your action peace. Tie your camel <em>and</em> trust Allah, as the Prophet ﷺ taught. Say the dua, then take the next practical step — whether that is a conversation, a plan, or reaching out for support.
          </div>

          <!-- =================== SEEK HELP =================== -->
          <h2 id="help">When to Also Seek Help</h2>

          <div class="care-box">
            <p style="margin:0;"><strong>Important:</strong> Duas and professional care are not opposites — seeking treatment is itself from the Sunnah. The Prophet ﷺ said: <em>"Allah has not sent down a disease except that He has also sent down its cure."</em> (al-Bukhari 5678). If your anxiety or depression is persistent, overwhelming, or affecting your daily life, please speak to a doctor or a qualified mental-health professional alongside your duas. Seeking help is a sign of strength and trust in Allah's wisdom — not a lack of faith.</p>
          </div>

          <!-- =================== FAQ =================== -->
          <h2>Frequently Asked Questions</h2>

          <details class="faq-acc">
            <summary>What is the most powerful dua for anxiety? <span>+</span></summary>
            <p>The most comprehensive dua for anxiety is the one the Prophet ﷺ taught Abu Umamah: "Allahumma inni a'udhu bika minal-hammi wal-hazan, wal-'ajzi wal-kasal, wal-bukhli wal-jubn, wa dala'id-dayni wa ghalabatir-rijal" (Sahih al-Bukhari 6369). It asks Allah for refuge from anxiety, grief, weakness, laziness, miserliness, cowardice, debt, and being overpowered — covering both fear of the future and sorrow over the past.</p>
          </details>
          <details class="faq-acc">
            <summary>Which dua removes stress and worry instantly? <span>+</span></summary>
            <p>For immediate relief, repeat "Hasbunallahu wa ni'mal-wakil" (Allah is sufficient for us and He is the best Disposer of affairs — Quran 3:173) or "La hawla wa la quwwata illa billah" (there is no might nor power except with Allah). Both are short, easy to memorise, and shift the burden of the outcome to Allah. Recite them slowly and repeatedly until your heart settles.</p>
          </details>
          <details class="faq-acc">
            <summary>Is there a dua for depression in Islam? <span>+</span></summary>
            <p>Yes. The most beautiful dua for deep sadness is the one in Musnad Ahmad where the Prophet ﷺ said whoever recites it, "Allah will remove their sorrow and replace their grief with joy." It includes the words: "make the Quran the spring of my heart, the light of my chest, the remover of my sadness and the reliever of my anxiety." The dua of Yunus (Quran 21:87) is also powerful for feeling trapped in darkness. For persistent depression, combine these duas with professional help — seeking treatment is from the Sunnah.</p>
          </details>
          <details class="faq-acc">
            <summary>What dua should I read for a broken heart? <span>+</span></summary>
            <p>For heartbreak or loss, recite "Inna lillahi wa inna ilayhi raji'un. Allahumma-jurni fi musibati wa akhlif li khayran minha" — "Indeed we belong to Allah and to Him we return. O Allah, reward me in my affliction and replace it with something better" (Sahih Muslim 918). Umm Salamah said this after losing her husband, and Allah replaced him with a better one — marriage to the Prophet ﷺ himself.</p>
          </details>
          <details class="faq-acc">
            <summary>What dua calms anxiety before sleep? <span>+</span></summary>
            <p>Before sleeping, recite Ayatul Kursi and the last three Surahs (Al-Ikhlas, Al-Falaq, An-Nas), then say: "Allahumma aslamtu nafsi ilayk..." — "O Allah, I submit myself to You and entrust my affairs to You" (al-Bukhari 247). For racing thoughts, add "A'udhu bi-kalimatillahit-tammat..." seeking refuge in Allah's perfect words. This Sunnah routine directly targets night-time anxiety.</p>
          </details>
          <details class="faq-acc">
            <summary>How many times should I recite these duas? <span>+</span></summary>
            <p>Most of these duas have no fixed number — recite with sincerity and presence rather than counting. Some have specific guidance: "Hasbiyallahu la ilaha illa huwa..." is recited 7 times morning and evening (Abu Dawud 5081). Quality of attention matters far more than quantity. It is better to say one dua with a present heart than a hundred distractedly.</p>
          </details>
          <details class="faq-acc">
            <summary>Do duas for anxiety really work? <span>+</span></summary>
            <p>Allah promises in the Quran: "By the remembrance of Allah do hearts find rest" (13:28). Countless companions testified to relief — Abu Umamah's worry and debt were removed after consistent recitation. Duas work by reconnecting the anxious heart to the One in control, building tawakkul (reliance) that replaces fear with trust. They are most effective as a daily habit combined with practical action and, when needed, professional care.</p>
          </details>

          <!-- =================== CTA =================== -->
          <div style="background:linear-gradient(135deg,#0a3d28,var(--emerald));border-radius:16px;padding:32px;text-align:center;margin:44px 0;">
            <h3 style="font-family:var(--font-playfair),serif;color:#fff;font-size:1.6rem;margin-bottom:12px;">Find Peace Through a Deeper Connection with the Quran</h3>
            <p style="color:rgba(255,255,255,.82);margin-bottom:24px;line-height:1.7;max-width:560px;margin-left:auto;margin-right:auto;">The Quran is described as a healing for what is in the hearts (10:57). Learning to read and understand it — even a few minutes a day — is one of the most powerful long-term remedies for a restless heart. Start with a free 30-minute trial with a certified tutor.</p>
            <div style="display:flex;gap:12px;justify-content:center;flex-wrap:wrap;">
              <a href="/online-quran-classes#cta" style="background:var(--gold);color:var(--charcoal);font-weight:700;padding:13px 28px;border-radius:10px;text-decoration:none;font-size:.95rem;">Book a Free Trial Class →</a>
              <a href="/online-quran-for-beginners" style="background:rgba(255,255,255,.12);color:#fff;font-weight:600;padding:13px 24px;border-radius:10px;text-decoration:none;font-size:.92rem;border:1px solid rgba(255,255,255,.3);">Quran for Beginners</a>
            </div>
          </div>

          <div style="margin-top:48px;border-top:1px solid var(--border);padding-top:32px;">
            <h3 style="font-size:1.1rem;font-weight:700;margin-bottom:16px;">Related Articles</h3>
            <ul style="list-style:none;padding:0;margin:0;display:flex;flex-direction:column;gap:10px;">
              <li><a href="/blog/ayatul-kursi-arabic-english-benefits" style="color:var(--emerald);font-weight:600;">Ayatul Kursi — Arabic, English &amp; Protective Benefits</a></li>
              <li><a href="/blog/astaghfirullah-meaning" style="color:var(--emerald);font-weight:600;">Astaghfirullah Meaning — The Dua That Opens Closed Doors</a></li>
              <li><a href="/blog/dua-e-qunoot-arabic-english" style="color:var(--emerald);font-weight:600;">Dua e Qunoot — Arabic Text &amp; English Translation</a></li>
              <li><a href="/blog/99-names-of-allah-asmaul-husna" style="color:var(--emerald);font-weight:600;">99 Names of Allah — Call on Him by His Beautiful Names</a></li>
              <li><a href="/blog/alhamdulillah-meaning-in-english" style="color:var(--emerald);font-weight:600;">Alhamdulillah Meaning — The Power of Gratitude</a></li>
            </ul>
          </div>`,
  },
  "99-names-of-allah-asmaul-husna": {
    style: `.article-body { font-size: 1.05rem; line-height: 1.85; color: #374151; }
    .article-body h2 { font-size: 1.5rem; font-weight: 700; color: var(--charcoal); margin: 40px 0 16px; }
    .article-body h3 { font-size: 1.1rem; font-weight: 700; color: var(--emerald); margin: 24px 0 10px; }
    .article-body p { margin-bottom: 18px; }
    .article-body ul { margin-bottom: 18px; padding-left: 24px; }
    .article-body li { margin-bottom: 8px; }
    .highlight-box { background: rgba(10,110,79,.06); border-left: 4px solid var(--emerald); border-radius: 8px; padding: 20px 24px; margin: 24px 0; }
    .gold-box { background: rgba(232,184,75,.08); border-left: 4px solid var(--gold); border-radius: 8px; padding: 20px 24px; margin: 24px 0; }

    /* Names grid */
    .names-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(290px, 1fr)); gap: 16px; margin: 28px 0; }
    .name-card { background: var(--ivory); border: 1px solid var(--border); border-radius: 12px; padding: 18px 20px; display: flex; gap: 14px; align-items: flex-start; transition: box-shadow .2s; }
    .name-card:hover { box-shadow: 0 4px 16px rgba(10,110,79,.1); }
    .name-num { display: flex; align-items: center; justify-content: center; min-width: 32px; height: 32px; border-radius: 8px; background: var(--emerald); color: #fff; font-size: .75rem; font-weight: 700; }
    .name-arabic { font-family: 'Amiri', serif; font-size: 1.4rem; color: var(--charcoal); direction: rtl; line-height: 1.4; margin-bottom: 4px; }
    .name-roman { font-style: italic; color: var(--emerald); font-weight: 600; font-size: .85rem; margin-bottom: 2px; }
    .name-meaning { font-size: .82rem; color: var(--muted); }

    /* Category header */
    .category-header { background: linear-gradient(135deg, var(--emerald), #059669); color: #fff; border-radius: 12px; padding: 16px 24px; margin: 36px 0 20px; display: flex; align-items: center; gap: 12px; }
    .category-header h3 { margin: 0; font-size: 1.05rem; color: #fff; }

    /* FAQ */
    .faq-item { border: 1px solid var(--border); border-radius: 10px; margin-bottom: 12px; overflow: hidden; }
    .faq-q { padding: 16px 20px; font-weight: 700; cursor: pointer; background: var(--ivory); color: var(--charcoal); display: flex; justify-content: space-between; align-items: center; }
    .faq-a { padding: 16px 20px; color: #374151; font-size: .95rem; line-height: 1.7; border-top: 1px solid var(--border); }

    /* Bismillah */
    .big-name { font-family: 'Amiri', serif; font-size: 3.5rem; text-align: center; color: var(--emerald); padding: 32px 16px 16px; line-height: 1.3; }

    @media (max-width: 576px) {
      .names-grid { grid-template-columns: 1fr; }
      .big-name { font-size: 2.5rem; }
    }`,
    content: `<div class="big-name">اللَّهُ</div>
          <p style="text-align:center;font-family:'Amiri',serif;font-size:1.1rem;color:var(--muted);margin-bottom:32px;">الأسماء الحسنى — The Most Beautiful Names</p>

          <p>Allah ﷻ says in the Quran: <em>"And to Allah belong the best names, so invoke Him by them."</em> (Quran 7:180). The <strong>99 Names of Allah</strong> — known in Arabic as <strong>Asmaul Husna</strong> (الأسماء الحسنى) — are the divine attributes that describe Allah's perfect, infinite qualities. This is the <strong>complete list of all 99 Names of Allah in Arabic, transliteration, and English meaning</strong>, with the authentic hadith, memorization tips, and how to use each name in dua.</p>

          <p>The Prophet Muhammad ﷺ said: <strong>"Allah has ninety-nine names, one hundred less one. Whoever memorizes them will enter Paradise."</strong> (Bukhari & Muslim)</p>

          <div class="highlight-box">
            <strong>Quick answer for searchers:</strong> The 99 Names of Allah are called <strong>Asmaul Husna</strong>, meaning "The Most Beautiful Names." They describe Allah's perfect attributes, including His mercy, knowledge, power, forgiveness, protection, and guidance. Below you will find the complete <strong>99 Names of Allah with Arabic text, transliteration, English meaning, benefits, and memorization tips</strong>.
          </div>

          <!-- Quick Reference Table -->
          <div style="background:var(--ivory);border:1px solid var(--border);border-radius:14px;padding:24px;margin:28px 0;">
            <h2 style="font-size:1.2rem;margin:0 0 16px;color:var(--charcoal);">Quick Reference: 10 Most Important Names of Allah</h2>
            <div style="overflow-x:auto;">
              <table style="width:100%;border-collapse:collapse;font-size:.92rem;">
                <thead>
                  <tr style="background:var(--emerald);color:#fff;">
                    <th style="padding:10px 12px;text-align:left;border-radius:8px 0 0 0;">#</th>
                    <th style="padding:10px 12px;text-align:right;">Arabic</th>
                    <th style="padding:10px 12px;text-align:left;">Name</th>
                    <th style="padding:10px 12px;text-align:left;border-radius:0 8px 0 0;">English Meaning</th>
                  </tr>
                </thead>
                <tbody>
                  <tr style="border-bottom:1px solid var(--border);"><td style="padding:9px 12px;">1</td><td style="padding:9px 12px;text-align:right;font-family:'Amiri',serif;font-size:1.2rem;">اللَّهُ</td><td style="padding:9px 12px;color:var(--emerald);font-weight:700;">Allah</td><td style="padding:9px 12px;color:var(--muted);">The One True God</td></tr>
                  <tr style="border-bottom:1px solid var(--border);background:rgba(10,110,79,.03);"><td style="padding:9px 12px;">2</td><td style="padding:9px 12px;text-align:right;font-family:'Amiri',serif;font-size:1.2rem;">الرَّحْمَنُ</td><td style="padding:9px 12px;color:var(--emerald);font-weight:700;">Ar-Rahman</td><td style="padding:9px 12px;color:var(--muted);">The Most Gracious</td></tr>
                  <tr style="border-bottom:1px solid var(--border);"><td style="padding:9px 12px;">3</td><td style="padding:9px 12px;text-align:right;font-family:'Amiri',serif;font-size:1.2rem;">الرَّحِيمُ</td><td style="padding:9px 12px;color:var(--emerald);font-weight:700;">Ar-Raheem</td><td style="padding:9px 12px;color:var(--muted);">The Most Merciful</td></tr>
                  <tr style="border-bottom:1px solid var(--border);background:rgba(10,110,79,.03);"><td style="padding:9px 12px;">7</td><td style="padding:9px 12px;text-align:right;font-family:'Amiri',serif;font-size:1.2rem;">الْمُؤْمِنُ</td><td style="padding:9px 12px;color:var(--emerald);font-weight:700;">Al-Mu'min</td><td style="padding:9px 12px;color:var(--muted);">The Guardian of Faith</td></tr>
                  <tr style="border-bottom:1px solid var(--border);"><td style="padding:9px 12px;">20</td><td style="padding:9px 12px;text-align:right;font-family:'Amiri',serif;font-size:1.2rem;">الْعَلِيمُ</td><td style="padding:9px 12px;color:var(--emerald);font-weight:700;">Al-Alim</td><td style="padding:9px 12px;color:var(--muted);">The All-Knowing</td></tr>
                  <tr style="border-bottom:1px solid var(--border);background:rgba(10,110,79,.03);"><td style="padding:9px 12px;">35</td><td style="padding:9px 12px;text-align:right;font-family:'Amiri',serif;font-size:1.2rem;">الْغَفُورُ</td><td style="padding:9px 12px;color:var(--emerald);font-weight:700;">Al-Ghafur</td><td style="padding:9px 12px;color:var(--muted);">The All-Forgiving</td></tr>
                  <tr style="border-bottom:1px solid var(--border);"><td style="padding:9px 12px;">45</td><td style="padding:9px 12px;text-align:right;font-family:'Amiri',serif;font-size:1.2rem;">الْمُجِيبُ</td><td style="padding:9px 12px;color:var(--emerald);font-weight:700;">Al-Mujib</td><td style="padding:9px 12px;color:var(--muted);">The Responsive (answers dua)</td></tr>
                  <tr style="border-bottom:1px solid var(--border);background:rgba(10,110,79,.03);"><td style="padding:9px 12px;">63</td><td style="padding:9px 12px;text-align:right;font-family:'Amiri',serif;font-size:1.2rem;">الْحَيُّ</td><td style="padding:9px 12px;color:var(--emerald);font-weight:700;">Al-Hayy</td><td style="padding:9px 12px;color:var(--muted);">The Ever-Living</td></tr>
                  <tr style="border-bottom:1px solid var(--border);"><td style="padding:9px 12px;">94</td><td style="padding:9px 12px;text-align:right;font-family:'Amiri',serif;font-size:1.2rem;">النُّورُ</td><td style="padding:9px 12px;color:var(--emerald);font-weight:700;">An-Nur</td><td style="padding:9px 12px;color:var(--muted);">The Light</td></tr>
                  <tr><td style="padding:9px 12px;">95</td><td style="padding:9px 12px;text-align:right;font-family:'Amiri',serif;font-size:1.2rem;">الْهَادِي</td><td style="padding:9px 12px;color:var(--emerald);font-weight:700;">Al-Hadi</td><td style="padding:9px 12px;color:var(--muted);">The Guide</td></tr>
                </tbody>
              </table>
            </div>
            <p style="margin:12px 0 0;font-size:.82rem;color:var(--muted);">Scroll down for the <strong>complete list of all 99 Names</strong> with Arabic, transliteration, and full English meaning.</p>
          </div>

          <div class="gold-box">
            <strong>📖 The Hadith on Asmaul Husna:</strong> The Prophet ﷺ said: <em>"Inna lillahi tis'atan wa tis'eena isma, mi'atan illa wahida, man ahsaha dakhala al-jannah."</em> — "Allah has ninety-nine names, one hundred minus one. Whoever memorizes them will enter Paradise." (Sahih Bukhari, Hadith 2736; Sahih Muslim, Hadith 2677)
          </div>

          <p>Scholars explain that "memorizing" (ahsaha) means <strong>understanding, reflecting on, and living by</strong> the meanings — not just reciting the names. Each name of Allah is a doorway to deeper faith, better worship, and more sincere dua.</p>

          <!-- =================== NAMES 1-10 =================== -->
          <div class="category-header">
            <i class="fas fa-heart" style="font-size:1.3rem;"></i>
            <div><h3>Names of Mercy & Compassion (1–10)</h3></div>
          </div>

          <div class="names-grid">
            <div class="name-card">
              <div class="name-num">1</div>
              <div>
                <div class="name-arabic">اللَّهُ</div>
                <div class="name-roman">Allah</div>
                <div class="name-meaning">The One True God — the proper name of the Creator, encompassing all divine attributes.</div>
              </div>
            </div>
            <div class="name-card">
              <div class="name-num">2</div>
              <div>
                <div class="name-arabic">الرَّحْمَنُ</div>
                <div class="name-roman">Ar-Rahman</div>
                <div class="name-meaning">The Most Gracious — He whose mercy encompasses all of creation in this world.</div>
              </div>
            </div>
            <div class="name-card">
              <div class="name-num">3</div>
              <div>
                <div class="name-arabic">الرَّحِيمُ</div>
                <div class="name-roman">Ar-Raheem</div>
                <div class="name-meaning">The Most Merciful — He who bestows special mercy on the believers in the Hereafter.</div>
              </div>
            </div>
            <div class="name-card">
              <div class="name-num">4</div>
              <div>
                <div class="name-arabic">الْمَلِكُ</div>
                <div class="name-roman">Al-Malik</div>
                <div class="name-meaning">The King — the absolute Sovereign over all creation, without partner or limitation.</div>
              </div>
            </div>
            <div class="name-card">
              <div class="name-num">5</div>
              <div>
                <div class="name-arabic">الْقُدُّوسُ</div>
                <div class="name-roman">Al-Quddus</div>
                <div class="name-meaning">The Holy — perfectly pure, free from all defect, fault, or imperfection.</div>
              </div>
            </div>
            <div class="name-card">
              <div class="name-num">6</div>
              <div>
                <div class="name-arabic">السَّلَامُ</div>
                <div class="name-roman">As-Salam</div>
                <div class="name-meaning">The Source of Peace — He grants peace and safety; all true peace flows from Him alone.</div>
              </div>
            </div>
            <div class="name-card">
              <div class="name-num">7</div>
              <div>
                <div class="name-arabic">الْمُؤْمِنُ</div>
                <div class="name-roman">Al-Mu'min</div>
                <div class="name-meaning">The Guardian of Faith — He who affirms the truth and gives security to His believers.</div>
              </div>
            </div>
            <div class="name-card">
              <div class="name-num">8</div>
              <div>
                <div class="name-arabic">الْمُهَيْمِنُ</div>
                <div class="name-roman">Al-Muhaymin</div>
                <div class="name-meaning">The Protector — He who watches over, guards, and preserves all things perfectly.</div>
              </div>
            </div>
            <div class="name-card">
              <div class="name-num">9</div>
              <div>
                <div class="name-arabic">الْعَزِيزُ</div>
                <div class="name-roman">Al-Aziz</div>
                <div class="name-meaning">The Almighty — all-powerful, invincible, and undefeatable in His might and glory.</div>
              </div>
            </div>
            <div class="name-card">
              <div class="name-num">10</div>
              <div>
                <div class="name-arabic">الْجَبَّارُ</div>
                <div class="name-roman">Al-Jabbar</div>
                <div class="name-meaning">The Compeller — who compels and repairs what is broken, restoring all things by His will.</div>
              </div>
            </div>
          </div>

          <!-- =================== NAMES 11-25 =================== -->
          <div class="category-header">
            <i class="fas fa-wand-magic-sparkles" style="font-size:1.3rem;"></i>
            <div><h3>Names of Greatness & Creation (11–25)</h3></div>
          </div>

          <div class="names-grid">
            <div class="name-card">
              <div class="name-num">11</div>
              <div>
                <div class="name-arabic">الْمُتَكَبِّرُ</div>
                <div class="name-roman">Al-Mutakabbir</div>
                <div class="name-meaning">The Supreme — supremely great, above all imperfection and above all of His creation.</div>
              </div>
            </div>
            <div class="name-card">
              <div class="name-num">12</div>
              <div>
                <div class="name-arabic">الْخَالِقُ</div>
                <div class="name-roman">Al-Khaliq</div>
                <div class="name-meaning">The Creator — who creates from nothing, bringing all existence into being by His will.</div>
              </div>
            </div>
            <div class="name-card">
              <div class="name-num">13</div>
              <div>
                <div class="name-arabic">الْبَارِئُ</div>
                <div class="name-roman">Al-Bari'</div>
                <div class="name-meaning">The Originator — who shapes and distinguishes each of His creatures in unique forms.</div>
              </div>
            </div>
            <div class="name-card">
              <div class="name-num">14</div>
              <div>
                <div class="name-arabic">الْمُصَوِّرُ</div>
                <div class="name-roman">Al-Musawwir</div>
                <div class="name-meaning">The Fashioner of Forms — who gives every created thing its unique shape and form.</div>
              </div>
            </div>
            <div class="name-card">
              <div class="name-num">15</div>
              <div>
                <div class="name-arabic">الْغَفَّارُ</div>
                <div class="name-roman">Al-Ghaffar</div>
                <div class="name-meaning">The Ever-Forgiving — who forgives sins again and again, covering the sins of His servants.</div>
              </div>
            </div>
            <div class="name-card">
              <div class="name-num">16</div>
              <div>
                <div class="name-arabic">الْقَهَّارُ</div>
                <div class="name-roman">Al-Qahhar</div>
                <div class="name-meaning">The All-Subduer — who overcomes and subjugates all of creation to His will.</div>
              </div>
            </div>
            <div class="name-card">
              <div class="name-num">17</div>
              <div>
                <div class="name-arabic">الْوَهَّابُ</div>
                <div class="name-roman">Al-Wahhab</div>
                <div class="name-meaning">The Bestower — who gives freely and generously without measure or expectation.</div>
              </div>
            </div>
            <div class="name-card">
              <div class="name-num">18</div>
              <div>
                <div class="name-arabic">الرَّزَّاقُ</div>
                <div class="name-roman">Ar-Razzaq</div>
                <div class="name-meaning">The Provider — who provides sustenance for all creatures without exception or end.</div>
              </div>
            </div>
            <div class="name-card">
              <div class="name-num">19</div>
              <div>
                <div class="name-arabic">الْفَتَّاحُ</div>
                <div class="name-roman">Al-Fattah</div>
                <div class="name-meaning">The Opener — who opens all doors of mercy, provision, and victory for His servants.</div>
              </div>
            </div>
            <div class="name-card">
              <div class="name-num">20</div>
              <div>
                <div class="name-arabic">الْعَلِيمُ</div>
                <div class="name-roman">Al-Alim</div>
                <div class="name-meaning">The All-Knowing — whose knowledge encompasses everything seen and unseen, past and future.</div>
              </div>
            </div>
            <div class="name-card">
              <div class="name-num">21</div>
              <div>
                <div class="name-arabic">الْقَابِضُ</div>
                <div class="name-roman">Al-Qabid</div>
                <div class="name-meaning">The Withholder — who withholds and constricts according to His wisdom and mercy.</div>
              </div>
            </div>
            <div class="name-card">
              <div class="name-num">22</div>
              <div>
                <div class="name-arabic">الْبَاسِطُ</div>
                <div class="name-roman">Al-Basit</div>
                <div class="name-meaning">The Extender — who extends and expands provision and mercy to whom He wills.</div>
              </div>
            </div>
            <div class="name-card">
              <div class="name-num">23</div>
              <div>
                <div class="name-arabic">الْخَافِضُ</div>
                <div class="name-roman">Al-Khafid</div>
                <div class="name-meaning">The Abaser — who lowers those who are arrogant and humbles the oppressor.</div>
              </div>
            </div>
            <div class="name-card">
              <div class="name-num">24</div>
              <div>
                <div class="name-arabic">الرَّافِعُ</div>
                <div class="name-roman">Ar-Rafi'</div>
                <div class="name-meaning">The Exalter — who elevates and honors whom He wills, raising the believer in rank.</div>
              </div>
            </div>
            <div class="name-card">
              <div class="name-num">25</div>
              <div>
                <div class="name-arabic">الْمُعِزُّ</div>
                <div class="name-roman">Al-Mu'izz</div>
                <div class="name-meaning">The Bestower of Honor — who gives might and honor to those He chooses from His servants.</div>
              </div>
            </div>
          </div>

          <!-- =================== NAMES 26-50 =================== -->
          <div class="category-header">
            <i class="fas fa-eye" style="font-size:1.3rem;"></i>
            <div><h3>Names of Knowledge & Perception (26–50)</h3></div>
          </div>

          <div class="names-grid">
            <div class="name-card">
              <div class="name-num">26</div>
              <div>
                <div class="name-arabic">الْمُذِلُّ</div>
                <div class="name-roman">Al-Mudhill</div>
                <div class="name-meaning">The Humiliator — who humbles and disgraces the arrogant and those who transgress.</div>
              </div>
            </div>
            <div class="name-card">
              <div class="name-num">27</div>
              <div>
                <div class="name-arabic">السَّمِيعُ</div>
                <div class="name-roman">As-Sami'</div>
                <div class="name-meaning">The All-Hearing — who hears every sound, prayer, and whisper without exception.</div>
              </div>
            </div>
            <div class="name-card">
              <div class="name-num">28</div>
              <div>
                <div class="name-arabic">الْبَصِيرُ</div>
                <div class="name-roman">Al-Basir</div>
                <div class="name-meaning">The All-Seeing — who sees everything, visible and invisible, throughout all existence.</div>
              </div>
            </div>
            <div class="name-card">
              <div class="name-num">29</div>
              <div>
                <div class="name-arabic">الْحَكَمُ</div>
                <div class="name-roman">Al-Hakam</div>
                <div class="name-meaning">The Judge — whose judgments are perfect, just, and final in all matters.</div>
              </div>
            </div>
            <div class="name-card">
              <div class="name-num">30</div>
              <div>
                <div class="name-arabic">الْعَدْلُ</div>
                <div class="name-roman">Al-Adl</div>
                <div class="name-meaning">The Just — perfectly fair and equitable, never wronging any of His creation.</div>
              </div>
            </div>
            <div class="name-card">
              <div class="name-num">31</div>
              <div>
                <div class="name-arabic">اللَّطِيفُ</div>
                <div class="name-roman">Al-Latif</div>
                <div class="name-meaning">The Subtle One — who is aware of the finest details and is gentle with His servants.</div>
              </div>
            </div>
            <div class="name-card">
              <div class="name-num">32</div>
              <div>
                <div class="name-arabic">الْخَبِيرُ</div>
                <div class="name-roman">Al-Khabir</div>
                <div class="name-meaning">The All-Aware — who has perfect awareness and knowledge of all inner and outer states.</div>
              </div>
            </div>
            <div class="name-card">
              <div class="name-num">33</div>
              <div>
                <div class="name-arabic">الْحَلِيمُ</div>
                <div class="name-roman">Al-Halim</div>
                <div class="name-meaning">The Forbearing — who does not hasten punishment despite witnessing all disobedience.</div>
              </div>
            </div>
            <div class="name-card">
              <div class="name-num">34</div>
              <div>
                <div class="name-arabic">الْعَظِيمُ</div>
                <div class="name-roman">Al-Azim</div>
                <div class="name-meaning">The Magnificent — whose greatness cannot be comprehended by any created mind.</div>
              </div>
            </div>
            <div class="name-card">
              <div class="name-num">35</div>
              <div>
                <div class="name-arabic">الْغَفُورُ</div>
                <div class="name-roman">Al-Ghafur</div>
                <div class="name-meaning">The All-Forgiving — who pardons sins completely and covers the faults of His servants.</div>
              </div>
            </div>
            <div class="name-card">
              <div class="name-num">36</div>
              <div>
                <div class="name-arabic">الشَّكُورُ</div>
                <div class="name-roman">Ash-Shakur</div>
                <div class="name-meaning">The Appreciative — who appreciates even the smallest good deed and multiplies its reward.</div>
              </div>
            </div>
            <div class="name-card">
              <div class="name-num">37</div>
              <div>
                <div class="name-arabic">الْعَلِيُّ</div>
                <div class="name-roman">Al-Ali</div>
                <div class="name-meaning">The Most High — above all of His creation in essence, status, and attributes.</div>
              </div>
            </div>
            <div class="name-card">
              <div class="name-num">38</div>
              <div>
                <div class="name-arabic">الْكَبِيرُ</div>
                <div class="name-roman">Al-Kabir</div>
                <div class="name-meaning">The Greatest — the immeasurably great whose magnitude surpasses all understanding.</div>
              </div>
            </div>
            <div class="name-card">
              <div class="name-num">39</div>
              <div>
                <div class="name-arabic">الْحَفِيظُ</div>
                <div class="name-roman">Al-Hafiz</div>
                <div class="name-meaning">The Preserver — who guards and preserves all things perfectly throughout existence.</div>
              </div>
            </div>
            <div class="name-card">
              <div class="name-num">40</div>
              <div>
                <div class="name-arabic">الْمُقِيتُ</div>
                <div class="name-roman">Al-Muqit</div>
                <div class="name-meaning">The Nourisher — who provides and maintains the sustenance of every living creature.</div>
              </div>
            </div>
            <div class="name-card">
              <div class="name-num">41</div>
              <div>
                <div class="name-arabic">الْحَسِيبُ</div>
                <div class="name-roman">Al-Hasib</div>
                <div class="name-meaning">The Reckoner — who takes account of all deeds and is sufficient for His servants.</div>
              </div>
            </div>
            <div class="name-card">
              <div class="name-num">42</div>
              <div>
                <div class="name-arabic">الْجَلِيلُ</div>
                <div class="name-roman">Al-Jalil</div>
                <div class="name-meaning">The Majestic — possessing supreme majesty and sublime greatness in all things.</div>
              </div>
            </div>
            <div class="name-card">
              <div class="name-num">43</div>
              <div>
                <div class="name-arabic">الْكَرِيمُ</div>
                <div class="name-roman">Al-Karim</div>
                <div class="name-meaning">The Generous — the infinitely generous who gives without being asked and beyond expectation.</div>
              </div>
            </div>
            <div class="name-card">
              <div class="name-num">44</div>
              <div>
                <div class="name-arabic">الرَّقِيبُ</div>
                <div class="name-roman">Ar-Raqib</div>
                <div class="name-meaning">The Watchful — who watches over all things at all times, nothing escapes His sight.</div>
              </div>
            </div>
            <div class="name-card">
              <div class="name-num">45</div>
              <div>
                <div class="name-arabic">الْمُجِيبُ</div>
                <div class="name-roman">Al-Mujib</div>
                <div class="name-meaning">The Responsive — who answers every sincere prayer and supplication without fail.</div>
              </div>
            </div>
            <div class="name-card">
              <div class="name-num">46</div>
              <div>
                <div class="name-arabic">الْوَاسِعُ</div>
                <div class="name-roman">Al-Wasi'</div>
                <div class="name-meaning">The All-Encompassing — whose knowledge, mercy, and provision encompass all of creation.</div>
              </div>
            </div>
            <div class="name-card">
              <div class="name-num">47</div>
              <div>
                <div class="name-arabic">الْحَكِيمُ</div>
                <div class="name-roman">Al-Hakim</div>
                <div class="name-meaning">The All-Wise — who places everything in its perfect place with perfect wisdom.</div>
              </div>
            </div>
            <div class="name-card">
              <div class="name-num">48</div>
              <div>
                <div class="name-arabic">الْوَدُودُ</div>
                <div class="name-roman">Al-Wadud</div>
                <div class="name-meaning">The Loving — who loves His righteous servants with a love surpassing all else.</div>
              </div>
            </div>
            <div class="name-card">
              <div class="name-num">49</div>
              <div>
                <div class="name-arabic">الْمَجِيدُ</div>
                <div class="name-roman">Al-Majid</div>
                <div class="name-meaning">The Glorious — whose glory and excellence are beyond the imagination of creation.</div>
              </div>
            </div>
            <div class="name-card">
              <div class="name-num">50</div>
              <div>
                <div class="name-arabic">الْبَاعِثُ</div>
                <div class="name-roman">Al-Ba'ith</div>
                <div class="name-meaning">The Resurrector — who will raise all of creation to life again on the Day of Judgment.</div>
              </div>
            </div>
          </div>

          <!-- =================== NAMES 51-75 =================== -->
          <div class="category-header">
            <i class="fas fa-infinity" style="font-size:1.3rem;"></i>
            <div><h3>Names of Power & Eternity (51–75)</h3></div>
          </div>

          <div class="names-grid">
            <div class="name-card">
              <div class="name-num">51</div>
              <div>
                <div class="name-arabic">الشَّهِيدُ</div>
                <div class="name-roman">Ash-Shahid</div>
                <div class="name-meaning">The Witness — who witnesses all things, seen and unseen, in every moment.</div>
              </div>
            </div>
            <div class="name-card">
              <div class="name-num">52</div>
              <div>
                <div class="name-arabic">الْحَقُّ</div>
                <div class="name-roman">Al-Haqq</div>
                <div class="name-meaning">The Truth — the ultimate reality whose existence is absolute and undeniable.</div>
              </div>
            </div>
            <div class="name-card">
              <div class="name-num">53</div>
              <div>
                <div class="name-arabic">الْوَكِيلُ</div>
                <div class="name-roman">Al-Wakil</div>
                <div class="name-meaning">The Trustee — on whom all affairs can be entrusted; He is sufficient for His servants.</div>
              </div>
            </div>
            <div class="name-card">
              <div class="name-num">54</div>
              <div>
                <div class="name-arabic">الْقَوِيُّ</div>
                <div class="name-roman">Al-Qawi</div>
                <div class="name-meaning">The All-Strong — possessing perfect, complete, and unlimited strength in all things.</div>
              </div>
            </div>
            <div class="name-card">
              <div class="name-num">55</div>
              <div>
                <div class="name-arabic">الْمَتِينُ</div>
                <div class="name-roman">Al-Matin</div>
                <div class="name-meaning">The Firm — who is extremely firm, steadfast, and unshakeable in all His actions.</div>
              </div>
            </div>
            <div class="name-card">
              <div class="name-num">56</div>
              <div>
                <div class="name-arabic">الْوَلِيُّ</div>
                <div class="name-roman">Al-Wali</div>
                <div class="name-meaning">The Protecting Friend — the guardian and ally of the believers in all circumstances.</div>
              </div>
            </div>
            <div class="name-card">
              <div class="name-num">57</div>
              <div>
                <div class="name-arabic">الْحَمِيدُ</div>
                <div class="name-roman">Al-Hamid</div>
                <div class="name-meaning">The Praiseworthy — who is deserving of all praise and gratitude in every situation.</div>
              </div>
            </div>
            <div class="name-card">
              <div class="name-num">58</div>
              <div>
                <div class="name-arabic">الْمُحْصِي</div>
                <div class="name-roman">Al-Muhsi</div>
                <div class="name-meaning">The Counter — who has enumerated and counted all things to their precise number.</div>
              </div>
            </div>
            <div class="name-card">
              <div class="name-num">59</div>
              <div>
                <div class="name-arabic">الْمُبْدِئُ</div>
                <div class="name-roman">Al-Mubdi'</div>
                <div class="name-meaning">The Originator — who originated all of creation for the very first time from nothing.</div>
              </div>
            </div>
            <div class="name-card">
              <div class="name-num">60</div>
              <div>
                <div class="name-arabic">الْمُعِيدُ</div>
                <div class="name-roman">Al-Mu'id</div>
                <div class="name-meaning">The Restorer — who will restore creation to life after its destruction on Judgment Day.</div>
              </div>
            </div>
            <div class="name-card">
              <div class="name-num">61</div>
              <div>
                <div class="name-arabic">الْمُحْيِي</div>
                <div class="name-roman">Al-Muhyi</div>
                <div class="name-meaning">The Giver of Life — who gives life to all living creatures and revives the dead.</div>
              </div>
            </div>
            <div class="name-card">
              <div class="name-num">62</div>
              <div>
                <div class="name-arabic">الْمُمِيتُ</div>
                <div class="name-roman">Al-Mumit</div>
                <div class="name-meaning">The Creator of Death — who causes death when He wills and for whom it is decreed.</div>
              </div>
            </div>
            <div class="name-card">
              <div class="name-num">63</div>
              <div>
                <div class="name-arabic">الْحَيُّ</div>
                <div class="name-roman">Al-Hayy</div>
                <div class="name-meaning">The Ever-Living — who has always existed and will always exist, with no end.</div>
              </div>
            </div>
            <div class="name-card">
              <div class="name-num">64</div>
              <div>
                <div class="name-arabic">الْقَيُّومُ</div>
                <div class="name-roman">Al-Qayyum</div>
                <div class="name-meaning">The Self-Subsisting — who sustains all things and needs nothing to sustain Himself.</div>
              </div>
            </div>
            <div class="name-card">
              <div class="name-num">65</div>
              <div>
                <div class="name-arabic">الْوَاجِدُ</div>
                <div class="name-roman">Al-Wajid</div>
                <div class="name-meaning">The Finder — who finds and provides all things; nothing is hidden or lost from Him.</div>
              </div>
            </div>
            <div class="name-card">
              <div class="name-num">66</div>
              <div>
                <div class="name-arabic">الْمَاجِدُ</div>
                <div class="name-roman">Al-Majid</div>
                <div class="name-meaning">The Noble — of supreme nobility, honor, and excellence beyond all imagination.</div>
              </div>
            </div>
            <div class="name-card">
              <div class="name-num">67</div>
              <div>
                <div class="name-arabic">الْوَاحِدُ</div>
                <div class="name-roman">Al-Wahid</div>
                <div class="name-meaning">The One — the singular, unique One, without partner, peer, or equal in any way.</div>
              </div>
            </div>
            <div class="name-card">
              <div class="name-num">68</div>
              <div>
                <div class="name-arabic">الْأَحَدُ</div>
                <div class="name-roman">Al-Ahad</div>
                <div class="name-meaning">The Unique — absolutely indivisible and singular; the Surah Al-Ikhlas declares this.</div>
              </div>
            </div>
            <div class="name-card">
              <div class="name-num">69</div>
              <div>
                <div class="name-arabic">الصَّمَدُ</div>
                <div class="name-roman">As-Samad</div>
                <div class="name-meaning">The Eternal — upon whom all of creation depends while He depends on nothing.</div>
              </div>
            </div>
            <div class="name-card">
              <div class="name-num">70</div>
              <div>
                <div class="name-arabic">الْقَادِرُ</div>
                <div class="name-roman">Al-Qadir</div>
                <div class="name-meaning">The All-Capable — who has perfect power and ability over absolutely everything.</div>
              </div>
            </div>
            <div class="name-card">
              <div class="name-num">71</div>
              <div>
                <div class="name-arabic">الْمُقْتَدِرُ</div>
                <div class="name-roman">Al-Muqtadir</div>
                <div class="name-meaning">The All-Powerful — the all-prevailing force who executes all things by His supreme power.</div>
              </div>
            </div>
            <div class="name-card">
              <div class="name-num">72</div>
              <div>
                <div class="name-arabic">الْمُقَدِّمُ</div>
                <div class="name-roman">Al-Muqaddim</div>
                <div class="name-meaning">The Expediter — who hastens or brings forward things according to His perfect will.</div>
              </div>
            </div>
            <div class="name-card">
              <div class="name-num">73</div>
              <div>
                <div class="name-arabic">الْمُؤَخِّرُ</div>
                <div class="name-roman">Al-Mu'akhkhir</div>
                <div class="name-meaning">The Delayer — who postpones and delays things according to His wisdom and decree.</div>
              </div>
            </div>
            <div class="name-card">
              <div class="name-num">74</div>
              <div>
                <div class="name-arabic">الْأَوَّلُ</div>
                <div class="name-roman">Al-Awwal</div>
                <div class="name-meaning">The First — before whom there was nothing; He existed before all of creation.</div>
              </div>
            </div>
            <div class="name-card">
              <div class="name-num">75</div>
              <div>
                <div class="name-arabic">الْآخِرُ</div>
                <div class="name-roman">Al-Akhir</div>
                <div class="name-meaning">The Last — after whom there will be nothing; He will remain after all creation ends.</div>
              </div>
            </div>
          </div>

          <!-- =================== NAMES 76-99 =================== -->
          <div class="category-header">
            <i class="fas fa-moon" style="font-size:1.3rem;"></i>
            <div><h3>Names of Forgiveness & Guidance (76–99)</h3></div>
          </div>

          <div class="names-grid">
            <div class="name-card">
              <div class="name-num">76</div>
              <div>
                <div class="name-arabic">الظَّاهِرُ</div>
                <div class="name-roman">Az-Zahir</div>
                <div class="name-meaning">The Manifest — who is above all things and evident through His signs in creation.</div>
              </div>
            </div>
            <div class="name-card">
              <div class="name-num">77</div>
              <div>
                <div class="name-arabic">الْبَاطِنُ</div>
                <div class="name-roman">Al-Batin</div>
                <div class="name-meaning">The Hidden — who is hidden from creation's perception in His divine essence.</div>
              </div>
            </div>
            <div class="name-card">
              <div class="name-num">78</div>
              <div>
                <div class="name-arabic">الْوَالِي</div>
                <div class="name-roman">Al-Wali</div>
                <div class="name-meaning">The Governor — who governs and manages all affairs of the universe with perfection.</div>
              </div>
            </div>
            <div class="name-card">
              <div class="name-num">79</div>
              <div>
                <div class="name-arabic">الْمُتَعَالِي</div>
                <div class="name-roman">Al-Muta'ali</div>
                <div class="name-meaning">The Most Exalted — supremely exalted above all that creation can comprehend or imagine.</div>
              </div>
            </div>
            <div class="name-card">
              <div class="name-num">80</div>
              <div>
                <div class="name-arabic">الْبَرُّ</div>
                <div class="name-roman">Al-Barr</div>
                <div class="name-meaning">The Source of All Good — the doer of good, benevolent and kind to all His servants.</div>
              </div>
            </div>
            <div class="name-card">
              <div class="name-num">81</div>
              <div>
                <div class="name-arabic">التَّوَّابُ</div>
                <div class="name-roman">At-Tawwab</div>
                <div class="name-meaning">The Ever-Pardoning — who accepts repentance and keeps accepting it no matter how many times.</div>
              </div>
            </div>
            <div class="name-card">
              <div class="name-num">82</div>
              <div>
                <div class="name-arabic">الْمُنْتَقِمُ</div>
                <div class="name-roman">Al-Muntaqim</div>
                <div class="name-meaning">The Avenger — who avenges the oppressed and delivers punishment to the oppressor.</div>
              </div>
            </div>
            <div class="name-card">
              <div class="name-num">83</div>
              <div>
                <div class="name-arabic">الْعَفُوُّ</div>
                <div class="name-roman">Al-Afuw</div>
                <div class="name-meaning">The Pardoner — who erases sins completely as if they never existed, granting full pardon.</div>
              </div>
            </div>
            <div class="name-card">
              <div class="name-num">84</div>
              <div>
                <div class="name-arabic">الرَّءُوفُ</div>
                <div class="name-roman">Ar-Ra'uf</div>
                <div class="name-meaning">The Most Compassionate — intensely compassionate and full of tenderness to His servants.</div>
              </div>
            </div>
            <div class="name-card">
              <div class="name-num">85</div>
              <div>
                <div class="name-arabic">مَالِكُ الْمُلْكِ</div>
                <div class="name-roman">Malik-ul-Mulk</div>
                <div class="name-meaning">Owner of All Sovereignty — the absolute master of all kingdoms and all dominion.</div>
              </div>
            </div>
            <div class="name-card">
              <div class="name-num">86</div>
              <div>
                <div class="name-arabic">ذُو الْجَلَالِ وَالْإِكْرَامِ</div>
                <div class="name-roman">Dhul-Jalali wal-Ikram</div>
                <div class="name-meaning">Lord of Majesty and Generosity — possessing both supreme majesty and infinite generosity.</div>
              </div>
            </div>
            <div class="name-card">
              <div class="name-num">87</div>
              <div>
                <div class="name-arabic">الْمُقْسِطُ</div>
                <div class="name-roman">Al-Muqsit</div>
                <div class="name-meaning">The Equitable — who establishes absolute justice and fairness in all matters.</div>
              </div>
            </div>
            <div class="name-card">
              <div class="name-num">88</div>
              <div>
                <div class="name-arabic">الْجَامِعُ</div>
                <div class="name-roman">Al-Jami'</div>
                <div class="name-meaning">The Gatherer — who will gather all of creation together on the Day of Resurrection.</div>
              </div>
            </div>
            <div class="name-card">
              <div class="name-num">89</div>
              <div>
                <div class="name-arabic">الْغَنِيُّ</div>
                <div class="name-roman">Al-Ghani</div>
                <div class="name-meaning">The Self-Sufficient — who has no need of anything while all creation is in need of Him.</div>
              </div>
            </div>
            <div class="name-card">
              <div class="name-num">90</div>
              <div>
                <div class="name-arabic">الْمُغْنِي</div>
                <div class="name-roman">Al-Mughni</div>
                <div class="name-meaning">The Enricher — who enriches whom He wills and frees them from all need and want.</div>
              </div>
            </div>
            <div class="name-card">
              <div class="name-num">91</div>
              <div>
                <div class="name-arabic">الْمَانِعُ</div>
                <div class="name-roman">Al-Mani'</div>
                <div class="name-meaning">The Preventer — who withholds harm and prevents what He wills from reaching creation.</div>
              </div>
            </div>
            <div class="name-card">
              <div class="name-num">92</div>
              <div>
                <div class="name-arabic">الضَّارُّ</div>
                <div class="name-roman">Ad-Darr</div>
                <div class="name-meaning">The Creator of Harm — who creates harm as a test, lesson, or consequence of deeds.</div>
              </div>
            </div>
            <div class="name-card">
              <div class="name-num">93</div>
              <div>
                <div class="name-arabic">النَّافِعُ</div>
                <div class="name-roman">An-Nafi'</div>
                <div class="name-meaning">The Creator of Good — who creates benefit and goodness for His creation by His will.</div>
              </div>
            </div>
            <div class="name-card">
              <div class="name-num">94</div>
              <div>
                <div class="name-arabic">النُّورُ</div>
                <div class="name-roman">An-Nur</div>
                <div class="name-meaning">The Light — whose light illuminates the heavens, earth, and every believing heart.</div>
              </div>
            </div>
            <div class="name-card">
              <div class="name-num">95</div>
              <div>
                <div class="name-arabic">الْهَادِي</div>
                <div class="name-roman">Al-Hadi</div>
                <div class="name-meaning">The Guide — who guides His servants to truth, to the straight path, and to His pleasure.</div>
              </div>
            </div>
            <div class="name-card">
              <div class="name-num">96</div>
              <div>
                <div class="name-arabic">الْبَدِيعُ</div>
                <div class="name-roman">Al-Badi'</div>
                <div class="name-meaning">The Originator — who creates all things in a completely original, unprecedented manner.</div>
              </div>
            </div>
            <div class="name-card">
              <div class="name-num">97</div>
              <div>
                <div class="name-arabic">الْبَاقِي</div>
                <div class="name-roman">Al-Baqi</div>
                <div class="name-meaning">The Everlasting — who endures forever while all else perishes and passes away.</div>
              </div>
            </div>
            <div class="name-card">
              <div class="name-num">98</div>
              <div>
                <div class="name-arabic">الْوَارِثُ</div>
                <div class="name-roman">Al-Warith</div>
                <div class="name-meaning">The Inheritor — to whom all creation returns; He is the final inheritor of all things.</div>
              </div>
            </div>
            <div class="name-card">
              <div class="name-num">99</div>
              <div>
                <div class="name-arabic">الصَّبُورُ</div>
                <div class="name-roman">As-Sabur</div>
                <div class="name-meaning">The Patient — who does not hasten punishment, giving creation time to repent and return.</div>
              </div>
            </div>
          </div>

          <div class="highlight-box" style="margin-top:40px;">
            <strong>💡 How to Use Asmaul Husna in Dua:</strong><br>
            The Quran says: <em>"And to Allah belong the best names, so invoke Him by them."</em> (7:180). When making dua, call upon Allah by the name most relevant to your need: call upon Ar-Razzaq for provision, Al-Shafi for healing, Al-Ghafur for forgiveness, Al-Mujib for answered prayers.
          </div>

          <h2>How to Memorize the 99 Names of Allah</h2>
          <ul>
            <li><strong>Learn 3–5 names at a time</strong> with their meanings before moving to the next set</li>
            <li><strong>Recite them in your morning and evening dhikr</strong> — make it a daily habit</li>
            <li><strong>Use the names in your dua</strong> — this connects the name to your life and helps retention</li>
            <li><strong>Reflect on each name's meaning</strong> — understanding beats memorization alone</li>
            <li><strong>Teach your children</strong> — explaining to others deepens your own knowledge</li>
            <li><strong>Listen to nasheed</strong> with the 99 names — music and rhythm aid memory significantly</li>
          </ul>

          <h2>Frequently Asked Questions</h2>

          <div class="faq-item">
            <div class="faq-q"><span>What does Asmaul Husna mean?</span> <i class="fas fa-chevron-down"></i></div>
            <div class="faq-a">Asmaul Husna (الأسماء الحسنى) means "The Most Beautiful Names" in Arabic. It refers to the 99 divine names of Allah mentioned in the Quran and Sunnah. The word "husna" means beautiful, good, and excellent — reflecting that Allah's names are the most perfect and beautiful possible.</div>
          </div>

          <div class="faq-item">
            <div class="faq-q"><span>What is the hadith about the 99 Names?</span> <i class="fas fa-chevron-down"></i></div>
            <div class="faq-a">The Prophet Muhammad ﷺ said: "Inna lillahi tis'atan wa tis'eena isma, mi'atan illaa wahida, man ahsaha dakhala al-Jannah." — "Allah has ninety-nine names, one hundred less one. Whoever memorizes [and acts upon] them will enter Paradise." (Sahih Bukhari 2736, Sahih Muslim 2677)</div>
          </div>

          <div class="faq-item">
            <div class="faq-q"><span>What does "ahsaha" mean in the hadith?</span> <i class="fas fa-chevron-down"></i></div>
            <div class="faq-a">Scholars explain "ahsaha" (memorizes/enumerates) to include: (1) memorizing the names accurately, (2) understanding their meanings, (3) reflecting on them deeply, and (4) worshipping Allah according to what each name implies — for example, being grateful because He is Ash-Shakur, and seeking forgiveness because He is Al-Ghafur.</div>
          </div>

          <div class="faq-item">
            <div class="faq-q"><span>Which of the 99 Names appears most in the Quran?</span> <i class="fas fa-chevron-down"></i></div>
            <div class="faq-a">The name "Allah" appears over 2,600 times in the Quran. Among the attributes, Ar-Rahman and Ar-Raheem are mentioned most frequently — they open every surah of the Quran in Bismillah except Surah At-Tawbah. Al-Alim (the All-Knowing) and Al-Hakim (the All-Wise) are among the most frequently paired names.</div>
          </div>

          <div class="faq-item">
            <div class="faq-q"><span>Which name of Allah is for mercy?</span> <i class="fas fa-chevron-down"></i></div>
            <div class="faq-a">The primary names of Allah for mercy are Ar-Rahman (الرَّحْمَنُ) — The Most Gracious — and Ar-Raheem (الرَّحِيمُ) — The Most Merciful. Ar-Rahman describes Allah's mercy that covers all of creation in this world, while Ar-Raheem refers to the special mercy reserved for believers in the Hereafter. Other mercy-related names include Al-Barr (The Source of All Good), Al-Latif (The Gentle), and Ar-Ra'uf (The Most Compassionate).</div>
          </div>

          <div class="faq-item">
            <div class="faq-q"><span>Are there really 99 or 100 names of Allah?</span> <i class="fas fa-chevron-down"></i></div>
            <div class="faq-a">The hadith says "ninety-nine names, one hundred less one." This means there are exactly 99 names. Some searches use "100 names of Allah" but the authentic hadith (Bukhari 2736, Muslim 2677) confirms 99. Scholars note that Allah has other names not mentioned in this list — but this specific set of 99 names carries the special reward mentioned in the hadith for memorizing and acting upon them.</div>
          </div>

          <div class="faq-item">
            <div class="faq-q"><span>What is the meaning of Asma ul Husna in English?</span> <i class="fas fa-chevron-down"></i></div>
            <div class="faq-a">Asma ul Husna (الأسماء الحسنى) translates to "The Most Beautiful Names" in English. "Asma" means names, "ul" means "of the", and "Husna" means beautiful, excellent, or best. The phrase comes directly from the Quran (7:180): "And to Allah belong al-Asmaul Husna, so invoke Him by them." Every name of Allah reflects a perfect divine attribute.</div>
          </div>

          <div class="faq-item">
            <div class="faq-q"><span>How do you teach 99 names of Allah to children?</span> <i class="fas fa-chevron-down"></i></div>
            <div class="faq-a">The best way to teach Asmaul Husna to children: (1) Start with the most common names — Allah, Ar-Rahman, Ar-Raheem — which children already hear in Bismillah and Salah. (2) Teach 2-3 names per week with simple English meanings. (3) Connect names to stories — Al-Razzaq provides food, Al-Shafi heals sickness. (4) Use nasheed and songs with the names. (5) Enroll children in Islamic Studies classes where certified tutors teach Asmaul Husna as part of a structured curriculum. <a href="/online-quran-classes-for-kids" style="color:var(--emerald);font-weight:700;">Learn more about online Quran and Islamic Studies classes for kids →</a></div>
          </div>

          <div class="highlight-box" style="margin-top:32px;">
            <strong>Learn Islamic Studies & Quran at NoorPath Academy</strong><br>
            Our certified tutors teach Asmaul Husna, Quran recitation, Tajweed, daily duas, and complete Islamic Studies to children and adults worldwide.<br><br>
            <a href="/online-quran-classes#cta" style="color:var(--emerald);font-weight:700;">Book a free trial class →</a> &nbsp;|&nbsp;
            <a href="/online-quran-classes-for-kids" style="color:var(--emerald);font-weight:700;">Quran classes for kids →</a> &nbsp;|&nbsp;
            <a href="/blog/duas-for-kids-to-memorize" style="color:var(--emerald);font-weight:700;">40+ duas for kids →</a>
          </div>

          <div style="background:var(--ivory);border:1px solid var(--border);border-radius:14px;padding:22px 24px;margin:28px 0;">
            <h3 style="font-size:1rem;font-weight:800;margin:0 0 12px;color:var(--charcoal);">Related Islamic Learning Resources</h3>
            <ul style="margin:0;padding-left:20px;color:var(--muted);line-height:2;">
              <li><a href="/blog/how-to-pray-salah-step-by-step" style="color:var(--emerald);font-weight:600;">How to Pray Salah Step by Step — Complete Beginner's Guide</a></li>
              <li><a href="/blog/ayatul-kursi-arabic-english-benefits" style="color:var(--emerald);font-weight:600;">Ayatul Kursi — Arabic, Translation & Benefits</a></li>
              <li><a href="/blog/duas-for-kids-to-memorize" style="color:var(--emerald);font-weight:600;">20 Essential Duas for Kids to Memorize</a></li>
              <li><a href="/blog/dua-e-qunoot-arabic-english" style="color:var(--emerald);font-weight:600;">Dua e Qunoot — Arabic, English & How to Recite</a></li>
              <li><a href="/blog/how-to-teach-quran-to-kids" style="color:var(--emerald);font-weight:600;">How to Teach Quran to Kids — Parent's Guide</a></li>
            </ul>
          </div>
        </div>

        <div style="margin-top:56px;border-top:1px solid var(--border);padding-top:40px;">
          <h3 style="font-size:1.2rem;font-weight:700;margin-bottom:20px;">Related Articles</h3>
          <div class="row g-3">
            <div class="col-sm-6">
              <a href="/blog/ayatul-kursi-arabic-english-benefits" style="text-decoration:none;">
                <div class="blog-card">
                  <div class="blog-card-header" style="padding:20px 24px;"><span class="blog-tag">Quran</span><div style="color:var(--white);font-weight:700;font-size:.95rem;margin-top:8px;">Ayatul Kursi — Arabic, Translation & Benefits</div></div>
                  <div class="blog-card-body"><span class="read-more">Read <i class="fas fa-arrow-right ms-1"></i></span></div>
                </div>
              </a>
            </div>
            <div class="col-sm-6">
              <a href="/blog/surah-yaseen-arabic-english" style="text-decoration:none;">
                <div class="blog-card">
                  <div class="blog-card-header" style="padding:20px 24px;"><span class="blog-tag">Quran</span><div style="color:var(--white);font-weight:700;font-size:.95rem;margin-top:8px;">Surah Yaseen Full Arabic + Translation</div></div>
                  <div class="blog-card-body"><span class="read-more">Read <i class="fas fa-arrow-right ms-1"></i></span></div>
                </div>
              </a>
            </div>
            <div class="col-sm-6">
              <a href="/blog/duas-for-kids-to-memorize" style="text-decoration:none;">
                <div class="blog-card">
                  <div class="blog-card-header" style="padding:20px 24px;"><span class="blog-tag">Daily Duas</span><div style="color:var(--white);font-weight:700;font-size:.95rem;margin-top:8px;">20 Essential Duas for Kids to Memorize</div></div>
                  <div class="blog-card-body"><span class="read-more">Read <i class="fas fa-arrow-right ms-1"></i></span></div>
                </div>
              </a>
            </div>
            <div class="col-sm-6">
              <a href="/blog/tajweed-rules-complete-guide" style="text-decoration:none;">
                <div class="blog-card">
                  <div class="blog-card-header" style="padding:20px 24px;"><span class="blog-tag">Tajweed</span><div style="color:var(--white);font-weight:700;font-size:.95rem;margin-top:8px;">Tajweed Rules Complete Guide</div></div>
                  <div class="blog-card-body"><span class="read-more">Read <i class="fas fa-arrow-right ms-1"></i></span></div>
                </div>
              </a>`,
  },
  "alhamdulillah-meaning-in-english": {
    style: `.article-body { font-size: 1.05rem; line-height: 1.85; color: #374151; }
    .article-body h2 { font-size: 1.5rem; font-weight: 700; color: var(--charcoal); margin: 40px 0 16px; }
    .article-body h3 { font-size: 1.15rem; font-weight: 700; color: var(--emerald); margin: 24px 0 10px; }
    .article-body p { margin-bottom: 18px; }
    .article-body ul, .article-body ol { margin-bottom: 18px; padding-left: 24px; }
    .article-body li { margin-bottom: 8px; }
    .highlight-box { background: rgba(10,110,79,.06); border-left: 4px solid var(--emerald); border-radius: 8px; padding: 20px 24px; margin: 24px 0; }
    .gold-box { background: rgba(232,184,75,.08); border-left: 4px solid var(--gold); border-radius: 8px; padding: 20px 24px; margin: 24px 0; }

    /* Hero word display */
    .word-hero { text-align: center; padding: 48px 24px; background: linear-gradient(135deg, rgba(10,110,79,.04), rgba(10,110,79,.09)); border-radius: 20px; margin: 32px 0; border: 1px solid rgba(10,110,79,.12); }
    .word-arabic-hero { font-family: 'Amiri', serif; font-size: 4rem; color: var(--emerald); line-height: 1.2; margin-bottom: 16px; direction: rtl; }
    .word-roman-hero { font-size: 1.6rem; font-style: italic; color: #4b5563; margin-bottom: 12px; }
    .word-meaning-hero { font-size: 1.1rem; font-weight: 600; color: var(--charcoal); }

    /* Breakdown cards */
    .word-break-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; margin: 24px 0; }
    .word-break-card { background: var(--ivory); border: 1px solid var(--border); border-radius: 12px; padding: 20px 16px; text-align: center; }
    .wb-arabic { font-family: 'Amiri', serif; font-size: 1.8rem; color: var(--emerald); direction: rtl; margin-bottom: 8px; }
    .wb-roman { font-style: italic; color: #6b7280; font-size: .85rem; margin-bottom: 4px; }
    .wb-meaning { font-weight: 700; color: var(--charcoal); font-size: .9rem; }

    /* When to say grid */
    .when-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(220px, 1fr)); gap: 14px; margin: 20px 0; }
    .when-card { background: var(--ivory); border-radius: 12px; padding: 18px; border-left: 4px solid var(--emerald); }
    .when-emoji { font-size: 1.6rem; margin-bottom: 8px; }
    .when-title { font-weight: 700; color: var(--charcoal); font-size: .95rem; margin-bottom: 6px; }
    .when-hadith { font-size: .82rem; color: var(--muted); line-height: 1.5; }

    /* Quran references */
    .quran-ref { background: var(--ivory); border-radius: 12px; padding: 20px 24px; margin-bottom: 14px; border: 1px solid var(--border); }
    .quran-ref-arabic { font-family: 'Amiri', serif; font-size: 1.5rem; direction: rtl; text-align: right; color: var(--charcoal); margin-bottom: 8px; line-height: 1.8; }
    .quran-ref-translation { font-size: .92rem; color: #374151; font-style: italic; margin-bottom: 6px; }
    .quran-ref-source { font-size: .8rem; color: var(--emerald); font-weight: 700; }

    /* Comparison words */
    .four-dhikr { display: grid; grid-template-columns: repeat(2,1fr); gap: 14px; margin: 20px 0; }
    .dhikr-card { background: var(--ivory); border: 1px solid var(--border); border-radius: 12px; padding: 18px; text-align: center; }
    .dhikr-arabic { font-family: 'Amiri', serif; font-size: 1.4rem; color: var(--emerald); direction: rtl; margin-bottom: 6px; }
    .dhikr-roman { font-style: italic; color: #6b7280; font-size: .82rem; margin-bottom: 4px; }
    .dhikr-meaning { font-size: .82rem; color: var(--charcoal); font-weight: 600; }

    /* FAQ */
    .faq-item { border: 1px solid var(--border); border-radius: 10px; margin-bottom: 12px; overflow: hidden; }
    .faq-q { padding: 16px 20px; font-weight: 700; background: var(--ivory); color: var(--charcoal); display: flex; justify-content: space-between; align-items: center; }
    .faq-a { padding: 16px 20px; color: #374151; font-size: .95rem; line-height: 1.7; border-top: 1px solid var(--border); }

    @media (max-width: 576px) {
      .word-arabic-hero { font-size: 3rem; }
      .word-break-grid { grid-template-columns: repeat(2, 1fr); }
      .four-dhikr { grid-template-columns: 1fr; }
    }`,
    content: `<p><strong>Alhamdulillah</strong> (الحمد لله) is one of the most important and most spoken phrases in Islam. A Muslim says it dozens of times a day — after sneezing, after eating, after prayer, when asked how they are, and at every moment of gratitude. But what does it actually mean, and why is it so powerful?</p>

          <div class="word-hero">
            <div class="word-arabic-hero">الحَمْدُ لِلَّهِ</div>
            <div class="word-roman-hero">Al-hamdu lillāh</div>
            <div class="word-meaning-hero">"All praise and thanks belong to Allah"</div>
          </div>

          <!-- =================== MEANING BREAKDOWN =================== -->
          <h2>What Does Alhamdulillah Mean? (Word by Word)</h2>
          <p>The phrase consists of three Arabic components, each with a profound meaning:</p>

          <div class="word-break-grid">
            <div class="word-break-card">
              <div class="wb-arabic">الْ</div>
              <div class="wb-roman">Al-</div>
              <div class="wb-meaning">The definite article "The" — meaning ALL praise, not just some</div>
            </div>
            <div class="word-break-card">
              <div class="wb-arabic">حَمْدُ</div>
              <div class="wb-roman">Hamd</div>
              <div class="wb-meaning">Praise, gratitude, and glorification combined</div>
            </div>
            <div class="word-break-card">
              <div class="wb-arabic">لِلَّهِ</div>
              <div class="wb-roman">Lillāh</div>
              <div class="wb-meaning">Belongs to Allah — entirely, exclusively</div>
            </div>
          </div>

          <div class="highlight-box">
            <strong>Why "Al-Hamd" is deeper than just "praise":</strong><br>
            In Arabic, <em>hamd</em> combines three concepts: <strong>praise</strong> (madh), <strong>gratitude</strong> (shukr), and <strong>glorification</strong> (thana'). The "Al-" at the beginning makes it comprehensive — "ALL praise, ALL gratitude, ALL glory." This is why no single English word fully captures its meaning.
          </div>

          <p>When you say Alhamdulillah, you are declaring: <em>"Every single form of praise, gratitude, and glorification that exists — all of it belongs exclusively to Allah, not to any created thing."</em></p>

          <!-- =================== IN THE QURAN =================== -->
          <h2>Alhamdulillah in the Quran</h2>
          <p>The Quran opens with Alhamdulillah and it appears throughout in key places, showing its supreme importance:</p>

          <div class="quran-ref">
            <div class="quran-ref-arabic">الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ</div>
            <div class="quran-ref-translation">"All praise is due to Allah, Lord of all the worlds." — This is the second verse of Surah Al-Fatiha, which is recited in every rak'ah of every prayer. Every Muslim says Alhamdulillah at least 17 times daily in Salah alone.</div>
            <div class="quran-ref-source">📖 Quran 1:2 — Surah Al-Fatiha</div>
          </div>

          <div class="quran-ref">
            <div class="quran-ref-arabic">الْحَمْدُ لِلَّهِ الَّذِي خَلَقَ السَّمَاوَاتِ وَالْأَرْضَ وَجَعَلَ الظُّلُمَاتِ وَالنُّورَ</div>
            <div class="quran-ref-translation">"All praise is due to Allah, who created the heavens and the earth and made the darkness and the light." — Praising Allah for the miracle of creation itself.</div>
            <div class="quran-ref-source">📖 Quran 6:1 — Surah Al-An'am</div>
          </div>

          <div class="quran-ref">
            <div class="quran-ref-arabic">وَقَالُوا الْحَمْدُ لِلَّهِ الَّذِي هَدَانَا لِهَٰذَا</div>
            <div class="quran-ref-translation">"And they will say: All praise is due to Allah who guided us to this." — The inhabitants of Paradise will say Alhamdulillah upon entering it.</div>
            <div class="quran-ref-source">📖 Quran 7:43 — Surah Al-A'raf</div>
          </div>

          <div class="quran-ref">
            <div class="quran-ref-arabic">وَآخِرُ دَعْوَاهُمْ أَنِ الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ</div>
            <div class="quran-ref-translation">"And the last of their call will be: All praise is due to Allah, Lord of all the worlds." — The final dhikr of the people of Paradise.</div>
            <div class="quran-ref-source">📖 Quran 10:10 — Surah Yunus</div>
          </div>

          <!-- =================== HADITH BENEFITS =================== -->
          <h2>The Incredible Reward of Saying Alhamdulillah</h2>

          <div class="gold-box">
            <strong>⚖️ Hadith 1 — It Fills the Scale of Deeds:</strong><br>
            The Prophet ﷺ said: <em>"Purity is half of faith. Alhamdulillah fills the scale [of good deeds]. Subhanallah and Alhamdulillah together fill what is between the heavens and the earth."</em> — (Sahih Muslim 223)
          </div>

          <div class="gold-box">
            <strong>💎 Hadith 2 — Most Beloved Words to Allah:</strong><br>
            The Prophet ﷺ said: <em>"The most beloved words to Allah are four: Subhanallah, Alhamdulillah, La ilaha illallah, and Allahu Akbar. It does not matter with which you begin."</em> — (Sahih Muslim 2137)
          </div>

          <div class="gold-box">
            <strong>🌟 Hadith 3 — Best of Duas:</strong><br>
            The Prophet ﷺ said: <em>"The best dhikr (remembrance) is La ilaha illallah, and the best dua is Alhamdulillah."</em> — (Tirmidhi 3383, Ibn Majah 3800)
          </div>

          <div class="gold-box">
            <strong>🏡 Hadith 4 — At the Time of Loss:</strong><br>
            The Prophet ﷺ said: <em>"When a child of a servant dies, Allah says to the angels: 'Have you taken the child of My servant?' They say yes. Allah says: 'What did My servant say?' They say: 'He praised You (Alhamdulillah) and said Inna lillahi wa inna ilayhi raji'un.' Allah says: 'Build for My servant a house in Paradise and call it the House of Praise.'"</em> — (Tirmidhi 1021)
          </div>

          <!-- =================== WHEN TO SAY =================== -->
          <h2>When to Say Alhamdulillah — Complete Guide</h2>

          <div class="when-grid">
            <div class="when-card">
              <div class="when-emoji">🤧</div>
              <div class="when-title">After Sneezing</div>
              <div class="when-hadith">The Prophet ﷺ said: "When one of you sneezes, he should say Alhamdulillah." (Bukhari 6224) — The listener responds: "Yarhamukallah."</div>
            </div>
            <div class="when-card">
              <div class="when-emoji">🌅</div>
              <div class="when-title">When Waking Up</div>
              <div class="when-hadith">The Prophet ﷺ would say upon waking: "Alhamdulillah-il-ladhee ahyaanaa ba'da maa amaatanaa..." (Bukhari) — thanking Allah for giving life after sleep.</div>
            </div>
            <div class="when-card">
              <div class="when-emoji">🍽️</div>
              <div class="when-title">After Eating</div>
              <div class="when-hadith">After finishing a meal, say: "Alhamdulillah-il-ladhee at'amanee hadhaa wa razaqaneeh." — "Praise to Allah who fed me this and provided it for me." (Abu Dawud, Tirmidhi)</div>
            </div>
            <div class="when-card">
              <div class="when-emoji">🕌</div>
              <div class="when-title">After Prayer (Salah)</div>
              <div class="when-hadith">Say Alhamdulillah 33 times after each prayer as part of the post-salah dhikr — alongside Subhanallah (33x) and Allahu Akbar (34x). (Muslim 597)</div>
            </div>
            <div class="when-card">
              <div class="when-emoji">💬</div>
              <div class="when-title">When Asked "How Are You?"</div>
              <div class="when-hadith">Muslims respond to "Kaifa halak?" (How are you?) with "Alhamdulillah" — expressing that no matter the situation, Allah deserves all praise.</div>
            </div>
            <div class="when-card">
              <div class="when-emoji">🎉</div>
              <div class="when-title">Upon Good News</div>
              <div class="when-hadith">When receiving any good news — a birth, a blessing, success in an endeavor — saying Alhamdulillah acknowledges that all good comes from Allah.</div>
            </div>
            <div class="when-card">
              <div class="when-emoji">😔</div>
              <div class="when-title">In Times of Difficulty</div>
              <div class="when-hadith">Saying Alhamdulillah 'ala kulli hal (in all circumstances) is the sign of true iman. The Prophet ﷺ said: "Amazing is the affair of the believer — all of his affairs are good." (Muslim 2999)</div>
            </div>
            <div class="when-card">
              <div class="when-emoji">🌿</div>
              <div class="when-title">At Any Moment</div>
              <div class="when-hadith">There is no restriction on when you can say Alhamdulillah. It can be said at any time, in any place — it fills your scale of deeds and draws you closer to Allah.</div>
            </div>
          </div>

          <!-- =================== SNEEZE PROTOCOL =================== -->
          <h2>The Complete Sunnah of Sneezing</h2>
          <p>One of the most common occasions for Alhamdulillah is after sneezing. Here is the complete Sunnah exchange:</p>

          <div class="highlight-box" style="margin-bottom:14px;">
            <strong>Person who sneezes says:</strong><br>
            <span style="font-family:'Amiri',serif;font-size:1.3rem;direction:rtl;display:block;text-align:right;margin:8px 0;">الْحَمْدُ لِلَّهِ</span>
            <em>Alhamdulillah</em> — "All praise belongs to Allah"
          </div>

          <div class="highlight-box" style="border-color:rgba(232,184,75,.3);background:rgba(232,184,75,.06);margin-bottom:14px;">
            <strong>The listener responds:</strong><br>
            <span style="font-family:'Amiri',serif;font-size:1.3rem;direction:rtl;display:block;text-align:right;margin:8px 0;">يَرْحَمُكَ اللَّهُ</span>
            <em>Yarhamukallah</em> — "May Allah have mercy on you"
          </div>

          <div class="highlight-box" style="border-color:rgba(99,102,241,.3);background:rgba(99,102,241,.04);">
            <strong>The sneezing person then responds:</strong><br>
            <span style="font-family:'Amiri',serif;font-size:1.3rem;direction:rtl;display:block;text-align:right;margin:8px 0;">يَهْدِيكُمُ اللَّهُ وَيُصْلِحُ بَالَكُمْ</span>
            <em>Yahdikumullah wa yuslihu balakum</em> — "May Allah guide you and improve your condition"
          </div>

          <p style="font-size:.9rem;color:var(--muted);">Source: Sahih Bukhari 6224 — This is a complete Sunnah exchange that earns reward for all three parties.</p>

          <!-- =================== 4 DHIKR =================== -->
          <h2>The Four Great Words of Dhikr</h2>
          <p>Alhamdulillah is one of the four most beloved words to Allah. Learn all four:</p>

          <div class="four-dhikr">
            <div class="dhikr-card">
              <div class="dhikr-arabic">سُبْحَانَ اللَّهِ</div>
              <div class="dhikr-roman">Subhanallah</div>
              <div class="dhikr-meaning">Glory be to Allah — fills HALF the scale</div>
            </div>
            <div class="dhikr-card" style="border: 2px solid var(--emerald);">
              <div class="dhikr-arabic">الْحَمْدُ لِلَّهِ</div>
              <div class="dhikr-roman">Alhamdulillah</div>
              <div class="dhikr-meaning">All praise to Allah — fills the FULL scale</div>
            </div>
            <div class="dhikr-card">
              <div class="dhikr-arabic">لَا إِلَٰهَ إِلَّا اللَّهُ</div>
              <div class="dhikr-roman">La ilaha illallah</div>
              <div class="dhikr-meaning">No god but Allah — the best dhikr</div>
            </div>
            <div class="dhikr-card">
              <div class="dhikr-arabic">اللَّهُ أَكْبَرُ</div>
              <div class="dhikr-roman">Allahu Akbar</div>
              <div class="dhikr-meaning">Allah is the Greatest</div>
            </div>
          </div>

          <div class="gold-box" style="margin-top:8px;">
            <strong>💡 Daily Practice:</strong> After every Fard prayer, say each of these 33 times — Subhanallah (33), Alhamdulillah (33), Allahu Akbar (33), then complete with "La ilaha illallah wahdahu la shareeka lah..." = 100 total. The Prophet ﷺ said: "Whoever does this will have his sins forgiven even if they are like the foam of the sea." (Muslim 597)
          </div>

          <!-- =================== TEACHING KIDS =================== -->
          <h2>Teaching Children to Say Alhamdulillah</h2>
          <p>Alhamdulillah is one of the first Islamic phrases a child should learn — even before formal Quran lessons begin. Here's how to teach it naturally:</p>
          <ul>
            <li><strong>Model it constantly:</strong> Say Alhamdulillah out loud in front of your children — after eating, when something good happens, after sneezing.</li>
            <li><strong>Connect it to feelings:</strong> When your child experiences something good, prompt them: "What do we say? Alhamdulillah!"</li>
            <li><strong>Teach the sneeze response:</strong> Children love the back-and-forth of the sneezing Sunnah — it's interactive and memorable.</li>
            <li><strong>Explain it simply:</strong> "Alhamdulillah means we're saying Thank You to Allah for everything He gave us."</li>
            <li><strong>Surah Al-Fatiha connection:</strong> Once children begin learning Salah, they discover that Alhamdulillah begins the Fatiha — the prayer they say 17 times daily.</li>
          </ul>

          <!-- =================== FAQ =================== -->
          <h2>Frequently Asked Questions</h2>

          <div class="faq-item">
            <div class="faq-q"><span>What does Alhamdulillah mean in English?</span> <i class="fas fa-chevron-down"></i></div>
            <div class="faq-a">Alhamdulillah (الحمد لله) means "All praise and thanks belong to Allah" in English. The phrase combines hamd (praise + gratitude + glorification) with lillah (belonging to Allah alone). It is one of the most comprehensive expressions of gratitude and worship in any language — it acknowledges that every blessing comes solely from Allah.</div>
          </div>
          <div class="faq-item">
            <div class="faq-q"><span>Is there a difference between Alhamdulillah and Alhamdulillah Rabb il Alameen?</span> <i class="fas fa-chevron-down"></i></div>
            <div class="faq-a">"Alhamdulillah Rabb il Alameen" (الحمد لله رب العالمين) is the extended form from Surah Al-Fatiha, meaning "All praise to Allah, Lord of all the worlds." Adding "Rabb il Alameen" specifies that Allah is the Lord and Sustainer of everything in existence — every world, every dimension, every being. The shorter "Alhamdulillah" is used more broadly in daily conversation.</div>
          </div>
          <div class="faq-item">
            <div class="faq-q"><span>Can non-Muslims say Alhamdulillah?</span> <i class="fas fa-chevron-down"></i></div>
            <div class="faq-a">Any person can say Alhamdulillah — the words themselves are Arabic and can be spoken by anyone. However, the spiritual reward and the deeper meaning of praising Allah are matters of faith. When a Muslim says Alhamdulillah, it is an act of worship (ibadah) that carries immense reward from Allah.</div>
          </div>
          <div class="faq-item">
            <div class="faq-q"><span>How do you respond when someone says Alhamdulillah?</span> <i class="fas fa-chevron-down"></i></div>
            <div class="faq-a">After a sneeze: respond with "Yarhamukallah" (may Allah have mercy on you). In general conversation, there is no required response — you may simply acknowledge or say it yourself. If someone says Alhamdulillah after good news, you can respond with "MashaAllah" or add your own Alhamdulillah in agreement.</div>
          </div>
          <div class="faq-item">
            <div class="faq-q"><span>How many times should you say Alhamdulillah?</span> <i class="fas fa-chevron-down"></i></div>
            <div class="faq-a">There is no maximum — say it as often as you wish. Specific Sunnah occasions include: 33 times after each prayer (as post-salah dhikr), once after sneezing, and whenever you experience a blessing or gratitude. The Prophet ﷺ said it fills the entire scale of deeds — so saying it abundantly is always encouraged.</div>
          </div>

          <div class="highlight-box" style="margin-top:32px;">
            <strong>Teach your children the language of gratitude from day one.</strong> At NoorPath Academy, we teach Alhamdulillah, Islamic phrases, Quran, and Salah — building a complete Islamic foundation. <a href="/online-quran-classes#cta" style="color:var(--emerald);font-weight:700;">Book your free trial class →</a>
          </div>
        </div>

        <div style="margin-top:56px;border-top:1px solid var(--border);padding-top:40px;">
          <h3 style="font-size:1.2rem;font-weight:700;margin-bottom:20px;">Related Articles</h3>
          <div class="row g-3">
            <div class="col-sm-6">
              <a href="/blog/islamic-phrases-meaning" style="text-decoration:none;">
                <div class="blog-card"><div class="blog-card-header" style="padding:20px 24px;"><span class="blog-tag">Islamic Knowledge</span><div style="color:var(--white);font-weight:700;font-size:.95rem;margin-top:8px;">30 Common Islamic Phrases & Their Meanings</div></div><div class="blog-card-body"><span class="read-more">Read <i class="fas fa-arrow-right ms-1"></i></span></div></div>
              </a>
            </div>
            <div class="col-sm-6">
              <a href="/blog/subhanallah-meaning" style="text-decoration:none;">
                <div class="blog-card"><div class="blog-card-header" style="padding:20px 24px;"><span class="blog-tag">Dhikr & Duas</span><div style="color:var(--white);font-weight:700;font-size:.95rem;margin-top:8px;">Subhanallah — Glory be to Allah</div></div><div class="blog-card-body"><span class="read-more">Read <i class="fas fa-arrow-right ms-1"></i></span></div></div>
              </a>
            </div>
            <div class="col-sm-6">
              <a href="/blog/astaghfirullah-meaning" style="text-decoration:none;">
                <div class="blog-card"><div class="blog-card-header" style="padding:20px 24px;"><span class="blog-tag">Islamic Phrases</span><div style="color:var(--white);font-weight:700;font-size:.95rem;margin-top:8px;">Astaghfirullah — Meaning & When to Say It</div></div><div class="blog-card-body"><span class="read-more">Read <i class="fas fa-arrow-right ms-1"></i></span></div></div>
              </a>
            </div>
            <div class="col-sm-6">
              <a href="/blog/99-names-of-allah-asmaul-husna" style="text-decoration:none;">
                <div class="blog-card"><div class="blog-card-header" style="padding:20px 24px;"><span class="blog-tag">Islamic</span><div style="color:var(--white);font-weight:700;font-size:.95rem;margin-top:8px;">99 Names of Allah (Asmaul Husna)</div></div><div class="blog-card-body"><span class="read-more">Read <i class="fas fa-arrow-right ms-1"></i></span></div></div>
              </a>
            </div>
            <div class="col-sm-6">
              <a href="/blog/duas-for-kids-to-memorize" style="text-decoration:none;">
                <div class="blog-card"><div class="blog-card-header" style="padding:20px 24px;"><span class="blog-tag">Daily Duas</span><div style="color:var(--white);font-weight:700;font-size:.95rem;margin-top:8px;">20 Essential Duas for Kids to Memorize</div></div><div class="blog-card-body"><span class="read-more">Read <i class="fas fa-arrow-right ms-1"></i></span></div></div>
              </a>
            </div>
            <div class="col-sm-6">
              <a href="/blog/dua-e-qunoot-arabic-english" style="text-decoration:none;">
                <div class="blog-card"><div class="blog-card-header" style="padding:20px 24px;"><span class="blog-tag">Dua</span><div style="color:var(--white);font-weight:700;font-size:.95rem;margin-top:8px;">Dua e Qunoot — Arabic & Translation</div></div><div class="blog-card-body"><span class="read-more">Read <i class="fas fa-arrow-right ms-1"></i></span></div></div>
              </a>`,
  },
  "astaghfirullah-meaning": {
    style: `.article-body { font-size: 1.05rem; line-height: 1.85; color: #374151; }
    .article-body h2 { font-size: 1.5rem; font-weight: 700; color: var(--charcoal); margin: 40px 0 16px; }
    .article-body h3 { font-size: 1.15rem; font-weight: 700; color: var(--emerald); margin: 24px 0 10px; }
    .article-body p { margin-bottom: 18px; }
    .article-body ul, .article-body ol { margin-bottom: 18px; padding-left: 24px; }
    .article-body li { margin-bottom: 8px; }
    .highlight-box { background: rgba(10,110,79,.06); border-left: 4px solid var(--emerald); border-radius: 8px; padding: 20px 24px; margin: 24px 0; }
    .gold-box { background: rgba(232,184,75,.08); border-left: 4px solid var(--gold); border-radius: 8px; padding: 20px 24px; margin: 24px 0; }

    .word-hero { text-align: center; padding: 48px 24px; background: linear-gradient(135deg, rgba(10,110,79,.04), rgba(10,110,79,.09)); border-radius: 20px; margin: 32px 0; border: 1px solid rgba(10,110,79,.12); }
    .word-arabic-hero { font-family: 'Amiri', serif; font-size: 3.5rem; color: var(--emerald); line-height: 1.3; margin-bottom: 16px; direction: rtl; }
    .word-roman-hero { font-size: 1.5rem; font-style: italic; color: #4b5563; margin-bottom: 12px; }
    .word-meaning-hero { font-size: 1.1rem; font-weight: 600; color: var(--charcoal); }

    .break-grid { display: grid; grid-template-columns: repeat(3,1fr); gap: 14px; margin: 20px 0; }
    .break-card { background: var(--ivory); border: 1px solid var(--border); border-radius: 12px; padding: 18px 14px; text-align: center; }
    .bc-arabic { font-family: 'Amiri', serif; font-size: 1.6rem; color: var(--emerald); direction: rtl; margin-bottom: 6px; }
    .bc-roman { font-style: italic; color: #6b7280; font-size: .82rem; margin-bottom: 4px; }
    .bc-meaning { font-weight: 700; color: var(--charcoal); font-size: .85rem; }

    .form-card { background: var(--ivory); border: 1px solid var(--border); border-radius: 14px; padding: 24px; margin-bottom: 16px; }
    .form-arabic { font-family: 'Amiri', serif; font-size: 1.6rem; color: var(--charcoal); direction: rtl; text-align: right; line-height: 1.8; margin-bottom: 10px; }
    .form-roman { font-style: italic; color: #4b5563; font-size: .92rem; margin-bottom: 6px; }
    .form-english { font-size: .92rem; color: var(--charcoal); font-weight: 600; margin-bottom: 8px; }
    .form-note { font-size: .82rem; color: var(--muted); border-top: 1px solid var(--border); padding-top: 8px; margin-top: 8px; }
    .form-badge { display: inline-block; background: rgba(10,110,79,.1); color: var(--emerald); border-radius: 20px; padding: 2px 12px; font-size: .78rem; font-weight: 700; margin-bottom: 10px; }

    .benefit-row { display: flex; gap: 14px; padding: 18px; background: var(--ivory); border: 1px solid var(--border); border-radius: 12px; margin-bottom: 12px; }
    .benefit-icon-box { min-width: 42px; height: 42px; border-radius: 10px; background: rgba(10,110,79,.1); display: flex; align-items: center; justify-content: center; color: var(--emerald); font-size: 1.1rem; }

    .quran-ref { background: rgba(232,184,75,.05); border: 1px solid rgba(232,184,75,.2); border-radius: 12px; padding: 20px 24px; margin-bottom: 14px; }
    .quran-ref-arabic { font-family: 'Amiri', serif; font-size: 1.4rem; direction: rtl; text-align: right; color: var(--charcoal); margin-bottom: 8px; line-height: 1.8; }
    .quran-ref-english { font-size: .92rem; color: #374151; font-style: italic; margin-bottom: 4px; }
    .quran-ref-source { font-size: .8rem; color: var(--emerald); font-weight: 700; }

    .faq-item { border: 1px solid var(--border); border-radius: 10px; margin-bottom: 12px; overflow: hidden; }
    .faq-q { padding: 16px 20px; font-weight: 700; background: var(--ivory); color: var(--charcoal); display: flex; justify-content: space-between; align-items: center; }
    .faq-a { padding: 16px 20px; color: #374151; font-size: .95rem; line-height: 1.7; border-top: 1px solid var(--border); }

    @media (max-width: 576px) {
      .word-arabic-hero { font-size: 2.5rem; }
      .break-grid { grid-template-columns: 1fr 1fr; }
    }`,
    content: `<p><strong>Astaghfirullah</strong> (أستغفر الله) — "I seek forgiveness from Allah" — is one of the most powerful and important phrases in Islam. The Prophet Muhammad ﷺ, despite being the most beloved creation of Allah and free of major sin, would say it a <strong>minimum of 70–100 times every single day</strong>. This tells us everything about how important istighfar (seeking forgiveness) should be in our lives.</p>

          <div class="highlight-box">
            <strong>Quick answer:</strong> <strong>Astaghfirullah meaning in English</strong> is "I seek forgiveness from Allah." In Arabic it is written <strong>أَسْتَغْفِرُ اللَّهَ</strong>. Muslims say Astaghfirullah after mistakes, after every Salah, during stress, and as daily dhikr to ask Allah to forgive, cover, and remove sins.
          </div>

          <div class="word-hero">
            <div class="word-arabic-hero">أَسْتَغْفِرُ اللَّهَ</div>
            <div class="word-roman-hero">Astaghfiru-llāh</div>
            <div class="word-meaning-hero">"I seek forgiveness from Allah"</div>
          </div>

          <!-- =================== BREAKDOWN =================== -->
          <h2>Astaghfirullah — Word by Word Breakdown</h2>

          <div class="break-grid">
            <div class="break-card">
              <div class="bc-arabic">أَسْتَغْفِرُ</div>
              <div class="bc-roman">Astaghfiru</div>
              <div class="bc-meaning">I seek / I ask for forgiveness</div>
            </div>
            <div class="break-card">
              <div class="bc-arabic">اللَّهَ</div>
              <div class="bc-roman">Allah</div>
              <div class="bc-meaning">From Allah (the One God)</div>
            </div>
            <div class="break-card">
              <div class="bc-arabic">غَفَرَ</div>
              <div class="bc-roman">Ghafara (root)</div>
              <div class="bc-meaning">To forgive, cover, conceal sins</div>
            </div>
          </div>

          <div class="highlight-box">
            <strong>The root "Ghafara" (غفر):</strong> The Arabic root of Astaghfirullah means "to cover" or "to conceal." When Allah forgives a sin, He covers it — shields it from view, removes it from the record, and conceals it from angels and creation on the Day of Judgment. This is why Allah's name is <em>Al-Ghafur</em> (the Covering Forgiver) and <em>Al-Ghaffar</em> (the Ever-Forgiving).
          </div>

          <!-- =================== FORMS OF ISTIGHFAR =================== -->
          <h2>All Forms of Astaghfirullah (Istighfar)</h2>

          <div class="form-card">
            <span class="form-badge">Shortest Form</span>
            <div class="form-arabic">أَسْتَغْفِرُ اللَّهَ</div>
            <div class="form-roman">Astaghfirullah</div>
            <div class="form-english">"I seek forgiveness from Allah."</div>
            <div class="form-note">Recited by the Prophet ﷺ 70–100 times daily. Perfect for constant recitation throughout the day.</div>
          </div>

          <div class="form-card">
            <span class="form-badge">Common Extended Form</span>
            <div class="form-arabic">أَسْتَغْفِرُ اللَّهَ الْعَظِيمَ الَّذِي لَا إِلَهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ وَأَتُوبُ إِلَيْهِ</div>
            <div class="form-roman">Astaghfirullah-al-'Azeem alladhi laa ilaaha illaa Huwal-Hayyul-Qayyoom wa atoobu ilaih</div>
            <div class="form-english">"I seek forgiveness from Allah the Mighty, there is no god but Him, the Ever-Living, the Self-Sustaining, and I repent to Him."</div>
            <div class="form-note">The Prophet ﷺ said: "Whoever says this will be forgiven even if he fled from battle." (Abu Dawud 1517, Tirmidhi 3577 — authenticated)</div>
          </div>

          <div class="form-card">
            <span class="form-badge">After Prayer Form</span>
            <div class="form-arabic">أَسْتَغْفِرُ اللَّهَ × 3</div>
            <div class="form-roman">Astaghfirullah (3 times)</div>
            <div class="form-english">"I seek forgiveness from Allah" — said 3 times.</div>
            <div class="form-note">After finishing the Salaam of every prayer, say this 3 times before the other post-salah adhkar. Narrated in Sahih Muslim 591.</div>
          </div>

          <div class="form-card">
            <span class="form-badge">Sayyid al-Istighfar — Master Dua</span>
            <div class="form-arabic">اللَّهُمَّ أَنْتَ رَبِّي لَا إِلَهَ إِلَّا أَنْتَ، خَلَقْتَنِي وَأَنَا عَبْدُكَ، وَأَنَا عَلَى عَهْدِكَ وَوَعْدِكَ مَا اسْتَطَعْتُ، أَعُوذُ بِكَ مِنْ شَرِّ مَا صَنَعْتُ، أَبُوءُ لَكَ بِنِعْمَتِكَ عَلَيَّ وَأَبُوءُ بِذَنْبِي فَاغْفِرْ لِي فَإِنَّهُ لَا يَغْفِرُ الذُّنُوبَ إِلَّا أَنْتَ</div>
            <div class="form-roman">Allahumma anta Rabbee laa ilaaha illaa ant, khalaqtanee wa ana 'abduka, wa ana 'alaa 'ahdika wa wa'dika mastataa't, a'oothu bika min sharri maa sana't, aboo'u laka bini'matika 'alayya wa aboo'u bidhanbee faghfir lee fa innahoo laa yaghfiru adh-dhunooba illaa ant.</div>
            <div class="form-english">"O Allah, You are my Lord. There is no god but You. You created me and I am Your servant. I am committed to Your covenant and promise as best I can. I seek refuge in You from the evil of what I have done. I acknowledge Your blessings upon me, and I acknowledge my sin — so forgive me, for none forgives sins except You."</div>
            <div class="form-note">The Prophet ﷺ said: "Whoever says this during the day with firm faith in it and dies before evening will be among the people of Paradise. And whoever says it at night with firm faith and dies before morning will be among the people of Paradise." — (Bukhari 6306)</div>
          </div>

          <!-- =================== IN THE QURAN =================== -->
          <h2>Astaghfirullah in the Quran</h2>
          <p>Allah commands istighfar in the Quran repeatedly, and promises extraordinary rewards for those who do it:</p>

          <div class="quran-ref">
            <div class="quran-ref-arabic">فَقُلْتُ اسْتَغْفِرُوا رَبَّكُمْ إِنَّهُ كَانَ غَفَّارًا ۝ يُرْسِلِ السَّمَاءَ عَلَيْكُم مِّدْرَارًا ۝ وَيُمْدِدْكُم بِأَمْوَالٍ وَبَنِينَ وَيَجْعَل لَّكُمْ جَنَّاتٍ وَيَجْعَل لَّكُمْ أَنْهَارًا</div>
            <div class="quran-ref-english">"And I said: Ask forgiveness of your Lord — He is ever Forgiving. He will send [rain from] the sky upon you in [continuing] showers. And give you increase in wealth and children and provide you with gardens and provide you with rivers." — Prophet Nuh's call to his people.</div>
            <div class="quran-ref-source">📖 Quran 71:10-12 — Surah Nuh</div>
          </div>

          <div class="quran-ref">
            <div class="quran-ref-arabic">وَأَنِ اسْتَغْفِرُوا رَبَّكُمْ ثُمَّ تُوبُوا إِلَيْهِ يُمَتِّعْكُم مَّتَاعًا حَسَنًا</div>
            <div class="quran-ref-english">"And [saying]: Seek forgiveness of your Lord and repent to Him, and He will let you enjoy a good provision for a specified term."</div>
            <div class="quran-ref-source">📖 Quran 11:3 — Surah Hud</div>
          </div>

          <div class="quran-ref">
            <div class="quran-ref-arabic">إِنَّ اللَّهَ يُحِبُّ التَّوَّابِينَ وَيُحِبُّ الْمُتَطَهِّرِينَ</div>
            <div class="quran-ref-english">"Indeed, Allah loves those who are constantly repentant and loves those who purify themselves." — Making istighfar earns Allah's love.</div>
            <div class="quran-ref-source">📖 Quran 2:222 — Surah Al-Baqarah</div>
          </div>

          <div class="quran-ref">
            <div class="quran-ref-arabic">وَمَن يَعْمَلْ سُوءًا أَوْ يَظْلِمْ نَفْسَهُ ثُمَّ يَسْتَغْفِرِ اللَّهَ يَجِدِ اللَّهَ غَفُورًا رَّحِيمًا</div>
            <div class="quran-ref-english">"And whoever does a wrong or wrongs himself but then seeks forgiveness of Allah will find Allah Forgiving and Merciful." — No sin is too great for Allah's forgiveness.</div>
            <div class="quran-ref-source">📖 Quran 4:110 — Surah An-Nisa</div>
          </div>

          <!-- =================== HADITH BENEFITS =================== -->
          <h2>7 Incredible Benefits of Astaghfirullah (from Authentic Hadith)</h2>

          <div class="benefit-row">
            <div class="benefit-icon-box"><i class="fas fa-door-open"></i></div>
            <div><strong>Opens Every Closed Door</strong><br><span style="font-size:.92rem;color:var(--muted);">The Prophet ﷺ said: "Whoever makes istighfar abundantly, Allah will relieve him of every distress, get him out of every difficulty, and provide for him from where he does not expect." (Abu Dawud 1518, Ibn Majah 3819)</span></div>
          </div>

          <div class="benefit-row">
            <div class="benefit-icon-box"><i class="fas fa-cloud-rain"></i></div>
            <div><strong>Brings Provision & Rain</strong><br><span style="font-size:.92rem;color:var(--muted);">As shown in Surah Nuh (71:10-12), Allah promises increased wealth, children, gardens, and rivers to those who make istighfar. Scholars cite this for times of drought or financial difficulty.</span></div>
          </div>

          <div class="benefit-row">
            <div class="benefit-icon-box"><i class="fas fa-heart"></i></div>
            <div><strong>Earns Allah's Love</strong><br><span style="font-size:.92rem;color:var(--muted);">"Indeed, Allah loves those who are constantly repentant." (Quran 2:222). Making istighfar consistently is one of the guaranteed paths to earning Allah's love.</span></div>
          </div>

          <div class="benefit-row">
            <div class="benefit-icon-box"><i class="fas fa-shield-halved"></i></div>
            <div><strong>Protection from Punishment</strong><br><span style="font-size:.92rem;color:var(--muted);">Allah says: "But Allah would not punish them while you [O Muhammad] are among them, and Allah would not punish them while they seek forgiveness." (Quran 8:33). Istighfar is a shield from punishment.</span></div>
          </div>

          <div class="benefit-row">
            <div class="benefit-icon-box"><i class="fas fa-eraser"></i></div>
            <div><strong>Erases Sins Completely</strong><br><span style="font-size:.92rem;color:var(--muted);">Allah says: "Say: O My servants who have transgressed against themselves — do not despair of the mercy of Allah. Indeed, Allah forgives all sins." (Quran 39:53). Sincere istighfar with tawbah erases even major sins.</span></div>
          </div>

          <div class="benefit-row">
            <div class="benefit-icon-box"><i class="fas fa-brain"></i></div>
            <div><strong>Opens the Heart & Mind</strong><br><span style="font-size:.92rem;color:var(--muted);">Ibn Abbas (رضي الله عنهما) narrated that the Prophet ﷺ said: "Whoever increases in istighfar, Allah will give him relief from every worry, a way out from every difficulty, and will provide for him from where he least expects." The cleansing of sins opens the heart to knowledge and understanding.</span></div>
          </div>

          <div class="benefit-row">
            <div class="benefit-icon-box"><i class="fas fa-sun"></i></div>
            <div><strong>The Sunnah of the Best People</strong><br><span style="font-size:.92rem;color:var(--muted);">The Prophet ﷺ said: "By Allah, I seek Allah's forgiveness and repent to Him more than seventy times a day." (Bukhari 6307). If the most perfect human being made istighfar 70+ times daily, what about us?</span></div>
          </div>

          <!-- =================== WHEN TO SAY =================== -->
          <h2>When to Say Astaghfirullah</h2>
          <ul>
            <li><strong>After every Salah:</strong> 3 times minimum, then move to other adhkar</li>
            <li><strong>70–100 times daily:</strong> The Prophetic practice — use a tasbih (prayer beads) or count on fingers</li>
            <li><strong>In the last third of the night:</strong> Allah descends to the lowest heaven asking: "Who seeks forgiveness?" — answer His call with istighfar</li>
            <li><strong>After any sin or mistake:</strong> Don't delay — the sooner the better</li>
            <li><strong>In the morning adhkar:</strong> Include Sayyid al-Istighfar in your morning routine</li>
            <li><strong>Before sleeping:</strong> End the day by seeking Allah's forgiveness</li>
            <li><strong>After every gathering:</strong> The kaffarat al-majlis (expiation of the assembly) — <em>Subhanaka Allahumma wa bihamdika, ashhadu an laa ilaaha illaa anta, astaghfiruka wa atoobu ilayk</em></li>
            <li><strong>After completing the Quran:</strong> When finishing a reading of the Quran, make istighfar for any shortcomings in recitation</li>
          </ul>

          <div class="gold-box">
            <strong>🌙 The Last Third of the Night:</strong><br>
            The Prophet ﷺ said: <em>"Our Lord descends every night to the lowest heaven when one-third of the night remains, and says: 'Who is calling upon Me that I may answer him? Who is asking from Me that I may give him? Who is seeking My forgiveness that I may forgive him?'"</em> (Bukhari 1145, Muslim 758) — Wake up in Tahajjud and answer this divine call with astaghfirullah.
          </div>

          <!-- =================== FAQ =================== -->
          <h2>Frequently Asked Questions</h2>
          <div class="faq-item">
            <div class="faq-q"><span>What does Astaghfirullah mean in English?</span> <i class="fas fa-chevron-down"></i></div>
            <div class="faq-a">Astaghfirullah (أستغفر الله) means "I seek forgiveness from Allah." It is derived from the root "ghafara" (to forgive/cover). When said sincerely, it is an act of worship called Istighfar — seeking Allah's forgiveness for sins, shortcomings, and imperfections. It is one of the most powerful acts of worship in Islam.</div>
          </div>
          <div class="faq-item">
            <div class="faq-q"><span>Is Astaghfirullah only for after committing sins?</span> <i class="fas fa-chevron-down"></i></div>
            <div class="faq-a">No — the Prophet ﷺ would say Astaghfirullah 70-100 times daily even though he had no major sins. It is for: expiation of sins, gratitude for Allah's mercy, cleaning the heart, staying close to Allah, and following the Prophetic Sunnah. It should be a constant habit, not just a reaction to wrongdoing.</div>
          </div>
          <div class="faq-item">
            <div class="faq-q"><span>What is the meaning of Astaghfirullah in Urdu/Hindi?</span> <i class="fas fa-chevron-down"></i></div>
            <div class="faq-a">In Urdu and Hindi, Astaghfirullah means "Main Allah se maafi mangta/mangti hoon" (میں اللہ سے معافی مانگتا/مانگتی ہوں) — "I seek forgiveness from Allah." It is used in South Asian Muslim culture both as a religious dhikr and sometimes colloquially to express surprise or disapproval.</div>
          </div>
          <div class="faq-item">
            <div class="faq-q"><span>What is Sayyid al-Istighfar?</span> <i class="fas fa-chevron-down"></i></div>
            <div class="faq-a">Sayyid al-Istighfar (سيد الاستغفار) means the "Master of Seeking Forgiveness" — it is the most comprehensive form of istighfar, beginning with "Allahumma anta Rabbee..." The Prophet ﷺ said whoever says it with firm faith will be from the people of Paradise, whether they die in the day or night. It is recorded in Sahih Bukhari (6306).</div>
          </div>

          <div class="highlight-box" style="margin-top:32px;">
            <strong>Learn proper Quran recitation and Islamic knowledge at NoorPath Academy.</strong> Our tutors teach the correct pronunciation of all Islamic phrases including istighfar, as well as Tajweed, Islamic Studies, and Quran for all ages. <a href="/online-quran-classes#cta" style="color:var(--emerald);font-weight:700;">Book your free trial →</a>
          </div>
        </div>

        <div style="margin-top:56px;border-top:1px solid var(--border);padding-top:40px;">
          <h3 style="font-size:1.2rem;font-weight:700;margin-bottom:20px;">Related Articles</h3>
          <div class="row g-3">
            <div class="col-sm-6">
              <a href="/blog/islamic-phrases-meaning" style="text-decoration:none;">
                <div class="blog-card"><div class="blog-card-header" style="padding:20px 24px;"><span class="blog-tag">Islamic Knowledge</span><div style="color:var(--white);font-weight:700;font-size:.95rem;margin-top:8px;">30 Common Islamic Phrases & Their Meanings</div></div><div class="blog-card-body"><span class="read-more">Read <i class="fas fa-arrow-right ms-1"></i></span></div></div>
              </a>
            </div>
            <div class="col-sm-6">
              <a href="/blog/subhanallah-meaning" style="text-decoration:none;">
                <div class="blog-card"><div class="blog-card-header" style="padding:20px 24px;"><span class="blog-tag">Dhikr & Duas</span><div style="color:var(--white);font-weight:700;font-size:.95rem;margin-top:8px;">Subhanallah — Glory be to Allah</div></div><div class="blog-card-body"><span class="read-more">Read <i class="fas fa-arrow-right ms-1"></i></span></div></div>
              </a>
            </div>
            <div class="col-sm-6">
              <a href="/blog/alhamdulillah-meaning-in-english" style="text-decoration:none;">
                <div class="blog-card"><div class="blog-card-header" style="padding:20px 24px;"><span class="blog-tag">Islamic Phrases</span><div style="color:var(--white);font-weight:700;font-size:.95rem;margin-top:8px;">Alhamdulillah — Meaning & When to Say It</div></div><div class="blog-card-body"><span class="read-more">Read <i class="fas fa-arrow-right ms-1"></i></span></div></div>
              </a>
            </div>
            <div class="col-sm-6">
              <a href="/blog/99-names-of-allah-asmaul-husna" style="text-decoration:none;">
                <div class="blog-card"><div class="blog-card-header" style="padding:20px 24px;"><span class="blog-tag">Islamic</span><div style="color:var(--white);font-weight:700;font-size:.95rem;margin-top:8px;">99 Names of Allah (Asmaul Husna)</div></div><div class="blog-card-body"><span class="read-more">Read <i class="fas fa-arrow-right ms-1"></i></span></div></div>
              </a>
            </div>
            <div class="col-sm-6">
              <a href="/blog/ayatul-kursi-arabic-english-benefits" style="text-decoration:none;">
                <div class="blog-card"><div class="blog-card-header" style="padding:20px 24px;"><span class="blog-tag">Quran</span><div style="color:var(--white);font-weight:700;font-size:.95rem;margin-top:8px;">Ayatul Kursi — Full Arabic & Benefits</div></div><div class="blog-card-body"><span class="read-more">Read <i class="fas fa-arrow-right ms-1"></i></span></div></div>
              </a>
            </div>
            <div class="col-sm-6">
              <a href="/blog/duas-for-kids-to-memorize" style="text-decoration:none;">
                <div class="blog-card"><div class="blog-card-header" style="padding:20px 24px;"><span class="blog-tag">Daily Duas</span><div style="color:var(--white);font-weight:700;font-size:.95rem;margin-top:8px;">20 Essential Duas for Kids to Memorize</div></div><div class="blog-card-body"><span class="read-more">Read <i class="fas fa-arrow-right ms-1"></i></span></div></div>
              </a>`,
  },
  "ayatul-kursi-arabic-english-benefits": {
    style: `.article-body { font-size: 1.05rem; line-height: 1.85; color: #374151; }
    .article-body h2 { font-size: 1.5rem; font-weight: 700; color: var(--charcoal); margin: 40px 0 16px; }
    .article-body h3 { font-size: 1.1rem; font-weight: 700; color: var(--emerald); margin: 24px 0 10px; }
    .article-body p { margin-bottom: 18px; }
    .article-body ul, .article-body ol { margin-bottom: 18px; padding-left: 24px; }
    .article-body li { margin-bottom: 8px; }
    .highlight-box { background: rgba(10,110,79,.06); border-left: 4px solid var(--emerald); border-radius: 8px; padding: 20px 24px; margin: 24px 0; }
    .gold-box { background: rgba(232,184,75,.08); border-left: 4px solid var(--gold); border-radius: 8px; padding: 20px 24px; margin: 24px 0; }

    /* Main Arabic display */
    .ayatul-kursi-box { background: linear-gradient(135deg, rgba(10,110,79,.04), rgba(10,110,79,.08)); border: 2px solid rgba(10,110,79,.15); border-radius: 20px; padding: 40px 36px; margin: 32px 0; text-align: center; }
    .ayatul-arabic { font-family: 'Amiri', serif; font-size: 2rem; line-height: 2.4; color: var(--charcoal); direction: rtl; text-align: right; }
    .ayatul-transliteration { font-style: italic; color: #6b7280; font-size: 1rem; line-height: 1.9; margin: 24px 0 16px; text-align: left; }
    .ayatul-english { color: #1f2937; font-size: 1.1rem; line-height: 1.85; font-weight: 500; text-align: left; border-top: 1px solid rgba(10,110,79,.15); padding-top: 20px; margin-top: 8px; }

    /* Word by word */
    .word-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(160px, 1fr)); gap: 12px; margin: 24px 0; }
    .word-card { background: var(--ivory); border: 1px solid var(--border); border-radius: 10px; padding: 14px 16px; text-align: center; }
    .word-arabic { font-family: 'Amiri', serif; font-size: 1.5rem; color: var(--emerald); direction: rtl; margin-bottom: 6px; }
    .word-roman { font-style: italic; font-size: .8rem; color: #6b7280; margin-bottom: 4px; }
    .word-meaning { font-size: .8rem; color: var(--charcoal); font-weight: 600; }

    /* Benefits */
    .benefit-item { display: flex; gap: 16px; align-items: flex-start; padding: 20px; background: var(--ivory); border: 1px solid var(--border); border-radius: 12px; margin-bottom: 16px; }
    .benefit-num { display: flex; align-items: center; justify-content: center; min-width: 40px; height: 40px; border-radius: 10px; background: var(--emerald); color: #fff; font-weight: 700; font-size: 1rem; }
    .benefit-text strong { display: block; margin-bottom: 4px; color: var(--charcoal); }
    .benefit-text span { font-size: .92rem; color: var(--muted); }

    /* When to recite */
    .when-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(240px, 1fr)); gap: 16px; margin: 24px 0; }
    .when-card { background: var(--ivory); border-radius: 12px; padding: 20px; border-left: 4px solid var(--emerald); }
    .when-icon { font-size: 1.5rem; margin-bottom: 10px; }
    .when-title { font-weight: 700; color: var(--charcoal); margin-bottom: 6px; }
    .when-desc { font-size: .88rem; color: var(--muted); line-height: 1.5; }

    /* Verse reference */
    .verse-ref { display: inline-block; background: rgba(10,110,79,.08); color: var(--emerald); border-radius: 6px; padding: 2px 10px; font-size: .85rem; font-weight: 700; }

    /* FAQ */
    .faq-item { border: 1px solid var(--border); border-radius: 10px; margin-bottom: 12px; overflow: hidden; }
    .faq-q { padding: 16px 20px; font-weight: 700; cursor: pointer; background: var(--ivory); color: var(--charcoal); display: flex; justify-content: space-between; align-items: center; }
    .faq-a { padding: 16px 20px; color: #374151; font-size: .95rem; line-height: 1.7; border-top: 1px solid var(--border); }

    /* Info stats */
    .info-bar { display: flex; gap: 0; border: 1px solid var(--border); border-radius: 12px; overflow: hidden; margin: 24px 0; }
    .info-item { flex: 1; text-align: center; padding: 16px 8px; border-right: 1px solid var(--border); }
    .info-item:last-child { border-right: none; }
    .info-val { font-size: 1.1rem; font-weight: 700; color: var(--emerald); display: block; }
    .info-label { font-size: .72rem; color: var(--muted); }

    @media (max-width: 576px) {
      .ayatul-arabic { font-size: 1.55rem; }
      .word-grid { grid-template-columns: repeat(2, 1fr); }
      .info-bar { flex-wrap: wrap; }
      .info-item { flex: 1 1 50%; border-bottom: 1px solid var(--border); }
    }`,
    content: `<p><strong>Ayatul Kursi</strong> (آية الكرسي) — the <em>"Verse of the Throne"</em> — is verse 255 of Surah Al-Baqarah, the 2nd chapter of the Holy Quran. It is universally regarded by Islamic scholars as <strong>the greatest, most powerful verse in the entire Quran</strong>.</p>

          <div class="highlight-box">
            <strong>Quick answer:</strong> <strong>Ayatul Kursi meaning</strong> is "The Verse of the Throne." It is Quran 2:255 and describes Allah's absolute oneness, life, knowledge, authority, and power over the heavens and the earth. Muslims recite Ayatul Kursi after Salah, before sleep, and for protection because authentic hadith mention its great virtues.
          </div>

          <p>The Prophet Muhammad ﷺ asked his companion Abu Dharr (رضي الله عنه): <em>"Do you know which verse of Allah's Book is the greatest?"</em> He replied: "Allah and His Messenger know best." The Prophet ﷺ then said: <strong>"Ayatul Kursi."</strong> (Muslim)</p>

          <div class="info-bar">
            <div class="info-item"><span class="info-val">2:255</span><span class="info-label">Quran Reference</span></div>
            <div class="info-item"><span class="info-val">50</span><span class="info-label">Words</span></div>
            <div class="info-item"><span class="info-val">Madani</span><span class="info-label">Revelation</span></div>
            <div class="info-item"><span class="info-val">#1</span><span class="info-label">Greatest Verse</span></div>
          </div>

          <!-- =================== FULL TEXT =================== -->
          <h2>Ayatul Kursi — Complete Arabic Text</h2>

          <div class="ayatul-kursi-box">
            <p style="text-align:center;color:var(--muted);font-size:.85rem;margin-bottom:20px;">Surah Al-Baqarah · Verse 255 (2:255)</p>

            <div class="ayatul-arabic">
              اللَّهُ لَا إِلَٰهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ ۚ لَا تَأْخُذُهُ سِنَةٌ وَلَا نَوْمٌ ۚ لَّهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الْأَرْضِ ۗ مَن ذَا الَّذِي يَشْفَعُ عِندَهُ إِلَّا بِإِذْنِهِ ۚ يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ ۖ وَلَا يُحِيطُونَ بِشَيْءٍ مِّنْ عِلْمِهِ إِلَّا بِمَا شَاءَ ۚ وَسِعَ كُرْسِيُّهُ السَّمَاوَاتِ وَالْأَرْضَ ۖ وَلَا يَئُودُهُ حِفْظُهُمَا ۚ وَهُوَ الْعَلِيُّ الْعَظِيمُ
            </div>

            <div class="ayatul-transliteration">
              <strong>Transliteration:</strong><br>
              Allahu laa ilaaha illaa Huwa, Al-Hayyul-Qayyoom. Laa ta'khudhuhu sinatun wa laa nawm. Lahoo maa fis-samaawaati wa maa fil-ard. Man dhalladhee yashfa'u 'indahoo illaa bi-idhnih. Ya'lamu maa bayna aydeehim wa maa khalfahum. Wa laa yuheetoona bi-shay'im-min 'ilmihee illaa bimaa shaa'. Wasi'a kursiyyuhus-samaawaati wal-ard. Wa laa ya'ooduhoo hifzuhumaa. Wa Huwal-'Aliyyul-'Azeem.
            </div>

            <div class="ayatul-english">
              <strong>English Translation:</strong><br>
              <em>"Allah — there is no deity except Him, the Ever-Living, the Sustainer of existence. Neither drowsiness overtakes Him nor sleep. To Him belongs whatever is in the heavens and whatever is on the earth. Who is it that can intercede with Him except by His permission? He knows what is before them and what will be after them, and they encompass not a thing of His knowledge except for what He wills. His Kursi (Throne) extends over the heavens and the earth, and their preservation tires Him not. And He is the Most High, the Most Great."</em>
              <div style="text-align:right;margin-top:12px;"><span class="verse-ref">Quran 2:255</span></div>
            </div>
          </div>

          <!-- =================== WORD BY WORD =================== -->
          <h2>Word-by-Word Breakdown</h2>
          <p>Understanding each word of Ayatul Kursi deepens your connection when reciting it:</p>

          <div class="word-grid">
            <div class="word-card">
              <div class="word-arabic">اللَّهُ</div>
              <div class="word-roman">Allahu</div>
              <div class="word-meaning">Allah (God)</div>
            </div>
            <div class="word-card">
              <div class="word-arabic">لَا إِلَٰهَ</div>
              <div class="word-roman">laa ilaaha</div>
              <div class="word-meaning">there is no deity</div>
            </div>
            <div class="word-card">
              <div class="word-arabic">إِلَّا هُوَ</div>
              <div class="word-roman">illaa Huwa</div>
              <div class="word-meaning">except Him</div>
            </div>
            <div class="word-card">
              <div class="word-arabic">الْحَيُّ</div>
              <div class="word-roman">Al-Hayyu</div>
              <div class="word-meaning">the Ever-Living</div>
            </div>
            <div class="word-card">
              <div class="word-arabic">الْقَيُّومُ</div>
              <div class="word-roman">Al-Qayyoom</div>
              <div class="word-meaning">the Self-Sustaining</div>
            </div>
            <div class="word-card">
              <div class="word-arabic">لَا تَأْخُذُهُ</div>
              <div class="word-roman">laa ta'khudhuhu</div>
              <div class="word-meaning">does not seize Him</div>
            </div>
            <div class="word-card">
              <div class="word-arabic">سِنَةٌ</div>
              <div class="word-roman">sinatun</div>
              <div class="word-meaning">drowsiness/slumber</div>
            </div>
            <div class="word-card">
              <div class="word-arabic">وَلَا نَوْمٌ</div>
              <div class="word-roman">wa laa nawm</div>
              <div class="word-meaning">nor sleep</div>
            </div>
            <div class="word-card">
              <div class="word-arabic">لَّهُ مَا</div>
              <div class="word-roman">lahoo maa</div>
              <div class="word-meaning">to Him belongs whatever</div>
            </div>
            <div class="word-card">
              <div class="word-arabic">فِي السَّمَاوَاتِ</div>
              <div class="word-roman">fis-samaawaati</div>
              <div class="word-meaning">in the heavens</div>
            </div>
            <div class="word-card">
              <div class="word-arabic">وَمَا فِي الْأَرْضِ</div>
              <div class="word-roman">wa maa fil-ard</div>
              <div class="word-meaning">and whatever is on earth</div>
            </div>
            <div class="word-card">
              <div class="word-arabic">يَعْلَمُ</div>
              <div class="word-roman">ya'lamu</div>
              <div class="word-meaning">He knows</div>
            </div>
            <div class="word-card">
              <div class="word-arabic">كُرْسِيُّهُ</div>
              <div class="word-roman">kursiyyuhu</div>
              <div class="word-meaning">His Throne (Kursi)</div>
            </div>
            <div class="word-card">
              <div class="word-arabic">الْعَلِيُّ</div>
              <div class="word-roman">Al-'Aliyyu</div>
              <div class="word-meaning">the Most High</div>
            </div>
            <div class="word-card">
              <div class="word-arabic">الْعَظِيمُ</div>
              <div class="word-roman">Al-'Azeem</div>
              <div class="word-meaning">the Most Great</div>
            </div>
          </div>

          <!-- =================== KEY PHRASES EXPLAINED =================== -->
          <h2>Key Phrases Explained</h2>

          <h3>1. "Al-Hayy Al-Qayyum" — The Ever-Living, The Self-Sustaining</h3>
          <p>These two names of Allah are considered the greatest pair of names. They appear together in Ayatul Kursi and in Surah Al-Imran (3:2). <strong>Al-Hayy</strong> means Allah is eternally alive without any beginning or end. <strong>Al-Qayyum</strong> means He sustains and maintains all of creation — everything depends on Him, while He depends on nothing.</p>

          <h3>2. "Neither Drowsiness nor Sleep Overtakes Him"</h3>
          <p>This refutes the idea that Allah can be distracted, inattentive, or unaware. Unlike any created being, Allah's attention and care never falters — not for even a fraction of a second. He is ever-watchful over you, your family, and all of creation, at every moment.</p>

          <h3>3. "His Kursi Extends over the Heavens and Earth"</h3>
          <p>The Kursi (translated as "Throne" or "Footstool") is a real, immense creation of Allah. The Prophet ﷺ explained: <em>"The seven heavens in relation to the Kursi are like a ring thrown into a vast open field, and the Kursi in relation to the Throne (Arsh) is the same."</em> (Ibn Hibban) — This shows the incomprehensible magnitude of Allah's creation and authority.</p>

          <h3>4. "Their Preservation Tires Him Not"</h3>
          <p>Maintaining the entire universe — every galaxy, every atom, every creature — is effortless for Allah. He does not grow tired, weary, or burdened. This should fill the believer with profound peace and trust (tawakkul) in Allah.</p>

          <!-- =================== BENEFITS =================== -->
          <h2>7 Authentic Benefits of Reciting Ayatul Kursi</h2>

          <div class="benefit-item">
            <div class="benefit-num">1</div>
            <div class="benefit-text">
              <strong>The Greatest Verse in the Quran</strong>
              <span>The Prophet ﷺ said: "The greatest verse in the Quran is Ayatul Kursi." (Muslim 810). Reciting it regularly means reciting the pinnacle of divine speech.</span>
            </div>
          </div>

          <div class="benefit-item">
            <div class="benefit-num">2</div>
            <div class="benefit-text">
              <strong>Gateway to Paradise After Every Prayer</strong>
              <span>The Prophet ﷺ said: "Whoever recites Ayatul Kursi after every obligatory prayer, nothing prevents him from entering Paradise except death." (An-Nasa'i, Al-Hakim — Sahih chain)</span>
            </div>
          </div>

          <div class="benefit-item">
            <div class="benefit-num">3</div>
            <div class="benefit-text">
              <strong>Complete Protection Before Sleep</strong>
              <span>Abu Hurairah (رضي الله عنه) narrated that Shaytan told him: "Whoever recites Ayatul Kursi before going to sleep, Allah appoints a guardian for him and Shaytan cannot come near him until morning." The Prophet ﷺ confirmed: "He has told the truth, though he is a liar." (Bukhari 2311)</span>
            </div>
          </div>

          <div class="benefit-item">
            <div class="benefit-num">4</div>
            <div class="benefit-text">
              <strong>Protection for Your Home</strong>
              <span>The Prophet ﷺ advised: "When you enter your home, recite Ayatul Kursi and Shaytan will not enter your home that night." — A shield of divine protection around your household and family.</span>
            </div>
          </div>

          <div class="benefit-item">
            <div class="benefit-num">5</div>
            <div class="benefit-text">
              <strong>Protection Throughout the Day</strong>
              <span>Reciting Ayatul Kursi in the morning keeps you in Allah's protection until evening. Reciting it in the evening keeps you protected until morning. This is narrated in authentic collections including An-Nasa'i.</span>
            </div>
          </div>

          <div class="benefit-item">
            <div class="benefit-num">6</div>
            <div class="benefit-text">
              <strong>Contains the Greatest Name of Allah (Ism Al-A'zam)</strong>
              <span>Many scholars — including Ibn Al-Qayyim — stated that Ayatul Kursi, along with the opening of Surah Al-Imran and Surah Ta-Ha (verse 111), contains the Greatest Name of Allah (Ism Al-A'zam), by which dua is never rejected.</span>
            </div>
          </div>

          <div class="benefit-item">
            <div class="benefit-num">7</div>
            <div class="benefit-text">
              <strong>Reinforces Tawheed — The Foundation of Islam</strong>
              <span>Every phrase of Ayatul Kursi affirms the absolute Oneness, power, knowledge, and self-sufficiency of Allah. Reciting it daily renews your Iman and strengthens your conviction in the core of Islam.</span>
            </div>
          </div>

          <!-- =================== WHEN TO RECITE =================== -->
          <h2>When to Recite Ayatul Kursi</h2>

          <div class="when-grid">
            <div class="when-card">
              <div class="when-icon">🕌</div>
              <div class="when-title">After Every Salah</div>
              <div class="when-desc">Recite immediately after every obligatory prayer (Fard). The Prophet ﷺ said only death prevents such a person from entering Paradise.</div>
            </div>
            <div class="when-card">
              <div class="when-icon">🌙</div>
              <div class="when-title">Before Sleeping</div>
              <div class="when-desc">Recite once before sleeping. A guardian angel will be assigned to protect you from all harm until morning — this is from authentic Bukhari hadith.</div>
            </div>
            <div class="when-card">
              <div class="when-icon">🏠</div>
              <div class="when-title">Entering Your Home</div>
              <div class="when-desc">Recite upon entering your home. Shaytan will not enter your home that night, providing protection for your household.</div>
            </div>
            <div class="when-card">
              <div class="when-icon">🌅</div>
              <div class="when-title">Morning & Evening</div>
              <div class="when-desc">Include it in your morning adhkar (after Fajr) and evening adhkar (after Asr/Maghrib) as part of daily remembrance of Allah.</div>
            </div>
            <div class="when-card">
              <div class="when-icon">🤲</div>
              <div class="when-title">During Dua</div>
              <div class="when-desc">Scholars recommend beginning lengthy dua sessions with Ayatul Kursi, as it contains the Greatest Name of Allah.</div>
            </div>
            <div class="when-card">
              <div class="when-icon">👶</div>
              <div class="when-title">Protecting Children</div>
              <div class="when-desc">Many Muslim parents recite Ayatul Kursi over their sleeping children for divine protection — a beautiful prophetic practice.</div>
            </div>
          </div>

          <!-- =================== HOW TO MEMORIZE =================== -->
          <h2>How to Memorize Ayatul Kursi (Step-by-Step)</h2>

          <div class="highlight-box">
            <strong>Ayatul Kursi can be memorized in as little as 3–7 days</strong> with consistent practice. Most children master it in 1–2 weeks. Here is the most effective method:
          </div>

          <ol>
            <li><strong>Break it into 5 segments:</strong>
              <ul>
                <li>Segment 1: "Allahu laa ilaaha illaa Huwal-Hayyul-Qayyoom"</li>
                <li>Segment 2: "Laa ta'khudhuhu sinatun wa laa nawm"</li>
                <li>Segment 3: "Lahoo maa fis-samaawaati wa maa fil-ard"</li>
                <li>Segment 4: "Man dhalldhee yashfa'u 'indahoo illaa bi-idhnih... wa laa yuheetoona bi-shay'im-min 'ilmihee illaa bimaa shaa'"</li>
                <li>Segment 5: "Wasi'a kursiyyuhus-samaawaati wal-ard... wa Huwal-'Aliyyul-'Azeem"</li>
              </ul>
            </li>
            <li><strong>Repeat each segment 10–20 times</strong> before moving to the next</li>
            <li><strong>Connect segments</strong> — once each segment is solid, link them together</li>
            <li><strong>Recite after every Salah</strong> — this is the fastest path to memorization</li>
            <li><strong>Revise every day</strong> for at least one week before considering it memorized</li>
          </ol>

          <div class="gold-box">
            <strong>🌟 Scholar's Tip:</strong> Imam Ibn Al-Qayyim (رحمه الله) said: <em>"There is no greater verse in the Quran in terms of status and protection than Ayatul Kursi. The one who recites it frequently, with understanding, will find their heart connected to Allah, their fear reduced, and their reliance on Allah increased."</em>
          </div>

          <!-- =================== FAQ =================== -->
          <h2>Frequently Asked Questions</h2>

          <div class="faq-item">
            <div class="faq-q"><span>What is Ayatul Kursi?</span> <i class="fas fa-chevron-down"></i></div>
            <div class="faq-a">Ayatul Kursi (آية الكرسي, "Verse of the Throne") is verse 255 of Surah Al-Baqarah (Quran 2:255). It is declared by the Prophet Muhammad ﷺ to be the greatest verse in the entire Quran. It describes Allah's absolute sovereignty, perfect knowledge, infinite throne, and complete self-sufficiency.</div>
          </div>

          <div class="faq-item">
            <div class="faq-q"><span>What does Ayatul Kursi mean in English?</span> <i class="fas fa-chevron-down"></i></div>
            <div class="faq-a">"Allah — there is no deity except Him, the Ever-Living, the Sustainer of existence. Neither drowsiness overtakes Him nor sleep. To Him belongs whatever is in the heavens and whatever is on the earth. Who is it that can intercede with Him except by His permission? He knows what is before them and what will be after them, and they encompass not a thing of His knowledge except for what He wills. His Kursi extends over the heavens and the earth, and their preservation tires Him not. And He is the Most High, the Most Great." [Quran 2:255]</div>
          </div>

          <div class="faq-item">
            <div class="faq-q"><span>What are the benefits of reciting Ayatul Kursi after Salah?</span> <i class="fas fa-chevron-down"></i></div>
            <div class="faq-a">The Prophet ﷺ said: "Whoever recites Ayatul Kursi after every obligatory prayer (Salah), nothing prevents him from entering Paradise except death." (An-Nasa'i — authenticated by Al-Albani). This makes it one of the most rewarding acts a Muslim can do — requiring only 30 seconds after each prayer.</div>
          </div>

          <div class="faq-item">
            <div class="faq-q"><span>Is Ayatul Kursi the same as Verse of the Throne?</span> <i class="fas fa-chevron-down"></i></div>
            <div class="faq-a">Yes. "Ayatul Kursi" is the Arabic name and "Verse of the Throne" is the English translation. "Kursi" (كرسي) means throne or footstool in Arabic. The verse is called this because it describes the Kursi of Allah extending over the heavens and earth — a real, immense creation of Allah that represents His absolute authority and sovereignty.</div>
          </div>

          <div class="faq-item">
            <div class="faq-q"><span>Can children memorize Ayatul Kursi?</span> <i class="fas fa-chevron-down"></i></div>
            <div class="faq-a">Absolutely. Children as young as 4–5 years old can begin learning Ayatul Kursi with the help of a teacher. Most children aged 6–10 can memorize it in 2–3 weeks with daily practice. It is one of the first things taught at NoorPath Academy's All-in-One Kids Program alongside Noorani Qaida and short Surahs.</div>
          </div>

          <div class="highlight-box" style="margin-top:40px;">
            <strong>Want your child to memorize Ayatul Kursi correctly?</strong><br>
            Our certified NoorPath tutors teach Ayatul Kursi, Quran recitation, Tajweed, and Islamic Studies — with proper pronunciation from the very first class. <a href="/online-quran-classes#cta" style="color:var(--emerald);font-weight:700;">Book your free trial class →</a>
          </div>
        </div>

        <!-- Related Articles -->
        <div style="margin-top:56px;border-top:1px solid var(--border);padding-top:40px;">
          <h3 style="font-size:1.2rem;font-weight:700;margin-bottom:20px;">Related Articles</h3>
          <div class="row g-3">
            <div class="col-sm-6">
              <a href="/blog/surah-yaseen-arabic-english" style="text-decoration:none;">
                <div class="blog-card">
                  <div class="blog-card-header" style="padding:20px 24px;"><span class="blog-tag">Quran</span><div style="color:var(--white);font-weight:700;font-size:.95rem;margin-top:8px;">Surah Yaseen — Full Arabic & Translation</div></div>
                  <div class="blog-card-body"><span class="read-more">Read <i class="fas fa-arrow-right ms-1"></i></span></div>
                </div>
              </a>
            </div>
            <div class="col-sm-6">
              <a href="/blog/99-names-of-allah-asmaul-husna" style="text-decoration:none;">
                <div class="blog-card">
                  <div class="blog-card-header" style="padding:20px 24px;"><span class="blog-tag">Islamic</span><div style="color:var(--white);font-weight:700;font-size:.95rem;margin-top:8px;">99 Names of Allah (Asmaul Husna)</div></div>
                  <div class="blog-card-body"><span class="read-more">Read <i class="fas fa-arrow-right ms-1"></i></span></div>
                </div>
              </a>
            </div>
            <div class="col-sm-6">
              <a href="/blog/duas-for-kids-to-memorize" style="text-decoration:none;">
                <div class="blog-card">
                  <div class="blog-card-header" style="padding:20px 24px;"><span class="blog-tag">Daily Duas</span><div style="color:var(--white);font-weight:700;font-size:.95rem;margin-top:8px;">20 Essential Duas for Kids to Memorize</div></div>
                  <div class="blog-card-body"><span class="read-more">Read <i class="fas fa-arrow-right ms-1"></i></span></div>
                </div>
              </a>
            </div>
            <div class="col-sm-6">
              <a href="/blog/how-to-memorize-quran-faster" style="text-decoration:none;">
                <div class="blog-card">
                  <div class="blog-card-header" style="padding:20px 24px;"><span class="blog-tag">Hifz</span><div style="color:var(--white);font-weight:700;font-size:.95rem;margin-top:8px;">How to Memorize Quran Faster</div></div>
                  <div class="blog-card-body"><span class="read-more">Read <i class="fas fa-arrow-right ms-1"></i></span></div>
                </div>
              </a>`,
  },
  "benefits-of-online-quran-classes": {
    style: `.article-body { font-size: 1.05rem; line-height: 1.85; color: #374151; }
    .article-body h2 { font-size: 1.4rem; font-weight: 700; color: var(--charcoal); margin: 32px 0 14px; }
    .article-body p { margin-bottom: 18px; }
    .article-body ul { margin-bottom: 18px; padding-left: 24px; }
    .article-body li { margin-bottom: 8px; }
    .benefit-card { display: flex; gap: 20px; padding: 24px; background: var(--ivory); border-radius: var(--radius); border: 1px solid var(--border); margin-bottom: 20px; }
    .benefit-num { min-width: 48px; height: 48px; border-radius: 12px; background: var(--emerald); color: #fff; font-size: 1.2rem; font-weight: 700; display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
    .highlight-box { background: rgba(10,110,79,.06); border-left: 4px solid var(--emerald); border-radius: 8px; padding: 20px 24px; margin: 24px 0; }`,
    content: `<p>The way Muslim families worldwide access Quran education has changed dramatically. Online Quran classes — once considered a compromise — are now recognized as <strong>superior to traditional madrassa for most families</strong> in Western countries.</p>
          <p>Here are 10 evidence-backed reasons why online Quran learning is the smart choice in 2026.</p>

          <div class="benefit-card">
            <div class="benefit-num">1</div>
            <div>
              <h2 style="margin:0 0 8px;font-size:1.1rem;">1-on-1 Personalised Attention</h2>
              <p style="margin:0;color:var(--muted);font-size:.92rem;">In a traditional madrassa, one teacher handles 10–25 children. Online classes are 1-on-1 — the tutor's full attention is on your child. Mistakes are caught and corrected instantly, leading to significantly faster progress.</p>
            </div>
          </div>

          <div class="benefit-card">
            <div class="benefit-num">2</div>
            <div>
              <h2 style="margin:0 0 8px;font-size:1.1rem;">Access to the World's Best Tutors</h2>
              <p style="margin:0;color:var(--muted);font-size:.92rem;">Online learning removes geographic limitations. Your child can learn from a certified Hafiz in Pakistan, an Egyptian Tajweed specialist, or a renowned Arabic scholar — regardless of where you live in Canada, UK, or USA.</p>
            </div>
          </div>

          <div class="benefit-card">
            <div class="benefit-num">3</div>
            <div>
              <h2 style="margin:0 0 8px;font-size:1.1rem;">Complete Flexibility of Schedule</h2>
              <p style="margin:0;color:var(--muted);font-size:.92rem;">Online classes fit around school, work, sports, and family life. Book any time of day — early morning after Fajr, after school at 4 PM, or evening at 8 PM. No fixed timetable imposed on your family.</p>
            </div>
          </div>

          <div class="benefit-card">
            <div class="benefit-num">4</div>
            <div>
              <h2 style="margin:0 0 8px;font-size:1.1rem;">Safety and Comfort</h2>
              <p style="margin:0;color:var(--muted);font-size:.92rem;">Your child learns from the comfort and safety of your home. No commute through rain or snow, no concerns about transport, and parents can easily observe the lesson from the next room.</p>
            </div>
          </div>

          <div class="benefit-card">
            <div class="benefit-num">5</div>
            <div>
              <h2 style="margin:0 0 8px;font-size:1.1rem;">Detailed Weekly Progress Reports</h2>
              <p style="margin:0;color:var(--muted);font-size:.92rem;">Online academies like NoorPath send weekly written progress reports to parents. You always know exactly what your child learned, what mistakes were corrected, and what to practice at home.</p>
            </div>
          </div>

          <div class="benefit-card">
            <div class="benefit-num">6</div>
            <div>
              <h2 style="margin:0 0 8px;font-size:1.1rem;">Female Tutors Available for Girls</h2>
              <p style="margin:0;color:var(--muted);font-size:.92rem;">Many families prefer female tutors for their daughters. Online academies offer certified female Quran tutors — something traditional local madrassas often cannot provide, especially in smaller cities.</p>
            </div>
          </div>

          <div class="benefit-card">
            <div class="benefit-num">7</div>
            <div>
              <h2 style="margin:0 0 8px;font-size:1.1rem;">More Affordable Than Local Tutors</h2>
              <p style="margin:0;color:var(--muted);font-size:.92rem;">A private local Quran tutor in London or Toronto can cost £40–£80/hour. Online Quran academies offer the same quality (often better) starting from $29 USD/month — a fraction of the cost.</p>
            </div>
          </div>

          <div class="benefit-card">
            <div class="benefit-num">8</div>
            <div>
              <h2 style="margin:0 0 8px;font-size:1.1rem;">Consistent Tutor Relationship</h2>
              <p style="margin:0;color:var(--muted);font-size:.92rem;">Local madrassas often have high teacher turnover. Online academies assign dedicated tutors who build a long-term relationship with each student — learning their strengths, weaknesses, and learning style.</p>
            </div>
          </div>

          <div class="benefit-card">
            <div class="benefit-num">9</div>
            <div>
              <h2 style="margin:0 0 8px;font-size:1.1rem;">Technology Enhances Learning</h2>
              <p style="margin:0;color:var(--muted);font-size:.92rem;">Digital whiteboards, screen sharing, recorded sessions, and interactive tools make online learning more engaging and effective for digital-native children who are comfortable with screens.</p>
            </div>
          </div>

          <div class="benefit-card">
            <div class="benefit-num">10</div>
            <div>
              <h2 style="margin:0 0 8px;font-size:1.1rem;">Sibling & Family Plans</h2>
              <p style="margin:0;color:var(--muted);font-size:.92rem;">Online academies like NoorPath offer family plans where multiple siblings can enroll together at a significant discount. This makes quality Quran education accessible for larger Muslim families.</p>
            </div>
          </div>

          <h2>What to Look for in an Online Quran Academy</h2>
          <ul>
            <li>Tutors must hold <strong>Ijazah</strong> (certification with chain to the Prophet ﷺ)</li>
            <li>Both <strong>male and female tutors</strong> available</li>
            <li><strong>Free trial class</strong> before commitment</li>
            <li>Regular <strong>progress reports</strong> to parents</li>
            <li>Flexible scheduling with <strong>your time zone</strong></li>
            <li><strong>Family plans</strong> for multiple children</li>
          </ul>

          <div class="highlight-box">
            NoorPath Academy meets all these criteria. <a href="/online-quran-classes#cta" style="color:var(--emerald);font-weight:700;">Book a free trial class today</a> — no payment required. JazakAllah Khair.
          </div>
        </div>

        <div style="margin-top:56px;border-top:1px solid var(--border);padding-top:40px;">
          <h3 style="font-size:1.2rem;font-weight:700;margin-bottom:20px;">Related Articles</h3>
          <div class="row g-3">
            <div class="col-sm-6">
              <a href="/blog/how-to-teach-quran-to-kids" style="text-decoration:none;">
                <div class="blog-card">
                  <div class="blog-card-header" style="padding:20px 24px;"><span class="blog-tag">Parenting</span><div style="color:var(--white);font-weight:700;font-size:.95rem;margin-top:8px;">How to Teach Quran to Kids</div></div>
                  <div class="blog-card-body"><span class="read-more">Read <i class="fas fa-arrow-right ms-1"></i></span></div>
                </div>
              </a>
            </div>
            <div class="col-sm-6">
              <a href="/blog/tajweed-rules-complete-guide" style="text-decoration:none;">
                <div class="blog-card">
                  <div class="blog-card-header" style="padding:20px 24px;"><span class="blog-tag">Tajweed</span><div style="color:var(--white);font-weight:700;font-size:.95rem;margin-top:8px;">Tajweed Rules for Beginners</div></div>
                  <div class="blog-card-body"><span class="read-more">Read <i class="fas fa-arrow-right ms-1"></i></span></div>
                </div>
              </a>`,
  },
  "best-age-to-start-quran-learning": {
    style: `.article-body { font-size: 1.05rem; line-height: 1.85; color: #374151; }
    .article-body h2 { font-size: 1.5rem; font-weight: 700; color: var(--charcoal); margin: 40px 0 16px; }
    .article-body h3 { font-size: 1.2rem; font-weight: 700; color: var(--emerald); margin: 28px 0 12px; }
    .article-body p { margin-bottom: 18px; }
    .article-body ul, .article-body ol { margin-bottom: 18px; padding-left: 24px; }
    .article-body li { margin-bottom: 8px; }
    .article-body strong { color: var(--charcoal); }
    .highlight-box { background: rgba(10,110,79,.06); border-left: 4px solid var(--emerald); border-radius: 8px; padding: 20px 24px; margin: 24px 0; }
    .hadith-box { background: linear-gradient(135deg,#0a3d28,#0d5436); color: #fff; border-radius: 12px; padding: 24px; margin: 24px 0; }
    .age-card { border: 2px solid var(--border); border-radius: 12px; padding: 24px; margin-bottom: 20px; }
    .age-badge { display: inline-block; background: var(--emerald); color: #fff; font-weight: 700; border-radius: 8px; padding: 4px 14px; font-size: .9rem; margin-bottom: 12px; }`,
    content: `<div class="hadith-box">
            <p style="margin:0;font-size:1.05rem;">"Teach your children three things: the love of your Prophet, the love of his family, and the recitation of the Quran."<br>
            <span style="font-size:.85rem;opacity:.75;font-style:normal;">— Reported by Al-Tabarani</span></p>
          </div>

          <p>One of the most common questions Muslim parents ask is: <strong>"When is the right age to start my child's Quran education?"</strong> The answer is nuanced — it depends on the child, the approach, and what kind of "learning" you mean.</p>

          <p>This guide combines <strong>Islamic scholarship</strong> and <strong>modern child psychology</strong> to give you a clear, practical answer for every age group.</p>

          <h2>The Islamic View: Start Early</h2>
          <p>Islamic tradition has always emphasized early education. The great scholars of Islam — Imam Al-Shafi'i, Imam Ahmad ibn Hanbal, and Ibn Khaldun — all stressed that children should begin their Quranic education before the age of 7.</p>
          <p>Ibn Khaldun wrote in his famous <em>Muqaddimah</em>: <strong>"Teaching the Quran to children is the foundation of all Islamic education. It plants faith in their hearts."</strong></p>

          <div class="highlight-box">
            <strong>The Prophet Muhammad ﷺ said:</strong> "Command your children to pray when they are seven years old." This shows that Islamic education — including Quran — should be well established by age 7.
          </div>

          <h2>What Child Psychology Says About Early Learning</h2>
          <p>Modern neuroscience fully supports starting Quran education early:</p>
          <ul>
            <li><strong>Ages 0–7 (Critical Period):</strong> The brain forms 90% of its neural connections by age 5. Language acquisition — including new sounds like Arabic phonemes — happens most naturally during this period.</li>
            <li><strong>Ages 4–12 (Language Plasticity Window):</strong> Children in this range can learn new languages and sound systems with native-like accuracy. After puberty, this becomes significantly harder.</li>
            <li><strong>Memory capacity at 4–8:</strong> Young children often have superior rote memorization ability compared to adults. What they memorize at this age tends to stay for life.</li>
          </ul>

          <h2>Age-by-Age Guide to Quran Learning</h2>

          <div class="age-card">
            <span class="age-badge">Age 2–3 Years</span>
            <h3 style="margin-top:0;">Listening & Exposure Stage</h3>
            <p>Formal lessons are not appropriate at this age. However, this is the perfect time for <strong>Quranic immersion</strong>:</p>
            <ul>
              <li>Play recordings of beautiful Quranic recitation at home and in the car</li>
              <li>Teach simple duas like <em>Bismillah</em> before eating, <em>Alhamdulillah</em> after sneezing</li>
              <li>Introduce colorful Arabic alphabet books</li>
              <li>Let them see you reading the Quran — children imitate what they observe</li>
            </ul>
            <p style="color:var(--emerald);font-weight:600;">Goal: Create love and familiarity with the Quran before formal learning begins.</p>
          </div>

          <div class="age-card">
            <span class="age-badge">Age 3–4 Years</span>
            <h3 style="margin-top:0;">Introduction to Arabic Letters</h3>
            <p>By age 3.5–4, many children are ready for very short, playful Quran sessions:</p>
            <ul>
              <li>10–15 minute sessions maximum (3 times per week)</li>
              <li>Learn Arabic alphabet letters through colorful flashcards and songs</li>
              <li>Memorize very short Surahs: Al-Ikhlas (4 verses), Al-Falaq, An-Naas</li>
              <li>Daily duas: sleeping, waking, eating, entering/leaving home</li>
            </ul>
            <p style="color:var(--emerald);font-weight:600;">At NoorPath Academy, we have a dedicated <em>Little Learners</em> program for 3–5 year olds with interactive slides, games, and rewards.</p>
          </div>

          <div class="age-card">
            <span class="age-badge">Age 4–7 Years — GOLDEN WINDOW</span>
            <h3 style="margin-top:0;">The Best Age to Begin Structured Quran Learning</h3>
            <p>This is universally agreed upon as the <strong>ideal age to begin formal Quran education</strong>. Here's why:</p>
            <ul>
              <li><strong>Memory is at its peak</strong> — children can memorize a page of Quran in 1–2 days</li>
              <li><strong>Pronunciation is perfect</strong> — Arabic sounds are learned naturally without accent</li>
              <li><strong>No bad habits yet</strong> — they haven't developed incorrect pronunciation patterns</li>
              <li><strong>Routine is easy to set</strong> — daily lesson becomes a normal part of life</li>
            </ul>
            <p><strong>What to start with:</strong></p>
            <ul>
              <li>Begin with <a href="/courses/noorani-qaida-online" style="color:var(--emerald);">Noorani Qaida</a> (6–12 months)</li>
              <li>20–30 minute lessons, 5 days/week</li>
              <li>Start memorizing short Surahs from Juz Amma</li>
            </ul>
          </div>

          <div class="age-card">
            <span class="age-badge">Age 7–12 Years</span>
            <h3 style="margin-top:0;">The Learning & Foundation Building Stage</h3>
            <p>Children at this age can handle longer, more structured sessions and begin to understand what they're reading:</p>
            <ul>
              <li>30–45 minute lessons, 5 days/week</li>
              <li>Complete Noorani Qaida if not already done</li>
              <li>Begin proper Quran reading with Tajweed</li>
              <li>Excellent age to begin <a href="/courses/hifz-program-online" style="color:var(--emerald);">Hifz (memorization)</a></li>
              <li>Can now understand meaning and context of verses</li>
            </ul>
          </div>

          <div class="age-card">
            <span class="age-badge">Age 12+ Years & Adults</span>
            <h3 style="margin-top:0;">Never Too Late — Focused & Intentional Learning</h3>
            <p>Adults and teens may progress differently but they have real advantages:</p>
            <ul>
              <li><strong>Better focus</strong> and ability to concentrate for longer periods</li>
              <li><strong>Deeper understanding</strong> — can learn the meaning alongside recitation</li>
              <li><strong>Stronger motivation</strong> — choosing to learn Quran with intention (Niyyah)</li>
              <li>Can complete Noorani Qaida in as little as 3–6 months</li>
            </ul>
            <div class="highlight-box" style="margin-top:16px;margin-bottom:0;">
              <strong>Remember:</strong> The Prophet ﷺ said there is reward in learning Quran at any age: <em>"The one who recites the Quran with difficulty receives a double reward."</em> (Bukhari & Muslim)
            </div>
          </div>

          <h2>Signs Your Child is Ready to Start</h2>
          <ul>
            <li>Can sit and focus for at least 10–15 minutes</li>
            <li>Can repeat words and sounds after you</li>
            <li>Shows curiosity when you read Quran</li>
            <li>Has basic communication skills in their mother tongue</li>
          </ul>

          <h2>How to Get Started: A Step-by-Step Plan</h2>
          <ol>
            <li><strong>Start Quran immersion at home</strong> — play recitation, make dua visible in your lifestyle</li>
            <li><strong>At age 4–5:</strong> Enroll in structured classes starting with Noorani Qaida</li>
            <li><strong>Choose a qualified tutor</strong> — certified, patient, experienced with young children</li>
            <li><strong>Set a consistent daily schedule</strong> — same time every day builds habit</li>
            <li><strong>Celebrate progress</strong> — reward every milestone, no matter how small</li>
          </ol>

          <div class="highlight-box">
            <strong>Start with a Free Trial:</strong> Not sure which level is right for your child? At NoorPath Academy, we assess your child's level in the <a href="/online-quran-classes#cta" style="color:var(--emerald);font-weight:700;">free 30-minute trial class</a> and recommend the perfect starting point — no pressure, no payment required.
          </div>

          <h2>Common Questions (FAQ)</h2>

          <h3>Can a 3-year-old start learning the Quran?</h3>
          <p>Yes, with the right approach. At age 3, formal structured lessons with a tutor may be too intense. However, our <em>Little Learners</em> program at NoorPath is specifically designed for 3–5 year olds, using games, colorful slides, and short activities that feel like play — not study.</p>

          <h3>My child is 10 — have they missed the best window?</h3>
          <p>Absolutely not. Age 10 is an excellent starting age. Children at this age often progress faster than 4-year-olds in terms of reading comprehension and Tajweed rules. Many famous Huffaz began their Hifz at age 10–12. The most important thing is to start — today.</p>

          <h3>I am an adult — is it too late for me?</h3>
          <p>Never. We have students who began learning the Quran at age 40, 50, and even 60 — and they have completed their Noorani Qaida and are reciting with beautiful Tajweed. Allah rewards the effort, not just the result.</p>

          <h3>Should my child learn Arabic first before Quran?</h3>
          <p>No — Noorani Qaida teaches Arabic reading specifically for Quranic recitation. You do not need to learn conversational Arabic first. Many Muslims who cannot speak Arabic can recite the Quran beautifully through Qaida-based learning.</p>

          <div class="highlight-box" style="margin-top:32px;">
            <strong>Ready to begin your child's Quran journey?</strong><br>
            <a href="/online-quran-classes#cta" style="color:var(--emerald);font-weight:700;">Book a free trial class at NoorPath Academy</a> — we'll assess your child's level and create a personalised learning plan. No payment required. JazakAllah Khair.
          </div>
        </div>

        <div style="margin-top:56px;border-top:1px solid var(--border);padding-top:40px;">
          <h3 style="font-size:1.2rem;font-weight:700;margin-bottom:20px;">Related Articles</h3>
          <div class="row g-3">
            <div class="col-sm-6">
              <a href="/blog/how-to-teach-quran-to-kids" style="text-decoration:none;">
                <div class="blog-card">
                  <div class="blog-card-header" style="padding:20px 24px;"><span class="blog-tag">Parenting</span><div style="color:var(--white);font-weight:700;font-size:.95rem;margin-top:8px;">How to Teach Quran to Kids: Complete Guide</div></div>
                  <div class="blog-card-body"><span class="read-more">Read <i class="fas fa-arrow-right ms-1"></i></span></div>
                </div>
              </a>
            </div>
            <div class="col-sm-6">
              <a href="/blog/noorani-qaida-complete-guide" style="text-decoration:none;">
                <div class="blog-card">
                  <div class="blog-card-header" style="padding:20px 24px;"><span class="blog-tag">Noorani Qaida</span><div style="color:var(--white);font-weight:700;font-size:.95rem;margin-top:8px;">Noorani Qaida: Complete Beginner's Guide</div></div>
                  <div class="blog-card-body"><span class="read-more">Read <i class="fas fa-arrow-right ms-1"></i></span></div>
                </div>
              </a>`,
  },
  "dua-e-qunoot-arabic-english": {
    style: `.article-body { font-size: 1.05rem; line-height: 1.85; color: #374151; }
    .article-body h2 { font-size: 1.5rem; font-weight: 700; color: var(--charcoal); margin: 40px 0 16px; }
    .article-body h3 { font-size: 1.15rem; font-weight: 700; color: var(--emerald); margin: 24px 0 10px; }
    .article-body p { margin-bottom: 18px; }
    .article-body ul, .article-body ol { margin-bottom: 18px; padding-left: 24px; }
    .article-body li { margin-bottom: 8px; }
    .highlight-box { background: rgba(10,110,79,.06); border-left: 4px solid var(--emerald); border-radius: 8px; padding: 20px 24px; margin: 24px 0; }
    .gold-box { background: rgba(232,184,75,.08); border-left: 4px solid var(--gold); border-radius: 8px; padding: 20px 24px; margin: 24px 0; }

    /* Main Dua box */
    .dua-main-box { background: linear-gradient(135deg, rgba(10,110,79,.03), rgba(10,110,79,.07)); border: 2px solid rgba(10,110,79,.15); border-radius: 20px; padding: 40px 36px; margin: 32px 0; }
    .dua-label { text-align: center; font-size: .85rem; color: var(--muted); margin-bottom: 20px; font-weight: 600; letter-spacing: 1px; text-transform: uppercase; }
    .dua-arabic { font-family: 'Amiri', serif; font-size: 1.9rem; line-height: 2.3; color: var(--charcoal); direction: rtl; text-align: right; margin-bottom: 28px; }
    .dua-roman { font-style: italic; color: #4b5563; font-size: 1rem; line-height: 1.9; margin-bottom: 20px; padding: 16px 20px; background: rgba(255,255,255,.7); border-radius: 10px; }
    .dua-english { color: #1f2937; font-size: 1rem; line-height: 1.85; font-weight: 500; border-top: 1px solid rgba(10,110,79,.15); padding-top: 20px; }

    /* Word by word */
    .phrase-table { width: 100%; border-collapse: separate; border-spacing: 0 10px; margin: 20px 0; }
    .phrase-table tr td { padding: 12px 16px; background: var(--ivory); border: 1px solid var(--border); font-size: .92rem; }
    .phrase-table tr td:first-child { font-family: 'Amiri', serif; font-size: 1.3rem; direction: rtl; text-align: right; color: var(--emerald); border-radius: 8px 0 0 8px; width: 35%; }
    .phrase-table tr td:nth-child(2) { font-style: italic; color: #6b7280; border-radius: 0; width: 30%; }
    .phrase-table tr td:last-child { color: var(--charcoal); font-weight: 600; border-radius: 0 8px 8px 0; }

    /* Steps */
    .step-card { display: flex; gap: 16px; padding: 20px; background: var(--ivory); border: 1px solid var(--border); border-radius: 12px; margin-bottom: 12px; align-items: flex-start; }
    .step-num { display: flex; align-items: center; justify-content: center; min-width: 38px; height: 38px; border-radius: 50%; background: var(--emerald); color: #fff; font-weight: 700; font-size: .95rem; }

    /* Madhab comparison */
    .madhab-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(220px, 1fr)); gap: 14px; margin: 20px 0; }
    .madhab-card { background: var(--ivory); border: 1px solid var(--border); border-radius: 12px; padding: 18px; }
    .madhab-name { font-weight: 700; color: var(--emerald); margin-bottom: 8px; font-size: .95rem; }
    .madhab-detail { font-size: .85rem; color: var(--muted); line-height: 1.6; }

    /* FAQ */
    .faq-item { border: 1px solid var(--border); border-radius: 10px; margin-bottom: 12px; overflow: hidden; }
    .faq-q { padding: 16px 20px; font-weight: 700; background: var(--ivory); color: var(--charcoal); display: flex; justify-content: space-between; align-items: center; }
    .faq-a { padding: 16px 20px; color: #374151; font-size: .95rem; line-height: 1.7; border-top: 1px solid var(--border); }

    @media (max-width: 576px) {
      .dua-arabic { font-size: 1.5rem; }
      .phrase-table tr td:first-child { width: 40%; }
    }`,
    content: `<p><strong>Dua e Qunoot</strong> (دعاء القنوت) is one of the most important duas in a Muslim's daily prayer life. It is the supplication recited in the <strong>Witr prayer</strong> — the final prayer of the night — and is a direct teaching from the Prophet Muhammad ﷺ to his beloved grandson Hasan ibn Ali (رضي الله عنهما).</p>

          <p>In this complete guide, you will find the <strong>full Arabic text, transliteration, and English translation</strong> of Dua e Qunoot — plus when to recite it, how it differs across the four madhabs, and how to teach it to children.</p>

          <div class="gold-box">
            <strong>📖 The Hadith Behind This Dua:</strong><br>
            Al-Hasan ibn Ali (رضي الله عنهما) narrated: <em>"The Messenger of Allah ﷺ taught me some words to say in the Witr prayer: 'Allaahumma-hdini feeman hadayt...'"</em> — (Abu Dawud 1425, Tirmidhi 464, An-Nasa'i, Ibn Majah — all authenticated as Hasan/Sahih)
          </div>

          <!-- =================== QUNOOT HANAFI =================== -->
          <h2>Dua e Qunoot — Full Arabic Text with Transliteration</h2>
          <p>This is the widely recited Dua e Qunoot (also known as <em>Qunoot al-Witr</em>), taught by the Prophet ﷺ to Hasan ibn Ali — the most authentic narration:</p>

          <div class="dua-main-box">
            <div class="dua-label">🌙 Dua e Qunoot · Qunoot al-Witr</div>

            <div class="dua-arabic">
              اللَّهُمَّ اهْدِنِي فِيمَنْ هَدَيْتَ، وَعَافِنِي فِيمَنْ عَافَيْتَ، وَتَوَلَّنِي فِيمَنْ تَوَلَّيْتَ، وَبَارِكْ لِي فِيمَا أَعْطَيْتَ، وَقِنِي شَرَّ مَا قَضَيْتَ، فَإِنَّكَ تَقْضِي وَلَا يُقْضَى عَلَيْكَ، وَإِنَّهُ لَا يَذِلُّ مَنْ وَالَيْتَ، وَلَا يَعِزُّ مَنْ عَادَيْتَ، تَبَارَكْتَ رَبَّنَا وَتَعَالَيْتَ، وَلَكَ الْحَمْدُ عَلَى مَا قَضَيْتَ، أَسْتَغْفِرُكَ وَأَتُوبُ إِلَيْكَ
            </div>

            <div class="dua-roman">
              <strong>Transliteration:</strong><br><br>
              Allaahumma-hdini feeman hadayt,<br>
              wa 'aafini feeman 'aafayt,<br>
              wa tawallanee feeman tawallayt,<br>
              wa baarik lee feemaa a'tayt,<br>
              wa qinee sharra maa qadayt,<br>
              fa innaka taqdee wa laa yuqdaa 'alayk,<br>
              wa innahu laa yadhillu man waalayt,<br>
              wa laa ya'izzu man 'aadayt,<br>
              tabaarakta Rabbanaa wa ta'aalayt,<br>
              wa lakal-hamdu 'alaa maa qadayt,<br>
              astaghfiruka wa atoobu ilayk.
            </div>

            <div class="dua-english">
              <strong>English Translation:</strong><br><br>
              O Allah, guide me among those You have guided,<br>
              and pardon me among those You have pardoned,<br>
              and befriend me among those You have befriended,<br>
              and bless me in what You have granted,<br>
              and protect me from the evil of what You have decreed.<br>
              For verily You decree, and none can decree over You,<br>
              and he is not humiliated whom You befriend,<br>
              and he is not honored whom You oppose.<br>
              Blessed are You, our Lord, and Exalted.<br>
              And Yours is the praise for what You have decreed.<br>
              I seek Your forgiveness and turn to You in repentance.
            </div>
          </div>

          <!-- ADDITIONAL DUA: LONGER VERSION -->
          <h2>Extended Dua e Qunoot (Longer Version)</h2>
          <p>Some scholars also recite an additional Qunoot dua after the above. This is commonly known in the Hanafi tradition and combines the Qunoot with Salawat on the Prophet ﷺ:</p>

          <div class="dua-main-box" style="border-color:rgba(232,184,75,.3);background:rgba(232,184,75,.04);">
            <div class="dua-label">📿 Additional Qunoot Dua</div>
            <div class="dua-arabic">
              اللَّهُمَّ إِنَّا نَسْتَعِينُكَ وَنَسْتَغْفِرُكَ وَنُؤْمِنُ بِكَ وَنَتَوَكَّلُ عَلَيْكَ وَنُثْنِي عَلَيْكَ الْخَيْرَ وَنَشْكُرُكَ وَلَا نَكْفُرُكَ وَنَخْلَعُ وَنَتْرُكُ مَنْ يَفْجُرُكَ، اللَّهُمَّ إِيَّاكَ نَعْبُدُ وَلَكَ نُصَلِّي وَنَسْجُدُ وَإِلَيْكَ نَسْعَى وَنَحْفِدُ وَنَرْجُو رَحْمَتَكَ وَنَخْشَى عَذَابَكَ إِنَّ عَذَابَكَ بِالْكُفَّارِ مُلْحِقٌ
            </div>
            <div class="dua-roman">
              <strong>Transliteration:</strong><br><br>
              Allahumma innaa nasta'eenuka wa nastaghfiruka wa nu'minu bika wa natawakkalu 'alayka wa nuthni 'alaykal-khayr, wa nashkuruka wa laa nakfuruka wa nakhla'u wa natruku man yafjuruk. Allahumma iyyaaka na'budu wa laka nusalli wa nasjudu wa ilayka nas'aa wa nahfidu wa narju rahmataka wa nakhsha 'adhaabaka, inna 'adhaabaka bil-kuffari mulhiq.
            </div>
            <div class="dua-english">
              <strong>English Translation:</strong><br><br>
              O Allah, we seek Your help, we seek Your forgiveness, we believe in You, we place our trust in You, we praise You with all good, we thank You, we do not deny You, and we disown and abandon those who disobey You. O Allah, You alone do we worship, and to You we pray and prostrate, and to You we hasten and serve, and we hope for Your mercy and fear Your punishment. Verily, Your punishment is bound to overtake the disbelievers.
            </div>
          </div>

          <!-- =================== LINE BY LINE =================== -->
          <h2>Line-by-Line Meaning of Dua e Qunoot</h2>
          <p>Understanding each line deepens your focus (khushu') when reciting it in salah:</p>

          <table class="phrase-table">
            <tr>
              <td>اللَّهُمَّ اهْدِنِي فِيمَنْ هَدَيْتَ</td>
              <td>Allahumma-hdini feeman hadayt</td>
              <td>O Allah, guide me among those You have guided</td>
            </tr>
            <tr>
              <td>وَعَافِنِي فِيمَنْ عَافَيْتَ</td>
              <td>wa 'aafini feeman 'aafayt</td>
              <td>and grant me health among those You have granted health</td>
            </tr>
            <tr>
              <td>وَتَوَلَّنِي فِيمَنْ تَوَلَّيْتَ</td>
              <td>wa tawallanee feeman tawallayt</td>
              <td>and befriend me among those You have befriended</td>
            </tr>
            <tr>
              <td>وَبَارِكْ لِي فِيمَا أَعْطَيْتَ</td>
              <td>wa baarik lee feemaa a'tayt</td>
              <td>and bless me in what You have given me</td>
            </tr>
            <tr>
              <td>وَقِنِي شَرَّ مَا قَضَيْتَ</td>
              <td>wa qinee sharra maa qadayt</td>
              <td>and protect me from the evil You have decreed</td>
            </tr>
            <tr>
              <td>فَإِنَّكَ تَقْضِي وَلَا يُقْضَى عَلَيْكَ</td>
              <td>fa innaka taqdee wa laa yuqdaa 'alayk</td>
              <td>for You decree and none can decree against You</td>
            </tr>
            <tr>
              <td>لَا يَذِلُّ مَنْ وَالَيْتَ</td>
              <td>laa yadhillu man waalayt</td>
              <td>none is humiliated whom You befriend</td>
            </tr>
            <tr>
              <td>وَلَا يَعِزُّ مَنْ عَادَيْتَ</td>
              <td>wa laa ya'izzu man 'aadayt</td>
              <td>and none is honored whom You oppose</td>
            </tr>
            <tr>
              <td>تَبَارَكْتَ رَبَّنَا وَتَعَالَيْتَ</td>
              <td>tabaarakta Rabbanaa wa ta'aalayt</td>
              <td>Blessed are You, our Lord, and Most Exalted</td>
            </tr>
            <tr>
              <td>أَسْتَغْفِرُكَ وَأَتُوبُ إِلَيْكَ</td>
              <td>astaghfiruka wa atoobu ilayk</td>
              <td>I seek Your forgiveness and repent to You</td>
            </tr>
          </table>

          <!-- =================== WHEN TO RECITE =================== -->
          <h2>When is Dua e Qunoot Recited?</h2>

          <div class="madhab-grid">
            <div class="madhab-card">
              <div class="madhab-name">🕌 In Witr Prayer</div>
              <div class="madhab-detail">Recited in the final rak'ah of Witr (the odd-numbered night prayer). This is agreed upon by all four major madhabs as the primary occasion.</div>
            </div>
            <div class="madhab-card">
              <div class="madhab-name">🌅 In Fajr Prayer</div>
              <div class="madhab-detail">Those following the Shafi'i madhab recite Qunoot in the second rak'ah of Fajr prayer, after rising from ruku'. This is a well-known scholarly position.</div>
            </div>
            <div class="madhab-card">
              <div class="madhab-name">⚠️ Qunoot an-Nawazil</div>
              <div class="madhab-detail">During times of widespread calamity, disaster, or crisis, the imam recites a special Qunoot supplication in all five daily prayers. This is proven from the Sunnah.</div>
            </div>
            <div class="madhab-card">
              <div class="madhab-name">🌙 After or Before Ruku'?</div>
              <div class="madhab-detail">Hanafi madhab: Qunoot is recited before ruku' in Witr. Shafi'i and Hanbali: after ruku'. Both positions are from authentic narrations — follow your local imam.</div>
            </div>
          </div>

          <!-- =================== HOW TO =================== -->
          <h2>How to Recite Dua e Qunoot in Witr — Step by Step</h2>

          <div class="step-card">
            <div class="step-num">1</div>
            <div><strong>Complete two rak'ahs of Witr</strong><br>Witr consists of either 1, 3, 5, 7, or 11 rak'ahs — most commonly 3. Pray the first two rak'ahs normally as you would any other prayer.</div>
          </div>
          <div class="step-card">
            <div class="step-num">2</div>
            <div><strong>Stand for the final rak'ah</strong><br>In the third rak'ah, recite Surah Al-Fatiha and another surah (commonly Surah Al-Ikhlas, Al-Falaq, and An-Naas).</div>
          </div>
          <div class="step-card">
            <div class="step-num">3</div>
            <div><strong>Raise your hands and say Takbeer</strong><br>After the surah, raise your hands to shoulder level saying "Allahu Akbar" — this signals the beginning of Qunoot.</div>
          </div>
          <div class="step-card">
            <div class="step-num">4</div>
            <div><strong>Recite Dua e Qunoot</strong><br>With hands raised in the dua position (palms facing upward), recite the Dua e Qunoot quietly or silently. You may raise your hands or hold them in front of you — both are acceptable.</div>
          </div>
          <div class="step-card">
            <div class="step-num">5</div>
            <div><strong>Proceed with ruku' (bowing)</strong><br>After completing the Qunoot, go into ruku' as normal. Then continue with the rest of the rak'ah until the final salaam.</div>
          </div>

          <!-- =================== BENEFITS & VIRTUES =================== -->
          <h2>Virtues and Benefits of Dua e Qunoot</h2>
          <ul>
            <li><strong>Direct teaching of the Prophet ﷺ:</strong> It was personally taught by the Prophet Muhammad ﷺ to Hasan ibn Ali — making it one of the most authenticated duas in existence.</li>
            <li><strong>Asks for the best of this world and the Next:</strong> The dua encompasses guidance, health, friendship with Allah, blessings, and protection from harm — a comprehensive request for all goodness.</li>
            <li><strong>Part of the Witr prayer:</strong> The Prophet ﷺ said: <em>"Make Witr the last of your night prayers."</em> (Bukhari). Ending the night with this dua connects you deeply with Allah before sleep.</li>
            <li><strong>Acknowledges Allah's complete authority:</strong> The phrase <em>"fa innaka taqdee wa laa yuqdaa 'alayk"</em> (You decree and none can decree against You) is a profound declaration of tawakkul (trust in Allah).</li>
            <li><strong>Ends with tawbah (repentance):</strong> The dua closes with <em>"astaghfiruka wa atoobu ilayk"</em> — seeking forgiveness and turning back to Allah, which is the highest spiritual act.</li>
          </ul>

          <!-- =================== TEACHING KIDS =================== -->
          <h2>Teaching Dua e Qunoot to Children</h2>
          <p>Dua e Qunoot can be taught to children as young as 5–6 years old who are beginning to pray. Here is how:</p>
          <ul>
            <li><strong>Learn it in sections:</strong> Teach 2–3 lines at a time over several days, not all at once.</li>
            <li><strong>Recite it with them:</strong> Pray Witr with your child and let them recite it alongside you every night — repetition is the key.</li>
            <li><strong>Explain the meaning simply:</strong> Even young children understand "We're asking Allah to guide us and protect us from bad things."</li>
            <li><strong>Use the transliteration:</strong> For younger children who haven't learned Arabic script yet, use the transliteration above.</li>
            <li><strong>Make it a routine:</strong> Children who recite it every night in Witr will have it memorized within 2–3 weeks naturally.</li>
          </ul>

          <div class="highlight-box">
            <strong>At NoorPath Academy</strong>, our tutors teach Dua e Qunoot alongside correct Witr prayer methods, Tajweed, and Quran recitation — all in one structured lesson. <a href="/courses/islamic-studies-online" style="color:var(--emerald);font-weight:700;">See our Islamic Studies course →</a> or <a href="/online-quran-classes#cta" style="color:var(--emerald);font-weight:700;">book a free trial class</a>.
          </div>

          <!-- =================== FAQ =================== -->
          <h2>Frequently Asked Questions about Dua e Qunoot</h2>

          <div class="faq-item">
            <div class="faq-q"><span>What is Dua e Qunoot?</span> <i class="fas fa-chevron-down"></i></div>
            <div class="faq-a">Dua e Qunoot (دعاء القنوت) is a special supplication recited in the Witr prayer. It was taught by the Prophet Muhammad ﷺ to his grandson Hasan ibn Ali (رضي الله عنهما), narrated in Abu Dawud, Tirmidhi, and An-Nasa'i with authentic chains. It asks Allah for guidance, health, blessings, and protection from the evil of His decree.</div>
          </div>
          <div class="faq-item">
            <div class="faq-q"><span>Is Dua e Qunoot wajib (obligatory)?</span> <i class="fas fa-chevron-down"></i></div>
            <div class="faq-a">According to the Hanafi madhab, Dua e Qunoot is wajib (obligatory) in Witr prayer. Forgetting it requires a sajdah sahw (prostration of forgetfulness). According to the Shafi'i, Maliki, and Hanbali madhabs, it is a strongly recommended Sunnah. All four madhabs agree it should be recited.</div>
          </div>
          <div class="faq-item">
            <div class="faq-q"><span>What is the difference between Qunoot al-Witr and Qunoot an-Nawazil?</span> <i class="fas fa-chevron-down"></i></div>
            <div class="faq-a">Qunoot al-Witr is the regular supplication recited every night in the Witr prayer, beginning with "Allahumma-hdini." Qunoot an-Nawazil is a special supplication made during times of calamity — it is recited in all five daily prayers (or in Fajr only, according to some scholars) until the crisis passes. Both are authentic Sunnah.</div>
          </div>
          <div class="faq-item">
            <div class="faq-q"><span>Can you recite Dua e Qunoot in your own language?</span> <i class="fas fa-chevron-down"></i></div>
            <div class="faq-a">According to the majority of scholars, the Qunoot in Witr should be recited in Arabic. However, if a person does not know Arabic and is still learning, some scholars permit making dua in one's own language. The goal is to learn the Arabic text as soon as possible, as the prayer is primarily in Arabic.</div>
          </div>
          <div class="faq-item">
            <div class="faq-q"><span>How many rak'ahs is Witr prayer?</span> <i class="fas fa-chevron-down"></i></div>
            <div class="faq-a">Witr prayer can be 1, 3, 5, 7, or 11 rak'ahs — it must be an odd number. The most common is 3 rak'ahs. It is performed after Isha prayer and before Fajr. The Prophet ﷺ said: "Make Witr the last of your night prayers." (Bukhari). Dua e Qunoot is recited in the final rak'ah.</div>
          </div>
        </div>

        <div style="margin-top:56px;border-top:1px solid var(--border);padding-top:40px;">
          <h3 style="font-size:1.2rem;font-weight:700;margin-bottom:20px;">Related Articles</h3>
          <div class="row g-3">
            <div class="col-sm-6">
              <a href="/blog/ayatul-kursi-arabic-english-benefits" style="text-decoration:none;">
                <div class="blog-card"><div class="blog-card-header" style="padding:20px 24px;"><span class="blog-tag">Quran</span><div style="color:var(--white);font-weight:700;font-size:.95rem;margin-top:8px;">Ayatul Kursi — Arabic, Translation & Benefits</div></div><div class="blog-card-body"><span class="read-more">Read <i class="fas fa-arrow-right ms-1"></i></span></div></div>
              </a>
            </div>
            <div class="col-sm-6">
              <a href="/blog/duas-for-kids-to-memorize" style="text-decoration:none;">
                <div class="blog-card"><div class="blog-card-header" style="padding:20px 24px;"><span class="blog-tag">Daily Duas</span><div style="color:var(--white);font-weight:700;font-size:.95rem;margin-top:8px;">20 Essential Duas for Kids to Memorize</div></div><div class="blog-card-body"><span class="read-more">Read <i class="fas fa-arrow-right ms-1"></i></span></div></div>
              </a>
            </div>
            <div class="col-sm-6">
              <a href="/blog/99-names-of-allah-asmaul-husna" style="text-decoration:none;">
                <div class="blog-card"><div class="blog-card-header" style="padding:20px 24px;"><span class="blog-tag">Islamic</span><div style="color:var(--white);font-weight:700;font-size:.95rem;margin-top:8px;">99 Names of Allah (Asmaul Husna)</div></div><div class="blog-card-body"><span class="read-more">Read <i class="fas fa-arrow-right ms-1"></i></span></div></div>
              </a>
            </div>
            <div class="col-sm-6">
              <a href="/blog/surah-yaseen-arabic-english" style="text-decoration:none;">
                <div class="blog-card"><div class="blog-card-header" style="padding:20px 24px;"><span class="blog-tag">Quran</span><div style="color:var(--white);font-weight:700;font-size:.95rem;margin-top:8px;">Surah Yaseen — Full Arabic Text</div></div><div class="blog-card-body"><span class="read-more">Read <i class="fas fa-arrow-right ms-1"></i></span></div></div>
              </a>`,
  },
  "duas-for-kids-to-memorize": {
    style: `.article-body { font-size: 1.05rem; line-height: 1.85; color: #374151; }
    .article-body h2 { font-size: 1.5rem; font-weight: 700; color: var(--charcoal); margin: 40px 0 16px; }
    .article-body h3 { font-size: 1.1rem; font-weight: 700; color: var(--emerald); margin: 24px 0 10px; }
    .article-body p { margin-bottom: 18px; }
    .article-body ul { margin-bottom: 18px; padding-left: 24px; }
    .article-body li { margin-bottom: 8px; }
    .highlight-box { background: rgba(10,110,79,.06); border-left: 4px solid var(--emerald); border-radius: 8px; padding: 20px 24px; margin: 24px 0; }
    .dua-card { background: var(--ivory); border: 1px solid var(--border); border-radius: 12px; padding: 24px; margin-bottom: 20px; }
    .dua-arabic { font-family: 'Amiri', serif; font-size: 1.6rem; line-height: 2.2; text-align: right; color: var(--charcoal); direction: rtl; margin-bottom: 12px; }
    .dua-transliteration { font-style: italic; color: var(--emerald); font-weight: 600; margin-bottom: 6px; font-size: .95rem; }
    .dua-meaning { color: var(--muted); font-size: .92rem; }
    .dua-when { display:inline-block; background: rgba(10,110,79,.1); color: var(--emerald); border-radius: 20px; padding: 3px 12px; font-size: .82rem; font-weight: 600; margin-bottom: 12px; }`,
    content: `<p>Teaching children daily duas is one of the most practical and impactful forms of Islamic parenting. When a child learns to say <em>Bismillah</em> before eating, <em>Alhamdulillah</em> in gratitude, and duas before sleeping and waking — <strong>they grow up with Allah in their everyday life.</strong></p>
          <p>This guide contains <strong>20 essential daily duas</strong> — with full Arabic text, easy transliteration, and English meaning — organized by when they are recited. Perfect for children aged 3–12.</p>

          <div class="highlight-box">
            <strong>Teaching Tip:</strong> Don't try to teach all 20 duas at once. Pick 2–3 duas that apply to your child's daily routine and repeat them consistently for 2 weeks before adding new ones. Repetition is key — children learn duas fastest through daily practice, not memorization sessions.
          </div>

          <h2>Duas for Morning</h2>

          <div class="dua-card">
            <span class="dua-when">When Waking Up</span>
            <div class="dua-arabic">الْحَمْدُ لِلَّهِ الَّذِي أَحْيَانَا بَعْدَ مَا أَمَاتَنَا وَإِلَيْهِ النُّشُورُ</div>
            <div class="dua-transliteration">Alhamdu lillahil-ladhi ahyana ba'da ma amatana wa ilayhin-nushur</div>
            <div class="dua-meaning"><strong>Meaning:</strong> "All praise is for Allah who gave us life after having taken it from us, and unto Him is the resurrection." (Bukhari)</div>
          </div>

          <div class="dua-card">
            <span class="dua-when">Morning Remembrance</span>
            <div class="dua-arabic">أَصْبَحْنَا وَأَصْبَحَ الْمُلْكُ لِلَّهِ</div>
            <div class="dua-transliteration">Asbahna wa asbahal-mulku lillah</div>
            <div class="dua-meaning"><strong>Meaning:</strong> "We have reached the morning and so has all sovereignty — to Allah." (Muslim)</div>
          </div>

          <h2>Duas Before & After Eating</h2>

          <div class="dua-card">
            <span class="dua-when">Before Eating</span>
            <div class="dua-arabic">بِسْمِ اللَّهِ</div>
            <div class="dua-transliteration">Bismillah</div>
            <div class="dua-meaning"><strong>Meaning:</strong> "In the name of Allah." The simplest and most important dua — every child should know this from age 2. (Bukhari)</div>
          </div>

          <div class="dua-card">
            <span class="dua-when">After Eating</span>
            <div class="dua-arabic">الْحَمْدُ لِلَّهِ الَّذِي أَطْعَمَنِي هَذَا وَرَزَقَنِيهِ</div>
            <div class="dua-transliteration">Alhamdu lillahil-ladhi at'amani hadha wa razaqanihi</div>
            <div class="dua-meaning"><strong>Meaning:</strong> "All praise is for Allah who fed me this and provided it for me." (Tirmidhi)</div>
          </div>

          <div class="dua-card">
            <span class="dua-when">When Forgetting Bismillah Before Eating</span>
            <div class="dua-arabic">بِسْمِ اللَّهِ أَوَّلَهُ وَآخِرَهُ</div>
            <div class="dua-transliteration">Bismillahi awwalahu wa akhirahu</div>
            <div class="dua-meaning"><strong>Meaning:</strong> "In the name of Allah, at its beginning and at its end." (Abu Dawud)</div>
          </div>

          <h2>Duas for Entering & Leaving Home</h2>

          <div class="dua-card">
            <span class="dua-when">When Entering the Home</span>
            <div class="dua-arabic">اللَّهُمَّ إِنِّي أَسْأَلُكَ خَيْرَ الْمَوْلَجِ وَخَيْرَ الْمَخْرَجِ بِسْمِ اللَّهِ وَلَجْنَا وَبِسْمِ اللَّهِ خَرَجْنَا</div>
            <div class="dua-transliteration">Allahumma inni as'aluka khayral-mawlaji wa khayral-makhraji. Bismillahi walajna wa bismillahi kharajna</div>
            <div class="dua-meaning"><strong>Meaning:</strong> "O Allah, I ask You for goodness upon entering and goodness upon leaving. In the name of Allah we enter, and in the name of Allah we leave." (Abu Dawud)</div>
          </div>

          <div class="dua-card">
            <span class="dua-when">When Leaving the Home</span>
            <div class="dua-arabic">بِسْمِ اللَّهِ تَوَكَّلْتُ عَلَى اللَّهِ وَلَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللَّهِ</div>
            <div class="dua-transliteration">Bismillahi tawakkaltu 'alallahi wa la hawla wa la quwwata illa billah</div>
            <div class="dua-meaning"><strong>Meaning:</strong> "In the name of Allah, I place my trust in Allah, and there is no might nor power except with Allah." (Tirmidhi)</div>
          </div>

          <h2>Duas for the Bathroom</h2>

          <div class="dua-card">
            <span class="dua-when">Before Entering the Bathroom</span>
            <div class="dua-arabic">اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْخُبُثِ وَالْخَبَائِثِ</div>
            <div class="dua-transliteration">Allahumma inni a'udhu bika minal-khubuthi wal-khaba'ith</div>
            <div class="dua-meaning"><strong>Meaning:</strong> "O Allah, I seek refuge with You from evil and from the evil ones." (Bukhari)</div>
          </div>

          <div class="dua-card">
            <span class="dua-when">After Leaving the Bathroom</span>
            <div class="dua-arabic">غُفْرَانَكَ</div>
            <div class="dua-transliteration">Ghufranaka</div>
            <div class="dua-meaning"><strong>Meaning:</strong> "I seek Your forgiveness." (Abu Dawud, Tirmidhi) — Short and easy for young children to memorize.</div>
          </div>

          <h2>Duas for Sleep & Bedtime</h2>

          <div class="dua-card">
            <span class="dua-when">Before Sleeping</span>
            <div class="dua-arabic">بِاسْمِكَ اللَّهُمَّ أَمُوتُ وَأَحْيَا</div>
            <div class="dua-transliteration">Bismika Allahumma amutu wa ahya</div>
            <div class="dua-meaning"><strong>Meaning:</strong> "In Your name, O Allah, I die and I live." (Bukhari)</div>
          </div>

          <div class="dua-card">
            <span class="dua-when">Before Sleeping (longer version)</span>
            <div class="dua-arabic">اللَّهُمَّ بِاسْمِكَ أَحْيَا وَبِاسْمِكَ أَمُوتُ</div>
            <div class="dua-transliteration">Allahumma bismika ahya wa bismika amut</div>
            <div class="dua-meaning"><strong>Meaning:</strong> "O Allah, in Your name I live and in Your name I die." (Bukhari)</div>
          </div>

          <h2>Duas for Travel & Transport</h2>

          <div class="dua-card">
            <span class="dua-when">When Getting Into a Vehicle</span>
            <div class="dua-arabic">سُبْحَانَ الَّذِي سَخَّرَ لَنَا هَذَا وَمَا كُنَّا لَهُ مُقْرِنِينَ وَإِنَّا إِلَى رَبِّنَا لَمُنْقَلِبُونَ</div>
            <div class="dua-transliteration">Subhanal-ladhi sakhkhara lana hadha wa ma kunna lahu muqrinin. Wa inna ila Rabbina lamunqalibun</div>
            <div class="dua-meaning"><strong>Meaning:</strong> "Glory be to He who has made this subservient to us, though we were not capable of that, and verily to our Lord we shall return." (Quran 43:13-14)</div>
          </div>

          <h2>Duas for Protection</h2>

          <div class="dua-card">
            <span class="dua-when">Morning & Evening Protection Dua</span>
            <div class="dua-arabic">أَعُوذُ بِكَلِمَاتِ اللَّهِ التَّامَّاتِ مِنْ شَرِّ مَا خَلَقَ</div>
            <div class="dua-transliteration">A'udhu bikalimatillahit-tammati min sharri ma khalaq</div>
            <div class="dua-meaning"><strong>Meaning:</strong> "I seek refuge in the perfect words of Allah from the evil of what He has created." — Recite 3 times in the morning and evening. (Muslim)</div>
          </div>

          <div class="dua-card">
            <span class="dua-when">Dua for Protection from Harm</span>
            <div class="dua-arabic">بِسْمِ اللَّهِ الَّذِي لَا يَضُرُّ مَعَ اسْمِهِ شَيْءٌ فِي الْأَرْضِ وَلَا فِي السَّمَاءِ</div>
            <div class="dua-transliteration">Bismillahil-ladhi la yadurru ma'asmihi shay'un fil-ardi wa la fis-sama'</div>
            <div class="dua-meaning"><strong>Meaning:</strong> "In the name of Allah, with whose name nothing in the earth or sky can cause harm." — Recite 3 times in the morning and evening. (Abu Dawud, Tirmidhi)</div>
          </div>

          <h2>Short Surahs to Memorize Alongside Duas</h2>
          <p>Alongside daily duas, encourage your child to memorize these short Surahs from Juz Amma — they are short, beautiful, and complete the child's Salah education:</p>
          <ul>
            <li><strong>Surah Al-Fatiha (7 verses)</strong> — essential for Salah</li>
            <li><strong>Surah Al-Ikhlas (4 verses)</strong> — "Say He is Allah, the One"</li>
            <li><strong>Surah Al-Falaq (5 verses)</strong> — protection from evil</li>
            <li><strong>Surah An-Naas (6 verses)</strong> — protection from whispers</li>
            <li><strong>Surah Al-Kawthar (3 verses)</strong> — shortest Surah</li>
            <li><strong>Surah Al-Asr (3 verses)</strong> — the importance of time</li>
          </ul>

          <h2>How to Teach Duas to Young Children</h2>
          <ul>
            <li><strong>Model, don't just instruct:</strong> Say the dua yourself, visibly, before eating, sleeping, etc. Children imitate what they see.</li>
            <li><strong>Repetition over sessions:</strong> Say the dua with them every single time, not just during "lesson time."</li>
            <li><strong>Use songs and rhymes:</strong> For very young children (3–5), many duas can be taught in a sing-song tone.</li>
            <li><strong>Explain what they're saying:</strong> Even a 4-year-old can understand "we say Bismillah to tell Allah we're starting."</li>
            <li><strong>Celebrate milestones:</strong> When they recite a dua correctly without help for the first time, celebrate it!</li>
          </ul>

          <div class="highlight-box" style="margin-top:32px;">
            <strong>Daily Duas are part of our All-in-One Kids Program at NoorPath Academy.</strong> Our tutors teach children their daily Duas alongside Noorani Qaida, short Surahs, and basic Islamic manners — all in one structured class. <a href="/courses/daily-duas-for-kids" style="color:var(--emerald);font-weight:700;">Learn about our Daily Duas program →</a> or <a href="/online-quran-classes#cta" style="color:var(--emerald);font-weight:700;">book a free trial class</a>.
          </div>
        </div>

        <div style="margin-top:56px;border-top:1px solid var(--border);padding-top:40px;">
          <h3 style="font-size:1.2rem;font-weight:700;margin-bottom:20px;">Related Articles</h3>
          <div class="row g-3">
            <div class="col-sm-6">
              <a href="/blog/how-to-teach-quran-to-kids" style="text-decoration:none;">
                <div class="blog-card">
                  <div class="blog-card-header" style="padding:20px 24px;"><span class="blog-tag">Parenting</span><div style="color:var(--white);font-weight:700;font-size:.95rem;margin-top:8px;">How to Teach Quran to Kids</div></div>
                  <div class="blog-card-body"><span class="read-more">Read <i class="fas fa-arrow-right ms-1"></i></span></div>
                </div>
              </a>
            </div>
            <div class="col-sm-6">
              <a href="/blog/best-age-to-start-quran-learning" style="text-decoration:none;">
                <div class="blog-card">
                  <div class="blog-card-header" style="padding:20px 24px;"><span class="blog-tag">Parenting</span><div style="color:var(--white);font-weight:700;font-size:.95rem;margin-top:8px;">Best Age to Start Quran Learning</div></div>
                  <div class="blog-card-body"><span class="read-more">Read <i class="fas fa-arrow-right ms-1"></i></span></div>
                </div>
              </a>`,
  },
  "how-to-memorize-quran-faster": {
    style: `.article-body { font-size: 1.05rem; line-height: 1.85; color: #374151; }
    .article-body h2 { font-size: 1.5rem; font-weight: 700; color: var(--charcoal); margin: 40px 0 16px; }
    .article-body h3 { font-size: 1.15rem; font-weight: 700; color: var(--emerald); margin: 28px 0 12px; }
    .article-body p { margin-bottom: 18px; }
    .article-body ul, .article-body ol { margin-bottom: 18px; padding-left: 24px; }
    .article-body li { margin-bottom: 8px; }
    .highlight-box { background: rgba(10,110,79,.06); border-left: 4px solid var(--emerald); border-radius: 8px; padding: 20px 24px; margin: 24px 0; }
    .hadith-box { background: linear-gradient(135deg,#0a3d28,#0d5436); color: #fff; border-radius: 12px; padding: 24px; margin: 24px 0; }
    .tip-card { display:flex; gap:16px; padding:20px; background:var(--ivory); border-radius:10px; border:1px solid var(--border); margin-bottom:16px; }
    .tip-num { min-width:40px; height:40px; background:var(--emerald); color:#fff; border-radius:50%; font-weight:700; display:flex; align-items:center; justify-content:center; flex-shrink:0; }`,
    content: `<div class="hadith-box">
            <p style="margin:0;font-size:1.05rem;">"It will be said to the companion of the Quran: Recite and ascend. Recite as you used to recite in the world. For your rank will be at the last verse you recite."<br>
            <span style="font-size:.85rem;opacity:.75;font-style:normal;">— Prophet Muhammad ﷺ (Abu Dawud, Tirmidhi)</span></p>
          </div>

          <p>Memorizing the Quran (Hifz) is one of the most noble and rewarding acts a Muslim can undertake. But many students struggle — memorizing quickly but forgetting even faster, or feeling like their progress is too slow.</p>
          <p>The truth is, <strong>Quran memorization is a skill</strong> — and like any skill, there are right and wrong ways to approach it. These 12 tips combine <strong>modern memory science</strong> with <strong>time-tested Sunnah practices</strong> used by Huffaz for centuries.</p>

          <h2>The 3-Part Hifz System (Sabaq, Sabaqi, Manzil)</h2>
          <p>Before the 12 tips, you must understand this system — it is the single most important framework for successful Hifz:</p>
          <ul>
            <li><strong>Sabaq (سبق):</strong> Today's new memorization — the new portion you learn each day</li>
            <li><strong>Sabaqi (سبقی):</strong> Recent revision — revise the last 7–10 days of Sabaq every single day to keep it fresh</li>
            <li><strong>Manzil (منزل):</strong> Old revision — every week, revise all previously completed Juz to prevent forgetting</li>
          </ul>
          <div class="highlight-box">
            Without this 3-part system, you will memorize fast but forget faster. Every successful Hafiz — past and present — follows this exact framework.
          </div>

          <h2>12 Proven Tips to Memorize Quran Faster</h2>

          <div class="tip-card">
            <div class="tip-num">1</div>
            <div>
              <h3 style="margin:0 0 8px;">Memorize After Fajr — Always</h3>
              <p style="margin:0;color:var(--muted);font-size:.93rem;">Neuroscience confirms: the brain is most receptive to new information in the early morning after sleep. Combine this with the barakah of Fajr time, and you have the most powerful memorization window of the day. Every famous Hafiz throughout history has recommended this.</p>
            </div>
          </div>

          <div class="tip-card">
            <div class="tip-num">2</div>
            <div>
              <h3 style="margin:0 0 8px;">Never Skip a Day — Consistency Over Quantity</h3>
              <p style="margin:0;color:var(--muted);font-size:.93rem;">Memorizing 5 lines every day for a year beats memorizing 2 pages once a week. The brain consolidates memories during sleep — so daily sessions create much stronger neural pathways than irregular marathon sessions.</p>
            </div>
          </div>

          <div class="tip-card">
            <div class="tip-num">3</div>
            <div>
              <h3 style="margin:0 0 8px;">Use One Mushaf — Always the Same Copy</h3>
              <p style="margin:0;color:var(--muted);font-size:.93rem;">The brain memorizes pages visually. If you switch between different Quran prints (Madina print vs. Indo-Pak script vs. app), the visual layout changes and your memory gets confused. Pick one Mushaf and never change it.</p>
            </div>
          </div>

          <div class="tip-card">
            <div class="tip-num">4</div>
            <div>
              <h3 style="margin:0 0 8px;">Read the New Portion 20 Times Before Memorizing</h3>
              <p style="margin:0;color:var(--muted);font-size:.93rem;">Read the day's new verses slowly and carefully 20 times before attempting to memorize them. By the 20th reading, most people find they have naturally memorized most of the passage. This is called "familiarization before memorization."</p>
            </div>
          </div>

          <div class="tip-card">
            <div class="tip-num">5</div>
            <div>
              <h3 style="margin:0 0 8px;">Recite in Salah — Make it Live</h3>
              <p style="margin:0;color:var(--muted);font-size:.93rem;">Use your newly memorized verses in your daily prayers — especially Fajr and Tahajjud. Reciting in Salah adds emotional weight and spiritual connection to the memorization, making it infinitely more durable.</p>
            </div>
          </div>

          <div class="tip-card">
            <div class="tip-num">6</div>
            <div>
              <h3 style="margin:0 0 8px;">Understand What You're Memorizing</h3>
              <p style="margin:0;color:var(--muted);font-size:.93rem;">Read the translation and tafsir of every verse you memorize. When your brain understands the meaning, it creates multiple memory pathways — semantic, auditory, and visual. Memorization becomes twice as fast and lasts far longer.</p>
            </div>
          </div>

          <div class="tip-card">
            <div class="tip-num">7</div>
            <div>
              <h3 style="margin:0 0 8px;">Keep a Strict Quantity Limit</h3>
              <p style="margin:0;color:var(--muted);font-size:.93rem;">Start with 3–5 lines per day. Do not increase until you have maintained this for 4 weeks straight without skipping. Overambition early is the #1 cause of Hifz burnout. A slow, steady Hafiz always outperforms a fast, inconsistent one.</p>
            </div>
          </div>

          <div class="tip-card">
            <div class="tip-num">8</div>
            <div>
              <h3 style="margin:0 0 8px;">Recite to Someone Every Day</h3>
              <p style="margin:0;color:var(--muted);font-size:.93rem;">Reciting to a teacher, parent, or accountability partner every day serves two purposes: errors are caught immediately, and the social accountability prevents skipping. This is why online Hifz classes with a daily tutor are so effective.</p>
            </div>
          </div>

          <div class="tip-card">
            <div class="tip-num">9</div>
            <div>
              <h3 style="margin:0 0 8px;">Listen to Your Surah on Repeat</h3>
              <p style="margin:0;color:var(--muted);font-size:.93rem;">Find a recording of a beautiful Qari reciting the Surah or Juz you are memorizing. Listen to it during commutes, exercise, or cooking. This passive listening builds auditory memory that reinforces your active memorization sessions.</p>
            </div>
          </div>

          <div class="tip-card">
            <div class="tip-num">10</div>
            <div>
              <h3 style="margin:0 0 8px;">Sleep on Your Memorization</h3>
              <p style="margin:0;color:var(--muted);font-size:.93rem;">Memory consolidation happens during sleep. Memorize your new Sabaq just before sleeping (after Isha). Your brain will process and consolidate it overnight. Test yourself the next morning — you'll find it is often even stronger than the night before.</p>
            </div>
          </div>

          <div class="tip-card">
            <div class="tip-num">11</div>
            <div>
              <h3 style="margin:0 0 8px;">Avoid Sins — The Spiritual Dimension of Hifz</h3>
              <p style="margin:0;color:var(--muted);font-size:.93rem;">Imam Al-Shafi'i famously said he complained to his teacher Imam Malik about poor memory, and Malik advised him to abandon sins. This is not just spiritual wisdom — modern psychology also shows that guilt, stress, and moral conflict impair memory function. A clean heart and clean lifestyle are literal memorization tools.</p>
            </div>
          </div>

          <div class="tip-card">
            <div class="tip-num">12</div>
            <div>
              <h3 style="margin:0 0 8px;">Make Dua for a Blessed Memory</h3>
              <p style="margin:0;color:var(--muted);font-size:.93rem;">The Prophet ﷺ taught a specific dua for memorization: <em>"Allahumma infa'ni bima 'allamtani wa 'allimni ma yanfa'uni wa zidni 'ilman"</em> — "O Allah, benefit me with what You have taught me, teach me what will benefit me, and increase me in knowledge." Make this dua sincerely before every Hifz session.</p>
            </div>
          </div>

          <h2>Daily Hifz Schedule (Sample)</h2>
          <div style="overflow-x:auto;margin:16px 0 24px;">
            <table style="width:100%;border-collapse:collapse;font-size:.92rem;">
              <thead><tr style="background:var(--emerald);color:#fff;"><th style="padding:10px 16px;text-align:left;">Time</th><th style="padding:10px 16px;text-align:left;">Activity</th><th style="padding:10px 16px;text-align:left;">Duration</th></tr></thead>
              <tbody>
                <tr style="background:var(--ivory);"><td style="padding:10px 16px;border-bottom:1px solid var(--border);">After Fajr</td><td style="padding:10px 16px;border-bottom:1px solid var(--border);">New Sabaq (new memorization)</td><td style="padding:10px 16px;border-bottom:1px solid var(--border);">20–30 min</td></tr>
                <tr><td style="padding:10px 16px;border-bottom:1px solid var(--border);">After Fajr (cont.)</td><td style="padding:10px 16px;border-bottom:1px solid var(--border);">Sabaqi (last 10 days' revision)</td><td style="padding:10px 16px;border-bottom:1px solid var(--border);">15–20 min</td></tr>
                <tr style="background:var(--ivory);"><td style="padding:10px 16px;border-bottom:1px solid var(--border);">Online Tutor Session</td><td style="padding:10px 16px;border-bottom:1px solid var(--border);">Recite to tutor, get corrections</td><td style="padding:10px 16px;border-bottom:1px solid var(--border);">30–45 min</td></tr>
                <tr><td style="padding:10px 16px;border-bottom:1px solid var(--border);">During day</td><td style="padding:10px 16px;border-bottom:1px solid var(--border);">Listen to recitation passively</td><td style="padding:10px 16px;border-bottom:1px solid var(--border);">Ongoing</td></tr>
                <tr style="background:var(--ivory);"><td style="padding:10px 16px;">After Isha</td><td style="padding:10px 16px;">Light review of today's Sabaq before sleep</td><td style="padding:10px 16px;">10 min</td></tr>
              </tbody>
            </table>
          </div>

          <div class="highlight-box">
            <strong>Need a dedicated Hifz tutor?</strong> At NoorPath Academy, our certified Huffaz tutors follow the Sabaq-Sabaqi-Manzil system strictly, provide daily classes, and send weekly progress reports to parents. <a href="/courses/hifz-program-online" style="color:var(--emerald);font-weight:700;">View our Online Hifz Program →</a> or <a href="/online-quran-classes#cta" style="color:var(--emerald);font-weight:700;">book a free trial class today</a>.
          </div>
        </div>

        <div style="margin-top:56px;border-top:1px solid var(--border);padding-top:40px;">
          <h3 style="font-size:1.2rem;font-weight:700;margin-bottom:20px;">Related Articles</h3>
          <div class="row g-3">
            <div class="col-sm-6">
              <a href="/blog/noorani-qaida-complete-guide" style="text-decoration:none;">
                <div class="blog-card">
                  <div class="blog-card-header" style="padding:20px 24px;"><span class="blog-tag">Noorani Qaida</span><div style="color:var(--white);font-weight:700;font-size:.95rem;margin-top:8px;">Noorani Qaida: Complete Beginner's Guide</div></div>
                  <div class="blog-card-body"><span class="read-more">Read <i class="fas fa-arrow-right ms-1"></i></span></div>
                </div>
              </a>
            </div>
            <div class="col-sm-6">
              <a href="/blog/tajweed-rules-complete-guide" style="text-decoration:none;">
                <div class="blog-card">
                  <div class="blog-card-header" style="padding:20px 24px;"><span class="blog-tag">Tajweed</span><div style="color:var(--white);font-weight:700;font-size:.95rem;margin-top:8px;">Tajweed Rules: The Complete Guide</div></div>
                  <div class="blog-card-body"><span class="read-more">Read <i class="fas fa-arrow-right ms-1"></i></span></div>
                </div>
              </a>`,
  },
  "how-to-pray-salah-step-by-step": {
    style: `.article-body { font-size: 1.05rem; line-height: 1.85; color: #374151; }
    .article-body h2 { font-size: 1.5rem; font-weight: 700; color: var(--charcoal); margin: 40px 0 16px; }
    .article-body h3 { font-size: 1.12rem; font-weight: 700; color: var(--emerald); margin: 24px 0 10px; }
    .article-body p { margin-bottom: 18px; }
    .article-body ul, .article-body ol { margin-bottom: 18px; padding-left: 24px; }
    .article-body li { margin-bottom: 8px; }
    .highlight-box { background: rgba(10,110,79,.06); border-left: 4px solid var(--emerald); border-radius: 8px; padding: 20px 24px; margin: 24px 0; }
    .gold-box { background: rgba(232,184,75,.08); border-left: 4px solid var(--gold); border-radius: 8px; padding: 20px 24px; margin: 24px 0; }
    .arabic-line { font-family: 'Amiri', serif; font-size: 1.7rem; color: var(--emerald); direction: rtl; text-align: right; line-height: 1.9; }
    .roman-line { font-style: italic; color: #4b5563; font-size: .95rem; margin-top: 8px; }
    .meaning-line { font-size: .92rem; color: var(--charcoal); font-weight: 600; margin-top: 6px; }
    .step-card { background: var(--ivory); border: 1px solid var(--border); border-radius: 14px; padding: 22px; margin-bottom: 18px; }
    .step-head { display: flex; gap: 14px; align-items: center; margin-bottom: 12px; }
    .step-badge { width: 42px; height: 42px; border-radius: 999px; background: var(--emerald); color: #fff; display: flex; align-items: center; justify-content: center; font-weight: 700; }
    .rakah-table { width: 100%; border-collapse: collapse; margin: 18px 0 28px; font-size: .94rem; }
    .rakah-table th { background: var(--emerald); color: #fff; padding: 12px 14px; text-align: left; }
    .rakah-table td { padding: 12px 14px; border-bottom: 1px solid var(--border); vertical-align: top; }
    .rakah-table tr:nth-child(even) td { background: var(--ivory); }
    .mini-checklist { background: #fff; border: 1px solid var(--border); border-radius: 12px; padding: 18px 20px; }
    .mini-checklist li { margin-bottom: 10px; }
    .faq-item { border: 1px solid var(--border); border-radius: 10px; margin-bottom: 12px; overflow: hidden; }
    .faq-q { padding: 16px 20px; font-weight: 700; background: var(--ivory); color: var(--charcoal); }
    .faq-a { padding: 16px 20px; color: #374151; font-size: .95rem; line-height: 1.7; border-top: 1px solid var(--border); }
    @media (max-width: 576px) {
      .arabic-line { font-size: 1.4rem; }
    }`,
    content: `<p><strong>Salah</strong> is the second pillar of Islam and the most important daily act of worship after the shahadah. If you are searching for <strong>how to pray Salah step by step</strong>, this guide will walk you through the full process in simple English, with Arabic, transliteration, meanings, and beginner-friendly explanations.</p>
          <p>Whether you are teaching a child, helping a revert, or improving your own prayer, this page is designed to be practical, meaningful, and easy to follow. The goal is not only to know the movements, but to understand that Salah is your direct meeting with Allah.</p>

          <div class="highlight-box">
            <strong>Allah says:</strong>
            <div class="arabic-line">وَأَقِيمُوا الصَّلَاةَ</div>
            <div class="meaning-line">"And establish prayer." - Quran 2:43</div>
          </div>

          <nav style="background:var(--ivory);border:1px solid var(--border);border-radius:12px;padding:20px 24px;margin:32px 0;">
            <h2 style="font-size:1rem;font-weight:700;color:var(--charcoal);margin-bottom:12px;">Table of Contents</h2>
            <ol style="margin:0;padding-left:20px;font-size:.95rem;">
              <li><a href="#before" style="color:var(--emerald);text-decoration:none;">Before You Pray Salah</a></li>
              <li><a href="#rakaat" style="color:var(--emerald);text-decoration:none;">How Many Rakaat in Each Prayer?</a></li>
              <li><a href="#steps" style="color:var(--emerald);text-decoration:none;">How to Pray 2 Rak'ah Step by Step</a></li>
              <li><a href="#what-to-say" style="color:var(--emerald);text-decoration:none;">What to Say in Salah</a></li>
              <li><a href="#mistakes" style="color:var(--emerald);text-decoration:none;">Common Mistakes Beginners Make</a></li>
              <li><a href="#faq" style="color:var(--emerald);text-decoration:none;">FAQ</a></li>
            </ol>
          </nav>

          <h2 id="before">Before You Pray Salah</h2>
          <p>Before starting prayer, make sure the basic conditions of Salah are fulfilled. Without these, the prayer is not valid.</p>

          <div class="mini-checklist">
            <ul style="margin:0;">
              <li><strong>Make wudu:</strong> You must be in a state of ritual purity.</li>
              <li><strong>Cover your awrah:</strong> Dress modestly according to Islamic requirements.</li>
              <li><strong>Face the Qiblah:</strong> Turn toward the Ka'bah in Makkah.</li>
              <li><strong>Pray on time:</strong> Each salah has an appointed time.</li>
              <li><strong>Make the intention:</strong> The niyyah is in the heart, not necessarily spoken aloud.</li>
              <li><strong>Ensure the place is clean:</strong> Your body, clothes, and prayer area should be clean.</li>
            </ul>
          </div>

          <div class="gold-box">
            <strong>Important:</strong> If you are still learning, focus first on the <strong>fard (essential)</strong> parts of prayer. Perfect fluency comes with time. Consistency is better than delay.
          </div>

          <h2 id="rakaat">How Many Rakaat Are in the 5 Daily Prayers?</h2>
          <p>The table below shows the obligatory rakaat for each daily prayer. These are the units every Muslim must pray every day.</p>

          <table class="rakah-table">
            <thead>
              <tr><th>Prayer</th><th>Fard Rakaat</th><th>Time</th></tr>
            </thead>
            <tbody>
              <tr><td><strong>Fajr</strong></td><td>2</td><td>From dawn until sunrise</td></tr>
              <tr><td><strong>Dhuhr</strong></td><td>4</td><td>After midday until Asr time</td></tr>
              <tr><td><strong>Asr</strong></td><td>4</td><td>Late afternoon until sunset</td></tr>
              <tr><td><strong>Maghrib</strong></td><td>3</td><td>Immediately after sunset</td></tr>
              <tr><td><strong>Isha</strong></td><td>4</td><td>Night until Fajr</td></tr>
            </tbody>
          </table>

          <p>In this guide, we will teach the structure of a <strong>2-rak'ah prayer</strong> first because it is the easiest model for beginners. Once you understand it, you can extend it to Dhuhr, Asr, Maghrib, and Isha.</p>

          <h2 id="steps">How to Pray Salah Step by Step</h2>
          <p>Below is the full sequence of a simple 2-rak'ah Salah, such as Fajr.</p>

          <div class="step-card">
            <div class="step-head"><div class="step-badge">1</div><div><strong>Make your intention (niyyah)</strong></div></div>
            <p>Stand facing the Qiblah and intend in your heart which prayer you are about to pray. For example: "I am praying 2 fard of Fajr for Allah."</p>
          </div>

          <div class="step-card">
            <div class="step-head"><div class="step-badge">2</div><div><strong>Say Takbir al-Ihram</strong></div></div>
            <p>Raise your hands and say:</p>
            <div class="arabic-line">اللَّهُ أَكْبَرُ</div>
            <div class="roman-line">Allahu Akbar</div>
            <div class="meaning-line">Allah is the Greatest.</div>
          </div>

          <div class="step-card">
            <div class="step-head"><div class="step-badge">3</div><div><strong>Stand and recite Surah Al-Fatihah</strong></div></div>
            <p>Place your hands respectfully and recite <strong>Surah Al-Fatihah</strong>. Then recite another short surah, such as Surah Al-Ikhlas, in the first two rak'ah.</p>
            <div class="highlight-box">
              <strong>Minimum beginner focus:</strong> Memorize Al-Fatihah first. It is essential in every rak'ah.
            </div>
          </div>

          <div class="step-card">
            <div class="step-head"><div class="step-badge">4</div><div><strong>Go into ruku (bowing)</strong></div></div>
            <p>Say <em>Allahu Akbar</em> and bow, placing your hands on your knees and keeping your back level. In ruku say at least three times:</p>
            <div class="arabic-line">سُبْحَانَ رَبِّيَ الْعَظِيمِ</div>
            <div class="roman-line">Subhana Rabbiyal Azeem</div>
            <div class="meaning-line">Glory be to my Lord, the Magnificent.</div>
          </div>

          <div class="step-card">
            <div class="step-head"><div class="step-badge">5</div><div><strong>Stand back up</strong></div></div>
            <p>Rise from ruku and say:</p>
            <div class="arabic-line">سَمِعَ اللَّهُ لِمَنْ حَمِدَهُ</div>
            <div class="roman-line">Sami Allahu liman hamidah</div>
            <div class="meaning-line">Allah hears the one who praises Him.</div>
            <p>Then while fully standing say:</p>
            <div class="arabic-line">رَبَّنَا وَلَكَ الْحَمْدُ</div>
            <div class="roman-line">Rabbana wa lakal hamd</div>
            <div class="meaning-line">Our Lord, and to You belongs all praise.</div>
          </div>

          <div class="step-card">
            <div class="step-head"><div class="step-badge">6</div><div><strong>Go into sujood (prostration)</strong></div></div>
            <p>Say <em>Allahu Akbar</em> and go into prostration. Your forehead, nose, both palms, both knees, and toes should touch the ground. In sujood say at least three times:</p>
            <div class="arabic-line">سُبْحَانَ رَبِّيَ الْأَعْلَى</div>
            <div class="roman-line">Subhana Rabbiyal A'la</div>
            <div class="meaning-line">Glory be to my Lord, the Most High.</div>
          </div>

          <div class="step-card">
            <div class="step-head"><div class="step-badge">7</div><div><strong>Sit between the two sujoods</strong></div></div>
            <p>Say <em>Allahu Akbar</em>, sit up calmly, and ask Allah for forgiveness. A simple dua often taught is:</p>
            <div class="arabic-line">رَبِّ اغْفِرْ لِي</div>
            <div class="roman-line">Rabbighfir li</div>
            <div class="meaning-line">My Lord, forgive me.</div>
          </div>

          <div class="step-card">
            <div class="step-head"><div class="step-badge">8</div><div><strong>Perform the second sujood</strong></div></div>
            <p>Say <em>Allahu Akbar</em> and go down again into sujood, repeating the same tasbih: <em>Subhana Rabbiyal A'la</em>.</p>
          </div>

          <div class="step-card">
            <div class="step-head"><div class="step-badge">9</div><div><strong>Stand for the second rak'ah</strong></div></div>
            <p>Stand back up and repeat the same general pattern: recite Al-Fatihah and another short surah, then ruku, standing, and two sujoods.</p>
          </div>

          <div class="step-card">
            <div class="step-head"><div class="step-badge">10</div><div><strong>Sit for Tashahhud</strong></div></div>
            <p>After the second sujood of the second rak'ah, remain seated and recite the Tashahhud:</p>
            <div class="arabic-line">التَّحِيَّاتُ لِلَّهِ وَالصَّلَوَاتُ وَالطَّيِّبَاتُ، السَّلَامُ عَلَيْكَ أَيُّهَا النَّبِيُّ وَرَحْمَةُ اللَّهِ وَبَرَكَاتُهُ، السَّلَامُ عَلَيْنَا وَعَلَى عِبَادِ اللَّهِ الصَّالِحِينَ، أَشْهَدُ أَنْ لَا إِلَهَ إِلَّا اللَّهُ وَأَشْهَدُ أَنَّ مُحَمَّدًا عَبْدُهُ وَرَسُولُهُ</div>
            <div class="roman-line">At-tahiyyatu lillahi was-salawatu wat-tayyibat, as-salamu 'alayka ayyuhan-nabiyyu wa rahmatullahi wa barakatuh, as-salamu 'alayna wa 'ala 'ibadillahis-salihin, ash-hadu an la ilaha illallah wa ash-hadu anna Muhammadan 'abduhu wa rasuluh.</div>
          </div>

          <div class="step-card">
            <div class="step-head"><div class="step-badge">11</div><div><strong>Send salawat upon the Prophet ﷺ and make dua</strong></div></div>
            <p>After Tashahhud, recite the salawat (Durood Ibrahim) and make a brief dua asking Allah for guidance, forgiveness, and steadfastness.</p>
          </div>

          <div class="step-card">
            <div class="step-head"><div class="step-badge">12</div><div><strong>Finish with salam</strong></div></div>
            <p>Turn your head to the right and say:</p>
            <div class="arabic-line">السَّلَامُ عَلَيْكُمْ وَرَحْمَةُ اللَّهِ</div>
            <div class="roman-line">As-salamu 'alaykum wa rahmatullah</div>
            <div class="meaning-line">Peace and mercy of Allah be upon you.</div>
            <p>Then turn to the left and repeat it. Your prayer is complete.</p>
          </div>

          <h2 id="what-to-say">What to Say in Salah for Beginners</h2>
          <p>If you are overwhelmed, start by memorizing these essentials in order:</p>
          <ol>
            <li><strong>Allahu Akbar</strong></li>
            <li><strong>Surah Al-Fatihah</strong></li>
            <li><strong>Subhana Rabbiyal Azeem</strong></li>
            <li><strong>Sami Allahu liman hamidah</strong></li>
            <li><strong>Rabbana wa lakal hamd</strong></li>
            <li><strong>Subhana Rabbiyal A'la</strong></li>
            <li><strong>Tashahhud</strong></li>
            <li><strong>As-salamu 'alaykum wa rahmatullah</strong></li>
          </ol>

          <div class="gold-box">
            <strong>Helpful learning order:</strong> Learn wudu first, then Al-Fatihah, then the prayer movements, then the short dhikr of ruku and sujood, and finally the Tashahhud. This makes Salah much easier to build step by step.
          </div>

          <h2 id="mistakes">Common Mistakes Beginners Make in Salah</h2>
          <ul>
            <li><strong>Rushing through the movements:</strong> Calmness is required in each position.</li>
            <li><strong>Skipping Al-Fatihah:</strong> This is the core recitation of every rak'ah.</li>
            <li><strong>Not learning the meanings:</strong> Understanding improves focus and khushu.</li>
            <li><strong>Ignoring prayer times:</strong> Salah must be performed within its appointed time.</li>
            <li><strong>Feeling ashamed to learn slowly:</strong> Every sincere learner is honored by Allah.</li>
          </ul>

          <div class="highlight-box">
            <strong>Different valid details exist:</strong> Some prayer details may vary slightly between authentic scholarly schools. That does not mean the prayer is invalid. A beginner should learn one sound method properly and stay consistent.
          </div>

          <h2>How to Teach Salah to Kids</h2>
          <p>If you are a parent, teach prayer gradually. Start with love, repetition, and routine. Let children copy the movements, hear the adhan, memorize short duas, and build emotional connection to the masjid and the prayer mat. A child who loves Salah before mastering it is already on the right path.</p>
          <p>For a fuller parenting approach, read our guide on <a href="/blog/how-to-teach-quran-to-kids" style="color:var(--emerald);font-weight:700;">how to teach Quran to kids</a> and combine Quran learning with daily prayer training.</p>

          <h2 id="faq">Frequently Asked Questions</h2>
          <div class="faq-item">
            <div class="faq-q">How do beginners pray Salah step by step?</div>
            <div class="faq-a">Beginners first make wudu, face the Qiblah, intend the prayer in the heart, say Allahu Akbar, recite Al-Fatihah and another surah, bow in ruku, stand back up, perform two sujoods, repeat for the required rakaat, then sit for Tashahhud and finish with Salam.</div>
          </div>
          <div class="faq-item">
            <div class="faq-q">Can I pray if I only know a little Arabic?</div>
            <div class="faq-a">Yes, but you should keep learning steadily. A new Muslim or beginner should memorize the essential recitations as soon as possible and improve pronunciation step by step with a teacher.</div>
          </div>
          <div class="faq-item">
            <div class="faq-q">Which surah should I learn first for Salah?</div>
            <div class="faq-a">Start with Surah Al-Fatihah first. After that, short surahs like Al-Ikhlas, Al-Falaq, and An-Nas are among the easiest and most useful for beginners.</div>
          </div>
          <div class="faq-item">
            <div class="faq-q">How long does it take to learn Salah properly?</div>
            <div class="faq-a">Many beginners can learn the basic structure of Salah within a few days and improve confidence within a few weeks. Correct pronunciation and deeper understanding continue to improve over time.</div>
          </div>

          <div class="highlight-box" style="margin-top:32px;">
            <strong>Want guided help learning Salah, Quran, and Islamic basics?</strong> NoorPath Academy teaches children, adults, and new Muslims with patient one-to-one tutors. <a href="/online-quran-classes#cta" style="color:var(--emerald);font-weight:700;">Book your free trial class</a>.
          </div>
        </div>

        <div style="margin-top:56px;border-top:1px solid var(--border);padding-top:40px;">
          <h3 style="font-size:1.2rem;font-weight:700;margin-bottom:20px;">Related Articles</h3>
          <div class="row g-3">
            <div class="col-sm-6">
              <a href="/blog/dua-e-qunoot-arabic-english" style="text-decoration:none;">
                <div class="blog-card"><div class="blog-card-header" style="padding:20px 24px;"><span class="blog-tag">Dua</span><div style="color:var(--white);font-weight:700;font-size:.95rem;margin-top:8px;">Dua e Qunoot - Arabic & Meaning</div></div><div class="blog-card-body"><span class="read-more">Read <i class="fas fa-arrow-right ms-1"></i></span></div></div>
              </a>
            </div>
            <div class="col-sm-6">
              <a href="/blog/how-to-teach-quran-to-kids" style="text-decoration:none;">
                <div class="blog-card"><div class="blog-card-header" style="padding:20px 24px;"><span class="blog-tag">Parenting</span><div style="color:var(--white);font-weight:700;font-size:.95rem;margin-top:8px;">How to Teach Quran to Kids</div></div><div class="blog-card-body"><span class="read-more">Read <i class="fas fa-arrow-right ms-1"></i></span></div></div>
              </a>
            </div>
            <div class="col-sm-6">
              <a href="/blog/astaghfirullah-meaning" style="text-decoration:none;">
                <div class="blog-card"><div class="blog-card-header" style="padding:20px 24px;"><span class="blog-tag">Islamic Phrases</span><div style="color:var(--white);font-weight:700;font-size:.95rem;margin-top:8px;">Astaghfirullah - Meaning & Benefits</div></div><div class="blog-card-body"><span class="read-more">Read <i class="fas fa-arrow-right ms-1"></i></span></div></div>
              </a>
            </div>
            <div class="col-sm-6">
              <a href="/courses/islamic-studies-online" style="text-decoration:none;">
                <div class="blog-card"><div class="blog-card-header" style="padding:20px 24px;"><span class="blog-tag">Course</span><div style="color:var(--white);font-weight:700;font-size:.95rem;margin-top:8px;">Islamic Studies Online</div></div><div class="blog-card-body"><span class="read-more">Explore <i class="fas fa-arrow-right ms-1"></i></span></div></div>
              </a>`,
  },
  "how-to-teach-quran-to-kids": {
    style: `.article-body { font-size: 1.05rem; line-height: 1.85; color: #374151; }
    .article-body h2 { font-size: 1.5rem; font-weight: 700; color: var(--charcoal); margin: 40px 0 16px; }
    .article-body h3 { font-size: 1.2rem; font-weight: 700; color: var(--emerald); margin: 28px 0 12px; }
    .article-body p { margin-bottom: 18px; }
    .article-body ul, .article-body ol { margin-bottom: 18px; padding-left: 24px; }
    .article-body li { margin-bottom: 8px; }
    .article-body strong { color: var(--charcoal); }
    .article-body .highlight-box { background: rgba(10,110,79,.06); border-left: 4px solid var(--emerald); border-radius: 8px; padding: 20px 24px; margin: 24px 0; }
    .article-body .hadith-box { background: linear-gradient(135deg,#0a3d28,#0d5436); color: #fff; border-radius: 12px; padding: 24px; margin: 24px 0; font-style: italic; }`,
    content: `<div class="hadith-box">
            <p style="margin:0;font-size:1.05rem;">"The best among you are those who learn the Quran and teach it."<br><span style="font-size:.85rem;opacity:.75;font-style:normal;">— Prophet Muhammad ﷺ (Sahih Bukhari)</span></p>
          </div>

          <p>As Muslim parents, one of our greatest responsibilities — and greatest blessings — is to connect our children to the Holy Quran. But many parents feel overwhelmed: <em>When should I start? What curriculum? How do I keep them motivated?</em></p>

          <p>This comprehensive guide answers every question so you can confidently begin your child's Quran journey.</p>

          <h2>1. What is the Best Age to Start Teaching Quran to Kids?</h2>
          <p>Most Islamic scholars and child psychologists agree that <strong>ages 4–7 is the golden window</strong> for beginning Quran education. Here's why:</p>
          <ul>
            <li><strong>Photographic memory:</strong> Young children can memorize effortlessly. What they learn now often stays with them for life.</li>
            <li><strong>Pronunciation flexibility:</strong> Young mouths and ears easily learn new sounds — including Arabic phonemes that non-native speakers struggle with.</li>
            <li><strong>Habit formation:</strong> Routines established in early childhood become lifelong habits.</li>
          </ul>
          <div class="highlight-box">
            <strong>However — there is no wrong age to start.</strong> Many adults begin their Quran journey at 30, 40, or even 60. The important thing is to begin, not to wait for the "perfect" time.
          </div>

          <h2>2. Always Start with Noorani Qaida — Not the Quran Directly</h2>
          <p>This is the most common mistake parents make. They try to teach their child to read the Quran directly without a foundation. The result? Mispronunciation, frustration, and slow progress.</p>
          <p><strong>Noorani Qaida</strong> is a specially designed primer that teaches:</p>
          <ul>
            <li>Arabic alphabet recognition (all 29 letters)</li>
            <li>Harakaat — short vowels (Fathah, Kasrah, Dammah)</li>
            <li>Sukoon, Shaddah, and Tanween</li>
            <li>Letter joining and word formation</li>
            <li>Basic pronunciation rules</li>
          </ul>
          <p>A child who completes Noorani Qaida properly can read any Arabic text — including the Quran — with correct pronunciation.</p>

          <h2>3. Create a Consistent Daily Schedule</h2>
          <p>Consistency is everything in Quran education. Here is a simple schedule that works for most families:</p>
          <ul>
            <li><strong>Age 4–7:</strong> 20–30 minutes, 3–5 days/week</li>
            <li><strong>Age 8–12:</strong> 30–45 minutes, 5 days/week</li>
            <li><strong>Age 13+:</strong> 45–60 minutes, 5–6 days/week</li>
          </ul>
          <div class="highlight-box">
            <strong>Pro tip:</strong> The best time for Quran lessons is <strong>after Fajr</strong> (early morning) — when the mind is fresh and the environment is peaceful. After-school (4–6 PM) is the second most effective time slot.
          </div>

          <h2>4. Make Quran Learning Fun and Rewarding</h2>
          <p>Children learn best when they are motivated and enjoying the process. Here are proven strategies:</p>
          <h3>Use a Reward System</h3>
          <p>Create a simple star chart. Every lesson completed = 1 star. Every 10 stars = a reward (a book, a toy, or a special outing). Children respond exceptionally well to visible progress markers.</p>

          <h3>Tell Quranic Stories</h3>
          <p>Connect Quran verses to the stories of the Prophets. When a child is memorizing Surah Yusuf, tell them the beautiful story of Prophet Yusuf (AS). This gives meaning to the words they're learning.</p>

          <h3>Let Them Hear Beautiful Recitation</h3>
          <p>Play recordings of beautiful Quranic recitation by Sheikh Abdul Rahman Al-Sudais, Sheikh Mishary Al-Afasy, or Sheikh Maher Al-Muaiqly during car rides and family time. Children absorb what they hear.</p>

          <h2>5. The Role of Parents in Quran Education</h2>
          <p>Even if your child has a professional tutor, your role as a parent is irreplaceable:</p>
          <ul>
            <li><strong>Create the environment:</strong> Have a physical Quran in the home. Recite Quran yourself — children model parents.</li>
            <li><strong>Daily revision:</strong> Ask your child to recite what they learned. 5 minutes of revision with you is worth more than you know.</li>
            <li><strong>Show interest:</strong> Ask about their lesson. "What new letter did you learn today?" This validates their progress.</li>
            <li><strong>Make dua for them:</strong> The Prophet Ibrahim ﷺ prayed for his children's Quran connection. So should we.</li>
          </ul>

          <h2>6. Online Quran Classes vs. Traditional Madrassa</h2>
          <p>In 2026, online Quran classes have proven to be more effective than traditional madrassas for most families in Western countries. Here's why:</p>
          <ul>
            <li><strong>1-on-1 attention:</strong> Online classes are typically private, unlike group madrassa classes of 10–20 children where teachers cannot monitor each child's pronunciation.</li>
            <li><strong>Certified tutors:</strong> Online academies like NoorPath hire certified Ijazah-holding tutors — often more qualified than local mosque teachers.</li>
            <li><strong>No travel:</strong> Especially important in countries like Canada and UK where winter makes madrassa travel difficult.</li>
            <li><strong>Flexible scheduling:</strong> Classes at any time of day to fit around school, sports, and family life.</li>
            <li><strong>Progress reports:</strong> Parents receive weekly written reports on their child's progress.</li>
          </ul>

          <h2>7. Common Mistakes Parents Make</h2>
          <ul>
            <li>❌ Starting with the Quran before completing Noorani Qaida</li>
            <li>❌ Being too strict or creating negative associations with Quran time</li>
            <li>❌ Inconsistent lessons (only 1–2 days/week)</li>
            <li>❌ Not doing daily revision at home</li>
            <li>❌ Expecting instant results — Quran learning takes patience</li>
          </ul>

          <h2>Conclusion</h2>
          <p>Teaching your child the Quran is one of the greatest acts of love and worship a parent can perform. Start early, stay consistent, make it joyful, and choose the right tutor.</p>
          <p>If you're looking for a certified online Quran tutor for your child, <a href="/online-quran-classes#cta" style="color:var(--emerald);font-weight:600;">NoorPath Academy offers a free 30-minute trial class</a> — no payment required. See the difference a qualified, caring tutor makes.</p>

          <div class="highlight-box" style="margin-top:32px;">
            <strong>Ready to begin?</strong> <a href="/online-quran-classes#cta" style="color:var(--emerald);">Book your child's free trial class today</a> and meet our certified tutors. JazakAllah Khair.
          </div>
        </div>

        <!-- Related posts -->
        <div style="margin-top:56px;border-top:1px solid var(--border);padding-top:40px;">
          <h3 style="font-size:1.2rem;font-weight:700;margin-bottom:20px;">Related Articles</h3>
          <div class="row g-3">
            <div class="col-sm-6">
              <a href="/blog/tajweed-rules-complete-guide" style="text-decoration:none;">
                <div class="blog-card">
                  <div class="blog-card-header" style="padding:20px 24px;">
                    <span class="blog-tag">Tajweed</span>
                    <div style="color:var(--white);font-weight:700;font-size:.95rem;margin-top:8px;">Tajweed Rules for Beginners: The Complete Guide</div>
                  </div>
                  <div class="blog-card-body"><span class="read-more">Read <i class="fas fa-arrow-right ms-1"></i></span></div>
                </div>
              </a>
            </div>
            <div class="col-sm-6">
              <a href="/blog/benefits-of-online-quran-classes" style="text-decoration:none;">
                <div class="blog-card">
                  <div class="blog-card-header" style="padding:20px 24px;">
                    <span class="blog-tag">Online Learning</span>
                    <div style="color:var(--white);font-weight:700;font-size:.95rem;margin-top:8px;">10 Benefits of Online Quran Classes vs. Traditional Madrassa</div>
                  </div>
                  <div class="blog-card-body"><span class="read-more">Read <i class="fas fa-arrow-right ms-1"></i></span></div>
                </div>
              </a>`,
  },
  "islamic-baby-names-2026": {
    style: `.article-body { font-size: 1.05rem; line-height: 1.85; color: #374151; }
    .article-body h2 { font-size: 1.5rem; font-weight: 700; color: var(--charcoal); margin: 40px 0 16px; }
    .article-body h3 { font-size: 1.15rem; font-weight: 700; color: var(--emerald); margin: 24px 0 10px; }
    .article-body p { margin-bottom: 18px; }
    .article-body ul { margin-bottom: 18px; padding-left: 24px; }
    .article-body li { margin-bottom: 8px; }
    .highlight-box { background: rgba(10,110,79,.06); border-left: 4px solid var(--emerald); border-radius: 8px; padding: 20px 24px; margin: 24px 0; }
    .gold-box { background: rgba(232,184,75,.08); border-left: 4px solid var(--gold); border-radius: 8px; padding: 20px 24px; margin: 24px 0; }
    .name-table { width: 100%; border-collapse: collapse; margin: 16px 0 28px; font-size: .92rem; }
    .name-table th { background: var(--emerald); color: #fff; padding: 12px 14px; text-align: left; }
    .name-table td { padding: 12px 14px; border-bottom: 1px solid var(--border); vertical-align: top; }
    .name-table tr:nth-child(even) td { background: var(--ivory); }
    .name-arabic { font-family: 'Amiri', serif; font-size: 1.25rem; color: var(--emerald); direction: rtl; }
    .name-eng { font-weight: 700; color: var(--charcoal); }
    .name-origin { font-size: .78rem; color: #6b7280; font-style: italic; }
    .name-meaning { color: #374151; }
    .trend-badge { display: inline-block; background: #fef3c7; color: #92400e; border-radius: 20px; padding: 1px 8px; font-size: .72rem; font-weight: 700; margin-left: 4px; }
    .quran-badge { display: inline-block; background: rgba(10,110,79,.1); color: var(--emerald); border-radius: 20px; padding: 1px 8px; font-size: .72rem; font-weight: 700; margin-left: 4px; }
    .faq-item { border: 1px solid var(--border); border-radius: 10px; margin-bottom: 12px; overflow: hidden; }
    .faq-q { padding: 16px 20px; font-weight: 700; background: var(--ivory); color: var(--charcoal); cursor: pointer; }
    .faq-a { padding: 16px 20px; background: #fff; font-size: .95rem; line-height: 1.7; display: none; }
    .arabic-quote { font-family: 'Amiri', serif; font-size: 1.6rem; color: var(--emerald); direction: rtl; text-align: center; padding: 16px; background: rgba(10,110,79,.04); border-radius: 8px; margin: 12px 0; line-height: 2; }
    .rule-card { background: var(--ivory); border: 1px solid var(--border); border-radius: 12px; padding: 18px; margin-bottom: 14px; display: flex; gap: 14px; align-items: flex-start; }
    .rule-icon { flex-shrink: 0; width: 42px; height: 42px; background: var(--emerald); color: #fff; border-radius: 10px; display: flex; align-items: center; justify-content: center; font-size: 1rem; }
    .tab-buttons { display: flex; gap: 8px; margin-bottom: 20px; flex-wrap: wrap; }
    .tab-btn { padding: 8px 20px; border-radius: 20px; border: 2px solid var(--emerald); background: #fff; color: var(--emerald); font-weight: 600; font-size: .9rem; cursor: pointer; transition: all .2s; }
    .tab-btn.active { background: var(--emerald); color: #fff; }`,
    content: `<div class="highlight-box">
      <strong>Prophet Muhammad ﷺ said:</strong>
      <div class="arabic-quote">إِنَّكُمْ تُدْعَوْنَ يَوْمَ الْقِيَامَةِ بِأَسْمَائِكُمْ وَأَسْمَاءِ آبَائِكُمْ فَأَحْسِنُوا أَسْمَاءَكُمْ</div>
      <p style="margin:0;font-style:italic;">"You will be called on the Day of Judgment by your names and the names of your fathers, so give yourselves good names." — <strong>Abu Dawud, 4948</strong></p>
    </div>

    <p>Choosing an Islamic name for your baby is one of the most sacred responsibilities a Muslim parent carries. A name is not just an identity label — in Islam, it is a <strong>du'a (prayer)</strong>, a <strong>lifelong gift</strong>, and a connection to Islamic heritage that your child will carry until the Day of Judgment.</p>
    <p>In 2026, Muslim parents around the world are searching for names that strike the perfect balance: spiritually rooted in the Quran and Sunnah, yet easy to pronounce globally and meaningful in the modern world. This guide covers over 200 names — classic Prophetic names, Quranic names, trending modern Islamic names, and rare gems with beautiful meanings.</p>

    <nav style="background:var(--ivory);border:1px solid var(--border);border-radius:12px;padding:20px 24px;margin:32px 0;">
      <h2 style="font-size:1rem;font-weight:700;color:var(--charcoal);margin-bottom:12px;">Table of Contents</h2>
      <ol style="margin:0;padding-left:20px;font-size:.95rem;">
        <li><a href="#rules" style="color:var(--emerald);text-decoration:none;">Islamic Rules for Choosing a Name</a></li>
        <li><a href="#prophet-names" style="color:var(--emerald);text-decoration:none;">Names of the Prophets</a></li>
        <li><a href="#boy-classic" style="color:var(--emerald);text-decoration:none;">Classic Muslim Boy Names</a></li>
        <li><a href="#boy-trending" style="color:var(--emerald);text-decoration:none;">Trending Muslim Boy Names 2026</a></li>
        <li><a href="#boy-quran" style="color:var(--emerald);text-decoration:none;">Quranic Boy Names</a></li>
        <li><a href="#girl-classic" style="color:var(--emerald);text-decoration:none;">Classic Muslim Girl Names</a></li>
        <li><a href="#girl-trending" style="color:var(--emerald);text-decoration:none;">Trending Muslim Girl Names 2026</a></li>
        <li><a href="#girl-quran" style="color:var(--emerald);text-decoration:none;">Quranic Girl Names</a></li>
        <li><a href="#unique" style="color:var(--emerald);text-decoration:none;">Unique & Rare Islamic Names</a></li>
        <li><a href="#faq" style="color:var(--emerald);text-decoration:none;">FAQ</a></li>
      </ol>
    </nav>

    <!-- RULES -->
    <h2 id="rules">Islamic Rules for Choosing a Baby Name</h2>
    <p>Islam provides clear guidelines for naming a child. Following these ensures your child's name is a blessing and not a burden:</p>
    <div class="rule-card"><div class="rule-icon"><i class="fas fa-check"></i></div><div><strong>Choose names with good, beautiful meanings.</strong> The Prophet ﷺ changed names that had bad or ugly meanings to names with good meanings. (Sahih Muslim)</div></div>
    <div class="rule-card"><div class="rule-icon"><i class="fas fa-star-and-crescent"></i></div><div><strong>Names of Prophets and righteous companions are highly recommended.</strong> Muhammad, Ibrahim, Maryam, Khadijah — these connect your child to sacred Islamic history.</div></div>
    <div class="rule-card"><div class="rule-icon"><i class="fas fa-book-open"></i></div><div><strong>Quranic names carry special weight.</strong> Names mentioned in the Quran — Maryam (unique: the only woman named in Quran), Yusuf, Isa — are particularly blessed.</div></div>
    <div class="rule-card"><div class="rule-icon"><i class="fas fa-heart"></i></div><div><strong>The name "Abd + Name of Allah" is highly beloved.</strong> Abdullah (Servant of Allah) and Abdur Rahman (Servant of the Most Merciful) are the most beloved names to Allah according to Sahih Muslim, 2132.</div></div>
    <div class="rule-card"><div class="rule-icon" style="background:#dc3545;"><i class="fas fa-times"></i></div><div><strong>Avoid names that claim holiness or servitude to other than Allah.</strong> Names like Abd al-Ka'bah, Abd al-Nabi (servitude to Prophet — not Allah) are to be avoided. Names of idols are haram.</div></div>
    <div class="rule-card"><div class="rule-icon" style="background:#dc3545;"><i class="fas fa-ban"></i></div><div><strong>Avoid names with arrogant meanings.</strong> Names meaning "king of kings," "master of all creation" etc. are not appropriate.</div></div>

    <div class="gold-box">
      <strong>Prophet ﷺ said:</strong> <em>"The most beloved names to Allah are Abdullah and Abd al-Rahman."</em> — <strong>Sahih Muslim, 2132</strong>
    </div>

    <!-- PROPHET NAMES -->
    <h2 id="prophet-names">Names of the Prophets of Islam (for Boys)</h2>
    <p>Naming your son after a Prophet is one of the highest honors in Islam. All 25 prophets mentioned in the Quran are listed here:</p>
    <table class="name-table">
      <thead><tr><th>Name (English)</th><th>Arabic</th><th>Meaning</th></tr></thead>
      <tbody>
        <tr><td><span class="name-eng">Muhammad</span> <span class="quran-badge">Quran</span></td><td><span class="name-arabic">مُحَمَّد</span></td><td>Praiseworthy, Highly Commended — the final Prophet ﷺ</td></tr>
        <tr><td><span class="name-eng">Ibrahim</span> <span class="quran-badge">Quran</span></td><td><span class="name-arabic">إِبْرَاهِيم</span></td><td>Father of Nations — Prophet and Khalilullah (Friend of Allah)</td></tr>
        <tr><td><span class="name-eng">Ismail</span> <span class="quran-badge">Quran</span></td><td><span class="name-arabic">إِسْمَاعِيل</span></td><td>God Hears — son of Ibrahim ﷺ, builder of the Ka'bah</td></tr>
        <tr><td><span class="name-eng">Yusuf</span> <span class="quran-badge">Quran</span></td><td><span class="name-arabic">يُوسُف</span></td><td>Allah will increase / God adds — entire Surah named after him</td></tr>
        <tr><td><span class="name-eng">Musa</span> <span class="quran-badge">Quran</span></td><td><span class="name-arabic">مُوسَى</span></td><td>Drawn from water — the most mentioned Prophet in the Quran</td></tr>
        <tr><td><span class="name-eng">Isa</span> <span class="quran-badge">Quran</span></td><td><span class="name-arabic">عِيسَى</span></td><td>God saves — Prophet who will descend before Qiyamah</td></tr>
        <tr><td><span class="name-eng">Adam</span> <span class="quran-badge">Quran</span></td><td><span class="name-arabic">آدَم</span></td><td>Man of earth — the first Prophet and first human</td></tr>
        <tr><td><span class="name-eng">Nuh</span> <span class="quran-badge">Quran</span></td><td><span class="name-arabic">نُوح</span></td><td>Rest, peace, comfort — the Prophet of the great flood</td></tr>
        <tr><td><span class="name-eng">Yahya</span> <span class="quran-badge">Quran</span></td><td><span class="name-arabic">يَحْيَى</span></td><td>God is gracious / He lives — son of Zakariya ﷺ</td></tr>
        <tr><td><span class="name-eng">Zakariya</span> <span class="quran-badge">Quran</span></td><td><span class="name-arabic">زَكَرِيَّا</span></td><td>God remembers — the Prophet who raised Maryam</td></tr>
        <tr><td><span class="name-eng">Idris</span> <span class="quran-badge">Quran</span></td><td><span class="name-arabic">إِدْرِيس</span></td><td>Studious, learned — raised to a high station by Allah</td></tr>
        <tr><td><span class="name-eng">Ilyas</span> <span class="quran-badge">Quran</span></td><td><span class="name-arabic">إِلْيَاس</span></td><td>My God is Yahweh — mentioned in Quran as a prophet of righteousness</td></tr>
        <tr><td><span class="name-eng">Dawud</span> <span class="quran-badge">Quran</span></td><td><span class="name-arabic">دَاوُد</span></td><td>Beloved — the Prophet King who was given the Zabur (Psalms)</td></tr>
        <tr><td><span class="name-eng">Sulaiman</span> <span class="quran-badge">Quran</span></td><td><span class="name-arabic">سُلَيْمَان</span></td><td>Peace — the Prophet King who commanded jinn and animals</td></tr>
        <tr><td><span class="name-eng">Salih</span> <span class="quran-badge">Quran</span></td><td><span class="name-arabic">صَالِح</span></td><td>Righteous, virtuous, good — Prophet sent to Thamud</td></tr>
        <tr><td><span class="name-eng">Hud</span> <span class="quran-badge">Quran</span></td><td><span class="name-arabic">هُود</span></td><td>The Guided one — Prophet sent to the people of 'Ad</td></tr>
        <tr><td><span class="name-eng">Lut</span> <span class="quran-badge">Quran</span></td><td><span class="name-arabic">لُوط</span></td><td>To cover, wrap — nephew of Prophet Ibrahim ﷺ</td></tr>
        <tr><td><span class="name-eng">Shuaib</span> <span class="quran-badge">Quran</span></td><td><span class="name-arabic">شُعَيب</span></td><td>One who shows the right path — Prophet sent to Madyan</td></tr>
        <tr><td><span class="name-eng">Ayyub</span> <span class="quran-badge">Quran</span></td><td><span class="name-arabic">أَيُّوب</span></td><td>He who returns to God — the Prophet of patience</td></tr>
        <tr><td><span class="name-eng">Yunus</span> <span class="quran-badge">Quran</span></td><td><span class="name-arabic">يُونُس</span></td><td>Dove, a gift — the Prophet who was swallowed by a whale</td></tr>
      </tbody>
    </table>

    <!-- BOY CLASSIC -->
    <h2 id="boy-classic">Classic Muslim Boy Names — Timeless &amp; Powerful</h2>
    <p>These names have been popular among Muslim families for centuries. They carry deep Islamic heritage and are beloved across all cultures:</p>
    <table class="name-table">
      <thead><tr><th>Name</th><th>Arabic</th><th>Meaning</th><th>Origin</th></tr></thead>
      <tbody>
        <tr><td><span class="name-eng">Abdullah</span></td><td><span class="name-arabic">عَبْدُ اللَّه</span></td><td>Servant of Allah — most beloved name to Allah</td><td class="name-origin">Arabic / Hadith</td></tr>
        <tr><td><span class="name-eng">Abdur Rahman</span></td><td><span class="name-arabic">عَبْدُ الرَّحْمَن</span></td><td>Servant of the Most Merciful — 2nd most beloved name to Allah</td><td class="name-origin">Arabic / Hadith</td></tr>
        <tr><td><span class="name-eng">Ali</span></td><td><span class="name-arabic">عَلِيّ</span></td><td>High, elevated, noble — name of the 4th Caliph</td><td class="name-origin">Arabic</td></tr>
        <tr><td><span class="name-eng">Umar</span></td><td><span class="name-arabic">عُمَر</span></td><td>Life, flourishing — the 2nd Caliph of Islam</td><td class="name-origin">Arabic</td></tr>
        <tr><td><span class="name-eng">Uthman</span></td><td><span class="name-arabic">عُثْمَان</span></td><td>Baby bustard bird — the 3rd Caliph</td><td class="name-origin">Arabic</td></tr>
        <tr><td><span class="name-eng">Abu Bakr / Bakr</span></td><td><span class="name-arabic">بَكْر</span></td><td>Young camel — the 1st Caliph and closest companion</td><td class="name-origin">Arabic</td></tr>
        <tr><td><span class="name-eng">Hassan</span></td><td><span class="name-arabic">حَسَن</span></td><td>Handsome, good, excellent — grandson of the Prophet ﷺ</td><td class="name-origin">Arabic</td></tr>
        <tr><td><span class="name-eng">Hussain</span></td><td><span class="name-arabic">حُسَيْن</span></td><td>Beautiful, good-natured — grandson of the Prophet ﷺ</td><td class="name-origin">Arabic</td></tr>
        <tr><td><span class="name-eng">Hamza</span></td><td><span class="name-arabic">حَمْزَة</span></td><td>Lion, strong, steadfast — uncle of the Prophet ﷺ, Lion of Allah</td><td class="name-origin">Arabic</td></tr>
        <tr><td><span class="name-eng">Bilal</span></td><td><span class="name-arabic">بِلَال</span></td><td>Water, moist — the first mu'azzin of Islam</td><td class="name-origin">Arabic</td></tr>
        <tr><td><span class="name-eng">Khalid</span></td><td><span class="name-arabic">خَالِد</span></td><td>Eternal, immortal — the great Muslim general</td><td class="name-origin">Arabic</td></tr>
        <tr><td><span class="name-eng">Tariq</span></td><td><span class="name-arabic">طَارِق</span></td><td>Morning star, night visitor — Mentioned in Quran (Surah At-Tariq)</td><td class="name-origin">Arabic / Quran</td></tr>
        <tr><td><span class="name-eng">Saad</span></td><td><span class="name-arabic">سَعْد</span></td><td>Happiness, good luck, fortune</td><td class="name-origin">Arabic</td></tr>
        <tr><td><span class="name-eng">Zaid</span></td><td><span class="name-arabic">زَيْد</span></td><td>Abundance, growth, increase</td><td class="name-origin">Arabic</td></tr>
        <tr><td><span class="name-eng">Talha</span></td><td><span class="name-arabic">طَلْحَة</span></td><td>Fruitful tree, one who protects — a great companion</td><td class="name-origin">Arabic</td></tr>
      </tbody>
    </table>

    <!-- BOY TRENDING -->
    <h2 id="boy-trending">Trending Muslim Boy Names 2026 <span class="trend-badge">HOT</span></h2>
    <p>These names are surging in popularity in 2026 — combining modern sounds with deep Islamic meaning:</p>
    <table class="name-table">
      <thead><tr><th>Name</th><th>Arabic</th><th>Meaning</th><th>Why Trending</th></tr></thead>
      <tbody>
        <tr><td><span class="name-eng">Zayan</span> <span class="trend-badge">TOP</span></td><td><span class="name-arabic">زَيَّان</span></td><td>Graceful, beautiful, hospitable, adorner</td><td class="name-origin">Modern, easy globally</td></tr>
        <tr><td><span class="name-eng">Ayaan</span> <span class="trend-badge">TOP</span></td><td><span class="name-arabic">أَيَّان</span></td><td>Gift of God, time, era, watchful</td><td class="name-origin">Instagram/social viral</td></tr>
        <tr><td><span class="name-eng">Rayyan</span> <span class="trend-badge">TOP</span></td><td><span class="name-arabic">رَيَّان</span></td><td>Gate of Jannah for those who fast — luxuriant, full of water</td><td class="name-origin">Islamic meaning + modern</td></tr>
        <tr><td><span class="name-eng">Arham</span></td><td><span class="name-arabic">أَرْحَم</span></td><td>Most merciful, most compassionate</td><td class="name-origin">Beautiful Islamic meaning</td></tr>
        <tr><td><span class="name-eng">Rehan</span></td><td><span class="name-arabic">رَيْحَان</span></td><td>Sweet basil, fragrance, mercy of Allah</td><td class="name-origin">Quran 55:12 mention</td></tr>
        <tr><td><span class="name-eng">Mikhail</span></td><td><span class="name-arabic">مِيكَائِيل</span></td><td>Who is like God? — name of Archangel</td><td class="name-origin">Angelic name rising</td></tr>
        <tr><td><span class="name-eng">Nayel</span></td><td><span class="name-arabic">نَايِل</span></td><td>Achiever, winner, one who obtains his goal</td><td class="name-origin">Positive modern meaning</td></tr>
        <tr><td><span class="name-eng">Azlan</span></td><td><span class="name-arabic">أَسْلَان</span></td><td>Lion, brave, courageous, powerful</td><td class="name-origin">Strong masculine name</td></tr>
        <tr><td><span class="name-eng">Ehan</span></td><td><span class="name-arabic">إِهَان</span></td><td>Full moon, expected, anticipated</td><td class="name-origin">Short, modern, beautiful</td></tr>
        <tr><td><span class="name-eng">Faizan</span></td><td><span class="name-arabic">فَيْضَان</span></td><td>Generosity, grace, abundance of blessings</td><td class="name-origin">Popular in South Asia</td></tr>
        <tr><td><span class="name-eng">Sameer</span></td><td><span class="name-arabic">سَمِير</span></td><td>Entertaining companion, jovial, pleasant</td><td class="name-origin">Globally easy to say</td></tr>
        <tr><td><span class="name-eng">Ariz</span></td><td><span class="name-arabic">عَرِيض</span></td><td>Respectable, intelligent, rain-bearing cloud</td><td class="name-origin">Unique meaning</td></tr>
        <tr><td><span class="name-eng">Zaroon</span></td><td><span class="name-arabic">زَارُون</span></td><td>Visitor, one who visits often, generous host</td><td class="name-origin">Unique yet Islamic</td></tr>
        <tr><td><span class="name-eng">Huzaifa</span></td><td><span class="name-arabic">حُذَيْفَة</span></td><td>Wise, discerning — name of a great companion of the Prophet ﷺ</td><td class="name-origin">Companion connection</td></tr>
        <tr><td><span class="name-eng">Shazil</span></td><td><span class="name-arabic">شَاذِل</span></td><td>Unique, rare, distinct, of exceptional beauty</td><td class="name-origin">Rare and distinctive</td></tr>
      </tbody>
    </table>

    <!-- BOY QURAN -->
    <h2 id="boy-quran">Quranic Boy Names — Directly from the Quran</h2>
    <table class="name-table">
      <thead><tr><th>Name</th><th>Arabic</th><th>Meaning</th><th>Surah Reference</th></tr></thead>
      <tbody>
        <tr><td><span class="name-eng">Taha</span> <span class="quran-badge">Quran</span></td><td><span class="name-arabic">طٰه</span></td><td>Name of the Prophet ﷺ — surah name (meanings disputed, sacred)</td><td class="name-origin">Surah Taha (20)</td></tr>
        <tr><td><span class="name-eng">Yasin</span> <span class="quran-badge">Quran</span></td><td><span class="name-arabic">يٰس</span></td><td>The heart of the Quran — another name of the Prophet ﷺ</td><td class="name-origin">Surah Yasin (36)</td></tr>
        <tr><td><span class="name-eng">Luqman</span> <span class="quran-badge">Quran</span></td><td><span class="name-arabic">لُقْمَان</span></td><td>Wise, insightful — the wise man who advised his son</td><td class="name-origin">Surah Luqman (31)</td></tr>
        <tr><td><span class="name-eng">Dhul Kifl</span> → Kifl</td><td><span class="name-arabic">ذُو الْكِفْل</span></td><td>The one with a portion/responsibility — a patient prophet</td><td class="name-origin">Surah Al-Anbiya (21)</td></tr>
        <tr><td><span class="name-eng">Jibril</span></td><td><span class="name-arabic">جِبْرِيل</span></td><td>Servant of God, strength of God — the Archangel Gabriel</td><td class="name-origin">Quran 2:97</td></tr>
        <tr><td><span class="name-eng">Israfil / Serafil</span></td><td><span class="name-arabic">إِسْرَافِيل</span></td><td>Angel of the Trumpet — Burning ones of God</td><td class="name-origin">Islamic tradition</td></tr>
        <tr><td><span class="name-eng">Nuh</span> <span class="quran-badge">Quran</span></td><td><span class="name-arabic">نُوح</span></td><td>Rest, comfort, peace — Prophet of the Great Flood</td><td class="name-origin">Surah Nuh (71)</td></tr>
        <tr><td><span class="name-eng">Dhul Qarnain → Qarnain</span></td><td><span class="name-arabic">ذُو الْقَرْنَيْن</span></td><td>Owner of two ages / horns — the righteous ruler in Quran</td><td class="name-origin">Surah Al-Kahf (18)</td></tr>
      </tbody>
    </table>

    <!-- GIRL CLASSIC -->
    <h2 id="girl-classic">Classic Muslim Girl Names — Timeless Elegance</h2>
    <p>These names have graced Muslim families for over 1,400 years. Each carries deep meaning and sacred history:</p>
    <table class="name-table">
      <thead><tr><th>Name</th><th>Arabic</th><th>Meaning &amp; Islamic Significance</th></tr></thead>
      <tbody>
        <tr><td><span class="name-eng">Maryam</span> <span class="quran-badge">Quran</span></td><td><span class="name-arabic">مَرْيَم</span></td><td>Beloved, wished-for child — mother of Prophet Isa ﷺ. Only woman named in the Quran. Entire Surah (19) named for her.</td></tr>
        <tr><td><span class="name-eng">Aisha</span></td><td><span class="name-arabic">عَائِشَة</span></td><td>Living, prosperous, full of life — beloved wife of the Prophet ﷺ, the "Mother of Believers"</td></tr>
        <tr><td><span class="name-eng">Fatimah</span></td><td><span class="name-arabic">فَاطِمَة</span></td><td>One who weans, one who abstains — daughter of the Prophet ﷺ, leader of women in Jannah</td></tr>
        <tr><td><span class="name-eng">Khadijah</span></td><td><span class="name-arabic">خَدِيجَة</span></td><td>Early baby, trustworthy — the first wife of the Prophet ﷺ and first Muslim</td></tr>
        <tr><td><span class="name-eng">Zainab</span></td><td><span class="name-arabic">زَيْنَب</span></td><td>Fragrant flowering plant, father's jewel — daughter of the Prophet ﷺ</td></tr>
        <tr><td><span class="name-eng">Ruqayyah</span></td><td><span class="name-arabic">رُقَيَّة</span></td><td>Rising, ascent, amulet — daughter of the Prophet ﷺ</td></tr>
        <tr><td><span class="name-eng">Umm Kulthum</span> → Kulthum</td><td><span class="name-arabic">أُمُّ كُلْثُوم</span></td><td>Mother of Kulthum — daughter of the Prophet ﷺ</td></tr>
        <tr><td><span class="name-eng">Hafsa</span></td><td><span class="name-arabic">حَفْصَة</span></td><td>Young lioness, gathering — wife of the Prophet ﷺ, guardian of the Quran</td></tr>
        <tr><td><span class="name-eng">Safiyyah</span></td><td><span class="name-arabic">صَفِيَّة</span></td><td>Pure, untroubled, serene — wife of the Prophet ﷺ</td></tr>
        <tr><td><span class="name-eng">Asma</span></td><td><span class="name-arabic">أَسْمَاء</span></td><td>Names, lofty, precious — daughter of Abu Bakr RA</td></tr>
        <tr><td><span class="name-eng">Noor</span></td><td><span class="name-arabic">نُور</span></td><td>Light, divine illumination — mentioned in Quran (24:35)</td></tr>
        <tr><td><span class="name-eng">Huda</span></td><td><span class="name-arabic">هُدَى</span></td><td>Guidance, righteousness — the guidance of Allah</td></tr>
        <tr><td><span class="name-eng">Sana</span></td><td><span class="name-arabic">سَنَاء</span></td><td>Brilliance, splendor, radiance</td></tr>
        <tr><td><span class="name-eng">Layla</span></td><td><span class="name-arabic">لَيْلَى</span></td><td>Night, dark beauty, intoxicating — beloved name in Arabic poetry</td></tr>
        <tr><td><span class="name-eng">Sumayya</span></td><td><span class="name-arabic">سُمَيَّة</span></td><td>High, exalted — the first martyr in Islam</td></tr>
      </tbody>
    </table>

    <!-- GIRL TRENDING -->
    <h2 id="girl-trending">Trending Muslim Girl Names 2026 <span class="trend-badge">HOT</span></h2>
    <table class="name-table">
      <thead><tr><th>Name</th><th>Arabic</th><th>Meaning</th><th>Why Trending</th></tr></thead>
      <tbody>
        <tr><td><span class="name-eng">Inaya</span> <span class="trend-badge">TOP</span></td><td><span class="name-arabic">عِنَايَة</span></td><td>Gift of Allah, divine care, solicitude, concern</td><td class="name-origin">Beautiful meaning, easy</td></tr>
        <tr><td><span class="name-eng">Zoya</span> <span class="trend-badge">TOP</span></td><td><span class="name-arabic">زُويَا</span></td><td>Loving, caring, alive, full of life</td><td class="name-origin">Social media viral</td></tr>
        <tr><td><span class="name-eng">Eshal</span> <span class="trend-badge">TOP</span></td><td><span class="name-arabic">عِشَال</span></td><td>Flower of Jannah, a beautiful fragrant flower of paradise</td><td class="name-origin">Heavenly meaning</td></tr>
        <tr><td><span class="name-eng">Hoorain</span></td><td><span class="name-arabic">حُورَيْن</span></td><td>Of the houries of Jannah, with beautiful eyes</td><td class="name-origin">Paradise connection</td></tr>
        <tr><td><span class="name-eng">Aleena</span></td><td><span class="name-arabic">أَلِينَة</span></td><td>Soft, gentle, tender, delicate</td><td class="name-origin">Soft sound, global</td></tr>
        <tr><td><span class="name-eng">Mahnoor</span></td><td><span class="name-arabic">مَاہ نُور</span></td><td>Moonlight, light of the moon</td><td class="name-origin">Poetic, beautiful</td></tr>
        <tr><td><span class="name-eng">Amara</span></td><td><span class="name-arabic">أَمَارَة</span></td><td>Eternal, everlasting, grace, mercy</td><td class="name-origin">Global recognition</td></tr>
        <tr><td><span class="name-eng">Anaya</span></td><td><span class="name-arabic">عَنَايَة</span></td><td>Concern, care, God answered my prayer</td><td class="name-origin">Modern yet meaningful</td></tr>
        <tr><td><span class="name-eng">Alaia</span></td><td><span class="name-arabic">عَلَايَا</span></td><td>Sublime, high status, lofty, exalted</td><td class="name-origin">Rare, elegant</td></tr>
        <tr><td><span class="name-eng">Mysha</span></td><td><span class="name-arabic">مِيشَا</span></td><td>Happy for life, beautiful, full of joy</td><td class="name-origin">Unique and positive</td></tr>
        <tr><td><span class="name-eng">Zayra</span></td><td><span class="name-arabic">زَيْرَاء</span></td><td>Rose, princess, visitor, bright</td><td class="name-origin">Floral beauty</td></tr>
        <tr><td><span class="name-eng">Sakina</span></td><td><span class="name-arabic">سَكِينَة</span></td><td>Peace, tranquility, serenity, divine calm</td><td class="name-origin">Deep Quranic meaning</td></tr>
        <tr><td><span class="name-eng">Areeba</span></td><td><span class="name-arabic">أَرِيبَة</span></td><td>Wise, intelligent, witty, clever</td><td class="name-origin">Intellectual strength</td></tr>
        <tr><td><span class="name-eng">Hania</span></td><td><span class="name-arabic">هَانِيَة</span></td><td>Happy, pleased, content, one who lives well</td><td class="name-origin">Positive, joyful</td></tr>
        <tr><td><span class="name-eng">Yumna</span></td><td><span class="name-arabic">يُمْنَى</span></td><td>Blessed, fortunate, on the right side of Allah's grace</td><td class="name-origin">Blessings meaning</td></tr>
      </tbody>
    </table>

    <!-- GIRL QURAN -->
    <h2 id="girl-quran">Quranic Girl Names — Directly from the Quran</h2>
    <table class="name-table">
      <thead><tr><th>Name</th><th>Arabic</th><th>Meaning &amp; Quran Reference</th></tr></thead>
      <tbody>
        <tr><td><span class="name-eng">Maryam</span> <span class="quran-badge">Quran</span></td><td><span class="name-arabic">مَرْيَم</span></td><td>Beloved — Surah 19 is named Maryam. Only woman directly named in the Quran.</td></tr>
        <tr><td><span class="name-eng">Asiya</span></td><td><span class="name-arabic">آسِيَة</span></td><td>One who heals, the Pharaoh's wife who protected Prophet Musa ﷺ — Quran 66:11</td></tr>
        <tr><td><span class="name-eng">Ayat</span> <span class="quran-badge">Quran</span></td><td><span class="name-arabic">آيَات</span></td><td>Signs of Allah, verses of the Quran — used throughout the Quran</td></tr>
        <tr><td><span class="name-eng">Hawa</span></td><td><span class="name-arabic">حَوَّاء</span></td><td>Living, mother of humanity — wife of Prophet Adam ﷺ</td></tr>
        <tr><td><span class="name-eng">Noor</span> <span class="quran-badge">Quran</span></td><td><span class="name-arabic">نُور</span></td><td>Light — "Allah is the Light of the heavens and earth" (Quran 24:35)</td></tr>
        <tr><td><span class="name-eng">Huda</span> <span class="quran-badge">Quran</span></td><td><span class="name-arabic">هُدَى</span></td><td>Divine guidance — "This is the Book in which there is no doubt, a guidance (huda) for the God-conscious" (Quran 2:2)</td></tr>
        <tr><td><span class="name-eng">Rahma</span> <span class="quran-badge">Quran</span></td><td><span class="name-arabic">رَحْمَة</span></td><td>Mercy — "And We sent you not except as a mercy (rahma) to the worlds" (Quran 21:107)</td></tr>
        <tr><td><span class="name-eng">Jannah</span></td><td><span class="name-arabic">جَنَّة</span></td><td>Paradise — mentioned hundreds of times in the Quran as the ultimate reward</td></tr>
        <tr><td><span class="name-eng">Taqwa</span> <span class="quran-badge">Quran</span></td><td><span class="name-arabic">تَقْوَى</span></td><td>God-consciousness, piety — "Indeed the most honored of you in the sight of Allah is the one with the most taqwa" (49:13)</td></tr>
        <tr><td><span class="name-eng">Sabr / Sabira</span></td><td><span class="name-arabic">صَبْر</span></td><td>Patience, perseverance — "Allah is with the patient" (Quran 2:153)</td></tr>
      </tbody>
    </table>

    <!-- UNIQUE -->
    <h2 id="unique">Unique &amp; Rare Islamic Names — Stand Out with Beauty</h2>
    <p>These names are rare, distinctive, and deeply meaningful — perfect for parents who want something truly special:</p>

    <h3>Rare Boy Names</h3>
    <table class="name-table">
      <thead><tr><th>Name</th><th>Arabic</th><th>Meaning</th></tr></thead>
      <tbody>
        <tr><td><span class="name-eng">Muaz</span></td><td><span class="name-arabic">مُعَاذ</span></td><td>Protected, one seeking refuge — name of a great companion of the Prophet ﷺ</td></tr>
        <tr><td><span class="name-eng">Harith</span></td><td><span class="name-arabic">حَارِث</span></td><td>Ploughman, cultivator, one who strives — a beloved companion name</td></tr>
        <tr><td><span class="name-eng">Nawfal</span></td><td><span class="name-arabic">نَوْفَل</span></td><td>Generous, sea-like in generosity, bountiful gift</td></tr>
        <tr><td><span class="name-eng">Raif</span></td><td><span class="name-arabic">رَؤُوف</span></td><td>Kind, gentle, compassionate — one of the names of Allah's attributes</td></tr>
        <tr><td><span class="name-eng">Muntasir</span></td><td><span class="name-arabic">مُنْتَصِر</span></td><td>Victorious, triumphant, the winner</td></tr>
        <tr><td><span class="name-eng">Barakah / Barak</span></td><td><span class="name-arabic">بَرَكَة</span></td><td>Blessing, divine abundance, growth through Allah's grace</td></tr>
      </tbody>
    </table>

    <h3>Rare Girl Names</h3>
    <table class="name-table">
      <thead><tr><th>Name</th><th>Arabic</th><th>Meaning</th></tr></thead>
      <tbody>
        <tr><td><span class="name-eng">Wardah</span></td><td><span class="name-arabic">وَرْدَة</span></td><td>Rose, flower — feminine beauty and grace</td></tr>
        <tr><td><span class="name-eng">Ghayda</span></td><td><span class="name-arabic">غَيْدَاء</span></td><td>Young and delicate, soft and tender</td></tr>
        <tr><td><span class="name-eng">Nada</span></td><td><span class="name-arabic">نَدَى</span></td><td>Morning dew, generosity, calling out</td></tr>
        <tr><td><span class="name-eng">Salsabil</span> <span class="quran-badge">Quran</span></td><td><span class="name-arabic">سَلْسَبِيل</span></td><td">A spring in Jannah — mentioned in Quran 76:18. Rare and incredibly meaningful.</td></tr>
        <tr><td><span class="name-eng">Thara</span></td><td><span class="name-arabic">ثَرَاء</span></td><td>Wealth of knowledge, richness of spirit</td></tr>
        <tr><td><span class="name-eng">Lubna</span></td><td><span class="name-arabic">لُبْنَى</span></td><td>A storax tree — pure, fragrant, ancient Arabic name</td></tr>
        <tr><td><span class="name-eng">Maisa</span></td><td><span class="name-arabic">مَيْسَاء</span></td><td">Walking with pride and grace, swaying gracefully</td></tr>
        <tr><td><span class="name-eng">Rawdah</span></td><td><span class="name-arabic">رَوْضَة</span></td><td">Garden, meadow, paradise garden — also name for the Prophet's ﷺ area in Masjid an-Nabawi</td></tr>
      </tbody>
    </table>

    <!-- HOW TO CHOOSE -->
    <h2>How to Choose the Perfect Islamic Name</h2>
    <ul>
      <li><strong>Check the meaning thoroughly</strong> — in both Arabic and any other relevant language</li>
      <li><strong>Say it aloud 10 times</strong> — how does it sound? Is it easy to pronounce in your community?</li>
      <li><strong>Consider nicknames</strong> — what will the child be called at home? Make sure you love both the full name and its natural nickname</li>
      <li><strong>Check with a scholar</strong> if you are unsure about the authenticity of a meaning or origin</li>
      <li><strong>Combine with the father's name meaningfully</strong> — in Islam, the child carries their father's name (e.g. Muhammad ibn Ibrahim)</li>
      <li><strong>The Aqeeqah tradition:</strong> The Islamic tradition is to name the child on the 7th day, slaughter two sheep for a boy and one for a girl, and shave the baby's hair</li>
    </ul>

    <!-- FAQ -->
    <h2 id="faq">Frequently Asked Questions</h2>
    <div class="faq-item">
      <div class="faq-q" onclick="this.nextElementSibling.style.display=this.nextElementSibling.style.display==='block'?'none':'block';">What is the most popular Muslim baby name in 2026? <i class="fas fa-chevron-down"></i></div>
      <div class="faq-a">Muhammad remains the #1 Muslim boy name worldwide in 2026. For girls, Maryam, Aisha, and Noor are consistently top choices. Trending new names include Zayan, Rayyan, Ayaan for boys and Inaya, Zoya, Eshal for girls.</div>
    </div>
    <div class="faq-item">
      <div class="faq-q" onclick="this.nextElementSibling.style.display=this.nextElementSibling.style.display==='block'?'none':'block';">What does Islam say about choosing a baby name? <i class="fas fa-chevron-down"></i></div>
      <div class="faq-a">The Prophet ﷺ said: "You will be called on the Day of Judgment by your names and your father's names, so give yourselves good names." (Abu Dawud, 4948). Choose a name with a beautiful, positive meaning. The Prophet ﷺ himself changed names with bad meanings.</div>
    </div>
    <div class="faq-item">
      <div class="faq-q" onclick="this.nextElementSibling.style.display=this.nextElementSibling.style.display==='block'?'none':'block';">Which names are forbidden in Islam? <i class="fas fa-chevron-down"></i></div>
      <div class="faq-a">Forbidden names include: names of idols or false gods, names meaning evil or shameful things, arrogant names claiming divine attributes only for Allah, and names that claim servitude to other than Allah. The Prophet ﷺ changed names like "Abd al-Ka'bah" to "Abdullah."</div>
    </div>
    <div class="faq-item">
      <div class="faq-q" onclick="this.nextElementSibling.style.display=this.nextElementSibling.style.display==='block'?'none':'block';">What are the best Quranic baby names? <i class="fas fa-chevron-down"></i></div>
      <div class="faq-a">Best Quranic boy names: Ibrahim, Yusuf, Musa, Adam, Nuh, Yahya, Idris, Sulaiman, Dawud. Best Quranic girl names: Maryam (only woman named in Quran), Asiya, Ayat, Noor, Huda, Rahma, Salsabil (a spring in Jannah — Quran 76:18).</div>
    </div>
    <div class="faq-item">
      <div class="faq-q" onclick="this.nextElementSibling.style.display=this.nextElementSibling.style.display==='block'?'none':'block';">When should you name a baby in Islam? <i class="fas fa-chevron-down"></i></div>
      <div class="faq-a">The recommended Sunnah is to name the baby on the 7th day after birth, along with performing Aqeeqah (slaughtering two sheep for a boy, one for a girl) and shaving the baby's head. However, it is also permissible to name the baby on the first, third, or any day.</div>
    </div>
    <div class="faq-item">
      <div class="faq-q" onclick="this.nextElementSibling.style.display=this.nextElementSibling.style.display==='block'?'none':'block';">Can a Muslim baby have a non-Arabic name? <i class="fas fa-chevron-down"></i></div>
      <div class="faq-a">Yes. Islam does not restrict names to Arabic only. Names from any language are acceptable as long as they have good meanings, are not names of idols or forbidden objects, and do not carry negative connotations. Many companions had non-Arabic names.</div>
    </div>

    <!-- Internal Links -->
    <div class="highlight-box mt-5">
      <strong>More Islamic Knowledge at NoorPath Academy:</strong>
      <ul style="margin:12px 0 0;padding-left:20px;">
        <li><a href="/blog/signs-of-qiyamah" style="color:var(--emerald);">Signs of Qiyamah — 10 Major &amp; 77 Minor Signs</a></li>
        <li><a href="/blog/99-names-of-allah-asmaul-husna" style="color:var(--emerald);">99 Names of Allah (Asmaul Husna) with Meanings</a></li>
        <li><a href="/blog/ayatul-kursi-arabic-english-benefits" style="color:var(--emerald);">Ayatul Kursi — Arabic, Translation &amp; Benefits</a></li>
        <li><a href="/blog/islamic-dream-interpretation" style="color:var(--emerald);">Islamic Dream Interpretation — Complete Guide</a></li>
      </ul>
    </div>`,
  },
  "islamic-dream-interpretation": {
    style: `.article-body { font-size: 1.05rem; line-height: 1.85; color: #374151; }
    .article-body h2 { font-size: 1.5rem; font-weight: 700; color: var(--charcoal); margin: 40px 0 16px; }
    .article-body h3 { font-size: 1.15rem; font-weight: 700; color: var(--emerald); margin: 24px 0 10px; }
    .article-body p { margin-bottom: 18px; }
    .article-body ul, .article-body ol { margin-bottom: 18px; padding-left: 24px; }
    .article-body li { margin-bottom: 8px; }
    .highlight-box { background: rgba(10,110,79,.06); border-left: 4px solid var(--emerald); border-radius: 8px; padding: 20px 24px; margin: 24px 0; }
    .gold-box { background: rgba(232,184,75,.08); border-left: 4px solid var(--gold); border-radius: 8px; padding: 20px 24px; margin: 24px 0; }
    .dream-type-card { border-radius: 14px; padding: 24px; margin-bottom: 16px; border: 1px solid var(--border); }
    .arabic-text { font-family: 'Amiri', serif; font-size: 1.6rem; color: var(--emerald); direction: rtl; text-align: center; padding: 16px; background: rgba(10,110,79,.04); border-radius: 8px; margin: 12px 0; line-height: 2; }
    .dream-table { width: 100%; border-collapse: collapse; margin: 20px 0; }
    .dream-table th { background: var(--emerald); color: #fff; padding: 12px 16px; text-align: left; font-size: .9rem; }
    .dream-table td { padding: 12px 16px; border-bottom: 1px solid var(--border); font-size: .92rem; vertical-align: top; }
    .dream-table tr:nth-child(even) td { background: var(--ivory); }
    .dream-table .symbol { font-weight: 700; color: var(--charcoal); }
    .dream-table .meaning { color: #374151; }
    .dream-table .source { color: #6b7280; font-size: .82rem; font-style: italic; }
    .steps-list { counter-reset: steps; list-style: none; padding: 0; }
    .steps-list li { counter-increment: steps; display: flex; gap: 14px; margin-bottom: 16px; }
    .steps-list li::before { content: counter(steps); flex-shrink: 0; width: 34px; height: 34px; background: var(--emerald); color: #fff; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 700; font-size: .9rem; }
    .faq-item { border: 1px solid var(--border); border-radius: 10px; margin-bottom: 12px; overflow: hidden; }
    .faq-q { padding: 16px 20px; font-weight: 700; background: var(--ivory); color: var(--charcoal); cursor: pointer; }
    .faq-a { padding: 16px 20px; background: #fff; font-size: .95rem; line-height: 1.7; display: none; }
    .ibn-sirin-badge { background: linear-gradient(135deg, #0a6e4f, #064d38); color: #fff; border-radius: 8px; padding: 16px 20px; margin: 20px 0; font-size: .9rem; }`,
    content: `<div class="highlight-box">
      <strong>Prophet Muhammad ﷺ said:</strong>
      <div class="arabic-text">الرُّؤْيَا الصَّالِحَةُ مِنَ اللَّهِ وَالْحُلْمُ مِنَ الشَّيْطَانِ</div>
      <p style="margin:0;font-style:italic;">"A good dream (ru'ya) is from Allah, and a bad dream (hulum) is from Shaytan." — <strong>Sahih Bukhari, 6985</strong></p>
    </div>

    <p>Dreams occupy a profound and sacred place in Islam. Unlike other religious and cultural traditions that treat dreams as random neurological events, Islam recognizes dreams as a form of divine communication — a window between this world and the unseen.</p>
    <p>The Prophet Muhammad ﷺ himself received the first revelations of the Quran in the form of true visions (ru'ya sadiqah). The Quran mentions dreams explicitly — the dream of Prophet Ibrahim ﷺ to sacrifice his son, the dream of Prophet Yusuf ﷺ and his 11 brothers bowing to him, and the dream of the King of Egypt interpreted by Prophet Yusuf ﷺ that saved a nation from famine.</p>
    <p>This guide brings together everything authentic Islam has taught us about dreams — from the Quran, from Sahih Hadith, and from the greatest dream interpreter in Islamic history, Imam Muhammad ibn Sirin (rahimahullah).</p>

    <nav style="background:var(--ivory);border:1px solid var(--border);border-radius:12px;padding:20px 24px;margin:32px 0;">
      <h2 style="font-size:1rem;font-weight:700;color:var(--charcoal);margin-bottom:12px;">Table of Contents</h2>
      <ol style="margin:0;padding-left:20px;font-size:.95rem;">
        <li><a href="#types" style="color:var(--emerald);text-decoration:none;">The Three Types of Dreams in Islam</a></li>
        <li><a href="#ibn-sirin" style="color:var(--emerald);text-decoration:none;">Who Was Ibn Sirin?</a></li>
        <li><a href="#rules" style="color:var(--emerald);text-decoration:none;">Rules of Islamic Dream Interpretation</a></li>
        <li><a href="#good-dream" style="color:var(--emerald);text-decoration:none;">What to Do with a Good Dream</a></li>
        <li><a href="#bad-dream" style="color:var(--emerald);text-decoration:none;">What to Do with a Bad Dream</a></li>
        <li><a href="#best-time" style="color:var(--emerald);text-decoration:none;">Best Time for True Dreams</a></li>
        <li><a href="#symbols" style="color:var(--emerald);text-decoration:none;">40+ Common Dream Symbols in Islam</a></li>
        <li><a href="#prophet-dream" style="color:var(--emerald);text-decoration:none;">Seeing the Prophet ﷺ in a Dream</a></li>
        <li><a href="#dead-person" style="color:var(--emerald);text-decoration:none;">Seeing a Deceased Person in a Dream</a></li>
        <li><a href="#faq" style="color:var(--emerald);text-decoration:none;">FAQ</a></li>
      </ol>
    </nav>

    <!-- TYPES -->
    <h2 id="types">The Three Types of Dreams in Islam</h2>
    <p>The Prophet Muhammad ﷺ clearly defined three categories of dreams. Understanding this is the foundation of Islamic dream interpretation:</p>

    <div class="dream-type-card" style="background:rgba(10,110,79,.05);border-color:var(--emerald);">
      <h3 style="margin-top:0;color:var(--emerald);">1. Ru'ya Salihah (رُؤْيَا صَالِحَة) — The Good True Dream</h3>
      <p>A righteous, good dream from Allah. This is the only type of dream with meaningful interpretation. It comes from Allah as glad tidings, guidance, or a warning to the believer. The Prophet ﷺ said these are "1/46th of Prophethood."</p>
      <p><strong>Signs of a Ru'ya Salihah:</strong></p>
      <ul style="margin:0;">
        <li>You feel peaceful and calm after waking</li>
        <li>It is clear, vivid, and memorable</li>
        <li>It often occurs near the time of Fajr (dawn)</li>
        <li>It leaves a sense of meaning or message</li>
      </ul>
    </div>

    <div class="dream-type-card" style="background:rgba(220,53,69,.04);border-color:#dc3545;">
      <h3 style="margin-top:0;color:#dc3545;">2. Hulum (حُلُم) — The Bad Dream from Shaytan</h3>
      <p>A disturbing nightmare sent by Shaytan to cause grief, fear, or sadness to the believer. These dreams carry no real meaning and should not be interpreted. They should be dismissed and treated with the specific responses taught by the Prophet ﷺ.</p>
      <p><strong>Signs of a Hulum:</strong></p>
      <ul style="margin:0;">
        <li>Causes fear, anxiety, or distress upon waking</li>
        <li>Contains frightening imagery, falling, being chased</li>
        <li>You feel heavy or disturbed after waking</li>
        <li>You feel an urge to share it with others (resist this)</li>
      </ul>
    </div>

    <div class="dream-type-card" style="background:rgba(232,184,75,.05);border-color:var(--gold);">
      <h3 style="margin-top:0;color:#92400e;">3. Hadeeth ul-Nafs (حَدِيثُ النَّفْس) — Inner Thoughts/Subconscious</h3>
      <p>Dreams reflecting your own daily thoughts, worries, desires, or preoccupations. If you spent the day worrying about work, you may dream about work. If you are anxious about an exam, you may dream about it. These are simply the mind processing daily experiences and hold no Islamic spiritual meaning.</p>
    </div>

    <div class="gold-box">
      <strong>Hadith — Sahih Muslim, 2263:</strong> The Prophet ﷺ said: <em>"Dreams are of three types: one good dream which is a sort of good tidings from Allah; the evil dream which causes pain is from Shaytan; and the third is a suggestion of one's own mind."</em>
    </div>

    <!-- IBN SIRIN -->
    <h2 id="ibn-sirin">Who Was Ibn Sirin — The Master of Dream Interpretation?</h2>
    <div class="ibn-sirin-badge">
      <strong>Imam Muhammad ibn Sirin (رحمه الله)</strong><br>
      Born: 653 CE (33 AH) — Basra, Iraq<br>
      Died: 729 CE (110 AH) — Basra, Iraq<br>
      Student of: Anas ibn Malik RA (companion of the Prophet ﷺ)
    </div>
    <p>Muhammad ibn Sirin was a Tabi'i (follower of the Companions) and one of the greatest Islamic scholars of his era. He was renowned for three things: his extraordinary piety, his mastery of Hadith, and his God-given gift of interpreting dreams.</p>
    <p>His famous book <strong>Tafsir al-Ahlam</strong> (Interpretation of Dreams) became the foundational text of Islamic dream interpretation that scholars have referenced for over 1,300 years. He approached each dream holistically — considering the dreamer's personal life, state of iman, and the full context of the vision.</p>
    <p>Ibn Sirin once said: <em>"A dream is interpreted according to what is used as a parable in the Quran and Sunnah. Whatever is not in the Quran or Sunnah must be interpreted based on the known general meanings of words in the Arabic language."</em></p>
    <p><strong>Important:</strong> Many books sold as "Ibn Sirin's Dream Dictionary" are not directly from his original work. They are later compilations attributed to him. While useful as general guides, they should not be treated as definitive Islamic rulings.</p>

    <!-- RULES -->
    <h2 id="rules">Rules of Islamic Dream Interpretation</h2>
    <p>Islamic dream interpretation is not a guessing game. Scholars have established clear principles:</p>
    <ol class="steps-list">
      <li><div><strong>Only Ru'ya Salihah is interpreted</strong> — Bad dreams and subconscious dreams are not interpreted. Do not waste energy trying to find meaning in nightmares.</div></li>
      <li><div><strong>Context is everything</strong> — The same symbol can mean different things for different people. A snake for a scholar may mean an enemy, for a farmer it may mean rain.</div></li>
      <li><div><strong>The state of the dreamer matters</strong> — A righteous, praying Muslim's dreams are more likely to be true visions. The Prophet ﷺ said the most truthful in speech have the truest dreams.</div></li>
      <li><div><strong>Share only with trusted, knowledgeable people</strong> — "Do not tell your dream to anyone except a scholar or a dear one." (Sunan Tirmidhi, 2278)</div></li>
      <li><div><strong>Interpretation must be grounded in Quran and Sunnah</strong> — Sound interpretation is not guesswork — it follows established symbolic meanings from revelation.</div></li>
      <li><div><strong>No dream interpretation overrides Shariah</strong> — If someone "interprets" a dream to justify something haram, that interpretation is rejected.</div></li>
      <li><div><strong>The first interpretation often becomes reality</strong> — Be careful who you tell your dream to. Ibn Sirin said: "A dream is like a bird perched on a leg — as long as you don't talk, it stays. When you speak of it, it falls."</div></li>
    </ol>

    <!-- GOOD DREAM -->
    <h2 id="good-dream">What to Do When You Have a Good Dream</h2>
    <p>The Prophet ﷺ gave specific guidance on how to respond to a good dream:</p>
    <ol>
      <li>Say <strong>Alhamdulillah</strong> (All praise is for Allah)</li>
      <li>Share it with someone you love and trust</li>
      <li>Share it with a knowledgeable Islamic scholar if you want interpretation</li>
      <li>Do NOT share it with everyone — protect it like a gift</li>
      <li>Make du'a that its glad tidings come true</li>
    </ol>
    <div class="highlight-box">
      <strong>Hadith — Sahih Bukhari, 6985:</strong> <em>"If anyone of you sees a dream that he likes, then it is from Allah, and he should thank Allah for it and narrate it to others. But if he sees something else (i.e. a dream he dislikes), then it is from Shaytan, and he should seek refuge with Allah from its evil, and he should not mention it to anyone."</em>
    </div>

    <!-- BAD DREAM -->
    <h2 id="bad-dream">What to Do When You Have a Bad Dream (Nightmare)</h2>
    <p>The Prophet ﷺ gave us complete guidance for handling nightmares:</p>
    <ol>
      <li>Say <strong>"A'udhu billahi min ash-Shaytan ir-rajeem"</strong> (I seek refuge in Allah from accursed Shaytan)</li>
      <li>Spit lightly (a dry spit) to your <strong>left side three times</strong></li>
      <li><strong>Change your sleeping position</strong> — turn to the other side</li>
      <li>Get up and <strong>perform wudu and pray two rakats</strong></li>
      <li><strong>Do NOT tell anyone</strong> about the dream — not even close family</li>
    </ol>
    <div class="gold-box">
      <strong>Promise of the Prophet ﷺ:</strong> <em>"If any of you sees a dream he dislikes, let him spit three times to his left, seek refuge in Allah from Shaytan — and it will not harm him."</em> — <strong>Sahih Muslim, 2261</strong>
    </div>
    <p>The most important step: <strong>Do not tell anyone.</strong> Telling people a bad dream is what gives it power over you. The Prophet ﷺ's promise is clear — follow these steps and it will not harm you.</p>

    <!-- BEST TIME -->
    <h2 id="best-time">The Best Time for True Dreams in Islam</h2>
    <p>Not all dreams are equal in Islamic tradition. The timing of a dream affects how seriously it should be taken:</p>
    <ul>
      <li><strong>Pre-Fajr (last third of night):</strong> Most likely to be a true Ru'ya — the Prophet ﷺ confirmed this (Sunan Tirmidhi, 2274)</li>
      <li><strong>After Isha / early sleep:</strong> More likely to be subconscious processing of the day's events</li>
      <li><strong>Midday nap (Qaylulah):</strong> Some scholars mention these can also carry meaningful visions</li>
      <li><strong>During illness or extreme tiredness:</strong> Less reliable — may be physical rather than spiritual</li>
    </ul>
    <div class="highlight-box">
      <strong>Prophet ﷺ said:</strong> <em>"The most truthful of dreams are those seen at the time of Suhoor (pre-dawn)."</em> — <strong>Sunan Tirmidhi, 2274</strong>
    </div>

    <!-- SYMBOLS TABLE -->
    <h2 id="symbols">40+ Common Dream Symbols in Islamic Interpretation</h2>
    <p>Below is the most comprehensive table of common Islamic dream symbols, drawn from Ibn Sirin's works and authenticated Hadith. Remember: these are general meanings — individual context always matters.</p>

    <h3>Nature and Elements</h3>
    <table class="dream-table">
      <thead><tr><th>Dream Symbol</th><th>General Islamic Meaning</th><th>Source</th></tr></thead>
      <tbody>
        <tr><td class="symbol">Clear, clean water</td><td class="meaning">Peace, good provision, long life, blessings from Allah</td><td class="source">Ibn Sirin</td></tr>
        <tr><td class="symbol">Drinking clean water</td><td class="meaning">Good sustenance, health, safety from an enemy</td><td class="source">Ibn Sirin</td></tr>
        <tr><td class="symbol">Turbulent or dark water</td><td class="meaning">Trials, difficulties, enemies, or illness</td><td class="source">Ibn Sirin</td></tr>
        <tr><td class="symbol">Flooding / drowning</td><td class="meaning">Overwhelming problems, oppression, or a major life challenge</td><td class="source">Ibn Sirin</td></tr>
        <tr><td class="symbol">Rain</td><td class="meaning">Mercy, blessings, sustenance from Allah; if heavy — a trial coming</td><td class="source">Ibn Sirin</td></tr>
        <tr><td class="symbol">Fire</td><td class="meaning">Caution, conflict, fitnah; if you control the fire — overcoming enemies</td><td class="source">Ibn Sirin</td></tr>
        <tr><td class="symbol">Sun (bright)</td><td class="meaning">A king, a powerful authority, or a father/leader figure</td><td class="source">Ibn Sirin</td></tr>
        <tr><td class="symbol">Moon (full, bright)</td><td class="meaning">A noble, respected person; a minister or scholar</td><td class="source">Ibn Sirin</td></tr>
        <tr><td class="symbol">Stars</td><td class="meaning">People of knowledge, scholars, or nobles</td><td class="source">Ibn Sirin</td></tr>
        <tr><td class="symbol">Green garden / trees</td><td class="meaning">Prosperity, faith, good deeds, paradise</td><td class="source">Ibn Sirin</td></tr>
      </tbody>
    </table>

    <h3>Animals</h3>
    <table class="dream-table">
      <thead><tr><th>Dream Symbol</th><th>General Islamic Meaning</th><th>Source</th></tr></thead>
      <tbody>
        <tr><td class="symbol">Snake</td><td class="meaning">An enemy; killing the snake = victory over enemy. A large snake = powerful enemy.</td><td class="source">Ibn Sirin</td></tr>
        <tr><td class="symbol">Lion</td><td class="meaning">A powerful ruler, king, or a tyrant. Overcoming a lion = victory over oppression.</td><td class="source">Ibn Sirin</td></tr>
        <tr><td class="symbol">Dog</td><td class="meaning">A person of low character, or an enemy who is base. A friendly dog = a loyal companion.</td><td class="source">Ibn Sirin</td></tr>
        <tr><td class="symbol">Horse (beautiful)</td><td class="meaning">Honor, nobility, good status, success in worldly and religious affairs</td><td class="source">Ibn Sirin</td></tr>
        <tr><td class="symbol">White horse</td><td class="meaning">A very good sign — honor, prestige, spiritual elevation</td><td class="source">Ibn Sirin</td></tr>
        <tr><td class="symbol">Bird (flying freely)</td><td class="meaning">Good news, freedom, the soul; a bird singing = glad tidings</td><td class="source">Ibn Sirin</td></tr>
        <tr><td class="symbol">Bull</td><td class="meaning">A year of abundance, harvest, or a man of great strength and wealth</td><td class="source">Ibn Sirin</td></tr>
        <tr><td class="symbol">Cow (fat)</td><td class="meaning">A year of prosperity and good harvest (as in the dream of the King of Egypt — Quran 12:43)</td><td class="source">Quran 12:43</td></tr>
        <tr><td class="symbol">Cow (thin)</td><td class="meaning">A year of drought, famine, or hardship</td><td class="source">Quran 12:43</td></tr>
        <tr><td class="symbol">Bee</td><td class="meaning">A person of knowledge and wisdom; good provision through halal means</td><td class="source">Ibn Sirin</td></tr>
      </tbody>
    </table>

    <h3>Human Actions and Objects</h3>
    <table class="dream-table">
      <thead><tr><th>Dream Symbol</th><th>General Islamic Meaning</th><th>Source</th></tr></thead>
      <tbody>
        <tr><td class="symbol">Flying (in sky)</td><td class="meaning">Ambition, high goals, desire for elevation; if out of control — anxiety about something</td><td class="source">Ibn Sirin</td></tr>
        <tr><td class="symbol">Falling</td><td class="meaning">Loss of power, fear of failure, or Shaytan disturbing sleep (likely Hulum)</td><td class="source">Ibn Sirin</td></tr>
        <tr><td class="symbol">Teeth falling out</td><td class="meaning">Various interpretations — possible family trouble, loss, or fear. Context determines meaning.</td><td class="source">Ibn Sirin</td></tr>
        <tr><td class="symbol">Gold / silver</td><td class="meaning">Mixed sign — for men, wearing gold jewelry = problematic; finding gold = good provision</td><td class="source">Ibn Sirin</td></tr>
        <tr><td class="symbol">Book / writing</td><td class="meaning">Knowledge, good deeds being recorded, or a good letter/news arriving</td><td class="source">Ibn Sirin</td></tr>
        <tr><td class="symbol">Wedding / nikah</td><td class="meaning">Generally positive — joy, union, new beginnings. Can mean a new opportunity.</td><td class="source">Ibn Sirin</td></tr>
        <tr><td class="symbol">House (beautiful)</td><td class="meaning">Your own life, family, well-being. A beautiful house = good condition in deen and dunya.</td><td class="source">Ibn Sirin</td></tr>
        <tr><td class="symbol">Being naked in public</td><td class="meaning">Disgrace, shame, or fear of exposure — likely subconscious anxiety (Hadeeth ul-Nafs)</td><td class="source">Ibn Sirin</td></tr>
        <tr><td class="symbol">Mosque</td><td class="meaning">Iman, righteousness, guidance, good deeds</td><td class="source">Ibn Sirin</td></tr>
        <tr><td class="symbol">Ka'bah</td><td class="meaning">A very blessed sign — spiritual elevation, Hajj, connection to the Ummah</td><td class="source">Ibn Sirin</td></tr>
        <tr><td class="symbol">Praying Salah</td><td class="meaning">Righteousness, closeness to Allah, fulfilling one's duty</td><td class="source">Ibn Sirin</td></tr>
        <tr><td class="symbol">Reading Quran</td><td class="meaning">A very blessed dream — good guidance, knowledge, and faith</td><td class="source">Ibn Sirin</td></tr>
        <tr><td class="symbol">Grave / cemetery</td><td class="meaning">Remembering death, reflection on the afterlife. Not necessarily negative.</td><td class="source">Ibn Sirin</td></tr>
        <tr><td class="symbol">Prison</td><td class="meaning">Scholars differ — can mean security and protection (as Prophet Yusuf's interpretation), or actual hardship</td><td class="source">Quran 12:41</td></tr>
        <tr><td class="symbol">Honey</td><td class="meaning">Quran, knowledge, sweet provision, healing</td><td class="source">Ibn Sirin</td></tr>
        <tr><td class="symbol">Milk (drinking)</td><td class="meaning">Natural and blessed provision, knowledge, Islam. Prophet ﷺ was given milk in his ascension dream.</td><td class="source">Sahih Bukhari</td></tr>
        <tr><td class="symbol">White clothing</td><td class="meaning">Purity, righteousness, a good state of iman</td><td class="source">Ibn Sirin</td></tr>
        <tr><td class="symbol">Black clothing</td><td class="meaning">Generally negative — grief, mourning, or a difficult period ahead</td><td class="source">Ibn Sirin</td></tr>
        <tr><td class="symbol">Green clothing</td><td class="meaning">Martyrdom, Jannah, spiritual blessings</td><td class="source">Ibn Sirin</td></tr>
      </tbody>
    </table>

    <!-- PROPHET IN DREAM -->
    <h2 id="prophet-dream">Seeing the Prophet Muhammad ﷺ in a Dream</h2>
    <p>This is one of the most commonly asked questions about Islamic dreams — and the answer is deeply meaningful:</p>
    <div class="highlight-box">
      <strong>Prophet ﷺ said:</strong> <em>"Whoever sees me in a dream has truly seen me, for Shaytan cannot take my form."</em> — <strong>Sahih Bukhari, 6993 &amp; Sahih Muslim, 2266</strong>
    </div>
    <p>This means: <strong>if you truly see the Prophet ﷺ in a dream, it is a real and authentic vision</strong> — one of the greatest blessings a believer can receive. Shaytan cannot impersonate the Prophet ﷺ.</p>
    <p><strong>However, scholars add important caution:</strong></p>
    <ul>
      <li>You must see him in <strong>his true description</strong> — not just "someone told me it was the Prophet"</li>
      <li>Many people see a figure they <em>believe</em> is the Prophet ﷺ without actually seeing his face clearly — this may be a righteous dream but not the same as a confirmed vision of him</li>
      <li>If he speaks to you with guidance or a warning — take it seriously and consult a scholar</li>
    </ul>
    <p>If the Prophet ﷺ smiles at you or gives you something, scholars generally interpret this as a sign of great blessing and acceptance. If he appears sad or rebukes you — this is a call to examine your actions and seek forgiveness.</p>

    <!-- DEAD PERSON IN DREAM -->
    <h2 id="dead-person">Seeing a Deceased Person in a Dream</h2>
    <p>Seeing a deceased relative, friend, or scholar in a dream is common and has specific Islamic interpretations:</p>
    <ul>
      <li><strong>If they appear peaceful, well-dressed, and happy:</strong> A sign they are in a good state in the afterlife — cause for gratitude and du'a for them</li>
      <li><strong>If they appear distressed, dirty, or in need:</strong> Some scholars interpret this as a sign to make du'a, recite Quran (Surah Yasin), and give sadaqah on their behalf</li>
      <li><strong>If they give you something:</strong> Often interpreted as a blessing or inherited goodness coming to you</li>
      <li><strong>If they ask you for something:</strong> Consider whether you have unfulfilled duties toward them (debts, apologies, sadaqah on their behalf)</li>
      <li><strong>If they speak to you:</strong> Listen carefully — scholars say the deceased sometimes appear to guide the living through dreams</li>
    </ul>
    <div class="gold-box">
      <strong>Note:</strong> Islam is clear that the dead cannot harm or help the living in the physical world. Dreams of the deceased are a mercy from Allah — use them as motivation to pray for them and improve yourself.
    </div>

    <!-- QURAN DREAMS -->
    <h2>Dreams in the Quran — Famous Examples</h2>
    <p>The Quran preserves some of the most powerful examples of true visions (ru'ya):</p>
    <ul>
      <li><strong>Prophet Yusuf ﷺ (Quran 12:4):</strong> As a child, he saw 11 stars, the sun, and the moon bowing to him — interpreted by Prophet Ya'qub as his future elevation to prophet and ruler. Fulfilled 40+ years later.</li>
      <li><strong>The King of Egypt's dream (Quran 12:43):</strong> Seven fat cows eaten by seven thin cows. Prophet Yusuf ﷺ interpreted it as 7 years of abundance followed by 7 years of famine. Saved Egypt from catastrophe.</li>
      <li><strong>Prophet Ibrahim ﷺ (Quran 37:102):</strong> He saw himself sacrificing his son Ismail. He obeyed, and Allah replaced Ismail with a ram at the last moment — one of the greatest tests in human history.</li>
      <li><strong>Prophet Muhammad ﷺ (Quran 48:27):</strong> The Prophet ﷺ saw himself and his companions entering Mecca and performing Umrah. This vision came true one year after the Treaty of Hudaybiyyah.</li>
    </ul>

    <!-- FAQ -->
    <h2 id="faq">Frequently Asked Questions</h2>
    <div class="faq-item">
      <div class="faq-q" onclick="this.nextElementSibling.style.display=this.nextElementSibling.style.display==='block'?'none':'block';">What are the three types of dreams in Islam? <i class="fas fa-chevron-down"></i></div>
      <div class="faq-a">The three types are: (1) Ru'ya Salihah — a true good dream from Allah with a meaning; (2) Hulum — a disturbing nightmare from Shaytan meant to cause sadness; (3) Hadeeth ul-Nafs — subconscious dreams from your own daily thoughts and worries. Only Ru'ya Salihah requires interpretation.</div>
    </div>
    <div class="faq-item">
      <div class="faq-q" onclick="this.nextElementSibling.style.display=this.nextElementSibling.style.display==='block'?'none':'block';">What should I do when I see a bad dream? <i class="fas fa-chevron-down"></i></div>
      <div class="faq-a">1. Say "A'udhu billahi min ash-Shaytan ir-rajeem", 2. Spit lightly to your left three times, 3. Change your sleeping position, 4. Get up and make wudu and pray two rakats, 5. Do NOT tell anyone. The Prophet ﷺ promised: if you do these steps, the bad dream will not harm you.</div>
    </div>
    <div class="faq-item">
      <div class="faq-q" onclick="this.nextElementSibling.style.display=this.nextElementSibling.style.display==='block'?'none':'block';">What does seeing the Prophet ﷺ in a dream mean? <i class="fas fa-chevron-down"></i></div>
      <div class="faq-a">The Prophet ﷺ said: "Whoever sees me in a dream has truly seen me, for Shaytan cannot take my form." (Sahih Bukhari, 6993). Seeing the Prophet ﷺ clearly in a dream is a great blessing. If he is smiling, it is an excellent sign. If he rebukes you, it is a call to repentance and self-improvement.</div>
    </div>
    <div class="faq-item">
      <div class="faq-q" onclick="this.nextElementSibling.style.display=this.nextElementSibling.style.display==='block'?'none':'block';">Is dream interpretation halal or haram in Islam? <i class="fas fa-chevron-down"></i></div>
      <div class="faq-a">Dream interpretation (Tafsir al-Ahlam) is permissible (halal) in Islam. The Prophet ﷺ himself interpreted dreams. However, it must be done by a knowledgeable, pious person based on Quran and Sunnah — not through psychics, fortune tellers, or random superstition, which are haram.</div>
    </div>
    <div class="faq-item">
      <div class="faq-q" onclick="this.nextElementSibling.style.display=this.nextElementSibling.style.display==='block'?'none':'block';">What does seeing water in a dream mean in Islam? <i class="fas fa-chevron-down"></i></div>
      <div class="faq-a">Clean, clear water generally symbolizes peace, sustenance, and divine blessings. Drinking clean water = good provision and health. Turbulent or dark water = trials and difficulties. Drowning = overwhelming problems. Flooding can indicate an overwhelming situation in life.</div>
    </div>
    <div class="faq-item">
      <div class="faq-q" onclick="this.nextElementSibling.style.display=this.nextElementSibling.style.display==='block'?'none':'block';">What does seeing a snake in a dream mean in Islam? <i class="fas fa-chevron-down"></i></div>
      <div class="faq-a">A snake generally represents an enemy in Islamic dream interpretation. Killing the snake = victory over your enemy. A large snake = a powerful or dangerous enemy. However, context is everything — your personal situation, the color of the snake, and what happens in the dream all affect the interpretation.</div>
    </div>
    <div class="faq-item">
      <div class="faq-q" onclick="this.nextElementSibling.style.display=this.nextElementSibling.style.display==='block'?'none':'block';">What does it mean to see a deceased person in a dream? <i class="fas fa-chevron-down"></i></div>
      <div class="faq-a">If the deceased appears peaceful and well-dressed, it indicates they are in a good state in the afterlife. If distressed, scholars recommend making du'a and giving sadaqah on their behalf. If they give you something — often a sign of inherited blessing. If they speak to you — consider their words carefully.</div>
    </div>

    <!-- Internal Links -->
    <div class="highlight-box mt-5">
      <strong>Continue Learning at NoorPath Academy:</strong>
      <ul style="margin:12px 0 0;padding-left:20px;">
        <li><a href="/blog/signs-of-qiyamah" style="color:var(--emerald);">Signs of Qiyamah — 10 Major &amp; 77 Minor Signs</a></li>
        <li><a href="/blog/ayatul-kursi-arabic-english-benefits" style="color:var(--emerald);">Ayatul Kursi — Arabic, Translation &amp; 7 Benefits</a></li>
        <li><a href="/blog/99-names-of-allah-asmaul-husna" style="color:var(--emerald);">99 Names of Allah with Meanings</a></li>
        <li><a href="/blog/surah-yaseen-arabic-english" style="color:var(--emerald);">Surah Yaseen — Full Arabic &amp; English Translation</a></li>
      </ul>
    </div>`,
  },
  "mashallah-meaning": {
    style: `.article-body { font-size: 1.05rem; line-height: 1.85; color: #374151; }
    .article-body h2 { font-size: 1.5rem; font-weight: 700; color: var(--charcoal); margin: 40px 0 16px; }
    .article-body h3 { font-size: 1.15rem; font-weight: 700; color: var(--emerald); margin: 24px 0 10px; }
    .article-body p { margin-bottom: 18px; }
    .article-body ul { margin-bottom: 18px; padding-left: 24px; }
    .article-body li { margin-bottom: 8px; }
    .highlight-box { background: rgba(10,110,79,.06); border-left: 4px solid var(--emerald); border-radius: 8px; padding: 20px 24px; margin: 24px 0; }
    .gold-box { background: rgba(232,184,75,.08); border-left: 4px solid var(--gold); border-radius: 8px; padding: 20px 24px; margin: 24px 0; }
    .word-hero { text-align:center; padding:48px 24px; background: linear-gradient(135deg,rgba(10,110,79,.04),rgba(10,110,79,.09)); border-radius:20px; margin:32px 0; border:1px solid rgba(10,110,79,.12); }
    .word-arabic-hero { font-family:'Amiri',serif; font-size:3.5rem; color:var(--emerald); line-height:1.3; margin-bottom:16px; direction:rtl; }
    .word-roman-hero { font-size:1.5rem; font-style:italic; color:#4b5563; margin-bottom:12px; }
    .word-meaning-hero { font-size:1.1rem; font-weight:600; color:var(--charcoal); }
    .break-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:14px; margin:20px 0; }
    .break-card { background:var(--ivory); border:1px solid var(--border); border-radius:12px; padding:18px 14px; text-align:center; }
    .bc-arabic { font-family:'Amiri',serif; font-size:1.5rem; color:var(--emerald); direction:rtl; margin-bottom:6px; }
    .bc-roman { font-style:italic; color:#6b7280; font-size:.82rem; margin-bottom:4px; }
    .bc-meaning { font-weight:700; color:var(--charcoal); font-size:.85rem; }
    .compare-grid { display:grid; grid-template-columns:repeat(2,1fr); gap:14px; margin:20px 0; }
    .compare-card { background:var(--ivory); border:1px solid var(--border); border-radius:12px; padding:20px; }
    .compare-arabic { font-family:'Amiri',serif; font-size:1.4rem; color:var(--emerald); direction:rtl; margin-bottom:6px; }
    .compare-roman { font-style:italic; font-size:.85rem; color:#6b7280; margin-bottom:4px; }
    .compare-when { font-size:.82rem; color:var(--charcoal); font-weight:600; }
    .faq-item { border:1px solid var(--border); border-radius:10px; margin-bottom:12px; overflow:hidden; }
    .faq-q { padding:16px 20px; font-weight:700; background:var(--ivory); color:var(--charcoal); display:flex; justify-content:space-between; align-items:center; }
    .faq-a { padding:16px 20px; color:#374151; font-size:.95rem; line-height:1.7; border-top:1px solid var(--border); }
    @media (max-width:576px) { .break-grid,.compare-grid { grid-template-columns:1fr; } .word-arabic-hero { font-size:2.5rem; } }`,
    content: `<p><strong>Mashallah</strong> (ما شاء الله) is one of the most commonly spoken phrases in the Muslim world — heard everywhere from family gatherings to social media captions. But many people use it as a habit without fully understanding its profound meaning and purpose in Islam.</p>
          <div class="highlight-box">
            <strong>Quick answer:</strong> <strong>MashaAllah / Mashallah meaning in English</strong> is "What Allah has willed" or "Allah has willed it." Muslims say Mashallah when praising a blessing, a child, success, beauty, or good news while acknowledging that every blessing comes from Allah and seeking protection from the evil eye.
          </div>
          <p>This guide explains the exact Arabic meaning of Mashallah, when to say it correctly, its Quranic origin, and why scholars recommend it as protection from the evil eye.</p>

          <div class="word-hero">
            <div class="word-arabic-hero">مَا شَاءَ اللَّهُ</div>
            <div class="word-roman-hero">Mā shā-a llāh</div>
            <div class="word-meaning-hero">"What Allah has willed" / "Allah has willed it"</div>
          </div>

          <h2>What Does Mashallah Mean? (Word by Word)</h2>
          <div class="break-grid">
            <div class="break-card">
              <div class="bc-arabic">مَا</div>
              <div class="bc-roman">Maa</div>
              <div class="bc-meaning">What / That which</div>
            </div>
            <div class="break-card">
              <div class="bc-arabic">شَاءَ</div>
              <div class="bc-roman">Shaa'a</div>
              <div class="bc-meaning">Has willed / Has desired</div>
            </div>
            <div class="break-card">
              <div class="bc-arabic">اللَّهُ</div>
              <div class="bc-roman">Allah</div>
              <div class="bc-meaning">Allah (God)</div>
            </div>
          </div>

          <div class="highlight-box">
            <strong>The complete meaning:</strong> "Whatever Allah has willed has come to pass." When you say Mashallah upon seeing something wonderful, you are declaring: <em>"This beauty, talent, success, or blessing exists purely because Allah willed it — it is His decree, His gift, and His mercy."</em> It is the opposite of arrogance — it credits all good to Allah, not to the person, their effort, or coincidence alone.
          </div>

          <h2>Mashallah in the Quran (Surah Al-Kahf 18:39)</h2>
          <p>The only direct occurrence of this phrase in the Quran is in Surah Al-Kahf, in the story of the two garden owners — and its context is profoundly instructive:</p>

          <div class="gold-box">
            <strong>📖 Quran 18:39:</strong><br>
            <span style="font-family:'Amiri',serif;font-size:1.5rem;direction:rtl;display:block;text-align:right;margin:12px 0;line-height:1.8;">وَلَوْلَا إِذْ دَخَلْتَ جَنَّتَكَ قُلْتَ مَا شَاءَ اللَّهُ لَا قُوَّةَ إِلَّا بِاللَّهِ</span>
            <em>"And why did you, when you entered your garden, not say: 'Mashallah, la quwwata illa billah' — What Allah has willed [has occurred]; there is no power except through Allah."</em>
            <br><br>
            <strong>Context:</strong> A wealthy man had two gardens and became arrogant about them, forgetting Allah's role. His believing friend advised him: "You should have said Mashallah — la quwwata illa billah." Instead, he was arrogant, and Allah destroyed both gardens. This verse is a powerful reminder that every blessing requires acknowledgment of Allah.
          </div>

          <h2>The Complete Phrase: Mashallah, La Quwwata Illa Billah</h2>
          <div class="highlight-box">
            <strong style="font-family:'Amiri',serif;font-size:1.4rem;direction:rtl;display:block;text-align:right;margin-bottom:8px;">مَا شَاءَ اللَّهُ لَا قُوَّةَ إِلَّا بِاللَّهِ</strong>
            <strong>Maa shaa-Allahu laa quwwata illa billah</strong><br>
            "What Allah has willed! There is no power or strength except with Allah."<br><br>
            This is the Quranic recommendation when seeing any blessing — not just "Mashallah" alone. Scholars recommend using this full phrase for maximum protection and acknowledgment.
          </div>

          <h2>When to Say Mashallah</h2>
          <ul>
            <li><strong>When seeing a beautiful child:</strong> "Mashallah, what a beautiful baby!" — acknowledging Allah's gift while seeking protection from the evil eye</li>
            <li><strong>When praising someone's achievement:</strong> "Mashallah, you've done so well!" — crediting Allah for their success and ability</li>
            <li><strong>When seeing someone's home, garden, or business:</strong> Following the Quran's direct instruction (18:39)</li>
            <li><strong>When someone shares good news:</strong> New job, graduation, marriage, or any blessing</li>
            <li><strong>When appreciating someone's appearance:</strong> To protect them from an unintentional evil eye</li>
            <li><strong>When looking at your own blessings:</strong> Your family, health, wealth — say it to yourself as gratitude</li>
          </ul>

          <h2>Mashallah and the Evil Eye (Nazar)</h2>
          <p>One of the most important reasons Muslims say Mashallah is for <strong>protection from the evil eye</strong> (al-ain). The evil eye (nazar) is real in Islam — confirmed in the Quran and multiple authentic hadith.</p>
          <p>The Prophet ﷺ said: <em>"The evil eye is real, and if anything were to overtake the divine decree, it would be the evil eye."</em> (Muslim 2188)</p>
          <p>When a person looks at something with admiration without saying Mashallah, there is a risk of inadvertently causing harm through the evil eye — even without intending to. Saying Mashallah:</p>
          <ul>
            <li>Acknowledges that the blessing comes from Allah, not the person themselves</li>
            <li>Invokes Allah's protection over the person or thing being admired</li>
            <li>Removes any trace of envy (hasad) by attributing everything to Allah's will</li>
          </ul>

          <h2>Mashallah vs. Subhanallah — What's the Difference?</h2>
          <div class="compare-grid">
            <div class="compare-card" style="border: 2px solid var(--emerald);">
              <div class="compare-arabic">مَا شَاءَ اللَّهُ</div>
              <div class="compare-roman">Mashallah</div>
              <div class="compare-when"><strong>When to say:</strong> When admiring something beautiful, blessed, or wonderful. Focuses on <em>Allah's will</em> in creating/giving this blessing.</div>
            </div>
            <div class="compare-card">
              <div class="compare-arabic">سُبْحَانَ اللَّهِ</div>
              <div class="compare-roman">Subhanallah</div>
              <div class="compare-when"><strong>When to say:</strong> When amazed by Allah's power, creation, or perfection. Focuses on <em>Allah's glory</em> and transcendence.</div>
            </div>
            <div class="compare-card">
              <div class="compare-arabic">الْحَمْدُ لِلَّهِ</div>
              <div class="compare-roman">Alhamdulillah</div>
              <div class="compare-when"><strong>When to say:</strong> As an expression of gratitude for any blessing or condition. Focuses on <em>thanking Allah</em>.</div>
            </div>
            <div class="compare-card">
              <div class="compare-arabic">إِنْ شَاءَ اللَّهُ</div>
              <div class="compare-roman">Inshallah</div>
              <div class="compare-when"><strong>When to say:</strong> When speaking about future intentions or plans. Means "If Allah wills" — submission to Allah's future decree.</div>
            </div>
          </div>

          <h2>Frequently Asked Questions</h2>
          <div class="faq-item">
            <div class="faq-q"><span>What does Mashallah mean in English?</span> <i class="fas fa-chevron-down"></i></div>
            <div class="faq-a">Mashallah (ما شاء الله) means "What Allah has willed" or "Allah has willed it so." It is an expression of admiration, appreciation, and submission to Allah's will when seeing something beautiful, successful, or blessed. It acknowledges that all good things come from Allah alone.</div>
          </div>
          <div class="faq-item">
            <div class="faq-q"><span>Does saying Mashallah prevent the evil eye?</span> <i class="fas fa-chevron-down"></i></div>
            <div class="faq-a">Scholars recommend saying Mashallah when admiring something as a means of seeking Allah's protection from the evil eye. The full Quranic phrase (18:39) "Mashallah, la quwwata illa billah" is recommended. However, the complete shield against evil eye includes also reciting Ayatul Kursi and Surah Al-Falaq and An-Naas regularly.</div>
          </div>
          <div class="faq-item">
            <div class="faq-q"><span>Is Mashallah in the Quran?</span> <i class="fas fa-chevron-down"></i></div>
            <div class="faq-a">Yes — the phrase "Maa shaa-Allahu" appears in the Quran in Surah Al-Kahf (18:39): "And why did you not say, when you entered your garden: 'What Allah has willed [has occurred]; there is no power except through Allah.'" This verse directly commands the use of this phrase when seeing any blessing.</div>
          </div>
          <div class="faq-item">
            <div class="faq-q"><span>What is the correct spelling — Mashallah or MashaAllah?</span> <i class="fas fa-chevron-down"></i></div>
            <div class="faq-a">Both "Mashallah" and "MashaAllah" are acceptable transliterations of the Arabic (ما شاء الله). Other common spellings include Masha'Allah, Masha Allah, and Ma sha Allah. The meaning remains the same regardless of the spelling in English.</div>
          </div>

          <div class="highlight-box" style="margin-top:32px;">
            <strong>Teach your children to say Mashallah naturally.</strong> At NoorPath Academy, we teach Islamic phrases, manners (adab), Quran, and complete Islamic education — building genuine connection with the deen from childhood. <a href="/online-quran-classes#cta" style="color:var(--emerald);font-weight:700;">Book a free trial class →</a>
          </div>
        </div>

        <div style="margin-top:56px;border-top:1px solid var(--border);padding-top:40px;">
          <h3 style="font-size:1.2rem;font-weight:700;margin-bottom:20px;">Related Articles</h3>
          <div class="row g-3">
            <div class="col-sm-6"><a href="/blog/islamic-phrases-meaning" style="text-decoration:none;"><div class="blog-card"><div class="blog-card-header" style="padding:20px 24px;"><span class="blog-tag">Islamic Knowledge</span><div style="color:var(--white);font-weight:700;font-size:.95rem;margin-top:8px;">30 Common Islamic Phrases & Their Meanings</div></div><div class="blog-card-body"><span class="read-more">Read <i class="fas fa-arrow-right ms-1"></i></span></div></div></a></div>
            <div class="col-sm-6"><a href="/blog/subhanallah-meaning" style="text-decoration:none;"><div class="blog-card"><div class="blog-card-header" style="padding:20px 24px;"><span class="blog-tag">Dhikr & Duas</span><div style="color:var(--white);font-weight:700;font-size:.95rem;margin-top:8px;">Subhanallah — Meaning & Benefits</div></div><div class="blog-card-body"><span class="read-more">Read <i class="fas fa-arrow-right ms-1"></i></span></div></div></a></div>
            <div class="col-sm-6"><a href="/blog/alhamdulillah-meaning-in-english" style="text-decoration:none;"><div class="blog-card"><div class="blog-card-header" style="padding:20px 24px;"><span class="blog-tag">Islamic Phrases</span><div style="color:var(--white);font-weight:700;font-size:.95rem;margin-top:8px;">Alhamdulillah — Meaning & When to Say It</div></div><div class="blog-card-body"><span class="read-more">Read <i class="fas fa-arrow-right ms-1"></i></span></div></div></a></div>
            <div class="col-sm-6"><a href="/blog/astaghfirullah-meaning" style="text-decoration:none;"><div class="blog-card"><div class="blog-card-header" style="padding:20px 24px;"><span class="blog-tag">Islamic Phrases</span><div style="color:var(--white);font-weight:700;font-size:.95rem;margin-top:8px;">Astaghfirullah — Meaning & Benefits</div></div><div class="blog-card-body"><span class="read-more">Read <i class="fas fa-arrow-right ms-1"></i></span></div></div></a></div>
            <div class="col-sm-6"><a href="/blog/99-names-of-allah-asmaul-husna" style="text-decoration:none;"><div class="blog-card"><div class="blog-card-header" style="padding:20px 24px;"><span class="blog-tag">Islamic</span><div style="color:var(--white);font-weight:700;font-size:.95rem;margin-top:8px;">99 Names of Allah (Asmaul Husna)</div></div><div class="blog-card-body"><span class="read-more">Read <i class="fas fa-arrow-right ms-1"></i></span></div></div></a>`,
  },
  "noorani-qaida-complete-guide": {
    style: `.article-body { font-size: 1.05rem; line-height: 1.85; color: #374151; }
    .article-body h2 { font-size: 1.5rem; font-weight: 700; color: var(--charcoal); margin: 40px 0 16px; }
    .article-body h3 { font-size: 1.15rem; font-weight: 700; color: var(--emerald); margin: 24px 0 10px; }
    .article-body p { margin-bottom: 18px; }
    .article-body ul, .article-body ol { margin-bottom: 18px; padding-left: 24px; }
    .article-body li { margin-bottom: 8px; }
    .highlight-box { background: rgba(10,110,79,.06); border-left: 4px solid var(--emerald); border-radius: 8px; padding: 20px 24px; margin: 24px 0; }
    .hadith-box { background: linear-gradient(135deg,#0a3d28,#0d5436); color: #fff; border-radius: 12px; padding: 24px; margin: 24px 0; }
    .lesson-card { background: var(--ivory); border: 1px solid var(--border); border-radius: 10px; padding: 16px 20px; margin-bottom: 12px; display: flex; align-items: flex-start; gap: 16px; }
    .lesson-num { min-width: 36px; height: 36px; background: var(--emerald); color: #fff; border-radius: 8px; font-weight: 700; font-size: .9rem; display: flex; align-items: center; justify-content: center; flex-shrink: 0; }`,
    content: `<div class="hadith-box">
            <p style="margin:0;font-size:1.05rem;">"Whoever reads one letter from the Book of Allah will receive a good deed, and each good deed is multiplied ten times."<br>
            <span style="font-size:.85rem;opacity:.75;font-style:normal;">— Prophet Muhammad ﷺ (Tirmidhi)</span></p>
          </div>

          <p>Before your child — or you — can read a single verse of the Holy Quran correctly, there is one essential foundation to build: <strong>Noorani Qaida</strong>. It is the single most important book in Quranic education, and yet many people start without it — leading to years of mispronunciation.</p>

          <p>This complete guide covers everything: what Noorani Qaida is, all its lessons, how long it takes, tips for fast completion, and how to learn it online.</p>

          <h2>What is Noorani Qaida?</h2>
          <p><strong>Noorani Qaida</strong> (also spelled Noorani Qaidah or Nuraani Qaidah) is an Arabic reading primer specifically designed for Quran learning. It was authored by <strong>Sheikh Noor Muhammad Haqqani</strong>, a Pakistani Islamic scholar, in the mid-20th century.</p>
          <p>The name comes from "Noor" (نور) meaning <em>light</em> and "Qaida" (قاعدة) meaning <em>rule</em> or <em>foundation</em>. It is literally the "Rules of Light" — the foundation of Quranic recitation.</p>

          <div class="highlight-box">
            <strong>Why is it so important?</strong> Arabic has 29 letters, each with a specific articulation point (Makhraj) in the mouth and throat. Noorani Qaida teaches you to pronounce each letter correctly <em>before</em> you encounter them in the Quran, so you never develop bad pronunciation habits.
          </div>

          <h2>What You Learn in Noorani Qaida — All 17 Lessons</h2>
          <p>Noorani Qaida is divided into chapters (lessons). Here is a summary of what each stage covers:</p>

          <div class="lesson-card"><div class="lesson-num">1</div><div><strong>Arabic Alphabet (حروف تہجی):</strong> All 29 Arabic letters in their isolated form, learning the name and basic sound of each letter.</div></div>
          <div class="lesson-card"><div class="lesson-num">2</div><div><strong>Letter Shapes:</strong> How each letter changes shape when it appears at the beginning, middle, or end of a word.</div></div>
          <div class="lesson-card"><div class="lesson-num">3</div><div><strong>Harakaat — Short Vowels:</strong> Fathah (َ), Kasrah (ِ), Dammah (ُ) — the three vowel marks that tell you how to pronounce a letter.</div></div>
          <div class="lesson-card"><div class="lesson-num">4</div><div><strong>Tanween:</strong> Double vowel marks (ً ٍ ٌ) — adds an "n" sound at the end of words. Common in Quranic recitation.</div></div>
          <div class="lesson-card"><div class="lesson-num">5</div><div><strong>Sukoon (ْ):</strong> The "rest" mark — means a letter has no vowel sound. Essential for reading consonant clusters correctly.</div></div>
          <div class="lesson-card"><div class="lesson-num">6</div><div><strong>Shaddah (ّ):</strong> The doubling mark — means the letter is doubled and held slightly longer. Changes the meaning of words entirely.</div></div>
          <div class="lesson-card"><div class="lesson-num">7</div><div><strong>Madd (Long Vowels):</strong> Alif Madd, Waw Madd, Ya Madd — the three long vowel letters that extend a sound for 2 counts.</div></div>
          <div class="lesson-card"><div class="lesson-num">8</div><div><strong>Letter Joining:</strong> How Arabic letters connect to form words. This is one of the biggest challenges for beginners — practiced extensively here.</div></div>
          <div class="lesson-card"><div class="lesson-num">9</div><div><strong>Noon Sakinah & Tanween Rules:</strong> Izhar, Idgham, Ikhfa, Iqlab — what happens to the Noon sound depending on the next letter.</div></div>
          <div class="lesson-card"><div class="lesson-num">10</div><div><strong>Meem Sakinah Rules:</strong> Ikhfa Shafawi, Idgham Shafawi, Izhar Shafawi — similar rules for the Meem letter.</div></div>
          <div class="lesson-card"><div class="lesson-num">11</div><div><strong>Madd Rules:</strong> Natural Madd (2 counts), connected Madd (4–6 counts), separated Madd — how long to hold each vowel sound.</div></div>
          <div class="lesson-card"><div class="lesson-num">12</div><div><strong>Lam Rules:</strong> When Lam in "Al" (ال) is pronounced (Qamariyyah letters) and when it is silent (Shamsiyyah letters).</div></div>
          <div class="lesson-card"><div class="lesson-num">13</div><div><strong>Qalqalah:</strong> The "bouncing echo" sound for the letters ق ط ب ج د when they appear with Sukoon.</div></div>
          <div class="lesson-card"><div class="lesson-num">14</div><div><strong>Waqf (Stopping):</strong> How to pause at the end of a verse or sentence — special pronunciation rules apply when stopping.</div></div>
          <div class="lesson-card"><div class="lesson-num">15-17</div><div><strong>Practice Exercises:</strong> Reading practice with Quranic words, phrases, and short verses using everything learned — preparing for actual Quran reading.</div></div>

          <h2>How Long Does Noorani Qaida Take to Complete?</h2>
          <p>The honest answer depends on age, frequency of lessons, and dedication. Here is a realistic timeline:</p>

          <div style="overflow-x:auto;margin:24px 0;">
            <table style="width:100%;border-collapse:collapse;font-size:.92rem;">
              <thead><tr style="background:var(--emerald);color:#fff;"><th style="padding:12px 16px;text-align:left;">Student</th><th style="padding:12px 16px;text-align:left;">Lessons/Week</th><th style="padding:12px 16px;text-align:left;">Est. Duration</th></tr></thead>
              <tbody>
                <tr style="background:var(--ivory);"><td style="padding:10px 16px;border-bottom:1px solid var(--border);">Child (4–7 years)</td><td style="padding:10px 16px;border-bottom:1px solid var(--border);">5 days/week, 20 min</td><td style="padding:10px 16px;border-bottom:1px solid var(--border);">8–14 months</td></tr>
                <tr><td style="padding:10px 16px;border-bottom:1px solid var(--border);">Child (8–12 years)</td><td style="padding:10px 16px;border-bottom:1px solid var(--border);">5 days/week, 30 min</td><td style="padding:10px 16px;border-bottom:1px solid var(--border);">5–8 months</td></tr>
                <tr style="background:var(--ivory);"><td style="padding:10px 16px;border-bottom:1px solid var(--border);">Teen (13–17 years)</td><td style="padding:10px 16px;border-bottom:1px solid var(--border);">4–5 days/week, 30 min</td><td style="padding:10px 16px;border-bottom:1px solid var(--border);">4–6 months</td></tr>
                <tr><td style="padding:10px 16px;">Adult (18+)</td><td style="padding:10px 16px;">3–5 days/week, 30–45 min</td><td style="padding:10px 16px;">3–6 months</td></tr>
              </tbody>
            </table>
          </div>

          <h2>Tips to Complete Noorani Qaida Faster</h2>
          <ol>
            <li><strong>Daily practice is non-negotiable.</strong> 20 minutes every day beats 2-hour sessions once a week.</li>
            <li><strong>Revise the previous lesson</strong> before starting a new one every session.</li>
            <li><strong>Read aloud</strong> — silent reading does not train pronunciation. Always recite out loud.</li>
            <li><strong>Record yourself</strong> and compare to your tutor's pronunciation — you'll catch errors you don't notice in the moment.</li>
            <li><strong>Don't rush.</strong> A student who spends 12 months mastering Qaida will read the Quran better than one who "finished" Qaida in 3 months but made errors throughout.</li>
          </ol>

          <h2>Online Noorani Qaida vs. Learning from a Book Alone</h2>
          <p>Many parents buy a Noorani Qaida book and try to teach their child themselves. While this shows dedication, there is a critical problem: <strong>Arabic pronunciation cannot be self-taught from a book.</strong></p>
          <p>Consider this: the letters ح (Ha) and ه (Ha) look similar but come from completely different parts of the throat. Without hearing a qualified teacher pronounce these letters and correcting your errors in real time, you will almost certainly develop wrong pronunciation that is extremely hard to fix later.</p>

          <div class="highlight-box">
            <strong>The solution:</strong> 1-on-1 live online Noorani Qaida classes with a certified tutor. At NoorPath Academy, our Noorani Qaida teachers are experienced in correcting Arabic pronunciation for native English speakers — in the UK, USA, Canada, Australia, India, and beyond.<br><br>
            <a href="/courses/noorani-qaida-online" style="color:var(--emerald);font-weight:700;">Learn more about our Noorani Qaida online course →</a>
          </div>

          <h2>What Comes After Noorani Qaida?</h2>
          <p>Once your child or student completes Noorani Qaida, they are ready to:</p>
          <ul>
            <li><strong>Begin reading the Quran</strong> from the first Surah, with proper Tajweed</li>
            <li><strong>Start Hifz (memorization)</strong> — a solid Qaida foundation makes memorization faster</li>
            <li><strong>Learn formal Tajweed rules</strong> in depth through a dedicated Tajweed course</li>
          </ul>

          <div class="highlight-box" style="margin-top:32px;">
            <strong>Ready to start Noorani Qaida?</strong><br>
            <a href="/online-quran-classes#cta" style="color:var(--emerald);font-weight:700;">Book a free 30-minute trial class</a> at NoorPath Academy. We'll assess your starting level and begin your Qaida journey with a certified, experienced tutor. JazakAllah Khair.
          </div>
        </div>

        <div style="margin-top:56px;border-top:1px solid var(--border);padding-top:40px;">
          <h3 style="font-size:1.2rem;font-weight:700;margin-bottom:20px;">Related Articles</h3>
          <div class="row g-3">
            <div class="col-sm-6">
              <a href="/blog/best-age-to-start-quran-learning" style="text-decoration:none;">
                <div class="blog-card">
                  <div class="blog-card-header" style="padding:20px 24px;"><span class="blog-tag">Parenting</span><div style="color:var(--white);font-weight:700;font-size:.95rem;margin-top:8px;">Best Age to Start Quran Learning</div></div>
                  <div class="blog-card-body"><span class="read-more">Read <i class="fas fa-arrow-right ms-1"></i></span></div>
                </div>
              </a>
            </div>
            <div class="col-sm-6">
              <a href="/blog/tajweed-rules-complete-guide" style="text-decoration:none;">
                <div class="blog-card">
                  <div class="blog-card-header" style="padding:20px 24px;"><span class="blog-tag">Tajweed</span><div style="color:var(--white);font-weight:700;font-size:.95rem;margin-top:8px;">Tajweed Rules: The Complete Guide</div></div>
                  <div class="blog-card-body"><span class="read-more">Read <i class="fas fa-arrow-right ms-1"></i></span></div>
                </div>
              </a>`,
  },
  "signs-of-qiyamah": {
    style: `.article-body { font-size: 1.05rem; line-height: 1.85; color: #374151; }
    .article-body h2 { font-size: 1.5rem; font-weight: 700; color: var(--charcoal); margin: 40px 0 16px; }
    .article-body h3 { font-size: 1.15rem; font-weight: 700; color: var(--emerald); margin: 24px 0 10px; }
    .article-body p { margin-bottom: 18px; }
    .article-body ul, .article-body ol { margin-bottom: 18px; padding-left: 24px; }
    .article-body li { margin-bottom: 8px; }
    .highlight-box { background: rgba(10,110,79,.06); border-left: 4px solid var(--emerald); border-radius: 8px; padding: 20px 24px; margin: 24px 0; }
    .gold-box { background: rgba(232,184,75,.08); border-left: 4px solid var(--gold); border-radius: 8px; padding: 20px 24px; margin: 24px 0; }
    .warning-box { background: rgba(220,53,69,.05); border-left: 4px solid #dc3545; border-radius: 8px; padding: 20px 24px; margin: 24px 0; }
    .sign-card { background: var(--ivory); border: 1px solid var(--border); border-radius: 14px; padding: 22px; margin-bottom: 18px; }
    .sign-number { display: inline-flex; align-items: center; justify-content: center; width: 40px; height: 40px; background: var(--emerald); color: #fff; border-radius: 50%; font-weight: 700; font-size: 1rem; margin-bottom: 12px; }
    .sign-title { font-size: 1.1rem; font-weight: 700; color: var(--charcoal); margin-bottom: 8px; }
    .sign-hadith { font-size: 0.88rem; color: #6b7280; font-style: italic; margin-top: 8px; border-top: 1px solid var(--border); padding-top: 8px; }
    .arabic-text { font-family: 'Amiri', serif; font-size: 1.6rem; color: var(--emerald); direction: rtl; text-align: center; padding: 16px; background: rgba(10,110,79,.04); border-radius: 8px; margin: 12px 0; line-height: 2; }
    .status-badge { display: inline-block; padding: 3px 12px; border-radius: 20px; font-size: 0.78rem; font-weight: 700; margin-left: 8px; }
    .status-occurred { background: #fef3c7; color: #92400e; }
    .status-pending { background: #fee2e2; color: #991b1b; }
    .minor-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 12px; margin: 20px 0; }
    .minor-item { background: var(--ivory); border: 1px solid var(--border); border-radius: 10px; padding: 14px; display: flex; gap: 12px; align-items: flex-start; }
    .minor-num { flex-shrink: 0; width: 28px; height: 28px; background: var(--gold); color: #fff; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 0.78rem; font-weight: 700; }
    .minor-text { font-size: 0.9rem; color: var(--charcoal); font-weight: 500; }
    .minor-status { font-size: 0.75rem; color: #6b7280; margin-top: 3px; }
    .faq-item { border: 1px solid var(--border); border-radius: 10px; margin-bottom: 12px; overflow: hidden; }
    .faq-q { padding: 16px 20px; font-weight: 700; background: var(--ivory); color: var(--charcoal); cursor: pointer; }
    .faq-a { padding: 16px 20px; background: #fff; font-size: 0.95rem; line-height: 1.7; display: none; }
    .hero-stat { text-align: center; padding: 24px 16px; }
    .hero-stat-num { font-size: 2.2rem; font-weight: 800; color: var(--emerald); font-family: 'Playfair Display', serif; }
    .hero-stat-label { font-size: 0.9rem; color: #6b7280; margin-top: 4px; }
    .timeline-item { display: flex; gap: 16px; margin-bottom: 20px; }
    .timeline-dot { flex-shrink: 0; width: 14px; height: 14px; border-radius: 50%; background: var(--emerald); margin-top: 6px; }
    .timeline-content { flex: 1; }
    @media(max-width:640px){ .minor-grid{ grid-template-columns:1fr; } }`,
    content: `<div class="highlight-box">
      <strong>Quran — Surah Al-A'raf (7:187):</strong>
      <div class="arabic-text">يَسْأَلُونَكَ عَنِ السَّاعَةِ أَيَّانَ مُرْسَاهَا ۖ قُلْ إِنَّمَا عِلْمُهَا عِندَ رَبِّي</div>
      <p style="margin:0;font-style:italic;">"They ask you about the Hour: when will it arrive? Say: Knowledge of it is only with my Lord."</p>
    </div>

    <p>Qiyamah — the Day of Judgment — is one of the six pillars of Islamic faith. Every Muslim must believe in it. And while only Allah knows the exact hour, He has gifted us — through His Prophet Muhammad ﷺ — a complete roadmap of signs so we are never taken by total surprise.</p>
    <p>This guide is the most comprehensive collection of Signs of Qiyamah in the English language, covering every authentic sign from the Hadith of Sahih Bukhari, Sahih Muslim, Sunan Tirmidhi, and more — with Arabic text, full context, and an honest answer to which signs have already appeared in our world today.</p>

    <nav style="background:var(--ivory);border:1px solid var(--border);border-radius:12px;padding:20px 24px;margin:32px 0;">
      <h2 style="font-size:1rem;font-weight:700;color:var(--charcoal);margin-bottom:12px;">Table of Contents</h2>
      <ol style="margin:0;padding-left:20px;font-size:.95rem;">
        <li><a href="#what-is-qiyamah" style="color:var(--emerald);text-decoration:none;">What is Qiyamah in Islam?</a></li>
        <li><a href="#categories" style="color:var(--emerald);text-decoration:none;">Categories of Signs</a></li>
        <li><a href="#minor-signs" style="color:var(--emerald);text-decoration:none;">77 Minor Signs of Qiyamah</a></li>
        <li><a href="#occurred" style="color:var(--emerald);text-decoration:none;">Which Signs Have Already Appeared?</a></li>
        <li><a href="#major-signs" style="color:var(--emerald);text-decoration:none;">The 10 Major Signs of Qiyamah</a></li>
        <li><a href="#dajjal" style="color:var(--emerald);text-decoration:none;">Dajjal — The Greatest Trial</a></li>
        <li><a href="#imam-mahdi" style="color:var(--emerald);text-decoration:none;">Imam Mahdi</a></li>
        <li><a href="#prepare" style="color:var(--emerald);text-decoration:none;">How to Prepare</a></li>
        <li><a href="#faq" style="color:var(--emerald);text-decoration:none;">FAQ</a></li>
      </ol>
    </nav>

    <!-- SECTION 1 -->
    <h2 id="what-is-qiyamah">What is Qiyamah in Islam?</h2>
    <p>Qiyamah (قِيَامَة) — also written as Qayamat or Yawm al-Qiyamah — is the Day of Resurrection and Judgment in Islam. It is the final day of this world when all of creation will be gathered before Allah and every soul will be held accountable for every deed, word, and intention.</p>
    <p>Belief in Qiyamah is a <strong>pillar of Islamic faith (Iman)</strong>. The Prophet ﷺ said: "Iman is to believe in Allah, His Angels, His Books, His Messengers, the Last Day, and to believe in divine decree — both the good and the bad." <em>(Sahih Muslim, 8)</em></p>
    <p>The Day of Judgment is described extensively in both the Quran and Sunnah. What makes Islam unique is that Allah did not leave us without warning — He revealed through the Prophet ﷺ a precise set of signs that will precede this great day, so that believers can recognize the times and strengthen their faith.</p>

    <div class="gold-box">
      <strong>Prophet Muhammad ﷺ said:</strong><br>
      <em>"The Hour will not come until you see ten signs..."</em> — then he mentioned: the smoke, Dajjal, the Beast, the sun rising from the west, descent of Isa, Ya'jooj and Ma'jooj, three landslides (East, West, Arabian Peninsula), and a fire from Yemen. <strong>(Sahih Muslim, 2901)</strong>
    </div>

    <!-- SECTION 2 -->
    <h2 id="categories">Categories of Signs of Qiyamah</h2>
    <p>Islamic scholars have categorized the Signs of Qiyamah into two main types:</p>
    <div class="row g-3 mb-4">
      <div class="col-md-6">
        <div class="sign-card" style="border-left: 4px solid var(--gold);">
          <div class="sign-title" style="color:var(--gold);">Alamat as-Sughra (Minor Signs)</div>
          <p style="margin:0;font-size:.95rem;">Signs that have been occurring gradually over centuries. Many are already in our world today. These are warnings and wake-up calls for the believers.</p>
          <p style="margin:10px 0 0;font-size:.88rem;color:#6b7280;"><strong>Total:</strong> 77+ signs documented by scholars</p>
        </div>
      </div>
      <div class="col-md-6">
        <div class="sign-card" style="border-left: 4px solid #dc3545;">
          <div class="sign-title" style="color:#dc3545;">Alamat al-Kubra (Major Signs)</div>
          <p style="margin:0;font-size:.95rem;">The 10 great catastrophic events that will occur in succession at the very end. None of the major signs have yet occurred. Once they begin, they will follow one another rapidly.</p>
          <p style="margin:10px 0 0;font-size:.88rem;color:#6b7280;"><strong>Total:</strong> Exactly 10 signs in Sahih Muslim</p>
        </div>
      </div>
    </div>

    <!-- SECTION 3: MINOR SIGNS -->
    <h2 id="minor-signs">The 77 Minor Signs of Qiyamah</h2>
    <p>Scholars have compiled 72 to 77 minor signs from authentic Hadith sources. Below are all the major documented minor signs, with their status in today's world:</p>

    <h3>Category 1: Signs Related to the Prophet ﷺ and Early Islam</h3>
    <div class="minor-grid">
      <div class="minor-item"><div class="minor-num">1</div><div><div class="minor-text">Death of the Prophet Muhammad ﷺ</div><div class="minor-status">✅ Occurred — 632 CE</div></div></div>
      <div class="minor-item"><div class="minor-num">2</div><div><div class="minor-text">Conquest of Jerusalem (Bayt al-Maqdis)</div><div class="minor-status">✅ Occurred — 638 CE under Umar RA</div></div></div>
      <div class="minor-item"><div class="minor-num">3</div><div><div class="minor-text">A great plague — like a plague that attacks sheep</div><div class="minor-status">✅ Occurred — Plague of Amwas, also modern pandemics</div></div></div>
      <div class="minor-item"><div class="minor-num">4</div><div><div class="minor-text">Abundance of wealth — people refuse charity</div><div class="minor-status">✅ Occurring — modern global wealth</div></div></div>
    </div>

    <h3>Category 2: Signs Related to Knowledge and Morality</h3>
    <div class="minor-grid">
      <div class="minor-item"><div class="minor-num">5</div><div><div class="minor-text">Religious knowledge will be taken away / scholars will die</div><div class="minor-status">✅ Occurring increasingly</div></div></div>
      <div class="minor-item"><div class="minor-num">6</div><div><div class="minor-text">Ignorance will become widespread</div><div class="minor-status">✅ Occurring today</div></div></div>
      <div class="minor-item"><div class="minor-num">7</div><div><div class="minor-text">Fornication / Zina will become widespread and open</div><div class="minor-status">✅ Occurring today</div></div></div>
      <div class="minor-item"><div class="minor-num">8</div><div><div class="minor-text">Alcohol will be consumed openly and widely</div><div class="minor-status">✅ Occurring today</div></div></div>
      <div class="minor-item"><div class="minor-num">9</div><div><div class="minor-text">Music and singing will be everywhere</div><div class="minor-status">✅ Occurring — streaming, social media</div></div></div>
      <div class="minor-item"><div class="minor-num">10</div><div><div class="minor-text">Lying will become the norm of society</div><div class="minor-status">✅ Occurring — fake news era</div></div></div>
      <div class="minor-item"><div class="minor-num">11</div><div><div class="minor-text">Trustworthy people will be seen as untrustworthy</div><div class="minor-status">✅ Occurring today</div></div></div>
      <div class="minor-item"><div class="minor-num">12</div><div><div class="minor-text">Liars will be believed and truthful people disbelieved</div><div class="minor-status">✅ Occurring today</div></div></div>
    </div>

    <h3>Category 3: Signs Related to Family and Society</h3>
    <div class="minor-grid">
      <div class="minor-item"><div class="minor-num">13</div><div><div class="minor-text">A man will obey his wife but disobey his mother</div><div class="minor-status">✅ Common today</div></div></div>
      <div class="minor-item"><div class="minor-num">14</div><div><div class="minor-text">Disrespect to parents and elders will be common</div><div class="minor-status">✅ Widespread today</div></div></div>
      <div class="minor-item"><div class="minor-num">15</div><div><div class="minor-text">Children will disobey their parents</div><div class="minor-status">✅ Common today</div></div></div>
      <div class="minor-item"><div class="minor-num">16</div><div><div class="minor-text">Women will outnumber men</div><div class="minor-status">✅ Demographics in many nations</div></div></div>
      <div class="minor-item"><div class="minor-num">17</div><div><div class="minor-text">Slave women will give birth to their masters</div><div class="minor-status">✅ Interpreted as children dominating parents</div></div></div>
      <div class="minor-item"><div class="minor-num">18</div><div><div class="minor-text">Voices raised in mosques / mosques used for worldly talk</div><div class="minor-status">✅ Observed in many places</div></div></div>
    </div>

    <h3>Category 4: Signs Related to Earth and Nature</h3>
    <div class="minor-grid">
      <div class="minor-item"><div class="minor-num">19</div><div><div class="minor-text">Increase in earthquakes</div><div class="minor-status">✅ Frequency rising globally</div></div></div>
      <div class="minor-item"><div class="minor-num">20</div><div><div class="minor-text">Time will pass quickly (no barakah in time)</div><div class="minor-status">✅ Universally felt today</div></div></div>
      <div class="minor-item"><div class="minor-num">21</div><div><div class="minor-text">Tribulations (Fitan) will appear everywhere</div><div class="minor-status">✅ Occurring today</div></div></div>
      <div class="minor-item"><div class="minor-num">22</div><div><div class="minor-text">Killing and bloodshed will become common</div><div class="minor-status">✅ Wars, terrorism today</div></div></div>
      <div class="minor-item"><div class="minor-num">23</div><div><div class="minor-text">A man will kill and not know why</div><div class="minor-status">✅ Random violence today</div></div></div>
      <div class="minor-item"><div class="minor-num">24</div><div><div class="minor-text">The killer won't know why he killed, nor the killed why he was killed</div><div class="minor-status">✅ Mass shootings, wars</div></div></div>
    </div>

    <h3>Category 5: Signs Related to Buildings and Wealth</h3>
    <div class="minor-grid">
      <div class="minor-item"><div class="minor-num">25</div><div><div class="minor-text">Competition in building tall skyscrapers</div><div class="minor-status">✅ Dubai, NYC, Shanghai — ongoing</div></div></div>
      <div class="minor-item"><div class="minor-num">26</div><div><div class="minor-text">Barefoot shepherds will compete building tall buildings</div><div class="minor-status">✅ Gulf nations — confirmed</div></div></div>
      <div class="minor-item"><div class="minor-num">27</div><div><div class="minor-text">Competition in building mosques with no worshippers inside</div><div class="minor-status">✅ Observed today</div></div></div>
      <div class="minor-item"><div class="minor-num">28</div><div><div class="minor-text">Wealth and riches will be plentiful</div><div class="minor-status">✅ Global GDP unprecedented</div></div></div>
    </div>

    <h3>Category 6: Additional Minor Signs</h3>
    <div class="minor-grid">
      <div class="minor-item"><div class="minor-num">29</div><div><div class="minor-text">Arabia will become green with rivers and gardens</div><div class="minor-status">⏳ Beginning — Saudi greening projects</div></div></div>
      <div class="minor-item"><div class="minor-num">30</div><div><div class="minor-text">The Euphrates will uncover a mountain of gold</div><div class="minor-status">⏳ Not yet occurred</div></div></div>
      <div class="minor-item"><div class="minor-num">31</div><div><div class="minor-text">People will wear animal skins to show wealth</div><div class="minor-status">✅ Fur fashion industry</div></div></div>
      <div class="minor-item"><div class="minor-num">32</div><div><div class="minor-text">The wicked will become leaders of communities</div><div class="minor-status">✅ Corrupt governance today</div></div></div>
      <div class="minor-item"><div class="minor-num">33</div><div><div class="minor-text">People will be honored out of fear, not respect</div><div class="minor-status">✅ Common today</div></div></div>
      <div class="minor-item"><div class="minor-num">34</div><div><div class="minor-text">People will follow desires — not the Quran and Sunnah</div><div class="minor-status">✅ Very common today</div></div></div>
      <div class="minor-item"><div class="minor-num">35</div><div><div class="minor-text">Sudden death will increase</div><div class="minor-status">✅ Heart attacks in young people rising</div></div></div>
      <div class="minor-item"><div class="minor-num">36</div><div><div class="minor-text">A Muslim will not be safe from his Muslim neighbor</div><div class="minor-status">✅ Sectarian conflicts today</div></div></div>
    </div>

    <div class="gold-box mt-4">
      <strong>Hadith — Sahih Bukhari, 1036:</strong> The Prophet ﷺ said: <em>"The Hour will not come until knowledge is taken away, earthquakes increase in number, time passes quickly, tribulations appear, and there is much killing."</em>
    </div>

    <!-- SECTION 4 -->
    <h2 id="occurred">Which Minor Signs Have Already Appeared?</h2>
    <p>Of the 77 minor signs, Islamic scholars agree that <strong>more than 50 have already occurred</strong>. The most striking ones visible in today's world are:</p>
    <ul>
      <li><strong>Tall buildings competition</strong> — Saudi Arabia, UAE, China all compete for the world's tallest structures</li>
      <li><strong>Widespread music</strong> — every pocket now carries unlimited music through smartphones</li>
      <li><strong>Open immorality</strong> — normalized globally through media and entertainment</li>
      <li><strong>Time feels short</strong> — a year now feels like a month, a month like a week</li>
      <li><strong>Earthquakes increasing</strong> — USGS data shows a measurable increase in frequency</li>
      <li><strong>Corrupt leadership</strong> — widely observed across many nations</li>
      <li><strong>Frequent killing</strong> — wars, genocides, terrorism at a scale never seen before</li>
      <li><strong>Arabia becoming green</strong> — Saudi Vision 2030 includes massive greening projects</li>
    </ul>
    <div class="warning-box">
      <strong>Important:</strong> The appearance of minor signs does not mean Qiyamah is imminent tomorrow. It is a call to increase taqwa, good deeds, and connection with Allah — not a cause for panic or despair.
    </div>

    <!-- SECTION 5: MAJOR SIGNS -->
    <h2 id="major-signs">The 10 Major Signs of Qiyamah (Kubra)</h2>
    <p>These are the 10 great catastrophic events confirmed in <strong>Sahih Muslim, Hadith 2901</strong>. <em>None of them have yet occurred</em>. Once they begin, they will follow one another like beads falling from a broken necklace — rapidly, one after another.</p>

    <div class="sign-card">
      <div class="sign-number">1</div>
      <div class="sign-title">Appearance of Imam Mahdi <span class="status-badge status-pending">Not Yet</span></div>
      <p>Imam Mahdi will be a man from the lineage of the Prophet ﷺ — from the family of Fatima RA — who will emerge in a time of great oppression and injustice. He will be recognized in Mecca and people will give him bay'ah (pledge of allegiance) between the Ka'bah and Maqam Ibrahim. He will rule justly, filling the earth with justice after it had been filled with tyranny. He will lead Muslims in prayer when Prophet Isa descends.</p>
      <div class="sign-hadith">Sahih Muslim, 2907 — "He will be from my family, from the descendants of Fatimah."</div>
    </div>

    <div class="sign-card">
      <div class="sign-number">2</div>
      <div class="sign-title">Emergence of Dajjal (The Antichrist) <span class="status-badge status-pending">Not Yet</span></div>
      <p>Dajjal is described as the greatest trial this world will ever face. He will be a one-eyed man — his right eye will be blind and protruding like a grape, and between his eyes the word "Kafir" (disbeliever) will be written, readable by every believer. He will claim first to be a prophet, then claim to be God. He will have the power to make it rain, cause drought, and will appear to bring people back from the dead. He will travel the world in 40 days — one day like a year, one like a month, one like a week, and the rest like normal days. Only Mecca and Medina will be protected from him.</p>
      <div class="sign-hadith">Sahih Bukhari, 7131 — "There has been no greater tribulation on earth since Adam was created than the trial of Dajjal."</div>
    </div>

    <div class="sign-card">
      <div class="sign-number">3</div>
      <div class="sign-title">Descent of Prophet Isa (Jesus) ﷺ <span class="status-badge status-pending">Not Yet</span></div>
      <p>Prophet Isa ibn Maryam (Jesus, son of Mary) was neither killed nor crucified — Allah raised him up to the heavens (Quran 4:157-158). He will descend near the White Minaret of Damascus, wearing two garments dyed with saffron, placing his hands on the wings of two angels. He will descend during the time of Dajjal and will kill Dajjal near the gate of Ludd (Lod) in Palestine. He will then break the cross, kill swine, abolish the jizyah tax, and rule with justice. He will live on earth for 40 years then die, and Muslims will pray his funeral prayer.</p>
      <div class="sign-hadith">Sahih Muslim, 2937 — "By the One in Whose Hands my soul is, the son of Maryam will soon descend among you as a just ruler."</div>
    </div>

    <div class="sign-card">
      <div class="sign-number">4</div>
      <div class="sign-title">Release of Ya'jooj and Ma'jooj (Gog and Magog) <span class="status-badge status-pending">Not Yet</span></div>
      <p>Ya'jooj and Ma'jooj are a massive nation imprisoned behind a barrier built by Dhul Qarnayn (Quran 18:94-98). Every day they dig at the barrier, but when they reach the end of the day, they hear the command to return, and the next morning the wall is restored. One day, instead of saying "return," they will say "Insha'Allah, we will break through tomorrow" — and the next day the barrier will be weak and they will break free. They will spread across the earth, drinking up rivers and causing massive destruction. Allah will destroy them by sending worms in their necks.</p>
      <div class="sign-hadith">Quran 21:96-97 — "Until when Ya'jooj and Ma'jooj are released and they pour down from every elevated place..."</div>
    </div>

    <div class="sign-card">
      <div class="sign-number">5</div>
      <div class="sign-title">The Smoke (Dukhan) <span class="status-badge status-pending">Not Yet</span></div>
      <p>A thick, visible smoke will appear and cover the entire earth for 40 days. It will cause believers discomfort like a cold, but will cause disbelievers severe pain as if they are intoxicated. This event is mentioned directly in the Quran.</p>
      <div class="arabic-text" style="font-size:1.2rem;">فَارْتَقِبْ يَوْمَ تَأْتِي السَّمَاءُ بِدُخَانٍ مُّبِينٍ</div>
      <p style="font-style:italic;text-align:center;margin:8px 0;">"So watch for the Day when the sky will bring a visible smoke." — Quran 44:10</p>
      <div class="sign-hadith">Tafsir Ibn Kathir — The smoke will affect all people on earth simultaneously.</div>
    </div>

    <div class="sign-card">
      <div class="sign-number">6</div>
      <div class="sign-title">The Beast of the Earth (Dabbat al-Ard) <span class="status-badge status-pending">Not Yet</span></div>
      <p>A beast will emerge from the earth and will speak to people. It will mark believers and disbelievers — stamping believers with "Mu'min" (believer) on their face, and stamping disbelievers with "Kafir" (disbeliever). This creature is mentioned in the Quran.</p>
      <div class="arabic-text" style="font-size:1.2rem;">وَإِذَا وَقَعَ الْقَوْلُ عَلَيْهِمْ أَخْرَجْنَا لَهُمْ دَابَّةً مِّنَ الْأَرْضِ تُكَلِّمُهُمْ</div>
      <p style="font-style:italic;text-align:center;margin:8px 0;">"And when the Word comes to pass against them, We will bring forth for them a Beast from the earth speaking to them." — Quran 27:82</p>
    </div>

    <div class="sign-card">
      <div class="sign-number">7</div>
      <div class="sign-title">The Sun Rising from the West <span class="status-badge status-pending">Not Yet</span></div>
      <p>The sun will one day rise from the west instead of the east. This is the most significant sign because once it happens, the door of repentance is permanently closed. Allah will no longer accept the tawbah of anyone after this sign. The Prophet ﷺ said: "The Hour will not come until the sun rises from the west. When it rises and people see it, all of them will believe — but that will be a time when belief will not benefit anyone who did not believe before." <em>(Sahih Bukhari, 4636)</em></p>
      <div class="sign-hadith">Sahih Bukhari, 4636 — Tawbah (repentance) will no longer be accepted after this sign.</div>
    </div>

    <div class="sign-card">
      <div class="sign-number">8</div>
      <div class="sign-title">Three Massive Earthquakes (East, West, Arabia) <span class="status-badge status-pending">Not Yet</span></div>
      <p>Three enormous landslides and earthquakes will occur — one in the East, one in the West, and one in the Arabian Peninsula. These will be unlike any earthquake humanity has experienced before — they will cause massive destruction and reshape the earth's geography.</p>
      <div class="sign-hadith">Sahih Muslim, 2901 — Mentioned alongside the other 10 major signs in the famous hadith of Abu Huzaifah.</div>
    </div>

    <div class="sign-card">
      <div class="sign-number">9</div>
      <div class="sign-title">A Great Fire from Yemen <span class="status-badge status-pending">Not Yet</span></div>
      <p>A great fire will emerge from Yemen — from the direction of Aden — that will drive people toward their place of gathering (Syria or the plain of resurrection). This fire will be seen by people all around the world and will force everyone to move in one direction.</p>
      <div class="sign-hadith">Sahih Muslim, 2901 — "A fire will emerge from Yemen and drive people toward their place of resurrection."</div>
    </div>

    <div class="sign-card">
      <div class="sign-number">10</div>
      <div class="sign-title">Destruction of the Ka'bah <span class="status-badge status-pending">Not Yet</span></div>
      <p>Near the end of times, a man called Dhul-Suwayqatayn from Ethiopia will come and destroy the Ka'bah stone by stone. The Prophet ﷺ said: "It is as though I can see him — a short, black-legged, flat-footed man, dismantling the Ka'bah stone by stone." After the Ka'bah is destroyed, there will be no more Hajj or Umrah.</p>
      <div class="sign-hadith">Sahih Bukhari, 1591 — "Dhul-Suwayqatayn from Ethiopia will dismantle the Ka'bah stone by stone."</div>
    </div>

    <!-- SECTION: DAJJAL -->
    <h2 id="dajjal">Dajjal — Understanding the Greatest Trial</h2>
    <p>The Prophet ﷺ warned about Dajjal more than any other sign. From Prophet Nuh ﷺ to every Prophet who came, they all warned their nations about Dajjal. Here is what we know from authentic Hadith:</p>
    <ul>
      <li><strong>Physical description:</strong> One-eyed (right eye blind), curly hair, fat body, reddish complexion. "Kafir" written between his eyes — visible to every believer.</li>
      <li><strong>Abilities:</strong> Commands the sky to rain, the earth to produce crops. Will appear to raise the dead. Will have mountains of bread and rivers of water following him.</li>
      <li><strong>His deception:</strong> Will first claim prophethood, then claim to be God. His "paradise" is actually fire, his "fire" is actually paradise.</li>
      <li><strong>Protection:</strong> Recite Surah Al-Kahf every Friday. Memorize the first 10 verses of Surah Al-Kahf — they protect from Dajjal's fitnah.</li>
      <li><strong>His end:</strong> Prophet Isa ﷺ will descend and kill him near Ludd, Palestine.</li>
    </ul>
    <div class="highlight-box">
      <strong>Protection from Dajjal — Surah Al-Kahf:</strong> The Prophet ﷺ said: <em>"Whoever memorizes the first ten verses of Surah Al-Kahf will be protected from Dajjal."</em> <strong>(Sahih Muslim, 809)</strong>
    </div>

    <!-- SECTION: IMAM MAHDI -->
    <h2 id="imam-mahdi">Imam Mahdi — Who Is He?</h2>
    <p>Imam Mahdi is NOT a prophet — he is a pious Muslim from the lineage of the Prophet ﷺ who will be chosen by Allah to lead the Ummah in its final great trial. Key facts:</p>
    <ul>
      <li><strong>Name:</strong> Muhammad ibn Abdillah (same name as the Prophet ﷺ)</li>
      <li><strong>Lineage:</strong> From Fatimah RA, granddaughter line of the Prophet ﷺ</li>
      <li><strong>Appearance:</strong> He will not know he is the Mahdi at first — people will force bay'ah upon him in Mecca</li>
      <li><strong>Mission:</strong> Will rule justly, revive the Sunnah, and lead Muslims against Dajjal</li>
      <li><strong>Duration:</strong> Will rule for 7, 8, or 9 years (different narrations)</li>
      <li><strong>NOT yet born:</strong> There is no authentic evidence any specific person alive today is the Mahdi</li>
    </ul>

    <!-- SECTION: PREPARE -->
    <h2 id="prepare">How to Prepare for Qiyamah</h2>
    <p>The Signs of Qiyamah are not given to create fear — they are given to motivate action. Here is how every Muslim should respond:</p>
    <div class="row g-3 mb-4">
      <div class="col-md-6">
        <div class="sign-card">
          <div class="sign-title"><i class="fas fa-book-quran" style="color:var(--emerald);margin-right:8px;"></i> Read Surah Al-Kahf Every Friday</div>
          <p style="margin:0;font-size:.9rem;">Protection from Dajjal's fitnah. Prophet ﷺ commanded this specifically.</p>
        </div>
      </div>
      <div class="col-md-6">
        <div class="sign-card">
          <div class="sign-title"><i class="fas fa-moon" style="color:var(--emerald);margin-right:8px;"></i> Increase Dhikr Daily</div>
          <p style="margin:0;font-size:.9rem;">SubhanAllah, Alhamdulillah, Allahu Akbar — 100 times each daily is a shield against Fitan.</p>
        </div>
      </div>
      <div class="col-md-6">
        <div class="sign-card">
          <div class="sign-title"><i class="fas fa-heart" style="color:var(--emerald);margin-right:8px;"></i> Strengthen Family Bonds</div>
          <p style="margin:0;font-size:.9rem;">Honor parents, maintain silah al-rahim (family ties) — this adds barakah and protection in end times.</p>
        </div>
      </div>
      <div class="col-md-6">
        <div class="sign-card">
          <div class="sign-title"><i class="fas fa-mosque" style="color:var(--emerald);margin-right:8px;"></i> Guard Your Salah</div>
          <p style="margin:0;font-size:.9rem;">The first thing to be lifted from the earth before Qiyamah is trustworthiness — protect your 5 daily prayers above all else.</p>
        </div>
      </div>
    </div>
    <ul>
      <li>Make Tawbah (sincere repentance) regularly — before the sun rises from the west</li>
      <li>Learn and teach Islamic knowledge — before scholars disappear</li>
      <li>Avoid major sins that are listed as minor signs</li>
      <li>Study the Signs of Qiyamah to recognize the times — exactly what you are doing now</li>
      <li>Stay connected to your local Muslim community</li>
    </ul>

    <!-- FAQ -->
    <h2 id="faq">Frequently Asked Questions (FAQ)</h2>
    <div class="faq-item">
      <div class="faq-q" onclick="this.nextElementSibling.style.display=this.nextElementSibling.style.display==='block'?'none':'block';">What are the 10 major signs of Qiyamah? <i class="fas fa-chevron-down"></i></div>
      <div class="faq-a">The 10 major signs are: (1) Imam Mahdi, (2) Dajjal, (3) Descent of Prophet Isa, (4) Ya'jooj and Ma'jooj, (5) The Smoke (Dukhan), (6) The Beast of the Earth, (7) Sun rising from the West, (8) Three massive earthquakes, (9) Fire from Yemen, (10) Destruction of the Ka'bah. Confirmed in Sahih Muslim, Hadith 2901.</div>
    </div>
    <div class="faq-item">
      <div class="faq-q" onclick="this.nextElementSibling.style.display=this.nextElementSibling.style.display==='block'?'none':'block';">Which signs of Qiyamah have already occurred? <i class="fas fa-chevron-down"></i></div>
      <div class="faq-a">Over 50 minor signs have appeared: death of the Prophet ﷺ, conquest of Jerusalem, widespread alcohol and immorality, competition in building skyscrapers, increase in earthquakes, music everywhere, time passing quickly, children disobeying parents, corrupt leadership, frequent killing, and more.</div>
    </div>
    <div class="faq-item">
      <div class="faq-q" onclick="this.nextElementSibling.style.display=this.nextElementSibling.style.display==='block'?'none':'block';">When will Qiyamah happen? <i class="fas fa-chevron-down"></i></div>
      <div class="faq-a">Only Allah knows the exact time of Qiyamah. "They ask you about the Hour: when will it arrive? Say: Knowledge of it is only with my Lord." (Quran 7:187). No human — not even the Prophet ﷺ — was told the exact hour.</div>
    </div>
    <div class="faq-item">
      <div class="faq-q" onclick="this.nextElementSibling.style.display=this.nextElementSibling.style.display==='block'?'none':'block';">Who is Dajjal and how do we protect ourselves? <i class="fas fa-chevron-down"></i></div>
      <div class="faq-a">Dajjal is the Antichrist — a one-eyed man who will claim to be God. The best protection: (1) Recite the first 10 verses of Surah Al-Kahf daily, (2) Read Surah Al-Kahf every Friday, (3) Seek refuge in Allah from Dajjal in every prayer: "Allahumma inni a'udhu bika min 'adhabi jahannam wa min 'adhabi l-qabr wa min fitnatil mahya wal mamat wa min sharri fitnatil masih ad-dajjal."</div>
    </div>
    <div class="faq-item">
      <div class="faq-q" onclick="this.nextElementSibling.style.display=this.nextElementSibling.style.display==='block'?'none':'block';">Is Imam Mahdi alive today? <i class="fas fa-chevron-down"></i></div>
      <div class="faq-a">There is no authentic Islamic evidence that Imam Mahdi has been born or is alive today. Anyone who claims to be the Mahdi is to be treated with great caution. The Mahdi will be recognized through very specific signs at a specific time — and the Muslim community will give him bay'ah in Mecca, not through social media claims.</div>
    </div>
    <div class="faq-item">
      <div class="faq-q" onclick="this.nextElementSibling.style.display=this.nextElementSibling.style.display==='block'?'none':'block';">What is Dukhan (the Smoke)? <i class="fas fa-chevron-down"></i></div>
      <div class="faq-a">Dukhan is a major sign of Qiyamah — a thick, visible smoke that will cover the entire earth for 40 days. Believers will experience it like a cold or flu, while disbelievers will suffer as if intoxicated. It is mentioned in Quran 44:10: "So watch for the Day when the sky will bring a visible smoke."</div>
    </div>

    <!-- Internal Links -->
    <div class="highlight-box mt-5">
      <strong>Deepen Your Islamic Knowledge at NoorPath Academy:</strong>
      <ul style="margin:12px 0 0;padding-left:20px;">
        <li><a href="/blog/ayatul-kursi-arabic-english-benefits" style="color:var(--emerald);">Ayatul Kursi — Full Arabic, Translation &amp; 7 Benefits</a></li>
        <li><a href="/blog/99-names-of-allah-asmaul-husna" style="color:var(--emerald);">99 Names of Allah (Asmaul Husna) with Meanings</a></li>
        <li><a href="/blog/surah-yaseen-arabic-english" style="color:var(--emerald);">Surah Yaseen — Full Arabic Text &amp; Translation</a></li>
        <li><a href="/blog/duas-for-kids-to-memorize" style="color:var(--emerald);">Essential Duas for Kids to Memorize</a></li>
      </ul>
    </div>`,
  },
  "surah-yaseen-arabic-english": {
    style: `.article-body { font-size: 1.05rem; line-height: 1.85; color: #374151; }
    .article-body h2 { font-size: 1.5rem; font-weight: 700; color: var(--charcoal); margin: 40px 0 16px; }
    .article-body h3 { font-size: 1.1rem; font-weight: 700; color: var(--emerald); margin: 24px 0 10px; }
    .article-body p { margin-bottom: 18px; }
    .article-body ul { margin-bottom: 18px; padding-left: 24px; }
    .article-body li { margin-bottom: 8px; }
    .highlight-box { background: rgba(10,110,79,.06); border-left: 4px solid var(--emerald); border-radius: 8px; padding: 20px 24px; margin: 24px 0; }
    .gold-box { background: rgba(232,184,75,.08); border-left: 4px solid var(--gold); border-radius: 8px; padding: 20px 24px; margin: 24px 0; }

    /* Bismillah display */
    .bismillah { font-family: 'Amiri', serif; font-size: 2.2rem; text-align: center; color: var(--emerald); direction: rtl; padding: 24px; margin: 24px 0; background: rgba(10,110,79,.04); border-radius: 12px; border: 1px solid rgba(10,110,79,.12); line-height: 1.8; }

    /* Verse layout */
    .verse-block { border-bottom: 1px solid rgba(0,0,0,.06); padding: 18px 0; }
    .verse-block:last-child { border-bottom: none; }
    .verse-number { display: inline-flex; align-items: center; justify-content: center; width: 36px; height: 36px; border-radius: 50%; background: var(--emerald); color: #fff; font-size: .8rem; font-weight: 700; flex-shrink: 0; margin-bottom: 10px; }
    .verse-arabic { font-family: 'Amiri', serif; font-size: 1.75rem; line-height: 2.2; text-align: right; color: var(--charcoal); direction: rtl; margin-bottom: 8px; }
    .verse-transliteration { font-style: italic; color: #6b7280; font-size: .9rem; margin-bottom: 4px; }
    .verse-english { color: #374151; font-size: .95rem; }

    /* Benefits */
    .benefit-card { background: var(--ivory); border-radius: 12px; padding: 20px; border: 1px solid var(--border); margin-bottom: 16px; display: flex; gap: 16px; align-items: flex-start; }
    .benefit-icon { width: 44px; height: 44px; border-radius: 10px; background: rgba(10,110,79,.1); display: flex; align-items: center; justify-content: center; color: var(--emerald); font-size: 1.1rem; flex-shrink: 0; }

    /* Stats bar */
    .surah-stats { display: flex; gap: 0; border: 1px solid var(--border); border-radius: 12px; overflow: hidden; margin: 24px 0; }
    .stat-item { flex: 1; text-align: center; padding: 16px 8px; border-right: 1px solid var(--border); }
    .stat-item:last-child { border-right: none; }
    .stat-num { font-size: 1.4rem; font-weight: 700; color: var(--emerald); display: block; }
    .stat-label { font-size: .75rem; color: var(--muted); }

    /* FAQ */
    .faq-item { border: 1px solid var(--border); border-radius: 10px; margin-bottom: 12px; overflow: hidden; }
    .faq-q { padding: 16px 20px; font-weight: 700; cursor: pointer; background: var(--ivory); color: var(--charcoal); display: flex; justify-content: space-between; align-items: center; }
    .faq-a { padding: 16px 20px; color: #374151; font-size: .95rem; line-height: 1.7; border-top: 1px solid var(--border); }

    .section-divider { text-align: center; padding: 16px 0; color: var(--emerald); font-size: 1.2rem; letter-spacing: 8px; }

    @media (max-width: 576px) {
      .surah-stats { flex-wrap: wrap; }
      .stat-item { flex: 1 1 50%; border-bottom: 1px solid var(--border); }
      .verse-arabic { font-size: 1.45rem; }
    }`,
    content: `<p><strong>Surah Yaseen</strong> (also written Surah Yasin, سورة يس) is the <strong>36th chapter of the Holy Quran</strong>, containing 83 verses. The Prophet Muhammad ﷺ called it the <em>"Heart of the Quran"</em> — and for 1,400 years, Muslims around the world have recited it daily for blessings, forgiveness, and closeness to Allah.</p>

          <p>This page contains the <strong>complete Surah Yaseen in Arabic</strong> with full English translation and transliteration — so you can read, understand, learn, and teach it to your family.</p>

          <div class="surah-stats">
            <div class="stat-item"><span class="stat-num">36</span><span class="stat-label">Surah Number</span></div>
            <div class="stat-item"><span class="stat-num">83</span><span class="stat-label">Verses (Ayat)</span></div>
            <div class="stat-item"><span class="stat-num">729</span><span class="stat-label">Words</span></div>
            <div class="stat-item"><span class="stat-num">Makki</span><span class="stat-label">Revelation</span></div>
          </div>

          <div class="gold-box">
            <strong>🌟 The Heart of the Quran:</strong> The Prophet ﷺ said: <em>"Everything has a heart, and the heart of the Quran is Surah Yaseen. Whoever reads Surah Yaseen, Allah will record for them the reward of reading the Quran ten times."</em> — (Tirmidhi)
          </div>

          <!-- =================== BENEFITS =================== -->
          <h2>7 Key Benefits of Reciting Surah Yaseen</h2>

          <div class="benefit-card">
            <div class="benefit-icon"><i class="fas fa-heart"></i></div>
            <div><strong>Heart of the Quran</strong><br><span style="font-size:.92rem;color:var(--muted);">Its recitation earns the reward of reading the entire Quran 10 times, according to hadith in Tirmidhi.</span></div>
          </div>
          <div class="benefit-card">
            <div class="benefit-icon"><i class="fas fa-shield-halved"></i></div>
            <div><strong>Protection & Forgiveness</strong><br><span style="font-size:.92rem;color:var(--muted);">"Whoever reads Surah Yaseen in a single night seeking Allah's pleasure, Allah will forgive him." — Abu Dawud</span></div>
          </div>
          <div class="benefit-card">
            <div class="benefit-icon"><i class="fas fa-moon"></i></div>
            <div><strong>Ease at the Time of Death</strong><br><span style="font-size:.92rem;color:var(--muted);">Scholars recommend reciting it near a dying person to ease their departure from this world.</span></div>
          </div>
          <div class="benefit-card">
            <div class="benefit-icon"><i class="fas fa-sun"></i></div>
            <div><strong>Blessings of Friday</strong><br><span style="font-size:.92rem;color:var(--muted);">Reciting Surah Yaseen on Fridays (Jumu'ah) is especially virtuous and carries great reward.</span></div>
          </div>
          <div class="benefit-card">
            <div class="benefit-icon"><i class="fas fa-seedling"></i></div>
            <div><strong>Fulfillment of Needs</strong><br><span style="font-size:.92rem;color:var(--muted);">Many scholars cite that reciting it sincerely for a legitimate need is a means of its fulfillment by Allah's mercy.</span></div>
          </div>
          <div class="benefit-card">
            <div class="benefit-icon"><i class="fas fa-book-open"></i></div>
            <div><strong>Strengthens Iman (Faith)</strong><br><span style="font-size:.92rem;color:var(--muted);">Its themes of resurrection, divine power, and the signs of creation powerfully reinforce belief in Allah.</span></div>
          </div>
          <div class="benefit-card">
            <div class="benefit-icon"><i class="fas fa-star-and-crescent"></i></div>
            <div><strong>Makki Revelation — Pure Aqeedah</strong><br><span style="font-size:.92rem;color:var(--muted);">Revealed in Mecca, it focuses on Tawheed (Oneness of Allah), resurrection, and prophethood.</span></div>
          </div>

          <!-- =================== FULL TEXT =================== -->
          <h2 style="text-align:center;margin-top:48px;">Surah Yaseen — Complete Arabic Text</h2>
          <p style="text-align:center;color:var(--muted);margin-bottom:8px;">With English Translation & Transliteration</p>

          <div class="bismillah">بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ</div>
          <p style="text-align:center;font-style:italic;color:var(--muted);margin-bottom:32px;font-size:.9rem;">Bismillah ir-Rahman ir-Raheem — In the name of Allah, the Most Gracious, the Most Merciful</p>

          <!-- Verses 1-10 with full transliteration -->
          <div class="verse-block">
            <span class="verse-number">1</span>
            <div class="verse-arabic">يسٓ</div>
            <div class="verse-transliteration">Ya-Seen</div>
            <div class="verse-english">Ya Sin. [These are abbreviated letters whose full meaning is known only to Allah.]</div>
          </div>

          <div class="verse-block">
            <span class="verse-number">2</span>
            <div class="verse-arabic">وَالْقُرْآنِ الْحَكِيمِ</div>
            <div class="verse-transliteration">Wal-Qur'anil-Hakeem</div>
            <div class="verse-english">By the Quran, full of wisdom —</div>
          </div>

          <div class="verse-block">
            <span class="verse-number">3</span>
            <div class="verse-arabic">إِنَّكَ لَمِنَ الْمُرْسَلِينَ</div>
            <div class="verse-transliteration">Innaka laminal-mursaleen</div>
            <div class="verse-english">Indeed, you [O Muhammad] are among the messengers,</div>
          </div>

          <div class="verse-block">
            <span class="verse-number">4</span>
            <div class="verse-arabic">عَلَىٰ صِرَاطٍ مُّسْتَقِيمٍ</div>
            <div class="verse-transliteration">'Ala siraatin mustaqeem</div>
            <div class="verse-english">On a straight path.</div>
          </div>

          <div class="verse-block">
            <span class="verse-number">5</span>
            <div class="verse-arabic">تَنزِيلَ الْعَزِيزِ الرَّحِيمِ</div>
            <div class="verse-transliteration">Tanzeelal-'Azeezir-Raheem</div>
            <div class="verse-english">[This is] a revelation of the Exalted in Might, the Merciful,</div>
          </div>

          <div class="verse-block">
            <span class="verse-number">6</span>
            <div class="verse-arabic">لِتُنذِرَ قَوْمًا مَّا أُنذِرَ آبَاؤُهُمْ فَهُمْ غَافِلُونَ</div>
            <div class="verse-transliteration">Litundhira qawmam-ma undhira aabaaa'uhum fahum ghaafiloon</div>
            <div class="verse-english">That you may warn a people whose forefathers were not warned, so they are unaware.</div>
          </div>

          <div class="verse-block">
            <span class="verse-number">7</span>
            <div class="verse-arabic">لَقَدْ حَقَّ الْقَوْلُ عَلَىٰ أَكْثَرِهِمْ فَهُمْ لَا يُؤْمِنُونَ</div>
            <div class="verse-english">Already the word [of judgment] has come into effect upon most of them, so they do not believe.</div>
          </div>

          <div class="verse-block">
            <span class="verse-number">8</span>
            <div class="verse-arabic">إِنَّا جَعَلْنَا فِي أَعْنَاقِهِمْ أَغْلَالًا فَهِيَ إِلَى الْأَذْقَانِ فَهُم مُّقْمَحُونَ</div>
            <div class="verse-english">Indeed, We have put shackles on their necks, and they are to their chins, so they are with heads held aloft.</div>
          </div>

          <div class="verse-block">
            <span class="verse-number">9</span>
            <div class="verse-arabic">وَجَعَلْنَا مِن بَيْنِ أَيْدِيهِمْ سَدًّا وَمِنْ خَلْفِهِمْ سَدًّا فَأَغْشَيْنَاهُمْ فَهُمْ لَا يُبْصِرُونَ</div>
            <div class="verse-english">And We have put before them a barrier and behind them a barrier and covered them, so they cannot see.</div>
          </div>

          <div class="verse-block">
            <span class="verse-number">10</span>
            <div class="verse-arabic">وَسَوَاءٌ عَلَيْهِمْ أَأَنذَرْتَهُمْ أَمْ لَمْ تُنذِرْهُمْ لَا يُؤْمِنُونَ</div>
            <div class="verse-english">And it is equal to them whether you warn them or do not warn them — they will not believe.</div>
          </div>

          <div class="verse-block">
            <span class="verse-number">11</span>
            <div class="verse-arabic">إِنَّمَا تُنذِرُ مَنِ اتَّبَعَ الذِّكْرَ وَخَشِيَ الرَّحْمَـٰنَ بِالْغَيْبِ فَبَشِّرْهُ بِمَغْفِرَةٍ وَأَجْرٍ كَرِيمٍ</div>
            <div class="verse-english">You can only warn one who follows the message and fears the Most Merciful unseen. So give him good tidings of forgiveness and a noble reward.</div>
          </div>

          <div class="verse-block">
            <span class="verse-number">12</span>
            <div class="verse-arabic">إِنَّا نَحْنُ نُحْيِي الْمَوْتَىٰ وَنَكْتُبُ مَا قَدَّمُوا وَآثَارَهُمْ وَكُلَّ شَيْءٍ أَحْصَيْنَاهُ فِي إِمَامٍ مُّبِينٍ</div>
            <div class="verse-english">Indeed, it is We who bring the dead to life and record what they have put forth and what they left behind, and all things We have enumerated in a clear register.</div>
          </div>

          <div class="section-divider">· · · · · ·</div>
          <p style="text-align:center;color:var(--muted);font-size:.9rem;margin-bottom:24px;"><em>The People of the Town — Verses 13–32</em></p>

          <div class="verse-block">
            <span class="verse-number">13</span>
            <div class="verse-arabic">وَاضْرِبْ لَهُم مَّثَلًا أَصْحَابَ الْقَرْيَةِ إِذْ جَاءَهَا الْمُرْسَلُونَ</div>
            <div class="verse-english">And present to them an example: the people of the city, when the messengers came to it —</div>
          </div>

          <div class="verse-block">
            <span class="verse-number">14</span>
            <div class="verse-arabic">إِذْ أَرْسَلْنَا إِلَيْهِمُ اثْنَيْنِ فَكَذَّبُوهُمَا فَعَزَّزْنَا بِثَالِثٍ فَقَالُوا إِنَّا إِلَيْكُم مُّرْسَلُونَ</div>
            <div class="verse-english">When We sent to them two [messengers] but they denied them, so We strengthened them with a third, and they said: "Indeed, we are messengers to you."</div>
          </div>

          <div class="verse-block">
            <span class="verse-number">15</span>
            <div class="verse-arabic">قَالُوا مَا أَنتُمْ إِلَّا بَشَرٌ مِّثْلُنَا وَمَا أَنزَلَ الرَّحْمَـٰنُ مِن شَيْءٍ إِنْ أَنتُمْ إِلَّا تَكْذِبُونَ</div>
            <div class="verse-english">They said: "You are not but human beings like us, and the Most Merciful has not revealed a thing. You are only liars."</div>
          </div>

          <div class="verse-block">
            <span class="verse-number">16</span>
            <div class="verse-arabic">قَالُوا رَبُّنَا يَعْلَمُ إِنَّا إِلَيْكُمْ لَمُرْسَلُونَ</div>
            <div class="verse-english">They said: "Our Lord knows that we are indeed messengers to you."</div>
          </div>

          <div class="verse-block">
            <span class="verse-number">17</span>
            <div class="verse-arabic">وَمَا عَلَيْنَا إِلَّا الْبَلَاغُ الْمُبِينُ</div>
            <div class="verse-english">"And upon us is only clear notification [of the message]."</div>
          </div>

          <div class="verse-block">
            <span class="verse-number">18</span>
            <div class="verse-arabic">قَالُوا إِنَّا تَطَيَّرْنَا بِكُمْ لَئِن لَّمْ تَنتَهُوا لَنَرْجُمَنَّكُمْ وَلَيَمَسَّنَّكُم مِّنَّا عَذَابٌ أَلِيمٌ</div>
            <div class="verse-english">They said: "Indeed, we consider you a bad omen. If you do not desist, we will surely stone you, and there will surely touch you, from us, a painful punishment."</div>
          </div>

          <div class="verse-block">
            <span class="verse-number">19</span>
            <div class="verse-arabic">قَالُوا طَائِرُكُم مَّعَكُمْ أَئِن ذُكِّرْتُم بَلْ أَنتُمْ قَوْمٌ مُّسْرِفُونَ</div>
            <div class="verse-english">They said: "Your omen is with yourselves. Is it because you were reminded? But you are a transgressing people."</div>
          </div>

          <div class="verse-block">
            <span class="verse-number">20</span>
            <div class="verse-arabic">وَجَاءَ مِنْ أَقْصَى الْمَدِينَةِ رَجُلٌ يَسْعَىٰ قَالَ يَا قَوْمِ اتَّبِعُوا الْمُرْسَلِينَ</div>
            <div class="verse-english">And there came from the farthest end of the city a man, running. He said: "O my people, follow the messengers."</div>
          </div>

          <div class="verse-block">
            <span class="verse-number">21</span>
            <div class="verse-arabic">اتَّبِعُوا مَن لَّا يَسْأَلُكُمْ أَجْرًا وَهُم مُّهْتَدُونَ</div>
            <div class="verse-english">"Follow those who do not ask of you [any] payment, and they are [rightly] guided."</div>
          </div>

          <div class="verse-block">
            <span class="verse-number">22</span>
            <div class="verse-arabic">وَمَا لِيَ لَا أَعْبُدُ الَّذِي فَطَرَنِي وَإِلَيْهِ تُرْجَعُونَ</div>
            <div class="verse-english">"And why should I not worship He who created me and to whom you will be returned?"</div>
          </div>

          <div class="verse-block">
            <span class="verse-number">23</span>
            <div class="verse-arabic">أَأَتَّخِذُ مِن دُونِهِ آلِهَةً إِن يُرِدْنِ الرَّحْمَـٰنُ بِضُرٍّ لَّا تُغْنِ عَنِّي شَفَاعَتُهُمْ شَيْئًا وَلَا يُنقِذُونِ</div>
            <div class="verse-english">"Should I take other than Him [false] deities [while], if the Most Merciful intends for me some adversity, their intercession will not avail me at all, nor can they save me?"</div>
          </div>

          <div class="verse-block">
            <span class="verse-number">24</span>
            <div class="verse-arabic">إِنِّي إِذًا لَّفِي ضَلَالٍ مُّبِينٍ</div>
            <div class="verse-english">"Indeed, I would then be in manifest error."</div>
          </div>

          <div class="verse-block">
            <span class="verse-number">25</span>
            <div class="verse-arabic">إِنِّي آمَنتُ بِرَبِّكُمْ فَاسْمَعُونِ</div>
            <div class="verse-english">"Indeed, I have believed in your Lord, so listen to me."</div>
          </div>

          <div class="verse-block">
            <span class="verse-number">26</span>
            <div class="verse-arabic">قِيلَ ادْخُلِ الْجَنَّةَ قَالَ يَا لَيْتَ قَوْمِي يَعْلَمُونَ</div>
            <div class="verse-english">It was said: "Enter Paradise." He said: "I wish my people could know —"</div>
          </div>

          <div class="verse-block">
            <span class="verse-number">27</span>
            <div class="verse-arabic">بِمَا غَفَرَ لِي رَبِّي وَجَعَلَنِي مِنَ الْمُكْرَمِينَ</div>
            <div class="verse-english">"Of how my Lord has forgiven me and placed me among the honored."</div>
          </div>

          <div class="verse-block">
            <span class="verse-number">28</span>
            <div class="verse-arabic">وَمَا أَنزَلْنَا عَلَىٰ قَوْمِهِ مِن بَعْدِهِ مِن جُندٍ مِّنَ السَّمَاءِ وَمَا كُنَّا مُنزِلِينَ</div>
            <div class="verse-english">And We did not send down upon his people after him any soldiers from the heavens, nor would We have done so.</div>
          </div>

          <div class="verse-block">
            <span class="verse-number">29</span>
            <div class="verse-arabic">إِن كَانَتْ إِلَّا صَيْحَةً وَاحِدَةً فَإِذَا هُمْ خَامِدُونَ</div>
            <div class="verse-english">It was not but one shout, and immediately they were extinguished.</div>
          </div>

          <div class="verse-block">
            <span class="verse-number">30</span>
            <div class="verse-arabic">يَا حَسْرَةً عَلَى الْعِبَادِ مَا يَأْتِيهِم مِّن رَّسُولٍ إِلَّا كَانُوا بِهِ يَسْتَهْزِئُونَ</div>
            <div class="verse-english">How regretful for the servants! There did not come to them any messenger except that they used to ridicule him.</div>
          </div>

          <div class="verse-block">
            <span class="verse-number">31</span>
            <div class="verse-arabic">أَلَمْ يَرَوْا كَمْ أَهْلَكْنَا قَبْلَهُم مِّنَ الْقُرُونِ أَنَّهُمْ إِلَيْهِمْ لَا يَرْجِعُونَ</div>
            <div class="verse-english">Have they not considered how many generations We destroyed before them and that they will not return to them?</div>
          </div>

          <div class="verse-block">
            <span class="verse-number">32</span>
            <div class="verse-arabic">وَإِن كُلٌّ لَّمَّا جَمِيعٌ لَّدَيْنَا مُحْضَرُونَ</div>
            <div class="verse-english">And indeed, all of them will yet be brought present before Us.</div>
          </div>

          <div class="section-divider">· · · · · ·</div>
          <p style="text-align:center;color:var(--muted);font-size:.9rem;margin-bottom:24px;"><em>Signs of Allah in Creation — Verses 33–47</em></p>

          <div class="verse-block">
            <span class="verse-number">33</span>
            <div class="verse-arabic">وَآيَةٌ لَّهُمُ الْأَرْضُ الْمَيْتَةُ أَحْيَيْنَاهَا وَأَخْرَجْنَا مِنْهَا حَبًّا فَمِنْهُ يَأْكُلُونَ</div>
            <div class="verse-english">And a sign for them is the dead earth. We have brought it to life and brought forth from it grain, and from it they eat.</div>
          </div>

          <div class="verse-block">
            <span class="verse-number">34</span>
            <div class="verse-arabic">وَجَعَلْنَا فِيهَا جَنَّاتٍ مِّن نَّخِيلٍ وَأَعْنَابٍ وَفَجَّرْنَا فِيهَا مِنَ الْعُيُونِ</div>
            <div class="verse-english">And We placed therein gardens of palm trees and grapevines and caused to burst forth therein some springs —</div>
          </div>

          <div class="verse-block">
            <span class="verse-number">35</span>
            <div class="verse-arabic">لِيَأْكُلُوا مِن ثَمَرِهِ وَمَا عَمِلَتْهُ أَيْدِيهِمْ أَفَلَا يَشْكُرُونَ</div>
            <div class="verse-english">That they may eat of His fruit. And their hands have not produced it, so will they not be grateful?</div>
          </div>

          <div class="verse-block">
            <span class="verse-number">36</span>
            <div class="verse-arabic">سُبْحَانَ الَّذِي خَلَقَ الْأَزْوَاجَ كُلَّهَا مِمَّا تُنبِتُ الْأَرْضُ وَمِنْ أَنفُسِهِمْ وَمِمَّا لَا يَعْلَمُونَ</div>
            <div class="verse-english">Exalted is He who created all pairs — from what the earth grows and from themselves and from that which they do not know.</div>
          </div>

          <div class="verse-block">
            <span class="verse-number">37</span>
            <div class="verse-arabic">وَآيَةٌ لَّهُمُ اللَّيْلُ نَسْلَخُ مِنْهُ النَّهَارَ فَإِذَا هُم مُّظْلِمُونَ</div>
            <div class="verse-english">And a sign for them is the night. We remove from it [the light of] day, so they are [left] in darkness.</div>
          </div>

          <div class="verse-block">
            <span class="verse-number">38</span>
            <div class="verse-arabic">وَالشَّمْسُ تَجْرِي لِمُسْتَقَرٍّ لَّهَا ذَٰلِكَ تَقْدِيرُ الْعَزِيزِ الْعَلِيمِ</div>
            <div class="verse-english">And the sun runs [on course] toward its stopping point. That is the determination of the Exalted in Might, the Knowing.</div>
          </div>

          <div class="verse-block">
            <span class="verse-number">39</span>
            <div class="verse-arabic">وَالْقَمَرَ قَدَّرْنَاهُ مَنَازِلَ حَتَّىٰ عَادَ كَالْعُرْجُونِ الْقَدِيمِ</div>
            <div class="verse-english">And the moon — We have determined for it phases, until it returns [appearing] like the old date-stalk.</div>
          </div>

          <div class="verse-block">
            <span class="verse-number">40</span>
            <div class="verse-arabic">لَا الشَّمْسُ يَنبَغِي لَهَا أَن تُدْرِكَ الْقَمَرَ وَلَا اللَّيْلُ سَابِقُ النَّهَارِ وَكُلٌّ فِي فَلَكٍ يَسْبَحُونَ</div>
            <div class="verse-english">It is not allowable for the sun to reach the moon, nor does the night overtake the day, but each, in an orbit, is swimming.</div>
          </div>

          <div class="verse-block">
            <span class="verse-number">41</span>
            <div class="verse-arabic">وَآيَةٌ لَّهُمْ أَنَّا حَمَلْنَا ذُرِّيَّتَهُمْ فِي الْفُلْكِ الْمَشْحُونِ</div>
            <div class="verse-english">And a sign for them is that We carried their forefathers in a laden ship.</div>
          </div>

          <div class="verse-block">
            <span class="verse-number">42</span>
            <div class="verse-arabic">وَخَلَقْنَا لَهُم مِّن مِّثْلِهِ مَا يَرْكَبُونَ</div>
            <div class="verse-english">And We created for them from the likes of it that which they ride.</div>
          </div>

          <div class="verse-block">
            <span class="verse-number">43</span>
            <div class="verse-arabic">وَإِن نَّشَأْ نُغْرِقْهُمْ فَلَا صَرِيخَ لَهُمْ وَلَا هُمْ يُنقَذُونَ</div>
            <div class="verse-english">And if We will, We can drown them; then no one responding to a cry would there be for them, nor would they be saved —</div>
          </div>

          <div class="verse-block">
            <span class="verse-number">44</span>
            <div class="verse-arabic">إِلَّا رَحْمَةً مِّنَّا وَمَتَاعًا إِلَىٰ حِينٍ</div>
            <div class="verse-english">Except as a mercy from Us and provision for a time.</div>
          </div>

          <div class="verse-block">
            <span class="verse-number">45</span>
            <div class="verse-arabic">وَإِذَا قِيلَ لَهُمُ اتَّقُوا مَا بَيْنَ أَيْدِيكُمْ وَمَا خَلْفَكُمْ لَعَلَّكُمْ تُرْحَمُونَ</div>
            <div class="verse-english">But when it is said to them: "Fear what is before you and what is behind you that perhaps you will receive mercy" —</div>
          </div>

          <div class="verse-block">
            <span class="verse-number">46</span>
            <div class="verse-arabic">وَمَا تَأْتِيهِم مِّنْ آيَةٍ مِّنْ آيَاتِ رَبِّهِمْ إِلَّا كَانُوا عَنْهَا مُعْرِضِينَ</div>
            <div class="verse-english">No sign comes to them from the signs of their Lord except that they are from it turning away.</div>
          </div>

          <div class="verse-block">
            <span class="verse-number">47</span>
            <div class="verse-arabic">وَإِذَا قِيلَ لَهُمْ أَنفِقُوا مِمَّا رَزَقَكُمُ اللَّهُ قَالَ الَّذِينَ كَفَرُوا لِلَّذِينَ آمَنُوا أَنُطْعِمُ مَن لَّوْ يَشَاءُ اللَّهُ أَطْعَمَهُ إِنْ أَنتُمْ إِلَّا فِي ضَلَالٍ مُّبِينٍ</div>
            <div class="verse-english">And when it is said to them: "Spend from that which Allah has provided for you," those who disbelieve say to those who believe: "Should we feed one whom, if Allah had willed, He would have fed? You are not but in clear error."</div>
          </div>

          <div class="section-divider">· · · · · ·</div>
          <p style="text-align:center;color:var(--muted);font-size:.9rem;margin-bottom:24px;"><em>The Day of Resurrection — Verses 48–68</em></p>

          <div class="verse-block">
            <span class="verse-number">48</span>
            <div class="verse-arabic">وَيَقُولُونَ مَتَىٰ هَٰذَا الْوَعْدُ إِن كُنتُمْ صَادِقِينَ</div>
            <div class="verse-english">And they say: "When is this promise, if you should be truthful?"</div>
          </div>

          <div class="verse-block">
            <span class="verse-number">49</span>
            <div class="verse-arabic">مَا يَنظُرُونَ إِلَّا صَيْحَةً وَاحِدَةً تَأْخُذُهُمْ وَهُمْ يَخِصِّمُونَ</div>
            <div class="verse-english">They do not await except one blast which will seize them while they are disputing.</div>
          </div>

          <div class="verse-block">
            <span class="verse-number">50</span>
            <div class="verse-arabic">فَلَا يَسْتَطِيعُونَ تَوْصِيَةً وَلَا إِلَىٰ أَهْلِهِمْ يَرْجِعُونَ</div>
            <div class="verse-english">And they will not be able [to make] a will, nor to their people can they return.</div>
          </div>

          <div class="verse-block">
            <span class="verse-number">51</span>
            <div class="verse-arabic">وَنُفِخَ فِي الصُّورِ فَإِذَا هُم مِّنَ الْأَجْدَاثِ إِلَىٰ رَبِّهِمْ يَنسِلُونَ</div>
            <div class="verse-english">And the Horn will be blown; and at once from the graves to their Lord they will hasten.</div>
          </div>

          <div class="verse-block">
            <span class="verse-number">52</span>
            <div class="verse-arabic">قَالُوا يَا وَيْلَنَا مَن بَعَثَنَا مِن مَّرْقَدِنَا هَٰذَا مَا وَعَدَ الرَّحْمَـٰنُ وَصَدَقَ الْمُرْسَلُونَ</div>
            <div class="verse-english">They will say: "O woe to us! Who has raised us up from our sleeping place?" — [The reply will be]: "This is what the Most Merciful had promised, and the messengers told the truth."</div>
          </div>

          <div class="verse-block">
            <span class="verse-number">53</span>
            <div class="verse-arabic">إِن كَانَتْ إِلَّا صَيْحَةً وَاحِدَةً فَإِذَا هُمْ جَمِيعٌ لَّدَيْنَا مُحْضَرُونَ</div>
            <div class="verse-english">It will not be but one shout, and at once they are all brought present before Us.</div>
          </div>

          <div class="verse-block">
            <span class="verse-number">54</span>
            <div class="verse-arabic">فَالْيَوْمَ لَا تُظْلَمُ نَفْسٌ شَيْئًا وَلَا تُجْزَوْنَ إِلَّا مَا كُنتُمْ تَعْمَلُونَ</div>
            <div class="verse-english">So today no soul will be wronged at all, and you will not be recompensed except for what you used to do.</div>
          </div>

          <div class="verse-block">
            <span class="verse-number">55</span>
            <div class="verse-arabic">إِنَّ أَصْحَابَ الْجَنَّةِ الْيَوْمَ فِي شُغُلٍ فَاكِهُونَ</div>
            <div class="verse-english">Indeed the companions of Paradise, that Day, will be amused in [joyful] occupation —</div>
          </div>

          <div class="verse-block">
            <span class="verse-number">56</span>
            <div class="verse-arabic">هُمْ وَأَزْوَاجُهُمْ فِي ظِلَالٍ عَلَى الْأَرَائِكِ مُتَّكِئُونَ</div>
            <div class="verse-english">They and their spouses — in shade, reclining on adorned couches.</div>
          </div>

          <div class="verse-block">
            <span class="verse-number">57</span>
            <div class="verse-arabic">لَهُمْ فِيهَا فَاكِهَةٌ وَلَهُم مَّا يَدَّعُونَ</div>
            <div class="verse-english">For them therein is fruit, and for them is whatever they request [or claim].</div>
          </div>

          <div class="verse-block">
            <span class="verse-number">58</span>
            <div class="verse-arabic">سَلَامٌ قَوْلًا مِّن رَّبٍّ رَّحِيمٍ</div>
            <div class="verse-english">[And] "Peace," a word from a Merciful Lord.</div>
          </div>

          <div class="verse-block">
            <span class="verse-number">59</span>
            <div class="verse-arabic">وَامْتَازُوا الْيَوْمَ أَيُّهَا الْمُجْرِمُونَ</div>
            <div class="verse-english">[Then He will say]: "But stand apart today, you criminals."</div>
          </div>

          <div class="verse-block">
            <span class="verse-number">60</span>
            <div class="verse-arabic">أَلَمْ أَعْهَدْ إِلَيْكُمْ يَا بَنِي آدَمَ أَن لَّا تَعْبُدُوا الشَّيْطَانَ إِنَّهُ لَكُمْ عَدُوٌّ مُّبِينٌ</div>
            <div class="verse-english">"Did I not enjoin upon you, O children of Adam, that you not worship Satan — [for] indeed, he is to you a clear enemy —"</div>
          </div>

          <div class="verse-block">
            <span class="verse-number">61</span>
            <div class="verse-arabic">وَأَنِ اعْبُدُونِي هَٰذَا صِرَاطٌ مُّسْتَقِيمٌ</div>
            <div class="verse-english">"And that you worship [only] Me? This is a straight path."</div>
          </div>

          <div class="verse-block">
            <span class="verse-number">62</span>
            <div class="verse-arabic">وَلَقَدْ أَضَلَّ مِنكُمْ جِبِلًّا كَثِيرًا أَفَلَمْ تَكُونُوا تَعْقِلُونَ</div>
            <div class="verse-english">"And he had already led astray from among you much of creation, so did you not use reason?"</div>
          </div>

          <div class="verse-block">
            <span class="verse-number">63</span>
            <div class="verse-arabic">هَٰذِهِ جَهَنَّمُ الَّتِي كُنتُمْ تُوعَدُونَ</div>
            <div class="verse-english">"This is the Hellfire which you were promised."</div>
          </div>

          <div class="verse-block">
            <span class="verse-number">64</span>
            <div class="verse-arabic">اصْلَوْهَا الْيَوْمَ بِمَا كُنتُمْ تَكْفُرُونَ</div>
            <div class="verse-english">"[Enter to] burn therein today for what you used to deny."</div>
          </div>

          <div class="verse-block">
            <span class="verse-number">65</span>
            <div class="verse-arabic">الْيَوْمَ نَخْتِمُ عَلَىٰ أَفْوَاهِهِمْ وَتُكَلِّمُنَا أَيْدِيهِمْ وَتَشْهَدُ أَرْجُلُهُم بِمَا كَانُوا يَكْسِبُونَ</div>
            <div class="verse-english">That Day, We will seal over their mouths, and their hands will speak to Us, and their feet will testify about what they used to earn.</div>
          </div>

          <div class="verse-block">
            <span class="verse-number">66</span>
            <div class="verse-arabic">وَلَوْ نَشَاءُ لَطَمَسْنَا عَلَىٰ أَعْيُنِهِمْ فَاسْتَبَقُوا الصِّرَاطَ فَأَنَّىٰ يُبْصِرُونَ</div>
            <div class="verse-english">And if We willed, We could have obliterated their eyes, and they would race to [find] the path — and how could they see?</div>
          </div>

          <div class="verse-block">
            <span class="verse-number">67</span>
            <div class="verse-arabic">وَلَوْ نَشَاءُ لَمَسَخْنَاهُمْ عَلَىٰ مَكَانَتِهِمْ فَمَا اسْتَطَاعُوا مُضِيًّا وَلَا يَرْجِعُونَ</div>
            <div class="verse-english">And if We willed, We could have deformed them, [paralyzing them] in their places so they would not be able to proceed, nor could they return.</div>
          </div>

          <div class="verse-block">
            <span class="verse-number">68</span>
            <div class="verse-arabic">وَمَن نُّعَمِّرْهُ نُنَكِّسْهُ فِي الْخَلْقِ أَفَلَا يَعْقِلُونَ</div>
            <div class="verse-english">And he whom We grant long life — We cause him to decline in power. Will they not then understand?</div>
          </div>

          <div class="section-divider">· · · · · ·</div>
          <p style="text-align:center;color:var(--muted);font-size:.9rem;margin-bottom:24px;"><em>The Quran and Allah's Power — Verses 69–83</em></p>

          <div class="verse-block">
            <span class="verse-number">69</span>
            <div class="verse-arabic">وَمَا عَلَّمْنَاهُ الشِّعْرَ وَمَا يَنبَغِي لَهُ إِنْ هُوَ إِلَّا ذِكْرٌ وَقُرْآنٌ مُّبِينٌ</div>
            <div class="verse-english">And We did not give him [the Prophet] knowledge of poetry, nor is it befitting for him. It is not but a message and a clear Quran.</div>
          </div>

          <div class="verse-block">
            <span class="verse-number">70</span>
            <div class="verse-arabic">لِيُنذِرَ مَن كَانَ حَيًّا وَيَحِقَّ الْقَوْلُ عَلَى الْكَافِرِينَ</div>
            <div class="verse-english">To warn whoever is alive and justify the word [of punishment] against the disbelievers.</div>
          </div>

          <div class="verse-block">
            <span class="verse-number">71</span>
            <div class="verse-arabic">أَوَلَمْ يَرَوْا أَنَّا خَلَقْنَا لَهُمْ مِمَّا عَمِلَتْ أَيْدِينَا أَنْعَامًا فَهُمْ لَهَا مَالِكُونَ</div>
            <div class="verse-english">Do they not see that We have created for them from what Our hands have made — grazing livestock — and they are their owners?</div>
          </div>

          <div class="verse-block">
            <span class="verse-number">72</span>
            <div class="verse-arabic">وَذَلَّلْنَاهَا لَهُمْ فَمِنْهَا رَكُوبُهُمْ وَمِنْهَا يَأْكُلُونَ</div>
            <div class="verse-english">And We have tamed them for them, so some of them they ride, and some of them they eat.</div>
          </div>

          <div class="verse-block">
            <span class="verse-number">73</span>
            <div class="verse-arabic">وَلَهُمْ فِيهَا مَنَافِعُ وَمَشَارِبُ أَفَلَا يَشْكُرُونَ</div>
            <div class="verse-english">And for them therein are [other] benefits and drinks, so will they not be grateful?</div>
          </div>

          <div class="verse-block">
            <span class="verse-number">74</span>
            <div class="verse-arabic">وَاتَّخَذُوا مِن دُونِ اللَّهِ آلِهَةً لَّعَلَّهُمْ يُنصَرُونَ</div>
            <div class="verse-english">But they have taken besides Allah [false] deities that perhaps they would be helped.</div>
          </div>

          <div class="verse-block">
            <span class="verse-number">75</span>
            <div class="verse-arabic">لَا يَسْتَطِيعُونَ نَصْرَهُمْ وَهُمْ لَهُمْ جُندٌ مُّحْضَرُونَ</div>
            <div class="verse-english">They are not able to help them, and they [themselves] are for them soldiers in attendance.</div>
          </div>

          <div class="verse-block">
            <span class="verse-number">76</span>
            <div class="verse-arabic">فَلَا يَحْزُنكَ قَوْلُهُمْ إِنَّا نَعْلَمُ مَا يُسِرُّونَ وَمَا يُعْلِنُونَ</div>
            <div class="verse-english">So let not their speech grieve you. Indeed, We know what they conceal and what they declare.</div>
          </div>

          <div class="verse-block">
            <span class="verse-number">77</span>
            <div class="verse-arabic">أَوَلَمْ يَرَ الْإِنسَانُ أَنَّا خَلَقْنَاهُ مِن نُّطْفَةٍ فَإِذَا هُوَ خَصِيمٌ مُّبِينٌ</div>
            <div class="verse-english">Does man not consider that We created him from a [mere] sperm-drop — then at once he is a clear adversary?</div>
          </div>

          <div class="verse-block">
            <span class="verse-number">78</span>
            <div class="verse-arabic">وَضَرَبَ لَنَا مَثَلًا وَنَسِيَ خَلْقَهُ قَالَ مَن يُحْيِي الْعِظَامَ وَهِيَ رَمِيمٌ</div>
            <div class="verse-english">And he presents for Us an example and forgets his [own] creation. He says: "Who will give life to bones while they are disintegrated?"</div>
          </div>

          <div class="verse-block">
            <span class="verse-number">79</span>
            <div class="verse-arabic">قُلْ يُحْيِيهَا الَّذِي أَنشَأَهَا أَوَّلَ مَرَّةٍ وَهُوَ بِكُلِّ خَلْقٍ عَلِيمٌ</div>
            <div class="verse-english">Say: "He will give them life who produced them the first time; and He is, of all creation, Knowing."</div>
          </div>

          <div class="verse-block">
            <span class="verse-number">80</span>
            <div class="verse-arabic">الَّذِي جَعَلَ لَكُم مِّنَ الشَّجَرِ الْأَخْضَرِ نَارًا فَإِذَا أَنتُم مِّنْهُ تُوقِدُونَ</div>
            <div class="verse-english">[It is] He who made for you from the green tree, fire, and then from it you ignite.</div>
          </div>

          <div class="verse-block">
            <span class="verse-number">81</span>
            <div class="verse-arabic">أَوَلَيْسَ الَّذِي خَلَقَ السَّمَاوَاتِ وَالْأَرْضَ بِقَادِرٍ عَلَىٰ أَن يَخْلُقَ مِثْلَهُمْ بَلَىٰ وَهُوَ الْخَلَّاقُ الْعَلِيمُ</div>
            <div class="verse-english">Is not He who created the heavens and the earth Able to create the likes of them? Yes, [it is so]; and He is the Knowing Creator.</div>
          </div>

          <div class="verse-block">
            <span class="verse-number">82</span>
            <div class="verse-arabic">إِنَّمَا أَمْرُهُ إِذَا أَرَادَ شَيْئًا أَن يَقُولَ لَهُ كُن فَيَكُونُ</div>
            <div class="verse-english">His command is only when He intends a thing that He says to it: "Be," and it is.</div>
          </div>

          <div class="verse-block" style="background:rgba(10,110,79,.03);border-radius:8px;padding:20px;border-bottom:none;">
            <span class="verse-number">83</span>
            <div class="verse-arabic" style="font-size:2rem;">فَسُبْحَانَ الَّذِي بِيَدِهِ مَلَكُوتُ كُلِّ شَيْءٍ وَإِلَيْهِ تُرْجَعُونَ</div>
            <div class="verse-transliteration">Fa-subhanal-ladhee biyadihi malakutu kulli shay'in wa ilayhi turja'oon</div>
            <div class="verse-english" style="font-size:1rem;font-weight:600;color:var(--charcoal);">So exalted is He in whose hand is the realm of all things, and to Him you will be returned.</div>
          </div>

          <div class="section-divider" style="font-size:1.5rem;">🤲</div>

          <!-- WHEN TO READ -->
          <h2>When to Recite Surah Yaseen</h2>
          <ul>
            <li><strong>Every morning:</strong> For blessings throughout the day</li>
            <li><strong>On Fridays (Jumu'ah):</strong> The Prophet ﷺ especially recommended its recitation on Fridays</li>
            <li><strong>Before sleeping:</strong> For protection and peace through the night</li>
            <li><strong>For the dying:</strong> Scholars recommend reciting near someone approaching death to ease their final moments</li>
            <li><strong>At times of difficulty:</strong> Many Muslims recite it when facing hardship, illness, or distress</li>
          </ul>

          <!-- FAQ -->
          <h2>Frequently Asked Questions</h2>

          <div class="faq-item">
            <div class="faq-q"><span>What is Surah Yaseen?</span> <i class="fas fa-chevron-down"></i></div>
            <div class="faq-a">Surah Yaseen (Ya-Sin) is the 36th chapter of the Holy Quran, with 83 verses. It was revealed in Mecca (Makki) and is called the "Heart of the Quran" by the Prophet Muhammad ﷺ. It covers themes of prophethood, resurrection, the signs of Allah in creation, and the story of the People of the Town.</div>
          </div>

          <div class="faq-item">
            <div class="faq-q"><span>What are the benefits of reading Surah Yaseen?</span> <i class="fas fa-chevron-down"></i></div>
            <div class="faq-a">The Prophet ﷺ said its recitation equals reading the entire Quran 10 times (Tirmidhi). It is also narrated that "Whoever reads Surah Yaseen in a single night seeking Allah's pleasure, Allah will forgive him" (Abu Dawud). Scholars also recommend it for the dying person, for fulfillment of needs, and as a means of continuous blessings.</div>
          </div>

          <div class="faq-item">
            <div class="faq-q"><span>How many verses does Surah Yaseen have?</span> <i class="fas fa-chevron-down"></i></div>
            <div class="faq-a">Surah Yaseen has exactly 83 verses (ayat) and is the 36th surah of the Quran. It contains 729 words and belongs to the Makki surahs, revealed before the Prophet's migration to Medina.</div>
          </div>

          <div class="faq-item">
            <div class="faq-q"><span>Why is Surah Yaseen called the Heart of the Quran?</span> <i class="fas fa-chevron-down"></i></div>
            <div class="faq-a">It is called the Heart of the Quran because it encapsulates the core themes of the entire Quran — Tawheed (the Oneness of Allah), prophethood, resurrection, and the consequences of belief and disbelief. Just as the heart is central to the body, Surah Yaseen is central to the Quran's message.</div>
          </div>

          <div class="faq-item">
            <div class="faq-q"><span>Is Surah Yaseen Makki or Madani?</span> <i class="fas fa-chevron-down"></i></div>
            <div class="faq-a">Surah Yaseen is a Makki surah — it was revealed in Mecca before the Hijra (migration to Medina). This is the scholarly consensus, with a small minority view that a few verses were revealed in Medina.</div>
          </div>

          <div class="highlight-box" style="margin-top:40px;">
            <strong>Want to learn Quran recitation properly?</strong><br>
            At NoorPath Academy, our certified tutors teach correct Tajweed — so you can recite Surah Yaseen and the entire Quran with proper pronunciation. <a href="/online-quran-classes#cta" style="color:var(--emerald);font-weight:700;">Book your free trial class →</a>
          </div>
        </div>

        <!-- Related Articles -->
        <div style="margin-top:56px;border-top:1px solid var(--border);padding-top:40px;">
          <h3 style="font-size:1.2rem;font-weight:700;margin-bottom:20px;">Related Articles</h3>
          <div class="row g-3">
            <div class="col-sm-6">
              <a href="/blog/ayatul-kursi-arabic-english-benefits" style="text-decoration:none;">
                <div class="blog-card">
                  <div class="blog-card-header" style="padding:20px 24px;"><span class="blog-tag">Quran</span><div style="color:var(--white);font-weight:700;font-size:.95rem;margin-top:8px;">Ayatul Kursi — Full Arabic with Benefits</div></div>
                  <div class="blog-card-body"><span class="read-more">Read <i class="fas fa-arrow-right ms-1"></i></span></div>
                </div>
              </a>
            </div>
            <div class="col-sm-6">
              <a href="/blog/99-names-of-allah-asmaul-husna" style="text-decoration:none;">
                <div class="blog-card">
                  <div class="blog-card-header" style="padding:20px 24px;"><span class="blog-tag">Islamic</span><div style="color:var(--white);font-weight:700;font-size:.95rem;margin-top:8px;">99 Names of Allah (Asmaul Husna)</div></div>
                  <div class="blog-card-body"><span class="read-more">Read <i class="fas fa-arrow-right ms-1"></i></span></div>
                </div>
              </a>
            </div>
            <div class="col-sm-6">
              <a href="/blog/tajweed-rules-complete-guide" style="text-decoration:none;">
                <div class="blog-card">
                  <div class="blog-card-header" style="padding:20px 24px;"><span class="blog-tag">Tajweed</span><div style="color:var(--white);font-weight:700;font-size:.95rem;margin-top:8px;">Tajweed Rules for Beginners</div></div>
                  <div class="blog-card-body"><span class="read-more">Read <i class="fas fa-arrow-right ms-1"></i></span></div>
                </div>
              </a>
            </div>
            <div class="col-sm-6">
              <a href="/blog/how-to-memorize-quran-faster" style="text-decoration:none;">
                <div class="blog-card">
                  <div class="blog-card-header" style="padding:20px 24px;"><span class="blog-tag">Hifz</span><div style="color:var(--white);font-weight:700;font-size:.95rem;margin-top:8px;">How to Memorize Quran Faster</div></div>
                  <div class="blog-card-body"><span class="read-more">Read <i class="fas fa-arrow-right ms-1"></i></span></div>
                </div>
              </a>`,
  },
  "tajweed-rules-complete-guide": {
    style: `.article-body { font-size: 1.05rem; line-height: 1.85; color: #374151; }
    .article-body h2 { font-size: 1.5rem; font-weight: 700; color: var(--charcoal); margin: 40px 0 16px; }
    .article-body h3 { font-size: 1.2rem; font-weight: 700; color: var(--emerald); margin: 28px 0 12px; }
    .article-body p { margin-bottom: 18px; }
    .article-body ul, .article-body ol { margin-bottom: 18px; padding-left: 24px; }
    .article-body li { margin-bottom: 8px; }
    .rule-card { background: var(--ivory); border: 1px solid var(--border); border-left: 4px solid var(--emerald); border-radius: 10px; padding: 20px 24px; margin: 16px 0; }
    .rule-title { font-weight: 700; color: var(--emerald); margin-bottom: 8px; font-size: 1rem; }
    .hadith-box { background: linear-gradient(135deg,#0a3d28,#0d5436); color: #fff; border-radius: 12px; padding: 24px; margin: 24px 0; }
    .highlight-box { background: rgba(10,110,79,.06); border-left: 4px solid var(--emerald); border-radius: 8px; padding: 20px 24px; margin: 24px 0; }`,
    content: `<div class="hadith-box">
            <p style="margin:0;font-size:1.05rem;">"And recite the Quran with measured recitation (Tarteel)."<br><span style="font-size:.85rem;opacity:.75;font-style:normal;">— Quran 73:4 (Surah Al-Muzzammil)</span></p>
          </div>

          <p>Tajweed (تجويد) literally means "to make better" or "to improve." In Quranic science, it refers to the set of rules that govern how we pronounce each letter and word of the Quran. Reciting with Tajweed is <strong>Wajib (obligatory)</strong> for every Muslim.</p>

          <p>This guide covers all the essential Tajweed rules in simple English — perfect for beginners who want to understand Tajweed before or during their studies.</p>

          <h2>Why is Tajweed Important?</h2>
          <p>Every Arabic letter has a specific articulation point (Makhraj) and characteristics (Sifaat). Pronouncing a letter from the wrong point changes the letter — and can change the meaning of Allah's words.</p>
          <p>For example: the letter ق (Qaf) and ك (Kaf) look similar but come from completely different parts of the throat. Confusing them in recitation is incorrect.</p>

          <h2>1. Makharij al-Huruf (Articulation Points)</h2>
          <p>Every Arabic letter comes from a specific point in the mouth, throat, or lips. These are called Makharij (plural of Makhraj).</p>
          <p>There are <strong>17 Makharij</strong> grouped into <strong>5 regions</strong>:</p>
          <ul>
            <li><strong>Al-Jawf (الجوف):</strong> Empty space — produces the long vowel letters (Alif, Waw, Ya)</li>
            <li><strong>Al-Halq (الحلق):</strong> Throat — produces ء ه ع غ خ ح</li>
            <li><strong>Al-Lisan (اللسان):</strong> Tongue — produces 18 letters from various tongue positions</li>
            <li><strong>Ash-Shafatan (الشفتان):</strong> Two lips — produces ب م و ف</li>
            <li><strong>Al-Khayshum (الخيشوم):</strong> Nasal passage — produces Ghunnah (the nasal sound)</li>
          </ul>

          <h2>2. Noon Sakinah & Tanween Rules</h2>
          <p>When a Noon (ن) has a Sukoon (no vowel), or when Tanween appears, one of four rules applies depending on the next letter:</p>

          <div class="rule-card">
            <div class="rule-title">1. Izhar (إظهار) — Clear Pronunciation</div>
            <p style="margin:0;color:var(--muted);font-size:.92rem;">When Noon Sakinah or Tanween is followed by one of the 6 throat letters (ء ه ع غ ح خ), pronounce the Noon clearly without blending or nasalisation. Example: مَنْ آمَنَ (Man Aamana)</p>
          </div>

          <div class="rule-card">
            <div class="rule-title">2. Idgham (إدغام) — Merging</div>
            <p style="margin:0;color:var(--muted);font-size:.92rem;">When followed by the letters (ي ر م ل و ن), the Noon merges into the next letter. With Ghunnah for (ي ن م و) and without Ghunnah for (ر ل). Example: مَن يَقُولُ (Man Yaqool → Ma Yaqool)</p>
          </div>

          <div class="rule-card">
            <div class="rule-title">3. Ikhfa (إخفاء) — Concealment</div>
            <p style="margin:0;color:var(--muted);font-size:.92rem;">When followed by 15 specific letters, the Noon is partially hidden with Ghunnah (nasal sound) held for 2 counts. This is the most common rule. Example: مَن جَاءَ (Man Jaa'a → nasalised M)</p>
          </div>

          <div class="rule-card">
            <div class="rule-title">4. Iqlab (إقلاب) — Conversion</div>
            <p style="margin:0;color:var(--muted);font-size:.92rem;">When followed only by the letter ب (Ba), the Noon converts to a Meem sound with Ghunnah. Example: مِنْ بَعْدِ (Min Ba'di → Mim Ba'di)</p>
          </div>

          <h2>3. Madd Rules (Prolongation)</h2>
          <p>Madd refers to prolonging a vowel sound. There are two categories:</p>

          <div class="rule-card">
            <div class="rule-title">Madd Asli (Natural Madd) — 2 counts</div>
            <p style="margin:0;color:var(--muted);font-size:.92rem;">The basic prolongation when a long vowel (Alif, Waw, Ya Madd) is not followed by a Hamzah or Sukoon. Always held for exactly 2 counts.</p>
          </div>

          <div class="rule-card">
            <div class="rule-title">Madd Munfasil — 4 or 5 counts</div>
            <p style="margin:0;color:var(--muted);font-size:.92rem;">When a long vowel at the end of a word is followed by Hamzah at the beginning of the next word. Held for 4 or 5 counts depending on recitation style.</p>
          </div>

          <div class="rule-card">
            <div class="rule-title">Madd Muttasil — 4, 5, or 6 counts</div>
            <p style="margin:0;color:var(--muted);font-size:.92rem;">When a long vowel is followed immediately by a Hamzah in the same word. This is obligatory Madd — must be extended. Example: جَاءَ (Jaa'a)</p>
          </div>

          <div class="rule-card">
            <div class="rule-title">Madd Lazim — 6 counts</div>
            <p style="margin:0;color:var(--muted);font-size:.92rem;">When a long vowel is followed by a Shaddah or a permanent Sukoon. Must always be held for 6 counts. Found in certain letters at the beginning of Surahs.</p>
          </div>

          <h2>4. Qalqalah (Bouncing Sound)</h2>
          <p>Qalqalah means a slight echo or "bouncing" sound that occurs when one of the 5 Qalqalah letters (ق ط ب ج د — Qatb Jad) has a Sukoon. It is stronger when stopping on that letter.</p>
          <p>Example: In بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيم — the "D" in "Ahmad" would have Qalqalah if it had a Sukoon.</p>

          <h2>5. Ghunnah (Nasalisation)</h2>
          <p>Ghunnah is the nasal sound produced through the nose when reciting Noon (ن) or Meem (م) with Shaddah, or in Ikhfa and Idgham situations. It should be held for exactly 2 counts.</p>

          <h2>6. Waqf (Stopping Rules)</h2>
          <p>Waqf refers to when and how to pause when reciting the Quran. Common Waqf marks include:</p>
          <ul>
            <li><strong>م (Waqf Lazim):</strong> Compulsory stop — stopping is obligatory here</li>
            <li><strong>لا (Waqf Mamnu):</strong> Stop prohibited — must not stop here</li>
            <li><strong>ج (Waqf Jaiz):</strong> Permissible stop — may stop or continue</li>
            <li><strong>ط (Waqf Mutlaq):</strong> Absolute stop — preferable to stop here</li>
            <li><strong>ص (Waqf Mujawwaz):</strong> Permitted with pause — may stop</li>
          </ul>

          <h2>How to Learn Tajweed Online</h2>
          <p>Reading about Tajweed rules helps, but <strong>Tajweed must be learned orally</strong> — through listening to a qualified teacher and being corrected in real time. No book or video can fully replace a live teacher.</p>

          <div class="highlight-box">
            <strong>The best approach:</strong> Take live 1-on-1 online Tajweed classes with a certified tutor who holds an Ijazah chain. At <strong>NoorPath Academy</strong>, our tutors not only know the rules — they have the experience to identify and correct your specific pronunciation errors.
            <br><br>
            <a href="/courses/tajweed-classes-online" style="color:var(--emerald);font-weight:700;">View our Tajweed course →</a>
          </div>

          <h2>Summary: Key Tajweed Rules</h2>
          <div style="overflow-x:auto;margin:24px 0;">
            <table style="width:100%;border-collapse:collapse;font-size:.9rem;">
              <thead><tr style="background:var(--emerald);color:#fff;"><th style="padding:10px 16px;text-align:left;">Rule</th><th style="padding:10px 16px;text-align:left;">Trigger</th><th style="padding:10px 16px;text-align:left;">How long</th></tr></thead>
              <tbody>
                <tr style="background:var(--ivory);"><td style="padding:10px 16px;border-bottom:1px solid var(--border);">Madd Asli</td><td style="padding:10px 16px;border-bottom:1px solid var(--border);">Long vowel, no Hamzah/Sukoon after</td><td style="padding:10px 16px;border-bottom:1px solid var(--border);">2 counts</td></tr>
                <tr><td style="padding:10px 16px;border-bottom:1px solid var(--border);">Madd Muttasil</td><td style="padding:10px 16px;border-bottom:1px solid var(--border);">Long vowel + Hamzah (same word)</td><td style="padding:10px 16px;border-bottom:1px solid var(--border);">4–6 counts</td></tr>
                <tr style="background:var(--ivory);"><td style="padding:10px 16px;border-bottom:1px solid var(--border);">Ghunnah</td><td style="padding:10px 16px;border-bottom:1px solid var(--border);">Noon/Meem with Shaddah</td><td style="padding:10px 16px;border-bottom:1px solid var(--border);">2 counts</td></tr>
                <tr><td style="padding:10px 16px;border-bottom:1px solid var(--border);">Ikhfa</td><td style="padding:10px 16px;border-bottom:1px solid var(--border);">Noon Sakinah + 15 letters</td><td style="padding:10px 16px;border-bottom:1px solid var(--border);">2 counts (nasal)</td></tr>
                <tr style="background:var(--ivory);"><td style="padding:10px 16px;">Madd Lazim</td><td style="padding:10px 16px;">Long vowel + permanent Sukoon/Shaddah</td><td style="padding:10px 16px;">6 counts</td></tr>
              </tbody>
            </table>
          </div>

          <div class="highlight-box">
            Ready to master Tajweed with a certified tutor? <a href="/courses/tajweed-classes-online" style="color:var(--emerald);font-weight:700;">Book your free Tajweed trial class</a> at NoorPath Academy — no payment required.
          </div>
        </div>

        <div style="margin-top:56px;border-top:1px solid var(--border);padding-top:40px;">
          <h3 style="font-size:1.2rem;font-weight:700;margin-bottom:20px;">Related Articles</h3>
          <div class="row g-3">
            <div class="col-sm-6">
              <a href="/blog/how-to-teach-quran-to-kids" style="text-decoration:none;">
                <div class="blog-card">
                  <div class="blog-card-header" style="padding:20px 24px;"><span class="blog-tag">Parenting</span><div style="color:var(--white);font-weight:700;font-size:.95rem;margin-top:8px;">How to Teach Quran to Kids: Complete Guide</div></div>
                  <div class="blog-card-body"><span class="read-more">Read <i class="fas fa-arrow-right ms-1"></i></span></div>
                </div>
              </a>
            </div>
            <div class="col-sm-6">
              <a href="/blog/benefits-of-online-quran-classes" style="text-decoration:none;">
                <div class="blog-card">
                  <div class="blog-card-header" style="padding:20px 24px;"><span class="blog-tag">Online Learning</span><div style="color:var(--white);font-weight:700;font-size:.95rem;margin-top:8px;">10 Benefits of Online Quran Classes</div></div>
                  <div class="blog-card-body"><span class="read-more">Read <i class="fas fa-arrow-right ms-1"></i></span></div>
                </div>
              </a>`,
  },

  "surah-al-kahf-arabic-english-friday": {
    style: ``,
    content: `
<div class="highlight-box">
  <strong>The Prophet Muhammad ﷺ said:</strong><br/>
  <em>"Whoever reads Surah Al-Kahf on Friday, a light will shine for him between the two Fridays."</em>
  <br/><span style="font-size:.85rem;color:var(--muted)">— Al-Hakim (Sahih), Bayhaqi</span>
</div>

<h2>What is Surah Al-Kahf?</h2>
<p>Surah Al-Kahf (سُورَةُ الْكَهْف — The Cave) is the 18th chapter of the Holy Quran. It contains <strong>110 verses (ayaat)</strong> and was revealed in Makkah. It is one of the most frequently recited surahs in the Quran, particularly on <strong>Fridays (Yawm al-Jumu'ah)</strong>.</p>
<p>The surah contains four major stories — each a profound lesson about faith, wealth, knowledge, and power — and it begins and ends with praise of Allah. Scholars consider it one of the most comprehensive surahs in the entire Quran.</p>

<h2>Why Read Surah Al-Kahf on Friday?</h2>
<p>Multiple authentic hadiths establish the great virtue of reciting Surah Al-Kahf specifically on Fridays:</p>
<div class="highlight-box">
  <strong>Hadith 1:</strong> "Whoever reads Surah Al-Kahf on Friday, a light will shine for him between the two Fridays." — Al-Hakim (Sahih)
</div>
<div class="highlight-box">
  <strong>Hadith 2:</strong> "Whoever reads the first 10 verses of Surah Al-Kahf will be protected from the Dajjal." — Sahih Muslim 809
</div>
<div class="highlight-box">
  <strong>Hadith 3:</strong> "Whoever reads the last 10 verses of Surah Al-Kahf will be protected from the Fitnah of the Dajjal." — Sahih Muslim 809
</div>
<p>The <strong>time window</strong> for Friday recitation: from Maghrib on Thursday night until Maghrib on Friday. The earlier you recite, the greater the light that will shine for you.</p>

<h2>The Four Stories of Surah Al-Kahf</h2>
<h3>Story 1: The People of the Cave (Ashaab al-Kahf) — Verses 9-26</h3>
<p>Young believers fled persecution by their people and took refuge in a cave. Allah caused them to sleep for 309 years, preserving them as a miracle. When they awoke, they found a changed world and their story became a sign of the resurrection.</p>
<p><strong>Lesson:</strong> Faith in Allah protects believers. Allah never abandons those who turn to Him.</p>

<h3>Story 2: The Two Gardeners — Verses 32-44</h3>
<p>A rich man with two beautiful gardens became arrogant and forgot to be grateful to Allah. His poor but faithful companion warned him, but the rich man refused to listen. His gardens were destroyed by a calamity.</p>
<p><strong>Lesson:</strong> Wealth and success are trials from Allah, not signs of His approval. Gratitude (shukr) protects wealth; arrogance destroys it.</p>

<h3>Story 3: Musa and Al-Khidr — Verses 60-82</h3>
<p>Prophet Musa ﷺ travelled to meet a wise servant of Allah (Al-Khidr) to learn from him. Al-Khidr performed three seemingly illogical actions — which later proved to be tests of wisdom over apparent knowledge.</p>
<p><strong>Lesson:</strong> Divine wisdom surpasses human understanding. Patience with what you do not understand is a virtue.</p>

<h3>Story 4: Dhul-Qarnayn — Verses 83-98</h3>
<p>A powerful and just king travelled East and West, helping oppressed peoples. He built a great wall to protect people from Gog and Magog (Ya'juj and Ma'juj).</p>
<p><strong>Lesson:</strong> Power used justly, with submission to Allah, is a blessing. Earthly power is temporary.</p>

<h2>Surah Al-Kahf — First 10 Verses (Arabic)</h2>
<div class="arabic" style="font-size:1.5rem;line-height:2.8;text-align:center;padding:32px 24px;background:rgba(10,110,79,.04);border-radius:16px;border:1px solid rgba(10,110,79,.1);margin:24px 0;">
  بِسۡمِ اللّٰهِ الرَّحۡمٰنِ الرَّحِيۡمِ<br/>
  اَلۡحَمۡدُ لِلّٰهِ الَّذِىۡۤ اَنۡزَلَ عَلٰى عَبۡدِهِ الۡكِتٰبَ وَلَمۡ يَجۡعَل لَّهٗ عِوَجَا ؕ‏ ۝<br/>
  قَيِّمًا لِّيُنۡذِرَ بَاۡسًا شَدِيۡدًا مِّنۡ لَّدُنۡهُ وَيُبَشِّرَ الۡمُؤۡمِنِيۡنَ الَّذِيۡنَ يَعۡمَلُوۡنَ الصّٰلِحٰتِ اَنَّ لَهُمۡ اَجۡرًا حَسَنًا ۙ‏ ۝<br/>
  مَّاكِثِيۡنَ فِيۡهِ اَبَدًا ۙ‏ ۝
</div>

<h2>Benefits of Reciting Surah Al-Kahf</h2>
<ul>
  <li>Protection from the Fitnah (trial) of the Dajjal (Antichrist)</li>
  <li>A light that shines from one Friday to the next</li>
  <li>Forgiveness of sins between two Fridays</li>
  <li>Protection from Shaytan's whispers</li>
  <li>Understanding of the deeper wisdom behind trials in life</li>
</ul>

<div class="highlight-box" style="background:rgba(201,146,42,.08);border-color:var(--gold);">
  <strong>📚 Want to learn Quran recitation with Tajweed?</strong><br/>
  Our certified tutors teach Surah Al-Kahf and the full Quran with correct pronunciation. <a href="/online-quran-classes#cta" style="color:var(--emerald);font-weight:700;">Book your free trial class →</a>
</div>
    `,
  },

  "how-to-do-wudu-step-by-step": {
    style: ``,
    content: `
<div class="highlight-box">
  <strong>The Prophet ﷺ said:</strong><br/>
  <em>"Cleanliness is half of faith (Iman)."</em>
  <br/><span style="font-size:.85rem;color:var(--muted)">— Sahih Muslim 223</span>
</div>

<h2>What is Wudu?</h2>
<p>Wudu (وضوء — also spelt Wuzu or Wudhu) is the Islamic act of ritual purification (ablution) performed using clean water before Salah (prayer), touching the Quran, and certain other acts of worship. It is a Fard (obligatory) requirement — without valid Wudu, your prayer is not accepted.</p>
<p>Allah says in the Quran (5:6): <em>"O you who have believed, when you rise to [perform] prayer, wash your faces and your forearms to the elbows and wipe over your heads and wash your feet to the ankles."</em></p>

<h2>What Breaks Wudu?</h2>
<p>Before learning how to make Wudu, understand what <strong>invalidates</strong> it:</p>
<ul>
  <li>Passing wind, urine, or stool</li>
  <li>Loss of consciousness (sleep, fainting)</li>
  <li>Sexual discharge</li>
  <li>Direct skin contact with the opposite gender (according to some madhabs)</li>
</ul>

<h2>How to Do Wudu — Step by Step (with Duas)</h2>

<h3>Step 1: Make the Intention (Niyyah)</h3>
<p>Make the intention in your heart to purify yourself for the sake of Allah. You do not need to say it aloud — the intention is in the heart. This is a Fard step.</p>

<h3>Step 2: Say Bismillah</h3>
<div class="arabic" style="font-size:1.4rem;text-align:center;padding:16px;margin:16px 0;">بِسْمِ اللهِ</div>
<p style="text-align:center;font-style:italic;color:var(--muted)">"Bismillah" — "In the name of Allah"</p>
<p>Begin by saying Bismillah. Some scholars consider this Sunnah; others Wajib (necessary).</p>

<h3>Step 3: Wash Hands (3 times)</h3>
<p>Wash both hands up to and including the wrists — three times each. Make sure water reaches between the fingers.</p>

<h3>Step 4: Rinse the Mouth (3 times)</h3>
<p>Take water into the mouth, swirl it around, and spit it out — three times. This is called Madmadah.</p>

<h3>Step 5: Clean the Nose (3 times)</h3>
<p>Sniff water into the nose and blow it out — three times. This is called Istinshaq. Use the left hand to blow the nose.</p>

<h3>Step 6: Wash the Face (3 times)</h3>
<p>Wash the entire face — from the hairline to the chin and from ear to ear — three times. Make sure water reaches every part.</p>
<div class="highlight-box">
  <strong>Dua when washing face:</strong><br/>
  <span style="font-family:'Amiri',serif;font-size:1.1rem;">اَللّٰهُمَّ بَيِّضۡ وَجۡهِیۡ يَوۡمَ تَبۡيَضُّ الۡوُجُوۡهُ وَلَا تُسَوِّدۡ وَجۡهِیۡ يَوۡمَ تَسۡوَدُّ الۡوُجُوۡهُ</span><br/>
  "O Allah, whiten my face on the Day when faces are whitened, and do not blacken my face on the Day when faces are blackened."
</div>

<h3>Step 7: Wash the Arms (3 times)</h3>
<p>Wash the right arm from the tips of the fingers up to and including the elbow — three times. Repeat for the left arm. Make sure water covers every part including the inner elbow.</p>

<h3>Step 8: Wipe the Head (Masah) — once</h3>
<p>Wet your hands and wipe over the entire head — front to back and back to front — once. This is called Masah al-Raas.</p>
<p>Then wipe the inner part of both ears with the index fingers and the outer part with the thumbs.</p>

<h3>Step 9: Wash the Feet (3 times)</h3>
<p>Wash the right foot from toes to and including the ankle — three times. Make sure water reaches between the toes. Repeat for the left foot.</p>

<h3>Step 10: Recite the Dua After Wudu</h3>
<div class="arabic" style="font-size:1.3rem;text-align:center;padding:20px;background:rgba(10,110,79,.04);border-radius:12px;margin:16px 0;">
  أَشۡهَدُ أَنۡ لَّآ إِلٰهَ إِلَّا اللّٰهُ وَحۡدَهٗ لَا شَرِيۡكَ لَهٗ وَأَشۡهَدُ أَنَّ مُحَمَّدًا عَبۡدُهٗ وَرَسُوۡلُهٗ
</div>
<p style="text-align:center;font-style:italic;color:var(--muted);margin-bottom:12px">"Ash-hadu an la ilaha illallahu wahdahu la sharika lahu, wa ash-hadu anna Muhammadan 'abduhu wa rasuluh"</p>
<p>The Prophet ﷺ said: "Whoever performs Wudu properly and then says this dua — all 8 gates of Paradise will be opened for him to enter through whichever he wishes." — Sahih Muslim 234</p>

<h2>Wudu Chart — Quick Reference</h2>
<table style="width:100%;border-collapse:collapse;margin:24px 0;">
  <thead>
    <tr style="background:rgba(10,110,79,.08);">
      <th style="padding:10px 14px;text-align:left;font-size:.84rem;">Step</th>
      <th style="padding:10px 14px;text-align:left;font-size:.84rem;">Action</th>
      <th style="padding:10px 14px;text-align:center;font-size:.84rem;">Times</th>
      <th style="padding:10px 14px;text-align:center;font-size:.84rem;">Status</th>
    </tr>
  </thead>
  <tbody>
    <tr><td style="padding:10px 14px;border-bottom:1px solid var(--border);font-weight:600;color:var(--emerald)">1</td><td style="padding:10px 14px;border-bottom:1px solid var(--border)">Niyyah (Intention)</td><td style="padding:10px 14px;border-bottom:1px solid var(--border);text-align:center">1</td><td style="padding:10px 14px;border-bottom:1px solid var(--border);text-align:center"><span style="background:rgba(10,110,79,.1);color:var(--emerald);border-radius:50px;padding:2px 10px;font-size:.75rem;font-weight:700">Fard</span></td></tr>
    <tr style="background:rgba(10,110,79,.02)"><td style="padding:10px 14px;border-bottom:1px solid var(--border);font-weight:600;color:var(--emerald)">2</td><td style="padding:10px 14px;border-bottom:1px solid var(--border)">Bismillah</td><td style="padding:10px 14px;border-bottom:1px solid var(--border);text-align:center">1</td><td style="padding:10px 14px;border-bottom:1px solid var(--border);text-align:center"><span style="background:rgba(201,146,42,.1);color:var(--gold);border-radius:50px;padding:2px 10px;font-size:.75rem;font-weight:700">Sunnah</span></td></tr>
    <tr><td style="padding:10px 14px;border-bottom:1px solid var(--border);font-weight:600;color:var(--emerald)">3</td><td style="padding:10px 14px;border-bottom:1px solid var(--border)">Wash Hands</td><td style="padding:10px 14px;border-bottom:1px solid var(--border);text-align:center">3</td><td style="padding:10px 14px;border-bottom:1px solid var(--border);text-align:center"><span style="background:rgba(201,146,42,.1);color:var(--gold);border-radius:50px;padding:2px 10px;font-size:.75rem;font-weight:700">Sunnah</span></td></tr>
    <tr style="background:rgba(10,110,79,.02)"><td style="padding:10px 14px;border-bottom:1px solid var(--border);font-weight:600;color:var(--emerald)">4</td><td style="padding:10px 14px;border-bottom:1px solid var(--border)">Rinse Mouth</td><td style="padding:10px 14px;border-bottom:1px solid var(--border);text-align:center">3</td><td style="padding:10px 14px;border-bottom:1px solid var(--border);text-align:center"><span style="background:rgba(201,146,42,.1);color:var(--gold);border-radius:50px;padding:2px 10px;font-size:.75rem;font-weight:700">Sunnah</span></td></tr>
    <tr><td style="padding:10px 14px;border-bottom:1px solid var(--border);font-weight:600;color:var(--emerald)">5</td><td style="padding:10px 14px;border-bottom:1px solid var(--border)">Clean Nose</td><td style="padding:10px 14px;border-bottom:1px solid var(--border);text-align:center">3</td><td style="padding:10px 14px;border-bottom:1px solid var(--border);text-align:center"><span style="background:rgba(201,146,42,.1);color:var(--gold);border-radius:50px;padding:2px 10px;font-size:.75rem;font-weight:700">Sunnah</span></td></tr>
    <tr style="background:rgba(10,110,79,.02)"><td style="padding:10px 14px;border-bottom:1px solid var(--border);font-weight:600;color:var(--emerald)">6</td><td style="padding:10px 14px;border-bottom:1px solid var(--border)">Wash Face</td><td style="padding:10px 14px;border-bottom:1px solid var(--border);text-align:center">3</td><td style="padding:10px 14px;border-bottom:1px solid var(--border);text-align:center"><span style="background:rgba(10,110,79,.1);color:var(--emerald);border-radius:50px;padding:2px 10px;font-size:.75rem;font-weight:700">Fard</span></td></tr>
    <tr><td style="padding:10px 14px;border-bottom:1px solid var(--border);font-weight:600;color:var(--emerald)">7</td><td style="padding:10px 14px;border-bottom:1px solid var(--border)">Wash Arms to Elbow</td><td style="padding:10px 14px;border-bottom:1px solid var(--border);text-align:center">3</td><td style="padding:10px 14px;border-bottom:1px solid var(--border);text-align:center"><span style="background:rgba(10,110,79,.1);color:var(--emerald);border-radius:50px;padding:2px 10px;font-size:.75rem;font-weight:700">Fard</span></td></tr>
    <tr style="background:rgba(10,110,79,.02)"><td style="padding:10px 14px;border-bottom:1px solid var(--border);font-weight:600;color:var(--emerald)">8</td><td style="padding:10px 14px;border-bottom:1px solid var(--border)">Wipe Head (Masah)</td><td style="padding:10px 14px;border-bottom:1px solid var(--border);text-align:center">1</td><td style="padding:10px 14px;border-bottom:1px solid var(--border);text-align:center"><span style="background:rgba(10,110,79,.1);color:var(--emerald);border-radius:50px;padding:2px 10px;font-size:.75rem;font-weight:700">Fard</span></td></tr>
    <tr><td style="padding:10px 14px;border-bottom:1px solid var(--border);font-weight:600;color:var(--emerald)">9</td><td style="padding:10px 14px;border-bottom:1px solid var(--border)">Wipe Ears</td><td style="padding:10px 14px;border-bottom:1px solid var(--border);text-align:center">1</td><td style="padding:10px 14px;border-bottom:1px solid var(--border);text-align:center"><span style="background:rgba(201,146,42,.1);color:var(--gold);border-radius:50px;padding:2px 10px;font-size:.75rem;font-weight:700">Sunnah</span></td></tr>
    <tr style="background:rgba(10,110,79,.02)"><td style="padding:10px 14px;border-bottom:1px solid var(--border);font-weight:600;color:var(--emerald)">10</td><td style="padding:10px 14px;border-bottom:1px solid var(--border)">Wash Feet to Ankle</td><td style="padding:10px 14px;border-bottom:1px solid var(--border);text-align:center">3</td><td style="padding:10px 14px;border-bottom:1px solid var(--border);text-align:center"><span style="background:rgba(10,110,79,.1);color:var(--emerald);border-radius:50px;padding:2px 10px;font-size:.75rem;font-weight:700">Fard</span></td></tr>
    <tr><td style="padding:10px 14px;font-weight:600;color:var(--emerald)">11</td><td style="padding:10px 14px">Dua after Wudu</td><td style="padding:10px 14px;text-align:center">1</td><td style="padding:10px 14px;text-align:center"><span style="background:rgba(201,146,42,.1);color:var(--gold);border-radius:50px;padding:2px 10px;font-size:.75rem;font-weight:700">Sunnah</span></td></tr>
  </tbody>
</table>

<h2>Common Mistakes in Wudu</h2>
<ul>
  <li><strong>Not covering the elbows:</strong> The elbow must be washed — "up to and including"</li>
  <li><strong>Not washing between fingers and toes:</strong> Water must reach every part</li>
  <li><strong>Too quick Masah:</strong> The head wipe must cover the full head (front to back)</li>
  <li><strong>Washing the neck:</strong> Not part of Wudu in any authentic hadith</li>
  <li><strong>Wasting water:</strong> The Prophet ﷺ used minimal water for Wudu</li>
</ul>

<div class="highlight-box" style="background:rgba(201,146,42,.08);border-color:var(--gold);">
  <strong>📚 Learn to pray Salah correctly with a certified tutor</strong><br/>
  Our tutors teach Wudu, Salah, Tajweed and Islamic studies to children and adults. <a href="/online-quran-classes#cta" style="color:var(--emerald);font-weight:700;">Book your free 30-min trial →</a>
</div>
    `,
  },

  "islamic-quotes-in-english-arabic": {
    style: ``,
    content: `
<div class="highlight-box">
  <strong>Allah says in the Quran (13:28):</strong><br/>
  <span style="font-family:'Amiri',serif;font-size:1.2rem;">أَلَا بِذِكۡرِ اللّٰهِ تَطۡمَئِنُّ الۡقُلُوبُ</span><br/>
  <em>"Verily, in the remembrance of Allah do hearts find rest."</em>
</div>

<h2>Islamic Quotes from the Quran — 50 Most Inspiring Verses</h2>

<h3>On Patience (Sabr)</h3>
<div class="arabic" style="font-size:1.3rem;text-align:center;padding:16px;margin:12px 0;">إِنَّ اللّٰهَ مَعَ الصّٰبِرِيۡنَ</div>
<p><em>"Indeed, Allah is with the patient."</em> — Quran 2:153</p>

<div class="arabic" style="font-size:1.3rem;text-align:center;padding:16px;margin:12px 0;">وَلَنَبۡلُوَنَّكُمۡ بِشَیۡءٍ مِّنَ الۡخَوۡفِ وَالۡجُوعِ</div>
<p><em>"And We will surely test you with something of fear and hunger and a loss of wealth and lives and fruits, but give good tidings to the patient."</em> — Quran 2:155</p>

<h3>On Trust in Allah (Tawakkul)</h3>
<div class="arabic" style="font-size:1.3rem;text-align:center;padding:16px;margin:12px 0;">وَمَنۡ يَّتَوَكَّلۡ عَلَى اللّٰهِ فَهُوَ حَسۡبُهٗ</div>
<p><em>"And whoever relies upon Allah — then He is sufficient for him."</em> — Quran 65:3</p>

<div class="arabic" style="font-size:1.3rem;text-align:center;padding:16px;margin:12px 0;">فَاِنَّ مَعَ الۡعُسۡرِ يُسۡرًا ؕ اِنَّ مَعَ الۡعُسۡرِ يُسۡرًا</div>
<p><em>"For indeed, with hardship will be ease. Indeed, with hardship will be ease."</em> — Quran 94:5-6</p>

<h3>On Hope and Mercy</h3>
<div class="arabic" style="font-size:1.3rem;text-align:center;padding:16px;margin:12px 0;">قُلۡ يٰعِبَادِيَ الَّذِيۡنَ اَسۡرَفُوۡا عَلٰٓى اَنۡفُسِهِمۡ لَا تَقۡنَطُوۡا مِنۡ رَّحۡمَةِ اللّٰهِ</div>
<p><em>"Say: O My servants who have transgressed against themselves, do not despair of the mercy of Allah. Indeed, Allah forgives all sins."</em> — Quran 39:53</p>

<h3>On Gratitude (Shukr)</h3>
<div class="arabic" style="font-size:1.3rem;text-align:center;padding:16px;margin:12px 0;">لَئِنۡ شَكَرۡتُمۡ لَاَزِيۡدَنَّكُمۡ</div>
<p><em>"If you are grateful, I will surely increase you [in favour]."</em> — Quran 14:7</p>

<h2>Islamic Quotes from Hadith — Prophet Muhammad ﷺ</h2>

<div class="highlight-box">
  <strong>"The strong person is not the one who wrestles others down. The truly strong person is the one who controls himself when he is angry."</strong>
  <br/><span style="font-size:.82rem;color:var(--muted)">— Sahih Bukhari 6114, Sahih Muslim 2609</span>
</div>

<div class="highlight-box">
  <strong>"None of you truly believes until he loves for his brother what he loves for himself."</strong>
  <br/><span style="font-size:.82rem;color:var(--muted)">— Sahih Bukhari 13, Sahih Muslim 45</span>
</div>

<div class="highlight-box">
  <strong>"The best of people are those who are most beneficial to people."</strong>
  <br/><span style="font-size:.82rem;color:var(--muted)">— Al-Mu'jam Al-Awsat, graded Hasan by Al-Albani</span>
</div>

<div class="highlight-box">
  <strong>"Make things easy, do not make things difficult. Give good news and do not chase people away."</strong>
  <br/><span style="font-size:.82rem;color:var(--muted)">— Sahih Bukhari 69</span>
</div>

<div class="highlight-box">
  <strong>"Take advantage of five before five: your youth before your old age, your health before your sickness, your wealth before your poverty, your free time before your preoccupation, and your life before your death."</strong>
  <br/><span style="font-size:.82rem;color:var(--muted)">— Al-Hakim (Sahih)</span>
</div>

<h2>Islamic Quotes for Children</h2>
<ul>
  <li>"Speak good or remain silent." — Sahih Bukhari</li>
  <li>"Smile at your brother — it is sadaqah (charity)." — Tirmidhi (Sahih)</li>
  <li>"Feed the hungry, visit the sick, and free the captives." — Sahih Bukhari</li>
  <li>"The best of you is the one who learns the Quran and teaches it." — Sahih Bukhari</li>
  <li>"A kind word is a form of charity." — Sahih Bukhari and Muslim</li>
</ul>

<h2>Islamic Quotes on Knowledge</h2>
<div class="arabic" style="font-size:1.3rem;text-align:center;padding:16px;margin:12px 0;">اِقۡرَاۡ بِاسۡمِ رَبِّكَ الَّذِیۡ خَلَقَ</div>
<p><em>"Read in the name of your Lord who created."</em> — Quran 96:1 (First revelation to the Prophet ﷺ)</p>

<div class="highlight-box">
  <strong>"Seeking knowledge is an obligation upon every Muslim."</strong>
  <br/><span style="font-size:.82rem;color:var(--muted)">— Ibn Majah (Sahih by Al-Albani)</span>
</div>

<div class="highlight-box">
  <strong>"Whoever follows a path in pursuit of knowledge, Allah will make easy for him a path to Paradise."</strong>
  <br/><span style="font-size:.82rem;color:var(--muted)">— Sahih Muslim 2699</span>
</div>

<h2>Islamic Quotes on Family</h2>
<p>The Prophet ﷺ said: <em>"The best of you is the one who is best to his family."</em> — Tirmidhi (Sahih)</p>
<p>The Prophet ﷺ said: <em>"Paradise lies at the feet of your mother."</em> — Ahmad, Nasai (Sahih)</p>
<p>Allah says in the Quran (17:23): <em>"Your Lord has decreed that you worship none but Him, and that you be kind to your parents."</em></p>

<h2>Short Islamic Quotes for Sharing</h2>
<ul>
  <li>"Alhamdulillah for everything." — Inspired by Quran 1:2</li>
  <li>"Tawakkul: trust Allah's plan."</li>
  <li>"Sabr is not waiting. It is trusting Allah's timing."</li>
  <li>"Your heart will be at peace when it is connected to Allah."</li>
  <li>"Make dua. It is the weapon of the believer."</li>
  <li>"The Quran is a cure for what is in the hearts." — Quran 10:57</li>
  <li>"Pray before you are prayed upon."</li>
  <li>"Be like the date palm — beneficial no matter what."</li>
</ul>

<div class="highlight-box" style="background:rgba(201,146,42,.08);border-color:var(--gold);text-align:center;">
  <strong>📚 Teach your children the Quran and its wisdom</strong><br/>
  Our certified tutors teach the Quran, its meaning, and Islamic character development. <a href="/online-quran-classes#cta" style="color:var(--emerald);font-weight:700;">Book a free trial class →</a>
</div>
    `,
  },

  "five-pillars-of-islam-explained": {
    style: ``,
    content: `
<div class="highlight-box">
  <strong>The Prophet Muhammad ﷺ said:</strong><br/>
  <em>"Islam is built upon five [pillars]: testifying that there is no god worthy of worship except Allah and that Muhammad is the Messenger of Allah, establishing the prayer, paying the Zakat, making the pilgrimage to the House, and fasting in Ramadan."</em>
  <br/><span style="font-size:.85rem;color:var(--muted)">— Sahih al-Bukhari 8, Sahih Muslim 16</span>
</div>

<h2>What Are the Five Pillars of Islam?</h2>
<p>The Five Pillars of Islam (Arabic: <strong>أَرْكَانُ الْإِسْلَام</strong> — Arkan al-Islam) are the five fundamental acts of worship that every Muslim must perform. They form the framework of Muslim life and are the bedrock of the Islamic faith.</p>
<p>Whether you are a new Muslim, a curious learner, or a parent teaching your children about Islam — understanding these five pillars in depth is the most important foundation you can give them.</p>

<h2>The 1st Pillar: Shahada (Declaration of Faith)</h2>
<div class="arabic" style="font-size:1.8rem;text-align:center;padding:24px 0;">أَشْهَدُ أَنْ لَّا إِلٰهَ إِلَّا اللّٰهُ وَأَشْهَدُ أَنَّ مُحَمَّدًا رَّسُوْلُ اللّٰهِ</div>
<p style="text-align:center;font-style:italic;color:var(--muted);margin-bottom:24px">"Ash-hadu alla ilaha illallah wa ash-hadu anna Muhammadan rasulullah"</p>
<p>The Shahada is the declaration: <strong>"I bear witness that there is no god but Allah, and I bear witness that Muhammad is the Messenger of Allah."</strong></p>
<p>This is the first and most important pillar. Reciting it with sincere belief and understanding makes a person Muslim. It is the key to Paradise, the essence of Tawhid (monotheism), and the foundation upon which all other pillars rest.</p>
<div class="highlight-box">
  <strong>Quranic Reference (47:19):</strong> "Know, therefore, that there is no god but Allah." — This verse commands <em>knowledge</em> of Tawhid, not mere repetition.
</div>

<h2>The 2nd Pillar: Salah (Daily Prayer)</h2>
<p>Salah — the ritual prayer — is performed <strong>five times every day</strong>: Fajr (dawn), Dhuhr (midday), Asr (afternoon), Maghrib (sunset), and Isha (night). It is the most frequently mentioned act of worship in the Quran — over 700 times.</p>
<ul>
  <li><strong>Fajr:</strong> 2 Rakaat — from dawn until sunrise</li>
  <li><strong>Dhuhr:</strong> 4 Rakaat — after the sun passes its zenith</li>
  <li><strong>Asr:</strong> 4 Rakaat — afternoon</li>
  <li><strong>Maghrib:</strong> 3 Rakaat — after sunset</li>
  <li><strong>Isha:</strong> 4 Rakaat — at night</li>
</ul>
<div class="highlight-box">
  <strong>Quran (2:238):</strong> "Guard strictly the [five obligatory] prayers, especially the middle Salat, and stand before Allah with obedience."
</div>
<p>The Prophet ﷺ described prayer as <em>"the pillar of the religion"</em>. It is the first act of worship we will be asked about on the Day of Judgment. Salah keeps a Muslim connected to Allah five times a day, providing structure, mindfulness, and spiritual cleansing.</p>

<h2>The 3rd Pillar: Zakat (Purifying Alms)</h2>
<p>Zakat is the obligatory annual charitable contribution — <strong>2.5% of all accumulated wealth</strong> above the Nisab threshold (approximately the value of 85 grams of gold or 595 grams of silver). It purifies wealth and the soul.</p>
<p>Zakat is payable on: cash and bank savings, gold and silver, business inventory, and agricultural produce. It is distributed to 8 specific categories mentioned in the Quran (9:60): the poor, the needy, those in debt, travellers, etc.</p>
<div class="highlight-box">
  <strong>Quran (9:103):</strong> "Take from their wealth a charity by which you purify them and cause them increase, and invoke [Allah's blessings] upon them."
</div>
<p>Zakat redistributes wealth, reduces poverty, and builds brotherhood in the Muslim community. It is distinct from voluntary charity (Sadaqah), which is always encouraged.</p>

<h2>The 4th Pillar: Sawm (Fasting in Ramadan)</h2>
<p>Sawm is the obligatory fast during the month of <strong>Ramadan</strong> — the 9th month of the Islamic lunar calendar. Muslims abstain from food, drink, smoking, and marital relations from Fajr (dawn) to Maghrib (sunset).</p>
<div class="highlight-box">
  <strong>Quran (2:183):</strong> "O you who have believed, decreed upon you is fasting as it was decreed upon those before you, that you may become righteous."
</div>
<p>Ramadan is the month in which the Quran was revealed (Quran 2:185). Muslims also intensify prayer (Tarawih), Quran recitation, and charity during this month. The Night of Power (Laylat al-Qadr) — better than 1,000 months — falls in the last 10 nights.</p>
<p><strong>Who is exempt from fasting?</strong> The elderly, the chronically ill, pregnant and nursing women, travellers, and those who are temporarily sick may skip fasts and make them up later (or pay Fidyah if unable to make up).</p>

<h2>The 5th Pillar: Hajj (Pilgrimage to Makkah)</h2>
<p>Hajj is the annual pilgrimage to Makkah, Saudi Arabia, <strong>obligatory once in a lifetime</strong> for every Muslim who is physically and financially able. It takes place during the month of Dhul Hijjah (12th Islamic month).</p>
<div class="highlight-box">
  <strong>Quran (3:97):</strong> "And [due] to Allah from the people is a pilgrimage to the House — for whoever is able to find thereto a way."
</div>
<p>The rituals of Hajj follow the footsteps of Prophet Ibrahim (Abraham) and his family. They include: wearing Ihram (white garments), Tawaf (7 circuits around the Kaaba), Sa'i (walking between Safa and Marwa), standing at Arafat, and the symbolic stoning of Shaytan at Mina.</p>
<p>The Prophet ﷺ said: <em>"Whoever performs Hajj for the sake of Allah and does not commit any obscenity or wrongdoing, he will return as sinless as the day his mother gave birth to him."</em> (Bukhari & Muslim)</p>

<h2>Why Are the Five Pillars Important for Children?</h2>
<p>Teaching children the Five Pillars from an early age builds their Islamic identity, gives them spiritual discipline, and connects them to their Creator. At NoorPath Academy, our Islamic Studies course covers all Five Pillars with age-appropriate explanations, Quranic references, and interactive activities designed for children aged 4-16.</p>
<div class="highlight-box" style="background:rgba(201,146,42,.08);border-color:var(--gold);">
  <strong>📚 Want to teach your child the Five Pillars properly?</strong><br/>
  Enroll in our <a href="/courses/islamic-studies-online" style="color:var(--emerald);font-weight:700;">Islamic Studies Online Course</a> — structured lessons on Aqeedah, Fiqh, Seerah, and Islamic practice. <a href="/online-quran-classes#cta" style="color:var(--emerald);font-weight:700;">Book a free trial class →</a>
</div>

<h2>Frequently Asked Questions</h2>
<h3>Are the Five Pillars mentioned in the Quran?</h3>
<p>Yes. Shahada (belief in Allah and the Prophet) is mentioned throughout the Quran. Salah is mentioned over 700 times. Zakat is mentioned together with Salah 32 times. Sawm is detailed in Surah Al-Baqarah (2:183-185). Hajj is described in Surah Al-Imran (3:97) and Surah Al-Hajj.</p>

<h3>What happens if a Muslim does not fulfil the Five Pillars?</h3>
<p>Missing any pillar without a valid reason is sinful. However, Islam recognises genuine hardship and provides allowances (rukhsah). Missing Salah without reason is considered a major sin. Missing Hajj when able is also a major sin. The door of repentance (Tawbah) is always open.</p>

<h3>Is Jihad a sixth pillar of Islam?</h3>
<p>No. Jihad means "struggle" — including the internal struggle against one's nafs (ego). While important in Islamic theology, it is not counted among the Five Pillars. The five pillars are explicitly named in the authenticated Hadith of Bukhari and Muslim.</p>

<div style="text-align:center;margin:40px 0;">
  <a href="/online-quran-classes#cta" style="display:inline-block;background:var(--emerald);color:#fff;padding:16px 36px;border-radius:50px;font-weight:700;text-decoration:none;font-size:1rem;">
    🎓 Start Learning Islam Online — Free Trial →
  </a>
</div>
    `,
  },

  "surah-al-fatiha-arabic-english": {
    style: ``,
    content: `
<div class="highlight-box" style="text-align:center;">
  <strong>The Prophet ﷺ said:</strong> <em>"Whoever does not recite Al-Fatiha in his prayer, his prayer is invalid."</em>
  <br/><span style="font-size:.85rem;color:var(--muted)">— Sahih al-Bukhari 756</span>
</div>

<h2>Introduction: The Opening Chapter</h2>
<p>Surah Al-Fatiha (سُورَةُ الْفَاتِحَة) — "The Opening" — is the first chapter of the Holy Quran. It consists of <strong>7 verses (ayaat)</strong> and is the most frequently recited surah in the world. Every Muslim recites it at least <strong>17 times every day</strong> — in every rakaat of every prayer.</p>
<p>Its other names include: <em>Umm al-Kitab</em> (Mother of the Book), <em>Umm al-Quran</em> (Mother of the Quran), <em>Al-Sab' al-Mathani</em> (The Seven Oft-Repeated Verses), <em>Al-Shifa</em> (The Cure), and <em>Al-Ruqyah</em> (The Healing Prayer).</p>

<h2>Surah Al-Fatiha — Complete Arabic Text</h2>
<div class="arabic" style="font-size:1.7rem;line-height:2.6;text-align:center;padding:32px 24px;background:rgba(10,110,79,.04);border-radius:16px;border:1px solid rgba(10,110,79,.1);margin:24px 0;">
  بِسۡمِ اللّٰهِ الرَّحۡمٰنِ الرَّحِيۡمِ ۝<br/>
  اَلۡحَمۡدُ لِلّٰهِ رَبِّ الۡعٰلَمِيۡنَ ۙ۝<br/>
  الرَّحۡمٰنِ الرَّحِيۡمِ ۙ۝<br/>
  مٰلِكِ يَوۡمِ الدِّيۡنِ ؕ۝<br/>
  اِيَّاكَ نَعۡبُدُ وَاِيَّاكَ نَسۡتَعِيۡنُ ؕ۝<br/>
  اِهۡدِنَا الصِّرَاطَ الۡمُسۡتَقِيۡمَ ۙ۝<br/>
  صِرَاطَ الَّذِيۡنَ اَنۡعَمۡتَ عَلَيۡهِمۡ ۙ غَيۡرِ الۡمَغۡضُوۡبِ عَلَيۡهِمۡ وَلَا الضَّآلِّيۡنَ ۝
</div>

<h2>Surah Al-Fatiha — English Translation (Word by Word)</h2>
<table style="width:100%;border-collapse:collapse;margin:24px 0;">
  <thead>
    <tr style="background:rgba(10,110,79,.08);">
      <th style="padding:12px 16px;text-align:left;font-size:.85rem;color:var(--charcoal);">Verse</th>
      <th style="padding:12px 16px;text-align:right;font-size:.85rem;color:var(--charcoal);">Arabic</th>
      <th style="padding:12px 16px;text-align:left;font-size:.85rem;color:var(--charcoal);">English Translation</th>
    </tr>
  </thead>
  <tbody>
    <tr><td style="padding:12px 16px;border-bottom:1px solid var(--border);font-weight:600;color:var(--emerald)">1</td><td style="padding:12px 16px;border-bottom:1px solid var(--border);text-align:right;font-size:1.2rem;" class="arabic">بِسۡمِ اللّٰهِ الرَّحۡمٰنِ الرَّحِيۡمِ</td><td style="padding:12px 16px;border-bottom:1px solid var(--border);">In the name of Allah, the Most Gracious, the Most Merciful</td></tr>
    <tr style="background:rgba(10,110,79,.02)"><td style="padding:12px 16px;border-bottom:1px solid var(--border);font-weight:600;color:var(--emerald)">2</td><td style="padding:12px 16px;border-bottom:1px solid var(--border);text-align:right;font-size:1.2rem;" class="arabic">اَلۡحَمۡدُ لِلّٰهِ رَبِّ الۡعٰلَمِيۡنَ</td><td style="padding:12px 16px;border-bottom:1px solid var(--border);">All praise is due to Allah, Lord of all the worlds</td></tr>
    <tr><td style="padding:12px 16px;border-bottom:1px solid var(--border);font-weight:600;color:var(--emerald)">3</td><td style="padding:12px 16px;border-bottom:1px solid var(--border);text-align:right;font-size:1.2rem;" class="arabic">الرَّحۡمٰنِ الرَّحِيۡمِ</td><td style="padding:12px 16px;border-bottom:1px solid var(--border);">The Most Gracious, the Most Merciful</td></tr>
    <tr style="background:rgba(10,110,79,.02)"><td style="padding:12px 16px;border-bottom:1px solid var(--border);font-weight:600;color:var(--emerald)">4</td><td style="padding:12px 16px;border-bottom:1px solid var(--border);text-align:right;font-size:1.2rem;" class="arabic">مٰلِكِ يَوۡمِ الدِّيۡنِ</td><td style="padding:12px 16px;border-bottom:1px solid var(--border);">Master of the Day of Judgment</td></tr>
    <tr><td style="padding:12px 16px;border-bottom:1px solid var(--border);font-weight:600;color:var(--emerald)">5</td><td style="padding:12px 16px;border-bottom:1px solid var(--border);text-align:right;font-size:1.2rem;" class="arabic">اِيَّاكَ نَعۡبُدُ وَاِيَّاكَ نَسۡتَعِيۡنُ</td><td style="padding:12px 16px;border-bottom:1px solid var(--border);">You alone we worship, and You alone we ask for help</td></tr>
    <tr style="background:rgba(10,110,79,.02)"><td style="padding:12px 16px;border-bottom:1px solid var(--border);font-weight:600;color:var(--emerald)">6</td><td style="padding:12px 16px;border-bottom:1px solid var(--border);text-align:right;font-size:1.2rem;" class="arabic">اِهۡدِنَا الصِّرَاطَ الۡمُسۡتَقِيۡمَ</td><td style="padding:12px 16px;border-bottom:1px solid var(--border);">Guide us to the straight path</td></tr>
    <tr><td style="padding:12px 16px;font-weight:600;color:var(--emerald)">7</td><td style="padding:12px 16px;text-align:right;font-size:1.2rem;" class="arabic">صِرَاطَ الَّذِيۡنَ اَنۡعَمۡتَ عَلَيۡهِمۡ...</td><td style="padding:12px 16px;">The path of those upon whom You have bestowed favour, not of those who have evoked Your anger or those who are astray</td></tr>
  </tbody>
</table>

<h2>Meaning & Tafsir of Surah Al-Fatiha</h2>
<p>Al-Fatiha is a conversation between the servant and Allah. The Prophet ﷺ narrated: <em>"Allah said: 'I have divided the prayer between Myself and My slave into two halves, and My slave shall have what he has asked for.'"</em> (Sahih Muslim 395)</p>
<ul>
  <li><strong>Verse 1 (Bismillah):</strong> Beginning every action with Allah's name establishes intention (niyyah) and seeks His blessing and protection.</li>
  <li><strong>Verse 2 (Al-Hamd):</strong> Praising Allah for all His blessings — seen and unseen. "Rabb al-'Alameen" — Lord of everything in existence.</li>
  <li><strong>Verses 3-4 (Ar-Rahman, Ar-Raheem, Malik):</strong> Allah's mercy encompasses all His creation. His justice governs the Day of Judgment.</li>
  <li><strong>Verse 5 (Iyyaka):</strong> The central declaration — we worship only Allah and depend only on Him. This verse divides Fatiha into praise (1-4) and supplication (5-7).</li>
  <li><strong>Verses 6-7 (Ihdina):</strong> The greatest du'a — asking for guidance to the Straight Path, the path of prophets, companions, and the righteous.</li>
</ul>

<h2>Benefits and Virtues of Surah Al-Fatiha</h2>
<div class="highlight-box">
  <strong>The Prophet ﷺ said:</strong> <em>"By the One in Whose hand is my soul, nothing like it has been revealed in the Torah, the Gospel, the Psalms, or the Quran."</em> — Tirmidhi (graded Sahih)
</div>
<ul>
  <li>It is the greatest surah in the Quran — as confirmed by multiple authentic hadiths</li>
  <li>It is a cure (Ruqyah) — the companions used it to heal a sick man (Bukhari 5736)</li>
  <li>Reciting it is an act of worship accepted by Allah as a personal conversation</li>
  <li>It contains the essence of the entire Quran — praise, monotheism, worship, and supplication</li>
  <li>It protects against evil, disease, and spiritual harm when recited with belief</li>
</ul>

<h2>Teaching Surah Al-Fatiha to Children</h2>
<p>Al-Fatiha is typically the <strong>first complete surah</strong> a child learns. At NoorPath Academy, we use a proven 3-step method:</p>
<ol>
  <li><strong>Listen & Repeat:</strong> The tutor recites each ayah with correct Tajweed; the child repeats until memorised</li>
  <li><strong>Word Meaning:</strong> Each Arabic word is explained in simple English so the child understands what they are saying to Allah</li>
  <li><strong>Prayer Application:</strong> The child practices reciting Al-Fatiha in the context of Salah with proper Tajweed</li>
</ol>

<div class="highlight-box" style="background:rgba(201,146,42,.08);border-color:var(--gold);">
  <strong>📚 Want your child to learn Surah Al-Fatiha with correct Tajweed?</strong><br/>
  Our certified tutors teach Surah Al-Fatiha as part of our <a href="/courses/quran-classes-for-kids" style="color:var(--emerald);font-weight:700;">Quran Classes for Kids</a> programme. <a href="/online-quran-classes#cta" style="color:var(--emerald);font-weight:700;">Book a free 30-min trial →</a>
</div>
    `,
  },

  "best-online-quran-academy-guide": {
    style: ``,
    content: `
<div class="highlight-box">
  <strong>The truth about online Quran academies:</strong> Not all are equal. Some use unqualified tutors, pre-recorded lessons, and aggressive upselling. This guide helps you spot the difference — and find the academy that truly serves your family.
</div>

<h2>Why Choosing the Right Online Quran Academy Matters</h2>
<p>The global online Quran learning market has exploded since 2020. Today, hundreds of academies compete for your family's attention — and money. But with the wrong academy, your child could develop <strong>incorrect Tajweed habits</strong> that take years to fix, learn from unverified tutors, or lose interest entirely due to poor teaching quality.</p>
<p>In this guide, we analyse exactly what separates the best online Quran academies from the rest — so you can make the right choice for your family.</p>

<h2>7 Must-Have Qualities in Any Online Quran Academy</h2>

<h3>1. Ijazah-Certified or Al-Azhar Qualified Tutors</h3>
<p>The <strong>Ijazah</strong> is an authenticated chain of Quran teaching that connects the student to the Prophet ﷺ himself. Any reputable academy should clearly state whether their tutors hold Ijazah (with the specific Riwayah — e.g. Hafs 'an Asim) or are university-qualified from institutions like Al-Azhar University in Cairo.</p>
<div class="highlight-box">
  <strong>🔴 Red flag:</strong> If an academy cannot tell you the specific Ijazah chain or qualification of your tutor, this is a serious warning sign.
</div>

<h3>2. 1-on-1 Live Classes (Not Pre-Recorded)</h3>
<p>Quran recitation requires real-time correction of pronunciation, Tajweed, and Makharij (articulation points). Pre-recorded lessons cannot provide this. The best academies offer <strong>live 1-on-1 sessions</strong> via Zoom, Skype, or a similar platform.</p>

<h3>3. Transparent Pricing with Free Trial</h3>
<p>Top academies offer a <strong>free trial class</strong> — no credit card required — so you can assess the tutor's quality, communication style, and methodology before committing financially. Monthly cancellation policies and clear pricing breakdowns are non-negotiable signs of trustworthiness.</p>

<h3>4. Age-Appropriate Curriculum</h3>
<p>A child aged 4 needs a completely different teaching approach compared to a teenager or adult learner. The best academies have <strong>structured, age-appropriate curricula</strong> — from Noorani Qaida for beginners, through to Hifz memorization and advanced Tajweed for older students.</p>

<h3>5. Female Tutors Available</h3>
<p>For many Muslim families, having a <strong>female tutor</strong> for daughters (and sometimes sons) is a religious and cultural preference. A quality academy should have a dedicated pool of certified female tutors and guarantee this option without waiting lists.</p>

<h3>6. Progress Reporting & Parent Communication</h3>
<p>You should receive regular <strong>written progress reports</strong>, know exactly what was covered in each class, and be able to communicate with your tutor directly. Good academies also offer parent calls to discuss the child's development.</p>

<h3>7. Satisfaction Guarantee</h3>
<p>The best academies stand behind their service. A <strong>money-back guarantee</strong> for the first month demonstrates that the academy is confident in its tutors and committed to your satisfaction — not just your payment.</p>

<h2>NoorPath Academy — Our Commitment to Quality</h2>
<p>At <strong>NoorPath Academy</strong>, we built our academy around these 7 principles from day one. Here is how we measure up:</p>
<table style="width:100%;border-collapse:collapse;margin:24px 0;">
  <thead>
    <tr style="background:rgba(10,110,79,.08);">
      <th style="padding:12px 16px;text-align:left;font-size:.85rem;">Quality Criterion</th>
      <th style="padding:12px 16px;text-align:center;font-size:.85rem;">NoorPath Academy</th>
    </tr>
  </thead>
  <tbody>
    <tr><td style="padding:12px 16px;border-bottom:1px solid var(--border);">Ijazah-certified tutors</td><td style="padding:12px 16px;border-bottom:1px solid var(--border);text-align:center;color:var(--emerald);font-weight:700;">✓ Yes — all tutors verified</td></tr>
    <tr style="background:rgba(10,110,79,.02)"><td style="padding:12px 16px;border-bottom:1px solid var(--border);">Live 1-on-1 classes</td><td style="padding:12px 16px;border-bottom:1px solid var(--border);text-align:center;color:var(--emerald);font-weight:700;">✓ Yes — via Zoom &amp; Skype</td></tr>
    <tr><td style="padding:12px 16px;border-bottom:1px solid var(--border);">Free trial class</td><td style="padding:12px 16px;border-bottom:1px solid var(--border);text-align:center;color:var(--emerald);font-weight:700;">✓ 30-min free trial</td></tr>
    <tr style="background:rgba(10,110,79,.02)"><td style="padding:12px 16px;border-bottom:1px solid var(--border);">Female tutors available</td><td style="padding:12px 16px;border-bottom:1px solid var(--border);text-align:center;color:var(--emerald);font-weight:700;">✓ Dedicated female tutor pool</td></tr>
    <tr><td style="padding:12px 16px;border-bottom:1px solid var(--border);">Age-specific curricula</td><td style="padding:12px 16px;border-bottom:1px solid var(--border);text-align:center;color:var(--emerald);font-weight:700;">✓ Ages 4–70+</td></tr>
    <tr style="background:rgba(10,110,79,.02)"><td style="padding:12px 16px;border-bottom:1px solid var(--border);">Weekly progress reports</td><td style="padding:12px 16px;border-bottom:1px solid var(--border);text-align:center;color:var(--emerald);font-weight:700;">✓ Every class</td></tr>
    <tr><td style="padding:12px 16px;">Satisfaction guarantee</td><td style="padding:12px 16px;text-align:center;color:var(--emerald);font-weight:700;">✓ Full 30-day refund</td></tr>
  </tbody>
</table>

<h2>Common Mistakes Families Make When Choosing an Academy</h2>
<ul>
  <li><strong>Choosing the cheapest option:</strong> Very low prices often mean unqualified tutors, no Ijazah, and poor quality control</li>
  <li><strong>Not checking tutor qualifications:</strong> Always ask for the tutor's specific qualifications and experience</li>
  <li><strong>Ignoring the trial class:</strong> A free trial is your best chance to assess the tutor before committing</li>
  <li><strong>No Tajweed focus:</strong> Basic Quran reading without Tajweed creates bad habits. Ensure the curriculum includes proper Tajweed</li>
  <li><strong>Ignoring parent reviews:</strong> Look for academies with hundreds of verified reviews on Google, Trustpilot, or Facebook</li>
</ul>

<h2>Frequently Asked Questions</h2>
<h3>How much should online Quran classes cost?</h3>
<p>Quality 1-on-1 live Quran classes typically range from $25–$80/month depending on frequency. Be cautious of prices below $15/month — this often indicates pre-recorded content or unqualified tutors.</p>

<h3>Are online Quran classes as effective as in-person?</h3>
<p>Yes — for 1-on-1 live sessions with qualified tutors, research shows online learning is equally or more effective than in-person, due to schedule flexibility, comfort of learning at home, and access to better tutors globally.</p>

<h3>How long does it take to learn Quran online?</h3>
<p>Noorani Qaida (alphabet to basic reading): 3–6 months. Basic Quran reading: 1–2 years. Tajweed proficiency: 2–3 years. Hifz (full memorisation): 3–7 years depending on commitment and starting age.</p>

<div class="highlight-box" style="background:rgba(201,146,42,.08);border-color:var(--gold);text-align:center;">
  <strong>🌟 Ready to start with the best?</strong><br/><br/>
  Join 12,000+ families who chose NoorPath Academy.<br/>
  Certified tutors · Free 30-min trial · 100% satisfaction guarantee.<br/><br/>
  <a href="/online-quran-classes#cta" style="display:inline-block;background:var(--emerald);color:#fff;padding:14px 32px;border-radius:50px;font-weight:700;text-decoration:none;margin-top:8px;">Book Your Free Trial Class →</a>
</div>
    `,
  },
  "inshallah-meaning-in-english": {
    style: `.article-body { font-size: 1.05rem; line-height: 1.85; color: #374151; }
    .article-body h2 { font-size: 1.5rem; font-weight: 700; color: var(--charcoal); margin: 40px 0 16px; }
    .article-body h3 { font-size: 1.15rem; font-weight: 700; color: var(--emerald); margin: 24px 0 10px; }
    .article-body p { margin-bottom: 18px; }
    .article-body ul { margin-bottom: 18px; padding-left: 24px; }
    .article-body li { margin-bottom: 8px; }
    .highlight-box { background: rgba(10,110,79,.06); border-left: 4px solid var(--emerald); border-radius: 8px; padding: 20px 24px; margin: 24px 0; }
    .gold-box { background: rgba(232,184,75,.08); border-left: 4px solid var(--gold); border-radius: 8px; padding: 20px 24px; margin: 24px 0; }
    .word-hero { text-align:center; padding:48px 24px; background: linear-gradient(135deg,rgba(10,110,79,.04),rgba(10,110,79,.09)); border-radius:20px; margin:32px 0; border:1px solid rgba(10,110,79,.12); }
    .word-arabic-hero { font-family:'Amiri',serif; font-size:3.5rem; color:var(--emerald); line-height:1.3; margin-bottom:16px; direction:rtl; }
    .word-roman-hero { font-size:1.5rem; font-style:italic; color:#4b5563; margin-bottom:12px; }
    .word-meaning-hero { font-size:1.1rem; font-weight:600; color:var(--charcoal); }
    .break-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:14px; margin:20px 0; }
    .break-card { background:var(--ivory); border:1px solid var(--border); border-radius:12px; padding:18px 14px; text-align:center; }
    .bc-arabic { font-family:'Amiri',serif; font-size:1.5rem; color:var(--emerald); direction:rtl; margin-bottom:6px; }
    .bc-roman { font-style:italic; color:#6b7280; font-size:.82rem; margin-bottom:4px; }
    .bc-meaning { font-weight:700; color:var(--charcoal); font-size:.85rem; }
    .compare-grid { display:grid; grid-template-columns:repeat(2,1fr); gap:14px; margin:20px 0; }
    .compare-card { background:var(--ivory); border:1px solid var(--border); border-radius:12px; padding:20px; }
    .compare-arabic { font-family:'Amiri',serif; font-size:1.4rem; color:var(--emerald); direction:rtl; margin-bottom:6px; }
    .compare-roman { font-style:italic; font-size:.85rem; color:#6b7280; margin-bottom:4px; }
    .compare-when { font-size:.82rem; color:var(--charcoal); font-weight:600; }
    .mistake-box { background:#fff5f5; border-left:4px solid #ef4444; border-radius:8px; padding:18px 22px; margin:20px 0; }
    @media (max-width:576px) { .break-grid,.compare-grid { grid-template-columns:1fr; } .word-arabic-hero { font-size:2.5rem; } }`,
    content: `<p><strong>Inshallah</strong> (إِنْ شَاءَ اللَّهُ) is spoken billions of times every day across the Muslim world — when making plans, sharing hopes, or answering questions about the future. Yet many people use it without knowing its full meaning, Quranic weight, and the humility it represents in Islam.</p>

          <div class="highlight-box">
            <strong>Quick answer:</strong> <strong>Inshallah meaning in English</strong> is "If Allah wills" or "God willing." Muslims say Inshallah when talking about future plans, hopes, or intentions — acknowledging that nothing happens without Allah's permission. It is an act of tawakkul (trust in Allah) and submission to His divine decree.
          </div>

          <div class="word-hero">
            <div class="word-arabic-hero">إِنْ شَاءَ اللَّهُ</div>
            <div class="word-roman-hero">In sha-a llāh</div>
            <div class="word-meaning-hero">"If Allah wills" / "God willing"</div>
          </div>

          <h2>What Does Inshallah Mean? (Word by Word)</h2>
          <div class="break-grid">
            <div class="break-card">
              <div class="bc-arabic">إِنْ</div>
              <div class="bc-roman">In</div>
              <div class="bc-meaning">If</div>
            </div>
            <div class="break-card">
              <div class="bc-arabic">شَاءَ</div>
              <div class="bc-roman">Shaa'a</div>
              <div class="bc-meaning">He wills / He desires</div>
            </div>
            <div class="break-card">
              <div class="bc-arabic">اللَّهُ</div>
              <div class="bc-roman">Allah</div>
              <div class="bc-meaning">Allah (God)</div>
            </div>
          </div>

          <p>The complete meaning: <em>"If Allah wills it, it will happen."</em> When you say Inshallah before a future plan, you are not being uncertain — you are expressing <strong>Islamic humility</strong>: human beings can intend and strive, but only Allah controls outcomes.</p>

          <h2>Inshallah in the Quran — Used by Prophets</h2>
          <p>Inshallah appears directly in the Quran. One of the most famous examples is when Prophet Ibrahim (Abraham) ﷺ left his wife Hajar and infant Ismail in the desert:</p>

          <div class="gold-box">
            <strong>📖 Quran 37:99–100 (context):</strong><br>
            Ibrahim said to his people: <em>"I will go to my Lord; He will guide me."</em> And when he left them and what they worshipped besides Allah, he said: <strong>"Inshallah, I will be among the righteous."</strong> (إِنْ شَاءَ اللَّهُ مِنَ الصَّالِحِينَ)
          </div>

          <p>Another powerful example — Prophet Yusuf (Joseph) ﷺ in prison told his cellmates:</p>

          <div class="gold-box">
            <strong>📖 Quran 12:99–100:</strong><br>
            <span style="font-family:'Amiri',serif;font-size:1.3rem;direction:rtl;display:block;text-align:right;margin:12px 0;">قَالَ لَا تَثْرِيبَ عَلَيْكُمُ الْيَوْمَ ۖ يَغْفِرُ اللَّهُ لَكُمْ ۖ وَهُوَ أَرْحَمُ الرَّاحِمِينَ</span>
            When reunited with his family, Yusuf said: <em>"Place my father over my head and bring all of you to me, <strong>inshallah</strong>, safely."</em> (12:100 — إِنْ شَاءَ اللَّهُ)
          </div>

          <h2>When Should You Say Inshallah?</h2>
          <ul>
            <li><strong>Before any future plan:</strong> "I will visit you tomorrow, inshallah." / "We will start the course next week, inshallah."</li>
            <li><strong>When answering about the future:</strong> "Will you come?" — "Inshallah!" (Yes, if Allah wills)</li>
            <li><strong>When making dua or hope:</strong> "Inshallah, Allah will grant you success in your exams."</li>
            <li><strong>When promising something:</strong> The Prophet ﷺ taught: never say "I will do X tomorrow" without adding "inshallah" (Quran 18:23–24)</li>
            <li><strong>When speaking about health, travel, marriage, or career:</strong> Any matter not yet in your hands</li>
          </ul>

          <div class="highlight-box">
            <strong>📖 Quran 18:23–24 — The Command:</strong><br>
            <span style="font-family:'Amiri',serif;font-size:1.25rem;direction:rtl;display:block;text-align:right;margin:10px 0;">وَلَا تَقُولَنَّ لِشَيْءٍ إِنِّي فَاعِلٌ ذَٰلِكَ غَدًا ﴿٢٣﴾ إِلَّا أَنْ يَشَاءَ اللَّهُ</span>
            <em>"And never say of anything, 'I will do that tomorrow,' except [when adding], 'If Allah wills.'"</em> (Surah Al-Kahf 18:23–24). This is a direct Quranic instruction — not optional etiquette, but a spiritual discipline.
          </div>

          <h2>How to Respond When Someone Says Inshallah</h2>
          <ul>
            <li><strong>"Ameen"</strong> — "O Allah, answer this" (most common, perfect response)</li>
            <li><strong>"Inshallah, khair"</strong> — "If Allah wills, it will be good"</li>
            <li><strong>"Allah yassir"</strong> — "May Allah make it easy"</li>
            <li><strong>"BarakAllahu feek"</strong> — "May Allah bless you" (when they wish you something)</li>
            <li><strong>Simply repeat "Inshallah"</strong> with sincerity — agreeing that Allah's will governs all outcomes</li>
          </ul>

          <h2>Inshallah vs Mashallah vs Alhamdulillah</h2>
          <div class="compare-grid">
            <div class="compare-card" style="border:2px solid var(--emerald);">
              <div class="compare-arabic">إِنْ شَاءَ اللَّهُ</div>
              <div class="compare-roman">Inshallah</div>
              <div class="compare-when"><strong>Future tense:</strong> "If Allah wills" — for plans, hopes, and things not yet happened. <em>Looking forward.</em></div>
            </div>
            <div class="compare-card">
              <div class="compare-arabic">مَا شَاءَ اللَّهُ</div>
              <div class="compare-roman">Mashallah</div>
              <div class="compare-when"><strong>Present/past blessing:</strong> "What Allah has willed" — when admiring something that exists now. <em>Appreciating the present.</em></div>
            </div>
            <div class="compare-card">
              <div class="compare-arabic">الْحَمْدُ لِلَّهِ</div>
              <div class="compare-roman">Alhamdulillah</div>
              <div class="compare-when"><strong>Gratitude:</strong> "All praise is for Allah" — thanking Allah for any condition, good or difficult. <em>Thanking Allah.</em></div>
            </div>
            <div class="compare-card">
              <div class="compare-arabic">سُبْحَانَ اللَّهِ</div>
              <div class="compare-roman">Subhanallah</div>
              <div class="compare-when"><strong>Awe at creation:</strong> "Glory be to Allah" — when amazed by Allah's power and perfection. <em>Marvelling at Allah's glory.</em></div>
            </div>
          </div>

          <h2>Common Mistakes with Inshallah</h2>
          <div class="mistake-box">
            <strong>❌ Using Inshallah to avoid commitment:</strong> In some cultures, "inshallah" is used sarcastically to mean "probably not." This contradicts Islamic teaching. The Prophet ﷺ said: "Whoever promises something and does not intend to fulfil it has lied." (Abu Dawud). Say Inshallah with sincere intention to act if Allah enables you.
          </div>
          <div class="mistake-box">
            <strong>❌ Forgetting Inshallah when making plans:</strong> Quran 18:23 warns against saying "I will do X tomorrow" without adding inshallah. Make it a habit — even for small daily plans.
          </div>
          <div class="mistake-box">
            <strong>❌ Confusing Inshallah with Mashallah:</strong> Inshallah = future ("if Allah wills"). Mashallah = present blessing ("what Allah has willed"). Using them interchangeably loses their distinct spiritual meanings.
          </div>

          <h2>Correct Spelling & Pronunciation</h2>
          <p>Common English spellings — all acceptable transliterations of إِنْ شَاءَ اللَّهُ:</p>
          <ul>
            <li><strong>Inshallah</strong> — most common globally</li>
            <li><strong>In sha Allah</strong> — three-word form (more precise Arabic separation)</li>
            <li><strong>Insha'Allah</strong> — with apostrophe for the hamza (ء)</li>
            <li><strong>Enshallah</strong> — North African / Maghrebi pronunciation</li>
          </ul>
          <p><strong>Pronunciation tip:</strong> In-SHA-ah-Llah. The "sha" is emphatic. The "in" is short. Stress the middle syllable slightly.</p>

          <h2>Teaching Children to Say Inshallah</h2>
          <p>Children learn Islamic phrases best through daily repetition in context:</p>
          <ul>
            <li>Say "Inshallah" before leaving home, starting homework, or planning weekend activities</li>
            <li>When a child asks "Can we go to the park tomorrow?" — respond "Inshallah!" enthusiastically</li>
            <li>Connect it to Quran 18:23 — "Allah teaches us to always remember Him when we plan"</li>
            <li>Pair with other daily phrases: Bismillah (starting), Alhamdulillah (thanking), Mashallah (admiring)</li>
          </ul>

          <div class="highlight-box" style="margin-top:32px;">
            <strong>Want your children to learn Inshallah, Quran, and Islamic manners together?</strong> NoorPath Academy teaches daily Islamic phrases, Noorani Qaida, Tajweed, and complete Islamic education in live 1-on-1 classes for kids and adults worldwide. <a href="/online-quran-classes#cta" style="color:var(--emerald);font-weight:700;">Book your free 30-minute trial class →</a>
          </div>

          <div style="margin-top:48px;border-top:1px solid var(--border);padding-top:32px;">
            <h3 style="font-size:1.15rem;font-weight:700;margin-bottom:16px;">Related Articles</h3>
            <ul style="list-style:none;padding:0;margin:0;display:flex;flex-direction:column;gap:10px;">
              <li><a href="/blog/mashallah-meaning" style="color:var(--emerald);font-weight:600;">Mashallah Meaning in English — When to Say It</a></li>
              <li><a href="/blog/alhamdulillah-meaning-in-english" style="color:var(--emerald);font-weight:600;">Alhamdulillah Meaning — Full Guide with Benefits</a></li>
              <li><a href="/blog/astaghfirullah-meaning" style="color:var(--emerald);font-weight:600;">Astaghfirullah Meaning — Arabic & Daily Istighfar</a></li>
              <li><a href="/blog/99-names-of-allah-asmaul-husna" style="color:var(--emerald);font-weight:600;">99 Names of Allah (Asmaul Husna) — Complete List</a></li>
            </ul>
          </div>`,
  },
  "learn-quran-online-adult-beginner-guide": {
    style: `.article-body { font-size: 1.05rem; line-height: 1.85; color: #374151; }
    .article-body h2 { font-size: 1.5rem; font-weight: 700; color: var(--charcoal); margin: 40px 0 16px; }
    .article-body h3 { font-size: 1.15rem; font-weight: 700; color: var(--emerald); margin: 24px 0 10px; }
    .article-body p { margin-bottom: 18px; }
    .article-body ul, .article-body ol { margin-bottom: 18px; padding-left: 24px; }
    .article-body li { margin-bottom: 8px; }
    .highlight-box { background: rgba(10,110,79,.06); border-left: 4px solid var(--emerald); border-radius: 8px; padding: 20px 24px; margin: 24px 0; }
    .gold-box { background: rgba(232,184,75,.08); border-left: 4px solid var(--gold); border-radius: 8px; padding: 20px 24px; margin: 24px 0; }
    .roadmap-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:16px; margin:28px 0; }
    .roadmap-card { background:var(--ivory); border:1px solid var(--border); border-radius:14px; padding:22px 18px; position:relative; overflow:hidden; }
    .roadmap-card::before { content:''; position:absolute; top:0; left:0; right:0; height:4px; background:linear-gradient(90deg,var(--emerald),var(--gold)); }
    .roadmap-phase { font-size:.72rem; font-weight:700; letter-spacing:.08em; text-transform:uppercase; color:var(--emerald); margin-bottom:8px; }
    .roadmap-title { font-size:1rem; font-weight:700; color:var(--charcoal); margin-bottom:8px; }
    .roadmap-time { font-size:.82rem; color:var(--muted); margin-bottom:10px; }
    .compare-table { width:100%; border-collapse:collapse; font-size:.92rem; margin:24px 0; }
    .compare-table th { background:var(--emerald); color:#fff; padding:12px 14px; text-align:left; }
    .compare-table td { padding:11px 14px; border-bottom:1px solid var(--border); vertical-align:top; }
    .compare-table tr:nth-child(even) td { background:rgba(10,110,79,.03); }
    .checklist { list-style:none; padding:0; margin:20px 0; }
    .checklist li { padding:10px 0 10px 32px; position:relative; border-bottom:1px solid var(--border); }
    .checklist li::before { content:'✓'; position:absolute; left:0; color:var(--emerald); font-weight:700; font-size:1.1rem; }
    .week-timeline { border-left:3px solid var(--emerald); margin:24px 0 24px 12px; padding-left:24px; }
    .week-item { margin-bottom:24px; }
    .week-label { font-size:.78rem; font-weight:700; color:var(--gold); text-transform:uppercase; letter-spacing:.06em; margin-bottom:4px; }
    .week-title { font-weight:700; color:var(--charcoal); margin-bottom:6px; }
    .mistake-box { background:#fff5f5; border-left:4px solid #ef4444; border-radius:8px; padding:18px 22px; margin:16px 0; }
    .stat-row { display:grid; grid-template-columns:repeat(4,1fr); gap:12px; margin:28px 0; }
    .stat-card { text-align:center; background:var(--ivory); border:1px solid var(--border); border-radius:12px; padding:20px 12px; }
    .stat-num { font-size:1.6rem; font-weight:800; color:var(--emerald); line-height:1.2; }
    .stat-label { font-size:.78rem; color:var(--muted); margin-top:4px; }
    @media (max-width:768px) { .roadmap-grid,.stat-row { grid-template-columns:1fr; } }`,
    content: `<p>If you are an adult who never learned to read the Quran — or you studied as a child and stopped decades ago — you are not alone. Search interest in <strong>learn quran online</strong> and <strong>quran for adults beginners</strong> has grown sharply worldwide. Millions of Muslims in the UK, USA, Canada, Australia, and the Gulf are starting (or restarting) their Quran journey from home, on their own schedule, with a live teacher who corrects pronunciation in real time.</p>

          <p>This is the complete, practical guide: not theory — a <strong>step-by-step roadmap</strong> from absolute zero to reading short surahs fluently, choosing the right online academy, building a schedule that fits work and family, and avoiding the mistakes that stall most adult beginners.</p>

          <div class="highlight-box">
            <strong>Quick answer:</strong> The fastest path for an adult beginner is <strong>2–3 live one-on-one online lessons per week</strong> (30 minutes each) + <strong>15–20 minutes daily self-practice</strong>, starting with <a href="/blog/noorani-qaida-complete-guide" style="color:var(--emerald);font-weight:600;">Noorani Qaida</a> before opening the Mushaf. Most adults reach basic fluent reading in <strong>4–6 months</strong>. You do not need to know Arabic as a language — only how to read the script with correct Tajweed.
          </div>

          <div class="stat-row">
            <div class="stat-card"><div class="stat-num">4–6</div><div class="stat-label">Months to basic reading (consistent schedule)</div></div>
            <div class="stat-card"><div class="stat-num">2–3×</div><div class="stat-label">Live lessons per week (recommended)</div></div>
            <div class="stat-card"><div class="stat-num">30 min</div><div class="stat-label">Ideal lesson length for adults</div></div>
            <div class="stat-card"><div class="stat-num">0</div><div class="stat-label">Prior Arabic knowledge required</div></div>
          </div>

          <h2>Why Adults Are Learning Quran Online in 2026</h2>
          <p>Three forces are driving this surge:</p>
          <ul>
            <li><strong>Life stage:</strong> Many adults feel a spiritual pull after marriage, having children, or losing a parent — they want to read Quran themselves, not depend on recordings alone.</li>
            <li><strong>Accessibility:</strong> No local madrassa fits a working adult's schedule. <a href="/online-quran-classes" style="color:var(--emerald);font-weight:600;">Online Quran classes</a> run at 6 am, lunch break, or 9 pm — wherever you live.</li>
            <li><strong>Privacy & dignity:</strong> Sitting in a classroom with 7-year-olds feels awkward. One-on-one online lessons let adults learn at their own pace without embarrassment.</li>
          </ul>
          <p>Google searches for <em>"how to learn quran as an adult"</em>, <em>"online quran classes for adults"</em>, and <em>"learn quran from scratch"</em> continue rising year over year. The demand is real — and the technology to serve it finally matches the need.</p>

          <h2>How to Learn Quran Online as an Adult — 5 Steps from Zero</h2>
          <p>If you want to <strong>learn Quran online</strong> as a complete beginner, follow this exact sequence used by thousands of adult students at <a href="/learn-quran-online" style="color:var(--emerald);font-weight:600;">NoorPath Academy</a>:</p>
          <ol>
            <li><strong>Book a free trial</strong> — Experience a real 30-minute live lesson before paying anything. No credit card required.</li>
            <li><strong>Start Noorani Qaida</strong> — Your tutor assesses your level and begins with Arabic letters and harakat. Never skip this step.</li>
            <li><strong>Fix your schedule</strong> — Lock in 2–3 permanent 30-minute slots (after Fajr, lunch break, or after Isha work best for working adults).</li>
            <li><strong>Practice 15 minutes daily</strong> — Revise what your teacher assigned between lessons. This single habit separates fast progress from stalled progress.</li>
            <li><strong>Move to the Mushaf</strong> — After Qaida completion, begin Juz Amma with live Tajweed correction every session.</li>
          </ol>
          <p>Adults who follow this 5-step path typically read <a href="/blog/surah-al-fatiha-arabic-english" style="color:var(--emerald);font-weight:600;">Surah Al-Fatiha</a> confidently within 12 weeks and finish Juz Amma within 4–6 months. See our dedicated <a href="/learn-quran-online" style="color:var(--emerald);font-weight:600;">Learn Quran Online</a> page for live class details and instant trial booking.</p>

          <h2>Online Quran Classes for Adults vs Kids — What's Different?</h2>
          <p>Many adults worry they will be placed in a children's class. Reputable academies like NoorPath run <strong>separate adult tracks</strong> with these differences:</p>
          <table class="compare-table">
            <thead><tr><th>Factor</th><th>Adult Classes</th><th>Kids Classes</th></tr></thead>
            <tbody>
              <tr><td><strong>Session length</strong></td><td>30–45 minutes</td><td>20–35 minutes (shorter for ages 4–6)</td></tr>
              <tr><td><strong>Teaching style</strong></td><td>Logic-based Tajweed explanation</td><td>Games, visuals, shorter attention spans</td></tr>
              <tr><td><strong>Pace</strong></td><td>Self-directed; no peer pressure</td><td>Parent progress reports weekly</td></tr>
              <tr><td><strong>Privacy</strong></td><td>1-on-1 — no classroom embarrassment</td><td>Parent can sit nearby during Zoom</td></tr>
              <tr><td><strong>Goals</strong></td><td>Salah recitation, Hifz, Tajweed mastery</td><td>Qaida foundation, love of Quran</td></tr>
            </tbody>
          </table>
          <p>Enrolling your children alongside yourself? Many families use one academy for both — see our <a href="/online-quran-classes-for-kids" style="color:var(--emerald);font-weight:600;">Online Quran Classes for Kids</a> page and sibling discount plans at <a href="/pricing" style="color:var(--emerald);font-weight:600;">pricing</a>.</p>

          <h2>The 3-Phase Roadmap: Qaida → Quran → Tajweed</h2>
          <p>Every successful adult beginner follows the same sequence. Skipping a phase creates permanent pronunciation errors that take months to undo.</p>

          <div class="roadmap-grid">
            <div class="roadmap-card">
              <div class="roadmap-phase">Phase 1</div>
              <div class="roadmap-title">Noorani Qaida</div>
              <div class="roadmap-time">Weeks 1–12 · 8–14 weeks typical</div>
              <p style="font-size:.88rem;margin:0;color:#4b5563;">Arabic alphabet, harakat (vowels), letter joining, sukoon, shaddah, and basic word reading. Foundation for everything.</p>
            </div>
            <div class="roadmap-card">
              <div class="roadmap-phase">Phase 2</div>
              <div class="roadmap-title">Quran Reading</div>
              <div class="roadmap-time">Months 3–6 · Surah-by-surah</div>
              <p style="font-size:.88rem;margin:0;color:#4b5563;">Start from Juz Amma (short surahs). Build fluency and confidence. Read with teacher correction every session.</p>
            </div>
            <div class="roadmap-card">
              <div class="roadmap-phase">Phase 3</div>
              <div class="roadmap-title">Tajweed Rules</div>
              <div class="roadmap-time">Months 4–12 · Ongoing refinement</div>
              <p style="font-size:.88rem;margin:0;color:#4b5563;">Makharij (articulation points), ghunnah, qalqalah, madd, and idgham. Polish recitation to sound like the Qari you admire.</p>
            </div>
          </div>

          <p>Read our detailed guides: <a href="/blog/noorani-qaida-complete-guide" style="color:var(--emerald);font-weight:600;">Noorani Qaida Complete Guide</a> · <a href="/blog/tajweed-rules-complete-guide" style="color:var(--emerald);font-weight:600;">Tajweed Rules Guide</a> · <a href="/blog/how-to-memorize-quran-faster" style="color:var(--emerald);font-weight:600;">How to Memorize Quran Faster</a></p>

          <h2>Week-by-Week Plan for Adult Beginners (First 12 Weeks)</h2>
          <div class="week-timeline">
            <div class="week-item">
              <div class="week-label">Week 1</div>
              <div class="week-title">Setup & Free Trial</div>
              <p style="margin:0;font-size:.95rem;">Book a free trial with a certified tutor. Set up a quiet corner, printed Qaida or Mushaf, notebook, and stable internet. Tell your teacher your goal: "I want to read Quran from zero." Assess starting level — most adults begin at Qaida page 1.</p>
            </div>
            <div class="week-item">
              <div class="week-label">Weeks 2–4</div>
              <div class="week-title">Arabic Letters & Harakat</div>
              <p style="margin:0;font-size:.95rem;">Learn all 28 letters with correct makharij. Master fatha, kasra, damma. Practice 15 min daily between lessons. Goal: read isolated letters and simple 2–3 letter combinations without hesitation.</p>
            </div>
            <div class="week-item">
              <div class="week-label">Weeks 5–8</div>
              <div class="week-title">Letter Joining & Words</div>
              <p style="margin:0;font-size:.95rem;">Letters change shape when joined — this is where most adults slow down. Stay patient. Your teacher corrects throat letters (ع، ح، خ، غ، ق) in real time — impossible with apps alone.</p>
            </div>
            <div class="week-item">
              <div class="week-label">Weeks 9–12</div>
              <div class="week-title">Complete Qaida & First Surah</div>
              <p style="margin:0;font-size:.95rem;">Finish remaining Qaida lessons (sukoon, tanween, shaddah). Begin <a href="/blog/surah-al-fatiha-arabic-english" style="color:var(--emerald);font-weight:600;">Surah Al-Fatiha</a> — the first surah every Muslim reads in Salah. Celebrate this milestone; it is spiritually significant.</p>
            </div>
          </div>

          <h2>Self-Study vs Online Tutor — What Actually Works for Adults</h2>
          <table class="compare-table">
            <thead>
              <tr><th>Method</th><th>Best For</th><th>Limitation</th><th>Adult Verdict</th></tr>
            </thead>
            <tbody>
              <tr><td><strong>Quran apps alone</strong></td><td>Revision, listening, vocabulary</td><td>Cannot hear or correct your pronunciation</td><td>❌ Not enough alone</td></tr>
              <tr><td><strong>YouTube videos</strong></td><td>Understanding concepts, motivation</td><td>No feedback loop; easy to learn wrong sounds</td><td>⚠️ Supplement only</td></tr>
              <tr><td><strong>Group online class</strong></td><td>Budget-conscious learners</td><td>Teacher cannot focus on your specific errors</td><td>⚠️ Slower progress</td></tr>
              <tr><td><strong>1-on-1 live tutor</strong></td><td>Adult beginners who want results</td><td>Requires scheduling commitment</td><td>✅ Fastest & most accurate</td></tr>
              <tr><td><strong>Local madrassa</strong></td><td>Children; community atmosphere</td><td>Fixed times; mixed-age classes</td><td>⚠️ Often impractical for adults</td></tr>
            </tbody>
          </table>

          <div class="gold-box">
            <strong>Expert insight:</strong> Adults learn through <em>logic and understanding</em>, not rote repetition alone. A skilled tutor explains <em>why</em> a letter sounds heavy or light — which speeds Tajweed mastery. Apps and videos cannot replace a teacher watching your mouth position on a video call. That is why <strong>online quran classes for adults</strong> with live 1-on-1 instruction outperform every self-study method in head-to-head progress tests.
          </div>

          <h2>How to Choose the Right Online Quran Academy (12-Point Checklist)</h2>
          <p>Before paying for months of lessons, verify these points during your free trial:</p>
          <ul class="checklist">
            <li><strong>Certified teachers</strong> — Ijazah, Al-Azhar, or recognized madrassa background</li>
            <li><strong>Free trial lesson</strong> — no payment required before you experience a class</li>
            <li><strong>1-on-1 live classes</strong> — not pre-recorded videos marketed as "classes"</li>
            <li><strong>Flexible rescheduling</strong> — life happens; 24-hour notice policy is standard</li>
            <li><strong>Patient with adult beginners</strong> — teacher does not rush or show frustration</li>
            <li><strong>Clear curriculum</strong> — Qaida first, then Quran, then Tajweed (in that order)</li>
            <li><strong>Written progress updates</strong> — monthly report on pages completed and next goals</li>
            <li><strong>Parent/supervision policy for kids</strong> — for families enrolling children alongside you</li>
            <li><strong>Timezone-friendly slots</strong> — UK, US, AU evening and weekend availability</li>
            <li><strong>Transparent pricing</strong> — no hidden fees; sibling discounts if enrolling family</li>
            <li><strong>Secure platform</strong> — Zoom or Google Meet; no private messaging with minors</li>
            <li><strong>Backup teacher</strong> — coverage when your regular tutor is unavailable</li>
          </ul>
          <p>Full comparison guide: <a href="/blog/best-online-quran-academy-guide" style="color:var(--emerald);font-weight:600;">How to Choose the Best Online Quran Academy (2026)</a></p>

          <h2>Ideal Schedule for Working Adults</h2>
          <p>Consistency beats intensity. Here is what thousands of successful adult students follow:</p>
          <ul>
            <li><strong>Lessons:</strong> 2–3 sessions per week, 30 minutes each (45 min max if you have strong focus)</li>
            <li><strong>Daily practice:</strong> 15–20 minutes on non-lesson days — revise what your teacher assigned</li>
            <li><strong>Best times:</strong> After Fajr (mind is fresh), lunch break, or after Isha (quiet home)</li>
            <li><strong>Minimum viable:</strong> 1 lesson/week works but doubles your timeline — use only if necessary</li>
          </ul>

          <h3>Timezone Tips by Country</h3>
          <ul>
            <li><strong>UK & Europe:</strong> Evening slots 6–9 pm GMT work best after work. See <a href="/locations/online-quran-classes-uk" style="color:var(--emerald);font-weight:600;">Online Quran Classes UK</a></li>
            <li><strong>USA & Canada:</strong> Morning (before work) or evening 7–10 pm local. See <a href="/locations/online-quran-classes-usa" style="color:var(--emerald);font-weight:600;">Online Quran Classes USA</a></li>
            <li><strong>Australia:</strong> After-school evening AEST/AEDT. See <a href="/locations/online-quran-classes-australia" style="color:var(--emerald);font-weight:600;">Online Quran Classes Australia</a></li>
            <li><strong>Gulf & Middle East:</strong> Flexible — many teachers available in your timezone</li>
          </ul>

          <h2>How Much Does It Cost to Learn Quran Online as an Adult?</h2>
          <p>Transparent pricing matters. Here is what reputable <strong>online quran classes for adults</strong> typically charge in 2026:</p>
          <table class="compare-table">
            <thead><tr><th>Plan</th><th>Sessions/Week</th><th>Monthly Cost</th><th>Best For</th></tr></thead>
            <tbody>
              <tr><td><strong>Starter</strong></td><td>2× 30 min</td><td>$29–$45</td><td>Busy adults, slow but steady progress</td></tr>
              <tr><td><strong>Standard</strong></td><td>3× 30 min</td><td>$45–$65</td><td>Recommended — fastest beginner results</td></tr>
              <tr><td><strong>Intensive</strong></td><td>5× 30 min</td><td>$70–$100</td><td>Hifz students or fast-track reading</td></tr>
            </tbody>
          </table>
          <p>At <a href="/pricing" style="color:var(--emerald);font-weight:600;">NoorPath Academy</a>, adult plans start from <strong>$29/month</strong> with family discounts if you enroll children too. Your first 30-minute lesson is always free — no credit card, no automatic billing. Compare plans on our <a href="/online-quran-academy" style="color:var(--emerald);font-weight:600;">Online Quran Academy</a> page.</p>

          <h2>Can Women Learn Quran Online with a Female Teacher?</h2>
          <p>Yes. Many adult women prefer learning with a certified female tutor (Hafiza) for comfort and privacy. When booking your free trial, simply request a female teacher. NoorPath offers Ijazah-certified female tutors for adult sisters worldwide — same curriculum, same flexible scheduling, same free trial policy. See also our <a href="/learn-tajweed-online" style="color:var(--emerald);font-weight:600;">Learn Tajweed Online</a> page if your goal is pronunciation perfection.</p>

          <h2>7 Mistakes That Stall Adult Quran Learners</h2>
          <div class="mistake-box"><strong>❌ Skipping Noorani Qaida:</strong> Jumping straight to the Mushaf creates bad habits. Always complete Qaida first — even if it feels slow.</div>
          <div class="mistake-box"><strong>❌ Inconsistent schedule:</strong> Missing 2 weeks resets progress. Fix 2–3 permanent weekly slots and protect them like work meetings.</div>
          <div class="mistake-box"><strong>❌ Relying on apps without a teacher:</strong> You cannot self-correct throat letters. A teacher on video call is non-negotiable for beginners.</div>
          <div class="mistake-box"><strong>❌ Comparing yourself to children:</strong> Children memorize faster but adults understand rules deeper. Your timeline is valid.</div>
          <div class="mistake-box"><strong>❌ Long sessions causing burnout:</strong> 60-minute daily marathons lead to quitting. Short, consistent sessions win.</div>
          <div class="mistake-box"><strong>❌ Not revising between lessons:</strong> 15 minutes daily revision is worth more than an extra weekly lesson.</div>
          <div class="mistake-box"><strong>❌ Choosing the cheapest tutor without credentials:</strong> Incorrect Tajweed learned early takes months to unlearn. Invest in qualified teachers.</div>

          <h2>What Happens in Your First Online Lesson</h2>
          <p>Knowing what to expect removes anxiety. A professional first lesson typically includes:</p>
          <ol>
            <li><strong>Introduction (5 min):</strong> Teacher asks your background, goals, and preferred pace</li>
            <li><strong>Level assessment (10 min):</strong> Can you recognize any Arabic letters? Have you prayed before?</li>
            <li><strong>First teaching (10 min):</strong> Usually 3–5 letters with makharij demonstration</li>
            <li><strong>Homework assignment (5 min):</strong> Specific Qaida pages to practice before next class</li>
          </ol>
          <p>You need: laptop or tablet with camera, headphones (optional but helpful), printed <a href="/blog/noorani-qaida-complete-guide" style="color:var(--emerald);font-weight:600;">Noorani Qaida</a>, quiet space, and wudu if you prefer spiritual readiness.</p>

          <h2>After Basic Reading — What's Next?</h2>
          <p>Once you read Juz Amma comfortably, adult learners typically choose one or more paths:</p>
          <ul>
            <li><strong>Tajweed mastery</strong> — polish recitation to sound like your favourite Qari (<a href="/blog/tajweed-rules-complete-guide" style="color:var(--emerald);font-weight:600;">Tajweed guide</a>)</li>
            <li><strong>Hifz (memorization)</strong> — many adults memorize selected surahs or full Quran (<a href="/blog/how-to-memorize-quran-faster" style="color:var(--emerald);font-weight:600;">Hifz tips</a>)</li>
            <li><strong>Quranic Arabic</strong> — understand word meanings while you recite</li>
            <li><strong>Teaching your children</strong> — model Quran learning at home (<a href="/blog/how-to-teach-quran-to-kids" style="color:var(--emerald);font-weight:600;">parent guide</a>)</li>
          </ul>

          <h2>15 Benefits of Learning Quran Online as an Adult</h2>
          <p>Key advantages covered in depth in our <a href="/blog/benefits-of-online-quran-classes" style="color:var(--emerald);font-weight:600;">Benefits of Online Quran Classes</a> article:</p>
          <ul>
            <li>Learn from anywhere — no commute to madrassa</li>
            <li>Flexible timing around work, parenting, and prayer</li>
            <li>Private 1-on-1 attention — every mistake corrected instantly</li>
            <li>Access to Al-Azhar and Ijazah-certified teachers globally</li>
            <li>Progress at your pace — no pressure from faster classmates</li>
            <li>Enroll your children in the same academy — one family hub</li>
            <li>Record lessons (with permission) for revision</li>
            <li>Free trial before any financial commitment</li>
          </ul>

          <h2>Frequently Asked Questions — Learn Quran Online as an Adult</h2>
          <div class="highlight-box"><strong>Can I learn Quran online if I never studied as a child?</strong><br>Yes — most adult students at NoorPath start from absolute zero. No prior Arabic knowledge is required. Your tutor begins with Noorani Qaida at your pace.</div>
          <div class="highlight-box"><strong>How long until I can read Surah Al-Fatiha in Salah?</strong><br>With 2–3 weekly lessons and daily practice, most adults read Al-Fatiha within 10–14 weeks. Full Juz Amma fluency typically takes 4–6 months.</div>
          <div class="highlight-box"><strong>Is it embarrassing to learn Quran online as an adult?</strong><br>Not at all. 1-on-1 private lessons mean no classroom, no children watching, no judgment. Your tutor has taught hundreds of adult beginners — they expect and welcome your starting point.</div>
          <div class="highlight-box"><strong>Can I learn Tajweed online after basic reading?</strong><br>Yes. Once you read comfortably, move to our <a href="/learn-tajweed-online" style="color:var(--emerald);font-weight:600;">Tajweed program</a> for makharij, ghunnah, madd, and idgham rules with live correction.</div>
          <div class="highlight-box"><strong>What if I studied as a child but forgot everything?</strong><br>Very common. Your tutor will assess whether you need full Qaida or can restart from a mid-Qaida page. Most returning adults refresh Qaida in 4–6 weeks then move to the Mushaf.</div>

          <div class="highlight-box" style="margin-top:32px;">
            <strong>Ready to start? You are one free trial away from reading your first ayah.</strong><br><br>
            NoorPath Academy offers live 1-on-1 <strong>online Quran classes for adults and kids</strong> with certified tutors, flexible UK/US/AU time slots, and a structured Qaida → Quran → Tajweed curriculum. No prior Arabic required. No payment until you have experienced a full trial lesson.<br><br>
            <a href="/online-quran-classes#cta" style="color:var(--emerald);font-weight:700;font-size:1.05rem;">Book your free 30-minute trial class now →</a>
          </div>

          <div style="margin-top:48px;border-top:1px solid var(--border);padding-top:32px;">
            <h3 style="font-size:1.15rem;font-weight:700;margin-bottom:16px;">Related Guides</h3>
            <ul style="list-style:none;padding:0;margin:0;display:flex;flex-direction:column;gap:10px;">
              <li><a href="/learn-quran-online" style="color:var(--emerald);font-weight:600;">Learn Quran Online — Live 1-on-1 Classes</a></li>
              <li><a href="/blog/best-online-quran-academy-guide" style="color:var(--emerald);font-weight:600;">How to Choose the Best Online Quran Academy (2026)</a></li>
              <li><a href="/blog/noorani-qaida-complete-guide" style="color:var(--emerald);font-weight:600;">Noorani Qaida Complete Guide — Start Here</a></li>
              <li><a href="/blog/benefits-of-online-quran-classes" style="color:var(--emerald);font-weight:600;">15 Benefits of Online Quran Classes</a></li>
              <li><a href="/blog/tajweed-rules-complete-guide" style="color:var(--emerald);font-weight:600;">Tajweed Rules — Complete Guide</a></li>
              <li><a href="/blog/best-age-to-start-quran-learning" style="color:var(--emerald);font-weight:600;">Best Age to Start Quran Learning (For Your Children)</a></li>
            </ul>
          </div>`,
  },
  "online-quran-classes-for-kids-parent-guide": {
    style: `.article-body { font-size: 1.05rem; line-height: 1.85; color: #374151; }
    .article-body h2 { font-size: 1.5rem; font-weight: 700; color: var(--charcoal); margin: 40px 0 16px; }
    .article-body h3 { font-size: 1.15rem; font-weight: 700; color: var(--emerald); margin: 24px 0 10px; }
    .article-body p { margin-bottom: 18px; }
    .article-body ul, .article-body ol { margin-bottom: 18px; padding-left: 24px; }
    .article-body li { margin-bottom: 8px; }
    .highlight-box { background: rgba(10,110,79,.06); border-left: 4px solid var(--emerald); border-radius: 8px; padding: 20px 24px; margin: 24px 0; }
    .gold-box { background: rgba(232,184,75,.08); border-left: 4px solid var(--gold); border-radius: 8px; padding: 20px 24px; margin: 24px 0; }
    .check-grid { display:grid; grid-template-columns:repeat(2,1fr); gap:12px; margin:20px 0; }
    .check-item { background:var(--ivory); border:1px solid var(--border); border-radius:10px; padding:14px 16px; font-size:.9rem; }
    .check-item strong { color:var(--emerald); }
    .price-table { width:100%; border-collapse:collapse; font-size:.92rem; margin:24px 0; }
    .price-table th { background:var(--emerald); color:#fff; padding:12px 14px; text-align:left; }
    .price-table td { padding:11px 14px; border-bottom:1px solid var(--border); }
    .stat-row { display:grid; grid-template-columns:repeat(4,1fr); gap:12px; margin:28px 0; }
    .stat-card { text-align:center; background:var(--ivory); border:1px solid var(--border); border-radius:12px; padding:20px 12px; }
    .stat-num { font-size:1.6rem; font-weight:800; color:var(--emerald); line-height:1.2; }
    .stat-label { font-size:.78rem; color:var(--muted); margin-top:4px; }
    .red-flag { background:#fff5f5; border-left:4px solid #ef4444; border-radius:8px; padding:14px 18px; margin:10px 0; font-size:.92rem; }
    .month-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:14px; margin:24px 0; }
    .month-card { background:var(--ivory); border:1px solid var(--border); border-radius:12px; padding:18px 16px; }
    .month-label { font-size:.72rem; font-weight:700; color:var(--gold); text-transform:uppercase; letter-spacing:.06em; margin-bottom:6px; }
    .mistake-box { background:#fff5f5; border-left:4px solid #ef4444; border-radius:8px; padding:18px 22px; margin:16px 0; }
    @media (max-width:768px) { .check-grid,.stat-row,.month-grid { grid-template-columns:1fr; } }`,
    content: `<p>Every Muslim parent asks the same question: <em>"How do I find safe, effective online Quran classes for my child?"</em> With hundreds of platforms advertising on Google, the choice feels overwhelming — yet the decision shapes your child's relationship with the Quran for life.</p>

          <p>This is the complete 2026 parent guide: best age to start, how to evaluate safety, what to look for in a tutor, realistic costs, red flags to avoid, and exactly how to book a free trial without risk.</p>

          <div class="highlight-box">
            <strong>Quick answer for busy parents:</strong> The best <strong>online Quran classes for kids</strong> are live <strong>1-on-1</strong> (not group or pre-recorded), taught by <strong>Ijazah-certified tutors</strong>, with <strong>parent-monitored Zoom sessions</strong>, <strong>20–30 minute lessons</strong> for ages 4–8, and a <strong>free trial before payment</strong>. <a href="/online-quran-classes-for-kids#cta" style="color:var(--emerald);font-weight:700;">Book a free trial at NoorPath Academy →</a>
          </div>

          <div class="stat-row">
            <div class="stat-card"><div class="stat-num">4+</div><div class="stat-label">Minimum age to start</div></div>
            <div class="stat-card"><div class="stat-num">20–45</div><div class="stat-label">Minutes per session by age</div></div>
            <div class="stat-card"><div class="stat-num">$29</div><div class="stat-label">Starting monthly cost</div></div>
            <div class="stat-card"><div class="stat-num">12,000+</div><div class="stat-label">Families worldwide</div></div>
          </div>

          <h2>Why Parents Are Choosing Online Quran Classes in 2026</h2>
          <ul>
            <li><strong>No local madrassa:</strong> Many families in UK, USA, Canada, and Australia have no qualified Quran teacher nearby.</li>
            <li><strong>Busy schedules:</strong> After-school slots at 4–6 pm fit homework and dinner — no weekend madrassa commute.</li>
            <li><strong>1-on-1 attention:</strong> Your child is never lost in a classroom of 15 students.</li>
            <li><strong>Certified global tutors:</strong> Access Al-Azhar and Ijazah teachers regardless of where you live.</li>
            <li><strong>Parent visibility:</strong> Sit nearby during Zoom — see and hear every minute of the lesson.</li>
          </ul>
          <p>Parents searching <em>"best online quran classes for kids"</em>, <em>"quran teacher for kids"</em>, and <em>"online quran academy for kids"</em> in the UK, USA, and Canada are driving record demand. The key is choosing live 1-on-1 instruction over apps or group webinars — your child's pronunciation depends on it.</p>

          <h2>What Makes the Best Online Quran Classes for Kids?</h2>
          <p>Not every platform advertising on Google delivers real teaching. The <strong>best online quran classes for kids</strong> share these non-negotiable qualities:</p>
          <ul>
            <li><strong>Live 1-on-1 on Zoom</strong> — your child is never one of 20 students in a webinar</li>
            <li><strong>Child-specialist tutors</strong> — teachers who know how to engage a 5-year-old, not just recite rules</li>
            <li><strong>Structured Qaida-first curriculum</strong> — not random surah memorization without foundation</li>
            <li><strong>Weekly written progress reports</strong> — you always know what your child learned</li>
            <li><strong>Free trial before payment</strong> — evaluate the teacher with zero financial risk</li>
          </ul>
          <p>See how NoorPath compares on our dedicated <a href="/online-quran-classes-for-kids" style="color:var(--emerald);font-weight:600;">Online Quran Classes for Kids</a> landing page — built specifically for parents researching this decision.</p>

          <h2>Best Age to Start Online Quran Classes</h2>
          <table class="price-table">
            <thead><tr><th>Age</th><th>Session Length</th><th>What They Learn</th></tr></thead>
            <tbody>
              <tr><td><strong>4–5 years</strong></td><td>20–25 min</td><td>Arabic letters through games, short duas, listening to Quran</td></tr>
              <tr><td><strong>6–7 years</strong></td><td>25–30 min</td><td>Noorani Qaida, letter joining, Surah Al-Fatiha start</td></tr>
              <tr><td><strong>8–10 years</strong></td><td>30–35 min</td><td>Qaida completion, Quran reading, basic Tajweed</td></tr>
              <tr><td><strong>11–12 years</strong></td><td>35–45 min</td><td>Fluent reading, Tajweed rules, optional Hifz</td></tr>
            </tbody>
          </table>
          <p>Read our detailed guide: <a href="/blog/best-age-to-start-quran-learning" style="color:var(--emerald);font-weight:600;">Best Age to Start Quran Learning</a></p>

          <h2>Is Your Child Ready for Online Quran Classes? (5 Signs)</h2>
          <p>Before booking a trial, check if your child shows these readiness signs:</p>
          <ul>
            <li><strong>Can sit for 15–20 minutes</strong> with gentle guidance (ages 4–5 need shorter sessions)</li>
            <li><strong>Responds to a friendly adult on video</strong> — not afraid of Zoom or tablet camera</li>
            <li><strong>Shows curiosity about Arabic letters</strong> or copies you during Salah</li>
            <li><strong>Can follow simple instructions</strong> like "repeat after me" or "point to this letter"</li>
            <li><strong>Parent is available to supervise</strong> especially during the first month of lessons</li>
          </ul>
          <p>If your child is not ready yet, wait 2–3 months and try again. Forcing lessons too early creates negative associations with the Quran. Ages 4–7 are ideal for most families.</p>

          <h2>12-Point Checklist: How to Choose the Best Online Quran Academy</h2>
          <div class="check-grid">
            <div class="check-item"><strong>✓ Free trial</strong> — No payment before experiencing a real lesson</div>
            <div class="check-item"><strong>✓ 1-on-1 live</strong> — Not group webinars or recorded videos</div>
            <div class="check-item"><strong>✓ Ijazah tutors</strong> — Verified certification, not self-declared</div>
            <div class="check-item"><strong>✓ Child specialists</strong> — Teachers experienced with ages 4–12</div>
            <div class="check-item"><strong>✓ Parent reports</strong> — Weekly progress updates in writing</div>
            <div class="check-item"><strong>✓ Safe platform</strong> — Zoom/Meet only, no private messaging</div>
            <div class="check-item"><strong>✓ Flexible reschedule</strong> — 24-hour notice policy</div>
            <div class="check-item"><strong>✓ Female tutors</strong> — Available for daughters</div>
            <div class="check-item"><strong>✓ Qaida first</strong> — Structured curriculum, not random surahs</div>
            <div class="check-item"><strong>✓ Timezone slots</strong> — UK/US/AU evening availability</div>
            <div class="check-item"><strong>✓ Sibling discount</strong> — Family plans for 2+ children</div>
            <div class="check-item"><strong>✓ Transparent pricing</strong> — No hidden fees after trial</div>
          </div>

          <h2>Is Online Quran Learning Safe for Children?</h2>
          <p>Safety is the #1 concern for Muslim parents — and rightly so. Follow these protocols:</p>
          <ol>
            <li><strong>Supervise the first month</strong> — Stay in the room or within earshot during every lesson.</li>
            <li><strong>Use communal devices</strong> — Laptop in living room, not child's bedroom with door closed.</li>
            <li><strong>No private messaging</strong> — All communication through the academy's official channels.</li>
            <li><strong>Verify credentials</strong> — Ask for Ijazah certificate or Al-Azhar graduation proof.</li>
            <li><strong>Trust your instinct</strong> — If a teacher refuses parent observation, find another academy.</li>
          </ol>

          <div class="gold-box">
            <strong>📖 Prophet ﷺ said:</strong> <em>"The best of you are those who learn the Quran and teach it."</em> (Bukhari). Choosing the right teacher is a sacred responsibility — take time to evaluate, use the free trial, and ask questions before enrolling.
          </div>

          <h2>Group Classes vs 1-on-1 Online Quran Classes for Kids</h2>
          <table class="price-table">
            <thead><tr><th>Format</th><th>Pros</th><th>Cons</th><th>Verdict for Kids</th></tr></thead>
            <tbody>
              <tr><td><strong>1-on-1 live tutor</strong></td><td>Full attention, instant Tajweed correction, custom pace</td><td>Costs slightly more than group</td><td>✅ Best for all ages</td></tr>
              <tr><td><strong>Group online class</strong></td><td>Lower cost per student</td><td>Teacher cannot correct every child; shy kids stay silent</td><td>⚠️ Slower progress</td></tr>
              <tr><td><strong>Pre-recorded videos</strong></td><td>Free or cheap</td><td>Zero feedback; children learn wrong pronunciation</td><td>❌ Not recommended alone</td></tr>
              <tr><td><strong>Quran apps</strong></td><td>Good for listening & revision</td><td>Cannot hear child's recitation</td><td>⚠️ Supplement only</td></tr>
            </tbody>
          </table>

          <h2>How Much Do Online Quran Classes for Kids Cost?</h2>
          <table class="price-table">
            <thead><tr><th>Plan</th><th>Sessions/Week</th><th>Typical Monthly Cost</th></tr></thead>
            <tbody>
              <tr><td>Starter</td><td>2× 30 min</td><td>$29–$45/month</td></tr>
              <tr><td>Standard</td><td>3× 30 min</td><td>$45–$65/month</td></tr>
              <tr><td>Intensive</td><td>5× 30 min</td><td>$70–$100/month</td></tr>
            </tbody>
          </table>
          <p>At <a href="/pricing" style="color:var(--emerald);font-weight:600;">NoorPath Academy pricing</a>, plans start from $29/month with sibling discounts. Your first class is always free.</p>

          <h2>What Happens in the First Free Trial Class?</h2>
          <ol>
            <li>Teacher introduces themselves warmly to your child (5 min)</li>
            <li>Gentle level assessment — any prior Arabic? (5 min)</li>
            <li>Real teaching — usually 3–5 Arabic letters or a short dua (15 min)</li>
            <li>Parent Q&A and learning plan for month 1 (5 min)</li>
          </ol>
          <p>Your child should leave smiling and wanting to come back. If they don't — try a different tutor. A good academy will rematch without charge.</p>

          <h2>What Your Child Learns — Month-by-Month Curriculum</h2>
          <p>Parents ask: <em>"What will my child actually learn in the first 6 months?"</em> Here is a realistic timeline for <strong>online quran classes for kids</strong> starting from zero:</p>
          <div class="month-grid">
            <div class="month-card">
              <div class="month-label">Month 1</div>
              <strong>Arabic Letters & Fun</strong>
              <p style="font-size:.88rem;margin:8px 0 0;color:#4b5563;">First 10–14 letters with makharij. Short duas. Teacher builds rapport and routine.</p>
            </div>
            <div class="month-card">
              <div class="month-label">Month 2–3</div>
              <strong>Qaida Completion</strong>
              <p style="font-size:.88rem;margin:8px 0 0;color:#4b5563;">All 28 letters, harakat, letter joining, sukoon. Begin Surah Al-Fatiha.</p>
            </div>
            <div class="month-card">
              <div class="month-label">Month 4–6</div>
              <strong>Quran Reading</strong>
              <p style="font-size:.88rem;margin:8px 0 0;color:#4b5563;">Juz Amma surahs with basic Tajweed. Child reads in Salah with confidence.</p>
            </div>
          </div>
          <p>Progress varies by age, attendance, and home practice. A child who practices 5–10 minutes daily between classes progresses twice as fast. Read our <a href="/blog/noorani-qaida-complete-guide" style="color:var(--emerald);font-weight:600;">Noorani Qaida Complete Guide</a> to understand the foundation phase.</p>

          <h2>Hifz Quran Online for Kids — When to Start</h2>
          <p>Many parents ask about <strong>Hifz Quran online for kids</strong>. The ideal starting age for structured memorization is <strong>7–10 years</strong>, after the child can read Quran with reasonable fluency. Starting Hifz before completing Qaida creates frustration. Signs your child is ready for Hifz:</p>
          <ul>
            <li>Reads Juz Amma or at least 5–10 short surahs independently</li>
            <li>Can sit for 30–40 minute focused sessions</li>
            <li>Parent can support daily revision at home (Sabqi + Manzil)</li>
            <li>Child shows genuine motivation — not just parent pressure</li>
          </ul>
          <p>Learn more on our <a href="/hifz-quran-online" style="color:var(--emerald);font-weight:600;">Hifz Quran Online</a> page.</p>

          <h2>10 Red Flags When Choosing a Kids Quran Academy</h2>
          <div class="red-flag"><strong>🚩 No free trial</strong> — Legitimate academies always offer a trial lesson before payment.</div>
          <div class="red-flag"><strong>🚩 Pre-recorded "classes"</strong> — Marketed as live but actually video playlists.</div>
          <div class="red-flag"><strong>🚩 No Ijazah proof</strong> — Tutor cannot show certification when asked.</div>
          <div class="red-flag"><strong>🚩 Private WhatsApp with child</strong> — All communication must go through the academy.</div>
          <div class="red-flag"><strong>🚩 No progress reports</strong> — You never receive written updates on what was taught.</div>
          <div class="red-flag"><strong>🚩 Skips Noorani Qaida</strong> — Jumps straight to surah memorization without reading foundation.</div>
          <div class="red-flag"><strong>🚩 Unusually cheap pricing</strong> — Under $15/month often means unqualified tutors or group-only classes.</div>
          <div class="red-flag"><strong>🚩 No female teacher option</strong> — For daughters, this is often essential.</div>
          <div class="red-flag"><strong>🚩 Teacher refuses parent observation</strong> — Walk away immediately.</div>
          <div class="red-flag"><strong>🚩 Pressure to pay upfront for 6+ months</strong> — Monthly plans with trial first are standard.</div>

          <h2>5 Mistakes Parents Make (Avoid These)</h2>
          <div class="mistake-box"><strong>❌ Choosing the cheapest tutor:</strong> Incorrect Tajweed learned at age 5 takes years to fix. Invest in qualified teachers.</div>
          <div class="mistake-box"><strong>❌ Forcing 60-minute sessions:</strong> Children burn out. Short, consistent lessons win every time.</div>
          <div class="mistake-box"><strong>❌ No home practice:</strong> 5–10 minutes daily revision between classes doubles progress.</div>
          <div class="mistake-box"><strong>❌ Skipping Noorani Qaida:</strong> Jumping to Quran without Qaida creates permanent pronunciation errors.</div>
          <div class="mistake-box"><strong>❌ Not checking progress:</strong> Ask for weekly written reports. Silence from the academy is a red flag.</div>

          <h2>Frequently Asked Questions — Online Quran Classes for Kids</h2>
          <div class="highlight-box"><strong>What is the best age to start online Quran classes for kids?</strong><br>The ideal age is 4–7 years with 20–30 minute sessions. NoorPath accepts children from age 4 with adapted teaching. Ages 8–12 progress faster with 35–45 minute sessions.</div>
          <div class="highlight-box"><strong>Are online Quran classes safe for my child?</strong><br>Yes — when you choose a reputable academy, supervise sessions, use Zoom only, verify Ijazah credentials, and ensure no private messaging. NoorPath background-verifies all tutors.</div>
          <div class="highlight-box"><strong>Can my daughter learn with a female Quran teacher?</strong><br>Yes. Request a certified female Hafiza when booking your free trial. NoorPath offers female tutors for daughters and young girls worldwide.</div>
          <div class="highlight-box"><strong>Should my child complete Noorani Qaida before the Quran?</strong><br>Always. Qaida teaches letter pronunciation foundations. Skipping it leads to Tajweed errors that take years to fix. Every qualified kids program starts with Qaida.</div>
          <div class="highlight-box"><strong>How many Quran lessons per week does my child need?</strong><br>2–3 sessions of 20–35 minutes per week is ideal for most children. Hifz students may need 5–6 sessions weekly with daily home revision.</div>

          <h2>Online Quran Classes by Country</h2>
          <ul>
            <li><a href="/locations/online-quran-classes-uk" style="color:var(--emerald);font-weight:600;">Online Quran Classes UK</a> — After-school 3:30–6 pm GMT slots</li>
            <li><a href="/locations/online-quran-classes-usa" style="color:var(--emerald);font-weight:600;">Online Quran Classes USA</a> — Morning and evening US timezones</li>
            <li><a href="/locations/online-quran-classes-canada" style="color:var(--emerald);font-weight:600;">Online Quran Classes Canada</a> — EST/PST flexible scheduling</li>
            <li><a href="/locations/online-quran-classes-australia" style="color:var(--emerald);font-weight:600;">Online Quran Classes Australia</a> — After-school AEST/AEDT</li>
          </ul>

          <div class="highlight-box" style="margin-top:32px;">
            <strong>Ready to give your child the gift of Quran?</strong><br><br>
            NoorPath Academy offers <strong>live 1-on-1 online Quran classes for kids</strong> ages 4–12 with Ijazah-certified tutors, weekly parent reports, and a completely free 30-minute trial. 12,000+ families trust us worldwide.<br><br>
            <a href="/online-quran-classes-for-kids#cta" style="color:var(--emerald);font-weight:700;font-size:1.1rem;">Book your child's free trial class now →</a>
          </div>

          <div style="margin-top:48px;border-top:1px solid var(--border);padding-top:32px;">
            <h3 style="font-size:1.15rem;font-weight:700;margin-bottom:16px;">Related Articles</h3>
            <ul style="list-style:none;padding:0;margin:0;display:flex;flex-direction:column;gap:10px;">
              <li><a href="/online-quran-classes-for-kids" style="color:var(--emerald);font-weight:600;">Online Quran Classes for Kids — Landing Page</a></li>
              <li><a href="/blog/how-to-teach-quran-to-kids" style="color:var(--emerald);font-weight:600;">How to Teach Quran to Kids at Home</a></li>
              <li><a href="/blog/best-online-quran-academy-guide" style="color:var(--emerald);font-weight:600;">How to Choose the Best Online Quran Academy</a></li>
              <li><a href="/blog/benefits-of-online-quran-classes" style="color:var(--emerald);font-weight:600;">15 Benefits of Online Quran Classes</a></li>
            </ul>
          </div>`,
  },
  "bismillah-meaning-in-english": {
    style: `.article-body { font-size: 1.05rem; line-height: 1.85; color: #374151; }
    .article-body h2 { font-size: 1.5rem; font-weight: 700; color: var(--charcoal); margin: 40px 0 16px; }
    .article-body p { margin-bottom: 18px; }
    .article-body ul { margin-bottom: 18px; padding-left: 24px; }
    .highlight-box { background: rgba(10,110,79,.06); border-left: 4px solid var(--emerald); border-radius: 8px; padding: 20px 24px; margin: 24px 0; }
    .gold-box { background: rgba(232,184,75,.08); border-left: 4px solid var(--gold); border-radius: 8px; padding: 20px 24px; margin: 24px 0; }
    .word-hero { text-align:center; padding:48px 24px; background:linear-gradient(135deg,rgba(10,110,79,.04),rgba(10,110,79,.09)); border-radius:20px; margin:32px 0; border:1px solid rgba(10,110,79,.12); }
    .word-arabic-hero { font-family:'Amiri',serif; font-size:3.5rem; color:var(--emerald); line-height:1.3; margin-bottom:16px; direction:rtl; }
    .word-roman-hero { font-size:1.3rem; font-style:italic; color:#4b5563; margin-bottom:12px; }
    .break-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:14px; margin:20px 0; }
    .break-card { background:var(--ivory); border:1px solid var(--border); border-radius:12px; padding:18px 14px; text-align:center; }
    .bc-arabic { font-family:'Amiri',serif; font-size:1.5rem; color:var(--emerald); direction:rtl; margin-bottom:6px; }
    .bc-meaning { font-weight:700; color:var(--charcoal); font-size:.85rem; }
    @media (max-width:576px) { .break-grid { grid-template-columns:1fr; } .word-arabic-hero { font-size:2.5rem; } }`,
    content: `<p><strong>Bismillah</strong> is among the first Arabic words Muslim children learn — yet many adults use it daily without knowing its full depth, Quranic roots, or the difference between the short and complete forms.</p>

          <div class="highlight-box">
            <strong>Quick answer:</strong> <strong>Bismillah meaning in English</strong> is <em>"In the name of Allah."</em> Muslims say it before eating, drinking, traveling, studying, and starting any important action — seeking Allah's blessings and help. The full form is <strong>Bismillah ir-Rahman ir-Raheem</strong> — "In the name of Allah, the Most Gracious, the Most Merciful."
          </div>

          <div class="word-hero">
            <div class="word-arabic-hero">بِسْمِ اللَّهِ</div>
            <div class="word-roman-hero">Bismillāh</div>
            <div style="font-weight:600;color:var(--charcoal);">"In the name of Allah"</div>
          </div>

          <h2>Bismillah Meaning Word by Word</h2>
          <div class="break-grid">
            <div class="break-card"><div class="bc-arabic">بِ</div><div class="bc-meaning">Bi = In / With</div></div>
            <div class="break-card"><div class="bc-arabic">سْمِ</div><div class="bc-meaning">Ismi = Name</div></div>
            <div class="break-card"><div class="bc-arabic">اللَّهِ</div><div class="bc-meaning">Allah = Allah (God)</div></div>
          </div>

          <h2>Short Form vs Full Form</h2>
          <div class="gold-box">
            <strong>Short:</strong> بِسْمِ اللَّهِ — <em>Bismillah</em> — for daily actions (eating, entering home, starting homework)<br><br>
            <strong>Full:</strong> بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ — <em>Bismillah ir-Rahman ir-Raheem</em> — for Salah, Quran recitation, and formal acts. Opens every surah of the Quran except Surah At-Tawbah.
          </div>

          <h2>When Should You Say Bismillah?</h2>
          <ul>
            <li><strong>Before eating or drinking</strong> — Prophet ﷺ taught: "Say Bismillah, eat with your right hand, and eat from what is nearest to you." (Bukhari)</li>
            <li><strong>Before leaving home</strong> — "Bismillah, tawakkaltu 'alallah" — In Allah's name, I trust in Allah</li>
            <li><strong>Before studying Quran or any knowledge</strong> — Seeking Allah's help in understanding</li>
            <li><strong>Before starting work, travel, or marriage</strong> — Any significant new endeavour</li>
            <li><strong>Before wudu and Salah</strong> — Beginning acts of worship</li>
          </ul>

          <h2>Bismillah in the Quran</h2>
          <p>Every surah of the Quran (except Surah At-Tawbah) begins with Bismillah ir-Rahman ir-Raheem. The Quran itself opens with Surah Al-Fatiha, which starts with this blessed phrase — making Bismillah the gateway to the entire Book of Allah.</p>

          <h2>Teaching Children to Say Bismillah</h2>
          <p>The best way children learn Bismillah is through daily repetition in context — not lectures. Say it aloud before every meal, every car journey, and every Quran lesson. When children hear parents say Bismillah naturally, they adopt it as their own habit.</p>
          <p>For structured Quran and Islamic education, certified tutors teach Bismillah as part of <a href="/blog/noorani-qaida-complete-guide" style="color:var(--emerald);font-weight:600;">Noorani Qaida</a> and daily Islamic manners in <a href="/online-quran-classes-for-kids" style="color:var(--emerald);font-weight:600;">online Quran classes for kids</a>.</p>

          <div class="highlight-box" style="margin-top:32px;">
            <strong>Want your child to learn Bismillah, Quran, and Islamic manners with a certified tutor?</strong>
            <a href="/online-quran-classes-for-kids#cta" style="color:var(--emerald);font-weight:700;display:block;margin-top:12px;">Book a free 30-minute trial class for your child →</a>
          </div>

          <div style="margin-top:48px;border-top:1px solid var(--border);padding-top:32px;">
            <h3 style="font-size:1.15rem;font-weight:700;margin-bottom:16px;">Related Articles</h3>
            <ul style="list-style:none;padding:0;margin:0;display:flex;flex-direction:column;gap:10px;">
              <li><a href="/blog/inshallah-meaning-in-english" style="color:var(--emerald);font-weight:600;">Inshallah Meaning in English</a></li>
              <li><a href="/blog/alhamdulillah-meaning-in-english" style="color:var(--emerald);font-weight:600;">Alhamdulillah Meaning</a></li>
              <li><a href="/blog/mashallah-meaning" style="color:var(--emerald);font-weight:600;">Mashallah Meaning</a></li>
              <li><a href="/blog/surah-al-fatiha-arabic-english" style="color:var(--emerald);font-weight:600;">Surah Al-Fatiha — Arabic & English</a></li>
            </ul>
          </div>`,
  },

  "how-long-to-memorize-quran": {
    style: `.article-body { font-size: 1.05rem; line-height: 1.88; color: #374151; }
    .article-body h2 { font-size: 1.5rem; font-weight: 700; color: var(--charcoal); margin: 44px 0 16px; font-family: var(--font-playfair), serif; }
    .article-body h3 { font-size: 1.1rem; font-weight: 700; color: var(--emerald); margin: 28px 0 10px; }
    .article-body p { margin-bottom: 18px; }
    .article-body ul, .article-body ol { margin-bottom: 18px; padding-left: 24px; }
    .article-body li { margin-bottom: 8px; }
    .article-body strong { color: var(--charcoal); }
    .highlight-box { background: rgba(10,110,79,.06); border-left: 4px solid var(--emerald); border-radius: 10px; padding: 22px 26px; margin: 28px 0; }
    .gold-box { background: rgba(232,184,75,.08); border-left: 4px solid var(--gold); border-radius: 10px; padding: 22px 26px; margin: 28px 0; }
    .red-box { background: rgba(239,68,68,.06); border-left: 4px solid #ef4444; border-radius: 10px; padding: 22px 26px; margin: 28px 0; }
    .timeline-table { width: 100%; border-collapse: collapse; margin: 28px 0; font-size: .93rem; }
    .timeline-table th { background: var(--emerald); color: #fff; padding: 12px 16px; text-align: left; }
    .timeline-table td { padding: 11px 16px; border-bottom: 1px solid var(--border); vertical-align: top; }
    .timeline-table tr:nth-child(even) td { background: rgba(10,110,79,.03); }
    .timeline-table .best { color: var(--emerald); font-weight: 700; }
    .phase-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(220px, 1fr)); gap: 16px; margin: 24px 0; }
    .phase-card { background: var(--ivory); border: 1px solid var(--border); border-top: 3px solid var(--emerald); border-radius: 12px; padding: 20px; }
    .phase-num { font-size: .7rem; font-weight: 800; text-transform: uppercase; letter-spacing: .08em; color: var(--emerald); margin-bottom: 6px; }
    .phase-title { font-weight: 700; color: var(--charcoal); font-size: .97rem; margin-bottom: 4px; }
    .phase-dur { font-size: .82rem; color: var(--gold); font-weight: 600; margin-bottom: 10px; }
    .phase-desc { font-size: .85rem; color: var(--muted); line-height: 1.6; }
    .cta-inline { background: linear-gradient(135deg, #0a3d28, var(--emerald)); border-radius: 14px; padding: 28px 32px; margin: 36px 0; display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: 16px; }
    .cta-inline h3 { color: #fff; font-family: var(--font-playfair), serif; font-size: 1.2rem; margin: 0 0 4px; }
    .cta-inline p { color: rgba(255,255,255,.75); margin: 0; font-size: .88rem; }
    .cta-inline a { background: var(--gold); color: var(--charcoal); font-weight: 700; padding: 12px 24px; border-radius: 10px; text-decoration: none; font-size: .9rem; white-space: nowrap; flex-shrink: 0; }
    .stat-row { display: grid; grid-template-columns: repeat(auto-fill, minmax(150px, 1fr)); gap: 14px; margin: 24px 0; }
    .stat-box { background: var(--ivory); border: 1px solid var(--border); border-radius: 12px; padding: 18px 14px; text-align: center; }
    .stat-val { font-size: 1.6rem; font-weight: 800; color: var(--emerald); line-height: 1.1; }
    .stat-lbl { font-size: .75rem; color: var(--muted); margin-top: 4px; }
    .mistake-card { display: flex; gap: 14px; padding: 16px 20px; background: var(--ivory); border: 1px solid var(--border); border-radius: 12px; margin-bottom: 12px; }
    .mistake-num { flex-shrink: 0; width: 32px; height: 32px; border-radius: 8px; background: #ef4444; color: #fff; font-weight: 800; font-size: .82rem; display: flex; align-items: center; justify-content: center; }
    .faq-acc { border: 1px solid var(--border); border-radius: 10px; margin-bottom: 10px; overflow: hidden; }
    .faq-acc summary { padding: 16px 20px; font-weight: 700; cursor: pointer; background: var(--ivory); color: var(--charcoal); display: flex; justify-content: space-between; list-style: none; font-size: .95rem; }
    .faq-acc p { padding: 14px 20px; color: #374151; font-size: .92rem; line-height: 1.75; margin: 0; border-top: 1px solid var(--border); }
    @media (max-width: 576px) { .timeline-table { font-size: .82rem; } .cta-inline { flex-direction: column; } }`,
    content: `
          <div class="highlight-box">
            <strong style="color:var(--emerald);font-size:1rem;">Quick Answer:</strong>
            <p style="margin:8px 0 0;">With 5–6 sessions per week, children (ages 7–14) typically complete full Hifz in <strong>2–4 years</strong>. Adults doing part-time Hifz (2–3 sessions/week) usually take <strong>4–7 years</strong>. The Quran has 604 pages — daily consistency matters more than speed. <a href="/hifz-quran-online" style="color:var(--emerald);font-weight:700;">Start your free Hifz trial →</a></p>
          </div>

          <div class="stat-row">
            <div class="stat-box"><div class="stat-val">604</div><div class="stat-lbl">Pages in the Quran</div></div>
            <div class="stat-box"><div class="stat-val">6,236</div><div class="stat-lbl">Total Ayahs</div></div>
            <div class="stat-box"><div class="stat-val">30</div><div class="stat-lbl">Juz (parts)</div></div>
            <div class="stat-box"><div class="stat-val">114</div><div class="stat-lbl">Surahs</div></div>
          </div>

          <p>Every Muslim parent who dreams of raising a Hafiz asks the same question: <strong>"How long will Hifz actually take?"</strong> And every adult who has been putting off Quran memorization wonders: <em>"Is it too late for me? How many years would it realistically take?"</em></p>

          <p>The honest answer: <strong>it depends — but it is always achievable</strong>. This guide breaks down real timelines by age, sessions per week, daily pages memorized, and method (online vs. traditional madrassa). No vague promises. Just data and practical guidance so you can make the right decision for your family.</p>

          <h2>The Quran in Numbers — Understanding the Scale</h2>

          <p>Before discussing timelines, let's understand what we are memorizing:</p>
          <ul>
            <li>The Holy Quran has <strong>604 pages</strong> (standard Mushaf in the Indo-Pak/Uthmani script)</li>
            <li>It contains <strong>6,236 ayahs (verses)</strong> across <strong>114 surahs</strong></li>
            <li>It is divided into <strong>30 Juz (parts)</strong> of roughly 20 pages each</li>
            <li>An average page contains <strong>10–15 lines</strong> (about 10–15 ayahs)</li>
          </ul>

          <p>A student memorizing <strong>1 page per day</strong> — which is a standard, achievable target — would need <strong>604 days (~20 months)</strong> of new memorization. Add revision time, and total Hifz typically takes 2–5 years.</p>

          <div class="gold-box">
            <strong>⚠️ The Most Important Fact:</strong> New memorization is only <em>half</em> the work. The revision system (Sabaq-Sabqi-Manzil) that prevents forgetting takes equal time. Students who skip revision finish fast — and forget fast. Those who use a structured system finish slower but <em>keep their Hifz for life</em>.
          </div>

          <h2>How Long Does It Take to Memorize the Quran? — By Age Group</h2>

          <table class="timeline-table">
            <thead>
              <tr><th>Age Group</th><th>Daily Pages</th><th>Sessions/Week</th><th>Estimated Time</th><th>Notes</th></tr>
            </thead>
            <tbody>
              <tr><td><strong>Ages 6–9</strong></td><td>½ – 1 page</td><td>5–6/week</td><td class="best">3–5 years</td><td>Shorter sessions (30–40 min); strong memory but needs encouragement</td></tr>
              <tr><td><strong>Ages 10–14 ⭐</strong></td><td>1 – 1.5 pages</td><td>5–6/week</td><td class="best">2–3 years</td><td>Golden age — best memory + growing focus capacity</td></tr>
              <tr><td><strong>Ages 15–20</strong></td><td>1 – 2 pages</td><td>5–6/week</td><td>2–4 years</td><td>Strong memory + discipline; can self-manage</td></tr>
              <tr><td><strong>Adults 20–35</strong></td><td>½ – 1 page</td><td>3–5/week</td><td>3–6 years</td><td>Balancing work/family; slower retention but strong understanding</td></tr>
              <tr><td><strong>Adults 35–55</strong></td><td>¼ – ½ page</td><td>2–4/week</td><td>5–8 years</td><td>Fully possible; many complete Hifz in their 40s and 50s</td></tr>
              <tr><td><strong>Adults 55+</strong></td><td>3–5 lines</td><td>2–3/week</td><td>7–12 years</td><td>Age is never a barrier — slower but deeply rewarding</td></tr>
            </tbody>
          </table>

          <p><em>Note: These are realistic averages based on consistent practice. Exceptional students with natural memorization ability and intensive schedules may complete Hifz significantly faster. Part-time or irregular students may take longer.</em></p>

          <h2>The #1 Factor: How Many Sessions Per Week?</h2>

          <p>The single biggest variable in Hifz speed is <strong>how many sessions per week you have with a qualified tutor</strong>. Here is the real-world impact:</p>

          <table class="timeline-table">
            <thead>
              <tr><th>Sessions Per Week</th><th>Child (age 10) Timeline</th><th>Adult Timeline</th><th>Verdict</th></tr>
            </thead>
            <tbody>
              <tr><td><strong>6 sessions</strong></td><td class="best">2.5–3 years</td><td class="best">4–5 years</td><td>✅ Ideal for serious Hifz</td></tr>
              <tr><td><strong>5 sessions</strong></td><td>3–3.5 years</td><td>5–6 years</td><td>✅ Recommended minimum</td></tr>
              <tr><td><strong>3–4 sessions</strong></td><td>4–5 years</td><td>6–8 years</td><td>⚠️ Slower but sustainable for busy families</td></tr>
              <tr><td><strong>2 sessions</strong></td><td>6–8 years</td><td>8–12 years</td><td>⚠️ Very slow — revision suffers</td></tr>
              <tr><td><strong>1 session</strong></td><td>Rarely completes</td><td>Rarely completes</td><td>❌ Revision gap is too large</td></tr>
            </tbody>
          </table>

          <div class="cta-inline">
            <div>
              <h3>Want to Start Hifz Online?</h3>
              <p>NoorPath certified Huffaz tutors available for kids &amp; adults — free 30-min trial</p>
            </div>
            <a href="/hifz-quran-online">Book Free Hifz Trial →</a>
          </div>

          <h2>The Sabaq-Sabqi-Manzil System — The Engine of Hifz</h2>

          <p>Every serious Hifz program — whether in a traditional madrassa or online — is built on one system: <strong>Sabaq, Sabqi, and Manzil</strong>. Understanding this is essential before calculating your timeline.</p>

          <div class="phase-grid">
            <div class="phase-card">
              <div class="phase-num">Daily Task 1</div>
              <div class="phase-title">📖 Sabaq (New)</div>
              <div class="phase-dur">Today's new memorization</div>
              <div class="phase-desc">The new portion memorized today — typically ½ to 1 page. This is presented fresh to the tutor at the start of every session.</div>
            </div>
            <div class="phase-card">
              <div class="phase-num">Daily Task 2</div>
              <div class="phase-title">🔁 Sabqi (Recent)</div>
              <div class="phase-dur">Last 7–15 days' revision</div>
              <div class="phase-desc">The portions memorized in the past 7–15 days are recited again — preventing short-term memory decay before it becomes permanent.</div>
            </div>
            <div class="phase-card">
              <div class="phase-num">Daily Task 3</div>
              <div class="phase-title">🗓️ Manzil (Old)</div>
              <div class="phase-dur">Older Juz cycled weekly</div>
              <div class="phase-desc">Completed Juz are revisited in rotation — ensuring old memorization stays strong as new portions are added. Typically 1 Juz of old revision per day.</div>
            </div>
          </div>

          <p>Without the Sabaq-Sabqi-Manzil system, students forget rapidly. The brain naturally discards information not reinforced — the Quran is no exception. A certified Hafiz tutor structures each session so all three layers happen every day. This is why a <strong>qualified tutor is non-negotiable</strong> for successful Hifz — not just for teaching, but for accountability and revision scheduling.</p>

          <h2>Online Hifz vs. Traditional Madrassa — Which is Faster?</h2>

          <table class="timeline-table">
            <thead>
              <tr><th>Factor</th><th>Online Hifz (NoorPath)</th><th>Traditional Madrassa</th></tr>
            </thead>
            <tbody>
              <tr><td><strong>Sessions/week</strong></td><td>5–6 (flexible)</td><td>6 (fixed)</td></tr>
              <tr><td><strong>1-on-1 attention</strong></td><td class="best">✅ Always 1-on-1</td><td>⚠️ Often group (5–15 students)</td></tr>
              <tr><td><strong>Tutor quality</strong></td><td class="best">✅ Ijazah-certified, background checked</td><td>⚠️ Varies significantly</td></tr>
              <tr><td><strong>Scheduling</strong></td><td class="best">✅ Morning, evening, weekend — your choice</td><td>❌ Fixed daily schedule</td></tr>
              <tr><td><strong>Progress tracking</strong></td><td class="best">✅ Weekly reports for parents</td><td>❌ Informal or none</td></tr>
              <tr><td><strong>Pronunciation correction</strong></td><td class="best">✅ Every mistake caught live</td><td>⚠️ May miss individual errors in group</td></tr>
              <tr><td><strong>Total completion time</strong></td><td>Similar — 2–5 years</td><td>Similar — 2–5 years</td></tr>
            </tbody>
          </table>

          <p>The completion time is similar — but the <strong>quality and sustainability</strong> of online 1-on-1 Hifz is often superior. A certified tutor giving your child their full 45 minutes catches every pronunciation error, adjusts the daily target to your child's capacity, and ensures revision is structured correctly.</p>

          <h2>Real-World Hifz Timelines — What Actually Happens</h2>

          <h3>Case 1: Child, Age 10, 5 sessions/week</h3>
          <p>A motivated 10-year-old memorizing ½–1 page daily, with 5 sessions per week with a certified Hafiz tutor online, will typically:</p>
          <ul>
            <li><strong>Month 1–3:</strong> Foundation — assessment, memorization rhythm, first 3–5 surahs</li>
            <li><strong>Month 4–18:</strong> Main memorization — completing Juz 30, 29, 28… Juz by Juz</li>
            <li><strong>Month 19–36:</strong> Full Quran completion + final revision cycle</li>
            <li><strong>Result: Hifz completed in ~3 years</strong></li>
          </ul>

          <h3>Case 2: Adult, Age 30, Working Parent, 3 sessions/week</h3>
          <p>An adult working parent with 3 online sessions per week (45 min each) memorizing ¼–½ page daily, plus 20 minutes evening revision:</p>
          <ul>
            <li><strong>Year 1:</strong> Juz 30 + 29 + 28 (short surahs — high motivation period)</li>
            <li><strong>Year 2–4:</strong> Main body of Quran — 1 Juz every 3–4 months</li>
            <li><strong>Year 5–6:</strong> Completion + comprehensive revision cycle</li>
            <li><strong>Result: Hifz completed in ~5–6 years</strong></li>
          </ul>

          <div class="gold-box">
            <strong style="color:var(--charcoal);">📌 Start with Juz 30</strong><br/>
            Almost every Hifz program starts with Juz 30 (the last part of the Quran — Surah An-Naas backward to An-Naba). The surahs are shorter, the student builds confidence and momentum, and many surahs are already partially known from prayer. This is the most important strategic decision in starting Hifz.
          </div>

          <h2>The 7 Most Common Reasons Hifz Takes Too Long (or Fails)</h2>

          <div class="mistake-card">
            <div class="mistake-num">1</div>
            <div><strong>Skipping Revision Sessions</strong> — The most common cause of Hifz stalling. Memorizing new portions without revising old ones. Within weeks, old Juz become unreliable and the student must go back and re-memorize.</div>
          </div>
          <div class="mistake-card">
            <div class="mistake-num">2</div>
            <div><strong>No Qualified Tutor</strong> — Self-taught Hifz without a certified Hafiz tutor leads to pronunciation errors becoming permanent. A tutor also provides accountability — without which most students slow down and eventually stop.</div>
          </div>
          <div class="mistake-card">
            <div class="mistake-num">3</div>
            <div><strong>Targeting Too Many Pages Too Fast</strong> — Ambitious beginners try to memorize 2–3 pages per day without building a foundation. The Sabqi and Manzil debt grows until revision is impossible and they lose months of memorization.</div>
          </div>
          <div class="mistake-card">
            <div class="mistake-num">4</div>
            <div><strong>Inconsistent Schedule</strong> — 5 sessions one week, 1 session the next. Hifz requires rhythm. Missing 3–4 days breaks memorization chains and forces re-memorization. Even 20 minutes daily beats 3 hours weekly.</div>
          </div>
          <div class="mistake-card">
            <div class="mistake-num">5</div>
            <div><strong>No Tajweed Foundation</strong> — Students who start Hifz without proper Tajweed memorize with pronunciation errors baked in. Unlearning wrong Tajweed from memorized portions takes far longer than learning correctly from the start.</div>
          </div>
          <div class="mistake-card">
            <div class="mistake-num">6</div>
            <div><strong>Setting Unrealistic Timelines</strong> — Seeing stories of 7-year-olds who memorized Quran in 1 year and expecting the same for a 12-year-old with 3 sessions/week. Unrealistic targets lead to disappointment and abandonment.</div>
          </div>
          <div class="mistake-card">
            <div class="mistake-num">7</div>
            <div><strong>Not Using the Same Mushaf</strong> — Switching between different Mushafs (page layouts) mid-Hifz confuses visual memory. Always use the same Mushaf throughout — your brain memorizes the position of words on the page, not just the words themselves.</div>
          </div>

          <h2>How to Calculate Your Personal Hifz Timeline</h2>

          <p>Use this simple formula to estimate your timeline:</p>

          <div class="highlight-box">
            <strong style="font-size:1rem;color:var(--charcoal);">Your Hifz Timeline Formula:</strong>
            <p style="margin:12px 0 0;font-size:.95rem;">
              <strong>604 pages ÷ Your daily pages = Days of new memorization</strong><br/>
              <em>Then multiply by 1.4–1.6 to account for revision time</em>
            </p>
            <ul style="margin:14px 0 0;font-size:.9rem;">
              <li>½ page/day → 1,208 days new + revision = <strong>~4.5–5 years</strong></li>
              <li>1 page/day → 604 days new + revision = <strong>~2.5–3 years</strong></li>
              <li>1.5 pages/day → 400 days new + revision = <strong>~1.8–2.5 years</strong></li>
              <li>2 pages/day → 302 days new + revision = <strong>~1.5–2 years</strong> (intensive — requires 6+ sessions/week)</li>
            </ul>
          </div>

          <h2>Tips to Memorize Quran Faster Without Sacrificing Quality</h2>

          <ol>
            <li><strong>Memorize after Fajr.</strong> The Prophet ﷺ made dua for barakah in the early morning hours. Memory is sharpest and the environment is most peaceful right after Fajr — this is when the great Huffaz of history memorized.</li>
            <li><strong>Listen before you memorize.</strong> Play your daily portion on repeat (Sheikh Husary, Mishary Al-Afasy, etc.) before the tutor session. The ear memorizes before the tongue. Even 10 minutes of listening dramatically reduces new memorization time.</li>
            <li><strong>Use the same spot every day.</strong> Your brain forms environmental memory associations. Same chair, same light, same Mushaf at the same time — creates a powerful memorization ritual.</li>
            <li><strong>Recite in Salah immediately.</strong> Reciting newly memorized portions in Fajr, Dhuhr, and Asr Salah the same day imprints them faster than any other technique. The intention of worship combined with the physical act of prayer creates the deepest memory traces.</li>
            <li><strong>Never move on until today's portion is solid.</strong> A common mistake is moving to new pages with weak memorization. The "one page per day" that is rock solid beats two weak pages every time.</li>
            <li><strong>Take a weekly full Sabqi day.</strong> Dedicate one session each week purely to revising the last 15 days' memorization without any new content. This dramatically strengthens retention.</li>
            <li><strong>Track your Juz progress visually.</strong> Keep a chart or tracker showing completed Juz. The psychological motivation of seeing 10/30 completed accelerates the remaining 20.</li>
          </ol>

          <div class="cta-inline">
            <div>
              <h3>Start Hifz with a Certified Hafiz Tutor</h3>
              <p>1-on-1 live sessions — kids &amp; adults — structured Sabaq-Sabqi-Manzil system. Free trial.</p>
            </div>
            <a href="/hifz-quran-online">Book Free Hifz Trial →</a>
          </div>

          <h2>Can Adults Really Complete Hifz? (Honest Answer)</h2>

          <p><strong>Yes — and more adults complete Hifz online than most people realise.</strong></p>

          <p>The Prophet Muhammad ﷺ said: <em>"The one who is proficient in Quran recitation will be with the noble, righteous scribes (angels). As for the one who recites the Quran with difficulty, stammering or stumbling through its verses — they will have twice the reward."</em> (Bukhari & Muslim)</p>

          <p>Allah rewards effort and sincerity — not speed. Adults who complete Hifz in 6–7 years, balancing job, children, and family, earn immense reward precisely because of the sacrifice involved.</p>

          <p>The key differences for adult Hifz:</p>
          <ul>
            <li><strong>Lower daily target.</strong> ¼ to ½ page is realistic for most working adults. Ambitious is good; unrealistic is dangerous.</li>
            <li><strong>Morning before work.</strong> Even 30 minutes of Fajr-time memorization is more effective than 2 hours at midnight.</li>
            <li><strong>Online tutor advantage.</strong> Adults cannot attend a physical madrassa daily. Online Hifz removes this barrier completely.</li>
            <li><strong>Understanding deepens retention.</strong> Adults who understand Arabic (or learn Tafseer alongside) memorize up to 40% faster because meaning anchors the words.</li>
          </ul>

          <div class="highlight-box">
            <strong style="color:var(--emerald);">Real Student Story (Adult, UK):</strong>
            <p style="margin:8px 0 0;font-size:.93rem;">One of our NoorPath students, a 42-year-old IT professional in Manchester with no prior Hifz experience, began with 3 sessions/week in 2021. By 2025 — 4 years later — he completed his Hifz in front of a qualified Shaykh. He says: <em>"I never thought I could do this. My tutor was my accountability partner. Without the online schedule, I would have quit in Month 3."</em></p>
          </div>

          <h2>Frequently Asked Questions About Quran Memorization Time</h2>

          <details class="faq-acc">
            <summary>How long does it take to memorize 1 Juz of the Quran? <span>+</span></summary>
            <p>One Juz (part) of the Quran is approximately 20 pages. Memorizing 1 Juz with solid revision typically takes: <strong>Children (ages 10–14):</strong> 3–4 weeks at 1 page/day. <strong>Adults (3 sessions/week):</strong> 6–10 weeks at ½ page/day. The last Juz (Juz 30) is usually done first and may take slightly longer as it is the first Juz — the student is building memorization habits.</p>
          </details>
          <details class="faq-acc">
            <summary>How long does it take to memorize the Quran in 2 years? <span>+</span></summary>
            <p>Completing Hifz in 2 years requires memorizing approximately 1.5–2 pages daily with 6 sessions per week. This is achievable for children ages 10–14 with exceptional memory and daily commitment. For adults, 2-year Hifz requires full-time or near-full-time dedication — possible but demanding. Most serious child students complete Hifz in 2.5–3.5 years.</p>
          </details>
          <details class="faq-acc">
            <summary>How long does the Hifz program take at NoorPath Academy online? <span>+</span></summary>
            <p>Most children at NoorPath complete Hifz in <strong>2.5–4 years</strong> with 5–6 sessions per week. Adults completing part-time Hifz (3 sessions/week) typically finish in <strong>5–7 years</strong>. Every student receives a personalized timeline assessment during their free trial session based on their current level, age, and available sessions per week.</p>
          </details>
          <details class="faq-acc">
            <summary>How many pages of Quran should a child memorize per day? <span>+</span></summary>
            <p>As a general guide: <strong>Ages 6–8:</strong> 3–7 lines per day. <strong>Ages 9–11:</strong> ½ page per day. <strong>Ages 12–14:</strong> ½ to 1 page per day. <strong>Ages 15+:</strong> 1 to 1.5 pages per day. Your tutor will set the exact daily target based on your child's retention strength — some children memorize faster, some slower, and both are completely normal.</p>
          </details>
          <details class="faq-acc">
            <summary>What is the fastest anyone has memorized the Quran? <span>+</span></summary>
            <p>Historical accounts mention scholars who completed the entire Quran in as little as 17 days of focused memorization. In modern times, some children at full-time Hifz schools memorize the complete Quran in 12–18 months. However, these are exceptional cases with 8+ hours of daily study. For the vast majority, 2–5 years represents an excellent, solid Hifz outcome.</p>
          </details>
          <details class="faq-acc">
            <summary>Is it too late to start Hifz at age 30, 40 or 50? <span>+</span></summary>
            <p>Never. The Prophet ﷺ encouraged Quran memorization at every age. Sahabah (companions) who became Huffaz included adults. The reward is immense at every age — and Allah looks at sincerity, not age. Adults at NoorPath regularly begin Hifz in their 30s, 40s, and 50s. The timeline is longer, but the completion is equally valid and celebrated. The question is not <em>if</em> — it is <em>when to start</em>.</p>
          </details>
          <details class="faq-acc">
            <summary>Do I need to know Tajweed before starting Hifz? <span>+</span></summary>
            <p>Basic Tajweed should be learned <em>before or alongside</em> Hifz — not after. The problem with starting Hifz without Tajweed is that pronunciation errors get memorized and are very difficult to correct later. At NoorPath, our Hifz program includes Tajweed correction in every session. Students who have already studied Tajweed basics before starting Hifz typically progress 20–30% faster because they are not making pronunciation mistakes in new memorization.</p>
          </details>

          <h2>Next Steps — Start Your Hifz Journey</h2>

          <p>The best time to start Hifz was yesterday. The second best time is right now — with a qualified tutor who will assess your child's (or your) level, set a realistic daily target, and provide the accountability and structure that makes the difference between completing Hifz and giving up in Year 2.</p>

          <p>At <a href="/online-quran-academy" style="color:var(--emerald);font-weight:600;">NoorPath Academy</a>, our certified Huffaz tutors have guided hundreds of students — from 7-year-olds to adults in their 50s — through the complete Hifz journey online. The first lesson is always free, and your tutor will give you a personalised timeline assessment during that session.</p>

          <div style="background:linear-gradient(135deg,#0a3d28,var(--emerald));border-radius:16px;padding:32px;text-align:center;margin:40px 0;">
            <h3 style="font-family:var(--font-playfair),serif;color:#fff;font-size:1.6rem;margin-bottom:12px;">Begin Your Hifz Journey Today</h3>
            <p style="color:rgba(255,255,255,.8);margin-bottom:24px;line-height:1.7;">Free 30-minute trial with a certified Hafiz tutor. Get your personal timeline, daily target, and first Sabaq lesson — all in the trial.</p>
            <div style="display:flex;gap:12px;justify-content:center;flex-wrap:wrap;">
              <a href="/hifz-quran-online" style="background:var(--gold);color:var(--charcoal);font-weight:700;padding:13px 28px;border-radius:10px;text-decoration:none;font-size:.95rem;">Book Free Hifz Trial →</a>
              <a href="/online-quran-classes-for-kids" style="background:rgba(255,255,255,.12);color:#fff;font-weight:600;padding:13px 24px;border-radius:10px;text-decoration:none;font-size:.92rem;border:1px solid rgba(255,255,255,.3);">Kids Quran Classes</a>
            </div>
          </div>

          <div style="margin-top:48px;border-top:1px solid var(--border);padding-top:32px;">
            <h3 style="font-size:1.1rem;font-weight:700;margin-bottom:16px;">Related Articles</h3>
            <ul style="list-style:none;padding:0;margin:0;display:flex;flex-direction:column;gap:10px;">
              <li><a href="/blog/how-to-memorize-quran-faster" style="color:var(--emerald);font-weight:600;">12 Proven Techniques to Memorize Quran Faster</a></li>
              <li><a href="/blog/best-age-to-start-quran-learning" style="color:var(--emerald);font-weight:600;">Best Age to Start Quran Learning — Expert Guide for Parents</a></li>
              <li><a href="/blog/noorani-qaida-complete-guide" style="color:var(--emerald);font-weight:600;">Noorani Qaida Complete Guide</a></li>
              <li><a href="/hifz-quran-online" style="color:var(--emerald);font-weight:600;">Hifz Quran Online — Our Program</a></li>
              <li><a href="/blog/online-quran-classes-for-kids-parent-guide" style="color:var(--emerald);font-weight:600;">Best Online Quran Classes for Kids — Parent Guide</a></li>
            </ul>
          </div>`,
  },
};
