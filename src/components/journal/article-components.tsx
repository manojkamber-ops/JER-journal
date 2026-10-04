"use client";

import { Article } from "@/data/journal";
import { useNav } from "./nav-context";
import { Badge } from "@/components/ui/badge";
import { FileText, Download, Quote, ChevronRight, Mail } from "lucide-react";

export function ArticleCard({ article, compact = false }: { article: Article; compact?: boolean }) {
  const { navigate } = useNav();
  const authorList = article.authors.map((a) => a.name).join(", ");
  const correspondingAuthor = article.authors.find((a) => a.corresponding);

  return (
    <article
      className="group bg-card border border-border rounded-md p-5 hover:border-accent hover:shadow-md transition-all cursor-pointer"
      onClick={() => navigate("article", { articleId: article.id })}
    >
      <div className="flex items-center gap-2 mb-2 flex-wrap">
        <Badge variant="outline" className="font-sans text-[10px] uppercase tracking-wide border-accent text-accent">
          {article.type}
        </Badge>
        <span className="font-sans text-[11px] text-muted-foreground">
          Vol. {article.volume}, No. {article.issue} ({article.year}), pp. {article.pages}
        </span>
      </div>

      <h3 className="font-serif text-lg font-semibold leading-snug text-primary mb-2 group-hover:text-accent transition-colors">
        {article.title}
      </h3>

      {!compact && (
        <p className="font-sans text-sm text-muted-foreground mb-2">
          {authorList}
          {correspondingAuthor && (
            <span className="text-accent ml-1" title={`Corresponding author: ${correspondingAuthor.email}`}>
              *
            </span>
          )}
        </p>
      )}

      <p className="font-serif text-sm leading-relaxed text-foreground/85 mb-3 line-clamp-3">
        {article.abstract}
      </p>

      <div className="flex items-center justify-between text-xs text-muted-foreground font-sans">
        <div className="flex items-center gap-3">
          <span className="flex items-center gap-1">
            <Quote className="w-3 h-3" />
            {article.citations} citations
          </span>
          <span className="flex items-center gap-1">
            <Download className="w-3 h-3" />
            {article.downloads.toLocaleString()}
          </span>
        </div>
        <span className="flex items-center gap-1 text-accent group-hover:gap-2 transition-all">
          Read more <ChevronRight className="w-3 h-3" />
        </span>
      </div>
    </article>
  );
}

export function ArticleListItem({ article }: { article: Article }) {
  const { navigate } = useNav();
  const authorList = article.authors.map((a) => a.name).join(", ");

  return (
    <article
      className="py-4 border-b border-border last:border-0 cursor-pointer hover:bg-secondary/40 transition-colors px-3 -mx-3 rounded-sm"
      onClick={() => navigate("article", { articleId: article.id })}
    >
      <div className="flex items-baseline gap-3 mb-1.5 flex-wrap">
        <Badge variant="outline" className="font-sans text-[10px] uppercase tracking-wide border-accent text-accent">
          {article.type}
        </Badge>
        <span className="font-sans text-[11px] text-muted-foreground">
          Vol. {article.volume}, No. {article.issue} · pp. {article.pages}
        </span>
      </div>
      <h3 className="font-serif text-base font-semibold leading-snug text-primary hover:text-accent transition-colors mb-1">
        {article.title}
      </h3>
      <p className="font-sans text-sm text-muted-foreground mb-2">{authorList}</p>
      <p className="font-serif text-sm leading-relaxed text-foreground/80 line-clamp-2">
        {article.abstract}
      </p>
      <div className="flex items-center gap-4 mt-2 text-xs font-sans text-muted-foreground">
        <span className="flex items-center gap-1">
          <FileText className="w-3 h-3" /> DOI: {article.doi}
        </span>
        <span className="flex items-center gap-1">
          <Quote className="w-3 h-3" /> {article.citations} cited
        </span>
        <span className="flex items-center gap-1">
          <Download className="w-3 h-3" /> {article.downloads.toLocaleString()}
        </span>
      </div>
    </article>
  );
}

export function IssueHeader({
  volume,
  issue,
  year,
  publishedDate,
  articleCount,
}: {
  volume: number;
  issue: number;
  year: number;
  publishedDate: string;
  articleCount: number;
}) {
  return (
    <div className="mb-8 border-b border-border pb-6">
      <div className="font-sans text-xs uppercase tracking-widest text-accent mb-2">
        Current Issue
      </div>
      <h1 className="font-serif text-3xl sm:text-4xl font-bold text-primary mb-2">
        Volume {volume}, Issue {issue}
      </h1>
      <p className="font-sans text-sm text-muted-foreground mb-1">
        {year} · Published {new Date(publishedDate).toLocaleDateString("en-GB", {
          day: "numeric",
          month: "long",
          year: "numeric",
        })}
      </p>
      <p className="font-sans text-sm text-muted-foreground">
        {articleCount} articles · ISSN 1226-4261
      </p>
    </div>
  );
}

export function JELBadge({ code }: { code: string }) {
  return (
    <span className="inline-block font-mono text-[11px] px-1.5 py-0.5 bg-secondary border border-border rounded text-foreground">
      {code}
    </span>
  );
}

export function CorrespondingAuthorNote({ article }: { article: Article }) {
  const corresponding = article.authors.find((a) => a.corresponding);
  if (!corresponding) return null;
  return (
    <p className="font-sans text-xs text-muted-foreground mt-2 flex items-center gap-1.5">
      <Mail className="w-3 h-3" />
      <span>
        <span className="text-accent">*</span> Corresponding author:{" "}
        <a href={`mailto:${corresponding.email}`} className="text-primary hover:text-accent hover:underline">
          {corresponding.email}
        </a>
      </span>
    </p>
  );
}
