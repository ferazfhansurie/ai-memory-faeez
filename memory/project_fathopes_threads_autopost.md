---
name: project-fathopes-threads-autopost
description: Automated Threads poster for the FatHopes loyalty app, KL Manglish voice, phased + engagement-ramped, runs on Vercel cron
metadata:
  node_type: memory
  type: project
---

Built starting 2026-07-04. A hands-off Threads auto-poster for the FatHopes Energy **petrol loyalty app** (not the PUSH/UCO side, not the animated series). Runs in the **motionboards** repo. Full operator manual: `THREADS-AUTOPOSTER.md` at the root of this ai-memory repo (mirrors `docs/threads-autopost.md` in motionboards).

Persona: a Klang Valley money-talk guy on account `@farzmus` (Threads user id `25358256307205104`). Writes with Claude (`claude-sonnet-4-6`) and publishes via Meta's Threads API (`graph.threads.net`, own long-lived 60-day token, scopes threads_basic + threads_content_publish, NOT the parked META_APP_TOKEN). Cron on Vercel: 8am + 8pm MYT (`0 0` and `0 12` UTC).

Design pillars (all in `src/lib/threads.ts`):
- **Phases** (THREADS_CAMPAIGN_START): days 1-3 audience/no-FatHopes, 4-6 soft intro every other day, 7+ FatHopes-forward.
- **Engagement ramp**: days 1-2 statements only, NO questions (a nobody acting like an influencer reads fake); a code guard strips questions + disables tags on days 1-2; warms to full conversation by day 8. This was the key user correction.
- **Moods**: ~28% of posts take a mood (low/hyped/ranty/reflective/unhinged) so the feed feels human.
- **Human/anti-AI**: KL Manglish, lowercase, Malay shorthand, occasional typo, and NO em-dashes (stripped in code, they are an AI tell). Aligns with [[feedback_kl_malay_voice]] and [[feedback_content_genz_funny_serious]].

Key facts / gotchas:
- Dashboard "Generate access token" already returns a long-lived token, so `th_exchange_token` 400s ("Session key invalid"); use `th_refresh_token` to reset the 60-day clock. Refresh before expiry or ask to auto-refresh via Neon.
- Endpoint `GET /api/threads-autopost` is CRON_SECRET-gated; `?dry=1` previews without publishing; can be fired from any external trigger with the secret.
- Env vars live in the same Vercel project as DATABASE_URL/ANTHROPIC_API_KEY: THREADS_USER_ID, THREADS_ACCESS_TOKEN, CRON_SECRET, THREADS_CAMPAIGN_START, optional THREADS_AUDIENCE_DAYS / THREADS_INTRO_DAYS / THREADS_MOOD_CHANCE / THREADS_MODEL.
- Images: not wired into publishing yet (text-only posts). A content planner drafts Nano Banana 2 image prompts + references for ~1 in 4 posts; user wants REAL phone-photo references (pump display, mamak table, late-night), not branded posters, since the whole point is to not look like an ad. Per [[feedback_real_photos_for_characters]].
- No stored draft queue yet: cron generates + publishes on the fly. A drafts+schedule screen (Neon table + app page) was offered as the next step, not yet built.
