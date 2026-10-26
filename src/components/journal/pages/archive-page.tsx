"use client";

import { useState, useMemo } from "react";
import { useNav } from "../nav-context";
import { useSession } from "../session";
import { JournalBanner } from "../journal-banner";
import { ARTICLES, archiveIssues, type ArchiveIssue } from "@/data/journal";
import { ArticleListItem } from "../article-components";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Search, Filter, ChevronDown, ChevronRight, Lock } from "lucide-react";

type SortKey = "newest" | "oldest" | "most-cited" | "most-downloaded";

export function ArchivePage() {
  const { navigate, params } = useNav();
  const { user, openAuth } = useSession();
  // Locked past issue the reader clicked: a members-only notice, then sign-in
  const [lockedIssue, setLockedIssue] = useState<ArchiveIssue | null>(null);
  const [year, setYear] = useState<string>("all");
  // Searches submitted from the header arrive as ?q= (the page is re-keyed on q, see journal-layout)
  const [search, setSearch] = useState(params.q ?? "");
  const onlineFirst = params.view === "online-first";
  const [sort, setSort] = useState<SortKey>("newest");
  // Every volume and issue (newest first); issues without articles online are listed without contents
  const volumes = useMemo(() => {
    const byVolume = new Map<number, ArchiveIssue[]>();
    for (const i of archiveIssues()) byVolume.set(i.volume, [...(byVolume.get(i.volume) ?? []), i]);
    return Array.from(byVolume.entries()).map(([volume, issues]) => ({ volume, year: issues[0].year, issues }));
  }, []);
  const [expandedIssues, setExpandedIssues] = useState<Set<string>>(
    () => new Set([`v${volumes[0]?.volume}`, ...(volumes[0]?.issues.filter((i) => i.articles.length).map((i) => `${i.volume}-${i.issue}`) ?? [])]),
  );

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
              All Volumes and Issues
            </h2>
            <div className="space-y-3">
              {volumes.map(({ volume, year, issues }) => {
                const volKey = `v${volume}`;
                const open = expandedIssues.has(volKey);
                const online = issues.reduce((n, i) => n + i.articles.length, 0);
                return (
                  <div key={volKey} className="bg-card border border-border rounded-md overflow-hidden">
                    <button
                      onClick={() => toggleIssue(volKey)}
                      className="w-full flex items-center justify-between px-5 py-4 hover:bg-secondary/50 transition-colors text-left"
                    >
                      <div className="flex items-center gap-3">
                        {open ? <ChevronDown className="w-4 h-4 text-accent" /> : <ChevronRight className="w-4 h-4 text-accent" />}
                        <div>
                          <div className="font-serif text-base font-semibold text-primary">Volume {volume} ({year})</div>
                          <div className="font-sans text-xs text-muted-foreground flex items-center gap-1.5">
                            {issues.length} {issues.length === 1 ? "issue" : "issues"}
                            {online ? (
                              ` · ${online} ${online === 1 ? "article" : "articles"} online`
                            ) : (
                              <Lock className="w-3.5 h-3.5 text-muted-foreground" aria-label="Locked" />
                            )}
                          </div>
                        </div>
                      </div>
                    </button>
                    {open && (
                      <div className="border-t border-border divide-y divide-border">
                        {issues.map((issue) => {
                          const issueKey = `${issue.volume}-${issue.issue}`;
                          const expanded = expandedIssues.has(issueKey);
                          const hasArticles = issue.articles.length > 0;
                          return (
                            <div key={issueKey} className="px-5">
                              <button
                                onClick={() => (hasArticles ? toggleIssue(issueKey) : setLockedIssue(issue))}
                                className="w-full flex items-center justify-between py-3 text-left"
                              >
                                <div className="flex items-center gap-3">
                                  {hasArticles ? (
                                    expanded ? <ChevronDown className="w-3.5 h-3.5 text-accent" /> : <ChevronRight className="w-3.5 h-3.5 text-accent" />
                                  ) : (
                                    <span className="w-3.5 h-3.5" />
                                  )}
                                  <span className="font-sans text-sm font-semibold text-foreground">
                                    Issue {issue.issue} · {issue.label}
                                  </span>
                                </div>
                                <span className="font-sans text-xs text-muted-foreground">
                                  {hasArticles ? (
                                    `${issue.articles.length} ${issue.articles.length === 1 ? "article" : "articles"}`
                                  ) : (
                                    <Lock className="w-4 h-4 text-muted-foreground" aria-label="Locked" />
                                  )}
                                </span>
                              </button>
                              {hasArticles && expanded && (
                                <div className="pb-3">
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
                    )}
                  </div>
                );
              })}
            </div>

          </div>
        )}
      </section>

      <Dialog open={lockedIssue !== null} onOpenChange={(o) => !o && setLockedIssue(null)}>
        <DialogContent className="sm:max-w-md rounded-sm">
          <DialogHeader>
            <div className="flex items-center gap-2">
              <Lock className="w-5 h-5 text-accent" aria-hidden />
              <DialogTitle className="font-serif text-2xl text-primary">Members only</DialogTitle>
            </div>
            <DialogDescription className="font-sans text-sm text-gray-600 leading-relaxed pt-1">
              {lockedIssue &&
                (user
                  ? `You are signed in. The research papers published in Volume ${lockedIssue.volume}, Issue ${lockedIssue.issue} (${lockedIssue.label}) will appear here for members.`
                  : `Only members can open the research papers published in Volume ${lockedIssue.volume}, Issue ${lockedIssue.issue} (${lockedIssue.label}). Please sign in to continue.`)}
            </DialogDescription>
          </DialogHeader>
          <DialogFooter className="gap-2 sm:gap-0">
            <Button variant="outline" className="font-sans rounded-sm" onClick={() => setLockedIssue(null)}>
              {user ? "Close" : "Cancel"}
            </Button>
            {!user && (
              <Button
                className="font-sans rounded-sm bg-primary hover:bg-primary/90"
                onClick={() => {
                  const i = lockedIssue!;
                  setLockedIssue(null);
                  openAuth("signin", `Sign in to open the research papers in Volume ${i.volume}, Issue ${i.issue} (${i.label}).`);
                }}
              >
                Continue to login
              </Button>
            )}
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
