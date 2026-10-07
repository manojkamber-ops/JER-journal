import { JOURNAL_INFO, type Article } from "@/data/journal";

export type CitationFormat = "apa" | "chicago" | "harvard" | "mla" | "bibtex" | "ris" | "endnote";

export const CITATION_FORMATS: { id: CitationFormat; label: string; file?: { ext: string; type: string } }[] = [
  { id: "apa", label: "APA" },
  { id: "chicago", label: "Chicago" },
  { id: "harvard", label: "Harvard" },
  { id: "mla", label: "MLA" },
  { id: "bibtex", label: "BibTeX", file: { ext: "bib", type: "application/x-bibtex" } },
  { id: "ris", label: "RIS", file: { ext: "ris", type: "application/x-research-info-systems" } },
  { id: "endnote", label: "EndNote", file: { ext: "enw", type: "application/x-endnote-refer" } },
];

const J = JOURNAL_INFO.title;

function split(name: string) {
  const parts = name.trim().split(/\s+/);
  const last = parts.pop() ?? name;
  return { first: parts.join(" "), last };
}
const initials = (first: string) =>
  first.split(/[\s-]+/).filter(Boolean).map((p) => `${p[0]}.`).join(first.includes("-") ? "-" : " ");

const names = (a: Article) => a.authors.map((x) => x.name);
const pageRange = (a: Article) => a.pages.replace("–", "-").split("-");
const monthYear = (iso: string) =>
  new Date(iso).toLocaleDateString("en-GB", { month: "long", year: "numeric" });

function joinList(items: string[], conj: string) {
  if (items.length <= 1) return items.join("");
  if (items.length === 2) return `${items[0]} ${conj} ${items[1]}`;
  return `${items.slice(0, -1).join(", ")}, ${conj} ${items[items.length - 1]}`;
}

export function formatCitation(a: Article, format: CitationFormat): string {
  const doiUrl = `https://doi.org/${a.doi}`;
  const [sp, ep] = pageRange(a);
  const people = names(a).map(split);

  switch (format) {
    case "apa": {
      const list = people.map((p) => `${p.last}, ${initials(p.first)}`);
      const au = list.length > 1 ? `${list.slice(0, -1).join(", ")}, & ${list[list.length - 1]}` : list[0];
      return `${au} (${a.year}). ${a.title}. ${J}, ${a.volume}(${a.issue}), ${a.pages}. ${doiUrl}`;
    }
    case "chicago": {
      const list = people.map((p, i) => (i === 0 ? `${p.last}, ${p.first}` : `${p.first} ${p.last}`));
      return `${joinList(list, "and")}. ${a.year}. "${a.title}." ${J} ${a.volume} (${a.issue}): ${a.pages}. ${doiUrl}.`;
    }
    case "harvard": {
      const list = people.map((p) => `${p.last}, ${initials(p.first)}`);
      return `${joinList(list, "and")} (${a.year}) '${a.title}', ${J}, ${a.volume}(${a.issue}), pp. ${a.pages}. doi:${a.doi}.`;
    }
    case "mla": {
      const first = people[0];
      const au =
        people.length === 1 ? `${first.last}, ${first.first}` :
        people.length === 2 ? `${first.last}, ${first.first}, and ${people[1].first} ${people[1].last}` :
        `${first.last}, ${first.first}, et al.`;
      return `${au}. "${a.title}." ${J}, vol. ${a.volume}, no. ${a.issue}, ${a.year}, pp. ${a.pages}, ${doiUrl}.`;
    }
    case "bibtex": {
      const key = `${people[0].last.toLowerCase().replace(/[^a-z]/g, "")}${a.year}`;
      return [
        `@article{${key},`,
        `  author    = {${people.map((p) => `${p.last}, ${p.first}`).join(" and ")}},`,
        `  title     = {${a.title}},`,
        `  journal   = {${J}},`,
        `  volume    = {${a.volume}},`,
        `  number    = {${a.issue}},`,
        `  pages     = {${sp}--${ep ?? sp}},`,
        `  year      = {${a.year}},`,
        `  doi       = {${a.doi}},`,
        `  issn      = {${JOURNAL_INFO.issnPrint}},`,
        `  keywords  = {${a.keywords.join(", ")}},`,
        `  url       = {${doiUrl}}`,
        `}`,
      ].join("\n");
    }
    case "ris":
      return [
        "TY  - JOUR",
        ...people.map((p) => `AU  - ${p.last}, ${p.first}`),
        `TI  - ${a.title}`,
        `JO  - ${J}`,
        `JA  - ${JOURNAL_INFO.abbrTitle}`,
        `VL  - ${a.volume}`,
        `IS  - ${a.issue}`,
        `SP  - ${sp}`,
        `EP  - ${ep ?? sp}`,
        `PY  - ${a.year}`,
        `DA  - ${a.published.replace(/-/g, "/")}`,
        `SN  - ${JOURNAL_INFO.issnPrint}`,
        `DO  - ${a.doi}`,
        `UR  - ${doiUrl}`,
        ...a.keywords.map((k) => `KW  - ${k}`),
        `AB  - ${a.abstract}`,
        "ER  - ",
      ].join("\n");
    case "endnote":
      return [
        "%0 Journal Article",
        ...people.map((p) => `%A ${p.last}, ${p.first}`),
        `%T ${a.title}`,
        `%J ${J}`,
        `%V ${a.volume}`,
        `%N ${a.issue}`,
        `%P ${a.pages}`,
        `%D ${a.year}`,
        `%8 ${monthYear(a.published)}`,
        `%@ ${JOURNAL_INFO.issnPrint}`,
        `%R ${a.doi}`,
        `%U ${doiUrl}`,
        ...a.keywords.map((k) => `%K ${k}`),
        `%X ${a.abstract}`,
      ].join("\n");
  }
}

/** Multiple articles in one file (bibtex / ris / endnote). */
export function formatCitations(articles: Article[], format: "bibtex" | "ris" | "endnote") {
  return articles.map((a) => formatCitation(a, format)).join("\n\n") + "\n";
}

export function citationFilename(a: Article, ext: string) {
  return `JER-${a.doi.split("/").pop()}.${ext}`;
}
