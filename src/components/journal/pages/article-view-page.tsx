"use client";

import { ARTICLES, JOURNAL_INFO } from "@/data/journal";
import { useEffect } from "react";
import { useNav } from "../nav-context";
import { useArticleActions } from "../article-actions";
import { DoiLink } from "../doi-link";
import { formatCitation, CITATION_FORMATS, citationFilename } from "@/lib/citations";
import { downloadText } from "@/lib/download";
import { toast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  ArticleListItem,
  JELBadge,
} from "../article-components";
import {
  Download,
  FileText,
  Quote,
  Share2,
  Bookmark,
  Printer,
  Mail,
  ChevronLeft,
  ExternalLink,
  Calendar,
  CheckCircle2,
  AlertCircle,
  User,
  ChevronRight,
  ShieldCheck,
  Database,
  Award,
  ScrollText,
  Heart,
  FileDown,
  Link2,
  Eye,
  BookmarkCheck,
  BookOpen,
} from "lucide-react";

export function ArticleViewPage({ articleId }: { articleId: string | null }) {
  const { navigate, params } = useNav();
  const article = ARTICLES.find((a) => a.id === articleId) ?? ARTICLES[0];
  const actions = useArticleActions(article);

  // "To cite this article" links in PDF cover sheets open the citation dialog directly
  const openCiteFromLink = params.cite === "1";
  useEffect(() => {
    if (openCiteFromLink) actions.cite();
  }, [openCiteFromLink]);
  const citationText = formatCitation(article, "apa");
  const issueLink = () =>
    navigate("current-issue", { params: { volume: String(article.volume), issue: String(article.issue) } });

  const relatedArticles = ARTICLES.filter(
    (a) =>
      a.id !== article.id &&
      (a.keywords.some((k) => article.keywords.includes(k)) ||
        a.jelCodes.some((c) => article.jelCodes.includes(c)))
  ).slice(0, 4);

  const hasStructured = !!(article.structuredAuthors && article.affiliations);
  const correspondingAffiliation = hasStructured
    ? article.affiliations!.find((af) =>
        article.structuredAuthors!.find((au) => au.corresponding)?.affiliationIds.includes(af.id)
      )
    : null;

  return (
    <div className="bg-white">
      {/* === Breadcrumb === */}
      <div className="border-b border-gray-200 bg-gray-50">
        <div className="container mx-auto px-4 py-2.5 font-sans text-xs text-gray-600">
          <button onClick={() => navigate("home")} className="hover:text-accent">Journal Home</button>
          <ChevronRight className="inline w-3 h-3 mx-1.5" />
          <button onClick={() => navigate("archive")} className="hover:text-accent">All Issues</button>
          <ChevronRight className="inline w-3 h-3 mx-1.5" />
          <button onClick={issueLink} className="hover:text-accent">
            Vol. {article.volume}, No. {article.issue} ({article.year})
          </button>
          <ChevronRight className="inline w-3 h-3 mx-1.5" />
          <span className="text-primary font-medium">{article.type}</span>
        </div>
      </div>

      {/* === Article header === */}
      <section className="border-b border-gray-200 bg-white">
        <div className="container mx-auto px-4 py-8">
          <div className="grid lg:grid-cols-12 gap-8">
            {/* Main article column */}
            <article className="lg:col-span-9">
              <div className="flex items-center gap-2 mb-3 flex-wrap">
                <Badge className="bg-accent text-white hover:bg-accent font-sans text-[10px] uppercase tracking-wider">
                  {article.type}
                </Badge>
                <span className="font-sans text-xs text-gray-500">
                  Volume {article.volume}, Issue {article.issue} ({article.year}) · pp. {article.pages}
                </span>
                <span className="text-gray-300">|</span>
                <DoiLink
                  doi={article.doi}
                  className="font-mono text-xs text-accent hover:underline flex items-center gap-1"
                >
                  <Link2 className="w-3 h-3" />
                  {article.doi}
                </DoiLink>
              </div>

              <h1 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-primary leading-tight mb-4">
                {article.title}
              </h1>

              {/* AOM-style authors with affiliation superscripts */}
              {hasStructured ? (
                <div className="mb-3">
                  <p className="font-serif text-base text-gray-800">
                    {article.structuredAuthors!.map((au, idx) => (
                      <span key={idx}>
                        {idx > 0 && ", "}
                        <span className="font-medium">{au.name}</span>
                        <sup className="text-accent ml-0.5">
                          {au.affiliationIds.map((id) => id).join(",")}
                        </sup>
                        {au.corresponding && <sup className="text-accent">*</sup>}
                      </span>
                    ))}
                  </p>
                  {/* Affiliations list */}
                  <div className="mt-3 space-y-1">
                    {article.affiliations!.map((af) => (
                      <p key={af.id} className="font-sans text-xs text-gray-600">
                        <sup className="text-accent">{af.id}</sup>{" "}
                        {af.department}, {af.institution}, {af.city}, {af.country}
                        {af.email && (
                          <>
                            {" — "}
                            <a
                              href={`mailto:${af.email}`}
                              className="text-accent hover:underline"
                            >
                              {af.email}
                            </a>
                          </>
                        )}
                      </p>
                    ))}
                    {correspondingAffiliation && (
                      <p className="font-sans text-xs text-gray-500 mt-1">
                        <sup className="text-accent">*</sup> Corresponding author.
                        {correspondingAffiliation.email && (
                          <>
                            {" "}Email:{" "}
                            <a href={`mailto:${correspondingAffiliation.email}`} className="text-accent hover:underline">
                              {correspondingAffiliation.email}
                            </a>
                          </>
                        )}
                      </p>
                    )}
                  </div>
                  {/* ORCID strip */}
                  <div className="mt-3 flex flex-wrap items-center gap-3 font-sans text-[11px] text-gray-500">
                    {article.structuredAuthors!.filter((au) => au.orcid).map((au) => (
                      <span key={au.orcid} className="flex items-center gap-1">
                        <User className="w-3 h-3" />
                        {au.name}: ORCID <span className="font-mono">{au.orcid}</span>
                      </span>
                    ))}
                  </div>
                </div>
              ) : (
                <p className="font-serif text-base text-gray-800 mb-2">
                  {article.authors.map((a, idx) => (
                    <span key={idx}>
                      {idx > 0 && ", "}
                      <span className="font-medium">{a.name}</span>
                      {a.corresponding && <sup className="text-accent">*</sup>}
                    </span>
                  ))}
                </p>
              )}

              {/* Article history block — AOM style */}
              <div className="bg-gray-50 border border-gray-200 rounded-sm p-4 my-5 font-sans text-xs text-gray-700 grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
                <div>
                  <p className="text-gray-500 uppercase tracking-wide mb-0.5">Received</p>
                  <p className="font-medium text-primary">
                    {new Date(article.received).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" })}
                  </p>
                </div>
                <div>
                  <p className="text-gray-500 uppercase tracking-wide mb-0.5">Accepted</p>
                  <p className="font-medium text-primary">
                    {new Date(article.accepted).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" })}
                  </p>
                </div>
                {article.publishedOnline && (
                  <div>
                    <p className="text-gray-500 uppercase tracking-wide mb-0.5">Published online</p>
                    <p className="font-medium text-primary">
                      {new Date(article.publishedOnline).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" })}
                    </p>
                  </div>
                )}
                <div>
                  <p className="text-gray-500 uppercase tracking-wide mb-0.5">Issue published</p>
                  <p className="font-medium text-primary">
                    {new Date(article.published).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" })}
                  </p>
                </div>
              </div>

              {/* Action bar */}
              <div className="flex flex-wrap items-center gap-2 mb-7 pb-5 border-b border-gray-200">
                <Button size="sm" onClick={actions.downloadPdf} className="font-sans bg-primary text-white hover:bg-primary/90 rounded-sm">
                  <Download className="w-4 h-4 mr-1.5" />
                  Download PDF ({article.pdfSize})
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => navigate("reader", { articleId: article.id })}
                  className="font-sans rounded-sm"
                >
                  <BookOpen className="w-4 h-4 mr-1.5" />
                  Read Full Text (ePub)
                </Button>
                <Button size="sm" variant="outline" onClick={actions.cite} className="font-sans rounded-sm">
                  <Quote className="w-4 h-4 mr-1.5" />
                  Cite Article
                </Button>
                <div className="flex gap-1 ml-auto print:hidden">
                  <Button
                    size="sm"
                    variant="ghost"
                    onClick={actions.toggleSave}
                    aria-label={actions.saved ? "Remove from library" : "Save article"}
                    aria-pressed={actions.saved}
                    title={actions.saved ? "Saved to your library" : "Save to my library"}
                    className={`font-sans px-2 rounded-sm ${actions.saved ? "text-accent" : ""}`}
                  >
                    {actions.saved ? <BookmarkCheck className="w-4 h-4" /> : <Bookmark className="w-4 h-4" />}
                  </Button>
                  <Button size="sm" variant="ghost" onClick={actions.share} aria-label="Share article" title="Share" className="font-sans px-2 rounded-sm">
                    <Share2 className="w-4 h-4" />
                  </Button>
                  <Button size="sm" variant="ghost" onClick={actions.print} aria-label="Print article" title="Print" className="font-sans px-2 rounded-sm">
                    <Printer className="w-4 h-4" />
                  </Button>
                  <Button size="sm" variant="ghost" onClick={actions.email} aria-label="Email article" title="Email" className="font-sans px-2 rounded-sm">
                    <Mail className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </article>

            {/* Right rail: Article sidebar */}
            <aside className="lg:col-span-3">
              <div className="bg-gray-50 border border-gray-200 rounded-sm p-4 sticky top-32">
                <h3 className="font-sans text-xs uppercase tracking-widest text-gray-500 mb-3 pb-2 border-b border-gray-200">
                  Article Information
                </h3>
                <dl className="space-y-2 font-sans text-xs">
                  <Row label="Volume" value={`${article.volume}`} />
                  <Row label="Issue" value={`${article.issue}`} />
                  <Row label="Year" value={`${article.year}`} />
                  <Row label="Pages" value={article.pages} />
                  <Row label="Article type" value={article.type} />
                  <Row label="PDF size" value={article.pdfSize} />
                  <div className="border-t border-gray-200 pt-2 mt-2">
                    <Row label="Citations" value={`${article.citations}`} />
                    <Row label="Downloads" value={article.downloads.toLocaleString()} />
                  </div>
                  <div className="border-t border-gray-200 pt-2 mt-2">
                    <dt className="text-gray-500 mb-0.5">DOI</dt>
                    <dd className="font-mono text-[11px] break-all text-accent">
                      <DoiLink doi={article.doi} className="hover:underline">{article.doi}</DoiLink>
                    </dd>
                  </div>
                </dl>
                <div className="mt-4 pt-3 border-t border-gray-200 font-sans text-[11px] text-gray-500">
                  Published by {JOURNAL_INFO.publisher}<br />
                  ISSN {JOURNAL_INFO.issnOnline} (online)
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* === Abstract + Keywords + Article body === */}
      <section className="bg-white">
        <div className="container mx-auto px-4 py-8">
          <div className="grid lg:grid-cols-12 gap-8">
            <div className="lg:col-span-9">
              {/* Abstract */}
              <div id="full-text" className="mb-8 scroll-mt-40">
                <h2 className="font-serif text-xl font-bold text-primary mb-3 pb-1 border-b-2 border-accent inline-block">
                  Abstract
                </h2>
                <p className="font-serif text-base leading-relaxed text-gray-800 mt-4 text-justify">
                  {article.abstract}
                </p>
              </div>

              {/* Keywords */}
              <div className="mb-8">
                <h3 className="font-sans text-xs uppercase tracking-widest text-gray-500 mb-2">Keywords</h3>
                <div className="flex flex-wrap gap-2">
                  {article.keywords.map((kw) => (
                    <span
                      key={kw}
                      className="font-sans text-xs px-2.5 py-1 bg-gray-100 border border-gray-200 rounded-sm text-gray-700"
                    >
                      {kw}
                    </span>
                  ))}
                </div>
              </div>

              {/* JEL */}
              <div className="mb-8">
                <h3 className="font-sans text-xs uppercase tracking-widest text-gray-500 mb-2">JEL Classification</h3>
                <div className="flex flex-wrap gap-2">
                  {article.jelCodes.map((c) => (
                    <JELBadge key={c} code={c} />
                  ))}
                </div>
              </div>

              {/* Acknowledgments */}
              {article.acknowledgments && (
                <div className="mb-8">
                  <h3 className="font-serif text-lg font-semibold text-primary mb-2 pb-1 border-b border-gray-200">
                    Acknowledgments
                  </h3>
                  <p className="font-serif text-sm leading-relaxed text-gray-800 text-justify">
                    {article.acknowledgments}
                  </p>
                </div>
              )}

              {/* Funding */}
              {article.funding && (
                <div className="mb-8">
                  <h3 className="font-serif text-lg font-semibold text-primary mb-2 pb-1 border-b border-gray-200">
                    Funding
                  </h3>
                  <p className="font-serif text-sm leading-relaxed text-gray-800 text-justify">
                    {article.funding}
                  </p>
                </div>
              )}

              {/* Data availability */}
              {article.dataAvailability && (
                <div id="data-availability" className="mb-8 bg-gray-50 border border-gray-200 rounded-sm p-4 scroll-mt-40">
                  <h3 className="font-serif text-base font-semibold text-primary mb-2 flex items-center gap-2">
                    <Database className="w-4 h-4 text-accent" />
                    Data Availability Statement
                  </h3>
                  <p className="font-serif text-sm leading-relaxed text-gray-800 text-justify">
                    {article.dataAvailability}
                  </p>
                </div>
              )}

              {/* References */}
              {article.references && article.references.length > 0 && (
                <div className="mb-8">
                  <h3 className="font-serif text-xl font-bold text-primary mb-4 pb-1 border-b-2 border-accent inline-block">
                    References
                  </h3>
                  <ol className="mt-4 space-y-2.5">
                    {article.references.map((ref) => (
                      <li
                        key={ref.number}
                        className="font-serif text-sm leading-relaxed text-gray-800 flex gap-3"
                      >
                        <span className="flex-shrink-0 w-7 text-right font-sans text-xs text-accent font-semibold pt-0.5">
                          {ref.number}.
                        </span>
                        <span className="flex-1 text-justify">
                          {ref.text}
                          {ref.doi && (
                            <DoiLink doi={ref.doi} className="ml-1 text-accent hover:underline font-sans text-xs" />
                          )}
                        </span>
                      </li>
                    ))}
                  </ol>
                </div>
              )}

              {/* Open access notice */}
              <div className="mb-8 bg-accent/10 border border-accent/30 rounded-sm p-4 flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <div className="font-sans text-sm">
                  <p className="font-semibold text-primary mb-1">Open Access</p>
                  <p className="text-gray-700 leading-relaxed">
                    This is an open-access article distributed under the terms of the
                    Creative Commons Attribution-NonCommercial 4.0 International License
                    (CC BY-NC 4.0). You are free to copy, distribute, and adapt the work
                    for non-commercial purposes, provided appropriate attribution is given.
                  </p>
                </div>
              </div>

              {/* How to cite */}
              <div className="mb-8">
                <h3 className="font-serif text-lg font-semibold text-primary mb-2 pb-1 border-b border-gray-200 flex items-center gap-2">
                  <Quote className="w-4 h-4 text-accent" />
                  How to Cite
                </h3>
                <p className="font-serif text-sm leading-relaxed text-gray-800 bg-gray-50 p-3 border-l-4 border-accent">
                  {citationText}
                </p>
                <div className="flex flex-wrap gap-2 mt-3 print:hidden">
                  {CITATION_FORMATS.filter((f) => f.file).map((f) => (
                    <Button
                      key={f.id}
                      size="sm"
                      variant="outline"
                      onClick={() => {
                        downloadText(formatCitation(article, f.id), citationFilename(article, f.file!.ext), f.file!.type);
                        toast({ title: `${f.label} citation downloaded` });
                      }}
                      className="font-sans rounded-sm text-xs"
                    >
                      <Download className="w-3 h-3 mr-1" /> {f.label}
                    </Button>
                  ))}
                  <Button size="sm" variant="outline" onClick={actions.cite} className="font-sans rounded-sm text-xs">
                    APA · Chicago · Harvard · MLA
                  </Button>
                </div>
              </div>
            </div>

            {/* Sticky right rail: Options and Tools (AOM sidebar) */}
            <aside className="lg:col-span-3">
              <div className="sticky top-32 space-y-5">
                {/* Options & Tools */}
                <div className="bg-white border border-gray-200 rounded-sm overflow-hidden">
                  <div className="bg-primary text-white px-4 py-2.5">
                    <h3 className="font-sans text-xs uppercase tracking-widest font-semibold">
                      Options and Tools
                    </h3>
                  </div>
                  <ul className="divide-y divide-gray-200 font-sans text-sm">
                    <ToolItem icon={Download} label="Download PDF" sub={`${article.pdfSize}`} onClick={actions.downloadPdf} />
                    <ToolItem
                      icon={BookOpen}
                      label="Read in ePub reader"
                      sub="Full text · adjustable display"
                      onClick={() => navigate("reader", { articleId: article.id })}
                    />
                    <ToolItem icon={Quote} label="Cite this article" onClick={actions.cite} />
                    <ToolItem
                      icon={FileDown}
                      label="Download citation"
                      sub="RIS (EndNote, Zotero, Mendeley)"
                      onClick={() => downloadText(formatCitation(article, "ris"), citationFilename(article, "ris"), "application/x-research-info-systems")}
                    />
                    <ToolItem icon={Share2} label="Share" sub="Email / X / LinkedIn / Facebook" onClick={actions.share} />
                    <ToolItem
                      icon={actions.saved ? BookmarkCheck : Bookmark}
                      label={actions.saved ? "Saved to my library" : "Save to my library"}
                      sub={actions.saved ? "Click to remove" : undefined}
                      onClick={actions.toggleSave}
                    />
                    <ToolItem icon={Printer} label="Print this article" onClick={actions.print} />
                    <ToolItem icon={Eye} label="Permissions" sub="Reprint &amp; reuse (CC BY-NC 4.0)" onClick={() => navigate("policies", { anchor: "open-access" })} />
                    <ToolItem
                      icon={ShieldCheck}
                      label="Supplementary materials"
                      sub={article.dataAvailability ? "Replication data statement" : "None for this article"}
                      onClick={() =>
                        article.dataAvailability
                          ? document.getElementById("data-availability")?.scrollIntoView({ behavior: "smooth" })
                          : toast({ title: "No supplementary materials", description: "The authors did not deposit supplementary files for this article." })
                      }
                    />
                    <ToolItem
                      icon={Award}
                      label="Track citations"
                      sub={`Cited by ${article.citations} articles · get alerts`}
                      onClick={actions.trackCitations}
                    />
                  </ul>
                </div>

                {/* Article metrics */}
                <div className="bg-gray-50 border border-gray-200 rounded-sm p-4">
                  <h3 className="font-sans text-xs uppercase tracking-widest text-gray-500 mb-3 pb-2 border-b border-gray-200">
                    Article Metrics
                  </h3>
                  <div className="space-y-2 font-sans text-xs">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600 flex items-center gap-1.5">
                        <Quote className="w-3.5 h-3.5 text-accent" /> Citations
                      </span>
                      <span className="font-bold text-primary text-sm">{article.citations}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600 flex items-center gap-1.5">
                        <Download className="w-3.5 h-3.5 text-accent" /> Downloads
                      </span>
                      <span className="font-bold text-primary text-sm">{article.downloads.toLocaleString()}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600 flex items-center gap-1.5">
                        <Eye className="w-3.5 h-3.5 text-accent" /> Abstract views
                      </span>
                      <span className="font-bold text-primary text-sm">{(article.downloads * 4.2).toFixed(0)}</span>
                    </div>
                  </div>
                </div>

                {/* Rights */}
                <div className="bg-accent/10 border border-accent/30 rounded-sm p-4 text-center">
                  <Heart className="w-5 h-5 text-accent mx-auto mb-1" />
                  <p className="font-sans text-xs text-gray-700 leading-relaxed">
                    <strong className="text-primary">Open Access</strong><br />
                    CC BY-NC 4.0<br />
                    No APC
                  </p>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* === Related articles === */}
      {relatedArticles.length > 0 && (
        <section className="bg-gray-50 border-t border-gray-200">
          <div className="container mx-auto px-4 py-10">
            <div className="flex items-end justify-between mb-5 border-b border-gray-200 pb-2">
              <h2 className="font-serif text-xl font-bold text-primary flex items-center gap-2">
                <ScrollText className="w-5 h-5 text-accent" />
                Related Articles
              </h2>
              <Button variant="link" onClick={() => navigate("archive")} className="font-sans text-accent hover:text-accent text-sm p-0 h-auto">
                Browse all
                <ChevronRight className="w-3.5 h-3.5 ml-1" />
              </Button>
            </div>
            <div className="divide-y divide-gray-200 bg-white border border-gray-200 rounded-sm">
              {relatedArticles.map((rel) => (
                <ArticleListItem key={rel.id} article={rel} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* === Navigation back === */}
      <section className="bg-white border-t border-gray-200">
        <div className="container mx-auto px-4 py-8 flex flex-wrap items-center justify-between gap-3">
          <Button variant="outline" onClick={issueLink} className="font-sans rounded-sm">
            <ChevronLeft className="w-4 h-4 mr-1.5" />
            Back to Volume {article.volume}, Issue {article.issue}
          </Button>
          <Button onClick={() => navigate("submission")} className="font-sans bg-primary text-white hover:bg-primary/90 rounded-sm">
            <Mail className="w-4 h-4 mr-2" />
            Submit your manuscript
          </Button>
        </div>
      </section>
    </div>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between gap-2">
      <dt className="text-gray-500">{label}</dt>
      <dd className="font-medium text-right text-primary">{value}</dd>
    </div>
  );
}

function ToolItem({
  icon: Icon,
  label,
  sub,
  onClick,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  sub?: string;
  onClick: () => void;
}) {
  return (
    <li>
      <button onClick={onClick} className="w-full flex items-center gap-2.5 px-4 py-2.5 hover:bg-gray-50 transition-colors text-left">
        <Icon className="w-4 h-4 text-accent flex-shrink-0" />
        <span className="flex-1 min-w-0">
          <span className="block text-sm text-gray-800 leading-tight">{label}</span>
          {sub && (
            <span className="block text-[11px] text-gray-500 mt-0.5" dangerouslySetInnerHTML={{ __html: sub }} />
          )}
        </span>
      </button>
    </li>
  );
}
