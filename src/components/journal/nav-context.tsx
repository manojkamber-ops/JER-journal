"use client";

import { createContext, useContext, useCallback, useMemo, useSyncExternalStore, type ReactNode } from "react";

export type PageId =
  | "home"
  | "about"
  | "editorial-board"
  | "current-issue"
  | "archive"
  | "article"
  | "submission"
  | "author-guidelines"
  | "policies"
  | "contact"
  | "news"
  | "account"
  | "legal"
  | "reader"
  | "doi";

const PAGES: PageId[] = [
  "home", "about", "editorial-board", "current-issue", "archive", "article", "submission",
  "author-guidelines", "policies", "contact", "news", "account", "legal", "reader", "doi",
];

export type NavOptions = {
  articleId?: string;
  /** Extra URL parameters, e.g. { q: "climate" } for archive search or { section: "privacy" }. */
  params?: Record<string, string>;
  /** Element id to scroll to after the page renders. */
  anchor?: string;
};

export type NavContextValue = {
  page: PageId;
  articleId: string | null;
  params: Record<string, string>;
  navigate: (page: PageId, opts?: NavOptions) => void;
};

const NavContext = createContext<NavContextValue | null>(null);

type Route = { page: PageId; articleId: string | null; params: Record<string, string> };

// URLs look like  #/article/2025-v30-i3-01,  #/reader/2025-v30-i3-01  or  #/archive?q=climate
function parseHash(hash: string): Route {
  const [path, query = ""] = hash.replace(/^#\/?/, "").split("?");
  const [first, ...rest] = path.split("/").map(decodeURIComponent);
  const page = (PAGES as string[]).includes(first) ? (first as PageId) : "home";
  return {
    page,
    // DOIs contain "/", so the doi route keeps the whole remainder of the path
    articleId: page === "doi" ? rest.join("/") || null : page === "article" || page === "reader" ? rest[0] ?? null : null,
    params: Object.fromEntries(new URLSearchParams(query)),
  };
}

function buildHash(page: PageId, opts?: NavOptions) {
  let h = `#/${page}`;
  if ((page === "article" || page === "reader") && opts?.articleId) h += `/${encodeURIComponent(opts.articleId)}`;
  if (page === "doi" && opts?.articleId) h += `/${opts.articleId}`;
  const qs = new URLSearchParams(opts?.params ?? {}).toString();
  return qs ? `${h}?${qs}` : h;
}

function scrollAfterRender(anchor?: string) {
  requestAnimationFrame(() => {
    const el = anchor ? document.getElementById(anchor) : null;
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    else window.scrollTo({ top: 0, behavior: "auto" });
  });
}

const NAV_EVENT = "jer:navigate";

function subscribe(onChange: () => void) {
  // Back/forward and manually edited URLs start at the top of the page
  const onHashChange = () => {
    onChange();
    window.scrollTo({ top: 0, behavior: "auto" });
  };
  window.addEventListener("hashchange", onHashChange);
  window.addEventListener(NAV_EVENT, onChange);
  return () => {
    window.removeEventListener("hashchange", onHashChange);
    window.removeEventListener(NAV_EVENT, onChange);
  };
}

export function NavProvider({ children }: { children: ReactNode }) {
  const hash = useSyncExternalStore(subscribe, () => window.location.hash, () => "");
  const route = useMemo(() => parseHash(hash), [hash]);

  const navigate = useCallback<NavContextValue["navigate"]>((p, opts) => {
    const next = buildHash(p, opts);
    if (window.location.hash !== next) window.history.pushState(null, "", next);
    window.dispatchEvent(new Event(NAV_EVENT));
    scrollAfterRender(opts?.anchor);
  }, []);

  return (
    <NavContext.Provider value={{ ...route, navigate }}>
      {children}
    </NavContext.Provider>
  );
}

export function useNav() {
  const ctx = useContext(NavContext);
  if (!ctx) throw new Error("useNav must be used within NavProvider");
  return ctx;
}

/** Absolute shareable URL for a route (used by Share / Email). */
export function routeUrl(page: PageId, opts?: NavOptions) {
  if (typeof window === "undefined") return "";
  return `${window.location.origin}${window.location.pathname}${buildHash(page, opts)}`;
}
