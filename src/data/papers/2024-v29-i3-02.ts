// Vol. 29, No. 3 (July 2024) — full text for an article defined in journal.ts (sample content).
import type { FulltextSpec } from "../paper-spec";

export const fulltext: FulltextSpec = {
  id: "2024-v29-i3-02",
  acknowledgments:
    "We thank seminar participants at Hitotsubashi University, Peking University and Hanyang University, two anonymous referees and the handling Associate Editor for helpful comments. We are grateful to the Korea Labor Institute, the Panel Data Research Center at Keio University and the Institute for Social Research at the University of Michigan for making their panel data available, and to the 2015 SSM Survey Management Committee for permission to use the survey. All errors are our own.",
  dataAvailability:
    "The Korean Labor and Income Panel Study, the Japan Household Panel Survey and the Panel Study of Income Dynamics are available to registered researchers from the Korea Labor Institute, Keio University and the University of Michigan respectively; the 2015 Social Stratification and Mobility Survey is available through the Social Science Japan Data Archive. Harmonisation code and replication files are available from the corresponding author.",
  editorialNote:
    "Keiko Sato, Hong-Mei Wang and Sang-Yoon Han find that the intergenerational elasticity of schooling is 0.42 in Korea, 0.36 in the United States and 0.28 in Japan; Korea's educational expansion of 1970–2000 cut the elasticity from 0.58 for the 1945–54 cohort to 0.37 for those born 1985–92 by eliminating the parental gradient at the secondary transitions, but the gradient in entry to four-year universities persists and accounts for most of Korea's remaining mobility gap.",
  refs: [
    /* 1 */ "Becker, G. S., & Tomes, N. (1979). An equilibrium theory of the distribution of income and intergenerational mobility. Journal of Political Economy, 87(6), 1153–1189.",
    /* 2 */ "Becker, G. S., & Tomes, N. (1986). Human capital and the rise and fall of families. Journal of Labor Economics, 4(3, Part 2), S1–S39.",
    /* 3 */ "Solon, G. (1992). Intergenerational income mobility in the United States. American Economic Review, 82(3), 393–408.",
    /* 4 */ "Solon, G. (1999). Intergenerational mobility in the labor market. In O. Ashenfelter & D. Card (Eds.), Handbook of Labor Economics (Vol. 3A, pp. 1761–1800). Amsterdam: Elsevier.",
    /* 5 */ "Black, S. E., & Devereux, P. J. (2011). Recent developments in intergenerational mobility. In O. Ashenfelter & D. Card (Eds.), Handbook of Labor Economics (Vol. 4B, pp. 1487–1541). Amsterdam: Elsevier.",
    /* 6 */ "Hertz, T., Jayasundera, T., Piraino, P., Selcuk, S., Smith, N., & Verashchagina, A. (2007). The inheritance of educational inequality: International comparisons and fifty-year trends. B.E. Journal of Economic Analysis & Policy, 7(2), Article 10.",
    /* 7 */ "Chetty, R., Hendren, N., Kline, P., & Saez, E. (2014). Where is the land of opportunity? The geography of intergenerational mobility in the United States. Quarterly Journal of Economics, 129(4), 1553–1623.",
    /* 8 */ "Corak, M. (2013). Income inequality, equality of opportunity, and intergenerational mobility. Journal of Economic Perspectives, 27(3), 79–102.",
    /* 9 */ "Mare, R. D. (1980). Social background and school continuation decisions. Journal of the American Statistical Association, 75(370), 295–305.",
    /* 10 */ "Cameron, S. V., & Heckman, J. J. (1998). Life cycle schooling and dynamic selection bias: Models and evidence for five cohorts of American males. Journal of Political Economy, 106(2), 262–333.",
    /* 11 */ "Heckman, J. J. (2006). Skill formation and the economics of investing in disadvantaged children. Science, 312(5782), 1900–1902.",
    /* 12 */ "Cunha, F., & Heckman, J. (2007). The technology of skill formation. American Economic Review, 97(2), 31–47.",
    /* 13 */ "Black, S. E., Devereux, P. J., & Salvanes, K. G. (2005). Why the apple doesn't fall far: Understanding intergenerational transmission of human capital. American Economic Review, 95(1), 437–449.",
    /* 14 */ "Holmlund, H., Lindahl, M., & Plug, E. (2011). The causal effect of parents' schooling on children's schooling: A comparison of estimation methods. Journal of Economic Literature, 49(3), 615–651.",
    /* 15 */ "Pekkarinen, T., Uusitalo, R., & Kerr, S. (2009). School tracking and intergenerational income mobility: Evidence from the Finnish comprehensive school reform. Journal of Public Economics, 93(7–8), 965–973.",
    /* 16 */ "Meghir, C., & Palme, M. (2005). Educational reform, ability, and family background. American Economic Review, 95(1), 414–424.",
    /* 17 */ "Chetty, R., Friedman, J. N., Saez, E., Turner, N., & Yagan, D. (2020). Income segregation and intergenerational mobility across colleges in the United States. Quarterly Journal of Economics, 135(3), 1567–1633.",
    /* 18 */ "Lochner, L. J., & Monge-Naranjo, A. (2011). The nature of credit constraints and human capital. American Economic Review, 101(6), 2487–2529.",
    /* 19 */ "Carneiro, P., & Heckman, J. J. (2002). The evidence on credit constraints in post-secondary schooling. Economic Journal, 112(482), 705–734.",
    /* 20 */ "Ermisch, J., Jäntti, M., & Smeeding, T. (Eds.). (2012). From parents to children: The intergenerational transmission of advantage. New York: Russell Sage Foundation.",
    /* 21 */ "Lee, C.-I., & Solon, G. (2009). Trends in intergenerational income mobility. Review of Economics and Statistics, 91(4), 766–772.",
    /* 22 */ "Breen, R., & Jonsson, J. O. (2005). Inequality of opportunity in comparative perspective: Recent research on educational attainment and social mobility. Annual Review of Sociology, 31, 223–243.",
    /* 23 */ "Shavit, Y., & Blossfeld, H.-P. (Eds.). (1993). Persistent inequality: Changing educational attainment in thirteen countries. Boulder, CO: Westview Press.",
    /* 24 */ "Ishida, H., Müller, W., & Ridge, J. M. (1995). Class origin, class destination, and education: A cross-national study of ten industrial nations. American Journal of Sociology, 101(1), 145–193.",
    /* 25 */ "Heckman, J. J., & Mosso, S. (2014). The economics of human development and social mobility. Annual Review of Economics, 6, 689–733.",
    /* 26 */ { jer: "2021-v26-i4-02" },
  ],
  body: [
    {
      id: "introduction",
      heading: "1. Introduction",
      paragraphs: [
        "Education is widely regarded as the main channel through which societies can weaken the link between the circumstances of parents and the outcomes of their children. Theory suggests that public investment in schooling can raise mobility by relaxing the credit constraints that prevent poorer families from investing in their children [1][2], and governments in East Asia and elsewhere have relied on educational expansion as a central instrument of social policy. Yet the degree to which children's schooling depends on that of their parents varies widely across countries [6][8][20], and it is not well understood why countries with similarly high average attainment differ so much in mobility.",
        "Korea, Japan and the United States offer an instructive comparison. All three have high levels of educational attainment, and Korea and Japan have among the highest rates of tertiary participation in the world. But they followed very different paths. Japan achieved near-universal upper-secondary enrolment by the mid-1970s; the United States had done so earlier, combined with a large and stratified higher-education sector; and Korea compressed a transition from mass primary to mass tertiary education into barely three decades, with secondary enrolment becoming universal in the 1980s and tertiary entry rates rising from about a quarter of school leavers in 1980 to more than two-thirds by 2000.",
        "We compare intergenerational educational mobility in the three countries using harmonised parent–child linked datasets: the Korean Labor and Income Panel Study, the Japan Household Panel Survey supplemented by the 2015 Social Stratification and Mobility Survey, and the Panel Study of Income Dynamics. We harmonise schooling measures across surveys and estimate the intergenerational elasticity of schooling — the coefficient from a regression of children's years of schooling on their parents' — for children born between 1945 and 1992.",
        "Korea exhibits the highest intergenerational elasticity of schooling (0.42), followed by the United States (0.36) and Japan (0.28). The Korean elasticity has fallen sharply across birth cohorts, from 0.58 for children born in 1945–54 to 0.37 for those born in 1985–92, while the American and Japanese elasticities have changed little. Using a sequential model of educational transitions [9][10], we show that Korea's educational expansion between 1970 and 2000 eliminated the influence of parental background on progression through secondary school, but left a strong parental-education gradient in access to four-year universities. Decomposing the cross-country differences, we find that the tertiary-access margin accounts for most of Korea's remaining gap with the United States and about half of its gap with Japan.",
        "These findings have implications for current policy debates. Korea has recently expanded publicly funded early-childhood education, motivated in part by evidence that early investments have high returns [11][12][25]. Our simulations suggest that interventions which raise attainment at the lower end of the schooling distribution would have small effects on the intergenerational elasticity in Korea today, because parental background no longer shapes secondary completion. The persistence of a parental-education gradient in tertiary access suggests that recent reforms targeting early-childhood education may have limited effects on mobility unless complemented by interventions at the tertiary-access margin.",
        "The rest of the paper is organised as follows. Section 2 describes the education systems of the three countries, Section 3 reviews related literature and Section 4 sets out the framework. Section 5 describes the data and Section 6 the empirical strategy. Section 7 presents the main results, Section 8 the transition-model decomposition and heterogeneity, and Section 9 robustness checks. Section 10 discusses policy implications and Section 11 concludes.",
      ],
    },
    {
      id: "background",
      heading: "2. Institutional background",
      paragraphs: [
        "Korea's modern education system was built after 1945 on a 6-3-3-4 structure. Primary education became effectively universal in the 1950s. Access to secondary school was rationed by entrance examinations until the abolition of the middle-school entrance examination in 1969 and the introduction of the High School Equalization Policy from 1974, which replaced school-specific entrance examinations in major cities with the lottery-based assignment of students to academic high schools. Upper-secondary enrolment rose from about 30 percent of the age group in 1970 to more than 90 percent by 1990. Tertiary education expanded in two waves: the graduation-quota policy of 1981 sharply increased university intakes, and the liberalisation of university establishment in 1996 led to the rapid founding of new private institutions, so that by 2000 about 68 percent of high-school graduates entered tertiary education. Earlier evidence in this journal on the long-run effects of Korea's high-school reform [26] shows how changes in secondary-school assignment altered the link between family background and later outcomes.",
        "Expansion did not remove competition. Admission to the most selective four-year universities, which are concentrated in Seoul, depends on performance in the national college entrance examination and on school records, and families invest heavily in private tutoring. Junior colleges and newer provincial universities absorbed much of the expansion. As a result, the distinction that matters for labour-market outcomes has shifted from whether a young person enters tertiary education to which type of institution they attend.",
        "Japan's 6-3-3-4 system was established in 1947. Upper-secondary enrolment exceeded 90 percent by 1974, earlier than in Korea, and tertiary participation grew more gradually, with a large junior-college and vocational-school sector. Upper-secondary schools are stratified by entrance examination, and admission to selective universities is competitive, but public spending on compulsory schooling is relatively equal across regions. In the United States, high-school completion became nearly universal by the 1960s; the higher-education system is large and highly stratified, ranging from open-access community colleges to highly selective private universities, and tuition costs are high relative to East Asia's public institutions but are offset by need-based aid at many institutions.",
      ],
    },
    {
      id: "literature",
      heading: "3. Related literature",
      paragraphs: [
        "A large literature measures intergenerational persistence in income and education. Early work on income mobility in the United States emphasised the attenuation bias from using single-year measures of parental income [3][4], and subsequent work documented large differences across countries and regions [7][8][21]. Educational persistence is easier to measure because schooling is completed early in life and is reported with less error. Hertz et al. {6} estimate the intergenerational correlation of schooling for 42 countries and find substantial variation, with relatively high persistence in South America and lower persistence in Nordic countries; Black and Devereux {5} review the evidence. Comparative studies in sociology have long emphasised that educational expansion does not necessarily reduce inequality of opportunity, because advantaged groups maintain their advantage at higher levels of the system [22][23][24].",
        "A second literature asks whether parental schooling causally affects children's schooling. Studies using twins, adoptees and compulsory-schooling reforms find that much of the intergenerational correlation reflects selection, though parents' education has some causal effect [13][14]. School reforms that delay tracking or extend compulsory schooling have been found to increase mobility in Sweden and Finland [15][16]. Our analysis is descriptive in this sense: we measure the association between parents' and children's schooling, which is the policy-relevant concept of mobility, and examine how institutional changes altered it.",
        "A third literature studies the determinants of educational transitions. Mare {9} proposed modelling schooling as a sequence of continuation decisions and showed that the effect of family background declines at higher transitions, partly because of selection. Cameron and Heckman {10} emphasised that differences in college entry by family income reflect mainly long-run factors that shape ability and preparation, rather than short-run credit constraints at the time of entry [19]. Later work suggests that credit constraints have become more important as tuition has risen [18], and that access to selective colleges is strongly related to parental income in the United States [17]. Work on the technology of skill formation emphasises the importance of early childhood for later outcomes [11][12][25]. We bring these perspectives together in a cross-country comparison that identifies the transitions at which parental background matters most.",
      ],
    },
    {
      id: "framework",
      heading: "4. Conceptual framework and hypotheses",
      paragraphs: [
        "Let S_c and S_p denote the years of schooling of child and parent. The intergenerational elasticity of schooling β is the slope from regressing S_c on S_p; it equals the intergenerational correlation ρ multiplied by the ratio of the standard deviations of children's and parents' schooling. The elasticity can therefore fall either because the correlation falls or because the dispersion of children's schooling falls relative to that of parents. Educational expansion that brings almost all children to a common level of schooling compresses the distribution and mechanically reduces β, even if the parental gradient in later transitions is unchanged.",
        "To see where parental background matters, we write schooling as the outcome of a sequence of transitions: entry to middle school, entry to academic upper-secondary school, entry to tertiary education and entry to a four-year university. At each transition k, the probability of continuing depends on parental schooling with coefficient γ_k. The elasticity β is approximately a weighted sum of the γ_k, where the weight on each transition is the product of the share of children at risk of making it, the variance of continuation at that transition, and the number of additional years of schooling it confers. Educational expansion that makes a transition nearly universal reduces its variance and therefore its weight, regardless of γ_k.",
        "This framework yields three hypotheses. First, Korea's rapid expansion of secondary education reduced the elasticity mainly by eliminating variation, and the parental gradient, at the secondary transitions (H1). Second, because the expansion of tertiary education was accompanied by stratification between types of institution, the parental gradient at the four-year university transition did not fall (H2). Third, cross-country differences in the elasticity among recent cohorts reflect mainly differences in the gradient at the tertiary-access margin (H3). If these hypotheses hold, interventions that raise early skills or secondary attainment for disadvantaged children will reduce the elasticity only to the extent that they also change tertiary access.",
      ],
    },
    {
      id: "data",
      heading: "5. Data",
      paragraphs: [
        "We assemble parent–child pairs from four surveys and harmonise schooling, birth cohorts and sample definitions across them.",
      ],
      subsections: [
        {
          id: "data-sources",
          heading: "5.1 Surveys and samples",
          paragraphs: [
            "For Korea we use the Korean Labor and Income Panel Study (KLIPS), a nationally representative household panel begun in 1998 that records the schooling of all household members and, for each respondent, the schooling of both parents. We combine pairs observed within households across the panel's waves to 2021 with pairs constructed from respondents' reports of their parents' schooling. For Japan we use the Japan Household Panel Survey, which merges the Keio Household Panel Survey begun in 2004 with the Japan Household Panel Survey begun in 2009, supplemented by the 2015 Social Stratification and Mobility Survey, which asks respondents about their parents' schooling. For the United States we use the Panel Study of Income Dynamics (PSID), which follows the children of original sample households since 1968 and therefore provides directly linked parent–child pairs.",
            "Table 1 summarises the samples. We restrict attention to children born between 1945 and 1992 who were at least 26 years old when last observed, so that schooling is complete. The samples contain 14,820 pairs in Korea, 11,350 in Japan and 9,960 in the United States. Average schooling of children is highest in Korea (13.6 years), followed by the United States (13.5) and Japan (13.4), whereas parents' schooling is lowest in Korea, reflecting the speed of its expansion. The standard deviation of schooling is much larger for Korean parents than for Korean children.",
          ],
          table: {
            id: "tab-samples",
            caption: "Table 1. Harmonised parent–child samples, children born 1945–1992",
            columns: ["Country", "Surveys", "Parent–child pairs", "Child schooling, mean (s.d.)", "Parent schooling, mean (s.d.)", "Child tertiary entry (%)", "Parent tertiary (%)"],
            rows: [
              ["Korea", "KLIPS 1998–2021", "14,820", "13.6 (2.6)", "8.9 (3.9)", "61.4", "12.8"],
              ["Japan", "JHPS/KHPS 2004–2021; SSM 2015", "11,350", "13.4 (2.1)", "11.2 (2.7)", "54.9", "21.6"],
              ["United States", "PSID 1968–2021", "9,960", "13.5 (2.3)", "12.1 (2.8)", "58.2", "29.4"],
            ],
            note: "Parent schooling is the higher of the mother's and father's years of schooling. Years of schooling are harmonised across surveys by mapping the highest level completed to standard durations (Appendix A). Tertiary entry includes junior colleges, vocational colleges and four-year universities. Means are weighted using survey weights.",
          },
        },
        {
          id: "data-harmonisation",
          heading: "5.2 Harmonising schooling",
          paragraphs: [
            "Surveys record education differently: KLIPS and the Japanese surveys record the highest level of schooling attended and whether it was completed, while the PSID records years of completed schooling. We harmonise by assigning standard durations to each completed level in each country: 6 years for primary, 9 for lower secondary, 12 for upper secondary, 14 for junior and vocational college, 16 for a four-year degree and 18 for graduate study, with partial credit for incomplete levels where duration is recorded. For American respondents we recode years of schooling to the same levels using reported degrees. Our main parental measure is the higher of the two parents' schooling; we show in Section 9 that results are similar using the father's, the mother's or the average.",
            "We also construct indicators for each educational transition: entry to middle school, entry to academic upper-secondary school (excluding vocational tracks where these can be identified), entry to any tertiary education and entry to a four-year university. For recent cohorts we additionally identify, in KLIPS, attendance at one of the 15 most selective universities as ranked by entrance-examination cut-offs. Because the American high-school system is not tracked, the academic-secondary transition for the United States is defined as completion of high school with a regular diploma.",
          ],
        },
      ],
    },
    {
      id: "strategy",
      heading: "6. Empirical strategy",
      paragraphs: [
        "We estimate the elasticity of schooling and its components, model the sequence of transitions, and use the transition model to decompose differences across countries and cohorts.",
      ],
      subsections: [
        {
          id: "strategy-ige",
          heading: "6.1 Elasticities and correlations",
          paragraphs: [
            "For each country we regress children's years of schooling on parental schooling, controlling for a quadratic in the child's birth year and for sex. We report the elasticity, the correlation, and the rank–rank slope, which uses percentile ranks of schooling within each birth cohort and is less sensitive to changes in the distribution of schooling [7]. We estimate elasticities by ten-year birth cohort to trace changes over time. Standard errors are clustered by family to account for siblings.",
          ],
        },
        {
          id: "strategy-transitions",
          heading: "6.2 Transition model and decomposition",
          paragraphs: [
            "We estimate sequential logit models of the four transitions [9], in which the log-odds of continuing at each transition depend on parental schooling, sex, birth cohort and, where available, region of residence at age 14. The models are estimated separately by country and by two broad cohort groups (children born 1945–64 and 1965–92). We then simulate the distribution of children's schooling, and hence the elasticity, under counterfactual scenarios in which the transition coefficients of one country or cohort are replaced by those of another, one transition at a time, holding fixed the distribution of parental schooling. This allows us to attribute differences in the elasticity to the gradient at each transition, to differences in the baseline continuation rates and to differences in the distribution of parental schooling.",
            "The decomposition is path-dependent, since the contribution of each transition depends on the order in which coefficients are replaced. We report the average over all orderings (a Shapley decomposition), so that contributions sum to the total difference. Confidence intervals are obtained by bootstrapping families with 500 replications.",
          ],
        },
      ],
    },
    {
      id: "results",
      heading: "7. Results",
      paragraphs: [
        "We present the pooled elasticities first, then their evolution across birth cohorts, and finally the parental gradient in tertiary access.",
      ],
      subsections: [
        {
          id: "results-pooled",
          heading: "7.1 Pooled elasticities",
          paragraphs: [
            "Table 2 reports the main estimates. The intergenerational elasticity of schooling is 0.42 in Korea, 0.36 in the United States and 0.28 in Japan, and all three are precisely estimated, with standard errors of about 0.01. The differences between countries are statistically significant at the 1 percent level. The correlations follow the same ranking, but are closer together: 0.62 in Korea, 0.55 in the United States and 0.47 in Japan. In Korea the elasticity is lower than the correlation because the dispersion of children's schooling is smaller than that of parents', which reflects the rapid expansion of schooling between generations.",
            "Rank–rank slopes are 0.45 in Korea, 0.40 in the United States and 0.34 in Japan, preserving the ordering. Estimates are similar for sons and daughters in the United States and Japan, but in Korea the elasticity is higher for daughters (0.45) than for sons (0.39), reflecting the historically larger gender gap in Korean education, which was concentrated among children of less educated parents. The Korean estimate is close to those reported for other middle-income countries with recent educational expansion in the cross-country study of Hertz et al. {6}, while the American estimate is consistent with earlier work [5].",
          ],
          table: {
            id: "tab-ige",
            caption: "Table 2. Intergenerational persistence of schooling, children born 1945–1992",
            columns: ["Measure", "Korea", "United States", "Japan"],
            rows: [
              ["Elasticity of schooling", "0.42*** (0.010)", "0.36*** (0.011)", "0.28*** (0.009)"],
              ["Correlation", "0.62", "0.55", "0.47"],
              ["Rank–rank slope", "0.45*** (0.009)", "0.40*** (0.010)", "0.34*** (0.010)"],
              ["Elasticity, sons", "0.39*** (0.013)", "0.35*** (0.015)", "0.27*** (0.012)"],
              ["Elasticity, daughters", "0.45*** (0.013)", "0.37*** (0.015)", "0.29*** (0.012)"],
              ["Elasticity, with region controls", "0.40*** (0.010)", "0.34*** (0.011)", "0.27*** (0.009)"],
              ["Parent–child pairs", "14,820", "9,960", "11,350"],
            ],
            note: "Regressions of children's years of schooling on the higher of the parents' years of schooling, controlling for a quadratic in birth year and for sex. Rank–rank slopes use percentile ranks within ten-year birth cohorts. Region controls are indicators for province (Korea), prefecture (Japan) or state (United States) of residence at age 14. Standard errors clustered by family in parentheses. *** p < 0.01, ** p < 0.05, * p < 0.1.",
          },
        },
        {
          id: "results-cohorts",
          heading: "7.2 Changes across birth cohorts",
          paragraphs: [
            "Figure 1 and Table 3 show elasticities by ten-year birth cohort. In Korea, the elasticity falls from 0.58 for children born in 1945–54 to 0.48 for those born in 1955–64, 0.42 for 1965–74, 0.38 for 1975–84 and 0.37 for 1985–92. The decline is concentrated among cohorts who entered secondary school between 1970 and 2000, when secondary enrolment became universal and tertiary education expanded, and it largely stops for children born after 1975. In the United States, the elasticity is remarkably stable, between 0.35 and 0.38 across all cohorts. In Japan it declines modestly, from 0.33 to 0.26, with most of the decline among early cohorts.",
            "The correlation in Korea falls much less than the elasticity, from 0.66 to 0.58. Most of the decline in the elasticity therefore reflects the compression of children's schooling relative to parents' rather than a weakening of the rank association between generations. Educational expansion reduced, but did not eliminate, the influence of parental background on schooling attainment. Even among the youngest Korean cohort, the elasticity exceeds that of the United States, and the gap with Japan remains large.",
          ],
          figures: [
            {
              id: "fig-cohorts",
              caption: "Figure 1. Intergenerational elasticity of schooling by birth cohort",
              kind: "line",
              xLabels: ["1945–54", "1955–64", "1965–74", "1975–84", "1985–92"],
              yLabel: "Elasticity of schooling",
              series: [
                { name: "Korea", values: [0.58, 0.48, 0.42, 0.38, 0.37], lower: [0.54, 0.45, 0.39, 0.35, 0.34], upper: [0.62, 0.51, 0.45, 0.41, 0.4] },
                { name: "United States", values: [0.38, 0.36, 0.35, 0.36, 0.37], lower: [0.34, 0.33, 0.32, 0.33, 0.33], upper: [0.42, 0.39, 0.38, 0.39, 0.41] },
                { name: "Japan", values: [0.33, 0.3, 0.28, 0.26, 0.26], lower: [0.3, 0.27, 0.25, 0.23, 0.23], upper: [0.36, 0.33, 0.31, 0.29, 0.29] },
              ],
              note: "Elasticities from regressions of children's years of schooling on the higher of the parents' years of schooling, estimated separately by ten-year birth cohort and country, controlling for sex and birth year. Bands are 95 percent confidence intervals based on standard errors clustered by family.",
            },
          ],
          table: {
            id: "tab-cohorts",
            caption: "Table 3. Elasticities and correlations of schooling by birth cohort",
            columns: ["Birth cohort", "Korea: elasticity", "Korea: correlation", "United States: elasticity", "United States: correlation", "Japan: elasticity", "Japan: correlation"],
            rows: [
              ["1945–54", "0.58", "0.66", "0.38", "0.56", "0.33", "0.49"],
              ["1955–64", "0.48", "0.63", "0.36", "0.55", "0.30", "0.48"],
              ["1965–74", "0.42", "0.61", "0.35", "0.54", "0.28", "0.47"],
              ["1975–84", "0.38", "0.59", "0.36", "0.55", "0.26", "0.46"],
              ["1985–92", "0.37", "0.58", "0.37", "0.56", "0.26", "0.46"],
              ["Change, first to last cohort", "−0.21***", "−0.08**", "−0.01", "0.00", "−0.07**", "−0.03"],
            ],
            note: "Elasticities and correlations of children's and parents' years of schooling by ten-year birth cohort (the last cohort covers eight years). Stars refer to tests of the change between the first and last cohorts, using bootstrapped standard errors with 500 replications clustered by family. *** p < 0.01, ** p < 0.05, * p < 0.1. Cohort elasticities have standard errors between 0.015 and 0.022.",
          },
        },
        {
          id: "results-tertiary",
          heading: "7.3 The parental gradient in tertiary access",
          paragraphs: [
            "Figure 2 shows rates of entry to four-year universities for children born 1975–92, by parental schooling. In Korea, 22 percent of children whose parents had at most lower-secondary schooling entered a four-year university, compared with 41 percent of children of upper-secondary graduates and 76 percent of children of tertiary-educated parents, a gap of 54 percentage points between the highest and lowest groups. The corresponding gaps are 44 percentage points in the United States and 46 in Japan. The Korean gradient is even steeper for the most selective universities: children of tertiary-educated parents are about seven times as likely as children of parents with at most lower-secondary schooling to attend one of the 15 most selective institutions.",
            "By contrast, entry to any tertiary institution, including junior and vocational colleges, shows a much flatter gradient in Korea among recent cohorts: 63 percent of children of the least educated parents entered some form of tertiary education, against 94 percent of children of tertiary-educated parents. The expansion of tertiary education thus brought large numbers of children from less educated families into junior colleges and less selective universities, while access to four-year and selective universities remained strongly stratified.",
          ],
          figures: [
            {
              id: "fig-tertiary",
              caption: "Figure 2. Entry to four-year universities by parental schooling, children born 1975–1992",
              kind: "bar",
              xLabels: ["Lower secondary or less", "Upper secondary", "Tertiary"],
              yLabel: "Entry to four-year university (percent)",
              series: [
                { name: "Korea", values: [22, 41, 76] },
                { name: "United States", values: [24, 39, 68] },
                { name: "Japan", values: [20, 37, 66] },
              ],
              note: "Share of children born 1975–1992 who entered a four-year university by age 26, by the higher of the parents' completed schooling. Weighted by survey weights.",
            },
          ],
        },
      ],
    },
    {
      id: "mechanisms",
      heading: "8. Mechanisms and heterogeneity",
      paragraphs: [
        "We now use the transition model to identify the margins at which parental background matters and to decompose differences in the elasticity across countries and cohorts.",
      ],
      subsections: [
        {
          id: "mech-transitions",
          heading: "8.1 Parental gradients at each transition",
          paragraphs: [
            "Table 4 reports the coefficients on parental schooling in the sequential logit model. For Korean children born in 1945–64, parental schooling strongly predicts each transition: an additional year of parental schooling raises the log-odds of entering middle school by 0.31, of entering academic upper-secondary school by 0.28, of entering tertiary education by 0.22 and of entering a four-year university by 0.24. For children born in 1965–92, the coefficients on the two secondary transitions fall to 0.05 and 0.09, as these transitions became almost universal, but the coefficients at the tertiary and four-year university transitions are essentially unchanged at 0.21 and 0.26. This pattern supports H1 and H2.",
            "In the United States, the gradient at high-school completion is 0.24 and at tertiary and four-year entry about 0.20–0.22. In Japan, the gradients are smaller at all transitions, at 0.12 for academic upper-secondary entry and 0.18–0.19 for tertiary transitions. Among recent cohorts, Korea's gradient at the four-year university transition is the largest of the three countries, and it applies to a transition that, because of the near-universal completion of secondary school, almost all Korean children are at risk of making.",
          ],
          table: {
            id: "tab-transitions",
            caption: "Table 4. Parental schooling and educational transitions: sequential logit coefficients",
            columns: ["Transition", "Korea, born 1945–64", "Korea, born 1965–92", "United States", "Japan"],
            rows: [
              ["Entry to middle school", "0.31*** (0.02)", "0.05 (0.04)", "—", "—"],
              ["Entry to academic upper secondary", "0.28*** (0.02)", "0.09** (0.04)", "0.24*** (0.02)", "0.12*** (0.02)"],
              ["Entry to any tertiary education", "0.22*** (0.02)", "0.21*** (0.02)", "0.20*** (0.02)", "0.18*** (0.02)"],
              ["Entry to four-year university", "0.24*** (0.03)", "0.26*** (0.02)", "0.22*** (0.02)", "0.19*** (0.02)"],
              ["Share completing upper secondary (%)", "58.6", "96.8", "88.9", "95.1"],
              ["Parent–child pairs", "5,410", "9,410", "9,960", "11,350"],
            ],
            note: "Coefficients on the higher of the parents' years of schooling in logit models of continuation at each transition, conditional on having completed the previous transition, controlling for sex, birth year and region at age 14. For the United States, the upper-secondary transition is completion of high school with a regular diploma; middle-school entry is universal in the United States and Japan for all cohorts studied. Standard errors clustered by family in parentheses. *** p < 0.01, ** p < 0.05, * p < 0.1.",
          },
        },
        {
          id: "mech-decomposition",
          heading: "8.2 Decomposing differences across countries and cohorts",
          paragraphs: [
            "Table 5 presents Shapley decompositions of differences in the elasticity. The first column decomposes the decline in the Korean elasticity from 0.58 for children born in 1945–54 to 0.37 for those born in 1985–92, a fall of 0.21. Changes at the secondary transitions — the near-elimination of their parental gradient and the compression of continuation rates towards one — account for 0.16 of the fall. Changes in the distribution of parental schooling, which became more dispersed relative to children's schooling, account for a further 0.06, while changes at the tertiary transitions slightly raised the elasticity, by 0.01. The educational expansion therefore reduced the elasticity entirely through the secondary margins.",
            "The second and third columns decompose the differences between Korea and the United States (0.06) and between Korea and Japan (0.14) for children born 1965–92. The tertiary-access margin accounts for 0.05 of the gap with the United States and 0.07 of the gap with Japan; that is, most of the former and half of the latter. The secondary margins account for 0.02 and 0.05, and differences in the parental distribution for the remainder. These results support H3: among recent cohorts, the main reason why Korean children's schooling depends more on their parents' than in the other two countries is the steep parental gradient in access to four-year universities.",
            "The decomposition also clarifies the role of early-childhood interventions. We simulate a policy that raises the probability of completing academic upper-secondary school for children whose parents have at most lower-secondary schooling to the rate for children of upper-secondary graduates, which is a generous representation of what early interventions might achieve for later attainment. For recent Korean cohorts, this reduces the elasticity only from 0.42 to 0.41, because secondary completion is already almost universal. By contrast, reducing the four-year university gradient to Japan's level lowers the elasticity to 0.36, and halving the gap in four-year entry between children of the least and most educated parents lowers it to 0.35.",
          ],
          table: {
            id: "tab-decomp",
            caption: "Table 5. Shapley decomposition of differences in the elasticity of schooling",
            columns: ["Component", "Korea: 1945–54 to 1985–92", "Korea − United States, born 1965–92", "Korea − Japan, born 1965–92"],
            rows: [
              ["Total difference", "−0.21", "0.06", "0.14"],
              ["Secondary transitions", "−0.16", "0.02", "0.05"],
              ["Tertiary transitions", "0.01", "0.05", "0.07"],
              ["Distribution of parental schooling", "−0.06", "−0.01", "0.02"],
              ["Share due to tertiary transitions (%)", "—", "83", "50"],
              ["90% interval, tertiary contribution", "[−0.01, 0.03]", "[0.03, 0.07]", "[0.05, 0.09]"],
            ],
            note: "Shapley decompositions based on simulated distributions of children's schooling from the sequential logit model, averaging over all orderings in which transition coefficients, baseline continuation rates and the parental schooling distribution are replaced. Secondary transitions include middle-school and academic upper-secondary entry; tertiary transitions include entry to any tertiary education and to four-year universities. Components may not sum to the total because of rounding. Intervals from 500 family-level bootstrap replications.",
          },
        },
        {
          id: "mech-heterogeneity",
          heading: "8.3 Heterogeneity",
          paragraphs: [
            "The Korean tertiary gradient is steeper in the capital region than elsewhere. For children who lived in Seoul or Gyeonggi at age 14, the coefficient at the four-year university transition is 0.30, compared with 0.22 for those in other provinces, consistent with the concentration of selective universities and of private tutoring in the capital region. The gradient is also steeper for daughters among cohorts born before 1975, but this difference disappears for later cohorts. In Japan and the United States regional differences are smaller. Using the mother's rather than the father's schooling yields slightly higher tertiary gradients in all three countries, consistent with the importance of maternal involvement in educational investment.",
          ],
        },
      ],
    },
    {
      id: "robustness",
      heading: "9. Robustness",
      paragraphs: [
        "Table 6 reports robustness checks. Using the father's schooling, the mother's schooling or the average of the two as the parental measure changes the elasticities slightly but preserves the ranking. Correcting for measurement error in reported parental schooling, using the reliability ratio estimated from KLIPS and PSID households in which both parent and child report the parent's schooling, raises all three elasticities by between 0.02 and 0.04. Restricting the Korean and Japanese samples to directly linked pairs observed in the same household, rather than pairs based on recall, yields estimates within 0.02 of the baseline, although the samples are younger.",
        "Sample selection is a potential concern because the surveys began at different dates and parent–child pairs are observed at different ages. Restricting to children born 1965–92, for whom all surveys provide good coverage, gives elasticities of 0.39 for Korea, 0.36 for the United States and 0.27 for Japan, still preserving the ranking. Using the 2015 SSM Survey alone for Japan yields 0.29. Excluding children who were still enrolled at the time of the last observation or who had not reached age 30 makes little difference. Finally, the ordering of the countries is unchanged if we use the probability of attaining a higher level of schooling than one's parents as an alternative mobility measure.",
      ],
      table: {
        id: "tab-robust",
        caption: "Table 6. Robustness of the elasticity of schooling",
        columns: ["Specification", "Korea", "United States", "Japan"],
        rows: [
          ["Baseline (higher of parents)", "0.42", "0.36", "0.28"],
          ["Father's schooling", "0.40", "0.34", "0.27"],
          ["Mother's schooling", "0.44", "0.38", "0.30"],
          ["Average of parents", "0.45", "0.39", "0.31"],
          ["Corrected for measurement error", "0.46", "0.38", "0.31"],
          ["Directly linked pairs only", "0.40", "0.36", "0.27"],
          ["Children born 1965–92", "0.39", "0.36", "0.27"],
          ["Children aged 30 or older", "0.42", "0.36", "0.28"],
          ["Upward mobility rate (%)", "71.5", "48.2", "53.6"],
        ],
        note: "Elasticities from regressions of children's on parents' years of schooling, controlling for a quadratic in birth year and sex. All elasticities are significant at the 1 percent level, with standard errors between 0.009 and 0.016. The measurement-error correction divides by the reliability ratio of reported parental schooling (0.91 in Korea, 0.95 in the United States, 0.92 in Japan). The upward mobility rate is the share of children with more schooling than the higher-educated parent; it is highest in Korea because of rapid educational expansion, despite the higher elasticity.",
      },
    },
    {
      id: "discussion",
      heading: "10. Discussion and policy implications",
      paragraphs: [
        "Our results show that educational expansion can raise mobility substantially, but that its effects depend on which transitions it affects. Korea's expansion of secondary education removed a major source of inequality, and the high rate of upward mobility in Table 6 reflects the extraordinary rise in schooling across generations. But the expansion of tertiary education, which took place mainly through junior colleges and less selective private universities, did not reduce the parental gradient at the margin that matters most for labour-market outcomes. As the sociological literature on maximally maintained inequality has emphasised [22][23], advantaged families can preserve their position by shifting competition to higher levels of the system.",
        "This has implications for policies currently under discussion in Korea. The universal provision of early-childhood education and care for children aged 3–5, introduced through the common curriculum from 2012 onwards, is well motivated by evidence on the returns to early investment [11][12][25], and may yield benefits for children's development, maternal employment and later skills. But our simulations suggest that its effect on intergenerational educational mobility, as conventionally measured, is likely to be modest unless improvements in early skills translate into greater access to four-year and selective universities. Interventions at the tertiary-access margin — such as admissions policies that consider socioeconomic background, expanded need-based financial aid, support for students from less advantaged schools in preparing for entrance examinations, and improvements in the quality of regional universities — may be needed to complement early-childhood reforms.",
        "The comparison with Japan is instructive. Japan's lower elasticity reflects smaller gradients at all transitions, and in particular a flatter gradient in tertiary access. Possible explanations include the earlier completion of secondary expansion, which allowed the parental distribution to equalise before tertiary expansion, more equal public spending on schools across regions, and a less pronounced concentration of selective universities in a single metropolitan area. The American case shows that a high-attainment country with a stratified higher-education sector can sustain a stable but substantial elasticity; evidence that access to selective colleges is strongly related to parental income [17] suggests a mechanism similar to Korea's.",
        "Our analysis has limitations. We measure associations, not causal effects of parental schooling, and do not separate the roles of income, wealth, ability and preferences in transmitting advantage [13][14]. Survey samples are smaller than administrative data, and recall of parental schooling may be less accurate for older respondents. Comparisons across countries depend on the harmonisation of schooling levels, though our results are robust to alternative definitions.",
      ],
    },
    {
      id: "conclusion",
      heading: "11. Conclusion",
      paragraphs: [
        "Using harmonised parent–child data, we find that intergenerational educational mobility is lowest in Korea, with an elasticity of schooling of 0.42, compared with 0.36 in the United States and 0.28 in Japan. Korea's educational expansion between 1970 and 2000 reduced the elasticity substantially by equalising progression through secondary school, but did not reduce the parental gradient in access to four-year universities, which now accounts for most of Korea's mobility gap with the other two countries.",
        "Future research could use administrative data linking children's university admissions records to parental characteristics to study the mechanisms behind the tertiary gradient, including private tutoring, school quality and admissions rules. It would also be valuable to examine whether the persistence of the gradient in university access translates into persistence in earnings, and how recent reforms of university admissions in Korea and Japan affect access for children from less educated families.",
      ],
    },
    {
      id: "appendix",
      heading: "Appendix A. Harmonisation of schooling and sample construction",
      paragraphs: [
        "Schooling levels. In KLIPS and the Japanese surveys, respondents report the highest level of schooling attended (none, primary, lower secondary, upper secondary, junior or vocational college, four-year university, graduate school) and whether it was completed, dropped out or still in progress. We assign 0, 6, 9, 12, 14, 16 and 18 years to completed levels and half the duration of the level for those who attended but did not complete it. Pre-war Japanese schooling levels reported for parents are mapped to their post-war equivalents using standard concordances. In the PSID we use completed years of schooling, top-coded at 17, and recode them to the same levels using degree information where available.",
        "Parent–child pairs. In KLIPS, pairs are constructed both from co-resident household members and from respondents' reports of their parents' schooling. When both sources are available, we use the co-resident report. In the Japanese surveys, all pairs are based on respondents' reports. In the PSID, pairs are constructed from the family identification mapping file linking original sample members to their children. We exclude adopted and step-children where they can be identified. Survey weights are used throughout; results are similar without weights.",
        "Transition model. The sequential logit model is estimated with all children at risk of each transition, conditional on having completed the previous one. For simulations, we draw children's transitions from the estimated model for each parent in the sample, compute the implied years of schooling and estimate the elasticity on the simulated data, repeating the procedure 100 times and averaging. The simulated elasticities reproduce the estimated ones within 0.01 in each country and cohort.",
      ],
    },
  ],
};
