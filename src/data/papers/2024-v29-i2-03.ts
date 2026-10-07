// Vol. 29, No. 2 (April 2024) — full text for an article defined in journal.ts (sample content).
import type { FulltextSpec } from "../paper-spec";

export const fulltext: FulltextSpec = {
  id: "2024-v29-i2-03",
  acknowledgments:
    "We thank seminar participants at Hanyang University, Hitotsubashi University and the National Pension Research Institute, two anonymous referees and an Associate Editor for helpful comments. As the first author is Editor-in-Chief of the journal, the manuscript was handled entirely by Co-Editor Hyun-Jin Kim and an Associate Editor, without the involvement of the first author in any editorial decision. All errors are our own.",
  dataAvailability:
    "The model is calibrated to publicly available data from Statistics Korea, the Bank of Korea, the National Pension Service and the United Nations World Population Prospects 2022. Household-level moments are computed from the Korean Labor and Income Panel Study, which is available to registered researchers from the Korea Labor Institute. The model code (Fortran and Python) and all calibration inputs are available from the corresponding author.",
  editorialNote:
    "Jae-Hoon Hwang and Keiko Sato build an overlapping-generations model of the National Pension Scheme: under the UN medium-fertility projection the fund is exhausted by 2055, and a package of a 1.5 percentage point contribution increase, a one-year rise in the retirement age and a 10 percent cut in the replacement rate would extend solvency by about 18 years, to 2073, at a welfare cost of up to 1.6 percent of remaining lifetime consumption for cohorts now in middle age.",
  refs: [
    /* 1 */ "Auerbach, A. J., & Kotlikoff, L. J. (1987). Dynamic fiscal policy. Cambridge: Cambridge University Press.",
    /* 2 */ "De Nardi, M., İmrohoroğlu, S., & Sargent, T. J. (1999). Projected U.S. demographics and social security. Review of Economic Dynamics, 2(3), 575–615.",
    /* 3 */ "İmrohoroğlu, A., İmrohoroğlu, S., & Joines, D. H. (1995). A life cycle analysis of social security. Economic Theory, 6(1), 83–114.",
    /* 4 */ "Huggett, M., & Ventura, G. (1999). On the distributional effects of social security reform. Review of Economic Dynamics, 2(3), 498–531.",
    /* 5 */ "Conesa, J. C., & Krueger, D. (1999). Social security reform with heterogeneous agents. Review of Economic Dynamics, 2(4), 757–795.",
    /* 6 */ "Nishiyama, S., & Smetters, K. (2007). Does social security privatization produce efficiency gains? Quarterly Journal of Economics, 122(4), 1677–1719.",
    /* 7 */ "Kitao, S. (2014). Sustainable social security: Four options. Review of Economic Dynamics, 17(4), 756–779.",
    /* 8 */ "Braun, R. A., & Joines, D. H. (2015). The implications of a graying Japan for government policy. Journal of Economic Dynamics and Control, 57, 1–23.",
    /* 9 */ "İmrohoroğlu, S., Kitao, S., & Yamada, T. (2016). Achieving fiscal balance in Japan. International Economic Review, 57(1), 117–154.",
    /* 10 */ "Hansen, G. D., & İmrohoroğlu, S. (2016). Fiscal reform and government debt in Japan: A neoclassical perspective. Review of Economic Dynamics, 21, 201–224.",
    /* 11 */ "Kotlikoff, L. J., Smetters, K., & Walliser, J. (2007). Mitigating America's demographic dilemma by pre-funding social security. Journal of Monetary Economics, 54(2), 247–266.",
    /* 12 */ "Feldstein, M. (1974). Social security, induced retirement, and aggregate capital accumulation. Journal of Political Economy, 82(5), 905–926.",
    /* 13 */ "Diamond, P. A. (1965). National debt in a neoclassical growth model. American Economic Review, 55(5), 1126–1150.",
    /* 14 */ "Samuelson, P. A. (1958). An exact consumption-loan model of interest with or without the social contrivance of money. Journal of Political Economy, 66(6), 467–482.",
    /* 15 */ "Gruber, J., & Wise, D. A. (Eds.). (1999). Social security and retirement around the world. Chicago: University of Chicago Press.",
    /* 16 */ "Gourinchas, P.-O., & Parker, J. A. (2002). Consumption over the life cycle. Econometrica, 70(1), 47–89.",
    /* 17 */ "French, E. (2005). The effects of health, wealth, and wages on labour supply and retirement behaviour. Review of Economic Studies, 72(2), 395–427.",
    /* 18 */ "Chetty, R., Guren, A., Manoli, D., & Weber, A. (2011). Are micro and macro labor supply elasticities consistent? A review of evidence on the intensive and extensive margins. American Economic Review, 101(3), 471–475.",
    /* 19 */ "Krueger, D., & Ludwig, A. (2007). On the consequences of demographic change for rates of returns to capital, and the distribution of wealth and welfare. Journal of Monetary Economics, 54(1), 49–87.",
    /* 20 */ "Attanasio, O., Kitao, S., & Violante, G. L. (2007). Global demographic trends and social security reform. Journal of Monetary Economics, 54(1), 144–198.",
    /* 21 */ "Fehr, H. (2009). Computable stochastic equilibrium models and their use in pension- and ageing research. De Economist, 157(4), 359–416.",
    /* 22 */ "Kitao, S. (2015). Pension reform and individual retirement accounts in Japan. Journal of the Japanese and International Economies, 38, 111–126.",
    /* 23 */ "Gertler, M. (1999). Government debt and social security in a life-cycle economy. Carnegie-Rochester Conference Series on Public Policy, 50, 61–110.",
    /* 24 */ "Breyer, F. (1989). On the intergenerational Pareto efficiency of pay-as-you-go financed pension systems. Journal of Institutional and Theoretical Economics, 145(4), 643–658.",
    /* 25 */ "Mastrobuoni, G. (2009). Labor supply effects of the recent social security benefit cuts: Empirical estimates using cohort discontinuities. Journal of Public Economics, 93(11–12), 1224–1233.",
    /* 26 */ { jer: "2022-v27-i4-02" },
    /* 27 */ "Coile, C., & Gruber, J. (2007). Future social security entitlements and the retirement decision. Review of Economics and Statistics, 89(2), 234–246.",
  ],
  body: [
    {
      id: "introduction",
      heading: "1. Introduction",
      paragraphs: [
        "Korea is ageing faster than any other country in the world. Its total fertility rate fell to 0.78 in 2022, the lowest ever recorded for a national population, while life expectancy at birth has risen above 83 years. According to the United Nations' medium-fertility projection, the ratio of people aged 65 and over to those aged 20–64 will rise from about 25 percent in 2022 to more than 90 percent by 2070. This demographic transformation poses an acute challenge for the National Pension Scheme (NPS), a partially funded defined-benefit system established in 1988 whose fund — one of the largest public pension reserves in the world — is projected to be drawn down as the large baby-boom cohorts retire and the number of contributors shrinks.",
        "This paper develops a dynamic general-equilibrium overlapping-generations (OLG) model calibrated to the Korean economy to evaluate the fiscal sustainability of the NPS under alternative demographic and policy scenarios. The model, in the tradition of {1}, features households who live up to 100 years, choose consumption, saving and labour supply, and face mortality risk and age-specific productivity; competitive firms; and a government that runs the NPS according to its statutory benefit formula and holds the pension fund. Factor prices respond to the changing ratio of capital to labour, so that the model captures the general-equilibrium feedback from ageing and pension reform to wages, interest rates and the returns on the fund.",
        "Under the United Nations medium-fertility projection, we project that the pension fund will peak at around 2040 and be exhausted by 2055, in line with the government's Fifth Actuarial Valuation. After exhaustion, maintaining legislated benefits on a pay-as-you-go basis would require a contribution rate above 26 percent of covered earnings by 2070, nearly three times the current rate of 9 percent. Alternative fertility paths matter less than one might expect for the exhaustion date, because additional births take two decades to enter the labour force, but they matter a great deal for the long-run cost of the system.",
        "We then evaluate parametric reforms. A package combining a 1.5 percentage point increase in the contribution rate, a one-year increase in the normal retirement age and a 10 percent reduction in the replacement rate would extend fund solvency by approximately 18 years, to 2073. The combined effect exceeds the sum of the individual measures because the higher fund balance earns returns that compound over time. The reform package, however, generates sizeable welfare losses for current middle-aged cohorts — up to 1.6 percent of remaining lifetime consumption for those aged 45–49 in 2024 — who pay higher contributions for the rest of their working lives and receive lower benefits, while gains accrue mainly to young and future cohorts who would otherwise face much higher contribution rates after the fund is exhausted.",
        "Our contribution is threefold. First, we provide a quantitative general-equilibrium analysis of the NPS that takes into account the endogenous responses of labour supply, saving and factor prices, which actuarial projections hold fixed. Second, we decompose the effects of individual reform measures and their interactions, showing how the timing of measures shapes both solvency and the intergenerational distribution of costs. Third, we quantify the welfare effects of reform by cohort, making explicit the trade-offs that a politically sustainable reform must navigate.",
        "Section 2 describes the NPS. Section 3 reviews related literature. Section 4 presents the model, Section 5 the calibration and Section 6 the computational approach and policy experiments. Section 7 presents projections and reform results, Section 8 welfare and distributional effects, and Section 9 sensitivity analysis. Section 10 discusses policy implications and Section 11 concludes.",
      ],
    },
    {
      id: "background",
      heading: "2. Institutional Background",
      paragraphs: [
        "The National Pension Scheme was introduced in 1988 for workplaces with ten or more employees and extended to the whole working population by 1999. Contributions are levied at 9 percent of monthly earnings up to a ceiling, shared equally between employer and employee for employees and paid entirely by the self-employed. The contribution rate has remained at 9 percent since 1998, despite repeated proposals to raise it.",
        "Benefits follow a formula that combines a redistributive component based on the average earnings of all insured persons with an earnings-related component based on the individual's own lifetime earnings. The scheme was initially very generous, with a target replacement rate of 70 percent for a worker with average earnings and 40 years of contributions. Reforms in 1998 and 2007 cut the target replacement rate to 60 percent and then to 50 percent in 2008, followed by an annual reduction of 0.5 percentage points until it reaches 40 percent in 2028. The 1998 reform also raised the normal pensionable age from 60 to 65 in steps, which will be completed in 2033. Benefits are indexed to consumer prices after retirement. Earlier work in this journal shows that the 2013 reform of the scheme affected the labour supply of workers near retirement {26}.",
        "Because contributions have long exceeded benefit payments, the NPS has accumulated a fund of about KRW 890 trillion at the end of 2022, roughly 41 percent of GDP. The government's Fifth Actuarial Valuation, released in 2023, projected that the fund would peak in 2040 and be exhausted in 2055, two years earlier than projected in the previous valuation in 2018. The valuation, like earlier ones, relies on actuarial models that take wages, interest rates and labour-force participation as exogenous assumptions. Our model complements this approach by treating these variables as equilibrium outcomes.",
      ],
    },
    {
      id: "literature",
      heading: "3. Related Literature",
      paragraphs: [
        "Our analysis builds on the large literature on the macroeconomics of pay-as-you-go pensions. {14} and {13} established the theoretical framework in which unfunded pensions transfer resources across generations, and {12} argued that social security reduces private saving and the capital stock. {24} showed that a transition from pay-as-you-go to funded pensions cannot make all generations better off without additional distortions, a result that frames the intergenerational trade-offs we quantify. {1} developed the computational overlapping-generations approach we adopt, and subsequent studies introduced idiosyncratic risk and heterogeneity [3][4][5][23].",
        "A second strand evaluates how demographic change affects pension finances and the macroeconomy. {2} show that projected U.S. ageing requires large increases in taxes or cuts in benefits, and that the choice between them has very different welfare consequences across cohorts. {19} and {20} study the effects of ageing on returns to capital and the distribution of welfare in open economies. {11} and {6} analyse the efficiency and distributional effects of pre-funding and privatisation, and {21} surveys the use of computable OLG models in pension research.",
        "Most closely related are studies of Japan, which faces a demographic transition similar to Korea's but two decades further advanced. {7} evaluates four options for making Japanese social security sustainable — raising taxes, cutting benefits, raising the retirement age and means-testing — and finds that raising the retirement age imposes the smallest welfare losses on current cohorts. {8}, {9} and {10} quantify the fiscal adjustment required to stabilise Japanese public debt in the face of ageing, and {22} examines the introduction of individual accounts. We apply these tools to Korea, whose pension system is younger, more heavily funded and faces a steeper demographic decline. Finally, we draw on empirical evidence about how retirement and labour supply respond to pension incentives [15][17][25][27] and about life-cycle consumption [16], which disciplines our calibration.",
      ],
    },
    {
      id: "model",
      heading: "4. The Model",
      paragraphs: [
        "We model a closed economy populated by overlapping generations of households, a representative firm and a government. Time is discrete and each period is one year.",
      ],
      subsections: [
        {
          id: "model-households",
          heading: "4.1 Households",
          paragraphs: [
            "Households enter the economy at age 20 and live at most to age 100. The probability of surviving from age j to j + 1 at date t is s_{j,t}, taken from the projected life tables, and the size of each entering cohort follows the demographic projection. Each household has preferences over consumption c and hours worked h given by Σ_j β^{j−20} (Π_{k<j} s_k) u(c_j, h_j), with u(c, h) = [c^γ (1 − h)^{1−γ}]^{1−σ} / (1 − σ). Households differ by age-specific labour productivity e_j, estimated from the life-cycle earnings profile, and by one of three permanent skill types, which allows the model to capture the redistributive features of the benefit formula.",
            "A household of age j at date t earns w_t e_j h_j, pays the pension contribution τ_t and a labour income tax on earnings below the ceiling, and receives the return r_t on its assets. From the normal retirement age R_t onwards it receives a pension b_{j,t}. Households may continue working after R_t, but the disutility of work rises with age, which, together with declining productivity, generates realistic patterns of labour-force exit. Assets cannot be negative, and the assets of households who die are distributed as lump-sum bequests to the living, consistent with incomplete annuity markets.",
          ],
        },
        {
          id: "model-firms",
          heading: "4.2 Firms and factor markets",
          paragraphs: [
            "A representative firm produces output with the technology Y_t = A_t K_t^α L_t^{1−α}, where L_t is aggregate efficiency units of labour and A_t grows at an exogenous rate. Factor markets are competitive, so that w_t and r_t equal the marginal products of labour and capital net of depreciation. Aggregate capital equals the sum of household assets plus the pension fund, minus government debt. We assume a closed economy as a benchmark because the NPS fund is large relative to domestic capital markets; in Section 9 we show that results are similar in a small-open-economy variant with a fixed world interest rate.",
          ],
        },
        {
          id: "model-government",
          heading: "4.3 Government and the pension scheme",
          paragraphs: [
            "The pension benefit of a household retiring at date t follows the statutory formula: b = ρ_t × (Ā_t + B_i) / 2 × (n_i / 40), where ρ_t is the target replacement rate for a worker with 40 years of contributions, Ā_t is the average covered earnings of all insured persons, B_i is the individual's own career-average covered earnings revalued by wage growth, and n_i is the number of contribution years. Benefits are indexed to prices after retirement. The pension fund evolves as F_{t+1} = (1 + r_t) F_t + τ_t W_t − B_t, where W_t is covered earnings and B_t aggregate benefits. Fund exhaustion occurs in the first year in which F_t would become negative; thereafter, the contribution rate adjusts each year to balance benefits on a pay-as-you-go basis. The rest of the government sector levies labour, capital and consumption taxes to finance exogenous spending and keep public debt at a constant share of GDP.",
          ],
        },
      ],
    },
    {
      id: "calibration",
      heading: "5. Calibration",
      paragraphs: [
        "We calibrate the model to match the Korean economy in 2019, the last year unaffected by the pandemic, and then simulate the transition from that year onwards using demographic projections.",
      ],
      subsections: [
        {
          id: "calib-params",
          heading: "5.1 Parameters",
          paragraphs: [
            "Table 1 lists the parameters. Demographic inputs — fertility, survival probabilities and the resulting cohort sizes — are taken from the United Nations World Population Prospects 2022 medium-fertility variant, under which Korea's total fertility rate recovers only slowly from 0.78 in 2022 to about 1.2 by 2070. Life-cycle productivity profiles by skill type are estimated from the Korean Labor and Income Panel Study. The capital share is set to 0.35 and the depreciation rate to 0.07, consistent with the national accounts. The discount factor is chosen to match a capital-output ratio of 3.2, and the consumption share in utility to match average annual hours worked. Following {18}, we set the risk-aversion parameter so that the implied Frisch elasticity of labour supply is about 0.5. Productivity grows at 1.5 percent per year in the long run, falling gradually from 2.0 percent in the 2020s, in line with the Bank of Korea's estimates of potential growth.",
            "Pension parameters follow current law: a contribution rate of 9 percent, a target replacement rate declining from 44 percent in 2022 to 40 percent in 2028, and a normal retirement age rising from 62 in 2019 to 65 in 2033. The initial fund equals its 2019 value of 36 percent of GDP, and the return on the fund is the equilibrium interest rate plus a premium of 0.8 percentage points reflecting the fund's equity and foreign-asset holdings.",
          ],
          tables: [
            {
              id: "table-1",
              caption: "Table 1. Calibration of the benchmark model",
              columns: ["Parameter", "Description", "Value", "Target or source"],
              rows: [
                ["β", "Discount factor", "0.982", "Capital–output ratio 3.2"],
                ["σ", "Risk aversion", "2.0", "Frisch elasticity ≈ 0.5"],
                ["γ", "Consumption weight in utility", "0.38", "Average hours 0.36 of time endowment"],
                ["α", "Capital share", "0.35", "National accounts"],
                ["δ", "Depreciation rate", "0.07", "National accounts"],
                ["g_A", "Long-run productivity growth", "1.5%", "Bank of Korea potential growth"],
                ["e_j", "Age–productivity profile", "Estimated", "KLIPS earnings by age and skill"],
                ["s_{j,t}", "Survival probabilities", "Projected", "UN WPP 2022, medium variant"],
                ["τ", "Pension contribution rate", "9%", "Current law"],
                ["ρ", "Target replacement rate", "44% → 40% (2028)", "Current law"],
                ["R", "Normal retirement age", "62 → 65 (2033)", "Current law"],
                ["F₀ / Y₀", "Initial fund, 2019", "36%", "National Pension Service"],
                ["Premium", "Fund return over r", "0.8 pp", "NPS fund returns, 2010–2019"],
              ],
              note: "Note: The model is calibrated to 2019. KLIPS is the Korean Labor and Income Panel Study. Hours are expressed as a share of a time endowment of 5,200 hours per year. The fund return premium equals the average excess of the NPS fund's realised annual return over the three-year government bond yield in 2010–2019.",
            },
          ],
        },
        {
          id: "calib-fit",
          heading: "5.2 Model fit",
          paragraphs: [
            "Table 2 compares the model with data. The model matches its targeted moments closely and also performs well on several untargeted moments: the ratio of pension benefits to GDP, the share of contributions in GDP, the age profile of labour-force participation after 60 and the ratio of wealth held by households aged 60 and over to that of households aged 40–59. The model somewhat underpredicts labour-force participation at ages 65–69, reflecting the high rate of self-employment and informal work among older Koreans, which we do not model explicitly. Its projected exhaustion date under baseline assumptions coincides with that of the Fifth Actuarial Valuation, even though the projection is not a calibration target.",
          ],
          tables: [
            {
              id: "table-2",
              caption: "Table 2. Targeted and untargeted moments, model and data (2019)",
              columns: ["Moment", "Data", "Model", "Targeted"],
              rows: [
                ["Capital–output ratio", "3.2", "3.2", "Yes"],
                ["Average hours (share of endowment)", "0.36", "0.36", "Yes"],
                ["Pension fund / GDP (%)", "36.4", "36.4", "Yes"],
                ["Contributions / GDP (%)", "2.4", "2.5", "No"],
                ["Pension benefits / GDP (%)", "1.2", "1.1", "No"],
                ["Labour-force participation, ages 60–64 (%)", "61.5", "63.0", "No"],
                ["Labour-force participation, ages 65–69 (%)", "51.0", "44.8", "No"],
                ["Wealth of 60+ relative to 40–59", "0.87", "0.82", "No"],
                ["Real interest rate (%)", "1.6", "1.9", "No"],
                ["Fund exhaustion year (Fifth Actuarial Valuation)", "2055", "2055", "No"],
              ],
              note: "Note: Data from the Bank of Korea national accounts, Statistics Korea's Economically Active Population Survey, the National Pension Service, the Survey of Household Finances and Living Conditions and the Fifth National Pension Actuarial Valuation (2023). The real interest rate is the three-year government bond yield minus CPI inflation, averaged over 2015–2019.",
            },
          ],
        },
      ],
    },
    {
      id: "strategy",
      heading: "6. Computation and Policy Experiments",
      paragraphs: [
        "We compute the initial steady state consistent with the 2019 population structure, then solve for the perfect-foresight transition path from 2019 to 2200, by which date the population and the economy have converged to a new balanced-growth path. The algorithm iterates on the paths of the interest rate, wage, bequests, the average covered earnings that enter the benefit formula and the pay-as-you-go contribution rate after fund exhaustion, until all markets clear and the government budget constraints are satisfied in every year. Household problems are solved by backward induction on an asset grid with endogenous gridpoints.",
        "We consider two sets of experiments. The first varies demographic assumptions under current law, comparing the UN medium, low and high fertility variants and a scenario with faster improvements in longevity. The second introduces parametric reforms, announced in 2024 and implemented from 2025 under the medium-fertility projection: (i) an increase in the contribution rate of 1.5 percentage points, from 9 to 10.5 percent, phased in over three years; (ii) a one-year increase in the normal retirement age, from 65 to 66, implemented for cohorts reaching 65 after 2033; (iii) a 10 percent reduction in the replacement rate, from 40 to 36 percent, applied to benefit accruals from 2025 so that current retirees are unaffected; and (iv) all three measures combined. Welfare effects are measured as the uniform percentage change in consumption over the remaining lifetime that would make a household indifferent between the baseline and the reform, computed for each cohort and skill type.",
      ],
    },
    {
      id: "results",
      heading: "7. Results",
      paragraphs: [
        "We begin with the baseline projection under current law, then examine demographic scenarios and finally parametric reforms.",
      ],
      subsections: [
        {
          id: "results-baseline",
          heading: "7.1 Baseline projection",
          paragraphs: [
            "Table 3 summarises the baseline projection under the UN medium-fertility variant. The old-age dependency ratio rises from 25 percent in 2025 to 93 percent in 2070. Because the number of contributors falls while beneficiaries multiply, pension expenditure rises from 1.7 percent of GDP in 2025 to 6.2 percent in 2050 and 8.9 percent in 2070, while contributions decline from 2.5 percent of GDP to about 2.2 percent by 2050. The fund continues to grow in relation to GDP until the mid-2030s, peaks in 2040 at 49 percent of GDP, and is then rapidly depleted, so that it is exhausted in 2055.",
            "General-equilibrium effects shape this path. As the labour force shrinks and capital per worker rises, the equilibrium interest rate falls by about 0.9 percentage points between 2025 and 2055, reducing the return on the fund, while wages rise relative to the baseline trend, increasing contribution revenue. In a partial-equilibrium version of the model with factor prices fixed at their 2019 values, the fund would be exhausted in 2057; the falling return on the fund thus brings forward exhaustion by about two years, more than offsetting the effect of higher wages. After exhaustion, maintaining legislated benefits requires a pay-as-you-go contribution rate of 22.5 percent in 2060 and 26.4 percent in 2070.",
          ],
          tables: [
            {
              id: "table-3",
              caption: "Table 3. Baseline projection under current law, UN medium-fertility variant",
              columns: ["Year", "Old-age dependency ratio (%)", "Contributions / GDP (%)", "Benefits / GDP (%)", "Fund / GDP (%)", "Required PAYG rate (%)", "Real interest rate (%)"],
              rows: [
                ["2025", "25", "2.5", "1.7", "42", "—", "1.9"],
                ["2030", "36", "2.4", "2.6", "46", "—", "1.8"],
                ["2040", "60", "2.3", "4.3", "49", "—", "1.5"],
                ["2050", "79", "2.2", "6.2", "24", "—", "1.2"],
                ["2055", "84", "2.2", "6.9", "0", "15.7", "1.0"],
                ["2060", "88", "4.4", "7.6", "0", "22.5", "0.9"],
                ["2070", "93", "5.6", "8.9", "0", "26.4", "0.8"],
              ],
              note: "Note: Old-age dependency ratio is the population aged 65+ divided by the population aged 20–64. The required PAYG rate is the contribution rate that balances benefits and contributions each year once the fund is exhausted; before exhaustion contributions are levied at the statutory 9 percent. In 2055 the required rate is computed for the part of the year after the fund is depleted, annualised. Contributions after 2055 rise because the contribution rate rises to the PAYG rate.",
            },
          ],
        },
        {
          id: "results-demography",
          heading: "7.2 Demographic scenarios",
          paragraphs: [
            "Table 4 compares demographic scenarios under current law. Under the UN low-fertility variant, in which fertility stays below 0.9, the fund is exhausted in 2054, only one year earlier than in the baseline; under the high-fertility variant, in which fertility rises to about 1.6, it is exhausted in 2057. The exhaustion date is insensitive to fertility because children born after 2024 begin contributing only in the mid-2040s and do not change the size of the retiring baby-boom cohorts. Fertility matters greatly for the long run, however: the required pay-as-you-go rate in 2080 is 33.1 percent under low fertility but 21.2 percent under high fertility.",
            "Longevity matters more for the exhaustion date. If life expectancy at 65 rises by an additional two years by 2070 relative to the medium variant, benefit spending increases and the fund is exhausted in 2053. Taken together, the scenarios suggest that no plausible demographic path restores solvency under current law, and that reform is required regardless of how fertility evolves.",
          ],
          tables: [
            {
              id: "table-4",
              caption: "Table 4. Pension fund outcomes under alternative demographic scenarios (current law)",
              columns: ["Scenario", "TFR in 2070", "Fund peak year", "Peak fund / GDP (%)", "Exhaustion year", "PAYG rate 2070 (%)", "PAYG rate 2080 (%)"],
              rows: [
                ["UN medium fertility (baseline)", "1.21", "2040", "49", "2055", "26.4", "28.0"],
                ["UN low fertility", "0.86", "2039", "48", "2054", "28.9", "33.1"],
                ["UN high fertility", "1.58", "2041", "50", "2057", "23.3", "21.2"],
                ["Medium fertility, higher longevity", "1.21", "2039", "47", "2053", "28.6", "30.4"],
                ["Medium fertility, partial equilibrium", "1.21", "2041", "52", "2057", "25.1", "26.5"],
              ],
              note: "Note: TFR is the total fertility rate. Higher longevity raises life expectancy at 65 by an additional two years by 2070 relative to the UN medium variant. Partial equilibrium holds wages (relative to trend) and the interest rate at their 2019 values. PAYG rate is the contribution rate required to finance legislated benefits once the fund is exhausted.",
            },
          ],
        },
        {
          id: "results-reforms",
          heading: "7.3 Parametric reforms",
          paragraphs: [
            "Table 5 reports the effects of the reforms. Raising the contribution rate by 1.5 percentage points extends solvency by seven years, to 2062, because it raises revenue immediately and the additional reserves earn returns for several decades. Increasing the retirement age by one year extends solvency by three years, to 2058: it reduces the number of beneficiaries and increases contribution years, and in general equilibrium it also raises labour supply at ages 60–65 by about 2 percent, which increases contributions. A 10 percent cut in the replacement rate extends solvency by five years, to 2060; its effect builds slowly because it applies only to accruals from 2025 and thus affects mainly cohorts retiring after the mid-2030s.",
            "The combined package extends solvency by approximately 18 years, to 2073. This exceeds the 15-year sum of the individual effects because the measures reinforce one another: each raises the fund balance in the 2040s, when the fund would otherwise begin its decline, and the larger balance earns returns that compound until exhaustion. Figure 1 shows the fund path. Under the combined reform the fund peaks in 2047 at 74 percent of GDP, compared with 49 percent in 2040 under current law. The reform also raises the capital stock — by 4.1 percent in 2050 — because the larger fund adds to national saving and households only partially offset it by reducing private saving. Even with the package, however, the fund is eventually exhausted; full long-run sustainability would require further measures, such as a contribution rate of about 13 percent combined with indexing the retirement age to life expectancy.",
            "Timing also matters. If the same package is announced in 2024 but implemented only from 2030, the extension of solvency falls from 18 to 13 years, because five years of higher contributions and their accumulated returns are lost while the large baby-boom cohorts accrue full entitlements in the meantime. Conversely, announcing the reform early has modest benefits even before implementation: households aged 50–60 increase private saving and some delay retirement in anticipation of lower future replacement rates, consistent with the evidence that retirement decisions respond to expected future entitlements [27]. Phasing in the contribution increase over ten rather than three years costs about two years of solvency but spreads the burden over more cohorts, an option we return to in Section 8.",
          ],
          tables: [
            {
              id: "table-5",
              caption: "Table 5. Effects of parametric reforms on pension fund solvency and the macroeconomy",
              columns: ["Scenario", "Exhaustion year", "Years gained", "Peak fund / GDP (%)", "PAYG rate 2080 (%)", "Capital, 2050 (% Δ)", "GDP, 2050 (% Δ)"],
              rows: [
                ["Current law (baseline)", "2055", "—", "49", "28.0", "—", "—"],
                ["(i) Contribution rate +1.5 pp", "2062", "7", "61", "28.0", "2.3", "0.6"],
                ["(ii) Retirement age +1 year", "2058", "3", "54", "26.9", "0.9", "0.8"],
                ["(iii) Replacement rate −10%", "2060", "5", "55", "25.7", "1.1", "0.3"],
                ["Sum of (i)–(iii)", "", "15", "", "", "", ""],
                ["(iv) Combined package", "2073", "18", "74", "24.6", "4.1", "1.7"],
              ],
              note: "Note: All reforms are announced in 2024 and implemented from 2025 under the UN medium-fertility projection. The contribution increase is phased in over 2025–2027; the retirement-age increase applies to cohorts reaching 65 after 2033; the replacement-rate cut applies to accruals from 2025 (from 40 to 36 percent). Capital and GDP are percentage deviations from the baseline in 2050. The PAYG rate is the contribution rate required to finance benefits once the fund is exhausted.",
            },
          ],
          figures: [
            {
              id: "figure-1",
              caption: "Figure 1. Pension fund relative to GDP under current law and the combined reform package",
              kind: "line",
              xLabels: ["2025", "2030", "2035", "2040", "2045", "2050", "2055", "2060", "2065", "2070", "2075"],
              yLabel: "Fund / GDP (%)",
              series: [
                { name: "Current law", values: [42, 46, 49, 49, 40, 24, 0, 0, 0, 0, 0] },
                { name: "Combined reform", values: [43, 52, 63, 71, 74, 70, 60, 45, 29, 12, 0] },
              ],
              note: "Note: Simulated ratio of the National Pension Scheme fund to GDP under the UN medium-fertility projection. The combined reform raises the contribution rate by 1.5 percentage points, raises the normal retirement age by one year and reduces the replacement rate by 10 percent. The fund is exhausted in 2055 under current law and in 2073 under the combined reform.",
            },
          ],
        },
      ],
    },
    {
      id: "welfare",
      heading: "8. Welfare and Intergenerational Distribution",
      paragraphs: [
        "Solvency is not the only criterion for evaluating reform. Table 6 and Figure 2 report the welfare effects of each reform by age in 2024, measured as consumption-equivalent variations relative to the baseline, in which legislated benefits are maintained after exhaustion by raising contributions to the pay-as-you-go rate.",
        "The combined package generates sizeable welfare losses for current middle-aged cohorts. Households aged 45–49 in 2024 lose the equivalent of 1.6 percent of remaining lifetime consumption, and those aged 40–44 and 50–54 lose 1.4 and 1.3 percent respectively. These cohorts pay higher contributions for the rest of their working lives, retire a year later and receive lower benefits on their remaining accruals, but they would have retired before or shortly after the fund's exhaustion under current law and therefore benefit little from the delay of the large post-exhaustion contribution increase. Current retirees are almost unaffected, because the replacement-rate cut does not apply to benefits in payment, while households aged 55–64 face small losses as most of their benefit entitlements are already accrued.",
        "Young and future cohorts gain. Households aged 20–24 in 2024 gain 0.4 percent, and cohorts born after 2024 gain about 1.9 percent, because the reform reduces the contribution rates they would face after exhaustion. The welfare effects thus mirror the classic intergenerational trade-off of pension reform [2][24]: improving sustainability requires current workers to pay more for benefits they will not fully enjoy, in exchange for lower burdens on future generations. Within cohorts, losses are larger for high-skill households under the replacement-rate cut, because the redistributive component of the formula partly protects low earners, and larger for low-skill households under the contribution increase, because they rely more on pension income in old age relative to private saving.",
        "The individual measures differ markedly in how they distribute costs. The contribution increase concentrates losses on cohorts aged 35–54, who pay higher contributions over many years. The retirement-age increase generates the smallest losses per year of solvency gained, as in {7}, because households partly offset it by working longer, and the costs fall mainly on cohorts aged 30–49. The replacement-rate cut spreads losses more widely and more evenly across young and middle-aged cohorts. A reform that relies more heavily on the retirement age, or that phases in contribution increases more gradually, would therefore reduce the burden on today's middle-aged.",
      ],
      tables: [
        {
          id: "table-6",
          caption: "Table 6. Welfare effects of reforms by age in 2024 (consumption-equivalent variation, % of remaining lifetime consumption)",
          columns: ["Age in 2024", "(i) Contribution +1.5 pp", "(ii) Retirement age +1", "(iii) Replacement −10%", "(iv) Combined"],
          rows: [
            ["20–24", "−0.31", "−0.12", "−0.29", "0.42"],
            ["25–29", "−0.44", "−0.18", "−0.33", "0.05"],
            ["30–34", "−0.57", "−0.24", "−0.36", "−0.46"],
            ["35–39", "−0.66", "−0.25", "−0.37", "−0.95"],
            ["40–44", "−0.70", "−0.23", "−0.36", "−1.36"],
            ["45–49", "−0.68", "−0.20", "−0.33", "−1.58"],
            ["50–54", "−0.55", "−0.16", "−0.27", "−1.29"],
            ["55–59", "−0.33", "−0.10", "−0.16", "−0.74"],
            ["60–64", "−0.09", "−0.04", "−0.05", "−0.21"],
            ["65+", "0.00", "0.00", "0.00", "−0.02"],
            ["Future cohorts (born 2025–2034)", "0.82", "0.33", "0.54", "1.87"],
          ],
          note: "Note: Consumption-equivalent variation relative to the current-law baseline, in which legislated benefits are financed on a pay-as-you-go basis after fund exhaustion. Positive values are gains. Values are population-weighted averages across skill types. Individual measures are evaluated with the post-exhaustion PAYG rate adjusting as in the baseline; the combined reform delays exhaustion further, which is why its welfare effect for young cohorts is not the sum of the individual effects.",
        },
      ],
      figures: [
        {
          id: "figure-2",
          caption: "Figure 2. Welfare effect of the combined reform package by age in 2024",
          kind: "bar",
          xLabels: ["20–24", "25–29", "30–34", "35–39", "40–44", "45–49", "50–54", "55–59", "60–64", "65+", "Future"],
          yLabel: "Consumption-equivalent variation (%)",
          series: [
            { name: "Low skill", values: [0.61, 0.21, -0.31, -0.84, -1.27, -1.49, -1.21, -0.69, -0.19, -0.01, 2.08] },
            { name: "High skill", values: [0.24, -0.11, -0.62, -1.08, -1.47, -1.69, -1.38, -0.80, -0.24, -0.03, 1.66] },
          ],
          note: "Note: Consumption-equivalent variation of the combined reform relative to the current-law baseline, by age in 2024 and skill type (lowest and highest of three permanent skill types). Future refers to cohorts born 2025–2034.",
        },
      ],
    },
    {
      id: "sensitivity",
      heading: "9. Sensitivity Analysis",
      paragraphs: [
        "We examine the sensitivity of our main results to key assumptions. In a small-open-economy version of the model, where the interest rate is fixed at its 2019 level, the fund is exhausted in 2057 under current law and the combined reform extends solvency by 17 years, to 2074; welfare losses for middle-aged cohorts are slightly smaller because the reform no longer depresses the return on capital. Lowering long-run productivity growth to 1.0 percent brings forward exhaustion to 2054 and reduces the gain from the combined reform to 16 years, while raising it to 2.0 percent delays exhaustion to 2057.",
        "The fund return premium matters for the size of the gains from pre-funding. With no premium the combined reform extends solvency by 15 years; with a premium of 1.5 percentage points, by 21 years. Setting the Frisch elasticity of labour supply to 0.3 or 0.8 changes the gain in solvency by at most one year, but a higher elasticity amplifies the welfare advantage of the retirement-age increase, because households respond more by extending their working lives [17][18]. In all specifications the qualitative pattern of welfare effects — losses concentrated among cohorts aged 35–59 and gains for young and future cohorts — is unchanged.",
      ],
    },
    {
      id: "discussion",
      heading: "10. Discussion and Policy Implications",
      paragraphs: [
        "Our results speak to Korea's ongoing pension reform debate. They confirm, within a general-equilibrium framework, that the NPS is unsustainable under current law and that demographic change alone, even with a substantial recovery in fertility, will not restore solvency. Delay is costly: every year that reform is postponed reduces the fund's accumulated returns and shifts more of the burden onto younger cohorts, a lesson also drawn from the Japanese experience [7][9].",
        "The analysis also clarifies the trade-offs across reform options. Contribution increases deliver the largest gains in solvency per percentage point but concentrate costs on current workers. Raising the retirement age imposes the smallest welfare losses per year of solvency gained, especially if labour-market institutions allow older workers to remain employed, and could be combined with indexing the retirement age to life expectancy to stabilise the system automatically. Benefit cuts are effective in the long run but act slowly and reduce the adequacy of pensions in a country where old-age poverty is the highest in the OECD. A balanced package, combining all three measures, extends solvency by approximately 18 years but cannot avoid imposing losses on today's middle-aged cohorts.",
        "Those losses raise questions of political feasibility. Households aged 40–59 constitute a large share of the electorate, and their opposition may explain why the contribution rate has not changed since 1998. Policy designs that phase in measures gradually, couple contribution increases with stronger guarantees of future benefits, or compensate middle-aged cohorts through the tax system may help build support. The model could be extended to evaluate such packages, together with the role of the Basic Pension, the means-tested non-contributory pension that supplements the NPS for low-income elderly people.",
        "Our analysis has limitations. We abstract from idiosyncratic earnings risk, informal employment and the self-employed, who make up a large share of older workers in Korea and have weaker contribution records. We also treat fertility and longevity as exogenous, whereas pension reform may itself affect fertility decisions. And our welfare measure does not account for possible changes in old-age poverty, which matter for evaluating benefit cuts in a society with limited private retirement saving.",
      ],
    },
    {
      id: "conclusion",
      heading: "11. Conclusion",
      paragraphs: [
        "We have developed a dynamic general-equilibrium overlapping-generations model calibrated to the Korean economy to evaluate the sustainability of the National Pension Scheme. Under the United Nations medium-fertility projection, the pension fund is projected to be exhausted by 2055. A package combining a 1.5 percentage point increase in the contribution rate, a one-year increase in the normal retirement age and a 10 percent reduction in the replacement rate would extend fund solvency by approximately 18 years, to 2073, but would generate sizeable welfare losses for current middle-aged cohorts while benefiting young and future cohorts. The choice among reforms is ultimately a choice about how to distribute the burden of ageing across generations.",
        "Future research could incorporate idiosyncratic risk and informal employment, evaluate automatic adjustment mechanisms such as those adopted in Sweden and Japan, and study the interaction between the NPS and other parts of Korea's old-age support system, including the Basic Pension and long-term care insurance.",
      ],
    },
    {
      id: "appendix",
      heading: "Appendix A. Computational Details",
      paragraphs: [
        "Steady states. For a given population distribution and policy, we guess the interest rate, bequests and the average covered earnings entering the benefit formula, solve households' problems by the endogenous-grid method on 400 asset gridpoints for each age and skill type, aggregate, and update the guesses using a damped fixed-point iteration until excess demand in the capital market is below 10⁻⁶ of output.",
        "Transition paths. The transition is computed over 2019–2200 using a Gauss–Seidel algorithm on the full paths of prices, bequests, average covered earnings and, after fund exhaustion, the pay-as-you-go contribution rate. Households have perfect foresight about future prices and policies from the date of announcement; before 2024 they expect current law to continue. Convergence typically requires 60 to 120 iterations. Results are insensitive to extending the horizon to 2300.",
        "Demographic inputs. Cohort sizes at age 20 and survival probabilities by age, sex and year are taken from the UN World Population Prospects 2022 for 2019–2100 and held constant thereafter, so that the population converges to a stationary distribution. We use sex-averaged survival probabilities weighted by the sex composition of each cohort. Net migration is included in cohort sizes as projected by the UN.",
      ],
    },
  ],
};
