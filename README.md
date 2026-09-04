# Artifact Interactive — Learning Intelligence Platform

Marketing and research website for Artifact Interactive.

Built with **Next.js (App Router) · TypeScript · Tailwind CSS v4 · GSAP**, deployable to
Vercel with zero configuration.

---

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run start    # serve the production build
```

## Deploying to Vercel

The project uses framework defaults, so no `vercel.json` is required.

1. Push the repository to GitHub, GitLab, or Bitbucket.
2. Import it at [vercel.com/new](https://vercel.com/new) — Vercel detects Next.js automatically.
3. Set the production domain, then update `site.url` in [`src/lib/site.ts`](src/lib/site.ts)
   so canonical URLs, Open Graph metadata, `sitemap.xml`, and `robots.txt` point at it.

Every route is statically prerendered, so the site serves entirely from the edge.

---

## Site architecture

| Route | Purpose |
| --- | --- |
| `/` | Homepage — the full brand narrative, signals → intelligence → pathways |
| `/platform` | The Learning Intelligence Platform and its five-layer architecture |
| `/how-it-works` | Capture → Connect → Understand → Model → Act → Learn, and the loop |
| `/solutions` | Bespoke learning operating systems, three environments |
| `/solutions/higher-education` | Universities |
| `/solutions/high-schools` | Secondary schools and districts |
| `/solutions/business` | Business and workforce learning |
| `/research` | Research areas, method, and principles |
| `/insights` | Article index with client-side category filtering |
| `/insights/[slug]` | Individual articles (statically generated) |
| `/about` | Company origin, practice, and beliefs |
| `/contact` | Contact form |
| `/privacy`, `/terms` | Legal placeholders pending review |

---

## Project structure

```
src/
├── app/                     # Routes (App Router), globals.css, sitemap, robots
├── components/
│   ├── motion/              # The motion system (GSAP + ScrollTrigger)
│   │   ├── motion.ts        # Shared EASE / DUR / STAGGER vocabulary
│   │   ├── MotionProvider.tsx
│   │   ├── RevealText.tsx   # Masked word + line reveals
│   │   ├── FadeUp.tsx       # FadeUp, StaggerGroup, CountUp
│   │   ├── Parallax.tsx     # ParallaxMedia, ImageReveal, ScrollSection
│   │   └── DrawSvg.tsx      # DrawSvg, PointerParallax
│   ├── home/                # Hero, PersonaSequence, BespokeEnvironments
│   ├── ui/                  # Design-system primitives
│   │   ├── Button.tsx       # Button + TextLink
│   │   ├── Card.tsx         # Surface, FeatureCard, ResearchCard, PersonaCard, ArticleCard
│   │   ├── Editorial.tsx    # QuoteBlock, Stat, SignalChain, Prose
│   │   ├── Placeholder.tsx  # ImagePlaceholder, VizFrame
│   │   ├── Reveal.tsx       # Scroll-reveal observers
│   │   ├── Section.tsx      # Section, Eyebrow, SectionHeading
│   │   └── SignalWave.tsx   # The brand wave device
│   ├── layout/              # Header, Footer, Wordmark, PageHero, CtaBand, page templates
│   ├── viz/                 # Every diagram on the site (HTML/CSS/SVG, no chart library)
│   ├── insights/            # Insights index with filtering
│   └── contact/             # Contact form
├── content/                 # Typed content: insights.ts, solutions.ts
└── lib/                     # site.ts (nav + brand language), cn.ts, rand.ts
```

### Editing content

- **Navigation and brand language** — [`src/lib/site.ts`](src/lib/site.ts)
- **Articles** — [`src/content/insights.ts`](src/content/insights.ts). Add an entry to `articles`;
  the index page, category filters, related articles, sitemap, and the article route all pick it
  up automatically. Bodies use a small typed block model (`p`, `h2`, `quote`, `list`, `note`).
- **Solutions** — [`src/content/solutions.ts`](src/content/solutions.ts). The three detail pages
  render from a single shared template, so new environments only need a content entry plus a
  four-line route file.

---

## Design system

Tokens live in `@theme` at the top of [`src/app/globals.css`](src/app/globals.css).

**Palette** — taken from the Artifact brand sheet:

| Token | Value | Use |
| --- | --- | --- |
| `signal-500` | `#456df4` | Brand primary (accents, lines, nodes) |
| `signal-600` | `#3355db` | Small text and filled chips on light surfaces (AA) |
| `ink-950` / `ink-900` | `#05070f` / `#0a0e1c` | Deep navy canvases |
| `slate-ai-*` | cool grays | Body copy, muted labels, hairlines |
| `artifact-purple` | `#423469` | Reserved accent from the brand sheet |

**Type** — Montserrat (brand) for everything structural; Newsreader for editorial moments —
pull-quotes, article decks, and statements of position.

The scale is architectural rather than incremental, so headlines are far more expressive than
body copy. All steps use `clamp()`:

| Utility | Role |
| --- | --- |
| `text-hero` | Homepage signage. Sized so the longest brand line holds a single line from ~1100px up |
| `text-statement` | Category definition, article section heads |
| `text-display` | Interior page headlines |
| `text-display-sm` | Featured article headlines, closing CTAs |
| `text-heading` | Section headlines |
| `text-lead` | Section decks |

**Surfaces** — the only element that still draws a border is `Surface`, used where a panel
genuinely is an object. Feature entries, research entries, and grids are introduced by a
hairline rule that warms and extends on hover, which keeps them reading as an editorial index
rather than a wall of cards.

**Grain** — a fixed `feTurbulence` field (`.grain-field`) sits above the artwork and below the
interface. It is what stops the large flat navy fields from reading as digital emptiness. No
image request; the noise is an inline data URI.

**Logo** — the supplied wordmark, in `public/brand/`. `Wordmark` picks the light or dark
lockup automatically; the header inverts over each page's navy hero and flips to the light
lockup once scrolled.

---

## Motion

Motion is a **system**, not per-page animation. Everything is built from a small set of
primitives in [`src/components/motion/`](src/components/motion) driven by GSAP + ScrollTrigger
(the only runtime dependency added beyond React and Next).

| Primitive | What it does |
| --- | --- |
| `RevealText` | The signature type reveal — each word sits in an `overflow-hidden` mask and rises into place. Words are split on the server, so the markup is complete before any JS runs |
| `RevealLine` | The same, with the whole line as the unit |
| `FadeUp` | The workhorse: a short displaced settle on entry. Nothing scales or rotates |
| `StaggerGroup` | Staggers direct children so a row arrives as one phrase, not N events |
| `ParallaxMedia` | Scrubbed, restrained parallax against the scroll |
| `ImageReveal` | Editorial mask wipe with counter-scaling contents |
| `ScrollSection` | Pins a panel and hands pass-through progress to a render prop |
| `DrawSvg` | Draws diagrams: mark parts `data-draw`, `data-node`, `data-label`. `scrub` ties the drawing to the scrollbar for the cinematic sections |
| `PointerParallax` | Lerped pointer parallax by `data-depth`, smoothed in a rAF loop |
| `CountUp` | Counts a figure up on entry, with the final value already in the markup |

Shared easing and duration vocabulary lives in
[`motion.ts`](src/components/motion/motion.ts) (`EASE`, `DUR`, `STAGGER`) so nothing is
improvised. `MotionProvider` owns the plugin lifecycle and kills a route's triggers on
navigation, since the App Router keeps the document alive.

### How the motion code is split

GSAP core (~28 KB gz) is in the critical path because the hero and every page hero animate
immediately. **ScrollTrigger (~18 KB gz) is not** — it is dynamically imported by
`loadScrollTrigger()` and lands in its own chunk shortly after hydration.

The rule that makes this safe: **above-the-fold entrances use `trigger="load"`** and run on
GSAP core alone, so nothing a visitor can see is ever waiting on a network round-trip. Scroll
reveals set their hidden state synchronously on GSAP core, then attach their trigger when the
plugin arrives — so there is no flash either way. If the chunk fails to load, the loader adds
`.motion-fallback` and the content simply appears.

`RevealText` also caps its total stagger span (`MAX_STAGGER_SPAN`), so a three-word headline
keeps its full per-word rhythm while a sentence-length statement lands in about half a second.
The same vocabulary, paced to the length of the line.

### The three guarantees

1. **Reduced motion.** Every primitive checks `prefers-reduced-motion` and sets the final state
   directly. Ambient loops are disabled in CSS as well.
2. **No JavaScript.** GSAP-managed elements are hidden by CSS gated on a `.js` class set
   synchronously in `<head>`, so with JS off the page renders complete and static — including
   the hero and its inline capsules.
3. **No stuck content.** The same inline script sets `.motion-fallback` on a five-second timer.
   If the bundle never hydrates, hidden content becomes visible anyway.

A note on gotchas found while building this: `gsap.set()` throws on an empty NodeList, so
`DrawSvg` guards each collection; and a `data-node` group must never contain a `data-draw`
path, because the group starts at `opacity: 0` and would hide the line while it draws.

---

## Performance

Measured from the served HTML, excluding the `noModule` legacy polyfill bundle that
module-supporting browsers never download:

| | Before this pass | After |
| --- | --- | --- |
| Homepage JS | 199 KB gz | **183 KB gz** |
| Interior pages | 188–194 KB gz | **172–177 KB gz** |
| Header wordmark | 17.9 KB | **4.3 KB** |

What that 183 KB is made of: React + React DOM ~69 KB, the Next App Router client runtime
~69 KB, GSAP core ~28 KB, page-specific code ~11 KB. React and Next are the floor for an App
Router app; GSAP core is the deliberate cost of the motion system.

What changed:

- **ScrollTrigger moved out of the critical path** into a lazily-imported chunk (−17.5 KB).
- **The wordmark was being served at 1920px** for an element that renders at ~92 CSS px;
  `sizes` now picks a 256px variant (−13.6 KB).
- **`Reveal` became a server component** — it holds no state and only forwards to `FadeUp`.

Every page is statically prerendered, so HTML and data come from the edge with no server work.

## Accessibility

- One `<h1>` per page, no skipped heading levels, verified across every route.
- All text meets WCAG AA contrast; `signal-600` and `slate-ai-500`/`600` exist specifically to
  clear AA at small sizes on light surfaces.
- Visible brand-blue focus rings, lightened automatically inside `.on-dark` sections.
- Skip-to-content link, single `<main>` landmark, labelled `<nav>` regions.
- Diagrams carry `role="img"` with descriptive `aria-label`; purely decorative art is
  `aria-hidden`.
- Interactive diagram controls are real buttons — keyboard reachable and operable.
- Sections use `overflow-clip` rather than `overflow-hidden` to contain the ambient glow
  fields: it clips without establishing a scroll container, so the `lg:sticky` panels inside
  several sections keep working.

---

## Placeholders and honesty

Two things are deliberately unfinished, and marked as such in the interface:

- **Imagery.** `ImagePlaceholder` reserves labelled space for real photography, product
  screenshots, and campus imagery. No fabricated AI artwork was used anywhere.
- **The contact form.** It has no backend. On submit it says so plainly and points to the
  email address rather than pretending a message was delivered. Wire it to a route handler or
  form service before launch.

Copy throughout avoids claiming that any system can predict individual human behavior. The
language is deliberately: identify signals, surface patterns, model possible pathways, detect
emerging risk, reveal opportunities, support decision making.
