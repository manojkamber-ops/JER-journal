"use client";

import { ARTICLES } from "@/data/journal";
import { ArticleListItem, IssueHeader } from "../article-components";
import { Button } from "@/components/ui/button";
import { Download, FileText, Send, Printer, Bookmark } from "lucide-react";
import { useNav } from "../nav-context";

export function CurrentIssuePage() {
  const { navigate } = useNav();
  const currentArticles = ARTICLES.filter((a) => a.volume === 30 && a.issue === 3).sort(
    (a, b) => parseInt(a.pages) - parseInt(b.pages)
  );
  const publishedDate = currentArticles[0]?.published ?? "2025-07-15";

  return (
    <div>
      {/* Hero */}
      <section className="bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 py-10">
          <div className="font-sans text-xs uppercase tracking-widest text-accent mb-2">
            Current Issue · July 2025
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold mb-2">
            Volume 30, Issue 3
          </h1>
          <p className="font-serif text-lg opacity-90">
            Published 15 July 2025 · ISSN 1226-4261
          </p>
        </div>
      </section>

      <section className="container mx-auto px-4 py-10">
        <IssueHeader
          volume={30}
          issue={3}
          year={2025}
          publishedDate={publishedDate}
          articleCount={currentArticles.length}
        />

        {/* Issue download bar */}
        <div className="bg-secondary/50 border border-border rounded-md p-4 mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="font-sans text-sm text-foreground/80">
            <strong className="text-primary">Download the entire issue</strong>{" "}
            (PDF, 9.4 MB) or browse the table of contents below.
          </div>
          <div className="flex flex-wrap gap-2">
            <Button variant="outline" size="sm" className="font-sans">
              <Download className="w-4 h-4 mr-1.5" />
              Issue PDF
            </Button>
            <Button variant="outline" size="sm" className="font-sans">
              <FileText className="w-4 h-4 mr-1.5" />
              BibTeX citations
            </Button>
            <Button variant="outline" size="sm" className="font-sans">
              <Printer className="w-4 h-4 mr-1.5" />
              Print
            </Button>
            <Button variant="outline" size="sm" className="font-sans">
              <Bookmark className="w-4 h-4 mr-1.5" />
              Save
            </Button>
          </div>
        </div>

        {/* Table of Contents */}
        <div>
          <h2 className="font-serif text-xl font-bold text-primary mb-4 border-b border-border pb-2">
            Table of Contents
          </h2>
          <div className="divide-y divide-border">
            {currentArticles.map((article, idx) => (
              <ArticleListItem key={article.id} article={article} />
            ))}
          </div>
        </div>

        {/* Editorial note */}
        <div className="mt-12 bg-card border border-accent/30 rounded-md p-6">
          <div className="font-sans text-xs uppercase tracking-widest text-accent mb-2">
            From the Editor-in-Chief
          </div>
          <p className="font-serif text-base leading-relaxed text-foreground/85">
            With this July 2025 issue, the Journal of Economic Research marks the
            publication of Volume 30 — a milestone in the journal&apos;s 30-year history.
            The issue opens with an anniversary editorial by Prof. Jae-Hoon Hwang
            reflecting on the journal&apos;s evolution since 1996 and outlining priorities
            for the next decade. The research articles in this issue span monetary
            policy transmission in emerging Asia, climate risk pricing in sovereign
            bond markets, the causal effects of university–industry collaboration,
            wage rigidity in Korean manufacturing, and inequality of opportunity in
            urban China.
          </p>
          <p className="font-serif text-base leading-relaxed text-foreground/85 mt-3">
            — Prof. Jae-Hoon Hwang, Editor-in-Chief
          </p>
        </div>

        {/* Navigation */}
        <div className="mt-10 flex flex-wrap items-center justify-between gap-3">
          <Button variant="outline" onClick={() => navigate("archive")} className="font-sans">
            View full archive
          </Button>
          <Button onClick={() => navigate("submission")} className="font-sans bg-primary text-primary-foreground hover:bg-primary/90">
            <Send className="w-4 h-4 mr-2" />
            Submit your manuscript
          </Button>
        </div>
      </section>
    </div>
  );
}
