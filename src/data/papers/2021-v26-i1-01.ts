// Vol. 26, No. 1 (January 2021) — full research paper (sample content).
import type { PaperSpec } from "../paper-spec";

export const paper: PaperSpec = {
  id: "2021-v26-i1-01",
  title: "Job Retention Subsidies and Firm Survival during the COVID-19 Shock: Evidence from Korean Employment Insurance Records",
  authors: [{ name: "Jin-Young Choi", corresponding: true }, { name: "Evelyn Stewart" }],
  abstract:
    "In March 2020 Korea raised the Employment Retention Subsidy for priority-support (small and medium-sized) enterprises from two-thirds to 90 percent of furlough allowances, while large firms remained at a lower rate. Using monthly employment-insurance records for 412,000 firms between January 2019 and September 2020, we exploit industry-specific size thresholds that determine priority-support status in a difference-in-discontinuities design. The more generous subsidy raised take-up by 21.2 percentage points, reduced layoffs by 3.4 percent of pre-crisis employment and lowered the probability of firm exit by 1.9 percentage points by September 2020. Effects are concentrated in face-to-face services and in firms with low pre-crisis liquidity, while deadweight is largest in manufacturing. Our estimates imply a fiscal cost of about KRW 8.7 million per job retained, well below the cost of unemployment benefits and lost firm-specific human capital. The results inform the design of short-time work schemes in economies without a long tradition of such programmes.",
  keywords: ["Job retention", "Short-time work", "COVID-19", "Firm survival", "Korea"],
  jelCodes: ["J23", "J68", "H25", "D22"],
  pages: "1–30",
  volume: 26,
  issue: 1,
  year: 2021,
  received: "2020-09-14",
  accepted: "2020-12-02",
  published: "2021-01-15",
  publishedOnline: "2021-01-05",
  citations: 38,
  downloads: 3120,
  pdfSize: "1.71 MB",
  type: "Research Article",
  acknowledgments:
    "We thank the Korea Employment Information Service for access to anonymised employment-insurance records, and seminar participants at Hanyang University and Stockholm University, two anonymous referees and the handling editor for helpful comments. All errors are our own.",
  funding: "This research was supported by the Hanyang University Research Fund.",
  dataAvailability:
    "The employment-insurance microdata are available to researchers through the Korea Employment Information Service subject to a data-use agreement. Code to reproduce all tables and figures is available from the corresponding author.",
  refs: [
    /* 1 */ "Boeri, T., & Brücker, H. (2011). Short-time work benefits revisited: Some lessons from the Great Recession. Economic Policy, 26(68), 697–765.",
    /* 2 */ "Hijzen, A., & Martin, S. (2013). The role of short-time work schemes during the global financial crisis and early recovery: A cross-country analysis. IZA Journal of Labor Policy, 2(1), 5.",
    /* 3 */ "OECD. (2020). Job retention schemes during the COVID-19 lockdown and beyond. OECD Policy Responses to Coronavirus (COVID-19). Paris: OECD Publishing.",
    /* 4 */ "Chodorow-Reich, G. (2014). The employment effects of credit market disruptions: Firm-level evidence from the 2008–9 financial crisis. Quarterly Journal of Economics, 129(1), 1–59.",
    /* 5 */ "Granja, J., Makridis, C., Yannelis, C., & Zwick, E. (2020). Did the Paycheck Protection Program hit the target? NBER Working Paper No. 27095. Cambridge, MA: National Bureau of Economic Research.",
    /* 6 */ "Chetty, R., Friedman, J. N., Hendren, N., Stepner, M., & The Opportunity Insights Team. (2020). How did COVID-19 and stabilization policies affect spending and employment? A new real-time economic tracker based on private sector data. NBER Working Paper No. 27431. Cambridge, MA: National Bureau of Economic Research.",
    /* 7 */ "Grembi, V., Nannicini, T., & Troiano, U. (2016). Do fiscal rules matter? American Economic Journal: Applied Economics, 8(3), 1–30.",
    /* 8 */ "Bertrand, M., Duflo, E., & Mullainathan, S. (2004). How much should we trust differences-in-differences estimates? Quarterly Journal of Economics, 119(1), 249–275.",
    /* 9 */ "Hijzen, A., & Venn, D. (2011). The role of short-time work schemes during the 2008–09 recession. OECD Social, Employment and Migration Working Papers No. 115. Paris: OECD Publishing.",
    /* 10 */ "Balleer, A., Gehrke, B., Lechthaler, W., & Merkl, C. (2016). Does short-time work save jobs? A business cycle analysis. European Economic Review, 84, 99–122.",
    /* 11 */ "Burdett, K., & Wright, R. (1989). Unemployment insurance and short-time compensation: The effects on layoffs, hours per worker, and wages. Journal of Political Economy, 97(6), 1479–1496.",
    /* 12 */ "Van Audenrode, M. A. (1994). Short-time compensation, job security, and employment contracts: Evidence from selected OECD countries. Journal of Political Economy, 102(1), 76–102.",
    /* 13 */ "Oi, W. Y. (1962). Labor as a quasi-fixed factor. Journal of Political Economy, 70(6), 538–555.",
    /* 14 */ "Hamermesh, D. S. (1993). Labor Demand. Princeton, NJ: Princeton University Press.",
    /* 15 */ "Jacobson, L. S., LaLonde, R. J., & Sullivan, D. G. (1993). Earnings losses of displaced workers. American Economic Review, 83(4), 685–709.",
    /* 16 */ "Davis, S. J., & von Wachter, T. (2011). Recessions and the costs of job loss. Brookings Papers on Economic Activity, Fall, 1–72.",
    /* 17 */ "Fujita, S., & Moscarini, G. (2017). Recall and unemployment. American Economic Review, 107(12), 3875–3916.",
    /* 18 */ "Lee, D. S., & Lemieux, T. (2010). Regression discontinuity designs in economics. Journal of Economic Literature, 48(2), 281–355.",
    /* 19 */ "Calonico, S., Cattaneo, M. D., & Titiunik, R. (2014). Robust nonparametric confidence intervals for regression-discontinuity designs. Econometrica, 82(6), 2295–2326.",
    /* 20 */ "McCrary, J. (2008). Manipulation of the running variable in the regression discontinuity design: A density test. Journal of Econometrics, 142(2), 698–714.",
    /* 21 */ "Cattaneo, M. D., Jansson, M., & Ma, X. (2020). Simple local polynomial density estimators. Journal of the American Statistical Association, 115(531), 1449–1455.",
    /* 22 */ "Coibion, O., Gorodnichenko, Y., & Weber, M. (2020). Labor markets during the COVID-19 crisis: A preliminary view. NBER Working Paper No. 27017. Cambridge, MA: National Bureau of Economic Research.",
    /* 23 */ "Bartik, A. W., Bertrand, M., Cullen, Z., Glaeser, E. L., Luca, M., & Stanton, C. (2020). The impact of COVID-19 on small business outcomes and expectations. Proceedings of the National Academy of Sciences, 117(30), 17656–17666.",
    /* 24 */ "Guerrieri, V., Lorenzoni, G., Straub, L., & Werning, I. (2020). Macroeconomic implications of COVID-19: Can negative supply shocks cause demand shortages? NBER Working Paper No. 26918. Cambridge, MA: National Bureau of Economic Research.",
    /* 25 */ "Barrero, J. M., Bloom, N., & Davis, S. J. (2020). COVID-19 is also a reallocation shock. Brookings Papers on Economic Activity, Summer, 329–371.",
    /* 26 */ "Gourinchas, P.-O., Kalemli-Özcan, Ş., Penciakova, V., & Sander, N. (2020). COVID-19 and SME failures. NBER Working Paper No. 27877. Cambridge, MA: National Bureau of Economic Research.",
    /* 27 */ "Autor, D., Cho, D., Crane, L. D., Goldar, M., Lutz, B., Montes, J., Peterman, W. B., Ratner, D., Villar, D., & Yildirmaz, A. (2020). An evaluation of the Paycheck Protection Program using administrative payroll microdata. Working Paper, Massachusetts Institute of Technology.",
    /* 28 */ "Hubbard, R. G., & Strain, M. R. (2020). Has the Paycheck Protection Program succeeded? Brookings Papers on Economic Activity, Fall, 335–390.",
    /* 29 */ "Elsby, M. W. L., Hobijn, B., & Şahin, A. (2010). The labor market in the Great Recession. Brookings Papers on Economic Activity, Spring, 1–48.",
    /* 30 */ "Imbens, G. W., & Lemieux, T. (2008). Regression discontinuity designs: A guide to practice. Journal of Econometrics, 142(2), 615–635.",
    /* 31 */ "Kaplan, G., Moll, B., & Violante, G. L. (2020). The great lockdown and the big stimulus: Tracing the pandemic possibility frontier for the U.S. NBER Working Paper No. 27794. Cambridge, MA: National Bureau of Economic Research.",
    /* 32 */ "Cahuc, P., & Carcillo, S. (2011). Is short-time work a good method to keep unemployment down? Nordic Economic Policy Review, 1(1), 133–164.",
  ],
  body: [
    {
      id: "introduction",
      heading: "1. Introduction",
      paragraphs: [
        "The COVID-19 pandemic confronted governments with an unusual problem: a sharp but potentially temporary collapse in demand for the output of otherwise viable firms. Social-distancing rules, voluntary avoidance of crowded places and supply disruptions reduced revenues in restaurants, hotels, travel agencies and personal services within weeks [22][23]. If firms responded by dismissing their workers, the shock risked destroying employer–employee matches that had taken years to form, together with the firm-specific human capital embedded in them. A large literature documents that displaced workers suffer persistent earnings losses [15], that these losses are much larger when displacement occurs in recessions [16], and that recalls to former employers are an important channel through which unemployment declines after downturns [17].",
        "Short-time work and job retention schemes, which subsidise firms for keeping workers on reduced hours rather than laying them off, became the main policy response to this problem across advanced economies [3]. Their use during the Great Recession has been studied extensively in Europe, where cross-country evidence suggests that they preserved a substantial number of jobs in countries such as Germany, Italy and Japan [1][2][9]. Yet two concerns remain. First, subsidies may support jobs that would have survived anyway, creating deadweight costs. Second, schemes that are generous for too long may slow the reallocation of workers from declining to expanding firms [25]. The balance between these benefits and costs is likely to depend on institutional details and on the nature of the shock.",
        "Much less is known about how such schemes work in labour markets without a long tradition of short-time work. Korea is an instructive case. Its Employment Retention Subsidy (ERS) has existed since the late 1990s, but before 2020 it was used by only a few thousand firms a year, mainly in manufacturing. In March 2020 the government sharply expanded the programme, raising the subsidy for priority-support enterprises — a status defined by industry-specific employment thresholds — to 90 percent of the furlough allowance paid to workers, while larger firms continued to receive a lower rate. Within three months more than 70,000 firms had applied, a twentyfold increase over the previous year.",
        "Because priority-support status depends on whether a firm's employment lies below a threshold that differs across industries, otherwise similar firms on either side of the threshold faced very different subsidy rates during the crisis. We exploit this feature using monthly employment-insurance records for 412,000 firms between January 2019 and September 2020. Our difference-in-discontinuities design compares firms just below and just above the threshold, before and after the March 2020 reform, differencing out any discontinuity in outcomes that existed before the crisis [7]. This approach addresses the central challenge in evaluating job retention schemes: take-up is voluntary and is likely to be correlated with the severity of the shock a firm experiences.",
        "We find that the more generous subsidy raised the probability of take-up by 21.2 percentage points, reduced layoffs between March and September 2020 by 3.4 percent of pre-crisis employment and lowered the probability that a firm stopped reporting insured employment by 1.9 percentage points. Average hours per insured worker rose by 4.1 percent relative to firms above the threshold, reflecting the use of partial furloughs. These effects are strongly heterogeneous. In accommodation, food and personal services the reduction in layoffs is 6.2 percent of employment, compared with 1.1 percent in manufacturing, and firms in the bottom quartile of pre-crisis cash holdings account for more than half of the reduction in exit. This pattern is consistent with evidence that liquidity constraints amplify employment losses in downturns [4] and that small firms entered the pandemic with very limited cash buffers [23][26].",
        "Combining the estimated effects on take-up and layoffs with administrative data on subsidy payments, we calculate a fiscal cost of about KRW 8.7 million per job retained through September 2020 — roughly five months of unemployment benefits for a median worker, before accounting for the value of preserved matches. The cost per job retained is two to three times higher in manufacturing than in services, reflecting greater deadweight where demand recovered quickly. Our results therefore support the use of job retention schemes in a deep but temporary shock, while suggesting that targeting generosity to sectors facing prolonged disruption would improve cost-effectiveness.",
        "The remainder of the paper is organised as follows. Section 2 describes the institutional background. Section 3 reviews related literature. Section 4 presents a simple conceptual framework. Section 5 describes the data and Section 6 the empirical strategy. Section 7 reports the main results, Section 8 robustness checks and Section 9 discusses implications. Section 10 concludes.",
      ],
    },
    {
      id: "background",
      heading: "2. Institutional Background",
      paragraphs: [
        "This section describes Korea's Employment Retention Subsidy before the pandemic, the changes introduced in 2020, and how the Korean scheme compares with short-time work programmes elsewhere.",
      ],
      subsections: [
        {
          id: "ers-before",
          heading: "2.1 The Employment Retention Subsidy before 2020",
          paragraphs: [
            "The ERS was introduced after the Asian financial crisis as part of the employment-insurance system. Firms experiencing a decline in sales or production could apply for a subsidy covering part of the allowance paid to workers placed on paid leave (furlough) or reduced hours, provided they did not dismiss workers for economic reasons during the subsidy period. Workers on furlough must receive at least 70 percent of their average wage. Before 2020 the subsidy covered two-thirds of this allowance for priority-support enterprises and one-half for large firms, up to a daily ceiling, for a maximum of 180 days per year.",
            "Take-up was low. Between 2015 and 2019 an average of about 1,500 firms a year received the subsidy, concentrated in shipbuilding, automobile parts and other manufacturing industries affected by restructuring. Administrative requirements — documentation of sales declines, prior approval of furlough plans and monthly reporting — were widely regarded as burdensome for small firms.",
          ],
        },
        {
          id: "ers-reform",
          heading: "2.2 The 2020 Expansion",
          paragraphs: [
            "In February 2020 the government began relaxing eligibility requirements for firms affected by the pandemic, and from 25 March 2020 it raised the subsidy rate for priority-support enterprises to 90 percent of the furlough allowance, while large firms remained at two-thirds. Documentation requirements were simplified and the daily ceiling was raised. The higher rate initially applied from April to June and was later extended through September and then to the end of the year.",
            "Priority-support status is defined in the Employment Insurance Act by industry-specific thresholds on the number of regular employees: 500 in manufacturing, 300 in mining, construction, transport and several services, 200 in wholesale and retail trade and information services, and 100 in other industries. Firms are classified according to their average employment over the previous year. Because the thresholds were set long before the pandemic and apply to past employment, firms could not change their status in response to the reform. This creates sharp differences in the subsidy rate between firms of similar size in the same industry.",
          ],
        },
        {
          id: "comparison",
          heading: "2.3 Comparison with Other Schemes",
          paragraphs: [
            "Korea's scheme differs from German Kurzarbeit and similar European programmes in two respects. First, the subsidy is paid to the firm as a share of the allowance it pays to furloughed workers, rather than as a benefit paid directly to workers; firms therefore bear part of the cost of retaining workers even at the 90 percent rate. Second, the scheme was little used before 2020, so firms and administrators had limited experience with it. In contrast to the US Paycheck Protection Program, which offered forgivable loans conditional on maintaining payroll regardless of hours worked [5][27], the Korean subsidy is tied explicitly to hours not worked, which may target support more closely to jobs at risk.",
            "Table 1 summarises the main parameters of the scheme and the changes introduced in 2020.",
          ],
          tables: [
            {
              id: "table-1",
              caption: "Table 1. Employment Retention Subsidy parameters, 2019–2020",
              columns: ["Parameter", "2019", "April–September 2020"],
              rows: [
                ["Subsidy rate, priority-support enterprises", "2/3 of allowance", "90% of allowance"],
                ["Subsidy rate, large firms", "1/2 of allowance", "2/3 of allowance"],
                ["Daily ceiling per worker (KRW)", "66,000", "66,000"],
                ["Maximum duration (days per year)", "180", "180 (extended to 240)"],
                ["Prior sales-decline documentation", "Required", "Simplified"],
                ["Firms receiving the subsidy", "1,514", "72,200"],
              ],
              note: "Note: The allowance paid to furloughed workers must be at least 70 percent of average wages. Source: Ministry of Employment and Labor.",
            },
          ],
        },
      ],
    },
    {
      id: "literature",
      heading: "3. Related Literature",
      paragraphs: [
        "Our paper contributes to three literatures: the evaluation of short-time work, the analysis of pandemic-era labour-market policies, and research on labour hoarding and the costs of job loss.",
      ],
      subsections: [
        {
          id: "lit-stw",
          heading: "3.1 Short-Time Work in the Great Recession",
          paragraphs: [
            "Cross-country studies find that short-time work schemes reduced job losses during the 2008–2009 recession, particularly in countries where schemes were already established and administratively simple [1][2][9]. Boeri and Brücker {1} estimate that short-time work saved several hundred thousand jobs in Germany alone, while warning of deadweight and displacement effects. Using a structural business-cycle model, Balleer et al. {10} conclude that the automatic stabiliser component of German short-time work is effective at preserving jobs, whereas discretionary extensions are less so. Cahuc and Carcillo {32} emphasise that the benefits depend on whether schemes are targeted to temporary shocks.",
            "Theoretical work dating back to Burdett and Wright {11} and Van Audenrode {12} shows that short-time compensation changes the margins along which firms adjust labour: by subsidising hours reductions, it encourages firms to share a shock across workers rather than concentrating it on those who are laid off. Whether this is efficient depends on the size of adjustment costs and on whether the shock is temporary.",
          ],
        },
        {
          id: "lit-covid",
          heading: "3.2 Pandemic Labour-Market Policies",
          paragraphs: [
            "The speed and concentration of job losses in 2020 differed markedly from the Great Recession, when unemployment rose more gradually and was concentrated in construction and manufacturing [29]. Real-time data show that the employment collapse of spring 2020 was concentrated among low-wage workers in high-contact sectors [6][22]. Small businesses entered the crisis with limited cash and expected to close if the disruption lasted more than a few months [23], and simulations suggested that business failures would have risen sharply without policy support [26]. Theoretical analyses emphasise that the pandemic combined supply and demand shocks [24] and that the optimal policy mix trades off health and economic outcomes [31].",
            "The most studied programme is the US Paycheck Protection Program. Early evidence suggests that funds did not flow disproportionately to the hardest-hit areas [5] and that employment effects were positive but modest relative to cost, with a large share of funds supporting jobs that would not have been lost [27][28]. Our paper provides comparable evidence for a job retention scheme in which subsidies are tied to hours not worked, and exploits a sharp eligibility threshold rather than variation in the timing of loan approvals.",
          ],
        },
        {
          id: "lit-hoarding",
          heading: "3.3 Labour Hoarding and the Costs of Job Loss",
          paragraphs: [
            "Firms hoard labour when hiring and training costs make workers a quasi-fixed factor [13][14]. The costs of separations are borne not only by firms but also by workers, whose earnings fall persistently after displacement [15][16]. In recessions, these private and social costs rise, providing a rationale for subsidising retention. At the same time, the pandemic also shifted demand persistently across firms and sectors [25], so that preserving every existing match would not be efficient. Our heterogeneity analysis speaks to this trade-off.",
          ],
        },
      ],
    },
    {
      id: "framework",
      heading: "4. Conceptual Framework",
      paragraphs: [
        "To guide the empirical analysis, consider a firm with n workers that experiences a temporary fall in demand, reducing the value of each worker's output from p to p − d for a period of length T. The firm can either lay off workers, saving their wage w but incurring a re-hiring and training cost h per worker when demand recovers, or retain them on furlough, paying an allowance a ≥ 0.7w and receiving a subsidy s·a per worker. Ignoring discounting, retaining a worker is preferred if the net cost of retention over the shock is lower than the cost of re-hiring: (1 − s)·a·T < h + (expected loss of firm-specific productivity).",
        "Three predictions follow. First, raising s from two-thirds to 0.9 reduces the net cost of retention by about 70 percent and should increase take-up among firms for which the inequality was previously close to binding. Second, the effect on layoffs should be larger where the shock is long relative to re-hiring costs — so that retention is costly without the subsidy — and where firms cannot finance the allowance internally, because liquidity-constrained firms may lay off workers even when retention is privately optimal [4]. Third, deadweight — subsidy payments for workers who would have been retained anyway — should be largest where shocks are short or re-hiring costs high, as in manufacturing with specialised skills.",
        "The framework also clarifies the interpretation of our estimates. Because firms below the threshold receive a higher subsidy for any furloughed worker, the difference-in-discontinuities estimate captures the effect of a more generous subsidy relative to a less generous one, not the effect of the scheme relative to no scheme. Our estimates are therefore likely to be a lower bound on the total employment effect of the ERS.",
      ],
    },
    {
      id: "data",
      heading: "5. Data",
      paragraphs: [
        "This section describes our data sources, sample construction and key variables.",
      ],
      subsections: [
        {
          id: "data-sources",
          heading: "5.1 Sources",
          paragraphs: [
            "Our main source is the employment-insurance database maintained by the Korea Employment Information Service. It records, for every firm with at least one insured worker, monthly insured employment, hirings and separations, and for each separation the reason reported by the employer (dismissal for business reasons, voluntary quit, end of contract, retirement and others). We link these records to administrative data on ERS applications and payments, including the number of workers furloughed and the subsidy paid per month, and to business-register information on firm age, industry and location.",
            "To measure liquidity, we match firms to financial statements from a commercial database covering externally audited firms and a large sample of smaller firms that file statements with banks. We construct the ratio of cash and equivalents to total assets at the end of 2019. Financial data are available for about 58 percent of firms in our estimation sample.",
          ],
        },
        {
          id: "data-sample",
          heading: "5.2 Sample and Variables",
          paragraphs: [
            "We restrict the sample to firms with between 5 and 1,000 insured workers in December 2019 and with positive insured employment in every month of 2019, giving 412,000 firms. For each firm we compute the normalised distance between its average 2019 employment and the priority-support threshold for its industry, expressed as a percentage of the threshold. Our main estimation sample consists of firms within 20 percent of their threshold, about 35,600 firms.",
            "Outcomes are measured monthly. Take-up is an indicator for receiving any ERS payment in the month. Layoffs are separations for business reasons, scaled by insured employment in December 2019. Exit is an indicator that a firm reports no insured employment in a month and in all subsequent months of our sample. Hours are proxied by insured earnings per worker, which fall proportionally when workers are partially furloughed. Table 2 compares firms just below and just above the thresholds before the pandemic.",
          ],
          tables: [
            {
              id: "table-2",
              caption: "Table 2. Firms near the priority-support threshold, December 2019",
              columns: ["Variable", "Below threshold", "Above threshold", "Difference"],
              rows: [
                ["Insured employees", "96.4", "118.2", "21.8***"],
                ["Firm age (years)", "14.1", "15.3", "1.2"],
                ["Share in face-to-face services", "0.31", "0.29", "0.02"],
                ["Share in manufacturing", "0.27", "0.28", "−0.01"],
                ["Monthly separation rate, 2019", "0.021", "0.020", "0.001"],
                ["Monthly layoff rate, 2019", "0.004", "0.004", "0.000"],
                ["Cash-to-assets ratio", "0.11", "0.12", "0.01"],
                ["Received ERS in 2019 (share)", "0.006", "0.005", "0.001"],
                ["Firms", "18,640", "16,920", ""],
              ],
              note: "Note: Firms within 20 percent of their industry-specific threshold. Differences are not adjusted for the running variable; the difference in employment reflects the definition of the threshold. *** significant at the 1 percent level.",
            },
          ],
        },
      ],
    },
    {
      id: "strategy",
      heading: "6. Empirical Strategy",
      paragraphs: [
        "A simple comparison of firms that did and did not receive the subsidy would be misleading, because take-up is voluntary and likely to be correlated with the severity of the shock. A standard regression discontinuity at the threshold during 2020 would also be problematic if other policies or firm characteristics changed discontinuously at the same thresholds — for example, priority-support status also affects eligibility for some tax credits. We therefore combine the regression discontinuity with a before–after comparison.",
      ],
      subsections: [
        {
          id: "specification",
          heading: "6.1 Difference-in-Discontinuities",
          paragraphs: [
            "Let r_i denote the normalised distance of firm i's 2019 employment from its industry threshold, D_i = 1[r_i < 0] an indicator for priority-support status, and Post_t an indicator for months from April 2020. For outcome y_it we estimate local linear regressions of the form y_it = α + β·D_i + γ·r_i + δ·D_i·r_i + Post_t·(α' + τ·D_i + γ'·r_i + δ'·D_i·r_i) + μ_m + ε_it, where μ_m are calendar-month fixed effects. The coefficient τ is the difference between the post-reform and pre-reform discontinuities and identifies the effect of the higher subsidy rate [7].",
            "Implementation follows standard practice for regression discontinuity designs [18][30]. We use a bandwidth of 20 percent of the threshold and a triangular kernel, and show robustness to alternative bandwidths including the data-driven bandwidth of Calonico, Cattaneo and Titiunik {19}. Standard errors are clustered at the industry (four-digit) level to account for correlated shocks within industries and serial correlation within firms [8].",
          ],
        },
        {
          id: "identification",
          heading: "6.2 Identifying Assumptions and Validity Tests",
          paragraphs: [
            "The design requires that, absent the reform, any discontinuity in outcomes at the threshold would have remained constant between 2019 and 2020. Several features support this assumption. First, thresholds were set long before the pandemic and status is determined by 2019 employment, so firms could not manipulate their status in response to the reform. Second, Table 2 shows that firms on either side of the threshold were similar in age, sector, separation rates, liquidity and prior ERS use. Third, density tests [20][21] find no evidence of bunching of firms below the threshold in 2019 (test statistic 0.71, p = 0.48).",
            "Most importantly, Figure 1 shows estimated discontinuities in layoffs by quarter. Before the reform, the discontinuity is small and statistically indistinguishable from zero in every quarter; it becomes large and negative from the second quarter of 2020, when the higher subsidy took effect. The absence of pre-trends supports the parallel-discontinuities assumption.",
          ],
          figures: [
            {
              id: "figure-1",
              caption: "Figure 1. Discontinuity in layoffs at the priority-support threshold, by quarter",
              kind: "line",
              xLabels: ["2019Q1", "2019Q2", "2019Q3", "2019Q4", "2020Q1", "2020Q2", "2020Q3"],
              yLabel: "Layoffs / pre-crisis employment (pp)",
              series: [
                {
                  name: "Discontinuity estimate",
                  values: [0.08, -0.05, 0.03, -0.02, -0.21, -2.46, -0.94],
                  lower: [-0.31, -0.44, -0.36, -0.41, -0.68, -3.31, -1.62],
                  upper: [0.47, 0.34, 0.42, 0.37, 0.26, -1.61, -0.26],
                },
              ],
              marker: 4,
              note: "Note: Each point is a local linear estimate of the discontinuity in quarterly layoffs (percentage points of December 2019 employment) with 95 percent confidence intervals. The dashed line marks the 25 March 2020 reform.",
            },
          ],
        },
      ],
    },
    {
      id: "results",
      heading: "7. Results",
      paragraphs: [
        "We first report effects on take-up, then on employment outcomes, dynamics, heterogeneity and cost-effectiveness.",
      ],
      subsections: [
        {
          id: "takeup",
          heading: "7.1 Take-up",
          paragraphs: [
            "Being below the threshold after the reform raised the probability of receiving the ERS in at least one month between April and September 2020 by 21.2 percentage points, from a base of about 14 percent above the threshold. The effect appears immediately in April and is largest in the first months of the reform. Among firms that took up the subsidy, the average share of insured workers furloughed in a month was 37 percent below the threshold and 31 percent above it, so the higher subsidy increased both participation and the intensity of use.",
          ],
        },
        {
          id: "employment",
          heading: "7.2 Layoffs, Hours and Exit",
          paragraphs: [
            "Table 3 reports the main estimates. Layoffs between April and September 2020 fell by 3.4 percent of pre-crisis employment for firms below the threshold, relative to the pre-reform discontinuity. The probability that a firm ceased to report any insured employment by September 2020 fell by 1.9 percentage points, from a base exit rate of 4.8 percent. Insured earnings per worker — our proxy for hours — rose by 4.1 percent, consistent with firms reducing hours of many workers rather than dismissing some of them. We find no significant effect on voluntary quits or on hiring, suggesting that the subsidy operated mainly by preventing dismissals.",
          ],
          tables: [
            {
              id: "table-3",
              caption: "Table 3. Effect of the higher subsidy rate (difference-in-discontinuities)",
              columns: ["Outcome", "Estimate", "Std. error", "Pre-reform mean", "Observations"],
              rows: [
                ["ERS take-up (any month)", "0.212***", "(0.018)", "0.000", "35,560"],
                ["Share of workers furloughed", "0.061***", "(0.009)", "0.002", "35,560"],
                ["Layoffs / pre-crisis employment", "−0.034***", "(0.006)", "0.061", "35,560"],
                ["Firm exit by September 2020", "−0.019***", "(0.005)", "0.048", "35,560"],
                ["Log earnings per worker (hours proxy)", "0.041***", "(0.011)", "—", "742,100"],
                ["Voluntary quits / employment", "−0.002", "(0.004)", "0.072", "35,560"],
                ["Hires / employment", "0.003", "(0.005)", "0.084", "35,560"],
              ],
              note: "Note: Local linear estimates with a bandwidth of 20 percent of the threshold and a triangular kernel; standard errors clustered by four-digit industry. *** p < 0.01.",
            },
          ],
        },
        {
          id: "dynamics",
          heading: "7.3 Dynamics",
          paragraphs: [
            "Figure 1 shows that the effect on layoffs was concentrated in the second quarter of 2020, when the first wave of the pandemic and the strictest distancing measures coincided, and remained significant but smaller in the third quarter as activity partly recovered. Cumulatively, the reduction in layoffs persisted: firms below the threshold did not dismiss more workers in the third quarter to catch up, suggesting that the subsidy preserved rather than merely delayed jobs over our sample period. Whether these jobs survived the later waves of the pandemic is a question for future research.",
          ],
        },
        {
          id: "heterogeneity",
          heading: "7.4 Heterogeneity",
          paragraphs: [
            "The effects are strongly heterogeneous across sectors and firms, as predicted by the framework in Section 4. Table 4 and Figure 2 show that in accommodation, food and personal services layoffs fell by 6.2 percent of employment, compared with 1.1 percent in manufacturing, where demand recovered quickly and many subsidised furloughs would likely have ended without job losses. Effects are also large in transport and travel services. Firms in the bottom quartile of pre-crisis cash holdings show a reduction in exit of 4.3 percentage points, compared with 0.6 percentage points in the top quartile, and account for more than half of the overall reduction in exit. This pattern echoes evidence that credit constraints are central to how firms adjust employment in crises [4][26].",
          ],
          tables: [
            {
              id: "table-4",
              caption: "Table 4. Heterogeneous effects of the higher subsidy rate",
              columns: ["Group", "Take-up", "Layoffs / employment", "Exit", "Firms"],
              rows: [
                ["Accommodation, food and personal services", "0.338***", "−0.062***", "−0.031***", "6,920"],
                ["Transport and travel services", "0.291***", "−0.048***", "−0.024**", "2,710"],
                ["Wholesale and retail trade", "0.184***", "−0.029***", "−0.016**", "7,480"],
                ["Manufacturing", "0.157***", "−0.011*", "−0.006", "9,830"],
                ["Bottom quartile of cash/assets", "0.247***", "−0.051***", "−0.043***", "5,160"],
                ["Top quartile of cash/assets", "0.176***", "−0.018**", "−0.006", "5,150"],
              ],
              note: "Note: Each cell is a separate difference-in-discontinuities estimate. Cash-to-assets quartiles are available for firms with financial statements. * p < 0.10, ** p < 0.05, *** p < 0.01.",
            },
          ],
          figures: [
            {
              id: "figure-2",
              caption: "Figure 2. Reduction in layoffs by sector (percent of pre-crisis employment)",
              kind: "bar",
              xLabels: ["Face-to-face services", "Transport", "Trade", "Manufacturing"],
              yLabel: "Reduction in layoffs (pp)",
              series: [
                {
                  name: "Estimated reduction",
                  values: [6.2, 4.8, 2.9, 1.1],
                  lower: [4.6, 2.9, 1.5, -0.1],
                  upper: [7.8, 6.7, 4.3, 2.3],
                },
              ],
              note: "Note: Bars show the estimated reduction in layoffs between April and September 2020 with 95 percent confidence intervals.",
            },
          ],
        },
        {
          id: "cost",
          heading: "7.5 Cost-Effectiveness",
          paragraphs: [
            "To assess cost-effectiveness, we divide the additional subsidy paid to firms below the threshold — the product of the effect on take-up and furlough intensity and the average monthly subsidy — by the number of jobs retained, measured as the reduction in layoffs plus the employment of firms that avoided exit. Over April–September 2020 this yields a fiscal cost of about KRW 8.7 million per job retained (Table 5). For comparison, five months of unemployment benefits for a worker at the median insured wage would cost about KRW 8.4 million, so that even ignoring the value of preserved matches and firm-specific skills, the scheme was roughly cost-neutral relative to unemployment insurance.",
            "Cost-effectiveness differs sharply by sector. In face-to-face services the cost per job retained is about KRW 6.1 million, whereas in manufacturing it rises to KRW 17.4 million, reflecting a larger share of payments for workers who would have been retained anyway. Targeting the most generous subsidy rates to sectors facing prolonged disruption would therefore have reduced the overall cost per job substantially.",
          ],
          tables: [
            {
              id: "table-5",
              caption: "Table 5. Fiscal cost per job retained, April–September 2020",
              columns: ["Sector", "Additional subsidy per firm (KRW m)", "Jobs retained per firm", "Cost per job (KRW m)"],
              rows: [
                ["All firms", "29.3", "3.37", "8.7"],
                ["Face-to-face services", "34.8", "5.71", "6.1"],
                ["Wholesale and retail trade", "23.1", "2.64", "8.8"],
                ["Manufacturing", "26.4", "1.52", "17.4"],
              ],
              note: "Note: Jobs retained combine the reduction in layoffs and employment in firms that avoided exit. Figures are averages for firms within the estimation bandwidth.",
            },
          ],
        },
      ],
    },
    {
      id: "robustness",
      heading: "8. Robustness",
      paragraphs: [
        "Table 6 reports a series of robustness checks for the effect on layoffs. Estimates are stable when the bandwidth is halved to 10 percent or doubled to 40 percent, and when we use the data-driven optimal bandwidth with robust bias-corrected inference [19]. Excluding firms within 2 percent of the threshold ('donut' specification), which addresses concerns about rounding of employment counts, leaves the estimate essentially unchanged. Adding region-by-month fixed effects to absorb local variation in infection rates and distancing measures also has little effect.",
        "Placebo thresholds set at 70 and 130 percent of the true thresholds yield small and insignificant estimates, as does a placebo reform date of March 2019. Restricting the sample to firms founded before 2015 rules out the possibility that recently established firms with unusual growth paths drive the results. Finally, estimating separate discontinuities for each industry-specific threshold yields similar effects at the 100-, 200-, 300- and 500-employee thresholds, indicating that the results are not driven by a single industry group.",
      ],
      tables: [
        {
          id: "table-6",
          caption: "Table 6. Robustness of the effect on layoffs",
          columns: ["Specification", "Estimate", "Std. error", "Observations"],
          rows: [
            ["Baseline (bandwidth 20%)", "−0.034***", "(0.006)", "35,560"],
            ["Bandwidth 10%", "−0.037***", "(0.009)", "17,410"],
            ["Bandwidth 40%", "−0.031***", "(0.005)", "71,220"],
            ["Optimal bandwidth, robust bias-corrected", "−0.035***", "(0.008)", "29,840"],
            ["Donut (exclude ±2%)", "−0.033***", "(0.007)", "32,180"],
            ["Region-by-month fixed effects", "−0.033***", "(0.006)", "35,560"],
            ["Placebo threshold at 70%", "0.002", "(0.006)", "34,920"],
            ["Placebo threshold at 130%", "−0.003", "(0.007)", "36,110"],
            ["Placebo reform date, March 2019", "0.001", "(0.005)", "35,560"],
          ],
          note: "Note: *** p < 0.01.",
        },
      ],
    },
    {
      id: "discussion",
      heading: "9. Discussion",
      paragraphs: [
        "Three lessons emerge for the design of job retention schemes. First, generosity matters at the margin: even in a scheme that already subsidised two-thirds of furlough costs, raising the rate to 90 percent substantially increased take-up and reduced dismissals among small firms. The high take-up response suggests that the firm's residual share of furlough costs was a binding constraint for many small employers, consistent with their limited cash buffers [23].",
        "Second, the value of retention subsidies depends on the expected duration of the shock and on reallocation needs. Our estimates of deadweight are largest in manufacturing, where demand recovered within months; in such sectors, a less generous rate would have preserved most jobs at much lower cost. In sectors facing prolonged disruption, by contrast, the subsidy prevented a large number of dismissals and closures. If the pandemic also caused lasting shifts in demand [25], schemes should be designed to taper as the economy recovers, so as not to hold workers in firms with poor long-run prospects.",
        "Third, administrative simplicity appears to be an important complement to generosity. The 2020 reform combined a higher subsidy rate with simplified documentation, and the twentyfold increase in participation suggests that procedural barriers had kept take-up low before the pandemic. Comparable evidence from Europe points to the advantage of having schemes in place before a crisis [1][2], a lesson that Korea's experience reinforces.",
        "Our analysis has limitations. The difference-in-discontinuities design identifies effects for firms near the thresholds, which are medium-sized firms with roughly 100 to 500 employees; effects for the smallest firms may differ. We measure outcomes only through September 2020 and cannot assess whether retained jobs survived later waves of the pandemic. And our cost calculations do not account for the general-equilibrium effects of the scheme on aggregate demand [31].",
      ],
    },
    {
      id: "conclusion",
      heading: "10. Conclusion",
      paragraphs: [
        "Korea's expanded job retention subsidy preserved jobs and firms during the first wave of the COVID-19 pandemic at a moderate fiscal cost. Using industry-specific size thresholds that determined eligibility for the higher subsidy rate, we find substantial effects on take-up, layoffs and firm exit, concentrated in high-contact services and among liquidity-constrained firms. Deadweight was concentrated in sectors where the shock was short-lived.",
        "These findings suggest that job retention schemes can work even where they are new, provided they are generous enough to cover most of the cost of retention for small firms and simple enough to use. They also suggest that differentiating generosity by the expected duration of sectoral shocks, and tapering support as recovery proceeds, would improve cost-effectiveness [1][3][32]. As governments prepare for future crises, establishing such schemes in advance — with clear rules for scaling them up and down — may be one of the most valuable investments in labour-market resilience.",
      ],
    },
  ],
};
