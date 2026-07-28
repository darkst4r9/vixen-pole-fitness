#!/usr/bin/env bash
# PreToolUse (Bash) — runs the astro build before letting a git commit through.
# No dedicated typecheck/lint script in this repo, so a successful build is the gate.
INPUT=$(cat)
CMD=$(printf '%s' "$INPUT" | node -e 'const d=JSON.parse(require("fs").readFileSync(0,"utf8"));process.stdout.write((d.tool_input&&d.tool_input.command)||"")')

case "$CMD" in
  *"git commit"*) ;;
  *) echo '{"continue":true}'; exit 0 ;;
esac

ROOT=$(git rev-parse --show-toplevel 2>/dev/null || pwd)
cd "$ROOT" || exit 0

LOG=$(mktemp)
if npm run build >"$LOG" 2>&1; then
  echo '{"continue":true}'
else
  tail -c 1500 "$LOG" | node -e '
const err = require("fs").readFileSync(0, "utf8");
console.log(JSON.stringify({hookSpecificOutput:{hookEventName:"PreToolUse",permissionDecision:"ask",permissionDecisionReason:("Pre-commit build check failed:\n" + err)}}));
'
fi
rm -f "$LOG"
