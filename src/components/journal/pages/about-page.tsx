"use client";

import { useNav } from "../nav-context";
import {
  JOURNAL_INFO,
  JOURNAL_TIMELINE,
  JOURNAL_STATS,
  INDEXING_SERVICES,
  JOURNAL_INFO as JI,
} from "@/data/journal";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Award,
  BookOpen,
  Globe2,
  ShieldCheck,
  Send,
  Users,
  Quote,
  Download,
  FileText,
  Clock,
  Heart,
  Search,
} from "lucide-react";

export function AboutPage() {
  const { navigate } = useNav();

  const stats = [
    { icon: FileText, label: "Articles published (since 1996)", value: JOURNAL_STATS.totalArticles },
    { icon: Download, label: "Downloads in 2024", value: JOURNAL_STATS.totalDownloads2024.toLocaleString() },
    { icon: Quote, label: "Total citations", value: JOURNAL_STATS.totalCitations.toLocaleString() },
    { icon: Users, label: "h5-index (Google Scholar)", value: JOURNAL_STATS.h5Index },
  ];

  return (
    <div>
      {/* Hero */}
      <section className="bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 py-12">
          <div className="font-sans text-xs uppercase tracking-widest text-accent mb-2">
            About the Journal
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold mb-3">
            About the Journal of Economic Research
          </h1>
          <p className="font-serif text-lg opacity-90 max-w-3xl">
            A peer-reviewed, open-access economics journal published quarterly by the
            Department of Economics at Hanyang University, Seoul — since 1996.
          </p>
        </div>
      </section>

      {/* Identity block */}
      <section className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h2 className="font-serif text-2xl font-bold text-primary mb-3">Aims &amp; Scope</h2>
              <p className="font-serif text-base leading-relaxed text-foreground/85 mb-3">
                The Journal of Economic Research (JER) publishes original theoretical
                and empirical contributions across the full breadth of economics. The
                journal has a particular interest in research on the economies of Asia,
                the Asia-Pacific region, and developing countries more broadly, but
                welcomes submissions on any topic in economics where the research meets
                the journal&apos;s standards of rigour and significance.
              </p>
              <p className="font-serif text-base leading-relaxed text-foreground/85 mb-3">
                JER has historically emphasised three thematic clusters: applied
                microeconometrics in Asian economies, monetary and financial economics
                of emerging markets, and the evaluation of place-based economic policy.
                Since 2021, the journal has expanded its editorial agenda to encompass
                climate-finance integration, machine-learning-assisted causal inference,
                and the economics of digital platforms.
              </p>
              <p className="font-serif text-base leading-relaxed text-foreground/85">
                The journal operates a fully open-access model under a Creative Commons
                Attribution-NonCommercial (CC BY-NC) licence and levies no article
                processing charges. Publication costs are underwritten by Hanyang
                University, in keeping with the institution&apos;s commitment to broad
                dissemination of scholarly research.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-2xl font-bold text-primary mb-3">Editorial Policy</h2>
              <p className="font-serif text-base leading-relaxed text-foreground/85 mb-3">
                The Journal of Economic Research operates a double-blind peer review
                process. Each submission that passes initial editorial screening is
                assigned to an Associate Editor whose expertise matches the paper&apos;s
                topic. The Associate Editor identifies at least two external referees
                drawn from the journal&apos;s panel of more than 250 reviewers across Asia,
                Europe, and North America. The median time to a first decision is
                {" "}{JOURNAL_STATS.averageTimeToFirstDecision} days, and the 90th percentile is 62 days.
              </p>
              <p className="font-serif text-base leading-relaxed text-foreground/85">
                The journal adheres to the Committee on Publication Ethics (COPE)
                guidelines on all matters of research and publication integrity.
                Plagiarism, including self-plagiarism, is treated as serious research
                misconduct; all submissions are screened using iThenticate prior to peer
                review.
              </p>
            </div>
          </div>

          {/* Sidebar — quick facts */}
          <aside className="space-y-6">
            <div className="bg-card border border-border rounded-md p-6">
              <h3 className="font-serif text-base font-semibold text-primary mb-4 flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-accent" />
                Journal Identity
              </h3>
              <dl className="space-y-2.5 font-sans text-sm">
                <div className="flex justify-between gap-2 border-b border-border pb-2">
                  <dt className="text-muted-foreground">Full title</dt>
                  <dd className="font-medium text-right">Journal of Economic Research</dd>
                </div>
                <div className="flex justify-between gap-2 border-b border-border pb-2">
                  <dt className="text-muted-foreground">Abbreviation</dt>
                  <dd className="font-medium">J. Econ. Res.</dd>
                </div>
                <div className="flex justify-between gap-2 border-b border-border pb-2">
                  <dt className="text-muted-foreground">ISSN (print)</dt>
                  <dd className="font-medium font-mono">{JI.issnPrint}</dd>
                </div>
                <div className="flex justify-between gap-2 border-b border-border pb-2">
                  <dt className="text-muted-foreground">ISSN (online)</dt>
                  <dd className="font-medium font-mono">{JI.issnOnline}</dd>
                </div>
                <div className="flex justify-between gap-2 border-b border-border pb-2">
                  <dt className="text-muted-foreground">DOI prefix</dt>
                  <dd className="font-medium font-mono">{JI.doiPrefix}</dd>
                </div>
                <div className="flex justify-between gap-2 border-b border-border pb-2">
                  <dt className="text-muted-foreground">Field of Research</dt>
                  <dd className="font-medium">{JI.fieldOfResearch} ({JI.forDescription})</dd>
                </div>
                <div className="flex justify-between gap-2 border-b border-border pb-2">
                  <dt className="text-muted-foreground">Frequency</dt>
                  <dd className="font-medium">Quarterly</dd>
                </div>
                <div className="flex justify-between gap-2 border-b border-border pb-2">
                  <dt className="text-muted-foreground">Founded</dt>
                  <dd className="font-medium">{JI.founded}</dd>
                </div>
                <div className="flex justify-between gap-2 border-b border-border pb-2">
                  <dt className="text-muted-foreground">Language</dt>
                  <dd className="font-medium">{JI.language}</dd>
                </div>
                <div className="flex justify-between gap-2">
                  <dt className="text-muted-foreground">Format</dt>
                  <dd className="font-medium">Online &amp; Print-on-demand</dd>
                </div>
              </dl>
            </div>

            <div className="bg-accent/10 border border-accent/30 rounded-md p-6">
              <h3 className="font-serif text-base font-semibold text-primary mb-2 flex items-center gap-2">
                <Award className="w-4 h-4 text-accent" />
                ABDC Rating
              </h3>
              <p className="font-serif text-sm text-foreground/85 mb-3">
                The Journal of Economic Research is listed in the Australian Business
                Deans Council (ABDC) Journal Quality List at the <strong>B</strong> tier
                (reviewed 2019, 2022, 2024).
              </p>
              <p className="font-sans text-xs text-muted-foreground">
                FoR code: {JI.fieldOfResearch} · {JI.forDescription}
              </p>
            </div>
          </aside>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-secondary border-y border-border">
        <div className="container mx-auto px-4 py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((s) => {
              const Icon = s.icon;
              return (
                <div key={s.label} className="text-center">
                  <Icon className="w-6 h-6 mx-auto text-accent mb-2" />
                  <div className="font-serif text-2xl sm:text-3xl font-bold text-primary">
                    {s.value}
                  </div>
                  <div className="font-sans text-xs text-muted-foreground mt-1 uppercase tracking-wide px-2">
                    {s.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* History timeline */}
      <section className="container mx-auto px-4 py-14">
        <div className="text-center mb-10">
          <div className="font-sans text-xs uppercase tracking-widest text-accent mb-2">
            Journal History
          </div>
          <h2 className="font-serif text-3xl font-bold text-primary">
            Three Decades of Economic Research
          </h2>
          <p className="font-serif text-base text-muted-foreground mt-2 max-w-2xl mx-auto">
            From its founding at Hanyang University in 1996 to its current position as
            an ABDC-rated, KCI-listed open-access journal.
          </p>
        </div>

        <div className="relative max-w-3xl mx-auto">
          <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-px bg-border -translate-x-1/2" aria-hidden />
          <ol className="space-y-8">
            {JOURNAL_TIMELINE.map((entry, idx) => (
              <li
                key={entry.year}
                className={`relative flex flex-col sm:flex-row gap-4 sm:gap-8 ${
                  idx % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"
                }`}
              >
                <div className="sm:w-1/2 pl-12 sm:pl-0 sm:px-6">
                  <div className="bg-card border border-border rounded-md p-5 hover:border-accent transition-colors">
                    <div className="font-serif text-2xl font-bold text-accent mb-1">
                      {entry.year}
                    </div>
                    <h3 className="font-serif text-base font-semibold text-primary mb-1.5">
                      {entry.title}
                    </h3>
                    <p className="font-serif text-sm leading-relaxed text-foreground/80">
                      {entry.description}
                    </p>
                  </div>
                </div>
                <div
                  className="absolute left-4 sm:left-1/2 top-3 w-3 h-3 rounded-full bg-accent ring-4 ring-background -translate-x-1/2"
                  aria-hidden
                />
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Indexing */}
      <section className="bg-secondary/50 border-y border-border">
        <div className="container mx-auto px-4 py-14">
          <div className="text-center mb-8">
            <div className="font-sans text-xs uppercase tracking-widest text-accent mb-2">
              Abstracting &amp; Indexing
            </div>
            <h2 className="font-serif text-3xl font-bold text-primary">
              Where the Journal Is Indexed
            </h2>
            <p className="font-serif text-base text-muted-foreground mt-2 max-w-2xl mx-auto">
              The Journal of Economic Research (ISSN {JI.issnPrint}, eISSN {JI.issnOnline}) is
              rated in the ABDC Journal Quality List and listed in the Korea Citation Index.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4 max-w-3xl mx-auto">
            {INDEXING_SERVICES.map((svc) => (
              <div
                key={svc.name}
                className="bg-card border border-border rounded-md p-5 hover:border-accent transition-colors"
              >
                <div className="flex items-start gap-3">
                  <Globe2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-serif text-base font-semibold text-primary">
                      {svc.name}
                    </h3>
                    <p className="font-sans text-xs text-muted-foreground mt-1">
                      <span className="font-medium text-foreground">{svc.badge}</span> · since {svc.since}
                    </p>
                    <p className="font-sans text-xs text-muted-foreground">
                      {svc.coverage}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Submit CTA */}
      <section className="container mx-auto px-4 py-14">
        <div className="bg-primary text-primary-foreground rounded-md p-8 sm:p-12 text-center">
          <Send className="w-8 h-8 mx-auto text-accent mb-4" />
          <h2 className="font-serif text-2xl sm:text-3xl font-bold mb-3">
            Submit your research
          </h2>
          <p className="font-serif text-base opacity-90 max-w-2xl mx-auto mb-6">
            We welcome submissions on any topic in economics. Our median time to first
            decision is {JOURNAL_STATS.averageTimeToFirstDecision} days, with no article
            processing charges.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Button
              size="lg"
              onClick={() => navigate("submission")}
              className="bg-white text-primary hover:bg-white/90 font-sans"
            >
              <Send className="w-4 h-4 mr-2" />
              Submit a Manuscript
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
