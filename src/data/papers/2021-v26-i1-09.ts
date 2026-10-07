// Vol. 26, No. 1 (January 2021) — full research paper (sample content).
import type { PaperSpec } from "../paper-spec";

export const paper: PaperSpec = {
  id: "2021-v26-i1-09",
  title: "Short-Selling Bans and Market Quality: Evidence from the Korea Exchange",
  authors: [
    { name: "Tae-Woo Lee", corresponding: true, affiliation: { department: "Department of Finance", institution: "Hanyang University", city: "Seoul", country: "Republic of Korea" } },
    { name: "Eun-Ji Seo", corresponding: false, affiliation: { department: "Korea University Business School", institution: "Korea University", city: "Seoul", country: "Republic of Korea" } },
  ],
  abstract:
    "Regulators often ban short selling in market turmoil to stabilise prices, but the costs of such bans for market quality remain disputed. We study Korea's three market-wide short-selling bans, imposed in October 2008, August 2011 and March 2020, and their consequences for liquidity, volatility and price efficiency on the KOSPI and KOSDAQ markets. Using intraday transaction data from the Korea Exchange and KRX short-sale balance records for 2007–2020, we compare stocks with high pre-ban short interest with matched low-short-interest stocks in a difference-in-differences design, and we use the 2011 ban, which exempted market makers, to separate liquidity-provision and information channels. During bans, quoted bid-ask spreads of heavily shorted stocks widen by 18 percent relative to controls and price delay rises by 0.07. The 2020 ban did not stabilise prices: daily return volatility of high-short-interest stocks rose by 9 percent relative to controls. Negative earnings news is incorporated into prices roughly two trading days more slowly during bans. The findings suggest that blanket bans impair market quality without delivering the stability they are meant to provide.",
  keywords: ["short selling", "market quality", "liquidity", "price discovery", "Korea Exchange"],
  jelCodes: ["G14", "G18", "G12"],
  pages: "1–34",
  volume: 26,
  issue: 1,
  year: 2021,
  received: "2019-12-14",
  accepted: "2020-08-20",
  published: "2021-01-15",
  publishedOnline: "2021-01-05",
  citations: 64,
  downloads: 1405,
  pdfSize: "1.52 MB",
  type: "Research Article",
  acknowledgments:
    "We thank participants at the Korean Finance Association annual meeting and seminars at Hanyang University and Korea University, two anonymous referees and the handling editor for helpful comments. Financial support from the Hanyang University research fund is gratefully acknowledged.",
  dataAvailability:
    "Intraday transaction and quote data and short-sale balance records were obtained from the Korea Exchange under licence and cannot be redistributed. Code and derived stock-level measures are available from the corresponding author.",
  editorialNote:
    "Tae-Woo Lee and Eun-Ji Seo show that Korea's short-selling bans widened bid-ask spreads of heavily shorted stocks by 18 percent and raised price delay by 0.07, while the 2020 ban increased their volatility by 9 percent and slowed the incorporation of negative earnings news by about two trading days.",
  refs: [
    /* 1 */ "Beber, A., & Pagano, M. (2013). Short-selling bans around the world: Evidence from the 2007–09 crisis. Journal of Finance, 68(1), 343–381.",
    /* 2 */ "Boehmer, E., Jones, C. M., & Zhang, X. (2013). Shackling short sellers: The 2008 shorting ban. Review of Financial Studies, 26(6), 1363–1400.",
    /* 3 */ "Diamond, D. W., & Verrecchia, R. E. (1987). Constraints on short-selling and asset price adjustment to private information. Journal of Financial Economics, 18(2), 277–311.",
    /* 4 */ "Miller, E. M. (1977). Risk, uncertainty, and divergence of opinion. Journal of Finance, 32(4), 1151–1168.",
    /* 5 */ "Saffi, P. A. C., & Sigurdsson, K. (2011). Price efficiency and short selling. Review of Financial Studies, 24(3), 821–852.",
    /* 6 */ "Bris, A., Goetzmann, W. N., & Zhu, N. (2007). Efficiency and the bear: Short sales and markets around the world. Journal of Finance, 62(3), 1029–1079.",
    /* 7 */ "Hou, K., & Moskowitz, T. J. (2005). Market frictions, price delay, and the cross-section of expected returns. Review of Financial Studies, 18(3), 981–1020.",
    /* 8 */ "Boehmer, E., & Wu, J. (2013). Short selling and the price discovery process. Review of Financial Studies, 26(2), 287–322.",
    /* 9 */ "Diether, K. B., Lee, K.-H., & Werner, I. M. (2009). Short-sale strategies and return predictability. Review of Financial Studies, 22(2), 575–607.",
    /* 10 */ "Engelberg, J. E., Reed, A. V., & Ringgenberg, M. C. (2012). How are shorts informed? Short sellers, news, and information processing. Journal of Financial Economics, 105(2), 260–278.",
    /* 11 */ "Battalio, R., & Schultz, P. (2011). Regulatory uncertainty and market liquidity: The 2008 short sale ban's impact on equity option markets. Journal of Finance, 66(6), 2013–2053.",
    /* 12 */ "Marsh, I. W., & Payne, R. (2012). Banning short sales and market quality: The UK's experience. Journal of Banking & Finance, 36(7), 1975–1986.",
    /* 13 */ "Chang, E. C., Cheng, J. W., & Yu, Y. (2007). Short-sales constraints and price discovery: Evidence from the Hong Kong market. Journal of Finance, 62(5), 2097–2121.",
    /* 14 */ "Harrison, J. M., & Kreps, D. M. (1978). Speculative investor behavior in a stock market with heterogeneous expectations. Quarterly Journal of Economics, 92(2), 323–336.",
    /* 15 */ "Scheinkman, J. A., & Xiong, W. (2003). Overconfidence and speculative bubbles. Journal of Political Economy, 111(6), 1183–1219.",
    /* 16 */ "Bernard, V. L., & Thomas, J. K. (1989). Post-earnings-announcement drift: Delayed price response or risk premium? Journal of Accounting Research, 27(Suppl.), 1–36.",
    /* 17 */ "Amihud, Y. (2002). Illiquidity and stock returns: Cross-section and time-series effects. Journal of Financial Markets, 5(1), 31–56.",
    /* 18 */ "Asquith, P., Pathak, P. A., & Ritter, J. R. (2005). Short interest, institutional ownership, and stock returns. Journal of Financial Economics, 78(2), 243–276.",
    /* 19 */ "Grundy, B. D., Lim, B., & Verwijmeren, P. (2012). Do option markets undo restrictions on short sales? Evidence from the 2008 short-sale ban. Journal of Financial Economics, 106(2), 331–348.",
    /* 20 */ "Crane, A. D., Crotty, K., Michenaud, S., & Naranjo, P. (2019). The causal effects of short-selling bans: Evidence from eligibility thresholds. Review of Asset Pricing Studies, 9(1), 137–170.",
    /* 21 */ "Autore, D. M., Billingsley, R. S., & Kovacs, T. (2011). The 2008 short sale ban: Liquidity, dispersion of opinion, and the cross-section of returns of US financial stocks. Journal of Banking & Finance, 35(9), 2252–2266.",
    /* 22 */ "Kolasinski, A. C., Reed, A. V., & Thornock, J. R. (2013). Can short restrictions actually increase informed short selling? Financial Management, 42(1), 155–181.",
    /* 23 */ "Hendershott, T., Jones, C. M., & Menkveld, A. J. (2011). Does algorithmic trading improve liquidity? Journal of Finance, 66(1), 1–33.",
    /* 24 */ "Jones, C. M., & Lamont, O. A. (2002). Short-sale constraints and stock returns. Journal of Financial Economics, 66(2–3), 207–239.",
    /* 25 */ "Abadie, A., & Imbens, G. W. (2006). Large sample properties of matching estimators for average treatment effects. Econometrica, 74(1), 235–267.",
    /* 26 */ "Bertrand, M., Duflo, E., & Mullainathan, S. (2004). How much should we trust differences-in-differences estimates? Quarterly Journal of Economics, 119(1), 249–275.",
  ],
  body: [
    {
      id: "introduction",
      heading: "1. Introduction",
      paragraphs: [
        "When stock markets fall sharply, regulators frequently restrict short selling. During the global financial crisis, more than 30 countries imposed bans or disclosure requirements on short sales [1], and in March 2020 several European and Asian regulators imposed new bans as the COVID-19 pandemic triggered steep market declines. The rationale is that short sellers may amplify price declines, spread panic or engage in manipulative 'bear raids', so that restricting their activity can help stabilise prices. Critics counter that short sellers supply liquidity and bring negative information into prices, so that bans harm market quality without preventing fundamental declines [3][4].",
        "The empirical evidence from the 2008 episode largely supports the critics. Bans were associated with wider spreads and slower price discovery in the United States [2] and around the world [1], and in the United Kingdom [12]. However, existing studies rely mostly on a single episode in which bans were imposed simultaneously with other crisis interventions, making it difficult to separate the effects of the bans from those of the crisis itself. They also offer limited evidence on why bans harm liquidity: because short sellers include both informed traders and liquidity providers, a ban may widen spreads either because it removes liquidity supply or because it increases adverse selection.",
        "Korea offers an unusual opportunity to address these questions. The Financial Services Commission imposed market-wide short-selling bans on three occasions: in October 2008 after the collapse of Lehman Brothers, in August 2011 during the euro area debt crisis and the US sovereign downgrade, and in March 2020 at the onset of the pandemic. The three bans differ in their duration, in the market conditions that prompted them and, importantly, in their coverage: the 2011 ban exempted designated market makers and liquidity providers, while the 2008 and 2020 bans applied far more broadly. Korea also has detailed public records of short-sale balances at the stock level, which allow us to measure how exposed each stock was to the ban.",
        "We exploit these features using intraday transaction and quote data from the Korea Exchange (KRX) and KRX short-sale balance records for 2007–2020. Our design compares stocks with high short interest before each ban — which were most affected by the restriction — with matched stocks with low short interest in a difference-in-differences framework. Because all stocks experienced the same market-wide shock, the comparison isolates the effect of losing access to short sellers from the effect of market turmoil. The partial 2011 ban, which allowed market makers to continue shorting, lets us separate the liquidity-provision channel from the information channel.",
        "We find that bans substantially reduce market quality. Quoted bid-ask spreads of heavily shorted stocks widen by 18 percent relative to controls during ban periods, and the price delay measure of Hou and Moskowitz {7} rises by 0.07, indicating that prices respond more slowly to market-wide information. The 2020 ban did not stabilise prices: daily return volatility of high-short-interest stocks rose by 9 percent relative to controls. Negative earnings news is incorporated into prices roughly two trading days more slowly during bans, while the response to positive news is unaffected. In the 2011 ban, the spread effect was much smaller for stocks with active market makers, but the price delay effect was similar, suggesting that bans harm liquidity mainly by removing liquidity supply and harm price efficiency by removing informed traders.",
        "The remainder of the paper is organised as follows. Section 2 describes Korea's short-selling regulation and the three bans, Section 3 reviews the literature and Section 4 develops hypotheses. Sections 5 and 6 describe the data and empirical strategy. Section 7 presents the main results, Section 8 examines mechanisms, Section 9 reports robustness checks, and Sections 10 and 11 discuss policy implications and conclude.",
      ],
    },
    {
      id: "background",
      heading: "2. Institutional Background",
      paragraphs: [
        "Naked short selling — selling shares that have not been borrowed — has been prohibited in Korea since 2000, following a well-publicised settlement failure. Covered short selling is permitted subject to an uptick rule, which prohibits short sales at prices below the last traded price, and stock lending takes place through the Korea Securities Depository and the Korea Securities Finance Corporation as well as bilaterally. Foreign institutional investors account for the bulk of short-sale volume, with domestic institutions making up most of the rest; retail investors face limited access to stock borrowing. Since 2008, KRX has published daily short-sale volume and, since 2016, short-sale balances above disclosure thresholds.",
        "Table 1 summarises the three bans. On 1 October 2008, the Financial Services Commission banned short selling of all listed stocks; the ban on non-financial stocks was lifted in June 2009, while the ban on financial stocks remained in force until November 2013. On 10 August 2011, the Commission imposed a three-month ban on all stocks, later extended for non-financial stocks until November 2011; the 2011 ban exempted designated market makers in ETFs and equity-linked warrants and liquidity providers, which were allowed to short for hedging purposes. On 16 March 2020, following a 30 percent decline in the KOSPI over two months, the Commission imposed a six-month ban on all stocks, later extended to March 2021.",
        "Each ban was announced on the evening before it took effect, after market close, and came as a surprise to market participants. In each case, the Commission cited excessive volatility and concerns about speculative short selling, and in 2020 it also pointed to the influence of short selling on retail investor sentiment. The bans coincided with other measures, including relaxed limits on share buybacks by listed firms and, in 2020, the creation of a stock market stabilisation fund. Our design addresses such concurrent measures by comparing stocks that differ in exposure to the ban but are otherwise similar.",
      ],
      tables: [
        {
          id: "table-1",
          caption: "Table 1. Korea's market-wide short-selling bans",
          columns: ["Ban", "Start", "End (non-financial stocks)", "Coverage", "Market-maker exemption", "KOSPI change in prior 60 days (%)"],
          rows: [
            ["2008", "1 Oct 2008", "1 Jun 2009", "All listed stocks", "No", "−18.4"],
            ["2011", "10 Aug 2011", "10 Nov 2011", "All listed stocks", "Yes (ETF/ELW market makers, liquidity providers)", "−15.2"],
            ["2020", "16 Mar 2020", "15 Mar 2021 (scheduled)", "All listed stocks", "Limited", "−29.7"],
          ],
          note: "Note: The ban on financial stocks imposed in 2008 remained in force until November 2013; the 2011 extension applied only to financial stocks. Our 2020 sample ends on 30 June 2020.",
        },
      ],
    },
    {
      id: "literature",
      heading: "3. Related Literature",
      paragraphs: [
        "Theories of short-selling constraints yield two broad predictions. Miller {4} argues that when investors disagree and pessimists cannot short, prices reflect the views of optimists and are therefore too high; models of speculative trading under heterogeneous beliefs extend this argument to explain bubbles and excess volatility [14][15]. Diamond and Verrecchia {3} show that with rational market makers, short-sale constraints do not bias prices on average but slow the incorporation of private negative information, reducing price efficiency, particularly following bad news.",
        "Empirical studies support the view that short sellers are informed and contribute to price efficiency. Short sellers anticipate negative earnings surprises and trade on public news [9][10], and stocks with more active short selling incorporate information more quickly [8][5]. Cross-country evidence shows that markets where short selling is permitted exhibit more efficient prices and more negatively skewed returns [6]. In Hong Kong, stocks added to the list of securities eligible for short selling experience price declines consistent with Miller's overvaluation hypothesis [13]. Constrained stocks tend to have high subsequent returns when constraints bind, as documented for the United States [24] and in relation to short interest and institutional ownership [18].",
        "The 2008 bans generated a large literature. Boehmer, Jones and Zhang {2} find that the US ban on financial stocks led to sharp deterioration in liquidity, with spreads widening substantially, while prices of banned stocks rose. Beber and Pagano {1} use data from 30 countries and find that bans reduced liquidity, slowed price discovery and failed to support prices except in US financial stocks. Marsh and Payne {12} and Autore, Billingsley and Kovacs {21} report similar findings for the UK and for US financial stocks. Battalio and Schultz {11} and Grundy, Lim and Verwijmeren {19} show that option markets did not fully substitute for the banned short sales. Kolasinski, Reed and Thornock {22} show that restrictions may increase the share of informed short sellers. Crane and co-authors {20} use eligibility thresholds to obtain causal estimates of the effects of bans on liquidity. Our contribution is to compare three bans in a single market with different exemptions, which helps separate the channels through which bans affect market quality.",
        "Evidence on Korea itself is limited. Korean regulators and market commentators have frequently attributed sharp declines in individual stocks to foreign short sellers, and public debate over short selling intensified after the 2020 ban. Yet few studies have examined the Korean bans with transaction-level data, and none, to our knowledge, has compared all three episodes. Korea is also of independent interest because its market combines a large share of retail trading, an important role for foreign institutional investors and a strict prohibition of naked short selling, a combination that may shape both the costs of bans and the political pressure to impose them.",
      ],
    },
    {
      id: "hypotheses",
      heading: "4. Hypotheses",
      paragraphs: [
        "We organise the analysis around four hypotheses. H1 (liquidity): bans widen bid-ask spreads and reduce depth for stocks in which short sellers were active, either because short sellers supply liquidity or because their exit raises adverse selection costs for remaining liquidity providers. The effect should be larger for stocks with higher pre-ban short interest. H2 (price efficiency): bans increase the delay with which prices respond to market-wide information, consistent with Diamond and Verrecchia {3}.",
        "H3 (volatility): if short sellers destabilise prices, bans should reduce volatility; if short sellers supply liquidity and information, bans may increase volatility by reducing market depth and allowing larger price adjustments when information is eventually revealed. H4 (asymmetric information incorporation): bans should slow the incorporation of negative but not positive information, because they restrict traders who act on negative news.",
        "The 2011 exemption for market makers allows a further test. If spreads widen mainly because short-selling market makers can no longer hedge their inventory, the spread effect should be weaker for stocks with active designated market makers during the 2011 ban. If price efficiency deteriorates because informed short sellers exit, the price delay and earnings-response effects should be similar regardless of the market-maker exemption, since market makers do not trade on fundamental information.",
        "Finally, the effects of a ban should depend on how binding it is. Stocks with high pre-ban short interest and high lending fees are those in which short sellers were most active and in which the loss of short sellers should matter most. Stocks with high foreign ownership are also likely to be more affected, because foreign institutions account for most short-sale volume in Korea. We test these predictions of heterogeneous exposure alongside the main hypotheses.",
      ],
    },
    {
      id: "data",
      heading: "5. Data",
      paragraphs: [
        "We combine transaction-level data from KRX with short-sale records and firm characteristics.",
      ],
      subsections: [
        {
          id: "data-sources",
          heading: "5.1 Sources and Sample",
          paragraphs: [
            "Intraday trade and quote data for all common stocks listed on the KOSPI and KOSDAQ markets come from the KRX market data service and cover January 2007 to June 2020. We compute daily time-weighted quoted spreads, effective spreads, depth at the best quotes, the Amihud {17} illiquidity measure and realised volatility from five-minute returns. Short-sale volume and balances come from KRX records; for the 2008 and 2011 bans, which predate the public disclosure of balances, we use non-public stock lending balances from the Korea Securities Depository. Accounting data and earnings announcement dates come from the FnGuide database, and analyst forecasts from the same source.",
            "We exclude stocks priced below KRW 1,000, stocks designated for administrative supervision or investment caution, and stocks with fewer than 100 trading days in the year before each ban. We also exclude financial stocks, since the bans on financial stocks were extended beyond those on other stocks. The final sample contains 1,684 stocks for the 2008 ban, 1,712 for the 2011 ban and 2,038 for the 2020 ban.",
          ],
        },
        {
          id: "data-treatment",
          heading: "5.2 Treatment and Control Groups",
          paragraphs: [
            "For each ban, we define short interest as the average short-sale balance divided by shares outstanding over the 60 trading days before the ban. Treated stocks are those in the top quintile of short interest; candidate controls are stocks in the bottom three quintiles. We match each treated stock to a control stock in the same market (KOSPI or KOSDAQ) using nearest-neighbour matching on log market capitalisation, book-to-market ratio, share turnover, pre-ban return volatility and pre-ban quoted spreads, with bias-corrected matching estimators used in robustness checks [25].",
            "Table 2 reports pre-ban characteristics. Before matching, high-short-interest stocks are larger, more liquid and more widely held by foreign investors than other stocks. After matching, differences in size, turnover, volatility and spreads are small and statistically insignificant. Average short interest in the treated group ranges from 3.1 percent of shares outstanding in 2008 to 4.6 percent in 2020, compared with less than 0.3 percent in the control group.",
          ],
          tables: [
            {
              id: "table-2",
              caption: "Table 2. Pre-ban characteristics of treated and matched control stocks (pooled across bans)",
              columns: ["Variable", "Treated (high short interest)", "Matched controls", "Difference", "t-statistic"],
              rows: [
                ["Short interest (% of shares)", "3.84", "0.21", "3.63", "41.2"],
                ["Log market capitalisation (KRW billion)", "6.12", "6.05", "0.07", "0.84"],
                ["Book-to-market ratio", "0.94", "0.97", "−0.03", "−0.61"],
                ["Daily turnover (%)", "1.42", "1.36", "0.06", "0.77"],
                ["Quoted spread (bp)", "38.6", "39.4", "−0.8", "−0.45"],
                ["Daily return volatility (%)", "2.71", "2.66", "0.05", "0.52"],
                ["Foreign ownership (%)", "14.8", "13.9", "0.9", "1.21"],
                ["KOSPI-listed (share)", "0.47", "0.47", "0.00", "0.00"],
                ["Number of treated stocks", "1,087", "1,087", "", ""],
              ],
              note: "Note: Characteristics are averages over the 60 trading days before each ban. Matching is within market and ban episode. The number of treated stocks pools 332 (2008), 342 (2011) and 413 (2020) stocks.",
            },
          ],
        },
      ],
    },
    {
      id: "strategy",
      heading: "6. Empirical Strategy",
      paragraphs: [
        "Our baseline specification is Y_it = β·(HighSI_i × Ban_t) + α_i + γ_pt + ε_it, estimated separately for each ban and pooled across bans, where Y_it is a market-quality measure for stock i on day t, HighSI_i indicates a treated stock, Ban_t indicates days on which the ban was in force, α_i are stock fixed effects and γ_pt are pair-by-day fixed effects that absorb all shocks common to each matched pair. The estimation window covers 60 trading days before and the ban period up to 120 trading days after its start, or up to 30 June 2020 for the 2020 ban. Standard errors are clustered by stock and by day.",
      ],
      subsections: [
        {
          id: "strategy-measures",
          heading: "6.1 Measures of Market Quality",
          paragraphs: [
            "Liquidity is measured by the log of the time-weighted quoted spread, the effective spread, depth at the best quotes and the Amihud illiquidity measure. Price efficiency is measured by the price delay measure of Hou and Moskowitz {7}, estimated over rolling 20-day windows from regressions of daily stock returns on contemporaneous and four lags of market returns; it equals one minus the ratio of the R-squared of a model with only the contemporaneous market return to that of the full model, so that higher values indicate slower adjustment. Volatility is measured by the log of daily realised volatility from five-minute returns.",
            "To study information incorporation, we estimate cumulative abnormal returns around earnings announcements with unexpected earnings measured against analyst consensus forecasts, in the spirit of the post-earnings-announcement drift literature [16]. We measure the speed of incorporation as the number of trading days after the announcement needed for the cumulative abnormal return to reach 90 percent of its 20-day value.",
          ],
        },
        {
          id: "strategy-identification",
          heading: "6.2 Identification",
          paragraphs: [
            "The key assumption is that, absent the ban, market quality of high- and low-short-interest stocks would have evolved in parallel. Because short sellers may be particularly active in stocks whose fundamentals are deteriorating, high-short-interest stocks might have experienced worse liquidity during market turmoil even without a ban. We address this concern in three ways. First, matching on pre-ban liquidity and volatility ensures that treated and control stocks were similar before the ban. Second, we estimate dynamic specifications that test for differential pre-trends. Third, we compare outcomes when the bans were lifted: if treated stocks recover their liquidity when short selling resumes, it is unlikely that the effects reflect fundamental deterioration.",
          ],
        },
      ],
    },
    {
      id: "results",
      heading: "7. Results",
      paragraphs: [
        "We present results on liquidity, price efficiency and volatility in turn, before turning to information incorporation in Section 8.",
      ],
      subsections: [
        {
          id: "results-liquidity",
          heading: "7.1 Liquidity",
          paragraphs: [
            "Table 3 reports the effects of the bans on liquidity. Pooled across bans, quoted spreads of heavily shorted stocks widen by 18 percent relative to matched controls during ban periods. Effective spreads widen by 15 percent, depth at the best quotes falls by 11 percent, and the Amihud illiquidity measure rises by 21 percent. The spread effect is largest for the 2008 ban (23 percent), when there was no market-maker exemption and market conditions were most severe, and smallest for the 2011 ban (10 percent).",
            "Figure 1 shows the dynamics of the spread effect for the pooled sample. Before the bans, the coefficients are small and insignificant, supporting the parallel trends assumption. Spreads widen immediately after the bans are imposed, with the effect stabilising at around 18 percent after the first two weeks. When the bans on non-financial stocks were lifted in 2009 and 2011, spreads of treated stocks returned to their pre-ban levels relative to controls within about a month, indicating that the effects reflect the bans rather than persistent changes in stock characteristics.",
        "The spread effect is larger where the ban was more binding. Among treated stocks, those in the top half of pre-ban foreign ownership experienced a spread increase of 23 percent, compared with 13 percent for those in the bottom half, consistent with the dominant role of foreign institutions in Korean short selling. The effect is also larger for stocks with higher pre-ban lending fees, which proxy for strong demand for short positions relative to lendable supply. In contrast, the effect does not vary systematically with firm size once short interest is controlled for, suggesting that the liquidity costs of bans are not confined to small, illiquid stocks.",
          ],
          tables: [
            {
              id: "table-3",
              caption: "Table 3. Effects of short-selling bans on liquidity",
              columns: ["Outcome", "Pooled", "2008 ban", "2011 ban", "2020 ban"],
              rows: [
                ["Log quoted spread", "0.180***", "0.231***", "0.104***", "0.196***"],
                ["", "(0.028)", "(0.047)", "(0.031)", "(0.042)"],
                ["Log effective spread", "0.151***", "0.192***", "0.089***", "0.167***"],
                ["", "(0.026)", "(0.044)", "(0.029)", "(0.039)"],
                ["Log depth at best quotes", "−0.112***", "−0.146***", "−0.061**", "−0.124***"],
                ["", "(0.023)", "(0.038)", "(0.027)", "(0.035)"],
                ["Log Amihud illiquidity", "0.209***", "0.264***", "0.128***", "0.226***"],
                ["", "(0.035)", "(0.058)", "(0.042)", "(0.051)"],
                ["Stock-days", "381,240", "117,520", "121,060", "142,660"],
              ],
              note: "Note: Coefficients on HighSI × Ban from difference-in-differences regressions with stock and pair-by-day fixed effects. Standard errors two-way clustered by stock and day in parentheses. ** p < 0.05, *** p < 0.01.",
            },
          ],
          figures: [
            {
              id: "figure-1",
              caption: "Figure 1. Dynamic effect of bans on log quoted spreads (pooled across bans)",
              kind: "line",
              xLabels: ["−60", "−40", "−20", "0", "20", "40", "60", "80", "100", "120"],
              yLabel: "Difference in log quoted spread",
              series: [
                {
                  name: "Estimate",
                  values: [0.008, -0.011, 0.004, 0.092, 0.176, 0.184, 0.181, 0.187, 0.179, 0.175],
                  lower: [-0.041, -0.058, -0.043, 0.041, 0.118, 0.124, 0.119, 0.122, 0.112, 0.104],
                  upper: [0.057, 0.036, 0.051, 0.143, 0.234, 0.244, 0.243, 0.252, 0.246, 0.246],
                },
              ],
              marker: 2,
              note: "Note: Coefficients on HighSI interacted with 20-trading-day bins relative to the start of each ban, with 95 percent confidence intervals. The bin before the ban is the reference. The dashed line marks the start of the ban.",
            },
          ],
        },
        {
          id: "results-efficiency",
          heading: "7.2 Price Efficiency",
          paragraphs: [
            "Table 4 shows that the bans reduced price efficiency. The price delay measure of treated stocks rises by 0.07 relative to controls in the pooled sample, from a pre-ban mean of 0.31, implying that a substantially larger share of the response of stock prices to market returns occurs with a lag. The effect is similar across the three bans, ranging from 0.06 in 2011 to 0.08 in 2008. Variance ratios computed from intraday returns move further from one for treated stocks, and the first-order autocorrelation of daily returns rises, consistent with slower adjustment to information.",
            "These results are consistent with the evidence from the 2008 episode in other countries [1][2] and with the role of short sellers in price discovery documented in normal times [5][8]. They indicate that the bans removed traders whose activity helped prices to adjust to market-wide news, a finding that is difficult to reconcile with the view that short sellers primarily destabilise prices.",
          ],
          tables: [
            {
              id: "table-4",
              caption: "Table 4. Effects of short-selling bans on price efficiency and volatility",
              columns: ["Outcome", "Pooled", "2008 ban", "2011 ban", "2020 ban", "Pre-ban mean (treated)"],
              rows: [
                ["Price delay (Hou–Moskowitz)", "0.070***", "0.081***", "0.062***", "0.068***", "0.31"],
                ["", "(0.014)", "(0.024)", "(0.019)", "(0.021)", ""],
                ["|Daily return autocorrelation|", "0.031***", "0.036**", "0.027**", "0.030**", "0.08"],
                ["", "(0.009)", "(0.015)", "(0.012)", "(0.013)", ""],
                ["Log realised volatility", "0.072***", "0.083**", "0.041", "0.090***", ""],
                ["", "(0.021)", "(0.035)", "(0.026)", "(0.029)", ""],
                ["Stock-days", "381,240", "117,520", "121,060", "142,660", ""],
              ],
              note: "Note: Coefficients on HighSI × Ban from difference-in-differences regressions with stock and pair-by-day fixed effects. Standard errors two-way clustered by stock and day in parentheses. ** p < 0.05, *** p < 0.01.",
            },
          ],
        },
        {
          id: "results-volatility",
          heading: "7.3 Volatility",
          paragraphs: [
            "The bans did not stabilise prices. The third row of Table 4 shows that realised volatility of heavily shorted stocks rose relative to controls during the bans. For the 2020 ban, which was explicitly motivated by excessive volatility, daily return volatility of high-short-interest stocks rose by 9 percent relative to controls. The effect is also positive for the 2008 ban, but small and statistically insignificant for the 2011 ban, when market makers could continue to short.",
            "Price levels tell a similar story. Treated stocks did not outperform controls during the bans: cumulative abnormal returns of high-short-interest stocks over the first 20 trading days of the 2020 ban were −0.4 percent, statistically indistinguishable from zero. This contrasts with the positive price effects found for US financial stocks in 2008 [2], which coincided with large government support for banks. In Korea, the bans appear to have reduced market depth without removing selling pressure, so that prices moved more for a given order flow.",
          ],
        },
      ],
    },
    {
      id: "mechanisms",
      heading: "8. Mechanisms: Market Makers and Information",
      paragraphs: [
        "Table 5 exploits the market-maker exemption in the 2011 ban. We split treated stocks into those that were constituents of ETFs or underlying assets of equity-linked warrants with designated market makers, whose market makers could continue to short for hedging, and those without such market makers. Among stocks with active market makers, quoted spreads widened by only 5 percent during the 2011 ban, compared with 16 percent for stocks without market makers. In contrast, the price delay effect was similar in both groups: 0.06 for stocks with market makers and 0.07 for those without. In the 2008 ban, when market makers were not exempt, spreads widened by similar amounts in both groups.",
        "These patterns suggest that bans affect liquidity and price efficiency through different channels. The spread effect operates largely through liquidity provision: when market makers can hedge with short sales, they continue to supply liquidity, and spreads widen little. The price delay effect operates through information: market makers' hedging trades do not carry fundamental information, so their exemption does not preserve price efficiency. This decomposition is consistent with evidence that short sellers include both liquidity providers and informed traders [9][10][22].",
        "We next examine the incorporation of earnings news. Figure 2 plots the speed of incorporation of earnings surprises for treated stocks during and outside ban periods. For negative surprises, the number of trading days needed for cumulative abnormal returns to reach 90 percent of their 20-day value rises from 2.6 days outside ban periods to 4.7 days during bans — roughly two trading days more slowly. For positive surprises, the speed of incorporation is essentially unchanged. The asymmetry is consistent with Diamond and Verrecchia {3}: by preventing pessimistic investors from trading on negative information, bans delay its incorporation into prices.",
      ],
      tables: [
        {
          id: "table-5",
          caption: "Table 5. Market-maker exemption and the channels of ban effects",
          columns: ["Outcome", "2011: with market makers", "2011: without market makers", "2008: with market makers", "2008: without market makers"],
          rows: [
            ["Log quoted spread", "0.052*", "0.161***", "0.224***", "0.236***"],
            ["", "(0.029)", "(0.039)", "(0.061)", "(0.055)"],
            ["Log depth at best quotes", "−0.021", "−0.098***", "−0.139***", "−0.151***"],
            ["", "(0.026)", "(0.033)", "(0.049)", "(0.044)"],
            ["Price delay", "0.058***", "0.067***", "0.078**", "0.083***"],
            ["", "(0.022)", "(0.024)", "(0.033)", "(0.029)"],
            ["Treated stocks", "148", "194", "131", "201"],
          ],
          note: "Note: Stocks with market makers are constituents of ETFs or underlying assets of equity-linked warrants with designated market makers before each ban. In 2011, these market makers were exempt from the ban; in 2008, they were not. Standard errors two-way clustered by stock and day in parentheses. * p < 0.10, ** p < 0.05, *** p < 0.01.",
        },
      ],
      figures: [
        {
          id: "figure-2",
          caption: "Figure 2. Speed of incorporation of earnings surprises, treated stocks",
          kind: "bar",
          xLabels: ["Negative surprise", "Positive surprise"],
          yLabel: "Trading days to 90% of 20-day CAR",
          series: [
            { name: "Outside ban periods", values: [2.6, 2.3] },
            { name: "During bans", values: [4.7, 2.4] },
          ],
          note: "Note: Average number of trading days after the announcement needed for the cumulative abnormal return to reach 90 percent of its 20-day value, for high-short-interest stocks, pooled across bans.",
        },
      ],
    },
    {
      id: "robustness",
      heading: "9. Robustness",
      paragraphs: [
        "Table 6 reports robustness checks for the pooled spread and price delay effects. Defining treatment by the top tercile rather than the top quintile of short interest yields somewhat smaller effects, consistent with a dose-response relationship. Using a continuous measure of short interest, a one-standard-deviation increase in pre-ban short interest raises spreads by 7 percent during bans. Using bias-corrected matching estimators [25] or matching on industry in addition to the baseline characteristics leaves the estimates largely unchanged. Estimates for KOSPI and KOSDAQ separately are similar, although the spread effect is larger on KOSDAQ, where liquidity is generally lower.",
        "We also conduct placebo tests. Assigning placebo ban dates one year before each actual ban yields small and insignificant estimates. Restricting the sample to stocks with low short interest and comparing the second quintile with the bottom three quintiles also yields small effects, indicating that the results are not driven by differences in characteristics correlated with short interest that might respond differently to market turmoil. Clustering standard errors by industry rather than by stock, following the advice of Bertrand, Duflo and Mullainathan {26}, increases standard errors modestly but leaves all main estimates significant at the 1 percent level.",
        "A remaining concern is that the effects might reflect the rise of algorithmic trading over our sample period, which affected liquidity supply [23]. Because algorithmic traders were active in both treated and control stocks and our design compares matched pairs within each ban episode, this trend should be absorbed by pair-by-day fixed effects. Consistent with this, the estimated effects do not increase over time across the three bans.",
        "We also examine whether the 2020 results are affected by the unusual surge in retail trading that followed the onset of the pandemic, when new retail brokerage accounts in Korea increased sharply. If retail investors concentrated their purchases in stocks with high short interest, the resulting order flow could affect liquidity and volatility independently of the ban. Controlling for the daily share of retail trading volume in each stock, available from KRX investor-type statistics, reduces the 2020 volatility effect only slightly, from 9.0 to 8.4 percent, and leaves the spread effect unchanged. The results are therefore not explained by differences in retail order flow between treated and control stocks.",
      ],
      tables: [
        {
          id: "table-6",
          caption: "Table 6. Robustness checks (pooled across bans)",
          columns: ["Specification", "Log quoted spread", "Std. error", "Price delay", "Std. error"],
          rows: [
            ["Baseline", "0.180***", "(0.028)", "0.070***", "(0.014)"],
            ["Top tercile of short interest", "0.141***", "(0.025)", "0.057***", "(0.013)"],
            ["Continuous short interest (per s.d.)", "0.071***", "(0.012)", "0.026***", "(0.006)"],
            ["Bias-corrected matching", "0.173***", "(0.030)", "0.068***", "(0.015)"],
            ["Matching within industry", "0.186***", "(0.031)", "0.072***", "(0.016)"],
            ["KOSPI only", "0.152***", "(0.035)", "0.064***", "(0.018)"],
            ["KOSDAQ only", "0.204***", "(0.039)", "0.075***", "(0.019)"],
            ["Placebo: one year before each ban", "0.011", "(0.024)", "0.004", "(0.012)"],
            ["Industry-clustered standard errors", "0.180***", "(0.034)", "0.070***", "(0.018)"],
          ],
          note: "Note: Each row reports coefficients on HighSI × Ban from a separate difference-in-differences regression with stock and pair-by-day fixed effects. *** p < 0.01.",
        },
      ],
    },
    {
      id: "discussion",
      heading: "10. Discussion and Policy Implications",
      paragraphs: [
        "Our results suggest that Korea's short-selling bans imposed substantial costs on market quality without delivering the price stability that motivated them. Spreads of heavily shorted stocks widened by 18 percent, prices became less efficient, and volatility rose rather than fell. To gauge the economic magnitude, the 18 percent increase in quoted spreads implies additional round-trip trading costs of about 7 basis points for treated stocks, which, applied to their trading volume during the 2020 ban, amounts to several hundred billion won in additional costs borne by investors, many of them retail traders the bans were meant to protect.",
        "The comparison of the three bans offers lessons for policy design. First, exempting market makers, as in 2011, substantially reduced the liquidity costs of the ban, suggesting that if regulators choose to restrict short selling, they should preserve the ability of liquidity providers to hedge. Second, exemptions do not preserve price efficiency, because informed short sellers are still excluded; the slower incorporation of negative earnings news during bans implies that prices of affected stocks may be persistently too high while bans are in force, with potential consequences for capital allocation. Third, bans did not reduce volatility even when imposed in response to it, which casts doubt on the central rationale offered by regulators in 2020.",
        "These conclusions align with international evidence from 2008 [1][2][12] and suggest that alternatives to blanket bans — such as enhanced disclosure of large short positions, stricter enforcement against naked short selling and circuit breakers targeted at individual stocks — may achieve regulators' objectives at lower cost. At the time of writing, the debate over whether to lift the 2020 ban remains active in Korea, and our evidence suggests that the costs of maintaining it are substantial.",
      ],
    },
    {
      id: "conclusion",
      heading: "11. Conclusion",
      paragraphs: [
        "We have studied the effects of Korea's three market-wide short-selling bans on market quality. Comparing heavily shorted stocks with matched controls, we find that bans widened quoted spreads by 18 percent, raised price delay by 0.07, increased volatility by 9 percent in the 2020 ban, and slowed the incorporation of negative earnings news by about two trading days. The market-maker exemption of the 2011 ban reduced the liquidity costs but not the price efficiency costs, revealing that short sellers contribute both liquidity and information to the market.",
        "Future research could examine the long-run consequences of bans for corporate financing decisions, the behaviour of retail investors during and after bans, and the interaction between short-selling restrictions and derivative markets, where some of the demand for short exposure may migrate. The eventual lifting of the 2020 ban will also provide an opportunity to study whether a partial reopening, limited to large stocks, can capture the benefits of short selling while addressing regulators' concerns.",
      ],
    },
    {
      id: "appendix",
      heading: "Appendix A. Variable Construction",
      paragraphs: [
        "Spreads and depth. Quoted spreads are computed from the best bid and ask prices recorded at each quote update and weighted by the time each quote is outstanding during continuous trading, excluding the opening and closing call auctions. Effective spreads equal twice the absolute difference between the trade price and the prevailing quote midpoint, weighted by trade size. Depth is the sum of shares available at the best bid and ask, in KRW million.",
        "Price delay. For each stock and each rolling 20-day window, we regress daily returns on the contemporaneous market return and four lags. Price delay equals one minus the ratio of the R-squared from the restricted model with only the contemporaneous market return to the R-squared of the unrestricted model. The market return is the value-weighted return of all stocks listed on the same market.",
        "Earnings surprises. Unexpected earnings are actual quarterly operating income minus the consensus forecast in the month before the announcement, scaled by the share price. Abnormal returns are computed relative to a market model estimated over trading days −250 to −30. Speed of incorporation is computed for surprises in the top and bottom quintiles of unexpected earnings.",
        "Inference. Standard errors are two-way clustered by stock and trading day. Wild cluster bootstrap p-values with 999 replications are below 0.01 for the pooled spread and price delay estimates.",
      ],
    },
  ],
};
