"use client";

import { useState } from "react";
import { useNav } from "../nav-context";
import { JOURNAL_INFO, JOURNAL_STATS } from "@/data/journal";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import {
  Upload,
  Send,
  FileText,
  CheckCircle2,
  Clock,
  Users,
  ShieldCheck,
  Heart,
  AlertCircle,
  ChevronRight,
} from "lucide-react";

export function SubmissionPage() {
  const { navigate } = useNav();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div>
      {/* Hero */}
      <section className="bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 py-12">
          <div className="font-sans text-xs uppercase tracking-widest text-accent mb-2">
            For Authors
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold mb-3">
            Submit a Manuscript
          </h1>
          <p className="font-serif text-lg opacity-90 max-w-3xl">
            The Journal of Economic Research welcomes original research on any topic in
            economics. Submissions are open year-round. Our median time to first
            decision is {JOURNAL_STATS.averageTimeToFirstDecision} days and there are no
            article processing charges.
          </p>
        </div>
      </section>

      {submitted ? (
        <section className="container mx-auto px-4 py-16">
          <Card className="max-w-2xl mx-auto">
            <CardContent className="pt-8 pb-8 text-center">
              <CheckCircle2 className="w-14 h-14 mx-auto text-accent mb-4" />
              <h2 className="font-serif text-2xl font-bold text-primary mb-3">
                Submission received
              </h2>
              <p className="font-serif text-base text-foreground/85 mb-2">
                Thank you for submitting your manuscript to the Journal of Economic Research.
              </p>
              <p className="font-sans text-sm text-muted-foreground mb-6">
                Your submission has been assigned reference number{" "}
                <span className="font-mono font-medium text-primary">JER-2025-{Math.floor(Math.random() * 9000) + 1000}</span>.
                You will receive a confirmation email within 48 hours, and an initial
                editorial decision within 7 working days.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-3">
                <Button
                  onClick={() => setSubmitted(false)}
                  variant="outline"
                  className="font-sans"
                >
                  Submit another manuscript
                </Button>
                <Button
                  onClick={() => navigate("home")}
                  className="font-sans bg-primary text-primary-foreground hover:bg-primary/90"
                >
                  Return to home
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>
      ) : (
        <section className="container mx-auto px-4 py-12">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Submission form */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader className="bg-secondary/40 border-b border-border">
                  <CardTitle className="font-serif text-xl text-primary">
                    New Submission
                  </CardTitle>
                  <CardDescription className="font-sans text-sm">
                    Please complete the form below. Fields marked with an asterisk
                    (*) are required. You will be able to upload files in the next step.
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-6">
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                      <Label htmlFor="title" className="font-sans text-sm font-medium">
                        Article Title <span className="text-destructive">*</span>
                      </Label>
                      <Input
                        id="title"
                        required
                        placeholder="Enter the full title of your manuscript"
                        className="mt-1.5 font-sans"
                      />
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="articletype" className="font-sans text-sm font-medium">
                          Article Type <span className="text-destructive">*</span>
                        </Label>
                        <Select required>
                          <SelectTrigger className="mt-1.5 font-sans">
                            <SelectValue placeholder="Select article type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="research">Research Article</SelectItem>
                            <SelectItem value="review">Review Article</SelectItem>
                            <SelectItem value="short">Short Communication</SelectItem>
                            <SelectItem value="editorial">Editorial</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label htmlFor="wordcount" className="font-sans text-sm font-medium">
                          Word Count (including references)
                        </Label>
                        <Input
                          id="wordcount"
                          type="number"
                          placeholder="e.g., 8,500"
                          className="mt-1.5 font-sans"
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="abstract" className="font-sans text-sm font-medium">
                        Abstract <span className="text-destructive">*</span>
                      </Label>
                      <Textarea
                        id="abstract"
                        required
                        rows={5}
                        maxLength={250}
                        placeholder="Maximum 250 words, single paragraph, no citations or displayed equations"
                        className="mt-1.5 font-sans"
                      />
                      <p className="font-sans text-xs text-muted-foreground mt-1">
                        Maximum 250 words. Single paragraph.
                      </p>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="keywords" className="font-sans text-sm font-medium">
                          Keywords <span className="text-destructive">*</span>
                        </Label>
                        <Input
                          id="keywords"
                          required
                          placeholder="Comma-separated, 4–6 keywords"
                          className="mt-1.5 font-sans"
                        />
                      </div>
                      <div>
                        <Label htmlFor="jelcodes" className="font-sans text-sm font-medium">
                          JEL Classification Code(s)
                        </Label>
                        <Input
                          id="jelcodes"
                          placeholder="e.g., E52, E58, O53"
                          className="mt-1.5 font-sans"
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="corresponding" className="font-sans text-sm font-medium">
                        Corresponding Author <span className="text-destructive">*</span>
                      </Label>
                      <Input
                        id="corresponding"
                        required
                        placeholder="Full name"
                        className="mt-1.5 font-sans"
                      />
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="email" className="font-sans text-sm font-medium">
                          Corresponding Author Email <span className="text-destructive">*</span>
                        </Label>
                        <Input
                          id="email"
                          type="email"
                          required
                          placeholder="author@institution.edu"
                          className="mt-1.5 font-sans"
                        />
                      </div>
                      <div>
                        <Label htmlFor="orcid" className="font-sans text-sm font-medium">
                          ORCID iD
                        </Label>
                        <Input
                          id="orcid"
                          placeholder="0000-0000-0000-0000"
                          className="mt-1.5 font-sans"
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="affiliation" className="font-sans text-sm font-medium">
                        Author Affiliation(s)
                      </Label>
                      <Textarea
                        id="affiliation"
                        rows={3}
                        placeholder="List all authors and their institutional affiliations"
                        className="mt-1.5 font-sans"
                      />
                    </div>

                    <div>
                      <Label htmlFor="cover" className="font-sans text-sm font-medium">
                        Cover Letter
                      </Label>
                      <Textarea
                        id="cover"
                        rows={4}
                        placeholder="Briefly describe the contribution of your paper and confirm it is not under consideration elsewhere"
                        className="mt-1.5 font-sans"
                      />
                    </div>

                    {/* File upload placeholder */}
                    <div>
                      <Label className="font-sans text-sm font-medium">
                        Manuscript Files <span className="text-destructive">*</span>
                      </Label>
                      <div className="mt-1.5 border-2 border-dashed border-border rounded-md p-8 text-center hover:border-accent transition-colors cursor-pointer">
                        <Upload className="w-8 h-8 mx-auto text-muted-foreground mb-2" />
                        <p className="font-sans text-sm text-foreground">
                          <span className="text-accent font-medium">Click to upload</span> or drag and drop
                        </p>
                        <p className="font-sans text-xs text-muted-foreground mt-1">
                          Anonymised manuscript PDF (max 25 MB) · Title page (separate file)
                        </p>
                      </div>
                    </div>

                    {/* Declarations */}
                    <div className="bg-secondary/50 border border-border rounded-md p-4 space-y-2">
                      <p className="font-sans text-sm font-semibold text-primary mb-2">
                        Author Declarations
                      </p>
                      {[
                        "The manuscript has not been published elsewhere and is not under consideration by another journal.",
                        "All authors have approved the manuscript and agree with its submission to the Journal of Economic Research.",
                        "All sources of funding have been disclosed.",
                        "Any potential conflicts of interest have been declared.",
                        "Where applicable, human-subjects or animal-research ethics approval has been obtained and is referenced in the manuscript.",
                      ].map((decl, idx) => (
                        <label
                          key={idx}
                          className="flex items-start gap-2 cursor-pointer font-sans text-xs text-foreground/80"
                        >
                          <input
                            type="checkbox"
                            required
                            className="mt-0.5"
                          />
                          <span>{decl}</span>
                        </label>
                      ))}
                    </div>

                    <div className="flex flex-wrap items-center gap-3 pt-2">
                      <Button
                        type="submit"
                        size="lg"
                        className="font-sans bg-primary text-primary-foreground hover:bg-primary/90"
                      >
                        <Send className="w-4 h-4 mr-2" />
                        Submit Manuscript
                      </Button>
                      <Button type="button" variant="outline" size="lg" className="font-sans">
                        Save as Draft
                      </Button>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <aside className="space-y-6">
              <div className="bg-card border border-border rounded-md p-5">
                <h3 className="font-serif text-base font-semibold text-primary mb-3 border-b border-border pb-2 flex items-center gap-2">
                  <Clock className="w-4 h-4 text-accent" />
                  Submission Workflow
                </h3>
                <ol className="space-y-3 font-sans text-sm">
                  {[
                    "Register or log in to the submission portal",
                    "Complete the five-step submission workflow",
                    "Upload anonymised manuscript and title page",
                    "Co-authors confirm authorship and consent",
                    "Initial editorial decision within 7 working days",
                  ].map((step, idx) => (
                    <li key={idx} className="flex gap-3">
                      <span className="flex-shrink-0 w-5 h-5 rounded-full bg-accent/20 text-accent text-xs font-semibold flex items-center justify-center">
                        {idx + 1}
                      </span>
                      <span className="text-foreground/80">{step}</span>
                    </li>
                  ))}
                </ol>
              </div>

              <div className="bg-primary text-primary-foreground rounded-md p-5">
                <h3 className="font-serif text-base font-semibold mb-3 flex items-center gap-2 text-accent">
                  <ShieldCheck className="w-4 h-4" />
                  Editorial Standards
                </h3>
                <ul className="space-y-2 font-sans text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 mt-0.5 text-accent flex-shrink-0" />
                    <span>Double-blind peer review</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 mt-0.5 text-accent flex-shrink-0" />
                    <span>Median {JOURNAL_STATS.averageTimeToFirstDecision} days to first decision</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 mt-0.5 text-accent flex-shrink-0" />
                    <span>Average {JOURNAL_STATS.averagePeerReviewers} reviewers per paper</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 mt-0.5 text-accent flex-shrink-0" />
                    <span>COPE-compliant editorial practice</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Heart className="w-3.5 h-3.5 mt-0.5 text-accent flex-shrink-0" />
                    <span>No article processing charges</span>
                  </li>
                </ul>
              </div>

              <div className="bg-accent/10 border border-accent/30 rounded-md p-5">
                <h3 className="font-serif text-base font-semibold text-primary mb-2 flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 text-accent" />
                  Before You Submit
                </h3>
                <p className="font-serif text-sm text-foreground/85 mb-3">
                  Please consult the author guidelines for formatting and submission
                  requirements before submitting your manuscript.
                </p>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => navigate("author-guidelines")}
                  className="font-sans w-full"
                >
                  Author Guidelines
                  <ChevronRight className="w-4 h-4 ml-1" />
                </Button>
              </div>
            </aside>
          </div>
        </section>
      )}
    </div>
  );
}
