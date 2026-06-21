---
name: feedback_seedance_cannot_preserve_faces
description: Seedance re-renders every frame and morphs real faces — for pixel-exact real photos use CapCut/After Effects or animated HTML instead
metadata:
  node_type: memory
  type: feedback
  originSessionId: b2555ad8-8d41-52c5-a71e-0f9882265ba8
---

**Critical Seedance limitation:** any generative video model re-renders every frame from scratch. Seedance **cannot keep real people's faces pixel-identical** — it morphs them. This matters whenever the brief requires the *actual* event/product photo (FatHopes recaps, client headshots, etc.) to appear unchanged.

**Why:** Seedance's diffusion process blends reference images into generated frames rather than compositing them. The more references, the more blending. Even a single-image I2V run will subtly drift facial geometry by frame 2.

**What to do instead:**

1. **Best fidelity within Seedance:** use **one image per beat** (single ref, no blending) then stitch beats in an editor. Reduces morphing but doesn't eliminate it.

2. **Guaranteed-exact route (preferred for FatHopes recaps):**
   - **CapCut / After Effects** — Ken Burns set to OFF, real photo on a static layer, animated text/stat overlays on top. Photos stay literally untouched; Malay text and stat numbers are always correct.
   - **Animated HTML page screen-recorded** — code the infographic in HTML/CSS/JS, embed the real photos as `<img>` tags, animate only the typographic elements, screen-record at 1080x1920. Zero generation, 100% fidelity.

**How to apply:**
- For FatHopes event recaps: use CapCut/AE or animated HTML. Do not route through Seedance.
- For spots where character likeness is important but not pixel-exact: use single-image Seedance + editorial judgment on drift.
- See [[feedback_fathopes_event_recap_format]] for the full recap format spec.
- See [[seedance_replicate_singleimage_only]] for Replicate's separate limitation (single image field only).
