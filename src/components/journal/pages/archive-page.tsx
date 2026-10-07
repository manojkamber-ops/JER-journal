"use client";

import { useState, useMemo } from "react";
import { useNav } from "../nav-context";
import { JournalBanner } from "../journal-banner";
import { ARTICLES } from "@/data/journal";
import { ArticleListItem } from "../article-components";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Search, Filter, FileText, ChevronDown, ChevronRight } from "lucide-react";

type SortKey = "newest" | "oldest" | "most-cited" | "most-downloaded";

export function ArchivePage() {
  const { navigate, params } = useNav();
  const [year, setYear] = useState<string>("all");
  // Searches submitted from the header arrive as ?q= (the page is re-keyed on q, see journal-layout)
  const [search, setSearch] = useState(params.q ?? "");
  const onlineFirst = params.view === "online-first";
  const [sort, setSort] = useState<SortKey>("newest");
  const [expandedIssues, setExpandedIssues] = useState<Set<string>>(new Set(["30-3", "30-2", "30-1"]));

  // All issues (volume-issue), newest first
  const issues = useMemo(() => {
    const issueMap = new Map<string, { volume: number; issue: number; year: number; articles: typeof ARTICLES }>();
    for (const article of ARTICLES) {
      const key = `${article.volume}-${article.issue}`;
      if (!issueMap.has(key)) {
        issueMap.set(key, {
          volume: article.volume,
          issue: article.issue,
          year: article.year,
          articles: [],
        });
      }
      issueMap.get(key)!.articles.push(article);
    }
    return Array.from(issueMap.values()).sort((a, b) => {
      if (b.volume !== a.volume) return b.volume - a.volume;
      return b.issue - a.issue;
    });
  }, []);

  const filteredArticles = useMemo(() => {
    let result = ARTICLES;
    if (year !== "all") {
      result = result.filter((a) => a.year === parseInt(year));
    }

    if (search.trim()) {
      const q = search.toLowerCase();
      result = result.filter(
        (a) =>
          a.title.toLowerCase().includes(q) ||
          a.abstract.toLowerCase().includes(q) ||
          a.keywords.some((k) => k.toLowerCase().includes(q)) ||
          a.authors.some((au) => au.name.toLowerCase().includes(q)) ||
          a.doi.toLowerCase().includes(q)
      );
    }
    switch (sort) {
      case "newest":
        result = [...result].sort((a, b) => b.published.localeCompare(a.published));
        break;
      case "oldest":
        result = [...result].sort((a, b) => a.published.localeCompare(b.published));
        break;
      case "most-cited":
        result = [...result].sort((a, b) => b.citations - a.citations);
        break;
      case "most-downloaded":
        result = [...result].sort((a, b) => b.downloads - a.downloads);
        break;
    }
    if (onlineFirst) {
      result = [...result].sort((a, b) => (b.publishedOnline ?? b.published).localeCompare(a.publishedOnline ?? a.published));
    }
    return result;
  }, [year, search, sort, onlineFirst]);

  const availableYears = useMemo(() => {
    return Array.from(new Set(ARTICLES.map((a) => a.year))).sort((a, b) => b - a);
  }, []);

  const toggleIssue = (key: string) => {
    setExpandedIssues((prev) => {
      const next = new Set(prev);
      if (next.has(key)) next.delete(key);
      else next.add(key);
      return next;
    });
  };

  return (
    <div>
      <JournalBanner active={onlineFirst ? "online-first" : "archive"} />
      <div className="container mx-auto px-4 pt-8">
        <h3 className="text-[16px] font-bold uppercase text-primary border-b-2 border-[var(--aom-rule)] pb-3">
          {onlineFirst ? "In-Press · Articles published online" : "Archive · All volumes and issues"}
        </h3>
      </div>

      <section className="container mx-auto px-4 py-6">
        {/* Search & filter bar */}
        <div className="bg-card border border-border rounded-md p-5 mb-8">
          <div className="flex flex-col lg:flex-row gap-3">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                placeholder="Search articles by title, author, keyword, or DOI…"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="pl-9 font-sans"
                aria-label="Search archive"
              />
            </div>
            <div className="flex gap-3">
              <Select value={year} onValueChange={setYear}>
                <SelectTrigger className="w-full sm:w-44 font-sans">
                  <Filter className="w-3.5 h-3.5 mr-1.5 text-muted-foreground" />
                  <SelectValue placeholder="Year" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All years</SelectItem>
                  {availableYears.map((y) => (
                    <SelectItem key={y} value={String(y)}>
                      {y}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Select value={sort} onValueChange={(v) => setSort(v as SortKey)}>
                <SelectTrigger className="w-full sm:w-48 font-sans">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="newest">Newest first</SelectItem>
                  <SelectItem value="oldest">Oldest first</SelectItem>
                  <SelectItem value="most-cited">Most cited</SelectItem>
                  <SelectItem value="most-downloaded">Most downloaded</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="mt-3 font-sans text-xs text-muted-foreground">
            Showing {filteredArticles.length} of {ARTICLES.length} articles
          </div>
        </div>

        {/* When searching, show flat list. Otherwise, show by issue */}
        {search.trim() || year !== "all" || onlineFirst ? (
          <div>
            <h2 className="font-serif text-xl font-bold text-primary mb-4 border-b border-border pb-2">
              {onlineFirst && !search.trim() ? "Most recently published online" : "Search Results"}
            </h2>
            {filteredArticles.length === 0 ? (
              <div className="py-10 text-center">
                <p className="font-serif text-base text-muted-foreground">
                  No articles match your search. Try a different keyword or year filter.
                </p>
                <Button
                  variant="outline"
                  size="sm"
                  className="font-sans mt-4"
                  onClick={() => { setSearch(""); setYear("all"); navigate("archive"); }}
                >
                  Clear search
                </Button>
              </div>
            ) : (
              <div className="divide-y divide-border">
                {filteredArticles.map((article) => (
                  <ArticleListItem key={article.id} article={article} />
                ))}
              </div>
            )}
          </div>
        ) : (
          <div>
            <h2 className="font-serif text-xl font-bold text-primary mb-4 border-b border-border pb-2">
              All Issues
            </h2>
            <div className="space-y-4">
              {issues.map((issue) => {
                const issueKey = `${issue.volume}-${issue.issue}`;
                const expanded = expandedIssues.has(issueKey);
                return (
                  <div
                    key={issueKey}
                    className="bg-card border border-border rounded-md overflow-hidden"
                  >
                    <button
                      onClick={() => toggleIssue(issueKey)}
                      className="w-full flex items-center justify-between px-5 py-4 hover:bg-secondary/50 transition-colors text-left"
                    >
                      <div className="flex items-center gap-3">
                        {expanded ? (
                          <ChevronDown className="w-4 h-4 text-accent" />
                        ) : (
                          <ChevronRight className="w-4 h-4 text-accent" />
                        )}
                        <div>
                          <div className="font-serif text-base font-semibold text-primary">
                            Volume {issue.volume}, Issue {issue.issue}
                          </div>
                          <div className="font-sans text-xs text-muted-foreground">
                            {issue.year} · {issue.articles.length} articles
                          </div>
                        </div>
                      </div>
                      <Badge variant="outline" className="font-sans text-[10px]">
                        {issue.articles.reduce((s, a) => s + a.downloads, 0).toLocaleString()} downloads
                      </Badge>
                    </button>
                    {expanded && (
                      <div className="px-5 pb-3">
                        <button
                          onClick={() =>
                            navigate("current-issue", { params: { volume: String(issue.volume), issue: String(issue.issue) } })
                          }
                          className="font-sans text-sm text-accent hover:underline flex items-center gap-1 pt-1"
                        >
                          View table of contents, issue PDF &amp; citations
                          <ChevronRight className="w-3.5 h-3.5" />
                        </button>
                        <div className="divide-y divide-border">
                          {issue.articles.map((article) => (
                            <ArticleListItem key={article.id} article={article} />
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            <div className="mt-8 text-center font-sans text-sm text-muted-foreground">
              <FileText className="w-5 h-5 mx-auto text-accent mb-2" />
              Showing {issues.length} most recent issues. Earlier volumes (Vols. 1–25,
              1996–2020) are available in our back-catalogue on request from the
              editorial office.
            </div>
          </div>
        )}
      </section>
    </div>
  );
}
