# sevora-landing

Landing & presentational pages for the Sevora ecosystem, built with [Astro](https://astro.build).

## Requirements

- **Node.js 24** (`>=24.16`). pnpm reads `devEngines.runtime` in `package.json` and downloads
  the right Node version for project scripts automatically; `.nvmrc` is there for nvm users.
- **pnpm 11** — enable it with `corepack enable` (the version is pinned in `packageManager`).

## Commands

| Command         | Action                                                |
| :-------------- | :---------------------------------------------------- |
| `pnpm install`  | Install dependencies                                  |
| `pnpm dev`      | Start the dev server at `localhost:4321`              |
| `pnpm build`    | Type-check (`astro check`) and build to `./dist/`     |
| `pnpm preview`  | Preview the production build locally                  |
| `pnpm check`    | Type-check `.astro` and `.ts` files                   |
| `pnpm lint`     | Lint with ESLint (Astro, TypeScript, a11y rules)      |
| `pnpm format`   | Format with Prettier                                  |
| `pnpm validate` | Format check + lint + type-check (run before pushing) |

## Project structure

```text
public/                 # Served as-is (favicon.ico)
src/
├── assets/
│   ├── brand/          # Logo and brand images (optimized by astro:assets)
│   ├── icons/          # SVG icons, imported as components
│   └── photos/         # Page photos, duotoned to the SEVORA teal (optimized by astro:assets)
├── components/
│   ├── sections/       # One file per landing page section, in page order in HomePage
│   ├── ui/             # Reusable building blocks (Button, Icon, PriceCell, PageHero, …)
│   ├── Header.astro
│   ├── Footer.astro
│   └── HomePage.astro  # The landing page, shared by every locale
├── data/               # Language-independent data: links, prices, sample market data
├── i18n/               # Copy per language (sr.ts, en.ts), locale config and helpers
├── layouts/            # Page shells (BaseLayout: <head>, fonts, favicons, hreflang)
├── lib/                # Pure helpers: number formatting, generated charts
├── pages/              # Routes — Serbian (default) at /, English under /en/, 404, robots.txt
└── styles/             # Design tokens (tokens.css) and global base styles (global.css)
```

## Conventions

- **Languages:** Serbian (`sr`, default, unprefixed) and English (`en`, `/en/`), via Astro's
  built-in i18n routing. All copy lives in `src/i18n/sr.ts` and `src/i18n/en.ts`; `en` is typed
  against the Serbian dictionary, so a missing translation fails the type check. Components get
  their copy with `useTranslations(getLangFromUrl(Astro.url))`.
- **Design tokens:** colors, spacing and radii come from the SEVORA design system and live in
  `src/styles/tokens.css`. Components use semantic tokens (`--text`, `--surface`, `--accent`…),
  never raw hex values. The site is dark throughout: the base theme is a lifted ink tone and
  sections opt into the deeper `data-theme="dark"`. Sections are transparent over one page
  backdrop (`body`); dark bands fade in and out of it.
- **Fonts:** IBM Plex Sans and IBM Plex Mono, self-hosted through the Astro Fonts API
  (`--font-sans`, `--font-mono`).
- **Locale pages stay thin:** `pages/index.astro` and `pages/en/index.astro` only render
  `HomePage`; components read the language from the URL with `getLangFromUrl`.
- **Icons:** Material Symbols Outlined (weight 300, optical size 20, Apache-2.0) as SVG
  components. Use `<Icon name="arrow-forward" />`; to add one, put its SVG in
  `src/assets/icons/` and register it in `src/components/ui/icons.ts`. Icons are decorative
  (`aria-hidden`) unless you pass a `label`.
- **Interactivity:** plain `<script>` tags in components, no UI framework. Prefer HTML and CSS
  where they suffice (the FAQ is `<details>`; the billing toggle and the About page's risk
  chart, principles and timeline are radios + `:has()`). Scroll motion is CSS scroll-driven
  animation (`.reveal` and friends in `global.css`).
- **Generated graphics:** the sample market chart and the About page's risk chart are built at
  build time from fixed data (`src/lib/`) and inlined as SVG, so they follow the theme colours.
- **Imports:** use the `@/` alias for anything under `src/`.

## Before launch

- Set `site` in `astro.config.mjs` to the production URL. This turns on the sitemap
  (`@astrojs/sitemap`), the `Sitemap:` line in `robots.txt` and the `hreflang` alternate
  links in `BaseLayout`.
- Set `PUBLIC_CONTACT_ENDPOINT` (see `.env.example`): the URL the contact form posts to. Until
  it is set, sending shows an error instead of pretending to succeed.
- Replace the `#` placeholders in `src/data/links.ts` (sign-up, log-in, dashboard, shop, …).
- Confirm the prices in `src/data/pricing.ts`.
- Fill in the bracketed placeholders in the copy (`[EMAIL ADRESA]`, `[VREME]`,
  `[USLOVI OTKAZIVANJA]`, `[politiku privatnosti]`, `[PRAVNO LICE · PIB · ADRESA]` and their
  English counterparts).

## License

GPL-3.0 — see [LICENSE](LICENSE).
