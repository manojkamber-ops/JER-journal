"use client";

import { JOURNAL_INFO, type Article } from "@/data/journal";
import { articlePdf } from "@/lib/pdf";
import { downloadBlob } from "@/lib/download";
import { toast } from "@/hooks/use-toast";
import { routeUrl } from "./nav-context";
import { doiUrl } from "@/lib/doi";
import { useSession } from "./session";
import { hasFullText } from "@/data/article-bodies";

/** All per-article actions (PDF, cite, share, save, print, email) in one place. */
export function useArticleActions(article: Article) {
  const session = useSession();
  return {
    saved: session.isSaved(article.id),
    /** false when only the abstract and references are public; the full paper is then requested from the authors */
    fullText: hasFullText(article.id),
    requestFullText: () => session.openRequest(article),
    downloadPdf() {
      downloadBlob(articlePdf(article), `JER-${article.doi.split("/").pop()}.pdf`);
      toast({ title: "PDF downloaded", description: article.title });
    },
    cite: () => session.openCite(article),
    share() {
      session.openShare(article);
    },
    toggleSave: () => session.toggleSave(article.id),
    print: () => window.print(),
    email() {
      const url = routeUrl("article", { articleId: article.id });
      const body = `I thought you might be interested in this article from the ${JOURNAL_INFO.title}:\n\n${article.title}\n${article.authors.map((a) => a.name).join(", ")}\nVol. ${article.volume}, No. ${article.issue} (${article.year}), pp. ${article.pages}\n\n${url}\nDOI: ${doiUrl(article.doi)}`;
      window.location.href = `mailto:?subject=${encodeURIComponent(`JER: ${article.title}`)}&body=${encodeURIComponent(body)}`;
    },
    trackCitations() {
      session.openAlerts([`citation:${article.id}`]);
    },
  };
}
