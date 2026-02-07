# Hola 👋!

I'm **Maxi** a team lead engineer from 🇦🇷 living on 🇮🇪

👨‍💻 Developer - ✈️ Traveler - 🚀 Maker - 👨‍🍳 Chef Enthusiast - 🐶 Pet lover

## Shipping Log Prompt (One-Off)

Use this prompt to generate a single entry for `content/shipping/build-log.md`:

```
This is a one-time request. Do not carry any context forward. Based only on the details I provide now, generate ONE timeline entry in this exact JSON object format:

{
  "date": "YYYY-MM-DD",
  "time": "HH:MM (optional)",
  "title": "Short, concrete update title that mentions the project name",
  "status": "In progress | Shipped | Paused | Exploring",
  "summary": "2–3 sentences max (can be > 180 characters), describing what changed, why it matters, and how AI was used. Must mention the project name.",
  "link": "https://example.com (optional)"
}

Rules:
- Keep it specific and outcome‑oriented.
- Mention user impact and the improvement made.
- Call out the technologies involved (frameworks, tools, or infra).
- Explicitly mention how AI was used (e.g., ideation, refactoring, testing, UI polish).
- End with a gentle line that invites people to stay connected or follow along.
- Use a calm, confident tone. No hype.
- Avoid vague phrases like “worked on” without the result.
```
