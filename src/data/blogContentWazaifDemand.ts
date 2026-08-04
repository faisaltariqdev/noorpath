/**
 * High-volume wazaif / dhikr / hajat demand topics.
 * Authentic Quran & Sunnah only — reject invented “guaranteed” wazaif.
 * Expanded for search depth: Arabic cards, routines, tables, mistakes, FAQs.
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
  .toc { background: var(--ivory); border: 1px solid var(--border); border-radius: 12px; padding: 18px 22px; margin: 24px 0; }
  .toc strong { display: block; margin-bottom: 10px; color: var(--charcoal); }
  .toc ol { margin: 0 0 0 18px; }
  .toc li { margin-bottom: 6px; }
  .faq-acc { border: 1px solid var(--border); border-radius: 10px; margin-bottom: 12px; overflow: hidden; }
  .faq-acc summary { padding: 16px 20px; font-weight: 700; cursor: pointer; background: var(--ivory); color: var(--charcoal); list-style: none; display: flex; justify-content: space-between; align-items: center; font-size: .95rem; }
  .faq-acc summary::-webkit-details-marker { display: none; }
  .faq-acc summary span { color: var(--emerald); margin-left: 12px; }
  .faq-acc p { padding: 16px 20px; margin: 0; color: #374151; font-size: .92rem; line-height: 1.75; border-top: 1px solid var(--border); }
  @media (max-width: 576px) { .np-table { font-size: .82rem; } .arabic { font-size: 1.55rem; line-height: 2.3; } }`;

export const wazaifDemandBlogContent: Record<string, { style: string; content: string }> = {
  "what-is-wazifa-in-islam": {
    style: S,
    content: `<p>People searching <strong>what is wazifa in Islam</strong> usually want a daily practice that brings barakah — but the internet mixes authentic dhikr with invented “guaranteed” formulas. In clear language, a sound wazifa is simply consistent remembrance and dua from the Quran and Sunnah, done with sincerity — not a paid charm, not a secret number sheet, and not a replacement for salah or lawful effort.</p>

          <div class="highlight-box">
            <strong>Quick answer:</strong> A <strong>wazifa</strong> (وظيفة) commonly means a regular spiritual assignment: Quran, adhkar, or dua you keep daily. The safest wazaif are prophetic morning/evening adhkar, istighfar, salawat, and Quranic duas. Avoid viral lists that promise money, marriage, or miracles for a secret count. Learn authentic wording with a <a href="/free-quran-classes-online">free trial</a>.
          </div>

          <div class="toc">
            <strong>In this guide</strong>
            <ol>
              <li><a href="#meaning">What wazifa means</a></li>
              <li><a href="#authentic">Authentic sources (safe list)</a></li>
              <li><a href="#starter">7-day starter routine</a></li>
              <li><a href="#needs">Wazifa by need (honest map)</a></li>
              <li><a href="#red-flags">Fake wazifa red flags</a></li>
              <li><a href="#mistakes">Common mistakes</a></li>
              <li><a href="#faq">FAQ</a></li>
            </ol>
          </div>

          <h2 id="meaning">What does wazifa mean?</h2>
          <p>In everyday Muslim usage (especially South Asia and the diaspora), “wazifa” means a set practice you recite regularly for a need — rizq, ease, protection, marriage, or closeness to Allah. Classical Islam already has this idea under <strong>adhkar</strong> (remembrances), <strong>awrad</strong> (regular litanies), and <strong>dua</strong> (supplication). The wording that matters is authenticity and sincerity, not the Urdu or English label.</p>
          <p>Scholars historically encouraged fixed daily remembrances because consistency softens the heart. That is very different from modern WhatsApp “formulas” that invent counts, demand payment, or promise a house in seven days.</p>

          <h2 id="authentic">Authentic wazifa sources (safe list)</h2>
          <table class="np-table">
            <tr><th>Practice</th><th>Why it is sound</th><th>Start here</th></tr>
            <tr><td>Morning &amp; evening adhkar</td><td>Prophetic daily protection &amp; gratitude</td><td><a href="/blog/morning-evening-adhkar-dhikr">morning/evening adhkar</a></td></tr>
            <tr><td>Adhkar after salah</td><td>Short Sunnah set after every prayer</td><td><a href="/blog/adhkar-after-salah-arabic-english">adhkar after salah</a></td></tr>
            <tr><td>Istighfar / Sayyid al-Istighfar</td><td>Forgiveness is foundational</td><td><a href="/blog/dua-for-forgiveness-istighfar">istighfar guide</a></td></tr>
            <tr><td>Salawat / Darood</td><td>Commanded remembrance of the Prophet ﷺ</td><td><a href="/blog/darood-sharif">Darood Sharif</a></td></tr>
            <tr><td>Quranic duas (e.g. 2:201)</td><td>Allah’s own words</td><td><a href="/blog/rabbana-atina-fid-dunya">Rabbana atina</a></td></tr>
            <tr><td>Ayatul Kursi, Mu‘awwidhat</td><td>Documented protection practice</td><td><a href="/blog/ayatul-kursi-arabic-english-benefits">Ayatul Kursi</a> · <a href="/blog/4-quls">4 Quls</a></td></tr>
            <tr><td>Hasbunallah / La hawla</td><td>Quranic &amp; prophetic trust phrases</td><td><a href="/blog/hasbunallahu-wa-nimal-wakeel-meaning">Hasbunallah</a> · <a href="/blog/la-hawla-wa-la-quwwata-illallah-meaning">La hawla</a></td></tr>
          </table>

          <h2 id="starter">A simple 7-day starter wazifa (no inventions)</h2>
          <p>If you feel overwhelmed by long lists, begin with one short authentic stack for seven days. Presence beats volume.</p>
          <ol>
            <li><strong>After Fajr:</strong> 3× Astaghfirullah + 10× salawat + Ayatul Kursi (or listen and repeat if still learning)</li>
            <li><strong>After every salah:</strong> the short after-salah set — <a href="/blog/adhkar-after-salah-arabic-english">guide</a></li>
            <li><strong>After Maghrib or before sleep:</strong> one Quranic dua for your need + personal dua in your language</li>
            <li><strong>Daily means:</strong> one lawful action that matches the dua (apply, apologise, budget, study, seek counsel)</li>
          </ol>
          <div class="verse-card">
            <span class="vnum">QURAN 2:201 · COMPREHENSIVE NEED</span>
            <div class="arabic">رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الْآخِرَةِ حَسَنَةً وَقِنَا عَذَابَ النَّارِ</div>
            <p class="translit">Rabbanaa aatinaa fid-dunyaa hasanatan wa fil-aakhirati hasanatan wa qinaa ‘adhaaban-naar.</p>
            <p class="trans-en"><strong>English:</strong> Our Lord, give us good in this world and good in the Hereafter, and protect us from the punishment of the Fire.</p>
          </div>

          <h2 id="needs">Wazifa by need — honest map (not guarantees)</h2>
          <table class="np-table">
            <tr><th>Need people search</th><th>Sound direction</th><th>Avoid</th></tr>
            <tr><td>Rizq / money</td><td><a href="/blog/dua-for-rizq-arabic-english">Dua for rizq</a> + halal work + gratitude + charity when able</td><td>“11,111 times = salary by Friday”</td></tr>
            <tr><td>Marriage / proposal</td><td><a href="/blog/dua-for-marriage">Dua for marriage</a> + <a href="/blog/istikhara-for-marriage-step-by-step">Istikhara</a> + character checks</td><td>Paid “nikah wazifa activation”</td></tr>
            <tr><td>Any specific need</td><td><a href="/blog/dua-for-hajat-arabic-english">Dua for hajat</a> + lawful means</td><td>Secret sheets with no sanad</td></tr>
            <tr><td>Fear / pressure</td><td>Hasbunallah + La hawla + morning adhkar</td><td>Using dhikr to avoid safety steps</td></tr>
            <tr><td>Children’s habits</td><td>Short duas + gentle teaching — <a href="/blog/duas-for-kids-to-memorize">duas for kids</a></td><td>Scary “if you miss count, harm comes” stories</td></tr>
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
            <li>Tells you to abandon medicine, legal rights, or family consultation</li>
          </ul>

          <h2 id="mistakes">Common mistakes that empty a good practice</h2>
          <ul>
            <li><strong>Collecting lists, living none:</strong> five apps of adhkar, zero consistency</li>
            <li><strong>Arabic without meaning:</strong> tongue moves, heart is absent — learn English sense too</li>
            <li><strong>Pronunciation neglect:</strong> especially for children — a live tutor helps: <a href="/online-quran-classes-for-kids">kids classes</a></li>
            <li><strong>Dua without means:</strong> asking for a job while never applying</li>
            <li><strong>Despair on day four:</strong> answers come as yes, wait, or something better — not always on your calendar</li>
          </ul>

          <h2 id="how">How to keep a simple daily wazifa</h2>
          <ol>
            <li>Choose <em>one</em> short authentic set (e.g. after Fajr adhkar)</li>
            <li>Understand the English meaning</li>
            <li>Keep pronunciation correct — especially for kids</li>
            <li>Pair with lawful effort and good character</li>
            <li>Make personal dua in your language after the Arabic</li>
            <li>Review weekly: what stuck? what was too heavy?</li>
          </ol>
          <p>Parents: teach children short pieces — <a href="/blog/duas-for-kids-to-memorize">duas for kids</a> · <a href="/online-quran-classes-for-kids">kids classes</a>. Adults returning to practice can start gently with a <a href="/learn-quran-online">learn Quran online</a> trial.</p>

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
          <details class="faq-acc"><summary>Can I combine many wazaif at once?<span>+</span></summary>
            <p>You can, but most people fail when the list is huge. Start with one stack, stabilise it for two weeks, then add carefully.</p>
          </details>
          <details class="faq-acc"><summary>Does a missed day cancel everything?<span>+</span></summary>
            <p>No. Return without despair. Habit continuity matters more than perfection theatre.</p>
          </details>
          <p>The best wazifa is one Allah loves: sincere, authentic, and lived — not a viral promise with a price tag.</p>`,
  },

  "adhkar-after-salah-arabic-english": {
    style: S,
    content: `<p><strong>Adhkar after salah</strong> are among the most searched daily Islamic practices — short remembrances the Prophet ﷺ taught after finishing prayer. They take a few minutes and protect the heart from rushing away empty after salah. This guide gives Arabic, transliteration, English, a practical order, and tips for families who forget under busy schedules.</p>

          <div class="highlight-box">
            <strong>Quick answer:</strong> After salam, a common Sunnah set includes <strong>Astaghfirullah</strong> (3×), <strong>Allahumma anta as-salam…</strong>, then <strong>Subhanallah</strong> 33, <strong>Alhamdulillah</strong> 33, <strong>Allahu Akbar</strong> 33 (or 34 to complete 100), plus Ayatul Kursi and the Mu‘awwidhat. Teach kids the short forms with a <a href="/online-quran-classes-for-kids">kids trial</a>.
          </div>

          <div class="toc">
            <strong>In this guide</strong>
            <ol>
              <li><a href="#why">Why after-salah adhkar matter</a></li>
              <li><a href="#istighfar">Istighfar</a></li>
              <li><a href="#salam-dua">Allahumma anta as-salam</a></li>
              <li><a href="#tasbih">33 / 33 / 33</a></li>
              <li><a href="#kursi">Ayatul Kursi &amp; Quls</a></li>
              <li><a href="#routine">Full routine card</a></li>
              <li><a href="#faq">FAQ</a></li>
            </ol>
          </div>

          <h2 id="why">Why stay seated after salam?</h2>
          <p>Salah is conversation with Allah. Ending with immediate phone scrolling trains the heart to treat prayer like a task to “finish.” The Sunnah adhkar are a soft landing: seek forgiveness, greet Allah as As-Salam, glorify Him, then ask and protect. Even sixty focused seconds change the tone of a day.</p>

          <h2 id="istighfar">1) Istighfar after salam</h2>
          <div class="verse-card">
            <span class="vnum">AFTER SALAM · 3 TIMES</span>
            <div class="arabic">أَسْتَغْفِرُ اللَّهَ</div>
            <p class="translit">Astaghfirullah. (three times)</p>
            <p class="trans-en"><strong>English:</strong> I seek Allah’s forgiveness.</p>
          </div>
          <p>Some narrations also include a longer seeking of forgiveness after salah. If your teacher uses a longer form, follow them. Deeper guide: <a href="/blog/dua-for-forgiveness-istighfar">istighfar</a> · phrase meaning: <a href="/blog/astaghfirullah-meaning">Astaghfirullah meaning</a>.</p>

          <h2 id="salam-dua">2) Allahumma anta as-salam</h2>
          <div class="verse-card">
            <span class="vnum">PROPHETIC DUA · Muslim</span>
            <div class="arabic">اللَّهُمَّ أَنْتَ السَّلَامُ وَمِنْكَ السَّلَامُ، تَبَارَكْتَ يَا ذَا الْجَلَالِ وَالْإِكْرَامِ</div>
            <p class="translit">Allaahumma anta as-salaam wa minka as-salaam, tabaarakta yaa dhal-jalaali wal-ikraam.</p>
            <p class="trans-en"><strong>English:</strong> O Allah, You are As-Salam (Peace) and from You is peace. Blessed are You, O Possessor of majesty and honour.</p>
          </div>

          <h2 id="tasbih">3) Tasbih, tahmid, takbir (33 / 33 / 33)</h2>
          <table class="np-table">
            <tr><th>Dhikr</th><th>Arabic</th><th>Count (common)</th><th>Meaning</th></tr>
            <tr><td>Subhanallah</td><td>سُبْحَانَ اللَّهِ</td><td>33</td><td>Glory be to Allah</td></tr>
            <tr><td>Alhamdulillah</td><td>الْحَمْدُ لِلَّهِ</td><td>33</td><td>All praise is for Allah</td></tr>
            <tr><td>Allahu Akbar</td><td>اللَّهُ أَكْبَرُ</td><td>33 (often +1 to complete 100)</td><td>Allah is the Greatest</td></tr>
          </table>
          <p>Phrase guides: <a href="/blog/subhanallah-meaning">Subhanallah</a> · <a href="/blog/alhamdulillah-meaning-in-english">Alhamdulillah</a> · <a href="/blog/allahu-akbar-meaning-in-english">Allahu Akbar</a>.</p>
          <p>Count on fingers if you have no tasbih. Teaching children finger counting often works better than apps at first.</p>

          <h2 id="la-ilaha">4) Completing to one hundred (common addition)</h2>
          <div class="verse-card">
            <span class="vnum">COMMON COMPLETION · AFTER 99</span>
            <div class="arabic">لَا إِلَٰهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ، وَهُوَ عَلَىٰ كُلِّ شَيْءٍ قَدِيرٌ</div>
            <p class="translit">Laa ilaaha illallaahu wahdahu laa shareeka lah, lahul-mulku wa lahul-hamdu, wa huwa ‘alaa kulli shay’in qadeer.</p>
            <p class="trans-en"><strong>English:</strong> There is no god but Allah alone, with no partner. His is the dominion and His is the praise, and He is over all things competent.</p>
          </div>
          <p>Related: <a href="/blog/la-ilaha-illallah-meaning">La ilaha illallah meaning</a>.</p>

          <h2 id="kursi">5) Ayatul Kursi after salah</h2>
          <p>Many Muslims recite Ayatul Kursi after each fard prayer — a widely practised protection habit. Learn the full Arabic carefully rather than rushing: <a href="/blog/ayatul-kursi-arabic-english-benefits">Ayatul Kursi Arabic &amp; English</a>.</p>

          <h2 id="quls">6) Mu‘awwidhat (Ikhlas, Falaq, Nas)</h2>
          <p>Reciting the three Quls after salah is a common completion of the post-prayer routine. Full texts: <a href="/blog/4-quls">4 Quls</a> · <a href="/blog/surah-ikhlas-benefits">Surah Ikhlas</a>.</p>

          <h2 id="routine">Full after-salah routine card</h2>
          <table class="np-table">
            <tr><th>Order</th><th>What to say</th><th>Time tip</th></tr>
            <tr><td>1</td><td>Astaghfirullah ×3</td><td>Still seated</td></tr>
            <tr><td>2</td><td>Allahumma anta as-salam…</td><td>Once, with calm</td></tr>
            <tr><td>3</td><td>Subhanallah / Alhamdulillah / Allahu Akbar 33 each</td><td>Fingers OK</td></tr>
            <tr><td>4</td><td>La ilaha illallah… (completion)</td><td>If you follow that narration</td></tr>
            <tr><td>5</td><td>Ayatul Kursi + 3 Quls</td><td>Add when stable</td></tr>
            <tr><td>6</td><td>Personal dua</td><td>Any language</td></tr>
          </table>

          <div class="gold-box">
            <strong>Note:</strong> Counts and exact combinations can vary slightly across narrations and schools. Follow a reliable teacher; do not turn adhkar into anxiety about “missing one bead.” Presence of heart matters more than speed.
          </div>

          <h2 id="tips">Tips to never skip them</h2>
          <ul>
            <li>Stay seated for 60–90 seconds before checking your phone</li>
            <li>Use fingers if you have no tasbih</li>
            <li>Teach children one line at a time after Maghrib when the house is calmer</li>
            <li>If you always forget after Zuhr at work, keep a tiny card or note — not as a show, as a reminder</li>
            <li>Pair with morning/evening sets: <a href="/blog/morning-evening-adhkar-dhikr">morning &amp; evening adhkar</a></li>
            <li>Build salah quality first: <a href="/blog/how-to-pray-salah-step-by-step">how to pray salah</a></li>
          </ul>

          <h2 id="kids">Teaching kids without pressure</h2>
          <p>For ages 5–8, celebrate finishing <em>one</em> line after salah. For older kids, add the 33-count slowly. Never shame a child for forgetting Arabic — shame kills habits. Soft support: <a href="/blog/duas-for-kids-to-memorize">duas for kids</a> · <a href="/online-quran-classes-for-kids">online Quran classes for kids</a>.</p>

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
          <details class="faq-acc"><summary>Can I walk away and do adhkar later?<span>+</span></summary>
            <p>Best is immediately after salam while still in the prayer place when possible. If you must move, complete them soon after rather than abandoning them.</p>
          </details>
          <details class="faq-acc"><summary>Do I need a digital counter?<span>+</span></summary>
            <p>No. Fingers are enough. Tools help some people; they should not become a distraction or status item.</p>
          </details>
          <p>Salah ends with salam — but the heart stays with Allah when the tongue continues with short, authentic adhkar.</p>`,
  },

  "hasbunallahu-wa-nimal-wakeel-meaning": {
    style: S,
    content: `<p><strong>Hasbunallahu wa ni‘mal wakeel</strong> is one of the most searched Islamic phrases in hardship — said when fear, pressure, or injustice rises. It is Quranic trust: Allah is enough, and He is the best Disposer of affairs. This page gives the Arabic, meaning, context, when to use it, and what it is <em>not</em>.</p>

          <div class="highlight-box">
            <strong>Quick answer:</strong> <strong>Hasbunallahu wa ni‘mal-wakeel</strong> means <strong>“Allah is sufficient for us, and He is the best Disposer of affairs.”</strong> It appears in Quran 3:173. Recite it when anxiety spikes, then take the next lawful step. Soft learning help: <a href="/free-quran-classes-online">free Quran trial</a>.
          </div>

          <div class="toc">
            <strong>In this guide</strong>
            <ol>
              <li><a href="#arabic">Arabic &amp; English</a></li>
              <li><a href="#context">Quranic context</a></li>
              <li><a href="#word">Word-by-word</a></li>
              <li><a href="#when">When to say it</a></li>
              <li><a href="#pair">Pair with other phrases</a></li>
              <li><a href="#not">What it is not</a></li>
              <li><a href="#faq">FAQ</a></li>
            </ol>
          </div>

          <h2 id="arabic">Arabic, transliteration, English</h2>
          <div class="verse-card">
            <span class="vnum">QURAN 3:173</span>
            <div class="arabic">حَسْبُنَا اللَّهُ وَنِعْمَ الْوَكِيلُ</div>
            <p class="translit">Hasbunallaahu wa ni‘mal-wakeel.</p>
            <p class="trans-en"><strong>English:</strong> Allah is sufficient for us, and He is the best Disposer of affairs.</p>
          </div>

          <h2 id="context">Quranic context (why the words feel so strong)</h2>
          <p>In Surah Aal Imran, the believers were told that people had gathered against them to frighten them. Their response was not panic theatre — they said <em>Hasbunallahu wa ni‘mal-wakeel</em>. Allah mentions that they returned with favour and bounty, and no harm touched them, and they followed Allah’s pleasure. The lesson for us is not that hardship never comes; it is that trust is the believer’s first language when threats get loud.</p>
          <p>Read slowly with meaning. If Arabic is new, practise letter by letter with a tutor rather than mumbling: <a href="/learn-quran-online">learn Quran online</a>.</p>

          <h2 id="word">Word-by-word sense</h2>
          <table class="np-table">
            <tr><th>Arabic</th><th>Sense</th></tr>
            <tr><td>Hasbuna</td><td>Sufficient for us / enough for us</td></tr>
            <tr><td>Allah</td><td>Allah</td></tr>
            <tr><td>wa ni‘ma</td><td>and how excellent / what a wonderful</td></tr>
            <tr><td>al-wakeel</td><td>the Trustee / Disposer of affairs</td></tr>
          </table>
          <p>Together: we do not need a louder human protector when Allah is enough — while still using lawful means He created.</p>

          <h2 id="when">When to say Hasbunallah</h2>
          <ul>
            <li>When fear of people or outcomes overwhelms you</li>
            <li>Before medical results, court matters, or family conflict</li>
            <li>When you have done your part and must leave the result to Allah</li>
            <li>When gossip or online pressure tries to shake your calm</li>
            <li>Together with other trust phrases like <a href="/blog/la-hawla-wa-la-quwwata-illallah-meaning">La hawla wa la quwwata</a></li>
            <li>In personal dua after naming your need — <a href="/blog/dua-for-hajat-arabic-english">dua for hajat</a></li>
          </ul>

          <h2 id="pair">A short hardship stack (authentic, no invented counts)</h2>
          <ol>
            <li>Hasbunallahu wa ni‘mal-wakeel (with presence)</li>
            <li>La hawla wa la quwwata illa billah</li>
            <li>Personal dua: “O Allah, make this easy if it is good; turn it away if it is harm.”</li>
            <li>One next means: call, document, rest, seek counsel</li>
          </ol>
          <p>For anxiety-heavy seasons, also see <a href="/blog/dua-for-anxiety-stress-depression">dua for anxiety</a> and morning protection: <a href="/blog/morning-evening-adhkar-dhikr">morning &amp; evening adhkar</a>.</p>

          <h2 id="not">What it is not</h2>
          <div class="gold-box">
            <strong>Not a magic spell:</strong> Saying Hasbunallah does not replace medicine, legal advice, leaving a harmful situation, or reporting abuse. It is tawakkul — trust after (or while) taking means. Viral posts that say “recite 1,000 times and the enemy disappears by Thursday” are not Quranic guidance.
          </div>

          <h2 id="kids">Teach children the meaning</h2>
          <p>Explain: “We try our best, and Allah takes care of what we cannot control.” Keep pronunciation gentle — <a href="/blog/duas-for-kids-to-memorize">duas for kids</a>. If a child is fearful at night, pair short trust phrases with a calm bedtime routine and <a href="/blog/dua-before-sleeping-islam">dua before sleeping</a>.</p>

          <h2 id="mistakes">Mistakes to avoid</h2>
          <ul>
            <li>Using Hasbunallah to silence someone else’s legitimate concern</li>
            <li>Chasing a “special count” sold online</li>
            <li>Saying it angrily as a threat instead of with humility</li>
            <li>Expecting instant worldly revenge as proof of acceptance</li>
          </ul>

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
          <details class="faq-acc"><summary>Is Hasbunallah the same as tawakkul?<span>+</span></summary>
            <p>It is a Quranic expression of tawakkul — trusting Allah while still using the means He made available.</p>
          </details>
          <details class="faq-acc"><summary>Can I write it and keep it with me?<span>+</span></summary>
            <p>Many people keep a note as a reminder. The point is remembrance and trust, not treating a paper as a charm that works without belief and effort.</p>
          </details>
          <p>Hasbunallah is the believer’s calm sentence when the world feels loud — Allah is enough.</p>`,
  },

  "la-hawla-wa-la-quwwata-illallah-meaning": {
    style: S,
    content: `<p><strong>La hawla wa la quwwata illa billah</strong> is a high-volume Islamic search — a treasure from Paradise in prophetic teaching. It is said when facing difficulty, weakness, or change you cannot force alone. Below: Arabic, meaning, when to say it, longer form, and honest limits versus fake “wazifa counts.”</p>

          <div class="highlight-box">
            <strong>Quick answer:</strong> <strong>La hawla wa la quwwata illa billah</strong> means <strong>“There is no might nor power except with Allah.”</strong> It is from the treasures of Paradise (Bukhari &amp; Muslim). Say it in hardship, when leaving home, and when you feel powerless — then keep making effort.
          </div>

          <div class="toc">
            <strong>In this guide</strong>
            <ol>
              <li><a href="#arabic">Arabic &amp; English</a></li>
              <li><a href="#longer">Longer form</a></li>
              <li><a href="#meaning">Deep meaning</a></li>
              <li><a href="#when">When to say it</a></li>
              <li><a href="#vs">Related phrases</a></li>
              <li><a href="#routine">Daily use ideas</a></li>
              <li><a href="#faq">FAQ</a></li>
            </ol>
          </div>

          <h2 id="arabic">Arabic, transliteration, English</h2>
          <div class="verse-card">
            <span class="vnum">TREASURE OF PARADISE · Bukhari &amp; Muslim</span>
            <div class="arabic">لَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللَّهِ</div>
            <p class="translit">Laa hawla wa laa quwwata illaa billaah.</p>
            <p class="trans-en"><strong>English:</strong> There is no might nor power except with Allah.</p>
          </div>

          <h2 id="longer">Longer form (also common)</h2>
          <div class="verse-card">
            <span class="vnum">EXTENDED WORDING</span>
            <div class="arabic">لَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللَّهِ الْعَلِيِّ الْعَظِيمِ</div>
            <p class="translit">Laa hawla wa laa quwwata illaa billaahil-‘Aliyyil-‘Azeem.</p>
            <p class="trans-en"><strong>English:</strong> There is no might nor power except with Allah, the Most High, the Most Great.</p>
          </div>

          <h2 id="meaning">What the words teach the heart</h2>
          <table class="np-table">
            <tr><th>Word</th><th>Sense</th></tr>
            <tr><td>La hawla</td><td>No change / no movement (from one state to another) by ourselves</td></tr>
            <tr><td>wa la quwwata</td><td>and no power / strength</td></tr>
            <tr><td>illa billah</td><td>except with Allah</td></tr>
          </table>
          <p>It is not hopelessness. It is accurate theology: your effort matters, but outcome-power belongs to Allah. That combination — work + surrender — is healthier than arrogance or despair.</p>

          <h2 id="when">When to say it</h2>
          <ul>
            <li>When a task feels beyond your strength</li>
            <li>In the leaving-home dua set — <a href="/blog/dua-entering-leaving-home">entering/leaving home</a></li>
            <li>When you hear something overwhelming</li>
            <li>As a reset phrase instead of anger or despair</li>
            <li>When illness, debt, or family load feels heavy — with means and dua for need: <a href="/blog/dua-for-hajat-arabic-english">dua for hajat</a></li>
            <li>When teaching teens that “I can’t alone” can still be faith, not failure</li>
          </ul>

          <h2 id="vs">Related phrases</h2>
          <table class="np-table">
            <tr><th>Phrase</th><th>Focus</th><th>Guide</th></tr>
            <tr><td>La hawla…</td><td>Power and change belong to Allah</td><td>This page</td></tr>
            <tr><td>Hasbunallah…</td><td>Allah is enough as trustee</td><td><a href="/blog/hasbunallahu-wa-nimal-wakeel-meaning">Hasbunallah</a></td></tr>
            <tr><td>Inshallah</td><td>Future plans under Allah’s will</td><td><a href="/blog/inshallah-meaning-in-english">Inshallah</a></td></tr>
            <tr><td>Mashallah</td><td>Recognising blessing without envy</td><td><a href="/blog/mashallah-meaning">Mashallah</a></td></tr>
            <tr><td>Astaghfirullah</td><td>Returning after slips</td><td><a href="/blog/astaghfirullah-meaning">Astaghfirullah</a></td></tr>
          </table>

          <h2 id="routine">Daily use ideas (simple, not sold)</h2>
          <ol>
            <li><strong>Leaving home:</strong> include it in the prophetic leaving set</li>
            <li><strong>Before hard work:</strong> one calm La hawla, then begin</li>
            <li><strong>After bad news:</strong> La hawla + Hasbunallah + one next step</li>
            <li><strong>With children:</strong> “We try; Allah gives strength” — <a href="/blog/duas-for-kids-to-memorize">duas for kids</a></li>
          </ol>

          <div class="gold-box">
            <strong>Wazifa honesty:</strong> This is not a “type 10,000 times for a car” formula. It is authentic dhikr. Pair it with dua for your need — e.g. <a href="/blog/dua-for-hajat-arabic-english">dua for hajat</a> — and lawful action. Invented counts with money promises are a red flag: see <a href="/blog/what-is-wazifa-in-islam">what is wazifa in Islam</a>.
          </div>

          <h2 id="mistakes">Common mistakes</h2>
          <ul>
            <li>Saying it as sarcasm when something breaks</li>
            <li>Using it to avoid responsibility (“no power, so I won’t try”)</li>
            <li>Buying a “special La hawla wazifa package”</li>
            <li>Rushing the Arabic so fast that letters collapse — practise slowly with a teacher if needed</li>
          </ul>

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
          <details class="faq-acc"><summary>Is the longer form required?<span>+</span></summary>
            <p>The shorter form is authentic and widely used. The longer form with al-‘Aliyy al-‘Azeem is also common. Follow what your teacher teaches; do not fight over length.</p>
          </details>
          <details class="faq-acc"><summary>Can I say it in English?<span>+</span></summary>
            <p>You may express the meaning in any language. Learning the Arabic wording is recommended for dhikr continuity with the Ummah.</p>
          </details>
          <p>When your hands feel empty, La hawla reminds you Whose hands hold every outcome.</p>`,
  },

  "dua-for-hajat-arabic-english": {
    style: S,
    content: `<p>A <strong>dua for hajat</strong> (حاجة) is a dua for a need — marriage, job, healing, debt relief, visa, guidance, or a family matter. High search volume often mixes Salat al-Hajah practices with unverified “instant need” wazaif. This guide stays with clear, usable prophetic and Quranic paths, plus adab and honesty about delays.</p>

          <div class="highlight-box">
            <strong>Quick answer:</strong> Ask Allah with humility any time — in sujood, after adhan, in the last third of the night. Use Quranic duas like <strong>Rabbana atina…</strong> (2:201) and prophetic asks for ease. Some schools teach a voluntary prayer for need (Salat al-Hajah); follow a reliable local scholar for the exact method. Soft bridge: <a href="/free-quran-classes-online">free trial</a> to learn Arabic dua correctly.
          </div>

          <div class="toc">
            <strong>In this guide</strong>
            <ol>
              <li><a href="#quran">Quranic duas for needs</a></li>
              <li><a href="#ease">Dua for ease</a></li>
              <li><a href="#prophetic">Prophetic asks</a></li>
              <li><a href="#method">Adab of asking</a></li>
              <li><a href="#hajah">Salat al-Hajah note</a></li>
              <li><a href="#by-need">By common need</a></li>
              <li><a href="#faq">FAQ</a></li>
            </ol>
          </div>

          <h2 id="quran">1) Comprehensive Quranic dua for needs</h2>
          <div class="verse-card">
            <span class="vnum">QURAN 2:201</span>
            <div class="arabic">رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الْآخِرَةِ حَسَنَةً وَقِنَا عَذَابَ النَّارِ</div>
            <p class="translit">Rabbanaa aatinaa fid-dunyaa hasanatan wa fil-aakhirati hasanatan wa qinaa ‘adhaaban-naar.</p>
            <p class="trans-en"><strong>English:</strong> Our Lord, give us good in this world and good in the Hereafter, and protect us from the punishment of the Fire.</p>
          </div>
          <p>Full guide: <a href="/blog/rabbana-atina-fid-dunya">Rabbana atina fid dunya</a>. This dua keeps your ask balanced — not only dunya, not only akhirah.</p>

          <h2 id="ease">2) Dua of Musa for ease (when the need feels blocked)</h2>
          <div class="verse-card">
            <span class="vnum">QURAN 20:25–26</span>
            <div class="arabic">رَبِّ اشْرَحْ لِي صَدْرِي ۝ وَيَسِّرْ لِي أَمْرِي</div>
            <p class="translit">Rabbish-rah lee sadree. Wa yassir lee amree.</p>
            <p class="trans-en"><strong>English:</strong> My Lord, expand for me my chest, and ease my task for me.</p>
          </div>
          <p>Many add the following ayahs asking Allah to untie the knot from the tongue and appoint a helper — useful before interviews, difficult conversations, or exams. For exam-focused duas also see <a href="/blog/dua-for-success-exams">dua for success in exams</a>.</p>

          <h2 id="prophetic">3) Prophetic ask for beneficial outcomes</h2>
          <div class="verse-card">
            <span class="vnum">MORNING DUA · Ibn Majah</span>
            <div class="arabic">اللَّهُمَّ إِنِّي أَسْأَلُكَ عِلْمًا نَافِعًا، وَرِزْقًا طَيِّبًا، وَعَمَلًا مُتَقَبَّلًا</div>
            <p class="translit">Allaahumma innee as’aluka ‘ilman naafi‘an, wa rizqan tayyiban, wa ‘amalan mutaqabbalan.</p>
            <p class="trans-en"><strong>English:</strong> O Allah, I ask You for beneficial knowledge, good provision, and accepted deeds.</p>
          </div>

          <h2 id="yunus">4) Dua of Yunus in distress</h2>
          <div class="verse-card">
            <span class="vnum">QURAN 21:87</span>
            <div class="arabic">لَا إِلَٰهَ إِلَّا أَنْتَ سُبْحَانَكَ إِنِّي كُنْتُ مِنَ الظَّالِمِينَ</div>
            <p class="translit">Laa ilaaha illaa anta subhaanaka innee kuntu minaz-zaalimeen.</p>
            <p class="trans-en"><strong>English:</strong> There is no god but You; glory be to You. Indeed, I have been of the wrongdoers.</p>
          </div>
          <p>This dua centres tawheed and humility — powerful when a need is tangled with regret. Pair with <a href="/blog/dua-for-forgiveness-istighfar">istighfar</a>.</p>

          <h2 id="method">How to make dua for a need (adab)</h2>
          <ol>
            <li>Make wudu when you can; face qibla if easy</li>
            <li>Choose a blessed time when possible (last third of night, between adhan and iqamah, in sujood, after salah)</li>
            <li>Praise Allah and send salawat upon the Prophet ﷺ — <a href="/blog/darood-sharif">Darood</a></li>
            <li>Ask with certainty and humility — name the need clearly</li>
            <li>Ask for what is <em>good</em> even if different from your plan</li>
            <li>Take lawful means afterward (applications, medicine, istishara, apology, paperwork)</li>
            <li>Keep gratitude for past answers — it softens the next ask</li>
          </ol>
          <p>For decisions between options: <a href="/blog/dua-e-istikhara">Istikhara</a> · marriage-specific: <a href="/blog/istikhara-for-marriage-step-by-step">Istikhara for marriage</a>.</p>

          <h2 id="hajah">Salat al-Hajah — honest note</h2>
          <div class="gold-box">
            <strong>Educational, not a personal fatwa:</strong> Salat al-Hajah refers to voluntary prayer offered when one has a need. Details of method and the strength of specific narrations vary by school. Ask a qualified local scholar for the practice you follow. Do not buy a “guaranteed Hajah package” online.
          </div>

          <h2 id="by-need">By common need (internal map)</h2>
          <table class="np-table">
            <tr><th>Need</th><th>Helpful authentic pages</th></tr>
            <tr><td>Rizq / provision</td><td><a href="/blog/dua-for-rizq-arabic-english">Dua for rizq</a></td></tr>
            <tr><td>Marriage</td><td><a href="/blog/dua-for-marriage">Dua for marriage</a> · Istikhara guide above</td></tr>
            <tr><td>Parents</td><td><a href="/blog/dua-for-parents-rabbirhamhuma">Dua for parents</a></td></tr>
            <tr><td>Children</td><td><a href="/blog/dua-for-children-arabic-english">Dua for children</a></td></tr>
            <tr><td>Illness</td><td><a href="/blog/dua-for-sick-person-arabic-english">Dua for the sick</a> + medical care</td></tr>
            <tr><td>Anxiety</td><td><a href="/blog/dua-for-anxiety-stress-depression">Dua for anxiety</a> + support</td></tr>
            <tr><td>Travel</td><td><a href="/blog/safar-ki-dua-travel-dua-arabic-english">Travel dua</a></td></tr>
          </table>

          <div class="gold-box">
            <strong>Wazifa warning:</strong> Ignore posts that sell “Hajat wazifa guaranteed in 7 days.” Allah answers how and when He wills — with yes, wait, or something better. Read <a href="/blog/what-is-wazifa-in-islam">what is wazifa in Islam</a> for red flags.
          </div>

          <h2 id="delay">If the answer feels delayed</h2>
          <ul>
            <li>Delay is not proof of rejection</li>
            <li>Check means: is there a next lawful step you are avoiding?</li>
            <li>Check manners: are you asking while cutting ties or consuming haram without repentance?</li>
            <li>Ask Allah for sabr and a better outcome than your imagination</li>
            <li>Keep short daily consistency instead of one emotional night then silence</li>
          </ul>

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
          <details class="faq-acc"><summary>Should I cry in dua?<span>+</span></summary>
            <p>Humility helps. Tears are not required for acceptance, and dry eyes do not mean rejection.</p>
          </details>
          <details class="faq-acc"><summary>Can I ask for a very specific outcome?<span>+</span></summary>
            <p>Yes — name it clearly — and also ask Allah to give what is better if that outcome would harm your deen or akhirah.</p>
          </details>
          <p>Every hajat belongs with Allah. Ask beautifully, work honestly, and trust the One who never loses a dua.</p>`,
  },

  "istikhara-for-marriage-step-by-step": {
    style: S,
    content: `<p><strong>Istikhara for marriage</strong> is one of the highest-intent spiritual searches for Muslim families. This guide walks the Sunnah method step by step — without dream superstition or paid “istikhara services” that invent answers. Use it when a real proposal or person is before you, after basic information and counsel.</p>

          <div class="highlight-box">
            <strong>Quick answer:</strong> Pray two rak‘ahs of voluntary prayer, then recite the authentic Istikhara dua, naming the proposal/person at “hadhal-amr.” Guidance often appears as ease or difficulty — not necessarily a dream. Full dua text also in <a href="/blog/dua-e-istikhara">dua e Istikhara</a>.
          </div>

          <div class="toc">
            <strong>In this guide</strong>
            <ol>
              <li><a href="#when">When to pray</a></li>
              <li><a href="#before">Before Istikhara checklist</a></li>
              <li><a href="#steps">Step-by-step method</a></li>
              <li><a href="#dua">Istikhara dua</a></li>
              <li><a href="#dreams">Dreams myth</a></li>
              <li><a href="#after">How to read the outcome</a></li>
              <li><a href="#faq">FAQ</a></li>
            </ol>
          </div>

          <h2 id="when">When to pray Istikhara for marriage</h2>
          <ul>
            <li>A specific proposal or person is before you</li>
            <li>You are deciding between realistic options (not something haram)</li>
            <li>You have gathered basic information and sought advice (istishara)</li>
            <li>You feel stuck between two apparently similar paths</li>
          </ul>
          <p>Istikhara is not for asking whether marriage itself is allowed — it is for seeking Allah’s choice regarding a particular matter. Pair spiritual seeking with character due diligence and family wisdom.</p>

          <h2 id="before">Before Istikhara — practical checklist</h2>
          <table class="np-table">
            <tr><th>Check</th><th>Why it matters</th></tr>
            <tr><td>Deen &amp; character signals</td><td>Istikhara is not a shortcut past red flags you already see</td></tr>
            <tr><td>Family / wali process</td><td>Marriage is not only a private feeling</td></tr>
            <tr><td>Lifestyle fit basics</td><td>Location, finances honesty, children expectations</td></tr>
            <tr><td>Istishara done</td><td>Ask 1–2 trustworthy people who fear Allah</td></tr>
            <tr><td>Haram options removed</td><td>Do not Istikhara a path that is clearly sinful</td></tr>
          </table>
          <p>Also make general dua for a righteous spouse: <a href="/blog/dua-for-marriage">dua for marriage</a>.</p>

          <h2 id="steps">Step-by-step method</h2>
          <ol>
            <li><strong>Wudu</strong> and a clean place; avoid forbidden prayer times if your school observes them for nafl.</li>
            <li><strong>Intention:</strong> two rak‘ahs nafl for Istikhara regarding this marriage matter.</li>
            <li><strong>Pray two rak‘ahs</strong> like a normal voluntary prayer (some recommend Al-Kafirun then Al-Ikhlas — any Quran is fine if you are unsure).</li>
            <li><strong>Praise Allah</strong> and send salawat upon the Prophet ﷺ.</li>
            <li><strong>Recite the Istikhara dua</strong> (below), mentioning the specific person/proposal at the place of “this matter.”</li>
            <li><strong>Trust and move:</strong> continue normal decision steps; watch what Allah makes easy or closes.</li>
            <li><strong>Optional repeat:</strong> if confusion remains after days, you may repeat while still taking counsel.</li>
          </ol>

          <h2 id="dua">Istikhara dua (Arabic, transliteration, English)</h2>
          <div class="verse-card">
            <span class="vnum">PROPHETIC DUA · Bukhari</span>
            <div class="arabic">اللَّهُمَّ إِنِّي أَسْتَخِيرُكَ بِعِلْمِكَ، وَأَسْتَقْدِرُكَ بِقُدْرَتِكَ، وَأَسْأَلُكَ مِنْ فَضْلِكَ الْعَظِيمِ، فَإِنَّكَ تَقْدِرُ وَلَا أَقْدِرُ، وَتَعْلَمُ وَلَا أَعْلَمُ، وَأَنْتَ عَلَّامُ الْغُيُوبِ، اللَّهُمَّ إِنْ كُنْتَ تَعْلَمُ أَنَّ هَذَا الْأَمْرَ خَيْرٌ لِي فِي دِينِي وَمَعَاشِي وَعَاقِبَةِ أَمْرِي فَاقْدُرْهُ لِي وَيَسِّرْهُ لِي ثُمَّ بَارِكْ لِي فِيهِ، وَإِنْ كُنْتَ تَعْلَمُ أَنَّ هَذَا الْأَمْرَ شَرٌّ لِي فِي دِينِي وَمَعَاشِي وَعَاقِبَةِ أَمْرِي فَاصْرِفْهُ عَنِّي وَاصْرِفْنِي عَنْهُ، وَاقْدُرْ لِيَ الْخَيْرَ حَيْثُ كَانَ ثُمَّ أَرْضِنِي بِهِ</div>
            <p class="translit">Allaahumma innee astakheeruka bi ‘ilmika, wa astaqdiruka bi qudratika, wa as’aluka min fadlika al-‘azeem, fa innaka taqdiru wa laa aqdiru, wa ta‘lamu wa laa a‘lamu, wa anta ‘allaamul-ghuyoob. Allaahumma in kunta ta‘lamu anna haadhal-amra khayrun lee fee deenee wa ma‘aashee wa ‘aaqibati amree faqdurhu lee wa yassirhu lee thumma baarik lee feeh. Wa in kunta ta‘lamu anna haadhal-amra sharrun lee fee deenee wa ma‘aashee wa ‘aaqibati amree fasrifhu ‘annee wasrifnee ‘anh, waqdur liyal-khayra haythu kaana thumma ardinee bih.</p>
            <p class="trans-en"><strong>English (sense):</strong> O Allah, I seek Your guidance by Your knowledge, and I seek ability by Your power, and I ask You of Your great bounty… If You know this matter is good for my religion, my livelihood, and the outcome of my affair, then decree it for me, make it easy, and bless it for me. If You know it is bad for me in my religion, livelihood, and outcome, then turn it away from me and turn me away from it, decree good for me wherever it may be, and make me pleased with it.</p>
          </div>
          <p><strong>Naming the matter:</strong> When you reach “hadhal-amr / this matter,” silently or verbally specify the marriage proposal (name/person) so the dua is not vague.</p>

          <h2 id="dreams">Do I need a dream?</h2>
          <div class="gold-box">
            <strong>No.</strong> Many scholars emphasise ease vs difficulty and peace vs constriction more than dreams. Waiting forever for a cinematic “sign” is not the Sunnah method. A calm green dream is not a fatwa; a scary dream is not automatic rejection. Look at real-world facilitation and your ability to proceed with deen intact.
          </div>

          <h2 id="after">How to “read” the outcome without superstition</h2>
          <ul>
            <li><strong>Ease opening:</strong> doors open, hearts settle, practical path becomes walkable</li>
            <li><strong>Difficulty closing:</strong> repeated barriers, unrest that does not leave, deen compromises required</li>
            <li><strong>Still unclear:</strong> repeat Istikhara, widen istishara, slow the timeline — do not force a 24-hour verdict</li>
            <li><strong>Red flag remains red:</strong> Istikhara does not bleach a character problem you already know</li>
          </ul>

          <h2 id="repeat">How many times?</h2>
          <p>You may repeat on multiple nights if confusion remains. Also keep general dua and character checking. If pressure from people is intense, protect your decision space — calm timing is part of wisdom.</p>

          <h2 id="mistakes">Common Istikhara mistakes for marriage</h2>
          <ul>
            <li>Skipping information-gathering and treating Istikhara like a coin toss</li>
            <li>Paying someone to “see” your answer</li>
            <li>Praying once, then doom-scrolling for symbolic dreams</li>
            <li>Using Istikhara to override clear haram</li>
            <li>Ignoring wali/family process in cultures where it is required, then blaming “signs”</li>
          </ul>
          <p>Learn correct Arabic pronunciation over time: <a href="/learn-quran-online">learn Quran online</a>. Broader spiritual asking: <a href="/blog/dua-for-hajat-arabic-english">dua for hajat</a> · <a href="/blog/what-is-wazifa-in-islam">authentic wazifa vs fakes</a>.</p>

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
          <details class="faq-acc"><summary>Should both the man and woman pray Istikhara?<span>+</span></summary>
            <p>Each person who can should seek guidance for their own decision. Parents may also make dua, but your own Istikhara still matters.</p>
          </details>
          <details class="faq-acc"><summary>What if I already emotionally decided?<span>+</span></summary>
            <p>Still pray honestly — ask Allah to facilitate if good and turn it away if harmful. Be willing to accept a closed door.</p>
          </details>
          <p>Istikhara for marriage is not fortune-telling. It is handing the choice to the One who knows the unseen — then walking forward with trust.</p>`,
  },
};
