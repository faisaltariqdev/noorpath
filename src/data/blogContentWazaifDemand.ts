/**
 * High-volume wazaif / dhikr / hajat demand topics.
 * Authentic Quran & Sunnah only — reject invented “guaranteed” wazaif.
 */

const S = `.article-body { font-size: 1.05rem; line-height: 1.85; color: #374151; }
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
  @media (max-width: 576px) { .np-table { font-size: .82rem; } .arabic { font-size: 1.55rem; line-height: 2.3; } }`;

export const wazaifDemandBlogContent: Record<string, { style: string; content: string }> = {
  "what-is-wazifa-in-islam": {
    style: S,
    content: `<p>People searching <strong>what is wazifa in Islam</strong> usually want a daily practice that brings barakah — but the internet mixes authentic dhikr with invented “guaranteed” formulas. In clear language, a sound wazifa is simply consistent remembrance and dua from the Quran and Sunnah, done with sincerity — not a paid charm.</p>

          <div class="highlight-box">
            <strong>Quick answer:</strong> A <strong>wazifa</strong> (وظيفة) commonly means a regular spiritual assignment: Quran, adhkar, or dua you keep daily. The safest wazaif are prophetic morning/evening adhkar, istighfar, salawat, and Quranic duas. Avoid viral lists that promise money, marriage, or miracles for a secret count. Learn authentic wording with a <a href="/free-quran-classes-online">free trial</a>.
          </div>

          <h2 id="meaning">What does wazifa mean?</h2>
          <p>In everyday Muslim usage (especially South Asia), “wazifa” means a set practice you recite regularly for a need — rizq, ease, protection, or closeness to Allah. Classical Islam already has this idea under <strong>adhkar</strong>, <strong>awrad</strong>, and <strong>dua</strong>. The wording that matters is authenticity, not the Urdu/English label.</p>

          <h2 id="authentic">Authentic wazifa sources (safe list)</h2>
          <table class="np-table">
            <tr><th>Practice</th><th>Why it is sound</th><th>Start here</th></tr>
            <tr><td>Morning &amp; evening adhkar</td><td>Prophetic daily protection &amp; gratitude</td><td><a href="/blog/morning-evening-adhkar-dhikr">morning/evening adhkar</a></td></tr>
            <tr><td>Istighfar / Sayyid al-Istighfar</td><td>Forgiveness is foundational</td><td><a href="/blog/dua-for-forgiveness-istighfar">istighfar guide</a></td></tr>
            <tr><td>Salawat / Darood</td><td>Commanded remembrance of the Prophet ﷺ</td><td><a href="/blog/darood-sharif">Darood Sharif</a></td></tr>
            <tr><td>Quranic duas (e.g. 2:201)</td><td>Allah’s own words</td><td><a href="/blog/rabbana-atina-fid-dunya">Rabbana atina</a></td></tr>
            <tr><td>Ayatul Kursi, Mu‘awwidhat</td><td>Documented protection practice</td><td><a href="/blog/ayatul-kursi-arabic-english-benefits">Ayatul Kursi</a> · <a href="/blog/4-quls">4 Quls</a></td></tr>
          </table>

          <h2 id="red-flags">Fake “wazifa” red flags</h2>
          <div class="gold-box">
            <strong>Avoid:</strong> “Do this 11,111 times and money arrives,” paid “special number” sheets with no sanad, mixing unclear names with superstition, or skipping salah/halal earnings while waiting for a formula. Dua does not cancel taking means (asbab).
          </div>
          <ul>
            <li>No authentic source named (only “a saint said” on WhatsApp)</li>
            <li>Guaranteed worldly outcomes in a fixed number of days</li>
            <li>Requires money to “activate” the wazifa</li>
            <li>Conflicts with clear Quran/Sunnah</li>
          </ul>

          <h2 id="how">How to keep a simple daily wazifa</h2>
          <ol>
            <li>Choose <em>one</em> short authentic set (e.g. after Fajr adhkar)</li>
            <li>Understand the English meaning</li>
            <li>Keep pronunciation correct — especially for kids</li>
            <li>Pair with lawful effort and good character</li>
            <li>Make personal dua in your language after the Arabic</li>
          </ol>
          <p>Parents: teach children short pieces — <a href="/blog/duas-for-kids-to-memorize">duas for kids</a> · <a href="/online-quran-classes-for-kids">kids classes</a>.</p>

          <h2 id="faq">FAQ</h2>
          <details class="faq-acc"><summary>Is wazifa allowed in Islam?<span>+</span></summary>
            <p>Consistent dhikr and dua from Quran and Sunnah are encouraged. Invented formulas with guaranteed outcomes are not a substitute for authentic worship.</p>
          </details>
          <details class="faq-acc"><summary>What is the best wazifa for rizq?<span>+</span></summary>
            <p>Stick to authentic rizq duas, gratitude, charity when able, and lawful work — see <a href="/blog/dua-for-rizq-arabic-english">dua for rizq</a>. There is no secret paid shortcut.</p>
          </details>
          <details class="faq-acc"><summary>Can I make a wazifa in English?<span>+</span></summary>
            <p>Yes — ask Allah in any language. Learning Arabic prophetic wording is rewarding when taught correctly.</p>
          </details>
          <details class="faq-acc"><summary>How long should a wazifa be?<span>+</span></summary>
            <p>Consistency beats length. A few authentic lines every day are better than a huge list abandoned after three days.</p>
          </details>
          <p>The best wazifa is one Allah loves: sincere, authentic, and lived — not a viral promise with a price tag.</p>`,
  },

  "adhkar-after-salah-arabic-english": {
    style: S,
    content: `<p><strong>Adhkar after salah</strong> are among the most searched daily Islamic practices — short remembrances the Prophet ﷺ taught after finishing prayer. They take a few minutes and protect the heart from rushing away empty after salah.</p>

          <div class="highlight-box">
            <strong>Quick answer:</strong> After salam, a common Sunnah set includes <strong>Astaghfirullah</strong> (3×), <strong>Allahumma anta as-salam…</strong>, then <strong>Subhanallah</strong> 33, <strong>Alhamdulillah</strong> 33, <strong>Allahu Akbar</strong> 33 (or 34 to complete 100), plus Ayatul Kursi and the Mu‘awwidhat. Teach kids the short forms with a <a href="/online-quran-classes-for-kids">kids trial</a>.
          </div>

          <h2 id="istighfar">1) Istighfar after salam</h2>
          <div class="verse-card">
            <span class="vnum">AFTER SALAM · 3 TIMES</span>
            <div class="arabic">أَسْتَغْفِرُ اللَّهَ</div>
            <p class="translit">Astaghfirullah. (three times)</p>
            <p class="trans-en"><strong>English:</strong> I seek Allah’s forgiveness.</p>
          </div>

          <h2 id="salam-dua">2) Allahumma anta as-salam</h2>
          <div class="verse-card">
            <span class="vnum">PROPHETIC DUA · Muslim</span>
            <div class="arabic">اللَّهُمَّ أَنْتَ السَّلَامُ وَمِنْكَ السَّلَامُ، تَبَارَكْتَ يَا ذَا الْجَلَالِ وَالْإِكْرَامِ</div>
            <p class="translit">Allaahumma anta as-salaam wa minka as-salaam, tabaarakta yaa dhal-jalaali wal-ikraam.</p>
            <p class="trans-en"><strong>English:</strong> O Allah, You are As-Salam (Peace) and from You is peace. Blessed are You, O Possessor of majesty and honour.</p>
          </div>

          <h2 id="tasbih">3) Tasbih, tahmid, takbir (33 / 33 / 33)</h2>
          <table class="np-table">
            <tr><th>Dhikr</th><th>Count (common)</th><th>Meaning</th></tr>
            <tr><td>Subhanallah</td><td>33</td><td>Glory be to Allah</td></tr>
            <tr><td>Alhamdulillah</td><td>33</td><td>All praise is for Allah</td></tr>
            <tr><td>Allahu Akbar</td><td>33 (often +1 to complete 100)</td><td>Allah is the Greatest</td></tr>
          </table>
          <p>Phrase guides: <a href="/blog/subhanallah-meaning">Subhanallah</a> · <a href="/blog/alhamdulillah-meaning-in-english">Alhamdulillah</a> · <a href="/blog/allahu-akbar-meaning-in-english">Allahu Akbar</a>.</p>

          <h2 id="kursi">4) Ayatul Kursi after salah</h2>
          <p>Many Muslims recite Ayatul Kursi after each fard prayer — a widely practised protection habit. Full text: <a href="/blog/ayatul-kursi-arabic-english-benefits">Ayatul Kursi</a>.</p>

          <h2 id="quls">5) Mu‘awwidhat (Ikhlas, Falaq, Nas)</h2>
          <p>Reciting the three Quls after salah is a common completion of the post-prayer routine. Guide: <a href="/blog/4-quls">4 Quls</a>.</p>

          <div class="gold-box">
            <strong>Note:</strong> Counts and exact combinations can vary slightly across narrations and schools. Follow a reliable teacher; do not turn adhkar into anxiety about “missing one bead.” Presence of heart matters.
          </div>

          <h2 id="tips">Tips to never skip them</h2>
          <ul>
            <li>Stay seated for 60–90 seconds before checking your phone</li>
            <li>Use fingers if you have no tasbih</li>
            <li>Teach children one line at a time</li>
            <li>Pair with morning/evening sets: <a href="/blog/morning-evening-adhkar-dhikr">morning &amp; evening adhkar</a></li>
          </ul>

          <h2 id="faq">FAQ</h2>
          <details class="faq-acc"><summary>What should I recite after salah?<span>+</span></summary>
            <p>A practical Sunnah set is istighfar thrice, Allahumma anta as-salam, Subhanallah/Alhamdulillah/Allahu Akbar 33 each, plus Ayatul Kursi and the Mu‘awwidhat when you can.</p>
          </details>
          <details class="faq-acc"><summary>Is 33 times required exactly?<span>+</span></summary>
            <p>Thirty-three is the famous count in authentic reports for these phrases after salah. Follow the wording your teacher uses; sincerity is the goal.</p>
          </details>
          <details class="faq-acc"><summary>Can women recite the same adhkar after salah?<span>+</span></summary>
            <p>Yes — these remembrances are for every Muslim who prays.</p>
          </details>
          <details class="faq-acc"><summary>What if I forget the Arabic?<span>+</span></summary>
            <p>Learn one line per week. Meanwhile praise Allah in words you know, and keep practising correct Arabic with a tutor if needed.</p>
          </details>
          <p>Salah ends with salam — but the heart stays with Allah when the tongue continues with short, authentic adhkar.</p>`,
  },

  "hasbunallahu-wa-nimal-wakeel-meaning": {
    style: S,
    content: `<p><strong>Hasbunallahu wa ni‘mal wakeel</strong> is one of the most searched Islamic phrases in hardship — said when fear, pressure, or injustice rises. It is Quranic trust: Allah is enough, and He is the best Disposer of affairs.</p>

          <div class="highlight-box">
            <strong>Quick answer:</strong> <strong>Hasbunallahu wa ni‘mal-wakeel</strong> means <strong>“Allah is sufficient for us, and He is the best Disposer of affairs.”</strong> It appears in Quran 3:173. Recite it when anxiety spikes, then take the next lawful step. Soft learning help: <a href="/free-quran-classes-online">free Quran trial</a>.
          </div>

          <h2 id="arabic">Arabic, transliteration, English</h2>
          <div class="verse-card">
            <span class="vnum">QURAN 3:173</span>
            <div class="arabic">حَسْبُنَا اللَّهُ وَنِعْمَ الْوَكِيلُ</div>
            <p class="translit">Hasbunallaahu wa ni‘mal-wakeel.</p>
            <p class="trans-en"><strong>English:</strong> Allah is sufficient for us, and He is the best Disposer of affairs.</p>
          </div>

          <h2 id="context">Quranic context</h2>
          <p>The believers said this when people tried to frighten them after Uhud-related threats (Surah Aal Imran). Their response was trust, not collapse — and Allah mentions that they returned with favour and bounty.</p>

          <h2 id="when">When to say Hasbunallah</h2>
          <ul>
            <li>When fear of people or outcomes overwhelms you</li>
            <li>Before medical results, court matters, or family conflict</li>
            <li>When you have done your part and must leave the result to Allah</li>
            <li>Together with other trust phrases like <a href="/blog/la-hawla-wa-la-quwwata-illallah-meaning">La hawla wa la quwwata</a></li>
          </ul>

          <h2 id="not">What it is not</h2>
          <div class="gold-box">
            <strong>Not a magic spell:</strong> Saying Hasbunallah does not replace medicine, legal advice, or leaving a harmful situation. It is tawakkul — trust after (or while) taking means.
          </div>

          <h2 id="kids">Teach children the meaning</h2>
          <p>Explain: “We try our best, and Allah takes care of what we cannot control.” Keep pronunciation gentle — <a href="/blog/duas-for-kids-to-memorize">duas for kids</a>.</p>

          <h2 id="faq">FAQ</h2>
          <details class="faq-acc"><summary>What does Hasbunallahu wa nimal wakeel mean?<span>+</span></summary>
            <p>It means Allah is enough for us, and He is the best One to entrust our affairs to.</p>
          </details>
          <details class="faq-acc"><summary>Is Hasbunallah in the Quran?<span>+</span></summary>
            <p>Yes — Surah Aal Imran 3:173.</p>
          </details>
          <details class="faq-acc"><summary>How many times should I recite it?<span>+</span></summary>
            <p>There is no required viral number. Recite with presence whenever fear rises; consistency and meaning matter more than invented counts.</p>
          </details>
          <details class="faq-acc"><summary>Can I say it in English only?<span>+</span></summary>
            <p>You may express the meaning in any language. Learning the Arabic Quranic wording is recommended when you can.</p>
          </details>
          <p>Hasbunallah is the believer’s calm sentence when the world feels loud — Allah is enough.</p>`,
  },

  "la-hawla-wa-la-quwwata-illallah-meaning": {
    style: S,
    content: `<p><strong>La hawla wa la quwwata illa billah</strong> is a high-volume Islamic search — a treasure from Paradise in prophetic teaching. It is said when facing difficulty, weakness, or change you cannot force alone.</p>

          <div class="highlight-box">
            <strong>Quick answer:</strong> <strong>La hawla wa la quwwata illa billah</strong> means <strong>“There is no might nor power except with Allah.”</strong> It is from the treasures of Paradise (Bukhari &amp; Muslim). Say it in hardship, when leaving home, and when you feel powerless — then keep making effort.
          </div>

          <h2 id="arabic">Arabic, transliteration, English</h2>
          <div class="verse-card">
            <span class="vnum">TREASURE OF PARADISE · Bukhari &amp; Muslim</span>
            <div class="arabic">لَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللَّهِ</div>
            <p class="translit">Laa hawla wa laa quwwata illaa billaah.</p>
            <p class="trans-en"><strong>English:</strong> There is no might nor power except with Allah.</p>
          </div>
          <p>A longer form also appears: <em>La hawla wa la quwwata illa billahil-‘Aliyyil-‘Azeem</em> — “…except with Allah, the Most High, the Most Great.”</p>

          <h2 id="when">When to say it</h2>
          <ul>
            <li>When a task feels beyond your strength</li>
            <li>In the leaving-home dua set — <a href="/blog/dua-entering-leaving-home">entering/leaving home</a></li>
            <li>When you hear something overwhelming</li>
            <li>As a reset phrase instead of anger or despair</li>
          </ul>

          <h2 id="vs">Related phrases</h2>
          <table class="np-table">
            <tr><th>Phrase</th><th>Focus</th></tr>
            <tr><td>La hawla…</td><td>Power and change belong to Allah</td></tr>
            <tr><td>Hasbunallah…</td><td>Allah is enough as trustee — <a href="/blog/hasbunallahu-wa-nimal-wakeel-meaning">Hasbunallah guide</a></td></tr>
            <tr><td>Inshallah</td><td>Future plans under Allah’s will — <a href="/blog/inshallah-meaning-in-english">Inshallah</a></td></tr>
          </table>

          <div class="gold-box">
            <strong>Wazifa honesty:</strong> This is not a “type 10,000 times for a car” formula. It is authentic dhikr. Pair it with dua for your need — e.g. <a href="/blog/dua-for-hajat-arabic-english">dua for hajat</a> — and lawful action.
          </div>

          <h2 id="faq">FAQ</h2>
          <details class="faq-acc"><summary>What does La hawla wa la quwwata illallah mean?<span>+</span></summary>
            <p>There is no might nor power except with Allah — no real ability to change affairs except by His help.</p>
          </details>
          <details class="faq-acc"><summary>Is La hawla a dua or dhikr?<span>+</span></summary>
            <p>It is dhikr (remembrance) taught in the Sunnah, often used inside duas and daily routines.</p>
          </details>
          <details class="faq-acc"><summary>When did the Prophet ﷺ recommend it?<span>+</span></summary>
            <p>Authentic reports describe it as a treasure from the treasures of Paradise; it is also part of well-known leaving-home remembrance.</p>
          </details>
          <details class="faq-acc"><summary>Can children learn it?<span>+</span></summary>
            <p>Yes — short, powerful, and practical. Teach meaning first so it does not become empty sound.</p>
          </details>
          <p>When your hands feel empty, La hawla reminds you Whose hands hold every outcome.</p>`,
  },

  "dua-for-hajat-arabic-english": {
    style: S,
    content: `<p>A <strong>dua for hajat</strong> (حاجة) is a dua for a need — marriage, job, healing, debt relief, guidance. High search volume often mixes Salat al-Hajah practices with unverified “instant need” wazaif. This guide stays with clear, usable prophetic and Quranic paths.</p>

          <div class="highlight-box">
            <strong>Quick answer:</strong> Ask Allah with humility any time — in sujood, after adhan, in the last third of the night. Use Quranic duas like <strong>Rabbana atina…</strong> (2:201) and prophetic asks for ease. Some schools teach a voluntary prayer for need (Salat al-Hajah); follow a reliable local scholar for the exact method. Soft bridge: <a href="/free-quran-classes-online">free trial</a> to learn Arabic dua correctly.
          </div>

          <h2 id="quran">1) Comprehensive Quranic dua for needs</h2>
          <div class="verse-card">
            <span class="vnum">QURAN 2:201</span>
            <div class="arabic">رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الْآخِرَةِ حَسَنَةً وَقِنَا عَذَابَ النَّارِ</div>
            <p class="translit">Rabbanaa aatinaa fid-dunyaa hasanatan wa fil-aakhirati hasanatan wa qinaa ‘adhaaban-naar.</p>
            <p class="trans-en"><strong>English:</strong> Our Lord, give us good in this world and good in the Hereafter, and protect us from the punishment of the Fire.</p>
          </div>
          <p>Full guide: <a href="/blog/rabbana-atina-fid-dunya">Rabbana atina fid dunya</a>.</p>

          <h2 id="ease">2) Dua of Musa for ease (when the need feels blocked)</h2>
          <div class="verse-card">
            <span class="vnum">QURAN 20:25–26</span>
            <div class="arabic">رَبِّ اشْرَحْ لِي صَدْرِي ۝ وَيَسِّرْ لِي أَمْرِي</div>
            <p class="translit">Rabbish-rah lee sadree. Wa yassir lee amree.</p>
            <p class="trans-en"><strong>English:</strong> My Lord, expand for me my chest, and ease my task for me.</p>
          </div>

          <h2 id="prophetic">3) Prophetic ask for beneficial outcomes</h2>
          <div class="verse-card">
            <span class="vnum">MORNING DUA · Ibn Majah</span>
            <div class="arabic">اللَّهُمَّ إِنِّي أَسْأَلُكَ عِلْمًا نَافِعًا، وَرِزْقًا طَيِّبًا، وَعَمَلًا مُتَقَبَّلًا</div>
            <p class="translit">Allaahumma innee as’aluka ‘ilman naafi‘an, wa rizqan tayyiban, wa ‘amalan mutaqabbalan.</p>
            <p class="trans-en"><strong>English:</strong> O Allah, I ask You for beneficial knowledge, good provision, and accepted deeds.</p>
          </div>
          <p>Related: <a href="/blog/dua-for-rizq-arabic-english">dua for rizq</a> · <a href="/blog/dua-for-marriage">dua for marriage</a> · <a href="/blog/dua-for-anxiety-stress-depression">dua for anxiety</a>.</p>

          <h2 id="method">How to make dua for a need (adab)</h2>
          <ol>
            <li>Make wudu when you can; face qibla if easy</li>
            <li>Praise Allah and send salawat upon the Prophet ﷺ</li>
            <li>Ask with certainty and humility — name the need clearly</li>
            <li>Ask for what is <em>good</em> even if different from your plan</li>
            <li>Take lawful means afterward (applications, medicine, istishara)</li>
          </ol>
          <p>For decisions between options: <a href="/blog/dua-e-istikhara">Istikhara</a> · marriage-specific: <a href="/blog/istikhara-for-marriage-step-by-step">Istikhara for marriage</a>.</p>

          <div class="gold-box">
            <strong>Wazifa warning:</strong> Ignore posts that sell “Hajat wazifa guaranteed in 7 days.” Allah answers how and when He wills — with yes, wait, or something better.
          </div>

          <h2 id="faq">FAQ</h2>
          <details class="faq-acc"><summary>What is the best dua for hajat?<span>+</span></summary>
            <p>There is no single “best” for every need. Strong options include Quran 2:201, the dua for ease (20:25–26), and sincere personal dua after salawat — plus istikhara when choosing between paths.</p>
          </details>
          <details class="faq-acc"><summary>What is Salat al-Hajah?<span>+</span></summary>
            <p>It refers to voluntary prayer offered when one has a need. Details of method vary by school and narration strength — ask a qualified local scholar for the practice you follow.</p>
          </details>
          <details class="faq-acc"><summary>Can I make dua for hajat in English?<span>+</span></summary>
            <p>Yes. Allah hears every language. Learn Arabic duas gradually with correct pronunciation.</p>
          </details>
          <details class="faq-acc"><summary>Why is my dua not answered yet?<span>+</span></summary>
            <p>Delay is not rejection. Keep asking, keep means, and ask Allah for what is best in deen and dunya — not only the exact outcome you imagined.</p>
          </details>
          <p>Every hajat belongs with Allah. Ask beautifully, work honestly, and trust the One who never loses a dua.</p>`,
  },

  "istikhara-for-marriage-step-by-step": {
    style: S,
    content: `<p><strong>Istikhara for marriage</strong> is one of the highest-intent spiritual searches for Muslim families. This guide walks the Sunnah method step by step — without dream superstition or paid “istikhara services” that invent answers.</p>

          <div class="highlight-box">
            <strong>Quick answer:</strong> Pray two rak‘ahs of voluntary prayer, then recite the authentic Istikhara dua, naming the proposal/person at “hadhal-amr.” Guidance often appears as ease or difficulty — not necessarily a dream. Full dua text also in <a href="/blog/dua-e-istikhara">dua e Istikhara</a>.
          </div>

          <h2 id="when">When to pray Istikhara for marriage</h2>
          <ul>
            <li>A specific proposal or person is before you</li>
            <li>You are deciding between realistic options (not something haram)</li>
            <li>You have gathered basic information and sought advice (istishara)</li>
          </ul>
          <p>Istikhara is not for asking whether marriage itself is allowed — it is for choosing a particular path.</p>

          <h2 id="steps">Step-by-step method</h2>
          <ol>
            <li><strong>Wudu</strong> and a clean place; avoid forbidden prayer times if your school observes them for nafl.</li>
            <li><strong>Intention:</strong> two rak‘ahs nafl for Istikhara regarding this marriage matter.</li>
            <li><strong>Pray two rak‘ahs</strong> like a normal voluntary prayer (some recommend Al-Kafirun then Al-Ikhlas — any Quran is fine).</li>
            <li><strong>Praise Allah</strong> and send salawat upon the Prophet ﷺ.</li>
            <li><strong>Recite the Istikhara dua</strong> (below), mentioning the specific person/proposal at the place of “this matter.”</li>
            <li><strong>Trust and move:</strong> continue normal decision steps; watch what Allah makes easy or closes.</li>
          </ol>

          <h2 id="dua">Istikhara dua (Arabic, transliteration, English)</h2>
          <div class="verse-card">
            <span class="vnum">PROPHETIC DUA · Bukhari</span>
            <div class="arabic">اللَّهُمَّ إِنِّي أَسْتَخِيرُكَ بِعِلْمِكَ، وَأَسْتَقْدِرُكَ بِقُدْرَتِكَ، وَأَسْأَلُكَ مِنْ فَضْلِكَ الْعَظِيمِ، فَإِنَّكَ تَقْدِرُ وَلَا أَقْدِرُ، وَتَعْلَمُ وَلَا أَعْلَمُ، وَأَنْتَ عَلَّامُ الْغُيُوبِ، اللَّهُمَّ إِنْ كُنْتَ تَعْلَمُ أَنَّ هَذَا الْأَمْرَ خَيْرٌ لِي فِي دِينِي وَمَعَاشِي وَعَاقِبَةِ أَمْرِي فَاقْدُرْهُ لِي وَيَسِّرْهُ لِي ثُمَّ بَارِكْ لِي فِيهِ، وَإِنْ كُنْتَ تَعْلَمُ أَنَّ هَذَا الْأَمْرَ شَرٌّ لِي فِي دِينِي وَمَعَاشِي وَعَاقِبَةِ أَمْرِي فَاصْرِفْهُ عَنِّي وَاصْرِفْنِي عَنْهُ، وَاقْدُرْ لِيَ الْخَيْرَ حَيْثُ كَانَ ثُمَّ أَرْضِنِي بِهِ</div>
            <p class="translit">Allaahumma innee astakheeruka bi ‘ilmika, wa astaqdiruka bi qudratika, wa as’aluka min fadlika al-‘azeem… (full as above). When you reach “hadhal-amr / this matter,” name the marriage proposal.</p>
            <p class="trans-en"><strong>English (sense):</strong> O Allah, I seek Your guidance by Your knowledge… If You know this matter is good for my religion, livelihood, and outcome, then decree it, make it easy, and bless it. If You know it is bad for me, then turn it away from me and turn me away from it, decree good wherever it is, and make me pleased with it.</p>
          </div>

          <h2 id="dreams">Do I need a dream?</h2>
          <div class="gold-box">
            <strong>No.</strong> Many scholars emphasise ease vs difficulty and peace vs constriction more than dreams. Waiting forever for a “sign video” is not the Sunnah method.
          </div>

          <h2 id="repeat">How many times?</h2>
          <p>You may repeat on multiple nights if confusion remains. Also use family counsel, character checks, and dua for a righteous spouse — <a href="/blog/dua-for-marriage">dua for marriage</a>.</p>

          <h2 id="faq">FAQ</h2>
          <details class="faq-acc"><summary>How do I do Istikhara for marriage step by step?<span>+</span></summary>
            <p>Wudu, two rak‘ahs nafl, salawat, recite the Istikhara dua naming the proposal, then proceed with trust while watching what Allah makes easy or difficult.</p>
          </details>
          <details class="faq-acc"><summary>Can someone else pray Istikhara for me?<span>+</span></summary>
            <p>You should pray for yourself when able. Others may make dua for you, but outsourcing “paid istikhara answers” is not a substitute for your own Sunnah prayer.</p>
          </details>
          <details class="faq-acc"><summary>What if my family pressure conflicts with my Istikhara feeling?<span>+</span></summary>
            <p>Combine Istikhara with istishara (trusted advice), deen-first criteria, and calm timing. Do not treat a mood swing after one night as a fatwa.</p>
          </details>
          <details class="faq-acc"><summary>Can I read Istikhara dua from my phone?<span>+</span></summary>
            <p>Yes if needed while learning. Aim to memorise it over time with correct pronunciation — a tutor helps: <a href="/learn-quran-online">learn Quran online</a>.</p>
          </details>
          <p>Istikhara for marriage is not fortune-telling. It is handing the choice to the One who knows the unseen — then walking forward with trust.</p>`,
  },
};
