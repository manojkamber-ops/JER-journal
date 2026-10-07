"use client";

import { useMemo, useState } from "react";
import { ARTICLES, CURRENT_ISSUE, pageStart, type Article } from "@/data/journal";
import { ChevronDown, ChevronLeft, ChevronRight, FileText, BookOpen, Download } from "lucide-react";
import { useNav } from "../nav-context";
import { JournalBanner } from "../journal-banner";
import { issuePdf } from "@/lib/pdf";
import { formatCitations } from "@/lib/citations";
import { downloadBlob, downloadText } from "@/lib/download";
import { toast } from "@/hooks/use-toast";

const SECTION_ORDER: Article["type"][] = ["Editorial", "Research Article", "Review Article", "Short Communication"];
// Section names follow the AOM table of contents
const SECTION_TITLE: Record<Article["type"], string> = {
  Editorial: "From the Editors",
  "Research Article": "Research Articles",
  "Review Article": "Reviews",
  "Short Communication": "Short Communications",
};

const longDate = (iso: string) => new Date(iso).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });
const monthYear = (iso: string) => new Date(iso).toLocaleDateString("en-GB", { month: "long", year: "numeric" });

// All issues, newest first
const ISSUES = Array.from(new Set(ARTICLES.map((a) => `${a.volume}-${a.issue}`)))
  .map((k) => k.split("-").map(Number) as [number, number])
  .sort((a, b) => b[0] - a[0] || b[1] - a[1]);

export function CurrentIssuePage() {
  const { navigate, params } = useNav();

  const volume = Number(params.volume) || CURRENT_ISSUE.volume;
  const issue = Number(params.issue) || CURRENT_ISSUE.issue;
  const isCurrent = volume === CURRENT_ISSUE.volume && issue === CURRENT_ISSUE.issue;

  const articles = useMemo(
    () => ARTICLES.filter((a) => a.volume === volume && a.issue === issue).sort((a, b) => pageStart(a) - pageStart(b)),
    [volume, issue]
  );
  const sections = SECTION_ORDER.map((type) => ({ type, items: articles.filter((a) => a.type === type) })).filter((s) => s.items.length);

  const idx = ISSUES.findIndex(([v, i]) => v === volume && i === issue);
  const newer = idx > 0 ? ISSUES[idx - 1] : null;
  const older = idx >= 0 && idx < ISSUES.length - 1 ? ISSUES[idx + 1] : null;
  const goIssue = ([v, i]: [number, number]) =>
    navigate("current-issue", v === CURRENT_ISSUE.volume && i === CURRENT_ISSUE.issue ? undefined : { params: { volume: String(v), issue: String(i) } });

  if (articles.length === 0) {
    return (
      <>
        <JournalBanner active="archive" />
        <div className="container mx-auto px-4 py-20 text-center">
          <h2 className="text-[22px] font-bold mb-3">Issue not found</h2>
          <button onClick={() => navigate("archive")} className="text-accent font-semibold hover:underline">Browse all issues</button>
        </div>
      </>
    );
  }

  const published = articles[0].published;
  // Page range of the numbered articles (editorials use roman front-matter pages)
  const numbered = articles.filter((a) => pageStart(a) > 0);
  const firstPage = Math.min(...numbered.map(pageStart));
  const lastPage = Math.max(...numbered.map((a) => parseInt(a.pages.split("–")[1] ?? a.pages, 10)));
  const mostRead = [...ARTICLES].sort((a, b) => b.downloads - a.downloads).slice(0, 5);

  const downloadIssue = () => {
    downloadBlob(issuePdf(volume, issue), `JER-Vol${volume}-Issue${issue}.pdf`);
    toast({ title: "Full-issue PDF downloaded", description: `Volume ${volume}, Issue ${issue} · ${articles.length} articles` });
  };

  return (
    <div className="bg-white">
      <JournalBanner active={isCurrent ? "current" : "archive"} />

      <div className="container mx-auto px-4 py-8 grid lg:grid-cols-12 gap-x-12">
        <div className="lg:col-span-8">
          {/* Issue citation line */}
          <div className="flex flex-wrap items-center justify-between gap-2 border-b-2 border-[var(--aom-rule)] pb-3">
            <h3 className="text-[16px] font-bold uppercase text-primary">
              Volume {volume}, Issue {issue} / {monthYear(published)}
            </h3>
            <div className="flex items-center gap-3 text-[14px] print:hidden">
              <button
                disabled={!older}
                onClick={() => older && goIssue(older)}
                className="flex items-center text-[#212121] font-semibold hover:text-primary disabled:text-[#c9c9c9]"
              >
                <ChevronLeft className="w-4 h-4" /> Previous
              </button>
              <span className="text-[#c9c9c9]">|</span>
              <button
                disabled={!newer}
                onClick={() => newer && goIssue(newer)}
                className="flex items-center text-[#212121] font-semibold hover:text-primary disabled:text-[#c9c9c9]"
              >
                Next <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          <button onClick={downloadIssue} className="block mt-7 text-[22px] font-bold text-black hover:text-primary hover:underline text-left">
            View the Full-issue PDF
          </button>

          {sections.map((s) => (
            <section key={s.type} id={`sec-${s.type}`} className="mt-8 scroll-mt-16">
              <h2 className="text-[22px] font-bold text-black">{SECTION_TITLE[s.type]}</h2>
              <div>
                {s.items.map((a) => (
                  <TocItem key={a.id} article={a} />
                ))}
              </div>
            </section>
          ))}
        </div>

        {/* Right rail */}
        <aside className="lg:col-span-4 mt-12 lg:mt-[86px] space-y-9 print:hidden">
          <div>
            <h3 className="text-[16px] font-bold text-black mb-3">This Issue</h3>
            <div className="flex gap-4">
              <img src="/jer-cover.svg" alt="" className="w-[84px] border border-[#d6d6d6]" width={84} height={115} />
              <div className="text-[14px] leading-relaxed">
                <p className="text-[#616161]">{monthYear(published)}</p>
                <p className="font-bold uppercase">Vol. {volume}, No. {issue}</p>
                <p className="text-[#616161]">pp. {firstPage}–{lastPage} · {articles.length} articles</p>
                {isCurrent && <p className="mt-1 text-[12px] font-bold uppercase tracking-wide text-primary">Current Issue</p>}
              </div>
            </div>
            <ul className="mt-4 border-t border-[#e1e1e1] text-[14px]">
              <li className="border-b border-[#e1e1e1]">
                <button onClick={downloadIssue} className="w-full flex items-center gap-2 py-2.5 font-semibold text-[#212121] hover:text-primary">
                  <Download className="w-4 h-4 text-primary" /> JER {volume}.{issue} Full Issue (PDF)
                </button>
              </li>
              <li className="border-b border-[#e1e1e1]">
                <button
                  onClick={() => downloadText(formatCitations(articles, "ris"), `JER-Vol${volume}-Issue${issue}.ris`, "application/x-research-info-systems")}
                  className="w-full flex items-center gap-2 py-2.5 font-semibold text-[#212121] hover:text-primary"
                >
                  <FileText className="w-4 h-4 text-primary" /> Download issue citations (RIS)
                </button>
              </li>
              <li className="border-b border-[#e1e1e1]">
                <button
                  onClick={() => downloadText(formatCitations(articles, "bibtex"), `JER-Vol${volume}-Issue${issue}.bib`, "application/x-bibtex")}
                  className="w-full flex items-center gap-2 py-2.5 font-semibold text-[#212121] hover:text-primary"
                >
                  <FileText className="w-4 h-4 text-primary" /> Download issue citations (BibTeX)
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-[16px] font-bold text-black mb-2">Most Read</h3>
            <ol className="text-[14px]">
              {mostRead.map((a, i) => (
                <li key={a.id} className="flex gap-3 py-2.5 border-b border-[#e1e1e1]">
                  <span className="font-bold text-primary w-4 flex-shrink-0">{i + 1}</span>
                  <button onClick={() => navigate("reader", { articleId: a.id })} className="text-left font-semibold leading-snug hover:text-primary">
                    {a.title}
                  </button>
                </li>
              ))}
            </ol>
          </div>

          <div>
            <h3 className="text-[16px] font-bold text-black mb-2">Browse Issues</h3>
            <ul className="text-[14px]">
              {ISSUES.slice(0, 6).map(([v, i]) => {
                const iss = ARTICLES.find((a) => a.volume === v && a.issue === i)!;
                const here = v === volume && i === issue;
                return (
                  <li key={`${v}-${i}`} className="border-b border-[#e1e1e1]">
                    <button
                      onClick={() => goIssue([v, i])}
                      className={`w-full flex justify-between py-2.5 hover:text-primary ${here ? "font-bold text-primary" : "text-[#212121]"}`}
                    >
                      <span className="flex items-center gap-2"><BookOpen className="w-4 h-4 text-[#9e9e9e]" /> Volume {v}, Issue {i}</span>
                      <span className="text-[#9e9e9e]">{monthYear(iss.published)}</span>
                    </button>
                  </li>
                );
              })}
            </ul>
            <button onClick={() => navigate("archive")} className="mt-3 text-[14px] font-bold text-accent hover:underline">
              View all issues
            </button>
          </div>
        </aside>
      </div>
    </div>
  );
}

function TocItem({ article: a }: { article: Article }) {
  const { navigate } = useNav();
  const [open, setOpen] = useState(false);
  const openReader = () => navigate("reader", { articleId: a.id });
  const openAbstract = () => navigate("article", { articleId: a.id, anchor: "full-text" });

  return (
    <div className="border-b border-[#e1e1e1] py-4">
      <div className="flex items-start justify-between gap-3">
        <span className="inline-block bg-[#9e9e9e] text-white text-[12px] uppercase px-1.5 py-0.5 leading-[18px]">Open Access</span>
        <span className="text-[14px] uppercase text-black">{monthYear(a.publishedOnline ?? a.published)}</span>
      </div>
      <h5 className="mt-2.5 text-[16px] font-bold leading-snug">
        <button onClick={openReader} className="text-left text-black hover:text-primary hover:underline">
          {a.title}
        </button>
      </h5>
      <p className="mt-3 text-[14px] text-black">
        {a.authors.map((au, i) => (
          <span key={au.name}>
            {i > 0 && (i === a.authors.length - 1 ? " and " : ", ")}
            <button onClick={() => navigate("archive", { params: { q: au.name } })} className="hover:text-primary hover:underline">
              {au.name}
            </button>
          </span>
        ))}
      </p>
      <p className="mt-3 text-[14px]">
        <span className="text-[#9e9e9e]">Pages:</span> {a.pages}
        <span className="mx-2.5 text-[#212121]">|</span>
        <span className="text-[#9e9e9e]">Published Online:</span> {longDate(a.publishedOnline ?? a.published)}
      </p>

      <div className="mt-3 flex flex-wrap items-center justify-between gap-2 text-[14px]">
        <button
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
          className="flex items-center gap-1 font-bold text-black hover:text-primary"
        >
          <ChevronDown className={`w-4 h-4 text-[#9e9e9e] transition-transform ${open ? "rotate-180" : ""}`} />
          {open ? "Hide Abstract" : "Preview Abstract"}
        </button>
        <div className="flex items-center font-bold text-[#9e9e9e] print:hidden">
          <button onClick={openAbstract} className="hover:text-primary">Abstract</button>
          <span className="mx-2.5 text-[#c9c9c9]">|</span>
          <button onClick={openReader} className="hover:text-primary">Full text</button>
          <span className="mx-2.5 text-[#c9c9c9]">|</span>
          <button onClick={openReader} className="hover:text-primary">PDF/EPUB</button>
        </div>
      </div>

      {open && (
        <div className="mt-3 text-[15px] leading-relaxed text-[#212121]">
          <p>{a.abstract}</p>
          <p className="mt-2 text-[13px] text-[#616161]">
            <strong>Keywords:</strong> {a.keywords.join(", ")} · <strong>JEL:</strong> {a.jelCodes.join(", ")}
          </p>
        </div>
      )}
    </div>
  );
}
