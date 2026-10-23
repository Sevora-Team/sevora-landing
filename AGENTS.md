## Project

Astro 7 static landing site for SEVORA. Package manager is **pnpm** (never npm/yarn); Node 24
is pinned via `devEngines.runtime` in `package.json`. See `README.md` for structure and
conventions (i18n, design tokens, fonts, `@/` alias).

Run `pnpm validate` and `pnpm build` before considering a change done.

## Code guidelines

- **YAGNI.** Build what the page needs today. No abstractions, options, props or config for
  hypothetical future use; add them when a second real use case appears.
- **Don't over-engineer.** Prefer plain HTML, CSS and small `<script>` tags. No UI framework,
  state library or CSS framework unless a concrete need can't be met without one.
- **One component, one job.** A section is one file in `components/sections/`. Extract a piece
  into `components/ui/` only once it is reused (or clearly reusable, like a button).
- **Co-locate.** A component's styles live in its own scoped `<style>`, its behaviour in its own
  `<script>`. `styles/global.css` holds only tokens, reset, typography and layout primitives used
  across sections.
- **Content lives in `src/i18n/`.** No user-facing strings in components; every string exists in
  both `sr.ts` and `en.ts`. Language-independent data (links, prices, sample data) goes in
  `src/data/`.
- **Use design tokens.** Colors, spacing and radii come from `styles/tokens.css`; never hard-code
  hex values or magic numbers that a token already covers.
- **Accessible by default.** Semantic elements (`<button>`, `<a href>`, `<details>`, `<label>`),
  visible focus, `aria-*` only where HTML can't express it, respect `prefers-reduced-motion`.
- **Progressive enhancement.** The page must read and navigate without JavaScript; scripts only
  enhance it.
- **Keep it small and typed.** Short components, `Props` interfaces on every component, no
  `any`, no dead code or commented-out code. Delete what isn't used.
- **Match surrounding code.** Same naming, formatting and comment density as the files around it.

## Development

When starting the dev server, use background mode:

```
pnpm astro dev --background
```

Manage the background server with `pnpm astro dev stop`, `pnpm astro dev status`, and
`pnpm astro dev logs`.

## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)
- [Using custom fonts](https://docs.astro.build/en/guides/fonts/)
