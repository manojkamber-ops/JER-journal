"use client";

import { createContext, useCallback, useContext, useEffect, useState, type ReactNode } from "react";
import type { Article } from "@/data/journal";
import { toast } from "@/hooks/use-toast";
import { AuthDialog, AlertsDialog, CiteDialog, ShareDialog, type AuthMode } from "./dialogs";

export type SessionUser = { id: string; email: string; name: string; affiliation: string | null };

type SessionValue = {
  user: SessionUser | null;
  ready: boolean;
  saved: string[];
  setUser: (u: SessionUser | null) => void;
  signOut: () => Promise<void>;
  isSaved: (articleId: string) => boolean;
  toggleSave: (articleId: string) => Promise<void>;
  saveMany: (articleIds: string[]) => Promise<void>;
  openAuth: (mode?: AuthMode, reason?: string) => void;
  openAlerts: (topics?: string[]) => void;
  openCite: (articles: Article | Article[]) => void;
  openShare: (article: Article) => void;
};

const SessionContext = createContext<SessionValue | null>(null);

export async function api<T = unknown>(url: string, init?: RequestInit): Promise<T> {
  const res = await fetch(url, {
    ...init,
    headers: init?.body && !(init.body instanceof FormData) ? { "Content-Type": "application/json", ...init?.headers } : init?.headers,
  });
  const data = await res.json().catch(() => ({}));
  if (!res.ok) throw new Error(data.error ?? "Something went wrong. Please try again.");
  return data as T;
}

export function SessionProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<SessionUser | null>(null);
  const [saved, setSaved] = useState<string[]>([]);
  const [ready, setReady] = useState(false);

  const [auth, setAuth] = useState<{ open: boolean; mode: AuthMode; reason?: string }>({ open: false, mode: "signin" });
  const [alerts, setAlerts] = useState<{ open: boolean; topics: string[] }>({ open: false, topics: [] });
  const [cite, setCite] = useState<Article[] | null>(null);
  const [share, setShare] = useState<Article | null>(null);

  const refresh = useCallback(async () => {
    try {
      const data = await api<{ user: SessionUser | null; saved: string[] }>("/api/auth/me");
      setUser(data.user);
      setSaved(data.saved);
    } catch {
      setUser(null);
    } finally {
      setReady(true);
    }
  }, []);

  useEffect(() => {
    api<{ user: SessionUser | null; saved: string[] }>("/api/auth/me")
      .then((data) => {
        setUser(data.user);
        setSaved(data.saved);
      })
      .catch(() => setUser(null))
      .finally(() => setReady(true));
  }, []);

  const signOut = useCallback(async () => {
    await api("/api/auth/logout", { method: "POST" });
    setUser(null);
    setSaved([]);
    toast({ title: "Signed out", description: "You have been signed out of your account." });
  }, []);

  const openAuth = useCallback((mode: AuthMode = "signin", reason?: string) => setAuth({ open: true, mode, reason }), []);

  const toggleSave = useCallback(
    async (articleId: string) => {
      if (!user) {
        openAuth("signin", "Sign in to save articles to your library.");
        return;
      }
      const removing = saved.includes(articleId);
      try {
        const data = await api<{ saved: string[] }>(
          removing ? `/api/saved?articleId=${encodeURIComponent(articleId)}` : "/api/saved",
          removing ? { method: "DELETE" } : { method: "POST", body: JSON.stringify({ articleId }) }
        );
        setSaved(data.saved);
        toast({ title: removing ? "Removed from your library" : "Saved to your library" });
      } catch (e) {
        toast({ title: "Could not update library", description: (e as Error).message, variant: "destructive" });
      }
    },
    [user, saved, openAuth]
  );

  const saveMany = useCallback(
    async (ids: string[]) => {
      if (!user) {
        openAuth("signin", "Sign in to save articles to your library.");
        return;
      }
      let latest = saved;
      for (const articleId of ids.filter((id) => !saved.includes(id))) {
        latest = (await api<{ saved: string[] }>("/api/saved", { method: "POST", body: JSON.stringify({ articleId }) })).saved;
      }
      setSaved(latest);
      toast({ title: "Saved to your library", description: `${ids.length} article${ids.length === 1 ? "" : "s"} saved.` });
    },
    [user, saved, openAuth]
  );

  const value: SessionValue = {
    user,
    ready,
    saved,
    setUser,
    signOut,
    isSaved: (id) => saved.includes(id),
    toggleSave,
    saveMany,
    openAuth,
    openAlerts: (topics = ["new-issue"]) => setAlerts({ open: true, topics }),
    openCite: (a) => setCite(Array.isArray(a) ? a : [a]),
    openShare: (a) => setShare(a),
  };

  return (
    <SessionContext.Provider value={value}>
      {children}
      <AuthDialog
        open={auth.open}
        mode={auth.mode}
        reason={auth.reason}
        onOpenChange={(open) => setAuth((s) => ({ ...s, open }))}
        onModeChange={(mode) => setAuth((s) => ({ ...s, mode }))}
        onSignedIn={() => refresh()}
      />
      <AlertsDialog
        open={alerts.open}
        initialTopics={alerts.topics}
        defaultEmail={user?.email}
        onOpenChange={(open) => setAlerts((s) => ({ ...s, open }))}
      />
      <CiteDialog articles={cite} onOpenChange={(open) => !open && setCite(null)} />
      <ShareDialog article={share} onOpenChange={(open) => !open && setShare(null)} />
    </SessionContext.Provider>
  );
}

export function useSession() {
  const ctx = useContext(SessionContext);
  if (!ctx) throw new Error("useSession must be used within SessionProvider");
  return ctx;
}
