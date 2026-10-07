import { JournalLayout } from "@/components/journal/journal-layout";
import { fetchSanityPapers } from "@/lib/sanity-papers";

// Re-read Sanity at most once a minute, so papers published there appear without a redeploy
export const revalidate = 60;

export default async function Home() {
  const livePapers = await fetchSanityPapers();
  return <JournalLayout livePapers={livePapers} />;
}
