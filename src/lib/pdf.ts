// Minimal dependency-free PDF writer for article and issue PDFs.
// Uses the standard 14 fonts (WinAnsi encoding), so no font embedding is needed.
import { ARTICLES, JOURNAL_INFO, isSampleArticle, pageStart, type Article } from "@/data/journal";
import { formatCitation } from "@/lib/citations";
import { ARTICLE_BODIES, exhibitTables, type BodyExhibits, type BodyFigure, type BodyTable } from "@/data/article-bodies";
import { FIGURE_COLORS, figureScale, formatTick } from "@/lib/figures";
import { citationsToText } from "@/lib/references";
import { doiUrl } from "@/lib/doi";

type Font = "F1" | "F2" | "F3" | "F4"; // Times-Roman, Times-Bold, Times-Italic, Helvetica
type RGB = [number, number, number];

const PAGE_W = 595.28; // A4
const PAGE_H = 841.89;
const MARGIN = 64;
const NAVY: RGB = [0.047, 0.165, 0.302];
const GOLD: RGB = [0.69, 0.537, 0.31];
const GREY: RGB = [0.35, 0.35, 0.35];
const LINK: RGB = [0.0, 0.36, 0.6];

type LinkRect = { x: number; y: number; w: number; h: number; url: string };

/** Absolute base URL of the journal website, used for the clickable links inside PDFs. */
function siteBase() {
  return typeof window !== "undefined" ? `${window.location.origin}${window.location.pathname}` : `${JOURNAL_INFO.website}/`;
}

// Unicode → WinAnsi for the punctuation that appears in the journal data.
const WIN_ANSI: Record<string, number> = {
  "€": 0x80, "‚": 0x82, "„": 0x84, "…": 0x85, "‘": 0x91, "’": 0x92, "“": 0x93, "”": 0x94,
  "•": 0x95, "–": 0x96, "—": 0x97, "™": 0x99,
};

// Symbols outside WinAnsi: spelled out or replaced by the closest available character.
const SUBSTITUTES: Record<string, string> = {
  "−": "-", "₹": "Rs ", "≥": ">=", "≤": "<=", "≈": "~", "≠": "!=", "→": "->", "←": "<-", "∑": "Sum", "∆": "Delta", "Δ": "Delta",
  "α": "alpha", "β": "beta", "γ": "gamma", "δ": "delta", "ε": "epsilon", "θ": "theta", "λ": "lambda", "μ": "\u00b5",
  "π": "pi", "ρ": "rho", "σ": "sigma", "τ": "tau", "φ": "phi", "ω": "omega", "η": "eta", "κ": "kappa", "χ": "chi",
  "ā": "a", "ō": "o", "ū": "u", "ş": "s", "Ş": "S", "ğ": "g", "ı": "i", "ł": "l", "ř": "r", "č": "c", "ž": "z", "š": "s",
};

function substitute(s: string) {
  return s.replace(/[−₹≥≤≈≠→←∑∆ΔαβγδεθλμπρστφωηκχāōūşŞğıłřčžš]/g, (c) => SUBSTITUTES[c] ?? c);
}

function encode(s: string) {
  let out = "";
  s = substitute(s);
  for (const ch of s.normalize("NFC")) {
    let code = ch.charCodeAt(0);
    if (WIN_ANSI[ch]) code = WIN_ANSI[ch];
    else if (code > 0xff) {
      const base = ch.normalize("NFD")[0];
      code = base && base.charCodeAt(0) < 0x80 ? base.charCodeAt(0) : 0x3f; // "?"
    }
    if (ch === "(" || ch === ")" || ch === "\\") out += "\\" + ch;
    else if (code < 0x20 || code > 0x7e) out += "\\" + code.toString(8).padStart(3, "0");
    else out += String.fromCharCode(code);
  }
  return out;
}

// Approximate average glyph widths (fraction of font size) — good enough for wrapping.
const AVG: Record<Font, number> = { F1: 0.47, F2: 0.5, F3: 0.45, F4: 0.53 };

// Per-character width estimate (fraction of font size) for underlines, alignment and inline links.
function charWidth(ch: string) {
  if ("il.,;:'|!jI ".includes(ch)) return 0.27;
  if ("frt()-/".includes(ch)) return 0.34;
  if ("mwMW".includes(ch)) return 0.82;
  if (/[A-Z]/.test(ch)) return 0.66;
  if (/[0-9]/.test(ch)) return 0.556;
  return 0.5;
}
function textWidth(str: string, font: Font, size: number) {
  const scale = font === "F4" ? 1 : font === "F2" ? 1.05 : 0.9; // Times is narrower than Helvetica; bold is wider
  let w = 0;
  for (const ch of str) w += charWidth(ch);
  return w * size * scale;
}

// Times-Roman advance widths (1/1000 em) for ASCII 32–126, from the standard AFM metrics. Body text is
// measured with these so that lines can be filled exactly to the margin when justified.
const TIMES_W = [
  250, 333, 408, 500, 500, 833, 778, 180, 333, 333, 500, 564, 250, 333, 250, 278,
  500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 278, 278, 564, 564, 564, 444, 921,
  722, 667, 667, 722, 611, 556, 722, 722, 333, 389, 722, 611, 889, 722, 722, 556, 722, 667, 556, 611, 722, 722, 944, 722, 722, 611,
  333, 278, 333, 469, 500, 333,
  444, 500, 444, 500, 444, 333, 500, 500, 278, 278, 500, 278, 778, 500, 500, 500, 500, 333, 389, 278, 500, 500, 722, 500, 500, 444,
  480, 200, 480, 541,
];
const TIMES_EXTRA: Record<string, number> = {
  "–": 500, "—": 1000, "‘": 333, "’": 333, "“": 444, "”": 444, "…": 1000, "•": 350, "·": 250, "×": 564, "µ": 500, "°": 400, "§": 500, "£": 500, "€": 500,
};
function timesWidth(str: string, size: number) {
  let w = 0;
  for (const ch of substitute(str).normalize("NFC")) {
    const code = ch.charCodeAt(0);
    if (code >= 32 && code <= 126) w += TIMES_W[code - 32];
    else if (TIMES_EXTRA[ch]) w += TIMES_EXTRA[ch];
    else {
      const base = ch.normalize("NFD").charCodeAt(0); // accented letters take the width of their base letter
      w += base >= 32 && base <= 126 ? TIMES_W[base - 32] : 500;
    }
  }
  return (w / 1000) * size;
}

class PdfDoc {
  private pages: string[][] = [];
  private links: LinkRect[][] = [];
  private y = 0;
  private footerTitle: string;
  /** When true, the first page is a cover sheet without running footer or page number. */
  hasCover = false;

  constructor(footerTitle: string) {
    this.footerTitle = footerTitle;
    this.newPage();
  }

  private get ops() {
    return this.pages[this.pages.length - 1];
  }

  newPage() {
    this.pages.push([]);
    this.links.push([]);
    this.y = PAGE_H - MARGIN;
  }

  private ensure(h: number) {
    if (this.y - h < MARGIN + 20) this.newPage();
  }

  private color([r, g, b]: RGB) {
    return `${r} ${g} ${b} rg`;
  }

  /** Breaks text into lines; `last` marks the final line of each paragraph (never stretched when justifying). */
  private wrap(text: string, font: Font, size: number, width: number) {
    const maxChars = Math.max(10, Math.floor(width / (size * AVG[font])));
    // Times-Roman body text is measured with real glyph widths; other fonts use the character estimate.
    const tooLong = font === "F1" ? (l: string) => timesWidth(l, size) > width : (l: string) => l.length > maxChars;
    const lines: { text: string; last: boolean }[] = [];
    for (const para of text.split("\n")) {
      let line = "";
      for (const word of para.split(/\s+/).filter(Boolean)) {
        const next = line ? `${line} ${word}` : word;
        if (tooLong(next) && line) {
          lines.push({ text: line, last: false });
          line = word;
        } else line = next;
      }
      lines.push({ text: line, last: true });
    }
    return lines;
  }

  text(
    str: string,
    opts: {
      font?: Font;
      size?: number;
      color?: RGB;
      indent?: number;
      leading?: number;
      /** "justify" stretches every line but the last of each paragraph to the full measure. */
      align?: "left" | "center" | "right" | "justify";
      /** Makes every line of the text a clickable link (blue, underlined). */
      link?: string;
    } = {}
  ) {
    const { font = "F1", size = 10.5, indent = 0, align = "left", link } = opts;
    const color = opts.color ?? (link ? LINK : [0.1, 0.1, 0.1]);
    const leading = opts.leading ?? size * 1.38;
    const width = PAGE_W - MARGIN * 2 - indent;
    for (const { text: line, last } of this.wrap(str, font, size, width)) {
      this.ensure(leading);
      this.y -= leading;
      const approxW = Math.min(font === "F1" ? timesWidth(line, size) : textWidth(line, font, size), width);
      const x = align === "center" ? (PAGE_W - approxW) / 2 : align === "right" ? PAGE_W - MARGIN - approxW : MARGIN + indent;
      // Justification: spread the leftover width over the inter-word spaces with the Tw (word spacing) operator.
      const gaps = line.split(" ").length - 1;
      const tw = align === "justify" && font === "F1" && !last && gaps > 0 ? (width - timesWidth(line, size)) / gaps : 0;
      const spacing = tw > 0 && tw < size * 0.9 ? `${tw.toFixed(3)} Tw ` : "";
      this.ops.push(`BT ${this.color(color)} /${font} ${size} Tf ${spacing}${x.toFixed(2)} ${this.y.toFixed(2)} Td (${encode(line)}) Tj ${spacing ? "0 Tw " : ""}ET`);
      if (link) {
        const [r, g, b] = color;
        this.ops.push(`${r} ${g} ${b} RG 0.4 w ${x.toFixed(2)} ${(this.y - 1.5).toFixed(2)} m ${(x + approxW).toFixed(2)} ${(this.y - 1.5).toFixed(2)} l S`);
        this.links[this.links.length - 1].push({ x, y: this.y - 3, w: approxW, h: size + 3, url: link });
      }
    }
  }

  /** "Label: value" on one line where only the value is a link. */
  labelledLink(label: string, value: string, url: string, size = 9.5) {
    this.ensure(size * 1.6);
    this.y -= size * 1.6;
    const labelW = textWidth(label, "F4", size);
    const valueW = Math.min(textWidth(value, "F4", size), PAGE_W - MARGIN * 2 - labelW);
    this.ops.push(`BT ${this.color(GREY)} /F4 ${size} Tf ${MARGIN} ${this.y.toFixed(2)} Td (${encode(label)}) Tj ET`);
    const x = MARGIN + labelW + 6;
    this.ops.push(`BT ${this.color(LINK)} /F4 ${size} Tf ${x.toFixed(2)} ${this.y.toFixed(2)} Td (${encode(value)}) Tj ET`);
    this.ops.push(`${LINK.join(" ")} RG 0.4 w ${x.toFixed(2)} ${(this.y - 1.5).toFixed(2)} m ${(x + valueW).toFixed(2)} ${(this.y - 1.5).toFixed(2)} l S`);
    this.links[this.links.length - 1].push({ x, y: this.y - 3, w: valueW, h: size + 3, url });
  }

  space(h: number) {
    this.y -= h;
  }

  rule(color: RGB = GOLD, weight = 1) {
    this.ensure(8);
    this.y -= 6;
    const [r, g, b] = color;
    this.ops.push(`${r} ${g} ${b} RG ${weight} w ${MARGIN} ${this.y.toFixed(2)} m ${PAGE_W - MARGIN} ${this.y.toFixed(2)} l S`);
    this.y -= 6;
  }

  band(height: number, color: RGB) {
    const [r, g, b] = color;
    this.ops.push(`${r} ${g} ${b} rg 0 ${(PAGE_H - height).toFixed(2)} ${PAGE_W} ${height} re f`);
  }

  /** Text at an absolute position (used by tables and figures). */
  private put(str: string, x: number, y: number, font: Font, size: number, color: RGB = [0.1, 0.1, 0.1], align: "left" | "right" | "center" = "left") {
    const w = textWidth(str, font, size);
    const x0 = align === "right" ? x - w : align === "center" ? x - w / 2 : x;
    this.ops.push(`BT ${this.color(color)} /${font} ${size} Tf ${x0.toFixed(2)} ${y.toFixed(2)} Td (${encode(str)}) Tj ET`);
  }

  private hline(x1: number, x2: number, y: number, weight = 0.5, color: RGB = [0.2, 0.2, 0.2]) {
    this.ops.push(`${color.join(" ")} RG ${weight} w ${x1.toFixed(2)} ${y.toFixed(2)} m ${x2.toFixed(2)} ${y.toFixed(2)} l S`);
  }

  /** Booktabs-style table: caption, header row, body rows, note. */
  tableBlock(t: BodyTable) {
    const size = 8.5;
    const rowH = 12.5;
    const width = PAGE_W - MARGIN * 2;
    const firstW = t.columns.length > 1 ? width * (t.columns.length > 4 ? 0.34 : 0.42) : width;
    const otherW = t.columns.length > 1 ? (width - firstW) / (t.columns.length - 1) : 0;
    const fit = (str: string, w: number, font: Font) => {
      let out = str;
      while (out.length > 3 && textWidth(out, font, size) > w - 4) out = out.slice(0, -2);
      return out === str ? str : `${out.trimEnd()}…`;
    };
    const height = 26 + (t.rows.length + 1) * rowH + (t.note ? 22 : 0);
    this.ensure(Math.min(height, PAGE_H - MARGIN * 2 - 40));
    this.space(6);
    this.text(t.caption, { font: "F2", size: 9.5 });
    this.space(2);
    this.hline(MARGIN, PAGE_W - MARGIN, this.y, 1);
    const row = (cells: string[], font: Font) => {
      this.ensure(rowH + 4);
      this.y -= rowH;
      cells.forEach((c, i) => {
        if (i === 0) this.put(fit(c, firstW, font), MARGIN, this.y + 3, font, size);
        else this.put(fit(c, otherW, font), MARGIN + firstW + otherW * i - 2, this.y + 3, font, size, [0.1, 0.1, 0.1], "right");
      });
    };
    // Header: long column labels wrap onto up to three lines instead of being cut off
    const colW = (i: number) => (i === 0 ? firstW : otherW) - 8;
    const wrapCell = (str: string, w: number) => {
      const lines: string[] = [];
      let line = "";
      for (const word of str.split(" ")) {
        const next = line ? `${line} ${word}` : word;
        if (line && textWidth(next, "F2", size) > w) {
          lines.push(line);
          line = word;
        } else line = next;
      }
      lines.push(line);
      return lines.slice(0, 3);
    };
    const headerLines = t.columns.map((c, i) => wrapCell(c, colW(i)));
    const nLines = Math.max(...headerLines.map((l) => l.length));
    this.ensure(rowH * nLines + 4);
    for (let k = 0; k < nLines; k++) {
      this.y -= rowH - 1.5;
      headerLines.forEach((lines, i) => {
        // bottom-align header text so the last line sits on the rule
        const line = lines[k - (nLines - lines.length)];
        if (!line) return;
        if (i === 0) this.put(line, MARGIN, this.y + 3, "F2", size);
        else this.put(line, MARGIN + firstW + otherW * i - 2, this.y + 3, "F2", size, [0.1, 0.1, 0.1], "right");
      });
    }
    this.y -= 1.5;
    this.hline(MARGIN, PAGE_W - MARGIN, this.y, 0.5);
    t.rows.forEach((r) => row(r, "F1"));
    this.hline(MARGIN, PAGE_W - MARGIN, this.y - 2, 1);
    this.space(4);
    if (t.note) this.text(t.note, { font: "F3", size: 8, color: GREY });
    this.space(6);
  }

  /** Chart drawn with PDF operators (same layout rules as the on-screen SVG). */
  figureBlock(f: BodyFigure) {
    const plotH = 150;
    const legendH = f.series.length > 1 ? 14 : 0;
    this.ensure(plotH + legendH + 70);
    this.space(6);
    this.text(f.caption, { font: "F2", size: 9.5 });
    this.space(6 + legendH);
    const L = MARGIN + 42;
    const R = PAGE_W - MARGIN - 8;
    const top = this.y;
    const bottom = top - plotH;
    const pw = R - L;
    const sc = figureScale(f);
    const X = (i: number) => L + sc.x(i) * pw;
    const Y = (v: number) => bottom + sc.y(v) * plotH;
    const ink: RGB = [0.2, 0.2, 0.2];
    const rgb = (hex: string): RGB => [1, 3, 5].map((k) => Number((parseInt(hex.slice(k, k + 2), 16) / 255).toFixed(3))) as RGB;

    if (legendH) {
      let lx = L;
      f.series.forEach((ser, si) => {
        const c = rgb(FIGURE_COLORS[si % FIGURE_COLORS.length]);
        this.ops.push(`${c.join(" ")} rg ${lx.toFixed(2)} ${(top + 6).toFixed(2)} 8 8 re f`);
        this.put(ser.name, lx + 11, top + 7, "F4", 7.5, ink);
        lx += 22 + textWidth(ser.name, "F4", 7.5);
      });
    }
    for (const t of sc.ticks) {
      this.hline(L, R, Y(t), t === 0 ? 0.8 : 0.3, t === 0 ? ink : [0.8, 0.8, 0.8]);
      this.put(formatTick(t), L - 4, Y(t) - 2.5, "F4", 7, ink, "right");
    }
    if (f.marker !== undefined) {
      const mx = L + (sc.x(f.marker) + sc.band / 2) * pw;
      this.ops.push(`${ink.join(" ")} RG 0.6 w [3 2] 0 d ${mx.toFixed(2)} ${bottom.toFixed(2)} m ${mx.toFixed(2)} ${top.toFixed(2)} l S [] 0 d`);
    }
    f.xLabels.forEach((lab, i) => this.put(lab, X(i), bottom - 11, "F4", 7, ink, "center"));
    // y-axis label, rotated
    const ly = bottom + plotH / 2 - textWidth(f.yLabel, "F4", 7) / 2;
    this.ops.push(`BT ${this.color(ink)} /F4 7 Tf 0 1 -1 0 ${(MARGIN + 8).toFixed(2)} ${ly.toFixed(2)} Tm (${encode(f.yLabel)}) Tj ET`);

    const ns = f.series.length;
    f.series.forEach((ser, si) => {
      const c = rgb(FIGURE_COLORS[si % FIGURE_COLORS.length]);
      if (f.kind === "bar") {
        const bw = (sc.band * pw * 0.7) / ns;
        ser.values.forEach((v, i) => {
          const x0 = X(i) - (bw * ns) / 2 + si * bw;
          const y0 = Y(Math.min(0, v));
          const h = Math.max(0.5, Math.abs(Y(v) - Y(0)));
          this.ops.push(`${c.join(" ")} rg ${x0.toFixed(2)} ${y0.toFixed(2)} ${(bw - 1.5).toFixed(2)} ${h.toFixed(2)} re f`);
          if (ser.lower && ser.upper) {
            const cx = x0 + (bw - 1.5) / 2;
            this.ops.push(`${ink.join(" ")} RG 0.6 w ${cx.toFixed(2)} ${Y(ser.lower[i]).toFixed(2)} m ${cx.toFixed(2)} ${Y(ser.upper[i]).toFixed(2)} l S`);
          }
        });
      } else {
        const off = ns > 1 ? (si - (ns - 1) / 2) * 4 : 0;
        if (ser.lower && ser.upper) {
          ser.values.forEach((_, i) => {
            const cx = X(i) + off;
            this.ops.push(`${c.join(" ")} RG 0.7 w ${cx.toFixed(2)} ${Y(ser.lower![i]).toFixed(2)} m ${cx.toFixed(2)} ${Y(ser.upper![i]).toFixed(2)} l S`);
          });
        }
        const pts = ser.values.map((v, i) => `${(X(i) + off).toFixed(2)} ${Y(v).toFixed(2)}`);
        this.ops.push(`${c.join(" ")} RG 1.2 w ${pts[0]} m ${pts.slice(1).map((p) => `${p} l`).join(" ")} S`);
        ser.values.forEach((v, i) => this.ops.push(`${c.join(" ")} rg ${(X(i) + off - 2).toFixed(2)} ${(Y(v) - 2).toFixed(2)} 4 4 re f`));
      }
    });
    this.y = bottom - 18;
    if (f.note) this.text(f.note, { font: "F3", size: 8, color: GREY });
    this.space(6);
  }

  exhibits(x: BodyExhibits) {
    exhibitTables(x).forEach((t) => this.tableBlock(t));
    (x.figures ?? []).forEach((f) => this.figureBlock(f));
  }

  heading(str: string) {
    this.ensure(40);
    this.space(10);
    this.text(str, { font: "F2", size: 12.5, color: NAVY });
    this.space(2);
  }

  build(): Blob {
    const offset = this.hasCover ? 1 : 0;
    const total = this.pages.length - offset;
    // Running footer on every page except a cover sheet
    this.pages.forEach((ops, i) => {
      if (i < offset) return;
      const foot = `${this.footerTitle}   ·   ${i + 1 - offset} / ${total}`;
      ops.push(`${GOLD.join(" ")} RG 0.5 w ${MARGIN} 44 m ${PAGE_W - MARGIN} 44 l S`);
      ops.push(`BT ${this.color(GREY)} /F4 7.5 Tf ${MARGIN} 32 Td (${encode(foot)}) Tj ET`);
    });

    const objs: string[] = [];
    const add = (s: string) => objs.push(s) && objs.length;
    const catalog = add(""); // placeholder, filled below
    const pagesObj = add("");
    const fonts = (["Times-Roman", "Times-Bold", "Times-Italic", "Helvetica"] as const).map((f) =>
      add(`<< /Type /Font /Subtype /Type1 /BaseFont /${f} /Encoding /WinAnsiEncoding >>`)
    );
    const fontRes = `<< /F1 ${fonts[0]} 0 R /F2 ${fonts[1]} 0 R /F3 ${fonts[2]} 0 R /F4 ${fonts[3]} 0 R >>`;
    const pageIds = this.pages.map((ops, i) => {
      const stream = ops.join("\n");
      const content = add(`<< /Length ${stream.length} >>\nstream\n${stream}\nendstream`);
      const annots = this.links[i].map((l) =>
        add(
          `<< /Type /Annot /Subtype /Link /Rect [${l.x.toFixed(2)} ${l.y.toFixed(2)} ${(l.x + l.w).toFixed(2)} ${(l.y + l.h).toFixed(2)}] /Border [0 0 0] /A << /Type /Action /S /URI /URI (${encode(l.url)}) >> >>`
        )
      );
      const annotRef = annots.length ? ` /Annots [${annots.map((id) => `${id} 0 R`).join(" ")}]` : "";
      return add(
        `<< /Type /Page /Parent ${pagesObj} 0 R /MediaBox [0 0 ${PAGE_W} ${PAGE_H}] /Resources << /Font ${fontRes} >> /Contents ${content} 0 R${annotRef} >>`
      );
    });
    objs[catalog - 1] = `<< /Type /Catalog /Pages ${pagesObj} 0 R >>`;
    objs[pagesObj - 1] = `<< /Type /Pages /Kids [${pageIds.map((id) => `${id} 0 R`).join(" ")}] /Count ${pageIds.length} >>`;

    let out = "%PDF-1.4\n";
    const offsets: number[] = [];
    objs.forEach((body, i) => {
      offsets.push(out.length);
      out += `${i + 1} 0 obj\n${body}\nendobj\n`;
    });
    const xref = out.length;
    out += `xref\n0 ${objs.length + 1}\n0000000000 65535 f \n`;
    out += offsets.map((o) => `${String(o).padStart(10, "0")} 00000 n \n`).join("");
    out += `trailer\n<< /Size ${objs.length + 1} /Root ${catalog} 0 R >>\nstartxref\n${xref}\n%%EOF`;

    // Content is pure ASCII (non-ASCII bytes are octal-escaped), so string length == byte length.
    return new Blob([out], { type: "application/pdf" });
  }
}

const fmtDate = (iso?: string) =>
  iso ? new Date(iso).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" }) : "—";

/** Cover sheet in the style of the journal's article template, with clickable links to the website. */
function writeCover(doc: PdfDoc, a: Article) {
  const base = siteBase();
  const editorial = a.type === "Editorial";
  const names = a.authors.map((x) => x.name).join(", ") + (editorial ? " Editor-in-Chief" : "");
  doc.hasCover = true;
  doc.space(6);
  doc.text(JOURNAL_INFO.title, { font: "F2", size: 15, color: NAVY });
  doc.space(2);
  doc.labelledLink(`ISSN: ${JOURNAL_INFO.issnPrint} (Print) ${JOURNAL_INFO.issnOnline} (Online)   Journal homepage: `, base.replace(/^https?:\/\//, ""), `${base}#/home`, 8.5);
  doc.rule(NAVY, 0.8);
  doc.space(8);
  if (isSampleArticle(a)) {
    doc.text("SAMPLE ARTICLE — illustrative content, not a peer-reviewed published article", { font: "F2", size: 9, color: GOLD });
    doc.space(4);
  }
  doc.text(a.title, { font: "F2", size: 17, color: [0.1, 0.1, 0.1], leading: 22 });
  doc.space(6);
  doc.text(names, { font: "F3", size: 11.5 });
  doc.space(10);
  doc.rule([0.75, 0.75, 0.75], 0.6);
  doc.space(4);
  doc.text("To cite this article:", { font: "F2", size: 9.5 });
  doc.text(
    `${names} (${a.year}) ${a.title}, ${JOURNAL_INFO.title}, ${a.volume}:${a.issue}, ${a.pages.replace("–", "-")}, DOI: ${a.doi}`,
    { font: "F4", size: 9, link: `${base}#/article/${a.id}?cite=1` }
  );
  doc.space(4);
  doc.labelledLink("To link to this article:  ", `https://doi.org/${a.doi}`, doiUrl(a.doi));
  doc.space(10);
  const pubOnline = new Date(a.publishedOnline ?? a.published).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" });
  doc.text(`Published online: ${pubOnline}.`, { font: "F4", size: 9.5, color: GREY });
  doc.space(6);
  doc.text("Submit your article to this journal", { font: "F4", size: 9.5, link: `${base}#/submission` });
  doc.space(4);
  doc.text(`Article views: ${Math.round(a.downloads * 4.2).toLocaleString("en-GB")}`, { font: "F4", size: 9.5, color: GREY });
  doc.space(4);
  doc.text("View related articles", { font: "F4", size: 9.5, link: `${base}#/reader/${a.id}?panel=relations` });
  doc.space(4);
  doc.labelledLink(`Citing articles: ${a.citations}   `, "View citing articles", `${base}#/article/${a.id}`);
  doc.space(4);
  doc.text("Read this article in the online reader", { font: "F4", size: 9.5, link: `${base}#/reader/${a.id}` });
  doc.space(30);
  doc.text("Full Terms & Conditions of access and use can be found at", { font: "F4", size: 8.5, color: GREY });
  doc.text(`${base}#/legal?section=terms`, { font: "F4", size: 8.5, link: `${base}#/legal?section=terms` });
  doc.newPage();
}

function writeArticle(doc: PdfDoc, a: Article) {
  const base = siteBase();
  const editorial = a.type === "Editorial";
  const body = ARTICLE_BODIES[a.id];
  const cite = (t: string) => citationsToText(t, a.references);

  // Running head (as on the first text page of the template)
  doc.text(JOURNAL_INFO.title.toUpperCase(), { font: "F4", size: 7.5, color: GREY, align: "right" });
  doc.text(`${a.year}, VOL. ${a.volume}, NO. ${a.issue}, ${a.pages}`, { font: "F4", size: 7.5, color: GREY, align: "right" });
  doc.text(`https://doi.org/${a.doi}`, { font: "F4", size: 7.5, align: "right", link: doiUrl(a.doi) });
  doc.rule();
  doc.text((isSampleArticle(a) ? "SAMPLE ARTICLE · " : "") + a.type.toUpperCase(), { font: "F2", size: 9, color: GOLD });
  doc.space(4);
  doc.text(a.title, { font: "F2", size: 17, color: NAVY, leading: 22 });
  doc.space(6);

  if (!editorial) {
    doc.text(a.authors.map((x) => x.name + (x.corresponding ? "*" : "")).join(", "), { font: "F3", size: 11.5 });
    if (a.affiliations?.length) {
      for (const af of a.affiliations) {
        doc.text(`${af.id}  ${af.department}, ${af.institution}, ${af.city}, ${af.country}${af.email ? ` — ${af.email}` : ""}`, {
          font: "F4", size: 8, color: GREY,
        });
      }
    } else {
      const affs = Array.from(new Set(a.authors.map((x) => x.affiliation)));
      affs.forEach((af) => doc.text(af, { font: "F4", size: 8, color: GREY }));
    }
    doc.space(4);
    doc.text(
      `Received ${fmtDate(a.received)}  ·  Accepted ${fmtDate(a.accepted)}  ·  ${a.publishedOnline ? `Published online ${fmtDate(a.publishedOnline)}  ·  ` : ""}Issue published ${fmtDate(a.published)}`,
      { font: "F4", size: 8, color: GREY }
    );
    doc.heading("Abstract");
    doc.text(a.abstract, { align: "justify" });
    doc.space(6);
    doc.text(`Keywords: ${a.keywords.join("; ")}`, { font: "F3", size: 10 });
    doc.text(`JEL Classification: ${a.jelCodes.join(", ")}`, { font: "F3", size: 10 });
  }

  // Full text
  if (body) {
    for (const sec of body) {
      if (sec.heading) doc.heading(sec.heading);
      else doc.space(6);
      for (const para of sec.paragraphs) {
        doc.text(cite(para), { align: "justify" });
        doc.space(5);
      }
      doc.exhibits(sec);
      for (const sub of sec.subsections ?? []) {
        doc.space(4);
        doc.text(sub.heading, { font: "F3", size: 11, color: NAVY });
        for (const para of sub.paragraphs) {
          doc.text(cite(para), { align: "justify" });
          doc.space(5);
        }
        doc.exhibits(sub);
      }
    }
  } else if (!editorial) {
    doc.space(8);
    doc.text("FULL TEXT AVAILABLE ON REQUEST", { font: "F2", size: 9, color: GOLD });
    doc.text(
      "Only the abstract and references of this article are public. The authors share the full paper on request; use the request button on the article page:",
      { font: "F3", size: 10, color: GREY }
    );
    doc.text(`${base}#/article/${a.id}`, { font: "F4", size: 9, link: `${base}#/article/${a.id}` });
  }

  if (a.acknowledgments) { doc.heading("Acknowledgments"); doc.text(cite(a.acknowledgments), { align: "justify" }); }
  if (a.funding) { doc.heading("Funding"); doc.text(cite(a.funding), { align: "justify" }); }
  if (a.dataAvailability) { doc.heading("Data Availability Statement"); doc.text(cite(a.dataAvailability), { align: "justify" }); }
  if (a.references?.length) {
    doc.heading("References");
    for (const r of a.references) {
      doc.text(r.text, { size: 9, leading: 12.5 });
      if (r.doi) doc.text(`https://doi.org/${r.doi}`, { font: "F4", size: 8, indent: 14, link: doiUrl(r.doi) });
      if (r.articleId) doc.text("Read in the Journal of Economic Research", { font: "F4", size: 8, indent: 14, link: `${base}#/reader/${r.articleId}` });
      doc.space(3);
    }
  }

  if (editorial) {
    const af = a.affiliations?.[0];
    doc.space(14);
    doc.text(a.authors[0]?.name ?? "", { font: "F2", size: 10.5, align: "right" });
    doc.text("Editor-in-Chief", { font: "F3", size: 10, align: "right" });
    doc.text(af ? `${af.department}, ${af.institution}, ${af.city}, ${af.country}` : a.authors[0]?.affiliation ?? "", { size: 9.5, align: "right" });
    if (af?.email) doc.text(af.email, { font: "F4", size: 9, align: "right", link: `mailto:${af.email}` });
  } else {
    doc.heading("How to cite this article");
    doc.text(formatCitation(a, "apa"), { size: 9.5 });
  }
  doc.space(8);
  doc.text(`© ${a.year} The Author(s). ${JOURNAL_INFO.license}.`, { font: "F4", size: 7.5, color: GREY });
}

export function articlePdf(a: Article) {
  const doc = new PdfDoc(`${JOURNAL_INFO.abbrTitle} ${a.volume}(${a.issue})  ·  doi:${a.doi}`);
  writeCover(doc, a);
  writeArticle(doc, a);
  return doc.build();
}

export function issuePdf(volume: number, issue: number) {
  const articles = ARTICLES.filter((a) => a.volume === volume && a.issue === issue).sort(
    (x, y) => pageStart(x) - pageStart(y)
  );
  const doc = new PdfDoc(`${JOURNAL_INFO.title}  ·  Volume ${volume}, Issue ${issue}`);

  // Cover
  doc.band(250, NAVY);
  doc.space(40);
  doc.text("JOURNAL OF", { font: "F4", size: 11, color: [1, 1, 1], align: "center" });
  doc.text("Economic Research", { font: "F2", size: 32, color: [1, 1, 1], align: "center", leading: 40 });
  doc.space(12);
  doc.text(`Volume ${volume}  ·  Issue ${issue}  ·  ${articles[0]?.year ?? ""}`, { font: "F4", size: 11, color: GOLD, align: "center" });
  doc.space(20);
  doc.text(`${JOURNAL_INFO.publisher}  ·  ISSN ${JOURNAL_INFO.issnPrint}`, { font: "F4", size: 9, color: [0.85, 0.85, 0.85], align: "center" });
  doc.space(90);
  doc.text("Contents", { font: "F2", size: 16, color: NAVY });
  doc.rule();
  for (const a of articles) {
    doc.text(a.title, { font: "F2", size: 10.5, color: NAVY });
    doc.text(`${a.authors.map((x) => x.name).join(", ")}  ·  pp. ${a.pages}`, { font: "F3", size: 9.5, color: GREY });
    doc.space(5);
  }

  for (const a of articles) {
    doc.newPage();
    writeArticle(doc, a);
  }
  return doc.build();
}
