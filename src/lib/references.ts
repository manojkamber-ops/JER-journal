import type { ArticleReference, AuthorAffiliation } from "@/data/journal";

/**
 * Author–year label for an AER-style reference, as used in AOM in-text citations:
 * "Acemoglu, D. and P. Restrepo (2020), …"  →  "Acemoglu & Restrepo, 2020"
 * "Babina, T., A. Fedyk, A. He and J. Hodson (2024), …" → "Babina, Fedyk, He & Hodson, 2024"
 */
export function referenceLabel(ref: ArticleReference): string {
  const m = ref.text.match(/^(.*?)\s*\((\d{4}[a-z]?)\)/);
  if (!m) return `Ref. ${ref.number}`;
  const [, authorPart, year] = m;
  const surnames = authorPart
    .split(/,| and | & /)
    .map((p) => p.trim())
    .filter(Boolean)
    // drop bare initials such as "D." or "J.-H."
    .filter((p) => !/^([A-Z]\.(-[A-Z]\.)?\s?)+$/.test(p))
    // "P. Restrepo" → "Restrepo"
    .map((p) => p.replace(/^([A-Z]\.(-[A-Z]\.)?\s+)+/, ""));
  const names =
    surnames.length <= 1 ? surnames.join("") : `${surnames.slice(0, -1).join(", ")} & ${surnames[surnames.length - 1]}`;
  return `${names}, ${year}`;
}

export type CitePart = string | { refs: number[]; narrative: boolean };

/**
 * Splits text into plain strings and citations.
 * "[1][2]" is a parenthetical citation → "(Park, Chen & Kumar, 2025; Lee & Kim, 2025)";
 * "{1}" is a narrative citation placed after the authors' names in the text → "(2025)".
 */
export function splitCitations(text: string): CitePart[] {
  return text
    .split(/((?:\[\d+\])+|\{\d+\})/g)
    .filter((p) => p !== "")
    .map((p) => {
      if (/^(\[\d+\])+$/.test(p)) return { refs: [...p.matchAll(/\[(\d+)\]/g)].map((x) => Number(x[1])), narrative: false };
      const m = p.match(/^\{(\d+)\}$/);
      return m ? { refs: [Number(m[1])], narrative: true } : p;
    });
}

export function referenceYear(ref: ArticleReference): string {
  return ref.text.match(/\((\d{4}[a-z]?)\)/)?.[1] ?? "n.d.";
}

/** Plain-text rendering of citations (PDF output). */
export function citationsToText(text: string, refs: ArticleReference[] | undefined): string {
  return splitCitations(text)
    .map((part) => {
      if (typeof part === "string") return part;
      const found = part.refs.map((n) => refs?.find((r) => r.number === n));
      if (part.narrative) return `(${found[0] ? referenceYear(found[0]) : "n.d."})`;
      return `(${found.map((r, i) => (r ? referenceLabel(r) : `ref. ${part.refs[i]}`)).join("; ")})`;
    })
    .join("");
}

/** The institution line shown under an author: a named school beats an umbrella body ("Paris School of Economics", not "CNRS and EHESS"). */
export function institutionName(af: AuthorAffiliation | undefined): string | undefined {
  if (!af) return undefined;
  // Only a separately named school ("Paris School of Economics") replaces the university name;
  // generic units ("School of Economics", "Graduate School of Economics", "Department of …") do not.
  const namedSchool = /^(?!Graduate |National |School )[A-Z][a-z]+ School of Economics$/.test(af.department);
  return namedSchool ? af.department : af.institution;
}
