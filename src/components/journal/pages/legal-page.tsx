"use client";

import { useEffect } from "react";
import { JOURNAL_INFO } from "@/data/journal";
import { useNav } from "../nav-context";

const SECTIONS: { id: string; title: string; body: string[] }[] = [
  {
    id: "privacy",
    title: "Privacy Policy",
    body: [
      `The ${JOURNAL_INFO.title} (“JER”, “we”) is published by the ${JOURNAL_INFO.department}, ${JOURNAL_INFO.school}. This policy explains what personal information we collect through this website and how we use it.`,
      "Account information. When you register we store your name, email address, institutional affiliation and a salted hash of your password. We never store your password in readable form.",
      "Submissions. When you submit a manuscript we store the metadata you enter (title, abstract, author names, emails, ORCID iDs, affiliations, cover letter) and the uploaded files. This information is used only for editorial handling and peer review, and is shared with editors and reviewers under our double-blind review policy.",
      "Contact messages and alerts. Messages sent through the contact form are stored so the editorial office can respond. Email addresses subscribed to content alerts are used only to send the alerts you selected.",
      `Your rights. You may request a copy of your data, correction or deletion at any time by writing to ${JOURNAL_INFO.contactEmail}. We will respond within 30 days.`,
    ],
  },
  {
    id: "terms",
    title: "Terms of Use",
    body: [
      `All articles are published open access under ${JOURNAL_INFO.license}. You may copy, distribute and adapt the work for non-commercial purposes provided the original work is properly cited.`,
      "Website content other than articles (design, logos, text of journal pages) remains the property of Hanyang University and may not be reproduced for commercial purposes without permission.",
      "Users must not attempt to disrupt the website, access other users' accounts or submissions, or upload malicious files. We may suspend accounts that breach these terms.",
      "Article content reflects the views of the authors and not necessarily those of the editors or Hanyang University.",
    ],
  },
  {
    id: "cookies",
    title: "Cookie Policy",
    body: [
      "This website uses a single essential cookie, jer_session, to keep you signed in. It is set only when you sign in or register, is not used for tracking, and expires after 30 days or when you sign out.",
      "We do not use advertising, analytics or third-party tracking cookies. Share links to social networks open those services in a new tab; their own cookie policies apply there.",
    ],
  },
  {
    id: "accessibility",
    title: "Accessibility Statement",
    body: [
      "We aim to meet the Web Content Accessibility Guidelines (WCAG) 2.1 at level AA. The site supports keyboard navigation, uses semantic headings and landmarks, and provides text alternatives for images.",
      "Every article is available as a downloadable PDF and can be printed directly from the article page. Citations can be exported to reference managers in RIS, BibTeX and EndNote formats.",
      `If you encounter an accessibility barrier, please contact ${JOURNAL_INFO.contactEmail} or call ${JOURNAL_INFO.phone} and we will provide the content in an accessible format.`,
    ],
  },
];

export function LegalPage() {
  const { navigate, params } = useNav();
  const active = params.section ?? "privacy";

  // Opening a link like #/legal?section=cookies lands on that section
  useEffect(() => {
    if (params.section) requestAnimationFrame(() => document.getElementById(params.section)?.scrollIntoView({ block: "start" }));
  }, [params.section]);

  return (
    <div>
      <section className="bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 py-12">
          <div className="font-sans text-xs uppercase tracking-widest text-accent mb-2">Legal &amp; Policies</div>
          <h1 className="font-serif text-3xl sm:text-4xl font-bold">Site Policies</h1>
        </div>
      </section>
      <section className="container mx-auto px-4 py-10 grid lg:grid-cols-4 gap-8">
        <nav className="lg:sticky lg:top-40 self-start bg-card border border-border rounded-md p-3 font-sans text-sm">
          {SECTIONS.map((s) => (
            <button
              key={s.id}
              onClick={() => navigate("legal", { params: { section: s.id }, anchor: s.id })}
              className={`block w-full text-left px-3 py-2 rounded-sm ${
                active === s.id ? "bg-primary text-primary-foreground font-semibold" : "hover:bg-secondary text-foreground/80"
              }`}
            >
              {s.title}
            </button>
          ))}
        </nav>
        <div className="lg:col-span-3 space-y-10">
          {SECTIONS.map((s) => (
            <article key={s.id} id={s.id} className="scroll-mt-40">
              <h2 className="font-serif text-2xl font-bold text-primary mb-3 pb-1 border-b-2 border-accent inline-block">{s.title}</h2>
              {s.body.map((p, i) => (
                <p key={i} className="font-serif text-base leading-relaxed text-foreground/85 mt-3">{p}</p>
              ))}
            </article>
          ))}
          <p className="font-sans text-xs text-muted-foreground">Last updated: 1 October 2026</p>
        </div>
      </section>
    </div>
  );
}
