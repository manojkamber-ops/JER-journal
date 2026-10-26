// Journal of Economic Research - Data
// Publisher: Hanyang University Seoul
// ISSN: 1226-4261 | eISSN: 2713-6418 | Field of Research: 3801 (Applied Economics) | ABDC Rating: B | KCI-listed

export const JOURNAL_INFO = {
  title: "Journal of Economic Research",
  abbrTitle: "J. Econ. Res.",
  publisher: "Hanyang University, Seoul",
  school: "Hanyang University",
  department: "Department of Economics, College of Economics and Finance",
  issnPrint: "1226-4261",
  issnOnline: "2713-6418",
  fieldOfResearch: "3801",
  forDescription: "Applied Economics",
  abdcRating: "B",
  abdcYear: "2022",
  /** Korea Citation Index (National Research Foundation of Korea) status. */
  kciStatus: "KCI-listed journal",
  frequency: "Quarterly (4 issues per year)",
  founded: "1996",
  editorInChiefOffice: "Hanyang University, 222 Wangsimni-ro, Seongdong-gu, Seoul 04763, Republic of Korea",
  contactEmail: "jer@hanyang.ac.kr",
  phone: "+82-2-2220-0294",
  fax: "+82-2-2220-0295",
  website: "https://jer.hanyang.ac.kr",
  doiPrefix: "10.17256",
  license: "Open Access — Creative Commons Attribution-NonCommercial 4.0 (CC BY-NC 4.0)",
  apc: "Article Processing Charge (APC): USD 1,250 per accepted article, payable only if the article is accepted for publication.",
  /** Article processing charge per accepted article, in US dollars. */
  apcUsd: 1250,
  apcAmount: "USD 1,250",
  /**
   * Hosted payment page for the APC (a Razorpay or Stripe payment link). Set NEXT_PUBLIC_APC_PAYMENT_URL in Vercel, or
   * put the link here. Until it is set, the Pay APC page asks authors to contact the editorial office for an invoice.
   */
  apcPaymentUrl: process.env.NEXT_PUBLIC_APC_PAYMENT_URL ?? "",
  language: "English",
};

// The issue shown as "Current Issue" across the site.
export const CURRENT_ISSUE = {
  volume: 31,
  issue: 1,
  year: 2026,
  published: "2026-10-08",
  label: "October 2026",
};

export type AuthorAffiliation = {
  id: string;        // superscript identifier, e.g. "a", "b", "c"
  department: string;
  institution: string;
  city: string;
  country: string;
  email?: string;    // only on corresponding author
  orcid?: string;
};

export type ArticleAuthor = {
  name: string;
  affiliationIds: string[];     // which Affiliation.id entries apply to this author
  corresponding?: boolean;
  orcid?: string;
};

export type ArticleReference = {
  number: number;
  text: string;       // full reference string (AER or APA style)
  doi?: string;
  articleId?: string; // set when the reference is a JER article, so readers can open it on the site
};

export type Article = {
  id: string;
  doi: string;
  title: string;
  authors: { name: string; affiliation: string; corresponding?: boolean; email?: string }[];
  // New: AOM-style structured authors & affiliations (used by the redesigned article page)
  structuredAuthors?: ArticleAuthor[];
  affiliations?: AuthorAffiliation[];
  references?: ArticleReference[];
  acknowledgments?: string;
  funding?: string;
  dataAvailability?: string;
  abstract: string;
  keywords: string[];
  jelCodes: string[];
  pages: string;
  volume: number;
  issue: number;
  year: number;
  received: string;
  accepted: string;
  published: string;
  publishedOnline?: string;     // "Published online ahead of print" date
  citations: number;
  downloads: number;
  pdfSize: string;
  type: "Research Article" | "Review Article" | "Short Communication" | "Editorial";
  /** false marks a genuine published article; anything else is illustrative sample content (tagged "Sample article"). */
  sample?: boolean;
  featured?: boolean;
};

// Articles come from the paper files in src/data/papers (and live from Sanity) plus the issue editorials.
export const ARTICLES: Article[] = [
];

export type Editor = {
  id: string;
  name: string;
  role: string;
  affiliation: string;
  country: string;
  researchAreas: string[];
  email: string;
};

export const EDITORIAL_BOARD: Editor[] = [
  {
    id: "e1",
    name: "Prof. Jae-Hoon Hwang",
    role: "Editor-in-Chief",
    affiliation: "Department of Economics, Hanyang University, Seoul",
    country: "Republic of Korea",
    researchAreas: ["Macroeconomics", "Monetary Policy", "Economic Growth"],
    email: "jhhwang@hanyang.ac.kr",
  },
  {
    id: "e2",
    name: "Prof. Tae-Woo Lee",
    role: "Co-Editor",
    affiliation: "Department of Finance, Hanyang University, Seoul",
    country: "Republic of Korea",
    researchAreas: ["Banking", "Financial Regulation", "Basel III"],
    email: "twlee@hanyang.ac.kr",
  },
  {
    id: "e3",
    name: "Prof. Hyun-Jin Kim",
    role: "Co-Editor",
    affiliation: "School of Economics, Hanyang University, Seoul",
    country: "Republic of Korea",
    researchAreas: ["Climate Finance", "Sovereign Debt", "Macro-Finance"],
    email: "hjkim@hanyang.ac.kr",
  },
  {
    id: "e4",
    name: "Prof. Sungho Park",
    role: "Managing Editor",
    affiliation: "Department of Economics, Hanyang University, Seoul",
    country: "Republic of Korea",
    researchAreas: ["Monetary Economics", "Household Finance", "Applied Econometrics"],
    email: "spark@hanyang.ac.kr",
  },
  {
    id: "e5",
    name: "Prof. Hyun-Sung Lim",
    role: "Associate Editor",
    affiliation: "Department of Economics, Hanyang University, Seoul",
    country: "Republic of Korea",
    researchAreas: ["Fiscal Policy", "Developing Economies", "Bayesian Econometrics"],
    email: "hslim@hanyang.ac.kr",
  },
  {
    id: "e6",
    name: "Prof. Min-Jae Choi",
    role: "Associate Editor",
    affiliation: "Department of Economics, Hanyang University, Seoul",
    country: "Republic of Korea",
    researchAreas: ["Industrial Organization", "Digital Platforms", "Merger Analysis"],
    email: "mjchoi@hanyang.ac.kr",
  },
  {
    id: "e7",
    name: "Prof. Sang-Yoon Han",
    role: "Associate Editor",
    affiliation: "Graduate School of International Studies, Hanyang University",
    country: "Republic of Korea",
    researchAreas: ["Inequality of Opportunity", "Education Economics", "Mobility"],
    email: "syhan@hanyang.ac.kr",
  },
  {
    id: "e8",
    name: "Prof. Jin-Young Choi",
    role: "Associate Editor",
    affiliation: "Department of Economics, Hanyang University, Seoul",
    country: "Republic of Korea",
    researchAreas: ["Labour Economics", "Wage Rigidity", "Linked Employer–Employee Data"],
    email: "jychoi@hanyang.ac.kr",
  },
  {
    id: "e9",
    name: "Prof. Keiko Sato",
    role: "Associate Editor",
    affiliation: "Hitotsubashi University, Tokyo",
    country: "Japan",
    researchAreas: ["Health Economics", "Aging", "Long-Term Care"],
    email: "k.sato@r.hit-u.ac.jp",
  },
  {
    id: "e10",
    name: "Prof. Yuki Tanaka",
    role: "Associate Editor",
    affiliation: "Keio University, Tokyo",
    country: "Japan",
    researchAreas: ["International Trade", "Global Value Chains", "Firm Heterogeneity"],
    email: "ytanaka@econ.keio.ac.jp",
  },
  {
    id: "e11",
    name: "Prof. Wei Zhang",
    role: "Associate Editor",
    affiliation: "Fudan University, Shanghai",
    country: "China",
    researchAreas: ["Trade Policy", "Industrial Upgrading", "Chinese Economy"],
    email: "wzhang@fudan.edu.cn",
  },
  {
    id: "e12",
    name: "Prof. Hong-Mei Wang",
    role: "Associate Editor",
    affiliation: "Peking University, Beijing",
    country: "China",
    researchAreas: ["Inequality", "Education", "Chinese Labour Markets"],
    email: "hmwang@pku.edu.cn",
  },
  {
    id: "e13",
    name: "Prof. Lakshmi Iyer",
    role: "Associate Editor",
    affiliation: "University of Notre Dame, Indiana",
    country: "United States",
    researchAreas: ["Development Economics", "Field Experiments", "Tax Compliance"],
    email: "liyer@nd.edu",
  },
  {
    id: "e14",
    name: "Prof. Andreas Müller",
    role: "Associate Editor",
    affiliation: "University of Zurich",
    country: "Switzerland",
    researchAreas: ["Innovation Economics", "University–Industry Collaboration", "R&D"],
    email: "a.mueller@econ.uzh.ch",
  },
  {
    id: "e15",
    name: "Prof. Markus Bauer",
    role: "Associate Editor",
    affiliation: "University of Mannheim",
    country: "Germany",
    researchAreas: ["Energy Transition", "Labour Markets", "Structural Change"],
    email: "m.bauer@uni-mannheim.de",
  },
  {
    id: "e16",
    name: "Prof. Anna Petrova",
    role: "Associate Editor",
    affiliation: "Charles University, Prague",
    country: "Czech Republic",
    researchAreas: ["Banking", "SME Lending", "Macroprudential Policy"],
    email: "a.petrova@fsv.cuni.cz",
  },
  {
    id: "e17",
    name: "Prof. Caroline Dubois",
    role: "Associate Editor",
    affiliation: "Paris School of Economics",
    country: "France",
    researchAreas: ["Industrial Organization", "Digital Markets", "Structural Estimation"],
    email: "c.dubois@psemail.eu",
  },
  {
    id: "e18",
    name: "Prof. Samuel Adeyemi",
    role: "Associate Editor",
    affiliation: "University of Ibadan",
    country: "Nigeria",
    researchAreas: ["Fiscal Policy", "Natural Resource Economics", "Developing Economies"],
    email: "s.adeyemi@ui.edu.ng",
  },
  {
    id: "e19",
    name: "Prof. Roberto Rossi",
    role: "Associate Editor",
    affiliation: "Bocconi University, Milan",
    country: "Italy",
    researchAreas: ["Real Estate", "Entrepreneurship", "Household Finance"],
    email: "r.rossi@unibocconi.it",
  },
  {
    id: "e20",
    name: "Prof. Evelyn Stewart",
    role: "Associate Editor",
    affiliation: "Stockholm University",
    country: "Sweden",
    researchAreas: ["Universal Basic Income", "Public Economics", "Meta-Analysis"],
    email: "e.stewart@su.se",
  },
];

export const ADVISORY_BOARD = [
  { name: "Prof. Justin Yifu Lin", affiliation: "Peking University, former Chief Economist, World Bank", country: "China" },
  { name: "Prof. Anne Krueger", affiliation: "Johns Hopkins SAIS, former First Deputy Managing Director, IMF", country: "United States" },
  { name: "Prof. Hidehiko Ichimura", affiliation: "University of Tokyo, Project Professor Emeritus", country: "Japan" },
  { name: "Prof. Changyong Rhee", affiliation: "Director, Asia and Pacific Department, IMF", country: "Republic of Korea" },
  { name: "Prof. Takatoshi Ito", affiliation: "Columbia University / Hitotsubashi University", country: "Japan / United States" },
  { name: "Prof. Kaushik Basu", affiliation: "Cornell University, former Chief Economist, World Bank", country: "United States" },
];

export type NewsItem = {
  id: string;
  date: string;
  title: string;
  summary: string;
  category: "Announcement" | "Issue" | "Award" | "Editorial";
};

export const NEWS_ITEMS: NewsItem[] = [
  {
    id: "n01",
    date: "2026-10-08",
    title: "Volume 31, Issue 1 (October 2026) is now published",
    summary:
      "The October 2026 issue contains three research articles from the School of Commerce and Management Studies, Sandip University, Nashik: the financial risk exposure of MSMEs in Nashik District (Laxman Arjun Patil and Amardeep Bajpai), data-driven approaches to self-regulated learning among working professionals (Pranav Prashant Godle and Amit Aggrawal), and the contribution of AI technologies to start-up growth and innovation in Maharashtra (Ritu Bothara and Amit Aggrawal).",
    category: "Issue",
  },
  {
    id: "n2",
    date: "2025-06-30",
    title: "Journal of Economic Research reaffirmed at ABDC rating 'B' for the 2024 review cycle",
    summary:
      "The Australian Business Deans Council (ABDC) has reaffirmed the Journal of Economic Research at the 'B' tier in the 2024 review of the ABDC Journal Quality List. The journal has held this rating since the 2019 list and continues to be classified under Field of Research code 3801.",
    category: "Announcement",
  },
  {
    id: "n3",
    date: "2025-06-12",
    title: "Call for Papers — Special Issue on the Economics of Artificial Intelligence",
    summary:
      "The Journal of Economic Research invites submissions for a special issue on the Economics of Artificial Intelligence, edited by Prof. Min-Jae Choi (Hanyang) and Prof. Caroline Dubois (Paris School of Economics). Submissions of full papers will be accepted between 1 September 2025 and 31 January 2026. The special issue is planned for publication in October 2026.",
    category: "Announcement",
  },
  {
    id: "n7",
    date: "2024-12-18",
    title: "Indexing update: ABDC 'B' (Applied Economics) and KCI",
    summary:
      "The Journal of Economic Research (ISSN 1226-4261, eISSN 2713-6418) is rated 'B' in the ABDC Journal Quality List under Applied Economics (FoR 3801) and is a KCI-listed journal in the Korea Citation Index of the National Research Foundation of Korea.",
    category: "Announcement",
  },
];

// Verified indexing: ABDC Journal Quality List and the Korea Citation Index only.
export const INDEXING_SERVICES = [
  { name: "ABDC Journal Quality List", badge: "B — Applied Economics", since: "2019", coverage: "Australian Business Deans Council · FoR code 3801" },
  { name: "Korea Citation Index (KCI)", badge: "KCI-listed", since: "2003", coverage: "National Research Foundation of Korea · currently publishing" },
];

export const JOURNAL_STATS = {
  acceptanceRate: "18.4%",
  averageTimeToFirstDecision: 38,
  averageTimeToPublication: 124,
  averagePeerReviewers: 2.6,
};

export const JOURNAL_TIMELINE = [
  {
    year: "1996",
    title: "Foundation",
    description:
      "The Journal of Economic Research was founded by the Department of Economics at Hanyang University under the inaugural editorship of Prof. Young-Sam Kang, with the first volume appearing in printed form and distributed to Korean university libraries.",
  },
  {
    year: "2003",
    title: "KCI Listing",
    description:
      "The journal was listed in the Korea Citation Index (KCI), marking its formal recognition as a peer-reviewed outlet of national standing. Editorial procedures were reorganised around a double-blind peer review protocol that remains in place today.",
  },
  {
    year: "2005",
    title: "Quarterly Frequency",
    description:
      "The journal moved from semi-annual to quarterly publication in order to accommodate growing submission volumes from researchers across Asia.",
  },
  {
    year: "2012",
    title: "Digital Transformation and DOI Registration",
    description:
      "In partnership with Crossref, the journal began issuing Digital Object Identifiers (DOIs) for all published articles and migrated to a fully online editorial workflow.",
  },
  {
    year: "2016",
    title: "Open Access",
    description:
      "The journal adopted a fully open-access publishing model under a Creative Commons Attribution-NonCommercial (CC BY-NC) licence. Publication costs were underwritten by Hanyang University.",
  },
  {
    year: "2019",
    title: "First ABDC Listing",
    description:
      "The journal was first included in the Australian Business Deans Council (ABDC) Journal Quality List at the 'B' tier under Applied Economics (FoR 3801), reflecting its established standing as a regional outlet of international relevance.",
  },
  {
    year: "2021",
    title: "Restructured Editorial Board",
    description:
      "The editorial board was restructured to include 18 associate editors from 11 countries, broadening the journal's international reach.",
  },
  {
    year: "2025",
    title: "30th Anniversary Volume",
    description:
      "With the publication of Volume 30, the journal entered its fourth decade.",
  },
  {
    year: "2026",
    title: "Article Processing Charge",
    description:
      "With Volume 31 the journal introduced an article processing charge (APC) of USD 1,250 for each accepted article, charged only after acceptance, to sustain open-access publishing. All articles remain free to read under the CC BY-NC licence.",
  },
];

export const PEER_REVIEW_PROCESS = [
  {
    step: 1,
    title: "Initial Editorial Screening",
    description:
      "All submissions are screened by a member of the editorial team within 7 working days. Submissions that fall outside the journal's aims and scope, or that fail basic technical checks (e.g., incomplete metadata, missing plagiarism declaration), are returned to the authors without review.",
  },
  {
    step: 2,
    title: "Assignment to Associate Editor",
    description:
      "Submissions passing initial screening are assigned to an Associate Editor whose expertise matches the paper's topic. The Associate Editor identifies at least two qualified referees, typically drawing on the journal's panel of more than 250 external reviewers across Asia, Europe, and North America.",
  },
  {
    step: 3,
    title: "Double-Blind Peer Review",
    description:
      "The journal operates a double-blind peer review process. Referees are asked to provide structured reports covering originality, methodological soundness, clarity, and contribution to the literature. The median time to a first decision is 38 days; the 90th percentile is 62 days.",
  },
  {
    step: 4,
    title: "Editorial Decision",
    description:
      "The Associate Editor synthesises referee reports and recommends a decision (Accept, Minor Revision, Major Revision, Reject and Resubmit, or Reject) to the Co-Editor, who issues the formal decision letter. Approximately 18 percent of submissions are ultimately accepted for publication.",
  },
  {
    step: 5,
    title: "Revision and Production",
    description:
      "Authors of accepted or revision papers are typically given 60 to 90 days to revise. Following final acceptance, articles go through a structured copy-editing and typesetting process and are typically published online within four to six weeks.",
  },
];

export const AUTHOR_GUIDELINES = {
  manuscriptTypes: [
    {
      type: "Research Article",
      wordLimit: "8,000–12,000 words (including references and appendices)",
      description:
        "Original empirical or theoretical research articles making a substantive contribution to the field of economics. Articles should clearly articulate the research question, methodology, and contribution relative to existing literature.",
    },
    {
      type: "Review Article",
      wordLimit: "10,000–15,000 words",
      description:
        "Comprehensive survey articles synthesising the state of the art in a clearly defined subfield of economics. Review articles are normally commissioned but unsolicited submissions of exceptional quality will be considered.",
    },
    {
      type: "Short Communication",
      wordLimit: "3,000–5,000 words",
      description:
        "Concise reports of significant new findings or methodological advances that warrant rapid dissemination. Short Communications are reviewed under an expedited timeline.",
    },
    {
      type: "Editorial",
      wordLimit: "1,500–3,000 words",
      description:
        "Editorials are commissioned by the Editor-in-Chief and reflect on contemporary debates, journal policy, or significant developments in the discipline.",
    },
  ],
  formattingRequirements: [
    "Manuscripts must be submitted as a single PDF file with all figures, tables, and appendices embedded.",
    "Use 12-point Times New Roman, double-spaced, on A4 paper with margins of at least 2.5 cm.",
    "Title page should include the full title, all authors with affiliations and ORCID identifiers, corresponding author's email, and word count.",
    "Main manuscript should be anonymised for double-blind review — author names, acknowledgements, and self-citations should be redacted from the version submitted for review.",
    "Abstracts must not exceed 250 words and must be a single paragraph with no citations or displayed equations.",
    "Provide 4 to 6 keywords and at least one JEL classification code.",
    "Tables and figures should be numbered consecutively, captioned, and referenced in the text.",
    "References should follow the American Economic Review style. In-text citations use the author–date format (e.g., Acemoglu and Autor, 2011).",
    "A separate title page (uploaded as a supplementary file) should contain author identification, acknowledgements, and funding information.",
    "Replication data and code should be deposited in a recognised repository (e.g., Harvard Dataverse, ICPSR) and the URL included at submission.",
  ],
  submissionProcess: [
    "Register or log in to the journal's submission portal at jer.hanyang.ac.kr/submit.",
    "Complete the five-step submission workflow: manuscript details, authors, abstract and keywords, files, and review.",
    "Upload the anonymised main manuscript, the title page, and any supplementary files separately.",
    "All co-authors are automatically notified by the system and must confirm their authorship and consent to submission.",
    "Submissions are normally acknowledged within 48 hours. Authors receive an initial editorial decision within 7 working days.",
  ],
  ethics: [
    "The Journal of Economic Research adheres to the Committee on Publication Ethics (COPE) guidelines on all matters of research and publication integrity.",
    "Authors are required to declare any conflicts of interest, financial or otherwise, that could be perceived as influencing the reported research.",
    "Plagiarism, including self-plagiarism, is treated as serious research misconduct. All submissions are screened using iThenticate prior to peer review.",
    "Authors must disclose all sources of funding for the research reported in the manuscript.",
    "Human-subjects research must be approved by an appropriate institutional review board (IRB), and the approval number must be included in the manuscript.",
    "Authorship should be limited to those who have made a significant contribution to the conception, design, execution, or interpretation of the reported study.",
  ],
};

// ===== Issue editorials (src/data/editorials.ts) =====
// Each editorial becomes an Article (or completes the existing one) with an APA reference list
// whose entries link to the cited JER articles.
import { EDITORIALS } from "./editorials";

function apaAuthors(names: string[]) {
  const fmt = (full: string) => {
    const parts = full.trim().split(/\s+/);
    const surname = parts.pop() ?? full;
    const initials = parts.map((p) => p.split("-").map((x) => `${x[0]}.`).join("-")).join(" ");
    return initials ? `${surname}, ${initials}` : surname;
  };
  const list = names.map(fmt);
  if (list.length === 1) return list[0];
  return `${list.slice(0, -1).join(", ")}, & ${list[list.length - 1]}`;
}

function journalReference(a: Article, number: number): ArticleReference {
  return {
    number,
    text: `${apaAuthors(a.authors.map((x) => x.name))} (${a.year}). ${a.title}. ${JOURNAL_INFO.title}, ${a.volume}(${a.issue}), ${a.pages}.`,
    doi: a.doi,
    articleId: a.id,
  };
}

// ===== Full research papers (src/data/papers/*.ts, indexed by src/data/papers/index.ts) =====
// Build order: (1) create the articles of every PaperSpec, attach FulltextSpecs to existing articles and
// add the issue editorials; (2) repaginate each volume; (3) generate the reference lists, so that APA
// references to JER articles carry their final page ranges.
import { AUTHOR_AFFILIATIONS, type PaperSpec, type RefSpec } from "./paper-spec";
import { ALL_FULLTEXTS, ALL_PAPERS } from "./papers";

export const RESEARCH_PAPERS: PaperSpec[] = ALL_PAPERS;

/** Articles that have a full text (complete papers and full texts attached to existing articles). */
export const FULL_TEXT_IDS = new Set<string>([...ALL_PAPERS.filter((p) => p.body).map((p) => p.id), ...ALL_FULLTEXTS.filter((p) => p.body).map((p) => p.id)]);

/** Reference specs of each article whose reference list is generated below. */
const PENDING_REFS = new Map<string, RefSpec[]>();

/** Builds the Article for a PaperSpec (affiliations a, b, c…, structured authors, DOI); references are added later. */
export function paperToArticle(paper: PaperSpec): Article {
  const { refs: _refs, body: _body, authors, editorialNote: _note, ...meta } = paper;
  const affiliationOf = (au: (typeof authors)[number]) => {
    const aff = au.affiliation ?? AUTHOR_AFFILIATIONS[au.name];
    if (!aff) throw new Error(`No affiliation for author ${au.name} (${paper.id})`);
    return aff;
  };
  // One affiliation entry per distinct institution, labelled a, b, c…
  const affiliations: AuthorAffiliation[] = [];
  const structuredAuthors: ArticleAuthor[] = authors.map((au) => {
    const aff = affiliationOf(au);
    let entry = affiliations.find((x) => x.institution === aff.institution && x.department === aff.department);
    if (!entry) {
      entry = { id: String.fromCharCode(97 + affiliations.length), ...aff };
      affiliations.push(entry);
    }
    return { name: au.name, affiliationIds: [entry.id], corresponding: au.corresponding };
  });
  const seq = paper.id.split("-").pop()!;
  return {
    ...meta,
    doi: `${JOURNAL_INFO.doiPrefix}/JER.${paper.year}.${paper.volume}.${paper.issue}.${seq.padStart(3, "0")}`,
    authors: authors.map((au) => {
      const aff = affiliationOf(au);
      return { name: au.name, affiliation: `${aff.institution}, ${aff.city}, ${aff.country}`, corresponding: au.corresponding };
    }),
    structuredAuthors,
    affiliations,
    references: [],
  };
}

for (const paper of RESEARCH_PAPERS) {
  if (ARTICLES.some((a) => a.id === paper.id)) throw new Error(`Duplicate article id ${paper.id}`);
  ARTICLES.push(paperToArticle(paper));
  PENDING_REFS.set(paper.id, paper.refs);
}

for (const ft of ALL_FULLTEXTS) {
  const article = ARTICLES.find((a) => a.id === ft.id);
  if (!article) throw new Error(`Full text for unknown article ${ft.id}`);
  if (ft.acknowledgments) article.acknowledgments = ft.acknowledgments;
  if (ft.funding) article.funding = ft.funding;
  if (ft.dataAvailability) article.dataAvailability = ft.dataAvailability;
  PENDING_REFS.set(ft.id, ft.refs);
}

const EDITOR_AFFILIATION: AuthorAffiliation = {
  id: "a",
  department: "Department of Economics, College of Economics and Finance",
  institution: "Hanyang University",
  city: "Seoul",
  country: "Republic of Korea",
  email: JOURNAL_INFO.contactEmail,
};

for (const ed of EDITORIALS) {
  const editorialFields = {
    structuredAuthors: [{ name: "Jae-Hoon Hwang", affiliationIds: ["a"], corresponding: true }],
    affiliations: [EDITOR_AFFILIATION],
    references: [] as ArticleReference[],
  };
  PENDING_REFS.set(ed.id, ed.cited.map((id) => ({ jer: id })));

  const existing = ARTICLES.find((a) => a.id === ed.id);
  if (existing) {
    Object.assign(existing, editorialFields, { abstract: ed.abstract, keywords: ed.keywords });
    continue;
  }

  const published = new Date(ed.published);
  const daysBefore = (n: number) => new Date(published.getTime() - n * 86_400_000).toISOString().slice(0, 10);
  ARTICLES.push({
    id: ed.id,
    doi: `${JOURNAL_INFO.doiPrefix}/JER.${ed.year}.${ed.volume}.${ed.issue}.000`,
    title: ed.title,
    authors: [{ name: "Jae-Hoon Hwang", affiliation: "Hanyang University, Seoul, Republic of Korea", corresponding: true }],
    abstract: ed.abstract,
    keywords: ed.keywords,
    jelCodes: ["A10"],
    pages: ed.pages,
    volume: ed.volume,
    issue: ed.issue,
    year: ed.year,
    received: daysBefore(30),
    accepted: daysBefore(20),
    published: ed.published,
    publishedOnline: daysBefore(5),
    citations: Math.max(0, 2025 - ed.year),
    downloads: 180 + ed.cited.length * 35,
    pdfSize: "0.31 MB",
    type: "Editorial",
    ...editorialFields,
  });
}

// Continuous pagination within each volume: issues in order, articles in their table-of-contents order
// (existing first page, then id), each keeping its length. Roman-numbered front matter is left as is.
export function repaginate() {
  const span = (pages: string) => {
    const [from, to] = pages.split(/[–-]/).map((x) => parseInt(x, 10));
    return Number.isFinite(from) && Number.isFinite(to) && to >= from ? to - from + 1 : 28;
  };
  const volumes = Array.from(new Set(ARTICLES.map((a) => a.volume))).sort((x, y) => x - y);
  for (const v of volumes) {
    const inVolume = ARTICLES.filter((a) => a.volume === v && Number.isFinite(parseInt(a.pages, 10)));
    inVolume.sort((x, y) => x.issue - y.issue || parseInt(x.pages, 10) - parseInt(y.pages, 10) || x.id.localeCompare(y.id));
    let next = 1;
    for (const a of inVolume) {
      // Full papers (12–15 PDF pages) occupy at least 24 printed journal pages; abstract-only papers keep their length
      const n = FULL_TEXT_IDS.has(a.id) ? Math.max(24, span(a.pages)) : span(a.pages);
      a.pages = `${next}–${next + n - 1}`;
      next += n;
    }
  }
}
repaginate();

// Reference lists: numbered in citation order, listed alphabetically as in APA
export function buildReferences(refs: RefSpec[]): ArticleReference[] {
  return refs
    .map((r, i): ArticleReference => {
      if (typeof r === "string") return { number: i + 1, text: r };
      const cited = ARTICLES.find((a) => a.id === r.jer);
      // A cited 2026 paper may have been removed in Sanity: keep the numbering, mark the reference as withdrawn
      if (!cited) return { number: i + 1, text: `Journal of Economic Research article ${r.jer} (withdrawn).` };
      return journalReference(cited, i + 1);
    })
    .sort((x, y) => x.text.localeCompare(y.text));
}
for (const [id, refs] of PENDING_REFS) ARTICLES.find((a) => a.id === id)!.references = buildReferences(refs);

// The current issue is the most recently published issue (by its articles' issue date), so an issue published or
// re-dated in Sanity goes live without a code change.
export function refreshCurrentIssue() {
  const latest = new Map<string, { volume: number; issue: number; year: number; published: string }>();
  for (const a of ARTICLES) {
    const key = `${a.volume}-${a.issue}`;
    const cur = latest.get(key);
    if (!cur || a.published > cur.published) latest.set(key, { volume: a.volume, issue: a.issue, year: a.year, published: a.published });
  }
  const best = [...latest.values()].sort((x, y) => y.published.localeCompare(x.published) || y.volume - x.volume || y.issue - x.issue)[0];
  if (!best) return;
  Object.assign(CURRENT_ISSUE, {
    volume: best.volume,
    issue: best.issue,
    year: best.year,
    published: best.published,
    label: new Date(best.published).toLocaleDateString("en-GB", { month: "long", year: "numeric", timeZone: "UTC" }),
  });
}
refreshCurrentIssue();

/** All issues, newest volume/issue first. Computed on demand so issues added from Sanity are included. */
// Publication pattern used to list every volume and issue in the archive, including issues whose contents are not
// online yet: Volume 1 appeared in 1996; the journal was semi-annual until 2004 and quarterly from 2005
// (January, April, July, October). Issues of the current volume are listed only once they have articles.
export const ARCHIVE_PATTERN = {
  firstYear: 1996,
  quarterlyFrom: 2005,
  quarterlyMonths: ["January", "April", "July", "October"],
};

export type ArchiveIssue = { volume: number; issue: number; year: number; label: string; articles: Article[] };

/** Every volume and issue from Volume 1 to the current volume, newest first, with the articles online for each. */
export function archiveIssues(): ArchiveIssue[] {
  const byKey = new Map<string, Article[]>();
  for (const a of ARTICLES) byKey.set(`${a.volume}-${a.issue}`, [...(byKey.get(`${a.volume}-${a.issue}`) ?? []), a]);
  const out: ArchiveIssue[] = [];
  const { firstYear, quarterlyFrom, quarterlyMonths } = ARCHIVE_PATTERN;
  for (let volume = 1; volume < CURRENT_ISSUE.volume; volume++) {
    const year = firstYear + volume - 1;
    const count = year < quarterlyFrom ? 2 : 4;
    for (let issue = 1; issue <= count; issue++) {
      out.push({ volume, issue, year, label: year < quarterlyFrom ? String(year) : `${quarterlyMonths[issue - 1]} ${year}`, articles: byKey.get(`${volume}-${issue}`) ?? [] });
    }
  }
  for (const [volume, issue] of listIssues().filter(([v]) => v >= CURRENT_ISSUE.volume)) {
    const articles = byKey.get(`${volume}-${issue}`) ?? [];
    const first = articles.find((a) => a.type !== "Editorial") ?? articles[0];
    const label = first ? new Date(first.published).toLocaleDateString("en-GB", { month: "long", year: "numeric" }) : String(CURRENT_ISSUE.year);
    out.push({ volume, issue, year: first?.year ?? CURRENT_ISSUE.year, label, articles });
  }
  return out.sort((a, b) => b.volume - a.volume || b.issue - a.issue);
}

export function listIssues(): [number, number][] {
  return Array.from(new Set(ARTICLES.map((a) => `${a.volume}-${a.issue}`)))
    .map((k) => k.split("-").map(Number) as [number, number])
    .sort((a, b) => b[0] - a[0] || b[1] - a[1]);
}

/** Counts shown on the home and About pages, computed from the articles on the site (after the live Sanity merge). */
export function siteStats() {
  const research = ARTICLES.filter((a) => a.type !== "Editorial");
  return { articles: research.length, issues: listIssues().length };
}

/** First page number of an article; roman-numbered front matter (editorials) sorts first as 0. */
/** True for illustrative sample content; only articles explicitly marked `sample: false` are genuine publications. */
export const isSampleArticle = (a: Pick<Article, "sample">) => a.sample !== false;

export function pageStart(a: Pick<Article, "pages">) {
  const n = parseInt(a.pages, 10);
  return Number.isFinite(n) ? n : 0;
}
