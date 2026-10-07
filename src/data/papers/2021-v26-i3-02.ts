// Vol. 26, No. 3 (July 2021) — full research paper (sample content).
import type { PaperSpec } from "../paper-spec";

export const paper: PaperSpec = {
  id: "2021-v26-i3-02",
  title: "Air Pollution and Worker Productivity: Evidence from Korean Manufacturing Plants",
  authors: [{ name: "Hyun-Jin Kim", corresponding: true }, { name: "Caroline Dubois" }],
  abstract:
    "We estimate the effect of fine particulate matter (PM2.5) on labour productivity in Korean manufacturing. Pollution is endogenous to local economic activity, so we exploit variation in transboundary pollution transported from China, using the frequency of westerly winds and Asian dust events as instruments. Combining plant-level data from the Mining and Manufacturing Survey for 2015–2019 with monitoring-station data, we find that a 10 μg/m³ increase in annual average PM2.5 reduces value added per worker by 1.6 percent. Effects are twice as large in labour-intensive industries and in plants where a larger share of work is performed outdoors or in poorly ventilated facilities. Our estimates imply that PM2.5 reduces Korean manufacturing value added by about 0.4 percent per year, a cost that is typically omitted from evaluations of air-quality policy.",
  keywords: ["Air pollution", "Productivity", "Transboundary pollution", "PM2.5", "Manufacturing"],
  jelCodes: ["Q53", "J24", "D24", "Q51"],
  pages: "271–300",
  volume: 26,
  issue: 3,
  year: 2021,
  received: "2020-09-21",
  accepted: "2021-04-12",
  published: "2021-07-15",
  publishedOnline: "2021-07-02",
  citations: 36,
  downloads: 3010,
  pdfSize: "1.63 MB",
  type: "Research Article",
  acknowledgments:
    "We thank seminar participants at Hanyang University and the Korea Environment Institute, two anonymous referees and the handling editor for helpful comments. Monitoring data were provided by the National Institute of Environmental Research.",
  dataAvailability:
    "Plant-level data are available through Statistics Korea's MicroData Integrated Service; air-quality and meteorological data are publicly available from AirKorea and the Korea Meteorological Administration. Code is available from the corresponding author.",
  refs: [
    /* 1 */ "Graff Zivin, J., & Neidell, M. (2012). The impact of pollution on worker productivity. American Economic Review, 102(7), 3652–3673.",
    /* 2 */ "Chang, T., Graff Zivin, J., Gross, T., & Neidell, M. (2016). Particulate pollution and the productivity of pear packers. American Economic Journal: Economic Policy, 8(3), 141–169.",
    /* 3 */ "He, J., Liu, H., & Salvo, A. (2019). Severe air pollution and labor productivity: Evidence from industrial towns in China. American Economic Journal: Applied Economics, 11(1), 173–201.",
    /* 4 */ "Jia, R., & Ku, H. (2019). Is China's pollution the culprit for the choking of South Korea? Evidence from the Asian dust. Economic Journal, 129(624), 3154–3188.",
    /* 5 */ "Chen, Y., Ebenstein, A., Greenstone, M., & Li, H. (2013). Evidence on the impact of sustained exposure to air pollution on life expectancy from China's Huai River policy. Proceedings of the National Academy of Sciences, 110(32), 12936–12941.",
    /* 6 */ "Deryugina, T., Heutel, G., Miller, N. H., Molitor, D., & Reif, J. (2019). The mortality and medical costs of air pollution: Evidence from changes in wind direction. American Economic Review, 109(12), 4178–4219.",
    /* 7 */ "Ebenstein, A., Fan, M., Greenstone, M., He, G., & Zhou, M. (2017). New evidence on the impact of sustained exposure to air pollution on life expectancy from China's Huai River Policy. Proceedings of the National Academy of Sciences, 114(39), 10384–10389.",
    /* 8 */ "Chang, T. Y., Graff Zivin, J., Gross, T., & Neidell, M. (2019). The effect of pollution on worker productivity: Evidence from call center workers in China. American Economic Journal: Applied Economics, 11(1), 151–172.",
    /* 9 */ "Graff Zivin, J., & Neidell, M. (2013). Environment, health, and human capital. Journal of Economic Literature, 51(3), 689–730.",
    /* 10 */ "Lichter, A., Pestel, N., & Sommer, E. (2017). Productivity effects of air pollution: Evidence from professional soccer. Labour Economics, 48, 54–66.",
    /* 11 */ "Archsmith, J., Heyes, A., & Saberian, S. (2018). Air quality and error quantity: Pollution and performance in a high-skilled, quality-focused occupation. Journal of the Association of Environmental and Resource Economists, 5(4), 827–863.",
    /* 12 */ "Hanna, R., & Oliva, P. (2015). The effect of pollution on labor supply: Evidence from a natural experiment in Mexico City. Journal of Public Economics, 122, 68–79.",
    /* 13 */ "Aragón, F. M., Miranda, J. J., & Oliva, P. (2017). Particulate matter and labor supply: The role of caregiving and non-linearities. Journal of Environmental Economics and Management, 86, 295–309.",
    /* 14 */ "Schlenker, W., & Walker, W. R. (2016). Airports, air pollution, and contemporaneous health. Review of Economic Studies, 83(2), 768–809.",
    /* 15 */ "Currie, J., & Neidell, M. (2005). Air pollution and infant health: What can we learn from California's recent experience? Quarterly Journal of Economics, 120(3), 1003–1030.",
    /* 16 */ "Ebenstein, A., Lavy, V., & Roth, S. (2016). The long-run economic consequences of high-stakes examinations: Evidence from transitory variation in pollution. American Economic Journal: Applied Economics, 8(4), 36–65.",
    /* 17 */ "Zhang, X., Chen, X., & Zhang, X. (2018). The impact of exposure to air pollution on cognitive performance. Proceedings of the National Academy of Sciences, 115(37), 9193–9197.",
    /* 18 */ "Greenstone, M., & Hanna, R. (2014). Environmental regulations, air and water pollution, and infant mortality in India. American Economic Review, 104(10), 3038–3072.",
    /* 19 */ "Pope, C. A., & Dockery, D. W. (2006). Health effects of fine particulate air pollution: Lines that connect. Journal of the Air & Waste Management Association, 56(6), 709–742.",
    /* 20 */ "Olley, G. S., & Pakes, A. (1996). The dynamics of productivity in the telecommunications equipment industry. Econometrica, 64(6), 1263–1297.",
    /* 21 */ "Levinsohn, J., & Petrin, A. (2003). Estimating production functions using inputs to control for unobservables. Review of Economic Studies, 70(2), 317–341.",
    /* 22 */ "Dell, M., Jones, B. F., & Olken, B. A. (2014). What do we learn from the weather? The new climate-economy literature. Journal of Economic Literature, 52(3), 740–798.",
    /* 23 */ "Zhang, P., Deschenes, O., Meng, K., & Zhang, J. (2018). Temperature effects on productivity and factor reallocation: Evidence from a half million Chinese manufacturing plants. Journal of Environmental Economics and Management, 88, 1–17.",
    /* 24 */ "Somanathan, E., Somanathan, R., Sudarshan, A., & Tewari, M. (2021). The impact of temperature on productivity and labor supply: Evidence from Indian manufacturing. Journal of Political Economy, 129(6), 1797–1827.",
    /* 25 */ "Stock, J. H., & Yogo, M. (2005). Testing for weak instruments in linear IV regression. In D. W. K. Andrews & J. H. Stock (Eds.), Identification and Inference for Econometric Models: Essays in Honor of Thomas Rothenberg (pp. 80–108). Cambridge: Cambridge University Press.",
    /* 26 */ "Isen, A., Rossin-Slater, M., & Walker, W. R. (2017). Every breath you take—every dollar you'll make: The long-term consequences of the Clean Air Act of 1970. Journal of Political Economy, 125(3), 848–902.",
    /* 27 */ "Arceo, E., Hanna, R., & Oliva, P. (2016). Does the effect of pollution on infant mortality differ between developing and developed countries? Evidence from Mexico City. Economic Journal, 126(591), 257–280.",
  ],
  body: [
    {
      id: "introduction",
      heading: "1. Introduction",
      paragraphs: [
        "Air pollution is among the most important environmental threats to health. Fine particulate matter (PM2.5) penetrates deep into the lungs and bloodstream and is associated with cardiovascular and respiratory disease and premature death [19], and quasi-experimental studies show that sustained exposure substantially shortens life expectancy [5][7]. A growing body of evidence suggests that pollution also reduces productivity at work, even at concentrations below those that cause acute illness [1][2][9]. If so, the economic costs of pollution extend well beyond health care and mortality, and evaluations of air-quality policy that omit productivity effects understate its benefits.",
        "Estimating these productivity effects at scale is difficult because pollution is correlated with economic activity. Busy factories, heavy traffic and construction raise local pollution, so naive comparisons of productivity across places and periods confound the effect of pollution with the effect of demand. Worker-level studies address this problem with detailed output data from a single firm or occupation [1][2][8], but their results may not generalise to the economy as a whole. Firm-level studies, by contrast, require a source of variation in pollution that is unrelated to local economic conditions.",
        "Korea offers such a source. A substantial share of the fine particulate pollution in Korean cities originates outside the country and is carried by westerly winds from the industrial regions of northern and eastern China, as well as by seasonal Asian dust storms from the deserts of Mongolia and northern China. Jia and Ku {4} show that Asian dust events, which carry anthropogenic pollutants across the Yellow Sea, raise mortality in Korea. We exploit the same transboundary variation, using the frequency of westerly winds and Asian dust events, interacted with distance from the western coast, as instruments for local PM2.5 concentrations.",
        "Combining plant-level data from the Mining and Manufacturing Survey for 2015–2019 with data from about 400 air-quality monitoring stations, we find that a 10 μg/m³ increase in annual average PM2.5 reduces value added per worker by 1.6 percent. OLS estimates are close to zero, consistent with the positive correlation between local activity and pollution. Effects are twice as large in labour-intensive industries and in plants where a larger share of work is performed outdoors or in poorly ventilated facilities, and close to zero in capital-intensive industries with automated, enclosed production.",
        "Because the largest plants by value added operate automated and enclosed production lines, the value-added-weighted effect is smaller than the average plant-level effect. Combining value-added-weighted estimates with observed concentrations, we estimate that PM2.5 reduces Korean manufacturing value added by about 0.4 percent per year relative to a scenario that meets the World Health Organization (WHO) guideline in force during our sample period, with about half of this cost attributable to transboundary pollution. This cost is typically omitted from evaluations of air-quality policy.",
        "Section 2 describes air pollution in Korea and Section 3 reviews related literature. Section 4 presents the conceptual framework, Section 5 the data and Section 6 the empirical strategy. Section 7 reports the main results, Section 8 examines mechanisms and dynamics, Section 9 presents robustness checks, Section 10 discusses implications and Section 11 concludes.",
      ],
    },
    {
      id: "background",
      heading: "2. Air Pollution in Korea",
      paragraphs: [
        "Korea's annual average PM2.5 concentrations, at about 25 μg/m³ during our sample period, were among the highest in the OECD and two and a half times the WHO guideline of 10 μg/m³ then in force. Korea introduced an annual PM2.5 standard of 25 μg/m³ in 2015 and tightened it to 15 μg/m³ in 2018. High-pollution episodes became a major public concern in the late 2010s, leading to the Special Act on the Reduction and Management of Fine Dust, emergency reduction measures restricting vehicle use and the operation of coal-fired power plants, and seasonal management programmes from late 2019.",
        "Pollution in Korea has both domestic and foreign sources. Domestic sources include coal-fired power plants, heavy industry, diesel vehicles and construction. Foreign sources are dominated by emissions from industrial regions of China, which are carried across the Yellow Sea by the prevailing westerly winds, particularly in winter and spring. Joint research by Korea, China and Japan, as well as field campaigns combining aircraft and ground measurements, attribute a substantial share of annual average PM2.5 in Korean cities — and a larger share on high-pollution days — to sources outside Korea. Asian dust events, in which mineral dust from the Gobi and Taklamakan deserts is transported eastward, occur mainly in spring and carry anthropogenic pollutants picked up over China [4].",
        "The contribution of transboundary pollution varies across Korea and over time. It is largest in the western regions facing the Yellow Sea, including the capital region and the industrial cities of South Chungcheong, and declines towards the east, where mountains and distance dilute foreign pollutants. It also varies across years with the frequency of westerly winds and the number of dust events, which depend on large-scale atmospheric circulation rather than on Korean economic activity. This combination of spatial and temporal variation underlies our identification strategy.",
      ],
    },
    {
      id: "literature",
      heading: "3. Related Literature",
      paragraphs: [
        "Our paper builds on a literature that measures the effects of pollution on worker productivity using detailed output data. Ozone reduces the productivity of agricultural workers paid by piece rate [1], PM2.5 reduces the output of indoor pear packers [2], and pollution reduces the number of calls handled by call-centre workers in China [8]. Pollution also reduces the performance of professional football players [10] and increases the error rate of baseball umpires [11], indicating that effects are not confined to physically demanding work. Exposure to pollution lowers cognitive performance on tests [16][17], with long-run consequences for educational attainment and earnings [16][26].",
        "A second strand studies effects at the level of firms or regions. Severe pollution lowers output in Chinese industrial towns [3], and pollution reduces labour supply, partly because workers stay home to care for sick children [12][13]. Graff Zivin and Neidell {9} review the evidence linking environmental quality to human capital and conclude that productivity effects may be as important as health effects in the welfare costs of pollution. A related literature documents the effects of temperature on productivity in manufacturing plants [23][24], using methods from the climate-economy literature [22].",
        "A third strand uses meteorological variation to identify the health effects of pollution. Changes in wind direction have been used to estimate the mortality and medical costs of pollution among the US elderly [6], airport congestion transmitted by wind to estimate effects on respiratory illness [14], while thermal inversions, environmental regulation and other natural experiments have been used to estimate effects on infant health [15][18][27]. Jia and Ku {4} use Asian dust events to estimate the effects of Chinese pollution on mortality in Korea. We extend this approach to productivity in manufacturing plants.",
        "Our contribution is to provide economy-wide estimates of the effect of PM2.5 on productivity in a high-income economy using an instrument that isolates pollution generated outside the country. Because transboundary pollution is plausibly unrelated to local economic activity, our design avoids the main source of bias in firm-level studies. Our data also allow us to study heterogeneity across industries and work environments and to compute the aggregate cost of pollution for manufacturing.",
      ],
    },
    {
      id: "framework",
      heading: "4. Conceptual Framework",
      paragraphs: [
        "Pollution can reduce value added per worker through several channels. First, it may reduce the effort or efficiency of workers who are present, through respiratory discomfort, fatigue and reduced cognitive function [1][17]. Second, it may reduce labour supply through absences due to illness or caregiving [12][13], which lowers output if absent workers are imperfectly replaced. Third, firms may respond to pollution by adjusting inputs, for example by reducing outdoor work or investing in air filtration, which would mitigate measured productivity losses but impose costs of their own.",
        "These channels imply that productivity effects should vary with the intensity of labour in production and with workers' exposure. In capital-intensive industries with automated, enclosed production, output depends mainly on machines, and workers operate in clean, climate-controlled environments; effects should be small. In labour-intensive industries, and in plants where work is performed outdoors or in poorly ventilated facilities, workers are more exposed and their effort matters more for output; effects should be larger. We test these predictions in Section 7.",
        "Because our outcome is annual value added per worker, our estimates capture the net effect of pollution after firms' adjustments within the year. They therefore measure the economically relevant cost of pollution for manufacturing output, but they cannot separate the effect on individual effort from the effects of absences and input adjustment. We provide indirect evidence on these channels in Section 8.",
        "Finally, the framework implies that plant-level estimates may differ from worker-level estimates for reasons other than measurement. If plants can reallocate tasks across workers, substitute capital for labour on high-pollution days or adjust production schedules within the year, plant-level losses will be smaller than the losses in individual effort measured in worker-level studies [2][8]. Conversely, if pollution affects coordination among workers or the quality of output, plant-level losses may be larger. Comparing our estimates with worker-level evidence therefore provides information on the extent to which firms adjust to pollution.",
      ],
    },
    {
      id: "data",
      heading: "5. Data",
      paragraphs: [],
      subsections: [
        {
          id: "data-plants",
          heading: "5.1 Plant Data",
          paragraphs: [
            "The Mining and Manufacturing Survey, conducted annually by Statistics Korea, covers all manufacturing plants with ten or more employees and reports value added, gross output, employment, wage bill, tangible fixed assets, material costs and industry at the five-digit level. Plant identifiers allow us to follow plants over time, and plant addresses allow us to locate them at the level of the town or district. Our sample covers 2015–2019 and contains 312,400 plant-years. Value added and capital are deflated using industry-specific price indices.",
            "We classify industries as labour-intensive if their ratio of wage bill to value added in 2014 was above the manufacturing median; these industries account for 38 percent of plants but only 21 percent of value added. To measure workers' exposure, we use the Korea Network for Occupations and Workers data on the share of each occupation's work performed outdoors and on exposure to dust and fumes, which we aggregate to industries using occupational employment shares. We classify plants as having poorly ventilated facilities if they operate in industries with high exposure to dust and fumes and occupy buildings without mechanical ventilation according to building registry records, which we can match for about 70 percent of plants.",
          ],
        },
        {
          id: "data-pollution",
          heading: "5.2 Pollution and Weather Data",
          paragraphs: [
            "Hourly PM2.5 concentrations come from the AirKorea network of about 400 monitoring stations operated by the National Institute of Environmental Research. We compute annual averages for each station and assign each plant the value of the nearest station within 20 kilometres, or an inverse-distance-weighted average of stations within 30 kilometres where no station lies within 20 kilometres. Wind direction and speed, temperature, precipitation and humidity come from the Korea Meteorological Administration's automated weather stations. Asian dust days are recorded by the Korea Meteorological Administration.",
            "Table 1 summarises the sample. Annual average PM2.5 across plants is 24.8 μg/m³, with a standard deviation of 4.6. Westerly winds blow on 41 percent of days on average, and there are 7.2 Asian dust days per year. Within-plant variation in PM2.5 across years, after removing year and region effects, has a standard deviation of 2.1 μg/m³, driven largely by variation in wind patterns and dust events.",
          ],
          tables: [
            {
              id: "table-1",
              caption: "Table 1. Plant and pollution characteristics, 2015–2019",
              columns: ["Variable", "Mean", "Std. dev.", "Within-plant std. dev."],
              rows: [
                ["Annual average PM2.5 (μg/m³)", "24.8", "4.6", "2.1"],
                ["Days with PM2.5 above 35 μg/m³", "61.3", "22.8", "11.4"],
                ["Days with westerly winds (share)", "0.41", "0.07", "0.04"],
                ["Asian dust days per year", "7.2", "4.1", "3.3"],
                ["Distance to western coast (km)", "92.6", "61.4", "—"],
                ["Log value added per worker", "11.31", "0.88", "0.24"],
                ["Employment", "48.7", "211.5", "9.8"],
                ["Labour-intensive industry (share of plants)", "0.38", "—", "—"],
                ["Outdoor work share of industry (%)", "11.2", "9.6", "—"],
                ["Plant-years", "312,400", "", ""],
              ],
              note: "Note: Within-plant standard deviation computed after removing plant and year fixed effects. Value added per worker in KRW thousand, 2015 prices.",
            },
          ],
        },
      ],
    },
    {
      id: "strategy",
      heading: "6. Empirical Strategy",
      paragraphs: [
        "Our main specification is ln(VA/L)_pt = β·PM_pt + X_pt·γ + α_p + δ_jt + ε_pt, where (VA/L)_pt is value added per worker of plant p in year t, PM_pt is annual average PM2.5 in tens of μg/m³, X_pt includes flexible controls for temperature (the number of days in each of eight temperature bins), precipitation, humidity and wind speed, α_p are plant fixed effects and δ_jt are three-digit industry-by-year fixed effects. Standard errors are clustered by monitoring station.",
      ],
      subsections: [
        {
          id: "instruments",
          heading: "6.1 Instruments",
          paragraphs: [
            "We instrument PM2.5 with the share of days in the year on which wind blew from the west (between 225 and 315 degrees) at the nearest weather station and the number of Asian dust days in the plant's region, each interacted with distance to the western coast. Plant fixed effects absorb permanent differences in exposure across locations, so identification comes from year-to-year variation in transboundary transport that differs in intensity between plants close to and far from the western coast. Industry-by-year fixed effects absorb national demand shocks and any nationwide effects of Chinese economic conditions.",
            "Table 2 reports first-stage estimates. A ten percentage point increase in the share of westerly days raises PM2.5 by 1.9 μg/m³ at the coast, with the effect declining by about 0.6 μg/m³ for every 100 kilometres inland. Each additional Asian dust day raises annual PM2.5 by 0.21 μg/m³ at the coast. The Kleibergen–Paap F-statistic is 46.2, well above conventional thresholds for weak instruments [25].",
          ],
          tables: [
            {
              id: "table-2",
              caption: "Table 2. First stage: transboundary transport and annual PM2.5",
              columns: ["Instrument", "PM2.5 (μg/m³)", "Std. error"],
              rows: [
                ["Westerly-day share (×10)", "1.92***", "(0.24)"],
                ["Westerly-day share (×10) × distance to coast (100 km)", "−0.61***", "(0.13)"],
                ["Asian dust days", "0.21***", "(0.04)"],
                ["Asian dust days × distance to coast (100 km)", "−0.07***", "(0.02)"],
                ["Kleibergen–Paap F-statistic", "46.2", ""],
                ["Plant and industry-by-year fixed effects", "Yes", ""],
                ["Weather controls", "Yes", ""],
                ["Plant-years", "312,400", ""],
              ],
              note: "Note: Standard errors clustered by monitoring station in parentheses. *** p < 0.01.",
            },
          ],
        },
        {
          id: "identification",
          heading: "6.2 Identifying Assumption",
          paragraphs: [
            "The instruments are valid if, conditional on weather controls and fixed effects, wind patterns and dust events affect plant productivity only through air quality. Two threats are worth considering. First, wind direction is correlated with temperature and precipitation, which themselves affect productivity [23][24]; we therefore control flexibly for these variables. Second, Asian dust may disrupt logistics or damage equipment; we show in Section 9 that results are similar when we use westerly winds alone.",
            "We also implement a placebo test. Plants operating in sealed clean-room environments — semiconductor fabrication, display panels and pharmaceuticals — filter incoming air to standards far stricter than outdoor concentrations, so outdoor pollution should not affect their workers. Reduced-form effects of the instruments on productivity in these plants are small and statistically insignificant, supporting the exclusion restriction.",
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
            "Table 3 reports the main estimates. The OLS estimate in column (1) is small and statistically insignificant: a 10 μg/m³ increase in PM2.5 is associated with a 0.4 percent decline in value added per worker. The IV estimate in column (2) implies that a 10 μg/m³ increase reduces value added per worker by 1.6 percent. The difference between the OLS and IV estimates is consistent with the positive correlation between local economic activity and pollution, which biases OLS towards zero.",
            "Columns (3) and (4) show that the IV estimate is similar when we use only westerly winds or only Asian dust as instruments, and column (5) shows that it is similar when we add region-by-year fixed effects, which absorb regional economic shocks. Column (6) weights plants by value added: the estimate falls to 0.27 percent, because large plants, which account for most value added, operate automated and enclosed production lines.",
            "The magnitude of our estimates is in line with worker-level evidence. Chang et al. {2} find that a 10 μg/m³ increase in PM2.5 reduces the productivity of pear packers by about 6 percent, and Chang et al. {8} show that pollution also lowers the daily output of call-centre workers, indicating that effects extend to indoor work that is not physically demanding. Our plant-level estimate is smaller, as would be expected given that plant output depends on capital as well as labour and that firms can adjust to pollution within the year.",
          ],
          tables: [
            {
              id: "table-3",
              caption: "Table 3. Effect of PM2.5 (10 μg/m³) on log value added per worker",
              columns: ["", "(1) OLS", "(2) IV", "(3) IV, wind only", "(4) IV, dust only", "(5) IV, region × year FE", "(6) IV, VA-weighted"],
              rows: [
                ["PM2.5 (10 μg/m³)", "−0.004", "−0.016***", "−0.015***", "−0.019**", "−0.014***", "−0.0027**"],
                ["", "(0.003)", "(0.005)", "(0.005)", "(0.008)", "(0.005)", "(0.0013)"],
                ["First-stage F", "—", "46.2", "52.7", "24.9", "38.4", "41.0"],
                ["Plant-years", "312,400", "312,400", "312,400", "312,400", "312,400", "312,400"],
              ],
              note: "Note: All specifications include plant and industry-by-year fixed effects and weather controls. Standard errors clustered by monitoring station in parentheses. ** p < 0.05, *** p < 0.01.",
            },
          ],
        },
        {
          id: "results-heterogeneity",
          heading: "7.2 Heterogeneity by Industry and Work Environment",
          paragraphs: [
            "Table 4 reports IV estimates for subsamples. Effects are 3.1 percent in labour-intensive industries — about twice the average — and close to zero in capital-intensive industries. They are 3.4 percent in industries in the top quartile of the outdoor-work share, such as shipbuilding, steel structures and construction materials, and 3.2 percent in plants classified as having poorly ventilated facilities, compared with 1.1 percent and 1.2 percent in the remaining plants. Effects are also larger in small plants and in plants with older workforces, who are more susceptible to the respiratory effects of particulate matter.",
            "Figure 1 summarises the heterogeneity across groups. The pattern is consistent with the prediction of the conceptual framework that pollution matters most where workers are most exposed and where their effort matters most for output. It also helps explain why the value-added-weighted estimate is much smaller than the unweighted estimate: labour-intensive and outdoor-intensive plants are numerous but small.",
          ],
          tables: [
            {
              id: "table-4",
              caption: "Table 4. Heterogeneity of the effect of PM2.5 (10 μg/m³) on log value added per worker (IV)",
              columns: ["Subsample", "Estimate", "Std. error", "First-stage F", "Plant-years"],
              rows: [
                ["Labour-intensive industries", "−0.031***", "(0.009)", "41.8", "118,700"],
                ["Capital-intensive industries", "−0.003", "(0.006)", "44.1", "193,700"],
                ["Top quartile of outdoor-work share", "−0.034***", "(0.011)", "35.2", "78,100"],
                ["Other industries", "−0.011**", "(0.005)", "45.0", "234,300"],
                ["Poorly ventilated facilities", "−0.032***", "(0.010)", "29.6", "51,200"],
                ["Other matched plants", "−0.012**", "(0.006)", "40.3", "167,400"],
                ["Fewer than 50 employees", "−0.021***", "(0.006)", "43.7", "247,500"],
                ["50 or more employees", "−0.007", "(0.005)", "38.9", "64,900"],
                ["Workforce mean age above 45", "−0.024***", "(0.008)", "39.5", "142,600"],
                ["Workforce mean age 45 or below", "−0.010*", "(0.006)", "42.2", "169,800"],
              ],
              note: "Note: Specifications as in Table 3, column (2). Ventilation classification available for plants matched to building registry records. * p < 0.10, ** p < 0.05, *** p < 0.01.",
            },
          ],
          figures: [
            {
              id: "figure-1",
              caption: "Figure 1. Effect of a 10 μg/m³ increase in PM2.5 on value added per worker, by group",
              kind: "bar",
              xLabels: ["All plants", "Labour-intensive", "Capital-intensive", "Outdoor work (top quartile)", "Poorly ventilated", "Fewer than 50 workers"],
              yLabel: "Percent change in value added per worker",
              series: [
                {
                  name: "IV estimate",
                  values: [-1.6, -3.1, -0.3, -3.4, -3.2, -2.1],
                  lower: [-2.6, -4.9, -1.5, -5.6, -5.2, -3.3],
                  upper: [-0.6, -1.3, 0.9, -1.2, -1.2, -0.9],
                },
              ],
              note: "Note: IV estimates from Tables 3 and 4 with 95 percent confidence intervals.",
            },
          ],
        },
        {
          id: "results-aggregate",
          heading: "7.3 Aggregate Costs",
          paragraphs: [
            "To compute the aggregate cost of PM2.5 for manufacturing, we combine the value-added-weighted estimate with the gap between observed concentrations and the WHO guideline of 10 μg/m³ in force during our sample period. Average exposure weighted by value added was 24.6 μg/m³, so the gap is 14.6 μg/m³, and the implied reduction in manufacturing value added is 0.27 × 1.46 ≈ 0.4 percent per year — equivalent to about KRW 1.8 trillion in 2019. Using industry-specific estimates rather than a single weighted coefficient yields a similar figure.",
            "We also compute the share of this cost attributable to transboundary pollution. Using the first-stage estimates to predict the component of PM2.5 explained by westerly winds and dust events, and combining this with official source-apportionment estimates, about half of the productivity cost is attributable to pollution originating outside Korea. Because the cost falls disproportionately on small, labour-intensive plants, it is also regressive across firms and likely across workers.",
            "This productivity cost is small relative to estimates of the mortality costs of PM2.5, but it is not negligible. It is comparable in magnitude to annual public spending on industrial research and development subsidies for small and medium-sized manufacturers, and it recurs every year that concentrations remain above the guideline. It also excludes plants with fewer than ten employees and sectors outside manufacturing, such as construction, agriculture and delivery services, where outdoor work is common and effects are likely to be larger. Our estimate should therefore be regarded as a lower bound on the productivity costs of fine particulate pollution for the Korean economy as a whole.",
          ],
        },
      ],
    },
    {
      id: "mechanisms",
      heading: "8. Mechanisms and Dynamics",
      paragraphs: [
        "Table 5 examines effects on other plant outcomes. A 10 μg/m³ increase in PM2.5 reduces gross output by 1.4 percent and value added by 1.7 percent, but has no detectable effect on employment, capital or the wage bill. The decline in value added per worker therefore reflects lower output with unchanged inputs, rather than changes in the scale of production. Total factor productivity estimated using the control-function approaches of Olley and Pakes {20} and Levinsohn and Petrin {21} falls by 1.2 to 1.3 percent, consistent with a reduction in the efficiency of labour. Material costs fall in proportion to output, suggesting that plants produce less rather than waste more materials.",
        "We obtain indirect evidence on the channels using the number of days with very high pollution. Replacing annual average PM2.5 with the number of days above 35 μg/m³, the daily threshold at which Korean authorities issue warnings, yields an effect of 0.3 percent per ten additional high-pollution days, and the annual-average effect is concentrated in years with many such days. Effects are larger in plants in which a higher share of workers are women of child-rearing age, consistent with absences for caregiving on days when children's schools and nurseries curtail outdoor activities [13]. These patterns suggest that both reduced effort and absences contribute to the productivity loss.",
        "Figure 2 examines dynamics by including PM2.5 in the two years before and after the outcome year, each instrumented with the corresponding transboundary instruments. Future pollution has no effect on current productivity, providing a further placebo test. Pollution in the previous year has a small negative effect, consistent with cumulative health effects, but the effect of pollution two years earlier is indistinguishable from zero. The contemporaneous effect is essentially unchanged when leads and lags are included.",
      ],
      tables: [
        {
          id: "table-5",
          caption: "Table 5. Effects of PM2.5 (10 μg/m³) on plant inputs and outputs (IV)",
          columns: ["Outcome (log)", "Estimate", "Std. error"],
          rows: [
            ["Gross output", "−0.014***", "(0.005)"],
            ["Value added", "−0.017***", "(0.006)"],
            ["Employment", "−0.001", "(0.003)"],
            ["Wage bill", "−0.003", "(0.004)"],
            ["Tangible fixed assets", "0.002", "(0.004)"],
            ["Material costs", "−0.012**", "(0.005)"],
            ["TFP (Olley–Pakes)", "−0.012***", "(0.004)"],
            ["TFP (Levinsohn–Petrin)", "−0.013***", "(0.004)"],
          ],
          note: "Note: Specifications as in Table 3, column (2); 312,400 plant-years. ** p < 0.05, *** p < 0.01.",
        },
      ],
      figures: [
        {
          id: "figure-2",
          caption: "Figure 2. Effects of PM2.5 in surrounding years on value added per worker",
          kind: "line",
          xLabels: ["t−2", "t−1", "t", "t+1", "t+2"],
          yLabel: "Percent change per 10 μg/m³",
          series: [
            {
              name: "IV estimate",
              values: [-0.1, -0.4, -1.6, 0.1, 0.0],
              lower: [-0.9, -1.1, -2.6, -0.7, -0.8],
              upper: [0.7, 0.3, -0.6, 0.9, 0.8],
            },
          ],
          marker: 2,
          note: "Note: Coefficients from a single IV regression including PM2.5 in years t−2 to t+2, each instrumented with the corresponding transboundary instruments, with 95 percent confidence intervals. Leads (t+1, t+2) serve as placebo tests.",
        },
      ],
    },
    {
      id: "robustness",
      heading: "9. Robustness",
      paragraphs: [
        "Table 6 reports robustness checks. Results are similar when we assign pollution using only plants within 10 kilometres of a monitoring station, when we use satellite-derived PM2.5 estimates, which are available for every location, and when we exclude the Seoul Capital Area, where traffic contributes heavily to pollution. Excluding plants in industries that are themselves major emitters, such as steel, cement and petrochemicals, does not change the estimate, nor does controlling for local emissions from power plants and industrial facilities reported in the national emissions inventory.",
        "The placebo test in clean-room industries yields a small and insignificant estimate, and the estimate is unchanged when we control for distance-to-coast-specific linear trends, which would absorb gradual divergence between coastal and inland regions. Finally, excluding 2019, when emergency reduction measures restricted some industrial activity on high-pollution days, yields a slightly larger estimate, suggesting that these measures did not drive our results.",
        "We also examine whether the effect is linear in PM2.5. Replacing annual average concentrations with the number of days in each of five concentration bins, instrumented with the interactions of the transboundary instruments with bin-specific seasonal patterns, yields effects that rise with concentrations: days below 15 μg/m³ have no measurable effect relative to the cleanest days, while each additional day above 50 μg/m³ reduces annual value added per worker by about 0.02 percent. The linear specification provides a good approximation over the range of annual averages observed in our sample, but the bin estimates suggest that policies targeting high-pollution episodes, such as the seasonal management programme, may yield disproportionately large productivity benefits.",
      ],
      tables: [
        {
          id: "table-6",
          caption: "Table 6. Robustness of the effect of PM2.5 (10 μg/m³) on log value added per worker (IV)",
          columns: ["Specification", "Estimate", "Std. error", "First-stage F"],
          rows: [
            ["Baseline", "−0.016***", "(0.005)", "46.2"],
            ["Plants within 10 km of a monitor", "−0.018***", "(0.006)", "39.8"],
            ["Satellite-derived PM2.5", "−0.015***", "(0.005)", "51.3"],
            ["Excluding Seoul Capital Area", "−0.017***", "(0.006)", "43.0"],
            ["Excluding high-emitting industries", "−0.016***", "(0.005)", "45.1"],
            ["Controlling for local emissions inventory", "−0.015***", "(0.005)", "44.7"],
            ["Distance-to-coast-specific trends", "−0.014***", "(0.005)", "33.6"],
            ["Excluding 2019", "−0.018***", "(0.006)", "40.2"],
            ["Placebo: clean-room industries", "−0.002", "(0.007)", "47.5"],
          ],
          note: "Note: Specifications as in Table 3, column (2) unless stated. Standard errors clustered by monitoring station in parentheses. *** p < 0.01.",
        },
      ],
    },
    {
      id: "discussion",
      heading: "10. Discussion",
      paragraphs: [
        "Our estimates imply that fine particulate pollution imposes a meaningful cost on Korean manufacturing through lower productivity, in addition to its well-documented health costs [6][19]. A reduction in manufacturing value added of 0.4 percent per year is modest compared with the mortality costs of pollution, but it is a recurring cost borne mainly by small, labour-intensive plants and their workers, and it is typically omitted from cost–benefit analyses of air-quality regulation. Including productivity effects would strengthen the case for policies that reduce PM2.5 concentrations.",
        "Because about half of the cost is attributable to pollution originating outside Korea, domestic policy alone cannot eliminate it. Our results therefore strengthen the economic case for regional cooperation on air quality, building on existing joint monitoring and research programmes between Korea, China and Japan [4]. China's own efforts to reduce emissions since 2013, which have lowered PM2.5 concentrations in its northern and eastern provinces, are likely to have generated productivity benefits in Korea that are not counted in assessments of those policies.",
        "Our estimates also suggest where adaptation might be most valuable. Effects are concentrated among plants with outdoor work and poor ventilation, where investments in air filtration, protective equipment and the scheduling of outdoor work around high-pollution days could mitigate losses. Because these plants are small and often credit-constrained, subsidies for workplace air-quality improvements may be warranted.",
        "Our analysis has limitations. Annual plant-level data cannot distinguish effects on effort from effects on absences, and the survey excludes plants with fewer than ten employees, in which exposure may be even higher. Our estimates capture short-run effects of year-to-year variation in pollution and may understate the costs of sustained exposure, which affect health and human capital over longer horizons [26].",
      ],
    },
    {
      id: "conclusion",
      heading: "11. Conclusion",
      paragraphs: [
        "Exploiting variation in pollution transported from China by westerly winds and Asian dust events, we find that a 10 μg/m³ increase in annual average PM2.5 reduces value added per worker in Korean manufacturing plants by 1.6 percent, with effects twice as large in labour-intensive industries and in plants with outdoor work or poor ventilation. Fine particulate pollution reduces Korean manufacturing value added by about 0.4 percent per year, a cost that should be included in evaluations of air-quality policy. Because much of this pollution crosses national borders, our results strengthen the economic case for regional cooperation on air quality [4][9].",
      ],
    },
    {
      id: "appendix",
      heading: "Appendix A. Construction of Pollution and Instrument Variables",
      paragraphs: [
        "Pollution assignment. Hourly PM2.5 readings are cleaned by removing negative values and readings flagged as invalid by the monitoring network. Daily averages are computed for days with at least 18 valid hourly readings, and annual averages for station-years with at least 300 valid days. Plants are assigned the annual average of the nearest station within 20 kilometres; where no station lies within 20 kilometres, we use the inverse-distance-weighted average of all stations within 30 kilometres. Plants with no station within 30 kilometres (about 4 percent of plant-years) are excluded.",
        "Wind instrument. For each automated weather station and day, we compute the vector-averaged wind direction from hourly observations and classify the day as westerly if the direction lies between 225 and 315 degrees and the average wind speed exceeds 1 metre per second. Each plant is assigned the annual share of westerly days at the nearest weather station. Distance to the western coast is measured as the shortest distance from the plant's town or district centroid to the Yellow Sea coastline.",
        "Dust instrument. Asian dust days are recorded by the Korea Meteorological Administration at 28 observation sites. Each plant is assigned the number of dust days at the nearest site. Because dust days are concentrated in spring, we also verified that results are similar when the instrument is restricted to spring months and when spring-specific weather controls are added.",
      ],
    },
  ],
};
