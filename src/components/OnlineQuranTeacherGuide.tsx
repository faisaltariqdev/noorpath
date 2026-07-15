import Image from "next/image";
import Link from "next/link";
import { PRIORITY_MARKETS } from "@/lib/geoSeo";

const linkStyle = { color: "var(--emerald)", fontWeight: 700 };

const sectionStyle = {
  marginBottom: 36,
  scrollMarginTop: 100,
};

const summaryStyle = {
  background: "rgba(10,110,79,.07)",
  borderLeft: "4px solid var(--emerald)",
  borderRadius: "0 10px 10px 0",
  color: "var(--slate)",
  fontSize: ".98rem",
  fontWeight: 600,
  lineHeight: 1.75,
  margin: "18px 0",
  padding: "14px 16px",
};

export default function OnlineQuranTeacherGuide() {
  return (
    <article className="article-body">
      <div className="highlight-box">
        <strong>Direct answer:</strong> An online Quran teacher provides live, remote instruction
        in reading, Qaida, Tajweed, Hifz or related studies. Choose one by checking the learner&apos;s
        goal, the teacher&apos;s relevant knowledge and experience, safeguarding arrangements,
        communication, lesson structure and progress records. Use a trial lesson to assess the
        actual teaching match before committing.
      </div>

      <nav
        aria-label="Table of contents"
        style={{
          background: "var(--ivory)",
          border: "1px solid var(--border)",
          borderRadius: 16,
          margin: "28px 0 36px",
          padding: "24px 28px",
        }}
      >
        <strong style={{ display: "block", marginBottom: 12 }}>In this guide</strong>
        <ol className="guide-toc-list" style={{ columns: 2, columnGap: 32, margin: 0 }}>
          <li><a href="#meaning" style={linkStyle}>Teacher and tutor terminology</a></li>
          <li><a href="#matching" style={linkStyle}>Step-by-step tutor matching</a></li>
          <li><a href="#evaluation" style={linkStyle}>Teacher evaluation checklist</a></li>
          <li><a href="#credentials" style={linkStyle}>Credentials and Ijazah checks</a></li>
          <li><a href="#learning-fit" style={linkStyle}>Fit by learner and course</a></li>
          <li><a href="#trial" style={linkStyle}>Questions for a trial lesson</a></li>
          <li><a href="#safeguarding" style={linkStyle}>Safeguarding and boundaries</a></li>
          <li><a href="#progress" style={linkStyle}>Evidence of progress</a></li>
          <li><a href="#comparison" style={linkStyle}>Comparison questions</a></li>
          <li><a href="#countries" style={linkStyle}>Countries and timezones</a></li>
          <li><a href="#services" style={linkStyle}>Courses and related services</a></li>
          <li><a href="#next-step" style={linkStyle}>Choose your next step</a></li>
        </ol>
      </nav>

      <section id="meaning" style={sectionStyle}>
        <h2>What Is an Online Quran Teacher?</h2>
        <p style={summaryStyle}>
          An online Quran teacher listens to a learner live, demonstrates accurate recitation,
          explains material at an appropriate level, corrects errors and plans review. “Online
          Quran tutor” usually describes the same role. The label matters less than whether the
          person can teach the learner&apos;s course safely, clearly and consistently.
        </p>
        <p>
          In everyday international English, <strong>online Quran teacher</strong> and{" "}
          <strong>online Quran tutor</strong> overlap. “Teacher” may suggest responsibility for a
          curriculum, while “tutor” may suggest individual support. In one-to-one online Quran
          learning, one person commonly does both: assesses the student, teaches new material,
          listens to recitation, corrects mistakes and sets practice. There is no reason to create
          two separate searches or learning plans solely because providers use different words.
        </p>
        <p>
          A live teacher is different from a recorded course, recitation app or video library.
          Digital resources can model sounds and support repetition, but they cannot reliably
          understand every learner&apos;s articulation, hesitation or pattern of error. In a live
          lesson, the tutor can ask the student to repeat a letter, compare similar sounds, slow
          down a passage or return to a prerequisite skill. That responsive exchange is the main
          educational value.
        </p>
        <p>
          The appropriate teacher is not simply the person with the most advanced-sounding
          biography. A young Qaida beginner needs patient sound modelling and child-centred
          pacing. An adult reader may need concise explanations without embarrassment. A Hifz
          learner needs systematic listening and revision management. Define the job before
          judging the candidate.
        </p>
      </section>

      <figure style={{ margin: "0 0 38px" }}>
        <div
          style={{
            background: "var(--ivory)",
            borderRadius: 18,
            overflow: "hidden",
            position: "relative",
          }}
        >
          <Image
            src="/marketing/family-evening-quran.jpg"
            alt="Family preparing for a live online Quran lesson at home"
            width={1200}
            height={800}
            sizes="(max-width: 768px) 100vw, 900px"
            style={{ display: "block", height: "auto", width: "100%" }}
          />
        </div>
        <figcaption style={{ color: "var(--muted)", fontSize: ".84rem", marginTop: 9 }}>
          Illustrative family learning scene; this image is not an individual tutor profile.
        </figcaption>
      </figure>

      <section id="matching" style={sectionStyle}>
        <h2>Step-by-Step: Match an Online Quran Tutor to the Learner</h2>
        <p style={summaryStyle}>
          Match by need, not by a generic ranking. State the learner&apos;s age, current reading
          level, goal, preferred teaching language, tutor preference, timezone and realistic
          schedule. Ask the provider to explain its recommendation, observe a live trial and
          review the match using specific evidence rather than first impressions alone.
        </p>
        <ol>
          <li>
            <strong>Write a precise learning goal.</strong> Say whether the learner needs Arabic
            letter recognition, joined reading, Quran fluency, Tajweed correction, memorisation
            with revision, or broader Islamic studies. “Improve Quran” is too broad for accurate
            matching.
          </li>
          <li>
            <strong>Describe the starting point honestly.</strong> Note the book or passage the
            learner can currently read, recurring difficulties and any previous study. A short
            live assessment should confirm this information; it should not be treated as a formal
            examination.
          </li>
          <li>
            <strong>Share teaching needs.</strong> Include age, preferred explanation language,
            attention needs, confidence, accessibility requirements and whether the learner
            responds better to visual demonstration, repetition or concise rule explanations.
          </li>
          <li>
            <strong>Set practical boundaries.</strong> Give the learner&apos;s timezone and two or
            three sustainable lesson windows. State a male or female tutor preference if relevant.
            A request is not confirmation; scheduling and teacher matching remain subject to
            current availability.
          </li>
          <li>
            <strong>Ask why the tutor was suggested.</strong> A provider should be able to connect
            the recommendation to the requested course, learner&apos;s level, teaching experience,
            language and schedule rather than saying only that the person is “highly qualified”.
          </li>
          <li>
            <strong>Use the trial as a teaching sample.</strong> The tutor should hear the learner,
            teach or correct something useful and describe a possible starting plan. Observe the
            student&apos;s response as well as the tutor&apos;s recitation.
          </li>
          <li>
            <strong>Review fit and process separately.</strong> Ask: “Could this person teach this
            learner?” Then ask: “Can the provider support reliable scheduling, safeguarding,
            records and communication?” Both answers matter.
          </li>
          <li>
            <strong>Agree an initial review point.</strong> Decide what evidence you will inspect,
            such as attendance, covered material, repeated error patterns and assigned practice.
            Do not turn that review point into a guaranteed completion deadline.
          </li>
        </ol>
        <p>
          If you are searching by voice, a useful request is: “Find an online Quran tutor who can
          assess an adult beginner in my timezone,” or “How do I choose a Quran teacher online for
          a child starting Qaida?” Specific needs produce a more meaningful conversation than
          asking for a universally top-ranked tutor.
        </p>
      </section>

      <section id="evaluation" style={sectionStyle}>
        <h2>Detailed Online Quran Teacher Evaluation Checklist</h2>
        <p>
          Use this featured-snippet checklist before enrolment. No single row proves quality, but
          clear evidence across the areas below reduces avoidable uncertainty.
        </p>
        <div style={{ overflowX: "auto" }}>
          <table>
            <thead>
              <tr>
                <th scope="col">Check</th>
                <th scope="col">What to look or listen for</th>
                <th scope="col">Useful evidence or question</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">Course knowledge</th>
                <td>Knowledge relevant to Qaida, reading, Tajweed, Hifz or the requested subject</td>
                <td>“What would you assess before selecting a starting lesson?”</td>
              </tr>
              <tr>
                <th scope="row">Recitation and correction</th>
                <td>Clear modelling, careful listening and specific, respectful correction</td>
                <td>Observe whether the tutor identifies and explains an actual error</td>
              </tr>
              <tr>
                <th scope="row">Teaching ability</th>
                <td>Explanations suited to the learner&apos;s age, language and current level</td>
                <td>Ask the learner to explain what changed after the correction</td>
              </tr>
              <tr>
                <th scope="row">Lesson structure</th>
                <td>A clear beginning, focused teaching, guided practice and recap</td>
                <td>Request an outline for a normal lesson and home practice</td>
              </tr>
              <tr>
                <th scope="row">Professional conduct</th>
                <td>Punctuality, prepared materials, calm boundaries and reliable communication</td>
                <td>Check cancellation, substitution and escalation procedures</td>
              </tr>
              <tr>
                <th scope="row">Safeguarding</th>
                <td>Parent-controlled contact, supervision expectations and reporting routes</td>
                <td>Read the provider&apos;s policy and ask how it applies online</td>
              </tr>
              <tr>
                <th scope="row">Progress evidence</th>
                <td>Records of taught material, strengths, errors, practice and next steps</td>
                <td>Ask to see the format of a typical progress update</td>
              </tr>
              <tr>
                <th scope="row">Learner response</th>
                <td>Respect, appropriate challenge, willingness to recite and ability to understand</td>
                <td>Ask what the learner understood, not only whether they “liked it”</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          Also notice what the tutor does not do. They should not shame mistakes, rush through
          unclear foundations, make promises about fixed completion dates or move a child into
          private communication. A strong voice or impressive recitation is valuable, but teaching
          also requires listening, diagnosis, explanation, restraint and dependable conduct.
        </p>
      </section>

      <section id="credentials" style={sectionStyle}>
        <h2>How to Request and Verify Relevant Credentials</h2>
        <p style={summaryStyle}>
          Ask which credentials or documented studies are relevant to the exact course. Request
          the title, issuing teacher or institution, subject and date, then ask the academy how it
          checked the document. An Ijazah can be relevant to recitation or transmission, but it
          does not by itself demonstrate child teaching, communication or safeguarding skill.
        </p>
        <p>
          Do not assume that every online Quran tutor holds a certificate, teaching degree or
          Ijazah, and do not assume that all credentials mean the same thing. Providers should
          describe tutor backgrounds accurately and answer reasonable verification questions
          without turning a title into a blanket promise. The credential should be connected to
          the subject being taught.
        </p>
        <p>
          For Tajweed or advanced recitation, ask about the teacher&apos;s own study, the recitation
          tradition or reading covered, and whether an Ijazah applies to the requested area. For
          Hifz, ask about memorisation, revision systems and experience listening to students at
          the relevant level. For beginners and children, training or experience in teaching,
          communication and age-appropriate methods can be as important as advanced subject
          attainment.
        </p>
        <ul>
          <li>Ask for the exact name and scope of the credential rather than a broad label.</li>
          <li>Ask who issued it and whether the provider inspected supporting documentation.</li>
          <li>Check that the name on a document corresponds to the tutor being considered.</li>
          <li>Ask how the claimed study relates to the learner&apos;s course and current level.</li>
          <li>Separate subject credentials from identity, safeguarding and employment checks.</li>
          <li>Treat refusal to clarify a prominent credential claim as a reason for caution.</li>
        </ul>
        <p>
          Verification should be proportionate and privacy-aware. Families do not need copies of
          a tutor&apos;s personal identification or sensitive records. An academy can explain its
          checking process and confirm relevant evidence while protecting personal data. Read{" "}
          <Link href="/our-tutors" style={linkStyle}>NoorPath&apos;s tutor information</Link> and ask
          the team about the proposed match rather than inferring that every tutor has identical
          qualifications.
        </p>
      </section>

      <section id="learning-fit" style={sectionStyle}>
        <h2>Teaching Fit for Children, Adults, Qaida, Tajweed and Hifz</h2>
        <h3>Children</h3>
        <p>
          A children&apos;s Quran teacher needs a warm but bounded manner, short instructions,
          repetition and the ability to correct without humiliation. Younger learners often need
          brief changes of activity and visible praise for effort. Parents should expect clear
          communication about focus, practice and behaviour, while remaining responsible for the
          child&apos;s online environment and supervision.
        </p>
        <h3>Adults</h3>
        <p>
          Adults may bring gaps from earlier learning, limited time or anxiety about making basic
          mistakes. A suitable tutor assesses without judgement, explains why a starting point is
          recommended and respects the learner&apos;s pace. Adult teaching should remain rigorous:
          kindness does not mean leaving pronunciation errors uncorrected or advancing without
          secure foundations.
        </p>
        <h3>Noorani Qaida and beginner reading</h3>
        <p>
          Qaida teaching requires accurate sound modelling and a controlled progression from
          letters and vowel marks to joined forms and Quranic words. Ask whether the tutor checks
          recognition as well as imitation. A learner who repeats after the teacher may still be
          unable to decode independently. Explore the{" "}
          <Link href="/courses/noorani-qaida-online" style={linkStyle}>online Noorani Qaida course</Link>{" "}
          for the relevant pathway.
        </p>
        <h3>Tajweed</h3>
        <p>
          A Tajweed tutor should connect rules with audible application. Learners need to hear a
          model, understand a manageable rule, apply it in recitation and receive precise
          correction. Terminology alone is insufficient. Ask how the teacher works on Makharij,
          elongation, nasalisation, stopping and recurring individual errors. Compare the dedicated{" "}
          <Link href="/learn-tajweed-online" style={linkStyle}>learn Tajweed online</Link> route and{" "}
          <Link href="/courses/tajweed-classes-online" style={linkStyle}>Tajweed course details</Link>.
        </p>
        <h3>Hifz</h3>
        <p>
          Hifz teaching should balance new memorisation with recent and older revision. The tutor
          needs to hear accurately, mark unstable passages and adjust the new load when retention
          weakens. Ask how errors are recorded, how revision is divided and what happens after an
          absence. NoorPath&apos;s{" "}
          <Link href="/hifz-quran-online" style={linkStyle}>online Hifz overview</Link> and{" "}
          <Link href="/courses/hifz-program-online" style={linkStyle}>Hifz programme page</Link>{" "}
          describe this learning route without promising a universal completion time.
        </p>
      </section>

      <section id="trial" style={sectionStyle}>
        <h2>Questions to Ask During an Online Quran Trial Lesson</h2>
        <p>
          A trial should reveal teaching, not merely introduce a sales process. Let the learner
          recite enough for a useful assessment, then ask:
        </p>
        <ul>
          <li>What did you notice about the learner&apos;s current level?</li>
          <li>Why do you recommend this book, passage or starting point?</li>
          <li>Which one or two skills should come first, and why?</li>
          <li>How would a normal lesson divide teaching, recitation and review?</li>
          <li>What exact practice would you set after today&apos;s lesson?</li>
          <li>How do you correct repeated errors without overwhelming the learner?</li>
          <li>What experience is relevant to this age group and learning goal?</li>
          <li>How will covered work, attendance and next steps be communicated?</li>
          <li>What should a parent do during a child&apos;s lesson?</li>
          <li>What happens if the teaching match or recurring time does not work?</li>
        </ul>
        <p>
          Afterward, ask the learner to demonstrate one correction or explain one idea. That is
          more informative than “Did you enjoy it?” alone. For a child, also note whether the tutor
          addressed the parent appropriately and maintained boundaries. For an adult, consider
          whether explanations were understandable and whether the learner felt respected enough
          to attempt difficult sounds.
        </p>
      </section>

      <section id="safeguarding" style={sectionStyle}>
        <h2>Safeguarding, Parent Supervision and Communication Boundaries</h2>
        <p style={summaryStyle}>
          For a child&apos;s online Quran lesson, parents should control scheduling and contact,
          place the device in a suitable shared setting, remain available, understand any recording
          policy and know how to report concerns. Tutor-student communication should use approved
          channels and should not become a private relationship hidden from the parent or provider.
        </p>
        <p>
          Online delivery changes the setting, not the need for safeguarding. Before lessons
          begin, read NoorPath&apos;s{" "}
          <Link href="/safeguarding" style={linkStyle}>safeguarding guidance</Link> and confirm how
          it operates in practice. Ask who may contact the learner, whether the parent can observe,
          how substitute tutors are introduced, how concerns are escalated and whether sessions
          are recorded. If recording occurs, the purpose, access and retention arrangements should
          be explained.
        </p>
        <p>
          Parents should use their own contact details for a child&apos;s account and keep lesson
          links within approved channels. Younger children should have an adult nearby. The camera
          view should show an appropriate learning area without exposing unnecessary private
          space. Headphones may improve sound, but they should not prevent suitable supervision.
          Tutors should avoid private social-media contact, personal gifts, secrecy or conversations
          unrelated to the educational relationship.
        </p>
        <p>
          Clear boundaries also protect tutors. Parents should communicate respectfully, use
          agreed hours and raise issues through the provider rather than asking a teacher to
          bypass policy. Adult learners also deserve privacy, professional conduct and a clear
          complaint route. If any interaction feels unsafe or inappropriate, pause contact and use
          the stated safeguarding or reporting process.
        </p>
      </section>

      <section id="progress" style={sectionStyle}>
        <h2>What Counts as Evidence of Quran Learning Progress?</h2>
        <p>
          Progress is evidence that a learner can do something more accurately, independently or
          consistently than before. It is not a guaranteed number of pages, months or classes.
          Starting level, age, attendance, practice, language, course demands and individual
          learning pace all affect development.
        </p>
        <ul>
          <li><strong>Qaida:</strong> recognising and reading taught letters or patterns with fewer prompts.</li>
          <li><strong>Quran reading:</strong> fewer substitutions, pauses or repeated teacher corrections.</li>
          <li><strong>Tajweed:</strong> applying selected rules in unfamiliar text, not only a rehearsed example.</li>
          <li><strong>Hifz:</strong> retaining new work while maintaining planned recent and older revision.</li>
          <li><strong>Learning habits:</strong> arriving prepared, completing defined practice and responding to correction.</li>
        </ul>
        <p>
          A useful progress note identifies material covered, a demonstrated strength, a current
          difficulty, assigned practice and the next instructional step. Periodic recitation
          samples can help comparison when consent and privacy arrangements are clear. Parents can
          also keep dated notes of pages, rules or surahs reviewed. Compare the learner with their
          earlier performance, not with siblings or promotional claims.
        </p>
        <p>
          If progress appears limited, investigate before blaming the student or teacher. Check
          attendance, microphone quality, lesson level, home practice, sleep, pace and whether
          corrections are understood. The appropriate response may be a smaller assignment, more
          review, a changed explanation, a schedule adjustment or a different tutor match.
        </p>
      </section>

      <section id="comparison" style={sectionStyle}>
        <h2>Questions for Comparing an Academy, Independent Tutor and Learning App</h2>
        <p>
          The useful question is not “Which option wins?” but “Who listens to the learner, corrects
          recitation, manages safety, records progress and provides continuity?” An independent
          tutor may offer a direct relationship. An academy may add matching, policies, records and
          replacement support. An app can support practice but usually cannot replace responsive
          human listening.
        </p>
        <ul>
          <li>Who assesses the learner and explains the recommended starting point?</li>
          <li>Who verifies identity, background information and claimed credentials?</li>
          <li>What happens if the tutor is absent or the match is unsuitable?</li>
          <li>Which safeguarding, privacy, cancellation and complaints processes apply?</li>
          <li>How much live individual recitation time does the learner receive?</li>
          <li>How are practice and progress communicated without promising an outcome?</li>
          <li>What is included in the price, and can the schedule be sustained?</li>
        </ul>
        <p>
          For a structured comparison of delivery formats, read{" "}
          <Link href="/blog/quran-learning-method-comparisons" style={linkStyle}>
            Quran learning method comparisons
          </Link>
          . For a broader decision framework, use{" "}
          <Link href="/blog/how-to-choose-online-quran-teacher" style={linkStyle}>
            how to choose an online Quran teacher
          </Link>
          . These questions should narrow the choice; the live trial tests whether the proposed
          teacher can turn the process into a workable lesson.
        </p>
      </section>

      <section id="countries" style={sectionStyle}>
        <h2>Online Quran Tutors Across Countries and Timezones</h2>
        <p>
          Online teaching can connect learners and tutors across borders, but location still
          affects school hours, daylight-saving changes, payment context and the meaning of
          “evening”. Give your city or timezone rather than saying only “after school”. Confirm
          the recurring time in the learner&apos;s local clock and ask how seasonal changes are
          handled. Published country pages provide local planning context; they do not represent
          local offices or guarantee a tutor slot.
        </p>
        <div style={{ overflowX: "auto" }}>
          <table>
            <thead>
              <tr>
                <th scope="col">Country guide</th>
                <th scope="col">Timezone context</th>
                <th scope="col">What to confirm</th>
              </tr>
            </thead>
            <tbody>
              {PRIORITY_MARKETS.map((market) => (
                <tr key={market.slug}>
                  <th scope="row">
                    <Link href={`/locations/${market.slug}`} style={linkStyle}>
                      Online Quran classes in {market.country}
                    </Link>
                  </th>
                  <td>{market.timezone}</td>
                  <td>Local lesson time, clock changes and current tutor availability</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p>
          This single matching framework applies across all nine markets. Language preference,
          learner level and family routine matter more than producing country-specific copies of
          the same teacher advice.
        </p>
      </section>

      <section id="services" style={sectionStyle}>
        <h2>Related NoorPath Services and Learning Routes</h2>
        <p>
          Start at <Link href="/" style={linkStyle}>NoorPath Online Quran Academy</Link> or review{" "}
          <Link href="/online-quran-classes" style={linkStyle}>online Quran classes</Link> for the
          overall learning format. Families who prefer a woman tutor can read the{" "}
          <Link href="/female-quran-teacher-online" style={linkStyle}>female Quran teacher online</Link>{" "}
          page; a request remains subject to learner needs, scheduling and availability.
        </p>
        <p>
          Compare the published <Link href="/pricing" style={linkStyle}>pricing</Link>, learn how{" "}
          <Link href="/free-quran-classes-online" style={linkStyle}>free trial Quran classes</Link>{" "}
          work, and review <Link href="/our-tutors" style={linkStyle}>tutor matching information</Link>.
          Relevant course routes include{" "}
          <Link href="/courses/quran-classes-for-kids" style={linkStyle}>Quran classes for children</Link>,{" "}
          <Link href="/courses/noorani-qaida-online" style={linkStyle}>Noorani Qaida</Link>,{" "}
          <Link href="/courses/tajweed-classes-online" style={linkStyle}>Tajweed classes</Link>,{" "}
          <Link href="/courses/hifz-program-online" style={linkStyle}>the Hifz programme</Link> and{" "}
          <Link href="/courses/islamic-studies-online" style={linkStyle}>Islamic studies</Link>.
        </p>
        <p>
          If the correct starting route is unclear,{" "}
          <Link href="/contact" style={linkStyle}>contact NoorPath</Link> with the learner&apos;s age,
          current level, goal, timezone and preferred lesson windows. That information makes a
          useful assessment and tutor recommendation more likely.
        </p>
      </section>

      <section id="next-step" style={sectionStyle}>
        <h2>Choose the Teacher Through Evidence, Not a Label</h2>
        <p>
          A suitable online Quran teacher combines relevant subject knowledge with the ability to
          teach this learner, in this course, within clear professional boundaries. Verify what is
          claimed, observe real teaching, ask how progress will be evidenced and choose a routine
          the learner can sustain. If the first match is unsuitable, explain why and request a
          reassessment rather than assuming online learning itself cannot work.
        </p>
        <div
          style={{
            background: "linear-gradient(135deg, #0a3d28, #0d5436)",
            borderRadius: 16,
            marginTop: 28,
            padding: 28,
            textAlign: "center",
          }}
        >
          <h3 style={{ color: "#fff", marginTop: 0 }}>Request a Tutor Match and Trial</h3>
          <p style={{ color: "rgba(255,255,255,.82)" }}>
            Share the learner&apos;s level, goal, timezone and tutor preference. Use the live trial
            to evaluate teaching fit before choosing a plan.
          </p>
          <Link href="/free-quran-classes-online" className="btn-primary-np">
            Request a Free Trial →
          </Link>
        </div>
      </section>
    </article>
  );
}
