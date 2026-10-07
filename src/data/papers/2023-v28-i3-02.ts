// Vol. 28, No. 3 (July 2023) — full text for an article defined in journal.ts (sample content).
import type { FulltextSpec } from "../paper-spec";

export const fulltext: FulltextSpec = {
  id: "2023-v28-i3-02",
  acknowledgments:
    "We thank seminar participants at Stockholm University and Hanyang University, two anonymous referees and the handling Co-Editor for helpful comments. Because one of the authors is the journal's Editor-in-Chief, the manuscript was handled independently by Co-Editor Hyun-Jin Kim. All errors are our own.",
  dataAvailability:
    "Top-income shares are from the World Inequality Database; national accounts data are from the OECD and the IMF World Economic Outlook; top marginal tax rates were compiled from OECD tax databases and national tax legislation. The assembled country panel and replication code are available from the corresponding author.",
  editorialNote:
    "Evelyn Stewart and Jae-Hoon Hwang instrument top-income shares with top marginal tax rates in 36 economies over 1990–2022 and find that a one percentage point rise in the top-decile income share lowers the consumption share of GDP by 0.28 points over five years and raises the current-account balance by 0.41 points, effects that are much weaker where household credit markets are deep.",
  refs: [
    /* 1 */ "Piketty, T., & Saez, E. (2003). Income inequality in the United States, 1913–1998. Quarterly Journal of Economics, 118(1), 1–41.",
    /* 2 */ "Atkinson, A. B., Piketty, T., & Saez, E. (2011). Top incomes in the long run of history. Journal of Economic Literature, 49(1), 3–71.",
    /* 3 */ "Piketty, T., Saez, E., & Stantcheva, S. (2014). Optimal taxation of top labor incomes: A tale of three elasticities. American Economic Journal: Economic Policy, 6(1), 230–271.",
    /* 4 */ "Saez, E., Slemrod, J., & Giertz, S. H. (2012). The elasticity of taxable income with respect to marginal tax rates: A critical review. Journal of Economic Literature, 50(1), 3–50.",
    /* 5 */ "Dynan, K. E., Skinner, J., & Zeldes, S. P. (2004). Do the rich save more? Journal of Political Economy, 112(2), 397–444.",
    /* 6 */ "Carroll, C. D. (2000). Why do the rich save so much? In J. B. Slemrod (Ed.), Does Atlas shrug? The economic consequences of taxing the rich (pp. 465–484). Harvard University Press.",
    /* 7 */ "Mian, A., Straub, L., & Sufi, A. (2021). Indebted demand. Quarterly Journal of Economics, 136(4), 2243–2307.",
    /* 8 */ "Summers, L. H. (2014). U.S. economic prospects: Secular stagnation, hysteresis, and the zero lower bound. Business Economics, 49(2), 65–73.",
    /* 9 */ "Eggertsson, G. B., Mehrotra, N. R., & Robbins, J. A. (2019). A model of secular stagnation: Theory and quantitative evaluation. American Economic Journal: Macroeconomics, 11(1), 1–48.",
    /* 10 */ "Rajan, R. G. (2010). Fault lines: How hidden fractures still threaten the world economy. Princeton University Press.",
    /* 11 */ "Kumhof, M., Rancière, R., & Winant, P. (2015). Inequality, leverage, and crises. American Economic Review, 105(3), 1217–1245.",
    /* 12 */ "Coibion, O., Gorodnichenko, Y., Kudlyak, M., & Mondragon, J. (2020). Greater inequality and household borrowing: New evidence from household data. Journal of the European Economic Association, 18(6), 2922–2971.",
    /* 13 */ "Bordo, M. D., & Meissner, C. M. (2012). Does inequality lead to a financial crisis? Journal of International Money and Finance, 31(8), 2147–2161.",
    /* 14 */ "Behringer, J., & van Treeck, T. (2018). Income distribution and the current account. Journal of International Economics, 114, 238–254.",
    /* 15 */ "Chinn, M. D., & Prasad, E. S. (2003). Medium-term determinants of current accounts in industrial and developing countries: An empirical exploration. Journal of International Economics, 59(1), 47–76.",
    /* 16 */ "Obstfeld, M., & Rogoff, K. (1995). The intertemporal approach to the current account. In G. M. Grossman & K. Rogoff (Eds.), Handbook of international economics (Vol. 3, pp. 1731–1799). Elsevier.",
    /* 17 */ "Roine, J., Vlachos, J., & Waldenström, D. (2009). The long-run determinants of inequality: What can we learn from top income data? Journal of Public Economics, 93(7–8), 974–988.",
    /* 18 */ "Alvaredo, F., Chancel, L., Piketty, T., Saez, E., & Zucman, G. (2018). World inequality report 2018. Belknap Press of Harvard University Press.",
    /* 19 */ "Hall, R. E. (1978). Stochastic implications of the life cycle–permanent income hypothesis: Theory and evidence. Journal of Political Economy, 86(6), 971–987.",
    /* 20 */ "Kaplan, G., Violante, G. L., & Weidner, J. (2014). The wealthy hand-to-mouth. Brookings Papers on Economic Activity, 2014(1), 77–138.",
    /* 21 */ "Mian, A., Rao, K., & Sufi, A. (2013). Household balance sheets, consumption, and the economic slump. Quarterly Journal of Economics, 128(4), 1687–1726.",
    /* 22 */ "Jordà, Ò. (2005). Estimation and inference of impulse responses by local projections. American Economic Review, 95(1), 161–182.",
    /* 23 */ "Stock, J. H., & Yogo, M. (2005). Testing for weak instruments in linear IV regression. In D. W. K. Andrews & J. H. Stock (Eds.), Identification and inference for econometric models: Essays in honor of Thomas Rothenberg (pp. 80–108). Cambridge University Press.",
    /* 24 */ "Nickell, S. (1981). Biases in dynamic models with fixed effects. Econometrica, 49(6), 1417–1426.",
    /* 25 */ "Arellano, M., & Bond, S. (1991). Some tests of specification for panel data: Monte Carlo evidence and an application to employment equations. Review of Economic Studies, 58(2), 277–297.",
    /* 26 */ "Stiglitz, J. E. (2012). The price of inequality: How today's divided society endangers our future. W. W. Norton.",
    /* 27 */ { jer: "2021-v26-i1-02" },
  ],
  body: [
    {
      id: "introduction",
      heading: "1. Introduction",
      paragraphs: [
        "The share of national income accruing to the richest households has risen in most advanced economies and in many emerging economies since the 1980s [1][2][18]. At the same time, many of these economies have experienced persistently weak aggregate demand, falling real interest rates and, in several cases, large and persistent current-account surpluses. A long tradition in economics, revived by the debate on secular stagnation [8][9], suggests that these trends may be connected. If richer households save a larger share of their income than poorer households [5][6], a shift of income towards the top raises desired saving at given interest rates. In a closed economy this depresses consumption and, if interest rates cannot fall enough, output; in an open economy part of the excess saving can be exported, raising the current-account balance.",
        "The empirical evidence on this mechanism is surprisingly mixed. Cross-country correlations between inequality and consumption or saving are weak and sensitive to specification, in part because inequality is itself an outcome of the same forces — technology, globalisation, finance and policy — that shape aggregate demand. Rising inequality may also be accompanied by increased borrowing by lower- and middle-income households, which sustains consumption for a time at the cost of higher leverage [10][11][12]. Whether rising inequality depresses demand may therefore depend on the structure of the financial system, and simple correlations may mask offsetting effects across countries.",
        "This paper reassesses the relationship between income inequality and aggregate demand using a panel of 36 advanced and emerging economies over 1990–2022. Our measure of inequality is the top-decile pre-tax income share from the World Inequality Database. To address the endogeneity of inequality, we exploit variation in top-income shares induced by changes in top marginal income tax rates. A large literature shows that cuts in top marginal rates are followed by increases in top-income shares, because of changes in reported income, effort and bargaining at the top [3][4][17]. Conditional on country and year fixed effects and on the overall stance of fiscal policy, changes in top rates are plausibly unrelated to shocks to aggregate demand other than through their effect on the distribution of income.",
        "We find that a 1 percentage point increase in the top-decile income share is associated with a 0.28 percentage point reduction in the consumption share of GDP over the subsequent five years and a 0.41 percentage point increase in the current-account balance. The current-account response exceeds the consumption response because investment also falls, by 0.11 percentage points of GDP, consistent with weaker demand reducing the incentive to invest. The instrumental-variable (IV) estimates are larger in absolute value than ordinary least squares (OLS) estimates, consistent with measurement error in top-income shares and with the positive association between credit booms and inequality that biases OLS towards zero.",
        "The effects are moderated by cross-country heterogeneity in financial-system structure. In economies with deep household credit markets, where lower- and middle-income households can borrow more easily, the consumption share falls by only 0.12 percentage points per point of top-decile share and the current-account balance rises by 0.17 points, but household debt rises substantially. In economies with shallow household credit markets the consumption share falls by 0.43 points and the current-account balance rises by 0.63 points. These results are consistent with secular-stagnation channels linking inequality to weak aggregate demand, and with the view that credit expansion can temporarily offset — but not eliminate — the demand effects of rising inequality.",
        "The rest of the paper is organised as follows. Section 2 describes the background, Section 3 reviews the related literature and Section 4 sets out the conceptual framework. Section 5 describes the data and Section 6 the empirical strategy. Section 7 presents the main results, Section 8 examines mechanisms and heterogeneity, and Section 9 reports robustness checks. Section 10 discusses policy implications and Section 11 concludes.",
      ],
    },
    {
      id: "background",
      heading: "2. Background: Top Incomes, Taxes and Demand since 1990",
      paragraphs: [
        "Between 1990 and 2022 the average top-decile pre-tax income share in our sample rose from 33.4 to 37.9 percent. The increase was largest in the English-speaking economies and in several emerging economies, including China and India, and smaller in continental Europe and Japan, although the top share rose in almost every country. Over the same period, top marginal income tax rates fell substantially. The average top statutory rate on personal income, including subnational taxes, declined from 51.6 percent in 1990 to 42.3 percent in 2022. The cuts were concentrated in the 1990s and early 2000s, but the timing and size of reforms varied widely: some countries cut top rates sharply in a single reform, others reduced them gradually, and several raised top rates after the global financial crisis to consolidate public finances.",
        "Aggregate demand evolved very differently across countries. The household consumption share of GDP fell in many economies with rising top shares, most strikingly in China and in several Northern European countries, while it rose in the United States and the United Kingdom, where household debt expanded rapidly before 2008. Current-account imbalances widened sharply in the 2000s, with large surpluses in Germany, the Netherlands, China and several Asian economies and large deficits in the United States, the United Kingdom and Southern Europe. Real interest rates fell almost everywhere. These patterns have motivated a growing body of work on the role of inequality in global imbalances and in the decline of the natural rate of interest [7][14].",
        "Korea illustrates several of these trends. The top-decile share rose from around 30 percent in the mid-1990s to about 35 percent by the late 2010s, the household consumption share fell from above 55 percent of GDP in the early 1990s to below 50 percent in the 2010s, and the current account moved from deficits into persistent surpluses after the Asian financial crisis. At the same time household debt grew rapidly, and the sensitivity of consumption to interest rates came to depend strongly on household leverage [27]. Whether these developments are causally linked is one of the questions our cross-country design can address.",
      ],
    },
    {
      id: "literature",
      heading: "3. Related Literature",
      paragraphs: [
        "Our paper contributes to three strands of literature. The first concerns the saving behaviour of rich households. Dynan, Skinner and Zeldes {5} show that saving rates rise strongly with lifetime income in US household data, and Carroll {6} argues that the rich save for reasons — bequests, status, entrepreneurial investment — that are not captured by standard life-cycle models. Under the permanent income hypothesis [19], consumption depends on lifetime resources and the distribution of income matters little; but heterogeneous marginal propensities to consume, including among the wealthy hand-to-mouth [20], and the importance of household balance sheets for consumption [21] imply that redistribution affects aggregate spending.",
        "The second strand links inequality to aggregate demand and financial fragility. Rajan {10} argues that rising inequality in the United States led to political pressure for easier credit, which sustained consumption but contributed to the financial crisis. Kumhof, Rancière and Winant {11} formalise this mechanism, showing that higher top-income shares lead to more borrowing by lower-income households and higher crisis risk. Coibion et al. {12}, however, find that low-income households in high-inequality US regions borrowed less, not more, relative to those in low-inequality regions, and Bordo and Meissner {13} find little cross-country evidence that inequality predicts credit booms. Mian, Straub and Sufi {7} develop the notion of 'indebted demand': saving by the rich finances borrowing by the non-rich and the government, and the resulting debt burden depresses demand and the natural rate of interest. Eggertsson, Mehrotra and Robbins {9} provide a quantitative model of secular stagnation in which higher inequality is one of the forces lowering the natural rate. Stiglitz {26} emphasises the broader macroeconomic costs of inequality.",
        "The third strand studies the relationship between inequality and current-account balances. In the intertemporal approach [16], the current account reflects the gap between national saving and investment, and medium-term determinants include fiscal balances, demographics and financial development [15]. Behringer and van Treeck {14} find that rising top-income shares are associated with higher current-account balances, but that this effect is offset in countries where household borrowing rose. We build on this work by instrumenting inequality with tax changes, by distinguishing the consumption, investment and government components of demand, and by examining explicitly how the effects depend on household credit markets.",
      ],
    },
    {
      id: "framework",
      heading: "4. Conceptual Framework",
      paragraphs: [
        "Consider an open economy populated by two groups of households, 'top' and 'bottom', with the top group having a higher marginal propensity to save out of current income, either because of non-homothetic preferences over wealth or because of higher permanent income [5][6]. Aggregate private saving is a weighted average of the saving rates of the two groups, with weights equal to their income shares. An exogenous increase in the top share θ by one percentage point raises the aggregate saving rate by (s_top − s_bottom) × 0.01, holding interest rates and the group-specific saving rates fixed. With top-decile saving rates around 30 to 40 percent of income and saving rates of the remaining 90 percent around 5 to 10 percent, as estimated in household surveys for many advanced economies, this mechanical effect is about 0.25 to 0.35 percentage points of disposable income per point of top share.",
        "How the additional saving is absorbed depends on general-equilibrium adjustment. In a closed economy, the real interest rate must fall to raise investment or reduce saving; if it is constrained by the zero lower bound, output falls instead [8][9]. In an open economy with integrated capital markets, part of the excess saving flows abroad and the current-account balance rises [16]. The bottom group may also respond by borrowing more, as in Kumhof, Rancière and Winant {11}: if credit is readily available, the consumption of bottom households is partly maintained and the effect on aggregate consumption is smaller, but household debt rises. This yields three hypotheses. H1: an increase in the top-income share reduces the consumption share of GDP. H2: an increase in the top-income share raises the current-account balance, by more than the decline in the consumption share if investment also falls. H3: both effects are smaller, and the increase in household debt larger, in economies with deep household credit markets.",
      ],
    },
    {
      id: "data",
      heading: "5. Data",
      paragraphs: [
        "Our panel covers 36 economies over 1990–2022: 24 advanced economies and 12 emerging economies for which the World Inequality Database provides annual top-income shares based on tax and survey data, national accounts are consistently available, and top marginal tax rates can be documented for the whole period. The emerging economies are Argentina, Brazil, Chile, China, Colombia, India, Indonesia, Malaysia, Mexico, South Africa, Thailand and Turkey.",
      ],
      subsections: [
        {
          id: "data-inequality",
          heading: "5.1 Top-income shares and tax rates",
          paragraphs: [
            "Our main measure of inequality is the share of pre-tax national income received by the top 10 percent of adults, from the World Inequality Database [18]. The pre-tax concept, which includes pension and unemployment benefits but not other transfers, is the most comparable across countries and is closely related to the income on which top marginal tax rates are levied. We also use the top 1 percent share and the bottom 50 percent share in robustness checks. Top marginal tax rates are the combined central and subnational statutory rates on the highest bracket of earned income, compiled from OECD tax databases and national legislation. For emerging economies we use the rate applying in the capital region where subnational rates differ.",
            "Figure 1 shows the evolution of the average top-decile share in advanced and emerging economies. In both groups the share rose substantially, but the rise was steeper and started from a higher level in emerging economies. In advanced economies the increase was concentrated in the 1990s and 2000s and the share has been broadly stable since the global financial crisis, while in emerging economies it continued to rise until the mid-2010s.",
          ],
          figures: [
            {
              id: "fig-top10",
              caption: "Figure 1. Average top-decile pre-tax income share, advanced and emerging economies, 1990–2022",
              kind: "line",
              xLabels: ["1990", "1993", "1996", "1999", "2002", "2005", "2008", "2011", "2014", "2017", "2020", "2022"],
              yLabel: "Top 10% income share (%)",
              series: [
                { name: "Advanced economies (24)", values: [31.2, 31.9, 32.6, 33.4, 33.9, 34.4, 35.0, 34.8, 34.9, 35.1, 35.0, 35.2] },
                { name: "Emerging economies (12)", values: [37.8, 38.9, 40.1, 40.9, 41.5, 42.2, 42.8, 43.0, 43.4, 43.3, 43.1, 43.3] },
              ],
              note: "Unweighted averages of pre-tax national income shares of the top 10 percent of adults. World Inequality Database; balanced panel of 36 economies.",
            },
          ],
        },
        {
          id: "data-demand",
          heading: "5.2 Aggregate demand and financial structure",
          paragraphs: [
            "Our main outcomes are the shares of household final consumption expenditure, gross fixed capital formation and government consumption in GDP, and the current-account balance as a share of GDP, from OECD national accounts and the IMF World Economic Outlook. We also use household gross saving rates, household debt as a share of GDP from the BIS and the IMF Global Debt Database, and the real short-term interest rate. To capture the structure of the financial system, we measure the depth of household credit markets by the ratio of household credit to GDP in 1995, before most of the change in inequality, and classify countries as having deep or shallow household credit markets according to whether this ratio is above or below the sample median of 38 percent. As an alternative we use an index of mortgage-market development based on typical loan-to-value ratios, the availability of mortgage equity withdrawal and the prevalence of securitisation.",
            "Table 1 reports summary statistics. The average consumption share is 55.8 percent of GDP, with a standard deviation of 7.3 percentage points across country-years, and the average current-account balance is close to zero but with substantial dispersion. Five-year changes in the top-decile share have a standard deviation of 1.4 percentage points, and five-year changes in the top marginal tax rate a standard deviation of 4.9 percentage points; roughly one in four country-years falls within five years of a top-rate change of at least 5 percentage points.",
          ],
          table: {
            id: "tab-summary",
            caption: "Table 1. Summary statistics, 36 economies, 1990–2022",
            columns: ["Variable", "Mean", "Std. dev.", "Min", "Max"],
            rows: [
              ["Top 10% pre-tax income share (%)", "36.7", "6.8", "23.9", "57.4"],
              ["Five-year change in top 10% share (pp)", "0.71", "1.42", "−4.6", "6.3"],
              ["Top marginal income tax rate (%)", "45.8", "9.6", "15.0", "68.1"],
              ["Five-year change in top marginal tax rate (pp)", "−1.42", "4.87", "−25.0", "15.0"],
              ["Household consumption (% of GDP)", "55.8", "7.3", "34.2", "72.6"],
              ["Gross fixed capital formation (% of GDP)", "23.4", "5.1", "11.8", "45.0"],
              ["Government consumption (% of GDP)", "17.6", "3.9", "8.4", "27.9"],
              ["Current-account balance (% of GDP)", "0.4", "4.6", "−14.8", "15.9"],
              ["Household debt (% of GDP)", "51.2", "29.8", "2.1", "136.4"],
              ["Household credit, 1995 (% of GDP)", "39.6", "24.1", "1.8", "104.0"],
            ],
            note: "Country-year observations, 36 economies, 1990–2022 (1,188 observations; household debt available for 1,104). Top-income shares from the World Inequality Database; national accounts from the OECD and IMF; household debt from the BIS and IMF Global Debt Database.",
          },
        },
      ],
    },
    {
      id: "strategy",
      heading: "6. Empirical Strategy",
      paragraphs: [],
      subsections: [
        {
          id: "strategy-lp",
          heading: "6.1 Local projections",
          paragraphs: [
            "We estimate the dynamic effects of changes in inequality using local projections [22]. For each horizon h = 0, …, 5 we estimate y(i,t+h) − y(i,t−1) = β(h) · Δ5θ(i,t) + α(i) + δ(t) + X(i,t)′γ + ε(i,t+h), where y is an outcome such as the consumption share of GDP, Δ5θ(i,t) is the change in the top-decile share between t−5 and t, α(i) and δ(t) are country and year fixed effects, and X includes two lags of the outcome, two lags of real GDP growth, the change in the old-age dependency ratio, the change in the general government primary balance and the change in total tax revenue as a share of GDP. The year effects absorb global shocks, including the global financial cycle, commodity prices and the global decline in interest rates. Our headline coefficients are β(5), the cumulative change in each outcome over the five years following a one percentage point increase in the top share.",
          ],
        },
        {
          id: "strategy-iv",
          heading: "6.2 Instrument",
          paragraphs: [
            "Changes in the top-income share are endogenous: booms in asset prices, credit and financial-sector activity raise top incomes and also affect consumption and the current account directly. We therefore instrument Δ5θ(i,t) with the change in the top marginal income tax rate over the same five years, Δ5τ(i,t). The relevance of the instrument rests on the well-documented response of top incomes to top tax rates, which reflects behavioural responses of labour supply and effort, changes in the form and timing of reported income, and bargaining over compensation [3][4]. Roine, Vlachos and Waldenström {17} find that top tax rates are among the most robust determinants of top-income shares across countries.",
            "The exclusion restriction requires that top-rate changes affect consumption and the current account only through the distribution of pre-tax income, conditional on fixed effects and controls. The main threat is that top-rate cuts are part of broader fiscal packages that affect demand directly. We address this by controlling for changes in the primary balance and total tax revenue, so that the instrument captures changes in the progressivity of the tax system holding the overall fiscal stance fixed. A second threat is that top rates are cut in response to economic conditions, for instance during periods of weak growth. We include lags of growth and the outcome, test for pre-trends in outcomes before tax changes, and show that results are similar when we use only reforms classified on the basis of legislative records as motivated by long-run efficiency or ideological considerations rather than by the business cycle. Standard errors are clustered by country and, with 36 clusters, we also report wild cluster bootstrap p-values. With country fixed effects and lagged dependent variables, the Nickell bias is small given our 33-year time dimension [24]; we nonetheless report GMM estimates as a check [25].",
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
          id: "results-main",
          heading: "7.1 Consumption and the current account",
          paragraphs: [
            "Table 2 reports the main estimates at the five-year horizon. Column (1) reports the first stage: a 10 percentage point cut in the top marginal tax rate raises the top-decile share by 1.24 percentage points over five years, and the Kleibergen–Paap F statistic of 24.7 exceeds the conventional thresholds for weak instruments [23]. The magnitude is consistent with the elasticities of top incomes with respect to the net-of-tax rate reported in the literature [3][4]: the fall of about 9 percentage points in the average top rate since 1990 explains roughly a quarter of the 4.5 point increase in the average top-decile share.",
            "Columns (2) and (3) report OLS and IV estimates for the consumption share. The OLS coefficient is −0.17, and the IV coefficient is −0.28: a 1 percentage point increase in the top-decile income share reduces the consumption share of GDP by 0.28 percentage points over the subsequent five years. Columns (4) and (5) report the corresponding estimates for the current-account balance. The IV estimate implies that a 1 percentage point increase in the top-decile share raises the current-account balance by 0.41 percentage points of GDP, compared with an OLS estimate of 0.22. The difference between OLS and IV estimates is consistent with attenuation bias from measurement error in top shares, which are partly interpolated between tax years in some countries, and with the positive correlation between credit booms — which raise both top incomes and consumption, and lower the current account — and inequality.",
            "The magnitudes are economically significant. The average increase in the top-decile share of 4.5 percentage points between 1990 and 2022 would, on our estimates, have reduced the consumption share of GDP by about 1.3 percentage points and raised the current-account balance by about 1.8 percentage points, other things equal. For the emerging economies, where the top share rose by 5.5 points, the implied effects are correspondingly larger. The mechanical saving calculation in Section 4 implies an effect on private saving of 0.25 to 0.35 points of disposable income per point of top share, which is of the same order as our estimate for consumption.",
          ],
          table: {
            id: "tab-main",
            caption: "Table 2. Top-income shares, consumption and the current account: OLS and IV estimates at the five-year horizon",
            columns: ["", "(1) First stage", "(2) OLS", "(3) IV", "(4) OLS", "(5) IV"],
            rows: [
              ["Dependent variable", "Δ5 top 10% share", "Δ consumption share", "Δ consumption share", "Δ current account", "Δ current account"],
              ["Δ5 top 10% share", "", "−0.172***", "−0.281***", "0.218**", "0.412***"],
              ["", "", "(0.048)", "(0.087)", "(0.091)", "(0.136)"],
              ["Δ5 top marginal tax rate", "−0.124***", "", "", "", ""],
              ["", "(0.025)", "", "", "", ""],
              ["Country and year fixed effects", "Yes", "Yes", "Yes", "Yes", "Yes"],
              ["Fiscal and demographic controls", "Yes", "Yes", "Yes", "Yes", "Yes"],
              ["Kleibergen–Paap F", "24.7", "", "24.7", "", "24.7"],
              ["Wild bootstrap p-value", "0.000", "0.002", "0.004", "0.031", "0.006"],
              ["Observations", "1,008", "1,008", "1,008", "1,008", "1,008"],
            ],
            note: "Dependent variables in columns (2)–(5) are changes in the consumption share of GDP and in the current-account balance (percent of GDP) between t−1 and t+5. Δ5 denotes the change between t−5 and t. Controls: two lags of the outcome and of real GDP growth, changes in the old-age dependency ratio, the primary balance and total tax revenue (percent of GDP). Standard errors clustered by country in parentheses. *** p < 0.01, ** p < 0.05, * p < 0.10.",
          },
        },
        {
          id: "results-dynamics",
          heading: "7.2 Dynamics",
          paragraphs: [
            "Figure 2 plots the IV local-projection estimates for the consumption share and the current-account balance at horizons 0 to 5. Both responses build gradually. The consumption share falls by 0.06 percentage points in the year of the increase in inequality and by 0.28 points after five years; the current-account balance rises by 0.08 points on impact and by 0.41 points after five years. The gradual response is consistent with sluggish adjustment of consumption habits and with the fact that changes in top incomes take time to be reflected in the wealth and saving decisions of top households. The confidence intervals exclude zero from the second year onwards for consumption and from the second year onwards for the current account.",
          ],
          figures: [
            {
              id: "fig-irf",
              caption: "Figure 2. Dynamic responses to a 1 percentage point increase in the top-decile share (IV local projections)",
              kind: "line",
              xLabels: ["h = 0", "h = 1", "h = 2", "h = 3", "h = 4", "h = 5"],
              yLabel: "Change (percentage points of GDP)",
              series: [
                {
                  name: "Consumption share",
                  values: [-0.06, -0.11, -0.16, -0.21, -0.25, -0.28],
                  lower: [-0.15, -0.23, -0.30, -0.37, -0.43, -0.45],
                  upper: [0.03, 0.01, -0.02, -0.05, -0.07, -0.11],
                },
                {
                  name: "Current-account balance",
                  values: [0.08, 0.15, 0.23, 0.30, 0.36, 0.41],
                  lower: [-0.07, -0.04, 0.01, 0.05, 0.09, 0.14],
                  upper: [0.23, 0.34, 0.45, 0.55, 0.63, 0.68],
                },
              ],
              note: "Cumulative responses from t−1 to t+h estimated by IV local projections, with the five-year change in the top marginal tax rate as instrument. Bands show 90 percent confidence intervals based on standard errors clustered by country.",
            },
          ],
        },
        {
          id: "results-components",
          heading: "7.3 Components of demand",
          paragraphs: [
            "Why does the current account rise by more than consumption falls? Table 3 decomposes the response of domestic demand at the five-year horizon. In addition to the fall of 0.28 points in household consumption, gross fixed capital formation falls by 0.11 points of GDP and government consumption by 0.02 points, so that the total decline in domestic absorption, 0.41 points, matches the rise in the current-account balance. The fall in investment is concentrated in residential investment and is consistent with an accelerator mechanism in which weaker consumer demand reduces the incentive to invest. National saving rises by 0.30 points, driven by household saving, and the real short-term interest rate falls by 0.12 percentage points, suggesting that part of the adjustment occurs through lower interest rates but that this is insufficient to restore domestic demand, in line with secular-stagnation models [8][9].",
          ],
          table: {
            id: "tab-components",
            caption: "Table 3. Decomposition of the demand response at the five-year horizon (IV estimates)",
            columns: ["Outcome (change, t−1 to t+5)", "Coefficient", "Std. error", "Wild bootstrap p-value", "Observations"],
            rows: [
              ["Household consumption (% of GDP)", "−0.281***", "(0.087)", "0.004", "1,008"],
              ["Gross fixed capital formation (% of GDP)", "−0.108**", "(0.049)", "0.038", "1,008"],
              ["of which residential investment", "−0.074**", "(0.033)", "0.041", "864"],
              ["Government consumption (% of GDP)", "−0.021", "(0.031)", "0.512", "1,008"],
              ["Domestic absorption (% of GDP)", "−0.410***", "(0.132)", "0.006", "1,008"],
              ["Current-account balance (% of GDP)", "0.412***", "(0.136)", "0.006", "1,008"],
              ["Gross national saving (% of GDP)", "0.304***", "(0.104)", "0.007", "1,008"],
              ["Real short-term interest rate (pp)", "−0.118*", "(0.064)", "0.082", "996"],
              ["Real GDP (log × 100)", "−0.192", "(0.161)", "0.248", "1,008"],
            ],
            note: "IV estimates of the response of each outcome to a 1 percentage point increase in the top-decile share, with the specification of Table 2. Domestic absorption is the sum of household consumption, gross capital formation and government consumption; changes in inventories and statistical discrepancies are small and are omitted. *** p < 0.01, ** p < 0.05, * p < 0.10.",
          },
        },
      ],
    },
    {
      id: "mechanisms",
      heading: "8. Mechanisms and Heterogeneity",
      paragraphs: [],
      subsections: [
        {
          id: "mechanisms-finance",
          heading: "8.1 Financial-system structure",
          paragraphs: [
            "Table 4 examines whether the effects depend on the structure of the financial system. We split the sample according to the depth of household credit markets in 1995. In economies with deep household credit markets, a 1 percentage point increase in the top-decile share reduces the consumption share by only 0.12 percentage points and raises the current-account balance by 0.17 points, and neither estimate is statistically significant. In economies with shallow household credit markets, the corresponding estimates are −0.43 and 0.63, both highly significant. The differences between the groups are significant at the 5 percent level. The pattern is similar when we use the index of mortgage-market development, and when we interact the change in top shares with continuous measures of credit depth.",
            "The reason for the weaker demand effects in deep-credit economies becomes clear when we examine household debt. In these economies, a 1 percentage point increase in the top-decile share raises household debt by 2.9 percentage points of GDP over five years, compared with 0.6 points in shallow-credit economies. This is consistent with the mechanism of Rajan {10} and Kumhof, Rancière and Winant {11}, in which credit allows lower-income households to maintain consumption as their income share falls, and with the 'indebted demand' view of Mian, Straub and Sufi {7}, in which the saving of the rich is recycled into household debt. It sits less easily with the household-level evidence of Coibion et al. {12}, although that evidence concerns the cross-section of regions within a country rather than aggregate credit supply across countries. The offset is temporary in an important sense: the accumulation of debt raises future debt service and may itself depress demand later [7][21], and it is associated with greater financial fragility [11], although we find no significant relationship between inequality-induced debt and subsequent crises, consistent with Bordo and Meissner {13}.",
          ],
          table: {
            id: "tab-hetero",
            caption: "Table 4. Heterogeneity by financial-system structure (IV estimates, five-year horizon)",
            columns: ["Outcome", "Deep household credit", "Shallow household credit", "Difference (p-value)", "First-stage F (deep / shallow)"],
            rows: [
              ["Consumption share", "−0.118 (0.094)", "−0.427*** (0.121)", "0.032", "15.8 / 13.1"],
              ["Current-account balance", "0.174 (0.152)", "0.628*** (0.189)", "0.041", "15.8 / 13.1"],
              ["Household debt (% of GDP)", "2.86*** (0.82)", "0.61 (0.47)", "0.012", "15.8 / 13.1"],
              ["Household saving rate", "0.11 (0.13)", "0.48*** (0.15)", "0.048", "15.4 / 12.7"],
              ["Gross fixed capital formation", "−0.072 (0.066)", "−0.139** (0.064)", "0.452", "15.8 / 13.1"],
              ["Countries", "18", "18", "", ""],
            ],
            note: "Countries are classified by household credit as a share of GDP in 1995 relative to the sample median (38 percent). Each cell reports the IV coefficient on the five-year change in the top-decile share with the specification of Table 2; standard errors clustered by country in parentheses. Differences are tested in a pooled regression with interactions. *** p < 0.01, ** p < 0.05, * p < 0.10.",
          },
        },
        {
          id: "mechanisms-saving",
          heading: "8.2 Saving, openness and other dimensions",
          paragraphs: [
            "Table 5 examines additional sources of heterogeneity and channels. Consistent with the saving channel, the household saving rate rises by 0.31 percentage points of disposable income per point of top-decile share, and the effect is larger where top incomes consist to a greater extent of capital income and business profits, which are typically saved at high rates [6]. The current-account response is larger in more financially open economies, where excess saving can flow abroad more easily, and smaller in economies whose currencies serve as international reserve or funding currencies, which tend to absorb rather than export global saving. The consumption response is somewhat larger in advanced than in emerging economies, while the current-account response is larger in emerging economies, consistent with lower investment responsiveness and greater accumulation of foreign reserves in the latter.",
            "We also examine whether the effects reflect the rise in the top share specifically or a broader shift in income distribution. Using the top 1 percent share instead of the top 10 percent share gives larger coefficients per percentage point, as expected if saving rates rise steeply at the very top. Using the bottom 50 percent share gives coefficients of the opposite sign and similar magnitude, so that a shift of income from the bottom half to the top decile has effects of similar size whichever end of the distribution is used to measure it. These patterns are consistent with heterogeneous marginal propensities to consume across the distribution [5][20].",
          ],
          table: {
            id: "tab-channels",
            caption: "Table 5. Saving channel and further heterogeneity (IV estimates, five-year horizon)",
            columns: ["Specification", "Consumption share", "Current-account balance", "Household saving rate", "First-stage F"],
            rows: [
              ["Baseline (Table 2)", "−0.281***", "0.412***", "0.312***", "24.7"],
              ["High capital-income share at top", "−0.352***", "0.497***", "0.408***", "12.9"],
              ["Low capital-income share at top", "−0.203**", "0.318**", "0.221**", "11.6"],
              ["High financial openness", "−0.264***", "0.538***", "0.297***", "13.4"],
              ["Low financial openness", "−0.301***", "0.271*", "0.329***", "11.2"],
              ["Advanced economies", "−0.307***", "0.356***", "0.335***", "19.8"],
              ["Emerging economies", "−0.229**", "0.502**", "0.271**", "8.9"],
              ["Top 1% share instead of top 10%", "−0.463***", "0.688***", "0.519***", "21.3"],
              ["Bottom 50% share instead of top 10%", "0.297***", "−0.426***", "−0.331***", "17.6"],
            ],
            note: "IV estimates of five-year responses per percentage point of the inequality measure. Subsamples are split at the median of the top-decile share of capital income (from distributional national accounts) and of the Chinn–Ito index of financial openness in 1995. The household saving rate is measured as a share of household disposable income and is available for 31 economies. *** p < 0.01, ** p < 0.05, * p < 0.10.",
          },
        },
      ],
    },
    {
      id: "robustness",
      heading: "9. Robustness",
      paragraphs: [
        "Table 6 reports robustness checks. The estimates are similar when we use only legislated top-rate changes classified as motivated by long-run considerations, which excludes reforms explicitly justified by cyclical conditions or fiscal consolidation; when we add controls for the change in the corporate income tax rate and the top tax rate on dividends, which might affect saving directly; and when we add country-specific linear trends. They are also similar when we exclude the global financial crisis years 2008–2009 and the pandemic years 2020–2022, when we exclude China, whose large current-account surplus and high saving might drive the results, and when we exclude the United States, whose role as a reserve-currency issuer makes it an outlier in the current-account regressions. GMM estimates in the style of Arellano and Bond {25}, which address the Nickell bias [24], are close to the baseline.",
        "Placebo tests support the identifying assumptions. Future changes in top marginal tax rates do not predict current changes in the consumption share or the current account, which indicates that tax changes do not respond to anticipated demand conditions. The instrument does not predict changes in the consumption share in the five years before the tax change. And top-rate changes have no significant effect on the share of income going to the 50th to 90th percentiles, which suggests that they shift income towards the top rather than affecting the distribution more broadly. Finally, using non-overlapping five-year periods instead of annual local projections gives a consumption coefficient of −0.30 and a current-account coefficient of 0.44, very close to our baseline.",
      ],
      table: {
        id: "tab-robustness",
        caption: "Table 6. Robustness checks (IV estimates, five-year horizon)",
        columns: ["Specification", "Consumption share", "Current-account balance", "First-stage F", "Observations"],
        rows: [
          ["Baseline (Table 2)", "−0.281***", "0.412***", "24.7", "1,008"],
          ["Only long-run motivated tax reforms", "−0.296***", "0.437***", "18.2", "1,008"],
          ["Controls for corporate and dividend tax rates", "−0.268***", "0.391***", "23.5", "1,008"],
          ["Country-specific linear trends", "−0.254***", "0.382**", "20.9", "1,008"],
          ["Excluding 2008–2009 and 2020–2022", "−0.289***", "0.421***", "23.1", "828"],
          ["Excluding China", "−0.266***", "0.371***", "24.0", "980"],
          ["Excluding the United States", "−0.279***", "0.418***", "24.3", "980"],
          ["System GMM", "−0.262***", "0.396***", "", "1,008"],
          ["Non-overlapping five-year periods", "−0.302***", "0.443***", "16.4", "216"],
          ["Placebo: future tax change (t+1 to t+5)", "−0.021", "0.034", "", "864"],
          ["Placebo: pre-period outcome change (t−6 to t−1)", "0.018", "−0.029", "24.7", "864"],
        ],
        note: "Each row reports IV estimates of five-year responses per percentage point of the top-decile share with the stated modification. Placebo rows report coefficients on the instrument (scaled to be comparable). Standard errors clustered by country. *** p < 0.01, ** p < 0.05, * p < 0.10.",
      },
    },
    {
      id: "discussion",
      heading: "10. Discussion and Policy Implications",
      paragraphs: [
        "Our results have three implications. First, the distribution of income matters for aggregate demand. A sustained rise in top-income shares weakens household consumption and investment and, in open economies, raises the current-account balance. Part of the global rise in saving and decline in real interest rates over recent decades may therefore reflect the redistribution of income towards high-saving households, as emphasised in the secular-stagnation literature [7][8][9]. Macroeconomic policy frameworks that treat the distribution of income as irrelevant to demand may underestimate the persistence of shortfalls in demand.",
        "Second, the financial system shapes how inequality affects demand. Deep household credit markets allow consumption to be maintained as inequality rises, but at the cost of rising household debt. This trade-off was visible in the run-up to the global financial crisis, and our results suggest that it is a general feature of economies with well-developed household credit. Policies that rely on credit expansion to support demand in the face of rising inequality may therefore merely postpone the demand shortfall and increase financial vulnerability. Macroprudential limits on household leverage, while desirable for financial stability, may in turn make the demand effects of inequality more visible.",
        "Third, tax progressivity has macroeconomic as well as distributional consequences. Because top marginal tax rates affect top-income shares, cuts in top rates may — through their effect on the distribution of income — reduce consumption and raise the current-account balance. Conversely, more progressive taxation may support domestic demand and help reduce external imbalances in surplus countries. These effects are modest relative to the overall variation in demand, but they are persistent, and they should be weighed alongside the efficiency considerations that dominate the public-finance literature on top tax rates [3][4]. For economies such as Korea, which combine a rising top-income share, a falling consumption share and a persistent current-account surplus, our results suggest that the distribution of income deserves attention in policies aimed at rebalancing growth towards domestic demand.",
      ],
    },
    {
      id: "conclusion",
      heading: "11. Conclusion",
      paragraphs: [
        "This paper has reassessed the relationship between income inequality and aggregate demand in a panel of 36 advanced and emerging economies over 1990–2022, using changes in top marginal tax rates as an instrument for top-income shares. We find that a 1 percentage point increase in the top-decile income share reduces the consumption share of GDP by 0.28 percentage points over the subsequent five years and raises the current-account balance by 0.41 percentage points. The current-account response reflects declines in both consumption and investment, and the effects build gradually over time. They are much weaker in economies with deep household credit markets, where household debt rises instead. These findings are consistent with secular-stagnation channels linking inequality to weak aggregate demand, moderated by the structure of the financial system.",
        "Our analysis leaves several questions open. Annual top-income shares are measured with error, especially in emerging economies, and better distributional national accounts would allow a sharper analysis of the saving behaviour of different income groups. The general-equilibrium effects of inequality on the world real interest rate cannot be identified from cross-country variation alone and require a global model. Finally, the long-run consequences of the household debt that offsets the demand effects of inequality in deep-credit economies — for future demand, financial stability and the effectiveness of monetary policy — deserve further study.",
      ],
    },
    {
      id: "appendix",
      heading: "Appendix A. Data Construction",
      paragraphs: [
        "Top-income shares. We use the World Inequality Database series for pre-tax national income of equal-split adults. For country-years in which the series is interpolated between benchmark years, we retain the interpolated values in the baseline but show in the robustness checks that results are similar when we restrict the sample to years with direct tax or survey observations. Shares are expressed in percent of national income.",
        "Top marginal tax rates. The top rate is the combined statutory marginal rate on earned income at the highest bracket, including central and subnational income taxes and surtaxes but excluding social security contributions, which are typically capped. For countries with dual income tax systems we use the rate on labour income. Reforms are dated by the year in which the new rate first applied to income. We classify the motivation of each reform with a change of at least 3 percentage points using legislative records and budget documents, distinguishing long-run motives (efficiency, simplification, competitiveness, ideology) from cyclical motives (stimulus, consolidation).",
        "National accounts and financial data. Consumption, investment and government consumption shares are computed from current-price national accounts. The current-account balance is from the IMF Balance of Payments Statistics. Household debt is total credit to households from the BIS long series where available and from the IMF Global Debt Database otherwise. Household credit depth in 1995 uses the earliest available year between 1993 and 1997 for six countries.",
      ],
    },
  ],
};
