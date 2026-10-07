// Merges the current issue's papers from Sanity into the site's data at runtime (server and browser), so papers
// added, edited or removed in Sanity appear without a rebuild. Earlier issues always come from the repository.
import { ARTICLES, CURRENT_ISSUE, FULL_TEXT_IDS, buildReferences, paperToArticle, repaginate } from "./journal";
import { ARTICLE_BODIES } from "./article-bodies";
import type { PaperSpec } from "./paper-spec";

let applied = "";

/** Replaces the current issue's research articles with `papers` (no-op for an empty list or an unchanged list). */
export function applyLivePapers(papers: PaperSpec[] | null | undefined) {
  if (!papers?.length) return;
  const { volume, issue } = CURRENT_ISSUE;
  const live = papers.filter((p) => p.volume === volume && p.issue === issue);
  if (!live.length) return;
  const signature = JSON.stringify(live);
  if (signature === applied) return;
  applied = signature;

  // Remove the repository versions of the current issue's research articles (editorials stay)
  for (let i = ARTICLES.length - 1; i >= 0; i--) {
    const a = ARTICLES[i];
    if (a.volume === volume && a.issue === issue && a.type !== "Editorial") {
      ARTICLES.splice(i, 1);
      delete ARTICLE_BODIES[a.id];
      FULL_TEXT_IDS.delete(a.id);
    }
  }
  for (const p of live) {
    ARTICLES.push(paperToArticle(p));
    if (p.body) {
      ARTICLE_BODIES[p.id] = p.body;
      FULL_TEXT_IDS.add(p.id);
    }
  }
  repaginate();
  for (const p of live) ARTICLES.find((a) => a.id === p.id)!.references = buildReferences(p.refs);
  // Editorials of this issue cite its papers: refresh their reference lists too
  for (const a of ARTICLES) {
    if (a.volume === volume && a.issue === issue && a.type === "Editorial" && a.references?.length) {
      for (const r of a.references) {
        const cited = ARTICLES.find((x) => x.id === r.articleId);
        if (cited && r.articleId) r.text = r.text.replace(/, \d+[–-]\d+\.$/, `, ${cited.pages}.`);
      }
    }
  }
}
