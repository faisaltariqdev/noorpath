/**
 * Document title that already includes the brand (or is intentionally final).
 * Use this instead of a plain string so the root layout template
 * (`%s | NoorPath Academy`) does not append a second brand segment.
 */
export function absolutePageTitle(title: string): { absolute: string } {
  return { absolute: title };
}
