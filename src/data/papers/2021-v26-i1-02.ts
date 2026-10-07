// Vol. 26, No. 1 (January 2021) — full research paper (sample content).
import type { PaperSpec } from "../paper-spec";

export const paper: PaperSpec = {
  id: "2021-v26-i1-02",
  title: "Household Debt and the Consumption Response to Interest Rate Cuts: Evidence from Korean Credit Bureau Data",
  authors: [{ name: "Sungho Park", corresponding: true }, { name: "Ji-Yeon Park" }],
  abstract:
    "Korean households hold some of the highest debt-to-income ratios in the OECD, and a large share of their mortgages carry variable rates. We use an anonymised credit-bureau panel of 1.1 million borrowers from 2012 to 2019, linked to monthly card spending, to estimate how policy-rate cuts affect consumption through the debt-service channel. Comparing borrowers with variable- and fixed-rate mortgages around the Bank of Korea's rate cuts, we find that a 25-basis-point cut lowers monthly debt service for variable-rate borrowers by KRW 31,000 on average and raises their card spending by 0.9 percent within three months. The response is almost twice as large for households with debt-service ratios above 40 percent and for those with low liquid savings, implying a marginal propensity to consume out of the cash-flow gain of about 0.47. The cash-flow channel accounts for roughly a third of the aggregate consumption response to rate cuts, highlighting how the structure of household debt shapes monetary transmission.",
  keywords: ["Monetary policy", "Household debt", "Variable-rate mortgages", "Consumption", "Cash-flow channel"],
  jelCodes: ["E21", "E52", "G21", "D14"],
  pages: "31–58",
  volume: 26,
  issue: 1,
  year: 2021,
  received: "2020-07-22",
  accepted: "2020-11-18",
  published: "2021-01-15",
  publishedOnline: "2021-01-05",
  citations: 31,
  downloads: 2860,
  pdfSize: "1.58 MB",
  type: "Research Article",
  acknowledgments:
    "We thank seminar participants at the Bank of Korea and Hanyang University, two anonymous referees and the handling editor for comments. The views expressed are those of the authors.",
  dataAvailability:
    "The credit-bureau and card-spending data are proprietary and were accessed under a confidentiality agreement; aggregated replication files and code are available from the corresponding author.",
  refs: [
    /* 1 */ "Kaplan, G., Moll, B., & Violante, G. L. (2018). Monetary policy according to HANK. American Economic Review, 108(3), 697–743.",
    /* 2 */ "Auclert, A. (2019). Monetary policy and the redistribution channel. American Economic Review, 109(6), 2333–2367.",
    /* 3 */ "Di Maggio, M., Kermani, A., Keys, B. J., Piskorski, T., Ramcharan, R., Seru, A., & Yao, V. (2017). Interest rate pass-through: Mortgage rates, household consumption, and voluntary deleveraging. American Economic Review, 107(11), 3550–3588.",
    /* 4 */ "Cloyne, J., Ferreira, C., & Surico, P. (2020). Monetary policy when households have debt: New evidence on the transmission mechanism. Review of Economic Studies, 87(1), 102–129.",
    /* 5 */ "Calza, A., Monacelli, T., & Stracca, L. (2013). Housing finance and monetary policy. Journal of the European Economic Association, 11(s1), 101–122.",
    /* 6 */ "Mian, A., Rao, K., & Sufi, A. (2013). Household balance sheets, consumption, and the economic slump. Quarterly Journal of Economics, 128(4), 1687–1726.",
    /* 7 */ "Jappelli, T., & Pistaferri, L. (2010). The consumption response to income changes. Annual Review of Economics, 2, 479–506.",
    /* 8 */ "Mian, A., & Sufi, A. (2011). House prices, home equity-based borrowing, and the US household leverage crisis. American Economic Review, 101(5), 2132–2156.",
    /* 9 */ "Agarwal, S., Liu, C., & Souleles, N. S. (2007). The reaction of consumer spending and debt to tax rebates—Evidence from consumer credit data. Journal of Political Economy, 115(6), 986–1019.",
    /* 10 */ "Parker, J. A., Souleles, N. S., Johnson, D. S., & McClelland, R. (2013). Consumer spending and the economic stimulus payments of 2008. American Economic Review, 103(6), 2530–2553.",
    /* 11 */ "Johnson, D. S., Parker, J. A., & Souleles, N. S. (2006). Household expenditure and the income tax rebates of 2001. American Economic Review, 96(5), 1589–1610.",
    /* 12 */ "Kaplan, G., & Violante, G. L. (2014). A model of the consumption response to fiscal stimulus payments. Econometrica, 82(4), 1199–1239.",
    /* 13 */ "Gertler, M., & Karadi, P. (2015). Monetary policy surprises, credit costs, and economic activity. American Economic Journal: Macroeconomics, 7(1), 44–76.",
    /* 14 */ "Romer, C. D., & Romer, D. H. (2004). A new measure of monetary shocks: Derivation and implications. American Economic Review, 94(4), 1055–1084.",
    /* 15 */ "Jordà, Ò. (2005). Estimation and inference of impulse responses by local projections. American Economic Review, 95(1), 161–182.",
    /* 16 */ "Garriga, C., Kydland, F. E., & Šustek, R. (2017). Mortgages and monetary policy. Review of Financial Studies, 30(10), 3337–3375.",
    /* 17 */ "Beraja, M., Fuster, A., Hurst, E., & Vavra, J. (2019). Regional heterogeneity and the refinancing channel of monetary policy. Quarterly Journal of Economics, 134(1), 109–183.",
    /* 18 */ "Iacoviello, M. (2005). House prices, borrowing constraints, and monetary policy in the business cycle. American Economic Review, 95(3), 739–764.",
    /* 19 */ "Bernanke, B. S., & Gertler, M. (1995). Inside the black box: The credit channel of monetary policy transmission. Journal of Economic Perspectives, 9(4), 27–48.",
    /* 20 */ "Ganong, P., & Noel, P. (2020). Liquidity versus wealth in household debt obligations: Evidence from housing policy in the Great Recession. American Economic Review, 110(10), 3100–3138.",
    /* 21 */ "Fuster, A., & Willen, P. S. (2017). Payment size, negative equity, and mortgage default. American Economic Journal: Economic Policy, 9(4), 167–191.",
    /* 22 */ "Zeldes, S. P. (1989). Consumption and liquidity constraints: An empirical investigation. Journal of Political Economy, 97(2), 305–346.",
    /* 23 */ "Carroll, C. D. (1997). Buffer-stock saving and the life cycle/permanent income hypothesis. Quarterly Journal of Economics, 112(1), 1–55.",
    /* 24 */ "Baker, S. R. (2018). Debt and the response to household income shocks: Validation and application of linked financial account data. Journal of Political Economy, 126(4), 1504–1557.",
    /* 25 */ "Bertrand, M., Duflo, E., & Mullainathan, S. (2004). How much should we trust differences-in-differences estimates? Quarterly Journal of Economics, 119(1), 249–275.",
    /* 26 */ "Mian, A., & Sufi, A. (2014). House of Debt. Chicago: University of Chicago Press.",
  ],
  body: [
    {
      id: "introduction",
      heading: "1. Introduction",
      paragraphs: [
        "How monetary policy affects household spending depends on who holds debt and on what terms. Representative-agent models emphasise intertemporal substitution: lower interest rates make current consumption cheaper relative to future consumption. Heterogeneous-agent models instead stress that the indirect effects of policy — working through labour income, asset prices and cash flow — can be quantitatively more important [1], and that rate changes redistribute resources between borrowers and savers whose marginal propensities to consume differ [2]. Where mortgages carry variable rates, a policy-rate cut immediately lowers borrowers' interest payments, providing a direct cash-flow channel of transmission [3][4][16].",
        "Korea offers an unusually clean setting to study this channel. Household debt exceeded 95 percent of GDP by 2019, among the highest ratios in the OECD, and for most of the past decade a majority of mortgage balances carried variable rates linked to bank funding costs. Policy-rate changes therefore pass through to the required payments of millions of households within months. At the same time, a substantial minority of borrowers hold fixed-rate or hybrid mortgages, partly as a result of government programmes that encouraged conversion from variable to fixed rates. This coexistence of contract types allows us to compare otherwise similar households whose debt-service burdens respond very differently to the same policy change.",
        "We combine an anonymised credit-bureau panel of 1.1 million borrowers with monthly card spending over 2012–2019, a period that includes the Bank of Korea's long easing cycle from 2012 to 2016 and its two cuts in 2019. Comparing borrowers with variable- and fixed-rate mortgages around each cut in an event-study design, we find that a 25-basis-point reduction lowers monthly debt service for variable-rate borrowers by KRW 31,000 on average and raises their card spending by 0.9 percent within three months. The spending response persists for at least a year.",
        "The response is concentrated among households for which theory predicts cash flow should matter most [22][23]. Borrowers with debt-service ratios above 40 percent raise spending by 1.6 percent per 25 basis points, and those with liquid savings below one month of income by 1.5 percent, while borrowers with ample liquidity barely respond. Using the change in required payments as an instrument, the implied marginal propensity to consume out of the cash-flow gain is 0.47, in the range of estimates from tax rebates and stimulus payments [9][10][11].",
        "Scaling our estimates to the population of borrowers, the cash-flow channel raised household consumption by about 0.12 percent per 25-basis-point cut — roughly a third of the aggregate consumption response implied by standard macroeconomic estimates for Korea. Our findings imply that the gradual shift towards fixed-rate mortgages, encouraged for financial-stability reasons, weakens an important channel of monetary transmission.",
        "Our paper also contributes to a small but growing body of evidence on monetary transmission in Korea. Most existing studies rely on aggregate time series or bank-level lending data and find that policy-rate changes affect household credit and house prices with considerable lags. Micro evidence on how individual households adjust spending has been scarce, largely because consumption surveys are annual and do not record loan terms. By linking contract-level loan data to monthly spending, we can trace the transmission from the policy rate to required payments and then to consumption for the same households, and we can quantify how much of the aggregate response is attributable to debt service rather than to income or wealth effects.",
        "Section 2 describes household debt and mortgage markets in Korea. Section 3 reviews the literature and Section 4 sets out a simple framework. Section 5 describes the data, Section 6 the empirical strategy and Section 7 the results. Section 8 presents robustness checks, Section 9 discusses policy implications and Section 10 concludes.",
      ],
    },
    {
      id: "background",
      heading: "2. Household Debt and Monetary Policy in Korea",
      paragraphs: ["This section summarises the institutional features that make the debt-service channel important in Korea."],
      subsections: [
        {
          id: "bg-debt",
          heading: "2.1 The Rise of Household Debt",
          paragraphs: [
            "Household debt in Korea grew rapidly after the global financial crisis, driven by mortgage lending, home-equity borrowing and the widespread use of jeonse deposits in the rental market. Mortgages account for slightly more than half of household debt; the remainder consists of credit lines, unsecured personal loans and loans secured on deposits. Regulators introduced loan-to-value and debt-to-income limits in the 2000s and tightened them repeatedly after 2017, but the stock of debt continued to rise faster than income throughout our sample period.",
          ],
        },
        {
          id: "bg-mortgage",
          heading: "2.2 Mortgage Contracts",
          paragraphs: [
            "Korean mortgage rates are typically indexed to the cost of funds index (COFIX), which reflects banks' funding costs and moves closely with the policy rate. Variable-rate loans reset every three, six or twelve months. Fixed-rate and hybrid loans — fixed for an initial period of three to five years — became more common after 2015, when a government programme allowed borrowers to convert variable-rate loans into long-term fixed-rate loans at subsidised rates. Even so, variable-rate loans accounted for a majority of outstanding mortgage balances throughout our sample.",
          ],
        },
        {
          id: "bg-policy",
          heading: "2.3 Policy-Rate Changes, 2012–2019",
          paragraphs: [
            "Table 1 lists the policy-rate changes in our sample. The Bank of Korea lowered its base rate in eight steps from 3.25 percent in mid-2012 to a then-record low of 1.25 percent in June 2016, raised it twice in 2017 and 2018, and cut it again in July and October 2019. Because the timing of cuts was driven by macroeconomic conditions common to all households, we exploit differences in exposure across borrowers rather than the timing itself.",
          ],
          tables: [
            {
              id: "table-1",
              caption: "Table 1. Bank of Korea base-rate changes, 2012–2019",
              columns: ["Date", "Change (bp)", "New base rate (%)"],
              rows: [
                ["July 2012", "−25", "3.00"],
                ["October 2012", "−25", "2.75"],
                ["May 2013", "−25", "2.50"],
                ["August 2014", "−25", "2.25"],
                ["October 2014", "−25", "2.00"],
                ["March 2015", "−25", "1.75"],
                ["June 2015", "−25", "1.50"],
                ["June 2016", "−25", "1.25"],
                ["November 2017", "+25", "1.50"],
                ["November 2018", "+25", "1.75"],
                ["July 2019", "−25", "1.50"],
                ["October 2019", "−25", "1.25"],
              ],
              note: "Source: Bank of Korea.",
            },
          ],
        },
      ],
    },
    {
      id: "literature",
      heading: "3. Related Literature",
      paragraphs: [
        "Our paper relates first to research using loan-level data to estimate the effects of mortgage-rate resets. Di Maggio et al. {3} show that automatic rate reductions on adjustable-rate mortgages in the United States raised car purchases and voluntary deleveraging. Cloyne, Ferreira and Surico {4} find that mortgagors in the United Kingdom and United States adjust spending far more than outright owners or renters after monetary policy shocks. Beraja et al. {17} highlight that the refinancing channel varies with regional housing equity. Cross-country evidence suggests that transmission is stronger where variable-rate debt is prevalent [5], and theoretical work shows how mortgage contract design shapes the transmission of policy [16][18].",
        "A second strand studies how household balance sheets shape consumption. High leverage amplified the spending collapse during the US housing bust [6][8][26], and payment reductions affect default and spending far more than equivalent changes in wealth [20][21]. Linked financial-account data show that highly indebted and illiquid households respond most strongly to income shocks [24].",
        "Third, we contribute to the large literature on the marginal propensity to consume. Estimates from tax rebates and stimulus payments imply MPCs out of transitory income between 0.2 and 0.6 for non-durables, with larger responses among liquidity-constrained households [7][9][10][11]. Structural models with illiquid wealth can rationalise these magnitudes [12]. Our setting provides a recurring, policy-induced change in cash flow rather than a one-off transfer, and links it directly to monetary policy, complementing aggregate evidence on monetary transmission based on identified shocks [13][14][19].",
      ],
    },
    {
      id: "framework",
      heading: "4. Conceptual Framework",
      paragraphs: [
        "Consider a household with mortgage balance B and required monthly payment P = r·B/12 + A, where r is the mortgage rate and A amortisation. A cut in the policy rate of Δi lowers r by φ·Δi for variable-rate borrowers, where φ is the pass-through coefficient, and leaves r unchanged for fixed-rate borrowers. The resulting change in cash flow is ΔP = φ·Δi·B/12. A household that is not liquidity-constrained will treat this as a small change in lifetime resources and spend only its annuity value; a constrained household with few liquid assets will spend a large share of the increase in disposable cash flow [22][23].",
        "The framework yields three testable predictions. First, spending of variable-rate borrowers should rise relative to fixed-rate borrowers after a cut, with a magnitude proportional to ΔP. Second, the response should be larger for households with high debt-service ratios and low liquid savings. Third, because the cash-flow change is persistent for as long as rates remain low, spending should remain elevated rather than reverting quickly, unlike responses to one-off transfers.",
        "To map the framework into an estimable equation, let ΔC_i denote the change in household i's monthly spending after a cut and ΔP_i the change in its required payment. For an unconstrained household following the permanent-income hypothesis, ΔC_i ≈ (r/(1+r))·PV(ΔP_i), where PV denotes the present value of the payment reduction over the expected duration of low rates. With expected durations of two to three years and annual discount rates of a few percent, this implies an MPC out of the monthly cash-flow gain well below 0.1. A household holding less liquid wealth than a few months of income, by contrast, behaves as if hand-to-mouth and spends a fraction of ΔP_i close to its marginal propensity to consume out of current income, which estimates suggest may be 0.5 or higher for non-durables and durables combined [7][12].",
        "The framework also highlights that the cash-flow channel is distinct from the intertemporal-substitution channel, which affects all households, and from the wealth channel, which operates through house prices and financial assets. Fixed-rate borrowers are exposed to the latter two channels in the same way as variable-rate borrowers but not to the first. The comparison between the two groups therefore isolates the cash-flow channel, holding constant other effects of monetary policy that are common to both groups, such as changes in local labour-market conditions or house prices [6][18].",
      ],
    },
    {
      id: "data",
      heading: "5. Data",
      paragraphs: ["This section describes the credit-bureau and spending data and the construction of key variables."],
      subsections: [
        {
          id: "data-sources",
          heading: "5.1 Credit-Bureau and Spending Panels",
          paragraphs: [
            "The credit-bureau panel is a random sample of borrowers drawn from the universe of individuals with at least one loan reported to the bureau. For each borrower it records monthly balances, contractual interest rates, rate type and reset frequency, and required payments on all loans, together with an estimate of annual income derived from tax and social-insurance records. Card spending is observed through a linked panel of credit and debit card transactions aggregated monthly by merchant category. Card payments cover about 70 percent of household consumption expenditure in the national accounts, and our results are robust to restricting attention to categories in which card use is nearly universal.",
            "We restrict the sample to borrowers aged 25 to 69 with a mortgage outstanding for at least twelve months before each event, giving 1.1 million borrowers and 61 million borrower-months. We classify mortgages as variable-rate if the rate resets at least annually and as fixed-rate otherwise; hybrid loans in their fixed period are treated as fixed.",
          ],
        },
        {
          id: "data-variables",
          heading: "5.2 Variables and Summary Statistics",
          paragraphs: [
            "Debt service is the sum of required interest and principal payments on all loans. The debt-service ratio (DSR) divides annual debt service by annual income. Liquid savings are measured from deposit balances reported to the bureau for a subset of borrowers and are expressed in months of income. Table 2 summarises the sample. Variable-rate borrowers are somewhat younger and have higher debt-service ratios and lower liquid savings, but are similar in income and spending to fixed-rate borrowers.",
            "Because card spending is our main outcome, we checked its coverage carefully. Comparing aggregate card spending in our panel with the household final consumption expenditure series by category, coverage exceeds 85 percent for retail goods, restaurants and travel, but is lower for rent, education and health services, which are often paid by bank transfer. Our main results therefore primarily reflect spending on goods and discretionary services. If anything, this is likely to understate the total response, since housing and education costs are largely fixed in the short run and would be unlikely to adjust to a rate cut within months.",
            "We also verified that changes in card spending are not driven by substitution between payment methods. Cash withdrawals at bank machines, which we observe for a subset of borrowers, move in the same direction as card spending after rate cuts, and the share of card spending in total measured outflows is stable around events. Finally, we excluded borrowers whose card spending exceeded five times their monthly income in any month, which typically reflects business purchases made on personal cards.",
            "The sample is broadly representative of Korean mortgage borrowers. Compared with the Survey of Household Finances and Living Conditions, borrowers in our panel have similar average mortgage balances and debt-service ratios, but are slightly younger and more likely to live in the Seoul Capital Area, reflecting the geographic distribution of card use. Reweighting the sample to match the survey distribution of age, region and income leaves our main estimates essentially unchanged.",
          ],
          tables: [
            {
              id: "table-2",
              caption: "Table 2. Borrower characteristics, 2012–2019 averages",
              columns: ["Variable", "Variable-rate", "Fixed-rate", "Difference"],
              rows: [
                ["Age (years)", "44.8", "47.2", "−2.4***"],
                ["Annual income (KRW million)", "52.1", "53.4", "−1.3"],
                ["Mortgage balance (KRW million)", "148.6", "139.2", "9.4***"],
                ["Mortgage rate (percent)", "3.41", "3.18", "0.23***"],
                ["Debt-service ratio (percent)", "34.6", "29.8", "4.8***"],
                ["Monthly card spending (KRW thousand)", "1,412", "1,438", "−26"],
                ["Liquid savings / monthly income", "2.1", "2.6", "−0.5***"],
                ["Borrowers", "612,000", "488,000", ""],
              ],
              note: "Note: *** significant at the 1 percent level.",
            },
          ],
        },
      ],
    },
    {
      id: "strategy",
      heading: "6. Empirical Strategy",
      paragraphs: [
        "Our strategy compares changes in debt service and spending of variable- and fixed-rate borrowers around each policy-rate change, stacking events to increase power.",
      ],
      subsections: [
        {
          id: "event-study",
          heading: "6.1 Stacked Event Study",
          paragraphs: [
            "For borrower i, event e and month relative to the event k ∈ [−6, 12], we estimate y_iek = Σ_k β_k·(Var_i × 1[k]) + α_ie + λ_ek + X_iek·θ + ε_iek, where Var_i indicates a variable-rate mortgage, α_ie are borrower-by-event fixed effects, λ_ek are event-by-relative-month fixed effects and X includes region-by-month fixed effects and age controls. Coefficients are scaled by the size of the rate change and reported per 25-basis-point cut; hikes enter with the opposite sign. The specification is similar in spirit to local-projection estimates of impulse responses [15]. Standard errors are clustered by borrower [25].",
          ],
        },
        {
          id: "iv",
          heading: "6.2 Marginal Propensity to Consume",
          paragraphs: [
            "To recover the MPC out of the cash-flow gain, we estimate a two-stage least squares regression of the change in spending (in won) on the change in required payments, instrumenting the latter with the interaction of the variable-rate indicator and the post-event period. The exclusion restriction requires that rate type affects spending responses only through debt service, which we examine below.",
          ],
        },
        {
          id: "identification",
          heading: "6.3 Identification",
          paragraphs: [
            "The key assumption is that, absent the policy change, spending of variable- and fixed-rate borrowers would have followed parallel paths. Figure 1 shows that pre-event coefficients are small and statistically insignificant for six months before each cut. Results are similar when we match borrowers on age, income, region and debt-service ratio, and when we compare only borrowers who took out mortgages in the same year with the same lender, which addresses selection into contract type on unobservable characteristics.",
          ],
          figures: [
            {
              id: "figure-1",
              caption: "Figure 1. Card spending of variable- relative to fixed-rate borrowers around a 25-basis-point cut",
              kind: "line",
              xLabels: ["−6", "−4", "−2", "0", "2", "4", "6", "8", "10", "12"],
              yLabel: "Δ log spending (percent)",
              series: [
                {
                  name: "Estimate",
                  values: [0.05, -0.02, 0.03, 0.0, 0.42, 0.88, 0.94, 0.91, 0.97, 0.93],
                  lower: [-0.21, -0.27, -0.22, -0.24, 0.16, 0.6, 0.64, 0.6, 0.64, 0.58],
                  upper: [0.31, 0.23, 0.28, 0.24, 0.68, 1.16, 1.24, 1.22, 1.3, 1.28],
                },
              ],
              marker: 3,
              note: "Note: Stacked event-study coefficients in months relative to the rate change, with 95 percent confidence intervals. The dashed line marks the month of the cut.",
            },
          ],
        },
      ],
    },
    {
      id: "results",
      heading: "7. Results",
      paragraphs: ["We first document pass-through to debt service, then the spending response, its heterogeneity, its composition and its aggregate implications."],
      subsections: [
        {
          id: "passthrough",
          heading: "7.1 Pass-Through to Debt Service",
          paragraphs: [
            "Mortgage rates of variable-rate borrowers fall gradually after each cut as loans reset, with pass-through of about 85 percent of the policy-rate change after six months. Required monthly payments fall by KRW 31,000 per 25 basis points after three months and by KRW 36,000 after six months, about 2.4 percent of average debt service (Table 3). Payments of fixed-rate borrowers do not change.",
          ],
          tables: [
            {
              id: "table-3",
              caption: "Table 3. Pass-through of a 25-basis-point cut to variable-rate borrowers",
              columns: ["Horizon", "Δ mortgage rate (bp)", "Δ monthly debt service (KRW)", "Δ log card spending"],
              rows: [
                ["1 month", "−8.4***", "−11,000***", "0.002"],
                ["3 months", "−18.1***", "−31,000***", "0.009***"],
                ["6 months", "−21.3***", "−36,000***", "0.009***"],
                ["12 months", "−21.6***", "−36,000***", "0.009***"],
              ],
              note: "Note: Stacked event-study estimates relative to fixed-rate borrowers. *** p < 0.01.",
            },
          ],
        },
        {
          id: "spending",
          heading: "7.2 The Spending Response",
          paragraphs: [
            "Card spending rises by 0.9 percent within three months of a cut and remains at that level for at least a year (Figure 1). The persistence is consistent with the framework: the cash-flow gain continues as long as rates remain low. The two-stage least squares estimate implies an MPC out of the cash-flow gain of 0.47 (standard error 0.09), in the upper half of estimates from tax rebates [9][10][11].",
          ],
        },
        {
          id: "heterogeneity",
          heading: "7.3 Heterogeneity",
          paragraphs: [
            "Table 4 and Figure 2 show that responses are strongly heterogeneous. Households with debt-service ratios above 40 percent raise spending by 1.6 percent per 25 basis points, compared with 0.5 percent for those below 40 percent; the larger response is not explained only by their larger payment reductions, as the implied MPC is also higher (0.62 versus 0.33). Households with liquid savings below one month of income raise spending by 1.5 percent, while those with savings above three months show no significant response. These patterns are consistent with models in which constrained households spend most of any increase in disposable cash flow [1][12][22].",
          ],
          tables: [
            {
              id: "table-4",
              caption: "Table 4. Spending response to a 25-basis-point cut, by borrower group",
              columns: ["Group", "Δ debt service (KRW)", "Δ log spending", "Implied MPC", "Borrowers"],
              rows: [
                ["All variable-rate borrowers", "−31,000", "0.009***", "0.47***", "612,000"],
                ["Debt-service ratio > 40%", "−44,000", "0.016***", "0.62***", "171,000"],
                ["Debt-service ratio ≤ 40%", "−24,000", "0.005**", "0.33***", "441,000"],
                ["Liquid savings < 1 month of income", "−29,000", "0.015***", "0.71***", "148,000"],
                ["Liquid savings ≥ 3 months of income", "−33,000", "0.002", "0.09", "126,000"],
                ["Age below 40", "−34,000", "0.012***", "0.55***", "214,000"],
                ["Age 55 and above", "−26,000", "0.004", "0.24*", "117,000"],
              ],
              note: "Note: Three months after the cut, relative to fixed-rate borrowers. * p < 0.10, ** p < 0.05, *** p < 0.01.",
            },
          ],
          figures: [
            {
              id: "figure-2",
              caption: "Figure 2. Spending response by debt-service ratio",
              kind: "bar",
              xLabels: ["< 20%", "20–30%", "30–40%", "40–50%", "> 50%"],
              yLabel: "Δ log spending (percent)",
              series: [
                {
                  name: "Response to 25 bp cut",
                  values: [0.2, 0.5, 0.8, 1.4, 1.9],
                  lower: [-0.1, 0.2, 0.5, 1.0, 1.3],
                  upper: [0.5, 0.8, 1.1, 1.8, 2.5],
                },
              ],
              note: "Note: Bars show three-month responses with 95 percent confidence intervals.",
            },
          ],
        },
        {
          id: "composition",
          heading: "7.4 Composition of Spending",
          paragraphs: [
            "Table 5 decomposes the response by merchant category. Spending on durable goods — furniture, electronics and appliances — rises most in percentage terms, followed by restaurants and travel. Groceries and fuel respond little. Borrowers also increase repayments on credit-card balances, consistent with the voluntary deleveraging documented for US borrowers [3].",
            "The composition of the response sheds light on its mechanism. Durable goods respond most strongly because households can bring forward purchases that they had planned to make later, a pattern familiar from evidence on tax rebates and stimulus payments [9][10]. Restaurants and travel, which are highly discretionary, also respond, whereas groceries and fuel — necessities that constrained households are unlikely to have cut much before the rate change — barely move. This pattern suggests that the additional cash flow relaxed constraints on discretionary spending rather than raising subsistence consumption.",
          ],
          tables: [
            {
              id: "table-5",
              caption: "Table 5. Spending response by category (three months after a 25 bp cut)",
              columns: ["Category", "Share of spending", "Δ log spending", "Std. error"],
              rows: [
                ["Durable goods", "0.12", "0.021***", "(0.006)"],
                ["Restaurants and travel", "0.18", "0.013***", "(0.004)"],
                ["Clothing", "0.08", "0.010**", "(0.004)"],
                ["Groceries", "0.24", "0.003", "(0.002)"],
                ["Fuel and transport", "0.11", "0.002", "(0.003)"],
                ["Other", "0.27", "0.008***", "(0.003)"],
              ],
              note: "Note: ** p < 0.05, *** p < 0.01.",
            },
          ],
        },
        {
          id: "aggregate",
          heading: "7.5 Aggregate Implications",
          paragraphs: [
            "To gauge the macroeconomic importance of the channel, we multiply group-specific responses by population shares of variable-rate borrowers and by their share of consumption. A 25-basis-point cut raises aggregate household consumption by about 0.12 percent through the cash-flow channel alone. Standard macroeconomic estimates for Korea imply a total consumption response of roughly 0.3 to 0.4 percent over a year, so the cash-flow channel accounts for about a third of the total. The share would be smaller if fixed-rate contracts became dominant.",
            "The aggregate contribution of the cash-flow channel also varies across regions. In the Seoul Capital Area, where mortgage balances relative to income are highest, the cash-flow channel accounts for close to 40 percent of the estimated consumption response; in provinces with lower leverage and a higher share of outright owners, its contribution falls below 25 percent. This geographic variation parallels evidence from the United States that the strength of monetary transmission depends on the regional distribution of housing equity and debt [17].",
            "Two caveats apply to these calculations. First, they treat the response of each group as fixed, whereas in general equilibrium higher spending by borrowers raises incomes of other households, potentially amplifying the total effect [1]. Second, the share of variable-rate debt has changed over time, so the strength of the channel is not constant. Using contract-level information on the share of variable-rate balances in each year, we estimate that the cash-flow contribution per 25-basis-point cut fell from about 0.14 percent of consumption in 2012 to 0.10 percent in 2019 as fixed-rate and hybrid contracts became more common.",
          ],
        },
      ],
    },
    {
      id: "robustness",
      heading: "8. Robustness",
      paragraphs: [
        "Table 6 reports robustness checks. Matching borrowers on observables, restricting to borrowers with mortgages originated in the same year at the same lender, excluding the 2019 cuts, and excluding borrowers who refinanced during the event window all yield similar estimates. A placebo test that assigns each event to a date six months earlier produces no response. Rate hikes produce responses of similar magnitude and opposite sign, suggesting the channel operates symmetrically.",
      ],
      tables: [
        {
          id: "table-6",
          caption: "Table 6. Robustness of the spending response (three months, per 25 bp)",
          columns: ["Specification", "Δ log spending", "Std. error"],
          rows: [
            ["Baseline", "0.009***", "(0.002)"],
            ["Matched on age, income, region and DSR", "0.008***", "(0.002)"],
            ["Same origination year and lender", "0.010***", "(0.003)"],
            ["Excluding 2019 cuts", "0.009***", "(0.002)"],
            ["Excluding refinancers", "0.009***", "(0.002)"],
            ["Rate hikes only (sign reversed)", "0.008**", "(0.004)"],
            ["Placebo: event six months earlier", "0.001", "(0.002)"],
          ],
          note: "Note: ** p < 0.05, *** p < 0.01.",
        },
      ],
    },
    {
      id: "discussion",
      heading: "9. Policy Implications",
      paragraphs: [
        "Our findings carry two implications. First, the effectiveness of monetary policy in Korea depends on the structure of household debt. Policies that shift borrowers towards fixed-rate mortgages reduce the exposure of households to rate increases and may improve financial stability, but they also weaken the cash-flow channel through which easing supports spending. Central banks should account for this trade-off when assessing the strength of transmission over time [4][5].",
        "Second, the distributional effects of monetary policy operate partly through debt service. Rate cuts disproportionately benefit younger, highly indebted and liquidity-constrained households — precisely those with the highest MPCs — which helps explain why easing can be effective even when interest-rate sensitivity of saving is low [2]. Conversely, rate increases impose concentrated burdens on these households, which macroprudential policy should consider.",
        "Our estimates compare favourably with international evidence. Di Maggio et al. {3} report that a reduction in monthly mortgage payments of several hundred dollars raised car purchases substantially among US borrowers with adjustable-rate mortgages, and Cloyne, Ferreira and Surico {4} find that mortgagors' consumption responds to monetary shocks two to three times as strongly as that of outright owners. The MPC of 0.47 that we estimate lies in the upper part of the range implied by these studies, consistent with the high leverage and limited liquid savings of many Korean borrowers.",
        "Our analysis has limitations. We observe spending only on cards, and cannot measure how households adjusted saving in assets not reported to the credit bureau. We study responses to modest changes of 25 basis points, and responses to larger changes may not scale linearly. And because our sample ends in 2019, we cannot speak to the very large rate movements of the pandemic period. Nonetheless, the consistency of the estimates across easing and tightening episodes suggests that the cash-flow channel is a stable feature of the Korean economy.",
        "An important question for future research is how the cash-flow channel interacts with macroprudential policy. Debt-service-ratio limits, which Korea tightened after 2018, constrain new borrowing precisely among the households that respond most strongly to rate changes. If such limits reduce the share of highly indebted borrowers, they may make monetary policy less potent in stimulating spending while making households more resilient to rate increases. Quantifying this trade-off would require a model combining borrowing constraints with the heterogeneous responses documented here [1][2].",
        "A further implication concerns macroprudential policy. Regulators in Korea have encouraged a shift from variable- to fixed-rate and amortising mortgages since 2011, in order to reduce the vulnerability of households to rising interest rates. Our results suggest that this shift, while reducing financial-stability risks, also weakens the cash-flow channel of monetary policy. If the share of variable-rate mortgages were to fall from about two-thirds of outstanding balances, as in our sample period, to one-third, the cash-flow component of the consumption response to a 25-basis-point cut would fall roughly by half, other things equal. Policy makers therefore face a trade-off between the resilience of household balance sheets and the potency of monetary transmission, which should be taken into account when the two policies are designed.",
        "The asymmetry between rate cuts and rate increases is also relevant. Our sample is dominated by cuts, so our estimates speak most directly to easing episodes. Because highly indebted and liquidity-constrained households respond most strongly to changes in cash flow, it is plausible that rate increases would reduce their spending by at least as much as cuts raise it, and possibly more if increases push some borrowers into arrears. Evidence on tightening episodes, such as those that began in 2021, would be valuable for understanding whether the cash-flow channel is symmetric.",
      ],
    },
    {
      id: "conclusion",
      heading: "10. Conclusion",
      paragraphs: [
        "Using credit-bureau and card-spending data for 1.1 million Korean borrowers, we show that policy-rate cuts raise spending of variable-rate mortgage holders through lower debt service, with an implied MPC of 0.47 and much larger responses among highly indebted and liquidity-poor households. The cash-flow channel accounts for roughly a third of the aggregate consumption response to rate cuts. As Korea's mortgage market evolves, monitoring the share of variable-rate debt will be important for gauging the power of monetary policy.",
        "Our findings point to several avenues for future research. Linking credit-bureau data to information on household income and wealth would allow a more precise characterisation of which households are liquidity constrained and why. Examining how households adjust their borrowing, saving and debt repayment in response to rate changes, in addition to their spending, would provide a more complete picture of balance-sheet adjustment. And extending the analysis to the tightening cycle that began in 2021 would test whether the cash-flow channel operates symmetrically. Such evidence would help central banks to anticipate how changes in the structure of household debt alter the transmission of monetary policy to consumption.",
      ],
    },
    {
      id: "appendix-note",
      heading: "Appendix A. Data Construction",
      paragraphs: [
        "Borrower sample. The credit bureau provided a 2 percent random sample of individuals with at least one loan in January 2012, refreshed annually with new borrowers to maintain representativeness. We retain borrowers aged 25 to 69 with a residential mortgage outstanding for at least twelve months before each event, and we follow them for 19 months around each event. Borrowers who repay their mortgage in full during the window are retained until repayment and excluded thereafter.",
        "Rate type. Rate type is reported at origination and updated when a loan is refinanced or converted. Hybrid loans are classified as fixed during their initial fixed-rate period and as variable afterwards. Because classification is based on contract terms rather than observed rate changes, it is not mechanically related to the outcomes we study. About 7 percent of borrowers hold both fixed- and variable-rate mortgages; we classify them by the type with the larger balance and show that excluding them does not change the results.",
        "Income and liquid savings. Annual income is the credit bureau's estimate based on tax and social-insurance records, updated each year. Liquid savings are measured from deposit balances reported by banks participating in a data-sharing arrangement, covering about 41 percent of borrowers; heterogeneity results by liquidity use this subsample. Debt-service ratios are computed as annual required payments on all loans divided by annual income and winsorised at the 1st and 99th percentiles.",
        "Sample restrictions. We exclude borrowers whose mortgage was refinanced, transferred or repaid within six months of a policy-rate change, because their debt-service payments change for reasons unrelated to the rate change. We also exclude borrowers with more than one mortgage of different rate types, about 3 percent of the sample, because their exposure to rate changes cannot be classified unambiguously. Results are not sensitive to including them with exposure measured by the share of variable-rate balances.",
      ],
    },
  ],
};
