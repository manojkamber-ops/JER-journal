// Vol. 28, No. 1 (January 2023) — full text for an article defined in journal.ts (sample content).
import type { FulltextSpec } from "../paper-spec";

export const fulltext: FulltextSpec = {
  id: "2023-v28-i1-04",
  acknowledgments:
    "We thank seminar participants at Hanyang University, the Korea Development Institute and the Bank of Korea, two anonymous referees and the handling Associate Editor for helpful comments. We are grateful to staff of the Bank of Korea's Economic Statistics Department for clarifications on the construction of the expectations surveys. The views expressed are those of the authors and do not necessarily reflect those of the Korea Development Institute. All errors are our own.",
  dataAvailability:
    "All predictors are drawn from publicly available sources: the Economic Statistics System of the Bank of Korea, the Korean Statistical Information Service of Statistics Korea, the Ministry of Employment and Labor and international commodity-price databases. The assembled data set, the real-time vintages used in Section 9 and replication code are available from the corresponding author.",
  editorialNote:
    "Min-Jae Choi and Hyun-Ju Yang show that a random-forest model forecasts Korean headline CPI inflation about 16 percent more accurately than a Phillips-curve benchmark at the one-year horizon over 2010–2023, relying heavily on inflation expectations, import prices and labour-market tightness.",
  refs: [
    /* 1 */ "Stock, J. H., & Watson, M. W. (1999). Forecasting inflation. Journal of Monetary Economics, 44(2), 293–335.",
    /* 2 */ "Atkeson, A., & Ohanian, L. E. (2001). Are Phillips curves useful for forecasting inflation? Federal Reserve Bank of Minneapolis Quarterly Review, 25(1), 2–11.",
    /* 3 */ "Stock, J. H., & Watson, M. W. (2007). Why has U.S. inflation become harder to forecast? Journal of Money, Credit and Banking, 39(s1), 3–33.",
    /* 4 */ "Faust, J., & Wright, J. H. (2013). Forecasting inflation. In G. Elliott & A. Timmermann (Eds.), Handbook of Economic Forecasting (Vol. 2A, pp. 2–56). Amsterdam: Elsevier.",
    /* 5 */ "Medeiros, M. C., Vasconcelos, G. F. R., Veiga, Á., & Zilberman, E. (2021). Forecasting inflation in a data-rich environment: The benefits of machine learning methods. Journal of Business & Economic Statistics, 39(1), 98–119.",
    /* 6 */ "Goulet Coulombe, P., Leroux, M., Stevanovic, D., & Surprenant, S. (2022). How is machine learning useful for macroeconomic forecasting? Journal of Applied Econometrics, 37(5), 920–964.",
    /* 7 */ "Breiman, L. (2001). Random forests. Machine Learning, 45(1), 5–32.",
    /* 8 */ "Stock, J. H., & Watson, M. W. (2002). Forecasting using principal components from a large number of predictors. Journal of the American Statistical Association, 97(460), 1167–1179.",
    /* 9 */ "Tibshirani, R. (1996). Regression shrinkage and selection via the lasso. Journal of the Royal Statistical Society: Series B, 58(1), 267–288.",
    /* 10 */ "Zou, H., & Hastie, T. (2005). Regularization and variable selection via the elastic net. Journal of the Royal Statistical Society: Series B, 67(2), 301–320.",
    /* 11 */ "Friedman, J. H. (2001). Greedy function approximation: A gradient boosting machine. Annals of Statistics, 29(5), 1189–1232.",
    /* 12 */ "Diebold, F. X., & Mariano, R. S. (1995). Comparing predictive accuracy. Journal of Business & Economic Statistics, 13(3), 253–263.",
    /* 13 */ "Clark, T. E., & West, K. D. (2007). Approximately normal tests for equal predictive accuracy in nested models. Journal of Econometrics, 138(1), 291–311.",
    /* 14 */ "Giacomini, R., & White, H. (2006). Tests of conditional predictive ability. Econometrica, 74(6), 1545–1578.",
    /* 15 */ "Hansen, P. R., Lunde, A., & Nason, J. M. (2011). The model confidence set. Econometrica, 79(2), 453–497.",
    /* 16 */ "Ang, A., Bekaert, G., & Wei, M. (2007). Do macro variables, asset markets, or surveys forecast inflation better? Journal of Monetary Economics, 54(4), 1163–1212.",
    /* 17 */ "Coibion, O., & Gorodnichenko, Y. (2015). Is the Phillips curve alive and well after all? Inflation expectations and the missing disinflation. American Economic Journal: Macroeconomics, 7(1), 197–232.",
    /* 18 */ "Ball, L., & Mazumder, S. (2011). Inflation dynamics and the Great Recession. Brookings Papers on Economic Activity, 2011(1), 337–381.",
    /* 19 */ "Hooper, P., Mishkin, F. S., & Sufi, A. (2020). Prospects for inflation in a high pressure economy: Is the Phillips curve dead or is it just hibernating? Research in Economics, 74(1), 26–62.",
    /* 20 */ "Campa, J. M., & Goldberg, L. S. (2005). Exchange rate pass-through into import prices. Review of Economics and Statistics, 87(4), 679–690.",
    /* 21 */ "McCracken, M. W., & Ng, S. (2016). FRED-MD: A monthly database for macroeconomic research. Journal of Business & Economic Statistics, 34(4), 574–589.",
    /* 22 */ "Bai, J., & Ng, S. (2002). Determining the number of factors in approximate factor models. Econometrica, 70(1), 191–221.",
    /* 23 */ "Varian, H. R. (2014). Big data: New tricks for econometrics. Journal of Economic Perspectives, 28(2), 3–28.",
    /* 24 */ "Mullainathan, S., & Spiess, J. (2017). Machine learning: An applied econometric approach. Journal of Economic Perspectives, 31(2), 87–106.",
    /* 25 */ "Lundberg, S. M., & Lee, S.-I. (2017). A unified approach to interpreting model predictions. Advances in Neural Information Processing Systems, 30, 4765–4774.",
    /* 26 */ "Hastie, T., Tibshirani, R., & Friedman, J. (2009). The elements of statistical learning: Data mining, inference, and prediction (2nd ed.). New York: Springer.",
    /* 27 */ { jer: "2022-v27-i3-01" },
  ],
  body: [
    {
      id: "introduction",
      heading: "1. Introduction",
      paragraphs: [
        "Inflation forecasts sit at the centre of monetary policy. Under flexible inflation targeting, the policy rate is set with reference to where inflation is expected to be one to two years ahead rather than where it is today, so the quality of the forecast directly affects the quality of policy. Yet inflation has proved notoriously difficult to forecast. In a series of influential papers, simple univariate benchmarks were found to be hard to beat, and the forecasting content of the Phillips curve appeared to vary markedly across periods [1][2][3]. A survey of the literature concluded that subjective and survey-based forecasts are often the most accurate available predictors and that sophisticated models rarely improve on them by much [4].",
        "The arrival of large macroeconomic data sets and of machine-learning methods able to exploit them has reopened the question. Recent evidence for the United States suggests that random forests in particular can deliver substantial gains over standard benchmarks, especially at longer horizons and in periods of economic stress [5], and a systematic comparison of machine-learning features attributes much of the gain to nonlinearity and to the ability to handle many predictors with regularisation [6]. Whether these findings carry over to a small open economy with a different inflation process is an open question. Korea is an instructive case: it is highly exposed to commodity and import prices, its central bank has targeted inflation since 1998, and inflation over the past decade has swung from persistent undershooting of the target to the highest rates in a generation in 2022.",
        "This paper compares the forecasting performance of machine-learning models against standard Phillips-curve benchmarks for Korean headline CPI inflation over 2010–2023. We assemble a monthly data set of 124 macroeconomic and financial predictors from 2000 onwards and evaluate pseudo-out-of-sample forecasts at horizons of one, three, six and twelve months, with forecast targets running from January 2010 to December 2022. The final estimation, using the data vintage of January 2023, produces forecasts for 2023 that we discuss in Section 10. The models include a random walk, an autoregression, an expectations-augmented Phillips curve, a factor-augmented regression, penalised linear regressions, gradient boosting and random forests.",
        "Our main finding is that a random-forest model with the full set of predictors achieves the lowest out-of-sample root mean squared forecast error (RMSFE) at every horizon beyond one month. At the one-year horizon it improves upon the Phillips-curve benchmark by approximately 16 percent, a difference that is statistically significant and that survives a range of robustness checks, including the use of real-time data vintages. The gain is largest in 2020–2022, when the pandemic and the subsequent surge in energy and import prices moved inflation far from its historical relationship with the domestic output gap.",
        "To understand where the gains come from, we compute permutation-based and Shapley-value measures of variable importance. The random forest relies heavily on three groups of variables: measures of inflation expectations, import prices and labour-market tightness. Together they account for more than half of the model's total importance. The model therefore does not discard the economic content of the Phillips curve; rather, it combines expectations, slack and external cost pressures more flexibly than a linear specification, allowing their relative weights to vary with the state of the economy. We also show that much of the advantage over linear models comes from nonlinear interactions between import prices and the exchange rate.",
        "The remainder of the paper is organised as follows. Section 2 describes the institutional background of inflation targeting in Korea, Section 3 reviews related literature and Section 4 sets out the forecasting framework and hypotheses. Sections 5 and 6 describe the data and the empirical strategy. Section 7 presents the main results, Section 8 examines the sources of predictability and Section 9 reports robustness checks. Section 10 discusses implications for central-bank forecasting and Section 11 concludes.",
      ],
    },
    {
      id: "background",
      heading: "2. Institutional Background",
      paragraphs: [
        "The Bank of Korea adopted inflation targeting in 1998, following the Asian financial crisis, and has revised the target several times. Over 2010–2012 the target was 3.0 percent plus or minus 1 percentage point for headline CPI inflation; over 2013–2015 it was a range of 2.5 to 3.5 percent; and since 2016 it has been a point target of 2 percent for headline CPI inflation. The Bank publishes its own inflation projections four times a year in its Monetary Policy Report and Economic Outlook, and its decisions are explicitly framed in terms of the medium-term outlook for inflation relative to target.",
        "Korean inflation over the past decade has posed a challenge for forecasters. After a commodity-driven peak of 4.0 percent in 2011, headline inflation fell steadily, averaging only 1.1 percent over 2013–2020 and falling to 0.4 percent in 2019, well below the target. Standard models based on the domestic output gap repeatedly predicted a return towards target that did not materialise. The pattern reversed in 2021–2022: headline inflation rose to 2.5 percent in 2021 and 5.1 percent in 2022, the highest annual rate since 1998, driven by global energy prices, supply disruptions, a weaker won and a tight labour market following the reopening of the economy.",
        "Korea is a small open economy with a high import share in consumption and production. Imports of goods and services amount to around 40 percent of GDP, and crude oil, natural gas and intermediate goods are almost entirely imported. Movements in the won–dollar exchange rate and in global commodity prices therefore pass through to consumer prices relatively quickly, both directly through energy and food items and indirectly through production costs [20]. At the same time, administered prices for electricity, gas and some public services are adjusted infrequently and with a lag, which creates timing patterns that simple linear models may capture poorly. Household inflation expectations, collected monthly by the Bank of Korea since 2002, are closely watched and are known to respond strongly to energy prices [27].",
      ],
    },
    {
      id: "literature",
      heading: "3. Related Literature",
      paragraphs: [
        "Our paper relates first to the long literature on the forecasting performance of the Phillips curve. Stock and Watson {1} found that activity-based Phillips curves improved on univariate forecasts of US inflation, but Atkeson and Ohanian {2} showed that a simple random walk on annual inflation outperformed these models after the mid-1980s. Stock and Watson {3} reconciled these findings with an unobserved-components model in which the predictable component of inflation became smaller after the Great Moderation. Faust and Wright {4} provide a comprehensive review and conclude that judgemental and survey forecasts are difficult to beat, and Ang, Bekaert and Wei {16} find that survey measures of expectations outperform both macro-based models and asset-price measures for US inflation.",
        "A second strand has examined why the Phillips curve appeared to weaken. Ball and Mazumder {18} document the missing disinflation after the global financial crisis, and Coibion and Gorodnichenko {17} show that a Phillips curve augmented with household inflation expectations accounts for it, because household expectations rose with oil prices. Hooper, Mishkin and Sufi {19} argue that the Phillips curve may be nonlinear, flattening when slack is large and steepening when labour markets are very tight, so that its predictive content is concentrated in particular states of the economy. This argument is directly relevant to our results, since tree-based methods allow precisely such state dependence.",
        "A third strand applies data-rich and machine-learning methods to macroeconomic forecasting. Stock and Watson {8} show that a small number of principal components extracted from a large panel of predictors improves forecasts of US activity and inflation, and Bai and Ng {22} provide criteria for choosing the number of factors. Penalised regressions such as the lasso [9] and the elastic net [10] select or shrink predictors, while gradient boosting [11] and random forests [7] fit flexible nonlinear functions by combining many simple trees. Medeiros et al. {5} find that random forests outperform a large set of competitors in forecasting US inflation, and Goulet Coulombe et al. {6} show that nonlinearity is the most beneficial feature of machine-learning methods for macroeconomic forecasting, especially during periods of high uncertainty. Broader discussions of machine learning in economics emphasise both the gains from flexible prediction and the difficulty of interpreting the resulting models [23][24][26].",
        "Evidence for Korea is more limited. Existing studies typically compare a handful of linear models over relatively short samples, and few use large data sets or evaluate forecasts over the volatile post-2020 period. We contribute a systematic comparison using a broad set of predictors and an evaluation sample that includes both the low-inflation decade and the 2021–2022 surge, and we use modern tools for interpreting machine-learning forecasts [25] to relate the model's predictions to economic mechanisms emphasised in the Phillips-curve literature.",
      ],
    },
    {
      id: "framework",
      heading: "4. Forecasting Framework and Hypotheses",
      paragraphs: [
        "Let π(t+h) denote annualised headline CPI inflation between months t and t+h. All models produce direct forecasts of π(t+h) using information available at the end of month t; we do not iterate one-step forecasts forward. The benchmark expectations-augmented Phillips curve regresses π(t+h) on current and lagged inflation, the one-year-ahead household inflation expectation, the unemployment gap and the change in import prices in won terms. This specification embeds the three channels emphasised in the literature — expectations, slack and external cost pressures [17][19][20] — in a linear form with constant coefficients, and it closely resembles the reduced-form equations used in many central-bank forecasting systems.",
        "Machine-learning models generalise the benchmark in two directions. First, they allow many more predictors, regularised to avoid overfitting. Second, some of them allow the conditional mean of future inflation to be a nonlinear function of the predictors. A random forest averages the predictions of a large number of regression trees, each grown on a bootstrap sample of the data and using a random subset of predictors at each split [7]. Because each tree partitions the predictor space into regions with a constant forecast, the forest can represent thresholds and interactions — for example, a stronger effect of labour-market tightness when the job-openings ratio is high, or a larger pass-through of import prices when the won is depreciating — without the researcher specifying them in advance.",
        "We test three hypotheses. H1: models using a large set of predictors outperform the Phillips-curve benchmark at horizons relevant for monetary policy. H2: nonlinear methods outperform linear methods using the same predictors, so that gains are not simply due to having more data. H3: the gains of nonlinear methods are concentrated in periods of large shocks to import prices and labour-market conditions, when the linear Phillips curve is most likely to be misspecified. Rejecting H2 would suggest that the benefits of machine learning come from variable selection and shrinkage; supporting H3 would point to state dependence in the inflation process.",
      ],
    },
    {
      id: "data",
      heading: "5. Data",
      paragraphs: [
        "We assemble a monthly data set covering January 2000 to December 2022, taken from the data vintage available in January 2023. The target variable is headline CPI inflation published by Statistics Korea. Predictors are drawn from the Bank of Korea's Economic Statistics System, Statistics Korea, the Ministry of Employment and Labor and international sources, following the logic of large monthly macroeconomic databases such as FRED-MD [21].",
      ],
      subsections: [
        {
          id: "data-predictors",
          heading: "5.1 Predictors",
          paragraphs: [
            "Table 1 summarises the 124 predictors by group. They include disaggregated consumer and producer prices, import and export prices, survey measures of household and expert inflation expectations, labour-market indicators such as the unemployment rate, employment, wages and the ratio of job openings to jobseekers from the public employment service, activity measures such as industrial production, retail sales and construction orders, money and credit aggregates, interest rates and spreads, exchange rates, commodity prices, business and consumer sentiment indices and housing prices. Each series is transformed to stationarity following standard practice: growth rates for most real and nominal quantities, first differences for interest rates and survey balances, and levels for spreads and the job-openings ratio.",
            "The household inflation expectation is the one-year-ahead median expected inflation from the Bank of Korea's Consumer Survey, available monthly since 2002; for 2000–2001 we splice it with the earlier quarterly survey. Expert expectations come from the monthly survey of professional forecasters compiled by a private data provider. The unemployment gap is the difference between the unemployment rate and a one-sided Hodrick–Prescott trend estimated in real time, so that it uses no future information. Import prices are the Bank of Korea's import price index in won terms, which combines foreign-currency prices and the exchange rate.",
          ],
          table: {
            id: "tab-predictors",
            caption: "Table 1. Predictor groups, number of series and examples",
            columns: ["Group", "Series", "Examples", "Main source"],
            rows: [
              ["Consumer and producer prices", "18", "Core CPI, food and energy CPI, PPI by stage", "Statistics Korea, Bank of Korea"],
              ["Inflation expectations", "6", "Household 1-year expectation, expert forecasts", "Bank of Korea, survey provider"],
              ["Labour market", "16", "Unemployment rate and gap, job-openings ratio, wages", "Statistics Korea, MOEL"],
              ["Real activity", "22", "Industrial production, retail sales, capacity utilisation", "Statistics Korea"],
              ["Money and credit", "14", "M2, household loans, corporate loans", "Bank of Korea"],
              ["Interest rates and spreads", "12", "Base rate, 3-year bond yield, term spread", "Bank of Korea"],
              ["External sector", "16", "Import prices, export prices, KRW/USD, NEER", "Bank of Korea"],
              ["Commodity prices", "8", "Dubai crude oil, natural gas, food, metals", "International sources"],
              ["Sentiment surveys", "6", "Consumer sentiment, business survey index", "Bank of Korea"],
              ["Housing", "6", "Apartment sale and jeonse price indices", "Korea Real Estate Board"],
              ["Total", "124", "", ""],
            ],
            note: "Monthly data, January 2000 to December 2022 (vintage of January 2023). MOEL = Ministry of Employment and Labor; NEER = nominal effective exchange rate. Transformations are listed in Appendix A.",
          },
        },
        {
          id: "data-descriptive",
          heading: "5.2 Inflation over the sample",
          paragraphs: [
            "Headline inflation averaged 2.1 percent over the full evaluation period 2010–2022, with a standard deviation of year-on-year inflation of 1.3 percentage points. The period divides naturally into three phases: a commodity-driven phase of relatively high inflation in 2010–2012, a long phase of below-target inflation from 2013 to 2020, and the surge of 2021–2022. Each phase poses a different challenge for forecasting models. In the first, the main difficulty is predicting the passthrough of commodity prices; in the second, the challenge is to avoid predicting a return to target that did not occur; and in the third, models must capture an unusually rapid rise in inflation driven largely by external factors.",
            "The correlation between year-on-year inflation and the unemployment gap is weak over the full sample, at −0.18, but is considerably stronger when the job-openings ratio is above its historical median (−0.41) than when it is below (−0.07), an early indication of the state dependence discussed by Hooper, Mishkin and Sufi {19}. Import-price inflation in won terms is much more volatile than consumer price inflation, with a standard deviation of 11.4 percentage points, and its correlation with headline inflation twelve months ahead rises from 0.31 in periods of won appreciation to 0.58 in periods of depreciation.",
          ],
        },
      ],
    },
    {
      id: "strategy",
      heading: "6. Empirical Strategy",
      paragraphs: [
        "We conduct a pseudo-out-of-sample forecasting exercise designed to mimic the position of a forecaster at each point in time. All models are re-estimated every month on an expanding window starting in January 2000, using only data that would have been available at the forecast origin, apart from data revisions, which we address in Section 9.",
      ],
      subsections: [
        {
          id: "strategy-models",
          heading: "6.1 Models",
          paragraphs: [
            "We compare nine models. The random walk forecasts inflation over the next h months as the average inflation rate over the previous twelve months, following Atkeson and Ohanian {2}. The autoregression (AR) uses up to twelve lags of monthly inflation selected by the Bayesian information criterion. The Phillips curve (PC) is the benchmark described in Section 4. The factor model augments the AR with principal components extracted from the full predictor set [8], with the number of factors chosen by the criteria of Bai and Ng {22}. The lasso [9], the elastic net [10] and ridge regression use all 124 predictors and four of their lags. Gradient boosting [11] and the random forest [7] use the same predictor set.",
            "Hyperparameters for the machine-learning models are chosen by time-series cross-validation within each estimation window, using the last 48 months of the window as a validation sample. For the random forest we grow 500 trees, select the number of predictors considered at each split from one-third of the total, and set the minimum leaf size from a grid of five values. Using a fixed rather than re-tuned set of hyperparameters makes little difference to the results, as we show in Section 9.",
          ],
        },
        {
          id: "strategy-evaluation",
          heading: "6.2 Forecast evaluation",
          paragraphs: [
            "Forecast targets run from January 2010 to December 2022 at every horizon, so the number of forecast origins is the same across horizons and the evaluation samples are comparable. Our main measure of accuracy is the RMSFE of each model relative to that of the Phillips-curve benchmark; a ratio below one indicates that the model is more accurate than the benchmark. We test equal predictive accuracy using the Diebold–Mariano test [12] with Newey–West standard errors and, for models that nest the benchmark, the Clark–West adjustment [13]. We also compute the model confidence set of Hansen, Lunde and Nason {15}, which identifies the subset of models that cannot be distinguished from the best at a given confidence level, and we use the fluctuation-robust conditional test of Giacomini and White {14} to examine whether relative performance varies over time.",
          ],
        },
        {
          id: "strategy-importance",
          heading: "6.3 Interpreting the forecasts",
          paragraphs: [
            "Random forests are often described as black boxes. To understand which predictors drive the forecasts, we compute two measures of variable importance. Permutation importance measures the increase in out-of-sample mean squared error when the values of a predictor are randomly permuted, breaking its relationship with the target while leaving its distribution unchanged. Shapley additive explanations (SHAP) decompose each individual forecast into contributions from each predictor, based on cooperative game theory [25]. Both measures are computed over the evaluation sample and aggregated to predictor groups, which reduces the instability that arises when highly correlated predictors share importance.",
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
          heading: "7.1 Forecast accuracy across models and horizons",
          paragraphs: [
            "Table 2 reports the RMSFE of each model relative to the Phillips-curve benchmark at horizons of one, three, six and twelve months, together with the benchmark's absolute RMSFE in percentage points. Three features stand out. First, the random walk and the AR are less accurate than the Phillips curve at all horizons beyond one month, confirming that the benchmark is not a straw man; at the one-year horizon its RMSFE of 1.21 percentage points is about 9 percent lower than that of the random walk. Second, linear data-rich methods improve modestly on the benchmark: the factor model and the elastic net reduce the RMSFE at the one-year horizon by 5 and 7 percent respectively. Third, the random forest is the most accurate model at every horizon beyond one month, and its advantage grows with the horizon, from 4 percent at three months to 16 percent at twelve months, where its RMSFE is 1.02 percentage points.",
            "At the one-month horizon, differences across models are small and the AR is marginally the most accurate. This is unsurprising: short-horizon inflation is dominated by idiosyncratic movements in volatile items such as fresh food, which are largely unpredictable, and by persistence, which simple autoregressive models capture well. The advantage of data-rich and nonlinear methods emerges at horizons at which slack, expectations and external cost pressures have time to work through to prices, which are also the horizons most relevant for monetary policy.",
          ],
          table: {
            id: "tab-rmsfe",
            caption: "Table 2. Out-of-sample forecast accuracy relative to the Phillips-curve benchmark",
            columns: ["Model", "h = 1", "h = 3", "h = 6", "h = 12"],
            rows: [
              ["Phillips curve (RMSFE, pp)", "1.94", "1.47", "1.32", "1.21"],
              ["Random walk", "1.03", "1.06", "1.08", "1.10"],
              ["Autoregression", "0.98", "1.02", "1.05", "1.07"],
              ["Factor-augmented AR", "1.00", "0.98", "0.96", "0.95"],
              ["Ridge", "1.02", "0.99", "0.97", "0.95"],
              ["Lasso", "1.01", "0.98", "0.96", "0.94"],
              ["Elastic net", "1.01", "0.98", "0.95", "0.93"],
              ["Gradient boosting", "1.02", "0.97", "0.91", "0.88"],
              ["Random forest", "0.99", "0.96", "0.90", "0.84"],
            ],
            note: "The first row reports the root mean squared forecast error (RMSFE) of the Phillips-curve benchmark in percentage points of annualised inflation. Other rows report the RMSFE of each model divided by that of the benchmark; values below 1 indicate more accurate forecasts. Forecast targets: January 2010 to December 2022 (156 months) at every horizon. Expanding estimation window starting in January 2000.",
          },
        },
        {
          id: "results-tests",
          heading: "7.2 Statistical significance",
          paragraphs: [
            "Table 3 assesses whether the differences in accuracy are statistically significant at the six- and twelve-month horizons. The random forest's improvement over the Phillips curve is significant at the 1 percent level at the one-year horizon and at the 5 percent level at the six-month horizon according to the Diebold–Mariano test. Gradient boosting is also significantly more accurate than the benchmark at the one-year horizon, while the gains of linear data-rich methods are significant only at the 10 percent level or not at all. The random forest is the only model included in the 90 percent model confidence set at the twelve-month horizon; at six months the set also includes gradient boosting.",
            "The direct comparison between the random forest and the elastic net, which uses exactly the same predictors, is informative about H2. The random forest is more accurate by about 10 percent at the one-year horizon, and the difference is significant at the 5 percent level. The gain of machine learning over the benchmark thus reflects more than access to additional predictors: the nonlinear structure of the forest adds forecasting power over a linear model with the same information.",
          ],
          table: {
            id: "tab-tests",
            caption: "Table 3. Tests of equal predictive accuracy and model confidence set",
            columns: ["Model", "DM vs. PC, h = 6", "DM vs. PC, h = 12", "MCS p-value, h = 6", "MCS p-value, h = 12"],
            rows: [
              ["Random walk", "1.21", "1.48", "0.02", "0.01"],
              ["Autoregression", "0.84", "1.12", "0.03", "0.02"],
              ["Factor-augmented AR", "−1.02", "−1.39", "0.06", "0.04"],
              ["Lasso", "−1.10", "−1.58", "0.06", "0.05"],
              ["Elastic net", "−1.33", "−1.71*", "0.08", "0.06"],
              ["Gradient boosting", "−2.06**", "−2.41**", "0.47", "0.08"],
              ["Random forest", "−2.18**", "−2.87***", "1.00", "1.00"],
              ["Random forest vs. elastic net", "−1.64", "−2.09**", "", ""],
            ],
            note: "DM = Diebold–Mariano statistic for equal mean squared forecast error relative to the Phillips-curve (PC) benchmark, computed with Newey–West standard errors using h − 1 lags; negative values indicate that the model is more accurate than the benchmark. For nested models the Clark–West adjustment is applied. MCS = model confidence set p-values (Hansen, Lunde and Nason, 2011); models with p-values above 0.10 belong to the 90 percent MCS. *** p < 0.01, ** p < 0.05, * p < 0.10.",
          },
        },
        {
          id: "results-time",
          heading: "7.3 Performance over time",
          paragraphs: [
            "Figure 1 plots annual average inflation and the corresponding twelve-month-ahead forecasts of the random forest and the Phillips curve. Both models track the broad movements of inflation, but they differ in two episodes. In 2013–2016 and again in 2019–2020, the Phillips curve repeatedly predicted a return towards the 2 percent target, while the random forest predicted inflation closer to the low realised rates, because it placed more weight on falling import prices and subdued expectations. In 2021–2022, the random forest anticipated a much larger rise in inflation than the Phillips curve, forecasting 3.6 percent for 2022 against 2.6 percent for the benchmark and a realised rate of 5.1 percent. Neither model foresaw the full extent of the surge, but the random forest's error was considerably smaller.",
            "Table 4 confirms this pattern by reporting relative RMSFEs by subperiod. At the one-year horizon, the random forest improves on the benchmark by 11 percent in 2010–2012, by 14 percent in 2013–2019 and by 22 percent in 2020–2022. Linear data-rich models gain much less in the final period, consistent with H3: when large shocks move predictors into regions of the data rarely observed before, the flexible structure of the forest appears to be particularly valuable. The fluctuation test of Giacomini and White {14} rejects the null of constant relative performance at the 10 percent level, with the forest's advantage rising sharply from mid-2021.",
          ],
          figures: [
            {
              id: "fig-forecasts",
              caption: "Figure 1. Realised headline CPI inflation and twelve-month-ahead forecasts, 2010–2022",
              kind: "line",
              xLabels: ["2010", "2011", "2012", "2013", "2014", "2015", "2016", "2017", "2018", "2019", "2020", "2021", "2022"],
              yLabel: "Percent per year",
              series: [
                { name: "Realised inflation", values: [2.9, 4.0, 2.2, 1.3, 1.3, 0.7, 1.0, 1.9, 1.5, 0.4, 0.5, 2.5, 5.1] },
                { name: "Random forest forecast", values: [2.7, 3.4, 2.8, 1.8, 1.5, 1.2, 1.1, 1.6, 1.7, 1.2, 0.8, 1.6, 3.6] },
                { name: "Phillips-curve forecast", values: [2.6, 3.1, 3.0, 2.4, 1.9, 1.8, 1.4, 1.5, 1.8, 1.7, 1.2, 1.0, 2.6] },
              ],
              note: "Annual averages of monthly year-on-year headline CPI inflation and of the corresponding forecasts made twelve months earlier. Forecasts are pseudo-out-of-sample, from models estimated on an expanding window starting in January 2000.",
            },
          ],
          table: {
            id: "tab-subperiods",
            caption: "Table 4. Relative forecast accuracy by subperiod (twelve-month horizon)",
            columns: ["Model", "2010–2012", "2013–2019", "2020–2022", "Full sample"],
            rows: [
              ["Phillips curve (RMSFE, pp)", "1.18", "0.97", "1.64", "1.21"],
              ["Autoregression", "1.04", "1.09", "1.06", "1.07"],
              ["Factor-augmented AR", "0.95", "0.94", "0.96", "0.95"],
              ["Elastic net", "0.92", "0.92", "0.95", "0.93"],
              ["Gradient boosting", "0.91", "0.90", "0.84", "0.88"],
              ["Random forest", "0.89", "0.86", "0.78", "0.84"],
            ],
            note: "The first row reports the RMSFE of the Phillips-curve benchmark in percentage points for forecast targets in each subperiod; other rows report RMSFE ratios relative to the benchmark. Subperiods refer to the dates of forecast targets.",
          },
        },
      ],
    },
    {
      id: "mechanisms",
      heading: "8. Sources of Predictability",
      paragraphs: [
        "Which variables does the random forest use, and does its use of them make economic sense? Figure 2 shows the ten individual predictors with the highest permutation importance at the one-year horizon, expressed as a share of the total importance of all predictors. The single most important predictor is the household one-year-ahead inflation expectation, which accounts for 14.6 percent of total importance. It is followed by import-price inflation in won terms (12.1 percent), the ratio of job openings to jobseekers (8.7 percent) and lagged headline inflation (8.1 percent). Oil prices, the won–dollar exchange rate, core inflation, producer prices, wage growth and money growth complete the top ten.",
        "Table 5 aggregates importance to predictor groups using both the permutation and the SHAP measures. The two measures give a consistent picture. Inflation expectations account for 21 to 23 percent of total importance, external prices — import prices, the exchange rate and commodity prices — for 25 to 27 percent, and labour-market tightness for 13 to 15 percent. These three groups together account for between 60 and 63 percent of total importance, while real activity, money and credit, financial variables and sentiment indicators each contribute relatively little. The random forest therefore relies heavily on precisely the variables emphasised by the expectations-augmented, open-economy Phillips curve [17][20].",
      ],
      figures: [
        {
          id: "fig-importance",
          caption: "Figure 2. Ten most important predictors in the random-forest model (twelve-month horizon)",
          kind: "bar",
          xLabels: ["Household exp.", "Import prices", "Job-openings ratio", "Lagged CPI", "Oil price", "KRW/USD", "Core CPI", "PPI", "Wage growth", "M2 growth"],
          yLabel: "Share of total permutation importance (%)",
          series: [{ name: "Permutation importance", values: [14.6, 12.1, 8.7, 8.1, 6.4, 5.2, 4.9, 4.3, 3.6, 2.1] }],
          note: "Permutation importance is the increase in out-of-sample mean squared forecast error when the predictor's values are randomly permuted, averaged over 50 permutations and over all forecast origins, and expressed as a percentage of the sum across all 124 predictors.",
        },
      ],
      subsections: [
        {
          id: "mechanisms-importance",
          heading: "8.1 Importance by predictor group",
          paragraphs: [
            "The importance of expectations is consistent with the evidence that household expectations carry information about future inflation beyond that contained in past inflation and slack [16][17]. In Korea, household expectations respond strongly to energy prices and to highly visible items, which makes them a useful summary of cost pressures as perceived by price and wage setters [27]. The importance of import prices reflects Korea's openness: the forest effectively learns the timing and size of the pass-through from import prices to consumer prices, which in our sample is stronger and faster when the won depreciates.",
          ],
          table: {
            id: "tab-importance",
            caption: "Table 5. Variable importance by predictor group (twelve-month horizon)",
            columns: ["Predictor group", "Permutation (%)", "SHAP (%)", "Rank (permutation)"],
            rows: [
              ["Inflation expectations", "22.8", "21.4", "2"],
              ["External prices and exchange rates", "26.6", "25.1", "1"],
              ["Labour-market tightness", "13.4", "14.7", "3"],
              ["Consumer and producer prices", "12.9", "13.6", "4"],
              ["Real activity", "7.2", "7.9", "5"],
              ["Money and credit", "5.3", "5.6", "6"],
              ["Interest rates and spreads", "4.8", "4.5", "7"],
              ["Housing", "3.9", "4.1", "8"],
              ["Sentiment surveys", "3.1", "3.1", "9"],
              ["Expectations + external + labour", "62.8", "61.2", ""],
            ],
            note: "Shares of total importance aggregated over predictors in each group. SHAP = mean absolute Shapley additive explanation value over the evaluation sample (Lundberg and Lee, 2017). External prices include import and export prices, commodity prices and exchange rates; labour-market tightness includes the unemployment rate and gap, the job-openings ratio, employment growth and wage growth.",
          },
        },
        {
          id: "mechanisms-nonlinear",
          heading: "8.2 Nonlinearity and interactions",
          paragraphs: [
            "Partial-dependence and SHAP interaction plots reveal two important nonlinearities. First, the effect of the job-openings ratio on forecast inflation is close to zero when the ratio is below its historical median and becomes steeply positive above the 75th percentile. This is consistent with a convex Phillips curve that is flat when labour markets are slack and steep when they are tight [19], and it helps explain why the forest anticipated the rise in inflation in 2021–2022, when the job-openings ratio reached its highest level since the series began. Second, the effect of import prices interacts with the exchange rate: a given rise in import prices in won terms raises forecast inflation by roughly 50 percent more when it is accompanied by won depreciation than when it reflects foreign-currency price increases alone, consistent with evidence that pass-through depends on the source of the shock [20].",
            "To quantify the contribution of these nonlinearities, we estimate a linear model that adds to the elastic-net predictors the two interaction terms suggested by the forest: the job-openings ratio interacted with an indicator for values above its 75th percentile, and import-price inflation interacted with won depreciation. This augmented linear model closes about half of the gap between the elastic net and the random forest at the one-year horizon, with a relative RMSFE of 0.89. The remaining gap reflects more complex interactions that are difficult to specify by hand, which illustrates the value of letting the data determine the functional form [6][24].",
          ],
        },
      ],
    },
    {
      id: "robustness",
      heading: "9. Robustness",
      paragraphs: [
        "Table 6 reports the relative RMSFE of the random forest at the six- and twelve-month horizons under a range of alternative choices. Using a rolling rather than expanding estimation window of 120 months slightly reduces the forest's advantage, to 14 percent at the one-year horizon, probably because the rolling window discards information about episodes of high inflation in the early 2000s. Measuring accuracy relative to the AR rather than the Phillips curve increases the forest's apparent gain, since the AR is the weaker benchmark. When the target is core inflation, excluding food and energy, the improvement over the corresponding Phillips curve is smaller, at 11 percent, consistent with the greater importance of external prices for headline inflation.",
        "A particular concern for forecasting exercises is the use of revised data that would not have been available to forecasters in real time. We assembled real-time vintages for the main revised series — industrial production, employment, the unemployment gap and the monetary aggregates — from archived releases. Using these vintages reduces the accuracy of all models slightly, but the random forest's improvement over the Phillips curve at the one-year horizon remains 15 percent. Results are also robust to fixing hyperparameters at their full-sample cross-validated values, to restricting the predictor set to the 40 series with the longest history, and to excluding the pandemic period from the evaluation sample. Excluding 2020–2022 reduces the forest's gain to 13 percent, confirming that the advantage is not driven solely by the most recent surge.",
      ],
      table: {
        id: "tab-robustness",
        caption: "Table 6. Robustness of the random forest's forecast accuracy",
        columns: ["Specification", "Relative RMSFE, h = 6", "Relative RMSFE, h = 12", "DM, h = 12"],
        rows: [
          ["Baseline", "0.90", "0.84", "−2.87***"],
          ["Rolling 120-month window", "0.91", "0.86", "−2.44**"],
          ["Benchmark: autoregression", "0.86", "0.79", "−3.12***"],
          ["Target: core inflation", "0.93", "0.89", "−2.01**"],
          ["Real-time data vintages", "0.91", "0.85", "−2.63***"],
          ["Fixed hyperparameters", "0.90", "0.85", "−2.70***"],
          ["40 longest-history predictors", "0.92", "0.87", "−2.29**"],
          ["Excluding 2020–2022 targets", "0.92", "0.87", "−2.12**"],
          ["1,000 trees", "0.90", "0.84", "−2.88***"],
        ],
        note: "RMSFE of the random forest relative to the Phillips-curve benchmark (except where stated) under each alternative specification. DM = Diebold–Mariano statistic with Newey–West standard errors. *** p < 0.01, ** p < 0.05, * p < 0.10.",
      },
    },
    {
      id: "discussion",
      heading: "10. Discussion and Policy Implications",
      paragraphs: [
        "Our results have several implications for central-bank forecasting. First, machine-learning models can provide a useful complement to the structural and semi-structural models that dominate central-bank forecasting systems. The random forest's improvement of approximately 16 percent at the one-year horizon is economically meaningful: it corresponds to a reduction in the RMSFE of about 0.2 percentage points, which is large relative to the typical size of policy-relevant deviations of inflation from target. Moreover, the gains are largest when they matter most — in periods of large shocks, when linear models anchored on historical relationships tend to underpredict changes in inflation.",
        "Second, the models need not be black boxes. Variable-importance and Shapley-value decompositions show that the random forest relies on economically interpretable predictors — expectations, import prices and labour-market tightness — and that it allows their effects to vary in ways consistent with economic theory. Such decompositions can be used to build a narrative around the forecast, explaining for example how much of a projected rise in inflation reflects external cost pressures rather than domestic demand. This is essential for communicating forecasts to policymakers and the public [23][24].",
        "Third, practical implementation requires care. Machine-learning models are sensitive to the composition and quality of the data, and forecasts can shift when new predictors are added or data are revised. A sensible approach is to use machine-learning forecasts alongside, rather than instead of, existing models, to monitor their decompositions over time and to combine them with judgement. As an illustration, the random forest estimated with the January 2023 vintage projects headline inflation of 3.5 percent for 2023 as a whole, with inflation declining from around 5 percent in early 2023 to about 3 percent by the end of the year as import-price pressures fade, while the Phillips curve projects 2.9 percent. The difference stems mainly from the forest's greater weight on still-elevated household expectations and the tight labour market. Whether these projections prove accurate will be an informative out-of-sample test.",
        "Finally, our results bear on the debate about the Phillips curve. The success of a model that relies heavily on labour-market tightness, but allows its effect to be nonlinear, suggests that the Phillips curve is not dead but state-dependent [19]. A linear Phillips curve estimated over a long period of slack will underestimate the inflationary consequences of very tight labour markets, as many forecasters discovered in 2021–2022.",
      ],
    },
    {
      id: "conclusion",
      heading: "11. Conclusion",
      paragraphs: [
        "We have compared machine-learning models with standard Phillips-curve benchmarks for forecasting Korean headline CPI inflation over 2010–2023. A random forest using 124 macroeconomic and financial predictors achieves the lowest out-of-sample RMSFE at all horizons beyond one month and improves on the Phillips curve by approximately 16 percent at the one-year horizon. The gain is statistically significant, robust to real-time data and alternative specifications, and largest during the 2020–2022 period of large shocks. The forest relies heavily on inflation expectations, import prices and labour-market tightness, and much of its advantage over linear models stems from nonlinear effects of labour-market tightness and from the interaction between import prices and the exchange rate.",
        "These findings suggest that machine-learning approaches can be valuable tools for policy institutions, provided they are implemented transparently and combined with economic judgement. Future work could extend the analysis to density forecasts, which matter for assessing risks around the inflation outlook, to disaggregated components of the CPI, and to other small open economies in Asia with similar exposure to external price shocks. Combining machine-learning methods with structural models, for example by using forest-based decompositions to inform the judgemental adjustments applied to model-based projections, is another promising avenue.",
      ],
    },
    {
      id: "appendix",
      heading: "Appendix A. Data Transformations and Model Details",
      paragraphs: [
        "Transformations. Price indices, monetary aggregates, credit, activity measures and housing prices enter as twelve-month log differences and as one-month log differences. Interest rates, survey balances and the unemployment rate enter in levels and as one-month differences. The job-openings ratio, spreads and expectations enter in levels. Each predictor also enters with three additional monthly lags, so that the linear machine-learning models consider 496 regressors in total. All predictors are standardised within each estimation window using only data available at the forecast origin.",
        "Phillips-curve benchmark. The benchmark regresses π(t+h) on year-on-year inflation at t and t−3, the household one-year expectation, the real-time unemployment gap and twelve-month import-price inflation in won terms. Coefficients are re-estimated each month by ordinary least squares. Adding the job-openings ratio to the benchmark reduces its RMSFE at the one-year horizon by 2 percent and does not affect our conclusions.",
        "Random forest and boosting. The random forest uses 500 trees grown on bootstrap samples drawn in blocks of twelve months to preserve serial dependence. The share of predictors considered at each split is chosen from {0.2, 0.33, 0.5} and the minimum leaf size from {3, 5, 10, 20, 40}. Gradient boosting uses shallow trees of depth two to four, a learning rate chosen from {0.01, 0.05, 0.1} and early stopping on the validation sample [11][26].",
        "Inference. Diebold–Mariano statistics use Newey–West standard errors with h − 1 lags and a standard small-sample correction [12]. Model confidence sets use the range statistic with a block bootstrap of 5,000 replications and a block length of twelve months [15].",
      ],
    },
  ],
};
