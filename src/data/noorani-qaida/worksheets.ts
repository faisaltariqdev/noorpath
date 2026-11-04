export interface QaidaWorksheetMeta {
  slug: string;
  title: string;
  metaTitle: string;
  description: string;
  keywords: string[];
  summary: string;
  href: string;
  answerBox: string;
  seoIntro: string;
  printableFeatures: string[];
  instructionalSections: Array<{
    heading: string;
    body: string;
    points?: string[];
  }>;
  worksheetExercises: Array<{
    title: string;
    instruction: string;
    items: Array<{
      arabic: string;
      label?: string;
      transliteration?: string;
    }>;
  }>;
  faqs: Array<{ question: string; answer: string }>;
}

const WORKSHEETS_BASE = "/noorani-qaida/worksheets";

export const QAIDA_WORKSHEETS: QaidaWorksheetMeta[] = [
  {
    slug: "harakat-worksheet",
    title: "Noorani Qaida Harakat Worksheet — Free Printable PDF",
    metaTitle: "Noorani Qaida Harakat Worksheet — Free Printable PDF",
    description:
      "Free printable Harakat worksheet for kids learning Fatha, Kasra, and Damma. Includes tracing grids, matching drills, and short vowel reading exercises.",
    keywords: [
      "noorani qaida harakat worksheet",
      "harakat practice sheet pdf",
      "fatha kasra damma worksheet",
      "arabic short vowels printable",
      "learn harakat worksheet kids",
      "free islamic worksheets pdf",
    ],
    summary: "Printable offline drills for short vowels, matching exercises, and reading practice.",
    href: `${WORKSHEETS_BASE}/harakat-worksheet`,
    answerBox:
      "This Noorani Qaida Harakat worksheet provides structured offline writing and recognition exercises for Fatha, Kasra, and Damma. Children trace short vowel strokes, match vowel names to Arabic signs, and read two-letter combinations. Download the free printable PDF to reinforce daily madrasah lessons with five minutes of focused screen-free practice at home.",
    seoIntro:
      "Short vowels (Harakat) are the heartbeat of Arabic reading. While digital screens build quick recall, physically tracing and identifying vowel marks on paper activates fine motor memory. This free printable worksheet equips parents and teachers with structured drills for Fatha, Kasra, and Damma.",
    printableFeatures: [
      "Standard A4 print-ready layout with high-contrast Arabic font",
      "Stroke direction arrows for upper Fatha, lower Kasra, and curled Damma",
      "Letter-matching column linking vowel marks to phonetic names",
      "Read-and-tick completion box for daily home study tracking",
    ],
    instructionalSections: [
      {
        heading: "The Three Harakat: Position, Direction, and Sound",
        body: "Harakat must be kept strictly short—one quick beat of the voice. A Fatha (ـَ) is a single diagonal slash angled downward from right to left resting above the consonant, producing a clean 'a' sound. A Kasra (ـِ) is an identical diagonal slash placed beneath the consonant, giving a crisp 'i' sound. A Damma (ـُ) resembles a miniature letter Waw resting above the consonant, yielding a rounded 'u' sound without lip stretching.",
        points: [
          "Fatha sits on top: opens mouth slightly vertically",
          "Kasra sits below: lowers the lower jaw gently",
          "Damma sits on top: rounds lips forward like an 'O'",
          "Duration must never exceed one single beat",
        ],
      },
      {
        heading: "Why Physical Tracing Beats Passive Screen Tapping",
        body: "Writing by hand forces a young child to visually slow down and inspect where the mark sits relative to the baseline. Students who only tap digital screens often confuse Kasra with Fatha when tired. Drawing the stroke from top-right to bottom-left cements spatial orientation and prepares children for cursive Arabic handwriting.",
      },
      {
        heading: "Step-by-Step Lesson Protocol for Home Practice",
        body: "Spend no more than seven minutes per worksheet session. First, have your child point to the vowel and name its position ('above' or 'below'). Second, trace the five guided examples along the dotted lines. Third, read the two-letter vowelled combinations aloud to confirm that the vowel remains short and does not stretch into Madd.",
      },
      {
        heading: "How to Prevent the 'Vowel-Stretching' Trap",
        body: "If your child reads 'بَ' (Ba) as 'Baaa', have them tap the desk once with their index finger as they speak. The tap provides an auditory and tactile stop boundary. If they continue dragging vowels, review our interactive Harakat quiz or consult a live tutor for a five-minute pronunciation check.",
      },
    ],
    worksheetExercises: [
      {
        title: "Section 1: Trace the Short Vowel Marks",
        instruction: "Trace the Harakat along the dotted lines from right to left, observing baseline alignment:",
        items: [
          { arabic: "بَ", label: "Fatha (above)", transliteration: "Ba" },
          { arabic: "تِ", label: "Kasra (below)", transliteration: "Ti" },
          { arabic: "ثُ", label: "Damma (above)", transliteration: "Thu" },
          { arabic: "جَ", label: "Fatha (above)", transliteration: "Ja" },
          { arabic: "حِ", label: "Kasra (below)", transliteration: "Hi" },
          { arabic: "خُ", label: "Damma (above)", transliteration: "Khu" },
        ],
      },
      {
        title: "Section 2: Two-Letter Reading Grid",
        instruction: "Read each pair aloud cleanly in one breath without stretching:",
        items: [
          { arabic: "دَرَ", transliteration: "Da - Ra" },
          { arabic: "زِرِ", transliteration: "Zi - Ri" },
          { arabic: "سُشُ", transliteration: "Su - Shu" },
          { arabic: "صَضَ", transliteration: "Sa - Da" },
        ],
      },
    ],
    faqs: [
      {
        question: "How do I print this worksheet cleanly at home?",
        answer:
          "Click the 'Print Worksheet' button on this page, set your printer to standard A4 or US Letter, select 'Fit to Page', and ensure black-and-white or color printing is enabled.",
      },
      {
        question: "What age is this Harakat worksheet suitable for?",
        answer:
          "It is designed for children ages 4 to 9 who know the 28 basic Arabic letter shapes and are starting short vowel lessons in Noorani Qaida.",
      },
      {
        question: "Can teachers photocopy this worksheet for madrasah classes?",
        answer:
          "Yes! This worksheet is 100% free for educational use by parents, homeschoolers, and Islamic school teachers.",
      },
    ],
  },
  {
    slug: "arabic-letters-tracing",
    title: "Arabic Letters Tracing Worksheet — Printable Alphabet PDF",
    metaTitle: "Arabic Letters Tracing Worksheet — Printable Alphabet PDF",
    description:
      "Download free printable Arabic alphabet tracing worksheets for kids. Practice stroke order, dot placement, and letter shapes for all 28 Arabic letters.",
    keywords: [
      "arabic letters tracing worksheet",
      "arabic alphabet tracing pdf",
      "free arabic handwriting practice",
      "trace arabic letters for kids",
      "noorani qaida letters tracing",
      "arabic alphabet printable sheets",
    ],
    summary: "Free printable handwriting practice for all 28 Arabic letters with stroke arrows.",
    href: `${WORKSHEETS_BASE}/arabic-letters-tracing`,
    answerBox:
      "The Arabic letters tracing worksheet offers stroke-by-stroke handwriting practice for all twenty-eight Arabic alphabet characters. Guided arrows show directional flow, proper baseline alignment, and accurate dot positioning for similar letter families. Print this free PDF activity sheet to build muscle memory and letter shape recognition before children begin joining letters.",
    seoIntro:
      "Writing Arabic letters from right to left builds a cognitive map of the alphabet that reading alone cannot match. This free printable tracing worksheet covers all 28 Arabic letters with dotted guideline grids, directional arrows, and dot-placement checkpoints.",
    printableFeatures: [
      "Comprehensive 28-letter coverage arranged in pedagogical letter families",
      "Right-to-left directional arrows indicating authentic Arabic pen strokes",
      "Distinct dotted guidelines showing letters that sit on or drop below the baseline",
      "Child-friendly large cell dimensions suitable for pencils and crayons",
    ],
    instructionalSections: [
      {
        heading: "Mastering the Right-to-Left Flow of Arabic Handwriting",
        body: "Unlike Latin alphabets which flow left to right, Arabic flows right to left. Children transitioning from English school frequently attempt to draw Arabic letters backwards—starting from the left tail. Guided tracing ensures children learn to start from the top-right stroke, flow down to the baseline, and curve upward into the finishing bowl.",
        points: [
          "Always start from the rightmost point of the letter",
          "Follow the curve down to the baseline",
          "Add dots and accents only after completing the main letter body",
          "Maintain light, steady pencil pressure",
        ],
      },
      {
        heading: "Baseline Discipline: Which Letters Drop Below the Line?",
        body: "A key aspect of Arabic calligraphy is baseline discipline. Letters like Alif (ا), Baa (ب), Taa (ت), and Kaaf (ك) sit squarely on the horizontal line. In contrast, letters like Raa (ر), Zay (ز), Meem (م), and Waw (و) plunge their tails below the baseline. Our tracing grids feature an explicit dashed baseline so children learn exact proportions.",
      },
      {
        heading: "Dot Placement and Family Discrimination",
        body: "Eighteen of the 28 Arabic letters share basic body frames with other letters, differing solely by their dot count. Baa has one dot below; Taa has two dots above; Thaa has three dots above. Tracing exercises prompt the student to vocalize the dot count as they draw, solidifying letter recognition.",
      },
      {
        heading: "Integrating Tracing with Oral Reading Practice",
        body: "As your child traces each letter, have them say its authentic Arabic name (e.g. 'Jeeeeem', not 'Ja'). This pairing of visual motor action with auditory vocalization helps letter names stick in long-term memory.",
      },
    ],
    worksheetExercises: [
      {
        title: "Section 1: The Boat Family (Baa, Taa, Thaa)",
        instruction: "Trace the wide bowl along the baseline, then carefully place the dots in their exact positions:",
        items: [
          { arabic: "ب", label: "Baa (1 dot below)", transliteration: "Baa" },
          { arabic: "ت", label: "Taa (2 dots above)", transliteration: "Taa" },
          { arabic: "ث", label: "Thaa (3 dots above)", transliteration: "Thaa" },
          { arabic: "ن", label: "Noon (deep bowl, 1 dot inside)", transliteration: "Noon" },
        ],
      },
      {
        title: "Section 2: The Deep Throat Family (Jeem, Haa, Khaa)",
        instruction: "Trace the horizontal crown right-to-left, then curve the wide semicircular stomach below the baseline:",
        items: [
          { arabic: "ج", label: "Jeem (1 dot inside)", transliteration: "Jeem" },
          { arabic: "ح", label: "Haa (no dots, clean)", transliteration: "Haa" },
          { arabic: "خ", label: "Khaa (1 dot above)", transliteration: "Khaa" },
          { arabic: "ع", label: "Ayn (small head, wide stomach)", transliteration: "Ayn" },
        ],
      },
    ],
    faqs: [
      {
        question: "Should a child learn to write letters before learning to read them?",
        answer:
          "Recognition should always precede writing. Once a child can point to a letter upon hearing its sound, tracing accelerates retention and deepens fine motor control.",
      },
      {
        question: "What writing utensil is best for beginner Arabic tracing?",
        answer:
          "A triangular grip pencil or standard HB pencil is ideal. Avoid thin ballpoint pens, which slip on paper and encourage poor finger posture.",
      },
      {
        question: "How many letters should we trace in one sitting?",
        answer:
          "We recommend 3 to 5 letters per session. Quality and neatness matter far more than rushing through the entire alphabet at once.",
      },
    ],
  },
  {
    slug: "madd-worksheet",
    title: "Madd Letters Worksheet — Free Printable Noorani Qaida PDF",
    metaTitle: "Madd Letters Worksheet — Free Printable Noorani Qaida PDF",
    description:
      "Printable Noorani Qaida Madd worksheet covering Alif, Waw, and Yaa long vowels. Features 2-count elongation exercises, circling drills, and reading prompts.",
    keywords: [
      "madd worksheet",
      "noorani qaida madd printable",
      "arabic long vowels worksheet pdf",
      "alif madd waw madd yaa madd exercises",
      "tajweed madd practice sheet",
      "madd asli worksheet kids",
    ],
    summary: "Printable 2-count long vowel practice for Alif, Waw, and Yaa elongation rules.",
    href: `${WORKSHEETS_BASE}/madd-worksheet`,
    answerBox:
      "The Madd letters worksheet provides printable practice drills for distinguishing natural two-count long vowels from short Harakat. Students identify Alif, Waw, and Yaa elongation patterns, circle correct Madd examples in Quranic words, and practice reading pairs aloud. Download this free PDF to establish consistent vowel duration habits during home study.",
    seoIntro:
      "Distinguishing a quick short vowel from an elongated long vowel is among the most important skills in Quranic recitation. This free printable Madd worksheet trains children to identify the three Madd letters, measure two rhythmic counts accurately, and circle elongation patterns across authentic Quranic words.",
    printableFeatures: [
      "Visual comparison chart contrasting short vowels against corresponding Madd letters",
      "Word-hunting exercise: circle the Madd letter in real Quranic words",
      "Dual reading comparison columns (e.g. Qala vs Qala / Khalaqa vs Khalaqna)",
      "Finger-tapping duration guide for calibrating 2-beat natural elongation",
    ],
    instructionalSections: [
      {
        heading: "The Three Sacred Pairings of Madd Asli (Natural Madd)",
        body: "To form a natural Madd, the vowel and the following letter must be completely harmonious. Fatha must be followed by an unvowelled Alif (ـَا). Damma must be followed by a Waw with Sukoon (ـُو). Kasra must be followed by a Yaa with Sukoon (ـِي). If the preceding vowel does not match the letter, no natural elongation occurs.",
        points: [
          "Fatha + Alif = 'aa' sound held for 2 beats",
          "Damma + Waw = 'oo' sound held for 2 beats",
          "Kasra + Yaa = 'ee' sound held for 2 beats",
          "The Madd letter itself must carry no vowel or accent",
        ],
      },
      {
        heading: "The Contrast Drill: Pairing Short and Long Syllables",
        body: "The most effective method to teach Madd is side-by-side contrast. Have your child read 'بَ' (Ba - 1 count) followed immediately by 'بَا' (Baa - 2 counts). Hearing and feeling the exact double duration cures the habit of either clipping Madd short or dragging natural vowels into exaggerated lengths.",
      },
      {
        heading: "How to Detect Madd in Quranic Mushaf Text",
        body: "In the Madinah Mushaf, an Alif of Madd has no vowel sign or Sukoon above it; it sits completely bare after a letter carrying Fatha. Waw and Yaa may carry a small Sukoon or remain bare depending on the publishing convention. This worksheet trains young eyes to spot these bare letters automatically.",
      },
      {
        heading: "Parent Guidance: Calibrating the Two-Count Pace",
        body: "Never allow children to guess duration. Train them to open two fingers smoothly or tap twice on the table. Consistent physical rhythm establishes an internal metronome that carries directly into their future Quran recitation.",
      },
    ],
    worksheetExercises: [
      {
        title: "Section 1: Short Vowel vs Madd Contrast Drill",
        instruction: "Read each pair aloud, holding the second word for exactly double the duration of the first:",
        items: [
          { arabic: "قَالَ  /  قَلَ", label: "Qaala (2 counts) vs Qala (1 count)", transliteration: "Qaa-la vs Qa-la" },
          { arabic: "يَقُولُ  /  يَقُلْ", label: "Yaqoolu (2 counts) vs Yaqul (still)", transliteration: "Ya-qoo-lu vs Ya-qul" },
          { arabic: "قِيلَ  /  قِلَ", label: "Qeela (2 counts) vs Qila (1 count)", transliteration: "Qee-la vs Qi-la" },
          { arabic: "نُوحِيهَا", label: "Contains all 3 Madd letters (Noo - hee - haa)", transliteration: "Noo-hee-haa" },
        ],
      },
      {
        title: "Section 2: Circle the Madd Letter",
        instruction: "Circle the Alif, Waw, or Yaa that causes the 2-count elongation in each Quranic word:",
        items: [
          { arabic: "صَابِرِينَ", label: "Find Alif Madd & Yaa Madd" },
          { arabic: "غَفُورٌ", label: "Find Waw Madd" },
          { arabic: "حَكِيمٌ", label: "Find Yaa Madd" },
          { arabic: "كِتَابٌ", label: "Find Alif Madd" },
        ],
      },
    ],
    faqs: [
      {
        question: "What happens if a child elongates Madd for 4 or 5 counts instead of 2?",
        answer:
          "Natural Madd must stay at 2 counts. Elongating to 4 or 5 counts is only allowed when a Hamzah or Sukoon follows the Madd letter (Secondary Madd).",
      },
      {
        question: "Is there a trick to help kids remember which vowel pairs with which Madd letter?",
        answer:
          "Yes! Fatha opens upward like a tall Alif; Damma curls rounded like a Waw; Kasra pulls downward like the tail of a Yaa.",
      },
      {
        question: "Where can I find more interactive Madd practice games?",
        answer:
          "Play our free Madd Quiz online to test recognition with instant scoring, or book a live trial lesson with a NoorPath teacher.",
      },
    ],
  },
  {
    slug: "tanween-worksheet",
    title: "Tanween Worksheet — Free Printable Double Harakat PDF",
    metaTitle: "Tanween Worksheet — Free Printable Double Harakat PDF",
    description:
      "Free printable Tanween practice worksheet. Exercises for Fathatain, Kasratain, and Dammatain with pronunciation hints and letter identification grids.",
    keywords: [
      "tanween worksheet",
      "noorani qaida tanween printable",
      "double harakat worksheet pdf",
      "fathatain kasratain dammatain practice",
      "tanween exercises for kids",
      "learn tanween pdf free",
    ],
    summary: "Printable noon-sakinah sound drills and word ending identification grids.",
    href: `${WORKSHEETS_BASE}/tanween-worksheet`,
    answerBox:
      "This Tanween worksheet trains young readers to recognise and pronounce double Harakat marks—Fathatain, Kasratain, and Dammatain—accurately. Exercises include matching vowel endings to word transliterations, circling Tanween in short phrases, and tracing ending shapes. Print this free PDF resource to solidify noon-sakinah sound rules between live online Quran lessons.",
    seoIntro:
      "Tanween marks the transition from reading isolated syllables to understanding grammatical endings in the Holy Quran. This free printable Tanween worksheet provides systematic exercises to distinguish Fathatain (-an), Kasratain (-in), and Dammatain (-un), teaching children to identify the unwritten Noon sound with confidence.",
    printableFeatures: [
      "Clear visual diagrams of Fathatain, Kasratain, and Dammatain positions",
      "Fill-in-the-sound exercise connecting Arabic Tanween letters to English phonetic endings",
      "Word-hunting grid: identify Tanween in sacred Quranic phrases",
      "Orthographic Alif reminder box explaining why Fathatain carries an extra Alif",
    ],
    instructionalSections: [
      {
        heading: "The Three Faces of Tanween in Quranic Orthography",
        body: "Tanween is an unwritten Noon Sakinah that manifests only when vocalizing. In printed text, it appears as a doubled Harakah: two parallel slashes atop the letter (Fathatain: ـً), two slashes beneath the letter (Kasratain: ـٍ), or two small intertwined hooks above the letter (Dammatain: ـٌ). When pronounced, each produces the base vowel followed by an immediate 'N' consonant.",
        points: [
          "Fathatain = base short 'a' + 'N' = -an",
          "Kasratain = base short 'i' + 'N' = -in",
          "Dammatain = base short 'u' + 'N' = -un",
          "Never write the letter Noon; the doubled mark indicates the sound",
        ],
      },
      {
        heading: "The Orthographic Alif Mystery Explained for Children",
        body: "Parents often ask why words with Fathatain end with an Alif (e.g. عَفُوًّا or رَحِيمًا) while words with Kasratain and Dammatain do not. Explain to your child that this Alif is an 'emergency landing strip': when a reciter stops (Waqf) at the end of an Ayah on Fathatain, the 'N' sound drops and the word ends in a calm 2-count Alif Madd (e.g. 'Raheemaa').",
      },
      {
        heading: "How to Keep Tanween Sounds Crisp and Non-Slurred",
        body: "A frequent error occurs when students slur Tanween into a prolonged nasal buzz before they have learned Tajweed rules. At the Noorani Qaida level, teach your child to pronounce the ending Noon cleanly and crisply—just like the 'n' in the English words 'can', 'pin', and 'sun'.",
      },
      {
        heading: "Home Practice Routine: The 3-Step Reading Check",
        body: "When using this worksheet, have your child: (1) name the base consonant, (2) name the Tanween mark, and (3) pronounce the combined sound firmly. For example: 'Baa with Fathatain = Ban!' This structured vocalization eliminates hesitation.",
      },
    ],
    worksheetExercises: [
      {
        title: "Section 1: The Three Sounds of Tanween",
        instruction: "Read each column downwards, noting how the vowel sound changes while the final 'N' remains identical:",
        items: [
          { arabic: "بً", label: "Fathatain", transliteration: "Ban" },
          { arabic: "بٍ", label: "Kasratain", transliteration: "Bin" },
          { arabic: "بٌ", label: "Dammatain", transliteration: "Bun" },
          { arabic: "تً", label: "Fathatain", transliteration: "Tan" },
          { arabic: "تٍ", label: "Kasratain", transliteration: "Tin" },
          { arabic: "تٌ", label: "Dammatain", transliteration: "Tun" },
        ],
      },
      {
        title: "Section 2: Identify Tanween in Quranic Words",
        instruction: "Read each Quranic word and state which type of Tanween it carries:",
        items: [
          { arabic: "عَلِيمًا", label: "Aleeman (Fathatain with Alif)" },
          { arabic: "قَوْمٍ", label: "Qawmin (Kasratain)" },
          { arabic: "سَمِيعٌ", label: "Samee'un (Dammatain)" },
          { arabic: "خَبِيرًا", label: "Khabeeran (Fathatain with Alif)" },
        ],
      },
    ],
    faqs: [
      {
        question: "Why does the Tanween sign look like two 99s in some Quran prints?",
        answer:
          "In Indo-Pak and South Asian prints, Dammatain is often printed as a Damma with a small curly tail. In Madinah Uthmani prints, it appears as two small staggered curves.",
      },
      {
        question: "When should we teach Izhar and Ikhfa for Tanween?",
        answer:
          "Teach basic Tanween pronunciation first in Noorani Qaida. Once reading words with Tanween is automatic, introduce Izhar, Idgham, and Ikhfa during formal Tajweed study.",
      },
      {
        question: "Can I print multiple copies of this worksheet for my students?",
        answer:
          "Yes! All NoorPath Noorani Qaida worksheets are free to print, distribute, and photocopy for home and classroom learning.",
      },
    ],
  },
];

export const QAIDA_WORKSHEET_BY_SLUG = Object.fromEntries(
  QAIDA_WORKSHEETS.map((w) => [w.slug, w])
) as Record<string, QaidaWorksheetMeta>;
