"use client";

import { ARTICLES, CURRENT_ISSUE, EDITORIAL_BOARD, JOURNAL_INFO, listIssues } from "@/data/journal";
import { ChevronDown, Info, Star } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useNav } from "./nav-context";
import { useSession } from "./session";

export type BannerTab = "online-first" | "current" | "archive" | null;

const editor = EDITORIAL_BOARD.find((e) => e.role === "Editor-in-Chief");

/** AOM-style journal banner: cover, journal metadata, action buttons and the issue sub-navigation. */
export function JournalBanner({ active = null }: { active?: BannerTab }) {
  const ISSUES = listIssues();
  const { navigate } = useNav();
  const { user, openAuth, openAlerts } = useSession();

  const tab = (id: Exclude<BannerTab, null>, label: string, onClick: () => void) => (
    <button
      onClick={onClick}
      aria-current={active === id ? "page" : undefined}
      className={`text-[14px] font-bold ${active === id ? "text-primary" : "text-[#212121] hover:text-primary"}`}
    >
      {label}
    </button>
  );

  return (
    <section className="aom-banner-bg py-5 sm:py-6">
      <div className="container mx-auto px-4">
        <div className="bg-white shadow-[0_1px_4px_rgba(0,0,0,0.12)] border-b-2 border-primary">
          <div className="p-4 sm:p-6 grid grid-cols-[88px_1fr] sm:grid-cols-[124px_1fr] lg:grid-cols-[124px_1fr_150px] gap-4 sm:gap-6">
            <button onClick={() => navigate("current-issue")} aria-label="View the current issue" className="self-start">
              <img
                src="/jer-cover.svg"
                alt={`Journal of Economic Research, Volume ${CURRENT_ISSUE.volume}, Issue ${CURRENT_ISSUE.issue} cover`}
                className="w-full border border-[#d6d6d6] shadow-sm"
                width={124}
                height={170}
              />
            </button>

            <div className="min-w-0">
              <h1 className="text-[20px] sm:text-[26px] font-bold text-primary leading-tight">{JOURNAL_INFO.title}</h1>
              <div className="mt-3 sm:mt-6 text-[14px] sm:text-[16px] leading-relaxed text-[#212121]">
                <p>
                  ISSN (print): {JOURNAL_INFO.issnPrint} <span className="text-[#9e9e9e]">|</span> ISSN (online): {JOURNAL_INFO.issnOnline}
                </p>
                <p>Frequency: January, April, July, and October</p>
                {editor && (
                  <p>
                    Editor: <strong>{editor.name.replace(/^Prof\.\s*/, "")}</strong>
                  </p>
                )}
              </div>
              <button
                onClick={() => navigate("about")}
                className="mt-3 px-3 py-1.5 border-2 border-[var(--aom-link)] rounded-[4px] text-[var(--aom-link)] text-[16px] sm:text-[18px] font-bold hover:bg-[var(--aom-link)] hover:text-white transition-colors"
              >
                Learn more about JER
              </button>
            </div>

            <div className="col-span-2 lg:col-span-1 grid grid-cols-2 lg:grid-cols-1 gap-2.5 lg:gap-3 content-start">
              <button
                onClick={() => navigate("submission")}
                className="h-[38px] bg-[var(--aom-button)] text-white font-semibold hover:bg-primary"
              >
                Submit
              </button>
              <button
                onClick={() => (user ? navigate("account") : openAuth("register"))}
                className="h-[38px] bg-[var(--aom-button)] text-white font-semibold hover:bg-primary"
              >
                {user ? "My Account" : "Register"}
              </button>
              <button
                onClick={() => navigate("author-guidelines")}
                className="h-[38px] border-2 border-[var(--aom-button)] text-[var(--aom-button)] font-semibold hover:bg-[var(--aom-button)] hover:text-white transition-colors duration-200"
              >
                Author Guidelines
              </button>
              <button
                onClick={() => openAlerts(["new-issue"])}
                className="h-[38px] border-2 border-[var(--aom-button)] text-[var(--aom-button)] font-semibold hover:bg-[var(--aom-button)] hover:text-white transition-colors duration-200"
              >
                Subscribe
              </button>
            </div>
          </div>

          {/* Issue sub-navigation */}
          <div className="border-t border-[#e1e1e1] px-4 sm:px-6 h-11 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              {tab("online-first", "In-Press", () => navigate("archive", { params: { view: "online-first" } }))}
              <span className="text-[#212121]">|</span>
              {tab("current", "Current Issue", () => navigate("current-issue"))}
              <span className="text-[#212121]">|</span>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button
                    className={`flex items-center gap-1 text-[14px] font-bold ${active === "archive" ? "text-primary" : "text-[#212121] hover:text-primary"}`}
                  >
                    Archive <ChevronDown className="w-4 h-4 text-[#9e9e9e]" />
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start" className="w-56 rounded-none p-0 max-h-80 overflow-y-auto">
                  {ISSUES.map(([v, i]) => (
                    <DropdownMenuItem
                      key={`${v}-${i}`}
                      onClick={() =>
                        navigate(
                          "current-issue",
                          v === CURRENT_ISSUE.volume && i === CURRENT_ISSUE.issue ? undefined : { params: { volume: String(v), issue: String(i) } }
                        )
                      }
                      className="cursor-pointer rounded-none px-4 py-2 text-sm"
                    >
                      Volume {v}, Issue {i}
                    </DropdownMenuItem>
                  ))}
                  <DropdownMenuItem onClick={() => navigate("archive")} className="cursor-pointer rounded-none px-4 py-2 text-sm font-semibold text-primary border-t">
                    View all issues
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            <div className="flex items-center gap-5">
              <button
                onClick={() => openAlerts(["new-issue"])}
                aria-label="Follow this journal (email alerts)"
                title="Follow this journal"
                className="text-primary hover:opacity-80"
              >
                <Star className="w-5 h-5" />
              </button>
              <button onClick={() => navigate("about")} className="hidden sm:flex items-center gap-1.5 text-[14px] font-bold text-[#212121] hover:text-primary">
                <Info className="w-5 h-5" /> About
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
