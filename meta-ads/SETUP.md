# Meta Ads — connect & operate on any device

Meta Ads is driven via a **full-access Graph API user token** (faster + fewer limits than the managed MCP).

## Connection
- Token lives in `motionboards/.env.local` as **`META_APP_TOKEN`** (USER token, app_id `762372738976049`, **never expires**).
- Scopes: `ads_management, ads_read, business_management, pages_show_list, pages_manage_ads, pages_read_engagement, leads_retrieval, whatsapp_business_management, whatsapp_business_messaging`.
- Verify with: `GET https://graph.facebook.com/v23.0/me/accounts?access_token=…` (lists Pages) and `/me/adaccounts`.
- The token reaches **every page + ad account** under the user — one app covers all of it.

## Why the token (not just the MCP)
The managed MCP (`mcp__meta-ads__*`) **cannot**: read ad-set targeting, search geo/interest IDs, or create native click-to-WhatsApp creatives — and its edits force entities to PAUSED. The Graph API (v23.0) does all of these and edits don't auto-pause.

## Account map
| Account | ID | Use |
|---|---|---|
| Disable acc | `725484841474739` | **FatHopes PUSH recruitment** (weekly PUSH Ads, click-to-WhatsApp) |
| FHE Malaysia Ads | `1258968307966399` | FatHopes Malaysia |
| FHE Indonesia Ads | `1495939271192739` | FatHopes Indonesia |
| ShineWrappers | `572268621423470` | car-wrap shop client (⚠️ payment error) |

Pages: ShineWrappers FB `121551227591222` (WhatsApp +6011-6188 4476).

## Hosting images for Meta `image_url`
Meta can't take local files and the MCP has no upload. Push the file to MotionBoards:
`POST https://motionboards.vercel.app/api/upload` with `Authorization: Bearer <MB_KEY>` + header `x-filename` → returns a public `/api/files/...` URL Meta will fetch.

## Setup on a new device
1. `cp meta-ads/.env.example motionboards/.env.local` (or merge) and fill `META_APP_TOKEN` + `MB_KEY`.
2. Run any Graph API call with the token (Node/curl). No npm install needed for basic calls.

## ⚠️ Security
`META_APP_TOKEN` and `MB_KEY` are **never committed** (`.env*` is git-ignored). Rotate the token if it's ever exposed.
