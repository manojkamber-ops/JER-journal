// Vol. 27, No. 4 (October 2022) — full text for an article defined in journal.ts (sample content).
import type { FulltextSpec } from "../paper-spec";

export const fulltext: FulltextSpec = {
  id: "2022-v27-i4-01",
  acknowledgments:
    "We thank seminar participants at Hanyang University and CERGE-EI, two anonymous referees and the handling editor for helpful comments, and staff of the Bank of Korea's International Department for clarifying the institutional details of intervention and sterilisation operations. The views expressed are those of the authors and do not represent those of the Bank of Korea.",
  dataAvailability:
    "Daily intervention records for 2005–2021 were made available by the Bank of Korea for research purposes under a confidentiality agreement and cannot be shared; the quarterly aggregates published since 2019 are public. Exchange-rate, money-market, bond-yield and capital-flow data are available from the Bank of Korea Economic Statistics System, the Korea Exchange and Refinitiv. Code is available from the corresponding author.",
  editorialNote:
    "Sungho Park and Anna Petrova use a high-frequency event study of Korean intervention over 2005–2021 to show that a USD 1 billion intervention moves the won–dollar rate by about 0.3 percent on the day, with effects lasting five to ten trading days, and that sterilisation through monetary stabilisation bonds largely neutralises the monetary consequences.",
  refs: [
    /* 1 */ "Fratzscher, M., Gloede, O., Menkhoff, L., Sarno, L., & Stöhr, T. (2019). When is foreign exchange intervention effective? Evidence from 33 countries. American Economic Journal: Macroeconomics, 11(1), 132–156.",
    /* 2 */ "Dominguez, K. M., & Frankel, J. A. (1993). Does foreign-exchange intervention matter? The portfolio effect. American Economic Review, 83(5), 1356–1369.",
    /* 3 */ "Sarno, L., & Taylor, M. P. (2001). Official intervention in the foreign exchange market: Is it effective and, if so, how does it work? Journal of Economic Literature, 39(3), 839–868.",
    /* 4 */ "Fatum, R., & Hutchison, M. M. (2003). Is sterilised foreign exchange intervention effective after all? An event study approach. Economic Journal, 113(487), 390–411.",
    /* 5 */ "Kearns, J., & Rigobon, R. (2005). Identifying the efficacy of central bank interventions: Evidence from Australia and Japan. Journal of International Economics, 66(1), 31–48.",
    /* 6 */ "Menkhoff, L. (2013). Foreign exchange intervention in emerging markets: A survey of empirical studies. The World Economy, 36(9), 1187–1208.",
    /* 7 */ "Blanchard, O., Adler, G., & de Carvalho Filho, I. (2015). Can foreign exchange intervention stem exchange rate pressures from global capital flow shocks? NBER Working Paper No. 21427. Cambridge, MA: National Bureau of Economic Research.",
    /* 8 */ "Adler, G., Lisack, N., & Mano, R. C. (2019). Unveiling the effects of foreign exchange intervention: A panel approach. Emerging Markets Review, 40, 100620.",
    /* 9 */ "Dominguez, K. M. (2003). The market microstructure of central bank intervention. Journal of International Economics, 59(1), 25–45.",
    /* 10 */ "Evans, M. D. D., & Lyons, R. K. (2002). Order flow and exchange rate dynamics. Journal of Political Economy, 110(1), 170–180.",
    /* 11 */ "Fatum, R., & Hutchison, M. M. (2006). Effectiveness of official daily foreign exchange market intervention operations in Japan. Journal of International Money and Finance, 25(2), 199–219.",
    /* 12 */ "Chamon, M., Hofman, D., Magud, N., & Werner, A. (Eds.). (2019). Foreign exchange intervention in inflation targeters in Latin America. Washington, DC: International Monetary Fund.",
    /* 13 */ "Calvo, G. A., & Reinhart, C. M. (2002). Fear of floating. Quarterly Journal of Economics, 117(2), 379–408.",
    /* 14 */ "Rey, H. (2013). Dilemma not trilemma: The global financial cycle and monetary policy independence. In Global dimensions of unconventional monetary policy (pp. 285–333). Kansas City, MO: Federal Reserve Bank of Kansas City.",
    /* 15 */ "Gabaix, X., & Maggiori, M. (2015). International liquidity and exchange rate dynamics. Quarterly Journal of Economics, 130(3), 1369–1420.",
    /* 16 */ "Cavallino, P. (2019). Capital flows and foreign exchange intervention. American Economic Journal: Macroeconomics, 11(2), 127–170.",
    /* 17 */ "Kouri, P. J. K. (1976). The exchange rate and the balance of payments in the short run and in the long run: A monetary approach. Scandinavian Journal of Economics, 78(2), 280–304.",
    /* 18 */ "Mussa, M. (1981). The role of official intervention (Occasional Paper No. 6). New York: Group of Thirty.",
    /* 19 */ "Aizenman, J., & Glick, R. (2009). Sterilization, monetary policy, and global financial integration. Review of International Economics, 17(4), 777–801.",
    /* 20 */ "Ouyang, A. Y., Rajan, R. S., & Willett, T. D. (2010). China as a reserve sink: The evidence from offset and sterilization coefficients. Journal of International Money and Finance, 29(5), 951–972.",
    /* 21 */ "Obstfeld, M., Shambaugh, J. C., & Taylor, A. M. (2010). Financial stability, the trilemma, and international reserves. American Economic Journal: Macroeconomics, 2(2), 57–94.",
    /* 22 */ "Ghosh, A. R., Ostry, J. D., & Chamon, M. (2016). Two targets, two instruments: Monetary and exchange rate policies in emerging market economies. Journal of International Money and Finance, 60, 172–196.",
    /* 23 */ "Chen, C.-N., Watanabe, T., & Yabu, T. (2012). A new method for identifying the effects of foreign exchange interventions. Journal of Money, Credit and Banking, 44(8), 1507–1533.",
    /* 24 */ "Kim, S. (2003). Monetary policy, foreign exchange intervention, and the exchange rate in a unifying framework. Journal of International Economics, 60(2), 355–386.",
    /* 25 */ "Forbes, K. J., & Warnock, F. E. (2012). Capital flow waves: Surges, stops, flight, and retrenchment. Journal of International Economics, 88(2), 235–251.",
    /* 26 */ "Jordà, Ò. (2005). Estimation and inference of impulse responses by local projections. American Economic Review, 95(1), 161–182.",
    /* 27 */ "Neely, C. J. (2005). An analysis of recent studies of the effect of foreign exchange intervention. Federal Reserve Bank of St. Louis Review, 87(6), 685–717.",
    /* 28 */ "Bruno, V., & Shin, H. S. (2015). Capital flows and the risk-taking channel of monetary policy. Journal of Monetary Economics, 71, 119–132.",
  ],
  body: [
    {
      id: "introduction",
      heading: "1. Introduction",
      paragraphs: [
        "Emerging-market central banks intervene in foreign-exchange markets far more often than the textbook description of a floating exchange rate suggests. Many of them describe their regimes as free floats while buying and selling foreign currency on a substantial share of trading days, a pattern that Calvo and Reinhart {13} famously labelled fear of floating. The motivation has become stronger as capital flows to emerging markets have grown larger and more volatile, and as global financial conditions have come to drive local asset prices regardless of the exchange-rate regime [14][28]. Whether intervention actually moves exchange rates, for how long, and at what cost to monetary control are therefore questions of first-order policy importance.",
        "The answers remain contested. In the classic monetary approach, sterilised intervention — a purchase or sale of foreign currency whose effect on the domestic money supply is offset by an opposite transaction in domestic assets — should have no lasting effect on the exchange rate, because it changes neither the relative supply of monies nor expected future policy [17][18]. Intervention can matter only through imperfect substitutability between domestic and foreign assets (the portfolio-balance channel), through the information it conveys about future policy (the signalling channel), or through order flow in a market with limited dealer capacity [2][9][10]. Recent theory based on financially constrained intermediaries gives the portfolio-balance channel a firmer foundation [15][16], but the empirical literature still produces estimates ranging from zero to large effects, depending on the identification strategy and the country studied [1][3][6].",
        "The central empirical difficulty is simultaneity. Central banks intervene precisely when the exchange rate is moving sharply, typically leaning against the wind by selling foreign currency during depreciations and buying during appreciations. A naive regression of daily exchange-rate changes on intervention therefore confounds the effect of intervention with the pressure that triggered it, biasing estimates towards zero or even towards the wrong sign [5][23]. High-frequency data and careful event definitions are the most direct ways to break this simultaneity, because the market pressure that prompts an intervention is largely determined before the operation is executed.",
        "This paper estimates the effectiveness of sterilised intervention in Korea over 2005–2021, using a high-frequency event-study approach that distinguishes intervention days from non-intervention days. We draw on daily intervention records made available by the Bank of Korea, which cover 1,038 intervention days out of 4,214 trading days, together with intraday time stamps of the first intervention trade on 874 of those days. Each intervention day is compared with a matched non-intervention day on which the predicted probability of intervention and the intraday movement before the time of the operation were similar, and exchange-rate changes are measured from the minute before the operation. Local projections then trace the effect over subsequent trading days [26].",
        "We find that an intervention of USD 1 billion moves the won–dollar exchange rate by an average of 0.3 percent in the opposite direction to the market pressure on the day of intervention. The effect decays gradually: it remains statistically different from zero for between 5 and 10 trading days, depending on the specification, and is close to zero after about three weeks. Effects are larger for sales than for purchases of dollars, during periods of global financial stress, on days with thin market liquidity and during episodes of capital outflow. We also find that sterilisation through monetary stabilisation bonds (MSBs) is largely effective: each USD 1 billion of net intervention is matched by roughly KRW 0.97 trillion of net MSB issuance in the same month, and we detect only limited effects on reserve money, the overnight call rate and short-term market yields.",
        "Our contribution is twofold. First, we provide high-frequency estimates for one of the largest and most active interveners among emerging markets, using official records that have not been available to most previous studies of Korea, which have had to rely on proxies constructed from reserve changes [6][24]. Second, we combine estimates of exchange-rate effects with direct evidence on sterilisation, allowing us to assess both sides of the policy trade-off within a single framework. Section 2 describes Korea's intervention and sterilisation framework. Section 3 reviews the literature and Section 4 sets out the hypotheses. Section 5 describes the data and Section 6 the empirical strategy. Section 7 presents the main results, Section 8 examines heterogeneity and the role of capital flows, Section 9 reports robustness checks, Section 10 discusses policy implications and Section 11 concludes.",
      ],
    },
    {
      id: "background",
      heading: "2. Intervention and Sterilisation in Korea",
      paragraphs: [
        "Korea adopted a free-floating exchange-rate regime in December 1997, at the height of the Asian financial crisis, and an inflation-targeting framework for monetary policy shortly afterwards. The authorities have since described their policy as allowing the exchange rate to be determined by market forces, while reserving the right to undertake smoothing operations when movements are judged excessive or disorderly. In practice, intervention is decided jointly by the Ministry of Economy and Finance and the Bank of Korea and executed by the Bank of Korea's dealing room in the onshore interbank spot market, using a combination of the central bank's own reserves and the Foreign Exchange Stabilisation Fund managed by the ministry.",
        "For most of the sample period intervention was undisclosed. The authorities confirmed operations only occasionally, usually through statements by officials expressing concern about one-sided movements, and market participants inferred intervention from dealer reports and from changes in reported reserves. Following a commitment made in 2018, the Bank of Korea began publishing net intervention aggregates in 2019, initially every six months and subsequently every quarter, with a lag. Daily operations remain confidential, which is why studies of Korean intervention have generally relied on monthly reserve changes or dealer reports [6].",
        "Table 1 summarises intervention by sub-period. Before the global financial crisis, Korea was a persistent buyer of dollars, intervening on 268 of 741 trading days in 2005–2007, overwhelmingly through purchases intended to slow the appreciation of the won. During the crisis of 2008–2009 the direction reversed: the authorities sold dollars on 142 days, with the largest daily operation exceeding USD 4 billion in October 2008. Purchases dominated again in 2010–2014 as capital inflows resumed, while operations in 2015–2019 were less frequent and more balanced. In 2020–2021 the authorities sold dollars on 84 of 128 intervention days as the pandemic and, later, rising US interest rates put downward pressure on the won.",
        "Intervention changes the Bank of Korea's net foreign assets and, unless offset, the supply of reserve money. Sterilisation is conducted mainly through the issuance of MSBs, short- and medium-term securities issued by the central bank, and secondarily through repurchase operations. Because the Bank of Korea targets the overnight call rate, it has an incentive to absorb the liquidity created by dollar purchases and to inject liquidity when dollar sales drain it, so as to keep the call rate close to the policy rate. The outstanding stock of MSBs rose from about KRW 140 trillion in 2005 to more than KRW 160 trillion by 2021, and at times exceeded KRW 180 trillion, reflecting the cumulative sterilisation of reserve accumulation.",
      ],
      tables: [
        {
          id: "table-1",
          caption: "Table 1. Foreign-exchange intervention in Korea by sub-period, 2005–2021",
          columns: ["Period", "Trading days", "Intervention days", "Dollar sales", "Dollar purchases", "Mean size (USD bn)", "Net purchases (USD bn)"],
          rows: [
            ["2005–2007", "741", "268", "21", "247", "0.38", "58.4"],
            ["2008–2009", "497", "196", "142", "54", "0.62", "−18.6"],
            ["2010–2014", "1,240", "268", "64", "204", "0.33", "41.2"],
            ["2015–2019", "1,240", "178", "101", "77", "0.29", "−6.4"],
            ["2020–2021", "496", "128", "84", "44", "0.47", "−14.9"],
            ["Total", "4,214", "1,038", "412", "626", "0.41", "59.7"],
          ],
          note: "Note: Intervention days are days with absolute net spot operations of at least USD 50 million. Mean size is the mean absolute daily net operation on intervention days. Net purchases are cumulative net dollar purchases over the period (negative values denote net sales). Source: Bank of Korea daily records; authors' calculations.",
        },
      ],
    },
    {
      id: "literature",
      heading: "3. Related Literature",
      paragraphs: [
        "Early studies of intervention by the major central banks found weak and short-lived effects, which, together with the monetary approach, led to scepticism about sterilised operations [3][18]. Dominguez and Frankel {2} challenged this view by showing that both reported intervention and official statements moved the dollar–mark rate through portfolio and expectations channels. Subsequent work using daily official data for Japan, which became public in 2001, found significant effects of large and infrequent interventions [11][23], and event-study approaches confirmed that intervention episodes are frequently followed by movements in the intended direction [4]. Neely {27} provides a careful review of the identification problems confronting this literature.",
        "Two identification strategies have proved particularly influential. Kearns and Rigobon {5} exploit a change in the frequency of Australian intervention to identify its effect through heteroskedasticity, finding a significant impact of about 1.3 to 1.8 percent per USD 1 billion for Australia. Chen, Watanabe and Yabu {23} exploit the fact that Japanese interventions are decided on the basis of the previous day's movements and estimate the reaction function and impact jointly. Both studies emphasise that ignoring the endogeneity of intervention leads to severe underestimation of its effects. Microstructure evidence complements these approaches: Dominguez {9} shows that intervention trades move rates within minutes, and Evans and Lyons {10} show more generally that order flow has persistent price effects.",
        "Evidence for emerging markets has grown rapidly. Menkhoff {6} surveys this literature and concludes that intervention is generally effective in emerging markets, more so than in advanced economies, plausibly because markets are smaller and capital mobility is lower. Fratzscher et al. {1} use daily data for 33 countries and find that intervention is effective in a large majority of cases in smoothing the exchange-rate path, particularly when operations are large and accompanied by communication. Blanchard, Adler and de Carvalho Filho {7} show that countries that intervene more experience smaller appreciation in response to global capital-inflow shocks, and Adler, Lisack and Mano {8} estimate in a panel that a purchase of 1 percent of GDP depreciates the currency by about 1.7 to 2.0 percent. Evidence from Latin American inflation targeters points to effects that are significant but heterogeneous across countries and instruments [12].",
        "A smaller literature studies sterilisation. Aizenman and Glick {19} and Ouyang, Rajan and Willett {20} estimate sterilisation coefficients for emerging Asia and find near-complete sterilisation in many countries, at least in the short run. Obstfeld, Shambaugh and Taylor {21} link reserve accumulation to financial stability motives, implying that the holding costs of sterilised reserves are the price of self-insurance. Theory suggests that intervention can be a useful second instrument when capital flows are volatile, allowing monetary policy to focus on inflation [16][22]. For Korea, Kim {24} estimates a structural VAR in which intervention and monetary policy are determined jointly and finds that intervention has substantial effects on the exchange rate, but data limitations forced reliance on monthly reserve changes. We contribute daily and intraday evidence on both exchange-rate and money-market effects.",
      ],
    },
    {
      id: "framework",
      heading: "4. Conceptual Framework and Hypotheses",
      paragraphs: [
        "We organise the analysis around a simple portfolio-balance framework with financially constrained intermediaries, in the spirit of Gabaix and Maggiori {15} and Cavallino {16}. Global investors' demand for won assets fluctuates with risk appetite and interest differentials; domestic dealers absorb imbalances between foreign-exchange supply and demand, but their capacity to bear currency risk is limited. When foreign investors sell won assets, dealers must hold more dollar-denominated liabilities or fewer dollar assets, and the won depreciates until the expected return compensates them for the additional risk. A central-bank sale of dollars absorbs part of the imbalance directly, relieving dealers' balance sheets and reducing the required depreciation.",
        "In this framework, sterilised intervention affects the exchange rate even though it leaves the money supply unchanged, because it alters the currency composition of assets that private intermediaries must hold. The magnitude of the effect is larger when intermediaries are more constrained — for example during episodes of global financial stress or thin market liquidity — and when the imbalance being absorbed is large relative to dealer capacity. Signalling and coordination channels may reinforce these effects when intervention is accompanied by official statements [2][1].",
        "The framework yields four hypotheses. First (H1), sales of dollars appreciate the won and purchases depreciate it, so that intervention moves the exchange rate in the opposite direction to the prevailing market pressure. Second (H2), the effect is persistent but not permanent: as intermediaries rebalance and new capital flows arrive, the exchange rate gradually returns towards the path it would otherwise have followed. Third (H3), effects are larger when intermediation capacity is constrained, as proxied by global risk aversion, market turnover and capital-flow regimes. Fourth (H4), if sterilisation is effective, intervention should leave domestic money-market conditions — reserve money, the overnight call rate and short-term yields — largely unaffected, with any residual effect arising through changes in the supply of sterilisation securities rather than through liquidity.",
      ],
    },
    {
      id: "data",
      heading: "5. Data",
      paragraphs: [],
      subsections: [
        {
          id: "data-intervention",
          heading: "5.1 Intervention Records",
          paragraphs: [
            "The intervention data are daily net spot operations of the Bank of Korea and the Foreign Exchange Stabilisation Fund in the onshore won–dollar market from 3 January 2005 to 30 December 2021, made available for this research under a confidentiality agreement. Operations are recorded in US dollars, with positive values denoting net sales of dollars and negative values net purchases. We define an intervention day as a day on which the absolute net operation is at least USD 50 million, which excludes small technical transactions such as settlement of government payments. This yields 1,038 intervention days, of which 412 involve net sales and 626 net purchases.",
            "For 874 intervention days, the records also report the time of the first intervention trade, to the minute. The remaining 164 days, concentrated in 2005–2006, lack time stamps because of a change in recording systems; we use them in daily specifications but not in intraday ones. Because the authorities sometimes intervene in the forward market or through foreign-exchange swaps, particularly during the 2008 crisis and in 2020, we also construct a broader measure including the delta-equivalent of these operations, which we use in robustness checks. The daily net spot measure aggregates to within 3 percent of the semi-annual and quarterly aggregates published since 2019, providing a check on its accuracy.",
          ],
        },
        {
          id: "data-markets",
          heading: "5.2 Exchange-Rate, Money-Market and Capital-Flow Data",
          paragraphs: [
            "Exchange-rate data are minute-by-minute quotes for the onshore won–dollar spot rate from the Seoul interbank market, which trades from 9:00 to 15:30 local time over most of the sample, and the daily market average rate published by Seoul Money Brokerage Services. We also use the closing offshore non-deliverable forward (NDF) rate, which captures trading after the onshore close. Daily onshore spot turnover is used as a measure of market liquidity.",
            "Money-market data include the overnight call rate, the 91-day certificate of deposit rate, yields on 1-year MSBs and 3-year Korea Treasury Bonds, reserve money and the daily balance of MSB issuance and repurchase operations, all from the Bank of Korea Economic Statistics System. Global controls include the VIX, the broad US dollar index, the two-year US Treasury yield and the price of Brent crude oil. Capital-flow data comprise daily net purchases of Korean equities and bonds by foreign investors, from the Korea Exchange and the Financial Supervisory Service.",
            "To classify capital-flow regimes, we follow Forbes and Warnock {25} and define surges and stops as periods in which the year-on-year change in quarterly gross portfolio inflows lies more than one standard deviation above or below its rolling five-year mean, provided that it exceeds two standard deviations in at least one quarter. Applied to Korean data, this procedure identifies surges in 2006–2007, 2009–2010 and 2017 and stops in 2008, 2011, 2015–2016 and 2020.",
            "Table 2 compares intervention days with all non-intervention days and with the matched non-intervention days used in our main specification. Intervention days are clearly unusual: absolute exchange-rate changes on the previous day are about one-third larger, the VIX moves more and foreign investors are net sellers of Korean equities. These differences illustrate the selection problem facing naive comparisons. By construction, however, matched days are very similar to intervention days in all of these respects, with differences that are small and statistically insignificant.",
          ],
          tables: [
            {
              id: "table-2",
              caption: "Table 2. Intervention days, non-intervention days and matched days",
              columns: ["Variable", "Intervention days", "All other days", "Matched days", "Difference (1)−(3)"],
              rows: [
                ["Absolute change in won–dollar rate, previous day (%)", "0.48", "0.36", "0.47", "0.01"],
                ["Absolute change before intervention time, same day (%)", "0.29", "0.21", "0.28", "0.01"],
                ["Absolute change in VIX, previous day (points)", "1.12", "0.71", "1.06", "0.06"],
                ["Foreign net equity purchases, previous day (USD bn)", "−0.09", "0.02", "−0.08", "−0.01"],
                ["Foreign net bond purchases, previous five days (USD bn)", "0.11", "0.19", "0.12", "−0.01"],
                ["Onshore spot turnover (USD bn)", "8.4", "9.1", "8.5", "−0.1"],
                ["Predicted probability of intervention", "0.38", "0.21", "0.37", "0.01"],
                ["Number of days", "1,038", "3,176", "1,038", ""],
              ],
              note: "Note: Means over 2005–2021. Matched days are non-intervention days selected by nearest-neighbour matching on the predicted probability of intervention and the same-day pre-intervention exchange-rate movement (Section 6). None of the differences in the last column is statistically significant at the 10 percent level.",
            },
          ],
        },
      ],
    },
    {
      id: "strategy",
      heading: "6. Empirical Strategy",
      paragraphs: [],
      subsections: [
        {
          id: "strategy-reaction",
          heading: "6.1 The Reaction Function and Matching",
          paragraphs: [
            "Our identification rests on the observation that the authorities' decision to intervene responds to information available before the operation is executed. We first estimate a probit reaction function for the probability of intervention on day t as a function of the previous day's exchange-rate change and its absolute value, the deviation of the exchange rate from its 20-day moving average, the cumulative change since the beginning of the month, the previous day's changes in the VIX and the US dollar index, foreign net equity and bond purchases, and year fixed effects. The reaction function fits well, with a pseudo-R-squared of 0.31, and confirms that the authorities lean against the wind: a 1 percent depreciation over the previous day raises the probability of dollar sales by about 18 percentage points.",
            "For each intervention day we then select a non-intervention day within the same calendar year with the nearest predicted probability of intervention, subject to the additional requirement that the exchange-rate change from the market open to the time of the first intervention trade (on intervention days) be within 0.1 percentage points of the change over the same window on the matched day. This second condition is the high-frequency element of the design: it ensures that intervention and matched days are comparable not only in terms of predetermined conditions but also in terms of the pressure building up during the trading session before the operation. Matching is with replacement; the 1,038 intervention days are matched to 961 distinct non-intervention days.",
          ],
        },
        {
          id: "strategy-event",
          heading: "6.2 Event-Study Specification",
          paragraphs: [
            "Let s denote the log won–dollar rate (won per dollar), so that an increase is a depreciation of the won. For each intervention day i and its matched day, we measure the change in s from the minute before the time of the first intervention trade to the close and then over subsequent trading days. We estimate local projections of the form s(t+h) − s(t−) = α(h) + β(h)·I(t) + γ(h)′X(t) + μ(pair) + ε(t+h), where s(t−) is the rate in the minute before the operation, I(t) is net dollar sales in billions of US dollars (zero on matched days), X(t) contains the controls of the reaction function and contemporaneous changes in global variables, and μ(pair) is a fixed effect for each intervention–matched pair [26]. The coefficient β(h) measures the cumulative effect of USD 1 billion of intervention on the exchange rate after h trading days; H1 implies that β(0) is negative.",
            "We estimate β(h) for h = 0 to 20 and, as a check on pre-trends, for h = −5 to −1 using the change from s(t+h) to s(t−1). Standard errors are clustered by calendar month to allow for serial correlation in overlapping horizons and for the clustering of interventions in periods of stress. For the 164 intervention days without time stamps we use the change from the previous close; dropping these days altogether makes little difference.",
          ],
        },
        {
          id: "strategy-alt",
          heading: "6.3 Alternative Estimators and Sterilisation Tests",
          paragraphs: [
            "We compare our main estimate with four alternatives. The first two are naive ordinary least squares regressions of daily exchange-rate changes on intervention for all trading days, without and with controls. The third uses the intraday window from the minute before to 30 minutes after the first intervention trade, scaled by the share of the day's intervention executed within that window; this estimate is least contaminated by news arriving later in the day. The fourth follows Kearns and Rigobon {5} and identifies the effect through heteroskedasticity, exploiting the large shifts in the variance of intervention between the 2005–2007, 2008–2009 and later regimes shown in Table 1.",
            "To test H4 we estimate the response of domestic monetary aggregates and money-market rates to intervention. At monthly frequency we regress the change in the Bank of Korea's net domestic assets on the change in its net foreign assets, both scaled by the lagged stock of reserve money; a coefficient of −1 indicates full sterilisation [19][20]. We also regress net MSB issuance and net repurchase absorption on net dollar purchases in the same month. At daily frequency we estimate local projections, analogous to the exchange-rate specification, for the spread of the call rate over the policy rate and for short-term yields.",
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
          id: "results-impact",
          heading: "7.1 Impact Effects",
          paragraphs: [
            "Table 3 reports estimates of the same-day effect of intervention. The naive regressions in columns (1) and (2) produce small coefficients of −0.07 and −0.11 percent per USD 1 billion of dollar sales, the first statistically insignificant. These estimates are severely biased towards zero: because the authorities sell dollars when the won is depreciating, the intervention variable is positively correlated with the unobserved pressure on the exchange rate.",
            "Our main estimate in column (3), based on matched intervention and non-intervention days, is −0.30 with a standard error of 0.06. An intervention of USD 1 billion therefore moves the won–dollar rate by an average of 0.3 percent in the opposite direction to the market pressure on the day of intervention, confirming H1. At the average exchange rate over the sample of about 1,130 won per dollar, this corresponds to roughly 3.4 won. The intraday estimate in column (4), −0.27, is very similar, indicating that most of the same-day effect materialises within 30 minutes of the operation. Identification through heteroskedasticity in column (5) yields −0.33, again close to the main estimate but less precise.",
            "The magnitude is economically meaningful but modest relative to typical daily movements. The standard deviation of daily changes in the won–dollar rate is about 0.6 percent over the sample, and the mean intervention of USD 0.41 billion would offset about 0.12 percent, or one-fifth of a standard deviation. Large operations of USD 2–4 billion, such as those undertaken in October 2008 and March 2020, would have moved the rate by between 0.6 and 1.2 percent, which is consistent with dealer reports at the time. Per dollar of intervention, our estimate is smaller than those of Kearns and Rigobon {5} for Australia, but Korea's foreign-exchange market is considerably larger relative to the size of individual operations; scaled by average daily turnover, the effects are of similar magnitude.",
          ],
          tables: [
            {
              id: "table-3",
              caption: "Table 3. Same-day effect of intervention on the won–dollar exchange rate",
              columns: ["", "(1) OLS", "(2) OLS, controls", "(3) Matched event study", "(4) Intraday, 30 min", "(5) Heteroskedasticity"],
              rows: [
                ["Net dollar sales (USD bn)", "−0.07", "−0.11**", "−0.30***", "−0.27***", "−0.33***"],
                ["", "(0.04)", "(0.04)", "(0.06)", "(0.05)", "(0.09)"],
                ["Lagged exchange-rate change", "", "0.08**", "0.02", "", "0.07*"],
                ["", "", "(0.03)", "(0.03)", "", "(0.04)"],
                ["Change in VIX", "", "0.05***", "0.04***", "0.01", "0.05***"],
                ["", "", "(0.01)", "(0.01)", "(0.01)", "(0.01)"],
                ["Global controls", "No", "Yes", "Yes", "Yes", "Yes"],
                ["Pair fixed effects", "No", "No", "Yes", "No", "No"],
                ["Observations", "4,214", "4,209", "2,076", "874", "4,209"],
              ],
              note: "Note: Dependent variable is the change in the log won–dollar rate (percent; positive values denote depreciation of the won). Net dollar sales are positive when the authorities sell dollars. Column (3) measures the change from the minute before the first intervention trade to the close; column (4) uses the window from the minute before to 30 minutes after. Standard errors clustered by month in parentheses. *** p<0.01, ** p<0.05, * p<0.1.",
            },
          ],
        },
        {
          id: "results-persistence",
          heading: "7.2 Persistence",
          paragraphs: [
            "Figure 1 plots the cumulative effect β(h) from five days before to 20 trading days after intervention. There is no evidence of differential pre-trends: the coefficients for h = −5 to −1 are small and statistically insignificant, which supports the comparability of intervention and matched days. After the impact effect of −0.30, the cumulative effect decays gradually, to −0.20 after five trading days and −0.10 after ten. The effect remains statistically significant at the 1 percent level through day 5 and at the 5 percent level until day 9, with the 95 percent confidence interval including zero from day 10 onwards. Effects therefore persist for 5 to 10 trading days, confirming H2, and are close to zero after about three weeks.",
            "The gradual decay is consistent with the portfolio-balance interpretation in Section 4. Intervention absorbs an imbalance that intermediaries would otherwise have had to warehouse, but over subsequent days new flows arrive and dealers rebalance their positions, so that the exchange rate moves back towards the path implied by fundamentals and capital flows. A purely informational effect would be expected either to persist (if the signal is about permanent policy changes) or to disappear immediately (if the signal is not credible); the pattern we observe is more consistent with temporary relief of balance-sheet constraints [15][16]. It also implies that intervention is better suited to smoothing than to changing the level of the exchange rate.",
            "We also examine whether interventions on consecutive days have cumulative effects. Episodes in which the authorities intervened on three or more consecutive days in the same direction, of which there are 146, produced cumulative effects per USD 1 billion that were slightly smaller than isolated interventions (−0.26 compared with −0.32 on the day), but larger in total because of their scale. This suggests modest diminishing returns within episodes, which may reflect market participants learning to anticipate continued operations.",
          ],
          figures: [
            {
              id: "figure-1",
              caption: "Figure 1. Cumulative effect of USD 1 billion of dollar sales on the won–dollar rate",
              kind: "line",
              xLabels: ["−5", "−4", "−3", "−2", "−1", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20"],
              yLabel: "Percent change in won–dollar rate",
              series: [
                {
                  name: "Matched event-study estimate",
                  values: [0.02, -0.01, 0.03, 0.01, 0.0, -0.3, -0.28, -0.26, -0.24, -0.22, -0.2, -0.18, -0.16, -0.14, -0.12, -0.1, -0.08, -0.07, -0.05, -0.04, -0.03, -0.03, -0.02, -0.02, -0.01, -0.01],
                  lower: [-0.06, -0.09, -0.05, -0.07, -0.08, -0.41, -0.39, -0.37, -0.35, -0.33, -0.31, -0.28, -0.26, -0.24, -0.22, -0.2, -0.18, -0.17, -0.15, -0.14, -0.13, -0.13, -0.12, -0.12, -0.11, -0.11],
                  upper: [0.1, 0.07, 0.11, 0.09, 0.08, -0.19, -0.17, -0.15, -0.13, -0.11, -0.09, -0.08, -0.06, -0.04, -0.02, 0.0, 0.02, 0.03, 0.05, 0.06, 0.07, 0.07, 0.08, 0.08, 0.09, 0.09],
                },
              ],
              marker: 4,
              note: "Note: Local-projection estimates of β(h) with 95 percent confidence intervals; horizon in trading days relative to the intervention day. Negative values denote appreciation of the won relative to matched non-intervention days. Pre-event coefficients are measured relative to the close of day −1.",
            },
          ],
        },
        {
          id: "results-sterilisation",
          heading: "7.3 Sterilisation and Money-Market Conditions",
          paragraphs: [
            "Table 4 reports the evidence on sterilisation. At monthly frequency, the coefficient on the change in net foreign assets in the net domestic assets regression is −0.92 with a standard error of 0.05, indicating that about 92 percent of the reserve-money effect of intervention is offset within the month. Most of this offset is achieved through MSBs: each USD 1 billion of net dollar purchases — roughly KRW 1.13 trillion at the average exchange rate — is matched by KRW 0.97 trillion of net MSB issuance in the same month, with net repurchase operations absorbing a further KRW 0.12 trillion. Reserve-money growth does not respond significantly to intervention.",
            "Daily money-market rates confirm that sterilisation is largely effective in neutralising the monetary effects of intervention, as predicted by H4. The spread of the overnight call rate over the policy rate rises by only 0.4 basis points on the day of a USD 1 billion purchase and by 0.3 basis points on average over the following ten days, neither of which is statistically significant. The 91-day certificate of deposit rate and the 3-year Treasury yield likewise show no detectable response. The only marginally significant effect is on the 1-year MSB yield, which rises by about 1.1 basis points over five days, consistent with the additional supply of sterilisation securities at that maturity putting mild upward pressure on yields. These effects are small relative to the typical daily volatility of short-term rates.",
            "Sterilisation is not costless, however. Because MSB yields generally exceeded the returns on the Bank of Korea's dollar reserves for much of the sample, particularly in 2005–2008 and 2010–2014, reserve accumulation generated quasi-fiscal carrying costs. Using the yield differential between 1-year MSBs and 1-year US Treasury bills, we estimate that the cumulative carrying cost of sterilising the net purchases in Table 1 amounted to between 0.1 and 0.2 percent of GDP per year in the periods of heaviest accumulation, falling towards zero when the interest differential narrowed after 2015.",
          ],
          tables: [
            {
              id: "table-4",
              caption: "Table 4. Sterilisation and the response of domestic monetary conditions",
              columns: ["Outcome", "Horizon", "Estimate", "Std. error", "Observations"],
              rows: [
                ["Sterilisation coefficient (ΔNDA on ΔNFA)", "Same month", "−0.92***", "(0.05)", "204"],
                ["Net MSB issuance (KRW trn per USD 1 bn purchased)", "Same month", "0.97***", "(0.11)", "204"],
                ["Net repurchase absorption (KRW trn per USD 1 bn)", "Same month", "0.12*", "(0.07)", "204"],
                ["Reserve-money growth (pp per USD 1 bn)", "One month", "0.08", "(0.11)", "204"],
                ["Call rate minus policy rate (bp per USD 1 bn)", "Day 0", "0.4", "(0.6)", "2,076"],
                ["Call rate minus policy rate (bp per USD 1 bn)", "Days 1–10, average", "0.3", "(0.5)", "2,076"],
                ["91-day CD rate (bp per USD 1 bn)", "Days 0–5", "0.6", "(0.8)", "2,076"],
                ["1-year MSB yield (bp per USD 1 bn)", "Days 0–5", "1.1*", "(0.6)", "2,076"],
                ["3-year KTB yield (bp per USD 1 bn)", "Days 0–5", "0.7", "(0.9)", "2,076"],
              ],
              note: "Note: Monthly regressions use 2005–2021 data; NDA and NFA changes are scaled by lagged reserve money. Daily estimates are matched local projections as in Table 3, with intervention signed as net dollar purchases. MSB = monetary stabilisation bond; KTB = Korea Treasury Bond; CD = certificate of deposit. Standard errors (Newey–West for monthly, clustered by month for daily) in parentheses. *** p<0.01, ** p<0.05, * p<0.1.",
            },
          ],
        },
      ],
    },
    {
      id: "heterogeneity",
      heading: "8. Heterogeneity and the Role of Capital Flows",
      paragraphs: [
        "Table 5 examines whether the effectiveness of intervention varies with market conditions, testing H3. Sales of dollars are more effective than purchases, with same-day effects of −0.36 and −0.25 percent per USD 1 billion respectively. One interpretation is that sales, typically undertaken during depreciation pressure, relieve the balance-sheet constraints of dealers at times when those constraints bind most tightly; another is that sales are perceived as a more credible commitment, since the authorities' capacity to sell dollars is limited by reserves while their capacity to buy is not. Interventions on days when the VIX exceeded 30 have effects of −0.42, compared with −0.26 on calmer days, and interventions on days with below-median spot turnover have effects of −0.38, compared with −0.22 on liquid days. Both results are consistent with the view that intervention is most effective when private intermediation capacity is scarce.",
        "Communication matters as well. On the 187 intervention days on which officials made public statements expressing concern about exchange-rate movements, the same-day effect was −0.41, compared with −0.27 on other days. Since statements may themselves be endogenous to the scale of market pressure, we interpret this difference cautiously; it is consistent, however, with the finding of Fratzscher et al. {1} that intervention accompanied by communication is more effective. Effects were somewhat larger before 2015 (−0.33) than afterwards (−0.26), perhaps reflecting the growth of the market and of offshore trading in the NDF market, through which pressures can bypass the onshore market in which the authorities operate.",
        "Figure 2 turns to the capital-flow environment that motivates much of the debate about intervention [7][14]. Using the Forbes and Warnock {25} classification, intervention during capital-flow stops has a same-day effect of −0.39 and a five-day cumulative effect of −0.31, compared with −0.28 and −0.18 in normal periods and −0.21 and −0.10 during inflow surges. Intervention therefore appears most effective, and its effects most persistent, precisely when foreign investors are withdrawing and domestic intermediaries are under the greatest strain. Conversely, intervention to resist appreciation during surges, when large and persistent inflows continually replenish the supply of dollars, has weaker and shorter-lived effects. This asymmetry is consistent with the predictions of models in which intervention relaxes intermediaries' constraints [15][16].",
        "We also examine whether intervention affects capital flows themselves. Foreign net equity purchases over the five days following intervention do not respond significantly to intervention, with a coefficient of 0.02 USD billion per USD 1 billion of dollar sales (standard error 0.04). Foreign bond flows respond slightly positively but insignificantly. We therefore find no evidence that intervention attracts or repels portfolio flows in the short run; its effects operate through the absorption of order flow rather than by changing foreign investors' behaviour.",
      ],
      tables: [
        {
          id: "table-5",
          caption: "Table 5. Heterogeneity in the same-day effect of intervention",
          columns: ["Split", "Group A", "Effect A", "Group B", "Effect B", "p-value of difference"],
          rows: [
            ["Direction", "Dollar sales", "−0.36*** (0.07)", "Dollar purchases", "−0.25*** (0.06)", "0.08"],
            ["Global risk", "VIX above 30", "−0.42*** (0.10)", "VIX at or below 30", "−0.26*** (0.05)", "0.07"],
            ["Market liquidity", "Below-median turnover", "−0.38*** (0.08)", "Above-median turnover", "−0.22*** (0.06)", "0.04"],
            ["Communication", "With official statement", "−0.41*** (0.09)", "Without statement", "−0.27*** (0.06)", "0.09"],
            ["Period", "2005–2014", "−0.33*** (0.07)", "2015–2021", "−0.26*** (0.07)", "0.36"],
            ["Size", "Operation ≥ USD 1 bn", "−0.31*** (0.07)", "Operation < USD 1 bn", "−0.29*** (0.09)", "0.85"],
          ],
          note: "Note: Each row reports matched event-study estimates (as in column 3 of Table 3) estimated separately for the two groups; effects are percent changes in the won–dollar rate per USD 1 billion of net dollar sales on the intervention day. Purchases are signed so that the expected effect is negative. Standard errors clustered by month in parentheses. *** p<0.01, ** p<0.05, * p<0.1.",
        },
      ],
      figures: [
        {
          id: "figure-2",
          caption: "Figure 2. Effect of USD 1 billion of intervention by capital-flow regime",
          kind: "bar",
          xLabels: ["Inflow surge", "Normal", "Capital-flow stop"],
          yLabel: "Percent change in won–dollar rate",
          series: [
            { name: "Day 0", values: [-0.21, -0.28, -0.39] },
            { name: "Cumulative, day 5", values: [-0.1, -0.18, -0.31] },
          ],
          note: "Note: Matched event-study estimates by capital-flow regime, classified following Forbes and Warnock (2012). Intervention is signed so that negative values denote movement in the opposite direction to the prevailing market pressure.",
        },
      ],
    },
    {
      id: "robustness",
      heading: "9. Robustness",
      paragraphs: [
        "Table 6 reports a range of robustness checks on the same-day, five-day and ten-day effects. Excluding the global financial crisis of 2008–2009, when interventions were largest and markets most disorderly, reduces the impact effect only slightly to −0.27. Excluding 2020–2021 leaves it virtually unchanged. Matching each intervention day to three non-intervention days rather than one, or requiring matched days to fall within the same quarter rather than the same year, yields estimates between −0.29 and −0.31. Using the broader intervention measure that includes forward and swap operations raises the estimate to −0.32, suggesting that the spot measure slightly understates the total scale of intervention on some days.",
        "Measuring exchange-rate changes using the offshore NDF rate, which reflects trading after the onshore market closes, yields an impact effect of −0.28 and a similar decay profile, indicating that the effects are not an artefact of onshore market segmentation. Excluding days of monetary policy meetings, US employment reports and Federal Open Market Committee announcements leaves the estimates unchanged. Finally, a placebo test that assigns fictitious interventions to matched days with the same distribution of sizes yields coefficients of −0.01 on the day and 0.02 after five days, neither significant. Taken together, these checks indicate that the main results do not depend on particular periods, matching choices or exchange-rate measures.",
        "A remaining concern is that the authorities may time interventions to coincide with news that they expect to move the market in the desired direction. If so, our estimates would overstate the causal effect. We find no evidence of this: intervention days are no more likely than matched days to coincide with scheduled macroeconomic releases, and the intraday estimate in Table 3, which measures the effect within 30 minutes, is close to the full-day estimate. The 30-minute window is too short for most macroeconomic news to explain the response.",
      ],
      tables: [
        {
          id: "table-6",
          caption: "Table 6. Robustness checks",
          columns: ["Specification", "Day 0", "Day 5", "Day 10", "Events"],
          rows: [
            ["Baseline (Table 3, column 3)", "−0.30***", "−0.20***", "−0.10*", "1,038"],
            ["Excluding 2008–2009", "−0.27***", "−0.18***", "−0.09", "842"],
            ["Excluding 2020–2021", "−0.29***", "−0.19***", "−0.10*", "910"],
            ["Three matched days per event", "−0.31***", "−0.21***", "−0.11**", "1,038"],
            ["Matching within quarter", "−0.29***", "−0.19***", "−0.09", "1,038"],
            ["Including forward and swap operations", "−0.32***", "−0.22***", "−0.11*", "1,071"],
            ["Offshore NDF rate", "−0.28***", "−0.19***", "−0.10*", "1,038"],
            ["Excluding major announcement days", "−0.30***", "−0.20***", "−0.10*", "951"],
            ["Placebo: fictitious interventions", "−0.01", "0.02", "0.01", "1,038"],
          ],
          note: "Note: Matched event-study estimates of the cumulative percent change in the won–dollar rate per USD 1 billion of net dollar sales. Major announcement days are Bank of Korea monetary policy meetings, US employment reports and FOMC announcements. Standard errors clustered by month. *** p<0.01, ** p<0.05, * p<0.1.",
        },
      ],
    },
    {
      id: "discussion",
      heading: "10. Discussion and Policy Implications",
      paragraphs: [
        "Our results have three implications for policy. First, sterilised intervention is an effective but limited instrument. An operation of USD 1 billion moves the won–dollar rate by about 0.3 percent, and the effect dissipates within two weeks. Intervention can therefore smooth exchange-rate movements and counter disorderly market conditions, but cannot sustain a level of the exchange rate that is inconsistent with fundamentals and capital flows without very large and repeated operations. This conclusion is consistent with the authorities' own description of their policy as smoothing operations, and with cross-country evidence that intervention is most successful when it aims to reduce volatility rather than to reverse trends [1][6].",
        "Second, intervention is most effective when it is most needed. Effects are largest and most persistent during periods of global stress, capital-flow stops and thin market liquidity, which are precisely the conditions in which sharp depreciations threaten financial stability through balance-sheet effects on firms and banks with foreign-currency liabilities. This supports the view, articulated in recent work on integrated policy frameworks, that intervention can complement monetary policy when capital flows are volatile and financial frictions are significant [16][22]. It also suggests that the precautionary reserves accumulated during inflow periods have a high value in outflow episodes, which partly justifies the carrying costs of sterilised reserves [21].",
        "Third, sterilisation through MSBs allows intervention to be conducted without compromising the operational target of monetary policy. We find no detectable effect of intervention on the overnight call rate and only a marginal effect on the yield of the securities used for sterilisation. In this sense, Korea has been able to operate intervention and monetary policy as two largely separate instruments, consistent with the two targets, two instruments approach [22]. The costs of this separation are fiscal rather than monetary: carrying costs arise when domestic interest rates exceed foreign ones, and they grow with the stock of sterilised reserves.",
        "These conclusions are subject to caveats. Our estimates are averages over many interventions of moderate size; the effect of very large or announced programmes may differ. Our design identifies the effect of intervention relative to a counterfactual in which the authorities did not intervene on a comparable day, and does not capture any effects of the intervention regime as a whole on market expectations, such as the possibility that a known willingness to intervene stabilises the market even on days without operations. Finally, the increasing role of the offshore market and the ongoing liberalisation of onshore trading hours may alter the effectiveness of intervention in the future. The disclosure of intervention data since 2019 may also have changed how market participants respond, although our estimates for 2020–2021 are similar to those for earlier years.",
      ],
    },
    {
      id: "conclusion",
      heading: "11. Conclusion",
      paragraphs: [
        "This paper has used confidential daily and intraday intervention records for 2005–2021 to estimate the effectiveness of Korea's sterilised foreign-exchange intervention. Comparing intervention days with matched non-intervention days on which pressure on the exchange rate was similar, we find that an intervention of USD 1 billion moves the won–dollar exchange rate by an average of 0.3 percent in the opposite direction to the market pressure on the day of intervention, with effects persisting for 5 to 10 trading days. Effects are larger for dollar sales, during global stress, on illiquid days and during capital-flow stops.",
        "Sterilisation through monetary stabilisation bonds is largely effective in neutralising the monetary effects of intervention. About 92 percent of the reserve-money effect is offset within a month, mainly through MSB issuance, and we find limited detectable effects on domestic money-market conditions. Korea's experience thus suggests that a central bank with a credible inflation target and deep domestic securities markets can use sterilised intervention to smooth exchange-rate movements without compromising monetary control, provided that it accepts the fiscal costs of holding sterilised reserves and recognises that the effects of each operation are temporary.",
      ],
    },
    {
      id: "appendix",
      heading: "Appendix A. Reaction Function and Matching Diagnostics",
      paragraphs: [
        "The probit reaction function is estimated separately for dollar sales and purchases on all 4,209 trading days with complete data. For sales, the marginal effect of a 1 percent depreciation over the previous day is 0.18 (standard error 0.03), and that of a one-point rise in the VIX is 0.012 (0.004); the deviation of the exchange rate from its 20-day moving average and foreign net equity sales also enter significantly. For purchases, the marginal effect of a 1 percent appreciation over the previous day is 0.14 (0.03). Year fixed effects capture shifts in the overall intensity of intervention across the regimes in Table 1. The area under the receiver operating characteristic curve is 0.81 for sales and 0.77 for purchases.",
        "Matching achieves good balance. The standardised mean difference between intervention and matched days is below 0.05 for every variable in Table 2, compared with between 0.15 and 0.42 for the unmatched comparison. Ninety-seven percent of intervention days have a match within 0.02 of their predicted probability; dropping the remaining 3 percent of days with poorer matches changes the main estimate by less than 0.01. Results are also similar when matching on the propensity score alone, without the intraday condition, although the estimate is then slightly smaller (−0.26), consistent with residual same-day pressure biasing the comparison towards zero.",
      ],
    },
  ],
};
