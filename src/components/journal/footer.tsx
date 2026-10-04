"use client";

import { useNav, type PageId } from "./nav-context";
import { JOURNAL_INFO } from "@/data/journal";
import { Mail, Phone, MapPin, FileText, BookOpen, Award } from "lucide-react";

export function Footer() {
  const { navigate } = useNav();

  const quickLinks: { label: string; page: PageId }[] = [
    { label: "About the Journal", page: "about" },
    { label: "Editorial Board", page: "editorial-board" },
    { label: "Current Issue", page: "current-issue" },
    { label: "Archive", page: "archive" },
    { label: "Submit a Manuscript", page: "submission" },
    { label: "Author Guidelines", page: "author-guidelines" },
    { label: "Journal Policies", page: "policies" },
    { label: "Contact", page: "contact" },
  ];

  return (
    <footer className="mt-auto bg-primary text-primary-foreground border-t-4 border-accent">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Journal identity */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <img
                src="/jer-logo.svg"
                alt="Journal of Economic Research"
                className="w-12 h-12 rounded-md bg-white/5"
                width={48}
                height={48}
              />
              <div>
                <h2 className="font-serif text-lg font-bold leading-tight">
                  Journal of Economic Research
                </h2>
                <p className="font-sans text-xs opacity-80 mt-0.5">Hanyang University, Seoul</p>
              </div>
            </div>
            <p className="font-sans text-sm opacity-80 leading-relaxed mb-4">
              A peer-reviewed, open-access economics journal publishing rigorous
              empirical and theoretical research since 1996.
            </p>
            <div className="space-y-1.5 font-sans text-xs opacity-85">
              <div className="flex items-center gap-2">
                <Award className="w-3.5 h-3.5 flex-shrink-0" />
                <span>ABDC rating: {JOURNAL_INFO.abdcRating}</span>
              </div>
              <div className="flex items-center gap-2">
                <BookOpen className="w-3.5 h-3.5 flex-shrink-0" />
                <span>ISSN {JOURNAL_INFO.issnPrint} (print &amp; online)</span>
              </div>
              <div className="flex items-center gap-2">
                <FileText className="w-3.5 h-3.5 flex-shrink-0" />
                <span>Open Access · CC BY-NC 4.0</span>
              </div>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="font-serif text-sm font-semibold uppercase tracking-wider mb-4 text-accent">
              Quick Links
            </h3>
            <ul className="space-y-2 font-sans text-sm">
              {quickLinks.map((link) => (
                <li key={link.page}>
                  <button
                    onClick={() => navigate(link.page)}
                    className="text-left opacity-85 hover:opacity-100 hover:text-accent transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Indexing */}
          <div>
            <h3 className="font-serif text-sm font-semibold uppercase tracking-wider mb-4 text-accent">
              Indexed In
            </h3>
            <ul className="space-y-1.5 font-sans text-xs opacity-85">
              <li>Scopus</li>
              <li>Korean Citation Index (KCI)</li>
              <li>EconLit (American Economic Association)</li>
              <li>EBSCO Business Source Complete</li>
              <li>Directory of Open Access Journals (DOAJ)</li>
              <li>RePEc / IDEAS</li>
              <li>Google Scholar</li>
              <li>ABDC Journal Quality List — Tier B</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-serif text-sm font-semibold uppercase tracking-wider mb-4 text-accent">
              Editorial Office
            </h3>
            <ul className="space-y-3 font-sans text-sm opacity-90">
              <li className="flex gap-2.5">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-accent" />
                <span className="leading-snug">
                  Department of Economics<br />
                  Hanyang University<br />
                  222 Wangsimni-ro, Seongdong-gu<br />
                  Seoul 04763, Republic of Korea
                </span>
              </li>
              <li className="flex gap-2.5">
                <Mail className="w-4 h-4 mt-0.5 flex-shrink-0 text-accent" />
                <a
                  href={`mailto:${JOURNAL_INFO.contactEmail}`}
                  className="hover:text-accent hover:underline"
                >
                  {JOURNAL_INFO.contactEmail}
                </a>
              </li>
              <li className="flex gap-2.5">
                <Phone className="w-4 h-4 mt-0.5 flex-shrink-0 text-accent" />
                <span>
                  {JOURNAL_INFO.phone}<br />
                  Fax: {JOURNAL_INFO.fax}
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="gold-rule my-8" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 font-sans text-xs opacity-75">
          <div>
            © 1996–{new Date().getFullYear()} Journal of Economic Research · Hanyang University.
            All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <span>Privacy Policy</span>
            <span className="opacity-50">|</span>
            <span>Terms of Use</span>
            <span className="opacity-50">|</span>
            <span>Cookies</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
