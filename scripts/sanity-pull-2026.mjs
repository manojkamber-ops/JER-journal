// Pulls the published 2026 papers from Sanity into src/data/papers/ and regenerates the paper index.
// Runs before every Vercel build (see vercel.json). Without a token, the papers already in the repo are used.
import { readdirSync, unlinkSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { SANITY_API_VERSION, fromSanityPaper, paperToTs, sanityEnv } from "./sanity-paper-map.mjs";

const { projectId, dataset, readToken } = sanityEnv();
const dir = join(process.cwd(), "src", "data", "papers");

if (!readToken) {
  console.log("Sanity: no SANITY_API_READ_TOKEN / SANITY_API_WRITE_TOKEN set; using the 2026 papers in the repository.");
} else {
  const query = encodeURIComponent('*[_type == "paper" && year == 2026 && !(_id in path("drafts.**"))] | order(articleId asc)');
  const res = await fetch(`https://${projectId}.api.sanity.io/v${SANITY_API_VERSION}/data/query/${dataset}?query=${query}&perspective=published`, {
    headers: { Authorization: `Bearer ${readToken}` },
  });
  if (!res.ok) {
    console.error(`Sanity query failed (${res.status}); keeping the 2026 papers in the repository.`);
  } else {
    const docs = (await res.json()).result ?? [];
    const valid = docs.filter((d) => /^2026-v31-i[1-4]-\d{2}$/.test(d.articleId ?? "") && d.title && d.issue && d.published);
    if (valid.length === 0) {
      console.log("Sanity: no published 2026 papers yet; keeping the 2026 papers in the repository.");
    } else {
      const keep = new Set(valid.map((d) => `${d.articleId}.ts`));
      for (const f of readdirSync(dir)) if (/^2026-v31-i\d-\d{2}\.ts$/.test(f) && !keep.has(f)) unlinkSync(join(dir, f));
      for (const d of valid) writeFileSync(join(dir, `${d.articleId}.ts`), paperToTs(fromSanityPaper(d)));
      console.log(`Sanity: synced ${valid.length} papers for 2026 (${docs.length - valid.length} incomplete skipped).`);
    }
  }
}

await import("./gen-paper-index.mjs");
