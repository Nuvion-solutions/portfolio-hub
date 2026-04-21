# Portfolio Hub — CLAUDE.md

This is the **Nuvion Solutions Portfolio Hub** — a standalone Next.js 14 site that lives at
`portfolio.nuvion-solutions.com` and showcases case studies for five target niches.
It is built to be **copied into the main nuvion-solutions.com repo** as a namespaced module
with zero conflicts.

---

## Purpose

- Demonstrate AI-powered web builds to prospective clients
- Serve as a live proof-of-concept for each niche (Med Spa, AI Startup, Restaurant, Law Firm, Home Services)
- Act as a lead generation asset that feeds the contact form into Resend

---

## Stack

| Layer       | Choice                   |
|-------------|--------------------------|
| Framework   | Next.js 14 (App Router)  |
| Language    | TypeScript (strict)      |
| Styling     | Tailwind CSS + shadcn/ui |
| Animations  | Framer Motion            |
| MDX         | next-mdx-remote v5       |
| Email       | Resend                   |
| Deployment  | Vercel                   |

---

## Portability Namespace Structure

**All portfolio code is namespaced so it can be lifted into nuvion-solutions.com with one folder copy.**

```
app/(portfolio)/          → portfolio routes (group layout isolates nav/footer)
components/portfolio/     → all portfolio-specific components
components/portfolio/mdx/ → MDX components used in case studies
components/ui/            → shadcn/ui primitives (shared)
lib/portfolio/            → mdx loader, case study helpers
lib/design-tokens.ts      → single source of truth for all colors/fonts
content/case-studies/     → MDX files (one per case study)
public/portfolio/         → images, scoped to portfolio namespace
```

**Do not** place portfolio-specific code outside these namespaced directories.
When copying into nuvion-solutions.com, merge these folders directly — no renames needed.

---

## Design Tokens

All tokens live in **`lib/design-tokens.ts`** — this is the single source of truth.
Tailwind aliases are defined in `tailwind.config.ts` with the `p-` prefix (for portability).
CSS custom properties are set in `app/globals.css`.

**Color palette** (matches nuvion-solutions.com):

| Token          | Value     | Usage                     |
|----------------|-----------|---------------------------|
| `background`   | `#0A0A0A` | Page background           |
| `card`         | `#111111` | Card surfaces             |
| `cardBorder`   | `#1F1F1F` | Card/section borders      |
| `accent`       | `#6C63FF` | CTA, links, highlights    |
| `accentHover`  | `#5A52E8` | Hover state for accent    |
| `foreground`   | `#F8F8F8` | Primary text              |
| `muted`        | `#6B7280` | Secondary text            |
| `success`      | `#10B981` | Results, checkmarks       |

**Fonts**: Inter (`--font-inter`) for body, Plus Jakarta Sans (`--font-jakarta`) for headings.
Both loaded via `next/font/google` in `app/layout.tsx`.

**Tailwind class prefix**: all custom color classes use `p-` prefix (e.g., `bg-p-bg`, `text-p-accent`).

---

## How to Add a New Case Study

1. **Create the MDX file** at `content/case-studies/your-slug.mdx`
2. **Fill in frontmatter** — see schema below
3. **Write the body** using the available MDX components
4. **Add images** to `public/portfolio/case-studies/your-slug/`
5. **Set `featured: true`** to show on the homepage

### Frontmatter Schema

```yaml
---
title: "Your Case Study Title"
client: "Client Name or Demo: Client Name"
niche: "Med Spa"              # One of the five supported niches
services:
  - "Service One"
  - "Service Two"
liveUrl: "https://..."        # Optional — live demo URL
featured: true                # Shows on homepage featured grid
excerpt: "One paragraph summary shown on cards and meta."
results:
  - "Result one"
  - "Result two"
coverImage: "/portfolio/case-studies/your-slug/cover.jpg"
publishedAt: "2026-04-20"     # ISO date — sorts newest first
---
```

### Supported Niches

- `Med Spa`
- `AI/Tech Startup`
- `Restaurant`
- `Law Firm`
- `Home Services`

Adding a new niche requires updating `NICHES` in `lib/portfolio/case-studies.ts`.

---

## MDX Components

Use these components inside any case study MDX file. No import needed — they're injected
by the case study page renderer in `app/(portfolio)/case-studies/[slug]/page.tsx`.

### `<ResultsBlock>`

Renders a checklist of outcomes with a section label.

```mdx
<ResultsBlock
  heading="Key Outcomes"
  items={[
    "First result statement",
    "Second result statement"
  ]}
/>
```

### `<TechList>`

Renders pill badges for services/technologies used.

```mdx
<TechList
  heading="Technologies Used"
  items={["Next.js", "OpenAI", "Supabase"]}
/>
```

### `<QuoteCard>`

Client quote with name and optional role.

```mdx
<QuoteCard
  quote="This is the quote text."
  name="Client Name"
  role="Owner, Business Name"
/>
```

### `<StatRow>`

2–4 stat callouts displayed side by side.

```mdx
<StatRow stats={[
  { value: "3x", label: "Conversion increase", sub: "vs. previous site" },
  { value: "48h", label: "Avg. response time", sub: "from launch to first lead" }
]} />
```

### `<ImageGrid>`

2–3 screenshots side by side. Use local paths under `/portfolio/case-studies/` for
placeholder rendering (shows a styled placeholder until real images are added).

```mdx
<ImageGrid
  images={[
    { src: "/portfolio/case-studies/slug/screenshot-1.jpg", alt: "Description", caption: "Caption" },
    { src: "/portfolio/case-studies/slug/screenshot-2.jpg", alt: "Description" }
  ]}
  caption="Optional overall caption"
/>
```

---

## Contact Form

The contact form at `/contact` sends submissions via **Resend**.

Required env vars (copy `.env.example` → `.env.local`):

```
RESEND_API_KEY=re_...
CONTACT_EMAIL_TO=hello@nuvion-solutions.com
NEXT_PUBLIC_SITE_URL=https://portfolio.nuvion-solutions.com
```

The API route is at `app/api/contact/route.ts`. Swap `from:` to a verified Resend domain
before deploying to production.

---

## Conventions

- **No default exports from lib files** — named exports only for tree-shaking.
- **`"use client"` only where required** — Framer Motion components, form state, Navbar toggle.
- **Zero comments on obvious code** — comments only for non-obvious constraints or workarounds.
- **Design tokens first** — never hardcode a color hex outside `lib/design-tokens.ts` or `tailwind.config.ts`.
- **Slug = filename** — the MDX filename is the URL slug. Keep slugs lowercase, hyphenated.
- **Images**: 1280×720, max 400 KB, saved to `public/portfolio/case-studies/{slug}/`.
- **`featured: true`** shows on homepage — limit to 3 featured at a time for clean grid layout.

---

## Deployment (Vercel)

1. Push to GitHub
2. Connect repo in Vercel dashboard
3. Add env vars: `RESEND_API_KEY`, `CONTACT_EMAIL_TO`, `NEXT_PUBLIC_SITE_URL`
4. Set custom domain: `portfolio.nuvion-solutions.com`
5. Deploy

No special build configuration needed — Vercel detects Next.js automatically.

---

## Current Case Studies

| Slug                      | Niche           | Featured | Status     |
|---------------------------|-----------------|----------|------------|
| `lumina-aesthetics`       | Med Spa         | ✓        | Demo ready |
| `nexus-ai`                | AI/Tech Startup | ✓        | Demo ready |
| `hargrove-associates`     | Law Firm        | ✓        | Demo ready |
| `ironclad-home-services`  | Home Services   | ✓        | Demo ready |
| `verdant-nyc`             | Restaurant      | ✓        | Demo ready |
| `veloce-supercars`        | Luxury Automotive | ✓      | Demo ready |

Add rows here as new case studies are created.
