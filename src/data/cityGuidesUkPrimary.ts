import type { CityGuideContent } from "@/data/countryGuideTypes";

export const cityGuidesUkPrimary: Record<string, CityGuideContent> = {
  london: {
    city: "London",
    country: "United Kingdom",
    title: "Online Quran Classes in London: A Practical Family Guide",
    description:
      "Commercial guidance for London families comparing remote Quran tuition, choosing a course and tutor, planning a trial, and understanding scheduling, safeguarding, progress and US-dollar pricing.",
    reviewedDate: "15 July 2026",
    sections: [
      {
        id: "london-how-do-online-quran-classes-work",
        heading: "How do online Quran classes work for a London household?",
        directAnswer:
          "NoorPath provides remote-only teaching, so lessons take place by live video rather than at a London classroom. Families can enquire from London, compare suitable course options and discuss lesson times, but should not expect a local branch, walk-in office or in-person teaching service.",
        paragraphs: [
          "The remote model matters at the start of a commercial comparison. A parent is buying access to online teaching, not reserving a place at a neighbourhood centre. That removes the need to travel across boroughs for every lesson, yet it also means the family must provide the device, connection and supervised study space. Any references to London in this guide describe planning considerations for a household based in the city; they do not imply that NoorPath has premises, locally based tutors or an established body of London learners.",
          "Before asking about a timetable, write down who will learn, their current reading position and what the family wants to improve. A child beginning Arabic letters needs a different lesson structure from a teenager refining tajweed or an adult seeking recitation practice. Share practical constraints as well: school finishing times, office days, caring responsibilities and the earliest realistic start after everyone has arrived home. This lets the enquiry focus on a workable remote arrangement instead of an attractive time that repeatedly becomes difficult.",
        ],
        bullets: [
          "Confirm that remote lessons, rather than a London venue, meet the family's needs.",
          "List each learner's level, goal, preferred lesson window and adult contact.",
          "Allow time to return home, eat, pray and prepare before joining.",
          "Ask how lesson-time requests and later schedule changes are handled.",
        ],
      },
      {
        id: "london-when-should-families-schedule-lessons",
        heading: "When should London families schedule lessons around the changing clock?",
        directAnswer:
          "Choose times in London local time and confirm how the timetable is recorded when the United Kingdom changes between Greenwich Mean Time and British Summer Time. Add a realistic buffer for school, work and travel, especially when a family member regularly crosses boroughs.",
        paragraphs: [
          "The UK uses GMT in part of the year and BST in another part. Because an online tutor may teach from a different time zone, a label such as “5 pm” is not enough on its own. Ask whether the agreed appointment follows London local time throughout the year and how clock changes are communicated. Families should recheck calendar invitations around the spring and autumn changes rather than assuming every device, message and personal diary has updated in the same way.",
          "Build the schedule from observed routines. Note the usual door-to-door time on office or school days, then add margin for changing trains, traffic, collecting a sibling or finishing a late meeting. A lesson beginning immediately after the theoretical arrival time can make learning feel rushed. Ten quiet minutes to set up, use the bathroom, collect the mushaf or workbook and test audio may be more valuable than selecting the earliest possible appointment.",
        ],
        table: {
          headers: ["London routine to consider", "Scheduling response"],
          rows: [
            ["Cross-borough school or work travel", "Use actual journey history and add an arrival buffer"],
            ["GMT or BST clock change", "Confirm that the appointment follows London local time"],
            ["After-school club or late meeting", "Choose a later stable window rather than relying on a perfect journey"],
            ["School holiday", "Ask whether the existing time remains appropriate before the break"],
          ],
        },
      },
      {
        id: "london-which-quran-course-should-we-choose",
        heading: "Which online Quran course should a London family choose?",
        directAnswer:
          "Choose by present ability and a defined next objective, not by city, age label alone or the most advanced-sounding course name. An initial discussion or assessment should distinguish letter recognition, reading fluency, tajweed application, memorisation and broader Islamic learning before a family commits.",
        paragraphs: [
          "For a true beginner, foundational reading may be the sensible route even when peers appear further ahead. A learner who can decode Arabic but pauses frequently may need fluency work rather than restarting every basic topic. Someone who reads smoothly but applies rules inconsistently may need focused tajweed correction. Hifz is a separate commitment involving new memorisation, accurate recitation and revision of previous material. Families should ask what the proposed course includes, what it does not include and how the tutor will establish a suitable starting point.",
          "Commercial course names can look similar while lesson priorities differ. Explain whether the immediate goal is independent reading, careful recitation, retention, confidence or structured knowledge. If several children will study, avoid assuming one course or pace suits all siblings. Their starting points, attention spans and revision habits may differ even when their home routine is shared. Separate recommendations can still be coordinated into a manageable family timetable.",
        ],
        bullets: [
          "Foundational reading: Arabic letters, joining and accurate decoding.",
          "Quran reading: fluency, confidence and correction in connected text.",
          "Tajweed: understanding and applying relevant recitation rules.",
          "Hifz: new memorisation combined with organised revision.",
          "Islamic studies: clarify the syllabus and age suitability before choosing.",
        ],
      },
      {
        id: "london-how-can-we-evaluate-a-tutor-match",
        heading: "How can parents evaluate tutor evidence and matching?",
        directAnswer:
          "Ask NoorPath what tutor information it can substantiate, how matching decisions are made and which teaching needs informed the recommendation. Evaluate communication, correction style and rapport during direct experience. Do not infer that a tutor lives in London, holds unspecified credentials or guarantees a result.",
        paragraphs: [
          "A useful tutor enquiry is specific. Ask about relevant teaching experience, the form of any qualification or recitation evidence being represented, the age groups taught and the tutor's approach to the learner's stated level. If a particular credential matters to the family, request its precise description rather than relying on broad labels. Evidence should come from NoorPath's own confirmed information; this guide does not certify an individual tutor, location, background or availability.",
          "Matching is more than selecting a preferred tutor profile. A young beginner may benefit from short instructions, visual prompting and frequent checks for understanding. A confident adult may prefer detailed explanation and direct technical correction. A hifz learner needs disciplined listening and revision planning. Tell the service about learning needs, communication preferences and any requested tutor preference, while recognising that a request is not confirmation. The best commercial decision depends on the actual proposed arrangement.",
        ],
        bullets: [
          "Request precise, verifiable descriptions of relevant tutor evidence.",
          "Explain level, goal, age, learning needs and communication preference.",
          "Treat tutor gender, time and other preferences as requests until confirmed.",
          "Observe clarity, correction, patience, participation and lesson preparation.",
        ],
      },
      {
        id: "london-what-should-we-test-in-a-trial",
        heading: "What should a London family test in a trial lesson?",
        directAnswer:
          "Use a trial to test the real learning arrangement: punctual joining, audio quality, learner-tutor communication, level judgement, correction and next-step clarity. Confirm beforehand whether the trial is free or paid, its length, who will teach it and whether that tutor would continue.",
        paragraphs: [
          "Prepare for the trial as though it were a normal lesson. Join from the intended room on the intended device, ideally at a time resembling the proposed weekly slot. This exposes practical issues that an unusually quiet weekend demonstration might hide. For a child, the supervising adult should be present and able to see both the learner's response and the platform setup. Have the usual reading material available, but wait for instructions rather than rehearsing a performance designed to appear more advanced.",
          "The most valuable outcome is not simply whether the learner enjoyed the call. Look for evidence that the tutor identified an appropriate starting point, corrected mistakes intelligibly and adapted explanations when something was unclear. Ask what the tutor noticed, what the first phase of study would prioritise and what practice is expected between lessons. The answer can be provisional; it should not become a guaranteed timetable, outcome or completion promise.",
        ],
        table: {
          headers: ["Trial check", "Question to resolve"],
          rows: [
            ["Teaching", "Was the correction accurate, clear and suited to the learner?"],
            ["Level", "Did the proposed starting point reflect observed reading?"],
            ["Technology", "Could both sides hear recitation without repeated interruption?"],
            ["Commercial terms", "What exactly continues after the trial, at what price and with whom?"],
          ],
        },
      },
      {
        id: "london-how-should-parents-manage-safeguarding",
        heading: "How should parents manage safeguarding and supervision online?",
        directAnswer:
          "Parents should remain responsible for the child's home environment, account access and age-appropriate supervision. Ask NoorPath for its current safeguarding, communication and concern-reporting procedures before enrolment. Keep lessons in an observable shared space and route administrative contact through the designated adult.",
        paragraphs: [
          "Remote tuition changes where supervision happens; it does not remove the parent's role. Set up the device where an adult can readily observe or hear the lesson, particularly for a younger child. Use an adult-controlled account and contact details, keep passwords private and avoid giving a child unrestricted access to messages or meeting links. Decide which adult will be available if the learner cannot connect, becomes distressed or needs help with materials.",
          "Ask practical questions before purchase: which platform is used, how invitations are sent, whether sessions are recorded, who can access any recording, how long information is retained and how a concern is escalated. Do not assume a policy detail or legal conclusion from this guide; obtain the service's current answer and read the applicable terms and privacy information. Families can also define their own stricter household rules where appropriate.",
        ],
        bullets: [
          "Use a shared, observable room and an adult-managed account.",
          "Confirm platform, communication, recording and reporting arrangements.",
          "Keep the supervising adult available throughout a young child's lesson.",
          "Report concerns promptly through an adult channel and retain factual details.",
        ],
      },
      {
        id: "london-what-home-setup-supports-learning",
        heading: "What home setup supports reliable online Quran learning?",
        directAnswer:
          "Prioritise clear two-way audio, a stable connection, an eye-level screen, suitable text and a quiet, observable study position. Test the exact device before the lesson. A modest, repeatable setup is more useful than expensive equipment that the learner cannot operate independently.",
        paragraphs: [
          "Recitation depends heavily on sound. Place the device close enough for the microphone to capture the learner without shouting, but not so close that page movement creates constant noise. Headphones can reduce echo in a busy London flat, although a parent must decide whether they remain suitable for supervision. Close unnecessary applications, silence non-essential notifications and connect the charger. If Wi-Fi varies by room, test the lesson location at the same time of day.",
          "Position the Quran, qaida or workbook so the learner can read without repeatedly leaving the camera. Good light should fall on the page rather than shine from behind the learner. Keep water, a pencil and any teacher-requested notebook nearby. Shared homes require a simple boundary: tell others when the lesson runs, reduce television or calls in the same space and avoid a thoroughfare where people constantly pass behind the screen.",
        ],
        table: {
          headers: ["Setup element", "Practical standard"],
          rows: [
            ["Audio", "Tutor and learner can hear normal-volume recitation clearly"],
            ["Screen and text", "Learner sees instructions while reading comfortably"],
            ["Room", "Quiet enough to focus and observable by the responsible adult"],
            ["Fallback", "Adult knows how to rejoin and whom to contact"],
          ],
        },
      },
      {
        id: "london-how-can-families-monitor-progress",
        heading: "How can families monitor progress without demanding promises?",
        directAnswer:
          "Agree a starting point, near-term priorities and a simple feedback rhythm. Track observable evidence such as text covered, recurring errors, revision completed and growing independence. Progress varies with attendance, practice, level and learning needs, so avoid fixed outcome dates or comparisons with other learners.",
        paragraphs: [
          "Begin with a baseline the family can understand. This might note letters not yet secure, types of joining that cause hesitation, tajweed rules needing application or memorised portions requiring stronger revision. Then ask what the tutor plans to emphasise over the next teaching period. A useful update says what was taught, what remains difficult and what practice should happen before the next lesson, rather than offering only a general label such as “doing well”.",
          "Keep home practice small enough to survive London routines. A short task completed consistently may be more informative than an ambitious plan repeatedly missed after travel, homework and meals. Parents can record attendance and practice without turning every recitation into an examination. For older or more independent learners, invite them to explain their own target and identify where they need help. That builds ownership while keeping expectations visible.",
          "Review the arrangement if lessons are frequently missed, feedback is unclear or the same difficulty persists without a changed approach. First establish the cause: insufficient practice, a technical barrier, a mismatch in level, confusing instruction or an unrealistic schedule require different responses. Ask for an updated plan and decide whether course emphasis, lesson frequency, tutor match or home routine should change. No progress record should be treated as a guarantee of a particular religious, academic or personal outcome.",
        ],
        bullets: [
          "Document a clear baseline in terms the parent and learner understand.",
          "Ask for specific practice and the reason it matters.",
          "Review recurring errors, retention and independence, not speed alone.",
          "Change one relevant part of the plan when evidence shows it is needed.",
        ],
      },
      {
        id: "london-what-should-parents-check-before-enrolling",
        heading: "What should London parents check before enrolling?",
        directAnswer:
          "Make the enrolment decision from a written comparison of learning need, confirmed tutor arrangement, trial evidence, timetable resilience, safeguarding information and total payment. Test whether the plan still works on demanding school or work days, not only when journeys across London run perfectly.",
        paragraphs: [
          "Begin with three separate questions: does the learner need this course, did the trial support the proposed level, and can the household protect the lesson time? Keeping these questions separate prevents a warm trial conversation from masking an unsuitable schedule or unclear course. Ask the learner, in age-appropriate language, what helped them participate and what felt difficult. The parent should then compare that account with observed correction, independence and concentration rather than treating enthusiasm or nervousness alone as decisive.",
          "Stress-test the proposed slot against an ordinary London week. Consider the longest routine school or office journey, cross-borough changes, after-school activity, shared-device use and the adult who must supervise. Decide who joins the child if the usual parent is delayed and where the lesson can move if the normal room is temporarily noisy. These are household contingencies, not a request for NoorPath to promise last-minute timetable changes. Any alternative time must be discussed and confirmed under the current terms.",
          "Review the information still missing. The family should know the proposed course, lesson length, frequency, tutor arrangement, communication route, home-practice expectation, USD billing basis and relevant cancellation or rescheduling conditions. It should also have current answers about safeguarding and recordings where applicable. If an important point remains verbal or ambiguous, ask for clarification before payment. Do not fill a gap by assuming that a preference, trial feature or customer-service discussion has become a contractual commitment.",
          "Finally, choose a review date for the household rather than predicting a completion date for the learner. At that point, ask whether lessons have been attended, feedback has been specific, practice has been manageable and the original priority remains appropriate. Keep examples of work or tutor comments where available, without turning the record into a promised outcome. Enrolment is better understood as a monitored service decision: continue, discuss an adjustment or reconsider based on evidence and the applicable terms.",
        ],
        bullets: [
          "Can the learner's need and proposed starting point be explained clearly?",
          "Will the slot survive realistic travel, school, work and supervision pressures?",
          "Are the tutor arrangement, safeguarding information and commercial terms confirmed?",
          "When will the family review fit using attendance, feedback and practice evidence?",
        ],
      },
      {
        id: "london-how-do-price-and-local-options-compare",
        heading: "How should London families compare USD pricing with local options?",
        directAnswer:
          "Convert any US-dollar quote using the payment provider's likely pound-sterling total, including exchange-rate movement and possible card or bank charges. Compare the complete service rather than headline price alone: teaching time, frequency, tutor fit, policies, travel, supervision and home practice all matter.",
        paragraphs: [
          "If NoorPath quotes in USD, the GBP amount paid can vary with the exchange rate and the method used to process the transaction. Ask whether the charge is per lesson, package or billing period; what lesson length and frequency it covers; when payment is taken; and how missed lessons, cancellations, pauses and refunds are addressed. The family should check its own card or bank terms for conversion fees. This guide cannot state a final sterling cost because rates, charges and the actual offer can change.",
          "Online teaching can remove repeated travel across London and may fit a household that values learning from home. It also requires reliable technology, adult oversight and a setting where the learner can concentrate. A local mosque, madrasa or independent teacher may offer in-person contact and a familiar physical setting, but travel time, class format, timetable and individual attention will vary by provider. Neither model is automatically better, safer, cheaper or more effective.",
          "Compare like with like using the family's priorities. Obtain current details directly from each provider and avoid assigning a cash value to claims that cannot be evidenced. A lower nominal fee may not suit if the timetable causes absences; a convenient online slot may still be poor value if the learner lacks a usable room. Choose only after the course, proposed tutor arrangement, trial experience, safeguarding information, total expected payment and cancellation terms are sufficiently clear.",
        ],
        table: {
          headers: ["Comparison area", "What to verify"],
          rows: [
            ["USD payment", "Current GBP estimate, conversion route and possible provider charges"],
            ["Online option", "Live teaching terms, technology, supervision and no-travel benefit"],
            ["Local option", "Venue, journey, class format, timetable and provider-specific policies"],
            ["Overall value", "Fit, usable teaching time, practice expectations and full terms"],
          ],
        },
      },
    ],
  },
  birmingham: {
    city: "Birmingham",
    country: "United Kingdom",
    title: "Online Quran Classes in Birmingham: A Practical Family Guide",
    description:
      "Commercial guidance for Birmingham households assessing remote Quran classes, fitting lessons around family commitments, checking tutors and trials, and comparing progress support and US-dollar costs.",
    reviewedDate: "15 July 2026",
    sections: [
      {
        id: "birmingham-what-is-the-remote-service",
        heading: "What is the remote Quran teaching service for Birmingham families?",
        directAnswer:
          "NoorPath offers lessons online, not through a Birmingham branch, classroom or home-visit service. A Birmingham household can discuss remote course and timetable needs, but city wording is contextual guidance only and does not represent local premises, local tutors, existing learners or community partnerships.",
        paragraphs: [
          "Lessons require the learner and tutor to meet through a live online platform. The household supplies the study space, device and connection, and a parent remains responsible for a child's immediate environment. There is no Birmingham venue under the service described here. Families seeking face-to-face teaching should compare local providers rather than assume an online enquiry can become an in-person arrangement.",
          "Start by describing the learner rather than the postcode. State whether they are new to Arabic letters, reading connected Quranic text, developing tajweed, memorising or seeking an age-appropriate Islamic studies route. Add previous learning and any barriers: confidence, retention, attention, pronunciation or inconsistent practice. This gives the service a basis for discussing a course while avoiding unsupported assumptions based on age or city.",
        ],
        bullets: [
          "Decide whether remote-only tuition is acceptable before discussing price.",
          "Describe ability, prior study, objective and learning challenges accurately.",
          "List fixed family commitments and realistic preparation time.",
          "Treat all tutor and timetable preferences as unconfirmed until agreed.",
        ],
      },
      {
        id: "birmingham-how-do-we-plan-gmt-and-bst",
        heading: "How should a Birmingham timetable handle GMT, BST and changing routines?",
        directAnswer:
          "Record lessons in Birmingham local time and ask whether the appointment follows the UK change between GMT and BST. Build the weekly plan around actual school, work, travel and religious commitments, with enough buffer to arrive, prepare and join without repeatedly rushing.",
        paragraphs: [
          "Online teaching can cross time zones, so families should confirm more than a number on the clock. Ask for the day, time, time-zone basis and start date in writing. When British Summer Time begins or ends, check whether the tutor's own clock also changes and whether the agreed Birmingham local time remains fixed. Recheck automated calendar entries and messages near each transition. A clear process is safer than assuming software or either participant will interpret the shift correctly.",
          "A timetable should reflect the difference between a theoretically free hour and an hour the learner can use well. A child coming from school, another class or a madrasa session may need food, prayer and quiet before further study. An adult finishing a shift or commuting should use typical arrival experience rather than the best journey of the month. Where a household's weekdays differ, propose the exact pattern instead of asking vaguely for “evenings”.",
        ],
        table: {
          headers: ["Planning question", "Useful family action"],
          rows: [
            ["Does the slot follow GMT/BST?", "Ask for Birmingham local time and clock-change handling in writing"],
            ["What happens before the lesson?", "Allow for travel, meals, prayer and preparation"],
            ["Do weekdays differ?", "Provide the exact workable window for each requested day"],
            ["Could routines change?", "Read notice and rescheduling terms before committing"],
          ],
        },
      },
      {
        id: "birmingham-which-course-fits-the-learner",
        heading: "Which course fits the learner rather than the timetable?",
        directAnswer:
          "Select a course from evidence of the learner's current reading and the next skill they need. Separate foundation reading, fluency, tajweed, hifz and Islamic studies objectives. Convenience matters, but a convenient slot for the wrong level is not a sound learning purchase.",
        paragraphs: [
          "A beginner who cannot yet recognise and join letters needs systematic foundations and repeated decoding practice. A reader who manages familiar surahs but struggles with unfamiliar text may need fluency and correction. Tajweed study should connect rules to actual recitation rather than rely on terminology alone. Hifz requires a balance of new material and revision, while Islamic studies requires clarification of the offered syllabus, teaching approach and suitability. Ask what category the observed level supports.",
          "Where siblings learn, one shared family schedule does not establish one shared level. Each child may need a separate starting point, lesson length or home task. Combining learners may sometimes appear efficient, but families should ask how individual recitation time and correction would work before requesting it. This guide does not state that a particular group or individual format is available; the point is to understand the proposed teaching structure and what the quoted fee covers.",
        ],
        bullets: [
          "Ask how the starting level will be assessed or observed.",
          "Define one primary skill and any secondary learning preference.",
          "Clarify individual teaching time if more than one learner is involved.",
          "Avoid a completion deadline until the tutor has meaningful learning evidence.",
          "Confirm what materials and home practice belong to the proposed course.",
        ],
      },
      {
        id: "birmingham-what-tutor-evidence-matters",
        heading: "What tutor evidence and matching details should parents request?",
        directAnswer:
          "Request precise information relevant to the proposed tutor: teaching experience, represented qualifications or recitation evidence, learner-age experience and teaching method. Ask how NoorPath made the match. Never infer Birmingham residence, local community knowledge, credentials, availability or likely outcomes from marketing wording.",
        paragraphs: [
          "Evidence should be specific enough to evaluate. If the service refers to a qualification, ask what it is and how it relates to the course. If experience is important, ask whether it concerns beginners, children, adults, tajweed or memorisation rather than treating all teaching experience as interchangeable. This file does not verify any individual claim, so the current service response is the relevant source for a purchasing decision.",
          "A helpful match considers the learner's stage and interaction needs. Some beginners need patient repetition and concrete prompts; some teenagers respond better when the purpose of each correction is explained; an adult may want technical detail and a clear practice plan. Tell NoorPath about attention, confidence, language of explanation and any tutor preference. Preferences can shape a request, but families should wait for explicit confirmation of the actual tutor and time.",
        ],
        table: {
          headers: ["Evidence area", "Commercial question"],
          rows: [
            ["Teaching experience", "How does it relate to this learner's age, level and course?"],
            ["Qualification or recitation evidence", "What exactly is represented and can it be explained precisely?"],
            ["Matching", "Which stated needs led to this recommendation?"],
            ["Early lesson evidence", "Can the learner understand, respond to and apply corrections?"],
          ],
        },
      },
      {
        id: "birmingham-how-should-we-use-a-trial",
        heading: "How should a family use the trial before enrolling?",
        directAnswer:
          "Treat the trial as a structured check, not a sales formality. Confirm price, duration, platform, tutor and purpose first; then test audio, level judgement, teaching style and learner response. Ask whether the continuing arrangement uses the same tutor, schedule and commercial terms.",
        paragraphs: [
          "Use the room, device and connection intended for regular lessons. A test conducted under unusually ideal conditions may not expose competing household noise or weak evening Wi-Fi. Join early enough to resolve permissions for the camera and microphone. A parent should help a child connect and remain appropriately present. Bring normal learning materials and describe prior study honestly, since presenting a rehearsed passage as typical can distort the recommended level.",
          "Observe what happens after an error. Does the tutor identify it, provide a usable model, explain at an appropriate depth and ask the learner to try again? Notice whether instructions are paced sensibly and whether the learner spends enough time reading. Enjoyment is relevant to engagement but should be considered alongside teaching substance. Ask the tutor or service to summarise the observed starting point and likely initial priorities without pressing for guaranteed speed or results.",
        ],
        bullets: [
          "Test from the normal lesson location at a representative time.",
          "Watch correction, explanation, learner participation and rapport.",
          "Ask for the observed level and first teaching priorities.",
          "Distinguish the trial setup from the confirmed continuing offer.",
        ],
      },
      {
        id: "birmingham-what-supervision-keeps-children-safe",
        heading: "What supervision helps keep a child's online lesson appropriate?",
        directAnswer:
          "Use an adult-controlled account, an observable shared room and age-appropriate supervision throughout the child's session. Before enrolment, ask for NoorPath's current safeguarding, communication, recording and reporting arrangements. Parents remain responsible for the home setting and should raise concerns through an adult channel.",
        paragraphs: [
          "Place the device where the responsible adult can readily monitor the interaction without obstructing teaching. For younger children, the adult should remain close enough to solve connection problems and respond if the child is uncomfortable. Meeting links and passwords should stay with the parent, and tutor communication about scheduling or performance should use the nominated adult contact rather than a private child-managed channel.",
          "Ask how tutors are selected and overseen, what communication boundaries apply, whether lessons may be recorded, who can access recordings and how a concern is reported. Seek the current policy and terms directly; this guidance does not make a legal claim or certify a safeguarding system. If the family's own rules prohibit recording or require another adult to remain visible, discuss that before purchase so expectations are not discovered during a lesson.",
          "Supervision also includes protecting attention and dignity. Siblings should not interrupt or tease a learner, and household members should know when a camera is active. A parent can listen without supplying every answer, allowing the tutor to assess independent performance. If an interaction appears inappropriate, stop or leave the session if necessary, note facts and times, preserve relevant communications and contact the stated service channel. Use suitable external safeguarding or emergency routes if the facts warrant them.",
        ],
        bullets: [
          "Keep access, scheduling and administrative communication adult-managed.",
          "Make the learning space observable and notify others about the camera.",
          "Obtain current recording, conduct and reporting information.",
          "Respond to concerns factually and promptly rather than through the child.",
        ],
      },
      {
        id: "birmingham-how-do-we-set-up-the-home",
        heading: "How should a Birmingham household set up for consistent lessons?",
        directAnswer:
          "Create one repeatable learning station with clear audio, stable internet, good lighting, an eye-level screen and the correct reading materials. Reduce competing sound and test at the intended lesson time. The setup should support supervision and be simple enough to prepare each week.",
        paragraphs: [
          "Clear recitation audio is the priority. Test the microphone from the learner's normal reading position and remove cases or objects that block it. Headphones may reduce echo, but the parent should consider comfort, volume and supervision. Shut bandwidth-heavy applications where practical, plug in the device and check platform permissions. Because connection quality can change with household use, an evening test can be more revealing than a quiet daytime check.",
          "Arrange the text below or beside the camera so the learner can alternate between page and screen without disappearing from view. Light the face and page from the front or side. Keep a pencil, notebook and any assigned sheet ready. If lessons sit between school, work, prayer or madrasa commitments, reset the space beforehand rather than spending the first teaching minutes searching for materials.",
          "Shared space does not need to be silent, but predictable boundaries help. Agree that television, calls and noisy tasks will move elsewhere where possible. Choose a place an adult can observe and avoid using a bedroom with an unsupervised closed door for a child's session. Keep a simple recovery plan: know how to reconnect, retain the adult support contact and note technical interruptions so repeated loss of time can be discussed with the service.",
        ],
        table: {
          headers: ["Home requirement", "Before-lesson check"],
          rows: [
            ["Sound", "Normal recitation is clear without echo or competing media"],
            ["Connection", "Platform opens, permissions work and device is powered"],
            ["Materials", "Correct text, notebook and assigned work are within reach"],
            ["Supervision", "Adult can observe and respond without taking over"],
          ],
        },
      },
      {
        id: "birmingham-how-do-we-review-progress",
        heading: "How should parents review progress and practice?",
        directAnswer:
          "Ask for a clear baseline, near-term teaching priorities and regular specific feedback. Monitor attendance, assigned practice, recurring errors, retention and independent reading rather than expecting a promised completion date. Adjust the plan when evidence shows that routine, level or teaching fit needs attention.",
        paragraphs: [
          "At the start, write down what the learner can currently do without prompting. For reading, note secure letters, joining, pace and common hesitation. For tajweed, identify rules that are understood but not consistently applied. For hifz, distinguish new memorisation from older revision. This baseline need not be a formal score; it should make later discussion more concrete than broad impressions.",
          "Practice has to fit the whole week. A Birmingham family balancing school, work, mosque or madrasa activity and other responsibilities may need short tasks assigned to specific days. That is a planning example, not a prescription. Ask the tutor for a minimum useful task and a fuller option when time permits. Parents can prompt the routine and listen briefly while avoiding corrections that conflict with the tutor's method.",
          "Review patterns rather than reacting to one difficult lesson. If accuracy stalls, ask whether practice was completed, instructions were understood, the material was appropriately pitched and the timetable still supports attention. If older memorisation weakens, adding more may not be the immediate priority. Agree a measured response and check again after enough lessons to observe it. Progress depends on several factors, so no tutor or course should be selected on an unsupported guarantee.",
        ],
        bullets: [
          "Record the learner's independent starting point.",
          "Request precise feedback and a manageable home task.",
          "Track retention and correction as well as material covered.",
          "Review schedule, course emphasis and match when a pattern persists.",
        ],
      },
      {
        id: "birmingham-what-contingency-and-review-plan-is-needed",
        heading: "What contingency and lesson-review plan should a Birmingham family make?",
        directAnswer:
          "Agree a simple household response for late journeys, changing work patterns, competing mosque or madrasa commitments, device problems and a supervising adult's absence. Separately, prepare focused review questions about teaching, practice and fit. Provider schedule changes remain subject to confirmed policies and availability.",
        paragraphs: [
          "A contingency plan should protect learning without assuming that every disruption earns a replacement lesson. Keep the meeting details with the responsible adult, charge the usual device and identify a suitable second room if the normal space becomes unavailable. Decide how long the family will attempt to reconnect and which adult will contact the service. Read the actual lateness, cancellation and rescheduling terms so the household response reflects the purchased arrangement rather than an expectation created after a problem.",
          "Birmingham households may need to coordinate school, work, prayer, mosque or madrasa attendance, meals and caring duties. Map the conflicts that genuinely apply to this family and distinguish recurring pressure from an exceptional event. If the learner is repeatedly joining tired or unprepared, the issue is probably the timetable design rather than a series of isolated incidents. Ask about a different arrangement early, but do not assume another time or tutor can be supplied until NoorPath confirms the request.",
          "Use lesson reviews to seek evidence, not reassurance. Useful questions include: which errors are now less frequent, which skill still needs prompting, what should be practised before the next lesson, and is the current pace protecting accuracy and retention? For hifz, ask about the balance between new memorisation and revision. For reading or tajweed, request an example of the correction priority. The answer should describe observed work without turning it into a guarantee or comparison with unnamed learners.",
          "Parents should also review the service conditions around the teaching. Is feedback reaching the nominated adult? Does the learner have enough opportunity to recite? Can the home task fit alongside existing commitments? Are technical interruptions being recorded accurately? Bring concise examples to a discussion and ask what one adjustment is recommended. Changing several variables at once can make the result difficult to interpret, whereas a defined adjustment followed by a planned review gives the family clearer decision evidence.",
        ],
        bullets: [
          "Store access details, support contact information and the relevant policy.",
          "Identify recurring schedule pressure before it becomes repeated absence.",
          "Ask review questions tied to errors, retention, independence and practice.",
          "Agree one evidenced adjustment and a suitable point to reassess it.",
        ],
      },
      {
        id: "birmingham-what-does-usd-pricing-mean",
        heading: "What does USD pricing mean when comparing Birmingham options?",
        directAnswer:
          "A US-dollar quote is not a fixed pound-sterling total. Check the current conversion, payment-provider rate and possible card or bank fees, then confirm lesson length, frequency, billing cycle and policies. Compare remote and local options on complete fit, not the displayed number alone.",
        paragraphs: [
          "Ask NoorPath to identify exactly what the USD amount buys and when it is charged. Clarify whether pricing covers an individual lesson, a recurring period or a package; whether a trial is included; and how cancellations, tutor absence, family absence, pauses and refunds are treated. Then consult the chosen payment method for its conversion approach and fees. Exchange-rate movement means this guide cannot responsibly provide a permanent GBP equivalent.",
          "Remote tuition can reduce travel and allow learning in a familiar home space. The trade-off is responsibility for technology, a suitable room and parent supervision. A Birmingham-based mosque, madrasa, centre or independent tutor may provide face-to-face interaction, but its journey, class size, individual reading time, safeguarding arrangements and timetable need direct checking. Local does not automatically mean nearby, available or suitable, just as online does not automatically mean flexible or personalised.",
          "Create a short comparison based on the learner's actual goal. Include total expected payment, usable teaching minutes, proposed tutor evidence, course fit, trial experience, practice expectations and the likelihood that the timetable will be attended consistently. Read the provider's current terms rather than relying on a verbal impression. The right commercial choice is the adequately evidenced arrangement the household can sustain, not a claim that one delivery format universally outperforms another.",
        ],
        table: {
          headers: ["Cost or value item", "Evidence to collect"],
          rows: [
            ["USD charge", "Amount, billing basis, payment date and current GBP estimate"],
            ["Extra payment effects", "Conversion method and possible bank or card fees"],
            ["Remote tuition", "Technology, supervision, timetable and actual teaching arrangement"],
            ["Local tuition", "Travel, venue, format, policies and individual learning opportunity"],
          ],
        },
      },
    ],
  },
  manchester: {
    city: "Manchester",
    country: "United Kingdom",
    title: "Online Quran Classes in Manchester: A Practical Family Guide",
    description:
      "Commercial guidance for Manchester families considering remote Quran lessons, including Greater Manchester routines, clock changes, tutor matching, trials, safeguarding, progress and USD pricing.",
    reviewedDate: "15 July 2026",
    sections: [
      {
        id: "manchester-what-does-remote-only-mean",
        heading: "What does remote-only Quran tuition mean in Manchester?",
        directAnswer:
          "NoorPath's offer is online only: it does not provide a Manchester branch, local classroom or tutor home visits. City-specific guidance helps a Manchester household plan remote learning, but it must not be read as evidence of local tutors, customers, reviews, partnerships or physical availability.",
        paragraphs: [
          "A remote lesson uses live video and the family's device and connection. That can remove a repeated journey, but the household must create an appropriate study place and supervise a child. Families wanting a physical class should evaluate providers that offer one. Assess NoorPath for its described service, not for a local presence suggested by a city page title.",
          "Prepare an enquiry with learning facts. Explain whether the learner recognises Arabic letters, joins them confidently, reads Quranic text, studies tajweed, memorises or wants Islamic studies. Mention previous tuition, current materials and difficulties such as hesitation, inconsistent retention or limited independent practice. Do not inflate ability to secure a more advanced course; an accurate starting description improves the usefulness of any assessment and recommendation.",
        ],
        bullets: [
          "Confirm that live remote teaching suits the family's delivery preference.",
          "State the learner's real level, previous study and immediate objective.",
          "Describe actual travel and household constraints without assuming flexibility.",
          "Wait for direct confirmation of course, tutor, time and commercial terms.",
        ],
      },
      {
        id: "manchester-how-should-we-build-the-timetable",
        heading: "How should a Manchester family build a dependable timetable?",
        directAnswer:
          "Plan in Manchester local time, confirm whether lessons remain fixed through the switch between GMT and BST, and use normal rather than best-case journey times. Include preparation margin for school, work, Greater Manchester travel and occasional disruption before selecting a recurring slot.",
        paragraphs: [
          "A cross-border online timetable needs an explicit time-zone convention. Ask whether the appointment is anchored to UK local time or to the tutor's location and what will happen when British clocks change. Confirm the first date and calendar entry in writing. Around spring and autumn transitions, compare the meeting invitation, family diary and service message. Devices often update automatically, but that does not guarantee every human arrangement was created correctly.",
          "Work backwards from when the learner can be settled, not when school or work formally ends. Include the journey, possible interchange, collecting children, eating, prayer and ten minutes for materials and audio. Weather can sometimes make roads, walking or public transport less predictable; families should use general disruption as a contingency factor without assuming it affects every lesson. A modest buffer protects teaching time and reduces rushed starts.",
        ],
        table: {
          headers: ["Manchester planning factor", "Timetable decision"],
          rows: [
            ["GMT/BST transition", "Confirm whether Manchester local time stays constant"],
            ["Greater Manchester journey", "Use ordinary door-to-door experience plus a buffer"],
            ["Possible weather disruption", "Keep joining details accessible and avoid a zero-margin slot"],
            ["Different weekday routines", "Request exact windows and confirm each one"],
          ],
        },
      },
      {
        id: "manchester-how-do-we-select-a-course",
        heading: "How do we select the right course and starting point?",
        directAnswer:
          "Base the decision on demonstrated ability and one clear next objective. Foundational Arabic reading, Quran fluency, tajweed, hifz and Islamic studies solve different needs. Ask how the starting point is assessed, what the course covers and when its emphasis will be reviewed.",
        paragraphs: [
          "A learner can know short passages by memory without being able to decode unfamiliar words, so familiar recitation alone is not enough to place reading level. Likewise, a fluent reader may require targeted tajweed rather than a full beginner sequence. A prospective hifz learner needs an honest view of current accuracy, revision capacity and available practice. Ask the service to explain how observed evidence supports its recommendation instead of choosing the most impressive title.",
          "Parents comparing options should clarify teaching format and materials. Ask how much live recitation the learner receives, how mistakes are corrected, what home task is expected and whether books or digital materials are part of the offer. For siblings, obtain an individual view of each starting point. A shared timetable can be convenient, but it does not make their pace, attention or revision needs identical.",
        ],
        bullets: [
          "Foundation: letter recognition, joining, vowels and decoding.",
          "Reading: accuracy, continuity and growing independence with text.",
          "Tajweed: relevant rules applied during actual recitation.",
          "Hifz: accurate new memorisation supported by planned revision.",
          "Islamic studies: verify content, level and teaching approach directly.",
        ],
      },
      {
        id: "manchester-how-do-we-check-the-tutor-match",
        heading: "How do families check tutor evidence and teaching fit?",
        directAnswer:
          "Ask for exact, supportable information about the proposed tutor's relevant experience, represented qualifications or recitation evidence and approach to the learner's level. Then test communication and correction directly. Manchester location, credentials, availability and outcomes must never be assumed or inferred.",
        paragraphs: [
          "Broad descriptions should lead to precise questions. If a tutor is described as experienced, ask what kind of learners and courses that experience concerns. If a qualification or religious-study background is relevant to the decision, request the actual description NoorPath can substantiate and how it relates to the course. This guide neither validates an individual tutor nor states where any tutor is based.",
          "Matching should begin with need. A nervous child may require calm repetition and short achievable turns; a learner with established fluency may need close listening and concise technical intervention; an adult beginner may value explanations that do not presume prior terminology. Tell the service about the learner's age, level, goals, attention and preferred communication style. Any preference for tutor gender or schedule remains a request until the service confirms it.",
        ],
        table: {
          headers: ["Tutor check", "Evidence to seek"],
          rows: [
            ["Relevant background", "A precise description connected to the proposed course"],
            ["Matching rationale", "The learner needs and preferences considered"],
            ["Teaching interaction", "Clear modelling, correction and learner response"],
            ["Ongoing support", "Current process for feedback or discussing a mismatch"],
          ],
        },
      },
      {
        id: "manchester-what-makes-a-useful-trial",
        heading: "What makes an online trial commercially useful?",
        directAnswer:
          "A useful trial tests the expected weekly conditions and answers both learning and purchasing questions. Confirm any charge, duration, tutor, platform and purpose; observe assessment, correction and rapport; then verify whether the same tutor, time, course and terms apply after the trial.",
        paragraphs: [
          "Run the trial on the likely lesson device and from the planned room. Where possible, choose a representative time so competing internet use, household sound and the learner's energy are realistic. Join early, check permissions and have the normal text ready. A supervising parent should help a child without reciting answers for them, because the tutor needs to hear what the learner can do independently.",
          "Look beyond friendliness. Note whether the tutor identifies a plausible starting point, makes correction understandable and adjusts when the first explanation does not work. The learner should have enough opportunity to read rather than listening for most of the session. Ask what was observed, which course appears suitable and what the first priorities might be. These are informed initial views, not promises of a level or completion date.",
          "Resolve the commercial details immediately afterwards while the experience is clear. Ask for lesson duration, frequency, USD amount, billing schedule, materials, cancellation and rescheduling terms, and the intended continuing tutor and time. If any element is different from the trial, judge the confirmed offer separately. A family should not pay because it feels awkward to decline; it should proceed only when the learning fit and full terms are sufficiently understood.",
        ],
        bullets: [
          "Replicate the intended device, room and approximate weekly conditions.",
          "Observe independent reading, correction, explanation and interaction.",
          "Request a factual starting-point summary and initial priorities.",
          "Confirm exactly which trial features continue into paid lessons.",
        ],
      },
      {
        id: "manchester-how-do-parents-supervise-safely",
        heading: "How do parents supervise online lessons and raise concerns?",
        directAnswer:
          "Parents should control the child's account and lesson access, keep teaching observable, remain appropriately available and use adult contact details. Ask NoorPath for current safeguarding, communication, recording and concern-reporting information before buying; this guide does not replace those policies or legal advice.",
        paragraphs: [
          "Choose a shared position where a responsible adult can see or hear enough to monitor the session. Younger learners may need the adult close by for platform problems, materials and emotional reassurance. Keep invitations and passwords private, and do not encourage private administrative messaging between a tutor and a child's personal account. Tell other household members when the camera and microphone are active so privacy is respected.",
          "Families should ask who communicates about lessons, whether any session can be recorded, the purpose and access arrangements for recordings, and what channel handles a concern. They can also ask how tutors are selected and monitored, while expecting only claims the service can evidence. Obtain current written information directly because procedures can change. Nothing here asserts compliance, creates a guarantee or describes the law for a particular circumstance.",
          "Appropriate presence does not mean correcting over the tutor or completing the task for the child. The parent can monitor boundaries and help with practical issues while allowing an honest teaching interaction. If behaviour or communication causes concern, end the call where necessary, note what occurred and contact the designated adult channel. Preserve relevant messages. Where the facts indicate immediate danger or a serious safeguarding matter, use the appropriate external route rather than waiting for an ordinary customer-service reply.",
        ],
        bullets: [
          "Keep accounts, links and service communication under adult control.",
          "Use an observable space suitable for the child's age.",
          "Clarify recording, privacy, conduct and escalation arrangements.",
          "Document and report concerns through appropriate adult channels.",
        ],
      },
      {
        id: "manchester-what-technology-and-space-are-needed",
        heading: "What technology and home space are needed for clear recitation?",
        directAnswer:
          "Use a stable connection, clear microphone, charged device, well-lit text and an observable low-noise space. Test the platform at the planned lesson time and keep materials ready. Reliable, simple preparation matters more than purchasing premium equipment without an identified need.",
        paragraphs: [
          "The tutor must hear fine differences in recitation, so test normal speaking volume and listen for echo, clipping or background media. Move the device rather than asking the learner to shout. Headphones may help in some homes, subject to comfort and parental supervision. Close unnecessary streams or downloads, connect power and check that operating-system permissions allow the platform to use the camera and microphone.",
          "Place the screen near eye level and the Quran, qaida or workbook where the learner can read naturally while remaining visible. Avoid strong light directly behind the head, and provide enough light on the page. Keep a pencil, notebook and assigned work together in one lesson box or shelf. This reduces preparation friction when a journey or general weather disruption has already compressed the evening.",
          "Test connection quality in the chosen room during likely household usage, not only when every other device is idle. Agree a fallback routine: attempt one reconnection, have the adult contact route available and record how much teaching time was lost. A phone hotspot may be an option for some families, but cost and coverage vary and it is not a requirement stated here. Repeated failures should trigger a discussion about room, device, connection or schedule.",
        ],
        table: {
          headers: ["Lesson component", "Minimum practical check"],
          rows: [
            ["Microphone", "Normal recitation reaches the tutor clearly"],
            ["Internet and platform", "Connection and permissions work under usual household load"],
            ["Page and camera", "Text is lit and learner remains comfortably visible"],
            ["Recovery", "Adult can reconnect and contact the service if needed"],
          ],
        },
      },
      {
        id: "manchester-how-can-we-see-progress",
        heading: "How can a family see whether learning is progressing?",
        directAnswer:
          "Establish a specific baseline and ask for regular evidence-based feedback on accuracy, fluency, rule application, retention and independence. Track attendance and home revision alongside teaching. Progress differs by learner and circumstances, so treat milestones as review points rather than guaranteed outcomes or deadlines.",
        paragraphs: [
          "The first record can be plain language: which letters are secure, where joining breaks down, how much unseen text can be read, which recitation patterns recur or how reliably memorised material is retained. Ask the tutor to identify a small number of priorities. Later feedback can then refer to the same skills and show what changed, what remains unstable and what should be practised next.",
          "Build practice around the family's actual Manchester routine. On a long travel day, a brief review may be sustainable; on a quieter day, the learner may complete a fuller assignment. Consistency matters, but the plan should not create a cycle of unrealistic tasks and discouragement. Parents can record completion and listen supportively while leaving technical corrections to the agreed teaching approach unless the tutor has shown them how to help.",
          "When progress appears unclear, investigate before changing provider or course. Check attendance, punctuality, technical interruptions, practice, learner understanding and whether feedback is sufficiently specific. Ask the tutor what adjustment is proposed and why. A revised pace, stronger revision, different course emphasis, timetable change or matching conversation may each address a different cause. No local comparison, testimonial or unsupported speed claim should replace direct evidence from this learner's work.",
        ],
        bullets: [
          "Write a baseline based on independent performance.",
          "Keep feedback tied to a few observable learning priorities.",
          "Record attendance, practice and recurring technical barriers.",
          "Review causes and adjust the relevant part of the plan.",
        ],
      },
      {
        id: "manchester-how-can-accessibility-shape-enrolment",
        heading: "How can accessibility and home needs shape a Manchester enrolment decision?",
        directAnswer:
          "Describe any practical access need before enrolling and ask what the proposed online arrangement can support. Test instructions, text visibility, sound, controls, lesson pacing and adult assistance during the trial. Do not assume a particular adjustment, specialist expertise or platform feature is available until confirmed.",
        paragraphs: [
          "Accessibility begins with the individual learner rather than a broad label. A family might need clearer verbal instructions, larger on-screen material, reduced visual clutter, extra time to respond, predictable lesson stages or help operating the platform. Explain the functional barrier and the support that has proved useful elsewhere, without asking this guide to diagnose a need. NoorPath can then state what it can offer, and the family can decide whether that answer is sufficiently specific and suitable.",
          "Test the full route into a lesson. Can the learner open the invitation, recognise the tutor's shared material, control volume and move between the screen and printed text without losing their place? Check lighting, glare, seating, microphone position and background sound. Where an adult provides assistance, define whether that means connecting the call, positioning materials, repeating an instruction or remaining nearby. The tutor still needs enough independent response to understand what the learner can do.",
          "Manchester and Greater Manchester travel or general weather disruption can affect when a household reaches home, but remote access does not solve every barrier. Fatigue, a shared room, device availability or unreliable connectivity may still make a proposed slot unsuitable. Trial the likely time rather than an unusually easy period and consider a home contingency that does not depend on an unconfirmed reschedule. If the setup requires equipment or software, establish who supplies it and any cost before enrolling.",
          "Make the final decision from observed compatibility and confirmed information. Ask whether the tutor understood the stated need, adapted communication appropriately and gave usable feedback. Confirm the ongoing tutor arrangement, platform, materials, schedule, supervision expectations, USD payment and applicable policies. Record the access support discussed and ask how future concerns should be raised. No positive trial can guarantee progress, but it can show whether the practical conditions for participating and reviewing learning are currently credible.",
        ],
        bullets: [
          "Describe the barrier, useful support and learner's degree of independence.",
          "Test sound, visibility, controls, pacing and adult assistance in context.",
          "Confirm any adjustment or equipment responsibility before payment.",
          "Review participation and learning evidence without promising an outcome.",
        ],
      },
      {
        id: "manchester-how-should-we-compare-costs",
        heading: "How should Manchester families compare USD costs and local tuition?",
        directAnswer:
          "Translate the current USD offer into an estimated GBP payment using the chosen provider's conversion terms and possible fees. Compare lesson content, duration, tutor fit, schedule, policies, travel, technology and supervision. Online and local teaching each have trade-offs; neither is inherently better.",
        paragraphs: [
          "A dollar amount can change in sterling terms between enquiry and payment. Ask what period or number of lessons it covers, when it renews and whether the rate can change. Confirm trial charges, cancellation, rescheduling, pauses and refund conditions. Then ask the bank, card or payment provider how it converts USD and whether it adds a foreign-currency fee. A fixed GBP figure in this guide would be misleading because exchange rates, provider charges and offers can vary.",
          "Remote tuition avoids the need to make an additional journey across Manchester or Greater Manchester for each lesson and may make weather-related travel disruption less relevant once the learner is home. It still depends on electricity, connectivity, a usable room and parent supervision. A local mosque, centre, madrasa or private tutor may provide in-person interaction, yet travel distance, lesson format, individual attention and policies differ. Verify each real option rather than assigning generic benefits.",
          "Use one comparison sheet for like-for-like facts. Include total expected payment, live teaching minutes, whether teaching is individual or shared, course fit, proposed tutor evidence, practice load, safeguarding information and the cost in family time. Include reliability: a theoretically convenient lesson has limited value if the learner often arrives tired or late. Make the purchase only after the confirmed arrangement and written terms are clear enough for the household's priorities and budget.",
        ],
        table: {
          headers: ["Decision factor", "What the family should compare"],
          rows: [
            ["Currency", "USD amount, current GBP estimate and possible conversion fees"],
            ["Teaching", "Course fit, duration, format, tutor evidence and feedback"],
            ["Practical burden", "Travel or home setup, supervision and schedule reliability"],
            ["Terms", "Billing, cancellation, rescheduling, pauses and refunds"],
          ],
        },
      },
    ],
  },
};
