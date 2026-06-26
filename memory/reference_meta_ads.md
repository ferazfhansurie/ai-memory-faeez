---
name: reference-meta-ads
description: "Meta Ads connection, account map, and driving it via the Graph API token"
metadata: 
  node_type: memory
  type: reference
  originSessionId: 5d3e9062-2224-455b-b19f-377b63d161bd
---

Meta Ads is reachable two ways: (1) a managed **MCP server** (`mcp__meta-ads__*`) — convenient but limited; (2) a **full-access Graph API user token** stored in `C:\Users\user\Documents\motionboards\.env.local` as `META_APP_TOKEN` (USER token, app_id `762372738976049`, **never expires**; scopes include ads_management, ads_read, business_management, pages_show_list/manage_ads, leads_retrieval, whatsapp_business_management/messaging). **Prefer the token** for anything the MCP can't do.

**MCP limits → use the Graph token instead:** the MCP can't READ ad-set targeting, has no geo/interest **search**, can't create native click-to-WhatsApp creatives (errors out), and MCP edits force the entity to PAUSED (must re-activate). Graph API (v23.0, via curl/Node using the token) does all of these and edits don't auto-pause.

**Account map** (all under the one token): `725484841474739` "Disable acc" = the real **FatHopes PUSH recruitment** account (see [[project-push-recruitment-meta]]); `1258968307966399` FHE Malaysia; `1495939271192739` FHE Indonesia; `572268621423470` **ShineWrappers** (see [[project-shinewrappers-ads]]). Pages: ShineWrappers `121551227591222`.

**Hosting images for Meta `image_url`** (Meta can't take local files, MCP has no upload): POST the file to MotionBoards `https://motionboards.vercel.app/api/upload` with `Authorization: Bearer <MB_KEY>` (from .env.local) + header `x-filename` → returns a public `/api/files/...` URL Meta will fetch. Script pattern in scratchpad/`upload4.mjs`.

Secrets (META_APP_TOKEN, MB_KEY) live only in `.env.local` (git-ignored) — never commit; rotate if exposed.
