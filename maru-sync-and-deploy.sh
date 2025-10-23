#!/bin/bash
# =============================================
# Maru Website Sync + Cloudflare Deployment Checker
# Author: Jimmy Motsei | Maru Online
# =============================================

# SETTINGS
REPO_PATH="$HOME/Projects/maru-website"
GITHUB_REMOTE="https://github.com/jimmy-motsei/maru-website.git"
CLOUDFLARE_ACCOUNT_ID="d049f783ea7adfd4975e4bde2106b90a"
CLOUDFLARE_PROJECT_NAME="maru-website"

# 1️⃣ Sync local repo and check for inconsistencies
echo "🔍 Checking repository status..."
cd "$REPO_PATH" || { echo "❌ Repo path not found!"; exit 1; }
git status

# 2️⃣ Commit and push changes to GitHub
echo "🧭 Committing and pushing changes..."
git add .
git commit -m "fix: updated paths and verified consistency after folder restructure" || echo "⚠️ Nothing to commit"
git push origin main

# 3️⃣ Trigger Cloudflare Pages redeploy
echo "🚀 Triggering Cloudflare redeployment..."
curl -X POST "https://api.cloudflare.com/client/v4/accounts/$CLOUDFLARE_ACCOUNT_ID/pages/projects/$CLOUDFLARE_PROJECT_NAME/deployments" \
  -H "Authorization: Bearer $CLOUDFLARE_API_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{"deployment_trigger": {"type": "manual"}}'

# 4️⃣ Confirm deployment status
echo "🧾 Checking deployment status..."
curl -s -X GET "https://api.cloudflare.com/client/v4/accounts/$CLOUDFLARE_ACCOUNT_ID/pages/projects/$CLOUDFLARE_PROJECT_NAME/deployments" \
  -H "Authorization: Bearer $CLOUDFLARE_API_TOKEN" \
  -H "Content-Type: application/json" \
  | jq '[.result[] | {id: .id, created_on: .created_on, status: .latest_stage.status, url: .url}] | .[0]'

echo "✅ Process complete. Deployment status shown above."
