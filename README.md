<p align="center">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset=".github/assets/logo-dark.svg">
    <img src=".github/assets/logo-light.svg" alt="SEVORA" height="88">
  </picture>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Astro-7-BC52EE?logo=astro&logoColor=white" alt="Astro 7">&nbsp;
  <img src="https://img.shields.io/badge/TypeScript-6-3178C6?logo=typescript&logoColor=white" alt="TypeScript 6">&nbsp;
  <img src="https://img.shields.io/badge/Node-24-5FA04E?logo=nodedotjs&logoColor=white" alt="Node 24">&nbsp;
  <img src="https://img.shields.io/badge/pnpm-11-F69220?logo=pnpm&logoColor=white" alt="pnpm 11">&nbsp;
  <img src="https://img.shields.io/badge/Vercel-deployed-000000?logo=vercel&logoColor=white" alt="Deployed on Vercel">&nbsp;
  <img src="https://img.shields.io/badge/License-GPL--3.0-blue" alt="License GPL-3.0">
</p>

# SEVORA Landing

Landing and presentational pages for the SEVORA ecosystem: home, plans, academy, about and
contact, in Serbian (default, `/`) and English (`/en/`). A static site, deployed on Vercel at
[sevoratrading.com](https://www.sevoratrading.com).

## Tech Stack

| Area      | Choice                                                           |
| :-------- | :--------------------------------------------------------------- |
| Framework | [Astro 7](https://astro.build), static output, built-in i18n     |
| Language  | TypeScript, plain `<script>` tags (no UI framework)              |
| Styling   | Scoped CSS + design tokens (`src/styles/tokens.css`)             |
| Fonts     | Bricolage Grotesque, IBM Plex Sans/Mono, self-hosted (Fonts API) |
| Tooling   | pnpm 11, Node 24, ESLint, Prettier, `astro check`                |
| Hosting   | Vercel                                                           |

## Getting Started

```sh
corepack enable
pnpm install
pnpm dev        # http://localhost:4321
```

pnpm downloads the right Node version for scripts on its own (`devEngines.runtime`).

| Command         | Action                                             |
| :-------------- | :------------------------------------------------- |
| `pnpm dev`      | Start the dev server                               |
| `pnpm build`    | Type-check and build to `./dist/`                  |
| `pnpm preview`  | Preview the production build                       |
| `pnpm validate` | Format check + lint + type-check (run before push) |
| `pnpm format`   | Format with Prettier                               |

## Project Structure

| Path              | Contents                                                 |
| :---------------- | :------------------------------------------------------- |
| `src/pages/`      | Routes: Serbian at `/`, English under `/en/`             |
| `src/components/` | Pages, `sections/` (one file each) and reusable `ui/`    |
| `src/i18n/`       | All copy, `sr.ts` and `en.ts`                            |
| `src/data/`       | Language-independent data: links, prices, market samples |
| `src/lib/`        | Pure helpers: formatting, build-time SVG charts          |
| `src/styles/`     | `tokens.css` (design tokens) and `global.css`            |
| `src/assets/`     | Brand images, font subsets, SVG icons                    |

## Conventions

- **Copy** lives only in `src/i18n/`. `en.ts` is typed against `sr.ts`, so a missing
  translation fails the type check.
- **Colors, spacing, radii** come from semantic tokens (`--text`, `--surface`, `--accent`),
  never raw hex.
- **Icons** are Material Symbols SVGs: add the file to `src/assets/icons/`, register it in
  `src/components/ui/icons.ts`, use `<Icon name="arrow-forward" />`.
- **Interactivity** prefers HTML and CSS (`<details>`, radios + `:has()`, scroll-driven
  animation); the page works without JavaScript.
- **Imports** use the `@/` alias for `src/`.

## Before Launch

| What                          | Where                              |
| :---------------------------- | :--------------------------------- |
| `PUBLIC_CONTACT_ENDPOINT`     | `.env` (see `.env.example`)        |
| Replace `#` placeholder links | `src/data/links.ts`                |
| Confirm prices                | `src/data/pricing.ts`              |
| Fill bracketed placeholders   | `src/i18n/sr.ts`, `src/i18n/en.ts` |

The production URL is `site` in `astro.config.mjs`; it drives the sitemap, `robots.txt`,
canonical and `hreflang` links.

## Documentation

- [DESIGN.md](DESIGN.md): design system and visual rules
- [PRODUCT.md](PRODUCT.md): product, audience and voice
- [Astro docs](https://docs.astro.build)

## Authors

- [@Sevora-Team](https://github.com/Sevora-Team)

## License

[GPL-3.0](LICENSE)
