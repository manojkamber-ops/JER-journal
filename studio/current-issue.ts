/** The issue whose papers are managed in Sanity. Update these values when the next issue starts. */
export const CURRENT_ISSUE = { year: 2026, volume: 31, issue: 2, published: "2026-08-15" };
export const ARTICLE_ID_PATTERN = new RegExp(`^${CURRENT_ISSUE.year}-v${CURRENT_ISSUE.volume}-i${CURRENT_ISSUE.issue}-\\d{2}$`);
