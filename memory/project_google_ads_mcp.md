---
name: project_google_ads_mcp
description: Google Ads MCP integration for FatHopes — in progress as of 2026-06-21; blocker is GCP Project ID
metadata:
  node_type: memory
  type: project
  originSessionId: b2555ad8-8d41-52c5-a71e-0f9882265ba8
---

Goal: connect Google Ads (server: `git+https://github.com/googleads/google-ads-mcp`) so the AI can read/manage the FatHopes Google Ads account.

**Status as of 2026-06-21: IN PROGRESS — not finished.**

**What is done:**
- **pipx installed** (runtime). Config will launch via `python -m pipx run ...` to dodge PATH issues. Target file: `.mcp.json` (gitignored — keep secrets out of repo).
- **MCC (Manager) account ID:** `162-977-0601`. Use digits-only `1629770601` as `login-customer-id`. User created their own Manager account because API Center only appears on Manager accounts.
- **Developer token:** obtained from the MCC's API Center. NOT stored in this repo (secret). Was pasted in chat once — user should **regenerate it** in API Center to be safe. Likely still **Test access** (sandbox) until Basic access is approved (1-2 day Google form) — live data won't return until then.
- **OAuth Client ID/Secret:** created (Desktop app type). Secret must be filled directly into `.mcp.json` by the user, never pasted in chat.
- **FatHopes Google Ads account access:** user has access and was guided to accept the manager link (FatHopes account -> Admin -> Access and security -> Managers -> Accept). Requires Admin-level access on that account.

**Blocker — STILL NEEDED:**
- **GCP Project ID** — user kept landing on the Organization ID (`714912879699`) by mistake. That is NOT a project ID. Next step: Cloud Console -> project picker -> "All" tab -> row where Type = "Project" -> copy that ID (string like `fathopes-ads-xxxxx`). Or create a New project + enable Google Ads API.

**Remaining steps to finish:**
1. Get GCP Project ID (see blocker above)
2. Write `.mcp.json` entry with all values
3. User does one-time browser OAuth Authorize
4. Apply for Basic access (for live data beyond sandbox)
