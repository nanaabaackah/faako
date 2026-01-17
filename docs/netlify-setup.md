# Netlify setup (three sites)

This repo is set up for three Netlify sites in a single monorepo.

Sites and bases:
- website: base `apps/website`
- erp: base `apps/erp`
- api: base `apps/api`

Build settings (already defined in each `netlify.toml`):
- website: build `npm run build`, publish `dist`
- erp: build `npm run build`, publish `dist`
- api: build `echo 'No build step for API'`, publish `netlify/static`, functions `netlify/functions`

Domain mapping:
- root: faako.nanaabaackah.com -> website
- app: app.faako.nanaabaackah.com -> erp
- api: api.faako.nanaabaackah.com -> api

Environment variables (per site):
- website: `VITE_API_BASE_URL`
- erp: `VITE_API_BASE_URL`
- api: `DATABASE_URL`

Netlify CLI quick start (optional):
1) `netlify login`
2) Create sites and note the site IDs:
   - `netlify sites:create --name faako-website`
   - `netlify sites:create --name faako-erp`
   - `netlify sites:create --name faako-api`
3) In Netlify UI, set the base directory for each site to the paths above.

Local dev (optional):
- website: `netlify dev --dir apps/website`
- erp: `netlify dev --dir apps/erp`
- api: `netlify dev --dir apps/api`
