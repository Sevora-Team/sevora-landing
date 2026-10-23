export const languages = {
  sr: 'Srpski',
  en: 'English',
} as const;

export type Lang = keyof typeof languages;

export const defaultLang: Lang = 'sr';

export const ui = {
  sr: {
    'site.title': 'SEVORA',
    'site.description': 'Analiza zlata i tržišta na koju možete da reagujete.',
  },
  en: {
    'site.title': 'SEVORA',
    'site.description': 'Gold and market analysis you can act on.',
  },
} as const satisfies Record<Lang, Record<string, string>>;

export type UiKey = keyof (typeof ui)[typeof defaultLang];
