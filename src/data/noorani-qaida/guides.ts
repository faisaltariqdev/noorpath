import type { QaidaGuide } from "./types";

export const QAIDA_GUIDES: QaidaGuide[] = [
  {
    slug: "for-parents",
    title: "Noorani Qaida Parent Guide",
    description: "A practical guide to short, positive Noorani Qaida practice at home for children ages 3–12.",
    audience: "Parents and carers",
    introduction: "A parent does not need to become the child’s pronunciation examiner. The most useful role is to protect a calm routine, help the child notice the page, replay approved models, and share questions with the teacher.",
    sections: [
      { heading: "Use a five-minute routine", body: "Begin with one familiar success, practise one new item, and finish with a game or review. Short, repeatable sessions usually fit a young child’s attention better than occasional long drills.", points: ["One minute of review", "Two minutes on one new skill", "One minute of recognition", "One minute of child choice"] },
      { heading: "Praise the learning behaviour", body: "Praise listening, careful looking, patient retrying, and asking for help. Avoid promising rewards only for perfect pronunciation, because accurate sounds often need gradual teacher correction." },
      { heading: "Know when to pause", body: "Stop when the child becomes tense, guesses repeatedly, or loses interest. Record the difficult letter or rule and send it to the teacher rather than turning the session into a test." },
    ],
    checklist: ["Use the same letter names as the teacher", "Keep approved audio available", "Practise one contrast at a time", "Let the child point before speaking", "Share uncertain sounds with the teacher"],
    keywords: ["Noorani Qaida parent guide", "teach Noorani Qaida at home", "Quran practice routine for kids"],
    faqs: [
      { question: "How long should a young child practise Noorani Qaida?", answer: "Start with about five focused minutes and adapt to the child’s readiness. Consistency and calm attention matter more than forcing a fixed duration." },
      { question: "Should parents correct every mistake?", answer: "Correct only what the teacher has clearly modelled. Note uncertain articulation for the next lesson instead of reinforcing a guessed sound." },
    ],
    image: "lesson",
  },
  {
    slug: "for-teachers",
    title: "Noorani Qaida Teacher Guide",
    description: "A lesson-planning framework for recognition, modelling, guided practice, games, and review.",
    audience: "Quran teachers and tutors",
    introduction: "The platform supports teaching; it does not replace professional judgement. A teacher can use its sequence to reduce cognitive load, make practice visible, and record which component—recognition, articulation, blending, or confidence—needs support.",
    sections: [
      { heading: "Teach one observable outcome", body: "Define the lesson in a sentence: identify Ba among two distractors, keep Fatha short, or blend a sakin consonant. A narrow outcome makes feedback useful and games purposeful." },
      { heading: "Use model, guide, release", body: "Model once without demanding imitation, guide one or two attempts, then reduce prompts. Repeated teacher modelling can hide whether the learner recognises the written clue independently.", points: ["Model accurately", "Ask the learner to notice the clue", "Guide a short response", "Remove one prompt", "Record the next step"] },
      { heading: "Separate error types", body: "A child may recognise the correct letter but miss the articulation, or pronounce accurately while confusing the written form. Record these separately so the next activity targets the real need." },
    ],
    checklist: ["Verify source text and audio", "State one lesson outcome", "Use a visually similar contrast", "Include retrieval after modelling", "Send only reviewed home practice"],
    keywords: ["Noorani Qaida teacher guide", "how to teach Noorani Qaida", "Qaida lesson plan"],
    faqs: [
      { question: "How should games fit into a Qaida lesson?", answer: "Use a game after modelling to retrieve a specific skill. The game should not introduce an unmodelled pronunciation rule." },
      { question: "Does a platform score prove mastery?", answer: "No. Scores show interaction performance. A teacher still verifies articulation, blending, consistency, and transfer to new examples." },
    ],
    image: "lesson",
  },
  {
    slug: "practice",
    title: "Noorani Qaida Practice Guide",
    description: "A structured listen, recognise, trace, repeat, play, and review routine for beginner Quranic Arabic.",
    audience: "Learners, parents, and teachers",
    introduction: "Effective practice changes the task instead of repeating one response indefinitely. NoorPath’s cycle moves from seeing and hearing to recalling and applying, with brief review spaced across later sessions.",
    sections: [
      { heading: "Recognise before producing", body: "Ask the learner to point to the target letter or mark before saying it. Recognition isolates visual understanding and reduces the pressure of doing everything at once." },
      { heading: "Trace for attention, not proof", body: "Tracing can focus the eyes on shape direction and dots, but a neat trace does not prove recognition or pronunciation. Follow it with a choice or reading prompt." },
      { heading: "Retrieve through mixed practice", body: "After a correct model, mix the target with a small number of familiar distractors. Return to it later in the session and again on another day.", points: ["Target plus two familiar items", "One immediate retry", "One delayed review", "One new context"] },
    ],
    checklist: ["Choose one target", "Limit distractors", "Keep vowels short where required", "Record difficult contrasts", "Finish with a known success"],
    keywords: ["Noorani Qaida practice", "learn Arabic letters practice", "Qaida exercises for kids"],
    faqs: [
      { question: "Is daily practice necessary?", answer: "A short, regular routine can support retention, but families should choose a sustainable schedule and follow the teacher’s priorities." },
      { question: "How many new letters should a child practise?", answer: "Use a small number based on readiness. Mixing one new target with familiar letters is often more informative than presenting many new shapes." },
    ],
    image: "games",
  },
  {
    slug: "pronunciation",
    title: "Noorani Qaida Pronunciation Guide",
    description: "How to use names, transliteration, mouth cues, audio guidance, and teacher feedback without learning guessed sounds.",
    audience: "English-speaking beginners and families",
    introduction: "English spelling can only approximate Arabic sounds. Use transliteration to remember a label, not as the final pronunciation source. Accurate learning combines the written letter, a reviewed audible model, visible mouth cues where relevant, and corrective feedback.",
    sections: [
      { heading: "Separate letter name and reading sound", body: "The alphabet name helps identify the symbol, while the sound in a word depends on Harakaat and reading rules. A learner who says the name correctly may still need practice reading the consonant with a vowel." },
      { heading: "Use articulation cues safely", body: "Descriptions such as lips together or middle throat orient attention; they are not instructions to force physical movement. Stop repeated attempts if the learner becomes tense." },
      { heading: "Treat audio as a model, not an assessor", body: "Listen-and-repeat tools provide consistency and replay. They cannot reliably judge every articulation or replace a teacher who can hear the learner’s response." },
    ],
    checklist: ["Look at the Arabic first", "Use transliteration as support only", "Listen before repeating", "Compare one nearby sound", "Ask a teacher about uncertainty"],
    keywords: ["Noorani Qaida with pronunciation", "Arabic letter pronunciation for kids", "Noorani Qaida with audio"],
    faqs: [
      { question: "Does NoorPath claim Qari-reviewed audio?", answer: "No. Public pages do not claim reviewed recordings until specific assets have completed formal review. Live teachers remain the correction path for uncertain sounds." },
      { question: "Why can’t English spelling show every Arabic sound?", answer: "Some Arabic articulation points and sound qualities have no direct English equivalent. Transliteration is a memory aid, not a complete acoustic model." },
    ],
    image: "lesson",
  },
  {
    slug: "games",
    title: "Noorani Qaida Games and Learning Activities",
    description: "How NoorPath’s letter games turn recognition, listening, sequencing, and recall into focused practice — plus free playable browser games.",
    audience: "Children ages 3–12, parents, and teachers",
    introduction: "A learning game is useful when its goal is clear. NoorPath’s platform preview shows short activities for finding a target letter, matching sound and shape, remembering pairs, ordering letters, and answering quick recognition prompts. Families can also open free browser games on this site for letter matching, harakat recognition, and a parent progress checklist.",
    sections: [
      { heading: "Single-letter focus games", body: "Bubble Pop, Find the Letter, and Sound Match keep one target visible while distractors test whether the learner can recognise or hear it. This is different from simply tapping every colourful object. Try the free letter matching game when you only need a quick recognition check on a phone." },
      { heading: "Group and sequence games", body: "Memory Match, Letter Train, Puzzle, and Quick Quiz mix familiar letters to practise retrieval, visual comparison, and order. Teachers can choose the activity that matches the lesson outcome.", points: ["Bubble Pop: selective attention", "Find Letter: visual discrimination", "Sound Match: sound-symbol mapping", "Memory: paired retrieval", "Train and Puzzle: sequence awareness", "Quick Quiz: fluent recall"] },
      { heading: "Rewards without locking learning", body: "Stars, badges, and lesson rewards can acknowledge effort and consistency. Curriculum access remains open; rewards do not block a child from revisiting or exploring another lesson. The free progress checklist helps parents track coverage without creating an account." },
    ],
    checklist: ["Model before playing", "Name the game’s target skill", "Use a small distractor set", "Pause after repeated guessing", "Review the same skill away from the game"],
    keywords: ["Noorani Qaida games", "Arabic alphabet games for kids", "interactive Quran learning games"],
    faqs: [
      { question: "Can games teach pronunciation by themselves?", answer: "Games can reinforce sound-symbol matching, but a teacher or approved model should establish the sound first and correct uncertain articulation." },
      { question: "Are NoorPath’s Qaida lessons locked behind game progress?", answer: "No. Learners can open modules and lessons freely; rewards track progress without gating curriculum access." },
    ],
    image: "bubble",
  },
  {
    slug: "pdf-vs-interactive",
    title: "Noorani Qaida PDF vs Interactive Learning",
    description: "A balanced guide to choosing a clear Noorani Qaida book or PDF and combining it with guided online practice.",
    audience: "Parents, teachers, and beginners comparing resources",
    introduction: "A well-typeset Qaida page is excellent for stable reading and printing. Interactive practice adds prompts, progress, replay, and varied retrieval. The useful question is not which format wins, but whether the Arabic is accurate and the learner receives suitable correction.",
    sections: [
      { heading: "How to evaluate a PDF", body: "Check the publisher or institution, Arabic typesetting clarity, lesson sequence, print quality, and usage permission. Do not assume that widespread sharing proves a file is accurate or licensed.", points: ["Known source", "Clear vowel marks", "Consistent lesson order", "Readable print size", "Explicit sharing permission"] },
      { heading: "What interactive practice adds", body: "A digital platform can focus one letter, show joining forms, present a short self-check, and return to difficult material. These features support practice but do not independently certify pronunciation." },
      { heading: "A practical combined routine", body: "Use the book or PDF for stable page reading, the platform for focused recognition and games, and a teacher or approved recording for pronunciation verification." },
    ],
    checklist: ["Confirm source and permission", "Inspect Arabic at high zoom", "Use the same lesson order across formats", "Keep notes for the teacher", "Avoid downloading files from unknown mirrors"],
    keywords: ["Noorani Qaida PDF", "Noorani Qaida PDF with audio", "interactive Noorani Qaida vs book"],
    faqs: [
      { question: "Can I download a Noorani Qaida PDF from NoorPath?", answer: "NoorPath does not currently publish a licensed Qaida PDF download. This guide explains how to evaluate a resource you are authorised to use." },
      { question: "Is an interactive Qaida better than a printed book?", answer: "They support different tasks. Print provides a stable reading surface; interactive activities provide prompts and retrieval. Both still benefit from accurate modelling and feedback." },
    ],
  },
];

export const QAIDA_GUIDE_BY_SLUG = Object.fromEntries(
  QAIDA_GUIDES.map((guide) => [guide.slug, guide]),
) as Record<string, QaidaGuide>;
