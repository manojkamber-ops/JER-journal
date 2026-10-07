"use client";

import { useState } from "react";
import { JOURNAL_INFO } from "@/data/journal";
import { api, useSession } from "../session";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
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
} from "@/components/ui/card";
import {
  MapPin,
  Mail,
  Phone,
  Send,
  CheckCircle2,
  Building2,
  Globe2,
  Clock,
  Printer,
  Loader2,
} from "lucide-react";

export function ContactPage() {
  const { user } = useSession();
  const [submitted, setSubmitted] = useState(false);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const body = Object.fromEntries(new FormData(e.currentTarget));
    if (!body.subject) return setError("Please select a subject.");
    setBusy(true);
    setError(null);
    try {
      await api("/api/contact", { method: "POST", body: JSON.stringify(body) });
      setSubmitted(true);
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setBusy(false);
    }
  };

  return (
    <div>
      <section className="bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 py-12">
          <div className="font-sans text-xs uppercase tracking-widest text-accent mb-2">
            Contact Us
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold mb-3">
            Contact the Editorial Office
          </h1>
          <p className="font-serif text-lg opacity-90 max-w-3xl">
            For all inquiries about submissions, peer review, journal policy, or general
            questions, please contact the editorial office at Hanyang University.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact information */}
          <div className="space-y-6">
            <div className="bg-card border border-border rounded-md p-5">
              <h3 className="font-serif text-base font-semibold text-primary mb-4 border-b border-border pb-2 flex items-center gap-2">
                <Building2 className="w-4 h-4 text-accent" />
                Editorial Office
              </h3>
              <ul className="space-y-3 font-sans text-sm">
                <li className="flex gap-2.5">
                  <MapPin className="w-4 h-4 mt-0.5 text-accent flex-shrink-0" />
                  <span className="leading-snug">
                    Department of Economics<br />
                    College of Economics and Finance<br />
                    Hanyang University<br />
                    222 Wangsimni-ro, Seongdong-gu<br />
                    Seoul 04763, Republic of Korea
                  </span>
                </li>
                <li className="flex gap-2.5">
                  <Mail className="w-4 h-4 mt-0.5 text-accent flex-shrink-0" />
                  <a
                    href={`mailto:${JOURNAL_INFO.contactEmail}`}
                    className="text-primary hover:text-accent hover:underline"
                  >
                    {JOURNAL_INFO.contactEmail}
                  </a>
                </li>
                <li className="flex gap-2.5">
                  <Phone className="w-4 h-4 mt-0.5 text-accent flex-shrink-0" />
                  <span>{JOURNAL_INFO.phone}</span>
                </li>
                <li className="flex gap-2.5">
                  <Printer className="w-4 h-4 mt-0.5 text-accent flex-shrink-0" />
                  <span>Fax: {JOURNAL_INFO.fax}</span>
                </li>
                <li className="flex gap-2.5">
                  <Globe2 className="w-4 h-4 mt-0.5 text-accent flex-shrink-0" />
                  <span>{JOURNAL_INFO.website}</span>
                </li>
              </ul>
            </div>

            <div className="bg-card border border-border rounded-md p-5">
              <h3 className="font-serif text-base font-semibold text-primary mb-3 border-b border-border pb-2 flex items-center gap-2">
                <Clock className="w-4 h-4 text-accent" />
                Office Hours
              </h3>
              <dl className="space-y-1.5 font-sans text-sm">
                <div className="flex justify-between">
                  <dt className="text-muted-foreground">Mon – Fri</dt>
                  <dd className="font-medium">09:00 – 17:00 KST</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-muted-foreground">Sat – Sun</dt>
                  <dd className="font-medium">Closed</dd>
                </div>
                <div className="flex justify-between border-t border-border pt-1.5 mt-1.5">
                  <dt className="text-muted-foreground">Response time</dt>
                  <dd className="font-medium">2 business days</dd>
                </div>
              </dl>
            </div>

            <div className="bg-accent/10 border border-accent/30 rounded-md p-5">
              <h3 className="font-serif text-base font-semibold text-primary mb-2">
                Journal Identifier
              </h3>
              <p className="font-sans text-sm text-foreground/85 mb-2">
                ISSN: <span className="font-mono">{JOURNAL_INFO.issnPrint}</span> (print) · eISSN:{" "}
                <span className="font-mono">{JOURNAL_INFO.issnOnline}</span> (online)
              </p>
              <p className="font-sans text-sm text-foreground/85 mb-2">
                DOI prefix: <span className="font-mono">{JOURNAL_INFO.doiPrefix}</span>
              </p>
              <p className="font-sans text-sm text-foreground/85">
                Publisher: {JOURNAL_INFO.publisher}
              </p>
            </div>
          </div>

          {/* Contact form */}
          <div className="lg:col-span-2">
            {submitted ? (
              <Card>
                <CardContent className="pt-10 pb-10 text-center">
                  <CheckCircle2 className="w-14 h-14 mx-auto text-accent mb-4" />
                  <h2 className="font-serif text-2xl font-bold text-primary mb-3">
                    Message sent
                  </h2>
                  <p className="font-serif text-base text-foreground/85 mb-2">
                    Thank you for contacting the Journal of Economic Research.
                  </p>
                  <p className="font-sans text-sm text-muted-foreground mb-6">
                    Your message has been received by the editorial office. We will
                    respond within two business days.
                  </p>
                  <Button
                    onClick={() => setSubmitted(false)}
                    variant="outline"
                    className="font-sans"
                  >
                    Send another message
                  </Button>
                </CardContent>
              </Card>
            ) : (
              <Card>
                <CardContent className="pt-6">
                  <h2 className="font-serif text-xl font-bold text-primary mb-1 border-b border-border pb-2">
                    Send us a message
                  </h2>
                  <p className="font-sans text-sm text-muted-foreground mb-5 mt-1">
                    Fields marked with an asterisk (*) are required.
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name" className="font-sans text-sm font-medium">
                          Full name <span className="text-destructive">*</span>
                        </Label>
                        <Input
                          id="name"
                          name="name"
                          defaultValue={user?.name}
                          required
                          placeholder="Your name"
                          className="mt-1.5 font-sans"
                        />
                      </div>
                      <div>
                        <Label htmlFor="email" className="font-sans text-sm font-medium">
                          Email <span className="text-destructive">*</span>
                        </Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          defaultValue={user?.email}
                          required
                          placeholder="you@institution.edu"
                          className="mt-1.5 font-sans"
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="org" className="font-sans text-sm font-medium">
                          Institution / Affiliation
                        </Label>
                        <Input
                          id="org"
                          name="organisation"
                          defaultValue={user?.affiliation ?? undefined}
                          placeholder="Your university or organisation"
                          className="mt-1.5 font-sans"
                        />
                      </div>
                      <div>
                        <Label htmlFor="topic" className="font-sans text-sm font-medium">
                          Subject <span className="text-destructive">*</span>
                        </Label>
                        <Select name="subject" required>
                          <SelectTrigger className="mt-1.5 font-sans">
                            <SelectValue placeholder="Select a subject" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="submission">Submission inquiry</SelectItem>
                            <SelectItem value="review">Peer review question</SelectItem>
                            <SelectItem value="editorial">Editorial matter</SelectItem>
                            <SelectItem value="indexing">Indexing / abstracting</SelectItem>
                            <SelectItem value="accessibility">Open access / licence</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="msg" className="font-sans text-sm font-medium">
                        Message <span className="text-destructive">*</span>
                      </Label>
                      <Textarea
                        id="msg"
                        name="message"
                        required
                        rows={6}
                        placeholder="Please describe your inquiry. If referencing a specific article, please include its DOI or article ID."
                        className="mt-1.5 font-sans"
                      />
                    </div>

                    <div className="bg-secondary/40 border border-border rounded-md p-3 flex items-start gap-2">
                      <input id="privacy" type="checkbox" required className="mt-1" />
                      <Label htmlFor="privacy" className="font-sans text-xs text-foreground/80 cursor-pointer">
                        I consent to the processing of my personal data in accordance
                        with the journal&apos;s privacy policy for the purpose of responding
                        to this inquiry.
                      </Label>
                    </div>

                    {error && (
                      <p role="alert" className="font-sans text-sm text-destructive bg-destructive/10 border border-destructive/30 rounded-sm px-3 py-2">
                        {error}
                      </p>
                    )}
                    <Button
                      type="submit"
                      size="lg"
                      disabled={busy}
                      className="font-sans bg-primary text-primary-foreground hover:bg-primary/90"
                    >
                      {busy ? <Loader2 className="w-4 h-4 mr-2 animate-spin" /> : <Send className="w-4 h-4 mr-2" />}
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            )}
          </div>
        </div>

        {/* Map placeholder */}
        <div className="mt-12 bg-card border border-border rounded-md overflow-hidden">
          <div className="bg-secondary border-b border-border px-5 py-3">
            <h3 className="font-serif text-base font-semibold text-primary flex items-center gap-2">
              <MapPin className="w-4 h-4 text-accent" />
              Find Us
            </h3>
          </div>
          <div className="grid md:grid-cols-3">
            <iframe
              title="Map of Hanyang University, Seoul Campus"
              src="https://www.openstreetmap.org/export/embed.html?bbox=127.0368%2C37.5528%2C127.0538%2C37.5618&layer=mapnik&marker=37.5573%2C127.0453"
              className="md:col-span-2 w-full aspect-[16/9] md:aspect-auto md:min-h-[320px] border-0"
              loading="lazy"
            />
            <div className="p-6 flex flex-col justify-center">
              <p className="font-serif text-base font-semibold text-primary">Hanyang University, Seoul Campus</p>
              <p className="font-sans text-sm text-muted-foreground mt-1">
                College of Economics and Finance<br />
                222 Wangsimni-ro, Seongdong-gu, Seoul 04763
              </p>
              <p className="font-sans text-sm text-muted-foreground mt-3">
                Subway: Hanyang Univ. Station (Line 2), Exit 2
              </p>
              <div className="flex flex-wrap gap-3 mt-4 font-sans text-sm">
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Hanyang+University+222+Wangsimni-ro+Seoul"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:underline"
                >
                  Get directions →
                </a>
                <a href="https://www.hanyang.ac.kr/" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
                  University website →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
