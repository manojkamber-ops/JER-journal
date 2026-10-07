// Vol. 27, No. 3 (July 2022) — full research paper (sample content).
import type { PaperSpec } from "../paper-spec";

export const paper: PaperSpec = {
  id: "2022-v27-i3-02",
  title: "Electricity Tariff Reform and Industrial Energy Efficiency: Evidence from Korean Plants",
  authors: [{ name: "Hyun-Jin Kim", corresponding: true }, { name: "Markus Bauer" }],
  abstract:
    "Industrial electricity prices in Korea have long been among the lowest in the OECD. Between 2011 and 2013 a series of tariff increases raised industrial prices by more than 30 percent in real terms, with larger increases for plants on high-voltage contracts. Using plant-level data on electricity use, output and investment for 2008–2018, we exploit differences in exposure across tariff classes to estimate the response of energy efficiency. A 10 percent increase in the electricity price reduces electricity use per unit of output by 3.4 percent within three years, an implied elasticity of −0.34. About half of the response reflects investment in efficient motors, heat-recovery systems and process upgrades, and productivity and employment are unaffected. Responses are largest among energy-intensive plants and those with access to energy audit programmes. The results suggest that underpricing electricity has substantially reduced industrial energy efficiency and that price reform can deliver efficiency gains without sacrificing competitiveness.",
  keywords: ["Energy prices", "Energy efficiency", "Electricity tariffs", "Manufacturing", "Climate policy"],
  jelCodes: ["Q41", "Q48", "D24", "L94"],
  pages: "271–300",
  volume: 27,
  issue: 3,
  year: 2022,
  received: "2021-10-25",
  accepted: "2022-04-18",
  published: "2022-07-15",
  publishedOnline: "2022-07-04",
  citations: 18,
  downloads: 2210,
  pdfSize: "1.61 MB",
  type: "Research Article",
  acknowledgments:
    "We thank participants at the Mannheim environmental economics workshop and the Hanyang University economics seminar, two anonymous referees and the handling editor for helpful comments.",
  dataAvailability:
    "Plant-level survey data are available through Statistics Korea's MicroData Integrated Service; billing records were accessed under a confidentiality agreement and cannot be shared. Code is available from the corresponding author.",
  refs: [
    /* 1 */ "Popp, D. (2002). Induced innovation and energy prices. American Economic Review, 92(1), 160–180.",
    /* 2 */ "Linn, J. (2008). Energy prices and the adoption of energy-saving technology. Economic Journal, 118(533), 1986–2012.",
    /* 3 */ "Ganapati, S., Shapiro, J. S., & Walker, R. (2020). Energy cost pass-through in US manufacturing: Estimates and implications for carbon taxes. American Economic Journal: Applied Economics, 12(2), 303–342.",
    /* 4 */ "Martin, R., de Preux, L. B., & Wagner, U. J. (2014). The impact of a carbon tax on manufacturing: Evidence from microdata. Journal of Public Economics, 117, 1–14.",
    /* 5 */ "Allcott, H., Collard-Wexler, A., & O'Connell, S. D. (2016). How do electricity shortages affect industry? Evidence from India. American Economic Review, 106(3), 587–624.",
    /* 6 */ "Porter, M. E., & van der Linde, C. (1995). Toward a new conception of the environment–competitiveness relationship. Journal of Economic Perspectives, 9(4), 97–118.",
    /* 7 */ "Calel, R., & Dechezleprêtre, A. (2016). Environmental policy and directed technological change: Evidence from the European carbon market. Review of Economics and Statistics, 98(1), 173–191.",
    /* 8 */ "Fowlie, M., Greenstone, M., & Wolfram, C. (2018). Do energy efficiency investments deliver? Evidence from the Weatherization Assistance Program. Quarterly Journal of Economics, 133(3), 1597–1644.",
    /* 9 */ { jer: "2021-v26-i3-02" },
    /* 10 */ "Ito, K. (2014). Do consumers respond to marginal or average price? Evidence from nonlinear electricity pricing. American Economic Review, 104(2), 537–563.",
    /* 11 */ "Allcott, H., & Greenstone, M. (2012). Is there an energy efficiency gap? Journal of Economic Perspectives, 26(1), 3–28.",
    /* 12 */ "Jaffe, A. B., & Stavins, R. N. (1994). The energy-efficiency gap: What does it mean? Energy Policy, 22(10), 804–810.",
    /* 13 */ "Newell, R. G., Jaffe, A. B., & Stavins, R. N. (1999). The induced innovation hypothesis and energy-saving technological change. Quarterly Journal of Economics, 114(3), 941–975.",
    /* 14 */ "Aghion, P., Dechezleprêtre, A., Hémous, D., Martin, R., & Van Reenen, J. (2016). Carbon taxes, path dependency, and directed technical change: Evidence from the auto industry. Journal of Political Economy, 124(1), 1–51.",
    /* 15 */ "Greenstone, M., List, J. A., & Syverson, C. (2012). The effects of environmental regulation on the competitiveness of U.S. manufacturing (NBER Working Paper No. 18392). Cambridge, MA: National Bureau of Economic Research.",
    /* 16 */ "Bloom, N., Genakos, C., Martin, R., & Sadun, R. (2010). Modern management: Good for the environment or just hot air? Economic Journal, 120(544), 551–572.",
    /* 17 */ "Anderson, S. T., & Newell, R. G. (2004). Information programs for technology adoption: The case of energy-efficiency audits. Resource and Energy Economics, 26(1), 27–50.",
    /* 18 */ "Davis, S. J., & Haltiwanger, J. (2001). Sectoral job creation and destruction responses to oil price changes. Journal of Monetary Economics, 48(3), 465–512.",
    /* 19 */ "Olley, G. S., & Pakes, A. (1996). The dynamics of productivity in the telecommunications equipment industry. Econometrica, 64(6), 1263–1297.",
    /* 20 */ "Levinsohn, J., & Petrin, A. (2003). Estimating production functions using inputs to control for unobservables. Review of Economic Studies, 70(2), 317–341.",
    /* 21 */ "Ackerberg, D. A., Caves, K., & Frazer, G. (2015). Identification properties of recent production function estimators. Econometrica, 83(6), 2411–2451.",
    /* 22 */ "Kahn, M. E., & Mansur, E. T. (2013). Do local energy prices and regulation affect the geographic concentration of employment? Journal of Public Economics, 101, 105–114.",
    /* 23 */ "Dechezleprêtre, A., & Sato, M. (2017). The impacts of environmental regulations on competitiveness. Review of Environmental Economics and Policy, 11(2), 183–206.",
    /* 24 */ "Sun, L., & Abraham, S. (2021). Estimating dynamic treatment effects in event studies with heterogeneous treatment effects. Journal of Econometrics, 225(2), 175–199.",
    /* 25 */ "Callaway, B., & Sant'Anna, P. H. C. (2021). Difference-in-differences with multiple time periods. Journal of Econometrics, 225(2), 200–230.",
    /* 26 */ "Hausman, J. A. (1979). Individual discount rates and the use of energy-using durables. Bell Journal of Economics, 10(1), 33–54.",
    /* 27 */ "Gillingham, K., & Palmer, K. (2014). Bridging the energy efficiency gap: Policy insights from economic theory and empirical evidence. Review of Environmental Economics and Policy, 8(1), 18–38.",
    /* 28 */ "Abeberese, A. B. (2017). Electricity cost and firm performance: Evidence from India. Review of Economics and Statistics, 99(5), 839–852.",
  ],
  body: [
    {
      id: "introduction",
      heading: "1. Introduction",
      paragraphs: [
        "Energy prices shape both the adoption of energy-saving technologies [1][2][13] and the competitiveness of energy-intensive industries [3][23]. As governments raise carbon prices and reform energy subsidies, a central question is how much firms reduce energy use when prices rise, and at what cost to output and jobs. Evidence from the United Kingdom's climate change levy suggests that higher energy prices can reduce energy intensity without harming employment [4], but evidence from fast-growing industrial economies, where energy has often been deliberately underpriced, remains scarce.",
        "Korea is a striking case. For decades its industrial electricity tariffs, set by the state-owned Korea Electric Power Corporation (KEPCO) with government approval, were held below cost to support manufacturing competitiveness. By 2010 Korean industrial electricity prices were among the lowest in the OECD, and electricity's share of final industrial energy consumption had risen well above the OECD average as firms substituted electricity for oil and gas in heating and drying processes. Rolling blackouts in September 2011 and mounting KEPCO losses prompted a series of tariff increases between 2011 and 2013 that raised real industrial prices by more than 30 percent, with larger increases for plants on high-voltage contracts.",
        "We use plant-level data on electricity use, output and investment for 2008–2018 to estimate how manufacturing plants responded. Our design exploits the fact that tariff increases differed across contract classes, which were determined by plants' connection voltage and contracted demand before the reforms. Instrumenting each plant's electricity price with the tariff schedule applicable to its pre-reform contract class and load profile, we compare plants that faced larger and smaller increases within the same industry and year.",
        "We find that a 10 percent increase in the electricity price reduces electricity use per unit of output by 3.4 percent within three years, an implied elasticity of −0.34. The response builds gradually, consistent with adjustment through capital investment rather than short-run curtailment. About half of the decline reflects investment in efficient motors and drives, heat-recovery systems and process upgrades, and the remainder reflects operational changes such as load shifting, maintenance and reduced idling. Total energy intensity also falls, so the response is not simply substitution towards other fuels.",
        "We find no effect on total factor productivity, output or employment, consistent with UK evidence [4] and with the modest share of electricity in total costs for most plants. Responses are largest among energy-intensive plants — in the top quartile of electricity cost shares the elasticity is almost twice the average — and among plants in regions where publicly funded energy audits were available, which responded about 40 percent more strongly. The latter finding suggests that information frictions contribute to the energy-efficiency gap [11][12][17].",
        "Section 2 describes Korean electricity tariffs and the 2011–2013 reforms. Section 3 reviews related literature and Section 4 presents a simple framework. Sections 5 and 6 describe the data and empirical strategy, Section 7 presents the main results, Section 8 examines mechanisms, Section 9 reports robustness checks, Section 10 discusses policy implications and Section 11 concludes.",
      ],
    },
    {
      id: "background",
      heading: "2. Industrial Electricity Tariffs in Korea",
      paragraphs: [
        "KEPCO is the sole retailer of electricity in Korea and sets tariffs by customer class with the approval of the government. Industrial customers are divided into a low-voltage class for small plants and high-voltage classes for plants connected at higher voltages with larger contracted demand. Each class faces a demand charge per kilowatt of contracted capacity and an energy charge per kilowatt-hour that varies by season and time of day. Contract classes are assigned when a plant is connected to the grid and change rarely, because switching requires costly investment in transformers and connection equipment.",
        "For much of the 2000s, tariffs were held roughly constant in nominal terms while fuel costs rose, so that real industrial prices fell and KEPCO's cost-recovery ratio declined well below 100 percent. Low prices encouraged electricity-intensive production and the use of electricity for heating, which contributed to rapid growth in peak demand. On 15 September 2011 an unexpected heat wave pushed demand above available capacity and forced rolling blackouts affecting about two million households and businesses. In response, the government approved five rounds of tariff increases between August 2011 and November 2013. Increases for industrial customers were larger than for residential customers and largest for high-voltage classes, whose tariffs had been furthest below cost.",
        "Table 1 summarises the resulting changes. Between 2010 and 2014, the average real price paid by plants on high-voltage contracts rose by 34 percent and that paid by plants on other industrial contracts by 22 percent. Because the differential reflected nationally set tariff schedules rather than plant-specific circumstances, it provides plausibly exogenous variation in electricity prices across otherwise similar plants.",
        "The reforms were accompanied by demand-side measures. The government introduced mandatory peak-hour curtailment targets for large customers during the summers of 2012 and 2013, compensated through demand-response payments, and expanded subsidies for high-efficiency motors and lighting. These measures applied mainly to the largest customers and to specific periods; we show in Section 9 that our results are robust to excluding plants subject to curtailment orders and to controlling for receipt of efficiency subsidies. After November 2013 industrial tariffs were frozen in nominal terms for several years, so that the reforms constitute a one-time, permanent shift in relative prices rather than a sustained trend.",
      ],
      tables: [
        {
          id: "table-1",
          caption: "Table 1. Industrial electricity tariff increases, 2011–2013",
          columns: ["Date", "Average industrial increase (nominal)", "High-voltage classes", "Other industrial classes"],
          rows: [
            ["August 2011", "6.1%", "6.7%", "4.9%"],
            ["December 2011", "6.5%", "7.4%", "4.7%"],
            ["August 2012", "6.0%", "6.6%", "4.4%"],
            ["January 2013", "4.4%", "4.9%", "3.5%"],
            ["November 2013", "6.4%", "7.2%", "4.9%"],
            ["Cumulative real change, 2010–2014", "", "34%", "22%"],
          ],
          note: "Note: Increases in average tariffs approved for each round. Real changes deflated by the producer price index. Source: KEPCO tariff announcements and authors' calculations.",
        },
      ],
    },
    {
      id: "literature",
      heading: "3. Related Literature",
      paragraphs: [
        "Our paper relates to a long literature on how energy prices affect energy efficiency and innovation. Higher energy prices induce energy-saving innovation [1][13] and the adoption of energy-saving technologies by new plants [2], and carbon pricing redirects innovation towards clean technologies [7][14]. Firm-level studies of carbon and energy taxes find that higher energy prices reduce energy intensity [4], and that energy cost increases are passed through to consumer prices in US manufacturing [3]. We contribute plant-level evidence from a large and sudden change in electricity prices in an economy where prices had been held artificially low.",
        "A second strand concerns the competitiveness effects of energy prices and environmental regulation. The Porter hypothesis posits that regulation can spur efficiency-enhancing innovation that offsets compliance costs [6]. Surveys of the evidence find that the competitiveness effects of environmental regulation are generally small [23], although regulation can reduce productivity in heavily affected plants [15]. Local energy prices influence the location of energy-intensive employment [22], and oil-price shocks cause substantial job reallocation across sectors [18]. Electricity shortages in India reduced output and pushed firms towards self-generation [5], and higher electricity costs led Indian firms to change their product mix [28].",
        "A third strand studies the energy-efficiency gap — the apparent failure of firms and households to adopt investments with high engineering returns [11][12][27]. Explanations include high implicit discount rates [26], information frictions [17], management practices [16] and overestimated engineering savings [8]. Our finding that access to energy audits amplifies responses to price increases supports a role for information. Finally, our study complements evidence in this journal on how air pollution lowers productivity in Korean manufacturing [9], which together suggest that energy and environmental conditions have first-order effects on Korean industry.",
        "Methodologically, we draw on work on production function estimation [19][20][21] to measure productivity, and on recent advances in difference-in-differences and event-study designs with heterogeneous effects [24][25]. Because the tariff structure was nonlinear, we also follow work on how users respond to marginal versus average prices under nonlinear pricing [10].",
        "Korean evidence on industrial energy demand has relied mainly on aggregate or industry-level data, which cannot distinguish efficiency improvements from changes in the composition of output across plants and products. Studies using such data have generally found small short-run price elasticities of industrial electricity demand, which has been used to argue that tariff reform would do little to curb consumption. Our plant-level estimates, which hold industry composition fixed and allow for gradual adjustment, suggest that this conclusion reflects the short horizon of earlier estimates rather than an intrinsic insensitivity of industrial users to prices.",
      ],
    },
    {
      id: "framework",
      heading: "4. Conceptual Framework",
      paragraphs: [
        "Consider a plant that produces output with capital, labour, materials and electricity. In the short run, with its capital stock fixed, the plant can reduce electricity use per unit of output only through operational changes — shifting load to cheaper hours, improving maintenance, reducing idling and compressed-air leaks. In the longer run it can replace motors, pumps, furnaces and other equipment with more efficient models and recover waste heat. Because equipment is replaced gradually and efficiency investments involve planning and installation lags, the response of electricity intensity to a permanent price increase should build over several years.",
        "The framework yields four hypotheses. H1: an increase in electricity prices reduces electricity intensity, with a response that grows over time. H2: the response is larger for plants for which electricity is a larger share of costs, since the return to efficiency investment is proportional to the electricity bill. H3: the response is larger where information frictions are lower, for example where energy audits identify profitable investments [17]. H4: if efficiency investments are profitable at the new prices and electricity is a modest share of total costs, effects on productivity, output and employment should be small.",
        "An alternative response to higher electricity prices is substitution towards other energy sources, such as natural gas for heating or on-site generation. Such substitution would reduce measured electricity intensity without improving overall energy efficiency. We therefore also examine total energy intensity and self-generation.",
      ],
    },
    {
      id: "data",
      heading: "5. Data",
      paragraphs: [],
      subsections: [
        {
          id: "data-sources",
          heading: "5.1 Sources",
          paragraphs: [
            "We combine three sources. First, KEPCO billing records provide annual electricity consumption, contract class, contracted demand and expenditure for each manufacturing customer. Second, the Mining and Manufacturing Survey, conducted annually by Statistics Korea for plants with ten or more employees, provides output, value added, employment, capital, materials and fuel expenditures. Third, the Energy Census, conducted by the Korea Energy Agency for energy-intensive plants, provides information on investment in energy-saving equipment by type. We link the sources using business registration numbers and addresses, matching 27,140 plants observed in 2010.",
            "We measure electricity intensity as kilowatt-hours per unit of real output, deflating output with industry-level producer price indices. Each plant's average electricity price is expenditure divided by consumption. We estimate total factor productivity using the control-function approach of Ackerberg, Caves and Frazer {21}, with electricity and materials as proxies, and check results using the Olley–Pakes and Levinsohn–Petrin methods [19][20].",
          ],
        },
        {
          id: "data-descriptives",
          heading: "5.2 Descriptive Statistics",
          paragraphs: [
            "Table 2 compares plants by contract class in 2010. The 5,840 plants on high-voltage contracts are larger and more electricity-intensive than the 21,300 plants on other industrial contracts: electricity costs average 3.4 percent of output compared with 1.9 percent. They are concentrated in primary metals, chemicals, paper, cement and semiconductors, but every two-digit industry contains plants in both classes, which allows us to compare plants within industries. Before the reforms, electricity intensity in the two groups followed similar trends.",
          ],
          tables: [
            {
              id: "table-2",
              caption: "Table 2. Plants by electricity contract class, 2010",
              columns: ["Variable", "High-voltage contracts", "Other industrial contracts"],
              rows: [
                ["Plants", "5,840", "21,300"],
                ["Electricity cost / output", "0.034", "0.019"],
                ["Electricity price (KRW per kWh, 2010)", "71.8", "79.4"],
                ["Real price increase, 2010–2014", "34%", "22%"],
                ["Log output", "17.6", "15.2"],
                ["Employment (mean)", "214", "48"],
                ["Energy audit available in region (share)", "0.46", "0.43"],
                ["Growth of electricity intensity, 2008–2010 (% p.a.)", "−0.6", "−0.5"],
              ],
              note: "Note: Means for plants observed in 2010. Electricity prices are average prices including demand charges. Output in log KRW thousands.",
            },
          ],
        },
      ],
    },
    {
      id: "strategy",
      heading: "6. Empirical Strategy",
      paragraphs: [
        "Our main specification is ln(E/Y)_it = β·ln p_it + X_it·γ + α_i + δ_jt + ε_it, where (E/Y)_it is electricity use per unit of real output of plant i in year t, p_it is the real electricity price, α_i are plant fixed effects and δ_jt are four-digit industry-by-year fixed effects that absorb industry-specific demand and technology shocks. Controls include region-by-year fixed effects and plant age. To allow for gradual adjustment, our headline estimates relate intensity to the price three years earlier, and we report the full dynamic profile in an event-study specification.",
      ],
      subsections: [
        {
          id: "instrument",
          heading: "6.1 Instrument",
          paragraphs: [
            "Plants' average electricity prices depend on their load profiles and consumption levels, which respond to their own choices; under nonlinear pricing, the average price may also differ from the marginal price that governs behaviour [10]. We therefore instrument each plant's price with a simulated price: the cost of its 2010 consumption and load profile under the tariff schedule in force in year t for its 2010 contract class, divided by 2010 consumption. The simulated price varies only with nationally set tariffs and the plant's predetermined characteristics. The first-stage coefficient is 0.88 with a Kleibergen–Paap F-statistic of 112, as reported at the foot of Table 3.",
          ],
        },
        {
          id: "identification",
          heading: "6.2 Identifying Assumption",
          paragraphs: [
            "The key assumption is that, absent the reforms, electricity intensity of plants facing larger and smaller simulated price increases would have followed similar trends within industries. The event-study coefficients in Section 7 show no differential trends during 2008–2010. Because treatment intensity is continuous and common in timing, the heterogeneity-robust estimators proposed for staggered designs [24][25] coincide closely with our two-way fixed-effects estimates; we report them as a robustness check. Standard errors are clustered by plant.",
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
          id: "intensity",
          heading: "7.1 Electricity Intensity",
          paragraphs: [
            "Table 3 reports the main estimates. In the contemporaneous IV specification, a 10 percent price increase reduces electricity intensity by 1.6 percent. The effect grows to 2.7 percent after two years and 3.4 percent after three years, implying a three-year elasticity of −0.34. Beyond three years the effect stabilises. OLS estimates are smaller in absolute value, consistent with measurement error in average prices and with the mechanical positive correlation between average prices and low consumption under declining block tariffs.",
            "Figure 1 shows the event-study estimates, comparing plants on high-voltage contracts with other plants within the same industry. Electricity intensity in the two groups followed parallel trends before 2011. After the first tariff increases, intensity of high-voltage plants declined steadily relative to other plants, reaching about 4.2 percent lower by 2015 and remaining at that level thereafter. Given the 12 percentage point difference in price increases between the groups, this implies an elasticity close to our IV estimate.",
            "Total energy intensity, which adds fuels and purchased heat to electricity in energy units, declines by 2.7 percent for a 10 percent increase in electricity prices. Plants therefore did not merely substitute other fuels for electricity: most of the reduction in electricity use reflects improved overall energy efficiency, as predicted by H1.",
          ],
          tables: [
            {
              id: "table-3",
              caption: "Table 3. Electricity prices and electricity intensity (IV)",
              columns: ["", "(1) OLS, t", "(2) IV, t", "(3) IV, t−2", "(4) IV, t−3", "(5) IV, total energy, t−3"],
              rows: [
                ["ln electricity price", "−0.11***", "−0.16***", "−0.27***", "−0.34***", "−0.27***"],
                ["", "(0.03)", "(0.04)", "(0.06)", "(0.08)", "(0.07)"],
                ["Plant fixed effects", "Yes", "Yes", "Yes", "Yes", "Yes"],
                ["Industry-by-year fixed effects", "Yes", "Yes", "Yes", "Yes", "Yes"],
                ["First-stage coefficient", "", "0.88***", "0.86***", "0.85***", "0.85***"],
                ["Kleibergen–Paap F-statistic", "", "112", "104", "97", "97"],
                ["Observations (plant-years)", "246,300", "246,300", "201,800", "179,600", "179,600"],
              ],
              note: "Note: Dependent variable is log electricity use per unit of real output (column 5: log total energy use per unit of output). Columns 3–5 relate intensity to the price two or three years earlier. Standard errors clustered by plant in parentheses. *** p < 0.01.",
            },
          ],
          figures: [
            {
              id: "figure-1",
              caption: "Figure 1. Electricity intensity of high-voltage plants relative to other plants, 2008–2018",
              kind: "line",
              xLabels: ["2008", "2009", "2010", "2011", "2012", "2013", "2014", "2015", "2016", "2017", "2018"],
              yLabel: "Percent difference",
              series: [
                {
                  name: "Estimate",
                  values: [0.3, -0.2, 0, -0.8, -2.0, -3.1, -3.9, -4.2, -4.3, -4.1, -4.4],
                  lower: [-0.9, -1.3, 0, -1.9, -3.2, -4.4, -5.3, -5.7, -5.9, -5.8, -6.2],
                  upper: [1.5, 0.9, 0, 0.3, -0.8, -1.8, -2.5, -2.7, -2.7, -2.4, -2.6],
                },
              ],
              marker: 2,
              note: "Note: Coefficients on high-voltage contract class interacted with year, relative to 2010, with plant and industry-by-year fixed effects and 95 percent confidence intervals. The dashed line marks the first tariff increase in August 2011.",
            },
          ],
        },
        {
          id: "competitiveness",
          heading: "7.2 Productivity, Output and Employment",
          paragraphs: [
            "Table 4 examines whether higher electricity prices harmed competitiveness. We find no significant effects on total factor productivity, output, employment or the probability of plant exit at the three-year horizon. The point estimates are close to zero and precisely estimated: we can rule out employment losses larger than 1.6 percent for a 10 percent price increase at the 95 percent level. Prices of plants' output rose slightly, consistent with partial pass-through of higher costs [3], but the effect is small and not statistically significant.",
            "These results are consistent with H4 and with evidence from the United Kingdom [4] and from surveys of the competitiveness effects of environmental policies [23]. They contrast with the large output losses caused by electricity shortages in India [5], which reflect the unavailability of power rather than its price. Because electricity accounted for only 2–3 percent of output value for the average plant, a 30 percent price increase raised total costs by less than one percent, and plants were able to offset much of this through efficiency improvements.",
            "We also examine export performance, since concerns about competitiveness focus on plants that compete in international markets. Among exporting plants, a 10 percent price increase has no significant effect on export sales or on the export share of output, and the point estimates are close to zero. Plants in industries with high import penetration show no differential response in output or employment. These results suggest that Korean manufacturers did not lose market share to foreign competitors as a result of the tariff increases, at least over the horizon we study.",
          ],
          tables: [
            {
              id: "table-4",
              caption: "Table 4. Effects of a 10 percent electricity price increase on plant performance (three-year horizon, IV)",
              columns: ["Outcome", "Estimate", "Std. error", "95% confidence interval"],
              rows: [
                ["Log electricity use per unit of output", "−0.034***", "(0.008)", "[−0.050, −0.018]"],
                ["Log TFP", "0.002", "(0.005)", "[−0.008, 0.012]"],
                ["Log real output", "0.003", "(0.007)", "[−0.011, 0.017]"],
                ["Log employment", "−0.004", "(0.006)", "[−0.016, 0.008]"],
                ["Log output price", "0.003", "(0.002)", "[−0.001, 0.007]"],
                ["Exit within three years", "0.001", "(0.003)", "[−0.005, 0.007]"],
              ],
              note: "Note: Coefficients rescaled to a 10 percent price increase. Plant and industry-by-year fixed effects. *** p < 0.01.",
            },
          ],
        },
        {
          id: "heterogeneity",
          heading: "7.3 Heterogeneity",
          paragraphs: [
            "Figure 2 reports the response of electricity intensity by plant characteristics. Plants in the top quartile of electricity cost shares reduce intensity by 6.1 percent for a 10 percent price increase, almost twice the average response and four times the response in the bottom quartile, consistent with H2. Large plants respond somewhat more than small plants, which may reflect better access to engineering expertise and finance.",
            "Plants located in regions where publicly funded energy audits were available responded about 40 percent more strongly than plants elsewhere: a 10 percent price increase lowered their intensity by 4.1 percent, compared with 2.9 percent for other plants. Audit programmes were rolled out by regional offices of the Korea Energy Agency on the basis of staffing rather than local industrial conditions, and the difference persists when we control for plant size and industry. Consistent with H3, the finding suggests that information frictions limit firms' responses to price signals [17][27], and that management capacity matters for energy efficiency [16].",
            "We find no evidence that responses differ between plants owned by large business groups and independent plants, once we control for size and electricity intensity. Responses are somewhat larger among plants with newer capital stocks, which may have had lower costs of adopting efficient equipment, and among plants that had recently expanded capacity, consistent with the idea that efficiency improvements are cheapest when they are incorporated into new investment [2]. Plants in industries with more rapid technological change also responded more strongly.",
          ],
          figures: [
            {
              id: "figure-2",
              caption: "Figure 2. Effect of a 10 percent electricity price increase on electricity intensity, by plant group",
              kind: "bar",
              xLabels: ["All plants", "Top quartile cost share", "Bottom quartile cost share", "Large plants", "Small plants", "Audit available", "No audit"],
              yLabel: "Percent change in intensity",
              series: [
                {
                  name: "IV estimate",
                  values: [-3.4, -6.1, -1.5, -3.9, -2.8, -4.1, -2.9],
                  lower: [-5.0, -8.8, -3.1, -5.9, -4.6, -6.2, -4.7],
                  upper: [-1.8, -3.4, 0.1, -1.9, -1.0, -2.0, -1.1],
                },
              ],
              note: "Note: Three-year IV estimates on subsamples with 95 percent confidence intervals. Large plants have 100 or more employees.",
            },
          ],
        },
      ],
    },
    {
      id: "mechanisms",
      heading: "8. Mechanisms: Investment and Operational Change",
      paragraphs: [
        "How did plants reduce electricity intensity? Table 5 uses the Energy Census, which covers 6,420 energy-intensive plants, to examine investment in energy-saving equipment. A 10 percent price increase raises the probability of investing in high-efficiency motors and variable-speed drives by 3.8 percentage points, in heat-recovery systems by 2.1 points and in process upgrades by 2.6 points over three years, from baselines of 18, 7 and 11 percent respectively. Spending on energy-saving equipment rises by 21 percent.",
        "To quantify the contribution of investment, we combine the estimated increases in each type of investment with engineering estimates of the savings they deliver, discounted by 30 percent to reflect the evidence that engineering estimates overstate realised savings [8]. Investment accounts for about 1.7 percentage points of the 3.4 percent decline in intensity — roughly half. The remainder reflects operational changes: plants report increased use of off-peak electricity, more frequent maintenance of compressed-air and steam systems, and the appointment of energy managers. The share of consumption during peak hours fell by 2.3 percentage points among high-voltage plants relative to others.",
        "Self-generation rose only slightly, by 0.4 percentage points of consumption, and there is no evidence of large-scale fuel switching. Patent applications for energy-saving technologies by firms owning affected plants also increased, consistent with induced innovation [1][13], although the number of patenting firms is small. Together, the results suggest that underpricing had left a reservoir of profitable efficiency improvements that plants exploited once prices rose.",
      ],
      tables: [
        {
          id: "table-5",
          caption: "Table 5. Investment and operational responses to a 10 percent electricity price increase (three-year horizon)",
          columns: ["Outcome", "Baseline mean", "Estimate", "Std. error"],
          rows: [
            ["Invested in efficient motors and drives (pp)", "18.0", "3.8***", "(1.1)"],
            ["Invested in heat-recovery systems (pp)", "7.0", "2.1***", "(0.7)"],
            ["Invested in process upgrades (pp)", "11.0", "2.6***", "(0.9)"],
            ["Log spending on energy-saving equipment", "", "0.21***", "(0.06)"],
            ["Peak-hour share of consumption (pp)", "38.4", "−2.3***", "(0.6)"],
            ["Self-generation share of consumption (pp)", "4.1", "0.4", "(0.3)"],
            ["Appointed energy manager (pp)", "22.5", "4.4***", "(1.4)"],
          ],
          note: "Note: Energy Census sample of 6,420 plants. IV estimates with plant and industry-by-year fixed effects. *** p < 0.01.",
        },
      ],
    },
    {
      id: "robustness",
      heading: "9. Robustness",
      paragraphs: [
        "Table 6 reports robustness checks for the three-year elasticity. Estimates are similar when we add plant-specific linear trends; when we use the heterogeneity-robust estimator of Callaway and Sant'Anna {25} with a binary treatment for high-voltage contracts; when we exclude semiconductors and displays, whose output grew rapidly over the period; when we exclude plants that changed contract class; and when we measure output by value added rather than gross output. Excluding the year 2011, when the blackouts may have induced precautionary conservation, also leaves the estimate unchanged.",
        "A potential concern is that plants on high-voltage contracts were also more exposed to other policies, such as Korea's emissions trading scheme, introduced in 2015, and the target management system for large emitters introduced in 2012. Excluding plants covered by either scheme yields an elasticity of −0.31. Because most of the decline in intensity occurred before 2015, and because the target management system covered only the largest emitters, these policies are unlikely to account for our results.",
        "We also examine the demand-side measures introduced alongside the tariff increases. Excluding plants that received summer curtailment orders in 2012 or 2013 yields an elasticity of −0.33, and controlling for receipt of efficiency subsidies from the Korea Energy Agency changes the estimate by less than 0.01. Finally, measuring electricity intensity in physical units for the subset of plants that report output quantities — steel, cement, paper and basic chemicals — yields an elasticity of −0.38, which suggests that our results are not an artefact of price deflators.",
      ],
      tables: [
        {
          id: "table-6",
          caption: "Table 6. Robustness of the three-year elasticity of electricity intensity",
          columns: ["Specification", "Elasticity", "Std. error", "Observations"],
          rows: [
            ["Baseline", "−0.34***", "(0.08)", "179,600"],
            ["Plant-specific linear trends", "−0.31***", "(0.09)", "179,600"],
            ["Callaway–Sant'Anna estimator (binary treatment)", "−0.36***", "(0.10)", "179,600"],
            ["Excluding semiconductors and displays", "−0.35***", "(0.08)", "172,100"],
            ["Excluding plants that changed contract class", "−0.34***", "(0.08)", "175,200"],
            ["Value-added denominator", "−0.32***", "(0.09)", "179,600"],
            ["Excluding 2011", "−0.34***", "(0.08)", "162,400"],
            ["Excluding ETS and target-management plants", "−0.31***", "(0.09)", "158,900"],
          ],
          note: "Note: IV estimates of the effect of the price three years earlier on log electricity intensity. *** p < 0.01.",
        },
      ],
    },
    {
      id: "discussion",
      heading: "10. Discussion",
      paragraphs: [
        "Our estimates imply that underpricing electricity substantially reduced the energy efficiency of Korean industry. Taking the elasticity of −0.34 at face value, the 30 percent rise in real industrial prices between 2010 and 2014 reduced industrial electricity intensity by roughly 10 percent relative to the counterfactual. Applied to industrial consumption of about 270 terawatt-hours in 2014, this corresponds to annual savings of some 25 terawatt-hours — more than the output of three large nuclear reactors — and, at the 2014 generation mix, about 11 million tonnes of carbon dioxide per year.",
        "These gains came at little apparent cost to competitiveness. We find no effects on productivity, output, employment or exit, which contradicts the concern that higher energy prices necessarily erode industrial competitiveness [15][22] and is consistent with the weak version of the Porter hypothesis [6]. The absence of adverse effects reflects both the modest share of electricity in total costs and the availability of profitable efficiency improvements that had not been undertaken while prices were low. It does not imply that much larger increases would be costless, particularly for the most electricity-intensive industries.",
        "The heterogeneity in responses has implications for policy design. The stronger responses of plants with access to energy audits suggest that pairing price reform with information programmes can amplify efficiency gains [17][27]. Because the most energy-intensive plants respond most strongly, exemptions or discounts for these plants — commonly granted to protect competitiveness — would forgo a disproportionate share of the potential savings. Gradual, pre-announced tariff increases, combined with support for audits and efficiency finance, appear to offer a better balance.",
        "Our analysis has limitations. We observe only plants with ten or more employees, and the Energy Census covers only energy-intensive plants, so our decomposition of mechanisms applies to a subset of manufacturing. The tariff reforms were partial: industrial prices remained below those of most OECD countries even after 2013, so our estimates may not extrapolate to larger increases. And we cannot assess general-equilibrium effects through electricity supply or wholesale prices, which were regulated during our sample period.",
        "Our findings also bear on the debate over the energy-efficiency gap. If plants had been leaving profitable investments untaken because of behavioural or informational barriers, as some engineering studies suggest, price increases alone might have had limited effects. Instead, we find that plants responded substantially to price signals, and that the response was amplified where information was more readily available. This suggests that both prices and information matter, and that they are complements rather than substitutes [11][27]. It also suggests that estimates of the potential for efficiency improvements based on engineering studies conducted under artificially low prices may substantially overstate the gap that would remain under cost-reflective tariffs.",
      ],
    },
    {
      id: "conclusion",
      heading: "11. Conclusion",
      paragraphs: [
        "Korean manufacturers became substantially more energy-efficient when electricity prices rose. A 10 percent price increase reduced electricity use per unit of output by 3.4 percent within three years, about half through investment in efficient equipment, with no measurable losses in productivity or jobs. Responses were strongest among energy-intensive plants and where energy audits were available. Gradual tariff reform combined with support for energy audits could deliver further efficiency gains and lower emissions [2][4].",
      ],
    },
    {
      id: "appendix",
      heading: "Appendix A. Construction of the Simulated Price Instrument",
      paragraphs: [
        "Tariff schedules. We digitised KEPCO's industrial tariff schedules for each year from 2008 to 2018, including demand charges per kilowatt of contracted capacity and energy charges per kilowatt-hour by season (summer, spring and autumn, winter) and time of day (off-peak, mid-peak, peak) for each contract class and voltage option. Where tariffs changed during a year, we compute a day-weighted average.",
        "Load profiles. For each plant we compute its 2010 consumption by season and time-of-day band from monthly billing records, which report consumption by band for high-voltage customers and total consumption for low-voltage customers. For low-voltage customers, who face a flat energy charge, we use total consumption.",
        "Simulated price. The simulated price in year t is the cost of the plant's 2010 contracted demand and banded consumption under the year-t tariff schedule for its 2010 contract class and voltage option, divided by 2010 consumption, and deflated by the producer price index. Because it holds consumption and contract class fixed at their pre-reform values, the simulated price varies only with nationally set tariffs. Results are similar when we use 2009 rather than 2010 profiles.",
      ],
    },
  ],
};
