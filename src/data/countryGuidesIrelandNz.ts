import type { CountryGuideContent } from "@/data/countryGuideTypes";

/**
 * Phase B — Helpful Content: country guides for Ireland and New Zealand
 * (EXTRA FAQs already exist; these guides deepen uniqueness on existing hubs).
 * Online-only — no campus claims; no invented statistics.
 */
export const countryGuidesIrelandNz: Record<string, CountryGuideContent> = {
  "online-quran-classes-ireland": {
    country: "Ireland",
    title: "Online Quran Classes in Ireland: Dublin & Family Guide",
    description:
      "Practical guidance for Irish Muslim families choosing live online Quran and Noorani Qaida lessons — GMT/IST schedules, Dublin context, female tutor requests, and a free trial path.",
    reviewedDate: "11 August 2026",
    sections: [
      {
        id: "ireland-fit",
        heading: "Are online Quran classes suitable for Muslim families in Ireland?",
        directAnswer:
          "Yes for households that want live remote Quran tuition from home and a recurring slot on the Irish clock. NoorPath is an online academy — not an Irish mosque branch, a Dublin campus, or anywhere a child can be dropped off.",
        paragraphs: [
          "Ireland’s Muslim community is centred on Dublin, with families also in Cork, Limerick and Galway — and, increasingly, across the commuter belt in Meath, Kildare, Louth and Wicklow, where a household can be forty minutes from the city and much further from any regular children’s class. Parents in the midlands and the west often have no local option at all, which is what sends them searching for a Quran teacher near them in the first place.",
          "There is a second, quieter reason online tuition gets used here. Most primary schools in Ireland operate under religious patronage, and for the great majority of Muslim children Islamic instruction is simply not part of the school day. Dublin has some Muslim-ethos schooling; almost everywhere else, whatever the child learns of Quran happens outside school hours and is organised by the family.",
          "Treat this country page as an invitation to enquire. Verify the proposed tutor, schedule and course during a free 30-minute trial before any ongoing payment — no credit card is required to book it.",
        ],
        bullets: [
          "Remote-only service — no claim of a NoorPath campus or meeting place in Ireland.",
          "Female tutor preferences can be requested and are confirmed after matching.",
          "Children should be placed by level, not only by age.",
          "A free trial is the correct place to test audio, rapport and placement.",
        ],
      },
      {
        id: "ireland-schedule",
        heading: "When can families in Ireland take online Quran classes?",
        directAnswer:
          "Ireland runs on GMT (UTC+0) through the winter and Irish Standard Time (UTC+1) from the last Sunday in March to the last Sunday in October. Ask for the slot to be recorded in Irish local time so the hour on your clock stays fixed across both changes.",
        paragraphs: [
          "One small thing prevents a surprisingly large number of scheduling mix-ups: when you write to a tutor abroad, give the offset rather than the abbreviation. IST in Ireland means Irish Standard Time, UTC+1. IST to a tutor in South Asia means India Standard Time, UTC+5:30. Four and a half hours is the difference between an after-school lesson and a lesson nobody attends. Writing “4 pm Irish time (UTC+1)” removes the ambiguity entirely.",
          "Ireland is also an hour behind most of continental Europe, which quietly widens the useful part of the day. An Irish 5 pm is 6 pm in Amsterdam, 7 pm in Istanbul, 8 pm in the Gulf — comfortably inside the working evening for tutors in a lot of time zones. Late afternoon and early evening on the Irish clock is genuinely one of the easier windows to fill, which is not true everywhere.",
          "Share school finish times and extracurricular conflicts when you book. Younger children often focus better in the late afternoon; older pupils may need a later slot after homework. Whichever you pick, confirm in writing what happens on the last Sunday in March and the last Sunday in October so the appointment does not quietly move.",
        ],
        table: {
          headers: ["Planning factor", "What to confirm"],
          rows: [
            ["Time zone wording", "Have you written the offset (UTC+0 or UTC+1), not just “IST”?"],
            ["Clock changes", "Will the Irish local hour stay fixed across the March and October changes?"],
            ["After-school window", "Is a weekday late-afternoon or early-evening slot realistic all year?"],
            ["Travel buffer", "Does the school run or Dublin traffic rule out an earlier start?"],
            ["Device and space", "Is a quiet, well-lit family room free at the agreed hour?"],
          ],
        },
      },
      {
        id: "ireland-school-year",
        heading: "How does the Irish school year shape a realistic lesson slot?",
        directAnswer:
          "Work around a September-to-June year with mid-terms in late October and February, state exams in June, and the pressure years of Third Year and Sixth Year. Transition Year is the single best window in an Irish school career to start something demanding.",
        paragraphs: [
          "Finish times differ more than parents expect, and they decide what is possible. Infant classes in primary school finish roughly an hour before the rest of the school, which puts a genuine early-afternoon slot within reach for a five- or six-year-old — often when they are at their freshest. The older primary classes finish in the mid-afternoon, and secondary students later again, sometimes close to four o’clock before any travel. A single family with children at both ends of that range cannot run one shared lesson time, and staggering two short slots usually works better than trying.",
          "The exam years need naming honestly. Third Year students are working towards the Junior Cycle, Sixth Year students towards the Leaving Certificate, both examined in June, both preceded by mocks in February. Points pressure in Sixth Year is real and it is not sensible to load an ambitious Hifz schedule on top of it. Scale back to one short weekly session through the spring rather than dropping out entirely, and rebuild afterwards.",
          "Transition Year is the opposite case and it is worth planning for deliberately. With no state exam at the end and a lighter academic load, TY is the one year in an Irish secondary education where a student can genuinely take on more Quran — a serious run at Tajweed, or the beginning of memorisation — without competing against a June exam. Families who think a year ahead often use it well.",
        ],
        table: {
          headers: ["Point in the Irish year", "Realistic lesson plan"],
          rows: [
            ["September to late October", "Establish the weekly slot early, while the term is still calm."],
            ["Mid-terms, Christmas and Easter", "Decide in advance whether to pause or keep a shorter session running."],
            ["February mocks and June state exams", "Reduce frequency for Third and Sixth Year students; keep recitation ticking over."],
            ["Transition Year", "The best year to add hours or begin Hifz, with no state exam competing for time."],
          ],
        },
      },
      {
        id: "ireland-courses",
        heading: "Which courses fit learners in Ireland?",
        directAnswer:
          "Beginners usually start with Noorani Qaida. Children who already read may continue Quran reading, Tajweed, or Hifz. Course choice should follow assessment, not a label alone.",
        paragraphs: [
          "Between live lessons, families may use the Interactive Noorani Qaida hub for free recognition practice — soft support only; live teachers remain the correction path for uncertain sounds.",
          "Adults and teens often prefer discreet one-to-one lessons that do not require joining a large weekend group.",
        ],
        bullets: [
          "Start with foundations if letter recognition is still weak.",
          "Request Tajweed when continuous reading exists.",
          "Treat Hifz as new memorisation plus revision.",
          "Review published USD pricing before budgeting in euros.",
        ],
      },
      {
        id: "ireland-near-me",
        heading: "What does “Quran classes near me” mean if the academy is online?",
        directAnswer:
          "It means the class comes to your sitting room over a video call. NoorPath has no premises in Ireland and nobody who travels to homes. If you want a teacher in the room, a local mosque or community class is the honest answer.",
        paragraphs: [
          "A search for a Quran teacher or Noorani Qaida class near you in Ireland mixes two very different things in one list: places you could drive to, and academies that will teach your child remotely. It is worth knowing which one you are reading. This is the remote kind.",
          "For a family in a town with no weekend class, the comparison worth making is not online lessons against a good local madrasah — it is online lessons against nothing, or against a parent doing their best with a Qaida book and an uncertain memory of their own childhood lessons. A weekly one-to-one call with someone who can hear that a letter is coming from the wrong place, and correct it before it sets, is a different thing from an app that marks an answer right.",
          "Where there is a good local class within reach, use it. Many Irish families sensibly do both: the mosque or community class for the social side of growing up Muslim in Ireland, an online slot midweek for the individual correction a group of thirty cannot provide.",
        ],
      },
      {
        id: "ireland-female-tutors",
        heading: "Can I request a female Quran teacher in Ireland?",
        directAnswer:
          "Yes. State the preference when you book. Female tutor availability is confirmed at matching rather than promised in advance, so it is better raised in your first message than after a time has been agreed.",
        paragraphs: [
          "This comes up constantly in Ireland, and for straightforward reasons: it is often the deciding factor for a daughter, and for adult women who never learned to read Arabic as children and would rather not begin in front of a mixed group. It is a normal request to make and nobody should feel awkward making it.",
          "Because it narrows the pool, pair it with a little flexibility on the hour if you can. A family that offers a late-afternoon weekday option and a weekend morning alternative is usually placed faster than one that will accept only a single slot with a single preference attached.",
        ],
      },
      {
        id: "ireland-cities",
        heading: "Dublin, the commuter belt, and the rest of the country",
        directAnswer:
          "Yes — the same trial and matching process applies everywhere, but the reason for choosing online differs. In Dublin it is usually traffic and scheduling; in the smaller towns it is often that there is nothing within reach.",
        paragraphs: [
          "Dublin families tend to have local options and are weighing an evening cross-city drive against staying home. Cork, Limerick and Galway sit somewhere behind that. Out in the commuter towns and the smaller counties, the honest position is that a household may be one of very few Muslim families locally and the nearest regular children’s class may be in another county.",
          "Share your town and your preferred Irish-clock windows when you book. City pages such as Dublin go into local scheduling in more detail; this country guide stays the Ireland-wide view.",
        ],
      },
      {
        id: "ireland-safety",
        heading: "How do online Quran classes stay safe for families in Ireland?",
        directAnswer:
          "Use known meeting platforms, allow parental observation, confirm the tutor before ongoing payment, and keep young learners in a shared space.",
        paragraphs: [
          "Online delivery does not remove parental responsibility. Prefer academies that explain safeguarding and confirm credentials for the proposed match. Review NoorPath’s safeguarding guidance before enrolment.",
          "Ask specifically who will be teaching after the trial, and whether that person stays. A trial with one tutor followed by a term with someone else is a common frustration and an easy question to ask up front.",
        ],
      },
      {
        id: "ireland-start",
        heading: "How should a family in Ireland start this week?",
        directAnswer:
          "Note your town, two workable windows written with the UTC offset, the learner’s honest reading level, and any female-tutor preference. Then request the free 30-minute trial with no credit card.",
        paragraphs: [
          "Naming Dublin, Cork, Galway or your own town is more useful than it sounds, because school finish times and travel differ. Add the female-tutor preference in the same message if it matters to you rather than raising it later.",
          "After matching, protect a short daily echo at home — five minutes of repeating what the tutor corrected. Weekly lessons compound only when something happens on the other six days.",
        ],
      },
    ],
  },

  "online-quran-classes-new-zealand": {
    country: "New Zealand",
    title: "Online Quran Classes for Kids in New Zealand: Family Guide",
    description:
      "Practical guidance for New Zealand families choosing live online Quran and Noorani Qaida lessons — NZST/NZDT schedules, Auckland and smaller-town context, and a free trial path.",
    reviewedDate: "13 August 2026",
    sections: [
      {
        id: "nz-fit",
        heading: "Are online Quran classes suitable for kids in New Zealand?",
        directAnswer:
          "Yes for a household that can hold one fixed weekly slot on the New Zealand clock and sit a child in front of a screen with an adult nearby. NoorPath teaches remotely only — there is no New Zealand campus, branch or drop-in centre, and no lesson is ever held in person.",
        paragraphs: [
          "New Zealand’s Muslim families are spread thinly down a long, narrow country. Auckland has the widest choice of weekend and evening classes; Wellington, Christchurch and Hamilton have community options; and a household in Palmerston North, Napier, Nelson, Dunedin or Invercargill may find the nearest regular children’s Quran class is a drive rather than a suburb away. That distance is usually the real reason a parent searches for Quran classes near me and ends up reading about an online academy.",
          "Online tuition is not a cure for everything, and it is worth saying so before you book. It works when a child can concentrate for half an hour, when the family has a slot that survives contact with a normal week, and when a tutor is genuinely free at that hour. It works badly as a last resort for a child who will not engage at all. A free 30-minute trial is the honest way to find out which of those you have — no credit card is required to book it.",
        ],
        bullets: [
          "Remote teaching only — NoorPath has no premises anywhere in New Zealand.",
          "Your town does not change the published plan, but it does change which slot you should ask for.",
          "Placement follows the child’s reading level, not their school year.",
          "Female tutor preferences can be stated when booking and are confirmed at matching.",
        ],
      },
      {
        id: "nz-schedule",
        heading: "How do NZST and NZDT affect a weekly Quran lesson?",
        directAnswer:
          "New Zealand runs on NZST (UTC+12) in winter and NZDT (UTC+13) in summer. Ask for the recurring slot to be recorded in New Zealand local time, so the hour on your own clock stays the same all year and the tutor’s side absorbs the shift.",
        paragraphs: [
          "New Zealand changes its clocks in the opposite direction to the Northern Hemisphere and on different dates: forward to NZDT on the last Sunday in September, back to NZST on the first Sunday in April. Most tutors sit on a clock that moves in late March and late October instead. The consequence is that the gap between the two ends of your lesson is not a fixed number — across a year the difference between New Zealand and central Europe moves between roughly ten and twelve hours, and it changes four separate times.",
          "That is a practical problem, not a trivia point. In the days around the first Sunday in April and the last Sunday in September, a slot that suited everyone can land an hour earlier or later at the tutor’s end — and your own time will move instead if the slot was ever written down in the tutor’s zone. Settle it before the first paid month: agree the time in NZST/NZDT terms, in writing, and ask what will happen on each of those two dates.",
          "There is an upside to sitting twelve hours ahead. Early morning in New Zealand, from about 6 to 8 am before school, is the previous evening for tutors in Europe and the Middle East, which is often when they have the most room. The mirror of that is the after-school window most parents ask for first: a 4 pm to 6 pm New Zealand slot falls around dawn for those same tutors, which is why an evening request can take longer to fill than a morning one. Ask what is actually available before you rebuild the family week around a time.",
        ],
        table: {
          headers: ["Planning factor", "What to confirm"],
          rows: [
            ["Clock reference", "Is the recurring slot recorded in NZST/NZDT, or in the tutor’s time zone?"],
            ["Last Sunday in September", "What happens to the lesson hour when New Zealand moves to NZDT?"],
            ["First Sunday in April", "What happens when New Zealand goes back to NZST?"],
            ["Northern-hemisphere changes", "Will the tutor’s own March and October changes move your slot?"],
            ["Before school", "Is a 6–8 am NZ slot easier to match than a 4–6 pm one?"],
          ],
        },
      },
      {
        id: "nz-school-year",
        heading: "How do lessons fit the four-term New Zealand school year?",
        directAnswer:
          "Plan around four terms with roughly two-week breaks, a long December–January summer holiday, and — for Years 11 to 13 — NCEA assessment that accumulates through the year and peaks with external exams in November.",
        paragraphs: [
          "New Zealand schools run four terms and break for summer from mid-December until late January or early February. That is the reverse of the calendar most online academies are quietly built around: your family’s longest holiday falls in the Northern Hemisphere winter, when the teaching side of an online academy is working a normal week. In practice this makes December and January one of the easier stretches of the year to add lesson time rather than a period when everything stops.",
          "Term 4 is the hard one. A student in Year 11, 12 or 13 is working towards NCEA Level 1, 2 or 3, and the external exams sit in November after weeks of internal assessment deadlines and practice exams. Ask for a lighter schedule through that stretch instead of stopping altogether: one shorter session a week keeps recitation from going cold, whereas four sessions a week through exam season is a promise most teenagers cannot keep. Internal assessments land all year, so a fixed weekly slot with an agreed way to reschedule is worth more than an ambitious timetable that collapses in March.",
          "For primary and intermediate children the school day usually ends around 3 pm, and the useful question is what the child has left afterwards. Many families find the half hour after a snack works better than a slot pushed late into the evening. A 30-minute lesson that actually happens beats an hour that keeps getting cancelled.",
        ],
        table: {
          headers: ["Point in the NZ year", "Realistic lesson plan"],
          rows: [
            ["Terms 1 to 3", "Hold one fixed weekly slot and agree in advance how to move it around internal assessments."],
            ["End of Term 3", "Clocks shift to NZDT around here — re-confirm the lesson hour before Term 4 begins."],
            ["Term 4 and NCEA exams", "Reduce frequency rather than pausing, and protect short daily revision at home."],
            ["Mid-December to late January", "Tutor-side hours are normal through this break; a good window to add lesson time."],
          ],
        },
      },
      {
        id: "nz-courses",
        heading: "Which courses fit learners in New Zealand?",
        directAnswer:
          "Beginners usually start with Noorani Qaida. Children who already read may continue Quran reading, Tajweed, or Hifz after assessment.",
        paragraphs: [
          "When a nearby mosque or weekend madrasah is not available, live online 1-to-1 tutoring still provides regular listening and correction. Between live lessons, families may use the Interactive Noorani Qaida hub for free recognition practice.",
          "Be realistic about Hifz in particular. Memorisation is new lines plus daily revision of everything already held, and that daily revision does not pause for a school assessment week. NoorPath does not publish a guaranteed completion timeline, and you should be wary of anyone in any country who does.",
        ],
        bullets: [
          "Start with foundations if letter recognition is still weak.",
          "Request Tajweed when continuous reading exists.",
          "Treat Hifz as new memorisation plus revision.",
          "Review published USD pricing before budgeting in NZD.",
        ],
        relatedLinks: [
          { href: "/noorani-qaida", label: "Noorani Qaida hub" },
          { href: "/learn-tajweed-online", label: "Learn Tajweed online" },
          { href: "/hifz-quran-online", label: "Hifz Quran online" },
        ],
      },
      {
        id: "nz-near-me",
        heading: "What does “Quran classes near me” actually mean here?",
        directAnswer:
          "It means the lesson arrives at your house over a video call. NoorPath has no premises in New Zealand, nobody who will travel to you, and no in-person option. If in-person is what you need, a local mosque or community class is the right answer and this page is not.",
        paragraphs: [
          "The phrase deserves a blunt answer, because a search for a Quran teacher near you in New Zealand returns online academies sitting alongside genuinely local ones, and they are not the same product. NoorPath is the online one. There is nowhere to drop a child off and nobody visits your home.",
          "What remote teaching does give a family with no nearby teacher is the thing that is genuinely scarce: a trained adult listening to a child recite aloud every week and correcting the sound while the habit is still forming. An app cannot do that, a recording cannot do that, and neither can a parent who is not confident in their own recitation. If the nearest weekend class is an hour’s drive each way and runs once a week in a large group, a one-to-one call from the kitchen table is not a poor substitute — for many households it is more attention from a teacher, not less.",
          "Be equally clear about what online costs you. A child learning this way does not get the friendships, the local teacher who knows the family, or a room full of other Muslim children. Some New Zealand families run both: a local class for community, online lessons for individual correction. Where a good local option exists, that is usually the better first call.",
        ],
      },
      {
        id: "nz-female-tutors",
        heading: "Can we request a female Quran teacher in New Zealand?",
        directAnswer:
          "Yes — say so when you book. A female tutor is confirmed at matching rather than promised in advance, and the preference interacts with the New Zealand time difference, so raise it in your first message rather than after you have chosen an hour.",
        paragraphs: [
          "This is one of the most common things New Zealand parents ask for, particularly for daughters and for adult women learning to read. It is a reasonable request and it does not need to be explained or justified to anyone.",
          "The practical wrinkle is that the preference narrows the pool at the same moment the time zone does. Asking for a female tutor and a 4.30 pm New Zealand slot is asking for the overlap of two constraints at once. Families who can offer any flexibility on the hour — a pre-school morning, or a weekend — are usually placed more quickly, so it helps to name a second option up front.",
          "Adult women starting from the beginning often prefer one-to-one lessons for the same reason: there is no group to read in front of, and the pace belongs to the learner rather than the class.",
        ],
      },
      {
        id: "nz-geography",
        heading: "Auckland, the main centres, and everywhere else",
        directAnswer:
          "The same online service, used for two quite different reasons. In Auckland the driver is usually the schedule; outside the main centres it is that there may be nothing nearby at all.",
        paragraphs: [
          "Auckland families generally do have local options and are choosing online tuition for other reasons: cross-city traffic at four in the afternoon, a child who disappears inside a large weekend group, a specific tutor preference, or a sibling schedule that will not stretch to another trip out. Wellington, Christchurch and Hamilton tend to sit somewhere in the middle of that.",
          "Further out — the Bay of Plenty, Hawke’s Bay, Taranaki, Manawatū, Nelson, the West Coast, Otago and Southland — the arithmetic is different. A family may be the only Muslim household on the street, and the nearest regular children’s class may be in another city entirely. Nobody should pretend an online lesson replaces a community. It does mean a child in Invercargill can be taught by the same tutor, on the same terms, as a child in Ponsonby.",
          "Whichever of those describes you, mention it when you book. Your connectivity at the agreed hour, the window you can realistically defend each week, and whether a parent will be in the room are all more useful to whoever matches you than the city name on its own.",
        ],
      },
      {
        id: "nz-safety",
        heading: "How do online Quran classes stay safe for NZ families?",
        directAnswer:
          "Use known meeting platforms, allow parental observation, confirm the tutor before ongoing payment, and keep young learners in a shared space.",
        paragraphs: [
          "Prefer academies that explain safeguarding and confirm credentials for the proposed match. Review NoorPath’s safeguarding guidance before enrolment.",
          "Distance makes verification more important, not less. Ask who specifically will teach after the trial, whether that person changes, and how a schedule or billing change is communicated. A provider that answers those plainly is easier to trust than one that answers warmly.",
        ],
      },
      {
        id: "nz-start",
        heading: "How should a New Zealand family start this week?",
        directAnswer:
          "Write down your town, two workable NZST/NZDT windows, an honest description of the child’s reading level, and any female-tutor preference. Then request the free 30-minute trial — no credit card is required.",
        paragraphs: [
          "Offering two windows rather than one makes matching considerably faster across a twelve-hour gap. Give a real account of reading level too: knows a few letters, sounds out slowly with mistakes, and reads fluently but without Tajweed are three different starting points, and a trial spent discovering which one you have is half a trial wasted.",
          "Once matched, protect five or ten minutes on the days between lessons for the child to repeat what was corrected. That short daily echo is what turns a weekly call into progress. Without it, every lesson starts by repairing the last one.",
        ],
        relatedLinks: [
          { href: "/free-quran-classes-online", label: "Free trial details" },
          { href: "/pricing", label: "Pricing (USD)" },
          { href: "/female-quran-teacher-online", label: "Female Quran teacher" },
          { href: "/noorani-qaida", label: "Noorani Qaida hub" },
          { href: "/hifz-quran-online", label: "Hifz Quran online" },
          { href: "/online-quran-classes/auckland", label: "Auckland city guide" },
          { href: "/online-quran-classes/wellington", label: "Wellington city guide" },
          { href: "/locations/online-quran-classes-australia", label: "Australia hub" },
          { href: "#trial", label: "Book your NZ trial" },
        ],
      },
      {
        id: "nz-30-days",
        heading: "What does “done well” look like after 30 days?",
        directAnswer:
          "A protected weekly NZST/NZDT slot, clearer placement, smoother lesson joins, and a short home practice habit — not a guaranteed memorisation milestone or NCEA-related outcome.",
        paragraphs: [
          "Judge the first month by attendance consistency, the learner’s willingness to open the mushaf or Qaida, and whether correction feels kind and specific. Outcomes vary by age, prior exposure and home practice.",
          "If the match or pace is wrong, say so early. A course path change after honest feedback is better than forcing an unsuitable label for months.",
        ],
        bullets: [
          "Recurring local-time slot kept more often than skipped",
          "Parent or adult can describe the current course goal in one sentence",
          "Home echo exists even if it is only a few minutes",
          "No invented promises of Hifz completion dates",
        ],
      },
    ],
  },
};
