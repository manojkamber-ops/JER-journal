"use client";

import { ARTICLES, JOURNAL_INFO } from "@/data/journal";
import { useNav } from "../nav-context";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  ArticleListItem,
  JELBadge,
  CorrespondingAuthorNote,
} from "../article-components";
import {
  Download,
  FileText,
  Quote,
  Share2,
  Bookmark,
  Printer,
  Mail,
  ChevronLeft,
  ExternalLink,
  Calendar,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";

export function ArticleViewPage({ articleId }: { articleId: string | null }) {
  const { navigate } = useNav();
  const article = ARTICLES.find((a) => a.id === articleId) ?? ARTICLES[0];

  const authorList = article.authors.map((a) => a.name).join(", ");
  const citationText = `${authorList} (${article.year}). ${article.title}. Journal of Economic Research, ${article.volume}(${article.issue}), ${article.pages}. https://doi.org/${article.doi}`;

  const relatedArticles = ARTICLES.filter(
    (a) =>
      a.id !== article.id &&
      (a.keywords.some((k) => article.keywords.includes(k)) ||
        a.jelCodes.some((c) => article.jelCodes.includes(c)))
  ).slice(0, 4);

  return (
    <div>
      {/* Article header */}
      <section className="bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 py-8">
          <button
            onClick={() => navigate("current-issue")}
            className="font-sans text-xs flex items-center gap-1 opacity-80 hover:opacity-100 hover:text-accent mb-3"
          >
            <ChevronLeft className="w-3 h-3" />
            Back to Volume {article.volume}, Issue {article.issue}
          </button>
          <div className="flex items-center gap-2 mb-3 flex-wrap">
            <Badge className="bg-accent text-accent-foreground hover:bg-accent font-sans text-[10px] uppercase tracking-wider">
              {article.type}
            </Badge>
            <span className="font-sans text-xs opacity-80">
              Volume {article.volume}, Issue {article.issue} ({article.year}) · pp. {article.pages}
            </span>
          </div>
          <h1 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight mb-4">
            {article.title}
          </h1>
          <p className="font-serif text-base sm:text-lg opacity-90 mb-3">
            {authorList}
          </p>
          <div className="flex items-center gap-4 font-sans text-xs opacity-80 flex-wrap">
            <span className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5" />
              Published {new Date(article.published).toLocaleDateString("en-GB", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </span>
            <span className="flex items-center gap-1.5">
              <FileText className="w-3.5 h-3.5" />
              DOI: {article.doi}
            </span>
            <span className="flex items-center gap-1.5">
              <Quote className="w-3.5 h-3.5" />
              {article.citations} citations
            </span>
            <span className="flex items-center gap-1.5">
              <Download className="w-3.5 h-3.5" />
              {article.downloads.toLocaleString()} downloads
            </span>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-10">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Main article column */}
          <article className="lg:col-span-3">
            {/* Action bar */}
            <div className="bg-card border border-border rounded-md p-3 mb-8 flex flex-wrap items-center justify-between gap-2">
              <div className="flex flex-wrap gap-2">
                <Button size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90 font-sans">
                  <Download className="w-4 h-4 mr-1.5" />
                  Download PDF ({article.pdfSize})
                </Button>
                <Button size="sm" variant="outline" className="font-sans">
                  <FileText className="w-4 h-4 mr-1.5" />
                  Full Text
                </Button>
                <Button size="sm" variant="outline" className="font-sans">
                  <Quote className="w-4 h-4 mr-1.5" />
                  Cite
                </Button>
              </div>
              <div className="flex gap-1">
                <Button size="sm" variant="ghost" className="font-sans px-2" aria-label="Save article">
                  <Bookmark className="w-4 h-4" />
                </Button>
                <Button size="sm" variant="ghost" className="font-sans px-2" aria-label="Share article">
                  <Share2 className="w-4 h-4" />
                </Button>
                <Button size="sm" variant="ghost" className="font-sans px-2" aria-label="Print article">
                  <Printer className="w-4 h-4" />
                </Button>
              </div>
            </div>

            {/* Authors &amp; affiliations */}
            <div className="mb-8">
              <h2 className="font-serif text-xl font-bold text-primary mb-3 border-b border-border pb-2">
                Authors
              </h2>
              <ol className="space-y-3">
                {article.authors.map((author, idx) => (
                  <li key={idx} className="font-serif text-base text-foreground">
                    <span className="font-semibold">{author.name}</span>
                    {author.corresponding && (
                      <span className="text-accent ml-1" title="Corresponding author">*</span>
                    )}
                    <span className="block font-sans text-sm text-muted-foreground mt-0.5">
                      {author.affiliation}
                    </span>
                    {author.corresponding && (
                      <a
                        href={`mailto:${author.email ?? `${author.name.split(" ").slice(-1)[0].toLowerCase()}@example.edu`}`}
                        className="font-sans text-xs text-primary hover:text-accent hover:underline flex items-center gap-1 mt-1"
                      >
                        <Mail className="w-3 h-3" />
                        Corresponding author
                      </a>
                    )}
                  </li>
                ))}
              </ol>
            </div>

            {/* Abstract */}
            <div className="mb-8">
              <h2 className="font-serif text-xl font-bold text-primary mb-3 border-b border-border pb-2">
                Abstract
              </h2>
              <p className="abstract-block">{article.abstract}</p>
            </div>

            {/* Keywords &amp; JEL */}
            <div className="mb-8 grid sm:grid-cols-2 gap-6">
              <div>
                <h3 className="font-sans text-xs uppercase tracking-widest text-muted-foreground mb-2">
                  Keywords
                </h3>
                <div className="flex flex-wrap gap-1.5">
                  {article.keywords.map((keyword) => (
                    <Badge
                      key={keyword}
                      variant="secondary"
                      className="font-sans text-xs font-normal"
                    >
                      {keyword}
                    </Badge>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="font-sans text-xs uppercase tracking-widest text-muted-foreground mb-2">
                  JEL Classification
                </h3>
                <div className="flex flex-wrap gap-1.5">
                  {article.jelCodes.map((code) => (
                    <JELBadge key={code} code={code} />
                  ))}
                </div>
              </div>
            </div>

            {/* Article timeline */}
            <div className="mb-8 bg-secondary/50 border border-border rounded-md p-5">
              <h3 className="font-serif text-base font-semibold text-primary mb-3">
                Article Timeline
              </h3>
              <div className="grid sm:grid-cols-3 gap-4 font-sans text-sm">
                <div className="flex items-start gap-2">
                  <Calendar className="w-4 h-4 mt-0.5 text-muted-foreground" />
                  <div>
                    <p className="text-muted-foreground text-xs uppercase tracking-wide">Received</p>
                    <p className="font-medium">
                      {new Date(article.received).toLocaleDateString("en-GB", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      })}
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 mt-0.5 text-accent" />
                  <div>
                    <p className="text-muted-foreground text-xs uppercase tracking-wide">Accepted</p>
                    <p className="font-medium">
                      {new Date(article.accepted).toLocaleDateString("en-GB", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      })}
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <ExternalLink className="w-4 h-4 mt-0.5 text-primary" />
                  <div>
                    <p className="text-muted-foreground text-xs uppercase tracking-wide">Published</p>
                    <p className="font-medium">
                      {new Date(article.published).toLocaleDateString("en-GB", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      })}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* How to cite */}
            <div className="mb-8 bg-card border border-border rounded-md p-5">
              <h3 className="font-serif text-base font-semibold text-primary mb-3 flex items-center gap-2">
                <Quote className="w-4 h-4 text-accent" />
                How to Cite
              </h3>
              <p className="font-serif text-sm leading-relaxed text-foreground/85 bg-secondary/40 p-3 rounded border-l-4 border-accent">
                {citationText}
              </p>
              <div className="flex flex-wrap gap-2 mt-3">
                <Button size="sm" variant="outline" className="font-sans">BibTeX</Button>
                <Button size="sm" variant="outline" className="font-sans">RIS</Button>
                <Button size="sm" variant="outline" className="font-sans">EndNote</Button>
                <Button size="sm" variant="outline" className="font-sans">APA</Button>
                <Button size="sm" variant="outline" className="font-sans">Chicago</Button>
                <Button size="sm" variant="outline" className="font-sans">Harvard</Button>
              </div>
            </div>

            {/* Rights notice */}
            <div className="mb-8 bg-accent/10 border border-accent/30 rounded-md p-4 flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
              <div className="font-sans text-sm">
                <p className="font-semibold text-primary mb-1">Open Access</p>
                <p className="text-foreground/80 leading-relaxed">
                  This is an open-access article distributed under the terms of the
                  Creative Commons Attribution-NonCommercial 4.0 International License
                  (CC BY-NC 4.0). You are free to copy, distribute, and adapt the work
                  for non-commercial purposes, provided appropriate attribution is given.
                </p>
              </div>
            </div>

            {/* Corresponding author note */}
            <CorrespondingAuthorNote article={article} />
          </article>

          {/* Sidebar */}
          <aside className="space-y-6">
            {/* Article info */}
            <div className="bg-card border border-border rounded-md p-5 sticky top-32">
              <h3 className="font-serif text-base font-semibold text-primary mb-3 border-b border-border pb-2">
                Article Information
              </h3>
              <dl className="space-y-2.5 font-sans text-sm">
                <div className="flex justify-between gap-2">
                  <dt className="text-muted-foreground">Volume</dt>
                  <dd className="font-medium">{article.volume}</dd>
                </div>
                <div className="flex justify-between gap-2">
                  <dt className="text-muted-foreground">Issue</dt>
                  <dd className="font-medium">{article.issue}</dd>
                </div>
                <div className="flex justify-between gap-2">
                  <dt className="text-muted-foreground">Year</dt>
                  <dd className="font-medium">{article.year}</dd>
                </div>
                <div className="flex justify-between gap-2">
                  <dt className="text-muted-foreground">Pages</dt>
                  <dd className="font-medium">{article.pages}</dd>
                </div>
                <div className="flex justify-between gap-2">
                  <dt className="text-muted-foreground">Type</dt>
                  <dd className="font-medium text-right text-xs">{article.type}</dd>
                </div>
                <div className="flex justify-between gap-2 border-t border-border pt-2.5">
                  <dt className="text-muted-foreground">DOI</dt>
                  <dd className="font-mono text-xs">{article.doi}</dd>
                </div>
                <div className="flex justify-between gap-2">
                  <dt className="text-muted-foreground">PDF size</dt>
                  <dd className="font-medium">{article.pdfSize}</dd>
                </div>
                <div className="flex justify-between gap-2">
                  <dt className="text-muted-foreground">Citations</dt>
                  <dd className="font-medium">{article.citations}</dd>
                </div>
                <div className="flex justify-between gap-2">
                  <dt className="text-muted-foreground">Downloads</dt>
                  <dd className="font-medium">{article.downloads.toLocaleString()}</dd>
                </div>
              </dl>
              <div className="mt-4 pt-3 border-t border-border font-sans text-xs text-muted-foreground">
                Published by {JOURNAL_INFO.publisher}.<br />
                ISSN {JOURNAL_INFO.issnOnline} (online).
              </div>
            </div>

            {/* Related articles */}
            {relatedArticles.length > 0 && (
              <div className="bg-card border border-border rounded-md p-5">
                <h3 className="font-serif text-base font-semibold text-primary mb-3 border-b border-border pb-2">
                  Related Articles
                </h3>
                <ul className="space-y-3">
                  {relatedArticles.map((rel) => (
                    <ArticleMiniCard key={rel.id} article={rel} />
                  ))}
                </ul>
              </div>
            )}
          </aside>
        </div>
      </section>
    </div>
  );
}

function ArticleMiniCard({ article }: { article: (typeof ARTICLES)[number] }) {
  const { navigate } = useNav();
  return (
    <li
      onClick={() => navigate("article", { articleId: article.id })}
      className="cursor-pointer group"
    >
      <h4 className="font-serif text-sm font-semibold text-primary leading-snug group-hover:text-accent transition-colors line-clamp-3">
        {article.title}
      </h4>
      <p className="font-sans text-[11px] text-muted-foreground mt-1">
        Vol. {article.volume}, No. {article.issue} ({article.year}) · {article.citations} cited
      </p>
    </li>
  );
}
