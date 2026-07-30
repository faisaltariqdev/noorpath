/**
 * Batch 2 — high-demand / lower-competition decision guides.
 * Parent booking checklist, live vs pre-recorded comparison, first-lesson ops checklist.
 */

import { TRIAL } from "@/lib/academyFacts";

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
  .faq-acc { border: 1px solid var(--border); border-radius: 10px; margin-bottom: 12px; overflow: hidden; }
  .faq-acc summary { padding: 16px 20px; font-weight: 700; cursor: pointer; background: var(--ivory); color: var(--charcoal); list-style: none; display: flex; justify-content: space-between; align-items: center; font-size: .95rem; }
  .faq-acc summary::-webkit-details-marker { display: none; }
  .faq-acc summary span { color: var(--emerald); margin-left: 12px; }
  .faq-acc p { padding: 16px 20px; margin: 0; color: #374151; font-size: .92rem; line-height: 1.75; border-top: 1px solid var(--border); }
  @media (max-width: 576px) { .np-table { font-size: .82rem; } .np-table th, .np-table td { padding: 8px 9px; } }`;

export const decisionGuideBlogContent: Record<string, { style: string; content: string }> = {
  "questions-to-ask-before-booking-a-quran-tutor": {
    style: S,
    content: `<p>Parents searching <strong>questions to ask before booking a Quran tutor</strong> are usually one trial away from paying — and one vague sales call away from regret. Use this checklist in the trial and before enrolment. Clear answers beat glossy claims.</p>

          <div class="highlight-box">
            <strong>Quick answer:</strong> Ask about <em>this</em> tutor’s relevant credentials, placement method, lesson length, make-up rules, safeguarding, language, and exact USD plan inclusions — then test teaching fit in a free <a href="/free-quran-classes-online">${TRIAL.durationMinutes}-minute trial</a>. Also read <a href="/blog/how-to-choose-online-quran-teacher">how to choose an online Quran teacher</a>.
          </div>

          <h2 id="fit">1) Placement and course fit</h2>
          <ul>
            <li>What can my learner do today — letters, continuous reading, or memorisation?</li>
            <li>Do you recommend Qaida, reading, Tajweed, or Hifz first — and why?</li>
            <li>How will you reassess after 3–4 weeks if the level is wrong?</li>
          </ul>
          <p>If the answer is only a course name with no listening check, pause. See <a href="/blog/what-should-my-child-learn-first-in-quran">what should my child learn first in Quran</a>.</p>

          <h2 id="tutor">2) Tutor evidence (not slogans)</h2>
          <ul>
            <li>What credentials apply to the <em>proposed</em> tutor for this goal?</li>
            <li>Can you confirm teaching experience with this age/level?</li>
            <li>What happens if the tutor match is not right after two weeks?</li>
          </ul>
          <p>Blanket “all teachers certified” claims are a red flag. Ask for the person you will meet. Background: <a href="/blog/what-is-ijazah-in-quran-teaching">what is Ijazah in Quran teaching</a> and <a href="/our-tutors">tutor matching</a>.</p>

          <h2 id="schedule">3) Schedule and attendance reality</h2>
          <ul>
            <li>Is the recurring time labeled in my timezone?</li>
            <li>How are daylight-saving / tutor-side clock changes handled?</li>
            <li>What notice is needed to reschedule, and are make-ups available?</li>
            <li>What happens in exam weeks or travel weeks?</li>
          </ul>
          <p>Pair with <a href="/blog/how-many-quran-classes-per-week">how many Quran classes per week</a> and <a href="/blog/how-long-should-online-quran-lessons-be">lesson length by age</a>.</p>

          <h2 id="safety">4) Safeguarding and session rules</h2>
          <ul>
            <li>Which platform is used, and who can join the call?</li>
            <li>Can a parent observe early lessons for young children?</li>
            <li>Where is your safeguarding guidance published?</li>
            <li>How are chat, screen-share, and recording handled (if at all)?</li>
          </ul>
          <p>Read NoorPath’s <a href="/safeguarding">safeguarding</a> page before enrolment. Keep young learners in a shared family space.</p>

          <h2 id="price">5) Pricing clarity in writing</h2>
          <ul>
            <li>What is the published USD plan — minutes, sessions per month, and inclusions?</li>
            <li>Does the quote match the <a href="/pricing">pricing page</a>?</li>
            <li>What are pause, cancel, and refund terms in effect at purchase?</li>
            <li>Do sibling discounts apply to the plans we chose?</li>
          </ul>
          <div class="gold-box">
            <strong>Rule:</strong> If a chat message and the published page disagree, pause and request a corrected written quote. Do not send card details through informal messages when a secure checkout exists.
          </div>

          <h2 id="language">6) Language and female-tutor preferences</h2>
          <ul>
            <li>Can we request English (or another) instruction preference?</li>
            <li>Can we request a female tutor for a daughter or sister?</li>
            <li>When is preference confirmed — before payment or after matching?</li>
          </ul>
          <p>Preferences are subject to matching. See <a href="/female-quran-teacher-online">female Quran teacher online</a>.</p>

          <h2 id="trial">7) What a good trial should prove</h2>
          <table class="np-table">
            <tr><th>Check</th><th>Pass signal</th></tr>
            <tr><td>Audio / video</td><td>Clear enough for letter correction</td></tr>
            <tr><td>Rapport</td><td>Learner willing to try again</td></tr>
            <tr><td>Placement</td><td>Honest next-step recommendation</td></tr>
            <tr><td>Parent clarity</td><td>Home echo target for the week</td></tr>
          </table>
          <p>NoorPath’s published trial is ${TRIAL.durationMinutes} minutes with no credit card. <a href="/free-quran-classes-online">Book a free trial</a>.</p>

          <h2 id="red-flags">Red flags that should stop the booking</h2>
          <ul>
            <li>Pressure to pay large amounts before any live lesson</li>
            <li>Refusal to discuss the proposed tutor’s relevant evidence</li>
            <li>Guaranteed Hifz timelines or “finish in X weeks” promises</li>
            <li>No published safeguarding or pricing page</li>
            <li>Push to skip foundations because relatives want Hifz branding</li>
          </ul>

          <h2 id="script">Copy-paste message you can send</h2>
          <p><em>“We want a live one-to-one trial for [age/level]. Please confirm timezone labeling, proposed tutor fit, recommended course, session length, make-up rules, and the exact USD plan before enrolment. We may request a female tutor: [yes/no].”</em></p>

          <h2 id="start">Next step</h2>
          <p>Use the questions above in your trial, then enrol only when answers and teaching fit are clear. Explore <a href="/quran-teacher-online">online Quran teacher</a>, <a href="/one-on-one-quran-classes">one-on-one Quran classes</a>, and <a href="/online-quran-classes-for-kids">classes for kids</a>.</p>

          <h2 id="faq">FAQ</h2>
          <details class="faq-acc"><summary>What is the most important question before booking?<span>+</span></summary>
            <p>Ask what the proposed tutor will teach this learner next — and why — after hearing them live. Placement honesty beats marketing labels.</p>
          </details>
          <details class="faq-acc"><summary>Should I ask for Ijazah proof?<span>+</span></summary>
            <p>Ask for credentials relevant to your goal. Ijazah is one possible form of evidence, not the only one, and not a substitute for teaching skill with children.</p>
          </details>
          <details class="faq-acc"><summary>Can I book without a credit card trial first?<span>+</span></summary>
            <p>Yes with NoorPath’s published free trial — no credit card required. Use it to test fit before paying for a package.</p>
          </details>
          <details class="faq-acc"><summary>What if answers are vague?<span>+</span></summary>
            <p>Do not enrol. Request written clarification or try another provider. Vague answers often become billing and schedule disputes later.</p>
          </details>
          <p>Booking a Quran tutor is a trust purchase. Good questions protect your child, your calendar, and your wallet — then a calm trial confirms the human fit.</p>`,
  },

  "live-online-quran-tutor-vs-prerecorded-courses": {
    style: S,
    content: `<p>Families comparing a <strong>live online Quran tutor vs pre-recorded courses</strong> are usually choosing between accountability and convenience. Both can help — but they fix different problems. Pronunciation accuracy and child consistency usually need live listening; flexible revision can use recordings as support.</p>

          <div class="highlight-box">
            <strong>Quick answer:</strong> Choose <strong>live one-to-one</strong> when you need real-time correction, placement, and a recurring habit. Use <strong>pre-recorded</strong> as soft practice between lessons — not as the only path for uncertain makharij. Start with a <a href="/free-quran-classes-online">free live trial</a> · see <a href="/one-on-one-quran-classes">1-to-1 Quran classes</a>.
          </div>

          <h2 id="compare">Side-by-side comparison</h2>
          <table class="np-table">
            <tr><th>Factor</th><th>Live online tutor</th><th>Pre-recorded course / app</th></tr>
            <tr><td><strong>Correction</strong></td><td>Immediate, personal</td><td>None or delayed / automated</td></tr>
            <tr><td><strong>Placement</strong></td><td>Adjusted to the learner</td><td>Often one-size playlist</td></tr>
            <tr><td><strong>Accountability</strong></td><td>Fixed appointment</td><td>Easy to skip</td></tr>
            <tr><td><strong>Flexibility</strong></td><td>Needs scheduling</td><td>Watch anytime</td></tr>
            <tr><td><strong>Best use</strong></td><td>Core learning path</td><td>Revision between live lessons</td></tr>
            <tr><td><strong>Risk</strong></td><td>Bad match / no-shows</td><td>Wrong habits locked in</td></tr>
          </table>

          <h2 id="when-live">When a live tutor is the better buy</h2>
          <ul>
            <li>Child is learning Arabic letters or joining for the first time</li>
            <li>Throat / heavy letters are mixed up and need modelling</li>
            <li>Hifz needs new work <em>and</em> revision discipline</li>
            <li>Learner is shy and freezes in groups — private 1-to-1 helps</li>
            <li>Parents cannot check pronunciation themselves</li>
          </ul>
          <p>Related: <a href="/blog/is-online-quran-learning-as-effective-as-in-person">is online Quran learning as effective as in-person</a> and <a href="/blog/online-quran-classes-for-shy-kids">online Quran classes for shy kids</a>.</p>

          <h2 id="when-recorded">When pre-recorded still has value</h2>
          <ul>
            <li>Short recognition drills between live lessons</li>
            <li>Adults who want extra listening models after work</li>
            <li>Travel weeks when a live slot is temporarily hard</li>
            <li>Free soft practice — e.g. <a href="/noorani-qaida">Interactive Noorani Qaida</a> games</li>
          </ul>
          <div class="gold-box">
            <strong>Honest limit:</strong> A video cannot hear your child’s ق vs ك. If the sound is uncertain, do not “practise harder” from English spelling — log it for the live tutor.
          </div>

          <h2 id="hybrid">The hybrid model that works for most families</h2>
          <ol>
            <li>Live lesson(s) each week — correction + placement</li>
            <li>10–15 minute home echo on most other days</li>
            <li>Optional recorded/app drills for recognition only</li>
            <li>Weekly note of unclear letters for the tutor</li>
          </ol>
          <p>This hybrid beats “app only” guilt and “live only” overload. Frequency guidance: <a href="/blog/how-many-quran-classes-per-week">how many Quran classes per week</a>.</p>

          <h2 id="cost">Cost thinking without false bargains</h2>
          <p>Pre-recorded often looks cheaper per month. Live tutoring costs more because a human listens. Compare value as <em>correct habits per month</em>, not sticker price alone. A cheap course that teaches wrong letters becomes expensive rework.</p>
          <p>Check published live plans on <a href="/pricing">pricing</a> — USD amounts, session length, and sessions per month.</p>

          <h2 id="kids-adults">Kids vs adults</h2>
          <p><strong>Kids</strong> usually need live accountability and kind correction. Recordings alone rarely survive school fatigue.</p>
          <p><strong>Adults</strong> can use more recorded drills if they already read, but beginners still benefit from live placement. See <a href="/online-quran-classes-for-adults">online Quran classes for adults</a> and <a href="/online-quran-for-beginners">online Quran for beginners</a>.</p>

          <h2 id="choose">Decision checklist</h2>
          <ul>
            <li>Is pronunciation accuracy first priority? → Live</li>
            <li>Is the learner a complete beginner? → Live</li>
            <li>Do you only need extra listening after a solid live plan? → Recorded support OK</li>
            <li>Has the household failed self-paced apps before? → Live appointment</li>
          </ul>

          <h2 id="start">Start this week</h2>
          <p>Book a live trial, keep any apps as soft support only, and protect a short daily echo. <a href="/free-quran-classes-online">Free trial</a> · <a href="/online-quran-classes">online Quran classes</a> · <a href="/learn-tajweed-online">learn Tajweed online</a>.</p>

          <h2 id="faq">FAQ</h2>
          <details class="faq-acc"><summary>Is a live online Quran tutor better than YouTube?<span>+</span></summary>
            <p>For correction and placement, yes. YouTube can help listening exposure but cannot hear and fix your learner’s mistakes in real time.</p>
          </details>
          <details class="faq-acc"><summary>Can we use only pre-recorded courses successfully?<span>+</span></summary>
            <p>Some disciplined adults manage review this way. Children and beginners usually need live listening to avoid locking in wrong sounds.</p>
          </details>
          <details class="faq-acc"><summary>Are NoorPath classes live or recorded?<span>+</span></summary>
            <p>NoorPath’s core offering is live one-to-one online lessons. Free Interactive Noorani Qaida tools can support recognition between lessons.</p>
          </details>
          <details class="faq-acc"><summary>What if we cannot afford many live lessons?<span>+</span></summary>
            <p>Choose the lightest published live plan you can keep, maximise short home practice, and avoid stacking paid apps that replace correction.</p>
          </details>
          <p>Live tutors buy correction and habit. Recordings buy flexibility. Use each for what it can honestly do — and let a trial prove the live fit before you pay for intensity.</p>`,
  },

  "online-quran-class-checklist-for-parents": {
    style: S,
    content: `<p>An <strong>online Quran class checklist for parents</strong> turns “we should start” into a calm first month. Use it before the trial, on lesson day, and after the call — so device chaos and vague goals do not waste the tutor’s time or your child’s patience.</p>

          <div class="highlight-box">
            <strong>Core idea:</strong> Prepare the space, know the goal, observe early lessons, and leave with one home-echo target. Book a <a href="/free-quran-classes-online">free ${TRIAL.durationMinutes}-minute trial</a> when the checklist below is ready.
          </div>

          <h2 id="before-trial">Before the first trial — booking checklist</h2>
          <ul>
            <li>☐ Learner age and honest current ability written in one paragraph</li>
            <li>☐ Preferred timezone + two weekday windows</li>
            <li>☐ Female-tutor preference noted if needed</li>
            <li>☐ Goal chosen: Qaida / reading / Tajweed / Hifz (or “not sure — please place”)</li>
            <li>☐ Device with camera/mic tested once</li>
            <li>☐ Quiet shared space identified for young children</li>
          </ul>
          <p>Questions to ask: <a href="/blog/questions-to-ask-before-booking-a-quran-tutor">questions to ask before booking a Quran tutor</a>.</p>

          <h2 id="lesson-day">Lesson-day checklist (10 minutes early)</h2>
          <table class="np-table">
            <tr><th>Item</th><th>Done?</th></tr>
            <tr><td>Charger plugged / battery healthy</td><td>☐</td></tr>
            <tr><td>Headphones if household is noisy</td><td>☐</td></tr>
            <tr><td>Other tabs and notifications closed</td><td>☐</td></tr>
            <tr><td>Mushaf / Qaida / notebook ready if used</td><td>☐</td></tr>
            <tr><td>Water sip + bathroom done</td><td>☐</td></tr>
            <tr><td>Parent nearby for ages under ~10</td><td>☐</td></tr>
            <tr><td>Snack finished — not mid-lesson grazing</td><td>☐</td></tr>
          </table>

          <h2 id="during">During the lesson — parent role</h2>
          <ul>
            <li>Observe without coaching over the tutor (unless asked)</li>
            <li>Note unclear letters for later — do not invent sounds</li>
            <li>Watch for fatigue in the final minutes (length may be wrong)</li>
            <li>Keep siblings from interrupting the camera frame</li>
          </ul>
          <p>Safeguarding expectations: <a href="/safeguarding">safeguarding</a>. Shy learners: <a href="/blog/online-quran-classes-for-shy-kids">online Quran classes for shy kids</a>.</p>

          <h2 id="after">After the lesson — 3-minute wrap</h2>
          <ol>
            <li>Write the home-echo target in one line</li>
            <li>Schedule the next live slot in the family calendar (timezone labeled)</li>
            <li>Praise effort, not speed</li>
            <li>If something felt unsafe or unclear, contact support through published channels</li>
          </ol>

          <h2 id="first-month">First-month progress checklist</h2>
          <ul>
            <li>☐ Attendance kept on the agreed days</li>
            <li>☐ Home echo happened on most non-lesson days (even 8–10 minutes)</li>
            <li>☐ Placement still feels honest (not too easy / too hard)</li>
            <li>☐ Tutor rapport: child willing to join again</li>
            <li>☐ Frequency/length match energy — adjust using published plans if needed</li>
          </ul>
          <p>Decision helpers: <a href="/blog/how-many-quran-classes-per-week">classes per week</a> · <a href="/blog/how-long-should-online-quran-lessons-be">lesson length</a> · <a href="/pricing">pricing</a>.</p>

          <h2 id="home-echo">Home-echo mini checklist</h2>
          <ul>
            <li>☐ Same small space most days</li>
            <li>☐ One target only</li>
            <li>☐ Stop while goodwill remains</li>
            <li>☐ Optional soft practice: <a href="/noorani-qaida">Interactive Noorani Qaida</a></li>
          </ul>
          <p>Full routine: <a href="/blog/quran-practice-routine-at-home-kids">Quran practice routine at home for kids</a>.</p>

          <h2 id="avoid">Checklist mistakes to avoid</h2>
          <ul>
            <li>Starting the call late every week</li>
            <li>Correcting every sound over the tutor</li>
            <li>Comparing your child to cousins during the lesson</li>
            <li>Buying a second paid app the same week “just in case”</li>
            <li>Skipping the trial and paying for intensity first</li>
          </ul>

          <h2 id="start">Start this week</h2>
          <p>Print or save this checklist, run the before-trial items, then book. <a href="/free-quran-classes-online">Free trial</a> · <a href="/online-quran-classes-for-kids">kids classes</a> · <a href="/online-quran-classes">online Quran classes</a>.</p>

          <h2 id="faq">FAQ</h2>
          <details class="faq-acc"><summary>Do parents need to sit in every online Quran class?<span>+</span></summary>
            <p>For young children, yes at the start — at least nearby. Older learners may need less observation once trust and routines are stable.</p>
          </details>
          <details class="faq-acc"><summary>What if we fail the checklist some weeks?<span>+</span></summary>
            <p>Reset the next lesson day. Shorten home echo rather than cancelling the live habit entirely.</p>
          </details>
          <details class="faq-acc"><summary>Should we record lessons?<span>+</span></summary>
            <p>Follow the academy’s published policy and privacy rules. Do not assume recording is allowed. Ask before any recording.</p>
          </details>
          <details class="faq-acc"><summary>Is a checklist enough without a tutor?<span>+</span></summary>
            <p>No. Checklists organise the household. Live correction still needs a teacher when pronunciation accuracy matters.</p>
          </details>
          <p>Parents who run a simple checklist waste fewer lessons. Prepare once, protect the slot, and let consistency — not perfection — carry the month.</p>`,
  },
};
