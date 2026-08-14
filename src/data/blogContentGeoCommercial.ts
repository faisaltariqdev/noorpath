/**
 * Selective geo commercial blogs — country/city intent with people-first depth.
 * Online-only; no campuses; trial/pricing from academyFacts only.
 * Not a scaled doorway factory — one unique angle per market gap.
 */
import { PRICING_PLANS, TRIAL } from "@/lib/academyFacts";

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

const trialMins = TRIAL.durationMinutes;
const startPrice = PRICING_PLANS[0].monthlyPriceUsd;

export const geoCommercialBlogContent: Record<string, { style: string; content: string }> = {
  "online-quran-classes-canada-for-kids": {
    style: S,
    content: `<p><strong>Online Quran classes Canada for kids</strong> work when the plan respects real provincial clocks — ET, CT, MT, PT, AT or NT — and a tired after-school brain, not when parents chase the most advanced course name on day one. Live one-to-one tutoring from home can protect a recurring slot without claiming a Canadian campus.</p>

          <div class="highlight-box">
            <strong>Answer first:</strong> Request a fixed after-school window in <em>your</em> province’s time zone, place the child by reading level (often <a href="/noorani-qaida">Noorani Qaida</a> first), and test fit with a free ${trialMins}-minute trial (no credit card). Country scheduling lives on the <a href="/locations/online-quran-classes-canada">Canada online Quran classes</a> hub — NoorPath teaches <strong>online only</strong>.
          </div>

          <h2 id="why-canada">Why Canadian families search “online Quran classes Canada”</h2>
          <p>Travel across a large metro after school is expensive in time. Toronto, Mississauga, Vancouver, Calgary, Ottawa and Montreal households often want live correction without another drive. Online one-to-one helps because a tutor hears each letter in real time — apps and recordings cannot catch soft throat letters the same way.</p>
          <p>State your city when you book so matching understands your local clock. A Toronto ET slot is not the same as a Calgary MT slot, and Newfoundland’s half-hour offset surprises families who copy “Eastern Time” blindly.</p>

          <h2 id="time-zones">Canadian time zones and daylight saving</h2>
          <table class="np-table">
            <tr><th>Zone</th><th>What to confirm</th></tr>
            <tr><td><strong>ET / CT</strong></td><td>Province + seasonal status on the lesson date</td></tr>
            <tr><td><strong>MT / PT</strong></td><td>Whether your locality follows the usual provincial pattern</td></tr>
            <tr><td><strong>AT / NT</strong></td><td>Do not treat Eastern Time as local; note NT’s half-hour</td></tr>
            <tr><td><strong>Any zone</strong></td><td>Recheck after clock changes, travel or a move</td></tr>
          </table>
          <p>Saskatchewan and some northern arrangements do not change clocks like Ontario. Ask for the recurring appointment in the learner’s wall-clock time.</p>

          <h2 id="placement">Place by skill, not by cousin pressure</h2>
          <ul>
            <li>Letter recognition shaky → Noorani Qaida</li>
            <li>Continuous reading exists → Quran reading or Tajweed</li>
            <li>Hifz goal with weak reading → fix reading first</li>
          </ul>
          <p>Toronto families comparing options can also read the <a href="/online-quran-classes/toronto">Toronto city guide</a> — it is scheduling help, not a local office.</p>

          <h2 id="routine">A realistic Canadian after-school week</h2>
          <table class="np-table">
            <tr><th>Block</th><th>Plan</th></tr>
            <tr><td><strong>Live lesson</strong></td><td>1–2 sessions/week at the same local clock time</td></tr>
            <tr><td><strong>Home echo</strong></td><td>10–15 minutes most other days</td></tr>
            <tr><td><strong>Winter buffer</strong></td><td>Leave margin after dark, cold commutes</td></tr>
            <tr><td><strong>Exam weeks</strong></td><td>Shorten home practice; keep the live slot if possible</td></tr>
          </table>

          <h2 id="female">Female tutor requests in Canada</h2>
          <p>State a female-tutor preference when booking. Availability is confirmed after matching. See <a href="/blog/female-quran-teacher-online-canada">female Quran teacher online Canada</a> and the commercial <a href="/female-quran-teacher-online">female Quran teacher</a> page.</p>

          <h2 id="pricing">USD plans in CAD</h2>
          <p>Published plans start from $${startPrice}/month for ${PRICING_PLANS[0].sessionsPerWeek} class per week (USD). Convert to CAD with your bank rate; NoorPath does not publish a fixed CAD list. Compare lengths on the <a href="/pricing">pricing</a> page.</p>

          <h2 id="start">Start this week</h2>
          <ol>
            <li>Open the <a href="/locations/online-quran-classes-canada">Canada hub</a></li>
            <li>Write two workable local-time windows and the child’s real reading level</li>
            <li>Book a <a href="/free-quran-classes-online">free ${trialMins}-minute trial</a> — ${TRIAL.availabilityNote}</li>
          </ol>

          <h2 id="faq">FAQ</h2>
          <details class="faq-acc"><summary>Do you have a Quran school campus in Canada?<span>+</span></summary>
            <p>No. NoorPath teaches online only. Country and city pages explain scheduling for Canadian households — not physical branches.</p>
          </details>
          <details class="faq-acc"><summary>Can kids in Toronto and Vancouver use the same service?<span>+</span></summary>
            <p>Yes. Matching uses level, local time zone and preferences. Share ET vs PT clearly so the recurring slot is not ambiguous.</p>
          </details>
          <details class="faq-acc"><summary>Is the free trial really free?<span>+</span></summary>
            <p>Yes — ${trialMins} minutes, no credit card. You only pay if you choose a published plan after the trial.</p>
          </details>
          <details class="faq-acc"><summary>How is this different from the USA kids guide?<span>+</span></summary>
            <p>Canada’s multi-zone map, Newfoundland offset and uneven daylight-saving rules need different booking checks than a single US Eastern Time story. For US households see <a href="/blog/online-quran-classes-usa-kids-guide">online Quran classes USA kids guide</a>.</p>
          </details>
          <p>Related: <a href="/online-quran-classes-for-kids">kids Quran classes</a> · <a href="/blog/quran-practice-routine-at-home-kids">home practice routine</a> · <a href="/locations/online-quran-classes-usa">USA hub</a>.</p>`,
  },

  "quran-classes-for-adults-in-singapore": {
    style: S,
    content: `<p><strong>Quran classes for adults in Singapore</strong> are often searched by working professionals and returning beginners who want discreet 1-to-1 correction in SGT evenings — not another crowded weekend group. This guide is adult-focused and complements the family MY/SG article on <a href="/blog/online-quran-for-malaysian-and-singaporean-families">Malaysian and Singaporean families</a>.</p>

          <div class="highlight-box">
            <strong>Answer first:</strong> Adults in Singapore can request live online one-to-one Quran lessons in SGT, placed by ability (often Qaida honesty if letters were never learned). Book a free ${trialMins}-minute trial with no credit card. Scheduling context: <a href="/locations/online-quran-classes-singapore">Singapore online Quran classes</a> hub — online only, no Singapore campus.
          </div>

          <h2 id="why-adults">Why adults search this in Singapore</h2>
          <p>CCA-heavy children’s calendars are one story. Adult learners face another: late office hours, privacy, and embarrassment about restarting letters. Live one-to-one online classes let you read aloud without a room of peers — and a tutor can correct makharij in real time.</p>
          <p>GSC-style queries such as “quran classes for adults singapore” and “iqra classes singapore” often mean the same need: structured Arabic reading with a patient teacher after work.</p>

          <h2 id="sgt">SGT evenings that survive overtime</h2>
          <table class="np-table">
            <tr><th>Window</th><th>When it fits</th></tr>
            <tr><td><strong>Weekday 8–10 pm SGT</strong></td><td>After commute and dinner for many office roles</td></tr>
            <tr><td><strong>Weekend morning</strong></td><td>When weeknights collapse under overtime</td></tr>
            <tr><td><strong>Two options</strong></td><td>Offer a primary and backup so matching can succeed</td></tr>
          </table>
          <p>SGT (UTC+8) does not observe daylight saving — still label the invite in SGT and confirm tutor-side clock changes in writing.</p>

          <h2 id="placement">Adult placement — say the truth</h2>
          <ul>
            <li>Never learned letters → start Noorani Qaida without apology</li>
            <li>Read slowly with mistakes → guided reading + Tajweed focus</li>
            <li>Want Hifz → only after reading is stable enough for revision</li>
          </ul>
          <p>See <a href="/online-quran-classes-for-adults">online Quran classes for adults</a>, <a href="/online-quran-for-beginners">beginners hub</a>, and <a href="/blog/adult-embarrassed-to-learn-quran-beginner">adult embarrassed to learn Quran</a>.</p>

          <h2 id="female">Female tutor for sisters in Singapore</h2>
          <p>Adult women can request a female tutor. Preference is confirmed at matching. Details: <a href="/female-quran-teacher-online">female Quran teacher online</a>.</p>

          <h2 id="pricing">USD → SGD budgeting</h2>
          <p>Plans are charged in USD (from $${startPrice}/month for the Starter plan). Convert to SGD with your bank rate. Compare session length on <a href="/pricing">pricing</a> — NoorPath does not publish a fixed SGD list.</p>

          <h2 id="start">Start this week</h2>
          <ol>
            <li>Write two SGT windows and an honest skill note</li>
            <li>Open the <a href="/locations/online-quran-classes-singapore">Singapore hub</a></li>
            <li>Book a <a href="/free-quran-classes-online">free trial</a> — ${TRIAL.availabilityNote}</li>
          </ol>

          <h2 id="faq">FAQ</h2>
          <details class="faq-acc"><summary>Are these in-person Iqra classes in Singapore?<span>+</span></summary>
            <p>No. NoorPath is online only. If you need a local classroom, ask a mosque or community centre separately.</p>
          </details>
          <details class="faq-acc"><summary>Can adults and children share one plan?<span>+</span></summary>
            <p>Usually no — skills and pacing differ. Book separate assessments so one learner is not coasting while the other is overwhelmed.</p>
          </details>
          <details class="faq-acc"><summary>How is this different from the Malaysia/Singapore family blog?<span>+</span></summary>
            <p>That article covers household/CCA planning for kids. This page owns adult privacy, overtime SGT windows and beginner honesty for working adults.</p>
          </details>
          <details class="faq-acc"><summary>Do you guarantee how fast I will read?<span>+</span></summary>
            <p>No. Progress depends on starting point, attendance and practice. The trial shows fit — not a completion promise.</p>
          </details>
          <p>Related: <a href="/learn-quran-online">learn Quran online</a> · <a href="/blog/online-quran-trial-what-to-expect">what to expect in a trial</a>.</p>`,
  },

  "online-quran-classes-new-zealand-for-kids": {
    style: S,
    content: `<p><strong>Online Quran classes New Zealand for kids</strong> matter most when local options are thin outside Auckland — or when Auckland traffic makes another after-school trip unrealistic. Live one-to-one online lessons arrive at the kitchen table in NZST/NZDT without inventing a New Zealand campus.</p>

          <div class="highlight-box">
            <strong>Answer first:</strong> Protect one recurring NZST/NZDT slot, place by reading level, and request a free ${trialMins}-minute trial (no credit card). Use the <a href="/locations/online-quran-classes-new-zealand">New Zealand online Quran classes</a> hub for clock and school-year context — NoorPath teaches online only.
          </div>

          <h2 id="why-nz">“Quran classes near me” in New Zealand</h2>
          <p>Auckland has the widest local choice; Wellington, Christchurch and Hamilton sit in the middle; smaller towns may have nothing nearby. Online tutoring is not a community substitute — it is live listening and correction when that is the scarce resource.</p>
          <p>City guides for <a href="/online-quran-classes/auckland">Auckland</a> and <a href="/online-quran-classes/wellington">Wellington</a> add local scheduling detail. They are not offices.</p>

          <h2 id="nzst">NZST / NZDT and the twelve-hour gap</h2>
          <p>New Zealand changes clocks on different dates from the Northern Hemisphere. Ask for the slot in New Zealand local time so your wall clock stays stable. Early morning NZ (about 6–8 am) often matches tutor evenings abroad; a 4–6 pm NZ after-school request can be harder to fill.</p>
          <table class="np-table">
            <tr><th>Check</th><th>Question</th></tr>
            <tr><td><strong>Clock label</strong></td><td>Is the recurring time recorded in NZST/NZDT?</td></tr>
            <tr><td><strong>September / April</strong></td><td>What happens at NZ daylight-saving weekends?</td></tr>
            <tr><td><strong>Two windows</strong></td><td>Did you offer a morning backup as well as after school?</td></tr>
          </table>

          <h2 id="school">Four-term school year and NCEA</h2>
          <p>Term 4 and NCEA external exams in November are the hard stretch for older teens — reduce frequency rather than stopping. December–January summer break is often easier to add lesson time because tutor-side calendars are still in a normal week.</p>

          <h2 id="courses">Course fit for NZ kids</h2>
          <ul>
            <li>Beginners → <a href="/noorani-qaida">Noorani Qaida</a></li>
            <li>Readers → Quran reading / <a href="/learn-tajweed-online">Tajweed</a></li>
            <li>Hifz → new lines + daily revision; no guaranteed completion date — see <a href="/hifz-quran-online">Hifz online</a></li>
          </ul>

          <h2 id="female">Female tutors</h2>
          <p>Request a female tutor when booking; confirmation happens at matching. Prefer flexibility on the hour if the time zone already narrows the pool. <a href="/female-quran-teacher-online">Female Quran teacher online</a>.</p>

          <h2 id="pricing">USD → NZD</h2>
          <p>Plans from $${startPrice}/month (USD Starter). Convert to NZD with your bank rate. Details: <a href="/pricing">pricing</a>.</p>

          <h2 id="start">Start this week</h2>
          <ol>
            <li>Note town, two NZ windows, reading level, female preference if any</li>
            <li>Read the <a href="/locations/online-quran-classes-new-zealand">NZ hub</a></li>
            <li>Book a <a href="/free-quran-classes-online">free trial</a></li>
          </ol>

          <h2 id="faq">FAQ</h2>
          <details class="faq-acc"><summary>Do you visit homes in Auckland?<span>+</span></summary>
            <p>No. Lessons are remote video only. For in-person needs, ask a local mosque or community class.</p>
          </details>
          <details class="faq-acc"><summary>Is Christchurch covered the same way as Auckland?<span>+</span></summary>
            <p>The online service is the same. Your town changes why you book and which hours you can defend — not the published plan structure.</p>
          </details>
          <details class="faq-acc"><summary>How does this differ from the Australia kids guide?<span>+</span></summary>
            <p>NZ clock changes and the long gap to Northern Hemisphere tutors create different matching maths. Australia families should use <a href="/blog/after-school-quran-classes-australia-for-kids">after-school Quran classes Australia</a> and the <a href="/locations/online-quran-classes-australia">Australia hub</a>.</p>
          </details>
          <details class="faq-acc"><summary>Is the trial free?<span>+</span></summary>
            <p>Yes — ${trialMins} minutes, no credit card. ${TRIAL.availabilityNote}</p>
          </details>
          <p>Related: <a href="/online-quran-classes-for-kids">kids classes</a> · <a href="/blog/online-quran-classes-for-muslim-families-abroad">families abroad</a>.</p>`,
  },

  "after-school-quran-classes-australia-for-kids": {
    style: S,
    content: `<p><strong>After-school Quran classes Australia for kids</strong> succeed when the slot survives real AEST/AEDT (or ACST/AWST) evenings — sport, homework and daylight-saving borders — not when a parent books the earliest open time on a tired school night. Live online 1-to-1 can remove another suburban drive without claiming an Australian campus.</p>

          <div class="highlight-box">
            <strong>Answer first:</strong> Choose a repeatable after-school window in the learner’s state time zone, place by skill, and book a free ${trialMins}-minute trial. Hub: <a href="/locations/online-quran-classes-australia">Australia online Quran classes</a>. Indexable city depth: <a href="/online-quran-classes/sydney">Sydney</a> and <a href="/online-quran-classes/melbourne">Melbourne</a> — online only.
          </div>

          <h2 id="why-au">Why Australian parents search this</h2>
          <p>Queries like “best quran classes for kids in australia” and “online tajweed classes australia” usually mean: live correction after school without a long commute. “Best” should mean fit — tutor evidence, schedule reliability and honest placement — not a trophy claim.</p>

          <h2 id="time">State time zones (do not say “Australia time”)</h2>
          <table class="np-table">
            <tr><th>Label</th><th>Practical meaning</th></tr>
            <tr><td><strong>AEST / AEDT</strong></td><td>Eastern states — check daylight saving on the date</td></tr>
            <tr><td><strong>ACST / ACDT</strong></td><td>Half-hour offset; SA seasonal rules</td></tr>
            <tr><td><strong>AWST</strong></td><td>Western Australia — separate from eastern shifts</td></tr>
            <tr><td><strong>QLD / NT / WA</strong></td><td>Many areas skip daylight saving — do not copy Sydney summer time</td></tr>
          </table>
          <p>Sydney and Melbourne both use eastern daylight saving, but NSW vs Victorian term calendars and suburb traffic still differ — use the city guides for local buffers.</p>

          <h2 id="routine">After-school routine that sticks</h2>
          <ul>
            <li>Snack + short break before the lesson</li>
            <li>Same weekday clock time each week</li>
            <li>10–15 minute home echo on non-lesson days</li>
            <li>Lighter plan in exam weeks — continuity over intensity</li>
          </ul>
          <p>Between lessons, soft practice on the <a href="/noorani-qaida">Interactive Noorani Qaida</a> hub helps recognition; live teachers remain the correction path.</p>

          <h2 id="courses">Course routing</h2>
          <p>Qaida → reading → Tajweed → Hifz only when foundations hold. Avoid cousin comparisons. Published plans from $${startPrice}/month USD — see <a href="/pricing">pricing</a> and convert to AUD with your bank.</p>

          <h2 id="female">Female tutors</h2>
          <p>Request female matching when booking. <a href="/female-quran-teacher-online">Female Quran teacher online</a>.</p>

          <h2 id="start">Start this week</h2>
          <ol>
            <li>Name state/territory and two after-school windows</li>
            <li>Open the <a href="/locations/online-quran-classes-australia">Australia hub</a></li>
            <li>Book a <a href="/free-quran-classes-online">free trial</a> — ${TRIAL.availabilityNote}</li>
          </ol>

          <h2 id="faq">FAQ</h2>
          <details class="faq-acc"><summary>Do you have centres in Sydney or Melbourne?<span>+</span></summary>
            <p>No. City pages are remote scheduling guides. Lessons are video from home.</p>
          </details>
          <details class="faq-acc"><summary>Can Brisbane use the same “Sydney time” slot all year?<span>+</span></summary>
            <p>Not safely. Queensland generally does not observe daylight saving; Sydney does. Confirm the learner’s state label on every seasonal change.</p>
          </details>
          <details class="faq-acc"><summary>Is this the same as the USA or Canada kids blogs?<span>+</span></summary>
            <p>No — Australian state zones and daylight-saving borders are the unique risk. Canada families should use <a href="/blog/online-quran-classes-canada-for-kids">online Quran classes Canada for kids</a>.</p>
          </details>
          <details class="faq-acc"><summary>What does the free trial include?<span>+</span></summary>
            <p>A live ${trialMins}-minute one-to-one session for level check and fit — not an unlimited free course. No credit card.</p>
          </details>
          <p>Related: <a href="/blog/online-quran-classes-for-kids-parent-guide">kids parent guide</a> · <a href="/locations/online-quran-classes-new-zealand">NZ hub</a>.</p>`,
  },

  "female-quran-teacher-online-canada": {
    style: S,
    content: `<p>Parents searching for a <strong>female Quran teacher online Canada</strong> usually want two things at once: a comfortable match for a daughter or adult sister, and a lesson time that respects Canadian provincial clocks. This page owns that Canada-specific request path — complementary to the general <a href="/female-quran-teacher-online">female Quran teacher online</a> page and the UK-leaning <a href="/blog/female-quran-teacher-for-kids">female Quran teacher for kids</a> guide.</p>

          <div class="highlight-box">
            <strong>Answer first:</strong> You can request a female tutor for live 1-to-1 online Quran classes in Canada. Credentials and schedule for the proposed tutor are confirmed before ongoing enrolment. Free trial: ${trialMins} minutes, no credit card. Start via <a href="/free-quran-classes-online">free Quran classes online</a> and state “female tutor” plus your province/time zone.
          </div>

          <h2 id="who">Who this is for</h2>
          <ul>
            <li>Daughters needing a female teacher for Qaida, reading, Tajweed or Hifz</li>
            <li>Adult sisters returning to reading privately</li>
            <li>Toronto, Vancouver, Calgary, Ottawa, Montreal and other Canadian households booking by local time</li>
          </ul>

          <h2 id="how">How female matching works (honest process)</h2>
          <ol>
            <li>Submit preferred Canadian local windows (ET/CT/MT/PT/AT/NT)</li>
            <li>State female-tutor preference and learner level</li>
            <li>NoorPath confirms a proposed match — preference is a request until confirmed</li>
            <li>Use the free trial to assess pace, audio and rapport before paying for a plan</li>
          </ol>
          <p>${TRIAL.availabilityNote} Plans start from $${startPrice}/month USD — see <a href="/pricing">pricing</a>.</p>

          <h2 id="timezone">Why Canadian time zones matter for female tutors</h2>
          <p>Female-tutor preference narrows the pool at the same moment multi-zone Canada does. Offering a second window (for example weekend morning as well as after school) usually speeds matching. Toronto ET after-school demand is high; a Calgary MT or Vancouver PT household should not assume the same open hours.</p>
          <p>City context for Greater Toronto: <a href="/online-quran-classes/toronto">Toronto online Quran classes</a>. Country hub: <a href="/locations/online-quran-classes-canada">Canada hub</a>.</p>

          <h2 id="courses">Subjects you can request</h2>
          <table class="np-table">
            <tr><th>Focus</th><th>When it fits</th></tr>
            <tr><td><strong>Noorani Qaida</strong></td><td>Letters and joining still weak</td></tr>
            <tr><td><strong>Quran reading</strong></td><td>Continuous reading with correction</td></tr>
            <tr><td><strong>Tajweed</strong></td><td>Rules applied in live recitation</td></tr>
            <tr><td><strong>Hifz</strong></td><td>New memorisation + revision — no fixed completion promise</td></tr>
          </table>

          <h2 id="safety">Safeguarding</h2>
          <p>Keep young learners in a shared space. Use known platforms. Confirm the tutor before ongoing payment. Read <a href="/safeguarding">safeguarding</a>.</p>

          <h2 id="start">Start this week</h2>
          <ol>
            <li>Write province, two local-time windows, female preference, course goal</li>
            <li>Book the <a href="/free-quran-classes-online">free trial</a></li>
            <li>Review the <a href="/locations/online-quran-classes-canada">Canada hub</a> for zone checks</li>
          </ol>

          <h2 id="faq">FAQ</h2>
          <details class="faq-acc"><summary>Can I get a female Quran teacher in Toronto online?<span>+</span></summary>
            <p>You can request one with Eastern Time preferences. The tutor may teach remotely from elsewhere — city pages are not proof of a local teacher living in Toronto.</p>
          </details>
          <details class="faq-acc"><summary>Are female tutors guaranteed at a specific hour?<span>+</span></summary>
            <p>No. Preferences are confirmed after matching. Offering two windows improves odds.</p>
          </details>
          <details class="faq-acc"><summary>Is this only for kids?<span>+</span></summary>
            <p>No. Adult sisters in Canada can request female tutors too — see also <a href="/quran-classes-for-sisters">Quran classes for sisters</a>.</p>
          </details>
          <details class="faq-acc"><summary>How do CAD payments work?<span>+</span></summary>
            <p>Charges are in USD. Your bank converts to CAD; FX fees may apply. Use published USD amounts on the pricing page as the source of truth.</p>
          </details>
          <p>Related: <a href="/blog/online-quran-classes-canada-for-kids">online Quran classes Canada for kids</a> · <a href="/blog/female-quran-teacher-for-kids">female teacher for kids (general)</a> · <a href="/locations/online-quran-classes-usa">USA hub</a>.</p>`,
  },
};
