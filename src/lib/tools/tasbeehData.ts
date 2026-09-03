/**
 * Authentic Adhkar & Daily Dhikr Presets with Transliteration, English Translation, and Hadith references.
 */

export interface DhikrPreset {
  id: string;
  name: string;
  arabic: string;
  transliteration: string;
  translation: string;
  defaultTarget: number;
  virtue: string;
  hadithReference: string;
}

export const DHIKR_PRESETS: DhikrPreset[] = [
  {
    id: "tasbeeh_fatimah",
    name: "Tasbeeh of Fatimah (After Prayer)",
    arabic: "سُبْحَانَ اللَّهِ • الحَمْدُ لِلَّهِ • اللَّهُ أَكْبَرُ",
    transliteration: "SubhanAllah (33x) • Alhamdulillah (33x) • Allahu Akbar (34x)",
    translation: "Glory be to Allah • All praise is to Allah • Allah is the Greatest",
    defaultTarget: 100,
    virtue: "Recited after every obligatory prayer. Sins are forgiven even if they are like the foam of the sea.",
    hadithReference: "Sahih Muslim 597",
  },
  {
    id: "subhanallah_bihamdihi",
    name: "SubhanAllahi wa biHamdihi",
    arabic: "سُبْحَانَ اللَّهِ وَبِحَمْدِهِ",
    transliteration: "Subhān Allāhi wa bi-ḥamdihi",
    translation: "Glory be to Allah and His is the praise",
    defaultTarget: 100,
    virtue: "Whoever says this 100 times in the morning and evening, no one will bring anything better on the Day of Resurrection.",
    hadithReference: "Sahih Muslim 2692",
  },
  {
    id: "istighfar",
    name: "Daily Istighfar (Seeking Forgiveness)",
    arabic: "أَسْتَغْفِرُ اللَّهَ وَأَتُوبُ إِلَيْهِ",
    transliteration: "Astaghfirullāha wa atūbu ilayh",
    translation: "I seek forgiveness from Allah and repent to Him",
    defaultTarget: 100,
    virtue: "The Prophet ﷺ sought forgiveness more than 70 to 100 times every single day.",
    hadithReference: "Sahih al-Bukhari 6307",
  },
  {
    id: "durood_sharif",
    name: "Salawat (Durood upon Prophet ﷺ)",
    arabic: "اللَّهُمَّ صَلِّ عَلَى مُحَمَّدٍ وَعَلَى آلِ مُحَمَّدٍ",
    transliteration: "Allāhumma ṣalli 'alā Muḥammadin wa 'alā āli Muḥammad",
    translation: "O Allah, send blessings upon Muhammad and upon the family of Muhammad",
    defaultTarget: 100,
    virtue: "Whoever sends blessings upon me once, Allah will send blessings upon him tenfold.",
    hadithReference: "Sahih Muslim 408",
  },
  {
    id: "tahleel_complete",
    name: "La Ilaha Illallah Wahdahu...",
    arabic: "لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ، وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ",
    transliteration: "Lā ilāha illallāhu waḥdahu lā sharīka lahu, lahul-mulku wa lahul-ḥamdu, wa huwa 'alā kulli shay'in qadīr",
    translation: "There is no deity worthy of worship except Allah alone, with no partner. To Him belongs all sovereignty and praise, and He is over all things competent.",
    defaultTarget: 100,
    virtue: "Equivalent to freeing ten slaves, 100 good deeds recorded, 100 sins erased, and protection from Shaytan.",
    hadithReference: "Sahih al-Bukhari 3293",
  },
  {
    id: "hawqala",
    name: "La Hawla wa la Quwwata illa Billah",
    arabic: "لَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللَّهِ",
    transliteration: "Lā ḥawla wa lā quwwata illā billāh",
    translation: "There is no power and no strength except with Allah",
    defaultTarget: 33,
    virtue: "One of the precious treasures of Paradise (Kanz min Kunooz al-Jannah).",
    hadithReference: "Sahih al-Bukhari 6384",
  },
  {
    id: "sayyidul_istighfar",
    name: "Sayyidul Istighfar (Chief of Forgiveness)",
    arabic: "اللَّهُمَّ أَنْتَ رَبِّي لَا إِلَهَ إِلَّا أَنْتَ، خَلَقْتَنِي وَأَنَا عَبْدُكَ، وَأَنَا عَلَى عَهْدِكَ وَوَعْدِكَ مَا اسْتَطَعْتُ، أَعُوذُ بِكَ مِنْ شَرِّ مَا صَنَعْتُ، أَبُوءُ لَكَ بِنِعْمَتِكَ عَلَيَّ، وَأَبُوءُ بِذَنْبِي فَاغْفِرْ لِي فَإِنَّهُ لَا يَغْفِرُ الذُّنُوبَ إِلَّا أَنْتَ",
    transliteration: "Allāhumma Anta Rabbī, lā ilāha illā Anta, khalaqtanī wa anā 'abduka, wa anā 'alā 'ahdika wa wa'dika ma-staṭa'tu, a'ūdhu bika min sharri mā ṣana'tu, abū'u laka bini'matika 'alayya, wa abū'u bidhanbī, faghfir lī fa'innahu lā yaghfirudh-dhunūba illā Anta",
    translation: "O Allah, You are my Lord, there is no deity except You. You created me and I am Your servant, and I abide by Your covenant and promise as best I can...",
    defaultTarget: 3,
    virtue: "Whoever recites it in the day/night with firm faith and passes away before evening/morning will be among the people of Paradise.",
    hadithReference: "Sahih al-Bukhari 6306",
  },
];
