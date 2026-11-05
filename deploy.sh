#!/bin/bash
# Deploys the site to production: bumps the CSS cache-busting version
# automatically (based on style.css content hash) and then publishes
# to Vercel under the company account/team.
set -e
cd "$(dirname "$0")"
node scripts/bump-asset-versions.js
npx vercel --prod --yes --scope 7-cajas-distribuidora
