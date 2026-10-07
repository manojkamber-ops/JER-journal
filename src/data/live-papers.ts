// Merges the papers published in Sanity into the site's data at runtime (server and browser), so papers added,
// edited, re-dated or removed in Sanity appear without a rebuild. Every issue that has papers in Sanity is taken
// entirely from Sanity; all other issues come from the repository.
import { ARTICLES, FULL_TEXT_IDS, buildReferences, paperToArticle, refreshCurrentIssue, repaginate } from "./journal";
import { ARTICLE_BODIES } from "./article-bodies";
import type { PaperSpec } from "./paper-spec";

let applied = "";

export function applyLivePapers(papers: PaperSpec[] | null | undefined) {
  if (!papers?.length) return;
  const signature = JSON.stringify(papers);
  if (signature === applied) return;
  applied = signature;

  const issues = new Set(papers.map((p) => `${p.volume}-${p.issue}`));
  // Remove the repository (or previously merged) research articles of those issues; editorials stay
  for (let i = ARTICLES.length - 1; i >= 0; i--) {
    const a = ARTICLES[i];
    if (issues.has(`${a.volume}-${a.issue}`) && a.type !== "Editorial") {
      ARTICLES.splice(i, 1);
      delete ARTICLE_BODIES[a.id];
      FULL_TEXT_IDS.delete(a.id);
    }
  }
  for (const p of papers) {
    ARTICLES.push(paperToArticle(p));
    if (p.body) {
      ARTICLE_BODIES[p.id] = p.body;
      FULL_TEXT_IDS.add(p.id);
    }
  }
  repaginate();
  for (const p of papers) ARTICLES.find((a) => a.id === p.id)!.references = buildReferences(p.refs);
  // Editorials of these issues cite their papers: refresh the page numbers in their reference lists
  for (const a of ARTICLES) {
    if (issues.has(`${a.volume}-${a.issue}`) && a.type === "Editorial" && a.references?.length) {
      for (const r of a.references) {
        const cited = ARTICLES.find((x) => x.id === r.articleId);
        if (cited && r.articleId) r.text = r.text.replace(/, \d+[–-]\d+\.$/, `, ${cited.pages}.`);
      }
    }
  }
  refreshCurrentIssue();
}
