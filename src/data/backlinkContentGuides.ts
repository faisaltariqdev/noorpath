const guideStyle = `.article-body {
  color: #374151;
  font-size: 1.05rem;
  line-height: 1.85;
}
.article-body h2 {
  color: #12372a;
  font-size: 1.65rem;
  line-height: 1.3;
  margin: 2.25rem 0 0.75rem;
}
.article-body h3 {
  color: #1f513f;
  font-size: 1.25rem;
  line-height: 1.4;
  margin: 1.6rem 0 0.55rem;
}
.article-body p,
.article-body ul,
.article-body ol,
.article-body table,
.article-body blockquote {
  margin: 0 0 1.1rem;
}
.article-body ul,
.article-body ol {
  padding-left: 1.5rem;
}
.article-body li {
  margin-bottom: 0.45rem;
}
.article-body a {
  color: #087f5b;
  font-weight: 650;
  text-decoration: underline;
  text-underline-offset: 0.16em;
}
.article-body .table-wrap {
  margin: 1.25rem 0;
  overflow-x: auto;
}
.article-body table {
  border-collapse: collapse;
  min-width: 680px;
  width: 100%;
}
.article-body th,
.article-body td {
  border: 1px solid #d1d5db;
  padding: 0.75rem;
  text-align: left;
  vertical-align: top;
}
.article-body th {
  background: #ecfdf5;
  color: #12372a;
}
.article-body .note,
.article-body blockquote {
  background: #f0fdf4;
  border-left: 4px solid #10b981;
  padding: 1rem 1.1rem;
}
.article-body .warning {
  background: #fffbeb;
  border-left: 4px solid #f59e0b;
  padding: 1rem 1.1rem;
}
.article-body .template {
  background: #f9fafb;
  border: 1px solid #d1d5db;
  border-radius: 0.5rem;
  padding: 1rem 1.1rem;
}
.article-body .checklist {
  list-style: none;
  padding-left: 0;
}
.article-body .checklist li::before {
  content: "☐";
  display: inline-block;
  margin-right: 0.55rem;
}
.article-body caption {
  color: #4b5563;
  font-weight: 700;
  margin-bottom: 0.5rem;
  text-align: left;
}`;

export const backlinkContentGuides: Record<
  string,
  { style: string; content: string }
> = {
  "quran-curriculum-and-lesson-planning": {
    style: guideStyle,
    content: `<p><strong>A useful Quran curriculum starts with what the learner can do now, identifies one meaningful next goal, and turns that goal into a repeatable cycle: model or explain, guide practice, observe, give specific feedback, and review before moving on.</strong> The sequence should change when the evidence changes. It is not a fixed programme by age, school year, number of lessons, or promised completion date.</p>

<p>This guide gives teachers, parents, tutors, and programme leads a practical planning framework for Quran reading, recitation, Tajweed, memorisation, and review. Use the parts that fit the learner and teaching context. For children, a parent or guardian should understand the plan, supervise appropriately, and use the provider's official communication routes. Before arranging remote lessons, read NoorPath's <a href="/safeguarding">safeguarding information</a> and the <a href="/editorial-policy">editorial policy</a>.</p>

<div class="warning"><strong>Scope and limitations:</strong> this is an adaptable planning resource, not an accredited curriculum, qualification framework, fatwa, diagnostic assessment, or guarantee of progress. It does not prescribe a universal age, level, lesson frequency, or timeline. Questions about correct recitation, Tajweed application, memorisation, or religious interpretation should be taken to a suitably qualified teacher. Learners with accessibility, communication, hearing, vision, speech, attention, or other support needs may require specialist input and reasonable adjustments.</div>

<h2>Use the five-part planning cycle</h2>

<ol>
  <li><strong>Observe ability:</strong> collect a short, representative sample of what the learner can do independently and with help.</li>
  <li><strong>Choose the next goal:</strong> define a narrow capability that is valuable, teachable, and observable.</li>
  <li><strong>Guide practice:</strong> model clearly, practise in manageable steps, and gradually reduce support.</li>
  <li><strong>Give feedback:</strong> identify what was accurate, select the most useful correction, and let the learner try again.</li>
  <li><strong>Review and adapt:</strong> revisit previous learning and use current evidence to keep, simplify, extend, or replace the next plan.</li>
</ol>

<p>The cycle matters more than a decorative scheme of work. A written sequence can create consistency, but it should not overrule evidence from the learner. If a learner reads familiar lines fluently but struggles to apply the same skill in an unfamiliar passage, the next lesson should include transfer practice rather than assuming mastery. If fatigue makes a sample unrepresentative, gather evidence again under more suitable conditions.</p>

<h2>Start with an observed-ability profile</h2>

<p>Placement should describe performance, not label the person. Instead of writing “beginner” and stopping there, record what text was used, whether it was familiar, what support was given, what remained accurate, and where the learner became uncertain. Separate dimensions that can develop at different rates. A learner may recognise letters securely yet need help joining them; recite memorised passages confidently yet need support reading new text; or know a rule's name without applying it consistently.</p>

<div class="table-wrap"><table>
  <caption>Observation areas and useful evidence</caption>
  <thead><tr><th>Area</th><th>Observe</th><th>Avoid concluding</th></tr></thead>
  <tbody>
    <tr><td>Foundational decoding</td><td>Letter recognition in different forms, vowel marks, joining, tracking direction, and response to unfamiliar combinations</td><td>That speed alone proves secure reading</td></tr>
    <tr><td>Reading and recitation</td><td>Accuracy, continuity, stopping and restarting, self-correction, and response to a teacher model</td><td>That one successful familiar passage transfers everywhere</td></tr>
    <tr><td>Tajweed application</td><td>Rules already taught, whether they are heard and produced in context, and which correction cues help</td><td>That naming a rule means it is consistently applied</td></tr>
    <tr><td>Memorisation and retention</td><td>Independent recall, prompt dependence, links between passages, and recall after an interval</td><td>That immediate repetition demonstrates durable retention</td></tr>
    <tr><td>Learning routines</td><td>Attention, confidence, communication, materials, home practice, and accessibility needs</td><td>That hesitation indicates low ability or motivation</td></tr>
  </tbody>
</table></div>

<h3>A short baseline routine</h3>

<ul class="checklist">
  <li>Explain that the sample helps plan teaching and is not a pass-or-fail test.</li>
  <li>Use a short familiar sample and, where appropriate, a short unfamiliar sample.</li>
  <li>Begin with minimal prompting, then note which support changes performance.</li>
  <li>Record exact examples rather than a general impression.</li>
  <li>Ask the learner what feels easy, difficult, important, or uncomfortable.</li>
  <li>Confirm goals, constraints, and relevant support needs with the responsible adult where applicable.</li>
  <li>End with an achievable task so assessment does not become an unnecessarily discouraging experience.</li>
</ul>

<p>Do not turn the baseline into an exhaustive examination. It is the first planning sample, not a permanent verdict. If the learner is new to the teacher, language, device, or lesson format, treat early observations cautiously. Recheck after familiarity improves.</p>

<h2>Write goals that guide teaching</h2>

<p>A goal should say what the learner will do, under what conditions, and what evidence will inform the next decision. It need not contain an invented percentage or arbitrary deadline. “Improve Tajweed” is too broad. “During a short teacher-selected passage, notice the previously taught rule, listen to a model, and produce a corrected attempt with decreasing prompts” gives both teacher and learner something usable.</p>

<div class="table-wrap"><table>
  <caption>Turning broad intentions into teachable goals</caption>
  <thead><tr><th>Broad intention</th><th>More practical next goal</th><th>Possible evidence</th></tr></thead>
  <tbody>
    <tr><td>Learn to read Quran</td><td>Blend a small set of already recognised letters with selected vowel marks in new combinations</td><td>Dated examples of independent and prompted attempts</td></tr>
    <tr><td>Improve fluency</td><td>Read a manageable passage in meaningful phrases while preserving accuracy and restarting calmly after an error</td><td>Teacher notes on pauses, corrections, and unfamiliar text</td></tr>
    <tr><td>Learn Tajweed</td><td>Apply one previously explained rule in selected examples, then locate it in a short passage</td><td>Accurate examples, missed examples, and cues required</td></tr>
    <tr><td>Memorise a passage</td><td>Build accurate recall in small sections while retaining previously learned material through planned review</td><td>Independent recall before new memorisation and after later review</td></tr>
    <tr><td>Become independent</td><td>Use an agreed correction routine: pause, identify the point of difficulty, listen or inspect, and retry</td><td>Reduced reliance on immediate teacher answers</td></tr>
  </tbody>
</table></div>

<p>Keep the number of active goals manageable. One lesson may touch several areas, but the teacher should know which capability has priority. A secondary goal can maintain earlier learning while the primary goal receives explanation and guided practice. Goals should also remain ethically bounded: do not promise that a learner will complete a Qaida, master Tajweed, memorise a specified amount, or reach a named standard by a date unless that statement is merely a revisable plan and not a guaranteed outcome.</p>

<h2>Build a responsive sequence</h2>

<p>A curriculum map can show likely dependencies without becoming a rigid ladder. For reading, a learner generally needs to distinguish the relevant symbols before applying them in connected text. For memorisation, accurate input and stable small sections support later joining and review. For Tajweed, a clear example and guided production may precede independent application. Yet learners arrive with uneven prior knowledge, different teaching traditions, and different goals, so the route through these elements may vary.</p>

<div class="table-wrap"><table>
  <caption>Adaptable sequence by evidence</caption>
  <thead><tr><th>If observation suggests...</th><th>Likely teaching response</th><th>Review before extending</th></tr></thead>
  <tbody>
    <tr><td>The learner guesses letters from position or word shape</td><td>Contrast a small set, vary position, slow the task, and ask the learner to explain what they notice</td><td>Use new examples rather than repeating only memorised ones</td></tr>
    <tr><td>Accuracy falls when reading becomes longer</td><td>Shorten the passage, mark sensible stopping points, model phrasing, and rebuild continuity without rushing</td><td>Check whether accuracy remains when support is reduced</td></tr>
    <tr><td>A correction works once but disappears later</td><td>Return to the cue, practise varied examples, and schedule the point for later review</td><td>Recheck in another passage or lesson</td></tr>
    <tr><td>New memorisation displaces older material</td><td>Reduce or pause new material and strengthen structured review with the teacher</td><td>Sample older and recent sections before adding more</td></tr>
    <tr><td>The work is consistently secure and easy</td><td>Increase transfer, independence, or complexity in a small step</td><td>Confirm performance in an unfamiliar example</td></tr>
  </tbody>
</table></div>

<h2>Plan a lesson around guided practice</h2>

<p>A strong lesson is not a race through activities. It creates repeated opportunities to hear or see an accurate model, attempt the target, receive focused feedback, and attempt it again. The proportions below are functions, not fixed minutes. A short lesson and a longer lesson can both contain them.</p>

<ol>
  <li><strong>Settle and check readiness.</strong> Confirm the correct materials, suitable environment, and any immediate barrier. Briefly state the lesson goal in language the learner understands.</li>
  <li><strong>Retrieve prior learning.</strong> Ask for a small independent sample connected to the new work. This provides review and reveals whether the plan remains appropriate.</li>
  <li><strong>Model or explain.</strong> Present one clear example. Highlight the feature that matters and avoid loading the explanation with unrelated terminology.</li>
  <li><strong>Practise together.</strong> Use prompts, segmented repetition, visual pointing, comparison, or teacher-learner alternation as appropriate. Support should make successful thinking possible, not conceal uncertainty.</li>
  <li><strong>Practise with less support.</strong> Vary the example and wait long enough for the learner to respond. If performance breaks down, restore the smallest useful support.</li>
  <li><strong>Give feedback and retry.</strong> Name what was accurate, identify one useful improvement, demonstrate if needed, and ask for another attempt.</li>
  <li><strong>Review and hand off.</strong> Revisit an earlier item, summarise current evidence, and assign a realistic practice task only if the learner or responsible adult understands it.</li>
</ol>

<div class="template"><strong>Copyable lesson-plan template</strong>
  <p><strong>Learner and date:</strong> [name/reference] — [date]</p>
  <p><strong>Observed starting point:</strong> [specific independent performance and support needed]</p>
  <p><strong>Primary goal:</strong> [observable next capability]</p>
  <p><strong>Review item:</strong> [previous learning to retrieve]</p>
  <p><strong>Model:</strong> [example and concise explanation]</p>
  <p><strong>Guided practice:</strong> [examples, prompts, and planned reduction of support]</p>
  <p><strong>Independent or transfer check:</strong> [new example or context]</p>
  <p><strong>Feedback cue:</strong> [short wording the learner can reuse]</p>
  <p><strong>Evidence recorded:</strong> [what happened, not a vague judgement]</p>
  <p><strong>Next decision:</strong> [keep, simplify, extend, revisit, or seek additional support]</p>
</div>

<h2>Make feedback precise and manageable</h2>

<p>Correction is part of learning, but correcting everything at once can obscure the priority and reduce the learner's opportunity to think. First decide whether an immediate interruption is necessary. Some errors affect the current target or require prompt correction; others can be noted for a suitable pause. A qualified teacher should decide how recitation errors are addressed, especially where correctness and meaning may be implicated.</p>

<p>Useful feedback connects observation to action: “The first part matched the model. At this point, listen for the difference between these two sounds; I will model them separately, then you will retry the word.” Avoid feedback about fixed personal qualities. “Careless,” “not talented,” or “too slow” does not tell the learner what to do. Praise should also remain evidence-based: identify the successful strategy, accurate feature, persistence, or self-correction.</p>

<h3>A simple correction routine</h3>

<ol>
  <li>Pause at an appropriate point.</li>
  <li>Locate the exact sound, sign, word, join, rule, or recall break.</li>
  <li>Ask whether the learner can notice or correct it.</li>
  <li>Provide a concise cue or accurate model if needed.</li>
  <li>Let the learner retry in the immediate context.</li>
  <li>Return later with a different example to check transfer.</li>
</ol>

<h2>Review without pretending that completion equals mastery</h2>

<p>Review should sample learning over time and contexts. Repeating the same item immediately may show that the learner followed a prompt; it does not by itself show independent retention or transfer. Build review into the opening, main practice, and closing rather than saving it for an occasional test. For memorisation, balance current work with recent and older material according to observed retention and teacher judgement. The <a href="/blog/quran-practice-and-progress-guide">Quran practice and progress guide</a> provides a related framework for recording practice and adjusting it responsibly.</p>

<div class="table-wrap"><table>
  <caption>Review questions for the next planning decision</caption>
  <thead><tr><th>Question</th><th>Evidence to seek</th><th>Possible response</th></tr></thead>
  <tbody>
    <tr><td>Can the learner do it without the original prompt?</td><td>An independent attempt after other activity</td><td>Reduce support or reteach the cue</td></tr>
    <tr><td>Can the learner apply it elsewhere?</td><td>A new word, line, passage, or recall connection</td><td>Add varied practice before extension</td></tr>
    <tr><td>Is earlier learning still available?</td><td>A small sample from previous work</td><td>Maintain, strengthen, or temporarily prioritise review</td></tr>
    <tr><td>Is the barrier instructional or environmental?</td><td>Performance with changed pace, audio, visual access, fatigue, or support</td><td>Adjust the teaching condition and observe again</td></tr>
    <tr><td>Does the learner understand the next action?</td><td>The learner explains or demonstrates the routine</td><td>Simplify the instruction or provide a model</td></tr>
  </tbody>
</table></div>

<h2>Record evidence responsibly</h2>

<p>Keep notes proportionate and useful. Record the target, sample, support, response, and next decision. Distinguish direct observation from interpretation: “paused at three joins and completed two after pointing” is more reusable than “weak today.” Do not collect sensitive information merely because a form has space for it. Follow applicable privacy requirements and the organisation's current retention, access, and deletion procedures. Share a child's learning information only through authorised routes and with the responsible adult.</p>

<div class="template"><strong>Compact progress-note template</strong>
  <p><strong>Reviewed:</strong> [earlier item and result]</p>
  <p><strong>Taught:</strong> [goal and examples]</p>
  <p><strong>Observed independently:</strong> [specific evidence]</p>
  <p><strong>Support that helped:</strong> [model, cue, segmentation, visual support, pause]</p>
  <p><strong>Still uncertain:</strong> [specific point]</p>
  <p><strong>Next lesson:</strong> [review, reteach, transfer, or extend]</p>
  <p><strong>Home practice, if agreed:</strong> [short task and responsible adult's role]</p>
</div>

<h2>Coordinate teacher, learner, and family roles</h2>

<p>The teacher plans and explains instruction, provides accurate models within their competence, observes, corrects, and communicates appropriate next steps. The learner attempts, asks questions, practises agreed work, and reports difficulty. For a child, the parent or guardian controls enrolment and administrative communication, provides an appropriate setting and supervision, and raises concerns through official channels. A family should not be expected to teach content it has not been prepared to teach.</p>

<p>Home practice should be clear enough to do correctly. State the material, purpose, approximate stopping point, and what to do if uncertainty appears. It may be safer to stop and mark a question than to repeat an uncertain model. Keep practice compatible with wellbeing, family capacity, and the learner's other responsibilities. More activity is not automatically better activity.</p>

<h2>Common planning failures and repairs</h2>

<div class="table-wrap"><table>
  <thead><tr><th>Planning failure</th><th>Why it causes difficulty</th><th>Practical repair</th></tr></thead>
  <tbody>
    <tr><td>Following age as the placement rule</td><td>Age does not reveal prior teaching, retention, confidence, or specific skill</td><td>Use observed ability, goals, and support needs</td></tr>
    <tr><td>Covering pages rather than teaching a capability</td><td>Completion can hide prompting and weak transfer</td><td>State the goal and collect a new example</td></tr>
    <tr><td>Adding new work despite unstable review</td><td>Earlier learning may become less available</td><td>Reduce new load and strengthen teacher-led review</td></tr>
    <tr><td>Correcting every issue simultaneously</td><td>The learner cannot identify the actionable priority</td><td>Choose the most relevant correction and record others</td></tr>
    <tr><td>Using one method for every learner</td><td>Access, language, pace, prior knowledge, and response differ</td><td>Vary examples and support while preserving the learning goal</td></tr>
    <tr><td>Promising a completion date</td><td>Progress depends on starting point, attendance, practice, feedback, and changing needs</td><td>Use review points and revise the plan from evidence</td></tr>
  </tbody>
</table></div>

<h2>Quality checklist for programme leads and teachers</h2>

<ul class="checklist">
  <li>The placement note describes observed performance rather than relying on age or a broad label.</li>
  <li>Each active goal is narrow, valuable, observable, and open to revision.</li>
  <li>The planned sequence reflects dependencies but allows a learner-specific route.</li>
  <li>Lessons include prior review, an accurate model, guided practice, reduced support, feedback, and another attempt.</li>
  <li>Records separate direct evidence from interpretation and avoid unnecessary sensitive data.</li>
  <li>Home practice is understandable, realistic, and safe to stop when uncertainty arises.</li>
  <li>Accessibility and communication needs are discussed without treating difference as lack of ability.</li>
  <li>Children's lessons use appropriate adult oversight and official communication routes.</li>
  <li>No document describes this framework as accreditation or guarantees a timeline or outcome.</li>
  <li>The next plan changes when current evidence shows that it should.</li>
</ul>

<h2>Source and method note</h2>

<p>This guide is a practical planning synthesis built around observable teaching functions: goal setting, guided practice, feedback, and review. The UNESCO Mahatma Gandhi Institute of Education for Peace and Sustainable Development's <a href="https://mgiep.unesco.org/iseeareport" rel="noopener noreferrer">International Science and Evidence Based Education Assessment report</a> is cited only as broad, general evidence context about education and learning. It was not written as a Quran curriculum, does not validate this particular framework, and should not be represented as Quran-specific evidence, religious authority, accreditation, or proof of an outcome. The operational templates here are editorial tools, not findings quoted from that report.</p>

<p>The guide deliberately avoids invented performance thresholds, universal lesson counts, and completion claims. Its method is to turn direct observations into revisable instructional decisions. Local regulation, organisational policy, safeguarding duties, learner needs, and qualified religious teaching remain controlling considerations.</p>

<h2>How to cite or share this guide</h2>

<p>You may link to this guide, quote a short passage with attribution, or adapt a blank template for internal planning. Name the page “Quran Curriculum and Lesson Planning,” identify NoorPath as the publisher, include the page URL and access date, and clearly label any changes. Do not imply that NoorPath, UNESCO, or another source endorses your adapted curriculum, teacher, school, product, or outcome. Preserve the scope note when sharing the framework, and link to the UNESCO report directly when discussing that source.</p>

<p>For the practical home environment that supports a planned lesson, see the <a href="/blog/online-quran-class-setup">online Quran class setup guide</a>. Families considering live tuition can review <a href="/online-quran-classes-for-kids">online Quran classes for kids</a>; availability, tutor matching, schedule, terms, and suitability should be confirmed directly, and no learning outcome is guaranteed.</p>`,
  },
  "online-quran-class-setup": {
    style: guideStyle,
    content: `<p><strong>A workable online Quran class setup needs clear two-way audio, a stable view when video is required, readable materials, suitable lighting, privacy controls, age-appropriate supervision, and a simple recovery routine when something fails.</strong> Test these functions before the lesson. You do not need a particular brand, premium device, elaborate room, or permanent studio.</p>

<p>This device-neutral guide helps families and adult learners prepare for live remote tuition. It covers the home side of setup, not the provider's entire technical, privacy, accessibility, or safeguarding system. For a child's lesson, the parent or guardian remains responsible for the home environment, account access, supervision, and communication with the service. Read NoorPath's current <a href="/safeguarding">safeguarding information</a> and <a href="/editorial-policy">editorial policy</a> before relying on this resource.</p>

<div class="warning"><strong>Scope and limitations:</strong> this is general operational guidance, not a product endorsement, technical guarantee, security certification, accessibility audit, or promise that any platform, feature, tutor, connection, or service will be available. Interfaces and requirements change. Follow the current instructions and terms supplied by the lesson provider and platform. Where privacy, disability access, electrical safety, or child protection needs specialist advice, seek it from an appropriate qualified or responsible person.</div>

<h2>The minimum viable setup</h2>

<ul class="checklist">
  <li>A device that can run the currently required lesson method and receive updates where applicable.</li>
  <li>A microphone and speaker or listening arrangement that allow both sides to hear without disruptive echo.</li>
  <li>A camera positioned for the agreed lesson purpose if video is required.</li>
  <li>A sufficiently stable connection for the lesson format, tested in the actual study location.</li>
  <li>A charged battery or safely positioned power connection.</li>
  <li>The correct Quran, Qaida, notebook, pencil, and any teacher-provided material within reach.</li>
  <li>An adult-controlled joining method and appropriate supervision for a child.</li>
  <li>A known official contact route for technical, administrative, privacy, or safeguarding concerns.</li>
  <li>An accessible alternative or adjustment plan where the usual setup creates a barrier.</li>
</ul>

<p>“Minimum” means functionally sufficient, not cheap, small, or inferior. An existing phone, tablet, laptop, or desktop may be suitable if it supports the current lesson requirements and the learner can use it safely. Screen size, controls, mounting, operating system support, and peripheral compatibility can affect suitability. Confirm requirements before buying anything.</p>

<h2>Choose by function, not brand</h2>

<div class="table-wrap"><table>
  <caption>Device-neutral decision table</caption>
  <thead><tr><th>Function</th><th>Questions to test</th><th>Possible adjustment</th></tr></thead>
  <tbody>
    <tr><td>Joining</td><td>Can the authorised user open the correct invitation without exposing it publicly? Does the required method work on this device?</td><td>Save the official route securely, update supported software, or ask the provider for a current supported alternative</td></tr>
    <tr><td>Hearing</td><td>Are teacher speech and recitation clear at a comfortable volume? Is there echo, clipping, or competing sound?</td><td>Change speaker position, reduce room noise, use a compatible listening option, or adjust input/output settings</td></tr>
    <tr><td>Being heard</td><td>Can the teacher hear quiet and normal recitation without the learner leaning awkwardly toward the device?</td><td>Move the device, choose the correct microphone, reduce noise, or use a compatible external microphone if genuinely needed</td></tr>
    <tr><td>Seeing</td><td>Can the learner read shared content and physical text? Can the teacher see the agreed view if required?</td><td>Change orientation, text size, contrast, camera angle, material position, or use a larger available display</td></tr>
    <tr><td>Control</td><td>Can the learner use mute, camera, captions, chat, zoom, or other agreed controls without confusion?</td><td>Practise before class, simplify the screen, enable approved accessibility settings, or arrange adult help</td></tr>
    <tr><td>Continuity</td><td>Does the battery, power, connection, and temperature remain stable during a realistic test?</td><td>Charge, reposition safely, close unnecessary activity, ventilate the device, or agree a fallback route</td></tr>
  </tbody>
</table></div>

<p>A purchase should solve an observed problem. Do not assume a higher price guarantees clearer lessons, or that an accessory improves quality merely because it is marketed for calls or streaming. First test the existing setup, identify the precise failure, check compatibility and return terms, and consider whether a change in position or settings solves it.</p>

<h2>Make audio the first technical priority</h2>

<p>Quran teaching depends heavily on hearing and being heard. Video can support interaction and visual demonstration, but a sharp picture does not compensate for distorted recitation. Test audio with the same room, device position, network, and approximate speaking volume that the learner will use.</p>

<h3>Two-way audio test</h3>

<ol>
  <li>Place the device where it will be during the lesson.</li>
  <li>Use the intended speaker, headphones, hearing support, or other compatible output.</li>
  <li>Ask another person on a separate connection to listen while the learner speaks and recites at realistic volume.</li>
  <li>Test normal turn-taking and a brief interruption to reveal delay or echo.</li>
  <li>Move the learner slightly left, right, nearer, and farther to identify a reliable position.</li>
  <li>Check whether fans, kitchens, televisions, open windows, other calls, or hard surfaces create interference.</li>
  <li>Confirm the correct microphone and speaker are selected after connecting any peripheral.</li>
</ol>

<p>If the teacher cannot hear, first unmute and confirm the selected microphone. Then disconnect and reconnect a peripheral, close another application that may be using the microphone, and rejoin only through the official route if appropriate. If sound is robotic or delayed, reduce competing network activity where possible and try the provider's supported low-bandwidth or audio-only option if one exists. Feature availability must be confirmed; do not assume an audio-only mode, dial-in number, recording, or replacement lesson is offered.</p>

<div class="note"><strong>Listening equipment:</strong> personal listening can reduce echo and distraction, but it is not automatically suitable for every learner. Use a comfortable volume, preserve the supervision and communication needed for a child, consider sensory or hearing needs, and follow relevant safety advice. Never treat this guide as a hearing assessment.</div>

<h2>Set video and materials for the teaching task</h2>

<p>Ask what the teacher needs to see. A face view may support communication; a wider view may help with posture or supervision; a document view may help the teacher follow a page. These are different jobs and may require different positions. The camera should not reveal more of the home than necessary.</p>

<ul class="checklist">
  <li>Place the device on a stable surface or suitable stand rather than balancing it precariously.</li>
  <li>Keep the camera near eye level when a face view is required.</li>
  <li>Check the frame for private documents, photographs, screens, windows, mirrors, or household movement.</li>
  <li>Put the text close enough to read without persistent bending or twisting.</li>
  <li>Keep page edges, hands, and teaching aids visible if that has been agreed.</li>
  <li>Disable visual filters or effects that distract, obscure movement, or change the agreed view.</li>
  <li>Know how to stop video promptly if privacy is interrupted.</li>
</ul>

<p>Digital text can be useful for zoom, contrast, or portability; physical text can reduce window switching and make pointing simpler. Either may work. Confirm that the edition, page reference, script, and teacher instructions match. Do not require a learner to manage several devices merely because they are available. Every extra screen adds charging, notification, privacy, and attention demands.</p>

<h2>Use lighting that supports reading and privacy</h2>

<p>Light should make the learner and text visible without glare or eye strain. Face a window or diffuse room light when practical rather than placing a bright source directly behind the learner. Check the screen and the physical page from the learner's seated position. Glossy pages and glasses may reflect a lamp even when the room appears bright.</p>

<div class="table-wrap"><table>
  <thead><tr><th>Symptom</th><th>Check</th><th>Low-complexity response</th></tr></thead>
  <tbody>
    <tr><td>The learner appears as a silhouette</td><td>A bright window or lamp is behind them</td><td>Turn the desk, close or diffuse the light source, or add soft light from the front</td></tr>
    <tr><td>The page has a bright patch</td><td>Direct light reflects from the surface</td><td>Change lamp or page angle while preserving a comfortable posture</td></tr>
    <tr><td>The image flickers or changes brightness</td><td>Mixed lighting or camera auto-adjustment</td><td>Use steadier room lighting and reduce extreme bright-dark contrast</td></tr>
    <tr><td>The learner leans close to read</td><td>Text size, screen scale, distance, visual access, or lighting</td><td>Increase approved text size or zoom, reposition, and seek appropriate vision support if needed</td></tr>
  </tbody>
</table></div>

<p>Do not use brighter light as the answer to every reading difficulty. Text size, contrast, visual processing, fatigue, prescription needs, or unfamiliar script may be involved. Discuss reasonable adjustments and seek suitable professional support where indicated.</p>

<h2>Protect privacy before joining</h2>

<p>Meeting invitations, account credentials, learner records, and recordings can be sensitive. Use the provider's authorised route, keep joining details within the intended household or participant group, and do not post screenshots containing links or participant information. A parent or guardian should control a child's account and administrative messages rather than expecting the child to negotiate private contact.</p>

<h3>Privacy setup checklist</h3>

<ul class="checklist">
  <li>Confirm the invitation came through an expected official channel.</li>
  <li>Use the intended learner display name without adding unnecessary personal details.</li>
  <li>Review the camera background and remove visible private information.</li>
  <li>Turn off message previews and unrelated notifications that might be shared on screen.</li>
  <li>Close private tabs, documents, and applications before screen sharing.</li>
  <li>Know whether the lesson may be recorded, why, by whom, where it is stored, who can access it, and what current choices apply.</li>
  <li>Do not make a personal recording or screenshot without appropriate permission and a lawful, agreed purpose.</li>
  <li>Know how to leave, mute, stop video, report a concern, and contact the provider outside the session.</li>
</ul>

<p>Virtual backgrounds or blur may help in some situations but can fail around movement, reveal parts of the room, increase device load, or reduce visibility. Treat them as optional tools, not privacy guarantees. A plain real background and careful camera angle may be more reliable. Current platform controls and provider procedures should be checked directly.</p>

<h2>Build safeguarding into the physical setup</h2>

<p>Technology does not replace adult responsibility. For a child, place the lesson in an appropriate shared or observable area where supervision can match the child's age and needs without unnecessarily disrupting teaching. The responsible adult should know the tutor identity presented by the provider, scheduled time, joining route, communication boundaries, and concern-reporting process.</p>

<ul class="checklist">
  <li>The responsible adult arranges enrolment, payment, schedule changes, and administrative contact.</li>
  <li>The child does not receive or distribute private meeting details through unmanaged channels.</li>
  <li>An adult is available to help with technical or safeguarding concerns.</li>
  <li>The learner knows they may pause or leave and tell the responsible adult if something feels wrong.</li>
  <li>Unexpected participants, contact requests, requests to move platforms, or unclear recording activity are raised through the official route.</li>
  <li>Household members know when the camera and microphone are active.</li>
  <li>The family has read the current safeguarding, privacy, communication, and complaints information rather than relying on assumptions.</li>
</ul>

<p>This checklist does not certify a provider or remove the need for current checks. If there is an immediate risk, prioritise safety and use the appropriate local emergency or statutory route. For a non-immediate concern relating to NoorPath, follow the process in the current safeguarding information.</p>

<h2>Plan accessibility with the learner</h2>

<p>Accessibility is not an accessory added after failure. Ask what helps the learner perceive content, communicate, control the device, remain comfortable, and demonstrate learning. Do not infer ability from speech, eye contact, movement, response speed, or independent device use. A support person can enable access without answering on the learner's behalf.</p>

<div class="table-wrap"><table>
  <caption>Possible barriers and questions to discuss</caption>
  <thead><tr><th>Barrier area</th><th>Questions</th><th>Possible adjustment to confirm</th></tr></thead>
  <tbody>
    <tr><td>Hearing</td><td>Is teacher audio clear? Does the learner use hearing technology, captions, visual cues, or reduced background noise?</td><td>Compatible audio route, slower turn-taking, written reinforcement, or captioning where available and appropriate</td></tr>
    <tr><td>Vision</td><td>Can the learner perceive text, controls, cursor, demonstrations, and feedback?</td><td>Zoom, larger text, contrast, verbal description, accessible digital material, or suitable screen arrangement</td></tr>
    <tr><td>Motor access</td><td>Can the learner position materials and use controls without pain, delay, or unsafe reach?</td><td>Stable mounting, alternative input, larger controls, keyboard access, or support-person assistance</td></tr>
    <tr><td>Communication</td><td>How does the learner indicate readiness, uncertainty, a correction attempt, or need for a break?</td><td>Agreed signals, chat, extra response time, visual choices, or an augmentative communication method</td></tr>
    <tr><td>Attention or sensory access</td><td>Which sounds, visual effects, pace, session demands, or room conditions create barriers?</td><td>Simplified display, predictable routine, reduced notifications, planned pause, or shorter task segments</td></tr>
  </tbody>
</table></div>

<p>Automated captions may not represent Arabic recitation accurately, and platform accessibility features vary. They can support some communication but should not be assumed to assess pronunciation or replace teacher listening. Confirm current availability and test with the actual learner. If an adjustment changes lesson delivery, agree roles and expectations in advance.</p>

<h2>Create a repeatable pre-class routine</h2>

<p>A routine reduces last-minute decisions and helps reveal failures early. Assign responsibility clearly: an adult may prepare access and privacy for a child, while the learner arranges materials and completes an age-appropriate audio check.</p>

<div class="template"><strong>Ten-step pre-class routine</strong>
  <ol>
    <li>Confirm the scheduled time, including the correct local time and any clock change.</li>
    <li>Confirm the authorised joining route and expected tutor or class identity.</li>
    <li>Charge the device and position any cable so it does not create a trip or pull hazard.</li>
    <li>Restart or close unnecessary activity if the device has been unstable, allowing time for it to return.</li>
    <li>Place Quran learning materials, notebook, pencil, water if appropriate, and accessibility tools within reach.</li>
    <li>Reduce avoidable household noise and notifications.</li>
    <li>Check camera framing, background, and lighting if video will be used.</li>
    <li>Check microphone, speaker, and the selected input/output.</li>
    <li>Make the responsible adult available and remind the learner how to get help.</li>
    <li>Join through the official route at the agreed time and verify that the intended session has opened.</li>
  </ol>
</div>

<p>Do not join an unfamiliar room merely because a link resembles an earlier invitation. If the tutor identity, participant list, platform request, or joining route is unexpected, pause and verify through an official contact method.</p>

<h2>Use a calm troubleshooting ladder</h2>

<p>Troubleshoot from simple, reversible checks toward more disruptive changes. Tell the teacher what is happening, protect the learner from repeated pressure, and avoid changing multiple variables at once. Never disclose passwords, one-time codes, or unnecessary device access to solve a lesson problem.</p>

<div class="table-wrap"><table>
  <caption>Common symptoms and first responses</caption>
  <thead><tr><th>Symptom</th><th>Check in order</th><th>Fallback to agree</th></tr></thead>
  <tbody>
    <tr><td>Cannot join</td><td>Time and time zone; connection; official link; supported app or browser; account permission; current provider notice</td><td>Contact the provider through the official route and ask for the current supported method</td></tr>
    <tr><td>Teacher cannot hear learner</td><td>Mute; selected microphone; browser or app permission; connected peripheral; another app using audio</td><td>Reconnect audio, rejoin, or use an approved alternative if offered</td></tr>
    <tr><td>Learner cannot hear teacher</td><td>Volume; selected output; silent mode; peripheral connection; another audio source</td><td>Switch to a compatible available output or an approved alternative</td></tr>
    <tr><td>Echo or feedback</td><td>Two devices in one room; speaker volume; microphone proximity; hard reflective room</td><td>Mute the unused device, separate devices, lower output, or use suitable personal listening</td></tr>
    <tr><td>Frozen or delayed session</td><td>Connection status; competing household traffic; background downloads; device heat; unnecessary video effects</td><td>Reduce load, rejoin, or use a provider-supported lower-bandwidth option</td></tr>
    <tr><td>Camera fails</td><td>Camera selection; permission; physical cover; another app; connection; device restart if safe</td><td>Continue only in a mode the provider, teacher, and responsible adult consider suitable</td></tr>
    <tr><td>Shared material unreadable</td><td>Zoom; orientation; screen size; contrast; source quality; whether the correct file is open</td><td>Use an accessible copy, physical text, verbal reference, or material sent through an authorised route</td></tr>
  </tbody>
</table></div>

<h3>The stop rule</h3>

<p>Stop troubleshooting during the lesson when repeated changes are not helping, privacy or safety is uncertain, the learner is distressed, the device becomes unusually hot, a cable or power source appears damaged, or an unknown person requests credentials or remote access. Leave safely if needed, record the symptom without collecting unnecessary personal data, and contact the appropriate official support route. Whether time is extended, a lesson is rescheduled, or another format is available depends on current terms and availability; this guide does not promise a remedy.</p>

<h2>Use a post-class reset</h2>

<ul class="checklist">
  <li>Leave the session and confirm camera and microphone activity has ended.</li>
  <li>Close shared materials containing learner information and store notes appropriately.</li>
  <li>Record one technical issue, the condition in which it occurred, and the response that helped.</li>
  <li>Report privacy, safeguarding, or persistent access concerns through the correct route.</li>
  <li>Return the device and materials to a safe charging or storage place.</li>
  <li>Prepare only the agreed learning task; do not infer extra homework from a disrupted lesson.</li>
</ul>

<p>A brief issue log is more useful than “the internet was bad.” Note the date, symptom, device and room used, whether audio or video was affected, actions tried, and whether the problem continued. Avoid recording other participants or copying private meeting information into an insecure note.</p>

<div class="template"><strong>Technical issue log</strong>
  <p><strong>Date and lesson reference:</strong> [minimum necessary detail]</p>
  <p><strong>Observed symptom:</strong> [what the learner and teacher experienced]</p>
  <p><strong>Conditions:</strong> [device type, room, connection method, relevant peripheral]</p>
  <p><strong>Checks attempted:</strong> [in order]</p>
  <p><strong>What changed:</strong> [resolved, improved, persisted, or not safely tested]</p>
  <p><strong>Follow-up owner:</strong> [responsible adult, adult learner, provider support, or accessibility contact]</p>
</div>

<h2>Decide whether a setup change is justified</h2>

<p>After more than one representative test, define the barrier narrowly. “The setup is poor” is not actionable; “the built-in microphone clips quiet recitation only when the device is beyond comfortable reading distance” is. Then compare non-purchase adjustments, compatible peripherals, another available household device, and provider-supported alternatives. Consider privacy, supervision, accessibility, physical stability, software support, and total household complexity.</p>

<div class="table-wrap"><table>
  <thead><tr><th>Decision question</th><th>Evidence</th><th>Guardrail</th></tr></thead>
  <tbody>
    <tr><td>Is the problem repeatable?</td><td>It appears in a realistic test under recorded conditions</td><td>Do not buy from a single unexplained failure</td></tr>
    <tr><td>Is position or configuration the cause?</td><td>A controlled change improves the same task</td><td>Prefer the simplest safe stable setup</td></tr>
    <tr><td>Will an accessory be compatible?</td><td>Current device and platform requirements confirm it</td><td>Check support and return terms; avoid assumed compatibility</td></tr>
    <tr><td>Does the change preserve access?</td><td>The learner can still see, hear, communicate, and control the lesson</td><td>Do not optimise audio by creating another accessibility barrier</td></tr>
    <tr><td>Does it preserve safeguarding and privacy?</td><td>Adult oversight and necessary controls remain workable</td><td>Convenience does not justify unmanaged accounts or contact</td></tr>
  </tbody>
</table></div>

<h2>Source and method note</h2>

<p>This guide is an operational checklist created by decomposing a remote lesson into observable functions: authorised access, two-way audio, usable video where needed, readable materials, lighting, privacy, supervision, accessibility, continuity, and recovery. It does not report a product test, comparative benchmark, user survey, clinical finding, or guaranteed technical specification. No performance metric or platform capability is asserted.</p>

<p>Requirements and interfaces can change, and service availability can vary by learner, tutor, location, time, device, and current provider arrangements. Confirm the current joining method, supported technology, accessibility options, privacy terms, recording position, lesson policy, and support route directly. The related <a href="/blog/quran-learning-method-comparisons">Quran learning method comparison</a> can help families compare remote lessons with other formats, while the <a href="/blog/quran-curriculum-and-lesson-planning">curriculum and lesson-planning guide</a> explains how the teaching sequence can respond to observed ability.</p>

<h2>How to cite or share this guide</h2>

<p>Link to the live page so readers can see its scope and current wording. For a short quotation, attribute “Online Quran Class Setup” to NoorPath, include the page URL and access date, and distinguish quotation from your own additions. You may adapt the blank checklists for a household or organisation, but label the adaptation, recheck it against your current platform and policies, and do not imply NoorPath endorses a device, platform, provider, or security claim. Preserve the no-guarantee and safeguarding limitations when sharing.</p>

<p>Families who wish to explore live tuition may review <a href="/online-quran-classes">online Quran classes</a>. That commercial page is provided as a neutral next step, not proof that online tuition is suitable for every learner. Current tutor matching, schedule, platform, accessibility arrangements, service availability, pricing, and terms must be confirmed directly; no technical or learning outcome is guaranteed.</p>`,
  },
};
