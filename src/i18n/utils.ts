import { en } from './en';
import { defaultLang, languages, type Lang } from './locales';
import { sr, type Dictionary } from './sr';

const dictionaries: Record<Lang, Dictionary> = { sr, en };

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

export function useTranslations(lang: Lang): Dictionary {
  return dictionaries[lang];
}
