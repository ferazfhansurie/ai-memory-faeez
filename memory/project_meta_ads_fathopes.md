---
name: project_meta_ads_fathopes
description: FatHopes Meta Ads account status — connected via MCP, audit completed June 2026, kill/scale plan pending user approval
metadata:
  node_type: memory
  type: project
  originSessionId: b2555ad8-8d41-52c5-a71e-0f9882265ba8
---

**Meta Ads account:** "Disable acc", ID **`725484841474739`**, currency **MYR** (Malaysia).

A separate FatHopes Singapore (SGD) ad account is NOT accessible under the current Facebook login.

**MCP capability note:** the Meta Ads MCP exposes campaign management + analytics only. It **cannot pull raw lead-form submissions** (names/phones). For actual PUSH applicant data use Meta Leads Center / Instant Forms CSV, a CRM/Zapier pipe, or the `/leads` Graph API.

---

**Audit completed (last 30 days as of 2026-06-21):**
- 105 "active" campaigns but only **8 actually spent** (~MYR 1,615 total). The other ~97 are dormant clutter — not costing money but make the account unreadable.
- **Lead-objective campaigns beat traffic (LINK_CLICKS) campaigns** on cost per application. Traffic campaigns were the biggest spenders with 0 trackable leads.

**Scale list:**
- **PUSH Week 37 – Targetted to Kelantan** = best in account: **~RM0.99 CPL, 5.28% CTR** — underfunded (RM30/day, only ~RM8.88 delivered). **SCALE THIS.**
- **PUSH Week 37 – Copy 2** = volume engine: 168 leads at **RM3.15 CPL**. Keep/scale.

**Kill list (pending user go-ahead):**
- PUSH Week 35 (LINK_CLICKS, RM500 spent, 0 leads)
- RANGER Week 37 (LEADS objective but 0 leads, 0.70% CTR — broken creative)
- Recycler Week 21 (old)
- PUSH Week 34 (old)

**Recommended action:** pause the 4 kills, move ~RM775/mo budget into the Kelantan + Copy 2 lead campaigns. **Not yet executed as of 2026-06-21 — awaiting user go-ahead.**

---

**Application data tally format (what the user likes):**
```
<date> — <N> applications for PUSH (<D> D, <rest> GDL & E-Full)
Kelantan : <n>  Johor : <n>
```
Logic: **D** = D-licence only; **GDL & E-Full** = anyone with GDL or E-Full; dedupe by phone number.

Applicants concentrated in **Kelantan, Johor, Melaka** — which is why the Kelantan-targeted ad set performs best.
