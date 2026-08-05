/**
 * Problem-solving commercial blogs — parent/student lead intent.
 * Honest fixes, soft trial CTAs, no invented outcomes.
 */

import { CANCELLATION_NOTICE_DAYS, PRICING_PLANS, TRIAL } from "@/lib/academyFacts";

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
  .toc { background: var(--ivory); border: 1px solid var(--border); border-radius: 12px; padding: 18px 22px; margin: 24px 0; }
  .toc strong { display: block; margin-bottom: 10px; color: var(--charcoal); }
  .toc ol { margin: 0 0 0 18px; }
  .toc li { margin-bottom: 6px; }
  .faq-acc { border: 1px solid var(--border); border-radius: 10px; margin-bottom: 12px; overflow: hidden; }
  .faq-acc summary { padding: 16px 20px; font-weight: 700; cursor: pointer; background: var(--ivory); color: var(--charcoal); list-style: none; display: flex; justify-content: space-between; align-items: center; font-size: .95rem; }
  .faq-acc summary::-webkit-details-marker { display: none; }
  .faq-acc summary span { color: var(--emerald); margin-left: 12px; }
  .faq-acc p { padding: 16px 20px; margin: 0; color: #374151; font-size: .92rem; line-height: 1.75; border-top: 1px solid var(--border); }
  @media (max-width: 576px) { .np-table { font-size: .82rem; } .np-table th, .np-table td { padding: 8px 9px; } }`;

export const problemSolvingLeadsBlogContent: Record<string, { style: string; content: string }> = {
  "child-forgets-quran-between-classes": {
    style: S,
    content: `<p>Parents searching <strong>child forgets Quran between classes</strong> often feel stuck: the lesson went well on Tuesday, but by Wednesday the letters are gone. That is not laziness — it is how memory works when new Arabic decoding has no spaced review. The fix is a small, predictable <strong>Quran retention between lessons</strong> system, not longer shouting sessions.</p>

          <div class="highlight-box">
            <strong>Quick answer:</strong> If your child forgets Qaida overnight, add a 5–10 minute same-day echo after class, a next-morning micro-review before school, and one fixed mushaf spot. Live tutors should assign tiny homework with a parent echo script. Test a retention-friendly rhythm with a free <a href="/free-quran-classes-online">${TRIAL.durationMinutes}-minute trial</a> on <a href="/online-quran-classes-for-kids">kids classes</a>.
          </div>

          <div class="toc">
            <strong>In this guide</strong>
            <ol>
              <li><a href="#why">Why children forget between lessons</a></li>
              <li><a href="#diagnosis">Diagnosis table</a></li>
              <li><a href="#fixes">Practical fix steps</a></li>
              <li><a href="#tutor">When to get tutor help</a></li>
              <li><a href="#start">Start with a trial</a></li>
              <li><a href="#faq">FAQ</a></li>
            </ol>
          </div>

          <h2 id="why">Why children forget Quran between classes</h2>
          <p>Arabic letter recognition is still fragile for many beginners. Without same-day repetition, the brain treats the lesson as a one-off event. Gaps of four or five days between live classes make overnight forgetting normal — especially if the child is tired, switching mushaf editions, or getting zero structured echo at home.</p>
          <p>This is different from a child who refuses to sit — see <a href="/blog/child-wont-sit-for-quran-class">child won’t sit for Quran class</a>. Here the child may want to learn but simply cannot retrieve yesterday’s page alone.</p>

          <h2 id="diagnosis">Diagnosis — what is actually breaking retention?</h2>
          <table class="np-table">
            <tr><th>What you notice</th><th>Likely cause</th><th>First lever</th></tr>
            <tr><td>Forgets overnight but recalls with one prompt</td><td>Normal new learning — weak retrieval path</td><td>Same-day 5-minute echo + morning repeat</td></tr>
            <tr><td>Forgets specific letters (ayn, qaf, dha)</td><td>Makharij not stable yet</td><td>Letter drills — <a href="/blog/hard-arabic-letters-for-kids-makharij">hard Arabic letters</a></td></tr>
            <tr><td>Remembers in class, blank at home</td><td>Context dependency — only tutor voice triggers memory</td><td>Parent reads tutor’s echo notes aloud</td></tr>
            <tr><td>Forgets everything after a 5+ day gap</td><td>Class frequency too low for stage</td><td>Consider Standard rhythm ($${PRICING_PLANS[1].monthlyPriceUsd}/mo) — see <a href="/pricing">pricing</a></td></tr>
            <tr><td>Reads fine until a new surah appears</td><td>Jumped to Quran before Qaida fluency</td><td><a href="/blog/how-long-does-noorani-qaida-take">how long Qaida takes</a></td></tr>
          </table>

          <h2 id="fixes">Practical fix steps (parent-friendly)</h2>
          <h3>Step 1 — Protect the same-day window</h3>
          <p>Within two hours of class, sit for five minutes. The tutor’s target page only — no new material. Ask the child to read while you listen silently. End with one specific praise (“your alif-lam was clearer today”).</p>
          <h3>Step 2 — Morning micro-review before school</h3>
          <p>Three minutes at breakfast beats a 30-minute Sunday cram. Same page, same mushaf, same corner. Consistency builds <strong>Quran retention between lessons</strong> faster than weekend marathons.</p>
          <h3>Step 3 — One echo sheet from the tutor</h3>
          <p>After each lesson the tutor should leave: page number, two lines to repeat, one sound to watch. If homework is vague, ask explicitly — parents who don’t speak Arabic still succeed with a script: <a href="/blog/parents-dont-speak-arabic-child-learn-quran">parents who don’t speak Arabic</a>.</p>
          <h3>Step 4 — Match class frequency to fragility</h3>
          <p>Beginners who forget Qaida overnight often need twice-weekly live touchpoints. Starter ($${PRICING_PLANS[0].monthlyPriceUsd}/mo) works once foundations stabilise; until then, Standard-style frequency prevents re-teaching the same page every week. Frequency guide: <a href="/blog/how-many-quran-classes-per-week">classes per week</a>.</p>
          <h3>Step 5 — Build a home routine that sticks</h3>
          <p>Layer this onto a calm weekly rhythm — not a battle: <a href="/blog/quran-practice-routine-at-home-kids">Quran practice routine at home for kids</a>.</p>

          <h3>Step 6 — Track retention, not vanity pages</h3>
          <p>Keep a one-line log on the fridge: date, page, “remembered / needed prompt / re-taught.” After two weeks you will see whether the gap is frequency, letter-level gaps, or tutor homework clarity — not whether your child “ lacks focus.”</p>

          <div class="gold-box">
            <strong>Do not promise:</strong> “memorise the page in one night” or punish forgetting. Shame shuts retrieval down. Correct gently and repeat tomorrow.
          </div>

          <h2 id="tutor">When to get a tutor involved (not just more drilling)</h2>
          <ul>
            <li>Same page re-taught for three or more weeks with no carry-over</li>
            <li>Child melts down whenever home echo starts — may need shorter live lessons first</li>
            <li>Tutor assigns no homework or changes targets every session without notes</li>
            <li>Letter-level errors persist — tutor should slow Qaida, not push surah speed</li>
          </ul>
          <p>Choosing well upfront helps: <a href="/blog/how-to-choose-online-quran-teacher">how to choose an online Quran teacher</a>. If fit is wrong after a fair trial, see <a href="/blog/when-to-change-your-online-quran-tutor">when to change your tutor</a>.</p>

          <h2 id="start">Start with a retention-focused trial</h2>
          <p>Tell the academy: “My child forgets between classes — please assess echo homework and class frequency.” Trial is ${TRIAL.durationMinutes} minutes, no credit card. ${TRIAL.availabilityNote} <a href="/free-quran-classes-online">Book a free trial</a> · <a href="/online-quran-classes-for-kids">online Quran classes for kids</a> · <a href="/learn-quran-online">learn Quran online</a>.</p>

          <h2 id="faq">FAQ</h2>
          <details class="faq-acc"><summary>Is it normal for a child to forget Qaida overnight?<span>+</span></summary>
            <p>Yes for beginners. Arabic decoding is new muscle memory. Same-day and next-morning micro-reviews usually fix this within a few weeks when done consistently.</p>
          </details>
          <details class="faq-acc"><summary>How long should home echo be?<span>+</span></summary>
            <p>Five to ten minutes for most young learners. Stop before frustration. Two short sessions beat one long fight.</p>
          </details>
          <details class="faq-acc"><summary>Should we pause classes until memory improves?<span>+</span></summary>
            <p>Usually no — pause only if every session becomes traumatic. Instead shorten home echo, increase live frequency if affordable, and fix tutor homework clarity.</p>
          </details>
          <details class="faq-acc"><summary>Does more class time guarantee retention?<span>+</span></summary>
            <p>No guarantee. Retention needs spaced review between classes. Intensive plans ($${PRICING_PLANS[2].monthlyPriceUsd}/mo) help only when daily echo already exists.</p>
          </details>
          <details class="faq-acc"><summary>What if we only have classes once a week?<span>+</span></summary>
            <p>Once-weekly can work for stable readers. Fragile Qaida stages often forget without a mid-week echo — parent-led or a second short live touchpoint.</p>
          </details>
          <details class="faq-acc"><summary>When is forgetting a sign to change tutor?<span>+</span></summary>
            <p>When there is no homework system, no progress notes, and the same lesson repeats monthly despite home echo. A fair rematch after 4–6 weeks is reasonable.</p>
          </details>
          <p>Retention is a system problem before it is a child problem. Fix the gaps between lessons and overnight forgetting usually eases.</p>`,
  },

  "quran-homework-kids-wont-practice": {
    style: S,
    content: `<p><strong>Quran homework kids won’t do</strong> is one of the most common parent stress points — especially when Arabic practice feels like punishment after a long school day. If your <strong>child refuses Quran practice</strong>, the answer is rarely “try harder.” It is usually timing, session length, unclear tasks, or a tutor mismatch.</p>

          <div class="highlight-box">
            <strong>Quick answer:</strong> Shrink homework to one clear five-minute target, pick a calm time slot, end before meltdown, and ask the tutor for a parent echo script. If refusal is chronic, test a patient one-to-one tutor with a free <a href="/free-quran-classes-online">${TRIAL.durationMinutes}-minute trial</a>. See also <a href="/blog/quran-practice-routine-at-home-kids">home practice routine</a>.
          </div>

          <div class="toc">
            <strong>In this guide</strong>
            <ol>
              <li><a href="#problem">Why kids refuse Quran practice</a></li>
              <li><a href="#diagnosis">Diagnosis table</a></li>
              <li><a href="#plan">Calm practice plan</a></li>
              <li><a href="#tutor">When to get tutor help</a></li>
              <li><a href="#start">Book a trial</a></li>
              <li><a href="#faq">FAQ</a></li>
            </ol>
          </div>

          <h2 id="problem">Why kids refuse Quran homework</h2>
          <p>Children resist when the task feels too big, the timing is wrong, or every mistake becomes a lecture. Screens, siblings, and hunger amplify refusal. Some children also associate Quran with shame after being compared to cousins — a common but fixable pattern.</p>
          <p>Related: <a href="/blog/child-wont-sit-for-quran-class">child won’t sit for class</a> · <a href="/blog/online-quran-classes-for-shy-kids">classes for shy kids</a>.</p>

          <h2 id="diagnosis">Diagnosis — refusal or overload?</h2>
          <table class="np-table">
            <tr><th>Signal</th><th>Likely issue</th><th>Fix first</th></tr>
            <tr><td>Runs away when mushaf opens</td><td>Negative association / past harsh correction</td><td>Pause graded tasks; listen-only week</td></tr>
            <tr><td>Starts then melts down at minute 3</td><td>Task too long for age</td><td>Cap at 5 minutes — <a href="/blog/how-long-should-online-quran-lessons-be">lesson length guide</a></td></tr>
            <tr><td>“I don’t know what to do”</td><td>Vague homework</td><td>Tutor echo sheet with page + lines</td></tr>
            <tr><td>Only refuses with one parent</td><td>Power struggle dynamic</td><td>Swap listener; neutral corner</td></tr>
            <tr><td>Fine in live class, refuses at home</td><td>Missing tutor voice cue</td><td>Record policy-safe notes; parent reads script</td></tr>
            <tr><td>Refuses after heavy school day</td><td>Timing</td><td>Move practice to morning or post-snack</td></tr>
          </table>

          <h2 id="plan">A calm plan for how to get kids to practise Quran at home</h2>
          <h3>Step 1 — Name one micro-goal only</h3>
          <p>Not “finish the lesson.” Instead: “repeat these two lines twice.” When the child succeeds, stop. Wins build willingness faster than volume.</p>
          <h3>Step 2 — Choose a fixed anchor time</h3>
          <p>After maghrib snack, before bed story, or right after the live class — same slot daily. Anchor beats motivation.</p>
          <h3>Step 3 — Separate live correction from home echo</h3>
          <p>At home, parents listen — they do not re-teach Tajweed unless trained. Save correction for the tutor. This lowers fights. Checklist: <a href="/blog/online-quran-class-checklist-for-parents">online class checklist for parents</a>.</p>
          <h3>Step 4 — Use a reward that is not bribery</h3>
          <p>Praise effort and clarity, not speed. A sticker chart for “showed up five days” works better than cash for pages.</p>
          <h3>Step 5 — Align live frequency with homework load</h3>
          <p>If homework piles up because classes are weekly, consider Standard ($${PRICING_PLANS[1].monthlyPriceUsd}/mo) twice-weekly rhythm so each task stays tiny. Plans: <a href="/pricing">pricing</a>.</p>
          <h3>Step 6 — Protect practice during exams and holidays</h3>
          <p>During exam weeks, shrink to two minutes or pause without guilt: <a href="/blog/keeping-quran-classes-during-exams-and-holidays">classes during exams and holidays</a>.</p>

          <h3>Step 7 — When siblings compare, reset the frame</h3>
          <p>If an older sibling reads fluently, the younger child may refuse out of defeat before starting. Separate mushafs, separate two-minute targets, and never practice in front of guests until willingness returns.</p>

          <div class="gold-box">
            <strong>Red flag:</strong> If practice always ends in tears for a month, the lesson may be too long or the tutor tone too harsh — not “lack of iman.”
          </div>

          <h2 id="tutor">When to get a tutor involved</h2>
          <ul>
            <li>Homework is never written down — you guess each night</li>
            <li>Live lessons exceed the child’s attention span repeatedly</li>
            <li>Child was engaged before but shut down after a tutor change</li>
            <li>You need a female tutor for a daughter and current match feels unsafe or cold — preference confirmed after request</li>
          </ul>
          <p>Questions before booking: <a href="/blog/questions-to-ask-before-booking-a-quran-tutor">questions to ask a tutor</a> · parent guide: <a href="/blog/online-quran-classes-for-kids-parent-guide">online Quran classes for kids parent guide</a>.</p>

          <h3>Sample week when refusal eases</h3>
          <p>Monday: two lines after maghrib. Tuesday: rest or listen-only. Wednesday: repeat Monday’s lines. Thursday: live class. Friday: off or one line. Weekend: child picks the time once. Tiny wins rebuild trust faster than doubling homework after a good day.</p>

          <h2 id="start">Book a practice-friendly trial</h2>
          <p>Message: child age, refusal pattern, and “please assign tiny echo homework.” Trial is ${TRIAL.durationMinutes} minutes, no credit card. ${TRIAL.availabilityNote} <a href="/free-quran-classes-online">Free trial</a> · <a href="/online-quran-classes-for-kids">kids classes</a> · <a href="/learn-quran-online">learn Quran online</a>.</p>

          <h2 id="faq">FAQ</h2>
          <details class="faq-acc"><summary>Should I force my child to do Quran homework?<span>+</span></summary>
            <p>Consistent gentle structure yes; forceful shame no. Short daily presence beats occasional forced marathons that teach hatred of the mushaf.</p>
          </details>
          <details class="faq-acc"><summary>How much Quran homework is enough for a 7-year-old?<span>+</span></summary>
            <p>Often five to eight minutes of echo on the tutor’s assigned lines. Increase only when the child initiates or completes calmly for two weeks.</p>
          </details>
          <details class="faq-acc"><summary>What if my child only listens to the tutor?<span>+</span></summary>
            <p>Normal at early stages. Ask the tutor for a one-line parent script. Your job is to hold space and listen — not replicate full instruction.</p>
          </details>
          <details class="faq-acc"><summary>Are apps enough instead of homework?<span>+</span></summary>
            <p>Apps can supplement letter play but rarely replace live correction. Compare formats: <a href="/blog/live-online-quran-tutor-vs-prerecorded-courses">live tutor vs pre-recorded</a>.</p>
          </details>
          <details class="faq-acc"><summary>When should we take a break from practice?<span>+</span></summary>
            <p>One to two weeks after a harsh incident, replacing practice with listening to short surahs. Then restart with three-minute sessions.</p>
          </details>
          <details class="faq-acc"><summary>Does paying more fix refusal?<span>+</span></summary>
            <p>Not automatically. Intensive ($${PRICING_PLANS[2].monthlyPriceUsd}/mo) increases live time but can overwhelm a refusing child. Match plan to attention and habit first.</p>
          </details>
          <p>Homework resistance usually improves when tasks shrink and timing stabilises — not when parents turn every evening into a debate.</p>
          <p>If you have tried every trick for a month and refusal is getting worse, a fresh tutor voice in a ${TRIAL.durationMinutes}-minute trial sometimes resets the dynamic — especially when the current teacher assigns vague homework or runs overlong sessions.</p>`,
  },

  "how-to-know-if-online-quran-tutor-is-good": {
    style: S,
    content: `<p>Parents ask <strong>how to know if a Quran tutor is good</strong> after the trial ends — not before booking. Choosing a teacher is one step; evaluating whether lessons actually work is another. These are the <strong>signs of a good online Quran teacher</strong> you can check during and after the first month, without waiting for a miracle finish line.</p>

          <div class="highlight-box">
            <strong>Quick answer:</strong> A good online Quran tutor listens more than lectures, assigns clear tiny homework, tracks one skill at a time, and your child shows small carry-over between sessions. Use this checklist after lesson 1, 4, and 8. Unsure? Compare with a second free <a href="/free-quran-classes-online">${TRIAL.durationMinutes}-minute trial</a>.
          </div>

          <div class="toc">
            <strong>In this guide</strong>
            <ol>
              <li><a href="#difference">How this differs from choosing a tutor</a></li>
              <li><a href="#checklist">Quality checklist (during lessons)</a></li>
              <li><a href="#after">Signs after 4–8 weeks</a></li>
              <li><a href="#red-flags">Red flags</a></li>
              <li><a href="#tutor">When to rematch</a></li>
              <li><a href="#faq">FAQ</a></li>
            </ol>
          </div>

          <h2 id="difference">Evaluation vs selection — don’t mix them up</h2>
          <p><a href="/blog/how-to-choose-online-quran-teacher">How to choose an online Quran teacher</a> covers credentials, safety, and trial booking before you pay. This guide answers <strong>is my Quran tutor effective</strong> once lessons are running — using observable lesson behaviour and home carry-over, not academy marketing.</p>
          <p>If fit fails after a fair trial window, see <a href="/blog/when-to-change-your-online-quran-tutor">when to change your tutor</a> — different problem, different timing.</p>

          <h2 id="checklist">Quality checklist — what to watch during lessons</h2>
          <table class="np-table">
            <tr><th>During lesson</th><th>Good sign</th><th>Concern</th></tr>
            <tr><td>Opening 5 minutes</td><td>Quick warm-up on last homework</td><td>Starts brand-new page with no review</td></tr>
            <tr><td>Correction style</td><td>One fix at a time, demo sound</td><td>Long rule lectures, no listening</td></tr>
            <tr><td>Child talk time</td><td>Child reads 60%+ of session</td><td>Tutor reads entire lesson</td></tr>
            <tr><td>Engagement</td><td>Adapts pace when tired</td><td>Ignores yawns / tears</td></tr>
            <tr><td>Closing</td><td>Writes echo homework + page</td><td>“Practice at home” with no detail</td></tr>
            <tr><td>Tech / safeguarding</td><td>Stable audio, professional tone</td><td>Chaotic background, privacy lapses</td></tr>
          </table>
          <p>Parent observer tips: <a href="/blog/online-quran-class-checklist-for-parents">online class checklist</a> · <a href="/blog/questions-to-ask-before-booking-a-quran-tutor">questions to ask before booking</a>.</p>

          <h2 id="after">Signs your tutor is effective after 4–8 weeks</h2>
          <ol>
            <li><strong>Carry-over:</strong> child remembers yesterday’s lines with one prompt — not full re-teach</li>
            <li><strong>Skill focus:</strong> tutor names one priority (e.g. madd, or letter qaf) until it stabilises</li>
            <li><strong>Homework compliance:</strong> tasks are small enough that your child usually completes them</li>
            <li><strong>Emotional safety:</strong> less dread before class; occasional off days still happen</li>
            <li><strong>Honest pacing:</strong> tutor slows when Qaida gaps appear — <a href="/blog/how-long-does-noorani-qaida-take">Qaida timeline context</a></li>
          </ol>
          <p>No tutor can promise a fixed timeline. Progress should be directionally visible in sound clarity and page retention, not only “pages covered.”</p>

          <h3>Home echo test (parent can run in 3 minutes)</h3>
          <p>Twenty-four hours after class, ask the child to read the assigned lines cold. If they need heavy prompting every time for a month, discuss frequency or teaching style with the tutor — or request a rematch.</p>

          <h3>Adult learners — same checklist, different shame triggers</h3>
          <p>Adults evaluating tutors should watch for dignity: does the teacher rush comparisons or laugh at mistakes? Effective adult tutors celebrate small letter wins and never treat you like a failed child. Path: <a href="/online-quran-classes-for-adults">adult classes</a> · barrier guide: <a href="/blog/adult-embarrassed-to-learn-quran-beginner">embarrassed adult beginner</a>.</p>

          <div class="gold-box">
            <strong>Credentials note:</strong> Ijazah and experience belong to the <em>proposed</em> tutor — ask for the assigned teacher’s background, not a generic academy claim. See <a href="/blog/what-is-ijazah-in-quran-teaching">what is Ijazah</a>.
          </div>

          <h2 id="red-flags">Red flags — effectiveness unlikely</h2>
          <ul>
            <li>Guaranteed Hifz or “Quran in 90 days” promises</li>
            <li>No live listening before payment pressure</li>
            <li>Child consistently leaves worse than they entered</li>
            <li>Homework never checked — same mistakes frozen for weeks</li>
            <li>Tutor changes every session with no handoff notes</li>
          </ul>

          <h2 id="tutor">When to rematch vs when to adjust</h2>
          <p><strong>Adjust first:</strong> shorter lessons, clearer homework, twice-weekly rhythm (Standard $${PRICING_PLANS[1].monthlyPriceUsd}/mo) — <a href="/pricing">pricing</a>.</p>
          <p><strong>Rematch:</strong> emotional shutdown persists after adjustments, or zero progress on agreed targets for 6+ weeks with compliant home echo. Full guide: <a href="/blog/when-to-change-your-online-quran-tutor">when to change tutor</a>.</p>
          <p>Kids pathway: <a href="/online-quran-classes-for-kids">online Quran classes for kids</a> · adults: <a href="/online-quran-classes-for-adults">online Quran classes for adults</a>.</p>

          <h3>Compare two tutors fairly</h3>
          <p>If unsure, book a second ${TRIAL.durationMinutes}-minute trial with another tutor and score both on the same five rows: homework clarity, child talk time, warmth, correction style, and next-day carry-over. Numbers beat memory when you decide.</p>

          <h2 id="start">Test effectiveness with a second trial</h2>
          <p>If you are unsure after one teacher, book a comparison trial — ${TRIAL.durationMinutes} minutes, no credit card. ${TRIAL.availabilityNote} <a href="/free-quran-classes-online">Book free trial</a> · <a href="/learn-quran-online">learn Quran online</a>.</p>

          <h2 id="faq">FAQ</h2>
          <details class="faq-acc"><summary>How many lessons before I can judge a tutor?<span>+</span></summary>
            <p>Lesson 1 shows rapport and structure. By lessons 4–8 you should see homework clarity and some carry-over. Major judgments before three sessions are often premature.</p>
          </details>
          <details class="faq-acc"><summary>What if my child likes the tutor but does not progress?<span>+</span></summary>
            <p>Warmth matters but is not enough. Ask the tutor for a written four-week target. If targets are missed with compliant echo, discuss method change or rematch.</p>
          </details>
          <details class="faq-acc"><summary>Is my child the problem if progress is slow?<span>+</span></summary>
            <p>Sometimes pace is age-appropriate. Slow progress plus chaos, no homework system, or harsh correction usually points to tutor-process issues first.</p>
          </details>
          <details class="faq-acc"><summary>Should I sit in every online lesson?<span>+</span></summary>
            <p>Many parents observe early weeks for safeguarding and quality, then fade to earshot. Young children often need a nearby adult for tech and comfort.</p>
          </details>
          <details class="faq-acc"><summary>Can a good tutor fix refusal to practice?<span>+</span></summary>
            <p>Often partially — by shortening tasks and rebuilding trust. See <a href="/blog/quran-homework-kids-wont-practice">homework refusal guide</a> alongside tutor changes.</p>
          </details>
          <details class="faq-acc"><summary>Do reviews prove tutor quality?<span>+</span></summary>
            <p>Public reviews help at academy level but do not replace observing your child’s sessions. We publish verified Trustpilot data only — never invent scores.</p>
          </details>
          <p>Good tutors prove themselves in small weekly wins you can hear — not in slogans on a landing page.</p>
          <p>Keep a simple scorecard after each month: homework written yes/no, carry-over yes/no, child willingness 1–5. Two weak months with compliant home echo is enough data to request a rematch without guilt.</p>`,
  },

  "adult-embarrassed-to-learn-quran-beginner": {
    style: S,
    content: `<p>Many adults type <strong>embarrassed to learn Quran as adult</strong> into search at midnight — never having told a spouse or friend. The shame is real: mosque class flashbacks, fear of mispronouncing in front of strangers, or believing “real Muslims already know.” You are not alone, and <strong>adult beginner Quran shame</strong> is a barrier you can cross privately online.</p>

          <div class="highlight-box">
            <strong>Quick answer:</strong> Shame fades when learning is one-to-one, paced for zero background, and never broadcast. No group comparisons, no fixed finish promises. Start with a private ${TRIAL.durationMinutes}-minute trial — no credit card — on <a href="/online-quran-classes-for-adults">adult classes</a> or <a href="/free-quran-classes-online">free trial</a>.
          </div>

          <div class="toc">
            <strong>In this guide</strong>
            <ol>
              <li><a href="#shame">Why embarrassment hits adults hardest</a></li>
              <li><a href="#diagnosis">Diagnosis table</a></li>
              <li><a href="#steps">Steps past the shame barrier</a></li>
              <li><a href="#tutor">When a tutor helps most</a></li>
              <li><a href="#start">Start privately</a></li>
              <li><a href="#faq">FAQ</a></li>
            </ol>
          </div>

          <h2 id="shame">Why adults feel embarrassed to learn Quran</h2>
          <p>Unlike children, adults carry decades of identity. Missing a basic skill can feel like failing faith itself — even though the Prophet’s companions included late learners and converts. Group classes amplify fear: rows of fluent reciters, public correction, or aunties asking why you “still” cannot read.</p>
          <p>This article focuses on the <em>shame barrier</em>. For general adult pacing and routes, see <a href="/blog/learn-quran-as-an-adult-never-too-late">learning Quran as an adult — never too late</a> — complementary, not duplicate.</p>

          <h2 id="diagnosis">Diagnosis — shame vs other blockers</h2>
          <table class="np-table">
            <tr><th>What you feel</th><th>Likely blocker</th><th>First step</th></tr>
            <tr><td>Hide books when guests visit</td><td>Social shame / privacy fear</td><td>One-to-one online, camera optional if policy allows</td></tr>
            <tr><td>Freeze when asked to lead salah</td><td>Gap between memorised duas and reading</td><td>Qaida-from-zero route — <a href="/blog/learn-quran-online-adult-beginner-guide">adult beginner guide</a></td></tr>
            <tr><td>“I should know by now” loop</td><td>Perfectionism</td><td>Name a 90-day private goal with tutor only</td></tr>
            <tr><td>Anxiety about female/male tutor</td><td>Modesty preference</td><td>Request preference — confirmed after booking</td></tr>
            <tr><td>Convert — fear of judgment</td><td>New Muslim isolation</td><td><a href="/blog/new-muslim-guide-to-reading-quran">new Muslim Quran guide</a></td></tr>
          </table>

          <h2 id="steps">Practical steps when you learn Quran adult never started</h2>
          <h3>Step 1 — Choose private over public (for now)</h3>
          <p>Online one-to-one removes the audience. You can learn letters at 40 the same way a child does — without a classroom staring. Pathway: <a href="/online-quran-classes-for-adults">online Quran classes for adults</a>.</p>
          <h3>Step 2 — Tell one safe person (optional but powerful)</h3>
          <p>A spouse, sibling, or friend who will cheer five minutes of practice beats carrying secret guilt alone. You do not owe everyone an announcement.</p>
          <h3>Step 3 — Reframe the niyyah</h3>
          <p>You are fixing a skill gap — like learning to drive later in life — not auditioning for scholar status. Tutors trained for adults expect slow, dignified starts.</p>
          <h3>Step 4 — Micro-sessions beat heroic weekends</h3>
          <p>Fifteen to twenty minutes four times a week often outlasts two-hour guilt bursts. Starter ($${PRICING_PLANS[0].monthlyPriceUsd}/mo) weekly rhythm suits many embarrassed beginners who want low visibility. Plans: <a href="/pricing">pricing</a>.</p>
          <h3>Step 5 — Separate Tajweed polish from first literacy</h3>
          <p>First goal: stable letter recognition and short surah reading. Heavy rule names can come later — <a href="/blog/what-should-my-child-learn-first-in-quran">what to learn first</a> applies to adults too.</p>

          <h3>Step 6 — Use the trial as a shame test</h3>
          <p>If you leave the demo feeling judged, that tutor is wrong — not you. A good first session sounds like: “We start where you are.” Walkthrough: <a href="/blog/online-quran-trial-what-to-expect">what to expect in a trial</a>.</p>

          <div class="gold-box">
            <strong>We do not claim:</strong> money-back guarantees, Al-Azhar blanket status, or “fluent in 30 days.” Honest pacing only.
          </div>

          <h2 id="tutor">When a tutor helps most with shame</h2>
          <ul>
            <li>You cannot self-start after buying apps and abandoning them</li>
            <li>Group trauma resurfaces even thinking about mosque class</li>
            <li>You need a female tutor for comfort — request when booking</li>
            <li>You want accountability without family knowing yet</li>
          </ul>
          <p>Evaluate fit gently: <a href="/blog/how-to-know-if-online-quran-tutor-is-good">how to know if your tutor is good</a> · choose wisely: <a href="/blog/how-to-choose-online-quran-teacher">choose a teacher checklist</a>.</p>

          <h3>What progress looks like at week four</h3>
          <p>You should be able to read a few lines alone with stumbles — not perform for guests. If you still hide your mushaf entirely, discuss pace with the tutor or try a rematch before quitting altogether.</p>

          <h2 id="start">Start with a shame-free trial</h2>
          <p>Write in your request: “Adult beginner, embarrassed — please patient Qaida pace.” Trial is ${TRIAL.durationMinutes} minutes, no credit card. ${TRIAL.availabilityNote} <a href="/free-quran-classes-online">Book free trial</a> · <a href="/learn-quran-online">learn Quran online</a> · <a href="/online-quran-for-beginners">beginners hub</a>.</p>

          <h2 id="faq">FAQ</h2>
          <details class="faq-acc"><summary>Is it shameful to learn Quran as an adult?<span>+</span></summary>
            <p>No — seeking Quran literacy is worship and courage. Many adults start privately after years of avoidance; online one-to-one removes the audience that triggers shame.</p>
          </details>
          <details class="faq-acc"><summary>Can I learn without anyone in my family knowing?<span>+</span></summary>
            <p>Yes. Online lessons from home are discreet. You may later choose to share progress when confidence grows.</p>
          </details>
          <details class="faq-acc"><summary>Should I join a group class to “get over” embarrassment?<span>+</span></summary>
            <p>Only if you want that exposure. Many ashamed beginners need private wins first; group can come later.</p>
          </details>
          <details class="faq-acc"><summary>What if I cry in the first lesson?<span>+</span></summary>
            <p>Adult tutors often see this. A good teacher slows down, normalises the feeling, and focuses on one letter — not performance.</p>
          </details>
          <details class="faq-acc"><summary>How long until adults read Quran?<span>+</span></summary>
            <p>Ranges vary by starting point and practice — weeks to many months. No honest academy promises a fixed date.</p>
          </details>
          <details class="faq-acc"><summary>Can I request a female tutor?<span>+</span></summary>
            <p>Yes — preference is noted at booking and confirmed when a matching tutor is available.</p>
          </details>
          <p>Embarrassment is a door, not a identity. Private, paced lessons let adults learn Quran with dignity — at 25, 40, or beyond.</p>
          <p>Many late starters wish they had begun ten years earlier — but the second-best time is today, with one person who never compares you to a classroom row. That is what a private online trial is for.</p>`,
  },

  "online-quran-trial-what-to-expect": {
    style: S,
    content: `<p>Searching <strong>what to expect in online Quran trial</strong> usually means you are ready to try — but fear wasting time on a sales call. A honest <strong>free Quran trial class</strong> should feel like a real mini-lesson: placement listen, gentle correction, and clear next steps — not pressure to pay on the spot.</p>

          <div class="highlight-box">
            <strong>Quick answer:</strong> Expect ${TRIAL.durationMinutes} minutes live one-to-one, a level check (Qaida or reading), one small skill focus, and written follow-up if the academy is organised. No credit card for NoorPath trials. ${TRIAL.availabilityNote} <a href="/free-quran-classes-online">Book your free trial</a>.
          </div>

          <div class="toc">
            <strong>In this guide</strong>
            <ol>
              <li><a href="#before">Before the demo lesson</a></li>
              <li><a href="#during">Minute-by-minute walkthrough</a></li>
              <li><a href="#after">After the trial</a></li>
              <li><a href="#parents">For parents vs adults</a></li>
              <li><a href="#red-flags">Red flags</a></li>
              <li><a href="#faq">FAQ</a></li>
            </ol>
          </div>

          <h2 id="before">Before your online Quran demo lesson</h2>
          <ul>
            <li>Stable Wi‑Fi, charged device, quiet corner</li>
            <li>Headphones for clearer Arabic sounds</li>
            <li>Mushaf or Qaida book if you have one — PDF ok for trial</li>
            <li>Parent within earshot for under-12s (<a href="/safeguarding">safeguarding</a>)</li>
            <li>Write two sentences: learner age, current level, goal (reading / Tajweed / Hifz interest)</li>
          </ul>
          <p>Prep checklist: <a href="/blog/online-quran-class-checklist-for-parents">online class checklist for parents</a> · questions: <a href="/blog/questions-to-ask-before-booking-a-quran-tutor">questions before booking</a>.</p>

          <h3>What to write in your booking message</h3>
          <p>Three lines are enough: learner age, current level (zero / some Qaida / can read slowly), and goal (reading, Tajweed polish, or Hifz interest only). Mention if the child is shy or if an adult prefers a female tutor — preference is confirmed after your request.</p>

          <h2 id="during">What happens during the trial — honest timeline</h2>
          <table class="np-table">
            <tr><th>Phase</th><th>Typical activity</th><th>What good looks like</th></tr>
            <tr><td>0–5 min</td><td>Greeting, tech check, goal confirm</td><td>Child-friendly warmth; professional tone for adults</td></tr>
            <tr><td>5–15 min</td><td>Placement read / Qaida sample</td><td>Tutor listens more than talks</td></tr>
            <tr><td>15–25 min</td><td>One correction focus + short practice</td><td>Single skill demo (e.g. one letter or madd)</td></tr>
            <tr><td>25–30 min</td><td>Summary, suggested plan, Q&amp;A</td><td>Clear “if you continue” next step — no hard sell</td></tr>
          </table>
          <p>This is an <strong>online Quran demo lesson</strong>, not a full course. You are testing fit, audio clarity, and teaching style.</p>

          <h3>What the tutor should assess</h3>
          <ol>
            <li>Letter stability or reading fluency</li>
            <li>Attention span for session length</li>
            <li>Tajweed priorities (if beyond raw Qaida)</li>
            <li>Suggested weekly frequency — often Standard ($${PRICING_PLANS[1].monthlyPriceUsd}/mo) for twice-weekly beginners</li>
          </ol>
          <p>Published plans: <a href="/pricing">pricing</a> · frequency: <a href="/blog/how-many-quran-classes-per-week">classes per week</a>.</p>

          <h2 id="after">After the trial — decision without pressure</h2>
          <p>You should leave knowing:</p>
          <ul>
            <li>Proposed starting point (Qaida page or surah)</li>
            <li>Recommended plan tier — Starter / Standard / Intensive</li>
            <li>Whether the assigned tutor is the one you will keep</li>
            <li>How homework will be communicated</li>
          </ul>
          <p>Evaluate quality: <a href="/blog/how-to-know-if-online-quran-tutor-is-good">is your tutor good</a>. Choosing framework: <a href="/blog/how-to-choose-online-quran-teacher">choose a teacher</a>.</p>

          <h3>What you are not committing to in a trial</h3>
          <p>A trial is not a contract, not a package upsell, and not proof your child will finish Quran in any fixed month. It is a fit test: audio, patience, homework clarity, and whether your learner wants to come back. Cancellation on paid plans later requires ${CANCELLATION_NOTICE_DAYS} days notice — not money-back; see <a href="/pricing">pricing</a> for plan terms.</p>

          <h2 id="parents">Parents vs adult learners — different expectations</h2>
          <p><strong>Kids:</strong> shorter talk, more encouragement, parent may need to stay nearby. Path: <a href="/online-quran-classes-for-kids">kids classes</a> · <a href="/blog/online-quran-classes-for-kids-parent-guide">parent guide</a>.</p>
          <p><strong>Adults:</strong> dignified pace, no group shame, optional camera policies per comfort. Path: <a href="/online-quran-classes-for-adults">adult classes</a> · shame barrier: <a href="/blog/adult-embarrassed-to-learn-quran-beginner">embarrassed adult beginner</a>.</p>

          <h3>Devices and privacy</h3>
          <p>Use a laptop or tablet at eye level when possible. Headphones help both sides hear Arabic clearly. For children, keep the door open and follow the academy safeguarding policy — see <a href="/safeguarding">safeguarding</a>. Do not record lessons unless the academy explicitly allows it.</p>

          <div class="gold-box">
            <strong>NoorPath trial facts:</strong> ${TRIAL.durationMinutes} minutes · $${TRIAL.price} · no credit card · online-only academy · tutor match confirmed after request.
          </div>

          <h2 id="red-flags">Red flags during a trial</h2>
          <ul>
            <li>No live listening — only a sales presentation</li>
            <li>Guaranteed timelines or money-back claims we do not publish</li>
            <li>Pressure to pay before you discuss with family</li>
            <li>Tutor radically different from who was advertised without explanation</li>
            <li>Unsafe behaviour — report and leave immediately</li>
          </ul>
          <p>Effectiveness context: <a href="/blog/is-online-quran-learning-as-effective-as-in-person">online vs in-person learning</a> · cost expectations: <a href="/blog/online-quran-classes-cost-pricing-guide">pricing guide</a>.</p>

          <h2 id="start">Book the trial</h2>
          <p>Include learner details and “placement + teaching style check.” <a href="/free-quran-classes-online">Free Quran classes online</a> · <a href="/learn-quran-online">learn Quran online</a>.</p>
          <p>Write down three observations within an hour of the trial while memory is fresh: one strength, one concern, and one question for follow-up. That note makes the enrol-or-wait decision easier than gut feeling alone.</p>

          <h2 id="faq">FAQ</h2>
          <details class="faq-acc"><summary>Is the online Quran trial really free?<span>+</span></summary>
            <p>NoorPath’s trial is ${TRIAL.durationMinutes} minutes at $${TRIAL.price} with no credit card required. Other academies vary — always read their checkout terms.</p>
          </details>
          <details class="faq-acc"><summary>Do I need a credit card for the demo?<span>+</span></summary>
            <p>Not for NoorPath. ${TRIAL.requiresCreditCard ? "Card required." : "No card required for the trial."}</p>
          </details>
          <details class="faq-acc"><summary>Will the same tutor continue after the trial?<span>+</span></summary>
            <p>Ideally yes if you enrol and availability aligns. Confirm during booking; rematch is possible if fit is wrong.</p>
          </details>
          <details class="faq-acc"><summary>Can siblings share one trial?<span>+</span></summary>
            <p>Each learner needs placement. Sibling discounts apply on paid plans — see <a href="/pricing">pricing</a> and family scheduling: <a href="/blog/sibling-online-quran-classes-scheduling">sibling scheduling</a>.</p>
          </details>
          <details class="faq-acc"><summary>What if my child will not talk in the trial?<span>+</span></summary>
            <p>Normal for shy kids. A patient tutor uses listening tasks and short wins — see <a href="/blog/online-quran-classes-for-shy-kids">shy kids guide</a>.</p>
          </details>
          <details class="faq-acc"><summary>How soon can regular classes start?<span>+</span></summary>
            <p>Often within days once tutor availability is confirmed after your request and you choose a plan.</p>
          </details>
          <p>A good trial feels like the first lesson of a long journey — clear, kind, and honest about what comes next.</p>
          <p>After two trials you should feel calm about one teacher — not pressured. If both feel mediocre, say so in your follow-up message; matching may improve when you name what failed (homework, pace, audio, child rapport).</p>`,
  },

  "how-long-until-child-reads-quran": {
    style: S,
    content: `<p>Parents ask <strong>how long until child can read Quran</strong> with hope — and sometimes anxiety after cousin comparisons. There is no single answer: <strong>how long for kids to learn Quran reading</strong> depends on starting age, Qaida depth, class frequency, and home echo. Honest ranges beat false promises every time.</p>

          <div class="highlight-box">
            <strong>Quick answer:</strong> Many children need roughly 4–12 months from solid Qaida to short-surah reading with tutor support — wide range, not a guarantee. Zero Arabic start may take longer. Get a placement listen in a free <a href="/free-quran-classes-online">${TRIAL.durationMinutes}-minute trial</a> · <a href="/blog/how-long-does-noorani-qaida-take">Qaida timeline</a>.
          </div>

          <div class="toc">
            <strong>In this guide</strong>
            <ol>
              <li><a href="#ranges">Honest ranges by starting point</a></li>
              <li><a href="#diagnosis">What speeds or slows progress</a></li>
              <li><a href="#milestones">Milestones to watch</a></li>
              <li><a href="#home">Home habits that shorten the path</a></li>
              <li><a href="#tutor">When tutor support matters</a></li>
              <li><a href="#faq">FAQ</a></li>
            </ol>
          </div>

          <h2 id="ranges">Qaida to Quran — how long (honest ranges)</h2>
          <table class="np-table">
            <tr><th>Starting point</th><th>Typical range to short-surah reading*</th><th>Notes</th></tr>
            <tr><td>Age 5–6, zero Arabic</td><td>9–18+ months</td><td>Short lessons; attention limits pace</td></tr>
            <tr><td>Age 7–9, zero Arabic</td><td>6–12 months</td><td>Faster decoding; still needs echo</td></tr>
            <tr><td>Finished Qaida, shaky fluency</td><td>2–6 months</td><td>Bridge phase — not “done” yet</td></tr>
            <tr><td>Speaks some Arabic at home</td><td>May be faster on vocabulary</td><td>Makharij still need tutor ear</td></tr>
            <tr><td>Returning after long break</td><td>1–4 months refresh</td><td>Retrieval faster than first learn</td></tr>
          </table>
          <p>*Ranges are illustrations, not guarantees. Individual tutors assess placement in trial.</p>
          <p>Deep dive: <a href="/blog/how-long-does-noorani-qaida-take">how long Noorani Qaida takes</a> · readiness: <a href="/blog/when-child-ready-qaida-to-quran">when child is ready for Quran</a>.</p>

          <h2 id="diagnosis">What speeds or slows the timeline</h2>
          <table class="np-table">
            <tr><th>Factor</th><th>Faster</th><th>Slower</th></tr>
            <tr><td>Class frequency</td><td>2× weekly live + echo</td><td>1× weekly, no home practice</td></tr>
            <tr><td>Lesson length</td><td>Matches attention span</td><td>Overlong sessions → burnout</td></tr>
            <tr><td>Letter foundations</td><td>Stable makharij first</td><td>Rushed to surahs — <a href="/blog/hard-arabic-letters-for-kids-makharij">hard letters</a></td></tr>
            <tr><td>Parent echo</td><td>5 min daily</td><td>Weekend cram only</td></tr>
            <tr><td>Forgetting between classes</td><td>Micro-review system</td><td>Re-teach same page weekly — <a href="/blog/child-forgets-quran-between-classes">forgetting guide</a></td></tr>
          </table>

          <h2 id="milestones">Milestones — progress you can hear</h2>
          <ol>
            <li><strong>Qaida:</strong> joins letters without guessing every word</li>
            <li><strong>Bridge:</strong> reads one ayah from mus-haf with tutor correction</li>
            <li><strong>Short surahs:</strong> Al-Fatiha and last juz portions with fewer stalls</li>
            <li><strong>Fluency:</strong> smoother rhythm — Tajweed polish continues for years</li>
          </ol>
          <p>First steps: <a href="/blog/what-should-my-child-learn-first-in-quran">what child should learn first</a> · best age context: <a href="/blog/best-age-to-start-quran-learning">best age to start</a>.</p>

          <h2 id="home">Home habits (without turning home into a madrasa)</h2>
          <ul>
            <li>Same mushaf, same corner, five-minute echo</li>
            <li>Praise clarity over speed</li>
            <li>Keep practice during exams light — <a href="/blog/keeping-quran-classes-during-exams-and-holidays">exams and holidays</a></li>
            <li>If homework fights erupt, fix the plan — <a href="/blog/quran-homework-kids-wont-practice">homework refusal</a></li>
          </ul>
          <p>Routine template: <a href="/blog/quran-practice-routine-at-home-kids">practice routine at home</a>.</p>

          <h3>What “reading Quran” actually means</h3>
          <p>Parents often mean “recite Surah Yasin smoothly.” Tutors mean staged skills: Qaida fluency → mus-haf decoding → short surahs → Tajweed refinement for years. Asking for an honest placement beats comparing children at Eid gatherings.</p>

          <h3>When progress feels stuck for months</h3>
          <p>If the same Qaida page repeats despite echo, check tutor homework notes, class frequency, and whether hard letters need isolation — not whether your child “is not religious enough.” Guides: <a href="/blog/child-forgets-quran-between-classes">forgetting between classes</a> · <a href="/blog/quran-homework-kids-wont-practice">homework refusal</a>.</p>

          <h3>Teenagers need different expectations</h3>
          <p>Older children with busy school loads may need shorter but more frequent touchpoints. See <a href="/blog/online-quran-classes-for-teenagers">online Quran classes for teenagers</a> before forcing childhood schedules that create resentment.</p>

          <h2 id="tutor">When live tutor support matters most</h2>
          <p>DIY apps rarely catch subtle letter errors that freeze progress. Live one-to-one correction during the Qaida-to-Quran bridge saves months of unlearning. Plan fit:</p>
          <ul>
            <li><strong>Starter</strong> ($${PRICING_PLANS[0].monthlyPriceUsd}/mo): steady once echo habit exists</li>
            <li><strong>Standard</strong> ($${PRICING_PLANS[1].monthlyPriceUsd}/mo): common for twice-weekly bridge phase</li>
            <li><strong>Intensive</strong> ($${PRICING_PLANS[2].monthlyPriceUsd}/mo): only when child already tolerates frequency</li>
          </ul>
          <p><a href="/pricing">Pricing</a> · <a href="/online-quran-classes-for-kids">kids classes</a> · tutor quality: <a href="/blog/how-to-know-if-online-quran-tutor-is-good">evaluate your tutor</a>.</p>

          <div class="gold-box">
            <strong>We never promise:</strong> “Quran in 30 days,” grade-level comparisons, or fixed month counts per child. Timelines are discussed after placement.
          </div>

          <h3>Planning without cousin comparisons</h3>
          <p>Eid gatherings expose every family’s different pace. Use tutor notes, not aunties’ opinions, to decide when to move from Qaida to mus-haf. Parent checklist: <a href="/blog/online-quran-class-checklist-for-parents">online class checklist</a> · teaching at home: <a href="/blog/how-to-teach-quran-to-kids">how to teach Quran to kids</a> (support role, not replacement for live correction).</p>

          <h3>Standard vs Intensive — timeline myth</h3>
          <p>More hours do not automatically shorten the calendar if the child is tired or letters are unstable. Many families succeed on Standard ($${PRICING_PLANS[1].monthlyPriceUsd}/mo) for the bridge year; Intensive ($${PRICING_PLANS[2].monthlyPriceUsd}/mo) suits learners who already tolerate frequent sessions. See <a href="/blog/how-many-quran-classes-per-week">how many classes per week</a>.</p>

          <h3>Signs you are comparing too early</h3>
          <p>If your child has completed fewer than three Qaida chapters with stable echo, any “months to Quran” guess is premature. Let the tutor name the next milestone — usually a mus-haf trial ayah — before you worry about Surah length or Hifz timelines.</p>

          <h2 id="start">Get an honest placement — not a sales timeline</h2>
          <p>Ask for a Qaida-to-Quran assessment in your ${TRIAL.durationMinutes}-minute trial. No credit card. ${TRIAL.availabilityNote} <a href="/free-quran-classes-online">Book free trial</a> · <a href="/learn-quran-online">learn Quran online</a>.</p>

          <h2 id="faq">FAQ</h2>
          <details class="faq-acc"><summary>How long until a 6-year-old can read Quran?<span>+</span></summary>
            <p>Often longer than older beginners because sessions stay short. Many need well over a year from zero Arabic — focus on letter mastery, not cousin timelines.</p>
          </details>
          <details class="faq-acc"><summary>Is my child slow if Qaida takes a year?<span>+</span></summary>
            <p>Not necessarily. Solid Qaida prevents painful re-learning later. See <a href="/blog/how-long-does-noorani-qaida-take">Qaida duration guide</a>.</p>
          </details>
          <details class="faq-acc"><summary>Does twice-weekly classes speed reading?<span>+</span></summary>
            <p>Usually yes versus once-weekly with no echo, because retrieval gaps shrink. Match frequency to attention and budget.</p>
          </details>
          <details class="faq-acc"><summary>When can we start short surahs?<span>+</span></summary>
            <p>When the tutor confirms stable joining of letters and basic stops — not when parents feel social pressure at gatherings.</p>
          </details>
          <details class="faq-acc"><summary>Do Arabic-speaking parents shorten the timeline?<span>+</span></summary>
            <p>Sometimes for vocabulary, but Quranic reading still needs tajweed and mus-haf skills — <a href="/blog/parents-dont-speak-arabic-child-learn-quran">non-Arabic parents succeed too</a>.</p>
          </details>
          <details class="faq-acc"><summary>Should we rush before Ramadan?<span>+</span></summary>
            <p>Build sustainable pace instead of cramming. Ramadan can motivate extra listening without toxic speed promises.</p>
          </details>
          <p>The right question is not “how fast” but “how solid.” Stable reading lasts a lifetime; rushed reading often unravels in teen years.</p>
          <p>Book a placement trial with the question: “Where is my child on the Qaida-to-Quran bridge, and what weekly rhythm do you recommend?” That answer beats any blog range — including this one.</p>`,
  },
};
