// Vercel build: brings the database schema up to date (when a Postgres database is connected), then builds the site.
// `prisma db push` without --accept-data-loss refuses changes that would delete data; the deploy then continues
// with the existing schema and the warning is shown in the build log.
import { execSync } from "node:child_process";

const run = (cmd) => execSync(cmd, { stdio: "inherit" });

if (/^postgres(ql)?:\/\//.test(process.env.DATABASE_URL ?? "")) {
  try {
    run("npx prisma db push --skip-generate");
  } catch {
    console.warn("prisma db push failed: deploying with the current database schema.");
  }
} else {
  console.log("No Postgres DATABASE_URL set: skipping the database schema update.");
}
run("npx next build");
