# S3 Globe Web Solutions — Marketing Site

Angular 20 (standalone) + Tailwind CSS + GSAP marketing site for [s3globe.in](https://s3globe.in).

## Stack

- Angular 20, standalone components, lazy-loaded routes
- Tailwind CSS v3 (dark/light theme via `body.light` + semantic tokens in `src/styles.css`)
- GSAP for the stat counters; entrance animation on `.reveal` elements is pure CSS (see note below)
- `@lucide/angular` for icons, wrapped by `src/app/shared/icon/icon.ts`
- Contact form → Vercel serverless function (`api/contact.ts`) → Mailjet HTTP API

## Local development

```bash
npm install
npm run start     # http://localhost:4200
npm run build     # production build to dist/s3globe-web/browser
```

## Environment variables

Copy `.env.example` to `.env.local` for local Vercel dev (`vercel dev`), or set these in the Vercel project settings for deployed environments:

| Variable | Purpose |
|---|---|
| `MAILJET_API_KEY` / `MAILJET_SECRET_KEY` | Mailjet API credentials (free tier: 200 emails/day) |
| `EMAIL_FROM_ADDRESS` / `EMAIL_FROM_NAME` | Sender identity for outgoing contact-form emails |
| `CONTACT_TO_ADDRESS` | Inbox that receives submissions (defaults to `EMAIL_FROM_ADDRESS`) |

## Deployment (Vercel)

The site is a static Angular build plus one serverless function — no separate backend needed.

1. Push this repo to GitHub and import it in Vercel.
2. Vercel auto-detects `vercel.json` (`outputDirectory: dist/s3globe-web/browser`, SPA rewrite for client-side routing, `api/contact.ts` picked up automatically as a Node serverless function).
3. Add the environment variables above in the Vercel project settings.
4. Point `s3globe.in` (and `www`) at the Vercel project as a custom domain.

Future SaaS products (VoiceOPD, SmartSheti, etc.) are intended to live on their own subdomains (`voiceopd.s3globe.in`, `smartsheti.s3globe.in`, ...) as separate Vercel projects — this repo only covers the root marketing site.

## Content

Nearly all copy lives in one place: [`src/app/core/data/site-data.ts`](src/app/core/data/site-data.ts) — services, tech stack, industries, process steps, portfolio, testimonials, and FAQs. Edit there rather than hunting through page templates.

- **VoiceOPD** and **SmartSheti** in the portfolio are real in-house products.
- Remaining portfolio entries and all testimonials are placeholder/sample data, clearly commented in `site-data.ts` — swap in real client work and reviews as they become available.
- `SITE.phone` and `SITE.whatsapp` are placeholders — update with the real business number before launch.

## Notes on animation reliability

`.reveal` elements use a plain CSS keyframe animation (`src/styles.css`) rather than an IntersectionObserver/GSAP ScrollTrigger reveal, specifically so content can never get stuck invisible in edge-case environments (backgrounded tabs, embedded previews, etc. can throttle or skip JS-driven scroll observers). Stat counters animate immediately on mount for the same reason. If true scroll-linked reveals are wanted later, reintroduce an IntersectionObserver-based service and gate it behind a `prefers-reduced-motion` check.

## Phase 2 backlog (not in this build)

The full long-term sitemap discussed includes pages not yet built:

- Individual SEO-friendly page per service (currently one `/services` page with anchor sections)
- Blog
- Careers
- Case Studies (deeper than the Portfolio page's problem/solution summaries)
- Pricing / packages page
- "Get a Free Project Estimate" interactive quote flow

## Deploy status

Not yet deployed — build locally with `npm run build` and verify with `npm run start` before pushing to a hosting provider.
