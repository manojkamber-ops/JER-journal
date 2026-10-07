// Vol. 28, No. 1 (January 2023) — full text for an article defined in journal.ts (sample content).
import type { FulltextSpec } from "../paper-spec";

export const fulltext: FulltextSpec = {
  id: "2023-v28-i1-02",
  acknowledgments:
    "We thank seminar participants at Hanyang University and Hitotsubashi University, two anonymous referees and the handling editor for helpful comments, and Statistics Korea for access to the microdata of the Economically Active Population Survey.",
  dataAvailability:
    "Microdata of the Economically Active Population Survey and the Census are available from Statistics Korea's Microdata Integrated Service. Childcare enrolment statistics are published by the Ministry of Health and Welfare and the Ministry of Education. The cohort-level panel and replication code are available from the corresponding author.",
  editorialNote:
    "Sang-Yoon Han and Keiko Sato decompose the rise in Korean women's labour force participation over 1998–2022 into age, period and cohort effects and show that it is driven mainly by cohort effects, each ten-year birth cohort participating 5 to 7 percentage points more than the last; educational convergence explains about 60 percent of the cohort effect and declining fertility and expanding childcare most of the remainder.",
  refs: [
    /* 1 */ "Goldin, C. (2006). The quiet revolution that transformed women's employment, education, and family. American Economic Review, 96(2), 1–21.",
    /* 2 */ "Goldin, C. (1995). The U-shaped female labor force function in economic development and economic history. In T. P. Schultz (Ed.), Investment in women's human capital (pp. 61–90). Chicago: University of Chicago Press.",
    /* 3 */ "Fernández, R. (2013). Cultural change as learning: The evolution of female labor force participation over a century. American Economic Review, 103(1), 472–500.",
    /* 4 */ "Fernández, R., Fogli, A., & Olivetti, C. (2004). Mothers and sons: Preference formation and female labor force dynamics. Quarterly Journal of Economics, 119(4), 1249–1299.",
    /* 5 */ "Blau, F. D., & Kahn, L. M. (2013). Female labor supply: Why is the United States falling behind? American Economic Review, 103(3), 251–256.",
    /* 6 */ "Olivetti, C., & Petrongolo, B. (2016). The evolution of gender gaps in industrialized countries. Annual Review of Economics, 8, 405–434.",
    /* 7 */ "Deaton, A. S., & Paxson, C. H. (1994). Saving, growth, and aging in Taiwan. In D. A. Wise (Ed.), Studies in the economics of aging (pp. 331–362). Chicago: University of Chicago Press.",
    /* 8 */ "Hall, B. H., Mairesse, J., & Turner, L. (2007). Identifying age, cohort, and period effects in scientific research productivity: Discussion and illustration using simulated and actual data on French physicists. Economics of Innovation and New Technology, 16(2), 159–177.",
    /* 9 */ "Yang, Y., Fu, W. J., & Land, K. C. (2004). A methodological comparison of age-period-cohort models: The intrinsic estimator and conventional generalized linear models. Sociological Methodology, 34(1), 75–110.",
    /* 10 */ "Angrist, J. D., & Evans, W. N. (1998). Children and their parents' labor supply: Evidence from exogenous variation in family size. American Economic Review, 88(3), 450–477.",
    /* 11 */ "Goldin, C., & Katz, L. F. (2002). The power of the pill: Oral contraceptives and women's career and marriage decisions. Journal of Political Economy, 110(4), 730–770.",
    /* 12 */ "Kleven, H., Landais, C., & Søgaard, J. E. (2019). Children and gender inequality: Evidence from Denmark. American Economic Journal: Applied Economics, 11(4), 181–209.",
    /* 13 */ "Kleven, H., Landais, C., Posch, J., Steinhauer, A., & Zweimüller, J. (2019). Child penalties across countries: Evidence and explanations. AEA Papers and Proceedings, 109, 122–126.",
    /* 14 */ "Baker, M., Gruber, J., & Milligan, K. (2008). Universal child care, maternal labor supply, and family well-being. Journal of Political Economy, 116(4), 709–745.",
    /* 15 */ "Havnes, T., & Mogstad, M. (2011). Money for nothing? Universal child care and maternal employment. Journal of Public Economics, 95(11–12), 1455–1465.",
    /* 16 */ "Lefebvre, P., & Merrigan, P. (2008). Child-care policy and the labor supply of mothers with young children: A natural experiment from Canada. Journal of Labor Economics, 26(3), 519–548.",
    /* 17 */ "Heckman, J. J. (1974). Effects of child-care programs on women's work effort. Journal of Political Economy, 82(2, Part 2), S136–S163.",
    /* 18 */ "Mincer, J. (1962). Labor force participation of married women: A study of labor supply. In H. G. Lewis (Ed.), Aspects of labor economics (pp. 63–105). Princeton, NJ: Princeton University Press.",
    /* 19 */ "Juhn, C., & Potter, S. (2006). Changes in labor force participation in the United States. Journal of Economic Perspectives, 20(3), 27–46.",
    /* 20 */ "Oaxaca, R. (1973). Male-female wage differentials in urban labor markets. International Economic Review, 14(3), 693–709.",
    /* 21 */ "Blinder, A. S. (1973). Wage discrimination: Reduced form and structural estimates. Journal of Human Resources, 8(4), 436–455.",
    /* 22 */ "Fortin, N., Lemieux, T., & Firpo, S. (2011). Decomposition methods in economics. In O. Ashenfelter & D. Card (Eds.), Handbook of labor economics (Vol. 4A, pp. 1–102). Amsterdam: North-Holland.",
    /* 23 */ "Goldin, C., & Mitchell, J. (2017). The new life cycle of women's employment: Disappearing humps, sagging middles, expanding tops. Journal of Economic Perspectives, 31(1), 161–182.",
    /* 24 */ "Lee, J.-W., & Lee, H. (2016). Human capital in the long run. Journal of Development Economics, 122, 147–169.",
    /* 25 */ "OECD. (2019). Rejuvenating Korea: Policies for a changing society. Paris: OECD Publishing.",
    /* 26 */ "Bertrand, M., Kamenica, E., & Pan, J. (2015). Gender identity and relative income within households. Quarterly Journal of Economics, 130(2), 571–614.",
    /* 27 */ { jer: "2022-v27-i2-01" },
  ],
  body: [
    {
      id: "introduction",
      heading: "1. Introduction",
      paragraphs: [
        "The labour force participation of Korean women has long been low by the standards of high-income economies. In 1998, at the height of the Asian financial crisis, fewer than half of Korean women aged 15 to 64 were in the labour force, and the age profile of participation displayed a pronounced M-shape: participation peaked in the mid-twenties, fell sharply as women married and had children, and recovered only partially in their forties [25]. Since then participation has risen substantially, particularly among women in their late twenties and thirties, and the trough of the M-shape has become shallower. Understanding the sources of this change matters both for Korea, where a shrinking working-age population makes women's labour supply central to future growth, and for other economies in East Asia with similar patterns.",
        "Changes in aggregate participation can arise from three distinct sources. Age effects capture the life-cycle pattern of participation, driven by marriage, childbearing and retirement. Period effects capture conditions common to all women at a given time, such as the business cycle, labour-market institutions and policies that apply to everyone. Cohort effects capture persistent differences between women born at different times, arising from the education, norms and opportunities they experienced while growing up and entering adulthood [1][3]. Distinguishing among them is important for policy: if the rise in participation reflects cohort effects, it will continue as older cohorts are replaced by younger ones, regardless of current policy; if it reflects period effects, it may be reversed by changes in conditions.",
        "This paper analyses the determinants of female labour force participation in Korea using cohort-level panel data covering 1998–2022. We construct a pseudo-panel of birth cohorts from the microdata of the Economically Active Population Survey (EAPS), following each single-year birth cohort of women from 1940 to 1997 through the ages at which it is observed between 25 and 59. Because age, period and cohort are linearly dependent, their effects cannot be separately identified without a restriction; we adopt the normalisation of Deaton and Paxson {7}, which attributes trends to age and cohort effects and constrains period effects to capture cyclical fluctuations, and show that our conclusions are robust to alternative approaches [8][9].",
        "We find that the substantial increase in female participation since the late 1990s is primarily attributable to cohort effects. Each successive ten-year cohort of women participates at a rate 5 to 7 percentage points higher than the previous one at the same age, so that women born in the 1990s participate about 30 percentage points more than women born in the 1940s would have done at the same ages and under the same conditions. Period effects are modest and largely cyclical, with dips during the Asian financial crisis, the global financial crisis and the COVID-19 pandemic. The M-shaped age profile has become much shallower for younger cohorts.",
        "We then ask what explains the cohort effects. Cross-cohort convergence in educational attainment explains roughly 60 percent of the cohort effect: the share of women with tertiary education rose from 6 percent in the 1940s cohorts to 76 percent in the 1990s cohorts, overtaking that of men, and more educated women participate at much higher rates. Changes in fertility behaviour and childcare availability explain most of the remainder, about 18 and 13 percent respectively. The contribution of education has declined for the most recent cohorts as attainment has saturated, while that of childcare has risen following the expansion of public childcare from the mid-2000s and the introduction of universal free childcare in 2013.",
        "Our analysis contributes to the literature on the long-run evolution of female participation, which has emphasised the roles of education, technology, norms and family policy [1][2][6]. Most of this work focuses on the United States and Europe; we provide evidence for an East Asian economy in which participation has historically been low and family responsibilities have been unusually concentrated on women. We also contribute to the literature on child penalties and childcare policy [12][14][15] by quantifying how much of the cohort change in participation is attributable to declining fertility and expanding childcare, and by relating these changes to the very low fertility that has become a central policy concern in Korea [27]."
      ],
    },
    {
      id: "background",
      heading: "2. Institutional Background",
      paragraphs: [
        "Korea's rapid industrialisation from the 1960s brought large numbers of young unmarried women into manufacturing employment, but the norm that women should leave the labour force on marriage or the birth of their first child remained strong for decades. Firms often expected women to resign on marriage, and the seniority-based employment system of large firms offered few opportunities for women to return to comparable jobs after a career break. Women who re-entered the labour force in their forties typically did so in small firms, in self-employment or in non-regular jobs with low pay [25].",
        "Several developments changed this environment after the late 1990s. First, the educational attainment of women rose dramatically. The share of female high-school graduates entering higher education rose from about 30 percent in the early 1990s to more than 70 percent by the late 2000s, exceeding the rate for men from 2009 onwards. Second, fertility fell to exceptionally low levels: the total fertility rate fell from 1.45 in 1998 to 1.08 in 2005 and to 0.78 in 2022, the lowest in the world, while the average age of mothers at first birth rose from 26.9 to 33.0. Third, family policy was expanded. Paid parental leave was introduced in 2001, and its benefit raised substantially in 2011; public subsidies for childcare were expanded for low- and middle-income families from 2004; and in 2013 the government introduced universal free childcare for all children aged 0 to 5, regardless of parental income or employment status.",
        "Table 1 shows how participation has changed by age group. Between 1998 and 2022, participation of women aged 25 to 29 rose from 49.6 to 76.2 percent, and that of women aged 30 to 34 from 47.2 to 68.9 percent. Participation in the trough of the M-shape, at ages 35 to 39, rose more modestly, from 56.4 to 62.0 percent, while participation at ages 50 to 59 rose substantially. Overall participation of women aged 25 to 59 rose from 54.6 to 67.3 percent. These changes in the cross-section are the result of both changes within cohorts as they age and the replacement of older cohorts by younger ones, which we disentangle in what follows.",
      ],
      tables: [
        {
          id: "table-1",
          caption: "Table 1. Female labour force participation by age group, 1998–2022 (percent)",
          columns: ["Age group", "1998", "2004", "2010", "2016", "2022"],
          rows: [
            ["25–29", "49.6", "61.2", "69.8", "73.7", "76.2"],
            ["30–34", "47.2", "50.1", "54.6", "62.4", "68.9"],
            ["35–39", "56.4", "56.8", "55.2", "58.6", "62.0"],
            ["40–44", "62.3", "64.5", "64.9", "65.5", "64.8"],
            ["45–49", "62.9", "64.3", "66.4", "70.8", "69.4"],
            ["50–54", "55.1", "56.5", "61.3", "66.8", "68.7"],
            ["55–59", "48.7", "49.4", "54.7", "60.1", "63.5"],
            ["All ages 25–59", "54.6", "57.4", "60.2", "64.4", "67.3"],
          ],
          note: "Note: Labour force participation rates of women by five-year age group in the annual average of the monthly EAPS. Source: Statistics Korea, Economically Active Population Survey; authors' calculations.",
        },
      ],
    },
    {
      id: "literature",
      heading: "3. Related Literature",
      paragraphs: [
        "The classic economic analysis of female participation begins with Mincer {18}, who emphasised the roles of women's own wages, husbands' incomes and the allocation of time between market and household work, and Heckman {17}, who analysed the effect of childcare costs on women's work. Goldin {2} documented a U-shaped relationship between female participation and economic development, in which participation first falls as family incomes rise and work moves out of the household, and then rises as women's education increases and white-collar jobs become available. Korea's low participation at a high level of income has often been seen as an anomaly in this framework [25].",
        "Goldin {1} describes the evolution of female participation in the United States as a sequence of cohort-based changes culminating in a quiet revolution, in which women born from the late 1940s onwards anticipated long careers, invested in education and delayed marriage. Goldin and Katz {11} show that access to the contraceptive pill facilitated these changes, and Goldin and Mitchell {23} show how successive cohorts have flattened the hump of participation over the life cycle. Fernández, Fogli and Olivetti {4} and Fernández {3} emphasise the transmission of norms across generations and learning about the costs of women's work, which generate cohort-based dynamics. Bertrand, Kamenica and Pan {26} show that gender-identity norms continue to shape women's work. Juhn and Potter {19} and Blau and Kahn {5} discuss the stalling of the rise in US female participation after the 1990s, which they attribute partly to the lack of family-friendly policies.",
        "A large literature studies the effects of children and childcare on mothers' employment. Angrist and Evans {10} use the sex composition of children to estimate the effect of family size on participation, finding sizeable negative effects. Kleven, Landais and Søgaard {12} document large and persistent child penalties in women's earnings in Denmark, and Kleven et al. {13} show that the size of these penalties varies widely across countries. Evidence on childcare is mixed: Baker, Gruber and Milligan {14} and Lefebvre and Merrigan {16} find that Quebec's universal childcare substantially increased maternal employment, whereas Havnes and Mogstad {15} find small effects of Norwegian childcare expansion because it largely crowded out informal care.",
        "Methodologically, we build on the literature on age–period–cohort decomposition. Deaton and Paxson {7} propose a normalisation in which period effects are orthogonal to a time trend and sum to zero, which has been widely used to study life-cycle saving and labour supply. Hall, Mairesse and Turner {8} discuss the identification problem in detail, and Yang, Fu and Land {9} propose the intrinsic estimator, which we use as a robustness check. To decompose the cohort effects, we use regression-based methods related to the Oaxaca–Blinder decomposition [20][21][22].",
      ],
    },
    {
      id: "framework",
      heading: "4. Conceptual Framework and Hypotheses",
      paragraphs: [
        "Consider a woman of cohort c at age a in year t who participates if her potential market wage exceeds her reservation wage. The market wage depends on her education and experience, and on labour-market conditions in year t. The reservation wage depends on household income, the number and ages of her children, the cost and availability of childcare, and social norms about women's work. Many of these determinants are fixed or evolve slowly within cohorts: education is largely completed by age 25, fertility is concentrated within a relatively narrow age range, and norms are formed while growing up. Changes in these determinants across cohorts therefore appear as cohort effects in participation, while life-cycle patterns appear as age effects and economy-wide conditions as period effects.",
        "This framework yields three hypotheses. H1: the rise in female participation since the late 1990s is driven primarily by cohort effects rather than by period effects, because the main determinants of participation — education, fertility and norms — changed across cohorts rather than over time for all women. H2: the cohort effects are explained largely by rising educational attainment, which raises potential wages and the opportunity cost of time out of the labour force, and by the convergence of women's education with that of men [1][24]. H3: declining fertility and expanding childcare availability explain an additional part of the cohort effect, by reducing the time costs of child-rearing during the ages at which participation would otherwise dip [12][14].",
        "Childcare availability poses a conceptual difficulty, because it changed over time for all women of child-rearing age. It nevertheless affects cohorts differently, because each cohort experienced a different level of childcare availability during its child-rearing years. We therefore measure childcare availability for each cohort as the average enrolment rate of children aged 0 to 5 in formal childcare in the years in which the cohort was aged 30 to 39, which captures the conditions under which the cohort made decisions about combining work with child-rearing.",
      ],
    },
    {
      id: "data",
      heading: "5. Data",
      paragraphs: [],
      subsections: [
        {
          id: "data-eaps",
          heading: "5.1 The Cohort Panel",
          paragraphs: [
            "Our main source is the EAPS, the monthly labour-force survey of Statistics Korea, which covers about 35,000 households and records each respondent's year of birth, sex, education, marital status and labour-market activity. We use the microdata for every month from January 1998 to December 2022 and restrict the sample to women aged 25 to 59, which avoids the confounding of participation with full-time education at younger ages and with retirement at older ages. This yields about 9.8 million person-month observations.",
            "We aggregate the microdata into cells defined by single year of birth and survey year, using survey weights. Women born between 1940 and 1997 are observed at some point between the ages of 25 and 59 during the sample period. Each year includes 35 cohorts, so the panel contains 875 cohort-year cells, with an average of about 11,200 observations per cell. For each cell, we compute the participation rate, the shares of women with tertiary education, high-school education and less, the share married, and the average number of children in the household. For presentation, we group single-year cohorts into ten-year cohorts (the 1940s through the 1990s, the latter comprising women born between 1990 and 1997).",
          ],
        },
        {
          id: "data-cohort",
          heading: "5.2 Cohort Characteristics",
          paragraphs: [
            "We supplement the EAPS with cohort-level measures of fertility and childcare. Completed fertility and births by age 35 for each cohort are constructed from Census microdata for 2000, 2005, 2010, 2015 and 2020, which record the number of children ever born to each woman. For cohorts that have not completed their fertility, we use births by age 30 from the most recent Census as a comparable measure. Childcare enrolment rates of children aged 0 to 5 by year are from administrative statistics of the Ministry of Health and Welfare and the Ministry of Education, and are assigned to cohorts as described in Section 4.",
            "Table 2 shows the characteristics of each ten-year cohort. The changes are dramatic. The share of women with tertiary education rose from 6 percent in the 1940s cohorts to 76 percent in the 1990s cohorts, while the share of men with tertiary education rose from 17 to 70 percent, so that the gender gap in education reversed. Births by age 35 fell from 2.6 to an estimated 0.7, and the average age at first marriage rose from 23.1 to over 30. The childcare enrolment rate faced by each cohort during its child-rearing years rose from 4 percent for the 1940s cohorts to about 62 percent for the 1980s cohorts and an estimated 64 percent for the 1990s cohorts.",
          ],
          tables: [
            {
              id: "table-2",
              caption: "Table 2. Characteristics of ten-year birth cohorts of Korean women",
              columns: ["Cohort", "Tertiary education, women (%)", "Tertiary education, men (%)", "Births by age 35", "Age at first marriage", "Childcare enrolment at ages 30–39 (%)"],
              rows: [
                ["1940s", "6", "17", "2.61", "23.1", "4"],
                ["1950s", "12", "27", "2.18", "24.4", "8"],
                ["1960s", "25", "38", "1.84", "25.6", "22"],
                ["1970s", "52", "56", "1.49", "27.8", "45"],
                ["1980s", "72", "68", "1.06", "29.6", "62"],
                ["1990s", "76", "70", "0.71", "30.8", "64"],
              ],
              note: "Note: Education shares are measured at ages 30 to 39 or the oldest age observed. Births by age 35 are from Census microdata; for the 1980s and 1990s cohorts they are projected from births by age 30. Childcare enrolment is the average share of children aged 0 to 5 enrolled in formal childcare in the years in which the cohort was aged 30 to 39 (projected for the 1990s cohorts). Source: EAPS; Census; Ministry of Health and Welfare; authors' calculations.",
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
          id: "strategy-apc",
          heading: "6.1 Age–Period–Cohort Decomposition",
          paragraphs: [
            "We model the participation rate of cohort c at age a in year t as p_cat = α_a + γ_c + δ_t + ε_cat, where α_a, γ_c and δ_t are full sets of age, cohort and year effects. Because a = t − c, the three sets of effects are perfectly collinear, and only their second differences are identified without further restrictions [8]. Any linear trend can be reallocated among them. Following Deaton and Paxson {7}, we impose that the year effects sum to zero and are orthogonal to a linear time trend, so that they capture cyclical fluctuations around trend, while long-run trends are attributed to age and cohort effects. This normalisation is natural in our context, because there is no reason to expect a secular trend in conditions common to all women that is independent of cohort replacement.",
            "We estimate the model by weighted least squares, with cells weighted by the number of observations, and report standard errors clustered by cohort. We present cohort effects both for single-year cohorts and averaged over ten-year cohorts. The difference between the average cohort effects of successive ten-year cohorts is our measure of the cohort contribution to the change in participation.",
          ],
        },
        {
          id: "strategy-alternatives",
          heading: "6.2 Alternative Identifying Assumptions",
          paragraphs: [
            "Because the conclusion that cohort effects dominate could in principle be an artefact of the normalisation, we report results under three alternatives. First, we use the intrinsic estimator of Yang, Fu and Land {9}, which selects the solution orthogonal to the null space of the design matrix. Second, we replace year effects with the prime-age male unemployment rate and the growth rate of real GDP, so that period effects are restricted to vary with observable macroeconomic conditions. Third, we estimate the model at the individual level with a probit specification and individual covariates. Under all three alternatives, the cohort effects are similar in magnitude.",
          ],
        },
        {
          id: "strategy-decomposition",
          heading: "6.3 Explaining the Cohort Effects",
          paragraphs: [
            "To explain the cohort effects, we augment the model with cohort-level characteristics: p_cat = α_a + δ_t + Z_c′θ + η_c + ε_cat, where Z_c includes the share of women with tertiary education, births by age 35, childcare enrolment at ages 30 to 39 and the share of the cohort ever married by age 35, and η_c is a residual cohort effect. Because the characteristics vary across 58 single-year cohorts, θ is identified from cross-cohort variation, conditional on the age profile and period effects. We also interact characteristics with age groups, to allow, for example, childcare to matter most at ages 30 to 39. The contribution of each characteristic to the difference in cohort effects between two cohorts is θ times the difference in the characteristic, in the spirit of the Oaxaca–Blinder decomposition [20][21]; the residual captures unexplained factors such as norms. Because the order of entry matters when variables are correlated, we also report Shapley decompositions, following Fortin, Lemieux and Firpo {22}.",
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
          id: "results-cohort",
          heading: "7.1 Cohort Effects",
          paragraphs: [
            "Table 3 reports the estimated cohort effects. Under our baseline normalisation in column (1), each ten-year cohort participates at a rate between 5.2 and 6.8 percentage points higher than the previous one at the same age and under the same period conditions. The 1950s cohort participates 5.2 points more than the 1940s cohort, the 1960s cohort 6.1 points more than the 1950s, the 1970s cohort 6.8 points more than the 1960s, the 1980s cohort 6.4 points more than the 1970s and the 1990s cohort 5.6 points more than the 1980s. The cumulative difference between the 1990s and 1940s cohorts is 30.1 percentage points. All differences are statistically significant at the 1 percent level.",
            "Figure 1 shows the cohort effects for five-year groups of birth cohorts. The cohort effects rise steadily from the 1940s to the late 1990s, with the steepest increases for women born between the mid-1960s and the early 1980s — the cohorts that experienced the largest increases in higher education and entered the labour market after the democratisation of the late 1980s. The results are similar under the alternative identifying assumptions in columns (2)–(4) of Table 3, with cohort differences ranging from 4.8 to 7.3 percentage points, so that our conclusion does not depend on the choice of normalisation.",
          ],
          tables: [
            {
              id: "table-3",
              caption: "Table 3. Differences in cohort effects between successive ten-year cohorts (percentage points)",
              columns: ["Cohort difference", "(1) Deaton–Paxson", "(2) Intrinsic estimator", "(3) Macro proxies for period", "(4) Individual probit"],
              rows: [
                ["1950s − 1940s", "5.2*** (1.1)", "4.8*** (1.2)", "5.5*** (1.2)", "5.0*** (1.0)"],
                ["1960s − 1950s", "6.1*** (0.9)", "5.7*** (1.0)", "6.4*** (1.0)", "5.9*** (0.9)"],
                ["1970s − 1960s", "6.8*** (0.8)", "6.6*** (0.9)", "7.3*** (0.9)", "6.7*** (0.8)"],
                ["1980s − 1970s", "6.4*** (0.9)", "6.2*** (1.0)", "6.9*** (1.0)", "6.3*** (0.9)"],
                ["1990s − 1980s", "5.6*** (1.3)", "5.1*** (1.4)", "5.9*** (1.4)", "5.4*** (1.2)"],
                ["Cumulative, 1990s − 1940s", "30.1", "28.4", "32.0", "29.3"],
                ["Observations", "875 cells", "875 cells", "875 cells", "9.8 million"],
              ],
              note: "Note: Differences between the average cohort effects of successive ten-year birth cohorts from age–period–cohort models of female labour force participation at ages 25 to 59, 1998–2022. Column (1) imposes that year effects sum to zero and are orthogonal to a linear trend; column (2) uses the intrinsic estimator; column (3) replaces year effects with the prime-age male unemployment rate and real GDP growth; column (4) is a probit on individual data with marginal effects reported. Standard errors clustered by single-year cohort in parentheses. *** p < 0.01, ** p < 0.05, * p < 0.10.",
            },
          ],
          figures: [
            {
              id: "figure-1",
              caption: "Figure 1. Estimated cohort effects on female labour force participation by five-year birth cohort",
              kind: "line",
              xLabels: ["1940–44", "1945–49", "1950–54", "1955–59", "1960–64", "1965–69", "1970–74", "1975–79", "1980–84", "1985–89", "1990–94", "1995–97"],
              yLabel: "Cohort effect relative to 1940–44 (pp)",
              series: [
                {
                  name: "Cohort effect",
                  values: [0.0, 2.4, 5.0, 7.8, 10.6, 14.2, 17.6, 21.3, 24.2, 27.4, 29.9, 32.6],
                  lower: [0.0, 0.6, 3.0, 5.8, 8.7, 12.3, 15.7, 19.3, 22.1, 25.1, 27.2, 29.1],
                  upper: [0.0, 4.2, 7.0, 9.8, 12.5, 16.1, 19.5, 23.3, 26.3, 29.7, 32.6, 36.1],
                },
              ],
              note: "Note: Average cohort effects for five-year groups of birth cohorts from the baseline age–period–cohort model (Table 3, column 1), relative to women born in 1940–1944, with 95 percent confidence intervals. The 1995–97 group is observed only at ages 25 to 27.",
            },
          ],
        },
        {
          id: "results-age-period",
          heading: "7.2 Age and Period Effects",
          paragraphs: [
            "The estimated age effects reproduce the familiar M-shape, but their interpretation differs from that of the cross-sectional age profiles in Table 1. Holding cohort constant, participation falls by 14.6 percentage points between ages 25–29 and 30–34, and recovers by 18.2 points between ages 30–34 and 45–49. To examine whether the M-shape has become shallower across cohorts, we estimate the model allowing the age profile to differ between cohorts born before and after 1970. For the later cohorts, the decline between 25–29 and 30–34 is 8.9 points, much smaller than the 17.8 points for the earlier cohorts, consistent with the flattening of the life-cycle hump documented for the United States by Goldin and Mitchell {23}.",
            "The period effects are small relative to the cohort effects and are clearly cyclical. Participation was 2.3 percentage points below trend in 1998, during the Asian financial crisis, 1.1 points below trend in 2009 and 1.6 points below trend in 2020, at the onset of the COVID-19 pandemic. Because the Deaton–Paxson normalisation removes any trend from period effects, these estimates do not measure the effect of policies that applied to all women in a given year; however, the cohort effects are virtually unchanged under the alternative in column (3) of Table 3, which allows period effects to follow macroeconomic conditions including any trend in them.",
          ],
        },
        {
          id: "results-decomposition",
          heading: "7.3 Decomposing the Cohort Effects",
          paragraphs: [
            "Table 4 reports the estimates of the augmented model and the resulting decomposition. A 10 percentage point increase in the share of women with tertiary education raises cohort participation by 2.6 points; one fewer birth by age 35 raises it by 2.9 points; and a 10 point increase in childcare enrolment at ages 30 to 39 raises it by 0.7 points overall and by 1.6 points at ages 30 to 39. Conditional on these variables, the share ever married has no significant additional effect, which suggests that the negative association between marriage and participation in Korea operates mainly through childbearing.",
            "Combining these coefficients with the changes in characteristics in Table 2, cross-cohort convergence in educational attainment explains 18.0 of the 30.1 percentage point cumulative cohort effect between the 1940s and 1990s cohorts, or about 60 percent. Declining fertility explains 5.5 points (18 percent) and expanding childcare 4.0 points (13 percent), so that fertility and childcare together explain about 32 percent, or most of the remaining 40 percent. The unexplained residual, 2.6 points or 9 percent, may reflect changing norms and labour-market institutions not captured by our variables. The Shapley decomposition gives very similar shares: 58 percent for education, 19 percent for fertility and 14 percent for childcare.",
            "Figure 2 shows how the contributions changed across cohorts. Education accounted for most of the cohort effect for the transitions from the 1950s to the 1970s cohorts, when female tertiary enrolment expanded rapidly, but its contribution fell for the most recent cohorts, as attainment approached saturation. Childcare, by contrast, contributed little for the earlier cohorts but accounted for 1.3 and 1.7 percentage points of the cohort effects of the 1980s and 1990s cohorts, reflecting the expansion of public childcare and the introduction of universal free childcare in 2013. The contribution of declining fertility was relatively stable, at 0.9 to 1.4 points per cohort transition.",
          ],
          tables: [
            {
              id: "table-4",
              caption: "Table 4. Determinants of cohort effects and decomposition of the cumulative cohort effect, 1940s to 1990s cohorts",
              columns: ["Determinant", "Coefficient", "Standard error", "Change, 1940s to 1990s", "Contribution (pp)", "Share of cohort effect (%)"],
              rows: [
                ["Tertiary education share (per 10 pp)", "2.57***", "(0.41)", "70 pp", "18.0", "59.8"],
                ["Births by age 35 (per birth)", "−2.90***", "(0.74)", "−1.90", "5.5", "18.3"],
                ["Childcare enrolment at 30–39 (per 10 pp)", "0.67***", "(0.19)", "60 pp", "4.0", "13.3"],
                ["Ever married by 35 (per 10 pp)", "−0.21", "(0.33)", "−18 pp", "—", "—"],
                ["Residual cohort effect", "", "", "", "2.6", "8.6"],
                ["Total cohort effect", "", "", "", "30.1", "100.0"],
              ],
              note: "Note: Coefficients from the augmented age–period–cohort model with age and year effects (Deaton–Paxson normalisation) and cohort-level characteristics, estimated on 875 cohort-year cells weighted by cell size. Contributions are coefficients multiplied by the change in each characteristic between the 1940s and 1990s cohorts; the contribution of marriage is not significantly different from zero and is included in the residual. A one-birth decline raises participation by 2.90 points, so the decline of 1.90 births contributes 5.5 points. Standard errors clustered by single-year cohort. *** p < 0.01, ** p < 0.05, * p < 0.10.",
            },
          ],
          figures: [
            {
              id: "figure-2",
              caption: "Figure 2. Contributions to the difference in cohort effects between successive ten-year cohorts",
              kind: "bar",
              xLabels: ["1950s − 1940s", "1960s − 1950s", "1970s − 1960s", "1980s − 1970s", "1990s − 1980s"],
              yLabel: "Percentage points",
              series: [
                { name: "Education", values: [3.0, 4.1, 4.9, 3.7, 2.3] },
                { name: "Fertility", values: [1.4, 1.2, 0.9, 1.0, 1.0] },
                { name: "Childcare", values: [0.1, 0.3, 0.6, 1.3, 1.7] },
                { name: "Residual", values: [0.7, 0.5, 0.4, 0.4, 0.6] },
              ],
              note: "Note: Contributions of each determinant to the difference in average cohort effects between successive ten-year cohorts, computed from the coefficients in Table 4. The contributions sum to the cohort differences in Table 3, column (1).",
            },
          ],
        },
      ],
    },
    {
      id: "mechanisms",
      heading: "8. Mechanisms and Heterogeneity",
      paragraphs: [
        "Education may raise participation through several channels: by raising potential wages, by giving access to white-collar jobs with better working conditions, and by shaping attitudes towards women's work. To shed light on these channels, Table 5 reports cohort differences separately for women with and without tertiary education. Within education groups, cohort effects are much smaller — 2.1 to 2.8 percentage points per cohort for tertiary-educated women and 1.8 to 2.6 points for women without tertiary education — confirming that much of the aggregate cohort effect reflects composition: younger cohorts contain far more highly educated women, who participate at higher rates. The remaining within-group cohort effects are partly explained by fertility and childcare, and by the rising returns to education for women.",
        "Table 5 also shows that cohort effects are largest at ages 30 to 39, the trough of the M-shape, at 7.9 points per cohort, compared with 4.6 points at ages 25 to 29 and 4.4 points at ages 40 to 59. This is consistent with the important role of fertility and childcare, which matter most at these ages. Among married women, cohort effects are similar to the aggregate, at 6.2 points per cohort, while among never-married women, whose participation was already high, they are smaller, at 2.4 points. Cohort effects are also somewhat larger in the Seoul metropolitan area than elsewhere, which may reflect the concentration of white-collar jobs requiring tertiary education.",
        "Despite these changes, a substantial gap remains between women's participation and that of men, and between Korea and other high-income economies. At ages 30 to 39, participation of women in the 1980s cohorts is still about 25 percentage points below that of men, and the child penalty remains large by international standards [13]. The persistence of the gap despite the reversal of the gender gap in education suggests that labour-market institutions — such as long working hours, seniority-based pay and limited flexibility — and norms about the division of household work continue to constrain women's participation [25][26]. The small residual in our decomposition does not mean that norms are unimportant; rather, the changes in norms across cohorts may themselves be correlated with changes in education and fertility, so that part of their effect is attributed to these variables [3][4].",
      ],
      tables: [
        {
          id: "table-5",
          caption: "Table 5. Heterogeneity in cohort effects (average difference between successive ten-year cohorts, percentage points)",
          columns: ["Subgroup", "Average cohort difference", "Standard error", "Range across cohort pairs", "Share of observations (%)"],
          rows: [
            ["All women (baseline)", "6.0***", "(0.5)", "5.2–6.8", "100"],
            ["Tertiary education", "2.4***", "(0.6)", "2.1–2.8", "41"],
            ["No tertiary education", "2.2***", "(0.5)", "1.8–2.6", "59"],
            ["Ages 25–29", "4.6***", "(0.8)", "3.9–5.4", "15"],
            ["Ages 30–39", "7.9***", "(0.7)", "6.8–9.1", "30"],
            ["Ages 40–59", "4.4***", "(0.6)", "3.7–5.0", "55"],
            ["Married", "6.2***", "(0.6)", "5.5–7.0", "71"],
            ["Never married", "2.4***", "(0.7)", "1.6–3.1", "18"],
            ["Seoul metropolitan area", "6.5***", "(0.6)", "5.7–7.3", "49"],
            ["Other regions", "5.5***", "(0.6)", "4.8–6.2", "51"],
          ],
          note: "Note: Average of the differences in cohort effects between successive ten-year cohorts from age–period–cohort models estimated separately for each subgroup with the Deaton–Paxson normalisation. Shares of observations may not sum to 100 because widowed and divorced women are not shown separately. Standard errors clustered by single-year cohort. *** p < 0.01, ** p < 0.05, * p < 0.10.",
        },
      ],
    },
    {
      id: "robustness",
      heading: "9. Robustness",
      paragraphs: [
        "Table 6 reports a range of robustness checks for the average cohort difference and the share explained by education. Restricting the sample to ages 30 to 54, which excludes the ages at which education and retirement might confound participation, yields an average cohort difference of 6.3 points and an education share of 61 percent. Using five-year rather than single-year cohorts as the unit of observation, excluding the crisis years 1998 and 2020, and using the EAPS definition of participation that excludes discouraged workers all leave the results essentially unchanged. Measuring education by years of schooling rather than the tertiary share gives an education share of 57 percent.",
        "Because childcare enrolment varies largely over time, its contribution could capture period effects rather than cohort-specific conditions. When we measure childcare availability by the number of childcare places per child at the regional level, exploiting regional variation in the expansion of childcare, the childcare share is 11 percent, slightly smaller than the baseline. Using completed fertility rather than births by age 35 raises the fertility share to 20 percent. Finally, adding men's tertiary education share as a control reduces the education coefficient only slightly, suggesting that it is women's own education, rather than the general expansion of education, that drives the effect.",
      ],
      tables: [
        {
          id: "table-6",
          caption: "Table 6. Robustness checks",
          columns: ["Specification", "Average cohort difference (pp)", "Share explained by education (%)", "Share explained by fertility and childcare (%)"],
          rows: [
            ["Baseline", "6.0", "60", "32"],
            ["Ages 30–54 only", "6.3", "61", "31"],
            ["Five-year cohorts as unit", "5.9", "59", "32"],
            ["Excluding 1998 and 2020", "6.0", "60", "31"],
            ["Participation excluding discouraged workers", "5.8", "60", "32"],
            ["Education measured by years of schooling", "6.0", "57", "33"],
            ["Childcare places per child, regional variation", "6.0", "61", "29"],
            ["Completed fertility instead of births by 35", "6.0", "59", "33"],
            ["Controlling for men's tertiary share", "6.0", "56", "32"],
            ["Intrinsic estimator", "5.7", "62", "30"],
          ],
          note: "Note: Each row reports the average difference in cohort effects between successive ten-year cohorts and the shares of the cumulative cohort effect explained by education and by fertility and childcare combined, under the indicated specification. The baseline share for fertility and childcare (32 percent) is the sum of the fertility (18.3) and childcare (13.3) shares in Table 4, rounded.",
        },
      ],
    },
    {
      id: "discussion",
      heading: "10. Discussion and Policy Implications",
      paragraphs: [
        "Our findings have several implications for policy. First, because the rise in female participation is driven mainly by cohort effects, it is likely to continue for some time as older cohorts with low participation leave the working-age population and are replaced by younger cohorts. A simple projection holding age, period and cohort effects constant suggests that participation of women aged 25 to 59 will rise by a further 4 to 5 percentage points by 2035 through cohort replacement alone. This, however, is less than the increases of the past two decades, because the most recent cohort differences are smaller and the education contribution has fallen as attainment has saturated.",
        "Second, future increases in participation will depend increasingly on factors other than education. The contribution of childcare has grown for the most recent cohorts, suggesting that family policy has become an important margin. Yet the evidence from other countries suggests that the effects of further childcare expansion may be limited when coverage is already high, as it now is in Korea [15]. Policies that address the other constraints on women's participation, such as long working hours, inflexible career structures and the unequal division of household work, may therefore be more important in the future [25].",
        "Third, our results highlight the close link between female participation and fertility. Declining fertility has contributed to rising participation, and the difficulties of combining work and child-rearing are likely to have contributed to declining fertility. Policies that make it easier to combine work and family, by reducing the child penalty in women's careers, may therefore support both participation and fertility. Earlier work in this journal shows that housing affordability is an additional constraint on fertility among young Korean households [27], which suggests that family policy needs to consider housing as well as childcare and workplace conditions.",
        "Our analysis has limitations. The age–period–cohort decomposition relies on an identifying assumption, and although our results are robust to several alternatives, no assumption is innocuous. The decomposition of cohort effects is descriptive: education, fertility and childcare are themselves outcomes of choices that are jointly determined with participation, and our estimates should not be interpreted as the causal effects of policies that change these variables. Causal estimates of the effects of specific policies, such as the 2013 universal childcare reform, would complement our analysis.",
      ],
    },
    {
      id: "conclusion",
      heading: "11. Conclusion",
      paragraphs: [
        "This paper has analysed the determinants of female labour force participation in Korea using cohort-level panel data covering 1998–2022. Decomposing changes in participation into cohort, age and time effects, we find that the substantial increase in female participation since the late 1990s is primarily attributable to cohort effects: each successive ten-year cohort of women participates at a rate 5 to 7 percentage points higher than the previous one. Period effects are small and largely cyclical.",
        "Cross-cohort convergence in educational attainment explains roughly 60 percent of the cohort effect, while changes in fertility behaviour and childcare availability explain most of the remainder. As the contribution of education declines with the saturation of attainment, further increases in women's participation in Korea will depend on the policies and institutions that determine whether women can combine careers with family life.",
      ],
    },
    {
      id: "appendix",
      heading: "Appendix A. Identification and the Deaton–Paxson Normalisation",
      paragraphs: [
        "Let A, C and T denote the matrices of age, cohort and year dummies. Because age equals year minus year of birth, there is an exact linear relationship among the three sets of effects, and for any constant k the transformation α_a + k·a, γ_c + k·c, δ_t − k·t leaves fitted values unchanged. The Deaton–Paxson normalisation resolves this indeterminacy by requiring Σ_t δ_t = 0 and Σ_t t·δ_t = 0. In our data this choice implies that the overall upward trend in participation is attributed to cohort and age effects. Under the alternative of attributing all trend to period effects, the period effects would rise by about 0.5 percentage points per year and cohort differences would be correspondingly smaller; but this alternative implies a strongly declining age profile at ages 30 to 55 that is inconsistent with the within-cohort participation profiles observed in the raw data.",
        "The intrinsic estimator yields a solution that is close to the Deaton–Paxson solution, with cohort differences between 4.8 and 6.6 percentage points (Table 3, column 2). Restricting period effects to depend on macroeconomic variables yields slightly larger cohort differences, between 5.5 and 7.3 points, because the macroeconomic variables explain little of the trend. Across all specifications, cohort effects account for between 82 and 94 percent of the change in average participation of women aged 25 to 59 between 1998 and 2022, with the remainder due to period effects and changes in the age composition of the population.",
      ],
    },
  ],
};
