"use client";

import { useState } from "react";
import type { Article } from "@/data/journal";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "@/hooks/use-toast";
import { CITATION_FORMATS, formatCitation, formatCitations, citationFilename, type CitationFormat } from "@/lib/citations";
import { copyText, downloadText } from "@/lib/download";
import { routeUrl } from "./nav-context";
import { doiUrl } from "@/lib/doi";
import { api } from "./session";
import { Copy, Download, Mail, Link2, Linkedin, Twitter, Facebook, Bell, CheckCircle2, Loader2 } from "lucide-react";

export type AuthMode = "signin" | "register";

function FormError({ message }: { message: string | null }) {
  if (!message) return null;
  return (
    <p role="alert" className="font-sans text-sm text-destructive bg-destructive/10 border border-destructive/30 rounded-sm px-3 py-2">
      {message}
    </p>
  );
}

/* ------------------------------------------------------------------ */
/* Sign in / Register                                                  */
/* ------------------------------------------------------------------ */
export function AuthDialog({
  open,
  mode,
  reason,
  onOpenChange,
  onModeChange,
  onSignedIn,
}: {
  open: boolean;
  mode: AuthMode;
  reason?: string;
  onOpenChange: (open: boolean) => void;
  onModeChange: (mode: AuthMode) => void;
  onSignedIn: () => void;
}) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md rounded-sm">
        <DialogHeader>
          <DialogTitle className="font-serif text-2xl text-primary">
            {mode === "signin" ? "Sign in" : "Create an account"}
          </DialogTitle>
          <DialogDescription className="font-sans">
            {reason ?? (mode === "signin"
              ? "Sign in to access your saved articles, submissions and alerts."
              : "Register to save articles, track your submissions and manage alerts.")}
          </DialogDescription>
        </DialogHeader>

        <div className="grid grid-cols-2 border border-gray-200 rounded-sm overflow-hidden font-sans text-sm" role="tablist">
          {(["signin", "register"] as const).map((m) => (
            <button
              key={m}
              role="tab"
              aria-selected={mode === m}
              onClick={() => onModeChange(m)}
              className={`py-2 ${mode === m ? "bg-primary text-white font-semibold" : "bg-gray-50 text-gray-600 hover:bg-gray-100"}`}
            >
              {m === "signin" ? "Sign In" : "Register"}
            </button>
          ))}
        </div>

        <AuthForm
          key={mode}
          mode={mode}
          onModeChange={onModeChange}
          onDone={() => {
            onSignedIn();
            onOpenChange(false);
          }}
        />
      </DialogContent>
    </Dialog>
  );
}

function AuthForm({ mode, onModeChange, onDone }: { mode: AuthMode; onModeChange: (m: AuthMode) => void; onDone: () => void }) {
  const [error, setError] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);

  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const body = Object.fromEntries(new FormData(e.currentTarget));
    setBusy(true);
    setError(null);
    try {
      const { user } = await api<{ user: { name: string } }>(
        mode === "signin" ? "/api/auth/login" : "/api/auth/register",
        { method: "POST", body: JSON.stringify(body) }
      );
      onDone();
      toast({
        title: mode === "signin" ? `Welcome back, ${user.name}` : "Account created",
        description: mode === "signin" ? "You are now signed in." : "You are signed in and can save articles and track submissions.",
      });
    } catch (err) {
      setError((err as Error).message);
      setBusy(false);
    }
  }

  return (
<form onSubmit={submit} className="space-y-4">
      {mode === "register" && (
        <>
          <div>
            <Label htmlFor="auth-name" className="font-sans text-sm">Full name *</Label>
            <Input id="auth-name" name="name" required autoComplete="name" className="mt-1.5 font-sans" />
          </div>
          <div>
            <Label htmlFor="auth-aff" className="font-sans text-sm">Institution / affiliation</Label>
            <Input id="auth-aff" name="affiliation" autoComplete="organization" className="mt-1.5 font-sans" />
          </div>
        </>
      )}
      <div>
        <Label htmlFor="auth-email" className="font-sans text-sm">Email *</Label>
        <Input id="auth-email" name="email" type="email" required autoComplete="email" className="mt-1.5 font-sans" />
      </div>
      <div>
        <Label htmlFor="auth-pass" className="font-sans text-sm">Password *</Label>
        <Input
          id="auth-pass"
          name="password"
          type="password"
          required
          minLength={mode === "register" ? 8 : undefined}
          autoComplete={mode === "signin" ? "current-password" : "new-password"}
          className="mt-1.5 font-sans"
        />
        {mode === "register" && <p className="font-sans text-xs text-gray-500 mt-1">At least 8 characters.</p>}
      </div>
      <FormError message={error} />
      <Button type="submit" disabled={busy} className="w-full font-sans bg-primary hover:bg-primary/90 rounded-sm">
        {busy && <Loader2 className="w-4 h-4 mr-2 animate-spin" />}
        {mode === "signin" ? "Sign In" : "Create Account"}
      </Button>
      <p className="font-sans text-xs text-center text-gray-500">
        {mode === "signin" ? "New to JER? " : "Already registered? "}
        <button type="button" onClick={() => onModeChange(mode === "signin" ? "register" : "signin")} className="text-accent hover:underline font-medium">
          {mode === "signin" ? "Create an account" : "Sign in"}
        </button>
      </p>
    </form>
  );
}

/* ------------------------------------------------------------------ */
/* Content alerts / subscribe                                          */
/* ------------------------------------------------------------------ */
const ALERT_TOPICS = [
  { id: "new-issue", label: "New issue published", desc: "Table of contents when each quarterly issue goes live" },
  { id: "online-first", label: "Articles published online first", desc: "Accepted papers as soon as they appear online" },
  { id: "cfp", label: "Calls for papers", desc: "Special issues and thematic calls" },
  { id: "news", label: "Journal news & announcements", desc: "Indexing, editorial board and policy updates" },
];

export function AlertsDialog({
  open,
  initialTopics,
  defaultEmail,
  onOpenChange,
}: {
  open: boolean;
  initialTopics: string[];
  defaultEmail?: string;
  onOpenChange: (open: boolean) => void;
}) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md rounded-sm">
        <DialogHeader>
          <DialogTitle className="font-serif text-2xl text-primary flex items-center gap-2">
            <Bell className="w-5 h-5 text-accent" /> Content Alerts
          </DialogTitle>
          <DialogDescription className="font-sans">
            Free email alerts from the Journal of Economic Research. Unsubscribe at any time.
          </DialogDescription>
        </DialogHeader>
        {/* Content unmounts when the dialog closes, so the form state resets on every open */}
        <AlertsForm initialTopics={initialTopics} defaultEmail={defaultEmail} onClose={() => onOpenChange(false)} />
      </DialogContent>
    </Dialog>
  );
}

function AlertsForm({ initialTopics, defaultEmail, onClose }: { initialTopics: string[]; defaultEmail?: string; onClose: () => void }) {
  const [topics, setTopics] = useState<string[]>(initialTopics);
  const [error, setError] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);
  const [done, setDone] = useState<string | null>(null);

  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const email = String(new FormData(e.currentTarget).get("email") ?? "");
    setBusy(true);
    setError(null);
    try {
      await api("/api/alerts", { method: "POST", body: JSON.stringify({ email, topics }) });
      setDone(email);
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setBusy(false);
    }
  }

  const custom = initialTopics.filter((t) => !ALERT_TOPICS.some((a) => a.id === t));

  return done ? (
    <div className="text-center py-4">
      <CheckCircle2 className="w-12 h-12 text-accent mx-auto mb-3" />
      <p className="font-serif text-lg text-primary font-semibold">You&apos;re subscribed</p>
      <p className="font-sans text-sm text-gray-600 mt-1">Alerts will be sent to <strong>{done}</strong>.</p>
      <Button onClick={onClose} className="mt-5 font-sans bg-primary rounded-sm">Done</Button>
    </div>
  ) : (
    <form onSubmit={submit} className="space-y-4">
      <div>
        <Label htmlFor="alert-email" className="font-sans text-sm">Email address *</Label>
        <Input id="alert-email" name="email" type="email" required defaultValue={defaultEmail} className="mt-1.5 font-sans" />
      </div>
      <fieldset className="space-y-2">
        <legend className="font-sans text-sm font-medium mb-1">Send me</legend>
        {ALERT_TOPICS.map((t) => (
          <label key={t.id} className="flex items-start gap-2.5 p-2.5 border border-gray-200 rounded-sm cursor-pointer hover:bg-gray-50">
            <input
              type="checkbox"
              className="mt-1 accent-[var(--primary)]"
              checked={topics.includes(t.id)}
              onChange={(e) => setTopics((s) => (e.target.checked ? [...s, t.id] : s.filter((x) => x !== t.id)))}
            />
            <span className="font-sans">
              <span className="block text-sm text-gray-800">{t.label}</span>
              <span className="block text-xs text-gray-500">{t.desc}</span>
            </span>
          </label>
        ))}
        {custom.map((t) => (
          <p key={t} className="font-sans text-xs text-gray-600 bg-accent/10 border border-accent/30 rounded-sm px-2.5 py-2">
            Includes: citation alerts for this article
          </p>
        ))}
      </fieldset>
      <FormError message={error} />
      <Button type="submit" disabled={busy || topics.length === 0} className="w-full font-sans bg-primary rounded-sm">
        {busy && <Loader2 className="w-4 h-4 mr-2 animate-spin" />}
        Subscribe
      </Button>
    </form>
  );
}

/* ------------------------------------------------------------------ */
/* Cite / export citations                                             */
/* ------------------------------------------------------------------ */
export function CiteDialog({ articles, onOpenChange }: { articles: Article[] | null; onOpenChange: (open: boolean) => void }) {
  if (!articles) return null;
  return <CiteDialogOpen articles={articles} onOpenChange={onOpenChange} />;
}

function CiteDialogOpen({ articles, onOpenChange }: { articles: Article[]; onOpenChange: (open: boolean) => void }) {
  const multiple = articles.length > 1;
  const formats = multiple ? CITATION_FORMATS.filter((f) => f.file) : CITATION_FORMATS;
  const [format, setFormat] = useState<CitationFormat>(multiple ? "bibtex" : "apa");
  const meta = CITATION_FORMATS.find((f) => f.id === format)!;
  const text = multiple
    ? formatCitations(articles, format as "bibtex" | "ris" | "endnote")
    : formatCitation(articles[0], format);

  const filename = meta.file
    ? multiple
      ? `JER-citations-${articles.length}.${meta.file.ext}`
      : citationFilename(articles[0], meta.file.ext)
    : citationFilename(articles[0], "txt");

  return (
    <Dialog open onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-2xl rounded-sm">
        <DialogHeader>
          <DialogTitle className="font-serif text-2xl text-primary">
            {multiple ? `Export ${articles.length} citations` : "Cite this article"}
          </DialogTitle>
          <DialogDescription className="font-serif line-clamp-2">
            {multiple ? "Download the selected articles for your reference manager." : articles[0].title}
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-wrap gap-1.5" role="tablist" aria-label="Citation format">
          {formats.map((f) => (
            <button
              key={f.id}
              role="tab"
              aria-selected={format === f.id}
              onClick={() => setFormat(f.id)}
              className={`font-sans text-xs px-3 py-1.5 rounded-sm border ${
                format === f.id ? "bg-primary text-white border-primary" : "border-gray-300 text-gray-700 hover:border-accent"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>
        <pre className={`bg-gray-50 border border-gray-200 border-l-4 border-l-accent rounded-sm p-3 text-gray-800 whitespace-pre-wrap break-words max-h-72 overflow-auto ${meta.file ? "font-mono text-xs" : "font-serif text-sm"}`}>
          {text}
        </pre>
        <div className="flex flex-wrap gap-2 justify-end">
          <Button
            variant="outline"
            className="font-sans rounded-sm"
            onClick={async () => toast({ title: (await copyText(text)) ? "Citation copied to clipboard" : "Copy failed" })}
          >
            <Copy className="w-4 h-4 mr-1.5" /> Copy
          </Button>
          <Button
            className="font-sans bg-primary rounded-sm"
            onClick={() => downloadText(text, filename, meta.file?.type)}
          >
            <Download className="w-4 h-4 mr-1.5" /> Download {meta.file ? `.${meta.file.ext}` : ".txt"}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}

/* ------------------------------------------------------------------ */
/* Share                                                               */
/* ------------------------------------------------------------------ */
export function ShareDialog({ article, onOpenChange }: { article: Article | null; onOpenChange: (open: boolean) => void }) {
  if (!article) return null;
  const url = routeUrl("article", { articleId: article.id });
  const doiLink = doiUrl(article.doi);
  const t = encodeURIComponent(article.title);
  const u = encodeURIComponent(url);
  const targets = [
    { label: "Email", icon: Mail, href: `mailto:?subject=${t}&body=${encodeURIComponent(`${article.title}\n\nJournal of Economic Research, Vol. ${article.volume}, No. ${article.issue}\n${url}`)}` },
    { label: "X / Twitter", icon: Twitter, href: `https://twitter.com/intent/tweet?text=${t}&url=${u}` },
    { label: "LinkedIn", icon: Linkedin, href: `https://www.linkedin.com/sharing/share-offsite/?url=${u}` },
    { label: "Facebook", icon: Facebook, href: `https://www.facebook.com/sharer/sharer.php?u=${u}` },
  ];

  return (
    <Dialog open onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md rounded-sm">
        <DialogHeader>
          <DialogTitle className="font-serif text-2xl text-primary">Share this article</DialogTitle>
          <DialogDescription className="font-serif line-clamp-2">{article.title}</DialogDescription>
        </DialogHeader>
        <div className="grid grid-cols-2 gap-2">
          {targets.map(({ label, icon: Icon, href }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("mailto") ? undefined : "_blank"}
              rel="noopener noreferrer"
              className="flex items-center gap-2 border border-gray-200 rounded-sm px-3 py-2.5 font-sans text-sm text-gray-700 hover:border-accent hover:text-primary"
            >
              <Icon className="w-4 h-4 text-accent" /> {label}
            </a>
          ))}
        </div>
        {[["Article link", url], ["DOI link (opens the PDF)", doiLink]].map(([label, value]) => (
          <div key={label}>
            <Label className="font-sans text-xs text-gray-500">{label}</Label>
            <div className="flex gap-2 mt-1">
              <Input readOnly value={value} className="font-mono text-xs" onFocus={(e) => e.currentTarget.select()} />
              <Button
                variant="outline"
                className="rounded-sm"
                aria-label={`Copy ${label}`}
                onClick={async () => toast({ title: (await copyText(value)) ? `${label} copied` : "Copy failed" })}
              >
                <Link2 className="w-4 h-4" />
              </Button>
            </div>
          </div>
        ))}
      </DialogContent>
    </Dialog>
  );
}
