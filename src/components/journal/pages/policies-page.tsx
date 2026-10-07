"use client";

import { PEER_REVIEW_PROCESS, JOURNAL_INFO, JOURNAL_STATS, INDEXING_SERVICES } from "@/data/journal";
import { useNav } from "../nav-context";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  ShieldCheck,
  Eye,
  Lock,
  Heart,
  AlertTriangle,
  Send,
  ScrollText,
  Globe2,
  Users,
  Award,
} from "lucide-react";

export function PoliciesPage() {
  const { navigate } = useNav();

  return (
    <div>
      {/* Hero */}
      <section className="bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 py-12">
          <div className="font-sans text-xs uppercase tracking-widest text-accent mb-2">
            Editorial Policies
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold mb-3">
            Journal Policies
          </h1>
          <p className="font-serif text-lg opacity-90 max-w-3xl">
            Editorial, peer review, open access, and publication ethics policies of the
            Journal of Economic Research.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-12">
            {/* Peer review process */}
            <section id="peer-review" className="scroll-mt-40">
              <h2 className="font-serif text-2xl font-bold text-primary mb-2 border-b border-border pb-2 flex items-center gap-2">
                <Users className="w-5 h-5 text-accent" />
                Peer Review Process
              </h2>
              <p className="font-serif text-base leading-relaxed text-foreground/85 mb-6">
                The Journal of Economic Research operates a double-blind peer review
                process. The diagram below summarises the five stages from initial
                submission to final publication.
              </p>
              <div className="space-y-4">
                {PEER_REVIEW_PROCESS.map((stage) => (
                  <div
                    key={stage.step}
                    className="bg-card border border-border rounded-md p-5 hover:border-accent transition-colors"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-primary-foreground font-serif text-lg font-bold flex items-center justify-center">
                        {stage.step}
                      </div>
                      <div className="flex-1">
                        <h3 className="font-serif text-base font-semibold text-primary mb-1.5">
                          {stage.title}
                        </h3>
                        <p className="font-serif text-sm leading-relaxed text-foreground/80">
                          {stage.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Open access policy */}
            <section id="open-access" className="scroll-mt-40">
              <h2 className="font-serif text-2xl font-bold text-primary mb-2 border-b border-border pb-2 flex items-center gap-2">
                <Globe2 className="w-5 h-5 text-accent" />
                Open Access Policy
              </h2>
              <p className="font-serif text-base leading-relaxed text-foreground/85 mb-4">
                The Journal of Economic Research is a fully open-access journal. All
                published articles are made freely available online immediately upon
                publication, without subscription barriers or article processing
                charges. Publication costs are underwritten by Hanyang University.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="bg-card border border-border rounded-md p-5">
                  <Eye className="w-5 h-5 text-accent mb-2" />
                  <h3 className="font-serif text-base font-semibold text-primary mb-1">
                    Free to read
                  </h3>
                  <p className="font-serif text-sm text-foreground/80 leading-relaxed">
                    All articles are immediately and permanently accessible online
                    without subscription.
                  </p>
                </div>
                <div className="bg-card border border-border rounded-md p-5">
                  <Heart className="w-5 h-5 text-accent mb-2" />
                  <h3 className="font-serif text-base font-semibold text-primary mb-1">
                    No APC
                  </h3>
                  <p className="font-serif text-sm text-foreground/80 leading-relaxed">
                    No article processing charges. Publication is fully funded by
                    Hanyang University.
                  </p>
                </div>
                <div className="bg-card border border-border rounded-md p-5">
                  <ScrollText className="w-5 h-5 text-accent mb-2" />
                  <h3 className="font-serif text-base font-semibold text-primary mb-1">
                    CC BY-NC 4.0
                  </h3>
                  <p className="font-serif text-sm text-foreground/80 leading-relaxed">
                    Articles are licensed under Creative Commons
                    Attribution-NonCommercial 4.0 International.
                  </p>
                </div>
                <div className="bg-card border border-border rounded-md p-5">
                  <Globe2 className="w-5 h-5 text-accent mb-2" />
                  <h3 className="font-serif text-base font-semibold text-primary mb-1">
                    KCI-listed
                  </h3>
                  <p className="font-serif text-sm text-foreground/80 leading-relaxed">
                    Listed in the Korea Citation Index (KCI) of the National Research Foundation of Korea.
                  </p>
                </div>
              </div>
            </section>

            {/* Publication ethics */}
            <section id="ethics" className="scroll-mt-40">
              <h2 className="font-serif text-2xl font-bold text-primary mb-2 border-b border-border pb-2 flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-accent" />
                Publication Ethics
              </h2>
              <p className="font-serif text-base leading-relaxed text-foreground/85 mb-4">
                The Journal of Economic Research adheres to the highest standards of
                publication ethics and follows the guidelines of the Committee on
                Publication Ethics (COPE). The journal expects all authors, editors,
                and reviewers to comply with the following principles.
              </p>

              <div className="space-y-3">
                <EthicsItem
                  title="Authorship and originality"
                  description="Authors must confirm that the submitted manuscript is original, has not been published elsewhere, and is not under consideration by another journal. All authors must have made a substantive contribution to the design, execution, or interpretation of the research."
                />
                <EthicsItem
                  title="Plagiarism and self-plagiarism"
                  description="All submissions are screened using iThenticate prior to peer review. Manuscripts with similarity scores exceeding 20 percent (excluding references) will be returned to the authors. Suspected plagiarism is investigated in accordance with COPE guidelines."
                />
                <EthicsItem
                  title="Conflicts of interest"
                  description="Authors, editors, and reviewers must disclose any financial or personal relationships that could be perceived as influencing the reported research or editorial decisions. The journal maintains a public register of editor and reviewer conflicts of interest."
                />
                <EthicsItem
                  title="Human and animal subjects"
                  description="Research involving human subjects must be approved by an appropriate institutional review board (IRB) and the approval number must be referenced in the manuscript. Informed consent must be obtained from all participants."
                />
                <EthicsItem
                  title="Data availability"
                  description="Authors of empirical papers must deposit replication data and code in a recognised repository. The journal supports the Transparency and Openness Promotion (TOP) guidelines and applies a Tier 2 data transparency standard by default."
                />
                <EthicsItem
                  title="Corrections and retractions"
                  description="Errors identified after publication are addressed through errata, corrigenda, or retractions, in accordance with COPE guidelines. Suspected research misconduct should be reported to the editorial office and will be investigated promptly."
                />
              </div>
            </section>

            {/* Confidentiality */}
            <section id="confidentiality" className="scroll-mt-40">
              <h2 className="font-serif text-2xl font-bold text-primary mb-2 border-b border-border pb-2 flex items-center gap-2">
                <Lock className="w-5 h-5 text-accent" />
                Confidentiality &amp; Anonymisation
              </h2>
              <p className="font-serif text-base leading-relaxed text-foreground/85">
                The journal operates a double-blind peer review process. Reviewers and
                authors are anonymised throughout the review process. Manuscripts under
                review are treated as confidential documents and are not shared with
                third parties. Reviewers must not use the content of manuscripts they
                review for personal advantage.
              </p>
            </section>
          </div>

          {/* Sidebar */}
          <aside className="space-y-6">
            <div className="bg-card border border-border rounded-md p-5 sticky top-32">
              <h3 className="font-serif text-base font-semibold text-primary mb-3 border-b border-border pb-2">
                Policy Summary
              </h3>
              <dl className="space-y-2.5 font-sans text-sm">
                <div className="flex justify-between gap-2 border-b border-border pb-2">
                  <dt className="text-muted-foreground">Review model</dt>
                  <dd className="font-medium text-right">Double-blind</dd>
                </div>
                <div className="flex justify-between gap-2 border-b border-border pb-2">
                  <dt className="text-muted-foreground">Median first decision</dt>
                  <dd className="font-medium">{JOURNAL_STATS.averageTimeToFirstDecision} days</dd>
                </div>
                <div className="flex justify-between gap-2 border-b border-border pb-2">
                  <dt className="text-muted-foreground">Median reviewers</dt>
                  <dd className="font-medium">{JOURNAL_STATS.averagePeerReviewers}</dd>
                </div>
                <div className="flex justify-between gap-2 border-b border-border pb-2">
                  <dt className="text-muted-foreground">Acceptance rate</dt>
                  <dd className="font-medium">{JOURNAL_STATS.acceptanceRate}</dd>
                </div>
                <div className="flex justify-between gap-2 border-b border-border pb-2">
                  <dt className="text-muted-foreground">Publication model</dt>
                  <dd className="font-medium text-right text-xs">Open Access (gold)</dd>
                </div>
                <div className="flex justify-between gap-2 border-b border-border pb-2">
                  <dt className="text-muted-foreground">Licence</dt>
                  <dd className="font-medium text-xs">CC BY-NC 4.0</dd>
                </div>
                <div className="flex justify-between gap-2 border-b border-border pb-2">
                  <dt className="text-muted-foreground">APC</dt>
                  <dd className="font-medium text-accent">None</dd>
                </div>
                <div className="flex justify-between gap-2">
                  <dt className="text-muted-foreground">Ethics framework</dt>
                  <dd className="font-medium text-xs">COPE</dd>
                </div>
              </dl>
            </div>

            <div className="bg-accent/10 border border-accent/30 rounded-md p-5">
              <h3 className="font-serif text-base font-semibold text-primary mb-2 flex items-center gap-2">
                <Award className="w-4 h-4 text-accent" />
                ABDC Rating: {JOURNAL_INFO.abdcRating}
              </h3>
              <p className="font-serif text-sm text-foreground/85">
                The Journal of Economic Research is listed at the &apos;{JOURNAL_INFO.abdcRating}&apos;
                tier of the Australian Business Deans Council Journal Quality List in
                Applied Economics, {JOURNAL_INFO.fieldOfResearch}.
              </p>
            </div>

            <div className="bg-primary text-primary-foreground rounded-md p-5">
              <h3 className="font-serif text-base font-semibold mb-3 text-accent">
                Have a Question?
              </h3>
              <p className="font-serif text-sm opacity-90 mb-3 leading-relaxed">
                For questions about editorial policy, peer review, or publication
                ethics, please contact the editorial office.
              </p>
              <Button
                onClick={() => navigate("contact")}
                variant="outline"
                size="sm"
                className="w-full font-sans border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground/10"
              >
                <Send className="w-4 h-4 mr-2" />
                Contact Editorial Office
              </Button>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
}

function EthicsItem({ title, description }: { title: string; description: string }) {
  return (
    <div className="bg-card border border-border rounded-md p-4">
      <div className="flex items-start gap-3">
        <AlertTriangle className="w-4 h-4 mt-1 text-accent flex-shrink-0" />
        <div>
          <h3 className="font-serif text-sm font-semibold text-primary mb-1">{title}</h3>
          <p className="font-serif text-sm leading-relaxed text-foreground/80">{description}</p>
        </div>
      </div>
    </div>
  );
}
