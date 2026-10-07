// Vol. 28, No. 1 (January 2023) — full text for an existing article (sample content).
import type { FulltextSpec } from "../paper-spec";

export const fulltext: FulltextSpec = {
  id: "2023-v28-i1-01",
  acknowledgments:
    "We thank seminar participants at Hanyang University and the Bank of Korea, two anonymous referees and the handling Associate Editor for helpful comments. Any remaining errors are our own.",
  dataAvailability:
    "Balance-of-payments flows are from the IMF Balance of Payments and International Investment Position statistics, the VIX from the Chicago Board Options Exchange and exchange-rate regime classifications from Ilzetzki, Reinhart and Rogoff. Portfolio fund-flow data are proprietary and cannot be redistributed. Code and all non-proprietary constructed data are available from the corresponding author.",
  editorialNote:
    "Hyun-Jin Kim and Sungho Park find that a one-standard-deviation rise in the VIX reduces capital inflows to emerging Asia by 2.8 percent on impact, and that the effect is about 40 percent smaller under floating than under managed exchange rates, consistent with exchange-rate flexibility acting as an automatic stabiliser.",
  refs: [
    /* 1 */ "Rey, H. (2013). Dilemma not trilemma: The global financial cycle and monetary policy independence. In Global Dimensions of Unconventional Monetary Policy: Proceedings of the Jackson Hole Economic Policy Symposium (pp. 285–333). Kansas City: Federal Reserve Bank of Kansas City.",
    /* 2 */ "Miranda-Agrippino, S., & Rey, H. (2020). U.S. monetary policy and the global financial cycle. Review of Economic Studies, 87(6), 2754–2776.",
    /* 3 */ "Obstfeld, M., Ostry, J. D., & Qureshi, M. S. (2019). A tie that binds: Revisiting the trilemma in emerging market economies. Review of Economics and Statistics, 101(2), 279–293.",
    /* 4 */ "Forbes, K. J., & Warnock, F. E. (2012). Capital flow waves: Surges, stops, flight, and retrenchment. Journal of International Economics, 88(2), 235–251.",
    /* 5 */ "Calvo, G. A., Leiderman, L., & Reinhart, C. M. (1993). Capital inflows and real exchange rate appreciation in Latin America: The role of external factors. IMF Staff Papers, 40(1), 108–151.",
    /* 6 */ "Fratzscher, M. (2012). Capital flows, push versus pull factors and the global financial crisis. Journal of International Economics, 88(2), 341–356.",
    /* 7 */ "Bruno, V., & Shin, H. S. (2015). Capital flows and the risk-taking channel of monetary policy. Journal of Monetary Economics, 71, 119–132.",
    /* 8 */ "Bruno, V., & Shin, H. S. (2015). Cross-border banking and global liquidity. Review of Economic Studies, 82(2), 535–564.",
    /* 9 */ "Calvo, G. A., & Reinhart, C. M. (2002). Fear of floating. Quarterly Journal of Economics, 117(2), 379–408.",
    /* 10 */ "Ilzetzki, E., Reinhart, C. M., & Rogoff, K. S. (2019). Exchange arrangements entering the twenty-first century: Which anchor will hold? Quarterly Journal of Economics, 134(2), 599–646.",
    /* 11 */ "Mundell, R. A. (1963). Capital mobility and stabilization policy under fixed and flexible exchange rates. Canadian Journal of Economics and Political Science, 29(4), 475–485.",
    /* 12 */ "Fleming, J. M. (1962). Domestic financial policies under fixed and under floating exchange rates. IMF Staff Papers, 9(3), 369–380.",
    /* 13 */ "Love, I., & Zicchino, L. (2006). Financial development and dynamic investment behavior: Evidence from panel VAR. Quarterly Review of Economics and Finance, 46(2), 190–210.",
    /* 14 */ "Holtz-Eakin, D., Newey, W., & Rosen, H. S. (1988). Estimating vector autoregressions with panel data. Econometrica, 56(6), 1371–1395.",
    /* 15 */ "Jordà, Ò. (2005). Estimation and inference of impulse responses by local projections. American Economic Review, 95(1), 161–182.",
    /* 16 */ "Shambaugh, J. C. (2004). The effect of fixed exchange rates on monetary policy. Quarterly Journal of Economics, 119(1), 301–352.",
    /* 17 */ "Klein, M. W., & Shambaugh, J. C. (2015). Rounding the corners of the policy trilemma: Sources of monetary policy autonomy. American Economic Journal: Macroeconomics, 7(4), 33–66.",
    /* 18 */ "Passari, E., & Rey, H. (2015). Financial flows and the international monetary system. Economic Journal, 125(584), 675–698.",
    /* 19 */ "Cerutti, E., Claessens, S., & Rose, A. K. (2019). How important is the global financial cycle? Evidence from capital flows. IMF Economic Review, 67(1), 24–60.",
    /* 20 */ "Ghosh, A. R., Ostry, J. D., & Qureshi, M. S. (2015). Exchange rate management and crisis susceptibility: A reassessment. IMF Economic Review, 63(1), 238–276.",
    /* 21 */ "Aizenman, J., Chinn, M. D., & Ito, H. (2016). Monetary policy spillovers and the trilemma in the new normal: Periphery country sensitivity to core country conditions. Journal of International Money and Finance, 68, 298–330.",
    /* 22 */ "Bekaert, G., Hoerova, M., & Lo Duca, M. (2013). Risk, uncertainty and monetary policy. Journal of Monetary Economics, 60(7), 771–788.",
    /* 23 */ "Avdjiev, S., Gambacorta, L., Goldberg, L. S., & Schiaffi, S. (2020). The shifting drivers of global liquidity. Journal of International Economics, 125, 103324.",
    /* 24 */ "Gourinchas, P.-O., & Obstfeld, M. (2012). Stories of the twentieth century for the twenty-first. American Economic Journal: Macroeconomics, 4(1), 226–265.",
    /* 25 */ "Koepke, R. (2019). What drives capital flows to emerging markets? A survey of the empirical literature. Journal of Economic Surveys, 33(2), 516–540.",
    /* 26 */ "Canova, F., & Ciccarelli, M. (2013). Panel vector autoregressive models: A survey. In T. B. Fomby, L. Kilian & A. Murphy (Eds.), VAR Models in Macroeconomics – New Developments and Applications: Essays in Honor of Christopher A. Sims (Advances in Econometrics, Vol. 32, pp. 205–246). Bingley: Emerald.",
    /* 27 */ "Nickell, S. (1981). Biases in dynamic models with fixed effects. Econometrica, 49(6), 1417–1426.",
    /* 28 */ { jer: "2022-v27-i4-01" },
  ],
  body: [
    {
      id: "introduction",
      heading: "1. Introduction",
      paragraphs: [
        "Capital flows to emerging markets rise and fall together. A large literature documents that gross flows, credit growth and risky asset prices around the world co-move with a small number of global factors, of which the most prominent is a measure of risk aversion and uncertainty in US financial markets such as the VIX [1][2][4]. Rey {1} labelled this co-movement the global financial cycle and argued that, when capital is mobile, it constrains domestic monetary policy regardless of the exchange-rate regime, turning the classic trilemma into a dilemma between monetary autonomy and capital-account openness.",
        "Whether the exchange-rate regime matters for the transmission of the cycle is therefore a question of first-order importance for policy. The Mundell–Fleming framework predicts that flexible exchange rates insulate an open economy from foreign financial shocks: a sudden rise in global risk aversion depreciates the currency, makes domestic assets cheaper for foreign investors, supports net exports and lets the central bank ease rather than defend a parity [11][12]. The dilemma view holds that this insulation is weak in practice, because balance-sheet effects, dollar invoicing and fear of floating keep even nominally floating central banks from letting the currency absorb shocks [1][9]. Cross-country evidence is mixed: Obstfeld, Ostry and Qureshi {3} find that floating regimes dampen the transmission of global financial shocks to domestic credit and house prices in emerging markets, while Cerutti, Claessens and Rose {19} find that global factors explain only a modest share of capital-flow variation and that the share varies little with country characteristics.",
        "Emerging Asia provides a particularly informative laboratory. After the 1997–98 crisis the region's economies moved along very different paths: Korea, Indonesia, the Philippines and Thailand adopted inflation targeting with flexible exchange rates, while China, Vietnam and, for much of the period, Malaysia and Singapore continued to manage their exchange rates closely. These economies are financially open, heavily exposed to US dollar funding and to the same global investors, and experienced the same sequence of global shocks — the global financial crisis, the 2013 taper tantrum, the 2015–16 renminbi turbulence, the COVID-19 shock and the 2022 tightening cycle. Differences in the response of capital flows across regimes are therefore unlikely to reflect differences in the shocks themselves.",
        "We estimate the transmission of the global financial cycle to ten emerging Asian economies over 2000–2023 using a panel vector autoregression whose coefficients depend on the prevailing exchange-rate regime. We find that a one-standard-deviation increase in the VIX reduces gross capital inflows to emerging Asia by 2.8 percent on impact. The effect is approximately 40 percent smaller for economies with floating exchange rates than for those with managed regimes: 2.1 percent compared with 3.5 percent. The gap persists for about four quarters and is concentrated in portfolio debt and cross-border banking flows, the components most sensitive to global risk appetite and dollar funding conditions [7][8].",
        "We then examine why floating regimes are less exposed. Under floating, a VIX shock depreciates the currency by about three times as much on impact, central banks lose fewer reserves and do not raise policy rates, and domestic credit and output fall by less. Under managed regimes, by contrast, authorities defend the exchange rate with reserves and higher interest rates, which tightens domestic financial conditions precisely when foreign financing dries up. The pattern is in line with the Mundell–Fleming view of exchange-rate flexibility as an automatic stabiliser, and it suggests that the dilemma, while real, is less binding for economies that allow their currencies to move.",
        "The remainder of the paper is organised as follows. Section 2 describes exchange-rate arrangements in emerging Asia, Section 3 reviews related literature and Section 4 develops hypotheses. Section 5 describes the data and Section 6 the empirical strategy. Section 7 presents the main results, Section 8 examines mechanisms, Section 9 reports robustness checks, Section 10 discusses policy implications and Section 11 concludes.",
      ],
    },
    {
      id: "background",
      heading: "2. Exchange-Rate Arrangements in Emerging Asia",
      paragraphs: [
        "Before 1997 most economies in the region maintained de facto pegs or tightly managed arrangements against the US dollar. The Asian financial crisis showed the fragility of these arrangements in the presence of large short-term foreign-currency borrowing, and in its aftermath Korea, Indonesia, Thailand and the Philippines floated their currencies and adopted inflation targeting between 1998 and 2002. India moved gradually towards greater flexibility over the 2000s, and its classification changes from a crawling band to a managed float in our sample. Taiwan maintained a managed float with frequent intervention throughout.",
        "Other economies kept closer control. China maintained a dollar peg until July 2005, then a crawling arrangement interrupted by a return to a de facto peg during 2008–2010, and subsequently a managed band with a daily fixing mechanism. Malaysia pegged the ringgit to the dollar from 1998 to 2005 and then moved to a managed float with heavy intervention. Vietnam operates a crawling band around a central rate set by the State Bank, and Singapore conducts monetary policy through a managed band for the trade-weighted exchange rate. Hong Kong, whose currency board makes it a pure peg with a fully open capital account, is excluded because its monetary arrangements are qualitatively different.",
        "Table 1 summarises the de facto classification we use, based on the fine and coarse codes of Ilzetzki, Reinhart and Rogoff {10}. We define an economy-quarter as floating if the coarse classification indicates a managed float or freely floating arrangement and the fine classification does not indicate a de facto band narrower than plus or minus 2 percent; all other economy-quarters are classified as managed. Because classifications change over time, several economies contribute observations to both regimes, which helps separate the effect of the regime from that of other persistent country characteristics.",
        "Despite the differences in regime, the economies share several features that make them comparable. All accumulated large foreign-exchange reserves after 1998, all saw a sharp increase in non-resident holdings of local-currency government bonds after 2008, and all are integrated into regional supply chains whose trade is invoiced mainly in US dollars. Capital controls vary — China, India and Vietnam retain significant restrictions on portfolio inflows — and we control for a de jure index of capital-account openness throughout. Sungho Park and Anna Petrova have shown for Korea that foreign-exchange intervention, even when sterilised, can move the exchange rate for several trading days {28}; managed regimes in the region rely on such operations far more systematically.",
      ],
      tables: [
        {
          id: "table-1",
          caption: "Table 1. De facto exchange-rate regimes in the sample, 2000–2023",
          columns: ["Economy", "Managed regime (quarters)", "Floating regime (quarters)", "Main classification"],
          rows: [
            ["China", "91", "0", "Peg, then crawling band"],
            ["India", "34", "57", "Crawling band, then managed float"],
            ["Indonesia", "8", "83", "Managed float"],
            ["Korea", "0", "91", "Free float / managed float"],
            ["Malaysia", "61", "30", "Peg, then heavily managed float"],
            ["Philippines", "4", "87", "Managed float"],
            ["Singapore", "91", "0", "Managed band (trade-weighted)"],
            ["Taiwan", "53", "38", "Managed float with frequent intervention"],
            ["Thailand", "5", "86", "Managed float"],
            ["Vietnam", "71", "0", "Crawling band"],
            ["Total economy-quarters", "418", "472", ""],
          ],
          note: "Note: Classification based on Ilzetzki, Reinhart and Rogoff (2019) fine and coarse codes, extended to 2022 using the authors' updates; see Section 2 for the definition of the floating regime. Vietnam enters the sample in 2005Q1. Quarterly balance-of-payments data end in 2022Q3.",
        },
      ],
    },
    {
      id: "literature",
      heading: "3. Related Literature",
      paragraphs: [
        "Our work relates first to the literature on push and pull factors in capital flows. Calvo, Leiderman and Reinhart {5} showed that external conditions, notably US interest rates, drove capital inflows to Latin America in the early 1990s. Subsequent work has confirmed the importance of global risk and liquidity: Forbes and Warnock {4} find that episodes of surges, stops, flight and retrenchment are associated mainly with global risk, and Fratzscher {6} shows that common shocks dominated flows during the global financial crisis while country-specific factors mattered more in the recovery. Koepke {25} surveys this literature and concludes that push factors matter most for portfolio flows and least for direct investment.",
        "A second strand studies the global financial cycle itself. Rey {1} documents a single global factor in risky asset prices that is closely related to the VIX, and Miranda-Agrippino and Rey {2} show that US monetary policy shocks move this factor and, through it, global leverage and credit. Passari and Rey {18} discuss the implications for the international monetary system. Bruno and Shin {7}{8} emphasise the role of global banks and dollar funding: when the dollar weakens and volatility is low, banks expand cross-border lending, and the reverse occurs when risk rises. Bekaert, Hoerova and Lo Duca {22} decompose the VIX into risk aversion and uncertainty and show that US monetary policy affects both. Avdjiev et al. {23} document that the sensitivity of international bank and bond flows to the VIX declined after the global financial crisis while that to US monetary policy rose.",
        "A third strand asks whether exchange-rate regimes mediate global shocks. Shambaugh {16} and Klein and Shambaugh {17} show that pegs follow base-country interest rates more closely than floats, while Aizenman, Chinn and Ito {21} find that periphery countries' sensitivity to core conditions depends on exchange-rate stability and financial openness. Obstfeld, Ostry and Qureshi {3} find that global financial shocks have larger effects on domestic financial conditions in emerging markets with fixed exchange rates. Ghosh, Ostry and Qureshi {20} show that less flexible regimes are more prone to crises, partly because they encourage foreign-currency borrowing. In contrast, Calvo and Reinhart {9} document that many nominal floaters intervene heavily, which would weaken the insulating role of flexibility, and Cerutti, Claessens and Rose {19} find limited heterogeneity in the importance of global factors.",
        "We contribute to these strands in three ways. First, we focus on gross inflows to a relatively homogeneous group of financially open Asian economies that faced common shocks but chose different regimes. Second, we allow all coefficients of the panel VAR to depend on the regime, rather than adding interaction terms to single-equation regressions, so that we can trace the joint response of flows, exchange rates, reserves and policy rates. Third, we exploit within-economy changes in regime, which helps separate the role of exchange-rate flexibility from other persistent country characteristics. Methodologically, we build on the panel VAR literature [13][14][26] and on long-run historical evidence linking credit booms, capital flows and crises [24].",
      ],
    },
    {
      id: "framework",
      heading: "4. Conceptual Framework and Hypotheses",
      paragraphs: [
        "Consider a small open economy whose residents borrow from global investors. A rise in global risk aversion raises the return foreign investors require on the economy's assets. In the Mundell–Fleming framework with capital mobility [11][12], the economy's response depends on the exchange-rate regime. Under floating, the required return is delivered largely through an immediate depreciation that lowers the foreign-currency price of domestic assets and raises their expected return, as the currency is expected to recover. The central bank need not raise interest rates and can ease to offset the contractionary effect of tighter external financing, while the depreciation supports net exports. Under a managed regime, the authorities resist the depreciation by selling reserves and raising interest rates; the adjustment then falls on quantities — capital inflows, domestic credit and output — rather than on the price of the currency.",
        "This logic yields three hypotheses. H1: a rise in global risk aversion reduces gross capital inflows to emerging Asia. H2: the reduction is smaller under floating exchange rates, because the exchange rate absorbs part of the shock. H3: under floating regimes, the exchange rate depreciates more on impact, while reserves, policy rates, domestic credit and output respond less than under managed regimes.",
        "Two forces work against H2. First, if domestic borrowers have large foreign-currency liabilities, depreciation weakens their balance sheets, raises perceived credit risk and can amplify outflows rather than dampen them [9][20]. Second, if global investors respond to exchange-rate volatility itself, floating could make local-currency assets less attractive when volatility spikes. Whether flexibility stabilises or destabilises inflows is therefore an empirical question. Since the early 2000s, however, currency mismatches in the region have fallen markedly, as foreign-currency borrowing by banks declined and non-resident holdings shifted towards local-currency bonds, which makes the stabilising channel more likely to dominate.",
        "The framework also predicts which components of inflows should respond most. Foreign direct investment reflects long-term decisions and should respond little to quarterly changes in risk appetite. Portfolio debt and cross-border bank lending, by contrast, are financed by leveraged investors and global banks whose funding costs and risk limits tighten when volatility rises [7][8]. If floating regimes dampen the response of inflows, the dampening should therefore be concentrated in debt and banking flows.",
      ],
    },
    {
      id: "data",
      heading: "5. Data",
      paragraphs: [],
      subsections: [
        {
          id: "data-flows",
          heading: "5.1 Capital Flows and the Global Financial Cycle",
          paragraphs: [
            "Gross capital inflows — net acquisitions of domestic liabilities by non-residents — are taken from the IMF balance-of-payments statistics, supplemented by national sources for Taiwan. We use quarterly data from 2000Q1 to 2022Q3, the last quarter available for all economies when the analysis was finalised, and complement them with monthly portfolio fund-flow data that extend to January 2023 in robustness checks; we refer to the full sample period as 2000–2023. Inflows are decomposed into foreign direct investment, portfolio equity, portfolio debt and other investment, the last consisting mainly of cross-border bank loans and deposits.",
            "Because quarterly gross flows are volatile and frequently change sign, we measure inflows as the logarithm of the four-quarter rolling sum of gross inflows in US dollars, after adding a constant equal to the largest observed quarterly outflow so that the measure is always defined. Responses can then be read as percentage changes in the level of inflows relative to their baseline path. In robustness checks we use inflows scaled by trend GDP instead.",
            "The global financial cycle is measured by the quarterly average of the VIX. Its standard deviation over the sample is 7.9 index points, and the shocks we consider are innovations of one standard deviation in the VIX equation. In robustness checks we replace the VIX with the global factor in risky asset prices of Miranda-Agrippino and Rey {2} and with the risk-aversion component of the VIX constructed following Bekaert, Hoerova and Lo Duca {22}. US monetary conditions are measured by the shadow federal funds rate, which captures the stance of policy when the policy rate was at its lower bound.",
          ],
        },
        {
          id: "data-controls",
          heading: "5.2 Regimes and Domestic Variables",
          paragraphs: [
            "Domestic variables include real GDP growth, consumer price inflation, the short-term policy rate, the nominal exchange rate against the US dollar, foreign-exchange reserves and real domestic credit to the private sector, all from national sources and the IMF International Financial Statistics. We control throughout for the Chinn–Ito index of de jure capital-account openness and for a country-specific measure of currency mismatch, the ratio of foreign-currency external debt to exports.",
            "Table 2 reports summary statistics by regime. Managed and floating economy-quarters have similar average growth and inflation, but managed regimes hold larger reserves relative to GDP and experience much smaller exchange-rate movements: the standard deviation of quarterly changes in the dollar exchange rate is 1.7 percent under managed regimes and 3.9 percent under floating. Gross inflows are similar in size relative to GDP, but their volatility is higher under managed regimes, a first indication that the regime affects how inflows respond to shocks. The panel is unbalanced because Vietnam enters in 2005, and contains 890 economy-quarters.",
          ],
          tables: [
            {
              id: "table-2",
              caption: "Table 2. Summary statistics by exchange-rate regime, 2000Q1–2022Q3",
              columns: ["Variable", "Managed", "Floating", "Difference"],
              rows: [
                ["Real GDP growth (percent, y/y)", "5.6", "4.4", "1.2**"],
                ["CPI inflation (percent, y/y)", "2.9", "3.6", "−0.7"],
                ["Policy rate (percent)", "3.8", "4.9", "−1.1*"],
                ["Reserves (percent of GDP)", "41.2", "24.7", "16.5***"],
                ["Std. dev. of quarterly exchange-rate change (percent)", "1.7", "3.9", "−2.2***"],
                ["Gross inflows (percent of GDP, annualised)", "8.1", "7.6", "0.5"],
                ["Std. dev. of gross inflows (percent of GDP)", "6.4", "4.9", "1.5**"],
                ["Chinn–Ito openness index (0–1)", "0.41", "0.57", "−0.16**"],
                ["FX external debt / exports", "0.34", "0.39", "−0.05"],
                ["Economy-quarters", "418", "472", ""],
              ],
              note: "Note: Means across economy-quarters unless stated. Differences tested with standard errors clustered by economy. * p < 0.10, ** p < 0.05, *** p < 0.01.",
            },
          ],
        },
      ],
    },
    {
      id: "strategy",
      heading: "6. Empirical Strategy",
      paragraphs: [
        "Our baseline is a panel VAR in which the coefficients depend on the exchange-rate regime. Let y_it be the vector of domestic variables for economy i in quarter t — GDP growth, inflation, the policy rate, the change in the exchange rate, the change in reserves, real credit growth and log gross inflows — and let x_t be the vector of global variables, the VIX and the US shadow rate. We estimate y_it = μ_i + Σ_k [A_k + D_it·B_k] y_i,t−k + Σ_k [C_k + D_it·E_k] x_t−k + Γ z_it + u_it, where D_it equals one if economy i has a floating regime in quarter t, μ_i are economy fixed effects, and z_it contains capital-account openness and currency mismatch. The global block is treated as exogenous to the region, so the VIX and the shadow rate are not affected by lagged domestic variables. Following the panel VAR literature [13][14][26], we use two lags, selected by the Bayesian information criterion.",
      ],
      subsections: [
        {
          id: "identification",
          heading: "6.1 Identification",
          paragraphs: [
            "We identify global financial shocks recursively, ordering the VIX first, followed by the US shadow rate and then the domestic variables, with inflows ordered last. This ordering assumes that the VIX can affect domestic variables within the quarter but that domestic shocks in individual Asian economies do not move the VIX contemporaneously — a plausible assumption given the small weight of each economy in global portfolios. Ordering inflows last allows them to respond within the quarter to all other shocks, and our results on inflows are unaffected by the order of the domestic variables.",
            "The regime-dependent coefficients imply separate impulse responses for managed and floating regimes. We compute these responses holding the regime fixed over the response horizon, which is reasonable given that regime changes are infrequent: an economy-quarter classified as managed is followed by a managed quarter 97 percent of the time. The pooled response reported for the region as a whole is the average of the two regime responses weighted by the share of economy-quarters in each regime.",
          ],
        },
        {
          id: "inference",
          heading: "6.2 Estimation and Inference",
          paragraphs: [
            "With a time dimension of 91 quarters and fixed effects, the Nickell bias is small [27], and we estimate the system by least squares with economy fixed effects; estimates using forward orthogonal deviations and system GMM are similar (Section 9). Confidence bands are obtained by a block bootstrap that resamples economies with replacement, preserving the time-series structure within each economy, with 1,000 replications. Because there are only ten economies, we also report wild cluster bootstrap p-values for the difference between regimes.",
            "Regime choice is not random, and the concern is that economies choose to float when they are less exposed to global shocks for other reasons. Three features of our design mitigate this concern. First, fixed effects absorb permanent differences across economies. Second, we control for capital-account openness and currency mismatch, the most obvious time-varying determinants of exposure. Third, five of the ten economies change regime during the sample, and in Section 9 we show that the regime difference is similar when estimated only from within-economy variation and when the floating indicator is lagged by four quarters to rule out reverse causality running from capital-flow pressures to regime classification.",
          ],
        },
      ],
    },
    {
      id: "results",
      heading: "7. Results",
      paragraphs: [
        "We first report the impact response of inflows to a VIX shock for the region as a whole and by regime, then trace the dynamics of the response, and finally decompose it by type of flow.",
      ],
      subsections: [
        {
          id: "results-impact",
          heading: "7.1 The Impact of Global Risk Shocks on Inflows",
          paragraphs: [
            "Table 3 reports the impact response of gross inflows to a one-standard-deviation increase in the VIX. For the region as a whole, inflows fall by 2.8 percent on impact, a decline that is precisely estimated and corresponds to about USD 6 billion per quarter at sample-average inflow levels across the ten economies. The response differs sharply across regimes: inflows fall by 3.5 percent under managed regimes and by 2.1 percent under floating regimes. The floating response is thus about 40 percent smaller than the managed response, and the difference of 1.4 percentage points is statistically significant at the 5 percent level, with a wild cluster bootstrap p-value of 0.03.",
            "The second panel of Table 3 shows that the same pattern holds when we exclude China, whose capital controls and size might make it an outlier, and when we exclude the global financial crisis, which accounts for the largest VIX shock in the sample. In both cases, the managed response remains between 3.2 and 3.6 percent and the floating response between 1.9 and 2.2 percent, so that the relative difference stays close to 40 percent. The results are therefore not driven by a single economy or a single episode.",
            "The magnitude of the pooled effect is comparable with existing estimates. Forbes and Warnock {4} and Fratzscher {6} find that global risk explains a large share of the variation in capital flows during crisis episodes, and our estimates imply that a two-standard-deviation increase in the VIX — roughly the rise observed in 2008Q4 or 2020Q1 — reduces inflows by between 4 and 7 percent on impact depending on the regime. In a variance decomposition, VIX shocks account for 19 percent of the forecast-error variance of inflows at a four-quarter horizon under managed regimes and 11 percent under floating regimes, in line with the modest but non-trivial role of global factors found by Cerutti, Claessens and Rose {19}.",
          ],
          tables: [
            {
              id: "table-3",
              caption: "Table 3. Impact response of gross capital inflows to a one-standard-deviation VIX shock (percent)",
              columns: ["Sample", "Pooled", "Managed", "Floating", "Difference (F − M)"],
              rows: [
                ["Baseline, 2000Q1–2022Q3", "−2.8***", "−3.5***", "−2.1***", "1.4**"],
                ["", "(0.6)", "(0.8)", "(0.6)", "(0.6)"],
                ["Excluding China", "−2.7***", "−3.6***", "−2.2***", "1.4**"],
                ["", "(0.6)", "(0.9)", "(0.6)", "(0.7)"],
                ["Excluding 2008Q3–2009Q2", "−2.5***", "−3.2***", "−1.9***", "1.3**"],
                ["", "(0.6)", "(0.9)", "(0.6)", "(0.6)"],
                ["Floating response relative to managed", "", "", "−40%", ""],
              ],
              note: "Note: Impact responses from the regime-dependent panel VAR described in Section 6. Bootstrap standard errors (1,000 replications, resampling economies) in parentheses. The pooled response weights the regime responses by their shares of economy-quarters. ** p < 0.05, *** p < 0.01.",
            },
          ],
        },
        {
          id: "results-dynamics",
          heading: "7.2 Dynamics of the Response",
          paragraphs: [
            "Figure 1 traces the response of inflows over eight quarters. Under managed regimes, inflows continue to fall in the quarter after the shock, reaching a trough of 4.6 percent below baseline in the first quarter, and recover only gradually, remaining significantly below baseline for five quarters. Under floating regimes, the trough of 2.4 percent is reached in the first quarter, recovery begins immediately, and the response is statistically indistinguishable from zero after the third quarter. The cumulative loss of inflows over the first four quarters is thus roughly half as large under floating regimes as under managed ones.",
            "The faster recovery under floating is what the framework predicts. After a depreciation, domestic assets are cheap and the currency is expected to appreciate, raising expected returns and attracting investors back. Under managed regimes, the exchange rate does not provide this incentive; instead, higher domestic interest rates partly compensate investors, but at the cost of tighter domestic financial conditions that weaken growth and, with a lag, the economy's attractiveness to foreign capital. We examine these channels directly in Section 8.",
          ],
          figures: [
            {
              id: "figure-1",
              caption: "Figure 1. Response of gross capital inflows to a one-standard-deviation VIX shock, by exchange-rate regime",
              kind: "line",
              xLabels: ["0", "1", "2", "3", "4", "5", "6", "7", "8"],
              yLabel: "Percent deviation from baseline",
              series: [
                {
                  name: "Managed regimes",
                  values: [-3.5, -4.6, -4.1, -3.3, -2.5, -1.8, -1.2, -0.8, -0.5],
                  lower: [-5.1, -6.6, -6.2, -5.4, -4.5, -3.7, -3.0, -2.5, -2.1],
                  upper: [-1.9, -2.6, -2.0, -1.2, -0.5, 0.1, 0.6, 0.9, 1.1],
                },
                {
                  name: "Floating regimes",
                  values: [-2.1, -2.4, -1.8, -1.1, -0.6, -0.3, -0.1, 0.0, 0.1],
                  lower: [-3.3, -3.9, -3.4, -2.6, -2.0, -1.6, -1.3, -1.1, -1.0],
                  upper: [-0.9, -0.9, -0.2, 0.4, 0.8, 1.0, 1.1, 1.1, 1.2],
                },
              ],
              note: "Note: Horizon in quarters after the shock. Shaded bands are 90 percent bootstrap confidence intervals (1,000 replications, resampling economies).",
            },
          ],
        },
        {
          id: "results-composition",
          heading: "7.3 Composition of Inflows",
          paragraphs: [
            "Table 4 decomposes the response by type of flow, reporting the impact response and the cumulative response over four quarters, each expressed relative to total inflows so that the components sum to the total. Foreign direct investment responds little under either regime, consistent with its long-term nature. Portfolio equity falls by similar amounts under both regimes. The regime difference is concentrated in portfolio debt and other investment: on impact, these two components account for 2.4 percentage points of the 3.5 percent decline under managed regimes, but only 1.1 points of the 2.1 percent decline under floating regimes.",
            "Figure 2 illustrates this pattern. The larger response of debt and banking flows under managed regimes is consistent with the view that stable exchange rates encourage carry-trade positions and short-term dollar funding, which unwind abruptly when volatility rises [7][8][20]. Under floating regimes, investors in local-currency bonds bear exchange-rate risk from the outset, so that positions are smaller and less leveraged, and the depreciation following a VIX shock raises their expected returns rather than triggering margin calls.",
          ],
          tables: [
            {
              id: "table-4",
              caption: "Table 4. Response of inflow components to a one-standard-deviation VIX shock (percent of total inflows)",
              columns: ["Component", "Managed: impact", "Floating: impact", "Managed: 4-quarter cumulative", "Floating: 4-quarter cumulative"],
              rows: [
                ["Foreign direct investment", "−0.3", "−0.2", "−1.0", "−0.8"],
                ["Portfolio equity", "−0.8***", "−0.8***", "−2.6**", "−2.2**"],
                ["Portfolio debt", "−1.1***", "−0.5**", "−5.1***", "−1.9*"],
                ["Other investment (mainly banking)", "−1.3***", "−0.6**", "−6.5***", "−2.7**"],
                ["Total inflows", "−3.5***", "−2.1***", "−15.2***", "−7.6***"],
              ],
              note: "Note: Components are expressed as contributions to the percentage change in total gross inflows and sum to the total. The cumulative response sums responses over quarters 1–4 after impact. * p < 0.10, ** p < 0.05, *** p < 0.01.",
            },
          ],
          figures: [
            {
              id: "figure-2",
              caption: "Figure 2. Impact response of inflow components to a VIX shock, by regime",
              kind: "bar",
              xLabels: ["FDI", "Portfolio equity", "Portfolio debt", "Other investment"],
              yLabel: "Contribution to change in inflows (percentage points)",
              series: [
                { name: "Managed regimes", values: [-0.3, -0.8, -1.1, -1.3] },
                { name: "Floating regimes", values: [-0.2, -0.8, -0.5, -0.6] },
              ],
              note: "Note: Impact responses from Table 4.",
            },
          ],
        },
      ],
    },
    {
      id: "mechanisms",
      heading: "8. Mechanisms",
      paragraphs: [
        "If exchange-rate flexibility acts as an automatic stabiliser, the smaller response of inflows under floating should be accompanied by a larger response of the exchange rate and smaller responses of reserves, interest rates and domestic activity. Table 5 reports the impact and four-quarter responses of the domestic variables in the VAR to the same VIX shock.",
        "The exchange-rate response is the clearest difference. Under floating regimes, the domestic currency depreciates by 1.9 percent against the dollar on impact, compared with 0.6 percent under managed regimes. Reserves tell the mirror image: managed-regime central banks run down reserves by 1.4 percent on impact and 2.6 percent over four quarters, while the reserve response under floating is small and insignificant. Policy rates rise by 16 basis points under managed regimes, consistent with defence of the exchange rate, but fall slightly under floating, as central banks ease in response to weaker activity. These patterns mirror the evidence of Shambaugh {16} and Klein and Shambaugh {17} that pegs import foreign financial conditions more fully.",
        "The consequences for the domestic economy follow. Real credit growth falls by 1.2 percentage points over four quarters under managed regimes but by only 0.5 points under floating, and GDP growth falls by 0.5 points compared with 0.2 points. The smaller output loss under floating reflects both the absence of monetary tightening and the support to net exports from the depreciation; a decomposition of the output response using the VAR suggests that roughly two thirds of the difference between regimes operates through the policy-rate and credit channels and one third through net exports.",
        "We also examine whether balance-sheet effects offset the stabilising role of depreciation. Splitting floating economy-quarters by currency mismatch, we find that the dampening of the inflow response is concentrated where the ratio of foreign-currency external debt to exports is below the sample median: there, inflows fall by 1.8 percent on impact, compared with 2.6 percent where mismatch is high. In high-mismatch quarters, which are mostly in the early 2000s, the floating response is close to the managed response. Exchange-rate flexibility therefore stabilises inflows mainly when domestic balance sheets can absorb depreciation, consistent with Ghosh, Ostry and Qureshi {20}.",
        "Finally, the transmission of the global cycle has changed over time. Estimating the model separately for 2000–2009 and 2010–2022, we find that the pooled impact effect is similar across periods, but the regime difference is larger in the second period, when the floating response falls to 1.8 percent while the managed response remains about 3.5 percent. This change coincides with the growth of local-currency bond markets and the decline of currency mismatches in floating economies, and with the shift documented by Avdjiev et al. {23} away from bank-intermediated flows towards bond flows after the global financial crisis.",
      ],
      tables: [
        {
          id: "table-5",
          caption: "Table 5. Responses of domestic variables to a one-standard-deviation VIX shock",
          columns: ["Variable", "Managed: impact", "Floating: impact", "Managed: 4 quarters", "Floating: 4 quarters"],
          rows: [
            ["Exchange rate vs USD (percent, + = depreciation)", "0.6**", "1.9***", "0.9**", "1.4**"],
            ["Foreign-exchange reserves (percent)", "−1.4***", "−0.3", "−2.6***", "−0.4"],
            ["Policy rate (basis points)", "16**", "−4", "21**", "−12*"],
            ["Real credit growth (percentage points)", "−0.4**", "−0.2", "−1.2***", "−0.5*"],
            ["Real GDP growth (percentage points)", "−0.2**", "−0.1", "−0.5***", "−0.2*"],
            ["CPI inflation (percentage points)", "−0.1", "0.1", "−0.2", "0.1"],
          ],
          note: "Note: Responses from the regime-dependent panel VAR. Four-quarter responses are the response in quarter 4 after the shock (cumulative for the exchange rate and reserves). Significance based on bootstrap standard errors. * p < 0.10, ** p < 0.05, *** p < 0.01.",
        },
      ],
    },
    {
      id: "robustness",
      heading: "9. Robustness",
      paragraphs: [
        "Table 6 reports a range of robustness checks for the impact response of inflows. The regime difference is robust to alternative measures of the global financial cycle: replacing the VIX with the global factor of Miranda-Agrippino and Rey {2} or with the risk-aversion component of the VIX yields managed and floating responses within 0.4 percentage points of the baseline, and the relative difference remains between 36 and 43 percent. Measuring inflows relative to trend GDP rather than in logs, or using monthly portfolio fund flows through January 2023, also yields similar results.",
        "Estimation choices matter little. Using three or four lags instead of two, estimating the system by GMM with forward orthogonal deviations as in Love and Zicchino {13], or estimating impulse responses by local projections [15] instead of iterating the VAR leaves the impact responses essentially unchanged; local projections give somewhat wider confidence intervals at longer horizons, as expected. Lagging the floating indicator by four quarters, so that the regime is determined before the shock, slightly increases the estimated difference. Restricting identification to within-economy variation, by estimating the model only on the five economies that change regime with economy-specific coefficients on the global variables, yields a floating response 37 percent smaller than the managed response, close to the baseline.",
        "A remaining concern is that the regime indicator proxies for other policies, in particular capital-flow management measures, which are more common in managed-regime economies. Adding an index of the intensity of inflow restrictions, interacted with the VIX, reduces the estimated regime difference only slightly, from 1.4 to 1.2 percentage points, and the interaction with capital controls is itself small and insignificant. Similarly, controlling for the ratio of reserves to GDP interacted with the VIX does not alter the result, which suggests that the stabilising effect of floating is not simply a reflection of different reserve buffers.",
      ],
      tables: [
        {
          id: "table-6",
          caption: "Table 6. Robustness of the impact response of inflows to a VIX shock (percent)",
          columns: ["Specification", "Managed", "Floating", "Floating relative to managed"],
          rows: [
            ["Baseline", "−3.5***", "−2.1***", "−40%"],
            ["Global factor (Miranda-Agrippino and Rey) instead of VIX", "−3.3***", "−2.0***", "−39%"],
            ["Risk-aversion component of the VIX", "−3.7***", "−2.1***", "−43%"],
            ["Inflows scaled by trend GDP", "−3.4***", "−2.2***", "−36%"],
            ["Monthly portfolio fund flows, through January 2023", "−3.9***", "−2.4***", "−38%"],
            ["Four lags", "−3.5***", "−2.0***", "−43%"],
            ["GMM, forward orthogonal deviations", "−3.6***", "−2.2***", "−39%"],
            ["Local projections", "−3.4***", "−2.0**", "−41%"],
            ["Floating indicator lagged four quarters", "−3.6***", "−2.1***", "−42%"],
            ["Within-economy variation only (five economies)", "−3.5***", "−2.2**", "−37%"],
            ["Controlling for capital-flow management × VIX", "−3.4***", "−2.2***", "−35%"],
          ],
          note: "Note: Impact responses of gross inflows to a one-standard-deviation shock to the global variable. Monthly fund flows are aggregated to quarterly frequency. ** p < 0.05, *** p < 0.01, based on bootstrap standard errors.",
        },
      ],
    },
    {
      id: "discussion",
      heading: "10. Discussion and Policy Implications",
      paragraphs: [
        "Our results speak to the debate between the trilemma and the dilemma views of international monetary policy. In line with Rey {1}, we find that all emerging Asian economies, regardless of regime, are exposed to the global financial cycle: a VIX shock reduces inflows significantly under floating as well as managed regimes. But the exposure is substantially smaller under floating, and the domestic consequences — for interest rates, credit and output — are considerably milder. This is consistent with Obstfeld, Ostry and Qureshi {3}, who conclude that the trilemma is alive although not unconstrained, and with the classical prediction that flexible exchange rates allow the domestic economy to absorb external financial shocks through prices rather than quantities [11][12].",
        "For policymakers in the region, the results suggest that exchange-rate flexibility is a valuable buffer against global financial shocks, especially as currency mismatches decline. Fear of floating [9] has costs: managed regimes import the tightening of global financial conditions through reserve losses and higher interest rates, precisely when domestic activity weakens. At the same time, our finding that the stabilising role of flexibility is weaker where currency mismatch is high indicates that floating works best in combination with policies that limit foreign-currency borrowing and develop local-currency bond markets.",
        "The results do not imply that intervention is never useful. Even floating-regime central banks in the region intervene to smooth disorderly movements, and evidence for Korea suggests that intervention can moderate exchange-rate volatility at high frequencies {28}. Our evidence is about the systematic response to global shocks: economies that let the exchange rate adjust on average experience smaller declines in inflows and smaller domestic consequences than those that resist adjustment. A natural interpretation is that intervention is most effective as a tool to smooth excessive volatility rather than to prevent adjustment to persistent changes in global conditions.",
        "Several caveats apply. Our sample contains ten economies, and although regime changes within economies help identification, regime choice may still be correlated with unobserved institutional quality. Our measure of global financial conditions captures risk aversion and uncertainty, but the global financial cycle also reflects US monetary policy and dollar strength, whose interaction with regimes deserves further study. Finally, the stabilising role of floating that we document applies to gross inflows from non-residents; gross outflows by residents, which often rise when foreign investors retrench, are an additional margin of adjustment that we do not analyse here [4].",
      ],
    },
    {
      id: "conclusion",
      heading: "11. Conclusion",
      paragraphs: [
        "We have estimated the transmission of the global financial cycle to ten emerging Asian economies over 2000–2023 using a panel VAR with regime-dependent coefficients. A one-standard-deviation increase in the VIX reduces gross capital inflows by 2.8 percent on impact, with a response about 40 percent smaller under floating regimes (2.1 percent) than under managed regimes (3.5 percent). The difference is concentrated in portfolio debt and banking flows and persists for about four quarters. Floating regimes allow the exchange rate to depreciate, preserve reserves and avoid monetary tightening, so that domestic credit and output fall by less. These findings are consistent with the role of exchange-rate flexibility as an automatic stabiliser emphasised in the Mundell–Fleming framework.",
        "Future research could extend the analysis in several directions. Firm-level data would allow an assessment of how currency mismatch on corporate balance sheets interacts with regime choice in shaping the real effects of global shocks. The rising role of non-bank financial intermediaries and local-currency bond funds raises the question of whether the stabilising role of flexibility will strengthen further or whether new forms of fragility will emerge. And extending the analysis to gross outflows would provide a more complete picture of how emerging Asian economies adjust to swings in global risk appetite.",
      ],
    },
    {
      id: "appendix",
      heading: "Appendix A. Data Construction and Estimation Details",
      paragraphs: [
        "Inflow measure. For each economy, gross inflows are the sum of net incurrence of liabilities in direct investment, portfolio investment and other investment, in current US dollars. We compute four-quarter rolling sums to remove seasonality and high-frequency noise, add a constant equal to the absolute value of the largest negative four-quarter sum in the economy's history plus one percent of its mean, and take logarithms. Results using the inverse hyperbolic sine transformation instead are very similar.",
        "Regime classification. We map the Ilzetzki, Reinhart and Rogoff {10} monthly fine codes to quarters using the modal classification within the quarter. Fine codes 1–8 (pegs, crawling pegs and narrow bands) are classified as managed, codes 9–13 as floating, with the exception noted in Section 2 for de facto bands narrower than plus or minus 2 percent, which we classify as managed. For 2020–2022 we extend the classification using the same methodology applied to daily exchange-rate data, and confirm that our classifications match those of the authors' most recent updates where available.",
        "Estimation. The VAR is estimated equation by equation by least squares with economy fixed effects. The global block contains the VIX and the US shadow rate and their two lags and is estimated using US data only. Impulse responses are computed from the Cholesky decomposition of the residual covariance matrix pooled across regimes; allowing separate covariance matrices by regime changes the impact responses of inflows by less than 0.1 percentage points. Bootstrap confidence bands resample economies with replacement and re-estimate the full system in each replication.",
        "Variance decomposition. The forecast-error variance decomposition reported in Section 7.1 is computed for each regime holding the regime fixed over the horizon. At the eight-quarter horizon, VIX shocks account for 23 percent of the variance of inflows under managed regimes and 13 percent under floating regimes, while domestic shocks account for most of the remainder.",
      ],
    },
  ],
};
