// Imports the current issue's papers (Vol. 31, No. 2) from src/data/papers/ into Sanity (repeatable).
// Run: npm run sanity:push   (needs SANITY_API_WRITE_TOKEN in .env.local or .env; never commit the token)
import { readdirSync } from "node:fs";
import { join } from "node:path";
import { pathToFileURL } from "node:url";
import { SANITY_API_VERSION, sanityEnv, toSanityPaper } from "./sanity-paper-map.mjs";

const { projectId, dataset, writeToken } = sanityEnv();
if (!writeToken) {
  console.error("SANITY_API_WRITE_TOKEN is not set (add it to .env.local). Nothing was sent.");
  process.exit(1);
}

const dir = join(process.cwd(), "src", "data", "papers");
const files = readdirSync(dir).filter((f) => /^2026-v31-i2-\d{2}\.ts$/.test(f)).sort();
const docs = [];
for (const f of files) {
  const { paper } = await import(pathToFileURL(join(dir, f)).href);
  docs.push(toSanityPaper(paper));
}

// Send in small batches to stay well under request-size limits
for (let i = 0; i < docs.length; i += 4) {
  const batch = docs.slice(i, i + 4);
  const res = await fetch(`https://${projectId}.api.sanity.io/v${SANITY_API_VERSION}/data/mutate/${dataset}`, {
    method: "POST",
    headers: { Authorization: `Bearer ${writeToken}`, "Content-Type": "application/json" },
    body: JSON.stringify({ mutations: batch.map((doc) => ({ createOrReplace: doc })) }),
  });
  if (!res.ok) {
    console.error(`Sanity rejected batch ${i / 4 + 1}: ${res.status} ${await res.text()}`);
    process.exit(1);
  }
  console.log(`Imported ${batch.map((d) => d.articleId).join(", ")}`);
}
console.log(`Done: ${docs.length} papers in Sanity project ${projectId} (${dataset}).`);
