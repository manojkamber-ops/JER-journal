import { EDITORIALS } from "./editorials";
import { ALL_FULLTEXTS, ALL_PAPERS } from "./papers";

// Full-text bodies for the ePub-style reader, keyed by article id.
// Paragraph text may cite references as [n]; the reader links these to the numbered reference list.
// Articles without an entry open in the reader with their front matter, abstract and back matter only.

export type BodyTable = {
  id: string;
  caption: string;
  columns: string[];
  rows: string[][];
  note?: string;
};

/** A chart drawn from data: event-study style line plots (with confidence intervals) or grouped bars. */
export type BodyFigure = {
  id: string;
  caption: string;
  kind: "line" | "bar";
  xLabels: string[];
  yLabel: string;
  series: { name: string; values: number[]; lower?: number[]; upper?: number[] }[];
  /** Index of the x position after which a dashed vertical line is drawn (e.g. the event date). */
  marker?: number;
  note?: string;
};

export type BodyExhibits = {
  table?: BodyTable;
  tables?: BodyTable[];
  figures?: BodyFigure[];
};

export type BodySubsection = { id: string; heading: string; paragraphs: string[] } & BodyExhibits;

export type BodySection = {
  id: string;
  heading: string;
  paragraphs: string[];
  subsections?: BodySubsection[];
} & BodyExhibits;

/** All tables of a section or subsection, in display order. */
export function exhibitTables(x: BodyExhibits): BodyTable[] {
  return [...(x.table ? [x.table] : []), ...(x.tables ?? [])];
}

export const ARTICLE_BODIES: Record<string, BodySection[]> = {
};

// Issue editorials: one untitled section, as in the journal's editorial template
for (const ed of EDITORIALS) {
  ARTICLE_BODIES[ed.id] = [{ id: "editorial", heading: "", paragraphs: ed.paragraphs }];
}

// Full research papers (src/data/papers/): complete PaperSpecs and full texts for articles defined in journal.ts
for (const paper of [...ALL_PAPERS, ...ALL_FULLTEXTS]) {
  if (paper.body) ARTICLE_BODIES[paper.id] = paper.body;
}

/** True when the article's full text is on the site; otherwise only its abstract and references are public. */
export const hasFullText = (articleId: string) => Boolean(ARTICLE_BODIES[articleId]);
