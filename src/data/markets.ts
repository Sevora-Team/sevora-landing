// Sample market data — illustration only, not live prices.

export interface Levels {
  r2: number;
  r1: number;
  pivot: number;
  s1: number;
}

export interface Instrument {
  symbol: string;
  last: number;
  /** Previous close, for the change %. */
  prev: number;
  decimals: number;
  bias: 'long' | 'short';
  /** Seed for the generated sample candles. */
  seed: number;
  levels: Levels;
}

export interface Quote {
  symbol: string;
  value: number;
  /** Change in %. */
  change: number;
  decimals: number;
}

/** Instruments in the analysis panel; the first is selected by default. */
export const instruments: Instrument[] = [
  {
    symbol: 'XAU/USD',
    last: 4026.7,
    prev: 4009.85,
    decimals: 2,
    bias: 'long',
    seed: 21,
    levels: { r2: 4068.1, r1: 4052.4, pivot: 4018.6, s1: 3996.2 },
  },
  {
    symbol: 'EUR/USD',
    last: 1.122,
    prev: 1.1232,
    decimals: 4,
    bias: 'short',
    seed: 7,
    levels: { r2: 1.1288, r1: 1.1261, pivot: 1.1236, s1: 1.1194 },
  },
  {
    symbol: 'BTC/USD',
    last: 81216,
    prev: 84038,
    decimals: 0,
    bias: 'long',
    seed: 42,
    levels: { r2: 84900, r1: 83200, pivot: 80400, s1: 78650 },
  },
  {
    symbol: 'NAS100',
    last: 28896.9,
    prev: 29821.4,
    decimals: 1,
    bias: 'short',
    seed: 88,
    levels: { r2: 29620, r1: 29310, pivot: 29040, s1: 28540 },
  },
];

export const GOLD = 'XAU/USD';

export function changePercent({ last, prev }: Pick<Instrument, 'last' | 'prev'>): number {
  return Math.round(((last - prev) / prev) * 10000) / 100;
}

function quote(symbol: string): Quote {
  const instrument = instruments.find((i) => i.symbol === symbol);
  if (!instrument) throw new Error(`Unknown instrument ${symbol}`);
  const { last, decimals } = instrument;
  return { symbol, value: last, change: changePercent(instrument), decimals };
}

/** The scrolling market ticker. */
export const ticker: Quote[] = [
  quote('XAU/USD'),
  { symbol: 'XAG/USD', value: 54.56, change: -5.85, decimals: 2 },
  { symbol: 'DXY', value: 101.61, change: -0.08, decimals: 2 },
  quote('EUR/USD'),
  { symbol: 'GBP/USD', value: 1.34, change: 0.05, decimals: 4 },
  { symbol: 'USD/JPY', value: 156.84, change: -0.82, decimals: 2 },
  quote('BTC/USD'),
  { symbol: 'ETH/USD', value: 2378.26, change: -3.78, decimals: 2 },
  quote('NAS100'),
  { symbol: 'SPX500', value: 7642.36, change: -1.48, decimals: 2 },
  { symbol: 'USOIL', value: 99.46, change: 2.38, decimals: 2 },
];
