/**
 * Volumes and issues that papers can be added to in Sanity, and the current issue (new papers default to it).
 * The website shows each issue that has papers in Sanity from Sanity, and the most recently published issue becomes
 * the current issue. Earlier issues follow the journal's publication pattern (as on the website's Archive page):
 * Volume 1 in 1996, semi-annual until 2004, quarterly (January, April, July, October) from 2005.
 */
export const CURRENT_ISSUE = { year: 2026, volume: 31, issue: 1, published: "2026-10-08", label: "Volume 31, Issue 1 (October 2026)" };

const FIRST_YEAR = 1996;
const QUARTERLY_FROM = 2005;
const MONTHS = ["January", "April", "July", "October"];

export type IssueOption = { year: number; volume: number; issue: number; label: string };

/** Every volume and issue from Volume 1 to the current volume, newest first. */
export const ALL_ISSUES: IssueOption[] = (() => {
  const out: IssueOption[] = [];
  for (let volume = CURRENT_ISSUE.volume; volume >= 1; volume--) {
    const year = FIRST_YEAR + volume - 1;
    const count = volume === CURRENT_ISSUE.volume ? 2 : year < QUARTERLY_FROM ? 2 : 4;
    for (let issue = count; issue >= 1; issue--) {
      const when = volume === CURRENT_ISSUE.volume ? (issue === 1 ? "October 2026" : "August 2026") : year < QUARTERLY_FROM ? String(year) : `${MONTHS[issue - 1]} ${year}`;
      out.push({ year, volume, issue, label: `Volume ${volume}, Issue ${issue} (${when})` });
    }
  }
  return out;
})();

/** Volume year: Volume 1 appeared in 1996. */
export const volumeYear = (volume: number) => FIRST_YEAR + volume - 1;

export const ARTICLE_ID_PATTERN = /^\d{4}-v\d{1,2}-i[1-4]-\d{2}$/;
