// Vol. 26, No. 3 (July 2021) — full research paper (sample content).
import type { PaperSpec } from "../paper-spec";

export const paper: PaperSpec = {
  id: "2021-v26-i3-01",
  title: "The Motherhood Penalty in Korea: Event-Study Evidence from Linked Administrative Records",
  authors: [{ name: "Sang-Yoon Han", corresponding: true }, { name: "Keiko Sato" }],
  abstract:
    "Korea combines one of the world's lowest fertility rates with one of the largest gender pay gaps in the OECD. We estimate the effect of the first child on parents' labour-market outcomes using linked health-insurance and employment-insurance records for parents whose first child was born between 2008 and 2014, followed through 2019. Using an event-study design, we find that mothers' earnings fall by 61 percent relative to their pre-birth trajectory in the year after birth and remain 49 percent lower five years later, while fathers' earnings are unaffected. The long-run child penalty is driven mainly by exits from employment: mothers' employment rates fall by 38 percentage points. Penalties are smaller for mothers working in the public sector and in firms that provide workplace childcare, and they declined modestly after the expansion of paternity-related leave incentives in 2014. The results suggest that the child penalty is a central driver of gender inequality in Korea's labour market.",
  keywords: ["Child penalty", "Gender gap", "Fertility", "Parental leave", "Event study"],
  jelCodes: ["J16", "J13", "J22", "J31"],
  pages: "241–270",
  volume: 26,
  issue: 3,
  year: 2021,
  received: "2020-11-02",
  accepted: "2021-04-26",
  published: "2021-07-15",
  publishedOnline: "2021-07-02",
  citations: 41,
  downloads: 3540,
  pdfSize: "1.69 MB",
  type: "Research Article",
  acknowledgments:
    "We thank participants at the Korean Labor Economic Association annual meeting and the Hanyang University economics seminar, two anonymous referees and the handling editor for helpful comments. Because Keiko Sato is an Associate Editor of the journal, the manuscript was handled independently by another editor.",
  dataAvailability:
    "The linked administrative records are accessible through the National Health Insurance Service research database under a data-use agreement. Code is available from the corresponding author.",
  refs: [
    /* 1 */ "Goldin, C. (2014). A grand gender convergence: Its last chapter. American Economic Review, 104(4), 1091–1119.",
    /* 2 */ "Kleven, H., Landais, C., & Søgaard, J. E. (2019). Children and gender inequality: Evidence from Denmark. American Economic Journal: Applied Economics, 11(4), 181–209.",
    /* 3 */ "Kleven, H., Landais, C., Posch, J., Steinhauer, A., & Zweimüller, J. (2019). Child penalties across countries: Evidence and explanations. AEA Papers and Proceedings, 109, 122–126.",
    /* 4 */ "Angelov, N., Johansson, P., & Lindahl, E. (2016). Parenthood and the gender gap in pay. Journal of Labor Economics, 34(3), 545–579.",
    /* 5 */ "Lundborg, P., Plug, E., & Rasmussen, A. W. (2017). Can women have children and a career? IV evidence from IVF treatments. American Economic Review, 107(6), 1611–1637.",
    /* 6 */ "Bertrand, M., Goldin, C., & Katz, L. F. (2010). Dynamics of the gender gap for young professionals in the financial and corporate sectors. American Economic Journal: Applied Economics, 2(3), 228–255.",
    /* 7 */ "Olivetti, C., & Petrongolo, B. (2017). The economic consequences of family policies: Lessons from a century of legislation in high-income countries. Journal of Economic Perspectives, 31(1), 205–230.",
    /* 8 */ "Blau, F. D., & Kahn, L. M. (2017). The gender wage gap: Extent, trends, and explanations. Journal of Economic Literature, 55(3), 789–865.",
    /* 9 */ "Adda, J., Dustmann, C., & Stevens, K. (2017). The career costs of children. Journal of Political Economy, 125(2), 293–337.",
    /* 10 */ "Goldin, C., & Katz, L. F. (2016). A most egalitarian profession: Pharmacy and the evolution of a family-friendly occupation. Journal of Labor Economics, 34(3), 705–746.",
    /* 11 */ "Lalive, R., & Zweimüller, J. (2009). How does parental leave affect fertility and return to work? Evidence from two natural experiments. Quarterly Journal of Economics, 124(3), 1363–1402.",
    /* 12 */ "Schönberg, U., & Ludsteck, J. (2014). Expansions in maternity leave coverage and mothers' labor market outcomes after childbirth. Journal of Labor Economics, 32(3), 469–505.",
    /* 13 */ "Dahl, G. B., Løken, K. V., Mogstad, M., & Salvanes, K. V. (2016). What is the case for paid maternity leave? Review of Economics and Statistics, 98(4), 655–670.",
    /* 14 */ "Kleven, H., Landais, C., Posch, J., Steinhauer, A., & Zweimüller, J. (2020). Do family policies reduce gender inequality? Evidence from 60 years of policy experimentation. NBER Working Paper No. 28082. Cambridge, MA: National Bureau of Economic Research.",
    /* 15 */ "Havnes, T., & Mogstad, M. (2011). Money for nothing? Universal child care and maternal employment. Journal of Public Economics, 95(11–12), 1455–1465.",
    /* 16 */ "Baker, M., Gruber, J., & Milligan, K. (2008). Universal child care, maternal labor supply, and family well-being. Journal of Political Economy, 116(4), 709–745.",
    /* 17 */ "Patnaik, A. (2019). Reserving time for daddy: The consequences of fathers' quotas. Journal of Labor Economics, 37(4), 1009–1059.",
    /* 18 */ "Dahl, G. B., Løken, K. V., & Mogstad, M. (2014). Peer effects in program participation. American Economic Review, 104(7), 2049–2074.",
    /* 19 */ "Waldfogel, J. (1998). Understanding the \"family gap\" in pay for women with children. Journal of Economic Perspectives, 12(1), 137–156.",
    /* 20 */ "Budig, M. J., & England, P. (2001). The wage penalty for motherhood. American Sociological Review, 66(2), 204–225.",
    /* 21 */ "Correll, S. J., Benard, S., & Paik, I. (2007). Getting a job: Is there a motherhood penalty? American Journal of Sociology, 112(5), 1297–1338.",
    /* 22 */ "Goldin, C., & Mitchell, J. (2017). The new life cycle of women's employment: Disappearing humps, sagging middles, expanding tops. Journal of Economic Perspectives, 31(1), 161–182.",
    /* 23 */ "Cortés, P., & Pan, J. (2019). When time binds: Substitutes for household production, returns to working long hours, and the skilled gender wage gap. Journal of Labor Economics, 37(2), 351–398.",
    /* 24 */ "Card, D., Cardoso, A. R., & Kline, P. (2016). Bargaining, sorting, and the gender wage gap: Quantifying the impact of firms on the relative pay of women. Quarterly Journal of Economics, 131(2), 633–686.",
    /* 25 */ "Kuziemko, I., Pan, J., Shen, J., & Washington, E. (2018). The mommy effect: Do women anticipate the employment effects of motherhood? NBER Working Paper No. 24740. Cambridge, MA: National Bureau of Economic Research.",
    /* 26 */ "Bertrand, M., Kamenica, E., & Pan, J. (2015). Gender identity and relative income within households. Quarterly Journal of Economics, 130(2), 571–614.",
    /* 27 */ "Doepke, M., & Kindermann, F. (2019). Bargaining over babies: Theory, evidence, and policy implications. American Economic Review, 109(9), 3264–3306.",
  ],
  body: [
    {
      id: "introduction",
      heading: "1. Introduction",
      paragraphs: [
        "Gender gaps in pay have narrowed in most high-income countries over the past half-century, as women caught up with and overtook men in educational attainment and accumulated more labour-market experience [8]. Yet a large residual gap remains, and a growing body of evidence attributes much of it to the unequal effect of children on mothers' and fathers' careers [1]. Event-study evidence from Danish administrative data shows that the birth of a first child reduces mothers' earnings by about 20 percent in the long run, while fathers' earnings are unaffected [2]. Comparative evidence finds even larger penalties in German-speaking and English-speaking countries and smaller penalties in Scandinavia [3].",
        "Korea is a natural, and so far largely missing, case in this literature. Its total fertility rate fell below one child per woman in 2018, the lowest in the world, and its gender pay gap has long been the largest among OECD members. Korean women are as well educated as men, and among recent cohorts more likely to hold a university degree, but their employment rates fall sharply in their early thirties — the age at which most have their first child. Evidence on how children affect Korean women's careers has so far relied on household surveys with small samples, short panels and self-reported earnings, which makes it difficult to separate the effect of children from selection into motherhood.",
        "This paper uses linked health-insurance and employment-insurance records covering all insured parents whose first child was born between 2008 and 2014 to estimate child penalties in Korea with precision. Following Kleven, Landais and Søgaard {2}, we compare the earnings trajectories of mothers and fathers around the birth of their first child, relative to counterfactual trajectories estimated from parents observed at different ages and calendar years. The administrative data allow us to follow about 840,000 couples from five years before to five years after the birth, and to link each parent to the characteristics of his or her employer.",
        "We find that mothers' earnings fall by 61 percent relative to their pre-birth trajectory in the year after birth and remain 49 percent lower five years later. Fathers' earnings continue along their pre-birth trajectory. The long-run child penalty is therefore more than twice as large as in Denmark. It is comparable to the largest penalties found in German-speaking countries and is driven mainly by exits from employment: five years after the birth, mothers' employment rates are 38 percentage points below their counterfactual, and the extensive margin accounts for about three-quarters of the earnings penalty.",
        "Penalties vary substantially with employers' family policies. They are 31 percent for mothers employed in the public sector before birth and 37 percent for mothers whose employer provides workplace childcare, compared with more than 50 percent for mothers in private firms without childcare. Penalties also declined modestly, by about 4 percentage points, for births after the 2014 introduction of a bonus for the second parent to take parental leave. These patterns suggest that the size of the child penalty is not fixed by preferences or norms alone, but responds to the institutions that determine whether continued employment after childbirth is feasible [7][14].",
        "Section 2 describes the Korean institutional setting. Section 3 reviews related literature and Section 4 sets out a simple framework. Section 5 describes the data and Section 6 the empirical strategy. Section 7 presents the main results, Section 8 examines mechanisms and the 2014 reform, Section 9 reports robustness checks, Section 10 discusses implications and Section 11 concludes.",
      ],
    },
    {
      id: "background",
      heading: "2. Institutional Background",
      paragraphs: [
        "Korean employees are entitled to 90 days of paid maternity leave around childbirth and to up to one year of job-protected parental leave per parent until the child reaches the age of eight. During our sample period, the parental leave benefit was a flat monthly amount until 2010 and was replaced in 2011 by a benefit of 40 percent of the ordinary wage, subject to a cap. Take-up was high among mothers employed in large firms and the public sector but low among mothers in small firms, and very few fathers took leave: fathers accounted for fewer than 5 percent of parental leave recipients in 2014.",
        "In October 2014 the government introduced an incentive for the second parent — in practice almost always the father — to take parental leave. The first month of leave taken by the second parent was compensated at 100 percent of the ordinary wage up to a higher cap, rather than at the standard replacement rate. The incentive was subsequently extended to three months. Fathers' share of leave-takers rose steadily after the reform, although from a very low base.",
        "Employers with at least 500 employees, or at least 300 female employees, are required to provide workplace childcare, either on site or through contracted centres; smaller employers may provide it voluntarily with public subsidies. Compliance with the mandate was incomplete during our sample period, but workplace childcare was available to about one in six mothers in our sample. Public childcare places expanded rapidly over the same period, and free childcare for children aged zero to five was introduced in 2012–2013, although places in high-quality public centres remained scarce.",
        "Finally, Korean labour-market institutions are dual. Workers in the public sector and in large firms enjoy secure, long-tenure employment with seniority-based pay, while workers in small firms and on fixed-term contracts face lower pay and weaker protection. Long working hours are common, and re-entry into secure employment after a career interruption is difficult. These features suggest that the cost of leaving employment after childbirth may be unusually high in Korea, and that the penalty may depend strongly on the type of job a mother holds before the birth.",
      ],
    },
    {
      id: "literature",
      heading: "3. Related Literature",
      paragraphs: [
        "A large literature documents that motherhood reduces women's earnings. Early studies estimated a wage penalty for mothers relative to childless women in cross-sectional and panel data [19][20], and audit studies show that employers discriminate against mothers in hiring [21]. Because women who have children may differ from those who do not, more recent work exploits within-person variation around birth. Event-study estimates from Denmark [2], Sweden [4] and a set of six countries [3] find large and persistent penalties for mothers and none for fathers, and estimates exploiting the success or failure of IVF treatment confirm that motherhood has causal effects on women's earnings [5].",
        "A second strand studies why children affect careers. Structural estimates suggest that skill depreciation during career interruptions and occupational choices made in anticipation of motherhood account for a substantial part of the career costs of children [9], and that women partly anticipate these effects [25]. Among highly educated professionals, career interruptions and reduced hours after childbirth explain much of the emerging gender gap [6], and occupations that reward long and inflexible hours penalise mothers most heavily [1][10][23]. Firms also matter: women capture a smaller share of firm-specific pay premiums than men [24], and the transmission of gender norms across generations shapes the size of the penalty [2]. Norms regarding relative income within households may further discourage mothers from out-earning their partners [26].",
        "A third strand evaluates family policies. Extensions of paid maternity leave have little effect on mothers' long-run earnings and employment [12][13], and very long leave can reduce mothers' return to work [11]. Universal childcare has heterogeneous effects on maternal employment depending on whether it crowds out informal care [15][16]. Fathers' quotas raise fathers' leave-taking and can shift the division of household work [17][18]. A comprehensive analysis of Austrian family policies over six decades finds that large expansions of leave and childcare had small effects on child penalties [14]. Olivetti and Petrongolo {7} conclude that the design of family policies determines whether they mitigate or entrench gender gaps.",
        "We contribute to this literature in three ways. First, we provide the first administrative event-study estimates of child penalties for Korea, an economy with one of the largest gender gaps and the lowest fertility rate in the world. Second, we show that penalties vary widely with employers' family policies and with the security of the job held before birth, a dimension that has received less attention than national policies. Third, we provide evidence on the effects of a reform that encouraged fathers to take parental leave in a setting where fathers' participation in childcare was very low. Our findings are also relevant to the literature linking the costs of motherhood to fertility decisions [27].",
      ],
    },
    {
      id: "framework",
      heading: "4. Conceptual Framework and Hypotheses",
      paragraphs: [
        "Consider a couple deciding how to allocate time between market work and childcare after the birth of their first child. Childcare can be provided by either parent, purchased in the market or provided by employers and the state. If the mother earns less than the father before the birth, or if gender norms assign childcare primarily to mothers, the household will reduce the mother's market work more than the father's. The size of this reduction depends on the availability and cost of substitutes for parental care and on the penalty for working fewer or more flexible hours [1][23].",
        "In a dual labour market, a mother who leaves a secure job faces a large and persistent cost: re-entry typically occurs into lower-paid, less secure employment, and seniority-based pay means that a career interruption permanently lowers her earnings path [9]. Jobs that offer long job-protected leave, predictable hours and on-site childcare reduce the cost of continuing to work and therefore reduce the probability that a mother exits. Policies that encourage fathers to share childcare may also reduce the penalty, both directly and by shifting norms within the household and the workplace [17][18].",
        "These considerations yield four hypotheses. H1: the birth of a first child reduces mothers' earnings substantially and persistently, with little effect on fathers. H2: in a dual labour market with long working hours, the penalty operates mainly through the extensive margin. H3: penalties are smaller for mothers employed in the public sector and in firms providing workplace childcare. H4: incentives for fathers to take parental leave reduce the penalty, although effects may be modest when initial take-up is low.",
        "The framework also clarifies what our estimates do and do not measure. The event-study design identifies the total effect of the first child on each parent's outcomes, including effects that operate through subsequent births, changes in occupation or employer and changes in the division of labour within the household. It does not separate the contribution of preferences, norms and institutions. Heterogeneity across employers with different family policies, and changes around the 2014 reform, provide indirect evidence on the role of institutions, which we interpret in light of the possibility that mothers sort into employers according to their expected labour-market attachment [9][25].",
      ],
    },
    {
      id: "data",
      heading: "5. Data",
      paragraphs: [],
      subsections: [
        {
          id: "data-sources",
          heading: "5.1 Administrative Records",
          paragraphs: [
            "Our main data source is the National Health Insurance Service database, which covers the entire Korean population. Health-insurance records identify births and link children to their parents through dependants' registration, allowing us to identify the first birth of each couple and the timing of any subsequent births. For employees, health-insurance contributions are levied on earnings, so contribution records provide a measure of annual labour earnings for all wage workers, including public-sector employees who are not covered by employment insurance.",
            "We link these records to the Employment Insurance database, which provides employer identifiers, firm size, industry, contract type and records of maternity and parental leave benefits. Employer identifiers allow us to determine whether a parent's employer provides workplace childcare, using the registry of workplace childcare facilities maintained by the Ministry of Employment and Labor. Public-sector employment is identified from the type of health-insurance subscriber.",
          ],
        },
        {
          id: "data-sample",
          heading: "5.2 Sample and Variables",
          paragraphs: [
            "The sample consists of couples whose first child was born between 2008 and 2014 and in which both parents were aged 20–45 at the birth. We follow each parent from five years before to five years after the birth, so that the latest observation is in 2019. The final sample contains about 840,000 couples. Annual earnings are deflated to 2015 prices and include zeros for years in which a parent has no earnings from wage employment. A parent is classified as employed if he or she has positive earnings from wage employment in the year. Self-employment is not observed in earnings records; we show in Section 9 that results are similar when we exclude parents who are ever registered as self-employed.",
            "Table 1 describes mothers and fathers in the year before the birth. Mothers were on average 30.6 years old at the birth and fathers 33.1. Seventy-nine percent of mothers and 93 percent of fathers were employed, and employed mothers earned about 68 percent of what employed fathers earned. Eleven percent of mothers worked in the public sector and 17 percent worked for an employer providing workplace childcare. Mothers were more likely than fathers to hold fixed-term contracts and to work in small firms.",
          ],
          tables: [
            {
              id: "table-1",
              caption: "Table 1. Parents in the year before the first birth",
              columns: ["Variable", "Mothers", "Fathers"],
              rows: [
                ["Age at first birth", "30.6", "33.1"],
                ["University degree (share)", "0.58", "0.55"],
                ["Employed (share)", "0.79", "0.93"],
                ["Annual earnings if employed (KRW million, 2015 prices)", "27.4", "40.2"],
                ["Public-sector employee (share of employed)", "0.11", "0.09"],
                ["Employer provides workplace childcare (share of employed)", "0.17", "0.18"],
                ["Firm with fewer than 30 employees (share of employed)", "0.36", "0.31"],
                ["Fixed-term contract (share of employed)", "0.19", "0.11"],
                ["Second child within five years (share of couples)", "0.52", ""],
                ["Couples", "840,000", ""],
              ],
              note: "Note: Characteristics measured in the calendar year before the first birth. Earnings from health-insurance contribution records.",
            },
          ],
        },
      ],
    },
    {
      id: "strategy",
      heading: "6. Empirical Strategy",
      paragraphs: [],
      subsections: [
        {
          id: "specification",
          heading: "6.1 Event-Study Specification",
          paragraphs: [
            "Following Kleven, Landais and Søgaard {2}, we estimate separately for mothers and fathers the regression Y_ist = Σ_{j≠−1} α_j·1[j = t] + Σ_k β_k·1[k = age_is] + Σ_y γ_y·1[y = s] + ν_ist, where Y_ist is the outcome of individual i in calendar year s at event time t (years relative to the first birth), the event-time indicators are measured relative to the year before birth, and the full sets of age and calendar-year indicators control nonparametrically for life-cycle and time trends. Including age dummies identifies the event-time effects from variation in the age at which parents have their first child.",
            "We convert the estimated event-time coefficients into percentage effects P_t = α_t / E[Ỹ_ist | t], where Ỹ_ist is the predicted outcome excluding the contribution of the event-time indicators — that is, the counterfactual outcome absent children. The child penalty at event time t is the difference between fathers' and mothers' percentage effects, P^f_t − P^m_t, and measures the percentage by which women fall behind men as a result of children. Standard errors are obtained by the delta method and clustered by individual.",
          ],
        },
        {
          id: "identification",
          heading: "6.2 Identifying Assumption",
          paragraphs: [
            "The design assumes that, absent the birth, earnings would have evolved smoothly along the age and year profiles estimated from parents at other event times. Two features of the data support this assumption. First, pre-birth event-time coefficients are small and flat for both mothers and fathers, as shown in Section 7. Second, the sharp break in mothers' earnings in the year of birth is difficult to reconcile with gradual changes in preferences or productivity. The assumption would be violated if mothers reduced their labour supply in anticipation of the birth; anticipation effects of this kind would bias our estimates towards zero and are visible only in the year immediately preceding the birth for mothers on fixed-term contracts.",
            "As an alternative counterfactual, we also compare parents who have their first child in a given year with parents of the same age who have their first child a few years later and are therefore not yet treated. This approach, which exploits only variation in the timing of the birth, yields very similar estimates (Section 9).",
          ],
        },
        {
          id: "heterogeneity-design",
          heading: "6.3 Heterogeneity by Employer",
          paragraphs: [
            "To study heterogeneity, we classify mothers by the characteristics of their employer in the year before the birth and estimate the event study separately for each group. Because mothers sort into employers, differences in penalties across groups reflect both the effect of employer policies and differences in the characteristics of mothers. Table 2 shows that mothers employed in the public sector and in firms with workplace childcare are older, more educated and higher-paid than other mothers. We therefore also report estimates that reweight each group to match the observable characteristics of mothers in private firms without childcare, using age, education, earnings decile, industry and region.",
          ],
          tables: [
            {
              id: "table-2",
              caption: "Table 2. Pre-birth characteristics of mothers by employer type",
              columns: ["Variable", "Public sector", "Private, childcare", "Private, no childcare", "Not employed"],
              rows: [
                ["Age at first birth", "31.4", "31.0", "30.3", "30.1"],
                ["University degree (share)", "0.81", "0.74", "0.55", "0.42"],
                ["Annual earnings (KRW million)", "33.6", "35.9", "24.1", "—"],
                ["Firm with 300+ employees (share)", "—", "0.88", "0.21", "—"],
                ["Fixed-term contract (share)", "0.14", "0.09", "0.23", "—"],
                ["Took parental leave (share)", "0.71", "0.63", "0.31", "—"],
                ["Mothers (thousand)", "73", "113", "478", "176"],
              ],
              note: "Note: Characteristics in the year before the first birth. Employer type refers to the mother's main employer in that year. Parental leave refers to any leave taken within two years of the birth.",
            },
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
          id: "results-earnings",
          heading: "7.1 Earnings",
          paragraphs: [
            "Figure 1 plots the percentage effects of the first birth on mothers' and fathers' earnings, and Table 3 reports estimates at selected event times. Before the birth, mothers' and fathers' earnings evolve in parallel with their counterfactuals: none of the pre-birth coefficients exceeds one percent in absolute value. In the year of the birth, mothers' earnings fall by 27 percent, reflecting maternity leave and exits from employment during the second half of the year. In the year after the birth, they are 61 percent below their counterfactual. They recover only slightly thereafter and remain 49 percent below the counterfactual five years after the birth.",
            "Fathers' earnings are unaffected by the birth at every horizon. Their estimated effects are small and statistically indistinguishable from zero, and their pre-birth and post-birth trajectories are smooth. The long-run child penalty — the difference between fathers' and mothers' percentage effects five years after the birth — is therefore 49 percent. This is more than twice the long-run penalty of about 20 percent estimated for Denmark [2], above the penalties of 31 and 44 percent found for the United States and the United Kingdom, and close to those of 51 and 61 percent found for Austria and Germany [3], placing Korea among the countries with the largest child penalties yet documented.",
          ],
          tables: [
            {
              id: "table-3",
              caption: "Table 3. Effects of the first birth on earnings and employment (percentage of counterfactual)",
              columns: ["Event time", "Mothers' earnings", "Fathers' earnings", "Child penalty", "Mothers' employment (pp)"],
              rows: [
                ["t = −3", "0.3 (0.4)", "−0.1 (0.3)", "−0.4", "0.2 (0.3)"],
                ["t = −2", "0.2 (0.4)", "0.1 (0.3)", "−0.1", "0.1 (0.3)"],
                ["t = 0", "−27.3*** (0.5)", "0.6 (0.4)", "27.9***", "−21.4*** (0.4)"],
                ["t = 1", "−61.2*** (0.6)", "0.4 (0.4)", "61.6***", "−44.1*** (0.5)"],
                ["t = 2", "−56.8*** (0.6)", "0.2 (0.4)", "57.0***", "−42.0*** (0.5)"],
                ["t = 3", "−53.4*** (0.7)", "−0.2 (0.5)", "53.2***", "−40.3*** (0.5)"],
                ["t = 5", "−49.1*** (0.8)", "0.1 (0.5)", "49.2***", "−38.0*** (0.6)"],
              ],
              note: "Note: Percentage effects relative to the counterfactual outcome; employment effects in percentage points. Reference period t = −1. Standard errors clustered by individual in parentheses. *** p < 0.01.",
            },
          ],
          figures: [
            {
              id: "figure-1",
              caption: "Figure 1. Effects of the first birth on mothers' and fathers' earnings",
              kind: "line",
              xLabels: ["−5", "−4", "−3", "−2", "−1", "0", "1", "2", "3", "4", "5"],
              yLabel: "Percent of counterfactual earnings",
              series: [
                {
                  name: "Mothers",
                  values: [0.4, 0.6, 0.3, 0.2, 0, -27.3, -61.2, -56.8, -53.4, -51.0, -49.1],
                  lower: [-0.4, -0.2, -0.5, -0.6, 0, -28.3, -62.4, -58.0, -54.8, -52.5, -50.7],
                  upper: [1.2, 1.4, 1.1, 1.0, 0, -26.3, -60.0, -55.6, -52.0, -49.5, -47.5],
                },
                {
                  name: "Fathers",
                  values: [-0.3, 0.2, -0.1, 0.1, 0, 0.6, 0.4, 0.2, -0.2, -0.1, 0.1],
                  lower: [-0.9, -0.4, -0.7, -0.5, 0, -0.2, -0.4, -0.6, -1.2, -1.1, -0.9],
                  upper: [0.3, 0.8, 0.5, 0.7, 0, 1.4, 1.2, 1.0, 0.8, 0.9, 1.1],
                },
              ],
              marker: 4,
              note: "Note: Event-time coefficients as a percentage of counterfactual earnings, with 95 percent confidence intervals. Event time 0 is the calendar year of the first birth; the reference period is t = −1.",
            },
          ],
        },
        {
          id: "results-employment",
          heading: "7.2 Employment and Earnings among the Employed",
          paragraphs: [
            "The final column of Table 3 shows that the earnings penalty is driven mainly by exits from employment. Mothers' employment rates fall by 44 percentage points in the year after birth and recover only slowly, remaining 38 percentage points below the counterfactual five years later. Given a pre-birth employment rate of 79 percent, this means that almost half of the mothers who were employed before the birth are not in wage employment five years later. Fathers' employment is unaffected.",
            "Among mothers who remain employed, earnings are 13 percent below the counterfactual five years after the birth. This intensive-margin effect reflects a combination of moves to part-time and lower-paid jobs, reduced overtime and slower wage growth. Because mothers who leave employment had lower pre-birth earnings than those who stay, a simple multiplicative decomposition is not appropriate; using the decomposition described in Appendix A, which accounts for selection on pre-birth earnings, the extensive margin accounts for about three-quarters of the long-run earnings penalty and the intensive margin for the remaining quarter. This pattern supports H2 and contrasts with Denmark, where the intensive margin accounts for a larger share of the penalty [2].",
          ],
        },
        {
          id: "results-heterogeneity",
          heading: "7.3 Heterogeneity by Employer and Mother Characteristics",
          paragraphs: [
            "Table 4 reports long-run penalties by the mother's pre-birth employer and characteristics. Penalties are significantly smaller for mothers employed in the public sector (31 percent) and for mothers whose employer provides workplace childcare (37 percent) than for mothers in private firms without childcare (52 percent). Employment effects follow the same pattern: public-sector mothers' employment falls by 19 percentage points and that of mothers with workplace childcare by 27 points, compared with 40 points for mothers in private firms without childcare. Reweighting each group to match the characteristics of mothers in private firms without childcare reduces the differences only modestly, suggesting that they are not explained by observable differences in education, earnings or age.",
            "Penalties are also smaller for university-educated mothers and for mothers in large firms, and larger for mothers on fixed-term contracts, for whom job protection during leave is weakest. Figure 2 compares penalties one and five years after the birth across groups. In every group, most of the penalty arises in the first year and persists thereafter, but the gap between groups widens over time, as mothers in secure jobs return to work after leave while those in less secure jobs do not. These results support H3.",
          ],
          tables: [
            {
              id: "table-4",
              caption: "Table 4. Long-run child penalties by pre-birth employer and mother characteristics (t = 5)",
              columns: ["Group", "Child penalty", "Reweighted", "Mothers' employment (pp)", "Share of mothers"],
              rows: [
                ["All couples", "0.49*** (0.01)", "—", "−38.0", "1.00"],
                ["Public sector", "0.31*** (0.02)", "0.34*** (0.02)", "−19.2", "0.09"],
                ["Private, workplace childcare", "0.37*** (0.02)", "0.40*** (0.02)", "−27.1", "0.13"],
                ["Private, no workplace childcare", "0.52*** (0.01)", "—", "−40.4", "0.57"],
                ["Firm with 300+ employees", "0.42*** (0.01)", "0.45*** (0.02)", "−32.6", "0.24"],
                ["Firm with fewer than 30 employees", "0.58*** (0.01)", "0.56*** (0.02)", "−45.3", "0.29"],
                ["Fixed-term contract", "0.63*** (0.02)", "0.60*** (0.02)", "−48.7", "0.15"],
                ["University degree", "0.44*** (0.01)", "—", "−33.9", "0.58"],
                ["No university degree", "0.55*** (0.01)", "—", "−43.6", "0.42"],
              ],
              note: "Note: Penalty defined as the difference between fathers' and mothers' percentage earnings effects five years after the birth. Reweighted estimates match the group to mothers in private firms without childcare on age, education, earnings decile, industry and region. Employer groups refer to mothers employed before the birth. Standard errors in parentheses. *** p < 0.01.",
            },
          ],
          figures: [
            {
              id: "figure-2",
              caption: "Figure 2. Child penalties one and five years after the first birth, by group",
              kind: "bar",
              xLabels: ["All", "Public sector", "Workplace childcare", "Private, no childcare", "Births 2008–13", "Births 2014"],
              yLabel: "Child penalty (percent)",
              series: [
                { name: "t = 1", values: [61.6, 40.3, 47.2, 64.8, 62.1, 58.3] },
                { name: "t = 5", values: [49.2, 31.0, 37.0, 52.1, 49.8, 45.9] },
              ],
              note: "Note: Child penalty is the difference between fathers' and mothers' percentage earnings effects at the indicated event time.",
            },
          ],
        },
      ],
    },
    {
      id: "mechanisms",
      heading: "8. Mechanisms and the 2014 Reform",
      paragraphs: [
        "Table 5 decomposes the adjustment of mothers' labour supply five years after the birth. Of the 38 percentage point fall in employment, about 30 points reflect mothers who leave their pre-birth employer within two years of the birth and do not return to wage employment. A further 8 points reflect mothers who return to work after leave but subsequently leave. Mothers who remain employed are 11 percentage points more likely to have moved to a small firm and 9 points more likely to hold a fixed-term contract than their counterfactual, consistent with the downgrading associated with career interruptions in dual labour markets [9][22].",
        "Parental leave take-up is strongly associated with continued employment. Among mothers who take parental leave, 71 percent are employed by their pre-birth employer two years after the birth, compared with 22 percent of those who do not. This association cannot be interpreted causally, since leave-takers differ from non-takers, but it is consistent with the view that job-protected leave is effective only where employers support its use. Second births also contribute: the penalty rises modestly for mothers who have a second child within five years, but the penalty five years after the first birth is 45 percent even for mothers who do not have a second child.",
        "We next examine the 2014 reform that introduced full wage replacement for the first month of leave taken by the second parent. Because the incentive applied to leave taken after October 2014, it affected couples who had their first child in 2014 and, to a lesser extent, those who had children in 2013 and were still eligible for leave. Comparing couples with first births in 2014 with those with first births in 2008–2013, fathers' leave take-up within two years of the birth rose from 1.8 to 4.6 percent, and the five-year child penalty was about 4 percentage points smaller (46 compared with 50 percent). An event study comparing successive birth cohorts shows no comparable decline between earlier cohorts, but the reform coincided with the expansion of free childcare and other changes, so we interpret the estimate cautiously. The modest size of the effect is consistent with evidence that fathers' quotas shift behaviour gradually through peer effects and norms [17][18].",
      ],
      tables: [
        {
          id: "table-5",
          caption: "Table 5. Margins of mothers' adjustment five years after the first birth",
          columns: ["Outcome", "Effect", "Std. error", "Counterfactual mean"],
          rows: [
            ["Employed (pp)", "−38.0***", "(0.6)", "80.1"],
            ["Left pre-birth employer within two years, not re-employed (pp)", "29.7***", "(0.5)", "—"],
            ["Returned after leave, later left (pp)", "8.3***", "(0.3)", "—"],
            ["Log earnings if employed (×100)", "−13.2***", "(0.7)", "—"],
            ["Employed in firm with fewer than 30 employees (pp, if employed)", "11.4***", "(0.6)", "34.8"],
            ["Fixed-term contract (pp, if employed)", "9.1***", "(0.5)", "18.6"],
            ["Child penalty, no second child within five years", "0.45***", "(0.01)", "—"],
            ["Child penalty, second child within five years", "0.53***", "(0.01)", "—"],
          ],
          note: "Note: Effects at t = 5 from event-study regressions; percentage points unless otherwise stated. *** p < 0.01.",
        },
      ],
    },
    {
      id: "robustness",
      heading: "9. Robustness",
      paragraphs: [
        "Table 6 reports a series of robustness checks for the long-run child penalty. Restricting the sample to a balanced panel of couples observed in all eleven event years, excluding parents ever registered as self-employed, and restricting to mothers employed in the year before the birth yield penalties between 0.48 and 0.53. The higher estimate for mothers employed before the birth reflects the fact that mothers who were not employed cannot lose employment. Estimating penalties in levels rather than percentages, and using the not-yet-treated comparison described in Section 6, produces very similar results.",
        "We also examine whether our results depend on the measurement of earnings. Health-insurance contribution records are capped at very high earnings and may understate the earnings of some fathers; excluding couples in which either parent is at the cap does not change the estimates. Using employment-insurance earnings records, which exclude public-sector workers, yields a penalty of 0.51 for the private sector. Finally, controlling for the number and timing of subsequent births changes the penalty only slightly, confirming that the long-run penalty is not driven by second births.",
      ],
      tables: [
        {
          id: "table-6",
          caption: "Table 6. Robustness of the long-run child penalty (t = 5)",
          columns: ["Specification", "Child penalty", "Std. error", "Couples"],
          rows: [
            ["Baseline", "0.49***", "(0.01)", "840,000"],
            ["Balanced panel", "0.48***", "(0.01)", "712,000"],
            ["Excluding ever self-employed", "0.50***", "(0.01)", "771,000"],
            ["Mothers employed at t = −1", "0.53***", "(0.01)", "664,000"],
            ["Not-yet-treated comparison", "0.47***", "(0.02)", "840,000"],
            ["Earnings in levels (share of counterfactual)", "0.50***", "(0.01)", "840,000"],
            ["Excluding parents at contribution cap", "0.49***", "(0.01)", "826,000"],
            ["Employment-insurance earnings, private sector", "0.51***", "(0.01)", "758,000"],
            ["Controlling for subsequent births", "0.47***", "(0.01)", "840,000"],
          ],
          note: "Note: Standard errors clustered by individual in parentheses. Numbers of couples rounded to the nearest thousand. *** p < 0.01.",
        },
      ],
    },
    {
      id: "discussion",
      heading: "10. Discussion",
      paragraphs: [
        "Our estimates indicate that the child penalty is a central driver of gender inequality in Korea's labour market. Before the birth of their first child, employed mothers in our sample earn about 68 percent of what employed fathers earn; five years after the birth, the gap in average earnings including non-employment is roughly three times as large. Because almost all Korean women who have children do so within marriage and most have their first child by their early thirties, the penalty accounts for a large share of the gender gap in lifetime earnings.",
        "The size of the penalty is likely to matter for fertility as well. If women anticipate that a first child will roughly halve their earnings, the opportunity cost of children is very high, particularly for well-educated women with strong career prospects. Theoretical and empirical work suggests that fertility is low where the burden of childcare falls disproportionately on mothers [27]. Korea's combination of a very large child penalty and very low fertility is consistent with this view, although our design does not allow us to estimate the effect of the penalty on fertility directly.",
        "The heterogeneity we document suggests that employer policies can make a substantial difference. Mothers in the public sector and in firms with workplace childcare face penalties 12 to 21 percentage points smaller than mothers in private firms without childcare, even after reweighting on observable characteristics. These differences are larger than those associated with national policy reforms in other countries [12][13][14]. Enforcing the workplace childcare mandate, extending job protection to fixed-term workers and encouraging fathers' leave-taking are natural policy levers, although our estimates of employer differences may still partly reflect unobserved sorting of mothers with stronger labour-market attachment into family-friendly employers.",
        "Our analysis has limitations. We observe only wage employment and cannot measure transitions into self-employment or informal work, which may cushion part of the decline in earnings. We do not observe hours of work directly, and our earnings measure combines changes in hours and wages. Finally, our sample ends in 2019; subsequent reforms that raised parental leave benefits and extended fathers' incentives may have reduced the penalty for more recent cohorts.",
        "The comparison with other countries is instructive. Child penalties in Scandinavia are smaller despite similar or longer parental leave entitlements, in part because Scandinavian mothers typically return to their pre-birth employers after leave, often on reduced hours, and because high-quality public childcare is widely available from the end of the leave period [2][14][15]. In Korea, by contrast, the main margin of adjustment is exit from employment altogether. This suggests that policies that make it easier to combine work and care within the same job — such as rights to reduced or flexible hours after leave, and protection against dismissal or reassignment on return — may be more effective in reducing the penalty than further extensions of leave duration [11][12].",
      ],
    },
    {
      id: "conclusion",
      heading: "11. Conclusion",
      paragraphs: [
        "Using linked administrative records for about 840,000 Korean couples, we show that the birth of a first child reduces mothers' earnings by 61 percent in the following year and by 49 percent five years later, while fathers' earnings are unaffected. The long-run penalty, more than twice as large as in Scandinavia, operates mainly through exits from employment. It is substantially smaller for mothers in the public sector and in firms with workplace childcare, and it declined modestly after the introduction of incentives for fathers to take parental leave. Policies that make continued employment after childbirth feasible are likely to matter both for gender equality and for fertility decisions in Korea [3][7].",
      ],
    },
    {
      id: "appendix",
      heading: "Appendix A. Construction of Counterfactuals and Decomposition",
      paragraphs: [
        "Counterfactual outcomes. For each parent and event time, the counterfactual outcome Ỹ_ist is computed as the predicted value from the event-study regression with the event-time coefficients set to zero, that is, the sum of the estimated age and calendar-year effects. Percentage effects divide the event-time coefficient by the mean counterfactual outcome at that event time. Confidence intervals are obtained by the delta method, treating the counterfactual mean as estimated.",
        "Not-yet-treated comparison. For each birth cohort c, we construct a comparison group of parents of the same age who have their first child in cohort c + 3 or later and estimate the change in outcomes between t = −1 and t = 0, 1 and 2 relative to the comparison group. Long-run effects are obtained by chaining these short-run comparisons, following the approach used in related work on child penalties [2][3].",
        "Decomposition. We decompose the long-run percentage earnings effect into an extensive-margin component, equal to the counterfactual earnings of mothers who are not employed as a result of the birth, and an intensive-margin component, equal to the change in earnings of mothers who remain employed. Mothers induced to leave employment are characterised by comparing the pre-birth earnings distribution of mothers employed at t = 5 with that of all mothers employed at t = −1; their counterfactual earnings are about 85 percent of the average for employed mothers. Under this decomposition, the extensive margin accounts for 37 of the 49 percentage points of the long-run penalty.",
      ],
    },
  ],
};
