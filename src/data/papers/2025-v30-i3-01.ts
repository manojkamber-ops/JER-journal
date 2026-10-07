// Vol. 30, No. 3 (July 2025) — full text for an article defined in journal.ts (sample content).
import type { FulltextSpec } from "../paper-spec";

export const fulltext: FulltextSpec = {
  id: "2025-v30-i3-01",
  acknowledgments:
    "We thank seminar participants at Hanyang University, National Taiwan University, the Indian Statistical Institute and the 2024 Asian Meeting of the Econometric Society, two anonymous referees and the handling editor for helpful comments. We are grateful to the national statistical offices of the seven economies for access to the household survey microdata used here. All remaining errors are our own.",
  dataAvailability:
    "Policy-rate series and announcement timestamps are from public central bank sources and Refinitiv; the household survey microdata are available from the respective national statistical offices under their standard access terms. The constructed cohort-by-quarter panel, the monetary policy surprise series and the replication code are available from the corresponding author.",
  editorialNote:
    "Sungho Park, Mei-Ling Chen and Rajesh Kumar find that, after a 100-basis-point tightening, liquidity-constrained households in seven emerging Asian economies cut non-durable consumption 2.4 times as much as unconstrained households, that the consumption elasticity ranges from −0.41 in Indonesia to −0.18 in Singapore, and that financial development, mortgage-market structure and variable-rate debt jointly explain 62 percent of the cross-country variation.",
  refs: [
    /* 1 */ "Kaplan, G., Moll, B., & Violante, G. L. (2018). Monetary policy according to HANK. American Economic Review, 108(3), 697–743.",
    /* 2 */ "Auclert, A. (2019). Monetary policy and the redistribution channel. American Economic Review, 109(6), 2333–2367.",
    /* 3 */ "Jordà, Ò. (2005). Estimation and inference of impulse responses by local projections. American Economic Review, 95(1), 161–182.",
    /* 4 */ "Gertler, M., & Karadi, P. (2015). Monetary policy surprises, credit costs, and economic activity. American Economic Journal: Macroeconomics, 7(1), 44–76.",
    /* 5 */ "Gürkaynak, R. S., Sack, B., & Swanson, E. T. (2005). Do actions speak louder than words? The response of asset prices to monetary policy actions and statements. International Journal of Central Banking, 1(1), 55–93.",
    /* 6 */ "Kuttner, K. N. (2001). Monetary policy surprises and interest rates: Evidence from the Fed funds futures market. Journal of Monetary Economics, 47(3), 523–544.",
    /* 7 */ "Cloyne, J., Ferreira, C., & Surico, P. (2020). Monetary policy when households have debt: New evidence on the transmission mechanism. Review of Economic Studies, 87(1), 102–129.",
    /* 8 */ "Flodén, M., Kilström, M., Sigurdsson, J., & Vestman, R. (2021). Household debt and monetary policy: Revealing the cash-flow channel. Economic Journal, 131(636), 1742–1771.",
    /* 9 */ "Di Maggio, M., Kermani, A., Keys, B. J., Piskorski, T., Ramcharan, R., Seru, A., & Yao, V. (2017). Interest rate pass-through: Mortgage rates, household consumption, and voluntary deleveraging. American Economic Review, 107(11), 3550–3588.",
    /* 10 */ "Campbell, J. Y., & Mankiw, N. G. (1989). Consumption, income, and interest rates: Reinterpreting the time series evidence. NBER Macroeconomics Annual, 4, 185–216.",
    /* 11 */ "Zeldes, S. P. (1989). Consumption and liquidity constraints: An empirical investigation. Journal of Political Economy, 97(2), 305–346.",
    /* 12 */ "Jappelli, T., & Pistaferri, L. (2010). The consumption response to income changes. Annual Review of Economics, 2, 479–506.",
    /* 13 */ "Carroll, C. D. (1997). Buffer-stock saving and the life cycle/permanent income hypothesis. Quarterly Journal of Economics, 112(1), 1–55.",
    /* 14 */ "Romer, C. D., & Romer, D. H. (2004). A new measure of monetary shocks: Derivation and implications. American Economic Review, 94(4), 1055–1084.",
    /* 15 */ "Bernanke, B. S., & Gertler, M. (1995). Inside the black box: The credit channel of monetary policy transmission. Journal of Economic Perspectives, 9(4), 27–48.",
    /* 16 */ "Calza, A., Monacelli, T., & Stracca, L. (2013). Housing finance and monetary policy. Journal of the European Economic Association, 11(S1), 101–122.",
    /* 17 */ "Nakamura, E., & Steinsson, J. (2018). High-frequency identification of monetary non-neutrality: The information effect. Quarterly Journal of Economics, 133(3), 1283–1330.",
    /* 18 */ "Jarociński, M., & Karadi, P. (2020). Deconstructing monetary policy surprises: The role of information shocks. American Economic Journal: Macroeconomics, 12(2), 1–43.",
    /* 19 */ "Ramey, V. A. (2016). Macroeconomic shocks and their propagation. In J. B. Taylor & H. Uhlig (Eds.), Handbook of Macroeconomics (Vol. 2A, pp. 71–162). Elsevier.",
    /* 20 */ "Montiel Olea, J. L., & Plagborg-Møller, M. (2021). Local projection inference is simpler and more robust than you might think. Econometrica, 89(4), 1789–1823.",
    /* 21 */ "Driscoll, J. C., & Kraay, A. C. (1998). Consistent covariance matrix estimation with spatially dependent panel data. Review of Economics and Statistics, 80(4), 549–560.",
    /* 22 */ "Coibion, O., Gorodnichenko, Y., Kueng, L., & Silvia, J. (2017). Innocent bystanders? Monetary policy and inequality. Journal of Monetary Economics, 88, 70–89.",
    /* 23 */ "Havranek, T., & Rusnak, M. (2013). Transmission lag in monetary policy: A meta-analysis. International Journal of Central Banking, 9(4), 39–75.",
    /* 24 */ "Mishra, P., Montiel, P. J., & Spilimbergo, A. (2012). Monetary transmission in low-income countries: Effectiveness and policy implications. IMF Economic Review, 60(2), 270–302.",
    /* 25 */ "Ippolito, F., Ozdagli, A. K., & Perez-Orive, A. (2018). The transmission of monetary policy through bank lending: The floating rate channel. Journal of Monetary Economics, 95, 49–71.",
  ],
  body: [
    {
      id: "introduction",
      heading: "1. Introduction",
      paragraphs: [
        "A central bank that raises its policy rate by 100 basis points does not tighten the budget constraint of every household by the same amount. A household holding two months of income in liquid savings and a fixed-rate mortgage may barely notice; a household that lives from pay cheque to pay cheque and carries variable-rate borrowing will cut spending almost immediately. Recent work on heterogeneous-agent New Keynesian models has made this observation central to the theory of monetary transmission {1}{2}, and micro evidence from advanced economies has begun to confirm that the composition of households, and not only the aggregate stance of policy, determines how far a rate change moves consumption [7][8][9].",
        "Evidence for emerging economies is far thinner, and what exists is mostly aggregate. A long literature concludes that monetary transmission in emerging markets is weaker, slower and less predictable than in advanced economies, because financial systems are shallow, informality is widespread and households have limited access to credit [24][23]. Yet the same features that are said to blunt transmission, such as thin liquid buffers and short-term borrowing, imply that a large share of households should respond strongly to changes in the cost and availability of credit. If so, the aggregate response will be the average of very different household responses, and its size will depend on how many households of each type a country has.",
        "This paper studies that heterogeneity in seven emerging Asian economies, Indonesia, India, Korea, Malaysia, the Philippines, Singapore and Thailand, between 2005Q1 and 2023Q4. We ask three questions. How much more do liquidity-constrained households reduce consumption than unconstrained households when policy tightens? How large is the cross-country variation in the aggregate consumption response, and how does it line up with differences in financial structure? And does the evidence support the conventional view that transmission in emerging Asia is uniformly weak?",
        "Our answers rest on a panel local projections framework {3} in which the shock is a high-frequency monetary policy surprise, measured from the movement of short-term market rates in a narrow window around central bank announcements {5}{6}. The outcome is non-durable consumption of household cohorts defined by liquidity position and income, constructed from harmonised household expenditure surveys. We find that after a 100-basis-point tightening, liquidity-constrained households reduce non-durable consumption by 2.4 times more than unconstrained households. The consumption elasticity to policy rate changes is largest in Indonesia (−0.41) and smallest in Singapore (−0.18), a more than twofold gap. Financial development, mortgage market structure and the share of variable-rate debt jointly explain 62 percent of the cross-country variation in transmission strength.",
        "We make three contributions. First, we provide among the first cohort-level estimates of monetary transmission for emerging Asia that combine high-frequency identification with household microdata, rather than relying on aggregate vector autoregressions with recursive identification. Second, we show that the cross-country dispersion in transmission is large and systematically related to measurable features of the household balance sheet and of the financial system, which links the heterogeneity literature to the older debate on transmission channels {15}. Third, we draw out implications for the design of macroprudential policy: where transmission operates through variable-rate debt and thin liquid buffers, prudential tools that change those features are complements to, not substitutes for, interest rate policy.",
        "The remainder of the paper proceeds as follows. Section 2 describes the monetary and financial institutions of the seven economies. Section 3 reviews the literature and Section 4 sets out a conceptual framework and the hypotheses we test. Section 5 describes the data and Section 6 the empirical strategy. Section 7 reports the main results, Section 8 examines mechanisms, and Section 9 reports robustness checks. Section 10 discusses policy implications and Section 11 concludes.",
      ],
    },
    {
      id: "background",
      heading: "2. Institutional background",
      paragraphs: [
        "The seven economies differ in income, financial depth and monetary framework, which is what makes them useful for studying heterogeneity. Korea, Indonesia, the Philippines and Thailand adopted inflation targeting between 1998 and 2000 and conduct policy through a short-term policy rate; India formalised flexible inflation targeting in 2016 after operating a multiple-indicator approach; Malaysia targets an overnight policy rate without an explicit inflation target; and Singapore conducts monetary policy through the exchange rate rather than an interest rate, so that its policy instrument is the slope, width and centring of the S$ nominal effective exchange rate band, and short-term market rates adjust endogenously.",
        "Household balance sheets also differ widely. Korea and Singapore have very high ratios of household debt to income, concentrated in mortgages, while Indonesia and India have far lower aggregate indebtedness but a much larger share of households that borrow informally or from non-bank lenders at short maturities. Korean mortgages are predominantly variable-rate or reset every few years, whereas Singapore's housing finance is dominated by public housing loans and fixed or semi-fixed packages. Thailand and Malaysia sit in between, with a mix of variable-rate bank loans and administered rates. Table 1 summarises these differences for the sample.",
        "Financial development is similarly heterogeneous. Singapore and Korea rank among the deepest financial systems in the world on the indicators used in this literature, while Indonesia and the Philippines have private credit-to-GDP ratios that, for much of the sample, stay below 40 percent. The share of adults with a transaction account at a formal institution increased sharply in all seven economies over the sample period, but starting from very different levels. These differences motivate the three structural characteristics, namely financial development, mortgage market structure and variable-rate exposure, that we later relate to the strength of transmission.",
      ],
    },
    {
      id: "literature",
      heading: "3. Related literature",
      paragraphs: [
        "Our paper relates first to the literature on monetary policy and household heterogeneity. Kaplan, Moll and Violante {1} show in a quantitative HANK model that the direct effect of interest rate changes on consumption is small relative to the indirect effect operating through labour income, and that the response depends on the distribution of liquid wealth and on the share of hand-to-mouth households. Auclert {2} decomposes the response into an earnings heterogeneity, a Fisher and an interest rate exposure channel. Empirically, Cloyne, Ferreira and Surico {7} find for the United Kingdom and the United States that mortgagors drive the response of aggregate consumption, and Flodén et al. {8} and Di Maggio et al. {9} document large cash-flow effects among households with adjustable-rate mortgages. Ippolito, Ozdagli and Perez-Orive {25} show that exposure to floating-rate loans shapes the transmission to firms. We extend this evidence to economies in which the distribution of liquidity and debt is very different.",
        "A second strand concerns consumption and liquidity constraints. Since Campbell and Mankiw {10} and Zeldes {11}, a large literature has shown that a sizeable fraction of households consumes current income and cannot smooth shocks, and Jappelli and Pistaferri {12} survey the evidence on the consumption response to income changes. Buffer-stock models {13} generate hand-to-mouth behaviour endogenously among households with low wealth relative to income. We use this literature to define our cohorts and to motivate the prediction that constrained households respond more strongly.",
        "Third, we draw on work that measures monetary policy shocks. Since Kuttner {6} and Gürkaynak, Sack and Swanson {5}, high-frequency changes in market rates around announcements have been the standard way to isolate the unexpected component of policy, and Gertler and Karadi {4} use them as instruments in a proxy-VAR. Nakamura and Steinsson {17} and Jarociński and Karadi {18} caution that surprises may reflect information about the economy as well as policy, and propose ways to separate the two. Romer and Romer {14} build narrative measures, and Ramey {19} reviews the identification of macroeconomic shocks more generally. Our measure follows the high-frequency tradition and addresses the information-effect concern directly.",
        "Fourth, we contribute to the literature on transmission in emerging markets. Mishra, Montiel and Spilimbergo {24} argue that weak bank balance sheets, limited competition and shallow securities markets blunt the interest-rate and credit channels in low-income countries, and the meta-analysis of Havranek and Rusnak {23} finds that estimated transmission lags are longer in countries with less developed financial systems. Coibion et al. {22} show for the United States that contractionary policy raises inequality in consumption and income. Our results suggest that, in emerging Asia, aggregate transmission is better described as heterogeneous than as weak.",
      ],
    },
    {
      id: "framework",
      heading: "4. Conceptual framework and hypotheses",
      paragraphs: [
        "Consider a household that chooses non-durable consumption subject to a budget constraint, holding liquid assets a and debt d with a share φ at a variable rate. A policy tightening affects its consumption through three channels. First, an intertemporal substitution channel raises the return to saving, which lowers consumption for all households regardless of wealth. Second, a cash-flow channel raises interest payments by φ times the change in the rate times d, which reduces disposable income. Third, an income channel operates through labour demand, as tighter conditions reduce hours and wages; this channel reaches households in proportion to the cyclicality of their earnings.",
        "For an unconstrained household the first channel dominates and the response is small, because the household smooths the temporary change in cash flow and income using liquid assets. For a household with liquid assets below roughly one month of income, the second and third channels translate one-for-one into consumption because there is nothing to smooth with {11}{13}. This gives our first hypothesis.",
        "H1: after a monetary tightening, non-durable consumption of liquidity-constrained households falls by more than that of unconstrained households.",
        "At the country level, the aggregate response is an average of cohort responses weighted by cohort size, scaled by the extent to which the cash-flow and income channels are active. We therefore expect the strength of transmission to depend on three characteristics. A larger share of variable-rate debt raises the direct pass-through of the policy rate to household interest payments {8}{25}. Mortgage market structure matters because it governs how quickly changes in the policy rate reach existing borrowers; markets with long fixed-rate periods delay the cash-flow channel, while markets with high loan-to-value ratios and low down payments leave more households with thin buffers {16}. Financial development has an ambiguous sign: it lets households smooth through borrowing and so can weaken the response of consumption, but deeper credit markets also make the credit channel stronger {15}. This leads to the second and third hypotheses.",
        "H2: the elasticity of consumption to the policy rate differs substantially across countries, and the differences are not explained by the average level of the policy rate or by the size of the shocks.",
        "H3: transmission is stronger where the share of variable-rate debt is higher and the mortgage market gives faster pass-through, and its relationship with financial development is conditional on the other two characteristics.",
      ],
    },
    {
      id: "data",
      heading: "5. Data",
      paragraphs: [
        "Our sample covers 2005Q1–2023Q4 (76 quarters) for the seven economies, giving 532 country-quarters. We combine three types of data: household expenditure and balance sheet microdata, high-frequency market data for the identification of monetary policy surprises, and macro-financial indicators of country structure.",
      ],
      subsections: [
        {
          id: "data-household",
          heading: "5.1 Household data and cohorts",
          paragraphs: [
            "Household data come from the national household expenditure and income surveys of each economy, which we harmonise into quarterly repeated cross-sections. Where the survey is annual or semi-annual we use the interview date to assign households to quarters. The surveys differ in design, but all record expenditure by category, income, and a set of items on assets and debts. Across the seven economies the pooled data cover about 2.9 million household-quarter observations. Table 1 reports the sources and sample sizes.",
            "Non-durable consumption is expenditure on food, housing services, utilities, transport fuel, health, education and other recurrent items, deflated by the national consumer price index. We exclude vehicles, appliances and furniture, because their purchase is lumpy and sensitive to credit availability, and examine them separately as an outcome in Section 7.",
            "We classify a household as liquidity-constrained if its liquid assets (cash, bank deposits and money-market holdings) are less than one month of income at the time of interview, following the hand-to-mouth taxonomy that is standard in the literature, and as unconstrained otherwise. Surveys that do not measure liquid assets directly use a proxy based on deposit holdings and a predicted-liquidity score, and we show in Section 9 that the results are robust to the cut-off. On average 38 percent of households are constrained, with a range from 21 percent in Singapore to 52 percent in Indonesia. We also divide households into income terciles within each country-quarter. Cohort-by-quarter averages are then computed with survey weights and are the units of analysis.",
          ],
          tables: [
            {
              id: "table-1",
              caption: "Table 1. Sample and country characteristics",
              columns: ["Country", "Household observations (thousands)", "Constrained share (%)", "Variable-rate share of household debt (%)", "Private credit / GDP (%)", "Mean policy rate (%)"],
              rows: [
                ["Indonesia", "612", "52", "34", "32", "5.9"],
                ["India", "498", "47", "41", "51", "6.2"],
                ["Korea", "351", "29", "71", "148", "2.1"],
                ["Malaysia", "287", "36", "58", "117", "2.9"],
                ["Philippines", "403", "49", "38", "38", "4.0"],
                ["Singapore", "224", "21", "24", "122", "—"],
                ["Thailand", "525", "41", "46", "114", "1.8"],
                ["All countries", "2,900", "38", "45", "89", "3.8"],
              ],
              note: "Note: Averages over 2005Q1–2023Q4 (unweighted means across countries in the last row, except household observations which are totals). Singapore does not set an interest rate target. Variable-rate share is the share of household debt with rates that reset at least annually.",
            },
          ],
        },
        {
          id: "data-shocks",
          heading: "5.2 High-frequency monetary policy surprises",
          paragraphs: [
            "We construct monetary policy surprises as the change in the yield on a short-maturity market instrument in a 30-minute window around each central bank announcement, using three-month overnight index swap rates or, where these are unavailable, interbank forward rates and short-dated government bills. The window is widened to a full trading day for economies in which the announcement falls outside market hours. For Singapore, whose instrument is the exchange-rate band, the surprise is the change in the three-month S$ swap offer rate around the semi-annual Monetary Authority statements.",
            "To purge the information effect {17}{18}, we follow Jarociński and Karadi {18} and keep only announcements in which the surprise in the policy-sensitive rate and the contemporaneous change in the local equity index move in opposite directions. These are interpreted as genuine policy surprises; announcements in which rates and equities move together are interpreted as news about the economy and are dropped from the shock series. About 17 percent of announcements are removed in this way. The retained surprises are then summed within the quarter to give a quarterly shock, normalised so that a one-unit shock corresponds to a 100-basis-point increase in the policy-sensitive market rate on impact. Table 2 describes the resulting shock series.",
          ],
          tables: [
            {
              id: "table-2",
              caption: "Table 2. Monetary policy surprise series",
              columns: ["Country", "Announcements", "Retained after information-effect filter", "Std. dev. of surprise (bp)", "Largest tightening surprise (bp)", "Largest easing surprise (bp)"],
              rows: [
                ["Indonesia", "168", "141", "9.4", "38", "−31"],
                ["India", "122", "101", "8.1", "31", "−42"],
                ["Korea", "208", "174", "5.6", "21", "−26"],
                ["Malaysia", "98", "82", "4.7", "17", "−24"],
                ["Philippines", "152", "127", "7.3", "27", "−29"],
                ["Singapore", "38", "31", "6.2", "19", "−23"],
                ["Thailand", "157", "130", "5.9", "22", "−27"],
                ["Total", "943", "786", "6.7", "38", "−42"],
              ],
              note: "Note: Surprises are 30-minute (or one-day) changes in the three-month market rate around announcements; the information-effect filter removes announcements in which rates and equity prices move in the same direction. The standard deviation in the last row is the pooled value.",
            },
          ],
        },
        {
          id: "data-structure",
          heading: "5.3 Country structure variables",
          paragraphs: [
            "We use three country-level structure variables. Financial development is the IMF financial development index, which aggregates the depth, access and efficiency of financial institutions and markets. Mortgage market structure is a composite index that combines the typical loan-to-value ratio, the share of mortgages with an initial fixed-rate period of more than five years, and the prevalence of mortgage prepayment penalties, scaled so that higher values denote faster pass-through. The variable-rate share is the share of household debt whose interest rate resets at least annually, taken from central bank financial stability reports and household surveys. All three are measured as sample-period averages for the main analysis and are standardised to mean zero and unit variance.",
          ],
        },
      ],
    },
    {
      id: "strategy",
      heading: "6. Empirical strategy",
      paragraphs: [
        "Our empirical strategy estimates impulse responses of cohort consumption to the monetary policy shock using local projections. Because the household data are cohort averages in a panel of countries, we exploit both the time-series and the cross-sectional variation.",
      ],
      subsections: [
        {
          id: "strategy-lp",
          heading: "6.1 Panel local projections",
          paragraphs: [
            "For cohort g in country i and quarter t, let c(i,g,t) be log real non-durable consumption per adult equivalent. For each horizon h = 0, 1, …, 12 quarters we estimate c(i,g,t+h) − c(i,g,t−1) = α(i,g,h) + β(g,h) · s(i,t) + Σ(k=1 to 4) γ(g,h,k)′ x(i,t−k) + ε(i,g,t+h), where s(i,t) is the monetary policy shock, α(i,g,h) are country-cohort fixed effects and x contains lags of the shock, of the cohort's consumption growth, of domestic inflation and output growth, and of the change in the US federal funds rate and the VIX to control for global financial conditions. The coefficient β(g,h) is the cumulative response of cohort g at horizon h to a 100-basis-point tightening.",
            "Local projections are robust to misspecification of the dynamics {3} and, as Montiel Olea and Plagborg-Møller {20} show, inference using lag-augmented regressions with heteroskedasticity-robust standard errors is valid across a wide range of persistence. We estimate the equations separately for the constrained and unconstrained cohorts and test the equality of the coefficients at each horizon with a Wald test based on the stacked system. The null of H1 is that the response of the constrained group is no larger than that of the unconstrained group, and our headline statistic is the ratio of the two cumulative responses at the eight-quarter horizon, which is when the average response peaks.",
          ],
        },
        {
          id: "strategy-country",
          heading: "6.2 Country-level elasticities",
          paragraphs: [
            "To obtain a country-specific measure of transmission, we aggregate the cohort responses using the population shares of the cohorts in each country and define the elasticity of consumption to the policy rate as the peak cumulative percentage response of aggregate non-durable consumption to a 100-basis-point tightening, estimated country by country with the same specification. This definition is a semi-elasticity in the usual sense, and we call it an elasticity for brevity. We then regress the 21 country-by-income-tercile elasticities on the three structure variables to quantify how much of the variation they explain, with standard errors clustered by country.",
          ],
        },
        {
          id: "strategy-inference",
          heading: "6.3 Inference and threats to identification",
          paragraphs: [
            "Standard errors in the pooled specifications are Driscoll–Kraay {21} with a bandwidth of eight quarters, which are robust to serial correlation and to cross-sectional dependence, which is likely given common global shocks. Because the number of countries is small, we also report wild cluster bootstrap p-values in the robustness section.",
            "The identifying assumption is that, conditional on the controls, the retained surprise is unrelated to other determinants of household consumption. Three concerns deserve attention. First, surprises may reflect central bank information about the economy; we address this with the sign-restriction filter described above and by an alternative based on narrative controls {14}. Second, in small open economies policy announcements may coincide with exchange-rate or capital-flow measures; we exclude announcements that coincide with such measures in a robustness check. Third, constrained status is itself endogenous to the cycle, since households move into and out of the constrained group. We therefore fix the cohort membership at the previous year's status where panel data allow, and use the stock of constrained households in a base period otherwise.",
          ],
        },
      ],
    },
    {
      id: "results",
      heading: "7. Results",
      paragraphs: [
        "We present three sets of results: the pooled responses of constrained and unconstrained households, the pattern across income terciles and categories of expenditure, and the country-level elasticities.",
      ],
      subsections: [
        {
          id: "results-pooled",
          heading: "7.1 Constrained and unconstrained households",
          paragraphs: [
            "Table 3 reports the cumulative response of non-durable consumption to a 100-basis-point tightening at horizons of 0, 4, 8 and 12 quarters, pooled over the seven economies. Figure 1 plots the full impulse responses with 95 percent confidence bands. For liquidity-constrained households, consumption falls on impact by 0.10 percent, by 1.05 percent after four quarters and by 1.62 percent after eight quarters, the horizon of the peak. For unconstrained households the corresponding responses are −0.04, −0.44 and −0.68 percent. At the eight-quarter horizon, the response of constrained households is therefore 2.4 times that of unconstrained households (1.62 divided by 0.68), and the difference of 0.94 percentage points is statistically significant at the 1 percent level, supporting H1.",
            "The responses are persistent. Consumption of constrained households is still 1.12 percent below its pre-shock level after twelve quarters, whereas the unconstrained response has declined to 0.46 percent and is statistically indistinguishable from zero at the 5 percent level in the last two quarters of the window. The difference between the groups also builds quickly: it is already significant after two quarters, consistent with a cash-flow channel that works through income and interest payments rather than slowly through wealth. The time to peak of six to eight quarters is within the range that Havranek and Rusnak {23} report for countries with developing financial systems.",
            "The magnitudes are economically meaningful. A 100-basis-point tightening is large relative to the standard deviation of the surprise in Table 2, but it is within the range of cumulative policy changes during tightening cycles in the sample, for example 2022–2023 in Korea, Indonesia and the Philippines. For a country in which 38 percent of households are constrained, the population-weighted response at the peak is about 1.0 percent, which is the order of magnitude of the cross-country elasticities reported below.",
          ],
          tables: [
            {
              id: "table-3",
              caption: "Table 3. Cumulative consumption response to a 100-basis-point tightening, by liquidity status",
              columns: ["Horizon (quarters)", "Constrained (%)", "Unconstrained (%)", "Difference (pp)", "Ratio"],
              rows: [
                ["0", "−0.10", "−0.04", "−0.06", "2.5"],
                ["4", "−1.05***", "−0.44***", "−0.61***", "2.4"],
                ["8", "−1.62***", "−0.68***", "−0.94***", "2.4"],
                ["12", "−1.12**", "−0.46*", "−0.66**", "2.4"],
                ["Observations (cohort-quarters)", "1,064", "1,064", "", ""],
              ],
              note: "Note: Coefficients β(g,h) from panel local projections of log non-durable consumption on the monetary policy shock, with country-cohort fixed effects and the controls described in Section 6.1. Driscoll–Kraay standard errors with bandwidth of eight quarters. * p < 0.10, ** p < 0.05, *** p < 0.01. The ratio is the constrained response divided by the unconstrained response.",
            },
          ],
          figures: [
            {
              id: "figure-1",
              caption: "Figure 1. Impulse responses of non-durable consumption to a 100-basis-point tightening",
              kind: "line",
              xLabels: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
              yLabel: "Cumulative change (%)",
              series: [
                {
                  name: "Liquidity-constrained",
                  values: [-0.10, -0.28, -0.52, -0.79, -1.05, -1.30, -1.50, -1.60, -1.62, -1.55, -1.43, -1.28, -1.12],
                  lower: [-0.28, -0.52, -0.84, -1.17, -1.50, -1.82, -2.07, -2.20, -2.24, -2.18, -2.07, -1.93, -1.78],
                  upper: [0.08, -0.04, -0.20, -0.41, -0.60, -0.78, -0.93, -1.00, -1.00, -0.92, -0.79, -0.63, -0.46],
                },
                {
                  name: "Unconstrained",
                  values: [-0.04, -0.11, -0.21, -0.33, -0.44, -0.55, -0.63, -0.67, -0.68, -0.66, -0.60, -0.53, -0.46],
                  lower: [-0.16, -0.28, -0.43, -0.60, -0.75, -0.90, -1.02, -1.09, -1.12, -1.11, -1.06, -1.00, -0.93],
                  upper: [0.08, 0.06, 0.01, -0.06, -0.13, -0.20, -0.24, -0.25, -0.24, -0.21, -0.14, -0.06, 0.01],
                },
              ],
              note: "Note: Cumulative response of log non-durable consumption (per cent) to a one-unit monetary policy shock normalised to a 100-basis-point tightening, with 95 percent confidence bands from Driscoll–Kraay standard errors. Horizons are in quarters.",
            },
          ],
        },
        {
          id: "results-income",
          heading: "7.2 Income terciles and expenditure categories",
          paragraphs: [
            "Liquidity position and income are correlated but not identical. In the lowest income tercile, the peak response of non-durable consumption is −1.38 percent; in the middle tercile it is −0.97 percent and in the top tercile −0.61 percent. When we include both income terciles and liquidity status, the liquidity-constrained indicator remains the dominant source of heterogeneity: within each income tercile, constrained households respond between 1.9 and 2.7 times as much as unconstrained households, and the ordering across income terciles is substantially weakened once liquidity is controlled for. This is consistent with the view that it is the inability to smooth, rather than low income as such, which makes consumption sensitive to monetary policy {11}{12}.",
            "Responses also differ across categories of expenditure. Within non-durables, spending on food responds least, with a peak of −0.52 percent for constrained households, while spending on transport fuel, recreation and personal services falls by more than 2.5 percent. Expenditure on durables is much more sensitive: purchases of vehicles and appliances fall by about 6.8 percent among constrained households and 3.9 percent among unconstrained households, which is consistent with a credit-channel effect on durable goods financed by instalment loans {15}. We focus on non-durables because they are the closest observable counterpart of welfare-relevant consumption and are not affected by lumpy purchase timing.",
          ],
        },
        {
          id: "results-country",
          heading: "7.3 Cross-country elasticities",
          paragraphs: [
            "Table 4 reports country-specific elasticities of aggregate non-durable consumption to a 100-basis-point tightening, with the constrained share for reference. The elasticity is largest in Indonesia (−0.41) and smallest in Singapore (−0.18). The remaining economies lie in between: the Philippines (−0.37), India (−0.33), Thailand (−0.29), Malaysia (−0.26) and Korea (−0.24). The Indonesian elasticity is thus more than twice that of Singapore, and the difference between the two is significant at the 1 percent level. Figure 2 displays the ranking.",
            "These estimates run counter to the idea that transmission is uniformly weak in emerging markets. In all seven economies the response is negative and statistically significant, and the unweighted average elasticity of −0.30 is in the range reported for advanced economies in studies that use similar methods. What differs is the composition: the economies with the largest elasticities are those with the highest shares of constrained households, whereas the smallest elasticity is in Singapore, where the constrained share is lowest at 21 percent and the instrument of policy, the exchange rate band, reaches households only indirectly. Korea is notable for combining a high variable-rate share with a low constrained share; its elasticity is moderate because the two features offset one another.",
            "The ranking is not simply that of the income level. Korea and Singapore are the richest, and they have the lowest elasticities, but Thailand and Malaysia have higher income than Indonesia, India and the Philippines while sitting in the middle of the distribution, which suggests that financial-structure variables are better candidates than income to explain the dispersion. We turn to that question in Section 8.",
          ],
          tables: [
            {
              id: "table-4",
              caption: "Table 4. Elasticity of aggregate consumption to a 100-basis-point tightening, by country",
              columns: ["Country", "Elasticity", "Std. error", "95% confidence interval", "Constrained share (%)"],
              rows: [
                ["Indonesia", "−0.41***", "(0.07)", "[−0.55, −0.27]", "52"],
                ["Philippines", "−0.37***", "(0.08)", "[−0.53, −0.21]", "49"],
                ["India", "−0.33***", "(0.07)", "[−0.47, −0.19]", "47"],
                ["Thailand", "−0.29***", "(0.06)", "[−0.41, −0.17]", "41"],
                ["Malaysia", "−0.26***", "(0.06)", "[−0.38, −0.14]", "36"],
                ["Korea", "−0.24***", "(0.05)", "[−0.34, −0.14]", "29"],
                ["Singapore", "−0.18**", "(0.07)", "[−0.32, −0.04]", "21"],
                ["Unweighted mean", "−0.30", "", "", "39"],
              ],
              note: "Note: Peak cumulative response of log aggregate non-durable consumption (per cent) to a 100-basis-point tightening, estimated country by country using the specification of Section 6.1 with cohort-weighted aggregation. Heteroskedasticity- and autocorrelation-robust standard errors in parentheses. * p < 0.10, ** p < 0.05, *** p < 0.01. The constrained share in the last row is the unweighted mean of the seven countries.",
            },
          ],
          figures: [
            {
              id: "figure-2",
              caption: "Figure 2. Consumption elasticity to the policy rate across seven emerging Asian economies",
              kind: "bar",
              xLabels: ["Indonesia", "Philippines", "India", "Thailand", "Malaysia", "Korea", "Singapore"],
              yLabel: "Elasticity (absolute value)",
              series: [
                { name: "Elasticity of consumption", values: [0.41, 0.37, 0.33, 0.29, 0.26, 0.24, 0.18] },
              ],
              note: "Note: Absolute value of the peak response of aggregate non-durable consumption (per cent) to a 100-basis-point tightening; point estimates from Table 4.",
            },
          ],
        },
      ],
    },
    {
      id: "mechanisms",
      heading: "8. Mechanisms and heterogeneity",
      paragraphs: [
        "We now ask what explains the cross-country variation. Using the 21 country-by-income-tercile elasticities, we regress the absolute value of the elasticity on the three standardised structure variables of Section 5.3. Table 5 reports the results. Column (1) uses financial development alone, column (2) the mortgage market index alone, column (3) the variable-rate share alone and column (4) all three together.",
        "Each variable is individually related to the strength of transmission, with the expected sign for the variable-rate share and the mortgage index. A one standard deviation increase in the variable-rate share raises the elasticity by 0.052, and a one standard deviation increase in the mortgage index by 0.041. Financial development is negatively associated with the elasticity when entered alone (−0.047), but its coefficient shrinks once the other two characteristics are controlled for, consistent with the ambiguous sign discussed in Section 4. In column (4), the three characteristics jointly explain 62 percent of the variation in the elasticities across the 21 cells. Leaving out one country at a time yields a range of R-squared from 0.54 to 0.71.",
        "Several features support the interpretation that these characteristics operate through household balance sheets rather than through a correlation with the shock. First, the variable-rate share predicts a larger response among constrained households than among unconstrained households, with a coefficient on the interaction between the share and the constrained indicator of 0.031, which is the pattern the cash-flow channel implies. Second, the mortgage market index matters most for households with outstanding mortgages. Third, excluding Singapore, the only country in which the policy instrument is not an interest rate, leaves the coefficients essentially unchanged, and the joint R-squared falls to 0.58. Evidence on the exact role of each characteristic remains suggestive given only seven countries, and we regard the 62 percent as a descriptive decomposition and not a causal one.",
        "The results have implications for the earlier debate on the credit channel {15}. Variable-rate debt and thin liquid buffers are the relevant features for the household side of this channel. The cross-country evidence that economies with deeper financial systems have weaker aggregate consumption responses once structure is held fixed suggests that credit access allows smoothing; whether it matters for firms and investment is a question for other work.",
      ],
      tables: [
        {
          id: "table-5",
          caption: "Table 5. Explaining cross-country variation in transmission strength",
          columns: ["Variable (standardised)", "(1)", "(2)", "(3)", "(4)"],
          rows: [
            ["Financial development", "−0.047**", "", "", "−0.018"],
            ["Mortgage market index", "", "0.041**", "", "0.029*"],
            ["Variable-rate share", "", "", "0.052***", "0.038**"],
            ["Constant", "0.299***", "0.299***", "0.299***", "0.299***"],
            ["R-squared", "0.24", "0.19", "0.41", "0.62"],
            ["Observations (country × tercile cells)", "21", "21", "21", "21"],
          ],
          note: "Note: Dependent variable is the absolute value of the peak elasticity (per cent per 100 bp) for each country-by-income-tercile cell. Regressors are standardised to mean zero and unit variance. Standard errors clustered by country. * p < 0.10, ** p < 0.05, *** p < 0.01.",
        },
      ],
    },
    {
      id: "robustness",
      heading: "9. Robustness",
      paragraphs: [
        "Table 6 reports the ratio of the constrained to the unconstrained response at the eight-quarter horizon and the Indonesia–Singapore elasticity gap under a series of alternative choices. The baseline appears in the first row.",
        "We first change the definition of constrained status. Raising the liquidity threshold from one month to two months of income increases the constrained share to 51 percent and reduces the ratio to 2.1, while lowering it to two weeks of income yields a ratio of 2.7; the qualitative result is unchanged. Using the predicted-liquidity score alone, which does not rely on any measured assets, gives 2.2.",
        "Second, we change the shock. Using the unfiltered high-frequency surprise, which includes announcements with an information effect, gives a smaller ratio (2.0) and weaker responses, consistent with the attenuation expected if the contaminated component moves consumption in the opposite direction. Using a narrative measure built from central bank minutes in the style of Romer and Romer {14} gives a ratio of 2.3. Excluding announcements that coincide with exchange-rate or capital-flow measures gives 2.5.",
        "Third, we change the sample and inference. Dropping the global financial crisis period (2008Q3–2009Q4) and the pandemic quarters (2020Q1–2021Q2) gives a ratio of 2.6. Dropping each country in turn gives ratios between 2.2 and 2.6. Wild cluster bootstrap p-values, which allow for the small number of countries, remain below 0.05 for the difference between constrained and unconstrained households at the eight-quarter horizon and are 0.03 for the Indonesia–Singapore difference. Finally, replacing the local projections with a panel VAR with the shock ordered first produces similar shapes with a smaller peak, as is typical when local projections and VARs are compared {3}{19}.",
      ],
      tables: [
        {
          id: "table-6",
          caption: "Table 6. Robustness of the main results",
          columns: ["Specification", "Ratio (constrained / unconstrained)", "Elasticity: Indonesia", "Elasticity: Singapore", "Joint R-squared (structure)"],
          rows: [
            ["Baseline", "2.4", "−0.41", "−0.18", "0.62"],
            ["Constrained threshold: two months of income", "2.1", "−0.39", "−0.19", "0.60"],
            ["Constrained threshold: two weeks of income", "2.7", "−0.43", "−0.17", "0.63"],
            ["Predicted-liquidity score only", "2.2", "−0.40", "−0.19", "0.57"],
            ["Unfiltered surprises (no information-effect filter)", "2.0", "−0.34", "−0.17", "0.55"],
            ["Narrative shock series", "2.3", "−0.38", "−0.19", "0.59"],
            ["Excluding coincident exchange-rate measures", "2.5", "−0.42", "−0.18", "0.64"],
            ["Excluding 2008Q3–2009Q4 and 2020Q1–2021Q2", "2.6", "−0.43", "−0.17", "0.65"],
            ["Panel VAR, shock ordered first", "2.2", "−0.35", "−0.16", "0.58"],
          ],
          note: "Note: Each row re-estimates the baseline under the stated change. The ratio is the cumulative constrained response divided by the unconstrained response at the eight-quarter horizon; the elasticities are peak responses of aggregate non-durable consumption to a 100-basis-point tightening; the last column is the R-squared of the regression in column (4) of Table 5.",
        },
      ],
    },
    {
      id: "discussion",
      heading: "10. Discussion and policy implications",
      paragraphs: [
        "The findings refine the conventional view that monetary transmission is uniformly weak in emerging markets. In seven economies with very different financial structures, aggregate consumption responds significantly to policy, and the response of households with thin liquid buffers is large. What is weak, in the sense of being small, is the response of the households that hold enough liquid assets to smooth: for them the response is less than half of that of their constrained neighbours. Aggregate transmission is therefore a function of the distribution of liquidity, as the HANK literature has emphasised {1}{2}, and it differs across countries because that distribution differs.",
        "For monetary policy, heterogeneity implies that the distributional burden of tightening is concentrated on the households least able to bear it. Coibion et al. {22} document an analogous pattern in the United States. In economies where over half of households are constrained, such as Indonesia and the Philippines, a given rate increase reduces consumption more and the cost of disinflation in terms of lost welfare is likely larger than aggregate elasticities suggest. Central banks may therefore wish to monitor the distribution of liquidity and of variable-rate debt as part of their assessment of the transmission mechanism.",
        "For macroprudential policy, the results suggest complementarities. Policies that reduce the share of variable-rate household debt, for example through caps on loan-to-value ratios and debt-service-to-income ratios, incentives for longer fixed-rate periods and stress tests that include interest-rate shocks, would weaken the cash-flow channel and so reduce the sensitivity of consumption to the policy rate; this may be desirable where financial stability is the concern and undesirable where it weakens the effectiveness of policy against inflation. The balance depends on the objective. Policies that build liquid buffers, such as wider access to formal savings products and pension and social insurance reforms, would instead reduce the cost of tightening for the constrained by reducing their sensitivity to income shocks. Our results do not allow us to rank these instruments, but they show that the size of the gains from coordinating macroprudential and monetary policy depends on the distribution of liquidity in the region.",
        "Several limitations should be noted. The number of countries is small, and the decomposition of the cross-country variation is descriptive. The cohort construction relies on liquid-asset measures that are imperfect in some surveys. Household surveys are collected at low frequency and are not designed for quarterly analysis, and measurement error in cohort averages will attenuate estimates. Finally, we study consumption and do not examine labour income, firms' investment or the exchange rate channel, each of which is relevant for the overall effect of policy and some of which is likely to be especially important in small open economies.",
      ],
    },
    {
      id: "conclusion",
      heading: "11. Conclusion",
      paragraphs: [
        "This paper has estimated the heterogeneous effects of monetary policy shocks on household consumption in seven emerging Asian economies using a panel local projections framework with high-frequency identification. We find that liquidity-constrained households reduce non-durable consumption by 2.4 times more than unconstrained households following a 100-basis-point tightening, that the elasticity of consumption to policy rate changes ranges from −0.41 in Indonesia to −0.18 in Singapore, and that financial development, mortgage market structure and the share of variable-rate debt jointly explain 62 percent of the cross-country variation in transmission strength.",
        "These results show that transmission in emerging Asia is neither uniformly weak nor uniformly strong; it depends on who holds the debt and the liquid assets. For policymakers the implication is that monetary and macroprudential tools should be designed together, with attention to the distribution of liquidity and the structure of household debt. For researchers, the next steps are to extend the analysis to labour income and firm outcomes and to exploit richer household panels where they become available in the region.",
      ],
    },
    {
      id: "appendix",
      heading: "Appendix A. Data construction notes",
      paragraphs: [
        "Household surveys. Survey sources by country are the national household expenditure and income surveys, harmonised to a common set of expenditure categories. Quarterly cohort averages are computed using survey weights and require a minimum of 150 households per cohort-quarter; cohort-quarters with fewer observations are dropped, which removes 3.1 percent of the sample, mostly in the early years for Singapore. Consumption is expressed per adult equivalent using the modified OECD scale and deflated by the national consumer price index.",
        "Surprise construction. For each announcement we take the change in the three-month market rate between 15 minutes before and 15 minutes after the release of the decision. Where several announcements occur within a quarter we sum the retained surprises. The information-effect filter uses the contemporaneous change in the national equity index over the same window; announcements for which the signed product of the rate and equity changes is positive are dropped. Using a threshold of 0.5 standard deviations before dropping does not change the results.",
        "Structure variables. The financial development index is the IMF index for each country, averaged over the sample. The mortgage market index is the first principal component of three standardised indicators: the average loan-to-value ratio at origination, the share of new mortgages with fixed rates for more than five years (reverse-scored) and the prevalence of prepayment penalties (reverse-scored). The variable-rate share uses central bank financial stability reports, supplemented by survey information where reports are unavailable.",
      ],
    },
  ],
};
