// Vol. 30, No. 4 (October 2025) — full research paper (sample content).
import type { PaperSpec } from "../paper-spec";

export const paper: PaperSpec = {
  id: "2025-v30-i4-02",
  title: "Public Works as Insurance: Rural Employment Guarantee, Monsoon Shocks and Household Welfare in India",
  authors: [{ name: "Rohan Kulkarni", corresponding: true }, { name: "Meera Subramanian" }],
  abstract:
    "Rural households in India remain highly exposed to monsoon failure, and formal insurance reaches few of them. We ask whether the Mahatma Gandhi National Rural Employment Guarantee Act (MGNREGA), which promises up to 100 days of manual work a year, functions as insurance against rainfall shocks. Our design interacts the phased rollout of the programme across 497 districts in 2006–2008 with district-level monsoon droughts measured from gridded rainfall, and combines six rounds of National Sample Survey consumption and employment data with administrative records of person-days worked. Before the programme, a drought reduced monthly per capita consumption by 8.9 percent; in districts covered by the guarantee the decline was 3.1 percent, so the programme offset about two-thirds of the loss. Person-days of public employment rose by 31 percent in drought years, the drought-induced fall in agricultural wages shrank from 6.4 to 1.9 percent, and drought-induced short-term out-migration fell by 2.8 percentage points. Insurance value was concentrated in states with strong implementation and prompt wage payment: the offset was 82 percent in the best-implementing tercile of states and 31 percent in the worst. Demand-driven public works can insure rural households, but only where the state delivers work and wages on time.",
  keywords: ["Public works", "MGNREGA", "Rainfall shocks", "Consumption smoothing", "India"],
  jelCodes: ["I38", "J43", "O15", "Q54"],
  pages: "483–512",
  volume: 30,
  issue: 4,
  year: 2025,
  received: "2024-07-30",
  accepted: "2025-05-26",
  published: "2025-10-15",
  publishedOnline: "2025-10-02",
  citations: 4,
  downloads: 774,
  pdfSize: "1.58 MB",
  type: "Research Article",
  acknowledgments:
    "We thank participants at the Delhi School of Economics development seminar, the Indian Statistical Institute annual conference on economic growth and development and the Hanyang University economics seminar, two anonymous referees and the handling editor for helpful comments. Officials of the Ministry of Rural Development kindly clarified the structure of the programme's management information system. All errors are our own.",
  dataAvailability:
    "National Sample Survey unit-level data are available from the Ministry of Statistics and Programme Implementation; gridded rainfall data are available from the India Meteorological Department; MGNREGA administrative data are publicly available from the programme's management information system; NFHS and ASER data are available from their respective publishers. Replication code and the constructed district panel are available from the corresponding author.",
  refs: [
    /* 1 */ "Imbert, C., & Papp, J. (2015). Labor market effects of social programs: Evidence from India's employment guarantee. American Economic Journal: Applied Economics, 7(2), 233–263.",
    /* 2 */ "Muralidharan, K., Niehaus, P., & Sukhtankar, S. (2016). Building state capacity: Evidence from biometric smartcards in India. American Economic Review, 106(10), 2895–2929.",
    /* 3 */ "Muralidharan, K., Niehaus, P., & Sukhtankar, S. (2023). General equilibrium effects of (improving) public employment programs: Experimental evidence from India. Econometrica, 91(4), 1261–1295.",
    /* 4 */ "Jayachandran, S. (2006). Selling labor low: Wage responses to productivity shocks in developing countries. Journal of Political Economy, 114(3), 538–575.",
    /* 5 */ "Townsend, R. M. (1994). Risk and insurance in village India. Econometrica, 62(3), 539–591.",
    /* 6 */ "Rosenzweig, M. R., & Wolpin, K. I. (1993). Credit market constraints, consumption smoothing, and the accumulation of durable production assets in low-income countries: Investments in bullocks in India. Journal of Political Economy, 101(2), 223–244.",
    /* 7 */ "Morduch, J. (1995). Income smoothing and consumption smoothing. Journal of Economic Perspectives, 9(3), 103–114.",
    /* 8 */ "Kaur, S. (2019). Nominal wage rigidity in village labor markets. American Economic Review, 109(10), 3585–3616.",
    /* 9 */ "Fetzer, T. (2020). Can workfare programs moderate conflict? Evidence from India. Journal of the European Economic Association, 18(6), 3337–3375.",
    /* 10 */ "Dercon, S. (2002). Income risk, coping strategies, and safety nets. World Bank Research Observer, 17(2), 141–166.",
    /* 11 */ "Paxson, C. H. (1992). Using weather variability to estimate the response of savings to transitory income in Thailand. American Economic Review, 82(1), 15–33.",
    /* 12 */ "Maccini, S., & Yang, D. (2009). Under the weather: Health, schooling, and economic consequences of early-life rainfall. American Economic Review, 99(3), 1006–1026.",
    /* 13 */ "Shah, M., & Steinberg, B. M. (2017). Drought of opportunities: Contemporaneous and long-term impacts of rainfall shocks on human capital. Journal of Political Economy, 125(2), 527–561.",
    /* 14 */ "Banerjee, A., Duflo, E., Imbert, C., Mathew, S., & Pande, R. (2020). E-governance, accountability, and leakage in public programs: Experimental evidence from a financial management reform in India. American Economic Journal: Applied Economics, 12(4), 39–72.",
    /* 15 */ "Burgess, R., & Donaldson, D. (2010). Can openness mitigate the effects of weather shocks? Evidence from India's famine era. American Economic Review, 100(2), 449–453.",
    /* 16 */ "Ravallion, M. (1991). Reaching the rural poor through public employment: Arguments, evidence, and lessons from South Asia. World Bank Research Observer, 6(2), 153–175.",
    /* 17 */ "Besley, T., & Coate, S. (1992). Workfare versus welfare: Incentive arguments for work requirements in poverty-alleviation programs. American Economic Review, 82(1), 249–261.",
    /* 18 */ "Sukhtankar, S. (2017). India's National Rural Employment Guarantee Scheme: What do we really know about the world's largest workfare program? India Policy Forum, 13, 231–286.",
    /* 19 */ "Kochar, A. (1999). Smoothing consumption by smoothing income: Hours-of-work responses to idiosyncratic agricultural shocks in rural India. Review of Economics and Statistics, 81(1), 50–61.",
    /* 20 */ "Rose, E. (1999). Consumption smoothing and excess female mortality in rural India. Review of Economics and Statistics, 81(1), 41–49.",
    /* 21 */ "Dutta, P., Murgai, R., Ravallion, M., & van de Walle, D. (2012). Does India's employment guarantee scheme guarantee employment? Economic and Political Weekly, 47(16), 55–64.",
    /* 22 */ "Niehaus, P., & Sukhtankar, S. (2013). Corruption dynamics: The golden goose effect. American Economic Journal: Economic Policy, 5(4), 230–269.",
    /* 23 */ "Callaway, B., & Sant'Anna, P. H. C. (2021). Difference-in-differences with multiple time periods. Journal of Econometrics, 225(2), 200–230.",
    /* 24 */ "Goodman-Bacon, A. (2021). Difference-in-differences with variation in treatment timing. Journal of Econometrics, 225(2), 254–277.",
    /* 25 */ "Sun, L., & Abraham, S. (2021). Estimating dynamic treatment effects in event studies with heterogeneous treatment effects. Journal of Econometrics, 225(2), 175–199.",
    /* 26 */ "Cole, S., Giné, X., Tobacman, J., Topalova, P., Townsend, R., & Vickery, J. (2013). Barriers to household risk management: Evidence from India. American Economic Journal: Applied Economics, 5(1), 104–135.",
    /* 27 */ "Mobarak, A. M., & Rosenzweig, M. R. (2013). Informal risk sharing, index insurance, and risk taking in developing countries. American Economic Review, 103(3), 375–380.",
    /* 28 */ "Jensen, R. (2000). Agricultural volatility and investments in children. American Economic Review, 90(2), 399–404.",
    /* 29 */ "Conley, T. G. (1999). GMM estimation with cross sectional dependence. Journal of Econometrics, 92(1), 1–45.",
  ],
  body: [
    {
      id: "introduction",
      heading: "1. Introduction",
      paragraphs: [
        "Close to half of India's workforce still depends on agriculture, and about half of the country's cultivated area is rainfed. For these households the south-west monsoon, which delivers roughly three-quarters of annual rainfall between June and September, is the single most important determinant of income. A weak monsoon lowers yields, reduces the demand for hired labour and depresses rural wages precisely when landless and smallholder households most need earnings [4][8]. Informal risk-sharing within villages and kinship networks smooths idiosyncratic shocks but performs poorly against covariate shocks that hit everyone at once [5][10], and formal weather insurance has had low take-up despite heavy subsidies [26][27]. When a drought strikes, many households respond by cutting consumption, selling productive assets, withdrawing children from school or migrating in search of work [6][13][20].",
        "Public works have a long history as a response to such shocks in South Asia. Famine codes in colonial India and the Maharashtra Employment Guarantee Scheme of the 1970s rested on the idea that a standing offer of manual work at a low wage would be taken up mainly by those who needed it, and mainly when they needed it [16][17]. The Mahatma Gandhi National Rural Employment Guarantee Act (MGNREGA) of 2005 scaled this idea to the national level. It entitles every rural household to up to 100 days of unskilled manual work per year at a statutory minimum wage, on demand, within fifteen days of application. With some 50 million households working on its projects in a typical year, it is the largest public works programme in the world [18].",
        "This paper asks whether MGNREGA works as insurance. A programme that offers employment on demand should, in principle, expand when private labour demand collapses and contract when it recovers, so its value should be greatest in bad years. Whether this happens in practice is far from obvious. Work must be demanded, sanctioned, organised and paid by local administrations whose capacity varies enormously, and audits have documented widespread rationing, leakage and payment delays [2][14][21]. If work is rationed or wages arrive months late, the guarantee may provide little protection when a drought strikes.",
        "To identify the insurance value of the programme, we combine two sources of variation. The first is the phased rollout of MGNREGA: the programme began in 200 of the poorest districts in February 2006, was extended to 130 more in April 2007 and reached the remaining rural districts in April 2008. The second is year-to-year variation in district monsoon rainfall, which we measure from gridded data and convert into drought indicators relative to each district's own historical distribution. Comparing the effect of a drought on household outcomes in districts with and without access to the programme, while controlling for district and year fixed effects and for the main effects of both rainfall and the programme, yields an estimate of how much of the drought loss the guarantee offsets. We use six rounds of the National Sample Survey (NSS) for consumption, wages and migration, administrative records of person-days worked for programme take-up, and survey data on children's nutrition and schooling.",
        "Our central finding is that MGNREGA substantially insured rural consumption. Before the programme, a drought year reduced monthly per capita consumption by 8.9 percent. In districts covered by the guarantee, the decline was 3.1 percent: the programme offset about 65 percent of the loss. The mechanism is visible in administrative data. Person-days of programme employment rose by 31 percent in drought years, the drought-induced fall in agricultural casual wages shrank from 6.4 to 1.9 percent, and the drought-induced rise in short-term distress migration was cut by 2.8 percentage points. Children born in drought years in the post-programme period were less stunted than comparable children born before it, although we find no evidence that the programme changed the response of school enrolment to droughts. The insurance value was concentrated where the programme was implemented well: in the best-implementing tercile of states the offset was 82 percent, while in the worst tercile it was 31 percent and statistically insignificant, and each ten-percentage-point increase in the share of delayed wage payments reduced the offset by about nine percentage points.",
        "The paper contributes to three literatures. First, it adds to work on the labour market and welfare effects of MGNREGA [1][3][9][18] by focusing on its role as insurance against aggregate shocks rather than its average effects. Second, it contributes to the literature on consumption smoothing in low-income economies [5][7][11][19] by showing that a state-provided income floor can substitute for missing insurance markets against covariate risk. Third, it contributes to the literature on state capacity and programme delivery [2][14][22] by showing that implementation quality determines not only the level of benefits but also their timing, and hence their insurance value. Section 2 describes the programme, Section 3 reviews related work, Section 4 sets out a simple framework, Sections 5 and 6 describe the data and empirical strategy, Sections 7 to 9 present results, mechanisms and robustness checks, and Section 10 discusses policy implications.",
      ],
    },
    {
      id: "background",
      heading: "2. Institutional Background",
      paragraphs: [
        "MGNREGA was enacted in September 2005 and is administered by the Ministry of Rural Development, with states responsible for implementation. Any adult member of a rural household may register for a job card, apply for work and receive employment on local public works within fifteen days; if work is not provided, the household is entitled to an unemployment allowance. Projects are chosen by village councils (gram panchayats) and focus on water conservation, minor irrigation, land development and rural roads. The central government finances the full wage bill and three-quarters of material costs, while states bear the remainder and pay unemployment allowances. Wages are set by state and indexed to agricultural labour prices; in our sample period they ranged from about Rs 60 to Rs 120 per day, typically above prevailing casual wages for women and close to them for men.",
        "The programme was introduced in three phases (Table 1). Phase I covered 200 districts selected using a Planning Commission index of backwardness based on agricultural productivity, agricultural wages and the share of Scheduled Caste and Scheduled Tribe population. Phase II added 130 districts in April 2007, again chosen largely by the backwardness ranking, and Phase III extended the programme to all remaining rural districts in April 2008. Because selection was based on a backwardness index, early-phase districts were poorer and had lower agricultural wages than later-phase districts, which motivates our design: we never compare early and late districts directly, but compare how the same district responds to droughts before and after it gains access to the programme.",
        "Implementation has varied greatly across states. A small group of states, notably Andhra Pradesh, Rajasthan, Chhattisgarh, Madhya Pradesh and Tamil Nadu, generated large volumes of employment from the start, while states such as Bihar, Uttar Pradesh and Maharashtra provided far less work relative to demand [21]. Payment delays have been a persistent problem: although the Act requires wages to be paid within fifteen days, a substantial share of payments in many states took more than a month [2][14]. These differences in delivery are central to our heterogeneity analysis.",
      ],
      tables: [
        {
          id: "table-1",
          caption: "Table 1. Phased rollout of MGNREGA and sample districts",
          columns: ["Phase", "Notification", "Districts covered", "Sample districts", "Backwardness rank (mean)", "Drought frequency 1980–2005"],
          rows: [
            ["Phase I", "February 2006", "200", "184", "98", "0.19"],
            ["Phase II", "April 2007", "130", "118", "251", "0.18"],
            ["Phase III", "April 2008", "285", "195", "402", "0.17"],
            ["Total", "", "615", "497", "254", "0.18"],
          ],
          note: "Note: Sample excludes wholly urban districts, districts in Jammu and Kashmir and the north-eastern states (for which gridded rainfall is less reliable), and districts whose boundaries could not be harmonised to 2001 Census definitions. Backwardness rank refers to the Planning Commission index (1 = most backward). Drought frequency is the share of years in which June–September rainfall fell below the district's 20th percentile.",
        },
      ],
    },
    {
      id: "literature",
      heading: "3. Related Literature",
      paragraphs: [
        "A large literature documents how households in rural India and other low-income settings cope with income risk. {5} shows that village consumption co-moves with village income far more than full insurance would predict, while idiosyncratic shocks are partly shared. Households also smooth consumption through savings and asset sales [6][11], by adjusting labour supply [19] and by smoothing income ex ante through conservative crop and technology choices [7]. These strategies are costly and incomplete: {10} emphasises that coping mechanisms break down when shocks are covariate, and {20} shows that girls' survival in rural India deteriorates in drought years.",
        "Rainfall shocks transmit through labour markets. {4} shows that agricultural wages in India are more sensitive to productivity shocks where workers are poorer, less mobile and have less access to credit, so that landless labourers bear a disproportionate share of drought losses. {8} documents downward nominal wage rigidity in Indian villages, which implies that negative shocks reduce employment rather than only wages. Early-life rainfall affects later-life health and schooling [12][28], and {13} show that droughts can raise school attendance by lowering the opportunity cost of children's time even as they harm nutrition. Historical evidence suggests that market integration reduced the mortality consequences of weather shocks in colonial India [15].",
        "The evaluation literature on MGNREGA is extensive. {1} use the phased rollout to show that the programme raised private-sector casual wages and reduced private employment in early-phase districts, with effects concentrated in the dry season. {3} show in a large experiment in Andhra Pradesh that improving the programme's payment infrastructure raised earnings, primarily through higher market wages and private employment. {9} finds that the programme weakened the link between rainfall shocks and Maoist violence, which is the closest antecedent to our approach of interacting rainfall shocks with programme availability. On implementation, {21} document widespread rationing, {22} model the incentives for corruption created by wage changes, and {2} and {14} show that reforms to payment systems reduced leakage and delays. {18} surveys this evidence. Our contribution is to estimate directly how much of a drought-induced consumption loss the programme offsets and how this offset depends on delivery.",
        "Methodologically, recent work has highlighted the difficulties of two-way fixed effects estimators with staggered adoption and heterogeneous treatment effects [23][24][25]. Our main estimates rely on the interaction between rainfall shocks and programme availability, rather than on the timing of adoption alone, but we show that our results are robust to estimators that avoid comparisons between already-treated and newly treated districts.",
      ],
    },
    {
      id: "framework",
      heading: "4. Conceptual Framework",
      paragraphs: [
        "Consider a rural labour market in which households supply labour to agriculture and receive a wage that depends on agricultural productivity. A drought lowers the marginal product of labour, shifting labour demand inward. Without a public employment option, the wage and employment both fall; with downward wage rigidity, most of the adjustment occurs through employment [8]. Households whose income falls cut consumption to the extent that they cannot borrow, draw down savings or rely on transfers from others [5][10].",
        "An employment guarantee introduces a perfectly elastic alternative source of labour demand at the programme wage, up to the household's entitlement. This has two effects in a drought year. The direct effect is that households take up programme work, replacing part of their lost earnings. The indirect effect is that the programme puts a floor under the private wage: employers who wish to retain workers must match the programme's terms, so the drought-induced fall in agricultural wages should be smaller [1][3]. Both effects reduce the decline in household income and hence consumption. The framework also implies that take-up of programme work should rise in drought years, that the decline in private employment should be smaller because labour is absorbed by public works rather than idle, and that distress migration, a costly coping strategy, should fall.",
        "The insurance value of the guarantee depends on its effective availability. If work is rationed in bad years, or if wages are paid only after long delays, the programme provides less protection because households cannot use it to finance current consumption. The framework therefore predicts that the offset should be larger where implementation is strong and payments are timely. It also predicts that effects should be concentrated among households most dependent on casual labour, such as the landless and those belonging to Scheduled Castes and Scheduled Tribes.",
      ],
    },
    {
      id: "data",
      heading: "5. Data",
      paragraphs: [
        "We assemble a district panel covering 497 rural districts in 19 major states from 2002 to 2012, combining rainfall data, household survey data and administrative programme data. District boundaries are harmonised to 2001 Census definitions, and newly created districts are mapped back to their parent districts.",
      ],
      subsections: [
        {
          id: "data-rain",
          heading: "5.1 Rainfall shocks",
          paragraphs: [
            "Rainfall comes from the India Meteorological Department's daily gridded data at 0.25-degree resolution for 1951–2012. We aggregate grid cells to districts using area weights and compute total rainfall over the June–September monsoon. Following the literature [4][13], we define a drought as a monsoon in which rainfall falls below the 20th percentile of the district's own 1951–2005 distribution, and an excess-rainfall year as one above the 80th percentile. Defining shocks relative to each district's history ensures that they capture deviations from normal conditions rather than differences in average climate. Over 2002–2012, 18 percent of district-years were droughts; the 2002 and 2009 monsoons were exceptionally weak and affected more than 40 percent of districts. Because droughts in the sample are spatially correlated, we cluster standard errors by state in robustness checks and report Conley standard errors [29].",
          ],
        },
        {
          id: "data-survey",
          heading: "5.2 Household and administrative data",
          paragraphs: [
            "Consumption comes from six rounds of the NSS consumer expenditure survey (2004–05, 2005–06, 2006–07, 2007–08, 2009–10 and 2011–12), which together cover 318,452 rural households. Our main outcome is monthly per capita consumption expenditure deflated by state rural consumer price indices for agricultural labourers. Because NSS rounds run from July to June, each survey year overlaps the monsoon at its start and the post-harvest and lean seasons that follow, which is when drought effects on income materialise. Wages, employment and short-term migration come from the employment–unemployment rounds of 2004–05, 2007–08, 2009–10 and 2011–12, which report casual wages, daily activity status in the reference week and spells of work away from home lasting between one and six months.",
            "Programme take-up comes from the MGNREGA management information system, which reports for each district and financial year the number of households provided employment, person-days generated and wages paid, as well as, from 2010–11, the share of wage payments made more than fifteen days after the muster roll closed. Child outcomes come from two sources. Height-for-age z-scores of children under five come from the third and fourth National Family Health Surveys (2005–06 and 2015–16), which allow us to compare the effect of drought in a child's first year of life before and after the programme. School enrolment and learning come from the Annual Status of Education Report (ASER) household surveys for 2006–2012, which sample about 600 households in each rural district every year.",
            "Table 2 reports summary statistics by phase. Phase I districts were poorer, had lower agricultural wages and larger Scheduled Caste and Scheduled Tribe populations, and generated more programme employment once covered. Drought frequency, however, was similar across phases, which is consistent with rainfall shocks being unrelated to the criteria that determined programme timing.",
          ],
          tables: [
            {
              id: "table-2",
              caption: "Table 2. Summary statistics by rollout phase",
              columns: ["Variable", "Phase I", "Phase II", "Phase III", "All"],
              rows: [
                ["Monthly per capita consumption, 2004–05 (Rs)", "512", "561", "618", "565"],
                ["Share Scheduled Caste or Scheduled Tribe", "0.34", "0.29", "0.25", "0.29"],
                ["Share of households landless or near-landless", "0.41", "0.38", "0.36", "0.38"],
                ["Agricultural casual wage, 2004–05 (Rs per day)", "48.2", "53.6", "61.9", "55.0"],
                ["Drought incidence, 2002–2012", "0.19", "0.18", "0.17", "0.18"],
                ["MGNREGA person-days per rural household, 2010–12", "47.3", "39.8", "31.6", "39.1"],
                ["Short-term out-migration rate, 2004–05", "0.051", "0.043", "0.036", "0.043"],
                ["Height-for-age z-score, under-5s (NFHS-3)", "−1.98", "−1.86", "−1.71", "−1.84"],
                ["Out-of-school rate, ages 11–14 (ASER 2006)", "0.071", "0.058", "0.044", "0.057"],
                ["Districts", "184", "118", "195", "497"],
              ],
              note: "Note: Means across districts weighted by rural population. Consumption and wages in 2004–05 rupees. Landless or near-landless households own less than 0.4 hectares.",
            },
          ],
        },
      ],
    },
    {
      id: "strategy",
      heading: "6. Empirical Strategy",
      paragraphs: [
        "Our main specification relates the log of real per capita consumption of household i in district d and survey year t to drought, programme availability and their interaction: ln c_idt = β1 Drought_dt + β2 NREGA_dt + β3 (Drought_dt × NREGA_dt) + γ Excess_dt + X'_idt δ + α_d + λ_st + ε_idt. Here NREGA_dt equals one if the district had access to the programme for at least six months of the survey year, α_d are district fixed effects, λ_st are state-by-year fixed effects and X_idt are household controls (household size, composition, caste, religion and landholding). The coefficient β1 measures the effect of a drought in the absence of the programme, β3 measures how much this effect changes when the programme is available, and the ratio −β3/β1 is the share of the drought loss offset by the guarantee.",
      ],
      subsections: [
        {
          id: "first-stage",
          heading: "6.1 Programme take-up in drought years",
          paragraphs: [
            "The insurance interpretation requires that programme employment responds to droughts. Table 3 uses administrative data for 3,468 district-years in which the programme was active between 2006–07 and 2013–14 and regresses take-up on drought indicators with district and state-by-year fixed effects. A drought raises log person-days per rural household by 0.271, an increase of 31 percent, equivalent to 11.4 additional days on a mean of 36.8. The share of rural households working on the programme rises by 6.3 percentage points. Excess rainfall has no significant effect. The response is concentrated in the dry season following the failed monsoon, when private agricultural work is scarcest, which is when the programme is designed to provide work.",
          ],
          tables: [
            {
              id: "table-3",
              caption: "Table 3. Drought and MGNREGA employment (administrative data)",
              columns: ["", "(1) Log person-days per rural household", "(2) Person-days per rural household", "(3) Share of households employed", "(4) Days per participating household"],
              rows: [
                ["Drought", "0.271*** (0.048)", "11.4*** (2.1)", "0.063*** (0.012)", "4.9*** (1.3)"],
                ["Excess rainfall", "−0.034 (0.041)", "−1.2 (1.8)", "−0.008 (0.010)", "−0.6 (1.1)"],
                ["Mean of dependent variable", "", "36.8", "0.29", "47.2"],
                ["District fixed effects", "Yes", "Yes", "Yes", "Yes"],
                ["State × year fixed effects", "Yes", "Yes", "Yes", "Yes"],
                ["Observations", "3,468", "3,468", "3,468", "3,468"],
              ],
              note: "Note: District-year observations for financial years 2006–07 to 2013–14 in which the programme was active. Drought refers to the preceding June–September monsoon. Standard errors clustered by district in parentheses. *** p < 0.01, ** p < 0.05, * p < 0.1.",
            },
          ],
        },
        {
          id: "identification",
          heading: "6.2 Identification",
          paragraphs: [
            "The interaction coefficient β3 is identified from differences in the consumption response to droughts within districts before and after they gained access to the programme, relative to the same difference in districts that had not yet gained access or had always had it in a given year. The key identifying assumption is that, absent the programme, the sensitivity of consumption to droughts would have evolved similarly in districts that received the programme earlier and later. Because rollout followed a backwardness ranking, a natural concern is that poorer districts became less vulnerable to droughts over time for other reasons, such as irrigation expansion or the growth of non-farm employment. We address this in three ways: we include interactions of drought with the backwardness index and with year, we control for drought interacted with baseline irrigation and non-farm employment shares, and we examine dynamics around rollout.",
            "Figure 1 plots the differential effect of a drought on consumption by year relative to programme introduction, estimated in an event-study version of our specification in which the drought indicator is interacted with event-time indicators. Before the programme arrives, the effect of a drought in future-programme districts is statistically indistinguishable from its effect in the comparison group, and there is no trend. After introduction, the drought loss is reduced by four to six percentage points, and the reduction persists. The absence of pre-trends suggests that early-phase districts were not becoming less sensitive to droughts before they received the programme. We also verify that rainfall shocks are not predicted by phase: regressing the drought indicator on phase-by-year indicators yields an F-statistic of 0.84 (p = 0.58).",
          ],
          figures: [
            {
              id: "figure-1",
              caption: "Figure 1. Differential effect of drought on log consumption, by year relative to programme introduction",
              kind: "line",
              xLabels: ["−4", "−3", "−2", "−1", "0", "1", "2", "3", "4"],
              yLabel: "Drought × event-time coefficient",
              series: [
                {
                  name: "Estimate",
                  values: [-0.006, 0.011, -0.004, 0, 0.041, 0.055, 0.061, 0.058, 0.06],
                  lower: [-0.043, -0.024, -0.037, 0, 0.008, 0.019, 0.022, 0.015, 0.012],
                  upper: [0.031, 0.046, 0.029, 0, 0.074, 0.091, 0.1, 0.101, 0.108],
                },
              ],
              marker: 4,
              note: "Note: Coefficients on drought interacted with years relative to programme introduction, with 95 percent confidence intervals; year −1 is the omitted category. Positive values indicate a smaller consumption loss from drought. The dashed line marks the first year of programme availability. Specification includes district, state-by-year and drought-by-backwardness controls.",
            },
          ],
        },
      ],
    },
    {
      id: "results",
      heading: "7. Results",
      paragraphs: [
        "We present results in three steps: consumption, labour market outcomes and migration, and children's nutrition and schooling.",
      ],
      subsections: [
        {
          id: "consumption",
          heading: "7.1 Consumption",
          paragraphs: [
            "Table 4 reports the main estimates. In column (1), with district and year fixed effects, a drought reduces real per capita consumption by 8.9 percent in districts without the programme. The interaction with programme availability is 0.058, so in covered districts the drought loss is 3.1 percent, and the programme offsets 65 percent of the loss. The main effect of the programme in non-drought years is small and insignificant, which is consistent with the guarantee mattering most when private labour demand is weak. Adding state-by-year fixed effects in column (2), which absorb state-wide policies such as drought relief and food distribution, barely changes the estimates.",
            "Columns (3) and (4) split consumption into food and non-food items. Food consumption falls by 7.2 percent in a drought without the programme and by 2.3 percent with it; non-food consumption, which includes items such as clothing, footwear and durables that households can postpone, falls by 12.1 percent and 4.8 percent respectively. Column (5) restricts the sample to landless and near-landless households, who depend most on casual labour. Their drought loss is larger, 11.6 percent, and the offset is also larger at 72 percent, consistent with the programme reaching those most exposed to labour-market risk. In contrast, for households owning more than two hectares, the drought loss is 5.4 percent and the interaction is small and insignificant.",
          ],
          tables: [
            {
              id: "table-4",
              caption: "Table 4. Drought, MGNREGA and household consumption",
              columns: ["", "(1) Log consumption", "(2) Log consumption", "(3) Log food", "(4) Log non-food", "(5) Landless households"],
              rows: [
                ["Drought", "−0.089*** (0.021)", "−0.084*** (0.020)", "−0.072*** (0.017)", "−0.121*** (0.029)", "−0.116*** (0.026)"],
                ["MGNREGA", "0.012 (0.011)", "0.010 (0.012)", "0.009 (0.010)", "0.017 (0.016)", "0.021 (0.014)"],
                ["Drought × MGNREGA", "0.058*** (0.019)", "0.055*** (0.019)", "0.049*** (0.016)", "0.073*** (0.027)", "0.084*** (0.024)"],
                ["Share of drought loss offset", "0.65", "0.65", "0.68", "0.60", "0.72"],
                ["State × year fixed effects", "No", "Yes", "Yes", "Yes", "Yes"],
                ["Observations", "318,452", "318,452", "318,452", "318,452", "121,018"],
              ],
              note: "Note: Household-level regressions with district fixed effects and household controls. Consumption is monthly per capita expenditure in 2004–05 rupees. The offset is −(Drought × MGNREGA)/Drought. Standard errors clustered by district in parentheses. *** p < 0.01, ** p < 0.05, * p < 0.1.",
            },
          ],
        },
        {
          id: "labour",
          heading: "7.2 Wages, employment and migration",
          paragraphs: [
            "Table 5 examines labour market outcomes for adults aged 18–60 in the employment rounds. Without the programme, a drought reduces real agricultural casual wages by 6.4 percent, consistent with the large wage elasticities documented by {4}. With the programme, the decline is 1.9 percent and not significantly different from zero. The programme also raises wages by 3.1 percent in non-drought years, in line with the wage effects found by {1}. The number of days spent in private casual work in the reference week falls in drought years with and without the programme, but days in public works rise sharply in covered districts during droughts, so that total days worked fall by much less.",
            "Distress migration responds strongly. A drought raises the probability that an adult undertakes a short-term migration spell by 4.1 percentage points on a base of 4.3 percent, nearly doubling it. In covered districts this increase is reduced by 2.8 percentage points, to 1.3 percentage points. Short-term migration from drought-affected areas typically involves construction or brick-kiln work in distant cities under harsh conditions, with costs that include separation from families and interruptions to children's schooling. That the programme reduces such migration suggests that its insurance value extends beyond the consumption gains measured in Table 4.",
          ],
          tables: [
            {
              id: "table-5",
              caption: "Table 5. Drought, MGNREGA and labour market outcomes",
              columns: ["", "(1) Log agricultural wage", "(2) Days of private casual work", "(3) Days of public works", "(4) Short-term migration"],
              rows: [
                ["Drought", "−0.064*** (0.018)", "−0.27*** (0.07)", "0.02 (0.01)", "0.041*** (0.012)"],
                ["MGNREGA", "0.031** (0.014)", "−0.09* (0.05)", "0.19*** (0.04)", "−0.006 (0.007)"],
                ["Drought × MGNREGA", "0.045*** (0.017)", "0.05 (0.07)", "0.31*** (0.07)", "−0.028** (0.011)"],
                ["Mean of dependent variable", "", "1.84", "0.08", "0.043"],
                ["State × year fixed effects", "Yes", "Yes", "Yes", "Yes"],
                ["Observations", "86,240", "412,906", "412,906", "412,906"],
              ],
              note: "Note: Individual-level regressions for adults aged 18–60 in rural areas, with district fixed effects and individual and household controls. Column (1) is restricted to workers reporting casual agricultural wage employment. Days are measured in the seven-day reference week. Short-term migration is a spell of work away from home lasting 1–6 months in the previous year. Standard errors clustered by district in parentheses. *** p < 0.01, ** p < 0.05, * p < 0.1.",
            },
          ],
        },
        {
          id: "children",
          heading: "7.3 Child nutrition and schooling",
          paragraphs: [
            "Early-life shocks can have lasting consequences [12]. Using the NFHS, we estimate the effect of a drought in a child's year of birth on height-for-age, comparing children born in 2001–2005 (before the programme) with children born in 2011–2015 (when it was universal), with district and birth-year fixed effects. Because the programme was universal in the second period, this comparison does not exploit the phased rollout and should be read as suggestive. Before the programme, a drought in the year of birth reduced height-for-age by 0.14 standard deviations (s.e. 0.03); after it, the effect was 0.05 (s.e. 0.03). The difference of 0.09 standard deviations (s.e. 0.04) is significant at the 5 percent level and is larger for children of landless households.",
            "For schooling, ASER data allow us to exploit the rollout. Consistent with {13}, droughts raise enrolment among children aged 11–14 by 0.9 percentage points in districts without the programme, as lower wages reduce the opportunity cost of schooling. The interaction with programme availability is small (−0.3 percentage points, s.e. 0.5), so we find no evidence that the programme either reinforced or offset this effect, and in particular no evidence that it drew adolescents out of school in drought years. Effects on reading and arithmetic scores are small and imprecisely estimated.",
          ],
        },
      ],
    },
    {
      id: "mechanisms",
      heading: "8. Mechanisms and Heterogeneity",
      paragraphs: [
        "If the programme insures households through the delivery of work and wages, its insurance value should depend on implementation. We classify states into terciles by programme performance using the ratio of person-days generated to the rural population living below the poverty line in 2008–09, a measure that reflects the administrative capacity to supply work rather than demand alone. Table 6 shows that the offset is 82 percent in the top tercile, 56 percent in the middle tercile and 31 percent, statistically insignificant, in the bottom tercile. The drought effect without the programme is nearly identical across terciles, so the differences reflect the programme rather than differences in vulnerability.",
        "Payment delays matter independently. In column (4) we interact the drought–programme term with the share of wage payments delayed by more than fifteen days in the district, averaged over 2010–11 to 2012–13. Each ten-percentage-point increase in this share reduces the interaction coefficient by 0.008, or about nine percent of the drought loss. Because delays were partly determined by state banking and postal infrastructure rather than district demand, we interpret this as evidence that late payment erodes the programme's insurance value. A household that works in the lean season but receives its wages three months later cannot use them to maintain consumption when it needs to. This is consistent with evidence that improvements in payment systems raised the programme's benefits [2][3].",
        "Figure 2 summarises the heterogeneity. The offset ranges from about four-fifths of the drought loss in well-implementing states and districts with prompt payment to about a third where implementation is weak or payments are slow. Across terciles, the response of programme employment to droughts mirrors the consumption offset: a drought raises log person-days by 0.39 in the top tercile and by 0.12 in the bottom tercile, showing that weak implementers failed to scale up work when it was most needed, consistent with evidence on rationing [21].",
        "To quantify the channels, we decompose the consumption offset into the direct transfer from additional programme earnings and the indirect effect through private wages. The additional 11.4 person-days in a drought year at the average programme wage of about Rs 78 in 2004–05 prices are worth about Rs 890 per rural household per year. The avoided consumption loss, 5.8 percent of mean per capita consumption, is worth about Rs 1,970 per household per year. The direct transfer thus accounts for about 45 percent of the consumption offset, with the remainder attributable to the smaller fall in private wages and employment. This decomposition echoes the finding of {3} that the general equilibrium effects of the programme through market wages exceed its direct transfers.",
      ],
      tables: [
        {
          id: "table-6",
          caption: "Table 6. Heterogeneity by state implementation quality and payment delays",
          columns: ["", "(1) Top tercile", "(2) Middle tercile", "(3) Bottom tercile", "(4) All districts"],
          rows: [
            ["Drought", "−0.091*** (0.031)", "−0.087*** (0.033)", "−0.088*** (0.034)", "−0.089*** (0.021)"],
            ["Drought × MGNREGA", "0.075*** (0.024)", "0.049* (0.026)", "0.027 (0.031)", "0.081*** (0.024)"],
            ["Drought × MGNREGA × delayed share (per 10 pp)", "", "", "", "−0.008*** (0.003)"],
            ["Share of drought loss offset", "0.82", "0.56", "0.31", ""],
            ["Drought effect on log person-days", "0.39*** (0.07)", "0.27*** (0.08)", "0.12 (0.08)", ""],
            ["Observations", "109,874", "103,226", "105,352", "318,452"],
          ],
          note: "Note: Dependent variable is log monthly per capita consumption. States are grouped into terciles of person-days generated per rural poor person in 2008–09. Delayed share is the share of wage payments made more than fifteen days after muster-roll closure, averaged over 2010–11 to 2012–13 and demeaned; column (4) includes all lower-order interactions. All specifications include district and state-by-year fixed effects and household controls. Standard errors clustered by district in parentheses. *** p < 0.01, ** p < 0.05, * p < 0.1.",
        },
      ],
      figures: [
        {
          id: "figure-2",
          caption: "Figure 2. Share of drought consumption loss offset by MGNREGA, by implementation quality",
          kind: "bar",
          xLabels: ["Top tercile states", "Middle tercile states", "Bottom tercile states", "Low payment delays", "High payment delays"],
          yLabel: "Percent of drought loss offset",
          series: [{ name: "Offset", values: [82, 56, 31, 78, 39] }],
          note: "Note: Offset is −(Drought × MGNREGA)/Drought from separate regressions by group. Low and high payment delays refer to districts below and above the median share of delayed payments.",
        },
      ],
    },
    {
      id: "robustness",
      heading: "9. Robustness",
      paragraphs: [
        "Our results are robust to alternative definitions of rainfall shocks. Using the 15th or 25th percentile thresholds to define droughts yields offsets of 69 and 61 percent respectively; using a continuous measure of the monsoon rainfall deviation from its long-run mean, a one-standard-deviation shortfall reduces consumption by 3.8 percent without the programme and 1.4 percent with it. Results are similar using a standardised precipitation-evapotranspiration index that accounts for temperature, which suggests that our drought measure is not merely capturing rainfall measurement error.",
        "We also address concerns about the identifying assumption. Adding interactions of drought with the backwardness index, baseline irrigation share, non-farm employment share and distance to the nearest town changes the interaction coefficient only slightly, from 0.055 to 0.051. A placebo test using next year's drought yields an interaction coefficient of 0.006 (s.e. 0.018). Excluding Andhra Pradesh, whose implementation was exceptional, or the 2009 all-India drought, which coincided with the global financial crisis, yields offsets of 61 and 63 percent. Re-estimating the main specification using the estimator of {23}, which uses only not-yet-treated districts as controls and avoids negative weights [24][25], yields an interaction coefficient of 0.062 (s.e. 0.022).",
        "Inference is robust to spatial correlation. Conley standard errors with a 500-kilometre cutoff [29] increase the standard error of the interaction coefficient from 0.019 to 0.024, and a wild cluster bootstrap with clustering at the state level yields a p-value of 0.021. Finally, using district-level averages rather than household-level data, which gives equal weight to each district, yields an interaction coefficient of 0.053 (s.e. 0.020).",
      ],
    },
    {
      id: "discussion",
      heading: "10. Discussion and Policy Implications",
      paragraphs: [
        "Our results suggest that an employment guarantee can provide meaningful insurance against covariate shocks that informal arrangements handle poorly. The programme offsets about two-thirds of the consumption loss from a drought for the average household and nearly three-quarters for landless households. This is a substantial reduction in vulnerability for a programme whose average annual cost has been about 0.5 percent of GDP. For comparison, take-up of subsidised rainfall index insurance has been low [26], and its payouts cover only a fraction of losses for cultivators, while offering no protection at all to landless labourers [27].",
        "The insurance value rests on self-targeting, in time as well as across households. Because the programme offers work at a modest wage, it is taken up mainly by those with poor outside options [16][17], and because private work is scarce in drought years, take-up rises when it is most needed. A transfer programme with fixed annual benefits, by contrast, would provide the same benefits in good and bad years and require costly targeting. Our findings also show the limits of self-targeting: where states cannot scale up work in response to demand or pay wages promptly, the guarantee provides much less protection.",
        "Three policy implications follow. First, the programme's budget should be responsive to rainfall. Allocations that are fixed at the start of the year, or that are cut when the monsoon is poor, undermine its insurance function. Pre-approved shelves of projects that can be expanded quickly in drought years and automatic budget increases triggered by rainfall deficits would strengthen it. Second, timely payment should be treated as central to the programme's design rather than an administrative detail. Reforms that have reduced payment delays, such as direct benefit transfers and electronic fund management [2][14], also increase the programme's insurance value. Third, policy should pay attention to states with weak implementation, which are among India's poorest and most drought-prone, and where the gap between the guarantee's promise and its delivery is largest.",
        "Our analysis has limitations. We measure consumption for households in districts covered by the programme rather than for programme participants, so our estimates are intention-to-treat. We cannot rule out that other drought-relief policies were implemented more effectively in districts with the programme, although state-by-year fixed effects absorb state-wide policies. The child nutrition results rely on a comparison of cohorts before and after the programme and are therefore more vulnerable to confounding by other trends. And our estimates capture the insurance value of the programme against moderate droughts; its value against catastrophic shocks may differ.",
      ],
    },
    {
      id: "conclusion",
      heading: "11. Conclusion",
      paragraphs: [
        "Using the phased rollout of India's employment guarantee and district monsoon shocks, we find that the programme functioned as insurance. In covered districts the consumption loss from a drought fell from 8.9 to 3.1 percent, programme employment expanded by 31 percent in drought years, the drought-induced decline in agricultural wages largely disappeared and distress migration fell. These gains were concentrated in states with strong implementation and prompt payment. Public works can insure rural households against aggregate risk, but only when the state can deliver work and wages when they are needed.",
        "Future research could use the growing availability of high-frequency administrative data to study how quickly the programme responds to shocks within the year, how its insurance value changes as rural labour markets diversify away from agriculture, and how it interacts with other components of the safety net, such as the public distribution system for food grains. As climate change increases the frequency of extreme monsoon events, understanding how to design and deliver state-contingent social protection will become increasingly important.",
      ],
    },
    {
      id: "appendix",
      heading: "Appendix A. Data Construction",
      paragraphs: [
        "Rainfall. Daily gridded rainfall from the India Meteorological Department is aggregated to 2001 Census districts using the share of each grid cell's area falling within each district. Monsoon rainfall is the total from 1 June to 30 September. For each district we compute the empirical distribution of monsoon rainfall over 1951–2005 and classify each year from 2002 to 2012 as a drought (below the 20th percentile), normal or excess-rainfall year (above the 80th percentile). NSS survey years running from July to June are matched to the monsoon at their start.",
        "Programme exposure. NREGA_dt equals one if the district was covered by the programme for at least six months of the NSS survey year. Under this definition Phase I districts are treated from 2006–07, Phase II districts from 2007–08 and Phase III districts from 2008–09. Results are similar if exposure is measured as the share of the survey year in which the district was covered.",
        "Implementation measures. State implementation terciles are based on person-days generated in 2008–09 per rural person below the official poverty line in 2004–05. The delayed-payment share is computed from the management information system as the share of wage transactions completed more than fifteen days after the closure of the corresponding muster roll, averaged over financial years 2010–11 to 2012–13, the first years for which the data are consistently reported.",
      ],
    },
  ],
};
