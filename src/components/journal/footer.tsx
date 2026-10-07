"use client";

import { useNav, type PageId } from "./nav-context";
import { useSession } from "./session";
import { JOURNAL_INFO } from "@/data/journal";
import { BookOpen, Users, Rss, Mail, Award } from "lucide-react";

export function Footer() {
  const { navigate } = useNav();
  const { openAlerts } = useSession();

  const columns: { title: string; icon: typeof BookOpen; links: { label: string; page: PageId; anchor?: string }[] }[] = [
    {
      title: "Information",
      icon: BookOpen,
      links: [
        { label: "About JER", page: "about" },
        { label: "Editorial Board", page: "editorial-board" },
        { label: "Journal Policies", page: "policies" },
        { label: "News & Announcements", page: "news" },
        { label: "Contact Us", page: "contact" },
      ],
    },
    {
      title: "Resources",
      icon: Users,
      links: [
        { label: "Submit a Manuscript", page: "submission" },
        { label: "Author Guidelines", page: "author-guidelines" },
        { label: "Peer Review Process", page: "policies", anchor: "peer-review" },
        { label: "Open Access", page: "policies", anchor: "open-access" },
        { label: "Current Issue", page: "current-issue" },
        { label: "All Issues", page: "archive" },
      ],
    },
  ];

  const legal: [string, string][] = [
    ["Privacy Policy", "privacy"],
    ["Terms of Use", "terms"],
    ["Cookies", "cookies"],
    ["Accessibility", "accessibility"],
  ];

  return (
    <footer className="mt-auto bg-white border-t border-[#e1e1e1] print:hidden">
      <div className="container mx-auto px-4 pt-12 pb-8 grid gap-10 md:grid-cols-2 lg:grid-cols-[1.2fr_0.8fr_1fr_1fr]">
        {/* Identity + address */}
        <div>
          <button onClick={() => navigate("home")} className="flex items-center gap-3 text-left" aria-label="Journal of Economic Research home">
            <img src="/jer-logo.svg" alt="" className="w-16 h-16 rounded-sm" width={64} height={64} />
            <span className="leading-none">
              <span className="block text-[12px] tracking-[0.3em] uppercase text-[#4a4a4a]">Journal of</span>
              <span className="block text-[26px] text-primary mt-0.5">Economic Research</span>
            </span>
          </button>

          <div className="flex items-center gap-4 mt-6 text-[#212121]">
            <button onClick={() => openAlerts(["new-issue", "news"])} aria-label="Email alerts" className="hover:text-primary">
              <Mail className="w-5 h-5" />
            </button>
            <button onClick={() => navigate("news")} aria-label="News and announcements" className="hover:text-primary">
              <Rss className="w-5 h-5" />
            </button>
            <a href={`mailto:${JOURNAL_INFO.contactEmail}`} className="text-[14px] hover:text-primary hover:underline">
              {JOURNAL_INFO.contactEmail}
            </a>
          </div>

          <address className="not-italic mt-5 text-[14px] leading-relaxed text-[#212121]">
            Journal of Economic Research<br />
            Department of Economics, Hanyang University<br />
            222 Wangsimni-ro, Seongdong-gu<br />
            Seoul 04763, Republic of Korea<br />
            Phone: {JOURNAL_INFO.phone}<br />
            Fax: {JOURNAL_INFO.fax}
          </address>
        </div>

        {/* Quality badges (AOM shows its COPE membership here) */}
        <div className="space-y-4">
          <div className="inline-flex flex-col items-center border border-[#c9c9c9] px-5 py-3 text-center">
            <Award className="w-6 h-6 text-primary" />
            <span className="mt-1 text-[13px] font-bold tracking-[0.25em] text-[#4a4a4a]">ABDC</span>
            <span className="text-[12px] text-[#616161]">Rating {JOURNAL_INFO.abdcRating}</span>
          </div>
          <p className="text-[13px] text-[#616161] leading-relaxed">
            ABDC B (Applied Economics) · KCI-listed<br />
            ISSN {JOURNAL_INFO.issnPrint} · eISSN {JOURNAL_INFO.issnOnline}<br />
            Open access · CC BY-NC 4.0 · APC {JOURNAL_INFO.apcAmount} per accepted article
          </p>
        </div>

        {columns.map(({ title, icon: Icon, links }) => (
          <div key={title} className="border-t-2 border-primary pt-3">
            <h4 className="text-[18px] font-bold text-primary">{title}</h4>
            <Icon className="w-11 h-11 my-4 text-[#9fb8d0]" strokeWidth={1.5} />
            <ul className="space-y-1.5 text-[14px]">
              {links.map((l) => (
                <li key={l.label}>
                  <button
                    onClick={() => navigate(l.page, l.anchor ? { anchor: l.anchor } : undefined)}
                    className="text-left text-primary hover:underline"
                  >
                    {l.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="bg-primary text-white">
        <div className="container mx-auto px-4 py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-[14px] font-bold">
          <nav aria-label="Legal" className="flex flex-wrap gap-x-6 gap-y-1">
            {legal.map(([label, section]) => (
              <button
                key={section}
                onClick={() => navigate("legal", { params: { section }, anchor: section })}
                className="hover:underline"
              >
                {label}
              </button>
            ))}
          </nav>
          <div className="sm:text-right leading-snug">
            © 1996–{new Date().getFullYear()} Journal of Economic Research
            <br />
            <span className="font-semibold opacity-90">{JOURNAL_INFO.publisher} · ISSN {JOURNAL_INFO.issnPrint} · eISSN {JOURNAL_INFO.issnOnline}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
