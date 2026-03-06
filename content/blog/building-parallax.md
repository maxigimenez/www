---
title: 'Building Parallax: My AI Workflow for Faster Side-Project Shipping'
date: '2026-03-05'
excerpt: 'I wanted a reliable way to turn tickets into real progress without losing control. Parallax is the local AI orchestrator I built to go from plan to code to review, fast.'
readingTime: '7 min read'
coverImage: 'parallax-ai'
---

I’ve been chasing a very specific feeling lately: opening a side project at night and actually shipping meaningful work before I run out of time or energy.

That sounds simple, but in practice it’s messy. AI coding tools are great, but they can also drift, overdo, miss context, or get stuck in loops. I wanted something stricter. Something that could help me move faster without making me surrender control.

So I started building **Parallax**.

## The problem I wanted to solve

My side projects usually die in one of these states:

1. Too many ideas, not enough time.  
2. I ask AI to “just do it,” and it either does too much or does the wrong thing.  
3. No PR feedback, just merge to main, great for quick iteration, but not great for code quality.  

I wanted a system that helps me work in tight cycles:

- **Plan**
- **Code**
- **Review**
- Repeat

## What Parallax is

Parallax is a local orchestration layer for AI-assisted development.

At a high level, it does this:

1. Pulls tickets from Linear or GitHub using filters.
2. Creates a dedicated git worktree per task.
3. Runs an AI agent in **plan mode** first.
4. Waits for approval.
5. Runs **execution mode** only on the approved plan.
6. Opens/updates PRs.
7. Handles review follow-ups in a constrained way.

Everything is tracked locally in SQLite, and I can control it from both CLI and UI.

## Why I split planning from execution

This was the biggest shift.

Most agent workflows blend planning and coding in one long prompt. For simple tasks, that can work. For real project work, it often degrades into loops or vague output.

In Parallax, planning and execution are separate contracts:

- **Plan mode**: produce a concrete, readable plan.
- **Execution mode**: implement only approved steps.

That separation makes behavior much more predictable. I can edit the plan, approve it, and know exactly what scope the agent should follow.

It also changes the feeling of working with AI: less “hope this works,” more “ship this step.”

## The workflow I actually use

My flow now looks like this:

- Start Parallax (`parallax start`).
- Let it pull tasks from configured projects.
- Review pending plans in UI or CLI (`parallax pending`).
- Edit and approve plan.
- Watch execution logs and file diffs.
- Let PR open.
- Review the PR, request adjustments, and then explicitly trigger follow-up work.

That last part matters: I tightened review triggers so random bot comments don’t kick off agent runs. I only want intentional loops.

## What it’s trying to unlock for me

Parallax is less about “autonomous coding” and more about **protecting iteration speed**.

For me, that means:

- Fewer context switches.
- Smaller, safer increments.
- Faster path from idea to merged PR.
- Better trust in agent output because scope is explicit.

I don’t need perfect autonomy. I need dependable forward motion on side projects I care about.

## What I’m excited about next

Still in the early stages, but it's shaping up how I want to work: tight loops, clear control points, and visible progress.

Next, I want to keep improving:

- log usability and diff-first visibility,
- richer task state and review handling,
- stronger end-to-end reliability around long-running workflows.

Parallax is becoming the system I wanted all along: a practical copilot for real shipping, not demo workflows.

And honestly, it’s fun to build.

## Open source

The plan is to open source Parallax so anyone can try it, break it, improve it, and shape where it goes next.

If this workflow resonates with you, you’ll be able to clone it, run it locally, and make it your own.
