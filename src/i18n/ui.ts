export const languages = {
  sr: 'Srpski',
  en: 'English',
} as const;

export type Lang = keyof typeof languages;

/** BCP 47 tags for `<html lang>`, hreflang and the sitemap. Serbian is written in Latin script. */
export const langTags = {
  sr: 'sr-Latn',
  en: 'en',
} as const satisfies Record<Lang, string>;

export const defaultLang: Lang = 'sr';

export const ui = {
  sr: {
    'site.title': 'SEVORA',
    'site.description':
      'AI analiza tržišta, dnevni planovi, žurnal, mentor i akademija — sve što ti treba da trguješ promišljeno.',
    'hero.title': 'Ceo tvoj trejding dan na jednom mestu',
    'hero.lead':
      'AI analiza tržišta, dnevni planovi, žurnal, mentor i akademija — sve što ti treba da trguješ promišljeno. Na srpskom i engleskom.',
    'notFound.title': 'Stranica nije pronađena',
    'notFound.body': 'Stranica koju tražiš ne postoji ili je premeštena.',
    'notFound.home': 'Nazad na početnu',
  },
  en: {
    'site.title': 'SEVORA',
    'site.description':
      'AI market analysis, daily plans, a journal, a mentor and an academy — everything you need to trade with intent.',
    'hero.title': 'Your whole trading day, in one place',
    'hero.lead':
      'AI market analysis, daily plans, a journal, a mentor and an academy — everything you need to trade with intent. In English and Serbian.',
    'notFound.title': 'Page not found',
    'notFound.body': 'The page you are looking for does not exist or has moved.',
    'notFound.home': 'Back to the home page',
  },
} as const satisfies Record<Lang, Record<string, string>>;

export type UiKey = keyof (typeof ui)[typeof defaultLang];
