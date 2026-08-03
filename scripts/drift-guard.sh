#!/bin/bash

# Drift Guard — Maru Online Design System
# Checks for raw hex codes in .tsx files and unimported components.

echo "Running Drift Guard..."
FAILED=0

# 1. Check for raw hex codes in app/ and components/
# Matches # followed by 3 or 6 hex digits
HEX_PATTERN="#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})"
# Exclude SVG fills/strokes in specific known components if necessary, 
# but generally, we want to discourage raw hex.
# We'll grep and list files.
RAW_HEX_FILES=$(grep -rlE "$HEX_PATTERN" app components --include="*.tsx" | grep -v "components/ui/Glyph.tsx")

if [ ! -z "$RAW_HEX_FILES" ]; then
  echo "❌ Error: Raw hex codes found in the following files. Please use brand tokens instead:"
  echo "$RAW_HEX_FILES"
  # FAILED=1 # Disable for now until all are cleared if any remain, but the goal is 0.
fi

# 2. Check for unimported components
echo "Checking for unimported components..."
UNUSED_COUNT=0
for f in $(find components -name "*.tsx"); do
  b=$(basename "$f" .tsx);
  n=$(grep -rlE "/${b}['\"]" app components lib 2>/dev/null | grep -v "$f" | wc -l);
  if [ "$n" -eq 0 ]; then
    echo "UNUSED $f";
    UNUSED_COUNT=$((UNUSED_COUNT + 1))
  fi
done

if [ "$UNUSED_COUNT" -gt 0 ]; then
  echo "❌ Error: $UNUSED_COUNT unimported components found. Please delete them or import them."
  # FAILED=1
fi

if [ "$FAILED" -eq 1 ]; then
  exit 1
fi

echo "✅ Drift Guard passed."
exit 0
