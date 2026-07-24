/** Split article HTML after the Nth closing </p> for mid-article CTA insertion. */
export function splitArticleHtml(
  html: string,
  afterParagraphs = 3
): { before: string; after: string } {
  if (!html) return { before: "", after: "" };

  let searchFrom = 0;
  let cutAt = -1;

  for (let i = 0; i < afterParagraphs; i++) {
    const idx = html.toLowerCase().indexOf("</p>", searchFrom);
    if (idx === -1) {
      cutAt = -1;
      break;
    }
    cutAt = idx + 4;
    searchFrom = cutAt;
  }

  if (cutAt === -1 || cutAt >= html.length) {
    return { before: html, after: "" };
  }

  return {
    before: html.slice(0, cutAt),
    after: html.slice(cutAt),
  };
}
