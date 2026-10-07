"use client";

import { useEffect, useState } from "react";
import { ARTICLES } from "@/data/journal";
import { useNav } from "../nav-context";
import { api, useSession } from "../session";
import { ArticleListItem } from "../article-components";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { toast } from "@/hooks/use-toast";
import { Bookmark, FileText, User, Bell, LogOut, Send, Loader2, Download, Trash2 } from "lucide-react";

type SubmissionRow = {
  id: string;
  reference: string;
  status: "draft" | "submitted";
  title: string;
  articleType: string | null;
  fileName: string | null;
  createdAt: string;
  updatedAt: string;
};

const TABS = [
  { id: "saved", label: "Saved Articles", icon: Bookmark },
  { id: "submissions", label: "My Submissions", icon: FileText },
  { id: "profile", label: "Profile & Alerts", icon: User },
] as const;

const TYPE_LABEL: Record<string, string> = {
  research: "Research Article",
  review: "Review Article",
  short: "Short Communication",
  editorial: "Editorial",
};

export function AccountPage() {
  const { navigate, params } = useNav();
  const { user, ready, saved, signOut, openAuth, openCite, toggleSave } = useSession();
  const tab = TABS.some((t) => t.id === params.tab) ? params.tab : "saved";

  if (!ready) {
    return <div className="container mx-auto px-4 py-24 text-center"><Loader2 className="w-6 h-6 animate-spin mx-auto text-accent" /></div>;
  }

  if (!user) {
    return (
      <div className="container mx-auto px-4 py-24 text-center max-w-lg">
        <User className="w-12 h-12 text-accent mx-auto mb-4" />
        <h1 className="font-serif text-3xl font-bold text-primary mb-2">My Account</h1>
        <p className="font-serif text-base text-gray-700 mb-6">
          Sign in to see your saved articles, track manuscript submissions and manage email alerts.
        </p>
        <div className="flex justify-center gap-3">
          <Button onClick={() => openAuth("signin")} className="font-sans bg-primary rounded-sm">Sign In</Button>
          <Button onClick={() => openAuth("register")} variant="outline" className="font-sans rounded-sm">Create Account</Button>
        </div>
      </div>
    );
  }

  const savedArticles = saved.map((id) => ARTICLES.find((a) => a.id === id)).filter((a): a is (typeof ARTICLES)[number] => !!a);

  return (
    <div>
      <section className="bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 py-10 flex flex-wrap items-end justify-between gap-4">
          <div>
            <div className="font-sans text-xs uppercase tracking-widest text-accent mb-2">My Account</div>
            <h1 className="font-serif text-3xl sm:text-4xl font-bold">{user.name}</h1>
            <p className="font-sans text-sm opacity-80 mt-1">{user.email}{user.affiliation ? ` · ${user.affiliation}` : ""}</p>
          </div>
          <Button
            variant="outline"
            onClick={async () => { await signOut(); navigate("home"); }}
            className="font-sans border-white/40 text-white bg-transparent hover:bg-white/10 rounded-sm"
          >
            <LogOut className="w-4 h-4 mr-2" /> Sign out
          </Button>
        </div>
      </section>

      <div className="border-b border-gray-200 bg-gray-50">
        <div className="container mx-auto px-4 flex overflow-x-auto" role="tablist">
          {TABS.map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              role="tab"
              aria-selected={tab === id}
              onClick={() => navigate("account", { params: { tab: id } })}
              className={`flex items-center gap-2 px-5 py-3.5 font-sans text-sm whitespace-nowrap border-b-[3px] ${
                tab === id ? "border-accent text-primary font-semibold bg-white" : "border-transparent text-gray-600 hover:text-primary"
              }`}
            >
              <Icon className="w-4 h-4" /> {label}
              {id === "saved" && <Badge variant="secondary" className="text-[10px]">{saved.length}</Badge>}
            </button>
          ))}
        </div>
      </div>

      <section className="container mx-auto px-4 py-10">
        {tab === "saved" && (
          savedArticles.length === 0 ? (
            <Empty
              icon={Bookmark}
              title="No saved articles yet"
              text="Use the bookmark button on any article to add it to your library."
              action={<Button onClick={() => navigate("current-issue")} className="font-sans bg-primary rounded-sm">Browse the current issue</Button>}
            />
          ) : (
            <>
              <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                <p className="font-sans text-sm text-gray-600">{savedArticles.length} saved article{savedArticles.length === 1 ? "" : "s"}</p>
                <Button variant="outline" size="sm" onClick={() => openCite(savedArticles)} className="font-sans rounded-sm">
                  <Download className="w-4 h-4 mr-1.5" /> Export all citations
                </Button>
              </div>
              <div className="bg-white border border-gray-200 rounded-sm divide-y divide-gray-200">
                {savedArticles.map((a) => (
                  <div key={a.id} className="relative pr-12">
                    <ArticleListItem article={a} />
                    <button
                      onClick={() => toggleSave(a.id)}
                      aria-label="Remove from library"
                      className="absolute top-4 right-3 p-2 text-gray-400 hover:text-destructive"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            </>
          )
        )}

        {tab === "submissions" && <SubmissionsTab />}
        {tab === "profile" && <ProfileTab />}
      </section>
    </div>
  );
}

function SubmissionsTab() {
  const { navigate } = useNav();
  const [rows, setRows] = useState<SubmissionRow[] | null>(null);

  useEffect(() => {
    api<{ submissions: SubmissionRow[] }>("/api/submissions")
      .then((d) => setRows(d.submissions))
      .catch(() => setRows([]));
  }, []);

  if (!rows) return <Loader2 className="w-6 h-6 animate-spin mx-auto text-accent" />;
  if (rows.length === 0) {
    return (
      <Empty
        icon={FileText}
        title="No submissions yet"
        text="Manuscripts you submit or save as drafts while signed in appear here."
        action={<Button onClick={() => navigate("submission")} className="font-sans bg-primary rounded-sm"><Send className="w-4 h-4 mr-2" />Submit a manuscript</Button>}
      />
    );
  }

  return (
    <div className="overflow-x-auto bg-white border border-gray-200 rounded-sm">
      <table className="w-full font-sans text-sm">
        <thead className="bg-gray-50 text-left text-xs uppercase tracking-wide text-gray-500">
          <tr>
            <th className="px-4 py-3">Reference</th>
            <th className="px-4 py-3">Title</th>
            <th className="px-4 py-3">Type</th>
            <th className="px-4 py-3">Status</th>
            <th className="px-4 py-3">Last updated</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {rows.map((r) => (
            <tr key={r.id}>
              <td className="px-4 py-3 font-mono text-xs text-primary whitespace-nowrap">{r.reference}</td>
              <td className="px-4 py-3 font-serif text-gray-800">
                {r.title}
                {r.fileName && <span className="block font-sans text-xs text-gray-500 mt-0.5">{r.fileName}</span>}
              </td>
              <td className="px-4 py-3 text-gray-600 whitespace-nowrap">{r.articleType ? TYPE_LABEL[r.articleType] ?? r.articleType : "—"}</td>
              <td className="px-4 py-3">
                <Badge className={r.status === "draft" ? "bg-gray-200 text-gray-700 hover:bg-gray-200" : "bg-accent text-white hover:bg-accent"}>
                  {r.status === "draft" ? "Draft" : "Under editorial review"}
                </Badge>
              </td>
              <td className="px-4 py-3 text-gray-600 whitespace-nowrap">
                {new Date(r.updatedAt).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" })}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function ProfileTab() {
  const { user, setUser, openAlerts } = useSession();
  const [busy, setBusy] = useState(false);
  const [topics, setTopics] = useState<string[] | null>(null);

  useEffect(() => {
    if (user) api<{ topics: string[] }>(`/api/alerts?email=${encodeURIComponent(user.email)}`).then((d) => setTopics(d.topics));
  }, [user]);

  if (!user) return null;

  async function save(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setBusy(true);
    try {
      const body = Object.fromEntries(new FormData(e.currentTarget));
      const { user: updated } = await api<{ user: typeof user }>("/api/auth/me", { method: "PATCH", body: JSON.stringify(body) });
      setUser(updated);
      toast({ title: "Profile updated" });
    } catch (err) {
      toast({ title: "Could not update profile", description: (err as Error).message, variant: "destructive" });
    } finally {
      setBusy(false);
    }
  }

  async function unsubscribe() {
    await api(`/api/alerts?email=${encodeURIComponent(user!.email)}`, { method: "DELETE" });
    setTopics([]);
    toast({ title: "Unsubscribed from all alerts" });
  }

  const labels: Record<string, string> = {
    "new-issue": "New issues",
    "online-first": "Online first articles",
    cfp: "Calls for papers",
    news: "Journal news",
  };

  return (
    <div className="grid lg:grid-cols-2 gap-8 max-w-5xl">
      <form onSubmit={save} className="bg-white border border-gray-200 rounded-sm p-6 space-y-4">
        <h2 className="font-serif text-xl font-bold text-primary">Profile</h2>
        <div>
          <Label htmlFor="p-name" className="font-sans text-sm">Full name</Label>
          <Input id="p-name" name="name" defaultValue={user.name} required className="mt-1.5 font-sans" />
        </div>
        <div>
          <Label htmlFor="p-aff" className="font-sans text-sm">Institution / affiliation</Label>
          <Input id="p-aff" name="affiliation" defaultValue={user.affiliation ?? ""} className="mt-1.5 font-sans" />
        </div>
        <div>
          <Label className="font-sans text-sm">Email</Label>
          <Input value={user.email} disabled className="mt-1.5 font-sans" />
        </div>
        <Button type="submit" disabled={busy} className="font-sans bg-primary rounded-sm">
          {busy && <Loader2 className="w-4 h-4 mr-2 animate-spin" />} Save changes
        </Button>
      </form>

      <div className="bg-white border border-gray-200 rounded-sm p-6">
        <h2 className="font-serif text-xl font-bold text-primary flex items-center gap-2"><Bell className="w-5 h-5 text-accent" /> Email Alerts</h2>
        <p className="font-sans text-sm text-gray-600 mt-1 mb-4">Alerts are sent to {user.email}.</p>
        {topics === null ? (
          <Loader2 className="w-5 h-5 animate-spin text-accent" />
        ) : topics.length === 0 ? (
          <p className="font-sans text-sm text-gray-500 mb-4">You are not subscribed to any alerts.</p>
        ) : (
          <ul className="space-y-1.5 mb-4 font-sans text-sm">
            {topics.map((t) => (
              <li key={t} className="flex items-center gap-2 text-gray-700">
                <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                {labels[t] ?? (t.startsWith("citation:")
                  ? `Citation alert: ${ARTICLES.find((a) => a.id === t.slice(9))?.title ?? t.slice(9)}`
                  : t)}
              </li>
            ))}
          </ul>
        )}
        <div className="flex flex-wrap gap-2">
          <Button onClick={() => openAlerts(topics?.filter((t) => labels[t]) ?? ["new-issue"])} variant="outline" className="font-sans rounded-sm">
            Manage alerts
          </Button>
          {topics && topics.length > 0 && (
            <Button onClick={unsubscribe} variant="ghost" className="font-sans rounded-sm text-gray-600">Unsubscribe from all</Button>
          )}
        </div>
      </div>
    </div>
  );
}

function Empty({ icon: Icon, title, text, action }: { icon: React.ComponentType<{ className?: string }>; title: string; text: string; action: React.ReactNode }) {
  return (
    <div className="text-center py-16 bg-white border border-dashed border-gray-300 rounded-sm">
      <Icon className="w-10 h-10 text-gray-300 mx-auto mb-3" />
      <h2 className="font-serif text-xl font-semibold text-primary">{title}</h2>
      <p className="font-sans text-sm text-gray-600 mt-1 mb-5">{text}</p>
      {action}
    </div>
  );
}
