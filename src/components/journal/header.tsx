"use client";

import { useState } from "react";
import { Search, Menu, X, ChevronDown } from "lucide-react";
import { useNav, type PageId } from "./nav-context";
import { JOURNAL_INFO } from "@/data/journal";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const NAV_ITEMS: { label: string; page: PageId; children?: { label: string; page: PageId }[] }[] = [
  { label: "Home", page: "home" },
  {
    label: "About",
    page: "about",
    children: [
      { label: "Journal Information", page: "about" },
      { label: "Editorial Board", page: "editorial-board" },
      { label: "Journal Policies", page: "policies" },
    ],
  },
  { label: "Current Issue", page: "current-issue" },
  { label: "Archive", page: "archive" },
  {
    label: "For Authors",
    page: "submission",
    children: [
      { label: "Submit a Manuscript", page: "submission" },
      { label: "Author Guidelines", page: "author-guidelines" },
      { label: "Peer Review Process", page: "policies" },
    ],
  },
  { label: "News", page: "news" },
  { label: "Contact", page: "contact" },
];

export function Header() {
  const { navigate, page } = useNav();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate("archive");
      setSearchQuery("");
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-background shadow-sm border-b border-border">
      {/* Top utility bar */}
      <div className="bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 flex items-center justify-between h-9 text-xs">
          <div className="flex items-center gap-4 font-sans">
            <span className="hidden sm:inline opacity-90">
              Peer-reviewed · Open Access · Quarterly · Since 1996
            </span>
            <span className="sm:hidden opacity-90">Open Access · Quarterly</span>
          </div>
          <div className="flex items-center gap-3 font-sans">
            <a
              href={`mailto:${JOURNAL_INFO.contactEmail}`}
              className="opacity-90 hover:opacity-100 hover:underline"
            >
              {JOURNAL_INFO.contactEmail}
            </a>
            <span className="opacity-50">|</span>
            <span className="opacity-90">ISSN {JOURNAL_INFO.issnPrint}</span>
            <span className="opacity-50 hidden sm:inline">|</span>
            <span className="hidden sm:inline opacity-90">English</span>
          </div>
        </div>
      </div>

      {/* Masthead */}
      <div className="border-b border-border bg-background">
        <div className="container mx-auto px-4 py-5 flex items-center justify-between gap-6">
          <button
            onClick={() => navigate("home")}
            className="flex items-center gap-4 text-left group"
            aria-label="Journal of Economic Research home"
          >
            <img
              src="/jer-logo.svg"
              alt="Journal of Economic Research logo"
              className="w-14 h-14 flex-shrink-0 rounded-md group-hover:opacity-95 transition-opacity"
              width={56}
              height={56}
            />
            <div className="hidden sm:block">
              <h1 className="font-serif text-2xl sm:text-3xl font-bold text-primary leading-tight tracking-tight">
                Journal of Economic Research
              </h1>
              <p className="font-sans text-xs sm:text-sm text-muted-foreground mt-1">
                Hanyang University · Seoul, Republic of Korea
              </p>
            </div>
            <div className="sm:hidden">
              <h1 className="font-serif text-lg font-bold text-primary leading-tight">
                Journal of Economic Research
              </h1>
              <p className="font-sans text-[10px] text-muted-foreground">Hanyang University · Seoul</p>
            </div>
          </button>

          {/* Search bar (desktop) */}
          <form onSubmit={handleSearch} className="hidden lg:flex items-center gap-2 flex-shrink-0">
            <div className="relative">
              <Input
                type="search"
                placeholder="Search articles, authors, keywords…"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-72 pl-9 bg-card border-border font-sans text-sm"
                aria-label="Search journal articles"
              />
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            </div>
            <Button type="submit" variant="outline" size="sm" className="font-sans">
              Search
            </Button>
          </form>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 -mr-2 text-primary"
            aria-label="Toggle navigation menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Primary navigation */}
      <nav className="bg-secondary border-b border-border hidden lg:block">
        <div className="container mx-auto px-4">
          <ul className="flex items-center justify-center font-sans text-sm">
            {NAV_ITEMS.map((item) => {
              const isActive = page === item.page;
              if (item.children) {
                return (
                  <li key={item.label} className="relative">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <button
                          className={`flex items-center gap-1 px-5 py-3.5 hover:bg-accent/10 hover:text-primary transition-colors border-b-2 ${
                            isActive
                              ? "border-accent text-primary font-semibold"
                              : "border-transparent text-foreground"
                          }`}
                        >
                          {item.label}
                          <ChevronDown className="w-3 h-3 opacity-60" />
                        </button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="start" className="w-64">
                        <DropdownMenuLabel className="font-serif text-sm uppercase tracking-wide text-muted-foreground">
                          {item.label}
                        </DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        {item.children.map((child) => (
                          <DropdownMenuItem
                            key={child.label}
                            onClick={() => navigate(child.page)}
                            className="cursor-pointer font-sans text-sm py-2"
                          >
                            {child.label}
                          </DropdownMenuItem>
                        ))}
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </li>
                );
              }
              return (
                <li key={item.label}>
                  <button
                    onClick={() => navigate(item.page)}
                    className={`px-5 py-3.5 hover:bg-accent/10 hover:text-primary transition-colors border-b-2 ${
                      isActive
                        ? "border-accent text-primary font-semibold"
                        : "border-transparent text-foreground"
                    }`}
                  >
                    {item.label}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden border-b border-border bg-background">
          <div className="container mx-auto px-4 py-4">
            <form onSubmit={handleSearch} className="flex items-center gap-2 mb-4">
              <div className="relative flex-1">
                <Input
                  type="search"
                  placeholder="Search articles…"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-9 bg-card border-border font-sans text-sm"
                />
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              </div>
              <Button type="submit" size="sm" className="font-sans">Go</Button>
            </form>
            <ul className="space-y-1 font-sans">
              {NAV_ITEMS.map((item) => (
                <li key={item.label}>
                  <button
                    onClick={() => {
                      navigate(item.page);
                      setMobileOpen(false);
                    }}
                    className={`w-full text-left px-3 py-2.5 rounded hover:bg-secondary ${
                      page === item.page ? "bg-secondary text-primary font-semibold" : "text-foreground"
                    }`}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </header>
  );
}
