// Vol. 29, No. 2 (April 2024) — full text for an existing article (sample content).
import type { FulltextSpec } from "../paper-spec";

export const fulltext: FulltextSpec = {
  id: "2024-v29-i2-04",
  editorialNote:
    "Evelyn Stewart and Sang-Yoon Han assemble a harmonised series of Korean life satisfaction for 1980–2022 and find that a doubling of real GDP per capita is associated with a rise of about 0.30 points on a 0–10 scale over time (a coefficient of 0.43 on log income), contradicting the strong form of the Easterlin paradox, whereas within birth cohorts and survey years the income gradient is a statistically insignificant 0.06. Reference-group and aspiration effects reconcile the two results, and the time-series relationship weakens as Korean growth slows.",
  acknowledgments:
    "We thank seminar participants at Stockholm University, Hanyang University and the Korea Labor Institute, two anonymous referees and the handling editor for helpful comments. We are grateful to the Korea Social Science Data Archive for help in locating and documenting the early survey files. All errors are our own.",
  dataAvailability:
    "KLIPS microdata are available from the Korea Labor Institute; KGSS and the early omnibus surveys are distributed by the Korea Social Science Data Archive; World Values Survey data are publicly available from the WVS Association; Gallup World Poll microdata are available under licence from Gallup. National accounts, price and labour-market series are published by the Bank of Korea and Statistics Korea. Replication code and the harmonised annual series are available from the corresponding author.",
  refs: [
    /* 1 */ "Easterlin, R. A. (1974). Does economic growth improve the human lot? Some empirical evidence. In P. A. David & M. W. Reder (Eds.), Nations and households in economic growth: Essays in honor of Moses Abramovitz (pp. 89–125). New York: Academic Press.",
    /* 2 */ "Easterlin, R. A. (1995). Will raising the incomes of all increase the happiness of all? Journal of Economic Behavior & Organization, 27(1), 35–47.",
    /* 3 */ "Easterlin, R. A., McVey, L. A., Switek, M., Sawangfa, O., & Zweig, J. S. (2010). The happiness–income paradox revisited. Proceedings of the National Academy of Sciences, 107(52), 22463–22468.",
    /* 4 */ "Stevenson, B., & Wolfers, J. (2008). Economic growth and subjective well-being: Reassessing the Easterlin paradox. Brookings Papers on Economic Activity, 2008(1), 1–87.",
    /* 5 */ "Deaton, A. (2008). Income, health, and well-being around the world: Evidence from the Gallup World Poll. Journal of Economic Perspectives, 22(2), 53–72.",
    /* 6 */ "Sacks, D. W., Stevenson, B., & Wolfers, J. (2012). The new stylized facts about income and subjective well-being. Emotion, 12(6), 1181–1187.",
    /* 7 */ "Clark, A. E., Frijters, P., & Shields, M. A. (2008). Relative income, happiness, and utility: An explanation for the Easterlin paradox and other puzzles. Journal of Economic Literature, 46(1), 95–144.",
    /* 8 */ "Luttmer, E. F. P. (2005). Neighbors as negatives: Relative earnings and well-being. Quarterly Journal of Economics, 120(3), 963–1002.",
    /* 9 */ "Clark, A. E., & Oswald, A. J. (1996). Satisfaction and comparison income. Journal of Public Economics, 61(3), 359–381.",
    /* 10 */ "Di Tella, R., MacCulloch, R. J., & Oswald, A. J. (2003). The macroeconomics of happiness. Review of Economics and Statistics, 85(4), 809–827.",
    /* 11 */ "Di Tella, R., MacCulloch, R. J., & Oswald, A. J. (2001). Preferences over inflation and unemployment: Evidence from surveys of happiness. American Economic Review, 91(1), 335–341.",
    /* 12 */ "Kahneman, D., & Deaton, A. (2010). High income improves evaluation of life but not emotional well-being. Proceedings of the National Academy of Sciences, 107(38), 16489–16493.",
    /* 13 */ "Frey, B. S., & Stutzer, A. (2002). What can economists learn from happiness research? Journal of Economic Literature, 40(2), 402–435.",
    /* 14 */ "Ferrer-i-Carbonell, A. (2005). Income and well-being: An empirical analysis of the comparison income effect. Journal of Public Economics, 89(5–6), 997–1019.",
    /* 15 */ "Ferrer-i-Carbonell, A., & Frijters, P. (2004). How important is methodology for the estimates of the determinants of happiness? Economic Journal, 114(497), 641–659.",
    /* 16 */ "Blanchflower, D. G., & Oswald, A. J. (2004). Well-being over time in Britain and the USA. Journal of Public Economics, 88(7–8), 1359–1386.",
    /* 17 */ "Blanchflower, D. G., & Oswald, A. J. (2008). Is well-being U-shaped over the life cycle? Social Science & Medicine, 66(8), 1733–1749.",
    /* 18 */ "Hagerty, M. R., & Veenhoven, R. (2003). Wealth and happiness revisited: Growing national income does go with greater happiness. Social Indicators Research, 64(1), 1–27.",
    /* 19 */ "Layard, R. (2005). Happiness: Lessons from a new science. London: Penguin.",
    /* 20 */ "Stiglitz, J. E., Sen, A., & Fitoussi, J.-P. (2009). Report by the Commission on the Measurement of Economic Performance and Social Progress. Paris: Commission on the Measurement of Economic Performance and Social Progress.",
    /* 21 */ "Brockmann, H., Delhey, J., Welzel, C., & Yuan, H. (2009). The China puzzle: Falling happiness in a rising economy. Journal of Happiness Studies, 10(4), 387–405.",
    /* 22 */ "Easterlin, R. A., Morgan, R., Switek, M., & Wang, F. (2012). China's life satisfaction, 1990–2010. Proceedings of the National Academy of Sciences, 109(25), 9775–9780.",
    /* 23 */ "Kahneman, D., & Krueger, A. B. (2006). Developments in the measurement of subjective well-being. Journal of Economic Perspectives, 20(1), 3–24.",
    /* 24 */ "Diener, E., Suh, E. M., Lucas, R. E., & Smith, H. L. (1999). Subjective well-being: Three decades of progress. Psychological Bulletin, 125(2), 276–302.",
    /* 25 */ "Oswald, A. J. (1997). Happiness and economic performance. Economic Journal, 107(445), 1815–1831.",
    /* 26 */ "Frijters, P., Haisken-DeNew, J. P., & Shields, M. A. (2004). Money does matter! Evidence from increasing real income and life satisfaction in East Germany following reunification. American Economic Review, 94(3), 730–740.",
    /* 27 */ "Bond, T. N., & Lang, K. (2019). The sad truth about happiness scales. Journal of Political Economy, 127(4), 1629–1640.",
    /* 28 */ "Newey, W. K., & West, K. D. (1987). A simple, positive semi-definite, heteroskedasticity and autocorrelation consistent covariance matrix. Econometrica, 55(3), 703–708.",
    /* 29 */ { jer: "2023-v28-i3-02" },
    /* 30 */ { jer: "2023-v28-i1-02" },
  ],
  body: [
    {
      id: "introduction",
      heading: "1. Introduction",
      paragraphs: [
        "Half a century after Easterlin {1} observed that average happiness in the United States had not risen despite decades of economic growth, the question of whether richer societies become happier remains unsettled. The Easterlin paradox, in its strong form, holds that over the long run there is no relationship between a country's income per capita and the average subjective wellbeing of its population, even though richer individuals within a country report higher wellbeing than poorer ones at any point in time [1][2][3]. A large body of research has challenged this claim with cross-country panels [4][6][18], while Easterlin and co-authors have replied that the positive associations reflect short-run fluctuations rather than long-run trends [3].",
        "Korea is an unusually informative case for this debate. Few economies have grown as fast or for as long: real GDP per capita rose almost sevenfold between 1980 and 2022, transforming a middle-income industrialising country into one of the richest members of the OECD. If income growth does not raise average wellbeing in Korea, it is hard to imagine where it would. Yet Korean life satisfaction is often described as low relative to the country's income, and public discussion frequently invokes the paradox to argue that growth has failed to make Koreans happier. Evidence for this claim has rested on short series, single surveys or comparisons of a handful of years, which cannot distinguish long-run trends from the effects of business cycles and crises.",
        "We revisit the Easterlin paradox using four decades of Korean happiness and income data (1980–2022). We assemble an annual series of average life satisfaction by harmonising five national surveys, with individual microdata for 33 of the 43 years and 186,810 respondents in total, and link it to national accounts and to household income reported in the surveys. This allows us to study the income–wellbeing relationship at two levels with the same data: over time at the national level, and in the cross-section among members of the same birth cohort interviewed in the same year.",
        "At the within-country, year-by-year level we find a positive and statistically significant association between real GDP per capita and average life satisfaction, contradicting the strong form of the Easterlin paradox. The coefficient on log GDP per capita is 0.43 on a 0–10 scale, so that a doubling of income is associated with a rise of about 0.30 points; over the full period, average satisfaction rose from 5.12 to 5.98. The association survives controls for unemployment and inflation, first differencing, ten-year long differences and corrections for serial correlation, so it is not merely a business-cycle phenomenon. It is, however, stronger in the high-growth years before the 1997 financial crisis than in the slower-growing decades since.",
        "However, the cross-sectional relationship within cohorts is essentially flat. Once we compare individuals of the same birth cohort interviewed in the same year, the coefficient on log household income falls to 0.06 and is not statistically significant. The familiar positive gradient in pooled cross-sections largely reflects differences between cohorts and age groups, in particular the low incomes and low satisfaction of older Koreans. Within cohorts, higher own income is offset by the higher incomes of the occupational and regional peers with whom people compare themselves, suggesting that relative income considerations dominate within-period comparisons. Over time, by contrast, aspirations adjust to income only with a lag, so that rapid aggregate growth raises satisfaction.",
        "We discuss the implications for the use of subjective wellbeing as a policy target in rapidly growing economies. Section 2 describes Korea's growth experience and its wellbeing debates. Section 3 reviews the literature and Section 4 sets out a simple framework. Sections 5 and 6 describe the data and empirical strategy, and Section 7 reports the main results. Section 8 examines mechanisms and heterogeneity, Section 9 robustness, Section 10 policy implications, and Section 11 concludes.",
      ],
    },
    {
      id: "background",
      heading: "2. Growth and Wellbeing in Korea, 1980–2022",
      paragraphs: [
        "Korea's growth over our sample period can be divided into three phases. From 1980 to 1996, real GDP per capita grew by about 7 percent a year, driven by export-oriented industrialisation, rapid capital accumulation and a large expansion of education. The 1997–98 Asian financial crisis interrupted this process abruptly: output per capita fell by about 6 percent in 1998, unemployment more than doubled to around 7 percent, and the crisis left lasting changes in the labour market, including a sharp rise in non-regular employment. Since 2000 growth has been steady but slower, averaging around 4 percent a year in the 2000s and less than 3 percent in the 2010s, with a brief contraction in 2020 during the COVID-19 pandemic.",
        "Growth was accompanied by large social changes that matter for subjective wellbeing. Democratisation in 1987 broadened political freedoms. Life expectancy at birth rose by more than 15 years. At the same time, family structures changed rapidly, fertility fell to the lowest level in the world, and the share of elderly people living alone increased. The public pension system, introduced only in 1988, left many older Koreans with limited retirement income, and relative poverty among those aged 65 and over has been the highest in the OECD. Earlier work in this journal has documented how cohort-specific experiences shaped labour market outcomes across Korean generations [30] and how rising income inequality affected aggregate demand [29]. These developments imply that successive birth cohorts experienced very different economic and social conditions at the same age.",
        "Korea's position in international comparisons of life satisfaction has attracted considerable attention. In cross-country surveys, average satisfaction in Korea is below the level predicted by its income per capita, and the country's high suicide rate and long working hours are often cited as signs that growth has not delivered wellbeing. These concerns have influenced policy. Following the recommendations of the international commission on measuring economic performance and social progress [20], Statistics Korea began publishing a national system of quality-of-life indicators in the mid-2010s, and several central and local governments have adopted subjective wellbeing measures in their planning documents. Whether such measures should be treated as policy targets depends on what moves them, which is the question we address.",
      ],
    },
    {
      id: "literature",
      heading: "3. Related Literature",
      paragraphs: [
        "The original statement of the paradox combined evidence that richer people are happier within countries with evidence that average happiness did not rise over time in the United States [1]. Easterlin {2} extended the evidence to Japan and Europe, and Easterlin et al. {3} argued, using 37 countries, that the long-run relationship between growth and happiness is nil once short-run fluctuations are removed. Blanchflower and Oswald {16} found flat or declining wellbeing trends in Britain and the United States despite rising incomes. Studies of China, where life satisfaction fell or stagnated during two decades of very rapid growth, have been cited as particularly striking evidence for the paradox [21][22].",
        "Other work has challenged the paradox. Hagerty and Veenhoven {18} found that growing national income goes with greater happiness in a panel of countries. Stevenson and Wolfers {4} showed that the slope of wellbeing with respect to log income is similar within countries, across countries and over time, and Sacks, Stevenson and Wolfers {6} confirmed these stylised facts with newer data. Deaton {5} found that life evaluations in the Gallup World Poll rise with log income across countries with no sign of satiation. Frijters, Haisken-DeNew and Shields {26} showed that the large increase in real incomes in East Germany after reunification explained a substantial part of the rise in life satisfaction there. The disagreement turns largely on how short-run and long-run variation are separated, and on the comparability of survey questions over time.",
        "The leading explanation for the paradox is that wellbeing depends on relative rather than absolute income. Clark and Oswald {9} found that job satisfaction falls with the income of comparable workers, Ferrer-i-Carbonell {14} showed that life satisfaction falls with the income of a reference group defined by age, education and region, and Luttmer {8} found that higher earnings of neighbours reduce self-reported happiness. Clark, Frijters and Shields {7} review this literature and argue that comparison effects and adaptation can reconcile positive cross-sectional gradients with flat time series. Layard {19} drew policy conclusions from the same reasoning, arguing that the pursuit of status through income is partly self-defeating.",
        "A macroeconomic literature relates average wellbeing to unemployment and inflation. Di Tella, MacCulloch and Oswald {11} estimated the relative wellbeing costs of the two, and in later work showed that wellbeing moves with GDP and with the generosity of the welfare state [10]. Oswald {25} found that unemployment has large effects on happiness relative to income. Methodological contributions concern the treatment of ordinal responses [15][27], the distinction between life evaluation and emotional wellbeing [12][23], and the interpretation of satisfaction scales more generally [13][24]. Bond and Lang {27} show that conclusions from comparisons of mean satisfaction can be reversed under alternative monotonic transformations of the underlying scale, a concern we address in Section 9.",
        "Our contribution is to examine the paradox in a single, rapidly growing economy with a long series and microdata that allow time-series and within-cohort cross-sectional relationships to be estimated from the same sources. Most existing time-series evidence comes from countries that were already rich at the start of the period, or from China, where the period of observation is short and dominated by the transition from a planned economy [21][22]. Korea provides four decades of sustained growth through the middle-income range, with a major financial crisis that offers a sharp test of the short-run relationship.",
      ],
    },
    {
      id: "framework",
      heading: "4. Conceptual Framework and Hypotheses",
      paragraphs: [
        "To interpret our estimates, suppose that the reported life satisfaction of individual i in cohort c in year t depends on own income relative to a reference level, and on non-income determinants: S_ict = a + b ln y_ict − g ln r_ict + X_ict d + e_ict, where y is income, r is reference income and X contains individual and national characteristics. If g = b, only relative income matters; if g = 0, only absolute income matters. Following the literature, we allow reference income to have two components [7][14]: a contemporaneous comparison with peers, and an aspiration level shaped by one's own and society's past experience.",
        "Within a cohort and year, the relevant peers are people with whom one works and lives. Because people sort into occupations and places, reference income is positively correlated with own income in the cross-section: a manager in Seoul compares herself with other managers in Seoul. If ln r_ict = k + p ln y_ict, the observed cross-sectional gradient is b − g p, which is close to zero when comparison effects are strong (g close to b) and sorting is pronounced (p close to one). This yields our first hypothesis: within cohort-year cells, the gradient of satisfaction with respect to own income is small, and becomes positive and significant once peer income is controlled.",
        "Over time, the aspiration component of reference income adjusts to past income with a lag. If aspirations follow a moving average of past national income, then in a period of rapid growth current incomes exceed aspirations, and average satisfaction rises with income. The long-run effect of a permanent level of income depends on how completely aspirations adapt: with complete adaptation, only growth rates matter, as Easterlin has argued [2][3]. Our second hypothesis is therefore that the time-series relationship between satisfaction and income is positive, and stronger in periods of faster growth; our third is that lagged income enters with a negative sign once current income is controlled, with a sum of coefficients that indicates the degree of adaptation.",
        "The framework also suggests that national income growth may raise wellbeing through channels unrelated to private incomes, such as better public goods, health and security, which are shared by everyone and therefore do not appear in within-cohort comparisons. We cannot separate these channels from aspiration effects fully, but we examine them by controlling for life expectancy and public social spending in Section 9.",
      ],
    },
    {
      id: "data",
      heading: "5. Data",
      paragraphs: [],
      subsections: [
        {
          id: "data-surveys",
          heading: "5.1 Life Satisfaction Surveys and Harmonisation",
          paragraphs: [
            "No single Korean survey has measured life satisfaction consistently since 1980, so we combine five sources, summarised in Table 1. For 1980–1997 we use national omnibus surveys archived at the Korea Social Science Data Archive that asked respondents how satisfied they were with their life as a whole, together with the 1982, 1990 and 1996 waves of the World Values Survey. From 1998 we use the Korean Labor and Income Panel Study (KLIPS), which has asked about overall life satisfaction in every wave, supplemented by the Korean General Social Survey (KGSS), the later World Values Survey waves and the Gallup World Poll. Microdata are available for 33 years. For the remaining 10 years, all before 1996, we use published tabulations of the same omnibus survey questions, which report the distribution of responses but not individual records.",
            "Questions differ in wording and scale, ranging from five-point satisfaction scales to the 0–10 Cantril ladder. We harmonise them in two steps. First, each scale is converted to a 0–10 range using the midpoints of response categories, a linear transformation that preserves ordering. Second, we estimate level adjustments between sources from years in which two or more surveys overlap: there are overlaps in 16 years, including 1990 and 1996 for the omnibus surveys and the World Values Survey, and every year from 2003 onwards for KLIPS and at least one other survey. Adjustments are estimated by regressing year-by-source means on year and source fixed effects and are anchored to the Gallup World Poll scale. Appendix A describes the procedure; Section 9 shows that the results are similar under alternative bridging methods and when each source is used alone.",
          ],
          tables: [
            {
              id: "table-1",
              caption: "Table 1. Life satisfaction surveys used in the harmonised series",
              columns: ["Source", "Years used", "Question and scale", "Survey-years", "Respondents"],
              rows: [
                ["National omnibus surveys (KOSSDA)", "1980–1997", "Satisfaction with life as a whole, 5 points", "6", "9,020"],
                ["World Values Survey, Korea", "1982–2018", "Satisfaction with life as a whole, 1–10", "7", "8,420"],
                ["Korean Labor and Income Panel Study", "1998–2022", "Satisfaction with life overall, 5 points", "25", "133,770"],
                ["Korean General Social Survey", "2003–2021", "Satisfaction with life, 5 points", "14", "18,600"],
                ["Gallup World Poll, Korea", "2006–2022", "Cantril ladder, 0–10", "17", "17,000"],
                ["Total (distinct years with microdata)", "1980–2022", "", "33", "186,810"],
              ],
              note: "Note: KLIPS respondents are one randomly selected adult per household per wave. Survey-years overlap across sources, so the column does not sum to the total; the 10 years without microdata (1981, 1983, 1985, 1986, 1988, 1989, 1991, 1992, 1994 and 1995) are taken from published tabulations of the omnibus surveys.",
            },
          ],
        },
        {
          id: "data-income",
          heading: "5.2 Income and Macroeconomic Data",
          paragraphs: [
            "Real GDP per capita, in thousands of 2015 won, comes from the Bank of Korea national accounts and population estimates from Statistics Korea. The unemployment rate, consumer price inflation and the share of the population aged 65 and over come from Statistics Korea, life expectancy from life tables, and public social expenditure from OECD social expenditure statistics. Real GDP per capita rose from KRW 5.6 million in 1980 to KRW 37.6 million in 2022, a log change of 1.90.",
            "At the individual level, household income is reported in all microdata sources, either as an amount or, in the earlier surveys and the World Values Survey, in brackets, which we convert to amounts using bracket midpoints and a Pareto adjustment for the top bracket. Income is deflated by the consumer price index and equivalised by dividing by the square root of household size. KLIPS also provides individual earnings, hours worked, occupation and region, which we use to construct peer reference incomes as described in Section 6.",
            "Table 2 summarises the data by decade. Average life satisfaction rose from 5.33 in the 1980s to 5.94 in the 2010s, while average growth of GDP per capita fell from 7.6 to 2.4 percent a year. The dispersion of satisfaction within years changed little, and unemployment was low throughout except during the 1997–98 crisis. The number of respondents rises sharply after 1998, when KLIPS begins, so the within-cohort analysis is dominated by the later decades.",
          ],
          tables: [
            {
              id: "table-2",
              caption: "Table 2. Life satisfaction, income and macroeconomic conditions by decade",
              columns: ["Variable", "1980–89", "1990–99", "2000–09", "2010–19", "2020–22"],
              rows: [
                ["Mean life satisfaction (0–10)", "5.33", "5.66", "5.75", "5.94", "5.93"],
                ["Within-year SD of life satisfaction", "2.01", "2.04", "1.97", "1.95", "1.92"],
                ["Real GDP per capita (KRW million, 2015 prices)", "7.8", "15.4", "23.9", "32.2", "36.4"],
                ["Growth of real GDP per capita (percent per year)", "7.6", "5.8", "3.9", "2.4", "1.6"],
                ["Unemployment rate (percent)", "3.8", "3.6", "3.6", "3.6", "3.5"],
                ["Population aged 65+ (percent)", "4.1", "5.8", "9.0", "13.2", "16.6"],
                ["Years with microdata", "4", "6", "10", "10", "3"],
                ["Respondents", "5,470", "17,720", "66,240", "70,150", "27,230"],
              ],
              note: "Note: Life satisfaction is the harmonised 0–10 series described in Section 5.1. Decade values are averages of annual figures.",
            },
          ],
        },
        {
          id: "data-cohorts",
          heading: "5.3 Birth Cohorts",
          paragraphs: [
            "We group respondents aged 18 and over into 16 five-year birth cohorts, from those born in 1920–24 to those born in 1995–99, and drop the small number of respondents born before 1920 or after 1999. Each cohort is observed in at least five survey-years, and the cohorts born between 1930 and 1959 are observed in all 33. Cohort-year cells contain on average 360 respondents, ranging from about 40 for the oldest cohorts in the most recent years to over 900 for middle-aged cohorts in KLIPS years. Because age, cohort and year are collinear, we do not attempt to separate age and cohort effects; instead, our cross-sectional specifications absorb all three through cohort-by-year fixed effects.",
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
          id: "strategy-timeseries",
          heading: "6.1 Time-Series Relationship",
          paragraphs: [
            "Our national-level specification relates average life satisfaction in year t to the log of real GDP per capita: S_t = a + b ln Y_t + Z_t d + u_t, where Z_t includes, in some specifications, the unemployment rate, inflation and a linear trend. Because both series trend upward, a positive estimate of b in levels could be spurious. We therefore also estimate the relationship in first differences, which removes common trends but emphasises short-run fluctuations, and in non-overlapping and overlapping ten-year long differences, which isolate low-frequency co-movement and correspond most closely to Easterlin's notion of the long run [3]. We also estimate the levels specification by Prais–Winsten feasible GLS to allow for first-order serial correlation in the errors.",
            "The strong form of the Easterlin paradox predicts that b is zero in long differences, even if it is positive in first differences because of business-cycle fluctuations. Stevenson and Wolfers {4} argue instead that b should be similar to the cross-sectional slope of about 0.3 to 0.4 per log point found across countries. We also test whether b differs between 1980–1996 and 1999–2022, and estimate distributed-lag specifications that include both current log income and the average of log income over the previous five years, to test for adaptation.",
          ],
        },
        {
          id: "strategy-crosssection",
          heading: "6.2 Within-Cohort Cross-Sectional Relationship",
          paragraphs: [
            "Using the pooled microdata, we estimate S_ict = b ln y_ict + X_ict d + f_ct + e_ict, where y_ict is equivalised household income and f_ct are cohort-by-year fixed effects. With these fixed effects the income coefficient is identified only from differences in income between members of the same birth cohort interviewed in the same year, which is our measure of the within-cohort cross-sectional relationship. For comparison we also report a conventional pooled specification with year fixed effects and a quartic in age, in which the coefficient also reflects income differences between cohorts. All individual-level specifications include survey-source fixed effects.",
            "To test the reference-group mechanism, we add the log of mean equivalised household income in the respondent's reference cell, defined by occupation (nine groups), region (seven groups), cohort and year, calculated excluding the respondent. This follows the approach of Ferrer-i-Carbonell {14} and Luttmer {8}, adapted to the occupational and regional structure of Korean labour markets. Reference incomes can be constructed only for KLIPS and KGSS respondents, so these specifications use the 1998–2022 sample.",
          ],
        },
        {
          id: "strategy-inference",
          heading: "6.3 Inference",
          paragraphs: [
            "The time-series regressions use 43 annual observations, so inference requires care. We report Newey–West standard errors with four lags [28] and, in the robustness section, results from a wild bootstrap. For the individual-level regressions, standard errors are clustered by cohort-year cell, which allows arbitrary correlation among respondents interviewed in the same year and belonging to the same cohort. Following Ferrer-i-Carbonell and Frijters {15}, we treat satisfaction as cardinal in the main specifications and report ordered-probit estimates as a robustness check.",
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
          id: "results-timeseries",
          heading: "7.1 Life Satisfaction and GDP over Time",
          paragraphs: [
            "Figure 1 plots the harmonised series of average life satisfaction against the values predicted from log GDP per capita. Satisfaction rose steadily from 5.12 in 1980 to 5.94 in 1996, fell sharply to 5.36 in 1998 during the financial crisis, recovered to 5.89 by 2010 and has fluctuated around 5.9 to 6.0 since, with a temporary dip in 2020. The fitted line tracks the long upward movement closely; the main deviations are the crisis years, when satisfaction fell much more than income.",
            "Table 3 reports the time-series regressions. In levels, the coefficient on log GDP per capita is 0.43 with a Newey–West standard error of 0.07, and log income alone explains 71 percent of the variance in average satisfaction (column 1). The coefficient implies that a doubling of income per capita is associated with an increase in satisfaction of 0.30 points, or about 0.15 within-year standard deviations, and that Korea's growth since 1980 is associated with an increase of 0.82 points, almost the entire observed rise of 0.86 points. Adding a linear trend reduces the coefficient to 0.38 but it remains significant (column 2), indicating that the relationship is not driven by an unrelated common trend. Adding unemployment and inflation reduces it to 0.36 (column 3); unemployment has a large negative coefficient, consistent with previous evidence [10][25].",
          ],
          tables: [
            {
              id: "table-3",
              caption: "Table 3. Average life satisfaction and real GDP per capita, 1980–2022",
              columns: ["", "(1) Levels", "(2) Levels + trend", "(3) Levels + controls", "(4) First differences", "(5) 10-year differences", "(6) Prais–Winsten"],
              rows: [
                ["Log real GDP per capita", "0.43***", "0.38***", "0.36***", "0.52***", "0.39***", "0.40***"],
                ["", "(0.07)", "(0.14)", "(0.10)", "(0.19)", "(0.12)", "(0.10)"],
                ["Unemployment rate (pp)", "", "", "−0.071***", "−0.064**", "", ""],
                ["", "", "", "(0.022)", "(0.027)", "", ""],
                ["Inflation (pp)", "", "", "−0.009", "−0.006", "", ""],
                ["", "", "", "(0.011)", "(0.013)", "", ""],
                ["Linear trend", "No", "Yes", "No", "—", "—", "No"],
                ["Observations", "43", "43", "43", "42", "33", "43"],
                ["R-squared", "0.71", "0.73", "0.82", "0.39", "0.44", "—"],
              ],
              note: "Note: Dependent variable is harmonised average life satisfaction (0–10). Column 5 uses overlapping ten-year differences. Newey–West standard errors with four lags in parentheses (eight lags in column 5). *** p<0.01, ** p<0.05, * p<0.1.",
            },
          ],
          figures: [
            {
              id: "figure-1",
              caption: "Figure 1. Average life satisfaction in Korea, observed and predicted from log real GDP per capita, 1980–2022",
              kind: "line",
              xLabels: ["1980", "1982", "1984", "1986", "1988", "1990", "1992", "1994", "1996", "1998", "2000", "2002", "2004", "2006", "2008", "2010", "2012", "2014", "2016", "2018", "2020", "2022"],
              yLabel: "Life satisfaction (0–10)",
              series: [
                { name: "Observed (harmonised)", values: [5.12, 5.27, 5.33, 5.36, 5.52, 5.58, 5.6, 5.68, 5.94, 5.36, 5.62, 5.71, 5.76, 5.84, 5.8, 5.89, 5.97, 5.9, 5.94, 6.02, 5.86, 5.98] },
                { name: "Predicted from log GDP per capita", values: [5.2, 5.24, 5.31, 5.38, 5.47, 5.53, 5.58, 5.64, 5.69, 5.67, 5.75, 5.79, 5.82, 5.85, 5.88, 5.91, 5.93, 5.95, 5.97, 5.99, 5.99, 6.02] },
              ],
              marker: 8,
              note: "Note: Biennial values of the harmonised annual series. Predicted values are from column 1 of Table 3. The dashed line marks the 1997–98 financial crisis.",
            },
          ],
        },
        {
          id: "results-longrun",
          heading: "7.2 Short-Run versus Long-Run Variation",
          paragraphs: [
            "The central question in the debate is whether the association reflects long-run trends or short-run fluctuations. In first differences the coefficient is 0.52 (column 4), somewhat larger than in levels, reflecting the strong co-movement of satisfaction and income during the 1997–98 crisis and the 2020 pandemic. If the strong form of the paradox held, the coefficient in long differences would be close to zero. Instead, in ten-year differences it is 0.39 with a standard error of 0.12 (column 5), similar to the levels estimate and statistically significant. Using non-overlapping decade changes, which provide only four observations, gives a similar point estimate of 0.41, although it is imprecisely estimated.",
            "The Prais–Winsten estimate in column 6 is 0.40, and the estimated first-order autocorrelation of the residuals is 0.48, indicating moderate persistence that does not overturn the conclusion. Taken together, the estimates reject a zero long-run relationship at conventional significance levels in every specification. The magnitude is close to the slope of about 0.3 to 0.4 per log point found across countries [4][6] and well below the slope that would be needed for income alone to close Korea's gap with countries of similar income. In this sense Korea's experience contradicts the strong form of the Easterlin paradox: over four decades, rising income has been accompanied by rising life satisfaction.",
            "The relationship has nevertheless weakened. When we estimate the levels specification separately for 1980–1996 and 1999–2022, excluding the crisis years, the coefficient is 0.58 (standard error 0.16) in the first period and 0.22 (standard error 0.12) in the second, and the difference is significant at the 10 percent level. Satisfaction gains per log point of income were therefore much larger during the high-growth decades. As we show in Section 8, this pattern is consistent with aspirations that adapt to income with a lag.",
          ],
        },
        {
          id: "results-crosssection",
          heading: "7.3 The Within-Cohort Cross-Section",
          paragraphs: [
            "Table 4 turns to the microdata. In a pooled regression with year fixed effects, an age quartic and survey-source effects, the coefficient on log equivalised household income is 0.21 with a standard error of 0.03 (column 1), close to typical cross-sectional estimates for advanced economies [5][6]. Replacing year effects and the age quartic with cohort-by-year fixed effects reduces the coefficient to 0.06, with a standard error of 0.04 (column 2). Adding controls for gender, marital status, education, employment status and self-reported health reduces it further to 0.04 (column 3). Within cohorts, the cross-sectional relationship between income and satisfaction is therefore essentially flat: a doubling of household income is associated with an increase in satisfaction of about 0.04 points.",
            "The difference between columns 1 and 2 shows that most of the pooled gradient reflects differences between cohorts and ages within years rather than differences among people of the same cohort. In particular, older cohorts in Korea have both much lower incomes and markedly lower satisfaction than younger cohorts, a pattern that differs from the U-shape in age found in many Western countries [17] and that reflects the high rate of old-age poverty documented in Section 2. Column 4 shows that the within-cohort result is not an artefact of measurement error in income from bracketed responses: in KLIPS, where income is reported as amounts, the within-cohort coefficient is 0.05 with a standard error of 0.03. Column 5 shows that the ordered-probit estimate, scaled by the coefficient on a standardised index of health to make it comparable, is also small and insignificant.",
          ],
          tables: [
            {
              id: "table-4",
              caption: "Table 4. Household income and individual life satisfaction: pooled and within-cohort estimates",
              columns: ["", "(1) Pooled", "(2) Cohort × year FE", "(3) + Controls", "(4) KLIPS only", "(5) Ordered probit"],
              rows: [
                ["Log equivalised household income", "0.21***", "0.06", "0.04", "0.05", "0.05"],
                ["", "(0.03)", "(0.04)", "(0.04)", "(0.03)", "(0.04)"],
                ["Year fixed effects and age quartic", "Yes", "—", "—", "—", "—"],
                ["Cohort × year fixed effects", "No", "Yes", "Yes", "Yes", "Yes"],
                ["Individual controls", "No", "No", "Yes", "Yes", "Yes"],
                ["Survey-source fixed effects", "Yes", "Yes", "Yes", "—", "Yes"],
                ["Observations", "186,810", "186,810", "186,810", "133,770", "186,810"],
                ["Cohort-year cells", "—", "519", "519", "400", "519"],
              ],
              note: "Note: Dependent variable is harmonised life satisfaction (0–10). Individual controls are gender, marital status, education (four groups), employment status (four groups) and self-reported health. Column 5 reports ordered-probit coefficients rescaled to the 0–10 metric as described in the text. Standard errors clustered by cohort-year cell in parentheses. *** p<0.01, ** p<0.05, * p<0.1.",
            },
          ],
        },
      ],
    },
    {
      id: "mechanisms",
      heading: "8. Mechanisms and Heterogeneity",
      paragraphs: [
        "Why is satisfaction related to income over time but not within cohorts? Our framework points to reference-group comparisons in the cross-section and lagged aspirations over time. Table 5 examines both. Panel A adds peer reference income to the within-cohort specification. Once the mean income of the respondent's occupation-region cell within the same cohort and year is controlled, the coefficient on own log income rises to 0.27 (standard error 0.05) and the coefficient on reference income is −0.24 (standard error 0.07). The two are close in absolute value, and we cannot reject the hypothesis that they are equal, so a rise in income that is shared by one's peers leaves satisfaction essentially unchanged. Because reference income rises strongly with own income across occupations and regions, the observed within-cohort gradient is small. This is the pattern predicted when relative income considerations dominate within-period comparisons [7][8][14].",
        "Panel B examines adaptation in the time series. When both current log GDP per capita and its average over the previous five years are included, the coefficient on current income is 1.04 (standard error 0.29) and that on lagged income is −0.63 (standard error 0.27). The sum, 0.41, is close to the long-run levels estimate, indicating that aspirations adapt to about 60 percent of past income gains within five years but not completely. An alternative specification relating satisfaction to the five-year average growth rate of GDP per capita, controlling for the level of income, gives a coefficient of 0.067 per percentage point of growth. These results suggest that Korea's rapid growth raised satisfaction partly because incomes outpaced aspirations, which also explains why the time-series relationship weakened as growth slowed after 2000.",
        "Panel C examines heterogeneity in the within-cohort gradient. The gradient is small for both men and women and for respondents with above-median education. It is larger, at 0.10 for respondents with below-median education and 0.12 for those aged 60 and over, both significant at the 5 percent level. These are groups with lower incomes on average, for whom absolute income is more likely to matter for meeting basic needs, consistent with evidence that the income gradient is steeper at low incomes [5][12]. Among respondents under 40, by contrast, the within-cohort gradient is just 0.03 and the reference-income coefficient is largest in absolute value.",
        "Figure 2 shows that the contrast between time-series and cross-sectional gradients holds for every group of birth cohorts. For each cohort group, we regress the cohort's mean satisfaction in each survey-year on log GDP per capita, controlling for a quartic in age, and compare the coefficient with the within-cohort cross-sectional gradient. The time-series gradients range from 0.48 for cohorts born before 1940 to 0.29 for those born after 1980, while the within-cohort gradients are between 0.03 and 0.08 for all groups. The decline in the time-series gradient across cohorts is consistent with the adaptation mechanism: younger cohorts have spent most of their adult lives in a rich, slower-growing economy, so their aspirations have had less room to lag behind income.",
        "The persistence of a positive time-series gradient within each cohort also addresses a concern about composition. Because older, less satisfied cohorts are progressively replaced by younger ones, changes in average satisfaction could in principle reflect cohort replacement rather than responses to income. Figure 2 shows that each cohort became more satisfied as national income rose, even after controlling for ageing, so the national-level relationship is not an artefact of changing cohort composition.",
      ],
      tables: [
        {
          id: "table-5",
          caption: "Table 5. Reference income, adaptation and heterogeneity",
          columns: ["Specification or group", "Own / current income", "Reference / lagged income", "Observations"],
          rows: [
            ["A. Within-cohort, with peer reference income", "0.27***", "−0.24***", "152,370"],
            ["", "(0.05)", "(0.07)", ""],
            ["B. Time series, current and 5-year lagged log GDP", "1.04***", "−0.63**", "38"],
            ["", "(0.29)", "(0.27)", ""],
            ["C. Within-cohort gradient by group:", "", "", ""],
            ["   Men", "0.07 (0.05)", "−0.22*** (0.08)", "89,670"],
            ["   Women", "0.05 (0.04)", "−0.25*** (0.08)", "97,140"],
            ["   Below-median education", "0.10** (0.05)", "−0.19** (0.08)", "91,540"],
            ["   Above-median education", "0.02 (0.05)", "−0.28*** (0.09)", "95,270"],
            ["   Aged under 40", "0.03 (0.05)", "−0.31*** (0.10)", "68,120"],
            ["   Aged 40–59", "0.05 (0.04)", "−0.24*** (0.08)", "74,350"],
            ["   Aged 60 and over", "0.12** (0.05)", "−0.13 (0.09)", "44,340"],
          ],
          note: "Note: Panel A uses KLIPS and KGSS respondents for 1998–2022 with cohort-by-year fixed effects and individual controls; reference income is mean equivalised household income in the respondent's occupation-region-cohort-year cell, excluding the respondent. Panel B uses annual data for 1985–2022 and Newey–West standard errors. In Panel C, the first column is the within-cohort gradient from the specification in Table 4, column 3, and the second the reference-income coefficient from the specification in Panel A, estimated separately by group. Standard errors in parentheses. *** p<0.01, ** p<0.05, * p<0.1.",
        },
      ],
      figures: [
        {
          id: "figure-2",
          caption: "Figure 2. Time-series and within-cohort income gradients by birth cohort",
          kind: "bar",
          xLabels: ["1920–39", "1940–49", "1950–59", "1960–69", "1970–79", "1980–99"],
          yLabel: "Coefficient on log income",
          series: [
            { name: "Cohort time-series gradient", values: [0.48, 0.45, 0.41, 0.39, 0.36, 0.29] },
            { name: "Within-cohort cross-sectional gradient", values: [0.08, 0.05, 0.07, 0.04, 0.06, 0.03] },
          ],
          note: "Note: The time-series gradient regresses the cohort's mean life satisfaction in each survey-year on log real GDP per capita, with a quartic in age. The within-cohort gradient is the coefficient on log equivalised household income with year fixed effects and individual controls, estimated separately for each cohort group.",
        },
      ],
    },
    {
      id: "robustness",
      heading: "9. Robustness",
      paragraphs: [
        "Table 6 reports robustness checks for both the time-series coefficient and the within-cohort gradient. The time-series estimate is similar when we treat responses as ordinal and estimate year effects from an ordered probit before regressing them on log income, when we exclude the 10 years based on published tabulations, when we use an alternative bridging method that standardises each source to a common mean and variance in overlap years, and when we add survey-source indicators to the annual series. Excluding the crisis years 1997–98 and the pandemic year 2020 reduces the coefficient slightly, to 0.37, confirming that the result does not depend on recessions. Using KLIPS alone, which provides a consistent question from 1998, the coefficient is 0.26 with a standard error of 0.12, similar to the post-crisis estimate in Section 7.2.",
        "A concern raised by Bond and Lang {27} is that comparisons of mean satisfaction depend on the assumed cardinal scale. We follow their suggestion and examine whether the sign of the change in satisfaction between the 1980s and the 2010s is robust to alternative monotonic transformations. Because the distribution of responses in the 2010s first-order stochastically dominates that of the 1980s in all sources with comparable questions, the increase in satisfaction over time is robust to any increasing transformation of the scale. The within-cohort gradient is also unchanged when we replace household income with household consumption or individual earnings, when we use a quadratic trend, and when we include the shared determinants of wellbeing discussed in Section 4, life expectancy and public social expenditure as a share of GDP. Including these variables reduces the time-series coefficient to 0.31, which remains significant, suggesting that part but not all of the association between national income and wellbeing operates through health and public provision.",
        "Finally, inference based on a wild bootstrap with 9,999 replications gives p-values below 0.01 for the levels coefficient and below 0.05 for the long-difference coefficient, so the time-series results do not depend on asymptotic approximations in our short sample. Clustering the within-cohort standard errors by cohort alone, rather than by cohort-year cell, increases the standard error to 0.05 but does not change any conclusion.",
      ],
      tables: [
        {
          id: "table-6",
          caption: "Table 6. Robustness checks",
          columns: ["Specification", "Time-series coefficient", "Within-cohort gradient"],
          rows: [
            ["Baseline (Table 3 col. 1; Table 4 col. 2)", "0.43*** (0.07)", "0.06 (0.04)"],
            ["Ordered-probit satisfaction", "0.45*** (0.08)", "0.07 (0.04)"],
            ["Excluding years from published tabulations", "0.41*** (0.09)", "—"],
            ["Alternative bridging (standardised overlaps)", "0.39*** (0.08)", "0.06 (0.04)"],
            ["Survey-source indicators in annual series", "0.40*** (0.08)", "—"],
            ["Excluding 1997–98 and 2020", "0.37*** (0.08)", "0.05 (0.04)"],
            ["KLIPS only, 1998–2022", "0.26** (0.12)", "0.05 (0.03)"],
            ["Quadratic trend", "0.34** (0.13)", "—"],
            ["Controlling for life expectancy and social spending", "0.31** (0.13)", "—"],
            ["Household consumption instead of income", "—", "0.08 (0.05)"],
            ["Individual earnings instead of household income", "—", "0.04 (0.04)"],
            ["Standard errors clustered by cohort", "—", "0.06 (0.05)"],
          ],
          note: "Note: Each row reports the coefficient on log real GDP per capita in the annual regression (Newey–West standard errors) and the coefficient on log equivalised household income with cohort-by-year fixed effects (standard errors clustered by cohort-year cell unless stated). A dash indicates that the check does not apply. *** p<0.01, ** p<0.05, * p<0.1.",
        },
      ],
    },
    {
      id: "discussion",
      heading: "10. Discussion and Policy Implications",
      paragraphs: [
        "Our results suggest that both sides of the Easterlin debate capture part of the truth in Korea. Against the strong form of the paradox, national income growth has been accompanied by a sizeable and lasting rise in life satisfaction, and the relationship holds at low frequencies and within each birth cohort. In line with the relative-income explanation offered by Easterlin and others [2][7], however, people's satisfaction depends strongly on how their income compares with that of their peers, and aspirations adapt to rising incomes over a few years. The time-series gains have therefore been largest when growth was fastest, and have diminished as Korean growth has slowed.",
        "These findings have implications for the use of subjective wellbeing as a policy target in rapidly growing economies. First, they caution against the inference, common in public debate, that growth has failed to make Koreans happier and can therefore be ignored as a policy objective. Over four decades, growth accounts for most of the measured rise in average satisfaction. Second, they also caution against expecting continued growth to deliver the same gains. If aspirations adapt and comparisons with peers dominate, the satisfaction dividend of growth declines as an economy matures and growth slows, which is consistent with the weaker relationship we find after 2000 and in younger cohorts. Wellbeing targets that are set on the basis of the high-growth era are likely to be missed.",
        "Third, the importance of relative comparisons implies that policies that change everyone's income proportionally may have smaller effects on measured wellbeing than policies that improve conditions shared by all or that reduce the gaps people experience most directly. Our results point to two such areas. The steeper income gradient among older and less educated Koreans suggests that absolute income matters most where needs are least met, supporting the case for strengthening old-age income support. And the reduction in the time-series coefficient when life expectancy and social spending are controlled suggests that public provision of health and social protection is one of the channels through which national prosperity raises wellbeing [10][20].",
        "Finally, our results illustrate why subjective wellbeing measures are best used as a complement to, rather than a replacement for, conventional indicators. Average satisfaction responds to recessions, unemployment and inflation in predictable ways [10][11], and its long-run relationship with income is positive. But because reported satisfaction is relative to aspirations and reference groups that themselves shift with growth, a stable or slowly rising average is compatible with large improvements in living standards, as Korea's experience shows [13][19].",
        "Our analysis has limitations. The harmonised series relies on bridging between surveys with different questions, and before 1998 on omnibus surveys with modest sample sizes. Although the results are robust to alternative bridging methods and hold within individual sources, the precision of the early years is limited. Reference groups are defined by occupation and region, which may not correspond to the groups people actually compare themselves with. And our estimates are associations; we interpret them through a simple framework but do not claim to have identified the causal effect of income on wellbeing.",
      ],
    },
    {
      id: "conclusion",
      heading: "11. Conclusion",
      paragraphs: [
        "Using a harmonised series of Korean life satisfaction from 1980 to 2022, we find that average satisfaction rose with real GDP per capita over four decades, with a coefficient of 0.43 on log income that is robust to controls for the business cycle, long differencing and alternative harmonisation methods. This contradicts the strong form of the Easterlin paradox. Within birth cohorts and survey years, however, the relationship between household income and satisfaction is essentially flat, because higher own income is offset by the higher incomes of peers. Relative income considerations dominate within-period comparisons, while lagging aspirations allow growth to raise satisfaction over time.",
        "Korea's experience suggests that rapid growth can raise wellbeing, but that the gains diminish as growth slows and aspirations catch up. As other fast-growing economies in Asia and elsewhere consider adopting subjective wellbeing as a policy target, they should recognise both the real contribution of growth to wellbeing and the limits of income growth as a long-run source of further gains. Future research could use the long panels now available in KLIPS to follow individuals through income changes and examine how reference groups form, and could extend the analysis to emotional wellbeing measures, which respond differently to income [12][23].",
      ],
    },
    {
      id: "appendix",
      heading: "Appendix A. Construction of the Harmonised Series",
      paragraphs: [
        "Rescaling. Responses on k-point scales are mapped to the 0–10 range by assigning each category the midpoint of its interval, so that a five-point scale is coded 1, 3, 5, 7 and 9. The World Values Survey 1–10 scale is mapped linearly to 0–10. Survey weights are used where provided.",
        "Bridging. Let m_jt be the weighted mean of rescaled satisfaction in source j and year t. In the 16 years in which at least two sources are available we estimate m_jt = l_t + s_j + error, with the Gallup World Poll as the omitted source, and subtract the estimated source effects s_j from all observations of each source. The omnibus surveys are linked to the World Values Survey through 1990 and 1996, the World Values Survey to KLIPS and KGSS through 2001, 2005, 2010 and 2018, and KLIPS and KGSS to the Gallup World Poll from 2006. The harmonised annual value is the sample-size-weighted mean of adjusted source means in each year. In the alternative method reported in Table 6, each source is instead standardised to the mean and standard deviation of the anchor source in overlap years.",
        "Tabulated years. For the 10 years without microdata, published tabulations report the share of respondents in each response category of the omnibus questions. We compute means from these distributions using the same rescaling and apply the omnibus source adjustment. Excluding these years leaves the time-series results essentially unchanged (Table 6).",
      ],
    },
  ],
};
