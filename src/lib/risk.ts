// The About page's risk illustration: one fixed sequence of 40 trades (14 winners, 1:2 reward),
// replayed at different risk per trade. Built at build time and inlined as SVG paths.

const TRADES = 'LWLLWLWLLLLLLWWLWLLWLLWWLLWLLLLWLWLLWLWL';
/** Risk per trade the reader can compare, in percent. */
export const RISK_LEVELS = [1, 2, 5];
const REWARD = 2;
const START = 100;

export const RISK_WIDTH = 640;
export const RISK_HEIGHT = 260;
/** Equity range the chart shows, so every curve fits with the same scale. */
const Y_MIN = 76;
const Y_MAX = 112;
const PADDING = 12;

function y(equity: number): number {
  return RISK_HEIGHT - PADDING - ((equity - Y_MIN) / (Y_MAX - Y_MIN)) * (RISK_HEIGHT - 2 * PADDING);
}

export interface RiskCurve {
  /** Risk per trade, in percent. */
  risk: number;
  line: string;
  /** The line closed down to the bottom edge, for the fill under it. */
  area: string;
  /** Change over the period, in percent. */
  change: number;
  /** Largest fall from a peak, in percent (positive). */
  drawdown: number;
}

export function riskCurve(risk: number): RiskCurve {
  let equity = START;
  let peak = START;
  let drawdown = 0;
  const points = [START];
  for (const trade of TRADES) {
    equity *= trade === 'W' ? 1 + (REWARD * risk) / 100 : 1 - risk / 100;
    peak = Math.max(peak, equity);
    drawdown = Math.max(drawdown, (peak - equity) / peak);
    points.push(equity);
  }
  const step = RISK_WIDTH / (points.length - 1);
  const line = points
    .map((v, i) => `${i ? 'L' : 'M'}${(i * step).toFixed(1)} ${y(v).toFixed(1)}`)
    .join('');
  return {
    risk,
    line,
    area: `${line}L${RISK_WIDTH} ${RISK_HEIGHT}L0 ${RISK_HEIGHT}Z`,
    change: equity - START,
    drawdown: drawdown * 100,
  };
}

/** Where the starting balance sits on the chart. */
export const RISK_BASELINE = y(START);
