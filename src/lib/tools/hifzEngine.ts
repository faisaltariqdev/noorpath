/**
 * Quran Hifz & Reading completion calculator engine.
 *
 * Standard Medina Mushaf: 604 pages, 30 Juz (approx 20 pages per Juz), 6236 Ayahs.
 */

export const QURAN_METRICS = {
  totalPages: 604,
  totalJuz: 30,
  totalAyahs: 6236,
  pagesPerJuzAvg: 20.13,
  linesPerPage: 15,
} as const;

export type HifzPaceUnit = "pages_per_day" | "lines_per_day" | "ayahs_per_day" | "juz_per_month";
export type TargetMode = "by_pace" | "by_target_date" | "khatmah_reading";

export interface HifzInputs {
  mode: TargetMode;
  alreadyMemorizedPages: number; // 0 to 604
  paceUnit: HifzPaceUnit;
  paceValue: number; // e.g. 1 page, 0.5 page, 5 lines, 5 ayahs
  studyDaysPerWeek: number; // typically 5 or 6 (1-2 days for revision)
  dailyMinutesAvailable: number; // 30, 45, 60, 90, 120 mins
  targetDateStr?: string; // YYYY-MM-DD for by_target_date mode
  readingKhatmahDays?: number; // 30, 60, 90, 180, 365 for reading mode
}

export const DEFAULT_HIFZ_INPUTS: HifzInputs = {
  mode: "by_pace",
  alreadyMemorizedPages: 0,
  paceUnit: "pages_per_day",
  paceValue: 1, // 1 page per day
  studyDaysPerWeek: 5, // 5 days new, 2 days consolidation
  dailyMinutesAvailable: 60,
  readingKhatmahDays: 30,
};

export interface HifzMilestone {
  juzNumber: number;
  pagesCumulative: number;
  estimatedDate: string;
  daysFromStart: number;
}

export interface HifzPlanResult {
  mode: TargetMode;
  remainingPages: number;
  totalPagesToStudy: number;
  dailyNewPacePages: number;
  dailyNewPaceDescription: string;
  totalStudyDays: number;
  totalCalendarDays: number;
  estimatedCompletionDate: string;
  formattedDuration: string;
  revisionSystem: {
    sabaq: string; // New memorization
    sabqi: string; // Recent revision (last 1-2 juz)
    manzil: string; // Routine cycle revision (all previous juz)
  };
  recommendedWeeklySchedule: {
    newLessonDays: number;
    revisionDays: number;
    recommendedDailyTimeMinutes: number;
  };
  milestones: HifzMilestone[];
  isPaceRealistic: boolean;
  paceAdvisoryNote: string;
}

export function calculateHifzPlan(inputs: HifzInputs, startDate = new Date()): HifzPlanResult {
  const currentPages = Math.min(Math.max(inputs.alreadyMemorizedPages || 0, 0), 604);
  const remainingPages = Math.max(QURAN_METRICS.totalPages - currentPages, 1);
  const studyDaysRatio = (inputs.studyDaysPerWeek || 5) / 7;

  let dailyNewPacePages = 1;
  let dailyNewPaceDescription = "1 Page (15 lines)";
  let totalStudyDays = 0;

  if (inputs.mode === "khatmah_reading") {
    const targetDays = Math.max(inputs.readingKhatmahDays || 30, 1);
    dailyNewPacePages = QURAN_METRICS.totalPages / targetDays;
    totalStudyDays = targetDays;
    dailyNewPaceDescription = `${(Math.round(dailyNewPacePages * 10) / 10).toFixed(1)} Pages / Day (~${(
      (dailyNewPacePages * 15) /
      5
    ).toFixed(0)} pages after each prayer)`;
  } else if (inputs.mode === "by_target_date" && inputs.targetDateStr) {
    const targetTime = new Date(inputs.targetDateStr).getTime();
    const startTime = startDate.getTime();
    const calDays = Math.max(Math.round((targetTime - startTime) / (1000 * 60 * 60 * 24)), 10);
    const availableStudyDays = Math.max(Math.round(calDays * studyDaysRatio), 5);
    dailyNewPacePages = Math.round((remainingPages / availableStudyDays) * 100) / 100;
    totalStudyDays = availableStudyDays;
    dailyNewPaceDescription = `${dailyNewPacePages} Pages (~${Math.round(
      dailyNewPacePages * 15
    )} lines) per study session`;
  } else {
    // Mode by_pace
    if (inputs.paceUnit === "pages_per_day") {
      dailyNewPacePages = Math.max(inputs.paceValue || 1, 0.1);
      dailyNewPaceDescription = `${dailyNewPacePages} Page${dailyNewPacePages === 1 ? "" : "s"} (${Math.round(
        dailyNewPacePages * 15
      )} lines)`;
    } else if (inputs.paceUnit === "lines_per_day") {
      const lines = Math.max(inputs.paceValue || 5, 1);
      dailyNewPacePages = Math.round((lines / 15) * 100) / 100;
      dailyNewPaceDescription = `${lines} Lines / day (${dailyNewPacePages} page)`;
    } else if (inputs.paceUnit === "ayahs_per_day") {
      const ayahs = Math.max(inputs.paceValue || 5, 1);
      const avgAyahsPerPage = QURAN_METRICS.totalAyahs / QURAN_METRICS.totalPages; // ~10.3
      dailyNewPacePages = Math.round((ayahs / avgAyahsPerPage) * 100) / 100;
      dailyNewPaceDescription = `${ayahs} Ayahs / day (~${dailyNewPacePages} page)`;
    } else if (inputs.paceUnit === "juz_per_month") {
      const juz = Math.max(inputs.paceValue || 1, 0.25);
      const pagesPerMonth = juz * 20;
      const studyDaysPerMonth = (inputs.studyDaysPerWeek || 5) * 4.33;
      dailyNewPacePages = Math.round((pagesPerMonth / studyDaysPerMonth) * 100) / 100;
      dailyNewPaceDescription = `${juz} Juz / month (~${dailyNewPacePages} page / study day)`;
    }
    totalStudyDays = Math.ceil(remainingPages / Math.max(dailyNewPacePages, 0.05));
  }

  // Calculate calendar days
  const totalCalendarDays =
    inputs.mode === "khatmah_reading"
      ? totalStudyDays
      : Math.ceil(totalStudyDays / studyDaysRatio);

  const completionDateObj = new Date(startDate.getTime() + totalCalendarDays * 24 * 60 * 60 * 1000);
  const estimatedCompletionDate = completionDateObj.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  // Format Duration
  const years = Math.floor(totalCalendarDays / 365);
  const remainingDaysAfterYears = totalCalendarDays % 365;
  const months = Math.floor(remainingDaysAfterYears / 30.4);
  const days = Math.round(remainingDaysAfterYears % 30.4);

  let formattedDuration = "";
  if (years > 0) formattedDuration += `${years} Year${years > 1 ? "s" : ""} `;
  if (months > 0) formattedDuration += `${months} Month${months > 1 ? "s" : ""} `;
  if (years === 0 && days > 0) formattedDuration += `${days} Day${days > 1 ? "s" : ""}`;
  formattedDuration = formattedDuration.trim() || "Under 1 Month";

  // Milestones: Each 5 Juz (approx 100 pages)
  const currentJuz = Math.floor(currentPages / 20);
  const milestones: HifzMilestone[] = [];
  for (let j = currentJuz + 1; j <= 30; j++) {
    if (j % 5 === 0 || j === 30 || j === currentJuz + 1) {
      const juzPageTarget = Math.min(j * 20, 604);
      const pagesToTarget = juzPageTarget - currentPages;
      const daysToTargetStudy = Math.ceil(pagesToTarget / Math.max(dailyNewPacePages, 0.05));
      const calDaysToTarget = Math.ceil(daysToTargetStudy / studyDaysRatio);
      const milestoneDate = new Date(startDate.getTime() + calDaysToTarget * 24 * 60 * 60 * 1000);

      milestones.push({
        juzNumber: j,
        pagesCumulative: juzPageTarget,
        estimatedDate: milestoneDate.toLocaleDateString("en-US", { month: "short", year: "numeric" }),
        daysFromStart: calDaysToTarget,
      });
    }
  }

  // Pace feasibility note
  let isPaceRealistic = true;
  let paceAdvisoryNote = "Excellent, sustainable pace for long-term retention.";
  if (dailyNewPacePages > 2) {
    isPaceRealistic = false;
    paceAdvisoryNote = "Memorizing over 2 pages daily requires 3–4 hours of intensive revision to avoid forgetting earlier Juz.";
  } else if (dailyNewPacePages <= 0.35) {
    paceAdvisoryNote = "A gentle, consistent pace ideal for busy working professionals and young children (4–7 years).";
  } else if (dailyNewPacePages >= 0.8 && dailyNewPacePages <= 1.2) {
    paceAdvisoryNote = "The gold standard madrasa pace (1 page/day): finishes full Hifz in approximately 2 to 2.5 years with strong retention.";
  }

  // Sabaq - Sabqi - Manzil breakdown
  const sabaq = `${dailyNewPaceDescription} (tested daily with tutor)`;
  const sabqi = `${Math.min(Math.max(Math.round(dailyNewPacePages * 5), 3), 20)} pages (revision of recent Juz)`;
  const manzil = `1 Juz daily rotation (review of older memorized Juz)`;

  return {
    mode: inputs.mode,
    remainingPages,
    totalPagesToStudy: QURAN_METRICS.totalPages,
    dailyNewPacePages,
    dailyNewPaceDescription,
    totalStudyDays,
    totalCalendarDays,
    estimatedCompletionDate,
    formattedDuration,
    revisionSystem: { sabaq, sabqi, manzil },
    recommendedWeeklySchedule: {
      newLessonDays: inputs.studyDaysPerWeek,
      revisionDays: 7 - inputs.studyDaysPerWeek,
      recommendedDailyTimeMinutes: Math.max(Math.round(dailyNewPacePages * 45), 30),
    },
    milestones,
    isPaceRealistic,
    paceAdvisoryNote,
  };
}
