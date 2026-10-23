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
│   └── icons/          # SVG icons, imported as components
├── components/
│   ├── sections/       # Landing page sections (Hero, …)
│   ├── ui/             # Reusable UI building blocks (Icon, …)
│   └── HomePage.astro  # The landing page, shared by every locale
├── i18n/               # UI strings (ui.ts) and locale helpers (utils.ts)
├── layouts/            # Page shells (BaseLayout: <head>, fonts, favicons, hreflang)
├── pages/              # Routes — Serbian (default) at /, English under /en/, 404, robots.txt
└── styles/             # Design tokens (tokens.css) and global base styles
```

## Conventions

- **Languages:** Serbian (`sr`, default, unprefixed) and English (`en`, `/en/`), via Astro's
  built-in i18n routing. All UI copy lives in `src/i18n/ui.ts`.
- **Design tokens:** colors, spacing and radii come from the SEVORA design system and live in
  `src/styles/tokens.css`. Components use semantic tokens (`--text`, `--surface`, `--accent`…),
  never raw hex values. Light is the page default; sections opt into `data-theme="dark"`.
- **Fonts:** IBM Plex Sans and IBM Plex Mono, self-hosted through the Astro Fonts API
  (`--font-sans`, `--font-mono`).
- **Locale pages stay thin:** `pages/index.astro` and `pages/en/index.astro` only render
  `HomePage`; components read the language from the URL with `getLangFromUrl`.
- **Icons:** Material Symbols Outlined (weight 300, optical size 20, Apache-2.0) as SVG
  components. Use `<Icon name="arrow-forward" />`; to add one, put its SVG in
  `src/assets/icons/` and register it in `src/components/ui/icons.ts`. Icons are decorative
  (`aria-hidden`) unless you pass a `label`.
- **Interactivity:** plain `<script>` tags in components (custom elements where a component
  repeats), no UI framework.
- **Imports:** use the `@/` alias for anything under `src/`.

## Before launch

- Set `site` in `astro.config.mjs` to the production URL. This turns on the sitemap
  (`@astrojs/sitemap`), the `Sitemap:` line in `robots.txt` and the `hreflang` alternate
  links in `BaseLayout`.

## License

GPL-3.0 — see [LICENSE](LICENSE).
