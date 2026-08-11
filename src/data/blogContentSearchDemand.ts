/**
 * Highest global search-demand Islamic topics still missing as dedicated owners:
 * dua for rizq, Juz Amma memorisation, benefits of reading Quran daily.
 * Authentic sources only; soft commercial bridges; no invented miracles/stats.
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

export const searchDemandBlogContent: Record<string, { style: string; content: string }> = {
  "dua-for-rizq-arabic-english": {
    style: S,
    content: `<p>A <strong>dua for rizq</strong> is one of the most searched Islamic duas online — people ask Allah for lawful provision, barakah in income, and relief from financial anxiety. Islam pairs dua with lawful effort, gratitude, and trust — not superstition or “guaranteed money” claims.</p>

          <div class="highlight-box">
            <strong>Quick answer:</strong> A powerful prophetic morning dua is <strong>Allahumma inni as’aluka ‘ilman nafi‘an, wa rizqan tayyiban, wa ‘amalan mutaqabbalan</strong> (Ibn Majah). From the Quran, recite <strong>Rabbana atina fid-dunya hasanatan…</strong> (2:201) and the rizq verse of Surah At-Talaq (65:2–3). Teach children short duas correctly with a <a href="/online-quran-classes-for-kids">kids free trial</a>.
          </div>

          <h2 id="best-duas">Best duas for rizq (Arabic, transliteration, English)</h2>

          <h3>1. Morning dua for beneficial knowledge and good rizq</h3>
          <div class="verse-card">
            <span class="vnum">PROPHETIC DUA · Ibn Majah 925</span>
            <div class="arabic">اللَّهُمَّ إِنِّي أَسْأَلُكَ عِلْمًا نَافِعًا، وَرِزْقًا طَيِّبًا، وَعَمَلًا مُتَقَبَّلًا</div>
            <p class="translit">Allaahumma innee as’aluka ‘ilman naafi‘an, wa rizqan tayyiban, wa ‘amalan mutaqabbalan.</p>
            <p class="trans-en"><strong>English:</strong> O Allah, I ask You for beneficial knowledge, good (lawful) provision, and accepted deeds.</p>
          </div>
          <p>This dua balances income with knowledge and accepted worship — a healthier ask than money alone.</p>

          <h3>2. Comprehensive Quranic dua (dunya + akhirah)</h3>
          <div class="verse-card">
            <span class="vnum">QURAN 2:201</span>
            <div class="arabic">رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الْآخِرَةِ حَسَنَةً وَقِنَا عَذَابَ النَّارِ</div>
            <p class="translit">Rabbanaa aatinaa fid-dunyaa hasanatan wa fil-aakhirati hasanatan wa qinaa ‘adhaaban-naar.</p>
            <p class="trans-en"><strong>English:</strong> Our Lord, give us good in this world and good in the Hereafter, and protect us from the punishment of the Fire.</p>
          </div>
          <p>Full guide: <a href="/blog/rabbana-atina-fid-dunya">Rabbana atina fid dunya</a>.</p>

          <h3>3. Trust and provision after taqwa (Surah At-Talaq)</h3>
          <div class="verse-card">
            <span class="vnum">QURAN 65:2–3</span>
            <div class="arabic">وَمَن يَتَّقِ اللَّهَ يَجْعَل لَّهُ مَخْرَجًا ۝ وَيَرْزُقْهُ مِنْ حَيْثُ لَا يَحْتَسِبُ</div>
            <p class="translit">Wa man yattaqi-llaaha yaj‘al lahu makhrajaa. Wa yarzuqhu min haythu laa yahtasib.</p>
            <p class="trans-en"><strong>English:</strong> And whoever fears Allah — He will make for him a way out, and will provide for him from where he does not expect.</p>
          </div>
          <p>Recite with reflection when anxiety about money rises. Taqwa and lawful effort remain part of the path.</p>

          <h3>4. Dua of Musa for ease (when work feels blocked)</h3>
          <div class="verse-card">
            <span class="vnum">QURAN 20:25–26</span>
            <div class="arabic">رَبِّ اشْرَحْ لِي صَدْرِي ۝ وَيَسِّرْ لِي أَمْرِي</div>
            <p class="translit">Rabbish-rah lee sadree. Wa yassir lee amree.</p>
            <p class="trans-en"><strong>English:</strong> My Lord, expand for me my chest, and ease my task for me.</p>
          </div>

          <h2 id="when">When to make dua for rizq</h2>
          <ul>
            <li>After Fajr, with morning adhkar</li>
            <li>In sujood and in the last third of the night</li>
            <li>Between adhan and iqamah</li>
            <li>On Fridays, especially before Maghrib</li>
            <li>Any time hardship appears — consistency beats rare long sessions</li>
          </ul>
          <p>Related: <a href="/blog/morning-evening-adhkar-dhikr">morning and evening adhkar</a> · <a href="/blog/dua-for-anxiety-stress-depression">dua for anxiety</a>.</p>

          <h2 id="etiquette">Etiquette that accompanies rizq dua</h2>
          <ol>
            <li>Earn through lawful means — dua is not a shortcut around haram income</li>
            <li>Give even small charity when you can</li>
            <li>Say Alhamdulillah for what you already have</li>
            <li>Keep ties of kinship and avoid injustice in business</li>
            <li>Ask for <em>tayyib</em> (good/lawful) rizq, not merely “more”</li>
          </ol>
          <div class="gold-box">
            <strong>Avoid:</strong> Viral “secret rizq duas” with invented rewards, paid “guaranteed wealth” charms, or skipping work while waiting for miracles. Stick to Quran and authentic Sunnah.
          </div>

          <h2 id="kids">Teach kids a short rizq dua</h2>
          <p>Children can learn the morning dua in small pieces with correct Arabic sounds. Parents who do not speak Arabic can still protect a routine — see <a href="/blog/parents-dont-speak-arabic-child-learn-quran">parents don’t speak Arabic</a> and <a href="/blog/duas-for-kids-to-memorize">duas for kids to memorize</a>.</p>

          <h2 id="urdu-search">Why people search “rizq ki dua”</h2>
          <p><em>Rizq ki dua</em> is simply Urdu for “dua for provision.” The need is the same whether someone types English or mixed Urdu-English. Stick to Quranic and prophetic wordings rather than viral “guaranteed money” posts that invent rewards.</p>

          <h2 id="barakah">Rizq is not only a salary</h2>
          <p>Lawful work, a calm home, useful knowledge, and accepted worship are all part of provision. That is why the morning dua asks for beneficial knowledge and accepted deeds beside good rizq — so the heart does not chase income while neglecting everything that makes income worth having.</p>

          <h2 id="faq">FAQ</h2>
          <details class="faq-acc"><summary>What is the best dua for rizq in Islam?<span>+</span></summary>
            <p>A strong prophetic choice is Allahumma inni as’aluka ‘ilman nafi‘an, wa rizqan tayyiban, wa ‘amalan mutaqabbalan. Pair it with Quran 2:201 and lawful effort.</p>
          </details>
          <details class="faq-acc"><summary>Does dua for rizq replace looking for a job?<span>+</span></summary>
            <p>No. Islam teaches taking means (asbab) and placing trust in Allah. Dua and effort belong together.</p>
          </details>
          <details class="faq-acc"><summary>Can I make dua for rizq in English?<span>+</span></summary>
            <p>Yes — ask Allah in any language you understand. Learning the Arabic prophetic wording is rewarding when taught correctly.</p>
          </details>
          <details class="faq-acc"><summary>How often should I recite dua for rizq?<span>+</span></summary>
            <p>Daily consistency after Fajr or in sujood is better than occasional long sessions. Keep the heart present.</p>
          </details>
          <p>Rizq is from Allah. Ask sincerely, work lawfully, give thanks, and teach your family authentic words — not viral promises.</p>`,
  },

  "how-to-memorize-juz-amma": {
    style: S,
    content: `<p><strong>How to memorize Juz Amma</strong> is a top search for parents and new learners — the 30th juz holds short surahs used in salah. The winning method is accurate reading first, then small daily new work plus revision — not racing the whole juz by ear in a weekend.</p>

          <div class="highlight-box">
            <strong>Quick answer:</strong> Confirm the learner can read (or follow with teacher support), then memorize <strong>one short surah or a few lines at a time</strong> with daily revision of older surahs. Use live correction for Tajweed. Start with a <a href="/free-quran-classes-online">free trial</a> · see <a href="/blog/online-hifz-classes-for-kids">online Hifz for kids</a>.
          </div>

          <h2 id="what">What is Juz Amma?</h2>
          <p>Juz Amma is the final thirtieth of the Quran, beginning with Surah An-Naba’ and ending with Surah An-Nas. It includes many short surahs commonly taught after Al-Fatiha for prayer fluency.</p>

          <h2 id="before">Before you start memorising</h2>
          <ul>
            <li>Can the learner recognise letters and short vowels, or will they only copy by ear?</li>
            <li>Is Al-Fatiha solid?</li>
            <li>Is a quiet daily slot available (even 10–15 minutes)?</li>
            <li>Who will hear and correct mistakes — parent, tutor, or both?</li>
          </ul>
          <p>If foundations are weak, start with <a href="/noorani-qaida">Noorani Qaida</a> / beginner reading first — see <a href="/blog/what-should-my-child-learn-first-in-quran">what should my child learn first</a>.</p>

          <h2 id="method">A practical Juz Amma memorisation method</h2>
          <table class="np-table">
            <tr><th>Step</th><th>What to do</th><th>Why</th></tr>
            <tr><td><strong>1. Listen + look</strong></td><td>Hear a correct model while looking at the mushaf</td><td>Prevents guessing</td></tr>
            <tr><td><strong>2. Small new work</strong></td><td>2–5 lines (or one short surah) per day</td><td>Sustainable load</td></tr>
            <tr><td><strong>3. Immediate recall</strong></td><td>Close mushaf and recite to a listener</td><td>Exposes weak spots</td></tr>
            <tr><td><strong>4. Sabqi</strong></td><td>Revise yesterday’s work before new lines</td><td>Stops forgetting</td></tr>
            <tr><td><strong>5. Manzil</strong></td><td>Weekly rotate older surahs</td><td>Keeps the juz alive</td></tr>
          </table>
          <p>Hifz systems explained further: <a href="/blog/how-to-memorize-quran-faster">how to memorize Quran faster</a> (realistic habits, not shortcuts).</p>

          <h2 id="order">Suggested order for beginners</h2>
          <ol>
            <li>Al-Fatiha (if not already solid)</li>
            <li>Short 3 Quls and An-Nas / Al-Falaq / Al-Ikhlas cluster</li>
            <li>Al-Kawthar, Al-Asr, Al-Fil, Quraysh, and neighbouring short surahs</li>
            <li>Gradually longer surahs in Juz Amma as confidence grows</li>
          </ol>
          <p>Exact order can follow your tutor’s plan. Accuracy beats “finishing the juz” for Instagram.</p>

          <h2 id="schedule">Sample weekly schedule</h2>
          <ul>
            <li><strong>5–6 days:</strong> new lines + revise previous day</li>
            <li><strong>1 day:</strong> revision-only of the week’s surahs</li>
            <li><strong>Live lesson 1–2×/week:</strong> Tajweed repair and accountability</li>
          </ul>
          <p>Frequency help: <a href="/blog/how-many-quran-classes-per-week">how many Quran classes per week</a>.</p>

          <h2 id="mistakes">Mistakes that break Juz Amma Hifz</h2>
          <ul>
            <li>Memorising only by audio with zero reading path</li>
            <li>Adding new surahs while yesterday is still broken</li>
            <li>Skipping revision for weeks then cramming</li>
            <li>Comparing your child’s pace to cousins</li>
            <li>No listener — errors become permanent</li>
          </ul>

          <h2 id="adults">Adults memorising Juz Amma</h2>
          <p>Adults succeed with shorter daily sessions and humble placement. If reading is weak, fix letters first. See <a href="/online-quran-classes-for-adults">online Quran classes for adults</a> and <a href="/blog/learn-quran-as-an-adult-never-too-late">learn Quran as an adult</a>.</p>

          <h2 id="start">Start this week</h2>
          <ol>
            <li>Pick Al-Fatiha + one short surah as your first block</li>
            <li>Protect a daily 10–15 minute slot</li>
            <li>Book a live tutor to hear you</li>
            <li>Track revision, not only “new pages”</li>
          </ol>
          <p><a href="/hifz-quran-online">Hifz Quran online</a> · <a href="/online-quran-classes-for-kids">kids classes</a> · <a href="/pricing">pricing</a>.</p>

          <h2 id="faq">FAQ</h2>
          <details class="faq-acc"><summary>How long does it take to memorize Juz Amma?<span>+</span></summary>
            <p>It varies widely by age, reading ability, and daily consistency. Many learners take months with steady revision — not a fixed guarantee. Focus on accurate retention.</p>
          </details>
          <details class="faq-acc"><summary>Can kids memorize Juz Amma by listening only?<span>+</span></summary>
            <p>Ear memory helps salah, but without reading foundations, gaps appear later. Pair listening with reading support when possible.</p>
          </details>
          <details class="faq-acc"><summary>Should Tajweed come before Juz Amma Hifz?<span>+</span></summary>
            <p>Basic correct pronunciation should be taught alongside memorisation. Heavy rule theory can wait until reading is stable — but do not ignore clear letter mistakes.</p>
          </details>
          <details class="faq-acc"><summary>What is the best app for Juz Amma?<span>+</span></summary>
            <p>Apps can play models. They cannot replace a live listener for correction. Use recordings as support between lessons.</p>
          </details>
          <p>Juz Amma is a gift for salah — protect it with small daily work, honest revision, and a teacher who hears you.</p>`,
  },

  "benefits-of-reading-quran-daily": {
    style: S,
    content: `<p><strong>Benefits of reading Quran daily</strong> is a high-volume search because Muslims want both spiritual meaning and a practical habit. The Quran itself describes healing, guidance, and mercy for believers — and the Sunnah encourages consistent recitation, even if the portion is small.</p>

          <div class="highlight-box">
            <strong>Quick answer:</strong> Daily Quran reading brings reward for every letter, softens the heart, guides choices, and builds a lifelong bond with Allah’s words. Start small (even a page or a few ayahs), recite with presence, and improve accuracy with a live teacher. <a href="/learn-quran-online">Learn Quran online</a> · <a href="/free-quran-classes-online">free trial</a>.
          </div>

          <h2 id="quran">What the Quran says about its own benefit</h2>
          <div class="verse-card">
            <span class="vnum">QURAN 17:82</span>
            <div class="arabic">وَنُنَزِّلُ مِنَ الْقُرْآنِ مَا هُوَ شِفَاءٌ وَرَحْمَةٌ لِّلْمُؤْمِنِينَ</div>
            <p class="translit">Wa nunazzilu minal-quraani maa huwa shifaa’un wa rahmatul-lil-mu’mineen.</p>
            <p class="trans-en"><strong>English:</strong> And We send down of the Quran that which is healing and mercy for the believers.</p>
          </div>
          <div class="verse-card">
            <span class="vnum">QURAN 2:2</span>
            <div class="arabic">ذَٰلِكَ الْكِتَابُ لَا رَيْبَ ۛ فِيهِ ۛ هُدًى لِّلْمُتَّقِينَ</div>
            <p class="translit">Dhaalikal-kitaabu laa rayba feeh. Hudal-lil-muttaqeen.</p>
            <p class="trans-en"><strong>English:</strong> This is the Book about which there is no doubt — a guidance for those conscious of Allah.</p>
          </div>

          <h2 id="hadith">Prophetic encouragement to stay with the Quran</h2>
          <p>The Prophet ﷺ taught that the one who is proficient with the Quran is with the noble scribes, and the one who recites with difficulty has a double reward (Sahih al-Bukhari, Sahih Muslim). Struggle is not failure — it is rewarded effort.</p>
          <p>He also encouraged decorating voices with the Quran and returning to it regularly so it does not escape the heart like a tied camel (authentic narrations in the Sahih collections). Consistency matters more than rare long sessions.</p>

          <h2 id="benefits">Practical benefits families notice</h2>
          <table class="np-table">
            <tr><th>Benefit</th><th>How daily reading helps</th></tr>
            <tr><td><strong>Reward</strong></td><td>Every letter is rewarded; small daily portions compound</td></tr>
            <tr><td><strong>Guidance</strong></td><td>Ayahs shape decisions, character, and patience</td></tr>
            <tr><td><strong>Calm</strong></td><td>Recitation and reflection can settle anxiety when paired with dua</td></tr>
            <tr><td><strong>Family culture</strong></td><td>Children copy what they see parents protect on the calendar</td></tr>
            <tr><td><strong>Salah quality</strong></td><td>Familiar ayahs improve focus and fluency in prayer</td></tr>
            <tr><td><strong>Arabic familiarity</strong></td><td>Daily exposure supports letter and word recognition over time</td></tr>
          </table>
          <div class="gold-box">
            <strong>Honest note:</strong> Do not invent medical cures or guaranteed worldly outcomes. The Quran’s primary gift is guidance and mercy for believers. Seek medical care when needed, and keep dua and recitation as worship.
          </div>

          <h2 id="how">How to start a daily Quran habit</h2>
          <ol>
            <li>Pick a fixed micro-slot (after Fajr or before sleep)</li>
            <li>Choose a tiny goal: 5 ayahs, half a page, or one short surah review</li>
            <li>Read from a mushaf you can mark lightly for review</li>
            <li>Add a 30-second reflection or dua after reading</li>
            <li>Once a week, recite to a live teacher for correction</li>
          </ol>
          <p>Habit help: <a href="/blog/quran-practice-routine-at-home-kids">practice routine for kids</a> · <a href="/blog/morning-evening-adhkar-dhikr">morning/evening adhkar</a>.</p>

          <h2 id="reading-vs-listening">Reading vs listening vs memorising</h2>
          <ul>
            <li><strong>Reading</strong> builds decoding and direct engagement with the text</li>
            <li><strong>Listening</strong> helps melody and review — especially while commuting</li>
            <li><strong>Memorising</strong> needs revision systems (see <a href="/blog/how-to-memorize-juz-amma">how to memorize Juz Amma</a>)</li>
          </ul>
          <p>Beginners who cannot yet decode should still listen and learn letters with a tutor — <a href="/online-quran-for-beginners">online Quran for beginners</a>.</p>

          <h2 id="barriers">What stops daily reading (and fixes)</h2>
          <ul>
            <li><strong>All-or-nothing goals</strong> → shrink the daily target</li>
            <li><strong>Shame about mistakes</strong> → remember the double reward for difficulty</li>
            <li><strong>No schedule</strong> → attach Quran to an existing habit (after Fajr tea, after Isha)</li>
            <li><strong>Phone distraction</strong> → mushaf first, phone in another room</li>
          </ul>

          <h2 id="start">Start today</h2>
          <p>Open the mushaf for five minutes. Recite what you can. Ask Allah for consistency. If you want structured live help, book a trial: <a href="/learn-quran-online">learn Quran online</a> · <a href="/online-quran-classes">online Quran classes</a> · <a href="/pricing">pricing</a>.</p>

          <h2 id="faq">FAQ</h2>
          <details class="faq-acc"><summary>What are the benefits of reading Quran every day?<span>+</span></summary>
            <p>Daily reading brings reward for letters recited, strengthens guidance and remembrance, supports salah fluency, and builds a stable family habit — especially when paired with reflection and correct pronunciation over time.</p>
          </details>
          <details class="faq-acc"><summary>Is it okay to read Quran without understanding Arabic?<span>+</span></summary>
            <p>Yes — recitation is rewarded, and using a trusted translation alongside can help understanding. Improving Arabic reading with a teacher deepens the experience.</p>
          </details>
          <details class="faq-acc"><summary>How much Quran should I read daily?<span>+</span></summary>
            <p>The best amount is what you can keep every day. A small consistent portion beats a large burst followed by silence.</p>
          </details>
          <details class="faq-acc"><summary>Can children benefit from daily Quran reading?<span>+</span></summary>
            <p>Yes. Short, kind sessions build love and skill. See kids class options and keep pressure low.</p>
          </details>
          <p>The Quran’s greatest benefit is the guidance it brings when it is read, lived, and returned to daily — even in small portions done with sincerity.</p>`,
  },

  "dua-for-children-arabic-english": {
    style: S,
    content: `<p>A <strong>dua for children</strong> is how parents ask Allah for protection, righteousness, and mercy over their sons and daughters. Islam gives prophetic wording parents can teach — in Arabic with understanding — without invented “guaranteed” charms or fear-based superstition.</p>

          <div class="highlight-box">
            <strong>Quick answer:</strong> A core prophetic protection dua for children is <strong>U‘eedhukumaa bi kalimaat-illaahit-taammati min kulli shaytaanin wa haammatin, wa min kulli ‘aynin laammah</strong> (Bukhari). Parents also recite Quranic duas for righteous offspring (such as 3:38 and 25:74). Teach short Arabic correctly — a <a href="/online-quran-classes-for-kids">kids trial</a> helps pronunciation.
          </div>

          <h2 id="protection">1) Prophetic protection dua for children</h2>
          <div class="verse-card">
            <span class="vnum">PROPHETIC DUA · Sahih al-Bukhari 3371</span>
            <div class="arabic">أُعِيذُكُمَا بِكَلِمَاتِ اللَّهِ التَّامَّةِ مِنْ كُلِّ شَيْطَانٍ وَهَامَّةٍ، وَمِنْ كُلِّ عَيْنٍ لَامَّةٍ</div>
            <p class="translit">U‘eedhukumaa bi kalimaat-illaahit-taammati min kulli shaytaanin wa haammatin, wa min kulli ‘aynin laammah.</p>
            <p class="trans-en"><strong>English:</strong> I seek protection for you both in the perfect words of Allah from every devil and poisonous creature, and from every evil eye.</p>
          </div>
          <p>The Prophet ﷺ used this wording for Hasan and Husayn. For one child, parents commonly adjust the dual form to the singular as taught by scholars of language and fiqh in their community. Related: <a href="/blog/evil-eye-dua-nazar-ruqyah">evil eye dua &amp; ruqyah</a>.</p>

          <h2 id="righteous">2) Quranic dua for righteous children</h2>
          <div class="verse-card">
            <span class="vnum">QURAN 25:74</span>
            <div class="arabic">رَبَّنَا هَبْ لَنَا مِنْ أَزْوَاجِنَا وَذُرِّيَّاتِنَا قُرَّةَ أَعْيُنٍ وَاجْعَلْنَا لِلْمُتَّقِينَ إِمَامًا</div>
            <p class="translit">Rabbanaa hab lanaa min azwaajinaa wa dhurriyyatinaa qurrata a‘yunin waj‘alnaa lil-muttaqeena imaamaa.</p>
            <p class="trans-en"><strong>English:</strong> Our Lord, grant us from our spouses and offspring comfort to our eyes, and make us leaders for the righteous.</p>
          </div>

          <div class="verse-card">
            <span class="vnum">QURAN 3:38</span>
            <div class="arabic">رَبِّ هَبْ لِي مِن لَّدُنكَ ذُرِّيَّةً طَيِّبَةً ۖ إِنَّكَ سَمِيعُ الدُّعَاءِ</div>
            <p class="translit">Rabbi hab lee mil-ladunka dhurriyyatan tayyibah. Innaka samee‘ud-du‘aa.</p>
            <p class="trans-en"><strong>English:</strong> My Lord, grant me from Yourself good offspring. Indeed, You are the Hearer of supplication.</p>
          </div>

          <h2 id="mercy">3) Dua of mercy for parents and children</h2>
          <div class="verse-card">
            <span class="vnum">QURAN 17:24</span>
            <div class="arabic">رَّبِّ ارْحَمْهُمَا كَمَا رَبَّيَانِي صَغِيرًا</div>
            <p class="translit">Rabbir-hamhumaa kamaa rabbayaanee sagheeraa.</p>
            <p class="trans-en"><strong>English:</strong> My Lord, have mercy upon them as they brought me up when I was small.</p>
          </div>
          <p>Children can learn to make dua for their parents with this verse — full guide: <a href="/blog/dua-for-parents-rabbirhamhuma">dua for parents</a>.</p>

          <h2 id="morning">4) Short morning habits with kids</h2>
          <ul>
            <li>Recite the protection dua after Fajr or when leaving for school</li>
            <li>Teach <a href="/blog/dua-before-school-for-kids">dua before school</a> in small pieces</li>
            <li>Keep <a href="/blog/duas-for-kids-to-memorize">duas for kids to memorize</a> short enough to repeat with love</li>
            <li>Pair dua with ordinary care — sleep, food, kind words — not dua alone as a superstition substitute</li>
          </ul>
          <div class="gold-box">
            <strong>Avoid:</strong> Viral “secret child protection” posts with invented rewards, paid amulets sold as guarantees, or medical claims. Stick to Quran and authentic Sunnah, and seek professional help for health or safety needs.
          </div>

          <h2 id="english">Can I make dua for my child in English?</h2>
          <p>Yes. Ask Allah in any language you understand. Learning the Arabic prophetic wording is rewarding when sounds are taught correctly — especially the letters children often miss. Parents who do not speak Arabic can still lead the habit: <a href="/blog/parents-dont-speak-arabic-child-learn-quran">parents don’t speak Arabic</a>.</p>

          <h2 id="teach">How to teach these duas with correct pronunciation</h2>
          <ol>
            <li>Play or recite one short line; child repeats</li>
            <li>Correct one sound at a time — not five at once</li>
            <li>Explain the English meaning in one sentence</li>
            <li>Use the dua in a real moment (school run, bedtime)</li>
            <li>Review weekly so memorisation stays alive</li>
          </ol>
          <p>Live listening helps when parents cannot hear their own mistakes. Book a gentle kids session: <a href="/free-quran-classes-online">free trial</a> · <a href="/online-quran-classes-for-kids">online Quran classes for kids</a>.</p>

          <h2 id="faq">FAQ</h2>
          <details class="faq-acc"><summary>What is the best dua for children in Islam?<span>+</span></summary>
            <p>A primary prophetic protection dua is U‘eedhukumaa bi kalimaat-illaahit-taammati… (Bukhari). Pair it with Quranic duas for righteous offspring such as 25:74 and 3:38.</p>
          </details>
          <details class="faq-acc"><summary>What is the prophetic protection dua for kids?<span>+</span></summary>
            <p>The dua the Prophet ﷺ used for Hasan and Husayn seeking protection in Allah’s perfect words from every devil, poisonous creature, and evil eye (Bukhari 3371).</p>
          </details>
          <details class="faq-acc"><summary>Can I make dua for my child in English?<span>+</span></summary>
            <p>Yes — Allah hears every language. Learning authentic Arabic wording is encouraged when taught with correct pronunciation.</p>
          </details>
          <details class="faq-acc"><summary>How do I teach these duas with correct pronunciation?<span>+</span></summary>
            <p>Teach one line at a time, correct one sound at a time, explain the meaning briefly, and use the dua in real daily moments. A live teacher helps when parents cannot catch errors.</p>
          </details>
          <p>The best dua for children is authentic, understood, and lived — protection sought from Allah, paired with merciful parenting and steady Quran learning.</p>`,
  },

  "dua-for-sick-person-arabic-english": {
    style: S,
    content: `<p>A <strong>dua for a sick person</strong> (dua for shifa) is among the most searched Islamic duas worldwide — families want prophetic wording they can recite at a bedside, in a hospital corridor, or over themselves. Islam pairs dua with taking means: medicine, rest, and trust in Allah as Ash-Shafi (the Healer).</p>

          <div class="highlight-box">
            <strong>Quick answer:</strong> The core prophetic healing dua is <strong>Allahumma Rabban-naas, adhhibil-ba’s, washfi antash-Shaafi…</strong> (Bukhari &amp; Muslim). Place the right hand on the area of pain when appropriate, and you may add the Mu‘awwidhat (Ikhlas, Falaq, Nas). This is not a substitute for medical care. Teach children short duas with a <a href="/online-quran-classes-for-kids">kids trial</a>.
          </div>

          <h2 id="main-dua">1) Main prophetic dua for healing (shifa)</h2>
          <div class="verse-card">
            <span class="vnum">PROPHETIC DUA · Bukhari 5742 · Muslim</span>
            <div class="arabic">اللَّهُمَّ رَبَّ النَّاسِ، أَذْهِبِ الْبَأْسَ، وَاشْفِ أَنْتَ الشَّافِي، لَا شِفَاءَ إِلَّا شِفَاؤُكَ، شِفَاءً لَا يُغَادِرُ سَقَمًا</div>
            <p class="translit">Allaahumma Rabban-naas, adhhibil-ba’s, washfi antash-Shaafi, laa shifaa’a illaa shifaa’uk, shifaa’an laa yughaadiru saqamaa.</p>
            <p class="trans-en"><strong>English:</strong> O Allah, Lord of mankind, remove the affliction and heal — You are the Healer. There is no healing except Your healing, a healing that leaves behind no illness.</p>
          </div>
          <p>Aisha (RA) reported that the Prophet ﷺ would wipe with his right hand and recite this. Recite with presence of heart; many families repeat it three or seven times without turning the count into superstition.</p>

          <h2 id="pain">2) Dua when placing the hand on pain</h2>
          <div class="verse-card">
            <span class="vnum">PROPHETIC DUA · Muslim</span>
            <div class="arabic">بِسْمِ اللَّهِ (ثَلَاثًا)، أَعُوذُ بِعِزَّةِ اللَّهِ وَقُدْرَتِهِ مِنْ شَرِّ مَا أَجِدُ وَأُحَاذِرُ (سَبْعًا)</div>
            <p class="translit">Bismillaah (three times). A‘oodhu bi ‘izzatillaahi wa qudratihi min sharri maa ajidu wa uhaadhir (seven times).</p>
            <p class="trans-en"><strong>English:</strong> In the name of Allah (×3). I seek refuge in the might of Allah and His power from the evil of what I feel and fear (×7).</p>
          </div>

          <h2 id="visit">3) Words when visiting the sick</h2>
          <div class="verse-card">
            <span class="vnum">PROPHETIC WORDS · Bukhari</span>
            <div class="arabic">لَا بَأْسَ، طَهُورٌ إِنْ شَاءَ اللَّهُ</div>
            <p class="translit">Laa ba’sa, tahoorun in shaa’ Allaah.</p>
            <p class="trans-en"><strong>English:</strong> No harm — it is a purification, if Allah wills.</p>
          </div>
          <p>Keep visits short, hopeful, and clean of scary talk. Ask the sick person to make dua for you — their dua is valued in the Sunnah reports about visiting the ill.</p>

          <h2 id="quran">4) Quran often recited for comfort and ruqyah</h2>
          <ul>
            <li><strong>Al-Fatihah</strong> — known in the Sunnah in the context of ruqyah/healing</li>
            <li><strong>Ayatul Kursi</strong> — <a href="/blog/ayatul-kursi-arabic-english-benefits">Ayatul Kursi guide</a></li>
            <li><strong>Ikhlas, Falaq, Nas</strong> — <a href="/blog/4-quls">4 Quls</a> · blow lightly into hands and wipe when practising prophetic ruqyah patterns</li>
            <li><strong>Al-Fatiha / known surahs</strong> the family already recites correctly</li>
          </ul>
          <div class="gold-box">
            <strong>Avoid:</strong> Guaranteed cure claims, paid “secret shifa packages,” or skipping doctors. Weak or fabricated medical miracles online are not proof. Surah Yasin brings general Quranic blessing when recited, but do not replace authenticated healing duas with unverified viral claims — see also <a href="/blog/surah-yaseen-arabic-english">Surah Yaseen</a>.
          </div>

          <h2 id="etiquette">Etiquette with dua for the sick</h2>
          <ol>
            <li>Take permissible medical means</li>
            <li>Make wudu when you can; face qibla if easy</li>
            <li>Ask Allah with certainty and softness</li>
            <li>Do not force long sessions on an exhausted patient</li>
            <li>Protect privacy — illness is not content for social media without consent</li>
          </ol>

          <h2 id="kids">Teach kids a short shifa dua</h2>
          <p>Children can learn “Allahumma Rabban-naas…” in pieces. Correct Arabic sounds matter — parents who want help can book a gentle class: <a href="/free-quran-classes-online">free trial</a> · <a href="/blog/duas-for-kids-to-memorize">duas for kids</a>.</p>

          <h2 id="faq">FAQ</h2>
          <details class="faq-acc"><summary>What is the best dua for a sick person in Islam?<span>+</span></summary>
            <p>Allahumma Rabban-naas, adhhibil-ba’s, washfi antash-Shaafi… is the primary prophetic healing dua reported from Aisha (RA) in Bukhari and Muslim.</p>
          </details>
          <details class="faq-acc"><summary>Can I recite dua for shifa in English?<span>+</span></summary>
            <p>Yes — ask Allah in any language you understand. Learning the Arabic prophetic wording is rewarded when taught correctly.</p>
          </details>
          <details class="faq-acc"><summary>Does dua replace medicine?<span>+</span></summary>
            <p>No. The Sunnah encourages treatment. Dua and medicine belong together; healing is from Allah.</p>
          </details>
          <details class="faq-acc"><summary>What Quran should I read for a sick family member?<span>+</span></summary>
            <p>Al-Fatihah, Ayatul Kursi, and the Mu‘awwidhat are commonly used in prophetic ruqyah practice. Recite what you know correctly, with a present heart.</p>
          </details>
          <p>The best dua for the sick is authentic, gentle, and paired with care — asking Allah for a healing that leaves no illness, while walking the means He made available.</p>`,
  },

  "barakallah-meaning": {
    style: S,
    content: `<p><strong>Barakallah meaning</strong> is one of the most searched Islamic Arabic phrases online — people hear it in messages, weddings, and comment sections and want the exact blessing it carries. Like <a href="/blog/mashallah-meaning">Mashallah</a> and <a href="/blog/jazakallah-khair-meaning">Jazakallah khair</a>, it is short, powerful, and easy to misuse if the meaning is unclear.</p>

          <div class="highlight-box">
            <strong>Quick answer:</strong> <strong>Barakallah</strong> (بارك الله) means <strong>“May Allah bless”</strong> / “May Allah place barakah.” Common longer forms include <strong>Barakallahu feek</strong> (may Allah bless you) and <strong>Barakallahu laka</strong> / <strong>feeki</strong> depending on gender and context. Reply with warmth — often Ameen, or Jazakallah khair.
          </div>

          <h2 id="arabic">Barakallah — Arabic, transliteration, English</h2>
          <div class="verse-card">
            <span class="vnum">PHRASE · BLESSING</span>
            <div class="arabic">بَارَكَ اللَّهُ</div>
            <p class="translit">Baarakallaah.</p>
            <p class="trans-en"><strong>English:</strong> May Allah bless. / May Allah grant barakah.</p>
          </div>

          <h2 id="forms">Common forms you will hear</h2>
          <table class="np-table">
            <tr><th>Phrase</th><th>Approx. meaning</th><th>Typical use</th></tr>
            <tr><td>Barakallahu feek / feeki</td><td>May Allah bless you</td><td>Thanks, well-wishing to a person</td></tr>
            <tr><td>Barakallahu laka / laki</td><td>May Allah bless you (for you)</td><td>Congratulating on a gift, marriage, or news</td></tr>
            <tr><td>Allahumma barik</td><td>O Allah, bless</td><td>When seeing something admirable (often with Mashallah)</td></tr>
            <tr><td>Barakallah</td><td>May Allah bless</td><td>Short form in texts and speech</td></tr>
          </table>

          <h2 id="vs">Barakallah vs Mashallah vs Jazakallah</h2>
          <ul>
            <li><strong>Mashallah</strong> — acknowledges Allah’s will when praising; helps guard against envy language</li>
            <li><strong>Barakallah / Allahumma barik</strong> — asks Allah to place blessing in what you see or in the person</li>
            <li><strong>Jazakallah khair</strong> — “May Allah reward you with good” — classic thanks</li>
          </ul>
          <p>Phrase hub: <a href="/blog/islamic-phrases-meaning">Islamic phrases meaning</a>.</p>

          <h2 id="when">When to say Barakallah</h2>
          <ul>
            <li>After someone helps you</li>
            <li>When congratulating a marriage, newborn, new home, or exam result</li>
            <li>When you see a blessing in someone’s life and want good for them</li>
            <li>In messages as a warm close — still better with sincerity than as empty slang</li>
          </ul>
          <div class="gold-box">
            <strong>Etiquette:</strong> Saying Barakallah does not replace practical thanks or fairness in money matters. Barakah is asked from Allah; it is not a magic caption that fixes injustice.
          </div>

          <h2 id="reply">How to reply</h2>
          <ul>
            <li><strong>Ameen</strong> — accepting the dua</li>
            <li><strong>Wa feek / wa feeki Barakallah</strong> — returning the blessing (common conversational reply)</li>
            <li><strong>Jazakallah khair</strong> — if they helped you</li>
          </ul>

          <h2 id="kids">Teach kids the meaning, not only the sound</h2>
          <p>Children should know they are making a dua, not copying a social-media sticker. Practise Arabic sounds kindly — <a href="/blog/arabic-alphabet-for-kids">Arabic alphabet for kids</a> · <a href="/free-quran-classes-online">free Quran trial</a>.</p>

          <h2 id="faq">FAQ</h2>
          <details class="faq-acc"><summary>What does Barakallah mean in English?<span>+</span></summary>
            <p>It means “May Allah bless” or “May Allah place barakah.” Longer forms specify blessing upon a person or in a matter.</p>
          </details>
          <details class="faq-acc"><summary>What is the difference between Barakallah and Mashallah?<span>+</span></summary>
            <p>Mashallah acknowledges Allah’s will when admiring something; Barakallah asks Allah to bless. They are often used together in good manners.</p>
          </details>
          <details class="faq-acc"><summary>How do you reply to Barakallahu feek?<span>+</span></summary>
            <p>Common replies include Ameen, Wa feek Barakallah, or Jazakallah khair — depending on context.</p>
          </details>
          <details class="faq-acc"><summary>Is Barakallah in the Quran?<span>+</span></summary>
            <p>The root of barakah and related blessing language appears throughout Quran and Sunnah. The everyday phrase forms are widely used Islamic speech taught from prophetic manners and Arabic usage.</p>
          </details>
          <p>If your family wants structured live tutoring after learning everyday phrases, you can request <a href="/locations/online-quran-classes-uk">live online Quran classes for families in the UK</a> or explore <a href="/locations/online-quran-classes-usa">online Quran classes for households in the USA</a> — timezone matching is confirmed after your trial request.</p>
          <p>Barakallah is a small sentence with a large heart: asking Allah to put growth, good, and permanence in what we love for others — and for ourselves.</p>`,
  },
};


