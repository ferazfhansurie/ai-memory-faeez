---
name: reference-google-ads-project
description: "Google Ads API connection details for Firaz's FatHopes ad account (working)"
metadata: 
  node_type: memory
  type: reference
  originSessionId: 5d3e9062-2224-455b-b19f-377b63d161bd
---

Google Ads API connection is **LIVE and working** (established 2026-06-22).

- **GCP project ID:** `serious-timer-500011-a0` (replaced earlier `clever-bounty-473007-q2`)
- **Manager (MCC) account:** `162-977-0601` → use as `login-customer-id`
- **Target ad account (campaigns live here):** `871-470-7145` (customer id `8714707145`)
- **Current API version:** `v22` (v18/v19/v20 are retired/rejected)
- **Developer token:** has **Basic** access (returns real data, not just test)
- **OAuth client type:** Desktop app (client id prefix `795960501103-…`)

**Secrets** (developer token, OAuth client secret, refresh token) are kept in a local git-ignored `.env` at `C:\Users\user\Documents\google-ads-mcp\.env` — and a mirror setup in the `ai-memory-faeez` repo under `google-ads/` (with `.env.example`, NOT the real secrets). They were pasted into a chat once and should be **rotated**.

To reconnect from any device: clone/pull `ai-memory-faeez`, copy `google-ads/.env.example` → `.env`, fill the 3 secrets, run `node google-ads/query.mjs`. See [[project_google_ads_audit]] for account state.
