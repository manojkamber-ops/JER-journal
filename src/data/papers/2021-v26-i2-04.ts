// Vol. 26, No. 2 (April 2021) — short communication (sample content).
import type { PaperSpec } from "../paper-spec";

export const paper: PaperSpec = {
  id: "2021-v26-i2-04",
  title: "Internet Search Data and Real-Time Unemployment Nowcasts during the Pandemic",
  authors: [{ name: "Tae-Hee Kim", corresponding: true }, { name: "Jiwon Lee" }],
  abstract:
    "Official unemployment statistics are published with a lag of several weeks, which is costly when labour markets change abruptly. We test whether search volumes for unemployment-related terms on Korea's largest web portal improve real-time nowcasts of the unemployment rate. Adding search indices for terms such as 'unemployment benefit' to a standard autoregressive benchmark reduces the root mean squared nowcast error by 23 percent between March and September 2020, but by only 4 percent in 2015–2019. The gains are statistically significant only during the pandemic. Search data are therefore most valuable precisely when conventional indicators are least informative.",
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
  acknowledgments: "We thank the handling editor and two anonymous referees for constructive comments on an earlier draft.",
  dataAvailability: "Search indices were downloaded from the portal's public trend service; labour-market data are published by Statistics Korea and the Ministry of Employment and Labor. Code is available from the corresponding author.",
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
  ],
  body: [
    {
      id: "introduction",
      heading: "1. Introduction",
      paragraphs: [
        "Policy makers need timely information about labour markets, but official unemployment statistics are published with a lag. In Korea, the Economically Active Population Survey for a given month is released in the middle of the following month, so the unemployment rate for March becomes available only in mid-April. In normal times this delay matters little, because the unemployment rate moves slowly and can be predicted well from its own past. When the economy is hit by an abrupt shock, however, past values are a poor guide to the present, and the lag in official data becomes costly [4][7].",
        "Internet search data offer a potential solution. People who lose their jobs or fear losing them search for information about unemployment benefits, job openings and related topics, and search volumes are available almost immediately. A growing literature finds that search indices improve forecasts and nowcasts of unemployment in Germany [1], the United States [2][3] and France [16]. Search data have also been used to track influenza and other phenomena in real time [9], although their performance can deteriorate when search behaviour changes for reasons unrelated to the target variable [10].",
        "We ask whether search data improve real-time nowcasts of the Korean unemployment rate, and whether their value differs between normal times and the COVID-19 pandemic. Using search volumes for unemployment-related terms on Korea's largest web portal, we find that adding a search factor to a standard benchmark model reduces the root mean squared nowcast error by only 4 percent in 2015–2019, an insignificant difference, but by 23 percent between March and September 2020, a statistically significant improvement. Search data are thus most valuable precisely when conventional indicators are least informative.",
      ],
    },
    {
      id: "literature",
      heading: "2. Related Literature",
      paragraphs: [
        "Choi and Varian {2} show that Google Trends data improve short-term predictions of initial unemployment claims and other indicators in the United States, while Askitas and Zimmermann {1} document that searches for terms related to unemployment offices and job search predict German unemployment. D'Amuri and Marcucci {3} find that a Google job-search index outperforms a wide range of alternative leading indicators in forecasting US unemployment, and Fondeur and Karamé {16} report similar gains for French youth unemployment. Baker and Fradkin {12} use search data to measure job-search effort and show that it responds to unemployment insurance generosity.",
        "The nowcasting literature emphasises the value of incorporating timely information from many sources as it is released [4][7], often through factor models that summarise many indicators in a few common components [8]. Bayesian structural time-series methods offer another way to select among many search terms [13]. During the pandemic, several new high-frequency indicators were developed to track real activity [14][15], and early survey evidence documented the speed and scale of job losses [11]. Our contribution is to examine whether the value of search data for nowcasting varies with economic conditions, and to provide evidence for an economy in which search data come from a domestic portal rather than Google.",
      ],
    },
    {
      id: "data",
      heading: "3. Data",
      paragraphs: [],
      subsections: [
        {
          id: "data-search",
          heading: "3.1 Search Indices",
          paragraphs: [
            "Google accounts for a relatively small share of internet searches in Korea, where a domestic portal dominates the market. We therefore use the portal's public trend service, which reports the relative volume of searches for a given term on a weekly basis, normalised so that the maximum in the requested period equals 100. We select eight terms related to job loss, unemployment insurance and job search (Table 1), chosen on the basis of their semantic relevance before examining their correlation with unemployment, to avoid data mining. Weekly indices are averaged within each month and seasonally adjusted.",
            "Because the trend service reports normalised indices that are re-scaled whenever the sample period changes, we download the full series at each forecast date using only data available at that date, ensuring that nowcasts are truly real-time. We summarise the eight series by their first principal component, which explains 71 percent of their variance over 2010–2019 and loads positively on all terms [8].",
          ],
          tables: [
            {
              id: "table-1",
              caption: "Table 1. Search terms and their correlation with the unemployment rate",
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
          heading: "3.2 Labour-Market Data",
          paragraphs: [
            "The target variable is the seasonally adjusted unemployment rate from the Economically Active Population Survey. We use the first-release value as the outcome to evaluate nowcasts, since this is the figure that policy makers would have compared with the nowcast. The benchmark model also uses new claims for unemployment insurance benefits, published by the Ministry of Employment and Labor around the tenth day of the following month. Search data for a month are complete at the end of that month, giving them an advantage of about two weeks over claims data and two to three weeks over the survey.",
          ],
        },
      ],
    },
    {
      id: "method",
      heading: "4. Nowcasting Framework",
      paragraphs: [
        "The benchmark model is u_t = α + ρ·u_t−1 + γ·c_t−1 + ε_t, where u_t is the unemployment rate in month t and c_t−1 is the log change in new benefit claims in the previous month, the latest available at the time of the nowcast. The augmented model adds the search factor for the current month, s_t. Both models are estimated recursively using an expanding window starting in January 2010, and nowcasts for each month are produced using only data that would have been available at the end of that month.",
        "We evaluate nowcasts by their root mean squared error (RMSE) relative to the first-release unemployment rate. Because the benchmark is nested in the augmented model, we test for equal predictive accuracy using both the Diebold–Mariano test [5] and the Clark–West adjustment for nested models [6]. Given the short pandemic evaluation window, we also report results for alternative windows and specifications.",
      ],
    },
    {
      id: "results",
      heading: "5. Results",
      paragraphs: [
        "Table 2 reports the main results. In 2015–2019, the search-augmented model has an RMSE of 0.136 percentage points compared with 0.142 for the benchmark, an improvement of 4 percent that is not statistically significant. Between March and September 2020, the improvement rises to 23 percent, with RMSEs of 0.299 and 0.388 respectively, and is significant at the 5 percent level.",
        "Figure 1 shows why. When unemployment rose in March and May 2020, the benchmark, which relies on the lagged unemployment rate and lagged claims, underpredicted the increase; it then overpredicted unemployment in August, when the labour market temporarily recovered. Search volumes for terms related to unemployment benefits and unpaid leave rose sharply in the second half of March, weeks before official figures recorded the jump in unemployment, and fell in July as the labour market improved. The search-augmented model therefore tracked turning points more closely, which accounts for most of its improvement.",
      ],
      tables: [
        {
          id: "table-2",
          caption: "Table 2. Real-time nowcast accuracy (RMSE, percentage points)",
          columns: ["Period", "Benchmark", "With search data", "Relative RMSE", "DM p-value", "CW p-value"],
          rows: [
            ["2015:1–2019:12", "0.142", "0.136", "0.96", "0.41", "0.28"],
            ["2020:3–2020:9", "0.388", "0.299", "0.77", "0.03", "0.02"],
            ["2020:1–2020:12", "0.331", "0.268", "0.81", "0.04", "0.03"],
          ],
          note: "Note: Relative RMSE is the ratio of the search-augmented to the benchmark RMSE. DM, Diebold–Mariano; CW, Clark–West.",
        },
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
      id: "robustness",
      heading: "6. Robustness",
      paragraphs: [
        "Table 3 reports several robustness checks. The improvement during the pandemic is similar when we use only the three terms related to unemployment insurance instead of the principal component of all eight terms, when we replace the first-release unemployment rate with the latest vintage, and when we add the employment-to-population ratio to the benchmark model. Using a rolling rather than expanding estimation window slightly increases the improvement. Using search terms related to job openings alone yields much smaller gains, suggesting that the value of search data in 2020 came mainly from signals of job loss rather than job search.",
        "Figure 2 shows the relative RMSE year by year. The search-augmented model performs similarly to the benchmark in every year between 2015 and 2019, with relative RMSEs between 0.93 and 1.01, and substantially better in 2020. This pattern argues against the possibility that the pandemic result reflects chance alone, and is consistent with the view that search data are informative mainly about large, abrupt changes in labour-market conditions that are not anticipated by past values of the target and its usual predictors.",
      ],
      tables: [
        {
          id: "table-3",
          caption: "Table 3. Robustness: relative RMSE of search-augmented nowcasts",
          columns: ["Specification", "2015–2019", "Mar–Sep 2020", "DM p-value (2020)"],
          rows: [
            ["Baseline (principal component, eight terms)", "0.96", "0.77", "0.03"],
            ["Insurance terms only (three terms)", "0.95", "0.75", "0.02"],
            ["Job-search terms only (two terms)", "0.99", "0.92", "0.31"],
            ["Latest-vintage unemployment rate", "0.97", "0.78", "0.04"],
            ["Rolling 60-month estimation window", "0.97", "0.74", "0.02"],
            ["Adding employment-to-population ratio", "0.96", "0.79", "0.04"],
          ],
          note: "Note: Relative RMSE is the ratio of the search-augmented to the corresponding benchmark RMSE.",
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
      heading: "7. Discussion",
      paragraphs: [
        "Two caveats apply. First, the pandemic evaluation window contains only seven months, and although the improvement is statistically significant, the precise magnitude should be interpreted with caution. Second, the relationship between search behaviour and unemployment may change over time — for example, because of changes in the portal's algorithms, the introduction of new benefit programmes or media attention to unemployment itself [10]. In 2020, the introduction of emergency employment support programmes raised searches for benefit-related terms among people who were not unemployed, which may explain why the search model overpredicted unemployment slightly in June.",
        "These caveats suggest that search data should complement rather than replace conventional indicators. A practical approach for statistical agencies and central banks is to monitor search indices alongside administrative data and to give them more weight when they diverge sharply from the predictions of conventional models, as happened in March 2020. Combining search data with other high-frequency indicators, such as card spending and mobility data [14][15], in a mixed-frequency factor model [7] is a promising direction for future work.",
      ],
    },
    {
      id: "conclusion",
      heading: "8. Conclusion",
      paragraphs: [
        "Search data add little to unemployment nowcasts in normal times but substantially improve them during abrupt shocks. For Korea, adding a search factor reduced real-time nowcast errors by 23 percent during the first months of the pandemic, compared with 4 percent in 2015–2019. Because the value of timely information is greatest when conditions change quickly, statistical agencies and central banks could usefully monitor search indices as an early-warning complement to official labour-market indicators [2][3].",
      ],
    },
  ],
};
