export function serializeJsonLd(value: unknown): string {
  return JSON.stringify(value).replace(/</g, "\\u003c");
}

/**
 * Weekly live-lesson minutes as an ISO 8601 duration for CourseInstance.courseWorkload,
 * which Google requires on hasCourseInstance for the Course info rich result.
 * Callers must pass values from PRICING_PLANS — the published plans are the only
 * truthful source for lesson time, so SERP workload cannot drift from /pricing.
 */
export function toWeeklyWorkload(sessionsPerWeek: number, sessionMinutes: number): string {
  const totalMinutes = sessionsPerWeek * sessionMinutes;
  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;
  return `PT${hours > 0 ? `${hours}H` : ""}${minutes > 0 ? `${minutes}M` : ""}`;
}
