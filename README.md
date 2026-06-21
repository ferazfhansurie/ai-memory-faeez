# ai-memory-faeez

Portable memory + working context for **Faeez (Firaz)** — designed so **any AI assistant** (Claude Code, Claude app, ChatGPT, etc.) can clone this repo and instantly understand who I am, how I work, and what I'm building.

This repo is **code-free on purpose**. It is decoupled from any project codebase so it can be loaded as context anywhere.

## How an AI should use this repo

1. Read [`memory/MEMORY.md`](memory/MEMORY.md) first — it is the **index**. One line per memory, each pointing to a file in `memory/`.
2. Read the individual files in [`memory/`](memory/) for the full fact. They are grouped by type via filename prefix:
   - `user_*` — who I am (role, practice, preferences)
   - `feedback_*` — how I want you to work (rules, corrections, confirmed approaches) — **follow these**
   - `project_*` — ongoing work, goals, constraints
   - `reference_*` — pointers to external resources and style north-stars
3. Files use `[[name]]` to link to related memories (the `name:` slug in another file's frontmatter).
4. [`AI-CONTEXT-motionboards.md`](AI-CONTEXT-motionboards.md) is a fuller handoff doc for the MotionBoards project specifically.

## Memory file format

Each file has YAML frontmatter (`name`, `description`, `metadata.type`) followed by the fact. `feedback`/`project` entries include **Why:** and **How to apply:** lines.

## Keeping it current

This is a mirror of my local Claude Code auto-memory at
`~/.claude/projects/c--Users-user-Documents-motionboards/memory/`.
When that updates, re-copy the files here and push. (The local store never syncs to any cloud automatically — this repo is the bridge.)

## Privacy

**Keep this repository private.** It contains personal and business context. Infrastructure-access notes are intentionally excluded from this repo.
