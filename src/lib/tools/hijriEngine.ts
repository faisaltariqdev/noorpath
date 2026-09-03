/**
 * Islamic Hijri <-> Gregorian Date Conversion & Islamic Calendar Engine.
 * Supports moon-sighting day adjustments (-2 to +2 days).
 */

export interface HijriDate {
  day: number;
  month: number; // 1-12
  monthName: string;
  monthNameArabic: string;
  year: number;
  weekdayName: string;
  weekdayNameArabic: string;
  formatted: string;
  isSacredMonth: boolean;
}

export interface GregorianDate {
  day: number;
  month: number; // 1-12
  monthName: string;
  year: number;
  weekdayName: string;
  formatted: string;
}

export const HIJRI_MONTHS = [
  { index: 1, name: "Muharram", arabic: "مُحَرَّم", sacred: true, meaning: "The Sacred / Forbidden" },
  { index: 2, name: "Safar", arabic: "صَفَر", sacred: false, meaning: "The Void / Journey" },
  { index: 3, name: "Rabi' al-Awwal", arabic: "رَبِيع الأَوَّل", sacred: false, meaning: "The First Spring (Birth of the Prophet ﷺ)" },
  { index: 4, name: "Rabi' al-Thani", arabic: "رَبِيع الآخِر", sacred: false, meaning: "The Second Spring" },
  { index: 5, name: "Jumada al-Ula", arabic: "جُمَادَى الأُولَى", sacred: false, meaning: "The First Parched Land" },
  { index: 6, name: "Jumada al-Akhirah", arabic: "جُمَادَى الآخِرَة", sacred: false, meaning: "The Second Parched Land" },
  { index: 7, name: "Rajab", arabic: "رَجَب", sacred: true, meaning: "The Revered / Respect" },
  { index: 8, name: "Sha'ban", arabic: "شَعْبَان", sacred: false, meaning: "The Month of Separation" },
  { index: 9, name: "Ramadan", arabic: "رَمَضَان", sacred: false, meaning: "The Month of Fasting & Quran" },
  { index: 10, name: "Shawwal", arabic: "شَوَّال", sacred: false, meaning: "Month of Eid al-Fitr & 6 Sunnah Fasts" },
  { index: 11, name: "Dhu al-Qi'dah", arabic: "ذُو القَعْدَة", sacred: true, meaning: "The Month of Truce" },
  { index: 12, name: "Dhu al-Hijjah", arabic: "ذُو الحِجَّة", sacred: true, meaning: "The Month of Hajj & Eid al-Adha" },
] as const;

export const ARABIC_WEEKDAYS = [
  { english: "Sunday", arabic: "الأَحَد (Al-Ahad)" },
  { english: "Monday", arabic: "الاِثْنَيْن (Al-Ithnayn)" },
  { english: "Tuesday", arabic: "الثُّلاَثَاء (Ath-Thulatha)" },
  { english: "Wednesday", arabic: "الأَرْبِعَاء (Al-Arba'a)" },
  { english: "Thursday", arabic: "الخَمِيس (Al-Khamis)" },
  { english: "Friday", arabic: "الجُمُعَة (Al-Jumu'ah)" },
  { english: "Saturday", arabic: "السَّبْت (As-Sabt)" },
];

export interface IslamicHoliday {
  name: string;
  arabicName: string;
  hijriDay: number;
  hijriMonth: number;
  description: string;
  category: "major_eid" | "fasting" | "sacred_night" | "milestone";
}

export const ISLAMIC_HOLIDAYS: IslamicHoliday[] = [
  {
    name: "Islamic New Year (1st Muharram)",
    arabicName: "رَأْسُ السَّنَةِ الهِجْرِيَّة",
    hijriDay: 1,
    hijriMonth: 1,
    description: "Beginning of the new Islamic Hijri lunar year.",
    category: "milestone",
  },
  {
    name: "Day of Ashura",
    arabicName: "يَوْم عَاشُورَاء",
    hijriDay: 10,
    hijriMonth: 1,
    description: "Sunnah fast commemorating Prophet Musa (AS) being saved by Allah SWT.",
    category: "fasting",
  },
  {
    name: "Mawlid an-Nabi ﷺ",
    arabicName: "مَوْلِدُ النَّبِيّ",
    hijriDay: 12,
    hijriMonth: 3,
    description: "Birth of the final Messenger Muhammad ﷺ.",
    category: "milestone",
  },
  {
    name: "Isra and Mi'raj",
    arabicName: "الإِسْرَاء وَالمِعْرَاج",
    hijriDay: 27,
    hijriMonth: 7,
    description: "The miraculous Night Journey and Ascension to the Heavens.",
    category: "sacred_night",
  },
  {
    name: "Nisf Sha'ban (15th Sha'ban)",
    arabicName: "لَيْلَة النِّصْف مِنْ شَعْبَان",
    hijriDay: 15,
    hijriMonth: 8,
    description: "Night of seeking forgiveness prior to Ramadan.",
    category: "sacred_night",
  },
  {
    name: "1st Day of Ramadan",
    arabicName: "أَوَّل رَمَضَان",
    hijriDay: 1,
    hijriMonth: 9,
    description: "Beginning of the blessed month of obligatory fasting and Quran revelation.",
    category: "fasting",
  },
  {
    name: "Laylat al-Qadr (Night of Power)",
    arabicName: "لَيْلَة القَدْر",
    hijriDay: 27,
    hijriMonth: 9,
    description: "The night better than a thousand months (odd nights in the last 10 days of Ramadan).",
    category: "sacred_night",
  },
  {
    name: "Eid al-Fitr",
    arabicName: "عِيد الفِطْر المُبَارَك",
    hijriDay: 1,
    hijriMonth: 10,
    description: "Celebration marking the conclusion of Ramadan fasting.",
    category: "major_eid",
  },
  {
    name: "Day of Arafah",
    arabicName: "يَوْم عَرَفَة",
    hijriDay: 9,
    hijriMonth: 12,
    description: "The peak day of Hajj; highly recommended sunnah fast expiating sins of 2 years.",
    category: "fasting",
  },
  {
    name: "Eid al-Adha",
    arabicName: "عِيد الأَضْحَى المُبَارَك",
    hijriDay: 10,
    hijriMonth: 12,
    description: "Feast of Sacrifice commemorating Prophet Ibrahim (AS) and Hajj.",
    category: "major_eid",
  },
];

/**
 * High-accuracy astronomical Gregorian to Julian Day Number (JDN)
 */
function gregorianToJdn(year: number, month: number, day: number): number {
  let y = year;
  let m = month;
  if (m <= 2) {
    y -= 1;
    m += 12;
  }
  const a = Math.floor(y / 100);
  const b = 2 - a + Math.floor(a / 4);
  return Math.floor(365.25 * (y + 4716)) + Math.floor(30.6001 * (m + 1)) + day + b - 1524.5;
}

/**
 * Julian Day Number to Gregorian
 */
function jdnToGregorian(jdn: number): GregorianDate {
  const z = Math.floor(jdn + 0.5);
  const a = Math.floor((z - 1867216.25) / 36524.25);
  const aa = z + 1 + a - Math.floor(a / 4);
  const b = aa + 1524;
  const c = Math.floor((b - 122.1) / 365.25);
  const d = Math.floor(365.25 * c);
  const e = Math.floor((b - d) / 30.6001);
  const day = b - d - Math.floor(30.6001 * e);
  const month = e < 14 ? e - 1 : e - 13;
  const year = month > 2 ? c - 4716 : c - 4715;

  const dateObj = new Date(year, month - 1, day);
  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  const weekdayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  return {
    day,
    month,
    monthName: monthNames[month - 1] || "January",
    year,
    weekdayName: weekdayNames[dateObj.getDay()] || "Sunday",
    formatted: `${day} ${monthNames[month - 1]} ${year}`,
  };
}

/**
 * Convert Julian Day Number to Hijri (Islamic Arithmetic / Kuwaiti algorithm base)
 */
function jdnToHijri(jdn: number, dayAdjustment = 0): HijriDate {
  const adjustedJdn = jdn + dayAdjustment;
  const l = Math.floor(adjustedJdn - 1948439.5) + 10632;
  const n = Math.floor((l - 1) / 10631);
  const l1 = l - 10631 * n + 354;
  const j =
    Math.floor((10985 - l1) / 5316) * Math.floor((50 * l1) / 17719) +
    Math.floor(l1 / 5670) * Math.floor((43 * l1) / 15238);
  const l2 =
    l1 -
    Math.floor((30 - j) / 15) * Math.floor((17719 * j) / 50) -
    Math.floor(j / 16) * Math.floor((15238 * j) / 43) +
    29;
  const month = Math.floor((24 * l2) / 709);
  const day = l2 - Math.floor((709 * month) / 24);
  const year = 30 * n + j - 30;

  const mIndex = Math.min(Math.max(month, 1), 12);
  const monthInfo = HIJRI_MONTHS[mIndex - 1];

  // Weekday from JDN
  const dayOfWeekIndex = (Math.floor(adjustedJdn + 1.5) % 7 + 7) % 7;
  const weekday = ARABIC_WEEKDAYS[dayOfWeekIndex] || ARABIC_WEEKDAYS[0];

  return {
    day,
    month: mIndex,
    monthName: monthInfo.name,
    monthNameArabic: monthInfo.arabic,
    year,
    weekdayName: weekday.english,
    weekdayNameArabic: weekday.arabic,
    formatted: `${day} ${monthInfo.name} ${year} AH`,
    isSacredMonth: monthInfo.sacred,
  };
}

/**
 * Convert Hijri date to Julian Day Number
 */
function hijriToJdn(year: number, month: number, day: number): number {
  return (
    Math.floor((11 * year + 3) / 30) +
    354 * year +
    30 * month -
    Math.floor((month - 1) / 2) +
    day +
    1948440 -
    385
  );
}

/**
 * Convert Gregorian Date to Hijri Date with moon sighting adjustment
 */
export function convertGregorianToHijri(date: Date, dayAdjustment = 0): HijriDate {
  // Use algorithmic conversion with adjustment
  const jdn = gregorianToJdn(date.getFullYear(), date.getMonth() + 1, date.getDate());
  return jdnToHijri(jdn, dayAdjustment);
}

/**
 * Convert Hijri Date to Gregorian Date
 */
export function convertHijriToGregorian(
  hijriYear: number,
  hijriMonth: number,
  hijriDay: number,
  dayAdjustment = 0
): GregorianDate {
  const jdn = hijriToJdn(hijriYear, hijriMonth, hijriDay) - dayAdjustment;
  return jdnToGregorian(jdn);
}

/**
 * Calculate upcoming Islamic holidays relative to today's date
 */
export function getUpcomingIslamicHolidays(referenceDate = new Date(), dayAdjustment = 0) {
  const currentHijri = convertGregorianToHijri(referenceDate, dayAdjustment);

  return ISLAMIC_HOLIDAYS.map((holiday) => {
    let targetHijriYear = currentHijri.year;
    if (
      holiday.hijriMonth < currentHijri.month ||
      (holiday.hijriMonth === currentHijri.month && holiday.hijriDay < currentHijri.day)
    ) {
      targetHijriYear += 1;
    }

    const greg = convertHijriToGregorian(targetHijriYear, holiday.hijriMonth, holiday.hijriDay, dayAdjustment);
    const targetDate = new Date(greg.year, greg.month - 1, greg.day);
    const diffTime = targetDate.getTime() - referenceDate.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    return {
      ...holiday,
      targetHijriYear,
      gregorianFormatted: greg.formatted,
      daysRemaining: Math.max(diffDays, 0),
    };
  }).sort((a, b) => a.daysRemaining - b.daysRemaining);
}
