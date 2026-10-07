// Vol. 30, No. 2 (April 2025) — full text (sample content).
import type { FulltextSpec } from "../paper-spec";

export const fulltext: FulltextSpec = {
  id: "2025-v30-i2-04",
  acknowledgments:
    "We thank participants at the Korea Labor Institute workshop on human capital, the Hanyang University economics seminar and the annual conference of the Korean Econometric Society, two anonymous referees and the handling editor for constructive comments. Research assistance by Hye-Won Seo is gratefully acknowledged. The views expressed are the authors' own.",
  dataAvailability:
    "KLIPS micro data are distributed by the Korea Labor Institute to registered users. Municipality-level reform dates are compiled from Ministry of Education statistical yearbooks and are available from the corresponding author together with the replication code.",
  editorialNote:
    "Using compulsory-schooling reforms as instruments in KLIPS 1998–2022, the paper finds a causal return of 6.8 percent per year of schooling; cognitive and non-cognitive skills explain 22 and 18 percent of the residual wage variance, with non-cognitive skills most important for women and managers.",
  refs: [
    /* 1 */ "Card, D. (1999). The causal effect of education on earnings. In O. Ashenfelter & D. Card (Eds.), Handbook of Labor Economics (Vol. 3A, pp. 1801–1863). Elsevier.",
    /* 2 */ "Angrist, J. D., & Krueger, A. B. (1991). Does compulsory school attendance affect schooling and earnings? Quarterly Journal of Economics, 106(4), 979–1014.",
    /* 3 */ "Heckman, J. J., Stixrud, J., & Urzua, S. (2006). The effects of cognitive and noncognitive abilities on labor market outcomes and social behavior. Journal of Labor Economics, 24(3), 411–482.",
    /* 4 */ "Heckman, J. J., & Kautz, T. (2012). Hard evidence on soft skills. Labour Economics, 19(4), 451–464.",
    /* 5 */ "Mincer, J. (1974). Schooling, experience, and earnings. Columbia University Press for the National Bureau of Economic Research.",
    /* 6 */ "Oreopoulos, P. (2006). Estimating average and local average treatment effects of education when compulsory schooling laws really matter. American Economic Review, 96(1), 152–175.",
    /* 7 */ "Harmon, C., Oosterbeek, H., & Walker, I. (2003). The returns to education: Microeconomics. Journal of Economic Surveys, 17(2), 115–156.",
    /* 8 */ "Deming, D. J. (2017). The growing importance of social skills in the labor market. Quarterly Journal of Economics, 132(4), 1593–1640.",
    /* 9 */ "Borghans, L., Duckworth, A. L., Heckman, J. J., & ter Weel, B. (2008). The economics and psychology of personality traits. Journal of Human Resources, 43(4), 972–1059.",
    /* 10 */ "Almlund, M., Duckworth, A. L., Heckman, J. J., & Kautz, T. (2011). Personality psychology and economics. In E. A. Hanushek, S. Machin, & L. Woessmann (Eds.), Handbook of the Economics of Education (Vol. 4, pp. 1–181). Elsevier.",
    /* 11 */ "Lindqvist, E., & Vestman, R. (2011). The labor market returns to cognitive and noncognitive ability: Evidence from the Swedish enlistment. American Economic Journal: Applied Economics, 3(1), 101–128.",
    /* 12 */ "Cunha, F., & Heckman, J. (2007). The technology of skill formation. American Economic Review, 97(2), 31–47.",
    /* 13 */ "Cunha, F., Heckman, J. J., & Schennach, S. M. (2010). Estimating the technology of cognitive and noncognitive skill formation. Econometrica, 78(3), 883–931.",
    /* 14 */ "Heckman, J., Pinto, R., & Savelyev, P. (2013). Understanding the mechanisms through which an influential early childhood program boosted adult outcomes. American Economic Review, 103(6), 2052–2086.",
    /* 15 */ "Imbens, G. W., & Angrist, J. D. (1994). Identification and estimation of local average treatment effects. Econometrica, 62(2), 467–475.",
    /* 16 */ "Stock, J. H., & Yogo, M. (2005). Testing for weak instruments in linear IV regression. In D. W. K. Andrews & J. H. Stock (Eds.), Identification and inference for econometric models: Essays in honor of Thomas Rothenberg (pp. 80–108). Cambridge University Press.",
    /* 17 */ "Conley, T. G., Hansen, C. B., & Rossi, P. E. (2012). Plausibly exogenous. Review of Economics and Statistics, 94(1), 260–272.",
    /* 18 */ "Cameron, A. C., Gelbach, J. B., & Miller, D. L. (2008). Bootstrap-based improvements for inference with clustered errors. Review of Economics and Statistics, 90(3), 414–427.",
    /* 19 */ "Hanushek, E. A., & Woessmann, L. (2008). The role of cognitive skills in economic development. Journal of Economic Literature, 46(3), 607–668.",
    /* 20 */ "Oaxaca, R. (1973). Male-female wage differentials in urban labor markets. International Economic Review, 14(3), 693–709.",
    /* 21 */ "Gelbach, J. B. (2016). When do covariates matter? And which ones, and how much? Journal of Labor Economics, 34(2), 509–543.",
    /* 22 */ "Blau, F. D., & Kahn, L. M. (2017). The gender wage gap: Extent, trends, and explanations. Journal of Economic Literature, 55(3), 789–865.",
    /* 23 */ "Bertrand, M., & Pan, J. (2013). The trouble with boys: Social influences and the gender gap in disruptive behavior. American Economic Journal: Applied Economics, 5(1), 32–64.",
    /* 24 */ "Acemoglu, D., & Angrist, J. (2001). How large are human-capital externalities? Evidence from compulsory schooling laws. NBER Macroeconomics Annual, 15, 9–59.",
    /* 25 */ "Weidmann, B., & Deming, D. J. (2021). Team players: How social skills improve team performance. Econometrica, 89(6), 2637–2657.",
  ],
  body: [
    {
      id: "introduction",
      heading: "1. Introduction",
      paragraphs: [
        "Few relationships in empirical economics have been estimated as often as the wage return to an additional year of schooling, and few remain as contested. The Mincerian coefficient [5] is easy to compute, but it conflates the effect of schooling with the effect of everything that is correlated with schooling, from family background to motivation to innate ability [1][7]. Two strands of research have tried to separate these. One uses quasi-experimental variation in the schooling people receive, typically from compulsory-schooling laws, to obtain a causal return [2][6]. The other, associated with Heckman and co-authors, emphasises that schooling is not the only human-capital input that wages reward: cognitive skills and a bundle of non-cognitive traits, including conscientiousness, emotional stability and the sense of control over one's life, also carry labour-market returns and are themselves shaped by schooling [3][4][9].",
        "These two literatures are rarely brought together. Studies of compulsory schooling seldom measure skills, so they cannot say how much of the wage variation left over after schooling is accounted for by cognitive rather than non-cognitive endowments. Studies of skills, in turn, typically treat schooling as one more control and do not confront its endogeneity. The gap matters for policy. If the residual wage variance is mainly cognitive, the case for investing in academic instruction is strengthened; if a large part is non-cognitive, the case for early interventions that build perseverance, sociability and self-regulation becomes more compelling [12][14].",
        "This paper estimates the causal return to schooling in Korea while explicitly accounting for both kinds of skills, and then asks how much of the wage variance that schooling does not explain is attributable to each. We use the Korean Labor and Income Panel Study (KLIPS), a nationally representative household panel that has followed urban families since 1998, and we combine it with supplementary skill modules that measure numeracy, literacy and personality traits. Our identification strategy exploits the staggered extension of compulsory schooling to middle school, which reached different types of municipalities at different dates between 1985 and 2004. Exposure depends on where and when a child turned twelve, which is plausibly unrelated to later wage determinants once region and cohort effects are controlled for.",
        "Our main findings are as follows. The instrumental-variable (IV) estimate of the return to schooling, controlling for cognitive and non-cognitive skills, is 6.8 percent per additional year; the corresponding estimate that does not control for skills is slightly higher, 7.1 percent, and both are below the 7.9 percent ordinary least squares (OLS) estimate. Decomposing the residual wage variance, that is, the variance not attributable to schooling, cognitive skills explain 22 percent and non-cognitive skills 18 percent, leaving 20 percent to experience, region, industry and similar observables and 40 percent unexplained. The non-cognitive share is considerably larger for women (24 percent) and for workers in managerial occupations (27 percent) than for men (14 percent) and non-managers (15 percent).",
        "We contribute to the literature in three ways. First, we offer causal estimates of the return to schooling for a high-income economy in which educational attainment rose from near-universal primary completion to near-universal tertiary entry within a single generation, so that the compliers of a middle-school reform are an informative margin [15]. Second, we integrate the causal approach with the skills approach by showing how much of the wage variance that remains after schooling is accounted for by each skill type [3][11]. Third, we document the gender and occupational gradients of the non-cognitive return, which links to the growing evidence on the rising value of social skills in the labour market [8][25].",
        "The remainder of the paper proceeds as follows. Section 2 describes the Korean education system and the reforms that extended compulsory schooling. Section 3 reviews related literature, and Section 4 sets out a conceptual framework and hypotheses. Section 5 describes the data, Section 6 the empirical strategy, Section 7 the main results, Section 8 mechanisms and heterogeneity, and Section 9 robustness. Section 10 discusses policy implications and Section 11 concludes.",
      ],
    },
    {
      id: "background",
      heading: "2. Institutional Background",
      paragraphs: [
        "Korea's formal school system follows a 6-3-3-4 structure: six years of elementary school, three of middle school, three of high school (general or vocational) and four of university. Elementary education has been compulsory and free since the 1950s. Middle school was, for most of the post-war period, compulsory in law but not in practice. Entry required passing selection procedures or paying tuition, and in rural and island areas many children, especially girls, left school after elementary grades because of fees and distance. The government therefore extended free and compulsory middle-school education gradually, starting with the most remote areas and proceeding to progressively larger settlements.",
        "Table 1 summarises the roll-out as we have reconstructed it from Ministry of Education statistical yearbooks and municipal records. Free compulsory middle school was introduced first for islands and remote rural districts in 1985. It was extended to rural townships (eup and myeon) between 1992 and 1994, and to the remaining small and medium-sized cities in stages between 1998 and 2002. Metropolitan areas, which already had near-universal middle-school attendance, were covered in 2004. The assignment of areas to waves was determined by fiscal capacity and school-building needs rather than by local labour-market conditions, which supports the exogeneity of timing conditional on region.",
        "Several features of the setting are useful for identification. First, the reform changed the cost and availability of schooling at a specific age, so that exposure is determined by where a child was living at about age twelve and by the child's birth cohort. Second, the reform did not directly affect the later stages of the education system, so that its effect on completed schooling operates through middle-school completion and through the subsequent choice to enter high school. Third, because the first treated areas were remote, a considerable share of compliers are children of farm and fishing households who would otherwise have left school early, a group for which the returns to additional schooling may differ from those of the population average.",
      ],
      tables: [
        {
          id: "table-1",
          caption: "Table 1. Extension of compulsory middle-school education by municipality type",
          columns: ["Wave", "Municipality type", "Year compulsory", "Share of KLIPS sample", "Mean years of schooling, last pre-reform cohort", "Mean years of schooling, first post-reform cohort"],
          rows: [
            ["1", "Islands and remote rural districts", "1985", "6.1%", "10.2", "11.0"],
            ["2", "Rural townships (eup, myeon)", "1992–1994", "14.8%", "10.9", "11.6"],
            ["3", "Small and medium-sized cities", "1998–2002", "33.5%", "12.3", "12.7"],
            ["4", "Metropolitan areas", "2004", "45.6%", "13.4", "13.6"],
          ],
          note: "Note: Share of KLIPS sample is the share of worker observations by municipality type at age twelve. Mean years of schooling are computed for the birth cohorts immediately before and after the first cohort aged twelve when the reform applied. Source: Ministry of Education statistical yearbooks; KLIPS; authors' calculations.",
        },
      ],
    },
    {
      id: "literature",
      heading: "3. Related Literature",
      paragraphs: [
        "The causal return to schooling has been studied with several types of natural experiment. The best-known early example exploits quarter-of-birth variation in the age at which U.S. students may leave school [2], and subsequent work uses changes in compulsory-schooling laws in many countries. Surveys conclude that IV estimates are often as large as, or larger than, OLS estimates, which is inconsistent with a simple upward ability bias and has been explained by heterogeneity in returns and measurement error in schooling [1][7]. Oreopoulos shows that reforms which change schooling for a large share of the population, such as those in the United Kingdom, deliver local average treatment effects that are informative about average returns [6]. We follow this logic: our reform shifted middle-school completion for a substantial fraction of rural cohorts. We interpret IV estimates as local average treatment effects for compliers [15].",
        "A second literature emphasises that cognitive skills are not the only skills rewarded in the labour market. Heckman, Stixrud and Urzua show in U.S. data that both cognitive and non-cognitive abilities affect wages, schooling and a range of social outcomes, and that a latent-factor approach is needed to avoid attenuation [3]. Lindqvist and Vestman use Swedish military enlistment data and find that non-cognitive ability matters more than cognitive ability for avoiding unemployment and low earnings, whereas cognitive ability matters more for the upper end of the earnings distribution [11]. Surveys by Borghans and co-authors and by Almlund and co-authors set out the psychological foundations of personality measures and their predictive validity for economic outcomes [9][10]. Cross-country evidence shows that cognitive skills, as measured by test scores, are strongly related to growth [19].",
        "A third body of work studies how skills are formed. Cunha and Heckman model skills as the product of investments at different ages, with complementarity between early and later investments and with cross-effects between cognitive and non-cognitive skills [12][13]. Heckman, Pinto and Savelyev show that the long-run effects of an early-childhood programme operated mainly through improved personality traits rather than IQ [14]. If schooling itself builds non-cognitive skills, then part of the schooling return in a skills-augmented regression is absorbed by skills, which is the pattern we will document.",
        "Finally, our results on gender and occupations connect to evidence on the changing task content of jobs. Deming documents that jobs requiring social skills have grown fastest in the United States, with a rising wage premium for workers who combine cognitive and social skills [8], and Weidmann and Deming show that social skills improve team performance [25]. Gender gaps in non-cognitive traits, notably in disruptive behaviour and in the tendency to avoid competition, have been linked to gaps in educational attainment and earnings [22][23]. Our paper offers evidence on these themes for a country in which hierarchical, team-based work organisation is the norm. As far as we know, no existing paper combines compulsory-schooling instruments with a variance decomposition of the residual wage across skill types.",
      ],
    },
    {
      id: "framework",
      heading: "4. Conceptual Framework and Hypotheses",
      paragraphs: [
        "We start from a log-wage equation in which a worker's wage depends on schooling S, cognitive skills C, non-cognitive skills N, experience and other observables X, and an idiosyncratic component. Skills are themselves partly produced by schooling and partly determined before and outside school, so that C = c0 + c1·S + η_c and N = n0 + n1·S + η_n, where the η terms capture family background, early investments and innate endowments [12][13]. Substituting into the wage equation gives a reduced-form schooling return that includes both a direct component and an indirect one operating through skills.",
        "This framework has three implications that we test. The first is that the schooling coefficient should decline when skill measures are added to the wage equation, by an amount equal to the product of the schooling effect on skills and the skill return, and it should do so even in the IV specification as long as schooling affects skills. Conditional on the instrument being valid, the IV estimate with skills identifies the direct return to schooling (hypothesis H1), while the IV estimate without skills identifies the total return, so that the difference measures the part of the return that operates through measured skills. The second implication concerns the variance decomposition: because the η components are only weakly correlated with schooling, both skills should account for a non-trivial share of the wage variance not attributable to schooling (H2).",
        "The third implication concerns heterogeneity. Where jobs require coordination, persuasion and the management of others, non-cognitive skills should command a larger premium [8][25]; and where women face more occupational segmentation and more subjective evaluation, as in much of the Korean labour market, non-cognitive traits such as conscientiousness may serve as signals that compensate for statistical discrimination [22]. We therefore expect a larger non-cognitive share of residual variance among women and among managers (H3).",
      ],
    },
    {
      id: "data",
      heading: "5. Data",
      paragraphs: [
        "This section describes the sources, the sample, and the construction of the variables. Table 2 reports descriptive statistics for the analysis sample.",
      ],
      subsections: [
        {
          id: "data-klips",
          heading: "5.1 The Korean Labor and Income Panel Study",
          paragraphs: [
            "KLIPS is a longitudinal survey of about 5,000 urban households and their members, conducted annually by the Korea Labor Institute since 1998 and refreshed with new samples in 2009 and 2018. Respondents report their education, employment, earnings, working hours, occupation and industry, as well as the municipality and type of area in which they lived at age fourteen and the year they completed each level of schooling. We use waves 1 to 25 (1998–2022). Our sample consists of wage and salary workers aged 25 to 60 who report positive monthly earnings and hours, born between 1962 and 1990. This yields 9,640 workers and 71,830 worker-year observations; 42.6 percent of workers are women.",
            "The hourly wage is monthly earnings divided by usual monthly hours, deflated to 2020 prices. We winsorise the wage at the first and ninety-ninth percentiles. Years of schooling are derived from reported highest level completed and from graduation dates. Experience is potential experience, age minus years of schooling minus six. Managerial occupations follow the Korean Standard Classification of Occupations (major group 1), covering senior officials and managers; they account for 14.2 percent of workers (1,369 workers).",
          ],
        },
        {
          id: "data-skills",
          heading: "5.2 Measuring cognitive and non-cognitive skills",
          paragraphs: [
            "Skill measures come from supplementary modules fielded in the 2009, 2014 and 2019 waves. The cognitive index is the first principal component of a set of short numeracy and literacy items and a word-recall task. The non-cognitive index combines items from a short Big Five inventory (conscientiousness, emotional stability, openness, agreeableness and extraversion), a locus-of-control scale and a self-esteem scale; we take the first principal component of the standardised items [9][10]. Both indices are standardised to mean zero and standard deviation one in the sample. Respondents completing a module in several waves have their scores averaged, which reduces measurement error and the contemporaneous influence of labour-market experiences on responses; we also report results that use the first available measure only (Section 9).",
            "A limitation is that skills are measured in adulthood, after schooling and sometimes after substantial labour-market experience. If labour-market success changes self-reported personality, the non-cognitive coefficient may be biased upward, and the reported variance shares should be read as upper bounds on the non-cognitive contribution. To mitigate this, the non-cognitive index uses items that, in the psychological literature, are stable over adulthood [10], and we verify that results are similar when restricting to the first measure observed before age forty.",
          ],
        },
        {
          id: "data-descriptives",
          heading: "5.3 Descriptive statistics",
          paragraphs: [
            "Table 2 shows that the average worker has 13.1 years of schooling, is 38.4 years old and earns 15,800 won per hour. Men have about 0.6 more years of schooling than women on average and earn 24 percent more per hour; managers have 1.9 more years of schooling than non-managers. The distribution of the instrument is balanced across birth cohorts by construction: 38.7 percent of workers were twelve in a year when middle school was compulsory in their municipality of residence. Treated workers have 0.5 more years of schooling than untreated workers, a raw difference that we refine in Section 7.",
          ],
          tables: [
            {
              id: "table-2",
              caption: "Table 2. Descriptive statistics",
              columns: ["Variable", "Mean", "Std. dev.", "Men", "Women", "Managers"],
              rows: [
                ["Years of schooling", "13.1", "2.9", "13.4", "12.8", "14.8"],
                ["Hourly wage (won, 2020 prices)", "15,800", "9,600", "17,500", "14,100", "24,600"],
                ["Log hourly wage", "9.52", "0.55", "9.62", "9.38", "9.98"],
                ["Age", "38.4", "9.7", "38.9", "37.8", "42.1"],
                ["Potential experience (years)", "19.3", "10.1", "19.6", "18.9", "21.3"],
                ["Cognitive index (std.)", "0.00", "1.00", "0.09", "−0.12", "0.41"],
                ["Non-cognitive index (std.)", "0.00", "1.00", "−0.07", "0.10", "0.22"],
                ["Compulsory middle school at age 12", "0.387", "0.487", "0.381", "0.395", "0.349"],
                ["Female share", "0.426", "", "", "", "0.171"],
                ["Workers / observations", "9,640 / 71,830", "", "5,533", "4,107", "1,369"],
              ],
              note: "Note: Sample is wage and salary workers aged 25–60 born 1962–1990 in KLIPS waves 1–25 (1998–2022). Skill indices are standardised in the full sample. Log wage is the natural log of the hourly wage in won.",
            },
          ],
        },
      ],
    },
    {
      id: "strategy",
      heading: "6. Empirical Strategy",
      paragraphs: [
        "We estimate the return to schooling in a standard Mincer framework augmented with skills and instrument schooling with exposure to compulsory middle school. We first state the estimating equation and the first stage, and then discuss the identifying assumptions and the variance decomposition.",
      ],
      subsections: [
        {
          id: "strategy-iv",
          heading: "6.1 Two-stage least squares",
          paragraphs: [
            "The wage equation is ln w_it = α + β S_i + γ_c C_i + γ_n N_i + X_it'δ + μ_r + θ_b + ε_it, where w_it is the hourly wage of worker i in year t, S_i is years of schooling, C_i and N_i are the cognitive and non-cognitive indices, X_it contains a quadratic in experience, gender, survey-year effects and region-of-birth and industry controls, μ_r are fixed effects for the municipality type at age twelve and θ_b are birth-cohort effects. The first stage is S_i = π Z_i + (the same controls) + v_i, where Z_i equals one if middle school was compulsory in the worker's municipality in the year the worker turned twelve. Standard errors are clustered by municipality of residence at age twelve, which is the level at which the instrument varies; we also report wild cluster bootstrap p-values because the number of clusters is moderate [18].",
            "Because skills are measured with error and are plausibly affected by schooling, we also treat them with care. Our preferred specification includes the skill indices as exogenous controls; we show that the schooling coefficient is not sensitive to instrumenting them with predetermined characteristics (parental education and birth order) and report alternative measurement approaches in the robustness section. The estimator identifies the effect of an additional year of schooling for compliers, individuals whose schooling responds to the extension of compulsory middle school [15].",
          ],
        },
        {
          id: "strategy-identification",
          heading: "6.2 Identifying assumptions",
          paragraphs: [
            "The instrument must be relevant, independent of the error term, and satisfy the exclusion restriction, and monotonic in its effect on schooling. Relevance is testable (Table 3 and Figure 1). Independence follows from the fact that conditional on municipality type and birth cohort the timing of the reform was determined by fiscal capacity; Figure 1 shows no pre-trends in schooling across cohorts before eligibility. The exclusion restriction requires that the reform affected wages only through years of schooling, and not, for example, through changes in the quality of schooling, peer composition or local labour demand. We probe it using the placebo and plausibly-exogenous bounds approach of Conley, Hansen and Rossi [17] in Section 9. Monotonicity is natural for a reform that lowers the cost of schooling.",
            "A particular concern is that the reform coincided with other changes in rural areas, in particular rapid economic growth and migration. We address it by controlling for municipality-type effects, by allowing region-specific linear cohort trends and by dropping the metropolitan areas. We also exploit the fact that the instrument varies at a fine level of both geography and cohort, which allows us to control flexibly for both dimensions.",
          ],
        },
        {
          id: "strategy-decomposition",
          heading: "6.3 Variance decomposition",
          paragraphs: [
            "To quantify the contribution of each skill to the wage variance not explained by schooling, we purge the log wage of the schooling component, using the IV coefficient: ỹ_it = ln w_it − β̂_IV S_i. We then regress ỹ on the skill indices and the other observables and compute the Shapley (average marginal) contribution of each group of regressors to the R² of the full model, following the logic of the Oaxaca and Gelbach decompositions [20][21]. The Shapley procedure averages the incremental R² of a regressor group over all orderings, so that the result does not depend on an arbitrary ordering when regressors are correlated. We express contributions as shares of the variance of ỹ, the residual wage variance, so that they sum to 100 percent together with the unexplained part. Confidence intervals come from 500 cluster bootstrap replications.",
          ],
        },
      ],
    },
    {
      id: "results",
      heading: "7. Results",
      paragraphs: [
        "We present first-stage evidence, then the baseline estimates of the return to schooling, and finally the decomposition of the residual wage variance.",
      ],
      subsections: [
        {
          id: "results-first-stage",
          heading: "7.1 First-stage evidence",
          paragraphs: [
            "Figure 1 plots the coefficients of an event-study version of the first stage, in which the instrument is replaced by indicators for the number of birth cohorts before or after the first cohort that was twelve when middle school became compulsory in the municipality. The coefficients are small and statistically insignificant for the six pre-reform cohorts, and rise sharply to about 0.4 years at the first eligible cohort and 0.5 years after two cohorts. The absence of pre-trends supports the assumption that the timing of the reform is unrelated to existing trends in schooling.",
            "The first-stage coefficient in the pooled specification is 0.46 years of schooling (standard error 0.09), with a Kleibergen–Paap F-statistic of 27.4, well above the conventional thresholds for weak-instrument problems [16]. Compliers, those whose schooling is changed by the reform, account for about 12 percent of the sample, mostly workers who grew up in islands, remote areas and rural townships. The reform shifts their distribution of schooling towards completion of middle school and subsequent entry to high school.",
          ],
          figures: [
            {
              id: "figure-1",
              caption: "Figure 1. First-stage effect of compulsory middle school on years of schooling, by birth cohort relative to the first eligible cohort",
              kind: "line",
              xLabels: ["−6", "−5", "−4", "−3", "−2", "−1", "0", "1", "2", "3", "4", "5", "6"],
              yLabel: "Years of schooling",
              series: [
                {
                  name: "Estimate",
                  values: [0.03, -0.05, 0.02, 0.06, -0.04, 0, 0.41, 0.47, 0.52, 0.49, 0.51, 0.54, 0.5],
                  lower: [-0.21, -0.28, -0.2, -0.17, -0.27, 0, 0.2, 0.25, 0.3, 0.26, 0.27, 0.3, 0.25],
                  upper: [0.27, 0.18, 0.24, 0.29, 0.19, 0, 0.62, 0.69, 0.74, 0.72, 0.75, 0.78, 0.75],
                },
              ],
              marker: 5,
              note: "Note: Coefficients on indicators for birth cohorts relative to the first cohort aged twelve under compulsory middle school, with 95 percent confidence intervals; cohort −1 is the omitted category. Controls: municipality-type and cohort effects. The dashed line marks the first eligible cohort.",
            },
          ],
        },
        {
          id: "results-baseline",
          heading: "7.2 The return to schooling",
          paragraphs: [
            "Table 3 reports OLS and IV estimates. In column (1), the OLS return without skills is 7.9 percent per year of schooling. Controlling for cognitive and non-cognitive skills in column (2) reduces it to 6.4 percent: one standard deviation in the cognitive index is associated with 7.1 percent higher wages and one standard deviation of the non-cognitive index with 5.8 percent. Columns (3) to (5) turn to IV. Column (3) reports the first stage. The IV estimate without skills in column (4) is 7.1 percent (standard error 2.6), and the IV estimate with both skills in column (5) is 6.8 percent (standard error 2.4), our headline estimate.",
            "Two features stand out. First, the IV estimate is lower than the OLS estimate without skills, by about one percentage point, consistent with a modest positive selection of workers with higher unobserved ability into longer schooling, though the difference is not statistically significant. A Hausman-type test does not reject equality at conventional levels (p = 0.41). Second, adding skills lowers the IV estimate by only 0.3 percentage points, to 6.8 percent, whereas it lowers the OLS estimate by 1.5 points. This pattern is consistent with the OLS estimate absorbing a correlation between schooling and skills that the instrument removes, and it suggests that the compulsory-schooling margin raised years of schooling without a commensurate increase in measured skills. Under the framework in Section 4, the small gap between columns (4) and (5) implies that only about 4 percent of the total return operates through the measured skills.",
          ],
          tables: [
            {
              id: "table-3",
              caption: "Table 3. Returns to schooling: OLS and instrumental-variable estimates",
              columns: ["", "(1) OLS", "(2) OLS + skills", "(3) First stage", "(4) IV", "(5) IV + skills"],
              rows: [
                ["Years of schooling", "0.079*** (0.003)", "0.064*** (0.003)", "", "0.071*** (0.026)", "0.068*** (0.024)"],
                ["Compulsory middle school at 12", "", "", "0.46*** (0.09)", "", ""],
                ["Cognitive index (per SD)", "", "0.071*** (0.006)", "", "", "0.069*** (0.007)"],
                ["Non-cognitive index (per SD)", "", "0.058*** (0.005)", "", "", "0.056*** (0.006)"],
                ["Kleibergen–Paap F", "", "", "27.4", "27.4", "26.9"],
                ["Municipality-type and cohort effects", "Yes", "Yes", "Yes", "Yes", "Yes"],
                ["Observations", "71,830", "71,830", "71,830", "71,830", "71,830"],
                ["Workers", "9,640", "9,640", "9,640", "9,640", "9,640"],
              ],
              note: "Note: Dependent variable is the log hourly wage (columns 1, 2, 4, 5) or years of schooling (column 3). Controls: gender, quadratic in experience, survey-year effects, industry, municipality-type and birth-cohort effects. Standard errors clustered by municipality at age twelve in parentheses. *** p<0.01, ** p<0.05, * p<0.10.",
            },
          ],
        },
        {
          id: "results-decomposition",
          heading: "7.3 What explains the residual wage variance?",
          paragraphs: [
            "Table 4 reports the decomposition of the residual wage variance, that is, the variance of the log wage net of the IV schooling component. In the full sample, cognitive skills account for 22 percent and non-cognitive skills for 18 percent. Experience, region, industry and other observables account for a further 20 percent, and the remaining 40 percent is unexplained by any of our measures and reflects unobserved heterogeneity, firm-specific pay and measurement error. The bootstrap 95 percent confidence intervals are 19–25 percent for the cognitive share and 15–21 percent for the non-cognitive share. Hence the two kinds of skills have comparable explanatory power, with cognitive skills somewhat more important overall (H2).",
            "The sub-sample columns reveal marked differences. For men, cognitive skills explain 24 percent and non-cognitive skills 14 percent. For women the relative importance is reversed, with 20 percent attributable to cognitive skills and 24 percent to non-cognitive skills. The pattern is similar by occupation: among non-managers, cognitive skills explain 23 percent and non-cognitive skills 15 percent, whereas among managers the shares are 19 and 27 percent. These patterns, shown in Figure 2, support hypothesis H3 and are examined in Section 8.",
          ],
          tables: [
            {
              id: "table-4",
              caption: "Table 4. Decomposition of the residual wage variance (percent)",
              columns: ["Component", "Full sample", "Men", "Women", "Managers", "Non-managers"],
              rows: [
                ["Cognitive skills", "22", "24", "20", "19", "23"],
                ["Non-cognitive skills", "18", "14", "24", "27", "15"],
                ["Experience, region, industry and other observables", "20", "21", "19", "18", "20"],
                ["Unexplained", "40", "41", "37", "36", "42"],
                ["Total", "100", "100", "100", "100", "100"],
                ["Residual variance of log wage", "0.187", "0.176", "0.171", "0.162", "0.183"],
              ],
              note: "Note: Shapley decomposition of the R² of a regression of the schooling-purged log wage (ln w − 0.068·S) on the listed groups of regressors, expressed as shares of the variance of the purged log wage. Bootstrap 95 percent confidence intervals for the full sample: cognitive 19–25, non-cognitive 15–21.",
            },
          ],
          figures: [
            {
              id: "figure-2",
              caption: "Figure 2. Share of residual wage variance explained by cognitive and non-cognitive skills",
              kind: "bar",
              xLabels: ["Full sample", "Men", "Women", "Managers", "Non-managers"],
              yLabel: "Percent of residual wage variance",
              series: [
                { name: "Cognitive skills", values: [22, 24, 20, 19, 23] },
                { name: "Non-cognitive skills", values: [18, 14, 24, 27, 15] },
              ],
              note: "Note: Shapley shares from Table 4. Residual wage variance is the variance of the log wage net of the estimated schooling component.",
            },
          ],
        },
      ],
    },
    {
      id: "heterogeneity",
      heading: "8. Mechanisms and Heterogeneity",
      paragraphs: [
        "Table 5 reports IV estimates by gender and occupation. The schooling return is 5.9 percent for men and 8.2 percent for women, and the difference of 2.3 points is statistically significant at the 10 percent level (p = 0.08). Women therefore gain more from an additional year of schooling at the margin of the reform, which is consistent with the reform's strong effect on girls' completion in rural areas and with the larger gap between women who complete high school and those who do not [22]. The return is 8.1 percent for managers and 6.4 percent for non-managers.",
        "The skill coefficients in the same table differ systematically. A standard deviation of the non-cognitive index raises the wage by 7.3 percent among women and 4.6 percent among men, and by 8.4 percent among managers against 5.1 percent among non-managers. The cognitive coefficient is similar across groups, a little larger for men (7.6 percent) than for women (6.4 percent). This reproduces the pattern in the variance decomposition: what distinguishes women and managers is the higher price of non-cognitive skills, not any difference in their dispersion, since the standard deviation of the non-cognitive index is similar across groups.",
        "Which non-cognitive traits drive these results? Splitting the index into its components, conscientiousness and emotional stability carry most of the premium for women, while the premium for managers is concentrated in extraversion and agreeableness, the traits associated with coordinating teams and persuading others [8][25]. The locus-of-control scale matters for both groups. These patterns are descriptive, but they accord with the view that managerial work depends on interpersonal skills and that women are rewarded for signals of reliability in a labour market in which statistical discrimination is still prevalent [22][23].",
        "Finally, we test whether schooling itself builds skills by regressing the skill indices on years of schooling using the instrument. An additional year of schooling raises the cognitive index by 0.06 standard deviations (standard error 0.03) and the non-cognitive index by 0.03 standard deviations (standard error 0.03); only the first is statistically significant. The relatively modest effect on non-cognitive skills at the compulsory-schooling margin suggests that, for compliers, additional years of classroom instruction have not been the main source of non-cognitive development, in line with the argument that such skills are formed mainly earlier in childhood and in the family [12][14].",
      ],
      tables: [
        {
          id: "table-5",
          caption: "Table 5. IV returns to schooling and skill coefficients by gender and occupation",
          columns: ["Sample", "Workers", "Schooling (IV)", "Cognitive (per SD)", "Non-cognitive (per SD)", "First-stage F"],
          rows: [
            ["Full sample", "9,640", "0.068*** (0.024)", "0.069*** (0.007)", "0.056*** (0.006)", "26.9"],
            ["Men", "5,533", "0.059** (0.027)", "0.076*** (0.009)", "0.046*** (0.008)", "22.1"],
            ["Women", "4,107", "0.082*** (0.031)", "0.064*** (0.010)", "0.073*** (0.009)", "19.4"],
            ["Managers", "1,369", "0.081** (0.036)", "0.060*** (0.014)", "0.084*** (0.013)", "12.8"],
            ["Non-managers", "8,271", "0.064*** (0.025)", "0.073*** (0.007)", "0.051*** (0.006)", "24.8"],
          ],
          note: "Note: Each row is a separate IV regression of the log hourly wage on years of schooling (instrumented) and the two skill indices, with the controls in Table 3. Standard errors clustered by municipality at age twelve in parentheses. *** p<0.01, ** p<0.05, * p<0.10.",
        },
      ],
    },
    {
      id: "robustness",
      heading: "9. Robustness",
      paragraphs: [
        "Table 6 summarises a series of robustness exercises for the headline IV estimate of 6.8 percent. Excluding the metropolitan municipalities, whose reform date coincides with a period of rapid change in urban labour markets, raises the estimate slightly to 7.1 percent. Allowing region-specific linear cohort trends reduces it to 6.3 percent (standard error 3.1), which is still significant at the 5 percent level, though less precisely estimated because the trend terms absorb a good deal of the instrument's variation. Restricting to a narrower window of cohorts, born 1966–1986, produces a return of 7.2 percent.",
        "Using the first available skill measure rather than the average of all available measures yields 6.6 percent, and measuring skills only before age forty gives a very similar estimate. Estimating by limited-information maximum likelihood (LIML), which is less sensitive to weak instruments, gives 6.9 percent. Wild cluster bootstrap p-values for the schooling coefficient are 0.012 in the baseline and 0.031 with cohort trends [18]. Using the Conley, Hansen and Rossi approach with the assumption that the direct effect of the instrument on wages lies between −0.01 and 0.01, the 95 percent bounds for the schooling return are 1.2 to 12.1 percent, which still exclude zero [17].",
        "We also examine whether the reform affected wages through channels other than schooling. We compare the wages of cohorts that were twelve just before and just after reform in municipalities that were not yet treated, which provides a placebo test; the estimated effect is 0.4 percent (standard error 1.9). A separate concern is peer and spillover effects of higher aggregate schooling [24]. Controlling for the municipality-level share of workers with middle-school completion leaves the schooling coefficient at 6.5 percent. Finally, the variance decomposition is stable: the cognitive share varies between 20 and 24 percent and the non-cognitive share between 16 and 20 percent across all the specifications in Table 6.",
      ],
      tables: [
        {
          id: "table-6",
          caption: "Table 6. Robustness of the IV return to schooling and the variance shares",
          columns: ["Specification", "Return to schooling", "First-stage F", "Cognitive share (%)", "Non-cognitive share (%)"],
          rows: [
            ["Baseline (Table 3, column 5)", "0.068*** (0.024)", "26.9", "22", "18"],
            ["Excluding metropolitan areas", "0.071** (0.028)", "21.5", "23", "17"],
            ["Region-specific cohort trends", "0.063** (0.031)", "15.2", "21", "19"],
            ["Cohorts born 1966–1986 only", "0.072*** (0.026)", "24.1", "22", "18"],
            ["First available skill measure", "0.066** (0.027)", "26.9", "24", "16"],
            ["LIML estimator", "0.069*** (0.025)", "26.9", "22", "18"],
            ["Controlling for municipal schooling share", "0.065** (0.028)", "23.0", "21", "19"],
            ["Skills measured before age 40", "0.067** (0.029)", "20.8", "20", "20"],
          ],
          note: "Note: Each row is a separate specification. Standard errors clustered by municipality at age twelve in parentheses. Variance shares use the Shapley decomposition described in Section 6.3. *** p<0.01, ** p<0.05, * p<0.10.",
        },
      ],
    },
    {
      id: "discussion",
      heading: "10. Discussion and Policy Implications",
      paragraphs: [
        "A return of 6.8 percent per year of schooling is close to the middle of the range of estimates for high-income countries and similar to estimates from compulsory-schooling studies elsewhere [1][6][7]. For Korea, it implies that the extension of compulsory middle school, which raised average schooling by about half a year for the affected cohorts, increased the lifetime wage of a complier by roughly 3.4 percent. The fact that IV and OLS estimates are close indicates that selection on unobserved ability, at least on the margin affected by the reform, is not as severe as often feared, and that conventional Mincer estimates, with skills as controls, are a reasonable guide to the causal return in this context.",
        "The decomposition has a more novel message. That non-cognitive skills explain 18 percent of the wage variance not explained by schooling, against 22 percent for cognitive skills, suggests that policies directed solely at academic achievement miss a large portion of the human-capital gradient. The high shares for women and managers imply that the benefit of non-cognitive development is unevenly distributed. If non-cognitive skills are formed early, as in the technology of skill formation [12][13], then early-childhood programmes, social-emotional learning in elementary school and the design of mentoring programmes may have sizeable long-run labour-market payoffs, in line with the experimental evidence on high-quality early-childhood programmes [14]. Such interventions may also help reduce the gender gap in pay by raising returns to women's interpersonal and organisational skills [22].",
        "Three caveats apply. First, IV estimates describe compliers, who are disproportionately from rural households, and may not generalise to marginal students in urban areas or to the tertiary margin, where much of the current policy discussion takes place. Second, our skill measures are taken in adulthood and are noisy, so that the variance shares are descriptive rather than causal; the non-cognitive share in particular may be inflated if labour-market experience feeds back into self-reported traits. Third, the decomposition says nothing about how costly it would be to raise skills; evidence from interventions with cost-benefit analysis is needed for that. These limitations suggest that the results should be taken as pointing to the potential value of early non-cognitive investments rather than as a ranking of policy options.",
      ],
    },
    {
      id: "conclusion",
      heading: "11. Conclusion",
      paragraphs: [
        "We have estimated the causal return to schooling in Korea using the staggered extension of compulsory middle-school education, while accounting for cognitive and non-cognitive skills in a rich longitudinal data set. The return is 6.8 percent per additional year, and is robust to a range of specifications and to plausible violations of the exclusion restriction. Of the wage variance that schooling does not explain, cognitive skills account for 22 percent and non-cognitive skills for 18 percent. The non-cognitive share is substantially higher for women and for managers.",
        "These findings highlight the complementarity of schooling and skills and point to the value of early-life interventions that foster non-cognitive development. Future research could use richer measures of skills collected at younger ages, link the survey data to employer records to separate sorting from within-firm pay, and examine the returns to non-cognitive skills over the career. We hope that the combination of causal and decomposition methods used here can be applied to other settings in which skills are measured in panel data.",
      ],
    },
    {
      id: "appendix",
      heading: "Appendix A. Data Construction",
      paragraphs: [
        "Reform timing. Municipalities are classified into four types using the administrative classification in force in 1985 and the date on which free compulsory middle school was extended to them, as recorded in the Ministry of Education yearbooks. Where municipal boundaries changed, workers are assigned to the type of the municipality in which they lived at age fourteen according to the KLIPS retrospective question. The instrument equals one if the reform date is not later than the year in which the worker turned twelve.",
        "Skill indices. The cognitive index combines six numeracy and literacy items and a ten-word recall task. The non-cognitive index combines ten Big Five items, four locus-of-control items and ten self-esteem items. Items are reverse-coded where necessary and standardised, and the first principal component of each group is used. The first component explains 41 percent of the variance of the cognitive items and 33 percent of the non-cognitive items. Scores from different waves are averaged after standardising within wave.",
        "Variance decomposition. The Shapley shares are computed over four groups of regressors: cognitive skills, non-cognitive skills, experience and demographics, and region and industry; the last two are reported together as other observables. Each share is the average over all 24 orderings of the increment to R² when the group is added. Bootstrap replications resample municipalities with replacement.",
      ],
    },
  ],
};
