// Vol. 31, No. 1 (2026) — genuine article (Jadav & Patel); the live copy is in Sanity.
// Edit it in Sanity Studio: the website shows the Sanity version and uses this copy only if Sanity is unreachable.
import type { PaperSpec } from "../paper-spec";

export const paper: PaperSpec = {
  "id": "2026-v31-i1-23",
  "title": "Income Elasticity of Savings, Risk Preferences and Financial Asset Allocation among Rural Households: An Econometric Analysis of Central Gujarat",
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
  "abstract": "Understanding how rural households respond to income changes in their savings behaviour, how they perceive and tolerate financial risk, and how they allocate their savings across financial assets is central to designing effective rural financial policy. This paper presents an econometric analysis of income elasticity of savings, risk preferences, and financial asset allocation among rural households in Central Gujarat, covering Vadodara, Anand, Kheda, Panchmahal, and Dahod districts. The study is based on a primary survey of 480 rural households selected through stratified multi-stage sampling. Three sets of econometric analyses are conducted. First, income elasticity of savings is estimated using a loglog regression model, yielding an elasticity of approximately 1.24, indicating that savings are income-elastic: a 1% increase in income is associated with approximately a 1.24% increase in savings. Second, risk preferences are measured using an experimental lottery-choice framework and a self-reported risk tolerance scale, with households classified into risk-averse, risk-neutral, and risk-seeking categories. The findings indicate that approximately 71% of rural households are risk-averse, 22% are risk-neutral, and only 7% are risk-seeking. Third, financial asset allocation is modelled using a multinomial logit framework that examines how income, education, financial literacy, age, and risk preferences influence the probability of holding different asset categories (bank deposits, post office schemes, insurance, mutual funds, and equity). The results show that income and financial literacy significantly increase the probability of holding higher-risk financial assets, while risk aversion significantly reduces it. The paper concludes that rural household financial behaviour is responsive to income changes but constrained by widespread risk aversion and low financial literacy, limiting diversification into higher-return financial assets. Policy recommendations focus on financial literacy expansion, rural-specific low-risk investment products, and graduated exposure mechanisms that help risk-averse households move gradually toward diversified portfolios.",
  "keywords": [
    "Income elasticity of savings",
    "risk preferences",
    "financial asset allocation",
    "rural Central Gujarat",
    "econometric analysis",
    "multinomial logit"
  ],
  "jelCodes": [],
  "pages": "1–24",
  "volume": 31,
  "issue": 1,
  "year": 2026,
  "published": "2026-10-08",
  "publishedOnline": "2026-11-09",
  "citations": 0,
  "downloads": 0,
  "pdfSize": "0.11 MB",
  "type": "Research Article",
  "refs": [
    "Ando, A., & Modigliani, F. (1963). The “life cycle” hypothesis of saving: Aggregate implications and tests. American Economic Review, 53(1), 55–84.",
    "Arrow, K. J. (1971). Essays in the theory of risk-bearing. Markham Publishing Company.",
    "Badarinza, C., Campbell, J. Y., & Ramadorai, T. (2016). What is wrong with Indian household finance? Brookings Institution Global Economy and Development Working Paper.",
    "Binswanger, H. P., & Sillers, D. A. (1986). Risk aversion and credit constraints in farmers’ decision-making: A reinterpretation. Journal of Development Studies, 22(3), 508–525.",
    "Deaton, A. (1991). Saving and liquidity constraints. Econometrica, 59(5), 1221–1248.",
    "Friedman, M. (1957). A theory of the consumption function. Princeton University Press.",
    "Holt, C. A., & Laury, S. K. (2002). Risk aversion and incentive effects. American Economic Review, 92(5), 1644–1655.",
    "Markowitz, H. (1952). Portfolio selection. Journal of Finance, 7(1), 77–91.",
    "McFadden, D. (1974). Conditional logit analysis of qualitative choice behavior. In P. Zarembka (Ed.), Frontiers in Econometrics (pp. 105–142). Academic Press.",
    "National Sample Survey Office. (2019). All India Debt and Investment Survey (AIDIS), 77th Round. Ministry of Statistics and Programme Implementation, Government of India.",
    "Pai, S., & Bhupta, N. (2015). Financial literacy and savings behaviour among rural households in India. International Journal of Rural Studies, 22(2), 1–14.",
    "Pratt, J. W. (1964). Risk aversion in the small and in the large. Econometrica, 32(1–2), 122–136.",
    "Reserve Bank of India. (2023). Annual report of the Reserve Bank of India. RBI Publications.",
    "Subramanian, S., & Deaton, A. (1996). The demand for food and calories. Journal of Political Economy, 104(1), 133–162.",
    "Tanaka, T., Camerer, C. F., & Nguyen, Q. (2010). Risk and time preferences: Linking experimental and household survey data from Vietnam. American Economic Review, 100(1), 557– 571."
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
            "Understanding how rural households respond to income changes in their savings behaviour, how they perceive and tolerate financial risk, and how they allocate their savings across financial assets is central to designing effective rural financial policy. Rural household finance in India is characterised by high reliance on physical assets, limited participation in formal financial products, and substantial variation in risk tolerance. Central Gujarat, comprising districts including Vadodara, Anand, Kheda, Panchmahal, and Dahod, offers a useful setting for examining these dimensions because it combines relatively prosperous agricultural areas with economically diverse and partially tribal districts.",
            "The econometric analysis of rural household financial behaviour requires estimating three relationships: the responsiveness of savings to income (income elasticity), the distribution and determinants of risk preferences, and the factors that influence allocation across financial asset categories. Each of these has been studied in isolation, but integrated econometric assessment in the Central Gujarat context is limited."
          ]
        },
        {
          "id": "problem-statement",
          "heading": "1.2 Problem Statement",
          "paragraphs": [
            "The central problem is that rural household financial behaviour in Central Gujarat has not been econometrically assessed across all three dimensions—income elasticity, risk preferences, and asset allocation—in a single framework. Without such analysis, financial product design, inclusion strategies, and literacy programmes cannot be precisely targeted. Income elasticity estimates inform how savings will respond to income growth; risk preference distributions inform product risk design; and asset allocation determinants inform which interventions can shift portfolio composition."
          ]
        },
        {
          "id": "research-questions",
          "heading": "1.3 Research Questions",
          "paragraphs": [
            "This study addresses four research questions: (1) What is the income elasticity of savings among rural households in Central Gujarat, and does it vary across income groups? (2) How are risk preferences distributed, and what household characteristics determine risk tolerance? (3) What factors influence the allocation of savings across financial asset categories? (4) How do risk preferences interact with income and financial literacy in shaping asset allocation decisions?"
          ]
        },
        {
          "id": "aim-and-objectives",
          "heading": "1.4 Aim and Objectives",
          "paragraphs": [
            "The aim is to econometrically analyse income elasticity of savings, risk preferences, and financial asset allocation among rural households in Central Gujarat. The specific objectives are: (i) to estimate income elasticity of savings using a log-log regression model; (ii) to measure and classify risk preferences using an experimental lottery framework; (iii) to model financial asset allocation determinants using a multinomial logit framework; and (iv) to derive policy implications for rural financial product design, inclusion, and literacy."
          ]
        },
        {
          "id": "scope-and-contribution",
          "heading": "1.5 Scope and Contribution",
          "paragraphs": [
            "The study covers 480 rural households across five districts of Central Gujarat. The main contributions are: (i) econometric estimates of income elasticity of savings in a rural Indian context; (ii) experimental measurement of risk preferences; (iii) multinomial logit modelling of asset allocation determinants; and (iv) integrated analysis linking the three dimensions. The study is based on primary survey data and econometric modelling."
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
          "id": "income-elasticity-of-savings",
          "heading": "2.1 Income Elasticity of Savings",
          "paragraphs": [
            "The concept of income elasticity of savings is rooted in the Keynesian framework, which predicts that the marginal propensity to save increases with income, implying an elasticity greater than one. The life-cycle hypothesis (Ando and Modigliani, 1963) and the permanent income hypothesis (Friedman, 1957) offer more nuanced predictions, suggesting that savings responsiveness depends on whether income changes are perceived as permanent or transitory. Empirical estimates of income elasticity of savings in developing countries vary widely, from less than one in subsistence contexts to greater than two in higherincome rural households (Deaton, 1991; Subramanian and Deaton, 1996). For rural India, the Reserve Bank of India (2023) reports aggregate savings rates but does not provide household-level elasticity estimates."
          ]
        },
        {
          "id": "risk-preferences-in-rural-households",
          "heading": "2.2 Risk Preferences in Rural Households",
          "paragraphs": [
            "Risk preferences are central to financial decisionmaking. Arrow (1971) and Pratt (1964) established the formal measurement of risk aversion, showing that concave utility functions imply risk-averse behaviour. Experimental methods for measuring risk preferences, including the Holt and Laury (2002) lottery-choice task, have been widely applied in developing country contexts. Binswanger and Sillers (1986) examined risk aversion among rural Indian households and found high levels of risk aversion, particularly among poorer households. Tanaka, Camerer, and Nguyen (2010) measured risk preferences in Vietnamese villages using experimental methods and found substantial risk aversion correlated with income and wealth."
          ]
        },
        {
          "id": "financial-asset-allocation",
          "heading": "2.3 Financial Asset Allocation",
          "paragraphs": [
            "Financial asset allocation has been modelled using both portfolio theory (Markowitz, 1952) and discrete choice frameworks. Badarinza, Campbell, and Ramadorai (2016) examined the Indian household savings portfolio and found strong preference for gold and real estate, with limited financial diversification. The multinomial logit model (McFadden, 1974) has been used to model asset choice in several studies. Pai and Bhupta (2015) found that education and financial literacy are positively associated with financial asset diversification in Indian rural households. The NSSO All India Debt and Investment Survey (2019) reports aggregate portfolio patterns but does not conduct econometric analysis of allocation determinants at the household level."
          ]
        },
        {
          "id": "literature-synthesis",
          "heading": "2.4 Literature Synthesis",
          "paragraphs": [
            "The reviewed literature establishes the theoretical and methodological foundations for analysing income elasticity, risk preferences, and asset allocation. However, integrated econometric analysis of all three dimensions in the Central Gujarat rural context is absent. This gap motivates the present study."
          ],
          "tables": [
            {
              "id": "table-1",
              "caption": "Table 1. Summary of Reviewed Literature on Income Elasticity, Risk Preferences, and Asset Allocation",
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
                  "Savings responsiveness depends on life stage and expected income"
                ],
                [
                  "Friedman",
                  "1957",
                  "Permanent income hypothesis",
                  "Savings respond to permanent rather than transitory income"
                ],
                [
                  "Deaton",
                  "1991",
                  "Buffer-stock saving",
                  "Poor households save less; high income volatility affects elasticity"
                ],
                [
                  "Arrow",
                  "1971",
                  "Risk aversion theory",
                  "Concave utility implies risk-averse behaviour"
                ],
                [
                  "Pratt",
                  "1964",
                  "Risk aversion measurement",
                  "Established formal measures of absolute and relative risk aversion"
                ],
                [
                  "Holt & Laury",
                  "2002",
                  "Experimental risk measurement",
                  "Lottery-choice task provides valid risk preference measurement"
                ],
                [
                  "Binswanger & Sillers",
                  "1986",
                  "Risk aversion in rural India",
                  "High risk aversion among rural households, especially poorer ones"
                ],
                [
                  "Markowitz",
                  "1952",
                  "Portfolio theory",
                  "Diversification balances risk and return based on preferences"
                ],
                [
                  "McFadden",
                  "1974",
                  "Multinomial logit",
                  "Discrete choice framework for modelling category selection"
                ],
                [
                  "Badarinza et al.",
                  "2016",
                  "Indian household portfolio",
                  "Strong preference for gold and real estate; limited diversification"
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
        "The literature review reveals several gaps. First, household-level income elasticity of savings estimates for rural Central Gujarat are not available in the published literature. Second, experimental measurement of risk preferences in this region has not been conducted, with existing Indian studies focusing on other regions. Third, econometric modelling of financial asset allocation determinants—using multinomial logit or similar frameworks—has not been applied to Central Gujarat rural households. Fourth, the interaction between risk preferences, income, and financial literacy in shaping asset allocation has not been examined in an integrated framework for this region. Fifth, district-level heterogeneity within Central Gujarat has not been analysed in relation to these three dimensions."
      ]
    },
    {
      "id": "objectives",
      "heading": "4. Objectives",
      "paragraphs": [
        "The main objectives are: (i) to estimate income elasticity of savings using a log-log regression model; (ii) to measure and classify risk preferences using an experimental lotterychoice framework; (iii) to model the determinants of financial asset allocation using a multinomial logit framework; and (iv) to derive policy implications for rural financial product design, inclusion, and literacy."
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
            "The study adopts an econometric research design using primary survey data. A cross-sectional survey of rural households was conducted using a structured questionnaire that captured income, savings, financial asset holdings, demographic characteristics, and experimental risk preference measures."
          ],
          "figures": [
            {
              "id": "figure-1",
              "caption": "Figure 1. Research methodology framework.",
              "kind": "image",
              "image": {
                "url": "https://cdn.sanity.io/images/imuzzo9u/production/2a78cd8b6fa27b204b12354adcd2553a90860971-460x1026.png",
                "width": 460,
                "height": 1026
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
            "A stratified multi-stage sampling design was used. Five districts of Central Gujarat were selected: Vadodara, Anand, Kheda, Panchmahal, and Dahod. Two talukas were selected from each district (10 talukas), three villages from each taluka (30 villages), and households through systematic random sampling. The target sample was 500 households; 480 completed questionnaires were obtained, yielding a response rate of 96%."
          ]
        },
        {
          "id": "variables",
          "heading": "5.3 Variables",
          "paragraphs": [
            "The analysis uses the following variables. Dependent variables: savings amount (Si) for elasticity estimation; risk preference category (Ri ∈ {averse, neutral, seeking}) for risk analysis; primary financial asset category (Ai ∈ {deposits, post office, insurance, mutual funds, equity}) for allocation modelling. Independent variables: annual income (Yi), age (Ai), education (Ei, 1–4 scale), financial literacy (F Li, 0–10 index), land ownership (LOi, binary), district (Di), and risk preference category (for allocation model)."
          ]
        },
        {
          "id": "econometric-models",
          "heading": "5.4 Econometric Models",
          "paragraphs": [
            "Three econometric models are estimated.",
            "Model 1: Income Elasticity of Savings (log-log OLS).",
            "ln S_i = α + β·ln Y_i + γ·X_i + ε_i      (1)",
            "where Si is annual savings, Yi is annual income, Xi is a vector of control variables (age, education, family size), and β is the income elasticity of savings.",
            "Model 2: Risk Preference Determinants (Ordered Probit).",
            "R*_i = δ·Z_i + μ_i      (2)",
            "where R*_i is a latent risk tolerance index, Zi is a vector of determinants (income, age, education, land ownership, district), and µi is the error term. The observed category Ri is determined by threshold values of R*_i.",
            "Model 3: Financial Asset Allocation (Multinomial Logit).",
            "P(A_i = j) = exp(θ_j·W_i) / Σ_{k=1..J} exp(θ_k·W_i)      (3)",
            "where Ai is the primary financial asset category, Wi is a vector of determinants (income, age, education, financial literacy, risk preference, land ownership), and θj are category-specific coefficients."
          ]
        }
      ]
    },
    {
      "id": "income-elasticity-of-savings",
      "heading": "6. Income Elasticity of Savings",
      "paragraphs": [],
      "subsections": [
        {
          "id": "descriptive-savings-patterns",
          "heading": "6.1 Descriptive Savings Patterns",
          "paragraphs": [
            "Table 2 presents the descriptive statistics for income and savings across income quintiles.",
            "The savings rate rises from 7.9% in the lowest quintile to 23.3% in the fourth quintile, then declines slightly to 18.6% in the highest quintile. The decline in the highest quintile reflects the shift from financial savings to investment in physical assets (land, housing, business expansion) at higher income levels."
          ],
          "tables": [
            {
              "id": "table-2",
              "caption": "Table 2. Income and Savings by Income Quintile",
              "columns": [
                "Quintile",
                "Avg. Income (Rs.)",
                "Avg. Savings (Rs.)",
                "Savings Rate"
              ],
              "rows": [
                [
                  "Q1 (lowest)",
                  "48,200",
                  "3,800",
                  "7.9%"
                ],
                [
                  "Q2",
                  "86,500",
                  "12,800",
                  "14.8%"
                ],
                [
                  "Q3",
                  "132,400",
                  "25,800",
                  "19.5%"
                ],
                [
                  "Q4",
                  "198,600",
                  "46,200",
                  "23.3%"
                ],
                [
                  "Q5 (highest)",
                  "348,200",
                  "64,800",
                  "18.6%"
                ],
                [
                  "All",
                  "162,780",
                  "30,680",
                  "18.8%"
                ]
              ]
            }
          ]
        },
        {
          "id": "elasticity-estimation-results",
          "heading": "6.2 Elasticity Estimation Results",
          "paragraphs": [
            "Table 3 presents the log-log OLS regression results for income elasticity of savings.",
            "The estimated income elasticity of savings is β = 1.24, which is statistically significant at the 0.1% level. This indicates that savings are income-elastic: a 1% increase in income is associated with approximately a 1.24% increase in savings. Education has a positive significant effect, while family size has a negative significant effect. The model explains 74% of the variation in log savings (adjusted R2 = 0.74).",
            "Figure 2 plots the observed income-savings relationship on log-log axes with the fitted elasticity curve. The relationship is strongly positive and convex, visually confirming the income-elastic estimate of 1.24."
          ],
          "tables": [
            {
              "id": "table-3",
              "caption": "Table 3. Income Elasticity of Savings: Log-Log OLS Regression",
              "columns": [
                "Variable",
                "Coefficient",
                "Std. Error"
              ],
              "rows": [
                [
                  "α (intercept)",
                  "–2.84***",
                  "0.42"
                ],
                [
                  "β: ln Y (income)",
                  "1.24***",
                  "0.08"
                ],
                [
                  "γ1: Age",
                  "0.002",
                  "0.003"
                ],
                [
                  "γ2: Education (1–4)",
                  "0.14**",
                  "0.05"
                ],
                [
                  "γ3: Family size",
                  "–0.06**",
                  "0.02"
                ],
                [
                  "N",
                  "480",
                  ""
                ],
                [
                  "Adj. R²",
                  "0.74",
                  ""
                ],
                [
                  "F-statistic",
                  "218.6 (p < 0.001)",
                  ""
                ]
              ],
              "note": "*p<0.05, **p<0.01, ***p<0.001."
            }
          ],
          "figures": [
            {
              "id": "figure-2",
              "caption": "Figure 2. Income-savings relationship with fitted elasticity curve.",
              "kind": "image",
              "image": {
                "url": "https://cdn.sanity.io/images/imuzzo9u/production/c921cc54e4ee12b06cea9ef1f8b092a2feb03d8a-957x577.png",
                "width": 957,
                "height": 577
              },
              "xLabels": [],
              "series": []
            }
          ]
        }
      ]
    },
    {
      "id": "risk-preferences",
      "heading": "7. Risk Preferences",
      "paragraphs": [],
      "subsections": [
        {
          "id": "risk-preference-distribution",
          "heading": "7.1 Risk Preference Distribution",
          "paragraphs": [
            "Risk preferences were measured using a simplified Holt-Laury lottery-choice task adapted for rural respondents. Each household head chose between a series of safe and risky options with varying expected values. Based on the switching point from safe to risky options, households were classified into three categories.",
            "Figure 3 shows that approximately 71% of households are risk-averse, 22% are risk-neutral, and only 7% are risk-seeking. This distribution is consistent with the findings of Binswanger and Sillers (1986) for rural Indian households and with broader experimental evidence from developing countries showing that poorer and rural populations exhibit higher risk aversion."
          ],
          "figures": [
            {
              "id": "figure-3",
              "caption": "Figure 3. Distribution of risk preferences among rural households.",
              "kind": "image",
              "image": {
                "url": "https://cdn.sanity.io/images/imuzzo9u/production/01e26e0408edeb03197463de41dc088fbe2c9d60-957x546.png",
                "width": 957,
                "height": 546
              },
              "xLabels": [],
              "series": []
            }
          ]
        },
        {
          "id": "determinants-of-risk-preferences",
          "heading": "7.2 Determinants of Risk Preferences",
          "paragraphs": [
            "Table 4 presents the ordered probit results for the determinants of risk tolerance.",
            "The ordered probit results show that income, education, and land ownership significantly increase risk tolerance, while age significantly decreases it. Wealthier, more educated, and landowning households are more willing to accept financial risk, consistent with the theoretical prediction that risk aversion declines with wealth (Pratt, 1964). The district dummy indicates that households in more prosperous districts (Anand, Kheda) show slightly higher risk tolerance than those in Panchmahal and Dahod."
          ],
          "tables": [
            {
              "id": "table-4",
              "caption": "Table 4. Ordered Probit Results: Determinants of Risk Tolerance",
              "columns": [
                "Variable",
                "Coefficient",
                "Std. Error"
              ],
              "rows": [
                [
                  "Income (Rs. lakh)",
                  "0.18***",
                  "0.04"
                ],
                [
                  "Age (years)",
                  "–0.008**",
                  "0.003"
                ],
                [
                  "Education (1–4 scale)",
                  "0.21**",
                  "0.07"
                ],
                [
                  "Land ownership (1/0)",
                  "0.32**",
                  "0.12"
                ],
                [
                  "District dummy (prosperous = 1)",
                  "0.14*",
                  "0.06"
                ],
                [
                  "N",
                  "480",
                  ""
                ],
                [
                  "Log-likelihood",
                  "–412.8",
                  ""
                ],
                [
                  "Pseudo R²",
                  "0.18",
                  ""
                ]
              ],
              "note": "*p<0.05, **p<0.01, ***p<0.001."
            }
          ]
        }
      ]
    },
    {
      "id": "financial-asset-allocation",
      "heading": "8. Financial Asset Allocation",
      "paragraphs": [],
      "subsections": [
        {
          "id": "asset-holding-patterns",
          "heading": "8.1 Asset Holding Patterns",
          "paragraphs": [
            "Table 5 presents the distribution of primary financial asset holdings across households.",
            "Bank deposits dominate (58%), followed by post office schemes (22%) and insurance (11%). Mutual funds (6%) and equity (3%) together account for only 9% of primary holdings. This pattern reflects the strong preference for low-risk assets documented in the risk preference analysis."
          ],
          "tables": [
            {
              "id": "table-5",
              "caption": "Table 5. Primary Financial Asset Holdings",
              "columns": [
                "Asset Category",
                "Households (%)",
                "Risk Class"
              ],
              "rows": [
                [
                  "Bank deposits (SB, FD)",
                  "58",
                  "Low"
                ],
                [
                  "Post office schemes",
                  "22",
                  "Low"
                ],
                [
                  "Insurance",
                  "11",
                  "Low"
                ],
                [
                  "Mutual funds",
                  "6",
                  "Medium–High"
                ],
                [
                  "Equity / shares",
                  "3",
                  "High"
                ]
              ]
            }
          ]
        },
        {
          "id": "multinomial-logit-results",
          "heading": "8.2 Multinomial Logit Results",
          "paragraphs": [
            "Table 6 presents the multinomial logit results with bank deposits as the base category.",
            "The multinomial logit results reveal several important patterns. Income significantly increases the probability of holding insurance, mutual funds, and equity relative to bank deposits, with the largest effect for equity (0.56). Financial literacy is one of the strongest predictors: a one-point increase in the financial literacy index raises the relative probability of holding mutual funds by 0.38 and equity by 0.44. Education shows similar positive effects. Risk aversion has a strong negative effect: risk-averse households are significantly less likely to hold mutual funds (–0.72) or equity (–1.18) relative to bank deposits. Age has a negative effect on holding higher-risk assets, with older households less likely to hold mutual funds or equity. Land ownership slightly increases the probability of holding mutual funds and equity, possibly reflecting greater overall asset diversification among landowning households."
          ],
          "tables": [
            {
              "id": "table-6",
              "caption": "Table 6. Multinomial Logit Results: Determinants of Financial Asset Allocation (Base: Bank Deposits)",
              "columns": [
                "Variable",
                "Post Office",
                "Insurance",
                "Mutual Funds",
                "Equity",
                "Significance"
              ],
              "rows": [
                [
                  "Income (Rs. lakh)",
                  "0.04",
                  "0.18**",
                  "0.42***",
                  "0.56***",
                  "—"
                ],
                [
                  "Age (years)",
                  "0.01",
                  "–0.004",
                  "–0.02**",
                  "–0.03**",
                  "—"
                ],
                [
                  "Education (1–4)",
                  "0.06",
                  "0.22**",
                  "0.48***",
                  "0.62***",
                  "—"
                ],
                [
                  "Financial literacy (0–10)",
                  "0.02",
                  "0.14**",
                  "0.38***",
                  "0.44***",
                  "—"
                ],
                [
                  "Risk aversion (1/0)",
                  "0.28**",
                  "–0.04",
                  "–0.72***",
                  "–1.18***",
                  "—"
                ],
                [
                  "Land ownership (1/0)",
                  "0.12",
                  "0.08",
                  "0.16*",
                  "0.18*",
                  "—"
                ]
              ],
              "note": "N = 480; Log-likelihood = –548.3; Pseudo R² = 0.24. *p<0.05, **p<0.01, ***p<0.001. Coefficients are relative to bank deposits base category."
            }
          ]
        },
        {
          "id": "predicted-probabilities-by-risk-preferen",
          "heading": "8.3 Predicted Probabilities by Risk Preference",
          "paragraphs": [
            "Figure 4 shows the predicted probability of holding each asset category for risk-averse, risk-neutral, and risk-seeking households.",
            "The figure clearly illustrates how risk preferences shape asset allocation. Risk-averse households overwhelmingly prefer bank deposits (68%) with minimal allocation to mutual funds (3%) and equity (1%). Risk-seeking households show a much more diversified portfolio, with bank deposits reduced to 22% and meaningful allocations to mutual funds (24%) and equity (14%). This visual pattern underscores the strong interaction between risk preferences and asset allocation."
          ],
          "figures": [
            {
              "id": "figure-4",
              "caption": "Figure 4. Predicted probability of asset holding by risk preference category.",
              "kind": "image",
              "image": {
                "url": "https://cdn.sanity.io/images/imuzzo9u/production/7688c7458b34a9ec574abfa1b3207660d34085b1-951x662.png",
                "width": 951,
                "height": 662
              },
              "xLabels": [],
              "series": []
            }
          ]
        }
      ]
    },
    {
      "id": "findings-summary",
      "heading": "9. Findings Summary",
      "paragraphs": [
        "The econometric analysis yields six key findings. (1) The income elasticity of savings is approximately 1.24, indicating that savings are income-elastic: a 1% increase in income produces a 1.24% increase in savings. (2) Approximately 71% of rural households are riskaverse, 22% are risk-neutral, and only 7% are risk-seeking. (3) Income, education, and land ownership significantly increase risk tolerance, while age significantly decreases it. (4) Bank deposits dominate financial asset holdings (58%), while mutual funds (6%) and equity (3%) account for only 9%. (5) Income, financial literacy, and education significantly increase the probability of holding higher-risk financial assets, while risk aversion significantly reduces it. (6) The multinomial logit model achieves a pseudo R2 of 0.24, indicating that household characteristics meaningfully explain asset allocation choices."
      ]
    },
    {
      "id": "discussion",
      "heading": "10. Discussion",
      "paragraphs": [
        "The findings reveal an integrated picture of rural household financial behaviour in Central Gujarat. The income elasticity of 1.24 indicates that savings are highly responsive to income growth, suggesting that rural development programmes raising household income will produce proportionally larger increases in savings. However, the composition of those savings is constrained by widespread risk aversion and limited financial literacy.",
        "The risk preference distribution—71% risk-averse—is consistent with international evidence from developing country rural contexts and reflects the vulnerability of rural households to income shocks. High risk aversion is rational given limited insurance, irregular agricultural income, and exposure to health and weather shocks. However, it limits the ability of households to benefit from higherreturn financial assets, potentially reinforcing wealth inequality over time.",
        "The multinomial logit results show that financial literacy is among the strongest predictors of diversification into mutual funds and equity. This finding has direct policy implications: financial literacy programmes can serve as a lever for shifting portfolio composition toward higher-return assets, but only if paired with accessible low-cost products that respect households’ risk constraints.",
        "The interaction between income, risk preferences, and asset allocation suggests a gradual diversification pathway: as income grows and financial literacy improves, households move from bank deposits to insurance and mutual funds, and eventually to equity. Policy should support this graduated transition rather than expecting immediate diversification."
      ],
      "subsections": [
        {
          "id": "district-level-heterogeneity",
          "heading": "10.1 District-Level Heterogeneity",
          "paragraphs": [
            "District-level analysis indicates that households in prosperous districts (Anand, Kheda) exhibit higher risk tolerance and greater financial diversification, while households in Panchmahal and Dahod show stronger risk aversion and more concentrated portfolios. Vadodara occupies an intermediate position. This heterogeneity suggests that financial inclusion and literacy interventions should be tailored to local economic conditions."
          ]
        }
      ]
    },
    {
      "id": "policy-implications",
      "heading": "11. Policy Implications",
      "paragraphs": [
        "The findings have several policy implications. Expand financial literacy. Given the strong statistical effect of financial literacy on asset diversification, rural financial literacy programmes should be expanded with content on savings products, insurance, mutual funds, and basic investment concepts. Develop graduated investment products. Rural-specific investment products that combine safety with modestly higher returns than bank deposits—such as capitalprotected mutual fund schemes or postal savings variants—can help risk-averse households gradually diversify without exposing them to excessive risk. Leverage income elasticity. Since savings are income-elastic (η = 1.24), income growth programmes (agricultural extension, rural employment, skill development) will produce proportionally larger savings growth, expanding the pool of capital available for financial investment. Address risk aversion through insurance. Widespread risk aversion reflects vulnerability to shocks. Expanding crop insurance, health insurance, and weather-indexed insurance can reduce the precautionary motive for holding low-yield assets and enable diversification. Tailor interventions by district. Given district-level heterogeneity, financial product distribution and literacy campaigns should be calibrated to local conditions. Support graduated exposure. Rather than expecting immediate diversification, policy should support a graduated pathway: bank deposits → insurance → mutual funds → equity, with products and education appropriate to each stage."
      ]
    },
    {
      "id": "challenges-and-limitations",
      "heading": "12. Challenges and Limitations",
      "paragraphs": [],
      "subsections": [
        {
          "id": "challenges",
          "heading": "12.1 Challenges",
          "paragraphs": [
            "Several challenges affect the econometric analysis. Self-reporting bias: income, savings, and asset data rely on self-reporting and may be affected by recall error and social desirability bias. Experimental measurement limitations: the lottery-choice task is a simplified measure and may not fully capture real-world risk behaviour, particularly for financial assets that households have limited experience with. Cross-sectional design: the study captures behaviour at one point in time and cannot establish causation or track changes over time. Multinomial logit assumptions: the model assumes independence of irrelevant alternatives (IIA), which may not fully hold for financial asset categories. Sample size: while 480 households provide reasonable statistical power, a larger sample would enable finer sub-group analysis."
          ]
        },
        {
          "id": "limitations-of-the-study",
          "heading": "12.2 Limitations of the Study",
          "paragraphs": [
            "This study has several limitations. First, the cross-sectional design limits causal inference; the results represent associations rather than causal effects. Second, the elasticity estimate of 1.24 applies to the observed income range and may differ at other income levels. Third, the risk preference measure is experimental and may not fully reflect behaviour with real financial stakes. Fourth, the multinomial logit model uses primary asset category and does not capture simultaneous holding of multiple assets. Fifth, the study covers five districts and findings may not generalise to other regions without replication."
          ]
        }
      ]
    },
    {
      "id": "future-scope",
      "heading": "13. Future Scope",
      "paragraphs": [
        "Future research can extend this work in several directions. Longitudinal panel data: following households over several years can capture how income changes affect savings and portfolio decisions dynamically and enable causal identification. Field experiments: randomised financial literacy programmes or product access interventions can establish causal effects on asset allocation. Continuous risk measurement: using more granular risk preference elicitation can improve the precision of risk-behaviour relationships. Multiasset modelling: moving beyond primary asset category to model the full portfolio using fractional multinomial logit or similar frameworks. Comparative state analysis: applying the same econometric framework to other Indian states can identify transferable patterns and policy lessons. Digital financial services: as digital platforms penetrate rural areas, studying their effect on risk preferences and asset allocation is a priority."
      ]
    },
    {
      "id": "conclusion",
      "heading": "14. Conclusion",
      "paragraphs": [
        "This paper has presented an econometric analysis of income elasticity of savings, risk preferences, and financial asset allocation among rural households in Central Gujarat, based on a primary survey of 480 households across five districts. Three econometric models were estimated: a log-log OLS model for income elasticity, an ordered probit model for risk preference determinants, and a multinomial logit model for financial asset allocation.",
        "The key findings are: the income elasticity of savings is approximately 1.24, indicating that savings are income-elastic and highly responsive to income growth; approximately 71% of households are risk-averse, with risk tolerance significantly determined by income, education, age, and land ownership; bank deposits dominate financial asset holdings (58%), with mutual funds (6%) and equity (3%) accounting for only 9%; and income, financial literacy, and education significantly increase the probability of holding higher-risk financial assets, while risk aversion significantly reduces it.",
        "The integrated analysis reveals that rural household financial behaviour is responsive to income changes but constrained by widespread risk aversion and limited financial literacy, restricting diversification into higher-return assets. Policy recommendations focus on expanding financial literacy, developing graduated investment products that respect risk constraints, leveraging income elasticity through rural income growth, addressing risk aversion through insurance expansion, tailoring interventions by district, and supporting a graduated diversification pathway. Further research using longitudinal panels, field experiments, and multi-asset modelling will strengthen the evidence base and support more effective rural financial policy."
      ]
    }
  ],
  "sample": false,
  "received": "",
  "accepted": ""
};
