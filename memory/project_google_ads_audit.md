---
name: project-google-ads-audit
description: "State of Firaz's FatHopes Google Ads account + the PUSH 0-conversions problem"
metadata: 
  node_type: memory
  type: project
  originSessionId: 5d3e9062-2224-455b-b19f-377b63d161bd
---

Google Ads account `871-470-7145` audit (last 30 days, snapshot 2026-06-22): ~RM4,092 spent across 6 active campaigns (~RM136/day), plus ~16 idle paused/removed 2022-era campaigns.

**Active campaigns:**
- Keywords Search (RM50/day, Search) — RM1,488, 1,219 clicks, 1,330 "conversions" ⚠️ conv > clicks = over-counting soft events; verify the conversion action.
- Android Loyalty App (App) — RM1,089, 1,710 installs @ RM0.64 — healthy.
- **PUSH Recruitment Ads (Performance Max) — RM751 spent, 0 conversions** 🔴 the campaign tied to our content work. PMax can't optimize with 0 conversion signal; likely no conversion action linked or untagged landing page. TOP PRIORITY to fix.
- Android Vendor App (App) — RM626, 783 installs @ RM0.80 — healthy.
- iOS Loyalty (RM92, 17 conv) + iOS Vendor (RM45, 4 conv) — pricey per conv, normal for iOS.

**Why:** PUSH recruitment (FatHopes UCO collection — see [[project_pushlife_office_sitcom]]) is the active priority; pouring planned content traffic into a campaign with broken conversion tracking wastes spend and blinds optimization.

**How to apply:** Next step is diagnosing the PUSH 0-conversions issue (pull conversion actions + the PMax goals/asset groups). Connection details in [[reference-google-ads-project]].
