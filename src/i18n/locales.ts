export const languages = {
  sr: 'Srpski',
  en: 'English',
} as const;

export type Lang = keyof typeof languages;

export const defaultLang: Lang = 'sr';

/** BCP 47 tags for `<html lang>`, hreflang and the sitemap. Serbian is written in Latin script. */
export const langTags = {
  sr: 'sr-Latn',
  en: 'en',
} as const satisfies Record<Lang, string>;

/** Locales for number and currency formatting. */
export const numberLocales = {
  sr: 'sr-Latn-RS',
  en: 'en-US',
} as const satisfies Record<Lang, string>;

/** Open Graph `og:locale` values. */
export const ogLocales = {
  sr: 'sr_RS',
  en: 'en_US',
} as const satisfies Record<Lang, string>;

/**
 * Each page's slug per language. A new page gets an entry here and a file in each `src/pages`
 * tree. Kept free of Astro imports so `astro.config.mjs` can read it for the sitemap.
 */
export const routes = {
  home: { sr: '', en: '' },
  about: { sr: 'o-nama', en: 'about' },
  academy: { sr: 'akademija', en: 'academy' },
  plans: { sr: 'paketi', en: 'pricing' },
  contact: { sr: 'kontakt', en: 'contact' },
} as const satisfies Record<string, Record<Lang, string>>;

export type Page = keyof typeof routes;
