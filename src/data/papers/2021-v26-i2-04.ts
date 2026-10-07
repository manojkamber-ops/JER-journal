// Vol. 26, No. 2 (April 2021) — full research paper (sample content).
import type { PaperSpec } from "../paper-spec";

export const paper: PaperSpec = {
  id: "2021-v26-i2-04",
  title: "Internet Search Data and Real-Time Unemployment Nowcasts during the Pandemic",
  authors: [{ name: "Tae-Hee Kim", corresponding: true }, { name: "Jiwon Lee" }],
  abstract:
    "Official unemployment statistics are published with a lag of several weeks, which is costly when labour markets change abruptly. We test whether search volumes for unemployment-related terms on Korea's largest web portal improve real-time nowcasts of the unemployment rate. Adding search indices for terms such as 'unemployment benefit' to a standard autoregressive benchmark reduces the root mean squared nowcast error by 23 percent between March and September 2020, but by only 4 percent in 2015–2019. The gains are statistically significant only during the pandemic. Search data are therefore most valuable precisely when conventional indicators are least informative.",
  editorialNote:
    "Tae-Hee Kim and Jiwon Lee show that adding a factor built from unemployment-related internet searches to a standard benchmark reduced real-time nowcast errors for the Korean unemployment rate by 23 percent between March and September 2020, but by only an insignificant 4 percent in 2015–2019, with the gains coming mainly from searches about unemployment insurance and job loss.",
  keywords: ["Nowcasting", "Unemployment", "Search data", "COVID-19", "Forecast evaluation"],
  jelCodes: ["C53", "E24", "J64"],
  pages: "211–222",
  volume: 26,
  issue: 2,
  year: 2021,
  received: "2020-10-12",
  accepted: "2021-01-25",
  published: "2021-04-15",
  publishedOnline: "2021-04-02",
  citations: 17,
  downloads: 1610,
  pdfSize: "0.74 MB",
  type: "Research Article",
  acknowledgments: "We thank the handling editor and two anonymous referees for constructive comments on an earlier draft, and seminar participants at Hanyang University for helpful discussions. All errors are our own.",
  dataAvailability: "Search indices were downloaded from the portal's public trend service; labour-market data are published by Statistics Korea and the Ministry of Employment and Labor. The real-time vintages of search and labour-market data constructed for this study, together with code, are available from the corresponding author.",
  refs: [
    /* 1 */ "Askitas, N., & Zimmermann, K. F. (2009). Google econometrics and unemployment forecasting. Applied Economics Quarterly, 55(2), 107–120.",
    /* 2 */ "Choi, H., & Varian, H. (2012). Predicting the present with Google Trends. Economic Record, 88(s1), 2–9.",
    /* 3 */ "D'Amuri, F., & Marcucci, J. (2017). The predictive power of Google searches in forecasting US unemployment. International Journal of Forecasting, 33(4), 801–816.",
    /* 4 */ "Giannone, D., Reichlin, L., & Small, D. (2008). Nowcasting: The real-time informational content of macroeconomic data. Journal of Monetary Economics, 55(4), 665–676.",
    /* 5 */ "Diebold, F. X., & Mariano, R. S. (1995). Comparing predictive accuracy. Journal of Business & Economic Statistics, 13(3), 253–263.",
    /* 6 */ "Clark, T. E., & West, K. D. (2007). Approximately normal tests for equal predictive accuracy in nested models. Journal of Econometrics, 138(1), 291–311.",
    /* 7 */ "Bańbura, M., Giannone, D., Modugno, M., & Reichlin, L. (2013). Now-casting and the real-time data flow. In G. Elliott & A. Timmermann (Eds.), Handbook of Economic Forecasting (Vol. 2A, pp. 195–237). Amsterdam: Elsevier.",
    /* 8 */ "Stock, J. H., & Watson, M. W. (2002). Macroeconomic forecasting using diffusion indexes. Journal of Business & Economic Statistics, 20(2), 147–162.",
    /* 9 */ "Ginsberg, J., Mohebbi, M. H., Patel, R. S., Brammer, L., Smolinski, M. S., & Brilliant, L. (2009). Detecting influenza epidemics using search engine query data. Nature, 457(7232), 1012–1014.",
    /* 10 */ "Lazer, D., Kennedy, R., King, G., & Vespignani, A. (2014). The parable of Google Flu: Traps in big data analysis. Science, 343(6176), 1203–1205.",
    /* 11 */ "Coibion, O., Gorodnichenko, Y., & Weber, M. (2020). Labor markets during the COVID-19 crisis: A preliminary view. NBER Working Paper No. 27017. Cambridge, MA: National Bureau of Economic Research.",
    /* 12 */ "Baker, S. R., & Fradkin, A. (2017). The impact of unemployment insurance on job search: Evidence from Google search data. Review of Economics and Statistics, 99(5), 756–768.",
    /* 13 */ "Scott, S. L., & Varian, H. R. (2014). Predicting the present with Bayesian structural time series. International Journal of Mathematical Modelling and Numerical Optimisation, 5(1–2), 4–23.",
    /* 14 */ "Lewis, D. J., Mertens, K., Stock, J. H., & Trivedi, M. (2020). Measuring real activity using a weekly economic index. Federal Reserve Bank of New York Staff Reports, No. 920.",
    /* 15 */ "Chetty, R., Friedman, J. N., Hendren, N., Stepner, M., & The Opportunity Insights Team. (2020). How did COVID-19 and stabilization policies affect spending and employment? A new real-time economic tracker based on private sector data. NBER Working Paper No. 27431. Cambridge, MA: National Bureau of Economic Research.",
    /* 16 */ "Fondeur, Y., & Karamé, F. (2013). Can Google data help predict French youth unemployment? Economic Modelling, 30, 117–125.",
    /* 17 */ "Vosen, S., & Schmidt, T. (2011). Forecasting private consumption: Survey-based indicators vs. Google trends. Journal of Forecasting, 30(6), 565–578.",
    /* 18 */ "McLaren, N., & Shanbhogue, R. (2011). Using internet search data as economic indicators. Bank of England Quarterly Bulletin, 51(2), 134–140.",
    /* 19 */ "Croushore, D., & Stark, T. (2001). A real-time data set for macroeconomists. Journal of Econometrics, 105(1), 111–130.",
    /* 20 */ "Stock, J. H., & Watson, M. W. (2002). Forecasting using principal components from a large number of predictors. Journal of the American Statistical Association, 97(460), 1167–1179.",
    /* 21 */ "Hansen, P. R., Lunde, A., & Nason, J. M. (2011). The model confidence set. Econometrica, 79(2), 453–497.",
    /* 22 */ "Giacomini, R., & White, H. (2006). Tests of conditional predictive ability. Econometrica, 74(6), 1545–1578.",
    /* 23 */ "Harvey, D., Leybourne, S., & Newbold, P. (1997). Testing the equality of prediction mean squared errors. International Journal of Forecasting, 13(2), 281–291.",
    /* 24 */ "Pesaran, M. H., & Timmermann, A. (1992). A simple nonparametric test of predictive performance. Journal of Business & Economic Statistics, 10(4), 461–465.",
    /* 25 */ "Forsythe, E., Kahn, L. B., Lange, F., & Wiczer, D. (2020). Labor demand in the time of COVID-19: Evidence from vacancy postings and UI claims. Journal of Public Economics, 189, 104238.",
    /* 26 */ "Clements, M. P., & Galvão, A. B. (2008). Macroeconomic forecasting with mixed-frequency data: Forecasting output growth in the United States. Journal of Business & Economic Statistics, 26(4), 546–554.",
    /* 27 */ "Bartik, A. W., Bertrand, M., Lin, F., Rothstein, J., & Unrath, M. (2020). Measuring the labor market at the onset of the COVID-19 crisis. Brookings Papers on Economic Activity, 2020(Summer), 239–268.",
    /* 28 */ { jer: "2021-v26-i1-01" },
  ],
  body: [
    {
      id: "introduction",
      heading: "1. Introduction",
      paragraphs: [
        "Policy makers need timely information about labour markets, but official unemployment statistics are published with a lag. In Korea, the Economically Active Population Survey for a given month is released in the middle of the following month, so the unemployment rate for March becomes available only in mid-April. In normal times this delay matters little, because the unemployment rate moves slowly and can be predicted well from its own past. When the economy is hit by an abrupt shock, however, past values are a poor guide to the present, and the lag in official data becomes costly [4][7].",
        "The COVID-19 pandemic was exactly such a shock. Within a few weeks in the spring of 2020, social distancing, school closures and the collapse of international travel cut demand for face-to-face services across the world. In the United States, initial claims for unemployment insurance rose more in a fortnight than in any previous recession, and surveys fielded in real time documented job losses on a scale that official statistics confirmed only later [11][25][27]. Governments designed emergency employment support while the labour-market data on which such programmes would normally be calibrated were weeks out of date, and researchers turned to private, high-frequency sources such as card transactions, payroll records and weekly activity indices to fill the gap [14][15].",
        "Internet search data offer a potential solution. People who lose their jobs or fear losing them search for information about unemployment benefits, job openings and related topics, and search volumes are available almost immediately. A growing literature finds that search indices improve forecasts and nowcasts of unemployment in Germany [1], the United States [2][3] and France [16], as well as of private consumption [17] and other indicators [18]. Search data have also been used to track influenza and other phenomena in real time [9], although their performance can deteriorate when search behaviour changes for reasons unrelated to the target variable [10].",
        "We ask whether search data improve real-time nowcasts of the Korean unemployment rate, and whether their value differs between normal times and the COVID-19 pandemic. Using search volumes for unemployment-related terms on Korea's largest web portal, we find that adding a search factor to a standard benchmark model reduces the root mean squared nowcast error by only 4 percent in 2015–2019, an insignificant difference, but by 23 percent between March and September 2020, a statistically significant improvement. Search data are thus most valuable precisely when conventional indicators are least informative.",
        "Our analysis contributes in three ways. First, we construct genuinely real-time data sets for both the search indices and the unemployment rate, so that each nowcast uses only the information, and the normalisation of the search series, that a forecaster would actually have had [19]. Second, we compare the value of search data across regimes within a single framework, rather than over a single evaluation period, and show that average gains over long samples mask a strongly state-dependent pattern. Third, we show that the pandemic gains came mainly from searches related to unemployment insurance and job loss, not from searches related to job openings, which helps to explain why search data are informative about abrupt changes rather than about gradual trends. We provide evidence for an economy in which search is dominated by a domestic portal rather than Google, which matters for the replicability of a literature built largely on Google Trends.",
        "Section 2 describes the release calendar of Korean labour-market statistics and the labour-market shock of 2020. Section 3 reviews related literature and Section 4 presents a simple framework and three hypotheses. Section 5 describes the data and Section 6 the nowcasting and evaluation strategy. Section 7 reports the main results, Section 8 examines which search terms and which groups of workers drive them, and Section 9 reports robustness checks. Section 10 discusses implications for statistical agencies and central banks, and Section 11 concludes.",
      ],
    },
    {
      id: "background",
      heading: "2. Institutional Background",
      paragraphs: [
        "Korea's official unemployment rate comes from the Economically Active Population Survey conducted by Statistics Korea, which interviews members of roughly 35,000 households about their activity during the week containing the fifteenth day of each month. Results are released on a Wednesday in the middle of the following month, typically 11 to 17 days after the end of the reference month. A person is classified as unemployed if he or she did not work during the reference week, looked for work during the previous four weeks and was available to start immediately. Workers who have a job but are temporarily absent — including those placed on unpaid leave who expect to return within six months — are counted as employed, a feature that became important in 2020.",
        "The Ministry of Employment and Labor publishes administrative statistics from the employment insurance system, including the number of new claims for job-seeking benefits, usually around the tenth day of the following month. Claims are timelier than the survey and are closely related to involuntary job loss, but they cover only insured employees and are affected by changes in eligibility rules and administrative capacity. Table 1 summarises the timing of the indicators we use. At the end of a given month — the point at which we produce nowcasts — the latest available survey and claims data refer to the previous month, whereas search data for the current month are already complete.",
        "The pandemic reached Korea earlier than most other economies outside China. After a large cluster of infections in Daegu in late February 2020, the government introduced social distancing guidelines in March and tightened them again in late August after a second wave in the capital region. Employment fell by about 476,000 year on year in April 2020, the largest decline since the global financial crisis, with losses concentrated among temporary and daily workers in accommodation, food services, retail and education services. Many of those who lost jobs left the labour force rather than searching for work, while the number of employed persons who were temporarily absent rose to an unprecedented level. The government responded with a large increase in the Employment Retention Subsidy, which reduced layoffs among small and medium-sized firms [28], and with emergency stabilisation payments for workers outside the employment insurance system, such as special-type workers and freelancers.",
        "These developments posed difficulties for conventional nowcasting models in three respects. The shock was abrupt, so the lagged unemployment rate was uninformative about the current month. Claims rose sharply but with delays, as employment centres were overwhelmed in March and April. And new support programmes changed the relationship between job loss and claims, because some displaced workers received retention subsidies or emergency payments instead of unemployment benefits. Each of these features gives timely, broad-based indicators of labour-market distress an opportunity to add information.",
      ],
      tables: [
        {
          id: "table-1",
          caption: "Table 1. Release timing of labour-market indicators",
          columns: ["Indicator", "Source", "Frequency", "Typical release", "Latest month available at nowcast date"],
          rows: [
            ["Unemployment rate (EAPS)", "Statistics Korea", "Monthly", "Mid-month, t + 1", "t − 1"],
            ["New claims for job-seeking benefits", "Ministry of Employment and Labor", "Monthly", "Around day 10, t + 1", "t − 1"],
            ["Insured employees", "Ministry of Employment and Labor", "Monthly", "Around day 10, t + 1", "t − 1"],
            ["Employment-to-population ratio (EAPS)", "Statistics Korea", "Monthly", "Mid-month, t + 1", "t − 1"],
            ["Portal search indices", "Public trend service", "Daily / weekly", "Next day", "t (complete)"],
          ],
          note: "Note: t denotes the reference month of the nowcast. Nowcasts are produced on the last day of month t. EAPS, Economically Active Population Survey.",
        },
      ],
    },
    {
      id: "literature",
      heading: "3. Related Literature",
      paragraphs: [
        "Choi and Varian {2} show that Google Trends data improve short-term predictions of initial unemployment claims and other indicators in the United States, while Askitas and Zimmermann {1} document that searches for terms related to unemployment offices and job search predict German unemployment. D'Amuri and Marcucci {3} find that a Google job-search index outperforms a wide range of alternative leading indicators in forecasting US unemployment, and Fondeur and Karamé {16} report similar gains for French youth unemployment. McLaren and Shanbhogue {18} find that search data contain useful information about the UK labour and housing markets, and Vosen and Schmidt {17} show that a search-based indicator outperforms survey-based measures in forecasting private consumption. Baker and Fradkin {12} use search data to measure job-search effort and show that it responds to unemployment insurance generosity.",
        "A recurring concern is that search behaviour changes for reasons unrelated to the target. The best-known example is Google Flu Trends, which tracked influenza well for several years [9] but substantially overestimated it in 2012–2013, partly because media coverage changed what people searched for and partly because the search engine itself changed [10]. This concern is especially relevant during a crisis that dominates the news, and it motivates our focus on real-time evaluation and on comparisons across groups of search terms.",
        "The nowcasting literature emphasises the value of incorporating timely information from many sources as it is released [4][7], often through factor models that summarise many indicators in a few common components [8][20]. Mixed-frequency methods allow higher-frequency data to be combined with monthly or quarterly targets [26], and Bayesian structural time-series methods offer another way to select among many search terms [13]. A separate literature stresses that forecast evaluation should use the data vintages available at the time, since revisions can change conclusions about predictive content [19].",
        "During the pandemic, several new high-frequency indicators were developed to track real activity [14][15]. Early survey evidence documented the speed and scale of job losses [11][27], and job-vacancy postings collapsed even in states with few infections [25]. Our contribution is to examine whether the value of search data for nowcasting varies with economic conditions, and to provide evidence for an economy in which search data come from a domestic portal rather than Google. We also complement evidence on the effectiveness of Korea's pandemic employment support [28] by showing how quickly its labour-market consequences could be observed in real time.",
      ],
    },
    {
      id: "framework",
      heading: "4. Conceptual Framework and Hypotheses",
      paragraphs: [
        "A simple signal-extraction argument shows when search data should be most useful. Write the unemployment rate as u_t = E[u_t | I_t−1] + η_t, where I_t−1 is the information contained in the benchmark predictors — the lagged unemployment rate and lagged claims — and η_t is the part of the current unemployment rate that cannot be predicted from them. Suppose the search factor contains a noisy signal of this innovation, s_t = λη_t + ν_t, where ν_t captures searches unrelated to current job loss, such as searches prompted by media coverage, curiosity or changes in benefit rules.",
        "The best linear nowcast that adds s_t reduces the mean squared error of the benchmark by the fraction ρ² = λ²σ²_η / (λ²σ²_η + σ²_ν), the squared correlation between the signal and the innovation. The relative RMSE of the search-augmented model is therefore √(1 − ρ²). If the variance of the noise σ²_ν is roughly stable while the variance of labour-market innovations σ²_η rises sharply during a crisis, ρ² — and with it the value of search data — rises too. A relative RMSE of 0.96 corresponds to ρ² of about 0.08, whereas a relative RMSE of 0.77 corresponds to ρ² of about 0.41.",
        "The framework yields three hypotheses. Hypothesis 1: in normal times, when innovations to unemployment are small relative to the noise in search behaviour, search data add little to a benchmark based on lagged official indicators. Hypothesis 2: during an abrupt shock, when σ²_η rises, search data substantially reduce nowcast errors, and the gains are concentrated in months in which the unemployment rate changes direction. Hypothesis 3: gains should be largest for terms most closely tied to involuntary job loss, such as unemployment benefits and dismissal, because searches for job openings also reflect on-the-job search and vary with labour demand in ways that may move in the opposite direction to job loss.",
        "The framework also clarifies the limits of search data. If the noise variance rises at the same time — for example because the crisis itself generates news coverage that prompts searches by people who are not at risk of job loss — the gains will be smaller than the rise in σ²_η alone would imply [10]. Hypothesis 2 is therefore not guaranteed, and whether it holds is an empirical question.",
      ],
    },
    {
      id: "data",
      heading: "5. Data",
      paragraphs: [
        "Our sample runs from January 2010 to December 2020. We use 2010–2014 as the initial estimation period, evaluate nowcasts over 2015–2019 as a benchmark for normal times, and treat March–September 2020 as the main pandemic evaluation window, covering the first wave of infections, the partial recovery over the summer and the second wave in late August.",
      ],
      subsections: [
        {
          id: "data-search",
          heading: "5.1 Search Indices",
          paragraphs: [
            "Google accounts for a relatively small share of internet searches in Korea, where a domestic portal dominates the market. We therefore use the portal's public trend service, which reports the relative volume of searches for a given term on a weekly basis, normalised so that the maximum in the requested period equals 100. We select eight terms related to job loss, unemployment insurance and job search (Table 2), chosen on the basis of their semantic relevance before examining their correlation with unemployment, to avoid data mining. Weekly indices are averaged within each month and seasonally adjusted.",
            "Because the trend service reports normalised indices that are re-scaled whenever the sample period changes, we download the full series at each forecast date using only data available at that date, ensuring that nowcasts are truly real-time. We summarise the eight series by their first principal component, which explains 71 percent of their variance over 2010–2019 and loads positively on all terms [8][20]. Correlations with the unemployment rate are modest in 2010–2019 but rise sharply in 2020, most strongly for the three insurance-related terms and for the first principal component.",
          ],
          tables: [
            {
              id: "table-2",
              caption: "Table 2. Search terms and their correlation with the unemployment rate",
              columns: ["Search term (translated)", "Category", "Correlation, 2010–2019", "Correlation, 2020"],
              rows: [
                ["Unemployment benefit", "Insurance", "0.42", "0.81"],
                ["Unemployment benefit application", "Insurance", "0.39", "0.84"],
                ["Job-seeking allowance", "Insurance", "0.36", "0.77"],
                ["Dismissal", "Job loss", "0.28", "0.69"],
                ["Recommended resignation", "Job loss", "0.24", "0.72"],
                ["Unpaid leave", "Job loss", "0.11", "0.66"],
                ["Job openings", "Job search", "0.31", "0.48"],
                ["Employment centre", "Job search", "0.33", "0.58"],
                ["First principal component", "", "0.44", "0.86"],
              ],
              note: "Note: Correlations between seasonally adjusted monthly search indices and the seasonally adjusted unemployment rate.",
            },
          ],
        },
        {
          id: "data-labour",
          heading: "5.2 Labour-Market Data",
          paragraphs: [
            "The target variable is the seasonally adjusted unemployment rate from the Economically Active Population Survey. We use the first-release value as the outcome to evaluate nowcasts, since this is the figure that policy makers would have compared with the nowcast [19]. The benchmark model also uses new claims for unemployment insurance benefits, published by the Ministry of Employment and Labor around the tenth day of the following month. Search data for a month are complete at the end of that month, giving them an advantage of about two weeks over claims data and two to three weeks over the survey.",
            "Seasonally adjusted survey figures are revised each January when seasonal factors are re-estimated, and claims data are occasionally revised as late applications are processed. We assemble real-time vintages of both series from archived press releases, so that the benchmark model at each forecast date uses exactly the values that had been published by then. Revisions to the unemployment rate are small in normal times, with a mean absolute revision of 0.03 percentage points, but larger in 2020.",
          ],
        },
        {
          id: "data-descriptive",
          heading: "5.3 Descriptive Statistics",
          paragraphs: [
            "Table 3 compares the behaviour of the main series in normal times and in 2020. The standard deviation of the monthly change in the unemployment rate almost quadrupled, from 0.12 percentage points in 2010–2019 to 0.45 in 2020, and that of the log change in new claims more than tripled. The search factor, standardised to have mean zero and unit variance over 2010–2019, averaged 2.4 in 2020 and peaked at 5.1 in April. In the language of Section 4, the variance of labour-market innovations rose dramatically in 2020, which is the condition under which we expect search data to be most valuable.",
          ],
          tables: [
            {
              id: "table-3",
              caption: "Table 3. Descriptive statistics, normal times and 2020",
              columns: ["Variable", "Mean, 2010–2019", "SD, 2010–2019", "Mean, 2020", "SD, 2020"],
              rows: [
                ["Unemployment rate (percent)", "3.6", "0.28", "4.0", "0.39"],
                ["Monthly change in unemployment rate (pp)", "0.00", "0.12", "0.03", "0.45"],
                ["Log change in new benefit claims", "0.004", "0.061", "0.031", "0.214"],
                ["Search factor (standardised)", "0.00", "1.00", "2.43", "1.31"],
                ["Unemployment-benefit search index", "21.4", "6.8", "63.7", "18.2"],
                ["Months", "120", "", "12", ""],
              ],
              note: "Note: All series are seasonally adjusted. The search factor is the first principal component of the eight search indices in Table 2, standardised over 2010–2019. pp, percentage points; SD, standard deviation.",
            },
          ],
        },
      ],
    },
    {
      id: "method",
      heading: "6. Empirical Strategy",
      paragraphs: [],
      subsections: [
        {
          id: "method-models",
          heading: "6.1 Nowcasting Models",
          paragraphs: [
            "The benchmark model is u_t = α + ρ·u_t−1 + γ·c_t−1 + ε_t, where u_t is the unemployment rate in month t and c_t−1 is the log change in new benefit claims in the previous month, the latest available at the time of the nowcast. The augmented model adds the search factor for the current month, s_t. Both models are estimated recursively by ordinary least squares using an expanding window starting in January 2010, and nowcasts for each month are produced using only data that would have been available at the end of that month.",
            "We deliberately keep the benchmark simple. Richer benchmarks, such as dynamic factor models with many monthly indicators [4][7], would be harder to replicate and would blur the comparison we are interested in: the marginal value of an indicator that is available two to three weeks earlier than official data. We show in Section 9 that adding further official indicators to the benchmark does not change our conclusions.",
          ],
        },
        {
          id: "method-realtime",
          heading: "6.2 Real-Time Design",
          paragraphs: [
            "For each forecast date from January 2015 to December 2020, we reconstruct the information set of a forecaster on the last day of the month. This involves three steps. We take the vintage of the unemployment rate and claims data published by that date; we download the search indices for the period up to that date, which re-normalises them; and we re-estimate the seasonal adjustment and the principal component using only data up to that date. The sign of the principal component is normalised so that it loads positively on the unemployment-benefit term. Details are given in Appendix A.",
          ],
        },
        {
          id: "method-evaluation",
          heading: "6.3 Forecast Evaluation",
          paragraphs: [
            "We evaluate nowcasts by their root mean squared error (RMSE) relative to the first-release unemployment rate. Because the benchmark is nested in the augmented model, we test for equal predictive accuracy using both the Diebold–Mariano test [5], with the small-sample correction of Harvey, Leybourne and Newbold {23}, and the Clark–West adjustment for nested models [6]. Given the short pandemic evaluation window, we also report results for alternative windows and specifications, and we use the conditional predictive ability test of Giacomini and White {22} to ask whether relative performance depends on the size of recent changes in claims.",
            "We complement squared-error comparisons with two further measures. The first is directional accuracy — the share of months in which a model correctly predicts whether the unemployment rate rises or falls — tested with the Pesaran–Timmermann statistic [24]. The second is the model confidence set of Hansen, Lunde and Nason {21}, which identifies the set of models among a wider range of specifications that cannot be distinguished from the best at a given confidence level.",
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
          id: "results-normal",
          heading: "7.1 Normal Times",
          paragraphs: [
            "Table 4 reports the main results. In 2015–2019, the search-augmented model has an RMSE of 0.136 percentage points compared with 0.142 for the benchmark, an improvement of 4 percent that is not statistically significant according to either the Diebold–Mariano or the Clark–West test. Consistent with Hypothesis 1, when the unemployment rate moves gradually, its own lag and lagged claims already capture most of the predictable variation, and the search factor adds mainly noise. The estimated coefficient on the search factor is positive but small, and its recursive estimate is stable over the period.",
            "Directional accuracy tells a similar story. Over 2015–2019, the benchmark correctly predicts the direction of the monthly change in the unemployment rate in 57 percent of months and the search-augmented model in 60 percent, a difference well within sampling error. Neither model's directional accuracy is significantly better than chance according to the Pesaran–Timmermann test, reflecting the fact that monthly changes in normal times are small and partly reflect sampling noise in the survey.",
          ],
          tables: [
            {
              id: "table-4",
              caption: "Table 4. Real-time nowcast accuracy (RMSE, percentage points)",
              columns: ["Period", "Benchmark", "With search data", "Relative RMSE", "DM p-value", "CW p-value"],
              rows: [
                ["2015:1–2019:12", "0.142", "0.136", "0.96", "0.41", "0.28"],
                ["2020:3–2020:9", "0.388", "0.299", "0.77", "0.03", "0.02"],
                ["2020:1–2020:12", "0.331", "0.268", "0.81", "0.04", "0.03"],
              ],
              note: "Note: Relative RMSE is the ratio of the search-augmented to the benchmark RMSE. DM, Diebold–Mariano test with the Harvey–Leybourne–Newbold correction; CW, Clark–West test. One-sided p-values for the null of equal predictive accuracy.",
            },
          ],
        },
        {
          id: "results-pandemic",
          heading: "7.2 The Pandemic",
          paragraphs: [
            "Between March and September 2020, the improvement rises to 23 percent, with RMSEs of 0.299 for the search-augmented model and 0.388 for the benchmark, and is significant at the 5 percent level according to both tests (Table 4). Over the whole of 2020 the improvement is 19 percent and remains significant. Consistent with Hypothesis 2, the errors of both models increase sharply, but those of the benchmark increase much more. The implied squared correlation between the search signal and the benchmark's errors rises from about 0.08 to about 0.41, in line with the framework of Section 4.",
            "Figure 1 shows why. When unemployment rose in March and May 2020, the benchmark, which relies on the lagged unemployment rate and lagged claims, underpredicted the increase; it then overpredicted unemployment in August, when the labour market temporarily recovered. Search volumes for terms related to unemployment benefits and unpaid leave rose sharply in the second half of March, weeks before official figures recorded the jump in unemployment, and fell in July as the labour market improved. The search-augmented model therefore tracked turning points more closely, which accounts for most of its improvement.",
            "The conditional predictive ability test confirms that the relative performance of the two models is state-dependent. Regressing the difference in squared errors on the absolute change in claims in the previous month yields a positive and significant coefficient over 2015–2020 (p = 0.02), indicating that the search model's advantage grows when the labour market is moving quickly [22]. In the model confidence set at the 90 percent level, only search-augmented specifications survive for the pandemic window, whereas all specifications, including the benchmark, survive for 2015–2019 [21].",
          ],
          figures: [
            {
              id: "figure-1",
              caption: "Figure 1. Unemployment rate and real-time nowcasts, March–September 2020",
              kind: "line",
              xLabels: ["Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"],
              yLabel: "Unemployment rate (percent)",
              series: [
                { name: "First release", values: [3.8, 3.8, 4.5, 4.3, 4.2, 3.2, 3.6] },
                { name: "Benchmark nowcast", values: [3.41, 3.62, 3.98, 4.44, 4.31, 3.92, 3.38] },
                { name: "With search data", values: [3.52, 3.97, 4.07, 4.48, 4.07, 3.7, 3.42] },
              ],
              note: "Note: Seasonally adjusted unemployment rate (first release) and real-time nowcasts from the benchmark and search-augmented models.",
            },
          ],
        },
        {
          id: "results-months",
          heading: "7.3 Month-by-Month Errors",
          paragraphs: [
            "Table 5 decomposes the pandemic errors month by month. The search-augmented model is more accurate in five of the seven months. Its largest gains come in March, when it reduces the underprediction from 0.39 to 0.28 percentage points, and in August, when it reduces the overprediction from 0.72 to 0.50 percentage points. August alone accounts for about three-fifths of the reduction in the sum of squared errors. In that month the benchmark extrapolated the high unemployment of June and July, whereas searches for benefit-related terms had already fallen back by about a third from their spring peak.",
            "The search model is slightly worse in June and July, and in April its error is about as large as the benchmark's but of the opposite sign. In April, searches for unpaid leave and benefits were at their peak, but much of the underlying distress showed up as temporary absence from work and exit from the labour force rather than as unemployment, so the search model overpredicted the unemployment rate by 0.17 percentage points. In June, the launch of emergency employment stabilisation payments for workers outside the insurance system raised searches for benefit-related terms among people who were not unemployed. We return to both episodes in Section 8.",
          ],
          tables: [
            {
              id: "table-5",
              caption: "Table 5. Nowcast errors by month, March–September 2020 (percentage points)",
              columns: ["Month", "First release", "Benchmark nowcast", "Benchmark error", "Search nowcast", "Search error"],
              rows: [
                ["March", "3.8", "3.41", "0.39", "3.52", "0.28"],
                ["April", "3.8", "3.62", "0.18", "3.97", "−0.17"],
                ["May", "4.5", "3.98", "0.52", "4.07", "0.43"],
                ["June", "4.3", "4.44", "−0.14", "4.48", "−0.18"],
                ["July", "4.2", "4.31", "−0.11", "4.07", "0.13"],
                ["August", "3.2", "3.92", "−0.72", "3.70", "−0.50"],
                ["September", "3.6", "3.38", "0.22", "3.42", "0.18"],
                ["RMSE", "", "", "0.388", "", "0.299"],
              ],
              note: "Note: Errors are the first-release unemployment rate minus the nowcast; positive values indicate underprediction. Seasonally adjusted data.",
            },
          ],
        },
      ],
    },
    {
      id: "mechanisms",
      heading: "8. Mechanisms and Heterogeneity",
      paragraphs: [
        "Which searches carry the information? Consistent with Hypothesis 3, the gains come mainly from terms related to unemployment insurance and job loss. A factor built from the three insurance terms alone reduces the pandemic RMSE by 25 percent, slightly more than the baseline factor, and a factor built from the three job-loss terms reduces it by 20 percent. A factor built from the two job-search terms reduces it by only 8 percent, an insignificant gain (Table 6 in Section 9). Searches for job openings rose only modestly in 2020, as many displaced workers in face-to-face services did not expect to find work while distancing rules were in force and left the labour force [11][25]. Searches related to claiming benefits, by contrast, respond directly to job loss and to the decision to apply for support [12].",
        "The timing of information within the month also matters. Using only search data for the first two weeks of the reference month — which would allow a nowcast to be published about two weeks earlier, at roughly the survey reference week — still reduces the pandemic RMSE by 18 percent, with a relative RMSE of 0.82. Most of the information therefore arrives early in the month, consistent with the sharp rise of benefit-related searches within days of the tightening of distancing rules in March and August.",
        "Search data also help to nowcast related labour-market margins. Using the same framework to nowcast the employment-to-population ratio, the search factor reduces the pandemic RMSE by 21 percent, a gain similar to that for unemployment. For the number of employed persons temporarily absent from work, which is not part of unemployment but rose sharply in spring 2020, the 'unpaid leave' index alone reduces nowcast errors by more than a third. This explains the April episode in Table 5: the search signal correctly detected labour-market distress, but part of that distress took the form of temporary absence rather than unemployment.",
        "The gains differ across groups of workers. Nowcasting the unemployment rate of women, who were over-represented in the hardest-hit service industries, the search factor yields a relative RMSE of 0.74, compared with 0.83 for men. For young people aged 15–29, whose unemployment rate is more volatile and less well predicted by its own past, the relative RMSE is 0.84 in the pandemic window and 0.95 in 2015–2019, mirroring the evidence that search data are useful for youth unemployment in France [16]. These patterns suggest that search data carry the most information where the shock was largest and least anticipated by lagged official indicators.",
        "Finally, the June episode illustrates the noise term in the framework of Section 4. The announcement of emergency stabilisation payments for special-type workers and freelancers in early June raised searches for benefit-related terms by about 15 percent without a corresponding rise in unemployment. When we add to the model a dummy for the application period of this programme, the June error of the search model falls from −0.18 to −0.09 percentage points. Such policy-induced shifts in search behaviour are predictable in principle, since the timing of programme launches is known in advance, and a forecaster could adjust for them in real time.",
      ],
    },
    {
      id: "robustness",
      heading: "9. Robustness",
      paragraphs: [
        "Table 6 reports several robustness checks. The improvement during the pandemic is similar when we use only the three terms related to unemployment insurance instead of the principal component of all eight terms, when we replace the first-release unemployment rate with the latest vintage, and when we add the employment-to-population ratio to the benchmark model. Using a rolling rather than expanding estimation window slightly increases the improvement. Using search terms related to job openings alone yields much smaller gains, suggesting that the value of search data in 2020 came mainly from signals of job loss rather than job search.",
        "We also consider alternative ways of selecting and summarising search terms. Selecting terms with a spike-and-slab prior in a Bayesian structural time-series model [13], which allows the importance of each term to be estimated from the data, gives a relative RMSE of 0.76 in the pandemic window, almost identical to the baseline. This suggests that our results do not depend on the particular weighting implied by the principal component, and that ex ante selection of terms based on semantic relevance does not discard important information.",
        "Figure 2 shows the relative RMSE year by year. The search-augmented model performs similarly to the benchmark in every year between 2015 and 2019, with relative RMSEs between 0.93 and 1.01, and substantially better in 2020. This pattern argues against the possibility that the pandemic result reflects chance alone, and is consistent with the view that search data are informative mainly about large, abrupt changes in labour-market conditions that are not anticipated by past values of the target and its usual predictors.",
        "Two further checks address the short evaluation window. First, a randomisation exercise in which we draw 10,000 seven-month windows from 2015–2019 shows that a relative RMSE as low as 0.77 occurs in fewer than 1 percent of windows. Second, extending the pandemic window to December 2020, which adds the third wave of infections, gives a relative RMSE of 0.80 for March–December, and including the whole year gives 0.81, as in Table 4. Results are also similar when we use a mixed-frequency specification that enters weekly search data directly [26], or when we evaluate nowcasts against the unemployment rate including those temporarily absent and seeking work.",
      ],
      tables: [
        {
          id: "table-6",
          caption: "Table 6. Robustness: relative RMSE of search-augmented nowcasts",
          columns: ["Specification", "2015–2019", "Mar–Sep 2020", "DM p-value (2020)"],
          rows: [
            ["Baseline (principal component, eight terms)", "0.96", "0.77", "0.03"],
            ["Insurance terms only (three terms)", "0.95", "0.75", "0.02"],
            ["Job-loss terms only (three terms)", "0.97", "0.80", "0.04"],
            ["Job-search terms only (two terms)", "0.99", "0.92", "0.31"],
            ["Search data for first two weeks of month only", "0.98", "0.82", "0.06"],
            ["Bayesian structural time-series term selection", "0.95", "0.76", "0.03"],
            ["Latest-vintage unemployment rate", "0.97", "0.78", "0.04"],
            ["Rolling 60-month estimation window", "0.97", "0.74", "0.02"],
            ["Adding employment-to-population ratio", "0.96", "0.79", "0.04"],
          ],
          note: "Note: Relative RMSE is the ratio of the search-augmented to the corresponding benchmark RMSE. DM, one-sided Diebold–Mariano test with the Harvey–Leybourne–Newbold correction.",
        },
      ],
      figures: [
        {
          id: "figure-2",
          caption: "Figure 2. Relative RMSE of search-augmented nowcasts by year",
          kind: "bar",
          xLabels: ["2015", "2016", "2017", "2018", "2019", "2020"],
          yLabel: "Relative RMSE",
          series: [{ name: "Search-augmented / benchmark", values: [0.98, 0.93, 1.01, 0.95, 0.94, 0.81] }],
          note: "Note: Values below one indicate that the search-augmented model outperformed the benchmark.",
        },
      ],
    },
    {
      id: "discussion",
      heading: "10. Discussion and Policy Implications",
      paragraphs: [
        "Two caveats apply. First, the pandemic evaluation window contains only seven months, and although the improvement is statistically significant, the precise magnitude should be interpreted with caution. Second, the relationship between search behaviour and unemployment may change over time — for example, because of changes in the portal's algorithms, the introduction of new benefit programmes or media attention to unemployment itself [10]. In 2020, the introduction of emergency employment support programmes raised searches for benefit-related terms among people who were not unemployed, which may explain why the search model overpredicted unemployment slightly in June.",
        "These caveats suggest that search data should complement rather than replace conventional indicators. A practical approach for statistical agencies and central banks is to monitor search indices alongside administrative data and to give them more weight when they diverge sharply from the predictions of conventional models, as happened in March 2020. Our results suggest a simple rule of thumb: when the absolute change in claims or in the search factor is large by historical standards, the search-augmented nowcast should be preferred; otherwise little is lost by relying on the benchmark.",
        "Search data are also useful for evaluating policy in real time. Korea's pandemic employment support was designed and expanded within weeks, and evidence on its effectiveness has only gradually become available from administrative records [28]. Indicators that detect labour-market distress within days could help policy makers to judge whether support is reaching the workers who need it, to adjust eligibility rules and to time the withdrawal of support. Benefit-related searches, in particular, provide an early signal of demand for support that is available well before claims are processed.",
        "Combining search data with other high-frequency indicators, such as card spending and mobility data [14][15], in a mixed-frequency factor model [7][26] is a promising direction for future work. Such models could use the search factor as one of many timely indicators and let its weight vary with the state of the economy. A further priority is transparency: because portal indices are normalised and occasionally revised by the provider, agencies that rely on them should archive each download to permit real-time evaluation of the kind we perform.",
      ],
    },
    {
      id: "conclusion",
      heading: "11. Conclusion",
      paragraphs: [
        "Search data add little to unemployment nowcasts in normal times but substantially improve them during abrupt shocks. For Korea, adding a search factor reduced real-time nowcast errors by 23 percent during the first months of the pandemic, compared with 4 percent in 2015–2019. The gains came mainly from searches about unemployment insurance and job loss, were concentrated in months in which the labour market changed direction, and were largest for women and young people.",
        "Because the value of timely information is greatest when conditions change quickly, statistical agencies and central banks could usefully monitor search indices as an early-warning complement to official labour-market indicators [2][3]. Doing so requires careful real-time archiving of search data and attention to policy announcements and media coverage that may change search behaviour independently of labour-market conditions.",
      ],
    },
    {
      id: "appendix",
      heading: "Appendix A. Data Construction and Inference",
      paragraphs: [
        "Search indices. The portal's trend service returns, for a requested term and period, an index equal to 100 in the week with the highest search volume and scaled proportionally otherwise. Because the index is re-scaled when the period changes, we downloaded each term for the period from January 2010 to each forecast date, producing 72 vintages per term. To limit the effect of rounding in low-volume weeks, each vintage was downloaded on three different days and averaged. Weekly values were allocated to months in proportion to the number of days of each week falling in the month.",
        "Seasonal adjustment and factor extraction. Monthly search indices were seasonally adjusted with X-13ARIMA-SEATS using only data available at each forecast date. The first principal component was then computed on standardised series over the same period, and its sign was normalised so that it loads positively on the unemployment-benefit term. Over 2010–2019, the first component explains 71 percent of the variance of the eight series; the second, which loads positively on job-search terms and negatively on job-loss terms, explains 11 percent and adds no predictive power.",
        "Labour-market vintages. First-release values of the seasonally adjusted unemployment rate, the employment-to-population ratio and new benefit claims were taken from the press releases of Statistics Korea and the Ministry of Employment and Labor. For each forecast date we use the latest vintage published by then, including the annual revision of seasonal factors in January.",
        "Tests. The Diebold–Mariano statistic uses the Harvey–Leybourne–Newbold small-sample correction and Student-t critical values with n − 1 degrees of freedom. The Clark–West statistic adjusts the difference in squared errors for the noise introduced by estimating the additional parameter of the larger model. Because both are asymptotic tests and the pandemic window is short, we also report the randomisation exercise in Section 9, which compares the pandemic relative RMSE with the distribution of relative RMSEs across seven-month windows in 2015–2019.",
      ],
    },
  ],
};
