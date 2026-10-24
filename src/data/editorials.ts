// Issue editorials, one per issue, written in the format of a journal "Editorial":
// a theme for the issue, a paragraph on each article, journal news, thanks, references and the editor's sign-off.
//
// Citations in the paragraphs refer to positions in `cited` (1-based):
//   [n]  parenthetical citation  → "(Park, Chen, & Kumar, 2025)"
//   {n}  narrative citation, written after the authors' names → "(2025)"
// The reference list (APA style, with DOI and on-site links) is generated from `cited` in journal.ts.
// URLs written in a paragraph are shown as links in the reader.

export type EditorialSpec = {
  id: string;
  /** true when the editorial already exists in ARTICLES (only its references, affiliation and text are added) */
  existing?: boolean;
  volume: number;
  issue: number;
  year: number;
  published: string;
  pages: string;
  title: string;
  abstract: string;
  keywords: string[];
  cited: string[];
  paragraphs: string[];
};

export const EDITORIALS: EditorialSpec[] = [
  /* Volume 31, Issue 1 — October 2026 (current issue) */
  {
    id: "2026-v31-i1-ed",
    volume: 31,
    issue: 1,
    year: 2026,
    published: "2026-10-08",
    pages: "i–iii",
    title: "Editorial: Work, Learning and Enterprise in Times of Technological Change",
    abstract:
      "The Editor-in-Chief introduces three articles, all in full text, on the financial risk exposure of MSMEs in Nashik District, data-driven support for self-regulated learning among working professionals, and the contribution of AI technologies to start-up growth and innovation in Maharashtra.",
    keywords: ["Editorial", "MSMEs", "Learning analytics", "Start-ups"],
    cited: ["2026-v31-i1-14", "2026-v31-i1-15", "2026-v31-i1-16"],
    paragraphs: [
      "This issue of the Journal of Economic Research (JER), Volume 31, Number 1, brings together three articles from India on how firms and workers adjust to technological and financial change: the financial risks faced by micro, small and medium enterprises, the use of learning data to support working professionals, and the contribution of AI to start-up growth and innovation. All three appear in full in this issue.",
      "Laxman Arjun Patil and Amardeep Bajpai {1} survey 384 MSMEs across four talukas of Nashik District. Credit and liquidity risk dominate the risk landscape, while regulatory risk is the least perceived. Although 71 per cent of respondents knew of schemes such as PMMY, CGTMSE and MUDRA, only 34 per cent had availed credit under them, held back by collateral requirements, documentation complexity and limited financial literacy. Credit risk, liquidity risk and digital-finance adoption together explain 58.6 per cent of the variance in perceived financial performance, and the authors propose a cluster-sensitive policy mix of guarantee-scheme reform, fintech-led working-capital lending and district-level credit literacy drives.",
      "Pranav Prashant Godle and Amit Aggrawal {2} review the literature published between 2000 and 2025 on self-regulated learning, learning analytics and adult learning, and develop a framework that links behavioural, assessment, social, biometric and self-report data to descriptive, diagnostic, predictive and prescriptive analytics across the forethought, performance and self-reflection phases of learning. They find that current platforms serve the performance phase well but leave the forethought phase — goal setting and planning — under-served, and they propose three design principles, agentic, transparent and contextualised, for platforms, employers and professionals.",
      "Ritu Bothara and Amit Aggrawal {3} survey 412 start-ups in Maharashtra, India's largest start-up ecosystem. Of these, 86.2 per cent use at least one AI technology, and AI adoption is closely associated with growth (r = .62) and innovation capability; with the channel constructs, the model explains 48.7 per cent of the variance in perceived growth. The adoption gap between the Tier-1 hubs of Mumbai and Pune and Tier-II/III cities is statistically significant but small (d = 0.33), and firms in the highest AI maturity band launched 3.9 new products or services over three years, against 1.6 in the lowest band.",
      "Taken together, the three articles show how much the effects of a technology or a policy depend on the firms and workers that receive it. I am grateful to the Associate Editors who handled the submissions in this issue and to the reviewers who supported them with careful and timely reports.",
    ],
  },
];
