Write or critique a Seedance 2.0 video prompt for Image-to-Video (I2V) or Start-to-End frame (S2E) modes. Use when the user wants to animate an image, build a transition between two frames, or fix a prompt that's giving jittery / off-vibe output.

# Seedance 2.0 — How to actually prompt it

## Non-negotiables in this workspace

- Always deliver **two versions**: a long creative brief/treatment, then a paste-ready compressed prompt.
- The compressed prompt must be ASCII-only and verified under 2000 characters with `wc -c` before handing it off.
- Strip car brand names from paste-ready model prompts. Use generic descriptors ("white compact sedan", "yellow 4x4", "freshly wrapped coupe") and let the reference image carry the exact identity.
- Characters come from real uploaded photos. Do not ask Seedance to invent or re-identify a real person from text.

## The mental shift before you write a single word

Stop describing the picture. The image already does that. **You are directing what happens next.** Talk to Seedance like you're talking to an editor on the timeline: "hold the frame, let her turn her head, then push in slowly." Not "a beautiful woman in a dress." It already sees the woman.

The single biggest rule, the one almost everyone breaks: **separate what the camera does from what the subject does.** Two sentences, never one. The moment you write "she runs as the camera shakes wildly," you've handed Seedance a blender and it gives you jitter.

## I2V — instruct the motion, lock the look

Skeleton, in this order:

1. **What the subject does** — one verb, beat by beat. Imperative voice.
2. **What the camera does** — one move. One. Pick from: hold, push in, pull out, pan, track, orbit, handheld, aerial.
3. **What stays the same** — "preserve composition and colors," or "keep wardrobe and lighting locked."
4. **Atmosphere cue** — lighting first, everything else second.
5. **Don't list** — "avoid jitter, avoid bent limbs, avoid extra fingers."

40–80 words. The image carries the rest.

**Bad (info-dump, robotic):**
> A woman with red hair in a leather jacket standing in a neon-lit alleyway, cyberpunk style, cinematic, 4k, beautiful, dramatic, fast camera movement, amazing atmosphere

**Good (directive, conscious):**
> She turns her head slowly toward the camera, exhales once, then breaks into a small smile. Camera holds fixed framing — no zoom, no pan. Neon signs flicker behind her, casting cyan and magenta across her jacket. Preserve her hair color and wardrobe. Avoid jitter and bent fingers.

## S2E — describe the journey, not the destinations

Start-to-End frame gives Seedance the first image and the last image. **It already knows where to start and where to end.** Stop describing either frame. Describe the *transition*. The verbs in between.

Skeleton:

1. **Anchor**: "Use the first uploaded frame as the opening frame and the second uploaded frame as the ending frame."
2. **The arc** — one sentence on the transformation. Cause and effect.
3. **The middle beats** — 2–3 things that happen between. Numbered if you want.
4. **One camera move** that supports the arc.
5. **Pacing** — "smooth," "deliberate," or "snap-cut at the midpoint." Not "fast."

**Bad:**
> Start frame shows a closed flower. End frame shows an open flower. Make a video.

**Good:**
> Use the first uploaded frame as the opening frame and the second uploaded frame as the ending frame. The bud trembles, splits along one seam, then unfurls petal by petal as morning light strengthens across it. Camera pushes in slowly throughout — no cuts. Pacing is patient, almost meditative. Preserve the dewdrops and stem color from the source frames.

## The 8 camera moves (pick exactly one)

| Move | Use it for |
|---|---|
| Hold (fixed) | Subject does the work; portraits, dialogue, reactions |
| Push in | Emotional focus, reveal of detail, intensity ramp |
| Pull out | Reveal scale, end of a story beat, "step back" feeling |
| Pan | Scanning a room, following sideways motion |
| Track | Following a subject who is moving (walking, running, driving) |
| Orbit | Product hero shots, portraits with depth, 360 reveals |
| Handheld | Documentary feel, urgency, raw POV — micro-jitter is intentional |
| Aerial | Establishing shot, scale, landscape, opening or closing beat |

## Two traps that ruin output

**The "fast" trap.** Fast camera + fast subject + busy scene = guaranteed garbage. Pick one engine to run hot. If the subject is sprinting, the camera holds. If the camera whip-pans, the subject is still.

**The adjective dump.** "Cinematic, beautiful, epic, dramatic, 4k, masterpiece." Delete all of it. Replace with one specific reference: *"Wes Anderson symmetry,"* *"Apple keynote lighting,"* *"35mm grain, slight halation."* One concrete anchor beats ten vibes.

## The lighting cheat

If you only add one sentence, add lighting. *"Hard rim light from camera-left, deep shadow on the right side of her face."* That single line does more work for quality than every other word combined.

## VFX inline syntax

For effects that need to happen mid-clip, drop them in brackets at the moment they trigger:
> She raises her hand. [VFX: branching electric circuits pulse white-blue across her palm.] Camera holds.

## Multi-reference caveat (the yaroflasher pattern)

Yaroflasher-style multi-reference prompting is the creative north star, but it is provider-specific.

Current MotionBoards Seedance runs through Replicate unless reverified otherwise:

| Provider path | What Seedance accepts | Prompt syntax |
|---|---|---|
| MotionBoards / Replicate I2V | One source image | Refer to "the source image" in plain English |
| MotionBoards / Replicate S2E | First frame + last frame | Refer to "the first frame" and "the ending frame" |
| Volcengine / ByteDance Ark / FlashBoards | Provider-specific multi-image refs | `@Image1`, `@Image2`, etc. |

Do not put `@ImageN`, `@char`, or `@product` tokens into MotionBoards/Replicate Seedance prompts. They are just text to that provider path and can trip safety classifiers.

If a spot needs multiple references, first use Nano Banana 2 to composite/stage the product, characters, vehicle, environment, and logo into one source frame. Then animate that single source frame in Seedance. For a transformation, make first/last frames and use S2E.

**Volcengine-only pattern, when the user explicitly says they are not using MotionBoards/Replicate:**

1. **Top of prompt — reference manifest.** One sentence per image, what it locks. Start with `Use @Image1 as the ...` and explicitly say what to preserve.
2. **Middle — the arc.** One unbroken cinematic sentence per beat, no hard cuts, camera move per beat, pacing words.
3. **Bottom — constraints.** Hard `do not` lines for things Seedance loves to break: blending faces, drifting paint colors, opening mouths to "speak," changing wardrobe mid-shot, adding pedestrians, branding inside live action.

**Identity lock language that actually works** (use verbatim):
- "preserve [her shoulder-length wavy brown hair, white v-neck lace top, gold pendant] exactly"
- "do not blend, swap, or homogenise their looks — [one is X, the other is Y], that visual contrast is intentional"
- "preserve composition, colors, character identity, and lighting from the source images"

**What the reference image actually carries** (don't waste tokens describing what's already in it):
- The image already has the face, the wardrobe, the car. You don't need to redescribe.
- Spend the tokens on what changes — motion, beats, camera arc, the moments where Seedance might drift.

## The 2000-character ceiling

**Most upstream wrappers truncate Seedance prompts at 2000 characters.** If you write 12,000, the back end keeps the first 2,000 and silently drops the rest — usually the constraints block, which is exactly what you can't lose.

Two-version workflow:

1. **The reference doc** — long-form prose, no character limit. Write the full creative treatment in a `.md` brief. This is for you, not the model.
2. **The paste-ready prompt** — under 2000 characters, ASCII only (no em-dashes, no smart quotes, no arrows — they each cost 2–3 bytes). This is what you actually send to Seedance.

Compress in this order until under 2000:
1. Strip every adjective that isn't doing structural work ("beautiful", "epic", "cinematic" alone go first)
2. Collapse "the camera does X then does Y then does Z" into "camera arc: X → Y → Z"
3. Cut redundant constraints (if "do not blend the girls' faces" is in the arc, it doesn't need to repeat in the constraints block)
4. Replace em-dashes (—) with hyphens, smart quotes with straight quotes, arrows (→) with `to`
5. Drop the camera-language summary at the end if the beats already imply it

**Verify with `wc -c`** before pasting. Trailing newlines and BOM count.

## How to apply this

When the user asks for a Seedance prompt:

1. Ask **mode**: single-source I2V, S2E, or Volcengine-only multi-reference if the user explicitly says they are not using MotionBoards/Replicate.
2. Ask **what should happen** — the action / arc — in plain English. Don't ask for adjectives.
3. Ask **the vibe anchor** — one reference (a director, a film, a brand aesthetic). Reject vibe-soup answers like "epic, cinematic, beautiful" and ask for one concrete reference instead.
4. For MotionBoards/Replicate: ask which single staged/source image to animate, or which first/last frames define the S2E transition. For Volcengine-only: ask for the reference manifest — what each `@ImageN` locks.
5. Build the prompt using the skeleton above. Keep simple I2V at 40–80 words; S2E at 50–100 words; provider-specific multi-reference at whatever the arc requires, but **always verify under 2000 chars before handing it off**.
6. Show the prompt, then explicitly call out: which camera move you picked, which engine is "hot" (camera or subject), and what you locked with "preserve."
7. Also output a **paste-ready compressed version** in a separate fenced block — ASCII-only, under 2000 chars, verified with `wc -c`.
8. If vehicles are involved, replace brand/model names in the paste-ready prompt with generic descriptors and rely on the uploaded source image for MotionBoards/Replicate; use provider-specific image tags only outside Replicate.

When critiquing an existing Seedance prompt:

1. Find the camera/subject conflict — flag any sentence that mixes both.
2. Count adjectives — strike anything vague ("beautiful," "epic," "cinematic" alone).
3. Find missing lighting — add one rim/key/practical light line.
4. Check for "fast" — if multiple things are fast, slow all but one.
5. Rewrite, then explain the three changes that mattered most.
