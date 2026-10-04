"use client";

import { AUTHOR_GUIDELINES, JOURNAL_INFO, PEER_REVIEW_PROCESS, JOURNAL_STATS } from "@/data/journal";
import { useNav } from "../nav-context";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Send,
  FileText,
  ListChecks,
  ShieldCheck,
  ArrowRight,
  CheckCircle2,
  AlertTriangle,
  Code2,
  BookMarked,
} from "lucide-react";

export function AuthorGuidelinesPage() {
  const { navigate } = useNav();

  return (
    <div>
      {/* Hero */}
      <section className="bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 py-12">
          <div className="font-sans text-xs uppercase tracking-widest text-accent mb-2">
            For Authors
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold mb-3">
            Author Guidelines
          </h1>
          <p className="font-serif text-lg opacity-90 max-w-3xl">
            Guidelines for the preparation and submission of manuscripts to the Journal
            of Economic Research. Please read these guidelines carefully before
            submitting.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main content */}
          <div className="lg:col-span-2 space-y-10">
            {/* Manuscript types */}
            <div>
              <h2 className="font-serif text-2xl font-bold text-primary mb-4 border-b border-border pb-2 flex items-center gap-2">
                <FileText className="w-5 h-5 text-accent" />
                Manuscript Types
              </h2>
              <div className="space-y-4">
                {AUTHOR_GUIDELINES.manuscriptTypes.map((type) => (
                  <div key={type.type} className="bg-card border border-border rounded-md p-5">
                    <div className="flex items-start justify-between mb-2 flex-wrap gap-2">
                      <h3 className="font-serif text-base font-semibold text-primary">
                        {type.type}
                      </h3>
                      <Badge variant="secondary" className="font-sans text-[10px]">
                        {type.wordLimit}
                      </Badge>
                    </div>
                    <p className="font-serif text-sm leading-relaxed text-foreground/80">
                      {type.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Formatting requirements */}
            <div>
              <h2 className="font-serif text-2xl font-bold text-primary mb-4 border-b border-border pb-2 flex items-center gap-2">
                <ListChecks className="w-5 h-5 text-accent" />
                Formatting Requirements
              </h2>
              <ol className="space-y-2.5">
                {AUTHOR_GUIDELINES.formattingRequirements.map((req, idx) => (
                  <li key={idx} className="flex gap-3 font-serif text-base leading-relaxed text-foreground/85">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-accent/20 text-accent text-xs font-semibold flex items-center justify-center mt-0.5">
                      {idx + 1}
                    </span>
                    <span>{req}</span>
                  </li>
                ))}
              </ol>
            </div>

            {/* Reference style */}
            <div>
              <h2 className="font-serif text-2xl font-bold text-primary mb-4 border-b border-border pb-2 flex items-center gap-2">
                <BookMarked className="w-5 h-5 text-accent" />
                Reference Style
              </h2>
              <p className="font-serif text-base leading-relaxed text-foreground/85 mb-3">
                References should follow the style of the American Economic Review.
                In-text citations use the author–date format. The reference list should
                be alphabetised by surname of the first author and include DOIs where
                available.
              </p>
              <div className="bg-secondary/40 border border-border rounded-md p-4 font-serif text-sm">
                <p className="font-sans text-xs uppercase tracking-widest text-muted-foreground mb-2">
                  Example — Journal article
                </p>
                <p className="text-foreground/85">
                  Acemoglu, D. and D. Autor (2011), “Skills, tasks and technologies:
                  Implications for employment and earnings”, <em>Handbook of Labor
                  Economics</em>, Vol. 4, pp. 1043–1171.
                  https://doi.org/10.1016/S0169-7218(11)02410-5
                </p>
              </div>
              <div className="bg-secondary/40 border border-border rounded-md p-4 font-serif text-sm mt-3">
                <p className="font-sans text-xs uppercase tracking-widest text-muted-foreground mb-2">
                  Example — Working paper
                </p>
                <p className="text-foreground/85">
                  Borusyak, K., X. Jaravel and J. Spiess (2024), “Revisiting event-study
                  designs: Robust and efficient estimation”, <em>Review of Economic
                  Studies</em>, forthcoming. NBER Working Paper No. 28985.
                </p>
              </div>
            </div>

            {/* Replication data */}
            <div>
              <h2 className="font-serif text-2xl font-bold text-primary mb-4 border-b border-border pb-2 flex items-center gap-2">
                <Code2 className="w-5 h-5 text-accent" />
                Replication Data &amp; Code
              </h2>
              <p className="font-serif text-base leading-relaxed text-foreground/85 mb-3">
                The Journal of Economic Research requires authors of empirical papers to
                deposit replication data and code in a recognised repository (e.g.,
                Harvard Dataverse, ICPSR, Open Science Framework) prior to publication.
                The deposit URL should be included at submission. Authors may request
                an embargo on data release for a period of up to 12 months following
                publication where commercial or confidentiality constraints exist.
              </p>
              <div className="bg-accent/10 border border-accent/30 rounded-md p-4 flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <p className="font-sans text-sm text-foreground/85">
                  <strong className="text-primary">Important:</strong> Submissions
                  without a replication data statement will be returned to authors
                  prior to peer review. If you are unable to share data, please provide
                  a detailed justification in your cover letter.
                </p>
              </div>
            </div>

            {/* Ethics & integrity */}
            <div>
              <h2 className="font-serif text-2xl font-bold text-primary mb-4 border-b border-border pb-2 flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-accent" />
                Research &amp; Publication Ethics
              </h2>
              <p className="font-serif text-base leading-relaxed text-foreground/85 mb-3">
                The journal adheres to the Committee on Publication Ethics (COPE)
                guidelines. Authors are expected to comply with the following
                principles:
              </p>
              <ul className="space-y-2">
                {AUTHOR_GUIDELINES.ethics.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 font-serif text-base leading-relaxed text-foreground/85">
                    <CheckCircle2 className="w-4 h-4 mt-1 text-accent flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Submission process */}
            <div>
              <h2 className="font-serif text-2xl font-bold text-primary mb-4 border-b border-border pb-2 flex items-center gap-2">
                <Send className="w-5 h-5 text-accent" />
                Submission Process
              </h2>
              <ol className="space-y-3">
                {AUTHOR_GUIDELINES.submissionProcess.map((step, idx) => (
                  <li key={idx} className="flex gap-3 font-serif text-base leading-relaxed text-foreground/85">
                    <span className="flex-shrink-0 w-7 h-7 rounded-full bg-primary text-primary-foreground text-xs font-semibold flex items-center justify-center mt-0.5">
                      {idx + 1}
                    </span>
                    <span>{step}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="space-y-6">
            <div className="bg-card border border-border rounded-md p-5 sticky top-32">
              <h3 className="font-serif text-base font-semibold text-primary mb-3 border-b border-border pb-2">
                Quick Reference
              </h3>
              <dl className="space-y-2.5 font-sans text-sm">
                <div className="flex justify-between gap-2 border-b border-border pb-2">
                  <dt className="text-muted-foreground">Word limit</dt>
                  <dd className="font-medium">8,000–12,000</dd>
                </div>
                <div className="flex justify-between gap-2 border-b border-border pb-2">
                  <dt className="text-muted-foreground">Abstract</dt>
                  <dd className="font-medium">≤ 250 words</dd>
                </div>
                <div className="flex justify-between gap-2 border-b border-border pb-2">
                  <dt className="text-muted-foreground">Keywords</dt>
                  <dd className="font-medium">4–6</dd>
                </div>
                <div className="flex justify-between gap-2 border-b border-border pb-2">
                  <dt className="text-muted-foreground">Reference style</dt>
                  <dd className="font-medium text-right text-xs">AER (author–date)</dd>
                </div>
                <div className="flex justify-between gap-2 border-b border-border pb-2">
                  <dt className="text-muted-foreground">File format</dt>
                  <dd className="font-medium">PDF (max 25 MB)</dd>
                </div>
                <div className="flex justify-between gap-2 border-b border-border pb-2">
                  <dt className="text-muted-foreground">Review model</dt>
                  <dd className="font-medium text-right text-xs">Double-blind</dd>
                </div>
                <div className="flex justify-between gap-2 border-b border-border pb-2">
                  <dt className="text-muted-foreground">APC</dt>
                  <dd className="font-medium text-accent">None</dd>
                </div>
                <div className="flex justify-between gap-2">
                  <dt className="text-muted-foreground">Licence</dt>
                  <dd className="font-medium text-xs">CC BY-NC 4.0</dd>
                </div>
              </dl>

              <Button
                onClick={() => navigate("submission")}
                className="w-full mt-5 font-sans bg-primary text-primary-foreground hover:bg-primary/90"
              >
                <Send className="w-4 h-4 mr-2" />
                Submit your manuscript
              </Button>
              <Button
                onClick={() => navigate("policies")}
                variant="outline"
                className="w-full mt-2 font-sans"
              >
                View journal policies
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>

            <div className="bg-secondary/40 border border-border rounded-md p-5">
              <h3 className="font-serif text-base font-semibold text-primary mb-3 border-b border-border pb-2">
                Editorial Timeline
              </h3>
              <dl className="space-y-2 font-sans text-sm">
                <div className="flex justify-between gap-2 border-b border-border pb-1.5">
                  <dt className="text-muted-foreground">Initial decision</dt>
                  <dd className="font-medium">7 working days</dd>
                </div>
                <div className="flex justify-between gap-2 border-b border-border pb-1.5">
                  <dt className="text-muted-foreground">First review</dt>
                  <dd className="font-medium">{JOURNAL_STATS.averageTimeToFirstDecision} days (median)</dd>
                </div>
                <div className="flex justify-between gap-2 border-b border-border pb-1.5">
                  <dt className="text-muted-foreground">Time to publication</dt>
                  <dd className="font-medium">{JOURNAL_STATS.averageTimeToPublication} days</dd>
                </div>
                <div className="flex justify-between gap-2">
                  <dt className="text-muted-foreground">Acceptance rate</dt>
                  <dd className="font-medium">{JOURNAL_STATS.acceptanceRate}</dd>
                </div>
              </dl>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
}
