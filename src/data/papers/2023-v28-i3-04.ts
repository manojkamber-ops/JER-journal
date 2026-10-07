// Vol. 28, No. 3 (July 2023) — full text for an article defined in journal.ts (sample content).
import type { FulltextSpec } from "../paper-spec";

export const fulltext: FulltextSpec = {
  id: "2023-v28-i3-04",
  acknowledgments:
    "We thank seminar participants at Hanyang University, the Korea Development Institute and the Bank of Korea, two anonymous referees and the handling Associate Editor for helpful comments. We are grateful to staff of the Korea Customs Service and Statistics Korea for clarifications on release calendars. The views expressed are those of the authors and do not necessarily reflect those of the Korea Development Institute. All errors are our own.",
  dataAvailability:
    "All indicators are drawn from publicly available sources: the Economic Statistics System of the Bank of Korea, the Korean Statistical Information Service of Statistics Korea, the Korea Customs Service and international databases. Official current-quarter projections were compiled from published Bank of Korea documents. The assembled data set, the stylised release calendar, the real-time vintages used in Section 9 and replication code are available from the corresponding author.",
  editorialNote:
    "Min-Jae Choi and Hyun-Ju Yang show that a stacked ensemble of elastic-net, random-forest and gradient-boosting models nowcasts Korean quarterly GDP growth with a mean squared forecast error about 18 percent lower than both the Bank of Korea's official nowcast and a dynamic-factor benchmark over 2018–2023, with survey-based indicators and high-frequency trade data contributing disproportionately to its accuracy.",
  refs: [
    /* 1 */ "Giannone, D., Reichlin, L., & Small, D. (2008). Nowcasting: The real-time informational content of macroeconomic data. Journal of Monetary Economics, 55(4), 665–676.",
    /* 2 */ "Bańbura, M., Giannone, D., Modugno, M., & Reichlin, L. (2013). Now-casting and the real-time data flow. In G. Elliott & A. Timmermann (Eds.), Handbook of Economic Forecasting (Vol. 2A, pp. 195–237). Amsterdam: Elsevier.",
    /* 3 */ "Ghysels, E., Sinko, A., & Valkanov, R. (2007). MIDAS regressions: Further results and new directions. Econometric Reviews, 26(1), 53–90.",
    /* 4 */ "Clements, M. P., & Galvão, A. B. (2008). Macroeconomic forecasting with mixed-frequency data: Forecasting output growth in the United States. Journal of Business & Economic Statistics, 26(4), 546–554.",
    /* 5 */ "Foroni, C., Marcellino, M., & Schumacher, C. (2015). Unrestricted mixed data sampling (MIDAS): MIDAS regressions with unrestricted lag polynomials. Journal of the Royal Statistical Society: Series A, 178(1), 57–82.",
    /* 6 */ "Mariano, R. S., & Murasawa, Y. (2003). A new coincident index of business cycles based on monthly and quarterly series. Journal of Applied Econometrics, 18(4), 427–443.",
    /* 7 */ "Bańbura, M., & Modugno, M. (2014). Maximum likelihood estimation of factor models on datasets with arbitrary pattern of missing data. Journal of Applied Econometrics, 29(1), 133–160.",
    /* 8 */ "Stock, J. H., & Watson, M. W. (2002). Forecasting using principal components from a large number of predictors. Journal of the American Statistical Association, 97(460), 1167–1179.",
    /* 9 */ "Doz, C., Giannone, D., & Reichlin, L. (2011). A two-step estimator for large approximate dynamic factor models based on Kalman filtering. Journal of Econometrics, 164(1), 188–205.",
    /* 10 */ "Zou, H., & Hastie, T. (2005). Regularization and variable selection via the elastic net. Journal of the Royal Statistical Society: Series B, 67(2), 301–320.",
    /* 11 */ "Breiman, L. (2001). Random forests. Machine Learning, 45(1), 5–32.",
    /* 12 */ "Friedman, J. H. (2001). Greedy function approximation: A gradient boosting machine. Annals of Statistics, 29(5), 1189–1232.",
    /* 13 */ "Wolpert, D. H. (1992). Stacked generalization. Neural Networks, 5(2), 241–259.",
    /* 14 */ "Breiman, L. (1996). Stacked regressions. Machine Learning, 24(1), 49–64.",
    /* 15 */ "Bates, J. M., & Granger, C. W. J. (1969). The combination of forecasts. Operational Research Quarterly, 20(4), 451–468.",
    /* 16 */ "Timmermann, A. (2006). Forecast combinations. In G. Elliott, C. W. J. Granger, & A. Timmermann (Eds.), Handbook of Economic Forecasting (Vol. 1, pp. 135–196). Amsterdam: Elsevier.",
    /* 17 */ "Diebold, F. X., & Mariano, R. S. (1995). Comparing predictive accuracy. Journal of Business & Economic Statistics, 13(3), 253–263.",
    /* 18 */ "Harvey, D., Leybourne, S., & Newbold, P. (1997). Testing the equality of prediction mean squared errors. International Journal of Forecasting, 13(2), 281–291.",
    /* 19 */ "Hansen, P. R., Lunde, A., & Nason, J. M. (2011). The model confidence set. Econometrica, 79(2), 453–497.",
    /* 20 */ "Goulet Coulombe, P., Leroux, M., Stevanovic, D., & Surprenant, S. (2022). How is machine learning useful for macroeconomic forecasting? Journal of Applied Econometrics, 37(5), 920–964.",
    /* 21 */ "Medeiros, M. C., Vasconcelos, G. F. R., Veiga, Á., & Zilberman, E. (2021). Forecasting inflation in a data-rich environment: The benefits of machine learning methods. Journal of Business & Economic Statistics, 39(1), 98–119.",
    /* 22 */ "Richardson, A., van Florenstein Mulder, T., & Vehbi, T. (2021). Nowcasting GDP using machine-learning algorithms: A real-time assessment. International Journal of Forecasting, 37(2), 941–948.",
    /* 23 */ "Lundberg, S. M., & Lee, S.-I. (2017). A unified approach to interpreting model predictions. Advances in Neural Information Processing Systems, 30, 4765–4774.",
    /* 24 */ "Croushore, D., & Stark, T. (2001). A real-time data set for macroeconomists. Journal of Econometrics, 105(1), 111–130.",
    /* 25 */ "Bok, B., Caratelli, D., Giannone, D., Sbordone, A. M., & Tambalotti, A. (2018). Macroeconomic nowcasting and forecasting with big data. Annual Review of Economics, 10, 615–643.",
    /* 26 */ "Lahiri, K., & Monokroussos, G. (2013). Nowcasting US GDP: The role of ISM business surveys. International Journal of Forecasting, 29(4), 644–658.",
    /* 27 */ "Hastie, T., Tibshirani, R., & Friedman, J. (2009). The elements of statistical learning: Data mining, inference, and prediction (2nd ed.). New York: Springer.",
    /* 28 */ "Varian, H. R. (2014). Big data: New tricks for econometrics. Journal of Economic Perspectives, 28(2), 3–28.",
    /* 29 */ { jer: "2023-v28-i1-04" },
    /* 30 */ { jer: "2021-v26-i2-04" },
  ],
  body: [
    {
      id: "introduction",
      heading: "1. Introduction",
      paragraphs: [
        "Monetary and fiscal authorities must take decisions before they know the current state of the economy. In Korea, the advance estimate of quarterly real GDP is published about four weeks after the end of the reference quarter, and the Monetary Policy Board meets eight times a year, so that at most meetings the most recent official reading of aggregate output refers to a quarter that ended between one and four months earlier. In the meantime, a large and heterogeneous flow of monthly, weekly and daily indicators — business and consumer surveys, export statistics, industrial production, card spending and financial prices — carries information about the quarter in progress. Nowcasting, the prediction of the present, the very recent past and the very near future, aims to extract that information systematically [1][2].",
        "The standard tools for this task are bridge equations, mixed-data sampling (MIDAS) regressions and dynamic factor models (DFMs). DFMs in particular have become the workhorse of central-bank nowcasting because they handle large panels, mixed frequencies and the ragged edge of the data flow within a single coherent framework [1][7][9]. They are, however, linear and assume that a few common factors summarise the co-movement among indicators. Machine-learning methods relax both restrictions. Regularised regressions can exploit many predictors without the factor structure, while tree-based methods such as random forests and gradient boosting can capture nonlinearities and interactions that matter most when the economy is hit by large shocks [20][21]. Evidence that these features improve nowcasts of GDP growth in real time remains limited and comes mainly from large advanced economies [22][25].",
        "This paper develops a nowcasting model for Korean quarterly GDP growth that combines mixed-frequency macroeconomic indicators with machine-learning techniques. We assemble a panel of 112 monthly and higher-frequency indicators from 2003 onwards and construct a stylised release calendar that reproduces the information available at four nowcast dates in each quarter. For each date we train an elastic net, a random forest and a gradient-boosting model on features that arrange high-frequency observations by their position within the quarter, in the spirit of unrestricted MIDAS [5], and combine the three models in a stacked ensemble whose weights are estimated from their past out-of-sample performance [13][14]. We evaluate pseudo-real-time nowcasts for the 21 target quarters from 2018Q1 to 2023Q1 against an autoregression, bridge equations, an unrestricted MIDAS regression, a DFM estimated by maximum likelihood and the Bank of Korea's official current-quarter nowcast.",
        "Our main finding is that the stacked ensemble outperforms both the Bank of Korea's official nowcast and the dynamic-factor benchmark, reducing the mean squared forecast error (MSFE) by approximately 18 percent over 2018–2023 when nowcasts are pooled across the four dates. The gain is largest early in the quarter, when hard data on production and spending are not yet available: at the first nowcast date the ensemble's MSFE is 20 percent below that of the DFM and 24 percent below that of the official nowcast. The improvement is statistically significant, holds both inside and outside the pandemic recession of 2020, and is robust to the use of real-time data vintages. Each of the three base learners improves on the DFM on its own, but the ensemble is more accurate than any of them, confirming the value of combining models with different strengths [15][16].",
        "Variable-importance analysis based on Shapley additive explanations [23] shows that survey-based indicators and high-frequency trade data contribute disproportionately to the model's forecast accuracy. These two groups make up 29 percent of the indicator panel but account for about 55 percent of total importance. The ten-day and twenty-day export figures published by the Korea Customs Service are the single most important input, followed by the Bank of Korea's manufacturing business survey and the consumer sentiment index. Removing either group from the ensemble eliminates most of its advantage over the DFM. The result reflects both the timeliness of these indicators and Korea's position as a highly export-dependent economy, in which external demand shocks transmit rapidly to manufacturing output and investment.",
        "The paper extends our earlier work on forecasting Korean inflation with machine learning [29] from prices to real activity and from direct forecasting to the mixed-frequency nowcasting problem. The remainder is organised as follows. Section 2 describes the institutional background, Section 3 reviews related literature and Section 4 sets out the framework and hypotheses. Sections 5 and 6 describe the data and the empirical strategy. Section 7 presents the main results, Section 8 examines the sources of accuracy and Section 9 reports robustness checks. Section 10 discusses practical implementation considerations for central-bank nowcasting and Section 11 concludes.",
      ],
    },
    {
      id: "background",
      heading: "2. Institutional Background",
      paragraphs: [
        "The Bank of Korea compiles the national accounts and publishes the advance estimate of quarterly real GDP roughly 25 to 28 days after the end of the reference quarter, followed by a preliminary estimate about five weeks later and annual benchmark revisions. The headline figure is the quarter-on-quarter growth rate of seasonally adjusted real GDP, which is the target of this paper. Revisions between the advance and the preliminary estimate are generally small, with a mean absolute revision of about 0.1 percentage points over our sample, but annual revisions can be larger, particularly around turning points.",
        "Official assessments of current-quarter activity enter the policy process in several ways. The Bank publishes a full Economic Outlook twice a year and an update in the intervening quarters, and its staff present an assessment of recent economic developments at each Monetary Policy Board meeting, summarised in the published minutes. These documents contain, explicitly or implicitly, the Bank's official estimate of growth in the current quarter. The estimate is built from a suite of models, including bridge equations and factor models, combined with sectoral information and staff judgement. Because the official figure is updated only at irregular intervals, we use the most recent published value available at each of our nowcast dates, as described in Section 5.",
        "Korea's economic structure makes the nowcasting problem distinctive. Exports of goods and services amount to around 40 percent of GDP and are concentrated in semiconductors, automobiles, petrochemicals and ships, so that external demand and the global electronics cycle are dominant sources of fluctuation. At the same time, Korea produces unusually timely trade statistics: the Korea Customs Service publishes the value of exports and imports for the first ten and the first twenty days of each month, around the 11th and 21st, and the full monthly figure on the first day of the following month. Business and consumer surveys conducted by the Bank of Korea are released in the last week of the reference month. Hard indicators such as industrial and service production, by contrast, are published by Statistics Korea about four weeks after the reference month. The resulting data flow is strongly front-loaded in soft and trade data and back-loaded in production data.",
        "The period we study was unusually turbulent. After growth of around 0.6 to 1.0 percent per quarter in 2018, the economy contracted in 2019Q1 as the semiconductor cycle turned, recovered during the rest of 2019, and then suffered its sharpest contraction since 2008 in the first half of 2020, when output fell by 1.4 and 3.3 percent in successive quarters according to the advance estimates. A rapid export-led recovery followed in 2020Q3–2021Q2. Growth then slowed through 2022 as global demand weakened, monetary policy tightened and semiconductor prices fell, culminating in a contraction of 0.4 percent in 2022Q4 and a modest rebound of 0.3 percent in 2023Q1.",
      ],
    },
    {
      id: "literature",
      heading: "3. Related Literature",
      paragraphs: [
        "Our paper builds first on the literature on nowcasting with large data sets. Giannone, Reichlin and Small {1} showed that a DFM estimated on a large monthly panel and updated as each new release arrives produces nowcasts of US GDP growth comparable to those of professional forecasters and that the precision of the nowcast increases steadily with the information flow. Bańbura et al. {2} survey this approach and its extensions. Doz, Giannone and Reichlin {9} provide a two-step estimator combining principal components [8] with the Kalman filter, and Bańbura and Modugno {7} develop maximum-likelihood estimation that handles arbitrary patterns of missing data, which we use for our benchmark. Mariano and Murasawa {6} show how to link monthly and quarterly series within a state-space model, a device that underlies most mixed-frequency DFMs.",
        "A second strand uses regression-based approaches to mixed frequencies. MIDAS regressions parameterise the weights on high-frequency lags with a small number of parameters [3], and Clements and Galvão {4} show that they improve forecasts of US output growth relative to quarterly models. Foroni, Marcellino and Schumacher {5} propose unrestricted MIDAS, in which each high-frequency lag has its own coefficient, and show that it performs well when the frequency mismatch is small, as in the monthly–quarterly case. Our machine-learning models use exactly this unrestricted arrangement of features, which makes them natural mixed-frequency extensions of standard regularised and tree-based learners.",
        "A third strand evaluates machine-learning methods for macroeconomic prediction. Medeiros et al. {21} find that random forests outperform a wide range of competitors in forecasting US inflation, and Goulet Coulombe et al. {20} show that nonlinearity is the most useful feature of machine learning for macroeconomic forecasting, particularly in periods of high uncertainty. Richardson, van Florenstein Mulder and Vehbi {22} provide a real-time evaluation for New Zealand GDP and find that several machine-learning algorithms improve on a statistical benchmark, with gains from averaging across algorithms. Bok et al. {25} review nowcasting with big data and stress the importance of evaluating models in the real-time setting in which they are used. More broadly, combining forecasts from different models has long been known to improve accuracy [15][16], and stacking provides a principled way to estimate combination weights from out-of-sample performance [13][14].",
        "A fourth strand examines which data matter for nowcasting. Survey indicators are timely and are often found to contribute much of the accuracy of nowcasts early in the quarter, before hard data are available [1][26]. Lahiri and Monokroussos {26} show that business surveys improve US GDP nowcasts mainly in the first part of the quarter. For Korea, recent work in this journal shows that internet search data improved real-time unemployment nowcasts during the pandemic but added little in normal times [30], and our own earlier work finds that machine-learning forecasts of Korean inflation rely heavily on expectations and import prices [29]. We contribute by evaluating machine-learning nowcasts of Korean GDP against both a state-of-the-art DFM and the official nowcast, and by quantifying the contribution of soft and trade data in a nonlinear framework.",
      ],
    },
    {
      id: "framework",
      heading: "4. Framework and Hypotheses",
      paragraphs: [
        "Let y(q) denote quarter-on-quarter growth of seasonally adjusted real GDP in quarter q, and let Ω(q,v) denote the information set available at nowcast date v for quarter q. We consider four nowcast dates per quarter, labelled M1, M2, M3 and M+1, set on the last business day of each month of the quarter and on the 22nd day of the month following the quarter, a few days before the advance GDP release. A nowcast is an estimate of E[y(q) | Ω(q,v)]. Because indicators are released with different lags, Ω(q,v) contains a different set of observations at each date: at M1 it includes surveys and trade data for the first month of the quarter but no production data for that month; by M+1 it contains almost the complete quarter.",
        "The DFM benchmark assumes that each standardised indicator x(i,t) loads on a small number of common factors f(t) that follow a vector autoregression, plus an idiosyncratic component, and that quarterly GDP growth is linked to the monthly factors through the aggregation scheme of Mariano and Murasawa {6}. Given parameter estimates, the Kalman filter delivers nowcasts that update optimally as each new observation arrives [2][7]. Its strengths are parsimony and a coherent treatment of the ragged edge; its main restrictions are linearity and the assumption that the factors capture all predictive information.",
        "The machine-learning approach instead specifies, for each nowcast date v, a direct mapping y(q) = g(v)(z(q,v)) + e(q,v), where z(q,v) stacks all observations available at date v in unrestricted MIDAS form: each monthly indicator contributes up to three features, one for each month of the quarter that has been released, and the ten- and twenty-day export figures contribute additional features for the latest month. The function g(v) is estimated separately for each date by the elastic net [10], the random forest [11] and gradient boosting [12]. A stacked ensemble then forms a weighted average of the three base nowcasts, with non-negative weights estimated by regressing realised growth on past out-of-sample nowcasts [14].",
        "We test three hypotheses. H1: the stacked ensemble produces more accurate nowcasts than both the DFM and the official nowcast over the evaluation period. H2: the ensemble is more accurate than each of its base learners, so that the gains are not attributable to any single algorithm. H3: the ensemble's advantage is largest early in the quarter, when timely soft and trade indicators carry most of the available information and nonlinear combinations of them are most valuable. Support for H3 would point to the efficient use of timely indicators, rather than superior processing of hard data, as the main source of improvement.",
      ],
    },
    {
      id: "data",
      heading: "5. Data",
      paragraphs: [
        "We assemble a panel of 112 indicators observed monthly, or at higher frequency and aggregated to monthly or intra-monthly observations, from January 2003 to March 2023. The target is the advance estimate of quarter-on-quarter real GDP growth for each quarter; the training sample starts in 2003Q1, so that 60 quarters are available when the first evaluation nowcast is produced.",
      ],
      subsections: [
        {
          id: "data-indicators",
          heading: "5.1 Indicators and release calendar",
          paragraphs: [
            "Table 1 summarises the indicators by group. Survey-based indicators comprise the Bank of Korea's business survey index (BSI) for manufacturing and non-manufacturing firms, both current conditions and outlook, the composite consumer sentiment index and its components, and the economic sentiment index. High-frequency trade data comprise the ten-day, twenty-day and full-month values of exports and imports, together with exports of semiconductors, automobiles and petrochemicals and imports of capital goods. Hard data include industrial production, shipments and inventories, service-industry production, retail sales, construction completed and machinery orders. The remaining groups cover card spending and consumption, the labour market, financial prices and credit, housing and construction permits, and global indicators such as world trade volumes and the US and Chinese purchasing managers' indices.",
            "Each series is seasonally adjusted where necessary and transformed to stationarity, using month-on-month or three-month growth rates for quantities and levels or differences for survey balances and spreads, following standard practice for large macroeconomic panels [8]. We construct a stylised release calendar that records, for each indicator, the typical day of publication relative to the reference period. At each nowcast date the panel is truncated to the observations that would have been published by then, reproducing the ragged edge faced by a forecaster in real time. Revisions to the indicators themselves are ignored in the baseline but addressed with real-time vintages in Section 9 [24].",
          ],
          table: {
            id: "tab-data",
            caption: "Table 1. Indicator groups, number of series and publication lags",
            columns: ["Group", "Series", "Examples", "Typical publication lag"],
            rows: [
              ["Survey-based indicators", "18", "Manufacturing BSI, consumer sentiment, ESI", "End of reference month"],
              ["High-frequency trade data", "14", "10-day and 20-day exports, semiconductor exports", "11th and 21st of month; 1st of next month"],
              ["Production and hard activity", "22", "Industrial production, service production, retail sales", "About 30 days"],
              ["Consumption and card spending", "12", "Card approvals, department-store sales, car sales", "10–30 days"],
              ["Labour market", "12", "Employment, unemployment rate, hours worked", "About 15 days"],
              ["Financial prices and credit", "16", "KOSPI, term spread, corporate bond spread, loans", "Daily to 15 days"],
              ["Housing and construction", "10", "Building permits, construction orders, house prices", "15–40 days"],
              ["Global indicators", "8", "World trade volume, US and China PMIs", "1–45 days"],
              ["Total", "112", "", ""],
            ],
            note: "Monthly or intra-monthly observations, January 2003 to March 2023. BSI = business survey index; ESI = economic sentiment index; PMI = purchasing managers' index. Publication lags are measured from the end of the reference period and are those of the stylised release calendar used to construct pseudo-real-time information sets.",
          },
        },
        {
          id: "data-official",
          heading: "5.2 The official nowcast and GDP over the evaluation period",
          paragraphs: [
            "The official nowcast is compiled from Bank of Korea publications. For each target quarter and nowcast date we record the most recent published statement of expected current-quarter growth, taken from the Economic Outlook and its updates, the published minutes of the Monetary Policy Board and the Bank's press releases. Where a statement gives a range, we use its midpoint. In 13 of the 84 quarter–date pairs no new figure had been published since the previous date, in which case the previous value is carried forward; this mimics the information that an outside observer would have had. Because staff estimates include judgement and information unavailable to us, the official nowcast is a demanding benchmark, particularly late in the quarter.",
            "Over the 21 evaluation quarters from 2018Q1 to 2023Q1, the advance estimate of GDP growth averaged 0.5 percent per quarter with a standard deviation of 1.0 percentage points. Excluding the pandemic quarters 2020Q1–2021Q2, the standard deviation falls to 0.5 percentage points. Two quarters recorded negative growth outside the pandemic itself, 2019Q1 and 2022Q4, which provide a useful test of the models' ability to anticipate turning points in normal times as well as during an extreme shock.",
          ],
        },
      ],
    },
    {
      id: "strategy",
      heading: "6. Empirical Strategy",
      paragraphs: [
        "We conduct a pseudo-real-time out-of-sample exercise. For each target quarter from 2018Q1 to 2023Q1 and each of the four nowcast dates, every model is re-estimated on an expanding window starting in 2003Q1 using only the information that would have been available at that date, and a nowcast is produced. This yields 84 nowcasts per model.",
      ],
      subsections: [
        {
          id: "strategy-benchmarks",
          heading: "6.1 Benchmark models",
          paragraphs: [
            "We consider five benchmarks. The autoregression (AR) uses one lag of quarterly GDP growth and ignores monthly information. Bridge equations forecast the missing months of each of eight key indicators with univariate autoregressions, aggregate them to quarterly frequency and regress GDP growth on the resulting quarterly values; the final nowcast averages across the eight equations. The unrestricted MIDAS regression uses the same eight indicators in unrestricted form [5]. The DFM uses all 112 indicators with two common factors following a VAR(2), estimated by maximum likelihood with the expectation–maximisation algorithm of Bańbura and Modugno {7}; the number of factors is chosen by information criteria in the training sample and held fixed. The fifth benchmark is the official nowcast described in Section 5.2.",
          ],
        },
        {
          id: "strategy-ml",
          heading: "6.2 Machine-learning models and stacking",
          paragraphs: [
            "For each nowcast date, the feature vector contains all available unrestricted MIDAS features for the current quarter, the same features for the previous quarter and two lags of GDP growth, giving between about 260 and 400 features depending on the date. The elastic net [10] selects the penalty and mixing parameters by time-series cross-validation over the last 20 quarters of each training window. The random forest [11] grows 1,000 trees, considers one-third of the features at each split and chooses the minimum leaf size from a small grid. Gradient boosting [12] uses trees of depth two or three, a learning rate of 0.05 and early stopping on the validation quarters. With only 60 to 80 training quarters, the shallow trees and heavy regularisation are essential to avoid overfitting [27].",
            "The stacked ensemble combines the three base nowcasts with non-negative weights summing to one, estimated by constrained least squares on the out-of-sample base nowcasts for the preceding 24 quarters [13][14]. To generate these, the base learners are run in pseudo-real time from 2012Q1, so that a full window of out-of-sample predictions is available before the evaluation period begins. Weights are estimated separately for each nowcast date and re-estimated every quarter. Over the evaluation period the average weights are 0.46 on gradient boosting, 0.31 on the random forest and 0.23 on the elastic net, with the elastic net receiving more weight at M+1, when hard data dominate the information set.",
          ],
        },
        {
          id: "strategy-evaluation",
          heading: "6.3 Forecast evaluation",
          paragraphs: [
            "Our main measure of accuracy is the MSFE of each model relative to that of the DFM; a ratio below one indicates a more accurate model. We report results by nowcast date and pooled over the four dates, which gives equal weight to each date and corresponds to the average accuracy experienced by a policymaker who consults the nowcast throughout the quarter. We test equal predictive accuracy using the Diebold–Mariano test [17] with the small-sample correction of Harvey, Leybourne and Newbold {18}; for pooled comparisons the long-run variance accounts for correlation among nowcasts for the same quarter. We also compute the model confidence set (MCS) of Hansen, Lunde and Nason {19}. Variable importance is measured by mean absolute Shapley values [23] and by permutation importance, aggregated to indicator groups.",
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
          heading: "7.1 Nowcast accuracy by model and nowcast date",
          paragraphs: [
            "Table 2 reports the MSFE of each model relative to the DFM at each nowcast date and pooled across dates, together with the DFM's absolute MSFE. Several patterns stand out. First, the accuracy of all models that use monthly information improves steadily through the quarter: the DFM's MSFE falls from 0.52 at M1 to 0.27 at M+1, mirroring the evidence that nowcast precision increases with the data flow [1][2]. The AR, which does not use this information, is far less accurate, with a pooled relative MSFE of 1.86. Second, bridge equations and the MIDAS regression are slightly less accurate than the DFM, by 5 and 2 percent respectively, confirming that the DFM is a strong benchmark. Third, the official nowcast is less accurate than the DFM early in the quarter but more accurate late in the quarter, when it benefits from staff judgement and sectoral information; pooled across dates its MSFE is essentially identical to that of the DFM.",
            "All three machine-learning models improve on the DFM at every nowcast date. Gradient boosting is the most accurate base learner, with a pooled relative MSFE of 0.87, followed by the random forest at 0.89 and the elastic net at 0.93. The stacked ensemble is more accurate still: its pooled relative MSFE of 0.82 corresponds to a reduction in MSFE of approximately 18 percent relative to the DFM and, because the official nowcast and the DFM have the same pooled MSFE, of approximately 18 percent relative to the official nowcast as well. In terms of root mean squared error, the ensemble's pooled error is 0.56 percentage points, against 0.62 for the DFM. The ensemble is also more accurate than an equally weighted average of the three base learners, which achieves 0.85, indicating that the estimated weights add value beyond simple averaging [16].",
            "Consistent with H3, the ensemble's advantage is largest early in the quarter. At M1 its MSFE is 20 percent below that of the DFM and 24 percent below that of the official nowcast; at M+1 the corresponding gains are 14 and 7 percent. Machine learning therefore adds most value when the information set consists mainly of soft and trade indicators, and least when nearly complete hard data for the quarter are available and the official nowcast can draw on staff knowledge of sectoral developments.",
          ],
          table: {
            id: "tab-msfe",
            caption: "Table 2. Out-of-sample nowcast accuracy relative to the dynamic factor model, 2018Q1–2023Q1",
            columns: ["Model", "M1", "M2", "M3", "M+1", "Pooled"],
            rows: [
              ["DFM (MSFE, pp²)", "0.52", "0.41", "0.33", "0.27", "0.38"],
              ["Autoregression", "1.37", "1.73", "2.15", "2.63", "1.86"],
              ["Bridge equations", "1.08", "1.05", "1.03", "1.02", "1.05"],
              ["Unrestricted MIDAS", "1.04", "1.02", "1.01", "1.00", "1.02"],
              ["Bank of Korea official nowcast", "1.05", "1.03", "0.96", "0.92", "1.00"],
              ["Elastic net", "0.95", "0.93", "0.92", "0.92", "0.93"],
              ["Random forest", "0.90", "0.88", "0.89", "0.91", "0.89"],
              ["Gradient boosting", "0.87", "0.86", "0.88", "0.90", "0.87"],
              ["Equal-weight ML average", "0.84", "0.84", "0.86", "0.88", "0.85"],
              ["Stacked ensemble", "0.80", "0.81", "0.83", "0.86", "0.82"],
            ],
            note: "The first row reports the mean squared forecast error (MSFE) of the dynamic factor model (DFM) in squared percentage points of quarter-on-quarter GDP growth. Other rows report the MSFE of each model divided by that of the DFM; values below 1 indicate more accurate nowcasts. M1–M3 = last business day of the first, second and third month of the quarter; M+1 = 22nd day of the following month. Pooled = ratio of MSFEs averaged over the four dates. 21 target quarters (84 nowcasts per model).",
          },
        },
        {
          id: "results-tests",
          heading: "7.2 Statistical significance",
          paragraphs: [
            "Table 3 assesses whether these differences are statistically significant. Pooled across nowcast dates, the ensemble's improvement over the DFM is significant at the 5 percent level, with a corrected Diebold–Mariano statistic of −2.41, and its improvement over the official nowcast is also significant at the 5 percent level. The gains of gradient boosting and the random forest over the DFM are significant at the 5 and 10 percent levels respectively, while those of the elastic net are not significant. At M1 the ensemble's advantage over the official nowcast is significant at the 1 percent level; at M+1 it is not significant. The ensemble is the only model in the 90 percent MCS for pooled nowcasts, and gradient boosting is the only other model with an MCS p-value above 0.05.",
            "The direct comparison between the ensemble and its best base learner bears on H2. The ensemble is about 6 percent more accurate than gradient boosting in pooled terms, and the difference is significant at the 10 percent level. Given only 21 target quarters, the power of these tests is limited, and we regard the consistency of the ranking across dates, subperiods and specifications, documented below, as at least as informative as the individual test statistics.",
          ],
          table: {
            id: "tab-tests",
            caption: "Table 3. Tests of equal predictive accuracy and model confidence set",
            columns: ["Model", "DM vs. DFM, pooled", "DM vs. BoK, pooled", "DM vs. BoK, M1", "MCS p-value, pooled"],
            rows: [
              ["Bridge equations", "0.94", "0.88", "0.61", "0.02"],
              ["Unrestricted MIDAS", "0.47", "0.39", "−0.18", "0.03"],
              ["DFM", "", "0.04", "−0.92", "0.03"],
              ["Bank of Korea official nowcast", "−0.04", "", "", "0.03"],
              ["Elastic net", "−1.29", "−1.12", "−1.83*", "0.04"],
              ["Random forest", "−1.86*", "−1.71*", "−2.24**", "0.05"],
              ["Gradient boosting", "−2.07**", "−1.94*", "−2.51**", "0.08"],
              ["Stacked ensemble", "−2.41**", "−2.18**", "−2.93***", "1.00"],
              ["Ensemble vs. gradient boosting", "−1.69*", "", "", ""],
            ],
            note: "DM = Diebold–Mariano statistic with the Harvey–Leybourne–Newbold small-sample correction for equal MSFE relative to the stated benchmark; negative values indicate that the model is more accurate than the benchmark. Pooled statistics use a long-run variance that allows for correlation among the four nowcasts of the same quarter. BoK = Bank of Korea official nowcast. MCS = model confidence set p-values; models with p-values above 0.10 belong to the 90 percent MCS. *** p < 0.01, ** p < 0.05, * p < 0.10.",
          },
        },
        {
          id: "results-time",
          heading: "7.3 Performance over time",
          paragraphs: [
            "Figure 1 plots the advance estimate of GDP growth together with the end-of-quarter (M3) nowcasts of the ensemble, the DFM and the official nowcast. All three track the broad movements in growth, but they differ at turning points. In 2019Q1, when output contracted by 0.3 percent, the ensemble nowcast fell to 0.4 percent, against 0.5 percent for the DFM and 0.6 percent for the official nowcast, as the ensemble responded strongly to the collapse in semiconductor exports in the early-month trade releases. During the pandemic, the ensemble nowcast for 2020Q2 was −2.2 percent, closer to the realised −3.3 percent than the DFM's −1.7 percent or the official −1.9 percent. In 2022Q4 the ensemble was the only model to anticipate a contraction, nowcasting −0.1 percent, as falling export orders and a sharp deterioration in the manufacturing BSI pulled its forecast down.",
            "Table 4 reports relative MSFEs by subperiod. Because the pandemic quarters dominate squared errors, we distinguish 2018Q1–2019Q4, the pandemic period 2020Q1–2021Q2 and the post-pandemic period 2021Q3–2023Q1. The ensemble is more accurate than the DFM in every subperiod, with gains of 12, 19 and 17 percent respectively. Excluding the pandemic quarters altogether, its pooled MSFE is 15 percent below that of the DFM and 18 percent below that of the official nowcast, which is relatively less accurate outside the pandemic. The gains are therefore not an artefact of a few extreme observations, although the largest absolute error reductions occur in 2020.",
          ],
          figures: [
            {
              id: "fig-nowcasts",
              caption: "Figure 1. Advance GDP growth and end-of-quarter nowcasts, 2018Q1–2023Q1",
              kind: "line",
              xLabels: ["18Q1", "18Q2", "18Q3", "18Q4", "19Q1", "19Q2", "19Q3", "19Q4", "20Q1", "20Q2", "20Q3", "20Q4", "21Q1", "21Q2", "21Q3", "21Q4", "22Q1", "22Q2", "22Q3", "22Q4", "23Q1"],
              yLabel: "Percent, quarter on quarter",
              series: [
                { name: "Advance estimate", values: [1.0, 0.6, 0.6, 1.0, -0.3, 1.1, 0.4, 1.2, -1.4, -3.3, 1.9, 1.1, 1.6, 0.7, 0.3, 1.1, 0.7, 0.7, 0.3, -0.4, 0.3] },
                { name: "Stacked ensemble", values: [0.8, 0.8, 0.6, 0.8, 0.4, 0.8, 0.5, 0.9, -0.6, -2.2, 1.2, 0.9, 1.2, 0.9, 0.5, 0.9, 0.8, 0.5, 0.4, -0.1, 0.2] },
                { name: "Dynamic factor model", values: [0.8, 0.7, 0.7, 0.7, 0.5, 0.7, 0.6, 0.7, -0.2, -1.7, 0.9, 0.7, 0.9, 0.9, 0.6, 0.7, 0.7, 0.6, 0.5, 0.2, 0.1] },
                { name: "Official nowcast", values: [0.9, 0.7, 0.6, 0.8, 0.6, 0.8, 0.5, 0.8, -0.5, -1.9, 1.0, 0.8, 1.1, 0.8, 0.5, 0.9, 0.8, 0.6, 0.4, 0.0, 0.2] },
              ],
              note: "Quarter-on-quarter growth of seasonally adjusted real GDP (advance estimate) and nowcasts made on the last business day of each quarter (M3). Nowcasts are pseudo-real-time, from models estimated on an expanding window starting in 2003Q1. The official nowcast is the most recent published Bank of Korea estimate at the nowcast date.",
            },
          ],
          table: {
            id: "tab-subperiods",
            caption: "Table 4. Relative nowcast accuracy by subperiod (pooled across nowcast dates)",
            columns: ["Model", "2018Q1–2019Q4", "2020Q1–2021Q2", "2021Q3–2023Q1", "Full period"],
            rows: [
              ["DFM (MSFE, pp²)", "0.09", "0.98", "0.21", "0.38"],
              ["Unrestricted MIDAS", "1.01", "1.03", "1.00", "1.02"],
              ["Bank of Korea official nowcast", "1.04", "0.99", "1.03", "1.00"],
              ["Elastic net", "0.95", "0.92", "0.95", "0.93"],
              ["Random forest", "0.93", "0.88", "0.90", "0.89"],
              ["Gradient boosting", "0.91", "0.86", "0.88", "0.87"],
              ["Stacked ensemble", "0.88", "0.81", "0.83", "0.82"],
            ],
            note: "The first row reports the pooled MSFE of the dynamic factor model (DFM) in squared percentage points for target quarters in each subperiod; other rows report MSFE ratios relative to the DFM. The subperiods contain 8, 6 and 7 target quarters respectively.",
          },
        },
      ],
    },
    {
      id: "mechanisms",
      heading: "8. Sources of Accuracy",
      paragraphs: [
        "Which indicators drive the ensemble's nowcasts? Figure 2 shows the ten individual indicators with the largest share of total importance, measured by mean absolute Shapley values of the stacked nowcast and pooled across nowcast dates. The most important single input is the twenty-day export figure, which accounts for 11.8 percent of total importance, followed by the manufacturing BSI (9.6 percent), the consumer sentiment index (7.4 percent) and industrial production (7.1 percent). Full-month exports, service-industry production, the economic sentiment index, card spending, semiconductor exports and imports of capital goods complete the top ten. Six of the ten are survey or trade indicators.",
      ],
      figures: [
        {
          id: "fig-importance",
          caption: "Figure 2. Ten most important indicators in the stacked ensemble (pooled across nowcast dates)",
          kind: "bar",
          xLabels: ["20-day exports", "Manuf. BSI", "Consumer sentiment", "Industrial prod.", "Monthly exports", "Service prod.", "ESI", "Card spending", "Semicond. exports", "Capital-goods imports"],
          yLabel: "Share of total importance (%)",
          series: [{ name: "Mean absolute Shapley value", values: [11.8, 9.6, 7.4, 7.1, 6.5, 6.0, 5.2, 4.4, 4.1, 3.3] }],
          note: "Importance is the mean absolute Shapley additive explanation value of each indicator's features (all within-quarter positions and lags) in the stacked nowcast, averaged over the 84 evaluation nowcasts and expressed as a percentage of the sum over all 112 indicators. BSI = business survey index; ESI = economic sentiment index.",
        },
      ],
      subsections: [
        {
          id: "mechanisms-groups",
          heading: "8.1 Importance by indicator group",
          paragraphs: [
            "Table 5 aggregates importance to indicator groups and compares each group's share of importance with its share of the indicator panel. Survey-based indicators account for 29.4 percent of Shapley importance and 27.8 percent of permutation importance while making up only 16.1 percent of the series; high-frequency trade data account for 26.1 and 27.5 percent while making up 12.5 percent. Together these two groups contribute about 55 percent of total importance, nearly twice their share of the panel. Production and hard activity data contribute in proportion to their number, and the remaining groups — labour, financial, housing and global indicators — contribute much less than their share.",
            "Importance also shifts through the quarter. At M1, surveys and trade data together account for 68 percent of Shapley importance, since hard data for the current quarter are not yet available. By M+1 their share falls to 41 percent, and production data become the largest group. This pattern matches the evidence that soft data matter mainly before hard data are released [1][26] and explains why the ensemble's gains over the official nowcast are concentrated early in the quarter: the ensemble extracts more information from timely indicators than either the linear factor structure of the DFM or the official process, which leans more heavily on hard data and judgement.",
          ],
          table: {
            id: "tab-importance",
            caption: "Table 5. Variable importance by indicator group (pooled across nowcast dates)",
            columns: ["Indicator group", "Share of series (%)", "Shapley (%)", "Permutation (%)", "Shapley, M1 (%)"],
            rows: [
              ["Survey-based indicators", "16.1", "29.4", "27.8", "37.2"],
              ["High-frequency trade data", "12.5", "26.1", "27.5", "30.8"],
              ["Production and hard activity", "19.6", "18.2", "19.0", "6.9"],
              ["Consumption and card spending", "10.7", "8.6", "8.1", "8.3"],
              ["Financial prices and credit", "14.3", "6.1", "5.7", "7.4"],
              ["Labour market", "10.7", "5.3", "5.6", "3.9"],
              ["Housing and construction", "8.9", "3.4", "3.6", "2.6"],
              ["Global indicators", "7.1", "2.9", "2.7", "2.9"],
              ["Surveys + trade data", "28.6", "55.5", "55.3", "68.0"],
            ],
            note: "Shares of total importance aggregated over indicators in each group. Shapley = mean absolute Shapley additive explanation value (Lundberg and Lee, 2017); permutation = increase in out-of-sample MSFE when the group's features are jointly permuted, normalised to sum to 100. The last column restricts the Shapley measure to nowcasts made at the first nowcast date (M1).",
          },
        },
        {
          id: "mechanisms-ablation",
          heading: "8.2 Removing indicator groups and nonlinearity",
          paragraphs: [
            "To assess whether importance translates into accuracy, we re-estimate the full ensemble after removing each group in turn. Removing high-frequency trade data raises the pooled relative MSFE from 0.82 to 0.93, and removing survey indicators raises it to 0.95; removing both yields 1.01, eliminating the advantage over the DFM entirely. Removing any other group changes the relative MSFE by no more than 0.02. Interestingly, re-estimating the DFM without the trade and survey groups worsens its own accuracy by only 4 percent, suggesting that the DFM extracts relatively little of the information in these indicators, possibly because their predictive content is concentrated in nonlinear and state-dependent relationships that a linear factor model cannot represent [20].",
            "Shapley interaction values support this interpretation. The effect of the twenty-day export figure on nowcast growth is roughly linear for moderate changes but becomes markedly steeper for declines of more than 10 percent year on year, and it is amplified when the manufacturing BSI outlook is below its long-run average. In other words, the ensemble treats a fall in exports as more informative when firms also report deteriorating expectations, a combination observed in 2019Q1, 2020Q2 and 2022Q4. A linear elastic net augmented with these two interaction terms closes about half of the gap between the elastic net and the ensemble, echoing our finding for inflation that a few interpretable nonlinearities explain much of the advantage of tree-based methods [29].",
          ],
        },
      ],
    },
    {
      id: "robustness",
      heading: "9. Robustness",
      paragraphs: [
        "Table 6 reports the ensemble's pooled MSFE relative to the DFM and to the official nowcast under alternative choices. A particular concern is the use of revised indicator data. We assembled real-time vintages for the series subject to material revision — industrial and service production, retail sales, employment and the monetary aggregates — from archived releases, in the spirit of Croushore and Stark {24}. Using these vintages reduces the accuracy of all models slightly but leaves the ensemble's gain at 16 percent relative to both benchmarks. Using the latest available GDP vintage rather than the advance estimate as the target produces a similar gain of 17 percent.",
        "Results are also robust to estimation choices. A rolling window of 40 quarters reduces the gain to 15 percent, probably because it discards the information in the 2008–2009 recession about the behaviour of exports and surveys in sharp downturns. Replacing stacking with an equal-weight average reduces the gain to 15 percent, and adding the DFM itself as a fourth base learner in the stack increases it to 20 percent, with the DFM receiving a weight of about 0.2. Fixing the hyperparameters of the base learners at their values in the first training window, or doubling the size of the random forest, barely affects the results. Excluding the pandemic quarters from the evaluation leaves gains of 15 percent relative to the DFM and 18 percent relative to the official nowcast.",
      ],
      table: {
        id: "tab-robustness",
        caption: "Table 6. Robustness of the stacked ensemble's nowcast accuracy (pooled across nowcast dates)",
        columns: ["Specification", "Relative MSFE vs. DFM", "Relative MSFE vs. BoK", "DM vs. DFM"],
        rows: [
          ["Baseline", "0.82", "0.82", "−2.41**"],
          ["Real-time indicator vintages", "0.84", "0.84", "−2.19**"],
          ["Target: latest GDP vintage", "0.83", "0.83", "−2.30**"],
          ["Excluding 2020Q1–2021Q2", "0.85", "0.82", "−2.04**"],
          ["Rolling 40-quarter window", "0.85", "0.85", "−1.97*"],
          ["Equal weights instead of stacking", "0.85", "0.85", "−2.02**"],
          ["DFM added to the stack", "0.80", "0.80", "−2.62**"],
          ["Fixed hyperparameters", "0.83", "0.83", "−2.28**"],
          ["2,000 trees in random forest", "0.82", "0.82", "−2.40**"],
        ],
        note: "MSFE of the stacked ensemble relative to the dynamic factor model (DFM) and to the Bank of Korea official nowcast (BoK) under each alternative specification, pooled across the four nowcast dates. DM = Diebold–Mariano statistic with the Harvey–Leybourne–Newbold correction. *** p < 0.01, ** p < 0.05, * p < 0.10.",
      },
    },
    {
      id: "discussion",
      heading: "10. Discussion and Practical Implementation",
      paragraphs: [
        "Our results have several implications for central-bank nowcasting exercises. First, machine-learning ensembles can be a valuable addition to the nowcasting toolkit. An 18 percent reduction in MSFE relative to both a state-of-the-art DFM and the official nowcast is economically meaningful, particularly because it is concentrated early in the quarter, when policy decisions are taken with the least information and when errors in the assessment of current activity are most likely to carry over into the projections that underpin policy. The ensemble's better performance at turning points such as 2019Q1 and 2022Q4 is especially relevant, since these are the episodes in which policy errors are most costly.",
        "Second, the value of the approach lies as much in the data as in the algorithms. The ensemble's advantage derives largely from survey-based indicators and Korea's unusually timely trade statistics. Institutions seeking to replicate these gains should therefore invest in the timely collection and processing of soft and high-frequency data, including intra-monthly releases that standard monthly panels often ignore. The finding that the DFM extracts relatively little from these indicators suggests that existing models may be underusing information that is already available to them.",
        "Third, practical implementation requires care in several respects. The training samples available for quarterly targets are short — between 60 and 80 quarters in our exercise — so that regularisation, shallow trees and careful cross-validation are indispensable [27][28]. The stacking weights should be estimated only on genuine out-of-sample predictions, which requires running the base learners in pseudo-real time over a pre-evaluation period. Models must be re-estimated for each nowcast date to respect the pattern of available information, and a stylised release calendar must be maintained as statistical agencies change their publication schedules. The computational cost is modest: the full ensemble for one nowcast date is estimated in a few minutes on a standard desktop computer.",
        "Fourth, interpretability is essential for adoption. Shapley decompositions allow each nowcast and each revision to be attributed to individual indicators and groups, so that staff can explain, for example, how much of a downward revision reflects weaker export releases rather than deteriorating surveys [23]. Such news decompositions are already standard for DFMs [2], and providing their equivalent for machine-learning models helps integrate them into the narrative that accompanies official assessments. We see the ensemble as a complement to, not a substitute for, existing models and staff judgement; indeed, adding the DFM to the stack improves accuracy further, and the official nowcast remains highly competitive once hard data for the quarter are available.",
      ],
    },
    {
      id: "conclusion",
      heading: "11. Conclusion",
      paragraphs: [
        "We have developed a nowcasting model for Korean quarterly GDP growth that combines 112 mixed-frequency indicators with machine-learning techniques. A stacked ensemble of elastic-net, random-forest and gradient-boosting models outperforms both the Bank of Korea's official nowcast and a dynamic-factor benchmark, reducing the mean squared forecast error by approximately 18 percent over 2018–2023. The gain is largest early in the quarter, holds both during and outside the pandemic, and is robust to real-time data vintages and alternative specifications. Survey-based indicators and high-frequency trade data contribute disproportionately to the model's accuracy, accounting for about 55 percent of total importance while making up 29 percent of the indicator panel.",
        "These results suggest that machine-learning ensembles, implemented transparently and combined with existing models and judgement, can improve the timeliness and accuracy of central banks' assessments of current activity. Future work could extend the approach to density nowcasts, which matter for communicating uncertainty about the current state of the economy, to the expenditure components of GDP, and to new high-frequency sources such as card transactions and internet search data, whose value may, as in the case of unemployment, be greatest in periods of sudden change [30].",
      ],
    },
    {
      id: "appendix",
      heading: "Appendix A. Release Calendar and Model Details",
      paragraphs: [
        "Release calendar. The stylised calendar assigns each indicator a fixed publication day relative to the end of its reference period: day 11 and day 21 of the reference month for ten-day and twenty-day trade data, day 1 of the following month for full-month trade data, the last business day of the reference month for the BSI, consumer sentiment and economic sentiment indices, day 15 of the following month for labour-market data, and day 30 of the following month for industrial and service production. Financial variables are averaged over the days available at the nowcast date. At M1 the information set therefore contains surveys and trade data for the first month of the quarter but production data only for the last month of the previous quarter.",
        "Dynamic factor model. The DFM is estimated on the 112 standardised indicators with two factors following a VAR(2) and idiosyncratic components following AR(1) processes. Quarterly GDP growth loads on the factors through the Mariano–Murasawa aggregation weights (1, 2, 3, 2, 1)/3 [6]. Parameters are estimated by the expectation–maximisation algorithm and re-estimated each quarter; within the quarter, nowcasts are updated by the Kalman filter as new observations arrive [7]. Using three factors raises the DFM's pooled MSFE by 3 percent.",
        "Machine-learning models. Features are standardised within each training window. The elastic net chooses the mixing parameter from {0.1, 0.5, 0.9} and the penalty from a grid of 50 values. The random forest uses 1,000 trees grown on bootstrap samples of quarters, one-third of the features at each split and a minimum leaf size chosen from {3, 5, 8}. Gradient boosting uses a learning rate of 0.05, depth chosen from {2, 3}, a subsampling rate of 0.8 and early stopping with a patience of 50 iterations. Stacking weights solve a non-negative least-squares problem with weights constrained to sum to one [14].",
        "Inference. Diebold–Mariano statistics use the Harvey–Leybourne–Newbold small-sample correction [18]; for pooled comparisons, the loss differential is averaged across the four nowcast dates within each quarter before computing the statistic. Model confidence sets use the range statistic with a block bootstrap of 5,000 replications and a block length of four quarters [19].",
      ],
    },
  ],
};
