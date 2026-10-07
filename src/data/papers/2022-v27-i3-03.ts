// Vol. 27, No. 3 (July 2022) — full research paper (sample content).
import type { PaperSpec } from "../paper-spec";

export const paper: PaperSpec = {
  id: "2022-v27-i3-03",
  title: "Renewable Energy Auctions and the Cost of Solar Power: Evidence from the Asia-Pacific",
  authors: [{ name: "Wei Zhang", corresponding: true }, { name: "Da-Eun Han" }],
  abstract:
    "Many Asia-Pacific governments have replaced administratively set feed-in tariffs with competitive auctions to procure renewable electricity. We assemble data on 1,140 utility-scale solar projects contracted in nine economies between 2012 and 2021 to estimate how procurement design affects contracted prices and project completion. Controlling for module costs, irradiation, project size and country-year conditions, auctioned projects secured prices 21 percent lower than projects contracted under feed-in tariffs. Prices fall with the number of bidders per auctioned megawatt. However, completion rates are 12 percentage points lower in auctions without financial penalties for delay, and local-content requirements raise contracted prices by about 7 percent. The results suggest that auctions reduce the cost of renewable power, but that their design — particularly penalties and content rules — determines whether low bids translate into installed capacity.",
  keywords: ["Renewable energy", "Auctions", "Solar power", "Feed-in tariffs", "Procurement"],
  jelCodes: ["Q42", "D44", "Q48", "L94"],
  pages: "301–330",
  volume: 27,
  issue: 3,
  year: 2022,
  received: "2021-11-15",
  accepted: "2022-05-02",
  published: "2022-07-15",
  publishedOnline: "2022-07-04",
  citations: 16,
  downloads: 2050,
  pdfSize: "1.53 MB",
  type: "Research Article",
  acknowledgments:
    "We thank participants at the Fudan University energy economics workshop and the Hanyang University economics seminar, two anonymous referees and the handling editor for helpful comments.",
  dataAvailability:
    "The project-level dataset was compiled from public regulatory filings and auction results and is available from the corresponding author together with replication code.",
  refs: [
    /* 1 */ "Borenstein, S. (2012). The private and public economics of renewable electricity generation. Journal of Economic Perspectives, 26(1), 67–92.",
    /* 2 */ "Nemet, G. F. (2006). Beyond the learning curve: Factors influencing cost reductions in photovoltaics. Energy Policy, 34(17), 3218–3232.",
    /* 3 */ "del Río, P., & Linares, P. (2014). Back to the future? Rethinking auctions for renewable electricity support. Renewable and Sustainable Energy Reviews, 35, 42–56.",
    /* 4 */ "IRENA. (2019). Renewable Energy Auctions: Status and Trends Beyond Price. Abu Dhabi: International Renewable Energy Agency.",
    /* 5 */ "Klemperer, P. (2002). What really matters in auction design. Journal of Economic Perspectives, 16(1), 169–189.",
    /* 6 */ "Milgrom, P. (2004). Putting Auction Theory to Work. Cambridge: Cambridge University Press.",
    /* 7 */ "Gowrisankaran, G., Reynolds, S. S., & Samano, M. (2016). Intermittency and the value of renewable energy. Journal of Political Economy, 124(4), 1187–1234.",
    /* 8 */ "Probst, B., Touboul, S., Glachant, M., & Dechezleprêtre, A. (2021). Global trends in the invention and diffusion of climate change mitigation technologies. Nature Energy, 6(11), 1077–1086.",
    /* 9 */ { jer: "2021-v26-i4-03" },
    /* 10 */ "Vickrey, W. (1961). Counterspeculation, auctions, and competitive sealed tenders. Journal of Finance, 16(1), 8–37.",
    /* 11 */ "Bulow, J., & Klemperer, P. (1996). Auctions versus negotiations. American Economic Review, 86(1), 180–194.",
    /* 12 */ "Kreiss, J., Ehrhart, K.-M., & Haufe, M.-C. (2017). Appropriate design of auctions for renewable energy support – Prequalifications and penalties. Energy Policy, 101, 512–520.",
    /* 13 */ "Bajari, P., & Hortaçsu, A. (2003). The winner's curse, reserve prices, and endogenous entry: Empirical insights from eBay auctions. RAND Journal of Economics, 34(2), 329–355.",
    /* 14 */ "Decarolis, F. (2014). Awarding price, contract performance, and bids screening: Evidence from procurement auctions. American Economic Journal: Applied Economics, 6(1), 108–132.",
    /* 15 */ "Bajari, P., Houghton, S., & Tadelis, S. (2014). Bidding for incomplete contracts: An empirical analysis of adaptation costs. American Economic Review, 104(4), 1288–1319.",
    /* 16 */ "Li, T., & Zheng, X. (2009). Entry and competition effects in first-price auctions: Theory and evidence from procurement auctions. Review of Economic Studies, 76(4), 1397–1429.",
    /* 17 */ "Joskow, P. L. (2011). Comparing the costs of intermittent and dispatchable electricity generating technologies. American Economic Review, 101(3), 238–241.",
    /* 18 */ "Hughes, J. E., & Podolefsky, M. (2015). Getting green with solar subsidies: Evidence from the California Solar Initiative. Journal of the Association of Environmental and Resource Economists, 2(2), 235–275.",
    /* 19 */ "Johnstone, N., Haščič, I., & Popp, D. (2010). Renewable energy policies and technological innovation: Evidence based on patent counts. Environmental and Resource Economics, 45(1), 133–155.",
    /* 20 */ "Fischer, C., & Newell, R. G. (2008). Environmental and technology policies for climate mitigation. Journal of Environmental Economics and Management, 55(2), 142–162.",
    /* 21 */ "Kalkuhl, M., Edenhofer, O., & Lessmann, K. (2013). Renewable energy subsidies: Second-best policy or fatal aberration for mitigation? Resource and Energy Economics, 35(3), 217–234.",
    /* 22 */ "Rodrik, D. (2014). Green industrial policy. Oxford Review of Economic Policy, 30(3), 469–491.",
    /* 23 */ "Lewis, J. I., & Wiser, R. H. (2007). Fostering a renewable energy technology industry: An international comparison of wind industry policy support mechanisms. Energy Policy, 35(3), 1844–1857.",
    /* 24 */ "Couture, T., & Gagnon, Y. (2010). An analysis of feed-in tariff remuneration models: Implications for renewable energy investment. Energy Policy, 38(2), 955–965.",
    /* 25 */ "Steffen, B. (2020). Estimating the cost of capital for renewable energy projects. Energy Economics, 88, 104783.",
    /* 26 */ "IEA & NEA. (2020). Projected Costs of Generating Electricity: 2020 Edition. Paris: International Energy Agency and OECD Nuclear Energy Agency.",
    /* 27 */ "IRENA. (2021). Renewable Power Generation Costs in 2020. Abu Dhabi: International Renewable Energy Agency.",
    /* 28 */ "Cameron, A. C., Gelbach, J. B., & Miller, D. L. (2011). Robust inference with multiway clustering. Journal of Business & Economic Statistics, 29(2), 238–249.",
  ],
  body: [
    {
      id: "introduction",
      heading: "1. Introduction",
      paragraphs: [
        "The cost of solar power has fallen dramatically over the past decade. The global average levelised cost of electricity from utility-scale photovoltaic plants declined by roughly 85 percent between 2010 and 2020 [27], driven by learning, scale economies in module production and falling balance-of-system costs [2]. Solar power is now among the cheapest sources of new electricity in many countries [26]. How much of this decline reaches electricity consumers, however, depends on how governments procure renewable power.",
        "Two instruments dominate. Feed-in tariffs offer generators a fixed, administratively set price per megawatt-hour for a long period. They are simple and provide investors with certainty, but when costs fall rapidly they risk over-compensating developers and imposing large costs on consumers [1][24]. Auctions instead let developers compete for long-term contracts by bidding the price at which they are willing to supply. They should reveal costs and pass savings on to consumers [5][11], but they may attract unrealistically low bids that are never built, and their outcomes depend heavily on design [3][4][12].",
        "Asia-Pacific economies offer a rich setting in which to compare these instruments. Over the past decade, governments across the region have shifted from feed-in tariffs to auctions at different times, for different project sizes and with very different auction rules. We assemble data on 1,140 utility-scale solar projects of at least 5 MW contracted in nine economies between 2012 and 2021, recording each project's procurement mechanism, contracted price, capacity, location and completion status, together with the design features of each auction.",
        "Controlling for module costs, solar irradiation, project size and country-by-year conditions, we find that auctioned projects secured prices about 21 percent lower than comparable projects contracted under feed-in tariffs. The gap opens immediately when countries switch from feed-in tariffs to auctions and is not explained by differences in project characteristics. Within auctions, competition matters: doubling the number of bidders per megawatt offered lowers prices by about 9 percent. Local-content requirements, by contrast, raise contracted prices by about 7 percent.",
        "Low prices do not always translate into installed capacity. In auctions without financial penalties for delay, 64 percent of contracted capacity was completed within the scheduled period, compared with 76 percent in auctions with penalties — a gap of 12 percentage points that persists after controlling for project and country characteristics. Projects that won with the most aggressive bids relative to contemporaneous costs were the least likely to be completed, consistent with a winner's curse and strategic underbidding in the absence of credible penalties [13][14].",
        "Section 2 describes procurement policies in the region. Section 3 reviews related literature and Section 4 develops hypotheses. Section 5 describes the data and Section 6 the empirical strategy. Section 7 presents results on prices, competition and completion, Section 8 examines why low bids fail, Section 9 reports robustness checks, Section 10 discusses policy implications and Section 11 concludes.",
      ],
    },
    {
      id: "background",
      heading: "2. Solar Procurement in the Asia-Pacific",
      paragraphs: [
        "Our sample covers Australia, China, India, Indonesia, Japan, Korea, Malaysia, the Philippines and Vietnam. These economies accounted for the large majority of utility-scale solar capacity added in the Asia-Pacific during 2012–2021. Their procurement histories differ widely, as summarised in Table 1. India pioneered reverse auctions for utility-scale solar under its National Solar Mission and progressively scaled them up, while several states offered feed-in tariffs in the early years. Japan introduced a generous feed-in tariff in 2012 and moved to auctions for large projects in 2017. China set national benchmark feed-in tariffs from 2013 and introduced competitive allocation, starting with its Top Runner programme, from 2016. Malaysia and Korea complemented feed-in tariffs or certificate schemes with competitive tenders for long-term contracts.",
        "Seven of the nine economies used auctions during the period; the Philippines and Vietnam relied on feed-in tariffs for utility-scale solar, and Vietnam's 2019 and 2020 feed-in tariff rounds triggered a boom in installations. Several economies ran auctions and feed-in tariffs simultaneously during transition periods — for example, for projects above and below a capacity threshold, or in different provinces or states. This overlap is central to our identification strategy.",
        "Auction design also varied. Most auctions were pay-as-bid sealed-bid auctions for 20- or 25-year power purchase agreements, but they differed in the use of ceiling prices, bid bonds and performance guarantees, penalties for delayed commissioning, local-content requirements and whether the auctioneer provided land and grid connection. About 58 percent of auctioned projects in our sample faced explicit financial penalties for delay.",
      ],
      tables: [
        {
          id: "table-1",
          caption: "Table 1. Utility-scale solar procurement mechanisms by economy, 2012–2021",
          columns: ["Economy", "Feed-in tariff projects", "Auctioned projects", "First auction in sample", "Penalties for delay"],
          rows: [
            ["Australia", "22", "41", "2012", "Most rounds"],
            ["China", "118", "164", "2016", "Some rounds"],
            ["India", "46", "251", "2012", "Most rounds"],
            ["Indonesia", "14", "18", "2019", "No"],
            ["Japan", "131", "72", "2017", "Yes"],
            ["Korea", "28", "63", "2017", "Some rounds"],
            ["Malaysia", "19", "63", "2016", "Yes"],
            ["Philippines", "34", "0", "", ""],
            ["Vietnam", "56", "0", "", ""],
            ["Total", "468", "672", "", ""],
          ],
          note: "Note: Projects of at least 5 MW contracted between 2012 and 2021. Sources: national regulators, auction agencies and authors' compilation.",
        },
      ],
    },
    {
      id: "literature",
      heading: "3. Related Literature",
      paragraphs: [
        "Our paper relates to a literature comparing instruments for supporting renewable electricity. Economists have long argued that subsidies for renewable generation are a second-best substitute for carbon pricing [1][20][21], and that their design affects both cost and innovation [19]. Feed-in tariffs were credited with rapid deployment in Europe but became costly as module prices fell [24], while auctions spread rapidly after 2010 and achieved record-low prices in many countries [3][4]. Most existing evidence consists of case studies and descriptive comparisons; we provide a systematic, project-level comparison across a large set of economies, controlling for costs and resource quality.",
        "A second strand of literature studies auction design. Theory emphasises that in practice entry, collusion and the winner's curse matter more than the fine details of auction format [5][6][10], and that attracting additional bidders is often worth more than optimal mechanism design [11]. Empirical work on procurement auctions shows that more bidders lower prices but that entry is endogenous [16], that aggressive bids are associated with cost overruns and renegotiation [15], and that awarding contracts to the lowest bidder can worsen contract performance when bidders can default [14]. Bidders may also fail to account for the winner's curse when values are uncertain [13]. Work on renewable auctions specifically argues that prequalification requirements and penalties are needed to deter underbidding [12].",
        "Third, we relate to work on the value and cost of renewable power. Contracted prices are only one dimension of cost: the value of renewable generation depends on intermittency and on when output is produced [7][17], and subsidies can be poorly targeted [18]. Financing costs account for a large share of the levelised cost of solar power and vary widely across countries [25]. Local-content requirements are a common tool of green industrial policy [22][23], but their costs are rarely quantified. Diffusion of low-carbon technologies has accelerated globally [8], and evidence in this journal shows how quickly emission reductions reverse without structural change in the energy system [9].",
      ],
    },
    {
      id: "framework",
      heading: "4. Hypotheses",
      paragraphs: [
        "Under a feed-in tariff, the regulator sets a price based on estimated costs. Because costs are private information and fall rapidly, and because regulators adjust tariffs only periodically, tariffs tend to exceed costs, particularly for large projects with scale economies. An auction instead elicits bids that approximate developers' costs plus an information rent that declines with competition. Our first hypothesis (H1) is that, controlling for costs, auctions yield lower contracted prices than feed-in tariffs, and our second (H2) is that prices decline with the number of bidders relative to the capacity offered [11][16].",
        "Auctions create an incentive to underbid if winning bidders can walk away cheaply from unprofitable contracts. A developer that expects module prices to fall may bid below current costs and delay construction, abandoning the project if costs do not fall far enough. Penalties for delay and bid bonds make such strategies costly. Our third hypothesis (H3) is that completion rates are lower in auctions without penalties, and that within such auctions the most aggressive bids are least likely to be completed [12][14].",
        "Finally, local-content requirements restrict developers' choice of suppliers. If domestic modules and components are more expensive than imports, such requirements raise costs and hence bids. Our fourth hypothesis (H4) is that local-content requirements raise contracted prices.",
        "These hypotheses abstract from differences in the risks borne by developers under the two instruments. Feed-in tariffs typically guarantee a price for all output, whereas some auctions expose winners to curtailment or require them to bear grid-connection costs. Such risks raise required returns and hence bids, so that our estimates of the auction price effect may understate the pure effect of competition. We control for site and grid provision to address the most important of these differences, and examine heterogeneity by contract terms in Section 9.",
      ],
    },
    {
      id: "data",
      heading: "5. Data",
      paragraphs: [],
      subsections: [
        {
          id: "data-projects",
          heading: "5.1 Project Data",
          paragraphs: [
            "We compiled project-level data from regulatory filings, auction results published by procurement agencies, utilities' power purchase agreement registers and company announcements. For each project we record the contract date, procurement mechanism, contracted price in local currency (converted to US dollars at the exchange rate in the contract month), contract duration, capacity, location and completion status as of December 2021. For auctioned projects we also record the number of bidders, the capacity offered and the design features of the auction round. We restrict the sample to projects of at least 5 MW, giving 1,140 projects with a combined capacity of 71 gigawatts.",
            "We define a project as completed if it reached commercial operation within the scheduled commissioning period plus six months. Projects contracted in 2020–2021 whose scheduled period had not ended by December 2021 are excluded from the completion analysis, leaving 948 projects.",
          ],
        },
        {
          id: "data-controls",
          heading: "5.2 Cost and Resource Controls",
          paragraphs: [
            "We match each project to the global average spot price of crystalline-silicon modules in the quarter of its contract and to the long-run average global horizontal irradiation at its location from satellite-based solar resource data. We also record whether the project was located on land provided by the auctioneer, whether grid connection was provided, and the country's ten-year government bond yield in the contract month as a proxy for financing costs [25].",
            "Table 2 compares auctioned and feed-in-tariff projects. Auctioned projects are larger, were contracted later and have much lower average prices: USD 48.6 per MWh compared with USD 112.4. Much of this raw difference reflects the decline in module costs over time and the larger size of auctioned projects, which our empirical strategy controls for. Seventy-one percent of auctioned projects were completed on schedule, compared with 88 percent of feed-in-tariff projects.",
          ],
          tables: [
            {
              id: "table-2",
              caption: "Table 2. Solar projects by procurement mechanism, 2012–2021",
              columns: ["Variable", "Auctions", "Feed-in tariffs"],
              rows: [
                ["Projects", "672", "468"],
                ["Mean capacity (MW)", "84", "31"],
                ["Mean contracted price (USD/MWh)", "48.6", "112.4"],
                ["Contract year (median)", "2018", "2015"],
                ["Module price in contract quarter (USD/W)", "0.29", "0.51"],
                ["Global horizontal irradiation (kWh/m² per day)", "5.2", "4.6"],
                ["Contract duration (years)", "23.4", "19.6"],
                ["Completed on schedule (share)", "0.71", "0.88"],
              ],
              note: "Note: Means unless otherwise indicated. Completion shares computed for projects whose scheduled commissioning period ended by December 2021.",
            },
          ],
        },
      ],
    },
    {
      id: "strategy",
      heading: "6. Empirical Strategy",
      paragraphs: [
        "Our main specification is ln p_ict = β·Auction_ict + γ1·ln m_t + γ2·GHI_i + γ3·ln K_i + X_ict·λ + δ_ct + ε_ict, where p_ict is the contracted price of project i in country c contracted in year t, Auction is an indicator for auctioned projects, m_t is the module price in the contract quarter, GHI is irradiation, K is capacity, X includes contract duration and indicators for land and grid provision, and δ_ct are country-by-year fixed effects. The country-by-year fixed effects absorb exchange rates, financing conditions, grid costs, land prices and all other conditions common to projects contracted in the same country and year.",
      ],
      subsections: [
        {
          id: "identification",
          heading: "6.1 Identification",
          paragraphs: [
            "With country-by-year fixed effects, β is identified from economies that used both instruments in the same year — for different project sizes, regions or programmes during transition periods. The key concern is that projects allocated to auctions differ in unobserved ways from those receiving feed-in tariffs. We address this in three ways. First, we control flexibly for project size, which often determined eligibility. Second, we estimate event-study specifications around each economy's introduction of auctions, using country and year fixed effects, to show that prices fell discretely at the switch. Third, we restrict the sample to projects within 20 MW of capacity thresholds that separated the two instruments.",
          ],
        },
        {
          id: "design-strategy",
          heading: "6.2 Design Features",
          paragraphs: [
            "Within the auction sample, we relate prices to the log number of bidders per megawatt offered, local-content requirements, ceiling prices and site provision, and relate completion to penalties for delay, bid bonds and the gap between each winning bid and a benchmark cost. Because the number of bidders responds to expected profitability, we instrument it with the number of developers that had prequalified in any earlier auction in the same country, which shifts the pool of potential entrants [16]. Standard errors are two-way clustered by country and contract year [28].",
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
          id: "prices",
          heading: "7.1 Auctions and Contracted Prices",
          paragraphs: [
            "Table 3 reports the main estimates. Without controls, auctioned projects have prices 79 log points lower than feed-in-tariff projects, reflecting the time trend in costs. Adding module prices, irradiation and capacity reduces the gap to 34 log points, and adding country-by-year fixed effects reduces it to 21 log points (column 3). Restricting the sample to projects near capacity thresholds yields a similar estimate of 19 log points. The coefficient on module prices implies that a 10 percent decline in module costs lowers contracted prices by about 4.8 percent, consistent with modules accounting for roughly half of capital costs over the period [27].",
            "Figure 1 shows the event-study estimates around each economy's first auction. Contracted prices of utility-scale projects, net of module costs and project characteristics, are flat before the switch and fall by about 18 log points in the year of the first auction, with a further decline to about 25 log points over the following three years as competition intensifies and developers gain experience. The absence of a pre-trend suggests that the switch was not timed to coincide with an underlying decline in costs beyond that captured by module prices.",
            "The price advantage of auctions is not uniform. It is largest for projects above 50 MW, where scale economies that feed-in tariffs did not reflect were greatest, and in years of rapid module price decline, when administratively set tariffs lagged furthest behind costs. Splitting the sample at 2017, the auction coefficient is −0.26 for contracts signed in 2012–2016 and −0.17 for those signed in 2017–2021, as regulators began to adjust feed-in tariffs more frequently and to benchmark them against recent auction results. In this sense auctions also improved the calibration of the remaining administered tariffs.",
          ],
          tables: [
            {
              id: "table-3",
              caption: "Table 3. Auctions and contracted prices",
              columns: ["", "(1)", "(2)", "(3)", "(4) Near thresholds"],
              rows: [
                ["Auction", "−0.79***", "−0.34***", "−0.21***", "−0.19***"],
                ["", "(0.09)", "(0.07)", "(0.05)", "(0.06)"],
                ["Log module price", "", "0.52***", "0.48***", "0.46***"],
                ["", "", "(0.08)", "(0.09)", "(0.11)"],
                ["Irradiation (kWh/m² per day)", "", "−0.08***", "−0.07***", "−0.07**"],
                ["Log capacity", "", "−0.06***", "−0.04**", "−0.03"],
                ["Country-by-year fixed effects", "No", "No", "Yes", "Yes"],
                ["Observations", "1,140", "1,140", "1,140", "286"],
              ],
              note: "Note: Dependent variable is log contracted price (USD/MWh). Column 2 adds country fixed effects; column 3 also controls for contract duration and site and grid provision. Standard errors two-way clustered by country and contract year in parentheses. ** p < 0.05, *** p < 0.01.",
            },
          ],
          figures: [
            {
              id: "figure-1",
              caption: "Figure 1. Contracted prices around the introduction of auctions",
              kind: "line",
              xLabels: ["−4", "−3", "−2", "−1", "0", "+1", "+2", "+3", "+4"],
              yLabel: "Log points relative to year −1",
              series: [
                {
                  name: "Estimate",
                  values: [0.03, 0.01, 0.02, 0, -0.18, -0.21, -0.24, -0.25, -0.24],
                  lower: [-0.08, -0.09, -0.07, 0, -0.27, -0.31, -0.35, -0.37, -0.38],
                  upper: [0.14, 0.11, 0.11, 0, -0.09, -0.11, -0.13, -0.13, -0.1],
                },
              ],
              marker: 3,
              note: "Note: Coefficients on years relative to the first auction in each economy, controlling for module prices, irradiation, capacity and country and year fixed effects, with 95 percent confidence intervals. Sample restricted to the seven economies that held auctions.",
            },
          ],
        },
        {
          id: "competition",
          heading: "7.2 Competition and Design",
          paragraphs: [
            "Table 4 examines the role of competition and design within auctions. The IV coefficient on the log number of bidders per megawatt is −0.13, implying that doubling competition lowers prices by about 9 percent, in line with H2. The OLS estimate is smaller, consistent with greater entry into auctions with higher expected profitability. Auctions in which the auctioneer provided land and grid connection — such as solar parks in India — achieved prices about 8 percent lower, reflecting lower risk and development costs for bidders.",
            "Local-content requirements raise contracted prices by about 7 percent, in line with H4. Given that modules accounted for roughly a third of project costs at the end of the period, this estimate implies that domestically produced modules and components were about 20 percent more expensive than imports. Ceiling prices had no significant effect on average prices, though they may have deterred some high bids. The effect of local-content rules should be weighed against any benefits for domestic industry [22][23], which we do not estimate.",
            "The effect of competition is not linear. The price reduction from additional bidders is largest when the number of bidders per megawatt is low, and flattens beyond about three bidders per megawatt offered, consistent with theoretical predictions that the marginal value of an additional bidder declines as competition intensifies [11]. Repeated auctions also lowered prices: conditional on the number of bidders, each additional earlier round held in the same country is associated with prices about 2 percent lower, which may reflect learning by both auctioneers and bidders, as well as the growth of local supply chains.",
          ],
          tables: [
            {
              id: "table-4",
              caption: "Table 4. Competition, design features and prices within auctions",
              columns: ["Regressor", "OLS", "IV", "Std. error (IV)"],
              rows: [
                ["Log bidders per MW offered", "−0.09***", "−0.13***", "(0.04)"],
                ["Local-content requirement", "0.07**", "0.07**", "(0.03)"],
                ["Land and grid provided by auctioneer", "−0.08**", "−0.08**", "(0.04)"],
                ["Ceiling price announced", "0.02", "0.02", "(0.03)"],
                ["Penalty for delay", "0.03", "0.03", "(0.03)"],
                ["First-stage F-statistic", "", "23.7", ""],
                ["Observations", "672", "672", ""],
              ],
              note: "Note: Dependent variable is log contracted price. All specifications include module prices, irradiation, capacity and country-by-year fixed effects. The number of bidders is instrumented with the number of developers prequalified in earlier auctions. ** p < 0.05, *** p < 0.01.",
            },
          ],
        },
        {
          id: "completion",
          heading: "7.3 Completion",
          paragraphs: [
            "Table 5 reports linear probability models for on-schedule completion. Auctioned projects as a whole are 9 percentage points less likely to be completed on schedule than feed-in-tariff projects, conditional on controls. The difference is driven by auctions without financial penalties for delay: within auctions, the absence of penalties reduces the completion rate by 12 percentage points, from 76 to 64 percent of contracted capacity, consistent with H3. Penalties raise prices only slightly — by 3 percent, an insignificant amount (Table 4) — suggesting that they deter speculative bids at little cost.",
            "Figure 2 shows completion rates by auction design. Bid bonds without delay penalties raise completion only modestly, whereas penalties proportional to the length of delay are associated with completion rates close to those under feed-in tariffs. Projects in auctions where the auctioneer provided land and grid connection had the highest completion rates, reflecting the removal of two major sources of delay.",
          ],
          tables: [
            {
              id: "table-5",
              caption: "Table 5. Procurement design and on-schedule completion",
              columns: ["Regressor", "(1) All projects", "(2) Auctions only", "(3) Auctions only"],
              rows: [
                ["Auction", "−0.09***", "", ""],
                ["", "(0.03)", "", ""],
                ["No penalty for delay", "", "−0.12***", "−0.08**"],
                ["", "", "(0.04)", "(0.04)"],
                ["Bid below benchmark cost (top quartile)", "", "", "−0.11***"],
                ["No penalty × bid below benchmark", "", "", "−0.10**"],
                ["Land and grid provided", "", "0.06*", "0.06*"],
                ["Observations", "948", "556", "556"],
              ],
              note: "Note: Linear probability models; dependent variable equals one if the project reached commercial operation within the scheduled period plus six months. All columns control for module prices, irradiation, capacity and country-by-year fixed effects. * p < 0.10, ** p < 0.05, *** p < 0.01.",
            },
          ],
          figures: [
            {
              id: "figure-2",
              caption: "Figure 2. Share of contracted capacity completed on schedule, by procurement design",
              kind: "bar",
              xLabels: ["Feed-in tariff", "Auction, no penalty", "Auction, bid bond only", "Auction, delay penalty", "Auction, land and grid provided"],
              yLabel: "Percent of contracted capacity",
              series: [{ name: "Completed on schedule", values: [88, 64, 69, 79, 83] }],
              note: "Note: Raw shares for projects whose scheduled commissioning period ended by December 2021. Categories for auctions are not mutually exclusive except for the first three.",
            },
          ],
        },
      ],
    },
    {
      id: "mechanisms",
      heading: "8. Why Do Low Bids Fail?",
      paragraphs: [
        "Why are projects in auctions without penalties less likely to be completed? One explanation is speculative bidding: developers bid below current costs in the expectation that module prices will fall before construction, and abandon or delay projects if they do not. Consistent with this explanation, column 3 of Table 5 shows that winning bids in the top quartile of the gap between the contemporaneous benchmark cost and the bid are 11 percentage points less likely to be completed, and the effect is twice as large in auctions without penalties. Completion of such projects is also more sensitive to subsequent module price movements: a 10 percent rise in module prices after contract signature lowers their completion probability by 6 percentage points.",
        "A second explanation is the winner's curse: in auctions with many bidders and uncertain costs, the winner is likely to be the bidder that most underestimated costs [5][13]. We find some support for this as well: conditional on the bid-to-benchmark gap, completion is lower in auctions with more bidders when penalties are absent. A third explanation is delays in land acquisition and grid connection outside developers' control. The higher completion rates of projects in solar parks are consistent with this channel, which suggests that some non-completion reflects institutional bottlenecks rather than strategic behaviour.",
        "These findings parallel evidence from public procurement that aggressive bids are associated with poorer contract performance [14][15]. They imply that the cost savings from auctions are overstated if contracted prices are compared without accounting for non-completion. Adjusting for the lower completion rate — assuming uncompleted capacity is eventually procured at the average auction price two years later — reduces the effective price advantage of auctions without penalties from 21 to about 15 percent, while that of auctions with penalties remains close to 20 percent.",
        "Financing conditions help explain which bidders bid aggressively. Winning bidders that were subsidiaries of large utilities or state-owned enterprises bid about 5 percent lower than independent developers, conditional on project characteristics, and were also more likely to complete their projects, consistent with lower financing costs rather than speculation [25]. By contrast, aggressive bids by small independent developers without prior completed projects account for a disproportionate share of non-completion. Prequalification requirements based on experience or financial capacity, which several auctions introduced after 2018, appear to have reduced this problem: completion rates in rounds with such requirements were 7 percentage points higher, although the estimate is imprecise.",
      ],
    },
    {
      id: "robustness",
      heading: "9. Robustness",
      paragraphs: [
        "Table 6 reports robustness checks for the price effect of auctions. The estimate is similar when we exclude India and China, which together account for about half of the auctioned projects; when we measure prices in real local currency rather than US dollars; when we adjust prices for differences in contract duration and indexation by computing a levelised real price; when we weight projects by capacity; and when we control for each country's bond yield interacted with year to capture financing conditions [25]. Excluding projects whose prices include transmission charges also leaves the results unchanged.",
        "A remaining concern is that feed-in-tariff projects in transition periods were systematically smaller or located in less favourable areas in ways not captured by our controls. The threshold sample (Table 3, column 4) addresses size, and controlling for distance to the nearest substation and land type leaves the estimate unchanged. Finally, estimates for completion are robust to defining completion as commercial operation within twelve rather than six months of the scheduled date.",
      ],
      tables: [
        {
          id: "table-6",
          caption: "Table 6. Robustness of the auction price effect",
          columns: ["Specification", "Auction coefficient", "Std. error", "Observations"],
          rows: [
            ["Baseline (Table 3, column 3)", "−0.21***", "(0.05)", "1,140"],
            ["Excluding India and China", "−0.19***", "(0.06)", "561"],
            ["Prices in real local currency", "−0.22***", "(0.05)", "1,140"],
            ["Levelised real price adjusting for duration and indexation", "−0.24***", "(0.06)", "1,140"],
            ["Weighted by capacity", "−0.23***", "(0.06)", "1,140"],
            ["Bond yield × year controls", "−0.20***", "(0.05)", "1,140"],
            ["Excluding prices including transmission", "−0.21***", "(0.05)", "1,062"],
            ["Distance to substation and land-type controls", "−0.21***", "(0.05)", "1,108"],
          ],
          note: "Note: Specification of Table 3, column 3, with the indicated modification. *** p < 0.01.",
        },
      ],
    },
    {
      id: "discussion",
      heading: "10. Discussion",
      paragraphs: [
        "Our results confirm that auctions substantially reduce the cost of procuring solar power. Applied to the roughly 40 gigawatts of auctioned capacity in our sample, a 21 percent price reduction relative to feed-in tariffs implies annual savings for electricity consumers of roughly USD 1 billion at typical capacity factors, accumulating over contract lives of 20–25 years. These savings arise because auctions reveal developers' rapidly falling costs, which administratively set tariffs tracked only with a lag [1][24].",
        "The design of auctions, however, determines whether low bids translate into installed capacity. Auctions without financial penalties for delay attracted speculative bids that were disproportionately abandoned or delayed, eroding more than a quarter of the apparent savings and delaying the decarbonisation of power systems. Penalties proportional to delay, and the provision of land and grid connection, raised completion substantially at little cost in terms of prices. These findings support recommendations that auction design focus on credible commitment and on removing non-price risks [4][12].",
        "Local-content requirements carry a measurable price premium. Whether this premium is justified depends on whether such rules foster competitive domestic industries, which the experience of wind turbine manufacturing suggests is possible but far from guaranteed [23]. Our estimate provides a benchmark for evaluating such trade-offs.",
        "Contracted prices are not the only relevant measure of cost. As solar penetration increases, the value of additional solar output declines because it is concentrated in midday hours [7][17], and system integration costs rise. Future auctions are likely to procure solar combined with storage or with time-differentiated prices, which will make comparisons based on prices per megawatt-hour less informative. Our analysis also cannot assess the effect of procurement design on innovation [19], or the distribution of rents between developers and equipment suppliers.",
        "The experience of the region also offers lessons for the sequencing of policy. Economies that introduced auctions after an initial period of feed-in tariffs benefited from established developers, financiers and supply chains, which helped generate competition in early auctions. Economies with less developed markets may find that auctions attract few bidders, at least initially, so that the advantages of auctions are smaller. Our finding that prices fell with repeated auctions suggests that a predictable schedule of auction rounds can help build competition over time [4]. Conversely, the boom in Vietnam under generous feed-in tariffs illustrates both the capacity of such tariffs to mobilise investment rapidly and the risk that they over-compensate developers and overwhelm grid infrastructure.",
      ],
    },
    {
      id: "conclusion",
      heading: "11. Conclusion",
      paragraphs: [
        "Auctions have substantially reduced the price of solar power in the Asia-Pacific, especially when they attract many bidders. Controlling for costs and conditions, auctioned projects secured prices about 21 percent below those under feed-in tariffs. Penalties for delay help ensure that low bids become installed capacity, while local-content rules carry a measurable cost premium. As governments scale up renewable procurement to meet climate targets, attention to auction design will be as important as the choice of auctions over administered prices [3][5].",
      ],
    },
    {
      id: "appendix",
      heading: "Appendix A. Data Compilation",
      paragraphs: [
        "Sources. Auction results were collected from the websites of procurement agencies and regulators, including national and state agencies in India, Japan's auction administrator, China's National Energy Administration and provincial authorities, Malaysia's Energy Commission, Korea's Energy Agency and Australian state and territory governments. Feed-in-tariff projects were identified from registers of approved projects and utilities' power purchase agreement lists. Where projects appeared in multiple sources, we used the regulator's record.",
        "Prices. Contracted prices are first-year tariffs in local currency per megawatt-hour, converted to US dollars at the average exchange rate in the contract month. Where tariffs are indexed, we record the indexation rule and compute levelised real prices over the contract term using a 7 percent real discount rate for the robustness check in Table 6.",
        "Benchmark costs. For the analysis of bid aggressiveness, we construct a benchmark levelised cost for each project using the module price in the contract quarter, country-specific balance-of-system costs and financing costs, and the project's irradiation, following standard methods [27]. The bid-to-benchmark gap is the log difference between the benchmark and the winning bid.",
      ],
    },
  ],
};
