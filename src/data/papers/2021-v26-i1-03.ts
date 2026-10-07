// Vol. 26, No. 1 (January 2021) — full research paper (sample content).
import type { PaperSpec } from "../paper-spec";

export const paper: PaperSpec = {
  id: "2021-v26-i1-03",
  title: "Typhoons, Local Public Finance and Economic Recovery: Evidence from Korean Municipalities",
  authors: [{ name: "Markus Bauer", corresponding: true }, { name: "Da-Hye Song" }],
  abstract:
    "We study how typhoons affect local economic activity and public finances in Korea and how central-government transfers shape recovery. Combining best-track typhoon data with a wind-field model, we construct exposure measures for 226 municipalities over 1995–2019 and link them to night-time light intensity, local tax revenue and intergovernmental transfers. A one-standard-deviation increase in typhoon wind exposure reduces night-time light intensity by 3.8 percent and local tax revenue by 2.1 percent in the year of the strike. Special disaster grants offset about 0.6 won of every won of estimated damage. Municipalities with low fiscal self-reliance recover more slowly: their activity remains 2.4 percent below trend four years after a strike, whereas fiscally stronger municipalities fully recover within three years. The results suggest that the design of disaster transfers matters for the speed of local recovery.",
  keywords: ["Natural disasters", "Typhoons", "Local public finance", "Intergovernmental transfers", "Night-time lights"],
  jelCodes: ["Q54", "H77", "R11", "H84"],
  pages: "59–88",
  volume: 26,
  issue: 1,
  year: 2021,
  received: "2020-06-03",
  accepted: "2020-11-09",
  published: "2021-01-15",
  publishedOnline: "2021-01-05",
  citations: 22,
  downloads: 1940,
  pdfSize: "1.66 MB",
  type: "Research Article",
  acknowledgments: "We thank participants at the University of Mannheim environmental economics seminar, two anonymous referees and the handling editor for helpful comments.",
  dataAvailability:
    "Typhoon tracks are from the Korea Meteorological Administration best-track archive; night-time lights and local fiscal data are public. Replication code is available from the corresponding author.",
  refs: [
    /* 1 */ "Hsiang, S. M. (2010). Temperatures and cyclones strongly associated with economic production in the Caribbean and Central America. Proceedings of the National Academy of Sciences, 107(35), 15367–15372.",
    /* 2 */ "Hsiang, S. M., & Jina, A. S. (2014). The causal effect of environmental catastrophe on long-run economic growth: Evidence from 6,700 cyclones. NBER Working Paper No. 20352. Cambridge, MA: National Bureau of Economic Research.",
    /* 3 */ "Strobl, E. (2011). The economic growth impact of hurricanes: Evidence from U.S. coastal counties. Review of Economics and Statistics, 93(2), 575–589.",
    /* 4 */ "Noy, I. (2009). The macroeconomic consequences of disasters. Journal of Development Economics, 88(2), 221–231.",
    /* 5 */ "Cavallo, E., Galiani, S., Noy, I., & Pantano, J. (2013). Catastrophic natural disasters and economic growth. Review of Economics and Statistics, 95(5), 1549–1561.",
    /* 6 */ "Deryugina, T. (2017). The fiscal cost of hurricanes: Disaster aid versus social insurance. American Economic Journal: Economic Policy, 9(3), 168–198.",
    /* 7 */ "Henderson, J. V., Storeygard, A., & Weil, D. N. (2012). Measuring economic growth from outer space. American Economic Review, 102(2), 994–1028.",
    /* 8 */ "Kahn, M. E. (2005). The death toll from natural disasters: The role of income, geography, and institutions. Review of Economics and Statistics, 87(2), 271–284.",
    /* 9 */ "Dell, M., Jones, B. F., & Olken, B. A. (2014). What do we learn from the weather? The new climate-economy literature. Journal of Economic Literature, 52(3), 740–798.",
    /* 10 */ "Deryugina, T., Kawano, L., & Levitt, S. (2018). The economic impact of Hurricane Katrina on its victims: Evidence from individual tax returns. American Economic Journal: Applied Economics, 10(2), 202–233.",
    /* 11 */ "Boustan, L. P., Kahn, M. E., Rhode, P. W., & Yanguas, M. L. (2020). The effect of natural disasters on economic activity in US counties: A century of data. Journal of Urban Economics, 118, 103257.",
    /* 12 */ "Elliott, R. J. R., Strobl, E., & Sun, P. (2015). The local impact of typhoons on economic activity in China: A view from outer space. Journal of Urban Economics, 88, 50–66.",
    /* 13 */ "Bertinelli, L., & Strobl, E. (2013). Quantifying the local economic growth impact of hurricane strikes: An analysis from outer space for the Caribbean. Journal of Applied Meteorology and Climatology, 52(8), 1688–1697.",
    /* 14 */ "Emanuel, K. (2005). Increasing destructiveness of tropical cyclones over the past 30 years. Nature, 436(7051), 686–688.",
    /* 15 */ "Knutson, T. R., McBride, J. L., Chan, J., Emanuel, K., Holland, G., Landsea, C., Held, I., Kossin, J. P., Srivastava, A. K., & Sugi, M. (2010). Tropical cyclones and climate change. Nature Geoscience, 3(3), 157–163.",
    /* 16 */ "Holland, G. J. (1980). An analytic model of the wind and pressure profiles in hurricanes. Monthly Weather Review, 108(8), 1212–1218.",
    /* 17 */ "Garrett, T. A., & Sobel, R. S. (2003). The political economy of FEMA disaster payments. Economic Inquiry, 41(3), 496–509.",
    /* 18 */ "Healy, A., & Malhotra, N. (2009). Myopic voters and natural disaster policy. American Political Science Review, 103(3), 387–406.",
    /* 19 */ "Skidmore, M., & Toya, H. (2002). Do natural disasters promote long-run growth? Economic Inquiry, 40(4), 664–687.",
    /* 20 */ "Raschky, P. A. (2008). Institutions and the losses from natural disasters. Natural Hazards and Earth System Sciences, 8(4), 627–634.",
    /* 21 */ "Conley, T. G. (1999). GMM estimation with cross sectional dependence. Journal of Econometrics, 92(1), 1–45.",
    /* 22 */ "Kocornik-Mina, A., McDermott, T. K. J., Michaels, G., & Rauch, F. (2020). Flooded cities. American Economic Journal: Applied Economics, 12(2), 35–66.",
    /* 23 */ "Gallagher, J. (2014). Learning about an infrequent event: Evidence from flood insurance take-up in the United States. American Economic Journal: Applied Economics, 6(3), 206–233.",
  ],
  body: [
    {
      id: "introduction",
      heading: "1. Introduction",
      paragraphs: [
        "Tropical cyclones are among the costliest natural hazards in East Asia. Studies using global and regional data find that cyclones reduce output and growth, sometimes for many years [1][2], while evidence from US coastal counties suggests that local losses can be substantial even when national effects are small [3]. With rising sea-surface temperatures expected to increase the intensity of the strongest storms [14][15], understanding how local economies recover — and what policy can do to speed recovery — is increasingly important.",
        "Much of the literature treats recovery as a function of the size of the shock and the income of the affected region [4][8]. Less attention has been paid to the role of local government. Yet in many countries local governments are responsible for repairing roads, embankments and public buildings, organising debris removal and supporting affected businesses, and their capacity to do so depends on their own revenues and on transfers from higher levels of government [6]. If local fiscal and administrative capacity matters, then otherwise similar places hit by similar storms may recover at very different speeds.",
        "Korea provides a useful setting to study this question. The peninsula is struck by two to three typhoons in a typical year, and several storms — Rusa in 2002 and Maemi in 2003 in particular — caused damage exceeding one percent of national GDP. Local governments differ greatly in fiscal self-reliance: metropolitan districts raise most of their revenue from local taxes, while many rural counties depend on central transfers for more than four-fifths of their budgets. Recovery spending is financed largely through special disaster grants from the central government, allocated according to assessed damage.",
        "We construct annual typhoon wind-exposure measures for 226 municipalities from 1995 to 2019 using best-track data and a parametric wind-field model [1][16], and link them to night-time light intensity, a widely used proxy for local economic activity [7], and to municipal fiscal accounts. We find that a one-standard-deviation increase in wind exposure reduces light intensity by 3.8 percent and local tax revenue by 2.1 percent in the year of the strike. Central disaster grants offset about 0.6 won of every won of estimated damage.",
        "Recovery paths differ sharply by fiscal capacity. Municipalities in the top half of the distribution of fiscal self-reliance return to trend within three years, whereas activity in the bottom half remains 2.4 percent below trend four years after a strike — despite receiving larger grants per capita. We present evidence that administrative capacity to deploy grants is one reason: the share of disaster grants carried over unspent into the following year is twice as high in fiscally weak municipalities.",
        "Section 2 describes typhoons and disaster finance in Korea. Section 3 reviews the literature. Section 4 describes the data and the construction of wind exposure, Section 5 the empirical strategy and Section 6 the results. Section 7 examines mechanisms, Section 8 robustness and Section 9 discusses policy implications. Section 10 concludes.",
        "Our paper makes three contributions. First, we provide the first municipality-level estimates of the economic effects of typhoons in Korea, using a physically based exposure measure rather than reported damage, which is itself affected by local reporting capacity. Second, we document how disaster shocks propagate into local public finances, distinguishing effects on own-source revenue, transfers and spending. Third, and most importantly, we show that recovery depends on the fiscal and administrative capacity of local governments, a dimension that has received little attention in the disaster literature but is directly relevant to the design of intergovernmental transfers.",
      ],
    },
    {
      id: "background",
      heading: "2. Typhoons and Disaster Finance in Korea",
      paragraphs: [],
      subsections: [
        {
          id: "bg-typhoons",
          heading: "2.1 Typhoon Exposure",
          paragraphs: [
            "Typhoons affecting Korea form in the western North Pacific and typically approach from the south between July and September. The southern and eastern coasts are most exposed, but strong storms often cross the peninsula and cause flooding and landslides inland. Damage arises from three sources: high winds, storm surges along the coast and heavy rainfall. Our wind-exposure measure captures the first directly and is strongly correlated with the others.",
            "Exposure is highly uneven. Over our sample period, municipalities on the southern coast of South Jeolla and South Gyeongsang provinces and on Jeju Island experienced damaging winds in more than a third of years, while some inland municipalities in the north of Gyeonggi and Gangwon provinces experienced them in fewer than one year in ten. Because typhoon paths vary substantially from year to year, however, even frequently exposed municipalities have many years without damaging winds, providing the within-municipality variation that our empirical strategy exploits.",
            "Typhoons also differ greatly in intensity. The strongest storms of our sample, Rusa in 2002 and Maemi in 2003, brought sustained winds near 40 metres per second at landfall and record rainfall, causing extensive flooding, landslides and damage to ports and power infrastructure. Smaller storms typically cause localised damage to crops, fishing equipment and buildings. Our cubic exposure index gives far more weight to the strongest storms, reflecting the steep increase of wind damage with speed documented in engineering studies.",
          ],
        },
        {
          id: "bg-finance",
          heading: "2.2 Local Government Finance and Disaster Grants",
          paragraphs: [
            "Korea's 226 basic local governments — cities, counties and autonomous districts — finance their spending through local taxes (mainly property and acquisition taxes and a local income-tax surcharge), shared national taxes and conditional grants. Fiscal self-reliance, defined as the share of own-source revenue in total revenue, averaged about 29 percent over our sample period but ranged from below 10 percent in many rural counties to over 60 percent in parts of Seoul.",
            "After a disaster, the central government assesses damage to public facilities and private property and allocates special disaster grants to cover a share of recovery costs. Areas designated as special disaster zones receive higher central cost shares. Local governments must still plan, procure and supervise recovery works, and must contribute matching funds for some projects.",
            "The allocation of grants is formula-based. After a storm, municipalities report damage to public facilities and private property through a national disaster-management system, and the central government verifies the reports and determines its cost share. Areas with damage exceeding thresholds linked to their fiscal capacity are designated special disaster zones, in which the central share of recovery costs rises. Because the thresholds are lower for fiscally weak municipalities, these areas are more often designated special disaster zones and receive a higher central share of costs, which is consistent with the larger grants per won of damage we document below.",
            "Recovery spending is executed by local governments. They design repair projects, procure contractors and supervise works, often under pressure to complete repairs before the next rainy season. Smaller municipalities typically have few engineering staff and limited experience with large procurement projects, while metropolitan districts employ specialised departments. These differences in administrative capacity are a natural candidate explanation for the differences in recovery speed we document.",
            "Table 1 lists the major typhoons that struck Korea between 1995 and 2019, together with their wind speeds at landfall and the damage they caused.",
          ],
          tables: [
            {
              id: "table-1",
              caption: "Table 1. Major typhoons affecting Korea, 1995–2019",
              columns: ["Typhoon", "Year", "Peak wind at landfall (m/s)", "Reported damage (KRW trillion)"],
              rows: [
                ["Rusa", "2002", "39", "5.1"],
                ["Maemi", "2003", "40", "4.2"],
                ["Nari", "2007", "33", "0.2"],
                ["Bolaven", "2012", "37", "0.6"],
                ["Sanba", "2012", "36", "0.4"],
                ["Chaba", "2016", "37", "0.2"],
                ["Mitag", "2019", "27", "0.2"],
              ],
              note: "Note: Reported damage in nominal won from official disaster statistics; wind speeds from best-track estimates.",
            },
          ],
        },
      ],
    },
    {
      id: "literature",
      heading: "3. Related Literature",
      paragraphs: [
        "Cross-country evidence on the growth effects of disasters is mixed. Some studies find persistent negative effects [2][4], others find positive long-run effects through capital renewal [19], and still others conclude that only the largest disasters followed by political upheaval have lasting effects [5]. Institutions and income reduce disaster losses and mortality [8][20]. The broader climate-economy literature emphasises using exogenous weather variation to identify causal effects [9].",
        "At the local level, satellite data have been used to measure the impact of cyclones on activity in the Caribbean [13] and in China [12], finding short-lived but significant declines in light intensity. Long-run US evidence suggests that severe disasters lead to out-migration and lower housing prices [11], while individual-level data show that Hurricane Katrina's victims eventually recovered their incomes, partly through migration [10]. Floods affect urban activity but cities rarely relocate away from flood-prone areas [22].",
        "Our fiscal analysis is closest to Deryugina {6}, who shows that explicit disaster aid in the United States is dwarfed by increases in non-disaster social-insurance transfers to affected counties. Political considerations also shape disaster payments [17][18], and households underinsure against infrequent events [23], increasing reliance on public support. In Korea, explicit disaster grants are the main channel, allowing us to relate grants directly to recovery.",
        "A related literature in public finance studies the flypaper effect — the tendency of intergovernmental grants to raise local spending more than equivalent increases in local income — and the conditions under which grants crowd out own-source revenue. Disaster grants provide an unusual setting in which grants are large, sudden and tied to specific purposes. Our finding that total spending rises by most of the grant amount in strike years is consistent with a strong flypaper effect for earmarked disaster transfers, while the slower execution in fiscally weak municipalities suggests that the effect of grants depends on local capacity to spend them.",
      ],
    },
    {
      id: "data",
      heading: "4. Data",
      paragraphs: [],
      subsections: [
        {
          id: "wind",
          heading: "4.1 Wind Exposure",
          paragraphs: [
            "Typhoon tracks, central pressure and maximum sustained winds at six-hourly intervals come from the Korea Meteorological Administration's best-track archive. Following Hsiang {1}, we apply the Holland {16} parametric wind-field model to estimate the maximum sustained wind speed experienced at each municipality's population-weighted centroid during each storm. We then construct an annual exposure index equal to the sum over storms of the cube of wind speed in excess of 18 metres per second, the approximate threshold for damage, reflecting the fact that wind damage rises steeply with speed.",
            "The Holland model estimates the wind field around a storm from its central pressure, the radius of maximum winds and the ambient pressure. We validate our estimates against wind speeds recorded at 62 weather stations during the storms in our sample: the correlation between modelled and observed maximum gusts is 0.81, and modelled speeds are unbiased on average, though they understate peak winds in mountainous terrain. Because measurement error in exposure is likely to be classical, it would bias our estimates towards zero.",
            "We standardise the exposure index to have unit standard deviation across all municipality-years, so that coefficients can be interpreted as the effect of a one-standard-deviation storm. In strike years, the median standardised exposure is about 0.7 and the 90th percentile about 2.4. A storm comparable to Maemi produced exposures above 4 standard deviations in the most affected coastal municipalities.",
            "Exposure is highly uneven across space and time. Coastal municipalities in the southern provinces of Jeju, South Jeolla and South Gyeongsang experience the strongest winds, while inland municipalities in the north-west are rarely affected. Within regions, exposure varies substantially from year to year because small differences in storm tracks determine which municipalities experience damaging winds; in a typical year, fewer than a fifth of municipalities record positive exposure. Because exposure depends on the precise track and intensity of storms, which are determined by atmospheric conditions, it is plausibly exogenous to local economic conditions once municipality fixed effects absorb average differences in typhoon risk.",
          ],
        },
        {
          id: "outcomes",
          heading: "4.2 Outcomes and Fiscal Data",
          paragraphs: [
            "Night-time light intensity is taken from satellite composites, harmonised across sensors to create a consistent annual series [7]. We compute the log of the sum of light values within each municipality. Fiscal data — local tax revenue, own-source revenue, transfers by type including special disaster grants, spending and carry-overs — come from municipal settlement accounts. Damage estimates are from official disaster loss reports.",
            "Night-time lights have well-known limitations: they capture activity that uses outdoor lighting and are noisy in sparsely populated rural areas, and sensor saturation can understate activity in dense urban centres. We address these concerns in three ways. First, all specifications include municipality fixed effects, so that persistent differences in the relationship between lights and output are absorbed. Second, we show that results are similar for local tax revenue, an administrative measure of activity unaffected by these limitations. Third, for the years after 2015, when municipal gross regional product estimates are available for most cities and counties, we confirm that lights and measured output move together after storms.",
            "Table 2 reports summary statistics, distinguishing municipalities by fiscal self-reliance in 1995. Low self-reliance municipalities are smaller and less lit, and receive much larger disaster grants per capita in strike years.",
            "Fiscal data come from the annual settlement accounts of local governments, which record revenue by source and expenditure by function. We distinguish own-source revenue, including local taxes and non-tax revenue, from intergovernmental transfers, which we divide into general grants, conditional grants and special disaster grants. All monetary variables are deflated to 2015 prices using the national consumer price index and expressed in per capita terms using resident population.",
          ],
          tables: [
            {
              id: "table-2",
              caption: "Table 2. Municipal characteristics, 1995–2019",
              columns: ["Variable", "Low self-reliance", "High self-reliance", "All"],
              rows: [
                ["Population (thousands)", "58", "412", "226"],
                ["Own-source revenue share", "0.14", "0.46", "0.29"],
                ["Years with damaging winds (share)", "0.18", "0.15", "0.17"],
                ["Wind exposure index, strike years (mean)", "1.12", "0.94", "1.04"],
                ["Log light intensity", "2.41", "3.62", "2.98"],
                ["Local tax revenue per capita (KRW thousand)", "286", "512", "398"],
                ["Disaster grants per capita, strike years (KRW thousand)", "312", "141", "236"],
                ["Municipalities", "113", "113", "226"],
              ],
              note: "Note: Municipalities split at the median own-source revenue share in 1995. The wind exposure index is standardised to unit standard deviation across all municipality-years.",
            },
          ],
        },
      ],
    },
    {
      id: "strategy",
      heading: "5. Empirical Strategy",
      paragraphs: [
        "Because the timing and path of typhoons are as good as random conditional on location, we estimate distributed-lag panel regressions of outcomes on current and lagged wind exposure: y_mt = Σ_{k=0..5} β_k·W_m,t−k + α_m + δ_pt + ε_mt, where y is log light intensity or log tax revenue for municipality m in year t, W is standardised wind exposure, α_m are municipality fixed effects and δ_pt province-by-year fixed effects. The cumulative effect after k years is Σ β up to k.",
        "To study heterogeneity, we interact exposure with an indicator for below-median fiscal self-reliance measured in 1995, before our outcome period. Standard errors allow for spatial correlation within 100 kilometres and serial correlation over five years [21].",
      ],
      subsections: [
        {
          id: "identification",
          heading: "5.1 Identification",
          paragraphs: [
            "Identification relies on year-to-year variation in typhoon paths within municipalities, net of shocks common to each province. Leads of wind exposure have no predictive power for current outcomes, and results are robust to controlling for municipality-specific linear trends and for lagged outcomes. Because fiscal self-reliance is measured in 1995, the heterogeneity analysis is not contaminated by changes in fiscal position caused by later storms.",
          ],
        },
      ],
    },
    {
      id: "results",
      heading: "6. Results",
      paragraphs: [],
      subsections: [
        {
          id: "activity",
          heading: "6.1 Economic Activity",
          paragraphs: [
            "A one-standard-deviation increase in wind exposure reduces night-time light intensity by 3.8 percent in the year of the strike (Table 3, column 1). The effect declines over subsequent years but remains statistically significant for two years. Converted using an elasticity of lights with respect to output of about 0.3 [7], the immediate effect corresponds to a decline in local output of roughly 1.1 percent, comparable to estimates for typhoons in China [12].",
            "The pattern of recovery over time is informative about the nature of the shock. Activity falls most in the strike year and recovers gradually, with no evidence of a rebound above trend that would indicate reconstruction-driven booms of the kind sometimes found after disasters [19]. This suggests that, on average, typhoons destroy capital and disrupt activity without generating offsetting stimulus, at least at the scale of the municipality. It is also consistent with findings that cyclones have persistent negative effects on growth in many economies [2].",
            "We also examine whether effects differ between coastal and inland municipalities. Coastal municipalities experience larger immediate declines in activity, reflecting storm-surge damage to ports, fishing fleets and coastal tourism, but they also recover somewhat faster, possibly because they have more experience with typhoons and better-established recovery procedures. Inland municipalities affected mainly by flooding and landslides experience smaller immediate declines but slower recovery.",
          ],
          tables: [
            {
              id: "table-3",
              caption: "Table 3. Effects of a one-standard-deviation typhoon on activity and public finances",
              columns: ["Years after strike", "Log lights", "Log local tax revenue", "Log disaster grants", "Log total spending"],
              rows: [
                ["0", "−0.038***", "−0.021***", "1.142***", "0.071***"],
                ["1", "−0.029***", "−0.016**", "0.384***", "0.052***"],
                ["2", "−0.020**", "−0.009", "0.061", "0.018"],
                ["3", "−0.014", "−0.004", "0.012", "0.006"],
                ["4", "−0.011", "−0.002", "0.004", "−0.003"],
                ["Observations", "5,650", "5,650", "5,650", "5,650"],
              ],
              note: "Note: Cumulative distributed-lag estimates with municipality and province-by-year fixed effects; standard errors robust to spatial and serial correlation. ** p < 0.05, *** p < 0.01.",
            },
          ],
        },
        {
          id: "finance",
          heading: "6.2 Public Finances",
          paragraphs: [
            "Local tax revenue falls by 2.1 percent in the strike year, reflecting lower property-transaction and business taxes, and recovers within two years. Disaster grants rise sharply in the strike year and the following year. Comparing grants with damage reported in official loss assessments, central transfers offset about 0.6 won of each won of damage (Table 4). Total municipal spending rises by 7.1 percent in the strike year, indicating that grants are largely, though not entirely, spent on recovery rather than substituting for own-source revenue.",
            "Other transfers respond less. General-purpose shared taxes, which are determined by formula, do not change in strike years. Conditional grants for other purposes fall slightly in the year after a strike, consistent with central ministries reallocating discretionary funds. Local borrowing rises modestly in fiscally strong municipalities but not in weak ones, which face tighter borrowing limits. These patterns indicate that special disaster grants are the main channel through which the central government shares disaster costs with local governments.",
          ],
          tables: [
            {
              id: "table-4",
              caption: "Table 4. Disaster grants and reported damage",
              columns: ["Specification", "Grants per won of damage", "Std. error", "Observations"],
              rows: [
                ["All strikes", "0.61***", "(0.07)", "962"],
                ["Special disaster zones", "0.74***", "(0.09)", "214"],
                ["Other strikes", "0.52***", "(0.08)", "748"],
                ["Low self-reliance municipalities", "0.68***", "(0.09)", "541"],
                ["High self-reliance municipalities", "0.51***", "(0.10)", "421"],
              ],
              note: "Note: Regressions of disaster grants in the strike year and following year on reported damage. *** p < 0.01.",
            },
          ],
        },
        {
          id: "heterogeneity",
          heading: "6.3 Recovery by Fiscal Capacity",
          paragraphs: [
            "Recovery paths differ markedly by fiscal capacity (Figure 1 and Table 5). Fiscally strong municipalities return to trend within three years. In fiscally weak municipalities, activity remains 2.4 percent below trend after four years, and the difference between the two groups becomes statistically significant from the second year. This occurs even though weaker municipalities receive more grants relative to damage (Table 4), so differences in the generosity of transfers cannot explain the slower recovery.",
            "The difference in recovery is not explained by differences in exposure. Fiscally weak municipalities experience somewhat more damaging winds on average, but the heterogeneity analysis compares responses per standard deviation of exposure. It is also not explained by differences in initial income or population alone: when we interact exposure with log income per capita and log population in addition to fiscal self-reliance, the coefficient on the fiscal interaction falls by only about a fifth and remains statistically significant.",
          ],
          figures: [
            {
              id: "figure-1",
              caption: "Figure 1. Night-time lights after a one-standard-deviation typhoon, by fiscal self-reliance",
              kind: "line",
              xLabels: ["0", "1", "2", "3", "4"],
              yLabel: "Δ log light intensity (percent)",
              series: [
                { name: "Low self-reliance", values: [-4.4, -3.9, -3.3, -2.8, -2.4], lower: [-5.6, -5.1, -4.6, -4.2, -3.9], upper: [-3.2, -2.7, -2.0, -1.4, -0.9] },
                { name: "High self-reliance", values: [-3.2, -1.9, -0.8, -0.1, 0.2], lower: [-4.4, -3.2, -2.2, -1.5, -1.3], upper: [-2.0, -0.6, 0.6, 1.3, 1.7] },
              ],
              note: "Note: Cumulative effects in years after the strike with 95 percent confidence intervals.",
            },
          ],
          tables: [
            {
              id: "table-5",
              caption: "Table 5. Effect of a one-standard-deviation typhoon on log light intensity, by fiscal self-reliance",
              columns: ["Years after strike", "Low self-reliance", "High self-reliance", "Difference"],
              rows: [
                ["0", "−0.044***", "−0.032***", "−0.012"],
                ["1", "−0.039***", "−0.019**", "−0.020*"],
                ["2", "−0.033***", "−0.008", "−0.025**"],
                ["3", "−0.028**", "−0.001", "−0.027**"],
                ["4", "−0.024**", "0.002", "−0.026**"],
              ],
              note: "Note: * p < 0.10, ** p < 0.05, *** p < 0.01.",
            },
          ],
        },
      ],
    },
    {
      id: "mechanisms",
      heading: "7. Mechanisms",
      paragraphs: [
        "Why do fiscally weak municipalities recover more slowly despite receiving more grants? We examine three mechanisms. First, administrative capacity: the share of disaster grants carried over unspent into the next fiscal year is 31 percent in low self-reliance municipalities, compared with 15 percent in high self-reliance ones, suggesting delays in planning and procuring recovery works. Second, matching requirements: weaker municipalities cut other capital spending in the year after a strike to meet local matching obligations, while stronger municipalities do not. Third, private resources: fiscally weak municipalities are also poorer and older, with lower insurance coverage, so private reconstruction may proceed more slowly.",
        "Figure 2 shows the carry-over gap and the cut in non-disaster capital spending. While we cannot separate these mechanisms cleanly, the evidence points to constraints on local capacity — rather than the generosity of central transfers — as an important bottleneck in recovery.",
        "To probe the administrative-capacity mechanism further, we use data on the number of civil-engineering officials employed by each municipality. Municipalities with more engineering staff per capita carry over a smaller share of disaster grants and recover faster, conditional on fiscal self-reliance. Although staffing is not randomly assigned, this pattern supports the view that the capacity to plan and execute recovery works is an important determinant of recovery speed.",
        "We also investigate whether slower recovery reflects population decline. Fiscally weak municipalities have been losing population throughout our sample period, and a storm might accelerate out-migration of younger residents, as found for severe disasters in the United States [11]. Using resident registration data, we find a small but significant increase in net out-migration in the two years after a strike in fiscally weak municipalities, equal to about 0.3 percent of the population. This accounts for perhaps a fifth of the persistent gap in activity.",
        "The timing of grant disbursements helps explain why fiscal capacity matters. Special disaster grants are typically paid six to twelve months after a strike, once damage assessments have been completed and approved by the central government. Municipalities with substantial own-source revenue or reserve funds can begin repairs immediately and be reimbursed later, whereas fiscally weak municipalities must wait for central funds before contracting works. In our data, recovery-related capital expenditure in the year of a strike is about twice as large, relative to estimated damage, in municipalities with above-median fiscal self-reliance.",
      ],
      figures: [
        {
          id: "figure-2",
          caption: "Figure 2. Implementation of disaster grants by fiscal self-reliance",
          kind: "bar",
          xLabels: ["Grants carried over (%)", "Δ other capital spending (%)"],
          yLabel: "Percent",
          series: [
            { name: "Low self-reliance", values: [31, -6.2] },
            { name: "High self-reliance", values: [15, 0.8] },
          ],
          note: "Note: Share of disaster grants carried over unspent into the following year, and change in non-disaster capital spending in the year after a strike.",
        },
      ],
    },
    {
      id: "robustness",
      heading: "8. Robustness",
      paragraphs: [
        "Table 6 shows that results are robust to alternative exposure measures — maximum wind speed and an indicator for winds above 25 metres per second — to adding rainfall during storms as a control, to excluding the exceptionally damaging 2002 and 2003 seasons, and to using municipality-specific trends. Using local tax revenue rather than lights as the outcome yields the same pattern of slower recovery in fiscally weak municipalities.",
      ],
      tables: [
        {
          id: "table-6",
          caption: "Table 6. Robustness: effect on log lights in the strike year and after four years",
          columns: ["Specification", "Year 0", "Year 4, low self-reliance", "Year 4, high self-reliance"],
          rows: [
            ["Baseline", "−0.038***", "−0.024**", "0.002"],
            ["Maximum wind speed", "−0.035***", "−0.022**", "0.004"],
            ["Winds above 25 m/s indicator", "−0.051***", "−0.031**", "−0.003"],
            ["Controlling for storm rainfall", "−0.033***", "−0.021**", "0.003"],
            ["Excluding 2002–2003", "−0.031***", "−0.019*", "0.005"],
            ["Municipality-specific trends", "−0.036***", "−0.023**", "0.001"],
          ],
          note: "Note: * p < 0.10, ** p < 0.05, *** p < 0.01.",
        },
      ],
    },
    {
      id: "discussion",
      heading: "9. Discussion and Policy Implications",
      paragraphs: [
        "Our findings have implications for the design of disaster finance. Korea's formula-based allocation of special disaster grants is progressive: fiscally weak municipalities receive larger central shares of recovery costs. Our results suggest that this progressivity, while appropriate, is not sufficient. Because weaker municipalities lack the capacity to deploy funds quickly, recovery lags even when funds are available. Complementary measures could include pre-arranged framework contracts for common recovery works, pooled engineering capacity at the provincial level that can be deployed after storms, and simplified procedures for small projects.",
        "A second implication concerns matching requirements. Requiring local contributions to recovery projects is intended to discourage over-reporting of damage and to give local governments a stake in efficient implementation. Our evidence that weak municipalities cut other capital spending to meet matching obligations suggests that these requirements impose real costs on the places least able to bear them. Reducing or waiving matching requirements for fiscally weak municipalities, combined with stronger verification of damage reports, could address both concerns.",
        "Our study has limitations. Night-time lights are an imperfect proxy for activity, particularly in rural areas. Our analysis focuses on wind exposure, while some of the most damaging effects of typhoons arise from rainfall and flooding that our measure captures only indirectly. And our identification of the role of fiscal capacity relies on comparing municipalities that differ in other ways as well, so we cannot rule out that unobserved correlates of fiscal capacity explain part of the slower recovery. Despite these caveats, the consistency of the evidence across outcomes and mechanisms suggests that local capacity matters for recovery.",
        "The results also bear on the debate about whether disaster finance should rely on ex post grants or ex ante instruments such as insurance and contingency funds. Ex post grants are allocated after damage assessments that can take months, and our evidence shows that they cover only part of the estimated damage. Ex ante instruments, such as parametric insurance that pays out automatically when wind speeds exceed a threshold, could provide liquidity more quickly and with less administrative burden. Because the municipalities that recover most slowly are those with the least fiscal capacity, the case for such instruments is strongest precisely where local governments are least able to finance them, which suggests a role for central-government co-financing of premiums.",
        "Climate change adds urgency to these questions. Projections suggest that the intensity of the strongest typhoons affecting East Asia may increase in coming decades, even if their frequency does not. If so, the fiscal burden of recovery on vulnerable municipalities will grow, and the gap in recovery speed between fiscally strong and weak municipalities that we document may widen. Designing transfer systems that respond quickly and in proportion to damage is therefore an important element of adaptation policy.",
      ],
    },
    {
      id: "conclusion",
      heading: "10. Conclusion",
      paragraphs: [
        "Typhoons impose substantial local losses in Korea, and central disaster grants offset only part of them. Recovery is slowest where local fiscal and administrative capacity is weakest, even though these places receive more generous transfers. Pairing disaster grants with technical assistance, pre-approved procurement frameworks and reduced matching requirements for fiscally weak municipalities could speed recovery. As climate change increases the intensity of tropical cyclones in the region [14][15], strengthening local capacity to deploy recovery funds quickly is likely to become an increasingly important component of disaster policy [9].",
        "Future research could examine the composition of recovery spending in more detail, distinguishing between the repair of public infrastructure, support for private reconstruction and direct assistance to households, to determine which types of spending most effectively speed recovery. Linking municipal data to firm- and household-level records would also clarify whether slow recovery in fiscally weak municipalities reflects business closures, out-migration or reduced investment, and whether these effects persist across generations. Such evidence would inform the design of transfer systems that are both fiscally sustainable and effective in protecting vulnerable communities from increasingly severe storms.",
      ],
    },
    {
      id: "appendix",
      heading: "Appendix A. Construction of the Exposure and Fiscal Variables",
      paragraphs: [
        "Wind field. For each six-hourly best-track observation we compute the radius of maximum winds from central pressure using an empirical relationship estimated for the western North Pacific, interpolate positions to hourly intervals, and apply the Holland {16} profile to obtain gradient-level winds, which we convert to surface winds using a standard reduction factor of 0.8 over land. We add a component reflecting the storm's forward motion on its right-hand side. The maximum sustained wind at each municipality's population-weighted centroid over the life of the storm is retained.",
        "Exposure index. For municipality m and year t, exposure equals the sum over storms of max(0, v − 18)^3, where v is the maximum sustained wind in metres per second. Results are similar when we use the threshold of 15 or 21 metres per second, when we use the square rather than the cube of excess wind speed, or when we compute exposure at the municipal centroid rather than the population-weighted centroid.",
        "Fiscal variables. Municipal settlement accounts report revenues and expenditures by detailed category. Own-source revenue comprises local taxes and non-tax revenues such as fees and charges. Special disaster grants are identified from the transfer accounts by their budget code. Carry-overs are appropriations not executed by the end of the fiscal year and transferred to the following year's budget. All monetary values are deflated to 2015 prices using the national consumer price index. Municipal boundary changes during the sample period, which affected a small number of cities that merged, are handled by aggregating to 2019 boundaries throughout.",
        "Damage data. Official disaster loss reports record damage to public facilities (roads, rivers, ports, schools) and private property (housing, crops, fishing equipment, vessels) assessed by local and central officials. Because reported damage may be affected by local reporting capacity and incentives, we use it only to compute the ratio of grants to damage, not as a measure of the shock itself.",
        "Night-time lights. We use annual composites of night-time light intensity, harmonised across satellite generations using a calibration based on overlapping years. Light intensity is summed over all pixels within each municipality's boundaries, excluding pixels covering water bodies. Because light intensity saturates in dense urban cores, we also report results excluding the seven metropolitan cities; estimated effects are slightly larger in this subsample, consistent with saturation attenuating the response in urban areas.",
      ],
    },
  ],
};
