// Vol. 29, No. 4 (October 2024) — full text for an existing article (sample content).
import type { FulltextSpec } from "../paper-spec";

export const fulltext: FulltextSpec = {
  id: "2024-v29-i4-01",
  acknowledgments:
    "We thank seminar participants at the Bank of Korea, Hanyang University and the Asian Development Bank Institute, two anonymous referees and the handling editor for helpful comments. The views expressed in this article are those of the authors and do not necessarily reflect those of the Bank of Korea. Remaining errors are our own.",
  dataAvailability:
    "All series are publicly available: consumer price indices and their components from national statistical offices, nominal effective exchange rates from the Bank for International Settlements, policy rates and industrial production from the central banks and statistical offices of the five economies, and crude oil prices from the International Monetary Fund. Inflation expectations are from Consensus Economics and are available under licence. Code that reproduces all tables and figures is available from the corresponding author.",
  editorialNote:
    "Sang-Wook Park and Hyun-Jin Kim estimate a time-varying parameter VAR for five inflation-targeting Asian economies and find that exchange-rate pass-through to consumer prices fell from an average of 0.32 in the 2000s to 0.12 after 2020, most clearly for non-food, non-energy goods, consistent with greater monetary-policy credibility; pass-through remains about 2.3 times stronger during depreciations than appreciations, and 2.8 times stronger for energy-intensive goods.",
  refs: [
    /* 1 */ "Taylor, J. B. (2000). Low inflation, pass-through, and the pricing power of firms. European Economic Review, 44(7), 1389–1408.",
    /* 2 */ "Campa, J. M., & Goldberg, L. S. (2005). Exchange rate pass-through into import prices. Review of Economics and Statistics, 87(4), 679–690.",
    /* 3 */ "Gagnon, J. E., & Ihrig, J. (2004). Monetary policy and exchange rate pass-through. International Journal of Finance & Economics, 9(4), 315–338.",
    /* 4 */ "Choudhri, E. U., & Hakura, D. S. (2006). Exchange rate pass-through to domestic prices: Does the inflationary environment matter? Journal of International Money and Finance, 25(4), 614–639.",
    /* 5 */ "Primiceri, G. E. (2005). Time varying structural vector autoregressions and monetary policy. Review of Economic Studies, 72(3), 821–852.",
    /* 6 */ "Nakajima, J. (2011). Time-varying parameter VAR model with stochastic volatility: An overview of methodology and empirical applications. Monetary and Economic Studies, 29, 107–142.",
    /* 7 */ "Cogley, T., & Sargent, T. J. (2005). Drifts and volatilities: Monetary policies and outcomes in the post WWII US. Review of Economic Dynamics, 8(2), 262–302.",
    /* 8 */ "Gopinath, G., Itskhoki, O., & Rigobon, R. (2010). Currency choice and exchange rate pass-through. American Economic Review, 100(1), 304–336.",
    /* 9 */ "Gopinath, G., Boz, E., Casas, C., Díez, F. J., Gourinchas, P.-O., & Plagborg-Møller, M. (2020). Dominant currency paradigm. American Economic Review, 110(3), 677–719.",
    /* 10 */ "Burstein, A., & Gopinath, G. (2014). International prices and exchange rates. In G. Gopinath, E. Helpman, & K. Rogoff (Eds.), Handbook of international economics (Vol. 4, pp. 391–451). Amsterdam: Elsevier.",
    /* 11 */ "Forbes, K., Hjortsoe, I., & Nenova, T. (2018). The shocks matter: Improving our estimates of exchange rate pass-through. Journal of International Economics, 114, 255–275.",
    /* 12 */ "Ha, J., Stocker, M. M., & Yilmazkuday, H. (2020). Inflation and exchange rate pass-through. Journal of International Money and Finance, 105, 102187.",
    /* 13 */ "Carrière-Swallow, Y., Gruss, B., Magud, N. E., & Valencia, F. (2021). Monetary policy credibility and exchange rate pass-through. International Journal of Central Banking, 17(3), 61–94.",
    /* 14 */ "Devereux, M. B., & Engel, C. (2002). Exchange rate pass-through, exchange rate volatility, and exchange rate disconnect. Journal of Monetary Economics, 49(5), 913–940.",
    /* 15 */ "Corsetti, G., Dedola, L., & Leduc, S. (2008). High exchange-rate volatility and low pass-through. Journal of Monetary Economics, 55(6), 1113–1128.",
    /* 16 */ "Burstein, A., Eichenbaum, M., & Rebelo, S. (2005). Large devaluations and the real exchange rate. Journal of Political Economy, 113(4), 742–784.",
    /* 17 */ "Ito, T., & Sato, K. (2008). Exchange rate changes and inflation in post-crisis Asian economies: Vector autoregression analysis of the exchange rate pass-through. Journal of Money, Credit and Banking, 40(7), 1407–1438.",
    /* 18 */ "Calvo, G. A., & Reinhart, C. M. (2002). Fear of floating. Quarterly Journal of Economics, 117(2), 379–408.",
    /* 19 */ "Delatte, A.-L., & López-Villavicencio, A. (2012). Asymmetric exchange rate pass-through: Evidence from major countries. Journal of Macroeconomics, 34(3), 833–844.",
    /* 20 */ "Bussière, M. (2013). Exchange rate pass-through to trade prices: The role of nonlinearities and asymmetries. Oxford Bulletin of Economics and Statistics, 75(5), 731–758.",
    /* 21 */ "Shambaugh, J. (2008). A new look at pass-through. Journal of International Money and Finance, 27(4), 560–591.",
    /* 22 */ "Jašová, M., Moessner, R., & Takáts, E. (2019). Exchange rate pass-through: What has changed since the crisis? International Journal of Central Banking, 15(3), 27–58.",
    /* 23 */ "Rey, H. (2013). Dilemma not trilemma: The global financial cycle and monetary policy independence. In Global dimensions of unconventional monetary policy: Proceedings of the Jackson Hole economic policy symposium (pp. 285–333). Kansas City: Federal Reserve Bank of Kansas City.",
    /* 24 */ "Kilian, L. (2009). Not all oil price shocks are alike: Disentangling demand and supply shocks in the crude oil market. American Economic Review, 99(3), 1053–1069.",
    /* 25 */ "Del Negro, M., & Primiceri, G. E. (2015). Time varying structural vector autoregressions and monetary policy: A corrigendum. Review of Economic Studies, 82(4), 1342–1345.",
    /* 26 */ "Uhlig, H. (2005). What are the effects of monetary policy on output? Results from an agnostic identification procedure. Journal of Monetary Economics, 52(2), 381–419.",
    /* 27 */ { jer: "2023-v28-i1-01" },
    /* 28 */ { jer: "2022-v27-i4-01" },
  ],
  body: [
    {
      id: "introduction",
      heading: "1. Introduction",
      paragraphs: [
        "How strongly movements in the exchange rate feed into consumer prices is one of the most consequential parameters in open-economy monetary policy. When pass-through is high, a depreciation quickly becomes an inflation problem, central banks must lean against currency movements, and the exchange rate loses much of its value as a shock absorber. When pass-through is low, policy makers can allow the currency to adjust to external shocks while keeping domestic inflation close to target. For the emerging economies of Asia, which experienced the collapse of their currencies in 1997–98 and repeated episodes of capital-flow reversal since, the question has never been academic: the \"fear of floating\" documented by Calvo and Reinhart {18} was, in large part, a fear of pass-through.",
        "A widely discussed hypothesis, due to Taylor {1}, holds that pass-through is not a structural constant but depends on the monetary regime. In an environment of low and stable inflation, firms expect cost shocks — including those caused by the exchange rate — to be less persistent, and they therefore pass a smaller share of them on to prices. If this is right, the adoption and maturing of inflation targeting should itself lower pass-through, and the gains in credibility accumulated over two decades should be visible in the data. Cross-country evidence supports the hypothesis in broad terms [3][4][13], but most of it relies on rolling or split-sample regressions that are poorly suited to tracking gradual change, and the evidence for Asia, in particular, ends before the inflation surge of 2021–2023.",
        "This paper estimates exchange rate pass-through (ERPT) to consumer prices in five inflation-targeting Asian economies — India, Indonesia, Korea, the Philippines and Thailand — over 2000–2023 using a time-varying parameter vector autoregression with stochastic volatility (TVP-VAR) in the tradition of Primiceri {5} and Cogley and Sargent {7}. The model lets the transmission of exchange rate shocks change smoothly over time, so that we can measure pass-through at each date without imposing break points, and the stochastic volatility component prevents changes in shock size from being mistaken for changes in transmission. We estimate the model separately for headline inflation and for four components of the consumer price index (CPI): food, energy, non-food non-energy goods and services.",
        "Our first finding is that pass-through has declined materially since the global financial crisis. Averaged across the five economies, the 12-month pass-through elasticity — the cumulative response of the CPI to a 1 percent depreciation of the nominal effective exchange rate — was 0.32 in 2000–2009, fell to 0.19 in 2010–2019 and was 0.12 over 2020–2023. The decline is common to all five countries, though its level differs: pass-through in the post-2020 period ranges from 0.08 in Korea to 0.16 in Indonesia. Our second finding is that the decline is concentrated in non-food, non-energy components. Pass-through to core goods and services combined fell by about three-quarters, from 0.27 to 0.07, whereas pass-through to energy prices fell by only about a quarter and remains high at 0.38.",
        "Third, we ask why pass-through fell. Panel regressions of the estimated time-varying elasticities on country characteristics show that improvements in monetary policy credibility — measured by the sensitivity of long-horizon inflation expectations to inflation surprises — account for about 45 percent of the decline, and shifts in import composition towards intermediate inputs and away from final consumer goods for a further 25 percent. Lower average inflation explains about 15 percent. Fourth, pass-through is asymmetric. Over 2010–2023, a depreciation of a given size raises consumer prices by about 2.3 times as much as an appreciation lowers them, and the asymmetry is most pronounced for energy-intensive goods, where the ratio is 2.8. Pass-through also strengthens visibly during large depreciation episodes, as the time paths for 2013, 2015 and 2022 show.",
        "The paper contributes to three literatures: the monetary-regime view of pass-through [1][3][13], the time-varying VAR literature [5][6][7] and the literature on nonlinear and asymmetric pass-through [19][20]. For policy, the results imply that inflation-targeting central banks in Asia have earned greater room to let their currencies float, but that this room shrinks precisely when it is most needed — during sharp depreciations driven by global shocks — and is smallest for the energy component that matters most for households. Section 2 describes the institutional background, Section 3 reviews the literature and Section 4 sets out hypotheses. Sections 5 and 6 present the data and the empirical strategy, Section 7 the main results, Section 8 mechanisms and heterogeneity, and Section 9 robustness. Section 10 discusses policy implications and Section 11 concludes.",
      ],
    },
    {
      id: "background",
      heading: "2. Institutional Background",
      paragraphs: [
        "The five economies adopted inflation targeting at different dates and from different starting points. Korea introduced inflation targeting in April 1998, in the aftermath of the Asian financial crisis, as part of a revised Bank of Korea Act; the target has been 2 percent for CPI inflation since 2016. Thailand adopted a target for core inflation in May 2000, later switching to headline inflation, and the Philippines followed in January 2002 with a headline target that has been 3 percent, plus or minus one percentage point, for most of the period. Bank Indonesia formally adopted inflation targeting in July 2005 after several years of transition, and has reduced its target gradually from 5–6 percent to 3 percent. India is the late adopter: following the recommendations of the Urjit Patel Committee, the Reserve Bank of India agreed a monetary policy framework with the government in February 2015, and a statutory target of 4 percent, with a tolerance band of 2 to 6 percent, took effect in 2016.",
        "All five central banks operate managed floats in practice. They intervene in foreign exchange markets to smooth volatility, and Korea in particular has built large reserves and used macroprudential measures on banks' foreign currency liabilities, as earlier JER work on sterilisation operations documents {28}. None of the five, however, has targeted a particular level of the exchange rate since its adoption of inflation targeting, and the variability of the nominal effective exchange rate has been substantial. Episodes of sharp depreciation include the global financial crisis of 2008–09, the taper tantrum of 2013, the commodity and renminbi shock of 2015 and the dollar appreciation of 2022, when the Federal Reserve tightened rapidly and global energy prices spiked. The transmission of these global financial conditions to emerging Asia has itself been the subject of JER research {27}.",
        "Energy pricing institutions differ across the five economies and matter for pass-through. Indonesia regulated retail fuel prices heavily until a major subsidy reform in late 2014 and early 2015, and raised regulated prices again in September 2022. India deregulated petrol prices in 2010 and diesel prices in 2014, so that international oil prices and the rupee pass more directly to retail fuel prices in the later part of our sample. Thailand stabilises diesel prices through its Oil Fuel Fund, while Korea and the Philippines have largely market-determined fuel prices but adjust fuel taxes temporarily. Electricity and gas tariffs are administered in all five countries. These institutional differences imply that the energy component of the CPI does not respond to the exchange rate in a uniform way, and our empirical strategy treats energy separately for this reason.",
        "Table 1 summarises the frameworks and key macroeconomic characteristics. Average inflation fell markedly between the 2000s and the 2010s in Indonesia, India and the Philippines, and remained low in Korea and Thailand. All five economies experienced a rise in inflation in 2021–2023, peaking in 2022, but the rise was moderate by international standards. Imports of goods and services range from about 22 percent of GDP in India and Indonesia to more than 50 percent in Thailand. The weight of energy in the CPI is between 7 and 10 percent, and the weight of food between 14 percent in Korea and 46 percent in India.",
      ],
      table: {
        id: "table-1",
        caption: "Table 1. Inflation-targeting frameworks and macroeconomic characteristics of the five economies",
        columns: ["", "India", "Indonesia", "Korea", "Philippines", "Thailand"],
        rows: [
          ["IT adoption", "2016", "2005", "1998", "2002", "2000"],
          ["Current target (percent)", "4 ± 2", "3 ± 1", "2", "3 ± 1", "1–3"],
          ["CPI inflation, 2000–2009", "6.4", "8.4", "3.1", "5.0", "2.3"],
          ["CPI inflation, 2010–2019", "6.6", "4.7", "1.6", "3.1", "1.3"],
          ["CPI inflation, 2020–2023", "5.7", "2.8", "2.8", "3.7", "1.6"],
          ["Std. dev. of monthly NEER change", "1.3", "2.4", "1.9", "1.2", "1.1"],
          ["Imports, percent of GDP (2019)", "22", "19", "37", "38", "50"],
          ["CPI weight: food", "46", "33", "14", "35", "36"],
          ["CPI weight: energy", "7", "10", "7", "8", "10"],
        ],
        note: "Note: Inflation is the average annual percentage change in the headline CPI. NEER is the BIS broad nominal effective exchange rate; standard deviations in percent, 2000–2023. CPI weights in percent, latest available basket. For India the CPI series before 2012 is the CPI for industrial workers.",
      },
    },
    {
      id: "literature",
      heading: "3. Related Literature",
      paragraphs: [
        "Pass-through has been studied from two angles. Microeconomic and trade studies focus on the first stage, from exchange rates to import prices, and emphasise the currency of invoicing, the pricing power of exporters and the role of distribution costs. Campa and Goldberg {2} show that pass-through into import prices is incomplete and has declined in OECD countries, partly because the composition of imports has shifted towards goods with low pass-through. Gopinath, Itskhoki and Rigobon {8} establish that the currency in which goods are priced is closely related to pass-through, and the dominant currency paradigm of Gopinath et al. {9} implies that, for most emerging economies, the relevant exchange rate for import prices is the bilateral rate against the US dollar. Burstein and Gopinath {10} survey this literature, and Burstein, Eichenbaum and Rebelo {16} show that distribution costs and the substitution towards local goods explain why consumer prices respond little even to large devaluations.",
        "A second angle is macroeconomic and focuses on the second stage, from the exchange rate to consumer prices, and on the role of the monetary regime. Building on Taylor {1}, Gagnon and Ihrig {3} find that pass-through fell in countries that shifted towards inflation stabilisation, and Choudhri and Hakura {4} document a strong positive association between average inflation and pass-through across 71 countries. More recently, Carrière-Swallow et al. {13} use survey-based measures of the anchoring of inflation expectations and show that credibility, rather than the level of inflation, is the key determinant. Ha, Stocker and Yilmazkuday {12} find that pass-through is lower in countries with inflation targeting and flexible exchange rates, and Jašová, Moessner and Takáts {22} report that pass-through in emerging economies declined after the global financial crisis, mainly because of lower inflation.",
        "A third strand emphasises that pass-through depends on the shock that moves the exchange rate. Shambaugh {21} shows in a structural VAR that the response of prices to the exchange rate differs across shocks, and Forbes, Hjortsoe and Nenova {11} estimate shock-dependent pass-through for the United Kingdom, finding that exchange rate movements driven by domestic monetary policy pass through far more strongly than those driven by demand shocks. Devereux and Engel {14} and Corsetti, Dedola and Leduc {15} develop models in which local-currency pricing and distribution margins jointly explain low pass-through and high exchange rate volatility. Finally, a literature on nonlinearity finds that pass-through is larger for depreciations and for large changes [19][20], consistent with menu costs and downward price rigidity.",
        "For Asia, Ito and Sato {17} use VARs to study pass-through after the 1997–98 crisis and find that pass-through to consumer prices was high only in Indonesia, where it contributed to the inflationary spiral of 1998. We extend this work by tracking pass-through continuously over more than two decades, by distinguishing CPI components and by documenting both the decline and its asymmetry. Methodologically, we follow Primiceri {5}, with the correction of Del Negro and Primiceri {25}, and the implementation of Nakajima {6}.",
      ],
    },
    {
      id: "framework",
      heading: "4. Conceptual Framework and Hypotheses",
      paragraphs: [
        "Consider a domestic retailer that sets the consumer price of a good as a markup over a marginal cost composed of imported inputs, priced in foreign currency, and domestic inputs such as labour and distribution services. With staggered price setting, the retailer chooses a reset price that depends on the expected path of marginal cost over the period for which the price will be fixed. A depreciation raises the current cost of imported inputs; how much of this is passed on depends on how persistent the retailer expects the cost increase to be, on the share of imported inputs in costs and on how far the domestic components of cost are expected to rise in response.",
        "This simple structure yields three channels through which the monetary regime and the economic structure affect pass-through. First, under a credible inflation target, firms expect the central bank to offset second-round effects of a depreciation on wages and domestic costs, and they expect the exchange rate shock itself to be partly reversed; both expectations lower the reset price response [1][13]. Second, the share of imported content in consumption matters. If imports shift from finished consumer goods towards intermediate inputs that are combined with domestic value added, the exchange rate affects a smaller share of final costs and pass-through falls even if import prices respond fully [2]. Third, where inflation is high and variable, firms reset prices more often, which raises measured pass-through over any given horizon [4].",
        "The framework also predicts heterogeneity across components. Energy products have a high and directly imported cost share and are traded in US dollars, so pass-through to energy should be high and relatively insensitive to credibility — unless regulated prices intervene. Food has a moderately high imported content and flexible prices. Core goods and especially services have large domestic cost shares, so expectations of second-round effects, which are what credibility affects, are the dominant part of their response. Finally, if prices are more rigid downwards than upwards, or if firms treat depreciations as more persistent than appreciations, pass-through should be asymmetric, and the asymmetry should be largest where the imported cost share is largest.",
        "We therefore test four hypotheses. H1: pass-through to consumer prices declined over 2000–2023 in all five economies. H2: the decline is largest for non-food, non-energy components. H3: the decline is associated with improvements in monetary policy credibility and with a shift in import composition towards intermediate inputs. H4: pass-through is larger for depreciations than for appreciations, especially for energy-intensive goods.",
      ],
    },
    {
      id: "data",
      heading: "5. Data",
      paragraphs: [
        "Our sample covers monthly data from January 2000 to December 2023 for each of the five economies, a total of 288 monthly observations per country. Appendix A describes the sources and transformations in detail.",
      ],
      subsections: [
        {
          id: "data-prices",
          heading: "5.1 Prices and Exchange Rates",
          paragraphs: [
            "Consumer prices are measured by the headline CPI and by four components: food (including non-alcoholic beverages), energy (household fuels, electricity, gas and transport fuels), non-food non-energy goods and services. We construct consistent component series by aggregating the most disaggregated published indices with their basket weights, linking across base-year changes. All price series are seasonally adjusted with X-13ARIMA-SEATS. For India we use the CPI for industrial workers until December 2011 and the all-India CPI thereafter, linked at the overlap.",
            "We measure the exchange rate by the BIS broad nominal effective exchange rate (NEER), expressed so that an increase is a depreciation. The NEER is the relevant measure for overall import costs, but given the dominant role of the US dollar in Asian trade invoicing [9], we also report results with the bilateral rate against the dollar. We also construct a measure of energy-intensive goods: CPI items whose direct and indirect energy cost share, computed from the most recent national input–output tables, exceeds 10 percent. These include transport fuels, household energy, transport services, and a set of processed foods and manufactured goods. Energy-intensive goods account for between 17 and 24 percent of CPI baskets across the five countries.",
          ],
        },
        {
          id: "data-macro",
          heading: "5.2 Macroeconomic Controls and Credibility",
          paragraphs: [
            "The VAR includes four further variables: the world price of crude oil in US dollars (the average of Brent, Dubai and West Texas Intermediate), domestic industrial production, the short-term policy rate (or interbank rate where the policy rate is not available for the full period) and, in a robustness exercise, a measure of global financial conditions. Industrial production is detrended with a one-sided Hodrick–Prescott filter to obtain a real-time output gap.",
            "To test the credibility channel we need a time-varying measure of the anchoring of inflation expectations. Following Carrière-Swallow et al. {13}, we use Consensus Economics surveys of professional forecasters and estimate, for each country and in rolling five-year windows, the sensitivity of inflation expectations five years ahead to surprises in realised inflation. We multiply this sensitivity by −1 and standardise it across the panel, so that a higher value of the credibility index indicates better-anchored expectations. We also compute the share of intermediate goods in total imports from UN Comtrade data classified by Broad Economic Categories, and the share of fuels in imports.",
            "Table 2 reports summary statistics for the main variables across the three subperiods. Monthly CPI inflation fell from an average of 0.42 percent in the 2000s to 0.29 percent in the 2010s, before rising slightly in 2020–2023. The credibility index improved by more than one standard deviation between the 2000s and the 2020s, the sensitivity of long-term expectations to surprises falling from 0.21 to 0.06. The share of intermediate inputs in imports rose from 58 to 66 percent, while the share of consumer goods remained broadly stable at around 9 percent.",
          ],
          table: {
            id: "table-2",
            caption: "Table 2. Summary statistics by subperiod, averages across the five economies",
            columns: ["Variable", "2000–2009", "2010–2019", "2020–2023"],
            rows: [
              ["Monthly CPI inflation (percent)", "0.42", "0.29", "0.31"],
              ["Monthly core inflation (percent)", "0.33", "0.24", "0.22"],
              ["Monthly NEER change, absolute (percent)", "1.41", "1.18", "1.25"],
              ["Months with NEER depreciation > 2 percent (share)", "0.11", "0.07", "0.10"],
              ["Oil price change, absolute (percent)", "6.9", "5.8", "8.1"],
              ["Sensitivity of 5-year expectations to surprises", "0.21", "0.11", "0.06"],
              ["Credibility index (standardised)", "−0.74", "0.18", "0.61"],
              ["Intermediate goods, share of imports (percent)", "58", "63", "66"],
              ["Consumer goods, share of imports (percent)", "9", "9", "10"],
              ["Fuels, share of imports (percent)", "17", "18", "19"],
            ],
            note: "Note: Simple averages across India, Indonesia, Korea, the Philippines and Thailand. Sensitivity of expectations is the coefficient of a regression of the change in five-year-ahead Consensus inflation forecasts on the inflation surprise, estimated in rolling five-year windows. The credibility index is −1 times this sensitivity, standardised across the panel.",
          },
        },
      ],
    },
    {
      id: "strategy",
      heading: "6. Empirical Strategy",
      paragraphs: [
        "Our approach has two steps. We first estimate a TVP-VAR for each country and each price measure and compute time-varying pass-through elasticities. We then relate the estimated elasticities to country characteristics and estimate asymmetric responses in a pooled panel.",
      ],
      subsections: [
        {
          id: "strategy-tvpvar",
          heading: "6.1 Time-Varying Parameter VAR",
          paragraphs: [
            "For each country we estimate a VAR with two lags in five variables: the monthly change in the log oil price, the output gap, the policy rate, the monthly change in the log NEER and the monthly change in the log price index under study. The coefficients follow random walks, and the reduced-form covariance matrix is decomposed into a lower-triangular matrix of time-varying simultaneous relations and a diagonal matrix of stochastic volatilities, whose logs follow random walks, as in Primiceri {5}. We estimate the model by Markov chain Monte Carlo with the algorithm of Nakajima {6}, which incorporates the correction of Del Negro and Primiceri {25}, using 50,000 draws after a burn-in of 10,000. We do not use a training sample, because the pre-2000 period is dominated by the Asian financial crisis; instead we use weakly informative priors centred on full-sample constant-parameter estimates, with prior scales for the time variation of coefficients following Nakajima {6}. Convergence diagnostics are satisfactory, with inefficiency factors below 80 for all parameters.",
            "Exchange rate shocks are identified recursively, with the variables ordered as listed: oil prices respond to no domestic variable within the month; the exchange rate responds within the month to oil, activity and policy, but prices respond to the exchange rate only with a delay within the month. This is the standard ordering in the pass-through literature [17][22]. Because the ordering implies that the exchange rate shock is a residual that may combine several underlying disturbances, we also report results using sign restrictions in the spirit of Uhlig {26} and shock-dependent pass-through following Forbes, Hjortsoe and Nenova {11}.",
          ],
        },
        {
          id: "strategy-erpt",
          heading: "6.2 Measuring Pass-Through",
          paragraphs: [
            "At each date t we compute the impulse responses of the NEER and of the price index to an exchange rate shock using the coefficients prevailing at t. The pass-through elasticity at horizon h is the ratio of the cumulative price response to the cumulative NEER response at h. Our baseline horizon is 12 months; we report 24 months as a robustness check. Normalising by the exchange rate response, rather than by the size of the shock, ensures that changes in the persistence of exchange rate shocks are not mistaken for changes in pass-through. For each draw from the posterior we compute the full time path of elasticities, so that the reported posterior medians and credible intervals account for parameter uncertainty. Averages over subperiods and across countries are computed draw by draw.",
          ],
        },
        {
          id: "strategy-panel",
          heading: "6.3 Determinants and Asymmetry",
          paragraphs: [
            "To test H3 we regress the posterior median annual pass-through elasticity for country i in year t on the credibility index, average inflation, the intermediate-goods share of imports, the share of fuels in imports and the import-to-GDP ratio, with country fixed effects. Because the dependent variable is estimated, we weight observations by the inverse of the posterior variance and bootstrap standard errors across MCMC draws. We use the coefficients to decompose the decline in average pass-through between 2000–2009 and 2020–2023 into the contributions of each determinant.",
            "To test H4 we estimate pooled local projections over 2010–2023 in which the cumulative change in the log price index over 12 months is regressed on the identified exchange rate shocks, split into positive (depreciation) and negative (appreciation) values, with lagged controls and country fixed effects. Pass-through elasticities for depreciations and appreciations are obtained by normalising each response by the corresponding cumulative NEER response. We define depreciation episodes as periods in which the NEER depreciates by more than 5 percent over three months.",
          ],
        },
      ],
    },
    {
      id: "results",
      heading: "7. Results",
      paragraphs: [
        "We present the decline in headline pass-through first, then the decomposition by CPI component, and finally the evidence on asymmetry.",
      ],
      subsections: [
        {
          id: "results-headline",
          heading: "7.1 The Decline in Headline Pass-Through",
          paragraphs: [
            "Figure 1 plots the posterior median of the 12-month headline pass-through elasticity, averaged across the five economies, together with the 68 percent credible interval. Pass-through was stable at around 0.30–0.36 through most of the 2000s, began to fall after the global financial crisis and declined steadily through the 2010s, reaching 0.16 by 2019. It fell further to 0.10 in 2020 and 2021, rose to 0.15 in 2022 when currencies depreciated sharply against the dollar and energy prices spiked, and eased to 0.13 in 2023. Averaged over subperiods, pass-through was 0.32 in 2000–2009, 0.19 in 2010–2019 and 0.12 in 2020–2023. The credible intervals for the 2000s and the post-2020 period do not overlap.",
            "Table 3 reports the subperiod averages by country. The decline is common to all five economies, supporting H1, though the level of pass-through differs. Indonesia had the highest pass-through in the 2000s, at 0.41, reflecting its history of high inflation and its later adoption of inflation targeting; its pass-through fell to 0.16 in 2020–2023. Korea, which adopted inflation targeting earliest and has the lowest inflation, had the lowest pass-through throughout, falling from 0.24 to 0.08. India's pass-through fell from 0.33 to 0.12, with most of the decline occurring after 2014, as the new monetary framework was put in place. In proportional terms the decline ranges from 60 percent in Indonesia to 67 percent in Korea, and averages 63 percent across the five economies.",
            "These elasticities are in line with existing estimates for emerging economies. Jašová, Moessner and Takáts {22} report a decline in emerging-market pass-through after 2008 of a similar magnitude, and Ha, Stocker and Yilmazkuday {12} find average 12-month pass-through of 0.1–0.2 among inflation-targeting emerging economies in the 2010s. Our post-2020 estimates are at the lower end of that range, despite the turbulence of the period, which suggests that the pandemic and energy shocks did not reverse the earlier gains.",
          ],
          figures: [
            {
              id: "figure-1",
              caption: "Figure 1. Time-varying 12-month exchange rate pass-through to headline CPI, average of five economies, 2000–2023",
              kind: "line",
              xLabels: ["2000", "2001", "2002", "2003", "2004", "2005", "2006", "2007", "2008", "2009", "2010", "2011", "2012", "2013", "2014", "2015", "2016", "2017", "2018", "2019", "2020", "2021", "2022", "2023"],
              yLabel: "Pass-through elasticity",
              series: [
                {
                  name: "Posterior median",
                  values: [0.36, 0.35, 0.34, 0.33, 0.32, 0.32, 0.31, 0.3, 0.31, 0.26, 0.23, 0.22, 0.2, 0.21, 0.19, 0.19, 0.17, 0.16, 0.17, 0.16, 0.1, 0.1, 0.15, 0.13],
                  lower: [0.27, 0.27, 0.26, 0.25, 0.25, 0.25, 0.24, 0.23, 0.24, 0.2, 0.17, 0.16, 0.15, 0.16, 0.14, 0.14, 0.12, 0.11, 0.12, 0.11, 0.06, 0.06, 0.1, 0.08],
                  upper: [0.45, 0.43, 0.42, 0.41, 0.39, 0.39, 0.38, 0.37, 0.38, 0.32, 0.29, 0.28, 0.25, 0.26, 0.24, 0.24, 0.22, 0.21, 0.22, 0.21, 0.14, 0.14, 0.2, 0.18],
                },
              ],
              marker: 8,
              note: "Note: Annual averages of monthly posterior medians of the 12-month pass-through elasticity, averaged across India, Indonesia, Korea, the Philippines and Thailand. Bands show 68 percent credible intervals. The dashed line marks the global financial crisis (2008).",
            },
          ],
          tables: [
            {
              id: "table-3",
              caption: "Table 3. Twelve-month exchange rate pass-through to headline CPI by country and subperiod",
              columns: ["Country", "2000–2009", "2010–2019", "2020–2023", "Change, 2000s to 2020–23"],
              rows: [
                ["India", "0.33 [0.24, 0.42]", "0.20 [0.14, 0.26]", "0.12 [0.07, 0.17]", "−0.21"],
                ["Indonesia", "0.41 [0.31, 0.51]", "0.25 [0.18, 0.32]", "0.16 [0.10, 0.22]", "−0.25"],
                ["Korea", "0.24 [0.17, 0.31]", "0.13 [0.08, 0.18]", "0.08 [0.04, 0.12]", "−0.16"],
                ["Philippines", "0.35 [0.26, 0.44]", "0.21 [0.15, 0.27]", "0.14 [0.09, 0.19]", "−0.21"],
                ["Thailand", "0.27 [0.19, 0.35]", "0.16 [0.11, 0.21]", "0.10 [0.06, 0.14]", "−0.17"],
                ["Average", "0.32 [0.25, 0.39]", "0.19 [0.14, 0.24]", "0.12 [0.08, 0.16]", "−0.20"],
              ],
              note: "Note: Posterior medians of the cumulative CPI response divided by the cumulative NEER response 12 months after an exchange rate shock, averaged over the months of each subperiod. 68 percent credible intervals in brackets. Averages are computed draw by draw across the five countries.",
            },
          ],
        },
        {
          id: "results-components",
          heading: "7.2 Pass-Through by CPI Component",
          paragraphs: [
            "Table 4 reports pass-through by CPI component, averaged across the five economies. In the 2000s, pass-through was highest for energy (0.52), followed by core goods (0.38), food (0.28) and services (0.12); pass-through to the non-food non-energy aggregate was 0.27. By 2020–2023, energy pass-through had fallen to 0.38, a decline of 27 percent, and food pass-through to 0.17, a decline of 39 percent. The decline for core goods and services was much larger: pass-through to core goods fell to 0.11 and pass-through to services to 0.04, so that pass-through to the non-food non-energy aggregate fell from 0.27 to 0.07, a decline of 74 percent. This pattern supports H2.",
            "Figure 2 shows the pattern graphically. The contrast between energy and core components is striking. Energy prices are dominated by internationally traded, dollar-priced commodities whose domestic prices move almost mechanically with the exchange rate, except where they are regulated. Core goods and services, by contrast, contain a large domestic cost component, and the response of their prices to the exchange rate depends heavily on expected second-round effects on wages and domestic costs. That pass-through fell most where expectations matter most is the first piece of evidence that credibility, rather than a change in the technology of trade, drives the decline.",
            "Two qualifications apply. First, the decline in energy pass-through is partly due to regulation: in Indonesia and Thailand, administered prices and stabilisation funds absorbed part of the exchange rate movements of 2022. Excluding regulated items, energy pass-through in 2020–2023 is 0.44 rather than 0.38. Second, the composition of the core basket has shifted towards services, whose pass-through is low; holding component weights fixed at their 2000s values, the decline in core pass-through is 0.19 rather than 0.20, so compositional change within the basket explains little.",
          ],
          tables: [
            {
              id: "table-4",
              caption: "Table 4. Twelve-month exchange rate pass-through by CPI component, average of five economies",
              columns: ["Component", "2000–2009", "2010–2019", "2020–2023", "Proportional change (percent)"],
              rows: [
                ["Headline", "0.32", "0.19", "0.12", "−63"],
                ["Food", "0.28", "0.21", "0.17", "−39"],
                ["Energy", "0.52", "0.43", "0.38", "−27"],
                ["Non-food non-energy", "0.27", "0.14", "0.07", "−74"],
                ["  Core goods", "0.38", "0.21", "0.11", "−71"],
                ["  Services", "0.12", "0.07", "0.04", "−67"],
                ["Energy-intensive goods", "0.46", "0.34", "0.28", "−39"],
              ],
              note: "Note: Posterior medians of 12-month pass-through elasticities from component-specific TVP-VARs, averaged across months of each subperiod and across the five economies. Energy-intensive goods are CPI items with a direct and indirect energy cost share above 10 percent. All changes between 2000–2009 and 2020–2023 are significant in the sense that 68 percent credible intervals do not overlap.",
            },
          ],
        },
        {
          id: "results-asymmetry",
          heading: "7.3 Asymmetry During Depreciation Episodes",
          paragraphs: [
            "Figure 1 already suggests that pass-through rises when currencies weaken sharply: the series increases in 2013, 2015 and 2022, three years of large depreciations against the dollar. Table 5 formalises this observation using the local projections described in Section 6.3, pooled over 2010–2023. For headline CPI, the pass-through elasticity is 0.18 following depreciations and 0.08 following appreciations, a ratio of 2.3; the difference is statistically significant at the 1 percent level. For energy-intensive goods, the corresponding elasticities are 0.44 and 0.16, a ratio of 2.8. The asymmetry is also large for food (0.24 versus 0.11) and energy (0.53 versus 0.22) but small for services (0.05 versus 0.03), consistent with H4 and with the prediction that asymmetry is largest where the imported cost share is largest.",
            "Asymmetry is amplified during depreciation episodes, defined as a NEER depreciation of more than 5 percent over three months. Restricting attention to shocks occurring during such episodes, headline pass-through is 0.24 and pass-through to energy-intensive goods is 0.57. The size-dependence is consistent with menu-cost models in which only large cost changes trigger price adjustment, and with evidence for advanced economies [19][20]. It is also consistent with Burstein, Eichenbaum and Rebelo {16}, in that even in large depreciations consumer price pass-through remains far below one, because distribution costs and domestic substitutes absorb much of the shock.",
          ],
          tables: [
            {
              id: "table-5",
              caption: "Table 5. Asymmetric pass-through following depreciations and appreciations, 2010–2023",
              columns: ["Price index", "Depreciation", "Appreciation", "Ratio", "p-value (equality)", "Depreciation episodes"],
              rows: [
                ["Headline", "0.18*** (0.03)", "0.08*** (0.02)", "2.3", "0.004", "0.24*** (0.05)"],
                ["Food", "0.24*** (0.04)", "0.11*** (0.03)", "2.2", "0.008", "0.31*** (0.06)"],
                ["Energy", "0.53*** (0.07)", "0.22*** (0.06)", "2.4", "0.001", "0.66*** (0.10)"],
                ["Core goods", "0.15*** (0.03)", "0.07*** (0.02)", "2.1", "0.019", "0.20*** (0.05)"],
                ["Services", "0.05** (0.02)", "0.03* (0.02)", "1.7", "0.384", "0.07** (0.03)"],
                ["Energy-intensive goods", "0.44*** (0.06)", "0.16*** (0.04)", "2.8", "<0.001", "0.57*** (0.09)"],
              ],
              note: "Note: Pooled local projections over 2010–2023 for the five economies, with country fixed effects and 12 lags of the controls. Entries are 12-month cumulative price responses divided by the cumulative NEER response, separately for positive (depreciation) and negative (appreciation) exchange rate shocks. Depreciation episodes are months in which the NEER depreciated by more than 5 percent over three months. Driscoll–Kraay standard errors in parentheses. *** p < 0.01, ** p < 0.05, * p < 0.1.",
            },
          ],
        },
      ],
    },
    {
      id: "mechanisms",
      heading: "8. Mechanisms and Heterogeneity",
      paragraphs: [
        "Why did pass-through fall? Table 6 reports panel regressions of the annual headline pass-through elasticity on its potential determinants. In column 1, the credibility index alone has a coefficient of −0.071: a one-standard-deviation improvement in the anchoring of long-term expectations lowers pass-through by 0.07. Column 2 adds average inflation, which enters positively, as in Choudhri and Hakura {4}, but its coefficient falls by more than half once credibility is controlled for, consistent with Carrière-Swallow et al. {13}. Column 3 adds the import composition variables: a higher share of intermediate goods in imports lowers pass-through, and a higher share of fuels raises it. In the full specification of column 4, the credibility coefficient is −0.065, the coefficient on average inflation 0.008 and the coefficient on the intermediate-goods share −0.006 per percentage point.",
        "Using the column 4 coefficients, we decompose the 0.20 decline in average pass-through between 2000–2009 and 2020–2023. The improvement in credibility, of 1.35 standard deviations, accounts for 0.09, or about 45 percent of the decline. The shift in import composition — chiefly the 8 percentage point rise in the intermediate-goods share — accounts for 0.05, or 25 percent. The fall in average inflation accounts for 0.03, or 15 percent, and the remaining 15 percent is unexplained. The shares are similar when we decompose the decline in core pass-through, except that credibility accounts for a larger share (52 percent); for energy pass-through, credibility accounts for only 18 percent of a much smaller decline, and changes in regulation account for much of the remainder.",
        "The credibility channel also appears across countries. Indonesia and India, where the credibility index improved most, experienced the largest absolute declines in pass-through, while Korea, which entered the sample with well-anchored expectations, experienced the smallest. Within India, the timing is telling: pass-through declined little between 2000 and 2014 and fell by about 0.08 in the five years after the adoption of the new framework. These patterns are hard to reconcile with an explanation based solely on global factors such as the rise of global value chains, which affected all five economies at broadly similar times.",
        "We also examine whether the decline reflects changes in invoicing. The share of imports invoiced in US dollars is very high, at 80 to 90 percent, in all five economies and changed little over the sample. Because dollar invoicing makes import prices sensitive to the bilateral dollar rate rather than to the NEER [9], we re-estimate the model with the bilateral dollar exchange rate. Pass-through is somewhat higher with this measure, falling from 0.35 in 2000–2009 to 0.14 in 2020–2023, but the decline is proportionally similar. Changes in invoicing therefore cannot explain the decline.",
      ],
      table: {
        id: "table-6",
        caption: "Table 6. Determinants of time-varying pass-through to headline CPI, panel estimates",
        columns: ["", "(1)", "(2)", "(3)", "(4)"],
        rows: [
          ["Credibility index", "−0.071*** (0.014)", "−0.066*** (0.015)", "", "−0.065*** (0.015)"],
          ["Average inflation (pp)", "", "0.009** (0.004)", "0.019*** (0.005)", "0.008** (0.004)"],
          ["Intermediate goods share of imports (pp)", "", "", "−0.008*** (0.002)", "−0.006*** (0.002)"],
          ["Fuel share of imports (pp)", "", "", "0.005** (0.002)", "0.004* (0.002)"],
          ["Imports / GDP (pp)", "", "", "0.002 (0.002)", "0.002 (0.002)"],
          ["Country fixed effects", "Yes", "Yes", "Yes", "Yes"],
          ["Observations", "120", "120", "120", "120"],
          ["Within R²", "0.58", "0.62", "0.49", "0.71"],
        ],
        note: "Note: Dependent variable is the annual average posterior median 12-month pass-through elasticity to headline CPI. Country-years 2000–2023 for five economies. Weighted least squares with inverse posterior variance weights. Standard errors bootstrapped over MCMC draws and clustered by country-year in parentheses. *** p < 0.01, ** p < 0.05, * p < 0.1.",
      },
      figures: [
        {
          id: "figure-2",
          caption: "Figure 2. Twelve-month pass-through by CPI component, 2000–2009 and 2020–2023",
          kind: "bar",
          xLabels: ["Headline", "Food", "Energy", "Core goods", "Services", "Energy-intensive"],
          yLabel: "Pass-through elasticity",
          series: [
            { name: "2000–2009", values: [0.32, 0.28, 0.52, 0.38, 0.12, 0.46] },
            { name: "2020–2023", values: [0.12, 0.17, 0.38, 0.11, 0.04, 0.28] },
          ],
          note: "Note: Posterior medians from Table 4, averaged across the five economies.",
        },
      ],
    },
    {
      id: "robustness",
      heading: "9. Robustness",
      paragraphs: [
        "We subject the main results to several robustness checks. First, we replace recursive identification with sign restrictions in the spirit of Uhlig {26}: an exchange rate shock is a depreciation that is accompanied by a rise in the policy rate or no change in it, and by a non-negative response of the output gap, to distinguish it from domestic monetary easing. Average pass-through is then 0.30 in 2000–2009 and 0.13 in 2020–2023. Second, ordering the exchange rate after prices, so that prices cannot respond within the month, lowers the estimates slightly but leaves the decline unchanged (0.29 to 0.11).",
        "Third, we follow Forbes, Hjortsoe and Nenova {11} and identify several shocks — global, domestic demand, domestic monetary and exchange rate — with a mixture of sign and zero restrictions, and compute the pass-through implied by the historical mix of shocks. Average pass-through is 0.29 in the 2000s and 0.11 in 2020–2023. The shock composition has, if anything, become slightly more favourable to high pass-through in the post-2020 period, because global shocks to oil prices and the dollar were prominent; the decline is therefore not due to a more benign mix of shocks. We also add the oil supply shocks of Kilian {24} as exogenous variables, with very similar results.",
        "Fourth, using a 24-month horizon raises pass-through in all periods, to 0.36 in the 2000s and 0.14 in 2020–2023. Fifth, estimating the model at quarterly frequency with four lags gives 0.31 and 0.12. Sixth, the results do not depend on the inclusion of India, whose inflation target was adopted only in 2016: excluding India, average pass-through is 0.32 in 2000–2009 and 0.12 in 2020–2023. Seventh, excluding the pandemic months of March to December 2020, when price measurement was disrupted, raises post-2020 pass-through to 0.13. Finally, doubling or halving the prior scale of the time variation in coefficients changes the post-2020 estimate by no more than 0.02.",
        "Throughout these checks, the asymmetry results are also stable: the ratio of depreciation to appreciation pass-through for headline CPI ranges between 2.0 and 2.6, and for energy-intensive goods between 2.4 and 3.1. We conclude that both the decline in pass-through and its asymmetry are robust features of the data rather than artefacts of a particular identification scheme or specification.",
      ],
    },
    {
      id: "discussion",
      heading: "10. Discussion and Policy Implications",
      paragraphs: [
        "The decline in pass-through we document is good news for inflation-targeting central banks in Asia. A pass-through elasticity of 0.12 implies that a 10 percent depreciation raises the price level by about 1.2 percent over a year, compared with about 3.2 percent in the 2000s. Central banks can therefore allow the exchange rate to absorb a larger share of external shocks without endangering their inflation targets, reducing the need for costly intervention or for interest rate responses that would amplify the domestic effects of global financial conditions [23]. Our decomposition attributes a large part of this gain to credibility, which implies that it is the product of policy and can be lost if credibility is eroded.",
        "Three caveats temper this message. First, pass-through remains high for energy and food, which together account for between a quarter and a half of CPI baskets in the five economies and an even larger share of the spending of poorer households. A depreciation that coincides with a global energy shock, as in 2022, can therefore produce a sizeable increase in headline inflation and in the cost of living even when core inflation is well anchored. Second, pass-through is asymmetric: a central bank that benefits from low average pass-through in tranquil times may face substantially higher pass-through when its currency is under pressure. Third, the time-varying estimates show that pass-through rises temporarily during depreciation episodes, so that the estimate relevant for policy is conditional on the state of the economy.",
        "These findings suggest that inflation-targeting frameworks in Asia should treat exchange rate movements asymmetrically in their communication and reaction functions. Depreciations driven by global shocks call for attention to energy and food prices and to the risk that higher headline inflation affects expectations, while appreciations can largely be accommodated. They also suggest that energy price regulation, while reducing measured pass-through, shifts the burden of exchange rate shocks onto public budgets or state-owned enterprises, a trade-off that deserves explicit evaluation. Finally, because credibility is the main source of the decline, central banks should guard against the perception that their tolerance of currency weakness signals a weaker commitment to the inflation target.",
      ],
    },
    {
      id: "conclusion",
      heading: "11. Conclusion",
      paragraphs: [
        "Using a time-varying parameter VAR for five inflation-targeting Asian economies over 2000–2023, we find that exchange rate pass-through to consumer prices declined from an average of 0.32 in the 2000s to 0.19 in the 2010s and 0.12 in the post-2020 period. The decline is common to all five economies and is concentrated in non-food, non-energy components, where pass-through fell by about three-quarters, consistent with the view that greater monetary policy credibility reduces the expected persistence of cost shocks and the second-round effects that drive core inflation. Panel evidence attributes about 45 percent of the decline to improved credibility and 25 percent to shifts in import composition towards intermediate inputs.",
        "Pass-through is, however, asymmetric: it is about 2.3 times larger for depreciations than for appreciations and 2.8 times larger for energy-intensive goods, and it rises during sharp depreciation episodes. The flexibility gained through credibility is thus largest in normal times and smallest when currencies come under pressure. Future work could exploit item-level price data to study how firms' pricing strategies changed with the monetary regime, and could examine whether the large energy and currency shocks of 2022 have left lasting traces on firms' expectations of pass-through.",
      ],
    },
    {
      id: "appendix-a",
      heading: "Appendix A. Data Sources and Estimation Details",
      paragraphs: [
        "Consumer price indices and their components are from the national statistical offices: the Ministry of Statistics and Programme Implementation and the Labour Bureau (India), Badan Pusat Statistik (Indonesia), Statistics Korea, the Philippine Statistics Authority and the Ministry of Commerce (Thailand). Energy comprises household electricity, gas and other fuels and fuels for personal transport; where these are not published separately in early years, we use the closest available aggregates. Nominal effective exchange rates are the BIS broad indices (monthly averages), and bilateral dollar rates are from central bank sources. Policy rates are the official policy rates, replaced by overnight interbank rates for Indonesia before 2005 and India before 2001. Oil prices are the IMF average petroleum spot price.",
        "The TVP-VAR is estimated with two lags, selected by the deviance information criterion of the constant-parameter model. Priors for the initial states of coefficients, simultaneous relations and log volatilities are normal, centred on full-sample least-squares estimates with variances equal to ten times their least-squares variances. Priors for the diagonal elements of the covariance matrices of state innovations are inverse gamma, with means of 0.0001 for coefficients and 0.01 for simultaneous relations and log volatilities, following Nakajima {6}. We retain every tenth draw after burn-in for impulse responses. Pass-through elasticities for components are computed from separate five-variable systems in which the component price index replaces headline CPI. Code and posterior summaries are available from the corresponding author.",
      ],
    },
  ],
};
