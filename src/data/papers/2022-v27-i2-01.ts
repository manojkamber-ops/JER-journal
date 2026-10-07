// Vol. 27, No. 2 (April 2022) — full text for an article defined in journal.ts (sample content).
import type { FulltextSpec } from "../paper-spec";

export const fulltext: FulltextSpec = {
  id: "2022-v27-i2-01",
  acknowledgments:
    "We thank seminar participants at Hanyang University and the Korea Development Institute, two anonymous referees and the handling editor for helpful comments. Statistics Korea and the Korea Land and Housing Corporation kindly answered questions about their data. All remaining errors are our own.",
  dataAvailability:
    "Vital statistics, population estimates and household income data are publicly available from Statistics Korea (KOSIS); apartment price indices are available from KB Kookmin Bank; completions of public housing land development projects were compiled from Ministry of Land, Infrastructure and Transport housing statistics. The metropolitan-area panel and code are available from the corresponding author.",
  editorialNote:
    "Using within-city variation in housing prices driven by supply shocks across 14 Korean metropolitan areas, Han and Han find that a 10 percent rise in the house-price-to-income ratio reduces fertility by 2.4 percent over five years, concentrated among women aged 25 to 34, a relationship that explains about one-fifth of the cross-metropolitan variation in fertility decline over 2005–2022.",
  refs: [
    /* 1 */ "Dettling, L. J., & Kearney, M. S. (2014). House prices and birth rates: The impact of the real estate market on the decision to have a baby. Journal of Public Economics, 110, 82–100.",
    /* 2 */ "Lovenheim, M. F., & Mumford, K. J. (2013). Do family wealth shocks affect fertility choices? Evidence from the housing market. Review of Economics and Statistics, 95(2), 464–475.",
    /* 3 */ "Becker, G. S. (1960). An economic analysis of fertility. In Demographic and economic change in developed countries (pp. 209–240). Princeton University Press.",
    /* 4 */ "Becker, G. S., & Lewis, H. G. (1973). On the interaction between the quantity and quality of children. Journal of Political Economy, 81(2, Part 2), S279–S288.",
    /* 5 */ "Saiz, A. (2010). The geographic determinants of housing supply. Quarterly Journal of Economics, 125(3), 1253–1296.",
    /* 6 */ "Glaeser, E., & Gyourko, J. (2018). The economic implications of housing supply. Journal of Economic Perspectives, 32(1), 3–30.",
    /* 7 */ "Mulder, C. H. (2006). Home-ownership and family formation. Journal of Housing and the Built Environment, 21(3), 281–298.",
    /* 8 */ "Black, D. A., Kolesnikova, N., Sanders, S. G., & Taylor, L. J. (2013). Are children \"normal\"? Review of Economics and Statistics, 95(1), 21–33.",
    /* 9 */ "Lindo, J. M. (2010). Are children really inferior goods? Evidence from displacement-driven income shocks. Journal of Human Resources, 45(2), 301–327.",
    /* 10 */ "Schaller, J. (2016). Booms, busts, and fertility: Testing the Becker model using gender-specific labor demand. Journal of Human Resources, 51(1), 1–29.",
    /* 11 */ "Kearney, M. S., & Wilson, R. (2018). Male earnings, marriageable men, and nonmarital fertility: Evidence from the fracking boom. Review of Economics and Statistics, 100(4), 678–690.",
    /* 12 */ "Doepke, M., & Kindermann, F. (2019). Bargaining over babies: Theory, evidence, and policy implications. American Economic Review, 109(9), 3264–3306.",
    /* 13 */ "Adsera, A. (2004). Changing fertility rates in developed countries: The impact of labor market institutions. Journal of Population Economics, 17(1), 17–43.",
    /* 14 */ "Anderson, T., & Kohler, H.-P. (2013). Education fever and the East Asian fertility puzzle: A case study of low fertility in South Korea. Asian Population Studies, 9(2), 196–215.",
    /* 15 */ "Milligan, K. (2005). Subsidizing the stork: New evidence on tax incentives and fertility. Review of Economics and Statistics, 87(3), 539–555.",
    /* 16 */ "Lalive, R., & Zweimüller, J. (2009). How does parental leave affect fertility and return to work? Evidence from two natural experiments. Quarterly Journal of Economics, 124(3), 1363–1402.",
    /* 17 */ "Raute, A. (2019). Can financial incentives reduce the baby gap? Evidence from a reform in maternity leave benefits. Journal of Public Economics, 169, 203–222.",
    /* 18 */ "Kleven, H., Landais, C., & Søgaard, J. E. (2019). Children and gender inequality: Evidence from Denmark. American Economic Journal: Applied Economics, 11(4), 181–209.",
    /* 19 */ "Goldsmith-Pinkham, P., Sorkin, I., & Swift, H. (2020). Bartik instruments: What, when, why, and how. American Economic Review, 110(8), 2586–2624.",
    /* 20 */ "Bertrand, M., Duflo, E., & Mullainathan, S. (2004). How much should we trust differences-in-differences estimates? Quarterly Journal of Economics, 119(1), 249–275.",
    /* 21 */ "Cameron, A. C., Gelbach, J. B., & Miller, D. L. (2008). Bootstrap-based improvements for inference with clustered errors. Review of Economics and Statistics, 90(3), 414–427.",
    /* 22 */ "Stock, J. H., & Yogo, M. (2005). Testing for weak instruments in linear IV regression. In D. W. K. Andrews & J. H. Stock (Eds.), Identification and inference for econometric models: Essays in honor of Thomas Rothenberg (pp. 80–108). Cambridge University Press.",
    /* 23 */ "Chetty, R., Sándor, L., & Szeidl, A. (2017). The effect of housing on portfolio choice. Journal of Finance, 72(3), 1171–1212.",
    /* 24 */ "Sobotka, T., Skirbekk, V., & Philipov, D. (2011). Economic recession and fertility in the developed world. Population and Development Review, 37(2), 267–306.",
    /* 25 */ "Mian, A., & Sufi, A. (2011). House prices, home equity-based borrowing, and the US household leverage crisis. American Economic Review, 101(5), 2132–2156.",
    /* 26 */ { jer: "2021-v26-i3-01" },
    /* 27 */ { jer: "2021-v26-i1-02" },
    /* 28 */ "Jordà, Ò. (2005). Estimation and inference of impulse responses by local projections. American Economic Review, 95(1), 161–182.",
    /* 29 */ "Kohler, H.-P., Billari, F. C., & Ortega, J. A. (2002). The emergence of lowest-low fertility in Europe during the 1990s. Population and Development Review, 28(4), 641–680.",
  ],
  body: [
    {
      id: "introduction",
      heading: "1. Introduction",
      paragraphs: [
        "Korea has the lowest fertility rate in the world. The total fertility rate (TFR) fell from 1.08 in 2005 to 0.81 in 2021, far below the replacement level of 2.1 and below the threshold of 1.3 that demographers once used to define \"lowest-low\" fertility [29]. The decline has continued despite more than a decade of government programmes — successive Basic Plans for Low Fertility and Ageing Society have spent well over KRW 150 trillion on childcare subsidies, parental leave and child allowances since 2006 — and it has become one of the country's most pressing economic problems. A shrinking cohort of young workers will have to support a rapidly ageing population, and the fiscal and growth consequences are already visible in long-term projections.",
        "Housing costs are frequently cited by young Koreans as a reason for delaying marriage and childbearing. Housing is the largest single expenditure that a new family faces, and in Korea the expectation that a couple should secure a home — owned or rented under the lump-sum jeonse system — before marriage is deeply embedded. Apartment prices in the Seoul metropolitan area roughly doubled relative to incomes between 2005 and 2021, and the surge in 2017–2021 coincided with the steepest fall in births on record. Yet the coincidence of rising prices and falling fertility does not establish that one causes the other: both may reflect common forces such as the concentration of high-paying jobs in a few cities, changing preferences or rising educational competition [14].",
        "This paper estimates the causal effect of housing affordability on fertility using panel data for 14 Korean metropolitan areas over 2005–2022. Our measure of affordability is the house-price-to-income ratio (PIR), the ratio of the median apartment price to median annual household income. To isolate variation in affordability that is unrelated to local demand for children, we exploit within-city variation in housing prices driven by exogenous supply shocks: the completion of large public housing land development projects, whose timing was determined by designation decisions and construction lags dating back five years or more, and the differential sensitivity of metropolitan housing markets to national mortgage-rate movements, which depends on predetermined constraints on developable land [5][6].",
        "We find that a 10 percent increase in the house-price-to-income ratio reduces the fertility rate by 2.4 percent over the subsequent five years. The effect builds gradually: it is small in the first year and grows steadily, consistent with the time that couples need to form, marry and conceive. It is concentrated among women aged 25 to 34, whose age-specific fertility rates fall by 3.1–3.6 percent per 10 percent increase in the PIR, while fertility at ages 35 and above shows little offsetting catch-up. Higher housing costs reduce marriage rates and first births more than higher-order births, and the effect is larger in metropolitan areas where a greater share of young households rent. Ordinary least squares estimates are about 40 percent smaller than our instrumental-variable estimates, which suggests that local demand shocks that raise house prices also raise incomes and fertility, masking part of the true affordability effect.",
        "The estimated relationship is robust to alternative measures of affordability, to the exclusion of Seoul and of the new administrative city of Sejong, to controls for the local supply of childcare and for metropolitan labour-market conditions, and to inference methods suitable for a small number of clusters [21]. Applied to the observed changes in affordability across metropolitan areas, our estimates explain approximately one-fifth of the cross-metropolitan variation in fertility-rate declines over the sample period. Housing costs are therefore an important, though far from the only, contributor to Korea's fertility decline.",
        "The rest of the paper is organised as follows. Section 2 describes the Korean housing market and family policy. Section 3 reviews the literature and Section 4 sets out a conceptual framework. Section 5 describes the data and Section 6 the empirical strategy. Section 7 presents the main results, Section 8 examines mechanisms and heterogeneity and Section 9 reports robustness checks. Section 10 discusses policy implications and Section 11 concludes.",
      ],
    },
    {
      id: "background",
      heading: "2. Institutional Background",
      paragraphs: [
        "Korean urban housing is dominated by apartments, which account for about two-thirds of the housing stock in metropolitan areas and for a larger share of new construction. Households either own their homes, rent under jeonse — in which the tenant deposits a lump sum, typically 50 to 80 percent of the property's value, with the landlord for two years and pays no monthly rent — or rent under monthly arrangements with smaller deposits. Because jeonse deposits move closely with sale prices, a rise in house prices raises the cost of housing for renters almost as directly as for prospective buyers. Young couples typically finance a first home or jeonse deposit through a combination of parental transfers, savings and mortgage or jeonse loans, and the size of the required up-front payment is a recurrent theme in surveys of marriage intentions.",
        "House prices rose rapidly in the early 2000s, stagnated after the global financial crisis and surged again from 2017. The national median apartment price relative to median household income rose by about 65 percent between 2005 and 2021, but the increase was very uneven: the PIR more than doubled in Seoul, rose by around 80 percent in the surrounding Gyeonggi metropolitan areas and in Daejeon–Sejong, and increased by a third or less in several industrial cities in the south-east. Macroprudential limits on loan-to-value and debt-to-income ratios were tightened repeatedly, particularly in designated speculation zones in the capital region, which further raised the up-front cash required of first-time buyers [27].",
        "Housing supply in Korean cities is shaped heavily by the public sector. Since the 1980s the government has designated large greenfield sites for public housing land development, in which the Korea Land and Housing Corporation (LH) assembles land, provides infrastructure and sells serviced plots to builders. The second-generation new towns around Seoul — including Pangyo, Dongtan, Gwanggyo, Gimpo Hangang and Paju Unjeong — were designated between 2001 and 2008 and delivered most of their housing between 2008 and 2016; comparable but smaller projects were developed around regional cities. Because designation, land assembly and construction take between five and ten years, the timing of completions within a metropolitan area is largely determined by decisions taken long before. We use this feature in our identification strategy.",
        "Family policy has expanded substantially over the same period. Free childcare for children aged 0 to 5 was introduced in stages and became universal in 2013; a universal child allowance was introduced in 2018; and parental leave benefits were raised several times. Housing policy has also been targeted at young families: since 2008 a share of new public and private housing has been reserved for newlyweds under the special supply scheme, and subsidised loans are available to newlywed and young households. Most of these measures are national, so their average effects are absorbed by the year fixed effects in our empirical analysis; we control for metropolitan differences in childcare supply in Section 9.",
      ],
    },
    {
      id: "literature",
      heading: "3. Related Literature",
      paragraphs: [
        "In the classic economic model of fertility, children are durable consumption goods whose demand depends on income and on their price, including the cost of the space needed to raise them [3][4]. Housing affects fertility through two opposing channels. For renters and prospective buyers, higher house prices raise the price of children, because larger families require more space, and so reduce fertility. For existing owners, higher house prices increase wealth and, if children are normal goods, raise fertility. Empirical work on income effects finds that children are normal goods in most settings, although the magnitude of the response varies widely [8][9][10][11].",
        "Two influential studies for the United States distinguish these channels. Dettling and Kearney {1} show that an increase in metropolitan house prices raises births among homeowners and reduces births among non-owners, with a net negative effect at the metropolitan level that is small in magnitude. Lovenheim and Mumford {2} find that increases in housing wealth raise the probability of having a child among owners. Mulder {7} reviews evidence from Europe showing that access to homeownership and the timing of family formation are closely linked, especially where mortgage markets are thin. Housing wealth also shapes other household decisions such as portfolio choice and borrowing [23][25]. Our setting differs in that the up-front costs of both owning and renting rise with house prices, so the wealth channel is weaker for the young households who account for most births.",
        "A broader literature studies the economic determinants of low fertility. Fertility responds to labour-market conditions and recessions [13][24], to gender roles in the household and to the division of childcare [12], and to the earnings losses that mothers experience after childbirth [18]. Evidence in this journal shows that Korean mothers face earnings penalties of about two-thirds of pre-birth earnings several years after a first birth [26], which raises the opportunity cost of children. Studies of explicit pro-natal policies find modest positive effects of cash incentives and parental leave on fertility [15][16][17]. For Korea, Anderson and Kohler {14} emphasise the role of intense educational competition in raising the cost of children. We add a causal estimate of the role of housing costs, a determinant that is frequently discussed but rarely identified for East Asia.",
        "Methodologically, we build on studies that use the geography of housing supply to generate exogenous variation in house prices [5][6]. Like shift-share designs, our instruments combine a common shock with predetermined local exposure, and we follow recent guidance on assessing the validity of the exposure shares [19]. Because our panel has only 14 metropolitan areas, we pay particular attention to inference with few clusters [20][21].",
      ],
    },
    {
      id: "framework",
      heading: "4. Conceptual Framework and Hypotheses",
      paragraphs: [
        "Consider a young couple deciding whether and when to have a child. Having a child requires housing of a minimum size, which must be secured either by purchase or by a jeonse deposit; both costs are proportional to the local house price. The couple finances the housing cost from accumulated savings, parental transfers and borrowing subject to loan-to-value limits. When the house price rises relative to income, the couple needs to save for longer before it can secure suitable housing, and some couples may conclude that they cannot afford it at all within their fertile years. A higher PIR therefore delays family formation and may reduce completed fertility.",
        "Owners face an offsetting wealth effect, but in Korea the households that are most likely to have a first child — those in their late twenties and early thirties — are mostly not yet owners: in our data only about 30 percent of household heads aged 25 to 34 own their home. Moreover, the large down-payments required by macroprudential rules make housing wealth relatively illiquid. We therefore expect the net effect of higher prices on fertility to be negative and to be driven by the price channel.",
        "The framework yields four hypotheses. H1: an increase in the PIR reduces the fertility rate, with an effect that builds over several years because marriage and conception take time. H2: the effect is concentrated among women aged 25 to 34, who are at the stage of household formation and are most exposed to housing costs; if the effect reflects postponement rather than forgone births, it should be partly offset by higher fertility at older ages. H3: the effect operates mainly through marriage and first births rather than through higher-order births, because couples with a first child are more likely to have already secured housing. H4: the effect is larger in metropolitan areas where a greater share of young households rent and therefore face the full increase in housing costs.",
        "These hypotheses also clarify what our estimates do and do not capture. We estimate the effect of a change in local affordability holding national conditions fixed. A nationwide rise in house prices may have additional effects, for example through changes in social norms or expectations about the future, that cannot be identified with metropolitan variation. Our estimates are therefore best interpreted as the local, partial-equilibrium effect of affordability.",
      ],
    },
    {
      id: "data",
      heading: "5. Data",
      paragraphs: [
        "We construct an annual panel of 14 metropolitan areas, defined as functional urban regions that combine core cities with the surrounding commuting zones, following the commuting-based delineation used by Statistics Korea. The capital region is divided into Seoul, Incheon and two Gyeonggi areas (south and north), and Daejeon is combined with Sejong, which was carved out of surrounding districts in 2012. The 14 areas account for about 78 percent of the national population and 79 percent of births.",
      ],
      subsections: [
        {
          id: "data-fertility",
          heading: "5.1 Fertility and Population",
          paragraphs: [
            "Births by mother's age, birth order and municipality of residence come from Statistics Korea's vital statistics registers, which cover all births. Combining them with resident registration population counts by age and sex, we compute the total fertility rate and age-specific fertility rates for five-year age groups for each metropolitan area and year. Annual data are available for 2005–2021; for 2022 we use the monthly provisional birth registrations and resident population counts available at the time of writing to construct the most recent observations of births and population, which enter the analysis of the leads and placebo outcomes. We also obtain marriages by municipality and the mean age of mothers at first birth.",
            "Fertility fell in every metropolitan area over the sample period, but at different rates. Table 1 shows that the TFR fell from 0.92 to 0.63 in Seoul, a decline of 32 percent, while in Busan, which started from an even lower level, it fell by 17 percent. Across metropolitan areas the average TFR fell from 1.11 in 2005 to 0.85 in 2021.",
          ],
        },
        {
          id: "data-housing",
          heading: "5.2 Housing Affordability",
          paragraphs: [
            "Our measure of affordability is the ratio of the median apartment transaction price to median annual household income. Apartment prices come from the KB Kookmin Bank housing price survey, which reports median prices by municipality, and household income from Statistics Korea's household income surveys, re-weighted to the metropolitan areas. We average monthly prices within each year. Because the PIR is a ratio, it captures changes in prices relative to the resources of local households, which is the relevant concept for the couple's decision described in Section 4.",
            "The average PIR rose from 4.85 in 2005 to 8.02 in 2021. As Table 1 shows, the increase was largest in Seoul, where the ratio more than doubled from 7.9 to 17.8, and in the Gyeonggi and Daejeon–Sejong areas; it was smallest in Pohang, Ulsan and Changwon, where industrial restructuring in shipbuilding and steel depressed local demand in the late 2010s. We also construct alternative affordability measures based on jeonse deposits and on price-to-income ratios for small apartments, which we use in Section 9.",
          ],
          tables: [
            {
              id: "table-1",
              caption: "Table 1. Fertility and housing affordability by metropolitan area, 2005 and 2021",
              columns: ["Metropolitan area", "TFR 2005", "TFR 2021", "PIR 2005", "PIR 2021"],
              rows: [
                ["Seoul", "0.92", "0.63", "7.9", "17.8"],
                ["Incheon", "1.07", "0.78", "5.6", "9.4"],
                ["Gyeonggi South", "1.19", "0.86", "6.4", "11.8"],
                ["Gyeonggi North", "1.15", "0.82", "5.8", "10.1"],
                ["Busan", "0.88", "0.73", "5.1", "8.6"],
                ["Daegu", "1.00", "0.78", "4.9", "8.2"],
                ["Gwangju", "1.10", "0.90", "3.9", "5.9"],
                ["Daejeon–Sejong", "1.11", "0.88", "4.6", "8.9"],
                ["Ulsan", "1.18", "0.94", "4.4", "5.8"],
                ["Changwon", "1.21", "0.90", "4.5", "5.6"],
                ["Cheongju", "1.17", "0.92", "3.8", "5.4"],
                ["Jeonju", "1.10", "0.85", "3.6", "4.9"],
                ["Cheonan–Asan", "1.30", "1.01", "3.9", "5.5"],
                ["Pohang", "1.20", "0.92", "3.5", "4.4"],
                ["Mean (unweighted)", "1.11", "0.85", "4.85", "8.02"],
              ],
              note: "Note: TFR is the total fertility rate. PIR is the ratio of the median apartment price to median annual household income. Sources: Statistics Korea vital statistics and household income surveys; KB Kookmin Bank housing price survey.",
            },
          ],
        },
        {
          id: "data-supply",
          heading: "5.3 Supply Shocks and Controls",
          paragraphs: [
            "We compile completions of housing units in public housing land development projects by metropolitan area and year from Ministry of Land, Infrastructure and Transport statistics and LH project records, together with the date on which each project was designated. For our first instrument we keep only completions in projects designated at least five years earlier, and we express them per 100 existing households. Completions in such projects averaged 0.42 units per 100 households per year, with large spikes when second-generation new towns came on stream. For our second instrument we measure the share of land within 30 kilometres of each metropolitan core that was undevelopable in 2000 because of steep slopes, water bodies or greenbelt designation, following the approach of Saiz {5}.",
            "Control variables include the employment rate and average wages of the population aged 25 to 54, the female employment rate, the share of the population aged 25 to 34, the number of childcare places per 100 children aged 0 to 5, and the share of employment in manufacturing. All are measured at the metropolitan level from Statistics Korea sources.",
          ],
        },
      ],
    },
    {
      id: "strategy",
      heading: "6. Empirical Strategy",
      paragraphs: [
        "Because fertility responds to housing costs with a lag, we estimate the dynamic effect of affordability using local projections [28]. For each horizon h = 0, …, 5 we estimate ln F_m,t+h − ln F_m,t−1 = β_h·ln PIR_mt + X_mt·γ_h + α_m + δ_t + ε_mt, where F_mt is the TFR of metropolitan area m in year t, X_mt are the controls described in Section 5.3, α_m are metropolitan fixed effects and δ_t are year fixed effects. The coefficient β_h is the cumulative percentage change in the fertility rate h years after a one-log-point change in the PIR. Our headline estimate is β_5, the effect over the subsequent five years. Because the year fixed effects absorb national trends in fertility and in house prices, including the effects of national family policy, macroprudential regulation and monetary policy, β_h is identified from within-city deviations of affordability from the national trend.",
      ],
      subsections: [
        {
          id: "instruments",
          heading: "6.1 Instruments",
          paragraphs: [
            "Within-city movements in the PIR may still reflect local demand shocks that also affect fertility. A local boom in high-paying employment, for example, raises both house prices and the incomes of young couples, biasing OLS estimates towards zero; a local influx of young single migrants raises demand for housing while lowering measured fertility, biasing them away from zero. We therefore instrument ln PIR_mt with two measures of exogenous supply shocks.",
            "The first is the cumulative number of units completed over the previous three years in public housing land development projects designated at least five years earlier, per 100 households. Designation decisions were taken on the basis of national housing targets and land availability years before completion, and construction lags varied for reasons — litigation over land compensation, archaeological surveys, the restructuring of LH in 2009 — unrelated to subsequent local fertility. Large completions increase the housing stock and lower prices relative to income. The second instrument interacts the undevelopable land share with the national average mortgage rate: when national rates fall, housing demand rises everywhere, but prices rise more in metropolitan areas where supply is inelastic [5][6]. The undevelopable land share is fixed before the sample, and the national mortgage rate is determined by monetary policy and global financial conditions.",
            "Table 2 reports the first stage. Completions of 1 additional unit per 100 households over three years reduce the PIR by 2.1 percent, and a 1 percentage point fall in the national mortgage rate raises the PIR by 3.4 percent more in a metropolitan area with an undevelopable land share one standard deviation above the mean. The Kleibergen–Paap F-statistic is 23.8, above the Stock–Yogo critical values for 10 percent maximal IV size [22]. Column 2 shows that the instruments do not predict changes in fertility over the three years before the supply shock, and column 3 shows that they are unrelated to the share of the population aged 25 to 34, which would be the case if supply shocks induced selective migration of young adults.",
          ],
          tables: [
            {
              id: "table-2",
              caption: "Table 2. First stage and instrument validity",
              columns: ["", "(1) ln PIR", "(2) Placebo: Δ ln TFR, t−3 to t−1", "(3) Placebo: share aged 25–34"],
              rows: [
                ["Completions in projects designated ≥5 years earlier (per 100 households)", "−0.021***", "0.001", "0.0002"],
                ["", "(0.005)", "(0.003)", "(0.0004)"],
                ["Undevelopable land share × national mortgage rate", "−0.034***", "−0.002", "0.0003"],
                ["", "(0.009)", "(0.006)", "(0.0005)"],
                ["Kleibergen–Paap F-statistic", "23.8", "", ""],
                ["Controls", "Yes", "Yes", "Yes"],
                ["Metropolitan and year fixed effects", "Yes", "Yes", "Yes"],
                ["Observations", "238", "196", "238"],
              ],
              note: "Note: Undevelopable land share is standardised to mean zero and unit standard deviation. Standard errors clustered by metropolitan area in parentheses. *** p < 0.01.",
            },
          ],
        },
        {
          id: "inference",
          heading: "6.2 Inference and Weighting",
          paragraphs: [
            "With 14 metropolitan areas, conventional cluster-robust standard errors may understate uncertainty [20]. We report standard errors clustered by metropolitan area and, for our main estimates, p-values from the wild cluster bootstrap with Webb weights [21]. Regressions are weighted by the number of women aged 15 to 49 in 2005, so that the estimates represent the average woman rather than the average city; unweighted estimates are reported in Section 9. Because the outcome at horizon h requires data up to t + h, the number of observations falls with the horizon, from 238 at h = 0 to 154 at h = 5 (base years 2006–2016).",
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
          id: "baseline",
          heading: "7.1 Baseline Estimates",
          paragraphs: [
            "Table 3 reports the five-year cumulative effect of affordability on fertility. In the OLS specification with metropolitan and year fixed effects (column 1), a one-log-point increase in the PIR is associated with a 14.2 percent decline in the TFR over the following five years; equivalently, a 10 percent increase is associated with a 1.4 percent decline. The IV estimate in column 2 is substantially larger: a 10 percent increase in the PIR reduces the fertility rate by 2.4 percent over the subsequent five years. The estimate is statistically significant at the 1 percent level with conventional clustered standard errors and has a wild cluster bootstrap p-value of 0.008.",
            "Adding time-varying controls for labour-market conditions, childcare supply and the age structure of the population (column 3) leaves the estimate essentially unchanged. Allowing for metropolitan-specific linear trends (column 4) reduces it slightly, to 2.2 percent, and increases the standard error, but it remains significant. The IV estimate is about 40 percent larger in magnitude than the OLS estimate, consistent with local labour-demand shocks that raise both house prices and the incomes of young adults. We return to this interpretation in Section 8.",
            "To put the magnitude in context, the average metropolitan PIR rose by about 50 log points between 2005 and 2021. If that increase had occurred in a single metropolitan area relative to the rest of the country, our estimate implies a fertility decline of about 12 percent over the following five years. The estimate is larger than the net effect of house prices on births found for US metropolitan areas by Dettling and Kearney {1}, which is consistent with the lower homeownership rate among young Korean adults and with the importance of up-front housing costs in Korean marriage decisions.",
          ],
          tables: [
            {
              id: "table-3",
              caption: "Table 3. Housing affordability and the fertility rate: five-year cumulative effects",
              columns: ["", "(1) OLS", "(2) IV", "(3) IV + controls", "(4) IV + metro trends"],
              rows: [
                ["ln PIR", "−0.142***", "−0.241***", "−0.236***", "−0.219**"],
                ["", "(0.051)", "(0.072)", "(0.075)", "(0.088)"],
                ["Wild cluster bootstrap p-value", "0.024", "0.008", "0.011", "0.039"],
                ["Effect of 10% increase in PIR (%)", "−1.4", "−2.4", "−2.4", "−2.2"],
                ["Controls", "No", "No", "Yes", "Yes"],
                ["Metropolitan and year fixed effects", "Yes", "Yes", "Yes", "Yes"],
                ["Kleibergen–Paap F-statistic", "", "23.8", "22.6", "17.9"],
                ["Observations", "154", "154", "154", "154"],
              ],
              note: "Note: The dependent variable is ln TFR(t+5) − ln TFR(t−1). Standard errors clustered by metropolitan area in parentheses; bootstrap p-values use 9,999 replications with Webb weights. Regressions are weighted by the number of women aged 15–49 in 2005. ** p < 0.05, *** p < 0.01.",
            },
          ],
        },
        {
          id: "dynamics",
          heading: "7.2 Dynamics",
          paragraphs: [
            "Figure 1 plots the cumulative IV estimates of a 10 percent increase in the PIR for horizons from three years before to five years after the change. The coefficients for the pre-period horizons, obtained by replacing the outcome with fertility changes over earlier windows, are small and statistically insignificant, which supports the assumption that supply-driven changes in affordability are not anticipated by, or correlated with, pre-existing fertility trends. After the change in affordability, the fertility response builds steadily: the effect is −0.3 percent in the same year, −1.2 percent after two years and −2.4 percent after five years.",
            "The gradual build-up is what one would expect if housing costs affect fertility mainly by delaying marriage and the formation of new households, rather than by changing the behaviour of couples who are already trying to conceive. Births in a given year are conceived in the previous year, and most first births in Korea occur within two years of marriage, so a change in marriage decisions takes two to three years to be fully reflected in births. The effect has not clearly levelled off by the fifth year; we cannot estimate longer horizons with precision because the panel becomes too short.",
          ],
          figures: [
            {
              id: "figure-1",
              caption: "Figure 1. Cumulative effect of a 10 percent increase in the house-price-to-income ratio on the fertility rate",
              kind: "line",
              xLabels: ["−3", "−2", "−1", "0", "1", "2", "3", "4", "5"],
              yLabel: "Percent change in TFR",
              series: [
                {
                  name: "IV estimate",
                  values: [0.2, -0.1, 0, -0.3, -0.7, -1.2, -1.7, -2.1, -2.4],
                  lower: [-0.6, -0.8, 0, -0.9, -1.5, -2.1, -2.8, -3.4, -3.8],
                  upper: [1.0, 0.6, 0, 0.3, 0.1, -0.3, -0.6, -0.8, -1.0],
                },
              ],
              marker: 2,
              note: "Note: Local-projection IV estimates of β_h × ln(1.1) with 95 percent confidence intervals based on standard errors clustered by metropolitan area. Horizon −1 is the reference period. Horizons are in years relative to the change in affordability.",
            },
          ],
        },
        {
          id: "age",
          heading: "7.3 Effects by Age Group",
          paragraphs: [
            "Table 4 reports five-year cumulative effects on age-specific fertility rates. The effects are concentrated among women aged 25 to 34. A 10 percent increase in the PIR reduces fertility by 3.6 percent at ages 25 to 29 and by 3.1 percent at ages 30 to 34, both significant at the 1 percent level. The effects at ages 15 to 24 and 35 to 39 are small and imprecisely estimated, and the effect at ages 40 to 49 is close to zero. Because women aged 25 to 34 accounted for about two-thirds of births over the sample period, the age-specific estimates, weighted by each group's share of births, aggregate to a reduction of about 2.4 percent, matching the effect on the TFR.",
            "Figure 2 displays the age profile. The absence of a positive effect at older ages is informative. If higher housing costs merely postponed births, we would expect fertility at ages 35 to 39 to rise five years after the shock as delayed births were realised. The point estimate for this group is instead slightly negative. Given that our horizon is limited to five years, we cannot rule out some catch-up later, but the evidence suggests that a substantial part of the effect represents births forgone rather than births delayed, consistent with the very low completed fertility of recent Korean cohorts.",
          ],
          tables: [
            {
              id: "table-4",
              caption: "Table 4. Five-year effects of a 10 percent increase in the PIR on age-specific fertility rates (IV)",
              columns: ["Mother's age", "Effect (%)", "Std. error", "Share of births, 2005–2021", "Contribution to TFR effect (pp)"],
              rows: [
                ["15–24", "−0.9", "(0.8)", "0.03", "−0.03"],
                ["25–29", "−3.6***", "(1.1)", "0.21", "−0.76"],
                ["30–34", "−3.1***", "(0.9)", "0.47", "−1.46"],
                ["35–39", "−0.8", "(0.7)", "0.25", "−0.20"],
                ["40–49", "0.4", "(0.9)", "0.04", "0.02"],
                ["Total (weighted sum)", "", "", "1.00", "−2.43"],
              ],
              note: "Note: Each row is a separate IV regression with the specification of Table 3, column 3, where the dependent variable is the five-year change in the log age-specific fertility rate. Contributions are effects multiplied by the share of births. Standard errors clustered by metropolitan area. *** p < 0.01.",
            },
          ],
          figures: [
            {
              id: "figure-2",
              caption: "Figure 2. Five-year effect of a 10 percent increase in the PIR by mother's age group",
              kind: "bar",
              xLabels: ["15–24", "25–29", "30–34", "35–39", "40–49"],
              yLabel: "Percent change in fertility rate",
              series: [
                {
                  name: "IV estimate",
                  values: [-0.9, -3.6, -3.1, -0.8, 0.4],
                  lower: [-2.5, -5.8, -4.9, -2.2, -1.4],
                  upper: [0.7, -1.4, -1.3, 0.6, 2.2],
                },
              ],
              note: "Note: Estimates from Table 4 with 95 percent confidence intervals.",
            },
          ],
        },
      ],
    },
    {
      id: "mechanisms",
      heading: "8. Mechanisms and Heterogeneity",
      paragraphs: [
        "Table 5 examines the channels through which affordability affects fertility. Column 1 shows that a 10 percent increase in the PIR reduces the crude marriage rate by 2.9 percent over five years. Because more than 95 percent of Korean births occur within marriage, a decline in marriage translates almost one for one into a decline in first births. Consistent with H3, the effect on first births (−3.1 percent) is about twice as large as the effect on second and higher-order births (−1.6 percent), and the mean age of mothers at first birth rises by about 0.08 years. Couples who already have a child have typically secured housing of adequate size, so they are less exposed to subsequent price increases, although the smaller but significant effect on higher-order births suggests that the cost of moving to a larger home also matters.",
        "A concern is that supply shocks change fertility rates by changing the composition of the population rather than the behaviour of residents. Large housing completions might attract young married couples from neighbouring areas, raising measured fertility in the receiving area without changing national births. Column 5 shows that the net migration rate of 25- to 34-year-olds does not respond significantly to instrumented affordability, and Table 2 showed that the instruments do not predict the share of the population in this age group. Because our metropolitan areas are defined to include commuting zones, most residential moves associated with new housing occur within, rather than between, areas.",
        "Heterogeneity across metropolitan areas supports the price channel. We split the sample at the median share of household heads aged 25 to 39 who rent. In high-renter areas, a 10 percent increase in the PIR reduces fertility by 3.0 percent over five years, compared with 1.7 percent in low-renter areas, as predicted by H4. The effect is also larger in areas where the ratio of jeonse deposits to sale prices is high, so that higher prices translate more directly into higher up-front costs for renters. We find no evidence of a positive wealth effect at the metropolitan level, although our aggregate data cannot distinguish owners from renters as Dettling and Kearney {1} and Lovenheim and Mumford {2} do.",
        "The gap between the OLS and IV estimates is informative about the sources of variation in house prices. When we regress the PIR on local wages and employment of 25- to 54-year-olds, the residual PIR yields OLS estimates close to the IV estimates, suggesting that the OLS estimates are attenuated mainly because demand-driven price increases are accompanied by income gains that partially offset the affordability effect. This interpretation is consistent with evidence that fertility responds positively to income shocks [8][10][11].",
      ],
      tables: [
        {
          id: "table-5",
          caption: "Table 5. Mechanisms: effects of a 10 percent increase in the PIR over five years (IV)",
          columns: ["Outcome", "(1) Marriage rate (%)", "(2) First births (%)", "(3) Second and higher births (%)", "(4) Mean age at first birth (years)", "(5) Net migration aged 25–34 (pp)"],
          rows: [
            ["Effect of 10% increase in PIR", "−2.9***", "−3.1***", "−1.6**", "0.08**", "−0.06"],
            ["", "(0.9)", "(1.0)", "(0.7)", "(0.03)", "(0.11)"],
            ["Mean of outcome, 2005", "6.4 per 1,000", "", "", "30.2", "0.3"],
            ["Observations", "154", "154", "154", "154", "154"],
          ],
          note: "Note: Specification as in Table 3, column 3. Columns 1–3 report percent changes over five years; column 4 reports the change in years; column 5 reports the change in the annual net migration rate in percentage points. Standard errors clustered by metropolitan area in parentheses. ** p < 0.05, *** p < 0.01.",
        },
      ],
    },
    {
      id: "robustness",
      heading: "9. Robustness",
      paragraphs: [
        "Table 6 reports a series of robustness checks for the five-year effect. Rows 2 and 3 replace the PIR with alternative measures of affordability: the ratio of median jeonse deposits to income and the price-to-income ratio for apartments of 60 square metres or less, the size typically purchased by first-time buyers. Both yield effects of similar magnitude, −2.6 and −2.7 percent respectively. Row 4 uses the general fertility rate instead of the TFR, which gives a slightly larger effect because it also reflects changes in the age structure within the fertile population.",
        "Rows 5 and 6 drop the two metropolitan areas with the most distinctive trajectories. Excluding Seoul, where the PIR rose most and fertility is lowest, gives an effect of −2.1 percent; excluding Daejeon–Sejong, where the relocation of government ministries to Sejong from 2012 brought an influx of young public-sector families, gives −2.5 percent. Row 7 drops each metropolitan area in turn and reports the range of estimates, from −2.0 to −2.8 percent. No single area drives the results.",
        "Rows 8 to 10 address other concerns. Using each instrument separately gives similar estimates, and the overidentification test does not reject the equality of the two (Hansen J p-value 0.47); this is reassuring because the instruments rely on different sources of variation, one on the quantity of new supply and the other on the elasticity of existing supply [19]. LIML estimates, which are less biased with moderately strong instruments, are almost identical to the 2SLS estimates. Unweighted estimates are slightly smaller. Finally, controlling for metropolitan-specific changes in childcare places and in the female employment rate — both of which might be correlated with housing development — has no material effect.",
      ],
      tables: [
        {
          id: "table-6",
          caption: "Table 6. Robustness of the five-year effect of a 10 percent increase in affordability pressure",
          columns: ["Specification", "Effect (%)", "Std. error", "Observations"],
          rows: [
            ["1. Baseline (Table 3, column 3)", "−2.4***", "(0.7)", "154"],
            ["2. Jeonse-deposit-to-income ratio", "−2.6***", "(0.8)", "154"],
            ["3. PIR for apartments ≤ 60 m²", "−2.7***", "(0.8)", "154"],
            ["4. General fertility rate as outcome", "−2.8***", "(0.9)", "154"],
            ["5. Excluding Seoul", "−2.1***", "(0.7)", "143"],
            ["6. Excluding Daejeon–Sejong", "−2.5***", "(0.8)", "143"],
            ["7. Drop one area at a time (range)", "−2.0 to −2.8", "", "143"],
            ["8. Completions instrument only", "−2.2**", "(0.9)", "154"],
            ["9. Land-share × mortgage-rate instrument only", "−2.7**", "(1.1)", "154"],
            ["10. LIML", "−2.5***", "(0.8)", "154"],
            ["11. Unweighted", "−2.1**", "(0.8)", "154"],
            ["12. Controls for childcare places and female employment trends", "−2.3***", "(0.7)", "154"],
          ],
          note: "Note: Each row reports the IV estimate of the five-year percent change in the TFR (row 4: general fertility rate) associated with a 10 percent increase in the affordability measure. Standard errors clustered by metropolitan area in parentheses. ** p < 0.05, *** p < 0.01.",
        },
      ],
    },
    {
      id: "discussion",
      heading: "10. Discussion and Policy Implications",
      paragraphs: [
        "How much of Korea's fertility decline can be attributed to housing costs? Because our identification relies on within-city variation, we cannot estimate the effect of the nationwide increase in house prices, which may have been larger or smaller than the sum of local effects. We can, however, ask how much of the variation in fertility declines across metropolitan areas is accounted for by differences in the increase in affordability pressure. Multiplying the change in log PIR between 2005 and 2016 in each area by our five-year estimate gives a predicted change in log fertility between 2010 and 2021 relative to the national trend. The predicted changes account for 21 percent of the cross-metropolitan variance in actual fertility-rate declines: approximately one-fifth. The remaining four-fifths reflect other factors, including differences in labour markets, educational competition and migration.",
        "This share is large enough to make housing policy relevant to demographic policy but small enough to caution against viewing it as a solution in itself. Policies that lower the cost of housing for young couples — expanding supply in high-demand areas, providing long-term public rental housing of adequate size, and easing the up-front costs of jeonse deposits and first purchases — are likely to raise fertility at the margin. Our estimates imply that a supply expansion that lowered the PIR in the capital region by 10 percent would raise births there by about 2.4 percent within five years, or roughly 4,000 births a year at recent levels. This is comparable to the estimated effects of substantial cash incentives in other countries [15][17], at a fiscal cost that depends on how the additional supply is delivered.",
        "Two features of our results bear on policy design. First, the effect is concentrated among women aged 25 to 34 and operates through marriage and first births. Targeted housing support for newlyweds, such as the special supply scheme, reaches couples after they have married; policies that lower housing costs for unmarried young adults may be more effective in encouraging household formation. Second, the absence of catch-up at older ages suggests that delays induced by housing costs are partly permanent, so the timing of support matters: help that arrives in a couple's late thirties may come too late to affect completed fertility.",
        "Our findings also suggest that the interaction between housing and labour markets deserves attention. Local demand shocks that raise both incomes and house prices have smaller net effects on fertility than supply-driven price increases, because income gains offset higher costs. The concentration of high-paying employment in the capital region, coupled with constrained housing supply, therefore generates a particularly unfavourable combination for young families. Regional development policies that spread employment opportunities to areas with elastic housing supply may have demographic benefits in addition to their economic rationale.",
      ],
    },
    {
      id: "conclusion",
      heading: "11. Conclusion",
      paragraphs: [
        "We have estimated the effect of housing affordability on fertility in 14 Korean metropolitan areas over 2005–2022, exploiting within-city variation in housing prices driven by exogenous supply shocks. A 10 percent increase in the house-price-to-income ratio reduces the fertility rate by 2.4 percent over the subsequent five years. The effect builds gradually, operates through marriage and first births, and is concentrated among women aged 25 to 34, with little evidence of catch-up at older ages. It is larger where more young households rent and is robust to alternative affordability measures, samples and estimators. Differences in affordability explain approximately one-fifth of the cross-metropolitan variation in fertility-rate declines.",
        "Several limitations point to directions for future research. Our aggregate data cannot distinguish owners from renters or follow individual couples, and microdata linking housing tenure and wealth to fertility histories would allow sharper tests of the price and wealth channels. Our horizon of five years is too short to measure effects on completed fertility. And our design identifies local effects, leaving open the question of how nationwide housing booms affect fertility through expectations and norms. Despite these limitations, the evidence indicates that the cost of housing is a quantitatively meaningful barrier to family formation in Korea and that housing supply policy is, in part, demographic policy.",
      ],
    },
    {
      id: "appendix",
      heading: "Appendix A. Data Construction",
      paragraphs: [
        "Metropolitan areas. We assign each municipality (si, gun or gu) to one of the 14 metropolitan areas on the basis of the 2010 commuting matrix from the population census, using a threshold of 10 percent of employed residents commuting to the core city. Boundaries are held fixed throughout the sample. Sejong, created in 2012 from parts of Yeongi county and neighbouring districts, is combined with Daejeon in all years, and births and population for the constituent districts are aggregated consistently before and after 2012.",
        "Fertility rates. Age-specific fertility rates are births to women in each age group divided by the mid-year female resident population in that group. The total fertility rate is five times the sum of five-year age-specific rates for ages 15 to 49. Births are assigned to the mother's municipality of residence at registration. Provisional monthly registrations for 2022 are scaled by the ratio of final to provisional counts in previous years.",
        "Affordability and instruments. The PIR divides the annual average of monthly median apartment prices by median annual household disposable income; incomes for metropolitan areas outside the provincial capitals are imputed from provincial survey estimates using municipal earnings data from employment insurance records. Completions are counted in the year of occupancy approval. The undevelopable land share is computed from 2000 land-cover and greenbelt maps within a 30-kilometre radius of the central business district of each core city, and the national mortgage rate is the Bank of Korea's annual average rate on new household mortgage loans.",
      ],
    },
  ],
};
