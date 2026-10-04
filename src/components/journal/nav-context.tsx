"use client";

import { createContext, useContext, useState, useCallback, type ReactNode } from "react";

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
  | "news";

export type NavContextValue = {
  page: PageId;
  articleId: string | null;
  navigate: (page: PageId, opts?: { articleId?: string }) => void;
};

const NavContext = createContext<NavContextValue | null>(null);

export function NavProvider({ children }: { children: ReactNode }) {
  const [page, setPage] = useState<PageId>("home");
  const [articleId, setArticleId] = useState<string | null>(null);

  const navigate = useCallback<NavContextValue["navigate"]>((p, opts) => {
    setPage(p);
    setArticleId(opts?.articleId ?? null);
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "auto" });
    }
  }, []);

  return (
    <NavContext.Provider value={{ page, articleId, navigate }}>
      {children}
    </NavContext.Provider>
  );
}

export function useNav() {
  const ctx = useContext(NavContext);
  if (!ctx) throw new Error("useNav must be used within NavProvider");
  return ctx;
}
