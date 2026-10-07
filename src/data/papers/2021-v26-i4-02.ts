// Vol. 26, No. 4 (October 2021) — full text for an article defined in journal.ts (sample content).
import type { FulltextSpec } from "../paper-spec";

export const fulltext: FulltextSpec = {
  id: "2021-v26-i4-02",
  acknowledgments:
    "We thank seminar participants at Hanyang University, Peking University and the Korea Educational Development Institute, two anonymous referees and the handling editor for helpful comments. We are grateful to the staff of the National Pension Service research data centre for facilitating access to the linked records.",
  dataAvailability:
    "The linked pension and census records are confidential and can be accessed only on site at the National Pension Service research data centre after approval of a research proposal. The reform timetable, city-level controls and all code are available from the corresponding author.",
  editorialNote:
    "Sang-Yoon Han and Hong-Mei Wang exploit the gradual rollout of Korea's high-school equalisation policy from 1974 and find that replacing ability tracking with random assignment raised lifetime earnings by 3.2 percent, mainly for disadvantaged students, and reduced the variance of log earnings across cohorts by about 8 percent, with no measurable effect on aggregate educational attainment.",
  refs: [
    /* 1 */ "Hanushek, E. A., & Woessmann, L. (2006). Does educational tracking affect performance and inequality? Differences-in-differences evidence across countries. Economic Journal, 116(510), C63–C76.",
    /* 2 */ "Meghir, C., & Palme, M. (2005). Educational reform, ability, and family background. American Economic Review, 95(1), 414–424.",
    /* 3 */ "Pekkarinen, T., Uusitalo, R., & Kerr, S. (2009). School tracking and intergenerational income mobility: Evidence from the Finnish comprehensive school reform. Journal of Public Economics, 93(7–8), 965–973.",
    /* 4 */ "Duflo, E., Dupas, P., & Kremer, M. (2011). Peer effects, teacher incentives, and the impact of tracking: Evidence from a randomized evaluation in Kenya. American Economic Review, 101(5), 1739–1774.",
    /* 5 */ "Malamud, O., & Pop-Eleches, C. (2011). School tracking and access to higher education among disadvantaged groups. Journal of Public Economics, 95(11–12), 1538–1549.",
    /* 6 */ "Betts, J. R. (2011). The economics of tracking in education. In E. A. Hanushek, S. Machin, & L. Woessmann (Eds.), Handbook of the Economics of Education (Vol. 3, pp. 341–381). Amsterdam: Elsevier.",
    /* 7 */ "Dustmann, C., Puhani, P. A., & Schönberg, U. (2017). The long-term effects of early track choice. Economic Journal, 127(603), 1348–1380.",
    /* 8 */ "Abdulkadiroğlu, A., Angrist, J., & Pathak, P. (2014). The elite illusion: Achievement effects at Boston and New York exam schools. Econometrica, 82(1), 137–196.",
    /* 9 */ "Dobbie, W., & Fryer, R. G. (2014). The impact of attending a school with high-achieving peers: Evidence from the New York City exam schools. American Economic Journal: Applied Economics, 6(3), 58–75.",
    /* 10 */ "Pop-Eleches, C., & Urquiola, M. (2013). Going to a better school: Effects and behavioral responses. American Economic Review, 103(4), 1289–1324.",
    /* 11 */ "Jackson, C. K. (2010). Do students benefit from attending better schools? Evidence from rule-based student assignments in Trinidad and Tobago. Economic Journal, 120(549), 1399–1429.",
    /* 12 */ "Sacerdote, B. (2001). Peer effects with random assignment: Results for Dartmouth roommates. Quarterly Journal of Economics, 116(2), 681–704.",
    /* 13 */ "Epple, D., & Romano, R. E. (1998). Competition between private and public schools, vouchers, and peer-group effects. American Economic Review, 88(1), 33–62.",
    /* 14 */ "Chetty, R., Friedman, J. N., Hilger, N., Saez, E., Schanzenbach, D. W., & Yagan, D. (2011). How does your kindergarten classroom affect your earnings? Evidence from Project STAR. Quarterly Journal of Economics, 126(4), 1593–1660.",
    /* 15 */ "Card, D. (1999). The causal effect of education on earnings. In O. Ashenfelter & D. Card (Eds.), Handbook of Labor Economics (Vol. 3A, pp. 1801–1863). Amsterdam: Elsevier.",
    /* 16 */ "Callaway, B., & Sant'Anna, P. H. C. (2021). Difference-in-differences with multiple time periods. Journal of Econometrics, 225(2), 200–230.",
    /* 17 */ "Goodman-Bacon, A. (2021). Difference-in-differences with variation in treatment timing. Journal of Econometrics, 225(2), 254–277.",
    /* 18 */ "Sun, L., & Abraham, S. (2021). Estimating dynamic treatment effects in event studies with heterogeneous treatment effects. Journal of Econometrics, 225(2), 175–199.",
    /* 19 */ "Kang, C. (2007). Classroom peer effects and academic achievement: Quasi-randomization evidence from South Korea. Journal of Urban Economics, 61(3), 458–495.",
    /* 20 */ "Park, H., Behrman, J. R., & Choi, J. (2013). Causal effects of single-sex schools on college entrance exams and college attendance: Random assignment in Seoul high schools. Demography, 50(2), 447–469.",
    /* 21 */ "Duflo, E. (2001). Schooling and labor market consequences of school construction in Indonesia: Evidence from an unusual policy experiment. American Economic Review, 91(4), 795–813.",
    /* 22 */ "Oreopoulos, P. (2006). Estimating average and local average treatment effects of education when compulsory schooling laws really matter. American Economic Review, 96(1), 152–175.",
    /* 23 */ "Bertrand, M., Duflo, E., & Mullainathan, S. (2004). How much should we trust differences-in-differences estimates? Quarterly Journal of Economics, 119(1), 249–275.",
    /* 24 */ "Chetty, R., Hendren, N., Kline, P., & Saez, E. (2014). Where is the land of opportunity? The geography of intergenerational mobility in the United States. Quarterly Journal of Economics, 129(4), 1553–1623.",
    /* 25 */ "Haider, S., & Solon, G. (2006). Life-cycle variation in the association between current and lifetime earnings. American Economic Review, 96(4), 1308–1320.",
    /* 26 */ "Guyon, N., Maurin, E., & McNally, S. (2012). The effect of tracking students by ability into different schools: A natural experiment. Journal of Human Resources, 47(4), 684–721.",
  ],
  body: [
    {
      id: "introduction",
      heading: "1. Introduction",
      paragraphs: [
        "Whether students should be sorted into schools or classes by ability is one of the oldest questions in education policy. Proponents argue that tracking allows teachers to tailor instruction to a more homogeneous group and lets the most able students progress faster. Critics argue that it entrenches early disadvantage, because assignment at young ages reflects family background as much as ability, and because students in lower tracks are exposed to weaker peers, lower expectations and less experienced teachers [6]. Cross-country comparisons suggest that early tracking increases inequality in achievement without raising mean performance [1], but such comparisons cannot rule out that countries which track differ in other respects.",
        "This paper studies the long-run labour-market consequences of abolishing ability-based tracking across schools, using one of the largest and most abrupt de-tracking reforms on record. Until the early 1970s, Korean middle-school graduates competed in school-specific entrance examinations for places in academic high schools, which were sharply stratified by prestige. In 1974 the government introduced the High School Equalisation Policy in Seoul and Busan, replacing entrance examinations with a lottery that assigned students who passed a common qualifying test to academic high schools within their school district. The policy was extended to Daegu, Incheon and Gwangju in 1975 and to seven further cities between 1979 and 1981, while smaller cities and rural areas retained examination-based admission throughout the period we study.",
        "We exploit this staggered rollout in a difference-in-differences design that compares successive birth cohorts in cities that adopted the lottery with the same cohorts in cities that did not. Our data link National Pension Service earnings histories to individual records from the 1990 and 2000 Population Censuses, which report the city in which each individual completed middle school, educational attainment and parental characteristics. For 486,320 individuals born between 1953 and 1966 we observe annual earnings between ages 33 and 53, a window that covers most of the prime working life and that we use to construct a measure of lifetime earnings [25].",
        "We find that students affected by the reform experienced a 3.2 percent increase in lifetime earnings. The effect is concentrated among students from disadvantaged backgrounds who would have been assigned to lower tracks under the previous system: for students in the bottom third of the distribution of predicted examination performance, the gain is 6.9 percent, while for students in the top third the estimate is small, negative and statistically insignificant. The reform also reduced the variance of log earnings across cohorts by approximately 8 percent. Strikingly, it had no measurable effect on aggregate educational attainment: average years of schooling and the share completing a four-year college degree are essentially unchanged, because modest gains among previously low-track students are offset by small declines among students who would have attended elite schools.",
        "Event-study estimates show no differential trends among cohorts that completed high school before the reform, and the effect appears in full for the first treated cohort, which argues against confounding by gradual changes in city economies. The results are robust to estimators that are valid under heterogeneous treatment effects with staggered adoption [16][17][18], to the exclusion of Seoul, to controls for city-specific trends and to alternative definitions of lifetime earnings. Mechanism evidence suggests that the gains operate through access to academic curricula and college-preparatory peer environments for students who would otherwise have attended low-prestige schools, and through subsequent sorting into larger firms and white-collar occupations, rather than through more years of schooling.",
        "Our contribution is threefold. First, we provide causal evidence on the effects of between-school tracking on earnings over the entire prime working life, complementing evidence on test scores and educational attainment [4][5][26]. Second, we show that de-tracking can reduce earnings inequality without lowering average outcomes, a combination that is central to the policy debate but rarely documented. Third, we provide evidence from an East Asian education system, where the stakes attached to school prestige are unusually high and where results from European comprehensive-school reforms [2][3] may not carry over. The remainder of the paper describes the reform, reviews the literature, sets out a simple framework, describes the data and empirical strategy, and presents results, mechanisms and robustness checks before discussing policy implications.",
      ],
    },
    {
      id: "background",
      heading: "2. Institutional Background",
      paragraphs: [
        "Korean education expanded at extraordinary speed after the Korean War. The abolition of middle-school entrance examinations in 1969 made middle-school entry almost universal in cities within a few years, and the resulting surge in middle-school graduates intensified competition for academic high-school places. Admission to the most prestigious high schools in Seoul, Busan and Daegu was decided by school-specific examinations that were widely regarded as the decisive step towards admission to elite universities. Preparation for these examinations generated an extensive private tutoring industry, and policy makers became concerned that competition was imposing heavy costs on children and families and reproducing inequality between households that could and could not pay for tutoring.",
        "The High School Equalisation Policy, announced in February 1973 and implemented for students entering high school in March 1974, abolished school-specific entrance examinations for academic high schools in the cities in which it applied. Students instead took a common qualifying examination administered by the provincial education office; those who passed were assigned by lottery to an academic high school within their residential school district, with no possibility of choosing a school. Public and private academic high schools were included, and private schools received subsidies to align fees and teacher salaries with those of public schools. Vocational high schools continued to select students separately, and students who failed the qualifying examination could enrol only in vocational schools.",
        "The policy was rolled out in three waves. Seoul and Busan adopted it in 1974, Daegu, Incheon and Gwangju in 1975, and seven further cities, including Daejeon, Jeonju, Masan, Cheongju, Suwon, Chuncheon and Jeju, between 1979 and 1981. Table 1 summarises the timetable. The selection of cities was based on population size and administrative capacity, not on trends in local labour markets, and the timing of the later waves was determined largely by the construction of new schools, which was necessary to equalise school capacity across districts. Cities outside the rollout retained examination-based admission throughout the cohorts we study, providing a natural comparison group.",
        "Two features of the reform are important for interpretation. First, the reform changed the composition of schools rather than the total supply of academic places: in the treated cities, the share of middle-school graduates entering academic high schools was similar in the three years before and after adoption. Second, in July 1980 the government banned private tutoring nationwide, a measure that affected treated and comparison cities alike and that we absorb with cohort fixed effects. Because the ban applied to all cities, it cannot explain differences between treated and comparison cohorts, but it may have changed the size of the effect for later waves, a possibility we examine in Section 9.",
      ],
      tables: [
        {
          id: "table-1",
          caption: "Table 1. Rollout of the High School Equalisation Policy",
          columns: ["Wave", "Year of first lottery cohort", "Cities", "Birth cohort first affected", "Individuals in sample"],
          rows: [
            ["1", "1974", "Seoul, Busan", "1958", "187,410"],
            ["2", "1975", "Daegu, Incheon, Gwangju", "1959", "71,860"],
            ["3", "1979–1981", "Daejeon, Jeonju, Masan, Cheongju, Suwon, Chuncheon, Jeju", "1963–1965", "64,290"],
            ["Comparison", "—", "11 cities with examination-based admission", "—", "162,760"],
            ["Total", "", "23 cities", "", "486,320"],
          ],
          note: "Note: The birth cohort first affected is the cohort that entered high school at age 16 in the year of the first lottery. Individuals are assigned to cities by the location of middle-school completion reported in the census.",
        },
      ],
    },
    {
      id: "literature",
      heading: "3. Related Literature",
      paragraphs: [
        "The economic case for and against tracking turns on peer effects and on how instruction responds to the composition of a class or school [6]. If peer effects are linear in mean peer ability, reallocating students across schools redistributes achievement without changing its mean; if they are concave, mixing raises average outcomes; and if the most able students benefit disproportionately from able peers, tracking may raise the mean at the cost of inequality [13]. Evidence on peer effects from random roommate assignment [12] and from quasi-random classroom assignment in Korea [19] suggests that peer quality matters, though effects are often modest in size.",
        "Cross-country and reform-based studies provide the most direct evidence on tracking between schools. Hanushek and Woessmann {1} compare achievement growth between primary and secondary school across countries and find that early tracking increases inequality without raising average performance. Meghir and Palme {2} show that the Swedish comprehensive-school reform raised educational attainment and earnings for children from disadvantaged backgrounds, and Pekkarinen, Uusitalo and Kerr {3} find that the Finnish reform, which postponed tracking from age 10 to age 16, reduced the intergenerational correlation of earnings. Guyon, Maurin and McNally {26} show that an expansion of selective schools in Northern Ireland raised overall attainment, a reminder that the effects of tracking depend on the margin affected. Malamud and Pop-Eleches {5} find that delaying tracking in Romania increased access to university for disadvantaged students, while Dustmann, Puhani and Schönberg {7} find that the long-run effects of early track choice in Germany are small for students at the margin between tracks, because the system allows later switching.",
        "A related literature uses admission cut-offs to estimate the effect of attending a more selective school. Studies of exam schools in Boston and New York find little effect of attending a selective school on achievement for marginal students [8][9], while studies of Romania and Trinidad and Tobago find positive effects of attending a better school on examination performance [10][11]. These estimates are local to students near admission thresholds and capture the effect of a single school relative to the next best option, whereas a system-wide reform changes the composition of all schools at once. Randomised evidence from Kenya suggests that tracking within schools can benefit students throughout the distribution when teachers adapt instruction [4]. Within Korea, the lottery introduced by the reform has itself been used as a source of random variation to study the effects of school characteristics [20].",
        "Finally, our analysis connects to work on the long-run effects of early-life educational interventions on earnings [14][21][22] and on the geography of economic mobility [24]. Relative to this literature, we study a reform that changed the organisation of secondary schooling rather than the quantity of schooling, and we follow affected students for more than two decades of their working lives.",
      ],
    },
    {
      id: "framework",
      heading: "4. Conceptual Framework and Hypotheses",
      paragraphs: [
        "To organise the analysis, consider a student with ability a and family background b. Under examination-based admission, the student is assigned to a school of quality q(s), where s is examination performance, which depends on both a and b because families with more resources can afford tutoring. School quality comprises peer ability, teacher quality and curricular orientation towards university entrance. Earnings depend on ability, school quality and accumulated human capital: log w = α a + β q + γ h, where h captures skills acquired during and after high school. Under the lottery, all students in a district who pass the qualifying examination attend schools of approximately equal average quality q̄.",
        "The reform therefore raises school quality for students who would have been assigned to low-prestige schools and lowers it for students who would have attended elite schools. If β is constant, the average effect on earnings is zero and the reform simply compresses the earnings distribution. If the returns to school quality are concave, so that the marginal benefit of a better school is largest for students in the weakest schools, or if low-track schools imposed additional costs through lower expectations and less academic curricula, the gains of disadvantaged students exceed the losses of advantaged students and average earnings rise. A further channel operates through family background: because examination performance reflected tutoring, the lottery breaks the link between family resources and school quality.",
        "This framework yields three hypotheses. H1: the reform raises average lifetime earnings of affected cohorts if returns to school quality are concave. H2: gains are concentrated among students with low predicted examination performance, whose school quality rises most, and are small or negative for students with high predicted performance. H3: the reform compresses the earnings distribution within cohorts. The framework does not predict an effect on educational attainment, because the reform did not change the number of academic places; whether attainment changes depends on whether school quality affects university admission at the margin, which we examine empirically.",
      ],
    },
    {
      id: "data",
      heading: "5. Data",
      paragraphs: [
        "Our analysis combines administrative earnings records with census information on schooling histories and family background, together with a city-level timetable of the reform compiled from Ministry of Education regulations.",
      ],
      subsections: [
        {
          id: "data-sources",
          heading: "5.1 Sources and Linkage",
          paragraphs: [
            "Earnings come from National Pension Service contribution records, which report annual covered earnings for all employees and the self-employed who participate in the national pension scheme from its introduction in 1988. Coverage was initially limited to workplaces with ten or more employees but was extended to smaller workplaces in 1992 and to the urban self-employed in 1999. We link these records to the 2 percent public-use samples of the 1990 and 2000 Population Censuses through encrypted resident registration numbers. The censuses report year of birth, sex, educational attainment and, through a retrospective module included in both years, the city or county in which the respondent completed middle school.",
            "Family background is measured from the census household roster for respondents who lived with their parents and, for others, from linked parental records in the 1975 and 1980 censuses. We observe father's and mother's education and father's occupation for 91 percent of the sample. Using these characteristics and pre-reform cohorts in comparison cities, we estimate a model of the probability of attending a high-prestige academic high school under examination admission and use the fitted values to define each student's predicted track. This index summarises the dimensions of family background that determined school assignment before the reform.",
          ],
        },
        {
          id: "data-sample",
          heading: "5.2 Sample and Outcomes",
          paragraphs: [
            "We restrict the sample to individuals born between 1953 and 1966 who completed middle school in one of 23 cities: the 12 cities that adopted the lottery by 1981 and 11 cities of comparable size that retained examination-based admission. These cohorts entered high school between 1969 and 1982, so each treated city contributes at least four untreated cohorts. The final sample contains 486,320 individuals, of whom 54 percent are men. We observe each individual's earnings between ages 33 and 53, the age range observed for all cohorts within the 1988–2019 window of the pension records.",
            "Our primary outcome is lifetime earnings, defined as the present discounted value at age 33 of real annual earnings between ages 33 and 53, deflated to 2015 won and discounted at 3 percent. Earnings in this age range are closely related to lifetime earnings [25]. Years with zero covered earnings are included as zeros, so the measure captures both employment and wages; we show in Section 9 that results are similar when we condition on positive earnings. Secondary outcomes include years of schooling, four-year college completion, employment in firms with 300 or more employees and employment in professional, managerial or clerical occupations.",
            "Table 2 reports descriptive statistics for cohorts that entered high school before and after the reform in treated and comparison cities. Treated cities are larger and their residents have higher parental education, as expected given that the reform began in the largest metropolitan areas. Before the reform, average lifetime earnings were 9 percent higher in treated cities. Differences in levels are absorbed by city fixed effects; identification requires only that trends would have been parallel in the absence of the reform.",
          ],
          tables: [
            {
              id: "table-2",
              caption: "Table 2. Descriptive statistics by city group and period",
              columns: ["Variable", "Treated, pre-reform", "Treated, post-reform", "Comparison, pre", "Comparison, post"],
              rows: [
                ["Lifetime earnings (KRW million, 2015)", "642.8", "761.5", "589.4", "681.2"],
                ["Log lifetime earnings, s.d.", "0.648", "0.611", "0.663", "0.657"],
                ["Years of schooling", "12.4", "13.1", "11.9", "12.6"],
                ["Four-year college degree (%)", "24.1", "29.8", "19.6", "24.9"],
                ["Father completed high school (%)", "31.2", "38.5", "24.7", "31.3"],
                ["Large-firm employment at 40 (%)", "27.3", "31.9", "22.8", "25.4"],
                ["White-collar occupation at 40 (%)", "38.6", "44.7", "33.1", "37.5"],
                ["Men (%)", "54.2", "53.8", "54.4", "53.9"],
                ["Observations", "118,920", "204,640", "71,380", "91,380"],
              ],
              note: "Note: Pre-reform and post-reform refer to cohorts entering high school before and after the first lottery in each treated city; for comparison cities the split is at the 1974 entry cohort. Lifetime earnings are the present discounted value at age 33 of real earnings between ages 33 and 53.",
            },
          ],
        },
      ],
    },
    {
      id: "strategy",
      heading: "6. Empirical Strategy",
      paragraphs: [
        "We estimate the effect of the reform by comparing cohorts within cities before and after adoption, relative to the same cohorts in cities that did not adopt the lottery.",
      ],
      subsections: [
        {
          id: "strategy-did",
          heading: "6.1 Difference-in-Differences Specification",
          paragraphs: [
            "Our baseline specification is y_ict = β Reform_ct + X_i′ δ + μ_c + λ_t + ε_ict, where y_ict is the outcome of individual i who completed middle school in city c and belongs to birth cohort t, Reform_ct equals one if cohort t in city c entered high school under the lottery, X_i contains sex and family-background controls, and μ_c and λ_t are city and cohort fixed effects. The coefficient β is the average effect of the reform on affected cohorts. Standard errors are clustered by city, and given the small number of clusters we report wild cluster bootstrap p-values [23].",
            "Because adoption was staggered, the two-way fixed-effects estimator may be biased when treatment effects vary across waves or with time since adoption, since already-treated cities act as controls for later adopters [17]. We therefore also report the estimator of Callaway and Sant'Anna {16}, which uses only not-yet-treated and never-treated cities as controls, and the interaction-weighted event-study estimator of Sun and Abraham {18}. In our setting the comparison group of never-treated cities is large, which limits the scope for such bias.",
          ],
        },
        {
          id: "strategy-event",
          heading: "6.2 Event Study and Heterogeneity",
          paragraphs: [
            "To examine pre-trends and the dynamics of the effect across cohorts, we estimate y_ict = Σ_k β_k 1[t − t*_c = k] + X_i′ δ + μ_c + λ_t + ε_ict, where t*_c is the first treated birth cohort in city c and k ranges from −5 to +8, with k = −1 omitted. Coefficients for k < 0 test whether treated and comparison cities were on different trajectories before the reform. Because the reform affected schooling at ages 16–18 and we measure earnings decades later, the timing of any effect is sharp: cohorts born one year before the first treated cohort were not exposed at all.",
            "To test H2, we interact Reform_ct with terciles of the predicted-track index described in Section 5. To test H3, we aggregate the data to the city-cohort level and estimate the effect of the reform on the variance of log lifetime earnings within each city-cohort cell, weighting by cell size. We also estimate effects on quantiles of the earnings distribution using unconditional quantile regressions.",
          ],
        },
      ],
    },
    {
      id: "results",
      heading: "7. Results",
      paragraphs: [
        "We first present the effects on average lifetime earnings, then the distribution of effects by predicted track, and finally the effects on earnings inequality and educational attainment.",
      ],
      subsections: [
        {
          id: "results-main",
          heading: "7.1 Lifetime Earnings",
          paragraphs: [
            "Table 3 reports the main estimates. In column (1), with city and cohort fixed effects only, the reform raises log lifetime earnings by 0.034. Adding sex and family-background controls in column (2) leaves the estimate essentially unchanged at 0.032 (standard error 0.011), corresponding to a 3.2 percent increase in lifetime earnings, or about KRW 22 million in 2015 prices for the average treated individual. Controlling for city-specific linear cohort trends in column (3) yields 0.030. The Callaway–Sant'Anna estimator in column (4) gives 0.033, very close to the two-way fixed-effects estimate, which indicates that heterogeneity across waves does not distort the baseline result.",
            "Figure 1 plots the event-study coefficients. Estimates for cohorts born up to five years before the first treated cohort are small and statistically indistinguishable from zero, and a joint test cannot reject that all pre-reform coefficients are zero (p = 0.62). The effect appears for the first treated cohort and remains stable at around 3 percent for subsequent cohorts. This pattern is difficult to reconcile with gradual changes in city economies or in the quality of local labour markets, which would produce trends in outcomes across cohorts rather than a discrete break at the cohort first exposed to the lottery.",
          ],
          tables: [
            {
              id: "table-3",
              caption: "Table 3. Effect of the reform on log lifetime earnings",
              columns: ["", "(1)", "(2)", "(3)", "(4)"],
              rows: [
                ["Reform", "0.034***", "0.032***", "0.030**", "0.033***"],
                ["", "(0.012)", "(0.011)", "(0.013)", "(0.012)"],
                ["Wild bootstrap p-value", "0.011", "0.009", "0.032", "—"],
                ["Family-background controls", "No", "Yes", "Yes", "Yes"],
                ["City-specific cohort trends", "No", "No", "Yes", "No"],
                ["Estimator", "TWFE", "TWFE", "TWFE", "Callaway–Sant'Anna"],
                ["Observations", "486,320", "486,320", "486,320", "486,320"],
              ],
              note: "Note: All specifications include city and birth-cohort fixed effects. Standard errors clustered by city (23 clusters) in parentheses. *** p < 0.01, ** p < 0.05, * p < 0.10.",
            },
          ],
          figures: [
            {
              id: "figure-1",
              caption: "Figure 1. Event-study estimates of the effect on log lifetime earnings, by cohort relative to reform",
              kind: "line",
              xLabels: ["−5", "−4", "−3", "−2", "−1", "0", "+1", "+2", "+3", "+4", "+5", "+6", "+7", "+8"],
              yLabel: "Effect on log lifetime earnings",
              series: [
                {
                  name: "Estimate",
                  values: [0.004, -0.006, 0.003, -0.002, 0, 0.029, 0.031, 0.034, 0.030, 0.033, 0.035, 0.031, 0.034, 0.032],
                  lower: [-0.021, -0.030, -0.019, -0.023, 0, 0.006, 0.008, 0.010, 0.005, 0.007, 0.008, 0.002, 0.003, -0.001],
                  upper: [0.029, 0.018, 0.025, 0.019, 0, 0.052, 0.054, 0.058, 0.055, 0.059, 0.062, 0.060, 0.065, 0.065],
                },
              ],
              marker: 4,
              note: "Note: Coefficients from the event-study specification in Section 6.2 with 95 percent confidence intervals; cohort −1 is the omitted category. The dashed line separates cohorts that entered high school before and after the first lottery.",
            },
          ],
        },
        {
          id: "results-heterogeneity",
          heading: "7.2 Effects by Predicted Track",
          paragraphs: [
            "Table 4 reports effects by tercile of the predicted-track index. For students in the bottom tercile, who under examination admission would most likely have attended low-prestige academic schools or vocational schools, the reform raises lifetime earnings by 6.9 percent. For the middle tercile the effect is 2.4 percent, and for the top tercile, who would most likely have attended elite schools, it is −0.8 percent and statistically insignificant. The difference between the bottom and top terciles is significant at the 1 percent level. These results support H2: the gains of the reform accrued mainly to students from disadvantaged backgrounds, and the costs to advantaged students were small.",
            "The pattern is similar for men and women, although the gain for women in the bottom tercile (7.6 percent) is slightly larger than for men (6.4 percent), consistent with evidence that the returns to academic secondary schooling were particularly large for women entering the expanding clerical labour market of the 1980s. Figure 2 shows effects by quintile of the predicted-track index: gains decline monotonically from 8.1 percent in the bottom quintile to −1.2 percent in the top quintile.",
          ],
          tables: [
            {
              id: "table-4",
              caption: "Table 4. Effects on log lifetime earnings by predicted track and sex",
              columns: ["Predicted track", "All", "Men", "Women", "Pre-reform mean (KRW million)"],
              rows: [
                ["Bottom tercile", "0.069***", "0.064***", "0.076***", "498.6"],
                ["", "(0.017)", "(0.019)", "(0.022)", ""],
                ["Middle tercile", "0.024**", "0.022*", "0.027*", "628.4"],
                ["", "(0.011)", "(0.012)", "(0.015)", ""],
                ["Top tercile", "−0.008", "−0.010", "−0.005", "801.5"],
                ["", "(0.013)", "(0.015)", "(0.018)", ""],
                ["p-value, bottom = top", "0.001", "0.003", "0.004", ""],
                ["Observations", "486,320", "263,180", "223,140", ""],
              ],
              note: "Note: Estimates from the baseline specification with the reform indicator interacted with terciles of the predicted-track index. Standard errors clustered by city in parentheses. *** p < 0.01, ** p < 0.05, * p < 0.10.",
            },
          ],
          figures: [
            {
              id: "figure-2",
              caption: "Figure 2. Effect on lifetime earnings by quintile of predicted track",
              kind: "bar",
              xLabels: ["Q1 (lowest)", "Q2", "Q3", "Q4", "Q5 (highest)"],
              yLabel: "Effect on lifetime earnings (%)",
              series: [{ name: "Estimated effect", values: [8.1, 5.2, 2.6, 0.9, -1.2] }],
              note: "Note: Coefficients from the baseline specification with the reform indicator interacted with quintiles of the predicted-track index, expressed in percent.",
            },
          ],
        },
        {
          id: "results-inequality",
          heading: "7.3 Earnings Inequality and Educational Attainment",
          paragraphs: [
            "Table 5 reports effects on earnings inequality and attainment. At the city-cohort level, the reform reduced the variance of log lifetime earnings by 0.034, from a pre-reform mean of 0.420 in treated cities, a reduction of approximately 8 percent. Unconditional quantile regressions show that the effect on log earnings is 5.8 percent at the 10th percentile, 3.1 percent at the median and 0.4 percent at the 90th percentile, so that the 90/10 ratio fell substantially. Compression thus occurred mainly by raising the bottom of the distribution rather than by lowering the top, consistent with H3.",
            "In contrast, the reform had no measurable effect on aggregate educational attainment. The estimated effect on years of schooling is 0.04 years (standard error 0.07), and the effect on four-year college completion is 0.3 percentage points (standard error 0.8). Within terciles, college completion rose by 1.9 percentage points in the bottom tercile and fell by 1.6 points in the top tercile, effects that offset each other because the number of university places was fixed by government quotas. The earnings gains of disadvantaged students therefore did not arise from more schooling on average but from changes in who attended university and in the skills acquired during high school.",
          ],
          tables: [
            {
              id: "table-5",
              caption: "Table 5. Effects on earnings inequality and educational attainment",
              columns: ["Outcome", "Estimate", "Std. error", "Pre-reform mean", "Effect relative to mean (%)"],
              rows: [
                ["Variance of log lifetime earnings (city-cohort)", "−0.034***", "(0.010)", "0.420", "−8.1"],
                ["Log earnings, 10th percentile", "0.058***", "(0.018)", "—", "—"],
                ["Log earnings, median", "0.031***", "(0.011)", "—", "—"],
                ["Log earnings, 90th percentile", "0.004", "(0.014)", "—", "—"],
                ["Years of schooling", "0.04", "(0.07)", "12.4", "0.3"],
                ["Four-year college degree (pp)", "0.3", "(0.8)", "24.1", "1.2"],
                ["College degree, bottom tercile (pp)", "1.9**", "(0.9)", "11.8", "16.1"],
                ["College degree, top tercile (pp)", "−1.6*", "(0.9)", "41.3", "−3.9"],
              ],
              note: "Note: The variance regression is estimated on 322 city-cohort cells weighted by cell size; quantile effects are from unconditional quantile regressions. Standard errors clustered by city in parentheses. *** p < 0.01, ** p < 0.05, * p < 0.10.",
            },
          ],
        },
      ],
    },
    {
      id: "mechanisms",
      heading: "8. Mechanisms and Heterogeneity",
      paragraphs: [
        "Why did the reform raise earnings for disadvantaged students without raising their schooling on average? We examine three channels: the academic environment of the schools they attended, their access to particular universities and fields, and their sorting into firms and occupations.",
        "First, the reform sharply changed the peer environment of students with low predicted performance. Using school-level records from the Ministry of Education's statistical yearbooks, we find that the gap in average qualifying-examination scores between the highest- and lowest-scoring academic schools within a city fell by about three quarters in the first lottery cohort. Students who would have attended low-prestige schools now attended schools with substantially stronger peers, more experienced teachers and a curricular orientation towards university entrance. The evidence from Korean classrooms suggests that peer achievement affects own achievement [19], and studies of selective schools elsewhere show that the strength of the effect depends on how far school quality moves for the affected students [10][11].",
        "Second, although the reform did not change the number of university graduates, it changed their composition. Within the bottom tercile, the increase in college completion was concentrated in four-year programmes in business, engineering and education, fields with high returns in the expanding Korean economy of the 1980s. Because the reform did not increase the total number of graduates, aggregate returns to schooling estimated from earnings regressions [15] would miss these compositional gains.",
        "Third, the reform raised the probability that students in the bottom tercile worked in large firms at age 40 by 3.4 percentage points and in white-collar occupations by 4.1 percentage points. Large Korean firms recruited heavily through school networks and alumni ties, and a diploma from an academic high school with strong university placement improved access to these recruitment channels even for those who did not complete university. Decomposing the earnings gain of the bottom tercile, we find that differences in firm size and occupation account for about 45 percent of the effect, college completion for about 20 percent, and the remainder reflects higher earnings within firm-size and occupation cells, consistent with improved skills.",
        "Effects also differ across waves. The gain in lifetime earnings is 3.5 percent for the first wave, 3.1 percent for the second and 2.6 percent for the third wave, whose cohorts entered high school after the 1980 ban on private tutoring. The smaller effect for later waves is consistent with the ban having reduced the advantage that wealthier families could buy under examination admission in comparison cities, narrowing the gap between treated and comparison cohorts. The differences across waves are not statistically significant, however, and we interpret them cautiously.",
      ],
    },
    {
      id: "robustness",
      heading: "9. Robustness",
      paragraphs: [
        "Table 6 reports a series of robustness checks. Excluding Seoul, which accounts for more than a quarter of the sample and experienced the largest inflow of migrants, yields an estimate of 0.029. Using only never-treated cities as controls gives 0.033, and the Sun–Abraham estimator gives 0.031. Results are similar when we define lifetime earnings over ages 35–50 (0.030), when we use undiscounted earnings (0.034), and when we condition on positive earnings in at least fifteen years (0.027), which suggests that the effect is not driven by differences in participation in the pension system.",
        "A potential concern is selective migration. Families might have moved to or from treated cities in response to the reform, for example to avoid the lottery or to gain access to schools in districts with formerly elite schools. Because we assign individuals to cities by the location of middle-school completion, migration after middle school does not affect treatment status, but migration before middle school could. When we restrict the sample to individuals who were born in the city in which they completed middle school, the estimate is 0.031. Population growth in treated cities also shows no break at the time of adoption.",
        "A second concern is that the reform coincided with other changes in treated cities, such as investment in school buildings or industrial development. The event-study estimates in Figure 1 show no pre-trends and a sharp break at the first treated cohort, which is difficult to reconcile with gradual changes. A placebo test that assigns treatment to cohorts born five years earlier yields an estimate of 0.002 (standard error 0.012). Coverage of the pension system also expanded over time, but because we use the same age window for all cohorts and include cohort fixed effects, changes in coverage that are common across cities are absorbed.",
        "Finally, because there are only 23 clusters, conventional cluster-robust standard errors may be too small. Wild cluster bootstrap p-values remain below 0.05 for all specifications in Table 3, and randomisation inference that permutes the adoption timetable across cities yields a p-value of 0.016 for the baseline estimate.",
      ],
      tables: [
        {
          id: "table-6",
          caption: "Table 6. Robustness of the effect on log lifetime earnings",
          columns: ["Specification", "Estimate", "Std. error", "Observations"],
          rows: [
            ["Baseline (Table 3, column 2)", "0.032***", "(0.011)", "486,320"],
            ["Excluding Seoul", "0.029**", "(0.012)", "357,940"],
            ["Never-treated controls only", "0.033***", "(0.012)", "486,320"],
            ["Sun–Abraham estimator", "0.031***", "(0.011)", "486,320"],
            ["Lifetime earnings, ages 35–50", "0.030***", "(0.011)", "486,320"],
            ["Undiscounted earnings", "0.034***", "(0.012)", "486,320"],
            ["Positive earnings in ≥ 15 years", "0.027**", "(0.011)", "391,850"],
            ["Born in city of middle school", "0.031***", "(0.011)", "402,610"],
            ["Placebo: treatment five cohorts earlier", "0.002", "(0.012)", "486,320"],
          ],
          note: "Note: All specifications include city and cohort fixed effects and family-background controls. Standard errors clustered by city in parentheses. *** p < 0.01, ** p < 0.05, * p < 0.10.",
        },
      ],
    },
    {
      id: "discussion",
      heading: "10. Discussion and Policy Implications",
      paragraphs: [
        "Our results suggest that abolishing ability-based tracking between high schools in Korea improved labour-market outcomes for disadvantaged students without measurable costs in average attainment and with only small, statistically insignificant losses for advantaged students. The reform reduced earnings inequality within cohorts by about 8 percent, mainly by raising earnings at the bottom of the distribution. These findings are consistent with the European evidence on comprehensive-school reforms [2][3] and with cross-country evidence that early tracking raises inequality [1], and they extend this evidence to a system in which school prestige carried exceptionally high stakes.",
        "The magnitude of the average effect is policy relevant. A 3.2 percent increase in lifetime earnings for the affected cohorts, applied to the roughly 250,000 students who entered academic high schools in treated cities each year by the early 1980s, implies aggregate gains that substantially exceed the direct fiscal cost of the subsidies paid to private schools to equalise fees and salaries. The policy also reduced the intergenerational transmission of advantage: by breaking the link between family resources and school quality, it lowered the earnings premium associated with having a father who completed high school by about a fifth.",
        "Several caveats apply. The reform changed the composition of schools within cities but left the overall supply of academic places and university places unchanged, so our estimates may not generalise to reforms that change the number of academic places. The reform also coincided with rapid economic growth, which may have amplified the returns to the white-collar and large-firm employment to which it improved access. Finally, our estimates capture the effects of between-school tracking; they are silent on tracking within schools, which some evidence suggests can benefit students when instruction adapts to student level [4].",
        "The Korean debate on equalisation continues. Since the 2000s, the expansion of autonomous private high schools and special-purpose high schools has partially reintroduced selective admission, and recent governments have moved to convert these schools into regular schools. Our results suggest that the reintroduction of selective admission is likely to raise earnings inequality and to reduce the gains of disadvantaged students, while offering little in terms of average outcomes. Policy makers who value both efficiency and equity therefore have reason to favour mixing students across schools.",
      ],
    },
    {
      id: "conclusion",
      heading: "11. Conclusion",
      paragraphs: [
        "We exploit the gradual rollout of Korea's High School Equalisation Policy, which replaced ability-based tracking with random assignment in major metropolitan areas starting in 1974, to estimate the long-run labour-market effects of school-track assignment. Using linked administrative data on 486,320 individuals, we find that students affected by the reform experienced a 3.2 percent increase in lifetime earnings, with effects concentrated among disadvantaged students who would have been assigned to lower tracks under examination admission. The reform reduced the variance of log earnings across cohorts by approximately 8 percent, with no measurable effect on aggregate educational attainment.",
        "These results show that the organisation of schooling, and not only its quantity, shapes long-run economic outcomes. Future work could examine whether the reform affected the next generation, through the educational investments of affected students in their own children, and how the partial reintroduction of selective schools since the 2000s has changed the distribution of school quality.",
      ],
    },
    {
      id: "appendix",
      heading: "Appendix A. Construction of Variables",
      paragraphs: [
        "Lifetime earnings. Annual covered earnings from pension records are deflated with the consumer price index to 2015 won. For each individual we compute the present discounted value at age 33 of earnings between ages 33 and 53 at a real discount rate of 3 percent. Earnings above the contribution ceiling are top-coded in the records; the ceiling binds for 4 percent of person-years, and we impute earnings above it using a Pareto distribution fitted by year. Results are similar when we exclude top-coded observations.",
        "Predicted track. Using cohorts that entered high school before 1974 in comparison cities, we estimate a probit model of attending one of the top-third academic high schools in the city, ranked by university placement, on father's and mother's education, father's occupation, number of siblings and sex. The model correctly classifies 71 percent of students. We apply the estimated coefficients to all individuals in the sample and define terciles and quintiles of the fitted probability within each city-cohort cell.",
        "City assignment and treatment. The city of middle-school completion is taken from the census retrospective module. For the 6 percent of individuals with inconsistent reports between the 1990 and 2000 censuses, we use the 1990 report. Treatment status is assigned by comparing the individual's year of high-school entry, inferred from year of birth, with the year of the first lottery in the city, as listed in Table 1.",
      ],
    },
  ],
};
