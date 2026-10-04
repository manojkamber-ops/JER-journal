// Journal of Economic Research - Data
// Publisher: Hanyang University Seoul
// ISSN: 1226-4261 | Field of Research: 3801 | ABDC Rating: B

export const JOURNAL_INFO = {
  title: "Journal of Economic Research",
  abbrTitle: "J. Econ. Res.",
  publisher: "Hanyang University, Seoul",
  school: "Hanyang University",
  department: "Department of Economics, College of Economics and Finance",
  issnPrint: "1226-4261",
  issnOnline: "1226-4261",
  fieldOfResearch: "3801",
  forDescription: "Applied Economics",
  abdcRating: "B",
  abdcYear: "2022",
  frequency: "Quarterly (4 issues per year)",
  founded: "1996",
  editorInChiefOffice: "Hanyang University, 222 Wangsimni-ro, Seongdong-gu, Seoul 04763, Republic of Korea",
  contactEmail: "jer@hanyang.ac.kr",
  phone: "+82-2-2220-0294",
  fax: "+82-2-2220-0295",
  website: "https://jer.hanyang.ac.kr",
  doiPrefix: "10.17256",
  license: "Open Access — Creative Commons Attribution-NonCommercial 4.0 (CC BY-NC 4.0)",
  apc: "No Article Processing Charge (APC). Publication is fully funded by Hanyang University.",
  language: "English",
};

export type Article = {
  id: string;
  doi: string;
  title: string;
  authors: { name: string; affiliation: string; corresponding?: boolean }[];
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
  citations: number;
  downloads: number;
  pdfSize: string;
  type: "Research Article" | "Review Article" | "Short Communication" | "Editorial";
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
    id: "2025-v30-i3-02",
    doi: "10.17256/JER.2025.30.3.002",
    title:
      "Climate Risk Pricing in Sovereign Bond Markets: A Cross-Country Panel Analysis of Asia-Pacific Issuers",
    authors: [
      { name: "Jiwon Lee", affiliation: "Korea University, Seoul, Republic of Korea", corresponding: true },
      { name: "Hyun-Jin Kim", affiliation: "Hanyang University, Seoul, Republic of Korea" },
    ],
    abstract:
      "We examine whether physical and transition climate risks are priced into sovereign bond yields for 24 Asia-Pacific economies over 2010–2023. Constructing country-level composite climate risk indices from granular meteorological and policy data, we document that a one-standard-deviation increase in physical climate risk raises 10-year sovereign yields by 22 basis points on average, while elevated transition risk — proxied by fossil-fuel dependence and the stringency of carbon policy — adds a further 14 basis points. The pricing effect is non-linear and concentrated among economies with shallow insurance penetration and limited fiscal space. We further show that climate-related yield premia widened materially after the 2015 Paris Agreement, consistent with an endogenous repricing as institutional investors integrate climate disclosures. Our results suggest that sovereign debt sustainability frameworks in the region should explicitly incorporate forward-looking climate scenarios.",
    keywords: [
      "Climate risk",
      "Sovereign bonds",
      "Asia-Pacific",
      "Yield spreads",
      "Sustainable finance",
    ],
    jelCodes: ["G12", "G15", "Q54", "H63"],
    pages: "271–302",
    volume: 30,
    issue: 3,
    year: 2025,
    received: "2024-10-03",
    accepted: "2025-05-09",
    published: "2025-07-15",
    citations: 9,
    downloads: 1241,
    pdfSize: "2.07 MB",
    type: "Research Article",
    featured: true,
  },
  {
    id: "2025-v30-i3-03",
    doi: "10.17256/JER.2025.30.3.003",
    title:
      "The Causal Effect of University–Industry Collaboration on Regional Innovation Output: Quasi-Experimental Evidence from Korea",
    authors: [
      { name: "Da-Hye Song", affiliation: "Seoul National University, Seoul, Republic of Korea" },
      { name: "Andreas Müller", affiliation: "University of Zurich, Zurich, Switzerland", corresponding: true },
      { name: "Tae-Hee Kim", affiliation: "Hanyang University, Seoul, Republic of Korea" },
    ],
    abstract:
      "Using a regression discontinuity design around the funding cut-off of Korea's Brain Korea 21 Plus programme, we estimate the causal effect of university–industry R&D collaboration on regional patenting and firm productivity. Treated regions received an average of KRW 6.2 billion in additional collaboration grants per year between 2014 and 2020. We find that treated regions experienced a 17.8 percent increase in patent applications per capita and a 4.1 percent increase in total factor productivity of local SMEs over the subsequent five-year window. Heterogeneity analysis indicates that benefits are concentrated in regions with pre-existing absorptive capacity and are attenuated where inter-firm mobility of researchers is low. The findings inform the design of place-based innovation policy and underscore the importance of human-capital mobility as a transmission channel.",
    keywords: [
      "University–industry collaboration",
      "Regional innovation",
      "Regression discontinuity",
      "Patent production",
      "Korea",
    ],
    jelCodes: ["O31", "O33", "O38", "R11", "I23"],
    pages: "303–328",
    volume: 30,
    issue: 3,
    year: 2025,
    received: "2024-11-18",
    accepted: "2025-05-23",
    published: "2025-07-15",
    citations: 6,
    downloads: 983,
    pdfSize: "1.52 MB",
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
    id: "2025-v30-i3-05",
    doi: "10.17256/JER.2025.30.3.005",
    title:
      "Trade Uncertainty and Global Value Chain Reorganisation: Evidence from Asia-Pacific Firm-Level Data",
    authors: [
      { name: "Yuki Tanaka", affiliation: "Keio University, Tokyo, Japan" },
      { name: "Wei Zhang", affiliation: "Fudan University, Shanghai, China", corresponding: true },
      { name: "Min-Su Park", affiliation: "Hanyang University, Seoul, Republic of Korea" },
    ],
    abstract:
      "We construct a firm-level measure of trade policy uncertainty using textual analysis of regulatory filings and examine its effect on global value chain restructuring among 4,200 listed manufacturing firms across nine Asia-Pacific economies from 2014 to 2023. Our results indicate that a one-standard-deviation increase in firm-level trade uncertainty is associated with a 6.1 percentage point decline in offshoring intensity and a 3.4 percentage point increase in domestic sourcing within two years. Effects are strongest in electronics and machinery sectors, where the elasticity of reshoring to uncertainty is twice the sample average. We provide evidence that uncertainty-induced reshoring is associated with measurable increases in firm-level R&D expenditure and productivity, suggesting a previously underappreciated channel through which trade policy uncertainty shapes long-run industrial composition.",
    keywords: [
      "Trade uncertainty",
      "Global value chains",
      "Reshoring",
      "Firm-level evidence",
      "Asia-Pacific",
    ],
    jelCodes: ["F14", "F23", "F60", "L25"],
    pages: "357–384",
    volume: 30,
    issue: 3,
    year: 2025,
    received: "2025-01-09",
    accepted: "2025-06-19",
    published: "2025-07-15",
    citations: 4,
    downloads: 612,
    pdfSize: "1.71 MB",
    type: "Research Article",
  },
  {
    id: "2025-v30-i3-06",
    doi: "10.17256/JER.2025.30.3.006",
    title:
      "Inequality of Opportunity in Educational Attainment: New Decomposition Evidence from Urban China",
    authors: [
      { name: "Hong-Mei Wang", affiliation: "Peking University, Beijing, China" },
      { name: "Sang-Yoon Han", affiliation: "Hanyang University, Seoul, Republic of Korea", corresponding: true },
    ],
    abstract:
      "This paper quantifies the share of educational attainment inequality attributable to circumstances beyond individual control in urban China, drawing on the China Family Panel Studies (2010–2020). Using a parametric ex-ante approach and a Shapley-value decomposition, we estimate that circumstances account for 41 percent of the variance in years of schooling, with parental education and household wealth jointly explaining 63 percent of this share. Decomposing by birth cohort reveals a U-shaped pattern: inequality of opportunity fell from 0.46 in the 1960 cohort to 0.34 in the 1980 cohort, before rebounding to 0.39 for the 2000 cohort. The reversal tracks changes in school-track allocation and the rising private cost of supplementary education, with implications for intergenerational mobility policy.",
    keywords: [
      "Inequality of opportunity",
      "Educational attainment",
      "Intergenerational mobility",
      "China",
      "Shapley decomposition",
    ],
    jelCodes: ["D63", "I24", "J62"],
    pages: "385–410",
    volume: 30,
    issue: 3,
    year: 2025,
    received: "2025-02-14",
    accepted: "2025-06-28",
    published: "2025-07-15",
    citations: 2,
    downloads: 528,
    pdfSize: "1.43 MB",
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
    id: "2025-v30-i2-02",
    doi: "10.17256/JER.2025.30.2.002",
    title:
      "Fiscal Multipliers in Resource-Rich versus Resource-Poor Developing Economies: A Bayesian Approach",
    authors: [
      { name: "Samuel Adeyemi", affiliation: "University of Ibadan, Ibadan, Nigeria" },
      { name: "Hyun-Sung Lim", affiliation: "Hanyang University, Seoul, Republic of Korea", corresponding: true },
    ],
    abstract:
      "We estimate fiscal multipliers for 38 developing economies using a Bayesian panel vector autoregression that allows for heterogeneity across resource-rich and resource-poor country groups. The cumulative output multiplier at the four-year horizon is 0.94 for resource-poor economies but only 0.41 for resource-rich ones, a gap we attribute to absorption capacity and Dutch-disease dynamics. Counterfactual simulations suggest that re-allocating one percent of resource rents to public investment would raise long-run output by 1.7 percent in resource-rich economies.",
    keywords: ["Fiscal multiplier", "Natural resources", "Bayesian VAR", "Developing economies"],
    jelCodes: ["E62", "E65", "O23", "Q32"],
    pages: "149–174",
    volume: 30,
    issue: 2,
    year: 2025,
    received: "2024-07-02",
    accepted: "2024-12-30",
    published: "2025-04-10",
    citations: 7,
    downloads: 1102,
    pdfSize: "1.43 MB",
    type: "Research Article",
  },
  {
    id: "2025-v30-i2-03",
    doi: "10.17256/JER.2025.30.2.003",
    title:
      "Bank Capital Requirements and SME Lending: Differential Effects Across Business Cycle Phases",
    authors: [
      { name: "Anna Petrova", affiliation: "Charles University, Prague, Czech Republic" },
      { name: "Tae-Woo Lee", affiliation: "Hanyang University, Seoul, Republic of Korea", corresponding: true },
    ],
    abstract:
      "Exploiting the phased introduction of Basel III in Korea between 2013 and 2019, we estimate the heterogeneous effect of bank capital requirements on SME credit supply. Our difference-in-differences design shows that a one percentage point increase in required capital ratios reduces SME lending growth by 2.8 percentage points during downturns but has no statistically significant effect during expansions. The procyclical effect is more pronounced for small and unaffiliated banks, suggesting that capital regulation may amplify rather than dampen credit cycles in the SME segment.",
    keywords: ["Bank capital", "Basel III", "SME lending", "Procyclicality", "Korea"],
    jelCodes: ["G21", "G28", "E32", "E51"],
    pages: "175–200",
    volume: 30,
    issue: 2,
    year: 2025,
    received: "2024-07-22",
    accepted: "2025-01-15",
    published: "2025-04-10",
    citations: 5,
    downloads: 940,
    pdfSize: "1.38 MB",
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
    id: "2025-v30-i1-02",
    doi: "10.17256/JER.2025.30.1.002",
    title:
      "Long-Run Effects of Place-Based Industrial Policy: Evidence from Korea's Industrial Complex Programme",
    authors: [
      { name: "Hyun-Ju Yang", affiliation: "Korea Development Institute, Sejong, Republic of Korea" },
      { name: "Jae-Hoon Hwang", affiliation: "Hanyang University, Seoul, Republic of Korea", corresponding: true },
    ],
    abstract:
      "We evaluate the long-run effects of Korea's national industrial complex programme, which allocated large-scale tax incentives and infrastructure investment to designated regions starting in the 1970s. Using a shift-share research design and combining four decades of firm micro-data, we find that treated regions experienced a 22 percent increase in manufacturing employment, an 8.4 percent increase in TFP, and a 6.1 percent wage premium that persist into the 2010s. Effects are concentrated in regions that received complementary investment in vocational education, underscoring the role of human-capital complementarities in industrial policy design.",
    keywords: ["Place-based policy", "Industrial policy", "Korea", "Shift-share", "Productivity"],
    jelCodes: ["R11", "R58", "O25", "O53"],
    pages: "33–62",
    volume: 30,
    issue: 1,
    year: 2025,
    received: "2024-03-04",
    accepted: "2024-08-19",
    published: "2025-01-20",
    citations: 23,
    downloads: 2901,
    pdfSize: "1.92 MB",
    type: "Research Article",
  },
  {
    id: "2025-v30-i1-03",
    doi: "10.17256/JER.2025.30.1.003",
    title:
      "Behavioural Spillovers from Nudge-Based Tax Compliance Interventions: A Field Experiment",
    authors: [
      { name: "Lakshmi Iyer", affiliation: "University of Notre Dame, Indiana, USA", corresponding: true },
      { name: "Soo-Hyun Park", affiliation: "Hanyang University, Seoul, Republic of Korea" },
    ],
    abstract:
      "We conduct a large-scale randomised field experiment with the Korean National Tax Service, sending behaviourally informed letters to 78,000 self-employed taxpayers. The intervention raises reported income by 4.1 percent in the treated group relative to control. We then test for behavioural spillovers onto adjacent tax obligations, finding no spillover onto business-expense reporting but a 1.8 percent increase in voluntary pension contributions, consistent with attention and salience mechanisms operating across financial domains. We discuss the design implications for tax administration in middle-income countries.",
    keywords: ["Tax compliance", "Nudge", "Field experiment", "Spillovers", "Korea"],
    jelCodes: ["H26", "H24", "C93", "D91"],
    pages: "63–88",
    volume: 30,
    issue: 1,
    year: 2025,
    received: "2024-02-20",
    accepted: "2024-07-30",
    published: "2025-01-20",
    citations: 12,
    downloads: 1622,
    pdfSize: "1.47 MB",
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
    title: "Journal of Economic Research indexed in KCI and Scopus",
    summary:
      "We are pleased to confirm that the Journal of Economic Research is now fully indexed in the Korean Citation Index (KCI) and Scopus, with coverage retroactive to Volume 26 (2021). This complements our existing EBSCO, EconLit, and DOAJ listings.",
    category: "Announcement",
  },
];

export const INDEXING_SERVICES = [
  { name: "Scopus", since: "2021", coverage: "Volume 26 onwards" },
  { name: "Korean Citation Index (KCI)", since: "2003", coverage: "Volume 8 onwards" },
  { name: "EconLit (AEA)", since: "2005", coverage: "Volume 10 onwards" },
  { name: "EBSCO Business Source Complete", since: "2008", coverage: "Volume 13 onwards" },
  { name: "Directory of Open Access Journals (DOAJ)", since: "2016", coverage: "Volume 21 onwards" },
  { name: "ABDC Journal Quality List", since: "2019", coverage: "Current rating: B" },
  { name: "RePEc / IDEAS", since: "2012", coverage: "Volume 17 onwards" },
  { name: "Crossref", since: "2012", coverage: "All DOIs registered" },
  { name: "Google Scholar", since: "2007", coverage: "Volume 12 onwards" },
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
    title: "KCI Indexing",
    description:
      "The journal was accepted for indexing by the Korean Citation Index (KCI), marking its formal recognition as a peer-reviewed outlet of national standing. Editorial procedures were reorganised around a double-blind peer review protocol that remains in place today.",
  },
  {
    year: "2005",
    title: "EconLit Indexing and Quarterly Frequency",
    description:
      "The journal was indexed in EconLit, the bibliographic database of the American Economic Association, and moved from semi-annual to quarterly publication in order to accommodate growing submission volumes from researchers across Asia.",
  },
  {
    year: "2012",
    title: "Digital Transformation and DOI Registration",
    description:
      "In partnership with Crossref, the journal began issuing Digital Object Identifiers (DOIs) for all published articles and migrated to a fully online editorial workflow. RePEc indexing was secured in the same year.",
  },
  {
    year: "2016",
    title: "Open Access and DOAJ",
    description:
      "The journal adopted a fully open-access publishing model under a Creative Commons Attribution-NonCommercial (CC BY-NC) licence and was accepted into the Directory of Open Access Journals (DOAJ). Article processing charges were eliminated, with publication costs underwritten by Hanyang University.",
  },
  {
    year: "2019",
    title: "First ABDC Listing",
    description:
      "The journal was first included in the Australian Business Deans Council (ABDC) Journal Quality List at the 'B' tier, reflecting its established standing as a regional outlet of international relevance.",
  },
  {
    year: "2021",
    title: "Scopus Indexing and Restructured Editorial Board",
    description:
      "The journal was accepted for indexing in Scopus, with retroactive coverage back to Volume 26. The editorial board was restructured to include 18 associate editors from 11 countries, broadening the journal's international reach.",
  },
  {
    year: "2025",
    title: "30th Anniversary Volume",
    description:
      "With the publication of Volume 30, the journal enters its fourth decade. The 30th anniversary volume opens with articles spanning monetary economics, climate finance, and place-based industrial policy — areas that have come to define the journal's editorial identity.",
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
