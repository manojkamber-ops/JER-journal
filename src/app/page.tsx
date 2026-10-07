import { JournalLayout } from "@/components/journal/journal-layout";
import { CURRENT_ISSUE } from "@/data/journal";
import { fetchIssuePapers } from "@/lib/sanity-papers";

// Re-read the current issue from Sanity at most once a minute, so papers published there appear without a redeploy
export const revalidate = 60;

export default async function Home() {
  const livePapers = await fetchIssuePapers(CURRENT_ISSUE.volume, CURRENT_ISSUE.issue);
  return <JournalLayout livePapers={livePapers} />;
}
