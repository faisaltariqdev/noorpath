import type { QuizQuestion } from "@/components/noorani-qaida/InteractiveQuizGame";

export interface NewQaidaGameMeta {
  slug: string;
  title: string;
  metaTitle: string;
  description: string;
  keywords: string[];
  summary: string;
  href: string;
  answerBox: string;
  seoIntro: string;
  howToUse: string[];
  skillFocus: string[];
  sections: Array<{
    heading: string;
    body: string;
    points?: string[];
  }>;
  quizQuestions: QuizQuestion[];
  faqs: Array<{ question: string; answer: string }>;
}

const GAMES_BASE = "/noorani-qaida/games";

export const NEW_QAIDA_GAMES: NewQaidaGameMeta[] = [
  {
    slug: "arabic-letter-sound-quiz",
    title: "Arabic Letter Sound Quiz for Kids",
    metaTitle: "Arabic Letter Sound Quiz for Kids — Noorani Qaida",
    description:
      "Free Arabic letter sound quiz for kids: match each letter to its sound, tell look-alike letters apart and build Noorani Qaida reading recall. No login.",
    keywords: [
      "arabic letter sound quiz",
      "noorani qaida sound quiz",
      "arabic alphabet sounds test",
      "arabic phonics quiz kids",
      "learn arabic letter sounds online",
      "quranic arabic sounds practice",
    ],
    summary: "Connect Arabic letter symbols to their authentic sounds and makhraj cues.",
    href: `${GAMES_BASE}/arabic-letter-sound-quiz`,
    answerBox:
      "The Arabic letter sound quiz tests your child's ability to connect Arabic alphabet symbols to their authentic sounds. Pupils listen, identify Makhraj cues, and choose matching letters across five interactive questions. Practising letter sounds strengthens recognition before joined Quranic reading, helping young learners avoid guessing confusable letters like Seen and Saad.",
    seoIntro:
      "Connecting the visual shape of an Arabic letter to its true phonetic sound is the foundational milestone of Noorani Qaida. This free interactive quiz helps children test their sound-symbol memory without pressure, reinforcing correct pronunciation habits before moving to joined syllables.",
    howToUse: [
      "Say or replay the target letter sound clearly once before attempting the question.",
      "Ask your child to name the letter's distinctive visual markers (dots, bowl, vertical stroke).",
      "Select the matching letter choice and read the explanation box together.",
      "Revisit the linked Alif-to-Yaa alphabet guides if any letter sound feels unfamiliar.",
    ],
    skillFocus: [
      "Sound-to-glyph symbol association",
      "Distinguishing heavy vs light consonants (e.g. Taa vs Taa-heavy, Seen vs Saad)",
      "Throat letter recognition (Halqiyyah)",
      "Confidence building before vowelled reading",
    ],
    sections: [
      {
        heading: "Why Arabic Letter Sounds Differ from English Equivalents",
        body: "Many Arabic letters have no direct equivalent in the English alphabet. Letters like Ayn (ع), Haa (ح), and Ghayn (غ) require engaging muscles in the middle and upper throat that English speakers rarely isolate. Attempting to learn Quranic reading through English transliteration leads to distorted pronunciation. This quiz trains the ear and eye to recognise genuine Arabic phonetic distinctions directly from the Arabic script.",
        points: [
          "English transliterations cannot capture deep throat friction",
          "Emphatic letters require raising the back of the tongue",
          "Visual recognition must always link to authentic oral recitation",
        ],
      },
      {
        heading: "How to Help Children Distinguish Confusable Letter Pairs",
        body: "Beginner students frequently confuse letters that sound vaguely similar to untrained ears. Common pairs include Seen (س) and Saad (ص), Taa (ت) and Taa (ط), as well as Dhal (ذ) and Zay (ز). When practising, exaggerate the tactile difference: point out how Saad fills the mouth with fullness (Tafkheem), whereas Seen produces a sharp, light whistling sound (Safeer) at the front teeth.",
      },
      {
        heading: "The Role of Sound Quizzes in a Balanced Daily Routine",
        body: "Interactive quizzes serve as active recall retrieval practice. While passive listening helps children hear correct models, answering a quiz question requires them to retrieve the sound rule independently. Spend three to five minutes on this quiz after reviewing a lesson, then celebrate careful observation rather than speed alone.",
      },
      {
        heading: "Next Steps After Mastering Letter Sounds",
        body: "Once your child reliably scores full marks on individual letter sounds, they are ready to advance to short vowel marks: Fatha, Kasra, and Damma. These Harakat attach directly to the consonants they have learned, transforming static letters into readable syllables.",
      },
    ],
    quizQuestions: [
      {
        question: "Which Arabic letter produces a sharp, clear 'B' sound made by pressing both lips together firmly?",
        arabic: "ب",
        options: ["Baa (ب)", "Taa (ت)", "Thaa (ث)", "Noon (ن)"],
        correctIndex: 0,
        explanation: "Baa (ب) is articulated by closing the wet inner parts of both lips together firmly, creating a crisp 'B' sound.",
      },
      {
        question: "Which deep throat letter produces a raspy, friction sound similar to softly clearing your throat?",
        arabic: "ح",
        options: ["Khaa (خ)", "Haa (ح)", "Jeem (ج)", "Ayn (ع)"],
        correctIndex: 1,
        explanation: "Haa (ح) originates from the middle of the throat (Wasat al-Halq) with a smooth, raspy expulsion of breath.",
      },
      {
        question: "Which letter is pronounced with the tip of the tongue placed gently between the upper and lower front teeth?",
        arabic: "ث",
        options: ["Thaa (ث)", "Seen (س)", "Daal (د)", "Taa (ت)"],
        correctIndex: 0,
        explanation: "Thaa (ث) is a soft lisping sound produced by placing the tip of the tongue against the edges of the upper front incisors.",
      },
      {
        question: "What is the primary sound difference between Saad (ص) and Seen (س)?",
        arabic: "ص  vs  س",
        options: [
          "Saad is heavy (mouth-filling) while Seen is light and sharp",
          "Saad is whispered while Seen is loud",
          "Saad comes from the lips while Seen comes from the throat",
          "There is no phonetic difference",
        ],
        correctIndex: 0,
        explanation: "Saad (ص) is a full-mouth heavy letter (Mufakhkham) where the back of the tongue elevates, whereas Seen (س) is light (Muraqqaq).",
      },
      {
        question: "Which letter is articulated by touching the tip of the tongue to the gum line of the top front teeth?",
        arabic: "ت",
        options: ["Taa (ت)", "Faa (ف)", "Kaaf (ك)", "Meem (م)"],
        correctIndex: 0,
        explanation: "Taa (ت) is produced by tapping the tip of the tongue against the roots of the upper front teeth.",
      },
    ],
    faqs: [
      {
        question: "How do letter sound quizzes help kids learn Noorani Qaida?",
        answer:
          "They provide low-stakes retrieval practice. Instead of guessing letter names passively, children must evaluate the specific phonetic characteristics and Makhraj cues of each character.",
      },
      {
        question: "Can this sound quiz replace an oral Quran teacher?",
        answer:
          "No. Quizzes reinforce visual and conceptual recognition. A live teacher remains indispensable to verify your child's physical articulation, lip posture, and vocal delivery.",
      },
      {
        question: "What should we do if my child keeps missing throat letters?",
        answer:
          "Throat letters take physical conditioning. Practice gentle breathing exercises, model the sound slowly, and have a qualified teacher guide their makhraj during a live trial class.",
      },
    ],
  },
  {
    slug: "makharij-quiz",
    title: "Makharij Quiz — Arabic Letter Articulation Points Game",
    metaTitle: "Makharij Quiz — Arabic Letter Articulation Points Game",
    description:
      "Free interactive Makharij quiz for kids and beginners. Test your knowledge of throat letters, tongue points, and lips articulation in Quranic Arabic reading.",
    keywords: [
      "makharij quiz",
      "makharij al huroof test",
      "arabic articulation points quiz",
      "tajweed makharij test",
      "throat letters quiz",
      "quran pronunciation points practice",
    ],
    summary: "Test and master the 5 primary Arabic articulation areas and 17 specific points.",
    href: `${GAMES_BASE}/makharij-quiz`,
    answerBox:
      "The Makharij quiz tests your knowledge of Arabic letter articulation points across the throat, tongue, lips, nasal cavity, and chest. Understanding where each letter originates ensures accurate Tajweed and prevents substituting English approximations. Use this interactive quiz to review throat letters, heavy consonants, and lip positions between live Noorani Qaida lessons.",
    seoIntro:
      "Makharij (the exit points of letters) define the exact anatomical origin of every Arabic sound. Without knowing the makhraj, readers risk changing the meaning of Quranic words. This interactive quiz evaluates your grasp of the throat, tongue, and lip articulation points.",
    howToUse: [
      "Review the five main articulation areas (Halq, Lisaan, Shafatain, Jawf, Khayshoom).",
      "Place a finger gently on your throat or lips to physically sense where the sound originates.",
      "Answer each quiz question and study the anatomy explanations provided.",
      "Practice the letters aloud with an approved teacher to confirm physical accuracy.",
    ],
    skillFocus: [
      "The 5 broad articulation zones (Makharij Aammah)",
      "The 6 throat letters (Huroof al-Halq)",
      "Tongue articulation sub-divisions (tip, middle, edges, deep)",
      "Lip letters (Huroof ash-Shafawiyyah)",
    ],
    sections: [
      {
        heading: "The Five Primary Makharij Areas in Quranic Recitation",
        body: "Imam Ibn al-Jazari identified 17 specific articulation points distributed across 5 broad regions: Al-Jawf (the empty space in the mouth and throat for Madd elongation), Al-Halq (the throat containing 6 letters), Al-Lisaan (the tongue containing 18 letters across 10 points), Ash-Shafatayn (the two lips containing 4 letters), and Al-Khayshoom (the nasal passage for Ghunnah). Understanding this blueprint is essential for serious Quranic study.",
        points: [
          "Al-Jawf: open oral cavity for Madd letters",
          "Al-Halq: throat letters spanning bottom, middle, and top",
          "Al-Lisaan: versatile tongue points producing 18 letters",
          "Ash-Shafatayn: lip movements for Baa, Meem, Waw, Faa",
          "Al-Khayshoom: nasal resonance for Ghunnah sounds",
        ],
      },
      {
        heading: "The Three Levels of the Throat (Al-Halq)",
        body: "The throat is divided into three distinct zones: the bottom nearest the chest (Aqsal Halq) which houses Hamzah (ء) and Haa (هـ); the middle (Wasat al-Halq) which produces Ayn (ع) and Haa (ح); and the top nearest the mouth (Adnal Halq) which yields Ghayn (غ) and Khaa (خ). Confusing these points is the number one cause of poor Quranic recitation.",
      },
      {
        heading: "Why Daad (ض) is Unique Among Global Languages",
        body: "The letter Daad (ض) is articulated by pressing one or both edges of the tongue against the upper molars. It is unique to Arabic, which is historically termed 'Lughat ad-Daad' (the language of Daad). Inexperienced students often wrongly pronounce it like Daal (د) or Zaa (ظ). Proper teacher demonstration is vital to master this letter.",
      },
      {
        heading: "Practical Diagnostic Drill: The Sukoon Test",
        body: "To find the exact makhraj of any Arabic letter, precede it with an Alif carrying a Fatha or Kasra, and place a Sukoon on the target letter (e.g. أَبْ for Baa, or أَعْ for Ayn). The exact spot where the vocal sound terminates is that letter's true Makhraj.",
      },
    ],
    quizQuestions: [
      {
        question: "How many primary broad articulation areas (Makharij al-Aammah) exist in classical Tajweed?",
        arabic: "مَخَارِجُ الحُرُوف",
        options: ["5 areas", "3 areas", "7 areas", "10 areas"],
        correctIndex: 0,
        explanation: "Classical scholars establish 5 broad articulation zones: Al-Jawf, Al-Halq, Al-Lisaan, Ash-Shafatayn, and Al-Khayshoom.",
      },
      {
        question: "Which two letters originate from the deepest part of the throat near the chest (Aqsa al-Halq)?",
        arabic: "أَقْصَى الحَلْق",
        options: ["Hamzah (ء) and Haa (هـ)", "Ayn (ع) and Haa (ح)", "Ghayn (غ) and Khaa (خ)", "Qaaf (ق) and Kaaf (ك)"],
        correctIndex: 0,
        explanation: "Hamzah (ء) and Haa (هـ) originate from the deepest zone of the throat right above the vocal cords.",
      },
      {
        question: "Which letter is famously articulated using the side edges of the tongue pressed against the upper molars?",
        arabic: "ض",
        options: ["Daad (ض)", "Dhaal (ذ)", "Saad (ص)", "Zay (ز)"],
        correctIndex: 0,
        explanation: "Daad (ض) is articulated when one or both sides of the tongue press against the interior surfaces of the upper back molars.",
      },
      {
        question: "Where is the precise articulation point for the letter Meem (م)?",
        arabic: "م",
        options: [
          "From closing both lips together naturally",
          "From the tip of the tongue against the teeth",
          "From the upper throat",
          "From the hard roof of the mouth",
        ],
        correctIndex: 0,
        explanation: "Meem (م) is produced by closing the outer dry portions of both lips together, accompanied by nasal resonance (Ghunnah).",
      },
      {
        question: "Which set contains all six throat letters (Huroof al-Halq) in Noorani Qaida?",
        arabic: "حُرُوفُ الحَلْق",
        options: [
          "ء ، هـ ، ع ، ح ، غ ، خ",
          "ب ، ت ، ث ، ج ، ح ، خ",
          "ص ، ض ، ط ، ظ ، ف ، ق",
          "ك ، ل ، م ، ن ، و ، ي",
        ],
        correctIndex: 0,
        explanation: "The six throat letters are Hamzah (ء), Haa (هـ), Ayn (ع), Haa (ح), Ghayn (غ), and Khaa (خ).",
      },
    ],
    faqs: [
      {
        question: "Why is learning Makharij so important in Noorani Qaida?",
        answer:
          "Arabic letters that sound similar to foreigners (like Haa and Haa, or Seen and Saad) have completely different meanings. Correct Makharij prevents unintentional alterations of Quranic text.",
      },
      {
        question: "What is the difference between Makhraj and Sifah?",
        answer:
          "Makhraj is the physical address where a sound is born. Sifah (characteristic) describes how that sound behaves (whispered, heavy, soft, or trapped) when leaving the Makhraj.",
      },
      {
        question: "Can an adult learn correct Makharij if they have an accent?",
        answer:
          "Yes! The vocal tract muscles can be trained at any age with patient, guided drills from an experienced 1-on-1 Quran teacher.",
      },
    ],
  },
  {
    slug: "madd-quiz",
    title: "Madd Quiz — Arabic Long Vowels Practice Game",
    metaTitle: "Madd Quiz — Arabic Long Vowels Practice Game Online",
    description:
      "Play this free Madd quiz to test recognition of Alif Madd, Waw Madd, and Yaa Madd. Master two-count elongation rules with instant scoring for kids.",
    keywords: [
      "madd quiz",
      "arabic long vowels quiz",
      "alif madd waw madd yaa madd",
      "noorani qaida madd test",
      "tajweed madd rules game",
      "madd asli practice online",
    ],
    summary: "Recognise natural 2-count Madd letters and distinguish long vowels from short Harakat.",
    href: `${GAMES_BASE}/madd-quiz`,
    answerBox:
      "The Madd quiz tests how accurately children recognise Arabic long vowels: Alif after Fatha, Waw after Damma, and Yaa after Kasra. Beginners often confuse short Harakat with two-count Madd or over-elongate natural vowels. This five-question practice game checks vowel duration rules, helping students distinguish short syllables from elongated Quranic words.",
    seoIntro:
      "Madd means elongation or stretching of sound. In Noorani Qaida, learning natural long vowels (Madd Asli or Madd Tabee'ee) is the crucial bridge between single syllables and fluid Quranic reading. Test your child's grasp of Madd rules with this interactive quiz.",
    howToUse: [
      "Review the three Madd pairings: Fatha followed by Alif, Damma followed by Waw, Kasra followed by Yaa.",
      "Check that the preceding consonant's vowel matches the Madd letter's nature.",
      "Answer the quiz questions to identify correct elongation counts (typically 2 Harakat).",
      "Count two beats with fingers (closing and opening a finger) to calibrate the timing.",
    ],
    skillFocus: [
      "Alif Madd with preceding Fatha",
      "Waw Madd with preceding Damma",
      "Yaa Madd with preceding Kasra",
      "Distinguishing Madd Asli (2 counts) from extended secondary Madd",
    ],
    sections: [
      {
        heading: "The Three Primary Madd Letters and Their Strict Conditions",
        body: "A letter cannot cause elongation on its own; it must satisfy precise conditions. An Alif (ا) must be silent (empty of vowels) and preceded by a Fatha (بَا - Baa). A Waw (و) must carry a Sukoon or be vowel-less and preceded by a Damma (بُو - Boo). A Yaa (ي) must carry a Sukoon or be vowel-less and preceded by a Kasra (بِي - Bee). If the preceding vowel does not match, it is not a Madd letter.",
        points: [
          "Empty Alif preceded by Fatha = 2 counts",
          "Sakin Waw preceded by Damma = 2 counts",
          "Sakin Yaa preceded by Kasra = 2 counts",
          "No Hamzah or Sukoon immediately following",
        ],
      },
      {
        heading: "Natural Madd (Madd Asli) vs Secondary Madd (Madd Far'ee)",
        body: "Natural Madd (Madd Tabee'ee) occurs when no Hamzah or Sukoon follows the Madd letter. It is held for exactly two vowel counts (two beats of a rhythmic pulse). If a Hamzah or Sukoon follows the Madd letter, it expands into secondary Madd (Madd Far'ee), requiring four, five, or six counts depending on the rule.",
      },
      {
        heading: "Common Mistake: Stretching Short Vowels into Madd",
        body: "The single most common mistake among beginners is accidentally stretching a solitary Fatha, Kasra, or Damma into a two-count vowel. For example, reading 'كَتَبَ' (Kataba) as 'كَتَابَا' (Kataabaa). This quiz trains the learner to look specifically for the physical presence of the Madd letter before extending vocal duration.",
      },
      {
        heading: "How to Measure Two Harakat Consistently",
        body: "Classical scholars explain that one Harakah is the time it takes to pronounce a normal short vowel. Two Harakat equals the time taken to fold or unfold one finger at a moderate, rhythmic recitation pace. Developing this muscle timing prevents rushing and over-stretching.",
      },
    ],
    quizQuestions: [
      {
        question: "What are the three letters of natural Madd (Huroof al-Madd) and their required preceding vowels?",
        arabic: "حُرُوفُ المَدّ",
        options: [
          "Alif after Fatha, Waw after Damma, Yaa after Kasra",
          "Any Alif, Waw, or Yaa anywhere in the word",
          "Baa, Taa, and Thaa with Sukoon",
          "Letters that carry a Shaddah",
        ],
        correctIndex: 0,
        explanation: "The three Madd letters are: Alif preceded by Fatha, Waw preceded by Damma, and Yaa preceded by Kasra.",
      },
      {
        question: "For how many counts (Harakat) must natural Madd (Madd Asli) be elongated?",
        arabic: "المَدُّ الأَصْلِيّ",
        options: ["Exactly 2 counts", "1 count", "4 counts", "6 counts"],
        correctIndex: 0,
        explanation: "Madd Asli (natural Madd) is held for exactly 2 counts—no more and no less.",
      },
      {
        question: "In the word 'قَالَ' (Qaala), what type of Madd is present on the first syllable?",
        arabic: "قَالَ",
        options: ["Madd Asli with Alif", "Madd Muttasil", "Madd Munfasil", "No Madd"],
        correctIndex: 0,
        explanation: "'قَالَ' contains a classic Alif Madd preceded by a Fatha on the Qaaf, elongated for exactly 2 counts.",
      },
      {
        question: "In the word 'يَقُولُ' (Yaqoolu), which element acts as the Madd letter?",
        arabic: "يَقُولُ",
        options: [
          "The Waw (و) preceded by Damma on Qaaf",
          "The initial Yaa",
          "The final Laam",
          "Both Yaa and Waw together",
        ],
        correctIndex: 0,
        explanation: "The Waw following the Damma-carrying Qaaf forms Waw Madd, stretching the 'oo' sound for two counts.",
      },
      {
        question: "What occurs when a Madd letter is followed immediately by a Hamzah inside the same single word?",
        arabic: "جَآءَ  /  سُوۤءَ",
        options: [
          "It becomes Madd Muttasil elongated for 4 or 5 counts",
          "It remains 2 counts",
          "The Madd is cancelled",
          "It changes into a Sukoon",
        ],
        correctIndex: 0,
        explanation: "When a Hamzah follows a Madd letter in the same word, it becomes Connected Madd (Madd Muttasil), elongated for 4 or 5 counts.",
      },
    ],
    faqs: [
      {
        question: "How can parents teach children not to over-stretch Madd?",
        answer:
          "Use a gentle tapping rhythm on the table: tap-tap for two counts. Physical rhythm gives young children a concrete boundary so they don't drag vowels endlessly.",
      },
      {
        question: "What is Leen and how does it differ from Madd?",
        answer:
          "Huroof al-Leen are Waw or Yaa with a Sukoon preceded by a Fatha (like 'Khawf' or 'Bayt'). They are pronounced softly without natural 2-count elongation unless stopping.",
      },
      {
        question: "Why does changing vowel length alter the Quran's meaning?",
        answer:
          "In Arabic grammar, vowel length changes meaning: 'Qala' (he said) vs 'Qala' without Madd may not exist or change grammatical form. Accurate timing preserves Quranic integrity.",
      },
    ],
  },
  {
    slug: "tanween-quiz",
    title: "Tanween Quiz — Double Harakat Recognition Game",
    metaTitle: "Tanween Quiz — Double Harakat Recognition Game Online",
    description:
      "Practise Fathatain, Kasratain, and Dammatain with our free interactive Tanween quiz. Test noon-sakinah sound endings on Arabic letters with instant feedback.",
    keywords: [
      "tanween quiz",
      "double vowels arabic game",
      "fathatain kasratain dammatain quiz",
      "tanween practice noorani qaida",
      "noon sakinah tanween rules test",
      "learn tanween online free",
    ],
    summary: "Identify and pronounce double vowel endings (-an, -in, -un) with instant feedback.",
    href: `${GAMES_BASE}/tanween-quiz`,
    answerBox:
      "The Tanween quiz tests recognition of double vowel marks: Fathatain, Kasratain, and Dammatain. Students practice identifying the hidden noon-sakinah sound added to letter endings without writing an extra Noon. This free interactive game reinforces correct pronunciation, mark positions, and Izhar rules before children tackle complex Quranic verses in class.",
    seoIntro:
      "Tanween (nunation) represents a doubled vowel sign placed on the final letter of an Arabic noun, creating a silent Noon sound (-an, -in, -un). Mastering Tanween is essential because it unlocks early sentence reading and introduces primary Tajweed rules.",
    howToUse: [
      "Identify the mark position: two slashes above (Fathatain), two below (Kasratain), or two curves above (Dammatain).",
      "Mentally blend the base short vowel sound plus a clean, unwritten 'N' sound.",
      "Check whether an orthographic Alif accompanies Fathatain as a writing convention.",
      "Complete the five quiz questions to test your recognition and Tajweed awareness.",
    ],
    skillFocus: [
      "Fathatain (-an) identification and pronunciation",
      "Kasratain (-in) identification and pronunciation",
      "Dammatain (-un) identification and pronunciation",
      "Understanding the orthographic Alif with Fathatain",
    ],
    sections: [
      {
        heading: "What Tanween Actually Means in Noorani Qaida",
        body: "Tanween is phonetically defined as a Nunation: a Noon Sakinah that attaches to the end of nouns during continuous speech but is dropped when writing the letter Noon itself. Instead of spelling out the letter Noon, Arabic scribes write a second copy of the vowel symbol. When reading, the student pronounces the vowel plus the Noon sound immediately.",
        points: [
          "Fathatain: two slashes on top = 'an' sound (e.g. بً = Ban)",
          "Kasratain: two slashes below = 'in' sound (e.g. بٍ = Bin)",
          "Dammatain: two loops on top = 'un' sound (e.g. بٌ = Bun)",
          "Always produces a pure Noon Sakin sound upon reading",
        ],
      },
      {
        heading: "The Orthographic Alif Accompanying Fathatain",
        body: "Students often wonder why Fathatain is almost always accompanied by a silent Alif at the end of a word (e.g. كِتَابًا). This Alif is an orthographic carrier that facilitates stopping (Waqf) in Tajweed: when a reciter stops on Fathatain, it converts into a 2-count Alif Madd (Madd Iwadh), becoming 'Kitaabaa'.",
      },
      {
        heading: "The Four Tajweed Rules Governing Tanween and Noon Sakinah",
        body: "Because Tanween contains a hidden Noon Sakin, it is governed by four core Tajweed rules whenever it meets subsequent letters: Izhar (clear pronunciation when meeting throat letters), Idgham (merging into Ya, Ra, Meem, Lam, Waw, Noon), Iqlab (flipping into Meem before Baa), and Ikhfa (nasal concealment before 15 letters).",
      },
      {
        heading: "Avoiding the Common Nasal Dropping Error",
        body: "Beginners often forget the final 'n' sound or confuse Kasratain with regular Kasra. Regular practice with this quiz reinforces the automatic addition of the crisp Noon sound before children face connected Quranic verses.",
      },
    ],
    quizQuestions: [
      {
        question: "What is Tanween in Arabic reading and Noorani Qaida?",
        arabic: "التَّنْوِين",
        options: [
          "A doubled vowel mark that produces an unwritten Noon Sakinah sound",
          "A silent vowel letter",
          "A full stopping symbol",
          "A mark that doubles the consonant",
        ],
        correctIndex: 0,
        explanation: "Tanween consists of doubling a vowel mark to produce an ending 'N' sound without writing the actual letter Noon.",
      },
      {
        question: "What are the three forms of Tanween and their phonetic sounds?",
        arabic: "ـً   ـٍ   ـٌ",
        options: [
          "Fathatain (-an), Kasratain (-in), Dammatain (-un)",
          "Fatha (a), Kasra (i), Damma (u)",
          "Sukoon, Shaddah, and Madd",
          "Alif, Waw, and Yaa",
        ],
        correctIndex: 0,
        explanation: "The three Tanween marks are Fathatain (produces 'an'), Kasratain ('in'), and Dammatain ('un').",
      },
      {
        question: "How is the final syllable of 'كِتَابًا' pronounced during continuous reading?",
        arabic: "كِتَابًا",
        options: ["Kitaaban", "Kitaabaa", "Kitaabu", "Kitaabi"],
        correctIndex: 0,
        explanation: "With Fathatain on the Baa, the ending is read smoothly as 'Kitaaban' during continuous reading.",
      },
      {
        question: "Where is Kasratain placed relative to the Arabic letter?",
        arabic: "بٍ",
        options: [
          "Two diagonal slashes directly beneath the letter",
          "Two diagonal slashes above the letter",
          "Two loops above the letter",
          "Inside the letter's bowl",
        ],
        correctIndex: 0,
        explanation: "Kasratain consists of two parallel diagonal strokes positioned underneath the letter.",
      },
      {
        question: "When Tanween is followed by any of the six throat letters (ء ، هـ ، ع ، ح ، غ ، خ), what rule applies?",
        arabic: "عَلِيمٌ حَكِيمٌ",
        options: [
          "Izhar (pronounce the Tanween clearly without extra nasal hum)",
          "Idgham (merge the Tanween completely)",
          "Ikhfa (hide the Tanween in the nose)",
          "Iqlab (flip it into a Meem)",
        ],
        correctIndex: 0,
        explanation: "When Tanween meets a throat letter, the rule is Izhar Halqi: the Noon sound must be pronounced crisply and clearly.",
      },
    ],
    faqs: [
      {
        question: "Why is there an Alif written after Fathatain?",
        answer:
          "The Alif serves as an orthographic marker for stopping (Waqf). When pausing on Fathatain, reciters pronounce an Alif Madd (e.g. 'Aleemaa' instead of 'Aleeman').",
      },
      {
        question: "Do Kasratain and Dammatain have an Alif written after them?",
        answer:
          "No. Only Fathatain takes an orthographic Alif. Words ending in Kasratain or Dammatain stop with a Sukoon on the base consonant.",
      },
      {
        question: "At what age should children learn Tanween?",
        answer:
          "Usually around ages 5 to 7, directly after short vowels and basic joining letters are stable.",
      },
    ],
  },
  {
    slug: "sukoon-quiz",
    title: "Sukoon Quiz — Arabic Jazm Stopping Practice Game",
    metaTitle: "Sukoon Quiz — Arabic Jazm Practice Game for Kids",
    description:
      "Test Sukoon (Jazm) reading with our free interactive quiz. Learn how to stop on still Arabic consonants cleanly without bouncing or adding extra vowels.",
    keywords: [
      "sukoon quiz",
      "jazm practice online",
      "arabic sukoon test",
      "qalqalah letters quiz",
      "noorani qaida sukoon game",
      "still consonant arabic quiz",
    ],
    summary: "Master clean consonant stops and identify the 5 Qalqalah bouncing letters.",
    href: `${GAMES_BASE}/sukoon-quiz`,
    answerBox:
      "The Sukoon quiz helps learners master the Jazm symbol, which silences a consonant so it connects smoothly to the preceding vowelled letter. This activity tests stopping without adding extra vowel sounds, identifying the five Qalqalah bouncing letters, and avoiding breath breaks, building steady confidence for fluent Quranic phrase reading.",
    seoIntro:
      "Sukoon (also called Jazm) signifies the absence of any vowel mark on a consonant, indicating a still, resting sound. Because an Arabic word cannot begin with a Sukoon, every sakin letter must be locked smoothly to the vowelled letter before it.",
    howToUse: [
      "Identify the small circular or crescent-shaped Sukoon mark resting atop the consonant.",
      "Pronounce the preceding vowelled letter and lock firmly onto the sakin consonant without breathing.",
      "Check whether the letter belongs to Qutb Jad (ق ، ط ، ب ، ج ، د) for Qalqalah bouncing.",
      "Work through the 5 quiz rounds to calibrate clean, unvowelled pronunciation.",
    ],
    skillFocus: [
      "Clean consonant stops without adding extra vowel sounds",
      "The 5 Qalqalah letters (ق ، ط ، ب ، ج ، د)",
      "Connecting vowelled prefixes to sakin stems",
      "Preventing breath hesitation across word boundaries",
    ],
    sections: [
      {
        heading: "What the Sukoon Sign Represents in Quranic Orthography",
        body: "The Sukoon sign appears in printed Mushafs as a small circle (o) or a miniature head of the letter Khaa (ـۡ), representing 'Khafeef' (light/still). It tells the reciter that the consonant has no Fatha, Kasra, or Damma. The mouth moves directly to the letter's articulation point and stops the airflow or sound cleanly.",
        points: [
          "Indicates zero vowel on the consonant",
          "Cannot begin an Arabic syllable on its own",
          "Locks directly to the previous vowelled sound",
          "Forms the foundation for reading multi-letter words",
        ],
      },
      {
        heading: "The Five Qalqalah Letters: When to Bounce and When Not To",
        body: "When certain letters carry a Sukoon, their articulation point closes so tightly that the sound is trapped. To release the trapped sound cleanly, Tajweed requires an echoing bounce called Qalqalah. This rule applies ONLY to five letters collected in the mnemonic phrase 'Qutb Jad' (ق ، ط ، ب ، ج ، د). If a student bounces other letters like Seen or Laam, it is a serious error.",
      },
      {
        heading: "The Number One Beginner Error: The Ghost Vowel",
        body: "Beginners reading Sukoon frequently introduce a tiny ghost vowel (called 'Saktah' or accidental Fatha) after the consonant, saying 'Qul-a' instead of 'Qul'. This quiz tests whether learners can detect and eliminate this trailing sound, maintaining crisp phonetic control.",
      },
      {
        heading: "Transitioning from Sukoon to Connected Reading",
        body: "Mastery of Sukoon enables children to read verbs, prepositions, and nouns containing multiple syllables. It is the single most important stepping stone between single letters and reading full Quranic Ayahs.",
      },
    ],
    quizQuestions: [
      {
        question: "What does the Sukoon (Jazm) symbol indicate when placed on an Arabic letter?",
        arabic: "سُكُون  /  جَزْم",
        options: [
          "The absence of a vowel, meaning the consonant is read still and connected",
          "That the consonant is doubled",
          "A long 6-count vowel",
          "A silent letter that must be skipped",
        ],
        correctIndex: 0,
        explanation: "Sukoon indicates that the letter carries no vowel and rests still, locking onto the preceding vowelled letter.",
      },
      {
        question: "Can an authentic Arabic word ever begin with a letter carrying a Sukoon?",
        arabic: "بِدَايَةُ الكَلِمَة",
        options: [
          "No, an Arabic word must always begin with a vowelled letter",
          "Yes, any letter can start with Sukoon",
          "Only in Surah Al-Fatiha",
          "Only when followed by Alif",
        ],
        correctIndex: 0,
        explanation: "In Arabic phonology, words never begin with a consonant carrying a Sukoon; they always begin with a vowelled consonant or Hamzatul Wasl.",
      },
      {
        question: "Which five letters produce an echoing bounce (Qalqalah) when they carry a Sukoon?",
        arabic: "حُرُوفُ القَلْقَلَة",
        options: [
          "ق ، ط ، ب ، ج ، د (Qutb Jad)",
          "ت ، ث ، د ، ذ ، ر",
          "ء ، هـ ، ع ، ح ، خ",
          "ك ، ل ، م ، ن ، و",
        ],
        correctIndex: 0,
        explanation: "The five Qalqalah letters are summarized in the mnemonic 'Qutb Jad': Qaaf, Taa, Baa, Jeem, and Daal.",
      },
      {
        question: "In the word 'قُلْ' (Qul), how should the Laam with Sukoon be articulated?",
        arabic: "قُلْ",
        options: [
          "Close the tongue tip cleanly on Laam without adding any bounce or trailing vowel",
          "Bounce the Laam loudly like a Qalqalah letter",
          "Stretch the Laam for two beats",
          "Skip the Laam entirely",
        ],
        correctIndex: 0,
        explanation: "Laam is not a Qalqalah letter. The tongue tip touches the upper palate and stops the sound cleanly without an echo.",
      },
      {
        question: "What common mistake occurs when beginner students encounter non-Qalqalah letters with Sukoon?",
        arabic: "أَنْعَمْتَ",
        options: [
          "Accidentally bouncing the consonant or adding a slight vowel",
          "Stretching the letter for 4 counts",
          "Whispering the entire word",
          "Reversing the letters",
        ],
        correctIndex: 0,
        explanation: "Beginners often accidentally bounce letters like Noon or Meem with Sukoon, adding an unwanted vowel sound (Tawleed al-Harakah).",
      },
    ],
    faqs: [
      {
        question: "Why do some copies of the Quran use a circle for Sukoon and others a hook?",
        answer:
          "The small circular symbol is common in South Asian (Indo-Pak) scripts. In the Madinah Mushaf (Uthmani script), the Sukoon is shaped like a small headless Khaa (ـۡ). Both represent the same stillness.",
      },
      {
        question: "How do I teach my child to bounce Qalqalah letters properly?",
        answer:
          "Model it like a bouncing rubber ball: tap the articulation point and release immediately without opening the mouth into a Fatha or Kasra.",
      },
      {
        question: "What is the difference between Sukoon and Shaddah?",
        answer:
          "Sukoon is a single still consonant. Shaddah represents two consonants combined together: the first still (with Sukoon) and the second vowelled.",
      },
    ],
  },
  {
    slug: "shaddah-quiz",
    title: "Shaddah Quiz — Doubled Arabic Letters Practice Game",
    metaTitle: "Shaddah Quiz — Doubled Letter Practice Game for Kids",
    description:
      "Master Tashdeed with this free interactive Shaddah quiz. Test how to hold and connect doubled Arabic consonants with short vowels through fun quiz rounds.",
    keywords: [
      "shaddah quiz",
      "tashdeed practice game",
      "doubled letters arabic quiz",
      "noorani qaida shaddah test",
      "ghunnah noon meem mushaddad",
      "arabic consonant doubling game",
    ],
    summary: "Test Tashdeed recognition, hold-and-release mechanics, and mandatory 2-count Ghunnah.",
    href: `${GAMES_BASE}/shaddah-quiz`,
    answerBox:
      "The Shaddah quiz tests your understanding of doubled Arabic consonants marked with Tashdeed. Players practice identifying the hidden two-letter structure—first still with Sukoon, second vowelled—and holding the articulation point firmly. It also covers mandatory two-count Ghunnah on doubled Noon and Meem, preventing accidental letter omissions during reading.",
    seoIntro:
      "Shaddah (also known as Tashdeed) is shaped like a miniature letter 'Seen' (ّ) resting above an Arabic letter. It represents two copies of the same letter fused together. Learning how to hold and pronounce Shaddah with appropriate emphasis is a benchmark of competent Quranic recitation.",
    howToUse: [
      "Look for the W-shaped Tashdeed mark resting atop the target consonant.",
      "Deconstruct the letter mentally into two parts: Letter 1 (Sukoon) + Letter 2 (Vowelled).",
      "Press into the articulation point firmly, pause momentarily, then release into the vowel.",
      "If the letter is Noon (نّ) or Meem (مّ), hold an authentic 2-count nasal Ghunnah.",
    ],
    skillFocus: [
      "Deconstructing Tashdeed into Sukoon + Vowel components",
      "Firm hold-and-release articulation technique",
      "Mandatory 2-count Ghunnah on Noon and Meem Mushaddad",
      "Distinguishing Shaddah from Sukoon and Tanween",
    ],
    sections: [
      {
        heading: "The Internal Structure of Every Shaddah Letter",
        body: "To read a Shaddah correctly, you must understand its anatomy. When you see 'رَبَّ' (Rabba), it is phonetically composed of 'رَبْ' (Rab with a Sukoon) immediately linked to 'بَ' (Ba with a Fatha). The voice presses into the lips for the Baa, pauses with muscular tension, and then releases into the Fatha.",
        points: [
          "Part 1: Consonant with Sukoon (still)",
          "Part 2: Consonant with Harakah (Fatha, Kasra, or Damma)",
          "Combined with a single stroke: Tashdeed mark",
          "Never skip or soften the initial muscular press",
        ],
      },
      {
        heading: "Noon and Meem Mushaddadah: The Mandatory Ghunnah Rule",
        body: "Whenever the letters Noon (نّ) or Meem (مّ) carry a Shaddah, Tajweed rules mandate the most complete level of nasal humming (Akmal ma takoon al-Ghunnah), held for two full counts. Examples include 'إِنَّ' (Inna) and 'ثُمَّ' (Thumma). Omitting this Ghunnah is a clear recitation defect.",
      },
      {
        heading: "Why Rushing Over a Shaddah Damages Quranic Meaning",
        body: "In Arabic, dropping a Shaddah drops an entire letter from the sacred text and often inverts the meaning completely. For instance, 'عَلِمَ' ('Alima) means 'he knew', whereas 'عَلَّمَ' ('Allama) with a Shaddah means 'he taught'. This quiz teaches children to respect the weight and gravity of every doubled consonant.",
      },
      {
        heading: "Combining Shaddah with Harakat and Tanween",
        body: "A Shaddah can carry any of the three short vowels (Shaddah with Fatha, Shaddah with Kasra underneath, Shaddah with Damma) or even Tanween (Shaddah with Fathatain). Practising mixed combinations ensures flexible decoding in real Quranic pages.",
      },
    ],
    quizQuestions: [
      {
        question: "What does a Shaddah (Tashdeed) mark represent on an Arabic letter?",
        arabic: "الشَّدَّة  /  التَّشْدِيد",
        options: [
          "Two copies of the same letter: the first with Sukoon, the second vowelled",
          "A single letter read very softly",
          "A long 6-count vowel",
          "A letter that should be read backwards",
        ],
        correctIndex: 0,
        explanation: "Shaddah indicates a doubled letter: the first letter is still (with Sukoon) and the second carries a vowel.",
      },
      {
        question: "How should a reader physically articulate a letter carrying a Shaddah?",
        arabic: "رَبِّ",
        options: [
          "Hold the articulation point firmly with emphasis before releasing into the vowel",
          "Read the letter twice with a long breath break between them",
          "Skip the first letter completely",
          "Whisper the letter",
        ],
        correctIndex: 0,
        explanation: "The reader presses firmly on the articulation point for the sakin portion, then releases smoothly into the vowel.",
      },
      {
        question: "When Noon (نّ) or Meem (مّ) carries a Shaddah, what special Tajweed rule is mandatory?",
        arabic: "إِنَّ  /  ثُمَّ",
        options: [
          "Mandatory Ghunnah (nasal resonance) held for 2 full counts",
          "A loud Qalqalah bouncing sound",
          "Rapid reading without any pause",
          "Whispered sound (Hams)",
        ],
        correctIndex: 0,
        explanation: "Noon and Meem with Shaddah require mandatory 2-count Ghunnah through the nasal cavity (Akmal Ghunnah).",
      },
      {
        question: "In the word 'رَبِّ' (Rabbi), how is the doubled Baa constructed phonetically?",
        arabic: "رَبِّ",
        options: [
          "First Baa has Sukoon (رَبْ) and second Baa has Kasra (بِ)",
          "Two Baas both carrying Kasra",
          "One Baa stretched for 4 beats",
          "A Baa followed by an Alif",
        ],
        correctIndex: 0,
        explanation: "'رَبِّ' is deconstructed into 'رَبْ' (Baa with Sukoon) + 'بِ' (Baa with Kasra).",
      },
      {
        question: "What is the danger of rushing past a Shaddah without giving it its proper emphasis?",
        arabic: "عَلَمَ  vs  عَلَّمَ",
        options: [
          "It drops an entire letter from the Quranic word and can alter its meaning",
          "It makes recitation sound more poetic",
          "It changes the font style of the text",
          "There is no consequence",
        ],
        correctIndex: 0,
        explanation: "Omitting a Shaddah drops a consonant from the word, which can alter grammatical form and sacred meaning.",
      },
    ],
    faqs: [
      {
        question: "Where is the Kasra written when a letter has a Shaddah?",
        answer:
          "In many Arabic fonts, the Kasra is placed directly underneath the Shaddah symbol (above the letter), rather than below the letter itself. If it sits under the Shaddah teeth, it is a Kasra.",
      },
      {
        question: "Can a letter have both a Shaddah and a Madd?",
        answer:
          "Yes! This creates Heavy Compulsory Madd (Madd Laazim Kalimi Muthaqqal), as in 'الضَّالِّينَ', which requires a full 6-count elongation.",
      },
      {
        question: "How can parents tell if their child is skipping Shaddah at home?",
        answer:
          "Listen for flat, unstressed reading. If 'Inna' sounds like 'Ina' with no lingering hum, the child is skipping the Shaddah.",
      },
    ],
  },
  {
    slug: "joining-letters-quiz",
    title: "Joining Letters Quiz — Arabic Connected Forms Game",
    metaTitle: "Joining Letters Quiz — Arabic Connected Forms Game",
    description:
      "Test recognition of initial, medial, and final Arabic letter forms. Interactive joining letters quiz helps kids transition from single letters to words.",
    keywords: [
      "joining letters quiz",
      "arabic connected letters game",
      "initial medial final arabic forms test",
      "noorani qaida joining quiz",
      "how arabic letters connect quiz",
      "arabic cursive letters practice",
    ],
    summary: "Recognise initial, medial, and final connected letter shapes across cursive Arabic words.",
    href: `${GAMES_BASE}/joining-letters-quiz`,
    answerBox:
      "The joining letters quiz tests how well students identify Arabic letters in their initial, medial, and final connected forms. Because Arabic is a cursive script where letters alter shape to join neighbors, this practice game trains children to track dots and core letter stems across connected words without getting confused.",
    seoIntro:
      "Moving from isolated alphabet charts to connected words is the biggest leap in Noorani Qaida. Because Arabic letters change appearance depending on whether they sit at the start, middle, or end of a word, learners need systematic visual practice to identify letters by their permanent stems and dot patterns.",
    howToUse: [
      "Inspect the core letter body and count the dots (above, below, one, two, or three).",
      "Check whether the letter connects from the right side only or from both sides.",
      "Identify the 6 non-connecting letters that never join to the left.",
      "Complete the 5 quiz challenges to master connected letter recognition.",
    ],
    skillFocus: [
      "Initial (beginning), medial (middle), and final (end) letter shapes",
      "The 6 non-connector 'friendly stubborn' letters (ا ، د ، ذ ، ر ، ز ، و)",
      "Dot tracking as the primary identifier across changing letter bodies",
      "Identifying dramatic shape-shifters like Haa (هـ) and Ayn (ع)",
    ],
    sections: [
      {
        heading: "Why Arabic Script Connects and How Shapes Alter",
        body: "Arabic is inherently cursive: letters join along a baseline from right to left. To facilitate fluid writing, the wide ending 'tail' or 'bowl' of letters like Baa, Seen, and Saad is trimmed off when they appear at the beginning or middle of a word, leaving only a small tooth or loop. The full tail reappears only when the letter is in the final position.",
        points: [
          "Initial form: front head/stem + connecting arm to the left",
          "Medial form: connecting arm from right + stem + arm to left",
          "Final form: connecting arm from right + full original letter tail",
          "Isolated form: standalone character with full proportions",
        ],
      },
      {
        heading: "The Six Non-Connecting Letters (Al-Huroof an-Naafiyah)",
        body: "Six Arabic letters connect to preceding letters from the right, but NEVER connect to following letters on the left: Alif (ا), Daal (د), Dhaal (ذ), Raa (ر), Zay (ز), and Waw (و). After any of these six letters, the subsequent letter must begin in its initial or isolated form, creating a small visual gap inside the word.",
      },
      {
        heading: "Relying on Dots and Stems Rather Than Overall Width",
        body: "Letters in the same family share identical connected shapes. For example, Baa (ب), Taa (ت), and Thaa (ث) look identical when joined medially (ـبـ ، ـتـ ، ـثـ); only their dot count and position differentiate them. Training children to scan for dots prevents guessing.",
      },
      {
        heading: "The Chameleon Letters: Haa, Ayn, and Kaaf",
        body: "A few letters change shape drastically: Haa begins like a loop (هـ), turns into a butterfly or crown medially (ـهـ), and ends like a teardrop (ـه). Ayn is open initially (عـ) but closed and filled medially (ـعـ). Kaaf transforms from its isolated shape (ك) into a dynamic angled stroke (كـ). This quiz specifically tests these chameleon transformations.",
      },
    ],
    quizQuestions: [
      {
        question: "How many letters in the Arabic alphabet are 'non-connectors' that never link to the letter following them?",
        arabic: "الحُرُوفُ الرَّافِضَة",
        options: [
          "6 letters: Alif, Daal, Dhaal, Raa, Zay, Waw (ا ، د ، ذ ، ر ، ز ، و)",
          "3 letters: Alif, Waw, Yaa",
          "8 letters",
          "All Arabic letters connect from both sides",
        ],
        correctIndex: 0,
        explanation: "There are 6 non-connecting letters: Alif, Daal, Dhaal, Raa, Zay, and Waw. They connect from the right but never to the left.",
      },
      {
        question: "What happens to the wide 'boat' tail of Baa (ب), Taa (ت), and Thaa (ث) when joining at the start of a word?",
        arabic: "بـ  ،  تـ  ،  ثـ",
        options: [
          "The tail is cut off, retaining only a vertical tooth and the dots",
          "The dots move to the opposite side",
          "They turn into circles",
          "They remain completely identical to isolated form",
        ],
        correctIndex: 0,
        explanation: "When joining initially or medially, the boat tail is truncated into a simple tooth, with dots acting as the sole differentiator.",
      },
      {
        question: "In the connected word 'بَيْت' (Bayt), what form does the middle letter Yaa (ـيـ) take?",
        arabic: "بَيْت",
        options: [
          "Medial form with connecting arms on both sides and two dots below",
          "Final isolated form",
          "Initial form with tail",
          "Independent form",
        ],
        correctIndex: 0,
        explanation: "Yaa sits in the medial position, connecting to Baa on the right and Taa on the left, identified by its two dots below.",
      },
      {
        question: "Which letter transforms into a two-looped 'butterfly' or crown shape when joined in the medial position (ـهـ)?",
        arabic: "ـهـ",
        options: ["Haa (هـ)", "Jeem (ج)", "Ayn (ع)", "Meem (م)"],
        correctIndex: 0,
        explanation: "The letter Haa (هـ) takes the distinctive double-looped medial shape (ـهـ) when connected from both sides.",
      },
      {
        question: "Why do Arabic letters change shape when joined into words?",
        arabic: "رَسْمُ القُرْآن",
        options: [
          "Arabic is an organic cursive script written with continuous flowing ligatures",
          "Only for decorative artistic purposes",
          "Because modern printers altered them",
          "To show which vowels are attached",
        ],
        correctIndex: 0,
        explanation: "Arabic has always been a cursive script written right-to-left, where letters naturally flow into one another via ligatures.",
      },
    ],
    faqs: [
      {
        question: "How long does it take for a child to master joining letters?",
        answer:
          "With 5 minutes of focused daily practice, most young learners master joining letters within 2 to 4 weeks.",
      },
      {
        question: "What is the best way to practice joining letters at home?",
        answer:
          "Have the child trace words with their finger, identify where each letter begins and ends, and name the dot counts out loud.",
      },
      {
        question: "Does the NoorPath curriculum include joining letter worksheets?",
        answer:
          "Yes! We offer free printable tracing sheets and lesson modules specifically dedicated to letter connections.",
      },
    ],
  },
  {
    slug: "word-reading-quiz",
    title: "Word Reading Quiz — Noorani Qaida Blending Practice",
    metaTitle: "Word Reading Quiz — Noorani Qaida Blending Practice Online",
    description:
      "Blend short vowels, sukoon, and joining shapes into complete Quranic words. Free interactive word reading quiz with instant feedback for beginner readers.",
    keywords: [
      "word reading quiz",
      "noorani qaida blending test",
      "arabic word decoding quiz",
      "quran word reading practice",
      "blend arabic letters quiz",
      "beginner quran reading game",
    ],
    summary: "Blend short vowels, sukoon, and joining shapes into complete Quranic words.",
    href: `${GAMES_BASE}/word-reading-quiz`,
    answerBox:
      "The word reading quiz tests beginner blending skills across complete three-letter and four-letter Quranic words. Students combine consonant shapes, short vowels, Sukoon, and long Madd into smooth words without stumbling or guessing. Five interactive questions reinforce systematic left-to-right decoding habits before learners begin reciting Juz Amma verses with teachers.",
    seoIntro:
      "Word reading is the synthesis stage of Noorani Qaida. Here, individual letters, vowel marks, and stopping signs come together as coherent Quranic vocabulary. This quiz evaluates whether a student can decode words methodically rather than relying on guesswork.",
    howToUse: [
      "Scan the word from right to left, identifying Letter 1 and its vowel.",
      "Blend Syllable 1 with Syllable 2 before attempting the third letter.",
      "Observe any Sukoon or Shaddah marks that dictate where the voice rests or doubles.",
      "Select the correct transliterated pronunciation or meaning from the quiz choices.",
    ],
    skillFocus: [
      "Step-by-step phonics blending (Hija / Rawan)",
      "Three-letter words with simple Harakat (e.g. Kataba, Dakhala)",
      "Words with mixed Sukoon (e.g. Ya'lamu, Khalaqna)",
      "Eliminating guessing habits and building fluent decoding pace",
    ],
    sections: [
      {
        heading: "The Classical Method: Hija (Spelling) vs Rawan (Fluency)",
        body: "Historically, students learn to read words through two phases: Hija (deconstructing each letter and vowel: Kaaf-Fatha-Ka, Taa-Fatha-Ta = Kata, Baa-Fatha-Ba = Kataba) and Rawan (direct fluid reading: Kataba). The goal of Noorani Qaida is to transition the student from laborious spelling into immediate recognition.",
        points: [
          "Phase 1: Spelling out letter + mark individually",
          "Phase 2: Blending first two sounds together",
          "Phase 3: Attaching final syllable seamlessly",
          "Phase 4: Direct, confident whole-word recognition",
        ],
      },
      {
        heading: "Blending Syllables Without Pausing Breath",
        body: "A frequent struggle occurs when children pause their breath between syllables, pronouncing 'Ka... ta... ba' as three disjointed events. To achieve true Quranic fluency, teach your child to hold a continuous gentle exhalation as the mouth transitions between articulation points.",
      },
      {
        heading: "Navigating Mixed Words: Harakat, Sukoon, and Madd",
        body: "As words progress from simple three-vowel patterns into combinations with Sukoon and Madd (like 'يَعْلَمُونَ' - Ya'lamoon), children must adjust syllable pacing. The first part is short, the middle locks firmly on Ayn with Sukoon, and the end extends into a 2-count Waw Madd.",
      },
      {
        heading: "Building Readiness for Surah Al-Fatiha and Juz Amma",
        body: "Scoring 100% on this word reading quiz is an excellent indicator that your child has graduated from foundational mechanics and is ready to start reading continuous verses in the Holy Quran.",
      },
    ],
    quizQuestions: [
      {
        question: "What is the systematic step-by-step blending order when reading a new word in Noorani Qaida?",
        arabic: "طَرِيقَةُ التَّهَجِّي",
        options: [
          "Identify letter -> identify vowel -> blend first two -> attach third syllable",
          "Guess the word from memory based on its first letter",
          "Read English transliteration from left to right",
          "Only read the vowels first, then add consonants",
        ],
        correctIndex: 0,
        explanation: "Systematic decoding requires identifying letter 1 + vowel, blending with letter 2, and then attaching subsequent syllables.",
      },
      {
        question: "Look at the word 'كَتَبَ' (Kataba): what vowels sit on the three letters?",
        arabic: "كَتَبَ",
        options: [
          "Three Fathas (Ka - Ta - Ba)",
          "Fatha, Kasra, and Damma",
          "Kasra, Fatha, and Sukoon",
          "Two Dammas and one Fatha",
        ],
        correctIndex: 0,
        explanation: "'كَتَبَ' consists of three light consonants each carrying a short Fatha vowel, read as 'Ka-ta-ba'.",
      },
      {
        question: "In the word 'خَلَقَ' (Khalaqa), which letters are naturally heavy (Mufakhkham)?",
        arabic: "خَلَقَ",
        options: [
          "Both Khaa (خ) and Qaaf (ق)",
          "Only the middle Laam",
          "Only the initial Khaa",
          "None, all are light",
        ],
        correctIndex: 0,
        explanation: "Both Khaa (خ) and Qaaf (ق) are heavy letters that fill the mouth, while the middle Laam remains light.",
      },
      {
        question: "When blending a word containing Sukoon like 'يَعْلَمُ' (Ya'lamu), how should the breath behave?",
        arabic: "يَعْلَمُ",
        options: [
          "Lock the Ayn (عْ) smoothly to the Yaa (يَـ) on a continuous breath without stopping",
          "Stop breathing completely for 3 seconds on the Ayn",
          "Inhale on the Laam",
          "Skip the Ayn",
        ],
        correctIndex: 0,
        explanation: "The reader smoothly locks onto the Ayn with Sukoon without breaking breath, then transitions into 'La-mu'.",
      },
      {
        question: "What is the recommended parent strategy if a child hesitates over an unfamiliar 4-letter Quranic word?",
        arabic: "تَدْرِيبُ القِرَاءَة",
        options: [
          "Break it into two 2-letter syllables, blend each, then combine them smoothly",
          "Shout the word immediately",
          "Skip the difficult word entirely",
          "Force them to write it 20 times",
        ],
        correctIndex: 0,
        explanation: "Chunking an unfamiliar word into smaller two-letter syllables reduces cognitive load and fosters independent reading skills.",
      },
    ],
    faqs: [
      {
        question: "How many words should a beginner read per day?",
        answer:
          "Quality over quantity: 5 to 10 words read with accurate vowels and crisp makharij is far better than rushing through three pages with mistakes.",
      },
      {
        question: "What should we do if my child guesses words from visual memory?",
        answer:
          "Cover the rest of the word with a small card, revealing only one letter at a time to force genuine phonetic decoding.",
      },
      {
        question: "When is a child ready to start reading the Mushaf directly?",
        answer:
          "When they can read unfamiliar multi-syllable words with Sukoon, Shaddah, and Madd accurately without needing prompts from an adult.",
      },
    ],
  },
];
