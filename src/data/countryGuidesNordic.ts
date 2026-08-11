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
      "Kids Quran classes in Finland online — EET scheduling, Helsinki and Espoo context, Noorani Qaida foundations, safeguarding, and a free trial path.",
    reviewedDate: "28 July 2026",
    sections: [
      {
        id: "finland-fit",
        heading: "Are kids Quran classes available online in Finland?",
        directAnswer:
          "Yes. Families in Helsinki, Espoo and other Finnish cities can request live one-to-one online Quran classes for children and adults. NoorPath teaches online only — not a Finnish campus.",
        paragraphs: [
          "Finland’s Muslim community is relatively small compared with larger European markets, so parents often search online when local children’s programmes are limited. A recurring EET/EEST lesson can fit after Finnish school hours without another long journey.",
          "Suitability depends on the child’s attention span, language comfort, and confirmed tutor availability after a free trial — not on marketing promises of instant fluency.",
        ],
        bullets: [
          "Remote-only service with no Finnish branch claim.",
          "Kids placement by readiness, not birthday alone.",
          "Female tutor preferences can be requested.",
          "Free trial before ongoing payment.",
        ],
      },
      {
        id: "finland-schedule",
        heading: "What times work for online Quran classes in Finland?",
        directAnswer:
          "Request after-school or evening windows in EET or EEST. Exact recurring times are confirmed after tutor matching.",
        paragraphs: [
          "Share school finish times and weekend conflicts. Younger children often focus better in late afternoon; older pupils may need later slots around homework.",
        ],
        table: {
          headers: ["Planning factor", "What to confirm"],
          rows: [
            ["Timezone", "EET / EEST local clock — not another country’s slot"],
            ["School load", "Exam weeks and holidays"],
            ["Sibling devices", "Shared laptop conflicts"],
            ["Parent presence", "Supervision for younger learners"],
          ],
        },
      },
      {
        id: "finland-courses",
        heading: "Which courses fit children in Finland?",
        directAnswer:
          "Most beginners start with Noorani Qaida. Readers may progress to Quran reading, Tajweed, or structured Hifz after assessment.",
        paragraphs: [
          "Link practice between lessons with calm recognition tools on the Interactive Noorani Qaida hub. Live classes remain the place for Makharij and Tajweed correction.",
          "Islamic studies for children can be requested as a separate or combined track when families want faith basics alongside reading.",
        ],
      },
      {
        id: "finland-safety",
        heading: "Safeguarding expectations for Finnish households",
        directAnswer:
          "Keep devices in family spaces, observe early lessons, and confirm tutor details before enrolment.",
        paragraphs: [
          "Prefer transparent academies with published pricing and trial paths. Avoid large prepaid commitments before hearing the child with a real tutor.",
        ],
      },
      {
        id: "finland-start",
        heading: "How to start from Helsinki or Espoo this week",
        directAnswer:
          "Request a free trial, state your city and EET/EEST preference, and compare published USD pricing for household budgeting in euros.",
        paragraphs: [
          "After matching, protect one short home practice most days. Consistency beats intensity in minority settings.",
        ],
      },
    ],
  },
  "online-quran-classes-denmark": {
    country: "Denmark",
    title: "Online Quran Classes in Denmark: Weekday & Weekend Guide",
    description:
      "Online Quran classes in Denmark for Copenhagen and Aarhus families — CET schedules, weekend windows, safeguarding, and a free trial path.",
    reviewedDate: "28 July 2026",
    sections: [
      {
        id: "denmark-fit",
        heading: "Are online Quran classes suitable for families in Denmark?",
        directAnswer:
          "Yes for households that want live one-to-one Quran tuition online with CET/CEST matching. NoorPath is an online academy — not a Danish campus.",
        paragraphs: [
          "Muslim families around Copenhagen and Aarhus often balance Danish schooling, clubs and Islamic learning. Online lessons remove an extra journey while keeping a serious weekly appointment.",
          "Weekend Quran class windows matter when weekday evenings are full — request Saturday or Sunday CET/CEST slots and confirm availability after matching.",
        ],
        bullets: [
          "Remote-only — no Copenhagen branch claim.",
          "Weekday and weekend preferences can be stated.",
          "Female tutor requests are welcome subject to matching.",
          "Free trial before ongoing payment.",
        ],
      },
      {
        id: "denmark-weekend",
        heading: "Weekend Quran classes in Denmark",
        directAnswer:
          "Weekend mornings or afternoons can be requested in CET/CEST. Exact slots are confirmed after tutor matching — not a published Denmark-wide weekend grid.",
        paragraphs: [
          "Choose the lightest sustainable rhythm: one strong weekend lesson plus short weekday home practice often beats irregular intensives.",
        ],
        table: {
          headers: ["Option", "When it helps"],
          rows: [
            ["Weekday after school", "Stable school-week routine"],
            ["Saturday morning", "Clubs fill weekday evenings"],
            ["Sunday afternoon", "Family Friday commitments"],
            ["Mixed plan", "Only if the household can keep both"],
          ],
        },
      },
      {
        id: "denmark-courses",
        heading: "Courses for learners in Denmark",
        directAnswer:
          "Noorani Qaida for beginners; Quran reading, Tajweed, Hifz or Islamic studies after assessment.",
        paragraphs: [
          "Soft-link free Interactive Noorani Qaida practice between live sessions. Keep commercial enrolment on trial and pricing pages.",
        ],
      },
      {
        id: "denmark-safety",
        heading: "Safety and legitimacy",
        directAnswer:
          "Use known platforms, parental observation, and confirmed tutor details before continuing payment.",
        paragraphs: [
          "Online Islamic education is legitimate when transparent. Avoid services that refuse to explain who teaches after payment.",
        ],
      },
      {
        id: "denmark-start",
        heading: "Start this week from Copenhagen or Aarhus",
        directAnswer:
          "Request a free trial, state city and weekday or weekend CET/CEST preference, then protect a short home echo after matching.",
        paragraphs: [
          "Budget using published USD plans and your own DKK conversion estimate — NoorPath does not publish a fixed DKK price list.",
        ],
      },
    ],
  },
};
