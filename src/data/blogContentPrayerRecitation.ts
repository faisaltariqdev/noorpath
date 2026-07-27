/**
 * Prayer / ritual recitation posts — Cluster B pattern (word-for-word texts).
 * Merged into blogContent via index spread.
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
  @media (max-width: 576px) { .np-table { font-size: .82rem; } .np-table th, .np-table td { padding: 8px 9px; } .arabic { font-size: 1.55rem; line-height: 2.3; } }`;

export const prayerRecitationBlogContent: Record<string, { style: string; content: string }> = {
  "dua-e-masura-arabic-english": {
    style: S,
    content: `<p><strong>Dua-e-Masura</strong> is the familiar name many families use for a short dua often taught after the Tashahhud (Attahiyat) in Salah — especially in South Asian teaching traditions. Whether you call it Dua Masura or simply “the dua after Attahiyat,” Muslims need the Arabic text word-for-word, with clear transliteration and meaning, so they can recite calmly in the final sitting before salam.</p>

          <p>This guide gives the full Arabic, transliteration, English meaning, a simple word-by-word breakdown, when it is typically recited, and how to memorise it without rushing. For the Tashahhud text that comes before it, see <a href="/blog/attahiyat-full-arabic-english-tashahhud">Attahiyat full Arabic &amp; English</a>.</p>

          <div class="highlight-box">
            <strong>Quick answer:</strong> A widely taught post-Tashahhud dua begins <em>Allāhumma innī ẓalamtu nafsī…</em> — asking Allah for forgiveness and mercy. Learn it after Attahiyat and Salawat; keep pronunciation gentle and unhurried.
          </div>

          <h2 id="full-text">Dua-e-Masura — Arabic, transliteration &amp; English</h2>
          <div class="verse-card">
            <span class="vnum">DUA AFTER TASHAHHUD · COMMON TEXT</span>
            <div class="arabic">اللَّهُمَّ إِنِّي ظَلَمْتُ نَفْسِي ظُلْمًا كَثِيرًا، وَلَا يَغْفِرُ الذُّنُوبَ إِلَّا أَنْتَ، فَاغْفِرْ لِي مَغْفِرَةً مِنْ عِنْدِكَ، وَارْحَمْنِي، إِنَّكَ أَنْتَ الْغَفُورُ الرَّحِيمُ</div>
            <p class="translit">Allāhumma innī ẓalamtu nafsī ẓulman kathīrā, wa lā yaghfiru dh-dhunūba illā anta, faghfir lī maghfiratan min ʿindak, warḥamnī, innaka anta l-ghafūru r-raḥīm.</p>
            <p class="trans-en"><strong>English:</strong> O Allah, I have wronged myself with much wrong, and none forgives sins except You, so forgive me with forgiveness from You, and have mercy on me. Indeed, You are the Oft-Forgiving, the Most Merciful.</p>
          </div>

          <div class="gold-box">
            <p style="margin-bottom:0;"><strong>Note:</strong> Authentic collections preserve more than one beautiful dua for the final sitting of prayer. Local teachers may teach a slightly different wording. If your mosque uses another established text, keep your teacher’s version consistent — do not mix fragments from two duas mid-prayer.</p>
          </div>

          <h2 id="word-by-word">Word-by-word meaning (key phrases)</h2>
          <table class="np-table">
            <tr><th>Arabic</th><th>Transliteration</th><th>Meaning</th></tr>
            <tr><td>اللَّهُمَّ</td><td>Allāhumma</td><td>O Allah</td></tr>
            <tr><td>إِنِّي ظَلَمْتُ نَفْسِي</td><td>innī ẓalamtu nafsī</td><td>I have wronged myself</td></tr>
            <tr><td>ظُلْمًا كَثِيرًا</td><td>ẓulman kathīrā</td><td>with much wrong / many wrongs</td></tr>
            <tr><td>وَلَا يَغْفِرُ الذُّنُوبَ إِلَّا أَنْتَ</td><td>wa lā yaghfiru dh-dhunūba illā anta</td><td>and none forgives sins except You</td></tr>
            <tr><td>فَاغْفِرْ لِي</td><td>faghfir lī</td><td>so forgive me</td></tr>
            <tr><td>مَغْفِرَةً مِنْ عِنْدِكَ</td><td>maghfiratan min ʿindak</td><td>with forgiveness from You</td></tr>
            <tr><td>وَارْحَمْنِي</td><td>warḥamnī</td><td>and have mercy on me</td></tr>
            <tr><td>الْغَفُورُ الرَّحِيمُ</td><td>al-ghafūru r-raḥīm</td><td>the Oft-Forgiving, the Most Merciful</td></tr>
          </table>

          <h2 id="when">When is Dua-e-Masura recited in Salah?</h2>
          <p>In many teaching sequences, the final sitting of Salah follows this order:</p>
          <ol>
            <li><strong>Attahiyat (Tashahhud)</strong> — see the <a href="/blog/attahiyat-full-arabic-english-tashahhud">Attahiyat guide</a></li>
            <li><strong>Salawat / Darood</strong> upon the Prophet ﷺ</li>
            <li><strong>A dua</strong> such as this one (Dua-e-Masura in many curricula)</li>
            <li><strong>Salam</strong> to the right and left</li>
          </ol>
          <p>Exact obligations and recommended extras can vary by school of jurisprudence. This article teaches a commonly memorised text; for a personal ruling about what is required versus recommended in your prayer, ask a qualified local teacher.</p>

          <h2 id="memorise">How to memorise it (kids and adults)</h2>
          <ol>
            <li>Listen to a clear audio model three times before speaking</li>
            <li>Echo half the dua, then the second half</li>
            <li>Join both halves slowly</li>
            <li>Practise inside a full mock prayer sitting, not only as a flashcard</li>
            <li>Review for seven days at the same prayer time</li>
          </ol>
          <p>If hard letters (ظ، غ، خ…) slip, get live correction early — habits stick. Tajweed-aware help: <a href="/learn-tajweed-online">learn Tajweed online</a> or <a href="/online-quran-classes">online Quran classes</a>.</p>

          <h2 id="common-mistakes">Common mistakes</h2>
          <ul>
            <li>Rushing so that words blur together</li>
            <li>Mixing two different post-Tashahhud duas into one hybrid</li>
            <li>Skipping meaning entirely, then losing focus in prayer</li>
            <li>Only practising outside Salah posture — memory fails in the real sitting</li>
          </ul>

          <h2 id="closing">Closing</h2>
          <p>Dua-e-Masura is a humble conversation after witnessing faith in the Tashahhud: admitting our wrongs and asking the One who alone forgives. Learn it accurately, recite it calmly, and let its meaning soften the end of your prayer.</p>

          
          <h2 id="sequence-practice">Practice the full final-sitting sequence</h2>
          <p>Memory sticks when the dua lives inside its real neighbourhood. Practise this short sequence daily for a week:</p>
          <ol>
            <li>Attahiyat (full)</li>
            <li>Short salawat</li>
            <li>Dua-e-Masura</li>
            <li>Salam</li>
          </ol>
          <p>Do it once after Fajr practice and once before sleep. Two calm reps beat ten rushed ones. If you are teaching a child, celebrate finishing the sequence more than finishing at high speed.</p>
          <h2 id="meaning-reflection">A one-minute meaning reflection</h2>
          <p>Before you memorise another line, sit with the meaning: “I have wronged myself… none forgives except You.” This dua trains humility at the end of Salah. Adults returning to prayer after years away often find this line emotionally heavy — that is not a problem; recite slowly and honestly.</p>
          <h2 id="teacher-differences">Why your uncle’s wording may differ</h2>
          <p>Islamic teaching travelled through many regions. South Asian madrasah booklets popularised the label “Dua-e-Masura” for a specific text; other regions emphasise different authentic duas for the same slot in prayer. Both can be valid teaching choices. The practical rule is consistency: one complete dua, reviewed with a teacher, not a collage of internet screenshots.</p>


          <p>Take one line today, recite it ten calm times, and revisit tomorrow. Steady worship literacy is built in ordinary weeks — not only in moments of urgency or high emotion.</p>
          <p>If you share this with family, practise together once, then let each person rehearse privately so nobody feels tested in public.</p>
          <p>If you share this with family, practise together once, then let each person rehearse privately so nobody feels tested in public.</p>
          <p>Keep a simple notebook line: date, text practised, and one pronunciation target for the next session with a teacher.</p>
          
          <h2 id="chunking">Chunking script for the first three days</h2>
          <table class="np-table">
            <tr><th>Day</th><th>Chunk</th><th>Goal</th></tr>
            <tr><td>1</td><td>Allāhumma innī ẓalamtu nafsī ẓulman kathīrā</td><td>Smooth, no rush</td></tr>
            <tr><td>2</td><td>wa lā yaghfiru dh-dhunūba illā anta, faghfir lī…</td><td>Connect to day-1 chunk</td></tr>
            <tr><td>3</td><td>Full dua + salam practice in sitting posture</td><td>Use inside mock prayer</td></tr>
          </table>
          <p>Parents can tap a table lightly for each phrase so children feel rhythm without racing. Adults should record themselves once and compare to a reliable audio model — not to chase studio perfection, but to catch missing words.</p>
          <h2 id="salah-literacy">Build Salah literacy as a stack</h2>
          <p>Think of prayer texts as a stack: opening takbir habits, Al-Fatiha, short surah, Attahiyat, salawat, then this dua. Skipping the middle layers makes the top layer unstable. If your Fatiha is shaky, repair that before obsessing over speed in Dua-e-Masura. A tutor can sequence this kindly in live lessons.</p>


          <p>Return to this page whenever you need the Arabic in one calm place — accuracy and humility matter more than finishing the memorisation in a single evening.</p>
          <p>When you can, ask a qualified tutor to listen once — a two-minute correction early prevents years of mumbled habit.</p>
          <p>Additional calm repetition on day 4 should focus on clarity of each word, not on increasing speed or volume.</p>
          <p>Additional calm repetition on day 5 should focus on clarity of each word, not on increasing speed or volume.</p>
          <p>Additional calm repetition on day 6 should focus on clarity of each word, not on increasing speed or volume.</p>
          <h2 id="faq">Frequently asked questions</h2>
          <details class="faq-acc"><summary>Is Dua-e-Masura the only dua after Attahiyat?<span>+</span></summary>
            <p>No. Several authentic duas are taught for the final sitting. Stick to one complete version your teacher prefers.</p>
          </details>
          <details class="faq-acc"><summary>Do I recite it in every prayer?<span>+</span></summary>
            <p>Many Muslims recite a dua after Tashahhud in the final sitting of each obligatory prayer. Follow your school’s guidance on what is required versus recommended.</p>
          </details>
          <details class="faq-acc"><summary>Can children learn this before perfect Tajweed?<span>+</span></summary>
            <p>Yes — start with listening and clear chunks, then refine sounds with a tutor over time.</p>
          </details>
          <details class="faq-acc"><summary>Should I learn Attahiyat first?<span>+</span></summary>
            <p>Yes. Learn Tashahhud first, then Salawat, then this dua, so the sitting sequence feels natural.</p>
          </details>
          <details class="faq-acc"><summary>Where can I get live pronunciation help?<span>+</span></summary>
            <p>Book a free trial for live 1-to-1 correction via online Quran classes — mention you want Salah duas checked.</p>
          </details>`,
  },

  "salatul-janazah-funeral-prayer-guide": {
    style: S,
    content: `<p><strong>Salat al-Janazah</strong> (the funeral prayer) is the communal prayer Muslims offer for a deceased believer. It is distinct from the five daily prayers: there is no bowing (ruku) or prostration (sujood) in the Janazah prayer itself. Families and attendees need a clear step-by-step sequence and the core Arabic texts so they can participate with confidence during a difficult moment.</p>

          <p>This guide explains the common structure of Salat al-Janazah, the Arabic for the main components, transliteration, English meaning, and practical etiquette. Local practice can vary by school of law and community custom — when in doubt, follow the imam leading the prayer.</p>

          <div class="highlight-box">
            <strong>Quick answer:</strong> Salat al-Janazah is usually prayed standing with <strong>four takbirs</strong>. After the first, recite Al-Fatiha (as taught in your school); after the second, send salawat upon the Prophet ﷺ; after the third, make dua for the deceased; after the fourth, conclude with salam. There is no ruku or sujood.
          </div>

          <h2 id="steps">Step-by-step: how Salat al-Janazah is commonly prayed</h2>
          <ol>
            <li><strong>Intention and standing:</strong> Stand in rows facing the Qiblah with the deceased positioned as per local custom (often in front of the congregation).</li>
            <li><strong>First takbir:</strong> Raise the hands (as your school teaches) and say <em>Allāhu Akbar</em>. Then recite <strong>Surah Al-Fatiha</strong> (widely taught after the first takbir).</li>
            <li><strong>Second takbir:</strong> Say <em>Allāhu Akbar</em>, then recite salawat upon the Prophet ﷺ (often the same Ibrahimic salawat used in Salah).</li>
            <li><strong>Third takbir:</strong> Say <em>Allāhu Akbar</em>, then make dua for the deceased (and often for all Muslim deceased).</li>
            <li><strong>Fourth takbir:</strong> Say <em>Allāhu Akbar</em>, then end with salam (typically to the right; some communities include both sides — follow the imam).</li>
          </ol>

          <h2 id="fatiha">After the first takbir — Surah Al-Fatiha</h2>
          <p>Many communities recite Al-Fatiha after the first takbir. Full verse-by-verse help: <a href="/blog/surah-al-fatiha-arabic-english">Surah Al-Fatiha Arabic &amp; English</a> and the kids teaching guide <a href="/blog/how-to-teach-surah-al-fatiha-to-kids">how to teach Al-Fatiha to kids</a>.</p>

          <h2 id="salawat">After the second takbir — Salawat (example)</h2>
          <div class="verse-card">
            <span class="vnum">SALAWAT · COMMON IBRAHIMIC FORM</span>
            <div class="arabic">اللَّهُمَّ صَلِّ عَلَىٰ مُحَمَّدٍ وَعَلَىٰ آلِ مُحَمَّدٍ، كَمَا صَلَّيْتَ عَلَىٰ إِبْرَاهِيمَ وَعَلَىٰ آلِ إِبْرَاهِيمَ، إِنَّكَ حَمِيدٌ مَجِيدٌ</div>
            <p class="translit">Allāhumma ṣalli ʿalā Muḥammadin wa ʿalā āli Muḥammad, kamā ṣallayta ʿalā Ibrāhīma wa ʿalā āli Ibrāhīm, innaka ḥamīdun majīd.</p>
            <p class="trans-en"><strong>English:</strong> O Allah, send prayers upon Muhammad and upon the family of Muhammad, as You sent prayers upon Ibrahim and upon the family of Ibrahim. Indeed, You are Praiseworthy, Glorious.</p>
          </div>
          <p>Related reading: <a href="/blog/darood-sharif">Darood Sharif</a>.</p>

          <h2 id="dua-deceased">After the third takbir — dua for the deceased (common example)</h2>
          <div class="verse-card">
            <span class="vnum">DUA FOR THE DECEASED · WIDELY TAUGHT EXAMPLE</span>
            <div class="arabic">اللَّهُمَّ اغْفِرْ لَهُ وَارْحَمْهُ وَعَافِهِ وَاعْفُ عَنْهُ</div>
            <p class="translit">Allāhumma ighfir lahu warḥamhu wa ʿāfihi waʿfu ʿanhu.</p>
            <p class="trans-en"><strong>English:</strong> O Allah, forgive him, have mercy on him, grant him well-being, and pardon him.</p>
          </div>
          <p>Longer authentic duas for the deceased are also taught. If the deceased is female, Arabic pronouns are adjusted accordingly in many teaching traditions. Follow the imam’s wording when praying in congregation.</p>

          <h2 id="etiquette">Etiquette and practical notes</h2>
          <ul>
            <li>Stand in straight rows; keep phones silent</li>
            <li>If you do not know the longer dua, still join the takbirs and make a sincere short dua in your heart/language as your teachers allow</li>
            <li>Janazah is a time for humility — avoid loud conversation near the rows</li>
            <li>Women’s participation practices vary by community; follow local guidance respectfully</li>
          </ul>

          <h2 id="children">Helping older children understand Janazah</h2>
          <p>Older children may attend a Janazah. Prepare them gently: explain that we pray for Allah’s mercy for the person who has died, that we stand with the community, and that crying quietly is human. Do not force young children into overwhelming crowds.</p>

          <h2 id="closing">Closing</h2>
          <p>Salat al-Janazah is love expressed as prayer: standing for someone who can no longer stand for themselves. Learn the sequence before you need it, keep the dua sincere, and let the imam lead when you are unsure of a local detail.</p>
          <p>To strengthen core Salah texts (Fatiha, Attahiyat, duas) with live help, see <a href="/online-quran-classes">online Quran classes</a>.</p>

          
          <h2 id="before-you-arrive">Before you arrive at a Janazah</h2>
          <ul>
            <li>Make wudu if you can</li>
            <li>Dress modestly and simply</li>
            <li>Silence your phone</li>
            <li>Review Al-Fatiha and a short dua for the deceased</li>
            <li>Intend to follow the imam if unsure</li>
          </ul>
          <h2 id="after-prayer">After the prayer</h2>
          <p>Communities differ on whether additional collective duas are made after salam. Follow local practice without arguing at the graveside. Your presence, humility, and private dua matter. If you are hosting arrangements for a family member, appoint one knowledgeable person to coordinate with the mosque so guests are not confused about timing.</p>
          <h2 id="learning-ahead">Learn ahead — not only in crisis</h2>
          <p>The worst time to learn Janazah structure is the day of a funeral. Spend one evening this month reviewing the four takbirs and memorising a short dua. Pair it with strong Fatiha — the same foundation used in every Salah.</p>
          <p>Related prayer literacy: <a href="/blog/inna-lillahi-wa-inna-ilayhi-rajiun-meaning">Inna lillahi wa inna ilayhi rajiun</a> for the words Muslims say upon hearing of a death.</p>


          <p>Take one line today, recite it ten calm times, and revisit tomorrow. Steady worship literacy is built in ordinary weeks — not only in moments of urgency or high emotion.</p>
          <p>If you share this with family, practise together once, then let each person rehearse privately so nobody feels tested in public.</p>
          <p>If you share this with family, practise together once, then let each person rehearse privately so nobody feels tested in public.</p>
          <p>Keep a simple notebook line: date, text practised, and one pronunciation target for the next session with a teacher.</p>
          
          <h2 id="imam-follow">Golden rule: follow the imam</h2>
          <p>Janazah gatherings include people from many backgrounds. Some raise hands for every takbir; some do not. Some make a longer dua after the third takbir; some keep it short. Arguing in the row helps nobody. Make your intention, follow the imam’s takbirs, and keep your heart in dua. Learn preferred details later with a teacher, not during the prayer.</p>
          <h2 id="women-notes">Notes for sisters</h2>
          <p>Participation norms for women at Janazah prayers and burials vary widely by culture and scholarly advice. If you are unsure what your local mosque expects, ask a knowledgeable sister or the mosque office ahead of time. The goal is dignity for the deceased and ease for the family — not public debate.</p>
          <h2 id="dua-english">If Arabic feels far away in grief</h2>
          <p>Grief shrinks memory. If Arabic leaves you in the moment, still stand with the community and ask Allah for mercy in the language of your heart between takbirs as your teachers permit. Afterwards, slowly rebuild a short memorised Arabic dua so next time you have both presence and words.</p>


          <p>Return to this page whenever you need the Arabic in one calm place — accuracy and humility matter more than finishing the memorisation in a single evening.</p>
          <h2 id="faq">Frequently asked questions</h2>
          <details class="faq-acc"><summary>Is there ruku or sujood in Janazah prayer?<span>+</span></summary>
            <p>No. The funeral prayer is performed standing with takbirs; it does not include bowing or prostration like the daily prayers.</p>
          </details>
          <details class="faq-acc"><summary>How many takbirs are in Salat al-Janazah?<span>+</span></summary>
            <p>The common practice is four takbirs. Follow the imam leading the prayer.</p>
          </details>
          <details class="faq-acc"><summary>What if I do not memorise the long dua?<span>+</span></summary>
            <p>Join the congregation, say the takbirs, and make a sincere short dua for the deceased. Learn a standard text when you can.</p>
          </details>
          <details class="faq-acc"><summary>Is Janazah prayer obligatory on every individual?<span>+</span></summary>
            <p>It is widely described as a communal obligation (fard kifayah): if some of the community perform it, the duty is fulfilled for the rest. Ask a local scholar for personal circumstances.</p>
          </details>
          <details class="faq-acc"><summary>Can I learn funeral prayer texts online?<span>+</span></summary>
            <p>Yes as preparation — but when attending, follow the imam. Live tutors can also help you memorise Fatiha and salawat clearly beforehand.</p>
          </details>`,
  },

  "sajdah-tilawat-dua-arabic-english": {
    style: S,
    content: `<p><strong>Sajdah al-Tilawah</strong> is the prostration of recitation — a sajdah performed when certain verses of the Quran are recited or heard. Muslims often search for the <strong>sajdah tilawat dua</strong> in Arabic with transliteration and English meaning so they know what to say in that prostration.</p>

          <p>This guide covers a commonly taught dua for sajdah tilawah, when the prostration is made, and simple steps. Details of obligation versus recommendation can differ by school of jurisprudence; follow a trusted teacher for your personal practice.</p>

          <div class="highlight-box">
            <strong>Quick answer:</strong> In sajdah tilawah, many Muslims recite a dua beginning <em>Sajada wajhiya lilladhī khalaqahu…</em> (“My face has prostrated to the One who created it…”). Say <em>Allāhu Akbar</em> when going down and when rising, as your school teaches.
          </div>

          <h2 id="dua">Sajdah Tilawat dua — Arabic, transliteration &amp; English</h2>
          <div class="verse-card">
            <span class="vnum">SAJDAH AL-TILAWAH · COMMON DUA</span>
            <div class="arabic">سَجَدَ وَجْهِيَ لِلَّذِي خَلَقَهُ وَشَقَّ سَمْعَهُ وَبَصَرَهُ بِحَوْلِهِ وَقُوَّتِهِ</div>
            <p class="translit">Sajada wajhiya lilladhī khalaqahu wa shaqqa samʿahu wa baṣarahu biḥawlihi wa quwwatih.</p>
            <p class="trans-en"><strong>English:</strong> My face has prostrated to the One who created it, and brought forth its hearing and its sight, by His power and strength.</p>
          </div>

          <div class="gold-box">
            <p style="margin-bottom:0;"><strong>Variation note:</strong> Some authentic reports include additional phrases (for example mentioning that He is the most excellent of creators). Teachers may also instruct saying <em>Subḥāna rabbiyal-aʿlā</em> as in ordinary sajdah. Keep one consistent practice from a reliable teacher rather than mixing every version you find online.</p>
          </div>

          <h2 id="word-by-word">Word-by-word meaning</h2>
          <table class="np-table">
            <tr><th>Arabic</th><th>Transliteration</th><th>Meaning</th></tr>
            <tr><td>سَجَدَ وَجْهِيَ</td><td>Sajada wajhiya</td><td>My face has prostrated</td></tr>
            <tr><td>لِلَّذِي خَلَقَهُ</td><td>lilladhī khalaqahu</td><td>to the One who created it</td></tr>
            <tr><td>وَشَقَّ سَمْعَهُ وَبَصَرَهُ</td><td>wa shaqqa samʿahu wa baṣarahu</td><td>and brought forth its hearing and sight</td></tr>
            <tr><td>بِحَوْلِهِ وَقُوَّتِهِ</td><td>biḥawlihi wa quwwatih</td><td>by His power and strength</td></tr>
          </table>

          <h2 id="when">When is sajdah tilawah performed?</h2>
          <p>Certain Quranic verses are known as verses of sajdah (ayat as-sajdah). When a reciter reaches one — in Salah or outside Salah — a prostration of tilawah may be performed according to the rules of one’s school. The exact list of verses and the ruling (required vs recommended) should be learned from a qualified teacher; do not rely on memory of a blog list alone for worship rulings.</p>

          <h2 id="how">How to perform it (general outline)</h2>
          <ol>
            <li>When you reach a sajdah verse (or hear it, according to your school’s rules), prepare for prostration</li>
            <li>Say <em>Allāhu Akbar</em> and go into sajdah (details of hand-raising vary)</li>
            <li>Recite the sajdah tilawah dua (or the dhikr your teacher taught)</li>
            <li>Say <em>Allāhu Akbar</em> and rise</li>
            <li>If you were reciting outside Salah, you may continue; if inside Salah, follow your school’s method for continuing the prayer</li>
          </ol>

          <h2 id="tips">Practical tips</h2>
          <ul>
            <li>If you are unsure whether a verse requires sajdah, pause and check a marked mushaf later rather than guessing mid-recitation in public</li>
            <li>Teach children the dua slowly after they are comfortable with ordinary sajdah dhikr</li>
            <li>Live Quran lessons help you recognise sajdah markings in the mushaf — see <a href="/learn-tajweed-online">Tajweed classes</a> and <a href="/online-quran-classes">online Quran classes</a></li>
          </ul>

          <h2 id="related">Related prayer texts</h2>
          <ul>
            <li><a href="/blog/attahiyat-full-arabic-english-tashahhud">Attahiyat (Tashahhud)</a></li>
            <li><a href="/blog/dua-e-masura-arabic-english">Dua-e-Masura</a></li>
            <li><a href="/blog/how-to-pray-salah-step-by-step">How to pray Salah step by step</a></li>
          </ul>

          <h2 id="closing">Closing</h2>
          <p>Sajdah tilawah is a bodily “ameen” to the Quran’s call to humility. Learn a clear dua, keep your practice consistent with a trusted teacher, and let the prostration be unhurried — one sincere sajdah is better than a rushed blur of words.</p>

          
          <h2 id="mushaf-marks">How mushafs mark sajdah verses</h2>
          <p>Most printed mushafs place a symbol near sajdah verses. Learn your mushaf’s legend once. When reading to children, pause and explain: “This mark means we may make a special prostration.” Turning marks into fear (“if you miss it you are sinful”) is usually unhelpful for kids — teach curiosity and ask a teacher for rulings.</p>
          <h2 id="outside-vs-inside">Outside Salah vs inside Salah</h2>
          <p>Performing sajdah tilawah while you are already inside a prayer has additional method details (when to go down, how to resume). Those details are school-specific. This article will not invent a universal method. If you recite Quran in Tarawih or in a Hifz class, ask the leading teacher what they want students to do when a sajdah verse appears.</p>
          <h2 id="memorise-dua">Memorise the dua in three days</h2>
          <ol>
            <li>Day 1: listen and echo the first half only</li>
            <li>Day 2: add the second half</li>
            <li>Day 3: recite in an actual sajdah posture once</li>
          </ol>
          <p>Posture memory matters. Flashcards alone often fail when the forehead reaches the ground.</p>


          <p>Take one line today, recite it ten calm times, and revisit tomorrow. Steady worship literacy is built in ordinary weeks — not only in moments of urgency or high emotion.</p>
          <p>If you share this with family, practise together once, then let each person rehearse privately so nobody feels tested in public.</p>
          <p>If you share this with family, practise together once, then let each person rehearse privately so nobody feels tested in public.</p>
          <p>Keep a simple notebook line: date, text practised, and one pronunciation target for the next session with a teacher.</p>
          
          <h2 id="listening">If you hear a sajdah verse while listening</h2>
          <p>Sometimes you are listening to a reciter (in person or recording) when a sajdah verse occurs. Schools differ on whether a listener should perform sajdah tilawah in that situation. Do not invent a rule from a blog. Ask your local teacher what they recommend for common cases: mosque recitation, Quran class, and recordings at home.</p>
          <h2 id="kids-tilawah">Teaching children without fear</h2>
          <p>Children love discovering mushaf symbols. Keep the tone wondrous: “Allah invites us to lower ourselves here.” Practise the dua at home on a prayer mat once a week. If a child forgets mid-sajdah, quietly prompt one phrase — do not scold. Love of Quran grows in safety.</p>
          <h2 id="hifz-class">In Hifz class</h2>
          <p>Hifz students meet sajdah verses more often. Agree a class protocol with the tutor: who says the takbir, whether students all go to sajdah, and how quickly to resume. Clear protocol prevents awkward mid-lesson confusion.</p>


          <p>Return to this page whenever you need the Arabic in one calm place — accuracy and humility matter more than finishing the memorisation in a single evening.</p>
          <p>When you can, ask a qualified tutor to listen once — a two-minute correction early prevents years of mumbled habit.</p>
          <p>Additional calm repetition on day 4 should focus on clarity of each word, not on increasing speed or volume.</p>
          <p>Additional calm repetition on day 5 should focus on clarity of each word, not on increasing speed or volume.</p>
          <p>Additional calm repetition on day 6 should focus on clarity of each word, not on increasing speed or volume.</p>
          <p>Additional calm repetition on day 7 should focus on clarity of each word, not on increasing speed or volume.</p>
          <h2 id="faq">Frequently asked questions</h2>
          <details class="faq-acc"><summary>Is sajdah tilawah the same as sajdah in normal Salah?<span>+</span></summary>
            <p>It is also a prostration, but it is tied to specific Quran verses of tilawah. The dua commonly taught for it can differ from the usual “Subhana rabbiyal-a’la” alone.</p>
          </details>
          <details class="faq-acc"><summary>What if I do not know the special dua?<span>+</span></summary>
            <p>Ask your teacher what to say. Many begin by using the familiar sajdah dhikr while they memorise the longer tilawah dua.</p>
          </details>
          <details class="faq-acc"><summary>Do I need wudu for sajdah tilawah?<span>+</span></summary>
            <p>Purity rules can depend on whether you are in Salah and on your school’s guidance. Learn this from a qualified teacher rather than from a short article alone.</p>
          </details>
          <details class="faq-acc"><summary>How many sajdah verses are in the Quran?<span>+</span></summary>
            <p>Classical works list a set of sajdah verses; counts and emphasis can vary slightly by school. Use a mushaf that marks them and confirm with a teacher.</p>
          </details>
          <details class="faq-acc"><summary>Can I practise this with an online tutor?<span>+</span></summary>
            <p>Yes. A tutor can help you recognise sajdah markings and recite the dua clearly during Quran reading lessons.</p>
          </details>`,
  },
};
