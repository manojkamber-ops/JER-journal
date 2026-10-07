// Vol. 26, No. 2 (April 2021) — full research paper (sample content).
import type { PaperSpec } from "../paper-spec";

export const paper: PaperSpec = {
  id: "2021-v26-i2-03",
  title: "Fiscal Stimulus and Local Multipliers: Evidence from Korea's Four Major Rivers Project",
  authors: [{ name: "Hyun-Sung Lim", corresponding: true }, { name: "Roberto Rossi" }],
  abstract:
    "As part of its response to the global financial crisis, Korea launched the Four Major Rivers Restoration Project, which spent about KRW 22 trillion on river engineering between 2009 and 2012. Because spending was determined by the location of river segments selected for restoration, it provides plausibly exogenous variation in local government purchases. Using municipal data on project outlays, employment and output for 2006–2016, we estimate a relative local output multiplier of 1.6 over two years and a cost of KRW 41 million per job-year created. Effects are concentrated in construction and local services and dissipate after spending ends in 2013. Spillovers to neighbouring municipalities are positive but small. Our estimates are in line with cross-sectional multipliers for the United States and suggest that public works can provide effective short-run stimulus at the local level, although the national multiplier is likely smaller.",
  keywords: ["Fiscal policy", "Local multipliers", "Government spending", "Public investment", "Korea"],
  jelCodes: ["E62", "H54", "R11", "H72"],
  pages: "181–210",
  volume: 26,
  issue: 2,
  year: 2021,
  received: "2020-06-30",
  accepted: "2021-01-21",
  published: "2021-04-15",
  publishedOnline: "2021-04-02",
  citations: 24,
  downloads: 2040,
  pdfSize: "1.59 MB",
  type: "Research Article",
  acknowledgments: "We thank seminar participants at Hanyang University and Bocconi University, two anonymous referees and the handling editor for helpful comments.",
  dataAvailability: "Project execution records were obtained from the Ministry of Land, Infrastructure and Transport; employment and regional output data are public. Code and constructed data are available from the corresponding author.",
  refs: [
    /* 1 */ "Ramey, V. A. (2011). Identifying government spending shocks: It's all in the timing. Quarterly Journal of Economics, 126(1), 1–50.",
    /* 2 */ "Blanchard, O., & Perotti, R. (2002). An empirical characterization of the dynamic effects of changes in government spending and taxes on output. Quarterly Journal of Economics, 117(4), 1329–1368.",
    /* 3 */ "Nakamura, E., & Steinsson, J. (2014). Fiscal stimulus in a monetary union: Evidence from US regions. American Economic Review, 104(3), 753–792.",
    /* 4 */ "Chodorow-Reich, G. (2019). Geographic cross-sectional fiscal spending multipliers: What have we learned? American Economic Journal: Economic Policy, 11(2), 1–34.",
    /* 5 */ "Suárez Serrato, J. C., & Wingender, P. (2016). Estimating local fiscal multipliers. NBER Working Paper No. 22425. Cambridge, MA: National Bureau of Economic Research.",
    /* 6 */ "Auerbach, A. J., & Gorodnichenko, Y. (2012). Measuring the output responses to fiscal policy. American Economic Journal: Economic Policy, 4(2), 1–27.",
    /* 7 */ "Ilzetzki, E., Mendoza, E. G., & Végh, C. A. (2013). How big (small?) are fiscal multipliers? Journal of Monetary Economics, 60(2), 239–254.",
    /* 8 */ "Moretti, E. (2010). Local multipliers. American Economic Review, 100(2), 373–377.",
    /* 9 */ "Ramey, V. A., & Zubairy, S. (2018). Government spending multipliers in good times and in bad: Evidence from US historical data. Journal of Political Economy, 126(2), 850–901.",
    /* 10 */ "Mountford, A., & Uhlig, H. (2009). What are the effects of fiscal policy shocks? Journal of Applied Econometrics, 24(6), 960–992.",
    /* 11 */ "Barro, R. J., & Redlick, C. J. (2011). Macroeconomic effects from government purchases and taxes. Quarterly Journal of Economics, 126(1), 51–102.",
    /* 12 */ "Christiano, L., Eichenbaum, M., & Rebelo, S. (2011). When is the government spending multiplier large? Journal of Political Economy, 119(1), 78–121.",
    /* 13 */ "Farhi, E., & Werning, I. (2016). Fiscal multipliers: Liquidity traps and currency unions. In J. B. Taylor & H. Uhlig (Eds.), Handbook of Macroeconomics (Vol. 2, pp. 2417–2492). Amsterdam: Elsevier.",
    /* 14 */ "Acconcia, A., Corsetti, G., & Simonelli, S. (2014). Mafia and public spending: Evidence on the fiscal multiplier from a quasi-experiment. American Economic Review, 104(7), 2185–2209.",
    /* 15 */ "Chodorow-Reich, G., Feiveson, L., Liscow, Z., & Woolston, W. G. (2012). Does state fiscal relief during recessions increase employment? Evidence from the American Recovery and Reinvestment Act. American Economic Journal: Economic Policy, 4(3), 118–145.",
    /* 16 */ "Wilson, D. J. (2012). Fiscal spending jobs multipliers: Evidence from the 2009 American Recovery and Reinvestment Act. American Economic Journal: Economic Policy, 4(3), 251–282.",
    /* 17 */ "Leduc, S., & Wilson, D. (2013). Roads to prosperity or bridges to nowhere? Theory and evidence on the impact of public infrastructure investment. NBER Macroeconomics Annual, 27, 89–142.",
    /* 18 */ "Dupor, B., & McCrory, P. B. (2018). A cup runneth over: Fiscal policy spillovers from the 2009 Recovery Act. Economic Journal, 128(611), 1476–1508.",
    /* 19 */ "Corsetti, G., Meier, A., & Müller, G. J. (2012). What determines government spending multipliers? Economic Policy, 27(72), 521–565.",
    /* 20 */ "Leeper, E. M., Walker, T. B., & Yang, S.-C. S. (2010). Government investment and fiscal stimulus. Journal of Monetary Economics, 57(8), 1000–1012.",
    /* 21 */ "Bertrand, M., Duflo, E., & Mullainathan, S. (2004). How much should we trust differences-in-differences estimates? Quarterly Journal of Economics, 119(1), 249–275.",
    /* 22 */ "Kline, P., & Moretti, E. (2014). Local economic development, agglomeration economies, and the big push: 100 years of evidence from the Tennessee Valley Authority. Quarterly Journal of Economics, 129(1), 275–331.",
  ],
  body: [
    {
      id: "introduction",
      heading: "1. Introduction",
      paragraphs: [
        "The size of the government spending multiplier remains one of the most debated questions in macroeconomics. Aggregate time-series estimates range widely, from well below one to above two, depending on how spending shocks are identified, the sample period and the state of the economy [1][2][6][9][10][11]. Theory suggests that multipliers depend on monetary policy, openness and whether spending is temporary or persistent [12][13]. Because these factors vary across countries and episodes, evidence from economies other than the United States is valuable.",
        "A growing literature uses regional variation in government spending to estimate relative local multipliers [3][4][5]. Comparing regions that receive more or less spending within the same country holds constant national monetary policy and taxes, and yields estimates of how much local output rises relative to other regions when local government purchases increase. Such estimates are directly informative about the effects of regionally targeted programmes and, with the help of theory, about the aggregate multiplier in a currency union or small open economy [13].",
        "We study the Four Major Rivers Restoration Project, the largest single component of Korea's fiscal response to the global financial crisis. Between 2009 and 2012 the government spent about KRW 22 trillion on dredging, embankment construction, weirs, reservoirs and riverside facilities along the Han, Nakdong, Geum and Yeongsan rivers. The allocation of spending across municipalities was determined by which river segments were selected for engineering — a technical decision based on flood risk, water supply and navigation objectives — and we show that it was unrelated to pre-existing local economic trends.",
        "Using municipal data on project outlays, employment and output for 2006–2016, we estimate a relative local output multiplier of 1.6 over two years and a cost of KRW 41 million per job-year created. About 60 percent of the employment gain is in construction and the remainder in local services such as retail, restaurants and accommodation. Effects dissipate after spending ends in 2013, and spillovers to neighbouring municipalities are positive but small.",
        "Our estimates fall within the range of relative multipliers found for the United States [3][4] and Italy [14], and suggest that public works can provide effective short-run stimulus at the local level when there is slack. They should not be interpreted as the national multiplier, which also reflects the financing of spending and the response of national monetary policy and interest rates [4][13].",
        "Section 2 describes the project. Section 3 reviews related literature and Section 4 presents a simple framework for interpreting local multipliers. Section 5 describes the data and Section 6 the empirical strategy. Section 7 reports results, Section 8 examines dynamics and spillovers, Section 9 reports robustness checks and Section 10 discusses implications.",
      ],
    },
    {
      id: "background",
      heading: "2. The Four Major Rivers Project",
      paragraphs: [
        "The project was announced in late 2008 as part of a broader fiscal package designed to support employment during the global financial crisis, and was justified also by its objectives of flood control, water security and ecological restoration. Construction began in 2009 and most works were completed by the end of 2011, with some facilities finished in 2012. The project was controversial on environmental grounds, and its long-run benefits have been debated; our analysis concerns only its short-run economic effects.",
        "Spending was allocated to specific river segments according to engineering assessments carried out before the project was announced. Segments with insufficient flood capacity, sediment accumulation or deteriorating embankments were selected for works, and the corresponding outlays were concentrated in the municipalities through which those segments flowed. Contracts were awarded to construction firms through competitive tendering, and contractors typically hired workers and purchased materials locally, although large firms also brought specialised staff and equipment from elsewhere.",
        "The scale of the project was large relative to the economies of recipient municipalities. Across the 71 recipients, cumulative outlays over 2009–2012 averaged about 4.9 percent of annual municipal output, and exceeded 10 percent in 12 small rural municipalities along the Nakdong and Yeongsan rivers. Spending was also concentrated in time: about three quarters of outlays occurred in 2010 and 2011 (Table 1). This combination of a large, temporary and geographically concentrated spending shock is well suited to estimating local multipliers, because it generates substantial variation in spending relative to output over a short horizon during which other determinants of local growth are unlikely to change.",
        "The timing of the project coincided with the trough of the business cycle. Korean GDP contracted sharply in the fourth quarter of 2008 and recovered quickly in 2009 and 2010, aided by large fiscal and monetary stimulus and a depreciation of the won. Unemployment rose only modestly, but hours worked and employment in construction fell substantially in 2008–2009 as private building activity collapsed. Recipient municipalities therefore had considerable slack in construction labour markets when project spending began, a condition under which theory predicts relatively large multipliers [6][12].",
      ],
      tables: [
        {
          id: "table-1",
          caption: "Table 1. Project spending by river and year (KRW trillion)",
          columns: ["River", "2009", "2010", "2011", "2012", "Total"],
          rows: [
            ["Han", "0.4", "1.3", "1.1", "0.3", "3.1"],
            ["Nakdong", "1.3", "4.0", "3.4", "1.0", "9.7"],
            ["Geum", "0.5", "1.4", "1.2", "0.4", "3.5"],
            ["Yeongsan", "0.4", "1.1", "0.9", "0.3", "2.7"],
            ["Tributaries and related works", "0.3", "1.0", "1.1", "0.6", "3.0"],
            ["Total", "2.9", "8.8", "7.7", "2.6", "22.0"],
          ],
          note: "Note: Executed outlays from Ministry of Land, Infrastructure and Transport records; totals may not sum because of rounding.",
        },
      ],
    },
    {
      id: "literature",
      heading: "3. Related Literature",
      paragraphs: [
        "Aggregate estimates of government spending multipliers use narrative or timing-based identification of defence spending shocks [1][9][11], structural vector autoregressions [2][10] and regime-switching models [6]. Multipliers appear larger in recessions in some studies [6] but not in others [9], and are smaller in open economies and under flexible exchange rates [7][19]. Theory predicts large multipliers when monetary policy is constrained by the zero lower bound [12] and highlights the difference between national and local multipliers [13].",
        "Cross-sectional studies typically find relative multipliers between 1.5 and 2. Nakamura and Steinsson {3} use regional variation in US military procurement and find a multiplier of about 1.5; Chodorow-Reich {4} surveys the literature and argues for a cross-sectional multiplier of about 1.8. Studies of the 2009 American Recovery and Reinvestment Act find substantial job effects of fiscal relief to states [15][16], positive spillovers across state borders [18] and significant effects of infrastructure spending, though with long implementation lags [17]. Exploiting the suspension of public works in Italian municipalities dissolved for mafia infiltration, Acconcia, Corsetti and Simonelli {14} find a local multiplier of about 1.5. Local multipliers also capture spillovers from tradable to non-tradable sectors [8].",
        "Our setting has several attractive features. The project was large relative to local economies, concentrated in time, and allocated according to engineering criteria rather than local economic conditions. It also involved public investment rather than transfers or consumption spending, a category for which theory predicts different dynamics because of implementation lags and productive effects [17][20].",
        "A related literature studies the long-run effects of large regional investment programmes. Kline and Moretti {22} show that the Tennessee Valley Authority generated persistent gains in manufacturing employment through agglomeration economies, while agricultural employment gains disappeared once subsidies ended. Leduc and Wilson {17} find that federal highway grants raise state output for up to a decade, reflecting both demand effects during construction and productive effects afterwards. In contrast, we find that the effects of the Four Major Rivers project disappeared soon after spending ended, suggesting that the project's short-run demand effects were not followed by significant productive effects at the local level.",
      ],
    },
    {
      id: "framework",
      heading: "4. Interpreting Local Multipliers",
      paragraphs: [
        "Consider municipalities indexed by m that share a common currency, monetary policy and national tax system. Spending G_m in municipality m raises local labour demand directly, through contractors' hiring, and indirectly, through the spending of workers and firms whose incomes rise. The relative local multiplier is the effect on local output of an increase in local spending, relative to other municipalities, when the spending is financed nationally. It differs from the national multiplier for two reasons: because local taxes do not rise to finance local spending, and because national monetary policy does not respond to local spending [3][13].",
        "In models with nominal rigidities and limited mobility of labour, the relative multiplier exceeds one if local spending raises employment of otherwise underutilised resources and generates additional local consumption. It is lower when a large share of spending leaks out of the municipality through imports of materials and labour from elsewhere. The framework predicts that local multipliers should be larger where there is more slack, where non-tradable services account for a large share of local spending, and where contractors source labour and materials locally.",
        "The framework also clarifies what our estimates do not capture. Because national taxes finance the project, the relative multiplier does not include any negative effects on private demand arising from the expectation of higher future taxes, which are common to all municipalities and absorbed by year fixed effects. Nor does it include any effect of the project on national interest rates or the exchange rate. Conversely, it does not include positive spillovers from recipient municipalities to the rest of the country through trade in goods and services, except for the short-distance spillovers that we estimate directly in Section 8. Translating local into national multipliers therefore requires a model of these general-equilibrium channels [4][13].",
      ],
    },
    {
      id: "data",
      heading: "5. Data",
      paragraphs: [],
      subsections: [
        {
          id: "data-spending",
          heading: "5.1 Project Spending",
          paragraphs: [
            "Project outlays by municipality and year are compiled from the Ministry of Land, Infrastructure and Transport's execution records, which report spending on each construction section along with its location. Where sections straddle municipal boundaries, we allocate outlays in proportion to the length of the river segment in each municipality. Planned spending at the time of announcement, which we use as an instrument, comes from the project master plan published in 2009.",
            "Total project spending recorded in the execution records amounts to KRW 22.0 trillion, of which KRW 19.0 trillion can be attributed to specific construction sections located along the four rivers, and the remainder to tributaries and related works that we allocate to municipalities in the same way. Spending on land compensation, which transfers existing assets rather than purchasing new output, accounts for about 8 percent of the total and is excluded from our spending measure; including it slightly reduces the estimated multiplier.",
          ],
        },
        {
          id: "data-outcomes",
          heading: "5.2 Employment and Output",
          paragraphs: [
            "Employment by municipality and industry comes from the Census on Establishments, and output from municipal gross regional product estimates published by provincial statistical offices. The sample covers 2006–2016, giving three pre-project years and four post-project years. We restrict attention to the 119 municipalities through which one of the four rivers or its main tributaries flows; of these, 71 received project spending and 48 did not because their segments were not selected.",
            "Table 2 compares recipient and non-recipient municipalities along the same rivers before the project. They were similar in population, construction employment share, output growth and unemployment, supporting the comparison.",
            "Several features of the data deserve comment. Municipal output estimates are constructed partly from industry value added allocated using employment and other indicators, which may attenuate estimated effects if allocation rules do not fully reflect local activity. To address this concern, we also report results for employment from the establishment census, which is collected directly from establishments, and from social-insurance records. Construction employment is recorded at the establishment where workers are employed, which for large contractors may be a head office outside the municipality where work takes place; site offices are, however, typically registered as separate establishments, and our results are similar when we exclude municipalities containing the head offices of the ten largest contractors.",
          ],
          tables: [
            {
              id: "table-2",
              caption: "Table 2. Municipalities along the four rivers, 2008",
              columns: ["Variable", "Project spending", "No spending (same rivers)", "Difference"],
              rows: [
                ["Population (thousands)", "182", "168", "14"],
                ["Construction employment share", "0.071", "0.068", "0.003"],
                ["Output growth 2006–2008 (percent)", "3.9", "4.1", "−0.2"],
                ["Employment growth 2006–2008 (percent)", "1.8", "1.9", "−0.1"],
                ["Unemployment rate (percent)", "3.4", "3.3", "0.1"],
                ["Fiscal self-reliance ratio", "0.27", "0.29", "−0.02"],
                ["Project spending per capita, 2009–12 (KRW thousand)", "1,940", "0", ""],
                ["Municipalities", "71", "48", ""],
              ],
              note: "Note: No differences are statistically significant at the 10 percent level.",
            },
          ],
        },
      ],
    },
    {
      id: "strategy",
      heading: "6. Empirical Strategy",
      paragraphs: [
        "Following Nakamura and Steinsson {3}, we estimate (Y_m,t+2 − Y_m,t)/Y_m,t = β·(G_m,t+2 − G_m,t)/Y_m,t + α_t + δ_pt + ε_mt, where Y is output per capita, G project spending per capita, α_t year fixed effects and δ_pt province-by-year fixed effects. Both changes are measured over two years and scaled by initial output, so that β is directly interpretable as a multiplier. An analogous specification for employment yields the number of jobs created per unit of spending, from which we compute the cost per job-year.",
        "Scaling changes in spending and output by initial output, rather than taking logarithms, ensures that the coefficient can be interpreted directly as the change in output per unit of spending. Because spending is measured at the municipality level and output per capita reflects resident population, we also report estimates in which both variables are expressed in levels per worker, which yield very similar results.",
      ],
      subsections: [
        {
          id: "instrument",
          heading: "6.1 Instrument",
          paragraphs: [
            "Realised outlays may respond to local conditions through the pace of construction: works may proceed faster where contractors find workers more easily. We therefore instrument actual spending with planned spending from the 2009 master plan, allocated across years according to the national spending profile. The first stage is strong (F = 54.7).",
          ],
        },
        {
          id: "identification",
          heading: "6.2 Identifying Assumptions",
          paragraphs: [
            "Identification requires that planned spending be unrelated to other determinants of local output growth. Table 2 shows that recipient and non-recipient municipalities along the same rivers were similar before the project, and Figure 1 shows that planned spending does not predict output growth in 2006–2008. Standard errors are clustered by municipality [21].",
            "Table 3 reports balance and placebo tests. Planned spending per capita is uncorrelated with pre-project levels and growth of output, employment, population and fiscal capacity, conditional on province-by-year fixed effects. It also does not predict changes in outcomes in 2006–2008, before the project was announced, nor changes in employment in sectors that should be unaffected by local demand, such as agriculture. These tests support the assumption that the location of selected river segments was unrelated to local economic trends.",
          ],
          tables: [
            {
              id: "table-3",
              caption: "Table 3. Balance and placebo tests: planned spending and pre-project outcomes",
              columns: ["Dependent variable", "Coefficient on planned spending", "Std. error", "Mean of dep. var."],
              rows: [
                ["Log population, 2008", "0.012", "(0.031)", "11.6"],
                ["Construction employment share, 2008", "0.001", "(0.002)", "0.070"],
                ["Fiscal self-reliance ratio, 2008", "−0.004", "(0.006)", "0.28"],
                ["Output growth, 2006–2008 (percent)", "−0.07", "(0.19)", "4.0"],
                ["Employment growth, 2006–2008 (percent)", "0.03", "(0.11)", "1.8"],
                ["Agricultural employment growth, 2008–2012 (percent)", "−0.05", "(0.14)", "−2.3"],
              ],
              note: "Note: Each row is a separate regression on planned spending per capita (KRW million), with province fixed effects; standard errors clustered by municipality. No coefficient is statistically significant at the 10 percent level.",
            },
          ],
        },
      ],
    },
    {
      id: "results",
      heading: "7. Results",
      paragraphs: [
        "We present results in three steps: the aggregate effects on output and employment, their composition across sectors, and their variation with local labour-market slack. Throughout, we report IV estimates as our preferred specification and OLS estimates for comparison.",
      ],
      subsections: [
        {
          id: "output",
          heading: "7.1 Output and Employment",
          paragraphs: [
            "Table 4 reports the main estimates. The IV estimate of the output multiplier is 1.62, implying that each won of project spending raised local output by 1.6 won relative to non-recipient municipalities over two years. OLS estimates are somewhat smaller, consistent with construction proceeding more slowly where local economies were weaker. The employment estimate implies a cost of KRW 41 million per job-year, with a 90 percent confidence interval from 29 to 70 million.",
            "To put these numbers in context, average annual compensation of construction workers in 2010 was roughly KRW 30 million, so a cost of KRW 41 million per job-year implies that a substantial share of spending went to materials, equipment and profits, as expected for capital-intensive river engineering.",
          ],
          tables: [
            {
              id: "table-4",
              caption: "Table 4. Local fiscal multipliers (two-year horizon)",
              columns: ["Outcome", "OLS", "IV", "Std. error (IV)", "First-stage F"],
              rows: [
                ["Output multiplier", "1.31***", "1.62***", "(0.41)", "54.7"],
                ["Employment (jobs per KRW 100 million)", "1.96***", "2.44***", "(0.71)", "54.7"],
                ["Implied cost per job-year (KRW million)", "51", "41", "[29, 70]", ""],
                ["Observations", "952", "952", "", ""],
              ],
              note: "Note: Bracketed values are a 90 percent confidence interval. Province-by-year fixed effects included. *** p < 0.01.",
            },
          ],
        },
        {
          id: "sectors",
          heading: "7.2 Sectoral Composition",
          paragraphs: [
            "Table 5 decomposes the employment effect by sector. About 60 percent of the jobs created are in construction, 25 percent in retail, restaurants and accommodation, and the remainder in other services and transport. Manufacturing employment does not respond, consistent with the absence of large local suppliers of construction materials in most recipient municipalities. The response of non-tradable services indicates that the multiplier reflects local spending by construction workers and contractors, in line with the mechanism emphasised by Moretti {8}.",
          ],
          tables: [
            {
              id: "table-5",
              caption: "Table 5. Employment effects by sector (IV, jobs per KRW 100 million)",
              columns: ["Sector", "Estimate", "Std. error", "Share of total effect"],
              rows: [
                ["Construction", "1.47***", "(0.42)", "0.60"],
                ["Retail, restaurants and accommodation", "0.61***", "(0.21)", "0.25"],
                ["Transport and storage", "0.18*", "(0.10)", "0.07"],
                ["Other services", "0.20", "(0.14)", "0.08"],
                ["Manufacturing", "−0.02", "(0.09)", "0.00"],
              ],
              note: "Note: * p < 0.10, *** p < 0.01.",
            },
          ],
        },
        {
          id: "slack",
          heading: "7.3 Slack and the Size of the Multiplier",
          paragraphs: [
            "The framework predicts larger multipliers where there is more slack. Splitting municipalities by their unemployment rate in 2008, we find a multiplier of 2.1 in municipalities with above-median unemployment and 1.2 in those below the median, although the difference is only marginally significant. Multipliers are also larger in municipalities with a higher share of employment in local services, consistent with stronger local spillovers.",
            "We also examine whether multipliers differ with the share of contracts awarded to firms headquartered in the recipient municipality or province. Where local firms won a larger share of contracts, the employment effect is about 40 percent larger, consistent with less leakage of wages and profits out of the municipality. This finding suggests that the local multiplier depends on the procurement process as well as on the amount of spending, an issue that has received little attention in the literature.",
          ],
        },
      ],
    },
    {
      id: "dynamics",
      heading: "8. Dynamics and Spillovers",
      paragraphs: [
        "Figure 1 traces the dynamics of the effect by estimating year-by-year coefficients on cumulative planned spending. Before 2009, the coefficients are small and insignificant. Output rises in 2009–2011 as spending ramps up, peaks in 2011, and returns to the pre-project trend by 2014, after spending ends. We find no evidence of lasting effects on output, employment or population, suggesting that the project did not generate the kind of persistent agglomeration effects found for some large regional programmes [22].",
        "Neighbouring municipalities that did not receive spending but are located within 30 kilometres of recipients experience small positive effects, with a spillover multiplier of about 0.2. These spillovers reflect commuting of construction workers and purchases from suppliers in neighbouring places, consistent with evidence of cross-border spillovers from US stimulus spending [18]. Because they are small, they do not materially change our estimates of the local multiplier.",
        "The absence of persistent effects is informative about the mechanisms behind the multiplier. If the project had raised local productivity — for example, by reducing flood damage or improving water supply for local industry — we would expect output to remain above trend after construction ended. That output returned to trend within a year of the end of spending suggests that the short-run effect operated mainly through demand. It does not rule out productive effects that are spread across a wide area, such as reduced flood risk downstream, which would be absorbed by year fixed effects, nor effects that emerge only over longer horizons than we can observe.",
      ],
      figures: [
        {
          id: "figure-1",
          caption: "Figure 1. Effect of planned project spending on output per capita, by year",
          kind: "line",
          xLabels: ["2006", "2007", "2008", "2009", "2010", "2011", "2012", "2013", "2014", "2015", "2016"],
          yLabel: "Multiplier (cumulative)",
          series: [
            {
              name: "Estimate",
              values: [0.05, -0.08, 0.02, 0.84, 1.42, 1.71, 1.38, 0.62, 0.18, 0.09, 0.04],
              lower: [-0.41, -0.52, -0.43, 0.21, 0.71, 0.92, 0.61, -0.11, -0.49, -0.58, -0.64],
              upper: [0.51, 0.36, 0.47, 1.47, 2.13, 2.5, 2.15, 1.35, 0.85, 0.76, 0.72],
            },
          ],
          marker: 2,
          note: "Note: Year-by-year IV estimates with 95 percent confidence intervals. The dashed line marks the start of the project.",
        },
      ],
    },
    {
      id: "robustness",
      heading: "9. Robustness",
      paragraphs: [
        "Table 6 reports robustness checks. Estimates are similar when we include all 229 municipalities rather than only those along the rivers, when we measure changes over one or three years instead of two, when we exclude the Nakdong river basin, which received the largest share of spending, and when we control for other components of the 2009 fiscal package allocated to municipalities. Using employment from administrative social-insurance records instead of the establishment census yields a similar cost per job-year.",
        "A potential concern is that the project crowded out other public investment in recipient municipalities, for example if central government grants for local infrastructure were redirected elsewhere. Using municipal budget data, we find no significant relationship between project spending and other capital expenditure by municipal governments, nor with central government grants for other purposes. The multiplier therefore reflects the effect of additional spending rather than a reallocation of public investment across places.",
      ],
      tables: [
        {
          id: "table-6",
          caption: "Table 6. Robustness of the output multiplier (IV)",
          columns: ["Specification", "Multiplier", "Std. error", "First-stage F"],
          rows: [
            ["Baseline (river municipalities, two years)", "1.62***", "(0.41)", "54.7"],
            ["All 229 municipalities", "1.54***", "(0.38)", "61.2"],
            ["One-year horizon", "1.21***", "(0.36)", "52.8"],
            ["Three-year horizon", "1.68***", "(0.47)", "49.3"],
            ["Excluding Nakdong basin", "1.71***", "(0.52)", "38.9"],
            ["Controlling for other stimulus allocations", "1.57***", "(0.42)", "53.4"],
            ["Spillover multiplier (neighbours within 30 km)", "0.21*", "(0.12)", "49.3"],
          ],
          note: "Note: * p < 0.10, *** p < 0.01.",
        },
      ],
      figures: [
        {
          id: "figure-2",
          caption: "Figure 2. Relative local multipliers: this study and selected estimates",
          kind: "bar",
          xLabels: ["This study (Korea)", "US military procurement", "Italy public works", "US cross-sectional survey"],
          yLabel: "Relative multiplier",
          series: [{ name: "Estimate", values: [1.6, 1.5, 1.5, 1.8] }],
          note: "Note: Approximate central estimates from Nakamura and Steinsson (2014), Acconcia, Corsetti and Simonelli (2014) and Chodorow-Reich (2019).",
        },
      ],
    },
    {
      id: "discussion",
      heading: "10. Discussion",
      paragraphs: [
        "How should these estimates inform fiscal policy? First, they indicate that public works can raise local output and employment substantially in the short run, at least when spending is large and concentrated, and when there is slack in local labour markets. The multiplier of 1.6 is comparable to cross-sectional estimates for other countries (Figure 2), suggesting that the mechanisms underlying local multipliers are broadly similar across advanced economies.",
        "Second, the national multiplier is likely to be smaller. A relative multiplier does not account for the national financing of spending, which may crowd out private demand through higher taxes or interest rates, nor for leakages through imports. Theoretical analyses suggest that national multipliers can be considerably smaller than local ones when monetary policy offsets fiscal expansions, but close to local multipliers when monetary policy is constrained [4][13]. In 2009 the Bank of Korea had already cut its policy rate sharply, so the national multiplier may have been relatively large.",
        "Third, the temporary nature of the effects is important for evaluating the project. The stimulus objective was achieved while spending lasted, but the case for the project as a long-term investment rests on its benefits for flood control, water supply and the environment, which our analysis does not assess and which remain disputed. Public investment designed primarily for stimulus may not deliver lasting productive benefits [17][20].",
        "Finally, the cost per job-year can be compared with other employment programmes. Direct public job schemes in Korea, which employ workers in temporary community and environmental work, cost about KRW 10–15 million per job-year in 2009, considerably less than our estimate of KRW 41 million. But such schemes create mostly low-wage, part-time jobs with little effect on the wider local economy, whereas the project's spending generated employment in local services through its multiplier effects and also produced physical assets. Comparisons of cost per job across programmes should therefore take into account the type of employment created and the value of any assets produced.",
      ],
    },
    {
      id: "conclusion",
      heading: "11. Conclusion",
      paragraphs: [
        "Korea's river-restoration spending raised local output and employment while it lasted, with a relative multiplier of about 1.6 and a cost of KRW 41 million per job-year. Effects were concentrated in construction and local services and disappeared after spending ended. These findings add to the international evidence that local fiscal multipliers are substantial [3][4][14] and illustrate the potential of public works as short-run stimulus, while underlining that their long-run value depends on the social returns to the investments themselves.",
        "Several questions remain for future research. First, the long-run effects of the project's infrastructure on flood damage, agriculture and tourism could be evaluated once sufficient post-project data become available, which would allow a fuller assessment of its social returns. Second, comparing the multiplier of public investment with that of other components of the 2009 fiscal package, such as temporary transfers and tax cuts, would help policy makers choose among instruments. Third, linking project spending to firm-level data would shed light on how contractors and their suppliers adjusted employment and investment, and on the extent to which the local multiplier reflects increases in hours worked by existing employees rather than new hires.",
      ],
    },
    {
      id: "appendix",
      heading: "Appendix A. Data Construction",
      paragraphs: [
        "Spending allocation. The project master plan lists 170 construction sections with their locations and budgets. We geocode each section and intersect it with municipal boundaries; where a section crosses boundaries, we allocate its budget in proportion to the river length in each municipality. Executed outlays by section and year come from the ministry's settlement records. Planned spending by year is constructed by applying the national annual spending profile to each section's planned budget.",
        "Output. Municipal gross regional product estimates are produced by provincial statistical offices using a common methodology based on industry value added. They are available annually for all municipalities from 2006. We deflate them using provincial GDP deflators and divide by resident population to obtain output per capita. Employment comes from the Census on Establishments and covers all establishments with at least one employee.",
        "Sample. The 119 river municipalities are those through which one of the four main rivers or a tributary included in the master plan flows, according to official river maps. Municipalities that merged during the sample period are aggregated to their 2016 boundaries. Results are not sensitive to excluding the 12 municipalities in which project spending exceeded 10 percent of annual output.",
        "Cost per job-year. The employment specification yields the number of additional job-years per KRW 100 million of spending over two years; the cost per job-year is the inverse of this estimate multiplied by KRW 100 million. Confidence intervals for the cost per job-year are obtained by inverting the confidence interval for the employment coefficient, which yields an asymmetric interval.",
        "Inference. With 119 municipalities in the main sample, cluster-robust standard errors may be imprecise. We therefore also compute wild cluster bootstrap p-values with 999 replications, clustering by municipality. Bootstrap p-values for the output and employment multipliers are 0.002 and 0.004 respectively, very close to those implied by conventional clustered standard errors. Allowing for spatial correlation within 50 kilometres using Conley standard errors increases the standard error of the output multiplier from 0.41 to 0.46, without affecting significance.",
      ],
    },
  ],
};
