// Sample candlestick chart for the analysis panel, generated at build time.
import type { Instrument, Levels } from '@/data/markets';
import { seededRandom } from './random';

/** [open, high, low, close] */
type Candle = [number, number, number, number];

export const CHART_WIDTH = 1000;
export const CHART_HEIGHT = 340;
const CANDLE_COUNT = 56;
const AVERAGE_PERIOD = 10;

/** A random walk between the levels that ends exactly at the last price. */
function sampleCandles({ levels, seed, last }: Instrument): Candle[] {
  const span = levels.r2 - levels.s1;
  const random = seededRandom(seed);
  const candles: Candle[] = [];
  let open = levels.s1 + span * 0.35;

  for (let i = 0; i < CANDLE_COUNT; i++) {
    const close = open + (random() - 0.48) * span * 0.075;
    const high = Math.max(open, close) + random() * span * 0.03;
    const low = Math.min(open, close) - random() * span * 0.03;
    candles.push([open, high, low, close]);
    open = close;
  }

  const drift = last - candles[CANDLE_COUNT - 1][3];
  return candles.map((candle, i) => {
    const shift = (drift * i) / (CANDLE_COUNT - 1);
    return candle.map((v) => v + shift) as Candle;
  });
}

/** Vertical position of a value, in SVG units and as a % of the chart height. */
export interface Mark {
  y: number;
  percent: number;
}

export interface Chart {
  bodiesUp: string;
  bodiesDown: string;
  wicksUp: string;
  wicksDown: string;
  average: string;
  levels: Record<keyof Levels, Mark>;
  last: Mark;
}

export function buildChart(instrument: Instrument): Chart {
  const candles = sampleCandles(instrument);
  const { levels } = instrument;
  const padTop = 14;
  const padBottom = 14;

  let high = levels.r2;
  let low = levels.s1;
  for (const [, h, l] of candles) {
    high = Math.max(high, h);
    low = Math.min(low, l);
  }
  const pad = (high - low) * 0.05;
  high += pad;
  low -= pad;

  const y = (v: number) =>
    padTop + ((high - v) / (high - low)) * (CHART_HEIGHT - padTop - padBottom);
  const mark = (v: number): Mark => ({ y: y(v), percent: (y(v) / CHART_HEIGHT) * 100 });

  const step = CHART_WIDTH / candles.length;
  const bodyWidth = step * 0.56;
  const chart: Chart = {
    bodiesUp: '',
    bodiesDown: '',
    wicksUp: '',
    wicksDown: '',
    average: '',
    levels: {
      r2: mark(levels.r2),
      r1: mark(levels.r1),
      pivot: mark(levels.pivot),
      s1: mark(levels.s1),
    },
    last: mark(candles[candles.length - 1][3]),
  };

  candles.forEach(([open, h, l, close], i) => {
    const cx = step * i + step / 2;
    const top = Math.min(y(open), y(close));
    const height = Math.max(1.2, Math.abs(y(open) - y(close)));
    const body = `M${(cx - bodyWidth / 2).toFixed(1)} ${top.toFixed(1)}h${bodyWidth.toFixed(1)}v${height.toFixed(1)}h${(-bodyWidth).toFixed(1)}Z`;
    const wick = `M${cx.toFixed(1)} ${y(h).toFixed(1)}V${y(l).toFixed(1)}`;
    if (close >= open) {
      chart.bodiesUp += body;
      chart.wicksUp += wick;
    } else {
      chart.bodiesDown += body;
      chart.wicksDown += wick;
    }
  });

  const points: string[] = [];
  for (let i = AVERAGE_PERIOD - 1; i < candles.length; i++) {
    const window = candles.slice(i - AVERAGE_PERIOD + 1, i + 1);
    const avg = window.reduce((sum, c) => sum + c[3], 0) / AVERAGE_PERIOD;
    points.push(`${(step * i + step / 2).toFixed(1)} ${y(avg).toFixed(1)}`);
  }
  chart.average = `M${points.join('L')}`;

  return chart;
}
