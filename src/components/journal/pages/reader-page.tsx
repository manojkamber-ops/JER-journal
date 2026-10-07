"use client";

import { Fragment, useEffect, useMemo, useRef, useState, type ReactNode } from "react";
import { ARTICLES, JOURNAL_INFO, type Article } from "@/data/journal";
import { ARTICLE_BODIES, exhibitTables, type BodyExhibits, type BodyFigure, type BodySection, type BodyTable } from "@/data/article-bodies";
import { figureSvg } from "@/lib/figures";
import { articlePdf } from "@/lib/pdf";
import { articleEpub, formatBytes } from "@/lib/epub";
import { institutionName, referenceLabel, referenceYear, splitCitations } from "@/lib/references";
import { downloadBlob } from "@/lib/download";
import { toast } from "@/hooks/use-toast";
import { useNav } from "../nav-context";
import { useSession } from "../session";
import { useArticleActions } from "../article-actions";
import { DoiLink } from "../doi-link";
import { SampleTag } from "../article-components";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Home,
  ChevronDown,
  ChevronUp,
  Check,
  Search,
  UserPlus,
  MoreHorizontal,
  Download,
  ChevronsLeft,
  ChevronsRight,
  Info,
  List,
  Image as ImageIcon,
  Link2,
  Quote,
  ExternalLink,
  X,
  HelpCircle,
  Minus,
  Plus,
  Bookmark,
  BookmarkCheck,
  Lock,
  Printer,
  Mail,
  Maximize,
  FileText,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/* Look & settings                                                     */
/* ------------------------------------------------------------------ */
const CHROME = "#2b2d31"; // top bar + side panel
const TEAL = "#0f6f8f"; // download button / active rail icon
const CYAN = "#3cc7ee"; // links on the dark panel
const SERIF = '"Times New Roman", Times, Georgia, serif';

type Theme = "light" | "sepia" | "dark";
type Settings = { size: number; font: "serif" | "sans"; theme: Theme };
const DEFAULTS: Settings = { size: 19, font: "serif", theme: "light" };
const SETTINGS_KEY = "jer-reader-settings";

const THEMES: Record<Theme, { page: string; text: string; muted: string; rule: string; label: string }> = {
  light: { page: "#ffffff", text: "#111111", muted: "#555555", rule: "#9a9a9a", label: "Light" },
  sepia: { page: "#f7f0e1", text: "#2f2418", muted: "#6f604c", rule: "#b9a988", label: "Sepia" },
  dark: { page: "#1f1f21", text: "#e8e8e8", muted: "#a5a5a5", rule: "#555555", label: "Dark" },
};

function loadSettings(): Settings {
  try {
    return { ...DEFAULTS, ...JSON.parse(localStorage.getItem(SETTINGS_KEY) ?? "{}") };
  } catch {
    return DEFAULTS;
  }
}

const KICKER: Record<Article["type"], string> = {
  Editorial: "EDITORIAL",
  "Research Article": "RESEARCH ARTICLE",
  "Review Article": "REVIEW ARTICLE",
  "Short Communication": "SHORT COMMUNICATION",
};

const monthYear = (iso: string) => new Date(iso).toLocaleDateString("en-GB", { month: "short", year: "numeric" });
const longMonth = (iso: string) => new Date(iso).toLocaleDateString("en-GB", { month: "long", year: "numeric" });
const stripNumber = (h: string) => h.replace(/^[\d.]+\s*/, "");
const escapeRegExp = (s: string) => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

type PanelMode = "details" | "contents" | "figures" | "references";

/* ------------------------------------------------------------------ */
/* Reader                                                              */
/* ------------------------------------------------------------------ */
export function ReaderPage({ articleId, defaultView = "epub" }: { articleId: string | null; defaultView?: "epub" | "pdf" }) {
  const { navigate, params } = useNav();
  const { openCite } = useSession();
  const article = ARTICLES.find((a) => a.id === articleId) ?? ARTICLES[0];
  const actions = useArticleActions(article);
  const body = ARTICLE_BODIES[article.id];
  // DOI links open the PDF view; the reader route defaults to EPUB
  const view: "epub" | "pdf" = (params.view ?? defaultView) === "pdf" ? "pdf" : "epub";
  const isEditorial = article.type === "Editorial";

  const [settings, setSettings] = useState<Settings>(loadSettings);
  const [panelOpen, setPanelOpen] = useState(() => params.panel === "relations" || (typeof window !== "undefined" && window.innerWidth >= 1024));
  const [mode, setMode] = useState<PanelMode>("details");
  const [detailsTab, setDetailsTab] = useState<"details" | "relations">(params.panel === "relations" ? "relations" : "details");
  const [allAuthors, setAllAuthors] = useState(false);
  const [textOpen, setTextOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [helpOpen, setHelpOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [hit, setHit] = useState(0);
  const [progress, setProgress] = useState(0);
  const [activeId, setActiveId] = useState(() => (article.type === "Editorial" ? "editorial" : "abstract"));
  const [realPdf, setRealPdf] = useState<{ url: string; size: number } | null>(null);
  const paneRef = useRef<HTMLDivElement>(null);
  const searchRef = useRef<HTMLInputElement>(null);
  const theme = THEMES[settings.theme];

  // Generated files (used unless a real PDF is published at /papers/<id>.pdf)
  const pdfBlob = useMemo(() => articlePdf(article), [article]);
  const epubBlob = useMemo(() => articleEpub(article), [article]);
  const pdfUrl = useMemo(() => URL.createObjectURL(pdfBlob), [pdfBlob]);
  useEffect(() => () => URL.revokeObjectURL(pdfUrl), [pdfUrl]);

  useEffect(() => {
    const url = `/papers/${article.id}.pdf`;
    fetch(url, { method: "HEAD" })
      .then((r) => {
        if (r.ok && (r.headers.get("content-type") ?? "").includes("pdf")) {
          setRealPdf({ url, size: Number(r.headers.get("content-length") ?? 0) });
        }
      })
      .catch(() => {});
  }, [article.id]);

  const update = (patch: Partial<Settings>) =>
    setSettings((s) => {
      const next = { ...s, ...patch };
      try {
        localStorage.setItem(SETTINGS_KEY, JSON.stringify(next));
      } catch {
        /* storage unavailable: settings last for this visit */
      }
      return next;
    });

  const setView = (v: "epub" | "pdf") =>
    navigate("reader", { articleId: article.id, params: v === "pdf" ? { view: "pdf" } : {} });

  const outline = useMemo(() => {
    const items: { id: string; label: string; level: number }[] = isEditorial ? [] : [{ id: "abstract", label: "Abstract", level: 0 }];
    for (const s of body ?? []) {
      items.push({ id: s.id, label: stripNumber(s.heading) || "Editorial", level: 0 });
      for (const sub of s.subsections ?? []) items.push({ id: sub.id, label: stripNumber(sub.heading), level: 1 });
    }
    if (!body) items.push({ id: "full-text", label: "Full text", level: 0 });
    if (article.acknowledgments) items.push({ id: "acknowledgments", label: "Acknowledgments", level: 0 });
    if (article.funding) items.push({ id: "funding", label: "Funding", level: 0 });
    if (article.dataAvailability) items.push({ id: "data-availability", label: "Data Availability Statement", level: 0 });
    if (article.references?.length) items.push({ id: "references", label: "References", level: 0 });
    return items;
  }, [article, body, isEditorial]);

  // Every table and figure in the paper, in reading order (for the Figures & Tables panel)
  const exhibits = (body ?? []).flatMap((s) =>
    [s, ...(s.subsections ?? [])].flatMap((x) => [
      ...exhibitTables(x).map((t) => ({ id: t.id, caption: t.caption, detail: `${t.rows.length} rows · ${t.columns.length} columns` })),
      ...(x.figures ?? []).map((f) => ({ id: f.id, caption: f.caption, detail: f.kind === "bar" ? "Bar chart" : "Line chart" })),
    ])
  );

  const related = useMemo(
    () =>
      ARTICLES.filter(
        (a) => a.id !== article.id && (a.keywords.some((k) => article.keywords.includes(k)) || a.jelCodes.some((c) => article.jelCodes.includes(c)))
      ).slice(0, 6),
    [article]
  );

  // Search: count matches in the highlighted text
  const hitCount = useMemo(() => {
    if (!query) return 0;
    const texts = [
      article.title,
      article.abstract,
      ...(body ?? []).flatMap((s) => [...s.paragraphs, ...(s.subsections ?? []).flatMap((x) => x.paragraphs)]),
      article.acknowledgments ?? "",
      article.funding ?? "",
      article.dataAvailability ?? "",
      ...(article.references ?? []).map((r) => r.text),
    ];
    const re = new RegExp(escapeRegExp(query), "gi");
    return texts.reduce((n, t) => n + (t.replace(/\[\d+\]/g, " ").match(re)?.length ?? 0), 0);
  }, [query, article, body]);

  useEffect(() => {
    const marks = paneRef.current?.querySelectorAll<HTMLElement>("mark[data-hit]") ?? [];
    marks.forEach((m, i) => m.classList.toggle("reader-hit-active", i === hit));
    marks[hit]?.scrollIntoView({ block: "center", behavior: "smooth" });
  }, [hit, query]);

  useEffect(() => {
    if (searchOpen) searchRef.current?.focus();
  }, [searchOpen]);

  // Esc closes the open popover, then the reader
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== "Escape") return;
      if (textOpen || helpOpen) {
        setTextOpen(false);
        setHelpOpen(false);
      } else if (searchOpen) {
        setSearchOpen(false);
        setQuery("");
      } else if (!document.fullscreenElement) navigate("article", { articleId: article.id });
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  });

  const isNarrow = () => window.innerWidth < 1024;

  function openMode(m: PanelMode) {
    if (panelOpen && mode === m) setPanelOpen(false);
    else {
      setMode(m);
      setPanelOpen(true);
    }
  }

  function scrollTo(id: string) {
    if (view === "pdf") setView("epub");
    requestAnimationFrame(() => {
      const pane = paneRef.current;
      const el = document.getElementById(`r-${id}`);
      if (pane && el) pane.scrollTo({ top: el.offsetTop - 32, behavior: "smooth" });
    });
    if (isNarrow()) setPanelOpen(false);
  }

  function goToRef(n: number) {
    scrollTo(`ref-${n}`);
    const el = document.getElementById(`r-ref-${n}`);
    el?.classList.add("reader-flash");
    setTimeout(() => el?.classList.remove("reader-flash"), 1800);
  }

  function onScroll() {
    const pane = paneRef.current;
    if (!pane) return;
    const max = pane.scrollHeight - pane.clientHeight;
    setProgress(max > 0 ? Math.min(100, (pane.scrollTop / max) * 100) : 100);
    let current = outline[0]?.id ?? "";
    for (const o of outline) {
      const el = document.getElementById(`r-${o.id}`);
      if (el && el.offsetTop - 120 <= pane.scrollTop) current = o.id;
    }
    setActiveId(current);
  }

  const pdfName = `JER-${article.doi.split("/").pop()}.pdf`;
  const epubName = `JER-${article.doi.split("/").pop()}.epub`;

  function downloadPdf() {
    if (realPdf) {
      const a = Object.assign(document.createElement("a"), { href: realPdf.url, download: pdfName });
      a.click();
    } else downloadBlob(pdfBlob, pdfName);
    toast({ title: "PDF downloaded", description: article.title });
  }

  function downloadEpub() {
    downloadBlob(epubBlob, epubName);
    toast({ title: "EPUB downloaded", description: "Open it in Apple Books, Google Play Books, Calibre or any e-reader." });
  }

  /* ---------- text helpers ---------- */
  const mark = (text: string): ReactNode => {
    if (!query) return text;
    return text.split(new RegExp(`(${escapeRegExp(query)})`, "gi")).map((p, i) =>
      p.toLowerCase() === query.toLowerCase() ? (
        <mark key={i} data-hit className="reader-hit">
          {p}
        </mark>
      ) : (
        <Fragment key={i}>{p}</Fragment>
      )
    );
  };

  const citeButton = (n: number, label: string) => {
    const ref = article.references?.find((r) => r.number === n);
    return (
      <button key={n} onClick={() => goToRef(n)} title={ref?.text} className="underline underline-offset-2 decoration-1 hover:opacity-70">
        {label}
      </button>
    );
  };

  const rich = (text: string): ReactNode =>
    splitCitations(text).map((part, i) => {
      if (typeof part === "string")
        return (
          <Fragment key={i}>
            {part.split(/(https?:\/\/[^\s)]+[^\s).,;])/g).map((seg, k) =>
              /^https?:\/\//.test(seg) ? (
                <a key={k} href={seg} target="_blank" rel="noopener noreferrer" className="underline break-all">
                  {seg}
                </a>
              ) : (
                <Fragment key={k}>{mark(seg)}</Fragment>
              )
            )}
          </Fragment>
        );
      const refs = part.refs.map((n) => ({ n, ref: article.references?.find((r) => r.number === n) }));
      if (part.narrative) {
        const { n, ref } = refs[0];
        return <Fragment key={i}>({citeButton(n, ref ? referenceYear(ref) : String(n))})</Fragment>;
      }
      return (
        <Fragment key={i}>
          (
          {refs.map(({ n, ref }, j) => (
            <Fragment key={n}>
              {j > 0 && "; "}
              {citeButton(n, ref ? referenceLabel(ref) : String(n))}
            </Fragment>
          ))}
          )
        </Fragment>
      );
    });

  const authorsWithInst = (article.structuredAuthors ?? article.authors.map((a) => ({ name: a.name, affiliationIds: [] as string[] }))).map(
    (au, i) => ({
      name: au.name,
      institution:
        institutionName(article.affiliations?.find((af) => au.affiliationIds.includes(af.id))) ?? article.authors[i]?.affiliation.split(",")[0] ?? "",
    })
  );
  const authorNames = article.authors.map((a) => a.name);
  const fontFamily = settings.font === "serif" ? SERIF : 'var(--font-source-sans), "Source Sans Pro", Arial, sans-serif';

  /* ---------- small UI pieces ---------- */
  const barIcon = (label: string, icon: ReactNode, onClick: () => void, active = false) => (
    <button
      onClick={onClick}
      aria-label={label}
      title={label}
      aria-pressed={active}
      className={`w-10 h-10 flex items-center justify-center rounded-sm ${active ? "text-white bg-white/10" : "text-[#d6d6d6] hover:text-white"}`}
    >
      {icon}
    </button>
  );

  const railIcon = (m: PanelMode, label: string, icon: ReactNode) => {
    const active = panelOpen && mode === m;
    return (
      <button
        onClick={() => openMode(m)}
        aria-label={label}
        title={label}
        aria-pressed={active}
        className="w-9 h-9 flex items-center justify-center rounded-full"
        style={active ? { color: TEAL, boxShadow: `inset 0 0 0 2.5px ${TEAL}` } : { color: "#555" }}
      >
        {icon}
      </button>
    );
  };

  return (
    <div className="fixed inset-0 z-40 flex flex-col bg-white">
      {/* =================== Top bar =================== */}
      <header className="relative flex-shrink-0 h-16 flex items-center px-3 sm:px-5 print:hidden" style={{ background: CHROME }}>
        <div className="flex-1 flex items-center">
          {barIcon("Journal home", <Home className="w-6 h-6" fill="currentColor" strokeWidth={1.5} />, () => navigate("home"))}
        </div>

        {/* Centre: format switch + text settings */}
        <div className="flex items-center gap-3">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="h-8 px-2 flex items-center gap-1 bg-[#9b9b9b] hover:bg-[#adadad] text-[#2b2d31] text-[13px] font-bold rounded-[2px]">
                {view === "pdf" ? "PDF" : "EPUB"} <ChevronDown className="w-4 h-4" strokeWidth={3} />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="center" className="w-44 rounded-none p-0">
              {(["epub", "pdf"] as const).map((v) => (
                <DropdownMenuItem key={v} onClick={() => setView(v)} className="cursor-pointer rounded-none px-4 py-2.5 text-[14px] font-semibold">
                  <span className="w-4">{view === v && <Check className="w-4 h-4" />}</span>
                  {v === "epub" ? "EPUB (reflowable)" : "PDF (page view)"}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
          <span className="w-px h-7 bg-white/25" />
          <div className="relative">
            <button
              onClick={() => setTextOpen((o) => !o)}
              aria-label="Text settings"
              title="Text settings"
              aria-expanded={textOpen}
              className={`w-10 h-10 flex items-center justify-center ${textOpen ? "text-white" : "text-[#d6d6d6] hover:text-white"}`}
            >
              <span className="font-bold leading-none"><span className="text-[15px]">T</span><span className="text-[22px]">T</span></span>
            </button>
            {textOpen && (
              <div className="absolute left-1/2 -translate-x-1/2 top-12 w-72 bg-white text-[#212121] shadow-xl border-t-4 p-4 space-y-4 z-20" style={{ borderTopColor: TEAL }}>
                <div>
                  <p className="text-[12px] font-bold uppercase tracking-wide text-[#616161] mb-2">Text size</p>
                  <div className="flex items-center gap-2">
                    <button onClick={() => update({ size: Math.max(14, settings.size - 1) })} className="w-9 h-9 border border-[#c9c9c9] flex items-center justify-center" aria-label="Smaller text"><Minus className="w-4 h-4" /></button>
                    <div className="flex-1 h-1.5 bg-[#e1e1e1] relative"><div className="absolute inset-y-0 left-0" style={{ width: `${((settings.size - 14) / 12) * 100}%`, background: TEAL }} /></div>
                    <button onClick={() => update({ size: Math.min(26, settings.size + 1) })} className="w-9 h-9 border border-[#c9c9c9] flex items-center justify-center" aria-label="Larger text"><Plus className="w-4 h-4" /></button>
                  </div>
                </div>
                <div>
                  <p className="text-[12px] font-bold uppercase tracking-wide text-[#616161] mb-2">Font</p>
                  <div className="grid grid-cols-2 gap-2">
                    {(["serif", "sans"] as const).map((f) => (
                      <button key={f} onClick={() => update({ font: f })} aria-pressed={settings.font === f}
                        className={`h-9 border text-[15px] ${settings.font === f ? "font-bold" : "border-[#c9c9c9]"}`}
                        style={{ fontFamily: f === "serif" ? SERIF : "var(--font-source-sans)", ...(settings.font === f ? { borderColor: TEAL, color: TEAL } : {}) }}>
                        {f === "serif" ? "Times" : "Sans-serif"}
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-[12px] font-bold uppercase tracking-wide text-[#616161] mb-2">Page colour</p>
                  <div className="grid grid-cols-3 gap-2">
                    {(Object.keys(THEMES) as Theme[]).map((t) => (
                      <button key={t} onClick={() => update({ theme: t })} aria-pressed={settings.theme === t}
                        className="h-10 border-2 text-[13px] font-semibold"
                        style={{ background: THEMES[t].page, color: THEMES[t].text, borderColor: settings.theme === t ? TEAL : "#c9c9c9" }}>
                        {THEMES[t].label}
                      </button>
                    ))}
                  </div>
                </div>
                <button onClick={() => update(DEFAULTS)} className="text-[13px] font-semibold hover:underline" style={{ color: TEAL }}>Reset</button>
              </div>
            )}
          </div>
        </div>

        {/* Right: search, share, more, download */}
        <div className="flex-1 flex items-center justify-end gap-1 sm:gap-2">
          {barIcon("Search in article", <Search className="w-6 h-6" />, () => {
            if (view === "pdf") setView("epub");
            setSearchOpen((o) => !o);
          }, searchOpen)}
          <span className="hidden sm:block">{barIcon("Share", <UserPlus className="w-6 h-6" />, actions.share)}</span>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button aria-label="More options" title="More options" className="w-10 h-10 flex items-center justify-center text-[#d6d6d6] hover:text-white">
                <MoreHorizontal className="w-6 h-6" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56 rounded-none">
              <DropdownMenuItem onClick={actions.cite} className="cursor-pointer"><Quote className="w-4 h-4" /> Cite this article</DropdownMenuItem>
              <DropdownMenuItem onClick={actions.toggleSave} className="cursor-pointer">
                {actions.saved ? <BookmarkCheck className="w-4 h-4" /> : <Bookmark className="w-4 h-4" />} {actions.saved ? "Remove from library" : "Save to library"}
              </DropdownMenuItem>
              <DropdownMenuItem onClick={actions.share} className="cursor-pointer sm:hidden"><UserPlus className="w-4 h-4" /> Share</DropdownMenuItem>
              <DropdownMenuItem onClick={actions.email} className="cursor-pointer"><Mail className="w-4 h-4" /> Email a link</DropdownMenuItem>
              <DropdownMenuItem onClick={() => (view === "pdf" ? window.open(realPdf?.url ?? pdfUrl, "_blank") : window.print())} className="cursor-pointer">
                <Printer className="w-4 h-4" /> Print
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => document.documentElement.requestFullscreen?.()} className="cursor-pointer"><Maximize className="w-4 h-4" /> Full screen</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={() => navigate("article", { articleId: article.id })} className="cursor-pointer"><FileText className="w-4 h-4" /> View article page</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <span className="hidden sm:block w-px h-7 bg-white/25 mx-1" />
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button aria-label="Download" title="Download" className="w-11 h-11 rounded-full flex items-center justify-center text-white ring-2 ring-white/10 hover:brightness-110" style={{ background: TEAL }}>
                <Download className="w-6 h-6" strokeWidth={2.6} />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" sideOffset={14} className="w-80 rounded-none p-0 border-0 border-t-4 shadow-xl" style={{ borderTopColor: TEAL }}>
              <DropdownMenuLabel className="px-6 pt-5 pb-3 text-[15px] font-bold uppercase tracking-wide text-[#555]">Download</DropdownMenuLabel>
              <DropdownMenuItem onClick={downloadPdf} className="cursor-pointer rounded-none px-6 py-4 text-[16px] border-b border-[#e1e1e1]">
                <span className="font-bold text-[#555]">PDF</span>
                <span className="text-[#555]">• {formatBytes(realPdf?.size || pdfBlob.size)}</span>
              </DropdownMenuItem>
              <DropdownMenuItem onClick={downloadEpub} className="cursor-pointer rounded-none px-6 py-4 text-[16px]">
                <span className="font-bold text-[#555]">EPUB</span>
                <span className="text-[#555]">• {formatBytes(epubBlob.size)}</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {/* Reading progress */}
        <div className="absolute left-0 bottom-0 h-[3px]" style={{ width: `${view === "pdf" ? 0 : progress}%`, background: "#1ba7cf" }} aria-hidden />
      </header>

      {/* Search bar */}
      {searchOpen && (
        <div className="absolute right-4 top-[68px] z-30 w-[min(420px,calc(100vw-2rem))] bg-white shadow-xl border-t-4 p-3 flex items-center gap-2 print:hidden" style={{ borderTopColor: TEAL }}>
          <input
            ref={searchRef}
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setHit(0);
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter" && hitCount) setHit((h) => (e.shiftKey ? (h - 1 + hitCount) % hitCount : (h + 1) % hitCount));
            }}
            placeholder="Search in this article"
            aria-label="Search in this article"
            className="flex-1 min-w-0 h-9 px-3 border border-[#c9c9c9] text-[15px] text-[#212121] focus:outline-none"
          />
          <span className="text-[13px] text-[#616161] w-16 text-center">{query ? (hitCount ? `${hit + 1}/${hitCount}` : "0/0") : ""}</span>
          <button disabled={!hitCount} onClick={() => setHit((h) => (h - 1 + hitCount) % hitCount)} aria-label="Previous match" className="w-8 h-8 flex items-center justify-center disabled:text-[#c9c9c9]"><ChevronUp className="w-5 h-5" /></button>
          <button disabled={!hitCount} onClick={() => setHit((h) => (h + 1) % hitCount)} aria-label="Next match" className="w-8 h-8 flex items-center justify-center disabled:text-[#c9c9c9]"><ChevronDown className="w-5 h-5" /></button>
          <button onClick={() => { setSearchOpen(false); setQuery(""); }} aria-label="Close search" className="w-8 h-8 flex items-center justify-center text-[#616161]"><X className="w-5 h-5" /></button>
        </div>
      )}

      <div className="flex-1 min-h-0 flex relative">
        {/* =================== Dark side panel =================== */}
        {panelOpen && (
          <>
            <div className="lg:hidden absolute inset-0 z-10 bg-black/40" onClick={() => setPanelOpen(false)} />
            <aside
              className="absolute lg:static z-20 inset-y-0 left-0 w-[min(88vw,460px)] lg:w-[clamp(340px,31vw,560px)] overflow-y-auto text-white print:hidden"
              style={{ background: CHROME }}
            >
              <div className="px-6 sm:px-10 py-10">
                {mode === "details" && (
                  <>
                    <div className="grid grid-cols-2 border border-white">
                      {(["details", "relations"] as const).map((t) => (
                        <button
                          key={t}
                          onClick={() => setDetailsTab(t)}
                          aria-pressed={detailsTab === t}
                          className={`h-12 text-[15px] font-bold uppercase tracking-wide ${detailsTab === t ? "bg-white text-[#2b2d31]" : "text-white/75 hover:text-white"}`}
                        >
                          {t}
                        </button>
                      ))}
                    </div>

                    {detailsTab === "details" ? (
                      <>
                        <div className="mt-10 flex gap-8">
                          <button onClick={() => navigate("current-issue", { params: { volume: String(article.volume), issue: String(article.issue) } })} className="flex-shrink-0">
                            <img src="/jer-cover.svg" alt="Issue cover" className="w-[124px] sm:w-[150px] border border-white/20" width={150} height={205} />
                          </button>
                          <div className="text-[17px] leading-[1.75]">
                            <button
                              onClick={() => navigate("current-issue", { params: { volume: String(article.volume), issue: String(article.issue) } })}
                              className="text-left font-semibold underline underline-offset-4 decoration-1 hover:opacity-80"
                            >
                              {JOURNAL_INFO.title} Volume {article.volume}, Issue {article.issue}: JER {article.volume}.{article.issue} Full Issue
                            </button>
                            <p className="mt-3 text-white/60">{monthYear(article.published)}</p>
                            <p className="mt-1 text-white/60">Pages&nbsp; {article.pages.replace("–", "-")}</p>
                          </div>
                        </div>

                        <p className="mt-12 text-[15px] font-bold uppercase tracking-wide text-white/60">Article</p>
                        <h2 className="mt-2 text-[26px] leading-snug">{article.title}</h2>
                        <button onClick={() => navigate("article", { articleId: article.id })} className="mt-6 text-[18px] font-semibold hover:underline" style={{ color: CYAN }}>
                          View article page
                        </button>

                        <p className="mt-6 text-[17px] leading-relaxed text-white/60">
                          {allAuthors || authorNames.length <= 3 ? (
                            authorNames.join(", ").replace(/, ([^,]*)$/, " and $1")
                          ) : (
                            <>
                              {authorNames.slice(0, 3).join(", ")} and{" "}
                              <button onClick={() => setAllAuthors(true)} className="font-semibold hover:underline" style={{ color: CYAN }}>
                                …See all authors
                              </button>
                            </>
                          )}
                        </p>
                        <button
                          onClick={() => openCite(article)}
                          className="mt-4 h-10 px-3 inline-flex items-center gap-2 bg-[#9b9b9b] hover:bg-[#adadad] text-[#2b2d31] text-[15px] font-bold uppercase"
                        >
                          <Quote className="w-4 h-4" fill="currentColor" /> Cite
                        </button>

                        <p className="mt-6 text-[16px] text-white/60">© {JOURNAL_INFO.title}</p>
                        <DoiLink doi={article.doi} className="inline-flex items-center gap-2 text-[16px] font-semibold hover:underline" style={{ color: CYAN }}>
                          https://doi.org/{article.doi} <FileText className="w-4 h-4" />
                        </DoiLink>

                        <dl className="mt-7 pt-7 border-t border-white/20 grid grid-cols-[130px_1fr] gap-y-4 text-[18px]">
                          {[
                            ["Publisher", JOURNAL_INFO.publisher],
                            ["ISSN", JOURNAL_INFO.issnPrint],
                            ["eISSN", JOURNAL_INFO.issnOnline],
                            ["Print", longMonth(article.published)],
                            ["Pages", article.pages.replace("–", " - ")],
                            ["Type", article.type],
                            ["Licence", "CC BY-NC 4.0"],
                          ].map(([k, v]) => (
                            <Fragment key={k}>
                              <dt className="text-white/60">{k}</dt>
                              <dd className="font-semibold">{v}</dd>
                            </Fragment>
                          ))}
                        </dl>
                      </>
                    ) : (
                      <div className="mt-10">
                        <p className="text-[15px] font-bold uppercase tracking-wide text-white/60">Related articles</p>
                        {related.length === 0 && <p className="mt-4 text-white/60">No related articles yet.</p>}
                        <ul className="mt-4 divide-y divide-white/15">
                          {related.map((r) => (
                            <li key={r.id} className="py-4">
                              <p className="text-[12px] uppercase tracking-wide text-white/50">{r.type} · Vol. {r.volume}, No. {r.issue}</p>
                              <button onClick={() => navigate("reader", { articleId: r.id })} className="mt-1 text-left text-[17px] leading-snug hover:underline">
                                {r.title}
                              </button>
                              <p className="mt-1 text-[14px] text-white/60">{r.authors.map((a) => a.name).join(", ")}</p>
                            </li>
                          ))}
                        </ul>
                        <p className="mt-8 text-[15px] font-bold uppercase tracking-wide text-white/60">Citations</p>
                        <p className="mt-2 text-[17px]">Cited by {article.citations} articles</p>
                        <button onClick={actions.trackCitations} className="mt-2 text-[16px] font-semibold hover:underline" style={{ color: CYAN }}>
                          Get citation alerts
                        </button>
                      </div>
                    )}
                  </>
                )}

                {mode === "contents" && (
                  <nav aria-label="Article contents">
                    <p className="text-[15px] font-bold uppercase tracking-wide text-white/60 mb-4">Contents</p>
                    {outline.map((o) => (
                      <button
                        key={o.id}
                        onClick={() => scrollTo(o.id)}
                        className={`block w-full text-left py-2.5 border-l-[3px] leading-snug ${o.level ? "pl-8 text-[15px]" : "pl-4 text-[17px]"}`}
                        style={{ borderColor: activeId === o.id && view === "epub" ? CYAN : "transparent", color: activeId === o.id && view === "epub" ? CYAN : "#fff" }}
                      >
                        {o.label}
                      </button>
                    ))}
                  </nav>
                )}

                {mode === "figures" && (
                  <div>
                    <p className="text-[15px] font-bold uppercase tracking-wide text-white/60 mb-4">Figures &amp; Tables</p>
                    {exhibits.length === 0 ? (
                      <p className="text-white/60 text-[16px]">This article has no figures or tables.</p>
                    ) : (
                      exhibits.map((t) => (
                        <button key={t.id} onClick={() => scrollTo(t.id)} className="block w-full text-left py-3 border-b border-white/15 hover:opacity-80">
                          <span className="text-[16px] font-semibold">{t.caption}</span>
                          <span className="block text-[13px] text-white/60 mt-1">{t.detail}</span>
                        </button>
                      ))
                    )}
                  </div>
                )}

                {mode === "references" && (
                  <div>
                    <p className="text-[15px] font-bold uppercase tracking-wide text-white/60 mb-4">References</p>
                    {!article.references?.length ? (
                      <p className="text-white/60 text-[16px]">No references are listed for this article.</p>
                    ) : (
                      <ol className="space-y-3">
                        {article.references.map((r) => (
                          <li key={r.number} className="text-[15px] leading-snug">
                            <button onClick={() => goToRef(r.number)} className="text-left hover:underline">
                              <span className="font-bold" style={{ color: CYAN }}>{referenceLabel(r)}</span>
                              <span className="block text-white/70 mt-0.5">{r.text}</span>
                            </button>
                            <span className="flex flex-wrap gap-x-4">
                              {r.articleId && (
                                <button onClick={() => navigate("reader", { articleId: r.articleId })} className="text-[13px] mt-1 font-semibold hover:underline" style={{ color: CYAN }}>
                                  Read in JER →
                                </button>
                              )}
                              {r.doi && (
                                <DoiLink doi={r.doi} className="inline-flex items-center gap-1 text-[13px] mt-1 hover:underline" style={{ color: CYAN }}>
                                  doi:{r.doi} <ExternalLink className="w-3 h-3" />
                                </DoiLink>
                              )}
                            </span>
                          </li>
                        ))}
                      </ol>
                    )}
                  </div>
                )}
              </div>
            </aside>
          </>
        )}

        {/* =================== Reading area =================== */}
        <div className="relative flex-1 min-w-0 flex" style={{ background: view === "pdf" ? "#525659" : theme.page }}>
          {/* Floating tool rail */}
          <div className="absolute left-3 sm:left-6 top-6 z-[5] w-12 py-2 bg-white rounded-full shadow-[0_2px_10px_rgba(0,0,0,0.18)] flex flex-col items-center gap-3 print:hidden">
            <button
              onClick={() => setPanelOpen((o) => !o)}
              aria-label={panelOpen ? "Hide panel" : "Show panel"}
              title={panelOpen ? "Hide panel" : "Show panel"}
              className="w-9 h-9 flex items-center justify-center text-[#555] hover:text-black"
            >
              {panelOpen ? <ChevronsLeft className="w-5 h-5" /> : <ChevronsRight className="w-5 h-5" />}
            </button>
            {railIcon("details", "Article details", <Info className="w-5 h-5" />)}
            {railIcon("contents", "Contents", <List className="w-5 h-5" />)}
            {railIcon("figures", "Figures and tables", <ImageIcon className="w-5 h-5" />)}
            {railIcon("references", "References", <Link2 className="w-5 h-5" />)}
          </div>

          {view === "pdf" ? (
            <div className="flex-1 min-w-0 pl-[72px] sm:pl-24 print:pl-0">
              <iframe title={`${article.title} (PDF)`} src={`${realPdf?.url ?? pdfUrl}#view=FitH&navpanes=0`} className="w-full h-full border-0" />
            </div>
          ) : (
            <div ref={paneRef} onScroll={onScroll} className="flex-1 overflow-y-auto">
              <article className="max-w-[980px] mx-auto pl-20 pr-6 sm:pl-28 sm:pr-14 py-12" style={{ fontFamily, fontSize: settings.size, lineHeight: 1.62, color: theme.text }}>
                {/* Masthead */}
                <div style={{ fontSize: settings.size * 0.78, lineHeight: 1.45 }}>
                  <p><em>© {JOURNAL_INFO.title}</em></p>
                  <p>{article.year}, Vol. {article.volume}, No. {article.issue}, {article.pages.replace("–", "-")}.</p>
                  <DoiLink doi={article.doi} className="underline underline-offset-2" />
                </div>

                <p className="mt-8 pb-5 text-center border-b" style={{ fontSize: `min(${settings.size * 2.55}px, 7.2vw)`, letterSpacing: "0.18em", lineHeight: 1.15, borderColor: theme.rule }}>
                  {KICKER[article.type]}
                </p>
                <div className="mt-3 text-center"><SampleTag article={article} /></div>

                <h1 className="mt-12 text-center font-bold uppercase leading-snug" style={{ fontSize: settings.size * 1.38 }}>
                  {mark(article.title)}
                </h1>

                {/* Editorials are signed at the end instead (journal template) */}
                {!isEditorial && (
                <div className="mt-12 space-y-6 text-center font-bold">
                  {authorsWithInst.map((au) => (
                    <p key={au.name} style={{ lineHeight: 1.3 }}>
                      <span className="uppercase" style={{ fontSize: settings.size * 1.08 }}>{au.name}</span>
                      <br />
                      <span style={{ fontSize: settings.size * 1.02 }}>{au.institution}</span>
                    </p>
                  ))}
                </div>
                )}

                {/* Abstract (editorials have none, as in the journal's template) */}
                {!isEditorial && (
                <section id="r-abstract" className="mt-12 mx-auto max-w-[760px]">
                  <h2 className="text-center font-bold uppercase mb-3" style={{ fontSize: settings.size * 0.95 }}>Abstract</h2>
                  <p className="italic text-justify">{mark(article.abstract)}</p>
                  <p className="mt-3" style={{ fontSize: settings.size * 0.85 }}>
                    <strong>Keywords:</strong> {article.keywords.join(", ")}. <strong>JEL classification:</strong> {article.jelCodes.join(", ")}.
                  </p>
                </section>
                )}

                {/* Body */}
                {body ? (
                  body.map((s) => <Section key={s.id} section={s} size={settings.size} text={theme.text} rule={theme.rule} muted={theme.muted} rich={rich} />)
                ) : (
                  <section id="r-full-text" className="mt-14 text-center" style={{ fontFamily: "var(--font-source-sans), sans-serif" }}>
                    <div className="mx-auto max-w-[560px] border px-6 py-8" style={{ borderColor: theme.rule }}>
                      <Lock className="w-9 h-9 mx-auto" style={{ color: TEAL }} aria-hidden />
                      <p className="mt-3 font-bold" style={{ fontSize: settings.size * 1.05 }}>Full text available on request</p>
                      <p className="mt-2" style={{ fontSize: settings.size * 0.9, color: theme.muted }}>
                        Only the abstract and references of this article are public. The authors share the full paper with readers who ask for it.
                      </p>
                      <div className="mt-5 flex flex-wrap justify-center gap-3 text-[15px]">
                        <button onClick={actions.requestFullText} className="h-10 px-5 font-bold text-white inline-flex items-center gap-2" style={{ background: TEAL }}>
                          <Lock className="w-4 h-4" aria-hidden /> Request full paper from the authors
                        </button>
                        <button onClick={() => setView("pdf")} className="h-10 px-5 font-bold border-2" style={{ borderColor: TEAL, color: TEAL }}>Open PDF (abstract &amp; references)</button>
                      </div>
                    </div>
                  </section>
                )}

                {/* Back matter */}
                {(
                  [
                    ["acknowledgments", "Acknowledgments", article.acknowledgments],
                    ["funding", "Funding", article.funding],
                    ["data-availability", "Data Availability Statement", article.dataAvailability],
                  ] as const
                )
                  .filter(([, , v]) => v)
                  .map(([id, title, v]) => (
                    <section key={id} id={`r-${id}`} className="mt-10">
                      <h2 className="text-center font-bold uppercase mb-3" style={{ fontSize: settings.size * 0.95 }}>{title}</h2>
                      <p className="text-justify" style={{ textIndent: "2em" }}>{rich(v!)}</p>
                    </section>
                  ))}

                {article.references?.length ? (
                  <section id="r-references" className="mt-12">
                    <h2 className="text-center font-bold uppercase mb-5" style={{ fontSize: settings.size * 0.95 }}>References</h2>
                    <div className="space-y-2" style={{ fontSize: settings.size * 0.88 }}>
                      {article.references.map((r) => (
                        <p key={r.number} id={`r-ref-${r.number}`} className="pl-8 -indent-8 rounded-sm transition-colors">
                          {mark(r.text)}
                          {r.doi && (
                            <>
                              {" "}
                              <DoiLink doi={r.doi} className="underline break-all" />
                            </>
                          )}
                          {r.articleId && (
                            <>
                              {" "}
                              <button
                                onClick={() => navigate("reader", { articleId: r.articleId })}
                                className="whitespace-nowrap font-semibold underline"
                                style={{ color: settings.theme === "dark" ? CYAN : TEAL, fontFamily: "var(--font-source-sans), sans-serif", fontSize: "0.9em" }}
                              >
                                Read in JER →
                              </button>
                            </>
                          )}
                        </p>
                      ))}
                    </div>
                  </section>
                ) : null}

                {isEditorial && (
                  <div id="r-signature" className="mt-12 text-right" style={{ lineHeight: 1.45 }}>
                    {article.authors.map((au) => {
                      const af = article.affiliations?.[0];
                      return (
                        <div key={au.name}>
                          <p className="font-bold">{au.name}</p>
                          <p className="italic">Editor-in-Chief</p>
                          <p style={{ fontSize: settings.size * 0.85 }}>
                            {af ? `${af.department}, ${af.institution}, ${af.city}, ${af.country}` : au.affiliation}
                          </p>
                          {af?.email && (
                            <a href={`mailto:${af.email}`} className="underline" style={{ fontSize: settings.size * 0.85 }}>
                              {af.email}
                            </a>
                          )}
                        </div>
                      );
                    })}
                  </div>
                )}

                <p className="mt-14 pt-5 border-t text-center" style={{ fontSize: settings.size * 0.75, color: theme.muted, borderColor: theme.rule }}>
                  © {article.year} The Author(s). Published by {JOURNAL_INFO.publisher}. {JOURNAL_INFO.license}.
                </p>
              </article>
            </div>
          )}
        </div>
      </div>

      {/* Help */}
      <div className="fixed bottom-6 right-6 z-40 print:hidden">
        {helpOpen && (
          <div className="absolute bottom-16 right-0 w-72 bg-white text-[#212121] shadow-xl border-t-4 p-4 text-[14px]" style={{ borderTopColor: TEAL }}>
            <p className="font-bold mb-2">Using the reader</p>
            <ul className="space-y-1.5 text-[#444]">
              <li><strong>EPUB / PDF</strong> switches between reflowable text and the page view.</li>
              <li><strong>TT</strong> changes text size, font and page colour.</li>
              <li>Click an underlined citation to jump to the reference.</li>
              <li><strong>Enter</strong> / <strong>Shift+Enter</strong> step through search results.</li>
              <li><strong>Esc</strong> closes the reader.</li>
            </ul>
            <button onClick={() => navigate("contact")} className="mt-3 font-semibold hover:underline" style={{ color: TEAL }}>Contact the editorial office</button>
          </div>
        )}
        <button
          onClick={() => setHelpOpen((o) => !o)}
          aria-label="Reader help"
          aria-expanded={helpOpen}
          className="w-12 h-12 rounded-full flex items-center justify-center text-white shadow-lg"
          style={{ background: CHROME }}
        >
          <HelpCircle className="w-7 h-7" />
        </button>
      </div>
    </div>
  );
}

function TableBlock({ table: t, size, rule, muted }: { table: BodyTable; size: number; rule: string; muted: string }) {
  return (
    <figure id={`r-${t.id}`} className="my-8 overflow-x-auto">
      <figcaption className="font-bold mb-2 text-center" style={{ fontSize: size * 0.88 }}>{t.caption}</figcaption>
      <table className="w-full border-collapse" style={{ fontSize: size * 0.82 }}>
        <thead>
          <tr style={{ borderTop: `2px solid ${rule}`, borderBottom: `1px solid ${rule}` }}>
            {t.columns.map((c, i) => (
              <th key={`${c}-${i}`} className={`py-2 px-2 font-bold ${i ? "text-right" : "text-left"}`}>{c}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {t.rows.map((row, ri) => (
            <tr key={ri} style={{ borderBottom: ri === t.rows.length - 1 ? `2px solid ${rule}` : undefined }}>
              {row.map((cell, ci) => (
                <td key={ci} className={`py-1 px-2 ${ci ? "text-right tabular-nums" : ""}`}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      {t.note && <p className="mt-2 italic" style={{ fontSize: size * 0.75, color: muted }}>{t.note}</p>}
    </figure>
  );
}

function FigureBlock({ figure: f, size, text, rule, muted }: { figure: BodyFigure; size: number; text: string; rule: string; muted: string }) {
  return (
    <figure id={`r-${f.id}`} className="my-8">
      <figcaption className="font-bold mb-2 text-center" style={{ fontSize: size * 0.88 }}>{f.caption}</figcaption>
      <div dangerouslySetInnerHTML={{ __html: figureSvg(f, { text, grid: rule }) }} />
      {f.note && <p className="mt-2 italic" style={{ fontSize: size * 0.75, color: muted }}>{f.note}</p>}
    </figure>
  );
}

function Exhibits({ x, size, text, rule, muted }: { x: BodyExhibits; size: number; text: string; rule: string; muted: string }) {
  return (
    <>
      {exhibitTables(x).map((t) => (
        <TableBlock key={t.id} table={t} size={size} rule={rule} muted={muted} />
      ))}
      {x.figures?.map((f) => (
        <FigureBlock key={f.id} figure={f} size={size} text={text} rule={rule} muted={muted} />
      ))}
    </>
  );
}

function Section({
  section: s,
  size,
  text,
  rule,
  muted,
  rich,
}: {
  section: BodySection;
  size: number;
  text: string;
  rule: string;
  muted: string;
  rich: (t: string) => ReactNode;
}) {
  return (
    <section id={`r-${s.id}`} className="mt-12">
      {s.heading && <h2 className="text-center font-bold uppercase mb-4" style={{ fontSize: size * 0.95 }}>{stripNumber(s.heading)}</h2>}
      {s.paragraphs.map((p, i) => (
        <p key={i} className="text-justify mb-1" style={{ textIndent: "2em" }}>{rich(p)}</p>
      ))}
      <Exhibits x={s} size={size} text={text} rule={rule} muted={muted} />
      {s.subsections?.map((sub) => (
        <div key={sub.id} id={`r-${sub.id}`} className="mt-7">
          <h3 className="font-bold italic mb-2" style={{ fontSize: size }}>{stripNumber(sub.heading)}</h3>
          {sub.paragraphs.map((p, i) => (
            <p key={i} className="text-justify mb-1" style={{ textIndent: "2em" }}>{rich(p)}</p>
          ))}
          <Exhibits x={sub} size={size} text={text} rule={rule} muted={muted} />
        </div>
      ))}
    </section>
  );
}
