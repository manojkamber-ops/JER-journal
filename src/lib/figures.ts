import type { BodyFigure } from "@/data/article-bodies";

// Shared chart layout for figures in the reader (SVG), EPUB (inline SVG) and PDF (drawn with PDF operators).

export const FIGURE_COLORS = ["#823130", "#0f6f8f", "#8a8a8a", "#c27c2c"];

export type FigureScale = {
  yMin: number;
  yMax: number;
  ticks: number[];
  y: (v: number) => number; // value → fraction from bottom (0..1)
  x: (i: number) => number; // index → fraction from left (0..1), category centre
  band: number; // width of one category as a fraction
};

function niceStep(range: number) {
  const raw = range / 5;
  const mag = 10 ** Math.floor(Math.log10(raw));
  const norm = raw / mag;
  return (norm < 1.5 ? 1 : norm < 3 ? 2 : norm < 7 ? 5 : 10) * mag;
}

export function figureScale(fig: BodyFigure): FigureScale {
  const all = fig.series.flatMap((s) => [...s.values, ...(s.lower ?? []), ...(s.upper ?? [])]);
  let lo = Math.min(0, ...all);
  let hi = Math.max(0, ...all);
  if (hi === lo) hi = lo + 1;
  const step = niceStep(hi - lo);
  lo = Math.floor(lo / step) * step;
  hi = Math.ceil(hi / step) * step;
  const ticks: number[] = [];
  for (let t = lo; t <= hi + step / 2; t += step) ticks.push(Number(t.toFixed(10)));
  const n = fig.xLabels.length;
  return {
    yMin: lo,
    yMax: hi,
    ticks,
    y: (v) => (v - lo) / (hi - lo),
    x: (i) => (i + 0.5) / n,
    band: 1 / n,
  };
}

export function formatTick(v: number) {
  const abs = Math.abs(v);
  return abs !== 0 && abs < 0.1 ? v.toFixed(2) : abs < 10 ? String(Number(v.toFixed(2))) : String(Math.round(v));
}

const esc = (s: string) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

/** Standalone SVG markup for a figure. */
export function figureSvg(fig: BodyFigure, opts: { text?: string; grid?: string; font?: string } = {}) {
  if (fig.kind === "image") {
    if (!fig.image) return "";
    const src = esc(fig.image.url).replace(/"/g, "&quot;");
    return `<img src="${src}" alt="${esc(fig.caption).replace(/"/g, "&quot;")}" width="${fig.image.width}" height="${fig.image.height}" loading="lazy" style="display:block;max-width:100%;height:auto;margin:0 auto;background:#fff" />`;
  }
  const W = 640;
  const H = 300;
  const L = 62, R = 16, T = fig.series.length > 1 ? 34 : 16, B = 46;
  const pw = W - L - R, ph = H - T - B;
  const text = opts.text ?? "#333";
  const grid = opts.grid ?? "#ddd";
  const font = opts.font ?? "Helvetica, Arial, sans-serif";
  const sc = figureScale(fig);
  const X = (i: number) => L + sc.x(i) * pw;
  const Y = (v: number) => T + ph - sc.y(v) * ph;
  const parts: string[] = [];

  for (const t of sc.ticks) {
    parts.push(`<line x1="${L}" x2="${W - R}" y1="${Y(t)}" y2="${Y(t)}" stroke="${t === 0 ? text : grid}" stroke-width="${t === 0 ? 1 : 0.6}"/>`);
    parts.push(`<text x="${L - 6}" y="${Y(t) + 4}" text-anchor="end" font-size="11" fill="${text}">${formatTick(t)}</text>`);
  }
  if (fig.marker !== undefined) {
    const mx = L + (sc.x(fig.marker) + sc.band / 2) * pw;
    parts.push(`<line x1="${mx}" x2="${mx}" y1="${T}" y2="${T + ph}" stroke="${text}" stroke-dasharray="4 3" stroke-width="0.8"/>`);
  }
  fig.xLabels.forEach((lab, i) => {
    parts.push(`<text x="${X(i)}" y="${T + ph + 16}" text-anchor="middle" font-size="11" fill="${text}">${esc(lab)}</text>`);
  });
  parts.push(`<text x="14" y="${T + ph / 2}" transform="rotate(-90 14 ${T + ph / 2})" text-anchor="middle" font-size="11" fill="${text}">${esc(fig.yLabel ?? "")}</text>`);

  const ns = fig.series.length;
  fig.series.forEach((s, si) => {
    const color = FIGURE_COLORS[si % FIGURE_COLORS.length];
    if (fig.kind === "bar") {
      const bw = (sc.band * pw * 0.7) / ns;
      s.values.forEach((v, i) => {
        const x0 = X(i) - (bw * ns) / 2 + si * bw;
        const y0 = Y(Math.max(0, v)), y1 = Y(Math.min(0, v));
        parts.push(`<rect x="${x0}" y="${y0}" width="${bw - 2}" height="${Math.max(0.5, y1 - y0)}" fill="${color}"/>`);
        if (s.lower && s.upper) {
          const cx = x0 + (bw - 2) / 2;
          parts.push(`<line x1="${cx}" x2="${cx}" y1="${Y(s.upper[i])}" y2="${Y(s.lower[i])}" stroke="${text}" stroke-width="1"/>`);
        }
      });
    } else {
      const off = ns > 1 ? (si - (ns - 1) / 2) * 6 : 0;
      const pts = s.values.map((v, i) => `${X(i) + off},${Y(v)}`).join(" ");
      if (s.lower && s.upper) {
        s.values.forEach((_, i) => {
          const cx = X(i) + off;
          parts.push(`<line x1="${cx}" x2="${cx}" y1="${Y(s.upper![i])}" y2="${Y(s.lower![i])}" stroke="${color}" stroke-width="1.2" opacity="0.7"/>`);
          parts.push(`<line x1="${cx - 3}" x2="${cx + 3}" y1="${Y(s.upper![i])}" y2="${Y(s.upper![i])}" stroke="${color}" stroke-width="1"/>`);
          parts.push(`<line x1="${cx - 3}" x2="${cx + 3}" y1="${Y(s.lower![i])}" y2="${Y(s.lower![i])}" stroke="${color}" stroke-width="1"/>`);
        });
      }
      parts.push(`<polyline points="${pts}" fill="none" stroke="${color}" stroke-width="1.8"/>`);
      s.values.forEach((v, i) => parts.push(`<circle cx="${X(i) + off}" cy="${Y(v)}" r="3.2" fill="${color}"/>`));
    }
  });

  if (ns > 1) {
    let lx = L;
    fig.series.forEach((s, si) => {
      const color = FIGURE_COLORS[si % FIGURE_COLORS.length];
      parts.push(`<rect x="${lx}" y="8" width="12" height="12" fill="${color}"/>`);
      parts.push(`<text x="${lx + 17}" y="18" font-size="11" fill="${text}">${esc(s.name)}</text>`);
      lx += 30 + s.name.length * 6.2;
    });
  }

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}" width="100%" role="img" aria-label="${esc(fig.caption)}" font-family="${font}">${parts.join("")}</svg>`;
}
