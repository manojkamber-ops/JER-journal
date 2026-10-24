// Issue editorials, one per issue, written in the format of a journal "Editorial":
// a theme for the issue, a paragraph on each article, journal news, thanks, references and the editor's sign-off.
//
// Citations in the paragraphs refer to positions in `cited` (1-based):
//   [n]  parenthetical citation  → "(Park, Chen, & Kumar, 2025)"
//   {n}  narrative citation, written after the authors' names → "(2025)"
// The reference list (APA style, with DOI and on-site links) is generated from `cited` in journal.ts.
// URLs written in a paragraph are shown as links in the reader.

export type EditorialSpec = {
  id: string;
  /** true when the editorial already exists in ARTICLES (only its references, affiliation and text are added) */
  existing?: boolean;
  volume: number;
  issue: number;
  year: number;
  published: string;
  pages: string;
  title: string;
  abstract: string;
  keywords: string[];
  cited: string[];
  paragraphs: string[];
};

// No issue editorials are published at present (the earlier ones were sample content). Add one per issue here,
// written and signed by the actual Editor-in-Chief.
export const EDITORIALS: EditorialSpec[] = [];
