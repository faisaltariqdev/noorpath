import type { CountryGuideContent } from "@/data/countryGuideTypes";

/**
 * Additive country guides for Norway, Finland and Denmark (Phase 1 minority markets).
 * Online-only academy — no physical campus claims; no invented census statistics.
 */
export const countryGuidesNordic: Record<string, CountryGuideContent> = {
  "online-quran-classes-norway": {
    country: "Norway",
    title: "Online Quran Classes in Norway: A Guide for Muslim Families",
    description:
      "Practical guidance for families in Norway choosing live online Quran and Noorani Qaida lessons — CET/CEST evenings, winter daylight, Oslo and Bergen context, female tutor requests, and a free trial path.",
    reviewedDate: "11 August 2026",
    sections: [
      {
        id: "norway-fit",
        heading: "Are online Quran classes suitable for Muslim families in Norway?",
        directAnswer:
          "Yes for households that want live remote Quran tuition from home and a recurring slot on the Norwegian clock. NoorPath is an online academy — not a Norwegian mosque branch, Oslo classroom, or home-visit service.",
        paragraphs: [
          "Muslim families in Norway are often centred on Oslo, with households also in Bergen, Trondheim, Stavanger and smaller towns where a weekend children’s class may be thin or a long drive away. When local provision is limited, parents search for Quran or Islamic classes near them and find a mix of physical programmes and remote academies — this page is the remote kind.",
          "Treat this country page as an invitation to enquire. Verify the proposed tutor, schedule and course during a free 30-minute trial before ongoing payment.",
        ],
        bullets: [
          "Remote-only service — no claim of a NoorPath campus in Norway.",
          "Language of instruction preferences are recorded where available.",
          "Children should be placed by level, not only by age.",
          "A free trial is the correct place to test audio, rapport and placement.",
        ],
      },
      {
        id: "norway-schedule",
        heading: "When can families in Norway take online Quran classes?",
        directAnswer:
          "Norway runs on CET (UTC+1) in winter and CEST (UTC+2) in summer. Ask for the lesson to be recorded in Norwegian local time so the hour on your clock stays fixed across both changes.",
        paragraphs: [
          "Winter daylight in Norway is short, especially north of Oslo. Prefer sustainable late-afternoon or early-evening slots while children still have focus — not the latest available hour simply because a tutor is free. Share school finish times and after-school activities when you book.",
          "Write the offset when messaging a tutor abroad (“5 pm Norwegian time, UTC+1”) rather than only “CET,” so there is no confusion with other abbreviations.",
        ],
        table: {
          headers: ["Planning factor", "What to confirm"],
          rows: [
            ["Local clock", "Is the recurring time fixed to Norwegian CET/CEST?"],
            ["Winter energy", "Will the child still focus in darker early evenings?"],
            ["Clock changes", "What happens on the March and October changes?"],
            ["Device and space", "Is a quiet, well-lit family room free at the agreed hour?"],
          ],
        },
      },
      {
        id: "norway-school-year",
        heading: "How does the Norwegian school year shape a realistic lesson slot?",
        directAnswer:
          "Work around a mid-August start, autumn and winter breaks, and exam pressure in upper secondary. Keep Quran as a short, protected weekly appointment rather than an overloaded add-on in exam seasons.",
        paragraphs: [
          "Younger pupils often finish school early enough for a late-afternoon online slot. Older students may need a later window after homework. If siblings share one device, stagger two short lessons instead of forcing one shared time.",
          "During darker months, protect sleep and outdoor daylight where you can; a tired child will not retain makharij corrections. Scale back frequency temporarily around exams rather than dropping out entirely.",
        ],
      },
      {
        id: "norway-near-me",
        heading: "What does “Quran classes near me” mean if the academy is online?",
        directAnswer:
          "It means the class comes to your sitting room over a video call. NoorPath has no premises in Norway and nobody who travels to homes. If you want a teacher in the room, a local mosque or community class is the honest answer.",
        paragraphs: [
          "For a family outside Oslo with no regular children’s class nearby, the comparison is often online lessons against nothing — or against a parent doing their best with an uncertain memory of their own childhood reading. Live one-to-one correction is different from an app that only marks answers.",
          "Where a good local class exists, many families use both: the community class for belonging, and a midweek online slot for individual pronunciation work a large group cannot give.",
        ],
      },
      {
        id: "norway-courses",
        heading: "Which courses fit learners in Norway?",
        directAnswer:
          "Beginners usually start with Noorani Qaida. Children who already read may continue Quran reading, Tajweed, or Hifz. Course choice should follow assessment, not a label alone.",
        paragraphs: [
          "Parents searching for online Tajweed classes in Norway should confirm the child can already recognise letters and short vowels. If not, Qaida first prevents building rules on unstable reading.",
          "Between live lessons, families may use the Interactive Noorani Qaida hub for free recognition practice — soft support only; live teachers remain the correction path for uncertain sounds.",
        ],
        bullets: [
          "Start with foundations if letter recognition is still weak.",
          "Request Tajweed when continuous reading exists.",
          "Treat Hifz as new memorisation plus revision.",
          "Review published pricing before budgeting in NOK (plans charged in USD).",
        ],
      },
      {
        id: "norway-female-tutors",
        heading: "Can I request a female Quran teacher in Norway?",
        directAnswer:
          "Yes. State the preference when you book. Female tutor availability is confirmed at matching rather than promised in advance.",
        paragraphs: [
          "This request is common for daughters and for adult women returning to Arabic reading. Pair it with a little flexibility on the hour if you can — a late-afternoon weekday option plus a weekend alternative is usually placed faster than a single rigid slot.",
        ],
      },
      {
        id: "norway-safety",
        heading: "How do online Quran classes stay safe for families in Norway?",
        directAnswer:
          "Use known meeting platforms, allow parental observation, confirm the tutor before ongoing payment, and keep young learners in a shared space.",
        paragraphs: [
          "Online delivery does not remove parental responsibility. Agree household rules for cameras and chat. Prefer academies that explain safeguarding and confirm credentials for the proposed match.",
        ],
        bullets: [
          "Observe early lessons for young children.",
          "Confirm continuing tutor details when that matters to you.",
          "Use published channels for billing and schedule changes.",
        ],
      },
      {
        id: "norway-start",
        heading: "How should a family in Norway start this week?",
        directAnswer:
          "Note your city and preferred Norwegian-clock window, then request a free trial with no credit card.",
        paragraphs: [
          "State Oslo, Bergen or another city clearly. Add female-tutor preference if needed. After matching, protect a short daily home echo so live lessons compound.",
        ],
      },
    ],
  },
  "online-quran-classes-finland": {
    country: "Finland",
    title: "Online Quran Classes in Finland: Kids & Family Guide",
    description:
      "Kids Quran classes in Finland online — EET/EEST scheduling, Helsinki, Espoo & Vantaa context, female tutors, Noorani Qaida foundations, safeguarding, and a free trial path.",
    reviewedDate: "17 September 2026",
    sections: [
      {
        id: "finland-fit",
        heading: "Are kids Quran classes available online in Finland?",
        directAnswer:
          "Yes. Families in Helsinki, Espoo, Vantaa, Tampere and other Finnish cities can request live one-to-one online Quran classes for children and adults. NoorPath teaches online only — not a Finnish campus.",
        paragraphs: [
          "Finland’s Muslim community is relatively small compared with larger European markets, so parents often search online when local children’s mosque programmes are limited or located far from home. A recurring EET/EEST lesson fits neatly after Finnish school hours without requiring long commutes in freezing weather.",
          "Suitability depends on the child’s attention span, language comfort, and confirmed tutor availability after a free trial — not on marketing promises of instant fluency.",
        ],
        bullets: [
          "Remote-only service with no Finnish physical branch claim.",
          "Kids placement by actual reading readiness, not age alone.",
          "Female Quran tutor preferences can be requested for daughters and sisters.",
          "Free 30-minute trial class before ongoing payment.",
        ],
      },
      {
        id: "finland-schedule",
        heading: "What times work for online Quran classes in Finland?",
        directAnswer:
          "Request after-school, late afternoon, or weekend morning windows in EET or EEST. Exact recurring times are confirmed after tutor matching.",
        paragraphs: [
          "Finnish comprehensive schools typically end between 13:00 and 15:30. Many families request classes between 16:00 and 20:00 EET on weekdays, or weekend mornings when after-school sports and football practices fill weekday evenings.",
          "During Finnish dark winters, having 1-on-1 classes right at home eliminates cold evening travel while giving children a consistent, warm Islamic routine.",
        ],
        table: {
          headers: ["Planning factor", "What to confirm"],
          rows: [
            ["Timezone", "EET / EEST Finnish clock — matched directly with your schedule"],
            ["School load", "Early finish days vs exam weeks"],
            ["Extracurriculars", "Sports/football training days vs free evenings"],
            ["Sibling devices", "Separate laptops/tablets or back-to-back lessons"],
            ["Parent presence", "Supervision and quiet space for younger learners"],
          ],
        },
      },
      {
        id: "finland-language",
        heading: "Language of instruction & bilingual learners in Finland",
        directAnswer:
          "Tutors teach in clear, fluent English, which works seamlessly for Finnish-born Muslim youth who attend Finnish or bilingual schools.",
        paragraphs: [
          "Children growing up in Finland usually learn Finnish or Swedish at school and English from an early age. Our tutors use friendly, accessible English to explain pronunciation rules (Tajweed), letter shapes, and the meanings of daily duas and short Surahs.",
          "Parents who prefer Arabic or Urdu explanations for specific cultural or linguistic comfort can also request that during trial registration.",
        ],
      },
      {
        id: "finland-female-tutors",
        heading: "Female Quran teachers for daughters and sisters in Finland",
        directAnswer:
          "Families can specifically request a qualified female Quran teacher for daughters, young children, or adult female learners in Finland.",
        paragraphs: [
          "Many Muslim mothers in Finland prefer female tutors for their daughters. NoorPath has dedicated female Islamic scholars and Tajweed certified teachers available across EET/EEST-friendly time slots.",
          "State your female tutor preference on the trial booking form; matching is confirmed before the trial takes place.",
        ],
      },
      {
        id: "finland-courses",
        heading: "Which courses fit children and adults in Finland?",
        directAnswer:
          "Most beginners start with Noorani Qaida. Readers progress to fluent Quran recitation with Tajweed, daily duas, Namaz, or structured Hifz after assessment.",
        paragraphs: [
          "Students use the free Interactive Noorani Qaida, Daily Duas, and Six Kalimas modules for recognition and audio practice between live lessons, while the tutor focuses on live Makharaj correction and personal feedback.",
          "Islamic studies for kids covers the pillars of Islam, stories of the Prophets, and character building alongside Quran reading.",
        ],
      },
      {
        id: "finland-safety",
        heading: "Safeguarding and parent oversight for Finnish households",
        directAnswer:
          "Keep devices in family living areas, observe early lessons, and confirm tutor details before enrolment.",
        paragraphs: [
          "We encourage parents to sit in on early sessions to observe the teacher's methodology and child rapport. Transparent communication and regular progress updates ensure parents always know what their child is learning.",
          "Avoid unregulated platforms that do not vet their tutors or demand large non-refundable upfront fees before hearing your child read.",
        ],
      },
      {
        id: "finland-start",
        heading: "How to start from Helsinki, Espoo or Vantaa this week",
        directAnswer:
          "Request a free 30-minute trial, state your Finnish city and EET/EEST time preferences, and test the 1-on-1 experience with zero commitment.",
        paragraphs: [
          "After the trial, choose a sustainable weekly plan (2, 3, 4, or 5 days per week). Consistent 30-minute lessons coupled with short daily practice build lifelong Quran reading skills.",
        ],
      },
    ],
  },
  "online-quran-classes-denmark": {
    country: "Denmark",
    title: "Online Quran Classes in Denmark: Weekday & Weekend Guide",
    description:
      "Online Quran classes in Denmark for Copenhagen, Aarhus & Odense families — CET schedules, weekend windows, female teachers, safeguarding, and a free trial path.",
    reviewedDate: "17 September 2026",
    sections: [
      {
        id: "denmark-fit",
        heading: "Are online Quran classes suitable for families in Denmark?",
        directAnswer:
          "Yes. Households in Copenhagen, Aarhus, Odense, Aalborg and across Denmark can request live one-to-one Quran tuition with CET/CEST matching. NoorPath is an online academy — not a Danish campus.",
        paragraphs: [
          "Muslim families in Denmark balance Danish schooling (folkeskole), sports clubs, and family life. Online 1-on-1 lessons remove the stress of commuting to distant weekend schools while providing individual attention that group madrasahs cannot match.",
          "Weekend Quran class windows matter when weekday evenings are full — request Saturday or Sunday CET/CEST slots and confirm availability after tutor matching.",
        ],
        bullets: [
          "Remote-only — no Copenhagen physical campus claim.",
          "Flexible weekday afternoon, evening and weekend CET/CEST preferences.",
          "Female Quran teacher requests are welcome for daughters and sisters.",
          "Free 30-minute trial class with no credit card required.",
        ],
      },
      {
        id: "denmark-weekend",
        heading: "Weekend Quran classes and weekday evening schedules in Denmark",
        directAnswer:
          "Weekend mornings (Saturday or Sunday CET/CEST) and weekday after-school slots can be selected to fit your household routine.",
        paragraphs: [
          "Danish school days often conclude between 14:00 and 15:30. Many families choose 2 or 3 weekday slots (e.g., Monday and Wednesday at 17:00 CET), while others whose children have weekday sports prefer weekend morning lessons.",
          "A consistent weekend lesson paired with 10 minutes of self-paced practice on the interactive web platform keeps learning enjoyable without overburdening the child.",
        ],
        table: {
          headers: ["Option", "When it helps Danish families"],
          rows: [
            ["Weekday after school (16:00–19:00 CET)", "Stable Monday–Thursday routine after folkeskole"],
            ["Saturday or Sunday morning (09:00–12:00 CET)", "When weekday sports or clubs take up evenings"],
            ["Mixed weekday + weekend plan", "For active students wanting steady 3-day weekly progress"],
            ["Custom slot arrangement", "Tailored to family work schedules and shift work"],
          ],
        },
      },
      {
        id: "denmark-language",
        heading: "Language of instruction for Danish-speaking children",
        directAnswer:
          "Classes are taught in clear, fluent English, allowing children growing up in Denmark to easily follow explanations and pronunciation guidance.",
        paragraphs: [
          "Most Danish schoolchildren develop strong English conversational skills early. Our tutors use encouraging, age-appropriate English to teach Arabic letters, Tajweed rules, and Islamic basics.",
          "If the family prefers Arabic or Urdu instruction for home cultural continuity, tutors fluent in those languages can also be assigned.",
        ],
      },
      {
        id: "denmark-female-tutors",
        heading: "Female Quran teachers for sisters and young daughters in Denmark",
        directAnswer:
          "Parents in Denmark can specifically request qualified female Quran teachers for young girls, female teenagers, and adult sisters.",
        paragraphs: [
          "We offer experienced, patient female Quran teachers who specialize in teaching children and female adults in a safe, encouraging 1-on-1 environment.",
          "Simply note your female teacher preference on the booking form, and we will match you with an EET/CET compatible female tutor.",
        ],
      },
      {
        id: "denmark-courses",
        heading: "Courses for learners in Denmark: Qaida to Tajweed & Hifz",
        directAnswer:
          "Noorani Qaida for beginners; Quran reading with Tajweed, memorisation (Hifz), Daily Duas, and Namaz / Salah step-by-step for advancing learners.",
        paragraphs: [
          "Between live 1-on-1 lessons, students have free access to NoorPath's Interactive Noorani Qaida, audio recitation tools, and quiz modules to reinforce their learning interactively at home.",
          "Adult learners in Denmark can also join tailored beginner or Tajweed improvement tracks with flexible evening hours.",
        ],
      },
      {
        id: "denmark-safety",
        heading: "Safety, legitimacy and progress tracking",
        directAnswer:
          "Safe online lessons with vetted tutors, parent supervision welcome at any time, and regular progress reports.",
        paragraphs: [
          "All tutors are background checked and trained in child pedagogy. Parents can observe lessons directly from their living room, ensuring complete peace of mind.",
          "Subscription billing is transparent in USD with no lock-in contracts or cancellation penalties.",
        ],
      },
      {
        id: "denmark-start",
        heading: "Start this week from Copenhagen, Aarhus or Odense",
        directAnswer:
          "Book a free 30-minute trial, state your Danish city and preferred CET/CEST time window, and start learning with no card required.",
        paragraphs: [
          "Compare published plans at USD pricing and estimate your monthly DKK budget. Sibling discounts are available when enrolling two or more children.",
        ],
      },
    ],
  },
};
