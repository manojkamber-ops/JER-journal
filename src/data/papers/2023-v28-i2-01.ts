// Vol. 28, No. 2 (April 2023) — full text (sample content).
import type { FulltextSpec } from "../paper-spec";

export const fulltext: FulltextSpec = {
  id: "2023-v28-i2-01",
  acknowledgments:
    "We thank seminar participants at Hanyang University, Bocconi University and the Bank of Korea, two anonymous referees and the handling editor for helpful comments. Any remaining errors are our own.",
  dataAvailability:
    "Intraday futures and bond-market quotes and daily equity and sector index data were obtained from commercial data vendors and cannot be redistributed. Announcement dates are taken from the public calendars of the four central banks. The constructed surprise series and replication code are available from the corresponding author.",
  editorialNote:
    "Using high-frequency surprises around 621 announcements by the Federal Reserve, the Bank of Korea, the Bank of Japan and the People's Bank of China over 2005–2023, the authors find that a 25-basis-point surprise tightening lowers aggregate Asian equity returns by 1.8 percentage points on the announcement day, with real estate and construction responding two to three times as strongly. The response of Asian markets to US surprises has more than doubled since the global financial crisis, consistent with a stronger global financial cycle.",
  refs: [
    /* 1 */ "Kuttner, K. N. (2001). Monetary policy surprises and interest rates: Evidence from the Fed funds futures market. Journal of Monetary Economics, 47(3), 523–544.",
    /* 2 */ "Bernanke, B. S., & Kuttner, K. N. (2005). What explains the stock market's reaction to Federal Reserve policy? Journal of Finance, 60(3), 1221–1257.",
    /* 3 */ "Gürkaynak, R. S., Sack, B., & Swanson, E. T. (2005). Do actions speak louder than words? The response of asset prices to monetary policy actions and statements. International Journal of Central Banking, 1(1), 55–93.",
    /* 4 */ "Rigobon, R., & Sack, B. (2004). The impact of monetary policy on asset prices. Journal of Monetary Economics, 51(8), 1553–1575.",
    /* 5 */ "Gertler, M., & Karadi, P. (2015). Monetary policy surprises, credit costs, and economic activity. American Economic Journal: Macroeconomics, 7(1), 44–76.",
    /* 6 */ "Nakamura, E., & Steinsson, J. (2018). High-frequency identification of monetary non-neutrality: The information effect. Quarterly Journal of Economics, 133(3), 1283–1330.",
    /* 7 */ "Jarociński, M., & Karadi, P. (2020). Deconstructing monetary policy surprises: The role of information shocks. American Economic Journal: Macroeconomics, 12(2), 1–43.",
    /* 8 */ "Swanson, E. T. (2021). Measuring the effects of Federal Reserve forward guidance and asset purchases on financial markets. Journal of Monetary Economics, 118, 32–53.",
    /* 9 */ "Rey, H. (2013). Dilemma not trilemma: The global financial cycle and monetary policy independence. In Global Dimensions of Unconventional Monetary Policy, Proceedings of the Jackson Hole Economic Policy Symposium (pp. 285–333). Kansas City: Federal Reserve Bank of Kansas City.",
    /* 10 */ "Miranda-Agrippino, S., & Rey, H. (2020). U.S. monetary policy and the global financial cycle. Review of Economic Studies, 87(6), 2754–2776.",
    /* 11 */ "Bruno, V., & Shin, H. S. (2015). Capital flows and the risk-taking channel of monetary policy. Journal of Monetary Economics, 71, 119–132.",
    /* 12 */ "Ehrmann, M., & Fratzscher, M. (2004). Taking stock: Monetary policy transmission to equity markets. Journal of Money, Credit and Banking, 36(4), 719–737.",
    /* 13 */ "Ehrmann, M., & Fratzscher, M. (2009). Global financial transmission of monetary policy shocks. Oxford Bulletin of Economics and Statistics, 71(6), 739–759.",
    /* 14 */ "Wongswan, J. (2009). The response of global equity indexes to U.S. monetary policy announcements. Journal of International Money and Finance, 28(2), 344–365.",
    /* 15 */ "Hausman, J., & Wongswan, J. (2011). Global asset prices and FOMC announcements. Journal of International Money and Finance, 30(3), 547–571.",
    /* 16 */ "Ammer, J., Vega, C., & Wongswan, J. (2010). International transmission of U.S. monetary policy shocks: Evidence from stock prices. Journal of Money, Credit and Banking, 42(s1), 179–198.",
    /* 17 */ "Rogers, J. H., Scotti, C., & Wright, J. H. (2014). Evaluating asset-market effects of unconventional monetary policy: A multi-country review. Economic Policy, 29(80), 749–799.",
    /* 18 */ "Bowman, D., Londono, J. M., & Sapriza, H. (2015). U.S. unconventional monetary policy and transmission to emerging market economies. Journal of International Money and Finance, 55, 27–59.",
    /* 19 */ "Georgiadis, G. (2016). Determinants of global spillovers from US monetary policy. Journal of International Money and Finance, 67, 41–61.",
    /* 20 */ "Bekaert, G., Hoerova, M., & Lo Duca, M. (2013). Risk, uncertainty and monetary policy. Journal of Monetary Economics, 60(7), 771–788.",
    /* 21 */ "Campbell, J. Y., & Ammer, J. (1993). What moves the stock and bond markets? A variance decomposition for long-term asset returns. Journal of Finance, 48(1), 3–37.",
    /* 22 */ "Campbell, J. Y., & Shiller, R. J. (1988). The dividend-price ratio and expectations of future dividends and discount factors. Review of Financial Studies, 1(3), 195–228.",
    /* 23 */ "Thorbecke, W. (1997). On stock market returns and monetary policy. Journal of Finance, 52(2), 635–654.",
    /* 24 */ "Gorodnichenko, Y., & Weber, M. (2016). Are sticky prices costly? Evidence from the stock market. American Economic Review, 106(1), 165–199.",
    /* 25 */ "Ozdagli, A., & Weber, M. (2017). Monetary policy through production networks: Evidence from the stock market. NBER Working Paper No. 23424. Cambridge, MA: National Bureau of Economic Research.",
    /* 26 */ "Andersen, T. G., Bollerslev, T., Diebold, F. X., & Vega, C. (2003). Micro effects of macro announcements: Real-time price discovery in foreign exchange. American Economic Review, 93(1), 38–62.",
    /* 27 */ { jer: "2023-v28-i1-01" },
    /* 28 */ { jer: "2021-v26-i4-01" },
  ],
  body: [
    {
      id: "introduction",
      heading: "1. Introduction",
      paragraphs: [
        "Equity prices are among the first places where a change in monetary policy shows up. Because stock prices are forward-looking claims on future dividends, they respond within minutes to news about the path of interest rates, and their response summarises how investors expect policy to affect discount rates, risk premia and corporate cash flows. A large literature has used this property to measure the transmission of US monetary policy to the US stock market [1][2][23], finding that an unexpected 25-basis-point tightening by the Federal Reserve lowers broad US equity indices by roughly one percentage point.",
        "Much less is known about how Asian equity markets respond to monetary policy, either their own central banks' or that of the United States. This gap matters. Asian markets now account for close to a third of world equity market capitalisation, Asian households and pension funds hold a growing share of their wealth in equities, and central banks in the region have repeatedly cited equity-market conditions in their policy statements. At the same time, the region is exposed to the global financial cycle: policy decisions in Washington move capital flows, exchange rates and risk appetite across Asia [9][10][27]. Measuring how much Asian equity prices respond to domestic and US monetary news, and whether that response has changed over time, is therefore important both for central banks in the region and for investors.",
        "This paper estimates the response of Asian equity markets to monetary policy surprises from four central banks — the Federal Reserve, the Bank of Korea, the Bank of Japan and the People's Bank of China — over 2005–2023. We follow the high-frequency identification approach of Kuttner {1} and Gürkaynak, Sack and Swanson {3}: we measure the unexpected component of each policy announcement from changes in short-term interest-rate futures and swap rates in narrow windows around the announcement, and relate it to equity returns. Because the windows are short and the announcements are scheduled, the surprises are plausibly unrelated to other news that moves equity prices on the same day. For US announcements, which take place while Asian markets are closed, the design is particularly clean: the surprise is fully measured before Asian trading opens.",
        "Our sample contains 621 announcements and covers eight Asian markets — Korea, Japan, mainland China, Hong Kong, Taiwan, Singapore, Thailand and Malaysia — together with sector indices for eleven industry groups. We find that a 25-basis-point surprise tightening reduces aggregate equity returns by 1.8 percentage points on the announcement day. The effect is precisely estimated, holds for each of the four central banks and is economically similar whether the surprise originates at home or in the United States. Responses differ markedly across sectors: interest-rate-sensitive sectors such as real estate and construction exhibit responses two to three times larger than the aggregate, while consumer staples, health care and energy respond by about half as much.",
        "We also show that the transmission of US surprises to Asian markets has strengthened since the global financial crisis. Before mid-2008 a 25-basis-point US surprise reduced the aggregate Asian index by 0.84 percentage points; since 2009 the response has been 2.03 percentage points, a difference that is statistically significant. The strengthening is concentrated in markets with high foreign ownership and is accompanied by larger responses of exchange rates and implied volatility, consistent with the risk-taking channel emphasised by Bruno and Shin {11} and with the growing role of global financial cycles documented by Rey {9} and Miranda-Agrippino and Rey {10}. A variance decomposition in the spirit of Campbell and Ammer {21} attributes most of the equity response to news about future excess returns rather than about dividends or real interest rates, echoing the US findings of Bernanke and Kuttner {2}.",
        "The rest of the paper is organised as follows. Section 2 describes the institutional background and Section 3 reviews related literature. Section 4 sets out a simple framework and our hypotheses. Section 5 describes the data and Section 6 the empirical strategy. Section 7 presents the main results, Section 8 investigates mechanisms and heterogeneity and Section 9 reports robustness checks. Section 10 discusses implications for policy and Section 11 concludes.",
      ],
    },
    {
      id: "background",
      heading: "2. Institutional Background",
      paragraphs: [
        "The four central banks in our sample differ in their communication practices, which shapes how we measure surprises. The Federal Open Market Committee meets eight times a year and has released its statement at 2:15 p.m. or 2:00 p.m. Eastern Time throughout our sample, which corresponds to the early morning in Seoul, Tokyo and Shanghai. Asian equity markets therefore open several hours after every scheduled US announcement, and the first Asian trading session fully incorporates the news. During the zero-lower-bound periods of 2009–2015 and 2020–2021, US policy news was conveyed mainly through forward guidance and asset purchases rather than through the federal funds rate [8][17].",
        "The Bank of Korea's Monetary Policy Board met monthly until 2016 and eight times a year from 2017, announcing its base-rate decision at around 9:50 a.m. Korean time, while the Korean market is open. The Bank of Japan's Policy Board holds regular meetings eight times a year since 2016 and more frequently before; its decisions are released at no fixed time, usually around midday during the lunch break of the Tokyo Stock Exchange. Japanese policy rates were at or near zero for most of the sample, and policy news mainly concerned asset purchases, the negative interest rate introduced in 2016 and yield-curve control. The People's Bank of China announces changes to its benchmark lending and deposit rates, its loan prime rate and reserve requirement ratios irregularly, often after markets close or at weekends, so the domestic market reacts on the next trading day.",
        "Equity markets in the region also differ in their openness to foreign investors. Foreign investors hold about a third of the free-float capitalisation of the Korean and Japanese markets and around 40 percent in Taiwan, but only a few percent of mainland Chinese A shares, despite the opening through the Stock Connect programmes after 2014. These differences provide useful variation for studying the channels through which US policy affects Asian markets, because a risk-taking channel operating through global investors should be stronger where foreign participation is higher [11][18].",
      ],
    },
    {
      id: "literature",
      heading: "3. Related Literature",
      paragraphs: [
        "Our work builds on the event-study literature on monetary policy and asset prices. Kuttner {1} showed how federal funds futures can be used to separate expected from unexpected policy changes, and Bernanke and Kuttner {2} found that a surprise 25-basis-point cut in the federal funds rate raises US stock prices by about one percent. Thorbecke {23} reached similar conclusions using vector autoregressions, while Rigobon and Sack {4} proposed an identification strategy based on the heteroskedasticity of policy shocks on announcement days. Gürkaynak, Sack and Swanson {3} showed that policy statements about the future path of rates matter at least as much as current actions, and Swanson {8} extended this decomposition to forward guidance and asset purchases at the zero lower bound.",
        "A second strand addresses the information content of announcements. Nakamura and Steinsson {6} argue that policy announcements reveal the central bank's information about the economy, so that a surprise tightening may signal stronger fundamentals and raise rather than lower stock prices. Jarociński and Karadi {7} use the joint response of interest rates and stock prices to separate pure policy shocks from information shocks, and Gertler and Karadi {5} use high-frequency surprises as external instruments to trace the effect of policy on credit spreads. We use these insights to check that our estimates are not contaminated by information effects.",
        "A third strand studies the cross-border transmission of US policy. Ehrmann and Fratzscher {13} and Wongswan {14} document significant responses of foreign equity markets to US surprises, and Hausman and Wongswan {15} and Ammer, Vega and Wongswan {16} show that responses vary with financial integration and with firms' exposure to the United States. Rogers, Scotti and Wright {17} and Bowman, Londono and Sapriza {18} study unconventional policy, and Georgiadis {19} relates the strength of spillovers to trade and financial integration and exchange-rate regimes. The global financial cycle literature [9][10] and the risk-taking channel [11][20] provide a framework for interpreting these spillovers. Earlier JER work on emerging Asia shows that global risk shocks move capital flows less under floating exchange rates [27], and that domestic asset purchases by the Bank of Korea moved bond and equity prices mainly through portfolio-balance effects [28].",
        "Finally, we relate to work on the cross-section of stock responses. Ehrmann and Fratzscher {12} show that US firms that are financially constrained or in cyclical industries respond more strongly to policy, Gorodnichenko and Weber {24} show that firms with stickier prices exhibit larger volatility around announcements, and Ozdagli and Weber {25} trace a substantial part of the response through production networks. We add evidence from Asian markets, where the sectoral composition of indices and the importance of real estate and construction differ markedly from the United States.",
      ],
    },
    {
      id: "framework",
      heading: "4. Conceptual Framework and Hypotheses",
      paragraphs: [
        "Following Campbell and Shiller {22} and Campbell and Ammer {21}, the unexpected excess return on a stock can be written as the sum of news about future dividends, minus news about future real interest rates, minus news about future excess returns. A surprise monetary tightening can lower equity prices through each component: by reducing expected corporate cash flows, by raising the real rates at which they are discounted, and by raising the risk premium that investors require. The relative importance of these channels depends on how persistent the change in rates is expected to be and on how policy affects investors' willingness to bear risk [2][20].",
        "This framework yields four hypotheses. First, a surprise tightening reduces equity returns on the announcement day (H1). Second, the response is larger for sectors whose cash flows are more sensitive to interest rates or whose valuations depend more heavily on distant cash flows (H2): real estate developers and construction firms are highly leveraged, finance projects with bank credit and face demand that depends on mortgage rates, so they should respond more than producers of consumer staples or health-care services.",
        "Third, if US policy affects Asian markets through the global financial cycle — via the leverage and risk appetite of global intermediaries and the dollar value of cross-border credit [9][11] — then the response of Asian markets to US surprises should be larger where foreign participation is higher, should be accompanied by movements in exchange rates and implied volatility, and should have grown as financial integration deepened after the crisis (H3). Fourth, if announcements also convey central-bank information about the economy, surprise tightenings associated with positive information should be followed by smaller or even positive stock-price responses, so that purging information effects should increase the measured response to pure policy shocks (H4) [6][7].",
      ],
    },
    {
      id: "data",
      heading: "5. Data",
      paragraphs: [],
      subsections: [
        {
          id: "data-announcements",
          heading: "5.1 Announcements and Surprises",
          paragraphs: [
            "Our sample includes all scheduled and unscheduled monetary policy announcements by the four central banks between January 2005 and January 2023: 148 by the Federal Reserve, 196 by the Bank of Korea, 205 by the Bank of Japan and 72 by the People's Bank of China, for a total of 621. Announcement dates and times come from the central banks' calendars and press releases.",
            "For the Federal Reserve, we follow Gertler and Karadi {5} and measure the surprise as the change in the first principal component of federal funds and eurodollar futures rates with maturities up to one year, in a 30-minute window starting 10 minutes before the announcement, rescaled so that it moves one-for-one with the one-year Treasury yield. Because the measure includes expected rates up to a year ahead, it captures forward-guidance news at the zero lower bound. For the Bank of Korea we use the change in the three-year Korea Treasury Bond futures yield and the 91-day certificate-of-deposit rate in a 30-minute window around the announcement, combined into a single factor rescaled to the one-year yield. For the Bank of Japan we use changes in one-year overnight index swap rates and two-year government bond yields in a window around the release. For the People's Bank of China, whose announcements often occur outside trading hours, we use the change in the one-year interest-rate swap on the seven-day repo rate from the close before the announcement to the close of the first trading day after it; this measure is necessarily noisier.",
            "Table 1 summarises the surprises. They are small on average and centred near zero, as expected if markets anticipate most policy decisions. The standard deviation is about 5 basis points for the Federal Reserve, 4 for the Bank of Korea, 2 for the Bank of Japan, reflecting the long period at the effective lower bound, and 6 for the People's Bank of China. The largest surprises occurred in late 2008 and in March 2020, when central banks cut rates unexpectedly between scheduled meetings. Because a 25-basis-point surprise is rare, the typical announcement moves equity prices by much less than our headline estimate: a one-standard-deviation US surprise changes the aggregate Asian index by about 0.3 percentage points.",
          ],
          tables: [
            {
              id: "table-1",
              caption: "Table 1. Monetary policy announcements and surprises, January 2005 – January 2023",
              columns: ["Central bank", "Announcements", "Mean (bp)", "Std. dev. (bp)", "Min (bp)", "Max (bp)", "Share |surprise| < 1 bp"],
              rows: [
                ["Federal Reserve", "148", "−0.6", "4.9", "−42.0", "12.1", "0.39"],
                ["Bank of Korea", "196", "0.2", "4.1", "−18.3", "14.2", "0.33"],
                ["Bank of Japan", "205", "−0.1", "2.3", "−11.4", "9.0", "0.58"],
                ["People's Bank of China", "72", "−0.3", "6.2", "−24.1", "19.0", "0.18"],
                ["All announcements", "621", "−0.1", "4.2", "−42.0", "19.0", "0.42"],
              ],
              note: "Note: Surprises are measured in basis points of one-year-yield equivalents, as described in Section 5.1. Positive values denote tightening. Unscheduled announcements are included.",
            },
          ],
        },
        {
          id: "data-equity",
          heading: "5.2 Equity Returns",
          paragraphs: [
            "Equity returns are daily close-to-close log returns on the main broad indices of the eight markets: the KOSPI for Korea, TOPIX for Japan, the Shanghai Composite for mainland China, the Hang Seng for Hong Kong, the TAIEX for Taiwan, the Straits Times Index for Singapore, the SET for Thailand and the FTSE Bursa Malaysia KLCI. We construct an aggregate Asian index as the market-capitalisation-weighted average of the eight, using weights updated at the start of each year. In addition, we use national sector indices classified according to the Global Industry Classification Standard for eleven sectors; we separate construction and engineering from other industrials because of its importance in Asian markets and our interest in interest-rate sensitivity.",
            "For US announcements, the relevant return is that of the first Asian trading session after the announcement, measured from the previous close. For domestic announcements made during trading hours, it is the return on the announcement day; for Chinese announcements made after the close, it is the return on the next trading day. We also collect two-year and ten-year government bond yields, exchange rates against the US dollar, and implied volatility indices (the VIX and, where available, the VKOSPI and the Nikkei volatility index) to examine channels of transmission.",
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
          id: "baseline-spec",
          heading: "6.1 Baseline Specification",
          paragraphs: [
            "Our baseline regression is r_j,t = α + β·s_c,t + γ'X_t + ε_j,t, where r_j,t is the equity return of market or sector j on the event day associated with announcement t, s_c,t is the surprise of central bank c, and X_t contains the lagged return of index j and a dummy for days on which major domestic macroeconomic data were released. We scale s_c,t so that β is the effect, in percentage points, of a 25-basis-point surprise tightening. In the pooled specification we stack announcements by all four central banks, using the aggregate Asian index for US announcements and the corresponding domestic index for domestic announcements, and include central-bank fixed effects.",
            "We deliberately do not control for the US stock return on the day of a US announcement, because that return is itself an outcome of the surprise and would absorb part of the effect we want to measure. Standard errors are heteroskedasticity-robust; in pooled regressions across markets or sectors we cluster by announcement date to allow for common shocks.",
          ],
        },
        {
          id: "identification",
          heading: "6.2 Identification",
          paragraphs: [
            "The key identifying assumption is that, within the event window, the surprise is uncorrelated with other news affecting equity prices. For US announcements this assumption is strong, because the surprise is measured in a 30-minute window in US trading hours, and Asian markets, which are closed at the time, cannot feed back into it. Other news released between the announcement and the Asian open — for example Asian macroeconomic releases — is unrelated to the US surprise and adds noise rather than bias. For domestic announcements, the intraday window prevents reverse causality from daily equity movements, although other news on the same day enters the error term.",
            "Two concerns remain. First, information effects may bias the estimated response towards zero, if surprise tightenings are interpreted as good news about the economy [6]. We address this in Section 9 by purging surprises of information effects using the sign-restriction approach of Jarociński and Karadi {7}. Second, measurement error in the surprises, particularly for the People's Bank of China, attenuates estimates; we use the heteroskedasticity-based estimator of Rigobon and Sack {4}, which is robust to such error, as a check. The high-frequency literature on price discovery shows that asset prices incorporate scheduled news within minutes [26], supporting the use of narrow windows.",
          ],
        },
      ],
    },
    {
      id: "results",
      heading: "7. Results",
      paragraphs: [
        "We present the results in three steps: the response of aggregate returns to surprises by each central bank, the response of individual sectors, and the change over time in the transmission of US surprises.",
      ],
      subsections: [
        {
          id: "results-aggregate",
          heading: "7.1 Aggregate Responses",
          paragraphs: [
            "Table 2 reports the baseline estimates. In the pooled specification, a 25-basis-point surprise tightening reduces aggregate equity returns by 1.80 percentage points on the announcement day, with a standard error of 0.38. The estimate is significant at the 1 percent level and the surprise alone explains about 16 percent of the variance of event-day returns, a high share for daily equity data. Estimates for the individual central banks are similar: 1.71 percentage points for US surprises, 2.06 for the Bank of Korea and 1.94 for the Bank of Japan. The estimate for the People's Bank of China is smaller, at 1.21 percentage points, and less precise, consistent with the greater measurement error of its surprise series and with the limited role of interest rates in Chinese monetary policy during much of the sample.",
            "These magnitudes are larger than the roughly one percent response of US equities to a 25-basis-point federal funds surprise found by Bernanke and Kuttner {2}, but they are comparable once one accounts for the higher volatility of Asian markets and the broader definition of our surprise measures, which also capture changes in expected policy over the following year [3][5].",
            "Table 3 reports the estimates market by market. Every market responds significantly to US surprises, with point estimates ranging from 0.92 percentage points for mainland China to 2.18 for Korea. Responses are largest in Korea, Hong Kong and Taiwan, the markets with the greatest participation of foreign investors and the closest financial links to the United States, and smallest in mainland China, where capital controls limit foreign participation. The domestic responses for Korea, Japan and China are of the same order of magnitude as the US responses in those markets, indicating that Asian equity investors react to domestic policy news as strongly as to news from Washington.",
          ],
          tables: [
            {
              id: "table-2",
              caption: "Table 2. Response of aggregate equity returns to a 25-basis-point surprise tightening",
              columns: ["", "Pooled", "Federal Reserve", "Bank of Korea", "Bank of Japan", "People's Bank of China"],
              rows: [
                ["Surprise (25 bp)", "−1.80***", "−1.71***", "−2.06***", "−1.94***", "−1.21**"],
                ["", "(0.38)", "(0.44)", "(0.52)", "(0.61)", "(0.58)"],
                ["Lagged return", "0.03", "0.05", "0.02", "−0.01", "0.04"],
                ["", "(0.04)", "(0.06)", "(0.05)", "(0.06)", "(0.09)"],
                ["Macro release dummy", "Yes", "Yes", "Yes", "Yes", "Yes"],
                ["Central-bank fixed effects", "Yes", "—", "—", "—", "—"],
                ["Dependent index", "Aggregate / domestic", "Asian aggregate", "KOSPI", "TOPIX", "Shanghai Composite"],
                ["Announcements", "621", "148", "196", "205", "72"],
                ["R²", "0.16", "0.21", "0.18", "0.12", "0.06"],
              ],
              note: "Note: Dependent variable is the event-day log return in percent. Robust standard errors in parentheses. ** p < 0.05, *** p < 0.01.",
            },
            {
              id: "table-3",
              caption: "Table 3. Responses by market to US and domestic surprises (percentage points per 25 bp)",
              columns: ["Market", "US surprise", "Std. error", "Domestic surprise", "Std. error", "Weight in aggregate (%)"],
              rows: [
                ["Korea (KOSPI)", "−2.18***", "(0.52)", "−2.06***", "(0.52)", "7"],
                ["Japan (TOPIX)", "−1.64***", "(0.48)", "−1.94***", "(0.61)", "38"],
                ["China (Shanghai Composite)", "−0.92*", "(0.51)", "−1.21**", "(0.58)", "30"],
                ["Hong Kong (Hang Seng)", "−2.07***", "(0.55)", "—", "", "12"],
                ["Taiwan (TAIEX)", "−1.95***", "(0.53)", "—", "", "8"],
                ["Singapore (STI)", "−1.58***", "(0.44)", "—", "", "2"],
                ["Thailand (SET)", "−1.47***", "(0.50)", "—", "", "2"],
                ["Malaysia (KLCI)", "−1.21***", "(0.41)", "—", "", "1"],
                ["Asian aggregate", "−1.71***", "(0.44)", "—", "", "100"],
              ],
              note: "Note: Each cell is from a separate regression of the event-day return on the surprise, with controls as in Table 2. Weights are average market-capitalisation shares over the sample. * p < 0.10, ** p < 0.05, *** p < 0.01.",
            },
          ],
        },
        {
          id: "results-sectors",
          heading: "7.2 Sectoral Responses",
          paragraphs: [
            "Table 4 reports pooled responses of sector indices, stacking all markets and central banks and clustering by announcement date. Every sector responds negatively to surprise tightenings, but the magnitudes differ widely. Real estate is the most sensitive, falling by 4.68 percentage points per 25-basis-point surprise, 2.6 times the aggregate response. Construction and engineering falls by 4.21 percentage points, 2.3 times the aggregate. Utilities and financials respond by 1.3 to 1.4 times the aggregate, consumer discretionary and information technology by somewhat more than the aggregate, while consumer staples, health care and energy respond by roughly half as much.",
            "Figure 1 displays these responses relative to the aggregate. The ranking is consistent with H2. Real estate developers and construction firms in Asia are highly leveraged, rely on bank and project finance with floating rates and sell products whose demand depends on mortgage costs; property valuations themselves depend on long-dated rental streams. Utilities have long-duration cash flows and high debt. In contrast, demand for consumer staples and health care is insensitive to the interest rate, and energy-sector returns are dominated by commodity prices. Financials occupy an intermediate position: higher rates raise net interest margins but lower the value of bond holdings and raise expected credit losses.",
            "The cross-sector pattern is stable across central banks. The correlation between sectoral responses to US surprises and to domestic surprises is 0.88, and real estate and construction are the two most sensitive sectors for each of the four central banks. This suggests that the sectoral pattern reflects the economic exposure of firms to interest rates rather than idiosyncratic features of individual policy regimes.",
          ],
          tables: [
            {
              id: "table-4",
              caption: "Table 4. Sectoral responses to a 25-basis-point surprise tightening (pooled)",
              columns: ["Sector", "Response (pp)", "Std. error", "Ratio to aggregate", "Sector-market observations"],
              rows: [
                ["Real estate", "−4.68***", "(0.92)", "2.6", "4,968"],
                ["Construction and engineering", "−4.21***", "(0.88)", "2.3", "4,968"],
                ["Utilities", "−2.52***", "(0.57)", "1.4", "4,968"],
                ["Financials", "−2.37***", "(0.49)", "1.3", "4,968"],
                ["Consumer discretionary", "−2.15***", "(0.46)", "1.2", "4,968"],
                ["Information technology", "−1.98***", "(0.51)", "1.1", "4,968"],
                ["Industrials (excl. construction)", "−1.73***", "(0.40)", "1.0", "4,968"],
                ["Materials", "−1.66***", "(0.43)", "0.9", "4,968"],
                ["Energy", "−1.12**", "(0.47)", "0.6", "4,968"],
                ["Health care", "−1.04***", "(0.37)", "0.6", "4,968"],
                ["Consumer staples", "−0.81***", "(0.29)", "0.5", "4,968"],
                ["Aggregate", "−1.80***", "(0.38)", "1.0", "621"],
              ],
              note: "Note: Sector-market observations stack eight markets' sector indices for US announcements and the domestic market's for domestic announcements. Market and central-bank fixed effects included; standard errors clustered by announcement date. ** p < 0.05, *** p < 0.01.",
            },
          ],
          figures: [
            {
              id: "figure-1",
              caption: "Figure 1. Sectoral responses relative to the aggregate response",
              kind: "bar",
              xLabels: ["Real estate", "Construction", "Utilities", "Financials", "Cons. discr.", "IT", "Industrials", "Materials", "Energy", "Health care", "Cons. staples"],
              yLabel: "Ratio to aggregate response",
              series: [{ name: "Ratio", values: [2.6, 2.3, 1.4, 1.3, 1.2, 1.1, 1.0, 0.9, 0.6, 0.6, 0.5] }],
              note: "Note: Ratio of each sector's response to a 25-basis-point surprise tightening to the aggregate response of 1.80 percentage points (Table 4).",
            },
          ],
        },
        {
          id: "results-time",
          heading: "7.3 The Strengthening of US Transmission",
          paragraphs: [
            "Figure 2 plots the response of the aggregate Asian index to US surprises estimated separately for two-year windows. The response roughly doubles after the global financial crisis. In the pre-crisis period from January 2005 to June 2008, a 25-basis-point US surprise reduced the aggregate index by 0.84 percentage points (standard error 0.47); for 2009–2023 the response is 2.03 percentage points (standard error 0.49). The difference of 1.19 percentage points has a standard error of 0.55 and is significant at the 5 percent level. The post-crisis estimates rise gradually rather than jumping in 2009, and they remain large when the zero-lower-bound years are excluded, so the change is not an artefact of the shift to forward guidance and asset purchases.",
            "Responses to domestic surprises do not show a comparable trend: the Bank of Korea response is 1.94 percentage points before 2009 and 2.11 afterwards, and the difference is far from significant. The strengthening is therefore specific to US policy, consistent with H3 and with a growing role of US monetary policy in driving a global financial cycle in asset prices [9][10]. It parallels the finding of Miranda-Agrippino and Rey {10} that US policy shocks move a global factor in risky asset prices, and the evidence of earlier JER work that global risk shocks transmit strongly to capital flows to emerging Asia [27].",
          ],
          figures: [
            {
              id: "figure-2",
              caption: "Figure 2. Response of the aggregate Asian index to a 25-basis-point US surprise, two-year windows",
              kind: "line",
              xLabels: ["2005–06", "2007–08", "2009–10", "2011–12", "2013–14", "2015–16", "2017–18", "2019–20", "2021–23"],
              yLabel: "Percentage points",
              series: [
                {
                  name: "Response",
                  values: [-0.71, -0.98, -1.62, -1.81, -1.97, -1.92, -2.18, -2.31, -2.42],
                  lower: [-1.92, -2.21, -2.88, -3.05, -3.29, -3.20, -3.47, -3.52, -3.81],
                  upper: [0.50, 0.25, -0.36, -0.57, -0.65, -0.64, -0.89, -1.10, -1.03],
                },
              ],
              marker: 1,
              note: "Note: Estimates from separate regressions for each window with 95 percent confidence intervals. The dashed line marks the global financial crisis of 2008.",
            },
          ],
        },
      ],
    },
    {
      id: "mechanisms",
      heading: "8. Mechanisms and Heterogeneity",
      paragraphs: [
        "To understand why Asian equity prices respond to surprises, Table 5 reports the response of other asset prices and a decomposition of the equity response. A 25-basis-point US surprise raises local two-year government bond yields by 7 basis points on average and ten-year yields by 5 basis points, depreciates Asian currencies against the dollar by 0.42 percent and raises the VIX by 1.1 points. Domestic surprises raise two-year yields almost one-for-one with the surprise, have a smaller effect on long yields and appreciate the domestic currency, as standard theory predicts. The depreciation following US tightening, together with the rise in implied volatility, points to a tightening of global financial conditions rather than a simple interest-rate channel.",
        "Following Campbell and Ammer {21} and Bernanke and Kuttner {2}, we estimate a vector autoregression in monthly excess returns, real interest rates, dividend yields and the term spread for each market, and use it to decompose event-day returns into news about dividends, real rates and future excess returns. About 58 percent of the response to US surprises reflects news about higher future excess returns, that is, a rise in the equity risk premium; 27 percent reflects lower expected dividends and 15 percent higher real interest rates. For domestic surprises, the real-rate share is larger, at 24 percent, and the risk-premium share smaller, at 49 percent. The predominance of risk-premium news, particularly for US policy, is consistent with the risk-taking channel of monetary policy [11][20].",
        "Heterogeneity across markets reinforces this interpretation. Interacting the US surprise with the foreign ownership share of each market, we find that a 10 percentage point higher foreign share is associated with a 0.31 percentage point larger response (standard error 0.12). Including this interaction and its change over time accounts for about 40 percent of the post-crisis increase in the US response. Markets with more flexible exchange rates respond somewhat less, in line with Georgiadis {19} and with earlier JER evidence on exchange-rate regimes [27], but the difference is not statistically significant.",
        "Within sectors, firm characteristics matter in the way the framework predicts. Using a sample of 1,240 large listed firms in Korea, Japan and Taiwan, we find that firms in the top tercile of leverage respond 1.6 times as strongly as those in the bottom tercile, and firms with low dividend yields — a proxy for long-duration cash flows — respond 1.4 times as strongly as those with high yields. These patterns echo evidence for US firms [12][24] and suggest that the large responses of real estate and construction reflect both leverage and duration.",
      ],
      tables: [
        {
          id: "table-5",
          caption: "Table 5. Responses of other asset prices and decomposition of the equity response",
          columns: ["Variable", "US surprise", "Domestic surprise"],
          rows: [
            ["Panel A. Asset-price responses to a 25-bp tightening", "", ""],
            ["Two-year government bond yield (bp)", "7.1*** (1.9)", "21.4*** (2.6)"],
            ["Ten-year government bond yield (bp)", "5.2*** (1.6)", "9.8*** (2.1)"],
            ["Exchange rate vs USD (%, + = depreciation)", "0.42*** (0.11)", "−0.36*** (0.12)"],
            ["VIX / local implied volatility (points)", "1.10*** (0.31)", "0.84** (0.35)"],
            ["Panel B. Decomposition of the equity response (shares)", "", ""],
            ["News about future excess returns", "0.58", "0.49"],
            ["News about future dividends", "0.27", "0.27"],
            ["News about future real interest rates", "0.15", "0.24"],
          ],
          note: "Note: Panel A reports coefficients from event-day regressions averaged across the markets for which each variable is available; robust standard errors in parentheses. For US surprises, local implied volatility is replaced by the VIX. Panel B is based on market-level VAR decompositions following Campbell and Ammer (1993). ** p < 0.05, *** p < 0.01.",
        },
      ],
    },
    {
      id: "robustness",
      heading: "9. Robustness",
      paragraphs: [
        "Table 6 reports robustness checks on the pooled aggregate estimate. Excluding unscheduled announcements, which often coincided with financial turmoil, leaves the estimate essentially unchanged at 1.74 percentage points. Excluding the crisis months of September 2008 to March 2009 yields 1.77, and excluding the pandemic period of March to April 2020 yields 1.69. Measuring returns over a two-day window, to allow for slow incorporation of news in less liquid markets, gives 1.66, indicating that the effect is not reversed on the following day. Using two-year Treasury yields instead of the futures-based factor for US surprises gives 1.85.",
        "Two checks address the identification concerns raised in Section 6.2. Purging surprises of information effects using the sign restrictions of Jarociński and Karadi {7} — classifying as information shocks those announcements in which interest rates and stock prices move in the same direction — raises the response to pure policy shocks to 2.12 percentage points, as predicted by H4. The heteroskedasticity-based estimator of Rigobon and Sack {4}, which compares announcement days with comparable non-announcement days, yields 1.93, slightly above the baseline, consistent with mild attenuation from measurement error.",
        "Finally, a placebo test assigns pseudo-surprises to the same weekday one week before each announcement, using the change in the same futures-based measures. The coefficient is small and insignificant at −0.07 percentage points (standard error 0.29). Median regressions, which limit the influence of large surprises in 2008 and 2020, yield a response of 1.59 percentage points.",
      ],
      tables: [
        {
          id: "table-6",
          caption: "Table 6. Robustness of the pooled aggregate response (percentage points per 25 bp)",
          columns: ["Specification", "Response", "Std. error", "Announcements"],
          rows: [
            ["Baseline", "−1.80***", "(0.38)", "621"],
            ["Scheduled announcements only", "−1.74***", "(0.40)", "602"],
            ["Excluding September 2008 – March 2009", "−1.77***", "(0.41)", "601"],
            ["Excluding March – April 2020", "−1.69***", "(0.39)", "613"],
            ["Two-day return window", "−1.66***", "(0.45)", "621"],
            ["US surprise measured by two-year Treasury yield", "−1.85***", "(0.40)", "621"],
            ["Pure policy shocks (information effects purged)", "−2.12***", "(0.43)", "621"],
            ["Heteroskedasticity-based estimator", "−1.93***", "(0.52)", "621"],
            ["Median regression", "−1.59***", "(0.34)", "621"],
            ["Placebo: pseudo-surprises one week earlier", "−0.07", "(0.29)", "621"],
          ],
          note: "Note: All specifications include central-bank fixed effects and the controls of Table 2. *** p < 0.01.",
        },
      ],
    },
    {
      id: "discussion",
      heading: "10. Discussion and Policy Implications",
      paragraphs: [
        "Our results have three implications for central banks in Asia. First, domestic monetary policy has a powerful and immediate effect on equity prices, comparable to that of US policy on US markets. Because equity prices affect household wealth, the cost of capital and firms' collateral, the equity channel is a quantitatively relevant part of monetary transmission in the region. Central banks that communicate clearly and limit surprises can reduce unnecessary volatility in equity markets, while large surprises can have large effects on the most rate-sensitive sectors.",
        "Second, the strengthening of US transmission since the global financial crisis means that Asian central banks face financial conditions that are increasingly shaped abroad. A 25-basis-point US surprise now lowers Asian equity prices by about two percentage points — as much as a domestic surprise of the same size — and is accompanied by currency depreciation and higher volatility. This is consistent with the view that the global financial cycle constrains monetary autonomy even under floating exchange rates [9], although our evidence that floating regimes dampen spillovers somewhat suggests that exchange-rate flexibility retains some value as a buffer [19][27]. Macroprudential tools targeted at leverage in real estate and construction, the sectors most exposed to rate surprises, may complement monetary policy in managing these spillovers.",
        "Third, the concentration of effects in real estate and construction has implications for financial stability. These sectors are large borrowers from Asian banks, and sharp falls in their equity values following a surprise tightening may signal tighter financing conditions and higher default risk. Supervisors could use event-day equity responses as a timely indicator of the vulnerability of these sectors to interest-rate shocks, complementing slower-moving balance-sheet data.",
        "Our estimates also have limitations. They capture announcement-day responses and are silent on whether price movements persist over months; the two-day window and the absence of reversal suggest that they are not short-lived, but longer-horizon effects are harder to identify. The People's Bank of China surprise series is noisier than the others, and the policy framework in China has changed substantially over the sample. Finally, our sample of eight markets omits South and Southeast Asian economies such as India, Indonesia and the Philippines, whose markets have become increasingly important.",
      ],
    },
    {
      id: "conclusion",
      heading: "11. Conclusion",
      paragraphs: [
        "Using high-frequency surprises around 621 policy announcements by the Federal Reserve, the Bank of Korea, the Bank of Japan and the People's Bank of China between 2005 and 2023, we find that a 25-basis-point surprise tightening reduces aggregate Asian equity returns by 1.8 percentage points on the announcement day. Interest-rate-sensitive sectors such as real estate and construction respond two to three times as strongly as the aggregate, and the transmission of US surprises to Asian markets has more than doubled since the global financial crisis, in line with the growing role of global financial cycles.",
        "Future research could extend these results in several directions. Linking event-day responses to firms' subsequent investment and borrowing would show whether equity-price movements translate into real effects. Studying the response of markets to communication by Asian central banks between meetings, including speeches and minutes, would help assess the role of forward guidance in the region. Finally, extending the analysis to a larger set of emerging Asian markets would show whether the strengthening of US transmission applies across the region or is concentrated in its most financially integrated economies.",
      ],
    },
    {
      id: "appendix",
      heading: "Appendix A. Construction of Surprise Measures",
      paragraphs: [
        "Federal Reserve. We use tick data on federal funds futures for the current and next month and on three-month eurodollar futures at horizons of two, three and four quarters. For each contract, we compute the change in the implied rate from 10 minutes before to 20 minutes after the announcement, adjusting the current-month federal funds contract for the number of days remaining in the month, as in Kuttner {1}. The surprise is the first principal component of these changes, rescaled so that a regression of the change in the one-year Treasury yield on it has a unit coefficient.",
        "Bank of Korea. We combine intraday changes in the three-year Korea Treasury Bond futures yield and the 91-day certificate-of-deposit rate in a window from 10 minutes before to 20 minutes after the release of the Monetary Policy Board decision. Because the certificate-of-deposit rate is quoted less frequently, we use the first quote after the window when no quote falls within it. The factor is rescaled to the one-year Korea Treasury Bond yield. Bank of Japan. We use changes in one-year overnight index swap rates and two-year government bond yields from the last quote before to the first quote at least 20 minutes after the release time recorded on the bank's website.",
        "People's Bank of China. Announcements are often made outside trading hours. We measure the surprise as the change in the one-year interest-rate swap on the seven-day repo rate from the close before the announcement to the close of the first trading day after it. For announcements before the development of the swap market in 2006, we use the change in the one-year central bank bill yield. Because daily windows include other news, we verify that results are similar when announcements coinciding with major Chinese data releases are excluded.",
        "Equity data and aggregation. Index levels are taken at the official close of each exchange. The aggregate Asian index weights the eight markets by their US-dollar market capitalisation at the end of the previous year, using local-currency returns so that exchange-rate movements are not mechanically included. Sector indices with fewer than five constituents in a market-year are excluded, which removes a small number of observations in Singapore, Thailand and Malaysia.",
      ],
    },
  ],
};
