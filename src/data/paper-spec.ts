// Shared format for full research papers defined in src/data/papers-*.ts.
// journal.ts turns each PaperSpec into an Article (affiliations, structured authors, APA references)
// and article-bodies.ts registers its full text for the reader, EPUB and PDF.
import type { Article } from "./journal";
import type { BodySection } from "./article-bodies";

/** A reference: a full APA string for outside literature, or { jer: id } for an earlier JER article. */
export type RefSpec = string | { jer: string };

export type Affiliation = { department: string; institution: string; city: string; country: string };

export type PaperSpec = Omit<Article, "authors" | "structuredAuthors" | "affiliations" | "references" | "doi"> & {
  /** `affiliation` may be given inline; otherwise it is looked up in AUTHOR_AFFILIATIONS by name. */
  authors: { name: string; corresponding?: boolean; affiliation?: Affiliation }[];
  /** Cited as [n] / {n} in the body, numbered in the order listed here. */
  refs: RefSpec[];
  /** Full text. Omit for an abstract-only paper: the site then shows its abstract and references, and the full paper is requested from the authors. */
  body?: BodySection[];
  /** One or two sentences summarising the findings, used by the issue editorial (not shown on the paper). */
  editorialNote?: string;
};

/**
 * Full text for an article whose front matter (title, authors, abstract, DOI…) is already defined in
 * journal.ts: adds the body, references and back matter. Files export `fulltext`.
 */
export type FulltextSpec = {
  id: string;
  refs: RefSpec[];
  /** Omit for a references-only entry: the article stays abstract-only but gains a reference list. */
  body?: BodySection[];
  acknowledgments?: string;
  funding?: string;
  dataAvailability?: string;
  editorialNote?: string;
};

/** Institutional affiliations of the journal's author pool (shared with the existing articles). */
export const AUTHOR_AFFILIATIONS: Record<string, Affiliation> = {
  "Jin-Young Choi": { department: "Department of Economics", institution: "Hanyang University", city: "Seoul", country: "Republic of Korea" },
  "Sungho Park": { department: "Department of Economics", institution: "Hanyang University", city: "Seoul", country: "Republic of Korea" },
  "Min-Su Park": { department: "Department of Economics", institution: "Hanyang University", city: "Seoul", country: "Republic of Korea" },
  "Hyun-Sung Lim": { department: "Department of Economics", institution: "Hanyang University", city: "Seoul", country: "Republic of Korea" },
  "Tae-Hee Kim": { department: "Department of Economics", institution: "Hanyang University", city: "Seoul", country: "Republic of Korea" },
  "Sang-Yoon Han": { department: "Graduate School of International Studies", institution: "Hanyang University", city: "Seoul", country: "Republic of Korea" },
  "Hyun-Jin Kim": { department: "School of Economics", institution: "Hanyang University", city: "Seoul", country: "Republic of Korea" },
  "Da-Eun Han": { department: "Department of Economics", institution: "Hanyang University", city: "Seoul", country: "Republic of Korea" },
  "Tae-Woo Lee": { department: "Department of Finance", institution: "Hanyang University", city: "Seoul", country: "Republic of Korea" },
  "Ji-Yeon Park": { department: "Labour Market Research Division", institution: "Korea Labor Institute", city: "Seoul", country: "Republic of Korea" },
  "Da-Hye Song": { department: "Department of Economics", institution: "Seoul National University", city: "Seoul", country: "Republic of Korea" },
  "Jiwon Lee": { department: "Department of Economics", institution: "Korea University", city: "Seoul", country: "Republic of Korea" },
  "Hyun-Ju Yang": { department: "Department of Industrial Economics", institution: "Korea Development Institute", city: "Sejong", country: "Republic of Korea" },
  "Evelyn Stewart": { department: "Department of Economics", institution: "Stockholm University", city: "Stockholm", country: "Sweden" },
  "Markus Bauer": { department: "Department of Economics", institution: "University of Mannheim", city: "Mannheim", country: "Germany" },
  "Lakshmi Iyer": { department: "Keough School of Global Affairs", institution: "University of Notre Dame", city: "Notre Dame, Indiana", country: "USA" },
  "Samuel Adeyemi": { department: "Department of Economics", institution: "University of Ibadan", city: "Ibadan", country: "Nigeria" },
  "Andreas Müller": { department: "Department of Economics", institution: "University of Zurich", city: "Zurich", country: "Switzerland" },
  "Yuki Tanaka": { department: "Faculty of Economics", institution: "Keio University", city: "Tokyo", country: "Japan" },
  "Roberto Rossi": { department: "Department of Finance", institution: "Bocconi University", city: "Milan", country: "Italy" },
  "Keiko Sato": { department: "Graduate School of Economics", institution: "Hitotsubashi University", city: "Tokyo", country: "Japan" },
  "Caroline Dubois": { department: "Paris School of Economics", institution: "CNRS and EHESS", city: "Paris", country: "France" },
  "Hong-Mei Wang": { department: "National School of Development", institution: "Peking University", city: "Beijing", country: "China" },
  "Anna Petrova": { department: "CERGE-EI", institution: "Charles University", city: "Prague", country: "Czech Republic" },
  "Wei Zhang": { department: "School of Economics", institution: "Fudan University", city: "Shanghai", country: "China" },
  "Aditi Sharma": { department: "Economics Area", institution: "Indian Institute of Management Ahmedabad", city: "Ahmedabad", country: "India" },
  "Vikram Nair": { department: "Economics", institution: "Indira Gandhi Institute of Development Research", city: "Mumbai", country: "India" },
  "Rohan Kulkarni": { department: "Department of Economics, Delhi School of Economics", institution: "University of Delhi", city: "Delhi", country: "India" },
  "Meera Subramanian": { department: "Economics and Planning Unit", institution: "Indian Statistical Institute", city: "New Delhi", country: "India" },
  "Dong-Hyun Kwon": { department: "Department of Economics", institution: "Sungkyunkwan University", city: "Seoul", country: "Republic of Korea" },
  "Thi-Thu Nguyen": { department: "Faculty of International Economics", institution: "Foreign Trade University", city: "Hanoi", country: "Vietnam" },
};
