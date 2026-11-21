import type { APIRoute } from 'astro';
import { defaultLang, langTags, routes, type Lang } from '@/i18n/locales';
import { getPageUrl } from '@/i18n/routes';

// One sitemap for the whole site: every page in each language, with its other-language
// versions and x-default as hreflang links. Slugs differ per language (/paketi/ and
// /en/pricing/), so the pairs come from the route map. Browsers style it with sitemap.css.
export const GET: APIRoute = ({ site }) => {
  if (!site) return new Response(null, { status: 404 });

  const langs = Object.keys(langTags) as Lang[];
  const pages = Object.keys(routes) as (keyof typeof routes)[];
  const url = (lang: Lang, page: keyof typeof routes) => new URL(getPageUrl(lang, page), site).href;

  const entries = pages.flatMap((page) => {
    const links = [
      ...langs.map((lang) => [langTags[lang], url(lang, page)]),
      ['x-default', url(defaultLang, page)],
    ]
      .map(
        ([hreflang, href]) =>
          `    <xhtml:link rel="alternate" hreflang="${hreflang}" href="${href}"/>`,
      )
      .join('\n');
    return langs.map((lang) => `  <url>\n    <loc>${url(lang, page)}</loc>\n${links}\n  </url>`);
  });

  const body = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<?xml-stylesheet type="text/css" href="/sitemap.css"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">',
    ...entries,
    '</urlset>',
  ].join('\n');

  return new Response(`${body}\n`, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
};
