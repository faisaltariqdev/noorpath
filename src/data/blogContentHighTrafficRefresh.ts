// Expanded Tier-S refresh articles — overrides blogContentHighTraffic via blogContent spread

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
  .article-figure { margin: 28px 0; border-radius: 16px; overflow: hidden; border: 1px solid var(--border); background: #fff; }
  .article-figure img { width: 100%; height: auto; display: block; }
  .article-figure figcaption { padding: 12px 16px; font-size: .85rem; color: var(--muted); line-height: 1.5; }
  .stat-row { display: grid; grid-template-columns: repeat(4, 1fr); gap: 10px; margin: 24px 0; }
  .stat-pill { text-align: center; background: rgba(10,110,79,.05); border-radius: 12px; padding: 14px 8px; }
  .stat-pill strong { display: block; color: var(--emerald); font-size: 1.15rem; }
  .stat-pill span { font-size: .72rem; color: var(--muted); }
  .toc { background: var(--ivory); border: 1px solid var(--border); border-radius: 12px; padding: 18px 22px; margin: 24px 0; }
  .toc strong { display: block; margin-bottom: 10px; color: var(--charcoal); }
  .toc ol { margin: 0 0 0 18px; }
  .toc li { margin-bottom: 6px; }
  .faq-acc { border: 1px solid var(--border); border-radius: 10px; margin-bottom: 12px; overflow: hidden; }
  .faq-acc summary { padding: 16px 20px; font-weight: 700; cursor: pointer; background: var(--ivory); color: var(--charcoal); list-style: none; display: flex; justify-content: space-between; align-items: center; font-size: .95rem; }
  .faq-acc summary::-webkit-details-marker { display: none; }
  .faq-acc summary span { color: var(--emerald); margin-left: 12px; }
  .faq-acc p { padding: 16px 20px; margin: 0; color: #374151; font-size: .92rem; line-height: 1.75; border-top: 1px solid var(--border); }
  @media (max-width: 576px) { .np-table { font-size: .82rem; } .np-table th, .np-table td { padding: 8px 9px; } .arabic { font-size: 1.55rem; line-height: 2.3; } .stat-row { grid-template-columns: 1fr 1fr; } }`;

export const highTrafficRefreshBlogContent: Record<string, { style: string; content: string }> = {
  "dua-for-success-exams": {
    style: S,
    content: `<p>A <strong>dua for success</strong> is one of the most searched Islamic duas worldwide — especially before exams, job interviews, and life goals. Islam does not separate effort from tawakkul: you study hard, then ask Allah to open what you cannot open alone. This expanded guide gathers the most authentic Quranic and prophetic duas for students, with practical routines, common mistakes, and how parents can teach children without turning exams into anxiety.</p>

          <div class="highlight-box">
            <strong>Quick answer:</strong> The best short dua for success and ease is <strong>Allahumma la sahla illa ma ja'altahu sahla</strong>. For knowledge, recite <strong>Rabbi zidni 'ilma</strong> (Quran 20:114). Combine both before exams with <a href="/blog/bismillah-meaning-in-english">Bismillah</a> and sincere effort. Want your child to memorise these correctly? <a href="/online-quran-classes-for-kids">Book a free trial</a>.
          </div>

          <div class="toc">
            <strong>In this guide</strong>
            <ol>
              <li><a href="#best-duas">Best duas for success &amp; exams</a></li>
              <li><a href="#when">When to recite each dua</a></li>
              <li><a href="#exam-routine">Pre-exam Sunnah routine</a></li>
              <li><a href="#weekly">Weekly study + dua plan</a></li>
              <li><a href="#mistakes">Common mistakes</a></li>
              <li><a href="#parents">For parents &amp; teachers</a></li>
              <li><a href="#faq">FAQ</a></li>
            </ol>
          </div>

          <h2 id="best-duas">Best duas for success &amp; exams</h2>

          <h3>1. Dua for ease in every matter</h3>
          <div class="verse-card">
            <span class="vnum">PROPHETIC DUA · Ibn Hibban</span>
            <div class="arabic">اَللّٰهُمَّ لَا سَهْلَ إِلَّا مَا جَعَلْتَهُ سَهْلًا وَأَنْتَ تَجْعَلُ الْحَزْنَ إِذَا شِئْتَ سَهْلًا</div>
            <p class="translit">Allaahumma laa sahla illaa maa ja'altahu sahla, wa anta taj'alul-hazna idhaa shi'ta sahla.</p>
            <p class="trans-en"><strong>English:</strong> O Allah, there is no ease except what You make easy, and You make the difficult easy if You wish.</p>
          </div>
          <p>This dua reframes pressure: ease is not in your timetable alone — it is in Allah's decree. Recite it when a subject feels impossible, when anxiety tightens the chest, or when you need calm before walking into the exam hall.</p>

          <h3>2. Dua for increase in knowledge</h3>
          <div class="verse-card">
            <span class="vnum">QURAN 20:114</span>
            <div class="arabic">رَبِّ زِدْنِي عِلْمًا</div>
            <p class="translit">Rabbi zidni 'ilma.</p>
            <p class="trans-en"><strong>English:</strong> My Lord, increase me in knowledge.</p>
          </div>
          <p>This is the only place in the Quran where Allah commands the Prophet ﷺ to ask for increase — and it is increase in <em>knowledge</em>. Ideal for students, parents teaching children, and lifelong learners. Pair it with honest revision rather than treating it as a substitute for opening the book.</p>

          <h3>3. Dua of Musa for clarity of speech</h3>
          <div class="verse-card">
            <span class="vnum">QURAN 20:25–28</span>
            <div class="arabic">رَبِّ اشْرَحْ لِي صَدْرِي ۝ وَيَسِّرْ لِي أَمْرِي ۝ وَاحْلُلْ عُقْدَةً مِّن لِّسَانِي ۝ يَفْقَهُوا قَوْلِي</div>
            <p class="translit">Rabbish-rah lee sadree. Wa yassir lee amree. Wahlul 'uqdatam-min lisaanee. Yafqahoo qawlee.</p>
            <p class="trans-en"><strong>English:</strong> My Lord, expand for me my chest, ease my task, untie the knot from my tongue so they may understand my speech.</p>
          </div>
          <p>Perfect before oral exams, presentations, interviews, or any moment when anxiety tightens the chest. Musa (عليه السلام) asked for an open heart and clear speech — two gifts every student needs under pressure.</p>

          <h2 id="when">When to recite each dua</h2>
          <table class="np-table">
            <tr><th>Moment</th><th>Recommended dua</th><th>Why</th></tr>
            <tr><td>Starting homework or revision</td><td>Bismillah + Rabbi zidni 'ilma (3×)</td><td>Frames learning as worship and asks for beneficial knowledge</td></tr>
            <tr><td>Night before a big exam</td><td>Allahumma la sahla + personal dua in your language</td><td>Combines prophetic ease with your specific need</td></tr>
            <tr><td>Walking into the exam hall</td><td>Allahumma la sahla (quietly)</td><td>Short, memorable, calms nerves without distraction</td></tr>
            <tr><td>Oral exam or viva</td><td>Dua of Musa (20:25–28)</td><td>Asks for clarity of speech and an open chest</td></tr>
            <tr><td>After results arrive</td><td><a href="/blog/alhamdulillah-meaning-in-english">Alhamdulillah</a> + gratitude charity if able</td><td>Success without shukr is incomplete</td></tr>
          </table>

          <h2 id="exam-routine">Pre-exam Sunnah routine (5 minutes)</h2>
          <ol>
            <li>Make wudu if possible — it calms the nerves and connects you to salah discipline.</li>
            <li>Say <strong>Bismillah</strong>, then <strong>Allahumma la sahla</strong>.</li>
            <li>Recite <strong>Rabbi zidni 'ilma</strong> three times.</li>
            <li>Read what you studied — dua without effort is incomplete.</li>
            <li>After the exam, say Alhamdulillah and leave the result to Allah.</li>
          </ol>
          <p>If time is tight, the minimum is Bismillah plus one sincere line in your own words. Presence beats rushing through a long list you do not understand.</p>

          <h2 id="weekly">Weekly study + dua plan (realistic)</h2>
          <p>Students who only make dua the night before often burn out. A balanced week pairs effort with remembrance:</p>
          <ul>
            <li><strong>Monday–Thursday:</strong> 25–40 minute focused blocks; start each with Rabbi zidni 'ilma once.</li>
            <li><strong>Friday:</strong> lighter review; read <a href="/blog/morning-evening-adhkar-dhikr">morning adhkar</a> for general barakah.</li>
            <li><strong>Weekend:</strong> mock questions + Allahumma la sahla before each practice paper.</li>
            <li><strong>Sleep:</strong> protect rest — exhaustion breaks concentration more than missing one extra hour of cramming.</li>
          </ul>
          <div class="gold-box">
            <strong>Halal means matter:</strong> Cheating, plagiarism, or dishonesty invalidate the spiritual barakah you are asking for. Success through haram is not true success.
          </div>

          <h2 id="mistakes">Common mistakes</h2>
          <ul>
            <li>Waiting until the night before and only making dua — Islam pairs dua with action.</li>
            <li>Treating dua as a magic formula without sincerity (khushu').</li>
            <li>Forgetting gratitude after success — say Alhamdulillah and give charity if you can.</li>
            <li>Comparing your results to others and losing trust in Allah's plan.</li>
            <li>Skipping salah during exam season — salah is the anchor, not a distraction from study.</li>
          </ul>

          <h2 id="parents">For parents &amp; teachers</h2>
          <p>Children absorb how adults handle pressure. If parents panic, children learn panic. If parents make dua calmly and then help with a revision plan, children learn tawakkul with responsibility.</p>
          <div class="gold-box">
            <strong>For parents:</strong> Teach these duas early. Children who connect exams to Allah develop healthier pressure habits. Pair short daily Quran with study time — see our <a href="/blog/duas-for-kids-to-memorize">duas for kids</a> and <a href="/blog/arabic-alphabet-for-kids">Arabic alphabet for kids</a>.
          </div>
          <p>Correct Arabic pronunciation prevents mistakes that stick for years. A live tutor hears and fixes each syllable — especially for short duas that look simple but have subtle vowels. Explore <a href="/learn-quran-online">learn Quran online</a> or <a href="/free-quran-classes-online">free Quran classes</a> for structured support.</p>

          <h2 id="faq">FAQ</h2>
          <details class="faq-acc"><summary>Does dua replace studying for exams?<span>+</span></summary>
            <p>No. The Prophet ﷺ tied effort to trust in Allah. Dua opens doors you cannot open alone, but Allah expects you to use the means — revision, sleep, honest work. Combine both.</p>
          </details>
          <details class="faq-acc"><summary>What should I say after an exam?<span>+</span></summary>
            <p>Say Alhamdulillah whether you feel confident or unsure. You may add a short personal dua for a good outcome, then leave the result to Allah. Avoid obsessing over questions you cannot change.</p>
          </details>
          <details class="faq-acc"><summary>Can I recite these duas in English?<span>+</span></summary>
            <p>Learn the Arabic for the fixed Quranic and prophetic wordings when possible. You may also speak to Allah in your language for personal needs. Understanding the meaning increases khushu'.</p>
          </details>
          <details class="faq-acc"><summary>Is there a specific count for exam duas?<span>+</span></summary>
            <p>No fixed count is required for Allahumma la sahla or Rabbi zidni 'ilma beyond what you choose with sincerity. Three times is a common habit for short duas, not a magic number.</p>
          </details>
          <details class="faq-acc"><summary>What if I fail despite making dua?<span>+</span></summary>
            <p>Allah answers with yes, wait, or something better you cannot see yet. Failure may redirect you, build resilience, or protect you from a path that was not good for you. Keep making istighfar and try again with better preparation.</p>
          </details>
          <details class="faq-acc"><summary>Should students pray Tahajjud during exams?<span>+</span></summary>
            <p>Tahajjud is virtuous if you can wake without destroying sleep you need for focus. A consistent Fajr and five daily prayers with sincere dua is better than one exhausted night of extra worship followed by a foggy exam.</p>
          </details>

          <div class="highlight-box">
            <strong>Want your child to recite duas with correct Arabic?</strong> NoorPath Academy teaches kids ages 4–12 live 1-on-1 — Qaida, Quran and essential duas. <a href="/online-quran-classes-for-kids">Book a free 30-minute trial</a> — no credit card.
          </div>`,
  },

  "dua-for-marriage": {
    style: S,
    content: `<p>A <strong>dua for marriage</strong> is among the most emotional searches Muslims make — asking Allah for a righteous spouse, a blessed nikah, and a peaceful home. The Quran and Sunnah give clear duas; what matters most is sincerity, lawful means, and trust in Allah's timing. This guide expands the core duas with Istikhara guidance, practical steps, etiquettes, and honest warnings about unverified wazifas.</p>

          <div class="highlight-box">
            <strong>Quick answer:</strong> A powerful Quranic dua for a righteous spouse is from Surah Al-Furqan (25:74): <strong>Rabbana hablana min azwajina…</strong> When a proposal arrives, pray <a href="/blog/dua-e-istikhara">Salat al-Istikhara</a>. Combine dua with practical effort (family, matchmaking, character checks). Want your children raised with Quranic values for marriage later? Start early — <a href="/online-quran-classes-for-kids">free trial</a>.
          </div>

          <div class="toc">
            <strong>In this guide</strong>
            <ol>
              <li><a href="#quranic">Quranic dua for a righteous spouse</a></li>
              <li><a href="#zakariyya">Dua of Zakariyya</a></li>
              <li><a href="#istikhara">Istikhara for marriage</a></li>
              <li><a href="#practical">Practical steps alongside dua</a></li>
              <li><a href="#etiquette">Etiquettes that increase acceptance</a></li>
              <li><a href="#mistakes">Mistakes to avoid</a></li>
              <li><a href="#faq">FAQ</a></li>
            </ol>
          </div>

          <h2 id="quranic">Quranic dua for a righteous spouse</h2>
          <div class="verse-card">
            <span class="vnum">SURAH AL-FURQAN · 25:74</span>
            <div class="arabic">رَبَّنَا هَبْ لَنَا مِنْ أَزْوَاجِنَا وَذُرِّيَّاتِنَا قُرَّةَ أَعْيُنٍ وَاجْعَلْنَا لِلْمُتَّقِينَ إِمَامًا</div>
            <p class="translit">Rabbana hablana min azwajina wa dhurriyyatina qurrata a'yunin waj'alna lil-muttaqeena imaama.</p>
            <p class="trans-en"><strong>English:</strong> Our Lord, grant us from our spouses and offspring comfort to our eyes, and make us leaders for the righteous.</p>
          </div>
          <p>This dua asks for more than attraction. <em>Qurrata a'yun</em> — comfort to the eyes — includes a spouse who brings peace to your deen, your character, and your home. It also asks that you and your family become examples for the muttaqin. Recite it in sujood, after salah, and during quiet moments when the wait feels heavy.</p>

          <h2 id="zakariyya">Dua of Zakariyya for righteous offspring</h2>
          <div class="verse-card">
            <span class="vnum">SURAH AAL-IMRAN · 3:38</span>
            <div class="arabic">رَبِّ هَبْ لِي مِن لَّدُنكَ ذُرِّيَّةً طَيِّبَةً ۖ إِنَّكَ سَمِيعُ الدُّعَاءِ</div>
            <p class="translit">Rabbi hab lee mil-ladunka dhurriyyatan tayyibah. Innaka samee'ud-du'aa.</p>
            <p class="trans-en"><strong>English:</strong> My Lord, grant me from Yourself good offspring. Indeed, You are the Hearer of dua.</p>
          </div>
          <p>Often recited by those seeking marriage and later children — it reminds us that a good spouse and family is a gift from Allah, not a checklist alone. Many couples recite both 25:74 and 3:38 as part of a daily marriage dua routine.</p>

          <h2 id="istikhara">Istikhara for marriage (nikah)</h2>
          <p>When a specific proposal is in front of you, do not only ask friends — ask Allah. Pray 2 rakats and recite the full <a href="/blog/dua-e-istikhara">Dua e Istikhara</a>, naming the marriage when you reach "haadhal-amra". The answer is ease or difficulty in the matter — not necessarily a dream.</p>
          <p>For a step-by-step marriage workflow, see <a href="/blog/istikhara-for-marriage-step-by-step">Istikhara for marriage step by step</a>. Combine Istikhara with istishara — consulting trustworthy family or mentors who know both parties.</p>
          <table class="np-table">
            <tr><th>Stage</th><th>What to do</th></tr>
            <tr><td>General wait for a spouse</td><td>Daily Quranic duas + self-improvement + lawful networking</td></tr>
            <tr><td>Specific proposal arrives</td><td>Istikhara + character checks + family meeting (khutbah/mahram rules)</td></tr>
            <tr><td>After Istikhara feels difficult</td><td>Pause with respect; do not force a nikah against clear red flags</td></tr>
            <tr><td>After nikah is agreed</td><td>Continue duas for a blessed home; prepare with premarital learning</td></tr>
          </table>

          <h2 id="practical">Practical steps alongside dua</h2>
          <p>Marriage dua without lawful effort is incomplete. Islam expects you to take means (asbab) while trusting Allah:</p>
          <ul>
            <li>Work on your own deen, character, and emotional maturity — righteousness attracts righteousness.</li>
            <li>Use halal channels: family introductions, trusted community networks, reputable matchmaking where available.</li>
            <li>Be clear about non-negotiables (deen, kindness, honesty) without reducing a person to a fantasy checklist.</li>
            <li>Involve parents or guardians where the Shariah expects it — a blessed process respects family structure.</li>
            <li>Reject secret relationships that bypass accountability; they often end in heartbreak, not barakah.</li>
          </ul>

          <h2 id="etiquette">Etiquettes that increase acceptance</h2>
          <ul>
            <li>Begin and end with praise of Allah and <a href="/blog/darood-sharif">Darood Sharif</a>.</li>
            <li>Make dua in sujood and in the last third of the night (<a href="/blog/tahajjud-prayer">Tahajjud</a>).</li>
            <li>Keep earning and character halal — dua and disobedience conflict.</li>
            <li>Be patient. Delay is not denial; sometimes protection.</li>
            <li>Involve parents / guardians for a blessed process.</li>
          </ul>

          <h2 id="mistakes">Mistakes to avoid</h2>
          <div class="gold-box">
            <strong>Avoid:</strong> Unverified "wazifas" promising marriage in X days, paid amulets, or despair that "dua never works". Allah answers with yes, wait, or something better (hadith meaning in Tirmidhi and others). See our honest guide: <a href="/blog/what-is-wazifa-in-islam">what is wazifa in Islam</a>.
          </div>
          <ul>
            <li>Making dua for marriage while persisting in major sins without repentance.</li>
            <li>Demanding a spouse who meets every worldly standard but neglects deen.</li>
            <li>Interpreting Istikhara as a yes/no lottery instead of watching how the matter unfolds.</li>
            <li>Comparing timelines with friends and losing sabr.</li>
          </ul>

          <h2 id="faq">FAQ</h2>
          <details class="faq-acc"><summary>Can I make dua for a specific person to marry me?<span>+</span></summary>
            <p>You may ask Allah for what is good — including a specific person if the connection is halal and proper channels are followed. Also ask Allah to grant what is best if that person is not good for your deen or dunya. Avoid obsession or pressure that bypasses family and Shariah etiquette.</p>
          </details>
          <details class="faq-acc"><summary>What practical steps should I take while making dua for marriage?<span>+</span></summary>
            <p>Improve your own character, use halal introductions, involve family where required, be clear about deen-based priorities, and do Istikhara when a real proposal exists. Dua and effort go together.</p>
          </details>
          <details class="faq-acc"><summary>How long should I wait after making Istikhara?<span>+</span></summary>
            <p>There is no fixed hour count. Watch whether the matter becomes easier or harder, consult trusted people, and do not rush a decision from anxiety alone. Some scholars advise repeating Istikhara if uncertainty remains — follow your teacher's guidance.</p>
          </details>
          <details class="faq-acc"><summary>Is it wrong to feel sad while waiting?<span>+</span></summary>
            <p>Human longing is natural. Turn sadness into dua rather than despair. The Prophet ﷺ taught us to ask Allah while trusting His wisdom. Seek support from family or a counsellor if sadness becomes overwhelming — that is not weak iman.</p>
          </details>
          <details class="faq-acc"><summary>Should unmarried people fast or give charity for marriage?<span>+</span></summary>
            <p>Fasting and charity are general acts of worship with broad reward. They are not guaranteed marriage formulas. Continue regular worship, avoid invented wazifa counts, and keep lawful means active.</p>
          </details>
          <details class="faq-acc"><summary>Can parents make dua for their child's marriage?<span>+</span></summary>
            <p>Yes. Parents often recite 25:74 and 3:38 for righteous spouses and offspring. Raising children with Quran and adab now prepares them for marriage later — <a href="/online-quran-classes-for-adults">adult classes</a> help parents model what they teach.</p>
          </details>

          <div class="highlight-box">
            <strong>Building a Quran-centred family starts before nikah.</strong> NoorPath helps parents raise kids with Qaida, Tajweed and Islamic manners — live 1-on-1. <a href="/online-quran-classes-for-kids">Book a free trial</a>.
          </div>`,
  },

  "rabbana-atina-fid-dunya": {
    style: S,
    content: `<p><strong>Rabbana atina fid-dunya</strong> is the opening of Quran 2:201 — one of the most complete duas a Muslim can make. It asks for good in this world, good in the Hereafter, and protection from Hellfire in a single breath. This expanded guide covers the full Arabic text, word-by-word meaning, Quranic context, daily routines, and how families can memorise it with correct Tajweed.</p>

          <div class="highlight-box">
            <strong>Quick answer:</strong> Full dua: <em>Rabbana atina fid-dunya hasanatan wa fil-akhirati hasanatan wa qina adhaban-nar</em> — "Our Lord, give us good in this world and good in the Hereafter, and protect us from the punishment of the Fire." (Surah Al-Baqarah 2:201). The Prophet ﷺ used to recite it often (Sahih Muslim). Teach it to your children early — <a href="/online-quran-classes-for-kids">free trial</a>.
          </div>

          <div class="toc">
            <strong>In this guide</strong>
            <ol>
              <li><a href="#full">Full Arabic, transliteration &amp; English</a></li>
              <li><a href="#word">Word-by-word meaning</a></li>
              <li><a href="#context">Quranic context</a></li>
              <li><a href="#when">When to recite</a></li>
              <li><a href="#routine">Daily routine ideas</a></li>
              <li><a href="#mistakes">Common mistakes</a></li>
              <li><a href="#faq">FAQ</a></li>
            </ol>
          </div>

          <h2 id="full">Full Arabic, transliteration &amp; English</h2>
          <div class="verse-card">
            <span class="vnum">SURAH AL-BAQARAH · 2:201</span>
            <div class="arabic">رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الْآخِرَةِ حَسَنَةً وَقِنَا عَذَابَ النَّارِ</div>
            <p class="translit">Rabbana atina fid-dunya hasanatan wa fil-akhirati hasanatan wa qina 'adhaban-nar.</p>
            <p class="trans-en"><strong>English:</strong> Our Lord, give us in this world [that which is] good and in the Hereafter [that which is] good, and protect us from the punishment of the Fire.</p>
          </div>
          <p>Notice the balance: dunya and akhirah together, then safety from the Fire. It is not a dua of greed — it is a dua of wholeness taught directly in the Quran.</p>

          <h2 id="word">Word-by-word meaning</h2>
          <table class="np-table">
            <tr><th>Arabic</th><th>Meaning</th></tr>
            <tr><td>Rabbana</td><td>Our Lord</td></tr>
            <tr><td>atina</td><td>give us / grant us</td></tr>
            <tr><td>fid-dunya</td><td>in this world</td></tr>
            <tr><td>hasanatan</td><td>good / excellence / beauty</td></tr>
            <tr><td>wa fil-akhirati</td><td>and in the Hereafter</td></tr>
            <tr><td>hasanatan</td><td>good</td></tr>
            <tr><td>wa qina</td><td>and protect us / save us</td></tr>
            <tr><td>adhaban-nar</td><td>the punishment of the Fire</td></tr>
          </table>
          <p>Scholars explain "hasanah in the dunya" as covering health, lawful rizq, a righteous spouse, beneficial knowledge, and peace — whatever is truly good for you, not just what you desire. "Hasanah in the akhirah" includes forgiveness, a good ending, and Paradise. "Qina adhaban-nar" keeps the heart humble — success in dunya must not make us forget the Fire.</p>

          <h2 id="context">Quranic context (important)</h2>
          <p>Verse 2:200 criticises those who only ask for the dunya. Verse 2:201 praises those who ask for both worlds and safety from the Fire. This dua rebalances a heart that has become too worldly — or too neglectful of lawful worldly needs.</p>
          <p>After Hajj rites, some people would call out only for worldly gain. Allah corrected that imbalance by teaching this comprehensive wording. Whenever you feel pulled toward materialism or, conversely, toward neglecting your family's lawful needs, 2:201 recentres the ask.</p>

          <h2 id="when">When to recite Rabbana atina</h2>
          <ul>
            <li>In sujood and after tashahhud before salam.</li>
            <li>After every obligatory prayer.</li>
            <li>During <a href="/blog/tahajjud-prayer">Tahajjud</a> and times when duas are answered.</li>
            <li>Anytime you feel torn between worldly needs and akhirah goals.</li>
            <li>When making dua for rizq, health, marriage, or exams — as a comprehensive opener.</li>
          </ul>
          <table class="np-table">
            <tr><th>Life moment</th><th>Why this dua fits</th></tr>
            <tr><td>New job or move</td><td>Asks for dunya ease without forgetting akhirah</td></tr>
            <tr><td>Marriage or new child</td><td>Covers family blessing and righteous offspring themes</td></tr>
            <tr><td>Health scare</td><td>Combines healing hope with protection from the Fire</td></tr>
            <tr><td>Exam season</td><td>Pairs with <a href="/blog/dua-for-success-exams">dua for success in exams</a> for balanced ambition</td></tr>
          </table>

          <h2 id="routine">Daily routine ideas</h2>
          <ol>
            <li><strong>After one fixed salah:</strong> recite 2:201 once with presence before salam.</li>
            <li><strong>Evening:</strong> add it to <a href="/blog/morning-evening-adhkar-dhikr">morning/evening adhkar</a> if not already there.</li>
            <li><strong>Family:</strong> parents recite aloud; children repeat the transliteration until Arabic sticks.</li>
            <li><strong>Memorisation:</strong> one line per day — Rabbana atina… then the rest of the ayah.</li>
          </ol>
          <p>Looking for structured Quran classes in the USA? See our <a href="/locations/online-quran-classes-usa">USA online Quran classes</a> page for timezone-aware tutor matching and a free trial request.</p>

          <h2 id="mistakes">Common mistakes</h2>
          <ul>
            <li>Reciting only the first half from memory and forgetting "wa fil-akhirati hasanatan wa qina adhaban-nar".</li>
            <li>Using the dua while pursuing clearly haram income or relationships.</li>
            <li>Treating "hasanah" as every luxury wish rather than what Allah knows is good.</li>
            <li>Rushing through Arabic without learning meaning — the heart stays distant.</li>
            <li>Separating this dua from salah — it lands deepest in sujood when the heart is humble.</li>
          </ul>
          <p>Pair memorisation with understanding through <a href="/learn-quran-online">structured Quran learning</a> so children and adults pronounce each word with Tajweed, not guesswork from transliteration alone.</p>

          <h2 id="faq">FAQ</h2>
          <details class="faq-acc"><summary>Can I recite Rabbana atina for someone else?<span>+</span></summary>
            <p>Yes. You may include parents, spouse, children, or the ummah when saying "Rabbana" (Our Lord). Many make this dua collectively in sujood for family wellbeing in both worlds.</p>
          </details>
          <details class="faq-acc"><summary>How is Rabbana atina different from only asking for dunya?<span>+</span></summary>
            <p>Verse 2:200 warns against dunya-only asking. Verse 2:201 adds akhirah good and protection from the Fire. The balanced wording keeps worldly hope tied to eternal success.</p>
          </details>
          <details class="faq-acc"><summary>Did the Prophet ﷺ recite this dua?<span>+</span></summary>
            <p>Yes — reports in Sahih Muslim indicate he recited this wording frequently. That alone makes it a Sunnah-backed daily essential for believers.</p>
          </details>
          <details class="faq-acc"><summary>Is this the same as Surah Al-Baqarah 2:200?<span>+</span></summary>
            <p>No. 2:200 discusses people who mention Allah briefly then ask only for worldly gain. 2:201 is the praised dua that balances both worlds plus safety from Hellfire.</p>
          </details>
          <details class="faq-acc"><summary>Can children memorise Rabbana atina?<span>+</span></summary>
            <p>Yes. It is short and foundational. Teach meaning in simple English, then correct Tajweed with a tutor so vowels and endings are not learned incorrectly.</p>
          </details>
          <details class="faq-acc"><summary>How many times should I recite it daily?<span>+</span></summary>
            <p>No fixed count is required. Once with khushu' after salah is better than fifty rushed repetitions. Add more in Tahajjud or sujood when your heart is present.</p>
          </details>

          <div class="highlight-box">
            <strong>Memorise it with correct Tajweed.</strong> NoorPath tutors teach Quranic duas and Surah Al-Baqarah passages live 1-on-1. <a href="/online-quran-classes-for-kids">Book a free trial</a> for your child or <a href="/online-quran-classes-for-adults">yourself</a>.
          </div>`,
  },

  "dua-for-forgiveness-istighfar": {
    style: S,
    content: `<p>A <strong>dua for forgiveness</strong> (Istighfar) is the door that never closes. Allah says He forgives all sins for those who turn to Him (Quran 39:53). The Prophet ﷺ — who was already forgiven — sought forgiveness more than seventy times a day (Bukhari 6307). This guide expands the core duas with daily routines, Tawbah conditions, and honest guidance on major sins — without invented promises.</p>

          <div class="highlight-box">
            <strong>Quick answer:</strong> The best dua for forgiveness is <strong>Sayyid al-Istighfar</strong> (the Master of Seeking Forgiveness). Whoever says it with certainty in the morning and dies that day enters Paradise; same for the evening (Bukhari 6306). Full Arabic below. Also see <a href="/blog/astaghfirullah-meaning">Astaghfirullah meaning</a>.
          </div>

          <div class="toc">
            <strong>In this guide</strong>
            <ol>
              <li><a href="#sayyid">Sayyid al-Istighfar</a></li>
              <li><a href="#short">Short daily Istighfar</a></li>
              <li><a href="#yunus">Dua of Yunus</a></li>
              <li><a href="#tawbah">Conditions of sincere Tawbah</a></li>
              <li><a href="#routine">Daily istighfar routine</a></li>
              <li><a href="#mistakes">Common mistakes</a></li>
              <li><a href="#faq">FAQ</a></li>
            </ol>
          </div>

          <h2 id="sayyid">Sayyid al-Istighfar — the master dua</h2>
          <div class="verse-card">
            <span class="vnum">SAYYID AL-ISTIGHFAR · Bukhari 6306</span>
            <div class="arabic">اَللّٰهُمَّ أَنْتَ رَبِّي لَا إِلٰهَ إِلَّا أَنْتَ خَلَقْتَنِي وَأَنَا عَبْدُكَ وَأَنَا عَلَىٰ عَهْدِكَ وَوَعْدِكَ مَا اسْتَطَعْتُ أَعُوذُ بِكَ مِنْ شَرِّ مَا صَنَعْتُ أَبُوءُ لَكَ بِنِعْمَتِكَ عَلَيَّ وَأَبُوءُ لَكَ بِذَنْبِي فَاغْفِرْ لِي فَإِنَّهُ لَا يَغْفِرُ الذُّنُوبَ إِلَّا أَنْتَ</div>
            <p class="translit">Allaahumma anta rabbee laa ilaaha illaa ant, khalaqtanee wa ana 'abduk, wa ana 'alaa 'ahdika wa wa'dika mas-tata't, a'oodhu bika min sharri maa sana't, aboo'u laka bi ni'matika 'alayya wa aboo'u laka bi dhanbee faghfir lee fa innahu laa yaghfirudh-dhunooba illaa ant.</p>
            <p class="trans-en"><strong>English:</strong> O Allah, You are my Lord; there is no god but You. You created me and I am Your servant, and I uphold Your covenant and promise as much as I can. I seek refuge in You from the evil of what I have done. I acknowledge Your favour upon me and I acknowledge my sin, so forgive me — for none forgives sins except You.</p>
          </div>
          <p>This dua combines Tawheed, humility, gratitude, admission of sin, and a direct request for forgiveness. Learn it slowly until the heart feels each phrase — not only the tongue.</p>

          <h2 id="short">Short daily Istighfar</h2>
          <div class="verse-card">
            <span class="vnum">ASTAGHFIRULLAH</span>
            <div class="arabic">أَسْتَغْفِرُ اللّٰهَ وَأَتُوبُ إِلَيْهِ</div>
            <p class="translit">Astaghfirullaaha wa atoobu ilayh.</p>
            <p class="trans-en"><strong>English:</strong> I seek Allah's forgiveness and I repent to Him.</p>
          </div>
          <p>Use this between tasks, after salah, when you remember a mistake, or while walking. The Prophet ﷺ sought forgiveness abundantly — consistency matters more than one dramatic night.</p>

          <h2 id="yunus">Dua of Yunus (Ayat e Karima)</h2>
          <p>When feeling trapped by sin or hardship, recite the dua of Prophet Yunus — detailed in our guide to <a href="/blog/ayat-e-karima">Ayat e Karima</a>: <em>La ilaha illa anta subhanaka inni kuntu minaz-zalimin</em> (21:87). Yunus (عليه السلام) called upon Allah in darkness; Allah answered. It teaches that sincere turning can come even from the lowest point.</p>

          <h2 id="tawbah">Conditions of sincere Tawbah</h2>
          <ol>
            <li>Stop the sin immediately.</li>
            <li>Feel genuine regret.</li>
            <li>Resolve not to return.</li>
            <li>If the sin harmed others, restore their rights where possible.</li>
          </ol>
          <p>Saying the words without these conditions is dhikr — beautiful — but complete repentance needs the heart and action too. For ongoing struggle, seek help: counselling, accountability, and removing triggers are part of taking means.</p>

          <h2 id="routine">Daily istighfar routine</h2>
          <table class="np-table">
            <tr><th>Time</th><th>Practice</th></tr>
            <tr><td>Morning</td><td>Sayyid al-Istighfar once with presence (Bukhari 6306 virtue)</td></tr>
            <tr><td>After each salah</td><td>Astaghfirullah 3× (common Sunnah habit) + longer form if memorised</td></tr>
            <tr><td>Evening</td><td>Sayyid al-Istighfar again before sleep</td></tr>
            <tr><td>Last third of night</td><td>Extended istighfar in Tahajjud when able</td></tr>
            <tr><td>After a specific mistake</td><td>Stop, regret, say Astaghfirullah, fix harm if possible</td></tr>
          </table>
          <div class="gold-box">
            <strong>Best times:</strong> After Salah, last third of the night, Mondays and Thursdays, and whenever you remember a mistake. Consistency beats occasional long sessions.
          </div>

          <h2 id="mistakes">Common mistakes</h2>
          <ul>
            <li>Repeating Astaghfirullah hundreds of times while planning to return to the same sin.</li>
            <li>Despairing and thinking your sin is too big — contradicts Quran 39:53.</li>
            <li>Public performative repentance without private change.</li>
            <li>Ignoring rights of people harmed — Allah forgives, but people may still need amends.</li>
            <li>Replacing Tawbah with unverified wazifa lists from <a href="/blog/what-is-wazifa-in-islam">unclear sources</a>.</li>
          </ul>

          <h2 id="faq">FAQ</h2>
          <details class="faq-acc"><summary>What is the difference between Istighfar and Tawbah?<span>+</span></summary>
            <p>Istighfar is seeking forgiveness — by word and heart. Tawbah is repentance: turning back to Allah with stopping the sin, regret, and resolve not to return. Complete return includes both, plus restoring others' rights when applicable.</p>
          </details>
          <details class="faq-acc"><summary>When is the best time to recite Sayyid al-Istighfar?<span>+</span></summary>
            <p>The famous hadith mentions morning and evening with certainty of faith. Many also recite it after salah, before sleep, and in sujood. Any time with presence is good.</p>
          </details>
          <details class="faq-acc"><summary>Does Allah forgive major sins?<span>+</span></summary>
            <p>Yes — with sincere Tawbah. Allah says not to despair of His mercy; He forgives all sins (Quran 39:53). The one who repents from sin is like one without that sin (Ibn Majah). Never lose hope in Allah's forgiveness.</p>
          </details>
          <details class="faq-acc"><summary>How many times should I say Astaghfirullah daily?<span>+</span></summary>
            <p>The Prophet ﷺ sought forgiveness more than seventy times daily (Bukhari 6307). Many aim for 100. Minimum after each Salah is three times. Quality of sincerity matters more than empty counting.</p>
          </details>
          <details class="faq-acc"><summary>Can I make istighfar for someone who passed away?<span>+</span></summary>
            <p>You may make general dua for the deceased's forgiveness as taught in the Sunnah. Your own righteous deeds and duas can benefit them according to authentic reports — follow established prophetic wording rather than invented formulas.</p>
          </details>
          <details class="faq-acc"><summary>Should children learn Sayyid al-Istighfar?<span>+</span></summary>
            <p>Start with short Astaghfirullah, then build up. A soft heart that knows how to return to Allah is a lifelong gift. NoorPath classes include duas with Tajweed — <a href="/online-quran-classes-for-kids">book a free trial</a>.</p>
          </details>

          <div class="highlight-box">
            <strong>Teach Istighfar to children early</strong> — a soft heart that knows how to return to Allah is a lifelong gift. NoorPath classes include duas with Tajweed. <a href="/online-quran-classes-for-kids">Book a free trial</a>.
          </div>`,
  },

  "how-to-do-ghusl-step-by-step": {
    style: S,
    content: `<p><strong>Ghusl</strong> is the full-body ritual wash that removes major impurity (janabah) and is also recommended for Friday prayer, Eid, and before entering ihram. This guide follows the prophetic method in clear steps for men and women, with fard elements, madhhab notes, and common mistakes — so you can pray with confidence afterward.</p>

          <div class="highlight-box">
            <strong>Quick answer:</strong> Intention (niyyah) → wash hands → wash private parts → perform wudu → pour water over the head three times → wash the entire body ensuring water reaches skin and roots of hair. Without intention and complete washing of the body, ghusl is incomplete. Learn related purification: <a href="/blog/how-to-do-wudu-step-by-step">how to do wudu</a>.
          </div>

          <div class="toc">
            <strong>In this guide</strong>
            <ol>
              <li><a href="#when">When is ghusl obligatory?</a></li>
              <li><a href="#steps">Sunnah steps</a></li>
              <li><a href="#fard">What is fard in ghusl?</a></li>
              <li><a href="#women">Notes for women</a></li>
              <li><a href="#shower">Shower vs traditional ghusl</a></li>
              <li><a href="#mistakes">Common mistakes</a></li>
              <li><a href="#faq">FAQ</a></li>
            </ol>
          </div>

          <h2 id="when">When is ghusl obligatory?</h2>
          <ul>
            <li>After sexual intercourse or emission of semen (janabah).</li>
            <li>After menstrual period (hayd) ends — for women.</li>
            <li>After postnatal bleeding (nifas) ends — for women.</li>
            <li>Upon accepting Islam (according to many scholars).</li>
          </ul>
          <p><strong>Recommended (sunnah) ghusl:</strong> before Friday prayer, Eid, Ihram for Hajj/Umrah, and after washing the deceased (for those who washed).</p>
          <table class="np-table">
            <tr><th>Situation</th><th>Ruling (general)</th><th>Next step</th></tr>
            <tr><td>Janabah</td><td>Ghusl required before salah</td><td>Complete ghusl then pray</td></tr>
            <tr><td>Hayd ends</td><td>Ghusl required for women</td><td>Confirm purity ended, then ghusl</td></tr>
            <tr><td>Friday (recommended)</td><td>Sunnah ghusl</td><td>Perform before Jumu'ah if able</td></tr>
            <tr><td>Minor impurity only</td><td>Wudu enough</td><td>See <a href="/blog/how-to-do-wudu-step-by-step">wudu guide</a></td></tr>
          </table>

          <h2 id="steps">How to do ghusl — Sunnah steps</h2>
          <ol>
            <li><strong>Intention</strong> in the heart to purify yourself for Allah (no need to say aloud).</li>
            <li><strong>Say Bismillah</strong> and wash both hands.</li>
            <li><strong>Wash the private parts</strong> and remove any impurity.</li>
            <li><strong>Perform a full wudu</strong> like for Salah (some delay washing the feet until the end if standing in a place where water collects).</li>
            <li><strong>Pour water over the head three times</strong>, working it through the hair to the roots.</li>
            <li><strong>Wash the entire right side of the body</strong>, then the left, ensuring water reaches everywhere — underarms, skin folds, between toes.</li>
            <li><strong>Wash the feet</strong> if you delayed them.</li>
          </ol>
          <p>Take your time. Rushing is a common reason water misses skin under jewellery, medical tape, or thick hair. If you use a shower, follow the same order with intention — a shower can count as ghusl when requirements are met.</p>

          <h2 id="fard">What is fard (obligatory) in ghusl?</h2>
          <table class="np-table">
            <tr><th>Element</th><th>Requirement</th></tr>
            <tr><td>Intention</td><td>Required (majority of scholars)</td></tr>
            <tr><td>Water over entire body</td><td>Required — every part of skin</td></tr>
            <tr><td>Hair roots</td><td>Water must reach scalp/roots</td></tr>
            <tr><td>Mouth &amp; nose</td><td>Required in Hanafi school as part of ghusl; recommended in others</td></tr>
          </table>
          <div class="gold-box">
            <strong>Madhhab note:</strong> Mouth and nose rinsing in ghusl is obligatory in the Hanafi school and recommended elsewhere. If you follow a specific madhhab, ask your local teacher for your practice. This page is educational, not a personal fatwa.
          </div>

          <h2 id="women">Notes for women</h2>
          <ul>
            <li>After menses/nifas: ensure purity has ended, then ghusl as above.</li>
            <li>Braided hair: according to many scholars, water reaching the roots is enough without undoing every braid (details vary — ask a trusted local scholar if unsure).</li>
            <li>Same prophetic washing order applies.</li>
            <li>Do not pray until you are certain hayd or nifas has ended — when in doubt, consult reliable fiqh guidance.</li>
          </ul>

          <h2 id="shower">Shower vs traditional ghusl</h2>
          <p>A shower is permissible if you intend ghusl, ensure water reaches the whole body including hair roots, and follow the washing sequence your school teaches. Standing under water for thirty seconds without intention or without reaching hidden skin is not automatically valid ghusl. Remove rings or move jewellery briefly if water cannot reach beneath.</p>

          <h2 id="mistakes">Common mistakes</h2>
          <div class="gold-box">
            <strong>Common mistakes:</strong> skipping intention, missing skin under jewellery/watches, rushing so water does not reach the scalp, assuming a quick shower without focus is automatically ghusl. Ghusl can be a shower — if the steps and intention are fulfilled.
          </div>
          <ul>
            <li>Performing wudu after ghusl unnecessarily out of doubt — valid ghusl that included wudu steps suffices until something breaks wudu.</li>
            <li>Ignoring <a href="/blog/what-breaks-wudu">what breaks wudu</a> after ghusl — minor nullifiers still apply.</li>
            <li>Using impure water or water that cannot reach the body (excessive oil barriers without need).</li>
          </ul>

          <h2 id="faq">FAQ</h2>
          <details class="faq-acc"><summary>Can a shower count as ghusl?<span>+</span></summary>
            <p>Yes, if you make intention, wash the body completely including hair roots, and fulfil your school's requirements (such as mouth/nose in Hanafi fiqh). A distracted quick rinse is not enough.</p>
          </details>
          <details class="faq-acc"><summary>What invalidates ghusl after it is done?<span>+</span></summary>
            <p>Ghusl removes major impurity. Afterward, wudu is broken by the usual minor nullifiers (e.g. passing wind, deep sleep in some schools). A new major impurity requires a new ghusl.</p>
          </details>
          <details class="faq-acc"><summary>Do women need to undo braids for ghusl?<span>+</span></summary>
            <p>Many scholars hold that water reaching the roots is sufficient without undoing every braid, based on narrations from the Mothers of the Believers. If unsure about your situation or school of thought, ask a trusted local scholar.</p>
          </details>
          <details class="faq-acc"><summary>Can I make intention for ghusl silently?<span>+</span></summary>
            <p>Yes. Intention (niyyah) is in the heart — you do not need to say it out loud. Intend to purify yourself from major impurity for the sake of Allah before starting.</p>
          </details>
          <details class="faq-acc"><summary>What is the difference between ghusl and wudu?<span>+</span></summary>
            <p>Wudu is the partial wash for minor impurity before Salah. Ghusl is the full-body wash for major impurity. After a valid ghusl that includes wudu steps, you may pray without a separate wudu unless something that breaks wudu occurs afterward.</p>
          </details>
          <details class="faq-acc"><summary>Do I need ghusl after a wet dream?<span>+</span></summary>
            <p>Emission of fluid from janabah requires ghusl according to mainstream teaching. If you are uncertain whether ghusl is required in a specific situation, ask a qualified local scholar — do not rely on anonymous forum guesses.</p>
          </details>

          <div class="highlight-box">
            <strong>Next step after purity: Salah with confidence.</strong> Learn prayer step by step in our <a href="/blog/how-to-pray-salah-step-by-step">Salah guide</a>, or book a <a href="/online-quran-classes-for-adults">free adult trial</a> for live correction.
          </div>`,
  },

  "labbaik-allahumma-labbaik": {
    style: S,
    content: `<p><strong>Labbaik Allahumma labbaik</strong> is the Talbiyah — the pilgrim's response to Allah's call for Hajj and Umrah. Millions recite it from the moment they enter ihram until they stone the Jamaraat (Hajj) or begin tawaf (Umrah practices vary by rite). This guide explains the full Arabic, spiritual meaning, when to recite, and how families can teach children the words before they ever travel.</p>

          <div class="highlight-box">
            <strong>Quick answer:</strong> Labbaik means "I am here / at Your service." The full Talbiyah affirms that all praise, blessing and dominion belong to Allah alone, with no partner. Full Arabic and English below. Teaching children the meaning builds love for Hajj long before they go — start with <a href="/online-quran-classes-for-kids">Quran classes for kids</a>.
          </div>

          <div class="toc">
            <strong>In this guide</strong>
            <ol>
              <li><a href="#full">The complete Talbiyah</a></li>
              <li><a href="#meaning">Word-by-word meaning</a></li>
              <li><a href="#when">When pilgrims recite Labbaik</a></li>
              <li><a href="#spirit">Spiritual meaning</a></li>
              <li><a href="#teach">Teaching children</a></li>
              <li><a href="#mistakes">Common mistakes</a></li>
              <li><a href="#faq">FAQ</a></li>
            </ol>
          </div>

          <h2 id="full">The complete Talbiyah</h2>
          <div class="verse-card">
            <span class="vnum">TALBIYAH · Bukhari &amp; Muslim</span>
            <div class="arabic">لَبَّيْكَ اللّٰهُمَّ لَبَّيْكَ، لَبَّيْكَ لَا شَرِيكَ لَكَ لَبَّيْكَ، إِنَّ الْحَمْدَ وَالنِّعْمَةَ لَكَ وَالْمُلْكَ، لَا شَرِيكَ لَكَ</div>
            <p class="translit">Labbayk Allaahumma labbayk. Labbayka laa shareeka laka labbayk. Innal-hamda wan-ni'mata laka wal-mulk. Laa shareeka lak.</p>
            <p class="trans-en"><strong>English:</strong> Here I am, O Allah, here I am. Here I am, You have no partner, here I am. Indeed all praise, favour and dominion are Yours. You have no partner.</p>
          </div>
          <p>Memorise the full wording before travel so your tongue is free to feel the moment. Many pilgrims listen to a reliable recitation during preparation weeks — then verify against a teacher or authentic text.</p>

          <h2 id="meaning">Word-by-word meaning</h2>
          <table class="np-table">
            <tr><th>Phrase</th><th>Meaning</th></tr>
            <tr><td>Labbayk</td><td>I am present / I respond to Your call</td></tr>
            <tr><td>Allaahumma</td><td>O Allah</td></tr>
            <tr><td>laa shareeka lak</td><td>You have no partner</td></tr>
            <tr><td>innal-hamda</td><td>indeed all praise</td></tr>
            <tr><td>wan-ni'mata</td><td>and all favour / blessing</td></tr>
            <tr><td>laka wal-mulk</td><td>are Yours, and the dominion</td></tr>
          </table>
          <p>Each repetition of <em>labbayk</em> is an answer: "I am here." Each <em>laa shareeka lak</em> renews Tawheed — no partner in worship, praise, or kingship. That is why the Talbiyah shakes hearts on the road to Makkah.</p>

          <h2 id="when">When do pilgrims recite Labbaik?</h2>
          <ul>
            <li>After entering the state of ihram.</li>
            <li>Frequently while travelling to Makkah and during the rites.</li>
            <li>Men raise their voices; women recite quietly (standard guidance).</li>
            <li>It stops at prescribed points of the Hajj/Umrah (e.g. beginning of tawaf for Umrah in common practice).</li>
          </ul>
          <table class="np-table">
            <tr><th>Rite stage</th><th>Talbiyah practice (general)</th></tr>
            <tr><td>After ihram</td><td>Begin Talbiyah; continue frequently</td></tr>
            <tr><td>Travel to Makkah</td><td>Recite individually or in group rhythm</td></tr>
            <tr><td>Umrah tawaf start</td><td>Many stop Talbiyah when tawaf begins — follow your guide</td></tr>
            <tr><td>Hajj rites</td><td>Stops at specific points such as stoning Jamaraat — madhhab details vary</td></tr>
          </table>
          <div class="gold-box">
            <strong>Madhhab note:</strong> Exact points where Talbiyah stops differ slightly between scholars and Hajj guides. Follow the instructions of a qualified guide for your pilgrimage type — do not debate loudly in the Haram over minor differences.
          </div>

          <h2 id="spirit">Spiritual meaning</h2>
          <p>Labbaik is not tourism — it is answering the call Ibrahim (عليه السلام) proclaimed (Quran 22:27). Each repetition renews Tawheed: no partner in worship, praise, or kingship. The pilgrim wears simple ihram, leaves luxury behind, and answers with the same words generations have answered.</p>
          <p>Even if you are not on Hajj yet, learning the Talbiyah connects you to the ummah's greatest gathering. Pair it with understanding <a href="/blog/la-hawla-wa-la-quwwata-illallah-meaning">La hawla wa la quwwata illallah</a> — both phrases centre reliance on Allah alone.</p>

          <h2 id="teach">Teaching children before pilgrimage</h2>
          <ol>
            <li><strong>Week 1:</strong> Listen and repeat "Labbayk Allaahumma labbayk" with correct vowels.</li>
            <li><strong>Week 2:</strong> Add "laa shareeka laka labbayk" — explain "no partner" in simple English.</li>
            <li><strong>Week 3:</strong> Full Talbiyah; show a map of Makkah and explain Hajj as worship, not a holiday.</li>
            <li><strong>Ongoing:</strong> Connect to Quran learning via <a href="/learn-quran-online">learn Quran online</a> so Arabic feels familiar.</li>
          </ol>

          <h2 id="mistakes">Common mistakes</h2>
          <ul>
            <li>Reciting Talbiyah outside ihram as if on pilgrimage — it belongs to the ihram state.</li>
            <li>Memorising with wrong harakat that change meaning — learn with a teacher.</li>
            <li>Treating Hajj content as background noise without teaching children the Tawheed message.</li>
            <li>Women raising voice loudly in mixed crowds against standard modesty guidance.</li>
          </ul>

          <h2 id="faq">FAQ</h2>
          <details class="faq-acc"><summary>What is the difference between Hajj and Umrah Talbiyah?<span>+</span></summary>
            <p>The wording is the same. What differs is when and where you stop reciting according to each rite and madhhab. Umrah Talbiyah commonly stops at the start of tawaf; Hajj has additional stopping points — follow your qualified guide.</p>
          </details>
          <details class="faq-acc"><summary>How should children learn Labbaik before pilgrimage?<span>+</span></summary>
            <p>Teach in stages: short phrase first, then full Talbiyah, with simple English meaning and a map of Makkah. Correct pronunciation from a tutor prevents errors that are hard to fix later.</p>
          </details>
          <details class="faq-acc"><summary>Should women recite Talbiyah out loud?<span>+</span></summary>
            <p>Standard guidance is that men raise their voices while women recite quietly so only those nearby hear, preserving modesty. Both should recite with presence of heart.</p>
          </details>
          <details class="faq-acc"><summary>Can I recite Labbaik if I am not on Hajj?<span>+</span></summary>
            <p>The Talbiyah is specifically tied to ihram for Hajj and Umrah. Outside pilgrimage you can teach children its meaning and make general duas, but the ritual Talbiyah belongs to the ihram state.</p>
          </details>
          <details class="faq-acc"><summary>When do you stop saying Labbaik?<span>+</span></summary>
            <p>Pilgrims recite Talbiyah frequently after ihram. It stops at prescribed points of the rites — commonly at the beginning of tawaf for Umrah, and at specific points in Hajj such as stoning. Follow your guide's madhab instructions.</p>
          </details>
          <details class="faq-acc"><summary>What does Labbaik Allahumma Labbaik mean?<span>+</span></summary>
            <p>It means "Here I am, O Allah, here I am" — answering Allah's call with the full Talbiyah affirming Tawheed, praise, favour and dominion belong to Him alone with no partner.</p>
          </details>

          <div class="highlight-box">
            <strong>Prepare hearts for Hajj with Quran.</strong> Families who recite and understand the Book feel the Talbiyah more deeply. <a href="/online-quran-classes-for-kids">Book a free kids trial</a> or <a href="/online-quran-classes-for-adults">adult class</a>.
          </div>`,
  },

  "dua-entering-leaving-home": {
    style: S,
    content: `<p>Two short prophetic duas protect the Muslim when <strong>leaving home</strong> and when <strong>entering home</strong>. They take seconds, shield from Shaytan, and bring barakah into the house — ideal habits for children. This expanded guide adds daily routines, the meaning of each phrase, related adhkar, and a simple family teaching plan.</p>

          <div class="highlight-box">
            <strong>Quick answer:</strong> Leaving: <em>Bismillahi tawakkaltu 'alallah…</em> — then it is said you are guided, sufficed and protected, and Shaytan turns away (Abu Dawud, Tirmidhi). Entering: say salaam and <em>Bismillah</em>, and recite the entering dua below. Teach kids with our <a href="/blog/duas-for-kids-to-memorize">kids duas list</a>.
          </div>

          <div class="toc">
            <strong>In this guide</strong>
            <ol>
              <li><a href="#leaving">Dua when leaving home</a></li>
              <li><a href="#entering">Dua when entering home</a></li>
              <li><a href="#la-hawla">Meaning of La hawla in the leaving dua</a></li>
              <li><a href="#kids">Teach children in 3 days</a></li>
              <li><a href="#family-routine">Family door routine</a></li>
              <li><a href="#mistakes">Common mistakes</a></li>
              <li><a href="#faq">FAQ</a></li>
            </ol>
          </div>

          <h2 id="leaving">Dua when leaving home</h2>
          <div class="verse-card">
            <span class="vnum">LEAVING HOME · Abu Dawud 5095, Tirmidhi 3426</span>
            <div class="arabic">بِسْمِ اللّٰهِ تَوَكَّلْتُ عَلَى اللّٰهِ وَلَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللّٰهِ</div>
            <p class="translit">Bismillaahi tawakkaltu 'alallaah, wa laa hawla wa laa quwwata illaa billaah.</p>
            <p class="trans-en"><strong>English:</strong> In the name of Allah, I place my trust in Allah, and there is no might nor power except with Allah.</p>
          </div>
          <p>The hadith states that when a person says this, it is said to them: "You have been guided, sufficed and protected," and the devil turns away from them. Say it at the door before stepping out — work, school, errands, or travel.</p>

          <h2 id="entering">Dua when entering home</h2>
          <div class="verse-card">
            <span class="vnum">ENTERING HOME · Abu Dawud 5096</span>
            <div class="arabic">بِسْمِ اللّٰهِ وَلَجْنَا وَبِسْمِ اللّٰهِ خَرَجْنَا وَعَلَى اللّٰهِ رَبِّنَا تَوَكَّلْنَا</div>
            <p class="translit">Bismillaahi walajnaa, wa bismillaahi kharajnaa, wa 'alallaahi rabbinaa tawakkalnaa.</p>
            <p class="trans-en"><strong>English:</strong> In the name of Allah we enter, in the name of Allah we leave, and upon our Lord we place our trust.</p>
          </div>
          <p>Then say salaam to the household — even if only you or family members are present. Mentioning Allah's name when entering is also narrated to keep Shaytan outside (Muslim 2018 — regarding eating; scholars extend the principle of naming Allah in daily acts).</p>

          <h2 id="la-hawla">Meaning of La hawla in the leaving dua</h2>
          <p>The phrase <em>laa hawla wa laa quwwata illaa billaah</em> declares that no change of condition and no strength exist except by Allah. It pairs perfectly with <em>tawakkaltu 'alallah</em> — you trust Allah and admit that every step outside the door depends on Him. Deep dive: <a href="/blog/la-hawla-wa-la-quwwata-illallah-meaning">La hawla wa la quwwata illallah meaning</a>.</p>
          <table class="np-table">
            <tr><th>Phrase</th><th>Role at the door</th></tr>
            <tr><td>Bismillah</td><td>Begin in Allah's name — barakah and protection</td></tr>
            <tr><td>Tawakkaltu 'alallah</td><td>Place trust in Allah for what lies outside</td></tr>
            <tr><td>La hawla wa la quwwata illaa billaah</td><td>Admit all power belongs to Allah alone</td></tr>
          </table>

          <h2 id="kids">Teach children in 3 days</h2>
          <ol>
            <li>Day 1: only "Bismillah" at the door.</li>
            <li>Day 2: add "tawakkaltu 'alallah".</li>
            <li>Day 3: full leaving dua; practice entering with salaam.</li>
          </ol>
          <p>Put a small reminder card near the door — Arabic on one side, English on the other. Reward consistency, not perfection. Children who stumble on day three still succeed if they keep trying.</p>

          <h2 id="family-routine">Family door routine</h2>
          <ul>
            <li><strong>Morning school run:</strong> parent says leaving dua aloud; child repeats.</li>
            <li><strong>Returning home:</strong> pause devices; enter with Bismillah and salaam before screens.</li>
            <li><strong>Guests arriving:</strong> teach children to greet with salaam — the home remains a place of peace.</li>
            <li><strong>Evening adhkar:</strong> link to <a href="/blog/morning-evening-adhkar-dhikr">morning/evening adhkar</a> for fuller protection.</li>
          </ul>
          <p>For more short duas children can stack, see <a href="/blog/dua-before-school-for-kids">dua before school</a> and <a href="/blog/dua-before-and-after-eating">dua before and after eating</a>.</p>

          <h2 id="mistakes">Common mistakes</h2>
          <ul>
            <li>Rushing out without a single Bismillah — the habit takes two seconds.</li>
            <li>Teaching Arabic only without English meaning — children memorize sounds without trust.</li>
            <li>Entering with arguments or raised voices — contradicts the peace of salaam.</li>
            <li>Assuming wudu is required — these door duas are dhikr, not salah.</li>
            <li>Never saying salaam when entering — the home becomes a place of noise, not mercy.</li>
          </ul>
          <p>Homes where Allah is remembered at the threshold often raise children who carry that calm into school and work. That long-term adab matters more than perfect Arabic on day one — though both are worth pursuing with a tutor.</p>

          <h2 id="faq">FAQ</h2>
          <details class="faq-acc"><summary>Should I say the leaving dua out loud?<span>+</span></summary>
            <p>You may say it quietly or aloud — both are fine. Many parents say it aloud so children learn. What matters is presence and correct wording, not volume.</p>
          </details>
          <details class="faq-acc"><summary>What other home adhkar can families add?<span>+</span></summary>
            <p>After entering, give salaam, say Bismillah before eating, recite Ayatul Kursi or the 3 Quls before sleep, and maintain morning/evening adhkar. Build slowly — one habit at a time.</p>
          </details>
          <details class="faq-acc"><summary>Does the leaving-home dua protect from Shaytan?<span>+</span></summary>
            <p>Yes. The hadith states that when this dua is said, it is announced that the person has been guided, sufficed and protected, and the devil turns away from them.</p>
          </details>
          <details class="faq-acc"><summary>Do I need wudu to say the home duas?<span>+</span></summary>
            <p>No. These are remembrance (dhikr/dua) and can be said without wudu. Wudu is preferred for other acts of worship but is not a condition for these door duas.</p>
          </details>
          <details class="faq-acc"><summary>How can I teach these duas to my kids?<span>+</span></summary>
            <p>Start with Bismillah at the door for one day, add tawakkaltu 'alallah on day two, then the full leaving dua on day three. Practice entering with salaam. Short daily repetition beats long weekly sessions.</p>
          </details>
          <details class="faq-acc"><summary>What is the dua when entering the house?<span>+</span></summary>
            <p>Bismillaahi walajnaa, wa bismillaahi kharajnaa, wa 'alallaahi rabbinaa tawakkalnaa — then give salaam to the household (Abu Dawud 5096).</p>
          </details>

          <div class="highlight-box">
            <strong>Want correct pronunciation from day one?</strong> A live tutor hears and fixes each word. <a href="/online-quran-classes-for-kids">Book a free 30-minute trial</a> — no credit card.
          </div>

          <div style="margin-top:48px;border-top:1px solid var(--border);padding-top:32px;">
            <h3 style="font-size:1.1rem;font-weight:700;margin-bottom:16px;">Related Articles</h3>
            <ul style="list-style:none;padding:0;margin:0;display:flex;flex-direction:column;gap:10px;">
              <li><a href="/blog/duas-for-kids-to-memorize" style="color:var(--emerald);font-weight:600;">20 Essential Duas for Kids to Memorize</a></li>
              <li><a href="/blog/dua-before-school-for-kids" style="color:var(--emerald);font-weight:600;">Dua Before School for Kids</a></li>
              <li><a href="/blog/dua-before-and-after-eating" style="color:var(--emerald);font-weight:600;">Dua Before &amp; After Eating</a></li>
              <li><a href="/blog/dua-before-sleeping-islam" style="color:var(--emerald);font-weight:600;">Dua Before Sleeping in Islam</a></li>
              <li><a href="/blog/bismillah-meaning-in-english" style="color:var(--emerald);font-weight:600;">Bismillah Meaning in English</a></li>
            </ul>
          </div>`,
  },

  "how-to-pray-witr": {
    style: S,
    content: `<p><strong>Witr</strong> is the odd-numbered prayer performed after Isha. The Prophet ﷺ never abandoned it — even while travelling — and called it a right (haqq) upon every Muslim (Abu Dawud 1416). This expanded guide shows how to pray Witr step by step, when to pray it relative to Tahajjud, madhhab differences, and what to do if you miss it.</p>

          <div class="highlight-box">
            <strong>Quick answer:</strong> Pray Witr after Isha, before Fajr. Minimum <strong>1 rakat</strong>; most common is <strong>3 rakats</strong>. Include <a href="/blog/dua-e-qunoot-arabic-english">Dua e Qunoot</a> in the final rakat (before or after ruku' depending on madhab). Closely related: <a href="/blog/tahajjud-prayer">Tahajjud</a> — pray Tahajjud first, then Witr last.
          </div>

          <div class="toc">
            <strong>In this guide</strong>
            <ol>
              <li><a href="#when">When to pray Witr</a></li>
              <li><a href="#rakats">How many rakats?</a></li>
              <li><a href="#hanafi">3-rakat method (Hanafi overview)</a></li>
              <li><a href="#other">Other madhhab methods</a></li>
              <li><a href="#qunoot">Dua e Qunoot</a></li>
              <li><a href="#missed">If you miss Witr</a></li>
              <li><a href="#faq">FAQ</a></li>
            </ol>
          </div>

          <h2 id="when">When to pray Witr</h2>
          <ul>
            <li>After Isha prayer until Fajr begins.</li>
            <li>Best: last part of the night, after Tahajjud, making Witr your final prayer (Bukhari 998).</li>
            <li>If you fear you will not wake up, pray Witr before sleeping after Isha.</li>
          </ul>
          <table class="np-table">
            <tr><th>Scenario</th><th>Recommended timing</th></tr>
            <tr><td>Can wake for Tahajjud</td><td>Delay Witr until after Tahajjud — Witr is the closing prayer</td></tr>
            <tr><td>Heavy schedule / early work</td><td>Pray Witr after Isha before sleep — valid and praiseworthy</td></tr>
            <tr><td>Already prayed Witr then woke for Tahajjud</td><td>Some scholars allow repeating Witr as nafl; follow your teacher — do not argue in the masjid</td></tr>
            <tr><td>Fajr time entered</td><td>Witr time has ended — make up according to your school's qada guidance</td></tr>
          </table>

          <h2 id="rakats">How many rakats?</h2>
          <table class="np-table">
            <tr><th>Number</th><th>Notes</th></tr>
            <tr><td>1</td><td>Valid minimum</td></tr>
            <tr><td>3</td><td>Most common — various methods by madhab</td></tr>
            <tr><td>5, 7, 9, 11</td><td>Also reported from the Prophet ﷺ</td></tr>
          </table>
          <p>Always keep the total odd. Consistency with three rakats is better than occasional eleven with confusion about structure.</p>

          <h2 id="hanafi">Common 3-rakat method (Hanafi-style overview)</h2>
          <ol>
            <li>Pray two rakats like a normal sunnah, with <a href="/blog/attahiyat-full-arabic-english-tashahhud">tashahhud</a> but <strong>without salam</strong>.</li>
            <li>Stand for a third rakat; recite Fatiha and a surah.</li>
            <li>Say Allahu Akbar and raise hands, then recite <strong>Dua e Qunoot</strong>.</li>
            <li>Complete ruku', sujood, tashahhud, and salam.</li>
          </ol>
          <p>This is one widely taught structure. If you follow another school, use the method your teacher confirms — prayer should bring peace, not constant doubt.</p>

          <h2 id="other">Other madhhab methods (honest overview)</h2>
          <ul>
            <li><strong>Shafi'i / Maliki / Hanbali common pattern:</strong> often pray two rakats with salam, then one separate rakat; or three continuous with one tashahhud at the end.</li>
            <li><strong>Qunoot placement:</strong> many non-Hanafi schools recite Qunoot after ruku' in the final rakat rather than before.</li>
            <li><strong>Raising hands for Qunoot:</strong> practices differ — follow your trusted local imam.</li>
          </ul>
          <div class="gold-box">
            <strong>Enterprise honesty:</strong> This page is educational, not a personal fatwa. Follow the school/teacher your household trusts. When learning from scratch, see our <a href="/blog/how-to-pray-salah-step-by-step">how to pray salah step by step</a> guide first.
          </div>

          <h2 id="qunoot">Dua e Qunoot</h2>
          <p>Full Arabic, transliteration and English are in our dedicated guide: <a href="/blog/dua-e-qunoot-arabic-english">Dua e Qunoot</a>. If you have not memorised it yet, make any sincere dua in Arabic or your language until you learn it — do not skip Witr entirely because Qunoot is not memorised.</p>
          <p>Many beginners learn Qunoot one line per week with a tutor. Adults benefit from live correction: <a href="/online-quran-classes-for-adults">online Quran classes for adults</a> or <a href="/free-quran-classes-online">free trial</a>.</p>

          <h2 id="missed">If you miss Witr</h2>
          <p>Make it up after Fajr / in the morning as qada according to many scholars — do not leave it habitually. Consistency matters more than occasional long Witr. If you regularly miss it, pray Witr immediately after Isha until the habit sticks.</p>

          <h2 id="mistakes">Common mistakes</h2>
          <ul>
            <li>Skipping Witr because Qunoot is not memorised — use a shorter allowed dua until you learn.</li>
            <li>Praying Witr before Isha — it belongs after Isha until Fajr.</li>
            <li>Ending even-numbered rakats without completing the odd Witr.</li>
            <li>Constantly switching madhhab methods from online videos — pick one teacher.</li>
          </ul>

          <h2 id="faq">FAQ</h2>
          <details class="faq-acc"><summary>Can I pray Witr before Tahajjud?<span>+</span></summary>
            <p>If you will not wake for Tahajjud, pray Witr after Isha before sleep — that is valid. If you plan to wake, the preferred sequence is Tahajjud first, then Witr as the closing prayer of the night.</p>
          </details>
          <details class="faq-acc"><summary>Is Witr obligatory or sunnah?<span>+</span></summary>
            <p>Scholars differ: many classify it as strongly emphasised sunnah (sunnah mu'akkadah) or a haqq the Prophet ﷺ emphasised. Treat it as a fixed habit you rarely leave — he ﷺ did not abandon it even while travelling.</p>
          </details>
          <details class="faq-acc"><summary>How do you pray Witr step by step?<span>+</span></summary>
            <p>Pray Witr after Isha. A common method is 3 rakats with Dua e Qunoot in the final rakat (before or after ruku' depending on madhab), then tashahhud and salam. You may also pray 1 rakat minimum.</p>
          </details>
          <details class="faq-acc"><summary>How many rakats is Witr?<span>+</span></summary>
            <p>Minimum is 1 rakat. Three is most common. Five, seven, nine and eleven are also reported. Always keep the total odd. Follow your school of thought for the exact structure of three rakats.</p>
          </details>
          <details class="faq-acc"><summary>What if I miss Witr?<span>+</span></summary>
            <p>Many scholars allow making it up after Fajr or in the morning. Do not abandon Witr habitually — the Prophet ﷺ emphasised it even while travelling. Consistency with fewer rakats is better than occasional long Witr.</p>
          </details>
          <details class="faq-acc"><summary>What is Dua e Qunoot in Witr?<span>+</span></summary>
            <p>Dua e Qunoot is the special supplication recited in the last rakat of Witr. The famous wording begins Allahumma-hdini feeman hadayt… If you have not memorised it yet, make any sincere dua until you learn it.</p>
          </details>

          <div class="highlight-box">
            <strong>Learn Salah and Qunoot with live correction.</strong> NoorPath tutors teach adults and kids step by step. <a href="/online-quran-classes-for-adults">Adult free trial</a> · <a href="/online-quran-classes-for-kids">Kids free trial</a>.
          </div>`,
  },
};
