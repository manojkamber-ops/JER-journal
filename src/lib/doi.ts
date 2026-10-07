import { ARTICLES, JOURNAL_INFO, type Article } from "@/data/journal";

// JER DOIs (prefix JOURNAL_INFO.doiPrefix) are resolved by the journal website itself:
// a DOI link opens the paper as a PDF at  <site>/#/doi/<DOI>.  Other DOIs go to doi.org.

export function isJerDoi(doi: string) {
  return doi.startsWith(`${JOURNAL_INFO.doiPrefix}/`);
}

export function articleByDoi(doi: string): Article | undefined {
  const wanted = decodeURIComponent(doi).trim().toLowerCase();
  return ARTICLES.find((a) => a.doi.toLowerCase() === wanted);
}

function siteBase() {
  return typeof window !== "undefined" ? `${window.location.origin}${window.location.pathname}` : `${JOURNAL_INFO.website}/`;
}

/** Absolute link for a DOI — used in PDFs, EPUBs, e-mails and share links. */
export function doiUrl(doi: string) {
  return isJerDoi(doi) ? `${siteBase()}#/doi/${doi}` : `https://doi.org/${doi}`;
}
