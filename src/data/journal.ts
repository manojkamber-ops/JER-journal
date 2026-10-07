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

export const ARTICLES: Article[] = [
  {
    id: "2025-v30-i3-01",
    doi: "10.17256/JER.2025.30.3.001",
    title:
      "Monetary Policy Transmission and Household Consumption Heterogeneity: Evidence from Emerging Asian Economies",
    authors: [
      { name: "Sungho Park", affiliation: "Hanyang University, Seoul, Republic of Korea", corresponding: true },
      { name: "Mei-Ling Chen", affiliation: "National Taiwan University, Taipei, Taiwan" },
      { name: "Rajesh Kumar", affiliation: "Indian Statistical Institute, New Delhi, India" },
    ],
    abstract:
      "This paper investigates the heterogeneous effects of monetary policy shocks on household consumption across income and liquidity cohorts in seven emerging Asian economies between 2005Q1 and 2023Q4. Using a panel local projections framework with high-frequency identification of monetary policy surprises, we find that liquidity-constrained households reduce non-durable consumption by 2.4 times more than unconstrained households following a 100-basis-point policy tightening. Cross-country heterogeneity is substantial: the elasticity of consumption to policy rate changes is largest in Indonesia (-0.41) and smallest in Singapore (-0.18). We show that financial development, mortgage market structure, and the share of variable-rate debt jointly explain 62 percent of the cross-country variation in transmission strength. These findings refine the conventional view that monetary policy transmission is uniformly weak in emerging markets and have direct implications for the design of macroprudential complements to monetary policy in the region.",
    keywords: [
      "Monetary policy transmission",
      "Household consumption",
      "Heterogeneity",
      "Emerging markets",
      "Local projections",
      "Asia",
    ],
    jelCodes: ["E21", "E52", "E58", "D14", "O53"],
    pages: "241–270",
    volume: 30,
    issue: 3,
    year: 2025,
    received: "2024-09-12",
    accepted: "2025-04-21",
    published: "2025-07-15",
    citations: 14,
    downloads: 1829,
    pdfSize: "1.84 MB",
    type: "Research Article",
    featured: true,
  },
  {
    id: "2025-v30-i3-04",
    doi: "10.17256/JER.2025.30.3.004",
    title:
      "Wage Rigidity and Firm Adjustment during Recessions: Micro-evidence from Linked Employer–Employee Data",
    authors: [
      { name: "Alexandra Romanova", affiliation: "Higher School of Economics, Moscow, Russia" },
      { name: "Jin-Young Choi", affiliation: "Hanyang University, Seoul, Republic of Korea", corresponding: true },
    ],
    abstract:
      "Using administrative linked employer–employee data for Korean manufacturing firms (2010–2022), this paper characterises the role of downward nominal wage rigidity in shaping employment adjustment during recessions. We exploit firm-specific shocks to identify the effect of nominal wage freezes on labour reallocation. Approximately 38 percent of firm-year observations exhibit at least one nominally frozen wage cell, with the incidence rising sharply in 2020. Firms with a higher share of frozen cells exhibit 5.6 percentage points greater separation rates among new hires but 3.2 percentage points lower separations among tenured workers, consistent with a last-in-first-out adjustment rule. These findings highlight how nominal rigidities redistribute the burden of adjustment across worker groups.",
    keywords: [
      "Wage rigidity",
      "Linked employer–employee data",
      "Labour reallocation",
      "Recession",
      "Korea",
    ],
    jelCodes: ["E24", "J31", "J63", "L60"],
    pages: "329–356",
    volume: 30,
    issue: 3,
    year: 2025,
    received: "2024-12-02",
    accepted: "2025-06-04",
    published: "2025-07-15",
    citations: 3,
    downloads: 742,
    pdfSize: "1.38 MB",
    type: "Research Article",
  },
  {
    id: "2025-v30-i3-07",
    doi: "10.17256/JER.2025.30.3.007",
    title:
      "Editorial: Three Decades of the Journal of Economic Research — Reflections and Forward Agenda",
    authors: [
      { name: "Jae-Hoon Hwang", affiliation: "Hanyang University, Seoul, Republic of Korea", corresponding: true },
    ],
    abstract:
      "On the 30th anniversary of the Journal of Economic Research, this editorial reflects on the journal's evolution since its founding in 1996 and outlines priorities for the next decade. We document three thematic clusters that have come to define the journal's identity: applied microeometrics in Asian economies, monetary and financial economics of emerging markets, and the evaluation of place-based economic policy. We then identify four emerging research frontiers — climate-finance integration, machine-learning-assisted causal inference, the economics of artificial intelligence, and behavioural dimensions of digital platforms — that we expect to shape our editorial agenda through 2030.",
    keywords: ["Editorial", "Journal history", "Research agenda", "Anniversary"],
    jelCodes: ["A10", "B00"],
    pages: "411–416",
    volume: 30,
    issue: 3,
    year: 2025,
    received: "2025-06-10",
    accepted: "2025-06-30",
    published: "2025-07-15",
    citations: 0,
    downloads: 311,
    pdfSize: "0.58 MB",
    type: "Editorial",
  },
  {
    id: "2025-v30-i2-01",
    doi: "10.17256/JER.2025.30.2.001",
    title:
      "Housing Wealth Effects on Entrepreneurship: Evidence from Korean Housing Price Shocks",
    authors: [
      { name: "Eun-Jung Kim", affiliation: "Hanyang University, Seoul, Republic of Korea", corresponding: true },
      { name: "Roberto Rossi", affiliation: "Bocconi University, Milan, Italy" },
    ],
    abstract:
      "We exploit regional variation in housing price dynamics driven by exogenous supply constraints to estimate the causal effect of housing wealth on entrepreneurship in Korea (2006–2022). A 10 percent increase in housing wealth raises new firm registration by 4.7 percent, with stronger effects among collateral-constrained and younger households. The entrepreneurial response is concentrated in non-tradable services and is muted in regions with limited access to bank credit. Placebo tests using placebo treatment assignments and an alternative wealth measure confirm the robustness of our findings.",
    keywords: ["Housing wealth", "Entrepreneurship", "Collateral channel", "Korea"],
    jelCodes: ["L26", "R31", "G51"],
    pages: "121–148",
    volume: 30,
    issue: 2,
    year: 2025,
    received: "2024-06-15",
    accepted: "2024-12-20",
    published: "2025-04-10",
    citations: 11,
    downloads: 1645,
    pdfSize: "1.61 MB",
    type: "Research Article",
  },
  {
    id: "2025-v30-i1-01",
    doi: "10.17256/JER.2025.30.1.001",
    title:
      "Digital Platform Competition and Consumer Welfare: A Structural Estimation of the Korean Ride-Hailing Market",
    authors: [
      { name: "Min-Jae Choi", affiliation: "Hanyang University, Seoul, Republic of Korea", corresponding: true },
      { name: "Caroline Dubois", affiliation: "Paris School of Economics, Paris, France" },
    ],
    abstract:
      "We structurally estimate a discrete-choice model of demand and oligopolistic supply in the Korean ride-hailing market using transaction-level data from 2019 to 2023. Counterfactual simulations of a merger between the second and third largest platforms indicate short-run consumer welfare losses of KRW 162 billion annually, partially offset by network economies. We further simulate the welfare effects of mandatory data portability and find net gains of KRW 47 billion. The findings contribute to ongoing debates on platform merger review and the role of data-sharing mandates in digital markets.",
    keywords: ["Platform competition", "Discrete choice", "Mergers", "Data portability", "Ride-hailing"],
    jelCodes: ["L13", "L40", "L86", "L91"],
    pages: "1–32",
    volume: 30,
    issue: 1,
    year: 2025,
    received: "2024-04-12",
    accepted: "2024-09-30",
    published: "2025-01-20",
    citations: 18,
    downloads: 2387,
    pdfSize: "2.11 MB",
    type: "Research Article",
  },
  {
    id: "2024-v29-i4-01",
    doi: "10.17256/JER.2024.29.4.001",
    title:
      "Exchange Rate Pass-Through to Consumer Prices in Inflation-Targeting Asian Economies",
    authors: [
      { name: "Sang-Wook Park", affiliation: "Bank of Korea, Seoul, Republic of Korea" },
      { name: "Hyun-Jin Kim", affiliation: "Hanyang University, Seoul, Republic of Korea", corresponding: true },
    ],
    abstract:
      "We estimate exchange rate pass-through (ERPT) to consumer prices in five inflation-targeting Asian economies using a time-varying parameter VAR. ERPT has declined materially since the global financial crisis, from an average of 0.32 in the 2000s to 0.12 in the post-2020 period. The decline is most pronounced for non-food and non-energy components, consistent with greater monetary policy credibility and import composition shifts. We show that ERPT strengthens asymmetrically during depreciation episodes, particularly for energy-intensive goods.",
    keywords: ["Exchange rate pass-through", "Inflation targeting", "Time-varying VAR", "Asia"],
    jelCodes: ["E31", "E52", "F31", "E58"],
    pages: "481–510",
    volume: 29,
    issue: 4,
    year: 2024,
    received: "2023-10-15",
    accepted: "2024-04-22",
    published: "2024-10-15",
    citations: 27,
    downloads: 3120,
    pdfSize: "1.65 MB",
    type: "Research Article",
  },
  {
    id: "2024-v29-i4-02",
    doi: "10.17256/JER.2024.29.4.002",
    title:
      "Aging Populations and Long-Term Care Insurance: A Comparative Study of Korea and Japan",
    authors: [
      { name: "Keiko Sato", affiliation: "Hitotsubashi University, Tokyo, Japan", corresponding: true },
      { name: "Da-Eun Han", affiliation: "Hanyang University, Seoul, Republic of Korea" },
    ],
    abstract:
      "We provide a comparative analysis of long-term care insurance (LTCI) systems in Korea and Japan using harmonised micro-data and a structural model of household care decisions. We find that expanding LTCI coverage increases formal care utilisation by 38 percent while reducing informal care by 21 percent, with smaller than expected effects on female labour supply. Counterfactual simulations suggest that Korea's LTCI system, currently at roughly half of Japan's coverage intensity, would need to expand by 60 percent by 2035 to meet projected demand under UN demographic scenarios.",
    keywords: ["Long-term care insurance", "Aging", "Korea", "Japan", "Informal care"],
    jelCodes: ["H51", "I13", "J14", "J22"],
    pages: "511–538",
    volume: 29,
    issue: 4,
    year: 2024,
    received: "2023-11-30",
    accepted: "2024-05-18",
    published: "2024-10-15",
    citations: 19,
    downloads: 2104,
    pdfSize: "1.74 MB",
    type: "Research Article",
  },
  {
    id: "2024-v29-i3-01",
    doi: "10.17256/JER.2024.29.3.001",
    title:
      "Energy Transition and Labour Market Adjustment: Evidence from Coal Regions",
    authors: [
      { name: "Markus Bauer", affiliation: "University of Mannheim, Mannheim, Germany", corresponding: true },
      { name: "Sungho Park", affiliation: "Hanyang University, Seoul, Republic of Korea" },
    ],
    abstract:
      "This paper estimates the labour-market effects of coal-phase-out policies in three traditionally coal-intensive regions (Kangwon, North Gyeongsang in Korea and the Ruhr region in Germany). Using synthetic control methods, we document persistent employment declines of 7 to 11 percent in coal-dependent local labour markets ten years after policy implementation, with limited evidence of compensating employment growth in renewable energy sectors. Active labour market policies targeted at displaced workers appear to shorten non-employment spells but do not eliminate wage losses.",
    keywords: ["Energy transition", "Coal phase-out", "Labour markets", "Synthetic control"],
    jelCodes: ["J23", "J31", "Q48", "R23"],
    pages: "321–348",
    volume: 29,
    issue: 3,
    year: 2024,
    received: "2023-08-12",
    accepted: "2024-03-15",
    published: "2024-07-15",
    citations: 15,
    downloads: 1890,
    pdfSize: "1.58 MB",
    type: "Research Article",
  },
  {
    id: "2023-v28-i4-01",
    doi: "10.17256/JER.2023.28.4.001",
    title:
      "Universal Basic Income Pilot Programmes: Lessons from Local Experiments",
    authors: [
      { name: "Jae-Hoon Hwang", affiliation: "Hanyang University, Seoul, Republic of Korea", corresponding: true },
      { name: "Evelyn Stewart", affiliation: "Stockholm University, Stockholm, Sweden" },
    ],
    abstract:
      "We synthesise evidence from 14 universal basic income (UBI) pilots implemented between 2017 and 2022, including the Gyeonggi Youth Dividend and Stockton Economic Empowerment Demonstration. Meta-analytic estimates indicate modest but statistically significant effects on labour supply (a 1.3 percentage point reduction in employment) alongside larger effects on subjective wellbeing (0.18 standard deviations) and food security. We discuss the implications for scaling UBI-style interventions, including fiscal sustainability considerations under realistic financing scenarios.",
    keywords: ["Universal basic income", "Pilot programmes", "Meta-analysis", "Gyeonggi"],
    jelCodes: ["H24", "I38", "J22"],
    pages: "421–452",
    volume: 28,
    issue: 4,
    year: 2023,
    received: "2022-09-18",
    accepted: "2023-04-10",
    published: "2023-10-15",
    citations: 31,
    downloads: 4218,
    pdfSize: "1.92 MB",
    type: "Review Article",
  },
  // ===== Vol. 30, Issue 3 — additional papers =====
  // ===== Vol. 30, Issue 2 — additional papers =====
  {
    id: "2025-v30-i2-04",
    doi: "10.17256/JER.2025.30.2.004",
    title:
      "Returns to Schooling and the Role of Cognitive and Non-Cognitive Skills: Evidence from Korean Longitudinal Data",
    authors: [
      { name: "Sang-Yoon Han", affiliation: "Hanyang University, Seoul, Republic of Korea", corresponding: true },
      { name: "Ji-Yeon Park", affiliation: "Korea Labor Institute, Seoul, Republic of Korea" },
    ],
    abstract:
      "Using the Korean Labor and Income Panel Study (KLIPS) 1998–2022 waves, we estimate the causal return to schooling while accounting for both cognitive and non-cognitive skills. Our instrumental-variable strategy, exploiting variation in compulsory schooling reforms, yields a return of 6.8 percent per additional year of schooling. Decomposing the residual wage variance, cognitive skills explain 22 percent and non-cognitive skills 18 percent of the variance not attributable to schooling. The non-cognitive component is particularly important for women and for workers in managerial occupations, suggesting that early interventions targeting non-cognitive development may have sizeable long-run labour-market payoffs.",
    keywords: ["Returns to schooling", "Non-cognitive skills", "Korea", "Instrumental variables", "KLIPS"],
    jelCodes: ["I26", "J24", "J31"],
    pages: "201–226",
    volume: 30,
    issue: 2,
    year: 2025,
    received: "2024-08-19",
    accepted: "2025-01-30",
    published: "2025-04-10",
    citations: 4,
    downloads: 815,
    pdfSize: "1.36 MB",
    type: "Research Article",
  },
  // ===== Vol. 30, Issue 1 — additional papers =====
  {
    id: "2025-v30-i1-04",
    doi: "10.17256/JER.2025.30.1.004",
    title:
      "The Effects of Remote Work on Productivity and Wage Inequality: Evidence from Korean Firms during and after the Pandemic",
    authors: [
      { name: "Jin-Young Choi", affiliation: "Hanyang University, Seoul, Republic of Korea", corresponding: true },
      { name: "Alexandra Romanova", affiliation: "Higher School of Economics, Moscow, Russia" },
    ],
    abstract:
      "Using linked employer–employee data for 1,250 Korean firms over 2018–2023, we estimate the medium-run effects of remote-work adoption on firm productivity and within-firm wage inequality. Firms that adopted remote work experienced a 4.2 percent increase in labour productivity by 2022, but also a 6.8 percent increase in the 90/10 wage gap within the firm. The inequality effect is driven primarily by relative wage gains for high-skilled workers and is attenuated in firms with strong internal labour markets. Our findings suggest that the productivity gains from remote work come with distributional consequences that warrant policy attention.",
    keywords: ["Remote work", "Productivity", "Wage inequality", "Korea", "Pandemic"],
    jelCodes: ["J24", "J31", "O33", "M52"],
    pages: "89–116",
    volume: 30,
    issue: 1,
    year: 2025,
    received: "2024-04-30",
    accepted: "2024-09-12",
    published: "2025-01-20",
    citations: 9,
    downloads: 1342,
    pdfSize: "1.62 MB",
    type: "Research Article",
  },
  // ===== Vol. 29, Issue 4 — additional papers =====
  {
    id: "2024-v29-i4-04",
    doi: "10.17256/JER.2024.29.4.004",
    title:
      "The Effects of Migration on Local Labour Markets: Evidence from Intra-Korean Mobility",
    authors: [
      { name: "Da-Hye Song", affiliation: "Seoul National University, Seoul, Republic of Korea", corresponding: true },
      { name: "Sang-Yoon Han", affiliation: "Hanyang University, Seoul, Republic of Korea" },
    ],
    abstract:
      "We estimate the labour-market effects of internal migration within Korea using a shift-share research design that exploits historical settlement patterns as instruments for current migrant flows. A 1 percentage point increase in the migrant share of a region's working-age population reduces wages of competing local workers by 0.9 percent in the short run but raises wages by 1.3 percent over a five-year horizon, consistent with complementarity effects dominating in the medium term. Effects are heterogeneous across skill groups, with the largest gains accruing to workers in complementary occupations and the smallest gains to direct substitutes.",
    keywords: ["Internal migration", "Labour markets", "Korea", "Shift-share", "Complementarity"],
    jelCodes: ["J61", "J31", "R23"],
    pages: "567–594",
    volume: 29,
    issue: 4,
    year: 2024,
    received: "2024-01-18",
    accepted: "2024-06-12",
    published: "2024-10-15",
    citations: 6,
    downloads: 1058,
    pdfSize: "1.51 MB",
    type: "Research Article",
  },
  // ===== Vol. 29, Issue 3 — additional papers =====
  {
    id: "2024-v29-i3-02",
    doi: "10.17256/JER.2024.29.3.002",
    title:
      "Education and Intergenerational Mobility: A Cross-Country Comparison of Korea, Japan, and the United States",
    authors: [
      { name: "Keiko Sato", affiliation: "Hitotsubashi University, Tokyo, Japan", corresponding: true },
      { name: "Hong-Mei Wang", affiliation: "Peking University, Beijing, China" },
      { name: "Sang-Yoon Han", affiliation: "Hanyang University, Seoul, Republic of Korea" },
    ],
    abstract:
      "We compare intergenerational educational mobility in Korea, Japan, and the United States using harmonised parent–child linked datasets. Korea exhibits the highest intergenerational elasticity of schooling (0.42), followed by the United States (0.36) and Japan (0.28). Decomposing the differences, we find that the educational expansion in Korea between 1970 and 2000 reduced but did not eliminate the influence of parental background on schooling attainment. The persistence of a parental-education gradient in tertiary access suggests that recent reforms targeting early-childhood education may have limited effects on mobility unless complemented by interventions at the tertiary-access margin.",
    keywords: ["Intergenerational mobility", "Education", "Korea", "Japan", "United States"],
    jelCodes: ["I24", "J62", "I26"],
    pages: "349–378",
    volume: 29,
    issue: 3,
    year: 2024,
    received: "2023-09-04",
    accepted: "2024-03-28",
    published: "2024-07-15",
    citations: 14,
    downloads: 1722,
    pdfSize: "1.58 MB",
    type: "Research Article",
  },
  {
    id: "2024-v29-i3-03",
    doi: "10.17256/JER.2024.29.3.003",
    title:
      "Corporate Cash Holdings and Uncertainty: Evidence from Listed Asian Firms",
    authors: [
      { name: "Tae-Woo Lee", affiliation: "Hanyang University, Seoul, Republic of Korea", corresponding: true },
      { name: "Caroline Dubois", affiliation: "Paris School of Economics, Paris, France" },
    ],
    abstract:
      "We document the evolution of corporate cash holdings for 6,200 listed firms across nine Asian economies over 2005–2023. Median cash-to-assets ratios rose by 4.1 percentage points over the period, with the largest increases observed during the global financial crisis and the COVID-19 pandemic. We find that firms in countries with deeper financial markets and stronger creditor rights hold less cash, consistent with a precautionary motive. Identification exploits within-firm variation in policy-driven measures of financial access. Our results imply that policies deepening domestic credit markets can have non-trivial effects on corporate investment by reducing precautionary cash holdings.",
    keywords: ["Corporate cash holdings", "Uncertainty", "Asia", "Precautionary motive", "Financial development"],
    jelCodes: ["G32", "G31", "D22"],
    pages: "379–406",
    volume: 29,
    issue: 3,
    year: 2024,
    received: "2023-09-22",
    accepted: "2024-04-15",
    published: "2024-07-15",
    citations: 7,
    downloads: 968,
    pdfSize: "1.39 MB",
    type: "Research Article",
  },
  {
    id: "2024-v29-i3-04",
    doi: "10.17256/JER.2024.29.3.004",
    title:
      "Digital Financial Inclusion and Household Resilience: Evidence from Rural India",
    authors: [
      { name: "Lakshmi Iyer", affiliation: "University of Notre Dame, Indiana, USA", corresponding: true },
      { name: "Samuel Adeyemi", affiliation: "University of Ibadan, Ibadan, Nigeria" },
    ],
    abstract:
      "Using panel household data from rural India over 2014–2022, we estimate the effect of digital financial inclusion on household resilience to income shocks. Identification exploits the staggered rollout of the Pradhan Mantri Jan Dhan Yojana financial-inclusion programme combined with mobile-banking adoption. Households in districts with earlier programme rollout exhibit 18 percent smaller consumption declines following negative income shocks and 22 percent lower reliance on high-interest informal credit. Effects are largest for female-headed households and for households without prior formal-bank access, suggesting that digital inclusion can play a meaningful role in inclusive growth strategies.",
    keywords: ["Digital financial inclusion", "Household resilience", "Rural India", "PMJDY", "Consumption smoothing"],
    jelCodes: ["G50", "O16", "I32", "O53"],
    pages: "407–432",
    volume: 29,
    issue: 3,
    year: 2024,
    received: "2023-10-08",
    accepted: "2024-05-02",
    published: "2024-07-15",
    citations: 12,
    downloads: 1542,
    pdfSize: "1.48 MB",
    type: "Research Article",
  },
  // ===== Vol. 29, Issue 2 — new complete issue =====
  {
    id: "2024-v29-i2-01",
    doi: "10.17256/JER.2024.29.2.001",
    title:
      "Inflation Expectations and Household Spending Decisions: Evidence from a Randomised Information Experiment",
    authors: [
      { name: "Sungho Park", affiliation: "Hanyang University, Seoul, Republic of Korea", corresponding: true },
      { name: "Ji-Yeon Park", affiliation: "Korea Labor Institute, Seoul, Republic of Korea" },
    ],
    abstract:
      "We conduct a randomised information experiment embedded in a survey of 4,200 Korean households to estimate the causal effect of inflation expectations on spending decisions. Treated households receive information treatments that exogenously shift their short-run inflation expectations. We find that a 1 percentage point increase in inflation expectations raises intended durable-goods spending by 4.6 percentage points, consistent with an intertemporal-substitution channel. The effect is concentrated among liquidity-unconstrained households, with no detectable spending response among constrained households. Our findings support the use of central-bank communications as a policy lever, but suggest heterogeneous transmission across household groups.",
    keywords: ["Inflation expectations", "Household spending", "Randomised experiment", "Korea", "Monetary policy communication"],
    jelCodes: ["E31", "E21", "D84", "E52"],
    pages: "161–190",
    volume: 29,
    issue: 2,
    year: 2024,
    received: "2023-06-12",
    accepted: "2023-12-08",
    published: "2024-04-15",
    citations: 18,
    downloads: 2168,
    pdfSize: "1.61 MB",
    type: "Research Article",
  },
  {
    id: "2024-v29-i2-02",
    doi: "10.17256/JER.2024.29.2.002",
    title:
      "Trade Liberalisation and Within-Industry Reallocation: Evidence from Korea's Free Trade Agreements",
    authors: [
      { name: "Yuki Tanaka", affiliation: "Keio University, Tokyo, Japan" },
      { name: "Min-Su Park", affiliation: "Hanyang University, Seoul, Republic of Korea", corresponding: true },
    ],
    abstract:
      "We estimate the effect of tariff reductions under Korea's free trade agreements on within-industry reallocation and aggregate productivity over 2005–2022. Using firm-level customs micro-data, we find that tariff reductions on imported inputs raise firm productivity by 2.1 percent on average, with substantial heterogeneity — firms in the upper quartile of initial productivity experience gains three times larger than those in the lower quartile. Aggregate productivity gains from reallocation account for approximately 40 percent of the total effect, with the remainder driven by within-firm productivity improvements. Effects are muted in industries with limited import competition.",
    keywords: ["Trade liberalisation", "Within-industry reallocation", "Free trade agreements", "Korea", "Productivity"],
    jelCodes: ["F13", "F14", "L25", "O47"],
    pages: "191–220",
    volume: 29,
    issue: 2,
    year: 2024,
    received: "2023-06-29",
    accepted: "2023-12-22",
    published: "2024-04-15",
    citations: 9,
    downloads: 1268,
    pdfSize: "1.55 MB",
    type: "Research Article",
  },
  {
    id: "2024-v29-i2-03",
    doi: "10.17256/JER.2024.29.2.003",
    title:
      "Population Aging and Public Pension Sustainability: A Dynamic General-Equilibrium Analysis for Korea",
    authors: [
      { name: "Jae-Hoon Hwang", affiliation: "Hanyang University, Seoul, Republic of Korea", corresponding: true },
      { name: "Keiko Sato", affiliation: "Hitotsubashi University, Tokyo, Japan" },
    ],
    abstract:
      "We develop a dynamic general-equilibrium overlapping-generations model calibrated to the Korean economy to evaluate the fiscal sustainability of the National Pension Scheme under alternative demographic and policy scenarios. Under the United Nations medium-fertility projection, the pension fund is projected to be exhausted by 2055. Parametric reforms — including a 1.5 percentage point increase in the contribution rate, a one-year increase in the normal retirement age, and a 10 percent reduction in the replacement rate — would extend fund solvency by approximately 18 years but generate sizeable welfare losses for current middle-aged cohorts. We discuss the trade-offs across reform options.",
    keywords: ["Pension sustainability", "Aging", "Dynamic general equilibrium", "Korea", "OLG model"],
    jelCodes: ["H55", "J11", "J26", "E62"],
    pages: "221–250",
    volume: 29,
    issue: 2,
    year: 2024,
    received: "2023-07-15",
    accepted: "2024-01-18",
    published: "2024-04-15",
    citations: 16,
    downloads: 2042,
    pdfSize: "1.74 MB",
    type: "Research Article",
  },
  {
    id: "2024-v29-i2-04",
    doi: "10.17256/JER.2024.29.2.004",
    title:
      "Revisiting the Easterlin Paradox with Long-Run Korean Data",
    authors: [
      { name: "Evelyn Stewart", affiliation: "Stockholm University, Stockholm, Sweden", corresponding: true },
      { name: "Sang-Yoon Han", affiliation: "Hanyang University, Seoul, Republic of Korea" },
    ],
    abstract:
      "We revisit the Easterlin paradox using four decades of Korean happiness and income data (1980–2022). At the within-country, year-by-year level we find a positive and statistically significant association between real GDP per capita and average life satisfaction, contradicting the strong form of the Easterlin paradox. However, the cross-sectional relationship within cohorts is essentially flat, suggesting that relative income considerations dominate within-period comparisons. We discuss the implications for the use of subjective wellbeing as a policy target in rapidly growing economies.",
    keywords: ["Easterlin paradox", "Subjective wellbeing", "Korea", "Long-run", "Happiness"],
    jelCodes: ["I31", "O47", "D63"],
    pages: "251–262",
    volume: 29,
    issue: 2,
    year: 2024,
    received: "2023-08-18",
    accepted: "2024-01-30",
    published: "2024-04-15",
    citations: 5,
    downloads: 612,
    pdfSize: "0.78 MB",
    type: "Research Article",
  },
  // ===== Vol. 29, Issue 1 — new complete issue =====
  {
    id: "2024-v29-i1-01",
    doi: "10.17256/JER.2024.29.1.001",
    title:
      "The Effects of Minimum Wage Increases on Employment and Earnings: Evidence from Korea's 2018 Reform",
    authors: [
      { name: "Jin-Young Choi", affiliation: "Hanyang University, Seoul, Republic of Korea", corresponding: true },
      { name: "Da-Hye Song", affiliation: "Seoul National University, Seoul, Republic of Korea" },
    ],
    abstract:
      "Korea's 2018 minimum wage reform raised the nominal minimum wage by 16.4 percent — the largest single-year increase in two decades. Using administrative employment-insurance data and a difference-in-differences design comparing workers near and far from the new minimum, we estimate the reform's effects on employment, hours, and earnings. We find a 2.1 percentage point reduction in employment among directly affected workers but a 9.8 percent increase in monthly earnings among those who remained employed, yielding a net earnings gain. Employment effects are larger for small firms and for workers in less-skilled occupations. The results are consistent with a binding but not extreme minimum-wage response.",
    keywords: ["Minimum wage", "Employment", "Earnings", "Korea", "Difference-in-differences"],
    jelCodes: ["J38", "J31", "J23"],
    pages: "1–32",
    volume: 29,
    issue: 1,
    year: 2024,
    received: "2023-03-14",
    accepted: "2023-09-22",
    published: "2024-01-15",
    citations: 24,
    downloads: 2845,
    pdfSize: "1.82 MB",
    type: "Research Article",
  },
  {
    id: "2024-v29-i1-02",
    doi: "10.17256/JER.2024.29.1.002",
    title:
      "Bank Lending Channel of Monetary Policy in Asia: The Role of Bank Capital and Liquidity",
    authors: [
      { name: "Hyun-Jin Kim", affiliation: "Hanyang University, Seoul, Republic of Korea", corresponding: true },
      { name: "Anna Petrova", affiliation: "Charles University, Prague, Czech Republic" },
    ],
    abstract:
      "We estimate the bank lending channel of monetary policy in five Asian economies using bank-level data over 2008–2023. Identification exploits within-country variation in bank capital ratios and liquidity positions interacted with policy-rate changes. A 100-basis-point policy tightening reduces loan growth at banks in the bottom quartile of capital ratios by 3.4 percentage points more than at banks in the top quartile. The effect is asymmetric — policy easings do not produce symmetric lending responses — and is amplified during periods of financial stress. Our results highlight the importance of bank balance-sheet strength for the transmission of monetary policy.",
    keywords: ["Bank lending channel", "Monetary policy", "Bank capital", "Asia", "Asymmetry"],
    jelCodes: ["E52", "G21", "G32", "E58"],
    pages: "33–62",
    volume: 29,
    issue: 1,
    year: 2024,
    received: "2023-04-18",
    accepted: "2023-10-04",
    published: "2024-01-15",
    citations: 13,
    downloads: 1612,
    pdfSize: "1.57 MB",
    type: "Research Article",
  },
  {
    id: "2024-v29-i1-03",
    doi: "10.17256/JER.2024.29.1.003",
    title:
      "Political Connections and Firm Value: Evidence from Listed Korean Chaebols",
    authors: [
      { name: "Min-Jae Choi", affiliation: "Hanyang University, Seoul, Republic of Korea", corresponding: true },
      { name: "Caroline Dubois", affiliation: "Paris School of Economics, Paris, France" },
    ],
    abstract:
      "We construct a new measure of political connections for listed Korean firms over 2000–2022, drawing on corporate disclosures of board appointments, political donations, and lobbying expenditures. Firms classified as politically connected exhibit a 6.2 percent Tobin's q premium, but the premium is concentrated in firms in regulated industries and is sharply reduced following changes in administration. Event-study evidence around anti-corruption legislation enacted in 2016 indicates that the announcement reduced the value of politically connected firms by 1.8 percent, consistent with a meaningful discounting of expected future rents.",
    keywords: ["Political connections", "Chaebol", "Firm value", "Korea", "Anti-corruption"],
    jelCodes: ["G32", "L25", "K42", "D72"],
    pages: "63–92",
    volume: 29,
    issue: 1,
    year: 2024,
    received: "2023-05-22",
    accepted: "2023-11-08",
    published: "2024-01-15",
    citations: 10,
    downloads: 1284,
    pdfSize: "1.42 MB",
    type: "Research Article",
  },
  {
    id: "2024-v29-i1-04",
    doi: "10.17256/JER.2024.29.1.004",
    title:
      "A Note on the Estimation of Total Factor Productivity with Endogenous Markups",
    authors: [
      { name: "Andreas Müller", affiliation: "University of Zurich, Zurich, Switzerland", corresponding: true },
      { name: "Min-Su Park", affiliation: "Hanyang University, Seoul, Republic of Korea" },
    ],
    abstract:
      "We revisit the estimation of firm-level total factor productivity (TFP) in industries with endogenous markups. We show that the standard production-function approach assuming perfect competition can generate upward-biased TFP estimates in industries where market power has risen. We propose a simple correction based on a Hall-style markup estimate and demonstrate, using Korean manufacturing firm-level data, that the correction reduces estimated TFP growth by approximately 0.4 percentage points per year over 2010–2022 — a substantively important adjustment for productivity-growth accounting.",
    keywords: ["Total factor productivity", "Markups", "Market power", "Production function estimation"],
    jelCodes: ["D24", "L13", "O47"],
    pages: "93–104",
    volume: 29,
    issue: 1,
    year: 2024,
    received: "2023-06-14",
    accepted: "2023-11-22",
    published: "2024-01-15",
    citations: 3,
    downloads: 384,
    pdfSize: "0.72 MB",
    type: "Research Article",
  },
  // ===== Vol. 28, Issue 4 — additional papers =====
  {
    id: "2023-v28-i4-02",
    doi: "10.17256/JER.2023.28.4.002",
    title:
      "The Macroeconomic Effects of Carbon Pricing: A General-Equilibrium Analysis for Korea",
    authors: [
      { name: "Hyun-Jin Kim", affiliation: "Hanyang University, Seoul, Republic of Korea", corresponding: true },
      { name: "Markus Bauer", affiliation: "University of Mannheim, Mannheim, Germany" },
    ],
    abstract:
      "We develop a dynamic general-equilibrium model with energy as a production input to evaluate the macroeconomic effects of alternative carbon-pricing scenarios for Korea. A carbon tax of USD 30 per ton of CO2-equivalent, introduced gradually over 2025–2030, reduces emissions by 18 percent by 2035 relative to a no-policy baseline, at a cumulative output cost of 0.6 percent of GDP. Revenue recycling through cuts in labour-income taxes reduces the output cost by approximately 40 percent. The model implies modest distributional effects across household income groups, with low-income households facing proportionally larger direct energy-cost increases that are largely offset by revenue recycling.",
    keywords: ["Carbon pricing", "General equilibrium", "Korea", "Climate policy", "Revenue recycling"],
    jelCodes: ["Q58", "Q43", "E62", "H23"],
    pages: "453–482",
    volume: 28,
    issue: 4,
    year: 2023,
    received: "2022-10-12",
    accepted: "2023-05-18",
    published: "2023-10-15",
    citations: 17,
    downloads: 2084,
    pdfSize: "1.69 MB",
    type: "Research Article",
  },
  {
    id: "2023-v28-i4-03",
    doi: "10.17256/JER.2023.28.4.003",
    title:
      "COVID-19, Schooling Losses, and Long-Run Earnings: Evidence from Korea",
    authors: [
      { name: "Sang-Yoon Han", affiliation: "Hanyang University, Seoul, Republic of Korea", corresponding: true },
      { name: "Ji-Yeon Park", affiliation: "Korea Labor Institute, Seoul, Republic of Korea" },
    ],
    abstract:
      "We estimate the long-run earnings effects of schooling losses induced by the COVID-19 pandemic in Korea. Combining administrative school-closure data with a structural model of human-capital accumulation, we project that the 2020–2022 cohort of students will experience a 1.8 percent reduction in lifetime earnings, equivalent to approximately KRW 31 million per student. Aggregating across cohorts, the present-value loss amounts to 1.4 percent of 2022 GDP. Targeted remedial education programmes — modelled on the basis of international evidence — could recover roughly half of the projected losses at a cost of 0.08 percent of GDP.",
    keywords: ["COVID-19", "Schooling losses", "Human capital", "Korea", "Lifetime earnings"],
    jelCodes: ["I24", "I26", "J24", "H52"],
    pages: "483–510",
    volume: 28,
    issue: 4,
    year: 2023,
    received: "2022-11-04",
    accepted: "2023-06-08",
    published: "2023-10-15",
    citations: 22,
    downloads: 2418,
    pdfSize: "1.55 MB",
    type: "Research Article",
  },
  {
    id: "2023-v28-i4-04",
    doi: "10.17256/JER.2023.28.4.004",
    title:
      "News Sentiment and the Term Structure of Interest Rates in Asia",
    authors: [
      { name: "Tae-Hee Kim", affiliation: "Hanyang University, Seoul, Republic of Korea", corresponding: true },
      { name: "Jiwon Lee", affiliation: "Korea University, Seoul, Republic of Korea" },
    ],
    abstract:
      "We construct a daily news-sentiment index for six Asian economies using textual analysis of approximately 1.2 million economic news articles over 2010–2023. The index explains a non-trivial share of the variation in 10-year government bond yields, particularly during crisis episodes, and improves the out-of-sample forecast accuracy of standard affine term-structure models by approximately 11 percent at the one-year horizon. We discuss the implications for central-bank communication strategies and the role of news sentiment as a real-time indicator of financial conditions.",
    keywords: ["News sentiment", "Term structure", "Asia", "Textual analysis", "Bond yields"],
    jelCodes: ["E43", "E58", "C55"],
    pages: "511–524",
    volume: 28,
    issue: 4,
    year: 2023,
    received: "2022-12-02",
    accepted: "2023-06-22",
    published: "2023-10-15",
    citations: 4,
    downloads: 642,
    pdfSize: "0.84 MB",
    type: "Research Article",
  },
  // ===== Vol. 28, Issue 3 — new complete issue =====
  {
    id: "2023-v28-i3-01",
    doi: "10.17256/JER.2023.28.3.001",
    title:
      "Fiscal Rules and Sovereign Bond Yields: Evidence from Emerging Markets",
    authors: [
      { name: "Hyun-Sung Lim", affiliation: "Hanyang University, Seoul, Republic of Korea", corresponding: true },
      { name: "Samuel Adeyemi", affiliation: "University of Ibadan, Ibadan, Nigeria" },
    ],
    abstract:
      "We estimate the effect of fiscal-rule adoption on sovereign bond yields in 38 emerging-market economies over 2000–2022. Using a synthetic-control approach, we find that fiscal-rule adoption reduces 10-year sovereign yields by an average of 64 basis points over the five years following adoption, with effects concentrated in countries with strong rule-based monetary frameworks and credible enforcement mechanisms. Numerical fiscal rules targeting expenditure growth are more effective than debt-to-GDP rules in reducing yields. The results are robust to a range of placebo and falsification tests and are not driven by selection on observables.",
    keywords: ["Fiscal rules", "Sovereign yields", "Emerging markets", "Synthetic control", "Public finance"],
    jelCodes: ["E62", "H63", "G12"],
    pages: "261–290",
    volume: 28,
    issue: 3,
    year: 2023,
    received: "2022-06-14",
    accepted: "2022-12-08",
    published: "2023-07-15",
    citations: 19,
    downloads: 2018,
    pdfSize: "1.51 MB",
    type: "Research Article",
  },
  {
    id: "2023-v28-i3-02",
    doi: "10.17256/JER.2023.28.3.002",
    title:
      "Income Inequality and Aggregate Demand: A Reassessment Using Cross-Country Panel Data",
    authors: [
      { name: "Evelyn Stewart", affiliation: "Stockholm University, Stockholm, Sweden", corresponding: true },
      { name: "Jae-Hoon Hwang", affiliation: "Hanyang University, Seoul, Republic of Korea" },
    ],
    abstract:
      "We reassess the relationship between income inequality and aggregate demand using a panel of 36 advanced and emerging economies over 1990–2022. Identification exploits variation in top-income shares instrumented by changes in top marginal tax rates. We find that a 1 percentage point increase in the top-decile income share is associated with a 0.28 percentage point reduction in the consumption share of GDP over the subsequent five years and a 0.41 percentage point increase in the current-account balance. The findings are consistent with secular-stagnation channels linking inequality to weak aggregate demand, but are moderated by cross-country heterogeneity in financial-system structure.",
    keywords: ["Income inequality", "Aggregate demand", "Current account", "Top incomes", "Panel data"],
    jelCodes: ["E21", "E25", "D31", "F32"],
    pages: "291–320",
    volume: 28,
    issue: 3,
    year: 2023,
    received: "2022-07-04",
    accepted: "2023-01-12",
    published: "2023-07-15",
    citations: 14,
    downloads: 1642,
    pdfSize: "1.44 MB",
    type: "Research Article",
  },
  {
    id: "2023-v28-i3-03",
    doi: "10.17256/JER.2023.28.3.003",
    title:
      "The Effects of Public R&D Subsidies on Private Innovation: Evidence from Korean SMEs",
    authors: [
      { name: "Andreas Müller", affiliation: "University of Zurich, Zurich, Switzerland", corresponding: true },
      { name: "Da-Hye Song", affiliation: "Seoul National University, Seoul, Republic of Korea" },
      { name: "Hyun-Ju Yang", affiliation: "Korea Development Institute, Sejong, Republic of Korea" },
    ],
    abstract:
      "We estimate the effect of public R&D subsidies on private innovation outcomes for Korean small and medium-sized enterprises using a regression-discontinuity design around the funding cut-off of the Small and Medium Business Administration's technology-innovation programme over 2014–2020. Subsidised firms experience a 19 percent increase in patent applications and a 3.2 percent increase in firm-level TFP over the subsequent four years. Additionality is substantial — subsidy-induced R&D spending crowds in rather than crowds out private R&D expenditure, with an additionality ratio of 1.4. Effects are strongest for firms in technology-intensive industries and for firms with prior R&D experience.",
    keywords: ["R&D subsidies", "Innovation", "Korea", "SMEs", "Regression discontinuity"],
    jelCodes: ["O38", "O31", "L25", "H25"],
    pages: "321–348",
    volume: 28,
    issue: 3,
    year: 2023,
    received: "2022-07-22",
    accepted: "2023-01-30",
    published: "2023-07-15",
    citations: 11,
    downloads: 1398,
    pdfSize: "1.49 MB",
    type: "Research Article",
  },
  {
    id: "2023-v28-i3-04",
    doi: "10.17256/JER.2023.28.3.004",
    title:
      "Nowcasting Korean GDP Growth Using Mixed-Frequency Machine Learning Models",
    authors: [
      { name: "Min-Jae Choi", affiliation: "Hanyang University, Seoul, Republic of Korea", corresponding: true },
      { name: "Hyun-Ju Yang", affiliation: "Korea Development Institute, Sejong, Republic of Korea" },
    ],
    abstract:
      "We develop a nowcasting model for Korean quarterly GDP growth that combines mixed-frequency macroeconomic indicators with machine-learning techniques. A stacked ensemble of elastic-net, random-forest, and gradient-boosting models outperforms both the Bank of Korea's official nowcast and a standard dynamic-factor model benchmark, reducing the mean squared forecast error by approximately 18 percent over 2018–2023. Variable-importance analysis indicates that survey-based indicators and high-frequency trade data contribute disproportionately to the model's forecast accuracy. We discuss practical implementation considerations for central-bank nowcasting exercises.",
    keywords: ["Nowcasting", "GDP growth", "Machine learning", "Mixed frequency", "Korea"],
    jelCodes: ["C53", "C55", "E37"],
    pages: "349–364",
    volume: 28,
    issue: 3,
    year: 2023,
    received: "2022-08-18",
    accepted: "2023-02-14",
    published: "2023-07-15",
    citations: 7,
    downloads: 1084,
    pdfSize: "0.92 MB",
    type: "Research Article",
  },
  // ===== Vol. 28, Issue 2 — new complete issue =====
  {
    id: "2023-v28-i2-01",
    doi: "10.17256/JER.2023.28.2.001",
    title:
      "Monetary Policy Surprises and Stock Returns: Evidence from Asian Equity Markets",
    authors: [
      { name: "Tae-Woo Lee", affiliation: "Hanyang University, Seoul, Republic of Korea", corresponding: true },
      { name: "Roberto Rossi", affiliation: "Bocconi University, Milan, Italy" },
    ],
    abstract:
      "We estimate the response of Asian equity markets to monetary policy surprises in the United States, Korea, Japan, and China over 2005–2023 using high-frequency identification around policy announcements. A 25-basis-point surprise tightening reduces aggregate equity returns by 1.8 percentage points on the announcement day, with heterogeneous effects across sectors — interest-rate-sensitive sectors such as real estate and construction exhibit responses two to three times larger than the aggregate. The transmission of US surprises to Asian markets has strengthened since the global financial crisis, consistent with the growing role of global financial cycles.",
    keywords: ["Monetary policy surprises", "Stock returns", "Asia", "High-frequency identification", "Equity markets"],
    jelCodes: ["E52", "G12", "G15", "E58"],
    pages: "121–150",
    volume: 28,
    issue: 2,
    year: 2023,
    received: "2022-05-04",
    accepted: "2022-11-12",
    published: "2023-04-15",
    citations: 18,
    downloads: 1824,
    pdfSize: "1.52 MB",
    type: "Research Article",
  },
  {
    id: "2023-v28-i2-02",
    doi: "10.17256/JER.2023.28.2.002",
    title:
      "The Impact of E-Commerce on Retail Productivity: Evidence from Korea",
    authors: [
      { name: "Min-Jae Choi", affiliation: "Hanyang University, Seoul, Republic of Korea", corresponding: true },
      { name: "Caroline Dubois", affiliation: "Paris School of Economics, Paris, France" },
    ],
    abstract:
      "We estimate the effect of e-commerce penetration on retail-sector productivity using Korean firm-level data over 2010–2022. Identification exploits pre-existing variation in broadband infrastructure as an instrument for online sales adoption. A 10 percentage point increase in e-commerce penetration raises retail-sector TFP by 3.4 percent, with effects concentrated in firms with larger pre-existing store networks. Productivity gains are driven by within-firm improvements in inventory turnover and labour productivity rather than by reallocation across firms. The results are robust to a range of specifications and placebo tests.",
    keywords: ["E-commerce", "Retail productivity", "Korea", "Broadband", "Firm-level"],
    jelCodes: ["L81", "L25", "O33"],
    pages: "151–178",
    volume: 28,
    issue: 2,
    year: 2023,
    received: "2022-05-22",
    accepted: "2022-12-02",
    published: "2023-04-15",
    citations: 13,
    downloads: 1418,
    pdfSize: "1.41 MB",
    type: "Research Article",
  },
  {
    id: "2023-v28-i2-03",
    doi: "10.17256/JER.2023.28.2.003",
    title:
      "Refugee Inflows and Local Labour Markets: Evidence from the Korean Yeonpyeong Island Relocation",
    authors: [
      { name: "Da-Hye Song", affiliation: "Seoul National University, Seoul, Republic of Korea", corresponding: true },
      { name: "Lakshmi Iyer", affiliation: "University of Notre Dame, Indiana, USA" },
    ],
    abstract:
      "We exploit the unexpected relocation of approximately 1,400 residents from Yeonpyeong Island following the 2010 shelling incident as a natural experiment to estimate the labour-market effects of a sudden refugee inflow on the receiving community of Incheon. Using a synthetic-control approach, we find no statistically significant effect on the wages of incumbent low-skilled workers over the subsequent five years, but a 1.6 percentage point increase in local unemployment. The labour-supply shock appears to have been absorbed primarily through adjustments in the local non-tradable service sector and through internal migration responses.",
    keywords: ["Refugee inflows", "Labour markets", "Korea", "Synthetic control", "Local labour markets"],
    jelCodes: ["J61", "J21", "R23"],
    pages: "179–206",
    volume: 28,
    issue: 2,
    year: 2023,
    received: "2022-06-12",
    accepted: "2022-12-22",
    published: "2023-04-15",
    citations: 6,
    downloads: 718,
    pdfSize: "1.29 MB",
    type: "Research Article",
  },
  {
    id: "2023-v28-i2-04",
    doi: "10.17256/JER.2023.28.2.004",
    title:
      "Measuring Network Centrality in Asian Trade Linkages",
    authors: [
      { name: "Yuki Tanaka", affiliation: "Keio University, Tokyo, Japan", corresponding: true },
      { name: "Wei Zhang", affiliation: "Fudan University, Shanghai, China" },
    ],
    abstract:
      "We compute and compare four network-centrality measures for Asian economies in the global trade network over 2000–2022 using a value-added trade matrix. Korea's centrality has risen steadily across all measures, consistent with its integration into global value chains. China's centrality has risen more sharply, particularly after its 2001 WTO accession. The results suggest that network analysis provides useful complementary information to standard trade-share measures in understanding the structure and evolution of regional trade integration.",
    keywords: ["Network centrality", "Trade", "Asia", "Global value chains", "Value-added trade"],
    jelCodes: ["F14", "F15", "F62"],
    pages: "207–220",
    volume: 28,
    issue: 2,
    year: 2023,
    received: "2022-07-04",
    accepted: "2023-01-08",
    published: "2023-04-15",
    citations: 4,
    downloads: 524,
    pdfSize: "0.78 MB",
    type: "Research Article",
  },
  // ===== Vol. 28, Issue 1 — new complete issue =====
  {
    id: "2023-v28-i1-01",
    doi: "10.17256/JER.2023.28.1.001",
    title:
      "The Transmission of Global Financial Cycles to Emerging Asia: The Role of Exchange-Rate Regimes",
    authors: [
      { name: "Hyun-Jin Kim", affiliation: "Hanyang University, Seoul, Republic of Korea", corresponding: true },
      { name: "Sungho Park", affiliation: "Hanyang University, Seoul, Republic of Korea" },
    ],
    abstract:
      "We estimate the transmission of the global financial cycle to emerging Asian economies over 2000–2023 and examine how exchange-rate regimes mediate this transmission. Using a panel VAR with regime-dependent coefficients, we find that a one-standard-deviation increase in the VIX reduces capital inflows to emerging Asia by 2.8 percent on impact. The effect is approximately 40 percent smaller for economies with floating exchange rates than for those with managed regimes. We provide evidence that this difference reflects the role of exchange-rate flexibility as an automatic stabiliser, in line with the Mundell–Fleming framework.",
    keywords: ["Global financial cycle", "Exchange-rate regimes", "Asia", "Capital flows", "Panel VAR"],
    jelCodes: ["F32", "F33", "F41", "E58"],
    pages: "1–30",
    volume: 28,
    issue: 1,
    year: 2023,
    received: "2022-04-08",
    accepted: "2022-10-12",
    published: "2023-01-15",
    citations: 21,
    downloads: 2418,
    pdfSize: "1.62 MB",
    type: "Research Article",
  },
  {
    id: "2023-v28-i1-02",
    doi: "10.17256/JER.2023.28.1.002",
    title:
      "Determinants of Female Labour Force Participation in Korea: A Cohort Analysis",
    authors: [
      { name: "Sang-Yoon Han", affiliation: "Hanyang University, Seoul, Republic of Korea", corresponding: true },
      { name: "Keiko Sato", affiliation: "Hitotsubashi University, Tokyo, Japan" },
    ],
    abstract:
      "We analyse the determinants of female labour force participation in Korea using cohort-level panel data covering 1998–2022. Decomposing changes in participation into cohort, age, and time effects, we find that the substantial increase in female participation since the late 1990s is primarily attributable to cohort effects — each successive cohort of women participates at a rate 5 to 7 percentage points higher than the previous one. Cross-cohort convergence in educational attainment explains roughly 60 percent of the cohort effect, while changes in fertility behaviour and childcare availability explain most of the remainder.",
    keywords: ["Female labour force participation", "Korea", "Cohort analysis", "Education", "Fertility"],
    jelCodes: ["J21", "J13", "J16"],
    pages: "31–58",
    volume: 28,
    issue: 1,
    year: 2023,
    received: "2022-04-22",
    accepted: "2022-10-30",
    published: "2023-01-15",
    citations: 16,
    downloads: 1922,
    pdfSize: "1.45 MB",
    type: "Research Article",
  },
  {
    id: "2023-v28-i1-03",
    doi: "10.17256/JER.2023.28.1.003",
    title:
      "Product Market Regulation and Firm Entry: Evidence from Korea's Regulatory Reform",
    authors: [
      { name: "Min-Jae Choi", affiliation: "Hanyang University, Seoul, Republic of Korea", corresponding: true },
      { name: "Andreas Müller", affiliation: "University of Zurich, Zurich, Switzerland" },
    ],
    abstract:
      "We estimate the effect of product-market regulation on firm entry using Korea's 2014 regulatory reform, which significantly reduced entry barriers in 52 previously restricted professions. Difference-in-differences estimates indicate that the reform raised firm entry in treated professions by 11.2 percent over the subsequent four years, with the largest effects in professions with the most restrictive pre-reform entry barriers. Consumer prices in treated professions fell by an average of 3.4 percent over the same period, with no measurable effect on service quality as proxied by complaint rates. The results suggest that regulatory reform can deliver meaningful consumer-welfare gains.",
    keywords: ["Product market regulation", "Firm entry", "Korea", "Regulatory reform", "Difference-in-differences"],
    jelCodes: ["L51", "L26", "K23"],
    pages: "59–86",
    volume: 28,
    issue: 1,
    year: 2023,
    received: "2022-05-14",
    accepted: "2022-11-08",
    published: "2023-01-15",
    citations: 9,
    downloads: 1084,
    pdfSize: "1.34 MB",
    type: "Research Article",
  },
  {
    id: "2023-v28-i1-04",
    doi: "10.17256/JER.2023.28.1.004",
    title:
      "Forecasting Korean Inflation with Machine Learning",
    authors: [
      { name: "Min-Jae Choi", affiliation: "Hanyang University, Seoul, Republic of Korea", corresponding: true },
      { name: "Hyun-Ju Yang", affiliation: "Korea Development Institute, Sejong, Republic of Korea" },
    ],
    abstract:
      "We compare the forecasting performance of machine-learning models against standard Phillips-curve benchmarks for Korean headline CPI inflation over 2010–2023. A random-forest model with a broad set of macroeconomic predictors achieves the lowest out-of-sample root mean squared forecast error, improving upon the Phillips-curve benchmark by approximately 16 percent at the one-year horizon. Variable-importance analysis indicates that the model relies heavily on measures of inflation expectations, import prices, and labour-market tightness. We discuss the implications for central-bank inflation forecasting and the practical implementation of machine-learning approaches in policy institutions.",
    keywords: ["Inflation forecasting", "Machine learning", "Korea", "Phillips curve", "Random forest"],
    jelCodes: ["E31", "C53", "C55", "E37"],
    pages: "87–100",
    volume: 28,
    issue: 1,
    year: 2023,
    received: "2022-06-08",
    accepted: "2022-11-22",
    published: "2023-01-15",
    citations: 6,
    downloads: 824,
    pdfSize: "0.88 MB",
    type: "Research Article",
  },
  // ===== Vol. 27, Issue 4 (October 2022) — back-volume issue =====
  {
    id: "2022-v27-i4-01",
    doi: "10.17256/JER.2022.27.4.001",
    title:
      "Capital Flows and Foreign Exchange Intervention: Evidence from Korea's Sterilisation Operations",
    authors: [
      { name: "Sungho Park", affiliation: "Hanyang University, Seoul, Republic of Korea", corresponding: true },
      { name: "Anna Petrova", affiliation: "Charles University, Prague, Czech Republic" },
    ],
    abstract:
      "We estimate the effectiveness of sterilised foreign-exchange intervention in Korea over 2005–2021 using a high-frequency event-study approach that distinguishes intervention days from non-intervention days. We find that intervention operations of USD 1 billion move the won–dollar exchange rate by an average of 0.3 percent in the opposite direction on the day of intervention, with effects persisting for 5 to 10 trading days. Sterilisation through monetary stabilisation bonds is largely effective in neutralising the monetary effects of intervention, with limited detectable effects on domestic money-market conditions.",
    keywords: ["Foreign exchange intervention", "Sterilisation", "Korea", "Exchange rate", "Capital flows"],
    jelCodes: ["E58", "F31", "G14"],
    pages: "381–410",
    volume: 27,
    issue: 4,
    year: 2022,
    received: "2021-11-08",
    accepted: "2022-04-12",
    published: "2022-10-15",
    citations: 23,
    downloads: 2284,
    pdfSize: "1.58 MB",
    type: "Research Article",
  },
  {
    id: "2022-v27-i4-02",
    doi: "10.17256/JER.2022.27.4.002",
    title:
      "Pension Reform and Labour Supply: Evidence from Korea's 2013 National Pension Reform",
    authors: [
      { name: "Jae-Hoon Hwang", affiliation: "Hanyang University, Seoul, Republic of Korea", corresponding: true },
      { name: "Evelyn Stewart", affiliation: "Stockholm University, Stockholm, Sweden" },
    ],
    abstract:
      "We estimate the labour-supply effects of Korea's 2013 National Pension reform, which raised the pension eligibility age from 60 to 61 and reduced the replacement rate for new retirees. Using a regression-discontinuity design around the age cut-off, we find that the reform increased the labour-force participation rate of affected workers by 3.8 percentage points over the subsequent five years, with effects concentrated among male workers in physically demanding occupations. The reform had no measurable effect on the consumption of affected households, suggesting that labour-supply adjustments largely offset the expected pension benefit reductions.",
    keywords: ["Pension reform", "Labour supply", "Korea", "Regression discontinuity", "Retirement"],
    jelCodes: ["H55", "J26", "J14"],
    pages: "411–438",
    volume: 27,
    issue: 4,
    year: 2022,
    received: "2021-12-04",
    accepted: "2022-05-18",
    published: "2022-10-15",
    citations: 18,
    downloads: 1842,
    pdfSize: "1.42 MB",
    type: "Research Article",
  },
  {
    id: "2022-v27-i4-03",
    doi: "10.17256/JER.2022.27.4.003",
    title:
      "Industrial Policy and Export Upgrading: Evidence from Korea's Heavy and Chemical Industry Drive",
    authors: [
      { name: "Hyun-Ju Yang", affiliation: "Korea Development Institute, Sejong, Republic of Korea" },
      { name: "Jae-Hoon Hwang", affiliation: "Hanyang University, Seoul, Republic of Korea", corresponding: true },
    ],
    abstract:
      "We evaluate the long-run effects of Korea's Heavy and Chemical Industry (HCI) Drive of the 1970s on the composition and sophistication of Korean exports over the subsequent four decades. Using a difference-in-differences design exploiting variation in sectoral exposure to HCI policy, we find that treated sectors experienced a 28 percent increase in export sophistication over the 1980–2000 period, with persistent effects into the 2010s. The gains are concentrated in sectors with substantial pre-existing productive capacity and complementary human-capital investments. We discuss the implications for contemporary industrial-policy debates in developing economies.",
    keywords: ["Industrial policy", "Export upgrading", "Korea", "Heavy and chemical industry", "Economic history"],
    jelCodes: ["O25", "F14", "O53", "N75"],
    pages: "439–468",
    volume: 27,
    issue: 4,
    year: 2022,
    received: "2022-01-12",
    accepted: "2022-06-08",
    published: "2022-10-15",
    citations: 27,
    downloads: 2648,
    pdfSize: "1.71 MB",
    type: "Research Article",
  },
  // ===== Vol. 27, Issue 2 (April 2022) — back-volume issue =====
  {
    id: "2022-v27-i2-01",
    doi: "10.17256/JER.2022.27.2.001",
    title:
      "Housing Affordability and Fertility: Evidence from Korean Metropolitan Areas",
    authors: [
      { name: "Sang-Yoon Han", affiliation: "Hanyang University, Seoul, Republic of Korea", corresponding: true },
      { name: "Da-Eun Han", affiliation: "Hanyang University, Seoul, Republic of Korea" },
    ],
    abstract:
      "We estimate the effect of housing affordability on fertility decisions using panel data for 14 Korean metropolitan areas over 2005–2022. Identification exploits within-city variation in housing prices driven by exogenous supply shocks. We find that a 10 percent increase in the house-price-to-income ratio reduces the fertility rate by 2.4 percent over the subsequent five years, with effects concentrated among households in the 25-to-34 age group. The estimated relationship is robust to a range of alternative specifications and explains approximately one-fifth of the cross-metropolitan variation in fertility-rate declines over the sample period.",
    keywords: ["Housing affordability", "Fertility", "Korea", "Housing prices", "Demographics"],
    jelCodes: ["J13", "R21", "J11"],
    pages: "131–158",
    volume: 27,
    issue: 2,
    year: 2022,
    received: "2021-08-14",
    accepted: "2022-01-22",
    published: "2022-04-15",
    citations: 22,
    downloads: 2284,
    pdfSize: "1.43 MB",
    type: "Research Article",
  },
  {
    id: "2022-v27-i2-02",
    doi: "10.17256/JER.2022.27.2.002",
    title:
      "The Effects of Trade Credit on Small Business Survival during Economic Downturns",
    authors: [
      { name: "Tae-Woo Lee", affiliation: "Hanyang University, Seoul, Republic of Korea", corresponding: true },
      { name: "Roberto Rossi", affiliation: "Bocconi University, Milan, Italy" },
    ],
    abstract:
      "We examine the role of trade credit in supporting small business survival during economic downturns using firm-level Korean data over 2008–2022. We exploit the 2008–2009 global financial crisis and the 2020 COVID-19 shock as natural experiments to identify the effect of trade credit on firm survival. A one-standard-deviation increase in pre-crisis trade-credit reliance reduces the probability of firm exit during the subsequent downturn by 4.8 percentage points, with the effect concentrated among financially constrained firms. The findings highlight the importance of supplier financing as a stabiliser during periods of credit-market disruption.",
    keywords: ["Trade credit", "Small business", "Survival", "Korea", "Financial crisis"],
    jelCodes: ["G32", "G33", "L25"],
    pages: "159–186",
    volume: 27,
    issue: 2,
    year: 2022,
    received: "2021-09-04",
    accepted: "2022-02-12",
    published: "2022-04-15",
    citations: 12,
    downloads: 1284,
    pdfSize: "1.36 MB",
    type: "Research Article",
  },
  // ===== Vol. 26, Issue 4 (October 2021) =====
  {
    id: "2021-v26-i4-01",
    doi: "10.17256/JER.2021.26.4.001",
    title:
      "The Transmission Mechanism of Quantitative Easing: Evidence from the Bank of Korea's Asset Purchase Programme",
    authors: [
      { name: "Hyun-Jin Kim", affiliation: "Hanyang University, Seoul, Republic of Korea", corresponding: true },
      { name: "Jiwon Lee", affiliation: "Korea University, Seoul, Republic of Korea" },
    ],
    abstract:
      "We evaluate the transmission of the Bank of Korea's quantitative easing programme launched in response to the COVID-19 pandemic. Using an event-study approach around purchase-operation announcements, we find that the programme reduced 10-year Korean treasury yields by approximately 26 basis points cumulatively over the first six months of operations, with smaller but statistically significant effects on corporate bond yields. Portfolio-balance effects dominate the signalling channel, particularly for longer-maturity assets. Our findings are consistent with evidence from advanced-economy asset-purchase programmes and inform the design of future unconventional monetary policy in emerging markets.",
    keywords: ["Quantitative easing", "Asset purchases", "Bank of Korea", "COVID-19", "Monetary policy transmission"],
    jelCodes: ["E52", "E58", "G12"],
    pages: "361–390",
    volume: 26,
    issue: 4,
    year: 2021,
    received: "2021-04-08",
    accepted: "2021-09-14",
    published: "2021-10-15",
    citations: 31,
    downloads: 2842,
    pdfSize: "1.58 MB",
    type: "Research Article",
  },
  {
    id: "2021-v26-i4-02",
    doi: "10.17256/JER.2021.26.4.002",
    title:
      "Educational Tracking and Long-Run Labour Market Outcomes: Evidence from Korea's High School Reform",
    authors: [
      { name: "Sang-Yoon Han", affiliation: "Hanyang University, Seoul, Republic of Korea", corresponding: true },
      { name: "Hong-Mei Wang", affiliation: "Peking University, Beijing, China" },
    ],
    abstract:
      "We exploit the gradual rollout of Korea's high-school equalisation policy, which replaced ability-based tracking with random assignment in major metropolitan areas starting in 1974, to estimate the long-run labour-market effects of school-track assignment. Using linked administrative data, we find that students affected by the reform experienced a 3.2 percent increase in lifetime earnings, with effects concentrated among students from disadvantaged backgrounds who would have been assigned to lower tracks under the previous system. The reform reduced the variance of log earnings across cohorts by approximately 8 percent, with no measurable effect on aggregate educational attainment.",
    keywords: ["Educational tracking", "Korea", "High school reform", "Labour market outcomes", "Inequality"],
    jelCodes: ["I24", "I28", "J31"],
    pages: "391–420",
    volume: 26,
    issue: 4,
    year: 2021,
    received: "2021-05-12",
    accepted: "2021-10-04",
    published: "2021-10-15",
    citations: 24,
    downloads: 2184,
    pdfSize: "1.49 MB",
    type: "Research Article",
  },
  {
    id: "2021-v26-i4-03",
    doi: "10.17256/JER.2021.26.4.003",
    title:
      "The Causal Effect of COVID-19 Lockdowns on Air Quality in Asian Cities",
    authors: [
      { name: "Markus Bauer", affiliation: "University of Mannheim, Mannheim, Germany", corresponding: true },
      { name: "Hyun-Jin Kim", affiliation: "Hanyang University, Seoul, Republic of Korea" },
    ],
    abstract:
      "We estimate the causal effect of COVID-19 lockdowns on air quality in 32 major Asian cities using a difference-in-differences design that exploits variation in the timing and stringency of lockdown measures. Lockdowns reduced PM2.5 concentrations by an average of 22 percent during the strictest four-week lockdown window, with larger effects in cities with greater pre-lockdown industrial activity. The improvements in air quality reversed rapidly once lockdown measures were eased, suggesting that sustained air-quality gains require structural rather than purely behavioural changes in economic activity.",
    keywords: ["COVID-19", "Lockdowns", "Air quality", "Asia", "Difference-in-differences"],
    jelCodes: ["Q53", "I18", "Q56"],
    pages: "421–434",
    volume: 26,
    issue: 4,
    year: 2021,
    received: "2021-06-08",
    accepted: "2021-10-22",
    published: "2021-10-15",
    citations: 8,
    downloads: 824,
    pdfSize: "0.84 MB",
    type: "Research Article",
  },
  // ===== NEW PAPER — strict AOM-style format with full references =====
  // (Vol. 30, Issue 3, October 2025 — Research Article)
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
      "The October 2026 issue includes \u201cFinancial Risk Exposure and Management Strategies of MSMEs in Maharashtra: A Study of Nashik District\u201d by Laxman Arjun Patil and Amardeep Bajpai (School of Commerce and Management Studies, Sandip University, Nashik), a survey of 384 MSMEs across four talukas of Nashik District.",
    category: "Issue",
  },
  {
    id: "n00",
    date: "2026-08-15",
    title: "Volume 31, Issue 2 (August 2026) is now published",
    summary:
      "The August 2026 issue contains two research articles in full text, on the Phillips curve and inflation persistence in Korea and Japan and on informal risk-sharing after the 2018 Lombok earthquakes.",
    category: "Issue",
  },
  {
    id: "n0",
    date: "2025-10-15",
    title: "Volume 30, Issue 4 (October 2025) is now published",
    summary:
      "The October 2025 issue closes Volume 30 with three research articles: digital payments and small-firm growth in India (Aditi Sharma and Vikram Nair), India's rural employment guarantee as insurance against monsoon failure (Rohan Kulkarni and Meera Subramanian), and the employment effects of Korea's 2018–2019 minimum wage increases (Dong-Hyun Kwon), introduced by an editorial from Prof. Jae-Hoon Hwang.",
    category: "Issue",
  },
  {
    id: "n1",
    date: "2025-07-15",
    title: "Volume 30, Issue 3 (July 2025) is now published",
    summary:
      "The July 2025 issue features six research articles on monetary policy transmission, climate risk pricing, university–industry collaboration, wage rigidity, trade uncertainty, and inequality of opportunity. An anniversary editorial by Prof. Jae-Hoon Hwang marks three decades of the journal.",
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
    id: "n4",
    date: "2025-04-10",
    title: "Volume 30, Issue 2 (April 2025) is now published",
    summary:
      "The April 2025 issue contains three research articles on housing wealth effects, fiscal multipliers in resource-rich economies, and bank capital requirements across the business cycle.",
    category: "Issue",
  },
  {
    id: "n5",
    date: "2025-03-04",
    title: "Best Paper Award 2024 — announced",
    summary:
      "The Editorial Board is pleased to announce that the Journal of Economic Research Best Paper Award for 2024 has been awarded to Prof. Sang-Wook Park and Prof. Hyun-Jin Kim for their article “Exchange Rate Pass-Through to Consumer Prices in Inflation-Targeting Asian Economies”, published in Volume 29, Issue 4.",
    category: "Award",
  },
  {
    id: "n6",
    date: "2025-01-20",
    title: "Volume 30, Issue 1 (January 2025) is now published",
    summary:
      "The January 2025 issue opens our 30th anniversary volume with three articles covering digital platform competition, place-based industrial policy, and behavioural spillovers from tax-compliance nudges.",
    category: "Issue",
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
  totalArticles: 487,
  totalDownloads2024: 184220,
  totalCitations: 6318,
  h5Index: 28,
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
      "With the publication of Volume 30, the journal enters its fourth decade. The 30th anniversary volume opens with articles spanning monetary economics, climate finance, and place-based industrial policy — areas that have come to define the journal's editorial identity.",
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
export function listIssues(): [number, number][] {
  return Array.from(new Set(ARTICLES.map((a) => `${a.volume}-${a.issue}`)))
    .map((k) => k.split("-").map(Number) as [number, number])
    .sort((a, b) => b[0] - a[0] || b[1] - a[1]);
}

/** First page number of an article; roman-numbered front matter (editorials) sorts first as 0. */
/** True for illustrative sample content; only articles explicitly marked `sample: false` are genuine publications. */
export const isSampleArticle = (a: Pick<Article, "sample">) => a.sample !== false;

export function pageStart(a: Pick<Article, "pages">) {
  const n = parseInt(a.pages, 10);
  return Number.isFinite(n) ? n : 0;
}
