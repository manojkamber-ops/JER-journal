/**
 * Issues whose papers are managed in Sanity, and the current one (new papers default to it). The website shows each
 * of these issues from Sanity, and the most recently published issue becomes the current issue.
 */
export const MANAGED_ISSUES = [
  { year: 2026, volume: 31, issue: 1, published: "2026-10-08", label: "Volume 31, Issue 1 (October 2026)" },
  { year: 2026, volume: 31, issue: 2, published: "2026-08-15", label: "Volume 31, Issue 2 (August 2026)" },
];
export const CURRENT_ISSUE = MANAGED_ISSUES[0];
export const ARTICLE_ID_PATTERN = new RegExp(`^${CURRENT_ISSUE.year}-v${CURRENT_ISSUE.volume}-i(${MANAGED_ISSUES.map((i) => i.issue).join("|")})-\\d{2}$`);
