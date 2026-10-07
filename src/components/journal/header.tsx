"use client";

import { useEffect, useRef, useState } from "react";
import { Search, Menu, X, ChevronDown, User, Bell, LogOut, Bookmark, FileText } from "lucide-react";
import { useNav, type PageId } from "./nav-context";
import { NEWS_ITEMS } from "@/data/journal";
import { useSession } from "./session";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";

type NavItem = { label: string; page: PageId; children?: { label: string; page: PageId; anchor?: string }[] };

const NAV_ITEMS: NavItem[] = [
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
      { label: "Peer Review Process", page: "policies", anchor: "peer-review" },
    ],
  },
  { label: "News", page: "news" },
  { label: "Contact Us", page: "contact" },
];

/** AOM-style icon button: icon with a small label underneath. */
function IconButton({ icon: Icon, label, onClick, dot }: { icon: typeof Search; label: string; onClick?: () => void; dot?: boolean }) {
  return (
    <button onClick={onClick} className="relative flex flex-col items-center gap-1 px-2 sm:px-3 text-[#212121] hover:text-primary">
      <Icon className="w-5 h-5" strokeWidth={2.2} />
      {dot && <span className="absolute top-0 right-2 sm:right-3 w-2 h-2 rounded-full bg-primary" />}
      <span className="text-[11px] leading-none whitespace-nowrap">{label}</span>
    </button>
  );
}

export function Header() {
  const { navigate, page } = useNav();
  const { user, signOut, openAuth, openAlerts } = useSession();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const searchRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (searchOpen) searchRef.current?.focus();
  }, [searchOpen]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const q = searchQuery.trim();
    navigate("archive", q ? { params: { q } } : undefined);
    setSearchQuery("");
    setSearchOpen(false);
    setMobileOpen(false);
  };

  const go = (p: PageId, anchor?: string) => {
    navigate(p, anchor ? { anchor } : undefined);
    setMobileOpen(false);
  };
  const goAccount = (tab?: string) => navigate("account", tab ? { params: { tab } } : undefined);
  const isActive = (item: NavItem) => page === item.page || !!item.children?.some((c) => c.page === page);

  return (
    <>
      {/* === White masthead: logo left, icon actions right === */}
      <header className="bg-white">
        <div className="container mx-auto px-4 h-[84px] sm:h-[104px] flex items-center justify-between gap-4">
          <button onClick={() => go("home")} className="flex items-center gap-3 text-left" aria-label="Journal of Economic Research home">
            <img src="/jer-logo.svg" alt="" className="w-11 h-11 sm:w-14 sm:h-14 rounded-sm" width={56} height={56} />
            <span className="leading-none">
              <span className="block text-[11px] sm:text-[13px] tracking-[0.32em] text-[#4a4a4a] uppercase">Journal of</span>
              <span className="block text-[22px] sm:text-[32px] text-primary tracking-tight mt-0.5">Economic Research</span>
            </span>
          </button>

          <div className="flex items-center">
            <IconButton icon={Search} label="Search" onClick={() => setSearchOpen((o) => !o)} />

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <span>
                  <IconButton icon={Bell} label="Alerts" dot />
                </span>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-80 rounded-sm">
                <DropdownMenuLabel className="text-xs uppercase tracking-wide text-gray-500">Latest announcements</DropdownMenuLabel>
                <DropdownMenuSeparator />
                {NEWS_ITEMS.slice(0, 4).map((n) => (
                  <DropdownMenuItem
                    key={n.id}
                    onClick={() => navigate("news", { anchor: `news-${n.id}` })}
                    className="cursor-pointer flex-col items-start gap-0.5 py-2"
                  >
                    <span className="text-[10px] uppercase tracking-wide text-primary font-semibold">
                      {n.category} · {new Date(n.date).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" })}
                    </span>
                    <span className="text-sm text-[#212121] leading-snug">{n.title}</span>
                  </DropdownMenuItem>
                ))}
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={() => openAlerts(["new-issue", "news"])} className="cursor-pointer text-sm">
                  <Bell className="w-4 h-4" /> Get email alerts
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {user ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <span>
                    <IconButton icon={User} label="My Account" />
                  </span>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56 rounded-sm">
                  <DropdownMenuLabel className="font-normal">
                    <span className="block text-sm font-semibold text-primary">{user.name}</span>
                    <span className="block text-xs text-gray-500 truncate">{user.email}</span>
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={() => goAccount("saved")} className="cursor-pointer"><Bookmark className="w-4 h-4" /> Saved articles</DropdownMenuItem>
                  <DropdownMenuItem onClick={() => goAccount("submissions")} className="cursor-pointer"><FileText className="w-4 h-4" /> My submissions</DropdownMenuItem>
                  <DropdownMenuItem onClick={() => goAccount("profile")} className="cursor-pointer"><User className="w-4 h-4" /> Profile &amp; alerts</DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={() => { signOut(); if (page === "account") navigate("home"); }} className="cursor-pointer">
                    <LogOut className="w-4 h-4" /> Sign out
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <IconButton icon={User} label="Sign in" onClick={() => openAuth("signin")} />
            )}

            <button
              onClick={() => setMobileOpen((o) => !o)}
              className="lg:hidden ml-1 p-2 text-[#212121]"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Search panel (opened from the Search icon) */}
        {searchOpen && (
          <div className="border-t border-border bg-[#f5f5f5]">
            <form onSubmit={handleSearch} className="container mx-auto px-4 py-3 flex gap-2">
              <label htmlFor="site-search" className="sr-only">Search the journal</label>
              <input
                ref={searchRef}
                id="site-search"
                type="search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search titles, authors, keywords or DOI"
                className="flex-1 min-w-0 h-10 px-3 border border-[#c9c9c9] bg-white text-[15px] focus:outline-none focus:border-primary"
              />
              <button type="submit" className="h-10 px-5 bg-[var(--aom-button)] text-white font-semibold hover:bg-primary">
                Search
              </button>
              <button type="button" onClick={() => setSearchOpen(false)} className="h-10 px-2 text-gray-500 hover:text-primary" aria-label="Close search">
                <X className="w-5 h-5" />
              </button>
            </form>
          </div>
        )}
      </header>

      {/* === Maroon main navigation (sticky, AOM style) === */}
      <nav className="sticky top-0 z-50 bg-primary border-b border-[#b8b8b8] hidden lg:block" aria-label="Main">
        <div className="container mx-auto px-4">
          <ul className="flex items-center">
            {NAV_ITEMS.map((item) =>
              item.children ? (
                <li key={item.label}>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <button
                        className={`flex items-center gap-1.5 px-4 h-12 text-[14px] font-bold uppercase text-white hover:bg-black/15 ${
                          isActive(item) ? "bg-black/20" : ""
                        }`}
                      >
                        {item.label}
                        <ChevronDown className="w-3.5 h-3.5" />
                      </button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="start" className="w-60 rounded-none border-t-2 border-t-primary p-0">
                      {item.children.map((child) => (
                        <DropdownMenuItem
                          key={child.label}
                          onClick={() => go(child.page, child.anchor)}
                          className="cursor-pointer rounded-none px-4 py-2.5 text-[15px] focus:bg-[#f5f5f5] focus:text-primary"
                        >
                          {child.label}
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                </li>
              ) : (
                <li key={item.label}>
                  <button
                    onClick={() => go(item.page)}
                    aria-current={isActive(item) ? "page" : undefined}
                    className={`px-4 h-12 text-[14px] font-bold uppercase text-white hover:bg-black/15 ${isActive(item) ? "bg-black/20" : ""}`}
                  >
                    {item.label}
                  </button>
                </li>
              )
            )}
          </ul>
        </div>
      </nav>

      {/* Mobile drawer */}
      <div className="lg:hidden h-1.5 bg-primary" />
      {mobileOpen && (
        <div className="lg:hidden bg-primary text-white">
          <form onSubmit={handleSearch} className="container mx-auto px-4 pt-4 flex gap-2">
            <input
              type="search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search the journal"
              aria-label="Search the journal"
              className="flex-1 min-w-0 h-10 px-3 text-[#212121] bg-white"
            />
            <button type="submit" className="h-10 px-4 bg-[var(--aom-button)] font-semibold border border-white/40">Go</button>
          </form>
          <ul className="container mx-auto px-4 py-3">
            {NAV_ITEMS.flatMap((item) => [
              <li key={item.label}>
                <button
                  onClick={() => go(item.page)}
                  className={`w-full text-left py-2.5 text-[14px] font-bold uppercase border-b border-white/15 ${isActive(item) ? "text-white" : "text-white/90"}`}
                >
                  {item.label}
                </button>
              </li>,
              ...(item.children ?? [])
                .filter((c) => c.label !== "Journal Information" && c.label !== "Submit a Manuscript")
                .map((c) => (
                  <li key={`${item.label}-${c.label}`}>
                    <button onClick={() => go(c.page, c.anchor)} className="w-full text-left py-2 pl-4 text-[14px] text-white/85 border-b border-white/10">
                      {c.label}
                    </button>
                  </li>
                )),
            ])}
          </ul>
        </div>
      )}
    </>
  );
}
