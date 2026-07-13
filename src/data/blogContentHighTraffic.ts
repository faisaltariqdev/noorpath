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
  @media (max-width: 576px) { .np-table { font-size: .82rem; } .np-table th, .np-table td { padding: 8px 9px; } .arabic { font-size: 1.55rem; line-height: 2.3; } }`;

export const highTrafficBlogContent: Record<string, { style: string; content: string }> = {
  "female-quran-teacher-for-kids": {
    style: S,
    content: `<p>Parents searching for a <strong>female Quran teacher for kids</strong> want three things: a safe learning space for daughters, a patient Hafiza who understands children, and correct Tajweed from day one. Online 1-on-1 classes make that combination available in every timezone — including UK after-school hours.</p>

          <div class="highlight-box">
            <strong>Quick answer:</strong> Yes — you can book a certified <strong>female Quran teacher (Hafiza)</strong> for girls ages 4–12 for live Zoom classes. Sessions are private, parent-monitored, and cover Noorani Qaida through Hifz. <a href="/female-quran-teacher-online">See female tutors</a> or <a href="/online-quran-classes-for-kids">book a kids free trial</a> and request a female teacher.
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
            <tr><th>Age</th><th>Session length</th><th>Focus</th></tr>
            <tr><td>4–6</td><td>20–25 min</td><td>Letters, sounds, short duas — play-based</td></tr>
            <tr><td>7–9</td><td>30 min</td><td>Noorani Qaida, Al-Fatiha, basic Tajweed</td></tr>
            <tr><td>10–12</td><td>35–45 min</td><td>Fluent reading, Tajweed, optional Hifz start</td></tr>
          </table>

          <h2 id="uk">Female Quran teacher for kids in the UK</h2>
          <p>UK families usually book <strong>4–7pm GMT/BST</strong> after school. Popular cities include London, Birmingham, Manchester, Bradford, Leeds and Leicester — but because classes are online, any UK postcode works. See also <a href="/locations/online-quran-classes-uk">online Quran classes UK</a> and city pages like <a href="/online-quran-classes/london">London</a> and <a href="/online-quran-classes/bradford">Bradford</a>.</p>

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

          <div class="highlight-box">
            <strong>Quick answer:</strong> Start Hifz when your child can read Quran with basic fluency (often ages 7–10). Online Hifz needs 5–6 short sessions per week plus home revision. <a href="/courses/hifz-program-online">Hifz program details</a> · <a href="/online-quran-classes-for-kids">kids free trial</a>.
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
            <tr><th>Layer</th><th>Meaning</th><th>Parent tip</th></tr>
            <tr><td>Sabaq</td><td>Today's new lines</td><td>Keep new portion small and solid</td></tr>
            <tr><td>Sabqi</td><td>Recent days' memorisation</td><td>Revise before adding more</td></tr>
            <tr><td>Manzil</td><td>Older completed Juz</td><td>Weekly cycle so nothing is forgotten</td></tr>
          </table>

          <h2 id="schedule">Sample weekly schedule (kids)</h2>
          <ul>
            <li>5–6 live lessons × 25–40 minutes</li>
            <li>10–15 minutes home revision on non-lesson days</li>
            <li>UK: often 5–6pm GMT after school; weekends for catch-up</li>
          </ul>

          <h2 id="pages">How many pages per day?</h2>
          <p>Ages 7–9: a few lines to half a page. Ages 10–12: half to one page when retention is strong. Quality beats speed — rushing creates weak Hifz that collapses under exam pressure.</p>

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
};
