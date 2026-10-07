// Vol. 27, No. 4 (October 2022) — full text for an article defined in journal.ts (sample content).
import type { FulltextSpec } from "../paper-spec";

export const fulltext: FulltextSpec = {
  id: "2022-v27-i4-02",
  acknowledgments:
    "We thank seminar participants at Hanyang University and Stockholm University, two anonymous referees and the handling editor for helpful comments, and staff of Statistics Korea's Microdata Integrated Service and the National Pension Research Institute for help with data access and with the institutional details of the National Pension Scheme. The submission was handled by Co-Editor Tae-Woo Lee and an independent Associate Editor.",
  dataAvailability:
    "Microdata of the Economically Active Population Survey with month of birth were accessed on site through Statistics Korea's Microdata Integrated Service and cannot be redistributed. The Korean Longitudinal Study of Ageing is available from the Korea Employment Information Service on registration. Replication code and aggregated cohort-level files are available from the corresponding author.",
  editorialNote:
    "Jae-Hoon Hwang and Evelyn Stewart exploit the birth-date cut-off in Korea's 2013 National Pension reform, which raised the eligibility age from 60 to 61, and find that labour-force participation of affected workers rose by 3.8 percentage points over the following five years — about 7 points for men in physically demanding occupations — with no measurable effect on household consumption.",
  refs: [
    /* 1 */ "Gruber, J., & Wise, D. A. (Eds.). (1999). Social security and retirement around the world. Chicago: University of Chicago Press.",
    /* 2 */ "Staubli, S., & Zweimüller, J. (2013). Does raising the early retirement age increase employment of older workers? Journal of Public Economics, 108, 17–32.",
    /* 3 */ "Mastrobuoni, G. (2009). Labor supply effects of the recent social security benefit cuts: Empirical estimates using cohort discontinuities. Journal of Public Economics, 93(11–12), 1224–1233.",
    /* 4 */ "Behaghel, L., & Blau, D. M. (2012). Framing social security reform: Behavioral responses to changes in the full retirement age. American Economic Journal: Economic Policy, 4(4), 41–67.",
    /* 5 */ "Atalay, K., & Barrett, G. F. (2015). The impact of age pension eligibility age on retirement and program dependence: Evidence from an Australian experiment. Review of Economics and Statistics, 97(1), 71–87.",
    /* 6 */ "Manoli, D., & Weber, A. (2016). Nonparametric evidence on the effects of financial incentives on retirement decisions. American Economic Journal: Economic Policy, 8(4), 160–182.",
    /* 7 */ "Cribb, J., Emmerson, C., & Tetlow, G. (2016). Signals matter? Large retirement responses to limited financial incentives. Labour Economics, 42, 203–212.",
    /* 8 */ "Seibold, A. (2021). Reference points for retirement behavior: Evidence from German pension discontinuities. American Economic Review, 111(4), 1126–1165.",
    /* 9 */ "Imbens, G. W., & Lemieux, T. (2008). Regression discontinuity designs: A guide to practice. Journal of Econometrics, 142(2), 615–635.",
    /* 10 */ "Lee, D. S., & Lemieux, T. (2010). Regression discontinuity designs in economics. Journal of Economic Literature, 48(2), 281–355.",
    /* 11 */ "Calonico, S., Cattaneo, M. D., & Titiunik, R. (2014). Robust nonparametric confidence intervals for regression-discontinuity designs. Econometrica, 82(6), 2295–2326.",
    /* 12 */ "McCrary, J. (2008). Manipulation of the running variable in the regression discontinuity design: A density test. Journal of Econometrics, 142(2), 698–714.",
    /* 13 */ "Banks, J., Blundell, R., & Tanner, S. (1998). Is there a retirement-savings puzzle? American Economic Review, 88(4), 769–788.",
    /* 14 */ "Aguiar, M., & Hurst, E. (2005). Consumption versus expenditure. Journal of Political Economy, 113(5), 919–948.",
    /* 15 */ "Battistin, E., Brugiavini, A., Rettore, E., & Weber, G. (2009). The retirement consumption puzzle: Evidence from a regression discontinuity approach. American Economic Review, 99(5), 2209–2226.",
    /* 16 */ "Attanasio, O. P., & Brugiavini, A. (2003). Social security and households' saving. Quarterly Journal of Economics, 118(3), 1075–1119.",
    /* 17 */ "Feldstein, M. (1974). Social security, induced retirement, and aggregate capital accumulation. Journal of Political Economy, 82(5), 905–926.",
    /* 18 */ "Stock, J. H., & Wise, D. A. (1990). Pensions, the option value of work, and retirement. Econometrica, 58(5), 1151–1180.",
    /* 19 */ "Coile, C., & Gruber, J. (2007). Future social security entitlements and the retirement decision. Review of Economics and Statistics, 89(2), 234–246.",
    /* 20 */ "Rust, J., & Phelan, C. (1997). How social security and Medicare affect retirement behavior in a world of incomplete markets. Econometrica, 65(4), 781–831.",
    /* 21 */ "Gustman, A. L., & Steinmeier, T. L. (1986). A structural retirement model. Econometrica, 54(3), 555–584.",
    /* 22 */ "Hairault, J.-O., Sopraseuth, T., & Langot, F. (2010). Distance to retirement and older workers' employment: The case for delaying the retirement age. Journal of the European Economic Association, 8(5), 1034–1076.",
    /* 23 */ "Blundell, R., French, E., & Tetlow, G. (2016). Retirement incentives and labor supply. In J. Piggott & A. Woodland (Eds.), Handbook of the economics of population aging (Vol. 1, pp. 457–566). Amsterdam: North-Holland.",
    /* 24 */ "Filer, R. K., & Petri, P. A. (1988). A job-characteristics theory of retirement. Review of Economics and Statistics, 70(1), 123–128.",
    /* 25 */ "Duggan, M., Singleton, P., & Song, J. (2007). Aching to retire? The rise in the full retirement age and its impact on the social security disability rolls. Journal of Public Economics, 91(7–8), 1327–1350.",
    /* 26 */ "OECD. (2015). Pensions at a glance 2015: OECD and G20 indicators. Paris: OECD Publishing.",
    /* 27 */ "OECD. (2018). Working better with age: Korea. Paris: OECD Publishing.",
  ],
  body: [
    {
      id: "introduction",
      heading: "1. Introduction",
      paragraphs: [
        "Population ageing is placing pay-as-you-go and partially funded pension systems under pressure throughout the OECD, and governments have responded by raising pension eligibility ages and reducing benefit generosity [26]. Few countries face the problem as acutely as Korea. Its old-age dependency ratio is projected to rise from about 20 percent in 2020 to more than 70 percent by 2060, the fastest increase among advanced economies, while the National Pension Scheme (NPS), introduced only in 1988, is still maturing and its reserve fund is projected to be exhausted in the 2050s without further reform [27]. Whether raising the pension age actually keeps older people in work, or merely shifts them onto other sources of support, is therefore a central question for Korean social policy.",
        "Economic theory gives an ambiguous answer. In a life-cycle model with perfect capital markets, a one-year delay in eligibility is a modest reduction in pension wealth and should have small effects on the timing of retirement [18][21]. If, however, workers are liquidity-constrained, if they treat the statutory eligibility age as a reference point, or if the reform also lowers the expected replacement rate, the labour-supply response can be much larger than the change in pension wealth alone would suggest [7][8][20]. The size of the response also matters for welfare: if workers can offset lost pension income by working longer, the consumption cost of reform is small; if they cannot, reforms that raise the eligibility age may impose large losses on precisely those workers who are least able to continue working [25].",
        "This paper estimates the labour-supply effects of what we refer to as Korea's 2013 National Pension reform: the first step of the scheduled increase in the NPS eligibility age, which raised the age at which the full old-age pension can be claimed from 60 to 61 for workers born in 1953 or later, together with the lower replacement rate that applied to new retirees under the amended benefit formula. Because the change in eligibility depends on date of birth, workers born in December 1952 and January 1953 faced pension rules that differed by a full year despite being virtually identical in every other respect. We exploit this discontinuity in a regression-discontinuity (RD) design, comparing labour-market outcomes of cohorts born just before and just after the cut-off [9][10].",
        "We combine monthly microdata from the Economically Active Population Survey (EAPS), which we accessed with exact month of birth, with the Korean Longitudinal Study of Ageing (KLoSA), which records household income, consumption and wealth. Our main sample covers 1,180,000 person-month observations on individuals born within 30 months of the cut-off, observed between ages 59 and 64. The design passes standard validity checks: there is no evidence of manipulation of the running variable, and predetermined characteristics such as education, occupation at age 55 and health are balanced at the cut-off.",
        "We find that the reform increased the labour-force participation rate of affected workers by 3.8 percentage points on average over the subsequent five years, corresponding to ages 60 to 64 of the first treated cohort. The effect is largest at age 60, when the treated cohort could not yet claim a pension (8.9 points), but remains positive and significant at ages 61 to 64, after benefits became available. The effects are concentrated among male workers in physically demanding occupations, whose participation rose by 7.1 percentage points, compared with 1.8 to 3.9 points for other groups. Despite the loss of pension income, the reform had no measurable effect on the consumption of affected households: the RD estimate is −0.4 percent with a standard error of 2.1 percent. Household earnings rose by enough to offset roughly four-fifths of the reduction in pension income, suggesting that labour-supply adjustments largely offset the expected benefit reductions.",
        "Our contribution is threefold. First, we provide the first quasi-experimental estimates of the labour-supply effect of pension eligibility ages in Korea, a country with unusually high old-age poverty and a large share of older workers in self-employment and informal jobs. Second, the persistence of the effect beyond the new eligibility age adds to a growing body of evidence that statutory ages act as reference points rather than merely as budget-constraint kinks [4][8]. Third, by linking labour-supply responses to household consumption, we show that the welfare costs of eligibility-age increases depend critically on whether affected workers are able to remain in work, an issue that is central to the next steps of Korean pension reform."
      ],
    },
    {
      id: "background",
      heading: "2. Institutional Background",
      paragraphs: [
        "The NPS is a defined-benefit scheme covering private-sector employees and the self-employed; civil servants, military personnel and private-school teachers are covered by separate occupational schemes. Contributions are 9 percent of covered earnings, split equally between employer and employee for wage workers and paid entirely by the self-employed. A full old-age pension requires at least 10 years of contributions. Benefits are based on a formula that combines the average covered earnings of all insured persons with the individual's own lifetime average earnings, so that the scheme is strongly redistributive. When the scheme was introduced in 1988, the replacement rate for a worker with 40 years of contributions at average earnings was set at 70 percent, and the eligibility age at 60.",
        "Two reforms reshaped these parameters. The 1998 reform reduced the replacement rate to 60 percent and legislated a gradual increase in the eligibility age, by one year every five years, from 60 to 65. Under this schedule, workers born in 1953–1956 became eligible at 61, those born in 1957–1960 at 62, and so on until the age of 65 applies to those born in 1969 or later. Because the first step affected only those born from 1 January 1953, its implementation began in 2013, when the first treated cohort turned 60. The 2007 reform further reduced the replacement rate to 50 percent in 2008 and legislated a decline of 0.5 percentage points per year thereafter, to 40 percent by 2028. The accrual rate for contribution years after 2008 is therefore lower than for earlier years, so that cohorts reaching pensionable age from 2013 onwards faced lower benefits than earlier retirees with the same earnings histories.",
        "Table 1 summarises the parameters faced by the cohorts around the first cut-off. A worker born in December 1952 could claim a full pension from December 2012 at age 60, whereas a worker born in January 1953 had to wait until January 2014 at age 61. The early old-age pension, available five years before the normal eligibility age with a reduction of 6 percent per year of early claiming, shifted correspondingly from 55 to 56. In practice, this meant that cohorts on either side of the cut-off faced identical contribution rules and nearly identical benefit formulas, but a one-year difference in the age at which benefits could first be received at the full rate and a modestly lower expected lifetime benefit.",
        "Two other features of the institutional environment are important for interpretation. First, mandatory retirement in Korea has historically been set by firms, typically at 55 to 58 in large firms, and many older workers move into self-employment or temporary jobs after leaving their career employer [27]. A 2013 amendment to the Act on Prohibition of Age Discrimination in Employment required firms to set retirement ages of at least 60, effective from 2016 for firms with 300 or more employees and from 2017 for smaller firms. This change applied by firm size and calendar year rather than date of birth, and therefore does not confound our RD estimates, although we examine it explicitly in Section 9. Second, Korea has no general unemployment-to-retirement pathway comparable to those in many European countries: unemployment insurance lasts at most eight months, and disability pensions are restricted to severe impairments. Workers who lose their pension for a year must therefore rely on work, savings or family transfers.",
      ],
      tables: [
        {
          id: "table-1",
          caption: "Table 1. National Pension Scheme parameters by birth cohort",
          columns: ["Birth cohort", "Normal eligibility age", "Early pension age", "Year of full eligibility", "Replacement rate at claim (%)", "Mean monthly benefit at claim (KRW 000)"],
          rows: [
            ["1951", "60", "55", "2011", "48.5", "392"],
            ["1952", "60", "55", "2012", "48.0", "401"],
            ["1953", "61", "56", "2014", "47.0", "386"],
            ["1954", "61", "56", "2015", "46.5", "394"],
            ["1955", "61", "56", "2016", "46.0", "402"],
            ["1956", "61", "56", "2017", "45.5", "409"],
            ["1957", "62", "57", "2019", "44.5", "417"],
          ],
          note: "Note: The replacement rate is the statutory rate for a worker with 40 years of contributions at average covered earnings in the year of full eligibility. Mean monthly benefits are for new old-age pensioners of each cohort claiming at the normal eligibility age, in 2012 prices. Source: National Pension Act and amendments; National Pension Service statistical yearbooks; authors' calculations.",
        },
      ],
    },
    {
      id: "literature",
      heading: "3. Related Literature",
      paragraphs: [
        "A large literature documents that the structure of pension systems shapes retirement behaviour. The cross-country project led by Gruber and Wise {1} showed that implicit taxes on continued work embedded in social-security rules are strongly correlated with the labour-force participation of older men, and structural models of retirement have long emphasised the option value of continued work and the role of pension accrual [18][21][23]. Coile and Gruber {19} show that forward-looking measures of pension incentives predict retirement better than current benefit levels. Rust and Phelan {20} demonstrate that, when capital markets are incomplete, the age at which benefits first become available has a disproportionate effect on retirement because liquidity-constrained workers cannot borrow against future pension income.",
        "A more recent quasi-experimental literature exploits cohort-specific changes in eligibility ages. Mastrobuoni {3} uses the increase in the US full retirement age for cohorts born after 1937 and finds that the average retirement age of affected cohorts rose by about half the change in the normal retirement age. Behaghel and Blau {4} show that retirement spikes moved with the full retirement age, suggesting that workers treat the statutory age as a focal point. Staubli and Zweimüller {2} study an Austrian reform that raised the early retirement age and find that employment of affected men rose by 9.75 percentage points and that of women by 11 percentage points, while unemployment and disability claims also increased. Atalay and Barrett {5} find similar results for Australia's increase in the women's age pension age. Cribb, Emmerson and Tetlow {7} show that the increase in the UK women's state pension age raised employment by much more than the financial incentives would predict.",
        "Our finding that effects persist beyond the new eligibility age connects to work on reference points in retirement. Seibold {8} uses discontinuities in German pension rules to show that statutory ages produce bunching in retirement that cannot be explained by financial incentives, and Manoli and Weber {6} find that Austrian workers respond to discrete changes in severance pay only modestly at the intensive margin. Hairault, Sopraseuth and Langot {22} argue that the distance to the retirement age itself shapes the employment of older workers, because firms and workers invest less in matches that are expected to end soon. If raising the eligibility age lengthens the expected horizon of employment relationships, it may raise employment even at ages after eligibility.",
        "Finally, our analysis of consumption relates to the literature on the retirement-consumption puzzle. Banks, Blundell and Tanner {13} document a drop in consumption at retirement in the United Kingdom that is difficult to reconcile with consumption smoothing, while Aguiar and Hurst {14} and Battistin et al. {15} show that much of the measured decline reflects work-related expenses and home production. Attanasio and Brugiavini {16} and the classic work of Feldstein {17} show that pension wealth substitutes for private saving. Duggan, Singleton and Song {25} find that the rise in the US full retirement age increased disability claims, highlighting the possibility that workers in poor health bear disproportionate costs. The Korean case is informative because the absence of an unemployment or disability pathway means that the margin of adjustment is largely between work and consumption.",
      ],
    },
    {
      id: "framework",
      heading: "4. Conceptual Framework and Hypotheses",
      paragraphs: [
        "Consider a worker approaching age 60 who chooses each year whether to work, given earnings w, pension benefits b available from the eligibility age E, assets A and a borrowing constraint A ≥ 0. Raising E from 60 to 61 has two effects. It reduces pension wealth by roughly one year of benefits and, combined with the lower replacement rate, by a further amount over the remaining lifetime; this wealth effect raises labour supply at all ages. It also removes pension income at age 60 for workers who would otherwise have retired then; for workers with few liquid assets, this liquidity effect forces continued work at age 60, regardless of the effect on lifetime wealth [20].",
        "These considerations yield four hypotheses. H1: the reform increases labour-force participation at age 60, when the treated cohort was not yet eligible, by a substantial amount. H2: if eligibility ages act as reference points or if continued employment at age 60 preserves job matches, the effect persists at ages 61 to 64, when both cohorts were eligible [8][22]. A pure liquidity mechanism would instead predict that the effect disappears once benefits become available. H3: effects are larger for workers with lower liquid wealth and fewer alternative sources of income; because physically demanding occupations are associated with lower earnings and less wealth, but also with greater difficulty in continuing to work, the net effect for these workers is theoretically ambiguous [24]. H4: if affected households can offset lost pension income by working, consumption should be little affected; if not, consumption should fall roughly in proportion to the income loss.",
        "The hypotheses are helpful for interpreting the dynamic profile of the effects. If the response at age 60 reflects only liquidity, the participation gap should close at 61, and household income should show a temporary fall at age 60 that is not reversed. If the response reflects a reference-point or job-attachment mechanism, the participation gap should decline gradually and earnings gains should continue to compensate for the lower lifetime benefits implied by the replacement-rate reduction. We test these predictions using the age profile of effects in Section 7 and the heterogeneity and mechanism analysis in Section 8.",
      ],
    },
    {
      id: "data",
      heading: "5. Data",
      paragraphs: [],
      subsections: [
        {
          id: "data-eaps",
          heading: "5.1 Labour-Market Data",
          paragraphs: [
            "Our main source is the EAPS, the monthly labour-force survey conducted by Statistics Korea on about 35,000 households. The public-use files report only age in years, which is too coarse for an RD design based on date of birth. We therefore accessed the restricted files, which record year and month of birth, through Statistics Korea's on-site Microdata Integrated Service. Each household is surveyed for up to 36 consecutive months, so that individuals near the cut-off are observed repeatedly as they age through the relevant range.",
            "We restrict the sample to individuals born between July 1950 and June 1955, so that the widest bandwidth includes 30 birth months on each side of the January 1953 cut-off, and observe them between 2010 and 2019, at ages 59 to 64. The main outcome is labour-force participation, defined as being employed or actively seeking work in the reference week. We also examine employment, weekly hours, wage employment versus self-employment, and occupation. Occupation at age 55 is constructed from the earliest observation for each individual and classified as physically demanding if it belongs to the major groups of craft and related trades, plant and machine operators, agricultural and fishery workers, or elementary occupations, following the definitions used in OECD analyses of Korean older workers [27]. The final sample contains about 1,180,000 person-month observations on 62,400 individuals.",
          ],
        },
        {
          id: "data-klosa",
          heading: "5.2 Household Income, Consumption and Pension Data",
          paragraphs: [
            "To study income and consumption, we use the KLoSA, a biennial panel of about 10,000 individuals aged 45 or older that is modelled on the US Health and Retirement Study. The KLoSA records month of birth, labour-market status, household income by source (earnings, public pensions, private transfers and asset income), monthly consumption expenditure and its main components, financial and real assets, and self-reported health. We use the 2008–2018 waves and restrict attention to respondents born within 30 months of the cut-off, giving 7,850 person-wave observations on 1,690 individuals. Pension receipt and benefit amounts are cross-checked against National Pension Service statistical yearbooks, which report the number and mean benefit of new pensioners by birth cohort.",
            "Table 2 reports descriptive statistics for individuals born in the 12 months before and after the cut-off. The two groups are similar in predetermined characteristics: the share of men, years of schooling, the share in physically demanding occupations at age 55, NPS contribution years and self-reported health at age 58 differ by small and statistically insignificant amounts. By contrast, outcomes at ages 60 to 64 differ: the cohort born in 1953 has higher participation and employment, and a much lower rate of pension receipt at age 60.",
          ],
          tables: [
            {
              id: "table-2",
              caption: "Table 2. Descriptive statistics for cohorts born within 12 months of the cut-off",
              columns: ["Variable", "Born 1952 (control)", "Born 1953 (treated)", "Difference", "p-value"],
              rows: [
                ["Panel A. Predetermined characteristics", "", "", "", ""],
                ["Male (share)", "0.487", "0.489", "0.002", "0.81"],
                ["Years of schooling", "9.84", "9.91", "0.07", "0.42"],
                ["Physically demanding occupation at 55 (share)", "0.421", "0.418", "−0.003", "0.77"],
                ["Self-employed at 55 (share)", "0.334", "0.331", "−0.003", "0.74"],
                ["NPS contribution years", "14.2", "14.5", "0.3", "0.29"],
                ["Poor self-reported health at 58 (share)", "0.214", "0.209", "−0.005", "0.66"],
                ["Panel B. Outcomes at ages 60–64", "", "", "", ""],
                ["Labour-force participation (share)", "0.591", "0.627", "0.036", "0.00"],
                ["Employment (share)", "0.574", "0.607", "0.033", "0.00"],
                ["Weekly hours, if employed", "43.1", "43.6", "0.5", "0.21"],
                ["Receives old-age pension at 60 (share)", "0.612", "0.048", "−0.564", "0.00"],
                ["Monthly household consumption (KRW 000)", "2,184", "2,176", "−8", "0.88"],
              ],
              note: "Note: Means for individuals born January–December 1952 and January–December 1953. Panel A is measured in the EAPS and KLoSA before age 59; Panel B pools observations at ages 60 to 64. p-values are from t-tests with standard errors clustered by month of birth. Consumption and pension receipt are from the KLoSA; all other variables from the EAPS.",
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
          id: "strategy-rd",
          heading: "6.1 Regression-Discontinuity Design",
          paragraphs: [
            "Let r_i denote individual i's month of birth relative to January 1953, so that r_i = 0 for those born in January 1953 and r_i = −1 for those born in December 1952. Treatment is D_i = 1[r_i ≥ 0]. For an outcome y_ia observed at age a, we estimate local linear regressions of the form y_ia = α + τD_i + β₁r_i + β₂D_i·r_i + X_i′γ + μ_a + ε_ia, restricted to |r_i| ≤ h, where μ_a are age-in-months fixed effects and X_i is a vector of predetermined covariates. The coefficient τ is the effect of the reform at the cut-off. Our headline estimate pools ages 60 to 64, corresponding to the five years after the first treated cohort turned 60, and weights each year of age equally.",
            "We use a triangular kernel and the mean-squared-error optimal bandwidth of Calonico, Cattaneo and Titiunik {11}, which is about 18 months for the main outcome, and report bias-corrected robust confidence intervals. Standard errors are clustered by month of birth, the level at which treatment varies. Because the running variable is discrete, with 60 support points in the widest bandwidth, we also report estimates based on fixed bandwidths of 12 and 24 months and with a quadratic polynomial, following the recommendations of Lee and Lemieux {10}.",
            "A concern specific to birth-date discontinuities is seasonality: individuals born in different months may differ systematically in education, school-entry age or health. Because the cut-off coincides with the turn of the calendar year, January births are the oldest in their school cohort under the Korean school-entry rules of the period, while December births are the youngest. We address this concern in three ways: by controlling for month-of-birth fixed effects estimated on non-treated cohorts, by estimating placebo discontinuities at January 1951, 1952, 1954 and 1955, and by a difference-in-discontinuities specification that subtracts the average January discontinuity in placebo years from the estimate at January 1953.",
          ],
        },
        {
          id: "strategy-validity",
          heading: "6.2 Validity Checks",
          paragraphs: [
            "The key identifying assumption is that potential outcomes are continuous in month of birth at the cut-off. Because month of birth was determined decades before the reform was legislated, manipulation is implausible, and the density test of McCrary {12} finds no discontinuity in the number of observations at the cut-off (log difference 0.012, standard error 0.031). Predetermined covariates are balanced: in RD regressions with each characteristic in Panel A of Table 2 as the dependent variable, no coefficient is statistically significant at the 10 percent level, and a joint test fails to reject balance (p = 0.64).",
            "A second assumption is that no other policy changed discontinuously at the same cut-off. We checked the legislative record for changes to taxes, health insurance, the Basic Pension and employment programmes that depend on date of birth around January 1953 and found none. The Basic Pension, a means-tested non-contributory benefit introduced in 2014, applies from age 65 to all cohorts and therefore does not affect outcomes at ages 60 to 64. The mandatory retirement legislation discussed in Section 2 varies by calendar year and firm size, which we absorb with calendar-month fixed effects in robustness checks.",
          ],
        },
        {
          id: "strategy-consumption",
          heading: "6.3 Income and Consumption",
          paragraphs: [
            "For household outcomes from the KLoSA, the smaller sample makes local linear estimation imprecise, so we pool observations within 30 months of the cut-off and estimate the same specification with a uniform kernel, wave fixed effects and household-size controls. Consumption is measured as total monthly household expenditure, and we also examine food, non-durable expenditure excluding work-related items (transport and clothing), and an expenditure measure net of housing. All monetary values are deflated to 2012 prices. Following Aguiar and Hurst {14}, we treat food and non-durable expenditure net of work-related items as our preferred measure of consumption, because increased labour supply may raise work-related expenses without any change in the consumption of other goods.",
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
          id: "results-main",
          heading: "7.1 Main Estimates",
          paragraphs: [
            "Table 3 reports the main RD estimates. In column (2), our preferred specification with the optimal bandwidth and covariates, the reform increased labour-force participation at ages 60 to 64 by 3.8 percentage points (standard error 1.1), relative to a control mean at the cut-off of 59.1 percent. The estimate is stable across bandwidths and polynomial orders, ranging from 3.5 to 4.1 points. Employment rose by 3.5 points, implying that most of the additional participants found work rather than becoming unemployed. The share of workers receiving an old-age pension at age 60 fell by 56.4 percentage points, confirming that the reform was binding: most workers in the control cohort claimed as soon as they became eligible, while very few in the treated cohort drew an early pension at a reduced rate.",
            "The effects on the intensive margin are small. Weekly hours among the employed increase by 0.5 hours, which is not statistically significant, and the share of workers who are self-employed is unchanged. Thus, the reform worked mainly by keeping people in the labour force rather than by changing how much or in what form those already working worked. The participation effect corresponds to an elasticity of participation with respect to pension wealth of about −0.3, within the range of estimates from US and European reforms [2][3][23].",
          ],
          tables: [
            {
              id: "table-3",
              caption: "Table 3. Regression-discontinuity estimates of the effect of the reform on labour-market outcomes at ages 60–64",
              columns: ["Outcome", "(1) Local linear, h = 12", "(2) Local linear, optimal h", "(3) Local quadratic, h = 24", "(4) No covariates, optimal h", "Control mean"],
              rows: [
                ["Labour-force participation", "0.035*** (0.013)", "0.038*** (0.011)", "0.041*** (0.014)", "0.037*** (0.012)", "0.591"],
                ["Employment", "0.032** (0.013)", "0.035*** (0.011)", "0.037*** (0.014)", "0.034*** (0.012)", "0.574"],
                ["Weekly hours, if employed", "0.42 (0.47)", "0.51 (0.41)", "0.58 (0.52)", "0.47 (0.43)", "43.1"],
                ["Self-employed, if employed", "−0.006 (0.011)", "−0.004 (0.010)", "−0.007 (0.012)", "−0.003 (0.010)", "0.402"],
                ["Receives pension at 60", "−0.559*** (0.024)", "−0.564*** (0.021)", "−0.571*** (0.026)", "−0.562*** (0.022)", "0.612"],
                ["Bandwidth (months)", "12", "18", "24", "18", ""],
                ["Observations", "471,200", "706,800", "942,300", "706,800", ""],
              ],
              note: "Note: Each cell reports the RD coefficient τ from a separate regression; standard errors clustered by month of birth in parentheses. Columns (1)–(3) include covariates (sex, schooling, occupation and self-employment at 55, region) and age-in-months fixed effects. The optimal bandwidth follows Calonico, Cattaneo and Titiunik (2014). Pension receipt is measured in the KLoSA at age 60. *** p < 0.01, ** p < 0.05, * p < 0.10.",
            },
          ],
        },
        {
          id: "results-dynamics",
          heading: "7.2 Graphical Evidence and Dynamics",
          paragraphs: [
            "Figure 1 shows the discontinuity graphically. It plots mean participation at ages 60 to 64 by quarter of birth relative to the cut-off, after removing month-of-birth effects estimated on placebo cohorts. Participation drifts gently upwards across cohorts, reflecting secular improvements in health and education, but there is a clear jump of about 4 percentage points between the last quarter of 1952 and the first quarter of 1953. No comparable jumps are visible at other points in the distribution.",
            "Figure 2 decomposes the pooled effect by year of age. The effect is largest at age 60, when the treated cohort was not yet eligible for a full pension and participation rose by 8.9 percentage points. Strikingly, the effect does not disappear at age 61, when the treated cohort became eligible: participation remains 3.6 points higher at 61, and 2.0 to 2.4 points higher at ages 62 to 64. The average over the five years is 3.8 points, matching the pooled estimate in Table 3. The persistence is inconsistent with a pure liquidity mechanism, which would predict that the gap closes once benefits become available, and supports H2: workers who remained in employment at 60 tended to stay in work thereafter.",
          ],
          figures: [
            {
              id: "figure-1",
              caption: "Figure 1. Labour-force participation at ages 60–64 by quarter of birth relative to January 1953",
              kind: "line",
              xLabels: ["−8", "−7", "−6", "−5", "−4", "−3", "−2", "−1", "0", "1", "2", "3", "4", "5", "6", "7"],
              yLabel: "Participation rate (percent)",
              series: [
                {
                  name: "Mean participation, ages 60–64",
                  values: [57.6, 57.9, 58.1, 58.0, 58.5, 58.7, 58.8, 59.1, 63.0, 63.1, 63.4, 63.3, 63.8, 63.9, 64.1, 64.4],
                  lower: [56.4, 56.7, 56.9, 56.8, 57.3, 57.5, 57.6, 57.9, 61.8, 61.9, 62.2, 62.1, 62.6, 62.7, 62.9, 63.2],
                  upper: [58.8, 59.1, 59.3, 59.2, 59.7, 59.9, 60.0, 60.3, 64.2, 64.3, 64.6, 64.5, 65.0, 65.1, 65.3, 65.6],
                },
              ],
              marker: 7,
              note: "Note: Quarter-of-birth means of labour-force participation pooled over ages 60 to 64, net of month-of-birth effects estimated on the 1949–1951 and 1958–1960 cohorts, with 95 percent confidence intervals. Quarter 0 is January–March 1953, the first quarter of births subject to the eligibility age of 61. Source: EAPS restricted microdata.",
            },
            {
              id: "figure-2",
              caption: "Figure 2. Effect of the reform on labour-force participation by year of age",
              kind: "bar",
              xLabels: ["Age 60", "Age 61", "Age 62", "Age 63", "Age 64"],
              yLabel: "Effect (percentage points)",
              series: [
                { name: "All workers", values: [8.9, 3.6, 2.4, 2.1, 2.0] },
                { name: "Men in physically demanding occupations", values: [15.2, 6.8, 4.9, 4.5, 4.1] },
              ],
              note: "Note: Local linear RD estimates with the optimal bandwidth, estimated separately by year of age. The averages over ages 60–64 are 3.8 points for all workers and 7.1 points for men in physically demanding occupations.",
            },
          ],
        },
        {
          id: "results-consumption",
          heading: "7.3 Income and Consumption",
          paragraphs: [
            "Table 4 reports the effects on household income and consumption from the KLoSA. Public pension income of treated households fell by an average of KRW 1.12 million per year over ages 60 to 64, reflecting the loss of a year of benefits at age 60 and the slightly lower benefits thereafter. Household earnings rose by KRW 0.92 million, offsetting about 82 percent of the pension loss; roughly two-thirds of the earnings gain comes from the respondent's own participation, and the remainder from increased hours of spouses and longer employment among respondents who were already working. Private transfers from children increased slightly, but the effect is small and statistically insignificant, and total household income is essentially unchanged.",
            "Consistent with this offset, the reform had no measurable effect on household consumption. The RD estimate for total consumption is −0.4 percent with a standard error of 2.1 percent, and the 95 percent confidence interval rules out declines larger than 4.5 percent. Results are similar for food and for non-durable consumption net of work-related items, the measure least likely to be affected by changes in work-related expenses [14][15]. Financial assets did not decline significantly either, suggesting that households did not finance consumption by running down savings. These results support H4: for the average affected household, labour-supply adjustments largely offset the expected reduction in pension benefits.",
          ],
          tables: [
            {
              id: "table-4",
              caption: "Table 4. Effects of the reform on household income and consumption at ages 60–64",
              columns: ["Outcome", "RD estimate", "Standard error", "Control mean", "Effect relative to mean (%)"],
              rows: [
                ["Public pension income (KRW million per year)", "−1.12***", "(0.21)", "4.31", "−26.0"],
                ["Household earnings (KRW million per year)", "0.92**", "(0.38)", "21.64", "4.3"],
                ["Private transfers received (KRW million per year)", "0.11", "(0.09)", "2.08", "5.3"],
                ["Total household income (KRW million per year)", "−0.06", "(0.47)", "31.22", "−0.2"],
                ["Log total consumption", "−0.004", "(0.021)", "", "−0.4"],
                ["Log food consumption", "0.006", "(0.019)", "", "0.6"],
                ["Log non-durables net of work-related items", "−0.002", "(0.023)", "", "−0.2"],
                ["Net financial assets (KRW million)", "−0.84", "(1.92)", "38.40", "−2.2"],
                ["Observations", "7,850", "", "", ""],
              ],
              note: "Note: RD estimates from the KLoSA, pooling observations at ages 60 to 64 for respondents born within 30 months of the cut-off, with wave fixed effects, household-size controls and covariates as in Table 3. Monetary values in 2012 prices. Standard errors clustered by month of birth. *** p < 0.01, ** p < 0.05, * p < 0.10.",
            },
          ],
        },
      ],
    },
    {
      id: "mechanisms",
      heading: "8. Mechanisms and Heterogeneity",
      paragraphs: [
        "Table 5 examines how the effects vary across groups. The response is concentrated among men in physically demanding occupations, whose participation rose by 7.1 percentage points (standard error 2.4). The effect for men in other occupations is 3.9 points, and for women it is 2.6 points in physically demanding occupations and 1.8 points in other occupations, neither of which is statistically significant. Weighted by group shares, these estimates average to the pooled effect of 3.8 points. The concentration among men partly reflects the fact that men were more likely to have accumulated the ten years of contributions needed for an old-age pension: among women in our sample, only 38 percent were eligible for an NPS pension, compared with 76 percent of men, so that the reform was simply less relevant for many women.",
        "Why are men in physically demanding occupations so responsive, given that such work is harder to continue at older ages? Three pieces of evidence point to liquidity and the absence of alternative income sources. First, these workers hold much less liquid wealth: median net financial assets at age 58 are KRW 12 million, compared with KRW 41 million for men in other occupations. Splitting the sample by liquid wealth, the effect is 6.4 points below the median and 1.5 points above it. Second, they are disproportionately self-employed or employed in small firms without binding mandatory retirement ages, which allows continued work in their existing jobs. Third, men in other occupations are more likely to have employer-provided retirement allowances, which they can use to bridge the gap to eligibility. These findings echo the importance of incomplete capital markets stressed by Rust and Phelan {20}.",
        "The persistence of the effect after age 61 has several possible explanations. Workers who remained employed at 60 retained firm-specific human capital and job matches that would have been costly to re-establish once lost, consistent with the horizon effects emphasised by Hairault, Sopraseuth and Langot {22}. The lower replacement rate faced by the treated cohort also implies a permanent reduction in benefits that raises labour supply at all ages through the wealth effect. Finally, the eligibility age may serve as a social norm or reference point [4][8]: in the KLoSA, the share of treated respondents who report an expected retirement age of 61 or later rises by 9 percentage points relative to the control cohort. The age profile in Figure 2, with a large effect at 60 that decays only slowly, is consistent with a combination of liquidity effects at 60 and job attachment thereafter.",
      ],
      tables: [
        {
          id: "table-5",
          caption: "Table 5. Heterogeneity in the effect on labour-force participation at ages 60–64",
          columns: ["Group", "RD estimate", "Standard error", "Control mean", "Share of sample"],
          rows: [
            ["Men, physically demanding occupation", "0.071***", "(0.024)", "0.742", "0.24"],
            ["Men, other occupation", "0.039**", "(0.019)", "0.701", "0.25"],
            ["Women, physically demanding occupation", "0.026", "(0.021)", "0.517", "0.18"],
            ["Women, other occupation", "0.018", "(0.016)", "0.448", "0.33"],
            ["Liquid wealth below median at 58", "0.064***", "(0.017)", "0.612", "0.50"],
            ["Liquid wealth above median at 58", "0.015", "(0.014)", "0.570", "0.50"],
            ["Wage employee at 55", "0.031**", "(0.014)", "0.548", "0.67"],
            ["Self-employed at 55", "0.052***", "(0.018)", "0.676", "0.33"],
          ],
          note: "Note: Local linear RD estimates with the optimal bandwidth and covariates, estimated separately for each group. Occupation and employment status are measured at age 55; liquid wealth (net financial assets) at age 58 in the KLoSA. Standard errors clustered by month of birth. *** p < 0.01, ** p < 0.05, * p < 0.10.",
        },
      ],
    },
    {
      id: "robustness",
      heading: "9. Robustness",
      paragraphs: [
        "Table 6 summarises a range of robustness checks for the main participation estimate. Placebo discontinuities at January 1951, 1952, 1954 and 1955, where no change in pension rules occurred, are small and statistically insignificant, averaging 0.4 percentage points. The difference-in-discontinuities estimate, which nets out this average January effect, is 3.4 points (standard error 1.3), only slightly smaller than the main estimate, confirming that seasonality in birth timing does not drive our results. Donut specifications that drop individuals born in December 1952 and January 1953, the months most likely to be affected by misreporting of birth dates, yield an estimate of 4.0 points.",
        "The estimate is also robust to adding calendar-month fixed effects, which absorb the introduction of mandatory retirement at 60 for large firms in 2016 and small firms in 2017, and to excluding observations from 2016 and later altogether. Restricting attention to individuals who were contributing to the NPS at age 55 raises the estimate to 4.7 points, as expected, since these workers were most directly affected by the change in eligibility. Finally, we exploit the second step of the schedule, which raised the eligibility age from 61 to 62 for cohorts born from January 1957. The estimated discontinuity in participation at ages 61 to 64 for these cohorts is 3.3 points (standard error 1.4), close to our main estimate, suggesting that the effect of the first step is not specific to the circumstances of 2013.",
        "We also investigate whether the reform shifted workers into other forms of support. Receipt of unemployment insurance at age 60 rose by 0.6 percentage points, a small effect given the eight-month limit on benefit duration, and there is no detectable effect on the receipt of disability pensions or the National Basic Livelihood Security programme. This contrasts with findings for Austria and the United States, where increases in pension ages led to substantial spillovers into unemployment and disability programmes [2][25], and reflects the limited availability of such pathways in Korea.",
      ],
      tables: [
        {
          id: "table-6",
          caption: "Table 6. Robustness checks for the effect on labour-force participation at ages 60–64",
          columns: ["Specification", "Estimate", "Standard error", "Observations"],
          rows: [
            ["Baseline (Table 3, column 2)", "0.038***", "(0.011)", "706,800"],
            ["Placebo cut-off: January 1951", "0.006", "(0.012)", "689,400"],
            ["Placebo cut-off: January 1952", "−0.003", "(0.011)", "698,100"],
            ["Placebo cut-off: January 1954", "0.008", "(0.012)", "711,500"],
            ["Placebo cut-off: January 1955", "0.005", "(0.013)", "702,900"],
            ["Difference-in-discontinuities", "0.034***", "(0.013)", "3,508,700"],
            ["Donut: excluding December 1952 and January 1953", "0.040***", "(0.013)", "667,500"],
            ["Calendar-month fixed effects", "0.037***", "(0.011)", "706,800"],
            ["Excluding 2016–2019 observations", "0.039***", "(0.012)", "512,600"],
            ["NPS contributors at age 55 only", "0.047***", "(0.014)", "418,300"],
            ["Second step: cut-off January 1957, ages 61–64", "0.033**", "(0.014)", "561,200"],
          ],
          note: "Note: Local linear RD estimates with triangular kernel, optimal bandwidth and covariates as in Table 3, column (2), unless otherwise indicated. The difference-in-discontinuities estimate subtracts the average of the four placebo January discontinuities. Standard errors clustered by month of birth. *** p < 0.01, ** p < 0.05, * p < 0.10.",
        },
      ],
    },
    {
      id: "discussion",
      heading: "10. Discussion and Policy Implications",
      paragraphs: [
        "Our estimates have three implications for the design of future reforms. First, raising the eligibility age is an effective way to increase the labour supply of older Koreans. The 3.8-point increase in participation, applied to a cohort of about 700,000 people, implies about 27,000 additional participants per cohort-year at ages 60 to 64. If similar effects apply to each subsequent step of the schedule, the cumulative increase in the eligibility age to 65 could raise the participation of people in their early sixties by more than 10 percentage points relative to a counterfactual without reform, contributing materially to the sustainability of the NPS and to the supply of labour in an ageing economy.",
        "Second, the absence of a consumption response suggests that, on average, the costs of the reform to affected households were modest. This conclusion must be qualified, however. The response is concentrated among workers with little liquid wealth who appear to have continued working because they had no alternative. For workers who could not continue working, for example because of poor health, the loss of a year of pension income may have been costly. Although we find no significant consumption decline for respondents in poor health, the KLoSA sample is too small to rule out meaningful effects for this group. Allowing earlier claiming on the basis of health or occupational hardship, as some European systems do, could mitigate these costs at limited expense [23].",
        "Third, the persistence of effects beyond the eligibility age indicates that pension rules shape retirement norms and the length of employment relationships, not just the timing of benefit claims. This suggests that coordinating pension eligibility ages with the legal minimum retirement age and with employment policies for older workers, such as wage-peak schemes and job-retention subsidies, could amplify the labour-supply effects of further reforms. At the same time, the responsiveness of liquidity-constrained workers implies that reforms should be announced well in advance, as the 1998 reform was, to allow workers to adjust their savings and plans.",
        "Our results should be interpreted with some caution. The RD design identifies the effect for cohorts born near January 1953 and for a one-year increase in the eligibility age. Larger increases, or increases applied when older workers face different labour-market conditions, may produce different responses. In addition, our consumption measures are from a relatively small survey and capture only expenditures, not home production or leisure, which may have changed as affected individuals worked more.",
      ],
    },
    {
      id: "conclusion",
      heading: "11. Conclusion",
      paragraphs: [
        "This paper has used the birth-date cut-off in Korea's 2013 National Pension reform, which raised the pension eligibility age from 60 to 61 and applied a lower replacement rate to new retirees, to estimate the effect of pension rules on the labour supply of older workers. Comparing cohorts born just before and after January 1953 in a regression-discontinuity design, we find that the reform increased the labour-force participation of affected workers by 3.8 percentage points over the subsequent five years. The effect is largest at age 60 but persists after eligibility, and it is concentrated among male workers in physically demanding occupations, who have little liquid wealth and few alternative sources of income.",
        "The reform had no measurable effect on household consumption, because increases in earnings offset most of the reduction in pension income. Raising the eligibility age therefore appears to have achieved its fiscal objective at modest cost to the average affected household. Whether this remains true as the eligibility age rises further, and for workers who are less able to remain in employment, is an important question for future research as later steps of the reform take effect.",
      ],
    },
    {
      id: "appendix",
      heading: "Appendix A. Bandwidth Sensitivity and Covariate Balance",
      paragraphs: [
        "We re-estimated the main specification for every bandwidth between 6 and 30 months. The participation estimate is between 3.3 and 4.4 percentage points for all bandwidths of 9 months or more and is statistically significant at the 5 percent level for all bandwidths of 10 months or more; at the narrowest bandwidths, the standard error roughly doubles because only a few birth months are used on each side. Estimates with an Epanechnikov or uniform kernel differ from the baseline by less than 0.3 points. The bias-corrected robust 95 percent confidence interval for the baseline estimate is [1.4, 6.3] percentage points.",
        "Covariate balance holds across bandwidths. For each predetermined characteristic in Panel A of Table 2, the RD coefficient is less than 0.05 standard deviations in absolute value at the optimal bandwidth, and the largest t-statistic is 1.21 (for NPS contribution years). Including or excluding covariates changes the participation estimate by at most 0.1 point, as columns (2) and (4) of Table 3 show, which is consistent with the covariates being balanced at the cut-off.",
      ],
    },
  ],
};
