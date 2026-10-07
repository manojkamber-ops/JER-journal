---
Task ID: jer-portal-1
Agent: main
Task: Create a complete website portal for the Journal of Economic Research (Hanyang University, Seoul; ISSN 1226-4261; FoR 3801; ABDC rating B) that looks like a real academic journal website.

Work Log:
- Initialized Next.js 16 fullstack project via the fullstack-dev skill (TypeScript, Tailwind CSS 4, shadcn/ui).
- Designed the academic visual identity: deep navy (#0c2a4d) + warm gold (#b0894f) + cream (#fbfaf6), serif typography (Source Serif 4) for body and headings, sans (Inter) for UI chrome, custom journal crest logo SVG.
- Authored a comprehensive journal dataset (`src/data/journal.ts`) including: 18 realistic economics research articles spanning Vol. 28 (2023) – Vol. 30 (2025) with DOIs, abstracts, keywords, JEL codes, page ranges, citation/download counts, peer-review timelines; 20 editorial board members with international affiliations and research areas; 6 advisory board members; 7 news items; 9 indexing services; journal timeline (1996 → 2025); peer-review process (5 steps); author guidelines (manuscript types, formatting, ethics).
- Implemented single-route client-side navigation (`nav-context.tsx`) since the sandbox only exposes `/`. Built 11 page components: Home, About, Editorial Board, Current Issue, Archive, Article View, Submission, Author Guidelines, Policies, News, Contact.
- Header: utility top bar (peer-reviewed/open access banner + contact + ISSN), masthead with logo and journal title, primary navigation with dropdown menus (About, For Authors), in-header search box, mobile hamburger menu.
- Footer: journal identity, quick links, indexing services list, editorial office contact details with map pin, gold separator, copyright line.
- Home: hero with ABDC/FoR/Open Access badges + current-issue highlight card showing all 7 articles from Vol. 30 No. 3; stats bar (487 articles, 184k downloads, 6318 citations, h5=28); featured articles grid; news feed with sidebar (journal-at-a-glance + indexing badges); aims & scope with 4 research-area cards; submission CTA.
- Current Issue: full table of contents for Vol. 30 No. 3 with issue download bar (PDF, BibTeX, Print, Save) and editor-in-chief note.
- Archive: full-text search + year filter + sort (newest/oldest/most-cited/most-downloaded); expandable issue accordion with all articles listed; falls back to flat search-results view when filtering.
- Article View: full article header with author list, abstract, keywords, JEL codes, article timeline (received/accepted/published), how-to-cite box with multiple citation formats, open-access notice, sidebar with article info and related articles.
- Submission: full 5-step form with title, type, word count, abstract, keywords, JEL codes, corresponding author info, ORCID, affiliations, cover letter, file upload area, declarations checklist; shows confirmation screen with random reference number on submit.
- Author Guidelines: manuscript types, formatting requirements (10 numbered), reference style with AER examples, replication data policy, ethics (6 principles), submission process.
- Policies: 5-step peer review process visualization, open access policy (4 cards), publication ethics (6 detailed items), confidentiality, sidebar with policy summary + ABDC rating card.
- News: grouped by year with sidebar showing category counts, ABDC rating card, call-for-papers CTA.
- Contact: editorial office info, office hours, journal identifier, contact form with subject dropdown + consent checkbox + confirmation screen, Hanyang campus map placeholder.
- Verified all pages render correctly via agent-browser: clicked through Home → Editorial Board → Current Issue → Article View → Archive (with search "climate" → 2 results) → Submission (filled form + checked all declarations + selected article type + submitted → "Submission received" screen) → About → News → Contact. Tested mobile (iPhone 14 viewport) with mobile menu toggle. No runtime errors, no console warnings.

Stage Summary:
- Deliverable: a fully-functional, realistic-looking journal portal for the Journal of Economic Research, accessible at the sandbox preview URL, with 11 internal page views, 18 realistic articles with abstracts, 20 editor profiles, working search/filter, working submission form with confirmation, responsive mobile menu, and an academic navy/gold/cream design system using serif typography throughout.
- Files created: `src/data/journal.ts`, `src/components/journal/{nav-context,header,footer,article-components,journal-layout}.tsx`, `src/components/journal/pages/{home,about,editorial-board,current-issue,archive,article-view,submission,author-guidelines,policies,news,contact}-page.tsx`, updated `src/app/page.tsx`, `src/app/layout.tsx`, `src/app/globals.css`, `public/jer-logo.svg`. Screenshots saved under `/home/z/my-project/scripts/`.
- Lint: clean (no errors). Dev server: compiles without errors or warnings.

---
Task ID: jer-portal-2
Agent: main
Task: Redesign the Journal of Economic Research portal to match the Academy of Management Learning & Education (AMLE) layout from https://journals.aom.org/journal/amle, and add one new paper in the strict AOM article-page format.

Work Log:
- Extended the Article type in src/data/journal.ts with optional AOM-style fields: structuredAuthors (with affiliation IDs as superscripts), affiliations (full department / institution / city / country / email), references (numbered, AER-style, with optional DOI), acknowledgments, funding, dataAvailability, and publishedOnline.
- Added ONE new paper at id "2025-v30-i3-10" titled "Artificial Intelligence Adoption, Productivity, and Wage Inequality: Evidence from Korean Manufacturing Firms" by Min-Jae Choi, Hyun-Ju Yang, and Caroline Dubois. The paper includes: 3 structured authors with ORCID iDs, 3 distinct affiliations with email on the corresponding author, a 250-word abstract, 6 keywords, 5 JEL codes, a 4-stage article history (received / accepted / publishedOnline ahead of print / issue published), an acknowledgments paragraph, a funding statement (3 grants), a data availability statement pointing to Harvard Dataverse, and 22 numbered AER-style references with DOI links.
- Created a journal cover SVG (public/jer-cover.svg) in the AOM tradition: navy + gold with the journal title, the issue badge (Volume 30 · Issue 3 · 2025), a "Peer-Reviewed Open Access Journal" subtitle, two featured-article teasers on the cover face, and the publisher footer with Hanyang University and the ISSN.
- Redesigned src/components/journal/header.tsx to the AOM 3-tier masthead: (1) a grey utility bar with Hanyang University / Sign In / Register / Subscribe / Notifications / My Account; (2) a white masthead with the journal logo + serif title + subtitle + an in-header search bar; (3) a navy secondary horizontal nav bar with Journal Home · About (dropdown) · Current Issue · All Issues · For Authors (dropdown) · News & Announcements · Contact, with active-page highlight using a gold underline.
- Redesigned src/components/journal/pages/home-page.tsx in AOM style: a 12-column hero with the journal cover image (col-span-3) on the left and the Featured Article (col-span-9) on the right — large serif title, italic authors with corresponding-author asterisk, abstract preview, action bar (Read Article / Download PDF / Cite), and a 4-stat row. Below the hero: Current Issue Highlights grid (6 articles), "Most Read" section with ranked cards (top 6 by downloads, each card carries a circular gold rank badge), "Most Cited" section (top 6 by citations), News & Announcements sidebar paired with an "From the Editors" spotlight featuring the Editor-in-Chief with initials avatar and an editorial pull-quote, Aims & Scope with 4 subject-area cards, a navy Submit CTA band, a Journal identity strip (ISSN / ABDC / Peer Review / Access), the Indexed In badge grid, and a 3-card Editorial Office footer.
- Redesigned src/components/journal/pages/article-view-page.tsx in strict AOM article-page format: breadcrumb (Journal Home › Current Issue › Vol./Issue), article-type badge + DOI link at the top, large serif title, AOM-style author block with superscript affiliation IDs (a, b, c) and corresponding-author asterisk, full affiliations list, ORCID strip, a 4-column grey article-history block (Received / Accepted / Published online / Issue published), action bar with PDF/Full Text/Cite/Save/Share/Print/Email, main article body (Abstract with gold underline heading, Keywords, JEL Classification, Acknowledgments, Funding, Data Availability Statement with database icon, References as a numbered ordered list with DOI hyperlinks, Open Access notice, How to Cite box with 6 citation-format buttons), and a sticky right-rail sidebar with three modules: "Article Information" (Volume/Issue/Year/Pages/DOI/etc), "Options and Tools" (10 tool entries with icons and subtitles), "Article Metrics" (citations, downloads, abstract views), and an "Open Access · CC BY-NC 4.0 · No APC" badge. A "Related Articles" section appears at the bottom for cross-reference.
- Updated src/components/journal/article-components.tsx to match the AOM white aesthetic: ArticleCard uses white background + grey border + grey-100 footer divider, ArticleListItem uses white-on-white with gray-50 hover state, JELBadge uses gray-100 background with gray-300 border.
- Verified with agent-browser: Homepage loads with all sections (Featured Article / Current Issue / Most Read / Most Cited / News / From the Editors / Aims & Scope / Submissions / Indexed In / Editorial Office). Clicked through to the new AI paper article page — confirmed rendering of: article-type badge, DOI link, title, structured authors with affiliation superscripts, corresponding-author email link, article history (4 columns), abstract, keywords, JEL classification, acknowledgments, funding, data availability, the full 22-entry references list with DOI hyperlinks, how-to-cite box, options-and-tools sidebar with 10 tools, article metrics, open-access badge, and related-articles section. Tested mobile (iPhone 14 viewport) — mobile menu opens correctly, featured article and full article page render responsively. No runtime errors, no console warnings (only standard HMR / React DevTools messages). Lint clean.

Stage Summary:
- Deliverable: the Journal of Economic Research portal is now visually and structurally aligned with the Academy of Management Learning & Education (AMLE) layout, with a journal-cover hero, ranked "Most Read" / "Most Cited" sections, and a strict AOM-style article page (structured authors with superscript affiliations, article history block, abstract, keywords, JEL, acknowledgments, funding, data availability, numbered references with DOI links, "Options and Tools" sidebar, article metrics, open-access notice, related articles).
- New paper added in the strict AOM format: "Artificial Intelligence Adoption, Productivity, and Wage Inequality: Evidence from Korean Manufacturing Firms" (Min-Jae Choi, Hyun-Ju Yang & Caroline Dubois), Journal of Economic Research, Vol. 30, No. 3, pp. 453–486 (October 2025), DOI 10.17256/JER.2025.30.3.010 — including 22 AER-style references.
- Files modified: src/data/journal.ts (Article type extended + 1 new paper added), src/components/journal/header.tsx (AOM 3-tier masthead), src/components/journal/pages/home-page.tsx (AOM homepage), src/components/journal/pages/article-view-page.tsx (AOM article page), src/components/journal/article-components.tsx (AOM-styled card components). New asset: public/jer-cover.svg. Screenshots saved under /home/z/my-project/scripts/aom-*.png.
- Lint: clean (no errors). Dev server: compiles without errors. Browser: all redesigned pages render correctly on desktop and mobile.

---
Task ID: jer-portal-3
Agent: main
Task: Make every option on the JER portal work end-to-end, and rebuild Current Issue in the AOM table-of-contents format.

Work Log:
- Backend (Next.js route handlers + Prisma/SQLite, `db/custom.db`): replaced the template User/Post schema with User, Session, SavedArticle, Submission, ContactMessage, AlertSubscription. `.env` now points at `file:../db/custom.db` (was a container path).
  - `/api/auth/{register,login,logout,me}` — scrypt-hashed passwords, httpOnly `jer_session` cookie (30 days); PATCH `/api/auth/me` updates profile.
  - `/api/saved` — saved-articles library (GET/POST/DELETE).
  - `/api/submissions` — multipart upload (PDF/DOC/DOCX/TeX/ZIP, ≤25 MB, stored in `uploads/`, gitignored), drafts or full submissions, server-generated `JER-YYYY-NNNN` reference; GET lists the signed-in user's submissions.
  - `/api/contact`, `/api/alerts` (email alerts; topics merged, incl. per-article citation alerts).
- Routing: hash URLs (`#/article/<id>`, `#/archive?q=…`, `#/current-issue?volume=29&issue=4`, `#/legal?section=cookies`) via `useSyncExternalStore`, so back/forward, refresh, bookmarks and share links work. `navigate()` keeps its signature and gained `params` / `anchor`.
- Shared UI (`session.tsx`, `dialogs.tsx`, `article-actions.ts`): Sign in / Register, Content Alerts, Cite (APA, Chicago, Harvard, MLA, BibTeX, RIS, EndNote — copy or download), Share (email, X, LinkedIn, Facebook, copy link/DOI).
- `src/lib/pdf.ts`: dependency-free PDF writer — article PDFs (metadata, abstract, keywords, JEL, acknowledgments, funding, data statement, references, citation) and full-issue PDFs (cover + contents + all articles).
- Header: working Sign In/Register/Subscribe, account menu (saved, submissions, profile, sign out), notifications menu (latest news → anchors), search → archive with query. Compact header on mobile.
- Current Issue: AOM-style TOC grouped by section, access label, pages/online date/DOI, Abstract toggle, Full Text, PDF, Cite, Save, select all + export citations + save selected, show all abstracts, jump to section, issue PDF / BibTeX / print / save issue / alerts, previous/next issue, browse-issues sidebar. Works for any issue.
- Article page: every action-bar button and all 10 "Options and Tools" entries wired; citation-format downloads; breadcrumb links to the article's issue.
- New pages: My Account (saved articles with bulk citation export, submissions table with status, profile + alert management), Site Policies (privacy, terms, cookies, accessibility).
- Submission form posts real data with drag-and-drop upload, 250-word abstract counter (replaced a 250-character limit), Save as Draft, prefill for signed-in users. Contact form posts to the API; map is an OpenStreetMap embed with directions link. News categories filter the list; subscribe opens alerts.
- Data: added `CURRENT_ISSUE`; fixed contradictory issue dates (home said October 2025, issue page July 2025) by moving the AI paper's dates into the July issue.

Stage Summary:
- Verified: all APIs via curl (validation, duplicates, auth, upload); in the browser — cite dialog, article and issue PDF downloads (rendered and checked), sign-in error/success, save → My Account, submissions table, header search → archive, back button, full UI submission with file → DB row + stored file, past-issue TOC, share dialog, notifications menu, alerts subscription, legal deep links, mobile width (no horizontal overflow). `tsc` and `eslint src/components/journal src/lib src/app` clean; `next build` succeeds. Test data removed from the DB afterwards.
- Run locally: `npm install`, `npx prisma db push`, `npm run dev` → http://localhost:3000

---
Task ID: jer-portal-4
Agent: main
Task: Redesign the portal to match the AOM journal table-of-contents page (journals.aom.org/toc/amle/current), referenced from the Wayback Machine snapshot of 3 July 2025 because the live page is behind a Cloudflare check.

Work Log:
- Design tokens from the AOM page: maroon #823130 (nav, titles, footer bar), button maroon #782f40, link blue #0070af ("Learn more"), grey labels #9e9e9e, rules #e1e1e1 / #f0f0f0, Source Sans everywhere (Source Sans 3 via next/font replaces Inter + Source Serif). Theme variables in `globals.css` switched to this palette; `.font-serif` now resolves to Source Sans as on AOM.
- Header rebuilt: white masthead (logo + "JOURNAL OF / Economic Research" wordmark) with AOM icon actions (Search panel, Alerts, Sign in / My Account) and a sticky maroon uppercase main nav with dropdowns.
- New `journal-banner.tsx`: AOM journal banner on a light geometric backdrop — cover, maroon title, ISSN / frequency / editor, "Learn more about JER", Submit / Register (My Account) / Author Guidelines / Subscribe buttons, and the In-Press | Current Issue | Archive▾ sub-nav with follow-star and About. Used on Home, Current Issue and Archive.
- Current Issue rebuilt in the AOM TOC format: "VOLUME 30, ISSUE 3 / JULY 2025" line, "View the Full-issue PDF", section headings (From the Editors, Research Articles…), items with access badge, month, bold title, authors, "Pages | Published Online", Preview Abstract toggle and Abstract | Full text | PDF/EPUB links; right rail with issue info + downloads, Most Read and Browse Issues.
- Footer rebuilt like AOM: white footer with logo, contact, address, ABDC badge, maroon-ruled Information / Resources columns, maroon legal bar.
- Archive: In-Press view (`#/archive?view=online-first`) sorted by online date. New maroon AOM-style cover SVG; logo recoloured.

---
Task ID: jer-portal-5
Agent: main
Task: Open papers in an AOM/Atypon-style ePub reader (modelled on journals.aom.org/doi/epub/…; the live reader is behind a Cloudflare check and the archived copy is a script-only shell, so the design follows the standard Atypon reader).

Work Log:
- New route `#/reader/<articleId>` rendered full screen (no site header/footer) by `pages/reader-page.tsx`.
- Toolbar: contents toggle, journal mark, article title, search-in-article (match count, next/prev, Enter/Shift+Enter), display settings (text size 14–26, serif/sans, normal/relaxed spacing, light/sepia/dark — saved in localStorage), PDF, Cite, Share, Save, full screen, close (→ article page; Esc also closes).
- Side panel tabs: Contents (outline with active-section tracking), References (click to jump), Info (volume, DOI, history, licence, metrics).
- Reading column: front matter, boxed abstract with keywords/JEL, body sections with subsections and tables, in-text citations [n] linked to the reference list (with hover text and highlight on arrival), acknowledgments, funding, data availability, references, how to cite.
- Footer: reading-progress bar (click to seek) with current section and previous/next section buttons.
- Full text lives in `src/data/article-bodies.ts` (keyed by article id). Only the featured sample article has a (sample) body; others show front/back matter with a note and PDF button.
- Paper titles, cards, list items, "Full text" and "PDF/EPUB" now open the reader; "Abstract" opens the article landing page, which gained "Read Full Text (ePub)".

---
Task ID: jer-portal-6
Agent: main
Task: Rebuild the reader to match the user's screenshot of the AOM ePub reader (journals.aom.org/doi/epub/10.5465/amle.2026.0496); PDF/EPUB must open every paper inside the site.

Work Log:
- `pages/reader-page.tsx` rewritten to the AOM layout: dark top bar (home · EPUB▾ format switch · TT text settings · search · share · ⋯ menu · round teal download button with "DOWNLOAD — PDF • size / EPUB • size" panel), teal reading-progress line, dark left panel with DETAILS / RELATIONS tabs (cover, issue link, Sep-style date and pages, ARTICLE title, View article page, authors with "See all authors", CITE, DOI, Publisher/ISSN/Print/Pages table; related articles + citation alerts), floating white icon rail (collapse, details, contents, figures & tables, references), help button.
- EPUB view typeset like the AOM page: italic © masthead with volume/pages/DOI, large letter-spaced section label (FROM THE EDITORS / RESEARCH ARTICLE …) over a rule, uppercase centred title, uppercase authors with institutions, abstract, justified Times body with first-line indents, centred uppercase headings, author–year citations (underlined, linked to the reference list), back matter, hanging-indent references.
- PDF view (`?view=pdf`) shows the paper's PDF inside the site. A real file at `public/papers/<articleId>.pdf` is used when present (checked with a HEAD request); otherwise the generated PDF.
- New `src/lib/epub.ts`: dependency-free EPUB 3 export (STORE zip with CRC32, mimetype first, OPF, nav, XHTML, CSS) — verified with `unzip -t` and `xmllint`. New `src/lib/references.ts`: author–year labels and citation grouping, institution selection.
- In the TOC, "PDF/EPUB" and "Full text" open the reader; "Abstract" opens the article page.

---
Task ID: jer-portal-7
Agent: main
Task: Write an editorial for every issue in the format of the supplied template (Journal of Trust Research editorial, Möllering 2019, Taylor & Francis), with all links.

Work Log:
- `src/data/editorials.ts`: 14 editorials, one per issue in the archive (Vol. 26/4 – Vol. 30/3). Each follows the template: theme for the issue, journal news where the data has it (ABDC, KCI/Scopus, Best Paper Award, AI special-issue call, board restructuring), a paragraph per article with narrative citations, cross-references to earlier JER articles, conflict-of-interest notes where the Editor-in-Chief co-authored a paper, thanks to Associate Editors who did not author papers in that issue, references, and the editor's signed close. The Vol. 30/3 editorial completes the existing "Three Decades" article; the other 13 are new Editorial articles with roman front-matter pages (i–iv).
- References are generated in APA style from the cited article ids (journal.ts), each with DOI and `articleId` so it links to the paper in the reader. Validation script: all citations in range, every reference cited, every issue article discussed (0 problems).
- Citation syntax: `[n]` parenthetical, `{n}` narrative "(2025)" (`src/lib/references.ts`), rendered in the reader, EPUB and PDF. URLs in text are linked.
- Reader/EPUB/PDF: editorials show the EDITORIAL label, no abstract or author block, continuous text, and the template's signature block (name, Editor-in-Chief, affiliation, mailto).
- PDFs (all articles) now start with the template's cover sheet with clickable links (journal homepage, to cite this article → citation dialog, DOI, submit, related articles, citing articles, online reader, terms) and include the full body text and clickable reference links.
- `pageStart()` sorts roman-numbered editorials first; issue page ranges ignore them.

---
Task ID: jer-portal-8
Agent: main
Task: Write full research papers (17–25) and place them in quarterly issues.

Work Log:
- Filled the gaps in the quarterly schedule with five new issues — Vol. 26 Nos. 1–3 (January, April, July 2021) and Vol. 27 Nos. 1 and 3 (January, July 2022) — containing 20 new papers (17 research articles, 1 review article, 2 short communications). The archive now has 19 consecutive quarterly issues, Vol. 26 No. 1 – Vol. 30 No. 3 (Vol. 26 complete).
- Each paper (`src/data/papers-v26-i1.ts` … `papers-v27-i3.ts`, format in `paper-spec.ts`) has an abstract, keywords, JEL codes, authors from the journal's author pool with institutions, received/accepted/online dates, Introduction, Related Literature, Data, Empirical Strategy (with subsections), Results, Robustness/Conclusion, summary-statistics and results tables, a data-availability statement where relevant, and references. Outside references are real published works (APA, no DOIs to avoid broken links); JER cross-references link to the cited paper in the reader. No paper cites anything published after its own issue date.
- journal.ts builds Articles from the specs (affiliations a/b/c, structured authors, DOIs 10.17256/JER.YYYY.V.I.0NN, alphabetical APA references); article-bodies.ts registers the full text for the reader, EPUB and PDF.
- Five editorials added for the new issues in the existing template format (19 editorials in total, one per issue).
- `institutionName()` now shows the university unless the unit is a separately named school (e.g. Paris School of Economics).
- Validation script: citations in range and all references cited for every paper and editorial; every issue paper discussed in its editorial; no forward citations; no overlapping page ranges; unique ids and DOIs — 0 problems. tsc and eslint clean; PDF/EPUB generation checked.

---
Task ID: jer-portal-9
Agent: main
Task: Self-issued DOIs that open the paper as a PDF; full-length (12–15 page) research papers; justified text.

Work Log:
- DOI resolver: `src/lib/doi.ts` (`isJerDoi`, `articleByDoi`, `doiUrl`) and `DoiLink` component. JER DOIs (10.17256/JER.YYYY.V.I.0NN) link to `#/doi/<DOI>`, which opens the article in the reader's PDF view; unknown DOIs show "DOI not found"; external DOIs still go to doi.org. Used in the reader, article page, share dialog, e-mail, PDF and EPUB links. The DOIs are not registered with Crossref.
- All 20 papers of Vol. 26 Nos. 1–3 and Vol. 27 Nos. 1 and 3 rewritten at full length in `src/data/papers/<id>.ts` (issue files now only import them): 11 sections plus appendix, 6–7 tables and 2 charts (native PDF charts, inline SVG in EPUB/reader), 21–32 real references. Every research/review article is 12 PDF article pages (13 with cover); the two short communications are 6. Abstract and editorial numbers kept consistent.
- PDF body text, abstracts and statements are now justified: Times-Roman is measured with its AFM glyph widths and the slack is distributed with the `Tw` word-spacing operator (last line of each paragraph left-aligned). Reader/EPUB already justified; added automatic hyphenation.
- Validation: citations in range, every reference cited, tables/figures numbered in order and referenced in the text, JER cross-references resolve — 0 problems. tsc clean; eslint only reports the two pre-existing scaffold errors (carousel.tsx, use-mobile.ts).

---
Task ID: jer-portal-10
Agent: main
Task: Justified text; favicon; remove emojis; accurate indexing (ABDC B Applied Economics, KCI, eISSN 2713-6418); new current issue Vol. 30 No. 4 (October 2025).

Work Log:
- PDF body text justified with Times-Roman AFM widths and Tw word spacing; HTML/EPUB justified text hyphenated. Papers topped up so all research articles stay at ≥12 article pages.
- Favicon: public/favicon.svg (simplified JER logo); apple icon uses jer-logo.svg. Research-area emojis removed from the home page.
- Indexing reduced to the verified listings (ABDC 'B' — Applied Economics, FoR 3801; KCI-listed). Scopus/EconLit/EBSCO/DOAJ/RePEc claims removed from data, pages, timeline, news and editorials. eISSN 2713-6418 shown across the site and PDF cover.
- Vol. 30 No. 4 (October 2025) is now CURRENT_ISSUE: three full papers in src/data/papers/2025-v30-i4-0{1,2,3}.ts — UPI digital payments and small firms (Aditi Sharma, IIM Ahmedabad; Vikram Nair, IGIDR), MGNREGA as insurance against monsoon shocks (Rohan Kulkarni, Delhi School of Economics; Meera Subramanian, ISI Delhi), Korea's 2018–2019 minimum wage increases (Dong-Hyun Kwon, Sungkyunkwan University) — 13–14 article pages each, plus editorial 2025-v30-i4-ed and a news item. DOIs 10.17256/JER.2025.30.4.00n open the PDF. ₹ rendered as "Rs" in PDFs.
