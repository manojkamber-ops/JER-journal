// Vol. 27, No. 1 (January 2022) — full research paper (sample content).
import type { PaperSpec } from "../paper-spec";

export const paper: PaperSpec = {
  id: "2022-v27-i1-01",
  title: "Credit Guarantees and SME Investment during the Pandemic: Evidence from the Korea Credit Guarantee Fund",
  authors: [{ name: "Tae-Woo Lee", corresponding: true }, { name: "Anna Petrova" }],
  abstract:
    "Public credit guarantees were a central part of the policy response to the COVID-19 pandemic. We study a 2020 expansion of guarantees by the Korea Credit Guarantee Fund that raised the guaranteed share of new loans to small firms with annual sales below an eligibility threshold. Using loan-level data matched to firm financial statements for 2018–2021, we estimate the effects in a regression-discontinuity design around the sales threshold. Eligible firms increased new bank credit by 18 percent, raised their investment rate by 2.3 percentage points and expanded employment by 3.1 percent within a year, relative to firms just above the threshold. Default rates on guaranteed loans rose by only 0.6 percentage points. Effects are concentrated among young firms and those without prior bank relationships, indicating that guarantees relaxed binding credit constraints rather than substituting for credit that would have been extended anyway.",
  keywords: ["Credit guarantees", "SMEs", "Credit constraints", "Investment", "COVID-19"],
  jelCodes: ["G28", "G21", "H81", "D22"],
  pages: "1–30",
  volume: 27,
  issue: 1,
  year: 2022,
  received: "2021-06-21",
  accepted: "2021-11-15",
  published: "2022-01-15",
  publishedOnline: "2022-01-05",
  citations: 21,
  downloads: 2380,
  pdfSize: "1.64 MB",
  type: "Research Article",
  acknowledgments: "We thank staff of the Korea Credit Guarantee Fund for help with the guarantee records, seminar participants at Hanyang University and CERGE-EI, two anonymous referees and the handling editor for helpful comments. The views expressed are those of the authors.",
  dataAvailability:
    "Loan-level guarantee data were provided by the Korea Credit Guarantee Fund under a confidentiality agreement. Code is available from the corresponding author.",
  refs: [
    /* 1 */ "Chodorow-Reich, G. (2014). The employment effects of credit market disruptions: Firm-level evidence from the 2008–9 financial crisis. Quarterly Journal of Economics, 129(1), 1–59.",
    /* 2 */ "Khwaja, A. I., & Mian, A. (2008). Tracing the impact of bank liquidity shocks: Evidence from an emerging market. American Economic Review, 98(4), 1413–1442.",
    /* 3 */ "Jiménez, G., Ongena, S., Peydró, J.-L., & Saurina, J. (2012). Credit supply and monetary policy: Identifying the bank balance-sheet channel with loan applications. American Economic Review, 102(5), 2301–2326.",
    /* 4 */ "Lelarge, C., Sraer, D., & Thesmar, D. (2010). Entrepreneurship and credit constraints: Evidence from a French loan guarantee program. In J. Lerner & A. Schoar (Eds.), International Differences in Entrepreneurship (pp. 243–273). Chicago: University of Chicago Press.",
    /* 5 */ "Bach, L. (2014). Are small businesses worthy of financial aid? Evidence from a French targeted credit program. Review of Finance, 18(3), 877–919.",
    /* 6 */ "Banerjee, A. V., & Duflo, E. (2014). Do firms want to borrow more? Testing credit constraints using a directed lending program. Review of Economic Studies, 81(2), 572–607.",
    /* 7 */ "Granja, J., Makridis, C., Yannelis, C., & Zwick, E. (2020). Did the Paycheck Protection Program hit the target? NBER Working Paper No. 27095. Cambridge, MA: National Bureau of Economic Research.",
    /* 8 */ { jer: "2021-v26-i1-01" },
    /* 9 */ "Stiglitz, J. E., & Weiss, A. (1981). Credit rationing in markets with imperfect information. American Economic Review, 71(3), 393–410.",
    /* 10 */ "Petersen, M. A., & Rajan, R. G. (1994). The benefits of lending relationships: Evidence from small business data. Journal of Finance, 49(1), 3–37.",
    /* 11 */ "Gertler, M., & Gilchrist, S. (1994). Monetary policy, business cycles, and the behavior of small manufacturing firms. Quarterly Journal of Economics, 109(2), 309–340.",
    /* 12 */ "Fazzari, S. M., Hubbard, R. G., & Petersen, B. C. (1988). Financing constraints and corporate investment. Brookings Papers on Economic Activity, 1988(1), 141–206.",
    /* 13 */ "Holmström, B., & Tirole, J. (1997). Financial intermediation, loanable funds, and the real sector. Quarterly Journal of Economics, 112(3), 663–691.",
    /* 14 */ "Berger, A. N., & Udell, G. F. (1998). The economics of small business finance: The roles of private equity and debt markets in the financial growth cycle. Journal of Banking & Finance, 22(6–8), 613–673.",
    /* 15 */ "Brown, J. D., & Earle, J. S. (2017). Finance and growth at the firm level: Evidence from SBA loans. Journal of Finance, 72(3), 1039–1080.",
    /* 16 */ "Bartik, A. W., Cullen, Z. B., Glaeser, E. L., Luca, M., Stanton, C. T., & Sunderam, A. (2020). The targeting and impact of Paycheck Protection Program loans to small businesses. NBER Working Paper No. 27623. Cambridge, MA: National Bureau of Economic Research.",
    /* 17 */ "Gourinchas, P.-O., Kalemli-Özcan, Ṣ., Penciakova, V., & Sander, N. (2020). COVID-19 and SME failures. NBER Working Paper No. 27877. Cambridge, MA: National Bureau of Economic Research.",
    /* 18 */ "Imbens, G. W., & Lemieux, T. (2008). Regression discontinuity designs: A guide to practice. Journal of Econometrics, 142(2), 615–635.",
    /* 19 */ "Lee, D. S., & Lemieux, T. (2010). Regression discontinuity designs in economics. Journal of Economic Literature, 48(2), 281–355.",
    /* 20 */ "Calonico, S., Cattaneo, M. D., & Titiunik, R. (2014). Robust nonparametric confidence intervals for regression-discontinuity designs. Econometrica, 82(6), 2295–2326.",
    /* 21 */ "McCrary, J. (2008). Manipulation of the running variable in the regression discontinuity design: A density test. Journal of Econometrics, 142(2), 698–714.",
    /* 22 */ "Cattaneo, M. D., Jansson, M., & Ma, X. (2020). Simple local polynomial density estimators. Journal of the American Statistical Association, 115(531), 1449–1455.",
    /* 23 */ "Gelman, A., & Imbens, G. (2019). Why high-order polynomials should not be used in regression discontinuity designs. Journal of Business & Economic Statistics, 37(3), 447–456.",
    /* 24 */ "Grembi, V., Nannicini, T., & Troiano, U. (2016). Do fiscal rules matter? American Economic Journal: Applied Economics, 8(3), 1–30.",
    /* 25 */ "Rajan, R. G., & Zingales, L. (1998). Financial dependence and growth. American Economic Review, 88(3), 559–586.",
    /* 26 */ "Hadlock, C. J., & Pierce, J. R. (2010). New evidence on measuring financial constraints: Moving beyond the KZ index. Review of Financial Studies, 23(5), 1909–1940.",
    /* 27 */ "Kaplan, S. N., & Zingales, L. (1997). Do investment-cash flow sensitivities provide useful measures of financing constraints? Quarterly Journal of Economics, 112(1), 169–215.",
    /* 28 */ "Hubbard, R. G. (1998). Capital-market imperfections and investment. Journal of Economic Literature, 36(1), 193–225.",
  ],
  body: [
    {
      id: "introduction",
      heading: "1. Introduction",
      paragraphs: [
        "Disruptions to credit supply can have large real effects on small firms, which depend heavily on bank lending and have few alternative sources of external finance [1][2][3]. Small firms are also the most exposed to the information problems that make lenders ration credit rather than raise interest rates [9], and their investment and sales respond more strongly than those of large firms to tightening financial conditions [11]. During the COVID-19 pandemic, governments around the world expanded public credit guarantees on an unprecedented scale to keep credit flowing to such firms. Whether guarantees relax genuine credit constraints, or merely transfer risk from banks to taxpayers for loans that would have been made anyway, is central to evaluating their cost and to designing them better in future crises.",
        "We study an expansion of guarantees by the Korea Credit Guarantee Fund (KODIT) in April 2020, which raised the guaranteed share of new loans to firms with annual sales below KRW 10 billion from 85 to 95 percent and cut the guarantee fee for those firms. Firms just above the threshold remained eligible for ordinary guarantees on the old terms. Because eligibility was determined by sales in the 2019 financial statements, filed before the pandemic began, firms could not manipulate their position relative to the threshold. The sharp threshold allows a regression-discontinuity design comparing otherwise similar firms just below and just above it [18][19].",
        "We combine loan-level data on guaranteed and non-guaranteed bank lending with firm financial statements for 2018 to the second quarter of 2021, covering 61,000 firms with 2019 sales within 50 percent of the threshold. Firms just below and above the threshold are balanced in pre-pandemic characteristics, there is no bunching in the distribution of 2019 sales, and outcomes evolved in parallel before the expansion.",
        "Eligible firms increased new bank credit by 18 percent, raised their investment rate by 2.3 percentage points and expanded employment by 3.1 percent within a year, relative to firms just above the threshold. Default rates on guaranteed loans rose by only 0.6 percentage points, implying expected losses that are small relative to the additional credit extended. Effects on investment are roughly twice as large for firms younger than seven years and for firms with no bank relationship before 2020, groups for which information frictions are most severe [10][14]. For older firms with established relationships, a substantial part of the guaranteed credit substituted for loans that banks would have extended anyway.",
        "These results contribute to a literature that has used targeted lending programmes to test for credit constraints [4][5][6][15] and to the rapidly growing evaluation of pandemic-era support for small businesses [7][16][17]. Our findings complement evidence in this journal that job retention subsidies preserved employment in liquidity-constrained firms during the same period [8]: guarantees and subsidies appear to have reached overlapping sets of firms through different channels, one easing access to credit and the other reducing labour costs directly.",
        "Section 2 describes the guarantee system and the 2020 expansion. Section 3 reviews related literature and Section 4 sets out a simple framework and hypotheses. Section 5 describes the data and Section 6 the empirical strategy. Section 7 reports the main results, Section 8 examines mechanisms and heterogeneity, Section 9 reports robustness checks, Section 10 discusses implications for policy, and Section 11 concludes.",
      ],
    },
    {
      id: "background",
      heading: "2. Institutional Background",
      paragraphs: [
        "Korea has one of the largest public credit guarantee systems in the world relative to the size of its economy. KODIT, established in 1976, guarantees bank loans to small and medium-sized enterprises (SMEs) in manufacturing and services, while a separate fund specialises in technology firms and regional foundations serve the smallest businesses. Before the pandemic, outstanding KODIT guarantees amounted to about KRW 50 trillion, or roughly 2.5 percent of GDP. A firm applies to KODIT, which assesses its creditworthiness using financial statements, credit bureau records and site visits, and issues a guarantee certificate specifying the maximum loan amount and guaranteed share. The firm then takes the certificate to a bank, which lends at a rate reflecting the reduced risk.",
        "Under ordinary terms, KODIT guaranteed 85 percent of the principal of a new loan to an SME, charging an annual fee of about 1.2 percent of the guaranteed amount. Banks bore the remaining 15 percent of any loss, giving them an incentive to screen and monitor. In the first months of 2020, as the pandemic depressed sales in services and disrupted supply chains in manufacturing, the government announced a series of financial support packages. One component, effective from April 2020, raised the guaranteed share to 95 percent for new loans to firms whose sales in the most recent fiscal year were below KRW 10 billion, cut their fee to 0.8 percent and introduced a fast-track review for applications below KRW 500 million.",
        "The KRW 10 billion threshold was chosen to target small firms within the broader SME population and had no prior role in guarantee pricing, tax rules or other support programmes. Definitions of small enterprises in Korean law vary by industry and are based on three-year average sales rather than the most recent year, so no other policy changes discretely at this threshold. Eligibility was based on audited or tax-filed 2019 statements, which for almost all firms had been finalised by March 2020. The expanded terms remained in place until the end of 2021, so our sample period covers the first five quarters of the programme.",
        "Guarantees were not the only form of pandemic credit support. The Bank of Korea extended its lending facilities for banks that lent to SMEs, state-owned banks offered low-interest emergency loans to small merchants, and the government introduced deferrals of principal and interest on existing SME loans. These measures applied on the same terms to firms on both sides of the KRW 10 billion threshold, so they do not confound our estimates, although they may have reduced the marginal value of guarantees for all firms.",
      ],
    },
    {
      id: "literature",
      heading: "3. Related Literature",
      paragraphs: [
        "A long literature argues that information asymmetries and limited pledgeable income lead lenders to ration credit to small and young firms [9][13], so that investment by such firms depends on internal funds and on the health of their banks [12][28]. Measuring credit constraints directly is difficult, because sensitivity of investment to cash flow may reflect investment opportunities rather than financing frictions [27], and survey-based indices of constraints correlate mainly with size and age [26]. Industries that depend more on external finance grow faster where financial markets are deeper [25], and relationship lending can alleviate constraints by allowing banks to accumulate soft information over time [10][14].",
        "Quasi-experimental studies use shocks to bank credit supply to identify the real effects of credit. Khwaja and Mian {2} show that firms borrowing from banks hit by liquidity shocks in Pakistan were unable to substitute towards other lenders, Jiménez et al. {3} use loan applications in Spain to separate credit supply from demand, and Chodorow-Reich {1} shows that US firms whose lenders were weakened during the 2008–2009 crisis cut employment substantially. These studies find the largest effects among small firms without alternative sources of finance.",
        "Evaluations of guarantee and directed lending programmes provide more direct evidence. Lelarge, Sraer and Thesmar {4} find that a French guarantee programme increased the growth of newly created firms but also raised their probability of default, while Bach {5} shows that a targeted French credit programme increased investment and employment of recipient firms. Using a change in eligibility for a directed lending programme in India, Banerjee and Duflo {6} show that many firms were credit-constrained, because additional credit raised sales rather than substituting for other borrowing. Brown and Earle {15} estimate that US Small Business Administration loans created around three to three and a half jobs per million dollars of lending.",
        "During the pandemic, the US Paycheck Protection Program provided forgivable loans to small businesses on a large scale. Studies find that funds reached less affected areas first and that a substantial fraction of loans went to firms that would have maintained employment anyway [7][16]. Simulations suggest that, without support, SME failure rates would have risen sharply in 2020, but that much support went to firms that did not need it [17]. We provide evidence on a guarantee-based programme in an economy where bank lending dominates SME finance, and our design allows us to measure both the additional credit generated and the associated rise in default risk.",
      ],
    },
    {
      id: "framework",
      heading: "4. Framework and Hypotheses",
      paragraphs: [
        "Consider a bank deciding whether to lend to a small firm with an investment project. The bank observes a noisy signal of the firm's quality and lends if the expected repayment, net of the cost of screening and monitoring, exceeds its funding cost. Because higher interest rates attract riskier borrowers, the bank may ration credit rather than raise the rate [9]. A guarantee covering a share g of losses raises the bank's expected repayment from any given borrower and therefore lowers the signal threshold above which it lends. Raising g from 0.85 to 0.95 reduces the bank's exposure to loss by two thirds, which can substantially expand the set of firms that receive credit.",
        "The framework yields four hypotheses. First, if eligible firms were credit-constrained, the expansion should raise new credit, investment and employment; if they were unconstrained, guaranteed loans would replace non-guaranteed loans with little change in total credit or real outcomes [6]. Second, effects should be largest for firms about which banks have least information — young firms and those without an existing banking relationship [10][14]. Third, because the bank's retained exposure falls, screening effort may decline and default rates on marginal loans may rise [4]. Fourth, part of the subsidy may be passed through to borrowers as lower interest rates or collateral requirements, which would raise loan demand even among unconstrained firms; we examine loan terms to separate these channels.",
      ],
    },
    {
      id: "data",
      heading: "5. Data",
      paragraphs: [],
      subsections: [
        {
          id: "data-sources",
          heading: "5.1 Sources and Sample",
          paragraphs: [
            "We combine three sources. KODIT guarantee records report every guarantee application and issuance from January 2018 to June 2021, including the amount, guaranteed share, fee and the lending bank. Credit registry data report each firm's outstanding loans from all banks at the end of each quarter, split between guaranteed and non-guaranteed lending, and identify loans that become more than 90 days overdue. Firm financial statements from a commercial database covering externally audited firms and smaller firms that file with the tax authority provide sales, assets, fixed investment, employment and firm age.",
            "The analysis sample includes 61,000 firms with 2019 sales between KRW 5 billion and KRW 15 billion, that is, within 50 percent of the eligibility threshold, operating in industries eligible for KODIT guarantees and with financial statements available for 2018 and 2019. We exclude firms in finance, real estate and gambling, which are ineligible for guarantees, and firms affiliated with large business groups. Table 1 compares firms just below and just above the threshold in 2019.",
          ],
          tables: [
            {
              id: "table-1",
              caption: "Table 1. Firms near the sales threshold, 2019",
              columns: ["Variable", "Below threshold", "Above threshold", "Difference"],
              rows: [
                ["Annual sales (KRW billion)", "8.6", "11.4", "2.8***"],
                ["Total assets (KRW billion)", "7.9", "9.8", "1.9***"],
                ["Employment", "38.4", "44.7", "6.3***"],
                ["Firm age (years)", "12.3", "13.1", "0.8"],
                ["Bank debt / assets", "0.31", "0.30", "0.01"],
                ["Guaranteed share of bank debt", "0.22", "0.21", "0.01"],
                ["Investment rate", "0.071", "0.074", "−0.003"],
                ["Return on assets", "0.038", "0.040", "−0.002"],
                ["No prior bank relationship (share)", "0.18", "0.16", "0.02"],
                ["Manufacturing (share)", "0.44", "0.46", "−0.02"],
                ["Firms", "33,400", "27,600", ""],
              ],
              note: "Note: Means for firms with 2019 sales within 50 percent of the KRW 10 billion threshold. Size variables differ mechanically with sales. *** significant at the 1 percent level.",
            },
          ],
        },
        {
          id: "data-variables",
          heading: "5.2 Outcome Variables",
          paragraphs: [
            "Our main outcomes are measured over the four quarters following the expansion, from the second quarter of 2020 to the first quarter of 2021, relative to 2019. New bank credit is the change in the log of total outstanding bank loans. The investment rate is capital expenditure on tangible fixed assets divided by the beginning-of-year capital stock, and we measure its change between 2019 and the year after the expansion. Employment is the log change in the number of employees recorded in social-insurance filings, which are available quarterly. The default rate is the share of new loans originated between April 2020 and March 2021 that became more than 90 days overdue by June 2021.",
            "Mechanically, firm size variables in Table 1 differ between the two groups because the groups are defined by sales. Within the narrower bandwidths used in estimation, these differences shrink towards zero, and the regression-discontinuity estimates compare firms at the threshold itself. Characteristics unrelated to the definition of the groups, such as age, leverage, profitability and the prevalence of firms without a bank relationship, are similar on both sides.",
          ],
        },
      ],
    },
    {
      id: "strategy",
      heading: "6. Empirical Strategy",
      paragraphs: [
        "We estimate local linear regressions of each outcome on an eligibility indicator and the running variable — 2019 sales relative to the threshold, in logs — allowing the slope to differ on each side [18][19]. Because eligibility was determined by pre-pandemic sales, firms could not sort around the threshold in response to the programme.",
      ],
      subsections: [
        {
          id: "specification",
          heading: "6.1 Specification",
          paragraphs: [
            "The estimating equation is Y_i = α + τ·D_i + β_1·X_i + β_2·D_i·X_i + γ_s + ε_i, where Y_i is the outcome for firm i, X_i is log 2019 sales minus log KRW 10 billion, D_i = 1 if X_i < 0 and γ_s are industry fixed effects. The coefficient τ is the effect of eligibility at the threshold. We use mean-squared-error optimal bandwidths with a triangular kernel and report robust bias-corrected confidence intervals [20]; we do not use higher-order global polynomials, which can produce misleading estimates [23]. Standard errors are clustered by four-digit industry.",
            "Because eligibility affected the terms of guarantees rather than mandating them, τ is an intention-to-treat effect. Scaling by the discontinuity in the probability of obtaining a guarantee on the expanded terms yields a fuzzy-design estimate of the effect of receiving an expanded guarantee. We also estimate a difference-in-discontinuities version that subtracts the discontinuity at the same threshold in 2018–2019, when guarantee terms did not differ across it [24]. This removes any time-invariant discontinuity in outcomes, for example due to reporting conventions near round numbers.",
          ],
        },
        {
          id: "identification",
          heading: "6.2 Identifying Assumptions and First Stage",
          paragraphs: [
            "Identification requires that potential outcomes be continuous at the threshold. Three tests support this assumption. First, firms on either side of the threshold are balanced in pre-pandemic characteristics: Table 2 reports regression-discontinuity estimates for predetermined variables, none of which is statistically significant. Second, there is no bunching in the density of 2019 sales at the threshold, using both the McCrary {21} test and the local polynomial density estimator of Cattaneo, Jansson and Ma {22}. Third, pre-pandemic changes in outcomes between 2018 and 2019 show no discontinuity.",
            "The lower panel of Table 2 reports the first stage. The guaranteed share on new guaranteed loans rises by 9.4 percentage points at the threshold, close to the statutory 10 points, and the probability that a firm obtained a new guarantee between April 2020 and March 2021 rises by 14.2 percentage points, from a base of 23 percent just above the threshold. The guarantee fee paid falls by 0.36 percentage points.",
          ],
          tables: [
            {
              id: "table-2",
              caption: "Table 2. Validity tests and first stage at the threshold",
              columns: ["Variable", "RD estimate", "Std. error", "Mean above threshold"],
              rows: [
                ["Panel A: Predetermined characteristics (2019)", "", "", ""],
                ["Firm age (years)", "−0.21", "(0.38)", "13.0"],
                ["Bank debt / assets", "0.004", "(0.009)", "0.30"],
                ["Return on assets", "−0.001", "(0.003)", "0.040"],
                ["No prior bank relationship", "0.008", "(0.011)", "0.16"],
                ["Δ log bank credit, 2018–2019", "0.006", "(0.017)", "0.05"],
                ["Density test (log difference)", "0.031", "(0.042)", ""],
                ["Panel B: First stage (April 2020 – March 2021)", "", "", ""],
                ["Guaranteed share on new guarantees", "0.094***", "(0.006)", "0.851"],
                ["Obtained a new guarantee", "0.142***", "(0.021)", "0.231"],
                ["Guarantee fee (percent)", "−0.36***", "(0.04)", "1.19"],
              ],
              note: "Note: Local linear estimates with MSE-optimal bandwidths and a triangular kernel; standard errors clustered by industry. *** p < 0.01.",
            },
          ],
        },
      ],
    },
    {
      id: "results",
      heading: "7. Results",
      paragraphs: [],
      subsections: [
        {
          id: "results-credit",
          heading: "7.1 Credit",
          paragraphs: [
            "Table 3 reports the main estimates. Eligibility raised new bank credit by 18 percent relative to firms just above the threshold, where credit grew by 6 percent over the same period. The increase came almost entirely through guaranteed lending: guaranteed loans rose by 41 percent, while non-guaranteed loans fell by a statistically insignificant 3 percent. That total credit rose by much more than non-guaranteed credit fell indicates that guaranteed loans largely added to, rather than replaced, other bank borrowing, which is the signature of credit constraints emphasised by Banerjee and Duflo {6}.",
            "Figure 1 shows the dynamics. We estimate the discontinuity in the log change of bank credit relative to the fourth quarter of 2019, quarter by quarter. Before the expansion, the estimates are small and statistically insignificant, supporting the assumption that firms on either side of the threshold were on similar trajectories. After April 2020, credit of eligible firms rises quickly, reaching 0.15 log points by the third quarter of 2020 and stabilising at around 0.18 to 0.19 log points in 2021.",
          ],
          tables: [
            {
              id: "table-3",
              caption: "Table 3. Effects of guarantee eligibility (regression discontinuity)",
              columns: ["Outcome", "Estimate", "Std. error", "Mean above threshold", "Bandwidth", "Observations"],
              rows: [
                ["Δ log new bank credit", "0.18***", "(0.04)", "0.06", "0.21", "24,180"],
                ["Δ log guaranteed loans", "0.41***", "(0.09)", "0.11", "0.20", "23,350"],
                ["Δ log non-guaranteed loans", "−0.03", "(0.04)", "0.03", "0.23", "26,020"],
                ["Δ investment rate", "0.023***", "(0.007)", "−0.012", "0.24", "26,940"],
                ["Δ log employment", "0.031**", "(0.013)", "−0.021", "0.22", "25,070"],
                ["Exit by June 2021", "−0.007", "(0.005)", "0.034", "0.25", "27,800"],
                ["Default rate on new loans", "0.006*", "(0.003)", "0.024", "0.22", "18,640"],
              ],
              note: "Note: Local linear estimates with MSE-optimal bandwidths (in log sales) and a triangular kernel; industry fixed effects; standard errors clustered by industry. * p < 0.10, ** p < 0.05, *** p < 0.01.",
            },
          ],
          figures: [
            {
              id: "figure-1",
              caption: "Figure 1. Discontinuity in bank credit at the threshold, by quarter",
              kind: "line",
              xLabels: ["2019Q1", "2019Q2", "2019Q3", "2019Q4", "2020Q1", "2020Q2", "2020Q3", "2020Q4", "2021Q1", "2021Q2"],
              yLabel: "RD estimate (Δ log credit vs. 2019Q4)",
              series: [
                {
                  name: "Estimate",
                  values: [0.01, -0.01, 0.0, 0.0, 0.01, 0.09, 0.15, 0.17, 0.18, 0.19],
                  lower: [-0.05, -0.07, -0.05, 0.0, -0.05, 0.03, 0.08, 0.09, 0.1, 0.1],
                  upper: [0.07, 0.05, 0.05, 0.0, 0.07, 0.15, 0.22, 0.25, 0.26, 0.28],
                },
              ],
              marker: 4,
              note: "Note: Quarter-by-quarter local linear estimates with 95 percent confidence intervals; 2019Q4 is the reference quarter. The dashed line marks the April 2020 expansion.",
            },
          ],
        },
        {
          id: "results-real",
          heading: "7.2 Investment and Employment",
          paragraphs: [
            "The additional credit translated into real activity. Eligibility raised the investment rate by 2.3 percentage points, against a fall of 1.2 points just above the threshold, so that eligible firms roughly maintained their pre-pandemic investment while ineligible firms cut back. Employment of eligible firms rose by 3.1 percent relative to firms above the threshold, whose employment fell by 2.1 percent. The probability of exit by June 2021 was 0.7 percentage points lower for eligible firms, a difference that is not statistically significant.",
            "Scaling by the first stage gives the effects of obtaining an expanded guarantee. Since eligibility raised the probability of obtaining a new guarantee by 14.2 percentage points, the implied effect on the investment rate of firms induced to obtain a guarantee is about 16 percentage points, and on employment about 22 percent. These large effects for compliers are plausible given that the median new guarantee was equivalent to about 28 percent of the firm's pre-pandemic bank debt. An alternative calculation divides the additional employment by the additional credit: we estimate roughly 1.4 jobs per KRW 1 billion of additional lending, in the range of estimates for US guaranteed loans [15].",
          ],
        },
        {
          id: "results-default",
          heading: "7.3 Defaults and Fiscal Cost",
          paragraphs: [
            "The default rate on new loans originated to eligible firms between April 2020 and March 2021 was 0.6 percentage points higher than for firms just above the threshold, against a base of 2.4 percent. The increase is marginally significant and modest in economic terms. Part of it may reflect a change in the composition of borrowers, as banks extended credit to firms they would previously have rejected, and part a reduction in screening effort as banks' retained exposure fell from 15 to 5 percent of losses.",
            "A back-of-the-envelope calculation suggests that the fiscal cost was small relative to the credit generated. With a loss-given-default of about 60 percent and an additional 0.6 points of defaults on guaranteed balances, expected additional losses amount to roughly 0.4 percent of guaranteed loans, while the fee reduction costs another 0.4 percent per year. These figures are well below the expected increase in firm value implied by the investment and employment responses, although a full welfare evaluation would need to account for the deadweight cost of public funds and for the possibility that some supported firms will default after our sample ends.",
          ],
        },
      ],
    },
    {
      id: "mechanisms",
      heading: "8. Mechanisms and Heterogeneity",
      paragraphs: [
        "If guarantees relaxed credit constraints, effects should be concentrated among firms about which banks have least information. Table 4 splits the sample by firm age and by whether the firm had any bank loan before 2020. Effects on credit and investment are roughly twice as large for firms younger than seven years as for older firms, and for firms with no prior bank relationship as for those with one. Figure 2 summarises the investment effects across subgroups. Among older firms with established relationships, the increase in guaranteed loans was accompanied by a significant decline in non-guaranteed loans, so that about half of guaranteed lending replaced credit that banks would have extended anyway.",
        "We also find larger effects among firms in industries more dependent on external finance, measured by the share of capital expenditure not financed by internal cash flow in the United States [25], and among firms with low cash holdings in 2019. Effects do not differ significantly between manufacturing and services, nor between firms in regions with high and low COVID-19 case rates in 2020, suggesting that the programme mattered mainly through credit access rather than through exposure to the health shock itself.",
      ],
      tables: [
        {
          id: "table-4",
          caption: "Table 4. Heterogeneous effects by firm age and banking relationship",
          columns: ["Subsample", "Δ log credit", "Δ investment rate", "Δ log employment", "Δ log non-guaranteed loans"],
          rows: [
            ["Firm age < 7 years", "0.27***", "0.036***", "0.044**", "0.01"],
            ["", "(0.07)", "(0.011)", "(0.021)", "(0.06)"],
            ["Firm age ≥ 7 years", "0.14***", "0.017**", "0.025*", "−0.05"],
            ["", "(0.04)", "(0.008)", "(0.014)", "(0.04)"],
            ["No prior bank relationship", "0.31***", "0.041***", "0.049**", "0.02"],
            ["", "(0.09)", "(0.014)", "(0.024)", "(0.07)"],
            ["Prior bank relationship", "0.15***", "0.019***", "0.027**", "−0.06*"],
            ["", "(0.04)", "(0.007)", "(0.013)", "(0.03)"],
            ["Older firms with relationship", "0.11***", "0.012*", "0.019", "−0.09**"],
            ["", "(0.04)", "(0.007)", "(0.013)", "(0.04)"],
          ],
          note: "Note: Local linear estimates; standard errors clustered by industry in parentheses. * p < 0.10, ** p < 0.05, *** p < 0.01.",
        },
      ],
      figures: [
        {
          id: "figure-2",
          caption: "Figure 2. Effect of eligibility on the investment rate, by subgroup",
          kind: "bar",
          xLabels: ["All firms", "Age < 7", "Age ≥ 7", "No relationship", "Relationship", "High ext. dependence", "Low ext. dependence"],
          yLabel: "Percentage points",
          series: [{ name: "RD estimate", values: [2.3, 3.6, 1.7, 4.1, 1.9, 3.2, 1.4] }],
          note: "Note: Regression-discontinuity estimates of the change in the investment rate; external dependence follows Rajan and Zingales (1998).",
        },
      ],
      subsections: [
        {
          id: "loan-terms",
          heading: "8.1 Loan Terms",
          paragraphs: [
            "Could the expansion have raised borrowing simply by making loans cheaper, even for unconstrained firms? Table 5 examines loan terms on new loans. Interest rates on new guaranteed loans to eligible firms were 0.21 percentage points lower than for ineligible firms, maturities were slightly longer and the share of loans requiring additional collateral fell by 6 percentage points. Together with the lower fee, the all-in cost of guaranteed credit fell by roughly 0.6 percentage points. Given estimates of the interest elasticity of SME loan demand, a price reduction of this size could account for only a small fraction of the 18 percent increase in credit; the bulk reflects an increase in the quantity of credit that banks were willing to supply.",
            "The rise in the approval rate supports this interpretation. Among firms that applied for a guarantee, the share approved rose by 7.8 percentage points at the threshold, and the share that subsequently obtained a bank loan on the strength of a guarantee rose by 9.1 points. Banks were thus more willing both to support applications and to lend once a guarantee was issued, consistent with the framework in Section 4 in which a higher guaranteed share lowers the quality threshold for lending.",
          ],
          tables: [
            {
              id: "table-5",
              caption: "Table 5. Loan terms and approval",
              columns: ["Outcome", "RD estimate", "Std. error", "Mean above threshold"],
              rows: [
                ["Interest rate on new guaranteed loans (percent)", "−0.21***", "(0.05)", "3.12"],
                ["Maturity (months)", "2.4*", "(1.3)", "38.6"],
                ["Additional collateral required (share)", "−0.06***", "(0.02)", "0.27"],
                ["Guarantee approval rate (applicants)", "0.078***", "(0.019)", "0.712"],
                ["Bank loan obtained after guarantee", "0.091***", "(0.022)", "0.684"],
                ["All-in cost of guaranteed credit (percent)", "−0.57***", "(0.07)", "4.31"],
              ],
              note: "Note: Loan-level outcomes aggregated to the firm; all-in cost is the interest rate plus the annual guarantee fee. * p < 0.10, *** p < 0.01.",
            },
          ],
        },
      ],
    },
    {
      id: "robustness",
      heading: "9. Robustness",
      paragraphs: [
        "Table 6 shows that the main estimates are robust to a range of alternative choices. Halving or doubling the bandwidth changes the estimated effect on credit by no more than 0.02 log points, and using a uniform kernel or a local quadratic specification yields similar results. Difference-in-discontinuity estimates that subtract the 2018–2019 discontinuity are almost identical to the baseline, confirming that there was no pre-existing jump in outcomes at the threshold [24]. Excluding firms within 2 percent of the threshold — a donut specification that guards against any residual manipulation — also leaves the estimates unchanged.",
        "Placebo thresholds at KRW 8 billion and KRW 12 billion produce small and insignificant estimates, as does the true threshold in 2018–2019. Restricting the sample to firms with externally audited statements, whose reported sales are less likely to be misreported, slightly increases the estimates. Finally, controlling for receipt of other pandemic support — principal deferrals and emergency loans from state-owned banks — does not affect the results, consistent with these programmes applying equally on both sides of the threshold.",
      ],
      tables: [
        {
          id: "table-6",
          caption: "Table 6. Robustness of the main estimates",
          columns: ["Specification", "Δ log credit", "Δ investment rate", "Δ log employment"],
          rows: [
            ["Baseline", "0.18***", "0.023***", "0.031**"],
            ["Half bandwidth", "0.19***", "0.025**", "0.033*"],
            ["Double bandwidth", "0.16***", "0.021***", "0.028**"],
            ["Uniform kernel", "0.17***", "0.022***", "0.030**"],
            ["Local quadratic", "0.20***", "0.026**", "0.034*"],
            ["Difference-in-discontinuities", "0.18***", "0.022***", "0.030**"],
            ["Donut (exclude ±2 percent)", "0.18***", "0.024***", "0.032**"],
            ["Audited firms only", "0.20***", "0.025***", "0.035**"],
            ["Controlling for other support", "0.17***", "0.022***", "0.030**"],
            ["Placebo threshold, KRW 8 billion", "0.02", "0.003", "0.004"],
            ["Placebo threshold, KRW 12 billion", "−0.01", "−0.002", "0.006"],
            ["True threshold, 2018–2019", "0.01", "0.001", "−0.003"],
          ],
          note: "Note: Each cell is a separate local linear regression-discontinuity estimate. * p < 0.10, ** p < 0.05, *** p < 0.01.",
        },
      ],
    },
    {
      id: "discussion",
      heading: "10. Discussion",
      paragraphs: [
        "Our results suggest that Korea's expanded credit guarantees eased binding credit constraints for many small firms during the pandemic. The additional credit was not simply a relabelling of loans that would have been made anyway: total credit rose by about four times as much as non-guaranteed credit fell, and investment and employment responded strongly. This contrasts with evidence that a large share of US Paycheck Protection Program funds went to firms that would have maintained employment without them [7][16], a difference that may reflect the design of guarantees, which require a bank to lend and retain some exposure, compared with forgivable loans that are attractive to all firms.",
        "At the same time, the results highlight the value of targeting. For older firms with established bank relationships, about half of guaranteed lending substituted for non-guaranteed credit, implying that the public subsidy partly benefited banks and borrowers without changing real outcomes. Directing guarantees towards young firms and firms without banking relationships, or varying the guaranteed share with measures of information opacity, would raise the additional credit generated per won of public exposure [5][6].",
        "Two caveats apply. First, our estimates are local to firms near the KRW 10 billion threshold and may not apply to the smallest businesses, many of which were served by regional guarantee foundations, or to larger SMEs. Second, our sample ends in mid-2021, before the expanded terms expired and before many guaranteed loans matured. If supported firms default at higher rates when support is withdrawn, the eventual fiscal cost will exceed our estimates, and some guarantees may have kept unviable firms in operation — an issue examined in the article on zombie firms in this issue.",
      ],
    },
    {
      id: "conclusion",
      heading: "11. Conclusion",
      paragraphs: [
        "Korea's 2020 expansion of credit guarantees raised new bank credit of eligible small firms by 18 percent, their investment rate by 2.3 percentage points and their employment by 3.1 percent within a year, while default rates on guaranteed loans rose by only 0.6 percentage points. Effects were concentrated among young firms and firms without prior banking relationships, indicating that guarantees relaxed binding credit constraints. Guarantees can thus support investment and employment at modest cost in a crisis, and targeting them towards informationally opaque firms would improve their additionality further [4][6].",
      ],
    },
    {
      id: "appendix",
      heading: "Appendix A. Data Construction",
      paragraphs: [
        "Matching. Guarantee records and credit registry data are linked to financial statements using the business registration number. Of the firms with 2019 sales within 50 percent of the threshold in the financial statement database, 96 percent are matched to the credit registry; unmatched firms have no bank debt and are retained with zero credit. Results are similar when these firms are excluded.",
        "Running variable. Sales are taken from the 2019 financial statements as filed with the tax authority or auditor. For firms with a fiscal year not ending in December, we use the most recent statement filed before April 2020, which is the one KODIT used to determine eligibility. Using the eligibility flag recorded in KODIT's files for applicants yields a first stage close to one, confirming that the threshold was applied as described.",
        "Inference. With 61,000 firms but clustering by 214 four-digit industries, conventional cluster-robust standard errors are reliable. We also report robust bias-corrected confidence intervals [20], which are about 15 percent wider than the conventional intervals reported in the tables but lead to the same conclusions about statistical significance for all main outcomes.",
      ],
    },
  ],
};
