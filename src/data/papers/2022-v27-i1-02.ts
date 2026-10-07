// Vol. 27, No. 1 (January 2022) — full research paper (sample content).
import type { PaperSpec } from "../paper-spec";

export const paper: PaperSpec = {
  id: "2022-v27-i1-02",
  title: "Management Practices and Productivity in Korean Manufacturing",
  authors: [{ name: "Andreas Müller", corresponding: true }, { name: "Min-Su Park" }],
  abstract:
    "We measure management practices in 1,180 Korean manufacturing plants using the World Management Survey methodology, which scores practices in monitoring, target setting and people management through structured interviews with plant managers. Korean plants score close to the average of high-income economies but display wide dispersion. A one-standard-deviation higher management score is associated with 9.6 percent higher total factor productivity, 7.2 percent higher sales growth and a lower probability of exit, after controlling for industry, size and capital intensity. Plants affiliated with large business groups and multinationals score higher, while family-owned firms run by family members score substantially lower than family-owned firms with professional managers. Differences in management account for about a quarter of the productivity gap between large and small plants. The results suggest that improving management practices among small and family-run firms could raise aggregate productivity.",
  keywords: ["Management practices", "Productivity", "Family firms", "Business groups", "Manufacturing"],
  jelCodes: ["L20", "M11", "D24", "O32"],
  pages: "31–60",
  volume: 27,
  issue: 1,
  year: 2022,
  received: "2021-05-10",
  accepted: "2021-10-26",
  published: "2022-01-15",
  publishedOnline: "2022-01-05",
  citations: 19,
  downloads: 2120,
  pdfSize: "1.52 MB",
  type: "Research Article",
  acknowledgments: "We thank the plant managers who generously gave their time, the interview team at Hanyang University, seminar participants at the University of Zurich and Hanyang University, two anonymous referees and the handling editor.",
  dataAvailability: "Survey scores are available from the corresponding author for replication purposes; plant-level production data from the Mining and Manufacturing Survey are accessible through Statistics Korea's microdata service under its access conditions.",
  refs: [
    /* 1 */ "Syverson, C. (2011). What determines productivity? Journal of Economic Literature, 49(2), 326–365.",
    /* 2 */ "Hsieh, C.-T., & Klenow, P. J. (2009). Misallocation and manufacturing TFP in China and India. Quarterly Journal of Economics, 124(4), 1403–1448.",
    /* 3 */ "Bloom, N., & Van Reenen, J. (2007). Measuring and explaining management practices across firms and countries. Quarterly Journal of Economics, 122(4), 1351–1408.",
    /* 4 */ "Bloom, N., Eifert, B., Mahajan, A., McKenzie, D., & Roberts, J. (2013). Does management matter? Evidence from India. Quarterly Journal of Economics, 128(1), 1–51.",
    /* 5 */ "Bloom, N., Brynjolfsson, E., Foster, L., Jarmin, R., Patnaik, M., Saporta-Eksten, I., & Van Reenen, J. (2019). What drives differences in management practices? American Economic Review, 109(5), 1648–1683.",
    /* 6 */ "Bloom, N., Sadun, R., & Van Reenen, J. (2012). Americans do IT better: US multinationals and the productivity miracle. American Economic Review, 102(1), 167–201.",
    /* 7 */ "Bertrand, M., & Schoar, A. (2006). The role of family in family firms. Journal of Economic Perspectives, 20(2), 73–96.",
    /* 8 */ "Ackerberg, D. A., Caves, K., & Frazer, G. (2015). Identification properties of recent production function estimators. Econometrica, 83(6), 2411–2451.",
    /* 9 */ "Bloom, N., & Van Reenen, J. (2010). Why do management practices differ across firms and countries? Journal of Economic Perspectives, 24(1), 203–224.",
    /* 10 */ "Bloom, N., Genakos, C., Sadun, R., & Van Reenen, J. (2012). Management practices across firms and countries. Academy of Management Perspectives, 26(1), 12–33.",
    /* 11 */ "Bloom, N., Sadun, R., & Van Reenen, J. (2016). Management as a technology? NBER Working Paper No. 22327. Cambridge, MA: National Bureau of Economic Research.",
    /* 12 */ "Olley, G. S., & Pakes, A. (1996). The dynamics of productivity in the telecommunications equipment industry. Econometrica, 64(6), 1263–1297.",
    /* 13 */ "Levinsohn, J., & Petrin, A. (2003). Estimating production functions using inputs to control for unobservables. Review of Economic Studies, 70(2), 317–341.",
    /* 14 */ "Foster, L., Haltiwanger, J., & Syverson, C. (2008). Reallocation, firm turnover, and efficiency: Selection on productivity or profitability? American Economic Review, 98(1), 394–425.",
    /* 15 */ "Pérez-González, F. (2006). Inherited control and firm performance. American Economic Review, 96(5), 1559–1588.",
    /* 16 */ "Bennedsen, M., Nielsen, K. M., Pérez-González, F., & Wolfenzon, D. (2007). Inside the family firm: The role of families in succession decisions and performance. Quarterly Journal of Economics, 122(2), 647–691.",
    /* 17 */ "Villalonga, B., & Amit, R. (2006). How do family ownership, control and management affect firm value? Journal of Financial Economics, 80(2), 385–417.",
    /* 18 */ "Lazear, E. P. (2000). Performance pay and productivity. American Economic Review, 90(5), 1346–1361.",
    /* 19 */ "Ichniowski, C., Shaw, K., & Prennushi, G. (1997). The effects of human resource management practices on productivity: A study of steel finishing lines. American Economic Review, 87(3), 291–313.",
    /* 20 */ "Bartelsman, E., Haltiwanger, J., & Scarpetta, S. (2013). Cross-country differences in productivity: The role of allocation and selection. American Economic Review, 103(1), 305–334.",
    /* 21 */ "Khanna, T., & Palepu, K. (2000). Is group affiliation profitable in emerging markets? An analysis of diversified Indian business groups. Journal of Finance, 55(2), 867–891.",
    /* 22 */ "Almeida, H., Park, S. Y., Subrahmanyam, M. G., & Wolfenzon, D. (2011). The structure and formation of business groups: Evidence from Korean chaebols. Journal of Financial Economics, 99(2), 447–475.",
    /* 23 */ "Helpman, E., Melitz, M. J., & Yeaple, S. R. (2004). Export versus FDI with heterogeneous firms. American Economic Review, 94(1), 300–316.",
    /* 24 */ "Giorcelli, M. (2019). The long-term effects of management and technology transfers. American Economic Review, 109(1), 121–152.",
    /* 25 */ "Bruhn, M., Karlan, D., & Schoar, A. (2018). The impact of consulting services on small and medium enterprises: Evidence from a randomized trial in Mexico. Journal of Political Economy, 126(2), 635–687.",
    /* 26 */ "Melitz, M. J. (2003). The impact of trade on intra-industry reallocations and aggregate industry productivity. Econometrica, 71(6), 1695–1725.",
    /* 27 */ "Bertrand, M., & Schoar, A. (2003). Managing with style: The effect of managers on firm policies. Quarterly Journal of Economics, 118(4), 1169–1208.",
    /* 28 */ "Lucas, R. E., Jr. (1978). On the size distribution of business firms. Bell Journal of Economics, 9(2), 508–523.",
  ],
  body: [
    {
      id: "introduction",
      heading: "1. Introduction",
      paragraphs: [
        "Productivity differs enormously across firms, even within narrowly defined industries [1], and the allocation of resources across firms of differing productivity has large aggregate consequences [2][20]. Management practices are a leading candidate explanation for these differences. Survey evidence shows that management quality varies widely within and across countries [3][10], and a randomised experiment in Indian textile firms found that introducing modern practices raised productivity by about 17 percent within a year [4]. Historical and experimental evidence from Italy and Mexico confirms that management interventions can have large and lasting effects [24][25].",
        "We bring this agenda to Korea, whose manufacturing sector combines globally competitive business groups with a large population of small, often family-run suppliers. Korean manufacturing productivity is high at the frontier but notably dispersed: value added per worker in plants with fewer than 50 employees is less than a third of that in plants with more than 300, one of the largest size gaps among advanced economies. Whether this gap reflects technology, scale or the way plants are run matters for policy, because management practices — unlike scale — can in principle be learned.",
        "Using structured interviews with managers of 1,180 plants conducted in 2019 and early 2020, we measure 18 practices in monitoring, target setting and people management following the World Management Survey (WMS) protocol [3]. Korean plants score close to the average of high-income economies, but with wide dispersion. We match the survey to the Mining and Manufacturing Survey to relate management to productivity, growth and survival.",
        "A one-standard-deviation higher management score is associated with 9.6 percent higher total factor productivity (TFP), 7.2 percent higher sales growth over the following two years and a 1.8 percentage point lower probability of exit, after controlling for industry, size, capital intensity and interviewer fixed effects. Correcting for measurement error using repeat interviews raises the TFP association to 12.4 percent. Plants affiliated with large business groups and multinationals score higher, while family-owned firms run by family members score 0.42 points lower than family-owned firms with professional managers. Differences in management account for about a quarter of the productivity gap between large and small plants.",
        "These results add to a growing body of evidence that management is an important component of firm productivity [5][9][11] and to the literature on family firms, which finds that firms passing control to family heirs perform worse [7][15][16]. They also provide new evidence on management in East Asian business groups, which have been studied mainly through their financial structure [21][22]. Section 2 describes the Korean context, Section 3 reviews related literature and Section 4 sets out hypotheses. Sections 5 and 6 describe the data and empirical strategy, Section 7 reports results, Section 8 examines determinants of management and the size gap, Section 9 reports robustness checks and Sections 10 and 11 discuss implications and conclude.",
      ],
    },
    {
      id: "background",
      heading: "2. Institutional Background",
      paragraphs: [
        "Korean manufacturing is dominated in output by a small number of large business groups (chaebol), whose affiliates produce semiconductors, automobiles, ships, steel and petrochemicals for world markets. These affiliates sit at the top of extensive supplier networks of small and medium-sized firms, many of which supply a single customer. The groups themselves are typically controlled by founding families through pyramidal and cross-shareholding structures [22], but their affiliates are run by professional managers recruited through competitive internal labour markets, and many adopted formal performance management and quality systems in the 1990s and 2000s.",
        "Below the groups lies a large population of independent firms. Most are family-owned, and a large share of the founders who established them during the rapid industrialisation of the 1970s and 1980s have reached retirement age. Succession has therefore become a pressing issue: surveys by industry associations suggest that a majority of owners of small manufacturing firms intend to pass management to a child, often with limited formal preparation. Korea's inheritance tax rates, among the highest in the OECD, have been relaxed for family business successions since the late 2000s, encouraging intra-family transfers.",
        "Foreign multinationals play a smaller role than in many other advanced economies, but subsidiaries of Japanese, US and European firms are important in chemicals, machinery and electronic components. Public support for management upgrading has focused on technology and quality certification, with smaller programmes offering consulting services to SMEs; there is little evidence on their effectiveness.",
        "Korea's manufacturing productivity statistics reflect this dual structure. Labour productivity in large manufacturing firms is comparable to that of firms in the most productive OECD economies, while productivity in small manufacturing firms lags well behind the OECD average for firms of similar size. The gap has widened since the early 2000s, as large exporters invested heavily in automation and process technology while many suppliers, squeezed by price pressure from their customers, invested little. Policy discussion has focused on fairer subcontracting terms and on technology diffusion, with less attention to how suppliers are managed.",
      ],
    },
    {
      id: "literature",
      heading: "3. Related Literature",
      paragraphs: [
        "Productivity dispersion within industries is large and persistent [1][14], and theories of firm heterogeneity attribute it to differences in an underlying productivity draw that firms carry with them [26]. Lucas {28} interpreted this draw as managerial talent, linking the size distribution of firms to the distribution of managerial ability. Bertrand and Schoar {27} show that individual managers have persistent effects on firm policies, and studies of specific practices find that incentive pay and complementary human-resource practices raise productivity substantially [18][19].",
        "Bloom and Van Reenen {3} developed the double-blind survey method that we use, finding that management scores are higher in the United States than in European countries and strongly associated with productivity. Subsequent waves extended the survey to more than 30 countries, documenting large differences across and within countries [9][10]. In the United States, structured management practices account for a share of productivity dispersion similar to that of research and development or information technology [5]. Multinational ownership is associated with better management and more productive use of information technology [6], consistent with models in which the most productive firms invest abroad [23].",
        "Family ownership in itself is not associated with poor management, but family management is. Firms whose founders pass control to family members experience declines in performance [15][16], and family control is associated with lower firm value when descendants serve as chief executives [17]. Bertrand and Schoar {7} argue that family firms may trade efficiency for other objectives, such as continuity and family employment. Evidence on business groups is mixed: affiliation may provide internal capital markets and reputation in economies with weak institutions [21] but may also shield poorly performing affiliates. We contribute evidence on the management practices of these organisational forms in an advanced Asian economy.",
      ],
    },
    {
      id: "framework",
      heading: "4. Framework and Hypotheses",
      paragraphs: [
        "We interpret management practices as a technology that raises output for given inputs but requires costly adoption [11]. Plants adopt practices until the marginal benefit equals the cost of learning and implementing them. Benefits rise with plant scale, because practices such as performance monitoring and target cascades are fixed costs that can be spread over more output, and with the strength of competition, which raises the penalty for poor management. Adoption costs depend on managers' knowledge, so plants run by owners selected by birth rather than ability, or with less exposure to best practices, may under-adopt.",
        "This framework yields three hypotheses. First, management scores should be positively associated with TFP, growth and survival, conditional on scale and capital intensity. Second, plants exposed to best practices through multinational parents or group affiliation should score higher, while family-managed plants, where the pool of potential managers is restricted, should score lower than family-owned plants with professional managers [7][16]. Third, because adoption benefits rise with scale, part of the productivity advantage of large plants should reflect better management, implying that the size–productivity gradient is not purely technological.",
        "The framework also suggests why management might differ systematically between business-group affiliates and independent suppliers of similar size. Group affiliates benefit from shared training programmes, rotation of managers across affiliates and centralised human-resource systems, which lower the cost of adopting structured practices. Independent suppliers that sell to a single group customer may receive some transfer of practices through quality audits and supplier development programmes, but they also face limited competitive pressure on non-price dimensions. We test whether plants supplying multinational or group customers score higher than other independent plants.",
      ],
    },
    {
      id: "data",
      heading: "5. Data",
      paragraphs: [],
      subsections: [
        {
          id: "data-survey",
          heading: "5.1 Management Survey",
          paragraphs: [
            "Interviews were conducted between March 2019 and February 2020 by a team of trained graduate students using the WMS protocol, which scores 18 practices from 1 (worst) to 5 (best) through open-ended questions to plant managers. Practices are grouped into monitoring (for example, whether performance is tracked continuously and reviewed), target setting (whether targets are balanced, stretching and understood throughout the organisation) and people management (whether hiring, promotion and dismissal are based on performance). Interviewers did not know plant performance, and managers were not told they were being scored, reducing the risk of biased responses.",
            "The sampling frame consists of all manufacturing plants with between 50 and 5,000 employees in the 2017 Mining and Manufacturing Survey. We contacted a random sample of 3,400 plants and completed interviews with 1,180, a response rate of 35 percent, similar to other WMS waves. Responding plants are similar to non-respondents in size, productivity and industry, and response is uncorrelated with TFP conditional on size. Table 1 reports scores by ownership type.",
          ],
          tables: [
            {
              id: "table-1",
              caption: "Table 1. Management scores by ownership",
              columns: ["Ownership type", "Plants", "Mean score", "Std. dev.", "Mean employment"],
              rows: [
                ["Business-group affiliate", "214", "3.21", "0.48", "842"],
                ["Multinational subsidiary", "96", "3.28", "0.44", "516"],
                ["Family-owned, professional manager", "188", "2.94", "0.51", "298"],
                ["Family-owned, family manager", "402", "2.52", "0.55", "176"],
                ["Other independent firms", "280", "2.81", "0.53", "241"],
                ["All plants", "1,180", "2.83", "0.59", "347"],
              ],
              note: "Note: Average of 18 practices scored from 1 to 5. A family manager is a chief executive related to the founder or controlling shareholder by blood or marriage.",
            },
          ],
        },
        {
          id: "data-production",
          heading: "5.2 Production Data and Productivity",
          paragraphs: [
            "Responses are matched to the Mining and Manufacturing Survey, an annual census of plants with ten or more employees, to obtain output, value added, employment, capital, materials and plant age for 2015–2021. We estimate TFP as the residual from industry-specific Cobb–Douglas value-added production functions estimated with control-function methods [8][12][13], using materials as the proxy for unobserved productivity. Because we lack plant-level prices, our TFP measures reflect both physical productivity and price differences [14]; we return to this issue in Section 9.",
            "Table 2 summarises the matched sample. The average plant has 347 employees and is 22 years old. Management scores are positively correlated with size, export status and capital intensity, but even within size classes the dispersion of scores is large: the interquartile range within plants of 50–99 employees is 0.78 points, almost as large as in the sample as a whole. Korean plants score 2.83 on average, close to the average of high-income economies in previous WMS waves, but score relatively high on monitoring and relatively low on people management, reflecting the importance of seniority in pay and promotion.",
          ],
          tables: [
            {
              id: "table-2",
              caption: "Table 2. Plant characteristics by management score tercile",
              columns: ["Variable", "Bottom tercile", "Middle tercile", "Top tercile", "All plants"],
              rows: [
                ["Management score", "2.17", "2.84", "3.48", "2.83"],
                ["Monitoring score", "2.38", "3.07", "3.71", "3.05"],
                ["Target-setting score", "2.12", "2.79", "3.44", "2.78"],
                ["People-management score", "1.98", "2.61", "3.24", "2.61"],
                ["Employment", "182", "301", "559", "347"],
                ["Plant age (years)", "24.1", "21.8", "20.3", "22.1"],
                ["Exporter (share)", "0.38", "0.54", "0.71", "0.54"],
                ["Log capital per worker", "4.12", "4.38", "4.66", "4.39"],
                ["Log TFP (industry-demeaned)", "−0.14", "0.01", "0.13", "0.00"],
                ["Plants", "393", "394", "393", "1,180"],
              ],
              note: "Note: Means for the survey year. TFP is estimated with a control-function method and demeaned within three-digit industries.",
            },
          ],
        },
      ],
    },
    {
      id: "strategy",
      heading: "6. Empirical Strategy",
      paragraphs: [
        "We regress log TFP, sales growth and exit on the standardised management score, controlling for industry fixed effects, plant size, capital intensity and plant age, as well as interviewer fixed effects and interview characteristics such as the day of the week, time of day and the interviewee's tenure. These regressions are descriptive: they establish whether management is associated with performance in Korea in the way found elsewhere, but do not by themselves identify causal effects. The experimental evidence cited above suggests that a substantial part of the association is causal [4][25].",
      ],
      subsections: [
        {
          id: "specification",
          heading: "6.1 Specification",
          paragraphs: [
            "For productivity, we estimate log TFP_i = β·M_i + X_i'γ + δ_j + ε_i, where M_i is the management score standardised to mean zero and unit variance and δ_j are three-digit industry fixed effects. For growth, the outcome is the change in log sales over the two years following the interview. For survival, it is an indicator for plant exit by the end of 2021. Standard errors are clustered by firm, since 61 firms have more than one plant in the sample.",
          ],
        },
        {
          id: "measurement",
          heading: "6.2 Measurement Error",
          paragraphs: [
            "Management scores are measured with error, which attenuates estimated associations. To address this, 118 plants — about 10 percent of the sample — were interviewed twice by different interviewers speaking to different managers at the same plant. The correlation between the two scores is 0.71, comparable to previous WMS waves [3], implying a signal-to-noise ratio of roughly 0.7. We use the second score as an instrument for the first in the re-interviewed subsample, which corrects for classical measurement error under the assumption that errors are independent across interviews.",
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
          id: "results-tfp",
          heading: "7.1 Management and Productivity",
          paragraphs: [
            "Table 3 reports the main results. Without controls other than industry, a one-standard-deviation higher management score is associated with 21.4 percent higher TFP. Adding size, capital intensity and plant age reduces the coefficient to 11.8 percent, and adding interviewer and interview controls to 9.6 percent. The association is thus robust to controlling for observable plant characteristics, although these reduce it substantially, as larger and more capital-intensive plants tend to be better managed.",
            "Figure 1 plots average TFP by decile of the management score, after removing industry, size and capital-intensity effects. The relationship is close to linear across the distribution, with no evidence that the association is driven by a small group of very poorly managed plants. Plants in the top decile are about 27 percent more productive than plants in the bottom decile, conditional on controls.",
          ],
          tables: [
            {
              id: "table-3",
              caption: "Table 3. Management practices and total factor productivity",
              columns: ["", "(1)", "(2)", "(3)", "(4) IV"],
              rows: [
                ["Management score (standardised)", "0.214***", "0.118***", "0.096***", "0.124***"],
                ["", "(0.021)", "(0.019)", "(0.018)", "(0.039)"],
                ["Log employment", "", "0.071***", "0.068***", "0.062*"],
                ["", "", "(0.016)", "(0.016)", "(0.034)"],
                ["Log capital per worker", "", "0.112***", "0.109***", "0.121***"],
                ["", "", "(0.018)", "(0.018)", "(0.041)"],
                ["Industry fixed effects", "Yes", "Yes", "Yes", "Yes"],
                ["Plant age", "No", "Yes", "Yes", "Yes"],
                ["Interviewer and interview controls", "No", "No", "Yes", "Yes"],
                ["Observations", "1,180", "1,180", "1,180", "118"],
                ["R²", "0.31", "0.42", "0.44", "0.47"],
              ],
              note: "Note: Dependent variable is log TFP. Column (4) instruments the first interview score with the second interview score in the re-interviewed subsample. Standard errors clustered by firm. * p < 0.10, *** p < 0.01.",
            },
          ],
          figures: [
            {
              id: "figure-1",
              caption: "Figure 1. Total factor productivity by management score decile",
              kind: "line",
              xLabels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
              yLabel: "Log TFP relative to mean (conditional)",
              series: [
                {
                  name: "Mean log TFP",
                  values: [-0.14, -0.1, -0.07, -0.04, -0.02, 0.01, 0.03, 0.06, 0.09, 0.13],
                  lower: [-0.19, -0.15, -0.12, -0.09, -0.07, -0.04, -0.02, 0.01, 0.04, 0.08],
                  upper: [-0.09, -0.05, -0.02, 0.01, 0.03, 0.06, 0.08, 0.11, 0.14, 0.18],
                },
              ],
              note: "Note: Means of log TFP residualised on industry, size, capital intensity and plant age, by decile of the management score, with 95 percent confidence intervals.",
            },
          ],
        },
        {
          id: "results-growth",
          heading: "7.2 Growth and Survival",
          paragraphs: [
            "Management is also associated with subsequent performance. A one-standard-deviation higher score predicts 7.2 percent higher sales growth over the two years following the interview and a 1.8 percentage point lower probability of exit by the end of 2021, against a mean exit rate of 6.1 percent. Because these outcomes are measured after the interview, they are less likely than contemporaneous TFP to reflect reverse causality, in which more productive plants can afford better management. The associations are similar for growth measured before and during the pandemic, suggesting that well-managed plants were not differentially sheltered from the 2020 shock.",
            "Better-managed plants also grew employment faster, by 4.1 percent per standard deviation, implying that resources were reallocated towards them over time. This is consistent with a well-functioning selection process in Korean manufacturing, in which product markets reward better management [14][20], although the strength of reallocation is weaker among suppliers that depend on a single group customer.",
            "The growth association is stronger for plants in industries with more intense import competition, measured by the share of imports in domestic absorption, consistent with the view that competition raises the returns to good management [5][9]. It is weaker for plants whose main customer is a single business-group affiliate, which may be insulated from market selection by long-term supply relationships. Among plants that exited, the median management score was 2.41, compared with 2.86 among survivors.",
          ],
        },
        {
          id: "results-iv",
          heading: "7.3 Correcting for Measurement Error",
          paragraphs: [
            "Instrumenting with the second interview raises the TFP coefficient to 12.4 percent, consistent with attenuation bias from measurement error (column 4 of Table 3). The ratio of the OLS to the IV coefficient in the re-interviewed subsample is 0.74, close to the reliability implied by the 0.71 correlation between interviews. Measurement error therefore leads us to understate the strength of the relationship between management and productivity by about a quarter, and the results for growth and exit should be interpreted as lower bounds in the same way.",
          ],
        },
      ],
    },
    {
      id: "determinants",
      heading: "8. Ownership, Family Management and the Size Gap",
      paragraphs: [
        "Table 4 relates management scores to ownership, controlling for size, industry and plant age. Business-group affiliates and multinational subsidiaries score 0.21 and 0.29 points higher than independent non-family firms. Family-owned firms with professional managers score similarly to independent firms, while family-owned firms run by family members score 0.42 points lower than family firms with professional managers, a gap not explained by size or industry. The gap is largest in people management: family-managed plants are much less likely to promote on merit and to address poor performance, consistent with the view that family firms trade efficiency for loyalty and continuity [7][17].",
        "The family-manager gap is larger when the manager is a second-generation heir rather than the founder, echoing findings for Denmark and the United States that inherited control is associated with poorer performance [15][16]. It is smaller among exporters and in plants supplying multinational customers, suggesting that exposure to demanding buyers can partly offset the disadvantages of family management.",
      ],
      tables: [
        {
          id: "table-4",
          caption: "Table 4. Ownership and management practices",
          columns: ["", "Overall score", "Monitoring", "Targets", "People"],
          rows: [
            ["Business-group affiliate", "0.21***", "0.18***", "0.22***", "0.24***"],
            ["", "(0.05)", "(0.05)", "(0.06)", "(0.06)"],
            ["Multinational subsidiary", "0.29***", "0.27***", "0.31***", "0.30***"],
            ["", "(0.06)", "(0.06)", "(0.07)", "(0.07)"],
            ["Family-owned, professional manager", "0.04", "0.06", "0.03", "0.02"],
            ["", "(0.05)", "(0.05)", "(0.05)", "(0.06)"],
            ["Family-owned, family manager", "−0.38***", "−0.29***", "−0.35***", "−0.51***"],
            ["", "(0.04)", "(0.04)", "(0.05)", "(0.05)"],
            ["Family manager − professional manager", "−0.42***", "−0.35***", "−0.38***", "−0.53***"],
            ["Observations", "1,180", "1,180", "1,180", "1,180"],
          ],
          note: "Note: Omitted category is other independent firms. Controls for log employment, industry, plant age and interviewer fixed effects. Standard errors clustered by firm. *** p < 0.01.",
        },
      ],
      figures: [
        {
          id: "figure-2",
          caption: "Figure 2. Management scores by dimension: Korea and the high-income average",
          kind: "bar",
          xLabels: ["Monitoring", "Target setting", "People management", "Overall"],
          yLabel: "Mean score (1–5)",
          series: [
            { name: "Korea (this survey)", values: [3.05, 2.78, 2.61, 2.83] },
            { name: "High-income average (previous WMS waves)", values: [2.98, 2.82, 2.79, 2.86] },
          ],
          note: "Note: High-income averages are approximate unweighted means of manufacturing plants in high-income economies in previous WMS waves, re-weighted to the Korean size distribution.",
        },
      ],
      subsections: [
        {
          id: "size-gap",
          heading: "8.1 Management and the Size–Productivity Gap",
          paragraphs: [
            "Large plants are considerably more productive than small ones. In our sample, plants with 300 or more employees have TFP 0.41 log points higher than plants with 50–99 employees, within industries. Table 5 decomposes this gap. Large plants score about 0.98 standard deviations higher on management; multiplying by the TFP coefficient from a specification without size controls gives a contribution of 0.10 log points, or about a quarter of the gap. Capital intensity accounts for another 0.12 log points, and the remainder reflects scale and unobserved factors.",
            "Comparing Korean plants with the high-income average across dimensions (Figure 2), Korean plants score slightly above average on monitoring, close to average on target setting and notably below average on people management. The shortfall in people management is concentrated among small and family-managed plants and accounts for most of the management gap between large and small plants.",
          ],
          tables: [
            {
              id: "table-5",
              caption: "Table 5. Decomposition of the TFP gap between large and small plants",
              columns: ["Component", "Log points", "Share of gap"],
              rows: [
                ["TFP gap: ≥300 vs. 50–99 employees", "0.41", "1.00"],
                ["Management practices", "0.10", "0.24"],
                ["Capital intensity", "0.12", "0.29"],
                ["Plant age and exporting", "0.04", "0.10"],
                ["Unexplained (scale and other factors)", "0.15", "0.37"],
              ],
              note: "Note: Oaxaca–Blinder decomposition using coefficients from the pooled sample with industry fixed effects; components may not sum because of rounding.",
            },
          ],
        },
      ],
    },
    {
      id: "robustness",
      heading: "9. Robustness",
      paragraphs: [
        "Table 6 reports robustness checks. The TFP association is similar when productivity is measured using the Olley–Pakes [12] or Levinsohn–Petrin [13] estimators instead of the Ackerberg–Caves–Frazer method, when we use labour productivity, and when we use gross output rather than value-added production functions. Because revenue-based TFP may reflect market power, we also estimate the association for plants in industries producing relatively homogeneous products, such as cement, steel and basic chemicals, where price dispersion is low [14]; the coefficient is somewhat larger in this subsample.",
        "Results are robust to dropping plants interviewed in January and February 2020, when the pandemic may have affected managers' responses, to weighting by inverse response probabilities, and to excluding business-group affiliates, which might be better managed for reasons specific to their organisation. Averaging each plant's TFP over 2015–2018, before the interviews, gives a similar coefficient, reducing concerns that interviews captured transitory productivity shocks.",
        "We also examine whether the association reflects interviewer or interviewee characteristics rather than practices. Including fixed effects for the interviewee's position (plant manager, production manager or deputy) and controls for tenure and education has little effect on the coefficient. Dropping interviews of less than 40 minutes, which may be less informative, and dropping the first ten interviews conducted by each interviewer, when scoring may have been less consistent, also leave the results essentially unchanged.",
      ],
      tables: [
        {
          id: "table-6",
          caption: "Table 6. Robustness of the management–productivity association",
          columns: ["Specification", "Coefficient", "Std. error", "Observations"],
          rows: [
            ["Baseline (ACF value-added TFP)", "0.096***", "(0.018)", "1,180"],
            ["Olley–Pakes TFP", "0.091***", "(0.019)", "1,180"],
            ["Levinsohn–Petrin TFP", "0.099***", "(0.018)", "1,180"],
            ["Labour productivity", "0.142***", "(0.024)", "1,180"],
            ["Gross-output production function", "0.041***", "(0.009)", "1,180"],
            ["Homogeneous-product industries", "0.112***", "(0.037)", "214"],
            ["Excluding 2020 interviews", "0.098***", "(0.019)", "1,072"],
            ["Inverse response-probability weights", "0.093***", "(0.020)", "1,180"],
            ["Excluding business-group affiliates", "0.094***", "(0.020)", "966"],
            ["Average TFP 2015–2018", "0.088***", "(0.019)", "1,121"],
          ],
          note: "Note: Coefficients on the standardised management score with full controls. The gross-output coefficient is smaller by construction. *** p < 0.01.",
        },
      ],
    },
    {
      id: "discussion",
      heading: "10. Discussion",
      paragraphs: [
        "How much could better management raise aggregate productivity? A simple calculation suggests the potential is meaningful. If family-managed plants adopted the practices of family-owned plants with professional managers — raising their scores by 0.42 points, or about 0.7 standard deviations — their TFP would rise by roughly 7 percent using the OLS coefficient and 9 percent using the IV coefficient. Given that these plants account for about a fifth of manufacturing employment in our size range, aggregate TFP in this segment would rise by 1.5 to 2 percent. This calculation ignores reallocation, which would further raise aggregate gains if better-managed plants expanded [2][20].",
        "These estimates should be interpreted with caution, since the cross-sectional association need not equal the causal effect of changing practices. However, the experimental evidence from India and Mexico, where consulting interventions raised productivity by amounts comparable to or larger than our associations [4][25], and the long-run effects of US management training in post-war Italy [24], suggest that a substantial part of the association reflects causal effects of management.",
        "The findings point to two policy levers. First, programmes that provide management training and consulting to small and family-run suppliers could raise productivity; existing Korean programmes focus on technology and certification and could usefully add management components. Second, the succession of family firms deserves attention. Tax incentives that favour intra-family succession may preserve family control at the cost of management quality; making relief conditional on governance arrangements, or neutral between family and outside successors, would reduce this distortion [7][15].",
        "Our findings also bear on the debate about misallocation in Korea. A large literature attributes cross-country differences in aggregate productivity to the misallocation of inputs across firms [2][20]. Poor management is a distinct but related source of inefficiency: it lowers the productivity of each plant rather than the allocation of inputs across plants. The two interact, however, since better-managed plants grow faster and poorly managed plants are more likely to exit. Policies that strengthen competition and remove barriers to the growth of well-managed firms would therefore raise productivity both directly and through improved selection [14].",
        "Finally, our survey was conducted just before the pandemic, which allows future research to examine whether better-managed plants weathered the 2020 shock more successfully. Preliminary evidence from our sample suggests that they did: plants in the top tercile of management scores experienced smaller declines in sales in the second quarter of 2020 and recovered faster in the second half of the year, consistent with evidence that structured practices help firms adapt to unexpected changes in demand and supply.",
      ],
    },
    {
      id: "conclusion",
      heading: "11. Conclusion",
      paragraphs: [
        "Management quality varies widely across Korean plants and is strongly associated with productivity, growth and survival. Business-group affiliates and multinationals are better managed, family-managed firms worse, and differences in management account for about a quarter of the productivity gap between large and small plants. Programmes that help small and family-run suppliers adopt modern management practices, building on the experimental evidence from India [4], could help close the productivity gap between Korea's large and small firms.",
      ],
    },
    {
      id: "appendix",
      heading: "Appendix A. Survey Methodology",
      paragraphs: [
        "Interview procedure. Interviewers telephoned the plant manager, introducing the survey as a study of management practices in Korean manufacturing, without mentioning performance. Interviews lasted about 50 minutes and covered 18 practices in a fixed order. For each practice, interviewers asked open-ended questions (for example, 'How do you track performance on the production line?') and scored responses using a common grid. Interviewers received a week of training, including scoring of recorded practice interviews, and conducted about 70 interviews each.",
        "Scoring reliability. In addition to the 118 double interviews, about 15 percent of interviews were scored independently by a second team member listening to the same conversation. The correlation between scores from the same interview is 0.89, implying that most measurement error arises from differences between managers and interview occasions rather than scoring.",
        "Productivity estimation. Production functions are estimated separately for 22 two-digit industries using plant-level data for 2015–2021. Capital is measured by the book value of tangible fixed assets, deflated by industry investment deflators; labour by employment; and materials by the deflated value of intermediate inputs. TFP is the residual from the estimated production function, demeaned within three-digit industry-years.",
        "Sample representativeness. Response rates were slightly lower among the smallest plants and in the Seoul metropolitan area, where managers were busier. Reweighting the sample to match the size and regional distribution of the sampling frame changes average scores by less than 0.02 points and leaves the productivity associations unchanged. Response was not correlated with prior TFP growth or with export status, conditional on size and industry.",
      ],
    },
  ],
};
