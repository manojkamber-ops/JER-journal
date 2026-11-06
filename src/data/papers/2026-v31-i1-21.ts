// Vol. 31, No. 1 (2026) — genuine article (Pareek & Mehta, quantitative assessment); the live copy is in Sanity.
// Edit it in Sanity Studio: the website shows the Sanity version and uses this copy only if Sanity is unreachable.
import type { PaperSpec } from "../paper-spec";

export const paper: PaperSpec = {
  "id": "2026-v31-i1-21",
  "title": "Investment Patterns and Their Economic Impact on Startup Development in Gujarat: A Quantitative Assessment",
  "authors": [
    {
      "name": "Rahul Pareek",
      "corresponding": true,
      "role": "Research scholar",
      "email": "rahulpareekphdwork@gmail.com",
      "affiliation": {
        "department": "",
        "institution": "Gujarat Law Society University",
        "city": "Ahmedabad, Gujarat",
        "country": "India"
      }
    },
    {
      "name": "Payal Mehta",
      "title": "Dr.",
      "email": "payal.mehta@glsuniversity.ac.in",
      "affiliation": {
        "department": "",
        "institution": "Gujarat Law Society University",
        "city": "Ahmedabad, Gujarat",
        "country": "India"
      }
    }
  ],
  "abstract": "Gujarat has emerged as one of India’s leading startup ecosystems, supported by active government policy and growing private capital flows. While qualitative assessments of the ecosystem are common, rigorous quantitative analysis of how investment patterns translate into measurable economic outcomes remains limited. This paper presents a quantitative assessment of investment patterns and their economic impact on startup development in Gujarat from 2017 to 2024. The study constructs a panel dataset from DPIIT recognition statistics, Gujarat government scheme disbursement records, venture capital deal databases, and employment estimates. Three categories of investment patterns are examined: government scheme disbursements, private capital inflows (angel, venture, and corporate), and total capital aggregation. Economic impact is measured through four outcome variables: number of DPIIT-recognized startups, direct employment generated, cumulative revenue contribution, and estimated contribution to state gross domestic product. The analysis applies correlation analysis, ordinary least squares (OLS) regression, and year-on-year growth decomposition to quantify the relationship between investment and outcomes. The regression model yields an adjusted R2 of approximately 0.94, indicating that investment variables explain a substantial proportion of the variation in startup growth. The findings show that private capital has a stronger marginal effect on employment generation than government disbursements, while government schemes have a more pronounced effect on the volume of new DPIIT recognitions, reflecting their role in lowering entry barriers. Sector-wise analysis reveals that capital productivity—defined as employment generated per crore of investment—is highest in healthcare and agritech startups and lowest in fintech and IT/software. The paper presents a quantitative input-output model linking investment categories to outcome variables, derives elasticity estimates, and provides evidence-based recommendations for policy design, capital allocation, and entrepreneurship education. The study concludes that a balanced investment portfolio combining accessible government seed support with deeper private growth capital produces the strongest aggregate economic outcomes, and that quantitative assessment frameworks should be integrated into routine ecosystem monitoring.",
  "keywords": [
    "Investment patterns",
    "economic impact",
    "Gujarat",
    "quantitative assessment",
    "regression analysis",
    "startup development",
    "DPIIT",
    "venture capital"
  ],
  "jelCodes": [],
  "pages": "1–24",
  "volume": 31,
  "issue": 1,
  "year": 2026,
  "published": "2026-10-08",
  "publishedOnline": "2026-11-06",
  "citations": 0,
  "downloads": 0,
  "pdfSize": "0.10 MB",
  "type": "Research Article",
  "refs": [
    "Acs, Z. J., Audretsch, D. B., Lehmann, E. E., & Licht, G. (2017). The knowledge spillover theory of entrepreneurship. Small Business Economics, 49(4), 731–742.",
    "Audretsch, D. B., & Keilbach, M. (2004). Entrepreneurship capital and economic performance. Regional Studies, 38(8), 949– 959.",
    "Department for Promotion of Industry and Internal Trade. (2024). Startup India: State-wise recognition statistics. Government of India. https://www.startupindia.gov.in.",
    "Government of Gujarat. (2022). Gujarat Startup Policy 2022. Industries Commissionerate, Government of Gujarat.",
    "Gompers, P., & Lerner, J. (2001). The venture capital cycle. MIT Press.",
    "Kaplan, S. N., & Stromberg, P. (2003). Financial contracting theory meets the real world: An empirical analysis of venture capital contracts. Review of Economic Studies, 70(2), 281–315.",
    "Lerner, J. (2009). Boulevard of broken dreams: Why public efforts to boost entrepreneurship and venture capital have failed—and what to do about it. Princeton University Press.",
    "Mazzucato, M. (2013). The entrepreneurial state: Debunking public vs. private sector myths. Anthem Press.",
    "NASSCOM. (2023). India Tech Startup Ecosystem Report. National Association of Software and Service Companies.",
    "Reserve Bank of India. (2023). Annual report of the Reserve Bank of India. RBI Publications.",
    "Student Startup and Innovation Policy. (2022). SSIP 2.0: Revised policy for student innovation. Education Department, Government of Gujarat.",
    "Vibrant Gujarat Summit. (2024). Vibrant Gujarat Global Summit report. Government of Gujarat. https://www.vibrantgujarat.com."
  ],
  "body": [
    {
      "id": "introduction",
      "heading": "I. Introduction",
      "paragraphs": [],
      "subsections": [
        {
          "id": "background",
          "heading": "A. Background",
          "paragraphs": [
            "Gujarat has emerged as one of India’s leading startup ecosystems, supported by active government policy and growing private capital flows. The state has consistently ranked among the top five Indian states by DPIITrecognized startups, with growth accelerating after the introduction of the Gujarat Startup Policy 2022, the Student Startup and Innovation Policy (SSIP), and the establishment of i-Hub. Private capital from angel investors, venture capital firms, and corporate funds has also grown, although a significant share of growth-stage capital continues to come from investors based outside Gujarat.",
            "While the expansion of the ecosystem is well documented in qualitative terms, rigorous quantitative analysis of how investment patterns translate into measurable economic outcomes remains limited. Understanding these relationships is essential for evidence-based policy design, for efficient allocation of public resources, and for setting realistic expectations among entrepreneurs and investors."
          ]
        },
        {
          "id": "problem-statement",
          "heading": "B. Problem Statement",
          "paragraphs": [
            "The central problem is that aggregate investment and startup growth figures do not reveal the quantitative relationships between specific investment patterns and specific economic outcomes. Without such analysis, policy decisions rely on assumption rather than evidence, and the marginal impact of additional public or private capital cannot be estimated. A quantitative assessment framework is therefore needed to connect investment inputs to economic outputs."
          ]
        },
        {
          "id": "research-questions",
          "heading": "C. Research Questions",
          "paragraphs": [
            "This study addresses four research questions: (1) What is the quantitative relationship between total capital inflows and startup growth in Gujarat from 2017 to 2024? (2) How do government scheme disbursements and private capital differ in their marginal effect on outcomes? (3) Which sectors demonstrate the highest capital productivity in terms of employment and revenue generation? (4) What elasticity estimates connect investment changes to economic outcome changes, and what are the implications for policy?"
          ]
        },
        {
          "id": "aim-and-objectives",
          "heading": "D. Aim and Objectives",
          "paragraphs": [
            "The aim is to quantitatively assess the relationship between investment patterns and economic impact on startup development in Gujarat. The specific objectives are: (i) to construct a panel dataset of investment and outcome variables for Gujarat from 2017 to 2024; (ii) to apply correlation and regression analysis to quantify investment-outcome relationships; (iii) to estimate sectorwise capital productivity; (iv) to develop a quantitative input-output model with elasticity estimates; and (v) to derive evidence-based recommendations for policy, capital allocation, and entrepreneurship education."
          ]
        },
        {
          "id": "scope-and-contribution",
          "heading": "E. Scope and Contribution",
          "paragraphs": [
            "The study covers the period 2017–2024, focusing on Gujarat-based startups and capital flowing into them. The main contributions are: (i) a constructed panel dataset of investment and outcome variables; (ii) regression results quantifying investment-outcome relationships; (iii) sectorwise capital productivity estimates; (iv) a quantitative input-output model with elasticities; and (v) evidencebased recommendations. The study is based on secondary data and statistical modelling rather than primary surveys."
          ]
        }
      ]
    },
    {
      "id": "literature-review",
      "heading": "II. Literature Review",
      "paragraphs": [],
      "subsections": [
        {
          "id": "quantitative-assessment-of-startup-ecosy",
          "heading": "A. Quantitative Assessment of Startup Ecosystems",
          "paragraphs": [
            "Quantitative assessment of startup ecosystems has been pursued in several strands of literature. Audretsch and Keilbach (2004) developed measures of entrepreneurship capital and estimated its contribution to regional economic output using regression analysis, finding statistically significant positive effects. Acs et al. (2017) extended this work with knowledge spillover models that quantify the productivity contribution of new ventures. These studies establish that startup activity can be meaningfully measured and that its economic contribution can be quantified."
          ]
        },
        {
          "id": "investment-and-startup-outcomes",
          "heading": "B. Investment and Startup Outcomes",
          "paragraphs": [
            "The relationship between investment and startup outcomes has been examined extensively. Gompers and Lerner (2001) analysed the venture capital cycle, showing that capital availability at different stages has different effects on firm formation and growth. Lerner (2009) examined the marginal impact of government venture support programs, finding that well-designed programs have measurable positive effects on firm formation but weaker effects on later-stage growth. Kaplan and Stromberg (2003) quantified the value-added role of venture capitalists, showing that post-investment monitoring and governance explain a significant share of portfolio firm performance."
          ]
        },
        {
          "id": "indian-and-gujarat-specific-quantitative",
          "heading": "C. Indian and Gujarat-Specific Quantitative Studies",
          "paragraphs": [
            "In the Indian context, NASSCOM (2023) reports aggregate startup statistics, including recognized entities, employment, and capital raised, but does not conduct regression analysis of investment-outcome relationships. The Reserve Bank of India (2023) provides data on venture capital and private equity flows but does not connect these to state-level outcomes. For Gujarat specifically, government policy documents describe scheme outlays and intended outcomes (Government of Gujarat, 2022), and DPIIT provides recognition data (DPIIT, 2024), but few studies conduct quantitative analysis connecting investment patterns to economic outcomes at the state level."
          ]
        },
        {
          "id": "literature-synthesis",
          "heading": "D. Literature Synthesis",
          "paragraphs": [
            "The reviewed literature establishes that startup ecosystem dynamics can be quantitatively assessed, that investment-outcome relationships are measurable, and that government and private capital have different marginal effects. However, Gujarat-specific quantitative analysis connecting investment patterns to economic outcomes is largely absent. This gap motivates the present study."
          ],
          "tables": [
            {
              "id": "table-1",
              "caption": "Table I. Summary of Reviewed Literature on Quantitative Assessment of Startup Ecosystems",
              "columns": [
                "Source",
                "Year",
                "Method",
                "Key Finding"
              ],
              "rows": [
                [
                  "Audretsch & Keilbach",
                  "2004",
                  "Regression",
                  "Entrepreneurship capital has statistically significant positive effect on output"
                ],
                [
                  "Acs et al.",
                  "2017",
                  "Spillover model",
                  "Knowledge spillovers from new ventures contribute to productivity growth"
                ],
                [
                  "Gompers & Lerner",
                  "2001",
                  "Cycle analysis",
                  "Capital availability at different stages has different effects on firms"
                ],
                [
                  "Lerner",
                  "2009",
                  "Program evaluation",
                  "Government programs affect formation more than later-stage growth"
                ],
                [
                  "Kaplan & Stromberg",
                  "2003",
                  "Empirical analysis",
                  "Post-investment monitoring explains significant share of performance"
                ],
                [
                  "NASSCOM",
                  "2023",
                  "Aggregate statistics",
                  "Reports startup counts and capital but no regression analysis"
                ],
                [
                  "Government of Gujarat",
                  "2022",
                  "Policy document",
                  "Describes scheme outlays and intended outcomes"
                ],
                [
                  "DPIIT",
                  "2024",
                  "Recognition data",
                  "Provides state-wise startup counts"
                ]
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "research-gap",
      "heading": "III. Research Gap",
      "paragraphs": [
        "The literature review reveals several gaps. First, most Gujarat-specific studies are descriptive, reporting aggregate statistics without regression analysis. Second, the differential marginal effects of government and private capital on outcomes such as employment and revenue are rarely quantified at the state level. Third, sector-wise capital productivity—employment or revenue generated per unit of capital—is not systematically estimated for Gujarat. Fourth, elasticity estimates connecting investment changes to outcome changes are absent from the Gujarat literature. Fifth, the quantitative frameworks that exist in international literature have not been applied to Gujarat’s ecosystem with locally calibrated data."
      ]
    },
    {
      "id": "objectives",
      "heading": "IV. Objectives",
      "paragraphs": [
        "The main objectives are: (i) to construct a panel dataset of investment and outcome variables for Gujarat from 2017 to 2024; (ii) to apply correlation and OLS regression to quantify investment-outcome relationships; (iii) to estimate sector-wise capital productivity; (iv) to develop a quantitative input-output model with elasticity estimates; and (v) to derive evidence-based recommendations for policy and education."
      ]
    },
    {
      "id": "research-methodology",
      "heading": "V. Research Methodology",
      "paragraphs": [],
      "subsections": [
        {
          "id": "research-design",
          "heading": "A. Research Design",
          "paragraphs": [
            "The study adopts a quantitative research design using secondary data and statistical modelling. A panel dataset is constructed with annual observations from 2017 to 2024, covering investment variables and outcome variables for the Gujarat startup ecosystem. Correlation analysis, OLS regression, growth decomposition, and elasticity estimation are applied."
          ],
          "figures": [
            {
              "id": "figure-1",
              "caption": "Fig. 1. Research methodology framework.",
              "kind": "image",
              "image": {
                "url": "https://cdn.sanity.io/images/imuzzo9u/production/96d9ccd90d8312712b4f352bd0f1d3e798a7bf53-1034x2230.png",
                "width": 1034,
                "height": 2230
              },
              "xLabels": [],
              "series": []
            }
          ]
        },
        {
          "id": "data-sources",
          "heading": "B. Data Sources",
          "paragraphs": [
            "The study draws on the following secondary sources. DPIIT statistics: annual state-wise startup recognition counts. Government scheme records: disbursement data from Gujarat Startup Policy, SSIP, and i-Hub. Investment databases: venture capital and private equity deal databases reporting annual capital flows into Gujaratbased startups. Employment estimates: derived from reported employment per recognized startup and aggregate surveys. State economic data: Gujarat GSDP figures from state economic surveys."
          ]
        },
        {
          "id": "variables",
          "heading": "C. Variables",
          "paragraphs": [
            "The analysis uses the following variables. Investment variables (independent): government scheme disbursements (Gt), private capital inflows (Pt), and total capital (Ct = Gt + Pt). Outcome variables (dependent): DPIIT-recognized startups (St), direct employment (Et), cumulative revenue contribution (Rt), and estimated GDP contribution share (GDPt)."
          ]
        },
        {
          "id": "method-of-analysis",
          "heading": "D. Method of Analysis",
          "paragraphs": [
            "Three quantitative methods are applied. Correlation analysis examines pairwise relationships between investment and outcome variables. OLS regression estimates the relationship between investment and outcomes:",
            "S_t = α + β1·G_t + β2·P_t + ε_t      (1)",
            "where St is the number of DPIIT-recognized startups in year t, Gt is government scheme disbursement, Pt is private capital inflow, and εt is the error term. Elasticity estimation computes the percentage change in outcome for a percentage change in investment:",
            "η_S,C = (ΔS/S) / (ΔC/C)      (2)",
            "Sector-wise capital productivity is defined as employment generated per crore of investment:",
            "π_j = E_j / C_j      (3)",
            "where πj is capital productivity in sector j, Ej is employment in sector j, and Cj is capital invested in sector j."
          ]
        }
      ]
    },
    {
      "id": "investment-pattern-analysis",
      "heading": "VI. Investment Pattern Analysis",
      "paragraphs": [],
      "subsections": [
        {
          "id": "investment-growth-trend",
          "heading": "A. Investment Growth Trend",
          "paragraphs": [
            "Fig. 2 shows the annual investment in Gujarat-based startups from 2017 to 2024, decomposed into government scheme disbursements and private capital inflows.",
            "The data shows sustained growth in both investment categories, with private capital growing faster than government disbursements. Total capital increased from approximately Rs. 325 crore in 2017 to approximately Rs. 5,000 crore in 2024, representing a compound annual growth rate of approximately 48%."
          ],
          "figures": [
            {
              "id": "figure-2",
              "caption": "Fig. 2. Annual investment in Gujarat-based startups, 2017–2024.",
              "kind": "image",
              "image": {
                "url": "https://cdn.sanity.io/images/imuzzo9u/production/6534a837c5e77cb901497cefbedbde95b4c5dd74-997x570.png",
                "width": 997,
                "height": 570
              },
              "xLabels": [],
              "series": []
            }
          ]
        },
        {
          "id": "correlation-analysis",
          "heading": "B. Correlation Analysis",
          "paragraphs": [
            "Table II presents the pairwise correlation coefficients between investment and outcome variables.",
            "All correlation coefficients are above 0.89, indicating strong positive relationships. Private capital shows the strongest correlation with employment (0.98) and revenue (0.96), while government disbursements show the strongest correlation with startup count (0.97), consistent with their role in lowering entry barriers."
          ],
          "tables": [
            {
              "id": "table-2",
              "caption": "Table II. Correlation Matrix Between Investment and Outcome Variables",
              "columns": [
                "",
                "Startups (S)",
                "Employment (E)",
                "Revenue (R)"
              ],
              "rows": [
                [
                  "Govt. disb. (G)",
                  "0.97",
                  "0.92",
                  "0.89"
                ],
                [
                  "Private capital (P)",
                  "0.95",
                  "0.98",
                  "0.96"
                ],
                [
                  "Total capital (C)",
                  "0.96",
                  "0.97",
                  "0.94"
                ]
              ]
            }
          ]
        },
        {
          "id": "regression-results",
          "heading": "C. Regression Results",
          "paragraphs": [
            "Table III presents the OLS regression results for three outcome variables.",
            "The regression results show that government disbursements have a stronger effect on startup count (β1 = 9.8) than private capital (β2 = 3.4), consistent with the role of government schemes in lowering entry barriers and supporting recognition. In contrast, private capital has a stronger effect on employment (β2 = 12.7 vs. β1 = 6.2) and revenue (β2 = 9.6 vs. β1 = 4.1), reflecting the growth and scaling effect of private investment. All models have high explanatory power with adjusted R2 values above 0.93."
          ],
          "tables": [
            {
              "id": "table-3",
              "caption": "Table III. OLS Regression Results: Investment → Outcomes",
              "columns": [
                "Variable",
                "Startups",
                "Employment",
                "Revenue"
              ],
              "rows": [
                [
                  "α (intercept)",
                  "142",
                  "820",
                  "1.2"
                ],
                [
                  "β1 (Govt.)",
                  "9.8***",
                  "6.2**",
                  "4.1**"
                ],
                [
                  "β2 (Private)",
                  "3.4**",
                  "12.7***",
                  "9.6***"
                ],
                [
                  "Adj. R²",
                  "0.94",
                  "0.96",
                  "0.93"
                ],
                [
                  "F-statistic",
                  "68.2",
                  "84.5",
                  "59.7"
                ]
              ],
              "note": "*p<0.05, **p<0.01, ***p<0.001. Coefficients scaled to relevant units."
            }
          ]
        }
      ]
    },
    {
      "id": "quantitative-input-output-model",
      "heading": "VII. Quantitative Input-Output Model",
      "paragraphs": [
        "The input-output model in Fig. 3 links investment categories through intermediate processes to outcome variables. Government schemes and private capital both feed seed and recognition activity, producing DPIIT-recognized startups. Private capital additionally feeds growth and scaling, producing employment and revenue. The dashed arrow indicates that recognized startups subsequently become candidates for growth capital, creating a feedback loop."
      ],
      "figures": [
        {
          "id": "figure-3",
          "caption": "Fig. 3. Quantitative input-output model linking investment to outcomes.",
          "kind": "image",
          "image": {
            "url": "https://cdn.sanity.io/images/imuzzo9u/production/291b6a1923f95d555d60bf5f7ba074e1be716aec-1982x547.png",
            "width": 1982,
            "height": 547
          },
          "xLabels": [],
          "series": []
        }
      ],
      "subsections": [
        {
          "id": "elasticity-estimates",
          "heading": "A. Elasticity Estimates",
          "paragraphs": [
            "Table IV presents the elasticity estimates—percentage change in outcome for a 1% change in investment.",
            "The elasticity estimates indicate that a 1% increase in government schemes produces a 0.82% increase in startup count but only a 0.45% increase in employment. In contrast, a 1% increase in private capital produces a 0.51% increase in startup count but a 1.12% increase in employment. This confirms that government schemes are more effective at expanding the volume of startups, while private capital is more effective at generating employment and revenue through scaling."
          ],
          "tables": [
            {
              "id": "table-4",
              "caption": "Table IV. Elasticity Estimates: % Change in Outcome per 1% Change in Investment",
              "columns": [
                "Investment",
                "ηS (Startups)",
                "ηE (Employment)",
                "ηR (Revenue)"
              ],
              "rows": [
                [
                  "Govt. schemes",
                  "0.82",
                  "0.45",
                  "0.38"
                ],
                [
                  "Private capital",
                  "0.51",
                  "1.12",
                  "0.94"
                ],
                [
                  "Total capital",
                  "0.64",
                  "0.88",
                  "0.72"
                ]
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "sector-wise-capital-productivity",
      "heading": "VIII. Sector-Wise Capital Productivity",
      "paragraphs": [
        "Fig. 4 shows sector-wise capital productivity, defined as employment generated per Rs. 1 crore of investment. Agritech demonstrates the highest capital productivity (52 jobs per crore), followed by healthcare (45), manufacturing (38), clean technology (32), IT/software (24), and fintech (18). This pattern reflects the labour intensity of agritech and healthcare operations relative to the more capital-efficient but less employment-intensive IT and fintech sectors. From a policy perspective, sectors with higher capital productivity offer greater employment impact per unit of public support, although total economic contribution also depends on revenue and innovation spillovers."
      ],
      "figures": [
        {
          "id": "figure-4",
          "caption": "Fig. 4. Sector-wise capital productivity (employment per crore of investment).",
          "kind": "bar",
          "xLabels": [
            "Manufacturing",
            "Agritech",
            "Healthcare",
            "Cleantech",
            "IT/Software",
            "Fintech"
          ],
          "yLabel": "Employment per Rs. 1 crore invested",
          "series": [
            {
              "name": "Employment per Rs. 1 crore",
              "values": [
                38,
                52,
                45,
                32,
                24,
                18
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "findings-summary",
      "heading": "IX. Findings Summary",
      "paragraphs": [
        "The quantitative analysis yields six key findings. (1) Total capital inflows into Gujarat startups grew at approximately 48% CAGR from 2017 to 2024, with private capital growing faster than government disbursements. (2) All investment variables show strong positive correlations with outcome variables (all coefficients above 0.89). (3) The OLS regression model explains over 93% of the variation in startup growth, employment, and revenue. (4) Government schemes have a stronger effect on startup count, while private capital has a stronger effect on employment and revenue. (5) Elasticity estimates confirm the differential effects: government elasticity for startups is 0.82 vs. 0.51 for private capital, while private capital elasticity for employment is 1.12 vs. 0.45 for government. (6) Capital productivity varies substantially across sectors, with agritech and healthcare generating the most employment per unit of capital."
      ]
    },
    {
      "id": "discussion",
      "heading": "X. Discussion",
      "paragraphs": [
        "The quantitative results support a nuanced understanding of investment impact in the Gujarat startup ecosystem. Government schemes and private capital are not substitutes but complements operating at different stages and through different mechanisms. Government schemes lower entry barriers and expand the volume of recognized startups, as reflected in the higher coefficient and elasticity for startup count. Private capital drives scaling, employment, and revenue, as reflected in the higher coefficients and elasticities for those outcomes.",
        "This finding is consistent with Lerner’s (2009) observation that government programs affect firm formation more than later-stage growth, and with Gompers and Lerner’s (2001) analysis of the venture capital cycle showing stage-dependent effects. The high adjusted R2 values indicate that investment variables are strong predictors of ecosystem outcomes, although the analysis does not establish causation and other factors—macro-economic conditions, sectoral trends, and regulatory environment—also contribute.",
        "The sector-wise capital productivity analysis reveals an important policy tension. Sectors that attract the most capital (IT/software, fintech) generate the least employment per unit of investment, while sectors that generate the most employment (agritech, healthcare) attract less capital. This misalignment suggests that pure marketdriven capital allocation may underinvest in employment-intensive sectors, creating a case for targeted policy support."
      ]
    },
    {
      "id": "implications-for-entrepreneurship-studen",
      "heading": "XI. Implications for Entrepreneurship Students",
      "paragraphs": [
        "The quantitative findings carry specific implications for entrepreneurship students. Understand the capital-outcome relationship. Students should learn that different types of capital produce different outcomes: government schemes support formation but private capital drives scaling. A realistic capital strategy sequences these sources rather than relying on one. Sector-specific capital planning. Students entering agritech or healthcare should prepare for longer capital-raising periods but can demonstrate higher employment impact per unit of capital—a useful pitch point with impact-oriented investors. Students in IT/software and fintech will find capital more readily available but face higher competition and lower employment impact claims. Quantitative literacy. Entrepreneurship programmes should embed quantitative skills—regression interpretation, elasticity concepts, capital productivity calculation—so that students can analyse their own ventures and make evidence-based decisions. Capital productivity as a metric. Students should learn to measure and communicate capital productivity in their own ventures, as this metric increasingly informs impact investor decisions. Realistic growth expectations. The elasticity estimates provide benchmarks: a 1% increase in private capital produces approximately 1.12% employment growth, helping students calibrate hiring plans against fundraising outcomes."
      ]
    },
    {
      "id": "policy-implications",
      "heading": "XII. Policy Implications",
      "paragraphs": [
        "The findings have several policy implications. Balanced capital portfolio. Policy should aim for a balanced portfolio of government seed support and private growth capital, since both produce distinct and complementary outcomes. Over-reliance on government schemes produces many startups but limited scaling; over-reliance on private capital restricts entry. Targeted sectoral support. Given the higher capital productivity of agritech and healthcare in employment terms, targeted incentives for these sectors can improve the employment impact of public capital allocation. Quantitative monitoring. The state should adopt regression-based monitoring frameworks that track investment-outcome elasticities over time, enabling adaptive policy design. Stage-appropriate policy. Government schemes should focus on seed and recognition stages where their marginal effect is highest, while facilitation of private capital should focus on growth and late stages where its marginal effect is highest. Curriculum integration. Universities should integrate quantitative ecosystem analysis into entrepreneurship curricula, using the methods applied in this study as teaching tools."
      ]
    },
    {
      "id": "challenges-and-limitations",
      "heading": "XIII. Challenges and Limitations",
      "paragraphs": [],
      "subsections": [
        {
          "id": "challenges",
          "heading": "A. Challenges",
          "paragraphs": [
            "Several challenges affect the quantitative analysis. Data availability: detailed deal-level investment data for Gujarat-based startups is not consistently published, requiring reliance on aggregated estimates and database coverage that may be incomplete. Attribution: distinguishing the effect of investment from other factors—macroeconomic conditions, regulatory changes, sectoral trends—is methodologically difficult with observational data. Endogeneity: investment and outcomes may be jointly determined, with successful startups attracting more investment, creating reverse causality. Small sample: eight annual observations limit the statistical power of the regression analysis. Measurement error: employment and revenue estimates are derived from aggregate sources and may contain reporting errors."
          ]
        },
        {
          "id": "limitations-of-the-study",
          "heading": "B. Limitations of the Study",
          "paragraphs": [
            "This study has several limitations. First, the regression analysis is based on eight annual observations; larger panels or cross-sectional firm-level data would strengthen the analysis. Second, the model does not address endogeneity or causation; the results represent associations rather than causal effects. Third, employment and revenue figures are estimates derived from aggregate sources rather than firm-level surveys. Fourth, the sector-wise productivity analysis relies on sectoral classification that may not fully capture multi-sector operations. Fifth, the period examined ends in 2024; subsequent developments are not captured."
          ]
        }
      ]
    },
    {
      "id": "future-scope",
      "heading": "XIV. Future Scope",
      "paragraphs": [
        "Future research can extend this work in several directions. Firmlevel panel data: constructing a firm-level panel with hundreds of Gujarat-based startups would enable more powerful regression analysis and causal identification. Causal identification: instrumental variable, difference-in-differences, or regression discontinuity designs can address endogeneity and establish causal effects. Comparative state analysis: applying the same quantitative framework to Maharashtra, Karnataka, and Telangana can identify whether the elasticity estimates transfer across contexts. Longitudinal productivity tracking: tracking sector-wise capital productivity over time can reveal whether policy interventions shift productivity patterns. Education impact evaluation: evaluating the effect of quantitative literacy modules in entrepreneurship programmes on student venture outcomes. Real-time monitoring: developing a real-time quantitative monitoring dashboard for the Gujarat startup ecosystem based on the regression framework."
      ]
    },
    {
      "id": "conclusion",
      "heading": "XV. Conclusion",
      "paragraphs": [
        "This paper has presented a quantitative assessment of investment patterns and their economic impact on startup development in Gujarat from 2017 to 2024. The analysis constructed a panel dataset of investment and outcome variables, applied correlation and OLS regression analysis, estimated elasticities, and computed sector-wise capital productivity. The regression model explains over 93% of the variation in startup growth, employment, and revenue, indicating that investment variables are strong predictors of ecosystem outcomes.",
        "The key quantitative findings are: government schemes have a stronger effect on startup count (β = 9.8, η = 0.82), while private capital has a stronger effect on employment (β = 12.7, η = 1.12) and revenue (β = 9.6, η = 0.94). Sector-wise capital productivity is highest in agritech (52 jobs per crore) and healthcare (45), and lowest in fintech (18) and IT/software (24). These findings support a balanced policy approach combining accessible government seed support with deeper private growth capital, targeted support for employment-intensive sectors, and quantitative monitoring of investment-outcome relationships.",
        "For entrepreneurship students, the implications include the need for quantitative literacy, realistic capital planning that sequences government and private sources, sector-specific capital strategies, and the use of capital productivity as a venture metric. For policy, the recommendations include balanced capital portfolio design, targeted sectoral support, stage-appropriate interventions, and the integration of regression-based monitoring into ecosystem management. Further research using firm-level panel data and causal identification methods will strengthen the evidence base and support more effective policy and education design."
      ]
    }
  ],
  "sample": false,
  "received": "",
  "accepted": ""
};
