"use client";

import { NEWS_ITEMS, JOURNAL_INFO } from "@/data/journal";
import { Badge } from "@/components/ui/badge";
import { useNav } from "../nav-context";
import { CalendarDays, ArrowRight, Send, Award } from "lucide-react";

export function NewsPage() {
  const { navigate } = useNav();

  // Group by year
  const grouped = NEWS_ITEMS.reduce((acc, item) => {
    const year = new Date(item.date).getFullYear().toString();
    if (!acc[year]) acc[year] = [];
    acc[year].push(item);
    return acc;
  }, {} as Record<string, typeof NEWS_ITEMS>);

  const sortedYears = Object.keys(grouped).sort((a, b) => parseInt(b) - parseInt(a));

  return (
    <div>
      <section className="bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 py-12">
          <div className="font-sans text-xs uppercase tracking-widest text-accent mb-2">
            News &amp; Announcements
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold mb-3">
            News &amp; Announcements
          </h1>
          <p className="font-serif text-lg opacity-90 max-w-3xl">
            Recent updates from the Journal of Economic Research editorial office,
            including new issues, calls for papers, indexing updates, and editorial
            announcements.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* News list */}
          <div className="lg:col-span-2 space-y-10">
            {sortedYears.map((year) => (
              <div key={year}>
                <h2 className="font-serif text-2xl font-bold text-primary mb-4 border-b border-border pb-2">
                  {year}
                </h2>
                <div className="space-y-4">
                  {grouped[year].map((item) => (
                    <article
                      key={item.id}
                      className="bg-card border border-border rounded-md p-5 hover:border-accent transition-colors"
                    >
                      <div className="flex items-center gap-2 mb-2 flex-wrap">
                        <Badge
                          variant="outline"
                          className="font-sans text-[10px] uppercase tracking-wide border-accent text-accent"
                        >
                          {item.category}
                        </Badge>
                        <span className="font-sans text-xs text-muted-foreground flex items-center gap-1.5">
                          <CalendarDays className="w-3 h-3" />
                          {new Date(item.date).toLocaleDateString("en-GB", {
                            day: "numeric",
                            month: "long",
                            year: "numeric",
                          })}
                        </span>
                      </div>
                      <h3 className="font-serif text-lg font-semibold text-primary mb-2">
                        {item.title}
                      </h3>
                      <p className="font-serif text-base leading-relaxed text-foreground/85">
                        {item.summary}
                      </p>
                    </article>
                  ))}
                </div>
              </div>
            ))}

            <div className="bg-secondary/50 border border-border rounded-md p-6 text-center">
              <p className="font-serif text-base text-foreground/85 mb-2">
                Subscribe to receive email notifications of new issues and journal
                announcements.
              </p>
              <a
                href={`mailto:${JOURNAL_INFO.contactEmail}?subject=Subscribe to journal announcements`}
                className="font-sans text-sm text-accent hover:underline"
              >
                {JOURNAL_INFO.contactEmail}
              </a>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="space-y-6">
            <div className="bg-card border border-border rounded-md p-5">
              <h3 className="font-serif text-base font-semibold text-primary mb-3 border-b border-border pb-2">
                Categories
              </h3>
              <ul className="space-y-2 font-sans text-sm">
                <li className="flex items-center justify-between">
                  <span className="text-foreground/80">Issues</span>
                  <Badge variant="secondary" className="font-sans text-[10px]">
                    {NEWS_ITEMS.filter((n) => n.category === "Issue").length}
                  </Badge>
                </li>
                <li className="flex items-center justify-between">
                  <span className="text-foreground/80">Announcements</span>
                  <Badge variant="secondary" className="font-sans text-[10px]">
                    {NEWS_ITEMS.filter((n) => n.category === "Announcement").length}
                  </Badge>
                </li>
                <li className="flex items-center justify-between">
                  <span className="text-foreground/80">Awards</span>
                  <Badge variant="secondary" className="font-sans text-[10px]">
                    {NEWS_ITEMS.filter((n) => n.category === "Award").length}
                  </Badge>
                </li>
                <li className="flex items-center justify-between">
                  <span className="text-foreground/80">Editorial</span>
                  <Badge variant="secondary" className="font-sans text-[10px]">
                    {NEWS_ITEMS.filter((n) => n.category === "Editorial").length}
                  </Badge>
                </li>
              </ul>
            </div>

            <div className="bg-accent/10 border border-accent/30 rounded-md p-5">
              <Award className="w-6 h-6 text-accent mb-2" />
              <h3 className="font-serif text-base font-semibold text-primary mb-1">
                ABDC Rating: {JOURNAL_INFO.abdcRating}
              </h3>
              <p className="font-serif text-sm text-foreground/85">
                The Journal of Economic Research continues to be listed at the &apos;{JOURNAL_INFO.abdcRating}&apos;
                tier of the ABDC Journal Quality List, reaffirmed in the 2024 review.
              </p>
            </div>

            <div className="bg-primary text-primary-foreground rounded-md p-5">
              <Send className="w-6 h-6 mb-3 text-accent" />
              <h3 className="font-serif text-base font-semibold mb-2 text-accent">
                Call for Papers
              </h3>
              <p className="font-serif text-sm opacity-90 mb-3">
                Submissions open year-round. Special issue on the Economics of Artificial
                Intelligence accepting papers 1 September 2025 – 31 January 2026.
              </p>
              <button
                onClick={() => navigate("submission")}
                className="font-sans text-xs flex items-center gap-1 text-accent hover:underline"
              >
                Submit a manuscript
                <ArrowRight className="w-3 h-3" />
              </button>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
}
