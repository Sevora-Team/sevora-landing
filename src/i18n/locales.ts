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
