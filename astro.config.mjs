// @ts-check
import sitemap from '@astrojs/sitemap';
import { defineConfig, envField, fontProviders } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // TODO: set the production URL before launch; it enables the sitemap and hreflang links.
  // site: 'https://…',
  env: {
    schema: {
      // Where the contact form posts (FormData, expects a 2xx response). Unset = sending disabled.
      PUBLIC_CONTACT_ENDPOINT: envField.string({
        context: 'client',
        access: 'public',
        optional: true,
        url: true,
      }),
    },
  },
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'sr',
        // Keep in sync with langTags in src/i18n/locales.ts
        locales: { sr: 'sr-Latn', en: 'en' },
      },
    }),
  ],
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
