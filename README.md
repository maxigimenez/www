# Hola 👋!

I'm **Maxi** a team lead engineer from 🇦🇷 living on 🇮🇪

👨‍💻 Developer - ✈️ Traveler - 🚀 Maker - 👨‍🍳 Chef Enthusiast - 🐶 Pet lover

## Shipping Log Prompt (One-Off)

Use this prompt to generate a single entry for `content/shipping/build-log.md`:

```
This is a one-time request. Do not carry any context forward. Based only on the details I provide now, generate ONE timeline entry in this exact JSON object format:

{
  "date": "YYYY-MM-DD",
  "title": "Short, concrete update title that mentions the project name",
  "status": "In progress | Shipped | Paused | Exploring",
  "summary": "1–2 sentences max, <= 180 characters, describing what changed and why it matters. Must mention the project name.",
  "link": "https://example.com (optional)"
}

Rules:
- Keep it specific and outcome‑oriented.
- Mention the user impact or visible result.
- Use a calm, confident tone. No hype.
- Avoid vague phrases like “worked on” without the result.
```
