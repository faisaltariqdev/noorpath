import type { CountryGuideContent } from "@/data/countryGuideTypes";
import {
  RESCHEDULE_NOTICE_HOURS,
  TUTOR_FACTS,
} from "@/lib/academyFacts";

/**
 * Rewritten guides (Nov 2026) for markets whose earlier guides were too short to
 * give each country page distinct content: Belgium, Italy, Switzerland, Turkey,
 * Indonesia, Malaysia, South Africa and Bangladesh. Each guide supersedes the
 * older entry in its original file. Facts come from academyFacts only — no
 * invented statistics, offices, tutor names or outcome timelines.
 */

export const countryGuidesRewrite2026: Record<string, CountryGuideContent> = {
  "online-quran-classes-belgium": {
    country: "Belgium",
    title: "Online Quran Classes in Belgium: A Guide for Families in Brussels, Flanders and Wallonia",
    description:
      "How families in Belgium can use live one-to-one online Quran lessons: using free Wednesday afternoons, learning across French, Dutch and English, choosing a starting point, tutor checks and fees.",
    reviewedDate: "4 November 2026",
    sections: [
      {
        id: "belgium-guide-languages",
        heading: "What if your child learns in French or Dutch at school?",
        directAnswer:
          "That is common, and it works well. NoorPath's tutors are English-speaking, and Arabic letters are taught by sound, so children follow quickly even when English is their second or third language.",
        paragraphs: [
          "Belgian children often move between French, Dutch and a home language every day. Quran lessons add Arabic sounds that exist in none of those languages, so what matters most is a tutor who models each letter clearly and has the child repeat it until it is right. Explanations are given in simple English, with plenty of listening and repetition.",
          "If English is not comfortable for your child yet, say so in the trial. The tutor can keep explanations short and lean on demonstration, and you can judge whether the fit works before paying.",
        ],
      },
      {
        id: "belgium-guide-wednesday",
        heading: "Why do so many Belgian families choose Wednesday afternoons?",
        directAnswer:
          "Many primary schools in Belgium have Wednesday afternoon free, which makes it a natural time for a calm lesson without homework pressure.",
        paragraphs: [
          "Belgium uses Central European Time — UTC+1 in winter and UTC+2 in summer, with clocks changing on the last Sunday of March and October. Lesson times are agreed in Belgian time and confirmed after a tutor is matched.",
          "Besides Wednesday, families often pick an early-evening slot on another school day so lessons happen twice a week, or a weekend morning when weekdays are full.",
        ],
        bullets: [
          "Wednesday afternoon: longer focus, no homework waiting",
          "Weekday early evening: a short second lesson to keep momentum",
          "Saturday or Sunday morning: when weekday evenings are busy with activities",
        ],
      },
      {
        id: "belgium-guide-start",
        heading: "Where does a beginner start?",
        directAnswer: "With Noorani Qaida — letter sounds, vowel marks and joining — before reading from the Mushaf.",
        paragraphs: [
          "The tutor checks your child's level in the trial. A child who already reads slowly may revise the Qaida briefly and move into guided Quran reading; a fluent reader can focus on Tajweed or start memorizing.",
        ],
        relatedLinks: [
          { href: "/noorani-qaida", label: "How Noorani Qaida is taught" },
          { href: "/learn-tajweed-online", label: "Tajweed lessons online" },
        ],
      },
      {
        id: "belgium-guide-tutor",
        heading: "What can you check before committing?",
        directAnswer: `${TUTOR_FACTS.credentials} You meet the tutor in the trial before any payment.`,
        paragraphs: [
          `${TUTOR_FACTS.femaleTutors} A female tutor is assigned subject to availability and confirmed before the trial. ${TUTOR_FACTS.rematch} Parents should arrange children's lessons and stay nearby during class.`,
        ],
        relatedLinks: [{ href: "/safeguarding", label: "Safeguarding guidance for parents" }],
      },
      {
        id: "belgium-guide-home",
        heading: "How can parents help between lessons?",
        directAnswer: "Five minutes of reading aloud on non-lesson days does more than one long weekend session.",
        paragraphs: [
          "You don't need to read Arabic yourself. Ask your child to read the last page practised while you listen for confidence and smoothness, and check the Parent Portal for attendance, homework and teacher reports.",
        ],
      },
      {
        id: "belgium-guide-distance",
        heading: "Brussels, Antwerp, Li\u00e8ge \u2014 or a small town?",
        directAnswer:
          "Online lessons work the same wherever you live, so families outside the big cities get the same one-to-one teacher as those in Brussels.",
        paragraphs: [
          "Families in smaller towns often have no Quran class nearby at all, while those in Brussels or Antwerp may have one that is full, far away or taught in a language their child doesn't follow well. Bringing the lesson home removes both problems.",
          "What matters most is consistency: a short lesson at the same time each week, with the device ready and a quiet corner, beats a longer lesson that keeps getting cancelled for travel.",
        ],
      },
      {
        id: "belgium-guide-exams",
        heading: "What about June and December exam periods?",
        directAnswer:
          "Secondary pupils in Belgium often have exams in December and June. Plan lighter Quran weeks around them rather than stopping entirely.",
        paragraphs: [
          "During exam weeks, one short lesson focused on revision keeps reading fresh without adding pressure. Lessons can be moved with 24 hours' notice, subject to tutor availability, so you can shift a session away from an exam morning.",
          "After exams, the summer break is a good time to add a second weekly lesson if your child is ready to move faster \u2014 from Qaida into reading, or from reading into Tajweed.",
        ],
      },
      {
        id: "belgium-guide-family",
        heading: "Can brothers and sisters learn together?",
        directAnswer:
          "Each child has their own one-to-one lesson, so every child reads for the whole session; sibling discounts apply.",
        paragraphs: [
          "Siblings usually start at different levels, so separate lessons let the tutor pace each one properly. Many families book them back to back so the evening routine stays simple.",
          "Older siblings can help younger ones practise between lessons \u2014 reading a line together, or listening to a short repetition \u2014 which builds the habit at home.",
        ],
      },
    ],
  },

  "online-quran-classes-italy": {
    country: "Italy",
    title: "Online Quran Classes in Italy: Learning at Home Around the Italian School Week",
    description:
      "Guidance for Muslim families in Italy using live one-to-one online Quran lessons — fitting lessons around school days that can include Saturdays, long summer holidays, starting points, tutor checks and fees.",
    reviewedDate: "4 November 2026",
    sections: [
      {
        id: "italy-guide-need",
        heading: "Why choose online Quran lessons in Italy?",
        directAnswer:
          "Because a teacher who explains in English and listens to your child one-to-one can be hard to find locally, especially outside the big cities.",
        paragraphs: [
          "Many families in Italy live far from a mosque class, or find that its timetable clashes with school and work. A live online lesson brings a dedicated tutor home, so your child gets individual correction rather than a turn in a large group.",
        ],
      },
      {
        id: "italy-guide-week",
        heading: "How do lessons fit an Italian school week?",
        directAnswer:
          "Some Italian schools still teach on Saturday mornings, so many families choose weekday afternoons or Sunday for Quran lessons. You pick the windows; NoorPath confirms the time.",
        paragraphs: [
          "Italy uses Central European Time — UTC+1 in winter and UTC+2 in summer, changing on the last Sunday of March and October. Lessons are agreed in Italian time and reconfirmed around each change.",
          "Many school days finish by early afternoon, which leaves time for a short lesson after lunch and rest. If your child's school has a longer day, an early-evening slot works better.",
        ],
      },
      {
        id: "italy-guide-summer",
        heading: "What happens over the long summer holiday?",
        directAnswer:
          "Keep at least one short lesson a week. Italian summer holidays are long, and a complete break often means relearning letters in September.",
        paragraphs: [
          `If you travel, lessons can continue wherever there is a connection. If you need to move a class, give ${RESCHEDULE_NOTICE_HOURS} hours' notice; changes are subject to tutor availability.`,
        ],
      },
      {
        id: "italy-guide-start",
        heading: "Which course suits your child or you?",
        directAnswer: "The tutor checks the learner's level in the trial and recommends where to begin.",
        paragraphs: [],
        table: {
          headers: ["Learner", "Starting point"],
          rows: [
            ["Child new to Arabic", "Noorani Qaida"],
            ["Child who reads slowly", "Qaida revision, then Quran reading"],
            ["Fluent reader", "Tajweed or Hifz"],
            ["Adult beginner", "Private lessons from the alphabet"],
          ],
        },
        relatedLinks: [{ href: "/online-quran-classes-for-adults", label: "Quran classes for adults" }],
      },
      {
        id: "italy-guide-languages",
        heading: "My child speaks Italian at school and another language at home \u2014 will that matter?",
        directAnswer:
          "Not much. Arabic letters are taught by sound, and NoorPath's tutors are English-speaking, explaining simply and demonstrating each letter.",
        paragraphs: [
          "Children who already switch between languages are often good at hearing small differences in sounds, which helps with Makharij. In the trial, tell the tutor which languages your child is most comfortable with so explanations stay short and clear.",
          "For very young children, lessons rely more on listening and repeating than on explanation, so language matters even less.",
        ],
      },
      {
        id: "italy-guide-hifz",
        heading: "When is a child ready to start Hifz?",
        directAnswer:
          "When they read fluently and accurately. The tutor checks readiness in lessons rather than going by age alone.",
        paragraphs: [
          "Memorizing with weak reading builds mistakes into memory, so most children finish the Qaida and read confidently before starting Hifz. Once they begin, lessons combine new memorization with regular revision of what was learned before.",
          "Families in Italy often start with the short surahs of the last juz, which children also use in salah.",
        ],
        relatedLinks: [{ href: "/hifz-quran-online", label: "Online Hifz program" }],
      },
      {
        id: "italy-guide-home",
        heading: "How can parents help between lessons?",
        directAnswer:
          "A few minutes of reading aloud on non-lesson days matters more than an occasional long session.",
        paragraphs: [
          "You don't need to read Arabic to help. Sit with your child while they read the last page practised, listen for smooth and confident reading, and check homework and teacher reports in the Parent Portal.",
          "Keeping the Qaida or Mushaf in the same place, next to where lessons happen, makes it easier for children to pick it up without being reminded.",
        ],
      },
    ],
  },

  "online-quran-classes-switzerland": {
    country: "Switzerland",
    title: "Online Quran Classes in Switzerland: A Guide for Families Across the Cantons",
    description:
      "How families in Switzerland can make live one-to-one online Quran lessons work — midday breaks and free Wednesday afternoons, multilingual children, starting points, tutor checks and fees in USD with approximate francs.",
    reviewedDate: "4 November 2026",
    sections: [
      {
        id: "switzerland-guide-timing",
        heading: "When do lessons fit a Swiss school day?",
        directAnswer:
          "In many cantons younger children have a long midday break and Wednesday afternoon free — both can work for a short Quran lesson.",
        paragraphs: [
          "School timetables differ from canton to canton, so start from your child's own week. Families often use Wednesday afternoon, a late-afternoon slot after school, or a weekend morning.",
          "Switzerland uses Central European Time — UTC+1 in winter and UTC+2 in summer, changing on the last Sunday of March and October. Lessons are agreed in Swiss time and reconfirmed around each change.",
        ],
      },
      {
        id: "switzerland-guide-languages",
        heading: "Does it matter which language your child speaks?",
        directAnswer:
          "Not much. NoorPath's tutors are English-speaking and teach Arabic letters by sound, so children from German-, French- or Italian-speaking schools all follow.",
        paragraphs: [
          "Many Swiss children are already multilingual, which often helps them hear differences between sounds. Tell the tutor in the trial which languages your child is most comfortable in, so explanations stay simple and well paced.",
        ],
      },
      {
        id: "switzerland-guide-paths",
        heading: "What can learners study?",
        directAnswer:
          "Noorani Qaida for beginners, Quran reading, Tajweed, Hifz, daily duas and Islamic studies — all one-to-one.",
        paragraphs: [
          "Adults are welcome too, whether they are starting from the alphabet or returning after years away.",
        ],
        relatedLinks: [
          { href: "/noorani-qaida", label: "Noorani Qaida lessons" },
          { href: "/hifz-quran-online", label: "Online Hifz program" },
        ],
      },
      {
        id: "switzerland-guide-progress",
        heading: "How should progress look?",
        directAnswer: "Steadier reading and fewer repeated corrections — not a fixed finishing date.",
        paragraphs: [
          "Enrolled families can follow attendance, homework, quizzes, daily progress and teacher reports in the Parent Portal. Short daily practice at home makes the biggest difference.",
        ],
      },
      {
        id: "switzerland-guide-small-commune",
        heading: "What if you live far from a mosque?",
        directAnswer:
          "Then an online lesson can be your child's main Quran routine, with the same tutor each week.",
        paragraphs: [
          "Outside Zurich, Geneva, Basel and Bern, many families live in communes with no Quran class within easy reach. Online lessons remove the journey entirely, which matters in winter and on school days that already end with homework.",
          "A steady weekly lesson plus a few minutes of practice at home usually works better than trying to arrange occasional trips to a distant class.",
        ],
        relatedLinks: [{ href: "/online-quran-classes-no-masjid-nearby", label: "Quran classes with no masjid nearby" }],
      },
      {
        id: "switzerland-guide-holidays",
        heading: "How do sports weeks and school holidays affect lessons?",
        directAnswer:
          "Plan around them early: lessons can continue from wherever you are, or be moved with 24 hours' notice, subject to tutor availability.",
        paragraphs: [
          "Many cantons have a winter sports week as well as the usual autumn, Christmas, spring and summer holidays, and dates differ between cantons. Families who travel often keep one short lesson going so reading doesn't slip.",
          "If you'd rather pause for a week, tell NoorPath in advance so the recurring slot can be kept for your return.",
        ],
      },
      {
        id: "switzerland-guide-teens",
        heading: "What about teenagers with full timetables?",
        directAnswer:
          "Short, fixed lessons work best \u2014 often an evening slot or a weekend morning that doesn't compete with schoolwork or an apprenticeship.",
        paragraphs: [
          "Teenagers who learned to read as children often want to correct Tajweed or begin memorizing. Private lessons let them work on their own mistakes without a class listening, which many older learners prefer.",
          "Agree a realistic goal with the tutor, such as a set number of pages reviewed each month, rather than an open-ended plan.",
        ],
        relatedLinks: [{ href: "/learn-tajweed-online", label: "Tajweed lessons online" }],
      },
    ],
  },

  "online-quran-classes-turkey": {
    country: "Turkey",
    title: "Online Quran Classes in Turkey: An English-Language Option for Families",
    description:
      "A guide for families in Turkey — especially international and English-speaking households — on one-to-one online Quran lessons: how they differ from local courses, scheduling in Turkey time, starting points, tutor checks and fees.",
    reviewedDate: "4 November 2026",
    sections: [
      {
        id: "turkey-guide-who",
        heading: "Who are English-language online Quran lessons for in Turkey?",
        directAnswer:
          "Mainly international, expatriate and bilingual families who want explanations in English and one-to-one attention at home.",
        paragraphs: [
          "Turkey has a strong tradition of local Quran courses, including summer courses at mosques. For many families those are the right choice. Online lessons suit a different need: children at international schools, recently arrived families, or adults who want private lessons explained in English.",
        ],
      },
      {
        id: "turkey-guide-difference",
        heading: "How is a one-to-one online lesson different from a course?",
        directAnswer:
          "The whole lesson is your child's turn: every line is heard and corrected, at a pace set for one learner.",
        paragraphs: [
          "Some families use both — a local summer course for community and an online lesson during the school year for steady individual practice.",
        ],
        bullets: [
          "One learner, one tutor, live over video",
          "Pace adjusted to the child, not a group",
          "Explanations in English",
          "Lessons at home, with no travel",
        ],
      },
      {
        id: "turkey-guide-time",
        heading: "What time zone are lessons in?",
        directAnswer: "Turkey time (TRT), UTC+3 all year — Turkey does not change its clocks.",
        paragraphs: [
          `Lesson times are agreed in Turkey time and confirmed after a tutor is matched. Weekday afternoons after school and weekend mornings are common choices. A class can be moved with ${RESCHEDULE_NOTICE_HOURS} hours' notice, subject to tutor availability.`,
        ],
      },
      {
        id: "turkey-guide-start",
        heading: "Where should your child start?",
        directAnswer: "Beginners start with Noorani Qaida; readers move into Tajweed or Hifz.",
        paragraphs: ["The tutor checks your child's reading in the trial and recommends the right level."],
        relatedLinks: [
          { href: "/noorani-qaida", label: "How Noorani Qaida is taught" },
          { href: "/online-quran-classes-for-kids", label: "Online Quran classes for kids" },
        ],
      },
      {
        id: "turkey-guide-arrivals",
        heading: "We have just moved to Turkey \u2014 where do we start?",
        directAnswer:
          "Start with the trial: the tutor checks your child's level and you agree a routine that fits your new school week.",
        paragraphs: [
          "Families who have recently moved often find their child's Quran routine was the first thing to stop. Restarting with a short, fixed lesson at home is easier than finding a new local class straight away, especially before your child is comfortable in Turkish.",
          "Lessons are explained in English, so children who were learning in English before the move can carry on without changing language as well as country.",
        ],
      },
      {
        id: "turkey-guide-adults",
        heading: "I learned as a child \u2014 can I refresh my Tajweed as an adult?",
        directAnswer:
          "Yes. Many adults read fluently but want to correct habits they picked up years ago, and a private lesson is the easiest place to do it.",
        paragraphs: [
          "The tutor listens to you read, picks out the few rules or letters that need the most work, and focuses on those rather than starting from the beginning.",
          "Lessons can be held in the evening after work, and nobody else hears your mistakes.",
        ],
        relatedLinks: [{ href: "/online-quran-classes-for-adults", label: "Quran classes for adults" }],
      },
      {
        id: "turkey-guide-summer",
        heading: "Can online lessons work alongside a summer Quran course?",
        directAnswer:
          "Yes. Some families use a local summer course for community and an online lesson during the school year for steady individual practice.",
        paragraphs: [
          "Summer courses give children an intensive few weeks with friends. A weekly one-to-one lesson through the rest of the year keeps reading strong, so the next summer starts where the last one finished rather than with revision.",
          "Tell the tutor what your child covered in their summer course so lessons build on it.",
        ],
      },
      {
        id: "turkey-guide-cities",
        heading: "Does it help with long city commutes?",
        directAnswer:
          "Yes. In Istanbul, Ankara or Izmir, cutting out the journey to a class can free up an hour or more on a school day.",
        paragraphs: [
          "Long commutes and heavy traffic leave many children with little energy for another class after school. A lesson at home starts on time, and a tired child can still manage a focused 30 minutes without travelling.",
          "Choose a slot that leaves time for dinner and rest, and keep it the same each week so it becomes routine.",
        ],
      },
    ],
  },

  "online-quran-classes-indonesia": {
    country: "Indonesia",
    title: "Online Quran Classes in Indonesia: One-to-One Lessons in English Across Three Time Zones",
    description:
      "For families in Indonesia who want one-to-one Quran lessons explained in English: how they sit beside Iqro and TPQ learning, scheduling in WIB, WITA or WIT, starting points, tutor checks and fees.",
    reviewedDate: "4 November 2026",
    sections: [
      {
        id: "indonesia-guide-fit",
        heading: "How do online lessons sit beside Iqro and TPQ?",
        directAnswer:
          "Many Indonesian children learn through Iqro books and a local TPQ. Online one-to-one lessons add individual correction and English explanations, especially for children at international schools.",
        paragraphs: [
          "Local Quran learning in Indonesia is strong, and for many children a TPQ is the right place to start. Families usually look online when they want one teacher's full attention, more flexible times, or a tutor who explains in English.",
          "If your child already uses Iqro, the tutor checks their level in the trial and continues from there. Noorani Qaida covers the same foundation — letters, vowel marks and joining.",
        ],
      },
      {
        id: "indonesia-guide-zones",
        heading: "Which time zone will lessons use?",
        directAnswer:
          "Your own: Indonesia has three time zones and no daylight saving, so tell us where you live.",
        paragraphs: [],
        table: {
          headers: ["Time zone", "Main regions"],
          rows: [
            ["WIB (UTC+7)", "Java, Sumatra and western and central Kalimantan"],
            ["WITA (UTC+8)", "Bali, Nusa Tenggara, Sulawesi and eastern, southern and northern Kalimantan"],
            ["WIT (UTC+9)", "Maluku and Papua"],
          ],
        },
        relatedLinks: [{ href: "/online-quran-classes-for-kids", label: "Online Quran classes for kids" }],
      },
      {
        id: "indonesia-guide-schedule",
        heading: "When do lessons usually happen?",
        directAnswer:
          "After school and before Maghrib, in the evening after dinner, or on weekend mornings — confirmed after tutor matching.",
        paragraphs: [
          `Pick a slot your child can keep every week. If something clashes, a class can be moved with ${RESCHEDULE_NOTICE_HOURS} hours' notice, subject to tutor availability.`,
        ],
      },
      {
        id: "indonesia-guide-adults",
        heading: "Can adults and teenagers join?",
        directAnswer:
          "Yes. Teenagers often work on Tajweed or Hifz, and adults can learn privately from any level.",
        paragraphs: [
          "Adults who learned as children but feel unsure of their Tajweed often find a private one-to-one lesson the easiest way to correct old habits.",
        ],
        relatedLinks: [
          { href: "/learn-tajweed-online", label: "Learn Tajweed online" },
          { href: "/online-quran-classes-for-adults", label: "Quran classes for adults" },
        ],
      },
      {
        id: "indonesia-guide-international",
        heading: "What if my child is at an international school?",
        directAnswer:
          "Then lessons explained in English often suit them best, especially if they read English more comfortably than Bahasa Indonesia.",
        paragraphs: [
          "Children at international schools sometimes fall between two systems: they miss the routine of a local TPQ but need explanations in the language they study in. A one-to-one tutor who explains in English bridges that gap.",
          "Lessons can be fitted around international-school timetables, which often run later in the afternoon than local schools.",
        ],
      },
      {
        id: "indonesia-guide-ramadan",
        heading: "How do lessons work during Ramadan?",
        directAnswer:
          "Many families move lessons to after Tarawih or earlier in the day; tell NoorPath your Ramadan times early so they can be confirmed with the tutor.",
        paragraphs: [
          "Schools often hold short Ramadan programmes, and family routines change completely. Rather than pausing lessons for the month, many families keep a short lesson focused on reading the Quran more during Ramadan.",
          "After Eid, the usual timetable resumes, so the routine doesn't need to restart from scratch.",
        ],
      },
      {
        id: "indonesia-guide-home",
        heading: "How can families practise between lessons?",
        directAnswer:
          "A short daily reading at home, with a parent listening, makes the biggest difference.",
        paragraphs: [
          "Children who learn in a TPQ often read aloud together; at home, reading a few lines alone to a parent builds confidence. Use the pages the tutor set as homework, and check the Parent Portal for teacher reports.",
          "Keeping practice short \u2014 five to ten minutes \u2014 makes it easier to do every day.",
        ],
      },
    ],
  },

  "online-quran-classes-malaysia": {
    country: "Malaysia",
    title: "Online Quran Classes in Malaysia: Private Lessons in English Alongside KAFA and Iqra",
    description:
      "A guide for Malaysian families and adults on one-to-one online Quran lessons explained in English — alongside KAFA and Iqra, state weekend differences, scheduling in MYT, starting points, tutor checks and fees.",
    reviewedDate: "4 November 2026",
    sections: [
      {
        id: "malaysia-guide-alongside",
        heading: "Do online lessons replace KAFA or local Iqra classes?",
        directAnswer:
          "They don't need to. Many families keep local classes for community and add a short one-to-one lesson for individual correction in English.",
        paragraphs: [
          "Malaysian children often meet the Quran through Iqra books, KAFA classes and family. Online one-to-one lessons help when a child needs slower correction of particular letters, when timings clash, or when the family prefers explanations in English — common for children at international schools.",
        ],
      },
      {
        id: "malaysia-guide-weekend",
        heading: "What about states with a different weekend?",
        directAnswer:
          "Weekends differ by state, so tell us yours. Most states rest on Saturday and Sunday; a few, such as Kelantan and Terengganu, rest on Friday and Saturday.",
        paragraphs: [
          "Malaysia uses one time zone, MYT (UTC+8), all year with no daylight saving. Lesson times are agreed in Malaysian time and confirmed after a tutor is matched.",
        ],
        bullets: [
          "After school and before Maghrib for younger children",
          "After dinner for older children and adults",
          "Weekend mornings, on whichever days are your weekend",
        ],
      },
      {
        id: "malaysia-guide-iqra",
        heading: "My child already uses Iqra — where will they start?",
        directAnswer:
          "The tutor checks your child's level in the trial and continues from there; Noorani Qaida covers the same foundation as Iqra.",
        paragraphs: [
          "Children who have finished Iqra often move straight into guided Quran reading with Tajweed correction. Those who rushed through may revise particular letters first.",
        ],
        relatedLinks: [
          { href: "/noorani-qaida", label: "How Noorani Qaida is taught" },
          { href: "/learn-tajweed-online", label: "Tajweed lessons online" },
        ],
      },
      {
        id: "malaysia-guide-adults",
        heading: "Is it suitable for working adults?",
        directAnswer: "Yes — lessons are private, one-to-one and can be held late in the evening.",
        paragraphs: [
          "Many adults want to polish Tajweed or return to regular reading after years away. A private lesson lets you work on your own mistakes without a class listening.",
        ],
        relatedLinks: [{ href: "/online-quran-classes-for-adults", label: "Quran classes for adults" }],
      },
      {
        id: "malaysia-guide-east",
        heading: "Do families in Sabah and Sarawak get the same lessons?",
        directAnswer:
          "Yes. Malaysia shares one time zone, and online lessons work the same in Kota Kinabalu or Kuching as in Kuala Lumpur.",
        paragraphs: [
          "For families in smaller towns in East Malaysia, a teacher who explains in English can be hard to find locally. Online lessons bring one home, with the same scheduling and Parent Portal as anywhere else.",
          "If your connection is less reliable, keep mobile data ready as a backup and use headphones so the tutor hears clearly.",
        ],
      },
      {
        id: "malaysia-guide-teens",
        heading: "What about teenagers?",
        directAnswer:
          "Teenagers often move on to Tajweed or Hifz once Iqra is behind them, and private lessons fit around busy school years.",
        paragraphs: [
          "Older children who finished Iqra quickly sometimes carry small pronunciation errors. A one-to-one tutor finds and corrects them before they become habits, then helps the student build fluency or begin memorizing.",
          "Exam years are busy, so agree a lighter plan around them rather than stopping altogether; lessons can be moved with 24 hours' notice, subject to tutor availability.",
        ],
        relatedLinks: [{ href: "/hifz-quran-online", label: "Online Hifz program" }],
      },
      {
        id: "malaysia-guide-home",
        heading: "How can parents support practice at home?",
        directAnswer:
          "Listen to a few minutes of reading on non-lesson days and check homework in the Parent Portal.",
        paragraphs: [
          "You don't need to be fluent yourself. Asking your child to read the pages practised that week, and praising steady progress, builds the habit more than long sessions on the weekend.",
          "Children who also attend KAFA often enjoy showing what they have learned in both places.",
        ],
      },
      {
        id: "malaysia-guide-family",
        heading: "How can the wider family help?",
        directAnswer:
          "Grandparents, aunts and older cousins at home can listen to a child read for a few minutes each day \u2014 they don't need to teach.",
        paragraphs: [
          "In many Malaysian homes, extended family live close by or under the same roof. A grandparent listening to the page practised that day gives a child an audience and a reason to practise, while the tutor handles correction in lessons.",
          "If several children share one device, book back-to-back lessons so the evening routine stays simple.",
        ],
      },
    ],
  },

  "online-quran-classes-south-africa": {
    country: "South Africa",
    title: "Online Quran Classes in South Africa: Extra One-to-One Support Beside Madrassah",
    description:
      "How South African families use live one-to-one online Quran lessons alongside afternoon madrassah — planning around load-shedding, scheduling in SAST, Hifz support, tutor checks and fees.",
    reviewedDate: "4 November 2026",
    sections: [
      {
        id: "south-africa-guide-madrassah",
        heading: "How do online lessons work alongside madrassah?",
        directAnswer:
          "Many children attend afternoon madrassah; an online one-to-one lesson adds individual correction for the letters or Tajweed rules they find hardest.",
        paragraphs: [
          "Madrassah gives children community and routine. What a busy class can't always give is time for one child to read and be corrected line by line. Families in Cape Town, Johannesburg, Durban and smaller towns use online lessons to fill that gap, or as the main option where no madrassah is close by.",
        ],
      },
      {
        id: "south-africa-guide-power",
        heading: "How do you plan around load-shedding?",
        directAnswer:
          "When cuts happen, a little planning keeps lessons going: know your schedule, keep devices charged, have a backup connection and move the lesson early if a cut is planned.",
        paragraphs: [],
        bullets: [
          "Check your area's power schedule when choosing a lesson slot",
          "Charge the device fully and keep a power bank or UPS for the router",
          "Have mobile data ready as a backup connection",
          `If a cut is scheduled during the lesson, move it with ${RESCHEDULE_NOTICE_HOURS} hours' notice, subject to tutor availability`,
        ],
      },
      {
        id: "south-africa-guide-time",
        heading: "When can lessons happen?",
        directAnswer:
          "South Africa uses SAST (UTC+2) all year, with no daylight saving. Choose a slot after madrassah, in the evening or on a weekend morning.",
        paragraphs: [
          "Lesson times are agreed in South African time and confirmed after tutor matching; there is no fixed public timetable.",
        ],
      },
      {
        id: "south-africa-guide-hifz",
        heading: "Can online lessons support Hifz?",
        directAnswer:
          "Yes. Children memorizing at madrassah or at home can use one-to-one lessons for new memorization, revision checks or Tajweed in what they have already learned.",
        paragraphs: [
          "The tutor agrees a realistic plan for new lessons and revision with you; NoorPath doesn't promise a finishing date.",
        ],
        relatedLinks: [{ href: "/hifz-quran-online", label: "Online Hifz program" }],
      },
      {
        id: "south-africa-guide-towns",
        heading: "What if there's no madrassah nearby?",
        directAnswer:
          "Then a regular online lesson can be your child's main Quran routine, with a parent listening to short practice between lessons.",
        paragraphs: [
          "Families in smaller towns, or who have moved away from established communities, often have no afternoon madrassah within reach. Online lessons give children a dedicated teacher at home and a steady weekly structure.",
          "Pairing the lesson with a few minutes of reading each day keeps progress steady.",
        ],
        relatedLinks: [{ href: "/online-quran-classes-no-masjid-nearby", label: "Quran classes with no masjid nearby" }],
      },
      {
        id: "south-africa-guide-terms",
        heading: "How do lessons fit the four-term school year?",
        directAnswer:
          "Keep a steady weekly slot through each term and agree lighter or extra lessons around exams and holidays.",
        paragraphs: [
          "South African schools run four terms with short breaks between them. Holidays are a good time to add a lesson if your child is ready to move faster; exam weeks may call for a lighter plan.",
          "Lessons can be moved with 24 hours' notice, subject to tutor availability.",
        ],
      },
      {
        id: "south-africa-guide-adults",
        heading: "Can adults learn too?",
        directAnswer:
          "Yes. Adults can start from the alphabet, return after years away or strengthen Tajweed, privately and at their own pace.",
        paragraphs: [
          "Many adults learned at madrassah as children and want to correct habits or read more confidently. Evening lessons after work make that possible without travelling.",
        ],
        relatedLinks: [{ href: "/online-quran-classes-for-adults", label: "Quran classes for adults" }],
      },
      {
        id: "south-africa-guide-december",
        heading: "What about the long December holidays?",
        directAnswer:
          "Keep a short revision lesson going. Over a long break, children \u2014 especially those memorizing \u2014 can lose ground quickly.",
        paragraphs: [
          "The December\u2013January holidays are the longest break in the South African school year. One or two short lessons a week, even while travelling, keep reading and memorization fresh, so the new year starts with progress instead of revision.",
          "If you'd rather pause, tell NoorPath in advance so your recurring slot is kept for the new term.",
        ],
      },
    ],
  },

  "online-quran-classes-bangladesh": {
    country: "Bangladesh",
    title: "Online Quran Classes in Bangladesh: One-to-One Tajweed at Home",
    description:
      "A guide for families in Bangladesh on live one-to-one online Quran lessons — moving from Qaida to fluent reading with Tajweed, scheduling around the Friday–Saturday weekend in BST, power and connection tips, tutor checks and USD fees.",
    reviewedDate: "4 November 2026",
    sections: [
      {
        id: "bangladesh-guide-fit",
        heading: "When does a one-to-one online lesson help most?",
        directAnswer:
          "When a child reads but makes the same pronunciation mistakes, or needs a patient teacher who hears every letter rather than a turn in a group.",
        paragraphs: [
          "Many children in Bangladesh learn to read the Quran at home or at a local maktab. Online lessons are useful when parents want focused Tajweed correction, flexible times around school and coaching, or explanations in English for children at English-medium schools.",
        ],
      },
      {
        id: "bangladesh-guide-path",
        heading: "What is the path from Qaida to fluent reading?",
        directAnswer: "Qaida first, then guided reading from the Mushaf, then Tajweed — with Hifz for those ready to memorize.",
        paragraphs: [],
        table: {
          headers: ["Stage", "What the tutor works on"],
          rows: [
            ["Noorani Qaida", "Letter sounds, vowel marks and joining"],
            ["Guided reading", "Smooth reading from the Mushaf with correction"],
            ["Tajweed", "Makharij and applying the rules while reading"],
            ["Hifz", "New memorization with regular revision"],
          ],
        },
        relatedLinks: [
          { href: "/noorani-qaida", label: "How Noorani Qaida is taught" },
          { href: "/hifz-quran-online", label: "Online Hifz program" },
        ],
      },
      {
        id: "bangladesh-guide-week",
        heading: "When can lessons fit the week?",
        directAnswer:
          "Bangladesh uses BST (UTC+6) all year. Friday is the main weekly holiday, and many schools and offices also close on Saturday.",
        paragraphs: [
          `Families often choose an afternoon slot after school and coaching, an evening after dinner, or a Friday or Saturday morning. A class can be moved with ${RESCHEDULE_NOTICE_HOURS} hours' notice, subject to tutor availability.`,
        ],
      },
      {
        id: "bangladesh-guide-setup",
        heading: "What about power cuts and connection?",
        directAnswer: "Charge the device, keep mobile data as a backup and use headphones.",
        paragraphs: [
          "Headphones help the tutor hear each letter clearly over household noise, and a charged device or IPS backup keeps a short power cut from ending the lesson.",
        ],
      },
      {
        id: "bangladesh-guide-english",
        heading: "What if my child goes to an English-medium school?",
        directAnswer:
          "Lessons explained in English often help, because the tutor can describe each sound in the language your child studies in.",
        paragraphs: [
          "Children at English-medium schools sometimes read Arabic by copying what they hear without knowing why a letter sounds the way it does. A tutor who explains Makharij in English helps them correct mistakes and remember the rules.",
          "Lessons can be timed around school and coaching, which often fill the afternoon.",
        ],
      },
      {
        id: "bangladesh-guide-hifz",
        heading: "Is my child ready for Hifz?",
        directAnswer:
          "When they read fluently and accurately. The tutor checks readiness in lessons before memorization begins.",
        paragraphs: [
          "Starting Hifz before reading is accurate builds mistakes into memory. Most children finish Qaida and read confidently first, then begin with short surahs and build up, combining new memorization with regular revision.",
          "Agree a realistic weekly target with the tutor rather than a promised finishing date.",
        ],
      },
      {
        id: "bangladesh-guide-home",
        heading: "How can parents help if they don't read Arabic well?",
        directAnswer:
          "Listen, encourage and keep the routine \u2014 you don't need to correct pronunciation yourself.",
        paragraphs: [
          "Ask your child to read the pages practised that week while you listen for steady, confident reading. Check homework and teacher reports in the Parent Portal, and keep practice short and daily.",
          "Small, regular practice at home does more than a long session once a week.",
        ],
      },
    ],
  },
};
