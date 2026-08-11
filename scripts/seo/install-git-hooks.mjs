#!/usr/bin/env node
import { mkdirSync, writeFileSync, chmodSync, existsSync } from "node:fs";
import { join } from "node:path";

const root = process.cwd();
const hookPath = join(root, ".git", "hooks", "pre-commit");
if (!existsSync(join(root, ".git"))) {
  console.error("Not a git repository — skip hook install");
  process.exit(0);
}

const hook = `#!/bin/sh
# NoorPath SEO Agent pre-commit (FREE local automation)
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh"
nvm use 20 >/dev/null 2>&1 || true

ROOT="$(git rev-parse --show-toplevel)"
cd "$ROOT" || exit 1

echo "→ Running NoorPath SEO Agent on staged changes…"
node scripts/seo/seo-agent.mjs --staged
STATUS=$?

if [ "$STATUS" -ne 0 ]; then
  echo "✗ SEO Agent found FAIL-level issues. See seo-reports/seo-agent-latest.md"
  echo "  Bypass only if intentional: SKIP_SEO_AGENT=1 git commit …"
  if [ "$SKIP_SEO_AGENT" = "1" ]; then
    echo "! SKIP_SEO_AGENT=1 set — continuing commit"
    exit 0
  fi
  exit "$STATUS"
fi

echo "✓ SEO Agent passed (warnings may still exist in report)"
exit 0
`;

mkdirSync(join(root, ".git", "hooks"), { recursive: true });
writeFileSync(hookPath, hook, "utf8");
chmodSync(hookPath, 0o755);
console.log(`Installed git pre-commit hook → ${hookPath}`);
