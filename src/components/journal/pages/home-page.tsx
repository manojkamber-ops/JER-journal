"use client";

import { useNav } from "../nav-context";
import { ArticleCard } from "../article-components";
import {
  ARTICLES,
  NEWS_ITEMS,
  JOURNAL_INFO,
  JOURNAL_STATS,
  INDEXING_SERVICES,
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
  CalendarDays,
  Send,
  FileText,
  ShieldCheck,
  Globe2,
  Clock,
} from "lucide-react";

export function HomePage() {
  const { navigate } = useNav();
  const currentIssueArticles = ARTICLES.filter((a) => a.volume === 30 && a.issue === 3);
  const featuredArticles = ARTICLES.filter((a) => a.featured).slice(0, 3);
  const latestNews = NEWS_ITEMS.slice(0, 4);

  const stats = [
    { icon: FileText, label: "Articles published", value: JOURNAL_STATS.totalArticles, suffix: "" },
    { icon: Download, label: "Downloads in 2024", value: JOURNAL_STATS.totalDownloads2024.toLocaleString(), suffix: "" },
    { icon: Quote, label: "Total citations", value: JOURNAL_STATS.totalCitations.toLocaleString(), suffix: "" },
    { icon: Users, label: "h5-index", value: JOURNAL_STATS.h5Index, suffix: "" },
  ];

  return (
    <div>
      {/* HERO */}
      <section className="relative bg-primary text-primary-foreground overflow-hidden">
        <div className="absolute inset-0 opacity-[0.07]" style={{
          backgroundImage: "radial-gradient(circle at 1px 1px, #b0894f 1px, transparent 0)",
          backgroundSize: "32px 32px",
        }} />
        <div className="container mx-auto px-4 py-16 lg:py-20 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Badge className="bg-accent text-accent-foreground hover:bg-accent font-sans text-[11px] uppercase tracking-wider">
                  ABDC Rating: {JOURNAL_INFO.abdcRating}
                </Badge>
                <Badge variant="outline" className="border-accent/60 text-accent font-sans text-[11px] uppercase tracking-wider">
                  FoR {JOURNAL_INFO.fieldOfResearch}
                </Badge>
                <Badge variant="outline" className="border-primary-foreground/40 text-primary-foreground font-sans text-[11px] uppercase tracking-wider">
                  Open Access
                </Badge>
              </div>

              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05] mb-5">
                Journal of Economic Research
              </h1>

              <p className="font-serif text-lg lg:text-xl leading-relaxed opacity-90 mb-6 max-w-xl">
                A peer-reviewed, open-access economics journal publishing rigorous
                empirical and theoretical research on the economies of Asia, the
                Asia-Pacific, and the developing world. Published quarterly by
                Hanyang University, Seoul, since 1996.
              </p>

              <div className="flex flex-wrap gap-3 mb-8">
                <Button
                  size="lg"
                  onClick={() => navigate("current-issue")}
                  className="bg-accent text-accent-foreground hover:bg-accent/90 font-sans"
                >
                  Read Current Issue
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  onClick={() => navigate("submission")}
                  className="border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground/10 font-sans"
                >
                  <Send className="w-4 h-4 mr-2" />
                  Submit a Manuscript
                </Button>
              </div>

              <div className="flex flex-wrap gap-x-6 gap-y-2 font-sans text-xs opacity-85">
                <span className="flex items-center gap-1.5">
                  <BookOpen className="w-3.5 h-3.5" /> ISSN {JOURNAL_INFO.issnPrint}
                </span>
                <span className="flex items-center gap-1.5">
                  <Globe2 className="w-3.5 h-3.5" /> Indexed in Scopus &amp; KCI
                </span>
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5" /> Double-blind peer review
                </span>
              </div>
            </div>

            {/* Current Issue highlight card */}
            <div className="bg-primary-foreground text-foreground rounded-md shadow-2xl overflow-hidden">
              <div className="bg-secondary border-b border-border px-5 py-3 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <CalendarDays className="w-4 h-4 text-accent" />
                  <span className="font-sans text-xs uppercase tracking-widest text-muted-foreground">
                    Current Issue · July 2025
                  </span>
                </div>
                <span className="font-serif text-sm font-semibold text-primary">
                  Vol. 30, No. 3
                </span>
              </div>
              <div className="p-5">
                <p className="font-sans text-xs text-muted-foreground mb-2">
                  Featuring 7 articles including:
                </p>
                <ul className="space-y-3 max-h-72 overflow-y-auto journal-scroll pr-2">
                  {currentIssueArticles.map((article) => (
                    <li
                      key={article.id}
                      onClick={() => navigate("article", { articleId: article.id })}
                      className="cursor-pointer group"
                    >
                      <h3 className="font-serif text-sm font-semibold leading-snug text-primary group-hover:text-accent transition-colors">
                        {article.title}
                      </h3>
                      <p className="font-sans text-xs text-muted-foreground mt-0.5">
                        {article.authors.map((a) => a.name).join(", ")}
                      </p>
                      <p className="font-sans text-[11px] text-muted-foreground mt-0.5">
                        pp. {article.pages} · {article.citations} cited
                      </p>
                    </li>
                  ))}
                </ul>
                <Button
                  onClick={() => navigate("current-issue")}
                  variant="ghost"
                  size="sm"
                  className="w-full mt-4 font-sans text-accent hover:text-accent hover:bg-accent/10"
                >
                  View full issue contents
                  <ChevronRight className="w-4 h-4 ml-1" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS BAR */}
      <section className="bg-secondary border-y border-border">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((s) => {
              const Icon = s.icon;
              return (
                <div key={s.label} className="text-center">
                  <Icon className="w-6 h-6 mx-auto text-accent mb-2" />
                  <div className="font-serif text-2xl sm:text-3xl font-bold text-primary">
                    {s.value}
                  </div>
                  <div className="font-sans text-xs text-muted-foreground mt-1 uppercase tracking-wide">
                    {s.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FEATURED ARTICLES */}
      <section className="container mx-auto px-4 py-14">
        <div className="flex items-end justify-between mb-8 border-b border-border pb-3">
          <div>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-primary">
              Featured Articles
            </h2>
            <p className="font-sans text-sm text-muted-foreground mt-1">
              Editors&apos; selections from recent issues
            </p>
          </div>
          <Button
            variant="ghost"
            onClick={() => navigate("archive")}
            className="font-sans text-accent hover:text-accent"
          >
            Browse archive
            <ArrowRight className="w-4 h-4 ml-1" />
          </Button>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {featuredArticles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
      </section>

      {/* NEWS + ANNOUNCEMENTS */}
      <section className="bg-secondary/40 border-y border-border">
        <div className="container mx-auto px-4 py-14">
          <div className="grid lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2">
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-primary mb-2">
                News &amp; Announcements
              </h2>
              <p className="font-sans text-sm text-muted-foreground mb-6">
                Recent updates from the editorial office
              </p>
              <div className="space-y-4">
                {latestNews.map((item) => (
                  <article
                    key={item.id}
                    className="bg-card border border-border rounded-md p-5 hover:border-accent transition-colors cursor-pointer"
                    onClick={() => navigate("news")}
                  >
                    <div className="flex items-center gap-2 mb-2 flex-wrap">
                      <Badge variant="outline" className="font-sans text-[10px] uppercase tracking-wide border-accent text-accent">
                        {item.category}
                      </Badge>
                      <span className="font-sans text-[11px] text-muted-foreground">
                        {new Date(item.date).toLocaleDateString("en-GB", {
                          day: "numeric",
                          month: "long",
                          year: "numeric",
                        })}
                      </span>
                    </div>
                    <h3 className="font-serif text-lg font-semibold text-primary mb-1.5 hover:text-accent transition-colors">
                      {item.title}
                    </h3>
                    <p className="font-serif text-sm leading-relaxed text-foreground/85 line-clamp-2">
                      {item.summary}
                    </p>
                  </article>
                ))}
              </div>
              <Button
                variant="outline"
                onClick={() => navigate("news")}
                className="mt-6 font-sans"
              >
                View all news
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>

            {/* Sidebar — journal at a glance */}
            <aside className="space-y-6">
              <div className="bg-primary text-primary-foreground rounded-md p-6">
                <h3 className="font-serif text-lg font-semibold mb-3 text-accent">
                  Journal at a Glance
                </h3>
                <dl className="space-y-3 font-sans text-sm">
                  <div className="flex justify-between border-b border-primary-foreground/15 pb-2">
                    <dt className="opacity-80">Publisher</dt>
                    <dd className="font-medium text-right">Hanyang University</dd>
                  </div>
                  <div className="flex justify-between border-b border-primary-foreground/15 pb-2">
                    <dt className="opacity-80">Founded</dt>
                    <dd className="font-medium">{JOURNAL_INFO.founded}</dd>
                  </div>
                  <div className="flex justify-between border-b border-primary-foreground/15 pb-2">
                    <dt className="opacity-80">Frequency</dt>
                    <dd className="font-medium text-right">Quarterly</dd>
                  </div>
                  <div className="flex justify-between border-b border-primary-foreground/15 pb-2">
                    <dt className="opacity-80">Acceptance rate</dt>
                    <dd className="font-medium">{JOURNAL_STATS.acceptanceRate}</dd>
                  </div>
                  <div className="flex justify-between border-b border-primary-foreground/15 pb-2">
                    <dt className="opacity-80">Avg. time to decision</dt>
                    <dd className="font-medium">{JOURNAL_STATS.averageTimeToFirstDecision} days</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="opacity-80">Article processing charge</dt>
                    <dd className="font-medium text-accent">None</dd>
                  </div>
                </dl>
              </div>

              <div className="bg-card border border-border rounded-md p-6">
                <h3 className="font-serif text-base font-semibold text-primary mb-3 flex items-center gap-2">
                  <Award className="w-4 h-4 text-accent" />
                  Indexed In
                </h3>
                <div className="flex flex-wrap gap-1.5">
                  {INDEXING_SERVICES.map((svc) => (
                    <Badge key={svc.name} variant="secondary" className="font-sans text-[10px]">
                      {svc.name}
                    </Badge>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* AIMS & SCOPE */}
      <section className="container mx-auto px-4 py-14">
        <div className="grid lg:grid-cols-3 gap-10">
          <div>
            <div className="font-sans text-xs uppercase tracking-widest text-accent mb-2">
              About the Journal
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-primary mb-4">
              Aims &amp; Scope
            </h2>
            <p className="font-serif text-base leading-relaxed text-foreground/85">
              The Journal of Economic Research publishes original theoretical and
              empirical contributions across the full breadth of economics, with a
              particular interest in research on the economies of Asia, the
              Asia-Pacific, and developing countries more broadly.
            </p>
            <Button
              variant="link"
              onClick={() => navigate("about")}
              className="font-sans text-accent p-0 mt-4 hover:text-accent"
            >
              Learn more about the journal
              <ArrowRight className="w-4 h-4 ml-1" />
            </Button>
          </div>

          <div className="lg:col-span-2 grid sm:grid-cols-2 gap-5">
            {[
              {
                title: "Macroeconomics & Monetary Policy",
                description:
                  "Monetary policy transmission, fiscal policy, exchange rates, inflation dynamics, financial stability, and macroprudential regulation in emerging markets.",
                icon: "📈",
              },
              {
                title: "Applied Microeconomics",
                description:
                  "Labour economics, industrial organisation, the economics of education and health, and household behaviour with a strong empirical orientation.",
                icon: "🔬",
              },
              {
                title: "Development & International Economics",
                description:
                  "Trade and global value chains, growth, inequality, place-based policy, and field-experimental evidence from developing economies.",
                icon: "🌍",
              },
              {
                title: "Financial Economics & Climate Finance",
                description:
                  "Banking, asset pricing, household finance, and the integration of climate risk into financial and macroeconomic analysis.",
                icon: "🏦",
              },
            ].map((area) => (
              <div
                key={area.title}
                className="bg-card border border-border rounded-md p-5 hover:border-accent transition-colors"
              >
                <div className="text-2xl mb-2" aria-hidden>
                  {area.icon}
                </div>
                <h3 className="font-serif text-base font-semibold text-primary mb-2">
                  {area.title}
                </h3>
                <p className="font-serif text-sm leading-relaxed text-foreground/80">
                  {area.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SUBMIT CTA */}
      <section className="bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 py-14 text-center">
          <Clock className="w-8 h-8 mx-auto text-accent mb-4" />
          <h2 className="font-serif text-2xl sm:text-3xl font-bold mb-3">
            Submissions are open year-round
          </h2>
          <p className="font-serif text-base opacity-90 max-w-2xl mx-auto mb-6">
            The Journal of Economic Research welcomes submissions on any topic in
            economics. Our median time to first editorial decision is {JOURNAL_STATS.averageTimeToFirstDecision} days,
            with an average of {JOURNAL_STATS.averagePeerReviewers} reviewers per paper. We do not charge
            article processing charges.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Button
              size="lg"
              onClick={() => navigate("submission")}
              className="bg-accent text-accent-foreground hover:bg-accent/90 font-sans"
            >
              <Send className="w-4 h-4 mr-2" />
              Submit your manuscript
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => navigate("author-guidelines")}
              className="border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground/10 font-sans"
            >
              Author Guidelines
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
