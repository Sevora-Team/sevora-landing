import type { Lang } from '@/i18n/locales';

export const YEARLY_DISCOUNT = 0.1;

/**
 * Monthly prices. The Serbian page shows dinars, the English page euros.
 * TODO: confirm the final prices.
 */
export const prices = {
  sr: { currency: 'RSD', locale: 'sr-Latn-RS', starter: 5700, premium: 11600 },
  en: { currency: 'EUR', locale: 'en-IE', starter: 49, premium: 99 },
} as const satisfies Record<
  Lang,
  { currency: string; locale: string; starter: number; premium: number }
>;

/** A whole-unit price in the language's currency, e.g. `5.700 RSD` or `€49`. */
export function formatPrice(value: number, lang: Lang): string {
  const { currency, locale } = prices[lang];
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency,
    maximumFractionDigits: 0,
  }).format(value);
}
