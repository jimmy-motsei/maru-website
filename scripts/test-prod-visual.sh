#!/usr/bin/env bash
set -euo pipefail

npm run build

npm run start > /tmp/maru-start.log 2>&1 &
SERVER_PID=$!

cleanup() {
  kill "$SERVER_PID" 2>/dev/null || true
  wait "$SERVER_PID" 2>/dev/null || true
}
trap cleanup EXIT

sleep 5
PW_SKIP_WEBSERVER=1 playwright test
