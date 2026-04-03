---
project_name: 'MTG Life Counter'
user_name: 'Robert'
date: '2026-04-03'
sections_completed:
  - technology_stack
  - critical_rules
status: 'complete'
rule_count: 6
optimized_for_llm: true
---

# Project Context for AI Agents

_This file contains critical rules and patterns that AI agents must follow when implementing code in this project. Focus on unobvious details that agents might otherwise miss._

---

## Technology Stack & Versions

- **Vite:** v8.0.3
- **Frontend Stack:** Vanilla JS, HTML5, CSS3 (NO FRAMEWORKS ALLOWED)
- **Browser APIs Used:** Vibration API, Screen Wake Lock API

## Critical Implementation Rules

### Language & Framework Rules
- **Pure Vanilla constraints:** Do not attempt to refactor this to React/Vue/Svelte or import Tailwind. Stick to standard APIs.
- **Component-less DOM mapping:** Updates are pushed directly to innerHTML via a centralized loop/state (`updateDisplay()`). Do not over-engineer a Virtual DOM.

### Device API & Edge Cases (CRITICAL)
- **Wake Lock Lifecycle:** The `navigator.wakeLock` request can drop unexpectedly when the browser shifts focus. It is strictly wrapped in a resilient structure.
- **Ghost Touches:** The tap targets are 50vh massive invisible overlays. Do NOT convert them to visible HTML `<button>` elements, you will ruin the cross-table "zero-look" usability.
- **AMOLED Preservation:** The `body` background must be strictly `#000000`. Do not use "clean" dark greys or soft blacks, because it defeats the OLED pixel-shutdown battery saving.

---

## Usage Guidelines

**For AI Agents:**
- Read this file before implementing any code
- Follow ALL rules exactly as documented
- When in doubt, prefer the more restrictive option

**For Humans:**
- Keep this file lean and focused on agent needs
- Remove rules that become obvious over time
- Update this when the UI expands

Last Updated: 2026-04-03
