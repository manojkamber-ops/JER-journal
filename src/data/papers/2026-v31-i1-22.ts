// Vol. 31, No. 1 (2026) — genuine article (Jadav & Patel); the live copy is in Sanity.
// Edit it in Sanity Studio: the website shows the Sanity version and uses this copy only if Sanity is unreachable.
import type { PaperSpec } from "../paper-spec";

export const paper: PaperSpec = {
  "id": "2026-v31-i1-22",
  "title": "An Empirical Assessment of Household Wealth Accumulation, Savings Propensity and Investment Portfolio Behaviour in Rural Central Gujarat",
  "authors": [
    {
      "name": "Dipali Jadav",
      "corresponding": true,
      "role": "Research Scholar",
      "affiliation": {
        "department": "Parul Institute of Commerce, Faculty of Commerce",
        "institution": "Parul University",
        "city": "Vadodara, Gujarat",
        "country": "India"
      }
    },
    {
      "name": "Ashwinkumar Patel",
      "role": "Assistant Professor",
      "title": "Dr.",
      "affiliation": {
        "department": "Parul Institute of Commerce, Faculty of Commerce",
        "institution": "Parul University",
        "city": "Vadodara, Gujarat",
        "country": "India"
      }
    }
  ],
  "abstract": "Rural households in India hold a substantial share of national household wealth, yet their financial behaviour remains less rigorously studied than that of urban households. This paper presents an empirical assessment of household wealth accumulation, savings propensity, and investment portfolio behaviour in rural Central Gujarat, covering districts including Vadodara, Anand, Kheda, Panchmahal, and Dahod. The study is based on a primary survey of 420 rural households selected through stratified multi-stage sampling. The analysis examines three dimensions: (i) the composition and determinants of household wealth, including physical assets (land, housing, gold, livestock) and financial assets (bank deposits, post office savings, insurance, mutual funds); (ii) savings propensity measured as the ratio of annual savings to annual income, analysed across income groups, age cohorts, and education levels; and (iii) investment portfolio behaviour, including asset allocation, risk tolerance, and the influence of financial literacy. The findings indicate that physical assets dominate rural household portfolios, accounting for approximately 78% of total wealth, while financial assets account for approximately 22%. The average savings propensity is approximately 18%, increasing with income but declining in the highest income decile due to higher consumption. Regression analysis shows that income, age, education, financial literacy, and land ownership are statistically significant determinants of savings propensity, with income having the largest marginal effect. The investment portfolio is characterised by strong preference for low-risk assets (bank deposits, gold, post office schemes) and very limited participation in equity and mutual funds, reflecting low financial literacy and limited access to formal financial products. The paper concludes with policy recommendations for strengthening financial inclusion, expanding financial literacy programmes, and developing rural-specific investment products that balance safety with higher returns.",
  "keywords": [
    "Household wealth",
    "savings propensity",
    "investment portfolio",
    "rural Gujarat",
    "empirical assessment",
    "financial literacy",
    "financial inclusion"
  ],
  "jelCodes": [],
  "pages": "1–24",
  "volume": 31,
  "issue": 1,
  "year": 2026,
  "received": "2025-05-28",
  "accepted": "2026-02-03",
  "published": "2026-10-08",
  "publishedOnline": "2026-10-23",
  "citations": 0,
  "downloads": 0,
  "pdfSize": "0.09 MB",
  "type": "Research Article",
  "refs": [
    "Ando, A., & Modigliani, F. (1963). The “life cycle” hypothesis of saving: Aggregate implications and tests. American Economic Review, 53(1), 55–84.",
    "Badarinza, C., Campbell, J. Y., & Ramadorai, T. (2016). What is wrong with Indian household finance? Brookings Institution Global Economy and Development Working Paper.",
    "Binswanger, H. P., & Sillers, D. A. (1986). Risk aversion and credit constraints in farmers’ decision-making: A reinterpretation. Journal of Development Studies, 22(3), 508–525.",
    "Deaton, A. (1991). Saving and liquidity constraints. Econometrica, 59(5), 1221–1248.",
    "Friedman, M. (1957). A theory of the consumption function. Princeton University Press.",
    "Garikipati, S. (2008). The impact of lending to women on household vulnerability and women’s empowerment: Evidence from India. World Development, 36(12), 2620–2642.",
    "National Sample Survey Office. (2019). All India Debt and Investment Survey (AIDIS), 77th Round. Ministry of Statistics and Programme Implementation, Government of India.",
    "Pai, S., & Bhupta, N. (2015). Financial literacy and savings behaviour among rural households in India. International Journal of Rural Studies, 22(2), 1–14.",
    " Reserve Bank of India. (2023). Annual report of the Reserve Bank of India. RBI Publications.",
    "Subramanian, S., & Deaton, A. (1996). The demand for food and calories. Journal of Political Economy, 104(1), 133–162."
  ],
  "body": [
    {
      "id": "introduction",
      "heading": "1. Introduction",
      "paragraphs": [],
      "subsections": [
        {
          "id": "background",
          "heading": "1.1 Background",
          "paragraphs": [
            "Rural households in India hold a substantial share of national household wealth, yet their financial behaviour remains less rigorously studied than that of urban households. Understanding how rural households accumulate wealth, how much they save, and how they allocate their savings across assets is essential for designing effective financial inclusion policies, rural development programmes, and financial literacy initiatives.",
            "Central Gujarat, comprising districts including Vadodara, Anand, Kheda, Panchmahal, and Dahod, represents a distinctive rural context. The region combines relatively prosperous agricultural areas (Anand, Kheda) with more economically diverse and partially tribal districts (Panchmahal, Dahod). This variation makes Central Gujarat a useful setting for examining heterogeneity in household financial behaviour within a single regional context."
          ]
        },
        {
          "id": "problem-statement",
          "heading": "1.2 Problem Statement",
          "paragraphs": [
            "The central problem is that rural household financial behaviour in Central Gujarat has not been empirically assessed with sufficient granularity. Existing national surveys such as the All India Debt and Investment Survey (AIDIS) and the National Family Health Survey (NFHS) provide aggregate state-level data but do not capture district-level variation or the specific determinants of savings and investment decisions. Without granular empirical evidence, policies targeting rural financial inclusion and savings mobilisation may be misdirected."
          ]
        },
        {
          "id": "research-questions",
          "heading": "1.3 Research Questions",
          "paragraphs": [
            "This study addresses four research questions: (1) What is the composition of household wealth in rural Central Gujarat, and how is it distributed across physical and financial assets? (2) What is the level of savings propensity, and how does it vary across income groups, age cohorts, and education levels? (3) What is the structure of investment portfolios, and what factors influence asset allocation decisions? (4) What are the statistically significant determinants of savings propensity and investment behaviour?"
          ]
        },
        {
          "id": "aim-and-objectives",
          "heading": "1.4 Aim and Objectives",
          "paragraphs": [
            "The aim is to empirically assess household wealth accumulation, savings propensity, and investment portfolio behaviour in rural Central Gujarat. The specific objectives are: (i) to measure the composition and distribution of household wealth; (ii) to estimate savings propensity across demographic and economic groups; (iii) to analyse investment portfolio composition and asset allocation patterns; (iv) to identify the determinants of savings propensity through regression analysis; and (v) to derive policy implications for financial inclusion and literacy."
          ]
        },
        {
          "id": "scope-and-contribution",
          "heading": "1.5 Scope and Contribution",
          "paragraphs": [
            "The study covers 420 rural households across five districts of Central Gujarat. The main contributions are: (i) primary survey-based empirical evidence on rural household financial behaviour; (ii) quantification of wealth composition and savings propensity; (iii) regression-based identification of determinants; (iv) analysis of investment portfolio structure; and (v) policy recommendations grounded in the empirical findings."
          ]
        }
      ]
    },
    {
      "id": "literature-review",
      "heading": "2. Literature Review",
      "paragraphs": [],
      "subsections": [
        {
          "id": "household-wealth-accumulation",
          "heading": "2.1 Household Wealth Accumulation",
          "paragraphs": [
            "The literature on household wealth accumulation is grounded in the life-cycle hypothesis (Ando and Modigliani, 1963) and the permanent income hypothesis (Friedman, 1957), both of which predict that households accumulate wealth during working years and decumulate during retirement. In rural developing economies, wealth accumulation is complicated by irregular income flows, reliance on physical assets, and limited access to formal financial products. Deaton (1991) examined saving and liquidity constraints in developing countries, showing that households save buffer-stock wealth to smooth consumption against income volatility. Subramanian and Deaton (1996) studied Indian household data and found strong wealth effects on nutrition and living standards."
          ]
        },
        {
          "id": "savings-propensity",
          "heading": "2.2 Savings Propensity",
          "paragraphs": [
            "Savings propensity—the share of income saved—has been widely studied. The Keynesian framework predicts that marginal propensity to save increases with income. Empirical studies in rural India, including those by the Reserve Bank of India (2023) and the National Sample Survey Office, report average rural savings rates in the range of 15–25%, varying with income, region, and household characteristics. Binswanger and Sillers (1986) examined risk aversion and savings behaviour among rural households, finding that poorer households save a smaller share of income due to subsistence constraints. Pai and Bhupta (2015) found that education and financial literacy are positively associated with savings propensity in Indian rural households."
          ]
        },
        {
          "id": "investment-portfolio-behaviour",
          "heading": "2.3 Investment Portfolio Behaviour",
          "paragraphs": [
            "Investment portfolio behaviour in rural India is characterised by a strong preference for physical assets and low-risk financial products. The All India Debt and Investment Survey (NSSO, 2019) reports that land and gold dominate rural household asset portfolios, while equity and mutual fund participation is minimal. Badarinza, Campbell, and Ramadorai (2016) examined the Indian household savings portfolio and found strong preference for gold and real estate, with limited financial diversification. The Reserve Bank of India (2023) notes that financial inclusion has expanded access to bank accounts but has not yet translated into deep participation in financial investment products."
          ]
        },
        {
          "id": "gujarat-specific-studies",
          "heading": "2.4 Gujarat-Specific Studies",
          "paragraphs": [
            "Gujarat-specific studies on rural household finance are limited. The state’s economic surveys report aggregate savings and credit data but do not examine household-level portfolio behaviour. Studies by academic researchers have examined specific aspects such as the role of self-help groups in women’s savings (Garikipati, 2008) and the impact of agricultural income on rural consumption patterns. However, a comprehensive empirical assessment of wealth, savings, and investment behaviour in rural Central Gujarat is not available in the published literature."
          ]
        },
        {
          "id": "literature-synthesis",
          "heading": "2.5 Literature Synthesis",
          "paragraphs": [
            "The reviewed literature establishes the theoretical and empirical foundations for studying household wealth, savings, and investment behaviour. However, most existing studies either use national-level aggregate data or focus on urban households. Rural Central Gujarat has not been empirically assessed at the household level across all three dimensions—wealth, savings, and investment portfolio—in a single study. This gap motivates the present research."
          ],
          "tables": [
            {
              "id": "table-1",
              "caption": "Table 1. Summary of Reviewed Literature on Household Wealth, Savings, and Investment Behaviour",
              "columns": [
                "Source",
                "Year",
                "Focus",
                "Key Finding"
              ],
              "rows": [
                [
                  "Ando & Modigliani",
                  "1963",
                  "Life-cycle hypothesis",
                  "Households accumulate wealth during working years; decumulate in retirement"
                ],
                [
                  "Friedman",
                  "1957",
                  "Permanent income hypothesis",
                  "Consumption is based on permanent rather than transitory income"
                ],
                [
                  "Deaton",
                  "1991",
                  "Buffer-stock saving",
                  "Households save to smooth consumption against income volatility"
                ],
                [
                  "Subramanian & Deaton",
                  "1996",
                  "Indian household wealth",
                  "Strong wealth effects on nutrition and living standards"
                ],
                [
                  "Binswanger & Sillers",
                  "1986",
                  "Risk and savings",
                  "Poorer households save less due to subsistence constraints"
                ],
                [
                  "Pai & Bhupta",
                  "2015",
                  "Financial literacy and savings",
                  "Education and financial literacy raise savings propensity"
                ],
                [
                  "Badarinza et al.",
                  "2016",
                  "Indian household portfolio",
                  "Strong preference for gold and real estate; limited financial diversification"
                ],
                [
                  "NSSO",
                  "2019",
                  "AIDIS survey",
                  "Land and gold dominate rural asset portfolios; equity participation minimal"
                ]
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "research-gap",
      "heading": "3. Research Gap",
      "paragraphs": [
        "The literature review reveals several gaps. First, most national surveys provide state-level aggregate data without capturing district-level variation within Gujarat. Second, rural Central Gujarat specifically has not been the subject of a comprehensive empirical study covering wealth composition, savings propensity, and investment portfolio in a single framework. Third, the determinants of savings propensity in this region—including the role of financial literacy, land ownership, and education—have not been quantified through regression analysis. Fourth, the investment portfolio behaviour of rural households in Central Gujarat, including their limited participation in formal financial products, has not been systematically documented. Fifth, the heterogeneity across districts within Central Gujarat (prosperous agricultural areas vs. partially tribal areas) has not been examined in relation to financial behaviour."
      ]
    },
    {
      "id": "objectives",
      "heading": "4. Objectives",
      "paragraphs": [
        "The main objectives of this study are: (i) to measure the composition and distribution of household wealth across physical and financial assets in rural Central Gujarat; (ii) to estimate savings propensity across income groups, age cohorts, and education levels; (iii) to analyse investment portfolio composition and asset allocation patterns; (iv) to identify the statistically significant determinants of savings propensity through regression analysis; and (v) to derive policy implications for financial inclusion, financial literacy, and rural investment product design."
      ]
    },
    {
      "id": "research-methodology",
      "heading": "5. Research Methodology",
      "paragraphs": [],
      "subsections": [
        {
          "id": "research-design",
          "heading": "5.1 Research Design",
          "paragraphs": [
            "The study adopts an empirical, quantitative research design based on primary survey data. A cross-sectional survey of rural households was conducted using a structured questionnaire. The design supports descriptive analysis of wealth and portfolio composition, as well as inferential analysis through regression to identify determinants of savings propensity."
          ],
          "figures": [
            {
              "id": "figure-1",
              "caption": "Figure 1. Research methodology framework.",
              "kind": "image",
              "image": {
                "url": "https://cdn.sanity.io/images/imuzzo9u/production/57b6a6796410c1099cbc184c8547376cb2f7152f-460x1024.png",
                "width": 460,
                "height": 1024
              },
              "xLabels": [],
              "series": []
            }
          ]
        },
        {
          "id": "sampling-design",
          "heading": "5.2 Sampling Design",
          "paragraphs": [
            "A stratified multi-stage sampling design was used. In the first stage, five districts of Central Gujarat were selected: Vadodara, Anand, Kheda, Panchmahal, and Dahod. In the second stage, two talukas were selected from each district (10 talukas total). In the third stage, three villages were selected from each taluka (30 villages total). In the fourth stage, households were selected using systematic random sampling with a sampling interval based on village electoral roll size. The target sample was 450 households; 420 completed questionnaires were obtained, yielding a response rate of 93.3%."
          ]
        },
        {
          "id": "data-collection",
          "heading": "5.3 Data Collection",
          "paragraphs": [
            "Data were collected through face-to-face household interviews using a structured questionnaire. The questionnaire captured: (i) household demographic characteristics (age, education, family size, occupation); (ii) income from all sources (agriculture, wages, business, remittances); (iii) physical assets (land, housing, gold, livestock, agricultural equipment); (iv) financial assets (bank deposits, post office savings, insurance, mutual funds, equities, bonds); (v) expenditure patterns; (vi) savings behaviour and propensity; equity participation minimal (vii) financial literacy measured through a 10-item index; and (viii) investment preferences and risk tolerance."
          ]
        },
        {
          "id": "method-of-analysis",
          "heading": "5.4 Method of Analysis",
          "paragraphs": [
            "The analysis uses three methods. Descriptive statistics summarise wealth composition, savings propensity, and portfolio allocation across groups. Comparative analysis examines variation across districts, income groups, age cohorts, and education levels. OLS regression identifies determinants of savings propensity:",
            "SP_i = α + β1·Y_i + β2·A_i + β3·E_i + β4·FL_i + β5·LO_i + ε_i      (1)",
            "where SPi is the savings propensity of household i (savings as a proportion of income), Yi is annual income, Ai is age of household head, Ei is education level, F Li is financial literacy score, LOi is land ownership (binary), and εi is the error term."
          ]
        }
      ]
    },
    {
      "id": "sample-profile",
      "heading": "6. Sample Profile",
      "paragraphs": [
        "Table 2 summarises the sample profile. The sample is predominantly male-headed (88%), reflecting rural household structure, with agriculture as the primary occupation (58%). Education levels are relatively low, with 24% of household heads illiterate and only 17% having higher secondary or graduate education. The average annual household income of Rs. 1,38,000 is consistent with rural Gujarat income levels reported in national surveys."
      ],
      "tables": [
        {
          "id": "table-2",
          "caption": "Table 2. Sample Profile of Surveyed Households",
          "columns": [
            "Characteristic",
            "Distribution"
          ],
          "rows": [
            [
              "Total households",
              "420"
            ],
            [
              "Districts covered",
              "5 (Vadodara, Anand, Kheda, Panchmahal, Dahod)"
            ],
            [
              "Response rate",
              "93.3%"
            ],
            [
              "Gender of head (% male / female)",
              "88 / 12"
            ],
            [
              "Average household size",
              "5.2 members"
            ],
            [
              "Average age of household head",
              "47 years"
            ],
            [
              "Education: illiterate",
              "24%"
            ],
            [
              "Education: primary",
              "31%"
            ],
            [
              "Education: secondary",
              "28%"
            ],
            [
              "Education: higher secondary / graduate",
              "17%"
            ],
            [
              "Primary occupation: agriculture",
              "58%"
            ],
            [
              "Primary occupation: wage labour",
              "19%"
            ],
            [
              "Primary occupation: business / services",
              "23%"
            ],
            [
              "Average annual household income",
              "Rs. 1,38,000"
            ]
          ]
        }
      ]
    },
    {
      "id": "analysis-and-findings",
      "heading": "7. Analysis and Findings",
      "paragraphs": [],
      "subsections": [
        {
          "id": "household-wealth-composition",
          "heading": "7.1 Household Wealth Composition",
          "paragraphs": [
            "Figure 2 presents the composition of household wealth across physical and financial asset categories. Physical assets dominate, accounting for approximately 78% of total household wealth, while financial assets account for approximately 22%.",
            "Agricultural land is the largest single asset category (38%), followed by housing (22%) and gold (11%). Among financial assets, bank deposits (12%) are the largest, while post office savings (5%), insurance (3%), and mutual funds/equity (2%) are minimal. The dominance of physical assets reflects the rural context where land and housing are both productive and status assets, and gold serves as a traditional store of value and emergency reserve."
          ],
          "figures": [
            {
              "id": "figure-2",
              "caption": "Figure 2. Composition of household wealth in rural Central Gujarat.",
              "kind": "image",
              "image": {
                "url": "https://cdn.sanity.io/images/imuzzo9u/production/886c16dd9fc8a5d4a42a23efe40b8b1f6766df18-1044x548.png",
                "width": 1044,
                "height": 548
              },
              "xLabels": [],
              "series": []
            }
          ]
        },
        {
          "id": "savings-propensity",
          "heading": "7.2 Savings Propensity",
          "paragraphs": [
            "Figure 3 shows the average savings propensity (savings as a percentage of income) across income quintiles.",
            "The savings propensity rises from 8% in the lowest income quintile (Q1) to 23% in the fourth quintile (Q4), but declines to 17% in the highest quintile (Q5). This pattern is consistent with the life-cycle hypothesis and the Engel curve: poorer households save less due to subsistence consumption constraints, while the highest income group exhibits higher consumption and investment in durable assets. The overall average savings propensity is approximately 18%, which is within the range reported for rural India in national surveys."
          ],
          "figures": [
            {
              "id": "figure-3",
              "caption": "Figure 3. Average savings propensity by income quintile.",
              "kind": "image",
              "image": {
                "url": "https://cdn.sanity.io/images/imuzzo9u/production/610bcfa1039872663d6272fec73126ecb1d29b6a-956x602.png",
                "width": 956,
                "height": 602
              },
              "xLabels": [],
              "series": []
            }
          ]
        },
        {
          "id": "investment-portfolio-composition",
          "heading": "7.3 Investment Portfolio Composition",
          "paragraphs": [
            "Table 3 presents the investment portfolio composition across asset categories and risk classes.",
            "The investment portfolio is heavily weighted toward low-risk assets. Bank deposits (31%), gold (24%), and post office schemes (14%) together account for 69% of the portfolio. Medium and high-risk assets—mutual funds (4%) and equity (2%)—together account for only 6%. This reflects low financial literacy, limited exposure to market-based financial products, and a cultural preference for tangible and government-backed assets."
          ],
          "tables": [
            {
              "id": "table-3",
              "caption": "Table 3. Investment Portfolio Composition by Asset Class and Risk",
              "columns": [
                "Asset Class",
                "Share (%)",
                "Risk Class"
              ],
              "rows": [
                [
                  "Bank deposits (SB, FD)",
                  "31",
                  "Low"
                ],
                [
                  "Gold",
                  "24",
                  "Low–Medium"
                ],
                [
                  "Post office schemes",
                  "14",
                  "Low"
                ],
                [
                  "Agricultural land",
                  "12",
                  "Medium"
                ],
                [
                  "Livestock",
                  "8",
                  "Medium"
                ],
                [
                  "Insurance",
                  "5",
                  "Low"
                ],
                [
                  "Mutual funds",
                  "4",
                  "Medium–High"
                ],
                [
                  "Equity / shares",
                  "2",
                  "High"
                ]
              ]
            }
          ]
        },
        {
          "id": "regression-results-determinants-of-savin",
          "heading": "7.4 Regression Results: Determinants of Savings Propensity",
          "paragraphs": [
            "Table 4 presents the OLS regression results for the determinants of savings propensity.",
            "The regression model explains 61% of the variation in savings propensity (adjusted R2 = 0.61). All five explanatory variables are statistically significant. Income has the largest marginal effect: a Rs. 1 lakh increase in annual income is associated with a 3.8 percentage point increase in savings propensity. Financial literacy is also highly significant: a one-point increase in the 10-point financial literacy index is associated with a 0.9 percentage point increase in savings propensity. Land ownership adds 2.4 percentage points to savings propensity, reflecting the greater asset base and income stability of landowning households. Age and education are significant but with smaller marginal effects."
          ],
          "tables": [
            {
              "id": "table-4",
              "caption": "Table 4. OLS Regression Results: Determinants of Savings Propensity",
              "columns": [
                "Variable",
                "Coefficient",
                "Std. Error"
              ],
              "rows": [
                [
                  "α (intercept)",
                  "0.042",
                  "0.018"
                ],
                [
                  "β1: Income (Rs. lakh)",
                  "0.038***",
                  "0.004"
                ],
                [
                  "β2: Age (years)",
                  "0.001**",
                  "0.0004"
                ],
                [
                  "β3: Education (1–4 scale)",
                  "0.012**",
                  "0.005"
                ],
                [
                  "β4: Financial literacy (0–10)",
                  "0.009***",
                  "0.002"
                ],
                [
                  "β5: Land ownership (1/0)",
                  "0.024**",
                  "0.010"
                ],
                [
                  "N",
                  "420",
                  ""
                ],
                [
                  "Adj. R²",
                  "0.61",
                  ""
                ],
                [
                  "F-statistic",
                  "76.4 (p < 0.001)",
                  ""
                ]
              ],
              "note": "*p<0.05, **p<0.01, ***p<0.001."
            }
          ]
        },
        {
          "id": "findings-summary",
          "heading": "7.5 Findings Summary",
          "paragraphs": [
            "The analysis yields six key findings. (1) Physical assets dominate household wealth (78%), with agricultural land (38%), housing (22%), and gold (11%) as the largest categories. (2) Financial asset participation is limited, with mutual funds and equity together accounting for only 2% of wealth. (3) The average savings propensity is approximately 18%, rising with income up to the fourth quintile (23%) and declining in the highest quintile (17%). (4) The investment portfolio is heavily concentrated in low-risk assets (69% in bank deposits, gold, and post office schemes). (5) Income, financial literacy, land ownership, age, and education are statistically significant determinants of savings propensity, with income and financial literacy having the strongest effects. (6) The regression model explains 61% of the variation in savings propensity, indicating that household characteristics are meaningful predictors of financial behaviour."
          ]
        }
      ]
    },
    {
      "id": "discussion",
      "heading": "8. Discussion",
      "paragraphs": [
        "The findings paint a picture of rural household financial behaviour in Central Gujarat that is consistent with broader rural Indian patterns but with specific regional features. The dominance of physical assets reflects the agricultural context: land is both a productive asset and a store of value, while housing and gold serve as security and status assets. The limited participation in financial products—particularly mutual funds and equity—reflects low financial literacy, limited exposure to market-based products, and a cultural preference for tangible assets.",
        "The savings propensity pattern—rising with income and then declining in the highest quintile—is consistent with both the life-cycle hypothesis and the empirical observation that wealthier rural households shift from financial savings to investment in physical assets (land, housing construction, business expansion). This shift is not necessarily irrational: in rural contexts with limited financial product access and trust deficits, physical assets offer perceived security that financial assets do not.",
        "The regression results highlight the importance of financial literacy as a determinant of savings propensity. A one-point increase in financial literacy (on a 10-point scale) produces nearly a percentage point increase in savings propensity, an effect comparable in magnitude to a Rs. 1 lakh increase in income. This finding has direct policy implications: financial literacy programmes may be as effective as income growth in raising rural savings rates, and they are typically cheaper to implement at scale."
      ],
      "subsections": [
        {
          "id": "district-level-heterogeneity",
          "heading": "8.1 District-Level Heterogeneity",
          "paragraphs": [
            "District-level analysis (not detailed here for brevity) reveals notable heterogeneity. Anand and Kheda, the more prosperous agricultural districts, show higher average wealth and savings propensity. Panchmahal and Dahod, which include partially tribal areas, show lower wealth accumulation and greater reliance on wage income. Vadodara occupies an intermediate position. This heterogeneity implies that policy interventions should be tailored to district-level conditions rather than applied uniformly across Central Gujarat."
          ]
        }
      ]
    },
    {
      "id": "policy-implications",
      "heading": "9. Policy Implications",
      "paragraphs": [
        "The findings have several policy implications. Strengthen financial literacy. Given the strong statistical effect of financial literacy on savings propensity, rural financial literacy programmes should be expanded, with content tailored to rural contexts (savings products, insurance, basic investment concepts). Expand financial inclusion depth. While bank account access has expanded, participation in financial investment products remains minimal. Policy should focus on converting account access into product participation through simplified products, agent networks, and trust-building. Develop rural-specific investment products. Products that combine safety with modestly higher returns than bank deposits—such as rural-targeted mutual fund schemes or postal savings variants—can help shift some savings from low-yield to higher-yield instruments without exposing households to excessive risk. Recognise the role of gold. Gold remains a major household asset and savings vehicle. Policy should acknowledge this role rather than attempting to displace it, while encouraging complementary financial savings. Tailor interventions by district. Given district-level heterogeneity, financial inclusion and literacy interventions should be calibrated to local economic conditions rather than applied uniformly. Support landless households. Landless households show lower savings propensity; targeted programmes such as matched savings accounts or subsidised insurance can improve their financial resilience."
      ]
    },
    {
      "id": "challenges-and-limitations",
      "heading": "10. Challenges and Limitations",
      "paragraphs": [],
      "subsections": [
        {
          "id": "challenges",
          "heading": "10.1 Challenges",
          "paragraphs": [
            "Several challenges affect the study. Self-reporting bias: household surveys on income, wealth, and savings rely on self-reported data, which may be affected by recall error and social desirability bias. Hidden assets: some assets, particularly gold held in private and informal savings, may be underreported. Cross-sectional design: the study captures behaviour at a single point in time and cannot track changes over time or establish causal relationships. Sample size: while 420 households provide meaningful statistical power, a larger sample would enable finer district-level analysis. Seasonal variation: agricultural income is seasonal, and a single-round survey may not fully capture annual income variability."
          ]
        },
        {
          "id": "limitations-of-the-study",
          "heading": "10.2 Limitations of the Study",
          "paragraphs": [
            "This study has several limitations. First, the cross-sectional design limits causal inference; the regression results represent associations rather than causal effects. Second, income and wealth are self-reported and may contain reporting error. Third, the study covers five districts; findings may not generalise to other parts of Gujarat or India without replication. Fourth, the financial literacy index is a researcher-constructed measure and may not fully capture the multidimensional nature of financial literacy. Fifth, the study does not examine the role of informal credit and debt, which are important in rural household finance."
          ]
        }
      ]
    },
    {
      "id": "future-scope",
      "heading": "11. Future Scope",
      "paragraphs": [
        "Future research can extend this work in several directions. Longitudinal panel study: following the same households over several years can capture dynamics in wealth accumulation and savings behaviour and enable causal analysis. Larger sample: expanding the sample to include more districts and a larger number of households per district would strengthen statistical power and enable finer district-level analysis. Informal credit and debt: examining the interaction between savings, investment, and informal credit can provide a fuller picture of rural household finance. Digital financial services: as digital payment and investment platforms penetrate rural areas, studying their effect on savings and portfolio behaviour is a priority. Comparative analysis: comparing rural Central Gujarat with rural South Gujarat, Saurashtra, and Kutch can identify regional patterns and transferable policy lessons. Women’s financial behaviour: a focused study on women-headed households and women’s savings behaviour (including self-help group participation) would address an important dimension underrepresented in this study."
      ]
    },
    {
      "id": "conclusion",
      "heading": "12. Conclusion",
      "paragraphs": [
        "This paper has presented an empirical assessment of household wealth accumulation, savings propensity, and investment portfolio behaviour in rural Central Gujarat, based on a primary survey of 420 households across five districts. The findings indicate that physical assets dominate household wealth (78%), with agricultural land, housing, and gold as the largest categories. Financial asset participation is limited, with bank deposits as the primary financial asset and mutual funds and equity accounting for only 2% of wealth.",
        "The average savings propensity is approximately 18%, rising with income up to the fourth quintile (23%) and declining in the highest quintile (17%), consistent with the life-cycle hypothesis and the rural pattern of shifting from financial to physical savings at higher income levels. The investment portfolio is heavily concentrated in low-risk assets, reflecting low financial literacy and limited exposure to market-based products.",
        "The OLS regression model explains 61% of the variation in savings propensity, with income, financial literacy, land ownership, age, and education as statistically significant determinants. Income has the largest marginal effect, followed by financial literacy, whose effect is comparable in magnitude to a Rs. 1 lakh increase in income. This finding highlights the policy importance of financial literacy programmes as a cost-effective lever for raising rural savings.",
        "The policy implications include strengthening financial literacy, deepening financial inclusion beyond account access to product participation, developing rural-specific investment products, recognising the role of gold, tailoring interventions by district, and supporting landless households. Further research using longitudinal panels, larger samples, and broader scope will strengthen the evidence base and support more effective rural financial policy and education design."
      ]
    }
  ],
  "sample": false
};
