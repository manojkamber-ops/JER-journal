// Vol. 26, No. 4 (October 2021) — full text for an article defined in journal.ts (sample content).
import type { FulltextSpec } from "../paper-spec";

export const fulltext: FulltextSpec = {
  id: "2021-v26-i4-01",
  acknowledgments:
    "We thank seminar participants at Hanyang University, Korea University and the Bank of Korea Economic Research Institute, two anonymous referees and the handling editor for helpful comments. The views expressed are those of the authors and do not necessarily reflect those of the Bank of Korea.",
  dataAvailability:
    "Operation announcements and purchase amounts are taken from Bank of Korea press releases. Daily bond yields were obtained from the Korea Financial Investment Association bond information service and are available to subscribers; code and the constructed event data set are available from the corresponding author.",
  editorialNote:
    "Hyun-Jin Kim and Jiwon Lee find that the Bank of Korea's pandemic asset purchases lowered 10-year treasury yields by about 26 basis points over the first six months of operations, with smaller but significant effects on corporate bond yields, and that portfolio-balance effects dominated signalling, especially at long maturities.",
  refs: [
    /* 1 */ "Gagnon, J., Raskin, M., Remache, J., & Sack, B. (2011). The financial market effects of the Federal Reserve's large-scale asset purchases. International Journal of Central Banking, 7(1), 3–43.",
    /* 2 */ "Krishnamurthy, A., & Vissing-Jorgensen, A. (2011). The effects of quantitative easing on interest rates: Channels and implications for policy. Brookings Papers on Economic Activity, 2011(2), 215–287.",
    /* 3 */ "Joyce, M. A. S., Lasaosa, A., Stevens, I., & Tong, M. (2011). The financial market impact of quantitative easing in the United Kingdom. International Journal of Central Banking, 7(3), 113–161.",
    /* 4 */ "D'Amico, S., & King, T. B. (2013). Flow and stock effects of large-scale treasury purchases: Evidence on the importance of local supply. Journal of Financial Economics, 108(2), 425–448.",
    /* 5 */ "Bauer, M. D., & Rudebusch, G. D. (2014). The signaling channel for Federal Reserve bond purchases. International Journal of Central Banking, 10(3), 233–289.",
    /* 6 */ "Vayanos, D., & Vila, J.-L. (2021). A preferred-habitat model of the term structure of interest rates. Econometrica, 89(1), 77–112.",
    /* 7 */ "Gertler, M., & Karadi, P. (2015). Monetary policy surprises, credit costs, and economic activity. American Economic Journal: Macroeconomics, 7(1), 44–76.",
    /* 8 */ "Swanson, E. T. (2021). Measuring the effects of Federal Reserve forward guidance and asset purchases on financial markets. Journal of Monetary Economics, 118, 32–53.",
    /* 9 */ "Gürkaynak, R. S., Sack, B., & Swanson, E. T. (2005). Do actions speak louder than words? The response of asset prices to monetary policy actions and statements. International Journal of Central Banking, 1(1), 55–93.",
    /* 10 */ "Kuttner, K. N. (2001). Monetary policy surprises and interest rates: Evidence from the Fed funds futures market. Journal of Monetary Economics, 47(3), 523–544.",
    /* 11 */ "Eser, F., & Schwaab, B. (2016). Evaluating the impact of unconventional monetary policy measures: Empirical evidence from the ECB's Securities Markets Programme. Journal of Financial Economics, 119(1), 147–167.",
    /* 12 */ "Hamilton, J. D., & Wu, J. C. (2012). The effectiveness of alternative monetary policy tools in a zero lower bound environment. Journal of Money, Credit and Banking, 44(s1), 3–46.",
    /* 13 */ "Greenwood, R., & Vayanos, D. (2014). Bond supply and excess bond returns. Review of Financial Studies, 27(3), 663–713.",
    /* 14 */ "Christensen, J. H. E., & Rudebusch, G. D. (2012). The response of interest rates to US and UK quantitative easing. Economic Journal, 122(564), F385–F414.",
    /* 15 */ "Bernanke, B. S. (2020). The new tools of monetary policy. American Economic Review, 110(4), 943–983.",
    /* 16 */ "Fratzscher, M., Lo Duca, M., & Straub, R. (2018). On the international spillovers of US quantitative easing. Economic Journal, 128(608), 330–377.",
    /* 17 */ "Bhattarai, S., Chatterjee, A., & Park, W. Y. (2021). Effects of US quantitative easing on emerging market economies. Journal of Economic Dynamics and Control, 122, 104031.",
    /* 18 */ "Arslan, Y., Drehmann, M., & Hofmann, B. (2020). Central bank bond purchases in emerging market economies. BIS Bulletin No. 20. Basel: Bank for International Settlements.",
    /* 19 */ "Hartley, J., & Rebucci, A. (2020). An event study of COVID-19 central bank quantitative easing in advanced and emerging economies. NBER Working Paper No. 27339. Cambridge, MA: National Bureau of Economic Research.",
    /* 20 */ "Rogers, J. H., Scotti, C., & Wright, J. H. (2014). Evaluating asset-market effects of unconventional monetary policy: A multi-country review. Economic Policy, 29(80), 749–799.",
    /* 21 */ "Wright, J. H. (2012). What does monetary policy do to long-term interest rates at the zero lower bound? Economic Journal, 122(564), F447–F466.",
    /* 22 */ "Gilchrist, S., Wei, B., Yue, V. Z., & Zakrajšek, E. (2020). The Fed takes on corporate credit risk: An analysis of the efficacy of the SMCCF. NBER Working Paper No. 27809. Cambridge, MA: National Bureau of Economic Research.",
    /* 23 */ "Adrian, T., Crump, R. K., & Moench, E. (2013). Pricing the term structure with linear regressions. Journal of Financial Economics, 110(1), 110–138.",
    /* 24 */ "Kim, D. H., & Wright, J. H. (2005). An arbitrage-free three-factor term structure model and the recent behavior of long-term yields and distant-horizon forward rates. Finance and Economics Discussion Series 2005-33. Washington, DC: Board of Governors of the Federal Reserve System.",
    /* 25 */ "Krishnamurthy, A., & Vissing-Jorgensen, A. (2012). The aggregate demand for Treasury debt. Journal of Political Economy, 120(2), 233–267.",
    /* 26 */ "Duffie, D. (2020). Still the world's safe haven? Redesigning the U.S. Treasury market after the COVID-19 crisis. Hutchins Center Working Paper No. 62. Washington, DC: Brookings Institution.",
    /* 27 */ { jer: "2021-v26-i1-02" },
  ],
  body: [
    {
      id: "introduction",
      heading: "1. Introduction",
      paragraphs: [
        "The COVID-19 pandemic pushed many emerging-market central banks into territory that had previously been reserved for the Federal Reserve, the Bank of England, the European Central Bank and the Bank of Japan. Between March and June 2020, more than a dozen emerging-market central banks announced purchases of government or private securities in secondary markets [18][19]. The Bank of Korea was among them. Alongside two cuts in the base rate, which brought it to a record low of 0.50 percent in May 2020, it began a programme of outright purchases of Korea Treasury Bonds (KTBs) and expanded its repurchase operations to a wider range of collateral and counterparties. For a central bank that had never before used its balance sheet as an independent policy instrument, this was a significant departure.",
        "Whether asset purchases work in emerging markets is far from obvious. The evidence from advanced economies, summarised by Bernanke {15}, indicates that the first rounds of quantitative easing (QE) lowered long-term government bond yields by economically meaningful amounts [1][2][3]. But advanced-economy programmes were conducted at the effective lower bound, in deep and liquid markets for safe assets, and by central banks with long records of credible inflation targeting. Emerging-market purchases were launched at positive policy rates, in markets that are smaller and more exposed to foreign capital flows, and in some cases by central banks whose commitment to price stability is less firmly established. Purchases might be less effective because foreign investors sell what the central bank buys, or more effective because a small market is more sensitive to changes in the supply of duration.",
        "This paper evaluates the transmission of the Bank of Korea's programme using an event-study approach around purchase-operation announcements. We assemble the 11 announcements of outright KTB purchases made between 19 March and 17 September 2020, together with daily yields on government bonds of maturities from one to thirty years, on corporate bonds of different ratings and on bank debentures. We measure the two-day change in yields around each announcement and cumulate the effects over the first six months of operations. To separate the channels through which purchases work, we decompose yield changes into changes in expected future short rates, which capture the signalling channel, and changes in term premia, which capture the portfolio-balance channel [5][14].",
        "We find that the programme reduced 10-year KTB yields by approximately 26 basis points cumulatively over its first six months, with smaller but statistically significant effects on corporate bond yields: about 11 basis points for three-year AA− bonds and 7 basis points for three-year BBB− bonds. The effects rise with maturity, from 9 basis points at one year to 31 basis points at thirty years. Decomposing the response, we find that portfolio-balance effects dominate the signalling channel, particularly for longer-maturity assets: about 70 percent of the 10-year response reflects a decline in the term premium, while at the three-year maturity the two channels contribute roughly equally.",
        "These magnitudes are smaller than the largest effects found for the first US and UK programmes, but similar in scale to estimates for later advanced-economy rounds and for emerging-market purchases during the pandemic once announcement sizes are taken into account [8][19][20]. Scaled by the size of purchases relative to outstanding marketable government debt, the Korean estimates are close to those reported for the euro area and Japan. Our findings are therefore consistent with evidence from advanced-economy asset-purchase programmes and suggest that bond purchases can be an effective tool for emerging-market central banks whose domestic bond markets are deep enough to make duration a scarce asset.",
        "The rest of the paper is organised as follows. Section 2 describes the programme and its institutional setting. Section 3 reviews related literature and Section 4 sets out a simple framework for the channels of transmission. Section 5 describes the data and Section 6 the empirical strategy. Section 7 presents the main results, Section 8 examines mechanisms and heterogeneity, Section 9 reports robustness checks, Section 10 discusses implications for policy and Section 11 concludes.",
      ],
    },
    {
      id: "background",
      heading: "2. The Bank of Korea's Asset Purchase Programme",
      paragraphs: [
        "Before 2020, the Bank of Korea conducted monetary policy almost exclusively by setting the base rate, the rate on seven-day repurchase agreements, and steering the overnight call rate towards it through open-market operations in Monetary Stabilisation Bonds and repos. Outright purchases of government bonds were legally permitted under the Bank of Korea Act but had been used only occasionally and in small amounts to manage liquidity. The base rate stood at 1.25 percent in February 2020, already low by historical standards after cuts in 2019.",
        "The onset of the pandemic in Korea in late February 2020 coincided with a global dash for cash. Foreign investors sold Korean equities heavily, the won depreciated sharply against the dollar, and yields on KTBs rose in mid-March despite the deteriorating outlook, mirroring the dislocation in the US Treasury market described by Duffie {26}. Spreads on corporate bonds and commercial paper widened, and several securities firms faced margin calls on overseas derivatives positions. On 16 March the Monetary Policy Board cut the base rate by 50 basis points in an emergency meeting, and on 19 March the Bank announced its first outright purchase of KTBs, of KRW 1.5 trillion, to stabilise the bond market.",
        "Subsequent operations followed a common pattern. The Bank announced, usually one to several days in advance, the size of an outright purchase, the eligible issues and the date of the auction, and purchases were conducted through competitive auctions among primary dealers. Purchases were concentrated in benchmark issues with remaining maturities of three to twenty years. In addition, on 26 March the Bank introduced unlimited full-allotment repo operations for three months, and in April it extended eligible collateral to bank debentures and certain public-enterprise bonds. In September 2020, when the government's third supplementary budget greatly expanded KTB issuance, the Bank announced that it would purchase KRW 5 trillion of KTBs by the end of the year to offset the effect of additional supply on yields.",
        "Table 1 lists the 11 outright-purchase announcements in our sample period, the first six months of operations. Cumulative announced purchases amounted to KRW 11.0 trillion, about 1.6 percent of marketable KTBs outstanding at the end of 2019. This is a modest programme by advanced-economy standards: the first US large-scale asset purchase programme was equivalent to roughly 22 percent of marketable Treasury debt plus agency securities [1]. As we show below, however, the yield response per unit of purchases was substantial. The table also reports the two-day change in the 10-year KTB yield around each announcement, which is negative in nine of the 11 cases.",
      ],
      tables: [
        {
          id: "table-1",
          caption: "Table 1. Outright KTB purchase announcements, March–September 2020",
          columns: ["No.", "Announcement date", "Amount (KRW trillion)", "Eligible maturities", "Δ 10-year yield (bp)"],
          rows: [
            ["1", "19 Mar 2020", "1.5", "3–20 years", "−6.8"],
            ["2", "26 Mar 2020", "1.0", "3–10 years", "−4.9"],
            ["3", "9 Apr 2020", "1.0", "5–20 years", "−3.6"],
            ["4", "23 Apr 2020", "0.5", "3–10 years", "−1.4"],
            ["5", "14 May 2020", "1.0", "5–20 years", "−2.7"],
            ["6", "28 May 2020", "0.5", "3–10 years", "0.6"],
            ["7", "18 Jun 2020", "1.0", "10–20 years", "−2.3"],
            ["8", "16 Jul 2020", "0.5", "5–10 years", "−0.9"],
            ["9", "20 Aug 2020", "1.0", "10–30 years", "−1.8"],
            ["10", "10 Sep 2020", "2.0", "3–20 years", "−3.1"],
            ["11", "17 Sep 2020", "1.0", "5–30 years", "0.3"],
            ["Total", "", "11.0", "", "−26.6"],
          ],
          note: "Note: Amounts are announced purchase sizes; the 10 September announcement is the first tranche of the KRW 5 trillion year-end commitment. The yield change is the change in the benchmark 10-year KTB yield from the close of the day before the announcement to the close of the day after.",
        },
      ],
    },
    {
      id: "literature",
      heading: "3. Related Literature",
      paragraphs: [
        "A large literature uses high-frequency and daily event studies to measure the effects of central bank announcements on asset prices. Kuttner {10} and Gürkaynak, Sack and Swanson {9} show how to isolate the surprise component of conventional policy decisions, and Gertler and Karadi {7} use such surprises to trace effects on credit costs. For unconventional policy, Gagnon et al. {1} find that announcements of the Federal Reserve's first purchase programme reduced 10-year Treasury yields by about 90 basis points, and Joyce et al. {3} find a reduction of about 100 basis points in UK gilt yields. Krishnamurthy and Vissing-Jorgensen {2} emphasise that effects differ across assets according to which channels are active, and Swanson {8} separates forward-guidance and asset-purchase factors in US data. Rogers, Scotti and Wright {20} and Wright {21} compare effects across the US, UK, euro area and Japan.",
        "The channels of transmission have been studied using term-structure models and cross-sectional variation in purchases. Bauer and Rudebusch {5} argue that a substantial part of the US yield response reflected signals about the path of policy rates, whereas Christensen and Rudebusch {14} find that UK responses mainly reflected lower term premia. D'Amico and King {4} show that purchases had larger effects on the yields of the specific securities purchased, evidence of local supply effects consistent with preferred-habitat models [6][13]. Hamilton and Wu {12} quantify how changes in the maturity structure of government debt held by the public affect term premia, and Krishnamurthy and Vissing-Jorgensen {25} document a convenience premium on safe government debt. Eser and Schwaab {11} provide related evidence for the ECB's purchases of sovereign debt under stress.",
        "Evidence on emerging markets has, until recently, concerned the spillover effects of advanced-economy QE. Fratzscher, Lo Duca and Straub {16} and Bhattarai, Chatterjee and Park {17} show that US purchases lowered emerging-market bond yields and raised capital inflows. The pandemic produced the first wave of domestic purchases in emerging economies. Arslan, Drehmann and Hofmann {18} document announcement effects across a sample of emerging-market central banks, and Hartley and Rebucci {19} find that emerging-market announcements lowered 10-year yields by more on impact than advanced-economy announcements. These cross-country studies typically examine only the first announcement in each country. We study the full sequence of operations in a single country, which allows us to cumulate effects, examine their persistence and decompose them by channel.",
        "Our paper also relates to studies of Korean monetary transmission. Earlier JER work examines how household balance sheets shape the consumption response to rate cuts [27], and finds that transmission through the household sector is weaker where debt service burdens are high. Our results show that the bond market provides a complementary channel through which the Bank of Korea can influence financial conditions when the base rate approaches its effective floor, and that this channel operates mainly through term premia rather than expectations of future policy rates.",
      ],
    },
    {
      id: "framework",
      heading: "4. Channels of Transmission",
      paragraphs: [
        "It is useful to write the yield on an n-period bond as the sum of two components: the average expected short-term rate over the life of the bond and a term premium that compensates investors for bearing duration and other risks. Asset purchases can lower long-term yields by reducing either component. The signalling channel operates on the first: purchases may be interpreted as a commitment to keep policy rates low for longer, or may reveal information about the central bank's assessment of the economy, lowering the expected path of short rates [5][21]. The portfolio-balance channel operates on the second: when the central bank removes duration from private portfolios, investors with preferences for particular maturities, or with limited risk-bearing capacity, require a lower premium to hold the remaining supply [6][13].",
        "The two channels have different testable implications. Signalling effects should be largest at intermediate maturities, where expectations of policy rates over the next few years matter most, and should be visible in instruments that directly price expected policy rates, such as overnight index swaps. Portfolio-balance effects should rise with maturity, because purchases remove more duration risk per won at the long end, and should be larger for the specific issues and maturity segments purchased, an implication of local supply effects [4]. They should also spill over to close substitutes such as high-grade corporate bonds and bank debentures, more than to lower-rated bonds whose prices are driven mainly by credit risk [2].",
        "Three hypotheses follow. First, purchase announcements lower KTB yields, with effects increasing in maturity. Second, the decline in long-term yields reflects mainly a fall in term premia rather than in expected short rates. Third, effects on corporate bond yields are positive in sign but smaller than effects on government yields, and smaller for lower-rated issuers. In an emerging-market context, a further consideration is the exchange rate: if purchases signal monetary easing, they may weaken the won and prompt foreign investors to sell KTBs, partially offsetting the effect on yields. We examine this possibility by studying exchange-rate and foreign-flow responses in Section 8.",
      ],
    },
    {
      id: "data",
      heading: "5. Data",
      paragraphs: [],
      subsections: [
        {
          id: "data-announcements",
          heading: "5.1 Announcements",
          paragraphs: [
            "We compile all Bank of Korea press releases announcing outright purchases of KTBs between March and September 2020, the first six months of operations. Each release states the purchase amount, the eligible issues, and the auction date. We date each event by the release, which was issued after the close of the bond market on the business day before the announcement date shown in Table 1 in all but two cases; for those two cases, the release was issued during trading hours and we treat that day as the announcement date. We exclude announcements of repo operations, which are analysed separately in Section 8, and the results of auctions, which contained little new information because the amounts had been announced in advance.",
            "Four announcements coincided with other monetary policy news. The announcement of 19 March came three days after the emergency rate cut; that of 28 May came on the day of the Monetary Policy Board meeting at which the base rate was reduced to 0.50 percent; and those of 26 March and 10 September were accompanied by broader packages of liquidity measures or statements about the scale of future purchases. We retain all four in the main sample but show in Section 9 that excluding them, or controlling for the surprise component of the rate decision, does not change our conclusions.",
          ],
        },
        {
          id: "data-yields",
          heading: "5.2 Yields and Other Asset Prices",
          paragraphs: [
            "Daily closing yields on benchmark KTBs with maturities of one, three, five, ten, twenty and thirty years come from the Korea Financial Investment Association. For corporate credit we use yields on three-year unsecured corporate bonds rated AA− and BBB−, and on three-year bank debentures rated AAA, all of which are compiled from dealer quotes by the same source. We also collect overnight index swap (OIS) rates at one- and two-year horizons, the KOSPI equity index, the won–dollar exchange rate, net foreign purchases of KTBs, and the 10-year US Treasury yield, which we use as a control for global shocks.",
            "Table 2 summarises daily yield changes in our sample period. Yields were considerably more volatile in March and April 2020 than in the summer, which is why our inference accounts for time-varying volatility. On announcement days, the average two-day change in the 10-year yield was −2.4 basis points, compared with an average of +0.3 basis points on other days; the standard deviation of yield changes on non-announcement days was about 4.6 basis points. Corporate bond yields moved less on announcement days, but their average changes were also negative.",
          ],
          tables: [
            {
              id: "table-2",
              caption: "Table 2. Two-day yield changes on announcement and non-announcement days, March–September 2020 (basis points)",
              columns: ["Series", "Announcement days: mean", "Other days: mean", "Other days: std. dev.", "Observations (ann./other)"],
              rows: [
                ["KTB 3-year", "−1.3", "0.1", "3.8", "11 / 118"],
                ["KTB 5-year", "−1.8", "0.2", "4.1", "11 / 118"],
                ["KTB 10-year", "−2.4", "0.3", "4.6", "11 / 118"],
                ["KTB 20-year", "−2.6", "0.3", "4.5", "11 / 118"],
                ["Corporate AA− 3-year", "−1.0", "0.0", "3.2", "11 / 118"],
                ["Corporate BBB− 3-year", "−0.6", "0.1", "3.9", "11 / 118"],
                ["Bank debenture AAA 3-year", "−1.1", "0.0", "3.4", "11 / 118"],
                ["US Treasury 10-year", "−0.4", "−0.2", "6.9", "11 / 118"],
              ],
              note: "Note: Changes from the close of day t−1 to the close of day t+1. Non-announcement days exclude the two business days around each announcement and Monetary Policy Board meetings.",
            },
          ],
        },
      ],
    },
    {
      id: "strategy",
      heading: "6. Empirical Strategy",
      paragraphs: [
        "Our baseline is a daily event-study regression. For each asset, we estimate Δy_t = α + β·A_t + γ·ΔUS_t + δ·M_t + ε_t, where Δy_t is the two-day change in the yield from the close of day t−1 to the close of day t+1, A_t is an indicator for purchase announcements, ΔUS_t is the corresponding change in the 10-year US Treasury yield, and M_t indicates Monetary Policy Board meeting days. The coefficient β measures the average announcement effect, and the cumulative effect over the first six months is 11β, the effect per announcement times the number of announcements. The regression is estimated on all trading days between 2 March and 30 September 2020, using non-overlapping two-day windows.",
      ],
      subsections: [
        {
          id: "identification",
          heading: "6.1 Identification",
          paragraphs: [
            "The key assumption is that, within the two-day window, yield changes on announcement days are driven by the announcement rather than by other news. Daily data are noisier than intraday data, and the narrow window cannot rule out coincident news, but intraday KTB data are not consistently available for our sample and the release times are not always recorded precisely. The two-day window also allows for some delay in the incorporation of announcements, which were often released after the market close. We control for global news through the US yield and show in Section 9 that results are similar with one-day and three-day windows and with additional controls.",
            "A second concern is that announcements were partly anticipated. The Bank's first announcement was a surprise, but once the programme was established, market participants may have expected further purchases. Anticipation biases event-study estimates towards zero, because part of the effect is priced before the announcement. Our estimates are therefore best viewed as lower bounds on the total effect of the programme, as in the advanced-economy literature [1][20].",
          ],
        },
        {
          id: "decomposition",
          heading: "6.2 Decomposition by Channel",
          paragraphs: [
            "To separate signalling from portfolio-balance effects, we fit an affine term-structure model to monthly and daily KTB yields using the regression-based approach of Adrian, Crump and Moench {23}, estimated on data from 2005 to 2019. The model decomposes each yield into an expected average short rate and a term premium. We then estimate the event-study regression separately for each component. Because model-implied expectations can be distorted by small-sample bias, we also use survey forecasts of the base rate, OIS rates at one- and two-year horizons, and an alternative three-factor model in the spirit of Kim and Wright {24}. Following Bauer and Rudebusch {5}, we treat changes in the expected component as an upper bound on the signalling effect, because the model may attribute some changes in term premia to expectations.",
            "To test for local supply effects, we follow D'Amico and King {4} and compare yield changes on purchase-eligible issues with changes on ineligible issues of similar maturity on announcement days. Under the portfolio-balance channel with imperfect substitutability across issues, yields on eligible issues should fall more than those of close substitutes. Under pure signalling, all issues of similar maturity should move together.",
          ],
        },
        {
          id: "inference",
          heading: "6.3 Inference",
          paragraphs: [
            "With only 11 events, inference requires care. We report heteroskedasticity-robust standard errors and, as a check, p-values from a permutation test that compares the cumulative effect with the distribution of cumulative changes on 11 randomly drawn non-announcement days, repeated 10,000 times. To account for the higher volatility in March and April 2020, we also estimate a version with GARCH(1,1) errors. Our conclusions are robust to all three approaches.",
          ],
        },
      ],
    },
    {
      id: "results",
      heading: "7. Results",
      paragraphs: [
        "We first report the effects on government bond yields along the curve, then turn to corporate bonds and other assets, and finally decompose the government-bond responses into their signalling and portfolio-balance components.",
      ],
      subsections: [
        {
          id: "results-ktb",
          heading: "7.1 Government Bond Yields",
          paragraphs: [
            "Table 3 reports the estimated effect per announcement and the cumulative effect for KTBs across the maturity spectrum. The average announcement lowered the 10-year yield by 2.4 basis points, implying a cumulative reduction of about 26 basis points over the first six months of operations (11 × 2.4 = 26.4). The effects increase monotonically with maturity: the cumulative reduction is 9 basis points at one year, 14 at three years, 19 at five years, 26 at ten years, 29 at twenty years and 31 at thirty years. All estimates except the one-year effect are significant at the 1 percent level, and the permutation p-values tell the same story.",
            "Figure 1 plots the cumulative change in the 10-year yield attributable to announcements, adding the estimated effect of each successive event. The largest effects came from the first two announcements in March, which together lowered the 10-year yield by about 12 basis points. Effects were smaller in April–August, when market functioning had normalised, and increased again with the September announcements, which were explicitly designed to offset the additional supply of KTBs created by the supplementary budget. The pattern is consistent with the view that purchases are most effective when markets are dysfunctional and when they are large relative to expected net supply.",
            "These estimates should be read against the backdrop of yield movements in 2020. The 10-year KTB yield ended September 2020 at a level only modestly below its February level, and rose later in the year as issuance increased and global yields recovered. Our estimates imply that, without the purchases, the yield would have been about 26 basis points higher than it was, other things equal. Relative to the stock of marketable KTBs, the programme amounted to 1.6 percent; scaling the 10-year effect accordingly gives about 16 basis points per 1 percent of debt purchased, at the upper end of advanced-economy estimates [1][3][20].",
          ],
          tables: [
            {
              id: "table-3",
              caption: "Table 3. Effects of purchase announcements on KTB yields",
              columns: ["Maturity", "Effect per announcement (bp)", "Std. error", "Cumulative effect (bp)", "Permutation p-value", "R²"],
              rows: [
                ["1-year", "−0.8*", "(0.4)", "−8.8", "0.071", "0.08"],
                ["3-year", "−1.3***", "(0.4)", "−14.3", "0.004", "0.15"],
                ["5-year", "−1.7***", "(0.5)", "−18.7", "0.003", "0.18"],
                ["10-year", "−2.4***", "(0.6)", "−26.4", "0.001", "0.22"],
                ["20-year", "−2.6***", "(0.7)", "−28.6", "0.002", "0.21"],
                ["30-year", "−2.8***", "(0.8)", "−30.8", "0.003", "0.19"],
              ],
              note: "Note: Two-day yield changes regressed on an announcement indicator, the change in the 10-year US Treasury yield and a Monetary Policy Board meeting indicator; 129 non-overlapping two-day windows. Cumulative effect = 11 × effect per announcement. Robust standard errors in parentheses. *** p < 0.01, ** p < 0.05, * p < 0.10.",
            },
          ],
          figures: [
            {
              id: "figure-1",
              caption: "Figure 1. Cumulative announcement effect on the 10-year KTB yield",
              kind: "line",
              xLabels: ["19 Mar", "26 Mar", "9 Apr", "23 Apr", "14 May", "28 May", "18 Jun", "16 Jul", "20 Aug", "10 Sep", "17 Sep"],
              yLabel: "Cumulative change (bp)",
              series: [
                {
                  name: "Cumulative effect",
                  values: [-6.8, -11.7, -15.3, -16.7, -19.4, -18.8, -21.1, -22.0, -23.8, -26.9, -26.4],
                  lower: [-12.4, -19.2, -24.1, -26.5, -30.0, -30.4, -33.4, -35.0, -37.4, -41.1, -41.0],
                  upper: [-1.2, -4.2, -6.5, -6.9, -8.8, -7.2, -8.8, -9.0, -10.2, -12.7, -11.8],
                },
              ],
              note: "Note: Running sum of two-day changes in the 10-year KTB yield around successive announcements, net of the change predicted by the US 10-year yield; 95 percent confidence bands based on the regression standard error, cumulated across events.",
            },
          ],
        },
        {
          id: "results-corporate",
          heading: "7.2 Corporate Bonds and Other Assets",
          paragraphs: [
            "Table 4 extends the analysis to corporate bonds, bank debentures and other asset prices. Effects on corporate yields are smaller than on KTBs of the same maturity but statistically significant. The cumulative reduction is 11 basis points for three-year AA− corporate bonds, 7 basis points for three-year BBB− bonds and 12 basis points for three-year AAA bank debentures, compared with 14 basis points for three-year KTBs. Credit spreads over KTBs therefore narrowed slightly for high-grade issuers and widened slightly for BBB− issuers, although neither change in spreads is statistically significant.",
            "The ranking across assets is informative about channels. If purchases worked mainly by signalling lower policy rates, all yields of a given maturity should fall by similar amounts, since expected policy rates enter all of them. Instead, effects decline with credit risk, consistent with a portfolio-balance channel in which investors who sell KTBs to the central bank rebalance towards the closest substitutes [2][25]. Bank debentures, which are close substitutes for KTBs in the portfolios of insurers and asset managers, show the largest pass-through. Effects on lower-rated bonds are smaller, in line with evidence that central-bank purchases of government debt do little to compress credit risk premia unless accompanied by direct support for corporate credit markets [22].",
            "Equity prices and the exchange rate responded modestly. The KOSPI rose by an average of 0.4 percent on announcement days, and the won depreciated by 0.2 percent against the dollar, neither effect being statistically significant. Net foreign purchases of KTBs did not decline on announcement days, suggesting that foreign investors did not offset the central bank's purchases in the short run.",
          ],
          tables: [
            {
              id: "table-4",
              caption: "Table 4. Effects on corporate bonds and other asset prices",
              columns: ["Asset", "Effect per announcement", "Std. error", "Cumulative effect", "Pass-through relative to 3-year KTB"],
              rows: [
                ["Corporate AA− 3-year (bp)", "−1.0***", "(0.3)", "−11.0", "0.77"],
                ["Corporate BBB− 3-year (bp)", "−0.6**", "(0.3)", "−6.6", "0.46"],
                ["Bank debenture AAA 3-year (bp)", "−1.1***", "(0.3)", "−12.1", "0.85"],
                ["AA− spread over KTB (bp)", "0.3", "(0.2)", "3.3", ""],
                ["BBB− spread over KTB (bp)", "0.7", "(0.4)", "7.7", ""],
                ["KOSPI (percent)", "0.4", "(0.5)", "4.4", ""],
                ["KRW per USD (percent)", "0.2", "(0.3)", "2.2", ""],
                ["Net foreign KTB purchases (KRW billion)", "38", "(61)", "418", ""],
              ],
              note: "Note: Specification as in Table 3. Pass-through is the ratio of the cumulative effect to the cumulative effect on the 3-year KTB yield (−14.3 bp). Robust standard errors in parentheses. *** p < 0.01, ** p < 0.05, * p < 0.10.",
            },
          ],
        },
        {
          id: "results-channels",
          heading: "7.3 Signalling versus Portfolio Balance",
          paragraphs: [
            "Table 5 decomposes the cumulative yield responses into changes in expected average short rates and term premia. At the 10-year maturity, the expected-rate component accounts for −8 basis points and the term-premium component for −18 basis points of the −26 basis point total, so that about 70 percent of the response reflects lower term premia. The share attributable to term premia rises with maturity, from about one-fifth at one year to about three-quarters at thirty years. At the three-year maturity, the two components contribute roughly equally, at about −7 basis points each.",
            "Independent market-based measures of expected policy rates support the decomposition. One-year OIS rates fell by a cumulative 6 basis points on announcement days and two-year OIS rates by 7 basis points, close to the model-implied changes in expected short rates at those horizons. Survey expectations of the base rate one year ahead fell by about 5 basis points between March and June, most of which can be attributed to the May rate cut rather than to purchase announcements. Figure 2 summarises the decomposition across maturities: portfolio-balance effects dominate the signalling channel, particularly for longer-maturity assets.",
          ],
          tables: [
            {
              id: "table-5",
              caption: "Table 5. Decomposition of cumulative yield responses (basis points)",
              columns: ["Maturity", "Total", "Expected short rates", "Term premium", "Term-premium share (percent)"],
              rows: [
                ["1-year", "−8.8", "−7.0", "−1.8", "20"],
                ["3-year", "−14.3", "−7.2", "−7.1", "50"],
                ["5-year", "−18.7", "−7.6", "−11.1", "59"],
                ["10-year", "−26.4", "−7.9", "−18.5", "70"],
                ["20-year", "−28.6", "−7.7", "−20.9", "73"],
                ["30-year", "−30.8", "−7.6", "−23.2", "75"],
              ],
              note: "Note: Decomposition based on an affine term-structure model estimated by the method of Adrian, Crump and Moench (2013) on KTB yields, 2005–2019. Components are cumulative responses over the 11 announcements; they may not sum exactly to the total because of rounding.",
            },
          ],
          figures: [
            {
              id: "figure-2",
              caption: "Figure 2. Signalling and portfolio-balance components by maturity",
              kind: "bar",
              xLabels: ["1-year", "3-year", "5-year", "10-year", "20-year", "30-year"],
              yLabel: "Cumulative change (bp)",
              series: [
                { name: "Expected short rates (signalling)", values: [-7.0, -7.2, -7.6, -7.9, -7.7, -7.6] },
                { name: "Term premium (portfolio balance)", values: [-1.8, -7.1, -11.1, -18.5, -20.9, -23.2] },
              ],
              note: "Note: Components from Table 5.",
            },
          ],
        },
      ],
    },
    {
      id: "mechanisms",
      heading: "8. Mechanisms and Heterogeneity",
      paragraphs: [
        "Local supply effects. If purchases work through portfolio balance with imperfect substitutability across issues, yields on the specific issues eligible for purchase should fall more than yields on ineligible issues of similar maturity [4][6]. Comparing eligible and ineligible off-the-run issues with remaining maturities within one year of each other, we find that eligible issues' yields fell by an additional 0.5 basis points per announcement on average (standard error 0.2), equivalent to about one-fifth of the average 10-year effect. Eligible issues in the longer maturity buckets show the largest differential. This within-maturity evidence is difficult to reconcile with pure signalling and supports the term-structure decomposition in Table 5.",
        "Market stress. Effects were larger in the first weeks of the programme. Splitting the sample, the average 10-year effect was 5.8 basis points per announcement in March and 1.7 basis points from April to September. The larger early effects partly reflect the restoration of market functioning: bid–ask spreads on benchmark KTBs, which had tripled in mid-March, returned to normal levels within three weeks of the first announcement. This pattern parallels the finding that the Federal Reserve's purchases in March 2020 had large effects partly by relieving dealer balance-sheet constraints [26]. It suggests that a portion of the March effects reflects a liquidity or market-functioning channel rather than the steady-state portfolio-balance channel.",
        "Supply news. The September announcements were explicitly linked to the expansion of KTB issuance, and markets interpreted them as offsetting new supply. Measured per KRW trillion of announced purchases, their effect was similar to that of the summer announcements, consistent with a stable relation between net duration supply and term premia [13]. In contrast, announcements that were not accompanied by explicit commitments on future amounts had smaller effects per won, which suggests that markets responded to the expected total of purchases as well as to the amount in each operation.",
        "Repo operations and the exchange rate. Announcements of the unlimited repo facility and the extension of eligible collateral lowered short-term money-market rates and commercial-paper spreads but had small and insignificant effects on KTB yields beyond one year. This contrast supports our interpretation that the effects documented in Table 3 reflect the removal of duration from private portfolios rather than general liquidity support. Finally, the small exchange-rate responses suggest that the signalling channel, which in an open economy should weaken the currency, was not strong, consistent with the term-premium decomposition. Foreign holders, mostly central banks and sovereign wealth funds with long investment horizons, did not reduce their KTB holdings around announcements.",
      ],
    },
    {
      id: "robustness",
      heading: "9. Robustness",
      paragraphs: [
        "Table 6 reports a range of robustness checks for the cumulative effect on the 10-year KTB yield. Using a one-day window yields a cumulative effect of −19 basis points, and a three-day window −29 basis points; the smaller one-day estimate is consistent with some announcements being released after market close and incorporated only on the following day. Excluding the four announcements that coincided with other policy news reduces the number of events to seven but leaves the average per-announcement effect at 2.1 basis points, implying a cumulative effect of 23 basis points if extrapolated to all 11 events. Controlling for the surprise component of base-rate decisions, measured by the change in the one-month OIS rate on meeting days, does not affect the estimates.",
        "We also estimate the model with GARCH(1,1) errors to account for time-varying volatility, include changes in Japanese and Chinese government bond yields as additional global controls, and drop March 2020 entirely. The last specification yields a smaller cumulative effect of 18 basis points, reflecting the larger effects during the period of market stress. Placebo tests that assign announcements to the same weekdays one and two weeks earlier yield cumulative effects close to zero and statistically insignificant. Using the alternative three-factor model for the decomposition raises the expected-rate share of the 10-year response slightly, to 36 percent, but the term premium remains the dominant component.",
        "A final concern is that the event-study approach captures only the announcement effect and not any subsequent drift. We examine yields over the ten trading days after each announcement and find no evidence of systematic reversal: the cumulative ten-day change in the 10-year yield, net of US yields, is −24 basis points across the 11 events, close to the two-day estimate. Effects of the March announcements partly unwound in April as risk appetite recovered globally, but those of later announcements show no reversal.",
      ],
      tables: [
        {
          id: "table-6",
          caption: "Table 6. Robustness of the cumulative effect on the 10-year KTB yield",
          columns: ["Specification", "Cumulative effect (bp)", "Std. error", "Events"],
          rows: [
            ["Baseline (two-day window)", "−26.4***", "(6.6)", "11"],
            ["One-day window", "−19.1***", "(5.7)", "11"],
            ["Three-day window", "−29.3***", "(8.4)", "11"],
            ["Excluding coincident policy news (extrapolated)", "−23.1***", "(8.1)", "7"],
            ["Controlling for base-rate surprises", "−25.7***", "(6.5)", "11"],
            ["GARCH(1,1) errors", "−24.2***", "(5.9)", "11"],
            ["Additional global controls (Japan, China)", "−25.1***", "(6.4)", "11"],
            ["Excluding March 2020", "−18.0***", "(5.8)", "9"],
            ["Ten-day window (drift)", "−24.0**", "(11.2)", "11"],
            ["Placebo: one week earlier", "1.5", "(6.9)", "11"],
            ["Placebo: two weeks earlier", "−2.2", "(7.0)", "11"],
          ],
          note: "Note: Each row reports 11 times the estimated effect per announcement (or the sum over included events where indicated), with robust standard errors. *** p < 0.01, ** p < 0.05, * p < 0.10.",
        },
      ],
    },
    {
      id: "discussion",
      heading: "10. Discussion and Policy Implications",
      paragraphs: [
        "Our results carry several lessons for the design of unconventional monetary policy in emerging markets. First, asset purchases can lower long-term yields substantially even when policy rates are above zero and even when programmes are modest in size. The Bank of Korea's programme, at 1.6 percent of marketable government debt, lowered 10-year yields by about 26 basis points, and the effect per unit of purchases was at least as large as in advanced economies. A domestic investor base dominated by insurers and pension funds with strong preferences for long-duration assets, as in Korea, may make the term premium particularly sensitive to changes in duration supply [6].",
        "Second, because the effects operate mainly through term premia, purchases are a complement to, not a substitute for, conventional rate policy and forward guidance. Rate cuts and guidance act on the expected path of short rates; purchases act on the premium for bearing duration. When the base rate approaches its effective floor, purchases provide an additional instrument that can ease financial conditions without requiring further cuts that might strain the profitability of banks or encourage excessive household borrowing, a concern given Korea's high household debt [27].",
        "Third, the limited pass-through to lower-rated corporate bonds suggests that government bond purchases alone do little to ease credit conditions for riskier borrowers. In Korea, support for the corporate bond and commercial paper markets came mainly from government-backed facilities, including the special-purpose vehicle for low-rated corporate bonds established in mid-2020. Coordination between monetary purchases and credit facilities is therefore important, as the experience of the Federal Reserve also illustrates [22].",
        "Fourth, communication matters. Announcements that tied purchases to expected increases in bond supply had effects per won similar to the summer operations, while operations announced without forward-looking commitments had smaller effects. Clear statements about the overall scale of purchases, as in the September announcement, can strengthen the portfolio-balance channel by shaping expectations of the total amount of duration removed from the market [13][15].",
        "Finally, two caveats apply. The event-study estimates capture announcement effects and may understate the total effect if purchases were anticipated, or overstate the persistent effect if announcement effects partly unwound later. And the conditions of 2020, a global shock that prompted capital inflows into safe emerging-market assets once the initial panic had passed, may have been unusually favourable. Central banks in economies with weaker credibility or larger foreign ownership of government debt may find that purchases weaken the currency and trigger capital outflows that offset their effect on yields [16][17].",
      ],
    },
    {
      id: "conclusion",
      heading: "11. Conclusion",
      paragraphs: [
        "The Bank of Korea's first programme of outright government bond purchases, launched in response to the COVID-19 pandemic, lowered 10-year KTB yields by approximately 26 basis points cumulatively over its first six months of operations. Effects increased with maturity, spilled over to high-grade corporate bonds and bank debentures, and were smaller for lower-rated corporate bonds. A decomposition of the yield responses, supported by local supply effects on purchase-eligible issues, shows that portfolio-balance effects dominated the signalling channel, particularly for longer-maturity assets. These findings are consistent with evidence from advanced-economy asset-purchase programmes.",
        "Our analysis leaves several questions for future research. The effects of purchases on bank lending, corporate investment and household borrowing, and hence on output and inflation, remain to be estimated. The exit from asset purchases, and the consequences of a large central-bank holding of government debt for fiscal and monetary interactions, will also need careful study. Finally, comparing the Korean experience with that of other emerging-market central banks that began purchases in 2020 would help identify the market characteristics that determine the effectiveness of asset purchases outside advanced economies.",
      ],
    },
    {
      id: "appendix",
      heading: "Appendix A. Data and Estimation Details",
      paragraphs: [
        "Announcement dating. For each press release we record the time of publication from the Bank of Korea's website archive. Releases published after 15:30, the close of the KTB cash market, are assigned to the following business day; releases published during trading hours are assigned to the same day. Two-day windows run from the close of the day before the assigned date to the close of the day after.",
        "Yields. Benchmark yields are end-of-day yields on on-the-run issues as compiled by the Korea Financial Investment Association from the quotes of ten bond-rating and pricing agencies. Corporate bond yields are averages of quotes for issues of the stated rating and remaining maturity. Where benchmark issues change during the sample, we splice series at the changeover date; excluding windows that span a changeover does not affect the results.",
        "Term-structure model. The affine model has five pricing factors extracted as principal components of zero-coupon KTB yields with maturities from three months to twenty years, estimated by the three-step regression procedure of Adrian, Crump and Moench (2013) on end-of-month data from January 2005 to December 2019. Daily decompositions use the estimated loadings applied to daily yields. The alternative model has three latent factors and is estimated by maximum likelihood with survey forecasts of the base rate as additional observations, following the approach of Kim and Wright (2005).",
        "Permutation test. For each asset, we draw 11 two-day windows at random without replacement from the set of non-announcement windows, sum the yield changes net of the US-yield control, and repeat 10,000 times. The permutation p-value is the share of draws in which the absolute value of the simulated cumulative change exceeds the absolute value of the estimated cumulative effect.",
      ],
    },
  ],
};
