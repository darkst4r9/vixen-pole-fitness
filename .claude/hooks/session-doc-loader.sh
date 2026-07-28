#!/usr/bin/env bash
# SessionStart — loads project status/architecture/changelog docs into context.
# CLAUDE.md is auto-loaded by Claude Code; these files are not, so without this
# hook every session starts blind to current project state.
ROOT=$(git rev-parse --show-toplevel 2>/dev/null || pwd)
cd "$ROOT" || exit 0

FILES="PROJECT_STATUS.md ARCHITECTURE.md CHANGELOG.md"
OUT=""
for f in $FILES; do
  if [ -f "$f" ]; then
    OUT="$OUT
=== $f ===
$(cat "$f")
"
  fi
done

if [ -z "$OUT" ]; then
  echo '{"continue":true}'
  exit 0
fi

# Piped via stdin rather than an env var — doc files can be large enough to
# blow past the OS argument-list size limit if passed as an env var to node.
printf '%s' "$OUT" | node -e '
const s = require("fs").readFileSync(0, "utf8");
console.log(JSON.stringify({hookSpecificOutput:{hookEventName:"SessionStart",additionalContext:s}}));
'
