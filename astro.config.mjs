// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  i18n: {
    locales: ['sr', 'en'],
    defaultLocale: 'sr',
    routing: {
      prefixDefaultLocale: false,
    },
  },
  fonts: [
    {
      name: 'IBM Plex Sans',
      cssVariable: '--font-sans',
      provider: fontProviders.google(),
      weights: [400, 500, 600],
      styles: ['normal'],
      // latin-ext covers Serbian Latin diacritics (č ć đ š ž)
      subsets: ['latin', 'latin-ext'],
      fallbacks: ['system-ui', 'sans-serif'],
    },
    {
      name: 'IBM Plex Mono',
      cssVariable: '--font-mono',
      provider: fontProviders.google(),
      weights: [400, 500],
      styles: ['normal'],
      subsets: ['latin', 'latin-ext'],
      fallbacks: ['ui-monospace', 'monospace'],
    },
  ],
});
