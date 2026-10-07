// Vol. 26, No. 2 (April 2021) — full research paper (sample content).
import type { PaperSpec } from "../paper-spec";

export const paper: PaperSpec = {
  id: "2021-v26-i2-01",
  title: "Highway Expansion, Market Access and Firm Location: Evidence from Korea's Expressway Network",
  authors: [{ name: "Hyun-Ju Yang", corresponding: true }, { name: "Andreas Müller" }],
  abstract:
    "Korea's expressway network nearly tripled in length between 1990 and 2018. We study how this expansion changed the location and performance of manufacturing firms. Using establishment census data for 1994–2018 and a market-access measure derived from a model of trade between 229 municipalities, we instrument changes in market access with routes proposed in national land-development plans of the 1970s. A 10 percent increase in market access raises the number of manufacturing establishments in a municipality by 3.2 percent and manufacturing employment by 2.7 percent, and increases the productivity of incumbent plants by 1.1 percent. Gains are concentrated within 10 kilometres of interchanges. About 40 percent of the establishment gain reflects relocation from nearby municipalities without new connections, so aggregate effects are smaller than local estimates suggest. The results highlight both the productivity benefits of transport investment and its role in reshaping the spatial distribution of industry.",
  keywords: ["Transport infrastructure", "Market access", "Firm location", "Productivity", "Korea"],
  jelCodes: ["R12", "R42", "O18", "D24"],
  pages: "121–150",
  volume: 26,
  issue: 2,
  year: 2021,
  received: "2020-08-17",
  accepted: "2021-02-10",
  published: "2021-04-15",
  publishedOnline: "2021-04-02",
  citations: 29,
  downloads: 2480,
  pdfSize: "1.88 MB",
  type: "Research Article",
  acknowledgments: "We thank seminar participants at the Korea Development Institute and the University of Zurich, two anonymous referees and the handling editor for helpful comments.",
  dataAvailability:
    "Establishment census microdata are available through Statistics Korea's MicroData Integrated Service; network GIS files and code are available from the corresponding author.",
  refs: [
    /* 1 */ "Redding, S. J., & Turner, M. A. (2015). Transportation costs and the spatial organization of economic activity. In G. Duranton, J. V. Henderson, & W. C. Strange (Eds.), Handbook of Regional and Urban Economics (Vol. 5, pp. 1339–1398). Amsterdam: Elsevier.",
    /* 2 */ "Donaldson, D., & Hornbeck, R. (2016). Railroads and American economic growth: A 'market access' approach. Quarterly Journal of Economics, 131(2), 799–858.",
    /* 3 */ "Donaldson, D. (2018). Railroads of the Raj: Estimating the impact of transportation infrastructure. American Economic Review, 108(4–5), 899–934.",
    /* 4 */ "Duranton, G., & Turner, M. A. (2012). Urban growth and transportation. Review of Economic Studies, 79(4), 1407–1440.",
    /* 5 */ "Faber, B. (2014). Trade integration, market size, and industrialization: Evidence from China's National Trunk Highway System. Review of Economic Studies, 81(3), 1046–1070.",
    /* 6 */ "Ghani, E., Goswami, A. G., & Kerr, W. R. (2016). Highway to success: The impact of the Golden Quadrilateral project for the location and performance of Indian manufacturing. Economic Journal, 126(591), 317–357.",
    /* 7 */ "Baum-Snow, N. (2007). Did highways cause suburbanization? Quarterly Journal of Economics, 122(2), 775–805.",
    /* 8 */ "Redding, S. J., & Rossi-Hansberg, E. (2017). Quantitative spatial economics. Annual Review of Economics, 9, 21–58.",
    /* 9 */ "Fernald, J. G. (1999). Roads to prosperity? Assessing the link between public capital and productivity. American Economic Review, 89(3), 619–638.",
    /* 10 */ "Michaels, G. (2008). The effect of trade on the demand for skill: Evidence from the Interstate Highway System. Review of Economics and Statistics, 90(4), 683–701.",
    /* 11 */ "Chandra, A., & Thompson, E. (2000). Does public infrastructure affect economic activity? Evidence from the rural interstate highway system. Regional Science and Urban Economics, 30(4), 457–490.",
    /* 12 */ "Banerjee, A., Duflo, E., & Qian, N. (2020). On the road: Access to transportation infrastructure and economic growth in China. Journal of Development Economics, 145, 102442.",
    /* 13 */ "Baum-Snow, N., Brandt, L., Henderson, J. V., Turner, M. A., & Zhang, Q. (2017). Roads, railroads, and decentralization of Chinese cities. Review of Economics and Statistics, 99(3), 435–448.",
    /* 14 */ "Holl, A. (2016). Highways and productivity in manufacturing firms. Journal of Urban Economics, 93, 131–151.",
    /* 15 */ "Gibbons, S., Lyytikäinen, T., Overman, H. G., & Sanchis-Guarner, R. (2019). New road infrastructure: The effects on firms. Journal of Urban Economics, 110, 35–50.",
    /* 16 */ "Allen, T., & Arkolakis, C. (2014). Trade and the topography of the spatial economy. Quarterly Journal of Economics, 129(3), 1085–1140.",
    /* 17 */ "Combes, P.-P., Duranton, G., Gobillon, L., Puga, D., & Roux, S. (2012). The productivity advantages of large cities: Distinguishing agglomeration from firm selection. Econometrica, 80(6), 2543–2594.",
    /* 18 */ "Ackerberg, D. A., Caves, K., & Frazer, G. (2015). Identification properties of recent production function estimators. Econometrica, 83(6), 2411–2451.",
    /* 19 */ "Conley, T. G. (1999). GMM estimation with cross sectional dependence. Journal of Econometrics, 92(1), 1–45.",
    /* 20 */ "Kline, P., & Moretti, E. (2014). Local economic development, agglomeration economies, and the big push: 100 years of evidence from the Tennessee Valley Authority. Quarterly Journal of Economics, 129(1), 275–331.",
    /* 21 */ "Melitz, M. J. (2003). The impact of trade on intra-industry reallocations and aggregate industry productivity. Econometrica, 71(6), 1695–1725.",
    /* 22 */ "Syverson, C. (2004). Market structure and productivity: A concrete example. Journal of Political Economy, 112(6), 1181–1222.",
    /* 23 */ "Storeygard, A. (2016). Farther on down the road: Transport costs, trade and urban growth in sub-Saharan Africa. Review of Economic Studies, 83(3), 1263–1295.",
    /* 24 */ "Asturias, J., García-Santana, M., & Ramos, R. (2019). Competition and the welfare gains from transportation infrastructure: Evidence from the Golden Quadrilateral of India. Journal of the European Economic Association, 17(6), 1881–1940.",
    /* 25 */ "Levinsohn, J., & Petrin, A. (2003). Estimating production functions using inputs to control for unobservables. Review of Economic Studies, 70(2), 317–341.",
  ],
  body: [
    {
      id: "introduction",
      heading: "1. Introduction",
      paragraphs: [
        "Transport infrastructure is one of the largest categories of public investment in every country, yet its effects on the location and performance of firms remain debated. In principle, lower transport costs raise productivity by expanding the markets that firms can serve, allowing them to exploit scale economies, specialise and face stronger competition [1][21][22]. Lower transport costs can also simply move economic activity from one place to another, with gains for connected places offset by losses elsewhere [5]. Distinguishing growth from relocation is essential for evaluating transport investment, because appraisals typically count local gains without subtracting losses in competing places.",
        "Korea's expressway network offers an unusual opportunity to study these questions in a high-income economy that built much of its network recently. The first expressway, linking Seoul and Busan, opened in 1970. By 1990 the network comprised roughly 1,600 kilometres, connecting the major cities along a few corridors. Over the following three decades it grew to about 4,700 kilometres, extending to most municipalities outside the Seoul Capital Area and adding east–west links across the mountainous interior. This expansion took place while Korean manufacturing was upgrading towards more capital- and skill-intensive industries and while firms were gradually relocating out of the congested capital region.",
        "We combine establishment census data for 1994–2018 with a detailed reconstruction of the road network to estimate how changes in market access affected manufacturing. We follow the market-access approach of Donaldson and Hornbeck {2}, which summarises how improvements anywhere in the network change each location's access to consumers and suppliers, weighted by their economic size. This captures the fact that a new segment benefits not only the places it passes through but every place for which it shortens routes to large markets.",
        "Road placement is not random: planners build expressways where they expect traffic and growth. To address this endogeneity, we instrument market access with routes proposed in national land-development plans of the 1970s. These plans laid out a long-term network intended mainly to connect provincial capitals and ports, and many of the proposed routes were built only decades later, after budget constraints had been relaxed and for reasons — national connectivity goals and regional balance — unrelated to local economic prospects at the time of construction.",
        "We find that a 10 percent increase in market access raises the number of manufacturing establishments in a municipality by 3.2 percent and manufacturing employment by 2.7 percent over the sample period. Incumbent plants become 1.1 percent more productive, consistent with gains from larger markets and stronger competition. Effects decay sharply with distance from interchanges and are concentrated within 10 kilometres. Municipalities adjacent to newly connected places but without new interchanges lose establishments; taking these losses into account, about 40 percent of the local gain reflects relocation rather than new activity.",
        "Our paper makes three contributions. First, we provide causal estimates of the effects of a modern, rapidly expanding highway network on manufacturing in a high-income economy, using a planning-based instrument that is well suited to settings where routes were drawn up long before they were built. Second, we combine establishment counts, employment and plant-level productivity, allowing us to distinguish the extensive margin of firm location from improvements in the efficiency of existing plants. Third, we quantify the extent of reallocation across municipalities, providing an estimate of the share of local gains that represent net national gains — a number of direct relevance for cost–benefit analysis of transport projects.",
        "The remainder of the paper is organised as follows. Section 2 describes the history of Korea's expressway network. Section 3 reviews related literature and Section 4 presents the market-access framework. Section 5 describes the data and Section 6 the empirical strategy. Section 7 reports results, Section 8 examines spillovers and aggregate effects, Section 9 reports robustness checks and Section 10 concludes.",
      ],
    },
    {
      id: "background",
      heading: "2. Korea's Expressway Network",
      paragraphs: [],
      subsections: [
        {
          id: "bg-history",
          heading: "2.1 Planning and Construction",
          paragraphs: [
            "The Gyeongbu Expressway between Seoul and Busan, completed in 1970, was the centrepiece of early industrialisation policy, linking the capital with the main port and the industrial cities of the south-east. During the 1970s the government drew up national land-development plans that envisaged a much larger network of expressways connecting all provincial capitals, major ports and planned industrial complexes. Fiscal constraints meant that only a few corridors were built in the following two decades.",
            "Construction accelerated in the 1990s and 2000s, financed by the national road budget and, from the late 1990s, by private investment under public–private partnership arrangements. Many of the routes built in this period followed the corridors proposed in the 1970s plans, although some planned routes were never built and other new routes were added in response to traffic growth. By 2018 nearly every municipality outside the Seoul Capital Area had an interchange within 30 minutes' drive.",
          ],
        },
        {
          id: "bg-industry",
          heading: "2.2 Manufacturing Location",
          paragraphs: [
            "Korean manufacturing was historically concentrated in the Seoul Capital Area and the south-eastern industrial belt from Ulsan to Changwon. Since the 1980s, regulations restricting new factories in the capital region, together with rising land costs, encouraged firms to locate elsewhere. Improved transport links made it possible for plants in other provinces to supply customers and source inputs from the capital region and the major ports. Table 1 summarises the growth of the network and the changing location of manufacturing employment.",
          ],
          tables: [
            {
              id: "table-1",
              caption: "Table 1. Expressway network and manufacturing location, 1990–2018",
              columns: ["Year", "Network length (km)", "Interchanges", "Mfg. employment share, Seoul Capital Area", "Mfg. employment share, other provinces"],
              rows: [
                ["1990", "1,550", "160", "0.46", "0.54"],
                ["2000", "2,130", "240", "0.44", "0.56"],
                ["2010", "3,860", "380", "0.42", "0.58"],
                ["2018", "4,720", "470", "0.40", "0.60"],
              ],
              note: "Note: Network length and interchanges from road statistics; employment shares from the Census on Establishments.",
            },
          ],
        },
      ],
    },
    {
      id: "literature",
      heading: "3. Related Literature",
      paragraphs: [
        "A large literature studies the economic effects of transport infrastructure. Historical railroads raised agricultural land values in the United States [2] and real incomes in colonial India [3]. Highways have been linked to urban growth [4], suburbanisation [7] and changes in the demand for skill [10] in the United States, and to economic activity in rural counties [11]. Aggregate evidence suggests that road investment contributed to productivity growth in US industries that depend heavily on transport [9].",
        "In developing and middle-income economies, China's trunk highways reduced industrial output growth in peripheral counties connected to large cities, suggesting that market integration can concentrate activity in core regions [5]. Proximity to transport networks in China had moderate positive effects on per capita GDP levels [12] and roads contributed to the decentralisation of cities [13]. India's Golden Quadrilateral increased manufacturing entry and productivity along the network [6] and generated welfare gains partly through increased competition [24]. Transport costs also shape urban growth in sub-Saharan Africa [23].",
        "Evidence for high-income economies at the firm level is more limited. Holl {14} finds that highway access raised manufacturing productivity in Spain, and Gibbons et al. {15} find positive effects of new roads on employment and output of firms in Britain, but also evidence that some gains came from relocation. Quantitative spatial models provide a framework for aggregating local effects into national welfare gains [8][16]. Our paper contributes evidence on both local effects and reallocation from a rapid, recent expansion in a high-income economy.",
        "Our work also connects to the literature on place-based policies, which asks whether investments targeted at particular regions generate net national gains or merely shift activity across space. Long-run evidence from the Tennessee Valley Authority suggests that regional investment programmes can raise local manufacturing permanently, but that national gains depend on the presence of agglomeration economies [20]. Transport infrastructure is perhaps the most widespread form of place-based investment, and our estimates of reallocation speak directly to this debate. They suggest that roughly three-fifths of the local gains from expressway investment in Korea represent net additions to national manufacturing activity.",
      ],
    },
    {
      id: "framework",
      heading: "4. Market Access Framework",
      paragraphs: [
        "Following Donaldson and Hornbeck {2}, consider an economy of municipalities that trade with one another subject to iceberg transport costs. In a broad class of trade models, the equilibrium value of production in location o depends on its market access MA_o = Σ_d τ_od^(−θ)·Y_d, where τ_od is the cost of shipping from o to d, Y_d is the economic size of destination d and θ is the trade elasticity. Market access is a sufficient statistic for how all changes in the transport network affect location o, because it aggregates changes in shipping costs to every destination, weighted by the size of each destination.",
        "We compute transport costs from travel times over the road network, distinguishing expressways from ordinary roads, and set θ = 3.8 following estimates in the literature. Destination size is measured by population and employment in a base year to avoid mechanical correlation between changes in market access and local outcomes. The resulting measure captures both direct effects of new interchanges in a municipality and indirect effects of segments elsewhere that shorten routes to large markets.",
        "The framework predicts that increases in market access raise local manufacturing activity and that these increases come partly at the expense of locations whose relative access falls. It also predicts that productivity rises with market access if larger markets allow firms to exploit scale economies or intensify competition and selection [21][22]. Because market access depends on the whole network, the framework naturally captures the reallocation effects that simpler measures of access, such as distance to the nearest interchange, miss.",
      ],
    },
    {
      id: "data",
      heading: "5. Data",
      paragraphs: [],
      subsections: [
        {
          id: "data-firms",
          heading: "5.1 Establishments and Productivity",
          paragraphs: [
            "The Census on Establishments covers all establishments with at least one employee and reports industry, employment, location and year of establishment. We use census years from 1994 to 2018 and aggregate manufacturing establishments and employment to the 229 municipalities, holding boundaries fixed at their 2018 definitions. For plants with ten or more workers, we link the Mining and Manufacturing Survey, which reports output, value added, capital and intermediate inputs, and estimate total factor productivity using control-function methods [18][25].",
            "The establishment census covers all manufacturing establishments with at least one employee and records location, industry, employment, sales and tangible assets. We construct total factor productivity for plants with at least ten employees, which are also covered by the Mining and Manufacturing Survey, using a control-function approach with materials as the proxy variable. Plants are linked across years using their establishment identifiers, which allows us to distinguish entry, exit and relocation.",
          ],
        },
        {
          id: "data-network",
          heading: "5.2 Network and Market Access",
          paragraphs: [
            "Our network data record the opening year of every expressway segment and interchange, digitised from official road statistics and historical maps, together with the national and provincial road networks. We compute shortest travel times between all pairs of municipality centroids for each census year, assuming speeds of 90 kilometres per hour on expressways and 50 on other roads. Market access is computed using 1994 population and employment as destination weights.",
            "Table 2 compares municipalities by the change in market access between 1994 and 2018. Municipalities gaining the most access were initially smaller, less industrialised and farther from Seoul, consistent with the network extending into peripheral regions.",
          ],
          tables: [
            {
              id: "table-2",
              caption: "Table 2. Municipalities by change in market access, 1994–2018",
              columns: ["Variable", "Top tercile", "Middle tercile", "Bottom tercile", "All"],
              rows: [
                ["Δ log market access", "0.41", "0.19", "0.08", "0.22"],
                ["Manufacturing establishments, 1994", "312", "524", "1,084", "640"],
                ["Manufacturing employment share, 1994", "0.17", "0.21", "0.24", "0.21"],
                ["Distance to Seoul (km)", "238", "181", "112", "176"],
                ["Population, 1994 (thousands)", "84", "152", "391", "209"],
                ["Municipalities", "76", "76", "77", "229"],
              ],
            },
          ],
        },
      ],
    },
    {
      id: "strategy",
      heading: "6. Empirical Strategy",
      paragraphs: [
        "We estimate long-difference regressions of the form Δy_m = β·ΔlogMA_m + X_m·γ + δ_p + ε_m, where Δy_m is the change between 1994 and 2018 in log establishments, log employment or average log TFP of incumbent plants in municipality m, ΔlogMA_m the change in log market access, X_m initial characteristics including log population, manufacturing share, distance to Seoul and distance to the nearest port, and δ_p province fixed effects. Standard errors allow for spatial correlation within 50 kilometres [19].",
      ],
      subsections: [
        {
          id: "instrument",
          heading: "6.1 Instrument",
          paragraphs: [
            "The instrument is the change in market access that would have occurred had only segments proposed in the 1970s national plans been built, holding the rest of the network at its 1994 configuration. Table 3 reports the first stage: a 10 percent increase in market access predicted by planned routes is associated with a 7.4 percent increase in realised access. Because the plans were drawn up before the sample period and many routes were built decades later, the instrument captures variation in access driven by long-standing national connectivity objectives rather than by contemporary local conditions.",
          ],
          tables: [
            {
              id: "table-fs",
              caption: "Table 3. First stage: planned routes and realised market access",
              columns: ["Regressor", "Δ log market access", "Std. error"],
              rows: [
                ["Δ log market access from 1970s planned routes", "0.74***", "(0.12)"],
                ["Log population, 1994", "−0.03**", "(0.01)"],
                ["Distance to Seoul (100 km)", "0.04***", "(0.01)"],
                ["Distance to nearest port (100 km)", "0.02", "(0.02)"],
                ["Province fixed effects", "Yes", ""],
                ["Kleibergen–Paap F-statistic", "38.4", ""],
                ["Observations", "229", ""],
              ],
              note: "Note: Standard errors robust to spatial correlation within 50 km. ** p < 0.05, *** p < 0.01.",
            },
          ],
        },
        {
          id: "identification",
          heading: "6.2 Identifying Assumptions",
          paragraphs: [
            "The exclusion restriction requires that planned routes affect later manufacturing growth only through realised market access. Planned routes were drawn primarily to connect provincial capitals and ports; we therefore control for distance to these nodes. The instrument does not predict manufacturing growth in the decade before the sample period, between 1984 and 1994, which supports the assumption that it is not correlated with pre-existing trends.",
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
          id: "main",
          heading: "7.1 Establishments and Employment",
          paragraphs: [
            "Table 4 reports the main estimates. OLS estimates are positive but smaller than the IV estimates, consistent with planners targeting roads at places with weaker growth prospects to promote regional balance. The IV estimates imply that a 10 percent increase in market access raises the number of manufacturing establishments by 3.2 percent and employment by 2.7 percent. The first-stage F-statistic exceeds 35 in all specifications.",
            "The smaller effect on employment than on establishments indicates that new establishments in connected municipalities were somewhat smaller than incumbents, consistent with entry of small suppliers and branch plants. Effects are similar for single-plant firms and for plants belonging to multi-plant firms.",
            "The timing of effects is consistent with the opening of new segments. Splitting the sample period into three sub-periods and estimating stacked first differences, we find that municipalities' manufacturing activity rises in the census periods immediately following increases in their market access, with little evidence of anticipatory effects in the preceding period. Effects continue to accumulate for about ten years after a segment opens, suggesting that firms adjust their location gradually as leases expire and investment decisions come up for renewal.",
            "We also examine new entry and exit separately. Increases in market access raise the entry rate of new establishments and have a smaller, statistically insignificant effect on exit. The increase in establishments is therefore driven mainly by entry — including relocations of existing firms — rather than by improved survival of incumbents. Among entrants, about 30 percent are branches of firms headquartered in the Seoul Capital Area, consistent with firms using improved connections to relocate production while keeping headquarters functions in the capital.",
          ],
          tables: [
            {
              id: "table-3",
              caption: "Table 4. Effects of market access on manufacturing (long differences 1994–2018)",
              columns: ["Outcome", "OLS", "IV", "Std. error (IV)", "First-stage F"],
              rows: [
                ["Δ log establishments", "0.21***", "0.32***", "(0.08)", "38.4"],
                ["Δ log employment", "0.17***", "0.27***", "(0.07)", "38.4"],
                ["Δ log TFP of incumbents", "0.06*", "0.11**", "(0.05)", "36.9"],
                ["Δ log average plant size", "−0.03", "−0.05", "(0.04)", "38.4"],
              ],
              note: "Note: Coefficients are elasticities with respect to market access; province fixed effects and initial controls included. * p < 0.10, ** p < 0.05, *** p < 0.01.",
            },
          ],
        },
        {
          id: "productivity",
          heading: "7.2 Productivity",
          paragraphs: [
            "Incumbent plants become more productive as market access rises: the IV estimate implies a 1.1 percent increase in TFP per 10 percent increase in access. Decomposing aggregate productivity growth in each municipality, we find that about two-thirds of the effect on average productivity comes from within-plant improvements and one-third from reallocation of output towards more productive plants and from the exit of less productive ones, consistent with models of selection in larger markets [17][21].",
            "The productivity gains are larger for plants that ship a larger share of their output outside their own province, as measured in the 2006 and 2016 Economic Census, consistent with the market-access mechanism. They are also larger for plants in industries with higher pre-existing transport costs as a share of output. Plants that primarily serve local customers show little productivity response. These patterns are difficult to reconcile with alternative explanations such as general improvements in local amenities or public services, which would be expected to benefit all plants similarly.",
          ],
        },
        {
          id: "distance",
          heading: "7.3 Distance from Interchanges",
          paragraphs: [
            "Figure 1 shows how the effect varies with distance to the nearest interchange, using establishment locations geocoded within municipalities. Effects are largest within 10 kilometres of an interchange and decline to nearly zero beyond 30 kilometres, indicating that the benefits of market access are highly localised around access points.",
          ],
          figures: [
            {
              id: "figure-1",
              caption: "Figure 1. Effect of market access on establishments by distance to the nearest interchange",
              kind: "bar",
              xLabels: ["0–5 km", "5–10 km", "10–20 km", "20–30 km", "> 30 km"],
              yLabel: "Elasticity of establishments",
              series: [
                { name: "IV estimate", values: [0.46, 0.38, 0.19, 0.08, 0.02], lower: [0.28, 0.21, 0.04, -0.06, -0.12], upper: [0.64, 0.55, 0.34, 0.22, 0.16] },
              ],
              note: "Note: Separate IV estimates for establishments located in each distance band, with 95 percent confidence intervals.",
            },
          ],
        },
        {
          id: "industries",
          heading: "7.4 Industries",
          paragraphs: [
            "Table 5 shows that effects are largest in industries that ship heavy or bulky goods over long distances, such as metals, machinery and transport equipment, and smallest in industries that sell mainly to local markets, such as food processing and printing. This pattern is consistent with the market-access mechanism.",
          ],
          tables: [
            {
              id: "table-4",
              caption: "Table 5. Effects on establishments by industry group (IV)",
              columns: ["Industry group", "Elasticity", "Std. error", "Share of 1994 employment"],
              rows: [
                ["Metals and metal products", "0.44***", "(0.12)", "0.14"],
                ["Machinery and equipment", "0.41***", "(0.11)", "0.17"],
                ["Transport equipment", "0.38***", "(0.13)", "0.11"],
                ["Electronics", "0.27**", "(0.12)", "0.15"],
                ["Textiles and apparel", "0.19*", "(0.11)", "0.13"],
                ["Food and printing", "0.09", "(0.09)", "0.12"],
              ],
              note: "Note: * p < 0.10, ** p < 0.05, *** p < 0.01.",
            },
          ],
        },
      ],
    },
    {
      id: "spillovers",
      heading: "8. Spillovers and Aggregate Effects",
      paragraphs: [
        "Local estimates overstate aggregate effects if part of the gain reflects relocation. To measure relocation, we estimate the effect of increases in market access in neighbouring municipalities — within 50 kilometres — on a municipality's own manufacturing activity, controlling for its own access. Neighbours' gains in access reduce a municipality's establishments: the elasticity is −0.13 for municipalities without new interchanges. The census also records the previous location of establishments that moved, and confirms that a substantial share of new establishments in connected municipalities relocated from nearby places.",
        "Combining the direct and spillover effects, about 40 percent of the local establishment gain reflects relocation. The net national effect on manufacturing employment is therefore around 1.6 percent per 10 percent increase in average market access, substantially smaller than the local estimate of 2.7 percent. Figure 2 summarises the decomposition. This result is consistent with evidence that transport improvements reorganise economic geography [5][15] and highlights the importance of accounting for reallocation in project appraisal [20].",
      ],
      figures: [
        {
          id: "figure-2",
          caption: "Figure 2. Local versus net effects of a 10 percent increase in market access",
          kind: "bar",
          xLabels: ["Establishments", "Employment"],
          yLabel: "Percent change",
          series: [
            { name: "Local effect", values: [3.2, 2.7] },
            { name: "Net of relocation", values: [1.9, 1.6] },
          ],
          note: "Note: Net effects subtract losses in neighbouring municipalities implied by the spillover estimates.",
        },
      ],
    },
    {
      id: "robustness",
      heading: "9. Robustness",
      paragraphs: [
        "Table 6 reports robustness checks. Results are similar using alternative trade elasticities (θ = 2 or 8), using distance rather than travel time to measure transport costs, excluding the Seoul Capital Area, excluding municipalities containing national industrial complexes, and measuring changes between 2000 and 2018 rather than from 1994. A placebo test using the instrument to predict manufacturing growth between 1984 and 1994 yields a small and insignificant coefficient.",
        "We also address the concern that planned routes might have been built where other investments were also made. Controlling for changes in rail access, port capacity and the presence of designated industrial complexes leaves our estimates essentially unchanged. Finally, results are robust to computing standard errors with spatial correlation over 100 rather than 50 kilometres.",
        "A further concern is that market access could capture improvements in access to labour markets rather than to product markets. Commuting zones in Korea are relatively small, and most manufacturing workers live within 30 minutes of their workplace. When we add a measure of access to working-age population within 60 minutes' drive, computed separately from market access, the coefficient on market access falls only slightly, and the labour-access measure itself has a smaller and less precisely estimated effect. Product-market access therefore appears to be the dominant channel.",
      ],
      tables: [
        {
          id: "table-5",
          caption: "Table 6. Robustness of the effect on log establishments (IV)",
          columns: ["Specification", "Estimate", "Std. error", "First-stage F"],
          rows: [
            ["Baseline", "0.32***", "(0.08)", "38.4"],
            ["Trade elasticity θ = 2", "0.29***", "(0.08)", "35.1"],
            ["Trade elasticity θ = 8", "0.35***", "(0.10)", "33.7"],
            ["Distance-based transport costs", "0.30***", "(0.09)", "31.2"],
            ["Excluding Seoul Capital Area", "0.34***", "(0.09)", "34.8"],
            ["Excluding industrial-complex municipalities", "0.31***", "(0.09)", "36.0"],
            ["Changes 2000–2018", "0.28***", "(0.09)", "32.6"],
            ["Controls for rail, ports, complexes", "0.30***", "(0.08)", "37.2"],
            ["Placebo: 1984–1994 growth", "0.03", "(0.07)", "38.4"],
          ],
          note: "Note: *** p < 0.01.",
        },
      ],
    },
    {
      id: "discussion",
      heading: "10. Discussion",
      paragraphs: [
        "Our results have three implications for transport policy. First, expressway investment raised manufacturing activity and productivity in connected places, and the productivity gains of incumbents indicate real efficiency improvements rather than merely relocation. Second, local benefits are highly concentrated around interchanges, which suggests that the design of access points — not only the route of a road — matters for its economic impact. Third, a substantial part of the local gain comes at the expense of nearby places, so appraisals that count only local gains overstate net benefits.",
        "The reallocation we document is not necessarily inefficient. If firms move to locations with better access and higher productivity, aggregate output rises even if activity in some places declines. Our estimates of incumbent productivity gains suggest that relocation was accompanied by efficiency improvements. A full welfare evaluation would require a quantitative spatial model accounting for congestion, housing and labour mobility [8][16].",
        "Our study has limitations. Market access is measured with travel times that do not account for congestion, which may overstate gains on busy corridors. Our instrument relies on the assumption that planned routes were not built in anticipation of local growth; although the pre-trend test supports this assumption, we cannot rule out all forms of anticipation. And our analysis focuses on manufacturing, whereas services may respond differently to transport improvements.",
        "Future research could extend our analysis in several directions. One is to study how expressway access affected the location of service industries, such as logistics and wholesale trade, which may be even more sensitive to transport costs than manufacturing. Another is to examine the interaction between expressways and the high-speed rail network that opened from 2004, which dramatically reduced passenger travel times between major cities but carries little freight. Comparing the effects of the two networks would help distinguish the roles of goods transport and face-to-face interaction in shaping the location of economic activity.",
        "Finally, our results bear on the debate about balanced regional development in Korea. A central goal of expressway policy has been to spread economic activity beyond the capital region. Our evidence suggests that the network did help peripheral municipalities attract manufacturing, but that the gains were concentrated near interchanges and partly came at the expense of neighbouring places within the same provinces. Policies aimed at regional balance may therefore need to combine transport investment with complementary measures, such as industrial land supply and skills programmes, to ensure that gains are broadly shared.",
        "The results also inform the evaluation of transport investments. Standard cost–benefit analysis of expressways focuses on travel-time savings and accident reductions, valued using engineering models of traffic flows. Our estimates suggest that the effects on firm location and productivity are substantial, but that a large share of local establishment gains reflects relocation rather than net creation. Appraisals that count local gains in connected municipalities as net benefits would therefore overstate the returns to new links, while those that ignore productivity gains for incumbent plants would understate them. A market-access framework, which accounts for both, provides a tractable way to incorporate these effects into project appraisal.",
        "Regional policy considerations are also relevant. The expansion of the expressway network was motivated in part by the goal of balanced regional development, reducing the concentration of economic activity in the Seoul Capital Area. Our results suggest that connections benefited municipalities near new interchanges, but partly at the expense of nearby unconnected municipalities. Whether the network reduced overall regional disparities therefore depends on the location of new links relative to lagging areas, and on whether gains in connected municipalities spread to their hinterlands over longer horizons than we can observe.",
      ],
    },
    {
      id: "conclusion",
      heading: "11. Conclusion",
      paragraphs: [
        "Korea's expressway expansion raised manufacturing activity and productivity in connected municipalities, but a substantial share of the local gains came at the expense of nearby places. Using routes proposed in the 1970s as an instrument, we find that a 10 percent increase in market access raised establishments by 3.2 percent, employment by 2.7 percent and incumbent productivity by 1.1 percent, with about 40 percent of the establishment gain reflecting relocation.",
        "These findings suggest that transport investment can raise productivity even in a high-income economy with an already extensive network, but that its benefits are highly localised and partly redistributive. Appraisals of future projects should account for reallocation and for the productivity gains that accompany market integration [1][8].",
        "Several extensions would be valuable. Firm-level data on shipments and input sourcing would allow a direct test of the trade-cost mechanism underlying the market-access framework. Examining the effects of expressways on service industries and on residential location would show how transport infrastructure reshapes the spatial distribution of economic activity beyond manufacturing. And comparing the effects of expressways with those of high-speed rail, which Korea introduced in 2004, would help policy makers allocate investment across transport modes with different implications for the movement of goods and people.",
      ],
    },
    {
      id: "appendix",
      heading: "Appendix A. Network Reconstruction and Variable Construction",
      paragraphs: [
        "Network data. We digitised the national road network from official road maps for each census year, distinguishing expressways, national highways and provincial roads. Expressway segments and interchanges were dated using the opening dates reported in annual road statistics and verified against historical news reports. The resulting network contains 4,720 kilometres of expressway and about 13,800 kilometres of national highway in 2018. Ferry routes connecting islands are included with travel times based on published schedules.",
        "Travel times. Shortest-path travel times between municipality centroids are computed using Dijkstra's algorithm with assumed speeds of 90 kilometres per hour on expressways, 60 on national highways and 40 on other roads, plus a fixed time of five minutes for entering and leaving the expressway network. Centroids are population-weighted using 1994 census data. Results are robust to alternative speed assumptions, including speeds that vary by terrain.",
        "Market access. For each municipality o and year t, market access is MA_ot = Σ_d (1 + T_odt)^(−θ)·Y_d, where T_odt is travel time in hours, Y_d is 1994 population plus employment in destination d, and θ = 3.8. The sum includes the municipality itself with an internal travel time equal to two-thirds of the radius of a circle with the municipality's area divided by the average speed. Using population or employment alone as weights gives similar results.",
        "Productivity. Total factor productivity is estimated separately for each two-digit industry using a value-added production function with labour and capital, following Ackerberg, Caves and Frazer {18}, with intermediate inputs as the proxy variable. Plant-level productivity is averaged within municipalities using employment weights, restricting to plants present in both the initial and final periods for the incumbent productivity analysis.",
        "Travel times. Road travel times between municipality centroids are computed on a digitised network that includes expressways, national highways and provincial roads in each year, with speeds of 100, 60 and 40 kilometres per hour respectively. Travel times are converted into trade costs using an elasticity drawn from the literature on road distance and trade. Results are similar when we use alternative speed assumptions or compute travel times between population-weighted centroids.",
      ],
    },
  ],
};
