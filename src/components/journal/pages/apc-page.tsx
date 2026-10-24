"use client";

import { CheckCircle2, CreditCard, ExternalLink, FileCheck, Mail, ReceiptText, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { JOURNAL_INFO } from "@/data/journal";
import { useNav } from "../nav-context";

// Article processing charge: what it is, when it is due, and the link to the hosted payment page
// (JOURNAL_INFO.apcPaymentUrl). Card and bank details are entered only on the payment provider's page.

const STEPS = [
  {
    icon: FileCheck,
    title: "Wait for your acceptance letter",
    body: "The APC is due only after your manuscript has been accepted. The acceptance letter gives your manuscript ID (for example JER-2026-1234).",
  },
  {
    icon: CreditCard,
    title: "Pay on the secure payment page",
    body: "Click the payment button below. Enter your manuscript ID and the corresponding author's name and email on the payment page so we can match the payment to your article.",
  },
  {
    icon: ReceiptText,
    title: "Keep your receipt",
    body: "The payment provider emails a receipt immediately. The editorial office confirms the payment and schedules your article for publication.",
  },
];

export function ApcPage() {
  const { navigate } = useNav();
  const payUrl = JOURNAL_INFO.apcPaymentUrl;

  return (
    <div>
      <section className="bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 py-12">
          <div className="font-sans text-xs uppercase tracking-widest text-accent mb-2">For Authors</div>
          <h1 className="font-serif text-3xl sm:text-4xl font-bold">Article Processing Charge (APC)</h1>
          <p className="mt-3 max-w-2xl font-sans text-sm text-primary-foreground/80">
            JER is open access: every article is free to read under {JOURNAL_INFO.license.replace("Open Access — ", "")}. The APC covers
            peer-review management, copy-editing, typesetting and permanent online hosting.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-4 py-10 grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <div>
            <h2 className="font-serif text-2xl font-bold text-primary mb-4">How to pay</h2>
            <ol className="space-y-4">
              {STEPS.map((s, i) => {
                const Icon = s.icon;
                return (
                  <li key={s.title} className="flex gap-4 bg-card border border-border rounded-md p-4">
                    <div className="flex-none w-9 h-9 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-sans font-semibold text-foreground">
                        {i + 1}. {s.title}
                      </div>
                      <p className="mt-1 font-sans text-sm text-muted-foreground leading-relaxed">{s.body}</p>
                    </div>
                  </li>
                );
              })}
            </ol>
          </div>

          <div>
            <h2 className="font-serif text-2xl font-bold text-primary mb-3">Good to know</h2>
            <ul className="space-y-2 font-sans text-sm text-foreground/85">
              {[
                "No fee is charged for submission or peer review, and nothing is charged if a manuscript is not accepted.",
                "Editorial decisions are made independently of payment; editors and reviewers do not see payment status.",
                "Authors who cannot pay may ask the editorial office about a waiver or reduction before acceptance. A request never affects the editorial decision.",
                "If your institution pays, ask the editorial office for an invoice in the institution's name.",
              ].map((t) => (
                <li key={t} className="flex gap-2">
                  <CheckCircle2 className="w-4 h-4 mt-0.5 flex-none text-accent" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <aside className="lg:sticky lg:top-40 self-start bg-card border border-border rounded-md p-6">
          <div className="font-sans text-xs uppercase tracking-widest text-muted-foreground">APC per accepted article</div>
          <div className="mt-1 font-serif text-4xl font-bold text-primary">{JOURNAL_INFO.apcAmount}</div>
          <p className="mt-1 font-sans text-xs text-muted-foreground">Payable only after acceptance</p>

          {payUrl ? (
            <>
              <Button asChild className="mt-5 w-full">
                <a href={payUrl} target="_blank" rel="noopener noreferrer">
                  Pay {JOURNAL_INFO.apcAmount} securely <ExternalLink className="w-4 h-4 ml-2" />
                </a>
              </Button>
              <p className="mt-3 flex gap-2 font-sans text-xs text-muted-foreground">
                <ShieldCheck className="w-4 h-4 flex-none" />
                Opens our payment provider's secure page. Card and bank details are never entered on this website.
              </p>
            </>
          ) : (
            <div className="mt-5 rounded-md border border-dashed border-border bg-secondary/50 p-4">
              <div className="font-sans text-sm font-semibold text-foreground">Online payment opening soon</div>
              <p className="mt-1 font-sans text-xs text-muted-foreground">
                Until then, the editorial office will send accepted authors an invoice with payment instructions.
              </p>
              <Button variant="outline" className="mt-3 w-full" onClick={() => navigate("contact")}>
                <Mail className="w-4 h-4 mr-2" /> Request an invoice
              </Button>
            </div>
          )}
        </aside>
      </section>
    </div>
  );
}
