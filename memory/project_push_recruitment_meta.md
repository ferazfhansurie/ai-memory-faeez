---
name: project-push-recruitment-meta
description: "PUSH driver recruitment on Meta — account, Week 37 targeting, daily lead-log format"
metadata: 
  node_type: memory
  type: project
  originSessionId: 5d3e9062-2224-455b-b19f-377b63d161bd
---

FatHopes **PUSH** driver/agent recruitment runs on Meta account `725484841474739` ("Disable acc") — weekly "PUSH Ads Week N" campaigns (~RM500/wk each), click-to-WhatsApp / Leads.

**Key ad set:** Week 37 Copy 2 → "Targetting 1" (`120248488259630294`). Targeting as of 2026-06-25: **14 named cities** (Bangi, Semenyih, Putrajaya, Subang Jaya, Puchong, Telok Panglima Garang, Jenjarom, Banting, Cheras, Sepang, Salak Tinggi, Seremban + Bukit Mertajam & Batu Kawan, Penang) · **excludes the other ~12 states** · **age 25–65** · audience copied from the Kelantan ad set = **GrabTaxi interest + ~22 driver/delivery job titles** (Truck/Grab/Courier/Delivery/CDL…). "Entrepreneurship" was removed (it kept serving the ad to Firaz himself). The "Targetted To Kelantan" campaign (`120249119280020294`) is **PAUSED**.

**Insight:** pausing Kelantan + retargeting to Selangor/KL cities flipped daily leads **Selangor 0→21, Kelantan 36→11 in one day**. Leads skew heavily Kelantan otherwise.

**Daily lead-log format** (Firaz requests this regularly):
`DD Month — N applications for PUSH (X D, Y GDL & E-Full)` then `Kelantan : .. Johor : .. Kedah : .. Melaka : .. Negeri Sembilan : .. Selangor : .. Terengganu : .. Sarawak : .. (Other : ..)`.
**How to apply:** D = car-licence-only bucket; GDL / E-FULL (incl. combos like "D, GDL") = the commercial bucket; the two sum to total. Dedupe by phone (flag repeats). A trailing **"meta"** tag = Meta-sourced lead; non-meta rows are mostly D-only from another channel. Parse with a script, don't hand-count.
