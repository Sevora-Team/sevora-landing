// Number formatting shared by components (at build time) and client scripts.

export function formatNumber(value: number, decimals: number, locale: string): string {
  return new Intl.NumberFormat(locale, {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  }).format(value);
}

/** Signed percentage with a typographic minus, e.g. `+0.42%` / `−1.10%`. */
export function formatChange(change: number, locale: string): string {
  const formatted = new Intl.NumberFormat(locale, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
    signDisplay: 'exceptZero',
  }).format(change);
  return `${formatted.replace('-', '−')}%`;
}
