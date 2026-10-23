// Decorative "candlestick glyph" textures, generated at build time from fixed seeds.
// Each texture is a grid of tiny candle shapes; a weight function shapes where they appear
// and how strong they are. Shapes are bucketed into opacity layers (a strongest → c faintest)
// plus an optional accent layer (x).
import { seededRandom } from './random';

export interface Texture {
  width: number;
  height: number;
  layers: { a: string; b: string; c: string; x: string };
}

type Weight = (x: number, y: number) => number;

function rect(x: number, y: number, w: number, h: number): string {
  return `M${x.toFixed(1)} ${y.toFixed(1)}h${w}v${h.toFixed(1)}h${-w}Z`;
}

function generate(
  seed: number,
  width: number,
  height: number,
  cellWidth: number,
  cellHeight: number,
  weight: Weight,
  accentShare = 0,
): Texture {
  const random = seededRandom(seed);
  const layers = { a: '', b: '', c: '', x: '' };

  for (let y = cellHeight / 2; y < height; y += cellHeight) {
    for (let x = cellWidth / 2; x < width; x += cellWidth) {
      const w = weight(x, y);
      if (w <= 0) continue;

      const kind = random();
      let shape: string;
      if (kind < 0.5) {
        // Candle: body + wick
        const body = 5 + random() * 6;
        shape =
          rect(x - 1.5, y - body / 2, 3, body) +
          rect(x - 0.5, y - body / 2 - 2 - random() * 2, 1, body + 4 + random() * 3);
      } else if (kind < 0.72) {
        // Two bars
        shape = rect(x - 3, y - 2, 2, 6) + rect(x + 1, y - 6, 2, 10);
      } else if (kind < 0.88) {
        // Dash
        shape = rect(x - 3, y, 6, 1.5);
      } else {
        continue;
      }

      const strength = w * (0.55 + 0.45 * random());
      if (accentShare && random() < accentShare && strength > 0.5) layers.x += shape;
      else if (strength > 0.62) layers.a += shape;
      else if (strength > 0.36) layers.b += shape;
      else layers.c += shape;
    }
  }

  return { width, height, layers };
}

const barHeights = (() => {
  const random = seededRandom(5);
  const heights: number[] = [];
  let h = 60;
  for (let i = 0; i < 40; i++) {
    h = Math.max(20, Math.min(150, h + (random() - 0.42) * 26));
    heights.push(h);
  }
  return heights;
})();

export const textures = {
  /** Wide dome of glyphs rising from the bottom edge, with accent highlights. */
  dome: generate(
    11,
    1200,
    400,
    14,
    20,
    (x, y) => {
      const dx = (x - 640) / 600;
      const dy = (y - 430) / 400;
      const d = dx * dx + dy * dy;
      if (d > 1) return 0;
      return (1 - d * 0.55) * (0.35 + 0.65 * Math.min(1, x / 900));
    },
    0.012,
  ),
  wave: generate(3, 300, 200, 10, 14, (x, y) => {
    const top = 110 - Math.sin((x / 300) * Math.PI * 1.6 + 0.4) * 50 - (x / 300) * 30;
    return y > top ? 0.35 + 0.65 * Math.min(1, (y - top) / 60) : 0;
  }),
  globe: generate(9, 300, 200, 9, 12, (x, y) => {
    const dx = x - 150;
    const dy = y - 100;
    const d = Math.sqrt(dx * dx + dy * dy);
    if (d > 82) return 0;
    return Math.abs(Math.sin((dx / 82) * 4.2)) > 0.35 ? 0.4 + 0.6 * (1 - d / 82) : 0;
  }),
  bars: generate(13, 300, 200, 8, 12, (x, y) => {
    const h = barHeights[Math.floor((x / 300) * 40)];
    return y > 200 - h ? 0.3 + 0.7 * ((y - (200 - h)) / h) : 0;
  }),
  rings: generate(17, 300, 200, 9, 12, (x, y) => {
    const dx = x - 150;
    const dy = y - 100;
    const d = Math.sqrt(dx * dx + dy * dy);
    return d < 96 && d % 28 < 11 ? 0.9 - d / 140 : 0;
  }),
  stair: generate(19, 300, 200, 10, 14, (x, y) =>
    y > 160 - Math.floor(x / 60) * 28 ? 0.35 + 0.65 * (x / 300) : 0,
  ),
  diag: generate(29, 300, 200, 9, 13, (x, y) => {
    const d = Math.abs(y - 200 + x * 0.62);
    return d < 46 ? 1 - d / 60 : 0;
  }),
  band: generate(
    23,
    600,
    160,
    12,
    16,
    (x, y) => Math.max(0, (x - 220) / 380) * (1 - y / 160) * 1.3,
  ),
} satisfies Record<string, Texture>;

export type TextureName = keyof typeof textures;
