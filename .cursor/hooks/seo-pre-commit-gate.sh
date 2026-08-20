#!/bin/sh
# Cursor hook: remind/run SEO agent context before git commit shell commands.
# Fail-open for non-commit commands; for commit, emit follow-up guidance.
set -eu
INPUT=$(cat || true)

# Always allow the shell command; SEO blocking is handled by .git/hooks/pre-commit
printf '%s\n' '{"permission":"allow"}'

# Best-effort: if commit detected, ensure latest report exists
ROOT=$(git rev-parse --show-toplevel 2>/dev/null || pwd)
cd "$ROOT" || exit 0
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh"
nvm use 20 >/dev/null 2>&1 || true
node scripts/seo/seo-agent.mjs --staged >/dev/null 2>&1 || true
exit 0
