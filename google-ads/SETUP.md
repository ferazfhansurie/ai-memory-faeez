# Google Ads — connect & continue on any device

The Google Ads API connection is **working**. This folder lets you re-create it on a new machine with a `git pull` + pasting **3 secrets** once.

## What's here
- `.env.example` — all the variable names (no secret values). Copy to `.env` and fill in.
- `get-refresh-token.mjs` — one-time OAuth helper that prints a refresh token.
- `query.mjs` — runs any GAQL query (or lists accessible accounts). Uses Node built-ins only — no `npm install`.
- `AUDIT.md` — snapshot of the account state.

## Known connection facts (safe to store)
| Thing | Value |
|---|---|
| GCP project ID | `serious-timer-500011-a0` |
| Manager (MCC) account | `162-977-0601` → `login-customer-id` |
| Ad account (campaigns) | `871-470-7145` → customer id `8714707145` |
| API version | `v22` |
| OAuth client type | Desktop app (`795960501103-…`) |
| Developer token access | Basic (real data) |

## Setup on a new device
1. `git pull` this repo.
2. `cp google-ads/.env.example google-ads/.env`
3. Fill the **3 secrets** into `.env`:
   - `GOOGLE_ADS_DEVELOPER_TOKEN`
   - `GOOGLE_ADS_CLIENT_SECRET`
   - `GOOGLE_ADS_REFRESH_TOKEN`
   (Client ID, project, account IDs are already filled in `.env.example`.)
   - Don't have them? Recover the dev token + client secret from Google Ads API Center / GCP Credentials, and regenerate the refresh token with `node google-ads/get-refresh-token.mjs`.
4. Test: `node google-ads/query.mjs`  → should list accessible customers.
5. Pull campaigns: `node google-ads/query.mjs "SELECT campaign.name, metrics.cost_micros, metrics.conversions FROM campaign WHERE segments.date DURING LAST_30_DAYS"`

## ⚠️ Security
The 3 secrets are **never** committed (see repo `.gitignore`). The secrets were once pasted into a chat — rotate them when convenient:
- Client secret → GCP Console → Credentials → reset.
- Developer token → only reset if you suspect exposure (it's account-wide).
- Refresh token → re-run `get-refresh-token.mjs` after rotating the client secret.
