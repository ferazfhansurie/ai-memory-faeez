# Google Ads audit — account 871-470-7145 (last 30 days, 2026-06-22)

~RM4,092 spent across 6 active campaigns (~RM136/day). ~16 idle paused/removed 2022-era campaigns.

| Campaign | Type | Spend (RM) | Clicks | Conv. | Cost/Conv | Avg CPC |
|---|---|--:|--:|--:|--:|--:|
| Keywords Search (RM50/day) | Search | 1,488 | 1,219 | 1,330 ⚠️ | 1.12 | 1.22 |
| Android – Loyalty App | App | 1,089 | 20,025 | 1,710 | 0.64 | 0.05 |
| **PUSH Recruitment Ads** | **P-Max** | **751** | **2,896** | **0** 🔴 | — | 0.26 |
| Android – Vendor App | App | 626 | 9,140 | 783 | 0.80 | 0.07 |
| iOS – Loyalty App | App | 92 | 731 | 17 | 5.43 | 0.13 |
| iOS – Vendor App | App | 45 | 178 | 4 | 11.24 | 0.25 |

## Findings
1. 🔴 **PUSH Recruitment Ads (PMax): RM751, 0 conversions.** Tied to the FatHopes PUSH content work. PMax cannot optimize with no conversion signal — likely no conversion action linked or untagged landing page. TOP PRIORITY.
2. ⚠️ **Keywords Search: conversions (1,330) > clicks (1,219)** — conversion action is over-counting soft events; the RM1.12 cost/conv is probably not real leads.
3. ✅ App-install campaigns (Android) efficient at RM0.64–0.80/install. iOS pricier (normal).
4. 🧹 ~16 paused/removed 2022 campaigns — archive for cleanliness, low priority.

## Next step
Diagnose PUSH 0-conversions: pull conversion actions + the PMax campaign's goals/asset groups.
GAQL starting points:
- `SELECT conversion_action.name, conversion_action.status, conversion_action.type, conversion_action.category FROM conversion_action`
- `SELECT campaign.name, campaign_criterion... ` / asset group queries for campaign id `22591401098`.
