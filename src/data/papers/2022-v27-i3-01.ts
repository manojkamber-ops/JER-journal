// Vol. 27, No. 3 (July 2022) — full research paper (sample content).
import type { PaperSpec } from "../paper-spec";

export const paper: PaperSpec = {
  id: "2022-v27-i3-01",
  title: "Energy Price Shocks and Household Inflation Expectations: Evidence from Korea",
  authors: [{ name: "Sungho Park", corresponding: true }, { name: "Jiwon Lee" }],
  abstract:
    "Households form inflation expectations partly from the prices they observe most frequently. We study how gasoline prices affect Korean households' inflation expectations using microdata from the Bank of Korea's consumer survey for 2008–2022 matched to regional fuel prices. Exploiting variation in regional pump prices driven by global oil-price shocks and differences in local distribution margins, we find that a 10 percent increase in gasoline prices raises one-year-ahead expected inflation by 0.18 percentage points. The effect is larger for car owners, lower-income and less-educated respondents, and it is roughly symmetric for price increases and decreases. The November 2021 cut in fuel taxes lowered expected inflation by about 0.12 percentage points in the following months. Respondents whose expectations rose reported weaker intentions to purchase durable goods. The results suggest that energy prices are an important channel through which supply shocks can unanchor expectations, and that temporary tax measures can partly offset this effect.",
  keywords: ["Inflation expectations", "Energy prices", "Household surveys", "Fuel taxes", "Monetary policy"],
  jelCodes: ["E31", "D84", "Q43", "E52"],
  pages: "241–270",
  volume: 27,
  issue: 3,
  year: 2022,
  received: "2021-12-06",
  accepted: "2022-05-09",
  published: "2022-07-15",
  publishedOnline: "2022-07-04",
  citations: 23,
  downloads: 2830,
  pdfSize: "1.57 MB",
  type: "Research Article",
  acknowledgments:
    "We thank seminar participants at Hanyang University and Korea University, two anonymous referees and the handling editor for helpful comments. The views expressed are those of the authors and do not represent those of the Bank of Korea.",
  dataAvailability:
    "Consumer survey microdata are available from the Bank of Korea on application; regional fuel prices are public. Code is available from the corresponding author.",
  refs: [
    /* 1 */ "Coibion, O., & Gorodnichenko, Y. (2015). Is the Phillips curve alive and well after all? Inflation expectations and the missing disinflation. American Economic Journal: Macroeconomics, 7(1), 197–232.",
    /* 2 */ "Binder, C. C. (2018). Inflation expectations and the price at the pump. Journal of Macroeconomics, 58, 1–18.",
    /* 3 */ "D'Acunto, F., Malmendier, U., Ospina, J., & Weber, M. (2021). Exposure to grocery prices and inflation expectations. Journal of Political Economy, 129(5), 1615–1639.",
    /* 4 */ "Malmendier, U., & Nagel, S. (2016). Learning from inflation experiences. Quarterly Journal of Economics, 131(1), 53–87.",
    /* 5 */ "Kilian, L. (2009). Not all oil price shocks are alike: Disentangling demand and supply shocks in the crude oil market. American Economic Review, 99(3), 1053–1069.",
    /* 6 */ "Hamilton, J. D. (2003). What is an oil shock? Journal of Econometrics, 113(2), 363–398.",
    /* 7 */ { jer: "2021-v26-i1-02" },
    /* 8 */ "Coibion, O., Gorodnichenko, Y., & Kumar, S. (2018). How do firms form their expectations? New survey evidence. American Economic Review, 108(9), 2671–2713.",
    /* 9 */ "Armantier, O., Nelson, S., Topa, G., van der Klaauw, W., & Zafar, B. (2016). The price is right: Updating inflation expectations in a randomized price information experiment. Review of Economics and Statistics, 98(3), 503–523.",
    /* 10 */ "Carroll, C. D. (2003). Macroeconomic expectations of households and professional forecasters. Quarterly Journal of Economics, 118(1), 269–298.",
    /* 11 */ "Mankiw, N. G., & Reis, R. (2002). Sticky information versus sticky prices: A proposal to replace the New Keynesian Phillips curve. Quarterly Journal of Economics, 117(4), 1295–1328.",
    /* 12 */ "Sims, C. A. (2003). Implications of rational inattention. Journal of Monetary Economics, 50(3), 665–690.",
    /* 13 */ "Coibion, O., & Gorodnichenko, Y. (2012). What can survey forecasts tell us about information rigidities? Journal of Political Economy, 120(1), 116–159.",
    /* 14 */ "Bachmann, R., Berg, T. O., & Sims, E. R. (2015). Inflation expectations and readiness to spend: Cross-sectional evidence. American Economic Journal: Economic Policy, 7(1), 1–35.",
    /* 15 */ "D'Acunto, F., Hoang, D., & Weber, M. (2022). Managing households' expectations with unconventional policies. Review of Financial Studies, 35(4), 1597–1642.",
    /* 16 */ "Bernanke, B. S., Gertler, M., & Watson, M. (1997). Systematic monetary policy and the effects of oil price shocks. Brookings Papers on Economic Activity, 1997(1), 91–157.",
    /* 17 */ "Blanchard, O. J., & Galí, J. (2010). The macroeconomic effects of oil price shocks: Why are the 2000s so different from the 1970s? In J. Galí & M. Gertler (Eds.), International Dimensions of Monetary Policy (pp. 373–421). Chicago: University of Chicago Press.",
    /* 18 */ "Edelstein, P., & Kilian, L. (2009). How sensitive are consumer expenditures to retail energy prices? Journal of Monetary Economics, 56(6), 766–779.",
    /* 19 */ "Bruine de Bruin, W., van der Klaauw, W., Downs, J. S., Fischhoff, B., Topa, G., & Armantier, O. (2010). Expectations of inflation: The role of demographic variables, expectation formation, and financial literacy. Journal of Consumer Affairs, 44(2), 381–402.",
    /* 20 */ "Souleles, N. S. (2004). Expectations, heterogeneous forecast errors, and consumption: Micro evidence from the Michigan consumer sentiment surveys. Journal of Money, Credit and Banking, 36(1), 39–72.",
    /* 21 */ "Cavallo, A., Cruces, G., & Perez-Truglia, R. (2017). Inflation expectations, learning, and supermarket prices: Evidence from survey experiments. American Economic Journal: Macroeconomics, 9(3), 1–35.",
    /* 22 */ "Kumar, S., Afrouzi, H., Coibion, O., & Gorodnichenko, Y. (2015). Inflation targeting does not anchor inflation expectations: Evidence from firms in New Zealand. Brookings Papers on Economic Activity, 2015(2), 151–225.",
    /* 23 */ "Coibion, O., Gorodnichenko, Y., & Weber, M. (2022). Monetary policy communications and their effects on household inflation expectations. Journal of Political Economy, 130(6), 1537–1584.",
    /* 24 */ "Angrist, J. D., & Pischke, J.-S. (2009). Mostly Harmless Econometrics: An Empiricist's Companion. Princeton: Princeton University Press.",
    /* 25 */ "Stock, J. H., & Yogo, M. (2005). Testing for weak instruments in linear IV regression. In D. W. K. Andrews & J. H. Stock (Eds.), Identification and Inference for Econometric Models: Essays in Honor of Thomas Rothenberg (pp. 80–108). Cambridge: Cambridge University Press.",
    /* 26 */ "Jordà, Ò. (2005). Estimation and inference of impulse responses by local projections. American Economic Review, 95(1), 161–182.",
    /* 27 */ "Borenstein, S., Cameron, A. C., & Gilbert, R. (1997). Do gasoline prices respond asymmetrically to crude oil price changes? Quarterly Journal of Economics, 112(1), 305–339.",
    /* 28 */ "Wong, B. (2015). Do inflation expectations propel consumer demand? Evidence from the Michigan survey. Journal of Money, Credit and Banking, 47(8), 1673–1689.",
    /* 29 */ "Ehrmann, M., Pfajfar, D., & Santoro, E. (2017). Consumers' attitudes and their inflation expectations. International Journal of Central Banking, 13(1), 225–259.",
  ],
  body: [
    {
      id: "introduction",
      heading: "1. Introduction",
      paragraphs: [
        "Household inflation expectations matter for spending, saving and wage-setting, and they are a central input into monetary policy. Their apparent stability during the 2010s was offered as one explanation for the absence of a sharp disinflation after the global financial crisis [1], and central banks devote considerable effort to keeping them anchored [22][23]. Yet households do not form expectations by reading official statistics. A growing body of evidence shows that the prices they encounter most frequently — at the petrol station and in the grocery store — have an outsized influence on what they believe about aggregate inflation [2][3][21], as do their lifetime experiences of inflation [4].",
        "Gasoline is the clearest example of a salient price. It is purchased frequently, posted in large numerals at every station and reported prominently in the news, and it moves sharply with world oil prices. If households extrapolate from pump prices to the overall price level, energy supply shocks — which monetary policy is usually advised to look through [16][17] — may feed into expectations and, through them, into wages and prices. The surge in energy prices during 2021 and 2022 has made this question pressing for central banks everywhere.",
        "Korea offers a useful setting in which to study it. The country imports nearly all its crude oil, so domestic fuel prices closely track world markets, and the Bank of Korea's consumer survey interviews about 2,500 households every month, asking each for a quantitative inflation expectation alongside detailed demographic information. We match survey microdata for 2008–2022 to provincial gasoline prices and ask how much pump prices move expectations, for whom, and whether temporary fuel-tax cuts — such as the 20 percent cut introduced in November 2021 — dampen the effect.",
        "Identifying the causal effect of gasoline prices is not straightforward, because local prices may respond to local demand conditions that also shape expectations. We therefore exploit variation in regional pump prices driven by global oil-price shocks interacted with persistent differences in local distribution margins and in the speed with which world prices pass through to each province. Using this instrument, we find that a 10 percent increase in gasoline prices raises one-year-ahead expected inflation by 0.18 percentage points. The effect is 0.24 points for car owners and 0.07 points for households without a car, and it is about 50 percent larger for respondents without a college degree and for those in the bottom income tercile than for their counterparts. Increases and decreases have effects of similar magnitude.",
        "The November 2021 fuel-tax cut provides a direct test of whether policy can reverse this channel. Comparing car owners, who experienced the tax cut at the pump, with households without a car, we find that expected inflation of car owners fell by about 0.12 percentage points relative to non-owners in the following months. Finally, we show that higher expectations induced by gasoline prices are associated with weaker, not stronger, intentions to buy durable goods: respondents whose expectations rose by more than one percentage point were 4 percentage points less likely to report plans to purchase durables. Households appear to read higher fuel prices as a loss of real income rather than as a reason to bring purchases forward.",
        "Section 2 describes Korean fuel pricing and the 2021 tax cut. Section 3 reviews related literature and Section 4 sets out a simple framework. Section 5 describes the data and Section 6 the empirical strategy. Section 7 presents the main results, Section 8 examines mechanisms, Section 9 reports robustness checks, Section 10 discusses implications and Section 11 concludes.",
      ],
    },
    {
      id: "background",
      heading: "2. Fuel Prices and Fuel Taxes in Korea",
      paragraphs: [
        "Korea imports virtually all of its crude oil, mostly from the Middle East, and refines it domestically. Four refiners supply about 11,000 retail stations, which set prices freely; since 2008 the Korea National Oil Corporation has published daily station-level prices through its online price-information service, and average prices by province are widely reported. Retail gasoline prices are dominated by taxes: the transport, energy and environment tax, the education tax, the driving tax and value added tax together accounted for roughly half of the pump price over our sample period.",
        "Because taxes are largely levied per litre, percentage changes in pump prices are smaller than percentage changes in crude prices, but large oil shocks are nonetheless highly visible. The national average price of regular gasoline exceeded KRW 1,900 per litre during the 2008 and 2011–2012 oil-price peaks, fell to around KRW 1,350 in early 2016 and rose again above KRW 1,800 in late 2021. Retail prices also differ persistently across provinces, reflecting distance from refineries and pipeline terminals, land costs and local competition among stations. Prices in Seoul are typically 4–6 percent above the national average, and prices in provinces served by the national oil pipeline adjust more rapidly to changes in refinery gate prices than those supplied mainly by tanker trucks.",
        "In response to rising energy prices, the government cut fuel taxes by 20 percent for six months from 12 November 2021, lowering the pump price of gasoline by up to KRW 164 per litre. The cut was announced in late October and implemented with little delay at most stations. It was subsequently extended and, in May 2022, enlarged; our analysis covers the period up to April 2022. Because the cut was a nationwide policy, we identify its effect on expectations by comparing households that purchase fuel regularly with those that do not, as described in Section 6.",
      ],
    },
    {
      id: "literature",
      heading: "3. Related Literature",
      paragraphs: [
        "Our paper contributes to a literature on how households form inflation expectations. Household expectations are systematically higher and more dispersed than those of professional forecasters, and they update only slowly towards professional forecasts [10][13], consistent with models of sticky information and rational inattention [11][12]. Expectations vary with demographic characteristics, financial literacy and attitudes towards the economy [19][29], and firms' expectations show similar features [8][22]. Information provided in survey experiments moves expectations substantially, which suggests that many households are poorly informed about aggregate inflation [9][21][23].",
        "A second strand asks which prices households use. For the United States, Coibion and Gorodnichenko {1} attribute the rise in household expectations after 2009 to the rebound in oil prices, and Binder {2} shows that gasoline prices strongly influence expectations, particularly among respondents who pay attention to them. D'Acunto et al. {3} use scanner data to show that the prices of goods in households' own grocery baskets shape their beliefs, with frequently purchased items mattering most, while Malmendier and Nagel {4} show that lifetime inflation experiences shape expectations. We complement these studies by using exogenous regional variation in pump prices, by studying a small open economy with a large and well-measured survey, and by evaluating a fuel-tax cut.",
        "A third strand studies oil-price shocks. Their macroeconomic effects depend on whether they originate in supply or demand [5] and are concentrated in large increases relative to recent experience [6]. Systematic monetary policy responses accounted for much of the output cost of past oil shocks [16], and the smaller effects of oil shocks in the 2000s have been attributed in part to better-anchored expectations [17]. Consumer spending responds to energy prices mainly through discretionary income [18]. Pump prices themselves respond more quickly to increases than to decreases in crude prices [27], which raises the question of whether expectations respond asymmetrically as well.",
        "Finally, we relate to work on whether higher expected inflation stimulates spending. Euler-equation logic suggests that higher expected inflation lowers real interest rates and brings purchases forward, but the evidence is mixed: some studies find a positive relationship between expectations and readiness to buy [28], others a weak or negative one [14][20]. D'Acunto, Hoang and Weber {15} show that an announced increase in German value added tax raised households' inflation expectations and their willingness to buy durables. Our results suggest that when higher expectations stem from energy prices, households perceive them as an income loss, which helps reconcile these findings. Our study also connects to evidence in this journal that Korean households' spending responds to the cash-flow effects of monetary policy [7].",
      ],
    },
    {
      id: "framework",
      heading: "4. Conceptual Framework",
      paragraphs: [
        "Consider a household that forms an expectation of aggregate inflation by combining a prior with noisy signals, in the spirit of models of costly information acquisition [11][12]. One signal is the household's own observation of prices it pays. Because gasoline is purchased frequently and its price is highly visible, the household places a relatively large weight on gasoline price changes even though gasoline accounts for only about 3 percent of the consumer price index. The weight is larger for households that buy fuel regularly and for those with fewer alternative sources of information about aggregate inflation, such as financial news or professional forecasts.",
        "This simple framework yields four hypotheses. H1: an increase in local gasoline prices raises households' expected inflation by more than its mechanical contribution to measured inflation would justify. H2: the effect is larger for car owners, who observe fuel prices directly, and for lower-income and less-educated households, who rely more on personal shopping experience [3][19]. H3: if households weigh salient signals symmetrically, decreases in gasoline prices lower expectations by roughly as much as increases raise them; if attention is heightened by price increases, as is often suggested, the response would be asymmetric. H4: a tax cut that lowers pump prices lowers expectations among households that experience it.",
        "The framework is silent on how expectations affect behaviour. If households interpret higher fuel prices as a signal of higher aggregate inflation with unchanged nominal income growth, they expect lower real income, which would reduce planned spending on durables. If instead they focus on lower real interest rates, they would bring purchases forward. We test which interpretation dominates in Section 8.",
        "The framework also clarifies why the response to gasoline prices need not be irrational. If households have little information about aggregate inflation and gasoline prices are positively correlated with headline inflation, as they have been historically because energy prices feed into transport and production costs, then placing some weight on pump prices is a reasonable inference. The question is whether the weight is excessive. A benchmark is the coefficient from a regression of subsequent headline inflation on gasoline price changes; in Korea over 2000–2021, a 10 percent rise in gasoline prices predicted an increase in headline inflation over the following year of about 0.06 percentage points, a third of our estimated effect on expectations. Households therefore appear to overweight gasoline prices relative to their predictive content, consistent with salience.",
      ],
    },
    {
      id: "data",
      heading: "5. Data",
      paragraphs: [],
      subsections: [
        {
          id: "data-survey",
          heading: "5.1 The Consumer Survey",
          paragraphs: [
            "The Bank of Korea's consumer survey interviews about 2,500 households in urban areas each month. Respondents report their expectation of consumer price inflation over the next twelve months, together with perceptions of past inflation, assessments of household finances, and plans to purchase durable goods, housing and other major items. The survey records the respondent's age, sex, education, household income bracket, occupation and region of residence; from 2008 onwards it also records whether the household owns a car. A subset of households is interviewed in consecutive months, which we use to measure within-household changes in expectations in Section 8.",
            "Our sample covers January 2008 to April 2022 and contains about 418,000 respondent-months. We trim expected inflation at the 1st and 99th percentiles to limit the influence of implausible responses. Mean expected inflation is 2.61 percent with a standard deviation of 1.18 percentage points, well above realised inflation, which averaged 1.9 percent over the period — a pattern common to household surveys in many countries [10][19].",
          ],
        },
        {
          id: "data-prices",
          heading: "5.2 Fuel Prices and Other Variables",
          paragraphs: [
            "We match each respondent to the average retail price of regular gasoline in their province in the survey month, computed from daily station-level prices published by the Korea National Oil Corporation. The average price over the sample is KRW 1,684 per litre, with a standard deviation of KRW 183 across months and provinces. We also obtain the Dubai crude oil price in won, provincial consumer price inflation, provincial unemployment rates and housing price indices, which we use as controls.",
            "Table 1 reports descriptive statistics. Sixty-eight percent of respondents own a car and 42 percent are college graduates. Car owners are younger and have higher incomes on average, and their expected inflation is slightly higher than that of non-owners. About 14 percent of respondents report plans to purchase a durable good in the next six months.",
          ],
          tables: [
            {
              id: "table-1",
              caption: "Table 1. Descriptive statistics, January 2008–April 2022",
              columns: ["Variable", "All", "Car owners", "Non-car owners"],
              rows: [
                ["Expected inflation, one year ahead (%)", "2.61", "2.68", "2.46"],
                ["", "(1.18)", "(1.16)", "(1.21)"],
                ["Perceived past inflation (%)", "2.54", "2.60", "2.41"],
                ["Gasoline price (KRW per litre)", "1,684", "1,682", "1,688"],
                ["", "(183)", "(182)", "(185)"],
                ["College graduate (share)", "0.42", "0.47", "0.31"],
                ["Bottom income tercile (share)", "0.33", "0.25", "0.50"],
                ["Plans to buy durable good (share)", "0.14", "0.16", "0.10"],
                ["Respondent-months", "418,000", "284,000", "134,000"],
              ],
              note: "Note: Means with standard deviations in parentheses. Gasoline prices are provincial monthly averages of regular gasoline in nominal won.",
            },
          ],
        },
      ],
    },
    {
      id: "strategy",
      heading: "6. Empirical Strategy",
      paragraphs: [
        "Our baseline specification is π^e_irt = β·ln P_rt + X_it·γ + α_r + δ_t + ε_irt, where π^e_irt is the expected inflation of respondent i in province r and month t, P_rt is the provincial gasoline price, X_it are respondent controls (age, sex, education, income bracket, car ownership and occupation), α_r are province fixed effects and δ_t month fixed effects. Because month fixed effects absorb national movements in fuel prices and all other common shocks, including monetary policy and national inflation news, β is identified from differences across provinces in gasoline price changes. We also control for provincial consumer price inflation, unemployment and housing prices.",
      ],
      subsections: [
        {
          id: "instrument",
          heading: "6.1 Instrument",
          paragraphs: [
            "Provincial price deviations could reflect local demand conditions that also affect expectations — for example, a local boom that raises both fuel demand and perceived inflation. We therefore instrument ln P_rt with the interaction between the change in the won price of Dubai crude oil and two predetermined provincial characteristics: the pre-2008 share of fuel supplied by pipeline rather than tanker truck, which determines how quickly world prices pass through to local pumps, and the average distribution margin in 2007, which determines how large a share of the pump price is exposed to crude-price movements. Both characteristics are fixed before our sample begins and reflect geography and infrastructure rather than local economic conditions.",
            "Table 2 reports the first stage. Provinces with higher pipeline shares and lower margins experience significantly larger pump-price changes when world oil prices change, and the Kleibergen–Paap F-statistic of 41.6 comfortably exceeds conventional thresholds for weak instruments [25]. The instrument is unrelated to pre-sample trends in provincial inflation and unemployment, and to the composition of survey respondents.",
          ],
          tables: [
            {
              id: "table-2",
              caption: "Table 2. First stage: crude-oil shocks and provincial gasoline prices",
              columns: ["Regressor", "ln gasoline price", "Placebo: provincial CPI excl. energy"],
              rows: [
                ["Δ ln crude price × pipeline share", "0.142***", "0.004"],
                ["", "(0.021)", "(0.006)"],
                ["Δ ln crude price × 2007 margin", "−0.096***", "−0.003"],
                ["", "(0.018)", "(0.005)"],
                ["Kleibergen–Paap F-statistic", "41.6", ""],
                ["Province and month fixed effects", "Yes", "Yes"],
                ["Observations (province-months)", "2,856", "2,856"],
              ],
              note: "Note: Standard errors clustered by province-month in parentheses. *** p < 0.01.",
            },
          ],
        },
        {
          id: "tax-cut-design",
          heading: "6.2 The 2021 Fuel-Tax Cut",
          paragraphs: [
            "To evaluate the November 2021 tax cut we estimate a difference-in-differences event study comparing car owners with households without a car, in the twelve months from May 2021 to April 2022. Car owners experienced the reduction in pump prices directly, whereas non-owners were affected only indirectly. We estimate π^e_it = Σ_k θ_k·(Car_i × 1[t = k]) + X_it·γ + δ_t + ε_it and control for the interaction between car ownership and the log crude price, so that θ_k is not contaminated by car owners' higher sensitivity to world oil prices, which rose sharply in early 2022.",
            "Standard errors throughout are clustered by province-month, the level at which the treatment varies [24]. Estimates are weighted by survey weights.",
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
          id: "baseline",
          heading: "7.1 Baseline Estimates",
          paragraphs: [
            "Table 3 reports the main estimates. In the OLS specification with province and month fixed effects, a 10 percent increase in gasoline prices is associated with a 0.13 percentage point increase in expected inflation. The IV estimate is larger: a 10 percent increase raises expected inflation by 0.18 percentage points, with a standard error of 0.04. The difference is consistent with measurement error in provincial prices and with local demand shocks that raise fuel prices while lowering perceived inflation in other goods.",
            "The magnitude is economically meaningful. Gasoline accounts for about 3 percent of the consumer basket, so a 10 percent increase in its price would mechanically raise measured inflation by about 0.03 percentage points, roughly one-sixth of the estimated effect on expectations. Households therefore treat gasoline prices as a signal of broader inflation, as predicted by H1. The estimate is close to the US estimates of Binder {2}, despite the larger share of taxes in Korean pump prices, and implies that the roughly 25 percent rise in pump prices between late 2020 and late 2021 raised expected inflation by around 0.45 percentage points.",
            "Columns 3 and 4 show that the effect is not driven by perceived past inflation alone. Controlling for respondents' perceptions of inflation over the previous year reduces the coefficient only modestly, to 0.15, indicating that gasoline prices shape forward-looking beliefs over and above their effect on perceived recent inflation.",
          ],
          tables: [
            {
              id: "table-3",
              caption: "Table 3. Gasoline prices and one-year-ahead expected inflation",
              columns: ["", "(1) OLS", "(2) IV", "(3) IV + perceived inflation", "(4) IV + provincial trends"],
              rows: [
                ["ln gasoline price", "1.31***", "1.84***", "1.52***", "1.79***"],
                ["", "(0.29)", "(0.41)", "(0.38)", "(0.44)"],
                ["Effect of 10% increase (pp)", "0.13", "0.18", "0.15", "0.18"],
                ["Respondent controls", "Yes", "Yes", "Yes", "Yes"],
                ["Province and month fixed effects", "Yes", "Yes", "Yes", "Yes"],
                ["Observations", "418,000", "418,000", "418,000", "418,000"],
              ],
              note: "Note: Dependent variable is expected inflation over the next twelve months (percent). Standard errors clustered by province-month in parentheses. *** p < 0.01.",
            },
          ],
        },
        {
          id: "heterogeneity",
          heading: "7.2 Heterogeneity",
          paragraphs: [
            "Table 4 reports effects by household characteristics. The effect for car owners is 0.24 percentage points per 10 percent price increase, compared with 0.07 points for households without a car, consistent with H2. Respondents without a college degree respond with an effect of 0.23 points, compared with 0.15 points for graduates, and the effect for the bottom income tercile is 0.24 points compared with 0.16 points for the top tercile — in both cases about 50 percent larger. Older respondents respond somewhat more strongly than younger ones, consistent with experience-based learning [4].",
            "Figure 1 summarises these patterns. The groups that respond most strongly are those that spend a larger share of their budget on fuel and that rely more on everyday purchases as a source of information about prices [3][19]. Because these households also tend to have higher and more dispersed expectations, energy price shocks widen the dispersion of expectations across the population.",
          ],
          tables: [
            {
              id: "table-4",
              caption: "Table 4. Heterogeneous effects of gasoline prices (IV)",
              columns: ["Group", "Effect of 10% increase (pp)", "Std. error", "Difference from comparison group"],
              rows: [
                ["Car owners", "0.24***", "(0.05)", "0.17***"],
                ["Non-car owners", "0.07*", "(0.04)", ""],
                ["No college degree", "0.23***", "(0.05)", "0.08**"],
                ["College graduates", "0.15***", "(0.04)", ""],
                ["Bottom income tercile", "0.24***", "(0.06)", "0.08*"],
                ["Top income tercile", "0.16***", "(0.04)", ""],
                ["Aged 60 and over", "0.21***", "(0.05)", "0.05"],
                ["Aged under 40", "0.16***", "(0.05)", ""],
              ],
              note: "Note: Each row is estimated on the indicated subsample with the specification of Table 3, column 2. Differences tested in pooled regressions with interactions. * p < 0.10, ** p < 0.05, *** p < 0.01.",
            },
          ],
          figures: [
            {
              id: "figure-1",
              caption: "Figure 1. Effect of a 10 percent gasoline price increase on expected inflation, by group",
              kind: "bar",
              xLabels: ["All", "Car owners", "Non-owners", "No college", "College", "Bottom tercile", "Top tercile"],
              yLabel: "Percentage points",
              series: [
                {
                  name: "IV estimate",
                  values: [0.18, 0.24, 0.07, 0.23, 0.15, 0.24, 0.16],
                  lower: [0.1, 0.14, -0.01, 0.13, 0.07, 0.12, 0.08],
                  upper: [0.26, 0.34, 0.15, 0.33, 0.23, 0.36, 0.24],
                },
              ],
              note: "Note: IV estimates from Table 3 and Table 4 with 95 percent confidence intervals.",
            },
          ],
        },
        {
          id: "tax-cut",
          heading: "7.3 The 2021 Fuel-Tax Cut",
          paragraphs: [
            "Figure 2 plots the event-study coefficients for car owners relative to non-owners. Before the tax cut, the difference in expected inflation between the two groups is stable and statistically indistinguishable from zero, conditional on controls. After the cut, car owners' expectations fall relative to those of non-owners: the coefficients for December 2021 to February 2022 average −0.12 percentage points, and the effect remains between −0.10 and −0.13 points through April 2022 despite the sharp rise in world oil prices after February, which is absorbed by the car-ownership-by-crude-price control.",
            "The size of the effect is consistent with the baseline estimates. The tax cut lowered pump prices by about 9 percent; applying the car-owner coefficient of 0.024 per percent implies a decline of about 0.2 percentage points relative to a counterfactual, of which our difference-in-differences design captures the part that differs between car owners and non-owners (0.24 − 0.07 = 0.17 per 10 percent, or about 0.15 points for a 9 percent reduction). The estimated −0.12 is close to this benchmark, supporting H4 and suggesting that fiscal measures that lower salient prices can partly offset the effect of energy shocks on expectations, much as announced tax changes have been shown to move expectations elsewhere [15].",
          ],
          figures: [
            {
              id: "figure-2",
              caption: "Figure 2. Expected inflation of car owners relative to non-owners around the November 2021 fuel-tax cut",
              kind: "line",
              xLabels: ["May 21", "Jun 21", "Jul 21", "Aug 21", "Sep 21", "Oct 21", "Nov 21", "Dec 21", "Jan 22", "Feb 22", "Mar 22", "Apr 22"],
              yLabel: "Percentage points",
              series: [
                {
                  name: "Car owners × month",
                  values: [0.02, -0.01, 0.03, 0.0, -0.02, 0.0, -0.05, -0.11, -0.13, -0.12, -0.1, -0.11],
                  lower: [-0.07, -0.1, -0.06, -0.09, -0.11, -0.09, -0.14, -0.2, -0.22, -0.21, -0.2, -0.21],
                  upper: [0.11, 0.08, 0.12, 0.09, 0.07, 0.09, 0.04, -0.02, -0.04, -0.03, 0.0, -0.01],
                },
              ],
              marker: 5,
              note: "Note: Coefficients relative to the average of May–October 2021, with 95 percent confidence intervals. The dashed line marks the tax cut of 12 November 2021.",
            },
          ],
        },
      ],
    },
    {
      id: "mechanisms",
      heading: "8. Mechanisms: Symmetry, Attention and Spending Intentions",
      paragraphs: [
        "Table 5 examines three questions about how gasoline prices affect expectations. First, we allow separate coefficients for price increases and decreases, defined relative to the province's price twelve months earlier. The effect of a 10 percent increase is 0.19 percentage points and that of a 10 percent decrease is 0.17 points; the difference is small and statistically insignificant. In contrast to the well-known asymmetry in the pass-through of crude prices to pump prices [27], households appear to update symmetrically on the pump prices they observe, contrary to the view that attention is heightened only by price increases.",
        "Second, we examine the role of large changes. Following the idea that oil shocks matter most when prices exceed their recent range [6], we include an indicator for pump prices above their three-year maximum. The coefficient on this indicator is positive but small, and the main coefficient is essentially unchanged, suggesting that expectations respond to pump prices continuously rather than only during spikes. The effect is also concentrated in the first two months after a price change, consistent with households updating quickly on salient information; local-projection estimates [26] show that the effect of a 10 percent increase on expectations peaks at 0.21 points after one month and declines to about 0.08 points after six months.",
        "Third, we study spending intentions using households interviewed in consecutive months. Respondents whose expected inflation rose by more than one percentage point were 4 percentage points less likely to report plans to buy a durable good, relative to a baseline of 14 percent; instrumenting the change in expectations with the change in local gasoline prices yields a similar estimate. These respondents were also more likely to report that their household's financial situation would deteriorate. Consistent with the income interpretation discussed in Section 4, households appear to treat energy-driven increases in expected inflation as bad news for real income rather than as a reason to purchase durables before prices rise [14][18].",
      ],
      tables: [
        {
          id: "table-5",
          caption: "Table 5. Symmetry, dynamics and spending intentions",
          columns: ["Specification / outcome", "Estimate", "Std. error"],
          rows: [
            ["A. Expected inflation: 10% price increase", "0.19***", "(0.05)"],
            ["A. Expected inflation: 10% price decrease", "−0.17***", "(0.05)"],
            ["A. p-value, equal magnitude", "0.71", ""],
            ["B. Price above three-year maximum (indicator)", "0.04", "(0.03)"],
            ["B. Effect of 10% increase after one month", "0.21***", "(0.05)"],
            ["B. Effect of 10% increase after six months", "0.08*", "(0.04)"],
            ["C. Plans to buy durables: expectation rose > 1 pp", "−0.040***", "(0.011)"],
            ["C. Expects worse finances: expectation rose > 1 pp", "0.052***", "(0.013)"],
          ],
          note: "Note: Panels A and B use the IV specification of Table 3. Panel C uses households interviewed in consecutive months, with respondent controls and month fixed effects. * p < 0.10, *** p < 0.01.",
        },
      ],
    },
    {
      id: "robustness",
      heading: "9. Robustness",
      paragraphs: [
        "Table 6 reports robustness checks. The estimates are similar when we exclude Seoul and Gyeonggi province, whose prices are most strongly affected by local land costs; when we use only the pipeline-share instrument or only the margin instrument; when we use diesel rather than gasoline prices; when we exclude the global financial crisis of 2008–2009 and the pandemic period of 2020; and when we add province-specific linear trends. Using the median rather than the mean of expectations within province-month cells yields a slightly smaller estimate of 0.16, indicating that the results are not driven by extreme responses.",
        "We also address the concern that survey respondents may confuse expected inflation with expected price changes of the goods they buy most often. Controlling for respondents' expectations of their own household's living costs, available from 2013 onwards, leaves the coefficient on gasoline prices largely unchanged. Finally, placebo regressions in which expectations are regressed on gasoline prices twelve months in the future yield small and insignificant coefficients, and the instruments are not related to provincial core inflation (Table 2).",
      ],
      tables: [
        {
          id: "table-6",
          caption: "Table 6. Robustness checks (IV, effect of a 10 percent gasoline price increase)",
          columns: ["Specification", "Estimate (pp)", "Std. error", "First-stage F"],
          rows: [
            ["Baseline", "0.18***", "(0.04)", "41.6"],
            ["Excluding Seoul and Gyeonggi", "0.19***", "(0.05)", "36.2"],
            ["Pipeline-share instrument only", "0.20***", "(0.06)", "52.8"],
            ["Margin instrument only", "0.16***", "(0.06)", "29.4"],
            ["Diesel prices", "0.15***", "(0.05)", "33.1"],
            ["Excluding 2008–2009 and 2020", "0.18***", "(0.05)", "38.7"],
            ["Province-specific trends", "0.18***", "(0.04)", "39.9"],
            ["Median within province-month cells", "0.16***", "(0.04)", "41.6"],
            ["Placebo: prices twelve months ahead", "0.02", "(0.04)", "40.3"],
          ],
          note: "Note: Specification of Table 3, column 2, with the indicated modification. *** p < 0.01.",
        },
      ],
    },
    {
      id: "discussion",
      heading: "10. Discussion",
      paragraphs: [
        "Our estimates imply that energy prices are an important channel through which supply shocks reach household inflation expectations. Gasoline is a small share of the consumption basket, but the effect of its price on expectations is about six times its mechanical contribution to measured inflation. This is consistent with evidence that household expectations are formed from salient, frequently observed prices rather than from official statistics [2][3][21], and it means that the rise in energy prices in 2021–2022 is likely to have pushed household expectations up by considerably more than its direct effect on the consumer price index.",
        "For monetary policy, these results carry two implications. First, the conventional advice to look through energy price shocks [16][17] presumes that expectations remain anchored. If households — particularly lower-income and less-educated households — extrapolate from pump prices, a large and persistent energy shock may raise expectations enough to affect wage demands and pricing. Central banks may therefore need to monitor the expectations of the groups most exposed to fuel costs and to communicate clearly about the temporary nature of energy shocks, recognising that general communication often fails to reach these households [9][23]. Second, the finding that higher energy-driven expectations reduce planned durable purchases suggests that energy shocks depress demand through expectations as well as through real incomes, which partly offsets their inflationary effect.",
        "For fiscal policy, the evidence from the 2021 tax cut indicates that temporary measures that lower salient prices can partly offset the effect of energy shocks on expectations. This benefit must be weighed against the fiscal cost of such measures, their poor targeting — higher-income households consume more fuel — and the fact that they weaken price signals that encourage energy conservation. Targeted transfers to lower-income households would address distributional concerns at lower cost, although they are likely to have smaller effects on expectations because they do not change observed prices.",
        "Our analysis has limitations. The consumer survey measures expectations only over a one-year horizon, so we cannot assess whether longer-term expectations are similarly affected. Our tax-cut estimates rely on the assumption that car owners and non-owners would have followed parallel paths in the absence of the cut, which the pre-period coefficients support but cannot prove. And we cannot observe actual spending, only stated intentions, although such intentions are known to predict subsequent purchases in household surveys [20].",
        "Comparisons with other economies suggest that the Korean estimates are not unusual. The effect we estimate is similar to that found for the United States [2] and larger than the effect of grocery prices on expectations in Europe [3], perhaps because fuel prices are posted publicly and change frequently. The share of households that own a car, and hence observe fuel prices directly, is a natural determinant of the strength of this channel across countries, and may help explain why expectations in economies with high car ownership appear particularly sensitive to oil-price shocks.",
      ],
    },
    {
      id: "conclusion",
      heading: "11. Conclusion",
      paragraphs: [
        "Gasoline prices have a strong and widely shared influence on Korean households' inflation expectations. A 10 percent rise in pump prices raises one-year-ahead expected inflation by 0.18 percentage points, with larger effects for car owners and for lower-income and less-educated households, and price decreases lower expectations by a similar amount. The November 2021 fuel-tax cut lowered car owners' expectations by about 0.12 percentage points, and higher energy-driven expectations were associated with weaker plans to buy durable goods. With energy prices rising sharply in 2022, central banks should monitor the expectations of the groups most exposed to fuel costs, while recognising that temporary tax measures can partly offset the effect of energy shocks on expectations [1][2].",
      ],
    },
    {
      id: "appendix",
      heading: "Appendix A. Data Construction",
      paragraphs: [
        "Expected inflation. The consumer survey asks respondents to choose a range for expected inflation over the next twelve months and, from 2013, to report a point estimate within that range. For earlier years we assign the midpoint of the chosen range, with open-ended top and bottom categories assigned values one percentage point beyond the threshold. Results are similar when we restrict the sample to 2013–2022 and use point estimates.",
        "Fuel prices. Station-level prices of regular gasoline and diesel are averaged within province and month using equal weights for each station-day. Prices for the province of Sejong, created in 2012, are combined with those of South Chungcheong for consistency. Pipeline shares are computed from 2007 shipment data published by the pipeline operator as the share of each province's gasoline deliveries received through pipeline terminals; distribution margins are the 2007 average gap between pump prices and refinery gate prices net of taxes.",
        "Controls. Provincial consumer price inflation and unemployment rates come from Statistics Korea, and housing price indices from the Korea Real Estate Board. Survey weights provided by the Bank of Korea are used throughout. Households interviewed in consecutive months are identified using the survey's household identifiers; about 31 percent of respondent-months can be linked to a response in the previous month.",
      ],
    },
  ],
};
