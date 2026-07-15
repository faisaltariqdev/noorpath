import type { CityGuideContent } from '@/data/countryGuideTypes';

export const cityGuidesUsSecondary: Record<string, CityGuideContent> = {
  chicago: {
    city: 'Chicago',
    country: 'United States',
    title: 'Online Quran Classes in Chicago: A Practical Family Guide',
    description:
      'Commercial guidance for Chicago families comparing remote Quran lessons, Central Time scheduling, course placement, tutor matching, USD costs, safeguarding, technology, and progress.',
    reviewedDate: 'July 15, 2026',
    sections: [
      {
        id: 'chicago-remote-service',
        heading: 'What does an online-only Quran service mean for a Chicago family?',
        directAnswer:
          'NoorPath provides remote, one-to-one Quran lessons that a learner joins online. It does not claim a Chicago branch, classroom, neighborhood office, or home-visit service. Families seeking face-to-face tuition should compare that separately, while families considering NoorPath should evaluate its online format, matching process, schedule, and current terms.',
        paragraphs: [
          'That distinction prevents a common comparison error. A nearby mosque class, an independent tutor who travels to homes, and an online lesson may all support Quran learning, but they involve different supervision, travel, group interaction, and commercial arrangements. NoorPath should be assessed as a remote provider. The tutor may be elsewhere, and the learner’s Chicago address does not establish the tutor’s location, credentials, or availability. Ask for facts about the proposed arrangement rather than inferring a local presence from a city-focused page.',
          'Remote delivery can remove the need to cross the city or coordinate a suburban drive for every lesson. It does not remove the need for a reliable routine at home. A learner still needs a suitable device, a quiet place, materials, adult oversight when appropriate, and enough transition time after school or work. Families should decide whether those conditions are more realistic than regular travel. If community participation or in-person peer contact is a priority, online individual instruction may complement rather than replace a local activity.',
        ],
      },
      {
        id: 'chicago-ct-scheduling',
        heading: 'How should Chicago households schedule lessons in Central Time?',
        directAnswer:
          'Request every proposed lesson time in Chicago local time and confirm whether the recurring appointment remains fixed when clocks change. Chicago uses Central Time, moving between standard and daylight time seasonally. Families should also allow realistic buffers for school dismissal, commuting, meals, activities, prayer, homework, and bedtime rather than choosing a theoretically open minute.',
        paragraphs: [
          'The abbreviation CT is useful because it covers both Central Standard Time and Central Daylight Time, but a calendar invitation should still show the correct date, time, and time zone. If a tutor or scheduling system operates from another region, ask which side of the time conversion controls the appointment. Recheck the first lesson after a daylight-saving transition instead of assuming every calendar, device, and person has interpreted the change identically. Travel outside the time zone is another reason to confirm whether the appointment follows Chicago time or the learner’s temporary location.',
          'A workable slot should fit the family’s ordinary week, not an unusually quiet one. City and suburban journeys can vary with work, school, road, and transit conditions, so an appointment immediately after an expected arrival can be fragile. Build in time to come indoors, eat if needed, open the lesson materials, and test audio. Winter weather can add disruption to school, work, or travel routines as a general planning factor; it should prompt a contingency plan, not an assumption that every winter day will be affected.',
          'When adults arrange lessons across two households, state who receives reminders and who helps the learner join. For rotating work schedules, identify a primary slot and ask about the current rules for changes before purchase. A schedule with modest but dependable frequency can be more useful than an ambitious timetable that regularly conflicts with real life. Availability must be confirmed for the requested tutor and period; this guide does not imply a specific day or hour is open.',
        ],
        table: {
          headers: ['Chicago planning point', 'Question to confirm'],
          rows: [
            ['Central Time', 'Is the recurring appointment displayed in Chicago local time?'],
            ['Clock changes', 'Will the learner’s local hour stay fixed after daylight saving changes?'],
            ['Travel buffer', 'Is there enough room for an ordinary city or suburban journey?'],
            ['Disruption plan', 'What current policy applies if weather or travel affects attendance?'],
          ],
        },
      },
      {
        id: 'chicago-routine-planning',
        heading: 'How can lessons fit Chicago-area school, work, travel, and winter routines?',
        paragraphs: [
          'Start with the learner’s actual calendar. School hours, term dates, activity schedules, and transportation arrangements differ among schools and households, so a generic “after school” slot is not specific enough. Record dismissal, the usual trip home, homework load, dinner, sports or clubs, and bedtime for each proposed day. A child who arrives home mentally tired may engage better after a break, while another may prefer to begin before evening distractions accumulate. The family, not a city stereotype, supplies the relevant evidence.',
          'Chicago and surrounding suburbs form a broad travel area. A parent may work downtown while a learner studies elsewhere, or family members may coordinate pickups across different communities. Online lessons avoid a separate trip to a teaching venue, but the responsible adult may still be in transit near lesson time. Decide whether another adult can supervise and handle technical issues. If the learner attends from a second household on some days, check that both locations have the correct link, materials, internet access, and safeguarding expectations.',
          'Seasonal planning deserves a simple backup routine. Cold weather, snow, or a changed school day can sometimes rearrange household plans, while summer travel and longer daylight hours can shift activities in another direction. Keep the lesson device charged, know where communications will arrive, and review applicable rescheduling terms before a disruption occurs. Do not presume that an online lesson is canceled because local travel changes; remote delivery may still be possible, but the learner’s readiness and adult supervision remain important.',
        ],
      },
      {
        id: 'chicago-course-routing',
        heading: 'Which Quran course and starting point should a Chicago learner request?',
        paragraphs: [
          'Course routing should follow demonstrated skill and the learner’s objective, not the city, age, or number of years previously enrolled. Describe what the learner can do without prompting. For reading foundations, that might include recognizing letters in isolated and joined forms, distinguishing short vowels, blending sounds, and reading unfamiliar words. For recitation, identify whether the difficulty concerns fluency, articulation, correction of repeated errors, or applying Tajweed knowledge while reading. A familiar memorized passage alone may not reveal independent reading ability.',
          'Memorization support requires a different brief. State the portions already learned, how reliably they can be recalled, how revision is currently organized, and whether the immediate priority is retention or new material. For Islamic studies, ask what topics, instructional language, materials, and age range the available course addresses. A broad label such as beginner or advanced can conceal important gaps. Specific examples make an initial assessment and tutor match more informative.',
          'Preferences about tutor gender, teaching language, pacing, or experience with a learner’s age can be stated during inquiry. They are matching requests, not evidence that a particular tutor is available. Confirm the resulting match and observe whether the learner understands the instruction. No course title, city page, or initial assessment should be treated as a guarantee of completion by a fixed date.',
        ],
        bullets: [
          'Reading foundations: letter recognition, vowel marks, joining, and independent decoding.',
          'Recitation or Tajweed: audible errors, rule application, fluency, and correction response.',
          'Memorization: current portions, retention, revision load, and realistic new work.',
          'Islamic studies: proposed topics, materials, language, and age suitability.',
        ],
      },
      {
        id: 'chicago-tutor-match',
        heading: 'What tutor evidence and matching details should parents examine?',
        paragraphs: [
          'Evaluate a proposed tutor through information that can be verified and teaching behavior that can be observed. If qualifications or experience matter, ask what specific evidence is available rather than relying on an undefined label such as expert. This guide does not claim that any tutor has a particular credential, location, background, or specialization. A profile can inform the decision, but the practical question is whether the tutor can identify this learner’s needs and teach the next step clearly.',
          'During an assessment or trial, notice the sequence of instruction. Does the tutor listen before correcting, isolate the relevant error, model it understandably, invite another attempt, and check whether the correction transfers? For a child, also consider patience, pace, respectful language, and the balance between encouragement and focused teaching. For an adult, check whether explanation is sufficiently precise and whether the session addresses the stated goal instead of following a generic script.',
          'Matching is a two-way commercial checkpoint. The family should provide accurate availability, level, age, goals, and material preferences; NoorPath should confirm the arrangement it can actually offer. Ask how a fit concern is reported and what the current process is for requesting a change. Do not assume a replacement can meet exactly the same schedule or preferences. The applicable policy and available alternatives at that time are what matter.',
        ],
      },
      {
        id: 'chicago-trial-pricing',
        heading: 'How should a Chicago family assess a trial and compare USD pricing?',
        directAnswer:
          'Use a trial to evaluate placement, teaching clarity, tutor fit, learner response, and technology—not to predict a guaranteed result. Before paying, confirm the current price in US dollars, lesson length, frequency, billing cadence, included services, and written terms for missed lessons, rescheduling, cancellation, refunds, pauses, and tutor-change requests.',
        paragraphs: [
          'Compare prices on equivalent terms. A monthly figure is not meaningful until the number and duration of lessons are known. Convert each option to a common basis while retaining differences such as one-to-one versus group teaching, live instruction versus recorded material, and any stated support. Use the current checkout, quotation, or official pricing information as the source of truth. This guide supplies no fixed price because amounts, packages, taxes, and terms can change.',
          'A Chicago household paying in USD may not face currency conversion, but the payment method can still carry its own conditions or charges. Confirm the amount authorized, the billing date, whether payment recurs, and how cancellation takes effect. Save the written confirmation. Price alone does not prove quality: a lower amount may not fit the schedule or level, while a higher amount does not establish better teaching.',
        ],
        table: {
          headers: ['Commercial item', 'Evidence to obtain'],
          rows: [
            ['Trial', 'Purpose, duration, placement feedback, and next-step recommendation'],
            ['USD price', 'Current total, billing cadence, lesson count, and lesson length'],
            ['Policies', 'Written cancellation, rescheduling, refund, pause, and absence terms'],
            ['Tutor change', 'Current request process without assuming an identical replacement'],
          ],
        },
      },
      {
        id: 'chicago-safeguarding-setup',
        heading: 'What safeguarding and technical setup should be ready before lessons begin?',
        paragraphs: [
          'Online instruction changes the setting, not the parent or guardian’s safeguarding responsibility. Know the scheduled tutor identity presented by the service, the lesson time, how the child joins, and the official route for raising a concern. For younger learners, place the device in an appropriate observable area and keep an adult available. The amount of direct supervision can reflect age and need, but a child should not be left to manage private online contact without clear boundaries.',
          'Use designated communication and lesson channels. Teach the learner not to disclose a home address, school details, passwords, private photographs, or unnecessary personal information. A child should tell a trusted adult if asked to move to an unapproved account, communicate secretly, or join an unexpected session. Parents should understand any stated recording or privacy arrangements before participation and should not independently record or distribute lessons without appropriate permission.',
          'Technical preparation begins with a supported computer, tablet, or phone, dependable internet, working microphone and speakers, and access to the agreed platform. A larger screen may help with Arabic text, while headphones can reduce household noise if their use remains suitable for supervision. Test the link and permissions before the first meeting. Charge the device, update only when there is time to recover from problems, and keep a power cable nearby.',
        ],
        bullets: [
          'Confirm tutor identity, joining route, schedule, and concern-reporting channel.',
          'Set child-appropriate supervision and privacy boundaries.',
          'Test audio, video permissions, connection, charging, and lesson materials.',
          'Keep official support details available without moving contact to private channels.',
        ],
      },
      {
        id: 'chicago-progress-review',
        heading: 'How can families review progress without expecting fixed outcomes?',
        paragraphs: [
          'Define progress through observable skills connected to the chosen course. A foundational reader might recognize forms more reliably, decode unfamiliar combinations with less prompting, or self-correct a recurring confusion. A recitation learner might reproduce an articulation correction or apply a studied rule in a new line. A memorization learner might retain assigned material across spaced reviews rather than repeat it only immediately after practice. These indicators are more informative than attendance alone.',
          'Agree on a modest review rhythm. After a reasonable period, ask what was taught, what the learner can now do independently, which errors remain, and what comes next. Keep brief notes or samples when appropriate and permitted, but avoid turning every lesson into a test. Progress can be uneven because the material becomes harder, practice varies, or a hidden foundational gap emerges. None of those possibilities proves failure on its own.',
          'If development appears limited, investigate concrete causes. Check attendance, punctuality, home practice, fatigue, audio quality, starting placement, lesson pace, and tutor-learner communication. Provide examples rather than saying only that progress feels slow. Ask whether the course level, schedule, materials, or match should be reviewed and when the adjustment will be assessed. A responsible response proposes a next step; it does not guarantee a result or completion date.',
        ],
      },
      {
        id: 'chicago-winter-accessibility-contingency',
        heading: 'What winter contingency and accessibility plan should the household prepare?',
        paragraphs: [
          'A Chicago winter plan should address the household routine without assuming disruption on any particular day. Decide who checks school, work, and travel changes; who tells NoorPath if attendance may be affected; and where the learner will join if the usual room becomes busy. Remote delivery may remain practical when a city or suburban journey changes, but the lesson still needs supervision, concentration, power, and internet. Confirm the applicable notice and rescheduling policy before weather complicates the decision.',
          'Accessibility planning should begin with the individual learner rather than a generic setup. Consider screen size, text enlargement, contrast, seating, keyboard or touch controls, hearing support, movement breaks, and the ability to communicate an answer comfortably. A parent can describe relevant needs during matching and ask what adjustments are feasible in the available platform and lesson format. Do not assume that every requested accommodation, device, or tutor characteristic is available; obtain a specific confirmation before enrollment.',
          'Test the backup arrangement in advance. Check whether the lesson link opens on a second charged device, whether essential materials can be reached easily, and whether the microphone captures the learner at a comfortable speaking volume. For a learner moving between city and suburban homes, document the setup at each address.',
        ],
      },
      {
        id: 'chicago-parent-decision-checklist',
        heading: 'Which questions belong on a Chicago parent’s final decision checklist?',
        paragraphs: [
          'Before enrolling a child, a parent should be able to state why online one-to-one teaching fits the current need, which course and starting point were proposed, and what was actually observed during the trial. Record the confirmed CT schedule, lesson length, supervision plan, device location, tutor-matching priorities, USD charge, and billing cadence. Include ordinary school and activity weeks as well as a week involving downtown or suburban travel, because a choice that works only under ideal timing is fragile.',
          'Review the trial in two columns: useful evidence and unresolved questions. Evidence might include how the tutor assessed reading, responded to an error, explained practice, or adapted pace. Questions might concern materials, parent updates, accessibility, a schedule handoff, or the process for reporting a fit concern. Avoid converting a pleasant first meeting into an outcome prediction. The decision is whether the observed approach and confirmed arrangement justify beginning, not whether one session proves future attainment.',
          'Read policy wording before authorizing payment. Ask how notice is measured, what happens after a learner absence or provider-side change, when recurring billing stops, and how cancellation, refunds, pauses, rescheduling, or tutor-change requests are handled. Save the version or written response relied upon. If an answer remains unclear, postpone the purchase rather than filling the gap with assumptions from another academy.',
        ],
      },
      {
        id: 'chicago-enrollment-choice-review',
        heading: 'How should a family choose an enrollment level and review it later?',
        paragraphs: [
          'Choose lesson frequency from the time the learner can sustain, not from the fastest advertised path or the largest package. Compare a conservative starting commitment with a heavier schedule by considering schoolwork, practice, adult supervision, winter contingencies, and the current cancellation terms. Confirm each available enrollment choice directly; this guide does not claim that a particular package, frequency, or start date exists. A trial can inform the choice, but it does not obligate the family to enroll.',
          'Set a review point based on evidence rather than a promised milestone. At that point, compare the original baseline with current reading samples, recurring correction notes, revision recall, assignment completion, and the learner’s ability to work with less prompting where appropriate. Also review missed sessions, technical interruptions, and whether the CT slot still fits. These records help distinguish an instructional concern from a schedule or setup problem without inventing a performance score.',
          'The later choice may be to continue, ask for an adjustment, change frequency if an appropriate option is confirmed, or stop under the applicable terms. Ask what the tutor recommends and why, while retaining the parent’s commercial judgment. No single page count or attendance total establishes value. The relevant evidence combines teaching quality, learner response, usable progress, communication, affordability, and the household’s capacity to maintain the routine.',
        ],
      },
      {
        id: 'chicago-online-local-comparison',
        heading: 'How should Chicago families compare online lessons with local alternatives?',
        paragraphs: [
          'Compare formats by the need they solve. Online one-to-one lessons can avoid an additional city or suburban trip and may offer focused live attention from home. A local mosque or learning center may offer in-person community, shared routines, and peer contact. A home-visit tutor removes the remote setting but introduces travel, household access, and local-vetting questions. An app offers flexible repetition but not necessarily live correction. None is universally superior.',
          'Build a shortlist using the same categories for every option: instructional format, course fit, verified tutor information, child safeguarding, schedule, travel, technology, parent communication, trial arrangements, and total USD cost. For local tuition, include journey time, weather resilience, parking or transit considerations where relevant, and what happens when travel is disrupted. For online tuition, include screen suitability, connection quality, home supervision, and whether the learner engages remotely.',
          'Compare current evidence, not implied locality. A Chicago name in marketing does not establish an office, branch, home-visit capability, local tutor, or local customer history. Likewise, physical proximity does not by itself establish teaching quality. Ask each provider for the actual arrangement, written commercial terms, and substantiation for credentials that matter to the family. Evaluate reviews cautiously and do not treat unsupported numbers or testimonials as decisive.',
        ],
      },
    ],
  },
  'los-angeles': {
    city: 'Los Angeles',
    country: 'United States',
    title: 'Online Quran Classes in Los Angeles: A Practical Family Guide',
    description:
      'Commercial guidance for Los Angeles families evaluating remote Quran lessons, Pacific Time scheduling, broad-metro routines, course placement, tutor matching, USD costs, safety, and progress.',
    reviewedDate: 'July 15, 2026',
    sections: [
      {
        id: 'los-angeles-online-scope',
        heading: 'What service is actually offered to learners in Los Angeles?',
        directAnswer:
          'NoorPath offers remote, one-to-one Quran instruction that learners access online. It does not claim a Los Angeles teaching branch, local classroom, neighborhood office, or tutor home visits. A city-specific guide helps households plan the remote service in local time; it does not establish local staff, customers, facilities, or in-person availability.',
        paragraphs: [
          'Families should begin with delivery method because it affects nearly every later decision. The tutor and learner meet through an online platform, so there is no separate journey to a NoorPath venue. That can be useful when a household wants to avoid adding another cross-metro trip, but it also means the learner studies through a screen and the family manages the immediate learning environment. A local mosque class, traveling tutor, and online provider should not be treated as interchangeable products.',
          'The Los Angeles label describes the learner’s planning context, not the organization’s physical footprint. It should never be read as evidence of a branch, locally resident tutor, local registration, neighborhood service area, or history with nearby families. If tutor location matters, ask what information can be provided about the specific proposed match. If face-to-face learning is essential, research local options independently rather than expecting an online tutor to convert to home visits.',
        ],
      },
      {
        id: 'los-angeles-pt-daylight-saving',
        heading: 'How should Los Angeles families handle Pacific Time and daylight saving?',
        directAnswer:
          'Ask for the lesson day and hour in Los Angeles local time, identified as Pacific Time, and verify the first appointment after seasonal clock changes. The city moves between Pacific Standard Time and Pacific Daylight Time. A recurring calendar should be checked whenever the tutor, platform, or traveling learner may follow a different time zone.',
        paragraphs: [
          'Use PT for general planning, then rely on a dated calendar invitation that includes a time-zone setting. PST and PDT are not interchangeable year-round. When clocks change, confirm whether the family’s local lesson hour remains fixed or shifts because another location anchors the schedule. Devices often update automatically, but an automatic conversion is not a substitute for agreement between the family and provider. Ask the question before the transition if the displayed time appears different.',
          'Los Angeles also requires practical time buffers. A parent may be moving between work, school pickup, appointments, and activities across a broad metro area. An opening that begins at the expected arrival time leaves no room for variable travel or a delayed handoff. Choose a slot that allows the learner to settle, eat if necessary, gather materials, and test audio. Online delivery removes a dedicated trip to the tutor, but it does not make the rest of the household’s travel disappear.',
          'Travel can reverse the scheduling question. If the learner temporarily joins from another US time zone or another country, decide whether the appointment stays anchored to Los Angeles PT or follows the temporary local clock. Verify the converted time for the actual date because daylight-saving rules and transition dates can differ. Schedule changes remain subject to current policy and availability, and no particular alternative slot is implied.',
        ],
        table: {
          headers: ['Time check', 'Action for the family'],
          rows: [
            ['Pacific Time', 'Confirm the recurring hour in Los Angeles local time'],
            ['PST/PDT change', 'Recheck the first dated appointment after the clock transition'],
            ['Metro travel', 'Leave a buffer beyond the expected return-home time'],
            ['Temporary travel', 'Confirm whether PT or the destination clock controls attendance'],
          ],
        },
      },
      {
        id: 'los-angeles-school-activity-routines',
        heading: 'How can online lessons fit school, activities, work, weather, and travel?',
        paragraphs: [
          'Plan from the individual learner’s week rather than making assumptions about Los Angeles schools. Calendars, dismissal times, homework expectations, and transportation differ by school and household. Add sports, tutoring, clubs, family commitments, meals, prayer, and bedtime to the same view. Longer daylight in parts of the year may encourage later outdoor activities, while shorter winter days can change the rhythm; the clock and the learner’s energy still matter more than daylight alone.',
          'The broad metropolitan setting can make transitions unpredictable even when no separate Quran-class trip is required. A parent might be returning from work while another adult manages the lesson, or a child might move directly from an activity to home. Identify who will supervise, which device will be used, and how much recovery time the learner needs. Avoid a schedule that works only if every journey takes the minimum expected time.',
          'Weather planning in Los Angeles is different from winter-disruption planning in colder cities, but it should still be practical and non-presumptive. Heat, heavy rain, poor air conditions, power interruptions, or other events may occasionally alter school, outdoor, travel, or connectivity plans. Families should follow relevant official guidance and their own circumstances. Review the provider’s attendance and rescheduling rules in advance rather than assuming a local event automatically changes an online appointment.',
        ],
      },
      {
        id: 'los-angeles-course-selection',
        heading: 'How should a Los Angeles learner be routed to the right Quran course?',
        paragraphs: [
          'The learner’s city does not determine course level. Placement should start with a concrete sample of current ability and a clear learning purpose. A new reader may need letter recognition, sounds, vowel marks, joining, and gradual decoding. A developing reader may recognize text but hesitate, guess, or repeat pronunciation errors. A learner requesting Tajweed support may know rule names without applying them consistently. Describe what happens with unfamiliar text, not only rehearsed passages.',
          'For memorization, explain both acquisition and retention. List the material currently under review, how often older portions are revisited, where recall breaks down, and how much independent practice is realistic. A plan focused only on adding new lines can be unsuitable when previous learning is unstable. For Islamic studies, request details about the available subject matter, materials, teaching language, and intended age or level before treating it as a fit.',
          'Families can state priorities such as tutor gender, instructional language, child-teaching approach, or familiarity with a particular type of material. Those are requests to consider during matching, not promises of a specific person or schedule. Confirm what has actually been arranged. Long-term aims should guide direction, but no responsible placement should claim a fixed completion date or guaranteed result.',
        ],
        bullets: [
          'State what the learner can read or recite independently.',
          'Distinguish reading from memorized recall.',
          'Describe recurring pronunciation, fluency, or retention difficulties.',
          'Confirm materials, language, starting point, and the next review criterion.',
        ],
      },
      {
        id: 'los-angeles-tutor-evidence',
        heading: 'What evidence should families use when evaluating a tutor match?',
        paragraphs: [
          'Ask for specific, supportable information about the proposed tutor when it affects the purchase decision. If the family values a qualification, teaching background, language ability, or experience with a particular age, ask what can be documented or clearly explained. This guide does not represent that any tutor has a named credential, local residence, or specialized experience. Marketing adjectives should not replace evidence.',
          'Teaching can be examined during real interaction. A useful tutor listens to the learner’s attempt, identifies the relevant issue, demonstrates a correction, gives the learner space to repeat it, and checks understanding. Notice whether explanations suit the learner, lesson time is purposeful, and feedback remains respectful. For younger students, clear transitions and manageable instructions may matter; for adults, technical precision and alignment with the stated objective may carry more weight.',
          'Matching depends on actual availability and the priorities provided. Rank requirements when several are important, then ask NoorPath what can be accommodated. Confirm the procedure for reviewing a mismatch or requesting a change, including any applicable commercial terms. A different tutor may have different hours or characteristics, so a change should not be treated as guaranteed or identical. Do not rely on invented local reviews or assumed Los Angeles customer experience.',
        ],
      },
      {
        id: 'los-angeles-trial-usd-cost',
        heading: 'How should families use a trial and evaluate the price in USD?',
        directAnswer:
          'Treat the trial as evidence about assessment, communication, technology, and tutor-learner fit, not as proof of future attainment. Confirm the current USD charge and exactly what it buys: lesson length, lesson count, frequency, billing schedule, and included support. Read current cancellation, absence, rescheduling, refund, pause, and tutor-change terms before purchasing.',
        paragraphs: [
          'Send an accurate learner summary before the trial so limited time is not spent correcting basic assumptions. Include prior study, independent reading ability, memorized material, goals, teaching-language preference, and realistic PT availability. Have the learner use the device and location expected for ordinary lessons. A technically perfect call from a different setup will not reveal whether the regular arrangement is workable.',
          'For price comparison, normalize competing offers. Record the USD total, number of live lessons, minutes per lesson, billing cadence, individual or group format, and any stated inclusions. A low monthly amount may represent fewer or shorter sessions; a high amount does not itself verify better instruction. Use current official pricing or a written quotation, because this guide intentionally gives no fixed figure and should not become stale when packages change.',
          'Confirm whether billing renews automatically, when a cancellation becomes effective, and how missed or rescheduled lessons are treated. The household’s bank or payment provider may impose its own conditions even for a USD transaction. Preserve the confirmation and receipt. The sound commercial choice combines demonstrated teaching fit, sustainable scheduling, clear terms, and affordable total cost rather than optimizing only one factor.',
        ],
        table: {
          headers: ['Decision area', 'What to verify'],
          rows: [
            ['Trial evidence', 'Placement rationale, teaching response, learner fit, and technical quality'],
            ['USD amount', 'Current charge, billing date, renewal status, and included services'],
            ['Lesson basis', 'Duration, count, frequency, and one-to-one or group format'],
            ['Terms', 'Absence, change, cancellation, rescheduling, pause, and refund rules'],
          ],
        },
      },
      {
        id: 'los-angeles-safeguarding-technology',
        heading: 'What safeguarding and technology checks belong in the home setup?',
        paragraphs: [
          'A parent or guardian remains responsible for the child’s immediate online environment. Know when the lesson occurs, the tutor identity communicated for that appointment, the approved joining method, and the official concern route. Younger children generally need an adult nearby to join, supervise appropriately, and solve technical problems. Older learners still benefit from clear boundaries; independence should be based on age and need rather than assumed because the lesson is educational.',
          'Keep lesson communication on designated channels. Tell children not to share passwords, addresses, school names, travel details, private images, or other unnecessary information. They should alert a trusted adult if contact moves unexpectedly to a personal account, secrecy is requested, or an unscheduled invitation arrives. Review any privacy or recording information supplied by the service. Families should not make or distribute their own recordings without confirming that doing so is permitted.',
          'Test the real setup before the first trial or lesson. Use a compatible device, stable connection, charged battery, working speaker, and microphone that captures recitation clearly. Check browser or app permissions and ensure the learner can see Arabic text at a comfortable size. Headphones may improve clarity but should be chosen with supervision and situational awareness in mind. Keep a charger and official support contact accessible.',
          'The physical study space matters too. Reduce competing audio, provide an upright seat and suitable lighting, and place the Quran, primer, notebook, and pencil within reach. If lessons alternate between homes, perform the checks at each location. Have a simple plan for a connection failure, but consult current policy before expecting extra time or a replacement. Online convenience is strongest when technical and safeguarding preparation is routine rather than improvised.',
        ],
        bullets: [
          'Verify the scheduled identity, official link, and concern-reporting route.',
          'Use child-appropriate visibility, supervision, and information-sharing boundaries.',
          'Test connection, microphone, speaker, permissions, screen size, and charging.',
          'Prepare materials and understand the current response to technical failure.',
        ],
      },
      {
        id: 'los-angeles-progress',
        heading: 'How can a learner’s progress be measured responsibly?',
        paragraphs: [
          'Choose evidence that matches the course. For reading, track accurate recognition, blending, reduced guessing, smoother decoding, and the ability to handle unfamiliar examples. For recitation or Tajweed, look for an error being corrected and then avoided or self-corrected in a new context. For memorization, test recall after time has passed and include older revision. For Islamic studies, use age-appropriate explanation and application rather than passive attendance as the only measure.',
          'Ask for a clear baseline and periodic review. The family should be able to explain where teaching began, what has been covered, what the learner can now do without help, and which next skill is being developed. Short notes, assigned practice, or agreed checkpoints can support that conversation. Avoid demanding constant advancement through pages when consolidation is needed; speed through material can conceal weak retention or inaccurate reading.',
          'When progress is not visible, examine the system. Attendance, lateness, practice, fatigue after school or activities, lesson timing, audio quality, inaccurate starting placement, pace, and tutor fit can all affect learning. Share a specific example and ask what adjustment is recommended. Set a later review point for that adjustment. This creates accountability without claiming that one change will produce a guaranteed outcome.',
        ],
      },
      {
        id: 'los-angeles-metro-accessibility-backup',
        heading: 'What metro schedule backup and accessible home setup should families plan?',
        paragraphs: [
          'A Los Angeles household should build a backup around its own travel pattern rather than assume a typical commute. Identify the adult responsible for the lesson if pickup, work, or an activity runs late; decide how that person receives the link; and leave enough PT buffer for the learner to settle. If attendance becomes uncertain, use the official contact route and applicable notice policy. Remote delivery removes the trip to NoorPath, but it cannot guarantee that every cross-metro transition will finish as planned.',
          'For accessibility, evaluate how the learner actually sees, hears, moves, communicates, and maintains attention. Useful questions may involve text enlargement, screen contrast, speaker volume, hearing equipment compatibility, supportive seating, input controls, breaks, reduced visual clutter, or a caregiver’s role. Share relevant requirements before enrollment and ask which adjustments are feasible with the proposed platform and lesson arrangement. A request should not be treated as confirmed until the provider responds specifically.',
          'Test the ordinary and backup locations with the learner present. A technically capable device may still be uncomfortable, too quiet, or difficult to control. Keep materials within reach and confirm that supervision remains appropriate if the lesson moves to another room or household. Document the plan for a power or connection problem, while checking current policy rather than presuming missed time will be replaced.',
        ],
      },
      {
        id: 'los-angeles-parent-trial-checklist',
        heading: 'What should parents record when reviewing the trial and decision?',
        paragraphs: [
          'A useful Los Angeles trial record separates observations from sales language. Note the task attempted, the learner’s starting behavior, the correction or explanation given, the learner’s response, and the recommended next step. Add PT scheduling, audio quality, comfort with the home setup, and whether the pace suited the learner after school or activities. Do not assign a score that the session was not designed to produce or infer a long-term outcome from a short interaction.',
          'The parent decision checklist should identify the confirmed course, tutor match, lesson duration, proposed frequency, USD total, billing cadence, materials, communication route, safeguarding plan, and accessibility response. Test the schedule against an ordinary metro travel day, not only the trial appointment. Rank any unresolved issue by importance. A teaching match can appear promising while the commercial arrangement remains unsuitable, and convenient terms cannot make an unclear placement educationally sound.',
          'Before proceeding, ask who handles schedule questions, fit concerns, technical failures, and account changes. Confirm what evidence or notice the relevant policy requires. Keep the written offer and trial notes together so later review uses the arrangement actually accepted. Enrollment should follow a considered comparison; a trial invitation or positive first impression does not create an obligation to purchase.',
        ],
      },
      {
        id: 'los-angeles-policy-enrollment-review',
        heading: 'Which policy questions and enrollment choices require confirmation?',
        paragraphs: [
          'Ask how recurring billing begins and ends, how notice periods are calculated, and what rules apply to learner absences, provider changes, rescheduling, pauses, cancellations, refunds, and tutor-change requests. Families who travel should ask whether a temporary location or PT conversion changes any attendance procedure. Save current answers in writing. This guide cannot confirm a policy detail because terms may change and the facts of a request may matter.',
          'Select an enrollment level by comparing realistic practice time, school and activity load, adult availability, metro transitions, and budget. A larger commitment is not automatically better value if the learner cannot attend consistently. Confirm which frequencies or packages are currently offered instead of assuming a specific choice is available. If uncertainty remains, a smaller initial commitment may be worth considering only when the current offer and terms support it.',
          'Plan a later evidence review before enthusiasm or frustration controls the decision. Compare the initial baseline with independent reading, retained revision, repeated error patterns, tutor feedback, completed practice, and the learner’s engagement. Review technical interruptions and scheduling strain alongside instruction. The next commercial choice may be continuation, a requested adjustment, a confirmed frequency change, or cancellation under the terms; none should be presented as producing a guaranteed learning result.',
        ],
      },
      {
        id: 'los-angeles-online-local-options',
        heading: 'How do online lessons compare with local and self-directed options?',
        paragraphs: [
          'Start by naming the formats accurately. NoorPath is remote and one-to-one. A local mosque or center may offer face-to-face group learning and community participation. An independent home-visit tutor may provide in-person individual attention while requiring household access and travel coordination. A recorded course or app can support flexible practice but may not hear and correct recitation live. Each option offers a different combination of attention, convenience, social context, and oversight.',
          'For a broad Los Angeles metro routine, include the full practical burden in a comparison. Local tuition may involve travel time, pickup coordination, transportation cost, and resilience when another activity runs late. Online tuition removes the journey to that lesson but requires a screen, adequate internet, a suitable home setting, and adult support for children. Self-directed tools require motivation and a way to validate errors. Do not presume which burden is smaller for another household.',
          'Use one checklist across providers: course starting point, tutor evidence, instructional format, schedule in PT, trial purpose, safeguarding process, communication, lesson duration, USD total, and written change terms. For local services, verify the actual address and in-person arrangement. For online services, verify that city wording does not imply a physical branch or home visits. Proximity and broad reach are both operational facts, not proof of teaching quality.',
        ],
      },
    ],
  },
};
