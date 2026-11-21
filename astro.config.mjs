// @ts-check
import { defineConfig, envField, fontProviders } from 'astro/config';

// Production URL; drives sitemap.xml, robots.txt, canonical and hreflang links. Vercel serves
// the www host and redirects the bare domain to it, so this must be the www address.
const site = 'https://www.sevoratrading.com';

// Characters in the self-hosted font files: Latin text and punctuation, and the Serbian
// letters in a separate file that only Serbian pages download.
const latinRange =
  'U+0020-007E, U+00A0, U+00A9, U+00AB, U+00B0, U+00B7, U+00BB, U+00D7, U+2013-2014, U+2018-201E, U+2022, U+2026, U+2032-2033, U+20AC, U+2122, U+2190-2193, U+2197, U+2212';
const serbianRange = 'U+0106-0107, U+010C-010D, U+0110-0111, U+0160-0161, U+017D-017E';

// https://astro.build/config
export default defineConfig({
  site,
  build: {
    // The CSS is small; inlining it saves render-blocking requests before first paint.
    inlineStylesheets: 'always',
  },
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
  i18n: {
    locales: ['sr', 'en'],
    defaultLocale: 'sr',
    routing: {
      prefixDefaultLocale: false,
    },
  },
  // IBM Plex subsets (see README): ~37 KB instead of ~103 KB from Google Fonts.
  fonts: [
    // Display face for page and section titles; downloaded at build time and self-hosted.
    {
      name: 'Bricolage Grotesque',
      cssVariable: '--font-display',
      provider: fontProviders.google(),
      weights: [700],
      styles: ['normal'],
      subsets: ['latin', 'latin-ext'],
      fallbacks: ['system-ui', 'sans-serif'],
    },
    {
      name: 'Sevora Sans',
      cssVariable: '--font-sans',
      provider: fontProviders.local(),
      options: {
        variants: [
          {
            src: ['./src/assets/fonts/sans-400-600-latin.woff2'],
            weight: '400 600',
            style: 'normal',
            unicodeRange: [latinRange],
          },
          {
            src: ['./src/assets/fonts/sans-400-600-sr.woff2'],
            weight: '400 600',
            style: 'normal',
            unicodeRange: [serbianRange],
          },
        ],
      },
      fallbacks: ['system-ui', 'sans-serif'],
    },
    {
      name: 'Sevora Mono',
      cssVariable: '--font-mono',
      provider: fontProviders.local(),
      options: {
        variants: [
          {
            src: ['./src/assets/fonts/mono-400-latin.woff2'],
            weight: 400,
            style: 'normal',
            unicodeRange: [latinRange],
          },
          {
            src: ['./src/assets/fonts/mono-400-sr.woff2'],
            weight: 400,
            style: 'normal',
            unicodeRange: [serbianRange],
          },
          {
            src: ['./src/assets/fonts/mono-500-latin.woff2'],
            weight: 500,
            style: 'normal',
            unicodeRange: [latinRange],
          },
          {
            src: ['./src/assets/fonts/mono-500-sr.woff2'],
            weight: 500,
            style: 'normal',
            unicodeRange: [serbianRange],
          },
        ],
      },
      fallbacks: ['ui-monospace', 'monospace'],
    },
  ],
});
