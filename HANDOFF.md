# Journal of Economic Research (JER) website — handoff

State as of **14 November 2026**. This file sits alongside the website's full source.

---

## 1. What this is

The website of the *Journal of Economic Research* (ISSN 1226-4261, eISSN 2713-6418), in the style of an AOM/Elsevier
journal site: home, current issue, archive, article pages, an e-reader with PDF/EPUB, submissions, author guidelines,
an APC page, accounts and alerts.

| | |
|---|---|
| Live site | https://www.jer-journal.org (also https://jerjournal.vercel.app; `jer-journal.org` redirects to `www`) |
| Code | https://github.com/manojkamber-ops/JER-journal — branch `main` |
| Sanity Studio (editing papers) | https://jer-journal.sanity.studio |
| Contact email shown on the site | editorial@jer-journal.org |

---

## 2. Accounts and IDs

No passwords, tokens or keys are in this file or in the zip.

| Service | Account / ID | Notes |
|---|---|---|
| GitHub | `manojkamber-ops` / repo `JER-journal` | Every push to `main` deploys to Vercel. |
| Vercel | team `okay-g`, project `jerjournal` | Hobby plan. Build command: `node scripts/vercel-build.mjs` (from `vercel.json`). |
| Domain / DNS | `jer-journal.org` at **GoDaddy** | A `@` → `216.198.79.1`; CNAME `www` → `da1288f7a2fe77b3.vercel-dns-017.com`. Email (MX) is GoDaddy (`mailstore1.secureserver.net`). |
| Database | **Neon Postgres** `jer-journal-db` (Vercel → Storage), region Washington D.C. (iad1), Free plan | Connected to `jerjournal`; Vercel sets `DATABASE_URL` and `DATABASE_URL_UNPOOLED` itself. Another team database, `journal4-db`, belongs to a different project — do **not** connect it. |
| Sanity | project **`imuzzo9u`** "Journal of Economic Research", organisation `ozV3b3d53` ("Manoj Kamber") | Datasets: `production` (public, papers, read live by the site) and `forms` (private, form entries). Studio appId `yo7yrxjylfgoh64kuyng8cq2`, host `jer-journal`. Project owner: **prmanojkamber@gmail.com**. The GitHub login `manojkamber-ops` and the Google account manojkamber@gmail.com are **not** members of this Sanity project. |
| KCI (reference only) | journal ID `000620` | The real journal's record on kci.go.kr (see §5, item 7). |
| DOI prefix | `10.17256` (Crossref member 6837, Hanyang Economic Research Institute) | DOIs used on the site are **not registered** with Crossref. |

---

## 3. How it is built

- **Next.js 16** (App Router) + React 19 + Tailwind + Prisma 6. Read `node_modules/next/dist/docs/` before changing
  Next.js code (see `AGENTS.md`). Pages use hash routes: `#/current-issue`, `#/archive`, `#/article/<id>`,
  `#/reader/<id>`, `#/doi/<DOI>`, `#/apc`, …
- **Papers** come from Sanity (live, refreshed within about 60 s) with a backup copy in `src/data/papers/*.ts`.
  Each issue that has papers in Sanity is shown from Sanity. Sanity papers with "Sample / demonstration content"
  switched on are never shown.
- **Database** (Neon): accounts, sessions, saved articles, submissions (including the manuscript file when Sanity
  can't take it), contact messages, alerts and full-text requests. Tables are created/updated on each deploy by
  `prisma db push` (no data-loss changes).
- **PDFs** are generated in the browser (`src/lib/pdf.ts`). Image figures are embedded via the same-origin route
  `/api/figure` (only this Sanity project's images).

Key files:

| File | What |
|---|---|
| `src/data/journal.ts` | Journal info (`JOURNAL_INFO`), current issue, news, timeline, archive pattern (`archiveIssues`), stats |
| `src/data/papers/` | Repository copies of the papers (`gen-paper-index.mjs` builds `index.ts`) |
| `src/lib/sanity-papers.ts`, `src/data/live-papers.ts` | Live Sanity fetch and merge |
| `src/components/journal/pages/` | All pages (`archive-page.tsx`, `article-view-page.tsx`, `reader-page.tsx`, `apc-page.tsx`, …) |
| `src/app/api/` | `submissions`, `contact`, `requests`, `alerts`, `auth`, `saved`, `figure` |
| `studio/` | Sanity Studio: `schemaTypes/paper.ts`, `structure.ts`, `current-issue.ts` |
| `scripts/` | `vercel-build.mjs`, `gen-paper-index.mjs`, `sanity-paper-map.mjs` (PaperSpec ⇄ Sanity) |

---

## 4. Current content

**Volume 31, Issue 1 (October 2026)** — the current issue, 9 research papers, all with full text:

| ID | Paper | Authors |
|---|---|---|
| 2026-v31-i1-14 | Financial Risk Exposure and Management Strategies of MSMEs in Maharashtra: A Study of Nashik District | Laxman Arjun Patil, Amardeep Bajpai (Sandip University) |
| 2026-v31-i1-15 | Data-Driven Approaches to Self-Regulated Learning Among Working Professionals Through Digital Platforms | Pranav Prashant Godle, Amit Aggrawal (Sandip University) |
| 2026-v31-i1-16 | Exploring the Contribution of AI Technologies to Start-Up Growth and Innovation in Maharashtra | Ritu Bothara, Amit Aggrawal (Sandip University) |
| 2026-v31-i1-18 | AIRS 2.0: A Conceptual Composite-Index Framework for Assessing Industry-Level AI Impact Resilience | Aniket M. Alvekar, Shivalika P. Singh (Sandip University) |
| 2026-v31-i1-19 | SAIM 2.0 and the Case for Systematic Comparative Framework Analysis | Aniket M. Alvekar, Shivalika P. Singh (Sandip University) |
| 2026-v31-i1-20 | Assessing the Economic Impact of Government Initiatives on Startup Ecosystem Development in Gujarat | Rahul Pareek, Dr. Payal Mehta (Gujarat Law Society University) |
| 2026-v31-i1-21 | Investment Patterns and Their Economic Impact on Startup Development in Gujarat: A Quantitative Assessment | Rahul Pareek, Dr. Payal Mehta (Gujarat Law Society University) |
| 2026-v31-i1-22 | An Empirical Assessment of Household Wealth Accumulation, Savings Propensity and Investment Portfolio Behaviour in Rural Central Gujarat | Dipali Jadav, Dr. Ashwinkumar Patel (Parul University) |
| 2026-v31-i1-23 | Income Elasticity of Savings, Risk Preferences and Financial Asset Allocation among Rural Households: An Econometric Analysis of Central Gujarat | Dipali Jadav, Dr. Ashwinkumar Patel (Parul University) |

- **Archive:** Volumes 1–31 are listed. All past issues are empty and show a 🔒; clicking one shows a
  members-only notice, then sign-in. Pattern used: semi-annual 1996–2004, quarterly (Jan/Apr/Jul/Oct) from 2005.
- **No sample content** remains: the 75 sample papers, their editorials and the invented statistics were removed
  in October 2026. There is currently no issue editorial.
- **Pay APC page** (`#/apc`): USD 1,250 per accepted article; shows "Online payment opening soon" until a payment
  link is set.
- **Search engines:** the whole site is deliberately **hidden** (`robots.txt` `Disallow: /`, meta `noindex, nofollow`).

### Adding papers
- **Normal route:** Sanity Studio → Papers → Volume → Issue → **+** (volume, issue, year and date are pre-filled).
  Optional author fields Title / Role / Email produce the "name¹ / role, institution email" author layout.
  Leave "Full text" empty for a locked, abstract-only paper. Publish → live within about a minute.
- **Converting PDFs/DOCX** (as done in this session): extract text, rebuild tables, crop figures as images, create
  the Sanity document with `scripts/sanity-paper-map.mjs` → `npx sanity dataset import … --missing` from `studio/`
  (use the Studio's own CLI, not `@sanity/cli@latest`), then write the repo backup and run `gen-paper-index.mjs`.

---

## 5. Open items / next steps

1. **Sanity write token for the forms.** `SANITY_API_WRITE_TOKEN` (Editor permission) was not set in Vercel at the
   last check. Until it is, submissions, contact messages and requests are stored only in the Neon database
   (Vercel → Storage → `jer-journal-db` → Data editor). Create it in sanity.io/manage → project → API → Tokens, add
   it in Vercel → Settings → Environment Variables, then redeploy. Only the owner should handle the token.
2. **Mailbox.** Make sure `editorial@jer-journal.org` exists (or forwards) in GoDaddy Email & Office.
3. **APC payment.** Create a Razorpay or Stripe payment link in the organisation's own account and set
   `NEXT_PUBLIC_APC_PAYMENT_URL` in Vercel (or put the link in `JOURNAL_INFO.apcPaymentUrl`).
4. **Test entries to delete** in the database: submission `JER-2026-5828` ("TEST SUBMISSION – please delete").
5. **Pending papers.**
   - "Economic Analysis of Investment Distribution and Government Initiatives in the Gujarat Startup Ecosystem"
     (Pareek & Mehta) was **not** added: its title, authors and abstract closely match an article already published
     on jier.org (Vol 6 Issue 2, 2026). Add it only with the authors' written confirmation that it is a different,
     unpublished paper. Paper 2026-v31-i1-20 should be checked against the same jier.org article.
   - Five PDFs by "Z. Ai" (`IEEE_Research_Papers/Paper1–5`) were not added: placeholder author
     (`z.ai@imr.example.org`), template header, impossible dates.
6. **Content still to verify or replace before the site goes public:** editorial board (names, @hanyang.ac.kr
   emails, phone numbers), the "Call for Papers" news item, review statistics (acceptance rate, days to decision),
   publication frequency ("quarterly"), "KCI-listed" (KCI shows coverage to 2021) and parts of the timeline.
7. **Conflict with the real journal.** KCI lists the real JER's own Volume 31, Issues 1 and 2 (2026) with different
   papers, and shows 2 issues/year (2002–2008) and 3 issues/year (2009–). The site's Vol. 31 No. 1 and archive
   pattern differ from that record. Resolve with the journal's publisher before making the site public.
8. **DOIs** (`10.17256/JER.…`) must be registered with Crossref by the Hanyang Economic Research Institute before
   `doi.org` links work. Until then the site resolves them itself at `#/doi/<DOI>`.
9. **SEO / AI visibility** (planned, not built): real page URLs instead of `#/` routes, Google Scholar `citation_*`
   tags, schema.org structured data, `sitemap.xml`, canonical/OG tags, `llms.txt`. Switch indexing on only after
   items 6–8 are resolved.
10. **Optional:** add JER's real past papers (KCI records for Volumes 7–30, about 294 papers) as locked entries —
    collected once in this session but deliberately not added at the owner's request.

---

## 6. Working on it

```bash
git clone https://github.com/manojkamber-ops/JER-journal.git
cd JER-journal && npm install
npx tsc --noEmit && npx next build      # check before pushing
git push origin main                     # deploys to Vercel
cd studio && npx sanity deploy           # publish Studio changes (needs the Sanity owner's login)
```

- `.env` is not in Git or in this zip. For local work, copy the database URLs from Vercel → Storage →
  `jer-journal-db` → Quickstart (see `.env.example`).
- Ask before deleting content or changing accounts; never paste secret keys into chat or commit them.
- After a change: build, push, then check https://www.jer-journal.org (hard refresh).

---

## 7. Starting prompt for a new Claude session

Open this folder in Claude Code (or clone the repo) and paste:

```text
You are continuing work on the Journal of Economic Research (JER) website. Read HANDOFF.md in this folder first:
it describes the project, accounts and IDs, current content (Vol. 31 No. 1, October 2026), how papers are added
through Sanity, and the open items. Also read AGENTS.md (Next.js 16 differs from older versions).

Rules: publish only genuine papers with their real authors; never invent papers, authors, data or statistics;
keep the site hidden from search engines until the items in HANDOFF.md §5 (6–8) are resolved; ask before deleting
content or changing accounts; never handle or print secret keys. After each change run `npx tsc --noEmit` and
`npx next build`, push to main (Vercel deploys), and check https://www.jer-journal.org.

Start by running `git pull` and `npm install`, then tell me you're ready.
```
