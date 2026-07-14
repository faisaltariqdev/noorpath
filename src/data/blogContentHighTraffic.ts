// High-traffic Tier-S articles — merged into blogContent via index spread

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
  @media (max-width: 576px) { .np-table { font-size: .82rem; } .np-table th, .np-table td { padding: 8px 9px; } .arabic { font-size: 1.55rem; line-height: 2.3; } .stat-row { grid-template-columns: 1fr 1fr; } }`;

export const highTrafficBlogContent: Record<string, { style: string; content: string }> = {
  "female-quran-teacher-for-kids": {
    style: S,
    content: `<p>Parents searching for a <strong>female Quran teacher for kids</strong> want three things: a safe learning space for daughters, a patient Hafiza who understands children, and correct Tajweed from day one. Online 1-on-1 classes make that combination available in every timezone — including UK after-school hours.</p>

          <figure class="article-figure">
            <img src="/marketing/female-hafiza-tutor.jpg" alt="Certified female Hafiza tutor teaching a girl Quran online via Zoom" width="1200" height="800" loading="eager" />
            <figcaption>A private Zoom class with a Hafiza tutor — parents can observe from the same room.</figcaption>
          </figure>

          <div class="highlight-box">
            <strong>Quick answer:</strong> Yes — you can book a certified <strong>female Quran teacher (Hafiza)</strong> for girls ages 4–12 for live Zoom classes. Sessions are private, parent-monitored, and cover Noorani Qaida through Hifz. <a href="/female-quran-teacher-online">See female tutors</a> or <a href="/online-quran-classes-for-kids">book a kids free trial</a> and request a female teacher.
          </div>

          <div class="stat-row">
            <div class="stat-pill"><strong>4–12</strong><span>Ideal ages</span></div>
            <div class="stat-pill"><strong>20–45m</strong><span>Session length</span></div>
            <div class="stat-pill"><strong>100%</strong><span>Female sessions</span></div>
            <div class="stat-pill"><strong>30 min</strong><span>Free trial</span></div>
          </div>

          <h2 id="why">Why parents choose a female tutor for daughters</h2>
          <ul>
            <li><strong>Comfort:</strong> many girls focus better with a sister teacher.</li>
            <li><strong>Family preference:</strong> parents want a fully female teaching environment.</li>
            <li><strong>Role model:</strong> seeing a Hafiza who completed memorisation inspires girls.</li>
            <li><strong>Safety:</strong> Zoom/Meet only, no private chat, parents can observe anytime.</li>
          </ul>

          <h2 id="age">Best age to start with a female teacher</h2>
          <table class="np-table">
            <tr><th>Age</th><th>Session length</th><th>Focus</th><th>Parent tip</th></tr>
            <tr><td>4–6</td><td>20–25 min</td><td>Letters, sounds, short duas — play-based</td><td>Sit nearby for the first 2–4 weeks</td></tr>
            <tr><td>7–9</td><td>30 min</td><td>Noorani Qaida, Al-Fatiha, basic Tajweed</td><td>Ask for a weekly written progress note</td></tr>
            <tr><td>10–12</td><td>35–45 min</td><td>Fluent reading, Tajweed, optional Hifz start</td><td>Protect a fixed after-school slot</td></tr>
          </table>

          <h2 id="uk">Female Quran teacher for kids in the UK</h2>
          <p>UK families usually book <strong>4–7pm GMT/BST</strong> after school. Popular cities include London, Birmingham, Manchester, Bradford, Leeds and Leicester — but because classes are online, any UK postcode works. See also <a href="/locations/online-quran-classes-uk">online Quran classes UK</a> and city pages like <a href="/online-quran-classes/london">London</a> and <a href="/online-quran-classes/bradford">Bradford</a>.</p>

          <figure class="article-figure">
            <img src="/marketing/family-evening-quran.jpg" alt="British Muslim family learning Quran together in the evening at home" width="1200" height="800" loading="lazy" />
            <figcaption>After-school Quran at home — no madrasa travel, same weekly time.</figcaption>
          </figure>

          <h2 id="checklist">Parent checklist before booking</h2>
          <ol>
            <li>Decide male vs <strong>female tutor</strong> (write it on the trial form).</li>
            <li>Note your child’s age and whether they know any Arabic letters.</li>
            <li>Pick 2–3 preferred times in your timezone (e.g. Mon/Wed 5pm).</li>
            <li>Prepare a quiet corner, tablet/laptop, and headphones if siblings are nearby.</li>
            <li>Attend the first trial with your daughter to set expectations.</li>
          </ol>

          <h2 id="what">What your daughter will learn</h2>
          <ol>
            <li>Arabic alphabet with correct Makharij</li>
            <li>Noorani Qaida → joining letters → Quran reading</li>
            <li>Short surahs and daily duas</li>
            <li>Tajweed rules applied in recitation</li>
            <li>Optional Hifz with Sabaq–Sabqi–Manzil revision</li>
          </ol>

          <div class="gold-box">
            <strong>How to book:</strong> On the free trial form, write “female tutor for daughter, age X, UK evenings” (or your country). We match within 24 hours. No credit card for the trial.
          </div>

          <div class="highlight-box">
            <strong>Ready to meet a Hafiza tutor?</strong> <a href="/female-quran-teacher-online#cta">Book a free female-teacher trial</a> or message us on WhatsApp from any kids class page.
          </div>`,
  },
  "online-hifz-classes-for-kids": {
    style: S,
    content: `<p><strong>Online Hifz classes for kids</strong> let children memorise the Quran at home with a live Hafiz or Hafiza — using the same Sabaq–Sabqi–Manzil system used in traditional Hifz schools, without daily travel.</p>

          <figure class="article-figure">
            <img src="/marketing/kids-hifz-memorisation.jpg" alt="Child memorising Quran at home during online Hifz classes" width="1200" height="800" loading="eager" />
            <figcaption>Hifz works best with a quiet routine at home plus a live tutor who checks every day.</figcaption>
          </figure>

          <div class="highlight-box">
            <strong>Quick answer:</strong> Start Hifz when your child can read Quran with basic fluency (often ages 7–10). Online Hifz needs 5–6 short sessions per week plus home revision. <a href="/courses/hifz-program-online">Hifz program details</a> · <a href="/online-quran-classes-for-kids">kids free trial</a>.
          </div>

          <div class="stat-row">
            <div class="stat-pill"><strong>7–10</strong><span>Best start age</span></div>
            <div class="stat-pill"><strong>5–6×</strong><span>Live lessons / week</span></div>
            <div class="stat-pill"><strong>25–40m</strong><span>Per session</span></div>
            <div class="stat-pill"><strong>3 layers</strong><span>Sabaq system</span></div>
          </div>

          <h2 id="age">Best age to start online Hifz</h2>
          <ul>
            <li><strong>Ideal:</strong> 7–10 after Noorani Qaida and fluent Juz Amma reading.</li>
            <li><strong>Earlier:</strong> short surah memorisation is fine at 5–6, but full Hifz needs reading skill.</li>
            <li><strong>Later:</strong> ages 11–14 often progress faster if motivated.</li>
          </ul>
          <p>Related guide: <a href="/blog/best-age-to-start-quran-learning">best age to start Quran learning</a> and <a href="/blog/how-long-to-memorize-quran">how long to memorize the Quran</a>.</p>

          <h2 id="system">The Sabaq–Sabqi–Manzil system</h2>
          <table class="np-table">
            <tr><th>Layer</th><th>Meaning</th><th>In a live class</th><th>Parent tip</th></tr>
            <tr><td>Sabaq</td><td>Today's new lines</td><td>Tutor listens + corrects</td><td>Keep new portion small and solid</td></tr>
            <tr><td>Sabqi</td><td>Recent days' memorisation</td><td>Quick re-test</td><td>Revise before adding more</td></tr>
            <tr><td>Manzil</td><td>Older completed Juz</td><td>Weekly cycle</td><td>So nothing is forgotten</td></tr>
          </table>

          <figure class="article-figure">
            <img src="/marketing/kids-online-quran-class.jpg" alt="Child in an online Quran class preparing for Hifz with a live tutor" width="1200" height="800" loading="lazy" />
            <figcaption>Reading fluency first — then Hifz. A trial lesson assesses readiness in 30 minutes.</figcaption>
          </figure>

          <h2 id="schedule">Sample weekly schedule (kids)</h2>
          <table class="np-table">
            <tr><th>Day</th><th>Live class</th><th>Home revision</th></tr>
            <tr><td>Mon–Thu</td><td>30–40 min after school</td><td>10 min before bed (optional)</td></tr>
            <tr><td>Fri</td><td>Shorter review or off</td><td>Listen to yesterday’s Sabaq</td></tr>
            <tr><td>Sat–Sun</td><td>1 catch-up if needed</td><td>15 min Manzil loop</td></tr>
          </table>
          <ul>
            <li>UK: often <strong>5–6pm GMT</strong> after school; weekends for catch-up</li>
            <li>US: early morning or after school EST/PST</li>
            <li>Fewer than 3 live sessions/week usually stalls retention</li>
          </ul>

          <h2 id="pages">How many pages per day?</h2>
          <p>Ages 7–9: a few lines to half a page. Ages 10–12: half to one page when retention is strong. Quality beats speed — rushing creates weak Hifz that collapses under exam pressure.</p>

          <h2 id="red-flags">Signs your child is (or isn’t) ready</h2>
          <ul>
            <li><strong>Ready:</strong> reads short surahs smoothly, enjoys repetition, can focus 25+ minutes.</li>
            <li><strong>Not yet:</strong> still guessing letters, fights every session, or has no fixed daily slot.</li>
          </ul>
          <p>If they are not ready, start with <a href="/courses/noorani-qaida-online">Noorani Qaida</a> or regular <a href="/online-quran-classes-for-kids">kids Quran classes</a> first.</p>

          <div class="gold-box">
            <strong>Female Hifz tutors:</strong> Daughters can memorise with a certified Hafiza. Request “female Hifz tutor” on your trial form — see <a href="/blog/female-quran-teacher-for-kids">female Quran teacher for kids</a>.
          </div>

          <div class="highlight-box">
            <strong>Is your child ready for Hifz?</strong> Book a free assessment lesson — the tutor checks reading level and recommends a realistic timeline. <a href="/online-quran-classes-for-kids#cta">Start free trial</a>.
          </div>`,
  },
  "dua-for-success-exams": {
    style: S,
    content: `<p>A <strong>dua for success</strong> is one of the most searched Islamic duas worldwide — especially before exams, job interviews, and life goals. Islam does not separate effort from tawakkul: you study hard, then ask Allah to open what you cannot open alone.</p>

          <div class="highlight-box">
            <strong>Quick answer:</strong> The best short dua for success and ease is <strong>Allahumma la sahla illa ma ja'altahu sahla</strong>. For knowledge, recite <strong>Rabbi zidni 'ilma</strong> (Quran 20:114). Combine both before exams with <a href="/blog/bismillah-meaning-in-english">Bismillah</a> and sincere effort. Want your child to memorise these correctly? <a href="/online-quran-classes-for-kids">Book a free trial</a>.
          </div>

          <h2 id="best-duas">Best duas for success &amp; exams</h2>

          <h3>1. Dua for ease in every matter</h3>
          <div class="verse-card">
            <span class="vnum">PROPHETIC DUA · Ibn Hibban</span>
            <div class="arabic">اَللّٰهُمَّ لَا سَهْلَ إِلَّا مَا جَعَلْتَهُ سَهْلًا وَأَنْتَ تَجْعَلُ الْحَزْنَ إِذَا شِئْتَ سَهْلًا</div>
            <p class="translit">Allaahumma laa sahla illaa maa ja'altahu sahla, wa anta taj'alul-hazna idhaa shi'ta sahla.</p>
            <p class="trans-en"><strong>English:</strong> O Allah, there is no ease except what You make easy, and You make the difficult easy if You wish.</p>
          </div>

          <h3>2. Dua for increase in knowledge</h3>
          <div class="verse-card">
            <span class="vnum">QURAN 20:114</span>
            <div class="arabic">رَبِّ زِدْنِي عِلْمًا</div>
            <p class="translit">Rabbi zidni 'ilma.</p>
            <p class="trans-en"><strong>English:</strong> My Lord, increase me in knowledge.</p>
          </div>
          <p>This is the only place in the Quran where Allah commands the Prophet ﷺ to ask for increase — and it is increase in <em>knowledge</em>. Ideal for students, parents teaching children, and lifelong learners.</p>

          <h3>3. Dua of Musa for clarity of speech</h3>
          <div class="verse-card">
            <span class="vnum">QURAN 20:25–28</span>
            <div class="arabic">رَبِّ اشْرَحْ لِي صَدْرِي ۝ وَيَسِّرْ لِي أَمْرِي ۝ وَاحْلُلْ عُقْدَةً مِّن لِّسَانِي ۝ يَفْقَهُوا قَوْلِي</div>
            <p class="translit">Rabbish-rah lee sadree. Wa yassir lee amree. Wahlul 'uqdatam-min lisaanee. Yafqahoo qawlee.</p>
            <p class="trans-en"><strong>English:</strong> My Lord, expand for me my chest, ease my task, untie the knot from my tongue so they may understand my speech.</p>
          </div>
          <p>Perfect before oral exams, presentations, interviews, or any moment when anxiety tightens the chest.</p>

          <h2 id="exam-routine">Pre-exam Sunnah routine (5 minutes)</h2>
          <ol>
            <li>Make wudu if possible — it calms the nerves.</li>
            <li>Say <strong>Bismillah</strong>, then <strong>Allahumma la sahla</strong>.</li>
            <li>Recite <strong>Rabbi zidni 'ilma</strong> three times.</li>
            <li>Read what you studied — dua without effort is incomplete.</li>
            <li>After the exam, say <a href="/blog/alhamdulillah-meaning-in-english">Alhamdulillah</a> and leave the result to Allah.</li>
          </ol>

          <div class="gold-box">
            <strong>For parents:</strong> Teach these duas early. Children who connect exams to Allah develop healthier pressure habits. Pair short daily Quran with study time — see our <a href="/blog/duas-for-kids-to-memorize">duas for kids</a> and <a href="/blog/arabic-alphabet-for-kids">Arabic alphabet for kids</a>.
          </div>

          <h2 id="faq-inline">Common mistakes</h2>
          <ul>
            <li>Waiting until the night before and only making dua — Islam pairs dua with action.</li>
            <li>Treating dua as a "magic formula" without sincerity (khushu').</li>
            <li>Forgetting gratitude after success — say Alhamdulillah and give charity if you can.</li>
          </ul>

          <div class="highlight-box">
            <strong>Want your child to recite duas with correct Arabic?</strong> NoorPath Academy teaches kids ages 4–12 live 1-on-1 — Qaida, Quran and essential duas. <a href="/online-quran-classes-for-kids">Book a free 30-minute trial</a> — no credit card.
          </div>`,
  },

  "dua-for-marriage": {
    style: S,
    content: `<p>A <strong>dua for marriage</strong> is among the most emotional searches Muslims make — asking Allah for a righteous spouse, a blessed nikah, and a peaceful home. The Quran and Sunnah give clear duas; what matters most is sincerity, lawful means, and trust in Allah's timing.</p>

          <div class="highlight-box">
            <strong>Quick answer:</strong> A powerful Quranic dua for a righteous spouse is from Surah Al-Furqan (25:74): <strong>Rabbana hablana min azwajina…</strong> When a proposal arrives, pray <a href="/blog/dua-e-istikhara">Salat al-Istikhara</a>. Combine dua with practical effort (family, matchmaking, character checks). Want your children raised with Quranic values for marriage later? Start early — <a href="/online-quran-classes-for-kids">free trial</a>.
          </div>

          <h2 id="quranic">Quranic dua for a righteous spouse</h2>
          <div class="verse-card">
            <span class="vnum">SURAH AL-FURQAN · 25:74</span>
            <div class="arabic">رَبَّنَا هَبْ لَنَا مِنْ أَزْوَاجِنَا وَذُرِّيَّاتِنَا قُرَّةَ أَعْيُنٍ وَاجْعَلْنَا لِلْمُتَّقِينَ إِمَامًا</div>
            <p class="translit">Rabbana hablana min azwajina wa dhurriyyatina qurrata a'yunin waj'alna lil-muttaqeena imaama.</p>
            <p class="trans-en"><strong>English:</strong> Our Lord, grant us from our spouses and offspring comfort to our eyes, and make us leaders for the righteous.</p>
          </div>

          <h2 id="zakariyya">Dua of Zakariyya for righteous offspring</h2>
          <div class="verse-card">
            <span class="vnum">SURAH AAL-IMRAN · 3:38</span>
            <div class="arabic">رَبِّ هَبْ لِي مِن لَّدُنكَ ذُرِّيَّةً طَيِّبَةً ۖ إِنَّكَ سَمِيعُ الدُّعَاءِ</div>
            <p class="translit">Rabbi hab lee mil-ladunka dhurriyyatan tayyibah. Innaka samee'ud-du'aa.</p>
            <p class="trans-en"><strong>English:</strong> My Lord, grant me from Yourself good offspring. Indeed, You are the Hearer of dua.</p>
          </div>
          <p>Often recited by those seeking marriage and later children — it reminds us that a "good" spouse and family is a gift from Allah, not a checklist alone.</p>

          <h2 id="istikhara">Istikhara for marriage (nikah)</h2>
          <p>When a specific proposal is in front of you, do not only ask friends — ask Allah. Pray 2 rakats and recite the full <a href="/blog/dua-e-istikhara">Dua e Istikhara</a>, naming the marriage when you reach "haadhal-amra". The answer is ease or difficulty in the matter — not necessarily a dream.</p>

          <h2 id="etiquette">Etiquettes that increase acceptance</h2>
          <ul>
            <li>Begin and end with praise of Allah and <a href="/blog/darood-sharif">Darood Sharif</a>.</li>
            <li>Make dua in sujood and in the last third of the night (<a href="/blog/tahajjud-prayer">Tahajjud</a>).</li>
            <li>Keep earning and character halal — dua and disobedience conflict.</li>
            <li>Be patient. Delay is not denial; sometimes protection.</li>
            <li>Involve parents / guardians for a blessed process.</li>
          </ul>

          <div class="gold-box">
            <strong>Avoid:</strong> Unverified "wazifas" promising marriage in X days, paid amulets, or despair that "dua never works". Allah answers with yes, wait, or something better (hadith meaning in Tirmidhi and others).
          </div>

          <div class="highlight-box">
            <strong>Building a Quran-centred family starts before nikah.</strong> NoorPath helps parents raise kids with Qaida, Tajweed and Islamic manners — live 1-on-1. <a href="/online-quran-classes-for-kids">Book a free trial</a>.
          </div>`,
  },

  "rabbana-atina-fid-dunya": {
    style: S,
    content: `<p><strong>Rabbana atina fid-dunya</strong> is the opening of Quran 2:201 — one of the most complete duas a Muslim can make. It asks for good in this world, good in the Hereafter, and protection from Hellfire in a single breath.</p>

          <div class="highlight-box">
            <strong>Quick answer:</strong> Full dua: <em>Rabbana atina fid-dunya hasanatan wa fil-akhirati hasanatan wa qina adhaban-nar</em> — "Our Lord, give us good in this world and good in the Hereafter, and protect us from the punishment of the Fire." (Surah Al-Baqarah 2:201). The Prophet ﷺ used to recite it often (Sahih Muslim). Teach it to your children early — <a href="/online-quran-classes-for-kids">free trial</a>.
          </div>

          <h2 id="full">Full Arabic, transliteration &amp; English</h2>
          <div class="verse-card">
            <span class="vnum">SURAH AL-BAQARAH · 2:201</span>
            <div class="arabic">رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الْآخِرَةِ حَسَنَةً وَقِنَا عَذَابَ النَّارِ</div>
            <p class="translit">Rabbana atina fid-dunya hasanatan wa fil-akhirati hasanatan wa qina 'adhaban-nar.</p>
            <p class="trans-en"><strong>English:</strong> Our Lord, give us in this world [that which is] good and in the Hereafter [that which is] good, and protect us from the punishment of the Fire.</p>
          </div>

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
          <p>Scholars explain "hasanah in the dunya" as covering health, lawful rizq, a righteous spouse, beneficial knowledge, and peace — whatever is truly good for you, not just what you desire.</p>

          <h2 id="when">When to recite Rabbana atina</h2>
          <ul>
            <li>In sujood and after tashahhud before salam.</li>
            <li>After every obligatory prayer.</li>
            <li>During <a href="/blog/tahajjud-prayer">Tahajjud</a> and times when duas are answered.</li>
            <li>Anytime you feel torn between worldly needs and akhirah goals.</li>
          </ul>

          <h2 id="context">Quranic context (important)</h2>
          <p>Verse 2:200 criticises those who only ask for the dunya. Verse 2:201 praises those who ask for both worlds and safety from the Fire. This dua rebalances a heart that has become too worldly — or too neglectful of lawful worldly needs.</p>

          <div class="highlight-box">
            <strong>Memorise it with correct Tajweed.</strong> NoorPath tutors teach Quranic duas and Surah Al-Baqarah passages live 1-on-1. <a href="/online-quran-classes-for-kids">Book a free trial</a> for your child or <a href="/online-quran-classes-for-adults">yourself</a>.
          </div>`,
  },

  "dua-for-forgiveness-istighfar": {
    style: S,
    content: `<p>A <strong>dua for forgiveness</strong> (Istighfar) is the door that never closes. Allah says He forgives all sins for those who turn to Him (Quran 39:53). The Prophet ﷺ — who was already forgiven — sought forgiveness more than seventy times a day (Bukhari 6307).</p>

          <div class="highlight-box">
            <strong>Quick answer:</strong> The best dua for forgiveness is <strong>Sayyid al-Istighfar</strong> (the Master of Seeking Forgiveness). Whoever says it with certainty in the morning and dies that day enters Paradise; same for the evening (Bukhari 6306). Full Arabic below. Also see <a href="/blog/astaghfirullah-meaning">Astaghfirullah meaning</a>.
          </div>

          <h2 id="sayyid">Sayyid al-Istighfar — the master dua</h2>
          <div class="verse-card">
            <span class="vnum">SAYYID AL-ISTIGHFAR · Bukhari 6306</span>
            <div class="arabic">اَللّٰهُمَّ أَنْتَ رَبِّي لَا إِلٰهَ إِلَّا أَنْتَ خَلَقْتَنِي وَأَنَا عَبْدُكَ وَأَنَا عَلَىٰ عَهْدِكَ وَوَعْدِكَ مَا اسْتَطَعْتُ أَعُوذُ بِكَ مِنْ شَرِّ مَا صَنَعْتُ أَبُوءُ لَكَ بِنِعْمَتِكَ عَلَيَّ وَأَبُوءُ لَكَ بِذَنْبِي فَاغْفِرْ لِي فَإِنَّهُ لَا يَغْفِرُ الذُّنُوبَ إِلَّا أَنْتَ</div>
            <p class="translit">Allaahumma anta rabbee laa ilaaha illaa ant, khalaqtanee wa ana 'abduk, wa ana 'alaa 'ahdika wa wa'dika mas-tata't, a'oodhu bika min sharri maa sana't, aboo'u laka bi ni'matika 'alayya wa aboo'u laka bi dhanbee faghfir lee fa innahu laa yaghfirudh-dhunooba illaa ant.</p>
            <p class="trans-en"><strong>English:</strong> O Allah, You are my Lord; there is no god but You. You created me and I am Your servant, and I uphold Your covenant and promise as much as I can. I seek refuge in You from the evil of what I have done. I acknowledge Your favour upon me and I acknowledge my sin, so forgive me — for none forgives sins except You.</p>
          </div>

          <h2 id="short">Short daily Istighfar</h2>
          <div class="verse-card">
            <span class="vnum">ASTAGHFIRULLAH</span>
            <div class="arabic">أَسْتَغْفِرُ اللّٰهَ وَأَتُوبُ إِلَيْهِ</div>
            <p class="translit">Astaghfirullaaha wa atoobu ilayh.</p>
            <p class="trans-en"><strong>English:</strong> I seek Allah's forgiveness and I repent to Him.</p>
          </div>

          <h2 id="yunus">Dua of Yunus (Ayat e Karima)</h2>
          <p>When feeling trapped by sin or hardship, recite the dua of Prophet Yunus — detailed in our guide to <a href="/blog/ayat-e-karima">Ayat e Karima</a>: <em>La ilaha illa anta subhanaka inni kuntu minaz-zalimin</em> (21:87).</p>

          <h2 id="tawbah">Conditions of sincere Tawbah</h2>
          <ol>
            <li>Stop the sin immediately.</li>
            <li>Feel genuine regret.</li>
            <li>Resolve not to return.</li>
            <li>If the sin harmed others, restore their rights where possible.</li>
          </ol>
          <p>Saying the words without these conditions is dhikr — beautiful — but complete repentance needs the heart and action too.</p>

          <div class="gold-box">
            <strong>Best times:</strong> After Salah, last third of the night, Mondays and Thursdays, and whenever you remember a mistake. Consistency beats occasional long sessions.
          </div>

          <div class="highlight-box">
            <strong>Teach Istighfar to children early</strong> — a soft heart that knows how to return to Allah is a lifelong gift. NoorPath classes include duas with Tajweed. <a href="/online-quran-classes-for-kids">Book a free trial</a>.
          </div>`,
  },

  "how-to-do-ghusl-step-by-step": {
    style: S,
    content: `<p><strong>Ghusl</strong> is the full-body ritual wash that removes major impurity (janabah) and is also recommended for Friday prayer, Eid, and before entering ihram. This guide follows the prophetic method in clear steps for men and women.</p>

          <div class="highlight-box">
            <strong>Quick answer:</strong> Intention (niyyah) → wash hands → wash private parts → perform wudu → pour water over the head three times → wash the entire body ensuring water reaches skin and roots of hair. Without intention and complete washing of the body, ghusl is incomplete. Learn related purification: <a href="/blog/how-to-do-wudu-step-by-step">how to do wudu</a>.
          </div>

          <h2 id="when">When is ghusl obligatory?</h2>
          <ul>
            <li>After sexual intercourse or emission of semen (janabah).</li>
            <li>After menstrual period (hayd) ends — for women.</li>
            <li>After postnatal bleeding (nifas) ends — for women.</li>
            <li>Upon accepting Islam (according to many scholars).</li>
          </ul>
          <p><strong>Recommended (sunnah) ghusl:</strong> before Friday prayer, Eid, Ihram for Hajj/Umrah, and after washing the deceased (for those who washed).</p>

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

          <h2 id="fard">What is fard (obligatory) in ghusl?</h2>
          <table class="np-table">
            <tr><th>Element</th><th>Requirement</th></tr>
            <tr><td>Intention</td><td>Required (majority of scholars)</td></tr>
            <tr><td>Water over entire body</td><td>Required — every part of skin</td></tr>
            <tr><td>Hair roots</td><td>Water must reach scalp/roots</td></tr>
            <tr><td>Mouth &amp; nose</td><td>Required in Hanafi school as part of ghusl; recommended in others</td></tr>
          </table>

          <h2 id="women">Notes for women</h2>
          <ul>
            <li>After menses/nifas: ensure purity has ended, then ghusl as above.</li>
            <li>Braided hair: according to many scholars, water reaching the roots is enough without undoing every braid (details vary — ask a trusted local scholar if unsure).</li>
            <li>Same prophetic washing order applies.</li>
          </ul>

          <div class="gold-box">
            <strong>Common mistakes:</strong> skipping intention, missing skin under jewellery/watches, rushing so water does not reach the scalp, assuming a quick shower without focus is automatically ghusl. Ghusl can be a shower — if the steps and intention are fulfilled.
          </div>

          <div class="highlight-box">
            <strong>Next step after purity: Salah with confidence.</strong> Learn prayer step by step in our <a href="/blog/how-to-pray-salah-step-by-step">Salah guide</a>, or book a <a href="/online-quran-classes-for-adults">free adult trial</a> for live correction.
          </div>`,
  },

  "labbaik-allahumma-labbaik": {
    style: S,
    content: `<p><strong>Labbaik Allahumma labbaik</strong> is the Talbiyah — the pilgrim's response to Allah's call for Hajj and Umrah. Millions recite it from the moment they enter ihram until they stone the Jamaraat (Hajj) or begin tawaf (Umrah practices vary by rite).</p>

          <div class="highlight-box">
            <strong>Quick answer:</strong> Labbaik means "I am here / at Your service." The full Talbiyah affirms that all praise, blessing and dominion belong to Allah alone, with no partner. Full Arabic and English below. Teaching children the meaning builds love for Hajj long before they go — start with <a href="/online-quran-classes-for-kids">Quran classes for kids</a>.
          </div>

          <h2 id="full">The complete Talbiyah</h2>
          <div class="verse-card">
            <span class="vnum">TALBIYAH · Bukhari &amp; Muslim</span>
            <div class="arabic">لَبَّيْكَ اللّٰهُمَّ لَبَّيْكَ، لَبَّيْكَ لَا شَرِيكَ لَكَ لَبَّيْكَ، إِنَّ الْحَمْدَ وَالنِّعْمَةَ لَكَ وَالْمُلْكَ، لَا شَرِيكَ لَكَ</div>
            <p class="translit">Labbayk Allaahumma labbayk. Labbayka laa shareeka laka labbayk. Innal-hamda wan-ni'mata laka wal-mulk. Laa shareeka lak.</p>
            <p class="trans-en"><strong>English:</strong> Here I am, O Allah, here I am. Here I am, You have no partner, here I am. Indeed all praise, favour and dominion are Yours. You have no partner.</p>
          </div>

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

          <h2 id="when">When do pilgrims recite Labbaik?</h2>
          <ul>
            <li>After entering the state of ihram.</li>
            <li>Frequently while travelling to Makkah and during the rites.</li>
            <li>Men raise their voices; women recite quietly (standard guidance).</li>
            <li>It stops at prescribed points of the Hajj/Umrah (e.g. beginning of tawaf for Umrah in common practice).</li>
          </ul>

          <h2 id="spirit">Spiritual meaning</h2>
          <p>Labbaik is not tourism — it is answering the call Ibrahim (عليه السلام) proclaimed (Quran 22:27). Each repetition renews Tawheed: no partner in worship, praise, or kingship.</p>

          <div class="highlight-box">
            <strong>Prepare hearts for Hajj with Quran.</strong> Families who recite and understand the Book feel the Talbiyah more deeply. <a href="/online-quran-classes-for-kids">Book a free kids trial</a> or <a href="/online-quran-classes-for-adults">adult class</a>.
          </div>`,
  },

  "dua-entering-leaving-home": {
    style: S,
    content: `<p>Two short prophetic duas protect the Muslim when <strong>leaving home</strong> and when <strong>entering home</strong>. They take seconds, shield from Shaytan, and bring barakah into the house — ideal habits for children.</p>

          <div class="highlight-box">
            <strong>Quick answer:</strong> Leaving: <em>Bismillahi tawakkaltu 'alallah…</em> — then it is said you are guided, sufficed and protected, and Shaytan turns away (Abu Dawud, Tirmidhi). Entering: say salaam and <em>Bismillah</em>, and recite the entering dua below. Teach kids with our <a href="/blog/duas-for-kids-to-memorize">kids duas list</a>.
          </div>

          <h2 id="leaving">Dua when leaving home</h2>
          <div class="verse-card">
            <span class="vnum">LEAVING HOME · Abu Dawud 5095, Tirmidhi 3426</span>
            <div class="arabic">بِسْمِ اللّٰهِ تَوَكَّلْتُ عَلَى اللّٰهِ وَلَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللّٰهِ</div>
            <p class="translit">Bismillaahi tawakkaltu 'alallaah, wa laa hawla wa laa quwwata illaa billaah.</p>
            <p class="trans-en"><strong>English:</strong> In the name of Allah, I place my trust in Allah, and there is no might nor power except with Allah.</p>
          </div>
          <p>The hadith states that when a person says this, it is said to them: "You have been guided, sufficed and protected," and the devil turns away from them.</p>

          <h2 id="entering">Dua when entering home</h2>
          <div class="verse-card">
            <span class="vnum">ENTERING HOME · Abu Dawud 5096</span>
            <div class="arabic">بِسْمِ اللّٰهِ وَلَجْنَا وَبِسْمِ اللّٰهِ خَرَجْنَا وَعَلَى اللّٰهِ رَبِّنَا تَوَكَّلْنَا</div>
            <p class="translit">Bismillaahi walajnaa, wa bismillaahi kharajnaa, wa 'alallaahi rabbinaa tawakkalnaa.</p>
            <p class="trans-en"><strong>English:</strong> In the name of Allah we enter, in the name of Allah we leave, and upon our Lord we place our trust.</p>
          </div>
          <p>Then say salaam to the household. Mentioning Allah's name when entering is also narrated to keep Shaytan outside (Muslim 2018 — regarding eating; scholars extend the principle of naming Allah in daily acts).</p>

          <h2 id="kids">Teach children in 3 days</h2>
          <ol>
            <li>Day 1: only "Bismillah" at the door.</li>
            <li>Day 2: add "tawakkaltu 'alallah".</li>
            <li>Day 3: full leaving dua; practice entering with salaam.</li>
          </ol>

          <div class="highlight-box">
            <strong>Want correct pronunciation from day one?</strong> A live tutor hears and fixes each word. <a href="/online-quran-classes-for-kids">Book a free 30-minute trial</a> — no credit card.
          </div>`,
  },

  "how-to-pray-witr": {
    style: S,
    content: `<p><strong>Witr</strong> is the odd-numbered prayer performed after Isha. The Prophet ﷺ never abandoned it — even while travelling — and called it a right (haqq) upon every Muslim (Abu Dawud 1416). This guide shows how to pray Witr step by step.</p>

          <div class="highlight-box">
            <strong>Quick answer:</strong> Pray Witr after Isha, before Fajr. Minimum <strong>1 rakat</strong>; most common is <strong>3 rakats</strong>. Include <a href="/blog/dua-e-qunoot-arabic-english">Dua e Qunoot</a> in the final rakat (before or after ruku' depending on madhab). Closely related: <a href="/blog/tahajjud-prayer">Tahajjud</a> — pray Tahajjud first, then Witr last.
          </div>

          <h2 id="when">When to pray Witr</h2>
          <ul>
            <li>After Isha prayer until Fajr begins.</li>
            <li>Best: last part of the night, after Tahajjud, making Witr your final prayer (Bukhari 998).</li>
            <li>If you fear you will not wake up, pray Witr before sleeping after Isha.</li>
          </ul>

          <h2 id="rakats">How many rakats?</h2>
          <table class="np-table">
            <tr><th>Number</th><th>Notes</th></tr>
            <tr><td>1</td><td>Valid minimum</td></tr>
            <tr><td>3</td><td>Most common — various methods by madhab</td></tr>
            <tr><td>5, 7, 9, 11</td><td>Also reported from the Prophet ﷺ</td></tr>
          </table>

          <h2 id="hanafi">Common 3-rakat method (Hanafi-style overview)</h2>
          <ol>
            <li>Pray two rakats like a normal sunnah, with tashahhud but <strong>without salam</strong>.</li>
            <li>Stand for a third rakat; recite Fatiha and a surah.</li>
            <li>Say Allahu Akbar and raise hands, then recite <strong>Dua e Qunoot</strong>.</li>
            <li>Complete ruku', sujood, tashahhud, and salam.</li>
          </ol>
          <p><strong>Other schools:</strong> often pray two rakats with salam, then one separate rakat; or three continuous with one tashahhud. Qunoot may be after ruku'. Follow your trusted local teacher if you follow a specific madhab.</p>

          <h2 id="qunoot">Dua e Qunoot</h2>
          <p>Full Arabic, transliteration and English are in our dedicated guide: <a href="/blog/dua-e-qunoot-arabic-english">Dua e Qunoot</a>. If you have not memorised it yet, make any sincere dua in Arabic or your language until you learn it.</p>

          <h2 id="missed">If you miss Witr</h2>
          <p>Make it up after Fajr / in the morning as qada according to many scholars — do not leave it habitually. Consistency matters more than occasional long Witr.</p>

          <div class="highlight-box">
            <strong>Learn Salah and Qunoot with live correction.</strong> NoorPath tutors teach adults and kids step by step. <a href="/online-quran-classes-for-adults">Adult free trial</a> · <a href="/online-quran-classes-for-kids">Kids free trial</a>.
          </div>`,
  },
  "online-quran-classes-cost-pricing-guide": {
    style: S,
    content: `<p>Before booking any academy, every parent asks the same question: <strong>how much do online Quran classes cost?</strong> The honest answer in 2026: anywhere from <strong>$4 to $25 per class</strong> — and the difference is rarely explained. This guide breaks down real per-hour and per-month prices, what actually changes the price, and the red flags that mean you are overpaying.</p>

          <div class="highlight-box">
            <strong>Quick answer:</strong> Most families pay <strong>$30–$80 per month</strong> for 2 classes/week of 30 minutes with a certified tutor. Hifz and Ijazah-track programs cost more; group classes cost less but progress slower. Compare with <a href="/pricing">NoorPath pricing</a> — first 30-minute trial is free, no card required.
          </div>

          <div class="stat-row">
            <div class="stat-pill"><strong>$4–25</strong><span>Per class range</span></div>
            <div class="stat-pill"><strong>$30–80</strong><span>Typical monthly</span></div>
            <div class="stat-pill"><strong>2–5×</strong><span>Classes per week</span></div>
            <div class="stat-pill"><strong>Free</strong><span>Trial class</span></div>
          </div>

          <h2 id="table">Online Quran class prices in 2026 — the real ranges</h2>
          <table class="np-table">
            <tr><th>Course type</th><th>Per 30-min class</th><th>Typical monthly (2×/week)</th><th>Notes</th></tr>
            <tr><td>Noorani Qaida (beginners)</td><td>$4–$10</td><td>$30–$60</td><td>Best starting point for kids and adult beginners</td></tr>
            <tr><td>Quran reading (Nazra)</td><td>$5–$12</td><td>$35–$70</td><td>Fluency and daily recitation</td></tr>
            <tr><td>Tajweed course</td><td>$6–$15</td><td>$40–$90</td><td>Requires a genuinely certified tutor</td></tr>
            <tr><td>Hifz (memorisation)</td><td>$8–$25</td><td>$60–$150</td><td>Needs 4–5 days/week with a Hafiz — see <a href="/hifz-quran-online">Hifz online</a></td></tr>
            <tr><td>Arabic language</td><td>$7–$18</td><td>$50–$100</td><td>Grammar-based, longer sessions</td></tr>
          </table>

          <h2 id="factors">What actually changes the price</h2>
          <ul>
            <li><strong>Tutor certification:</strong> an Ijazah-holder or Al-Azhar graduate costs more than an unverified reciter — and is worth it. See <a href="/our-tutors">how NoorPath vets tutors</a>.</li>
            <li><strong>1-on-1 vs group:</strong> group classes look cheap, but a 1-on-1 student typically progresses 2–3× faster, so cost-per-progress is usually lower.</li>
            <li><strong>Class length and frequency:</strong> 30 minutes is standard for kids; adults and Hifz students often need 45–60 minutes.</li>
            <li><strong>Female tutors:</strong> demand for <a href="/female-quran-teacher-online">certified Hafiza teachers</a> is high; some academies charge extra — NoorPath does not.</li>
            <li><strong>Your country:</strong> academies price in USD/GBP; the tutor's location matters less than their certification.</li>
          </ul>

          <h2 id="family">Family and sibling discounts</h2>
          <p>If you have 2+ children, always ask about family pricing before paying. Typical structure: <strong>2 siblings ≈ 15% off, 3 siblings ≈ 20% off, 4+ ≈ 25% off</strong> — each child still gets their own 1-on-1 class at their own level. Details on the <a href="/pricing">pricing page</a>.</p>

          <h2 id="redflags">Red flags — when you are overpaying (or worse)</h2>
          <ol>
            <li><strong>No free trial:</strong> a serious academy lets you test the tutor first.</li>
            <li><strong>Long lock-in contracts:</strong> monthly rolling plans are the fair standard.</li>
            <li><strong>"Certified" with no proof:</strong> ask which institution issued the Ijazah or degree.</li>
            <li><strong>Suspiciously cheap Hifz:</strong> real memorisation needs an experienced Hafiz 4–5 days a week — $20/month Hifz is not real Hifz.</li>
            <li><strong>Upfront yearly payment demands:</strong> pay monthly until trust is earned.</li>
          </ol>

          <h2 id="worth">Is it cheaper than a local madrasa or home tutor?</h2>
          <p>In the UK/US, in-person home Quran tutors charge <strong>£15–£30 / $20–$40 per hour</strong> plus travel constraints. Online 1-on-1 classes deliver the same certified teaching at roughly half the price, with no travel and recorded progress. That is why 12,000+ families have moved online — read the full comparison in <a href="/blog/benefits-of-online-quran-classes">benefits of online Quran classes</a>.</p>

          <div class="gold-box">
            <strong>Test before you pay anything.</strong> Book a <a href="/online-quran-classes#cta">free 30-minute trial class</a> — meet a certified tutor, see the teaching quality, then decide. No credit card required.
          </div>`,
  },
  "learn-quran-as-an-adult-never-too-late": {
    style: S,
    content: `<p>Every month, thousands of adults quietly type the same painful question into Google: <em>"am I too old to learn Quran?"</em> Some are 25, some are 40, some are 65. The answer — from teachers who have taught every age — is simple: <strong>no adult is too old to learn Quran</strong>, and most go from zero to reading within 6–12 months with the right method.</p>

          <div class="highlight-box">
            <strong>Quick answer:</strong> Adults learn Quran reading in <strong>6–12 months</strong> with two 30-minute 1-on-1 classes per week. There is no age limit, classes are completely private (no group, no judgment), and you can start from the Arabic alphabet. <a href="/online-quran-classes-for-adults">Book an adult free trial</a>.
          </div>

          <h2 id="embarrassment">The embarrassment problem — and why online solves it</h2>
          <p>The biggest barrier for adult learners is not ability — it is shame. Sitting in a madrasa next to seven-year-olds, or admitting to your community that you never learned, stops most adults before they start. A private 1-on-1 online class removes the audience entirely: it is just you and one patient tutor who teaches adults every day. Nobody else ever sees your class.</p>

          <div class="stat-row">
            <div class="stat-pill"><strong>0</strong><span>Arabic needed to start</span></div>
            <div class="stat-pill"><strong>6–12mo</strong><span>Zero → reading</span></div>
            <div class="stat-pill"><strong>1-on-1</strong><span>Fully private</span></div>
            <div class="stat-pill"><strong>Any age</strong><span>25, 40, 60, 70+</span></div>
          </div>

          <h2 id="timeline">Realistic adult timeline (from actual students)</h2>
          <table class="np-table">
            <tr><th>Phase</th><th>Duration</th><th>What you achieve</th></tr>
            <tr><td>1. Arabic letters &amp; sounds</td><td>4–8 weeks</td><td>Recognise and pronounce all 28 letters in every position</td></tr>
            <tr><td>2. Noorani Qaida</td><td>2–4 months</td><td>Joining letters, vowels, sukoon, madd — the reading system</td></tr>
            <tr><td>3. First Quran pages</td><td>1–2 months</td><td>Slow but correct recitation from the mushaf</td></tr>
            <tr><td>4. Fluency + basic Tajweed</td><td>3–5 months</td><td>Reading any page with correct rules</td></tr>
          </table>
          <p>Full method in the <a href="/blog/learn-quran-online-adult-beginner-guide">adult beginner guide</a> and the <a href="/blog/noorani-qaida-complete-guide">Noorani Qaida guide</a>.</p>

          <h2 id="age40">Learning at 40, 50 or 60 — what changes?</h2>
          <p>Adults actually hold two advantages over children: <strong>discipline and motivation</strong>. What slows adults down is inconsistency, not age. The formula that works at every age:</p>
          <ul>
            <li><strong>2 fixed classes per week</strong> — same days, same time, non-negotiable.</li>
            <li><strong>10 minutes daily self-practice</strong> — repetition beats marathon sessions.</li>
            <li><strong>One patient tutor</strong> who corrects pronunciation live — apps cannot hear your mistakes the way a teacher can.</li>
          </ul>

          <h2 id="women">For sisters: female tutors available</h2>
          <p>Many women prefer learning with a female teacher. Certified <a href="/female-quran-teacher-online">Hafiza tutors</a> teach adult sisters in fully private sessions — mornings, evenings or weekends in your timezone.</p>

          <h2 id="reward">The reward of the struggling reader</h2>
          <div class="verse-card">
            <span class="vnum">Hadith — Sahih Muslim</span>
            <p class="trans-en">"The one who recites the Quran and stumbles over it, finding it difficult, will have a double reward."</p>
          </div>
          <p>Your slow, effortful recitation is not a deficiency — it is written as double reward. Every adult who starts today is ahead of the adult who waits another year.</p>

          <div class="gold-box">
            <strong>Start privately this week.</strong> Book a <a href="/online-quran-classes-for-adults">free 30-minute adult trial</a> — tell the tutor you are starting from zero. That is exactly what they are trained for. No credit card, no group, no judgment.
          </div>`,
  },
  "new-muslim-guide-to-reading-quran": {
    style: S,
    content: `<p>You took your Shahada — congratulations, and welcome. Now the Quran sits in front of you: 604 pages, in a language you cannot yet read, with everyone giving different advice. This guide gives <strong>new Muslims and reverts</strong> a calm, step-by-step path: what to read first in English, how to learn the Arabic letters, your first three surahs, and how to find a teacher who understands converts.</p>

          <div class="highlight-box">
            <strong>Quick answer:</strong> Start by <em>reading a good English translation</em> (understanding), while separately learning the <em>Arabic letters</em> (recitation) — two parallel tracks. You need Al-Fatiha plus one short surah memorised for salah; everything else can come gradually. <a href="/online-quran-classes-for-adults">Revert-friendly tutors — free trial</a>.
          </div>

          <h2 id="tracks">The two-track method every convert should know</h2>
          <table class="np-table">
            <tr><th>Track</th><th>Goal</th><th>How</th><th>Timeline</th></tr>
            <tr><td><strong>Understanding</strong></td><td>Know what Allah says</td><td>Read English translation daily, 1–2 pages</td><td>Starts today</td></tr>
            <tr><td><strong>Recitation</strong></td><td>Read the Arabic itself</td><td>Arabic letters → <a href="/blog/noorani-qaida-complete-guide">Noorani Qaida</a> → mushaf</td><td>6–12 months</td></tr>
          </table>
          <p>Most new Muslims burn out because they try to do everything in Arabic from day one. Separate the two tracks and both become easy.</p>

          <h2 id="translation">Which English translation should you read first?</h2>
          <ul>
            <li><strong>The Clear Quran (Mustafa Khattab)</strong> — modern, flowing English; the most recommended first translation for reverts.</li>
            <li><strong>Saheeh International</strong> — precise and widely used in study circles.</li>
            <li>Start with <strong>Juz 30</strong> (the short surahs at the end) and <strong>Surah Al-Fatiha</strong> — short, powerful chapters you will also use in prayer.</li>
          </ul>

          <h2 id="first-surahs">Your first three surahs (for salah)</h2>
          <ol>
            <li><strong>Al-Fatiha</strong> — required in every unit of prayer. Full guide: <a href="/blog/surah-al-fatiha-arabic-english">Surah Al-Fatiha</a>.</li>
            <li><strong>Al-Ikhlas</strong> — 4 verses, equals a third of the Quran in reward. See <a href="/blog/surah-ikhlas-benefits">benefits</a>.</li>
            <li><strong>An-Nas</strong> — 6 verses of protection, part of the <a href="/blog/4-quls">4 Quls</a>.</li>
          </ol>
          <p>Memorise them from audio + transliteration first; a tutor then corrects your pronunciation. For prayer itself, follow the <a href="/blog/how-to-pray-salah-step-by-step">step-by-step salah guide</a> and <a href="/blog/how-to-do-wudu-step-by-step">wudu guide</a>.</p>

          <h2 id="letters">Learning the Arabic letters (it is easier than it looks)</h2>
          <p>Arabic has 28 letters. Most adults learn to recognise all of them within 4–8 weeks with two short lessons a week. Then Noorani Qaida teaches you how letters join and carry vowels — the same system used worldwide for 100+ years. From there you read the mushaf directly, slowly at first.</p>

          <h2 id="teacher">Why converts do best with a 1-on-1 teacher</h2>
          <ul>
            <li><strong>No assumed knowledge:</strong> a good tutor explains everything from zero, without the cultural shorthand born-Muslims grew up with.</li>
            <li><strong>No judgment:</strong> private classes mean you can ask "basic" questions freely — that is the whole point.</li>
            <li><strong>Correct habits from day one:</strong> pronunciation mistakes are much easier to prevent than to fix later.</li>
            <li><strong>Sisters:</strong> <a href="/female-quran-teacher-online">female tutors</a> are available for one-on-one classes.</li>
          </ul>

          <h2 id="pace">A realistic first-year plan</h2>
          <table class="np-table">
            <tr><th>Months</th><th>Focus</th></tr>
            <tr><td>1–2</td><td>English translation of Juz 30 + Al-Fatiha memorised + Arabic letters begun</td></tr>
            <tr><td>3–6</td><td>Noorani Qaida + Al-Ikhlas &amp; An-Nas + salah fully learned</td></tr>
            <tr><td>7–12</td><td>First mushaf pages + <a href="/blog/morning-evening-adhkar-dhikr">daily adhkar</a> + short surah memorisation</td></tr>
          </table>

          <div class="gold-box">
            <strong>You do not have to figure this out alone.</strong> Book a <a href="/online-quran-classes-for-adults">free 30-minute trial</a> and mention you are a new Muslim — you will be matched with a patient tutor experienced with reverts. No credit card required.
          </div>`,
  },
  "online-quran-classes-usa-kids-guide": {
    style: S,
    content: `<p>Between school, soccer practice and the 40-minute drive to the nearest masjid, American Muslim parents know the struggle: <strong>consistent Quran education is hard to maintain in the USA</strong>. Weekend Islamic school covers two hours a week; kids forget by Wednesday. This guide shows how online 1-on-1 Quran classes fit US schedules and timezones, what they cost, and the safety checklist to use before booking anything.</p>

          <div class="highlight-box">
            <strong>Quick answer:</strong> Yes — kids across all US timezones (EST, CST, MST, PST) get live 1-on-1 Quran classes after school or on weekends, with certified male or <a href="/female-quran-teacher-online">female tutors</a>. Typical cost: <strong>$35–$80/month</strong>. <a href="/online-quran-classes-for-kids">Book a free 30-minute kids trial</a>.
          </div>

          <div class="stat-row">
            <div class="stat-pill"><strong>All 50</strong><span>States covered</span></div>
            <div class="stat-pill"><strong>4–8pm</strong><span>Local after-school slots</span></div>
            <div class="stat-pill"><strong>1-on-1</strong><span>Own tutor per child</span></div>
            <div class="stat-pill"><strong>30 min</strong><span>Free trial</span></div>
          </div>

          <h2 id="timings">Class timings by US timezone</h2>
          <table class="np-table">
            <tr><th>Timezone</th><th>Popular kids slots</th><th>Weekend option</th></tr>
            <tr><td>Eastern (New York, New Jersey, Florida)</td><td>4:00–8:00 PM EST</td><td>Sat/Sun mornings</td></tr>
            <tr><td>Central (Texas, Chicago, Minnesota)</td><td>4:00–7:30 PM CST</td><td>Sat/Sun mornings</td></tr>
            <tr><td>Mountain (Denver, Phoenix)</td><td>4:00–7:00 PM MST</td><td>Sat/Sun flexible</td></tr>
            <tr><td>Pacific (California, Seattle)</td><td>3:30–7:00 PM PST</td><td>Sat/Sun mornings</td></tr>
          </table>
          <p>Because tutors teach from multiple regions, even 6 AM before-school slots are possible. City pages: <a href="/online-quran-classes/new-york">New York</a>, <a href="/online-quran-classes/houston">Houston</a>, <a href="/online-quran-classes/chicago">Chicago</a> — or see all <a href="/locations/online-quran-classes-usa">USA classes</a>.</p>

          <h2 id="weekend-school">Online classes vs Sunday school — do you need both?</h2>
          <p>They solve different problems. Sunday school gives community and Islamic environment; it rarely produces fluent Quran readers because 25 kids share one teacher for two hours a week. A 1-on-1 online class produces reading fluency because your child recites the entire lesson, every lesson. Many families keep both: Sunday school for community, online classes for actual Quran progress.</p>

          <h2 id="cost">What US families actually pay</h2>
          <ul>
            <li><strong>Group online classes:</strong> $25–$40/month — cheaper, slower progress.</li>
            <li><strong>1-on-1 online classes:</strong> $35–$80/month for 2 classes/week — the standard choice.</li>
            <li><strong>In-person home tutor (US):</strong> $25–$50 <em>per hour</em> — 3–5× the cost of online.</li>
            <li><strong>Siblings:</strong> family discounts of 15–25% — see <a href="/pricing">pricing</a> and the full <a href="/blog/online-quran-classes-cost-pricing-guide">cost guide</a>.</li>
          </ul>

          <h2 id="safety">Safety checklist for American parents</h2>
          <ol>
            <li>Classes on <strong>Zoom/Google Meet only</strong> — no private messaging apps with the child.</li>
            <li>Parents can <strong>join or observe any session</strong>, anytime, unannounced.</li>
            <li>Tutor credentials verified — Ijazah or institution certificates on request (<a href="/our-tutors">meet our tutors</a>).</li>
            <li>Option to request a <strong>female tutor</strong> for daughters.</li>
            <li>Weekly written <strong>progress reports</strong> to the parent, not just verbal claims.</li>
            <li>Monthly rolling payment — never long contracts upfront.</li>
          </ol>

          <h2 id="start">How your child starts (this week)</h2>
          <ol>
            <li>Book the <a href="/online-quran-classes-for-kids">free 30-minute trial</a> — note your child's age and state/timezone.</li>
            <li>The trial tutor assesses level: alphabet, <a href="/blog/noorani-qaida-complete-guide">Qaida</a>, reading or <a href="/blog/online-hifz-classes-for-kids">Hifz-ready</a>.</li>
            <li>Pick 2–3 fixed weekly slots that survive the school-year schedule.</li>
            <li>Same tutor every class — consistency is what Sunday school can't give.</li>
          </ol>

          <div class="gold-box">
            <strong>Try it before deciding.</strong> The <a href="/online-quran-classes-for-kids">free trial class</a> takes 30 minutes, needs no credit card, and you will know within one session if it fits your child.
          </div>`,
  },
  "how-to-choose-online-quran-teacher": {
    style: S,
    content: `<p>Hundreds of academies claim "certified tutors" and "best Quran teachers" — and most parents cannot tell the difference until months of fees are wasted. This is the <strong>12-point checklist</strong> teachers themselves would use: how to verify Ijazah claims, what to test in the trial class, and the red flags that end the conversation immediately.</p>

          <div class="highlight-box">
            <strong>Quick answer:</strong> A good online Quran teacher has (1) verifiable certification, (2) teaches 1-on-1 with live correction, (3) offers a free trial, (4) sends written progress reports, and (5) works under an academy with clear safety rules. Test all five in one <a href="/online-quran-classes#cta">free trial class</a> before paying anyone.
          </div>

          <h2 id="checklist">The 12-point checklist</h2>
          <h3>Credentials (check before the trial)</h3>
          <ol>
            <li><strong>Ijazah or institution:</strong> ask exactly which scholar or institution certified them (e.g. Al-Azhar). Vague answers = fail. See how <a href="/our-tutors">NoorPath vets tutors</a>.</li>
            <li><strong>Teaching experience with your age group:</strong> teaching a 5-year-old and a 45-year-old are different skills.</li>
            <li><strong>Language match:</strong> the tutor must explain in a language your family is comfortable with — English, Urdu, Arabic.</li>
            <li><strong>Female tutor availability</strong> if you need one for daughters or sisters — <a href="/female-quran-teacher-online">verified Hafiza teachers</a>.</li>
          </ol>

          <h3>Teaching quality (test during the trial)</h3>
          <ol start="5">
            <li><strong>Deliberate mistake test:</strong> recite a verse with one wrong harakah. A real teacher catches it instantly and corrects gently.</li>
            <li><strong>Method, not just listening:</strong> ask "what will the first 3 months look like?" — a professional describes a sequence (<a href="/blog/noorani-qaida-complete-guide">Qaida</a> → reading → <a href="/blog/tajweed-rules-complete-guide">Tajweed</a>), not vague promises.</li>
            <li><strong>Patience under repetition:</strong> ask them to re-explain one rule twice. Irritation in the trial becomes worse after payment.</li>
            <li><strong>Homework system:</strong> what does the student practise between classes, and how is it checked?</li>
          </ol>

          <h3>Academy standards (check before paying)</h3>
          <ol start="9">
            <li><strong>Free trial with the actual tutor</strong> — not a "demo teacher" who disappears after you pay.</li>
            <li><strong>Written weekly/monthly progress reports</strong> to the parent.</li>
            <li><strong>Platform safety:</strong> Zoom/Meet only, parents may observe anytime, no private chats with children.</li>
            <li><strong>Monthly rolling payments</strong> — no long lock-in, no large upfront demands. Compare rates in the <a href="/blog/online-quran-classes-cost-pricing-guide">cost guide</a>.</li>
          </ol>

          <h2 id="redflags">Instant red flags</h2>
          <table class="np-table">
            <tr><th>Red flag</th><th>Why it matters</th></tr>
            <tr><td>"Certified" but can't name the certifying body</td><td>Unverifiable claims are usually false</td></tr>
            <tr><td>No free trial offered</td><td>They don't want you testing quality first</td></tr>
            <tr><td>Pushes 6–12 month upfront payment</td><td>Locks you in before you see real teaching</td></tr>
            <tr><td>Different teacher after payment than in trial</td><td>Bait-and-switch — the most common complaint</td></tr>
            <tr><td>Contacts your child outside class hours</td><td>Safety violation — leave immediately</td></tr>
            <tr><td>No progress reports, only "he's doing great"</td><td>You cannot verify months of fees</td></tr>
          </table>

          <h2 id="questions">7 questions to ask in the first conversation</h2>
          <ol>
            <li>Which institution certified this tutor, and can I see it?</li>
            <li>Will the trial teacher be our permanent teacher?</li>
            <li>What is the exact plan for the first 3 months?</li>
            <li>How do you report progress to parents?</li>
            <li>What happens if we miss a class — make-up policy?</li>
            <li>Can I sit in on my child's classes anytime?</li>
            <li>Is pricing monthly rolling, and are there sibling discounts?</li>
          </ol>
          <p>An academy that answers all seven directly is worth trialling. For a full comparison framework, see <a href="/blog/best-online-quran-academy-guide">how to choose an online Quran academy</a>.</p>

          <div class="gold-box">
            <strong>Run the checklist on us.</strong> Book a <a href="/online-quran-classes#cta">free 30-minute trial</a>, use the deliberate-mistake test, ask all 7 questions — then decide. No credit card required.
          </div>`,
  },
  "finish-quran-in-ramadan-30-day-plan": {
    style: S,
    content: `<p>Completing the whole Quran in Ramadan — a full <strong>Khatm</strong> — sounds enormous until you see the math: the standard mushaf has <strong>604 pages across 30 juz</strong>. That is <strong>one juz (about 20 pages) per day</strong> — or just <strong>4 pages after each of the five daily prayers</strong>. This guide gives you the full 30-day plan, realistic versions for workers and parents, and what to do when you fall behind.</p>

          <div class="highlight-box">
            <strong>Quick answer:</strong> Read <strong>4 pages after every salah</strong> (5 × 4 = 20 pages = 1 juz daily) and you finish the entire Quran in exactly 30 days. If you miss a slot, add it to the next prayer — never let one missed session become a missed day.
          </div>

          <div class="stat-row">
            <div class="stat-pill"><strong>604</strong><span>Pages total</span></div>
            <div class="stat-pill"><strong>20</strong><span>Pages per day</span></div>
            <div class="stat-pill"><strong>4</strong><span>Pages per salah</span></div>
            <div class="stat-pill"><strong>30</strong><span>Days to Khatm</span></div>
          </div>

          <h2 id="plan">The classic plan: 4 pages after each prayer</h2>
          <table class="np-table">
            <tr><th>Prayer</th><th>Pages</th><th>Tip</th></tr>
            <tr><td>Fajr</td><td>4</td><td>Best focus of the day — never skip this slot</td></tr>
            <tr><td>Dhuhr</td><td>4</td><td>Lunch-break reading at work/school</td></tr>
            <tr><td>Asr</td><td>4</td><td>Before the pre-iftar rush</td></tr>
            <tr><td>Maghrib</td><td>4</td><td>After iftar settles</td></tr>
            <tr><td>Isha/Taraweeh</td><td>4</td><td>Close the day's juz before sleep</td></tr>
          </table>

          <h2 id="busy">Realistic versions for busy schedules</h2>
          <ul>
            <li><strong>Working professional:</strong> 8 pages Fajr + 4 Dhuhr + 8 after Isha. Front-load the weekend with 25 pages/day to build a buffer.</li>
            <li><strong>Mothers with young kids:</strong> 10 pages before the house wakes at suhoor time + 10 after kids sleep. If a day collapses, read a half-juz and extend two days past Eid — Khatm does not expire.</li>
            <li><strong>Students:</strong> pair each juz with lecture breaks; Juz 1–15 before the last ten nights, then slow down for worship-heavy nights.</li>
            <li><strong>Slow readers / new readers:</strong> target a <em>half Khatm</em> (2 pages per salah) with better Tajweed instead of a rushed full one — quality of recitation carries its own reward. Improve speed year-round with <a href="/learn-tajweed-online">Tajweed classes</a>.</li>
          </ul>

          <h2 id="behind">Fell behind? The catch-up rules</h2>
          <ol>
            <li><strong>Never double a whole day</strong> — 40 pages in one sitting causes burnout. Spread the missed juz as +1 page per salah over 4 days.</li>
            <li><strong>Use the last ten nights</strong> — many readers finish 2 juz on odd nights while seeking Laylatul Qadr.</li>
            <li><strong>A Khatm finished on day 33 is still a Khatm</strong> — completion beats abandonment.</li>
          </ol>

          <h2 id="dua">Dua upon completing the Quran</h2>
          <p>Many scholars recommend making dua at Khatm — it is a moment when dua is hoped to be accepted. Gather the family if you can, and ask broadly: forgiveness, steadfastness, and to be from the people of the Quran. Pair your reading with the <a href="/blog/morning-evening-adhkar-dhikr">daily adhkar routine</a> for the full Ramadan rhythm.</p>

          <h2 id="after">Keeping the Quran after Ramadan ends</h2>
          <p>The saddest pattern: 20 pages a day in Ramadan, zero in Shawwal. Lock in a smaller permanent habit before Eid:</p>
          <ul>
            <li><strong>2 pages after Fajr</strong> — a Khatm every ~10 months, forever.</li>
            <li><strong>Fix your recitation</strong> with a live teacher so reading stays enjoyable — <a href="/online-quran-classes-for-adults">adult classes</a> or <a href="/online-quran-classes-for-kids">kids classes</a>.</li>
            <li><strong>Start memorising</strong> what you kept re-reading — see <a href="/blog/how-to-memorize-quran-faster">how to memorize Quran faster</a>.</li>
          </ul>

          <div class="gold-box">
            <strong>Reading slowly or with mistakes?</strong> A certified tutor can fix your fluency and Tajweed before next Ramadan. <a href="/online-quran-classes#cta">Book a free 30-minute trial</a> — kids and adults, all timezones.
          </div>`,
  },
  "attahiyat-full-arabic-english-tashahhud": {
    style: S,
    content: `<p>You recite <strong>Attahiyat</strong> (the Tashahhud) in every sitting of every salah — at least nine times a day in the five daily prayers. Yet many Muslims were never taught its origin: these are the words exchanged between the Prophet ﷺ and Allah on the night of <strong>Mi'raj</strong>, with the angels' reply joined at the end. Here is the full Arabic, transliteration, English meaning, and how to memorize it properly.</p>

          <div class="highlight-box">
            <strong>Quick answer:</strong> Attahiyat (Tashahhud) is the dua recited while sitting in salah after every two rakats. It begins <em>At-tahiyyatu lillahi wa-s-salawatu wa-t-tayyibat…</em> and includes the Shahada. It is obligatory in the final sitting of every prayer.
          </div>

          <h2 id="full">Attahiyat full — Arabic, transliteration & English</h2>
          <div class="verse-card">
            <span class="vnum">Tashahhud</span>
            <p class="arabic">التَّحِيَّاتُ لِلَّهِ وَالصَّلَوَاتُ وَالطَّيِّبَاتُ، السَّلَامُ عَلَيْكَ أَيُّهَا النَّبِيُّ وَرَحْمَةُ اللَّهِ وَبَرَكَاتُهُ، السَّلَامُ عَلَيْنَا وَعَلَىٰ عِبَادِ اللَّهِ الصَّالِحِينَ، أَشْهَدُ أَنْ لَا إِلَٰهَ إِلَّا اللَّهُ وَأَشْهَدُ أَنَّ مُحَمَّدًا عَبْدُهُ وَرَسُولُهُ</p>
            <p class="translit">At-tahiyyatu lillahi wa-s-salawatu wa-t-tayyibat. As-salamu 'alayka ayyuha-n-nabiyyu wa rahmatullahi wa barakatuh. As-salamu 'alayna wa 'ala 'ibadillahi-s-salihin. Ash-hadu an la ilaha illallah, wa ash-hadu anna Muhammadan 'abduhu wa rasuluh.</p>
            <p class="trans-en">"All greetings, prayers and pure words are for Allah. Peace be upon you, O Prophet, and the mercy of Allah and His blessings. Peace be upon us and upon the righteous servants of Allah. I bear witness that none has the right to be worshipped except Allah, and I bear witness that Muhammad is His servant and Messenger."</p>
          </div>

          <h2 id="story">The beautiful story behind Attahiyat</h2>
          <p>Many scholars relate that these words echo the exchange of the Mi'raj: the Prophet ﷺ greeted Allah with <em>"At-tahiyyatu lillahi…"</em>, Allah replied with <em>"As-salamu 'alayka ayyuha-n-nabiyyu…"</em>, and the Prophet ﷺ — refusing to keep the greeting for himself alone — responded <em>"As-salamu 'alayna wa 'ala 'ibadillahi-s-salihin"</em>, including every righteous servant until the Day of Judgment. When you sit in Tashahhud, you join that conversation.</p>

          <h2 id="when">When exactly to recite it in salah</h2>
          <table class="np-table">
            <tr><th>Prayer</th><th>Sittings with Attahiyat</th></tr>
            <tr><td>Fajr (2 rakats)</td><td>1 — final sitting (+ Durood and dua)</td></tr>
            <tr><td>Dhuhr, Asr, Isha (4 rakats)</td><td>2 — after 2nd rakat (Attahiyat only) and final sitting</td></tr>
            <tr><td>Maghrib (3 rakats)</td><td>2 — after 2nd rakat and final sitting</td></tr>
          </table>
          <p>In the final sitting, follow Attahiyat with <a href="/blog/darood-sharif">Durood Ibrahim</a> and a closing dua before salam. Full prayer walkthrough: <a href="/blog/how-to-pray-salah-step-by-step">how to pray salah step by step</a>.</p>

          <h2 id="mistakes">Common mistakes to avoid</h2>
          <ul>
            <li><strong>Rushing the words</strong> — Tashahhud has no time pressure; recite each phrase clearly.</li>
            <li><strong>Merging words</strong> like <em>"wasalawatu-wattayyibatu"</em> into a blur — learn word-by-word once with a teacher and it stays correct for life.</li>
            <li><strong>Skipping the finger movement</strong> — raise the index finger at <em>ash-hadu an la ilaha illallah</em> (methods vary by madhab; follow your teacher).</li>
            <li><strong>Wrong pronunciation of ط and ص</strong> — heavy letters in <em>tayyibat</em> and <em>salawat</em> change meaning if softened. A quick <a href="/learn-tajweed-online">Tajweed session</a> fixes this permanently.</li>
          </ul>

          <h2 id="memorize">How to memorize Attahiyat (kids & new Muslims)</h2>
          <ol>
            <li>Split it into 4 lines (greeting → salam to Prophet → salam to believers → Shahada).</li>
            <li>Learn one line per day with audio repetition — 10 minutes daily.</li>
            <li>Recite it aloud in every practice salah for a week.</li>
            <li>Have a teacher listen once for pronunciation before it becomes habit — <a href="/online-quran-classes-for-kids">kids classes</a> and <a href="/online-quran-classes-for-adults">adult classes</a> both cover salah recitation with live correction.</li>
          </ol>

          <div class="gold-box">
            <strong>Is your salah recitation correct?</strong> In a free 30-minute class, a certified tutor listens to your Attahiyat, Fatiha and surahs and gently corrects every word. <a href="/online-quran-classes#cta">Book the free trial</a> — kids, adults and new Muslims welcome.
          </div>`,
  },
  "safar-ki-dua-travel-dua-arabic-english": {
    style: S,
    content: `<p>Whether it is the school run, a business flight or Umrah travel, the Sunnah gives us a beautiful <strong>safar ki dua (travel dua)</strong> to begin every journey — the same words the Prophet ﷺ said when he settled onto his mount. Here is the full Arabic, transliteration, English meaning, the return-journey addition, and how to teach it to children in five minutes.</p>

          <div class="highlight-box">
            <strong>Quick answer:</strong> The main travel dua is <em>Subhanalladhi sakhkhara lana hadha wa ma kunna lahu muqrinin, wa inna ila rabbina la-munqalibun</em> — "Glory be to the One who subjected this (vehicle) for us, and we could never have done it ourselves; and indeed, to our Lord we will return." Say it when your car, plane or train starts moving.
          </div>

          <h2 id="dua">Safar ki dua — full text</h2>
          <div class="verse-card">
            <span class="vnum">Quran 43:13–14</span>
            <p class="arabic">سُبْحَانَ الَّذِي سَخَّرَ لَنَا هَٰذَا وَمَا كُنَّا لَهُ مُقْرِنِينَ وَإِنَّا إِلَىٰ رَبِّنَا لَمُنقَلِبُونَ</p>
            <p class="translit">Subhanalladhi sakhkhara lana hadha wa ma kunna lahu muqrinin, wa inna ila rabbina la-munqalibun.</p>
            <p class="trans-en">"Glory be to Him who has subjected this to us, and we could never have accomplished it ourselves. And indeed, to our Lord we will surely return."</p>
          </div>
          <p>Before it, the Sunnah is to say <strong>Bismillah</strong> when boarding, and <strong>Allahu Akbar</strong> three times once seated (Sahih Muslim).</p>

          <h2 id="order">Step-by-step order when starting any journey</h2>
          <ol>
            <li><strong>Bismillah</strong> — while stepping into the car/plane.</li>
            <li><strong>Alhamdulillah</strong> — once seated.</li>
            <li><strong>Allahu Akbar × 3</strong>.</li>
            <li>The travel dua above.</li>
            <li>Optional: the Prophet's ﷺ longer dua asking for righteousness in the journey and protection for the family left behind.</li>
          </ol>

          <h2 id="return">The return-journey addition</h2>
          <div class="verse-card">
            <span class="vnum">Sahih Muslim</span>
            <p class="arabic">آيِبُونَ تَائِبُونَ عَابِدُونَ لِرَبِّنَا حَامِدُونَ</p>
            <p class="translit">Ayibuna, ta'ibuna, 'abiduna, li-rabbina hamidun.</p>
            <p class="trans-en">"We return, repenting, worshipping, and praising our Lord."</p>
          </div>
          <p>The Prophet ﷺ added these words when coming home — a reminder that every safe return is a gift.</p>

          <h2 id="plane">Is there a special airplane dua?</h2>
          <p>The same dua covers every mode of transport — camel, car, ship or aircraft. "Subjected this for us" applies even more powerfully at 40,000 feet. Many travellers also recite <a href="/blog/ayatul-kursi-arabic-english-benefits">Ayatul Kursi</a> and the <a href="/blog/4-quls">4 Quls</a> for protection during the flight.</p>

          <h2 id="kids">Teaching kids the travel dua (5-minute method)</h2>
          <ul>
            <li><strong>Car ritual:</strong> nobody drives off until the family says the dua together — kids memorise it within two weeks of school runs.</li>
            <li><strong>One line at a time:</strong> start with just <em>Subhanalladhi sakhkhara lana hadha</em>, add the rest after a week.</li>
            <li><strong>Reward chart:</strong> a star each time a child remembers first — simple and surprisingly effective.</li>
            <li>More kid-friendly duas: <a href="/blog/duas-for-kids-to-memorize">20 essential duas for kids</a> and the <a href="/courses/daily-duas-for-kids">Daily Duas course</a>.</li>
          </ul>

          <h2 id="traveller">Bonus: the traveller's dua is accepted</h2>
          <p>The Prophet ﷺ said three duas are not rejected — among them <strong>the dua of the traveller</strong> (Tirmidhi). Long journey ahead? That is your window: make dua for family, rizq, and guidance while you travel.</p>

          <div class="gold-box">
            <strong>Want your children to learn every daily dua with correct Arabic?</strong> The kids' programme covers travel, eating, sleeping and morning duas with a live tutor. <a href="/online-quran-classes-for-kids">Book a free 30-minute kids trial</a>.
          </div>`,
  },
  "inna-lillahi-wa-inna-ilayhi-rajiun-meaning": {
    style: S,
    content: `<p><strong>Inna lillahi wa inna ilayhi rajiun</strong> — you hear it at every loss: a death, an accident, bad news. But these words are far more than a condolence formula. They are a direct quote from the Quran (2:156), Allah's own prescription for grief, and the Prophet ﷺ taught that saying them at <em>any</em> loss — even a broken sandal strap — brings reward and replacement.</p>

          <div class="highlight-box">
            <strong>Quick answer:</strong> It means <strong>"Indeed, we belong to Allah, and indeed, to Him we return"</strong> (Quran 2:156). Say it upon hearing of a death or any calamity, big or small. This statement is called <em>Istirja'</em>.
          </div>

          <h2 id="arabic">Full Arabic, transliteration & meaning</h2>
          <div class="verse-card">
            <span class="vnum">Quran 2:156</span>
            <p class="arabic">إِنَّا لِلَّهِ وَإِنَّا إِلَيْهِ رَاجِعُونَ</p>
            <p class="translit">Inna lillahi wa inna ilayhi raji'un.</p>
            <p class="trans-en">"Indeed, we belong to Allah, and indeed, to Him we return."</p>
          </div>
          <p>The full verse: <em>"…who, when disaster strikes them, say: Indeed we belong to Allah, and indeed to Him we return. Those are the ones upon whom are blessings from their Lord, and mercy. And it is those who are guided."</em> (2:155–157). Allah attaches three gifts to these words: <strong>His blessings, His mercy, and guidance.</strong></p>

          <h2 id="when">When to say it</h2>
          <ul>
            <li><strong>On hearing of a death</strong> — Muslim or non-Muslim relative, friend or stranger.</li>
            <li><strong>At any calamity:</strong> job loss, illness diagnosis, accident, financial loss.</li>
            <li><strong>At small losses too:</strong> the Prophet ﷺ taught it even for minor harms — it trains the heart to return everything to its Owner.</li>
          </ul>

          <h2 id="umm-salamah">The dua that brings something better (Umm Salamah's story)</h2>
          <div class="verse-card">
            <span class="vnum">Sahih Muslim</span>
            <p class="arabic">اللَّهُمَّ أْجُرْنِي فِي مُصِيبَتِي وَأَخْلِفْ لِي خَيْرًا مِنْهَا</p>
            <p class="translit">Allahumma'jurni fi musibati wa akhlif li khayran minha.</p>
            <p class="trans-en">"O Allah, reward me in my affliction and replace it for me with something better."</p>
          </div>
          <p>Umm Salamah (RA) said these words after her husband Abu Salamah died — thinking no one could be better. Allah then married her to the <strong>Prophet ﷺ himself</strong>. Say Istirja' + this dua together at every loss.</p>

          <h2 id="reply">How to reply when someone shares sad news</h2>
          <table class="np-table">
            <tr><th>Situation</th><th>What to say</th></tr>
            <tr><td>Someone announces a death</td><td>Say "Inna lillahi wa inna ilayhi raji'un" yourself, then make dua for the deceased</td></tr>
            <tr><td>Condolence to the family</td><td>"May Allah forgive them, grant them Jannah, and give you patience (sabr jameel)"</td></tr>
            <tr><td>For a deceased Muslim</td><td>"Allahummaghfir lahu warhamhu" — O Allah, forgive and have mercy on him/her</td></tr>
          </table>
          <p>There is no fixed "reply" to Istirja' itself — respond with dua, not formalities. Related: <a href="/blog/dua-for-parents-rabbirhamhuma">dua for parents</a> and <a href="/blog/dua-for-forgiveness-istighfar">istighfar guide</a>.</p>

          <h2 id="spelling">Correct spelling (for messages)</h2>
          <p>You will see <em>innalillahiwainnailaihirojiun</em>, <em>inna lillahi wa inallah e raji un</em> and other run-together spellings. The clearest English rendering is: <strong>Inna lillahi wa inna ilayhi raji'un.</strong> When messaging condolences, adding the English meaning is a beautiful touch for younger family members who may not know it.</p>

          <h2 id="teach">Teach children the meaning, not just the words</h2>
          <p>Children repeat this phrase at funerals without understanding. Explain it simply: <em>"Everything belongs to Allah — He lent it to us, and He takes it back to Himself."</em> This one sentence builds resilience rooted in aqeedah. Structured Islamic education for kids — including duas and their meanings — is part of the <a href="/courses/islamic-studies-online">Islamic Studies course</a>.</p>

          <div class="gold-box">
            <strong>Want your family to understand what they recite?</strong> NoorPath tutors teach Quran with meaning — not just words. <a href="/online-quran-classes#cta">Book a free 30-minute trial</a> for kids or adults.
          </div>`,
  },
  "dua-before-and-after-eating": {
    style: S,
    content: `<p>Three short duas turn every meal into worship: <strong>Bismillah before eating</strong>, a special dua <strong>if you forget</strong>, and a beautiful dua of gratitude <strong>after eating</strong>. They take five seconds each — and they are usually the first duas Muslim children ever learn. Full Arabic, transliteration, meanings and Sunnah table manners below.</p>

          <div class="highlight-box">
            <strong>Quick answer:</strong> Before eating say <strong>بِسْمِ اللَّهِ (Bismillah)</strong>. If you forget and remember mid-meal, say <strong>Bismillahi awwalahu wa akhirahu</strong>. After finishing, say <strong>Alhamdulillahilladhi at'amana wa saqana wa ja'alana muslimin</strong>.
          </div>

          <h2 id="before">Dua before eating</h2>
          <div class="verse-card">
            <span class="vnum">Before eating</span>
            <p class="arabic">بِسْمِ اللَّهِ</p>
            <p class="translit">Bismillah.</p>
            <p class="trans-en">"In the name of Allah."</p>
          </div>
          <p>The Prophet ﷺ instructed: <em>"Mention Allah's name, eat with your right hand, and eat from what is nearest to you."</em> (Bukhari & Muslim). Full meaning of the phrase: <a href="/blog/bismillah-meaning-in-english">Bismillah explained</a>.</p>

          <h2 id="forgot">Forgot Bismillah? There's a dua for that</h2>
          <div class="verse-card">
            <span class="vnum">If you forget — Tirmidhi</span>
            <p class="arabic">بِسْمِ اللَّهِ أَوَّلَهُ وَآخِرَهُ</p>
            <p class="translit">Bismillahi awwalahu wa akhirahu.</p>
            <p class="trans-en">"In the name of Allah, at its beginning and at its end."</p>
          </div>
          <p>Say it the moment you remember, even halfway through the meal — the blessing covers what passed and what remains.</p>

          <h2 id="after">Dua after eating</h2>
          <div class="verse-card">
            <span class="vnum">After eating — Tirmidhi, Abu Dawud</span>
            <p class="arabic">الْحَمْدُ لِلَّهِ الَّذِي أَطْعَمَنَا وَسَقَانَا وَجَعَلَنَا مُسْلِمِينَ</p>
            <p class="translit">Alhamdulillahilladhi at'amana wa saqana wa ja'alana muslimin.</p>
            <p class="trans-en">"All praise is for Allah who fed us, gave us drink, and made us Muslims."</p>
          </div>
          <p>A shorter authentic option: <em>Alhamdulillah</em> — the Prophet ﷺ said Allah is pleased with a servant who praises Him after every bite and sip (Muslim). More on gratitude: <a href="/blog/alhamdulillah-meaning-in-english">Alhamdulillah meaning</a>.</p>

          <h2 id="sunnah">Sunnah eating etiquettes (quick list)</h2>
          <ul>
            <li>Eat with the <strong>right hand</strong>, from the side nearest you.</li>
            <li><strong>Sit</strong> to eat and drink; don't lean back arrogantly.</li>
            <li>Don't criticise food — the Prophet ﷺ never did; he simply left what he disliked.</li>
            <li>Don't blow on hot food; let it cool.</li>
            <li>Finish your plate — the last morsel carries blessing you can't see.</li>
            <li>Share: "The food of one is enough for two…" (Bukhari).</li>
          </ul>

          <h2 id="kids">Teaching kids the eating duas (the fun way)</h2>
          <ol>
            <li><strong>Family rule:</strong> the youngest says Bismillah aloud for everyone — kids love the job.</li>
            <li><strong>The "catch me" game:</strong> parents "forget" Bismillah on purpose; the child who catches it and says <em>Bismillahi awwalahu wa akhirahu</em> wins a point.</li>
            <li><strong>Print the after-eating dua</strong> on the fridge at child eye-level for the first month.</li>
            <li>These three duas are lesson one of the <a href="/courses/daily-duas-for-kids">Daily Duas for Kids course</a>, taught with live pronunciation correction. See also <a href="/blog/duas-for-kids-to-memorize">20 essential duas for kids</a>.</li>
          </ol>

          <div class="gold-box">
            <strong>Want a tutor to teach your child all the daily duas with correct Arabic?</strong> Ages 4+ welcome. <a href="/online-quran-classes-for-kids">Book a free 30-minute kids trial</a> — no credit card needed.
          </div>`,
  },
  "islamic-months-names-in-order": {
    style: S,
    content: `<p>Can you name all <strong>12 Islamic months in order</strong>? Most Muslims know Ramadan and Muharram — fewer can recite the full Hijri calendar. Yet Allah says in the Quran: <em>"Indeed, the number of months with Allah is twelve months in the register of Allah from the day He created the heavens and the earth; of these, four are sacred."</em> (At-Tawbah 9:36). Here is every month, its meaning, and the key dates inside it.</p>

          <div class="highlight-box">
            <strong>Quick answer:</strong> The 12 Islamic months in order: <strong>Muharram, Safar, Rabi al-Awwal, Rabi al-Thani, Jumada al-Awwal, Jumada al-Thani, Rajab, Sha'ban, Ramadan, Shawwal, Dhul Qa'dah, Dhul Hijjah.</strong> The four sacred months are Muharram, Rajab, Dhul Qa'dah and Dhul Hijjah.
          </div>

          <h2 id="table">All 12 Hijri months — names, meanings & key dates</h2>
          <table class="np-table">
            <tr><th>#</th><th>Month</th><th>Meaning</th><th>Key dates & events</th></tr>
            <tr><td>1</td><td><strong>Muharram</strong> 🕌</td><td>"Forbidden" — sacred month</td><td>Islamic New Year (1st); Ashura fast (10th)</td></tr>
            <tr><td>2</td><td>Safar</td><td>"Empty" — homes emptied for travel</td><td>—</td></tr>
            <tr><td>3</td><td>Rabi al-Awwal</td><td>"First spring"</td><td>Birth of the Prophet ﷺ; Hijrah arrival in Madinah</td></tr>
            <tr><td>4</td><td>Rabi al-Thani</td><td>"Second spring"</td><td>—</td></tr>
            <tr><td>5</td><td>Jumada al-Awwal</td><td>"First (month of) parched land"</td><td>—</td></tr>
            <tr><td>6</td><td>Jumada al-Thani</td><td>"Second (month of) parched land"</td><td>—</td></tr>
            <tr><td>7</td><td><strong>Rajab</strong> 🕌</td><td>"To respect" — sacred month</td><td>Isra & Mi'raj (widely commemorated 27th)</td></tr>
            <tr><td>8</td><td>Sha'ban</td><td>"Scattered" — tribes dispersed for water</td><td>The Prophet ﷺ fasted most in this month</td></tr>
            <tr><td>9</td><td><strong>Ramadan</strong> 🌙</td><td>"Scorching heat"</td><td>Month of fasting & Quran; Laylatul Qadr (last 10 nights)</td></tr>
            <tr><td>10</td><td>Shawwal</td><td>"Raised" — camels raised their tails</td><td>Eid al-Fitr (1st); six Sunnah fasts</td></tr>
            <tr><td>11</td><td><strong>Dhul Qa'dah</strong> 🕌</td><td>"Month of sitting" — no war</td><td>Sacred month before Hajj</td></tr>
            <tr><td>12</td><td><strong>Dhul Hijjah</strong> 🕌</td><td>"Month of pilgrimage"</td><td>Hajj (8th–13th); Day of Arafah (9th); Eid al-Adha (10th)</td></tr>
          </table>

          <h2 id="sacred">The four sacred months</h2>
          <p><strong>Muharram, Rajab, Dhul Qa'dah and Dhul Hijjah</strong> are the months Allah declared sacred — sins weigh heavier and good deeds carry greater reward. Three are consecutive (Dhul Qa'dah → Muharram) surrounding Hajj; Rajab stands alone in the middle of the year.</p>

          <h2 id="lunar">Why Islamic months move ~11 days each year</h2>
          <p>The Hijri calendar is <strong>lunar</strong> — each month begins with the sighting of the new crescent and lasts 29 or 30 days, giving a year of ~354 days. That is why Ramadan drifts through all seasons over a 33-year cycle: every Muslim generation experiences fasting in both summer and winter. The calendar counts from the <strong>Hijrah</strong> — the Prophet's ﷺ migration to Madinah (622 CE), chosen by Umar (RA) as year 1.</p>

          <h2 id="worship">Worship calendar — what to do in which month</h2>
          <ul>
            <li><strong>Muharram:</strong> fast the 9th–10th (Ashura) — expiates the previous year's sins.</li>
            <li><strong>Sha'ban:</strong> increase voluntary fasting, prepare for Ramadan.</li>
            <li><strong>Ramadan:</strong> fasting, Taraweeh, and a Quran <a href="/blog/finish-quran-in-ramadan-30-day-plan">Khatm plan</a>.</li>
            <li><strong>Shawwal:</strong> six fasts = reward of fasting the whole year (Muslim).</li>
            <li><strong>Dhul Hijjah:</strong> first 10 days are the best days of the year; fast Arafah (9th) if not on Hajj — see <a href="/blog/labbaik-allahumma-labbaik">Labbaik meaning</a>.</li>
          </ul>

          <h2 id="memorize">Memorization trick for kids</h2>
          <p>Group them as <strong>4-4-4</strong>: (Muharram, Safar, two Rabis) → (two Jumadas, Rajab, Sha'ban) → (Ramadan, Shawwal, two Dhuls). Sing them to a simple rhythm at bedtime for a week — most children lock all 12 in within days. Islamic calendar, duas and stories are all part of the <a href="/courses/islamic-studies-online">Islamic Studies course for kids</a>.</p>

          <div class="gold-box">
            <strong>Give your child a complete Islamic foundation</strong> — Quran, duas, and Islamic knowledge with a personal tutor. <a href="/online-quran-classes-for-kids">Book a free 30-minute trial class</a>.
          </div>`,
  },
};
