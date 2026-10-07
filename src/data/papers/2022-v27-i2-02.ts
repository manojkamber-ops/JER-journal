// Vol. 27, No. 2 (April 2022) — full text for an article defined in journal.ts (sample content).
import type { FulltextSpec } from "../paper-spec";

export const fulltext: FulltextSpec = {
  id: "2022-v27-i2-02",
  acknowledgments:
    "We thank seminar participants at Hanyang University and Bocconi University, two anonymous referees and the handling editor for helpful comments. We are grateful to Korea Enterprise Data for providing access to the financial statement database under a research agreement.",
  dataAvailability:
    "Firm-level financial statements and business status records were provided by Korea Enterprise Data under a licence that does not permit redistribution; researchers can apply for access directly to the provider. Industry-level variables, code and instructions for reproducing the sample are available from the corresponding author.",
  editorialNote:
    "Tae-Woo Lee and Roberto Rossi use the global financial crisis and the COVID-19 shock as natural experiments and find that a one-standard-deviation increase in pre-crisis reliance on trade credit lowers the probability of small-firm exit during the downturn by 4.8 percentage points, with the effect concentrated among financially constrained firms.",
  refs: [
    /* 1 */ "Petersen, M. A., & Rajan, R. G. (1997). Trade credit: Theories and evidence. Review of Financial Studies, 10(3), 661–691.",
    /* 2 */ "Biais, B., & Gollier, C. (1997). Trade credit and credit rationing. Review of Financial Studies, 10(4), 903–937.",
    /* 3 */ "Burkart, M., & Ellingsen, T. (2004). In-kind finance: A theory of trade credit. American Economic Review, 94(3), 569–590.",
    /* 4 */ "Cuñat, V. (2007). Trade credit: Suppliers as debt collectors and insurance providers. Review of Financial Studies, 20(2), 491–527.",
    /* 5 */ "Love, I., Preve, L. A., & Sarria-Allende, V. (2007). Trade credit and bank credit: Evidence from recent financial crises. Journal of Financial Economics, 83(2), 453–469.",
    /* 6 */ "Garcia-Appendini, E., & Montoriol-Garriga, J. (2013). Firms as liquidity providers: Evidence from the 2007–2008 financial crisis. Journal of Financial Economics, 109(1), 272–291.",
    /* 7 */ "Fisman, R., & Love, I. (2003). Trade credit, financial intermediary development, and industry growth. Journal of Finance, 58(1), 353–374.",
    /* 8 */ "Giannetti, M., Burkart, M., & Ellingsen, T. (2011). What you sell is what you lend? Explaining trade credit contracts. Review of Financial Studies, 24(4), 1261–1298.",
    /* 9 */ "Klapper, L., Laeven, L., & Rajan, R. (2012). Trade credit contracts. Review of Financial Studies, 25(3), 838–867.",
    /* 10 */ "Meltzer, A. H. (1960). Mercantile credit, monetary policy, and size of firms. Review of Economics and Statistics, 42(4), 429–437.",
    /* 11 */ "Nilsen, J. H. (2002). Trade credit and the bank lending channel. Journal of Money, Credit and Banking, 34(1), 226–253.",
    /* 12 */ "Chodorow-Reich, G. (2014). The employment effects of credit market disruptions: Firm-level evidence from the 2008–9 financial crisis. Quarterly Journal of Economics, 129(1), 1–59.",
    /* 13 */ "Campello, M., Graham, J. R., & Harvey, C. R. (2010). The real effects of financial constraints: Evidence from a financial crisis. Journal of Financial Economics, 97(3), 470–487.",
    /* 14 */ "Duchin, R., Ozbas, O., & Sensoy, B. A. (2010). Costly external finance, corporate investment, and the subprime mortgage credit crisis. Journal of Financial Economics, 97(3), 418–435.",
    /* 15 */ "Ivashina, V., & Scharfstein, D. (2010). Bank lending during the financial crisis of 2008. Journal of Financial Economics, 97(3), 319–338.",
    /* 16 */ "Kashyap, A. K., Stein, J. C., & Wilcox, D. W. (1993). Monetary policy and credit conditions: Evidence from the composition of external finance. American Economic Review, 83(1), 78–98.",
    /* 17 */ "Gertler, M., & Gilchrist, S. (1994). Monetary policy, business cycles, and the behavior of small manufacturing firms. Quarterly Journal of Economics, 109(2), 309–340.",
    /* 18 */ "Hadlock, C. J., & Pierce, J. R. (2010). New evidence on measuring financial constraints: Moving beyond the KZ index. Review of Financial Studies, 23(5), 1909–1940.",
    /* 19 */ "Whited, T. M., & Wu, G. (2006). Financial constraints risk. Review of Financial Studies, 19(2), 531–559.",
    /* 20 */ "Jacobson, T., & von Schedvin, E. (2015). Trade credit and the propagation of corporate failure: An empirical analysis. Econometrica, 83(4), 1315–1371.",
    /* 21 */ "Boissay, F., & Gropp, R. (2013). Payment defaults and interfirm liquidity provision. Review of Finance, 17(6), 1853–1894.",
    /* 22 */ "Gourinchas, P.-O., Kalemli-Özcan, Ş., Penciakova, V., & Sander, N. (2020). Estimating SME failures in real time: An application to the COVID-19 crisis. NBER Working Paper No. 27877. Cambridge, MA: National Bureau of Economic Research.",
    /* 23 */ "Bartik, A. W., Bertrand, M., Cullen, Z., Glaeser, E. L., Luca, M., & Stanton, C. (2020). The impact of COVID-19 on small business outcomes and expectations. Proceedings of the National Academy of Sciences, 117(30), 17656–17666.",
    /* 24 */ "Ng, C. K., Smith, J. K., & Smith, R. L. (1999). Evidence on the determinants of credit terms used in interfirm trade. Journal of Finance, 54(3), 1109–1129.",
    /* 25 */ "Rajan, R. G., & Zingales, L. (1998). Financial dependence and growth. American Economic Review, 88(3), 559–586.",
    /* 26 */ { jer: "2022-v27-i1-01" },
    /* 27 */ { jer: "2022-v27-i1-04" },
    /* 28 */ { jer: "2021-v26-i1-01" },
  ],
  body: [
    {
      id: "introduction",
      heading: "1. Introduction",
      paragraphs: [
        "Small businesses are especially vulnerable when credit markets seize up. They depend heavily on banks, have little access to bond or equity markets, and are the first borrowers to be rationed when lenders become cautious [16][17]. During the 2008–2009 global financial crisis, bank lending to small firms contracted sharply in many countries, and firms that depended on weakened lenders cut employment substantially [12][15]. During the COVID-19 shock, sudden revenue losses threatened the liquidity of millions of small firms, many of which held cash buffers sufficient for only a few weeks of expenses [22][23].",
        "Trade credit — the deferred payment that suppliers grant their customers — is one of the most important alternative sources of short-term finance for small firms. In most economies, accounts payable are as large as or larger than short-term bank loans on the balance sheets of small and medium-sized enterprises. A long literature argues that suppliers may be willing to lend when banks are not, because they have better information about their customers, can more easily repossess and resell goods, and have a stake in their customers' survival [1][2][3][4]. Whether trade credit actually protects small firms in downturns is less clear: suppliers themselves face liquidity shortages in crises, and trade-credit chains can propagate rather than absorb shocks [5][20][21].",
        "This paper examines the role of trade credit in supporting small business survival during economic downturns using firm-level Korean data over 2008–2022. We use the 2008–2009 global financial crisis and the 2020 COVID-19 shock as natural experiments. Both episodes were triggered by events outside the Korean small-business sector — the collapse of global wholesale funding markets and a pandemic — and both produced sharp, unexpected deteriorations in credit conditions and demand. We ask whether firms that relied more heavily on trade credit before each crisis were more likely to survive it, and compare the relationship during crises with the relationship in normal years.",
        "Our data cover 186,420 small and medium-sized firms with annual financial statements from Korea Enterprise Data, linked to business registration records that identify closures. We measure trade-credit reliance as accounts payable relative to total assets, averaged over the two years before each crisis. To address the concern that reliance on trade credit reflects unobserved firm quality, we control for a rich set of pre-crisis characteristics, compare the crisis-period relationship with the relationship in non-crisis years, and instrument firm-level reliance with industry-level norms in supplier financing that reflect the technological characteristics of the goods firms purchase [7][8].",
        "We find that a one-standard-deviation increase in pre-crisis trade-credit reliance reduces the probability of firm exit during the subsequent downturn by 4.8 percentage points, relative to an average two-year exit rate of 12.6 percent in the crisis samples. The effect is similar in the two episodes — 5.3 percentage points in the financial crisis and 4.2 percentage points in the COVID-19 shock — and is much smaller in normal years. It is concentrated among financially constrained firms: for firms in the most constrained tercile of a size-age index [18], the effect is 7.9 percentage points, while for the least constrained tercile it is small and statistically insignificant. Mechanism evidence shows that firms with high pre-crisis reliance maintained their supplier financing during the crisis while their bank credit contracted, consistent with suppliers acting as liquidity providers [6].",
        "Our findings contribute to the literature on trade credit as a substitute for bank credit [1][5][6][11], to work on the real effects of credit-market disruptions on firms [12][13][14], and to the emerging literature on small-business survival during the pandemic [22][23]. They also complement recent evidence on Korean policy responses to the COVID-19 shock, including credit guarantees [26] and job retention subsidies [28]. The findings highlight the importance of supplier financing as a stabiliser during periods of credit-market disruption and suggest that policies supporting the liquidity of suppliers may have large indirect benefits for their small customers.",
      ],
    },
    {
      id: "background",
      heading: "2. Institutional Background",
      paragraphs: [
        "Small and medium-sized enterprises account for more than 99 percent of Korean firms and about 80 percent of private employment. Many operate as suppliers or subcontractors to large business groups, and inter-firm payment arrangements are central to their finances. Payment terms in Korea have historically been long: settlement through promissory notes with maturities of three months or more was common until the 2000s, and although the government has promoted electronic settlement and shorter terms, accounts payable remain a large share of small firms' liabilities.",
        "The 2008–2009 global financial crisis reached Korea in September 2008, when the collapse of Lehman Brothers triggered a sudden withdrawal of foreign funding from Korean banks. The won depreciated by more than a third against the dollar between the summer of 2008 and March 2009, interest rate spreads on corporate borrowing widened sharply, and banks tightened lending standards for small firms. Exports fell by about a fifth in the first half of 2009. The government responded with a large expansion of public credit guarantees and a temporary programme of loan maturity extensions for small firms.",
        "The COVID-19 shock struck in February and March 2020. Korea avoided general lockdowns, but social distancing measures, the collapse of tourism and the fall in global demand caused sharp revenue losses, particularly in services. Bank credit conditions initially tightened, and the government again responded with credit guarantees, loan maturity extensions, interest payment deferrals and employment subsidies [26][28]. Unlike in 2008–2009, the policy response was immediate and large, and the banking system was not itself under stress. The two episodes thus differ in the source of the shock — a financial shock in 2008, a real shock in 2020 — which allows us to examine whether trade credit matters in both types of downturn.",
      ],
    },
    {
      id: "literature",
      heading: "3. Related Literature",
      paragraphs: [
        "Theories of trade credit explain why suppliers lend to customers that banks may not finance. Suppliers may have an information advantage, because they observe their customers' orders and payment behaviour in the normal course of business [1][2]. Inputs are less easily diverted than cash, which limits moral hazard [3]. Suppliers that sell differentiated goods face higher switching costs and therefore have a stronger interest in their customers' survival, making them willing to provide liquidity insurance [4][8]. Contract terms vary systematically with the characteristics of buyers and sellers [9][24]. At the macroeconomic level, Meltzer {10} observed that large firms extended more trade credit to small firms during periods of tight money, and Nilsen {11} showed that small firms substitute trade credit for bank loans when monetary policy tightens.",
        "Empirical evidence on trade credit in crises is mixed. Love, Preve and Sarria-Allende {5} study emerging-market crises and find that trade credit provision increased immediately after crises but then contracted, as suppliers' own access to finance deteriorated. Garcia-Appendini and Montoriol-Garriga {6} show that cash-rich US suppliers increased trade credit to their customers during the 2007–2008 crisis, and that customers of such suppliers performed better. On the other hand, Jacobson and von Schedvin {20} show, using Swedish data, that trade-credit chains propagate corporate failures from customers to suppliers, and Boissay and Gropp {21} find that firms facing payment defaults by customers pass them on to their own suppliers. Industry-level evidence suggests that trade credit facilitates growth in countries with weaker financial systems [7].",
        "A related literature documents the real effects of credit-market disruptions. Campello, Graham and Harvey {13} find that financially constrained firms cut investment, employment and technology spending during the financial crisis; Duchin, Ozbas and Sensoy {14} show that the decline in investment was concentrated among firms with low cash reserves or high external finance dependence; and Chodorow-Reich {12} shows that firms with pre-crisis relationships with weaker lenders cut employment more. We study survival rather than investment or employment, and we focus on the role of non-bank finance in mitigating credit-market disruptions. Our analysis also relates to work on the persistence of unviable firms in Korea [27]: if trade credit helped weak firms survive, it might have contributed to the accumulation of zombie firms, a possibility we examine below.",
      ],
    },
    {
      id: "framework",
      heading: "4. Conceptual Framework and Hypotheses",
      paragraphs: [
        "Consider a small firm that must cover operating costs before receiving revenue. In normal times it finances the gap with internal funds, bank credit and trade credit. A downturn reduces revenue and tightens bank credit, so the firm faces a liquidity shortfall; if the shortfall exceeds its available finance, it must exit even if it would be viable in the long run. The probability of exit therefore depends on the size of the shortfall and on the availability of finance during the crisis.",
        "Trade credit can reduce the probability of exit in two ways. First, firms with established supplier-credit relationships can continue to buy inputs on credit while bank credit contracts, because suppliers with information advantages or a stake in their customers' survival continue to lend [1][4]. Second, suppliers may extend payment terms to customers in temporary difficulty, effectively providing liquidity insurance [4][6]. On the other hand, firms that rely heavily on trade credit may be exposed to the liquidity problems of their suppliers, which may withdraw credit when their own finances deteriorate [5][20].",
        "This framework yields three hypotheses. H1: firms with greater pre-crisis reliance on trade credit are less likely to exit during downturns, and the relationship is stronger in downturns than in normal years. H2: the effect is concentrated among financially constrained firms, for which the contraction of bank credit binds most tightly. H3: firms with greater reliance on trade credit maintain their supplier financing during downturns while their bank credit contracts; the effect is larger when suppliers are themselves financially strong.",
      ],
    },
    {
      id: "data",
      heading: "5. Data",
      paragraphs: [
        "We construct a firm-year panel spanning 2008 to 2022 from two administrative sources, which we link through business registration numbers.",
      ],
      subsections: [
        {
          id: "data-sources",
          heading: "5.1 Financial Statements and Exit",
          paragraphs: [
            "Financial statements come from Korea Enterprise Data, a credit-information company that collects annual statements for all externally audited firms and for a large number of non-audited firms that submit statements to banks and credit guarantee institutions. The database provides balance sheets and income statements, the number of employees, industry, location and year of establishment, and the identity of firms' main banks. We use statements for fiscal years 2006 to 2021, which allows us to measure pre-crisis characteristics for both episodes.",
            "Exit is measured from business registration status, which records the date on which a business is closed or deregistered with the National Tax Service, and from the Korea Enterprise Data status file, which records bankruptcies and liquidations. We define exit as closure, deregistration, bankruptcy or liquidation, and observe exits through the first quarter of 2022. Mergers and acquisitions, which account for less than 2 percent of disappearances, are not counted as exits. We verify that firms classified as exiting do not reappear under the same registration number.",
          ],
        },
        {
          id: "data-sample",
          heading: "5.2 Sample and Variables",
          paragraphs: [
            "We restrict the sample to firms with between 5 and 299 employees, the definition of small and medium-sized enterprises used for most Korean policy purposes, in manufacturing, construction, wholesale and retail trade, and business services. We exclude firms in finance, utilities and the public sector, and firms with missing or inconsistent financial information. The final sample contains 186,420 firms and 1.42 million firm-year observations. The financial crisis sample comprises 98,750 firms that were active in 2007, and the COVID-19 sample 152,310 firms that were active in 2019.",
            "Our main explanatory variable is trade-credit reliance, defined as accounts payable divided by total assets, averaged over the two fiscal years before each crisis (2006–2007 and 2018–2019) to reduce noise. We standardise the variable within each crisis sample. The mean of trade-credit reliance is 0.162 and its standard deviation 0.118. Our main outcome is an indicator for exit within two years of the onset of each crisis (2008Q4–2010Q3 and 2020Q1–2021Q4). Controls include log total assets, firm age, leverage, cash holdings, profitability, sales growth, the ratio of accounts receivable to assets, and an indicator for affiliation with a large business group as a supplier.",
            "We measure financial constraints using the size-age index of Hadlock and Pierce {18}, computed from pre-crisis assets and age, and alternatively by whether a firm had no bank credit line in the pre-crisis year. Table 1 reports descriptive statistics. The two-year exit rate was 13.8 percent in the financial crisis sample and 11.9 percent in the COVID-19 sample, compared with 9.6 percent in non-crisis years. Firms with above-median trade-credit reliance are slightly larger and younger and have lower cash holdings than firms with below-median reliance.",
          ],
          tables: [
            {
              id: "table-1",
              caption: "Table 1. Descriptive statistics, pre-crisis characteristics",
              columns: ["Variable", "Financial crisis sample", "COVID-19 sample", "Low TC reliance", "High TC reliance"],
              rows: [
                ["Trade-credit reliance (payables/assets)", "0.171", "0.156", "0.068", "0.257"],
                ["Exit within two years (%)", "13.8", "11.9", "13.9", "11.3"],
                ["Total assets (KRW billion)", "6.8", "8.9", "7.4", "8.6"],
                ["Firm age (years)", "13.2", "15.7", "15.8", "13.6"],
                ["Leverage (debt/assets)", "0.612", "0.587", "0.584", "0.612"],
                ["Cash/assets", "0.094", "0.112", "0.121", "0.089"],
                ["Bank loans/assets", "0.248", "0.231", "0.262", "0.215"],
                ["No bank credit line (%)", "31.4", "27.6", "28.1", "30.2"],
                ["Firms", "98,750", "152,310", "125,530", "125,530"],
              ],
              note: "Note: Low and high TC reliance split the pooled crisis samples at the median of trade-credit reliance within each sample. All variables are measured as averages over the two fiscal years before each crisis, except exit.",
            },
          ],
        },
      ],
    },
    {
      id: "strategy",
      heading: "6. Empirical Strategy",
      paragraphs: [
        "Our empirical strategy compares the survival of firms with different pre-crisis trade-credit reliance during each downturn, and asks whether the relationship is stronger in downturns than in normal years.",
      ],
      subsections: [
        {
          id: "strategy-baseline",
          heading: "6.1 Baseline Specification",
          paragraphs: [
            "For each crisis sample we estimate the linear probability model Exit_i = β TC_i + X_i′ γ + μ_js + ε_i, where Exit_i indicates exit within two years of the onset of the crisis, TC_i is standardised pre-crisis trade-credit reliance, X_i contains the pre-crisis controls and μ_js are fixed effects for 3-digit industry interacted with province. We pool the two crisis samples with crisis-specific fixed effects and controls to obtain our main estimate. Standard errors are clustered by 3-digit industry, the level at which supplier relationships and trade-credit norms are most strongly correlated.",
            "The key threat to identification is that trade-credit reliance may be correlated with unobserved firm quality. Suppliers may extend more credit to firms they consider more viable, in which case firms with high reliance would be more likely to survive in any period. To address this concern, we estimate the same specification for two-year windows in non-crisis years (2012–2013, 2014–2015 and 2016–2017) and estimate a difference-in-differences model that compares the coefficient on trade-credit reliance in crisis windows with that in normal windows. Under the assumption that the selection of firms into trade-credit reliance on unobserved quality is similar across periods, the difference identifies the additional protective role of trade credit in downturns.",
          ],
        },
        {
          id: "strategy-iv",
          heading: "6.2 Instrumental Variables",
          paragraphs: [
            "As a second strategy, we instrument firm-level trade-credit reliance with industry-level trade-credit norms that reflect the characteristics of the inputs firms purchase. Following the logic of Rajan and Zingales {25} and Fisman and Love {7}, we use the median ratio of accounts payable to assets among large, unconstrained firms in the same 4-digit industry in the pre-crisis years, which captures the technological component of supplier financing — for example, the extent to which inputs are differentiated and hence more likely to be sold on credit [8] — rather than the choices of individual small firms. The exclusion restriction requires that, conditional on our controls and industry-group fixed effects, industry trade-credit norms affect survival only through firms' reliance on trade credit. Because we include 2-digit industry-by-province fixed effects, identification comes from variation in norms across 4-digit industries within broad sectors.",
            "To examine the dynamics of the relationship, we also estimate annual exit hazards for all firm-years from 2008 to 2021, interacting standardised trade-credit reliance measured two years earlier with year indicators. This allows us to trace how the protective role of trade credit varies over the business cycle.",
          ],
        },
      ],
    },
    {
      id: "results",
      heading: "7. Results",
      paragraphs: [
        "We present the baseline estimates, the instrumental variables estimates and the heterogeneity of effects by financial constraints.",
      ],
      subsections: [
        {
          id: "results-baseline",
          heading: "7.1 Baseline Estimates",
          paragraphs: [
            "Table 2 reports the baseline estimates. In the pooled crisis sample with full controls (column 3), a one-standard-deviation increase in pre-crisis trade-credit reliance reduces the probability of exit within two years by 4.8 percentage points (standard error 1.1). Relative to the average two-year exit rate of 12.6 percent in the crisis samples, this is a reduction of about 38 percent. The estimate is 5.3 percentage points in the financial crisis sample (column 1) and 4.2 percentage points in the COVID-19 sample (column 2); the difference between the two is not statistically significant.",
            "In normal years, the relationship between trade-credit reliance and exit is much weaker: a one-standard-deviation increase reduces the two-year exit probability by 0.9 percentage points (column 4). The difference-in-differences estimate in column 5 implies that the protective effect of trade credit is 3.9 percentage points larger in crisis periods than in normal years. These results support H1. The normal-year estimate also suggests that selection on unobserved firm quality accounts for at most a fifth of the crisis-period relationship.",
            "Figure 1 plots the annual hazard coefficients. In normal years, the coefficient on trade-credit reliance is small, between −0.2 and −0.6 percentage points. It becomes large and negative in 2009 and 2010 and again in 2020 and 2021, with the sum of the two crisis-year coefficients close to the two-year estimates in Table 2. The protective role of trade credit thus rises sharply in downturns and recedes when conditions normalise.",
          ],
          tables: [
            {
              id: "table-2",
              caption: "Table 2. Trade-credit reliance and firm exit",
              columns: ["", "(1) Financial crisis", "(2) COVID-19", "(3) Pooled crises", "(4) Normal years", "(5) Crisis − normal"],
              rows: [
                ["TC reliance (s.d.)", "−0.053***", "−0.042***", "−0.048***", "−0.009**", "−0.039***"],
                ["", "(0.013)", "(0.012)", "(0.011)", "(0.004)", "(0.010)"],
                ["Mean exit rate", "0.138", "0.119", "0.126", "0.096", "—"],
                ["Pre-crisis controls", "Yes", "Yes", "Yes", "Yes", "Yes"],
                ["Industry × province FE", "Yes", "Yes", "Yes", "Yes", "Yes"],
                ["Firms", "98,750", "152,310", "251,060", "411,840", "662,900"],
              ],
              note: "Note: Linear probability models of exit within two years. Column (5) pools crisis and normal windows and reports the interaction of TC reliance with a crisis indicator. Observations in columns (3)–(5) are firm-window pairs. Standard errors clustered by 3-digit industry in parentheses. *** p < 0.01, ** p < 0.05, * p < 0.10.",
            },
          ],
          figures: [
            {
              id: "figure-1",
              caption: "Figure 1. Annual exit-hazard coefficients on lagged trade-credit reliance, 2008–2021",
              kind: "line",
              xLabels: ["2008", "2009", "2010", "2011", "2012", "2013", "2014", "2015", "2016", "2017", "2018", "2019", "2020", "2021"],
              yLabel: "Effect on annual exit probability (pp)",
              series: [
                {
                  name: "Estimate",
                  values: [-0.6, -2.9, -2.3, -0.7, -0.4, -0.5, -0.3, -0.4, -0.2, -0.5, -0.4, -0.6, -2.2, -1.9],
                  lower: [-1.3, -4.0, -3.4, -1.4, -1.0, -1.1, -0.9, -1.0, -0.8, -1.1, -1.0, -1.2, -3.2, -2.9],
                  upper: [0.1, -1.8, -1.2, 0.0, 0.2, 0.1, 0.3, 0.2, 0.4, 0.1, 0.2, 0.0, -1.2, -0.9],
                },
              ],
              note: "Note: Coefficients on standardised trade-credit reliance measured two years earlier, interacted with year indicators, from a linear probability model of annual exit with 95 percent confidence intervals. Crisis years are 2009–2010 and 2020–2021.",
            },
          ],
        },
        {
          id: "results-iv",
          heading: "7.2 Instrumental Variables Estimates",
          paragraphs: [
            "Table 3 reports the instrumental variables estimates. The first stage is strong: a one-standard-deviation increase in the industry trade-credit norm raises firm-level reliance by 0.41 standard deviations, with a first-stage F-statistic of 62. The second-stage estimate in the pooled crisis sample implies that a one-standard-deviation increase in trade-credit reliance reduces exit by 5.6 percentage points, slightly larger than the OLS estimate. This is consistent with measurement error in firm-level reliance attenuating the OLS estimate, or with the IV estimate capturing the effect for firms whose reliance is determined by input characteristics rather than by supplier assessments of their quality.",
            "The reduced-form estimates show that firms in industries with higher trade-credit norms were less likely to exit in both crises, but not in normal years, which supports the exclusion restriction: if industry norms were correlated with unobserved industry-level determinants of survival, we would expect a relationship in normal years as well. The IV estimates are 6.1 percentage points for the financial crisis and 5.0 percentage points for the COVID-19 shock.",
          ],
          tables: [
            {
              id: "table-3",
              caption: "Table 3. Instrumental variables estimates",
              columns: ["", "(1) Financial crisis", "(2) COVID-19", "(3) Pooled crises", "(4) Normal years"],
              rows: [
                ["Second stage: TC reliance (s.d.)", "−0.061***", "−0.050***", "−0.056***", "−0.007"],
                ["", "(0.019)", "(0.017)", "(0.016)", "(0.008)"],
                ["First stage: industry TC norm (s.d.)", "0.43***", "0.39***", "0.41***", "0.40***"],
                ["", "(0.06)", "(0.05)", "(0.05)", "(0.05)"],
                ["First-stage F-statistic", "51.4", "60.8", "62.0", "64.3"],
                ["Reduced form: industry TC norm", "−0.026***", "−0.020***", "−0.023***", "−0.003"],
                ["", "(0.008)", "(0.007)", "(0.006)", "(0.003)"],
                ["Firms", "98,750", "152,310", "251,060", "411,840"],
              ],
              note: "Note: The instrument is the median ratio of accounts payable to assets among large firms in the same 4-digit industry in the pre-crisis years. All specifications include pre-crisis controls and 2-digit industry × province fixed effects. Standard errors clustered by 3-digit industry in parentheses. *** p < 0.01, ** p < 0.05, * p < 0.10.",
            },
          ],
        },
        {
          id: "results-constraints",
          heading: "7.3 Financially Constrained Firms",
          paragraphs: [
            "Table 4 reports effects by financial constraints. For firms in the most constrained tercile of the size-age index, a one-standard-deviation increase in trade-credit reliance reduces the probability of exit by 7.9 percentage points. For the middle tercile the effect is 4.6 percentage points, and for the least constrained tercile it is 1.4 percentage points and statistically insignificant. Results are similar when we classify firms by whether they had a bank credit line: the effect is 7.2 percentage points for firms without a credit line and 2.9 percentage points for firms with one. These results support H2: trade credit matters most for firms that cannot easily turn to banks.",
            "Figure 2 shows the effect by quintile of the size-age index for each crisis separately. In both crises, the effect increases monotonically with the degree of financial constraint, and the pattern is somewhat steeper in the financial crisis, when bank credit contracted most severely. Effects are also larger for younger firms and for firms in manufacturing and wholesale trade, where trade credit is most prevalent.",
          ],
          tables: [
            {
              id: "table-4",
              caption: "Table 4. Effects by financial constraints",
              columns: ["Group", "TC reliance (s.d.)", "Std. error", "Mean exit rate", "Firms"],
              rows: [
                ["Size-age index: most constrained tercile", "−0.079***", "(0.017)", "0.172", "83,690"],
                ["Size-age index: middle tercile", "−0.046***", "(0.012)", "0.121", "83,680"],
                ["Size-age index: least constrained tercile", "−0.014", "(0.010)", "0.085", "83,690"],
                ["p-value, most = least constrained", "0.000", "", "", ""],
                ["No bank credit line", "−0.072***", "(0.016)", "0.158", "73,980"],
                ["Bank credit line", "−0.029***", "(0.010)", "0.113", "177,080"],
                ["Age below 10 years", "−0.066***", "(0.016)", "0.163", "92,110"],
                ["Age 10 years or above", "−0.037***", "(0.011)", "0.105", "158,950"],
              ],
              note: "Note: Pooled crisis sample. Each row reports the coefficient on standardised TC reliance from the specification in Table 2, column (3), estimated on the indicated subsample. Standard errors clustered by 3-digit industry in parentheses. *** p < 0.01, ** p < 0.05, * p < 0.10.",
            },
          ],
          figures: [
            {
              id: "figure-2",
              caption: "Figure 2. Effect of trade-credit reliance on exit by quintile of financial constraint",
              kind: "bar",
              xLabels: ["Q1 (least constrained)", "Q2", "Q3", "Q4", "Q5 (most constrained)"],
              yLabel: "Effect on exit probability (pp)",
              series: [
                { name: "Financial crisis", values: [-0.9, -2.8, -5.0, -7.1, -9.6] },
                { name: "COVID-19", values: [-1.3, -2.6, -4.2, -5.6, -7.0] },
              ],
              note: "Note: Coefficients on standardised TC reliance estimated separately by quintile of the Hadlock–Pierce size-age index within each crisis sample, in percentage points.",
            },
          ],
        },
      ],
    },
    {
      id: "mechanisms",
      heading: "8. Mechanisms and Heterogeneity",
      paragraphs: [
        "Why did firms with greater trade-credit reliance survive more often? Table 5 examines how their financing changed during the crises. Among surviving firms, a one-standard-deviation increase in pre-crisis reliance is associated with a 6.2 percent smaller decline in accounts payable during the first crisis year and an increase of 4.1 days in days payable outstanding, while bank loans declined by a similar amount for firms with high and low reliance. Total short-term financing therefore fell by 3.7 percent less for firms with high reliance. Because exit removes the weakest firms from these regressions, the estimates are, if anything, likely to understate the difference in financing for the full sample. These results support H3: firms that relied on trade credit before the crisis maintained their supplier financing during the crisis, partly offsetting the contraction of bank credit, and suppliers extended payment terms rather than withdrawing credit.",
        "The protective effect depends on the financial strength of suppliers. We identify the main suppliers of a subset of 61,240 firms from transaction records reported to Korea Enterprise Data and classify suppliers by their pre-crisis cash holdings and affiliation with large business groups. The effect of trade-credit reliance on survival is 6.4 percentage points for firms whose main suppliers had above-median cash holdings and 2.7 percentage points for firms whose suppliers had below-median cash holdings. It is also larger for firms supplied by affiliates of large business groups, which had stable access to bank and bond financing during both crises. These patterns are consistent with evidence that cash-rich suppliers act as liquidity providers during credit crunches [6], and with the view that trade credit can propagate shocks when suppliers are themselves weak [20][21].",
        "Differentiated inputs also matter. Firms that purchase differentiated inputs, for which switching suppliers is costly, benefit more from trade-credit reliance than firms that purchase standardised goods, consistent with theories in which suppliers of differentiated goods have a stronger interest in the survival of their customers [4][8]. The effect is 5.9 percentage points for firms in the top half of the distribution of input differentiation and 3.4 percentage points for those in the bottom half.",
        "Finally, we ask whether trade credit kept unviable firms alive, contributing to the accumulation of zombie firms [27]. Among firms that survived the financial crisis, those with high pre-crisis trade-credit reliance had similar productivity growth over 2011–2015 and a similar probability of subsequently becoming zombie firms as those with low reliance. Survivors of the COVID-19 shock with high reliance also had similar sales growth in 2021. This suggests that trade credit helped viable firms bridge temporary liquidity shortfalls rather than supporting firms with poor long-run prospects.",
      ],
      tables: [
        {
          id: "table-5",
          caption: "Table 5. Changes in financing during the first crisis year, surviving firms",
          columns: ["Outcome", "TC reliance (s.d.)", "Std. error", "Mean change", "Firms"],
          rows: [
            ["Δ log accounts payable", "0.062***", "(0.014)", "−0.081", "222,140"],
            ["Δ days payable outstanding", "4.1***", "(1.0)", "2.6", "222,140"],
            ["Δ log bank loans", "−0.006", "(0.011)", "−0.047", "222,140"],
            ["Δ log total short-term financing", "0.037***", "(0.010)", "−0.058", "222,140"],
            ["Δ log accounts receivable", "0.008", "(0.012)", "−0.072", "222,140"],
            ["Δ cash/assets", "0.002", "(0.002)", "−0.009", "222,140"],
          ],
          note: "Note: Pooled crisis sample of firms that survived the first crisis year (2009 or 2020). Changes are relative to the last pre-crisis fiscal year. Specifications as in Table 2, column (3). Standard errors clustered by 3-digit industry in parentheses. *** p < 0.01, ** p < 0.05, * p < 0.10.",
        },
      ],
    },
    {
      id: "robustness",
      heading: "9. Robustness",
      paragraphs: [
        "Table 6 reports robustness checks. Measuring trade-credit reliance as accounts payable relative to the cost of goods sold, rather than total assets, yields an estimate of 4.5 percentage points. Using net trade credit, defined as payables minus receivables relative to assets, yields 4.1 percentage points, which indicates that the result is not driven by firms that also extend large amounts of trade credit to their own customers. A probit model gives an average marginal effect of 4.7 percentage points, and a Cox proportional hazards model gives a hazard ratio of 0.71 per standard deviation of reliance.",
        "A potential concern is that firms with high trade-credit reliance benefited disproportionately from government support programmes during the crises. Controlling for receipt of public credit guarantees and loan maturity extensions in each crisis reduces the estimate only slightly, to 4.5 percentage points. For the COVID-19 sample, excluding firms that received employment retention subsidies yields 4.3 percentage points. Excluding the business-service and retail industries most directly affected by social distancing in 2020, where revenue losses were largest, yields 4.6 percentage points, so the result is not driven by the sectors hit hardest by the pandemic.",
        "Results are also robust to alternative definitions of exit. Counting only bankruptcies and liquidations, which exclude voluntary closures, gives an effect of 2.6 percentage points relative to a lower mean exit rate of 5.4 percent, a proportional effect similar to the baseline. Extending the exit window to three years gives 5.5 percentage points. Excluding firms with fewer than ten employees, whose financial statements may be less reliable, yields 4.4 percentage points.",
      ],
      tables: [
        {
          id: "table-6",
          caption: "Table 6. Robustness of the effect of trade-credit reliance on exit",
          columns: ["Specification", "Estimate", "Std. error", "Mean exit rate"],
          rows: [
            ["Baseline (Table 2, column 3)", "−0.048***", "(0.011)", "0.126"],
            ["Payables/cost of goods sold", "−0.045***", "(0.011)", "0.126"],
            ["Net trade credit/assets", "−0.041***", "(0.012)", "0.126"],
            ["Probit, average marginal effect", "−0.047***", "(0.011)", "0.126"],
            ["Control for public credit support", "−0.045***", "(0.011)", "0.126"],
            ["Exit = bankruptcy or liquidation only", "−0.026***", "(0.007)", "0.054"],
            ["Three-year exit window", "−0.055***", "(0.013)", "0.163"],
            ["Firms with 10 or more employees", "−0.044***", "(0.011)", "0.112"],
          ],
          note: "Note: Pooled crisis sample unless otherwise indicated. All specifications include pre-crisis controls and industry × province fixed effects. Standard errors clustered by 3-digit industry in parentheses. *** p < 0.01, ** p < 0.05, * p < 0.10.",
        },
      ],
    },
    {
      id: "discussion",
      heading: "10. Discussion and Policy Implications",
      paragraphs: [
        "Our results show that trade credit acted as an important stabiliser for Korean small businesses during both the global financial crisis and the COVID-19 shock. A one-standard-deviation increase in pre-crisis trade-credit reliance reduced the probability of exit by 4.8 percentage points, a large effect relative to average exit rates, and the effect was concentrated among financially constrained firms. The similarity of the effects in a financial crisis and a real shock suggests that the protective role of trade credit does not depend on the source of the downturn, but on the liquidity shortfalls that downturns create for small firms.",
        "These findings have three implications for policy. First, policies that support the liquidity of suppliers may have large indirect benefits for their small customers. Credit guarantees and liquidity programmes for medium-sized and large suppliers can help sustain the supply of trade credit to small firms, which are harder to reach directly [26]. Second, regulation of payment terms involves a trade-off: shorter mandatory terms protect small suppliers from late payment by large customers, but they also limit the ability of suppliers to extend liquidity to customers in difficulty. Policy makers should take both sides of this trade-off into account. Third, because trade credit can propagate failures when suppliers are weak [20], monitoring of inter-firm credit chains should be part of macroprudential surveillance during downturns.",
        "Our results also bear on the debate about whether crisis support keeps unviable firms alive. We find no evidence that firms rescued by trade credit performed worse after the crises, which suggests that suppliers — who have strong incentives and good information to distinguish viable from unviable customers — allocate liquidity more efficiently than blanket support programmes might. Policies that work through existing supplier relationships may therefore reduce the risk of supporting zombie firms [27].",
        "Some caveats apply. We cannot observe the terms of individual trade-credit contracts, and our measure of reliance captures the stock of payables rather than the availability of credit lines from suppliers. Our IV strategy relies on industry-level variation, which may be correlated with other industry characteristics, although the absence of reduced-form effects in normal years mitigates this concern. Finally, our data end in early 2022, before the withdrawal of pandemic support measures, so the long-run effects of the COVID-19 shock on firm survival remain to be seen.",
      ],
    },
    {
      id: "conclusion",
      heading: "11. Conclusion",
      paragraphs: [
        "We examine the role of trade credit in supporting small business survival during economic downturns using firm-level Korean data over 2008–2022, exploiting the 2008–2009 global financial crisis and the 2020 COVID-19 shock as natural experiments. A one-standard-deviation increase in pre-crisis trade-credit reliance reduces the probability of firm exit during the subsequent downturn by 4.8 percentage points, with the effect concentrated among financially constrained firms. Firms that relied on trade credit maintained their supplier financing during the crises, especially when their suppliers were financially strong.",
        "The findings highlight the importance of supplier financing as a stabiliser during periods of credit-market disruption. Future research could use transaction-level data on payment terms to study how suppliers decide which customers to support in downturns, and how policies that target suppliers' liquidity affect the supply of trade credit to small firms.",
      ],
    },
    {
      id: "appendix",
      heading: "Appendix A. Variable Definitions",
      paragraphs: [
        "Trade-credit reliance: accounts payable (trade payables and notes payable to suppliers) divided by total assets, averaged over the two fiscal years before each crisis and standardised within each crisis sample. Size-age index: −0.737 × size + 0.043 × size² − 0.040 × age, where size is the logarithm of inflation-adjusted total assets (capped at the equivalent of USD 4.5 billion) and age is years since establishment (capped at 37), following Hadlock and Pierce {18}. Higher values indicate greater constraints. We also verified that results are similar using the Whited–Wu index [19].",
        "Exit: closure, deregistration, bankruptcy or liquidation recorded in National Tax Service business registration status or the Korea Enterprise Data status file within eight quarters of the onset of each crisis (2008Q4 or 2020Q1). Industry trade-credit norm: median ratio of accounts payable to assets among firms with 300 or more employees in the same 4-digit industry over the two pre-crisis years. Input differentiation: share of differentiated goods in the industry's intermediate inputs, computed from the Bank of Korea input–output tables and a standard classification of goods as differentiated or homogeneous.",
      ],
    },
  ],
};
