/** Bump when shipping a user-visible release */
export const SITE_VERSION = "2.3.0";

export function getBuildLabel(): string {
  const sha = process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_SHA?.slice(0, 7);
  const date = process.env.NEXT_PUBLIC_BUILD_DATE;
  if (sha && date) return `v${SITE_VERSION} · ${sha} · ${date}`;
  if (sha) return `v${SITE_VERSION} · build ${sha}`;
  return `v${SITE_VERSION}`;
}
