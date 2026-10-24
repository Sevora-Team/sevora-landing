import { getRelativeLocaleUrl } from 'astro:i18n';
import type { Lang } from './locales';
import { getLangFromUrl, getPathWithoutLocale } from './utils';

/** Each page's slug per language. A new page gets an entry here and a file in each `src/pages` tree. */
export const routes = {
  home: { sr: '', en: '' },
  academy: { sr: 'akademija', en: 'academy' },
} as const satisfies Record<string, Record<Lang, string>>;

export type Page = keyof typeof routes;

/** A link to a page of this site, optionally to one of its sections. */
export interface PageLink {
  page: Page;
  hash?: string;
}

/** A labelled link, either inside the site or to an external `href`. */
export type SiteLink = { label: string } & (PageLink | { href: string });

/**
 * A header item: a home section, and the page that covers it once that page exists.
 * The home page's scroll spy follows `section`; other pages mark the item for their own `page`.
 */
export interface NavItem {
  label: string;
  section: string;
  page?: Page;
}

export function getNavHref(lang: Lang, { section, page }: NavItem): string {
  return page ? getPageUrl(lang, page) : getPageUrl(lang, 'home', section);
}

export function getPageUrl(lang: Lang, page: Page, hash?: string): string {
  const url = getRelativeLocaleUrl(lang, routes[page][lang]);
  return hash ? `${url}#${hash}` : url;
}

export function getLinkHref(lang: Lang, link: SiteLink): string {
  return 'href' in link ? link.href : getPageUrl(lang, link.page, link.hash);
}

/** The page a URL belongs to, or undefined for URLs outside the route map (e.g. 404). */
export function getPageFromUrl(url: URL): Page | undefined {
  const lang = getLangFromUrl(url);
  const slug = getPathWithoutLocale(url).replace(/\/$/, '');
  return (Object.keys(routes) as Page[]).find((page) => routes[page][lang] === slug);
}
