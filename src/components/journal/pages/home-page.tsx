"use client";

import { useNav } from "../nav-context";
import { useArticleActions } from "../article-actions";
import { JournalBanner } from "../journal-banner";
import { ArticleCard } from "../article-components";
import {
  ARTICLES,
  NEWS_ITEMS,
  JOURNAL_INFO,
  JOURNAL_STATS,
  INDEXING_SERVICES,
  EDITORIAL_BOARD,
  CURRENT_ISSUE,
} from "@/data/journal";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  ArrowRight,
  BookOpen,
  Users,
  Download,
  Quote,
  Award,
  ChevronRight,
  Flame,
  TrendingUp,
  Send,
  FileText,
  ShieldCheck,
  Globe2,
  Clock,
  Mail,
  MapPin,
  BadgeCheck,
} from "lucide-react";

export function HomePage() {
  const { navigate } = useNav();

  // Current issue
  const allCurrent = ARTICLES.filter((a) => a.volume === CURRENT_ISSUE.volume && a.issue === CURRENT_ISSUE.issue);
  const currentIssueArticles = allCurrent.slice(0, 6);
  const issueTitle = `Volume ${CURRENT_ISSUE.volume}, Issue ${CURRENT_ISSUE.issue}`;
  const publishedLabel = new Date(CURRENT_ISSUE.published).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });

  // Featured = the new AI paper
  const featuredArticle = ARTICLES.find((a) => a.id === "2026-v31-i2-02") ?? ARTICLES[0];
  const featuredActions = useArticleActions(featuredArticle);

  // Most recent (latest published, top 6)
  const mostRecent = [...ARTICLES]
    .sort((a, b) => b.published.localeCompare(a.published))
    .slice(0, 6);

  // Most read (top 6 by downloads)
  const mostRead = [...ARTICLES]
    .sort((a, b) => b.downloads - a.downloads)
    .slice(0, 6);

  // Most cited (top 6 by citations)
  const mostCited = [...ARTICLES]
    .sort((a, b) => b.citations - a.citations)
    .slice(0, 6);

  const editorInChief = EDITORIAL_BOARD.find((e) => e.role === "Editor-in-Chief")!;
  const latestNews = NEWS_ITEMS.slice(0, 3);

  return (
    <div className="bg-background">
      <JournalBanner />

      {/* === Featured article === */}
      <section className="border-b border-gray-200 bg-white">
        <div className="container mx-auto px-4 py-10">
          <div className="grid lg:grid-cols-12 gap-10 items-start">
            {/* Right: Featured Article + abstract preview */}
            <div className="lg:col-span-12">
              <div className="flex items-center gap-2 mb-3">
                <span className="font-sans text-[11px] uppercase tracking-widest text-accent font-semibold">
                  Featured Article
                </span>
                <span className="text-gray-300">·</span>
                <span className="font-sans text-[11px] text-gray-500">
                  {issueTitle} ({CURRENT_ISSUE.label})
                </span>
              </div>

              <button
                onClick={() => navigate("reader", { articleId: featuredArticle.id })}
                className="text-left group block w-full"
              >
                <h1 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-primary leading-tight mb-3 group-hover:text-accent transition-colors">
                  {featuredArticle.title}
                </h1>
              </button>

              <p className="font-serif text-base text-gray-700 mb-3 italic">
                {featuredArticle.authors.map((a, idx) => (
                  <span key={idx}>
                    {idx > 0 && ", "}
                    {a.name}
                    {a.corresponding && <sup className="text-accent">*</sup>}
                  </span>
                ))}
              </p>

              <p className="font-serif text-base leading-relaxed text-gray-800 mb-4 line-clamp-4">
                {featuredArticle.abstract}
              </p>

              <div className="flex flex-wrap items-center gap-3 mb-5">
                <Badge variant="outline" className="font-sans text-[10px] uppercase tracking-wide border-accent text-accent">
                  {featuredArticle.type}
                </Badge>
                <span className="font-sans text-xs text-gray-500">
                  pp. {featuredArticle.pages} · {featuredArticle.citations} cited · {featuredArticle.downloads.toLocaleString()} downloads
                </span>
                <span className="font-mono text-xs text-gray-400">
                  DOI: {featuredArticle.doi}
                </span>
              </div>

              <div className="flex flex-wrap gap-3">
                <Button
                  onClick={() => navigate("reader", { articleId: featuredArticle.id })}
                  className="font-sans bg-primary text-white hover:bg-primary/90 rounded-sm"
                >
                  Read Article
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
                <Button
                  variant="outline"
                  onClick={featuredActions.downloadPdf}
                  className="font-sans rounded-sm"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Download PDF
                </Button>
                <Button
                  variant="outline"
                  onClick={featuredActions.cite}
                  className="font-sans rounded-sm"
                >
                  <Quote className="w-4 h-4 mr-2" />
                  Cite
                </Button>
              </div>

              {/* Quick stats bar */}
              <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4 border-t border-gray-200 pt-6">
                {[
                  { icon: FileText, label: "Articles published", value: JOURNAL_STATS.totalArticles.toString() },
                  { icon: Download, label: "2024 downloads", value: JOURNAL_STATS.totalDownloads2024.toLocaleString() },
                  { icon: Quote, label: "Total citations", value: JOURNAL_STATS.totalCitations.toLocaleString() },
                  { icon: Users, label: "h5-index", value: JOURNAL_STATS.h5Index.toString() },
                ].map((s) => {
                  const Icon = s.icon;
                  return (
                    <div key={s.label} className="text-center sm:text-left">
                      <Icon className="w-5 h-5 text-accent mb-1 mx-auto sm:mx-0" />
                      <div className="font-serif text-xl font-bold text-primary">{s.value}</div>
                      <div className="font-sans text-[11px] text-gray-500 uppercase tracking-wide">
                        {s.label}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* === Current Issue Highlights === */}
      <section className="bg-gray-50 border-b border-gray-200">
        <div className="container mx-auto px-4 py-10">
          <div className="flex items-end justify-between mb-6 border-b border-gray-200 pb-3">
            <div>
              <h2 className="font-serif text-2xl font-bold text-primary">
                Current Issue — {issueTitle}
              </h2>
              <p className="font-sans text-sm text-gray-500 mt-1">
                Published {publishedLabel} · {allCurrent.length} articles · ISSN {JOURNAL_INFO.issnPrint}
              </p>
            </div>
            <Button
              variant="link"
              onClick={() => navigate("current-issue")}
              className="font-sans text-accent hover:text-accent"
            >
              View full issue
              <ChevronRight className="w-4 h-4 ml-1" />
            </Button>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {currentIssueArticles.map((article) => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>
        </div>
      </section>

      {/* === Most Read === */}
      <section className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 py-10">
          <div className="flex items-end justify-between mb-6 border-b border-gray-200 pb-3">
            <div className="flex items-center gap-2">
              <Flame className="w-5 h-5 text-accent" />
              <h2 className="font-serif text-2xl font-bold text-primary">Most Read</h2>
            </div>
            <span className="font-sans text-xs text-gray-500">Last 12 months</span>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {mostRead.map((article, idx) => (
              <ArticleRankCard key={article.id} article={article} rank={idx + 1} metric="downloads" />
            ))}
          </div>
        </div>
      </section>

      {/* === Most Cited === */}
      <section className="bg-gray-50 border-b border-gray-200">
        <div className="container mx-auto px-4 py-10">
          <div className="flex items-end justify-between mb-6 border-b border-gray-200 pb-3">
            <div className="flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-accent" />
              <h2 className="font-serif text-2xl font-bold text-primary">Most Cited</h2>
            </div>
            <span className="font-sans text-xs text-gray-500">All time</span>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {mostCited.map((article, idx) => (
              <ArticleRankCard key={article.id} article={article} rank={idx + 1} metric="citations" />
            ))}
          </div>
        </div>
      </section>

      {/* === News + Editor spotlight === */}
      <section className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 py-10">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* News */}
            <div className="lg:col-span-2">
              <div className="flex items-end justify-between mb-4 border-b border-gray-200 pb-2">
                <h2 className="font-serif text-xl font-bold text-primary">
                  News &amp; Announcements
                </h2>
                <Button
                  variant="link"
                  onClick={() => navigate("news")}
                  className="font-sans text-accent hover:text-accent text-sm p-0"
                >
                  View all
                  <ArrowRight className="w-3.5 h-3.5 ml-1" />
                </Button>
              </div>
              <div className="space-y-3">
                {latestNews.map((item) => (
                  <article
                    key={item.id}
                    onClick={() => navigate("news", { anchor: `news-${item.id}` })}
                    className="border-l-2 border-accent pl-4 py-1 hover:bg-gray-50 cursor-pointer transition-colors"
                  >
                    <div className="flex items-center gap-2 mb-1">
                      <Badge variant="outline" className="font-sans text-[10px] uppercase tracking-wide border-accent text-accent">
                        {item.category}
                      </Badge>
                      <span className="font-sans text-[11px] text-gray-500">
                        {new Date(item.date).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })}
                      </span>
                    </div>
                    <h3 className="font-serif text-base font-semibold text-primary hover:text-accent transition-colors mb-1">
                      {item.title}
                    </h3>
                    <p className="font-serif text-sm text-gray-700 line-clamp-2">{item.summary}</p>
                  </article>
                ))}
              </div>
            </div>

            {/* Editor spotlight */}
            <aside>
              <div className="flex items-end justify-between mb-4 border-b border-gray-200 pb-2">
                <h2 className="font-serif text-xl font-bold text-primary">From the Editors</h2>
              </div>
              <div className="bg-gray-50 border border-gray-200 rounded-sm p-5">
                <div className="flex items-start gap-4 mb-3">
                  <div className="w-14 h-14 rounded-full bg-primary text-white flex items-center justify-center font-serif text-lg font-semibold flex-shrink-0">
                    JH
                  </div>
                  <div>
                    <h3 className="font-serif text-base font-semibold text-primary leading-tight">
                      {editorInChief.name}
                    </h3>
                    <p className="font-sans text-xs text-accent uppercase tracking-wide mt-1">
                      {editorInChief.role}
                    </p>
                    <p className="font-sans text-xs text-gray-500 mt-0.5">{editorInChief.affiliation}</p>
                  </div>
                </div>
                <p className="font-serif text-sm italic leading-relaxed text-gray-700 border-l-2 border-accent pl-3">
                  &ldquo;As we mark the publication of Volume 30, the Journal of Economic Research
                  enters its fourth decade with a renewed commitment to rigorous empirical and
                  theoretical research on the economies of Asia and the developing world.&rdquo;
                </p>
                <Button
                  onClick={() => navigate("editorial-board")}
                  variant="link"
                  className="font-sans text-accent hover:text-accent text-xs p-0 mt-3 h-auto"
                >
                  View full editorial board
                  <ChevronRight className="w-3 h-3 ml-1" />
                </Button>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* === Aims &amp; Scope === */}
      <section className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 py-10">
          <div className="grid lg:grid-cols-3 gap-8">
            <div>
              <div className="font-sans text-xs uppercase tracking-widest text-accent mb-2">About the Journal</div>
              <h2 className="font-serif text-2xl font-bold text-primary mb-3">Aims &amp; Scope</h2>
              <p className="font-serif text-base leading-relaxed text-gray-700">
                The Journal of Economic Research publishes original theoretical and empirical
                contributions across the full breadth of economics, with a particular interest
                in research on the economies of Asia, the Asia-Pacific, and developing countries
                more broadly.
              </p>
              <Button
                variant="link"
                onClick={() => navigate("about")}
                className="font-sans text-accent hover:text-accent p-0 mt-3 h-auto"
              >
                Learn more
                <ArrowRight className="w-3.5 h-3.5 ml-1" />
              </Button>
            </div>

            <div className="lg:col-span-2 grid sm:grid-cols-2 gap-4">
              {[
                { title: "Macroeconomics &amp; Monetary Policy", desc: "Monetary transmission, fiscal policy, exchange rates, financial stability." },
                { title: "Applied Microeconomics", desc: "Labour, industrial organisation, education, health, household behaviour." },
                { title: "Development &amp; International Economics", desc: "Trade, growth, inequality, place-based policy, field experiments." },
                { title: "Financial Economics &amp; Climate Finance", desc: "Banking, asset pricing, household finance, climate-risk integration." },
              ].map((area) => (
                <div key={area.title} className="bg-gray-50 border border-gray-200 rounded-sm p-4 hover:border-accent transition-colors">
                  <h3 className="font-serif text-sm font-semibold text-primary mb-1" dangerouslySetInnerHTML={{ __html: area.title }} />
                  <p className="font-serif text-xs leading-relaxed text-gray-700" dangerouslySetInnerHTML={{ __html: area.desc }} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* === Submit CTA === */}
      <section className="bg-primary text-white">
        <div className="container mx-auto px-4 py-12 text-center">
          <Clock className="w-8 h-8 mx-auto text-accent mb-3" />
          <h2 className="font-serif text-2xl sm:text-3xl font-bold mb-2">
            Submissions are open year-round
          </h2>
          <p className="font-serif text-base opacity-90 max-w-2xl mx-auto mb-5">
            We welcome submissions on any topic in economics. Median time to first decision
            is {JOURNAL_STATS.averageTimeToFirstDecision} days · Average {JOURNAL_STATS.averagePeerReviewers} reviewers per paper · No APC.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Button
              size="lg"
              onClick={() => navigate("submission")}
              className="font-sans bg-white text-primary hover:bg-white/90 rounded-sm"
            >
              <Send className="w-4 h-4 mr-2" />
              Submit your manuscript
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => navigate("author-guidelines")}
              className="font-sans rounded-sm border-white/70 bg-transparent text-white shadow-none transition-colors duration-200 hover:bg-white hover:text-primary hover:border-white focus-visible:ring-white/50"
            >
              Author Guidelines
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* === Journal identity strip === */}
      <section className="bg-gray-50 border-b border-gray-200">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center font-sans text-xs">
            <div>
              <BookOpen className="w-5 h-5 mx-auto text-accent mb-1" />
              <div className="font-semibold text-primary">ISSN</div>
              <div className="text-gray-600">{JOURNAL_INFO.issnPrint}</div>
            </div>
            <div>
              <Award className="w-5 h-5 mx-auto text-accent mb-1" />
              <div className="font-semibold text-primary">ABDC Rating</div>
              <div className="text-gray-600">{JOURNAL_INFO.abdcRating} (2024)</div>
            </div>
            <div>
              <ShieldCheck className="w-5 h-5 mx-auto text-accent mb-1" />
              <div className="font-semibold text-primary">Peer Review</div>
              <div className="text-gray-600">Double-blind</div>
            </div>
            <div>
              <Globe2 className="w-5 h-5 mx-auto text-accent mb-1" />
              <div className="font-semibold text-primary">Access</div>
              <div className="text-gray-600">Open · CC BY-NC 4.0</div>
            </div>
          </div>
        </div>
      </section>

      {/* === Indexing === */}
      <section className="bg-white">
        <div className="container mx-auto px-4 py-10">
          <div className="text-center mb-6">
            <div className="font-sans text-xs uppercase tracking-widest text-accent mb-2">
              Abstracting &amp; Indexing
            </div>
            <h2 className="font-serif text-2xl font-bold text-primary">
              Indexed In
            </h2>
          </div>
          <div className="flex flex-wrap items-stretch justify-center gap-3 max-w-4xl mx-auto">
            {INDEXING_SERVICES.map((svc) => (
              <div
                key={svc.name}
                className="flex items-center gap-2.5 font-sans text-sm px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-sm text-gray-700"
              >
                <BadgeCheck className="w-4 h-4 text-accent flex-shrink-0" aria-hidden />
                <span>
                  <span className="font-semibold text-primary">{svc.name}</span>
                  <span className="text-gray-500"> · {svc.badge}</span>
                </span>
              </div>
            ))}
          </div>
          <p className="mt-4 text-center font-sans text-xs text-gray-500">
            ISSN {JOURNAL_INFO.issnPrint} (print) · eISSN {JOURNAL_INFO.issnOnline} (online)
          </p>
        </div>
      </section>

      {/* === Editorial office === */}
      <section className="bg-gray-50 border-t border-gray-200">
        <div className="container mx-auto px-4 py-10">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white border border-gray-200 rounded-sm p-5">
              <MapPin className="w-5 h-5 text-accent mb-2" />
              <h3 className="font-serif text-base font-semibold text-primary mb-2">Editorial Office</h3>
              <p className="font-sans text-sm text-gray-600 leading-relaxed">
                Department of Economics<br />
                Hanyang University<br />
                222 Wangsimni-ro, Seongdong-gu<br />
                Seoul 04763, Republic of Korea
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-sm p-5">
              <Mail className="w-5 h-5 text-accent mb-2" />
              <h3 className="font-serif text-base font-semibold text-primary mb-2">Contact</h3>
              <p className="font-sans text-sm text-gray-600 leading-relaxed">
                <a href={`mailto:${JOURNAL_INFO.contactEmail}`} className="text-primary hover:text-accent hover:underline">
                  {JOURNAL_INFO.contactEmail}
                </a>
                <br />
                Tel: {JOURNAL_INFO.phone}<br />
                Fax: {JOURNAL_INFO.fax}
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-sm p-5">
              <Send className="w-5 h-5 text-accent mb-2" />
              <h3 className="font-serif text-base font-semibold text-primary mb-2">Submission Portal</h3>
              <p className="font-sans text-sm text-gray-600 leading-relaxed mb-3">
                Submit your manuscript through our online submission system.
              </p>
              <Button
                onClick={() => navigate("submission")}
                size="sm"
                className="font-sans bg-primary text-white hover:bg-primary/90 rounded-sm"
              >
                Submit Now
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function ArticleRankCard({
  article,
  rank,
  metric,
}: {
  article: (typeof ARTICLES)[number];
  rank: number;
  metric: "downloads" | "citations";
}) {
  const { navigate } = useNav();
  const value = metric === "downloads"
    ? `${article.downloads.toLocaleString()} downloads`
    : `${article.citations} citations`;
  return (
    <article
      className="bg-white border border-gray-200 rounded-sm p-4 hover:border-accent hover:shadow-md transition-all cursor-pointer relative"
      onClick={() => navigate("reader", { articleId: article.id })}
    >
      <div className="absolute -top-2 -left-2 w-7 h-7 rounded-full bg-accent text-white font-serif text-sm font-bold flex items-center justify-center shadow">
        {rank}
      </div>
      <div className="pl-3">
        <div className="flex items-center gap-2 mb-1.5 flex-wrap">
          <Badge variant="outline" className="font-sans text-[10px] uppercase tracking-wide border-accent text-accent">
            {article.type}
          </Badge>
          <span className="font-sans text-[11px] text-gray-500">
            Vol. {article.volume}, No. {article.issue} ({article.year})
          </span>
        </div>
        <h3 className="font-serif text-base font-semibold leading-snug text-primary mb-1.5 hover:text-accent transition-colors line-clamp-3">
          {article.title}
        </h3>
        <p className="font-sans text-xs text-gray-600 mb-2 line-clamp-1">
          {article.authors.map((a) => a.name).join(", ")}
        </p>
        <div className="font-sans text-[11px] text-accent font-medium">
          {value}
        </div>
      </div>
    </article>
  );
}
