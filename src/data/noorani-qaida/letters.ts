import type { QaidaLetter } from "./types";

type LetterSeed = [
  slug: string,
  arabic: string,
  name: string,
  sound: string,
  forms: QaidaLetter["forms"],
  example: string,
  meaning: string,
  makhraj: string,
  shapeGuide: string,
  confusion: string,
];

const seeds: LetterSeed[] = [
  ["alif", "ا", "Alif", "Alif", ["ا", "ا", "ـا", "ـا"], "أَلِف", "Alif", "Open throat and chest", "A tall, straight stroke with no dots.", "Do not assume Alif always carries its own vowel; read the mark and context."],
  ["ba", "ب", "Baa", "Baa", ["ب", "بـ", "ـبـ", "ـب"], "بَيْت", "house", "Both lips meet and release", "A shallow bowl with one dot below.", "Compare its one lower dot with Taa’s two upper dots and Thaa’s three."],
  ["ta", "ت", "Taa", "Taa", ["ت", "تـ", "ـتـ", "ـت"], "تُفَّاح", "apple", "Tongue tip touches near the upper front teeth", "The Baa-family bowl with two dots above.", "Keep the sound light; do not replace it with the heavier emphatic Taa."],
  ["tha", "ث", "Thaa", "Thaa", ["ث", "ثـ", "ـثـ", "ـث"], "ثَلْج", "snow", "Tongue rests gently between the teeth", "The Baa-family bowl with three dots above.", "Let the tongue show slightly; otherwise Thaa can sound like Taa or Seen."],
  ["jeem", "ج", "Jeem", "Jeem", ["ج", "جـ", "ـجـ", "ـج"], "جَمَل", "camel", "Middle of the tongue approaches the palate", "A curved cup shape with one dot below.", "Compare the dot with Haa, which has none, and Khaa, which has one above."],
  ["haa", "ح", "Haa", "Haa", ["ح", "حـ", "ـحـ", "ـح"], "حِصَان", "horse", "A clear breath from the middle throat", "The Jeem-family curve with no dot.", "This is a throat sound, not the soft English h used for soft Haa."],
  ["kha", "خ", "Khaa", "Khaa", ["خ", "خـ", "ـخـ", "ـخ"], "خُبْز", "bread", "Air passes from the upper throat", "The Jeem-family curve with one dot above.", "Avoid turning Khaa into a hard English k; its sound comes from the throat."],
  ["dal", "د", "Daal", "Daal", ["د", "د", "ـد", "ـد"], "دُجَاج", "chicken", "Tongue tip touches near the upper front teeth", "A short curved stroke that does not connect to the following letter.", "Remember that Daal breaks the joining line on its left."],
  ["dhal", "ذ", "Zaal", "Zaal", ["ذ", "ذ", "ـذ", "ـذ"], "ذَهَب", "gold", "Tongue rests lightly between the teeth with voice", "Daal’s shape with one dot above.", "Do not hide the tongue or Zaal may sound like Daal or Zay."],
  ["ra", "ر", "Raa", "Raa", ["ر", "ر", "ـر", "ـر"], "رَأْس", "head", "Tongue tip approaches the gum ridge", "A descending curve that does not connect to the following letter.", "Use one controlled tongue contact rather than an exaggerated repeated roll."],
  ["zain", "ز", "Zay", "Zay", ["ز", "ز", "ـز", "ـز"], "زَهْرَة", "flower", "Voice flows while the tongue rests behind the lower teeth", "Raa’s shape with one dot above.", "The dot separates Zay from Raa; both interrupt joining on the left."],
  ["seen", "س", "Seen", "Seen", ["س", "سـ", "ـسـ", "ـس"], "سَمَاء", "sky", "A light hiss passes behind the lower teeth", "Three small teeth followed by a bowl, with no dots.", "Keep Seen light and distinct from the heavier Saad."],
  ["sheen", "ش", "Sheen", "Sheen", ["ش", "شـ", "ـشـ", "ـش"], "شَجَرَة", "tree", "Air spreads across the middle of the tongue", "Seen’s shape with three dots above.", "Do not drop the dots when reading quickly; they change Seen into Sheen."],
  ["saad", "ص", "Saad", "Saad", ["ص", "صـ", "ـصـ", "ـص"], "صَبْر", "patience", "An emphatic sound with the back of the tongue raised", "A broad loop with a deep bowl and no dot.", "Keep the sound full without adding an extra vowel after it."],
  ["daad", "ض", "Daad", "Daad", ["ض", "ضـ", "ـضـ", "ـض"], "ضَوْء", "light", "Side of the tongue meets the upper molars", "Saad’s shape with one dot above.", "Daad needs guided correction; do not treat it as an ordinary English d."],
  ["taa", "ط", "Taa", "Taa", ["ط", "طـ", "ـطـ", "ـط"], "طَيْر", "bird", "Tongue tip contacts near the upper teeth while the back rises", "A tall central stroke inside a rounded base.", "Distinguish the full, heavy Taa from the lighter Taa."],
  ["dhaa", "ظ", "Zaa", "Zaa", ["ظ", "ظـ", "ـظـ", "ـظ"], "ظَبْي", "deer", "Tongue comes gently between the teeth with emphasis", "Taa’s shape with one dot above.", "Combine the tongue position of Zaal with the fuller quality of an emphatic letter."],
  ["ain", "ع", "Ayn", "Ayn", ["ع", "عـ", "ـعـ", "ـع"], "عِنَب", "grapes", "The sound begins in the middle throat", "A curved hook that changes clearly in the middle of a word.", "Ayn has no direct English equivalent; learn it through careful modelling, not spelling."],
  ["ghain", "غ", "Ghayn", "Ghayn", ["غ", "غـ", "ـغـ", "ـغ"], "غَيْم", "cloud", "A voiced sound from the upper throat", "Ayn’s shape with one dot above.", "Keep the sound in the throat and use the dot to distinguish it from Ayn."],
  ["fa", "ف", "Faa", "Faa", ["ف", "فـ", "ـفـ", "ـف"], "فِيل", "elephant", "Upper front teeth touch the lower lip", "A rounded head with one dot above and a bowl in final form.", "Release a light stream of air; do not voice it like v."],
  ["qaf", "ق", "Qaaf", "Qaaf", ["ق", "قـ", "ـقـ", "ـق"], "قَمَر", "moon", "Back of the tongue rises near the soft palate", "A rounded head with two dots above and a deep final bowl.", "Qaaf is deeper than Kaaf; avoid replacing it with an English k."],
  ["kaf", "ك", "Kaaf", "Kaaf", ["ك", "كـ", "ـكـ", "ـك"], "كِتَاب", "book", "Back of the tongue touches the soft palate", "A tall angled form whose final shape includes a small inner mark.", "Compare its lighter articulation with the deeper Qaaf."],
  ["lam", "ل", "Laam", "Laam", ["ل", "لـ", "ـلـ", "ـل"], "لَيْث", "lion", "Tongue tip touches the gum ridge", "A tall stroke that descends into a curved base.", "Notice the special Laam-Alif combination and keep ordinary Laam light unless a rule changes it."],
  ["meem", "م", "Meem", "Meem", ["م", "مـ", "ـمـ", "ـم"], "مَاء", "water", "Both lips close with a gentle nasal resonance", "A small round head with a changing tail.", "Close the lips fully without adding an extra vowel."],
  ["noon", "ن", "Noon", "Noon", ["ن", "نـ", "ـنـ", "ـن"], "نَجْم", "star", "Tongue tip meets the gum ridge with nasal resonance", "A bowl with one dot above; medial Noon resembles the Baa family.", "Track the single upper dot and do not confuse Noon with Baa in joined text."],
  ["ha", "ه", "Haa", "Haa", ["ه", "هـ", "ـهـ", "ـه"], "هَوَاء", "air", "A soft breath flows from the lower throat", "A looped letter with noticeably different joined forms.", "This soft Haa differs from the stronger middle-throat Haa."],
  ["waw", "و", "Waaw", "Waaw", ["و", "و", "ـو", "ـو"], "وَرْدَة", "rose", "Rounded lips shape the consonant or long vowel", "A small head with a curved descending tail; it does not join left.", "Check whether Waaw is a consonant or a Madd letter from the preceding vowel and marks."],
  ["ya", "ي", "Yaa", "Yaa", ["ي", "يـ", "ـيـ", "ـي"], "يَد", "hand", "Middle of the tongue rises toward the palate", "A curved form with two dots below; final Yaa has a long tail.", "Check whether Yaa is a consonant or Madd letter, and keep its two dots distinct in standard teaching text."],
];

export const QAIDA_LETTERS: QaidaLetter[] = seeds.map((seed, index) => {
  const [slug, arabic, name, sound, forms, example, exampleMeaning, makhraj, shapeGuide, commonConfusion] = seed;
  return {
    id: index + 1,
    slug,
    arabic,
    name,
    sound,
    forms,
    example,
    exampleMeaning,
    makhraj,
    shapeGuide,
    commonConfusion,
    writingCue: `Start with the main ${name} shape, write from right to left, then add any dots only after the body is clear.`,
    childPrompt: `Find ${name} ${arabic}, name its dots, and point to the part of the shape that stays familiar when it joins.`,
    parentTip: `Practise ${name} for two or three minutes. Ask your child to find it before asking for the sound, and praise careful looking.`,
    teacherTip: `Model ${name} once from its articulation point, compare one visually or phonetically similar letter, then check recognition in a joined form.`,
    keywords: [
      `${name.toLowerCase()} arabic letter`,
      `how to pronounce ${name.toLowerCase()}`,
      `${name.toLowerCase()} letter for kids`,
      `learn ${arabic} online`,
    ],
  };
});

export const QAIDA_LETTER_BY_SLUG = Object.fromEntries(
  QAIDA_LETTERS.map((letter) => [letter.slug, letter]),
) as Record<string, QaidaLetter>;
