import { defaultLang, languages, ui, type Lang, type UiKey } from './ui';

export function isLang(value: string | undefined): value is Lang {
  return value !== undefined && value in languages;
}

export function getLangFromUrl(url: URL): Lang {
  const [, segment] = url.pathname.split('/');
  return isLang(segment) ? segment : defaultLang;
}

/** Path relative to the locale root, e.g. `/en/about/` → `about/`. */
export function getPathWithoutLocale(url: URL): string {
  const segments = url.pathname.split('/').filter(Boolean);
  if (isLang(segments[0]) && segments[0] !== defaultLang) segments.shift();
  return segments.length ? `${segments.join('/')}/` : '';
}

export function useTranslations(lang: Lang) {
  return function t(key: UiKey): string {
    return ui[lang][key] ?? ui[defaultLang][key];
  };
}
