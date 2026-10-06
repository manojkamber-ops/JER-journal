"use client";

import { useState } from "react";
import { Search, Menu, X, ChevronDown, User, Bell } from "lucide-react";
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
  { label: "Journal Home", page: "home" },
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
  { label: "All Issues", page: "archive" },
  {
    label: "For Authors",
    page: "submission",
    children: [
      { label: "Submit a Manuscript", page: "submission" },
      { label: "Author Guidelines", page: "author-guidelines" },
      { label: "Peer Review Process", page: "policies" },
    ],
  },
  { label: "News &amp; Announcements", page: "news" },
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
    <header className="sticky top-0 z-50 bg-white shadow-sm border-b border-gray-200">
      {/* === Top utility bar (AOM-style) === */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="container mx-auto px-4 flex items-center justify-between h-9 text-[11px] font-sans">
          <div className="flex items-center gap-4 text-gray-600">
            <a
              href="https://www.hanyang.ac.kr/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent transition-colors"
            >
              Hanyang University
            </a>
            <span className="text-gray-300">|</span>
            <button className="hover:text-accent transition-colors">Sign In</button>
            <span className="text-gray-300">|</span>
            <button className="hover:text-accent transition-colors">Register</button>
            <span className="text-gray-300 hidden sm:inline">|</span>
            <button className="hidden sm:inline hover:text-accent transition-colors">Subscribe</button>
          </div>
          <div className="flex items-center gap-3">
            <span className="hidden md:inline text-gray-500">ISSN {JOURNAL_INFO.issnPrint}</span>
            <span className="text-gray-300 hidden md:inline">|</span>
            <button className="hover:text-accent transition-colors flex items-center gap-1" aria-label="Notifications">
              <Bell className="w-3.5 h-3.5" />
            </button>
            <span className="text-gray-300">|</span>
            <button className="hover:text-accent transition-colors flex items-center gap-1">
              <User className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">My Account</span>
            </button>
          </div>
        </div>
      </div>

      {/* === Masthead (AOM-style: logo left, journal title center, search right) === */}
      <div className="border-b border-gray-200 bg-white">
        <div className="container mx-auto px-4 py-5 flex items-center justify-between gap-6">
          {/* Logo + journal title */}
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
            <div>
              <h1 className="font-serif text-2xl sm:text-3xl font-bold text-primary leading-tight tracking-tight">
                Journal of Economic Research
              </h1>
              <p className="font-sans text-xs sm:text-sm text-gray-500 mt-1">
                Published by the Department of Economics · Hanyang University, Seoul
              </p>
            </div>
          </button>

          {/* Search bar (desktop) */}
          <form onSubmit={handleSearch} className="hidden lg:flex items-center gap-2 flex-shrink-0">
            <div className="relative">
              <Input
                type="search"
                placeholder="Search this journal…"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-72 pl-9 bg-white border-gray-300 font-sans text-sm rounded-sm"
                aria-label="Search journal articles"
              />
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            </div>
            <Button type="submit" size="sm" className="font-sans rounded-sm bg-primary">
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

      {/* === Secondary navigation bar (AOM-style horizontal nav) === */}
      <nav className="bg-primary border-b border-primary hidden lg:block">
        <div className="container mx-auto px-4">
          <ul className="flex items-center font-sans text-sm">
            {NAV_ITEMS.map((item) => {
              const isActive = page === item.page;
              if (item.children) {
                return (
                  <li key={item.label} className="relative">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <button
                          className={`flex items-center gap-1 px-5 py-3.5 hover:bg-white/10 transition-colors border-b-[3px] ${
                            isActive
                              ? "border-accent text-white font-semibold bg-white/5"
                              : "border-transparent text-white/95"
                          }`}
                        >
                          <span dangerouslySetInnerHTML={{ __html: item.label }} />
                          <ChevronDown className="w-3 h-3 opacity-70" />
                        </button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="start" className="w-64 rounded-sm">
                        <DropdownMenuLabel className="font-serif text-sm uppercase tracking-wide text-gray-500">
                          <span dangerouslySetInnerHTML={{ __html: item.label }} />
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
                    className={`px-5 py-3.5 hover:bg-white/10 transition-colors border-b-[3px] text-white ${
                      isActive
                        ? "border-accent font-semibold bg-white/5"
                        : "border-transparent"
                    }`}
                  >
                    <span dangerouslySetInnerHTML={{ __html: item.label }} />
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden border-b border-gray-200 bg-white">
          <div className="container mx-auto px-4 py-4">
            <form onSubmit={handleSearch} className="flex items-center gap-2 mb-4">
              <div className="relative flex-1">
                <Input
                  type="search"
                  placeholder="Search articles…"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-9 bg-white border-gray-300 font-sans text-sm rounded-sm"
                />
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              </div>
              <Button type="submit" size="sm" className="font-sans bg-primary">Go</Button>
            </form>
            <ul className="space-y-1 font-sans">
              {NAV_ITEMS.map((item) => (
                <li key={item.label}>
                  <button
                    onClick={() => {
                      navigate(item.page);
                      setMobileOpen(false);
                    }}
                    className={`w-full text-left px-3 py-2.5 rounded-sm hover:bg-gray-100 ${
                      page === item.page ? "bg-gray-100 text-primary font-semibold" : "text-gray-700"
                    }`}
                  >
                    <span dangerouslySetInnerHTML={{ __html: item.label }} />
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
